import { describe, it, expect } from 'vitest'
import { leadSchema } from '#shared/schemas/lead'
import * as v from 'valibot'

describe('Lead Schema', () => {
  it('accepts valid email with consent', () => {
    const result = v.safeParse(leadSchema, {
      email: 'test@example.com',
      name: 'Test User',
      consent: true,
      source: 'landing'
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.output.email).toBe('test@example.com')
      expect(result.output.name).toBe('Test User')
      expect(result.output.consent).toBe(true)
    }
  })

  it('accepts valid email without name key', () => {
    const result = v.safeParse(leadSchema, {
      email: 'test@example.com',
      consent: true
    })
    if (!result.success) {
      console.log('Validation issues:', result.issues)
    }
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.output.name).toBe('')
    }
  })

  it('rejects invalid email', () => {
    const result = v.safeParse(leadSchema, {
      email: 'invalid-email',
      consent: true
    })
    expect(result.success).toBe(false)
  })

  it('rejects missing consent', () => {
    const result = v.safeParse(leadSchema, {
      email: 'test@example.com',
      consent: false
    })
    expect(result.success).toBe(false)
  })

  it('rejects missing email', () => {
    const result = v.safeParse(leadSchema, {
      consent: true
    })
    expect(result.success).toBe(false)
  })

  it('rejects email too long', () => {
    const longEmail = 'a'.repeat(250) + '@example.com'
    const result = v.safeParse(leadSchema, {
      email: longEmail,
      consent: true
    })
    expect(result.success).toBe(false)
  })

  it('includes honeypot in output (server strips it)', () => {
    const result = v.safeParse(leadSchema, {
      email: 'test@example.com',
      consent: true,
      honeypot: 'bot-value'
    })
    if (!result.success) {
      console.log('Honeypot validation issues:', result.issues)
    }
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.output.honeypot).toBe('bot-value')
    }
  })
})