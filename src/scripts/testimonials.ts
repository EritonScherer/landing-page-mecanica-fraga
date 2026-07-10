import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';

const testimonialSwiper = document.querySelector<HTMLElement>('.testimonialsSwiper');

if (testimonialSwiper) {
  new Swiper(testimonialSwiper, {
    modules: [Navigation, Pagination, A11y],
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: '.testimonialsNext',
      prevEl: '.testimonialsPrev',
    },
    pagination: {
      el: '.testimonialsPagination',
      clickable: true,
    },
    a11y: {
      prevSlideMessage: 'Avaliação anterior',
      nextSlideMessage: 'Próxima avaliação',
      paginationBulletMessage: 'Ir para avaliação {{index}}',
    },
    breakpoints: {
      720: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
}
