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
    margin: 0 -15px;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/breakpoints.scss","webpack://./src/scss/general-styles.scss","webpack://./src/scss/project-overview.scss"],"names":[],"mappings":"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","sourcesContent":["/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 370px) {\n    @content;\n  }\n}\n","@use 'sass:math';\n@import 'breakpoints';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.woff2') format('truetype-variations');\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 18px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(12px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-thin: 300;\n  --font-weight-regular: 400;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --135px-to-70px: #{fluid(70px, 135px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --30px-to-15px: #{fluid(15px, 30px)};\n  --25px-to-10px: #{fluid(10px, 25px)};\n  --20px-to-10px: #{fluid(10px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n  --15px-to-8px: #{fluid(8px, 15px)};\n  --11px-to-5px: #{fluid(6px, 11px)};\n  --7px-to-3px: #{fluid(3px, 7px)};\n  --4px-to-2px: #{fluid(2px, 4px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(620px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nhtml {\n  box-sizing: border-box;\n  min-width: 300px;\n}\n\nbody {\n  margin: 0;\n  padding: 0 28px;\n\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n\n  @include breakpoint-xs() {\n    padding: 0 15px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: var(--20px-to-10px) 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden {\n  display: flex;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n\n.visible {\n  opacity: 1;\n  visibility: visible;\n  display: flex;\n}\n\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  @include breakpoint-xs {\n    margin: 10px auto 0;\n  }\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n\n/* PROJECT LOADING ANIMATION\n=============================================================================================== */\n#loading-wrapper {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n\n  height: 100px;\n\n  span {\n    font-size: var(--font-size-skill-tag);\n    font-weight: var(--font-weight-thin);\n    color: var(--primary-color);\n  }\n}\n\n.circle {\n  display: inline-block;\n  background-color: var(--primary-color);\n  height: 15px;\n  width: 15px;\n  border-radius: 25px;\n}\n\n#ball-1 {\n  -webkit-animation-name: bounce;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n}\n#ball-3 {\n  -webkit-animation-name: bounce;\n  -webkit-animation-delay: 0.1s;\n  -webkit-animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(8px);\n  }\n  60% {\n    transform: translateY(-11px);\n  }\n  80% {\n    transform: translateY(0);\n  }\n}\n\n// Try to hide the DOM as long as possible via inline styles\n// to prevent Flashes of unstyled text (FOUT). Then unhide the\n// DOM at the end of the CSS document:\nhtml {\n  visibility: visible;\n  opacity: 1;\n}\n","@import 'general-styles';\n\n/* Homepage\n=============================================================================================== */\n.homepage {\n  .description {\n    margin: 0 0 var(--70px-to-35px);\n\n    p {\n      max-width: var(--homepage-description-text-width);\n\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: var(--120px-to-60px);\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: var(--single-project-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n    figure {\n      @include breakpoint-sm() {\n        margin: 0 -28px;\n      }\n      @include breakpoint-xs() {\n        margin: 0 -15px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
      <img ${project.id !== 1 ? 'data-src=' : 'src='} "${project.image}" alt="${
        project.projectName
      }" ${project.id !== 1 ? `class="media lazy-load"` : ''}>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2plY3RzT3ZlcnZpZXdfanMuZTgyN2ExYWE2ZTU1YjI3ZWI2YzUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtLQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9MQUFvTCxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0s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QTtBQUNBLGlDQUFpQyxzRUFBb0I7O0FBRXJELE1BQU0sc0VBQW9CO0FBQzFCLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLHFCQUFxQiwrQ0FBUTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBLElBQUksNERBQVU7QUFDZDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Nzcy9wcm9qZWN0LW92ZXJ2aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Njc3MvcHJvamVjdC1vdmVydmlldy5zY3NzPzVjNGUiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Byb2plY3RzT3ZlcnZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJSRUFLUE9JTlRTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogRk9OVCBGQUNFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1wiKTtcbn1cbi8qIEZPTlQgU0laRSBDQUxDVUxBVElPTlMgV0lUSCBDTEFNUCgpXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogQ1VTVE9NIFBST1BFUlRJRVNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG46cm9vdCB7XG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcbiAgLS1jb2xvci13aGl0ZTogI2ZmZmZmZjtcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcbiAgLS1jb2xvci1ncmV5OiAjYTVhNWE1O1xuICAtLWxvZ28td2lkdGg6IGNsYW1wKDYuMjVyZW0sIDMuMzF2dyArIDUuMzhyZW0sIDkuMzFyZW0pO1xuICAtLWZvbnQtc2l6ZS1uYXY6IGNsYW1wKDEuMjVyZW0sIDAuNTR2dyArIDEuMTFyZW0sIDEuNzVyZW0pO1xuICAtLWZvbnQtc2l6ZS10ZXh0OiBjbGFtcCgxLjM4cmVtLCAwLjgxdncgKyAxLjE2cmVtLCAyLjEzcmVtKTtcbiAgLS1mb250LXNpemUtaDE6IGNsYW1wKDVyZW0sIDYuMDh2dyArIDMuNHJlbSwgMTAuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMjogY2xhbXAoMi41cmVtLCAzLjM4dncgKyAxLjYxcmVtLCA1LjYzcmVtKTtcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogY2xhbXAoMS4yNXJlbSwgMC4yN3Z3ICsgMS4xOHJlbSwgMS41cmVtKTtcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiBjbGFtcCgxcmVtLCAwLjE0dncgKyAwLjk2cmVtLCAxLjEzcmVtKTtcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiBjbGFtcCgxcmVtLCAwLjE0dncgKyAwLjk2cmVtLCAxLjEzcmVtKTtcbiAgLS1mb250LXNpemUtdmVyc2lvbjogY2xhbXAoMC43NXJlbSwgMC41NHZ3ICsgMC42MXJlbSwgMS4yNXJlbSk7XG4gIC0tZm9udC13ZWlnaHQtdGhpbjogMzAwO1xuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUxMDtcbiAgLS1mb250LXdlaWdodC1zZW1pYm9sZDogNTUwO1xuICAtLWZsZXgtZ2FwLW5hdjogY2xhbXAoMC40NHJlbSwgMi45MXZ3ICsgLTAuMzNyZW0sIDMuMTNyZW0pO1xuICAtLWhvbWVwYWdlLWRlc2NyaXB0aW9uLXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDE5LjU5dncgKyAzMi4zNnJlbSwgNTUuNjNyZW0pO1xuICAtLTE2MHB4LXRvLTgwcHg6IGNsYW1wKDVyZW0sIDUuNDF2dyArIDMuNThyZW0sIDEwcmVtKTtcbiAgLS0xMzVweC10by03MHB4OiBjbGFtcCg0LjM4cmVtLCA0LjM5dncgKyAzLjIycmVtLCA4LjQ0cmVtKTtcbiAgLS0xMjBweC10by02MHB4OiBjbGFtcCgzLjc1cmVtLCA0LjA1dncgKyAyLjY5cmVtLCA3LjVyZW0pO1xuICAtLTgwcHgtdG8tNDBweDogY2xhbXAoMi41cmVtLCAyLjd2dyArIDEuNzlyZW0sIDVyZW0pO1xuICAtLTcwcHgtdG8tMzVweDogY2xhbXAoMi4xOXJlbSwgMi4zNnZ3ICsgMS41N3JlbSwgNC4zOHJlbSk7XG4gIC0tNjVweC10by00NXB4OiBjbGFtcCgyLjgxcmVtLCAxLjM1dncgKyAyLjQ2cmVtLCA0LjA2cmVtKTtcbiAgLS0zMHB4LXRvLTE1cHg6IGNsYW1wKDAuOTRyZW0sIDEuMDF2dyArIDAuNjdyZW0sIDEuODhyZW0pO1xuICAtLTI1cHgtdG8tMTBweDogY2xhbXAoMC42M3JlbSwgMS4wMXZ3ICsgMC4zNnJlbSwgMS41NnJlbSk7XG4gIC0tMjBweC10by0xMHB4OiBjbGFtcCgwLjYzcmVtLCAwLjY4dncgKyAwLjQ1cmVtLCAxLjI1cmVtKTtcbiAgLS0xNXB4LXRvLTEwcHg6IGNsYW1wKDAuNjNyZW0sIDAuMzR2dyArIDAuNTRyZW0sIDAuOTRyZW0pO1xuICAtLTE1cHgtdG8tOHB4OiBjbGFtcCgwLjVyZW0sIDAuNDd2dyArIDAuMzhyZW0sIDAuOTRyZW0pO1xuICAtLTExcHgtdG8tNXB4OiBjbGFtcCgwLjM4cmVtLCAwLjM0dncgKyAwLjI5cmVtLCAwLjY5cmVtKTtcbiAgLS03cHgtdG8tM3B4OiBjbGFtcCgwLjE5cmVtLCAwLjI3dncgKyAwLjEycmVtLCAwLjQ0cmVtKTtcbiAgLS00cHgtdG8tMnB4OiBjbGFtcCgwLjEzcmVtLCAwLjE0dncgKyAwLjA5cmVtLCAwLjI1cmVtKTtcbiAgLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aDogY2xhbXAoMzEuMjVyZW0sIDYuNzZ2dyArIDI5LjQ4cmVtLCAzNy41cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoOiBjbGFtcCgzOC43NXJlbSwgMTIuMTZ2dyArIDM1LjU2cmVtLCA1MHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogY2xhbXAoMC4zMXJlbSwgMC42OHZ3ICsgMC4xNHJlbSwgMC45NHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogY2xhbXAoMC42M3JlbSwgMS4wMXZ3ICsgMC4zNnJlbSwgMS41NnJlbSk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tbG9nby13aWR0aDogMzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS1uYXY6IDE4cHg7XG4gICAgLS1mb250LXNpemUtdGV4dDogMThweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLWZvbnQtc2l6ZS1oMTogNjBweDtcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzBweDtcbiAgICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiAxNXB4O1xuICAgIC0tZm9udC1zaXplLXNraWxsLXRhZzogMTRweDtcbiAgICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IDE0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAzcHg7XG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiA2cHg7XG4gIH1cbn1cblxuLyogR0VORVJBTCBTVFlMRVNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAyOHB4O1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmgxLFxuaDIge1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KSAtMTBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gIGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaDEge1xuICAgIG1hcmdpbjogMCAwIDMwcHggLTVweDtcbiAgfVxufVxuXG5oMiB7XG4gIG1hcmdpbjogMCAwIDIwcHggLTJweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG59XG5cbmgzLFxucCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogdmFyKC0tMjBweC10by0xMHB4KSAwIDA7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xufVxuXG5wICsgcCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdmlzaWJpbGl0eSAwLjJzO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgLmhpZGRlbi14eHMtaGFsZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi52aXNpYmxlLXh4cy1oYWxmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAudmlzaWJsZS14eHMtaGFsZiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLyogVFJBTlNJVElPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udHJhbnNpdGlvbi1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG59XG5cbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xufVxuXG4vKiBMT0dPICsgTkFWSUdBVElPTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBoZWFkZXIge1xuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XG4gIH1cbn1cbmhlYWRlciBpbWcge1xuICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWluLXdpZHRoOiAzMXB4O1xuICB9XG59XG5oZWFkZXIgbmF2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcbiAgbWFyZ2luOiAwIDAgLTVweDtcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIHtcbiAgICBtYXJnaW46IDAgMCAtMnB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xuICB9XG59XG5oZWFkZXIgbmF2IHVsIGxpIGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLyogR0VORVJBTCBTVFlMRVMgRk9SICNDT05URU5UXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiB2YXIoLS04MHB4LXRvLTQwcHgpIGF1dG8gMDtcbiAgcGFkZGluZzogMDtcbn1cbiNjb250ZW50IC5ob21lcGFnZSxcbiNjb250ZW50IC5wcm9maWxlLXBhZ2Uge1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XG59XG5cbi8qIFBST0pFQ1QgTE9BRElORyBBTklNQVRJT05cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4jbG9hZGluZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiNsb2FkaW5nLXdyYXBwZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG4uY2lyY2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuI2JhbGwtMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS40cztcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuI2JhbGwtMyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuaHRtbCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qIEhvbWVwYWdlXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmhvbWVwYWdlIC5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCk7XG59XG4uaG9tZXBhZ2UgLmRlc2NyaXB0aW9uIHAge1xuICBtYXgtd2lkdGg6IHZhcigtLWhvbWVwYWdlLWRlc2NyaXB0aW9uLXRleHQtd2lkdGgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5ob21lcGFnZSAuZGVzY3JpcHRpb24gcCB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfVxufVxuXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IHZhcigtLTEyMHB4LXRvLTYwcHgpO1xuICBtYXJnaW46IDA7XG59XG4ucHJvamVjdHMtb3ZlcnZpZXcgYXJ0aWNsZSBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wcm9qZWN0cy1vdmVydmlldyBhcnRpY2xlIGZpZ3VyZSB7XG4gICAgbWFyZ2luOiAwIC0yOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByb2plY3RzLW92ZXJ2aWV3IGFydGljbGUgZmlndXJlIHtcbiAgICBtYXJnaW46IDAgLTE1cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2JyZWFrcG9pbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dlbmVyYWwtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3Byb2plY3Qtb3ZlcnZpZXcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtpR0FBQTtBQ0dBO2lHQUFBO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FDQUY7QURHQTtpR0FBQTtBQW1DQTtpR0FBQTtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1REFBQTtFQU1BLDBEQUFBO0VBQ0EsMkRBQUE7RUFPQSxzREFBQTtFQUNBLHdEQUFBO0VBQ0Esc0VBQUE7RUFDQSw2REFBQTtFQUNBLG1FQUFBO0VBQ0EsOERBQUE7RUFVQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUVBLDBEQUFBO0VBRUEsK0VBQUE7RUFFQSxxREFBQTtFQUNBLDBEQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7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RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFFQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUVBLGFBQUE7QUNwREY7QURzREU7RUFDRSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsMkJBQUE7QUNwREo7O0FEd0RBO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNyREY7O0FEd0RBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7QUNyREY7O0FEdURBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7QUNwREY7O0FEdURBO0VBQ0U7SUFDRSx3QkFBQTtFQ3BERjtFRHNEQTtJQUNFLDBCQUFBO0VDcERGO0VEc0RBO0lBQ0UsNEJBQUE7RUNwREY7RURzREE7SUFDRSx3QkFBQTtFQ3BERjtBQUNGO0FEMERBO0VBQ0UsbUJBQUE7RUFDQSxVQUFBO0FDeERGOztBQW5WQTtpR0FBQTtBQUdFO0VBQ0UsK0JBQUE7QUFxVko7QUFuVkk7RUFDRSxpREFBQTtBQXFWTjtBRi9SRTtFRXZERTtJQUlJLGFBQUE7RUFzVk47QUFDRjs7QUFoVkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUVBLFNBQUE7QUFrVkY7QUEvVUk7RUFDRSwyQ0FBQTtFQUNBLG9DQUFBO0FBaVZOO0FGblZFO0VFSUU7SUFFSSxlQUFBO0VBaVZOO0FBQ0Y7QUY1VUU7RUVSRTtJQUtJLGVBQUE7RUFtVk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCUkVBS1BPSU5UU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQG1peGluIGJyZWFrcG9pbnQtbGcge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MjRweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLWxnIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LW1kIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1tZCB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXNtIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXNtIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4teHMge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzLWhhbGYge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMzcwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiLFwiQHVzZSAnc2FzczptYXRoJztcXG5AaW1wb3J0ICdicmVha3BvaW50cyc7XFxuXFxuLyogRk9OVCBGQUNFXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7IC8vIFN1cHBvcnRzIGEgcmFuZ2UgZnJvbSBUaGluICgxMDApIHRvIEJsYWNrICg5MDApXFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8vIE9wdGlvbmFsIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcXG4gIHNyYzogdXJsKCcuLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LndvZmYyJykgZm9ybWF0KCd0cnVldHlwZS12YXJpYXRpb25zJyk7XFxufVxcblxcbi8qIEZPTlQgU0laRSBDQUxDVUxBVElPTlMgV0lUSCBDTEFNUCgpXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kZGVmYXVsdC1taW4tYnA6IDQyMHB4O1xcbiRkZWZhdWx0LW1heC1icDogMTkwMHB4O1xcblxcbkBmdW5jdGlvbiByb3VuZCgkbnVtYmVyLCAkZGVjaW1hbHM6IDApIHtcXG4gICRuOiAxO1xcbiAgQGlmICRkZWNpbWFscyA+IDAge1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRkZWNpbWFscyB7XFxuICAgICAgJG46ICRuICogMTA7XFxuICAgIH1cXG4gIH1cXG4gIEByZXR1cm4gbWF0aC5kaXYobWF0aC5yb3VuZCgkbnVtYmVyICogJG4pLCAkbik7XFxufVxcblxcbkBmdW5jdGlvbiBweC10by1yZW0oJHB4KSB7XFxuICAkcmVtczogbWF0aC5kaXYoJHB4LCAxNnB4KSAqIDFyZW07XFxuICBAcmV0dXJuICRyZW1zO1xcbn1cXG5cXG5AZnVuY3Rpb24gZmx1aWQoXFxuICAkbWluLXNpemUsXFxuICAkbWF4LXNpemUsXFxuICAkbWluLWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1pbi1icCxcXG4gICRtYXgtYnJlYWtwb2ludDogJGRlZmF1bHQtbWF4LWJwLFxcbiAgJHVuaXQ6IHZ3XFxuKSB7XFxuICAkc2xvcGU6IG1hdGguZGl2KCRtYXgtc2l6ZSAtICRtaW4tc2l6ZSwgJG1heC1icmVha3BvaW50IC0gJG1pbi1icmVha3BvaW50KTtcXG4gICRzbG9wZS10by11bml0OiByb3VuZCgkc2xvcGUgKiAxMDAsIDIpO1xcbiAgJGludGVyY2VwdC1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUgLSAkc2xvcGUgKiAkbWluLWJyZWFrcG9pbnQpLCAyKTtcXG4gICRtaW4tc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUpLCAyKTtcXG4gICRtYXgtc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWF4LXNpemUpLCAyKTtcXG4gIEByZXR1cm4gY2xhbXAoI3skbWluLXNpemUtcmVtfSwgI3skc2xvcGUtdG8tdW5pdH0jeyR1bml0fSArICN7JGludGVyY2VwdC1yZW19LCAjeyRtYXgtc2l6ZS1yZW19KTtcXG59XFxuXFxuLyogQ1VTVE9NIFBST1BFUlRJRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xcbiAgLS1jb2xvci1ncmV5OiAjYTVhNWE1O1xcblxcbiAgLS1sb2dvLXdpZHRoOiAje2ZsdWlkKDEwMHB4LCAxNDlweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tbG9nby13aWR0aDogMzBweDtcXG4gIH1cXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1uYXY6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLXRleHQ6IDE4cHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1oMTogI3tmbHVpZCg4MHB4LCAxNzBweCl9O1xcbiAgLS1mb250LXNpemUtaDI6ICN7Zmx1aWQoNDBweCwgOTBweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogI3tmbHVpZCgyMHB4LCAyNHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZlcnNpb246ICN7Zmx1aWQoMTJweCwgMjBweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzBweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogMTVweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xcbiAgICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IDE0cHg7XFxuICB9XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcXG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUxMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDdweCwgNTBweCl9O1xcblxcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiAje2ZsdWlkKDYwMHB4LCA4OTBweCl9O1xcblxcbiAgLS0xNjBweC10by04MHB4OiAje2ZsdWlkKDgwcHgsIDE2MHB4KX07XFxuICAtLTEzNXB4LXRvLTcwcHg6ICN7Zmx1aWQoNzBweCwgMTM1cHgpfTtcXG4gIC0tMTIwcHgtdG8tNjBweDogI3tmbHVpZCg2MHB4LCAxMjBweCl9O1xcbiAgLS04MHB4LXRvLTQwcHg6ICN7Zmx1aWQoNDBweCwgODBweCl9O1xcbiAgLS03MHB4LXRvLTM1cHg6ICN7Zmx1aWQoMzVweCwgNzBweCl9O1xcbiAgLS02NXB4LXRvLTQ1cHg6ICN7Zmx1aWQoNDVweCwgNjVweCl9O1xcbiAgLS0zMHB4LXRvLTE1cHg6ICN7Zmx1aWQoMTVweCwgMzBweCl9O1xcbiAgLS0yNXB4LXRvLTEwcHg6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcbiAgLS0yMHB4LXRvLTEwcHg6ICN7Zmx1aWQoMTBweCwgMjBweCl9O1xcbiAgLS0xNXB4LXRvLTEwcHg6ICN7Zmx1aWQoMTBweCwgMTVweCl9O1xcbiAgLS0xNXB4LXRvLThweDogI3tmbHVpZCg4cHgsIDE1cHgpfTtcXG4gIC0tMTFweC10by01cHg6ICN7Zmx1aWQoNnB4LCAxMXB4KX07XFxuICAtLTdweC10by0zcHg6ICN7Zmx1aWQoM3B4LCA3cHgpfTtcXG4gIC0tNHB4LXRvLTJweDogI3tmbHVpZCgycHgsIDRweCl9O1xcblxcbiAgLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aDogI3tmbHVpZCg1MDBweCwgNjAwcHgpfTtcXG5cXG4gIC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aDogI3tmbHVpZCg2MjBweCwgODAwcHgpfTtcXG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogI3tmbHVpZCg1cHgsIDE1cHgpfTtcXG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogI3tmbHVpZCgxMHB4LCAyNXB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAzcHg7XFxuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogNnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDI4cHg7XFxuXFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzKCkge1xcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxuICB9XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtYXJnaW46IDAgMCB2YXIoLS03MHB4LXRvLTM1cHgpIC0xMHB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDEpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcbiAgbGluZS1oZWlnaHQ6IDkwJTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICBtYXJnaW46IDAgMCAzMHB4IC01cHg7XFxuICB9XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMCAwIDIwcHggLTJweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmgzLFxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogdmFyKC0tMjBweC10by0xMHB4KSAwIDA7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG59XFxuXFxucCArIHAge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHZpc2liaWxpdHkgMC4ycztcXG59XFxuXFxuLmhpZGRlbi14eHMtaGFsZiB7XFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG4udmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi52aXNpYmxlLXh4cy1oYWxmIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XFxuXFxuLyogVFJBTlNJVElPTlNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8vIEluaXRpYWwgc3RhdGUgb2Ygc2l0ZSB0aXRsZSBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xcbn1cXG5cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNraWxscy1hbmQtdG9vbHMgZGl2IGJlZm9yZSB0cmFuc2l0aW9uXFxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4vLyBUcmFuc2l0aW9uIG9mIHNpdGUgdGl0bGVcXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBza2lsbHMgbGlzdCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBmaXJzdCBtZWRpYSBlbGVtZW50IG9uIHByb2plY3QgcGFnZXNcXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjQ1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40NXM7XFxufVxcblxcbi8qIExPR08gKyBOQVZJR0FUSU9OXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMge1xcbiAgICBtYXJnaW46IDEwcHggYXV0byAwO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcblxcbiAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICAgIG1pbi13aWR0aDogMzFweDtcXG4gICAgfVxcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xcblxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IHZhcigtLWZsZXgtZ2FwLW5hdik7XFxuXFxuICAgICAgbWFyZ2luOiAwIDAgLTVweDtcXG4gICAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xcblxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcXG5cXG4gICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgIG1hcmdpbjogMCAwIC0ycHg7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBsaSBhIHtcXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcblxcbiAgICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICAgIHBhZGRpbmc6IDRweCA3cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmFjdGl2ZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIEdFTkVSQUwgU1RZTEVTIEZPUiAjQ09OVEVOVFxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogdmFyKC0tODBweC10by00MHB4KSBhdXRvIDA7XFxuICBwYWRkaW5nOiAwO1xcblxcbiAgLmhvbWVwYWdlLFxcbiAgLnByb2ZpbGUtcGFnZSB7XFxuICAgIHBhZGRpbmc6IDAgMCB2YXIoLS0xNjBweC10by04MHB4KTtcXG4gIH1cXG59XFxuXFxuLyogUFJPSkVDVCBMT0FESU5HIEFOSU1BVElPTlxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuI2xvYWRpbmctd3JhcHBlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDQwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNXB4O1xcblxcbiAgaGVpZ2h0OiAxMDBweDtcXG5cXG4gIHNwYW4ge1xcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbC10YWcpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XFxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIH1cXG59XFxuXFxuLmNpcmNsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI2JhbGwtMSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS40cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcbiNiYWxsLTMge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS40cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxuICA0MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOHB4KTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTFweCk7XFxuICB9XFxuICA4MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICB9XFxufVxcblxcbi8vIFRyeSB0byBoaWRlIHRoZSBET00gYXMgbG9uZyBhcyBwb3NzaWJsZSB2aWEgaW5saW5lIHN0eWxlc1xcbi8vIHRvIHByZXZlbnQgRmxhc2hlcyBvZiB1bnN0eWxlZCB0ZXh0IChGT1VUKS4gVGhlbiB1bmhpZGUgdGhlXFxuLy8gRE9NIGF0IHRoZSBlbmQgb2YgdGhlIENTUyBkb2N1bWVudDpcXG5odG1sIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIixcIkBpbXBvcnQgJ2dlbmVyYWwtc3R5bGVzJztcXG5cXG4vKiBIb21lcGFnZVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLmhvbWVwYWdlIHtcXG4gIC5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCk7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aCk7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBoeXBoZW5zOiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vLyBQcm9qZWN0IG92ZXJ2aWV3XFxuLnByb2plY3RzLW92ZXJ2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiB2YXIoLS0xMjBweC10by02MHB4KTtcXG5cXG4gIG1hcmdpbjogMDtcXG5cXG4gIGFydGljbGUge1xcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcXG4gICAgfVxcbiAgICBmaWd1cmUge1xcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQtc20oKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTI4cHg7XFxuICAgICAgfVxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgLTE1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3Qtb3ZlcnZpZXcuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3Qtb3ZlcnZpZXcuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9zY3NzL3Byb2plY3Qtb3ZlcnZpZXcuc2Nzcyc7XG5pbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjb252ZXJ0VG9VUkxTYXZlTmFtZSwgcHVzaFVSTEFuZENhbGxSb3V0ZXIsIHNldENvbnRlbnQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbi8qXG5HZW5lcmF0ZXMgdGhlIEhUTUwgY29kZSBmb3IgYSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbiBhcnJheSBvZiBwcm9qZWN0IG9iamVjdHMgYW5kXG5nZW5lcmF0ZXMgSFRNTCBjb2RlIGZvciB0aGUgcHJvcGVydGllcyBvZiB0aG9zZSBvYmplY3RzLlxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3ID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3RzKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvamVjdHMgZGF0YSBhdmFpbGFibGUgdG8gY3JlYXRlIG92ZXJ2aWV3LicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgY29kZSBmb3IgdGhlIGRlc2NyaXB0aW9uIHRleHQgb2YgdGhlIGhvbWVwYWdlIHRpdGxlXG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj48cD5JY2ggYmluIFJvYmVydCBBcm5pbmcsIGVpbiBVSS9VWCBEZXNpZ25lciBtaXQgMTAgSmFocmVuIEVyZmFocnVuZyB1bmQgdW1mYXNzZW5kZXIgRXhwZXJ0aXNlIGluIEhUTUwvQ1NTIHNvd2llIHNvbGlkZW4gR3J1bmRrZW5udG5pc3NlbiBpbiBKYXZhU2NyaXB0LjwvcD48L2Rpdj5gO1xuXG4gIC8vIEdlbmVyYXRlIEhUTUwgY29kZSBmb3IgZGlzcGxheWluZyBlYWNoIHByb2plY3QgdW5kZXJuZWF0aCBlYWNoIG90aGVyXG4gIGNvbnN0IG92ZXJ2aWV3SFRNTCA9IHByb2plY3RzXG4gICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgLy8gRW5jb2RlIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoXG4gICAgICBjb25zdCB1cmxTYXZlUHJvamVjdE5hbWUgPSBjb252ZXJ0VG9VUkxTYXZlTmFtZShwcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgICAgcmV0dXJuIGA8YSBocmVmPVwiLyR7dXJsU2F2ZVByb2plY3ROYW1lfVwiIGlkPVwiJHtwcm9qZWN0LmlkfVwiPlxuICAgICAgPGFydGljbGU+XG4gICAgICA8ZmlndXJlPlxuICAgICAgPGltZyAke3Byb2plY3QuaWQgIT09IDEgPyAnZGF0YS1zcmM9JyA6ICdzcmM9J30gXCIke3Byb2plY3QuaW1hZ2V9XCIgYWx0PVwiJHtcbiAgICAgICAgcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgfVwiICR7cHJvamVjdC5pZCAhPT0gMSA/IGBjbGFzcz1cIm1lZGlhIGxhenktbG9hZFwiYCA6ICcnfT5cbiAgICAgIDwvZmlndXJlPlxuICAgICAgPGgzPiR7cHJvamVjdC5wcm9qZWN0TmFtZX08L2gzPlxuICAgICAgPHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvYT5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuXG4gIHJldHVybiBgPGRpdiBjbGFzcz1cImhvbWVwYWdlXCI+PGgxIGNsYXNzPVwic2l0ZS10aXRsZVwiPlVJL1VYIERlc2lnbmVyPC9oMT4ke2Rlc2NyaXB0aW9uVGV4dH08ZGl2IGNsYXNzPVwicHJvamVjdHMtb3ZlcnZpZXdcIj4ke292ZXJ2aWV3SFRNTH08L2Rpdj48L2Rpdj5gO1xufTtcblxuLypcbkxvb2tzIGZvciBhIHByb2plY3QgdGhhdCBtYXRjaGVzIGEgZ2l2ZW4gSUQgd2l0aGluIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cy5cblRoZSBJRCBpcyBhIHByb3BlcnR5IG9mIGV2ZXJ5IHByb2plY3Qgb2JqZWN0IGluIHRoZSBhcnJheS5cbiovXG5jb25zdCBmaW5kUHJvamVjdEJ5SWQgPSBmdW5jdGlvbiAocHJvamVjdEFycmF5LCBpZCkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgcmV0dXJuIHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xufTtcblxuLypcbkFkZHMgYSBjbGljayBldmVudCB0byB0aGUgcHJvamVjdCB0ZWFzZXJzIG9uIHRoZSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZXZlbnQgdHJpZXMgdG8gbWF0Y2ggdGhlIGlkIG9mIHRoZSBjbGlja2VkIHRlYXNlciB3aXRoIGEgcHJvamVjdCdzIElEXG5mcm9tIGEgZ2l2ZW4gW3Byb2plY3RzXSBhcnJheSwgaW5zZXJ0cyB0aGF0IHByb2plY3QgbmFtZSBpbiB0aGUgdXJsIGFuZCBsb2RzXG50aGUgcm91dGVyIHRvIGhhbmRsZSB0aGUgbG9hZGluZyBvZiB0aGUgY29udGVudC5cbiovXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGNvbnN0IGFsbFByb2plY3RUZWFzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtb3ZlcnZpZXcgYScpO1xuXG4gIGFsbFByb2plY3RUZWFzZXIuZm9yRWFjaCgodGVhc2VyKSA9PlxuICAgIHRlYXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGNvbnZlcnRUb1VSTFNhdmVOYW1lKHByb2plY3REYXRhLnByb2plY3ROYW1lKTtcblxuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIodXJsU2F2ZVByb2plY3ROYW1lKTtcbiAgICB9KVxuICApO1xufTtcblxuLyogXG5DYWxscyB0aGUgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgdGhlIEhUTUwgZm9yIHRoZSBQcm9qZWN0IE92ZXJ2aWV3LFxuc2V0cyBpdHMgb3V0cHV0IHRvIGRpc3BsYXkgaW4gdGhlICNjb250ZW50IGRpdiBhbmQgYWN0aXZhdGVzIHRoZVxubGlua3MgdGhhdCB3cmFwIGVhY2ggcHJvamVjdC5cbiovXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2plY3RPdmVydmlldyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnRGlzcGxheWluZyBwcm9qZWN0cy4uLicpO1xuICAgIGNvbnN0IHByb2plY3RzT3ZlcnZpZXdIVE1MID0gY3JlYXRlUHJvamVjdHNPdmVydmlldyhkYXRhLnByb2plY3RzKTtcblxuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBwcm9qZWN0c092ZXJ2aWV3SFRNTCk7XG4gICAgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzKGRhdGEucHJvamVjdHMpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9