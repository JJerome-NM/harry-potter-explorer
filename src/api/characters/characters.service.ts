import { API_URL } from "@config/servers.config.ts"
import { queryOptions } from "@tanstack/react-query"
import { apiInstance } from "../api-instance.ts"
import type { Character } from "./characters.types.ts"

class CharactersService {
  private url = `${API_URL}/api`
  public queryKeys = ["api", "characters"]

  getCharactersQueryOptions() {
    return queryOptions({
      queryKey: [...this.queryKeys, "list"],
      queryFn: async meta => {
        return apiInstance.get<Character[]>(`${this.url}/characters`, { signal: meta.signal })
      },
      select: data => data.data,
      staleTime: 60_000
    })
  }

  getCharacterByIdQueryOptions(id?: string) {
    return queryOptions({
      queryKey: [...this.queryKeys, id],
      queryFn: async meta => {
        return apiInstance.get<Character[]>(`${this.url}/character/${id}`, { signal: meta.signal })
      },
      select: data => data.data[0],
      staleTime: 60_000
    })
  }
}

export const charactersService = new CharactersService()
