import { describe, it, expect } from 'vitest'
import { featuredTitles, getVerifiedTitles } from '~/data/titles'

describe('Titles Data', () => {
  it('has featured titles', () => {
    expect(featuredTitles.length).toBeGreaterThan(0)
  })

  it('all titles have required fields', () => {
    featuredTitles.forEach(title => {
      expect(title.id).toBeTypeOf('string')
      expect(title.title).toBeTypeOf('string')
      expect(title.year).toBeTypeOf('number')
      expect(title.genre).toBeTypeOf('string')
      expect(title.rating).toBeTypeOf('number')
      expect(title.poster).toBeTypeOf('string')
      expect(title.verified).toBeTypeOf('boolean')
    })
  })
})

describe('Verified Filter', () => {
  it('returns only verified titles', () => {
    const verified = getVerifiedTitles()
    verified.forEach(title => {
      expect(title.verified).toBe(true)
    })
  })

  it('excludes non-verified titles', () => {
    const verified = getVerifiedTitles()
    const allVerified = featuredTitles.filter(t => t.verified)
    expect(verified).toHaveLength(allVerified.length)
  })

  it('returns empty array if none verified', () => {
    const allUnverified = featuredTitles.map(t => ({ ...t, verified: false }))
    const filtered = allUnverified.filter(t => t.verified)
    expect(filtered).toHaveLength(0)
  })
})