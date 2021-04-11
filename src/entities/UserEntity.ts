export interface UserEntity {
  id: string
  username: string | null
  firstName: string | null
  lastName: string | null
  email: string
}

export type UserWithoutIdEntity = Omit<UserEntity, "id">
