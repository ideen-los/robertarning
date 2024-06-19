import { route } from './router';
import { showSingleProject } from './singleProject';

// Generates the HTML code for a project overview page.
// The function iterates over an array of project objects and
// generates HTML code for the properties of those objects.
export const createProjectsOverview = function (projects) {
  // Check whether project data is available
  if (!projects) {
    console.error('No projects data available to create overview.');
    return '';
  }

  // Generate HTML code for the projects overview page
  const overviewHTML = projects
    .map((project) => {
      // Encode the "projectName" value to safely include it in the URL path
      let encodedProjectName = encodeURIComponent(project.projectName).toLowerCase();

      return `<a href="/${encodedProjectName}" id="${project.id}">
      <article>
      <figure>
      <img src="${project.image}" alt="${project.projectName}">
      </figure>
      <h3>${project.projectName}</h3>
      <p>${project.description}</p>
      </article>
      </a>`;
    })
    .join('');

  return `<div class="projects-overview">${overviewHTML}</div>`;
};

/*
Looks for a project that matches a given ID within an array of projects.
The ID is a property of every project object in the array.
*/
const findProjectById = function (projectArray, id) {
  let projectIndex = projectArray.findIndex((project) => project.id === Number(id));

  return projectArray[projectIndex];
};

/*
Adds a click event to the project teaser on the project overview page.
The event tries to match the id of the clicked teaser with a project's ID
from a given [projects] array.
*/
export const handleClickOnProjectTeasers = function (projects) {
  const allProjectTeaser = document.querySelectorAll('.projects-overview a');

  allProjectTeaser.forEach((teaser) =>
    teaser.addEventListener('click', (e) => {
      e.preventDefault();

      // Get the data of the project that is clicked on
      const singleProjectHTML = showSingleProject(findProjectById(projects, e.currentTarget.id));

      // Populate the content with the projects data
      document.getElementById('content').innerHTML = singleProjectHTML;

      // Set scroll position to the top of the browser window
      window.scroll(0, 0);
    })
  );
};
