import { useQuery } from "@tanstack/react-query"
import { charactersService } from "../characters.service.ts"

export const useCharactersGetAll = () => {
  const props = useQuery(charactersService.getCharactersQueryOptions())
  return { characters: props.data, ...props }
}