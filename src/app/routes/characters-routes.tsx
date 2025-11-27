import type { RouteObject } from "react-router"
import { CharactersPage } from "../../pages/characters-page/characters-page.tsx"

export const charactersRoutes: RouteObject[] = [
  {
    index: true,
    element: <CharactersPage />
  },
  {
    path: ":characterId",
    element: <div>Character with id</div>
  }
]