/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleAnimationOnPageTransition: () => (/* binding */ handleAnimationOnPageTransition)
/* harmony export */ });
/* 
Adds animations to a page's title, the project name, the
list of skills used and the wrapper for a project's elements.
*/
const handleAnimationOnPageTransition = function () {
  const loadingAnimation = document.getElementById('loading-wrapper');
  const siteTitle = document.querySelector('h1');
  const allMediaElements = document.querySelector('.single-project .media-elements');
  const projectTitleAndLink = document.querySelector('.single-project .project-title-and-link');
  const projectSkillsAndTools = document.querySelector('.single-project .skills-and-tools');
  const projectSkillsAndToolsLabel = document.querySelector(
    '.single-project .skills-and-tools span'
  );
  const projectSkillsAndToolsList = document.querySelector('.single-project .skills-and-tools ul');
  const projectFirstMediaElement = document.querySelector(
    '.single-project .media-elements > div > *'
  );

  // Always execute animation on site titles
  if (siteTitle) {
    siteTitle.classList.add('transition-in');
    requestAnimationFrame(() => {
      siteTitle.classList.add('transition-visible');
    });
  }

  const showLoadingAnimation = function () {
    if (loadingAnimation) {
      if (!loadingAnimation.classList.contains('visible')) {
        loadingAnimation.classList.add('visible');
      }
    }
  };

  // Add the class for showing project page initial animations
  // only if the project has at least 1 media element
  if (allMediaElements && projectFirstMediaElement) {
    const prepareTransitionTriggers = function () {
      if (projectTitleAndLink) {
        projectTitleAndLink.classList.add('transition-in');
      }
      if (projectSkillsAndTools) {
        projectSkillsAndTools.classList.add('transition-in-opacity');
      }
      if (projectSkillsAndToolsLabel) {
        projectSkillsAndToolsLabel.classList.add('transition-in');
      }
      if (projectSkillsAndToolsList) {
        projectSkillsAndToolsList.classList.add('transition-in');
      }
      projectFirstMediaElement.classList.add('transition-in');
    };

    prepareTransitionTriggers();
    const animationTimeout = setTimeout(showLoadingAnimation, 300);

    const addTransitionTriggers = function () {
      clearTimeout(animationTimeout);

      if (loadingAnimation) {
        if (loadingAnimation.classList.contains('visible')) {
          loadingAnimation.classList.remove('visible');
        }
      }
      if (projectTitleAndLink) {
        requestAnimationFrame(() => {
          projectTitleAndLink.classList.add('transition-visible');
        });
      }
      if (projectSkillsAndTools) {
        requestAnimationFrame(() => {
          projectSkillsAndTools.classList.add('transition-visible');
        });
      }
      if (projectSkillsAndToolsLabel) {
        requestAnimationFrame(() => {
          projectSkillsAndToolsLabel.classList.add('transition-visible-delayed');
        });
      }
      if (projectSkillsAndToolsList) {
        requestAnimationFrame(() => {
          projectSkillsAndToolsList.classList.add('transition-visible-delayed');
        });
      }
      requestAnimationFrame(() => {
        projectFirstMediaElement.classList.add('transition-visible-delayed-more');
      });
    };

    // Waits for the first element to load, which is either image, video or iFrame
    // before attaching the animation triggers
    if (projectFirstMediaElement.tagName === 'VIDEO') {
      projectFirstMediaElement.addEventListener('canplay', function () {
        addTransitionTriggers();
        console.log('Video!');
      });
    } else if (projectFirstMediaElement.tagName === 'IMG') {
      projectFirstMediaElement.addEventListener('load', function () {
        requestAnimationFrame(() => {
          addTransitionTriggers();
          console.log('Image!');
        });
      });
    } else if (projectFirstMediaElement.tagName === 'IFRAME') {
      projectFirstMediaElement.onload = () => {
        requestAnimationFrame(() => {
          addTransitionTriggers();
          console.log('iframe!');
        });
      };
    }
  }
};


