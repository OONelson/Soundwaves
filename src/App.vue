<template>
	<header ref="headerRef">
		<img
			@click="openMenu"
			src="./assets/icons/menu-line-horizontal.svg"
			alt="menu-bar"
			class="menuBar"
		/>
		<h1 class="headerLogo">SoundWaves.</h1>
		<nav class="DeskNav">
			<RouterLink :to="{ name: 'home' }">Home</RouterLink>
			<RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
			<!-- <RouterLink :to="{ name: 'blogs' }">Blogs</RouterLink> -->
			<RouterLink :to="{ name: 'about' }">About</RouterLink>
		</nav>
		<transition name="modal-fade">
			<nav v-if="isMenuOpen">
				<img
					@click="closeMenu"
					src="./assets/icons/icon-cross.svg"
					alt="close icon"
					class="closeModal"
				/>
				<RouterLink :to="{ name: 'home' }">Home</RouterLink>
				<RouterLink :to="{ name: 'shop' }">Shop</RouterLink>
				<!-- <RouterLink :to="{ name: 'blogs' }">Blogs</RouterLink> -->
				<RouterLink :to="{ name: 'about' }">About</RouterLink>
			</nav>
		</transition>
		<Toaster
			ref="headerRef"
			position="top-right"
			richColors
			class="toaster"
		/>

		<div class="bar">
			<RouterLink
				v-if="user"
				:to="{ name: 'user' }"
				><img
					src="./assets/icons/user-circle.svg"
					alt="user"
					class="userIcon"
			/></RouterLink>
			<div
				v-if="user"
				class="shoppingContainer"
			>
				<img
					src="./assets/icons/shopping-bag.svg"
					alt="shopping bag"
					class="shoppingBag"
					@click="toggleCart"
				/>
			</div>
		</div>
	</header>

	<RouterView />
	<div>
		<Cart
			v-if="showCart"
			@click="closeCart"
		/>
	</div>
</template>
<script setup>
import { Toaster, toast } from 'vue-sonner';
import { RouterLink, RouterView } from 'vue-router';
import Cart from './components/Cart.vue';
import getUser from './composables/getUser';
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
// const cart = ref([]);
const headerRef = ref(null);

onMounted(() => {
	const header = headerRef.value;
	const sticky = header.offsetTop;

	window.onscroll = () => {
		if (window.pageYOffset > sticky) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	};
});

const addToCart = product => {
	cart.push(product);
	return toast('My first toast');
};
const openMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
	isMenuOpen.value = false;
};
const showCart = ref(false);

const toggleCart = () => {
	showCart.value = !showCart.value;
};
const closeCart = () => {
	showCart.value = false;
};

const show = ref(true);

const { user } = getUser();

const logout = () => {
	signOut(auth);
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
#app {
	font-family: 'Nunito', sans-serif;
}
header {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 1.5rem;
	background-image: linear-gradient(to right, #ffc655, #ffca60, #ffcb65);
}
nav {
	width: 40%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
nav h1 {
	display: none;
}
nav a {
	color: var(--dark-color1);
	text-decoration: none;
	font-size: 1rem;
	font-weight: var(--header-text);
}
nav a.router-link-exact-active {
	color: var(--background-color);
}
nav .closeModal {
	display: none;
}
header.sticky {
	position: fixed;
	top: 0;
	height: 10%;
	width: 100%;
	background-image: linear-gradient(to right, #ffc655, #ffca60, #ffcb65);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	z-index: 10;
}
.headerLogo {
	color: var(--dark-color1);
	font-size: 2rem;
	font-weight: var(--header-text);
}
.mobileNav {
	display: none;
}
.bar {
	width: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.menuBar {
	display: none;
}
.shoppingContainer {
	display: flex;
	align-items: center;
}
.search,
.user,
.shoppingBag {
	cursor: pointer;
}
.userIcon {
	padding-top: 0.5rem;
}
@media screen and (max-width: 470px) {
	header {
		padding: 0.5rem;
	}
	header .headerLogo {
		font-size: 1.2rem;
	}
	header .menuBar {
		display: block;
	}
	header.sticky {
		height: 2%;
		width: 30%;
	}
	.DeskNav {
		display: none;
	}
	header nav {
		flex-direction: column;
		background-color: var(--background-color);
		position: fixed;
		top: 0%;
		left: 0%;
		height: 100vh;
		width: 50vw;
		z-index: 5;
		border-radius: 0.3rem;
		box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.5);
	}

	nav a {
		font-size: 0.8rem;
		margin: -10rem 0;
	}
	nav a.router-link-exact-active {
		color: var(--light-color3);
	}
	nav .closeModal {
		display: block;
		position: absolute;
		top: 1%;
		right: 1%;
	}
	.modal-fade-enter-active,
	.modal-fade-leave-active {
		transition: all 0.5s;
	}

	.modal-fade-leave-to {
		opacity: 0.2;
		transform: translateX(-100%);
	}
	.modal-fade-enter {
		opacity: 0.2;
		transform: scale(0.8);
	}
	.toaster {
		width: 7rem;
	}
}
</style>
