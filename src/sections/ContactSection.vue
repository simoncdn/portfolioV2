<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import { cn } from '@/utils/helper'
</script>

<template>
  <div :class="cn('boxWidth', 'gap-20', 'flexCol')">
    <SectionTitle label="Contact" />

    <div :class="cn('gap-6', 'flex flex-col md:flex-row items-baseline')">
      <img src="../assets/arrow-right.svg" alt="phone" />

      <div :class="cn('gap-8', 'flexCol')">
        <div :class="cn('flexCol', 'text-carbon font-light text-lg md:text-2xl')">
          <span>Discuss about a new projet ? An opportunity ?</span>
          <span>Let’s have a chat.</span>
        </div>
        <a
          @mouseover="$emit('onHover', true)"
          @mouseleave="$emit('onHover', false)"
          href="mailto:cdna.simon@gmail.com"
          :class="
            cn(
              'md:cursor-none',
              'text-carbon font-normal text-2xl md:text-4xl',
              'hover:underline md:hover:no-underline'
            )
          "
          >cdna.simon@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>
