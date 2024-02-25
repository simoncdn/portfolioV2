<script setup lang="ts">
import { cn } from '@/utils/helper'
import { defineProps } from 'vue'

defineProps({
  label: { type: String, required: true }
})
</script>

<template>
  <div :class="cn('w-fit', 'bg-light-carbon rounded', 'py-0.5 px-2')">
    <span :class="cn('text-sm md:text-base text-cream font-normal')">
      {{ label }}
    </span>
  </div>
</template>
