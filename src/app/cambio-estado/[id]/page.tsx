"use client"

import { useParams } from "next/navigation"
import { CambioEstadoForm } from "@/features/dashboard/empleado/reclamos/components/cambio-estado-form"
import { ReclamoDetailShell } from "@/features/dashboard/empleado/reclamos/components/reclamo-detail-shell"

export default function CambioEstadoPage() {
  const params = useParams()
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id

  if (!id) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Cambiar estado</h1>
      </div>
      <ReclamoDetailShell
        reclamoId={id}
        renderForm={(reclamo) => (
          <CambioEstadoForm reclamoId={id} currentStatus={reclamo.status} />
        )}
      />
    </div>
  )
}
