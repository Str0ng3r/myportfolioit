import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = AOS.init({
    // Настройки AOS (опционально)
    duration: 800,
    easing: 'ease-in-out',
  });
});