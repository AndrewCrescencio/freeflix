export interface Title {
  id: string
  title: string
  year: number
  genre: string
  rating: number
  poster: string
  verified: boolean
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  recommended?: boolean
  ctaText: string
}

export interface Testimonial {
  id: string
  author: string
  role: string
  content: string
  avatar?: string
  verified: boolean
}

export interface FaqItem {
  label: string
  content: string
}

export interface Lead {
  email: string
  name?: string
  consent: boolean
  source: string
}

export interface LeadSubmitResponse {
  success: boolean
  message: string
}

export interface AnalyticsEvent {
  name: string
  params: Record<string, unknown>
}