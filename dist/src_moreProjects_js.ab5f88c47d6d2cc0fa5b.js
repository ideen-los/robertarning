"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_moreProjects_js"],{

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

/***/ "./src/moreProjects.js":
/*!*****************************!*\
  !*** ./src/moreProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleMoreProjectsLinks: () => (/* binding */ handleMoreProjectsLinks),
/* harmony export */   showMoreProjects: () => (/* binding */ showMoreProjects)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");



const findPreviousAndNextProject = async function (project) {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();

  try {
    if (!data || !project) {
      console.error('No data or project available');
      return '';
    }

    const allProjects = data.projects;
    const currentProjectIndex = Number(project.id) - 1;

    const nextProjectIndex = (currentProjectIndex + 1) % allProjects.length;
    const nextProject = allProjects[nextProjectIndex];

    const previousProjectIndex =
      (currentProjectIndex - 1 + allProjects.length) % allProjects.length;
    const previousProject = allProjects[previousProjectIndex];

    return { previousProject, nextProject };
  } catch (error) {
    console.error('Failed to load data', error);
    return '';
  }
};

const showMoreProjects = async function (project) {
  const { previousProject, nextProject } = await findPreviousAndNextProject(project);

  try {
    if (!previousProject || !nextProject) {
      console.error('No data on previous and next project available');
      return '';
    }

    const previousProjectURLPath = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.convertToURLSaveName)(previousProject.projectName);
    const nextProjectURLPath = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.convertToURLSaveName)(nextProject.projectName);

    return `<section class="more-projects"><h2>Mehr Projekte</h2><div class="more-projects-wrapper"><a href="/${previousProjectURLPath}" class="previous-project"><div style="background-image: url('${previousProject.image}');"></div></a><a href="/${nextProjectURLPath}" class="next-project"><div style="background-image: url('${nextProject.image}');"></div></a></div></section>`;
  } catch (error) {
    console.error('Failed to load data', error);
    return '';
  }
};

