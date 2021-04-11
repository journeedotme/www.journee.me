import { UserEntity, UserWithoutIdEntity } from "../entities/UserEntity"

import {
  IAuthRepository,
  IsAuthenticatedReturnType,
  AuthenticateWithGoogleReturnType,
} from "../interfaces/IAuthRepository"

export class InMemoryAuthRepository implements IAuthRepository {
  private users: Map<UserEntity["id"], UserEntity> = new Map()
  private authenticated: UserEntity["id"] | null = null

  async logout(): Promise<{ success: boolean }> {
    return { success: true }
  }

  async getUserByEmail(user: { email: string }) {
    return Array.from(this.users.values()).find(
      ({ email }) => user.email === email
    )
  }

  async register(user: UserWithoutIdEntity) {
    const alreadyExists = await this.getUserByEmail(user)

    if (alreadyExists)
      return {
        authenticated: false,
        user: null,
        error: "auth/email-already-in-use",
      }

    const entity: UserEntity = {
      ...user,
      id: String(Math.random()),
    }

    this.users.set(entity.id, entity)
    this.authenticated = entity.id

    return { authenticated: true, user: entity, error: null }
  }

  async getUserById(id: UserEntity["id"]) {
    return this.users.get(id) || null
  }

  async authenticateWithGoogle(): Promise<AuthenticateWithGoogleReturnType> {
    if (!this.authenticated)
      return {
        authenticated: false,
        error: "auth/unauthorized-domain",
        user: null,
      }

    const user = (await this.getUserById(this.authenticated)) as UserEntity

    return { authenticated: true, user, error: null }
  }

  async isAuthenticated(): Promise<IsAuthenticatedReturnType> {
    if (!this.authenticated) return { authenticated: false, user: null }

    const user = (await this.getUserById(this.authenticated)) as UserEntity

    if (!user) return { authenticated: false, user: null }

    return { authenticated: true, user: user }
  }
}
