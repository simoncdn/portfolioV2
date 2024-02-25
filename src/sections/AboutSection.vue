<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue'
import Badge from '@/components/reusable/Badge.vue'
import { cn } from '@/utils/helper'

const languagesList = ['JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue.js']
const librariesList = [
  'Tailwind',
  'Styled-Component',
  'Zustand',
  'Zod',
  'React-Hook-Form',
  'React-Query',
  'Jest',
  'React Testing Library',
  'Git',
  'Figma',
  'Nvim'
]
</script>

<template>
  <div :class="cn('boxWidth', 'gap-20', 'flexBetween items-end lg:items-center')">
    <div :class="cn('hidden lg:flexCenter', 'w-6/12 h-screen')">
      <div :class="cn('relative', 'w-8/12 h-fit')">
        <img
          :class="cn('w-full', 'object-cover', 'mix-blend-lighten')"
          src="../assets/image-profil.svg"
          alt="simon-cardona-frontend-developer"
        />
      </div>
    </div>

    <div
      :class="
        cn('w-full lg:w-6/12 h-screen', 'gap-14 md:gap-20', 'flexCol justify-center', 'text-cream')
      "
    >
      <SectionTitle label="About" color="var(--white)" />

      <div :class="cn('gap-8 2xl:gap-12', 'flexCol')">
        <!-- <div :class="cn('gap-2', 'flexCol', 'heading4 text-cream')"> -->
        <!--   <h4>France</h4> -->
        <!--   <h4>96'</h4> -->
        <!-- </div> -->

        <div :class="cn('w-full max-w-xl', 'txt')">
          <p>Frontend developer based in France.</p>
          <p>
            Passionate about crafting modern and responsive user interfaces, I bring technical
            expertise and a creative approach to each project.
          </p>
          <p>
            With years of experience, I collaborate with businesses and startups to turn their ideas
            into high-performing, user-friendly web applications.
          </p>
        </div>

        <div :class="cn('gap-12', 'flexCol')">
          <div :class="cn('gap-6', 'flexCol')">
            <h3 :class="cn('heading3 text-cream')">Languages & Frameworks</h3>

            <ul :class="cn('max-w-xl', 'gap-4', 'flexRow flex-wrap')">
              <li v-for="language in languagesList" :key="language">
                <Badge :label="language" />
              </li>
            </ul>
          </div>

          <div :class="cn('gap-6', 'flexCol')">
            <h3 :class="cn('heading3 text-cream')">Libraries & Tools</h3>
            <ul :class="cn('max-w-xl', 'gap-4', 'flexRow flex-wrap')">
              <li v-for="library in librariesList" :key="library">
                <Badge :label="library" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
