<template>
	<!-- <div v-else>
		<Spinner />
	</div> -->
	<div class="product">
		<!-- <Slides :product="product" /> -->
		<button class="productBtn">{{ product.btnText }}</button>
		<img
			:src="product.rating"
			alt="five stars"
			class="rating"
		/>
		<h3 class="productName">{{ product.name }}</h3>
		<p class="productText">
			Introducing the {{ product.name }} – where style meets performance.
			Immerse yourself in pristine audio quality and sleek design. With
			Bluetooth connectivity, noise-canceling technology, and an
			ultra-lightweight build, this headset delivers a premium listening
			experience. Stay connected seamlessly with hands-free calls, and enjoy
			comfort that lasts all day. Elevate your audio game with the
			{{ product.name }} – where sound meets style for a truly immersive sound
			adventure.
		</p>
		<span class="productPrice">{{ product.price }}</span>
	</div>
</template>

<script>
// import Slides from '../components/Slides.vue';
import Spinner from '../components/Spinner.vue';

export default {
	components: {
		// Slides,
		Spinner
	},
	data() {
		return {
			product: null
		};
	},
	async created() {
		// Fetch the product details based on the route parameter (product ID)
		const productId = this.$route.params.productId;
		await this.fetchProductDetails(productId);
	},
	methods: {
		async fetchProductDetails(productId) {
			try {
				// Replace 'your-products-endpoint' with the actual endpoint in your Firebase Realtime Database
				const response = await this.$projectFirestore
					.database()
					.ref(`products/${productId}`)
					.get();
				this.product = response.val();
			} catch (error) {
				console.error('Error fetching product details:', error);
			}
		}
	}
};
</script>

<style lang="scss" scoped></style>
