<script setup>
import { cn } from '@/utils/helper'

defineProps({
  moveTo: Function
})

const navList = [
  {
    link: 'About'
  },
  {
    link: 'Work'
  },
  {
    link: 'Contact'
  }
]
</script>

<template>
  <div ref="heroSection" :class="cn('boxWidth', 'gap-20', 'flexBetween')">
    <div :class="cn('z-10', 'w-6/12', 'gap-20', 'flexCol justify-center')">

      <div :class="cn('gap-10', 'flexCol')">
        <h1 :class="cn(
          'w-fit',
          'flexCol justify-start',
          'text-sunBurst font-bold text-[clamp(3rem,20vmin,20rem)] leading-none'
        )
          ">
          <span>Simon</span>
          <span>Cardona</span>
        </h1>
        <p :class="cn('px-2 md:px-4', 'text-2xl font-normal text-grey')">Frontend developer</p>
      </div>
      <nav class="flex h-2/6 px-2 md:px-4">
        <ul :class="cn('gap-20', 'flex')">
          <li :class="cn('relative group', 'h-fit', 'py-0 px-0.5', 'list-none')" v-for="nav in navList" :key="nav.link">
            <a :class="cn('relative z-10', 'text-carbon text-2xl font-thin')" @click="$emit('moveTo', nav.link, 0)">{{
              nav.link }}</a>
            <span :class="cn(
              'absolute bottom-0 left-0',
              'w-full h-2',
              'bg-sunBurst',
              'group-hover:h-full transition-all duration-300'
            )
              "></span>
          </li>
        </ul>
      </nav>
    </div>

    <div :class="cn('w-4/12 h-full', 'flexCenter')">
      <img src="/simon-cardona.png" alt="hero image" :class="cn('w-full h-full', 'object-cover', 'grayscale')" />
    </div>
  </div>
</template>

<style>
@media (max-width: 768px) {
  .hero-section {
    padding-top: 70px;
  }

  .title-and-description {
    flex-direction: column-reverse;
    gap: 20px;
  }

  nav ul li {
    width: fit-content;
  }

  p {
    font-size: 16px;
  }
}

@media (max-width: 475px) {
  h1 {
    font-size: 84px;
    line-height: 0.87;
  }

  nav ul {
    flex-direction: column;
    gap: 60px;
  }
}
</style>
