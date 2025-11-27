import { useCharactersGetAll } from "../../api/characters/queries/use-characters-get-all.tsx"
import { CharacterCard } from "@components"

export const CharactersList = () => {
  const { characters } = useCharactersGetAll()
  return (
    <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
      {characters.map(item => (
        <CharacterCard
          key={item.id}
          data={item}
        />
      ))}
    </div>
  )
}
