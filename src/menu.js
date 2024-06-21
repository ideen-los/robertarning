import { pushURLAndCallRouter } from './helperFunctions';

export const handleMenuLinks = function () {
  const nav = document.querySelector('header');

  nav.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    switch (target.id) {
      case 'home':
        e.preventDefault();
        pushURLAndCallRouter('');
        break;
      case 'logo':
        e.preventDefault();
        pushURLAndCallRouter('');
        break;
      case 'profile':
        e.preventDefault();
        pushURLAndCallRouter('profil');
    }
  });
};
