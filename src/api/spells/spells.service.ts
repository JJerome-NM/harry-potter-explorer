import { API_URL } from "@config/servers.config.ts"
import { queryOptions } from "@tanstack/react-query"
import { apiInstance } from "../api-instance.ts"

class SpellsService {
  private url = `${API_URL}/api/spells`
  public queryKeys = ["api", "spells"]

  getAllQueryOptions() {
    return queryOptions({
      queryKey: [...this.queryKeys, "list"],
      queryFn: meta => {
        return apiInstance.get(this.url, { signal: meta.signal })
      },
      select: data => data.data,
      staleTime: 60_000
    })
  }
}

export const spellsService = new SpellsService()
