/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/project-page.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/project-page.scss ***!
  \*****************************************************************************************************************/
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

/* LAZY LOADING
=============================================================================================== */
.media {
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.media-loaded {
  opacity: 1;
}

/* SINGLE PROJECT PAGE
=============================================================================================== */
.single-project .project-title-and-link h2 {
  display: inline;
  margin-right: 30px;
  margin-bottom: 0;
}
@media (max-width: 600px) {
  .single-project .project-title-and-link h2 {
    hyphens: auto;
  }
}
@media (max-width: 420px) {
  .single-project .project-title-and-link h2 {
    margin-right: 20px;
  }
}
.single-project .project-title-and-link a {
  display: inline-flex;
  gap: 8px;
  font-size: var(--font-size-visit-live-site);
}
.single-project .project-title-and-link span {
  flex-shrink: 0;
  margin: 6px 0 0;
}
.single-project .project-title-and-link img {
  max-width: 18px;
}
.single-project .skills-and-tools {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 5px;
  margin: var(--15px-to-10px) 0 var(--65px-to-45px);
  padding: var(--20px-to-12px) 0 0;
  border-top: 2px solid var(--primary-color);
}
@media (max-width: 420px) {
  .single-project .skills-and-tools {
    margin: 11px 0 30px;
  }
}
.single-project .skills-and-tools span {
  margin-right: 5px;
  font-size: var(--font-size-skills-and-tools);
  font-weight: var(--font-weight-medium);
}
.single-project .skills-and-tools ul {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}
.single-project .skills-and-tools ul .skill-tag {
  padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);
  font-size: var(--font-size-skill-tag);
  font-weight: var(--font-weight-regular);
  border: 2px solid var(--primary-color);
  border-radius: 50px;
}
@media (max-width: 420px) {
  .single-project .skills-and-tools ul .skill-tag {
    border-width: 1px;
  }
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
  padding: var(--120px-to-60px) 0 0;
}
.single-project .text + .comment p {
  padding: 0;
}
.single-project .text {
  padding: var(--120px-to-60px) 0;
}
.single-project .text p {
  max-width: var(--single-project-text-width);
}
@media (max-width: 420px) {
  .single-project .text p {
    hyphens: auto;
  }
}
.single-project .media-elements {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
@media (max-width: 420px) {
  .single-project .media-elements {
    gap: 7.5px;
  }
}
@media (max-width: 991px) {
  .single-project .media-elements > .video,
  .single-project .media-elements > .image,
  .single-project .media-elements > .two-column {
    margin: 0 -28px;
  }
}
@media (max-width: 767px) {
  .single-project .media-elements > .video,
  .single-project .media-elements > .image,
  .single-project .media-elements > .two-column {
    margin: 0 -20px;
  }
}
.single-project .two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
@media (max-width: 991px) {
  .single-project .more-projects {
    margin: 0 -28px;
  }
}
@media (max-width: 767px) {
  .single-project .more-projects {
    margin: 0 -20px;
  }
}
.single-project .more-projects h2 {
  font-weight: var(--font-weight-regular);
  margin: var(--120px-to-60px) 0;
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
@media (max-width: 420px) {
  .single-project .more-projects .more-projects-wrapper {
    gap: 7.5px;
  }
}
.single-project .more-projects .more-projects-wrapper div {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.single-project .all-projects-link {
  padding: var(--160px-to-80px) 0;
}
.single-project .all-projects-link a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0 0 20px;
}
.single-project .all-projects-link a h2 {
  margin: 0;
  font-weight: var(--font-weight-regular);
}
.single-project .all-projects-link a img {
  width: var(--80px-to-40px);
}
@media (max-width: 420px) {
  .single-project .all-projects-link a img {
    width: 30px;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/general-styles.scss","webpack://./src/scss/project-page.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 376px) {\n    @content;\n  }\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 20px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-regular: 400;\n  --font-weight-thin: 300;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --20px-to-12px: #{fluid(12px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(460px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nbody {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n  margin: 0;\n  padding: 0 28px;\n\n  @include breakpoint-xs() {\n    padding: 0 20px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n","@import 'general-styles';\n\n/* LAZY LOADING\n=============================================================================================== */\n// Initial state of media-items with opacity set to 0\n.media {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n\n// Class to be added once the media is loaded\n.media-loaded {\n  opacity: 1;\n}\n\n/* SINGLE PROJECT PAGE\n=============================================================================================== */\n.single-project {\n  .project-title-and-link {\n    h2 {\n      display: inline;\n      margin-right: 30px;\n      margin-bottom: 0;\n\n      @include breakpoint-xs-half() {\n        hyphens: auto;\n      }\n      @include breakpoint-xxs() {\n        margin-right: 20px;\n      }\n    }\n\n    a {\n      display: inline-flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    span {\n      flex-shrink: 0;\n      margin: 6px 0 0;\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: baseline;\n    justify-content: flex-start;\n    gap: 5px;\n\n    margin: var(--15px-to-10px) 0 var(--65px-to-45px);\n    padding: var(--20px-to-12px) 0 0;\n\n    border-top: 2px solid var(--primary-color);\n\n    @include breakpoint-xxs() {\n      margin: 11px 0 30px;\n    }\n\n    span {\n      margin-right: 5px;\n      font-size: var(--font-size-skills-and-tools);\n      font-weight: var(--font-weight-medium);\n    }\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: var(--font-weight-regular);\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n\n        @include breakpoint-xxs() {\n          border-width: 1px;\n        }\n      }\n    }\n  }\n\n  .new,\n  .old {\n    position: relative;\n    border: 4px solid var(--color-green);\n    z-index: 0;\n\n    &:before {\n      content: 'Neues Design';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      padding: 7px 16px 7px 13px;\n\n      font-size: var(--font-size-version);\n      font-weight: var(--font-weight-semibold);\n      color: var(--color-white);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      background-color: var(--color-green);\n      z-index: 2;\n    }\n  }\n\n  .old {\n    border-color: var(--color-grey);\n\n    &:before {\n      content: 'Altes Design';\n      background-color: var(--color-grey);\n    }\n  }\n\n  .comment {\n    p {\n      font-size: var(--font-size-skills-and-tools);\n      padding: var(--120px-to-60px) 0 0;\n    }\n  }\n\n  .text + .comment {\n    p {\n      padding: 0;\n    }\n  }\n\n  .text {\n    padding: var(--120px-to-60px) 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n\n  // Wraps all elements on a project page\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    @include breakpoint-xxs() {\n      gap: 7.5px;\n    }\n\n    > .video,\n    > .image,\n    > .two-column {\n      @include breakpoint-sm() {\n        margin: 0 -28px;\n      }\n      @include breakpoint-xs() {\n        margin: 0 -20px;\n      }\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  // Shows previous and next project\n  .more-projects {\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n    }\n    @include breakpoint-xs() {\n      margin: 0 -20px;\n    }\n\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: var(--120px-to-60px) 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      @include breakpoint-xxs() {\n        gap: 7.5px;\n      }\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n\n  .all-projects-link {\n    padding: var(--160px-to-80px) 0;\n\n    a {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 20px;\n\n      padding: 0 0 20px;\n\n      h2 {\n        margin: 0;\n        font-weight: var(--font-weight-regular);\n      }\n\n      img {\n        width: var(--80px-to-40px);\n\n        @include breakpoint-xxs() {\n          width: 30px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/scss/project-page.scss":
/*!************************************!*\
  !*** ./src/scss/project-page.scss ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./project-page.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/project-page.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_page_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  const projectSkillsAndToolsLabel = document.querySelector(
    '.single-project .skills-and-tools span'
  );
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

    if (projectSkillsAndToolsLabel) {
      projectSkillsAndToolsLabel.classList.add('transition-in');
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
/* harmony import */ var _singleProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singleProject.js */ "./src/singleProject.js");


/* 
An object that contains static paths, as well as a handler and a title associated with it
*/
const routes = {};

/* 
Creates an object with the properties "handler" and "title" and
assigns it as value to the key "path" in the { routes } object
*/
const route = function (path, handlerFunction, title) {
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
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./helperFunctions.js */ "./src/helperFunctions.js")).then((module) => {
          module.setupPage();
        });
      })
      .catch((error) => {
        console.error('Failed to load route handler', error);
      });
  } else {
    // Path is not registered or has no handler
    // Check whether the path corresponds to a project
    Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./singleProject.js */ "./src/singleProject.js")).then((module) => {
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
            Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./moreProjects.js */ "./src/moreProjects.js")).then((moreProjectsModule) => {
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
/* harmony export */   handleAllProjectsLink: () => (/* binding */ handleAllProjectsLink),
/* harmony export */   loadSingleProject: () => (/* binding */ loadSingleProject),
/* harmony export */   showSingleProject: () => (/* binding */ showSingleProject)
/* harmony export */ });
/* harmony import */ var _scss_project_page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/project-page.scss */ "./src/scss/project-page.scss");
/* harmony import */ var _img_external_link_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/external-link.svg */ "./src/img/external-link.svg");
/* harmony import */ var _img_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/arrow-left.svg */ "./src/img/arrow-left.svg");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _moreProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moreProjects */ "./src/moreProjects.js");







