<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue';
import Badge from '@/components/reusable/Badge.vue'
import { defineProps } from 'vue';
import { ArrowUpRightIcon } from "@heroicons/vue/24/solid"

defineProps({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    subDescription: {
        type: String,
    },
    link: {
        type: String,
        required: true
    },
    languagesList: {
        type: Array[String],
        required: true
    },
    librariesList: {
        type: Array[String],
        required: true
    }
})
</script>

<template>
    <div class="work">
        <SectionTitle :label="name" color="var(--white)" />

        <div class="work-content">
            <div class="work-description">
                <span class="work-date">{{ date }}</span>
                <p class="description">{{ description }}</p>
                <p v-if="subDescription" class="sub-description">{{ subDescription }}</p>
                <a :href="link" class="work-link">
                    <span>
                        View site
                    </span>
                    <ArrowUpRightIcon class="work-link-icon" />
                </a>
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
    padding: var(--padding-section);
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

.sub-description {
    color: var(--white);
    font-size: 16px;
    font-weight: 600;
}

.work-link {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 2px;
}

.work-link:hover {
    text-decoration: underline;
}

.work-link-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: end;
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

@media (max-width: 768px) {
    .work {
        gap: 25px;
    }
    .work-content {
        flex-direction: column;
        gap: 50px;
    }

    .work-date {
        font-size: 16px;
    }

    .work-description {
        width: 100%;
    }

    .description,
    .sub-description,
    .work-link {
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