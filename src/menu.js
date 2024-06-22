import { pushURLAndCallRouter } from './helperFunctions';

export const handleMenuLinks = function () {
  const header = document.querySelector('header');

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
