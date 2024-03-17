<template>
	<main>
		<section class="hero">
			<!-- <Cart
				v-if="showCart"
				:cartItems="cartItems"
			/> -->
			<div class="heading-content">
				<h1 class="heading-text">
					Listen to <br />
					the
					<span class="heading-span"> amazing </span>
					music sound.
				</h1>
				<p class="heading-paragraph">Experience music like never before</p>
				<RouterLink
					class="heading-btn"
					:to="{ name: 'shop' }"
					@click="goToShop"
				>
					Shop Now</RouterLink
				>
			</div>
		</section>

		<!-- LOGO SECTION -->
		<section class="logos">
			<img
				src="../assets/icons/logoipsum-1.svg"
				alt="logoipsum-1"
				class="logo"
			/>
			<img
				src="../assets/icons/logoipsum-2.svg"
				alt="logoipsum-2"
				class="logo"
			/>
			<img
				src="../assets/icons/logoipsum-3.svg"
				alt="logoipsum-3"
				class="logo"
			/>
			<img
				src="../assets/icons/logoipsum-4.svg"
				alt="logoipsum-4"
				class="logo"
			/>
			<img
				src="../assets/icons/logoipsum-5.svg"
				alt="logoipsum-5"
				class="logo"
			/>
			<img
				src="../assets/icons/logoipsum-6.svg"
				alt="logoipsum-6"
				class="logo"
			/>
		</section>

		<!-- NEW ARRIVALS SECTION -->
		<section class="new">
			<div class="heading">
				<h2 class="heading-text">New Arrivals</h2>
				<div class="nav-dots">
					<img
						src="../assets/images/button-prev.png"
						alt="button-prev"
						class="prev"
						@click="prevBtn"
					/>
					<img
						src="../assets/images/button-next.png"
						alt="button-next"
						class="next"
						@click="nextBtn"
					/>
				</div>
			</div>

			<div
				class="productsContainer"
				:style="{ transform: `translateX(${translateValue}px)` }"
			>
				<Spinner :loading="loading" />
				<Products
					:product="product"
					:addToCart="addToCart"
				/>
			</div>
		</section>

		<!-- SHOP COLLECTION -->
		<section class="shopCollection">
			<h3>Shop Collection</h3>
			<picture class="imgContainer">
				<figcaption class="headphone">
					<img
						src="https://media.istockphoto.com/id/873185080/photo/white-headphones-isolated-3d-illustration.jpg?s=612x612&w=0&k=20&c=Fr11EZasBP6UhbpQCbqCBFrqUIotATBH_ddh5jQ_u1g="
						alt="headphone"
						class="imgHeadphone"
					/>
					<h4>Headband</h4>
					<RouterLink
						class="link"
						:to="{ name: 'shop' }"
						>Collection <img src="../assets/icons/direction-right.svg"
					/></RouterLink>
				</figcaption>

				<figcaption class="earbud">
					<img
						src="https://media.istockphoto.com/id/1265599808/photo/in-ear-headphones-with-charging-case-on-white-background.jpg?s=612x612&w=0&k=20&c=qYdyeZLHvlMqK3PfIq554OJpE1eb7oyVVjuNA8CNsgU="
						alt="earbuds"
						class="imgEarbud"
					/>
					<h4>Earbuds</h4>
					<RouterLink
						class="link"
						:to="{ name: 'shop' }"
						>Collection <img src="../assets/icons/direction-right.svg"
					/></RouterLink>
				</figcaption>
			</picture>
		</section>

		<!-- BEST SELLER -->
		<section class="bestSeller">
			<h3>Best Seller</h3>
			<div class="bestcontainer">
				<products />
			</div>
		</section>

		<!-- PROMOTION -->
		<section class="promotion">
			<picture>
				<img
					src="../assets/images/last-hero.jpg"
					alt="last-hero"
					class="last-hero"
				/>
			</picture>
			<div class="promo">
				<h4>promotion</h4>
				<h2>Hurry up! 40% OFF</h2>
				<p>Thousands of high tech are waiting for you</p>
				<p class="countdown-heading">Offer expires in:</p>
				<CountDown />
				<button class="productBtn">
					<RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
				</button>
			</div>
		</section>

		<!-- FEATURES -->

		<section class="features">
			<div class="featureCard">
				<img
					src="../assets/icons/fast-delivery.svg"
					alt="fast-delivery-icon"
					class="featureImg"
				/>
				<h4>Free Shipping</h4>
				<p>Order above $200</p>
			</div>

			<div class="featureCard">
				<img
					src="../assets/icons/money.svg"
					alt="money-icon"
					class="featureImg"
				/>
				<h4>Money-back</h4>
				<p>30 days guarantee</p>
			</div>

			<div class="featureCard">
				<img
					src="../assets/icons/lock.svg"
					alt="lock-icon"
					class="featureImg"
				/>
				<h4>Secure Payments</h4>
				<p>Secured by Stripe</p>
			</div>

			<div class="featureCard">
				<img
					src="../assets/icons/call.svg"
					alt="call-icon"
					class="featureImg"
				/>
				<h4>24/7 Support</h4>
				<p>Phone and Email support</p>
			</div>
		</section>

		<!--  -->
		<section class="newsfeed">
			<h4>newsfeed</h4>
			<h3>Instagram</h3>
			<p>Sign up for more discount & promotions</p>
			<picture class="photos">
				<img
					src="https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=612x612&w=0&k=20&c=-JzAS5fjTvxyNRkYoaIlpoLfmt5AEIOcwpt6lk0D4TA="
					alt="picture of someone putting on headphones"
					class="photo"
				/>
				<img
					src="https://media.istockphoto.com/id/1891604073/photo/young-serious-designer-in-headphones.jpg?s=612x612&w=0&k=20&c=39CPg8YgDrRwRBWFl6_GjT2zNt4ulU2rHwTvS-6EJ3g="
					alt="picture of someone putting on headphones"
					class="photo"
				/>
				<img
					src="https://media.istockphoto.com/id/1409698755/photo/focused-business-man-entrepreneur-with-laptop-and-headphones-male-professional-using-computer.jpg?s=612x612&w=0&k=20&c=KcYPchqEh3K3UqOz4VniQyQFAEp7KORyUHHJ6SyjaFU="
					alt="picture of someone putting on headphones"
					class="photo"
				/>
				<img
					src="https://media.istockphoto.com/id/1423350215/photo/calm-middle-age-caucasian-man-sitting-on-sofa-listening-to-music-enjoying-meditation-for.jpg?s=612x612&w=0&k=20&c=frSBsfyk-Xz7ORPw2ebFes7TDiWvXfMss7mDDjtdzi8="
					alt="picture of someone putting on headphones"
					class="photo"
				/>
			</picture>

			<div class="newsletter">
				<img
					src="https://media.istockphoto.com/id/873185080/photo/white-headphones-isolated-3d-illustration.jpg?s=612x612&w=0&k=20&c=Fr11EZasBP6UhbpQCbqCBFrqUIotATBH_ddh5jQ_u1g="
					alt="headphone"
					class="headphone"
				/>
				<div class="input">
					<h3>Join Our Newsletter</h3>
					<p>Sign up for deals, new products and promotions</p>

					<div class="email">
						<img
							src="../assets/icons/mail.svg"
							class="mail"
						/>
						<input
							type="email"
							placeholder="Email address"
						/>
						<button>Sign up</button>
					</div>
				</div>
			</div>
		</section>

		<footer>
			<div class="first">
				<div class="info">
					<h1 class="headerLogo">SoundWaves.</h1>
					|
					<span>Headphone Store</span>
				</div>
				<nav class="footerNav">
					<RouterLink :to="{ name: 'home' }">Home</RouterLink>
					<RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
					<RouterLink :to="{ name: 'blogs' }">Blogs</RouterLink>
					<RouterLink :to="{ name: 'about' }">About</RouterLink>
					<RouterLink :to="{ name: 'contactus' }">Contact Us</RouterLink>
				</nav>
			</div>
			<hr />
			<div class="second">
				<div class="copyright">
					<p>Copyright &copy; 2024 SoundWaves. All rights reserved</p>
					<span>Privacy Policy</span>
					<span>Terms of use</span>
				</div>
				<div class="socials">
					<img
						src="../assets/icons/instagram.svg"
						alt="instagram-logo"
						class="instagram"
					/>
					<img
						src="../assets/icons/facebook.svg"
						alt="facebook-logo"
						class="facebook"
					/>
					<img
						src="../assets/icons/youtube.svg"
						alt="youtube-logo"
						class="youtube"
					/>
				</div>
			</div>
		</footer>
	</main>
