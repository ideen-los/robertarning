"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_singleProject_js"],{

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

  // Get data from sessionStorage if available
  if (_sessionStorage__WEBPACK_IMPORTED_MODULE_0__.isSessionStorageAvailable) {
    console.log('sessionStorage available...');
    const storedData = JSON.parse(sessionStorage.getItem('data'));

    if (storedData) {
      console.log('Loaded projects from sessionStorage');
      data = storedData;
      console.log(data);
      return data;
    }
  }

  // If data is not available in sessionStorage, fetch the data from server
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


/***/ }),

/***/ "./src/singleProject.js":
/*!******************************!*\
  !*** ./src/singleProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSingleProject: () => (/* binding */ loadSingleProject),
/* harmony export */   showSingleProject: () => (/* binding */ showSingleProject)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _img_external_link_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/external-link.svg */ "./src/img/external-link.svg");
/* harmony import */ var _moreProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moreProjects */ "./src/moreProjects.js");





const showSingleProject = async function (project) {
  // Check whether project data is available
  if (!project) {
    console.error('No project data available.');
    return '';
  }

  // Generate HTML Code for the single project page
  const projectLink = generateProjectLink(project);
  const usedSkills = generateUsedSkills(project);
  const projectMediaElements = generateProjectMediaElements(project);
  const moreProjects = await (0,_moreProjects__WEBPACK_IMPORTED_MODULE_3__.showMoreProjects)(project);

  return `<div id="${project.id}" class="single-project"><div class="project-title-and-link"><h2>${project.projectName}</h2>${projectLink}</div><section class="skills-and-tools"><ul><span>Skills/   Tools:</span>${usedSkills}</ul></section><section class="media-elements">${projectMediaElements}</section>${moreProjects}</div>`;
};

const generateProjectLink = function (project) {
  if (project.live_site) {
    return `<a href="${project.live_site}"><span>Live-Seite besuchen</span><img src="${_img_external_link_svg__WEBPACK_IMPORTED_MODULE_2__}"></a>`;
  } else {
    return '';
  }
};

const generateUsedSkills = function (project) {
  if (project.skills) {
    const projectSkills = project.skills
      .map((skill) => {
        return `<li class="skill-tag">${skill}</li>`;
      })
      .join('');

    return projectSkills;
  } else {
    return '';
  }
};

const generateProjectMediaElements = function (project) {
  if (project.elements) {
    const projectElements = project.elements
      .map((element) => {
        switch (element.type) {
          case 'video':
            return `<div class="${element.type} ${element.version || ''}">
            <video class="${element.above_fold ? '' : 'media lazy-load'}" autoplay muted loop>
              <source ${
                element.above_fold ? `src="${element.content}"` : `data-src="${element.content}"`
              } type="video/mp4">
            </video>
            </div>`;
          case 'image':
            return `<div class="${element.type} ${element.version || ''}">
            <img class="${element.above_fold ? '' : 'media lazy-load'}" ${
              element.above_fold ? `src="${element.content}"` : `data-src="${element.content}"`
            }">
            </div>`;
          case 'text':
            return `<div class="${element.type}">
            <p>${element.content}</p>
            </div>`;
          case 'comment':
            return `<div class="${element.type}">
            <p>${element.content}</p>
            </div>`;
          case 'two-column':
            // If the element type is "two-column" we need to iterate over the element's
            // "content" property which holds an array of media objects "image" or "video"
            const twoColumnElements = element.content
              .map((media) => {
                if (media.type === 'video') {
                  return `<div class="${media.type} ${media.version || ''}">
                  <video class="media lazy-load" autoplay muted loop>
                    <source data-src="${media.content}" type="video/mp4">
                  </video>
                  </div>`;
                } else if (media.type === 'image') {
                  return `<div class="${media.type} ${element.version || ''}">
                  <img class="media lazy-load" data-src="${media.content}">
                  </div>`;
                } else {
                  return `<p>Unsupported media format.</p>`;
                }
              })
              .join('');

            return `<div class ="${element.type}">
            ${twoColumnElements}
            </div>`;
        }
      })
      .join('');

    return projectElements;
  } else {
    return '';
  }
};

