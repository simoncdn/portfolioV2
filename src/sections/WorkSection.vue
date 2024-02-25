<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import { cn } from '@/utils/helper'
import { worksInfo } from '@/utils/works-info'
</script>
<template>
  <div class="works" data-anchor="work-menu">
    <div :class="cn('boxWidth', 'flexCol', 'gap-20')">
      <SectionTitle label="Work" />

      <ul :class="cn(' border-light-grey', 'flexCol')">
        <li
          v-for="work in worksInfo"
          :class="
            cn(
              'group relative',
              'w-full',
              'border-b border-light-grey',
              'py-4 md:py-8 2xl:py-14',
              'text-xl md:text-3xl 2xl:text-5xl text-carbon uppercase'
            )
          "
          :key="work.name"
        >
          <span
            @mouseover="$emit('onHover', true)"
            @mouseleave="$emit('onHover', false)"
            @click="$emit('moveTo', 'Work', work.index)"
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
