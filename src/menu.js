import { pushURLAndCallRouter } from './helperFunctions';

/* 
Adds click event listeners to the navigation elements.
*/
export const handleMenuLinks = function () {
  const header = document.querySelector('header');

  // Base64 encoded email "hallo@robertarning.de"
  const encodedEmail = 'aGFsbG9Acm9iZXJ0YXJuaW5nLmRl';
  const mailLinks = document.querySelectorAll('a.mail');
  mailLinks.forEach((link) => {
    link.setAttribute('href', 'mailto:'.concat(atob(encodedEmail)));
  });

  header.addEventListener('click', (e) => {
    if (e.target.closest('a#home')) {
      e.preventDefault();
      pushURLAndCallRouter('');
    } else if (e.target.closest('a#logo')) {
      e.preventDefault();
      pushURLAndCallRouter('');
    } else if (e.target.closest('a#profile')) {
      e.preventDefault();
      pushURLAndCallRouter('profil');
    }
  });
};
