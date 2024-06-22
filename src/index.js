import './style.scss';
import { route, router } from './router';
import { displayProjects } from './routeHandlers';
import { handleMenuLinks } from './menu';
import { addAnimationClasses } from './helperFunctions';

route('/', displayProjects); // This needs to be called before router()
route('/profil', () => {
  const aboutContent = `
    <h1>About Us</h1>
    <p>Welcome to our project overview application. Here you can find information about our projects and more.</p>
  `;
  document.getElementById('content').innerHTML = aboutContent;
});

document.addEventListener('DOMContentLoaded', function () {
  router();
  handleMenuLinks();
});

requestAnimationFrame(() => {
  addAnimationClasses();
});
