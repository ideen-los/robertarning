const routes = {};

export const route = function (path, handlerFunc) {
  routes[path] = handlerFunc;
};

export const router = function () {
  const urlPath = window.location.pathname || '/';

  // First, check for static routes
  if (routes[urlPath]) {
    // Execute the dynamically imported module function
    routes[urlPath]()
      .then((handler) => {
        handler();
        import('./helperFunctions.js').then((module) => {
          module.setupPage();
        });
      })
      .catch((error) => {
        console.error('Failed to load route handler', error);
      });
  } else {
    // Fallback or dynamic project loading
    import('./singleProject.js').then((module) => {
      module
        .loadSingleProject(urlPath)
        .then(() => {
          import('./helperFunctions.js').then((helperModule) => {
            helperModule.setupPage();
            import('./moreProjects.js').then((moreProjectsModule) => {
              moreProjectsModule.handleMoreProjectsLinks();
            });
          });
        })
        .catch((error) => {
          console.error('Failed to load dynamic content or fallback', error);
        });
    });
  }
};

// Handle browser navigation events
window.addEventListener('popstate', router);
