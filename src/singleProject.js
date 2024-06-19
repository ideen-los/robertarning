export const showSingleProject = function (project) {
  // Check whether project data is available
  if (!project) {
    console.error('No project data available.');
    return '';
  }

  // Generate HTML Code for the single project page
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
        case 'image':
          return `<div class="${element.type}">
            <img src="${element.content}">
            </div>`;
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
      }
    })
    .join('');

  return `<div id="${project.id}" class="single-project"><h2>${project.projectName}</h2><section class="skills-and-tools"><span>Skills/Tools:</span><ul>${singleProjectSkills}</ul></section><section class="media-elements">${singleProjectElements}</section></div>`;
};
