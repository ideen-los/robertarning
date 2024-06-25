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
  const descriptionText = `<div class="description"><p>Ich bin Robert Arning, UI & UX Designer mit 10 Jahren Erfahrung und umfassender Expertise in HTML/CSS sowie soliden Grundkenntnissen in JavaScript.</p></div>`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RzT3ZlcnZpZXdfanMuYTNiYjQ4MGQ5MmMwMTI1ZjJmYWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDeUQ7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzRUFBb0I7O0FBRXJELDBCQUEwQixtQkFBbUIsUUFBUSxXQUFXO0FBQ2hFO0FBQ0E7QUFDQSxrQkFBa0IsY0FBYyxTQUFTLG9CQUFvQjtBQUM3RDtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDLFdBQVcsb0JBQW9CO0FBQy9CO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNEVBQTRFLGdCQUFnQixpQ0FBaUMsYUFBYTtBQUMxSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0VBQW9COztBQUVyRCxNQUFNLHNFQUFvQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQkFBcUIsK0NBQVE7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFVO0FBQ2Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Byb2plY3RzT3ZlcnZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHB1c2hVUkxBbmRDYWxsUm91dGVyLCBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG4vKlxuR2VuZXJhdGVzIHRoZSBIVE1MIGNvZGUgZm9yIGEgcHJvamVjdCBvdmVydmlldyBwYWdlLlxuVGhlIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYW4gYXJyYXkgb2YgcHJvamVjdCBvYmplY3RzIGFuZFxuZ2VuZXJhdGVzIEhUTUwgY29kZSBmb3IgdGhlIHByb3BlcnRpZXMgb2YgdGhvc2Ugb2JqZWN0cy5cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdHNPdmVydmlldyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0cykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3RzIGRhdGEgYXZhaWxhYmxlIHRvIGNyZWF0ZSBvdmVydmlldy4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBIVE1MIGNvZGUgZm9yIHRoZSBkZXNjcmlwdGlvbiB0ZXh0IG9mIHRoZSBob21lcGFnZSB0aXRsZVxuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+PHA+SWNoIGJpbiBSb2JlcnQgQXJuaW5nLCBVSSAmIFVYIERlc2lnbmVyIG1pdCAxMCBKYWhyZW4gRXJmYWhydW5nIHVuZCB1bWZhc3NlbmRlciBFeHBlcnRpc2UgaW4gSFRNTC9DU1Mgc293aWUgc29saWRlbiBHcnVuZGtlbm50bmlzc2VuIGluIEphdmFTY3JpcHQuPC9wPjwvZGl2PmA7XG5cbiAgLy8gR2VuZXJhdGUgSFRNTCBjb2RlIGZvciBkaXNwbGF5aW5nIGVhY2ggcHJvamVjdCB1bmRlcm5lYXRoIGVhY2ggb3RoZXJcbiAgY29uc3Qgb3ZlcnZpZXdIVE1MID0gcHJvamVjdHNcbiAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAvLyBFbmNvZGUgdGhlIFwicHJvamVjdE5hbWVcIiB2YWx1ZSB0byBzYWZlbHkgaW5jbHVkZSBpdCBpbiB0aGUgVVJMIHBhdGhcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgICByZXR1cm4gYDxhIGhyZWY9XCIvJHt1cmxTYXZlUHJvamVjdE5hbWV9XCIgaWQ9XCIke3Byb2plY3QuaWR9XCI+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgIDxmaWd1cmU+XG4gICAgICA8aW1nIHNyYz1cIiR7cHJvamVjdC5pbWFnZX1cIiBhbHQ9XCIke3Byb2plY3QucHJvamVjdE5hbWV9XCI+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICAgIDxoMz4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9oMz5cbiAgICAgIDxwPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8L2E+YDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJob21lcGFnZVwiPjxoMSBjbGFzcz1cInNpdGUtdGl0bGVcIj5VSS9VWCBEZXNpZ25lcjwvaDE+JHtkZXNjcmlwdGlvblRleHR9PGRpdiBjbGFzcz1cInByb2plY3RzLW92ZXJ2aWV3XCI+JHtvdmVydmlld0hUTUx9PC9kaXY+PC9kaXY+YDtcbn07XG5cbi8qXG5Mb29rcyBmb3IgYSBwcm9qZWN0IHRoYXQgbWF0Y2hlcyBhIGdpdmVuIElEIHdpdGhpbiBhbiBhcnJheSBvZiBwcm9qZWN0IG9iamVjdHMuXG5UaGUgSUQgaXMgYSBwcm9wZXJ0eSBvZiBldmVyeSBwcm9qZWN0IG9iamVjdCBpbiB0aGUgYXJyYXkuXG4qL1xuY29uc3QgZmluZFByb2plY3RCeUlkID0gZnVuY3Rpb24gKHByb2plY3RBcnJheSwgaWQpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IE51bWJlcihpZCkpO1xuXG4gIHJldHVybiBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbn07XG5cbi8qXG5BZGRzIGEgY2xpY2sgZXZlbnQgdG8gdGhlIHByb2plY3QgdGVhc2VycyBvbiB0aGUgcHJvamVjdCBvdmVydmlldyBwYWdlLlxuVGhlIGV2ZW50IHRyaWVzIHRvIG1hdGNoIHRoZSBpZCBvZiB0aGUgY2xpY2tlZCB0ZWFzZXIgd2l0aCBhIHByb2plY3QncyBJRFxuZnJvbSBhIGdpdmVuIFtwcm9qZWN0c10gYXJyYXksIGluc2VydHMgdGhhdCBwcm9qZWN0IG5hbWUgaW4gdGhlIHVybCBhbmQgbG9kc1xudGhlIHJvdXRlciB0byBoYW5kbGUgdGhlIGxvYWRpbmcgb2YgdGhlIGNvbnRlbnQuXG4qL1xuZXhwb3J0IGNvbnN0IGhhbmRsZUNsaWNrT25Qcm9qZWN0VGVhc2VycyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICBjb25zdCBhbGxQcm9qZWN0VGVhc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzLW92ZXJ2aWV3IGEnKTtcblxuICBhbGxQcm9qZWN0VGVhc2VyLmZvckVhY2goKHRlYXNlcikgPT5cbiAgICB0ZWFzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBmaW5kUHJvamVjdEJ5SWQocHJvamVjdHMsIHByb2plY3RJZCk7XG4gICAgICBjb25zdCB1cmxTYXZlUHJvamVjdE5hbWUgPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0RGF0YS5wcm9qZWN0TmFtZSk7XG5cbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKHVybFNhdmVQcm9qZWN0TmFtZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbi8qIFxuQ2FsbHMgdGhlIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIHRoZSBIVE1MIGZvciB0aGUgUHJvamVjdCBPdmVydmlldyxcbnNldHMgaXRzIG91dHB1dCB0byBkaXNwbGF5IGluIHRoZSAjY29udGVudCBkaXYgYW5kIGFjdGl2YXRlcyB0aGVcbmxpbmtzIHRoYXQgd3JhcCBlYWNoIHByb2plY3QuXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0Rpc3BsYXlpbmcgcHJvamVjdHMuLi4nKTtcbiAgICBjb25zdCBwcm9qZWN0c092ZXJ2aWV3SFRNTCA9IGNyZWF0ZVByb2plY3RzT3ZlcnZpZXcoZGF0YS5wcm9qZWN0cyk7XG5cbiAgICBzZXRDb250ZW50KCdjb250ZW50JywgcHJvamVjdHNPdmVydmlld0hUTUwpO1xuICAgIGhhbmRsZUNsaWNrT25Qcm9qZWN0VGVhc2VycyhkYXRhLnByb2plY3RzKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==