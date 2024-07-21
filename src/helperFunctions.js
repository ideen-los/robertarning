import { initializeAnimationsOnProjectPage, initializeAnimationsOnStaticPage } from './animations';
import { initializeLazyLoading } from './lazyLoading';
import { router } from './router';

export const setBodyClass = function (className) {
  const body = document.querySelector('body');

  body.className = '';
  body.classList.add(className);
};

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
  // Check if the new URL is different from the current URL
  const fullPath = `/${URLpath}`;
  let urlChanged = false;

  if (window.location.pathname !== fullPath) {
    // Update the URL only if it's different
    history.pushState({}, '', fullPath);
    urlChanged = true;
  }
  // Call the router whether or not the URL was updated
  router(urlChanged);
};

/* 
1. Adds lazy loading to a page.
2. Adds animations to the project title or page title.
3. Sets the scroll position to the top of the page.
*/
export const setupPage = function (pageType = 'projectPage', urlChanged = false) {
  initializeLazyLoading();
  requestAnimationFrame(() => {
    if (pageType === 'projectPage') {
      if (urlChanged) {
        initializeAnimationsOnProjectPage();
      }
    } else {
      if (urlChanged) {
        initializeAnimationsOnStaticPage();
      }
    }
  });
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

/*
Encodes the "projectName" value to safely include it in the URL path.
Replace spaces with hyphens, replace german umlauts, remove paranthesis,
collapse multiple hyphens into one, remove leading or trailing hyphens,
then encode URI components, and finally convert to lowercase.
*/
export const convertToURLSaveName = function (name) {
  return encodeURIComponent(
    name
      .replace(/\s+/g, '-')
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss') // replace "ß" with "ss"
      .replace(/[()]/g, '') // Remove parenthesis
      .replace(/-+/g, '-') // Collapse multiple hyphens into one
      .replace(/^-+|-+$/g, '') // Remove leading or trailing hyphens
  ).toLowerCase();
};
