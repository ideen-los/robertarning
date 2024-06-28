import './style.scss';
import { route, router } from './router';
import { handleMenuLinks } from './menu';

/* 
Registers a static route and loads the corresponding route
handler functions asynchronously with the import statement
*/
route(
  '/',
  () => import('./projectsOverview.js').then((module) => module.displayProjectOverview),
  'Robert Arning – UI/UX Designer'
); // Homepage
route(
  '/profil',
  () => import('./profile.js').then((module) => module.displayProfile),
  'Robert Arning – Profil'
); // Profile page

// Call the router() and initialize the navigation
document.addEventListener('DOMContentLoaded', function () {
  router();
  handleMenuLinks();
});
