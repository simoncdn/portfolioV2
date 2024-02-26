<script setup>
import { cn } from '@/utils/helper'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
defineProps({
  isActive: Boolean
})
</script>

<template>
  <div
    :class="
      cn(
        'desktop-only fixed z-30 top-0 left-0 pointer-events-none',
        'w-1.5 h-1.5',
        'bg-light-grey rounded-full',
        'translate-x-1/2 translate-y-1/2 mix-blend-difference',
        'transition-all duration-0'
      )
    "
    :style="{
      transform: isActive ? `translate(${x - 40}px, ${y - 40}px)` : `translate(${x}px, ${y}px)`,
      transition: isActive ? 'all 0.2s linear' : '',
      width: isActive ? '80px' : '',
      height: isActive ? '80px' : '',
      backgroundColor: isActive ? 'var(--cream)' : ''
    }"
  ></div>
  <div
    :class="
      cn(
        'desktop-only fixed z-30 top-0 left-0 pointer-events-none',
        'w-10 h-10',
        'bg-transparent border border-light-grey rounded-full',
        'translate-x-1/2 translate-y-1/2 mix-blend-difference',
        'transition-all duration-75'
      )
    "
    :style="{
      transform: `translate(${x - 17}px, ${y - 17}px)`,
      border: isActive ? 'none' : '',
      transition: 'all 0.2s linear'
    }"
  ></div>
</template>
