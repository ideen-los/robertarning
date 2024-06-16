export const createProjectsOverview = function createProjectsOverview(projects) {
  console.log('Here is the data:', projects);
  if (!projects) {
    console.error('No projects data available to create overview.');
    return '';
  }

  const overviewHTML = projects
    .map((project) => {
      return `<div>${project.projectName}</div>`;
    })
    .join('');

  return overviewHTML;
};
