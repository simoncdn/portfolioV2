<script setup lang="ts">
import { cn } from '@/utils/helper'
import { defineProps } from 'vue'

defineProps({
  Icon: {
    type: String
  },
  backgroundColor: {
    type: String,
    default: 'var(--white)'
  },
  color: {
    type: String,
    default: 'var(--white)'
  }
})
</script>

<template>
  <button @click="$emit('onClick')">
    <slot></slot>
  </button>
</template>
