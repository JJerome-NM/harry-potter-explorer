
export class CharactersRoutesConfig {
  private readonly _basePath

  constructor(basePath: string) {
    this._basePath = `${basePath}/characters`
  }

  characters() {
    return `${this._basePath}`
  }

  character(characterId: string) {
    return `${this._basePath}/${characterId}`
  }
}
