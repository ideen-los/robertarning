import { pushURLAndCallRouter } from './helperFunctions';
import panda from './img/panda.gif';
import arrowLeft from './img/arrow-left.svg';

export const showPageNotFound = function () {
  const pageNotFoundHTML = `<section class="page-not-found"><div class="page-not-found-message"><h1 class="page-not-found-h1"><span>Ohje!</span> <div class="page-not-found-animation"><img src="${panda}"></div></h1><p class="description">Diese Seite scheint sich in Luft aufgelöst zu haben. <a href="/" class="return-home">Hier geht's zurück in vertraute <span>Gefilde <img src="${arrowLeft}" class="arrow-right"></span></a></p></div></section>`;

  return pageNotFoundHTML;
};

export const initializeBackHomeLink = function () {
  const homeLink = document.querySelector('a.return-home');

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    pushURLAndCallRouter('');
  });
};
