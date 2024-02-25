<script setup>
import { cn } from '@/utils/helper'
</script>

<template>
  <div
    id="left-side"
    :class="
      cn(
        'absolute top-0 left-0',
        'w-1/12 max-w-16 h-full',
        'gap-4',
        'flexCol flexCenter',
        'mix-blend-difference'
      )
    "
  >
    <span :class="cn('w-[1px] h-2/6', 'bg-cream')"></span>

    <p :class="cn('txt', 'rotate-180', '[writing-mode:vertical-lr]')">Portfolio 2023</p>

    <span :class="cn('w-[1px] h-2/6', 'bg-cream')"></span>
  </div>
</template>
