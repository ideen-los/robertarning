"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_projectsOverview_js"],{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadData: () => (/* binding */ loadData)
/* harmony export */ });
/* harmony import */ var _sessionStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessionStorage */ "./src/sessionStorage.js");


/* 
Loads a JSON file with all data from the server and saves it
to sessionStorage if available, so the data is cached for further use.
*/
const loadData = async function () {
  console.log('Initializing...');
  let data;

  if (_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.isSessionStorageAvailable) {
    console.log('sessionStorage available...');
    const storedData = JSON.parse(sessionStorage.getItem('data'));

    if (storedData) {
      // Gets the data from sessionStorage
      console.log('Loaded projects from sessionStorage');
      data = storedData;
      console.log(data);
      return data;
    }
  }

  // No sessionStorage available or no data in sessionStorage:
  // fetch the data.json from the server
  try {
    console.log('Getting data...');
    const response = await fetch('/data/data.json');
    if (!response.ok) {
      // Check if the HTTP status code is in the 200-299 range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    data = await response.json();
    console.log(data);

    // Save fetched data to sessionStorage
    if (_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.isSessionStorageAvailable) {
      sessionStorage.setItem('data', JSON.stringify(data));
      console.log('Saved data to sessionStorage');
    }
    return data;
  } catch (error) {
    console.error('Failed to load data:', error);
    return null;
  }
};


/***/ }),

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


/***/ }),

/***/ "./src/sessionStorage.js":
/*!*******************************!*\
  !*** ./src/sessionStorage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isSessionStorageAvailable: () => (/* binding */ isSessionStorageAvailable)
