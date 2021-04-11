import { UserEntity } from "../entities/UserEntity"

export type AuthenticateWithGoogleReturnErrorType =
  | "auth/auth-domain-config-required"
  | "auth/operation-not-supported-in-this-environment"
  | "auth/unauthorized-domain"

export type AuthenticateWithGoogleReturnType =
  | {
      authenticated: true
      user: UserEntity
      error: null
    }
  | {
      authenticated: false
      error: AuthenticateWithGoogleReturnErrorType
      user: null
    }

export type IsAuthenticatedReturnType =
  | {
      user: UserEntity
      authenticated: true
    }
  | {
      authenticated: false
      user: null
    }

export interface IAuthRepository {
  authenticateWithGoogle(): Promise<AuthenticateWithGoogleReturnType>
  isAuthenticated(): Promise<IsAuthenticatedReturnType>
  logout(): Promise<{ success: boolean }>
}
