<script setup>
const navList = [
    {
        name: 'About',
        link: '#about'
    },
    {
        name: 'Work',
        link: '#work'
    },
    {
        name: 'Contact',
        link: '#contact'
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
                    <a :href="nav.link">{{ nav.name }}</a>
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
    padding: 200px 100px;
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
    color: #FFA500;
    line-height: 0.87;
}

p {
    font-size: 24px;
    font-weight: 200;
    color: #323232;
}

nav {
    display: flex;
}

nav ul {
    display: flex;
    gap: 80px;
}

nav ul li {
    list-style: none;
    position: relative;
    padding: 0px 2px;
}

nav ul li a {
    position: relative;
    text-decoration: none;
    color: #373737;
    font-size: 24px;
    font-weight: 200;
    padding: 4px 0px;
    z-index: 10;
}

.link-underline {
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #FFA500;
    transition: all 0.3s ease-in-out;
}

nav ul li:hover .link-underline {
    height: 90%;
    transition: all 0.3s ease-in-out;
}
</style>
