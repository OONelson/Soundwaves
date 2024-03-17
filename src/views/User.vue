<template>
	<div class="user">
		<div class="userHead">
			<!-- <div class="userHeadDetails"> -->
			<!-- <div class="userPicContainer">
					<input
						@change="editPicture"
						type="file"
						class="editPic"
					/> -->
			<!-- <font-awesome-icon
						
						icon="pencil-alt"
						class="editIcon"
					/> -->
			<!-- <button @click="Update">Update</button> -->
			<!-- </div>
				<p class="fileError">
					{{ fileError }}
				</p> -->
			<!-- </div> -->
			<h2>User Profile</h2>

			<div
				v-if="user"
				class="userDetails"
			>
				logged in as {{ user.email }}
			</div>
			<button
				v-if="user"
				class="otherBtn"
				@click="logout"
			>
				Logout
			</button>
		</div>
	</div>
</template>

<script>
// import LoginForm from '../components/LoginForm.vue';
// import SignupForm from '../components/SignupForm.vue';
import getUser from '../composables/getUser';
// import useStorage from '../composables/useStorage';
import { ref } from 'vue';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

// icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPencilAlt);

export default {
	components: {
		// LoginForm,
		// SignupForm,
		FontAwesomeIcon
	},
	setup() {
		// const { filePath, url, uploadImage } = useStorage();

		const show = ref(true);
		// const file = ref(null);
		// const fileError = ref(null);
		const router = useRouter();
		const { user } = getUser();

		const logout = () => {
			signOut(auth);
			router.push('/');
		};

		// const Update = async () => {
		// 	if (file.value) {
		// 		await uploadImage(file.value);
		// 		console.log('image uploaded, url:', url.value);
		// 	}
		// };
		// // allowed file types
		// const types = ['image/png', 'image/jpeg'];
		// const editPicture = e => {
		// 	const selected = e.target.files[0];
		// 	if (selected && types.includes(selected.type)) {
		// 		file.value = selected;
		// 		fileError.value = null;
		// 	} else {
		// 		file.value = null;
		// 		fileError.value = 'please select an image file(png or jpeg)';
		// 	}
		// };
		return { show, logout, user };
	}
};
</script>

<style>
.userHead {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	padding: 2rem 1rem;
}
.user h2,
h3 {
	color: var(--dark-color1);
}

.user span {
	padding: 0 0.3rem;
	text-decoration: underline;
}
.user {
	color: var(--light-color3);
}
.otherBtn {
	color: var(--background-color);
	background-color: #1c181d;
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	transition: all 0.3s ease;
	cursor: pointer;
	margin-right: 0.2rem;
	border: 1px solid #656266;
	/*border-bottom: 2px solid #322f33;*/
}
.otherBtn:hover {
	color: var(--dark-color1);
	border-bottom: 4px solid #322f33;

	/*background-color: var(--background-color);*/
}

.otherBtn:active {
	border-bottom: 0;
	/*background-color: #e1e1e1;*/
	border-top: 4px solid #322f33;
}
.editIcon {
	color: var(--light-color3);
}
.fileError {
	color: crimson;
	font-weight: var(--button-text);
}
</style>
