/* 
An object that contains the routes and the corresponding path handler function
*/
const routes = {};

/* 
Creates a key in the object { routes } with a specified path handler function as value
*/
export const route = function (path, handlerFunction) {
  routes[path] = handlerFunction;
};

/* 
1. Checks whether the current pathname has been registered as a key in the { routes } object.
If it is, then it calls the path handler associated with registered key.

2. If the current path is not a key in { routes }, tries to call a function that loads a single
project based on the pathname. If no project with that name is found, the function returns a 
404 page not found message.
*/
export const router = function () {
  const urlPath = window.location.pathname || '/';

  // First, check for static routes
  if (routes[urlPath]) {
    routes[urlPath]()
      .then((handler) => {
        handler();
        document.title = 'Your Static Route Title'; // Set static title here or modify handler to do it
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
        .then((projectName) => {
          // Ensure loadSingleProject returns projectName
          document.title = `Robert Arning – ${projectName}` || 'Robert Arning – Page Not Found'; // Set dynamic title
          import('./helperFunctions.js').then((helperModule) => {
            helperModule.setupPage();
          });
          import('./moreProjects.js').then((moreProjectsModule) => {
            moreProjectsModule.handleMoreProjectsLinks();
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