/***/ }),

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToURLSaveName: () => (/* binding */ convertToURLSaveName),
/* harmony export */   pushURLAndCallRouter: () => (/* binding */ pushURLAndCallRouter),
/* harmony export */   setContent: () => (/* binding */ setContent),
/* harmony export */   setupPage: () => (/* binding */ setupPage)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animations */ "./src/animations.js");
/* harmony import */ var _lazyLoading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazyLoading */ "./src/lazyLoading.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./src/router.js");




/* 
Gets the element by its id passed as the functions 1st parameter and
sets its innerHTML to whatever content is passed as the 2nd parameter
*/
const setContent = function (id, content) {
  const HTMLelement = document.getElementById(id);

  return (HTMLelement.innerHTML = content);
};

/* 
Updates the browser's history stack by adding a new entry. This sets the new URL path 
without reloading the page. Then calls the router() function to handle the URL change.
*/
const pushURLAndCallRouter = function (URLpath) {
  // Update the URL
  history.pushState({}, '', `/${URLpath}`);
  // Call the router
  (0,_router__WEBPACK_IMPORTED_MODULE_2__.router)();
};

/* 
1. Adds lazy loading to a page
2. Adds animations to the project title or site title
3. Sets the scroll position to the top of the page
*/
const setupPage = function () {
  (0,_lazyLoading__WEBPACK_IMPORTED_MODULE_1__.initializeLazyLoading)();
  requestAnimationFrame(() => {
    (0,_animations__WEBPACK_IMPORTED_MODULE_0__.handleAnimationOnPageTransition)();
  });
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

/*
Encodes the "projectName" value to safely include it in the URL path.
Replace spaces with hyphens, then encode URI components, and finally convert to lowercase
*/
const convertToURLSaveName = function (name) {
  return encodeURIComponent(
    name
      .replace(/\s+/g, '-')
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/ß/g, 'ss')
  ).toLowerCase();
};


/***/ }),

/***/ "./src/lazyLoading.js":
/*!****************************!*\
  !*** ./src/lazyLoading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeLazyLoading: () => (/* binding */ initializeLazyLoading)
/* harmony export */ });
/* 
Adds an InteractionObserver to the viewport that sets the src of a video
or image to the value of the element's data-src, when it comes into view.
This way images and videos are only loaded, when they are needed.
*/
const initializeLazyLoading = function () {
  const lazyMedia = document.querySelectorAll('.lazy-load');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const media = entry.target;

        if (media.tagName === 'IMG') {
          media.src = media.dataset.src;
          media.onload = () => {
            media.classList.add('media-loaded');
          };
        } else if (media.tagName === 'VIDEO') {
          Array.from(media.children).forEach((source) => {
            if (source.tagName === 'SOURCE') source.src = source.dataset.src;
          });
          media.load();
          media.onloadeddata = () => {
            media.classList.add('media-loaded');
          };
        }

        observer.unobserve(media); // Stop observing once loaded
      }
    });
  });

  lazyMedia.forEach((media) => observer.observe(media));
};


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleMenuLinks: () => (/* binding */ handleMenuLinks)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


const handleMenuLinks = function () {
  const header = document.querySelector('header');

  // Base64 encoded email "hallo@robertarning.de"
  const encodedEmail = 'aGFsbG9Acm9iZXJ0YXJuaW5nLmRl';
  const mailLink = header.querySelector('a#mail');
  mailLink.setAttribute('href', 'mailto:'.concat(atob(encodedEmail)));

  header.addEventListener('click', (e) => {
    if (e.target.closest('a#home')) {
      e.preventDefault();
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.pushURLAndCallRouter)('');
    } else if (e.target.closest('a#logo')) {
      e.preventDefault();
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.pushURLAndCallRouter)('');
    } else if (e.target.closest('a#profile')) {
      e.preventDefault();
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.pushURLAndCallRouter)('profil');
    }
  });
};


/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   router: () => (/* binding */ router),
/* harmony export */   setRoute: () => (/* binding */ setRoute)
/* harmony export */ });
/* 
An object that contains static paths, as well as a handler and a title associated with it
*/
const routes = {};

