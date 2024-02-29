<script setup>
import CustomCursor from '@/components/reusable/CustomCursor.vue'
import { cn } from '@/utils/helper'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isElementHover = ref(false)
const router = useRouter()

function handleBackHome() {
  router.push('/')
}
function onHoverElement(state) {
  isElementHover.value = state
}
</script>

<template>
  <div :class="cn('boxWidth', 'bg-cream', 'flexCol justify-between')">
    <CustomCursor :isActive="isElementHover" />

    <h3 :class="cn('heading3 text-carbon font-light')">404</h3>
    <div :class="cn('gap-8', 'flexCol')">
      <h1 :class="cn('heading2 text-sunBurst')">Page not found</h1>
      <h3 :class="cn('heading3 text-carbon font-light')">
        The page you are looking for doesn't exist or has been moved.
      </h3>
    </div>
    <button
      @mouseover="onHoverElement(true)"
      @mouseleave="onHoverElement(false)"
      :class="cn('cursor-none', 'w-1/12', 'hover:-translate-x-2 transition-all duration-300')"
      @click="handleBackHome"
    >
      <img src="../assets/arrow-right.svg" alt="arrow" :class="cn('w-full', 'rotate-180')" />
    </button>
  </div>
</template>
