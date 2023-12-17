<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
    label: { type: String, required: true }
})	
</script>

<template>
    <div class="badge">
        <span class="badge-text">
            {{ label }}
        </span>
    </div>
</template>

<style scoped>
.badge {
    width: fit-content;
    background-color: #424242;
    border-radius: 4px;
    padding: 2px 8px;
}

.badge-text {
    color: var(--white);
    font-size: 16px;
    font-weight: 400;
}

@media (max-width: 768px) {
    .badge-text {
        font-size: 14px;
    }
}
</style>
