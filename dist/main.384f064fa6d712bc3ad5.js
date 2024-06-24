/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Inter-VariableFont_slnt,wght.ttf */ "./src/fonts/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype-variations");
}
:root {
  --primary-color: #0d0d0d;
  --logo-width: clamp(6.25rem, 3.1vw + 5.63rem, 9.31rem);
  --font-size-nav: clamp(1.25rem, 0.51vw + 1.15rem, 1.75rem);
  --font-size-text: clamp(1.38rem, 0.76vw + 1.22rem, 2.13rem);
  --font-size-h1: clamp(5rem, 5.7vw + 3.86rem, 10.63rem);
  --font-size-h2: clamp(2.5rem, 3.16vw + 1.87rem, 5.63rem);
  --font-size-skills-and-tools: clamp(1.25rem, 0.25vw + 1.2rem, 1.5rem);
  --font-size-skill-tag: clamp(1rem, 0.13vw + 0.97rem, 1.13rem);
  --font-size-visit-live-site: clamp(1rem, 0.13vw + 0.97rem, 1.13rem);
  --font-weight-regular: 440;
  --font-weight-thin: 350;
  --font-weight-medium: 500;
  --flex-gap-nav: clamp(1.88rem, 2.53vw + 1.37rem, 4.38rem);
  --profile-skill-list-text-width: clamp(31.25rem, 6.33vw + 29.98rem, 37.5rem);
  --single-project-text-width: clamp(37.5rem, 18.99vw + 33.7rem, 56.25rem);
  --single-project-skills-tag-padding1: clamp(0.31rem, 0.63vw + 0.19rem, 0.94rem);
  --single-project-skills-tag-padding2: clamp(0.63rem, 0.95vw + 0.44rem, 1.56rem);
}

body {
  font-family: "Inter", sans-serif;
  padding: 0 20px;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

h1,
h2 {
  margin: 0;
}

h1 {
  max-width: 700px;
  margin: 0 0 80px -9px;
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-thin);
  line-height: 90%;
}

h2 {
  margin: 0 0 20px;
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  line-height: 100%;
}

h3,
p {
  margin: 0;
  padding: 0;
  line-height: 140%;
  font-size: var(--font-size-text);
}

h3 {
  margin: 20px 0 0;
  font-weight: var(--font-weight-medium);
}

p + p {
  margin-top: 40px;
}

figure {
  margin: 0;
  padding: 0;
}

img,
video {
  display: block;
  width: 100%;
  max-width: 100%;
}

.transition-in {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
}

.transition-in-opacity {
  opacity: 0;
}

.transition-visible {
  opacity: 1; /* Fully visible */
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.transition-visible-delayed {
  opacity: 1; /* Fully visible */
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;
}

.transition-visible-delayed-more {
  opacity: 1; /* Fully visible */
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s;
}

header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1700px;
  margin: 20px auto 0;
}
header img {
  max-width: var(--logo-width);
}
header nav {
  font-weight: var(--font-weight-regular);
}
header nav ul {
  display: flex;
  gap: var(--flex-gap-nav);
  margin: 0;
  list-style: none;
  font-size: var(--font-size-nav);
}

#content {
  display: flex;
  flex-direction: column;
  max-width: 1700px;
  margin: 70px auto 0;
  padding: 0 0 100px;
}

.homepage .fade-in {
  opacity: 0;
  transform: translate3d(0, -10px, 0);
}
.homepage .fade-in-deferred {
  opacity: 0;
  transform: translate3d(0, 5px, 0) scale(1.03);
}
.homepage .visible {
  opacity: 1; /* Fully visible */
  transform: translate3d(0, 0, 0);
  transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
}
.homepage .visible-deferred {
  opacity: 1; /* Fully visible */
  transform: translate3d(0, 0, 0) scale(1);
  transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
}

.projects-overview {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 0;
}
.projects-overview article p {
  max-width: 864px;
  font-weight: var(--font-weight-thin);
}

