export interface UserEntity {
  id: string
  username: string | null
  image: string | null
  email: string
}

export type UserWithoutIdEntity = Omit<UserEntity, "id">
