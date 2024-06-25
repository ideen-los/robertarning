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
  --color-white: #ffffff;
  --color-green: #22b06c;
  --color-grey: #a5a5a5;
  --logo-width: clamp(6.25rem, 3.1vw + 5.63rem, 9.31rem);
  --font-size-nav: clamp(1.25rem, 0.51vw + 1.15rem, 1.75rem);
  --font-size-text: clamp(1.38rem, 0.76vw + 1.22rem, 2.13rem);
  --font-size-h1: clamp(5rem, 5.7vw + 3.86rem, 10.63rem);
  --font-size-h2: clamp(2.5rem, 3.16vw + 1.87rem, 5.63rem);
  --font-size-skills-and-tools: clamp(1.25rem, 0.25vw + 1.2rem, 1.5rem);
  --font-size-skill-tag: clamp(1rem, 0.13vw + 0.97rem, 1.13rem);
  --font-size-visit-live-site: clamp(1rem, 0.13vw + 0.97rem, 1.13rem);
  --font-size-version: clamp(0.88rem, 0.38vw + 0.8rem, 1.25rem);
  --font-weight-regular: 440;
  --font-weight-thin: 350;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
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
.single-project .new,
.single-project .old {
  position: relative;
  border: 4px solid var(--color-green);
}
.single-project .new:before,
.single-project .old:before {
  content: "Neues Design";
  position: absolute;
  top: 0;
  left: 0;
  padding: 7px 16px 7px 13px;
  font-size: var(--font-size-version);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: var(--color-green);
}
.single-project .old {
  border-color: var(--color-grey);
}
.single-project .old:before {
  content: "Altes Design";
  background-color: var(--color-grey);
}
.single-project .comment p {
  font-size: var(--font-size-skills-and-tools);
  padding: 0 0 100px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n// Font face\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('./fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n// Font size calculation wit clamp()\n$default-min-bp: 320px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n// Custom properties\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  --font-weight-regular: 440;\n  --font-weight-thin: 350;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(30px, 70px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(600px, 900px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n}\n\n// General styles for the website\nbody {\n  font-family: 'Inter', sans-serif;\n  padding: 0 20px;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 80px -9px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-thin);\n  line-height: 90%;\n}\n\nh2 {\n  margin: 0 0 20px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n.transition-in-opacity {\n  opacity: 0;\n}\n\n.transition-visible {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out, transform 0.5s ease-out;\n}\n\n.transition-visible-delayed {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n.transition-visible-delayed-more {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s;\n}\n\n// The logo + navigation\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n    }\n  }\n}\n\n// General styles for the content\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: 70px auto 0;\n  padding: 0 0 100px;\n}\n\n// Homepage\n.homepage {\n  .fade-in {\n    opacity: 0;\n    transform: translate3d(0, -10px, 0);\n  }\n\n  .fade-in-deferred {\n    opacity: 0;\n    transform: translate3d(0, 5px, 0) scale(1.03);\n  }\n\n  .visible {\n    opacity: 1; /* Fully visible */\n    transform: translate3d(0, 0, 0);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n\n  .visible-deferred {\n    opacity: 1; /* Fully visible */\n    transform: translate3d(0, 0, 0) scale(1);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: 864px;\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n\n// Single project page\n.single-project {\n  .project-title-and-link {\n    display: flex;\n    align-items: baseline;\n    gap: 30px;\n\n    a {\n      display: flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 20px;\n\n    margin: 0 0 25px;\n    padding: 10px 0;\n    border-top: 2px solid var(--primary-color);\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      padding: 0;\n      list-style: none;\n\n      span {\n        margin-right: 5px;\n        font-size: var(--font-size-skills-and-tools);\n        font-weight: var(--font-weight-regular);\n      }\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: 400;\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n      }\n    }\n  }\n\n  .new,\n  .old {\n    position: relative;\n    border: 4px solid var(--color-green);\n\n    &:before {\n      content: 'Neues Design';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      padding: 7px 16px 7px 13px;\n\n      font-size: var(--font-size-version);\n      font-weight: var(--font-weight-semibold);\n      color: var(--color-white);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      background-color: var(--color-green);\n    }\n  }\n\n  .old {\n    border-color: var(--color-grey);\n\n    &:before {\n      content: 'Altes Design';\n      background-color: var(--color-grey);\n    }\n  }\n\n  .comment {\n    p {\n      font-size: var(--font-size-skills-and-tools);\n      padding: 0 0 100px;\n    }\n  }\n\n  .text {\n    padding: 100px 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n    }\n  }\n\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  .more-projects {\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: 100px 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n}\n\n// Profile page\n.profile-page {\n  .text {\n    p {\n      max-width: var(--single-project-text-width);\n    }\n\n    &:first-of-type {\n      margin: 0 0 100px;\n    }\n  }\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    p {\n      max-width: var(--profile-skill-list-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  const allMediaElements = document.querySelector('.single-project .media-elements');
  const projectTitleAndLink = document.querySelector('.single-project .project-title-and-link');
  const projectSkillsAndTools = document.querySelector('.single-project .skills-and-tools');
  const projectSkillsAndToolsList = document.querySelector('.single-project .skills-and-tools ul');
  const projectFirstMediaElement = document.querySelector(
    '.single-project .media-elements > div > *'
  );

  console.log(projectFirstMediaElement);

  if (siteTitle) {
    siteTitle.classList.add('transition-in');
    requestAnimationFrame(() => {
      siteTitle.classList.add('transition-visible');
    });
  }

  if (allMediaElements && projectFirstMediaElement) {
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

    const addTransitionTriggers = function () {
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
    };

    // Waits for the first element to load before attaching the animation triggers
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
    }
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
            return `<div class="${element.type} ${element.version || ''}">
            <video autoplay muted loop>
              <source src="${element.content}" type="video/mp4">
            </video>
            </div>`;
          case 'image':
            return `<div class="${element.type} ${element.version || ''}">
            <img src="${element.content}">
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
                <video autoplay muted loop>
                  <source src="${media.content}" type="video/mp4">
                </video>
                </div>`;
                } else if (media.type === 'image') {
                  return `<div class="${media.type} ${element.version || ''}">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZWZjMDAwOGExZWNhNWNjNTFkNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0scUJBQXFCLFdBQVcsV0FBVyxPQUFPLE1BQU0scUJBQXFCLFdBQVcsV0FBVyxPQUFPLE1BQU0scUJBQXFCLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLHFCQUFxQixXQUFXLFdBQVcsTUFBTSxNQUFNLHFCQUFxQixXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sV0FBVyxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxX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Q0E7Ozs7O1dDckZBOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ21CO0FBQ0E7QUFDeUI7O0FBRWxFO0FBQ0EsOENBQUssWUFBWSw4S0FBK0I7QUFDaEQsOENBQUssa0JBQWtCLG1KQUFzQjs7QUFFN0M7QUFDQSxFQUFFLCtDQUFNO0FBQ1IsRUFBRSxzREFBZTtBQUNqQjtBQUNBLElBQUksK0VBQTZCO0FBQ2pDLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9tb3JlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Vzc2lvblN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3NpbmdsZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZS12YXJpYXRpb25zXCIpO1xufVxuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0tY29sb3ItZ3JlZW46ICMyMmIwNmM7XG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcbiAgLS1sb2dvLXdpZHRoOiBjbGFtcCg2LjI1cmVtLCAzLjF2dyArIDUuNjNyZW0sIDkuMzFyZW0pO1xuICAtLWZvbnQtc2l6ZS1uYXY6IGNsYW1wKDEuMjVyZW0sIDAuNTF2dyArIDEuMTVyZW0sIDEuNzVyZW0pO1xuICAtLWZvbnQtc2l6ZS10ZXh0OiBjbGFtcCgxLjM4cmVtLCAwLjc2dncgKyAxLjIycmVtLCAyLjEzcmVtKTtcbiAgLS1mb250LXNpemUtaDE6IGNsYW1wKDVyZW0sIDUuN3Z3ICsgMy44NnJlbSwgMTAuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMjogY2xhbXAoMi41cmVtLCAzLjE2dncgKyAxLjg3cmVtLCA1LjYzcmVtKTtcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogY2xhbXAoMS4yNXJlbSwgMC4yNXZ3ICsgMS4ycmVtLCAxLjVyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IGNsYW1wKDFyZW0sIDAuMTN2dyArIDAuOTdyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IGNsYW1wKDFyZW0sIDAuMTN2dyArIDAuOTdyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiBjbGFtcCgwLjg4cmVtLCAwLjM4dncgKyAwLjhyZW0sIDEuMjVyZW0pO1xuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQ0MDtcbiAgLS1mb250LXdlaWdodC10aGluOiAzNTA7XG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MDA7XG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcbiAgLS1mbGV4LWdhcC1uYXY6IGNsYW1wKDEuODhyZW0sIDIuNTN2dyArIDEuMzdyZW0sIDQuMzhyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi4zM3Z3ICsgMjkuOThyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDE4Ljk5dncgKyAzMy43cmVtLCA1Ni4yNXJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogY2xhbXAoMC4zMXJlbSwgMC42M3Z3ICsgMC4xOXJlbSwgMC45NHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogY2xhbXAoMC42M3JlbSwgMC45NXZ3ICsgMC40NHJlbSwgMS41NnJlbSk7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgMCA4MHB4IC05cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xuICBsaW5lLWhlaWdodDogOTAlO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDIwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxucCArIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi50cmFuc2l0aW9uLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCwgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQ7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjRzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjRzO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59XG5oZWFkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogNzBweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcbn1cblxuLmhvbWVwYWdlIC5mYWRlLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XG59XG4uaG9tZXBhZ2UgLmZhZGUtaW4tZGVmZXJyZWQge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCkgc2NhbGUoMS4wMyk7XG59XG4uaG9tZXBhZ2UgLnZpc2libGUge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XG59XG4uaG9tZXBhZ2UgLnZpc2libGUtZGVmZXJyZWQge1xuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XG59XG5cbi5wcm9qZWN0cy1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTAwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9qZWN0cy1vdmVydmlldyBhcnRpY2xlIHAge1xuICBtYXgtd2lkdGg6IDg2NHB4O1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XG59XG5cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiAzMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBpbWcge1xuICBtYXgtd2lkdGg6IDE4cHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCAuc2tpbGwtdGFnIHtcbiAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXcsXG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXc6YmVmb3JlLFxuLnNpbmdsZS1wcm9qZWN0IC5vbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJOZXVlcyBEZXNpZ25cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxM3B4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12ZXJzaW9uKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIkFsdGVzIERlc2lnblwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuY29tbWVudCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCB7XG4gIHBhZGRpbmc6IDEwMHB4IDA7XG59XG4uc2luZ2xlLXByb2plY3QgLnRleHQgcCB7XG4gIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XG59XG4uc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC50d28tY29sdW1uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgaDIge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIG1hcmdpbjogMTAwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIC5tb3JlLXByb2plY3RzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMTcwLzU3O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIC5tb3JlLXByb2plY3RzLXdyYXBwZXIgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHJvZmlsZS1wYWdlIC50ZXh0IHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xufVxuLnByb2ZpbGUtcGFnZSAudGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwIDAgMTAwcHg7XG59XG4ucHJvZmlsZS1wYWdlIC50d28tY29sdW1uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuLnByb2ZpbGUtcGFnZSAudHdvLWNvbHVtbiBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtBQUZGO0FBd0NBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSxzREFBQTtFQUVBLDBEQUFBO0VBQ0EsMkRBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0EscUVBQUE7RUFDQSw2REFBQTtFQUNBLG1FQUFBO0VBQ0EsNkRBQUE7RUFFQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUVBLHlEQUFBO0VBRUEsNEVBQUE7RUFFQSx3RUFBQTtFQUNBLCtFQUFBO0VBQ0EsK0VBQUE7QUE1Q0Y7O0FBZ0RBO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0FBN0NGOztBQWdEQTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUE3Q0Y7O0FBZ0RBOztFQUVFLFNBQUE7QUE3Q0Y7O0FBZ0RBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQTlDRjs7QUFpREE7RUFDRSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtBQS9DRjs7QUFrREE7O0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLGdDQUFBO0FBaERGOztBQW1EQTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUFoREY7O0FBbURBO0VBQ0UsZ0JBQUE7QUFoREY7O0FBbURBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFoREY7O0FBbURBOztFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWhERjs7QUFtREE7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7QUFoREY7O0FBbURBO0VBQ0Us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c3M6bWF0aCc7XFxuXFxuLy8gRm9udCBmYWNlXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUtdmFyaWF0aW9ucycpO1xcbn1cXG5cXG4vLyBGb250IHNpemUgY2FsY3VsYXRpb24gd2l0IGNsYW1wKClcXG4kZGVmYXVsdC1taW4tYnA6IDMyMHB4O1xcbiRkZWZhdWx0LW1heC1icDogMTkwMHB4O1xcblxcbkBmdW5jdGlvbiByb3VuZCgkbnVtYmVyLCAkZGVjaW1hbHM6IDApIHtcXG4gICRuOiAxO1xcbiAgQGlmICRkZWNpbWFscyA+IDAge1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRkZWNpbWFscyB7XFxuICAgICAgJG46ICRuICogMTA7XFxuICAgIH1cXG4gIH1cXG4gIEByZXR1cm4gbWF0aC5kaXYobWF0aC5yb3VuZCgkbnVtYmVyICogJG4pLCAkbik7XFxufVxcblxcbkBmdW5jdGlvbiBweC10by1yZW0oJHB4KSB7XFxuICAkcmVtczogbWF0aC5kaXYoJHB4LCAxNnB4KSAqIDFyZW07XFxuICBAcmV0dXJuICRyZW1zO1xcbn1cXG5cXG5AZnVuY3Rpb24gZmx1aWQoXFxuICAkbWluLXNpemUsXFxuICAkbWF4LXNpemUsXFxuICAkbWluLWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1pbi1icCxcXG4gICRtYXgtYnJlYWtwb2ludDogJGRlZmF1bHQtbWF4LWJwLFxcbiAgJHVuaXQ6IHZ3XFxuKSB7XFxuICAkc2xvcGU6IG1hdGguZGl2KCRtYXgtc2l6ZSAtICRtaW4tc2l6ZSwgJG1heC1icmVha3BvaW50IC0gJG1pbi1icmVha3BvaW50KTtcXG4gICRzbG9wZS10by11bml0OiByb3VuZCgkc2xvcGUgKiAxMDAsIDIpO1xcbiAgJGludGVyY2VwdC1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUgLSAkc2xvcGUgKiAkbWluLWJyZWFrcG9pbnQpLCAyKTtcXG4gICRtaW4tc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUpLCAyKTtcXG4gICRtYXgtc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWF4LXNpemUpLCAyKTtcXG4gIEByZXR1cm4gY2xhbXAoI3skbWluLXNpemUtcmVtfSwgI3skc2xvcGUtdG8tdW5pdH0jeyR1bml0fSArICN7JGludGVyY2VwdC1yZW19LCAjeyRtYXgtc2l6ZS1yZW19KTtcXG59XFxuXFxuLy8gQ3VzdG9tIHByb3BlcnRpZXNcXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcXG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcXG5cXG4gIC0tbG9nby13aWR0aDogI3tmbHVpZCgxMDBweCwgMTQ5cHgpfTtcXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG4gIC0tZm9udC1zaXplLWgxOiAje2ZsdWlkKDgwcHgsIDE3MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1oMjogI3tmbHVpZCg0MHB4LCA5MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiAje2ZsdWlkKDIwcHgsIDI0cHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmVyc2lvbjogI3tmbHVpZCgxNHB4LCAyMHB4KX07XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQ0MDtcXG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzUwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDMwcHgsIDcwcHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNjAwcHgsIDkwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcbn1cXG5cXG4vLyBHZW5lcmFsIHN0eWxlcyBmb3IgdGhlIHdlYnNpdGVcXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIDAgODBweCAtOXB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgbGluZS1oZWlnaHQ6IDkwJTtcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAwIDAgMjBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG59XFxuXFxucCArIHAge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgdmlzaWJsZSAqL1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XFxufVxcblxcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlIHtcXG4gIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40cztcXG59XFxuXFxuLy8gVGhlIGxvZ28gKyBuYXZpZ2F0aW9uXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IHZhcigtLWZsZXgtZ2FwLW5hdik7XFxuXFxuICAgICAgbWFyZ2luOiAwO1xcblxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBHZW5lcmFsIHN0eWxlcyBmb3IgdGhlIGNvbnRlbnRcXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiA3MHB4IGF1dG8gMDtcXG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcXG59XFxuXFxuLy8gSG9tZXBhZ2VcXG4uaG9tZXBhZ2Uge1xcbiAgLmZhZGUtaW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcXG4gIH1cXG5cXG4gIC5mYWRlLWluLWRlZmVycmVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlKDEuMDMpO1xcbiAgfVxcblxcbiAgLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XFxuICB9XFxuXFxuICAudmlzaWJsZS1kZWZlcnJlZCB7XFxuICAgIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHZpc2libGUgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLW91dCAwLjJzLCB0cmFuc2Zvcm0gMXMgZWFzZS1vdXQgMC4ycztcXG4gIH1cXG59XFxuXFxuLy8gUHJvamVjdCBvdmVydmlld1xcbi5wcm9qZWN0cy1vdmVydmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTAwcHg7XFxuXFxuICBtYXJnaW46IDA7XFxuXFxuICBhcnRpY2xlIHtcXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiA4NjRweDtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gU2luZ2xlIHByb2plY3QgcGFnZVxcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBhIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5za2lsbHMtYW5kLXRvb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG1hcmdpbjogMCAwIDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgICAgc3BhbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2tpbGwtdGFnIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzEpIHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzIpO1xcblxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAubmV3LFxcbiAgLm9sZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ05ldWVzIERlc2lnbic7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcblxcbiAgICAgIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxM3B4O1xcblxcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZlcnNpb24pO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5vbGQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ0FsdGVzIERlc2lnbic7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XFxuICAgICAgcGFkZGluZzogMCAwIDEwMHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZWRpYS1lbGVtZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAubW9yZS1wcm9qZWN0cyB7XFxuICAgIGgyIHtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICAgICAgbWFyZ2luOiAxMDBweCAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGFzcGVjdC1yYXRpbzogMTcwLzU3O1xcblxcbiAgICAgIGRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBQcm9maWxlIHBhZ2VcXG4ucHJvZmlsZS1wYWdlIHtcXG4gIC50ZXh0IHtcXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcXG4gICAgfVxcblxcbiAgICAmOmZpcnN0LW9mLXR5cGUge1xcbiAgICAgIG1hcmdpbjogMCAwIDEwMHB4O1xcbiAgICB9XFxuICB9XFxuICAudHdvLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlJztcblxuLyogXG5Mb2FkcyBhIEpTT04gZmlsZSB3aXRoIGFsbCBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgc2F2ZXMgaXRcbnRvIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZSwgc28gdGhlIGRhdGEgaXMgY2FjaGVkIGZvciBmdXJ0aGVyIHVzZS5cbiovXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcbiAgbGV0IGRhdGE7XG5cbiAgLy8gR2V0IGRhdGEgZnJvbSBzZXNzaW9uU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlLi4uJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnTG9hZGVkIHByb2plY3RzIGZyb20gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIGRhdGEgPSBzdG9yZWREYXRhO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBkYXRhIGlzIG5vdCBhdmFpbGFibGUgaW4gc2Vzc2lvblN0b3JhZ2UsIGZldGNoIHRoZSBkYXRhIGZyb20gc2VydmVyXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YS4uLicpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kYXRhL2RhdGEuanNvbicpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyMDAtMjk5IHJhbmdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBTYXZlIGZldGNoZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZVxuICAgIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgY29uc29sZS5sb2coJ1NhdmVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRDb250ZW50ID0gZnVuY3Rpb24gKGlkLCBjb250ZW50KSB7XG4gIGNvbnN0IEhUTUxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHJldHVybiAoSFRNTGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCk7XG59O1xuXG5leHBvcnQgY29uc3QgcHVzaFVSTEFuZENhbGxSb3V0ZXIgPSBmdW5jdGlvbiAoVVJMcGF0aCkge1xuICAvLyBVcGRhdGUgdGhlIFVSTFxuICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGAvJHtVUkxwYXRofWApO1xuICAvLyBDYWxsIHRoZSByb3V0ZXJcbiAgcm91dGVyKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0dXBQYWdlID0gZnVuY3Rpb24gKCkge1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24oKTtcbiAgfSk7XG4gIC8vIFNldCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgYnJvd3NlciB3aW5kb3dcbiAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn07XG5cbi8qXG5FbmNvZGVzIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoIFxuKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0VG9VUkxTYXZlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggaHlwaGVucywgdGhlbiBlbmNvZGUgVVJJIGNvbXBvbmVudHMsIGFuZCBmaW5hbGx5IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobmFtZS5yZXBsYWNlKC9cXHMrL2csICctJykpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQW5pbWF0aW9uQ2xhc3Nlc09uUGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCBlbGVtZW50RGVmZXJyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucHJvamVjdHMtb3ZlcnZpZXcgPiBhOmZpcnN0LW9mLXR5cGUgYXJ0aWNsZSBpbWcnXG4gICk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoZWxlbWVudERlZmVycmVkKSB7XG4gICAgZWxlbWVudERlZmVycmVkLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tZGVmZXJyZWQnKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWxlbWVudERlZmVycmVkLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtZGVmZXJyZWQnKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHNpdGVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gIGNvbnN0IGFsbE1lZGlhRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUFuZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzJyk7XG4gIGNvbnN0IHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwnKTtcbiAgY29uc3QgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IGRpdiA+IConXG4gICk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50KTtcblxuICBpZiAoc2l0ZVRpdGxlKSB7XG4gICAgc2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGFsbE1lZGlhRWxlbWVudHMgJiYgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50KSB7XG4gICAgaWYgKHByb2plY3RUaXRsZUFuZExpbmspIHtcbiAgICAgIHByb2plY3RUaXRsZUFuZExpbmsuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHMpIHtcbiAgICAgIHByb2plY3RTa2lsbHNBbmRUb29scy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluLW9wYWNpdHknKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCkge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG4gICAgfVxuXG4gICAgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcblxuICAgIGNvbnN0IGFkZFRyYW5zaXRpb25UcmlnZ2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9qZWN0VGl0bGVBbmRMaW5rKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdFRpdGxlQW5kTGluay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHMpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHMuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gV2FpdHMgZm9yIHRoZSBmaXJzdCBlbGVtZW50IHRvIGxvYWQgYmVmb3JlIGF0dGFjaGluZyB0aGUgYW5pbWF0aW9uIHRyaWdnZXJzXG4gICAgaWYgKHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWRlbyEnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uVHJpZ2dlcnMoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UhJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0IHsgcHVzaFVSTEFuZENhbGxSb3V0ZXIgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVNZW51TGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjaG9tZScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcignJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI2xvZ28nKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJycpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNwcm9maWxlJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCdwcm9maWwnKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNvbnZlcnRUb1VSTFNhdmVOYW1lLCBwdXNoVVJMQW5kQ2FsbFJvdXRlciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuY29uc3QgZmluZFByZXZpb3VzQW5kTmV4dFByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICB0cnkge1xuICAgIGlmICghZGF0YSB8fCAhcHJvamVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YSBvciBwcm9qZWN0IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGV4ID0gTnVtYmVyKHByb2plY3QuaWQpIC0gMTtcblxuICAgIGNvbnN0IG5leHRQcm9qZWN0SW5kZXggPSAoY3VycmVudFByb2plY3RJbmRleCArIDEpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0ID0gYWxsUHJvamVjdHNbbmV4dFByb2plY3RJbmRleF07XG5cbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3RJbmRleCA9XG4gICAgICAoY3VycmVudFByb2plY3RJbmRleCAtIDEgKyBhbGxQcm9qZWN0cy5sZW5ndGgpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdCA9IGFsbFByb2plY3RzW3ByZXZpb3VzUHJvamVjdEluZGV4XTtcblxuICAgIHJldHVybiB7IHByZXZpb3VzUHJvamVjdCwgbmV4dFByb2plY3QgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhJywgZXJyb3IpO1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNob3dNb3JlUHJvamVjdHMgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCB7IHByZXZpb3VzUHJvamVjdCwgbmV4dFByb2plY3QgfSA9IGF3YWl0IGZpbmRQcmV2aW91c0FuZE5leHRQcm9qZWN0KHByb2plY3QpO1xuXG4gIHRyeSB7XG4gICAgaWYgKCFwcmV2aW91c1Byb2plY3QgfHwgIW5leHRQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBkYXRhIG9uIHByZXZpb3VzIGFuZCBuZXh0IHByb2plY3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0VVJMUGF0aCA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByZXZpb3VzUHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbmV4dFByb2plY3RVUkxQYXRoID0gY29udmVydFRvVVJMU2F2ZU5hbWUobmV4dFByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cIm1vcmUtcHJvamVjdHNcIj48aDI+TWVociBQcm9qZWt0ZTwvaDI+PGRpdiBjbGFzcz1cIm1vcmUtcHJvamVjdHMtd3JhcHBlclwiPjxhIGhyZWY9XCIvJHtwcmV2aW91c1Byb2plY3RVUkxQYXRofVwiIGNsYXNzPVwicHJldmlvdXMtcHJvamVjdFwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlvdXNQcm9qZWN0LmltYWdlfScpO1wiPjwvZGl2PjwvYT48YSBocmVmPVwiLyR7bmV4dFByb2plY3RVUkxQYXRofVwiIGNsYXNzPVwibmV4dC1wcm9qZWN0XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtuZXh0UHJvamVjdC5pbWFnZX0nKTtcIj48L2Rpdj48L2E+PC9kaXY+PC9zZWN0aW9uPmA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YScsIGVycm9yKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVNb3JlUHJvamVjdHNMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJldmlvdXNQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cy1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5leHRQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXByb2plY3QnKTtcblxuICBjb25zdCBwcmV2aW91c1Byb2plY3RVUkxQYXRoID0gcHJldmlvdXNQcm9qZWN0TGluay5ocmVmLnNwbGl0KCcvJylbM107XG4gIGNvbnN0IG5leHRQcm9qZWN0VVJMUGF0aCA9IG5leHRQcm9qZWN0TGluay5ocmVmLnNwbGl0KCcvJylbM107XG5cbiAgcHJldmlvdXNQcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKHByZXZpb3VzUHJvamVjdFVSTFBhdGgpO1xuICB9KTtcblxuICBuZXh0UHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcihuZXh0UHJvamVjdFVSTFBhdGgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBzZXR1cFBhZ2UgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBoYW5kbGVNb3JlUHJvamVjdHNMaW5rcyB9IGZyb20gJy4vbW9yZVByb2plY3RzJztcbmltcG9ydCB7IGxvYWRTaW5nbGVQcm9qZWN0IH0gZnJvbSAnLi9zaW5nbGVQcm9qZWN0JztcblxuY29uc3Qgcm91dGVzID0ge307XG5cbmV4cG9ydCBjb25zdCByb3V0ZSA9IGZ1bmN0aW9uIChwYXRoLCBoYW5kbGVyUHJvbWlzZSkge1xuICByb3V0ZXNbcGF0aF0gPSBoYW5kbGVyUHJvbWlzZTtcbn07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVybFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuICAvLyBGaXJzdCwgY2hlY2sgZm9yIHN0YXRpYyByb3V0ZXNcbiAgaWYgKHJvdXRlc1t1cmxQYXRoXSkge1xuICAgIHJvdXRlc1t1cmxQYXRoXSgpXG4gICAgICAudGhlbigoaGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKCk7XG4gICAgICAgIHNldHVwUGFnZSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgcm91dGUgaGFuZGxlcicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrIG9yIGR5bmFtaWMgcHJvamVjdCBsb2FkaW5nXG4gICAgbG9hZFNpbmdsZVByb2plY3QodXJsUGF0aClcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2V0dXBQYWdlKCk7XG4gICAgICAgIGhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkeW5hbWljIGNvbnRlbnQgb3IgZmFsbGJhY2snLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufTtcblxuLy8gSGFuZGxlIGJyb3dzZXIgbmF2aWdhdGlvbiBldmVudHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XG4iLCIvKlxuVGVzdHMgaWYgc2Vzc2lvblN0b3JhZ2UgaXMgYXZhaWxhYmxlIGluIHRoZSB1c2VycyBicm93c2VyXG4qL1xuZXhwb3J0IGNvbnN0IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdCA9ICd0ZXN0LXN0b3JhZ2UnO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsImltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNvbnZlcnRUb1VSTFNhdmVOYW1lLCBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuaW1wb3J0IGV4dGVybmFsTGlua0ljb24gZnJvbSAnLi9pbWcvZXh0ZXJuYWwtbGluay5zdmcnO1xuaW1wb3J0IHsgaGFuZGxlTW9yZVByb2plY3RzTGlua3MsIHNob3dNb3JlUHJvamVjdHMgfSBmcm9tICcuL21vcmVQcm9qZWN0cyc7XG5cbmV4cG9ydCBjb25zdCBzaG93U2luZ2xlUHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3QpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwcm9qZWN0IGRhdGEgYXZhaWxhYmxlLicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgQ29kZSBmb3IgdGhlIHNpbmdsZSBwcm9qZWN0IHBhZ2VcbiAgY29uc3QgcHJvamVjdExpbmsgPSBnZW5lcmF0ZVByb2plY3RMaW5rKHByb2plY3QpO1xuICBjb25zdCB1c2VkU2tpbGxzID0gZ2VuZXJhdGVVc2VkU2tpbGxzKHByb2plY3QpO1xuICBjb25zdCBwcm9qZWN0TWVkaWFFbGVtZW50cyA9IGdlbmVyYXRlUHJvamVjdE1lZGlhRWxlbWVudHMocHJvamVjdCk7XG4gIGNvbnN0IG1vcmVQcm9qZWN0cyA9IGF3YWl0IHNob3dNb3JlUHJvamVjdHMocHJvamVjdCk7XG5cbiAgcmV0dXJuIGA8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwic2luZ2xlLXByb2plY3RcIj48ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZS1hbmQtbGlua1wiPjxoMj4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9oMj4ke3Byb2plY3RMaW5rfTwvZGl2PjxzZWN0aW9uIGNsYXNzPVwic2tpbGxzLWFuZC10b29sc1wiPjx1bD48c3Bhbj5Ta2lsbHMvVG9vbHM6PC9zcGFuPiR7dXNlZFNraWxsc308L3VsPjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cIm1lZGlhLWVsZW1lbnRzXCI+JHtwcm9qZWN0TWVkaWFFbGVtZW50c308L3NlY3Rpb24+JHttb3JlUHJvamVjdHN9PC9kaXY+YDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdExpbmsgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5saXZlX3NpdGUpIHtcbiAgICByZXR1cm4gYDxhIGhyZWY9XCIke3Byb2plY3QubGl2ZV9zaXRlfVwiPjxzcGFuPkxpdmUtU2VpdGUgYmVzdWNoZW48L3NwYW4+PGltZyBzcmM9XCIke2V4dGVybmFsTGlua0ljb259XCI+PC9hPmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZVVzZWRTa2lsbHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5za2lsbHMpIHtcbiAgICBjb25zdCBwcm9qZWN0U2tpbGxzID0gcHJvamVjdC5za2lsbHNcbiAgICAgIC5tYXAoKHNraWxsKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2tpbGwtdGFnXCI+JHtza2lsbH08L2xpPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHByb2plY3RTa2lsbHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RNZWRpYUVsZW1lbnRzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QuZWxlbWVudHMpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBwcm9qZWN0LmVsZW1lbnRzXG4gICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9ICR7ZWxlbWVudC52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgPHZpZGVvIGF1dG9wbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPVwiJHtlbGVtZW50LmNvbnRlbnR9XCIgdHlwZT1cInZpZGVvL21wNFwiPlxuICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9ICR7ZWxlbWVudC52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cIj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnY29tbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndHdvLWNvbHVtbic6XG4gICAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCB0eXBlIGlzIFwidHdvLWNvbHVtblwiIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBlbGVtZW50J3NcbiAgICAgICAgICAgIC8vIFwiY29udGVudFwiIHByb3BlcnR5IHdoaWNoIGhvbGRzIGFuIGFycmF5IG9mIG1lZGlhIG9iamVjdHMgXCJpbWFnZVwiIG9yIFwidmlkZW9cIlxuICAgICAgICAgICAgY29uc3QgdHdvQ29sdW1uRWxlbWVudHMgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgICAgLm1hcCgobWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfSAke21lZGlhLnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgPHZpZGVvIGF1dG9wbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz1cIiR7bWVkaWEuY29udGVudH1cIiB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVkaWEudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWRpYS5jb250ZW50fVwiPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8cD5VbnN1cHBvcnRlZCBtZWRpYSBmb3JtYXQuPC9wPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuam9pbignJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcyA9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICR7dHdvQ29sdW1uRWxlbWVudHN9XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkU2luZ2xlUHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwYXRoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcGF0aC5zcGxpdCgnLycpWzFdOyAvLyBBc3N1bWluZyBwYXRocyBsaWtlIFwiL3Byb2plY3ROYW1lXCJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG4gIC8vIEZpbmQgdGhlIHByb2plY3Qgb2JqZWN0IHRoYXQgbWF0Y2hlcyB0aGUgcHJvamVjdE5hbWUgaW4gdGhlIFVSTFxuICBjb25zdCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0LnByb2plY3ROYW1lKSA9PT0gcHJvamVjdE5hbWVcbiAgKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBIVE1MQ29udGVudCA9IGF3YWl0IHNob3dTaW5nbGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsIEhUTUxDb250ZW50KTtcbiAgICAgIC8qIGhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzKHByb2plY3QpOyAqL1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBwcm9qZWN0IGRldGFpbHM6JywgZXJyb3IpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsICc8aDE+RXJyb3IgTG9hZGluZyBQcm9qZWN0PC9oMT4nKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gTm8gcHJvamVjdCBmb3VuZCwgZGlzcGxheSBhIGdlbmVyaWMgNDA0IHBhZ2VcbiAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT40MDQgTm90IEZvdW5kPC9oMT4nKTtcbiAgfVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfcHJvamVjdHNPdmVydmlld19qc1wiOlwiMTcxMzlhMmRkN2QwOWE2YmFiN2NcIixcInNyY19wcm9maWxlX2pzXCI6XCIwNDI1MWU2NmQ3Mzg5ZjU0MzIxMVwifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJyb2JlcnRhcm5pbmc6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyb2JlcnRhcm5pbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcm9iZXJ0YXJuaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHJvdXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgeyBoYW5kbGVNZW51TGlua3MgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHsgYWRkQW5pbWF0aW9uQ2xhc3Nlc09uUGFnZUxvYWQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbi8vIEFzeW5jIGxvYWRpbmcgb2Ygcm91dGUgaGFuZGxlcnMgd2hlbiByZXF1ZXN0ZWRcbnJvdXRlKCcvJywgKCkgPT4gaW1wb3J0KCcuL3Byb2plY3RzT3ZlcnZpZXcuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvamVjdE92ZXJ2aWV3KSk7XG5yb3V0ZSgnL3Byb2ZpbCcsICgpID0+IGltcG9ydCgnLi9wcm9maWxlLmpzJykudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuZGlzcGxheVByb2ZpbGUpKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgcm91dGVyKCk7XG4gIGhhbmRsZU1lbnVMaW5rcygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGFkZEFuaW1hdGlvbkNsYXNzZXNPblBhZ2VMb2FkKCk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=