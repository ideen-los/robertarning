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
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

export const addAnimationClassesOnPageLoad = function () {
  const elements = document.querySelectorAll('h1');
  const elementsDeferred = document.querySelectorAll(
    '.projects-overview > a:first-of-type article img'
  );

  elements.forEach((el) => {
    el.classList.add('fade-in');
    requestAnimationFrame(() => {
      el.classList.add('visible');
    });
  });

  elementsDeferred.forEach((el) => {
    el.classList.add('fade-in-deferred');
    requestAnimationFrame(() => {
      el.classList.add('visible-deferred');
    });
  });
};

export const handleAnimationOnPageTransition = function () {
  const elements = document.querySelectorAll('h1');

  elements.forEach((el) => {
    el.classList.add('transition-in');
    requestAnimationFrame(() => {
      el.classList.add('transition-visible');
    });
  });
};
