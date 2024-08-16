<script lang="ts" setup>
const projects = [
	{
		link: "https://ildconsulting.netlify.app/",
		headerTxt: "Consulting",
		desc: "Vue,NUXT",
	},
	{
		link: "https://ildconsulting.netlify.app/",
		headerTxt: "Consulting",
		desc: "Vue,NUXT",
	},
	{
		link: "https://ildconsulting.netlify.app/",
		headerTxt: "Consulting",
		desc: "Vue,NUXT",
	},
	{
		link: "https://ildconsulting.netlify.app/",
		headerTxt: "Consulting",
		desc: "Vue,NUXT",
	},
];
</script>

<template>
	<section class="about">
		<div class="container_wrap about_wrap">
			<img
				class="avatarka"
				src="../assets/img/profile_img.jpg"
				alt="avatar"
				data-aos="fade-down"
			/>
			<h2 class="title_about" data-aos="fade-up">
				I write code <span> quickly </span> <br />
				and <span> professionally!</span>
			</h2>
			<p class="about_desc" data-aos="fade-up">
				I am a Front-end developer over 2 years of professional experience,
				specializing in frontend development. I am good at understanding the
				principles of front-end work, as well as writing pages and components
				quickly.
			</p>
			<div class="wrap_buttons">
				<button class="touch_button" data-aos="fade-right">Get In Touch</button>
				<button class="download_button" data-aos="fade-left">
					Download CV
				</button>
			</div>
		</div>
	</section>
	<section class="expirience">
		<div class="container_wrap exp_wrap">
			<h2 class="exp_title" data-aos="fade-up">EXPERIENCE WITH</h2>
			<ul class="list_frames">
				<nuxt-icon
					name="javascript"
					filled
					class="exp_icon"
					data-aos="fade-right"
				></nuxt-icon>
				<nuxt-icon
					name="html"
					filled
					class="exp_icon"
					data-aos="fade-right"
				></nuxt-icon>
				<nuxt-icon
					name="css"
					filled
					class="exp_icon"
					data-aos="fade-right"
				></nuxt-icon>
				<nuxt-icon
					name="reactjs"
					filled
					class="exp_icon"
					data-aos="fade-left"
				></nuxt-icon>
				<nuxt-icon
					name="vue"
					filled
					class="exp_icon"
					data-aos="fade-left"
				></nuxt-icon>
				<nuxt-icon
					name="nuxt"
					filled
					class="exp_icon"
					data-aos="fade-left"
				></nuxt-icon>
			</ul>
		</div>
	</section>
	<section class="projects">
		<div class="container_wrap projects_wrap">
			<h2 class="title_projects" data-aos="fade-down">PROJECTS</h2>
			<div class="wrap_projects_cards">
				<CardProject
					:desc="'Vue,NUXT'"
					:link="'https://ildconsulting.netlify.app/'"
					:header-txt="'Consulting'"
					class="consult_proj"
					data-aos="fade-right"
				></CardProject>
				<CardProject
					:desc="'Vue,NUXT'"
					:link="'https://earth.devbazu.com/uk'"
					:header-txt="'Earth-Social'"
					class="earth_proj"
					data-aos="fade-left"
				></CardProject>
				<CardProject
					:desc="'Vue,NUXT'"
					:link="'https://og.movie/'"
					:header-txt="'OG-movie'"
					class="og_proj"
					data-aos="fade-right"
				></CardProject>
				<CardProject
					:desc="'JavaScript,SCSS,HTML'"
					:link="'https://mxm-kotyk.github.io/team-project-icecream/'"
					:header-txt="'Ice-Cream AD'"
					class="ice_proj"
					data-aos="fade-left"
				></CardProject>
				<CardProject
					:desc="'React,JavaScript'"
					:link="'https://romarionik.github.io/task-pro-team-project/'"
					:header-txt="'Task-Pro'"
					class="task_proj"
					data-aos="fade-right"
				></CardProject>
				<CardProject
					:desc="'JavaScript,SCSS,HTML'"
					:link="'https://romarionik.github.io/filmoteka-team-project/'"
					:header-txt="'Film-library'"
					class="film_proj"
					data-aos="fade-left"
				></CardProject>
				<CardProject
					:desc="'JavaScript,CSS,HTML'"
					:link="'https://str0ng3r.github.io/AUTOMAX-GORZOW/'"
					:header-txt="'AUTOMAX-lending'"
					class="auto_proj"
					data-aos="fade-right"
				></CardProject>
				<CardProject
					:desc="'React,CSS,HTML'"
					:link="'https://str0ng3r.github.io/planeta_znizok/'"
					:header-txt="'Olaf-lending'"
					class="olaf_proj"
					data-aos="fade-left"
				></CardProject>
			</div>
		</div>
	</section>
	<section class="work_exp">
		<div class="container_wrap work_wrap">
			<h2 class="title_work_exp" data-aos="fade-down">EXPIRIENCE</h2>
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
.title_work_exp {
	font-family: Poppins;
	font-size: 3.5rem;
	font-style: normal;
	font-weight: 800;
	line-height: 3.5748rem; /* 102.137% */
	text-transform: uppercase;
	background: linear-gradient(180deg, #5badff 0%, #1373d1 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin-bottom: 6.1rem;
}
.earth_proj {
	background: url("../assets/img/earthproj.jpg") lightgray 50% / cover no-repeat !important;
}
.olaf_proj {
	background: url("../assets/img/olafproj.jpg") lightgray 50% / cover no-repeat !important;
}
.og_proj {
	background: url("../assets/img/ogproj.jpg") lightgray 50% / cover no-repeat !important;
}
.film_proj {
	background: url("../assets/img/filmproj.jpg") lightgray 50% / cover no-repeat !important;
}
.auto_proj {
	background: url("../assets/img/autoproj.jpg") lightgray 50% / cover no-repeat !important;
}
.ice_proj {
	background: url("../assets/img/iceproj.jpg") lightgray 50% / cover no-repeat !important;
}
.task_proj {
	background: url("../assets/img/taskproj.jpg") lightgray 50% / cover no-repeat !important;
}
.consult_proj {
	background: url("../assets/img/consultproj.jpg") lightgray 50% / cover
		no-repeat !important;
}
.projects_wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.work_exp {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.work_wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.wrap_projects_cards {
	width: 100%;
	max-width: 81rem;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 3rem;
	flex-wrap: wrap;
}
.title_projects {
	background: linear-gradient(180deg, #ff8660 0%, #d5491d 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-family: Poppins;
	font-size: 3.5rem;
	font-style: normal;
	font-weight: 800;
	line-height: 3.5rem; /* 102.137% */
	text-transform: uppercase;
	margin-bottom: 2.7rem;
}
.list_frames {
	width: 100%;
	gap: 6rem;
	max-width: 55.4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.6s ease-in-out;
}
.projects {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 9.6rem;
}
.exp_icon:hover {
	transition: all 0.6s ease-in-out;
	transform: scale(1.3);
	cursor: pointer;
}
.exp_title {
	color: #c5c5c5;
	font-family: Poppins;
	font-size: 2rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	letter-spacing: 0.24rem;
	margin-bottom: 5.4rem;
}
.exp_wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.expirience {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 8.8rem;
	margin-bottom: 9.3rem;
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
