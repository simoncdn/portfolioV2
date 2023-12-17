<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue';
import Badge from '@/components/reusable/Badge.vue'

const languagesList = ["JavaScript", "TypeScript", "React.js", "Next.js"]
const librariesList = ["Tailwind", "Styled-Component", "Zustand", "React-Query", "Jest", "React Testing Library", "Git", "Figma", "Nvim"]
</script>

<template>
    <div class="about-container">
        <div class="about-left-part">
            <div class="image-container">
                <img src="../assets/image-profil.svg" alt="simon-cardona-frontend-developer">
            </div>
        </div>

        <div class="about-right-part">
            <SectionTitle label="About" color="var(--white)" />

            <div class="about-content">

                <div class="about-subtitle">
                    <h4>France</h4>
                    <h4>96'</h4>
                </div>

                <div class="description-container">
                    <p>Frontend developer based in France specialized in React.js and TypeScript.</p>
                    <p>Passionate about crafting modern and responsive user interfaces, I bring technical expertise and a
                        creative approach to each project. </p>
                    <p>With years of experience, I collaborate with businesses and startups to turn their ideas into
                        high-performing, user-friendly web applications.</p>
                </div>

                <div class="hard-skills-container">

                    <div class="hard-skills-top">
                        <h3 class="">Languages & Frameworks</h3>

                        <ul class="languages-list">
                            <li v-for=" language  in  languagesList " :key="language">
                                <Badge :label="language" />
                            </li>
                        </ul>
                    </div>

                    <div class="hard-skills-bottom">
                        <h3 class="">Libraries & Tools</h3>
                        <ul class="languages-list">
                            <li v-for=" library  in  librariesList " :key="library">
                                <Badge :label="library" />
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.about-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--gap-section);
    padding: var(--padding-section);
}

.about-left-part {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.image-container {
    position: relative;
    margin-top: 100px;
    width: 600px;
    height: fit-content;
}

.image-container img {
    width: 100%;
    object-fit: cover;
    mix-blend-mode: lighten;
}

.about-right-part {
    width: 50%;
    height: 100vh;
    color: var(--white);
    flex-direction: column;
    padding-top: 10vh;
    display: flex;
}

.about-subtitle {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    margin: 32px 0px;
}

h4 {
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
}

h3 {
    color: var(--white);
    font-size: 24px;
    font-weight: 600;
}

.description-container {
    width: 100%;
    max-width: 600px;
    margin-bottom: 64px;
}

.description-container p {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
}

.hard-skills-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.languages-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 20px;
    max-width: 360px;
}

.languages-list li {
    list-style: none;
    white-space: nowrap;
}

@media (max-width: 768px) {
    .about-container {
        flex-direction: column;
    }

    .about-left-part {
        display: none;
    }

    .about-right-part {
        width: 100%;
        padding: 0px;
        justify-content: flex-start;
        align-items: center;
    }

    .description-container p, .about-subtitle h4 {
        font-size: 14px;
    }

    .hard-skills-container {
        width: 100%;
        gap: 45px;
    }

    .hard-skills-container h3 {
        font-size: 20px;
    }
}
</style>