const handleMoreProjectsLinks = function () {
  const previousProjectLink = document.querySelector('.previous-project');
  const nextProjectLink = document.querySelector('.next-project');

  const previousProjectURLPath = previousProjectLink.href.split('/')[3];
  const nextProjectURLPath = nextProjectLink.href.split('/')[3];

  previousProjectLink.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.pushURLAndCallRouter)(previousProjectURLPath);
  });

  nextProjectLink.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.pushURLAndCallRouter)(nextProjectURLPath);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX21vcmVQcm9qZWN0c19qcy5hYjVmODhjNDdkNmQyY2MwZmE1Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUEsTUFBTSxzRUFBeUI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdCQUFnQjtBQUM3RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxzRUFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDa0M7QUFDNkM7O0FBRS9FO0FBQ0EscUJBQXFCLCtDQUFROztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLFVBQVUsK0JBQStCOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQyxzRUFBb0I7QUFDdkQsK0JBQStCLHNFQUFvQjs7QUFFbkQsZ0hBQWdILHVCQUF1QixnRUFBZ0Usc0JBQXNCLEdBQUcsd0JBQXdCLG1CQUFtQiw0REFBNEQsa0JBQWtCLEdBQUc7QUFDNVYsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNFQUFvQjtBQUN4QixHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJLHNFQUFvQjtBQUN4QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL21vcmVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Vzc2lvblN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vc2Vzc2lvblN0b3JhZ2UnO1xuXG4vKiBcbkxvYWRzIGEgSlNPTiBmaWxlIHdpdGggYWxsIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCBzYXZlcyBpdFxudG8gc2Vzc2lvblN0b3JhZ2UgaWYgYXZhaWxhYmxlLCBzbyB0aGUgZGF0YSBpcyBjYWNoZWQgZm9yIGZ1cnRoZXIgdXNlLlxuKi9cbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZy4uLicpO1xuICBsZXQgZGF0YTtcblxuICBpZiAoaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uU3RvcmFnZSBhdmFpbGFibGUuLi4nKTtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpO1xuXG4gICAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICAgIC8vIEdldHMgdGhlIGRhdGEgZnJvbSBzZXNzaW9uU3RvcmFnZVxuICAgICAgY29uc29sZS5sb2coJ0xvYWRlZCBwcm9qZWN0cyBmcm9tIHNlc3Npb25TdG9yYWdlJyk7XG4gICAgICBkYXRhID0gc3RvcmVkRGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgLy8gTm8gc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlIG9yIG5vIGRhdGEgaW4gc2Vzc2lvblN0b3JhZ2U6XG4gIC8vIGZldGNoIHRoZSBkYXRhLmpzb24gZnJvbSB0aGUgc2VydmVyXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YS4uLicpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kYXRhL2RhdGEuanNvbicpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyMDAtMjk5IHJhbmdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIC8vIFNhdmUgZmV0Y2hlZCBkYXRhIHRvIHNlc3Npb25TdG9yYWdlXG4gICAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBjb25zb2xlLmxvZygnU2F2ZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZScpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNvbnZlcnRUb1VSTFNhdmVOYW1lLCBwdXNoVVJMQW5kQ2FsbFJvdXRlciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuY29uc3QgZmluZFByZXZpb3VzQW5kTmV4dFByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICB0cnkge1xuICAgIGlmICghZGF0YSB8fCAhcHJvamVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YSBvciBwcm9qZWN0IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGV4ID0gTnVtYmVyKHByb2plY3QuaWQpIC0gMTtcblxuICAgIGNvbnN0IG5leHRQcm9qZWN0SW5kZXggPSAoY3VycmVudFByb2plY3RJbmRleCArIDEpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0ID0gYWxsUHJvamVjdHNbbmV4dFByb2plY3RJbmRleF07XG5cbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3RJbmRleCA9XG4gICAgICAoY3VycmVudFByb2plY3RJbmRleCAtIDEgKyBhbGxQcm9qZWN0cy5sZW5ndGgpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdCA9IGFsbFByb2plY3RzW3ByZXZpb3VzUHJvamVjdEluZGV4XTtcblxuICAgIHJldHVybiB7IHByZXZpb3VzUHJvamVjdCwgbmV4dFByb2plY3QgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhJywgZXJyb3IpO1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNob3dNb3JlUHJvamVjdHMgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCB7IHByZXZpb3VzUHJvamVjdCwgbmV4dFByb2plY3QgfSA9IGF3YWl0IGZpbmRQcmV2aW91c0FuZE5leHRQcm9qZWN0KHByb2plY3QpO1xuXG4gIHRyeSB7XG4gICAgaWYgKCFwcmV2aW91c1Byb2plY3QgfHwgIW5leHRQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBkYXRhIG9uIHByZXZpb3VzIGFuZCBuZXh0IHByb2plY3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0VVJMUGF0aCA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByZXZpb3VzUHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbmV4dFByb2plY3RVUkxQYXRoID0gY29udmVydFRvVVJMU2F2ZU5hbWUobmV4dFByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cIm1vcmUtcHJvamVjdHNcIj48aDI+TWVociBQcm9qZWt0ZTwvaDI+PGRpdiBjbGFzcz1cIm1vcmUtcHJvamVjdHMtd3JhcHBlclwiPjxhIGhyZWY9XCIvJHtwcmV2aW91c1Byb2plY3RVUkxQYXRofVwiIGNsYXNzPVwicHJldmlvdXMtcHJvamVjdFwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlvdXNQcm9qZWN0LmltYWdlfScpO1wiPjwvZGl2PjwvYT48YSBocmVmPVwiLyR7bmV4dFByb2plY3RVUkxQYXRofVwiIGNsYXNzPVwibmV4dC1wcm9qZWN0XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtuZXh0UHJvamVjdC5pbWFnZX0nKTtcIj48L2Rpdj48L2E+PC9kaXY+PC9zZWN0aW9uPmA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YScsIGVycm9yKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVNb3JlUHJvamVjdHNMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJldmlvdXNQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cy1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5leHRQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXByb2plY3QnKTtcblxuICBjb25zdCBwcmV2aW91c1Byb2plY3RVUkxQYXRoID0gcHJldmlvdXNQcm9qZWN0TGluay5ocmVmLnNwbGl0KCcvJylbM107XG4gIGNvbnN0IG5leHRQcm9qZWN0VVJMUGF0aCA9IG5leHRQcm9qZWN0TGluay5ocmVmLnNwbGl0KCcvJylbM107XG5cbiAgcHJldmlvdXNQcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKHByZXZpb3VzUHJvamVjdFVSTFBhdGgpO1xuICB9KTtcblxuICBuZXh0UHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcihuZXh0UHJvamVjdFVSTFBhdGgpO1xuICB9KTtcbn07XG4iLCIvKlxuVGVzdHMgaWYgc2Vzc2lvblN0b3JhZ2UgaXMgYXZhaWxhYmxlIGluIHRoZSB1c2VycyBicm93c2VyXG4qL1xuZXhwb3J0IGNvbnN0IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdCA9ICd0ZXN0LXN0b3JhZ2UnO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==