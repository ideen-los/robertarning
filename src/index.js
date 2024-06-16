import './style.scss';
import { loadProjects } from './data';
import { createProjectsOverview } from './projectsOverview';

const displayProjects = async function displayProjects() {
  const projects = await loadProjects();

  if (projects) {
    const projectsOverviewHTML = createProjectsOverview(projects);
    document.getElementById('content').innerHTML = projectsOverviewHTML;
  }
};

displayProjects();
