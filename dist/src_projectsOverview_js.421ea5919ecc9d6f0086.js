"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_projectsOverview_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/project-overview.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/project-overview.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-VariableFont_slnt,wght.ttf */ "./src/fonts/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
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
/* BREAKPOINTS
=============================================================================================== */
/* FONT SIZE CALCULATIONS WITH CLAMP()
=============================================================================================== */
/* CUSTOM PROPERTIES
=============================================================================================== */
:root {
  --primary-color: #0d0d0d;
  --color-white: #ffffff;
  --color-green: #22b06c;
  --color-grey: #a5a5a5;
  --logo-width: clamp(6.25rem, 3.31vw + 5.38rem, 9.31rem);
  --font-size-nav: clamp(1.25rem, 0.54vw + 1.11rem, 1.75rem);
  --font-size-text: clamp(1.38rem, 0.81vw + 1.16rem, 2.13rem);
  --font-size-h1: clamp(5rem, 6.08vw + 3.4rem, 10.63rem);
  --font-size-h2: clamp(2.5rem, 3.38vw + 1.61rem, 5.63rem);
  --font-size-skills-and-tools: clamp(1.25rem, 0.27vw + 1.18rem, 1.5rem);
  --font-size-skill-tag: clamp(1rem, 0.14vw + 0.96rem, 1.13rem);
  --font-size-visit-live-site: clamp(1rem, 0.14vw + 0.96rem, 1.13rem);
  --font-size-version: clamp(0.88rem, 0.41vw + 0.77rem, 1.25rem);
  --font-weight-regular: 400;
  --font-weight-thin: 300;
  --font-weight-medium: 510;
  --font-weight-semibold: 550;
  --flex-gap-nav: clamp(0.44rem, 2.91vw + -0.33rem, 3.13rem);
  --homepage-description-text-width: clamp(37.5rem, 19.59vw + 32.36rem, 55.63rem);
  --160px-to-80px: clamp(5rem, 5.41vw + 3.58rem, 10rem);
  --120px-to-60px: clamp(3.75rem, 4.05vw + 2.69rem, 7.5rem);
  --80px-to-40px: clamp(2.5rem, 2.7vw + 1.79rem, 5rem);
  --70px-to-35px: clamp(2.19rem, 2.36vw + 1.57rem, 4.38rem);
  --65px-to-45px: clamp(2.81rem, 1.35vw + 2.46rem, 4.06rem);
  --20px-to-12px: clamp(0.75rem, 0.54vw + 0.61rem, 1.25rem);
  --15px-to-10px: clamp(0.63rem, 0.34vw + 0.54rem, 0.94rem);
  --profile-skill-list-text-width: clamp(31.25rem, 6.76vw + 29.48rem, 37.5rem);
  --single-project-text-width: clamp(28.75rem, 22.97vw + 22.72rem, 50rem);
  --single-project-skills-tag-padding1: clamp(0.31rem, 0.68vw + 0.14rem, 0.94rem);
  --single-project-skills-tag-padding2: clamp(0.63rem, 1.01vw + 0.36rem, 1.56rem);
}
@media (max-width: 420px) {
  :root {
    --logo-width: 30px;
  }
}
@media (max-width: 420px) {
  :root {
    --font-size-nav: 18px;
    --font-size-text: 20px;
  }
}
@media (max-width: 420px) {
  :root {
    --font-size-h1: 60px;
    --font-size-h2: 30px;
    --font-size-skills-and-tools: 15px;
    --font-size-skill-tag: 14px;
    --font-size-visit-live-site: 14px;
  }
}
@media (max-width: 420px) {
  :root {
    --single-project-skills-tag-padding1: 3px;
    --single-project-skills-tag-padding2: 6px;
  }
}

/* GENERAL STYLES
=============================================================================================== */
body {
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
  margin: 0;
  padding: 0 28px;
}
@media (max-width: 767px) {
  body {
    padding: 0 20px;
  }
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
  margin: 0 0 var(--70px-to-35px) -10px;
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-regular);
  line-height: 90%;
}
@media (max-width: 420px) {
  h1 {
    margin: 0 0 30px -5px;
  }
}

