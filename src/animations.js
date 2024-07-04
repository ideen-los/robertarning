/* 
Adds animations to a page's title, the project name, the
list of skills used and the wrapper for a project's elements.
*/
export const handleAnimationOnPageTransition = function () {
  const loadingAnimation = document.getElementById('loading-wrapper');
  const siteTitle = document.querySelector('h1');
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

  // Always execute animation on site titles
  if (siteTitle) {
    siteTitle.classList.add('transition-in');
    requestAnimationFrame(() => {
      siteTitle.classList.add('transition-visible');
    });
  }

  const showLoadingAnimation = function () {
    if (loadingAnimation) {
      if (!loadingAnimation.classList.contains('visible')) {
        loadingAnimation.classList.add('visible');
      }
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
      projectFirstMediaElement.classList.add('transition-in');
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
        projectFirstMediaElement.classList.add('transition-visible-delayed-more');
      });
    };

    // Waits for the first element to load, which is either image, video or iFrame
    // before attaching the animation triggers
    if (projectFirstMediaElement.tagName === 'VIDEO') {
      projectFirstMediaElement.addEventListener('canplay', function () {
        addTransitionTriggers();
        console.log('Video!');
      });
    } else if (projectFirstMediaElement.tagName === 'IMG') {
      projectFirstMediaElement.addEventListener('load', function () {
        requestAnimationFrame(() => {
          addTransitionTriggers();
          console.log('Image!');
        });
      });
    } else if (projectFirstMediaElement.tagName === 'IFRAME') {
      projectFirstMediaElement.onload = () => {
        requestAnimationFrame(() => {
          addTransitionTriggers();
          console.log('iframe!');
        });
      };
    }
  }
};
