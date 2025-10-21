import '../scss/style.scss';
// import { clickBtn } from '../js/modules/test';
import { showMenu, removeMenu } from './modules/menu';
import { scrollHeader } from './modules/header';
import { homeSwiper } from './modules/swiper';

document.addEventListener('DOMContentLoaded', () => {
  showMenu();
  removeMenu();
  scrollHeader();
});
