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

export const addAnimationClasses = function () {
  const elements = document.querySelectorAll('.fade-in');
  const elementsDeferred = document.querySelectorAll('.fade-in-deferred');

  elements.forEach((el) => {
    el.classList.add('visible');
    el.addEventListener('transitionend', function handler(event) {
      if (event.propertyName === 'opacity') {
        el.classList.remove('fade-in');
        el.removeEventListener('transitionend', handler); // Clean up the event listener
      }
    });
  });

  elementsDeferred.forEach((el) => {
    el.classList.add('visible');
    el.addEventListener('transitionend', function handler(event) {
      if (event.propertyName === 'opacity') {
        el.classList.remove('fade-in');
        el.removeEventListener('transitionend', handler); // Clean up the event listener
      }
    });
  });
};
