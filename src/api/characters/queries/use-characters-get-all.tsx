import { useSuspenseQuery } from "@tanstack/react-query"
import { charactersService } from "../characters.service.ts"

export const useCharactersGetAll = () => {
  const props = useSuspenseQuery(charactersService.getCharactersQueryOptions())
  return { characters: props.data, ...props }
}
