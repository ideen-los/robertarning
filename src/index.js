import { setRoute, router } from './router';
import { handleMenuLinks } from './menu';

/* 
Register static routes and load the corresponding route
handler functions asynchronously with the import statement.
Also set the document title with the 3rd parameter.
*/
setRoute(
  '/',
  () => import('./projectsOverview.js').then((module) => module.displayProjectOverview),
  'Robert Arning – UI/UX Designer'
); // Homepage
setRoute(
  '/profil',
  () => import('./profile.js').then((module) => module.displayProfile),
  'Robert Arning – Profil'
); // Profile page

// Call the router() and initialize the navigation
document.addEventListener('DOMContentLoaded', function () {
  router();
  handleMenuLinks();
});
