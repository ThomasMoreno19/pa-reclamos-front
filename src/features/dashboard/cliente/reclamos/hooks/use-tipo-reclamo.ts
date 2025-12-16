"use client"

import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useAuthStore } from "@/stores/auth"

export interface TipoReclamo {
  id: string
  nombre: string
  descripcion?: string
}

/**
 * Hook para listar tipos de reclamo usando TanStack Query
 * Usa la API global: api.tipoReclamo.listar
 */
export function useTipoReclamo() {
  const token = useAuthStore((state) => state.auth?.access_token)

  return useQuery<TipoReclamo[]>({
    queryKey: ["tipo-reclamo"],
    enabled: !!token,
    queryFn: async () => {
      if (!token) throw new Error("No hay token de autenticación")
      return api.tipoReclamo.listar(token) as Promise<TipoReclamo[]>
    },
  })
}

