import { handleAnimationOnPageTransition } from './animations';
import { initializeLazyLoading } from './lazyLoading';
import { router } from './router';

/* 
Gets the element by its id passed as the functions 1st parameter and
sets its innerHTML to whatever content is passed as the 2nd parameter
*/
export const setContent = function (id, content) {
  const HTMLelement = document.getElementById(id);

  return (HTMLelement.innerHTML = content);
};

/* 
Updates the browser's history stack by adding a new entry. This sets the new URL path 
without reloading the page. Then calls the router() function to handle the URL change.
*/
export const pushURLAndCallRouter = function (URLpath) {
  // Update the URL
  history.pushState({}, '', `/${URLpath}`);
  // Call the router
  router();
};

/* 
1. Adds lazy loading to a page
2. Adds animations to the project title or site title
3. Sets the scroll position to the top of the page
*/
export const setupPage = function () {
  initializeLazyLoading();
  requestAnimationFrame(() => {
    handleAnimationOnPageTransition();
  });
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

/*
Encodes the "projectName" value to safely include it in the URL path.
Replace spaces with hyphens, then encode URI components, and finally convert to lowercase
*/
export const convertToURLSaveName = function (name) {
  return encodeURIComponent(
    name
      .replace(/\s+/g, '-')
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
  ).toLowerCase();
};
