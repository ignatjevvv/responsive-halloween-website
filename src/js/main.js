import '../scss/style.scss';

import { showMenu, removeMenu } from './modules/menu';
import { scrollActive } from './modules/scroll';
import { scrollHeader } from './modules/header';
import { scrollUp } from './modules/scrollup';
import { homeSwiper, newSwiper } from './modules/swiper';

document.addEventListener('DOMContentLoaded', () => {
  showMenu();
  scrollActive();
  removeMenu();
  scrollHeader();
  scrollUp();
});
