"use client"

import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useAuthStore } from "@/stores/auth"

export interface Area {
  id: string
  nombre: string
  descripcion?: string
}

/**
 * Hook para listar áreas usando TanStack Query
 * Usa la API global: api.areas.listar
 */
export function useAreas() {
  const token = useAuthStore((state) => state.auth?.access_token)

  return useQuery<Area[]>({
    queryKey: ["areas"],
    enabled: !!token,
    queryFn: async () => {
      if (!token) throw new Error("No hay token de autenticación")
      return api.areas.listar(token) as Promise<Area[]>
    },
  })
}

