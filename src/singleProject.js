import extLink from './img/external-link.svg';

export const showSingleProject = function (project) {
  // Check whether project data is available
  if (!project) {
    console.error('No project data available.');
    return '';
  }

  // Generate HTML Code for the single project page
  const externalLink = new Image();
  externalLink.src = extLink;

  const projectLink = () => {
    if (project.live_site) {
      return `<a href="${project.live_site}"><span>Live-Seite besuchen</span><img src="${externalLink.src}"></a>`;
    } else {
      return '';
    }
  };

  const singleProjectSkills = project.skills
    .map((skill) => {
      return `<li class="skill-tag">${skill}</li>`;
    })
    .join('');

  const singleProjectElements = project.elements
    .map((element) => {
      switch (element.type) {
        case 'video':
          return `<div class="${element.type}">
            <video src="${element.content}" autoplay muted loop>
            </div>`;
          break;
        case 'image':
          return `<div class="${element.type}">
            <img src="${element.content}">
            </div>`;
          break;
        case 'text':
          return `<div class="${element.type}">
            <p>${element.content}</p>
            </div>`;
          break;
        case 'two-column':
          // If the element type is "two-column" we need to iterate over the element's
          // "content" property which holds an array of media objects "image" or "video"
          const mediaElements = element.content
            .map((media) => {
              if (media.type === 'video') {
                return `<div class="${media.type}">
                <video src="${media.content}" autoplay muted loop>
                </div>`;
              } else if (media.type === 'image') {
                return `<div class="${media.type}">
            <img src="${media.content}">
            </div>`;
              } else {
                return `<p>Unsupported media format.</p>`;
              }
            })
            .join('');

          return `<div class ="${element.type}">
            ${mediaElements}
            </div>`;
          break;
      }
    })
    .join('');

  return `<div id="${project.id}" class="single-project"><div class="project-title-and-link"><h2>${
    project.projectName
  }</h2>${projectLink()}</div><section class="skills-and-tools"><ul><span>Skills/Tools:</span>${singleProjectSkills}</ul></section><section class="media-elements">${singleProjectElements}</section></div>`;
};
