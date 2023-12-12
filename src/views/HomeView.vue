<script setup>
import Hero from '@/components/Hero.vue'
import Work from '@/components/Work/Work.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import RightSide from '@/components/Layer/RightSide.vue';
import LeftSide from '@/components/Layer/LeftSide.vue';
import Footer from '@/components/Layer/Footer.vue';
import { ref } from 'vue';
import Work1 from '@/components/Work/works/Work1.vue';
import Work2 from '@/components/Work/works/Work2.vue';

const licenseKey = import.meta.env.VITE_LICENSE_KEY;

const fullpage = ref(null);
const currentAnchor = ref('');
const currentTextColor = ref('var(--black)');
const currentIndex = ref('');

const onSlideLeave = (section, origin) => {
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

const moveTo = (sectionName, numberOfPage) => {
  fullpage.value.api.moveTo(sectionName, numberOfPage);
}
const getCurrentTextColor = (anchor) => {
  switch (anchor) {
    case 'home':
      return 'var(--black)';
    case 'about':
      return 'var(--white)';
    case 'work':
      return 'var(--black)';
    case 'contact':
      return 'var(--black)';
    default:
      return 'var(--black)';
  }
}
const callback = () => {
  const anchorFind = fullpage.value.api.getActiveSection().anchor;
  if (anchorFind) {
    currentAnchor.value = anchorFind;
    currentTextColor.value = getCurrentTextColor(anchorFind);
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
      <RightSide @moveTo="moveTo" :current-anchor="currentAnchor" :currentTextColor="currentTextColor" />
      <Footer :currentTextColor="currentTextColor" />
      <div class="section">
        <Hero @moveTo="moveTo" />
      </div>
      <div class="section">
        <About />
      </div>
      <div class="section">
        <div class="slide" data-anchor="slide1">
          <Work />
        </div>
        <div class="slide" data-anchor="slide2">
          <Work1 />
        </div>
        <div class="slide" data-anchor="slide2">
          <Work2 />
        </div>
      </div>
      <div class="section">
        <Contact />
      </div>
    </full-page>
  </div>
</template>