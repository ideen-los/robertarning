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
route('/about', () => {
  const aboutContent = `
    <h1>About Us</h1>
    <p>Welcome to our project overview application. Here you can find information about our projects and more.</p>
  `;
  document.getElementById('content').innerHTML = aboutContent;
});

document.addEventListener('DOMContentLoaded', router);
