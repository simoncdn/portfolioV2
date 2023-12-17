<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue';

const works = [
    {
        index: 1,
        name: 'Forma',
    },
    {
        index: 2,
        name: 'Crazee-Burger',
    },
    {
        index: 3,
        name: 'Workshopbya',
    },
]
</script>
<template>
    <div class="work">
        <SectionTitle label="Work" />

        <ul>
            <li v-for="work in works" :key="work.name" @click="$emit('moveTo', 'work', work.index)">{{ work.name }}</li>
        </ul>
    </div>
</template>


<style scoped>
.work {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: var(--padding-section);
    gap: var(--gap-section);
}

ul {
    display: flex;
    flex-direction: column;
    gap: 100px;
}

li {
    list-style-type: none;
    color: var(--black);
    font-size: 36px;
    font-weight: 400;
    text-decoration: underline;
}

@media (max-width: 768px) {
    li {
        font-size: 32px;
    }
}

@media (max-width: 475px) {
    li {
        font-size: 24px;
    }
}
</style>