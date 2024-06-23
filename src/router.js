import { handleAnimationOnPageTransition } from './helperFunctions';
import { defaultHandler } from './routeHandlers';

const routes = {};

export const route = function (path, handler) {
  routes[path] = handler;
};

export const router = function () {
  const urlPath = window.location.pathname || '/';
  // First, check for static routes
  if (routes[urlPath]) {
    routes[urlPath]();
    requestAnimationFrame(() => {
      handleAnimationOnPageTransition();
    });
    // Set scroll position to the top of the browser window
    window.scroll(0, 0);
  } else {
    // If no static route matches, try dynamic project loading
    defaultHandler(urlPath);
    requestAnimationFrame(() => {
      handleAnimationOnPageTransition();
    });
    // Set scroll position to the top of the browser window
    window.scroll(0, 0);
  }
};

// Handle browser navigation events
window.addEventListener('popstate', router);