.single-project .project-title-and-link {
  display: flex;
  align-items: baseline;
  gap: 30px;
}
.single-project .project-title-and-link a {
  display: flex;
  gap: 8px;
  font-size: var(--font-size-visit-live-site);
}
.single-project .project-title-and-link img {
  max-width: 18px;
}
.single-project .skills-and-tools {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin: 0 0 25px;
  padding: 10px 0;
  border-top: 2px solid var(--primary-color);
}
.single-project .skills-and-tools ul {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;
  list-style: none;
}
.single-project .skills-and-tools ul span {
  margin-right: 5px;
  font-size: var(--font-size-skills-and-tools);
  font-weight: var(--font-weight-regular);
}
.single-project .skills-and-tools ul .skill-tag {
  padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);
  font-size: var(--font-size-skill-tag);
  font-weight: 400;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
}
.single-project .text {
  padding: 100px 0;
}
.single-project .text p {
  max-width: var(--single-project-text-width);
}
.single-project .media-elements {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.single-project .two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.single-project .more-projects h2 {
  font-weight: var(--font-weight-regular);
  margin: 100px 0;
  text-align: center;
}
.single-project .more-projects .more-projects-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  height: 100%;
  max-height: 570px;
  width: 100%;
  aspect-ratio: 170/57;
}
.single-project .more-projects .more-projects-wrapper div {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.profile-page .text p {
  max-width: var(--single-project-text-width);
}
.profile-page .text:first-of-type {
  margin: 0 0 100px;
}
.profile-page .two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.profile-page .two-column p {
  max-width: var(--profile-skill-list-text-width);
  font-weight: var(--font-weight-thin);
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n// Font face\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('./fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n// Font size calculation wit clamp()\n$default-min-bp: 320px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n// Custom properties\n:root {\n  --primary-color: #0d0d0d;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n\n  --font-weight-regular: 440;\n  --font-weight-thin: 350;\n  --font-weight-medium: 500;\n\n  --flex-gap-nav: #{fluid(30px, 70px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(600px, 900px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n}\n\n// General styles for the website\nbody {\n  font-family: 'Inter', sans-serif;\n  padding: 0 20px;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 80px -9px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-thin);\n  line-height: 90%;\n}\n\nh2 {\n  margin: 0 0 20px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n.transition-in-opacity {\n  opacity: 0;\n}\n\n.transition-visible {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out, transform 0.5s ease-out;\n}\n\n.transition-visible-delayed {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n.transition-visible-delayed-more {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s;\n}\n\n// The logo + navigation\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n    }\n  }\n}\n\n// General styles for the content\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: 70px auto 0;\n  padding: 0 0 100px;\n}\n\n// Homepage\n.homepage {\n  .fade-in {\n    opacity: 0;\n    transform: translate3d(0, -10px, 0);\n  }\n\n  .fade-in-deferred {\n    opacity: 0;\n    transform: translate3d(0, 5px, 0) scale(1.03);\n  }\n\n  .visible {\n    opacity: 1; /* Fully visible */\n    transform: translate3d(0, 0, 0);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n\n  .visible-deferred {\n    opacity: 1; /* Fully visible */\n    transform: translate3d(0, 0, 0) scale(1);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: 864px;\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n\n// Single project page\n.single-project {\n  .project-title-and-link {\n    display: flex;\n    align-items: baseline;\n    gap: 30px;\n\n    a {\n      display: flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 20px;\n\n    margin: 0 0 25px;\n    padding: 10px 0;\n    border-top: 2px solid var(--primary-color);\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      padding: 0;\n      list-style: none;\n\n      span {\n        margin-right: 5px;\n        font-size: var(--font-size-skills-and-tools);\n        font-weight: var(--font-weight-regular);\n      }\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: 400;\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n      }\n    }\n  }\n\n  .text {\n    padding: 100px 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n    }\n  }\n\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  .more-projects {\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: 100px 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n}\n\n// Profile page\n.profile-page {\n  .text {\n    p {\n      max-width: var(--single-project-text-width);\n    }\n\n    &:first-of-type {\n      margin: 0 0 100px;\n    }\n  }\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    p {\n      max-width: var(--profile-skill-list-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnimationClassesOnPageLoad: () => (/* binding */ addAnimationClassesOnPageLoad),
/* harmony export */   convertToURLSaveName: () => (/* binding */ convertToURLSaveName),
/* harmony export */   handleAnimationOnPageTransition: () => (/* binding */ handleAnimationOnPageTransition),
/* harmony export */   pushURLAndCallRouter: () => (/* binding */ pushURLAndCallRouter),
/* harmony export */   setContent: () => (/* binding */ setContent),
/* harmony export */   setupPage: () => (/* binding */ setupPage)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");


const setContent = function (id, content) {
  const HTMLelement = document.getElementById(id);

  return (HTMLelement.innerHTML = content);
};

const pushURLAndCallRouter = function (URLpath) {
  // Update the URL
  history.pushState({}, '', `/${URLpath}`);
  // Call the router
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.router)();
};

const setupPage = function () {
  requestAnimationFrame(() => {
    handleAnimationOnPageTransition();
  });
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

/*
Encodes the "projectName" value to safely include it in the URL path 
*/
const convertToURLSaveName = function (name) {
  // Replace spaces with hyphens, then encode URI components, and finally convert to lowercase
  return encodeURIComponent(name.replace(/\s+/g, '-')).toLowerCase();
};

const addAnimationClassesOnPageLoad = function () {
  const element = document.querySelector('h1');
  const elementDeferred = document.querySelector(
    '.projects-overview > a:first-of-type article img'
  );

  if (element) {
    element.classList.add('fade-in');
    requestAnimationFrame(() => {
      element.classList.add('visible');
    });
  }

  if (elementDeferred) {
    elementDeferred.classList.add('fade-in-deferred');
    requestAnimationFrame(() => {
      elementDeferred.classList.add('visible-deferred');
    });
  }
};

const handleAnimationOnPageTransition = function () {
  const siteTitle = document.querySelector('h1');
  const projectTitleAndLink = document.querySelector('.single-project .project-title-and-link');
  const projectSkillsAndTools = document.querySelector('.single-project .skills-and-tools');
  const projectSkillsAndToolsList = document.querySelector('.single-project .skills-and-tools ul');
  const projectFirstMediaElement = document.querySelector(
    '.single-project .media-elements > div:first-child video'
  );

  console.log(projectSkillsAndToolsList);

  if (siteTitle) {
    siteTitle.classList.add('transition-in');
    requestAnimationFrame(() => {
      siteTitle.classList.add('transition-visible');
    });
  }

  if (projectFirstMediaElement) {
    if (projectTitleAndLink) {
      projectTitleAndLink.classList.add('transition-in');
    }

    if (projectSkillsAndTools) {
      projectSkillsAndTools.classList.add('transition-in-opacity');
    }

    if (projectSkillsAndToolsList) {
      projectSkillsAndToolsList.classList.add('transition-in');
    }

    projectFirstMediaElement.classList.add('transition-in');

    // Waits for the first element to load before attaching the animation triggers
    projectFirstMediaElement.addEventListener('canplay', function () {
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

      if (projectSkillsAndToolsList) {
        requestAnimationFrame(() => {
          projectSkillsAndToolsList.classList.add('transition-visible-delayed');
        });
      }

      requestAnimationFrame(() => {
        projectFirstMediaElement.classList.add('transition-visible-delayed-more');
      });
    });
  }
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

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   route: () => (/* binding */ route),
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _moreProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreProjects */ "./src/moreProjects.js");
/* harmony import */ var _singleProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./singleProject */ "./src/singleProject.js");




const routes = {};

const route = function (path, handlerPromise) {
  routes[path] = handlerPromise;
};

const router = function () {
  const urlPath = window.location.pathname || '/';
  // First, check for static routes
  if (routes[urlPath]) {
    routes[urlPath]()
      .then((handler) => {
        handler();
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.setupPage)();
      })
      .catch((error) => {
        console.error('Failed to load route handler', error);
      });
  } else {
    // Fallback or dynamic project loading
    (0,_singleProject__WEBPACK_IMPORTED_MODULE_2__.loadSingleProject)(urlPath)
      .then(() => {
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.setupPage)();
        (0,_moreProjects__WEBPACK_IMPORTED_MODULE_1__.handleMoreProjectsLinks)();
      })
      .catch((error) => {
        console.error('Failed to load dynamic content or fallback', error);
      });
  }
};

