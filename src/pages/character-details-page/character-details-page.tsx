import { CharacterImage, DetailRow, LoaderWithDetails, NotFoundWithDetails, PageHeader } from "@components"
import { SidebarInset } from "@ui-kit/sidebar.tsx"
import { useCharactersGetById } from "../../api/characters/queries/use-characters-get-by-id.tsx"
import { useParams } from "react-router"

export const CharacterDetailsPage = () => {
  const { characterId } = useParams()
  const { character, isLoading, isError } = useCharactersGetById(characterId)

  if (isLoading) {
    return (
      <SidebarInset>
        <PageHeader>Character Details</PageHeader>
        <LoaderWithDetails title="Fetching wizard profiles..." />
      </SidebarInset>
    )
  }

  if (isError || !character) {
    return (
      <SidebarInset>
        <PageHeader>Character Details</PageHeader>
        <NotFoundWithDetails title="Could not load character details. The wizard might be hiding" />
      </SidebarInset>
    )
  }

  return (
    <SidebarInset>
      <PageHeader>Character Details</PageHeader>

      <div className="p-4 md:p-6 max-w-4xl w-full">
        <article className="flex flex-col md:flex-row gap-6 animate-in fade-in duration-500">
          <div className="shrink-0">
            <div className="w-full sm:w-72 aspect-3/4 overflow-hidden rounded-xl">
              <CharacterImage
                src={character.image}
                alt={character.name}
              />
            </div>
          </div>

          <div className="grow space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {character.name}
              </h1>
              {character.alternate_names?.length > 0 && (
                <p className="text-sm text-muted-foreground mt-1 italic">aka {character.alternate_names.join(", ")}</p>
              )}
            </div>

            <div>
              <dl className="grid grid-cols-2 gap-3">
                <DetailRow
                  label="House"
                  value={character.house}
                />
                <DetailRow
                  label="Date of Birth"
                  value={character.dateOfBirth}
                />
                <DetailRow
                  label="Actor"
                  value={character.actor}
                />
                <DetailRow
                  label="Species"
                  value={character.species}
                />
                <DetailRow
                  label="Ancestry"
                  value={character.ancestry}
                />
                <DetailRow
                  label="Patronus"
                  value={character.patronus}
                />
              </dl>
            </div>
          </div>
        </article>
      </div>
    </SidebarInset>
  )
}
