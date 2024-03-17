<template>
	<!-- <Toaster
		ref="headerRef"
		position="top-right"
		richColors
		class="toaster"
	/> -->

	<div
		v-if="products"
		v-for="product in products"
		:key="product.id"
		class="products"
	>
		<div class="imgGroup">
			<img
				:src="product.image"
				alt="image"
				class="productImg"
				loading="lazy"
			/>
			<img
				src="../assets/images/Star-Icons.png"
				alt="stars"
				class="productRating"
			/>
		</div>

		<button
			class="productBtn"
			@click="addToCart(product)"
		>
			{{ product.btnText }}
		</button>

		<!-- <router-link :to="{ name: 'details', params: { productId: product.id } }">
			view details
		</router-link> -->
		<p class="productName">{{ product.name }}</p>
		<p class="productPrice">${{ product.price }}</p>
	</div>
	<div v-else>
		<Spinner />
	</div>
</template>

<script>
import Spinner from './Spinner.vue';
import getCollection from '../composables/getCollection';
import { projectFirestore } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { Toaster, toast } from 'vue-sonner';

export default {
	props: ['products'],
	components: {
		Spinner
	},
	methods: {
		addToCart(product) {
			try {
				// Add the selected product to the Firestore collection "cart"
				// Make sure that 'cart' collection exists in your Firestore
				const cartRef = collection(projectFirestore, 'cartItems');
				addDoc(cartRef, product);
			} catch (error) {
				console.error('Error adding to cart:', error);
			}
			return toast.success('Item added to cart');
		}
	},
	setup() {
		const { products, load, error } = getCollection('products');

		return { products, load, error };
	}
};
</script>

<style scoped>
.details {
	text-decoration: none;
	padding: 0.6rem 1rem;
	margin-left: 1rem;
}
</style>
