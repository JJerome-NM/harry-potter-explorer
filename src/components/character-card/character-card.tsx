import { Card, CardDescription, CardHeader, CardTitle } from "@ui-kit/card.tsx"
import { Link } from "react-router"
import { routeConfig } from "@config/route.config.ts"
import { CharacterImage } from "@components"
import type { Character } from "../../api/characters/characters.types.ts"

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
            <p>Actor - {data.actor || "N/A"}</p>
            <p>Home - {data.house || "N/A"}</p>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
