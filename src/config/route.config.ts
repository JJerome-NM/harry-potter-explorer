import { CharactersRoutesConfig } from "./routes/characters-routes.config.ts"
import { SpellsRoutesConfig } from "./routes/spells-routes.config.ts"

const basePath = "" as const

export const routeConfig = {
  characters: new CharactersRoutesConfig(basePath),
  spells: new SpellsRoutesConfig(basePath)
} as const
