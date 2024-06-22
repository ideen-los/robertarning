import { loadData } from './data';

export const showMoreProjects = async function (project) {
  const data = await loadData();

  if (data) {
    const allProjects = data.projects;
    const currentProjectIndex = Number(project.id) - 1;
    const nextProjectIndex = (currentProjectIndex + 1) % allProjects.length;
    const previousProjectIndex =
      (currentProjectIndex - 1 + allProjects.length) % allProjects.length;

    return `previous: ${allProjects[previousProjectIndex].projectName}, next: ${allProjects[nextProjectIndex].projectName}`;
  } else {
    return '';
  }
};