/* harmony export */ });
/*
Tests if sessionStorage is available in the users browser
*/
const isSessionStorageAvailable = function () {
  try {
    const test = 'test-storage';
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RzT3ZlcnZpZXdfanMuMTc0YzQwMDU2NDMxODVmMGJiMjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBLE1BQU0sc0VBQXlCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0VBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNrQztBQUN5RDs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNFQUFvQjs7QUFFckQsMEJBQTBCLG1CQUFtQixRQUFRLFdBQVc7QUFDaEU7QUFDQTtBQUNBLGtCQUFrQixjQUFjLFNBQVMsb0JBQW9CO0FBQzdEO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEMsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSw0RUFBNEUsZ0JBQWdCLGlDQUFpQyxhQUFhO0FBQzFJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzRUFBb0I7O0FBRXJELE1BQU0sc0VBQW9CO0FBQzFCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFCQUFxQiwrQ0FBUTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQVU7QUFDZDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JGQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Byb2plY3RzT3ZlcnZpZXcuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Nlc3Npb25TdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlJztcblxuLyogXG5Mb2FkcyBhIEpTT04gZmlsZSB3aXRoIGFsbCBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgc2F2ZXMgaXRcbnRvIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZSwgc28gdGhlIGRhdGEgaXMgY2FjaGVkIGZvciBmdXJ0aGVyIHVzZS5cbiovXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcbiAgbGV0IGRhdGE7XG5cbiAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlLi4uJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICAvLyBHZXRzIHRoZSBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgcHJvamVjdHMgZnJvbSBzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgZGF0YSA9IHN0b3JlZERhdGE7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vIHNlc3Npb25TdG9yYWdlIGF2YWlsYWJsZSBvciBubyBkYXRhIGluIHNlc3Npb25TdG9yYWdlOlxuICAvLyBmZXRjaCB0aGUgZGF0YS5qc29uIGZyb20gdGhlIHNlcnZlclxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIGRhdGEuLi4nKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZGF0YS9kYXRhLmpzb24nKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgSFRUUCBzdGF0dXMgY29kZSBpcyBpbiB0aGUgMjAwLTI5OSByYW5nZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBTYXZlIGZldGNoZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZVxuICAgIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgY29uc29sZS5sb2coJ1NhdmVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgcHVzaFVSTEFuZENhbGxSb3V0ZXIsIHNldENvbnRlbnQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbi8qXG5HZW5lcmF0ZXMgdGhlIEhUTUwgY29kZSBmb3IgYSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbiBhcnJheSBvZiBwcm9qZWN0IG9iamVjdHMgYW5kXG5nZW5lcmF0ZXMgSFRNTCBjb2RlIGZvciB0aGUgcHJvcGVydGllcyBvZiB0aG9zZSBvYmplY3RzLlxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3ID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3RzKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvamVjdHMgZGF0YSBhdmFpbGFibGUgdG8gY3JlYXRlIG92ZXJ2aWV3LicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgY29kZSBmb3IgdGhlIGRlc2NyaXB0aW9uIHRleHQgb2YgdGhlIGhvbWVwYWdlIHRpdGxlXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj48cD5JY2ggYmluIFJvYmVydCBBcm5pbmcsIGVpbiBVSS9VWCBEZXNpZ25lciBtaXQgMTAgSmFocmVuIEVyZmFocnVuZyB1bmQgdW1mYXNzZW5kZXIgRXhwZXJ0aXNlIGluIEhUTUwvQ1NTIHNvd2llIHNvbGlkZW4gR3J1bmRrZW5udG5pc3NlbiBpbiBKYXZhU2NyaXB0LjwvcD48L2Rpdj5gO1xuXG4gIC8vIEdlbmVyYXRlIEhUTUwgY29kZSBmb3IgZGlzcGxheWluZyBlYWNoIHByb2plY3QgdW5kZXJuZWF0aCBlYWNoIG90aGVyXG4gIGNvbnN0IG92ZXJ2aWV3SFRNTCA9IHByb2plY3RzXG4gICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgLy8gRW5jb2RlIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoXG4gICAgICBjb25zdCB1cmxTYXZlUHJvamVjdE5hbWUgPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgICAgcmV0dXJuIGA8YSBocmVmPVwiLyR7dXJsU2F2ZVByb2plY3ROYW1lfVwiIGlkPVwiJHtwcm9qZWN0LmlkfVwiPlxuICAgICAgPGFydGljbGU+XG4gICAgICA8ZmlndXJlPlxuICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QuaW1hZ2V9XCIgYWx0PVwiJHtwcm9qZWN0LnByb2plY3ROYW1lfVwiPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8aDM+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDM+XG4gICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9hPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiaG9tZXBhZ2VcIj48aDEgY2xhc3M9XCJzaXRlLXRpdGxlXCI+VUkvVVggRGVzaWduZXI8L2gxPiR7ZGVzY3JpcHRpb25UZXh0fTxkaXYgY2xhc3M9XCJwcm9qZWN0cy1vdmVydmlld1wiPiR7b3ZlcnZpZXdIVE1MfTwvZGl2PjwvZGl2PmA7XG59O1xuXG4vKlxuTG9va3MgZm9yIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgYSBnaXZlbiBJRCB3aXRoaW4gYW4gYXJyYXkgb2YgcHJvamVjdCBvYmplY3RzLlxuVGhlIElEIGlzIGEgcHJvcGVydHkgb2YgZXZlcnkgcHJvamVjdCBvYmplY3QgaW4gdGhlIGFycmF5LlxuKi9cbmNvbnN0IGZpbmRQcm9qZWN0QnlJZCA9IGZ1bmN0aW9uIChwcm9qZWN0QXJyYXksIGlkKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBOdW1iZXIoaWQpKTtcblxuICByZXR1cm4gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF07XG59O1xuXG4vKlxuQWRkcyBhIGNsaWNrIGV2ZW50IHRvIHRoZSBwcm9qZWN0IHRlYXNlcnMgb24gdGhlIHByb2plY3Qgb3ZlcnZpZXcgcGFnZS5cblRoZSBldmVudCB0cmllcyB0byBtYXRjaCB0aGUgaWQgb2YgdGhlIGNsaWNrZWQgdGVhc2VyIHdpdGggYSBwcm9qZWN0J3MgSURcbmZyb20gYSBnaXZlbiBbcHJvamVjdHNdIGFycmF5LCBpbnNlcnRzIHRoYXQgcHJvamVjdCBuYW1lIGluIHRoZSB1cmwgYW5kIGxvZHNcbnRoZSByb3V0ZXIgdG8gaGFuZGxlIHRoZSBsb2FkaW5nIG9mIHRoZSBjb250ZW50LlxuKi9cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGlja09uUHJvamVjdFRlYXNlcnMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgY29uc3QgYWxsUHJvamVjdFRlYXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cy1vdmVydmlldyBhJyk7XG5cbiAgYWxsUHJvamVjdFRlYXNlci5mb3JFYWNoKCh0ZWFzZXIpID0+XG4gICAgdGVhc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIGNvbnN0IHByb2plY3REYXRhID0gZmluZFByb2plY3RCeUlkKHByb2plY3RzLCBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdXJsU2F2ZVByb2plY3ROYW1lID0gY29udmVydFRvVVJMU2F2ZU5hbWUocHJvamVjdERhdGEucHJvamVjdE5hbWUpO1xuXG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcih1cmxTYXZlUHJvamVjdE5hbWUpO1xuICAgIH0pXG4gICk7XG59O1xuXG4vKiBcbkNhbGxzIHRoZSBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlcyB0aGUgSFRNTCBmb3IgdGhlIFByb2plY3QgT3ZlcnZpZXcsXG5zZXRzIGl0cyBvdXRwdXQgdG8gZGlzcGxheSBpbiB0aGUgI2NvbnRlbnQgZGl2IGFuZCBhY3RpdmF0ZXMgdGhlXG5saW5rcyB0aGF0IHdyYXAgZWFjaCBwcm9qZWN0LlxuKi9cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvamVjdE92ZXJ2aWV3ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdEaXNwbGF5aW5nIHByb2plY3RzLi4uJyk7XG4gICAgY29uc3QgcHJvamVjdHNPdmVydmlld0hUTUwgPSBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3KGRhdGEucHJvamVjdHMpO1xuXG4gICAgc2V0Q29udGVudCgnY29udGVudCcsIHByb2plY3RzT3ZlcnZpZXdIVE1MKTtcbiAgICBoYW5kbGVDbGlja09uUHJvamVjdFRlYXNlcnMoZGF0YS5wcm9qZWN0cyk7XG4gIH1cbn07XG4iLCIvKlxuVGVzdHMgaWYgc2Vzc2lvblN0b3JhZ2UgaXMgYXZhaWxhYmxlIGluIHRoZSB1c2VycyBicm93c2VyXG4qL1xuZXhwb3J0IGNvbnN0IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdCA9ICd0ZXN0LXN0b3JhZ2UnO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==