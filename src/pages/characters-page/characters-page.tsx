import { useCharactersGetAll } from "../../api/characters/queries/use-characters-get-all.tsx"
import { SidebarInset, SidebarTrigger } from "@ui-kit/sidebar.tsx"
import { Separator } from "@ui-kit/separator.tsx"
import { CharacterCard } from "../../components/character-card/character-card.tsx"

export const CharactersPage = () => {
  const { characters } = useCharactersGetAll()

  return (
    <SidebarInset>
      <header className="flex sticky top-0 z-10 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger />
        <Separator
          orientation="vertical"
          className="m-2 data-[orientation=vertical]:h-6"
        />
        Harry Potter Characters
      </header>

      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
        {characters?.map(item => (
          <CharacterCard
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </SidebarInset>
  )
}
