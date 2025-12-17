"use client"

import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useAuthStore } from "@/stores/auth"

export interface CambioEstado {
  id: string
  reclamoId: string
  areaId: string
  fechaInicio: string
  fechaFin: string | null
  descripcion: string
  estado: string
  empleadoId: string | null
  clienteId: string
}

export function useCambioEstado(reclamoId: string) {
  const token = useAuthStore((state) => state.auth?.access_token)

  return useQuery<CambioEstado[]>({
    queryKey: ["cambio-estado", reclamoId],
    queryFn: async () => {
      if (!token) throw new Error("No authentication token")
      const response = await api.cambioEstado.obtenerHistorialPorReclamo(reclamoId, token)
      return response as CambioEstado[]
    },
    enabled: !!token && !!reclamoId,
  })
}
