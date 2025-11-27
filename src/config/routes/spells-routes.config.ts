
export class SpellsRoutesConfig {
  private readonly _basePath

  constructor(basePath: string) {
    this._basePath = `${basePath}/spells`
  }

  spells() {
    return `${this._basePath}`
  }

  spell(spellId: string) {
    return `${this._basePath}/${spellId}`
  }
}
