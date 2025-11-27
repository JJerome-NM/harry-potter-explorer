import type { RouteObject } from "react-router"
import { ErrorPage, SpellsPage } from "@pages"

export const spellsRoutes: RouteObject[] = [
  {
    index: true,
    element: <SpellsPage />,
    errorElement: <ErrorPage title="Oops! Spells unavailable" />
  }
]
