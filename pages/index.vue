<script lang="ts" setup></script>

<template>
	<section class="about">
		<div class="container_wrap about_wrap">
			<img class="avatarka" src="../assets/img/profile_img.jpg" alt="avatar" />
			<h2 class="title_about">
				I write code <span> quickly </span> <br />
				and <span> professionally!</span>
			</h2>
			<p class="about_desc">
				I am a Front-end developer over 2 years of professional experience,
				specializing in frontend development. I am good at understanding the
				principles of front-end work,  as well as writing pages and components
				quickly.
			</p>
			<div class="wrap_buttons">
				<button class="touch_button">Get In Touch</button>
				<button class="download_button">Download CV</button>
			</div>
		</div>
	</section>
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
.download_button {
	background-color: transparent;
	border-radius: 5rem;
	border: 2px solid var(--Primary-Color, #fff);
	width: 100%;
	text-align: center;
	max-width: 19.5rem;
	color: #fff;
	-webkit-text-stroke-width: 0.3246873915195465;
	-webkit-text-stroke-color: #000;
	font-family: Poppins;
	font-size: 2.138rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	padding: 1.6rem 2.9rem;
	white-space: nowrap;
	transition: all 0.6s ease-in-out;
}
.touch_button {
	border-radius: 5rem;
	border: 1px solid #fff;
	background: #ffffff;
	color: #161513;
	-webkit-text-stroke-width: 0.3246873915195465;
	-webkit-text-stroke-color: #fff;
	font-family: Poppins;
	font-size: 2.138rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	width: 100%;
	text-align: center;
	max-width: 19.5rem;
	padding: 1.6rem 2.9rem;
	white-space: nowrap;
	transition: all 0.6s ease-in-out;
}
.touch_button:hover {
	color: #ffffff;
	background-color: transparent;
	transition: all 0.6s ease-in-out;
}
.download_button:hover {
	color: #161513;
	background-color: #ffffff;
	transition: all 0.6s ease-in-out;
}
.wrap_buttons {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.8rem;
}
.about_desc {
	color: #c5c5c5;
	text-align: center;
	font-family: Poppins;
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
	letter-spacing: 0.036rem;
	margin: 5.4rem;
}
.title_about {
	color: #fff;
	text-align: center;
	font-family: Poppins;
	font-size: 5.5rem;
	font-style: normal;
	font-weight: 800;
	line-height: 6.3357rem; /* 115.195% */
	margin-bottom: 4rem;
}
.title_about span {
	background: linear-gradient(
		114deg,
		#ff8660 36.32%,
		#ea7580 62.44%,
		#9a33ff 85.76%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: Poppins;
	font-size: 5.5rem;
	font-style: normal;
	font-weight: 800;
	line-height: 6.3357rem;
}
.about_wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.avatarka {
	width: 100%;
	max-width: 22.2rem;
	border-radius: 11.45rem;
	margin-bottom: 3.4rem;
}
.about {
	width: 100%;
	padding-top: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.logotip {
	font-family: Poppins;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 800;
	line-height: 1.5625rem;
	background: linear-gradient(104deg, #ff8660 17.69%, #9a33ff 81.67%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
