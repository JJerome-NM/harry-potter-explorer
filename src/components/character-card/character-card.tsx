import { Card, CardDescription, CardHeader, CardTitle } from "@ui-kit/card.tsx"
import type { Character } from "../../api/characters/characters.types.ts"
import { Link } from "react-router"
import { routeConfig } from "@config/route.config.ts"
import { CharacterImage } from "../character-image/character-image.tsx"

type Props = {
  data: Character
}

export const CharacterCard = ({ data }: Props) => {
  return (
    <Link to={routeConfig.characters.character(data.id)}>
      <Card className="pt-0 overflow-hidden">
        <CharacterImage
          src={data.image}
          alt={data.name}
        />
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription className="flex flex-col">
            <span>Actor - {data.actor || "Unknown"}</span>
            <span>Home - {data.house || "Unknown"}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
