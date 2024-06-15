import './style.scss';

async function loadProjects() {
    const response = await fetch('/all-projects');
    const projects = await response.json();
  
    console.log(projects); 
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
  }
  
  loadProjects();
