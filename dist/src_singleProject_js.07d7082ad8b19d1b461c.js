"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_singleProject_js"],{

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
___CSS_LOADER_EXPORT___.push([module.id, `/* BREAKPOINTS
=============================================================================================== */
/* FONT FACE
=============================================================================================== */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype-variations");
}
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
  --font-size-version: clamp(0.75rem, 0.54vw + 0.61rem, 1.25rem);
  --font-weight-thin: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 510;
  --font-weight-semibold: 550;
  --flex-gap-nav: clamp(0.44rem, 2.91vw + -0.33rem, 3.13rem);
  --homepage-description-text-width: clamp(37.5rem, 19.59vw + 32.36rem, 55.63rem);
  --160px-to-80px: clamp(5rem, 5.41vw + 3.58rem, 10rem);
  --135px-to-70px: clamp(4.38rem, 4.39vw + 3.22rem, 8.44rem);
  --120px-to-60px: clamp(3.75rem, 4.05vw + 2.69rem, 7.5rem);
  --80px-to-40px: clamp(2.5rem, 2.7vw + 1.79rem, 5rem);
  --70px-to-35px: clamp(2.19rem, 2.36vw + 1.57rem, 4.38rem);
  --65px-to-45px: clamp(2.81rem, 1.35vw + 2.46rem, 4.06rem);
  --30px-to-15px: clamp(0.94rem, 1.01vw + 0.67rem, 1.88rem);
  --25px-to-10px: clamp(0.63rem, 1.01vw + 0.36rem, 1.56rem);
  --20px-to-10px: clamp(0.63rem, 0.68vw + 0.45rem, 1.25rem);
  --15px-to-10px: clamp(0.63rem, 0.34vw + 0.54rem, 0.94rem);
  --15px-to-8px: clamp(0.5rem, 0.47vw + 0.38rem, 0.94rem);
  --11px-to-5px: clamp(0.38rem, 0.34vw + 0.29rem, 0.69rem);
  --7px-to-3px: clamp(0.19rem, 0.27vw + 0.12rem, 0.44rem);
  --4px-to-2px: clamp(0.13rem, 0.14vw + 0.09rem, 0.25rem);
  --profile-skill-list-text-width: clamp(31.25rem, 6.76vw + 29.48rem, 37.5rem);
  --single-project-text-width: clamp(38.75rem, 12.16vw + 35.56rem, 50rem);
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
    --font-size-text: 18px;
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
html {
  box-sizing: border-box;
  min-width: 300px;
}

body {
  margin: 0;
  padding: 0 28px;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.3px;
}
@media (max-width: 767px) {
  body {
    padding: 0 15px;
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
  margin: var(--20px-to-10px) 0 0;
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

.hidden {
  display: flex;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s, visibility 0.2s;
}

@media (max-width: 370px) {
  .hidden-xxs-half {
    display: none;
  }
}

.visible {
  opacity: 1;
  visibility: visible;
  display: flex;
}

.visible-xxs-half {
  display: none;
}
@media (max-width: 370px) {
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
@media (max-width: 767px) {
  header {
    margin: 10px auto 0;
  }
}
header img {
  max-width: var(--logo-width);
  min-width: 80px;
}
@media (max-width: 370px) {
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

/* PROJECT LOADING ANIMATION
=============================================================================================== */
#loading-wrapper {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  flex-direction: column;
  gap: 15px;
  height: 100px;
}
#loading-wrapper span {
  font-size: var(--font-size-skill-tag);
  font-weight: var(--font-weight-thin);
  color: var(--primary-color);
}

.circle {
  display: inline-block;
  background-color: var(--primary-color);
  height: 15px;
  width: 15px;
  border-radius: 25px;
}

#ball-1 {
  -webkit-animation-name: bounce;
  -webkit-animation-delay: 0s;
  -webkit-animation-duration: 1.4s;
  -webkit-animation-iteration-count: infinite;
}

#ball-3 {
  -webkit-animation-name: bounce;
  -webkit-animation-delay: 0.1s;
  -webkit-animation-duration: 1.4s;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes bounce {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(-11px);
  }
  80% {
    transform: translateY(0);
  }
}
html {
  visibility: visible;
  opacity: 1;
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
  padding: var(--20px-to-10px) 0 0;
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
@media (max-width: 600px) {
  .single-project .new,
  .single-project .old {
    border: 3px solid var(--color-green);
  }
}
.single-project .new:before,
.single-project .old:before {
  content: "Neues Design";
  position: absolute;
  top: 0;
  left: 0;
  padding: var(--4px-to-2px) var(--15px-to-8px) var(--7px-to-3px) var(--11px-to-5px);
  font-size: var(--font-size-version);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: var(--color-green);
  z-index: 2;
}
@media (max-width: 420px) {
  .single-project .new:before,
  .single-project .old:before {
    font-size: 10px;
    font-weight: var(--font-weight-regular);
  }
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
  /* hyphens: auto; */
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
    margin: 0 -15px;
    max-width: calc(100% + 30px);
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
    gap: 5px;
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
    margin: 0 -15px;
  }
}
.single-project .two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
@media (max-width: 600px) {
  .single-project .two-column {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
@media (max-width: 420px) {
  .single-project .two-column {
    gap: 5px;
  }
}
@media (max-width: 991px) {
  .single-project .more-projects {
    margin: 0 -28px;
  }
}
@media (max-width: 767px) {
  .single-project .more-projects {
    margin: 0 -15px;
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
    gap: 5px;
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
  display: flex;
  justify-content: center;
  padding: var(--135px-to-70px) 0;
}
.single-project .all-projects-link a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 25px 30px;
  margin: 0 0 30px;
  border-radius: 20px;
}
.single-project .all-projects-link a:active {
  background-color: rgba(0, 0, 0, 0.04);
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
}`, "",{"version":3,"sources":["webpack://./src/scss/breakpoints.scss","webpack://./src/scss/general-styles.scss","webpack://./src/scss/project-page.scss"],"names":[],"mappings":"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","sourcesContent":["/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 370px) {\n    @content;\n  }\n}\n","@use 'sass:math';\n@import 'breakpoints';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.woff2') format('truetype-variations');\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 18px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(12px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-thin: 300;\n  --font-weight-regular: 400;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --135px-to-70px: #{fluid(70px, 135px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --30px-to-15px: #{fluid(15px, 30px)};\n  --25px-to-10px: #{fluid(10px, 25px)};\n  --20px-to-10px: #{fluid(10px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n  --15px-to-8px: #{fluid(8px, 15px)};\n  --11px-to-5px: #{fluid(6px, 11px)};\n  --7px-to-3px: #{fluid(3px, 7px)};\n  --4px-to-2px: #{fluid(2px, 4px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(620px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nhtml {\n  box-sizing: border-box;\n  min-width: 300px;\n}\n\nbody {\n  margin: 0;\n  padding: 0 28px;\n\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n\n  @include breakpoint-xs() {\n    padding: 0 15px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: var(--20px-to-10px) 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden {\n  display: flex;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n\n.visible {\n  opacity: 1;\n  visibility: visible;\n  display: flex;\n}\n\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  @include breakpoint-xs {\n    margin: 10px auto 0;\n  }\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n\n/* PROJECT LOADING ANIMATION\n=============================================================================================== */\n#loading-wrapper {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n\n  height: 100px;\n\n  span {\n    font-size: var(--font-size-skill-tag);\n    font-weight: var(--font-weight-thin);\n    color: var(--primary-color);\n  }\n}\n\n.circle {\n  display: inline-block;\n  background-color: var(--primary-color);\n  height: 15px;\n  width: 15px;\n  border-radius: 25px;\n}\n\n#ball-1 {\n  -webkit-animation-name: bounce;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n}\n#ball-3 {\n  -webkit-animation-name: bounce;\n  -webkit-animation-delay: 0.1s;\n  -webkit-animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(8px);\n  }\n  60% {\n    transform: translateY(-11px);\n  }\n  80% {\n    transform: translateY(0);\n  }\n}\n\n// Try to hide the DOM as long as possible via inline styles\n// to prevent Flashes of unstyled text (FOUT). Then unhide the\n// DOM at the end of the CSS document:\nhtml {\n  visibility: visible;\n  opacity: 1;\n}\n","@import 'general-styles';\n\n/* LAZY LOADING\n=============================================================================================== */\n// Initial state of media-items with opacity set to 0\n.media {\n  opacity: 0;\n  transition: opacity 0.5s ease-out;\n}\n\n// Class to be added once the media is loaded\n.media-loaded {\n  opacity: 1;\n}\n\n/* SINGLE PROJECT PAGE\n=============================================================================================== */\n.single-project {\n  .project-title-and-link {\n    h2 {\n      display: inline;\n      margin-right: 30px;\n      margin-bottom: 0;\n\n      @include breakpoint-xs-half() {\n        hyphens: auto;\n      }\n      @include breakpoint-xxs() {\n        margin-right: 20px;\n      }\n    }\n\n    a {\n      display: inline-flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    span {\n      flex-shrink: 0;\n      margin: 6px 0 0;\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n\n  .skills-and-tools {\n    display: flex;\n    align-items: baseline;\n    justify-content: flex-start;\n    gap: 5px;\n\n    margin: var(--15px-to-10px) 0 var(--65px-to-45px);\n    padding: var(--20px-to-10px) 0 0;\n\n    border-top: 2px solid var(--primary-color);\n\n    @include breakpoint-xxs() {\n      margin: 11px 0 30px;\n    }\n\n    span {\n      margin-right: 5px;\n      font-size: var(--font-size-skills-and-tools);\n      font-weight: var(--font-weight-medium);\n    }\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      margin: 0;\n      padding: 0;\n      list-style: none;\n\n      .skill-tag {\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: var(--font-weight-regular);\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n\n        @include breakpoint-xxs() {\n          border-width: 1px;\n        }\n      }\n    }\n  }\n\n  .new,\n  .old {\n    position: relative;\n    border: 4px solid var(--color-green);\n    z-index: 0;\n\n    @include breakpoint-xs-half() {\n      border: 3px solid var(--color-green);\n    }\n\n    &:before {\n      content: 'Neues Design';\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      padding: var(--4px-to-2px) var(--15px-to-8px) var(--7px-to-3px) var(--11px-to-5px);\n\n      font-size: var(--font-size-version);\n      font-weight: var(--font-weight-semibold);\n      color: var(--color-white);\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n\n      background-color: var(--color-green);\n      z-index: 2;\n\n      @include breakpoint-xxs {\n        font-size: 10px;\n        font-weight: var(--font-weight-regular);\n      }\n    }\n  }\n\n  .old {\n    border-color: var(--color-grey);\n\n    &:before {\n      content: 'Altes Design';\n      background-color: var(--color-grey);\n    }\n  }\n\n  .comment {\n    p {\n      font-size: var(--font-size-skills-and-tools);\n      padding: var(--120px-to-60px) 0 0;\n    }\n  }\n\n  .text + .comment {\n    p {\n      padding: 0;\n    }\n  }\n\n  .text {\n    padding: var(--120px-to-60px) 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n      /* hyphens: auto; */\n    }\n  }\n\n  // Display resizable handle on codepen iFrames\n  .codepen {\n    height: 700px;\n    max-width: 100%;\n    min-width: 320px;\n    padding-bottom: 26px;\n\n    overflow: hidden;\n    resize: horizontal;\n\n    text-align: right;\n    border-bottom: 2px solid #0d0d0d;\n\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n      max-width: calc(100% + 56px);\n    }\n    @include breakpoint-xs() {\n      margin: 0 -15px;\n      max-width: calc(100% + 30px);\n    }\n\n    span {\n      margin-right: 15px;\n      font-size: 10px;\n      text-transform: uppercase;\n      font-weight: var(--font-weight-regular);\n      letter-spacing: 1px;\n    }\n  }\n\n  // Wraps all elements on a project page\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n\n    @include breakpoint-xxs() {\n      gap: 5px;\n    }\n\n    > .video,\n    > .image,\n    > .two-column {\n      @include breakpoint-sm() {\n        margin: 0 -28px;\n      }\n      @include breakpoint-xs() {\n        margin: 0 -15px;\n      }\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n\n    @include breakpoint-xs-half {\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n    }\n    @include breakpoint-xxs() {\n      gap: 5px;\n    }\n  }\n\n  // Shows previous and next project\n  .more-projects {\n    @include breakpoint-sm() {\n      margin: 0 -28px;\n    }\n    @include breakpoint-xs() {\n      margin: 0 -15px;\n    }\n\n    h2 {\n      font-weight: var(--font-weight-regular);\n      margin: var(--120px-to-60px) 0;\n      text-align: center;\n    }\n    .more-projects-wrapper {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 10px;\n\n      height: 100%;\n      max-height: 570px;\n      width: 100%;\n      aspect-ratio: 170/57;\n\n      @include breakpoint-xxs() {\n        gap: 5px;\n      }\n\n      div {\n        width: 100%;\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n      }\n    }\n  }\n\n  .all-projects-link {\n    display: flex;\n    justify-content: center;\n    padding: var(--135px-to-70px) 0;\n\n    a {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 20px;\n\n      padding: 25px 30px;\n      margin: 0 0 30px;\n\n      border-radius: 20px;\n\n      &:active {\n        background-color: rgba(0, 0, 0, 0.04);\n      }\n\n      h2 {\n        margin: 0;\n        font-weight: var(--font-weight-regular);\n      }\n\n      img {\n        width: var(--80px-to-40px);\n\n        @include breakpoint-xxs() {\n          width: 30px;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NpbmdsZVByb2plY3RfanMuMDdkNzA4MmFkOGIxOWQxYjQ2MWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtLQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdMQUFnTCxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFX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a0JBQWtCO0FBQ2xCLHdDQUF3QyxZQUFZLEVBQUUsc0JBQXNCO0FBQzVFLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7O0FBRUEsbUNBQW1DLGFBQWE7QUFDaEQsY0FBYztBQUNkO0FBQ0E7QUFDQSxrQ0FBa0MsYUFBYSwwQ0FBMEMsMEJBQTBCLGNBQWMsU0FBUyxrQkFBa0I7QUFDNUosbUNBQW1DLFlBQVk7QUFDL0MsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsZ0RBQVMsQ0FBQztBQUMvRTs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNFQUFvQjtBQUN4QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1AsMENBQTBDO0FBQzFDLHFCQUFxQiwrQ0FBUTtBQUM3QjtBQUNBLGlCQUFpQixzRUFBb0I7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNLDREQUFVO0FBQ2hCO0FBQ0E7QUFDQSxJQUFJO0FBQ0osSUFBSSw0REFBVTtBQUNkO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zY3NzL3Byb2plY3QtcGFnZS5zY3NzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zY3NzL3Byb2plY3QtcGFnZS5zY3NzPzZiOGYiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL21vcmVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2luZ2xlUHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQlJFQUtQT0lOVFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBGT05UIEZBQ0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZS12YXJpYXRpb25zXCIpO1xufVxuLyogRk9OVCBTSVpFIENBTENVTEFUSU9OUyBXSVRIIENMQU1QKClcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBDVVNUT00gUFJPUEVSVElFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xuICAtLWNvbG9yLWdyZXk6ICNhNWE1YTU7XG4gIC0tbG9nby13aWR0aDogY2xhbXAoNi4yNXJlbSwgMy4zMXZ3ICsgNS4zOHJlbSwgOS4zMXJlbSk7XG4gIC0tZm9udC1zaXplLW5hdjogY2xhbXAoMS4yNXJlbSwgMC41NHZ3ICsgMS4xMXJlbSwgMS43NXJlbSk7XG4gIC0tZm9udC1zaXplLXRleHQ6IGNsYW1wKDEuMzhyZW0sIDAuODF2dyArIDEuMTZyZW0sIDIuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMTogY2xhbXAoNXJlbSwgNi4wOHZ3ICsgMy40cmVtLCAxMC42M3JlbSk7XG4gIC0tZm9udC1zaXplLWgyOiBjbGFtcCgyLjVyZW0sIDMuMzh2dyArIDEuNjFyZW0sIDUuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiBjbGFtcCgxLjI1cmVtLCAwLjI3dncgKyAxLjE4cmVtLCAxLjVyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTZyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTZyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiBjbGFtcCgwLjc1cmVtLCAwLjU0dncgKyAwLjYxcmVtLCAxLjI1cmVtKTtcbiAgLS1mb250LXdlaWdodC10aGluOiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTEwO1xuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XG4gIC0tZmxleC1nYXAtbmF2OiBjbGFtcCgwLjQ0cmVtLCAyLjkxdncgKyAtMC4zM3JlbSwgMy4xM3JlbSk7XG4gIC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aDogY2xhbXAoMzcuNXJlbSwgMTkuNTl2dyArIDMyLjM2cmVtLCA1NS42M3JlbSk7XG4gIC0tMTYwcHgtdG8tODBweDogY2xhbXAoNXJlbSwgNS40MXZ3ICsgMy41OHJlbSwgMTByZW0pO1xuICAtLTEzNXB4LXRvLTcwcHg6IGNsYW1wKDQuMzhyZW0sIDQuMzl2dyArIDMuMjJyZW0sIDguNDRyZW0pO1xuICAtLTEyMHB4LXRvLTYwcHg6IGNsYW1wKDMuNzVyZW0sIDQuMDV2dyArIDIuNjlyZW0sIDcuNXJlbSk7XG4gIC0tODBweC10by00MHB4OiBjbGFtcCgyLjVyZW0sIDIuN3Z3ICsgMS43OXJlbSwgNXJlbSk7XG4gIC0tNzBweC10by0zNXB4OiBjbGFtcCgyLjE5cmVtLCAyLjM2dncgKyAxLjU3cmVtLCA0LjM4cmVtKTtcbiAgLS02NXB4LXRvLTQ1cHg6IGNsYW1wKDIuODFyZW0sIDEuMzV2dyArIDIuNDZyZW0sIDQuMDZyZW0pO1xuICAtLTMwcHgtdG8tMTVweDogY2xhbXAoMC45NHJlbSwgMS4wMXZ3ICsgMC42N3JlbSwgMS44OHJlbSk7XG4gIC0tMjVweC10by0xMHB4OiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbiAgLS0yMHB4LXRvLTEwcHg6IGNsYW1wKDAuNjNyZW0sIDAuNjh2dyArIDAuNDVyZW0sIDEuMjVyZW0pO1xuICAtLTE1cHgtdG8tMTBweDogY2xhbXAoMC42M3JlbSwgMC4zNHZ3ICsgMC41NHJlbSwgMC45NHJlbSk7XG4gIC0tMTVweC10by04cHg6IGNsYW1wKDAuNXJlbSwgMC40N3Z3ICsgMC4zOHJlbSwgMC45NHJlbSk7XG4gIC0tMTFweC10by01cHg6IGNsYW1wKDAuMzhyZW0sIDAuMzR2dyArIDAuMjlyZW0sIDAuNjlyZW0pO1xuICAtLTdweC10by0zcHg6IGNsYW1wKDAuMTlyZW0sIDAuMjd2dyArIDAuMTJyZW0sIDAuNDRyZW0pO1xuICAtLTRweC10by0ycHg6IGNsYW1wKDAuMTNyZW0sIDAuMTR2dyArIDAuMDlyZW0sIDAuMjVyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi43NnZ3ICsgMjkuNDhyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM4Ljc1cmVtLCAxMi4xNnZ3ICsgMzUuNTZyZW0sIDUwcmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiBjbGFtcCgwLjMxcmVtLCAwLjY4dncgKyAwLjE0cmVtLCAwLjk0cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1sb2dvLXdpZHRoOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLW5hdjogMThweDtcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAxOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xuICAgIC0tZm9udC1zaXplLWgyOiAzMHB4O1xuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xuICAgIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcbiAgfVxufVxuXG4vKiBHRU5FUkFMIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgMCB2YXIoLS03MHB4LXRvLTM1cHgpIC0xMHB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbGluZS1oZWlnaHQ6IDkwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoMSB7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xuICB9XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAtMnB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuaDMsXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiB2YXIoLS0yMHB4LXRvLTEwcHgpIDAgMDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59XG5cbnAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuaGlkZGVuLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnZpc2libGUteHhzLWhhbGYge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC52aXNpYmxlLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4vKiBUUkFOU0lUSU9OU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi50cmFuc2l0aW9uLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4wNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMDVzO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4yNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMjVzO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjQ1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40NXM7XG59XG5cbi8qIExPR08gKyBOQVZJR0FUSU9OXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGhlYWRlciB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcbiAgfVxufVxuaGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICBoZWFkZXIgaW1nIHtcbiAgICBtaW4td2lkdGg6IDMxcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xuICBtYXJnaW46IDAgMCAtNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGhlYWRlciBuYXYgdWwge1xuICAgIG1hcmdpbjogMCAwIC0ycHg7XG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgfVxufVxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xuICBwYWRkaW5nOiAwO1xufVxuI2NvbnRlbnQgLmhvbWVwYWdlLFxuI2NvbnRlbnQgLnByb2ZpbGUtcGFnZSB7XG4gIHBhZGRpbmc6IDAgMCB2YXIoLS0xNjBweC10by04MHB4KTtcbn1cblxuLyogUFJPSkVDVCBMT0FESU5HIEFOSU1BVElPTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiNsb2FkaW5nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuI2xvYWRpbmctd3JhcHBlciBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5jaXJjbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4jYmFsbC0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4jYmFsbC0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5odG1sIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogTEFaWSBMT0FESU5HXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLm1lZGlhIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xufVxuXG4ubWVkaWEtbG9hZGVkIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogU0lOR0xFIFBST0pFQ1QgUEFHRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBoMiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBoMiB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBoMiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBnYXA6IDhweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlKTtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBzcGFuIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1hcmdpbjogNnB4IDAgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBpbWcge1xuICBtYXgtd2lkdGg6IDE4cHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogdmFyKC0tMTVweC10by0xMHB4KSAwIHZhcigtLTY1cHgtdG8tNDVweCk7XG4gIHBhZGRpbmc6IHZhcigtLTIwcHgtdG8tMTBweCkgMCAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHtcbiAgICBtYXJnaW46IDExcHggMCAzMHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwgLnNraWxsLXRhZyB7XG4gIHBhZGRpbmc6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzEpIHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzIpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbC10YWcpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCAuc2tpbGwtdGFnIHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5uZXcsXG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xuICB6LWluZGV4OiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubmV3LFxuICAuc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItZ3JlZW4pO1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLm5ldzpiZWZvcmUsXG4uc2luZ2xlLXByb2plY3QgLm9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIk5ldWVzIERlc2lnblwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogdmFyKC0tNHB4LXRvLTJweCkgdmFyKC0tMTVweC10by04cHgpIHZhcigtLTdweC10by0zcHgpIHZhcigtLTExcHgtdG8tNXB4KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmVyc2lvbik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pO1xuICB6LWluZGV4OiAyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubmV3OmJlZm9yZSxcbiAgLnNpbmdsZS1wcm9qZWN0IC5vbGQ6YmVmb3JlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG59XG4uc2luZ2xlLXByb2plY3QgLm9sZDpiZWZvcmUge1xuICBjb250ZW50OiBcIkFsdGVzIERlc2lnblwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuY29tbWVudCBwIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XG4gIHBhZGRpbmc6IHZhcigtLTEyMHB4LXRvLTYwcHgpIDAgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCArIC5jb21tZW50IHAge1xuICBwYWRkaW5nOiAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHtcbiAgcGFkZGluZzogdmFyKC0tMTIwcHgtdG8tNjBweCkgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudGV4dCBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbiAgLyogaHlwaGVuczogYXV0bzsgKi9cbn1cbi5zaW5nbGUtcHJvamVjdCAuY29kZXBlbiB7XG4gIGhlaWdodDogNzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHJlc2l6ZTogaG9yaXpvbnRhbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMGQwZDBkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuY29kZXBlbiB7XG4gICAgbWFyZ2luOiAwIC0yOHB4O1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlICsgNTZweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLmNvZGVwZW4ge1xuICAgIG1hcmdpbjogMCAtMTVweDtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpO1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QgLmNvZGVwZW4gc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAubWVkaWEtZWxlbWVudHMge1xuICAgIGdhcDogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IC52aWRlbyxcbiAgLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IC5pbWFnZSxcbiAgLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyA+IC50d28tY29sdW1uIHtcbiAgICBtYXJnaW46IDAgLTI4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLnZpZGVvLFxuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLmltYWdlLFxuICAuc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzID4gLnR3by1jb2x1bW4ge1xuICAgIG1hcmdpbjogMCAtMTVweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC50d28tY29sdW1uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC50d28tY29sdW1uIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLnR3by1jb2x1bW4ge1xuICAgIGdhcDogNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIHtcbiAgICBtYXJnaW46IDAgLTI4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMge1xuICAgIG1hcmdpbjogMCAtMTVweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0IC5tb3JlLXByb2plY3RzIGgyIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBtYXJnaW46IHZhcigtLTEyMHB4LXRvLTYwcHgpIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyAubW9yZS1wcm9qZWN0cy13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTcwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDE3MC81Nztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuc2luZ2xlLXByb2plY3QgLm1vcmUtcHJvamVjdHMgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XG4gICAgZ2FwOiA1cHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdCAubW9yZS1wcm9qZWN0cyAubW9yZS1wcm9qZWN0cy13cmFwcGVyIGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tMTM1cHgtdG8tNzBweCkgMDtcbn1cbi5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAyNXB4IDMwcHg7XG4gIG1hcmdpbjogMCAwIDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLmFsbC1wcm9qZWN0cy1saW5rIGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsgYSBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5hbGwtcHJvamVjdHMtbGluayBhIGltZyB7XG4gIHdpZHRoOiB2YXIoLS04MHB4LXRvLTQwcHgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdCAuYWxsLXByb2plY3RzLWxpbmsgYSBpbWcge1xuICAgIHdpZHRoOiAzMHB4O1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9icmVha3BvaW50cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nZW5lcmFsLXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9wcm9qZWN0LXBhZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtpR0FBQTtBQ0dBO2lHQUFBO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FDQUY7QURHQTtpR0FBQTtBQW1DQTtpR0FBQTtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1REFBQTtFQU1BLDBEQUFBO0VBQ0EsMkRBQUE7RUFPQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0Esc0VBQUE7RUFDQSw2REFBQTtFQUNBLG1FQUFBO0VBQ0EsOERBQUE7RUFVQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUVBLDBEQUFBO0VBRUEsK0VBQUE7RUFFQSxxREFBQTtFQUNBLDBEQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUNBLHVEQUFBO0VBQ0Esd0RB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O0FBQ0Y7QUZ6ZUU7RUU4S0U7OztJQUlJLGVBQUE7RUE2VE47QUFDRjtBRnBlRTtFRWtLRTs7O0lBT0ksZUFBQTtFQWlVTjtBQUNGO0FBN1RFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQStUSjtBRnBlRTtFRWtLQTtJQU1JLDBCQUFBO0lBQ0EsMkJBQUE7RUFnVUo7QUFDRjtBRjlkRTtFRXNKQTtJQVVJLFFBQUE7RUFrVUo7QUFDRjtBRnZnQkU7RUV5TUE7SUFFSSxlQUFBO0VBZ1VKO0FBQ0Y7QUZoZ0JFO0VFNkxBO0lBS0ksZUFBQTtFQWtVSjtBQUNGO0FBaFVJO0VBQ0UsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBa1VOO0FBaFVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQWlVTjtBRjNmRTtFRWtMRTtJQVdJLFFBQUE7RUFrVU47QUFDRjtBQWhVTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBaVVSO0FBNVRFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUE4VEo7QUE1VEk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUVBLG1CQUFBO0FBNFROO0FBMVRNO0VBQ0UscUNBQUE7QUE0VFI7QUF6VE07RUFDRSxTQUFBO0VBQ0EsdUNBQUE7QUEyVFI7QUF4VE07RUFDRSwwQkFBQTtBQTBUUjtBRi9oQkU7RUVvT0k7SUFJSSxXQUFBO0VBMlRSO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQlJFQUtQT0lOVFNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBtaXhpbiBicmVha3BvaW50LWxnIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDI0cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1sZyB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1tZCB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4tbWQge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1zbSB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1zbSB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXhzIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHhzIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHhzLWhhbGYge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIixcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxuQGltcG9ydCAnYnJlYWtwb2ludHMnO1xcblxcbi8qIEZPTlQgRkFDRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC53b2ZmMicpIGZvcm1hdCgndHJ1ZXR5cGUtdmFyaWF0aW9ucycpO1xcbn1cXG5cXG4vKiBGT05UIFNJWkUgQ0FMQ1VMQVRJT05TIFdJVEggQ0xBTVAoKVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJGRlZmF1bHQtbWluLWJwOiA0MjBweDtcXG4kZGVmYXVsdC1tYXgtYnA6IDE5MDBweDtcXG5cXG5AZnVuY3Rpb24gcm91bmQoJG51bWJlciwgJGRlY2ltYWxzOiAwKSB7XFxuICAkbjogMTtcXG4gIEBpZiAkZGVjaW1hbHMgPiAwIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGVjaW1hbHMge1xcbiAgICAgICRuOiAkbiAqIDEwO1xcbiAgICB9XFxuICB9XFxuICBAcmV0dXJuIG1hdGguZGl2KG1hdGgucm91bmQoJG51bWJlciAqICRuKSwgJG4pO1xcbn1cXG5cXG5AZnVuY3Rpb24gcHgtdG8tcmVtKCRweCkge1xcbiAgJHJlbXM6IG1hdGguZGl2KCRweCwgMTZweCkgKiAxcmVtO1xcbiAgQHJldHVybiAkcmVtcztcXG59XFxuXFxuQGZ1bmN0aW9uIGZsdWlkKFxcbiAgJG1pbi1zaXplLFxcbiAgJG1heC1zaXplLFxcbiAgJG1pbi1icmVha3BvaW50OiAkZGVmYXVsdC1taW4tYnAsXFxuICAkbWF4LWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1heC1icCxcXG4gICR1bml0OiB2d1xcbikge1xcbiAgJHNsb3BlOiBtYXRoLmRpdigkbWF4LXNpemUgLSAkbWluLXNpemUsICRtYXgtYnJlYWtwb2ludCAtICRtaW4tYnJlYWtwb2ludCk7XFxuICAkc2xvcGUtdG8tdW5pdDogcm91bmQoJHNsb3BlICogMTAwLCAyKTtcXG4gICRpbnRlcmNlcHQtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplIC0gJHNsb3BlICogJG1pbi1icmVha3BvaW50KSwgMik7XFxuICAkbWluLXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplKSwgMik7XFxuICAkbWF4LXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1heC1zaXplKSwgMik7XFxuICBAcmV0dXJuIGNsYW1wKCN7JG1pbi1zaXplLXJlbX0sICN7JHNsb3BlLXRvLXVuaXR9I3skdW5pdH0gKyAjeyRpbnRlcmNlcHQtcmVtfSwgI3skbWF4LXNpemUtcmVtfSk7XFxufVxcblxcbi8qIENVU1RPTSBQUk9QRVJUSUVTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcXG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcXG5cXG4gIC0tbG9nby13aWR0aDogI3tmbHVpZCgxMDBweCwgMTQ5cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWxvZ28td2lkdGg6IDMwcHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1uYXY6ICN7Zmx1aWQoMjBweCwgMjhweCl9O1xcbiAgLS1mb250LXNpemUtdGV4dDogI3tmbHVpZCgyMnB4LCAzNHB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1mb250LXNpemUtbmF2OiAxOHB4O1xcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAxOHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXNpemUtaDE6ICN7Zmx1aWQoODBweCwgMTcwcHgpfTtcXG4gIC0tZm9udC1zaXplLWgyOiAje2ZsdWlkKDQwcHgsIDkwcHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6ICN7Zmx1aWQoMjBweCwgMjRweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiAje2ZsdWlkKDEycHgsIDIwcHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1oMTogNjBweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMwcHg7XFxuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XFxuICAgIC0tZm9udC1zaXplLXNraWxsLXRhZzogMTRweDtcXG4gICAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAxNHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXdlaWdodC10aGluOiAzMDA7XFxuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MTA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XFxuXFxuICAtLWZsZXgtZ2FwLW5hdjogI3tmbHVpZCg3cHgsIDUwcHgpfTtcXG5cXG4gIC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aDogI3tmbHVpZCg2MDBweCwgODkwcHgpfTtcXG5cXG4gIC0tMTYwcHgtdG8tODBweDogI3tmbHVpZCg4MHB4LCAxNjBweCl9O1xcbiAgLS0xMzVweC10by03MHB4OiAje2ZsdWlkKDcwcHgsIDEzNXB4KX07XFxuICAtLTEyMHB4LXRvLTYwcHg6ICN7Zmx1aWQoNjBweCwgMTIwcHgpfTtcXG4gIC0tODBweC10by00MHB4OiAje2ZsdWlkKDQwcHgsIDgwcHgpfTtcXG4gIC0tNzBweC10by0zNXB4OiAje2ZsdWlkKDM1cHgsIDcwcHgpfTtcXG4gIC0tNjVweC10by00NXB4OiAje2ZsdWlkKDQ1cHgsIDY1cHgpfTtcXG4gIC0tMzBweC10by0xNXB4OiAje2ZsdWlkKDE1cHgsIDMwcHgpfTtcXG4gIC0tMjVweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDI1cHgpfTtcXG4gIC0tMjBweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDIwcHgpfTtcXG4gIC0tMTVweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDE1cHgpfTtcXG4gIC0tMTVweC10by04cHg6ICN7Zmx1aWQoOHB4LCAxNXB4KX07XFxuICAtLTExcHgtdG8tNXB4OiAje2ZsdWlkKDZweCwgMTFweCl9O1xcbiAgLS03cHgtdG8tM3B4OiAje2ZsdWlkKDNweCwgN3B4KX07XFxuICAtLTRweC10by0ycHg6ICN7Zmx1aWQoMnB4LCA0cHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNjIwcHgsIDgwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogM3B4O1xcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcXG4gIH1cXG59XFxuXFxuLyogR0VORVJBTCBTVFlMRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAyOHB4O1xcblxcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgfVxcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KSAtMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gIGxpbmUtaGVpZ2h0OiA5MCU7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IHZhcigtLTIwcHgtdG8tMTBweCkgMCAwO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxufVxcblxcbnAgKyBwIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XFxufVxcblxcbi5oaWRkZW4teHhzLWhhbGYge1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udmlzaWJsZS14eHMtaGFsZiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi8qIFRSQU5TSVRJT05TXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNpdGUgdGl0bGUgYmVmb3JlIHRyYW5zaXRpb25cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBza2lsbHMtYW5kLXRvb2xzIGRpdiBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBzaXRlIHRpdGxlXFxuLnRyYW5zaXRpb24tdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjA1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4wNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2Ygc2tpbGxzIGxpc3Qgb24gcHJvamVjdCBwYWdlc1xcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2YgZmlyc3QgbWVkaWEgZWxlbWVudCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xcbn1cXG5cXG4vKiBMT0dPICsgTkFWSUdBVElPTlxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgICBtaW4td2lkdGg6IDMxcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xcblxcbiAgICAgIG1hcmdpbjogMCAwIC01cHg7XFxuICAgICAgcGFkZGluZzogMCAwIDAgMzBweDtcXG5cXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgMCAtMnB4O1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHggN3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIC5ob21lcGFnZSxcXG4gIC5wcm9maWxlLXBhZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XFxuICB9XFxufVxcblxcbi8qIFBST0pFQ1QgTE9BRElORyBBTklNQVRJT05cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2FkaW5nLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG5cXG4gIGhlaWdodDogMTAwcHg7XFxuXFxuICBzcGFuIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB9XFxufVxcblxcbi5jaXJjbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbiNiYWxsLTEge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG4jYmFsbC0zIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4vLyBUcnkgdG8gaGlkZSB0aGUgRE9NIGFzIGxvbmcgYXMgcG9zc2libGUgdmlhIGlubGluZSBzdHlsZXNcXG4vLyB0byBwcmV2ZW50IEZsYXNoZXMgb2YgdW5zdHlsZWQgdGV4dCAoRk9VVCkuIFRoZW4gdW5oaWRlIHRoZVxcbi8vIERPTSBhdCB0aGUgZW5kIG9mIHRoZSBDU1MgZG9jdW1lbnQ6XFxuaHRtbCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsXCJAaW1wb3J0ICdnZW5lcmFsLXN0eWxlcyc7XFxuXFxuLyogTEFaWSBMT0FESU5HXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vLyBJbml0aWFsIHN0YXRlIG9mIG1lZGlhLWl0ZW1zIHdpdGggb3BhY2l0eSBzZXQgdG8gMFxcbi5tZWRpYSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0O1xcbn1cXG5cXG4vLyBDbGFzcyB0byBiZSBhZGRlZCBvbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWRcXG4ubWVkaWEtbG9hZGVkIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIFNJTkdMRSBQUk9KRUNUIFBBR0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAucHJvamVjdC10aXRsZS1hbmQtbGluayB7XFxuICAgIGgyIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cy1oYWxmKCkge1xcbiAgICAgICAgaHlwaGVuczogYXV0bztcXG4gICAgICB9XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGEge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICAgIGdhcDogOHB4O1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XFxuICAgIH1cXG5cXG4gICAgc3BhbiB7XFxuICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgbWFyZ2luOiA2cHggMCAwO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB9XFxuICB9XFxuXFxuICAuc2tpbGxzLWFuZC10b29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgbWFyZ2luOiB2YXIoLS0xNXB4LXRvLTEwcHgpIDAgdmFyKC0tNjVweC10by00NXB4KTtcXG4gICAgcGFkZGluZzogdmFyKC0tMjBweC10by0xMHB4KSAwIDA7XFxuXFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgbWFyZ2luOiAxMXB4IDAgMzBweDtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIC5za2lsbC10YWcge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMSkgdmFyKC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMik7XFxuXFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbC10YWcpO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm5ldyxcXG4gIC5vbGQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgei1pbmRleDogMDtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cy1oYWxmKCkge1xcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgfVxcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ05ldWVzIERlc2lnbic7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcblxcbiAgICAgIHBhZGRpbmc6IHZhcigtLTRweC10by0ycHgpIHZhcigtLTE1cHgtdG8tOHB4KSB2YXIoLS03cHgtdG8tM3B4KSB2YXIoLS0xMXB4LXRvLTVweCk7XFxuXFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdmVyc2lvbik7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGUpO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuKTtcXG4gICAgICB6LWluZGV4OiAyO1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5vbGQge1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xcblxcbiAgICAmOmJlZm9yZSB7XFxuICAgICAgY29udGVudDogJ0FsdGVzIERlc2lnbic7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29scyk7XFxuICAgICAgcGFkZGluZzogdmFyKC0tMTIwcHgtdG8tNjBweCkgMCAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCArIC5jb21tZW50IHtcXG4gICAgcCB7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLnRleHQge1xcbiAgICBwYWRkaW5nOiB2YXIoLS0xMjBweC10by02MHB4KSAwO1xcblxcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcbiAgICAgIC8qIGh5cGhlbnM6IGF1dG87ICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIERpc3BsYXkgcmVzaXphYmxlIGhhbmRsZSBvbiBjb2RlcGVuIGlGcmFtZXNcXG4gIC5jb2RlcGVuIHtcXG4gICAgaGVpZ2h0OiA3MDBweDtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjZweDtcXG5cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcmVzaXplOiBob3Jpem9udGFsO1xcblxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwZDBkMGQ7XFxuXFxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtc20oKSB7XFxuICAgICAgbWFyZ2luOiAwIC0yOHB4O1xcbiAgICAgIG1heC13aWR0aDogY2FsYygxMDAlICsgNTZweCk7XFxuICAgIH1cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgICBtYXJnaW46IDAgLTE1cHg7XFxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgKyAzMHB4KTtcXG4gICAgfVxcblxcbiAgICBzcGFuIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8vIFdyYXBzIGFsbCBlbGVtZW50cyBvbiBhIHByb2plY3QgcGFnZVxcbiAgLm1lZGlhLWVsZW1lbnRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgfVxcblxcbiAgICA+IC52aWRlbyxcXG4gICAgPiAuaW1hZ2UsXFxuICAgID4gLnR3by1jb2x1bW4ge1xcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtc20oKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTI4cHg7XFxuICAgICAgfVxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTE1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAudHdvLWNvbHVtbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxMHB4O1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzLWhhbGYge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgfVxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICBnYXA6IDVweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLy8gU2hvd3MgcHJldmlvdXMgYW5kIG5leHQgcHJvamVjdFxcbiAgLm1vcmUtcHJvamVjdHMge1xcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXNtKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMjhweDtcXG4gICAgfVxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXhzKCkge1xcbiAgICAgIG1hcmdpbjogMCAtMTVweDtcXG4gICAgfVxcblxcbiAgICBoMiB7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgICAgIG1hcmdpbjogdmFyKC0tMTIwcHgtdG8tNjBweCkgMDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLm1vcmUtcHJvamVjdHMtd3JhcHBlciB7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBtYXgtaGVpZ2h0OiA1NzBweDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBhc3BlY3QtcmF0aW86IDE3MC81NztcXG5cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBkaXYge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5hbGwtcHJvamVjdHMtbGluayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiB2YXIoLS0xMzVweC10by03MHB4KSAwO1xcblxcbiAgICBhIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGdhcDogMjBweDtcXG5cXG4gICAgICBwYWRkaW5nOiAyNXB4IDMwcHg7XFxuICAgICAgbWFyZ2luOiAwIDAgMzBweDtcXG5cXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcblxcbiAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XFxuICAgICAgfVxcblxcbiAgICAgIGgyIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gICAgICB9XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS04MHB4LXRvLTQwcHgpO1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LXBhZ2Uuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QtcGFnZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHB1c2hVUkxBbmRDYWxsUm91dGVyIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5jb25zdCBmaW5kUHJldmlvdXNBbmROZXh0UHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIHRyeSB7XG4gICAgaWYgKCFkYXRhIHx8ICFwcm9qZWN0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdObyBkYXRhIG9yIHByb2plY3QgYXZhaWxhYmxlJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBOdW1iZXIocHJvamVjdC5pZCkgLSAxO1xuXG4gICAgY29uc3QgbmV4dFByb2plY3RJbmRleCA9IChjdXJyZW50UHJvamVjdEluZGV4ICsgMSkgJSBhbGxQcm9qZWN0cy5sZW5ndGg7XG4gICAgY29uc3QgbmV4dFByb2plY3QgPSBhbGxQcm9qZWN0c1tuZXh0UHJvamVjdEluZGV4XTtcblxuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdEluZGV4ID1cbiAgICAgIChjdXJyZW50UHJvamVjdEluZGV4IC0gMSArIGFsbFByb2plY3RzLmxlbmd0aCkgJSBhbGxQcm9qZWN0cy5sZW5ndGg7XG4gICAgY29uc3QgcHJldmlvdXNQcm9qZWN0ID0gYWxsUHJvamVjdHNbcHJldmlvdXNQcm9qZWN0SW5kZXhdO1xuXG4gICAgcmV0dXJuIHsgcHJldmlvdXNQcm9qZWN0LCBuZXh0UHJvamVjdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGRhdGEnLCBlcnJvcik7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2hvd01vcmVQcm9qZWN0cyA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IHsgcHJldmlvdXNQcm9qZWN0LCBuZXh0UHJvamVjdCB9ID0gYXdhaXQgZmluZFByZXZpb3VzQW5kTmV4dFByb2plY3QocHJvamVjdCk7XG5cbiAgdHJ5IHtcbiAgICBpZiAoIXByZXZpb3VzUHJvamVjdCB8fCAhbmV4dFByb2plY3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGRhdGEgb24gcHJldmlvdXMgYW5kIG5leHQgcHJvamVjdCBhdmFpbGFibGUnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91c1Byb2plY3RVUkxQYXRoID0gY29udmVydFRvVVJMU2F2ZU5hbWUocHJldmlvdXNQcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICBjb25zdCBuZXh0UHJvamVjdFVSTFBhdGggPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShuZXh0UHJvamVjdC5wcm9qZWN0TmFtZSk7XG5cbiAgICByZXR1cm4gYDxzZWN0aW9uIGNsYXNzPVwibW9yZS1wcm9qZWN0c1wiPjxoMj5NZWhyIFByb2pla3RlPC9oMj48ZGl2IGNsYXNzPVwibW9yZS1wcm9qZWN0cy13cmFwcGVyXCI+PGEgaHJlZj1cIi8ke3ByZXZpb3VzUHJvamVjdFVSTFBhdGh9XCIgY2xhc3M9XCJwcmV2aW91cy1wcm9qZWN0XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcmV2aW91c1Byb2plY3QuaW1hZ2V9Jyk7XCI+PC9kaXY+PC9hPjxhIGhyZWY9XCIvJHtuZXh0UHJvamVjdFVSTFBhdGh9XCIgY2xhc3M9XCJuZXh0LXByb2plY3RcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke25leHRQcm9qZWN0LmltYWdlfScpO1wiPjwvZGl2PjwvYT48L2Rpdj48L3NlY3Rpb24+YDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhJywgZXJyb3IpO1xuICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU1vcmVQcm9qZWN0c0xpbmtzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBwcmV2aW91c1Byb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZpb3VzLXByb2plY3QnKTtcbiAgY29uc3QgbmV4dFByb2plY3RMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHQtcHJvamVjdCcpO1xuXG4gIGNvbnN0IHByZXZpb3VzUHJvamVjdFVSTFBhdGggPSBwcmV2aW91c1Byb2plY3RMaW5rLmhyZWYuc3BsaXQoJy8nKVszXTtcbiAgY29uc3QgbmV4dFByb2plY3RVUkxQYXRoID0gbmV4dFByb2plY3RMaW5rLmhyZWYuc3BsaXQoJy8nKVszXTtcblxuICBwcmV2aW91c1Byb2plY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIocHJldmlvdXNQcm9qZWN0VVJMUGF0aCk7XG4gIH0pO1xuXG4gIG5leHRQcm9qZWN0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKG5leHRQcm9qZWN0VVJMUGF0aCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCAnLi9zY3NzL3Byb2plY3QtcGFnZS5zY3NzJztcbmltcG9ydCBleHRlcm5hbExpbmtJY29uIGZyb20gJy4vaW1nL2V4dGVybmFsLWxpbmsuc3ZnJztcbmltcG9ydCBhcnJvd0xlZnQgZnJvbSAnLi9pbWcvYXJyb3ctbGVmdC5zdmcnO1xuaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgY29udmVydFRvVVJMU2F2ZU5hbWUsIHB1c2hVUkxBbmRDYWxsUm91dGVyLCBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuaW1wb3J0IHsgc2hvd01vcmVQcm9qZWN0cyB9IGZyb20gJy4vbW9yZVByb2plY3RzJztcblxuLyogXG5CdW5kbGVzIGFuZCByZXR1cm5zIGFsbCBvZiB0aGUgSFRNTCBjb2RlIGZvciBhIHNpbmdsZSBwcm9qZWN0LlxuTW9zdCBvZiB0aGUgSFRNTCBjb2RlIGlzIGdlbmVyYXRlZCBieSB0aGUgZnVuY3Rpb25zIGJlbmVhdGggdGhpcyBvbmUuXG4qL1xuZXhwb3J0IGNvbnN0IHNob3dTaW5nbGVQcm9qZWN0ID0gYXN5bmMgZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgLy8gQ2hlY2sgd2hldGhlciBwcm9qZWN0IGRhdGEgaXMgYXZhaWxhYmxlXG4gIGlmICghcHJvamVjdCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3QgZGF0YSBhdmFpbGFibGUuJyk7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIEhUTUwgY29kZSBmb3IgdGhlIHByb2plY3QgcGFnZVxuICBjb25zdCBwcm9qZWN0TGluayA9IGdlbmVyYXRlUHJvamVjdExpbmsocHJvamVjdCk7XG4gIGNvbnN0IHVzZWRTa2lsbHMgPSBnZW5lcmF0ZVVzZWRTa2lsbHMocHJvamVjdCk7XG4gIGNvbnN0IHByb2plY3RNZWRpYUVsZW1lbnRzID0gZ2VuZXJhdGVQcm9qZWN0TWVkaWFFbGVtZW50cyhwcm9qZWN0KTtcbiAgY29uc3QgbW9yZVByb2plY3RzID0gYXdhaXQgc2hvd01vcmVQcm9qZWN0cyhwcm9qZWN0KTtcbiAgY29uc3QgYWxsUHJvamVjdHNMaW5rID0gZ2VuZXJhdGVBbGxQcm9qZWN0c0xpbmsoKTtcblxuICByZXR1cm4gYDxkaXYgaWQ9XCIke3Byb2plY3QuaWR9XCIgY2xhc3M9XCJzaW5nbGUtcHJvamVjdFwiPjxkaXYgY2xhc3M9XCJwcm9qZWN0LXRpdGxlLWFuZC1saW5rXCI+PGgyPiR7cHJvamVjdC5wcm9qZWN0TmFtZX08L2gyPiR7cHJvamVjdExpbmt9PC9kaXY+PHNlY3Rpb24gY2xhc3M9XCJza2lsbHMtYW5kLXRvb2xzXCI+PHNwYW4+U2tpbGxzOjwvc3Bhbj48dWw+JHt1c2VkU2tpbGxzfTwvdWw+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzPVwibWVkaWEtZWxlbWVudHNcIj4ke3Byb2plY3RNZWRpYUVsZW1lbnRzfTwvc2VjdGlvbj4ke21vcmVQcm9qZWN0c30ke2FsbFByb2plY3RzTGlua308L2Rpdj5gO1xufTtcblxuLyogXG5HZW5lcmF0ZXMgYSBsaW5rIHRvIHRoZSBwcm9qZWN0J3MgbGl2ZSB3ZWJzaXRlIGlmIHRoZSBwcm9wZXJ0eSBleGlzdHMuXG4qL1xuY29uc3QgZ2VuZXJhdGVQcm9qZWN0TGluayA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LmxpdmVfc2l0ZSkge1xuICAgIHJldHVybiBgPGEgaHJlZj1cIiR7cHJvamVjdC5saXZlX3NpdGV9XCI+PHNwYW4+TGl2ZS1TZWl0ZSBiZXN1Y2hlbjwvc3Bhbj48aW1nIHNyYz1cIiR7ZXh0ZXJuYWxMaW5rSWNvbn1cIj48L2E+YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbi8qIFxuR25lcmF0ZXMgdGhlIEhUTUwgZm9yIGEgbGlzdCBvZiBza2lsbHMgdXNlZCBmb3IgYSBzcGVjaWZpYyBwcm9qZWN0LlxuKi9cbmNvbnN0IGdlbmVyYXRlVXNlZFNraWxscyA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGlmIChwcm9qZWN0LnNraWxscykge1xuICAgIGNvbnN0IHByb2plY3RTa2lsbHMgPSBwcm9qZWN0LnNraWxsc1xuICAgICAgLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJza2lsbC10YWdcIj4ke3NraWxsfTwvbGk+YDtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG5cbiAgICByZXR1cm4gcHJvamVjdFNraWxscztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG5cbi8qIFxuR2VuZXJhdGVzIHRoZSBIVE1MIGZvciB0aGUgW2VsZW1lbnRzXSBhcnJheSBpbiB0aGUgcHJvamVjdCBvYmplY3QsXG53aGljaCBjb250YWlucyByZWZlcmVuY2VzIHRvIGFsbCBtZWRpYSBmaWxlcyB1c2VkIGJ5IHRoZSBwcm9qZWN0LlxuKi9cbmNvbnN0IGdlbmVyYXRlUHJvamVjdE1lZGlhRWxlbWVudHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5lbGVtZW50cykge1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50cyA9IHByb2plY3QuZWxlbWVudHNcbiAgICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICBjYXNlICd2aWRlbyc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX0gJHtlbGVtZW50LnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICA8dmlkZW8gY2xhc3M9XCIke2VsZW1lbnQuYWJvdmVfZm9sZCA/ICcnIDogJ21lZGlhIGxhenktbG9hZCd9XCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgPHNvdXJjZSAke1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWJvdmVfZm9sZCA/IGBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cImAgOiBgZGF0YS1zcmM9XCIke2VsZW1lbnQuY29udGVudH1cImBcbiAgICAgICAgICAgICAgfSB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX0gJHtlbGVtZW50LnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiJHtlbGVtZW50LmFib3ZlX2ZvbGQgPyAnJyA6ICdtZWRpYSBsYXp5LWxvYWQnfVwiICR7XG4gICAgICAgICAgICAgIGVsZW1lbnQuYWJvdmVfZm9sZCA/IGBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cImAgOiBgZGF0YS1zcmM9XCIke2VsZW1lbnQuY29udGVudH1cImBcbiAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICR7ZWxlbWVudC5jb250ZW50fVxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICdjb21tZW50JzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgPHA+JHtlbGVtZW50LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICd0d28tY29sdW1uJzpcbiAgICAgICAgICAgIC8vIEl0ZXJhdGVzIG92ZXIgdGhlIFtlbGVtZW50c10gYXJyYXksIHdoaWNoIGNvbnRhaW5zIHJlZmVyZW5jZXMgdG8gbWVkaWEgZmlsZXNcbiAgICAgICAgICAgIGNvbnN0IHR3b0NvbHVtbkVsZW1lbnRzID0gZWxlbWVudC5jb250ZW50XG4gICAgICAgICAgICAgIC5tYXAoKG1lZGlhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG1lZGlhLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7bWVkaWEudHlwZX0gJHttZWRpYS52ZXJzaW9uIHx8ICcnfVwiPlxuICAgICAgICAgICAgICAgICAgPHZpZGVvIGNsYXNzPVwibWVkaWEgbGF6eS1sb2FkXCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBkYXRhLXNyYz1cIiR7bWVkaWEuY29udGVudH1cIiB0eXBlPVwidmlkZW8vbXA0XCI+XG4gICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1lZGlhLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7bWVkaWEudHlwZX0gJHtlbGVtZW50LnZlcnNpb24gfHwgJyd9XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWVkaWEgbGF6eS1sb2FkXCIgZGF0YS1zcmM9XCIke21lZGlhLmNvbnRlbnR9XCI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxwPlVuc3VwcG9ydGVkIG1lZGlhIGZvcm1hdC48L3A+YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzID1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgJHt0d29Db2x1bW5FbGVtZW50c31cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnY29kZXBlbic6XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj48aWZyYW1lIGhlaWdodD1cIjcwMFwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT1cIiR7ZWxlbWVudC50aXRsZX1cIiBzcmM9XCIke2VsZW1lbnQuZW1iZWRfdXJsfT9kZWZhdWx0LXRhYj1yZXN1bHQmdGhlbWUtaWQ9ZGFyayZyZXNpemFibGU9dHJ1ZVwiIGZyYW1lYm9yZGVyPVwibm9cIiBsb2FkaW5nPVwibGF6eVwiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIj5cbiAgICAgICAgICAgIFNlZSB0aGUgUGVuIDxhIGhyZWY9XCIke2VsZW1lbnQudXJsfVwiPlxuICAgICAgICAgICAgJHtlbGVtZW50LnRpdGxlfTwvYT4gYnkgaWRlZW4tbG9zICg8YSBocmVmPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2lkZWVuLWxvc1wiPkBpZGVlbi1sb3M8L2E+KVxuICAgICAgICAgICAgb24gPGEgaHJlZj1cImh0dHBzOi8vY29kZXBlbi5pb1wiPkNvZGVQZW48L2E+LlxuICAgICAgICAgICAgPC9pZnJhbWU+PHNwYW4+ZHJhZyB0byByZXNpemU8L3NwYW4+PC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG4vKiBcbkdlbmVyYXRlcyBIVE1MIGZvciBhIHNlY3Rpb24gdGhhdCBkaXNwbGF5cyBhIGxpbmsgYmFjayB0byB0aGUgcHJvamVjdCBvdmVydmlldyBwYWdlXG4qL1xuY29uc3QgZ2VuZXJhdGVBbGxQcm9qZWN0c0xpbmsgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBgPHNlY3Rpb24gY2xhc3M9XCJhbGwtcHJvamVjdHMtbGlua1wiPjxhIGhyZWY9XCIvXCI+PGltZyBzcmM9XCIke2Fycm93TGVmdH1cIj48aDI+QWxsZSBQcm9qZWt0ZTwvaDI+PC9hPjwvc2VjdGlvbj5gO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFsbFByb2plY3RzTGluayA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxsUHJvamVjdHNMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1wcm9qZWN0cy1saW5rIGEnKTtcblxuICBhbGxQcm9qZWN0c0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcignJyk7XG4gIH0pO1xufTtcblxuLyogXG4xLiBUcmllcyB0byBmaW5kIGEgcHJvamVjdCBieSBpdCdzIG5hbWUgYnkgY29tcGFyaW5nIHRoZSBwYXRoIHBhc3NlZCBhcyBhIHBhcmFtZXRlclxud2l0aCB0aGUgbmFtZXMgb2YgdGhlIHByb2plY3RzIGluIHRoZSBkYXRhIHBvb2wuIFRoZW4gaXQgY2FsbHMgc2hvd1NpbmdsZVByb2plY3QoKSBcbmFuZCByZXR1cm5zIHRoZSBwcm9qZWN0J3MgbmFtZS5cblxuMi4gSGFzIG5vIHByb2plY3QgYmVlbiBmb3VuZCwgdGhlIGZ1bmN0aW9uIHJldHVybnMgJzQwNCcsIHdoaWNoIGlzIGhhbmRsZWQgYnkgcm91dGVyKCkgaW4gcm91dGVyLmpzLlxuKi9cbmV4cG9ydCBjb25zdCBsb2FkU2luZ2xlUHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwYXRoKSB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gcGF0aC5zcGxpdCgnLycpWzFdOyAvLyBBc3N1bWluZyBwYXRocyBsaWtlIFwiL3BhdGhcIlxuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcbiAgY29uc3QgcHJvamVjdCA9IGRhdGEucHJvamVjdHMuZmluZChcbiAgICAocHJvamVjdCkgPT4gY29udmVydFRvVVJMU2F2ZU5hbWUocHJvamVjdC5wcm9qZWN0TmFtZSkgPT09IHByb2plY3ROYW1lXG4gICk7XG5cbiAgaWYgKHByb2plY3QpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgSFRNTENvbnRlbnQgPSBhd2FpdCBzaG93U2luZ2xlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBIVE1MQ29udGVudCk7XG4gICAgICAvLyBSZXR1cm4gdGhlIHByb2plY3QncyBuYW1lXG4gICAgICAvLyBXaWxsIGJlIHNldCBhcyB0aGUgZG9jdW1lbnQudGl0bGVcbiAgICAgIHJldHVybiBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBwcm9qZWN0IGRldGFpbHM6JywgZXJyb3IpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsICc8aDE+RXJyb3IgTG9hZGluZyBQcm9qZWN0PC9oMT4nKTtcbiAgICAgIHJldHVybiAnNDA0JztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2V0Q29udGVudCgnY29udGVudCcsICc8aDE+NDA0IE5vdCBGb3VuZDwvaDE+Jyk7XG4gICAgcmV0dXJuICc0MDQnO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9