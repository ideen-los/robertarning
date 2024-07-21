/* 
An object that contains static paths, as well as a handler and a title associated with it
*/
const routes = {};

/* 
Creates an object with the properties "handler" and "title" and
assigns it as value to the key "path" in the { routes } object
*/
export const setRoute = function (path, handlerFunction, title) {
  routes[path] = { handler: handlerFunction, title: title };
};

/* 
1. Checks whether the current path has been registered as a key in the { routes } object.
If it is, then it calls the handler function associated with the registered path and sets the title.

2. Is the current path is not a key in { routes }, it tries to call a function that loads a single
project based on the path name. If no project with that name is found, the function returns '404'.
*/
export const router = async function () {
  const urlPath = window.location.pathname || '/';

  try {
    if (routes[urlPath] && routes[urlPath].handler) {
      // Generate HTML
      const handlerFunction = await routes[urlPath].handler();
      await handlerFunction();
      // Set the document title
      document.title = routes[urlPath].title;
      // Initialize lazy loading, animations, etc.
      const helperModule = await import('./helperFunctions.js');
      helperModule.setupPage('staticPage');
    } else {
      // Path is not registered or has no handler
      // Check whether the path corresponds to a project
      const singleProjectModule = await import('./singleProject.js');
      // Generate HTML for project page, returns a project name
      const projectName = await singleProjectModule.loadSingleProject(urlPath);

      if (projectName !== '404') {
        // If a project is found the functions returns the project's name
        // Set the title of the document
        document.title = `Robert Arning – ${projectName}`;
        // Initialize lazy loading, animations, etc.
        const helperModule = await import('./helperFunctions.js');
        helperModule.setupPage('projectPage');
        // Add the more Projects component and initialize all projects link
        const moreProjectsModule = await import('./moreProjects.js');
        moreProjectsModule.handleMoreProjectsLinks();
        singleProjectModule.handleAllProjectsLink();
      } else {
        // If no project is found the function returns '404'
        document.title = 'Robert Arning – Seite nicht gefunden';
      }
    }
  } catch (error) {
    console.error('Failed to load handler', error);
  }
};

// Handle browser navigation events
window.addEventListener('popstate', () => {
  router();
});
