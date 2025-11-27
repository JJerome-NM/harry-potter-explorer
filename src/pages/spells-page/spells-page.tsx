import { SidebarInset } from "@ui-kit/sidebar.tsx"
import { LoaderWithDetails, PageHeader, SpellsTable } from "@components"
import { Suspense } from "react"

export const SpellsPage = () => {
  return (
    <SidebarInset>
      <PageHeader>Spells</PageHeader>
      <div className="p-3">
        <Suspense fallback={<LoaderWithDetails title="Fetching spells" />}>
          <SpellsTable />
        </Suspense>
      </div>
    </SidebarInset>
  )
}
