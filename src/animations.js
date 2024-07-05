/* 
Adds an animation to a page title
*/
export const initializeAnimationsOnStaticPage = function () {
  const siteTitle = document.querySelector('h1');

  if (siteTitle) {
    siteTitle.classList.add('transition-in');
    requestAnimationFrame(() => {
      siteTitle.classList.add('transition-visible');
    });
  }
};

/* 
Adds animations to the project name, the list of skills and the 
project's elements. Also adds a loading animation after 3 seconds.
*/
export const initializeAnimationsOnProjectPage = function () {
  const loadingAnimation = document.getElementById('loading-wrapper');

  const allMediaElements = document.querySelector('.single-project .media-elements');
  const projectTitleAndLink = document.querySelector('.single-project .project-title-and-link');
  const projectSkillsAndTools = document.querySelector('.single-project .skills-and-tools');
  const projectSkillsAndToolsLabel = document.querySelector(
    '.single-project .skills-and-tools span'
  );
  const projectSkillsAndToolsList = document.querySelector('.single-project .skills-and-tools ul');
  const projectFirstMediaElement = document.querySelector(
    '.single-project .media-elements > div > *'
  );

  const loadingTimeout = setTimeout(() => {
    // Always remove the loading animation after a timeout to avoid it being stuck
    removeLoadingAnimation();
    console.log('Timeout reached, hiding loading animation.');
  }, 10000); // 10 Seconds

  const removeLoadingAnimation = function () {
    if (loadingAnimation && loadingAnimation.classList.contains('visible')) {
      loadingAnimation.classList.remove('visible');
    }
    clearTimeout(loadingTimeout); // Clear timeout if the media loads in time
  };

  const showLoadingAnimation = function () {
    if (loadingAnimation && !loadingAnimation.classList.contains('visible')) {
      loadingAnimation.classList.add('visible');
    }
  };

  // Add the class for showing project page initial animations
  // only if the project has at least 1 media element
  if (allMediaElements && projectFirstMediaElement) {
    const prepareTransitionTriggers = function () {
      if (projectTitleAndLink) {
        projectTitleAndLink.classList.add('transition-in');
      }
      if (projectSkillsAndTools) {
        projectSkillsAndTools.classList.add('transition-in-opacity');
      }
      if (projectSkillsAndToolsLabel) {
        projectSkillsAndToolsLabel.classList.add('transition-in');
      }
      if (projectSkillsAndToolsList) {
        projectSkillsAndToolsList.classList.add('transition-in');
      }
      allMediaElements.classList.add('transition-in');
    };

    prepareTransitionTriggers();
    const animationTimeout = setTimeout(showLoadingAnimation, 300);

    const addTransitionTriggers = function () {
      clearTimeout(animationTimeout);

      if (loadingAnimation) {
        if (loadingAnimation.classList.contains('visible')) {
          loadingAnimation.classList.remove('visible');
        }
      }
      if (projectTitleAndLink) {
        requestAnimationFrame(() => {
          projectTitleAndLink.classList.add('transition-visible');
        });
      }
      if (projectSkillsAndTools) {
        requestAnimationFrame(() => {
          projectSkillsAndTools.classList.add('transition-visible');
        });
      }
      if (projectSkillsAndToolsLabel) {
        requestAnimationFrame(() => {
          projectSkillsAndToolsLabel.classList.add('transition-visible-delayed');
        });
      }
      if (projectSkillsAndToolsList) {
        requestAnimationFrame(() => {
          projectSkillsAndToolsList.classList.add('transition-visible-delayed');
        });
      }
      requestAnimationFrame(() => {
        allMediaElements.classList.add('transition-visible-delayed-more');
      });
    };

    // Waits for the first element to load, which is either image, video or iFrame
    // before attaching the animation triggers
    if (projectFirstMediaElement.tagName === 'VIDEO') {
      projectFirstMediaElement.addEventListener('canplay', addTransitionTriggers);
      projectFirstMediaElement.addEventListener('error', removeLoadingAnimation);
    } else if (projectFirstMediaElement.tagName === 'IMG') {
      projectFirstMediaElement.addEventListener('load', addTransitionTriggers);
      projectFirstMediaElement.addEventListener('error', removeLoadingAnimation);
    } else if (projectFirstMediaElement.tagName === 'IFRAME') {
      projectFirstMediaElement.onload = addTransitionTriggers;
      projectFirstMediaElement.onerror = removeLoadingAnimation;
    }
  }
};
