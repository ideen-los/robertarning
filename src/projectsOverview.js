import './scss/project-overview.scss';
import { loadData } from './data';
import {
  convertToURLSaveName,
  pushURLAndCallRouter,
  setBodyClass,
  setContent,
} from './helperFunctions';
import { initializeSlider } from './slideshow';

/*
Generates the HTML code for a project overview page.
The function iterates over an array of project objects and
generates HTML code for the properties of those objects.
*/
export const createProjectsOverview = function (projects) {
  // Check whether project data is available
  if (!projects) {
    console.error('No projects data available to create overview.');
    return '';
  }

  // Generate HTML code for the description text of the homepage title
  const descriptionText = `<div class="description"><p>${projects.description}</p></div>`;

  // Sort the projects by their id in ascending order
  const sortedProjects = projects.elements.sort((a, b) => a.id - b.id);

  // Generate HTML code for displaying each project underneath each other
  const overviewHTML = sortedProjects
    .map((project) => {
      // Encode the "projectName" value to safely include it in the URL path
      const urlSaveProjectName = convertToURLSaveName(project.projectName);

      return `
      <article>
      <a href="/${urlSaveProjectName}" data-id="${project.id}" class="project-link figure-wrapper">
      <figure>
      <img ${project.id !== 1 ? 'data-src=' : 'src='} "${project.image}" alt="${
        project.projectName
      }" ${project.id !== 1 ? `class="media lazy-load"` : ''}>
      </figure>
      </a>
      <a href="/${urlSaveProjectName}" data-id="${project.id}" class="project-link">
      <h3>${project.projectName}</h3>
      <p>${project.description}</p>
      </a>
      </article>`;
    })
    .join('');

  return `<div class="homepage"><h1 class="site-title">${projects.title}</h1>${descriptionText}<div class="projects-overview">${overviewHTML}</div></div>`;
};

/*
Looks for a project that matches a given ID within an array of project objects.
The ID is a property of every project object in the array.
*/
const findProjectById = function (projectArray, id) {
  let projectIndex = projectArray.findIndex((project) => project.id === Number(id));

  return projectArray[projectIndex];
};

/*
Adds a click event to the project teasers on the project overview page.
The event tries to match the id of the clicked teaser with a project's ID
from a given [projects] array, inserts that project name in the url and lods
the router to handle the loading of the content.
*/
export const handleClickOnProjectTeasers = function (projects) {
  const allProjectTeaser = document.querySelectorAll('.projects-overview a');

  allProjectTeaser.forEach((teaser) =>
    teaser.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = e.currentTarget.getAttribute('data-id');
      const projectData = findProjectById(projects, projectId);
      const urlSaveProjectName = convertToURLSaveName(projectData.projectName);

      pushURLAndCallRouter(urlSaveProjectName);
    })
  );
};

/* 
Calls the function that generates the HTML for the Project Overview,
sets its output to display in the #content div and activates the
links that wrap each project.
*/
export const displayProjectOverview = async function () {
  const data = await loadData();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);

    setContent('content', projectsOverviewHTML);
    handleClickOnProjectTeasers(data.projects.elements);
    setBodyClass('homepage');
    initializeSlider();
  }
};
