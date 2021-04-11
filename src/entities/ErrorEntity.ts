export type Errors =
  | "auth/invalid-email"
  | "auth/user-not-found"
  | "auth/invalid-password"
  | "auth/user-exist"
  | "auth/password-validation-failed"
  | "auth/wrong-password"
  | "auth/weak-password"
  | "auth/email-already-in-use"
  | "auth/auth-domain-config-required"
  | "auth/operation-not-supported-in-this-environment"
  | "auth/unauthorized-domain"

export class ErrorEntity {
  constructor(private error: Errors) {}

  getMessage() {
    if (this.error === "auth/invalid-password")
      return "Le mot de passe ne correspond pas"
    if (this.error === "auth/wrong-password")
      return "Le mot de passe ne correspond pas"
    if (this.error === "auth/user-not-found") return "L'email ne correspond pas"
    if (this.error === "auth/password-validation-failed")
      return "Les mots de passe ne sont pas identiques"
    if (this.error === "auth/weak-password")
      return "Le mot de passe est trop faible"

    return "Une erreur est survenue"
  }
}
