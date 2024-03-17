<template>
	<transition name="modal-fade">
		<div
			v-if="isOpen"
			@click="closeModal"
			class="modalContainer"
		>
			<div
				@click.stop
				class="regModal"
			>
				<!-- <div class="modalHeader"> -->
				<img
					@click="closeModal"
					src="../assets/icons/icon-cross.svg"
					alt="close icon"
					class="closeModal"
				/>
				<div class="regModalContent">
					<div
						class="Login container"
						v-if="show"
					>
						<h3>Login</h3>
						<LoginForm />
						<p>
							No account?
							<span
								class="change"
								@click="show = false"
								>Signup</span
							>
							instead
						</p>
					</div>
					<div
						class="signup container"
						v-else
					>
						<h3>Sign up</h3>
						<SignupForm />
						<p>
							Got an account?
							<span
								class="change"
								@click="show = true"
								>Login</span
							>
							instead
						</p>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faEye, faEyeSlash);

import SignupForm from './SignupForm.vue';
import LoginForm from './LoginForm.vue';
// import getUser from '../composables/getUser';
import { ref } from 'vue';
// import { auth } from '../firebase/config';
// import { signOut } from 'firebase/auth';
export default {
	props: {
		isOpen: Boolean
	},
	methods: {
		closeModal() {
			this.$emit('close');
		}
	},
	components: {
		LoginForm,
		SignupForm,
		FontAwesomeIcon
	},
	setup() {
		const show = ref(true);

		return { show };
	}
};
</script>

<style>
.modalContainer {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}
.regModal {
	width: 60%;
	height: 70%;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: var(--light-color1);
	color: black;
	z-index: 1000;
	box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.5);
}
.regModalContent {
	display: flex;
	justify-content: center;
	align-items: center;
}
form {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
}
form input {
	padding: 1rem 1rem 0.5rem 1rem;
	margin-top: 1rem;
	background: white;
	border-radius: 0.3rem;
	color: var(--dark-color1);
	font-size: 1.1rem;
	font-weight: var(--button-text);
	width: 120%;
}
form button {
	padding: 0.5rem 1.2rem;
	margin-bottom: 1rem;
}
form .password-label {
	position: absolute;
	top: 40%;
	left: 10%;
	pointer-events: none;
	transition: transform 0.3s ease-out, font-size 0.3s ease-out;
}
form .email-label {
	position: absolute;
	top: 13%;
	left: 0;
	pointer-events: none;
	transition: transform 0.3s ease-out, font-size 0.3s ease-out;
}

form .password-label.active {
	transform: translateY(-100%);
	padding: 0 0.5rem;
	background-color: var(--background-color);
	font-size: 0.8em;
}
form .email-label.active {
	transform: translateY(-120%);
	padding: 0 0.5rem;
	background-color: var(--background-color);
	font-size: 0.8em;
}

.regModal span {
	cursor: pointer;
}
.dark-mode {
	background-color: black;
	color: #fff;
}
.change {
	font-weight: var(--header-text);
	text-decoration: underline;
}
.google {
	width: 120%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 1rem 0;
	color: #1c181d;
	background-color: var(--background-color);
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	transition: all 0.3s ease;
	cursor: pointer;
	margin-right: 0.2rem;
	border: 1px solid #656266;
	margin-left: -1.5rem;
}
.google p {
	font-weight: var(--header-text);
}
.switch {
	position: relative;
	display: inline-block;
	width: 6rem;
	height: 2.2rem;
}
.switch input {
	display: none;
}
.slider {
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 34px;
}
.slider:before {
	position: absolute;
	content: '';
	height: 26px;
	width: 26px;
	left: 4px;
	bottom: 4px;
	background-color: #fff;
	transition: 0.4s;
	border-radius: 50%;
}
input:checked + .slider {
	background-color: #2196f3;
}
input:checked + .slider:before {
	transform: translateX(60px);
}
.slider.round {
	border-radius: 34px;
}
.slider.round:before {
	border-radius: 50%;
}
.toggle-container {
	position: absolute;
	top: 5%;
	right: 5%;
}
.closeModal {
	margin: 1rem;
	cursor: pointer;
}
.error {
	color: crimson;
	font-weight: var(--button-text);
}
/* Add this to your global styles or in the component's style tag */
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
@media screen and (max-width: 470px) {
	.regModal {
		width: 80%;
		height: 90%;
	}
}
@media screen and (max-width: 375px) {
	.regModal {
		width: 90%;
		height: 90%;
	}
}
</style>
