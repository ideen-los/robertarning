/* 
Adds an InteractionObserver to the viewport that sets the src of a video
or image to the value of the element's data-src, when it comes into view.
This way images and videos are only loaded, when they are needed.
*/
export const initializeLazyLoading = function () {
  const lazyMedia = document.querySelectorAll('.lazy-load');

  console.log('initializing lazy loading');

  // Define the options for the IntersectionObserver
  const options = {
    rootMargin: '200px', // Load images 100 pixels before they enter the viewport
    threshold: 0, // Minimal amount of item shown to trigger loading
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const media = entry.target;

        if (media.tagName === 'IMG') {
          media.src = media.dataset.src;
          media.onload = () => {
            media.classList.add('media-loaded');
          };
        } else if (media.tagName === 'VIDEO') {
          Array.from(media.children).forEach((source) => {
            if (source.tagName === 'SOURCE') source.src = source.dataset.src;
          });
          media.load();
          media.onloadeddata = () => {
            media.classList.add('media-loaded');
          };
        }

        observer.unobserve(media); // Stop observing once loaded
      }
    });
  }, options);

  lazyMedia.forEach((media) => observer.observe(media));
};
