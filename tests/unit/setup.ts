import { vi } from 'vitest'

vi.mock('#imports', () => ({
  useHead: vi.fn(),
  useSeoMeta: vi.fn(),
  useSchemaOrg: vi.fn(),
  useColorMode: () => ({ value: 'dark', preference: 'dark' }),
  useAsyncData: vi.fn(),
  useFetch: vi.fn(),
  useState: vi.fn(),
  useCookie: vi.fn(),
  useRouter: vi.fn(),
  useRoute: vi.fn(),
  navigateTo: vi.fn(),
  defineNuxtComponent: vi.fn(),
  defineNuxtPlugin: vi.fn(),
  defineNuxtRouteMiddleware: vi.fn(),
  defineNuxtModule: vi.fn(),
  addRouteMiddleware: vi.fn(),
  setResponseStatus: vi.fn(),
  createError: vi.fn(),
  useRequestHeaders: vi.fn(),
  useRequestEvent: vi.fn(),
  useRuntimeConfig: () => ({
    public: {
      siteUrl: 'http://localhost:3000',
      appUrl: '',
      analyticsDomain: ''
    }
  })
}))

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn()
}))