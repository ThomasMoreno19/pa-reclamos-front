import { MainLayout } from "@/components/layout/main-layout"
import { ClaimList } from "@/features/claims/components/claim-list"

export default function ClaimsPage() {
  return (
    <MainLayout>
      <ClaimList />
    </MainLayout>
  )
}