/* 
Creates an object with the properties "handler" and "title" and
assigns it as value to the key "path" in the { routes } object
*/
const setRoute = function (path, handlerFunction, title) {
  routes[path] = { handler: handlerFunction, title: title };
};

/* 
1. Checks whether the current path has been registered as a key in the { routes } object.
If it is, then it calls the handler function associated with the registered path and sets the title.

2. Is the current path is not a key in { routes }, it tries to call a function that loads a single
project based on the path name. If no project with that name is found, the function returns '404'.
*/
const router = function () {
  const urlPath = window.location.pathname || '/';

  if (routes[urlPath] && routes[urlPath].handler) {
    // The path is in the { routes } object and has a handler
    routes[urlPath]
      .handler()
      .then((handlerFunction) => {
        // Execute the handler associated with the path
        handlerFunction();
        // Set the document title from the { route }'s title property
        document.title = routes[urlPath].title;
        // Load the page
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./helperFunctions.js */ "./src/helperFunctions.js")).then((helperModule) => {
          helperModule.setupPage();
        });
      })
      .catch((error) => {
        console.error('Failed to load route handler', error);
      });
  } else {
    // Path is not registered or has no handler
    // Check whether the path corresponds to a project
    Promise.all(/*! import() */[__webpack_require__.e("node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getUrl_js-no-2ee261"), __webpack_require__.e("src_singleProject_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./singleProject.js */ "./src/singleProject.js")).then((module) => {
      module
        .loadSingleProject(urlPath)
        .then((projectName) => {
          // The function returns either the project's name or '404'
          if (projectName !== '404') {
            // If a project is found the functions returns the project's name
            document.title = `Robert Arning – ${projectName}`;
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./helperFunctions.js */ "./src/helperFunctions.js")).then((helperModule) => {
              helperModule.setupPage();
            });
            __webpack_require__.e(/*! import() */ "src_moreProjects_js").then(__webpack_require__.bind(__webpack_require__, /*! ./moreProjects.js */ "./src/moreProjects.js")).then((moreProjectsModule) => {
              moreProjectsModule.handleMoreProjectsLinks();
              module.handleAllProjectsLink();
            });
          } else {
            // If no project is found the function returns '404'
            document.title = 'Robert Arning – Page not found';
          }
        })
        .catch((error) => {
          console.error('Failed to load dynamic content or fallback', error);
        });
    });
  }
};

