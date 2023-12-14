<script setup>
import SectionTitle from '@/components/reusable/SectionTitle.vue';


</script>
<template>
    <div class="contact">
        <SectionTitle label="Contact" />

        <div class="content">
            <img src="../assets/arrow-right.svg" alt="phone" />

            <div class="description-mail">
                <div class="description">
                    <span>Discuss about a new projet ? An opportunity ?</span>
                    <span>Let’s have a chat.</span>
                </div>
                <a href="mailto:cdna.simon@gmail.com" class="mail-address">cdna.simon@gmail.com</a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.contact {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 200px 400px;
    gap: 200px;
}

.content {
    display: flex;
    align-items: baseline;
    gap: 20px;
}

.description-mail {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.description {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: var(--black);
    font-weight: 300;
}

.mail-address {
    font-size: 32px;
    font-weight: 400;
    color: var(--black);
}
</style>