const loadSingleProject = async function (path) {
  const projectName = path.split('/')[1]; // Assuming paths like "/projectName"
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();
  // Find the project object that matches the projectName in the URL
  const project = data.projects.find(
    (project) => (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.convertToURLSaveName)(project.projectName) === projectName
  );

  if (project) {
    try {
      const HTMLContent = await showSingleProject(project);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', HTMLContent);
    } catch (error) {
      console.error('Failed to load project details:', error);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', '<h1>Error Loading Project</h1>');
    }
  } else {
    // No project found, display a generic 404 page
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', '<h1>404 Not Found</h1>');
  }
};


/***/ }),

/***/ "./src/img/external-link.svg":
/*!***********************************!*\
  !*** ./src/img/external-link.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "683f8c5361bc53fd8a51.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NpbmdsZVByb2plY3RfanMuMWIyYTM0Y2VlODAyYzA5MWU4ZjEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzRUFBeUI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0VBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q2tDO0FBQzZDOztBQUUvRTtBQUNBLHFCQUFxQiwrQ0FBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxVQUFVLCtCQUErQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsc0VBQW9CO0FBQ3ZELCtCQUErQixzRUFBb0I7O0FBRW5ELGdIQUFnSCx1QkFBdUIsZ0VBQWdFLHNCQUFzQixHQUFHLHdCQUF3QixtQkFBbUIsNERBQTRELGtCQUFrQixHQUFHO0FBQzVWLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzRUFBb0I7QUFDeEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxzRUFBb0I7QUFDeEIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaa0M7QUFDbUM7QUFDZDtBQUNvQjs7QUFFcEU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUFnQjs7QUFFN0MscUJBQXFCLFdBQVcsbUVBQW1FLG9CQUFvQixPQUFPLFlBQVksMkVBQTJFLFdBQVcsaURBQWlELHFCQUFxQixZQUFZLGFBQWE7QUFDL1Q7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0IsOENBQThDLG1EQUFnQixDQUFDO0FBQ3hHLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QyxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLEVBQUUsc0JBQXNCO0FBQ3hFLDRCQUE0Qiw0Q0FBNEM7QUFDeEU7QUFDQSw2Q0FBNkMsZ0JBQWdCLGtCQUFrQixnQkFBZ0I7QUFDL0YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLEVBQUUsc0JBQXNCO0FBQ3hFLDBCQUEwQiw0Q0FBNEM7QUFDdEUsMkNBQTJDLGdCQUFnQixrQkFBa0IsZ0JBQWdCO0FBQzdGLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0MsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0MsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZLEVBQUUsb0JBQW9CO0FBQzFFO0FBQ0Esd0NBQXdDLGNBQWM7QUFDdEQ7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQix3Q0FBd0MsWUFBWSxFQUFFLHNCQUFzQjtBQUM1RSwyREFBMkQsY0FBYztBQUN6RTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBLG1DQUFtQyxhQUFhO0FBQ2hELGNBQWM7QUFDZDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDBDQUEwQztBQUMxQyxxQkFBcUIsK0NBQVE7QUFDN0I7QUFDQTtBQUNBLGlCQUFpQixzRUFBb0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBVTtBQUNoQixNQUFNO0FBQ047QUFDQSxNQUFNLDREQUFVO0FBQ2hCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSSw0REFBVTtBQUNkO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbW9yZVByb2plY3RzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2luZ2xlUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9zZXNzaW9uU3RvcmFnZSc7XG5cbi8qIFxuTG9hZHMgYSBKU09OIGZpbGUgd2l0aCBhbGwgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHNhdmVzIGl0XG50byBzZXNzaW9uU3RvcmFnZSBpZiBhdmFpbGFibGUsIHNvIHRoZSBkYXRhIGlzIGNhY2hlZCBmb3IgZnVydGhlciB1c2UuXG4qL1xuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nLi4uJyk7XG4gIGxldCBkYXRhO1xuXG4gIC8vIEdldCBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2UgaWYgYXZhaWxhYmxlXG4gIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgY29uc29sZS5sb2coJ3Nlc3Npb25TdG9yYWdlIGF2YWlsYWJsZS4uLicpO1xuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSk7XG5cbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ0xvYWRlZCBwcm9qZWN0cyBmcm9tIHNlc3Npb25TdG9yYWdlJyk7XG4gICAgICBkYXRhID0gc3RvcmVkRGF0YTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgZGF0YSBpcyBub3QgYXZhaWxhYmxlIGluIHNlc3Npb25TdG9yYWdlLCBmZXRjaCB0aGUgZGF0YSBmcm9tIHNlcnZlclxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIGRhdGEuLi4nKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZGF0YS9kYXRhLmpzb24nKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgSFRUUCBzdGF0dXMgY29kZSBpcyBpbiB0aGUgMjAwLTI5OSByYW5nZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgLy8gU2F2ZSBmZXRjaGVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2VcbiAgICBpZiAoaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTYXZlZCBkYXRhIHRvIHNlc3Npb25TdG9yYWdlJyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGE6JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHB1c2hVUkxBbmRDYWxsUm91dGVyIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5jb25zdCBmaW5kUHJldmlvdXNBbmROZXh0UHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhIHx8ICFwcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBkYXRhIG9yIHByb2plY3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBOdW1iZXIocHJvamVjdC5pZCkgLSAxO1xuXG4gICAgY29uc3QgbmV4dFByb2plY3RJbmRleCA9IChjdXJyZW50UHJvamVjdEluZGV4ICsgMSkgJSBhbGxQcm9qZWN0cy5sZW5ndGg7XG4gICAgY29uc3QgbmV4dFByb2plY3QgPSBhbGxQcm9qZWN0c1tuZXh0UHJvamVjdEluZGV4XTtcblxuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdEluZGV4ID1cbiAgICAgIChjdXJyZW50UHJvamVjdEluZGV4IC0gMSArIGFsbFByb2plY3RzLmxlbmd0aCkgJSBhbGxQcm9qZWN0cy5sZW5ndGg7XG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0ID0gYWxsUHJvamVjdHNbcHJldmlvdXNQcm9qZWN0SW5kZXhdO1xuXG4gICAgcmV0dXJuIHsgcHJldmlvdXNQcm9qZWN0LCBuZXh0UHJvamVjdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGEnLCBlcnJvcik7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd01vcmVQcm9qZWN0cyA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHsgcHJldmlvdXNQcm9qZWN0LCBuZXh0UHJvamVjdCB9ID0gYXdhaXQgZmluZFByZXZpb3VzQW5kTmV4dFByb2plY3QocHJvamVjdCk7XG5cbiAgdHJ5IHtcbiAgICBpZiAoIXByZXZpb3VzUHJvamVjdCB8fCAhbmV4dFByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgb24gcHJldmlvdXMgYW5kIG5leHQgcHJvamVjdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3RVUkxQYXRoID0gY29udmVydFRvVVJMU2F2ZU5hbWUocHJldmlvdXNQcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICBjb25zdCBuZXh0UHJvamVjdFVSTFBhdGggPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShuZXh0UHJvamVjdC5wcm9qZWN0TmFtZSk7XG5cbiAgICByZXR1cm4gYDxzZWN0aW9uIGNsYXNzPVwibW9yZS1wcm9qZWN0c1wiPjxoMj5NZWhyIFByb2pla3RlPC9oMj48ZGl2IGNsYXNzPVwibW9yZS1wcm9qZWN0cy13cmFwcGVyXCI+PGEgaHJlZj1cIi8ke3ByZXZpb3VzUHJvamVjdFVSTFBhdGh9XCIgY2xhc3M9XCJwcmV2aW91cy1wcm9qZWN0XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcmV2aW91c1Byb2plY3QuaW1hZ2V9Jyk7XCI+PC9kaXY+PC9hPjxhIGhyZWY9XCIvJHtuZXh0UHJvamVjdFVSTFBhdGh9XCIgY2xhc3M9XCJuZXh0LXByb2plY3RcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke25leHRQcm9qZWN0LmltYWdlfScpO1wiPjwvZGl2PjwvYT48L2Rpdj48L3NlY3Rpb24+YDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhJywgZXJyb3IpO1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcmV2aW91c1Byb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLXByb2plY3QnKTtcbiAgY29uc3QgbmV4dFByb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtcHJvamVjdCcpO1xuXG4gIGNvbnN0IHByZXZpb3VzUHJvamVjdFVSTFBhdGggPSBwcmV2aW91c1Byb2plY3RMaW5rLmhyZWYuc3BsaXQoJy8nKVszXTtcbiAgY29uc3QgbmV4dFByb2plY3RVUkxQYXRoID0gbmV4dFByb2plY3RMaW5rLmhyZWYuc3BsaXQoJy8nKVszXTtcblxuICBwcmV2aW91c1Byb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIocHJldmlvdXNQcm9qZWN0VVJMUGF0aCk7XG4gIH0pO1xuXG4gIG5leHRQcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKG5leHRQcm9qZWN0VVJMUGF0aCk7XG4gIH0pO1xufTtcbiIsIi8qXG5UZXN0cyBpZiBzZXNzaW9uU3RvcmFnZSBpcyBhdmFpbGFibGUgaW4gdGhlIHVzZXJzIGJyb3dzZXJcbiovXG5leHBvcnQgY29uc3QgaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXN0ID0gJ3Rlc3Qtc3RvcmFnZSc7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0ZXN0LCB0ZXN0KTtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHNldENvbnRlbnQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5pbXBvcnQgZXh0ZXJuYWxMaW5rSWNvbiBmcm9tICcuL2ltZy9leHRlcm5hbC1saW5rLnN2Zyc7XG5pbXBvcnQgeyBoYW5kbGVNb3JlUHJvamVjdHNMaW5rcywgc2hvd01vcmVQcm9qZWN0cyB9IGZyb20gJy4vbW9yZVByb2plY3RzJztcblxuZXhwb3J0IGNvbnN0IHNob3dTaW5nbGVQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgLy8gQ2hlY2sgd2hldGhlciBwcm9qZWN0IGRhdGEgaXMgYXZhaWxhYmxlXG4gIGlmICghcHJvamVjdCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3QgZGF0YSBhdmFpbGFibGUuJyk7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgSFRNTCBDb2RlIGZvciB0aGUgc2luZ2xlIHByb2plY3QgcGFnZVxuICBjb25zdCBwcm9qZWN0TGluayA9IGdlbmVyYXRlUHJvamVjdExpbmsocHJvamVjdCk7XG4gIGNvbnN0IHVzZWRTa2lsbHMgPSBnZW5lcmF0ZVVzZWRTa2lsbHMocHJvamVjdCk7XG4gIGNvbnN0IHByb2plY3RNZWRpYUVsZW1lbnRzID0gZ2VuZXJhdGVQcm9qZWN0TWVkaWFFbGVtZW50cyhwcm9qZWN0KTtcbiAgY29uc3QgbW9yZVByb2plY3RzID0gYXdhaXQgc2hvd01vcmVQcm9qZWN0cyhwcm9qZWN0KTtcblxuICByZXR1cm4gYDxkaXYgaWQ9XCIke3Byb2plY3QuaWR9XCIgY2xhc3M9XCJzaW5nbGUtcHJvamVjdFwiPjxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlLWFuZC1saW5rXCI+PGgyPiR7cHJvamVjdC5wcm9qZWN0TmFtZX08L2gyPiR7cHJvamVjdExpbmt9PC9kaXY+PHNlY3Rpb24gY2xhc3M9XCJza2lsbHMtYW5kLXRvb2xzXCI+PHVsPjxzcGFuPlNraWxscy8gICBUb29sczo8L3NwYW4+JHt1c2VkU2tpbGxzfTwvdWw+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzPVwibWVkaWEtZWxlbWVudHNcIj4ke3Byb2plY3RNZWRpYUVsZW1lbnRzfTwvc2VjdGlvbj4ke21vcmVQcm9qZWN0c308L2Rpdj5gO1xufTtcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0TGluayA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LmxpdmVfc2l0ZSkge1xuICAgIHJldHVybiBgPGEgaHJlZj1cIiR7cHJvamVjdC5saXZlX3NpdGV9XCI+PHNwYW4+TGl2ZS1TZWl0ZSBiZXN1Y2hlbjwvc3Bhbj48aW1nIHNyYz1cIiR7ZXh0ZXJuYWxMaW5rSWNvbn1cIj48L2E+YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGdlbmVyYXRlVXNlZFNraWxscyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LnNraWxscykge1xuICAgIGNvbnN0IHByb2plY3RTa2lsbHMgPSBwcm9qZWN0LnNraWxsc1xuICAgICAgLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJza2lsbC10YWdcIj4ke3NraWxsfTwvbGk+YDtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gcHJvamVjdFNraWxscztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdE1lZGlhRWxlbWVudHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5lbGVtZW50cykge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50cyA9IHByb2plY3QuZWxlbWVudHNcbiAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX0gJHtlbGVtZW50LnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICA8dmlkZW8gY2xhc3M9XCIke2VsZW1lbnQuYWJvdmVfZm9sZCA/ICcnIDogJ21lZGlhIGxhenktbG9hZCd9XCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgPHNvdXJjZSAke1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWJvdmVfZm9sZCA/IGBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cImAgOiBgZGF0YS1zcmM9XCIke2VsZW1lbnQuY29udGVudH1cImBcbiAgICAgICAgICAgICAgfSB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX0gJHtlbGVtZW50LnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiJHtlbGVtZW50LmFib3ZlX2ZvbGQgPyAnJyA6ICdtZWRpYSBsYXp5LWxvYWQnfVwiICR7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYWJvdmVfZm9sZCA/IGBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cImAgOiBgZGF0YS1zcmM9XCIke2VsZW1lbnQuY29udGVudH1cImBcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnY29tbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndHdvLWNvbHVtbic6XG4gICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCB0eXBlIGlzIFwidHdvLWNvbHVtblwiIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBlbGVtZW50J3NcbiAgICAgICAgICAgIC8vIFwiY29udGVudFwiIHByb3BlcnR5IHdoaWNoIGhvbGRzIGFuIGFycmF5IG9mIG1lZGlhIG9iamVjdHMgXCJpbWFnZVwiIG9yIFwidmlkZW9cIlxuICAgICAgICAgICAgY29uc3QgdHdvQ29sdW1uRWxlbWVudHMgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgICAgLm1hcCgobWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfSAke21lZGlhLnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3M9XCJtZWRpYSBsYXp5LWxvYWRcIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIGRhdGEtc3JjPVwiJHttZWRpYS5jb250ZW50fVwiIHR5cGU9XCJ2aWRlby9tcDRcIj5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVkaWEudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZWRpYSBsYXp5LWxvYWRcIiBkYXRhLXNyYz1cIiR7bWVkaWEuY29udGVudH1cIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPHA+VW5zdXBwb3J0ZWQgbWVkaWEgZm9ybWF0LjwvcD5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3MgPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICAke3R3b0NvbHVtbkVsZW1lbnRzfVxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZFNpbmdsZVByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocGF0aCkge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhdGguc3BsaXQoJy8nKVsxXTsgLy8gQXNzdW1pbmcgcGF0aHMgbGlrZSBcIi9wcm9qZWN0TmFtZVwiXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuICAvLyBGaW5kIHRoZSBwcm9qZWN0IG9iamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb2plY3ROYW1lIGluIHRoZSBVUkxcbiAgY29uc3QgcHJvamVjdCA9IGRhdGEucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gY29udmVydFRvVVJMU2F2ZU5hbWUocHJvamVjdC5wcm9qZWN0TmFtZSkgPT09IHByb2plY3ROYW1lXG4gICk7XG5cbiAgaWYgKHByb2plY3QpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgSFRNTENvbnRlbnQgPSBhd2FpdCBzaG93U2luZ2xlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBIVE1MQ29udGVudCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb2plY3QgZGV0YWlsczonLCBlcnJvcik7XG4gICAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT5FcnJvciBMb2FkaW5nIFByb2plY3Q8L2gxPicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwcm9qZWN0IGZvdW5kLCBkaXNwbGF5IGEgZ2VuZXJpYyA0MDQgcGFnZVxuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCAnPGgxPjQwNCBOb3QgRm91bmQ8L2gxPicpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9