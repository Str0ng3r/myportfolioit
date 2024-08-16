<script setup lang="ts">
const props = defineProps({
	headerTxt: {
		type: String,
		default: "",
	},
	desc: {
		type: String,
		default: "",
	},
	link: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<a class="card" :href="link">
		<div class="textBox">
			<p class="text head">{{ headerTxt }}</p>
			<span>{{ desc }}</span>
		</div>
	</a>
</template>

<style lang="scss" scoped>
.card {
	width: 39rem;
	height: 23.5rem;
	background: #313131;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	justify-content: center;
	color: white;
	transition: 0.2s ease-in-out;
	position: relative;
	overflow: hidden;
}
.card::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: inherit;
	filter: blur(0);
	transition: filter 0.2s ease-in-out;
	z-index: 0;
}

.card:hover::before {
	filter: blur(5px); /* Задаем степень размытия */
}

.img {
	height: 30%;
	position: absolute;
	transition: 0.2s ease-in-out;
	z-index: 1;
}

.textBox {
	opacity: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0rem;
	transition: 0.2s ease-in-out;
	z-index: 2;
}

.textBox > .text {
	font-weight: bold;
}

.textBox > .head {
	font-family: Poppins;
	font-size: 3.5rem;
	font-style: normal;
	font-weight: 800;
	background: linear-gradient(180deg, #ff8660 0%, #d5491d 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.textBox > .price {
	font-size: 17px;
}

.textBox > span {
	font-size: 2rem;
	font-family: Poppins;
	font-weight: 600;
	background: var(
		--Orange-Gradient,
		linear-gradient(180deg, #ff8660 0%, #d5491d 100%)
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.card:hover > .textBox {
	opacity: 1;
}
</style>
