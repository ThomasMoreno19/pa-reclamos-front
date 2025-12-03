import { MainLayout } from "@/components/layout/main-layout"
import { ClaimForm } from "@/features/claims/components/claim-form"

export default function Home() {
  return (
    <MainLayout>
      <ClaimForm />
    </MainLayout>
  )
}
