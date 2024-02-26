import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ANCHORS } from './object'

export const cn = (...classes) => {
  return twMerge(clsx(...classes))
}

export function getCurrentTextColor(sectionAnchor) {
  switch (sectionAnchor) {
    case ANCHORS.HOME:
      return 'var(--black)'
    case ANCHORS.ABOUT:
      return 'var(--white)'
    case ANCHORS.WORK:
      return 'var(--black)'
    case ANCHORS.CONTACT:
      return 'var(--black)'
    default:
      return 'var(--black)'
  }
}
