import { Firebase } from "../services/Firebase"
import { FirebaseUtils } from "../utils/FirebaseUtils"
import {
  AuthenticateWithGoogleReturnType,
  IAuthRepository,
  IsAuthenticatedReturnType,
} from "../interfaces/IAuthRepository"
import { UserEntity } from "../entities/UserEntity"

export class FirebaseAuthRepository
  extends FirebaseUtils
  implements IAuthRepository {
  constructor(private firebase: Firebase) {
    super()
  }

  async authenticateWithGoogle(): Promise<AuthenticateWithGoogleReturnType> {
    const provider = this.firebase.google()

    try {
      const response = await this.firebase.auth().signInWithPopup(provider)
      if (!response.user)
        return {
          authenticated: false,
          error: "auth/user-not-found",
          user: null,
        }

      const user = {
        email: response.user.email,
        username: response.user.displayName,
        id: response.user.uid,
        image: response.user.photoURL,
      } as UserEntity

      return {
        authenticated: true,
        error: null,
        user,
      }
    } catch (error) {
      return { authenticated: false, error, user: null }
    }
  }

  async logout(): Promise<{ success: boolean }> {
    await this.firebase.auth().signOut()
    return { success: true }
  }

  isAuthenticated(): Promise<IsAuthenticatedReturnType> {
    return new Promise((resolve, reject) => {
      this.firebase.auth().onAuthStateChanged(async authenticated => {
        if (authenticated) {
          const user = {
            email: authenticated.email,
            username: authenticated.displayName,
            id: authenticated.uid,
            image: authenticated.photoURL,
          } as UserEntity

          return resolve({ authenticated: true, user })
        }

        return resolve({ authenticated: false, user: null })
      })
    })
  }
}
