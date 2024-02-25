<script setup lang="ts">
import Footer from '@/components/Layer/Footer.vue'
import LeftSide from '@/components/Layer/LeftSide.vue'
import RightSide from '@/components/Layer/RightSide.vue'

defineProps({
  onHoverElement: Function,
  currentAnchor: String,
  currentIndex: Number
})
</script>

<template>
  <div>
    <Footer @onHover="(value) => onHoverElement(value)" />
    <LeftSide />
    <RightSide :current-anchor="currentAnchor" :currentIndex="currentIndex" />

    <slot />
  </div>
</template>
