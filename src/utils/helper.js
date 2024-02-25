import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...classes) => {
  return twMerge(clsx(...classes))
}

export function getCurrentTextColor(sectionAnchor) {
  switch (sectionAnchor) {
    case 'home':
      return 'var(--black)'
    case 'about':
      return 'var(--white)'
    case 'work':
      return 'var(--black)'
    case 'contact':
      return 'var(--black)'
    default:
      return 'var(--black)'
  }
}
