import { loadData } from './data';
import { encodeProjectName } from './projectsOverview';
import { showSingleProject } from './singleProject';

const routes = {};

const defaultHandler = async (path) => {
  const projectName = path.split('/')[1]; // Assuming path like "/projectName"
  const data = await loadData();
  const project = data.projects.find(
    (projects) => encodeProjectName(projects.projectName) === projectName
  );

  if (project) {
    document.getElementById('content').innerHTML = showSingleProject(project);
  } else {
    document.getElementById('content').innerHTML = '<h1>Project Not Found</h1>';
  }
};

export const route = function (path, handler) {
  routes[path] = handler;
};

export const router = function () {
  const urlPath = window.location.pathname || '/';
  if (routes[urlPath]) {
    routes[urlPath]();
  } else {
    // No specific route matched, try to handle it as a project name
    defaultHandler(urlPath);
  }
};

window.addEventListener('popstate', router);
