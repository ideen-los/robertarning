export const createProfile = function (profileData) {
  // Check whether profile data is available
  if (!profileData) {
    console.error('No profile data available.');
    return '';
  }

  // Create profile HTML
  const profileElements = profileData.elements
    .map((element) => {
      switch (element.type) {
        case 'text':
          return `<div class="${element.type}">
              ${element.content}
              </div>`;

        case 'two-column':
          // If the element type is "two-column" we need to iterate over the element's
          // "content" property which holds an array of objects type "text"
          const textElements = element.content
            .map((el) => {
              if (el.type === 'text') {
                return `<div class="${el.type}">
              ${el.content}
              </div>`;
              } else {
                return `<p>Unsupported format.</p>`;
              }
            })
            .join('');

          return `<h2>Skills</h2><div class ="${element.type}">
              ${textElements}
              </div>`;
      }
    })
    .join('');

  return `<div class="profile-page"><h1>${profileData.title}</h1>${profileElements}</div>`;
};
