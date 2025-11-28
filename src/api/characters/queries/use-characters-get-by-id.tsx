import { useSuspenseQuery } from "@tanstack/react-query"
import { charactersService } from "../characters.service.ts"

export const useCharactersGetById = (id?: string) => {
  const props = useSuspenseQuery(charactersService.getCharacterByIdQueryOptions(id))
  return { character: props.data, ...props }
}
