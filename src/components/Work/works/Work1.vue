<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue';
import Badge from '@/components/reusable/Badge.vue'

const languagesList = ["Next.js", "TypeScript"]
const librariesList = ["Tailwind", "Zustand", "React-Query", "Zod", "React-hook-form", "Git", "Figma"]
</script>

<template>
    <div class="work">
        <SectionTitle label="Forma" color="var(--white)" />

        <div class="work-content">
            <div class="work-description">
                <span class="work-date">2023</span>
                <p class="description">Forma is an elegantly designed SaaS solution for legal and accounting professionals.
                    This innovative platform facilitates the creation and monitoring of administrative formalities, while
                    offering a wide range of additional features. Among these are the ability to interact with clients
                    through an messaging system, securely exchange and validate documents, as well as schedule tasks with
                    convenient reminders, thus optimizing time management and organizational efficiency.</p>
                <a href="" class="work-link">View site</a>
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
</template>

<style scoped>
.work {
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    padding: 200px 400px;
    gap: 60px;
}

.work-content {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 200px;
}

.work-description {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.work-date {
    color: var(--white);
    font-size: 20px;
    font-weight: 600;
}

.description {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
}

.work-link {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
}

.hard-skills-container {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    color: var(--white);
}

.hard-skills-container h3 {
    font-size: 24px;
    font-weight: 600;
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
</style>