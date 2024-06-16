import {
  getProjectsFromStorage,
  isSessionStorageAvailable,
  saveProjectsToStorage,
} from './sessionStorage';

/* 
Loads a JSON file with all projects from the server and saves
it to sessionStorage if available. If the browser tab hasn't been
closed yet, the data will be loaded from the users sessionStorage.
*/
export async function loadProjects() {
  console.log('Initializing...');
  let projects;

  // Get projects from sessionStorage if available
  if (isSessionStorageAvailable) {
    console.log('sessionStorage available...');
    const storedProjects = JSON.parse(sessionStorage.getItem('projects'));
    if (storedProjects) {
      console.log('Loaded projects from sessionStorage');
      projects = storedProjects;
      console.log(projects);
      return projects;
    }
  }

  // If projects are not available in sessionStorage, fetch the data from server
  try {
    console.log('Getting data...');
    const response = await fetch('/data/all-projects.json');
    if (!response.ok) {
      // Check if the HTTP status code is in the 200-299 range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    projects = data.portfolio;
    console.log(projects);

    // Save fetched data to sessionStorage
    if (isSessionStorageAvailable) {
      sessionStorage.setItem('projects', JSON.stringify(data));
      console.log('Saved projects to sessionStorage');
    }
    return projects;
  } catch (error) {
    console.error('Failed to load projects:', error);
    return null;
  }
}
