<script setup>
const navList = [
    {
        name: 'About',
        link: 'about'
    },
    {
        name: 'Work',
        link: 'work'
    },
    {
        name: 'Contact',
        link: 'contact'
    }
]

</script>

<template>
    <div ref="heroSection" class="hero-section">
        <div class="title-and-description">
            <div class="hero-title">
                <h1>Simon</h1>
                <h1>Cardona</h1>
            </div>
            <p>Frontend developer</p>
        </div>
        <nav>
            <ul>
                <li v-for="nav in navList" :key="nav.name">
                    <p class="nav-links" @click="$emit('moveTo', nav.link, 0)">{{ nav.name }}</p>
                    <span class="link-underline"></span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
.hero-section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    /* background-color: violet; */
    /* padding: 400px 200px; */
    padding: 200px 400px;
    /* gap: 140px */
    gap: 80px;
}

.title-and-description {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.hero-title {
    display: flex;
    width: fit-content;
    flex-direction: column;
    justify-content: start;
}

h1 {
    font-size: 128px;
    font-weight: 600;
    color: var(--orange);
    line-height: 0.87;
}

p {
    font-size: 24px;
    font-weight: 400;
    color: var(--gray);
}

nav {
    display: flex;
}

nav ul {
    display: flex;
    gap: 80px;
}

nav ul li {
    height: fit-content;
    list-style: none;
    position: relative;
    padding: 0px 2px;
}

.nav-links {
    position: relative;
    color: var(--black);
    font-size: 24px;
    font-weight: 200;
    z-index: 10;
}

.link-underline {
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: var(--orange);
    transition: all 0.3s ease-in-out;
}

nav ul li:hover .link-underline {
    height: 80%;
    transition: all 0.3s ease-in-out;
}
</style>
