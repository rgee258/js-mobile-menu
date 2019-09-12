import { mobileMenu } from './modules/mobile_menu.js';
import css from './css/style.css';
import '@fortawesome/fontawesome-free/js/all.js';

document.addEventListener('DOMContentLoaded', function(event) {
    mobileMenu.addToggle();
});
