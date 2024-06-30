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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Inter-VariableFont_slnt,wght.woff2 */ "./src/fonts/Inter-VariableFont_slnt,wght.woff2"), __webpack_require__.b);
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
  --font-weight-thin: 300;
  --font-weight-regular: 400;
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
  hyphens: auto;
  /*       @include breakpoint-xxs() {
    hyphens: auto;
  } */
}
.single-project .codepen {
  height: 700px;
  max-width: 100%;
  min-width: 320px;
  padding-bottom: 26px;
  overflow: hidden;
  resize: horizontal;
  text-align: right;
  border-bottom: 2px solid #0d0d0d;
}
@media (max-width: 991px) {
  .single-project .codepen {
    margin: 0 -28px;
    max-width: calc(100% + 56px);
  }
}
@media (max-width: 767px) {
  .single-project .codepen {
    margin: 0 -20px;
    max-width: calc(100% + 40px);
  }
}
.single-project .codepen span {
  margin-right: 15px;
  font-size: 10px;
  text-transform: uppercase;
  font-weight: var(--font-weight-regular);
  letter-spacing: 1px;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/general-styles.scss","webpack://./src/scss/project-page.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.woff2') format('truetype-variations');\n}\n\n/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 376px) {\n    @content;\n  }\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 20px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-thin: 300;\n  --font-weight-regular: 400;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --20px-to-12px: #{fluid(12px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(460px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nbody {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n  margin: 0;\n  padding: 0 28px;\n\n  @include breakpoint-xs() {\n    padding: 0 20px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n","@import 'general-styles';\n\n/* LAZY LOADING\n=============================================================================================== */\n// Initial state of media-items with opacity set to 0\n.media {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n\n// Class to be added once the media is loaded\n.media-loaded {\n  opacity: 1;\n}\n\n/* SINGLE PROJECT PAGE\n=============================================================================================== */\n.single-project {\n  .project-title-and-link {\n    h2 {\n      display: inline;\n      margin-right: 30px;\n      margin-bottom: 0;\n\n      @include breakpoint-xs-half() {\n        hyphens: auto;\n      }\n      @include breakpoint-xxs() {\n        margin-right: 20px;\n      }\n    }\n\n    a {\n      display: inline-flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    span {\n      flex-shrink: 0;\n      margin: 6px 0 0;\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: baseline;\n    justify-content: flex-start;\n    gap: 5px;\n\n    margin: var(--15px-to-10px) 0 var(--65px-to-45px);\n    padding: var(--20px-to-12px) 0 0;\n\n    border-top: 2px solid var(--primary-color);\n\n    @include breakpoint-xxs() {\n      margin: 11px 0 30px;\n    }\n\n    span {\n      margin-right: 5px;\n      font-size: var(--font-size-skills-and-tools);\n      font-weight: var(--font-weight-medium);\n    }\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: var(--font-weight-regular);\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n\n        @include breakpoint-xxs() {\n          border-width: 1px;\n        }\n      }\n    }\n  }\n\n  .new,\n  .old {\n    position: relative;\n    border: 4px solid var(--color-green);\n    z-index: 0;\n\n    &:before {\n      content: 'Neues Design';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      padding: 7px 16px 7px 13px;\n\n      font-size: var(--font-size-version);\n      font-weight: var(--font-weight-semibold);\n      color: var(--color-white);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      background-color: var(--color-green);\n      z-index: 2;\n    }\n  }\n\n  .old {\n    border-color: var(--color-grey);\n\n    &:before {\n      content: 'Altes Design';\n      background-color: var(--color-grey);\n    }\n  }\n\n  .comment {\n    p {\n      font-size: var(--font-size-skills-and-tools);\n      padding: var(--120px-to-60px) 0 0;\n    }\n  }\n\n  .text + .comment {\n    p {\n      padding: 0;\n    }\n  }\n\n  .text {\n    padding: var(--120px-to-60px) 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n      hyphens: auto;\n\n      /*       @include breakpoint-xxs() {\n        hyphens: auto;\n      } */\n    }\n  }\n\n  // Display resizable handle on codepen iFrames\n  .codepen {\n    height: 700px;\n    max-width: 100%;\n    min-width: 320px;\n    padding-bottom: 26px;\n\n    overflow: hidden;\n    resize: horizontal;\n\n    text-align: right;\n    border-bottom: 2px solid #0d0d0d;\n\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n      max-width: calc(100% + 56px);\n    }\n    @include breakpoint-xs() {\n      margin: 0 -20px;\n      max-width: calc(100% + 40px);\n    }\n\n    span {\n      margin-right: 15px;\n      font-size: 10px;\n      text-transform: uppercase;\n      font-weight: var(--font-weight-regular);\n      letter-spacing: 1px;\n    }\n  }\n\n  // Wraps all elements on a project page\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    @include breakpoint-xxs() {\n      gap: 7.5px;\n    }\n\n    > .video,\n    > .image,\n    > .two-column {\n      @include breakpoint-sm() {\n        margin: 0 -28px;\n      }\n      @include breakpoint-xs() {\n        margin: 0 -20px;\n      }\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  // Shows previous and next project\n  .more-projects {\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n    }\n    @include breakpoint-xs() {\n      margin: 0 -20px;\n    }\n\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: var(--120px-to-60px) 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      @include breakpoint-xxs() {\n        gap: 7.5px;\n      }\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n\n  .all-projects-link {\n    padding: var(--160px-to-80px) 0;\n\n    a {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      gap: 20px;\n\n      padding: 0 0 20px;\n\n      h2 {\n        margin: 0;\n        font-weight: var(--font-weight-regular);\n      }\n\n      img {\n        width: var(--80px-to-40px);\n\n        @include breakpoint-xxs() {\n          width: 30px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
          case 'codepen':
            return `<div class="${element.type}"><iframe height="700" style="width: 100%;" scrolling="no" title="${element.title}" src="${element.embed_url}?default-tab=result&theme-id=dark&resizable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href="${element.url}">
            ${element.title}</a> by ideen-los (<a href="https://codepen.io/ideen-los">@ideen-los</a>)
            on <a href="https://codepen.io">CodePen</a>.
            </iframe><span>drag to resize</span></div>`;
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

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fonts/Inter-VariableFont_slnt,wght.woff2";

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
/******/ 			return "" + chunkId + "." + {"src_projectsOverview_js":"d0ed9830ad09f01ca806","src_profile_js":"20986ca33d07dfa488e4"}[chunkId] + ".js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNTMzMjQ0NjE2M2MyMDg5MTIxMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtLQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdJQUF3SSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxPQUFPLFdBQVcsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcs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V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQzs7V0FFakM7V0FDQTtXQUNBO1dBQ0EsS0FBSztXQUNMLGVBQWU7V0FDZjtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDckZBOzs7Ozs7Ozs7OztBQ0F5QztBQUNBOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUFLO0FBQ0w7QUFDQSxRQUFRLDhLQUErQjtBQUN2QztBQUNBLEdBQUc7QUFDSCw4Q0FBSztBQUNMO0FBQ0EsUUFBUSxtSkFBc0I7QUFDOUI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxFQUFFLCtDQUFNO0FBQ1IsRUFBRSxzREFBZTtBQUNqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Njc3MvcHJvamVjdC1wYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zY3NzL3Byb2plY3QtcGFnZS5zY3NzPzZiOGYiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvaGVscGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9tb3JlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Vzc2lvblN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3NpbmdsZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGT05UIEZBQ0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZS12YXJpYXRpb25zXCIpO1xufVxuLyogQlJFQUtQT0lOVFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBGT05UIFNJWkUgQ0FMQ1VMQVRJT05TIFdJVEggQ0xBTVAoKVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIENVU1RPTSBQUk9QRVJUSUVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0tY29sb3ItZ3JlZW46ICMyMmIwNmM7XG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcbiAgLS1sb2dvLXdpZHRoOiBjbGFtcCg2LjI1cmVtLCAzLjMxdncgKyA1LjM4cmVtLCA5LjMxcmVtKTtcbiAgLS1mb250LXNpemUtbmF2OiBjbGFtcCgxLjI1cmVtLCAwLjU0dncgKyAxLjExcmVtLCAxLjc1cmVtKTtcbiAgLS1mb250LXNpemUtdGV4dDogY2xhbXAoMS4zOHJlbSwgMC44MXZ3ICsgMS4xNnJlbSwgMi4xM3JlbSk7XG4gIC0tZm9udC1zaXplLWgxOiBjbGFtcCg1cmVtLCA2LjA4dncgKyAzLjRyZW0sIDEwLjYzcmVtKTtcbiAgLS1mb250LXNpemUtaDI6IGNsYW1wKDIuNXJlbSwgMy4zOHZ3ICsgMS42MXJlbSwgNS42M3JlbSk7XG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IGNsYW1wKDEuMjVyZW0sIDAuMjd2dyArIDEuMThyZW0sIDEuNXJlbSk7XG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogY2xhbXAoMXJlbSwgMC4xNHZ3ICsgMC45NnJlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogY2xhbXAoMXJlbSwgMC4xNHZ3ICsgMC45NnJlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZlcnNpb246IGNsYW1wKDAuODhyZW0sIDAuNDF2dyArIDAuNzdyZW0sIDEuMjVyZW0pO1xuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcbiAgLS1mb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MTA7XG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcbiAgLS1mbGV4LWdhcC1uYXY6IGNsYW1wKDAuNDRyZW0sIDIuOTF2dyArIC0wLjMzcmVtLCAzLjEzcmVtKTtcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiBjbGFtcCgzNy41cmVtLCAxOS41OXZ3ICsgMzIuMzZyZW0sIDU1LjYzcmVtKTtcbiAgLS0xNjBweC10by04MHB4OiBjbGFtcCg1cmVtLCA1LjQxdncgKyAzLjU4cmVtLCAxMHJlbSk7XG4gIC0tMTIwcHgtdG8tNjBweDogY2xhbXAoMy43NXJlbSwgNC4wNXZ3ICsgMi42OXJlbSwgNy41cmVtKTtcbiAgLS04MHB4LXRvLTQwcHg6IGNsYW1wKDIuNXJlbSwgMi43dncgKyAxLjc5cmVtLCA1cmVtKTtcbiAgLS03MHB4LXRvLTM1cHg6IGNsYW1wKDIuMTlyZW0sIDIuMzZ2dyArIDEuNTdyZW0sIDQuMzhyZW0pO1xuICAtLTY1cHgtdG8tNDVweDogY2xhbXAoMi44MXJlbSwgMS4zNXZ3ICsgMi40NnJlbSwgNC4wNnJlbSk7XG4gIC0tMjBweC10by0xMnB4OiBjbGFtcCgwLjc1cmVtLCAwLjU0dncgKyAwLjYxcmVtLCAxLjI1cmVtKTtcbiAgLS0xNXB4LXRvLTEwcHg6IGNsYW1wKDAuNjNyZW0sIDAuMzR2dyArIDAuNTRyZW0sIDAuOTRyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi43NnZ3ICsgMjkuNDhyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDI4Ljc1cmVtLCAyMi45N3Z3ICsgMjIuNzJyZW0sIDUwcmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiBjbGFtcCgwLjMxcmVtLCAwLjY4dncgKyAwLjE0cmVtLCAwLjk0cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1sb2dvLXdpZHRoOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLW5hdjogMThweDtcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xuICAgIC0tZm9udC1zaXplLWgyOiAzMHB4O1xuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xuICAgIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcbiAgfVxufVxuXG4vKiBHRU5FUkFMIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMjhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCkgLTEwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBsaW5lLWhlaWdodDogOTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4IC01cHg7XG4gIH1cbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxucCArIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAuaGlkZGVuLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi52aXNpYmxlLXh4cy1oYWxmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAudmlzaWJsZS14eHMtaGFsZiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLyogVFJBTlNJVElPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udHJhbnNpdGlvbi1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG59XG5cbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xufVxuXG4vKiBMT0dPICsgTkFWSUdBVElPTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cbmhlYWRlciBpbWcge1xuICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWluLXdpZHRoOiAzMXB4O1xuICB9XG59XG5oZWFkZXIgbmF2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcbiAgbWFyZ2luOiAwIDAgLTVweDtcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIHtcbiAgICBtYXJnaW46IDAgMCAtMnB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xuICB9XG59XG5oZWFkZXIgbmF2IHVsIGxpIGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLyogR0VORVJBTCBTVFlMRVMgRk9SICNDT05URU5UXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiB2YXIoLS04MHB4LXRvLTQwcHgpIGF1dG8gMDtcbiAgcGFkZGluZzogMDtcbn1cbiNjb250ZW50IC5ob21lcGFnZSxcbiNjb250ZW50IC5wcm9maWxlLXBhZ2Uge1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XG59XG5cbi8qIExBWlkgTE9BRElOR1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5tZWRpYSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbn1cblxuLm1lZGlhLWxvYWRlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIFNJTkdMRSBQUk9KRUNUIFBBR0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgaDIge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgaDIge1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgaDIge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XG59XG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgc3BhbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW46IDZweCAwIDA7XG59XG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgaW1nIHtcbiAgbWF4LXdpZHRoOiAxOHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IHZhcigtLTE1cHgtdG8tMTBweCkgMCB2YXIoLS02NXB4LXRvLTQ1cHgpO1xuICBwYWRkaW5nOiB2YXIoLS0yMHB4LXRvLTEycHgpIDAgMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB7XG4gICAgbWFyZ2luOiAxMXB4IDAgMzBweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIC5za2lsbC10YWcge1xuICBwYWRkaW5nOiB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxKSB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwgLnNraWxsLXRhZyB7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAubmV3LFxuLnNpbmdsZS1wcm9qZWN0IC5vbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgei1pbmRleDogMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAubmV3OmJlZm9yZSxcbi5zaW5nbGUtcHJvamVjdCAub2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiTmV1ZXMgRGVzaWduXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiA3cHggMTZweCA3cHggMTNweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmVyc2lvbik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICB6LWluZGV4OiAyO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5vbGQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5vbGQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJBbHRlcyBEZXNpZ25cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG59XG4uc2luZ2xlLXByb2plY3QgLmNvbW1lbnQgcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xuICBwYWRkaW5nOiB2YXIoLS0xMjBweC10by02MHB4KSAwIDA7XG59XG4uc2luZ2xlLXByb2plY3QgLnRleHQgKyAuY29tbWVudCBwIHtcbiAgcGFkZGluZzogMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCB7XG4gIHBhZGRpbmc6IHZhcigtLTEyMHB4LXRvLTYwcHgpIDA7XG59XG4uc2luZ2xlLXByb2plY3QgLnRleHQgcCB7XG4gIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XG4gIGh5cGhlbnM6IGF1dG87XG4gIC8qICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH0gKi9cbn1cbi5zaW5nbGUtcHJvamVjdCAuY29kZXBlbiB7XG4gIGhlaWdodDogNzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJlc2l6ZTogaG9yaXpvbnRhbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGQwZDBkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuY29kZXBlbiB7XG4gICAgbWFyZ2luOiAwIC0yOHB4O1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlICsgNTZweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLmNvZGVwZW4ge1xuICAgIG1hcmdpbjogMCAtMjBweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLmNvZGVwZW4gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMge1xuICAgIGdhcDogNy41cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLnZpZGVvLFxuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLmltYWdlLFxuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLnR3by1jb2x1bW4ge1xuICAgIG1hcmdpbjogMCAtMjhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMgPiAudmlkZW8sXG4gIC5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMgPiAuaW1hZ2UsXG4gIC5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMgPiAudHdvLWNvbHVtbiB7XG4gICAgbWFyZ2luOiAwIC0yMHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMge1xuICAgIG1hcmdpbjogMCAtMjhweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyB7XG4gICAgbWFyZ2luOiAwIC0yMHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgaDIge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIG1hcmdpbjogdmFyKC0tMTIwcHgtdG8tNjBweCkgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIC5tb3JlLXByb2plY3RzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1NzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMTcwLzU3O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcbiAgICBnYXA6IDcuNXB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2luZ2xlLXByb2plY3QgLmFsbC1wcm9qZWN0cy1saW5rIHtcbiAgcGFkZGluZzogdmFyKC0tMTYwcHgtdG8tODBweCkgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMCAyMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5hbGwtcHJvamVjdHMtbGluayBhIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG4uc2luZ2xlLXByb2plY3QgLmFsbC1wcm9qZWN0cy1saW5rIGEgaW1nIHtcbiAgd2lkdGg6IHZhcigtLTgwcHgtdG8tNDBweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5hbGwtcHJvamVjdHMtbGluayBhIGltZyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dlbmVyYWwtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3Byb2plY3QtcGFnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO2lHQUFBO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FDREY7QURJQTtpR0FBQTtBQTBFQTtpR0FBQTtBQW1DQTtpR0FBQTtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1REFBQTtFQU1BLDBEQUFBO0VBQ0EsMkRBQUE7RUFPQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0Esc0VBQUE7RUFDQSw2REFBQTtFQUNBLG1FQUFBO0VBQ0EsOERBQUE7RUFVQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUVBLDBEQUFBO0VBRUEsK0VBQUE7RUFFQSxxREFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUVBLDRFQUFBO0VBRUEsdUVBQUE7RUFDQSwrRUFBQTtFQUNBLCtFQUFBO0FDcklGO0FENkJFO0VBZ0RGO0lBU0ksa0JBQUE7RUNsRkY7QUFDRjtBRHdCRTtFQWdERjtJQWdCSSxxQkFBQTtJQUNBLHNCQUFBO0VDcEZGO0FBQ0Y7QURrQkU7RUFnREY7SUE0Qkksb0JBQUE7SUFDQSxvQkFBQTtJQUNBLGtDQUFBO0lBQ0EsMkJBQUE7SUFDQSxpQ0FBQTtFQzFGRjtBQUNGO0FEU0U7RUFnREY7SUEyREks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ZUFBQTtFQWtPTjtBQUNGO0FBOU5FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQWdPSjtBRDVZRTtFQ2dMQTtJQUVJLGVBQUE7RUE4Tko7QUFDRjtBRHJZRTtFQ29LQTtJQUtJLGVBQUE7RUFnT0o7QUFDRjtBQTlOSTtFQUNFLHVDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQWdPTjtBQTlOSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUErTk47QURoWUU7RUN5SkU7SUFXSSxVQUFBO0VBZ09OO0FBQ0Y7QUE5Tk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQStOUjtBQTFORTtFQUNFLCtCQUFBO0FBNE5KO0FBMU5JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBRUEsaUJBQUE7QUEyTk47QUF6Tk07RUFDRSxTQUFBO0VBQ0EsdUNBQUE7QUEyTlI7QUF4Tk07RUFDRSwwQkFBQTtBQTBOUjtBRDdaRTtFQ2tNSTtJQUlJLFdBQUE7RUEyTlI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbi8qIEZPTlQgRkFDRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC53b2ZmMicpIGZvcm1hdCgndHJ1ZXR5cGUtdmFyaWF0aW9ucycpO1xcbn1cXG5cXG4vKiBCUkVBS1BPSU5UU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQG1peGluIGJyZWFrcG9pbnQtbGcge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MjRweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLWxnIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LW1kIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1tZCB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXNtIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXNtIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4teHMge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzLWhhbGYge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbi8qIEZPTlQgU0laRSBDQUxDVUxBVElPTlMgV0lUSCBDTEFNUCgpXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kZGVmYXVsdC1taW4tYnA6IDQyMHB4O1xcbiRkZWZhdWx0LW1heC1icDogMTkwMHB4O1xcblxcbkBmdW5jdGlvbiByb3VuZCgkbnVtYmVyLCAkZGVjaW1hbHM6IDApIHtcXG4gICRuOiAxO1xcbiAgQGlmICRkZWNpbWFscyA+IDAge1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRkZWNpbWFscyB7XFxuICAgICAgJG46ICRuICogMTA7XFxuICAgIH1cXG4gIH1cXG4gIEByZXR1cm4gbWF0aC5kaXYobWF0aC5yb3VuZCgkbnVtYmVyICogJG4pLCAkbik7XFxufVxcblxcbkBmdW5jdGlvbiBweC10by1yZW0oJHB4KSB7XFxuICAkcmVtczogbWF0aC5kaXYoJHB4LCAxNnB4KSAqIDFyZW07XFxuICBAcmV0dXJuICRyZW1zO1xcbn1cXG5cXG5AZnVuY3Rpb24gZmx1aWQoXFxuICAkbWluLXNpemUsXFxuICAkbWF4LXNpemUsXFxuICAkbWluLWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1pbi1icCxcXG4gICRtYXgtYnJlYWtwb2ludDogJGRlZmF1bHQtbWF4LWJwLFxcbiAgJHVuaXQ6IHZ3XFxuKSB7XFxuICAkc2xvcGU6IG1hdGguZGl2KCRtYXgtc2l6ZSAtICRtaW4tc2l6ZSwgJG1heC1icmVha3BvaW50IC0gJG1pbi1icmVha3BvaW50KTtcXG4gICRzbG9wZS10by11bml0OiByb3VuZCgkc2xvcGUgKiAxMDAsIDIpO1xcbiAgJGludGVyY2VwdC1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUgLSAkc2xvcGUgKiAkbWluLWJyZWFrcG9pbnQpLCAyKTtcXG4gICRtaW4tc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUpLCAyKTtcXG4gICRtYXgtc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWF4LXNpemUpLCAyKTtcXG4gIEByZXR1cm4gY2xhbXAoI3skbWluLXNpemUtcmVtfSwgI3skc2xvcGUtdG8tdW5pdH0jeyR1bml0fSArICN7JGludGVyY2VwdC1yZW19LCAjeyRtYXgtc2l6ZS1yZW19KTtcXG59XFxuXFxuLyogQ1VTVE9NIFBST1BFUlRJRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xcbiAgLS1jb2xvci1ncmV5OiAjYTVhNWE1O1xcblxcbiAgLS1sb2dvLXdpZHRoOiAje2ZsdWlkKDEwMHB4LCAxNDlweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tbG9nby13aWR0aDogMzBweDtcXG4gIH1cXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1uYXY6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLXRleHQ6IDIwcHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1oMTogI3tmbHVpZCg4MHB4LCAxNzBweCl9O1xcbiAgLS1mb250LXNpemUtaDI6ICN7Zmx1aWQoNDBweCwgOTBweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogI3tmbHVpZCgyMHB4LCAyNHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZlcnNpb246ICN7Zmx1aWQoMTRweCwgMjBweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzBweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogMTVweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xcbiAgICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IDE0cHg7XFxuICB9XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcXG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUxMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDdweCwgNTBweCl9O1xcblxcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiAje2ZsdWlkKDYwMHB4LCA4OTBweCl9O1xcblxcbiAgLS0xNjBweC10by04MHB4OiAje2ZsdWlkKDgwcHgsIDE2MHB4KX07XFxuICAtLTEyMHB4LXRvLTYwcHg6ICN7Zmx1aWQoNjBweCwgMTIwcHgpfTtcXG4gIC0tODBweC10by00MHB4OiAje2ZsdWlkKDQwcHgsIDgwcHgpfTtcXG4gIC0tNzBweC10by0zNXB4OiAje2ZsdWlkKDM1cHgsIDcwcHgpfTtcXG4gIC0tNjVweC10by00NXB4OiAje2ZsdWlkKDQ1cHgsIDY1cHgpfTtcXG4gIC0tMjBweC10by0xMnB4OiAje2ZsdWlkKDEycHgsIDIwcHgpfTtcXG4gIC0tMTVweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDE1cHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNDYwcHgsIDgwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogM3B4O1xcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcXG4gIH1cXG59XFxuXFxuLyogR0VORVJBTCBTVFlMRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAyOHB4O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KSAtMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gIGxpbmUtaGVpZ2h0OiA5MCU7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDIwcHggMCAwO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxufVxcblxcbnAgKyBwIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbi14eHMtaGFsZiB7XFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4udmlzaWJsZS14eHMtaGFsZiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi8qIFRSQU5TSVRJT05TXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNpdGUgdGl0bGUgYmVmb3JlIHRyYW5zaXRpb25cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBza2lsbHMtYW5kLXRvb2xzIGRpdiBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBzaXRlIHRpdGxlXFxuLnRyYW5zaXRpb24tdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjA1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4wNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2Ygc2tpbGxzIGxpc3Qgb24gcHJvamVjdCBwYWdlc1xcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2YgZmlyc3QgbWVkaWEgZWxlbWVudCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xcbn1cXG5cXG4vKiBMT0dPICsgTkFWSUdBVElPTlxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuXFxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzLWhhbGYoKSB7XFxuICAgICAgbWluLXdpZHRoOiAzMXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuXFxuICAgIHVsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcXG5cXG4gICAgICBtYXJnaW46IDAgMCAtNXB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDMwcHg7XFxuXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgbWFyZ2luOiAwIDAgLTJweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgICAgcGFkZGluZzogNHB4IDdweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogR0VORVJBTCBTVFlMRVMgRk9SICNDT05URU5UXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiB2YXIoLS04MHB4LXRvLTQwcHgpIGF1dG8gMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICAuaG9tZXBhZ2UsXFxuICAucHJvZmlsZS1wYWdlIHtcXG4gICAgcGFkZGluZzogMCAwIHZhcigtLTE2MHB4LXRvLTgwcHgpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ2dlbmVyYWwtc3R5bGVzJztcXG5cXG4vKiBMQVpZIExPQURJTkdcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8vIEluaXRpYWwgc3RhdGUgb2YgbWVkaWEtaXRlbXMgd2l0aCBvcGFjaXR5IHNldCB0byAwXFxuLm1lZGlhIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi8vIENsYXNzIHRvIGJlIGFkZGVkIG9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZFxcbi5tZWRpYS1sb2FkZWQge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogU0lOR0xFIFBST0pFQ1QgUEFHRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnNpbmdsZS1wcm9qZWN0IHtcXG4gIC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIHtcXG4gICAgaDIge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG5cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzLWhhbGYoKSB7XFxuICAgICAgICBoeXBoZW5zOiBhdXRvO1xcbiAgICAgIH1cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgYSB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgZ2FwOiA4cHg7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlKTtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICBmbGV4LXNocmluazogMDtcXG4gICAgICBtYXJnaW46IDZweCAwIDA7XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDE4cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5za2lsbHMtYW5kLXRvb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBtYXJnaW46IHZhcigtLTE1cHgtdG8tMTBweCkgMCB2YXIoLS02NXB4LXRvLTQ1cHgpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS0yMHB4LXRvLTEycHgpIDAgMDtcXG5cXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICBtYXJnaW46IDExcHggMCAzMHB4O1xcbiAgICB9XFxuXFxuICAgIHNwYW4ge1xcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgICAgLnNraWxsLXRhZyB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxKSB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyKTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XFxuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuXFxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAubmV3LFxcbiAgLm9sZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiAgICB6LWluZGV4OiAwO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ05ldWVzIERlc2lnbic7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcblxcbiAgICAgIHBhZGRpbmc6IDdweCAxNnB4IDdweCAxM3B4O1xcblxcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZlcnNpb24pO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbik7XFxuICAgICAgei1pbmRleDogMjtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm9sZCB7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuXFxuICAgICY6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiAnQWx0ZXMgRGVzaWduJztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbW1lbnQge1xcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcXG4gICAgICBwYWRkaW5nOiB2YXIoLS0xMjBweC10by02MHB4KSAwIDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC50ZXh0ICsgLmNvbW1lbnQge1xcbiAgICBwIHtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLTEyMHB4LXRvLTYwcHgpIDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgICAgaHlwaGVuczogYXV0bztcXG5cXG4gICAgICAvKiAgICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIGh5cGhlbnM6IGF1dG87XFxuICAgICAgfSAqL1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyBEaXNwbGF5IHJlc2l6YWJsZSBoYW5kbGUgb24gY29kZXBlbiBpRnJhbWVzXFxuICAuY29kZXBlbiB7XFxuICAgIGhlaWdodDogNzAwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI2cHg7XFxuXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHJlc2l6ZTogaG9yaXpvbnRhbDtcXG5cXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGQwZDBkO1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXNtKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMjhweDtcXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSArIDU2cHgpO1xcbiAgICB9XFxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgICAgbWFyZ2luOiAwIC0yMHB4O1xcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlICsgNDBweCk7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAvLyBXcmFwcyBhbGwgZWxlbWVudHMgb24gYSBwcm9qZWN0IHBhZ2VcXG4gIC5tZWRpYS1lbGVtZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgZ2FwOiA3LjVweDtcXG4gICAgfVxcblxcbiAgICA+IC52aWRlbyxcXG4gICAgPiAuaW1hZ2UsXFxuICAgID4gLnR3by1jb2x1bW4ge1xcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtc20oKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTI4cHg7XFxuICAgICAgfVxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTIwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAudHdvLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgLy8gU2hvd3MgcHJldmlvdXMgYW5kIG5leHQgcHJvamVjdFxcbiAgLm1vcmUtcHJvamVjdHMge1xcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXNtKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMjhweDtcXG4gICAgfVxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMjBweDtcXG4gICAgfVxcblxcbiAgICBoMiB7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgICAgIG1hcmdpbjogdmFyKC0tMTIwcHgtdG8tNjBweCkgMDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiA1NzBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBhc3BlY3QtcmF0aW86IDE3MC81NztcXG5cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIGdhcDogNy41cHg7XFxuICAgICAgfVxcblxcbiAgICAgIGRpdiB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG5cXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmFsbC1wcm9qZWN0cy1saW5rIHtcXG4gICAgcGFkZGluZzogdmFyKC0tMTYwcHgtdG8tODBweCkgMDtcXG5cXG4gICAgYSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGdhcDogMjBweDtcXG5cXG4gICAgICBwYWRkaW5nOiAwIDAgMjBweDtcXG5cXG4gICAgICBoMiB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICAgICAgfVxcblxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogdmFyKC0tODBweC10by00MHB4KTtcXG5cXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LXBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtcGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlIH0gZnJvbSAnLi9zZXNzaW9uU3RvcmFnZSc7XG5cbi8qIFxuTG9hZHMgYSBKU09OIGZpbGUgd2l0aCBhbGwgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHNhdmVzIGl0XG50byBzZXNzaW9uU3RvcmFnZSBpZiBhdmFpbGFibGUsIHNvIHRoZSBkYXRhIGlzIGNhY2hlZCBmb3IgZnVydGhlciB1c2UuXG4qL1xuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZygnSW5pdGlhbGl6aW5nLi4uJyk7XG4gIGxldCBkYXRhO1xuXG4gIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgY29uc29sZS5sb2coJ3Nlc3Npb25TdG9yYWdlIGF2YWlsYWJsZS4uLicpO1xuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKSk7XG5cbiAgICBpZiAoc3RvcmVkRGF0YSkge1xuICAgICAgLy8gR2V0cyB0aGUgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlXG4gICAgICBjb25zb2xlLmxvZygnTG9hZGVkIHByb2plY3RzIGZyb20gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIGRhdGEgPSBzdG9yZWREYXRhO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBObyBzZXNzaW9uU3RvcmFnZSBhdmFpbGFibGUgb3Igbm8gZGF0YSBpbiBzZXNzaW9uU3RvcmFnZTpcbiAgLy8gZmV0Y2ggdGhlIGRhdGEuanNvbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBkYXRhLi4uJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2RhdGEvZGF0YS5qc29uJyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIEhUVFAgc3RhdHVzIGNvZGUgaXMgaW4gdGhlIDIwMC0yOTkgcmFuZ2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgLy8gU2F2ZSBmZXRjaGVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2VcbiAgICBpZiAoaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdTYXZlZCBkYXRhIHRvIHNlc3Npb25TdG9yYWdlJyk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGE6JywgZXJyb3IpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG4vKiBcbkdldHMgdGhlIGVsZW1lbnQgYnkgaXRzIGlkIHBhc3NlZCBhcyB0aGUgZnVuY3Rpb25zIDFzdCBwYXJhbWV0ZXIgYW5kXG5zZXRzIGl0cyBpbm5lckhUTUwgdG8gd2hhdGV2ZXIgY29udGVudCBpcyBwYXNzZWQgYXMgdGhlIDJuZCBwYXJhbWV0ZXJcbiovXG5leHBvcnQgY29uc3Qgc2V0Q29udGVudCA9IGZ1bmN0aW9uIChpZCwgY29udGVudCkge1xuICBjb25zdCBIVE1MZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICByZXR1cm4gKEhUTUxlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQpO1xufTtcblxuLyogXG5VcGRhdGVzIHRoZSBicm93c2VyJ3MgaGlzdG9yeSBzdGFjayBieSBhZGRpbmcgYSBuZXcgZW50cnkuIFRoaXMgc2V0cyB0aGUgbmV3IFVSTCBwYXRoIFxud2l0aG91dCByZWxvYWRpbmcgdGhlIHBhZ2UuIFRoZW4gY2FsbHMgdGhlIHJvdXRlcigpIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgVVJMIGNoYW5nZS5cbiovXG5leHBvcnQgY29uc3QgcHVzaFVSTEFuZENhbGxSb3V0ZXIgPSBmdW5jdGlvbiAoVVJMcGF0aCkge1xuICAvLyBVcGRhdGUgdGhlIFVSTFxuICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGAvJHtVUkxwYXRofWApO1xuICAvLyBDYWxsIHRoZSByb3V0ZXJcbiAgcm91dGVyKCk7XG59O1xuXG4vKiBcbjEuIEFkZHMgbGF6eSBsb2FkaW5nIHRvIGEgcGFnZVxuMi4gQWRkcyBhbmltYXRpb25zIHRvIHRoZSBwcm9qZWN0IHRpdGxlIFxuMy4gU2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiovXG5leHBvcnQgY29uc3Qgc2V0dXBQYWdlID0gZnVuY3Rpb24gKCkge1xuICBpbml0aWFsaXplTGF6eUxvYWRpbmcoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBoYW5kbGVBbmltYXRpb25PblBhZ2VUcmFuc2l0aW9uKCk7XG4gIH0pO1xuICAvLyBTZXQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIGJyb3dzZXIgd2luZG93XG4gIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG59O1xuXG4vKlxuRW5jb2RlcyB0aGUgXCJwcm9qZWN0TmFtZVwiIHZhbHVlIHRvIHNhZmVseSBpbmNsdWRlIGl0IGluIHRoZSBVUkwgcGF0aC5cblJlcGxhY2Ugc3BhY2VzIHdpdGggaHlwaGVucywgdGhlbiBlbmNvZGUgVVJJIGNvbXBvbmVudHMsIGFuZCBmaW5hbGx5IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4qL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1VSTFNhdmVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChuYW1lLnJlcGxhY2UoL1xccysvZywgJy0nKSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qIFxuQWRkcyBhbmltYXRpb25zIHRvIGEgcGFnZSdzIHRpdGxlLCB0aGUgcHJvamVjdCBuYW1lLCB0aGVcbmxpc3Qgb2Ygc2tpbGxzIHVzZWQgYW5kIHRoZSB3cmFwcGVyIGZvciBhIHByb2plY3QncyBlbGVtZW50cy5cbiovXG5leHBvcnQgY29uc3QgaGFuZGxlQW5pbWF0aW9uT25QYWdlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2l0ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgY29uc3QgYWxsTWVkaWFFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMnKTtcbiAgY29uc3QgcHJvamVjdFRpdGxlQW5kTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluaycpO1xuICBjb25zdCBwcm9qZWN0U2tpbGxzQW5kVG9vbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgc3BhbidcbiAgKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCcpO1xuICBjb25zdCBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gZGl2ID4gKidcbiAgKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQpO1xuXG4gIGlmIChzaXRlVGl0bGUpIHtcbiAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBzaXRlVGl0bGUuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoYWxsTWVkaWFFbGVtZW50cyAmJiBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQpIHtcbiAgICBpZiAocHJvamVjdFRpdGxlQW5kTGluaykge1xuICAgICAgcHJvamVjdFRpdGxlQW5kTGluay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG4gICAgfVxuXG4gICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4tb3BhY2l0eScpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMYWJlbCkge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0KSB7XG4gICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuXG4gICAgY29uc3QgYWRkVHJhbnNpdGlvblRyaWdnZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHByb2plY3RUaXRsZUFuZExpbmspIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0VGl0bGVBbmRMaW5rLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29scykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29scy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHNMYWJlbCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlJyk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gV2FpdHMgZm9yIHRoZSBmaXJzdCBlbGVtZW50IHRvIGxvYWQgYmVmb3JlIGF0dGFjaGluZyB0aGUgYW5pbWF0aW9uIHRyaWdnZXJzXG4gICAgaWYgKHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC50YWdOYW1lID09PSAnVklERU8nKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWaWRlbyEnKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XG4gICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBhZGRUcmFuc2l0aW9uVHJpZ2dlcnMoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UhJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lGUkFNRScpIHtcbiAgICAgIHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2lmcmFtZSEnKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufTtcblxuLyogXG5BZGRzIGFuIEludGVyYWN0aW9uT2JzZXJ2ZXIgdG8gdGhlIHZpZXdwb3J0IHRoYXQgc2V0cyB0aGUgc3JjIG9mIGEgdmlkZW9cbm9yIGltYWdlIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzIGRhdGEtc3JjLCB3aGVuIGl0IGNvbWVzIGludG8gdmlldy5cblRoaXMgd2F5IGltYWdlcyBhbmQgdmlkZW9zIGFyZSBvbmx5IGxvYWRlZCwgd2hlbiB0aGV5IGFyZSBuZWVkZWQuXG4qL1xuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMYXp5TG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbGF6eU1lZGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenktbG9hZCcpO1xuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gZW50cnkudGFyZ2V0O1xuXG4gICAgICAgIGlmIChtZWRpYS50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgICAgIG1lZGlhLnNyYyA9IG1lZGlhLmRhdGFzZXQuc3JjO1xuICAgICAgICAgIG1lZGlhLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLmNsYXNzTGlzdC5hZGQoJ21lZGlhLWxvYWRlZCcpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWEudGFnTmFtZSA9PT0gJ1ZJREVPJykge1xuICAgICAgICAgIEFycmF5LmZyb20obWVkaWEuY2hpbGRyZW4pLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS50YWdOYW1lID09PSAnU09VUkNFJykgc291cmNlLnNyYyA9IHNvdXJjZS5kYXRhc2V0LnNyYztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZWRpYS5sb2FkKCk7XG4gICAgICAgICAgbWVkaWEub25sb2FkZWRkYXRhID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWEuY2xhc3NMaXN0LmFkZCgnbWVkaWEtbG9hZGVkJyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShtZWRpYSk7IC8vIFN0b3Agb2JzZXJ2aW5nIG9uY2UgbG9hZGVkXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxhenlNZWRpYS5mb3JFYWNoKChtZWRpYSkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShtZWRpYSkpO1xufTtcbiIsImltcG9ydCB7IHB1c2hVUkxBbmRDYWxsUm91dGVyIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTWVudUxpbmtzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI2hvbWUnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJycpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNsb2dvJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjcHJvZmlsZScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcigncHJvZmlsJyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgcHVzaFVSTEFuZENhbGxSb3V0ZXIgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmNvbnN0IGZpbmRQcmV2aW91c0FuZE5leHRQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG5cbiAgdHJ5IHtcbiAgICBpZiAoIWRhdGEgfHwgIXByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgb3IgcHJvamVjdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IGRhdGEucHJvamVjdHM7XG4gICAgY29uc3QgY3VycmVudFByb2plY3RJbmRleCA9IE51bWJlcihwcm9qZWN0LmlkKSAtIDE7XG5cbiAgICBjb25zdCBuZXh0UHJvamVjdEluZGV4ID0gKGN1cnJlbnRQcm9qZWN0SW5kZXggKyAxKSAlIGFsbFByb2plY3RzLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0UHJvamVjdCA9IGFsbFByb2plY3RzW25leHRQcm9qZWN0SW5kZXhdO1xuXG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0SW5kZXggPVxuICAgICAgKGN1cnJlbnRQcm9qZWN0SW5kZXggLSAxICsgYWxsUHJvamVjdHMubGVuZ3RoKSAlIGFsbFByb2plY3RzLmxlbmd0aDtcbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3QgPSBhbGxQcm9qZWN0c1twcmV2aW91c1Byb2plY3RJbmRleF07XG5cbiAgICByZXR1cm4geyBwcmV2aW91c1Byb2plY3QsIG5leHRQcm9qZWN0IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YScsIGVycm9yKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaG93TW9yZVByb2plY3RzID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgY29uc3QgeyBwcmV2aW91c1Byb2plY3QsIG5leHRQcm9qZWN0IH0gPSBhd2FpdCBmaW5kUHJldmlvdXNBbmROZXh0UHJvamVjdChwcm9qZWN0KTtcblxuICB0cnkge1xuICAgIGlmICghcHJldmlvdXNQcm9qZWN0IHx8ICFuZXh0UHJvamVjdCkge1xuICAgICAgY29uc29sZS5lcnJvcignTm8gZGF0YSBvbiBwcmV2aW91cyBhbmQgbmV4dCBwcm9qZWN0IGF2YWlsYWJsZScpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdFVSTFBhdGggPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcmV2aW91c1Byb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0VVJMUGF0aCA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKG5leHRQcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJtb3JlLXByb2plY3RzXCI+PGgyPk1laHIgUHJvamVrdGU8L2gyPjxkaXYgY2xhc3M9XCJtb3JlLXByb2plY3RzLXdyYXBwZXJcIj48YSBocmVmPVwiLyR7cHJldmlvdXNQcm9qZWN0VVJMUGF0aH1cIiBjbGFzcz1cInByZXZpb3VzLXByb2plY3RcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ByZXZpb3VzUHJvamVjdC5pbWFnZX0nKTtcIj48L2Rpdj48L2E+PGEgaHJlZj1cIi8ke25leHRQcm9qZWN0VVJMUGF0aH1cIiBjbGFzcz1cIm5leHQtcHJvamVjdFwiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7bmV4dFByb2plY3QuaW1hZ2V9Jyk7XCI+PC9kaXY+PC9hPjwvZGl2Pjwvc2VjdGlvbj5gO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGEnLCBlcnJvcik7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTW9yZVByb2plY3RzTGlua3MgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHByZXZpb3VzUHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmlvdXMtcHJvamVjdCcpO1xuICBjb25zdCBuZXh0UHJvamVjdExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1wcm9qZWN0Jyk7XG5cbiAgY29uc3QgcHJldmlvdXNQcm9qZWN0VVJMUGF0aCA9IHByZXZpb3VzUHJvamVjdExpbmsuaHJlZi5zcGxpdCgnLycpWzNdO1xuICBjb25zdCBuZXh0UHJvamVjdFVSTFBhdGggPSBuZXh0UHJvamVjdExpbmsuaHJlZi5zcGxpdCgnLycpWzNdO1xuXG4gIHByZXZpb3VzUHJvamVjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcihwcmV2aW91c1Byb2plY3RVUkxQYXRoKTtcbiAgfSk7XG5cbiAgbmV4dFByb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIobmV4dFByb2plY3RVUkxQYXRoKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgaGFuZGxlQWxsUHJvamVjdHNMaW5rIH0gZnJvbSAnLi9zaW5nbGVQcm9qZWN0LmpzJztcblxuLyogXG5BbiBvYmplY3QgdGhhdCBjb250YWlucyBzdGF0aWMgcGF0aHMsIGFzIHdlbGwgYXMgYSBoYW5kbGVyIGFuZCBhIHRpdGxlIGFzc29jaWF0ZWQgd2l0aCBpdFxuKi9cbmNvbnN0IHJvdXRlcyA9IHt9O1xuXG4vKiBcbkNyZWF0ZXMgYW4gb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgXCJoYW5kbGVyXCIgYW5kIFwidGl0bGVcIiBhbmRcbmFzc2lnbnMgaXQgYXMgdmFsdWUgdG8gdGhlIGtleSBcInBhdGhcIiBpbiB0aGUgeyByb3V0ZXMgfSBvYmplY3RcbiovXG5leHBvcnQgY29uc3Qgcm91dGUgPSBmdW5jdGlvbiAocGF0aCwgaGFuZGxlckZ1bmN0aW9uLCB0aXRsZSkge1xuICByb3V0ZXNbcGF0aF0gPSB7IGhhbmRsZXI6IGhhbmRsZXJGdW5jdGlvbiwgdGl0bGU6IHRpdGxlIH07XG59O1xuXG4vKiBcbjEuIENoZWNrcyB3aGV0aGVyIHRoZSBjdXJyZW50IHBhdGggaGFzIGJlZW4gcmVnaXN0ZXJlZCBhcyBhIGtleSBpbiB0aGUgeyByb3V0ZXMgfSBvYmplY3QuXG5JZiBpdCBpcywgdGhlbiBpdCBjYWxscyB0aGUgaGFuZGxlciBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIHJlZ2lzdGVyZWQgcGF0aCBhbmQgc2V0cyB0aGUgdGl0bGUuXG5cbjIuIElzIHRoZSBjdXJyZW50IHBhdGggaXMgbm90IGEga2V5IGluIHsgcm91dGVzIH0sIGl0IHRyaWVzIHRvIGNhbGwgYSBmdW5jdGlvbiB0aGF0IGxvYWRzIGEgc2luZ2xlXG5wcm9qZWN0IGJhc2VkIG9uIHRoZSBwYXRoIG5hbWUuIElmIG5vIHByb2plY3Qgd2l0aCB0aGF0IG5hbWUgaXMgZm91bmQsIHRoZSBmdW5jdGlvbiByZXR1cm5zICc0MDQnLlxuKi9cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVybFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuXG4gIGlmIChyb3V0ZXNbdXJsUGF0aF0gJiYgcm91dGVzW3VybFBhdGhdLmhhbmRsZXIpIHtcbiAgICAvLyBUaGUgcGF0aCBpcyBpbiB0aGUgeyByb3V0ZXMgfSBvYmplY3QgYW5kIGhhcyBhIGhhbmRsZXJcbiAgICByb3V0ZXNbdXJsUGF0aF1cbiAgICAgIC5oYW5kbGVyKClcbiAgICAgIC50aGVuKChoYW5kbGVyRnVuY3Rpb24pID0+IHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgaGFuZGxlciBhc3NvY2lhdGVkIHdpdGggdGhlIHBhdGhcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKCk7XG4gICAgICAgIC8vIFNldCB0aGUgZG9jdW1lbnQgdGl0bGUgZnJvbSB0aGUgeyByb3V0ZSB9J3MgdGl0bGUgcHJvcGVydHlcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSByb3V0ZXNbdXJsUGF0aF0udGl0bGU7XG4gICAgICAgIC8vIExvYWQgdGhlIHBhZ2VcbiAgICAgICAgaW1wb3J0KCcuL2hlbHBlckZ1bmN0aW9ucy5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgIG1vZHVsZS5zZXR1cFBhZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCByb3V0ZSBoYW5kbGVyJywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gUGF0aCBpcyBub3QgcmVnaXN0ZXJlZCBvciBoYXMgbm8gaGFuZGxlclxuICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlIHBhdGggY29ycmVzcG9uZHMgdG8gYSBwcm9qZWN0XG4gICAgaW1wb3J0KCcuL3NpbmdsZVByb2plY3QuanMnKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgIG1vZHVsZVxuICAgICAgICAubG9hZFNpbmdsZVByb2plY3QodXJsUGF0aClcbiAgICAgICAgLnRoZW4oKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICAgICAgLy8gVGhlIGZ1bmN0aW9uIHJldHVybnMgZWl0aGVyIHRoZSBwcm9qZWN0J3MgbmFtZSBvciAnNDA0J1xuICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gJzQwNCcpIHtcbiAgICAgICAgICAgIC8vIElmIGEgcHJvamVjdCBpcyBmb3VuZCB0aGUgZnVuY3Rpb25zIHJldHVybnMgdGhlIHByb2plY3QncyBuYW1lXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IGBSb2JlcnQgQXJuaW5nIOKAkyAke3Byb2plY3ROYW1lfWA7XG4gICAgICAgICAgICBpbXBvcnQoJy4vaGVscGVyRnVuY3Rpb25zLmpzJykudGhlbigoaGVscGVyTW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgIGhlbHBlck1vZHVsZS5zZXR1cFBhZ2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1wb3J0KCcuL21vcmVQcm9qZWN0cy5qcycpLnRoZW4oKG1vcmVQcm9qZWN0c01vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICBtb3JlUHJvamVjdHNNb2R1bGUuaGFuZGxlTW9yZVByb2plY3RzTGlua3MoKTtcbiAgICAgICAgICAgICAgbW9kdWxlLmhhbmRsZUFsbFByb2plY3RzTGluaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIG5vIHByb2plY3QgaXMgZm91bmQgdGhlIGZ1bmN0aW9uIHJldHVybnMgJzQwNCdcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gJ1JvYmVydCBBcm5pbmcg4oCTIFBhZ2Ugbm90IGZvdW5kJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkeW5hbWljIGNvbnRlbnQgb3IgZmFsbGJhY2snLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBIYW5kbGUgYnJvd3NlciBuYXZpZ2F0aW9uIGV2ZW50c1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcm91dGVyKTtcbiIsIi8qXG5UZXN0cyBpZiBzZXNzaW9uU3RvcmFnZSBpcyBhdmFpbGFibGUgaW4gdGhlIHVzZXJzIGJyb3dzZXJcbiovXG5leHBvcnQgY29uc3QgaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0ZXN0ID0gJ3Rlc3Qtc3RvcmFnZSc7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh0ZXN0LCB0ZXN0KTtcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHRlc3QpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiaW1wb3J0ICcuL3Njc3MvcHJvamVjdC1wYWdlLnNjc3MnO1xuaW1wb3J0IGV4dGVybmFsTGlua0ljb24gZnJvbSAnLi9pbWcvZXh0ZXJuYWwtbGluay5zdmcnO1xuaW1wb3J0IGFycm93TGVmdCBmcm9tICcuL2ltZy9hcnJvdy1sZWZ0LnN2Zyc7XG5pbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgcHVzaFVSTEFuZENhbGxSb3V0ZXIsIHNldENvbnRlbnQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBzaG93TW9yZVByb2plY3RzIH0gZnJvbSAnLi9tb3JlUHJvamVjdHMnO1xuXG4vKiBcbkJ1bmRsZXMgYW5kIHJldHVybnMgYWxsIG9mIHRoZSBIVE1MIGNvZGUgZm9yIGEgc2luZ2xlIHByb2plY3QuXG5Nb3N0IG9mIHRoZSBIVE1MIGNvZGUgaXMgZ2VuZXJhdGVkIGJ5IHRoZSBmdW5jdGlvbnMgYmVuZWF0aCB0aGlzIG9uZS5cbiovXG5leHBvcnQgY29uc3Qgc2hvd1NpbmdsZVByb2plY3QgPSBhc3luYyBmdW5jdGlvbiAocHJvamVjdCkge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0KSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvamVjdCBkYXRhIGF2YWlsYWJsZS4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSB0aGUgSFRNTCBjb2RlIGZvciB0aGUgcHJvamVjdCBwYWdlXG4gIGNvbnN0IHByb2plY3RMaW5rID0gZ2VuZXJhdGVQcm9qZWN0TGluayhwcm9qZWN0KTtcbiAgY29uc3QgdXNlZFNraWxscyA9IGdlbmVyYXRlVXNlZFNraWxscyhwcm9qZWN0KTtcbiAgY29uc3QgcHJvamVjdE1lZGlhRWxlbWVudHMgPSBnZW5lcmF0ZVByb2plY3RNZWRpYUVsZW1lbnRzKHByb2plY3QpO1xuICBjb25zdCBtb3JlUHJvamVjdHMgPSBhd2FpdCBzaG93TW9yZVByb2plY3RzKHByb2plY3QpO1xuICBjb25zdCBhbGxQcm9qZWN0c0xpbmsgPSBnZW5lcmF0ZUFsbFByb2plY3RzTGluaygpO1xuXG4gIHJldHVybiBgPGRpdiBpZD1cIiR7cHJvamVjdC5pZH1cIiBjbGFzcz1cInNpbmdsZS1wcm9qZWN0XCI+PGRpdiBjbGFzcz1cInByb2plY3QtdGl0bGUtYW5kLWxpbmtcIj48aDI+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDI+JHtwcm9qZWN0TGlua308L2Rpdj48c2VjdGlvbiBjbGFzcz1cInNraWxscy1hbmQtdG9vbHNcIj48c3Bhbj5Ta2lsbHM6PC9zcGFuPjx1bD4ke3VzZWRTa2lsbHN9PC91bD48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3M9XCJtZWRpYS1lbGVtZW50c1wiPiR7cHJvamVjdE1lZGlhRWxlbWVudHN9PC9zZWN0aW9uPiR7bW9yZVByb2plY3RzfSR7YWxsUHJvamVjdHNMaW5rfTwvZGl2PmA7XG59O1xuXG4vKiBcbkdlbmVyYXRlcyBhIGxpbmsgdG8gdGhlIHByb2plY3QncyBsaXZlIHdlYnNpdGUgaWYgdGhlIHByb3BlcnR5IGV4aXN0cy5cbiovXG5jb25zdCBnZW5lcmF0ZVByb2plY3RMaW5rID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QubGl2ZV9zaXRlKSB7XG4gICAgcmV0dXJuIGA8YSBocmVmPVwiJHtwcm9qZWN0LmxpdmVfc2l0ZX1cIj48c3Bhbj5MaXZlLVNlaXRlIGJlc3VjaGVuPC9zcGFuPjxpbWcgc3JjPVwiJHtleHRlcm5hbExpbmtJY29ufVwiPjwvYT5gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuLyogXG5HbmVyYXRlcyB0aGUgSFRNTCBmb3IgYSBsaXN0IG9mIHNraWxscyB1c2VkIGZvciBhIHNwZWNpZmljIHByb2plY3QuXG4qL1xuY29uc3QgZ2VuZXJhdGVVc2VkU2tpbGxzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3Quc2tpbGxzKSB7XG4gICAgY29uc3QgcHJvamVjdFNraWxscyA9IHByb2plY3Quc2tpbGxzXG4gICAgICAubWFwKChza2lsbCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz1cInNraWxsLXRhZ1wiPiR7c2tpbGx9PC9saT5gO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBwcm9qZWN0U2tpbGxzO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuLyogXG5HZW5lcmF0ZXMgdGhlIEhUTUwgZm9yIHRoZSBbZWxlbWVudHNdIGFycmF5IGluIHRoZSBwcm9qZWN0IG9iamVjdCxcbndoaWNoIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gYWxsIG1lZGlhIGZpbGVzIHVzZWQgYnkgdGhlIHByb2plY3QuXG4qL1xuY29uc3QgZ2VuZXJhdGVQcm9qZWN0TWVkaWFFbGVtZW50cyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LmVsZW1lbnRzKSB7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnRzID0gcHJvamVjdC5lbGVtZW50c1xuICAgICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgIDx2aWRlbyBjbGFzcz1cIiR7ZWxlbWVudC5hYm92ZV9mb2xkID8gJycgOiAnbWVkaWEgbGF6eS1sb2FkJ31cIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICA8c291cmNlICR7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hYm92ZV9mb2xkID8gYHNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYCA6IGBkYXRhLXNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYFxuICAgICAgICAgICAgICB9IHR5cGU9XCJ2aWRlby9tcDRcIj5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCIke2VsZW1lbnQuYWJvdmVfZm9sZCA/ICcnIDogJ21lZGlhIGxhenktbG9hZCd9XCIgJHtcbiAgICAgICAgICAgICAgZWxlbWVudC5hYm92ZV9mb2xkID8gYHNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYCA6IGBkYXRhLXNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiYFxuICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgJHtlbGVtZW50LmNvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ2NvbW1lbnQnOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICA8cD4ke2VsZW1lbnQuY29udGVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIGNhc2UgJ3R3by1jb2x1bW4nOlxuICAgICAgICAgICAgLy8gSXRlcmF0ZXMgb3ZlciB0aGUgW2VsZW1lbnRzXSBhcnJheSwgd2hpY2ggY29udGFpbnMgcmVmZXJlbmNlcyB0byBtZWRpYSBmaWxlc1xuICAgICAgICAgICAgY29uc3QgdHdvQ29sdW1uRWxlbWVudHMgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgICAgLm1hcCgobWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaWEudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfSAke21lZGlhLnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3M9XCJtZWRpYSBsYXp5LWxvYWRcIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgICAgICA8c291cmNlIGRhdGEtc3JjPVwiJHttZWRpYS5jb250ZW50fVwiIHR5cGU9XCJ2aWRlby9tcDRcIj5cbiAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVkaWEudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHttZWRpYS50eXBlfSAke2VsZW1lbnQudmVyc2lvbiB8fCAnJ31cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtZWRpYSBsYXp5LWxvYWRcIiBkYXRhLXNyYz1cIiR7bWVkaWEuY29udGVudH1cIj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPHA+VW5zdXBwb3J0ZWQgbWVkaWEgZm9ybWF0LjwvcD5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3MgPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICAke3R3b0NvbHVtbkVsZW1lbnRzfVxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICdjb2RlcGVuJzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPjxpZnJhbWUgaGVpZ2h0PVwiNzAwXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiBzY3JvbGxpbmc9XCJub1wiIHRpdGxlPVwiJHtlbGVtZW50LnRpdGxlfVwiIHNyYz1cIiR7ZWxlbWVudC5lbWJlZF91cmx9P2RlZmF1bHQtdGFiPXJlc3VsdCZ0aGVtZS1pZD1kYXJrJnJlc2l6YWJsZT10cnVlXCIgZnJhbWVib3JkZXI9XCJub1wiIGxvYWRpbmc9XCJsYXp5XCIgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgU2VlIHRoZSBQZW4gPGEgaHJlZj1cIiR7ZWxlbWVudC51cmx9XCI+XG4gICAgICAgICAgICAke2VsZW1lbnQudGl0bGV9PC9hPiBieSBpZGVlbi1sb3MgKDxhIGhyZWY9XCJodHRwczovL2NvZGVwZW4uaW8vaWRlZW4tbG9zXCI+QGlkZWVuLWxvczwvYT4pXG4gICAgICAgICAgICBvbiA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvXCI+Q29kZVBlbjwvYT4uXG4gICAgICAgICAgICA8L2lmcmFtZT48c3Bhbj5kcmFnIHRvIHJlc2l6ZTwvc3Bhbj48L2Rpdj5gO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHByb2plY3RFbGVtZW50cztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbi8qIFxuR2VuZXJhdGVzIEhUTUwgZm9yIGEgc2VjdGlvbiB0aGF0IGRpc3BsYXlzIGEgbGluayBiYWNrIHRvIHRoZSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2VcbiovXG5jb25zdCBnZW5lcmF0ZUFsbFByb2plY3RzTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGA8c2VjdGlvbiBjbGFzcz1cImFsbC1wcm9qZWN0cy1saW5rXCI+PGEgaHJlZj1cIi9cIj48aW1nIHNyYz1cIiR7YXJyb3dMZWZ0fVwiPjxoMj5BbGxlIFByb2pla3RlPC9oMj48L2E+PC9zZWN0aW9uPmA7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWxsUHJvamVjdHNMaW5rID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbGxQcm9qZWN0c0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXByb2plY3RzLWxpbmsgYScpO1xuXG4gIGFsbFByb2plY3RzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgfSk7XG59O1xuXG4vKiBcbjEuIFRyaWVzIHRvIGZpbmQgYSBwcm9qZWN0IGJ5IGl0J3MgbmFtZSBieSBjb21wYXJpbmcgdGhlIHBhdGggcGFzc2VkIGFzIGEgcGFyYW1ldGVyXG53aXRoIHRoZSBuYW1lcyBvZiB0aGUgcHJvamVjdHMgaW4gdGhlIGRhdGEgcG9vbC4gVGhlbiBpdCBjYWxscyBzaG93U2luZ2xlUHJvamVjdCgpIFxuYW5kIHJldHVybnMgdGhlIHByb2plY3QncyBuYW1lLlxuXG4yLiBIYXMgbm8gcHJvamVjdCBiZWVuIGZvdW5kLCB0aGUgZnVuY3Rpb24gcmV0dXJucyAnNDA0Jywgd2hpY2ggaXMgaGFuZGxlZCBieSByb3V0ZXIoKSBpbiByb3V0ZXIuanMuXG4qL1xuZXhwb3J0IGNvbnN0IGxvYWRTaW5nbGVQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHBhdGgpIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBwYXRoLnNwbGl0KCcvJylbMV07IC8vIEFzc3VtaW5nIHBhdGhzIGxpa2UgXCIvcGF0aFwiXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0LnByb2plY3ROYW1lKSA9PT0gcHJvamVjdE5hbWVcbiAgKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBIVE1MQ29udGVudCA9IGF3YWl0IHNob3dTaW5nbGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsIEhUTUxDb250ZW50KTtcbiAgICAgIC8vIFJldHVybiB0aGUgcHJvamVjdCdzIG5hbWVcbiAgICAgIC8vIFdpbGwgYmUgc2V0IGFzIHRoZSBkb2N1bWVudC50aXRsZVxuICAgICAgcmV0dXJuIHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHByb2plY3QgZGV0YWlsczonLCBlcnJvcik7XG4gICAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT5FcnJvciBMb2FkaW5nIFByb2plY3Q8L2gxPicpO1xuICAgICAgcmV0dXJuICc0MDQnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZXRDb250ZW50KCdjb250ZW50JywgJzxoMT40MDQgTm90IEZvdW5kPC9oMT4nKTtcbiAgICByZXR1cm4gJzQwNCc7XG4gIH1cbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsge1wic3JjX3Byb2plY3RzT3ZlcnZpZXdfanNcIjpcImQwZWQ5ODMwYWQwOWYwMWNhODA2XCIsXCJzcmNfcHJvZmlsZV9qc1wiOlwiMjA5ODZjYTMzZDA3ZGZhNDg4ZTRcIn1bY2h1bmtJZF0gKyBcIi5qc1wiO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwicm9iZXJ0YXJuaW5nOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcm9iZXJ0YXJuaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3JvYmVydGFybmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByb3V0ZSwgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuaW1wb3J0IHsgaGFuZGxlTWVudUxpbmtzIH0gZnJvbSAnLi9tZW51JztcblxuLyogXG5SZWdpc3RlcnMgYSBzdGF0aWMgcm91dGUgYW5kIGxvYWRzIHRoZSBjb3JyZXNwb25kaW5nIHJvdXRlXG5oYW5kbGVyIGZ1bmN0aW9ucyBhc3luY2hyb25vdXNseSB3aXRoIHRoZSBpbXBvcnQgc3RhdGVtZW50XG4qL1xucm91dGUoXG4gICcvJyxcbiAgKCkgPT4gaW1wb3J0KCcuL3Byb2plY3RzT3ZlcnZpZXcuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvamVjdE92ZXJ2aWV3KSxcbiAgJ1JvYmVydCBBcm5pbmcg4oCTIFVJL1VYIERlc2lnbmVyJ1xuKTsgLy8gSG9tZXBhZ2VcbnJvdXRlKFxuICAnL3Byb2ZpbCcsXG4gICgpID0+IGltcG9ydCgnLi9wcm9maWxlLmpzJykudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuZGlzcGxheVByb2ZpbGUpLFxuICAnUm9iZXJ0IEFybmluZyDigJMgUHJvZmlsJ1xuKTsgLy8gUHJvZmlsZSBwYWdlXG5cbi8vIENhbGwgdGhlIHJvdXRlcigpIGFuZCBpbml0aWFsaXplIHRoZSBuYXZpZ2F0aW9uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICByb3V0ZXIoKTtcbiAgaGFuZGxlTWVudUxpbmtzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==