import { router } from './router';

export const setContent = function (id, content) {
  const HTMLelement = document.getElementById(id);

  return (HTMLelement.innerHTML = content);
};

export const pushURLAndCallRouter = function (URLpath) {
  // Update the URL
  history.pushState({}, '', `/${URLpath}`);
  // Call the router
  router();
};

export const setupPage = function () {
  requestAnimationFrame(() => {
    handleAnimationOnPageTransition();
  });
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

/*
Encodes the "projectName" value to safely include it in the URL path 
*/
export const convertToURLSaveName = function (name) {
  // Replace spaces with hyphens, then encode URI components, and finally convert to lowercase
  return encodeURIComponent(name.replace(/\s+/g, '-')).toLowerCase();
};

export const addAnimationClassesOnPageLoad = function () {
  const element = document.querySelector('h1');
  const elementDeferred = document.querySelector(
    '.projects-overview > a:first-of-type article img'
  );

  if (element) {
    element.classList.add('fade-in');
    requestAnimationFrame(() => {
      element.classList.add('visible');
    });
  }

  if (elementDeferred) {
    elementDeferred.classList.add('fade-in-deferred');
    requestAnimationFrame(() => {
      elementDeferred.classList.add('visible-deferred');
    });
  }
};

export const handleAnimationOnPageTransition = function () {
  const siteTitle = document.querySelector('h1');
  const projectTitleAndLink = document.querySelector('.single-project .project-title-and-link');
  const projectSkillsAndTools = document.querySelector('.single-project .skills-and-tools');
  const projectSkillsAndToolsList = document.querySelector('.single-project .skills-and-tools ul');
  const projectFirstMediaElement = document.querySelector(
    '.single-project .media-elements > div:first-child video'
  );

  console.log(projectSkillsAndToolsList);

  if (siteTitle) {
    siteTitle.classList.add('transition-in');
    requestAnimationFrame(() => {
      siteTitle.classList.add('transition-visible');
    });
  }

  if (projectFirstMediaElement) {
    if (projectTitleAndLink) {
      projectTitleAndLink.classList.add('transition-in');
    }

    if (projectSkillsAndTools) {
      projectSkillsAndTools.classList.add('transition-in-opacity');
    }

    if (projectSkillsAndToolsList) {
      projectSkillsAndToolsList.classList.add('transition-in');
    }

    projectFirstMediaElement.classList.add('transition-in');

    // Waits for the first element to load before attaching the animation triggers
    projectFirstMediaElement.addEventListener('canplay', function () {
      if (projectTitleAndLink) {
        requestAnimationFrame(() => {
          projectTitleAndLink.classList.add('transition-visible');
        });
      }

      if (projectSkillsAndTools) {
        requestAnimationFrame(() => {
          projectSkillsAndTools.classList.add('transition-visible');
        });
      }

      if (projectSkillsAndToolsList) {
        requestAnimationFrame(() => {
          projectSkillsAndToolsList.classList.add('transition-visible-delayed');
        });
      }

      requestAnimationFrame(() => {
        projectFirstMediaElement.classList.add('transition-visible-delayed-more');
      });
    });
  }
};
