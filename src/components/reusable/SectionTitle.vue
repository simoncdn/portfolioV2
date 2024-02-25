<script setup>
import { cn } from '@/utils/helper'
import { defineProps } from 'vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false,
    default: 'var(--carbon)'
  }
})
</script>

<template>
  <div :class="cn('relative', 'w-fit', 'py-0 px-2 md:px-4', 'flexCenter')">
    <h2
      :class="cn('z-10', 'w-full', 'heading2', 'text-[clamp(3rem,18vmin,20rem)]')"
      :style="{ color: color }"
    >
      {{ label }}
    </h2>
    <span
      :class="
        cn('absolute -bottom-1 md:-bottom-2 right-0 left-0', 'w-full xl:h-2/6', 'bg-sunBurst')
      "
    ></span>
  </div>
</template>
