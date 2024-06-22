import { loadData } from './data';
import { addAnimationClasses, setContent } from './helperFunctions';
import {
  createProjectsOverview,
  encodeProjectName,
  handleClickOnProjectTeasers,
} from './projectsOverview';
import { showSingleProject } from './singleProject';

export const defaultHandler = async (path) => {
  const projectName = path.split('/')[1]; // Assuming paths like "/projectName"
  const data = await loadData();
  const project = data.projects.find(
    (project) => encodeProjectName(project.projectName) === projectName
  );

  if (project) {
    setContent('content', showSingleProject(project));
  } else {
    // No project found, display a generic 404 page
    setContent('content', '<h1>404 Not Found</h1>');
  }
};

export const displayProjects = async function () {
  const data = await loadData();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);
    document.getElementById('content').innerHTML = projectsOverviewHTML;
    handleClickOnProjectTeasers(data.projects);
    /* requestAnimationFrame(() => {
      addAnimationClasses();
    }); */
  }
};
