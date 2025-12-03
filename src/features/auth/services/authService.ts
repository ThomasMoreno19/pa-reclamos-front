import type { AuthData } from "../types/auth"
import { apiClient } from "./apiClient"

export interface LoginCredentials {
  email: string
  contraseña: string
}

export interface RegisterCredentials {
  email: string
  contraseña: string
  nombre: string
  telefono: string
}

type AuthCall<Payload> = (payload: Payload) => Promise<AuthData>

interface AuthEndpoint<Payload> {
  path: string
  call: AuthCall<Payload>
}

const login: AuthEndpoint<LoginCredentials> = {
  path: "/auth/login",
  call: (credentials) =>
    apiClient<AuthData>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      skipAuth: true,
    }),
}

const register: AuthEndpoint<RegisterCredentials> = {
  path: "/auth/register-cliente",
  call: (credentials) =>
    apiClient<AuthData>("/auth/register-cliente", {
      method: "POST",
      body: JSON.stringify(credentials),
      skipAuth: true,
    }),
}

export const authApi = {
  login,
  register,
}
