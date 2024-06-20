import './style.scss';
import { loadData } from './data';
import { createProjectsOverview, handleClickOnProjectTeasers } from './projectsOverview';
import { route, router } from './router';

const displayProjects = async function () {
  const data = await loadData();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);
    document.getElementById('content').innerHTML = projectsOverviewHTML;
    handleClickOnProjectTeasers(data.projects);
  }
};

route('/', displayProjects); // This needs to be called before router()

document.addEventListener('DOMContentLoaded', () => {
  router(); // This should ideally find the registered route
});
