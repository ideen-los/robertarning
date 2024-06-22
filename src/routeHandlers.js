import { loadData } from './data';
import { setContent } from './helperFunctions';
import { showMoreProjects } from './moreProjects';
import { createProfile } from './profile';
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
    try {
      const HTMLContent = await showSingleProject(project);
      setContent('content', HTMLContent);
    } catch (error) {
      console.error('Failed to load project details:', error);
      setContent('content', '<h1>Error Loading Project</h1>');
    }
  } else {
    // No project found, display a generic 404 page
    setContent('content', '<h1>404 Not Found</h1>');
  }
};

export const displayProjectOverview = async function () {
  const data = await loadData();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);
    setContent('content', projectsOverviewHTML);
    handleClickOnProjectTeasers(data.projects);
  }
};

export const displayProfile = async function () {
  const data = await loadData();

  if (data) {
    console.log('Displaying profile...');
    const profileHTML = createProfile(data.profile);
    setContent('content', profileHTML);
  }
};
