import { useSuspenseQuery } from "@tanstack/react-query"
import { spellsService } from "../spells.service.ts"

export const useSpellsGetAll = () => {
  const props = useSuspenseQuery(spellsService.getAllQueryOptions())
  return { spells: props.data, ...props }
}
