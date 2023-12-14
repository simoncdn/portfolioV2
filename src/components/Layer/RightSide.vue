<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    currentAnchor: {
        type: String,
        required: true
    },
    currentTextColor: {
        type: String,
        required: true
    }
})
const getCurrentCubeColor = (link) => {
    if (props.currentAnchor === link) {
        return 'var(--black)'
    }
    return 'var(--white)'
}
const navList = [
    {
        name: 'Home',
        link: 'home',
    },
    {
        name: 'About',
        link: 'about',
    },
    {
        name: 'Work',
        link: 'work',
    },
    {
        name: 'Contact',
        link: 'contact',
    }
]
</script>

<template>
    <div class="right-side">
        <ul class="cube-container">
            <li :style="{ backgroundColor: getCurrentCubeColor(nav.link) }" class="cube"
                @click="$emit('onClick', nav.link, 0)" v-for="nav in navList" :key="nav.name">
            </li>
        </ul>

        <span class="line"></span>
        <p>{{ props.currentAnchor }}</p>
    </div>
</template>

<style scoped>
.right-side {
    position: fixed;
    top: 0;
    right: 0;
    width: 5%;
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    mix-blend-mode: difference;
}

.right-side p {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: 200;
    font-size: 16px;
    min-height: 50px;
    color: var(--white);
    z-index: 10;
}

.line {
    width: 1px;
    height: 20%;
    background-color: var(--white);
    margin-top: 20px;
}

.cube-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.cube {
    width: 6px;
    height: 6px;
    cursor: pointer;
}
</style>
