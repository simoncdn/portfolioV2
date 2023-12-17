<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()

const handleBackHome = () => {
    router.push('/')
}
</script>

<template>
    <div class="not-found-container">
        <h1>404</h1>

        <div class="content">
            <div>
                <h2>Page not found</h2>
                <span>The page you are looking for doesn't exist or has been moved.</span>
            </div>
        </div>
        <button @click="handleBackHome">
            <img src="../assets/arrow-right.svg" alt="arrow" class="arrow" />
        </button>
    </div>
</template>

<style scoped>
.not-found-container {
    width: 100vw;
    height: 100vh;
    background-color: var(--white);
    padding: var(--padding-section);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

h1 {
    font-size: 24px;
    font-weight: 300;
    color: var(--black);
}

.content {
    display: flex;
    flex-direction: column;
    gap: 170px;
}

h2 {
    font-size: 128px;
    font-weight: 700;
    color: var(--orange);
    margin: 0 0 20px 0;
}

span {
    font-size: 24px;
    font-weight: 300;
    color: var(--black);
}

button {
    width: 6vw;
    border: none;
    cursor: pointer;
    background-color: var(--white);
    transition: all 0.3s ease-in-out;
}

button:hover {
    transform: translateX(-10px);
    transition: all 0.3s ease-in-out;
}

.arrow {
    width: 6vw;
    transform: rotate(180deg);
}

@media (max-width: 768px) {
    .not-found-container{
        justify-content: flex-start;
        gap: var(--gap-section);
    }
    .content{
        gap: 20px;
    }

    h1 {
        font-size: 16px;
    }
    h2 {
        font-size: 64px;
    }
    span {
        font-size: 16px;
    }
    .arrow {
        width: 20vw;
    }

    
}</style>