/* 
Bundles and returns all of the HTML code for a single project.
Most of the HTML code is generated by the functions beneath this one.
*/
const showSingleProject = async function (project) {
  // Check whether project data is available
  if (!project) {
    console.error('No project data available.');
    return '';
  }

  // Generate the HTML code for the project page
  const projectLink = generateProjectLink(project);
  const usedSkills = generateUsedSkills(project);
  const projectMediaElements = generateProjectMediaElements(project);
  const moreProjects = await (0,_moreProjects__WEBPACK_IMPORTED_MODULE_5__.showMoreProjects)(project);
  const allProjectsLink = generateAllProjectsLink();

  return `<div id="${project.id}" class="single-project"><div class="project-title-and-link"><h2>${project.projectName}</h2>${projectLink}</div><section class="skills-and-tools"><span>Skills:</span><ul>${usedSkills}</ul></section><section class="media-elements">${projectMediaElements}</section>${moreProjects}${allProjectsLink}</div>`;
};

/* 
Generates a link to the project's live website if the property exists.
*/
const generateProjectLink = function (project) {
  if (project.live_site) {
    return `<a href="${project.live_site}"><span>Live-Seite besuchen</span><img src="${_img_external_link_svg__WEBPACK_IMPORTED_MODULE_1__}"></a>`;
  } else {
    return '';
  }
};

/* 
Gnerates the HTML for a list of skills used for a specific project.
*/
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

/* 
Generates the HTML for the [elements] array in the project object,
which contains references to all media files used by the project.
*/
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
            // Iterates over the [elements] array, which contains references to media files
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

/* 
Generates HTML for a section that displays a link back to the project overview page
*/
const generateAllProjectsLink = function () {
  return `<section class="all-projects-link"><a href="/"><img src="${_img_arrow_left_svg__WEBPACK_IMPORTED_MODULE_2__}"><h2>Alle Projekte</h2></a></section>`;
};

const handleAllProjectsLink = function () {
  const allProjectsLink = document.querySelector('.all-projects-link a');

  allProjectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.pushURLAndCallRouter)('');
  });
};

/* 
1. Tries to find a project by it's name by comparing the path passed as a parameter
with the names of the projects in the data pool. Then it calls showSingleProject() 
and returns the project's name.

2. Has no project been found, the function returns '404', which is handled by router() in router.js.
*/
const loadSingleProject = async function (path) {
  const projectName = path.split('/')[1]; // Assuming paths like "/path"
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_3__.loadData)();
  const project = data.projects.find(
    (project) => (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.convertToURLSaveName)(project.projectName) === projectName
  );

  if (project) {
    try {
      const HTMLContent = await showSingleProject(project);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.setContent)('content', HTMLContent);
      // Return the project's name
      // Will be set as the document.title
      return project.projectName;
    } catch (error) {
      console.error('Failed to load project details:', error);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.setContent)('content', '<h1>Error Loading Project</h1>');
      return '404';
    }
  } else {
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.setContent)('content', '<h1>404 Not Found</h1>');
    return '404';
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

/***/ "./src/img/arrow-left.svg":
/*!********************************!*\
  !*** ./src/img/arrow-left.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7824dbd48c4983d475f2.svg";

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
/******/ 			return "" + chunkId + "." + {"src_projectsOverview_js":"421ea5919ecc9d6f0086","src_profile_js":"b537d9798ca455551772"}[chunkId] + ".js";
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



