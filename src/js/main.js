import '../scss/style.scss';
// import { clickBtn } from '../js/modules/test';
import { showMenu, removeMenu } from './modules/menu';

document.addEventListener('DOMContentLoaded', () => {
  showMenu();
  removeMenu();
});
