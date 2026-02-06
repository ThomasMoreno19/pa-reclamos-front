"use client"

import { useParams } from "next/navigation"
import { ReasignarAreaForm } from "@/features/dashboard/empleado/reclamos/components/reasignar-area-form"
import { ReclamoDetailShell } from "@/features/dashboard/empleado/reclamos/components/reclamo-detail-shell"

export default function ReasignarAreaPage() {
  const params = useParams()
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id

  if (!id) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Reasignar área</h1>
      </div>
      <ReclamoDetailShell
        reclamoId={id}
        renderForm={(reclamo, currentCambioEstado) => (
          <ReasignarAreaForm
            reclamoId={id}
            currentAreaId={reclamo.areaId || currentCambioEstado?.area?.id}
          />
        )}
      />
    </div>
  )
}
