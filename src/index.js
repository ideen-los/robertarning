import './style.scss';

async function loadProjects() {
  try {
    const response = await fetch('/data/all-projects.json');
    if (!response.ok) {
      // Check if the HTTP status code is in the 200-299 range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const projects = await response.json();
    console.log(projects);
  } catch (error) {
    console.error('Failed to load projects:', error);
  }
}

loadProjects();
