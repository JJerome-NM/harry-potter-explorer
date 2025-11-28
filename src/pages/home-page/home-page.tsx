import { Link } from "react-router"
import { PageHeader } from "@components"
import { SidebarInset } from "@ui-kit/sidebar.tsx"
import { Button } from "@ui-kit/button.tsx"
import { routeConfig } from "@config"

export const HomePage = () => {
  return (
    <SidebarInset>
      <PageHeader>Home</PageHeader>

      <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)] p-6 text-center animate-in fade-in duration-700">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-4">
            <span className="inline-block p-5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-4xl">⚡️</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              Welcome to the <br />
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Wizarding World
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Explore the database of Hogwarts students, staff, and the magical spells
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-white p-6 text-base bg-gray-900 hover:bg-gray-800"
              asChild>
              <Link to={routeConfig.characters.characters()}>🧙 Meet Characters</Link>
            </Button>
            <Button
              size="lg"
              className="p-6 text-base"
              asChild>
              <Link to={routeConfig.spells.spells()}>✨ Discover Spells</Link>
            </Button>
          </div>
        </div>
      </div>
    </SidebarInset>
  )
}
