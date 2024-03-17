<template>
	<div
		class="user"
		:class="{ blur: isModalOpen }"
	>
		<!-- <div class="userHead">
			<div
				v-if="user"
				class="userDetails"
			>
				logged in as {{ user.userName }}
			</div>
			<button
				v-if="user"
				class="otherBtn"
				@click="logout"
			>
				Logout
			</button>
		</div> -->

		<div class="welcome-content">
			<img
				src="https://media.istockphoto.com/id/1640060653/vector/customer-support-hand-drawn-illustration.jpg?s=612x612&w=0&k=20&c=0lerut6YXwAsWCAKmvQ8noWYdkK12y8MNp_Y83uFJB8="
				alt="svg of a man wearing headset"
			/>
			<div class="text">
				<h2>Welcome to SoundWaves.</h2>
				<p>
					where every beat matters, and every note counts.At SoundWaves, we
					believe that music is more than just a sound; it's an emotion, a
					journey, and a companion that adds rhythm to our lives.
				</p>
				<button
					@click="openModal"
					class="otherBtn"
				>
					Get started
				</button>
			</div>
		</div>
	</div>
	<Modal
		:isOpen="isModalOpen"
		@close="closeModal"
	/>
</template>

<script>
import Modal from '../components/Modal.vue';
export default {
	components: {
		Modal
	},
	data() {
		return {
			isModalOpen: false
		};
	},
	methods: {
		openModal() {
			this.isModalOpen = true;
		},
		closeModal() {
			this.isModalOpen = false;
		}
	}
};
</script>

<style>
.userHead {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 0 1rem;
}
.welcome-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 2rem 3rem;
	width: 100%;
	background-color: white;
}
.welcome-content img {
	padding-top: 2rem;
}
.welcome-content .text {
	background-color: white;
	width: 20rem;
}
.welcome-content .text button {
	margin-top: 1rem;
	padding: 0.6rem 1.2rem;
}
.blur {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	filter: blur(5px);
	z-index: 1;
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
	width: 100vw;
	height: 100vh;
}

.otherBtn {
	color: var(--background-color);
	background-color: var(--dark-color1);
	padding: 0.6rem 1rem;
	border: 1px;
	border-radius: 0.3rem;
	font-weight: var(--header-text);
	transition: all 0.3s ease-in;
	cursor: pointer;
	margin: 0;
}
.otherBtn:hover {
	color: var(--dark-color1);
	background-color: var(--background-color);
	border: 1px solid var(--dark-color1);
}
@media screen and (max-width: 470px) {
	.welcome-content {
		flex-direction: column;
	}
	.welcome-content img {
		width: 80%;
	}
}
</style>
