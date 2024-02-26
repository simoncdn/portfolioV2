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
  isWorkLinkHover: Boolean
})

const { x, y } = useMouse()
</script>

<template>
  <div class="works" :data-anchor="work.name">
    <div :class="cn('boxWidth relative', 'bg-carbon', 'gap-14 md:gap-20', 'flexCol')">
      <SectionTitle :label="work.name" color="var(--cream)" />

      <div :class="cn('w-full', 'gap-14 md:gap-48', 'flex flex-col md:flex-row')">
        <div :class="cn('w-full md:w-6/12', 'gap-6', 'flexCol')">
          <h4 :class="cn('heading4 text-cream')">{{ work.date }}</h4>

          <p :class="cn('max-w-2xl', 'txt')">{{ work.description }}</p>
          <p v-if="work.subDescription" :class="cn('max-w-2xl', 'txt font-bold')">
            {{ work.subDescription }}
          </p>

          <div
            :class="cn('w-fit')"
            @mouseover="$emit('onHover', true)"
            @mouseleave="$emit('onHover', false)"
          >
            <a :href="work.url" :class="cn('md:cursor-none', 'gap-1', 'flexRow items-center', 'txt', 'hover:underline md:hover:no-underline')">
              <span>View site</span>
              <ArrowUpRightIcon :class="cn('w-4 h-4')" />
            </a>

            <div
              :class="
                cn(
                  'hidden absolute top-0 left-0 pointer-event-none z-20',
                  'w-60 h-40  md:w-96 md:h-60',
                  'translate-x-1/2 translate-y-1/2',
                  'animate-fade-in'
                )
              "
              :style="{
                display: isWorkLinkHover ? 'flex' : '',
                transform: `translate(${x - -2}px, ${y - -2}px)`,
                animation: isWorkLinkHover ? 'fadeIn 0.3s linear' : ''
              }"
            >
              <img
                :src="work.image"
                :alt="work.name"
                :class="cn('desktop-only w-full h-full', 'object-cover', 'grayscale')"
              />
            </div>
          </div>
        </div>

        <div :class="cn('w-full md:w-6/12', 'gap-12', 'flexCol')">
          <div :class="cn('gap-4 md:gap-6', 'flexCol')">
            <h3 :class="cn('heading3 text-cream')">Languages & Frameworks</h3>

            <ul :class="cn('maw-w-96', 'gap-4', 'flexRow flex-wrap')">
              <li v-for="language in work.laguages" :key="language">
                <Badge :label="language" />
              </li>
            </ul>
          </div>

          <div :class="cn('gap-4 md:gap-6', 'flexCol')">
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
