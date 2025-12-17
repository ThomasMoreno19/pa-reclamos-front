import { ReclamoDetail } from "@/features/dashboard/cliente/reclamos/components/reclamo-detail"

interface ReclamoDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ReclamoDetailPage({ params }: ReclamoDetailPageProps) {
  // #region agent log
  if (typeof window !== 'undefined') {
    fetch('http://127.0.0.1:7242/ingest/8f337eaa-df85-4f3b-bcd3-5878307ad2bc',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.tsx:9',message:'ReclamoDetailPage rendering',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'H2'})}).catch(()=>{});
  }
  // #endregion

  const { id } = await params

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Detalle del Reclamo</h1>
      </div>
      <ReclamoDetail reclamoId={id} />
    </div>
  )
}
