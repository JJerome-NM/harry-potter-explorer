import { createBrowserRouter } from "react-router"
import { RootLayout } from "@components/root-layout"
import { HomePage } from "@pages/home-page"
import { charactersRoutes } from "@app/routes/characters-routes.tsx"
import { spellsRoutes } from "@app/routes/spells-routes.tsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "characters",
        children: charactersRoutes
      },
      {
        path: "spells",
        children: spellsRoutes
      }
    ]
  }
])
