<script setup>
import { cn } from '@/utils/helper'
import { ANCHORS } from '@/utils/object'
import { defineProps } from 'vue'

const props = defineProps({
  currentAnchor: {
    type: String,
    required: true
  },
  currentIndex: {
    type: Number,
    required: true
  }
})

const navList = Object.values(ANCHORS)

function getCurrentCubeColor(link) {
  if (props.currentAnchor.includes(link)) {
    return 'var(--light-carbon)'
  } else {
    return 'var(--cream)'
  }
}
</script>

<template>
  <div
    id="right-side"
    :class="
      cn(
        'fixed top-0 right-0',
        'w-1/12 max-w-16 h-screen',
        'pb-32 md:pb-16 2xl:pb-24',
        'flexCol items-center justify-end',
        'mix-blend-difference'
      )
    "
  >
    <ul :class="cn('relative', 'gap-2 md:gap-4', 'flexCol flexCenter')">
      <li
        :class="cn('w-1 h-1 md:w-1.5 md:h-1.5', 'list-none')"
        @click="$emit('moveTo', nav, 0)"
        v-for="nav in navList"
        :key="nav"
        :style="{ backgroundColor: getCurrentCubeColor(nav) }"
      ></li>
    </ul>
    <span :class="cn('w-[1px] h-1/6', 'bg-cream', 'my-4')"></span>
    <p :class="cn('txt', 'rotate-180', '[writing-mode:vertical-lr]')">
      {{ props.currentAnchor }}
    </p>
  </div>
</template>
