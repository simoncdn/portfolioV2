<script setup>
import Hero from '@/sections/HeroSection.vue'
import About from '@/sections/AboutSection.vue'
import Work from '@/sections/WorkSection.vue'
import Contact from '@/sections/ContactSection.vue'
import WorkTemplate from '@/components/reusable/WorkTemplate.vue'
import { ref } from 'vue'
import { worksInfo } from '../utils/works-info'
import CustomCursor from '@/components/reusable/CustomCursor.vue'
import BaseLayout from '@/layouts/BaseLayout.vue'

const fullpage = ref(null)
const currentAnchor = ref('')
const currentIndex = ref(0)
const isElementHover = ref(false)
const isWorkLinkHover = ref(false)

const licenseKey = import.meta.env.VITE_LICENSE_KEY
const scrollHorizontallyKey = import.meta.env.VITE_SCROLL_ACTIVATION_HORIZONTALLY_KEY
const fadingEffectKey = import.meta.env.VITE_FADING_ACTIVATION_KEY

const options = {
  // Keys
  licenseKey,
  scrollHorizontallyKey,
  fadingEffectKey,

  // Navigation
  menu: '#menu',
  lockAnchors: false,
  anchors: ['Home', 'About', 'Work', 'Contact'],
  navigation: false,
  navigationTooltips: ['Home', 'About', 'Work', 'Contact'],
  showActiveTooltip: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  // Scolling
  css3: true,
  scrollingSpeed: 1000,
  autoscrolling: false,
  fitToSection: true,
  fitToSectionDelay: 1000,
  easing: 'easeInOutCubic',
  easingcss3: 'cubic-bezier(0.88,0,0.265,1)',
  scrollHorizontally: true,
  dragAndMove: true,
  fadingEffect: 'sections',

  // Design
  controlArrows: false,
  verticalCentered: false,
  sectionsColor: ['var(--cream)', 'var(--carbon)', 'var(--cream)', 'var(--cream)'],
  fixedElements: '#footer, #right-side, #left-side',
  attributes: true,

  // Custom selectors
  observer: true,
  slideSelector: '.works',

  // Events
  onSlideLeave,
  onLeave
}

function onSlideLeave(section, _origin, destination) {
  console.log(section, destination)
  if (destination.index === 0) {
    currentAnchor.value = section.anchor
  } else if (destination.index > 0) {
    currentAnchor.value = `${section.anchor} / ${destination.anchor}`
  }
}
function handleMoveTo(sectionName, slideNumber) {
  return fullpage.value.api.moveTo(sectionName, slideNumber)
}
function onHoverElement(state) {
  isElementHover.value = state
}
function onHoverWorkLink(state) {
  isWorkLinkHover.value = state
}
function makeActionsOnScroll() {
  const anchorFind = fullpage.value.api.getActiveSection().anchor
  if (anchorFind) {
    currentAnchor.value = anchorFind
  }
}
function onLeave(_origin, destination) {
  if (destination.anchor) {
    currentAnchor.value = destination.anchor
    currentIndex.value = destination.index
  }
}

const body = document.querySelector('#app')
const observer = new MutationObserver(makeActionsOnScroll)
observer.observe(body, options)
</script>

<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <BaseLayout :onHoverElement="onHoverElement" :current-anchor="currentAnchor" :currentIndex="currentIndex">
      <CustomCursor :isActive="isElementHover" />
      <div class="section">
        <Hero @moveTo="handleMoveTo" />
      </div>
      <div class="section">
        <About />
      </div>
      <div class="section">
        <Work @onHover="onHoverElement" @moveTo="handleMoveTo" />
        <WorkTemplate v-for="work in worksInfo" :key="work.name" :work="work" :isWorkLinkHover="isWorkLinkHover"
          @onHover="onHoverWorkLink" />
      </div>
      <div class="section">
        <Contact @onHover="onHoverElement" />
      </div>
    </BaseLayout>
  </full-page>
</template>

<style>
.fp-slidesNav.fp-bottom {
  bottom: 0;
}

.fp-bottom {
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  mix-blend-mode: difference;
}

.fp-slidesNav ul li a span {
  background: var(--cream);
}

.fp-watermark {
  display: none;
}

@media (max-width: 1536px) {
  .fp-bottom {
    height: 3rem;
  }
}
</style>
