<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import { cn } from '@/utils/helper'
</script>

<template>
  <div :class="cn('boxWidth', 'gap-20', 'flexCol justify-center')">
    <SectionTitle label="Contact" />

    <div :class="cn('gap-6', 'flex items-baseline')">
      <img src="../assets/arrow-right.svg" alt="phone" />

      <div :class="cn('gap-8', 'flexCol')">
        <div :class="cn('flexCol', 'text-carbon font-light text-2xl')">
          <span>Discuss about a new projet ? An opportunity ?</span>
          <span>Let’s have a chat.</span>
        </div>
        <a
          @mouseover="$emit('onHover', true)"
          @mouseleave="$emit('onHover', false)"
          href="mailto:cdna.simon@gmail.com"
          :class="cn('text-carbon font-normal text-4xl')"
          >cdna.simon@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>
