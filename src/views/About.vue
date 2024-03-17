<template>
	<div class="about">
		<div class="text">
			<h2>About Us The SoundWaves.</h2>
			<div class="paragraph">
				<p class="first">
					At SoundWaves, we believe that music is more than just a sound; it's
					an emotion, a journey, and a companion that adds rhythm to our lives.
				</p>
				<h3>Why Choose SoundWaves?</h3>
				<p class="second">
					✨ Unparalleled Quality: Immerse yourself in the purest form of audio
					with our handpicked selection of premium headphones. 🌐 Wide Range,
					Diverse Choices: Explore our extensive collection featuring a diverse
					range of headphones to suit every taste, lifestyle, and budget. 🚚
					Fast and Secure Shipping: Experience the joy of receiving your order
					swiftly and securely. 🔒 Secure Shopping: Rest easy knowing that your
					personal information is protected with state-of-the-art security
					measures. SoundWaves prioritizes your privacy and ensures a safe and
					secure online shopping experience.
				</p>
				<span>
					Welcome to SoundWaves, where every beat matters, and every note
					counts.
				</span>
			</div>
		</div>

		<picture>
			<img
				src="https://media.istockphoto.com/id/680875088/photo/kid-studio-shoot-using-headphone-listening-music.jpg?s=612x612&w=0&k=20&c=1-BkxYAcZhoOmovU12AgCADwlpgnZjn7QNG3-cILM08="
				alt="boy listening to music"
			/>
		</picture>
	</div>
</template>

<style scoped>
.about {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 3rem;
	text-align: center;
	width: 100%;
	background-color: var(--light-color1);
}
.text {
	padding-right: 2rem;

	flex-wrap: wrap;
}
.paragraph span {
	text-align: right;
	width: 70%;
}
ul li {
	list-style: none;
	padding: 0.5rem 0;
	color: var(--light-color3);
}
p {
	color: var(--light-color3);
}
@media screen and (max-width: 470px) {
	.about picture {
		display: none;
	}
	.about {
		flex-direction: column;
	}
}
</style>
