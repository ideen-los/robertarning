import './style.scss';
import { loadData } from './data';
import { createProjectsOverview, handleClickOnProjectTeasers } from './projectsOverview';

const displayProjects = async function () {
  const data = await loadData();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);
    document.getElementById('content').innerHTML = projectsOverviewHTML;
    handleClickOnProjectTeasers(data.projects);
  }
};

displayProjects();
