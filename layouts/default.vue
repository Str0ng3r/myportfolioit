<script lang="ts" setup></script>

<template>
	<header data-aos="fade-down">
		<div class="container_wrap header_wrapper">
			<img class="logotipe" src="../assets/img/logo.png" alt="logo" />
			<nav class="nav_wrap">
				<a href="#projects" class="link_nav">Projects</a>
				<a href="#work_exp" class="link_nav">Experience</a>
				<a href="#contacts" class="link_nav">Contacts</a>
			</nav>
		</div>
	</header>
	<slot></slot>
</template>

<style scoped lang="scss">
header {
	opacity: 0.7;
	background: #222;
	box-shadow: 0px 4.364px 16px -2.182px rgba(0, 0, 0, 0.1);
	height: 8.2rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.logotipe {
	max-width: 8.9rem;
	width: 100%;
}
.nav_wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4.44rem;
	@include t {
		flex-direction: column;
		gap: 0.2rem;
	}
}
.link_nav {
	color: #fff;
	text-align: center;
	font-family: "Poppins";
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: 0.03rem;
	transition: color 0.6s ease-in-out;
}
.link_nav:hover {
	color: #9a33ff; /* цвет при наведении */
	animation: hoverEffect 1s ease-in-out;
}
.header_wrapper {
	justify-content: space-between;
	display: flex;
	align-items: center;
	@include m {
		padding: 0 2rem;
	}
	@include t {
		max-width: 34rem !important;
	}
}
@keyframes hoverEffect {
	0% {
		color: #000;
	}
	25% {
		color: #ff8660;
	}
	70% {
		color: #ff33cc; /* промежуточный цвет для интересного эффекта */
	}
	100% {
		color: #9a33ff;
	}
}
</style>
