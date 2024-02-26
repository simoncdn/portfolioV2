<script setup>
import { cn } from '@/utils/helper'

const linksList = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/simoncdna/'
  },
  {
    name: 'Github',
    link: 'https://github.com/simoncdn'
  },
  {
    name: 'Email',
    link: 'mailto:cdna.simon@gmail.com'
  }
]
</script>

<template>
  <div
    id="footer"
    :class="
      cn(
        'fixed bottom-0 left-0 right-0',
        'w-full max-w-[calc(100%-8rem)] h-12 2xl:h-24',
        'm-auto',
        'flex items-center',
        'mix-blend-difference'
      )
    "
  >
    <ul :class="cn('gap-4', 'flex items-center justify-left')">
      <li v-for="link in linksList" :key="link.name" class="list-none">
        <a
          @mouseover="$emit('onHover', true)"
          @mouseleave="$emit('onHover', false)"
          :href="link.link"
          :class="cn('md:cursor-none', 'txt', 'hover:underline')"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </div>
</template>
