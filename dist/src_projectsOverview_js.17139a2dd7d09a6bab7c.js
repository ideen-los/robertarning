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

  // Generate HTML code for the projects overview page
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

  return `<div class="homepage"><h1 class="site-title">UI/UX Developer</h1><div class="projects-overview">${overviewHTML}</div></div>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RzT3ZlcnZpZXdfanMuMTcxMzlhMmRkN2QwOWE2YmFiN2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDeUQ7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsc0VBQW9COztBQUVyRCwwQkFBMEIsbUJBQW1CLFFBQVEsV0FBVztBQUNoRTtBQUNBO0FBQ0Esa0JBQWtCLGNBQWMsU0FBUyxvQkFBb0I7QUFDN0Q7QUFDQSxZQUFZLG9CQUFvQjtBQUNoQyxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDRHQUE0RyxhQUFhO0FBQ3pIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzRUFBb0I7O0FBRXJELE1BQU0sc0VBQW9CO0FBQzFCLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1AscUJBQXFCLCtDQUFROztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVO0FBQ2Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Byb2plY3RzT3ZlcnZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHB1c2hVUkxBbmRDYWxsUm91dGVyLCBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG4vKlxuR2VuZXJhdGVzIHRoZSBIVE1MIGNvZGUgZm9yIGEgcHJvamVjdCBvdmVydmlldyBwYWdlLlxuVGhlIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYW4gYXJyYXkgb2YgcHJvamVjdCBvYmplY3RzIGFuZFxuZ2VuZXJhdGVzIEhUTUwgY29kZSBmb3IgdGhlIHByb3BlcnRpZXMgb2YgdGhvc2Ugb2JqZWN0cy5cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdHNPdmVydmlldyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0cykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3RzIGRhdGEgYXZhaWxhYmxlIHRvIGNyZWF0ZSBvdmVydmlldy4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBIVE1MIGNvZGUgZm9yIHRoZSBwcm9qZWN0cyBvdmVydmlldyBwYWdlXG4gIGNvbnN0IG92ZXJ2aWV3SFRNTCA9IHByb2plY3RzXG4gICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgLy8gRW5jb2RlIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoXG4gICAgICBjb25zdCB1cmxTYXZlUHJvamVjdE5hbWUgPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgICAgcmV0dXJuIGA8YSBocmVmPVwiLyR7dXJsU2F2ZVByb2plY3ROYW1lfVwiIGlkPVwiJHtwcm9qZWN0LmlkfVwiPlxuICAgICAgPGFydGljbGU+XG4gICAgICA8ZmlndXJlPlxuICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QuaW1hZ2V9XCIgYWx0PVwiJHtwcm9qZWN0LnByb2plY3ROYW1lfVwiPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8aDM+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDM+XG4gICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9hPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiaG9tZXBhZ2VcIj48aDEgY2xhc3M9XCJzaXRlLXRpdGxlXCI+VUkvVVggRGV2ZWxvcGVyPC9oMT48ZGl2IGNsYXNzPVwicHJvamVjdHMtb3ZlcnZpZXdcIj4ke292ZXJ2aWV3SFRNTH08L2Rpdj48L2Rpdj5gO1xufTtcblxuLypcbkxvb2tzIGZvciBhIHByb2plY3QgdGhhdCBtYXRjaGVzIGEgZ2l2ZW4gSUQgd2l0aGluIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cy5cblRoZSBJRCBpcyBhIHByb3BlcnR5IG9mIGV2ZXJ5IHByb2plY3Qgb2JqZWN0IGluIHRoZSBhcnJheS5cbiovXG5jb25zdCBmaW5kUHJvamVjdEJ5SWQgPSBmdW5jdGlvbiAocHJvamVjdEFycmF5LCBpZCkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgcmV0dXJuIHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xufTtcblxuLypcbkFkZHMgYSBjbGljayBldmVudCB0byB0aGUgcHJvamVjdCB0ZWFzZXJzIG9uIHRoZSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZXZlbnQgdHJpZXMgdG8gbWF0Y2ggdGhlIGlkIG9mIHRoZSBjbGlja2VkIHRlYXNlciB3aXRoIGEgcHJvamVjdCdzIElEXG5mcm9tIGEgZ2l2ZW4gW3Byb2plY3RzXSBhcnJheSwgaW5zZXJ0cyB0aGF0IHByb2plY3QgbmFtZSBpbiB0aGUgdXJsIGFuZCBsb2RzXG50aGUgcm91dGVyIHRvIGhhbmRsZSB0aGUgbG9hZGluZyBvZiB0aGUgY29udGVudC5cbiovXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGNvbnN0IGFsbFByb2plY3RUZWFzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtb3ZlcnZpZXcgYScpO1xuXG4gIGFsbFByb2plY3RUZWFzZXIuZm9yRWFjaCgodGVhc2VyKSA9PlxuICAgIHRlYXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByb2plY3REYXRhLnByb2plY3ROYW1lKTtcblxuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIodXJsU2F2ZVByb2plY3ROYW1lKTtcbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0Rpc3BsYXlpbmcgcHJvamVjdHMuLi4nKTtcbiAgICBjb25zdCBwcm9qZWN0c092ZXJ2aWV3SFRNTCA9IGNyZWF0ZVByb2plY3RzT3ZlcnZpZXcoZGF0YS5wcm9qZWN0cyk7XG4gICAgc2V0Q29udGVudCgnY29udGVudCcsIHByb2plY3RzT3ZlcnZpZXdIVE1MKTtcbiAgICBoYW5kbGVDbGlja09uUHJvamVjdFRlYXNlcnMoZGF0YS5wcm9qZWN0cyk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=