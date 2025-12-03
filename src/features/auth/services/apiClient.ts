
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

type SimpleHeaders = Record<string, string>

export interface ApiClientOptions extends Omit<RequestInit, "headers"> {
  skipAuth?: boolean
  headers?: SimpleHeaders
}

/**
 * Main API client function
 * Handles HTTP requests with automatic auth, error handling, and type safety
 */
export async function apiClient<T = unknown>(
  endpoint: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const { skipAuth, ...fetchOptions } = options
  const token = skipAuth ? null : localStorage.getItem("access_token")

  const headers: SimpleHeaders = {
    "Content-Type": "application/json",
    ...(fetchOptions.headers ?? {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }

  const url = `${API_URL}${endpoint}`

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
  })

  return response.json() as Promise<T>
}
