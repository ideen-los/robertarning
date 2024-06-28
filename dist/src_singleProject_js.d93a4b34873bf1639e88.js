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

  return `<div id="${project.id}" class="single-project"><div class="project-title-and-link"><h2>${project.projectName}</h2>${projectLink}</div><section class="skills-and-tools"><span>Skills:</span><ul>${usedSkills}</ul></section><section class="media-elements">${projectMediaElements}</section>${moreProjects}</div>`;
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
            ${element.content}
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
  const project = data.projects.find(
    (project) => (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.convertToURLSaveName)(project.projectName) === projectName
  );

  if (project) {
    try {
      const HTMLContent = await showSingleProject(project);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', HTMLContent);
      // Return the project's name
      // Will be set as the document.title
      return project.projectName;
    } catch (error) {
      console.error('Failed to load project details:', error);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', '<h1>Error Loading Project</h1>');
      return '404';
    }
  } else {
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', '<h1>404 Not Found</h1>');
    return '404';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NpbmdsZVByb2plY3RfanMuZDkzYTRiMzQ4NzNiZjE2MzllODguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0EsTUFBTSxzRUFBeUI7QUFDL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsc0VBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q2tDO0FBQzZDOztBQUUvRTtBQUNBLHFCQUFxQiwrQ0FBUTs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxVQUFVLCtCQUErQjs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsc0VBQW9CO0FBQ3ZELCtCQUErQixzRUFBb0I7O0FBRW5ELGdIQUFnSCx1QkFBdUIsZ0VBQWdFLHNCQUFzQixHQUFHLHdCQUF3QixtQkFBbUIsNERBQTRELGtCQUFrQixHQUFHO0FBQzVWLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzRUFBb0I7QUFDeEIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxzRUFBb0I7QUFDeEIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaa0M7QUFDbUM7QUFDZDtBQUNvQjs7QUFFcEU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLCtEQUFnQjs7QUFFN0MscUJBQXFCLFdBQVcsbUVBQW1FLG9CQUFvQixPQUFPLFlBQVksa0VBQWtFLFdBQVcsaURBQWlELHFCQUFxQixZQUFZLGFBQWE7QUFDdFQ7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0IsOENBQThDLG1EQUFnQixDQUFDO0FBQ3hHLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsTUFBTTtBQUM5QyxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLEVBQUUsc0JBQXNCO0FBQ3hFLDRCQUE0Qiw0Q0FBNEM7QUFDeEU7QUFDQSw2Q0FBNkMsZ0JBQWdCLGtCQUFrQixnQkFBZ0I7QUFDL0YsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLEVBQUUsc0JBQXNCO0FBQ3hFLDBCQUEwQiw0Q0FBNEM7QUFDdEUsMkNBQTJDLGdCQUFnQixrQkFBa0IsZ0JBQWdCO0FBQzdGLGFBQWE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0MsY0FBYztBQUNkO0FBQ0E7QUFDQSxrQ0FBa0MsYUFBYTtBQUMvQyxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVksRUFBRSxvQkFBb0I7QUFDMUU7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLHdDQUF3QyxZQUFZLEVBQUUsc0JBQXNCO0FBQzVFLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUEsbUNBQW1DLGFBQWE7QUFDaEQsY0FBYztBQUNkO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVPO0FBQ1AsMENBQTBDO0FBQzFDLHFCQUFxQiwrQ0FBUTtBQUM3QjtBQUNBLGlCQUFpQixzRUFBb0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLDREQUFVO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSw0REFBVTtBQUNkO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9tb3JlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Nlc3Npb25TdG9yYWdlLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zaW5nbGVQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlJztcblxuLyogXG5Mb2FkcyBhIEpTT04gZmlsZSB3aXRoIGFsbCBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgc2F2ZXMgaXRcbnRvIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZSwgc28gdGhlIGRhdGEgaXMgY2FjaGVkIGZvciBmdXJ0aGVyIHVzZS5cbiovXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcbiAgbGV0IGRhdGE7XG5cbiAgLy8gR2V0IGRhdGEgZnJvbSBzZXNzaW9uU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlLi4uJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnTG9hZGVkIHByb2plY3RzIGZyb20gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIGRhdGEgPSBzdG9yZWREYXRhO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBkYXRhIGlzIG5vdCBhdmFpbGFibGUgaW4gc2Vzc2lvblN0b3JhZ2UsIGZldGNoIHRoZSBkYXRhIGZyb20gc2VydmVyXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YS4uLicpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kYXRhL2RhdGEuanNvbicpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyMDAtMjk5IHJhbmdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBTYXZlIGZldGNoZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZVxuICAgIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgY29uc29sZS5sb2coJ1NhdmVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgcHVzaFVSTEFuZENhbGxSb3V0ZXIgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmNvbnN0IGZpbmRQcmV2aW91c0FuZE5leHRQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG5cbiAgdHJ5IHtcbiAgICBpZiAoIWRhdGEgfHwgIXByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgb3IgcHJvamVjdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmRleCA9IE51bWJlcihwcm9qZWN0LmlkKSAtIDE7XG5cbiAgICBjb25zdCBuZXh0UHJvamVjdEluZGV4ID0gKGN1cnJlbnRQcm9qZWN0SW5kZXggKyAxKSAlIGFsbFByb2plY3RzLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0UHJvamVjdCA9IGFsbFByb2plY3RzW25leHRQcm9qZWN0SW5kZXhdO1xuXG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0SW5kZXggPVxuICAgICAgKGN1cnJlbnRQcm9qZWN0SW5kZXggLSAxICsgYWxsUHJvamVjdHMubGVuZ3RoKSAlIGFsbFByb2plY3RzLmxlbmd0aDtcbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3QgPSBhbGxQcm9qZWN0c1twcmV2aW91c1Byb2plY3RJbmRleF07XG5cbiAgICByZXR1cm4geyBwcmV2aW91c1Byb2plY3QsIG5leHRQcm9qZWN0IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YScsIGVycm9yKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TW9yZVByb2plY3RzID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgeyBwcmV2aW91c1Byb2plY3QsIG5leHRQcm9qZWN0IH0gPSBhd2FpdCBmaW5kUHJldmlvdXNBbmROZXh0UHJvamVjdChwcm9qZWN0KTtcblxuICB0cnkge1xuICAgIGlmICghcHJldmlvdXNQcm9qZWN0IHx8ICFuZXh0UHJvamVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YSBvbiBwcmV2aW91cyBhbmQgbmV4dCBwcm9qZWN0IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdFVSTFBhdGggPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcmV2aW91c1Byb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0VVJMUGF0aCA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKG5leHRQcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJtb3JlLXByb2plY3RzXCI+PGgyPk1laHIgUHJvamVrdGU8L2gyPjxkaXYgY2xhc3M9XCJtb3JlLXByb2plY3RzLXdyYXBwZXJcIj48YSBocmVmPVwiLyR7cHJldmlvdXNQcm9qZWN0VVJMUGF0aH1cIiBjbGFzcz1cInByZXZpb3VzLXByb2plY3RcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ByZXZpb3VzUHJvamVjdC5pbWFnZX0nKTtcIj48L2Rpdj48L2E+PGEgaHJlZj1cIi8ke25leHRQcm9qZWN0VVJMUGF0aH1cIiBjbGFzcz1cIm5leHQtcHJvamVjdFwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7bmV4dFByb2plY3QuaW1hZ2V9Jyk7XCI+PC9kaXY+PC9hPjwvZGl2Pjwvc2VjdGlvbj5gO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGEnLCBlcnJvcik7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTW9yZVByb2plY3RzTGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByZXZpb3VzUHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMtcHJvamVjdCcpO1xuICBjb25zdCBuZXh0UHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1wcm9qZWN0Jyk7XG5cbiAgY29uc3QgcHJldmlvdXNQcm9qZWN0VVJMUGF0aCA9IHByZXZpb3VzUHJvamVjdExpbmsuaHJlZi5zcGxpdCgnLycpWzNdO1xuICBjb25zdCBuZXh0UHJvamVjdFVSTFBhdGggPSBuZXh0UHJvamVjdExpbmsuaHJlZi5zcGxpdCgnLycpWzNdO1xuXG4gIHByZXZpb3VzUHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcihwcmV2aW91c1Byb2plY3RVUkxQYXRoKTtcbiAgfSk7XG5cbiAgbmV4dFByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIobmV4dFByb2plY3RVUkxQYXRoKTtcbiAgfSk7XG59O1xuIiwiLypcblRlc3RzIGlmIHNlc3Npb25TdG9yYWdlIGlzIGF2YWlsYWJsZSBpbiB0aGUgdXNlcnMgYnJvd3NlclxuKi9cbmV4cG9ydCBjb25zdCBpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRlc3QgPSAndGVzdC1zdG9yYWdlJztcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpO1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGVzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgc2V0Q29udGVudCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcbmltcG9ydCBleHRlcm5hbExpbmtJY29uIGZyb20gJy4vaW1nL2V4dGVybmFsLWxpbmsuc3ZnJztcbmltcG9ydCB7IGhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzLCBzaG93TW9yZVByb2plY3RzIH0gZnJvbSAnLi9tb3JlUHJvamVjdHMnO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NpbmdsZVByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvamVjdCBkYXRhIGF2YWlsYWJsZS4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBIVE1MIENvZGUgZm9yIHRoZSBzaW5nbGUgcHJvamVjdCBwYWdlXG4gIGNvbnN0IHByb2plY3RMaW5rID0gZ2VuZXJhdGVQcm9qZWN0TGluayhwcm9qZWN0KTtcbiAgY29uc3QgdXNlZFNraWxscyA9IGdlbmVyYXRlVXNlZFNraWxscyhwcm9qZWN0KTtcbiAgY29uc3QgcHJvamVjdE1lZGlhRWxlbWVudHMgPSBnZW5lcmF0ZVByb2plY3RNZWRpYUVsZW1lbnRzKHByb2plY3QpO1xuICBjb25zdCBtb3JlUHJvamVjdHMgPSBhd2FpdCBzaG93TW9yZVByb2plY3RzKHByb2plY3QpO1xuXG4gIHJldHVybiBgPGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0XCI+PGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGUtYW5kLWxpbmtcIj48aDI+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDI+JHtwcm9qZWN0TGlua308L2Rpdj48c2VjdGlvbiBjbGFzcz1cInNraWxscy1hbmQtdG9vbHNcIj48c3Bhbj5Ta2lsbHM6PC9zcGFuPjx1bD4ke3VzZWRTa2lsbHN9PC91bD48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJtZWRpYS1lbGVtZW50c1wiPiR7cHJvamVjdE1lZGlhRWxlbWVudHN9PC9zZWN0aW9uPiR7bW9yZVByb2plY3RzfTwvZGl2PmA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RMaW5rID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QubGl2ZV9zaXRlKSB7XG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtwcm9qZWN0LmxpdmVfc2l0ZX1cIj48c3Bhbj5MaXZlLVNlaXRlIGJlc3VjaGVuPC9zcGFuPjxpbWcgc3JjPVwiJHtleHRlcm5hbExpbmtJY29ufVwiPjwvYT5gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2VuZXJhdGVVc2VkU2tpbGxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3Quc2tpbGxzKSB7XG4gICAgY29uc3QgcHJvamVjdFNraWxscyA9IHByb2plY3Quc2tpbGxzXG4gICAgICAubWFwKChza2lsbCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz1cInNraWxsLXRhZ1wiPiR7c2tpbGx9PC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBwcm9qZWN0U2tpbGxzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0TWVkaWFFbGVtZW50cyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LmVsZW1lbnRzKSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gcHJvamVjdC5lbGVtZW50c1xuICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgIDx2aWRlbyBjbGFzcz1cIiR7ZWxlbWVudC5hYm92ZV9mb2xkID8gJycgOiAnbWVkaWEgbGF6eS1sb2FkJ31cIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICA8c291cmNlICR7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hYm92ZV9mb2xkID8gYHNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYCA6IGBkYXRhLXNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYFxuICAgICAgICAgICAgICB9IHR5cGU9XCJ2aWRlby9tcDRcIj5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCIke2VsZW1lbnQuYWJvdmVfZm9sZCA/ICcnIDogJ21lZGlhIGxhenktbG9hZCd9XCIgJHtcbiAgICAgICAgICAgICAgZWxlbWVudC5hYm92ZV9mb2xkID8gYHNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYCA6IGBkYXRhLXNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYFxuICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgJHtlbGVtZW50LmNvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ2NvbW1lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICA8cD4ke2VsZW1lbnQuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ3R3by1jb2x1bW4nOlxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgdHlwZSBpcyBcInR3by1jb2x1bW5cIiB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZWxlbWVudCdzXG4gICAgICAgICAgICAvLyBcImNvbnRlbnRcIiBwcm9wZXJ0eSB3aGljaCBob2xkcyBhbiBhcnJheSBvZiBtZWRpYSBvYmplY3RzIFwiaW1hZ2VcIiBvciBcInZpZGVvXCJcbiAgICAgICAgICAgIGNvbnN0IHR3b0NvbHVtbkVsZW1lbnRzID0gZWxlbWVudC5jb250ZW50XG4gICAgICAgICAgICAgIC5tYXAoKG1lZGlhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lZGlhLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7bWVkaWEudHlwZX0gJHttZWRpYS52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzPVwibWVkaWEgbGF6eS1sb2FkXCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBkYXRhLXNyYz1cIiR7bWVkaWEuY29udGVudH1cIiB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1lZGlhLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7bWVkaWEudHlwZX0gJHtlbGVtZW50LnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWVkaWEgbGF6eS1sb2FkXCIgZGF0YS1zcmM9XCIke21lZGlhLmNvbnRlbnR9XCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxwPlVuc3VwcG9ydGVkIG1lZGlhIGZvcm1hdC48L3A+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzID1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgJHt0d29Db2x1bW5FbGVtZW50c31cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnRzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRTaW5nbGVQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHBhdGgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwYXRoLnNwbGl0KCcvJylbMV07IC8vIEFzc3VtaW5nIHBhdGhzIGxpa2UgXCIvcHJvamVjdE5hbWVcIlxuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcbiAgY29uc3QgcHJvamVjdCA9IGRhdGEucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gY29udmVydFRvVVJMU2F2ZU5hbWUocHJvamVjdC5wcm9qZWN0TmFtZSkgPT09IHByb2plY3ROYW1lXG4gICk7XG5cbiAgaWYgKHByb2plY3QpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgSFRNTENvbnRlbnQgPSBhd2FpdCBzaG93U2luZ2xlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBIVE1MQ29udGVudCk7XG4gICAgICAvLyBSZXR1cm4gdGhlIHByb2plY3QncyBuYW1lXG4gICAgICAvLyBXaWxsIGJlIHNldCBhcyB0aGUgZG9jdW1lbnQudGl0bGVcbiAgICAgIHJldHVybiBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBwcm9qZWN0IGRldGFpbHM6JywgZXJyb3IpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsICc8aDE+RXJyb3IgTG9hZGluZyBQcm9qZWN0PC9oMT4nKTtcbiAgICAgIHJldHVybiAnNDA0JztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0Q29udGVudCgnY29udGVudCcsICc8aDE+NDA0IE5vdCBGb3VuZDwvaDE+Jyk7XG4gICAgcmV0dXJuICc0MDQnO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9