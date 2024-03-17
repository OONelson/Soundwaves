<template>
	<div
		@click="signInWithGoogle"
		class="google"
	>
		<img
			src="../assets/icons/google.svg"
			alt="google"
		/>
		<p>Continue with Google</p>
	</div>
	<form
		@submit.prevent="handleSubmit"
		:class="{ 'dark-mode': isDarkMode }"
	>
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
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth';

import useLogin from '../composables/useLogin';
export default {
	props: {
		label: String
	},
	components: {
		FontAwesomeIcon
	},
	setup(props) {
		const email = ref('');
		const isFocused = ref(false);
		const isFocusedTwo = ref(false);
		const password = ref('');
		const passwordFieldType = ref('password');

		const { login, error } = useLogin();
		const router = useRouter();

		const handleSubmit = async () => {
			await login(email.value, password.value);

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
					console.log(error.code);
					switch (error.code) {
						case 'auth/invalid-email':
							error.value = 'Invalid email';
							break;
						case 'auth/user-not-found':
							error.value = 'No account with that email was found';
							break;
						case 'auth/wrong-password':
							error.value = 'Incorrect password';
							break;
						default:
							error.value = 'Email or password was incorrect';
							break;
					}
				});
		};

		return {
			email,
			isFocused,
			isFocusedTwo,
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
	color: black; /* You can style the icon color as you like */
}
.dark-mode {
	background-color: black;
	color: #fff;
}
form button {
	margin-bottom: 1rem;
}
</style>
