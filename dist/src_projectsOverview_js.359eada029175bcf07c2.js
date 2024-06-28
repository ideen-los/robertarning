"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_projectsOverview_js"],{

/***/ "./src/projectsOverview.js":
/*!*********************************!*\
  !*** ./src/projectsOverview.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectsOverview: () => (/* binding */ createProjectsOverview),
/* harmony export */   displayProjectOverview: () => (/* binding */ displayProjectOverview),
/* harmony export */   handleClickOnProjectTeasers: () => (/* binding */ handleClickOnProjectTeasers)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");



/*
Generates the HTML code for a project overview page.
The function iterates over an array of project objects and
generates HTML code for the properties of those objects.
*/
const createProjectsOverview = function (projects) {
  // Check whether project data is available
  if (!projects) {
    console.error('No projects data available to create overview.');
    return '';
  }

  // Generate HTML code for the description text of the homepage title
  const descriptionText = `<div class="description"><p>Ich bin Robert Arning, ein UI/UX Designer mit 10 Jahren Erfahrung und umfassender Expertise in HTML/CSS sowie soliden Grundkenntnissen in JavaScript.</p></div>`;

  // Generate HTML code for displaying each project underneath each other
  const overviewHTML = projects
    .map((project) => {
      // Encode the "projectName" value to safely include it in the URL path
      const urlSaveProjectName = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.convertToURLSaveName)(project.projectName);

      return `<a href="/${urlSaveProjectName}" id="${project.id}">
      <article>
      <figure>
      <img src="${project.image}" alt="${project.projectName}">
      </figure>
      <h3>${project.projectName}</h3>
      <p>${project.description}</p>
      </article>
      </a>`;
    })
    .join('');

  return `<div class="homepage"><h1 class="site-title">UI/UX Designer</h1>${descriptionText}<div class="projects-overview">${overviewHTML}</div></div>`;
};

/*
Looks for a project that matches a given ID within an array of project objects.
The ID is a property of every project object in the array.
*/
const findProjectById = function (projectArray, id) {
  let projectIndex = projectArray.findIndex((project) => project.id === Number(id));

  return projectArray[projectIndex];
};

/*
Adds a click event to the project teasers on the project overview page.
The event tries to match the id of the clicked teaser with a project's ID
from a given [projects] array, inserts that project name in the url and lods
the router to handle the loading of the content.
*/
const handleClickOnProjectTeasers = function (projects) {
  const allProjectTeaser = document.querySelectorAll('.projects-overview a');

  allProjectTeaser.forEach((teaser) =>
    teaser.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = e.currentTarget.id;
      const projectData = findProjectById(projects, projectId);
      const urlSaveProjectName = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.convertToURLSaveName)(projectData.projectName);

      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.pushURLAndCallRouter)(urlSaveProjectName);
    })
  );
};

