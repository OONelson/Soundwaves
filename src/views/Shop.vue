<template>
	<div>
		<h1>Product List</h1>
		<!-- <Spinner :loading="loading" /> -->
		<div class="productList">
			<Products />
		</div>
	</div>
</template>

<script>
import Products from '../components/Products.vue';
import Spinner from '../components/Spinner.vue';
export default {
	components: {
		Products,
		Spinner
	}
};
</script>

<style scoped>
.productList {
	padding: 1rem 3rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-wrap: wrap;
}
</style>
