// Utilidades para guardar/limpiar credenciales de auth en el cliente

export function saveAuthToken(token: string) {
  // En entornos sin window (SSR / tests) no hacemos nada
  if (typeof window === "undefined") return

  try {
    window.localStorage.setItem("access_token", token)
  } catch {
    // Ignoramos errores de almacenamiento (por ejemplo, modo incógnito estricto)
  }

  try {
    // Cookie accesible por el proxy/middleware en el servidor
    document.cookie = `access_token=${token}; path=/`
  } catch {
    // Ignoramos errores de cookie
  }
}

export function clearAuthToken() {
  if (typeof window === "undefined") return

  try {
    window.localStorage.removeItem("access_token")
  } catch {
    // ignore
  }

  try {
    // Borramos la cookie expirándola en el pasado
    document.cookie = "access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
  } catch {
    // ignore
  }
}