h2 {
  margin: 0 0 20px -2px;
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

@media (max-width: 376px) {
  .hidden-xxs-half {
    display: none;
  }
}

.visible-xxs-half {
  display: none;
}
@media (max-width: 376px) {
  .visible-xxs-half {
    display: block;
  }
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
  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;
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
  min-width: 80px;
}
@media (max-width: 376px) {
  header img {
    min-width: 31px;
  }
}
header nav {
  font-weight: var(--font-weight-regular);
}
header nav ul {
  display: flex;
  gap: var(--flex-gap-nav);
  margin: 0 0 -5px;
  padding: 0 0 0 30px;
  list-style: none;
  font-size: var(--font-size-nav);
}
@media (max-width: 420px) {
  header nav ul {
    margin: 0 0 -2px;
    padding: 0 0 0 10px;
  }
}
header nav ul li a {
  padding: 8px 15px;
  border-radius: 8px;
}
@media (max-width: 420px) {
  header nav ul li a {
    padding: 4px 7px;
  }
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
  margin: var(--80px-to-40px) auto 0;
  padding: 0;
}
#content .homepage,
#content .profile-page {
  padding: 0 0 var(--160px-to-80px);
}

/* Homepage
=============================================================================================== */
.homepage .description {
  margin: 0 0 var(--70px-to-35px);
}
.homepage .description p {
  max-width: var(--homepage-description-text-width);
}
@media (max-width: 420px) {
  .homepage .description p {
    hyphens: auto;
  }
}

.projects-overview {
  display: flex;
  flex-direction: column;
  gap: var(--120px-to-60px);
  margin: 0;
}
.projects-overview article p {
  max-width: var(--single-project-text-width);
  font-weight: var(--font-weight-thin);
}
@media (max-width: 991px) {
  .projects-overview article figure {
    margin: 0 -28px;
  }
}
@media (max-width: 767px) {
  .projects-overview article figure {
    margin: 0 -20px;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/general-styles.scss","webpack://./src/scss/project-overview.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 376px) {\n    @content;\n  }\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 20px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-regular: 400;\n  --font-weight-thin: 300;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --20px-to-12px: #{fluid(12px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(460px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nbody {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n  margin: 0;\n  padding: 0 28px;\n\n  @include breakpoint-xs() {\n    padding: 0 20px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n","@import 'general-styles';\n\n/* Homepage\n=============================================================================================== */\n.homepage {\n  .description {\n    margin: 0 0 var(--70px-to-35px);\n\n    p {\n      max-width: var(--homepage-description-text-width);\n\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: var(--120px-to-60px);\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: var(--single-project-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n    figure {\n      @include breakpoint-sm() {\n        margin: 0 -28px;\n      }\n      @include breakpoint-xs() {\n        margin: 0 -20px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scss/project-overview.scss":
/*!****************************************!*\
  !*** ./src/scss/project-overview.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_overview_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./project-overview.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/project-overview.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_overview_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_overview_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_overview_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_overview_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _scss_project_overview_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/project-overview.scss */ "./src/scss/project-overview.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");




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
      const urlSaveProjectName = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.convertToURLSaveName)(project.projectName);

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
      const urlSaveProjectName = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.convertToURLSaveName)(projectData.projectName);

      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.pushURLAndCallRouter)(urlSaveProjectName);
    })
  );
};

