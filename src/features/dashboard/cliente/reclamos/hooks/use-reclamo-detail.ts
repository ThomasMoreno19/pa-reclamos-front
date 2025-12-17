"use client"

import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/api"
import { useAuthStore } from "@/stores/auth"

// Type for the raw API claim response
interface ApiClaimResponse {
  id: string
  descripcion?: string
  tipoReclamo?: {
    nombre?: string
  }
  prioridad?: string
  criticidad?: string
  estado?: string
  archivo?: string
  createdAt?: string
  updatedAt?: string
  proyecto?: {
    clienteId?: string
  }
}

// Transform API response to match our Claim interface (same as claimService)
function transformApiClaim(apiClaim: ApiClaimResponse) {
  return {
    id: apiClaim.id,
    title: apiClaim.descripcion?.substring(0, 50) + "..." || "Reclamo sin título",
    description: apiClaim.descripcion || "",
    type: apiClaim.tipoReclamo?.nombre?.toLowerCase().replace(/\s+/g, '_') || "incident",
    priority: apiClaim.prioridad?.toLowerCase() || "media",
    criticality: apiClaim.criticidad?.toLowerCase() || "media",
    status: mapApiStatus(apiClaim.estado || "PENDIENTE"),
    attachments: apiClaim.archivo ? [apiClaim.archivo] : [],
    createdAt: new Date(apiClaim.createdAt || Date.now()),
    updatedAt: new Date(apiClaim.updatedAt || Date.now()),
    userId: apiClaim.proyecto?.clienteId || "",
  }
}

function mapApiStatus(apiStatus: string) {
  const statusMap: Record<string, string> = {
    'PENDIENTE': 'pending',
    'EN_PROCESO': 'in_progress',
    'RESUELTO': 'resolved',
  }
  return statusMap[apiStatus] || 'pending'
}

export function useReclamoDetail(reclamoId: string) {
  const token = useAuthStore((state) => state.auth?.access_token)
  const hasHydrated = useAuthStore((state) => state._hasHydrated)

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/8f337eaa-df85-4f3b-bcd3-5878307ad2bc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'use-reclamo-detail.ts:52', message: 'useReclamoDetail hook called', data: { reclamoId, hasToken: !!token, tokenValue: token?.substring(0, 10), hasHydrated }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'H1,H2,H5' }) }).catch(() => { });
  // #endregion

  const reclamoQuery = useQuery({
    queryKey: ["reclamo", reclamoId],
    queryFn: async () => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/8f337eaa-df85-4f3b-bcd3-5878307ad2bc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'use-reclamo-detail.ts:59', message: 'queryFn executing', data: { reclamoId, hasToken: !!token }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'H1,H2' }) }).catch(() => { });
      // #endregion

      if (!token) throw new Error("No authentication token")

      try {
        // Use the cambio-estado endpoint as the user indicated
        console.log('Fetching reclamo detail using cambio-estado endpoint for ID:', reclamoId)
        console.log('Using token:', token ? 'present' : 'missing')
        console.log('API Base URL:', process.env.NEXT_PUBLIC_BACKEND_URL)

        const response = await api.cambioEstado.obtenerHistorialPorReclamo(reclamoId, token)
        console.log('API Response from cambio-estado:', response)

        if (Array.isArray(response) && response.length > 0) {
          // The cambio-estado endpoint returns an array of state changes
          // We'll use the first item to construct basic reclamo info
          const firstStateChange = response[0]

          // Create a basic reclamo object from the state change data
          // The description field contains the claim description
          const claim: ReturnType<typeof transformApiClaim> = {
            id: firstStateChange.reclamoId,
            title: firstStateChange.descripcion?.substring(0, 50) + "..." || "Reclamo sin título",
            description: firstStateChange.descripcion || "",
            type: "incident", // Default type since not in state change
            priority: "MEDIA", // Default priority since not in state change
            criticality: "MEDIA", // Default criticality since not in state change
            status: mapApiStatus(firstStateChange.estado),
            attachments: [], // No attachments in state change data
            createdAt: new Date(firstStateChange.fechaInicio),
            updatedAt: new Date(firstStateChange.fechaInicio),
            userId: firstStateChange.clienteId,
          }

          console.log('Constructed claim from cambio-estado:', claim)
          return claim
        }

        // If no state changes found, throw error
        console.error('No state changes found for reclamo ID:', reclamoId)
        throw new Error("Reclamo no encontrado o no tienes permisos para verlo")
      } catch (error) {
        console.error('Error fetching reclamo detail:', error)
        throw error
      }
    },
    enabled: !!token && !!reclamoId,
  })

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/8f337eaa-df85-4f3b-bcd3-5878307ad2bc', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'use-reclamo-detail.ts:98', message: 'useQuery result', data: { enabled: !!token && !!reclamoId, hasToken: !!token, hasReclamoId: !!reclamoId, reclamoId, isLoading: reclamoQuery.isLoading, isFetching: reclamoQuery.isFetching, status: reclamoQuery.status }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'run1', hypothesisId: 'H1,H2,H4' }) }).catch(() => { });
  // #endregion

  return reclamoQuery
}
