<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import { cn } from '@/utils/helper'

const works = [
  {
    index: 1,
    name: 'Forma'
  },
  {
    index: 2,
    name: 'Crazee-Burger'
  },
  {
    index: 3,
    name: 'Workshopbya'
  }
]
</script>
<template>
  <div class="works" data-anchor="work-menu">
    <div :class="cn('boxWidth', 'flexCol', 'gap-20')">
      <SectionTitle label="Work" />

      <ul :class="cn('gap-24', 'flexCol')">
        <li
          :class="cn('w-fit', 'text-5xl text-carbon underline')"
          v-for="work in works"
          :key="work.name"
          @mouseover="$emit('onHover', true)"
          @mouseleave="$emit('onHover', false)"
          @click="$emit('moveTo', 'work', work.index)"
        >
          {{ work.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