/* 
Calls the function that generates the HTML for the Project Overview,
sets its output to display in the #content div and activates the
links that wrap each project.
*/
const displayProjectOverview = async function () {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.loadData)();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = createProjectsOverview(data.projects);

    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.setContent)('content', projectsOverviewHTML);
    handleClickOnProjectTeasers(data.projects);
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RzT3ZlcnZpZXdfanMuNDIxZWE1OTE5ZWNjOWQ2ZjAwODYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhKQUE0RDtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNElBQTRJLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFB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QzFCdkM7QUFDSjtBQUN5RDs7QUFFM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNFQUFvQjs7QUFFckQsMEJBQTBCLG1CQUFtQixRQUFRLFdBQVc7QUFDaEU7QUFDQTtBQUNBLGtCQUFrQixjQUFjLFNBQVMsb0JBQW9CO0FBQzdEO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEMsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSw0RUFBNEUsZ0JBQWdCLGlDQUFpQyxhQUFhO0FBQzFJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzRUFBb0I7O0FBRXJELE1BQU0sc0VBQW9CO0FBQzFCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFCQUFxQiwrQ0FBUTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQVU7QUFDZDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Nzcy9wcm9qZWN0LW92ZXJ2aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Njc3MvcHJvamVjdC1vdmVydmlldy5zY3NzPzVjNGUiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Byb2plY3RzT3ZlcnZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGT05UIEZBQ0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZS12YXJpYXRpb25zXCIpO1xufVxuLyogQlJFQUtQT0lOVFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBGT05UIFNJWkUgQ0FMQ1VMQVRJT05TIFdJVEggQ0xBTVAoKVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIENVU1RPTSBQUk9QRVJUSUVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0tY29sb3ItZ3JlZW46ICMyMmIwNmM7XG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcbiAgLS1sb2dvLXdpZHRoOiBjbGFtcCg2LjI1cmVtLCAzLjMxdncgKyA1LjM4cmVtLCA5LjMxcmVtKTtcbiAgLS1mb250LXNpemUtbmF2OiBjbGFtcCgxLjI1cmVtLCAwLjU0dncgKyAxLjExcmVtLCAxLjc1cmVtKTtcbiAgLS1mb250LXNpemUtdGV4dDogY2xhbXAoMS4zOHJlbSwgMC44MXZ3ICsgMS4xNnJlbSwgMi4xM3JlbSk7XG4gIC0tZm9udC1zaXplLWgxOiBjbGFtcCg1cmVtLCA2LjA4dncgKyAzLjRyZW0sIDEwLjYzcmVtKTtcbiAgLS1mb250LXNpemUtaDI6IGNsYW1wKDIuNXJlbSwgMy4zOHZ3ICsgMS42MXJlbSwgNS42M3JlbSk7XG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IGNsYW1wKDEuMjVyZW0sIDAuMjd2dyArIDEuMThyZW0sIDEuNXJlbSk7XG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogY2xhbXAoMXJlbSwgMC4xNHZ3ICsgMC45NnJlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogY2xhbXAoMXJlbSwgMC4xNHZ3ICsgMC45NnJlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZlcnNpb246IGNsYW1wKDAuODhyZW0sIDAuNDF2dyArIDAuNzdyZW0sIDEuMjVyZW0pO1xuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiAgLS1mb250LXdlaWdodC10aGluOiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MTA7XG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcbiAgLS1mbGV4LWdhcC1uYXY6IGNsYW1wKDAuNDRyZW0sIDIuOTF2dyArIC0wLjMzcmVtLCAzLjEzcmVtKTtcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiBjbGFtcCgzNy41cmVtLCAxOS41OXZ3ICsgMzIuMzZyZW0sIDU1LjYzcmVtKTtcbiAgLS0xNjBweC10by04MHB4OiBjbGFtcCg1cmVtLCA1LjQxdncgKyAzLjU4cmVtLCAxMHJlbSk7XG4gIC0tMTIwcHgtdG8tNjBweDogY2xhbXAoMy43NXJlbSwgNC4wNXZ3ICsgMi42OXJlbSwgNy41cmVtKTtcbiAgLS04MHB4LXRvLTQwcHg6IGNsYW1wKDIuNXJlbSwgMi43dncgKyAxLjc5cmVtLCA1cmVtKTtcbiAgLS03MHB4LXRvLTM1cHg6IGNsYW1wKDIuMTlyZW0sIDIuMzZ2dyArIDEuNTdyZW0sIDQuMzhyZW0pO1xuICAtLTY1cHgtdG8tNDVweDogY2xhbXAoMi44MXJlbSwgMS4zNXZ3ICsgMi40NnJlbSwgNC4wNnJlbSk7XG4gIC0tMjBweC10by0xMnB4OiBjbGFtcCgwLjc1cmVtLCAwLjU0dncgKyAwLjYxcmVtLCAxLjI1cmVtKTtcbiAgLS0xNXB4LXRvLTEwcHg6IGNsYW1wKDAuNjNyZW0sIDAuMzR2dyArIDAuNTRyZW0sIDAuOTRyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi43NnZ3ICsgMjkuNDhyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDI4Ljc1cmVtLCAyMi45N3Z3ICsgMjIuNzJyZW0sIDUwcmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiBjbGFtcCgwLjMxcmVtLCAwLjY4dncgKyAwLjE0cmVtLCAwLjk0cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1sb2dvLXdpZHRoOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLW5hdjogMThweDtcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xuICAgIC0tZm9udC1zaXplLWgyOiAzMHB4O1xuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xuICAgIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcbiAgfVxufVxuXG4vKiBHRU5FUkFMIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMjhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCkgLTEwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBsaW5lLWhlaWdodDogOTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4IC01cHg7XG4gIH1cbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxucCArIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAuaGlkZGVuLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi52aXNpYmxlLXh4cy1oYWxmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAudmlzaWJsZS14eHMtaGFsZiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLyogVFJBTlNJVElPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udHJhbnNpdGlvbi1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG59XG5cbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xufVxuXG4vKiBMT0dPICsgTkFWSUdBVElPTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cbmhlYWRlciBpbWcge1xuICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWluLXdpZHRoOiAzMXB4O1xuICB9XG59XG5oZWFkZXIgbmF2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcbiAgbWFyZ2luOiAwIDAgLTVweDtcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIHtcbiAgICBtYXJnaW46IDAgMCAtMnB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xuICB9XG59XG5oZWFkZXIgbmF2IHVsIGxpIGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLyogR0VORVJBTCBTVFlMRVMgRk9SICNDT05URU5UXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiB2YXIoLS04MHB4LXRvLTQwcHgpIGF1dG8gMDtcbiAgcGFkZGluZzogMDtcbn1cbiNjb250ZW50IC5ob21lcGFnZSxcbiNjb250ZW50IC5wcm9maWxlLXBhZ2Uge1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XG59XG5cbi8qIEhvbWVwYWdlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmhvbWVwYWdlIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCk7XG59XG4uaG9tZXBhZ2UgLmRlc2NyaXB0aW9uIHAge1xuICBtYXgtd2lkdGg6IHZhcigtLWhvbWVwYWdlLWRlc2NyaXB0aW9uLXRleHQtd2lkdGgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5ob21lcGFnZSAuZGVzY3JpcHRpb24gcCB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufVxuXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IHZhcigtLTEyMHB4LXRvLTYwcHgpO1xuICBtYXJnaW46IDA7XG59XG4ucHJvamVjdHMtb3ZlcnZpZXcgYXJ0aWNsZSBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wcm9qZWN0cy1vdmVydmlldyBhcnRpY2xlIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwIC0yOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByb2plY3RzLW92ZXJ2aWV3IGFydGljbGUgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgLTIwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dlbmVyYWwtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3Byb2plY3Qtb3ZlcnZpZXcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtpR0FBQTtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwRUFBQTtBQ0RGO0FESUE7aUdBQUE7QUEwRUE7aUdBQUE7QUFtQ0E7aUdBQUE7QUFFQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsdURBQUE7RUFNQSwwREFBQTtFQUNBLDJEQUFBO0VBT0Esc0RBQUE7RUFDQSx3REFBQTtFQUNBLHNFQUFBO0VBQ0EsNkRBQUE7RUFDQSxtRUFBQTtFQUNBLDhEQUFBO0VBVUEsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFFQSwwREFBQTtFQUVBLCtFQUFBO0VBRUEscURBQUE7RUFDQSx5REFBQTtFQUNBLG9EQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFFQSw0RUFBQTtFQUVBLHVFQUFBO0VBQ0EsK0VBQUE7RUFDQSwrRUFBQTtBQ3JJRjtBRDZCRTtFQWdERjtJQVNJLGtCQUFBO0VDbEZGO0FBQ0Y7QUR3QkU7RUFnREY7SUFnQkkscUJBQUE7SUFDQSxzQkFBQTtFQ3BGRjtBQUNGO0FEa0JFO0VBZ0RGO0lBNEJJLG9CQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsaUNBQUE7RUMxRkY7QUFDRjtBRFNFO0VBZ0RGO0lBMkRJLHlDQUFBO0lBQ0EseUNBQUE7RUNoSEY7QUFDRjs7QURtSEE7aUdBQUE7QUFFQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ2hIRjtBRDlCRTtFQTBJRjtJQU9JLGVBQUE7RUMvR0Y7QUFDRjs7QURrSEE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FDL0dGOztBRGtIQTs7RUFFRSxTQUFBO0FDL0dGOztBRGtIQTtFQUNFLGdCQUFBO0VBQ0EscUNBQUE7RUFFQSw4QkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7QUNoSEY7QUQ3QkU7RUF1SUY7SUFTSSxxQkFBQTtFQy9HRjtBQUNGOztBRGtIQTtFQUNFLHFCQUFBO0VBRUEsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0FDaEhGOztBRG1IQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNqSEY7O0FEb0hBO0VBQ0UsZ0JBQUE7RUFDQSxzQ0FBQTtBQ2pIRjs7QURvSEE7RUFDRSxnQkFBQTtBQ2pIRjs7QURvSEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ2pIRjs7QURvSEE7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDakhGOztBRGhFRTtFQW9MRjtJQUVJLGFBQUE7RUNqSEY7QUFDRjs7QURtSEE7RUFDRSxhQUFBO0FDaEhGO0FEMUVFO0VBeUxGO0lBR0ksY0FBQTtFQzlHRjtBQUNGOztBRGlIQTtpR0FBQTtBQUdBO0VBQ0UsVUFBQTtFQUNBLGtDQUFBO0FDL0dGOztBRG1IQTtFQUNFLFVBQUE7QUNoSEY7O0FEb0hBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0VBQUE7QUNqSEY7O0FEcUhBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0VBQUE7QUNsSEY7O0FEc0hBO0VBQ0UsVUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0VBQUE7QUNuSEY7O0FEc0hBO2lHQUFBO0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7QUNwSEY7QURzSEU7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUNwSEo7QUQxSEU7RUE0T0E7SUFLSSxlQUFBO0VDbkhKO0FBQ0Y7QURzSEU7RUFDRSx1Q0FBQTtBQ3BISjtBRHNISTtFQUNFLGFBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLCtCQUFBO0FDdEhOO0FEaEpFO0VBOFBFO0lBV0ksZ0JBQUE7SUFDQSxtQkFBQTtFQ3JITjtBQUNGO0FEdUhNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ3JIUjtBRDFKRTtFQTZRSTtJQUtJLGdCQUFBO0VDcEhSO0FBQ0Y7QURzSFE7RUFDRSxxQ0FBQTtBQ3BIVjs7QUQySEE7aUdBQUE7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FDekhGO0FEMkhFOztFQUVFLGlDQUFBO0FDekhKOztBQXpQQTtpR0FBQTtBQUdFO0VBQ0UsK0JBQUE7QUEyUEo7QUF6UEk7RUFDRSxpREFBQTtBQTJQTjtBRHpMRTtFQ25FRTtJQUlJLGFBQUE7RUE0UE47QUFDRjs7QUF0UEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUVBLFNBQUE7QUF3UEY7QUFyUEk7RUFDRSwyQ0FBQTtFQUNBLG9DQUFBO0FBdVBOO0FEN09FO0VDUkU7SUFFSSxlQUFBO0VBdVBOO0FBQ0Y7QUR0T0U7RUNwQkU7SUFLSSxlQUFBO0VBeVBOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnc2FzczptYXRoJztcXG5cXG4vKiBGT05UIEZBQ0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwIDkwMDsgLy8gU3VwcG9ydHMgYSByYW5nZSBmcm9tIFRoaW4gKDEwMCkgdG8gQmxhY2sgKDkwMClcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLy8gT3B0aW9uYWwgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZS12YXJpYXRpb25zJyk7XFxufVxcblxcbi8qIEJSRUFLUE9JTlRTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AbWl4aW4gYnJlYWtwb2ludC1sZyB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMTQyNHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4tbGcge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtbWQge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExOTlweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLW1kIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtc20ge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4tc20ge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14cyB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi14cyB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXhzLWhhbGYge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4teHMtaGFsZiB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNDIxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXh4cyB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXh4cy1oYWxmIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuLyogRk9OVCBTSVpFIENBTENVTEFUSU9OUyBXSVRIIENMQU1QKClcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiRkZWZhdWx0LW1pbi1icDogNDIwcHg7XFxuJGRlZmF1bHQtbWF4LWJwOiAxOTAwcHg7XFxuXFxuQGZ1bmN0aW9uIHJvdW5kKCRudW1iZXIsICRkZWNpbWFsczogMCkge1xcbiAgJG46IDE7XFxuICBAaWYgJGRlY2ltYWxzID4gMCB7XFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGRlY2ltYWxzIHtcXG4gICAgICAkbjogJG4gKiAxMDtcXG4gICAgfVxcbiAgfVxcbiAgQHJldHVybiBtYXRoLmRpdihtYXRoLnJvdW5kKCRudW1iZXIgKiAkbiksICRuKTtcXG59XFxuXFxuQGZ1bmN0aW9uIHB4LXRvLXJlbSgkcHgpIHtcXG4gICRyZW1zOiBtYXRoLmRpdigkcHgsIDE2cHgpICogMXJlbTtcXG4gIEByZXR1cm4gJHJlbXM7XFxufVxcblxcbkBmdW5jdGlvbiBmbHVpZChcXG4gICRtaW4tc2l6ZSxcXG4gICRtYXgtc2l6ZSxcXG4gICRtaW4tYnJlYWtwb2ludDogJGRlZmF1bHQtbWluLWJwLFxcbiAgJG1heC1icmVha3BvaW50OiAkZGVmYXVsdC1tYXgtYnAsXFxuICAkdW5pdDogdndcXG4pIHtcXG4gICRzbG9wZTogbWF0aC5kaXYoJG1heC1zaXplIC0gJG1pbi1zaXplLCAkbWF4LWJyZWFrcG9pbnQgLSAkbWluLWJyZWFrcG9pbnQpO1xcbiAgJHNsb3BlLXRvLXVuaXQ6IHJvdW5kKCRzbG9wZSAqIDEwMCwgMik7XFxuICAkaW50ZXJjZXB0LXJlbTogcm91bmQocHgtdG8tcmVtKCRtaW4tc2l6ZSAtICRzbG9wZSAqICRtaW4tYnJlYWtwb2ludCksIDIpO1xcbiAgJG1pbi1zaXplLXJlbTogcm91bmQocHgtdG8tcmVtKCRtaW4tc2l6ZSksIDIpO1xcbiAgJG1heC1zaXplLXJlbTogcm91bmQocHgtdG8tcmVtKCRtYXgtc2l6ZSksIDIpO1xcbiAgQHJldHVybiBjbGFtcCgjeyRtaW4tc2l6ZS1yZW19LCAjeyRzbG9wZS10by11bml0fSN7JHVuaXR9ICsgI3skaW50ZXJjZXB0LXJlbX0sICN7JG1heC1zaXplLXJlbX0pO1xcbn1cXG5cXG4vKiBDVVNUT00gUFJPUEVSVElFU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xcbiAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcXG4gIC0tY29sb3ItZ3JlZW46ICMyMmIwNmM7XFxuICAtLWNvbG9yLWdyZXk6ICNhNWE1YTU7XFxuXFxuICAtLWxvZ28td2lkdGg6ICN7Zmx1aWQoMTAwcHgsIDE0OXB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1sb2dvLXdpZHRoOiAzMHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXNpemUtbmF2OiAje2ZsdWlkKDIwcHgsIDI4cHgpfTtcXG4gIC0tZm9udC1zaXplLXRleHQ6ICN7Zmx1aWQoMjJweCwgMzRweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tZm9udC1zaXplLW5hdjogMThweDtcXG4gICAgLS1mb250LXNpemUtdGV4dDogMjBweDtcXG4gIH1cXG5cXG4gIC0tZm9udC1zaXplLWgxOiAje2ZsdWlkKDgwcHgsIDE3MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1oMjogI3tmbHVpZCg0MHB4LCA5MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiAje2ZsdWlkKDIwcHgsIDI0cHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmVyc2lvbjogI3tmbHVpZCgxNHB4LCAyMHB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1mb250LXNpemUtaDE6IDYwcHg7XFxuICAgIC0tZm9udC1zaXplLWgyOiAzMHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiAxNXB4O1xcbiAgICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IDE0cHg7XFxuICAgIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogMTRweDtcXG4gIH1cXG5cXG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiAgLS1mb250LXdlaWdodC10aGluOiAzMDA7XFxuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTEwO1xcbiAgLS1mb250LXdlaWdodC1zZW1pYm9sZDogNTUwO1xcblxcbiAgLS1mbGV4LWdhcC1uYXY6ICN7Zmx1aWQoN3B4LCA1MHB4KX07XFxuXFxuICAtLWhvbWVwYWdlLWRlc2NyaXB0aW9uLXRleHQtd2lkdGg6ICN7Zmx1aWQoNjAwcHgsIDg5MHB4KX07XFxuXFxuICAtLTE2MHB4LXRvLTgwcHg6ICN7Zmx1aWQoODBweCwgMTYwcHgpfTtcXG4gIC0tMTIwcHgtdG8tNjBweDogI3tmbHVpZCg2MHB4LCAxMjBweCl9O1xcbiAgLS04MHB4LXRvLTQwcHg6ICN7Zmx1aWQoNDBweCwgODBweCl9O1xcbiAgLS03MHB4LXRvLTM1cHg6ICN7Zmx1aWQoMzVweCwgNzBweCl9O1xcbiAgLS02NXB4LXRvLTQ1cHg6ICN7Zmx1aWQoNDVweCwgNjVweCl9O1xcbiAgLS0yMHB4LXRvLTEycHg6ICN7Zmx1aWQoMTJweCwgMjBweCl9O1xcbiAgLS0xNXB4LXRvLTEwcHg6ICN7Zmx1aWQoMTBweCwgMTVweCl9O1xcblxcbiAgLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aDogI3tmbHVpZCg1MDBweCwgNjAwcHgpfTtcXG5cXG4gIC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aDogI3tmbHVpZCg0NjBweCwgODAwcHgpfTtcXG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogI3tmbHVpZCg1cHgsIDE1cHgpfTtcXG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogI3tmbHVpZCgxMHB4LCAyNXB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAzcHg7XFxuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogNnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDI4cHg7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzKCkge1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgMCB2YXIoLS03MHB4LXRvLTM1cHgpIC0xMHB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgbGluZS1oZWlnaHQ6IDkwJTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICBtYXJnaW46IDAgMCAzMHB4IC01cHg7XFxuICB9XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMCAwIDIwcHggLTJweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMjBweCAwIDA7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG59XFxuXFxucCArIHAge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGlkZGVuLXh4cy1oYWxmIHtcXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzLWhhbGYoKSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVxcbi52aXNpYmxlLXh4cy1oYWxmIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLyogVFJBTlNJVElPTlNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8vIEluaXRpYWwgc3RhdGUgb2Ygc2l0ZSB0aXRsZSBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xcbn1cXG5cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNraWxscy1hbmQtdG9vbHMgZGl2IGJlZm9yZSB0cmFuc2l0aW9uXFxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIHNpdGUgdGl0bGVcXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBza2lsbHMgbGlzdCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBmaXJzdCBtZWRpYSBlbGVtZW50IG9uIHByb2plY3QgcGFnZXNcXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjQ1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40NXM7XFxufVxcblxcbi8qIExPR08gKyBOQVZJR0FUSU9OXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgICBtaW4td2lkdGg6IDMxcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xcblxcbiAgICAgIG1hcmdpbjogMCAwIC01cHg7XFxuICAgICAgcGFkZGluZzogMCAwIDAgMzBweDtcXG5cXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgMCAtMnB4O1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHggN3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIC5ob21lcGFnZSxcXG4gIC5wcm9maWxlLXBhZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAnZ2VuZXJhbC1zdHlsZXMnO1xcblxcbi8qIEhvbWVwYWdlXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4uaG9tZXBhZ2Uge1xcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KTtcXG5cXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoKTtcXG5cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIGh5cGhlbnM6IGF1dG87XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIFByb2plY3Qgb3ZlcnZpZXdcXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IHZhcigtLTEyMHB4LXRvLTYwcHgpO1xcblxcbiAgbWFyZ2luOiAwO1xcblxcbiAgYXJ0aWNsZSB7XFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICB9XFxuICAgIGZpZ3VyZSB7XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC1zbSgpIHtcXG4gICAgICAgIG1hcmdpbjogMCAtMjhweDtcXG4gICAgICB9XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgICAgIG1hcmdpbjogMCAtMjBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1vdmVydmlldy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1vdmVydmlldy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICcuL3Njc3MvcHJvamVjdC1vdmVydmlldy5zY3NzJztcbmltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNvbnZlcnRUb1VSTFNhdmVOYW1lLCBwdXNoVVJMQW5kQ2FsbFJvdXRlciwgc2V0Q29udGVudCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuLypcbkdlbmVyYXRlcyB0aGUgSFRNTCBjb2RlIGZvciBhIHByb2plY3Qgb3ZlcnZpZXcgcGFnZS5cblRoZSBmdW5jdGlvbiBpdGVyYXRlcyBvdmVyIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cyBhbmRcbmdlbmVyYXRlcyBIVE1MIGNvZGUgZm9yIHRoZSBwcm9wZXJ0aWVzIG9mIHRob3NlIG9iamVjdHMuXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RzT3ZlcnZpZXcgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgLy8gQ2hlY2sgd2hldGhlciBwcm9qZWN0IGRhdGEgaXMgYXZhaWxhYmxlXG4gIGlmICghcHJvamVjdHMpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwcm9qZWN0cyBkYXRhIGF2YWlsYWJsZSB0byBjcmVhdGUgb3ZlcnZpZXcuJyk7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgSFRNTCBjb2RlIGZvciB0aGUgZGVzY3JpcHRpb24gdGV4dCBvZiB0aGUgaG9tZXBhZ2UgdGl0bGVcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gYDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPjxwPkljaCBiaW4gUm9iZXJ0IEFybmluZywgZWluIFVJL1VYIERlc2lnbmVyIG1pdCAxMCBKYWhyZW4gRXJmYWhydW5nIHVuZCB1bWZhc3NlbmRlciBFeHBlcnRpc2UgaW4gSFRNTC9DU1Mgc293aWUgc29saWRlbiBHcnVuZGtlbm50bmlzc2VuIGluIEphdmFTY3JpcHQuPC9wPjwvZGl2PmA7XG5cbiAgLy8gR2VuZXJhdGUgSFRNTCBjb2RlIGZvciBkaXNwbGF5aW5nIGVhY2ggcHJvamVjdCB1bmRlcm5lYXRoIGVhY2ggb3RoZXJcbiAgY29uc3Qgb3ZlcnZpZXdIVE1MID0gcHJvamVjdHNcbiAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAvLyBFbmNvZGUgdGhlIFwicHJvamVjdE5hbWVcIiB2YWx1ZSB0byBzYWZlbHkgaW5jbHVkZSBpdCBpbiB0aGUgVVJMIHBhdGhcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgICByZXR1cm4gYDxhIGhyZWY9XCIvJHt1cmxTYXZlUHJvamVjdE5hbWV9XCIgaWQ9XCIke3Byb2plY3QuaWR9XCI+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgIDxmaWd1cmU+XG4gICAgICA8aW1nIHNyYz1cIiR7cHJvamVjdC5pbWFnZX1cIiBhbHQ9XCIke3Byb2plY3QucHJvamVjdE5hbWV9XCI+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICAgIDxoMz4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9oMz5cbiAgICAgIDxwPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8L2E+YDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJob21lcGFnZVwiPjxoMSBjbGFzcz1cInNpdGUtdGl0bGVcIj5VSS9VWCBEZXNpZ25lcjwvaDE+JHtkZXNjcmlwdGlvblRleHR9PGRpdiBjbGFzcz1cInByb2plY3RzLW92ZXJ2aWV3XCI+JHtvdmVydmlld0hUTUx9PC9kaXY+PC9kaXY+YDtcbn07XG5cbi8qXG5Mb29rcyBmb3IgYSBwcm9qZWN0IHRoYXQgbWF0Y2hlcyBhIGdpdmVuIElEIHdpdGhpbiBhbiBhcnJheSBvZiBwcm9qZWN0IG9iamVjdHMuXG5UaGUgSUQgaXMgYSBwcm9wZXJ0eSBvZiBldmVyeSBwcm9qZWN0IG9iamVjdCBpbiB0aGUgYXJyYXkuXG4qL1xuY29uc3QgZmluZFByb2plY3RCeUlkID0gZnVuY3Rpb24gKHByb2plY3RBcnJheSwgaWQpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnJheS5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IE51bWJlcihpZCkpO1xuXG4gIHJldHVybiBwcm9qZWN0QXJyYXlbcHJvamVjdEluZGV4XTtcbn07XG5cbi8qXG5BZGRzIGEgY2xpY2sgZXZlbnQgdG8gdGhlIHByb2plY3QgdGVhc2VycyBvbiB0aGUgcHJvamVjdCBvdmVydmlldyBwYWdlLlxuVGhlIGV2ZW50IHRyaWVzIHRvIG1hdGNoIHRoZSBpZCBvZiB0aGUgY2xpY2tlZCB0ZWFzZXIgd2l0aCBhIHByb2plY3QncyBJRFxuZnJvbSBhIGdpdmVuIFtwcm9qZWN0c10gYXJyYXksIGluc2VydHMgdGhhdCBwcm9qZWN0IG5hbWUgaW4gdGhlIHVybCBhbmQgbG9kc1xudGhlIHJvdXRlciB0byBoYW5kbGUgdGhlIGxvYWRpbmcgb2YgdGhlIGNvbnRlbnQuXG4qL1xuZXhwb3J0IGNvbnN0IGhhbmRsZUNsaWNrT25Qcm9qZWN0VGVhc2VycyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICBjb25zdCBhbGxQcm9qZWN0VGVhc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RzLW92ZXJ2aWV3IGEnKTtcblxuICBhbGxQcm9qZWN0VGVhc2VyLmZvckVhY2goKHRlYXNlcikgPT5cbiAgICB0ZWFzZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgcHJvamVjdElkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgY29uc3QgcHJvamVjdERhdGEgPSBmaW5kUHJvamVjdEJ5SWQocHJvamVjdHMsIHByb2plY3RJZCk7XG4gICAgICBjb25zdCB1cmxTYXZlUHJvamVjdE5hbWUgPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0RGF0YS5wcm9qZWN0TmFtZSk7XG5cbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKHVybFNhdmVQcm9qZWN0TmFtZSk7XG4gICAgfSlcbiAgKTtcbn07XG5cbi8qIFxuQ2FsbHMgdGhlIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIHRoZSBIVE1MIGZvciB0aGUgUHJvamVjdCBPdmVydmlldyxcbnNldHMgaXRzIG91dHB1dCB0byBkaXNwbGF5IGluIHRoZSAjY29udGVudCBkaXYgYW5kIGFjdGl2YXRlcyB0aGVcbmxpbmtzIHRoYXQgd3JhcCBlYWNoIHByb2plY3QuXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0Rpc3BsYXlpbmcgcHJvamVjdHMuLi4nKTtcbiAgICBjb25zdCBwcm9qZWN0c092ZXJ2aWV3SFRNTCA9IGNyZWF0ZVByb2plY3RzT3ZlcnZpZXcoZGF0YS5wcm9qZWN0cyk7XG5cbiAgICBzZXRDb250ZW50KCdjb250ZW50JywgcHJvamVjdHNPdmVydmlld0hUTUwpO1xuICAgIGhhbmRsZUNsaWNrT25Qcm9qZWN0VGVhc2VycyhkYXRhLnByb2plY3RzKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==