// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { getDefaultAttributes } from 'eslint-plugin-better-tailwindcss/api/defaults'

export default withNuxt(
  betterTailwindcss.configs['correctness-error'],
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
        attributes: [
          ...getDefaultAttributes(),
          ['^v-bind:ui$', [{ match: 'objectValues' }]]
        ],
        safelist: [
          // Custom animations
          'animate-fade-in-up',
          // Prose classes (from @tailwindcss/typography)
          'prose',
          'prose-invert',
          'prose-sm',
          'prose-lg',
          'prose-xl',
          'max-w-none',
          // Lucide icons as classes
          /^i-lucide-/,
          // Scroll snap
          'scroll-snap-x',
          'snap-mandatory',
          'snap-start',
          'snap-center',
          'snap-end',
          // Nuxt UI semantic colors
          'bg-neutral',
          'text-primary-inverted',
          'bg-destructive/10',
          'border-destructive/20',
          'text-destructive',
          'bg-success/10',
          'border-success/20',
          'text-success',
          // Grid
          'grid-cols-1',
          'md:grid-cols-2',
          'lg:grid-cols-3',
          'lg:grid-cols-5',
          // Flexbox
          'flex-col',
          'md:flex-row',
          // Spacing
          'space-y-2',
          'space-y-3',
          'space-y-4',
          'space-y-6',
          'space-y-8',
          'gap-1',
          'gap-2',
          'gap-3',
          'gap-4',
          'gap-6',
          'gap-8',
          // Container
          'container',
          'mx-auto',
          // Sizing
          'w-5',
          'h-5',
          'w-6',
          'h-6',
          'w-8',
          'h-8',
          'w-16',
          'h-16',
          'min-w-[200px]',
          'min-w-[240px]',
          'max-w-xs',
          'max-w-md',
          'max-w-2xl',
          'max-w-3xl',
          'max-w-5xl',
          // Typography
          'text-xs',
          'text-sm',
          'text-base',
          'text-lg',
          'text-xl',
          'text-2xl',
          'text-3xl',
          'text-4xl',
          'font-medium',
          'font-semibold',
          'font-bold',
          'tracking-tight',
          'truncate',
          'whitespace-nowrap',
          // Colors
          'text-muted',
          'text-default',
          'text-primary',
          'text-secondary',
          'text-amber-400',
          'text-amber-950',
          'bg-primary/20',
          'bg-amber-500/20',
          'bg-amber-500/90',
          'bg-slate-950',
          'bg-slate-950/90',
          'bg-slate-950/70',
          'bg-slate-950/95',
          'bg-slate-800',
          'border-default',
          'border-primary',
          'border-primary/25',
          'border-neutral',
          // Background
          'bg-default',
          'bg-elevated',
          'bg-elevated/30',
          'bg-elevated/50',
          'bg-default/80',
          'bg-default/50',
          'bg-white/10',
          // Effects
          'backdrop-blur-xl',
          'backdrop-blur-sm',
          // Border radius
          'rounded-sm',
          'rounded-md',
          'rounded-lg',
          'rounded-xl',
          'rounded-2xl',
          'rounded-full',
          // Shadows
          'shadow-lg',
          // Transitions
          'transition-colors',
          'transition-transform',
          'transition-opacity',
          'duration-200',
          'duration-300',
          'duration-500',
          // Hover/Focus states
          'hover:text-default',
          'hover:text-primary',
          'hover:bg-primary/15',
          'hover:scale-105',
          'hover:opacity-100',
          'focus-visible:outline-3',
          'focus-visible:outline-primary/25',
          // Positioning
          'relative',
          'absolute',
          'fixed',
          'sticky',
          'top-0',
          'bottom-8',
          'left-1/2',
          'right-4',
          'inset-0',
          'z-10',
          'z-50',
          '-translate-x-1/2',
          '-ms-1',
          // Overflow
          'overflow-hidden',
          'overflow-x-auto',
          'whitespace-nowrap',
          // Object fit
          'object-cover',
          'object-contain',
          // Pointer events
          'pointer-events-none',
          // Select none
          'select-none',
          // Cursor
          'cursor-pointer',
          // User select
          'sr-only',
          'not-sr-only',
          // Print
          'print:hidden'
        ]
      }
    },
    rules: {
      'better-tailwindcss/no-unknown-classes': 'warn'
    }
  }
)