// Handle browser navigation events
window.addEventListener('popstate', () => {
  router();
  s;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getUrl_js-no-2ee261":"fd6d3362e829cc0d4446","src_projectsOverview_js":"e827a1aa6e55b27eb6c5","src_profile_js":"0a5e959568081201ebce","src_singleProject_js":"07d7082ad8b19d1b461c","src_moreProjects_js":"ab5f88c47d6d2cc0fa5b"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "robertarning:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _lazyLoading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazyLoading.js */ "./src/lazyLoading.js");




/* 
Register static routes and load the corresponding route
handler functions asynchronously with the import statement.
Also set the document title with the 3rd parameter.
*/
(0,_router__WEBPACK_IMPORTED_MODULE_0__.setRoute)(
  '/',
  () => Promise.all(/*! import() */[__webpack_require__.e("node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getUrl_js-no-2ee261"), __webpack_require__.e("src_projectsOverview_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./projectsOverview.js */ "./src/projectsOverview.js")).then((module) => module.displayProjectOverview),
  'Robert Arning – UI/UX Designer'
); // Homepage
(0,_router__WEBPACK_IMPORTED_MODULE_0__.setRoute)(
  '/profil',
  () => Promise.all(/*! import() */[__webpack_require__.e("node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getUrl_js-no-2ee261"), __webpack_require__.e("src_profile_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile.js */ "./src/profile.js")).then((module) => module.displayProfile),
  'Robert Arning – Profil'
); // Profile page

// Call the router() and initialize the navigation
document.addEventListener('DOMContentLoaded', function () {
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.router)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.handleMenuLinks)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVqQztXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0wsZUFBZTtXQUNmO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NyRkE7Ozs7Ozs7Ozs7OztBQ0E0QztBQUNIO0FBQ2dCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQVE7QUFDUjtBQUNBLFFBQVEsMlRBQStCO0FBQ3ZDO0FBQ0EsR0FBRztBQUNILGlEQUFRO0FBQ1I7QUFDQSxRQUFRLGdTQUFzQjtBQUM5QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEVBQUUsK0NBQU07QUFDUixFQUFFLHNEQUFlO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9sYXp5TG9hZGluZy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbkFkZHMgYW5pbWF0aW9ucyB0byBhIHBhZ2UncyB0aXRsZSwgdGhlIHByb2plY3QgbmFtZSwgdGhlXG5saXN0IG9mIHNraWxscyB1c2VkIGFuZCB0aGUgd3JhcHBlciBmb3IgYSBwcm9qZWN0J3MgZWxlbWVudHMuXG4qL1xuZXhwb3J0IGNvbnN0IGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvYWRpbmdBbmltYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy13cmFwcGVyJyk7XG4gIGNvbnN0IHNpdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IGFsbE1lZGlhRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUFuZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzJyk7XG4gIGNvbnN0IHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHNwYW4nXG4gICk7XG4gIGNvbnN0IHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwnKTtcbiAgY29uc3QgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IGRpdiA+IConXG4gICk7XG5cbiAgLy8gQWx3YXlzIGV4ZWN1dGUgYW5pbWF0aW9uIG9uIHNpdGUgdGl0bGVzXG4gIGlmIChzaXRlVGl0bGUpIHtcbiAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzaG93TG9hZGluZ0FuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobG9hZGluZ0FuaW1hdGlvbikge1xuICAgICAgaWYgKCFsb2FkaW5nQW5pbWF0aW9uLmNsYXNzTGlzdC5jb250YWlucygndmlzaWJsZScpKSB7XG4gICAgICAgIGxvYWRpbmdBbmltYXRpb24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBBZGQgdGhlIGNsYXNzIGZvciBzaG93aW5nIHByb2plY3QgcGFnZSBpbml0aWFsIGFuaW1hdGlvbnNcbiAgLy8gb25seSBpZiB0aGUgcHJvamVjdCBoYXMgYXQgbGVhc3QgMSBtZWRpYSBlbGVtZW50XG4gIGlmIChhbGxNZWRpYUVsZW1lbnRzICYmIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudCkge1xuICAgIGNvbnN0IHByZXBhcmVUcmFuc2l0aW9uVHJpZ2dlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocHJvamVjdFRpdGxlQW5kTGluaykge1xuICAgICAgICBwcm9qZWN0VGl0bGVBbmRMaW5rLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHMpIHtcbiAgICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4tb3BhY2l0eScpO1xuICAgICAgfVxuICAgICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsKSB7XG4gICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KSB7XG4gICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgICAgfVxuICAgICAgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICB9O1xuXG4gICAgcHJlcGFyZVRyYW5zaXRpb25UcmlnZ2VycygpO1xuICAgIGNvbnN0IGFuaW1hdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KHNob3dMb2FkaW5nQW5pbWF0aW9uLCAzMDApO1xuXG4gICAgY29uc3QgYWRkVHJhbnNpdGlvblRyaWdnZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KGFuaW1hdGlvblRpbWVvdXQpO1xuXG4gICAgICBpZiAobG9hZGluZ0FuaW1hdGlvbikge1xuICAgICAgICBpZiAobG9hZGluZ0FuaW1hdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgIGxvYWRpbmdBbmltYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvamVjdFRpdGxlQW5kTGluaykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RUaXRsZUFuZExpbmsuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29scy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gV2FpdHMgZm9yIHRoZSBmaXJzdCBlbGVtZW50IHRvIGxvYWQsIHdoaWNoIGlzIGVpdGhlciBpbWFnZSwgdmlkZW8gb3IgaUZyYW1lXG4gICAgLy8gYmVmb3JlIGF0dGFjaGluZyB0aGUgYW5pbWF0aW9uIHRyaWdnZXJzXG4gICAgaWYgKHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWRlbyEnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uVHJpZ2dlcnMoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UhJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lGUkFNRScpIHtcbiAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lmcmFtZSEnKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcbiIsImltcG9ydCB7IGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgaW5pdGlhbGl6ZUxhenlMb2FkaW5nIH0gZnJvbSAnLi9sYXp5TG9hZGluZyc7XG5pbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbi8qIFxuR2V0cyB0aGUgZWxlbWVudCBieSBpdHMgaWQgcGFzc2VkIGFzIHRoZSBmdW5jdGlvbnMgMXN0IHBhcmFtZXRlciBhbmRcbnNldHMgaXRzIGlubmVySFRNTCB0byB3aGF0ZXZlciBjb250ZW50IGlzIHBhc3NlZCBhcyB0aGUgMm5kIHBhcmFtZXRlclxuKi9cbmV4cG9ydCBjb25zdCBzZXRDb250ZW50ID0gZnVuY3Rpb24gKGlkLCBjb250ZW50KSB7XG4gIGNvbnN0IEhUTUxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHJldHVybiAoSFRNTGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCk7XG59O1xuXG4vKiBcblVwZGF0ZXMgdGhlIGJyb3dzZXIncyBoaXN0b3J5IHN0YWNrIGJ5IGFkZGluZyBhIG5ldyBlbnRyeS4gVGhpcyBzZXRzIHRoZSBuZXcgVVJMIHBhdGggXG53aXRob3V0IHJlbG9hZGluZyB0aGUgcGFnZS4gVGhlbiBjYWxscyB0aGUgcm91dGVyKCkgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBVUkwgY2hhbmdlLlxuKi9cbmV4cG9ydCBjb25zdCBwdXNoVVJMQW5kQ2FsbFJvdXRlciA9IGZ1bmN0aW9uIChVUkxwYXRoKSB7XG4gIC8vIFVwZGF0ZSB0aGUgVVJMXG4gIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgYC8ke1VSTHBhdGh9YCk7XG4gIC8vIENhbGwgdGhlIHJvdXRlclxuICByb3V0ZXIoKTtcbn07XG5cbi8qIFxuMS4gQWRkcyBsYXp5IGxvYWRpbmcgdG8gYSBwYWdlXG4yLiBBZGRzIGFuaW1hdGlvbnMgdG8gdGhlIHByb2plY3QgdGl0bGUgb3Igc2l0ZSB0aXRsZVxuMy4gU2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiovXG5leHBvcnQgY29uc3Qgc2V0dXBQYWdlID0gZnVuY3Rpb24gKCkge1xuICBpbml0aWFsaXplTGF6eUxvYWRpbmcoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBoYW5kbGVBbmltYXRpb25PblBhZ2VUcmFuc2l0aW9uKCk7XG4gIH0pO1xuICAvLyBTZXQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIGJyb3dzZXIgd2luZG93XG4gIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG59O1xuXG4vKlxuRW5jb2RlcyB0aGUgXCJwcm9qZWN0TmFtZVwiIHZhbHVlIHRvIHNhZmVseSBpbmNsdWRlIGl0IGluIHRoZSBVUkwgcGF0aC5cblJlcGxhY2Ugc3BhY2VzIHdpdGggaHlwaGVucywgdGhlbiBlbmNvZGUgVVJJIGNvbXBvbmVudHMsIGFuZCBmaW5hbGx5IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4qL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1VSTFNhdmVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChcbiAgICBuYW1lXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4gICAgICAucmVwbGFjZSgvw6QvZywgJ2FlJylcbiAgICAgIC5yZXBsYWNlKC/Dti9nLCAnb2UnKVxuICAgICAgLnJlcGxhY2UoL8O8L2csICd1ZScpXG4gICAgICAucmVwbGFjZSgvw58vZywgJ3NzJylcbiAgKS50b0xvd2VyQ2FzZSgpO1xufTtcbiIsIi8qIFxuQWRkcyBhbiBJbnRlcmFjdGlvbk9ic2VydmVyIHRvIHRoZSB2aWV3cG9ydCB0aGF0IHNldHMgdGhlIHNyYyBvZiBhIHZpZGVvXG5vciBpbWFnZSB0byB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQncyBkYXRhLXNyYywgd2hlbiBpdCBjb21lcyBpbnRvIHZpZXcuXG5UaGlzIHdheSBpbWFnZXMgYW5kIHZpZGVvcyBhcmUgb25seSBsb2FkZWQsIHdoZW4gdGhleSBhcmUgbmVlZGVkLlxuKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTGF6eUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxhenlNZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5LWxvYWQnKTtcblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBjb25zdCBtZWRpYSA9IGVudHJ5LnRhcmdldDtcblxuICAgICAgICBpZiAobWVkaWEudGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgICBtZWRpYS5zcmMgPSBtZWRpYS5kYXRhc2V0LnNyYztcbiAgICAgICAgICBtZWRpYS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYS5jbGFzc0xpc3QuYWRkKCdtZWRpYS1sb2FkZWQnKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhLnRhZ05hbWUgPT09ICdWSURFTycpIHtcbiAgICAgICAgICBBcnJheS5mcm9tKG1lZGlhLmNoaWxkcmVuKS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UudGFnTmFtZSA9PT0gJ1NPVVJDRScpIHNvdXJjZS5zcmMgPSBzb3VyY2UuZGF0YXNldC5zcmM7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWVkaWEubG9hZCgpO1xuICAgICAgICAgIG1lZGlhLm9ubG9hZGVkZGF0YSA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLmNsYXNzTGlzdC5hZGQoJ21lZGlhLWxvYWRlZCcpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUobWVkaWEpOyAvLyBTdG9wIG9ic2VydmluZyBvbmNlIGxvYWRlZFxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBsYXp5TWVkaWEuZm9yRWFjaCgobWVkaWEpID0+IG9ic2VydmVyLm9ic2VydmUobWVkaWEpKTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoVVJMQW5kQ2FsbFJvdXRlciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU1lbnVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbiAgLy8gQmFzZTY0IGVuY29kZWQgZW1haWwgXCJoYWxsb0Byb2JlcnRhcm5pbmcuZGVcIlxuICBjb25zdCBlbmNvZGVkRW1haWwgPSAnYUdGc2JHOUFjbTlpWlhKMFlYSnVhVzVuTG1SbCc7XG4gIGNvbnN0IG1haWxMaW5rID0gaGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2EjbWFpbCcpO1xuICBtYWlsTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnbWFpbHRvOicuY29uY2F0KGF0b2IoZW5jb2RlZEVtYWlsKSkpO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjaG9tZScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcignJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI2xvZ28nKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJycpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNwcm9maWxlJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCdwcm9maWwnKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qIFxuQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgc3RhdGljIHBhdGhzLCBhcyB3ZWxsIGFzIGEgaGFuZGxlciBhbmQgYSB0aXRsZSBhc3NvY2lhdGVkIHdpdGggaXRcbiovXG5jb25zdCByb3V0ZXMgPSB7fTtcblxuLyogXG5DcmVhdGVzIGFuIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIFwiaGFuZGxlclwiIGFuZCBcInRpdGxlXCIgYW5kXG5hc3NpZ25zIGl0IGFzIHZhbHVlIHRvIHRoZSBrZXkgXCJwYXRoXCIgaW4gdGhlIHsgcm91dGVzIH0gb2JqZWN0XG4qL1xuZXhwb3J0IGNvbnN0IHNldFJvdXRlID0gZnVuY3Rpb24gKHBhdGgsIGhhbmRsZXJGdW5jdGlvbiwgdGl0bGUpIHtcbiAgcm91dGVzW3BhdGhdID0geyBoYW5kbGVyOiBoYW5kbGVyRnVuY3Rpb24sIHRpdGxlOiB0aXRsZSB9O1xufTtcblxuLyogXG4xLiBDaGVja3Mgd2hldGhlciB0aGUgY3VycmVudCBwYXRoIGhhcyBiZWVuIHJlZ2lzdGVyZWQgYXMgYSBrZXkgaW4gdGhlIHsgcm91dGVzIH0gb2JqZWN0LlxuSWYgaXQgaXMsIHRoZW4gaXQgY2FsbHMgdGhlIGhhbmRsZXIgZnVuY3Rpb24gYXNzb2NpYXRlZCB3aXRoIHRoZSByZWdpc3RlcmVkIHBhdGggYW5kIHNldHMgdGhlIHRpdGxlLlxuXG4yLiBJcyB0aGUgY3VycmVudCBwYXRoIGlzIG5vdCBhIGtleSBpbiB7IHJvdXRlcyB9LCBpdCB0cmllcyB0byBjYWxsIGEgZnVuY3Rpb24gdGhhdCBsb2FkcyBhIHNpbmdsZVxucHJvamVjdCBiYXNlZCBvbiB0aGUgcGF0aCBuYW1lLiBJZiBubyBwcm9qZWN0IHdpdGggdGhhdCBuYW1lIGlzIGZvdW5kLCB0aGUgZnVuY3Rpb24gcmV0dXJucyAnNDA0Jy5cbiovXG5leHBvcnQgY29uc3Qgcm91dGVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB1cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcblxuICBpZiAocm91dGVzW3VybFBhdGhdICYmIHJvdXRlc1t1cmxQYXRoXS5oYW5kbGVyKSB7XG4gICAgLy8gVGhlIHBhdGggaXMgaW4gdGhlIHsgcm91dGVzIH0gb2JqZWN0IGFuZCBoYXMgYSBoYW5kbGVyXG4gICAgcm91dGVzW3VybFBhdGhdXG4gICAgICAuaGFuZGxlcigpXG4gICAgICAudGhlbigoaGFuZGxlckZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGhhbmRsZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXRoXG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICAgICAgICAvLyBTZXQgdGhlIGRvY3VtZW50IHRpdGxlIGZyb20gdGhlIHsgcm91dGUgfSdzIHRpdGxlIHByb3BlcnR5XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcm91dGVzW3VybFBhdGhdLnRpdGxlO1xuICAgICAgICAvLyBMb2FkIHRoZSBwYWdlXG4gICAgICAgIGltcG9ydCgnLi9oZWxwZXJGdW5jdGlvbnMuanMnKS50aGVuKChoZWxwZXJNb2R1bGUpID0+IHtcbiAgICAgICAgICBoZWxwZXJNb2R1bGUuc2V0dXBQYWdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgcm91dGUgaGFuZGxlcicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIFBhdGggaXMgbm90IHJlZ2lzdGVyZWQgb3IgaGFzIG5vIGhhbmRsZXJcbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBwYXRoIGNvcnJlc3BvbmRzIHRvIGEgcHJvamVjdFxuICAgIGltcG9ydCgnLi9zaW5nbGVQcm9qZWN0LmpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBtb2R1bGVcbiAgICAgICAgLmxvYWRTaW5nbGVQcm9qZWN0KHVybFBhdGgpXG4gICAgICAgIC50aGVuKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAgIC8vIFRoZSBmdW5jdGlvbiByZXR1cm5zIGVpdGhlciB0aGUgcHJvamVjdCdzIG5hbWUgb3IgJzQwNCdcbiAgICAgICAgICBpZiAocHJvamVjdE5hbWUgIT09ICc0MDQnKSB7XG4gICAgICAgICAgICAvLyBJZiBhIHByb2plY3QgaXMgZm91bmQgdGhlIGZ1bmN0aW9ucyByZXR1cm5zIHRoZSBwcm9qZWN0J3MgbmFtZVxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBgUm9iZXJ0IEFybmluZyDigJMgJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgICAgICAgaW1wb3J0KCcuL2hlbHBlckZ1bmN0aW9ucy5qcycpLnRoZW4oKGhlbHBlck1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICBoZWxwZXJNb2R1bGUuc2V0dXBQYWdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGltcG9ydCgnLi9tb3JlUHJvamVjdHMuanMnKS50aGVuKChtb3JlUHJvamVjdHNNb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgbW9yZVByb2plY3RzTW9kdWxlLmhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzKCk7XG4gICAgICAgICAgICAgIG1vZHVsZS5oYW5kbGVBbGxQcm9qZWN0c0xpbmsoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJZiBubyBwcm9qZWN0IGlzIGZvdW5kIHRoZSBmdW5jdGlvbiByZXR1cm5zICc0MDQnXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9ICdSb2JlcnQgQXJuaW5nIOKAkyBQYWdlIG5vdCBmb3VuZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZHluYW1pYyBjb250ZW50IG9yIGZhbGxiYWNrJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gSGFuZGxlIGJyb3dzZXIgbmF2aWdhdGlvbiBldmVudHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsICgpID0+IHtcbiAgcm91dGVyKCk7XG4gIHM7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVcmxfanMtbm8tMmVlMjYxXCI6XCJmZDZkMzM2MmU4MjljYzBkNDQ0NlwiLFwic3JjX3Byb2plY3RzT3ZlcnZpZXdfanNcIjpcImU4MjdhMWFhNmU1NWIyN2ViNmM1XCIsXCJzcmNfcHJvZmlsZV9qc1wiOlwiMGE1ZTk1OTU2ODA4MTIwMWViY2VcIixcInNyY19zaW5nbGVQcm9qZWN0X2pzXCI6XCIwN2Q3MDgyYWQ4YjE5ZDFiNDYxY1wiLFwic3JjX21vcmVQcm9qZWN0c19qc1wiOlwiYWI1Zjg4YzQ3ZDZkMmNjMGZhNWJcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwicm9iZXJ0YXJuaW5nOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcm9iZXJ0YXJuaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3JvYmVydGFybmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBzZXRSb3V0ZSwgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHsgaGFuZGxlTWVudUxpbmtzIH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGluaXRpYWxpemVMYXp5TG9hZGluZyB9IGZyb20gJy4vbGF6eUxvYWRpbmcuanMnO1xuXG4vKiBcblJlZ2lzdGVyIHN0YXRpYyByb3V0ZXMgYW5kIGxvYWQgdGhlIGNvcnJlc3BvbmRpbmcgcm91dGVcbmhhbmRsZXIgZnVuY3Rpb25zIGFzeW5jaHJvbm91c2x5IHdpdGggdGhlIGltcG9ydCBzdGF0ZW1lbnQuXG5BbHNvIHNldCB0aGUgZG9jdW1lbnQgdGl0bGUgd2l0aCB0aGUgM3JkIHBhcmFtZXRlci5cbiovXG5zZXRSb3V0ZShcbiAgJy8nLFxuICAoKSA9PiBpbXBvcnQoJy4vcHJvamVjdHNPdmVydmlldy5qcycpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLmRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcpLFxuICAnUm9iZXJ0IEFybmluZyDigJMgVUkvVVggRGVzaWduZXInXG4pOyAvLyBIb21lcGFnZVxuc2V0Um91dGUoXG4gICcvcHJvZmlsJyxcbiAgKCkgPT4gaW1wb3J0KCcuL3Byb2ZpbGUuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvZmlsZSksXG4gICdSb2JlcnQgQXJuaW5nIOKAkyBQcm9maWwnXG4pOyAvLyBQcm9maWxlIHBhZ2VcblxuLy8gQ2FsbCB0aGUgcm91dGVyKCkgYW5kIGluaXRpYWxpemUgdGhlIG5hdmlnYXRpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIHJvdXRlcigpO1xuICBoYW5kbGVNZW51TGlua3MoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9