import { createBrowserRouter } from "react-router"
import { RootLayout } from "../../components/root-layout/root-layout.tsx"
import { HomePage } from "../../pages/home-page/home-page.tsx"
import { charactersRoutes } from "@app/routes/characters-routes.tsx"

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
      }
    ]
  }
])
