const routes = {};

export function route(path, handler) {
  routes[path] = handler;
}

export function router() {
  const urlPath = window.location.pathname || '/';
  if (routes[urlPath]) {
    routes[urlPath]();
  } else {
    console.error('No route found for:', urlPath);
    document.getElementById('content').innerHTML = '<h1>404 Not Found</h1>';
  }
}

window.addEventListener('popstate', router);