// Handle browser navigation events
window.addEventListener('popstate', router);


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

  return `<div id="${project.id}" class="single-project"><div class="project-title-and-link"><h2>${project.projectName}</h2>${projectLink}</div><section class="skills-and-tools"><ul><span>Skills/Tools:</span>${usedSkills}</ul></section><section class="media-elements">${projectMediaElements}</section>${moreProjects}</div>`;
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
            return `<div class="${element.type}">
            <video src="${element.content}" autoplay muted loop>
            </div>`;
          case 'image':
            return `<div class="${element.type}">
            <img src="${element.content}">
            </div>`;
          case 'text':
            return `<div class="${element.type}">
            <p>${element.content}</p>
            </div>`;
          case 'two-column':
            // If the element type is "two-column" we need to iterate over the element's
            // "content" property which holds an array of media objects "image" or "video"
            const twoColumnElements = element.content
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
      /* handleMoreProjectsLinks(project); */
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

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-VariableFont_slnt,wght.ttf";

/***/ }),

/***/ "./src/img/external-link.svg":
/*!***********************************!*\
  !*** ./src/img/external-link.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "683f8c5361bc53fd8a51.svg";

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
/******/ 			return "" + chunkId + "." + {"src_projectsOverview_js":"17139a2dd7d09a6bab7c","src_profile_js":"04251e66d7389f543211"}[chunkId] + ".js";
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");





