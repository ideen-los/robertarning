export const createProjectsOverview = function createProjectsOverview(projects) {
  console.log('Here is the data:', projects);
  console.log('Type of projects:', typeof projects);
  console.log('Is projects an array?', Array.isArray(projects));
  console.log('Length of projects:', projects?.length);

  // Check whether project data is available
  if (!projects) {
    console.error('No projects data available to create overview.');
    return '';
  }

  // Generate HTML Code for the projects overview page
  const overviewHTML = projects
    .map((project) => {
      // Encodes the projectName to safely include it in the URL path
      let encodedProjectName = encodeURIComponent(project.projectName).toLowerCase();
      console.log('Go!');

      return `<a href="/${encodedProjectName}" data-target="${project.id}">
      <article id ="${project.id}">
      <figure>
      <img src="${project.image}" alt="${project.projectName}">
      </figure>
      <h3>${project.projectName}</h3>
      <p>${project.description}</p>
      </article>
      </a>`;
    })
    .join('');

  return overviewHTML;
};
