import { pushURLAndCallRouter } from './helperFunctions';
import arrowLeft from './img/arrow-left.svg';

export const showPageNotFound = function () {
  const pageNotFoundHTML = `<section class="page-not-found"><h1>Halt!</h1><p class="description">Diese Seite scheint sich in Luft aufgelöst zu haben. Doch keine Sorge. <a href="/" class="return-home">Ein Klick hier drauf teleportiert Dich zurück in vertraute <span>Gefilde <img src="${arrowLeft}" class="arrow-right"></span></a></p></section>`;

  return pageNotFoundHTML;
};

export const initializeBackHomeLink = function () {
  const homeLink = document.querySelector('a.return-home');

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    pushURLAndCallRouter('');
  });
};
