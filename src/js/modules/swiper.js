// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:
export const homeSwiper = new Swiper('.home-swiper', {
  spaceBetween: 30,
  loop: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
