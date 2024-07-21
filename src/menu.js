import { pushURLAndCallRouter } from './helperFunctions';

/* 
Adds click event listeners to the navigation elements.
*/
export const handleMenuLinks = async function () {
  const header = document.querySelector('header');

  // Base64 encoded email
  const encodedEmail = 'aGFsbG9Acm9iZXJ0YXJuaW5nLmRl';
  const mailLinks = document.querySelectorAll('a.mail');
  mailLinks.forEach((link) => {
    link.setAttribute('href', 'mailto:'.concat(atob(encodedEmail)));
  });

  header.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.closest('a#home')) {
      pushURLAndCallRouter('');
    } else if (e.target.closest('a#logo')) {
      pushURLAndCallRouter('');
    } else if (e.target.closest('a#profile')) {
      pushURLAndCallRouter('profil');
    }
  });
};
