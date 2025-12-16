"use client"

import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useAuthStore } from "@/stores/auth"

export interface Proyecto {
  id: string
  clienteId: string
  tipoProyectoId: string
  nombre: string
  descripcion?: string
}

/**
 * Hook para listar proyectos del cliente autenticado usando TanStack Query
 * Usa la API global: api.proyectos.listar
 */
export function useProyectos() {
  const token = useAuthStore((state) => state.auth?.access_token)

  return useQuery<Proyecto[]>({
    queryKey: ["proyectos"],
    enabled: !!token,
    queryFn: async () => {
      if (!token) throw new Error("No hay token de autenticación")
      return api.proyectos.listar(token) as Promise<Proyecto[]>
    },
  })
}

