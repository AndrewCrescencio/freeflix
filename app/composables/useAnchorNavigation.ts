import { onMounted, onUnmounted } from 'vue'

export function useAnchorNavigation() {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      ;(element as HTMLElement).focus({ preventScroll: true })
    }
  }

  const handleAnchorClick = (event: MouseEvent) => {
    const link = (event.target as HTMLElement).closest('a[href^="#"]')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href || href === '#') return

    const target = document.querySelector(href)
    if (target) {
      event.preventDefault()
      scrollToSection(href)
      history.pushState(null, '', href)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleAnchorClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleAnchorClick)
  })

  return { scrollToSection }
}