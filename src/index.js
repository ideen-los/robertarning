import './style.scss';
import { route, router } from './router';
import { displayProfile, displayProjectOverview } from './routeHandlers';
import { handleMenuLinks } from './menu';
import { addAnimationClassesOnPageLoad } from './helperFunctions';

route('/', displayProjectOverview);
route('/profil', displayProfile);

document.addEventListener('DOMContentLoaded', function () {
  router();
  handleMenuLinks();
  requestAnimationFrame(() => {
    addAnimationClassesOnPageLoad();
  });
});
