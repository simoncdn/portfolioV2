<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import Badge from '@/components/reusable/Badge.vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/solid'
import { defineProps } from 'vue'
import { cn } from '@/utils/helper'
import { useMouse } from '@vueuse/core'

defineProps({
  work: {
    type: Object,
    required: true
  },
  isActive: Boolean
})

const { x, y } = useMouse()
</script>

<template>
  <div class="works" :data-anchor="work.name">
    <div :class="cn('boxWidth relative', 'bg-carbon', 'gap-20', 'flexCol')">
      <SectionTitle :label="work.name" color="var(--cream)" />

      <div :class="cn('w-full', 'gap-48', 'flex')">
        <div :class="cn('w-6/12', 'gap-6', 'flexCol')">
          <h4 :class="cn('heading4 text-cream')">{{ work.date }}</h4>
          <p :class="cn('txt')">{{ work.description }}</p>
          <p v-if="work.subDescription" :class="cn('txt font-bold')">{{ work.subDescription }}</p>
          <div
            :class="cn('w-fit')"
            @mouseover="$emit('onHover', true)"
            @mouseleave="$emit('onHover', false)"
          >
            <a :href="work.url" :class="cn('cursor-none', 'gap-1', 'flexRow items-center', 'txt')">
              <span>View site</span>
              <ArrowUpRightIcon :class="cn('w-4 h-4')" />
            </a>

            <div
              :class="
                cn(
                  'absolute top-0 left-0 pointer-event-none z-20 hidden',
                  'w-60 h-60',
                  'translate-x-1/2 translate-y-1/2',
                  'bg-purple-200 animate-fade-in'
                )
              "
              :style="{
                display: isActive ? 'flex' : '',
                transform: `translate(${x - -2}px, ${y - -2}px)`,
                animation: isActive ? 'fadeIn 0.3s linear' : ''
              }"
            ></div>
          </div>
        </div>

        <div :class="cn('w-6/12', 'gap-12', 'flexCol')">
          <div :class="cn('gap-6', 'flexCol')">
            <h3 :class="cn('heading3 text-cream')">Languages & Frameworks</h3>

            <ul :class="cn('maw-w-96', 'gap-4', 'flexRow flex-wrap')">
              <li v-for="language in work.laguages" :key="language">
                <Badge :label="language" />
              </li>
            </ul>
          </div>

          <div :class="cn('gap-6', 'flexCol')">
            <h3 :class="cn('heading3 text-cream')">Libraries & Tools</h3>
            <ul :class="cn('maw-w-96', 'gap-4', 'flexRow flex-wrap')">
              <li v-for="library in work.tools" :key="library">
                <Badge :label="library" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
