<template>
	<div
		@click="signInWithGoogle"
		class="google"
	>
		<img
			src="../assets/icons/google.svg"
			alt="google"
		/>
		<p>Sign up with Google</p>
	</div>
	<form @submit.prevent="handleSubmit">
		<label
			class="email-label"
			:class="{ active: isFocused || email }"
		>
			Email
		</label>
		<input
			type="email"
			class="input-email"
			required
			v-model="email"
			@focus="isFocused = true"
			@blur="isFocused = false"
		/>

		<div class="passwordContainer">
			<label
				class="password-label"
				:class="{ active: isFocusedTwo || password }"
			>
				Password
			</label>
			<input
				:type="passwordFieldType"
				class="input-password"
				required
				v-model="password"
				@focus="isFocusedTwo = true"
				@blur="isFocusedTwo = false"
			/>
			<font-awesome-icon
				:icon="passwordFieldType === 'password' ? 'eye' : 'eye-slash'"
				@click="togglePasswordVisibility"
				class="toggle-icon"
			/>
		</div>
		<br />
		<button class="otherBtn">Submit</button>
		<div
			v-if="error"
			class="error"
		>
			{{ error }}
		</div>
	</form>
</template>

<script>
// icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useSignup from '../composables/useSignup';
import { auth } from '../firebase/config';
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

export default {
	props: {
		label: String
	},
	components: {
		FontAwesomeIcon
	},
	setup(props) {
		const userName = ref('');
		const isFocused = ref(false);
		const isFocusedTwo = ref(false);
		const email = ref('');
		const password = ref('');
		const passwordFieldType = ref('password');

		const { signup, error } = useSignup();
		const router = useRouter();

		const handleSubmit = async () => {
			await signup(userName.value, email.value, password.value);

			if (!error.value) {
				router.push('/home');
			}
		};

		const togglePasswordVisibility = () => {
			passwordFieldType.value =
				passwordFieldType.value === 'password' ? 'text' : 'password';
		};
		const signInWithGoogle = () => {
			const provider = new GoogleAuthProvider();
			signInWithPopup(getAuth(), provider)
				.then(result => {
					console.log(result.user);
					router.push('/home');
				})
				.catch(error => {
					console.log(error);
				});
		};
		return {
			userName,
			isFocused,
			isFocusedTwo,
			email,
			password,
			handleSubmit,
			error,
			password,
			passwordFieldType,
			togglePasswordVisibility,
			signInWithGoogle
		};
	}
};
</script>

<style scoped>
.passwordContainer {
	position: relative;
	margin-left: -3rem;
}
.toggle-icon {
	position: absolute;
	right: -2.5rem;
	top: 50%;
	transform: translateY(-10%);
	cursor: pointer;
	color: black;
}
form button {
	margin-bottom: 1rem;
}
</style>
