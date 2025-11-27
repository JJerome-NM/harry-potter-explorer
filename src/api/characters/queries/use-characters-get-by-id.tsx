import { useQuery } from "@tanstack/react-query"
import { charactersService } from "../characters.service.ts"

export const useCharactersGetById = (id?: string) => {
  const props = useQuery(charactersService.getCharacterByIdQueryOptions(id))
  return { character: props.data, ...props }
}
