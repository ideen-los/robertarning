import { setupPage } from './helperFunctions';
import { handleMoreProjectsLinks } from './moreProjects';
import { loadSingleProject } from './singleProject';

const routes = {};

export const route = function (path, handlerPromise) {
  routes[path] = handlerPromise;
};

export const router = function () {
  const urlPath = window.location.pathname || '/';
  // First, check for static routes
  if (routes[urlPath]) {
    routes[urlPath]()
      .then((handler) => {
        handler();
        setupPage();
      })
      .catch((error) => {
        console.error('Failed to load route handler', error);
      });
  } else {
    // Fallback or dynamic project loading
    loadSingleProject(urlPath)
      .then(() => {
        setupPage();
        handleMoreProjectsLinks();
      })
      .catch((error) => {
        console.error('Failed to load dynamic content or fallback', error);
      });
  }
};

// Handle browser navigation events
window.addEventListener('popstate', router);
