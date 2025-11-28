import { CharacterImage, DetailRow } from "@components"
import { useCharactersGetById } from "../../api/characters/queries/use-characters-get-by-id.tsx"
import { useParams } from "react-router"

export const CharacterDetails = () => {
  const { characterId } = useParams()
  const { character } = useCharactersGetById(characterId)

  const detailItems: { label: string; value: string | null }[] = [
    { label: "House", value: character.house },
    { label: "Date of Birth", value: character.dateOfBirth },
    { label: "Actor", value: character.actor },
    { label: "Species", value: character.species },
    { label: "Ancestry", value: character.ancestry },
    { label: "Patronus", value: character.patronus }
  ]

  const characterAlternateNames = !!character.alternate_names?.length && character.alternate_names.join(", ")

  return (
    <div className="p-3 max-w-4xl w-full">
      <article className="flex flex-col md:flex-row gap-6 animate-in fade-in duration-500">
        <div className="shrink-0">
          <div className="w-full border max-w-72 sm:w-72 aspect-3/4 overflow-hidden rounded-xl">
            <CharacterImage
              src={character.image}
              alt={character.name}
            />
          </div>
        </div>

        <div className="grow space-y-6">
          <h1 className="text-4xl font-bold">{character.name}</h1>
          {characterAlternateNames && (
            <p className="text-sm text-muted-foreground mt-1 italic">aka {characterAlternateNames}</p>
          )}

          <dl className="grid grid-cols-2 gap-3">
            {detailItems.map(item => (
              <DetailRow
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </dl>
        </div>
      </article>
    </div>
  )
}
