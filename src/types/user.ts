export type UserRole = "client" | "admin" | "support"

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  avatarUrl?: string
}
