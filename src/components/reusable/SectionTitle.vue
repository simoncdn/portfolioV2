<script setup>
import { defineProps } from 'vue';

defineProps({
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: false,
        default: 'var(--black)',
    },
});
</script>

<template>
    <div class="title">
        <h2 :style="{ color: color }">{{ label }}</h2>
        <span class="title-underline"></span>
    </div>
</template>

<style scoped>
.title {
    position: relative;
    width: fit-content;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
}

h2 {
    position: relative;
    color: var(--white);
    width: 100%;
    z-index: 10;
    font-size: 128px;
    font-weight: 600;
}

.title-underline {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: var(--orange);
}
</style>