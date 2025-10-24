import '../scss/style.scss';
// import { clickBtn } from '../js/modules/test';
import { showMenu, removeMenu } from './modules/menu';
import { scrollHeader } from './modules/header';
import { homeSwiper, newSwiper } from './modules/swiper';
import { scrollActive } from './modules/scroll';

document.addEventListener('DOMContentLoaded', () => {
  showMenu();
  removeMenu();
  scrollHeader();
  scrollActive();
});
