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

      <ul :class="cn(' border-light-grey', 'flexCol')">
        <li
          v-for="work in works"
          :class="
            cn(
              'group relative',
              'w-full',
              'py-14 border-b border-light-grey',
              'text-5xl text-carbon uppercase'
            )
          "
          :key="work.name"
          @click="$emit('moveTo', 'work', work.index)"
        >
          <span
            @mouseover="$emit('onHover', true)"
            @mouseleave="$emit('onHover', false)"
            :class="
              cn('block w-fit', 'hover:translate-x-4 transition-all duration-300 ease-in-out')
            "
          >
            {{ work.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
