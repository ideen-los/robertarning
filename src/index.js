import './style.scss';
import { route, router } from './router';
import { handleMenuLinks } from './menu';
import { addAnimationClassesOnPageLoad } from './helperFunctions';

// Async loading of route handlers when requested
route('/', () => import('./projectsOverview.js').then((module) => module.displayProjectOverview));
route('/profil', () => import('./profile.js').then((module) => module.displayProfile));

document.addEventListener('DOMContentLoaded', function () {
  router();
  handleMenuLinks();
  /* requestAnimationFrame(() => {
    addAnimationClassesOnPageLoad();
  }); */
});
