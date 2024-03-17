<template>
	<div class="spin"></div>
</template>

<script>
export default {
	prop: {
		loader: 'loading'
	}
};
</script>

<style scoped>
.spin {
	display: block;
	width: 4rem;
	height: 4rem;
	margin: 3rem auto;
	border: 0.4rem solid transparent;
	border-radius: 50%;
	border-top-color: #ffc655;

	animation: spin 2s ease-in infinite;
}

@keyframes spin {
	to {
		transform: rotateZ(360deg);
	}
}
</style>
