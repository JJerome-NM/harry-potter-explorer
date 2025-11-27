import type { RouteObject } from "react-router"
import { CharacterDetailsPage, CharactersPage, ErrorPage } from "@pages"

export const charactersRoutes: RouteObject[] = [
  {
    index: true,
    element: <CharactersPage />,
    errorElement: <ErrorPage title="Oops! Wizards unavailable" />
  },
  {
    path: ":characterId",
    element: <CharacterDetailsPage />
  }
]
