import './style.scss';
import { route, router } from './router';
import { handleMenuLinks } from './menu';

// Async loading of route handlers when requested
route(
  '/',
  () => import('./projectsOverview.js').then((module) => module.displayProjectOverview),
  'Robert Arning – UI/UX Designer'
);
route(
  '/profil',
  () => import('./profile.js').then((module) => module.displayProfile),
  'Robert Arning – Profil'
);

document.addEventListener('DOMContentLoaded', function () {
  router();
  handleMenuLinks();
});