// Async loading of route handlers when requested
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)('/', () => __webpack_require__.e(/*! import() */ "src_projectsOverview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectsOverview.js */ "./src/projectsOverview.js")).then((module) => module.displayProjectOverview));
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)('/profil', () => __webpack_require__.e(/*! import() */ "src_profile_js").then(__webpack_require__.bind(__webpack_require__, /*! ./profile.js */ "./src/profile.js")).then((module) => module.displayProfile));

document.addEventListener('DOMContentLoaded', function () {
  (0,_router__WEBPACK_IMPORTED_MODULE_1__.router)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.handleMenuLinks)();
  requestAnimationFrame(() => {
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.addAnimationClassesOnPageLoad)();
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zODRmMDY0ZmE2ZDcxMmJjM2FkNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLHFCQUFxQixXQUFXLFdBQVcsT0FBTyxNQUFNLHFCQUFxQixXQUFXLFdBQVcsT0FBTyxNQUFNLHFCQUFxQixXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxxQkFBcUIsV0FBVyxXQUFXLE1BQU0sTUFBTSxxQkFBcUIsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsMkNBQTJD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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ3JGQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNtQjtBQUNBO0FBQ3lCOztBQUVsRTtBQUNBLDhDQUFLLFlBQVksOEtBQStCO0FBQ2hELDhDQUFLLGtCQUFrQixtSkFBc0I7O0FBRTdDO0FBQ0EsRUFBRSwrQ0FBTTtBQUNSLEVBQUUsc0RBQWU7QUFDakI7QUFDQSxJQUFJLCtFQUE2QjtBQUNqQyxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbW9yZVByb2plY3RzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Nlc3Npb25TdG9yYWdlLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zaW5nbGVQcm9qZWN0LmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1wiKTtcbn1cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWxvZ28td2lkdGg6IGNsYW1wKDYuMjVyZW0sIDMuMXZ3ICsgNS42M3JlbSwgOS4zMXJlbSk7XG4gIC0tZm9udC1zaXplLW5hdjogY2xhbXAoMS4yNXJlbSwgMC41MXZ3ICsgMS4xNXJlbSwgMS43NXJlbSk7XG4gIC0tZm9udC1zaXplLXRleHQ6IGNsYW1wKDEuMzhyZW0sIDAuNzZ2dyArIDEuMjJyZW0sIDIuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMTogY2xhbXAoNXJlbSwgNS43dncgKyAzLjg2cmVtLCAxMC42M3JlbSk7XG4gIC0tZm9udC1zaXplLWgyOiBjbGFtcCgyLjVyZW0sIDMuMTZ2dyArIDEuODdyZW0sIDUuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiBjbGFtcCgxLjI1cmVtLCAwLjI1dncgKyAxLjJyZW0sIDEuNXJlbSk7XG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogY2xhbXAoMXJlbSwgMC4xM3Z3ICsgMC45N3JlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogY2xhbXAoMXJlbSwgMC4xM3Z3ICsgMC45N3JlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDQwO1xuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDM1MDtcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcbiAgLS1mbGV4LWdhcC1uYXY6IGNsYW1wKDEuODhyZW0sIDIuNTN2dyArIDEuMzdyZW0sIDQuMzhyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi4zM3Z3ICsgMjkuOThyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDE4Ljk5dncgKyAzMy43cmVtLCA1Ni4yNXJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogY2xhbXAoMC4zMXJlbSwgMC42M3Z3ICsgMC4xOXJlbSwgMC45NHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogY2xhbXAoMC42M3JlbSwgMC45NXZ3ICsgMC40NHJlbSwgMS41NnJlbSk7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgMCA4MHB4IC05cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xuICBsaW5lLWhlaWdodDogOTAlO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxucCArIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi50cmFuc2l0aW9uLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjRzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjRzO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59XG5oZWFkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogNzBweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcbn1cblxuLmhvbWVwYWdlIC5mYWRlLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG59XG4uaG9tZXBhZ2UgLmZhZGUtaW4tZGVmZXJyZWQge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCkgc2NhbGUoMS4wMyk7XG59XG4uaG9tZXBhZ2UgLnZpc2libGUge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XG59XG4uaG9tZXBhZ2UgLnZpc2libGUtZGVmZXJyZWQge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XG59XG5cbi5wcm9qZWN0cy1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTAwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9qZWN0cy1vdmVydmlldyBhcnRpY2xlIHAge1xuICBtYXgtd2lkdGg6IDg2NHB4O1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XG59XG5cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiAzMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBpbWcge1xuICBtYXgtd2lkdGg6IDE4cHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCAuc2tpbGwtdGFnIHtcbiAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbWFyZ2luOiAxMDBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNzAvNTc7XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wcm9maWxlLXBhZ2UgLnRleHQgcCB7XG4gIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XG59XG4ucHJvZmlsZS1wYWdlIC50ZXh0OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW46IDAgMCAxMDBweDtcbn1cbi5wcm9maWxlLXBhZ2UgLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG4ucHJvZmlsZS1wYWdlIC50d28tY29sdW1uIHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FBRkY7QUF3Q0E7RUFDRSx3QkFBQTtFQUVBLHNEQUFBO0VBRUEsMERBQUE7RUFDQSwyREFBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFDQSxxRUFBQTtFQUNBLDZEQUFBO0VBQ0EsbUVBQUE7RUFFQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFFQSx5REFBQTtFQUVBLDRFQUFBO0VBRUEsd0VBQUE7RUFDQSwrRUFBQTtFQUNBLCtFQUFBO0FBNUNGOztBQWdEQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQTdDRjs7QUFnREE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FBN0NGOztBQWdEQTs7RUFFRSxTQUFBO0FBN0NGOztBQWdEQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUE5Q0Y7O0FBaURBO0VBQ0UsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUEvQ0Y7O0FBa0RBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxnQ0FBQTtBQWhERjs7QUFtREE7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FBaERGOztBQW1EQTtFQUNFLGdCQUFBO0FBaERGOztBQW1EQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBaERGOztBQW1EQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFoREY7O0FBbURBO0VBQ0UsVUFBQTtFQUNBLGtDQUFBO0FBaERGOztBQW1EQTtFQUNFLFVBQUE7QUFoREY7O0FBbURBO0VBQ0UsVUFBQSxFQUFBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwREFBQTtBQWhERjs7QUFtREE7RUFDRSxVQUFBLEVBQUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNFQUFBO0FBaERGOztBQW1EQTtFQUNFLFVBQUEsRUFBQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0VBQUE7QUFoREY7O0FBb0RBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0FBbERGO0FBb0RFO0VBQ0UsNEJBQUE7QUFsREo7QUFxREU7RUFDRSx1Q0FBQTtBQW5ESjtBQXFESTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUVBLFNBQUE7RUFFQSxnQkFBQTtFQUNBLCtCQUFBO0FBckROOztBQTJEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQXpERjs7QUE4REU7RUFDRSxVQUFBO0VBQ0EsbUNBQUE7QUEzREo7QUE4REU7RUFDRSxVQUFBO0VBQ0EsNkNBQUE7QUE1REo7QUErREU7RUFDRSxVQUFBLEVBQUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdFQUFBO0FBN0RKO0FBZ0VFO0VBQ0UsVUFBQSxFQUFBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnRUFBQTtBQTlESjs7QUFtRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBRUEsU0FBQTtBQWpFRjtBQW9FSTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7QUFsRU47O0FBeUVFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQXRFSjtBQXdFSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsMkNBQUE7QUF0RU47QUF5RUk7RUFDRSxlQUFBO0FBdkVOO0FBMkVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBRUEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUExRUo7QUE0RUk7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtBQTNFTjtBQTZFTTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSx1Q0FBQTtBQTNFUjtBQThFTTtFQUNFLDRGQUFBO0VBRUEscUNBQUE7RUFDQSxnQkFBQTtFQUVBLHNDQUFBO0VBQ0EsbUJBQUE7QUE5RVI7QUFtRkU7RUFDRSxnQkFBQTtBQWpGSjtBQW1GSTtFQUNFLDJDQUFBO0FBakZOO0FBcUZFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQW5GSjtBQXNGRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFwRko7QUF3Rkk7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXRGTjtBQXdGSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUF2Rk47QUF5Rk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXhGUjs7QUFpR0k7RUFDRSwyQ0FBQTtBQTlGTjtBQWlHSTtFQUNFLGlCQUFBO0FBL0ZOO0FBa0dFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBaEdKO0FBa0dJO0VBQ0UsK0NBQUE7RUFDQSxvQ0FBQTtBQWhHTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbi8vIEZvbnQgZmFjZVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwIDkwMDsgLy8gU3VwcG9ydHMgYSByYW5nZSBmcm9tIFRoaW4gKDEwMCkgdG8gQmxhY2sgKDkwMClcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLy8gT3B0aW9uYWwgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxcbiAgc3JjOiB1cmwoJy4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlLXZhcmlhdGlvbnMnKTtcXG59XFxuXFxuLy8gRm9udCBzaXplIGNhbGN1bGF0aW9uIHdpdCBjbGFtcCgpXFxuJGRlZmF1bHQtbWluLWJwOiAzMjBweDtcXG4kZGVmYXVsdC1tYXgtYnA6IDE5MDBweDtcXG5cXG5AZnVuY3Rpb24gcm91bmQoJG51bWJlciwgJGRlY2ltYWxzOiAwKSB7XFxuICAkbjogMTtcXG4gIEBpZiAkZGVjaW1hbHMgPiAwIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGVjaW1hbHMge1xcbiAgICAgICRuOiAkbiAqIDEwO1xcbiAgICB9XFxuICB9XFxuICBAcmV0dXJuIG1hdGguZGl2KG1hdGgucm91bmQoJG51bWJlciAqICRuKSwgJG4pO1xcbn1cXG5cXG5AZnVuY3Rpb24gcHgtdG8tcmVtKCRweCkge1xcbiAgJHJlbXM6IG1hdGguZGl2KCRweCwgMTZweCkgKiAxcmVtO1xcbiAgQHJldHVybiAkcmVtcztcXG59XFxuXFxuQGZ1bmN0aW9uIGZsdWlkKFxcbiAgJG1pbi1zaXplLFxcbiAgJG1heC1zaXplLFxcbiAgJG1pbi1icmVha3BvaW50OiAkZGVmYXVsdC1taW4tYnAsXFxuICAkbWF4LWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1heC1icCxcXG4gICR1bml0OiB2d1xcbikge1xcbiAgJHNsb3BlOiBtYXRoLmRpdigkbWF4LXNpemUgLSAkbWluLXNpemUsICRtYXgtYnJlYWtwb2ludCAtICRtaW4tYnJlYWtwb2ludCk7XFxuICAkc2xvcGUtdG8tdW5pdDogcm91bmQoJHNsb3BlICogMTAwLCAyKTtcXG4gICRpbnRlcmNlcHQtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplIC0gJHNsb3BlICogJG1pbi1icmVha3BvaW50KSwgMik7XFxuICAkbWluLXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplKSwgMik7XFxuICAkbWF4LXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1heC1zaXplKSwgMik7XFxuICBAcmV0dXJuIGNsYW1wKCN7JG1pbi1zaXplLXJlbX0sICN7JHNsb3BlLXRvLXVuaXR9I3skdW5pdH0gKyAjeyRpbnRlcmNlcHQtcmVtfSwgI3skbWF4LXNpemUtcmVtfSk7XFxufVxcblxcbi8vIEN1c3RvbSBwcm9wZXJ0aWVzXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xcblxcbiAgLS1sb2dvLXdpZHRoOiAje2ZsdWlkKDEwMHB4LCAxNDlweCl9O1xcblxcbiAgLS1mb250LXNpemUtbmF2OiAje2ZsdWlkKDIwcHgsIDI4cHgpfTtcXG4gIC0tZm9udC1zaXplLXRleHQ6ICN7Zmx1aWQoMjJweCwgMzRweCl9O1xcbiAgLS1mb250LXNpemUtaDE6ICN7Zmx1aWQoODBweCwgMTcwcHgpfTtcXG4gIC0tZm9udC1zaXplLWgyOiAje2ZsdWlkKDQwcHgsIDkwcHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6ICN7Zmx1aWQoMjBweCwgMjRweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQ0MDtcXG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzUwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDMwcHgsIDcwcHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNjAwcHgsIDkwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcbn1cXG5cXG4vLyBHZW5lcmFsIHN0eWxlcyBmb3IgdGhlIHdlYnNpdGVcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIDAgODBweCAtOXB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgbGluZS1oZWlnaHQ6IDkwJTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAwIDAgMjBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG59XFxuXFxucCArIHAge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgdmlzaWJsZSAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XFxufVxcblxcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlIHtcXG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40cztcXG59XFxuXFxuLy8gVGhlIGxvZ28gKyBuYXZpZ2F0aW9uXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IHZhcigtLWZsZXgtZ2FwLW5hdik7XFxuXFxuICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBHZW5lcmFsIHN0eWxlcyBmb3IgdGhlIGNvbnRlbnRcXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiA3MHB4IGF1dG8gMDtcXG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcXG59XFxuXFxuLy8gSG9tZXBhZ2VcXG4uaG9tZXBhZ2Uge1xcbiAgLmZhZGUtaW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIC5mYWRlLWluLWRlZmVycmVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlKDEuMDMpO1xcbiAgfVxcblxcbiAgLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XFxuICB9XFxuXFxuICAudmlzaWJsZS1kZWZlcnJlZCB7XFxuICAgIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dCAwLjJzLCB0cmFuc2Zvcm0gMXMgZWFzZS1vdXQgMC4ycztcXG4gIH1cXG59XFxuXFxuLy8gUHJvamVjdCBvdmVydmlld1xcbi5wcm9qZWN0cy1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAwcHg7XFxuXFxuICBtYXJnaW46IDA7XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiA4NjRweDtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gU2luZ2xlIHByb2plY3QgcGFnZVxcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBhIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5za2lsbHMtYW5kLXRvb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG1hcmdpbjogMCAwIDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgICAgc3BhbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2tpbGwtdGFnIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzEpIHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzIpO1xcblxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZWRpYS1lbGVtZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAubW9yZS1wcm9qZWN0cyB7XFxuICAgIGgyIHtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICAgICAgbWFyZ2luOiAxMDBweCAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGFzcGVjdC1yYXRpbzogMTcwLzU3O1xcblxcbiAgICAgIGRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBQcm9maWxlIHBhZ2VcXG4ucHJvZmlsZS1wYWdlIHtcXG4gIC50ZXh0IHtcXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcXG4gICAgfVxcblxcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgIG1hcmdpbjogMCAwIDEwMHB4O1xcbiAgICB9XFxuICB9XFxuICAudHdvLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlJztcblxuLyogXG5Mb2FkcyBhIEpTT04gZmlsZSB3aXRoIGFsbCBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgc2F2ZXMgaXRcbnRvIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZSwgc28gdGhlIGRhdGEgaXMgY2FjaGVkIGZvciBmdXJ0aGVyIHVzZS5cbiovXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcbiAgbGV0IGRhdGE7XG5cbiAgLy8gR2V0IGRhdGEgZnJvbSBzZXNzaW9uU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlLi4uJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnTG9hZGVkIHByb2plY3RzIGZyb20gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIGRhdGEgPSBzdG9yZWREYXRhO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBkYXRhIGlzIG5vdCBhdmFpbGFibGUgaW4gc2Vzc2lvblN0b3JhZ2UsIGZldGNoIHRoZSBkYXRhIGZyb20gc2VydmVyXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YS4uLicpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kYXRhL2RhdGEuanNvbicpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyMDAtMjk5IHJhbmdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBTYXZlIGZldGNoZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZVxuICAgIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgY29uc29sZS5sb2coJ1NhdmVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRDb250ZW50ID0gZnVuY3Rpb24gKGlkLCBjb250ZW50KSB7XG4gIGNvbnN0IEhUTUxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHJldHVybiAoSFRNTGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgcHVzaFVSTEFuZENhbGxSb3V0ZXIgPSBmdW5jdGlvbiAoVVJMcGF0aCkge1xuICAvLyBVcGRhdGUgdGhlIFVSTFxuICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGAvJHtVUkxwYXRofWApO1xuICAvLyBDYWxsIHRoZSByb3V0ZXJcbiAgcm91dGVyKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBQYWdlID0gZnVuY3Rpb24gKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24oKTtcbiAgfSk7XG4gIC8vIFNldCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgYnJvd3NlciB3aW5kb3dcbiAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn07XG5cbi8qXG5FbmNvZGVzIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoIFxuKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0VG9VUkxTYXZlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggaHlwaGVucywgdGhlbiBlbmNvZGUgVVJJIGNvbXBvbmVudHMsIGFuZCBmaW5hbGx5IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobmFtZS5yZXBsYWNlKC9cXHMrL2csICctJykpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQW5pbWF0aW9uQ2xhc3Nlc09uUGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCBlbGVtZW50RGVmZXJyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucHJvamVjdHMtb3ZlcnZpZXcgPiBhOmZpcnN0LW9mLXR5cGUgYXJ0aWNsZSBpbWcnXG4gICk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZWxlbWVudERlZmVycmVkKSB7XG4gICAgZWxlbWVudERlZmVycmVkLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tZGVmZXJyZWQnKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWxlbWVudERlZmVycmVkLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZGVmZXJyZWQnKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNpdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUFuZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzJyk7XG4gIGNvbnN0IHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwnKTtcbiAgY29uc3QgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IGRpdjpmaXJzdC1jaGlsZCB2aWRlbydcbiAgKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KTtcblxuICBpZiAoc2l0ZVRpdGxlKSB7XG4gICAgc2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2plY3RGaXJzdE1lZGlhRWxlbWVudCkge1xuICAgIGlmIChwcm9qZWN0VGl0bGVBbmRMaW5rKSB7XG4gICAgICBwcm9qZWN0VGl0bGVBbmRMaW5rLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzKSB7XG4gICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHMuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbi1vcGFjaXR5Jyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QpIHtcbiAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIH1cblxuICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG5cbiAgICAvLyBXYWl0cyBmb3IgdGhlIGZpcnN0IGVsZW1lbnQgdG8gbG9hZCBiZWZvcmUgYXR0YWNoaW5nIHRoZSBhbmltYXRpb24gdHJpZ2dlcnNcbiAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9qZWN0VGl0bGVBbmRMaW5rKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdFRpdGxlQW5kTGluay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHMpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHMuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IHB1c2hVUkxBbmRDYWxsUm91dGVyIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTWVudUxpbmtzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI2hvbWUnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJycpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNsb2dvJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjcHJvZmlsZScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcigncHJvZmlsJyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgcHVzaFVSTEFuZENhbGxSb3V0ZXIgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmNvbnN0IGZpbmRQcmV2aW91c0FuZE5leHRQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG5cbiAgdHJ5IHtcbiAgICBpZiAoIWRhdGEgfHwgIXByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgb3IgcHJvamVjdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmRleCA9IE51bWJlcihwcm9qZWN0LmlkKSAtIDE7XG5cbiAgICBjb25zdCBuZXh0UHJvamVjdEluZGV4ID0gKGN1cnJlbnRQcm9qZWN0SW5kZXggKyAxKSAlIGFsbFByb2plY3RzLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0UHJvamVjdCA9IGFsbFByb2plY3RzW25leHRQcm9qZWN0SW5kZXhdO1xuXG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0SW5kZXggPVxuICAgICAgKGN1cnJlbnRQcm9qZWN0SW5kZXggLSAxICsgYWxsUHJvamVjdHMubGVuZ3RoKSAlIGFsbFByb2plY3RzLmxlbmd0aDtcbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3QgPSBhbGxQcm9qZWN0c1twcmV2aW91c1Byb2plY3RJbmRleF07XG5cbiAgICByZXR1cm4geyBwcmV2aW91c1Byb2plY3QsIG5leHRQcm9qZWN0IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YScsIGVycm9yKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TW9yZVByb2plY3RzID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgeyBwcmV2aW91c1Byb2plY3QsIG5leHRQcm9qZWN0IH0gPSBhd2FpdCBmaW5kUHJldmlvdXNBbmROZXh0UHJvamVjdChwcm9qZWN0KTtcblxuICB0cnkge1xuICAgIGlmICghcHJldmlvdXNQcm9qZWN0IHx8ICFuZXh0UHJvamVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YSBvbiBwcmV2aW91cyBhbmQgbmV4dCBwcm9qZWN0IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdFVSTFBhdGggPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcmV2aW91c1Byb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0VVJMUGF0aCA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKG5leHRQcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJtb3JlLXByb2plY3RzXCI+PGgyPk1laHIgUHJvamVrdGU8L2gyPjxkaXYgY2xhc3M9XCJtb3JlLXByb2plY3RzLXdyYXBwZXJcIj48YSBocmVmPVwiLyR7cHJldmlvdXNQcm9qZWN0VVJMUGF0aH1cIiBjbGFzcz1cInByZXZpb3VzLXByb2plY3RcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ByZXZpb3VzUHJvamVjdC5pbWFnZX0nKTtcIj48L2Rpdj48L2E+PGEgaHJlZj1cIi8ke25leHRQcm9qZWN0VVJMUGF0aH1cIiBjbGFzcz1cIm5leHQtcHJvamVjdFwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7bmV4dFByb2plY3QuaW1hZ2V9Jyk7XCI+PC9kaXY+PC9hPjwvZGl2Pjwvc2VjdGlvbj5gO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGEnLCBlcnJvcik7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTW9yZVByb2plY3RzTGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByZXZpb3VzUHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMtcHJvamVjdCcpO1xuICBjb25zdCBuZXh0UHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1wcm9qZWN0Jyk7XG5cbiAgY29uc3QgcHJldmlvdXNQcm9qZWN0VVJMUGF0aCA9IHByZXZpb3VzUHJvamVjdExpbmsuaHJlZi5zcGxpdCgnLycpWzNdO1xuICBjb25zdCBuZXh0UHJvamVjdFVSTFBhdGggPSBuZXh0UHJvamVjdExpbmsuaHJlZi5zcGxpdCgnLycpWzNdO1xuXG4gIHByZXZpb3VzUHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcihwcmV2aW91c1Byb2plY3RVUkxQYXRoKTtcbiAgfSk7XG5cbiAgbmV4dFByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIobmV4dFByb2plY3RVUkxQYXRoKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgc2V0dXBQYWdlIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuaW1wb3J0IHsgaGFuZGxlTW9yZVByb2plY3RzTGlua3MgfSBmcm9tICcuL21vcmVQcm9qZWN0cyc7XG5pbXBvcnQgeyBsb2FkU2luZ2xlUHJvamVjdCB9IGZyb20gJy4vc2luZ2xlUHJvamVjdCc7XG5cbmNvbnN0IHJvdXRlcyA9IHt9O1xuXG5leHBvcnQgY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAocGF0aCwgaGFuZGxlclByb21pc2UpIHtcbiAgcm91dGVzW3BhdGhdID0gaGFuZGxlclByb21pc2U7XG59O1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB1cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgLy8gRmlyc3QsIGNoZWNrIGZvciBzdGF0aWMgcm91dGVzXG4gIGlmIChyb3V0ZXNbdXJsUGF0aF0pIHtcbiAgICByb3V0ZXNbdXJsUGF0aF0oKVxuICAgICAgLnRoZW4oKGhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlcigpO1xuICAgICAgICBzZXR1cFBhZ2UoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHJvdXRlIGhhbmRsZXInLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjayBvciBkeW5hbWljIHByb2plY3QgbG9hZGluZ1xuICAgIGxvYWRTaW5nbGVQcm9qZWN0KHVybFBhdGgpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgICBoYW5kbGVNb3JlUHJvamVjdHNMaW5rcygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZHluYW1pYyBjb250ZW50IG9yIGZhbGxiYWNrJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn07XG5cbi8vIEhhbmRsZSBicm93c2VyIG5hdmlnYXRpb24gZXZlbnRzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCByb3V0ZXIpO1xuIiwiLypcblRlc3RzIGlmIHNlc3Npb25TdG9yYWdlIGlzIGF2YWlsYWJsZSBpbiB0aGUgdXNlcnMgYnJvd3NlclxuKi9cbmV4cG9ydCBjb25zdCBpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRlc3QgPSAndGVzdC1zdG9yYWdlJztcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpO1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGVzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgc2V0Q29udGVudCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcbmltcG9ydCBleHRlcm5hbExpbmtJY29uIGZyb20gJy4vaW1nL2V4dGVybmFsLWxpbmsuc3ZnJztcbmltcG9ydCB7IGhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzLCBzaG93TW9yZVByb2plY3RzIH0gZnJvbSAnLi9tb3JlUHJvamVjdHMnO1xuXG5leHBvcnQgY29uc3Qgc2hvd1NpbmdsZVByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvamVjdCBkYXRhIGF2YWlsYWJsZS4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBIVE1MIENvZGUgZm9yIHRoZSBzaW5nbGUgcHJvamVjdCBwYWdlXG4gIGNvbnN0IHByb2plY3RMaW5rID0gZ2VuZXJhdGVQcm9qZWN0TGluayhwcm9qZWN0KTtcbiAgY29uc3QgdXNlZFNraWxscyA9IGdlbmVyYXRlVXNlZFNraWxscyhwcm9qZWN0KTtcbiAgY29uc3QgcHJvamVjdE1lZGlhRWxlbWVudHMgPSBnZW5lcmF0ZVByb2plY3RNZWRpYUVsZW1lbnRzKHByb2plY3QpO1xuICBjb25zdCBtb3JlUHJvamVjdHMgPSBhd2FpdCBzaG93TW9yZVByb2plY3RzKHByb2plY3QpO1xuXG4gIHJldHVybiBgPGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0XCI+PGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGUtYW5kLWxpbmtcIj48aDI+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDI+JHtwcm9qZWN0TGlua308L2Rpdj48c2VjdGlvbiBjbGFzcz1cInNraWxscy1hbmQtdG9vbHNcIj48dWw+PHNwYW4+U2tpbGxzL1Rvb2xzOjwvc3Bhbj4ke3VzZWRTa2lsbHN9PC91bD48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJtZWRpYS1lbGVtZW50c1wiPiR7cHJvamVjdE1lZGlhRWxlbWVudHN9PC9zZWN0aW9uPiR7bW9yZVByb2plY3RzfTwvZGl2PmA7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RMaW5rID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QubGl2ZV9zaXRlKSB7XG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtwcm9qZWN0LmxpdmVfc2l0ZX1cIj48c3Bhbj5MaXZlLVNlaXRlIGJlc3VjaGVuPC9zcGFuPjxpbWcgc3JjPVwiJHtleHRlcm5hbExpbmtJY29ufVwiPjwvYT5gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2VuZXJhdGVVc2VkU2tpbGxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3Quc2tpbGxzKSB7XG4gICAgY29uc3QgcHJvamVjdFNraWxscyA9IHByb2plY3Quc2tpbGxzXG4gICAgICAubWFwKChza2lsbCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz1cInNraWxsLXRhZ1wiPiR7c2tpbGx9PC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBwcm9qZWN0U2tpbGxzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuY29uc3QgZ2VuZXJhdGVQcm9qZWN0TWVkaWFFbGVtZW50cyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LmVsZW1lbnRzKSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gcHJvamVjdC5lbGVtZW50c1xuICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgPHZpZGVvIHNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiIGF1dG9wbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cIj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndHdvLWNvbHVtbic6XG4gICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCB0eXBlIGlzIFwidHdvLWNvbHVtblwiIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBlbGVtZW50J3NcbiAgICAgICAgICAgIC8vIFwiY29udGVudFwiIHByb3BlcnR5IHdoaWNoIGhvbGRzIGFuIGFycmF5IG9mIG1lZGlhIG9iamVjdHMgXCJpbWFnZVwiIG9yIFwidmlkZW9cIlxuICAgICAgICAgICAgY29uc3QgdHdvQ29sdW1uRWxlbWVudHMgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgICAgLm1hcCgobWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfVwiPlxuICAgICAgICAgICAgICAgIDx2aWRlbyBzcmM9XCIke21lZGlhLmNvbnRlbnR9XCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVkaWEudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke21lZGlhLmNvbnRlbnR9XCI+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxwPlVuc3VwcG9ydGVkIG1lZGlhIGZvcm1hdC48L3A+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzID1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgJHt0d29Db2x1bW5FbGVtZW50c31cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gcHJvamVjdEVsZW1lbnRzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRTaW5nbGVQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHBhdGgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwYXRoLnNwbGl0KCcvJylbMV07IC8vIEFzc3VtaW5nIHBhdGhzIGxpa2UgXCIvcHJvamVjdE5hbWVcIlxuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcbiAgLy8gRmluZCB0aGUgcHJvamVjdCBvYmplY3QgdGhhdCBtYXRjaGVzIHRoZSBwcm9qZWN0TmFtZSBpbiB0aGUgVVJMXG4gIGNvbnN0IHByb2plY3QgPSBkYXRhLnByb2plY3RzLmZpbmQoXG4gICAgKHByb2plY3QpID0+IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByb2plY3QucHJvamVjdE5hbWUpID09PSBwcm9qZWN0TmFtZVxuICApO1xuXG4gIGlmIChwcm9qZWN0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IEhUTUxDb250ZW50ID0gYXdhaXQgc2hvd1NpbmdsZVByb2plY3QocHJvamVjdCk7XG4gICAgICBzZXRDb250ZW50KCdjb250ZW50JywgSFRNTENvbnRlbnQpO1xuICAgICAgLyogaGFuZGxlTW9yZVByb2plY3RzTGlua3MocHJvamVjdCk7ICovXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb2plY3QgZGV0YWlsczonLCBlcnJvcik7XG4gICAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT5FcnJvciBMb2FkaW5nIFByb2plY3Q8L2gxPicpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwcm9qZWN0IGZvdW5kLCBkaXNwbGF5IGEgZ2VuZXJpYyA0MDQgcGFnZVxuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCAnPGgxPjQwNCBOb3QgRm91bmQ8L2gxPicpO1xuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIHtcInNyY19wcm9qZWN0c092ZXJ2aWV3X2pzXCI6XCIxNzEzOWEyZGQ3ZDA5YTZiYWI3Y1wiLFwic3JjX3Byb2ZpbGVfanNcIjpcIjA0MjUxZTY2ZDczODlmNTQzMjExXCJ9W2NodW5rSWRdICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInJvYmVydGFybmluZzpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3JvYmVydGFybmluZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyb2JlcnRhcm5pbmdcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgcm91dGUsIHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcbmltcG9ydCB7IGhhbmRsZU1lbnVMaW5rcyB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBhZGRBbmltYXRpb25DbGFzc2VzT25QYWdlTG9hZCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuLy8gQXN5bmMgbG9hZGluZyBvZiByb3V0ZSBoYW5kbGVycyB3aGVuIHJlcXVlc3RlZFxucm91dGUoJy8nLCAoKSA9PiBpbXBvcnQoJy4vcHJvamVjdHNPdmVydmlldy5qcycpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLmRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcpKTtcbnJvdXRlKCcvcHJvZmlsJywgKCkgPT4gaW1wb3J0KCcuL3Byb2ZpbGUuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvZmlsZSkpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICByb3V0ZXIoKTtcbiAgaGFuZGxlTWVudUxpbmtzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgYWRkQW5pbWF0aW9uQ2xhc3Nlc09uUGFnZUxvYWQoKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==