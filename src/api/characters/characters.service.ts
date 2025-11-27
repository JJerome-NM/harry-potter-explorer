import { API_URL } from "@config/servers.config.ts"
import { queryOptions } from "@tanstack/react-query"
import { apiInstance } from "../api-instance.ts"
import type { Character } from "./characters.types.ts"

class CharactersService {
  private url = `${API_URL}/api/characters`
  public queryKeys = ["api", "characters"]

  getCharactersQueryOptions() {
    return queryOptions({
      queryKey: [...this.queryKeys, "list"],
      queryFn: async meta => {
        return apiInstance.get<Character[]>(this.url, { signal: meta.signal })
      },
      select: data => data.data,
      staleTime: 60_000
    })
  }
}

export const charactersService = new CharactersService()