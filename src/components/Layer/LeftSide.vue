<script setup>
import { defineProps } from 'vue';

defineProps({
    currentTextColor: {
        type: String,
        required: true,
    },
});
</script>


<template>
    <div class="left-side">
        <span class="line"></span>
        <p>Portfolio 2023</p>
        <span class="line"></span>
    </div>
</template>


<style scoped>
.left-side {
    position: fixed;
    top: 0;
    left: 0;
    width: 5%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    mix-blend-mode: difference;
}

.left-side p {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-weight: 200;
    font-size: 16px;
    color: var(--white);
}

.line {
    width: 1px;
    height: 35%;
    background-color: var(--white);
}

@media (max-width: 768px) {
    .left-side p {
        font-size: 12px;
    }
    .line{
        height: 35%;
    }
}
</style>
