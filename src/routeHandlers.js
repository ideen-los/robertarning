import { loadData } from './data';
import { setContent } from './helperFunctions';
import { encodeProjectName } from './projectsOverview';
import { showSingleProject } from './singleProject';

export const defaultHandler = async (path) => {
  const projectName = path.split('/')[1]; // Assuming paths like "/projectName"
  const data = await loadData();
  const project = data.projects.find(
    (project) => encodeProjectName(project.projectName) === projectName
  );

  if (project) {
    setContent('content', showSingleProject(project));
    /* document.getElementById('content').innerHTML = showSingleProject(project); */
  } else {
    // No project found, display a generic 404 page
    document.getElementById('content').innerHTML = '<h1>404 Not Found</h1>';
  }
};
