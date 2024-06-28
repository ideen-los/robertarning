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
  --100px-to-50px: clamp(3.13rem, 3.38vw + 2.24rem, 6.25rem);
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
  padding: 0 0 100px;
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
  gap: var(--100px-to-50px);
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
  padding: var(--100px-to-50px) 0 0;
}
.single-project .text + .comment p {
  padding: 0;
}
.single-project .text {
  padding: var(--100px-to-50px) 0;
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
  .single-project .video,
  .single-project .image {
    margin: 0 -28px;
  }
}
@media (max-width: 767px) {
  .single-project .video,
  .single-project .image {
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
@media (max-width: 420px) {
  .single-project .more-projects {
    margin: 0 -20px;
  }
}
.single-project .more-projects h2 {
  font-weight: var(--font-weight-regular);
  margin: var(--100px-to-50px) 0;
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

/* PROFILE PAGE
=============================================================================================== */
.profile-page .text p {
  max-width: var(--homepage-description-text-width);
}
.profile-page > .text:first-of-type {
  margin: 0 0 var(--100px-to-50px);
}
@media (max-width: 420px) {
  .profile-page > .text:first-of-type p {
    hyphens: auto;
  }
}
.profile-page .two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.profile-page .two-column p {
  max-width: var(--profile-skill-list-text-width);
  font-weight: var(--font-weight-thin);
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('./fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 376px) {\n    @content;\n  }\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 20px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-regular: 400;\n  --font-weight-thin: 300;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --100px-to-50px: #{fluid(50px, 100px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --20px-to-12px: #{fluid(12px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(460px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nbody {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n  margin: 0;\n  padding: 0 28px;\n\n  @include breakpoint-xs() {\n    padding: 0 20px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* LAZY LOADING\n=============================================================================================== */\n// Initial state of media-items with opacity set to 0\n.media {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n\n// Class to be added once the media is loaded\n.media-loaded {\n  opacity: 1;\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0 0 100px;\n}\n\n/* Homepage\n=============================================================================================== */\n.homepage {\n  .description {\n    margin: 0 0 var(--70px-to-35px);\n\n    p {\n      max-width: var(--homepage-description-text-width);\n\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: var(--100px-to-50px);\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: var(--single-project-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n    figure {\n      @include breakpoint-sm() {\n        margin: 0 -28px;\n      }\n      @include breakpoint-xs() {\n        margin: 0 -20px;\n      }\n    }\n  }\n}\n\n/* SINGLE PROJECT PAGE\n=============================================================================================== */\n.single-project {\n  .project-title-and-link {\n    h2 {\n      display: inline;\n      margin-right: 30px;\n      margin-bottom: 0;\n\n      @include breakpoint-xs-half() {\n        hyphens: auto;\n      }\n      @include breakpoint-xxs() {\n        margin-right: 20px;\n      }\n    }\n\n    a {\n      display: inline-flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    span {\n      flex-shrink: 0;\n      margin: 6px 0 0;\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: baseline;\n    justify-content: flex-start;\n    gap: 5px;\n\n    margin: var(--15px-to-10px) 0 var(--65px-to-45px);\n    padding: var(--20px-to-12px) 0 0;\n\n    border-top: 2px solid var(--primary-color);\n\n    @include breakpoint-xxs() {\n      margin: 11px 0 30px;\n    }\n\n    span {\n      margin-right: 5px;\n      font-size: var(--font-size-skills-and-tools);\n      font-weight: var(--font-weight-medium);\n    }\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: var(--font-weight-regular);\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n\n        @include breakpoint-xxs() {\n          border-width: 1px;\n        }\n      }\n    }\n  }\n\n  .new,\n  .old {\n    position: relative;\n    border: 4px solid var(--color-green);\n    z-index: 0;\n\n    &:before {\n      content: 'Neues Design';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      padding: 7px 16px 7px 13px;\n\n      font-size: var(--font-size-version);\n      font-weight: var(--font-weight-semibold);\n      color: var(--color-white);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      background-color: var(--color-green);\n      z-index: 2;\n    }\n  }\n\n  .old {\n    border-color: var(--color-grey);\n\n    &:before {\n      content: 'Altes Design';\n      background-color: var(--color-grey);\n    }\n  }\n\n  .comment {\n    p {\n      font-size: var(--font-size-skills-and-tools);\n      padding: var(--100px-to-50px) 0 0;\n    }\n  }\n\n  .text + .comment {\n    p {\n      padding: 0;\n    }\n  }\n\n  .text {\n    padding: var(--100px-to-50px) 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n\n  // Wraps all elements on a project page\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    @include breakpoint-xxs() {\n      gap: 7.5px;\n    }\n  }\n\n  .video,\n  .image {\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n    }\n    @include breakpoint-xs() {\n      margin: 0 -20px;\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n\n  // Shows previous and next project\n  .more-projects {\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n    }\n    @include breakpoint-xxs() {\n      margin: 0 -20px;\n    }\n\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: var(--100px-to-50px) 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      @include breakpoint-xxs() {\n        gap: 7.5px;\n      }\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n}\n\n/* PROFILE PAGE\n=============================================================================================== */\n.profile-page {\n  .text {\n    p {\n      max-width: var(--homepage-description-text-width);\n    }\n  }\n\n  > .text:first-of-type {\n    margin: 0 0 var(--100px-to-50px);\n\n    p {\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n\n    p {\n      max-width: var(--profile-skill-list-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
    __webpack_require__.e(/*! import() */ "src_singleProject_js").then(__webpack_require__.bind(__webpack_require__, /*! ./singleProject.js */ "./src/singleProject.js")).then((module) => {
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
/******/ 			return "" + chunkId + "." + {"src_projectsOverview_js":"40e06409ef251a659b7e","src_profile_js":"923c0ddcc2161941694f","src_singleProject_js":"d93a4b34873bf1639e88","src_moreProjects_js":"32daf2533efa099b32cc"}[chunkId] + ".js";
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
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)(
  '/',
  () => __webpack_require__.e(/*! import() */ "src_projectsOverview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./projectsOverview.js */ "./src/projectsOverview.js")).then((module) => module.displayProjectOverview),
  'Robert Arning – UI/UX Designer'
);
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)(
  '/profil',
  () => __webpack_require__.e(/*! import() */ "src_profile_js").then(__webpack_require__.bind(__webpack_require__, /*! ./profile.js */ "./src/profile.js")).then((module) => module.displayProfile),
  'Robert Arning – Profil'
);

document.addEventListener('DOMContentLoaded', function () {
  (0,_router__WEBPACK_IMPORTED_MODULE_1__.router)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.handleMenuLinks)();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZDJmOWFmYWY3ODg0YjkzNWQ0MS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVB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QWU7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogRk9OVCBGQUNFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1wiKTtcbn1cbi8qIEJSRUFLUE9JTlRTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogRk9OVCBTSVpFIENBTENVTEFUSU9OUyBXSVRIIENMQU1QKClcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBDVVNUT00gUFJPUEVSVElFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xuICAtLWNvbG9yLWdyZXk6ICNhNWE1YTU7XG4gIC0tbG9nby13aWR0aDogY2xhbXAoNi4yNXJlbSwgMy4zMXZ3ICsgNS4zOHJlbSwgOS4zMXJlbSk7XG4gIC0tZm9udC1zaXplLW5hdjogY2xhbXAoMS4yNXJlbSwgMC41NHZ3ICsgMS4xMXJlbSwgMS43NXJlbSk7XG4gIC0tZm9udC1zaXplLXRleHQ6IGNsYW1wKDEuMzhyZW0sIDAuODF2dyArIDEuMTZyZW0sIDIuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMTogY2xhbXAoNXJlbSwgNi4wOHZ3ICsgMy40cmVtLCAxMC42M3JlbSk7XG4gIC0tZm9udC1zaXplLWgyOiBjbGFtcCgyLjVyZW0sIDMuMzh2dyArIDEuNjFyZW0sIDUuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiBjbGFtcCgxLjI1cmVtLCAwLjI3dncgKyAxLjE4cmVtLCAxLjVyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTZyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTZyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiBjbGFtcCgwLjg4cmVtLCAwLjQxdncgKyAwLjc3cmVtLCAxLjI1cmVtKTtcbiAgLS1mb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTEwO1xuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XG4gIC0tZmxleC1nYXAtbmF2OiBjbGFtcCgwLjQ0cmVtLCAyLjkxdncgKyAtMC4zM3JlbSwgMy4xM3JlbSk7XG4gIC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aDogY2xhbXAoMzcuNXJlbSwgMTkuNTl2dyArIDMyLjM2cmVtLCA1NS42M3JlbSk7XG4gIC0tMTAwcHgtdG8tNTBweDogY2xhbXAoMy4xM3JlbSwgMy4zOHZ3ICsgMi4yNHJlbSwgNi4yNXJlbSk7XG4gIC0tODBweC10by00MHB4OiBjbGFtcCgyLjVyZW0sIDIuN3Z3ICsgMS43OXJlbSwgNXJlbSk7XG4gIC0tNzBweC10by0zNXB4OiBjbGFtcCgyLjE5cmVtLCAyLjM2dncgKyAxLjU3cmVtLCA0LjM4cmVtKTtcbiAgLS02NXB4LXRvLTQ1cHg6IGNsYW1wKDIuODFyZW0sIDEuMzV2dyArIDIuNDZyZW0sIDQuMDZyZW0pO1xuICAtLTIwcHgtdG8tMTJweDogY2xhbXAoMC43NXJlbSwgMC41NHZ3ICsgMC42MXJlbSwgMS4yNXJlbSk7XG4gIC0tMTVweC10by0xMHB4OiBjbGFtcCgwLjYzcmVtLCAwLjM0dncgKyAwLjU0cmVtLCAwLjk0cmVtKTtcbiAgLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aDogY2xhbXAoMzEuMjVyZW0sIDYuNzZ2dyArIDI5LjQ4cmVtLCAzNy41cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoOiBjbGFtcCgyOC43NXJlbSwgMjIuOTd2dyArIDIyLjcycmVtLCA1MHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogY2xhbXAoMC4zMXJlbSwgMC42OHZ3ICsgMC4xNHJlbSwgMC45NHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogY2xhbXAoMC42M3JlbSwgMS4wMXZ3ICsgMC4zNnJlbSwgMS41NnJlbSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tbG9nby13aWR0aDogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS1uYXY6IDE4cHg7XG4gICAgLS1mb250LXNpemUtdGV4dDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS1oMTogNjBweDtcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzBweDtcbiAgICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiAxNXB4O1xuICAgIC0tZm9udC1zaXplLXNraWxsLXRhZzogMTRweDtcbiAgICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAzcHg7XG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiA2cHg7XG4gIH1cbn1cblxuLyogR0VORVJBTCBTVFlMRVNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDI4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgMCB2YXIoLS03MHB4LXRvLTM1cHgpIC0xMHB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbGluZS1oZWlnaHQ6IDkwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoMSB7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xuICB9XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAtMnB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuaDMsXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59XG5cbnAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgLmhpZGRlbi14eHMtaGFsZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udmlzaWJsZS14eHMtaGFsZiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgLnZpc2libGUteHhzLWhhbGYge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi8qIExBWlkgTE9BRElOR1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5tZWRpYSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dDtcbn1cblxuLm1lZGlhLWxvYWRlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIFRSQU5TSVRJT05TXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnRyYW5zaXRpb24taW4ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xufVxuXG4udHJhbnNpdGlvbi1pbi1vcGFjaXR5IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjA1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4wNXM7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZC1tb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuNDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjQ1cztcbn1cblxuLyogTE9HTyArIE5BVklHQVRJT05cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XG59XG5oZWFkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcbiAgbWluLXdpZHRoOiA4MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NnB4KSB7XG4gIGhlYWRlciBpbWcge1xuICAgIG1pbi13aWR0aDogMzFweDtcbiAgfVxufVxuaGVhZGVyIG5hdiB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbn1cbmhlYWRlciBuYXYgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IHZhcigtLWZsZXgtZ2FwLW5hdik7XG4gIG1hcmdpbjogMCAwIC01cHg7XG4gIHBhZGRpbmc6IDAgMCAwIDMwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaGVhZGVyIG5hdiB1bCB7XG4gICAgbWFyZ2luOiAwIDAgLTJweDtcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xuICB9XG59XG5oZWFkZXIgbmF2IHVsIGxpIGEge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGhlYWRlciBuYXYgdWwgbGkgYSB7XG4gICAgcGFkZGluZzogNHB4IDdweDtcbiAgfVxufVxuaGVhZGVyIG5hdiB1bCBsaSBhOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi8qIEdFTkVSQUwgU1RZTEVTIEZPUiAjQ09OVEVOVFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogdmFyKC0tODBweC10by00MHB4KSBhdXRvIDA7XG4gIHBhZGRpbmc6IDAgMCAxMDBweDtcbn1cblxuLyogSG9tZXBhZ2Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uaG9tZXBhZ2UgLmRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KTtcbn1cbi5ob21lcGFnZSAuZGVzY3JpcHRpb24gcCB7XG4gIG1heC13aWR0aDogdmFyKC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhvbWVwYWdlIC5kZXNjcmlwdGlvbiBwIHtcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG59XG5cbi5wcm9qZWN0cy1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogdmFyKC0tMTAwcHgtdG8tNTBweCk7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9qZWN0cy1vdmVydmlldyBhcnRpY2xlIHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnByb2plY3RzLW92ZXJ2aWV3IGFydGljbGUgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgLTI4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucHJvamVjdHMtb3ZlcnZpZXcgYXJ0aWNsZSBmaWd1cmUge1xuICAgIG1hcmdpbjogMCAtMjBweDtcbiAgfVxufVxuXG4vKiBTSU5HTEUgUFJPSkVDVCBQQUdFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGgyIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGgyIHtcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGgyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGUpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIHNwYW4ge1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luOiA2cHggMCAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWFuZC1saW5rIGltZyB7XG4gIG1heC13aWR0aDogMThweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDVweDtcbiAgbWFyZ2luOiB2YXIoLS0xNXB4LXRvLTEwcHgpIDAgdmFyKC0tNjVweC10by00NXB4KTtcbiAgcGFkZGluZzogdmFyKC0tMjBweC10by0xMnB4KSAwIDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICAgIG1hcmdpbjogMTFweCAwIDMwcHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCAuc2tpbGwtdGFnIHtcbiAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIC5za2lsbC10YWcge1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLm5ldyxcbi5zaW5nbGUtcHJvamVjdCAub2xkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1ncmVlbik7XG4gIHotaW5kZXg6IDA7XG59XG4uc2luZ2xlLXByb2plY3QgLm5ldzpiZWZvcmUsXG4uc2luZ2xlLXByb2plY3QgLm9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIk5ldWVzIERlc2lnblwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogN3B4IDE2cHggN3B4IDEzcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZlcnNpb24pO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcbiAgei1pbmRleDogMjtcbn1cbi5zaW5nbGUtcHJvamVjdCAub2xkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn1cbi5zaW5nbGUtcHJvamVjdCAub2xkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiQWx0ZXMgRGVzaWduXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5jb21tZW50IHAge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcbiAgcGFkZGluZzogdmFyKC0tMTAwcHgtdG8tNTBweCkgMCAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0ICsgLmNvbW1lbnQgcCB7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2luZ2xlLXByb2plY3QgLnRleHQge1xuICBwYWRkaW5nOiB2YXIoLS0xMDBweC10by01MHB4KSAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAudGV4dCBwIHtcbiAgICBoeXBoZW5zOiBhdXRvO1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMge1xuICAgIGdhcDogNy41cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnZpZGVvLFxuICAuc2luZ2xlLXByb2plY3QgLmltYWdlIHtcbiAgICBtYXJnaW46IDAgLTI4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnZpZGVvLFxuICAuc2luZ2xlLXByb2plY3QgLmltYWdlIHtcbiAgICBtYXJnaW46IDAgLTIwcHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAudHdvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyB7XG4gICAgbWFyZ2luOiAwIC0yOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIHtcbiAgICBtYXJnaW46IDAgLTIwcHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbWFyZ2luOiB2YXIoLS0xMDBweC10by01MHB4KSAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDU3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxNzAvNTc7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIC5tb3JlLXByb2plY3RzLXdyYXBwZXIge1xuICAgIGdhcDogNy41cHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyAubW9yZS1wcm9qZWN0cy13cmFwcGVyIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLyogUFJPRklMRSBQQUdFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnByb2ZpbGUtcGFnZSAudGV4dCBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoKTtcbn1cbi5wcm9maWxlLXBhZ2UgPiAudGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwIDAgdmFyKC0tMTAwcHgtdG8tNTBweCk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnByb2ZpbGUtcGFnZSA+IC50ZXh0OmZpcnN0LW9mLXR5cGUgcCB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufVxuLnByb2ZpbGUtcGFnZSAudHdvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxNXB4O1xufVxuLnByb2ZpbGUtcGFnZSAudHdvLWNvbHVtbiBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO2lHQUFBO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FBREY7QUFJQTtpR0FBQTtBQTBFQTtpR0FBQTtBQW1DQTtpR0FBQTtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1REFBQTtFQU1BLDBEQUFBO0VBQ0EsMkRBQUE7RUFPQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0Esc0VBQUE7RUFDQSw2REFBQTtFQUNBLG1FQUFBO0VBQ0EsOERBQUE7RUFVQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUVBLDBEQUFBO0VBRUEsK0VBQUE7RUFFQSwwREFBQTtFQUNBLG9EQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFFQSw0RUFBQTtFQUVBLHVFQUFBO0VBQ0EsK0VBQUE7RUFDQSwrRUFBQTtBQXJJRjtBQThCRTtFQWdERjtJQVNJLGtCQUFBO0VBbkZGO0FBQ0Y7QUF5QkU7RUFnREY7SUFnQkkscUJBQUE7SUFDQSxzQkFBQTtFQXJGRjtBQUNGO0FBbUJFO0VBZ0RGO0lBNEJJLG9CQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQ0FBQTtJQUNBLDJCQUFBO0lBQ0EsaUNBQUE7RUEzRkY7QUFDRjtBQVVFO0VBZ0RGO0lBMERJLHlDQUFBO0lBQ0EseUNBQUE7RUFoSEY7QUFDRjs7QUFtSEE7aUdBQUE7QUFFQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFB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QTdXRTtFQW1nQkE7SUFLSSxlQUFBO0VBdkpKO0FBQ0Y7QUF5Skk7RUFDRSx1Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUF2Sk47QUF5Skk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBeEpOO0FBaFlFO0VBZ2hCRTtJQVdJLFVBQUE7RUF2Sk47QUFDRjtBQXlKTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBeEpSOztBQThKQTtpR0FBQTtBQUlJO0VBQ0UsaURBQUE7QUE3Sk47QUFpS0U7RUFDRSxnQ0FBQTtBQS9KSjtBQXJaRTtFQXNqQkU7SUFFSSxhQUFBO0VBL0pOO0FBQ0Y7QUFtS0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBaktKO0FBbUtJO0VBQ0UsK0NBQUE7RUFDQSxvQ0FBQTtBQWpLTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbi8qIEZPTlQgRkFDRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUtdmFyaWF0aW9ucycpO1xcbn1cXG5cXG4vKiBCUkVBS1BPSU5UU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQG1peGluIGJyZWFrcG9pbnQtbGcge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MjRweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLWxnIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LW1kIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1tZCB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXNtIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXNtIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4teHMge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzLWhhbGYge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbi8qIEZPTlQgU0laRSBDQUxDVUxBVElPTlMgV0lUSCBDTEFNUCgpXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kZGVmYXVsdC1taW4tYnA6IDQyMHB4O1xcbiRkZWZhdWx0LW1heC1icDogMTkwMHB4O1xcblxcbkBmdW5jdGlvbiByb3VuZCgkbnVtYmVyLCAkZGVjaW1hbHM6IDApIHtcXG4gICRuOiAxO1xcbiAgQGlmICRkZWNpbWFscyA+IDAge1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRkZWNpbWFscyB7XFxuICAgICAgJG46ICRuICogMTA7XFxuICAgIH1cXG4gIH1cXG4gIEByZXR1cm4gbWF0aC5kaXYobWF0aC5yb3VuZCgkbnVtYmVyICogJG4pLCAkbik7XFxufVxcblxcbkBmdW5jdGlvbiBweC10by1yZW0oJHB4KSB7XFxuICAkcmVtczogbWF0aC5kaXYoJHB4LCAxNnB4KSAqIDFyZW07XFxuICBAcmV0dXJuICRyZW1zO1xcbn1cXG5cXG5AZnVuY3Rpb24gZmx1aWQoXFxuICAkbWluLXNpemUsXFxuICAkbWF4LXNpemUsXFxuICAkbWluLWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1pbi1icCxcXG4gICRtYXgtYnJlYWtwb2ludDogJGRlZmF1bHQtbWF4LWJwLFxcbiAgJHVuaXQ6IHZ3XFxuKSB7XFxuICAkc2xvcGU6IG1hdGguZGl2KCRtYXgtc2l6ZSAtICRtaW4tc2l6ZSwgJG1heC1icmVha3BvaW50IC0gJG1pbi1icmVha3BvaW50KTtcXG4gICRzbG9wZS10by11bml0OiByb3VuZCgkc2xvcGUgKiAxMDAsIDIpO1xcbiAgJGludGVyY2VwdC1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUgLSAkc2xvcGUgKiAkbWluLWJyZWFrcG9pbnQpLCAyKTtcXG4gICRtaW4tc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUpLCAyKTtcXG4gICRtYXgtc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWF4LXNpemUpLCAyKTtcXG4gIEByZXR1cm4gY2xhbXAoI3skbWluLXNpemUtcmVtfSwgI3skc2xvcGUtdG8tdW5pdH0jeyR1bml0fSArICN7JGludGVyY2VwdC1yZW19LCAjeyRtYXgtc2l6ZS1yZW19KTtcXG59XFxuXFxuLyogQ1VTVE9NIFBST1BFUlRJRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xcbiAgLS1jb2xvci1ncmV5OiAjYTVhNWE1O1xcblxcbiAgLS1sb2dvLXdpZHRoOiAje2ZsdWlkKDEwMHB4LCAxNDlweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tbG9nby13aWR0aDogMzBweDtcXG4gIH1cXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1uYXY6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLXRleHQ6IDIwcHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1oMTogI3tmbHVpZCg4MHB4LCAxNzBweCl9O1xcbiAgLS1mb250LXNpemUtaDI6ICN7Zmx1aWQoNDBweCwgOTBweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogI3tmbHVpZCgyMHB4LCAyNHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZlcnNpb246ICN7Zmx1aWQoMTRweCwgMjBweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzBweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogMTVweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xcbiAgICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IDE0cHg7XFxuICB9XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUxMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDdweCwgNTBweCl9O1xcblxcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiAje2ZsdWlkKDYwMHB4LCA4OTBweCl9O1xcblxcbiAgLS0xMDBweC10by01MHB4OiAje2ZsdWlkKDUwcHgsIDEwMHB4KX07XFxuICAtLTgwcHgtdG8tNDBweDogI3tmbHVpZCg0MHB4LCA4MHB4KX07XFxuICAtLTcwcHgtdG8tMzVweDogI3tmbHVpZCgzNXB4LCA3MHB4KX07XFxuICAtLTY1cHgtdG8tNDVweDogI3tmbHVpZCg0NXB4LCA2NXB4KX07XFxuICAtLTIwcHgtdG8tMTJweDogI3tmbHVpZCgxMnB4LCAyMHB4KX07XFxuICAtLTE1cHgtdG8tMTBweDogI3tmbHVpZCgxMHB4LCAxNXB4KX07XFxuXFxuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiAje2ZsdWlkKDUwMHB4LCA2MDBweCl9O1xcblxcbiAgLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoOiAje2ZsdWlkKDQ2MHB4LCA4MDBweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAje2ZsdWlkKDVweCwgMTVweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiAje2ZsdWlkKDEwcHgsIDI1cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcXG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiA2cHg7XFxuICB9XFxufVxcblxcbi8qIEdFTkVSQUwgU1RZTEVTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDAgMjhweDtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCkgLTEwcHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIG1hcmdpbjogMCAwIDMwcHggLTVweDtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luOiAwIDAgMjBweCAtMnB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxuICBsaW5lLWhlaWdodDogMTAwJTtcXG59XFxuXFxuaDMsXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAyMHB4IDAgMDtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbn1cXG5cXG5wICsgcCB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oaWRkZW4teHhzLWhhbGYge1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLnZpc2libGUteHhzLWhhbGYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzLWhhbGYoKSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4vKiBMQVpZIExPQURJTkdcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8vIEluaXRpYWwgc3RhdGUgb2YgbWVkaWEtaXRlbXMgd2l0aCBvcGFjaXR5IHNldCB0byAwXFxuLm1lZGlhIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQ7XFxufVxcblxcbi8vIENsYXNzIHRvIGJlIGFkZGVkIG9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZFxcbi5tZWRpYS1sb2FkZWQge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLyogVFJBTlNJVElPTlNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8vIEluaXRpYWwgc3RhdGUgb2Ygc2l0ZSB0aXRsZSBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xcbn1cXG5cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNraWxscy1hbmQtdG9vbHMgZGl2IGJlZm9yZSB0cmFuc2l0aW9uXFxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIHNpdGUgdGl0bGVcXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBza2lsbHMgbGlzdCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBmaXJzdCBtZWRpYSBlbGVtZW50IG9uIHByb2plY3QgcGFnZXNcXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjQ1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40NXM7XFxufVxcblxcbi8qIExPR08gKyBOQVZJR0FUSU9OXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgICBtaW4td2lkdGg6IDMxcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xcblxcbiAgICAgIG1hcmdpbjogMCAwIC01cHg7XFxuICAgICAgcGFkZGluZzogMCAwIDAgMzBweDtcXG5cXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgMCAtMnB4O1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHggN3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xcbiAgcGFkZGluZzogMCAwIDEwMHB4O1xcbn1cXG5cXG4vKiBIb21lcGFnZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhvbWVwYWdlIHtcXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCk7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aCk7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBoeXBoZW5zOiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBQcm9qZWN0IG92ZXJ2aWV3XFxuLnByb2plY3RzLW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS0xMDBweC10by01MHB4KTtcXG5cXG4gIG1hcmdpbjogMDtcXG5cXG4gIGFydGljbGUge1xcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcXG4gICAgfVxcbiAgICBmaWd1cmUge1xcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtc20oKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTI4cHg7XFxuICAgICAgfVxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTIwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIFNJTkdMRSBQUk9KRUNUIFBBR0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XFxuICAgIGgyIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cy1oYWxmKCkge1xcbiAgICAgICAgaHlwaGVuczogYXV0bztcXG4gICAgICB9XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgIGdhcDogOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgbWFyZ2luOiA2cHggMCAwO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2tpbGxzLWFuZC10b29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgbWFyZ2luOiB2YXIoLS0xNXB4LXRvLTEwcHgpIDAgdmFyKC0tNjVweC10by00NXB4KTtcXG4gICAgcGFkZGluZzogdmFyKC0tMjBweC10by0xMnB4KSAwIDA7XFxuXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgbWFyZ2luOiAxMXB4IDAgMzBweDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIC5za2lsbC10YWcge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XFxuXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbC10YWcpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm5ldyxcXG4gIC5vbGQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgJjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6ICdOZXVlcyBEZXNpZ24nO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG5cXG4gICAgICBwYWRkaW5nOiA3cHggMTZweCA3cHggMTNweDtcXG5cXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12ZXJzaW9uKTtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xcbiAgICAgIHotaW5kZXg6IDI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5vbGQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ0FsdGVzIERlc2lnbic7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XFxuICAgICAgcGFkZGluZzogdmFyKC0tMTAwcHgtdG8tNTBweCkgMCAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCArIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRleHQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS0xMDBweC10by01MHB4KSAwO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgaHlwaGVuczogYXV0bztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFdyYXBzIGFsbCBlbGVtZW50cyBvbiBhIHByb2plY3QgcGFnZVxcbiAgLm1lZGlhLWVsZW1lbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICBnYXA6IDcuNXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAudmlkZW8sXFxuICAuaW1hZ2Uge1xcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXNtKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMjhweDtcXG4gICAgfVxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMjBweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnR3by1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC8vIFNob3dzIHByZXZpb3VzIGFuZCBuZXh0IHByb2plY3RcXG4gIC5tb3JlLXByb2plY3RzIHtcXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC1zbSgpIHtcXG4gICAgICBtYXJnaW46IDAgLTI4cHg7XFxuICAgIH1cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgbWFyZ2luOiAwIC0yMHB4O1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuICAgICAgbWFyZ2luOiB2YXIoLS0xMDBweC10by01MHB4KSAwO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgICAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1heC1oZWlnaHQ6IDU3MHB4O1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGFzcGVjdC1yYXRpbzogMTcwLzU3O1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgZ2FwOiA3LjVweDtcXG4gICAgICB9XFxuXFxuICAgICAgZGl2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIFBST0ZJTEUgUEFHRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLnByb2ZpbGUtcGFnZSB7XFxuICAudGV4dCB7XFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gID4gLnRleHQ6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbjogMCAwIHZhcigtLTEwMHB4LXRvLTUwcHgpO1xcblxcbiAgICBwIHtcXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIGh5cGhlbnM6IGF1dG87XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAudHdvLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxNXB4O1xcblxcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoKTtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG4vKiBcblNldHMgd2hhdGV2ZXIgY29udGVudCBpcyBwYXNzZWQgYXMgc2Vjb25kIHBhcmFtZXRlciBhcyBpbm5lckhUTUxcbm9mIHRoZSBvYmplY3Qgd2l0aCB0aGUgaWQgcGFzc2VkIGFzIGZpcnN0IHBhcmFtZXRlci5cbiovXG5leHBvcnQgY29uc3Qgc2V0Q29udGVudCA9IGZ1bmN0aW9uIChpZCwgY29udGVudCkge1xuICBjb25zdCBIVE1MZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICByZXR1cm4gKEhUTUxlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQpO1xufTtcblxuLyogXG5UYWtlcyBhIHBhdGggbGlrZSBcInByb2plY3ROYW1lXCIgYXMgcGFyYW1ldGVyXG5hbmQgc2V0cyB0aGlzIHBhdGggYXMgdGhlIG5ldyBVUkwuIEZpbmFsbHkgaXRcbmNhbGxzIHRoZSByb3V0ZXIoKSBmdW5jdGlvbi5cbiovXG5leHBvcnQgY29uc3QgcHVzaFVSTEFuZENhbGxSb3V0ZXIgPSBmdW5jdGlvbiAoVVJMcGF0aCkge1xuICAvLyBVcGRhdGUgdGhlIFVSTFxuICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGAvJHtVUkxwYXRofWApO1xuICAvLyBDYWxsIHRoZSByb3V0ZXJcbiAgcm91dGVyKCk7XG59O1xuXG4vKiBcbjEuIEFkZHMgbGF6eSBsb2FkaW5nIHRvIGEgcGFnZVxuMi4gQWRkcyBhbmltYXRpb25zIHRvIHRoZSBwcm9qZWN0IHRpdGxlIFxuMy4gU2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiovXG5leHBvcnQgY29uc3Qgc2V0dXBQYWdlID0gZnVuY3Rpb24gKCkge1xuICBpbml0aWFsaXplTGF6eUxvYWRpbmcoKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBoYW5kbGVBbmltYXRpb25PblBhZ2VUcmFuc2l0aW9uKCk7XG4gIH0pO1xuICAvLyBTZXQgc2Nyb2xsIHBvc2l0aW9uIHRvIHRoZSB0b3Agb2YgdGhlIGJyb3dzZXIgd2luZG93XG4gIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG59O1xuXG4vKlxuRW5jb2RlcyB0aGUgXCJwcm9qZWN0TmFtZVwiIHZhbHVlIHRvIHNhZmVseSBpbmNsdWRlIGl0IGluIHRoZSBVUkwgcGF0aC5cblJlcGxhY2Ugc3BhY2VzIHdpdGggaHlwaGVucywgdGhlbiBlbmNvZGUgVVJJIGNvbXBvbmVudHMsIGFuZCBmaW5hbGx5IGNvbnZlcnQgdG8gbG93ZXJjYXNlXG4qL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1VSTFNhdmVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChuYW1lLnJlcGxhY2UoL1xccysvZywgJy0nKSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qIFxuQWRkcyBhbmltYXRpb25zIHRvIGEgcGFnZSdzIHRpdGxlLCB0aGUgcHJvamVjdCBuYW1lLCB0aGVcbmxpc3Qgb2Ygc2tpbGxzIHVzZWQgYW5kIHRoZSB3cmFwcGVyIGZvciBhIHByb2plY3QncyBlbGVtZW50cy5cbiovXG5leHBvcnQgY29uc3QgaGFuZGxlQW5pbWF0aW9uT25QYWdlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc2l0ZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZXBhZ2UgLmRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGFsbE1lZGlhRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzJyk7XG4gIGNvbnN0IHByb2plY3RUaXRsZUFuZExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsnKTtcbiAgY29uc3QgcHJvamVjdFNraWxsc0FuZFRvb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzJyk7XG4gIGNvbnN0IHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHNwYW4nXG4gICk7XG4gIGNvbnN0IHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwnKTtcbiAgY29uc3QgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IGRpdiA+IConXG4gICk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdEZpcnN0TWVkaWFFbGVtZW50KTtcblxuICBpZiAoc2l0ZVRpdGxlKSB7XG4gICAgc2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgc2l0ZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGFsbE1lZGlhRWxlbWVudHMgJiYgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50KSB7XG4gICAgaWYgKHByb2plY3RUaXRsZUFuZExpbmspIHtcbiAgICAgIHByb2plY3RUaXRsZUFuZExpbmsuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi1pbicpO1xuICAgIH1cblxuICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHMpIHtcbiAgICAgIHByb2plY3RTa2lsbHNBbmRUb29scy5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluLW9wYWNpdHknKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwpIHtcbiAgICAgIHByb2plY3RTa2lsbHNBbmRUb29sc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcbiAgICB9XG5cbiAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdCkge1xuICAgICAgcHJvamVjdFNraWxsc0FuZFRvb2xzTGlzdC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG4gICAgfVxuXG4gICAgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24taW4nKTtcblxuICAgIGNvbnN0IGFkZFRyYW5zaXRpb25UcmlnZ2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcm9qZWN0VGl0bGVBbmRMaW5rKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdFRpdGxlQW5kTGluay5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9qZWN0U2tpbGxzQW5kVG9vbHMpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHMuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvamVjdFNraWxsc0FuZFRvb2xzTGFiZWwpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHNMYWJlbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2plY3RTa2lsbHNBbmRUb29sc0xpc3QpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBwcm9qZWN0U2tpbGxzQW5kVG9vbHNMaXN0LmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZScpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFdhaXRzIGZvciB0aGUgZmlyc3QgZWxlbWVudCB0byBsb2FkIGJlZm9yZSBhdHRhY2hpbmcgdGhlIGFuaW1hdGlvbiB0cmlnZ2Vyc1xuICAgIGlmIChwcm9qZWN0Rmlyc3RNZWRpYUVsZW1lbnQudGFnTmFtZSA9PT0gJ1ZJREVPJykge1xuICAgICAgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFkZFRyYW5zaXRpb25UcmlnZ2VycygpO1xuICAgICAgICBjb25zb2xlLmxvZygnVmlkZW8hJyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb2plY3RGaXJzdE1lZGlhRWxlbWVudC50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgcHJvamVjdEZpcnN0TWVkaWFFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgYWRkVHJhbnNpdGlvblRyaWdnZXJzKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0ltYWdlIScpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyogXG5BZGRzIGFuIEludGVyYWN0aW9uT2JzZXJ2ZXIgdG8gdGhlIHZpZXdwb3J0IHRoYXQgc2V0cyB0aGUgc3JjIG9mIGEgdmlkZW9cbm9yIGltYWdlIHRvIHRoZSB2YWx1ZSBvZiB0aGUgZWxlbWVudCdzIGRhdGEtc3JjLCB3aGVuIGl0IGNvbWVzIGludG8gdmlldy5cblRoaXMgd2F5IGltYWdlcyBhbmQgdmlkZW9zIGFyZSBvbmx5IGxvYWRlZCwgd2hlbiB0aGV5IGFyZSBuZWVkZWQuXG4qL1xuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMYXp5TG9hZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbGF6eU1lZGlhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenktbG9hZCcpO1xuXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIGNvbnN0IG1lZGlhID0gZW50cnkudGFyZ2V0O1xuXG4gICAgICAgIGlmIChtZWRpYS50YWdOYW1lID09PSAnSU1HJykge1xuICAgICAgICAgIG1lZGlhLnNyYyA9IG1lZGlhLmRhdGFzZXQuc3JjO1xuICAgICAgICAgIG1lZGlhLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhLmNsYXNzTGlzdC5hZGQoJ21lZGlhLWxvYWRlZCcpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWEudGFnTmFtZSA9PT0gJ1ZJREVPJykge1xuICAgICAgICAgIEFycmF5LmZyb20obWVkaWEuY2hpbGRyZW4pLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNvdXJjZS50YWdOYW1lID09PSAnU09VUkNFJykgc291cmNlLnNyYyA9IHNvdXJjZS5kYXRhc2V0LnNyYztcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZWRpYS5sb2FkKCk7XG4gICAgICAgICAgbWVkaWEub25sb2FkZWRkYXRhID0gKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWEuY2xhc3NMaXN0LmFkZCgnbWVkaWEtbG9hZGVkJyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShtZWRpYSk7IC8vIFN0b3Agb2JzZXJ2aW5nIG9uY2UgbG9hZGVkXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGxhenlNZWRpYS5mb3JFYWNoKChtZWRpYSkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShtZWRpYSkpO1xufTtcbiIsImltcG9ydCB7IHB1c2hVUkxBbmRDYWxsUm91dGVyIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTWVudUxpbmtzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcblxuICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI2hvbWUnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJycpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNsb2dvJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjcHJvZmlsZScpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcigncHJvZmlsJyk7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKiBcbkFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHN0YXRpYyBwYXRocywgYXMgd2VsbCBhcyBhIGhhbmRsZXIgYW5kIGEgdGl0bGUgYXNzb2NpYXRlZCB3aXRoIGl0XG4qL1xuY29uc3Qgcm91dGVzID0ge307XG5cbi8qIFxuQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBcImhhbmRsZXJcIiBhbmQgXCJ0aXRsZVwiIGFuZFxuYXNzaWducyBpdCBhcyB2YWx1ZSB0byB0aGUga2V5IFwicGF0aFwiIGluIHRoZSB7IHJvdXRlcyB9IG9iamVjdFxuKi9cbmV4cG9ydCBjb25zdCByb3V0ZSA9IGZ1bmN0aW9uIChwYXRoLCBoYW5kbGVyRnVuY3Rpb24sIHRpdGxlKSB7XG4gIHJvdXRlc1twYXRoXSA9IHsgaGFuZGxlcjogaGFuZGxlckZ1bmN0aW9uLCB0aXRsZTogdGl0bGUgfTtcbn07XG5cbi8qIFxuMS4gQ2hlY2tzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGF0aCBoYXMgYmVlbiByZWdpc3RlcmVkIGFzIGEga2V5IGluIHRoZSB7IHJvdXRlcyB9IG9iamVjdC5cbklmIGl0IGlzLCB0aGVuIGl0IGNhbGxzIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVnaXN0ZXJlZCBwYXRoIGFuZCBzZXRzIHRoZSB0aXRsZS5cblxuMi4gSXMgdGhlIGN1cnJlbnQgcGF0aCBpcyBub3QgYSBrZXkgaW4geyByb3V0ZXMgfSwgaXQgdHJpZXMgdG8gY2FsbCBhIGZ1bmN0aW9uIHRoYXQgbG9hZHMgYSBzaW5nbGVcbnByb2plY3QgYmFzZWQgb24gdGhlIHBhdGggbmFtZS4gSWYgbm8gcHJvamVjdCB3aXRoIHRoYXQgbmFtZSBpcyBmb3VuZCwgdGhlIGZ1bmN0aW9uIHJldHVybnMgJzQwNCcuXG4qL1xuZXhwb3J0IGNvbnN0IHJvdXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdXJsUGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB8fCAnLyc7XG5cbiAgaWYgKHJvdXRlc1t1cmxQYXRoXSAmJiByb3V0ZXNbdXJsUGF0aF0uaGFuZGxlcikge1xuICAgIC8vIFRoZSBwYXRoIGlzIGluIHRoZSB7IHJvdXRlcyB9IG9iamVjdCBhbmQgaGFzIGEgaGFuZGxlclxuICAgIHJvdXRlc1t1cmxQYXRoXVxuICAgICAgLmhhbmRsZXIoKVxuICAgICAgLnRoZW4oKGhhbmRsZXJGdW5jdGlvbikgPT4ge1xuICAgICAgICAvLyBFeGVjdXRlIHRoZSBoYW5kbGVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGF0aFxuICAgICAgICBoYW5kbGVyRnVuY3Rpb24oKTtcbiAgICAgICAgLy8gU2V0IHRoZSBkb2N1bWVudCB0aXRsZSBmcm9tIHRoZSB7IHJvdXRlIH0ncyB0aXRsZSBwcm9wZXJ0eVxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHJvdXRlc1t1cmxQYXRoXS50aXRsZTtcbiAgICAgICAgLy8gTG9hZCB0aGUgcGFnZVxuICAgICAgICBpbXBvcnQoJy4vaGVscGVyRnVuY3Rpb25zLmpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgbW9kdWxlLnNldHVwUGFnZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHJvdXRlIGhhbmRsZXInLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXRoIGlzIG5vdCByZWdpc3RlcmVkIG9yIGhhcyBubyBoYW5kbGVyXG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgcGF0aCBjb3JyZXNwb25kcyB0byBhIHByb2plY3RcbiAgICBpbXBvcnQoJy4vc2luZ2xlUHJvamVjdC5qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgbW9kdWxlXG4gICAgICAgIC5sb2FkU2luZ2xlUHJvamVjdCh1cmxQYXRoKVxuICAgICAgICAudGhlbigocHJvamVjdE5hbWUpID0+IHtcbiAgICAgICAgICAvLyBUaGUgZnVuY3Rpb24gcmV0dXJucyBlaXRoZXIgdGhlIHByb2plY3QncyBuYW1lIG9yICc0MDQnXG4gICAgICAgICAgaWYgKHByb2plY3ROYW1lICE9PSAnNDA0Jykge1xuICAgICAgICAgICAgLy8gSWYgYSBwcm9qZWN0IGlzIGZvdW5kIHRoZSBmdW5jdGlvbnMgcmV0dXJucyB0aGUgcHJvamVjdCdzIG5hbWVcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gYFJvYmVydCBBcm5pbmcg4oCTICR7cHJvamVjdE5hbWV9YDtcbiAgICAgICAgICAgIGltcG9ydCgnLi9oZWxwZXJGdW5jdGlvbnMuanMnKS50aGVuKChoZWxwZXJNb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgaGVscGVyTW9kdWxlLnNldHVwUGFnZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpbXBvcnQoJy4vbW9yZVByb2plY3RzLmpzJykudGhlbigobW9yZVByb2plY3RzTW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgIG1vcmVQcm9qZWN0c01vZHVsZS5oYW5kbGVNb3JlUHJvamVjdHNMaW5rcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIG5vIHByb2plY3QgaXMgZm91bmQgdGhlIGZ1bmN0aW9uIHJldHVybnMgJzQwNCdcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gJ1JvYmVydCBBcm5pbmcg4oCTIFBhZ2Ugbm90IGZvdW5kJztcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkeW5hbWljIGNvbnRlbnQgb3IgZmFsbGJhY2snLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBIYW5kbGUgYnJvd3NlciBuYXZpZ2F0aW9uIGV2ZW50c1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgcm91dGVyKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyB7XCJzcmNfcHJvamVjdHNPdmVydmlld19qc1wiOlwiNDBlMDY0MDllZjI1MWE2NTliN2VcIixcInNyY19wcm9maWxlX2pzXCI6XCI5MjNjMGRkY2MyMTYxOTQxNjk0ZlwiLFwic3JjX3NpbmdsZVByb2plY3RfanNcIjpcImQ5M2E0YjM0ODczYmYxNjM5ZTg4XCIsXCJzcmNfbW9yZVByb2plY3RzX2pzXCI6XCIzMmRhZjI1MzNlZmEwOTliMzJjY1wifVtjaHVua0lkXSArIFwiLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJyb2JlcnRhcm5pbmc6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtyb2JlcnRhcm5pbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rcm9iZXJ0YXJuaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCB7IHJvdXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5pbXBvcnQgeyBoYW5kbGVNZW51TGlua3MgfSBmcm9tICcuL21lbnUnO1xuXG4vLyBBc3luYyBsb2FkaW5nIG9mIHJvdXRlIGhhbmRsZXJzIHdoZW4gcmVxdWVzdGVkXG5yb3V0ZShcbiAgJy8nLFxuICAoKSA9PiBpbXBvcnQoJy4vcHJvamVjdHNPdmVydmlldy5qcycpLnRoZW4oKG1vZHVsZSkgPT4gbW9kdWxlLmRpc3BsYXlQcm9qZWN0T3ZlcnZpZXcpLFxuICAnUm9iZXJ0IEFybmluZyDigJMgVUkvVVggRGVzaWduZXInXG4pO1xucm91dGUoXG4gICcvcHJvZmlsJyxcbiAgKCkgPT4gaW1wb3J0KCcuL3Byb2ZpbGUuanMnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5kaXNwbGF5UHJvZmlsZSksXG4gICdSb2JlcnQgQXJuaW5nIOKAkyBQcm9maWwnXG4pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICByb3V0ZXIoKTtcbiAgaGFuZGxlTWVudUxpbmtzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==