</template>
<script>
import CountDown from '../components/CountDown.vue';
import { auth } from '../firebase/config';
import Products from '../components/Products.vue';
import Cart from '../components/Cart.vue';
import getCollection from '../composables/getCollection';
import { ref } from 'vue';
export default {
	data() {
		return {
			loading: false,
			translateValue: 0,
			currentIndex: 0
		};
	},
	methods: {
		nextBtn() {
			if (this.currentIndex < this.products.length - 1) {
				this.currentIndex++;
				this.translateValue -= this.slideWidth();
			}
		},
		prevBtn() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
				this.translateValue += this.slideWidth();
			}
		},
		slideWidth() {
			return 150; // Assuming each slide has a width of 100px
		}
		// goToShop() {
		// 	const user = this.$firebase.auth().currentUser;

		// 	if (user) {
		// 		this.$router.push('/shop'); // Replace '/shop' with the actual path to your shop page
		// 	} else {
		// 		alert('Please sign in to access the shop.'); // You can replace this with a more sophisticated sign-in modal or redirect to a sign-in page
		// 	}
		// }
	},
	components: {
		CountDown,
		Cart,
		Products
	},
	props: {
		product: Object
	},
	name: 'Home',

	setup() {
		const { products } = getCollection('products');

		const showCart = ref(false);

		const cartItems = ref([]);

		const addToCart = product => {
			const existingItem = cartItems.value.find(item => item.id === product.id);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				cartItems.value.push({ ...product, quantity: 1 });
			}
		};

		const toggleCart = () => {
			showCart.value = !showCart.value;
		};
		return {
			showCart,
			cartItems,
			addToCart,
			toggleCart,
			products
		};
	}
};
</script>

<style lang="sass" scoped></style>
