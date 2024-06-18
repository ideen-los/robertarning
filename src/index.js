import './style.scss';
import { loadData } from './data';
import { createProjectsOverview } from './projectsOverview';

const displayProjects = async function displayProjects() {
  const data = await loadData();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.portfolio);
    document.getElementById('content').innerHTML = projectsOverviewHTML;
  }
};

displayProjects();
