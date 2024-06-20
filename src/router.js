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
  } else {
    // If no static route matches, try dynamic project loading
    defaultHandler(urlPath);
  }
};

// Handle browser navigation events
window.addEventListener('popstate', router);