/* 
Calls the function that generates the HTML for the Project Overview,
sets its output to display in the #content div and activates the
links that wrap each project.
*/
const displayProjectOverview = async function () {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);

    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', projectsOverviewHTML);
    handleClickOnProjectTeasers(data.projects);
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RzT3ZlcnZpZXdfanMuMzU5ZWFkYTAyOTE3NWJjZjA3YzIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDeUQ7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzRUFBb0I7O0FBRXJELDBCQUEwQixtQkFBbUIsUUFBUSxXQUFXO0FBQ2hFO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYyxTQUFTLG9CQUFvQjtBQUM3RDtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNEVBQTRFLGdCQUFnQixpQ0FBaUMsYUFBYTtBQUMxSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0VBQW9COztBQUVyRCxNQUFNLHNFQUFvQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQkFBcUIsK0NBQVE7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFVO0FBQ2Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Byb2plY3RzT3ZlcnZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHB1c2hVUkxBbmRDYWxsUm91dGVyLCBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG4vKlxuR2VuZXJhdGVzIHRoZSBIVE1MIGNvZGUgZm9yIGEgcHJvamVjdCBvdmVydmlldyBwYWdlLlxuVGhlIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYW4gYXJyYXkgb2YgcHJvamVjdCBvYmplY3RzIGFuZFxuZ2VuZXJhdGVzIEhUTUwgY29kZSBmb3IgdGhlIHByb3BlcnRpZXMgb2YgdGhvc2Ugb2JqZWN0cy5cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdHNPdmVydmlldyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0cykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3RzIGRhdGEgYXZhaWxhYmxlIHRvIGNyZWF0ZSBvdmVydmlldy4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBIVE1MIGNvZGUgZm9yIHRoZSBkZXNjcmlwdGlvbiB0ZXh0IG9mIHRoZSBob21lcGFnZSB0aXRsZVxuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+PHA+SWNoIGJpbiBSb2JlcnQgQXJuaW5nLCBlaW4gVUkvVVggRGVzaWduZXIgbWl0IDEwIEphaHJlbiBFcmZhaHJ1bmcgdW5kIHVtZmFzc2VuZGVyIEV4cGVydGlzZSBpbiBIVE1ML0NTUyBzb3dpZSBzb2xpZGVuIEdydW5ka2VubnRuaXNzZW4gaW4gSmF2YVNjcmlwdC48L3A+PC9kaXY+YDtcblxuICAvLyBHZW5lcmF0ZSBIVE1MIGNvZGUgZm9yIGRpc3BsYXlpbmcgZWFjaCBwcm9qZWN0IHVuZGVybmVhdGggZWFjaCBvdGhlclxuICBjb25zdCBvdmVydmlld0hUTUwgPSBwcm9qZWN0c1xuICAgIC5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIC8vIEVuY29kZSB0aGUgXCJwcm9qZWN0TmFtZVwiIHZhbHVlIHRvIHNhZmVseSBpbmNsdWRlIGl0IGluIHRoZSBVUkwgcGF0aFxuICAgICAgY29uc3QgdXJsU2F2ZVByb2plY3ROYW1lID0gY29udmVydFRvVVJMU2F2ZU5hbWUocHJvamVjdC5wcm9qZWN0TmFtZSk7XG5cbiAgICAgIHJldHVybiBgPGEgaHJlZj1cIi8ke3VybFNhdmVQcm9qZWN0TmFtZX1cIiBpZD1cIiR7cHJvamVjdC5pZH1cIj5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgPGZpZ3VyZT5cbiAgICAgIDxpbWcgc3JjPVwiJHtwcm9qZWN0LmltYWdlfVwiIGFsdD1cIiR7cHJvamVjdC5wcm9qZWN0TmFtZX1cIj5cbiAgICAgIDwvZmlndXJlPlxuICAgICAgPGgzPiR7cHJvamVjdC5wcm9qZWN0TmFtZX08L2gzPlxuICAgICAgPHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvYT5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuXG4gIHJldHVybiBgPGRpdiBjbGFzcz1cImhvbWVwYWdlXCI+PGgxIGNsYXNzPVwic2l0ZS10aXRsZVwiPlVJL1VYIERlc2lnbmVyPC9oMT4ke2Rlc2NyaXB0aW9uVGV4dH08ZGl2IGNsYXNzPVwicHJvamVjdHMtb3ZlcnZpZXdcIj4ke292ZXJ2aWV3SFRNTH08L2Rpdj48L2Rpdj5gO1xufTtcblxuLypcbkxvb2tzIGZvciBhIHByb2plY3QgdGhhdCBtYXRjaGVzIGEgZ2l2ZW4gSUQgd2l0aGluIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cy5cblRoZSBJRCBpcyBhIHByb3BlcnR5IG9mIGV2ZXJ5IHByb2plY3Qgb2JqZWN0IGluIHRoZSBhcnJheS5cbiovXG5jb25zdCBmaW5kUHJvamVjdEJ5SWQgPSBmdW5jdGlvbiAocHJvamVjdEFycmF5LCBpZCkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgcmV0dXJuIHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xufTtcblxuLypcbkFkZHMgYSBjbGljayBldmVudCB0byB0aGUgcHJvamVjdCB0ZWFzZXJzIG9uIHRoZSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZXZlbnQgdHJpZXMgdG8gbWF0Y2ggdGhlIGlkIG9mIHRoZSBjbGlja2VkIHRlYXNlciB3aXRoIGEgcHJvamVjdCdzIElEXG5mcm9tIGEgZ2l2ZW4gW3Byb2plY3RzXSBhcnJheSwgaW5zZXJ0cyB0aGF0IHByb2plY3QgbmFtZSBpbiB0aGUgdXJsIGFuZCBsb2RzXG50aGUgcm91dGVyIHRvIGhhbmRsZSB0aGUgbG9hZGluZyBvZiB0aGUgY29udGVudC5cbiovXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGNvbnN0IGFsbFByb2plY3RUZWFzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtb3ZlcnZpZXcgYScpO1xuXG4gIGFsbFByb2plY3RUZWFzZXIuZm9yRWFjaCgodGVhc2VyKSA9PlxuICAgIHRlYXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByb2plY3REYXRhLnByb2plY3ROYW1lKTtcblxuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIodXJsU2F2ZVByb2plY3ROYW1lKTtcbiAgICB9KVxuICApO1xufTtcblxuLyogXG5DYWxscyB0aGUgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgdGhlIEhUTUwgZm9yIHRoZSBQcm9qZWN0IE92ZXJ2aWV3LFxuc2V0cyBpdHMgb3V0cHV0IHRvIGRpc3BsYXkgaW4gdGhlICNjb250ZW50IGRpdiBhbmQgYWN0aXZhdGVzIHRoZVxubGlua3MgdGhhdCB3cmFwIGVhY2ggcHJvamVjdC5cbiovXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RPdmVydmlldyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnRGlzcGxheWluZyBwcm9qZWN0cy4uLicpO1xuICAgIGNvbnN0IHByb2plY3RzT3ZlcnZpZXdIVE1MID0gY3JlYXRlUHJvamVjdHNPdmVydmlldyhkYXRhLnByb2plY3RzKTtcblxuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBwcm9qZWN0c092ZXJ2aWV3SFRNTCk7XG4gICAgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzKGRhdGEucHJvamVjdHMpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9