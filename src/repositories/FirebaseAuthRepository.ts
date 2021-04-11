import { Firebase } from "../services/Firebase"
import { FirebaseUtils } from "../utils/FirebaseUtils"
import {
  AuthenticateReturnType,
  AuthenticateWithGoogleReturnType,
  IAuthRepository,
  IsAuthenticatedReturnType,
  RegisterReturnType,
} from "../interfaces/IAuthRepository"
import { UserEntity, UserWithPassword } from "../entities/UserEntity"

export class FirebaseAuthRepository
  extends FirebaseUtils
  implements IAuthRepository {
  private collection = "users"

  constructor(private firebase: Firebase) {
    super()
  }

  async updateInfo(
    id: string,
    infos: { firstName: string; lastName: string }
  ): Promise<UserEntity | null> {
    await this.firebase
      .database()
      .collection(this.collection)
      .doc(id)
      .update(infos)
    return this.getInfo(id)
  }

  async authenticateWithCredentials(params: {
    email: string
    password: string
  }): Promise<AuthenticateReturnType> {
    try {
      const response = await this.firebase
        .auth()
        .signInWithEmailAndPassword(params.email, params.password)

      if (!response.user)
        return {
          error: "auth/user-not-found",
          authenticated: false,
          user: null,
        }

      const user = await this.getInfo(response.user.uid)

      if (!user)
        return {
          error: "auth/user-not-found",
          authenticated: false,
          user: null,
        }

      return { authenticated: true, error: null, user }
    } catch (error) {
      return { authenticated: false, error: error.code, user: null }
    }
  }

  authenticateWithGoogle(): Promise<AuthenticateWithGoogleReturnType> {
    const provider = this.firebase.google()

    return this.firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = {
          ...(result.additionalUserInfo?.profile || {}),
          ...(result.user || {}),
        } as UserEntity

        // //@ts-ignore
        // return createOrUpdateUser(user.uid, {
        //   //@ts-ignore
        //   id: user.uid,
        //   //@ts-ignore
        //   email: user.email,
        //   //@ts-ignore
        //   username: user.name,
        //   //@ts-ignore
        //   lastName: user.family_name,
        //   //@ts-ignore
        //   firstName: user.given_name,
        // })
      })
  }

  async getInfo(id: string): Promise<UserEntity | null> {
    return this.firebase
      .database()
      .collection(this.collection)
      .doc(id)
      .get()
      .then(ref => {
        if (!ref.exists) return null

        return {
          ...ref.data(),
        } as UserEntity
      })
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    return this.firebase
      .database()
      .collection(this.collection)
      .where("user.email", "==", email)
      .get()
      .then(snapshots => {
        const users = this.mapQuerySnapshot<UserEntity>(snapshots)
        if (users.length > 0) return users[0]
        return null
      })
  }

  async logout(): Promise<{ success: boolean }> {
    await this.firebase.auth().signOut()
    return { success: true }
  }

  isAuthenticated(): Promise<IsAuthenticatedReturnType> {
    return new Promise((resolve, reject) => {
      this.firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          const infos = await this.getInfo(user.uid)
          if (infos) return resolve({ authenticated: true, user: infos })
          return resolve({ authenticated: false, user: null })
        }

        return resolve({ authenticated: false, user: null })
      })
    })
  }

  async register(user: UserWithPassword): Promise<RegisterReturnType> {
    const exists = await this.findByEmail(user.email)

    if (exists)
      return {
        authenticated: false,
        user: null,
        error: "auth/email-already-in-use",
      }

    const created = await this.firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)

    const id = created.user?.uid as string
    const entity = { ...user, id }
    await this.firebase
      .database()
      .collection(this.collection)
      .doc(id)
      .set(entity)

    return { authenticated: true, user: entity, error: null }
  }

  async forgotPassword(email: string): Promise<{ success: boolean }> {
    try {
      await this.firebase.auth().sendPasswordResetEmail(email)

      return { success: true }
    } catch (error) {
      return { success: false }
    }
  }
}
