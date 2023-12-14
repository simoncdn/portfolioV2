<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue';

const works = [
    {
        name: 'Forma',
    },
    {
        name: 'Workshopbya',
    },
    {
        name: 'Crazee-Burger',
    },
]
</script>
<template>
    <div class="work">
        <SectionTitle label="Work" />

        <ul>
            <li v-for="work in works" :key="work.name">{{ work.name }}</li>
        </ul>
    </div>
</template>


<style scoped>
.work {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 200px 400px;
    gap: 200px;
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
</style>