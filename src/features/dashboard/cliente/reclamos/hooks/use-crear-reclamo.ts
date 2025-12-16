"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useAuthStore } from "@/stores/auth"

export interface CrearReclamoPayload {
  tipoReclamoId: string
  proyectoId: string
  areaId: string
  descripcion: string
  prioridad: string
  criticidad: string
}

/**
 * Hook para crear un reclamo usando TanStack Query
 * Usa la API global: api.reclamos.crear
 */
export function useCrearReclamo() {
  const token = useAuthStore((state) => state.auth?.access_token)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (payload: CrearReclamoPayload) => {
      if (!token) throw new Error("No hay token de autenticación")
      return api.reclamos.crear(payload, token)
    },
    onSuccess: () => {
      // Invalidar la query de reclamos para refrescar la lista
      queryClient.invalidateQueries({ queryKey: ["reclamos"] })
    },
  })
}

