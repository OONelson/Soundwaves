<template>
	<div>
		<div
			v-for="product in products"
			:key="product.id"
			class="products"
		>
			<img
				:src="product.image"
				alt="image"
				class="productImg"
			/>
			<button class="productBtn">{{ product.btnText }}</button>
			<img
				:src="product.rating"
				alt="stars"
				class="productRating"
			/>
			<p class="productName">{{ product.name }}</p>
			<p class="productPrice">${{ product.price }}</p>
		</div>
	</div>
</template>

<script>
import Spinner from '../components/Spinner.vue';
import getProduct from '../composables/getProduct';
import { useRoute } from 'vue-router';
export default {
	props: ['id'],
	components: {
		Spinner
	},
	setup(props) {
		const route = useRoute();
		const { product, error, load } = getProduct(route.params.id);

		load();

		return { product, error };
	}
};
</script>

<style lang="scss" scoped></style>