/* 
Registers a static route and loads the corresponding route
handler functions asynchronously with the import statement
*/
(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)(
  '/',
  () => __webpack_require__.e(/*! import() */ "src_projectsOverview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectsOverview.js */ "./src/projectsOverview.js")).then((module) => module.displayProjectOverview),
  'Robert Arning – UI/UX Designer'
); // Homepage
(0,_router__WEBPACK_IMPORTED_MODULE_0__.route)(
  '/profil',
  () => __webpack_require__.e(/*! import() */ "src_profile_js").then(__webpack_require__.bind(__webpack_require__, /*! ./profile.js */ "./src/profile.js")).then((module) => module.displayProfile),
  'Robert Arning – Profil'
); // Profile page

// Call the router() and initialize the navigation
document.addEventListener('DOMContentLoaded', function () {
  (0,_router__WEBPACK_IMPORTED_MODULE_0__.router)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_1__.handleMenuLinks)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YTIwM2I1MDBlNmFlMmE4ZjIwZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLDhKQUE0RDtBQUN4Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0lBQXdJLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxNQUFNLFFBQVEsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcs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QUNBO0FBQ0EsRUFBRSwrQ0FBTTtBQUNSLEVBQUUsc0RBQWU7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zY3NzL3Byb2plY3QtcGFnZS5zY3NzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Nzcy9wcm9qZWN0LXBhZ2Uuc2Nzcz82YjhmIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbW9yZVByb2plY3RzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Nlc3Npb25TdG9yYWdlLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zaW5nbGVQcm9qZWN0LmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEZPTlQgRkFDRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlLXZhcmlhdGlvbnNcIik7XG59XG4vKiBCUkVBS1BPSU5UU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIEZPTlQgU0laRSBDQUxDVUxBVElPTlMgV0lUSCBDTEFNUCgpXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogQ1VTVE9NIFBST1BFUlRJRVNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcbiAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcbiAgLS1jb2xvci1ncmV5OiAjYTVhNWE1O1xuICAtLWxvZ28td2lkdGg6IGNsYW1wKDYuMjVyZW0sIDMuMzF2dyArIDUuMzhyZW0sIDkuMzFyZW0pO1xuICAtLWZvbnQtc2l6ZS1uYXY6IGNsYW1wKDEuMjVyZW0sIDAuNTR2dyArIDEuMTFyZW0sIDEuNzVyZW0pO1xuICAtLWZvbnQtc2l6ZS10ZXh0OiBjbGFtcCgxLjM4cmVtLCAwLjgxdncgKyAxLjE2cmVtLCAyLjEzcmVtKTtcbiAgLS1mb250LXNpemUtaDE6IGNsYW1wKDVyZW0sIDYuMDh2dyArIDMuNHJlbSwgMTAuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMjogY2xhbXAoMi41cmVtLCAzLjM4dncgKyAxLjYxcmVtLCA1LjYzcmVtKTtcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogY2xhbXAoMS4yNXJlbSwgMC4yN3Z3ICsgMS4xOHJlbSwgMS41cmVtKTtcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiBjbGFtcCgxcmVtLCAwLjE0dncgKyAwLjk2cmVtLCAxLjEzcmVtKTtcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiBjbGFtcCgxcmVtLCAwLjE0dncgKyAwLjk2cmVtLCAxLjEzcmVtKTtcbiAgLS1mb250LXNpemUtdmVyc2lvbjogY2xhbXAoMC44OHJlbSwgMC40MXZ3ICsgMC43N3JlbSwgMS4yNXJlbSk7XG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUxMDtcbiAgLS1mb250LXdlaWdodC1zZW1pYm9sZDogNTUwO1xuICAtLWZsZXgtZ2FwLW5hdjogY2xhbXAoMC40NHJlbSwgMi45MXZ3ICsgLTAuMzNyZW0sIDMuMTNyZW0pO1xuICAtLWhvbWVwYWdlLWRlc2NyaXB0aW9uLXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDE5LjU5dncgKyAzMi4zNnJlbSwgNTUuNjNyZW0pO1xuICAtLTE2MHB4LXRvLTgwcHg6IGNsYW1wKDVyZW0sIDUuNDF2dyArIDMuNThyZW0sIDEwcmVtKTtcbiAgLS0xMjBweC10by02MHB4OiBjbGFtcCgzLjc1cmVtLCA0LjA1dncgKyAyLjY5cmVtLCA3LjVyZW0pO1xuICAtLTgwcHgtdG8tNDBweDogY2xhbXAoMi41cmVtLCAyLjd2dyArIDEuNzlyZW0sIDVyZW0pO1xuICAtLTcwcHgtdG8tMzVweDogY2xhbXAoMi4xOXJlbSwgMi4zNnZ3ICsgMS41N3JlbSwgNC4zOHJlbSk7XG4gIC0tNjVweC10by00NXB4OiBjbGFtcCgyLjgxcmVtLCAxLjM1dncgKyAyLjQ2cmVtLCA0LjA2cmVtKTtcbiAgLS0yMHB4LXRvLTEycHg6IGNsYW1wKDAuNzVyZW0sIDAuNTR2dyArIDAuNjFyZW0sIDEuMjVyZW0pO1xuICAtLTE1cHgtdG8tMTBweDogY2xhbXAoMC42M3JlbSwgMC4zNHZ3ICsgMC41NHJlbSwgMC45NHJlbSk7XG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6IGNsYW1wKDMxLjI1cmVtLCA2Ljc2dncgKyAyOS40OHJlbSwgMzcuNXJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aDogY2xhbXAoMjguNzVyZW0sIDIyLjk3dncgKyAyMi43MnJlbSwgNTByZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IGNsYW1wKDAuMzFyZW0sIDAuNjh2dyArIDAuMTRyZW0sIDAuOTRyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IGNsYW1wKDAuNjNyZW0sIDEuMDF2dyArIDAuMzZyZW0sIDEuNTZyZW0pO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWxvZ28td2lkdGg6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1mb250LXNpemUtbmF2OiAxOHB4O1xuICAgIC0tZm9udC1zaXplLXRleHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1mb250LXNpemUtaDE6IDYwcHg7XG4gICAgLS1mb250LXNpemUtaDI6IDMwcHg7XG4gICAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogMTVweDtcbiAgICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IDE0cHg7XG4gICAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogM3B4O1xuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogNnB4O1xuICB9XG59XG5cbi8qIEdFTkVSQUwgU1RZTEVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAyOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmgxLFxuaDIge1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KSAtMTBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaDEge1xuICAgIG1hcmdpbjogMCAwIDMwcHggLTVweDtcbiAgfVxufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDIwcHggLTJweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbmgzLFxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufVxuXG5wICsgcCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gIC5oaWRkZW4teHhzLWhhbGYge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnZpc2libGUteHhzLWhhbGYge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gIC52aXNpYmxlLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4vKiBUUkFOU0lUSU9OU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi50cmFuc2l0aW9uLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4wNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMDVzO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4yNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMjVzO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjQ1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40NXM7XG59XG5cbi8qIExPR08gKyBOQVZJR0FUSU9OXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuaGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICBoZWFkZXIgaW1nIHtcbiAgICBtaW4td2lkdGg6IDMxcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xuICBtYXJnaW46IDAgMCAtNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGhlYWRlciBuYXYgdWwge1xuICAgIG1hcmdpbjogMCAwIC0ycHg7XG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgfVxufVxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xuICBwYWRkaW5nOiAwO1xufVxuI2NvbnRlbnQgLmhvbWVwYWdlLFxuI2NvbnRlbnQgLnByb2ZpbGUtcGFnZSB7XG4gIHBhZGRpbmc6IDAgMCB2YXIoLS0xNjBweC10by04MHB4KTtcbn1cblxuLyogTEFaWSBMT0FESU5HXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1lZGlhIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xufVxuXG4ubWVkaWEtbG9hZGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogU0lOR0xFIFBST0pFQ1QgUEFHRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBoMiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBoMiB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBoMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBzcGFuIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbjogNnB4IDAgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBpbWcge1xuICBtYXgtd2lkdGg6IDE4cHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogdmFyKC0tMTVweC10by0xMHB4KSAwIHZhcigtLTY1cHgtdG8tNDVweCk7XG4gIHBhZGRpbmc6IHZhcigtLTIwcHgtdG8tMTJweCkgMCAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHtcbiAgICBtYXJnaW46IDExcHggMCAzMHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwgLnNraWxsLXRhZyB7XG4gIHBhZGRpbmc6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzEpIHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzIpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbC10YWcpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCAuc2tpbGwtdGFnIHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXcsXG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xuICB6LWluZGV4OiAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXc6YmVmb3JlLFxuLnNpbmdsZS1wcm9qZWN0IC5vbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJOZXVlcyBEZXNpZ25cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxM3B4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12ZXJzaW9uKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XG4gIHotaW5kZXg6IDI7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIkFsdGVzIERlc2lnblwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuY29tbWVudCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIHBhZGRpbmc6IHZhcigtLTEyMHB4LXRvLTYwcHgpIDAgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCArIC5jb21tZW50IHAge1xuICBwYWRkaW5nOiAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHtcbiAgcGFkZGluZzogdmFyKC0tMTIwcHgtdG8tNjBweCkgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnRleHQgcCB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzIHtcbiAgICBnYXA6IDcuNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IC52aWRlbyxcbiAgLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IC5pbWFnZSxcbiAgLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IC50d28tY29sdW1uIHtcbiAgICBtYXJnaW46IDAgLTI4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLnZpZGVvLFxuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLmltYWdlLFxuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLnR3by1jb2x1bW4ge1xuICAgIG1hcmdpbjogMCAtMjBweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC50d28tY29sdW1uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIHtcbiAgICBtYXJnaW46IDAgLTI4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMge1xuICAgIG1hcmdpbjogMCAtMjBweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIGgyIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBtYXJnaW46IHZhcigtLTEyMHB4LXRvLTYwcHgpIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDE3MC81Nztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XG4gICAgZ2FwOiA3LjVweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIC5tb3JlLXByb2plY3RzLXdyYXBwZXIgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5hbGwtcHJvamVjdHMtbGluayB7XG4gIHBhZGRpbmc6IHZhcigtLTE2MHB4LXRvLTgwcHgpIDA7XG59XG4uc2luZ2xlLXByb2plY3QgLmFsbC1wcm9qZWN0cy1saW5rIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAwIDAgMjBweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsgYSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5hbGwtcHJvamVjdHMtbGluayBhIGltZyB7XG4gIHdpZHRoOiB2YXIoLS04MHB4LXRvLTQwcHgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsgYSBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nZW5lcmFsLXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9wcm9qZWN0LXBhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtpR0FBQTtBQUVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFD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bi8qIEZPTlQgRkFDRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlLXZhcmlhdGlvbnMnKTtcXG59XFxuXFxuLyogQlJFQUtQT0lOVFNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBtaXhpbiBicmVha3BvaW50LWxnIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDI0cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1sZyB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1tZCB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4tbWQge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1zbSB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1zbSB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXhzIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHhzIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHhzLWhhbGYge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG4vKiBGT05UIFNJWkUgQ0FMQ1VMQVRJT05TIFdJVEggQ0xBTVAoKVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJGRlZmF1bHQtbWluLWJwOiA0MjBweDtcXG4kZGVmYXVsdC1tYXgtYnA6IDE5MDBweDtcXG5cXG5AZnVuY3Rpb24gcm91bmQoJG51bWJlciwgJGRlY2ltYWxzOiAwKSB7XFxuICAkbjogMTtcXG4gIEBpZiAkZGVjaW1hbHMgPiAwIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGVjaW1hbHMge1xcbiAgICAgICRuOiAkbiAqIDEwO1xcbiAgICB9XFxuICB9XFxuICBAcmV0dXJuIG1hdGguZGl2KG1hdGgucm91bmQoJG51bWJlciAqICRuKSwgJG4pO1xcbn1cXG5cXG5AZnVuY3Rpb24gcHgtdG8tcmVtKCRweCkge1xcbiAgJHJlbXM6IG1hdGguZGl2KCRweCwgMTZweCkgKiAxcmVtO1xcbiAgQHJldHVybiAkcmVtcztcXG59XFxuXFxuQGZ1bmN0aW9uIGZsdWlkKFxcbiAgJG1pbi1zaXplLFxcbiAgJG1heC1zaXplLFxcbiAgJG1pbi1icmVha3BvaW50OiAkZGVmYXVsdC1taW4tYnAsXFxuICAkbWF4LWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1heC1icCxcXG4gICR1bml0OiB2d1xcbikge1xcbiAgJHNsb3BlOiBtYXRoLmRpdigkbWF4LXNpemUgLSAkbWluLXNpemUsICRtYXgtYnJlYWtwb2ludCAtICRtaW4tYnJlYWtwb2ludCk7XFxuICAkc2xvcGUtdG8tdW5pdDogcm91bmQoJHNsb3BlICogMTAwLCAyKTtcXG4gICRpbnRlcmNlcHQtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplIC0gJHNsb3BlICogJG1pbi1icmVha3BvaW50KSwgMik7XFxuICAkbWluLXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplKSwgMik7XFxuICAkbWF4LXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1heC1zaXplKSwgMik7XFxuICBAcmV0dXJuIGNsYW1wKCN7JG1pbi1zaXplLXJlbX0sICN7JHNsb3BlLXRvLXVuaXR9I3skdW5pdH0gKyAjeyRpbnRlcmNlcHQtcmVtfSwgI3skbWF4LXNpemUtcmVtfSk7XFxufVxcblxcbi8qIENVU1RPTSBQUk9QRVJUSUVTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcXG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcXG5cXG4gIC0tbG9nby13aWR0aDogI3tmbHVpZCgxMDBweCwgMTQ5cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWxvZ28td2lkdGg6IDMwcHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1uYXY6ICN7Zmx1aWQoMjBweCwgMjhweCl9O1xcbiAgLS1mb250LXNpemUtdGV4dDogI3tmbHVpZCgyMnB4LCAzNHB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1mb250LXNpemUtbmF2OiAxOHB4O1xcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAyMHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXNpemUtaDE6ICN7Zmx1aWQoODBweCwgMTcwcHgpfTtcXG4gIC0tZm9udC1zaXplLWgyOiAje2ZsdWlkKDQwcHgsIDkwcHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6ICN7Zmx1aWQoMjBweCwgMjRweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiAje2ZsdWlkKDE0cHgsIDIwcHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1oMTogNjBweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMwcHg7XFxuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XFxuICAgIC0tZm9udC1zaXplLXNraWxsLXRhZzogMTRweDtcXG4gICAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAxNHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XFxuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MTA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XFxuXFxuICAtLWZsZXgtZ2FwLW5hdjogI3tmbHVpZCg3cHgsIDUwcHgpfTtcXG5cXG4gIC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aDogI3tmbHVpZCg2MDBweCwgODkwcHgpfTtcXG5cXG4gIC0tMTYwcHgtdG8tODBweDogI3tmbHVpZCg4MHB4LCAxNjBweCl9O1xcbiAgLS0xMjBweC10by02MHB4OiAje2ZsdWlkKDYwcHgsIDEyMHB4KX07XFxuICAtLTgwcHgtdG8tNDBweDogI3tmbHVpZCg0MHB4LCA4MHB4KX07XFxuICAtLTcwcHgtdG8tMzVweDogI3tmbHVpZCgzNXB4LCA3MHB4KX07XFxuICAtLTY1cHgtdG8tNDVweDogI3tmbHVpZCg0NXB4LCA2NXB4KX07XFxuICAtLTIwcHgtdG8tMTJweDogI3tmbHVpZCgxMnB4LCAyMHB4KX07XFxuICAtLTE1cHgtdG8tMTBweDogI3tmbHVpZCgxMHB4LCAxNXB4KX07XFxuXFxuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiAje2ZsdWlkKDUwMHB4LCA2MDBweCl9O1xcblxcbiAgLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoOiAje2ZsdWlkKDQ2MHB4LCA4MDBweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAje2ZsdWlkKDVweCwgMTVweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiAje2ZsdWlkKDEwcHgsIDI1cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcXG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiA2cHg7XFxuICB9XFxufVxcblxcbi8qIEdFTkVSQUwgU1RZTEVTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMjhweDtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCkgLTEwcHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIG1hcmdpbjogMCAwIDMwcHggLTVweDtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAwIDAgMjBweCAtMnB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaDMsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAyMHB4IDAgMDtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbn1cXG5cXG5wICsgcCB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWRkZW4teHhzLWhhbGYge1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnZpc2libGUteHhzLWhhbGYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzLWhhbGYoKSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4vKiBUUkFOU0lUSU9OU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBzaXRlIHRpdGxlIGJlZm9yZSB0cmFuc2l0aW9uXFxuLnRyYW5zaXRpb24taW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XFxufVxcblxcbi8vIEluaXRpYWwgc3RhdGUgb2Ygc2tpbGxzLWFuZC10b29scyBkaXYgYmVmb3JlIHRyYW5zaXRpb25cXG4udHJhbnNpdGlvbi1pbi1vcGFjaXR5IHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2Ygc2l0ZSB0aXRsZVxcbi50cmFuc2l0aW9uLXZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4wNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMDVzO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIHNraWxscyBsaXN0IG9uIHByb2plY3QgcGFnZXNcXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4yNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMjVzO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIGZpcnN0IG1lZGlhIGVsZW1lbnQgb24gcHJvamVjdCBwYWdlc1xcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuNDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjQ1cztcXG59XFxuXFxuLyogTE9HTyArIE5BVklHQVRJT05cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IDIwcHggYXV0byAwO1xcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICAgIG1pbi13aWR0aDogMzFweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IHZhcigtLWZsZXgtZ2FwLW5hdik7XFxuXFxuICAgICAgbWFyZ2luOiAwIDAgLTVweDtcXG4gICAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xcblxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcXG5cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIG1hcmdpbjogMCAwIC0ycHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIHBhZGRpbmc6IDRweCA3cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIEdFTkVSQUwgU1RZTEVTIEZPUiAjQ09OVEVOVFxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogdmFyKC0tODBweC10by00MHB4KSBhdXRvIDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgLmhvbWVwYWdlLFxcbiAgLnByb2ZpbGUtcGFnZSB7XFxuICAgIHBhZGRpbmc6IDAgMCB2YXIoLS0xNjBweC10by04MHB4KTtcXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICdnZW5lcmFsLXN0eWxlcyc7XFxuXFxuLyogTEFaWSBMT0FESU5HXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vLyBJbml0aWFsIHN0YXRlIG9mIG1lZGlhLWl0ZW1zIHdpdGggb3BhY2l0eSBzZXQgdG8gMFxcbi5tZWRpYSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4vLyBDbGFzcyB0byBiZSBhZGRlZCBvbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWRcXG4ubWVkaWEtbG9hZGVkIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFNJTkdMRSBQUk9KRUNUIFBBR0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XFxuICAgIGgyIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cy1oYWxmKCkge1xcbiAgICAgICAgaHlwaGVuczogYXV0bztcXG4gICAgICB9XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgIGdhcDogOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgbWFyZ2luOiA2cHggMCAwO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2tpbGxzLWFuZC10b29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgbWFyZ2luOiB2YXIoLS0xNXB4LXRvLTEwcHgpIDAgdmFyKC0tNjVweC10by00NXB4KTtcXG4gICAgcGFkZGluZzogdmFyKC0tMjBweC10by0xMnB4KSAwIDA7XFxuXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgbWFyZ2luOiAxMXB4IDAgMzBweDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIC5za2lsbC10YWcge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XFxuXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbC10YWcpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm5ldyxcXG4gIC5vbGQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICdOZXVlcyBEZXNpZ24nO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG5cXG4gICAgICBwYWRkaW5nOiA3cHggMTZweCA3cHggMTNweDtcXG5cXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12ZXJzaW9uKTtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5vbGQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ0FsdGVzIERlc2lnbic7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XFxuICAgICAgcGFkZGluZzogdmFyKC0tMTIwcHgtdG8tNjBweCkgMCAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCArIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRleHQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS0xMjBweC10by02MHB4KSAwO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgaHlwaGVuczogYXV0bztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFdyYXBzIGFsbCBlbGVtZW50cyBvbiBhIHByb2plY3QgcGFnZVxcbiAgLm1lZGlhLWVsZW1lbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICBnYXA6IDcuNXB4O1xcbiAgICB9XFxuXFxuICAgID4gLnZpZGVvLFxcbiAgICA+IC5pbWFnZSxcXG4gICAgPiAudHdvLWNvbHVtbiB7XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC1zbSgpIHtcXG4gICAgICAgIG1hcmdpbjogMCAtMjhweDtcXG4gICAgICB9XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgICAgIG1hcmdpbjogMCAtMjBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAvLyBTaG93cyBwcmV2aW91cyBhbmQgbmV4dCBwcm9qZWN0XFxuICAubW9yZS1wcm9qZWN0cyB7XFxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtc20oKSB7XFxuICAgICAgbWFyZ2luOiAwIC0yOHB4O1xcbiAgICB9XFxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgICAgbWFyZ2luOiAwIC0yMHB4O1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICAgICAgbWFyZ2luOiB2YXIoLS0xMjBweC10by02MHB4KSAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGFzcGVjdC1yYXRpbzogMTcwLzU3O1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgZ2FwOiA3LjVweDtcXG4gICAgICB9XFxuXFxuICAgICAgZGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuYWxsLXByb2plY3RzLWxpbmsge1xcbiAgICBwYWRkaW5nOiB2YXIoLS0xNjBweC10by04MHB4KSAwO1xcblxcbiAgICBhIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgZ2FwOiAyMHB4O1xcblxcbiAgICAgIHBhZGRpbmc6IDAgMCAyMHB4O1xcblxcbiAgICAgIGgyIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gICAgICB9XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS04MHB4LXRvLTQwcHgpO1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtcGFnZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1wYWdlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlJztcblxuLyogXG5Mb2FkcyBhIEpTT04gZmlsZSB3aXRoIGFsbCBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgc2F2ZXMgaXRcbnRvIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZSwgc28gdGhlIGRhdGEgaXMgY2FjaGVkIGZvciBmdXJ0aGVyIHVzZS5cbiovXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcbiAgbGV0IGRhdGE7XG5cbiAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlLi4uJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICAvLyBHZXRzIHRoZSBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgcHJvamVjdHMgZnJvbSBzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgZGF0YSA9IHN0b3JlZERhdGE7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vIHNlc3Npb25TdG9yYWdlIGF2YWlsYWJsZSBvciBubyBkYXRhIGluIHNlc3Npb25TdG9yYWdlOlxuICAvLyBmZXRjaCB0aGUgZGF0YS5qc29uIGZyb20gdGhlIHNlcnZlclxuICB0cnkge1xuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIGRhdGEuLi4nKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZGF0YS9kYXRhLmpzb24nKTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAvLyBDaGVjayBpZiB0aGUgSFRUUCBzdGF0dXMgY29kZSBpcyBpbiB0aGUgMjAwLTI5OSByYW5nZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBTYXZlIGZldGNoZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZVxuICAgIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgY29uc29sZS5sb2coJ1NhdmVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbi8qIFxuR2V0cyB0aGUgZWxlbWVudCBieSBpdHMgaWQgcGFzc2VkIGFzIHRoZSBmdW5jdGlvbnMgMXN0IHBhcmFtZXRlciBhbmRcbnNldHMgaXRzIGlubmVySFRNTCB0byB3aGF0ZXZlciBjb250ZW50IGlzIHBhc3NlZCBhcyB0aGUgMm5kIHBhcmFtZXRlclxuKi9cbmV4cG9ydCBjb25zdCBzZXRDb250ZW50ID0gZnVuY3Rpb24gKGlkLCBjb250ZW50KSB7XG4gIGNvbnN0IEhUTUxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHJldHVybiAoSFRNTGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCk7XG59O1xuXG4vKiBcblVwZGF0ZXMgdGhlIGJyb3dzZXIncyBoaXN0b3J5IHN0YWNrIGJ5IGFkZGluZyBhIG5ldyBlbnRyeS4gVGhpcyBzZXRzIHRoZSBuZXcgVVJMIHBhdGggXG53aXRob3V0IHJlbG9hZGluZyB0aGUgcGFnZS4gVGhlbiBjYWxscyB0aGUgcm91dGVyKCkgZnVuY3Rpb24gdG8gaGFuZGxlIHRoZSBVUkwgY2hhbmdlLlxuKi9cbmV4cG9ydCBjb25zdCBwdXNoVVJMQW5kQ2FsbFJvdXRlciA9IGZ1bmN0aW9uIChVUkxwYXRoKSB7XG4gIC8vIFVwZGF0ZSB0aGUgVVJMXG4gIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgYC8ke1VSTHBhdGh9YCk7XG4gIC8vIENhbGwgdGhlIHJvdXRlclxuICByb3V0ZXIoKTtcbn07XG5cbi8qIFxuMS4gQWRkcyBsYXp5IGxvYWRpbmcgdG8gYSBwYWdlXG4yLiBBZGRzIGFuaW1hdGlvbnMgdG8gdGhlIHByb2plY3QgdGl0bGUgXG4zLiBTZXRzIHRoZSBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgcGFnZVxuKi9cbmV4cG9ydCBjb25zdCBzZXR1cFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGluaXRpYWxpemVMYXp5TG9hZGluZygpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGhhbmRsZUFuaW1hdGlvbk9uUGFnZVRyYW5zaXRpb24oKTtcbiAgfSk7XG4gIC8vIFNldCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgYnJvd3NlciB3aW5kb3dcbiAgd2luZG93LnNjcm9sbCgwLCAwKTtcbn07XG5cbi8qXG5FbmNvZGVzIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoLlxuUmVwbGFjZSBzcGFjZXMgd2l0aCBoeXBoZW5zLCB0aGVuIGVuY29kZSBVUkkgY29tcG9uZW50cywgYW5kIGZpbmFsbHkgY29udmVydCB0byBsb3dlcmNhc2VcbiovXG5leHBvcnQgY29uc3QgY29udmVydFRvVVJMU2F2ZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUucmVwbGFjZSgvXFxzKy9nLCAnLScpKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLyogXG5BZGRzIGFuaW1hdGlvbnMgdG8gYSBwYWdlJ3MgdGl0bGUsIHRoZSBwcm9qZWN0IG5hbWUsIHRoZVxubGlzdCBvZiBza2lsbHMgdXNlZCBhbmQgdGhlIHdyYXBwZXIgZm9yIGEgcHJvamVjdCdzIGVsZW1lbnRzLlxuKi9cbmV4cG9ydCBjb25zdCBoYW5kbGVBbmltYXRpb25PblBhZ2VUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBzaXRlVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lcGFnZSAuZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgYWxsTWVkaWFFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlQW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluaycpO1xuICBjb25zdCBwcm9qZWN0U2tpbGxzQW5kVG9vbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgc3BhbidcbiAgKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCcpO1xuICBjb25zdCBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gZGl2ID4gKidcbiAgKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQpO1xuXG4gIGlmIChzaXRlVGl0bGUpIHtcbiAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoYWxsTWVkaWFFbGVtZW50cyAmJiBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQpIHtcbiAgICBpZiAocHJvamVjdFRpdGxlQW5kTGluaykge1xuICAgICAgcHJvamVjdFRpdGxlQW5kTGluay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4tb3BhY2l0eScpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMYWJlbCkge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KSB7XG4gICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuXG4gICAgY29uc3QgYWRkVHJhbnNpdGlvblRyaWdnZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb2plY3RUaXRsZUFuZExpbmspIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0VGl0bGVBbmRMaW5rLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29scy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMYWJlbCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gV2FpdHMgZm9yIHRoZSBmaXJzdCBlbGVtZW50IHRvIGxvYWQgYmVmb3JlIGF0dGFjaGluZyB0aGUgYW5pbWF0aW9uIHRyaWdnZXJzXG4gICAgaWYgKHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWRlbyEnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uVHJpZ2dlcnMoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UhJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG4vKiBcbkFkZHMgYW4gSW50ZXJhY3Rpb25PYnNlcnZlciB0byB0aGUgdmlld3BvcnQgdGhhdCBzZXRzIHRoZSBzcmMgb2YgYSB2aWRlb1xub3IgaW1hZ2UgdG8gdGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50J3MgZGF0YS1zcmMsIHdoZW4gaXQgY29tZXMgaW50byB2aWV3LlxuVGhpcyB3YXkgaW1hZ2VzIGFuZCB2aWRlb3MgYXJlIG9ubHkgbG9hZGVkLCB3aGVuIHRoZXkgYXJlIG5lZWRlZC5cbiovXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUxhenlMb2FkaW5nID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBsYXp5TWVkaWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eS1sb2FkJyk7XG5cbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgY29uc3QgbWVkaWEgPSBlbnRyeS50YXJnZXQ7XG5cbiAgICAgICAgaWYgKG1lZGlhLnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICAgICAgbWVkaWEuc3JjID0gbWVkaWEuZGF0YXNldC5zcmM7XG4gICAgICAgICAgbWVkaWEub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWEuY2xhc3NMaXN0LmFkZCgnbWVkaWEtbG9hZGVkJyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYS50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICAgICAgQXJyYXkuZnJvbShtZWRpYS5jaGlsZHJlbikuZm9yRWFjaCgoc291cmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc291cmNlLnRhZ05hbWUgPT09ICdTT1VSQ0UnKSBzb3VyY2Uuc3JjID0gc291cmNlLmRhdGFzZXQuc3JjO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1lZGlhLmxvYWQoKTtcbiAgICAgICAgICBtZWRpYS5vbmxvYWRlZGRhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYS5jbGFzc0xpc3QuYWRkKCdtZWRpYS1sb2FkZWQnKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKG1lZGlhKTsgLy8gU3RvcCBvYnNlcnZpbmcgb25jZSBsb2FkZWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgbGF6eU1lZGlhLmZvckVhY2goKG1lZGlhKSA9PiBvYnNlcnZlci5vYnNlcnZlKG1lZGlhKSk7XG59O1xuIiwiaW1wb3J0IHsgcHVzaFVSTEFuZENhbGxSb3V0ZXIgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVNZW51TGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG4gIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjaG9tZScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcignJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI2xvZ28nKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJycpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNwcm9maWxlJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCdwcm9maWwnKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNvbnZlcnRUb1VSTFNhdmVOYW1lLCBwdXNoVVJMQW5kQ2FsbFJvdXRlciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuY29uc3QgZmluZFByZXZpb3VzQW5kTmV4dFByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICB0cnkge1xuICAgIGlmICghZGF0YSB8fCAhcHJvamVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YSBvciBwcm9qZWN0IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdEluZGV4ID0gTnVtYmVyKHByb2plY3QuaWQpIC0gMTtcblxuICAgIGNvbnN0IG5leHRQcm9qZWN0SW5kZXggPSAoY3VycmVudFByb2plY3RJbmRleCArIDEpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0ID0gYWxsUHJvamVjdHNbbmV4dFByb2plY3RJbmRleF07XG5cbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3RJbmRleCA9XG4gICAgICAoY3VycmVudFByb2plY3RJbmRleCAtIDEgKyBhbGxQcm9qZWN0cy5sZW5ndGgpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdCA9IGFsbFByb2plY3RzW3ByZXZpb3VzUHJvamVjdEluZGV4XTtcblxuICAgIHJldHVybiB7IHByZXZpb3VzUHJvamVjdCwgbmV4dFByb2plY3QgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhJywgZXJyb3IpO1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNob3dNb3JlUHJvamVjdHMgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICBjb25zdCB7IHByZXZpb3VzUHJvamVjdCwgbmV4dFByb2plY3QgfSA9IGF3YWl0IGZpbmRQcmV2aW91c0FuZE5leHRQcm9qZWN0KHByb2plY3QpO1xuXG4gIHRyeSB7XG4gICAgaWYgKCFwcmV2aW91c1Byb2plY3QgfHwgIW5leHRQcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBkYXRhIG9uIHByZXZpb3VzIGFuZCBuZXh0IHByb2plY3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0VVJMUGF0aCA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByZXZpb3VzUHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgbmV4dFByb2plY3RVUkxQYXRoID0gY29udmVydFRvVVJMU2F2ZU5hbWUobmV4dFByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cIm1vcmUtcHJvamVjdHNcIj48aDI+TWVociBQcm9qZWt0ZTwvaDI+PGRpdiBjbGFzcz1cIm1vcmUtcHJvamVjdHMtd3JhcHBlclwiPjxhIGhyZWY9XCIvJHtwcmV2aW91c1Byb2plY3RVUkxQYXRofVwiIGNsYXNzPVwicHJldmlvdXMtcHJvamVjdFwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlvdXNQcm9qZWN0LmltYWdlfScpO1wiPjwvZGl2PjwvYT48YSBocmVmPVwiLyR7bmV4dFByb2plY3RVUkxQYXRofVwiIGNsYXNzPVwibmV4dC1wcm9qZWN0XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtuZXh0UHJvamVjdC5pbWFnZX0nKTtcIj48L2Rpdj48L2E+PC9kaXY+PC9zZWN0aW9uPmA7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YScsIGVycm9yKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVNb3JlUHJvamVjdHNMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcHJldmlvdXNQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2aW91cy1wcm9qZWN0Jyk7XG4gIGNvbnN0IG5leHRQcm9qZWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LXByb2plY3QnKTtcblxuICBjb25zdCBwcmV2aW91c1Byb2plY3RVUkxQYXRoID0gcHJldmlvdXNQcm9qZWN0TGluay5ocmVmLnNwbGl0KCcvJylbM107XG4gIGNvbnN0IG5leHRQcm9qZWN0VVJMUGF0aCA9IG5leHRQcm9qZWN0TGluay5ocmVmLnNwbGl0KCcvJylbM107XG5cbiAgcHJldmlvdXNQcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKHByZXZpb3VzUHJvamVjdFVSTFBhdGgpO1xuICB9KTtcblxuICBuZXh0UHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcihuZXh0UHJvamVjdFVSTFBhdGgpO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBoYW5kbGVBbGxQcm9qZWN0c0xpbmsgfSBmcm9tICcuL3NpbmdsZVByb2plY3QuanMnO1xuXG4vKiBcbkFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHN0YXRpYyBwYXRocywgYXMgd2VsbCBhcyBhIGhhbmRsZXIgYW5kIGEgdGl0bGUgYXNzb2NpYXRlZCB3aXRoIGl0XG4qL1xuY29uc3Qgcm91dGVzID0ge307XG5cbi8qIFxuQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBcImhhbmRsZXJcIiBhbmQgXCJ0aXRsZVwiIGFuZFxuYXNzaWducyBpdCBhcyB2YWx1ZSB0byB0aGUga2V5IFwicGF0aFwiIGluIHRoZSB7IHJvdXRlcyB9IG9iamVjdFxuKi9cbmV4cG9ydCBjb25zdCByb3V0ZSA9IGZ1bmN0aW9uIChwYXRoLCBoYW5kbGVyRnVuY3Rpb24sIHRpdGxlKSB7XG4gIHJvdXRlc1twYXRoXSA9IHsgaGFuZGxlcjogaGFuZGxlckZ1bmN0aW9uLCB0aXRsZTogdGl0bGUgfTtcbn07XG5cbi8qIFxuMS4gQ2hlY2tzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGF0aCBoYXMgYmVlbiByZWdpc3RlcmVkIGFzIGEga2V5IGluIHRoZSB7IHJvdXRlcyB9IG9iamVjdC5cbklmIGl0IGlzLCB0aGVuIGl0IGNhbGxzIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0ZXJlZCBwYXRoIGFuZCBzZXRzIHRoZSB0aXRsZS5cblxuMi4gSXMgdGhlIGN1cnJlbnQgcGF0aCBpcyBub3QgYSBrZXkgaW4geyByb3V0ZXMgfSwgaXQgdHJpZXMgdG8gY2FsbCBhIGZ1bmN0aW9uIHRoYXQgbG9hZHMgYSBzaW5nbGVcbnByb2plY3QgYmFzZWQgb24gdGhlIHBhdGggbmFtZS4gSWYgbm8gcHJvamVjdCB3aXRoIHRoYXQgbmFtZSBpcyBmb3VuZCwgdGhlIGZ1bmN0aW9uIHJldHVybnMgJzQwNCcuXG4qL1xuZXhwb3J0IGNvbnN0IHJvdXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdXJsUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHJvdXRlc1t1cmxQYXRoXSAmJiByb3V0ZXNbdXJsUGF0aF0uaGFuZGxlcikge1xuICAgIC8vIFRoZSBwYXRoIGlzIGluIHRoZSB7IHJvdXRlcyB9IG9iamVjdCBhbmQgaGFzIGEgaGFuZGxlclxuICAgIHJvdXRlc1t1cmxQYXRoXVxuICAgICAgLmhhbmRsZXIoKVxuICAgICAgLnRoZW4oKGhhbmRsZXJGdW5jdGlvbikgPT4ge1xuICAgICAgICAvLyBFeGVjdXRlIHRoZSBoYW5kbGVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGF0aFxuICAgICAgICBoYW5kbGVyRnVuY3Rpb24oKTtcbiAgICAgICAgLy8gU2V0IHRoZSBkb2N1bWVudCB0aXRsZSBmcm9tIHRoZSB7IHJvdXRlIH0ncyB0aXRsZSBwcm9wZXJ0eVxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHJvdXRlc1t1cmxQYXRoXS50aXRsZTtcbiAgICAgICAgLy8gTG9hZCB0aGUgcGFnZVxuICAgICAgICBpbXBvcnQoJy4vaGVscGVyRnVuY3Rpb25zLmpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgbW9kdWxlLnNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHJvdXRlIGhhbmRsZXInLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXRoIGlzIG5vdCByZWdpc3RlcmVkIG9yIGhhcyBubyBoYW5kbGVyXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgcGF0aCBjb3JyZXNwb25kcyB0byBhIHByb2plY3RcbiAgICBpbXBvcnQoJy4vc2luZ2xlUHJvamVjdC5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgbW9kdWxlXG4gICAgICAgIC5sb2FkU2luZ2xlUHJvamVjdCh1cmxQYXRoKVxuICAgICAgICAudGhlbigocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgICAvLyBUaGUgZnVuY3Rpb24gcmV0dXJucyBlaXRoZXIgdGhlIHByb2plY3QncyBuYW1lIG9yICc0MDQnXG4gICAgICAgICAgaWYgKHByb2plY3ROYW1lICE9PSAnNDA0Jykge1xuICAgICAgICAgICAgLy8gSWYgYSBwcm9qZWN0IGlzIGZvdW5kIHRoZSBmdW5jdGlvbnMgcmV0dXJucyB0aGUgcHJvamVjdCdzIG5hbWVcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFJvYmVydCBBcm5pbmcg4oCTICR7cHJvamVjdE5hbWV9YDtcbiAgICAgICAgICAgIGltcG9ydCgnLi9oZWxwZXJGdW5jdGlvbnMuanMnKS50aGVuKChoZWxwZXJNb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgaGVscGVyTW9kdWxlLnNldHVwUGFnZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbXBvcnQoJy4vbW9yZVByb2plY3RzLmpzJykudGhlbigobW9yZVByb2plY3RzTW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgIG1vcmVQcm9qZWN0c01vZHVsZS5oYW5kbGVNb3JlUHJvamVjdHNMaW5rcygpO1xuICAgICAgICAgICAgICBtb2R1bGUuaGFuZGxlQWxsUHJvamVjdHNMaW5rKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgbm8gcHJvamVjdCBpcyBmb3VuZCB0aGUgZnVuY3Rpb24gcmV0dXJucyAnNDA0J1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSAnUm9iZXJ0IEFybmluZyDigJMgUGFnZSBub3QgZm91bmQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGR5bmFtaWMgY29udGVudCBvciBmYWxsYmFjaycsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEhhbmRsZSBicm93c2VyIG5hdmlnYXRpb24gZXZlbnRzXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCByb3V0ZXIpO1xuIiwiLypcblRlc3RzIGlmIHNlc3Npb25TdG9yYWdlIGlzIGF2YWlsYWJsZSBpbiB0aGUgdXNlcnMgYnJvd3NlclxuKi9cbmV4cG9ydCBjb25zdCBpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHRlc3QgPSAndGVzdC1zdG9yYWdlJztcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlc3QsIHRlc3QpO1xuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odGVzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG4iLCJpbXBvcnQgJy4vc2Nzcy9wcm9qZWN0LXBhZ2Uuc2Nzcyc7XG5pbXBvcnQgZXh0ZXJuYWxMaW5rSWNvbiBmcm9tICcuL2ltZy9leHRlcm5hbC1saW5rLnN2Zyc7XG5pbXBvcnQgYXJyb3dMZWZ0IGZyb20gJy4vaW1nL2Fycm93LWxlZnQuc3ZnJztcbmltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IGNvbnZlcnRUb1VSTFNhdmVOYW1lLCBwdXNoVVJMQW5kQ2FsbFJvdXRlciwgc2V0Q29udGVudCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcbmltcG9ydCB7IHNob3dNb3JlUHJvamVjdHMgfSBmcm9tICcuL21vcmVQcm9qZWN0cyc7XG5cbi8qIFxuQnVuZGxlcyBhbmQgcmV0dXJucyBhbGwgb2YgdGhlIEhUTUwgY29kZSBmb3IgYSBzaW5nbGUgcHJvamVjdC5cbk1vc3Qgb2YgdGhlIEhUTUwgY29kZSBpcyBnZW5lcmF0ZWQgYnkgdGhlIGZ1bmN0aW9ucyBiZW5lYXRoIHRoaXMgb25lLlxuKi9cbmV4cG9ydCBjb25zdCBzaG93U2luZ2xlUHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3QpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwcm9qZWN0IGRhdGEgYXZhaWxhYmxlLicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIHRoZSBIVE1MIGNvZGUgZm9yIHRoZSBwcm9qZWN0IHBhZ2VcbiAgY29uc3QgcHJvamVjdExpbmsgPSBnZW5lcmF0ZVByb2plY3RMaW5rKHByb2plY3QpO1xuICBjb25zdCB1c2VkU2tpbGxzID0gZ2VuZXJhdGVVc2VkU2tpbGxzKHByb2plY3QpO1xuICBjb25zdCBwcm9qZWN0TWVkaWFFbGVtZW50cyA9IGdlbmVyYXRlUHJvamVjdE1lZGlhRWxlbWVudHMocHJvamVjdCk7XG4gIGNvbnN0IG1vcmVQcm9qZWN0cyA9IGF3YWl0IHNob3dNb3JlUHJvamVjdHMocHJvamVjdCk7XG4gIGNvbnN0IGFsbFByb2plY3RzTGluayA9IGdlbmVyYXRlQWxsUHJvamVjdHNMaW5rKCk7XG5cbiAgcmV0dXJuIGA8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwic2luZ2xlLXByb2plY3RcIj48ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZS1hbmQtbGlua1wiPjxoMj4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9oMj4ke3Byb2plY3RMaW5rfTwvZGl2PjxzZWN0aW9uIGNsYXNzPVwic2tpbGxzLWFuZC10b29sc1wiPjxzcGFuPlNraWxsczo8L3NwYW4+PHVsPiR7dXNlZFNraWxsc308L3VsPjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cIm1lZGlhLWVsZW1lbnRzXCI+JHtwcm9qZWN0TWVkaWFFbGVtZW50c308L3NlY3Rpb24+JHttb3JlUHJvamVjdHN9JHthbGxQcm9qZWN0c0xpbmt9PC9kaXY+YDtcbn07XG5cbi8qIFxuR2VuZXJhdGVzIGEgbGluayB0byB0aGUgcHJvamVjdCdzIGxpdmUgd2Vic2l0ZSBpZiB0aGUgcHJvcGVydHkgZXhpc3RzLlxuKi9cbmNvbnN0IGdlbmVyYXRlUHJvamVjdExpbmsgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5saXZlX3NpdGUpIHtcbiAgICByZXR1cm4gYDxhIGhyZWY9XCIke3Byb2plY3QubGl2ZV9zaXRlfVwiPjxzcGFuPkxpdmUtU2VpdGUgYmVzdWNoZW48L3NwYW4+PGltZyBzcmM9XCIke2V4dGVybmFsTGlua0ljb259XCI+PC9hPmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG4vKiBcbkduZXJhdGVzIHRoZSBIVE1MIGZvciBhIGxpc3Qgb2Ygc2tpbGxzIHVzZWQgZm9yIGEgc3BlY2lmaWMgcHJvamVjdC5cbiovXG5jb25zdCBnZW5lcmF0ZVVzZWRTa2lsbHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5za2lsbHMpIHtcbiAgICBjb25zdCBwcm9qZWN0U2tpbGxzID0gcHJvamVjdC5za2lsbHNcbiAgICAgIC5tYXAoKHNraWxsKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2tpbGwtdGFnXCI+JHtza2lsbH08L2xpPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHByb2plY3RTa2lsbHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG4vKiBcbkdlbmVyYXRlcyB0aGUgSFRNTCBmb3IgdGhlIFtlbGVtZW50c10gYXJyYXkgaW4gdGhlIHByb2plY3Qgb2JqZWN0LFxud2hpY2ggY29udGFpbnMgcmVmZXJlbmNlcyB0byBhbGwgbWVkaWEgZmlsZXMgdXNlZCBieSB0aGUgcHJvamVjdC5cbiovXG5jb25zdCBnZW5lcmF0ZVByb2plY3RNZWRpYUVsZW1lbnRzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QuZWxlbWVudHMpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBwcm9qZWN0LmVsZW1lbnRzXG4gICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9ICR7ZWxlbWVudC52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgPHZpZGVvIGNsYXNzPVwiJHtlbGVtZW50LmFib3ZlX2ZvbGQgPyAnJyA6ICdtZWRpYSBsYXp5LWxvYWQnfVwiIGF1dG9wbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgIDxzb3VyY2UgJHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFib3ZlX2ZvbGQgPyBgc3JjPVwiJHtlbGVtZW50LmNvbnRlbnR9XCJgIDogYGRhdGEtc3JjPVwiJHtlbGVtZW50LmNvbnRlbnR9XCJgXG4gICAgICAgICAgICAgIH0gdHlwZT1cInZpZGVvL21wNFwiPlxuICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9ICR7ZWxlbWVudC52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIiR7ZWxlbWVudC5hYm92ZV9mb2xkID8gJycgOiAnbWVkaWEgbGF6eS1sb2FkJ31cIiAke1xuICAgICAgICAgICAgICBlbGVtZW50LmFib3ZlX2ZvbGQgPyBgc3JjPVwiJHtlbGVtZW50LmNvbnRlbnR9XCJgIDogYGRhdGEtc3JjPVwiJHtlbGVtZW50LmNvbnRlbnR9XCJgXG4gICAgICAgICAgICB9XCI+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICAke2VsZW1lbnQuY29udGVudH1cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnY29tbWVudCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDxwPiR7ZWxlbWVudC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndHdvLWNvbHVtbic6XG4gICAgICAgICAgICAvLyBJdGVyYXRlcyBvdmVyIHRoZSBbZWxlbWVudHNdIGFycmF5LCB3aGljaCBjb250YWlucyByZWZlcmVuY2VzIHRvIG1lZGlhIGZpbGVzXG4gICAgICAgICAgICBjb25zdCB0d29Db2x1bW5FbGVtZW50cyA9IGVsZW1lbnQuY29udGVudFxuICAgICAgICAgICAgICAubWFwKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZWRpYS50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke21lZGlhLnR5cGV9ICR7bWVkaWEudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgICAgICAgIDx2aWRlbyBjbGFzcz1cIm1lZGlhIGxhenktbG9hZFwiIGF1dG9wbGF5IG11dGVkIGxvb3A+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgZGF0YS1zcmM9XCIke21lZGlhLmNvbnRlbnR9XCIgdHlwZT1cInZpZGVvL21wNFwiPlxuICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZWRpYS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke21lZGlhLnR5cGV9ICR7ZWxlbWVudC52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1lZGlhIGxhenktbG9hZFwiIGRhdGEtc3JjPVwiJHttZWRpYS5jb250ZW50fVwiPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8cD5VbnN1cHBvcnRlZCBtZWRpYSBmb3JtYXQuPC9wPmA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuam9pbignJyk7XG5cbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcyA9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICR7dHdvQ29sdW1uRWxlbWVudHN9XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbi8qIFxuR2VuZXJhdGVzIEhUTUwgZm9yIGEgc2VjdGlvbiB0aGF0IGRpc3BsYXlzIGEgbGluayBiYWNrIHRvIHRoZSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2VcbiovXG5jb25zdCBnZW5lcmF0ZUFsbFByb2plY3RzTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cImFsbC1wcm9qZWN0cy1saW5rXCI+PGEgaHJlZj1cIi9cIj48aW1nIHNyYz1cIiR7YXJyb3dMZWZ0fVwiPjxoMj5BbGxlIFByb2pla3RlPC9oMj48L2E+PC9zZWN0aW9uPmA7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWxsUHJvamVjdHNMaW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbGxQcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLWxpbmsgYScpO1xuXG4gIGFsbFByb2plY3RzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgfSk7XG59O1xuXG4vKiBcbjEuIFRyaWVzIHRvIGZpbmQgYSBwcm9qZWN0IGJ5IGl0J3MgbmFtZSBieSBjb21wYXJpbmcgdGhlIHBhdGggcGFzc2VkIGFzIGEgcGFyYW1ldGVyXG53aXRoIHRoZSBuYW1lcyBvZiB0aGUgcHJvamVjdHMgaW4gdGhlIGRhdGEgcG9vbC4gVGhlbiBpdCBjYWxscyBzaG93U2luZ2xlUHJvamVjdCgpIFxuYW5kIHJldHVybnMgdGhlIHByb2plY3QncyBuYW1lLlxuXG4yLiBIYXMgbm8gcHJvamVjdCBiZWVuIGZvdW5kLCB0aGUgZnVuY3Rpb24gcmV0dXJucyAnNDA0Jywgd2hpY2ggaXMgaGFuZGxlZCBieSByb3V0ZXIoKSBpbiByb3V0ZXIuanMuXG4qL1xuZXhwb3J0IGNvbnN0IGxvYWRTaW5nbGVQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHBhdGgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwYXRoLnNwbGl0KCcvJylbMV07IC8vIEFzc3VtaW5nIHBhdGhzIGxpa2UgXCIvcGF0aFwiXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0LnByb2plY3ROYW1lKSA9PT0gcHJvamVjdE5hbWVcbiAgKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBIVE1MQ29udGVudCA9IGF3YWl0IHNob3dTaW5nbGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsIEhUTUxDb250ZW50KTtcbiAgICAgIC8vIFJldHVybiB0aGUgcHJvamVjdCdzIG5hbWVcbiAgICAgIC8vIFdpbGwgYmUgc2V0IGFzIHRoZSBkb2N1bWVudC50aXRsZVxuICAgICAgcmV0dXJuIHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb2plY3QgZGV0YWlsczonLCBlcnJvcik7XG4gICAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT5FcnJvciBMb2FkaW5nIFByb2plY3Q8L2gxPicpO1xuICAgICAgcmV0dXJuICc0MDQnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT40MDQgTm90IEZvdW5kPC9oMT4nKTtcbiAgICByZXR1cm4gJzQwNCc7XG4gIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3Byb2plY3RzT3ZlcnZpZXdfanNcIjpcIjQyMWVhNTkxOWVjYzlkNmYwMDg2XCIsXCJzcmNfcHJvZmlsZV9qc1wiOlwiYjUzN2Q5Nzk4Y2E0NTU1NTE3NzJcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwicm9iZXJ0YXJuaW5nOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcm9iZXJ0YXJuaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3JvYmVydGFybmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByb3V0ZSwgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHsgaGFuZGxlTWVudUxpbmtzIH0gZnJvbSAnLi9tZW51JztcblxuLyogXG5SZWdpc3RlcnMgYSBzdGF0aWMgcm91dGUgYW5kIGxvYWRzIHRoZSBjb3JyZXNwb25kaW5nIHJvdXRlXG5oYW5kbGVyIGZ1bmN0aW9ucyBhc3luY2hyb25vdXNseSB3aXRoIHRoZSBpbXBvcnQgc3RhdGVtZW50XG4qL1xucm91dGUoXG4gICcvJyxcbiAgKCkgPT4gaW1wb3J0KCcuL3Byb2plY3RzT3ZlcnZpZXcuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvamVjdE92ZXJ2aWV3KSxcbiAgJ1JvYmVydCBBcm5pbmcg4oCTIFVJL1VYIERlc2lnbmVyJ1xuKTsgLy8gSG9tZXBhZ2VcbnJvdXRlKFxuICAnL3Byb2ZpbCcsXG4gICgpID0+IGltcG9ydCgnLi9wcm9maWxlLmpzJykudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuZGlzcGxheVByb2ZpbGUpLFxuICAnUm9iZXJ0IEFybmluZyDigJMgUHJvZmlsJ1xuKTsgLy8gUHJvZmlsZSBwYWdlXG5cbi8vIENhbGwgdGhlIHJvdXRlcigpIGFuZCBpbml0aWFsaXplIHRoZSBuYXZpZ2F0aW9uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICByb3V0ZXIoKTtcbiAgaGFuZGxlTWVudUxpbmtzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==