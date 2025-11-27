import { SidebarInset } from "@ui-kit/sidebar.tsx"
import { CharacterCardSkeleton, CharactersList, PageHeader } from "@components"
import { Suspense } from "react"

const CharactersLoader = () => (
  <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
    {Array.from({ length: 10 }).map((_, i) => (
      <CharacterCardSkeleton key={i} />
    ))}
  </div>
)

export const CharactersPage = () => {
  return (
    <SidebarInset>
      <PageHeader>Harry Potter Characters</PageHeader>
      <Suspense fallback={<CharactersLoader />}>
        <CharactersList />
      </Suspense>
    </SidebarInset>
  )
}
