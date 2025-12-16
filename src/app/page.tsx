import { MainLayout } from "@/components/layout/main-layout"
import { CrearReclamoForm } from "@/features/dashboard/cliente/reclamos/components/crear-reclamo-form"

export default function Home() {
  return (
    <MainLayout>
      <CrearReclamoForm />
    </MainLayout>
  )
}
