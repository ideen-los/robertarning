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
___CSS_LOADER_EXPORT___.push([module.id, `/* FONT FACE
=============================================================================================== */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype-variations");
}
/* CUSTOM PROPERTIES
=============================================================================================== */
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
  --font-weight-regular: 400;
  --font-weight-thin: 300;
  --font-weight-medium: 500;
  --font-weight-semibold: 550;
  --flex-gap-nav: clamp(1.25rem, 1.9vw + 0.87rem, 3.13rem);
  --profile-skill-list-text-width: clamp(31.25rem, 6.33vw + 29.98rem, 37.5rem);
  --single-project-text-width: clamp(37.5rem, 18.99vw + 33.7rem, 56.25rem);
  --single-project-skills-tag-padding1: clamp(0.31rem, 0.63vw + 0.19rem, 0.94rem);
  --single-project-skills-tag-padding2: clamp(0.63rem, 0.95vw + 0.44rem, 1.56rem);
}

/* GENERAL STYLES
=============================================================================================== */
body {
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
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
  font-weight: var(--font-weight-regular);
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

/* LAZY LOADING
=============================================================================================== */
.media {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.media-loaded {
  opacity: 1;
}

/* TRANSITIONS
=============================================================================================== */
.transition-in {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
}

.transition-in-opacity {
  opacity: 0;
}

.transition-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;
}

.transition-visible-delayed {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;
}

.transition-visible-delayed-more {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s;
}

/* LOGO + NAVIGATION
=============================================================================================== */
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
header nav ul li a {
  padding: 8px 15px;
  border-radius: 8px;
}
header nav ul li a:active {
  background-color: rgba(0, 0, 0, 0.05);
}

/* GENERAL STYLES FOR #CONTENT
=============================================================================================== */
#content {
  display: flex;
  flex-direction: column;
  max-width: 1700px;
  margin: 70px auto 0;
  padding: 0 0 100px;
}

/* Homepage
=============================================================================================== */
.homepage {
  /* .fade-in {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }

  .fade-in-deferred {
    opacity: 0;
    transform: translate3d(0, 5px, 0) scale(1.03);
  }

  .visible {
    transform: translate3d(0, 0, 0);
    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
  }

  .visible-deferred {
    transform: translate3d(0, 0, 0) scale(1);
    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;
  } */
}
.homepage .description {
  margin: -20px 0 100px;
}
.homepage .description p {
  max-width: var(--single-project-text-width);
}

.projects-overview {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 0;
}
.projects-overview article p {
  max-width: var(--single-project-text-width);
  font-weight: var(--font-weight-thin);
}

/* SINGLE PROJECT PAGE
=============================================================================================== */
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
  z-index: 0;
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
  z-index: 2;
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
  padding: 100px 0 0;
}
.single-project .text + .comment p {
  padding: 0;
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

/* PROFILE PAGE
=============================================================================================== */
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('./fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n// Font size calculation wit clamp()\n$default-min-bp: 320px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  --font-weight-regular: 400;\n  --font-weight-thin: 300;\n  --font-weight-medium: 500;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(20px, 50px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(600px, 900px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nbody {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n  padding: 0 20px;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 80px -9px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n}\n\nh2 {\n  margin: 0 0 20px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n/* LAZY LOADING\n=============================================================================================== */\n// Initial state of media-items with opacity set to 0\n.media {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n\n// Class to be added once the media is loaded\n.media-loaded {\n  opacity: 1;\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: 70px auto 0;\n  padding: 0 0 100px;\n}\n\n/* Homepage\n=============================================================================================== */\n.homepage {\n  .description {\n    margin: -20px 0 100px;\n\n    p {\n      max-width: var(--single-project-text-width);\n    }\n  }\n\n  /* .fade-in {\n    opacity: 0;\n    transform: translate3d(0, -10px, 0);\n  }\n\n  .fade-in-deferred {\n    opacity: 0;\n    transform: translate3d(0, 5px, 0) scale(1.03);\n  }\n\n  .visible {\n    transform: translate3d(0, 0, 0);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n\n  .visible-deferred {\n    transform: translate3d(0, 0, 0) scale(1);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  } */\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: var(--single-project-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n\n/* SINGLE PROJECT PAGE\n=============================================================================================== */\n.single-project {\n  .project-title-and-link {\n    display: flex;\n    align-items: baseline;\n    gap: 30px;\n\n    a {\n      display: flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 20px;\n\n    margin: 0 0 25px;\n    padding: 10px 0;\n    border-top: 2px solid var(--primary-color);\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      padding: 0;\n      list-style: none;\n\n      span {\n        margin-right: 5px;\n        font-size: var(--font-size-skills-and-tools);\n        font-weight: var(--font-weight-regular);\n      }\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: 400;\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n      }\n    }\n  }\n\n  .new,\n  .old {\n    position: relative;\n    border: 4px solid var(--color-green);\n    z-index: 0;\n\n    &:before {\n      content: 'Neues Design';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      padding: 7px 16px 7px 13px;\n\n      font-size: var(--font-size-version);\n      font-weight: var(--font-weight-semibold);\n      color: var(--color-white);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      background-color: var(--color-green);\n      z-index: 2;\n    }\n  }\n\n  .old {\n    border-color: var(--color-grey);\n\n    &:before {\n      content: 'Altes Design';\n      background-color: var(--color-grey);\n    }\n  }\n\n  .comment {\n    p {\n      font-size: var(--font-size-skills-and-tools);\n      padding: 100px 0 0;\n    }\n  }\n\n  .text + .comment {\n    p {\n      padding: 0;\n    }\n  }\n\n  .text {\n    padding: 100px 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n    }\n  }\n\n  // Wraps all elements on a project page\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  // Shows previous and next project\n  .more-projects {\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: 100px 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n}\n\n/* PROFILE PAGE\n=============================================================================================== */\n.profile-page {\n  .text {\n    p {\n      max-width: var(--single-project-text-width);\n    }\n\n    &:first-of-type {\n      margin: 0 0 100px;\n    }\n  }\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    p {\n      max-width: var(--profile-skill-list-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/helperFunctions.js":
/*!********************************!*\
  !*** ./src/helperFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToURLSaveName: () => (/* binding */ convertToURLSaveName),
/* harmony export */   handleAnimationOnPageTransition: () => (/* binding */ handleAnimationOnPageTransition),
/* harmony export */   initializeLazyLoading: () => (/* binding */ initializeLazyLoading),
/* harmony export */   pushURLAndCallRouter: () => (/* binding */ pushURLAndCallRouter),
/* harmony export */   setContent: () => (/* binding */ setContent),
/* harmony export */   setupPage: () => (/* binding */ setupPage)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");


/* 
Sets whatever content is passed as second parameter as innerHTML
of the object with the id passed as first parameter.
*/
const setContent = function (id, content) {
  const HTMLelement = document.getElementById(id);

  return (HTMLelement.innerHTML = content);
};

/* 
Takes a path like "projectName" as parameter
and sets this path as the new URL. Finally it
calls the router() function.
*/
const pushURLAndCallRouter = function (URLpath) {
  // Update the URL
  history.pushState({}, '', `/${URLpath}`);
  // Call the router
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.router)();
};

/* 
1. Adds lazy loading to a page
2. Adds animations to the project title 
3. Sets the scroll position to the top of the page
*/
const setupPage = function () {
  initializeLazyLoading();
  requestAnimationFrame(() => {
    handleAnimationOnPageTransition();
  });
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

/*
Encodes the "projectName" value to safely include it in the URL path.
Replace spaces with hyphens, then encode URI components, and finally convert to lowercase
*/
const convertToURLSaveName = function (name) {
  return encodeURIComponent(name.replace(/\s+/g, '-')).toLowerCase();
};

/* 
Adds animations to a page's title, the project name, the
list of skills used and the wrapper for a project's elements.
*/
const handleAnimationOnPageTransition = function () {
  const siteTitle = document.querySelector('h1');
  const description = document.querySelector('.homepage .description');
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
/* harmony export */   route: () => (/* binding */ route),
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
const routes = {};

const route = function (path, handlerFunc) {
  routes[path] = handlerFunc;
};

const router = function () {
  const urlPath = window.location.pathname || '/';

  // First, check for static routes
  if (routes[urlPath]) {
    // Execute the dynamically imported module function
    routes[urlPath]()
      .then((handler) => {
        handler();
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./helperFunctions.js */ "./src/helperFunctions.js")).then((module) => {
          module.setupPage();
        });
      })
      .catch((error) => {
        console.error('Failed to load route handler', error);
      });
  } else {
    // Fallback or dynamic project loading
    __webpack_require__.e(/*! import() */ "src_singleProject_js").then(__webpack_require__.bind(__webpack_require__, /*! ./singleProject.js */ "./src/singleProject.js")).then((module) => {
      module
        .loadSingleProject(urlPath)
        .then(() => {
          Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./helperFunctions.js */ "./src/helperFunctions.js")).then((helperModule) => {
            helperModule.setupPage();
            __webpack_require__.e(/*! import() */ "src_moreProjects_js").then(__webpack_require__.bind(__webpack_require__, /*! ./moreProjects.js */ "./src/moreProjects.js")).then((moreProjectsModule) => {
              moreProjectsModule.handleMoreProjectsLinks();
            });
          });
        })
        .catch((error) => {
          console.error('Failed to load dynamic content or fallback', error);
        });
    });
  }
};

// Handle browser navigation events
window.addEventListener('popstate', router);


/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-VariableFont_slnt,wght.ttf";

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
/******/ 			return "" + chunkId + "." + {"src_projectsOverview_js":"40e06409ef251a659b7e","src_profile_js":"923c0ddcc2161941694f","src_singleProject_js":"1b2a34cee802c091e8f1","src_moreProjects_js":"32daf2533efa099b32cc"}[chunkId] + ".js";
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




// Async loading of route handlers when requested
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)('/', () => __webpack_require__.e(/*! import() */ "src_projectsOverview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectsOverview.js */ "./src/projectsOverview.js")).then((module) => module.displayProjectOverview));
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)('/profil', () => __webpack_require__.e(/*! import() */ "src_profile_js").then(__webpack_require__.bind(__webpack_require__, /*! ./profile.js */ "./src/profile.js")).then((module) => module.displayProfile));

document.addEventListener('DOMContentLoaded', function () {
  (0,_router__WEBPACK_IMPORTED_MODULE_1__.router)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.handleMenuLinks)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMGNhMzBhMDYyOGYxNDkwMmNmOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLHNCQUFzQixLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFX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O1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxtRUFBbUUsaUNBQWlDO1dBQ3BHO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3pDQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDckZBOzs7Ozs7Ozs7Ozs7QUNBc0I7QUFDbUI7QUFDQTs7QUFFekM7QUFDQSw4Q0FBSyxZQUFZLDhLQUErQjtBQUNoRCw4Q0FBSyxrQkFBa0IsbUpBQXNCOztBQUU3QztBQUNBLEVBQUUsK0NBQU07QUFDUixFQUFFLHNEQUFlO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEZPTlQgRkFDRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlLXZhcmlhdGlvbnNcIik7XG59XG4vKiBDVVNUT00gUFJPUEVSVElFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xuICAtLWNvbG9yLWdyZXk6ICNhNWE1YTU7XG4gIC0tbG9nby13aWR0aDogY2xhbXAoNi4yNXJlbSwgMy4xdncgKyA1LjYzcmVtLCA5LjMxcmVtKTtcbiAgLS1mb250LXNpemUtbmF2OiBjbGFtcCgxLjI1cmVtLCAwLjUxdncgKyAxLjE1cmVtLCAxLjc1cmVtKTtcbiAgLS1mb250LXNpemUtdGV4dDogY2xhbXAoMS4zOHJlbSwgMC43NnZ3ICsgMS4yMnJlbSwgMi4xM3JlbSk7XG4gIC0tZm9udC1zaXplLWgxOiBjbGFtcCg1cmVtLCA1Ljd2dyArIDMuODZyZW0sIDEwLjYzcmVtKTtcbiAgLS1mb250LXNpemUtaDI6IGNsYW1wKDIuNXJlbSwgMy4xNnZ3ICsgMS44N3JlbSwgNS42M3JlbSk7XG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IGNsYW1wKDEuMjVyZW0sIDAuMjV2dyArIDEuMnJlbSwgMS41cmVtKTtcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiBjbGFtcCgxcmVtLCAwLjEzdncgKyAwLjk3cmVtLCAxLjEzcmVtKTtcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiBjbGFtcCgxcmVtLCAwLjEzdncgKyAwLjk3cmVtLCAxLjEzcmVtKTtcbiAgLS1mb250LXNpemUtdmVyc2lvbjogY2xhbXAoMC44OHJlbSwgMC4zOHZ3ICsgMC44cmVtLCAxLjI1cmVtKTtcbiAgLS1mb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XG4gIC0tZmxleC1nYXAtbmF2OiBjbGFtcCgxLjI1cmVtLCAxLjl2dyArIDAuODdyZW0sIDMuMTNyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi4zM3Z3ICsgMjkuOThyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDE4Ljk5dncgKyAzMy43cmVtLCA1Ni4yNXJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogY2xhbXAoMC4zMXJlbSwgMC42M3Z3ICsgMC4xOXJlbSwgMC45NHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogY2xhbXAoMC42M3JlbSwgMC45NXZ3ICsgMC40NHJlbSwgMS41NnJlbSk7XG59XG5cbi8qIEdFTkVSQUwgU1RZTEVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCAwIDgwcHggLTlweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbmgzLFxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufVxuXG5wICsgcCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLyogTEFaWSBMT0FESU5HXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1lZGlhIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xufVxuXG4ubWVkaWEtbG9hZGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogVFJBTlNJVElPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udHJhbnNpdGlvbi1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG59XG5cbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40cztcbn1cblxuLyogTE9HTyArIE5BVklHQVRJT05cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59XG5oZWFkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XG59XG5oZWFkZXIgbmF2IHVsIGxpIGEge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuaGVhZGVyIG5hdiB1bCBsaSBhOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi8qIEdFTkVSQUwgU1RZTEVTIEZPUiAjQ09OVEVOVFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogNzBweCBhdXRvIDA7XG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcbn1cblxuLyogSG9tZXBhZ2Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uaG9tZXBhZ2Uge1xuICAvKiAuZmFkZS1pbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgfVxuXG4gIC5mYWRlLWluLWRlZmVycmVkIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNXB4LCAwKSBzY2FsZSgxLjAzKTtcbiAgfVxuXG4gIC52aXNpYmxlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XG4gIH1cblxuICAudmlzaWJsZS1kZWZlcnJlZCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0IDAuMnMsIHRyYW5zZm9ybSAxcyBlYXNlLW91dCAwLjJzO1xuICB9ICovXG59XG4uaG9tZXBhZ2UgLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAtMjBweCAwIDEwMHB4O1xufVxuLmhvbWVwYWdlIC5kZXNjcmlwdGlvbiBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbn1cblxuLnByb2plY3RzLW92ZXJ2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMDBweDtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2plY3RzLW92ZXJ2aWV3IGFydGljbGUgcCB7XG4gIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcbn1cblxuLyogU0lOR0xFIFBST0pFQ1QgUEFHRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiAzMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBpbWcge1xuICBtYXgtd2lkdGg6IDE4cHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCAuc2tpbGwtdGFnIHtcbiAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXcsXG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xuICB6LWluZGV4OiAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXc6YmVmb3JlLFxuLnNpbmdsZS1wcm9qZWN0IC5vbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJOZXVlcyBEZXNpZ25cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxM3B4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12ZXJzaW9uKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG4gIHotaW5kZXg6IDI7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIkFsdGVzIERlc2lnblwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuY29tbWVudCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIHBhZGRpbmc6IDEwMHB4IDAgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCArIC5jb21tZW50IHAge1xuICBwYWRkaW5nOiAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbWFyZ2luOiAxMDBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNzAvNTc7XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qIFBST0ZJTEUgUEFHRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5wcm9maWxlLXBhZ2UgLnRleHQgcCB7XG4gIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XG59XG4ucHJvZmlsZS1wYWdlIC50ZXh0OmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW46IDAgMCAxMDBweDtcbn1cbi5wcm9maWxlLXBhZ2UgLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG4ucHJvZmlsZS1wYWdlIC50d28tY29sdW1uIHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7aUdBQUE7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEVBQUE7QUFERjtBQXNDQTtpR0FBQTtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSxzREFBQTtFQUVBLDBEQUFBO0VBQ0EsMkRBQUE7RUFDQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0EscUVBQUE7RUFDQSw2REFBQTtFQUNBLG1FQUFBO0VBQ0EsNkRBQUE7RUFFQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUVBLHdEQUFBO0VBRUEsNEVBQUE7RUFFQSx3RUFBQTtFQUNBLCtFQUFBO0VBQ0EsK0VBQUE7QUExQ0Y7O0FBNkNBO2lHQUFBO0FBRUE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQTFDRjs7QUE2Q0E7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FBMUNGOztBQTZDQTs7RUFFRSxTQUFBO0FBMUNGOztBQTZDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUEzQ0Y7O0FBOENBO0VBQ0UsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUE1Q0Y7O0FBK0NBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxnQ0FBQTtBQTdDRjs7QUFnREE7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FBN0NGOztBQWdEQTtFQUNFLGdCQUFBO0FBN0NGOztBQWdEQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBN0NGOztBQWdEQTs7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUE3Q0Y7O0FBZ0RBO2lHQUFBO0FBR0E7RUFDRSxVQUFBO0VBQ0EsaUNBQUE7QUE5Q0Y7O0FBa0RBO0VBQ0UsVUFBQTtBQS9DRjs7QUFrREE7aUdBQUE7QUFHQTtFQUNFLFVBQUE7RUFDQSxrQ0FBQTtBQWhERjs7QUFvREE7RUFDRSxVQUFBO0FBakRGOztBQXFEQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNFQUFBO0FBbERGOztBQXNEQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNFQUFBO0FBbkRGOztBQXVEQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLG9FQUFBO0FBcERGOztBQXVEQTtpR0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0FBckRGO0FBdURFO0VBQ0UsNEJBQUE7QUFyREo7QUF3REU7RUFDRSx1Q0FBQTtBQXRESjtBQXdESTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUVBLFNBQUE7RUFFQSxnQkFBQTtFQUNBLCtCQUFBO0FBeEROO0FBMERNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQXhEUjtBQTBEUTtFQUNFLHFDQUFBO0FBeERWOztBQStEQTtpR0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBN0RGOztBQWdFQTtpR0FBQTtBQUVBO0VBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUFBO0FBbkRGO0FBMkNFO0VBQ0UscUJBQUE7QUF6Q0o7QUEyQ0k7RUFDRSwyQ0FBQTtBQXpDTjs7QUFtRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBRUEsU0FBQTtBQWpFRjtBQW9FSTtFQUNFLDJDQUFBO0VBQ0Esb0NBQUE7QUFsRU47O0FBdUVBO2lHQUFBO0FBR0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FBckVKO0FBdUVJO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSwyQ0FBQTtBQXJFTjtBQXdFSTtFQUNFLGVBQUE7QUF0RU47QUEwRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQXpFSjtBQTJFSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0FBMUVOO0FBNEVNO0VBQ0UsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHVDQUFBO0FBMUVSO0FBNkVNO0VBQ0UsNEZBQUE7RUFFQSxxQ0FBQTtFQUNBLGdCQUFBO0VBRUEsc0NBQUE7RUFDQSxtQkFBQTtBQTdFUjtBQWtGRTs7RUFFRSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQWhGSjtBQWtGSTs7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFFQSwwQkFBQTtFQUVBLG1DQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFFQSxvQ0FBQTtFQUNBLFVBQUE7QUFsRk47QUFzRkU7RUFDRSwrQkFBQTtBQXBGSjtBQXNGSTtFQUNFLHVCQUFBO0VBQ0EsbUNBQUE7QUFwRk47QUF5Rkk7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0FBdkZOO0FBNEZJO0VBQ0UsVUFBQTtBQTFGTjtBQThGRTtFQUNFLGdCQUFBO0FBNUZKO0FBOEZJO0VBQ0UsMkNBQUE7QUE1Rk47QUFpR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBL0ZKO0FBa0dFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWhHSjtBQXFHSTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBbkdOO0FBcUdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQXBHTjtBQXNHTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBckdSOztBQTJHQTtpR0FBQTtBQUlJO0VBQ0UsMkNBQUE7QUExR047QUE2R0k7RUFDRSxpQkFBQTtBQTNHTjtBQThHRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQTVHSjtBQThHSTtFQUNFLCtDQUFBO0VBQ0Esb0NBQUE7QUE1R05cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnc2FzczptYXRoJztcXG5cXG4vKiBGT05UIEZBQ0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwIDkwMDsgLy8gU3VwcG9ydHMgYSByYW5nZSBmcm9tIFRoaW4gKDEwMCkgdG8gQmxhY2sgKDkwMClcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLy8gT3B0aW9uYWwgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxcbiAgc3JjOiB1cmwoJy4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlLXZhcmlhdGlvbnMnKTtcXG59XFxuXFxuLy8gRm9udCBzaXplIGNhbGN1bGF0aW9uIHdpdCBjbGFtcCgpXFxuJGRlZmF1bHQtbWluLWJwOiAzMjBweDtcXG4kZGVmYXVsdC1tYXgtYnA6IDE5MDBweDtcXG5cXG5AZnVuY3Rpb24gcm91bmQoJG51bWJlciwgJGRlY2ltYWxzOiAwKSB7XFxuICAkbjogMTtcXG4gIEBpZiAkZGVjaW1hbHMgPiAwIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGVjaW1hbHMge1xcbiAgICAgICRuOiAkbiAqIDEwO1xcbiAgICB9XFxuICB9XFxuICBAcmV0dXJuIG1hdGguZGl2KG1hdGgucm91bmQoJG51bWJlciAqICRuKSwgJG4pO1xcbn1cXG5cXG5AZnVuY3Rpb24gcHgtdG8tcmVtKCRweCkge1xcbiAgJHJlbXM6IG1hdGguZGl2KCRweCwgMTZweCkgKiAxcmVtO1xcbiAgQHJldHVybiAkcmVtcztcXG59XFxuXFxuQGZ1bmN0aW9uIGZsdWlkKFxcbiAgJG1pbi1zaXplLFxcbiAgJG1heC1zaXplLFxcbiAgJG1pbi1icmVha3BvaW50OiAkZGVmYXVsdC1taW4tYnAsXFxuICAkbWF4LWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1heC1icCxcXG4gICR1bml0OiB2d1xcbikge1xcbiAgJHNsb3BlOiBtYXRoLmRpdigkbWF4LXNpemUgLSAkbWluLXNpemUsICRtYXgtYnJlYWtwb2ludCAtICRtaW4tYnJlYWtwb2ludCk7XFxuICAkc2xvcGUtdG8tdW5pdDogcm91bmQoJHNsb3BlICogMTAwLCAyKTtcXG4gICRpbnRlcmNlcHQtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplIC0gJHNsb3BlICogJG1pbi1icmVha3BvaW50KSwgMik7XFxuICAkbWluLXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplKSwgMik7XFxuICAkbWF4LXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1heC1zaXplKSwgMik7XFxuICBAcmV0dXJuIGNsYW1wKCN7JG1pbi1zaXplLXJlbX0sICN7JHNsb3BlLXRvLXVuaXR9I3skdW5pdH0gKyAjeyRpbnRlcmNlcHQtcmVtfSwgI3skbWF4LXNpemUtcmVtfSk7XFxufVxcblxcbi8qIENVU1RPTSBQUk9QRVJUSUVTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcXG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcXG5cXG4gIC0tbG9nby13aWR0aDogI3tmbHVpZCgxMDBweCwgMTQ5cHgpfTtcXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG4gIC0tZm9udC1zaXplLWgxOiAje2ZsdWlkKDgwcHgsIDE3MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1oMjogI3tmbHVpZCg0MHB4LCA5MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiAje2ZsdWlkKDIwcHgsIDI0cHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmVyc2lvbjogI3tmbHVpZCgxNHB4LCAyMHB4KX07XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUwMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDIwcHgsIDUwcHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNjAwcHgsIDkwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgMCA4MHB4IC05cHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaDMsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAyMHB4IDAgMDtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbn1cXG5cXG5wICsgcCB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIExBWlkgTE9BRElOR1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBtZWRpYS1pdGVtcyB3aXRoIG9wYWNpdHkgc2V0IHRvIDBcXG4ubWVkaWEge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcXG59XFxuXFxuLy8gQ2xhc3MgdG8gYmUgYWRkZWQgb25jZSB0aGUgbWVkaWEgaXMgbG9hZGVkXFxuLm1lZGlhLWxvYWRlZCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBUUkFOU0lUSU9OU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBzaXRlIHRpdGxlIGJlZm9yZSB0cmFuc2l0aW9uXFxuLnRyYW5zaXRpb24taW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxufVxcblxcbi8vIEluaXRpYWwgc3RhdGUgb2Ygc2tpbGxzLWFuZC10b29scyBkaXYgYmVmb3JlIHRyYW5zaXRpb25cXG4udHJhbnNpdGlvbi1pbi1vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2Ygc2l0ZSB0aXRsZVxcbi50cmFuc2l0aW9uLXZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4wNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMDVzO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIHNraWxscyBsaXN0IG9uIHByb2plY3QgcGFnZXNcXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4yNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMjVzO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIGZpcnN0IG1lZGlhIGVsZW1lbnQgb24gcHJvamVjdCBwYWdlc1xcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuNHMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNHM7XFxufVxcblxcbi8qIExPR08gKyBOQVZJR0FUSU9OXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuXFxuICAgIHVsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcXG5cXG4gICAgICBtYXJnaW46IDA7XFxuXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xcblxcbiAgICAgIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIEdFTkVSQUwgU1RZTEVTIEZPUiAjQ09OVEVOVFxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogNzBweCBhdXRvIDA7XFxuICBwYWRkaW5nOiAwIDAgMTAwcHg7XFxufVxcblxcbi8qIEhvbWVwYWdlXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaG9tZXBhZ2Uge1xcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAtMjBweCAwIDEwMHB4O1xcblxcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAvKiAuZmFkZS1pbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xcbiAgfVxcblxcbiAgLmZhZGUtaW4tZGVmZXJyZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCkgc2NhbGUoMS4wMyk7XFxuICB9XFxuXFxuICAudmlzaWJsZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XFxuICB9XFxuXFxuICAudmlzaWJsZS1kZWZlcnJlZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XFxuICB9ICovXFxufVxcblxcbi8vIFByb2plY3Qgb3ZlcnZpZXdcXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwMHB4O1xcblxcbiAgbWFyZ2luOiAwO1xcblxcbiAgYXJ0aWNsZSB7XFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIFNJTkdMRSBQUk9KRUNUIFBBR0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgZ2FwOiAzMHB4O1xcblxcbiAgICBhIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5za2lsbHMtYW5kLXRvb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIG1hcmdpbjogMCAwIDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgICAgc3BhbiB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc2tpbGwtdGFnIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzEpIHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzIpO1xcblxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAubmV3LFxcbiAgLm9sZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiAgICB6LWluZGV4OiAwO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ05ldWVzIERlc2lnbic7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcblxcbiAgICAgIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxM3B4O1xcblxcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZlcnNpb24pO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm9sZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAnQWx0ZXMgRGVzaWduJztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbW1lbnQge1xcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcXG4gICAgICBwYWRkaW5nOiAxMDBweCAwIDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50ZXh0ICsgLmNvbW1lbnQge1xcbiAgICBwIHtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFdyYXBzIGFsbCBlbGVtZW50cyBvbiBhIHByb2plY3QgcGFnZVxcbiAgLm1lZGlhLWVsZW1lbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLnR3by1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC8vIFNob3dzIHByZXZpb3VzIGFuZCBuZXh0IHByb2plY3RcXG4gIC5tb3JlLXByb2plY3RzIHtcXG4gICAgaDIge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gICAgICBtYXJnaW46IDEwMHB4IDA7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICAgIC5tb3JlLXByb2plY3RzLXdyYXBwZXIge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgbWF4LWhlaWdodDogNTcwcHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYXNwZWN0LXJhdGlvOiAxNzAvNTc7XFxuXFxuICAgICAgZGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIFBST0ZJTEUgUEFHRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnByb2ZpbGUtcGFnZSB7XFxuICAudGV4dCB7XFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgIH1cXG5cXG4gICAgJjpmaXJzdC1vZi10eXBlIHtcXG4gICAgICBtYXJnaW46IDAgMCAxMDBweDtcXG4gICAgfVxcbiAgfVxcbiAgLnR3by1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGgpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbi8qIFxuU2V0cyB3aGF0ZXZlciBjb250ZW50IGlzIHBhc3NlZCBhcyBzZWNvbmQgcGFyYW1ldGVyIGFzIGlubmVySFRNTFxub2YgdGhlIG9iamVjdCB3aXRoIHRoZSBpZCBwYXNzZWQgYXMgZmlyc3QgcGFyYW1ldGVyLlxuKi9cbmV4cG9ydCBjb25zdCBzZXRDb250ZW50ID0gZnVuY3Rpb24gKGlkLCBjb250ZW50KSB7XG4gIGNvbnN0IEhUTUxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHJldHVybiAoSFRNTGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCk7XG59O1xuXG4vKiBcblRha2VzIGEgcGF0aCBsaWtlIFwicHJvamVjdE5hbWVcIiBhcyBwYXJhbWV0ZXJcbmFuZCBzZXRzIHRoaXMgcGF0aCBhcyB0aGUgbmV3IFVSTC4gRmluYWxseSBpdFxuY2FsbHMgdGhlIHJvdXRlcigpIGZ1bmN0aW9uLlxuKi9cbmV4cG9ydCBjb25zdCBwdXNoVVJMQW5kQ2FsbFJvdXRlciA9IGZ1bmN0aW9uIChVUkxwYXRoKSB7XG4gIC8vIFVwZGF0ZSB0aGUgVVJMXG4gIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgYC8ke1VSTHBhdGh9YCk7XG4gIC8vIENhbGwgdGhlIHJvdXRlclxuICByb3V0ZXIoKTtcbn07XG5cbi8qIFxuMS4gQWRkcyBsYXp5IGxvYWRpbmcgdG8gYSBwYWdlXG4yLiBBZGRzIGFuaW1hdGlvbnMgdG8gdGhlIHByb2plY3QgdGl0bGUgXG4zLiBTZXRzIHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuKi9cbmV4cG9ydCBjb25zdCBzZXR1cFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGluaXRpYWxpemVMYXp5TG9hZGluZygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24oKTtcbiAgfSk7XG4gIC8vIFNldCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgYnJvd3NlciB3aW5kb3dcbiAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn07XG5cbi8qXG5FbmNvZGVzIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoLlxuUmVwbGFjZSBzcGFjZXMgd2l0aCBoeXBoZW5zLCB0aGVuIGVuY29kZSBVUkkgY29tcG9uZW50cywgYW5kIGZpbmFsbHkgY29udmVydCB0byBsb3dlcmNhc2VcbiovXG5leHBvcnQgY29uc3QgY29udmVydFRvVVJMU2F2ZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLyogXG5BZGRzIGFuaW1hdGlvbnMgdG8gYSBwYWdlJ3MgdGl0bGUsIHRoZSBwcm9qZWN0IG5hbWUsIHRoZVxubGlzdCBvZiBza2lsbHMgdXNlZCBhbmQgdGhlIHdyYXBwZXIgZm9yIGEgcHJvamVjdCdzIGVsZW1lbnRzLlxuKi9cbmV4cG9ydCBjb25zdCBoYW5kbGVBbmltYXRpb25PblBhZ2VUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lcGFnZSAuZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgYWxsTWVkaWFFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlQW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluaycpO1xuICBjb25zdCBwcm9qZWN0U2tpbGxzQW5kVG9vbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCcpO1xuICBjb25zdCBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gZGl2ID4gKidcbiAgKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQpO1xuXG4gIGlmIChzaXRlVGl0bGUpIHtcbiAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoYWxsTWVkaWFFbGVtZW50cyAmJiBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQpIHtcbiAgICBpZiAocHJvamVjdFRpdGxlQW5kTGluaykge1xuICAgICAgcHJvamVjdFRpdGxlQW5kTGluay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4tb3BhY2l0eScpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KSB7XG4gICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuXG4gICAgY29uc3QgYWRkVHJhbnNpdGlvblRyaWdnZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb2plY3RUaXRsZUFuZExpbmspIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0VGl0bGVBbmRMaW5rLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29scy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUnKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBXYWl0cyBmb3IgdGhlIGZpcnN0IGVsZW1lbnQgdG8gbG9hZCBiZWZvcmUgYXR0YWNoaW5nIHRoZSBhbmltYXRpb24gdHJpZ2dlcnNcbiAgICBpZiAocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LnRhZ05hbWUgPT09ICdWSURFTycpIHtcbiAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBhZGRUcmFuc2l0aW9uVHJpZ2dlcnMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZpZGVvIScpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIGFkZFRyYW5zaXRpb25UcmlnZ2VycygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSEnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qIFxuQWRkcyBhbiBJbnRlcmFjdGlvbk9ic2VydmVyIHRvIHRoZSB2aWV3cG9ydCB0aGF0IHNldHMgdGhlIHNyYyBvZiBhIHZpZGVvXG5vciBpbWFnZSB0byB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQncyBkYXRhLXNyYywgd2hlbiBpdCBjb21lcyBpbnRvIHZpZXcuXG5UaGlzIHdheSBpbWFnZXMgYW5kIHZpZGVvcyBhcmUgb25seSBsb2FkZWQsIHdoZW4gdGhleSBhcmUgbmVlZGVkLlxuKi9cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTGF6eUxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxhenlNZWRpYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5LWxvYWQnKTtcblxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBjb25zdCBtZWRpYSA9IGVudHJ5LnRhcmdldDtcblxuICAgICAgICBpZiAobWVkaWEudGFnTmFtZSA9PT0gJ0lNRycpIHtcbiAgICAgICAgICBtZWRpYS5zcmMgPSBtZWRpYS5kYXRhc2V0LnNyYztcbiAgICAgICAgICBtZWRpYS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYS5jbGFzc0xpc3QuYWRkKCdtZWRpYS1sb2FkZWQnKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhLnRhZ05hbWUgPT09ICdWSURFTycpIHtcbiAgICAgICAgICBBcnJheS5mcm9tKG1lZGlhLmNoaWxkcmVuKS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzb3VyY2UudGFnTmFtZSA9PT0gJ1NPVVJDRScpIHNvdXJjZS5zcmMgPSBzb3VyY2UuZGF0YXNldC5zcmM7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWVkaWEubG9hZCgpO1xuICAgICAgICAgIG1lZGlhLm9ubG9hZGVkZGF0YSA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLmNsYXNzTGlzdC5hZGQoJ21lZGlhLWxvYWRlZCcpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUobWVkaWEpOyAvLyBTdG9wIG9ic2VydmluZyBvbmNlIGxvYWRlZFxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBsYXp5TWVkaWEuZm9yRWFjaCgobWVkaWEpID0+IG9ic2VydmVyLm9ic2VydmUobWVkaWEpKTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoVVJMQW5kQ2FsbFJvdXRlciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU1lbnVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbiAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNob21lJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjbG9nbycpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcignJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI3Byb2ZpbGUnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJ3Byb2ZpbCcpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiY29uc3Qgcm91dGVzID0ge307XG5cbmV4cG9ydCBjb25zdCByb3V0ZSA9IGZ1bmN0aW9uIChwYXRoLCBoYW5kbGVyRnVuYykge1xuICByb3V0ZXNbcGF0aF0gPSBoYW5kbGVyRnVuYztcbn07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVybFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuXG4gIC8vIEZpcnN0LCBjaGVjayBmb3Igc3RhdGljIHJvdXRlc1xuICBpZiAocm91dGVzW3VybFBhdGhdKSB7XG4gICAgLy8gRXhlY3V0ZSB0aGUgZHluYW1pY2FsbHkgaW1wb3J0ZWQgbW9kdWxlIGZ1bmN0aW9uXG4gICAgcm91dGVzW3VybFBhdGhdKClcbiAgICAgIC50aGVuKChoYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoKTtcbiAgICAgICAgaW1wb3J0KCcuL2hlbHBlckZ1bmN0aW9ucy5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIG1vZHVsZS5zZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCByb3V0ZSBoYW5kbGVyJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgb3IgZHluYW1pYyBwcm9qZWN0IGxvYWRpbmdcbiAgICBpbXBvcnQoJy4vc2luZ2xlUHJvamVjdC5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgbW9kdWxlXG4gICAgICAgIC5sb2FkU2luZ2xlUHJvamVjdCh1cmxQYXRoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgaW1wb3J0KCcuL2hlbHBlckZ1bmN0aW9ucy5qcycpLnRoZW4oKGhlbHBlck1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgaGVscGVyTW9kdWxlLnNldHVwUGFnZSgpO1xuICAgICAgICAgICAgaW1wb3J0KCcuL21vcmVQcm9qZWN0cy5qcycpLnRoZW4oKG1vcmVQcm9qZWN0c01vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICBtb3JlUHJvamVjdHNNb2R1bGUuaGFuZGxlTW9yZVByb2plY3RzTGlua3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZHluYW1pYyBjb250ZW50IG9yIGZhbGxiYWNrJywgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gSGFuZGxlIGJyb3dzZXIgbmF2aWdhdGlvbiBldmVudHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3Byb2plY3RzT3ZlcnZpZXdfanNcIjpcIjQwZTA2NDA5ZWYyNTFhNjU5YjdlXCIsXCJzcmNfcHJvZmlsZV9qc1wiOlwiOTIzYzBkZGNjMjE2MTk0MTY5NGZcIixcInNyY19zaW5nbGVQcm9qZWN0X2pzXCI6XCIxYjJhMzRjZWU4MDJjMDkxZThmMVwiLFwic3JjX21vcmVQcm9qZWN0c19qc1wiOlwiMzJkYWYyNTMzZWZhMDk5YjMyY2NcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwicm9iZXJ0YXJuaW5nOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcm9iZXJ0YXJuaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3JvYmVydGFybmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyByb3V0ZSwgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHsgaGFuZGxlTWVudUxpbmtzIH0gZnJvbSAnLi9tZW51JztcblxuLy8gQXN5bmMgbG9hZGluZyBvZiByb3V0ZSBoYW5kbGVycyB3aGVuIHJlcXVlc3RlZFxucm91dGUoJy8nLCAoKSA9PiBpbXBvcnQoJy4vcHJvamVjdHNPdmVydmlldy5qcycpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLmRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcpKTtcbnJvdXRlKCcvcHJvZmlsJywgKCkgPT4gaW1wb3J0KCcuL3Byb2ZpbGUuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvZmlsZSkpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICByb3V0ZXIoKTtcbiAgaGFuZGxlTWVudUxpbmtzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==