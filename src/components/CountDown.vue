<template>
	<div class="countdownContainer">
		<div class="countdown-years countdown">
			<p>
				{{ years }}
			</p>
			<span class="countdown-text text">Year</span>
		</div>

		<div class="countdown-months countdown">
			<p>{{ months }}</p>
			<span class="countdown-text text">Months</span>
		</div>

		<div class="countdown-days countdown">
			<p>{{ days }}</p>
			<span class="countdown-text text">Days</span>
		</div>

		<div class="countdown-hours countdown">
			<p>{{ hours }}</p>
			<span class="countdown-text text">Hours</span>
		</div>

		<div class="countdown-minutes countdown">
			<p>{{ minutes }}</p>
			<span class="countdown-text text">Minutes</span>
		</div>

		<div class="countdown-secs countdown">
			<p>{{ seconds }}</p>
			<span class="countdown-text text">Seconds</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			targetDate: new Date('2025-10-04T23:59:59'),
			timeRemaining: {},
			intervalId: null
		};
	},
	computed: {
		years() {
			return this.timeRemaining.years || 0;
		},
		months() {
			return this.timeRemaining.months || 0;
		},
		days() {
			return this.timeRemaining.days || 0;
		},
		hours() {
			return this.timeRemaining.hours || 0;
		},
		minutes() {
			return this.timeRemaining.minutes || 0;
		},
		seconds() {
			return this.timeRemaining.seconds || 0;
		}
	},
	methods: {
		startTimer() {
			this.intervalId = setInterval(() => {
				const now = new Date();
				const difference = this.targetDate - now;

				if (difference > 0) {
					this.timeRemaining = this.calculateTimeRemaining(difference);
				} else {
					clearInterval(this.intervalId);
					console.log('Countdown reached zero!');
				}
			}, 1000);
		},
		calculateTimeRemaining(timeDifference) {
			const oneSecond = 1000;
			const oneMinute = oneSecond * 60;
			const oneHour = oneMinute * 60;
			const oneDay = oneHour * 24;
			const oneMonth = oneDay * 30;
			const oneYear = oneDay * 365;

			const years = Math.floor(timeDifference / oneYear);
			const months = Math.floor((timeDifference % oneYear) / oneMonth);
			const days = Math.floor((timeDifference % oneMonth) / oneDay);
			const hours = Math.floor((timeDifference % oneDay) / oneHour);
			const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
			const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

			return { years, months, days, hours, minutes, seconds };
		}
	},
	mounted() {
		this.startTimer();
	},
	beforeDestroy() {
		clearInterval(this.intervalId);
	}
};
</script>

<style scoped>
.countdownContainer {
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 35rem;
}
.countdown {
	display: flex;
	text-align: center;
	flex-direction: column;
}
.countdown p {
	background-color: var(--background-color);
	font-size: 2rem;
	font-weight: var(--header-text);
	padding: 1.5rem;
	border-radius: 0.4rem;
}
@media screen and (max-width: 470px) {
	.countdownContainer {
		width: 80vw;
	}
	.countdown p {
		font-size: 1rem;
		padding: 0.5rem;
	}
	.countdown-text {
		font-size: 0.8rem;
	}
}
</style>
