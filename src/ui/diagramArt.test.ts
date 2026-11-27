import { describe, expect, it } from 'vitest'
import { diagrams } from '../content'
import { diagramArt } from './diagramArt'

describe('diagram art', () => {
  it('draws exactly the regions each diagram defines', () => {
    for (const [id, def] of Object.entries(diagrams)) {
      const art = diagramArt[id as keyof typeof diagramArt]
      expect(art, id).toBeDefined()
      expect(art.regions.map((r) => r.id).sort(), id).toEqual(def.regions.map((r) => r.id).sort())
    }
  })
})
