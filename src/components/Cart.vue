<!-- Cart.vue -->
<template>
	<div class="cart-container">
		<div
			class="cart"
			@click.stop
		>
			<h2>Cart</h2>
			<hr />
			<div v-if="cartItems.length === 0">Your cart is empty</div>
			<CartItem
				v-for="cartItem in cartItems"
				:key="cartItem.id"
				:product="cartItem"
			/>

			<button
				class="checkout"
				@click="clearCart"
			>
				Checkout
			</button>
		</div>
	</div>
</template>

<script setup>
import CartItem from './CartItem.vue';
import getCart from '../composables/getCart';
import { ref } from 'vue';
const { cartItems, clearCart } = getCart('cartItems');
</script>

<style scoped>
.display {
	display: block;
}
.cart-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.cart {
	position: fixed;
	top: 10%;
	right: 0;
	background-color: #fff;
	padding: 0;
	width: 30%;
	min-height: 30rem;
	max-height: 80%; /* Set a maximum height for the cart */
	overflow-y: auto;
	border-radius: 0.3rem;
	z-index: 10;
	box-shadow: 0 0.5rem 0.4rem 0.3rem rgb(0, 0, 0, 0.6);
	animation: toggle 0.5s linear;
}
h2 {
	color: hsl(220, 13%, 13%);
	font-size: 1rem;
	text-align: left;
	padding: 0.5rem;
}
.total {
	padding: 1rem;
	font-weight: 700;
}

@media only screen and (max-width: 470px) {
	.cart {
		z-index: 20;
		width: 15%;
		top: 2%;
		right: 75%;
	}
}
@keyframes toggle {
	0% {
		transform: translateX(8rem);
	}
	50% {
		transform: translateX(-0.8rem);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
