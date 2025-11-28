import { LoaderWithDetails, PageHeader } from "@components"
import { SidebarInset } from "@ui-kit/sidebar.tsx"
import { Suspense } from "react"
import { CharacterDetails } from "@components/character-details"

export const CharacterDetailsPage = () => {
  return (
    <SidebarInset>
      <PageHeader>Character Details</PageHeader>

      <Suspense fallback={<LoaderWithDetails title="Fetching wizard profiles..." />}>
        <CharacterDetails />
      </Suspense>
    </SidebarInset>
  )
}
