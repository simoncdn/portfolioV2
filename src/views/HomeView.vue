<script setup>
import Hero from '@/sections/HeroSection.vue';
import About from '@/sections/AboutSection.vue';
import Work from '@/sections/WorkSection.vue';
import Contact from '@/sections/ContactSection.vue';
import RightSide from '@/components/Layer/RightSide.vue';
import LeftSide from '@/components/Layer/LeftSide.vue';
import Footer from '@/components/Layer/Footer.vue';
import WorkTemplate from '@/components/reusable/WorkTemplate.vue';
import { ref } from 'vue';
import { worksInfo } from '../utils/works-info'
import * as helper from '../utils/helper'

const licenseKey = import.meta.env.VITE_LICENSE_KEY;

const fullpage = ref(null);
const currentAnchor = ref('');
const currentTextColor = ref('var(--black)');
const currentIndex = ref('');

const onSlideLeave = (_section, origin) => {
  currentIndex.value = origin
}
const options = {
  licenseKey,
  menu: '#menu',
  observer: true,
  attributes: true,
  fadingEffect: true,
  anchors: ['home', 'about', 'work', 'contact'],
  sectionsColor: ['var(--white)', 'var(--black)', 'var(--white)', 'var(--white)'],
  fixedElements: '.footer, .right-side, .left-side, #hello',
  scrollingSpeed: 1200,
  fitToSection: true,
  fitToSectionDelay: 1000,
  autoscrolling: true,
  scrollHorizontally: true,
  scrollHorizontallyKey: 'ZHZscHIucHJvX0VPemMyTnliMnhzU0c5eWFYcHZiblJoYkd4NWJ0Qw==',
  easing: 'easeInOutCubic',
  easingcss3: 'cubic-bezier(0.88,0,0.265,1)',
  dragAndMove: true,
  navigationTooltips: ['firstSlide', 'secondSlide'],
  controlArrows: false,
  onSlideLeave,
}

const handleMoveToSection = (sectionName, pageNumber) => {
  fullpage.value.api.moveTo(sectionName, pageNumber);
}

const callback = () => {
  const anchorFind = fullpage.value.api.getActiveSection().anchor;
  if (anchorFind) {
    currentAnchor.value = anchorFind;
    currentTextColor.value = helper.getCurrentTextColor(anchorFind);
  }
}
const body = document.querySelector('body');
const observer = new MutationObserver(callback)
observer.observe(body, options);
</script>

<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <LeftSide :currentTextColor="currentTextColor" />
      <RightSide @onClick="handleMoveToSection" :current-anchor="currentAnchor" :currentTextColor="currentTextColor" />
      <Footer :currentTextColor="currentTextColor" />
      <div class="section">
        <Hero @moveTo="handleMoveToSection" />
      </div>
      <div class="section">
        <About />
      </div>
      <div class="section">
        <div class="slide" data-anchor="slide1">
          <Work />
        </div>
        <div v-for="work in worksInfo" :key="work.name" class="slide" data-anchor="slide2">
          <WorkTemplate :name="work.name" :date="work.date" :description="work.description"
            :sub-description="work.subdescription" :link="work.url" :languages-list="work.laguages"
            :libraries-list="work.tools" />
        </div>
      </div>
      <div class=" section">
        <Contact />
      </div>
    </full-page>
  </div>
</template>