<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
	Icon: {
		type: String,
	},
	backgroundColor: {
		type: String,
		default: 'var(--white)',
	},
	color: {
		type: String,
		default: 'var(--white)',
	}
})
</script>

<template>
	<button @click="$emit('onClick')" class="button">
		<slot></slot>
	</button>
</template>

<style scoped>
.button {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: 100px;
	width: fit-content;
	border: none;
	font-size: 24px;
	font-weight: 700;
	cursor: pointer;
	background-color: red;
}
</style>
