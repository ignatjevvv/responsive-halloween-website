import '../scss/style.scss';
// import { clickBtn } from '../js/modules/test';
import { showMenu, removeMenu } from './modules/menu';
import { homeSwiper } from './modules/swiper';

document.addEventListener('DOMContentLoaded', () => {
  showMenu();
  removeMenu();
});
