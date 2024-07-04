"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_profile_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/profile.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/profile.scss ***!
  \************************************************************************************************************/
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

/* PROFILE PAGE
=============================================================================================== */
.profile-page .text p {
  max-width: var(--homepage-description-text-width);
}
.profile-page > .text:first-of-type {
  margin: 0 0 var(--120px-to-60px);
}
.profile-page > .text:first-of-type p {
  /* @include breakpoint-xxs() {
    hyphens: auto;
  } */
}
.profile-page .two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}
.profile-page .two-column p {
  max-width: var(--profile-skill-list-text-width);
  font-weight: var(--font-weight-thin);
}`, "",{"version":3,"sources":["webpack://./src/scss/breakpoints.scss","webpack://./src/scss/general-styles.scss","webpack://./src/scss/profile.scss"],"names":[],"mappings":"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","sourcesContent":["/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 370px) {\n    @content;\n  }\n}\n","@use 'sass:math';\n@import 'breakpoints';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.woff2') format('truetype-variations');\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 18px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(12px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-thin: 300;\n  --font-weight-regular: 400;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --135px-to-70px: #{fluid(70px, 135px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --30px-to-15px: #{fluid(15px, 30px)};\n  --25px-to-10px: #{fluid(10px, 25px)};\n  --20px-to-10px: #{fluid(10px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n  --15px-to-8px: #{fluid(8px, 15px)};\n  --11px-to-5px: #{fluid(6px, 11px)};\n  --7px-to-3px: #{fluid(3px, 7px)};\n  --4px-to-2px: #{fluid(2px, 4px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(620px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nhtml {\n  box-sizing: border-box;\n  min-width: 300px;\n}\n\nbody {\n  margin: 0;\n  padding: 0 28px;\n\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n\n  @include breakpoint-xs() {\n    padding: 0 15px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: var(--20px-to-10px) 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden {\n  display: flex;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n\n.visible {\n  opacity: 1;\n  visibility: visible;\n  display: flex;\n}\n\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  @include breakpoint-xs {\n    margin: 10px auto 0;\n  }\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n\n/* PROJECT LOADING ANIMATION\n=============================================================================================== */\n#loading-wrapper {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translateX(-50%);\n\n  align-items: center;\n  flex-direction: column;\n  gap: 15px;\n\n  height: 100px;\n\n  span {\n    font-size: var(--font-size-skill-tag);\n    font-weight: var(--font-weight-thin);\n    color: var(--primary-color);\n  }\n}\n\n.circle {\n  display: inline-block;\n  background-color: var(--primary-color);\n  height: 15px;\n  width: 15px;\n  border-radius: 25px;\n}\n\n#ball-1 {\n  -webkit-animation-name: bounce;\n  -webkit-animation-delay: 0s;\n  -webkit-animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n}\n#ball-3 {\n  -webkit-animation-name: bounce;\n  -webkit-animation-delay: 0.1s;\n  -webkit-animation-duration: 1.4s;\n  -webkit-animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes bounce {\n  0% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(8px);\n  }\n  60% {\n    transform: translateY(-11px);\n  }\n  80% {\n    transform: translateY(0);\n  }\n}\n\n// Try to hide the DOM as long as possible via inline styles\n// to prevent Flashes of unstyled text (FOUT). Then unhide the\n// DOM at the end of the CSS document:\nhtml {\n  visibility: visible;\n  opacity: 1;\n}\n","@import 'general-styles';\n\n/* PROFILE PAGE\n=============================================================================================== */\n.profile-page {\n  .text {\n    p {\n      max-width: var(--homepage-description-text-width);\n    }\n  }\n\n  > .text:first-of-type {\n    margin: 0 0 var(--120px-to-60px);\n\n    p {\n      /* @include breakpoint-xxs() {\n        hyphens: auto;\n      } */\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n\n    p {\n      max-width: var(--profile-skill-list-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scss/profile.scss":
/*!*******************************!*\
  !*** ./src/scss/profile.scss ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./profile.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/profile.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profile_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProfile: () => (/* binding */ createProfile),
/* harmony export */   displayProfile: () => (/* binding */ displayProfile)
/* harmony export */ });
/* harmony import */ var _scss_profile_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/profile.scss */ "./src/scss/profile.scss");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");




const createProfile = function (profileData) {
  // Check whether profile data is available
  if (!profileData) {
    console.error('No profile data available.');
    return '';
  }

  // Create profile HTML
  const profileElements = profileData.elements
    .map((element) => {
      switch (element.type) {
        case 'text':
          return `<div class="${element.type}">
              ${element.content}
              </div>`;

        case 'two-column':
          // If the element type is "two-column" we need to iterate over the element's
          // "content" property which holds an array of objects type "text"
          const textElements = element.content
            .map((el) => {
              if (el.type === 'text') {
                return `<div class="${el.type}">
              ${el.content}
              </div>`;
              } else {
                return `<p>Unsupported format.</p>`;
              }
            })
            .join('');

          return `<h2>Skills</h2><div class ="${element.type}">
              ${textElements}
              </div>`;
      }
    })
    .join('');

  return `<div class="profile-page"><h1>${profileData.title}</h1>${profileElements}</div>`;
};

const displayProfile = async function () {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.loadData)();

  if (data) {
    console.log('Displaying profile...');
    const profileHTML = createProfile(data.profile);
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.setContent)('content', profileHTML);
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2ZpbGVfanMuMGE1ZTk1OTU2ODA4MTIwMWViY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtLQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJLQUEySyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxvS0FBb0ssZ0NB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TUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBb0o7QUFDcEo7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4SEFBTzs7OztBQUk4RjtBQUN0SCxPQUFPLGlFQUFlLDhIQUFPLElBQUksOEhBQU8sVUFBVSw4SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCaEQ7QUFDSztBQUNhOztBQUV4QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QyxnQkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxnREFBZ0QsYUFBYTtBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwwQ0FBMEMsa0JBQWtCLE9BQU8sZ0JBQWdCO0FBQ25GOztBQUVPO0FBQ1AscUJBQXFCLCtDQUFROztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVO0FBQ2Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zY3NzL3Byb2ZpbGUuc2NzcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2Nzcy9wcm9maWxlLnNjc3M/OWU2MyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQlJFQUtQT0lOVFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBGT05UIEZBQ0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZS12YXJpYXRpb25zXCIpO1xufVxuLyogRk9OVCBTSVpFIENBTENVTEFUSU9OUyBXSVRIIENMQU1QKClcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBDVVNUT00gUFJPUEVSVElFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xuICAtLWNvbG9yLWdyZXk6ICNhNWE1YTU7XG4gIC0tbG9nby13aWR0aDogY2xhbXAoNi4yNXJlbSwgMy4zMXZ3ICsgNS4zOHJlbSwgOS4zMXJlbSk7XG4gIC0tZm9udC1zaXplLW5hdjogY2xhbXAoMS4yNXJlbSwgMC41NHZ3ICsgMS4xMXJlbSwgMS43NXJlbSk7XG4gIC0tZm9udC1zaXplLXRleHQ6IGNsYW1wKDEuMzhyZW0sIDAuODF2dyArIDEuMTZyZW0sIDIuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMTogY2xhbXAoNXJlbSwgNi4wOHZ3ICsgMy40cmVtLCAxMC42M3JlbSk7XG4gIC0tZm9udC1zaXplLWgyOiBjbGFtcCgyLjVyZW0sIDMuMzh2dyArIDEuNjFyZW0sIDUuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiBjbGFtcCgxLjI1cmVtLCAwLjI3dncgKyAxLjE4cmVtLCAxLjVyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTZyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTZyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiBjbGFtcCgwLjc1cmVtLCAwLjU0dncgKyAwLjYxcmVtLCAxLjI1cmVtKTtcbiAgLS1mb250LXdlaWdodC10aGluOiAzMDA7XG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xuICAtLWZvbnQtd2VpZ2h0LW1lZGl1bTogNTEwO1xuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XG4gIC0tZmxleC1nYXAtbmF2OiBjbGFtcCgwLjQ0cmVtLCAyLjkxdncgKyAtMC4zM3JlbSwgMy4xM3JlbSk7XG4gIC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aDogY2xhbXAoMzcuNXJlbSwgMTkuNTl2dyArIDMyLjM2cmVtLCA1NS42M3JlbSk7XG4gIC0tMTYwcHgtdG8tODBweDogY2xhbXAoNXJlbSwgNS40MXZ3ICsgMy41OHJlbSwgMTByZW0pO1xuICAtLTEzNXB4LXRvLTcwcHg6IGNsYW1wKDQuMzhyZW0sIDQuMzl2dyArIDMuMjJyZW0sIDguNDRyZW0pO1xuICAtLTEyMHB4LXRvLTYwcHg6IGNsYW1wKDMuNzVyZW0sIDQuMDV2dyArIDIuNjlyZW0sIDcuNXJlbSk7XG4gIC0tODBweC10by00MHB4OiBjbGFtcCgyLjVyZW0sIDIuN3Z3ICsgMS43OXJlbSwgNXJlbSk7XG4gIC0tNzBweC10by0zNXB4OiBjbGFtcCgyLjE5cmVtLCAyLjM2dncgKyAxLjU3cmVtLCA0LjM4cmVtKTtcbiAgLS02NXB4LXRvLTQ1cHg6IGNsYW1wKDIuODFyZW0sIDEuMzV2dyArIDIuNDZyZW0sIDQuMDZyZW0pO1xuICAtLTMwcHgtdG8tMTVweDogY2xhbXAoMC45NHJlbSwgMS4wMXZ3ICsgMC42N3JlbSwgMS44OHJlbSk7XG4gIC0tMjVweC10by0xMHB4OiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbiAgLS0yMHB4LXRvLTEwcHg6IGNsYW1wKDAuNjNyZW0sIDAuNjh2dyArIDAuNDVyZW0sIDEuMjVyZW0pO1xuICAtLTE1cHgtdG8tMTBweDogY2xhbXAoMC42M3JlbSwgMC4zNHZ3ICsgMC41NHJlbSwgMC45NHJlbSk7XG4gIC0tMTVweC10by04cHg6IGNsYW1wKDAuNXJlbSwgMC40N3Z3ICsgMC4zOHJlbSwgMC45NHJlbSk7XG4gIC0tMTFweC10by01cHg6IGNsYW1wKDAuMzhyZW0sIDAuMzR2dyArIDAuMjlyZW0sIDAuNjlyZW0pO1xuICAtLTdweC10by0zcHg6IGNsYW1wKDAuMTlyZW0sIDAuMjd2dyArIDAuMTJyZW0sIDAuNDRyZW0pO1xuICAtLTRweC10by0ycHg6IGNsYW1wKDAuMTNyZW0sIDAuMTR2dyArIDAuMDlyZW0sIDAuMjVyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi43NnZ3ICsgMjkuNDhyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM4Ljc1cmVtLCAxMi4xNnZ3ICsgMzUuNTZyZW0sIDUwcmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiBjbGFtcCgwLjMxcmVtLCAwLjY4dncgKyAwLjE0cmVtLCAwLjk0cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1sb2dvLXdpZHRoOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLW5hdjogMThweDtcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAxOHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xuICAgIC0tZm9udC1zaXplLWgyOiAzMHB4O1xuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xuICAgIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcbiAgfVxufVxuXG4vKiBHRU5FUkFMIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmh0bWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICB9XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgMCB2YXIoLS03MHB4LXRvLTM1cHgpIC0xMHB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgbGluZS1oZWlnaHQ6IDkwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoMSB7XG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xuICB9XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAtMnB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuaDMsXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiB2YXIoLS0yMHB4LXRvLTEwcHgpIDAgMDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG59XG5cbnAgKyBwIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuZmlndXJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbWcsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuaGlkZGVuLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnZpc2libGUteHhzLWhhbGYge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XG4gIC52aXNpYmxlLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4vKiBUUkFOU0lUSU9OU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi50cmFuc2l0aW9uLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcbn1cblxuLnRyYW5zaXRpb24taW4tb3BhY2l0eSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50cmFuc2l0aW9uLXZpc2libGUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4wNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMDVzO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC4yNXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuMjVzO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlLWRlbGF5ZWQtbW9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjQ1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC40NXM7XG59XG5cbi8qIExPR08gKyBOQVZJR0FUSU9OXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGhlYWRlciB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcbiAgfVxufVxuaGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG4gIG1pbi13aWR0aDogODBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzBweCkge1xuICBoZWFkZXIgaW1nIHtcbiAgICBtaW4td2lkdGg6IDMxcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xuICBtYXJnaW46IDAgMCAtNXB4O1xuICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGhlYWRlciBuYXYgdWwge1xuICAgIG1hcmdpbjogMCAwIC0ycHg7XG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgfVxufVxuaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgcGFkZGluZzogOHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIGxpIGEge1xuICAgIHBhZGRpbmc6IDRweCA3cHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xuICBwYWRkaW5nOiAwO1xufVxuI2NvbnRlbnQgLmhvbWVwYWdlLFxuI2NvbnRlbnQgLnByb2ZpbGUtcGFnZSB7XG4gIHBhZGRpbmc6IDAgMCB2YXIoLS0xNjBweC10by04MHB4KTtcbn1cblxuLyogUFJPSkVDVCBMT0FESU5HIEFOSU1BVElPTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbiNsb2FkaW5nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuI2xvYWRpbmctd3JhcHBlciBzcGFuIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi5jaXJjbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4jYmFsbC0xIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4jYmFsbC0zIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBib3VuY2Uge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5odG1sIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogUFJPRklMRSBQQUdFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLnByb2ZpbGUtcGFnZSAudGV4dCBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoKTtcbn1cbi5wcm9maWxlLXBhZ2UgPiAudGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwIDAgdmFyKC0tMTIwcHgtdG8tNjBweCk7XG59XG4ucHJvZmlsZS1wYWdlID4gLnRleHQ6Zmlyc3Qtb2YtdHlwZSBwIHtcbiAgLyogQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XG4gICAgaHlwaGVuczogYXV0bztcbiAgfSAqL1xufVxuLnByb2ZpbGUtcGFnZSAudHdvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxNXB4O1xufVxuLnByb2ZpbGUtcGFnZSAudHdvLWNvbHVtbiBwIHtcbiAgbWF4LXdpZHRoOiB2YXIoLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2JyZWFrcG9pbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2dlbmVyYWwtc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3Byb2ZpbGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtpR0FBQTtBQ0dBO2lHQUFBO0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBFQUFBO0FDQUY7QURHQTtpR0FBQTtBQW1DQTtpR0FBQTtBQUVBO0VB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dXJjZXNDb250ZW50XCI6W1wiLyogQlJFQUtQT0lOVFNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbkBtaXhpbiBicmVha3BvaW50LWxnIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxNDI0cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1sZyB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1tZCB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4tbWQge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1zbSB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1zbSB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXhzIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MjFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHhzIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHhzLWhhbGYge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM3MHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIixcIkB1c2UgJ3Nhc3M6bWF0aCc7XFxuQGltcG9ydCAnYnJlYWtwb2ludHMnO1xcblxcbi8qIEZPTlQgRkFDRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC53b2ZmMicpIGZvcm1hdCgndHJ1ZXR5cGUtdmFyaWF0aW9ucycpO1xcbn1cXG5cXG4vKiBGT05UIFNJWkUgQ0FMQ1VMQVRJT05TIFdJVEggQ0xBTVAoKVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJGRlZmF1bHQtbWluLWJwOiA0MjBweDtcXG4kZGVmYXVsdC1tYXgtYnA6IDE5MDBweDtcXG5cXG5AZnVuY3Rpb24gcm91bmQoJG51bWJlciwgJGRlY2ltYWxzOiAwKSB7XFxuICAkbjogMTtcXG4gIEBpZiAkZGVjaW1hbHMgPiAwIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGVjaW1hbHMge1xcbiAgICAgICRuOiAkbiAqIDEwO1xcbiAgICB9XFxuICB9XFxuICBAcmV0dXJuIG1hdGguZGl2KG1hdGgucm91bmQoJG51bWJlciAqICRuKSwgJG4pO1xcbn1cXG5cXG5AZnVuY3Rpb24gcHgtdG8tcmVtKCRweCkge1xcbiAgJHJlbXM6IG1hdGguZGl2KCRweCwgMTZweCkgKiAxcmVtO1xcbiAgQHJldHVybiAkcmVtcztcXG59XFxuXFxuQGZ1bmN0aW9uIGZsdWlkKFxcbiAgJG1pbi1zaXplLFxcbiAgJG1heC1zaXplLFxcbiAgJG1pbi1icmVha3BvaW50OiAkZGVmYXVsdC1taW4tYnAsXFxuICAkbWF4LWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1heC1icCxcXG4gICR1bml0OiB2d1xcbikge1xcbiAgJHNsb3BlOiBtYXRoLmRpdigkbWF4LXNpemUgLSAkbWluLXNpemUsICRtYXgtYnJlYWtwb2ludCAtICRtaW4tYnJlYWtwb2ludCk7XFxuICAkc2xvcGUtdG8tdW5pdDogcm91bmQoJHNsb3BlICogMTAwLCAyKTtcXG4gICRpbnRlcmNlcHQtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplIC0gJHNsb3BlICogJG1pbi1icmVha3BvaW50KSwgMik7XFxuICAkbWluLXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplKSwgMik7XFxuICAkbWF4LXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1heC1zaXplKSwgMik7XFxuICBAcmV0dXJuIGNsYW1wKCN7JG1pbi1zaXplLXJlbX0sICN7JHNsb3BlLXRvLXVuaXR9I3skdW5pdH0gKyAjeyRpbnRlcmNlcHQtcmVtfSwgI3skbWF4LXNpemUtcmVtfSk7XFxufVxcblxcbi8qIENVU1RPTSBQUk9QRVJUSUVTXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG46cm9vdCB7XFxuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XFxuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xcbiAgLS1jb2xvci1ncmVlbjogIzIyYjA2YztcXG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcXG5cXG4gIC0tbG9nby13aWR0aDogI3tmbHVpZCgxMDBweCwgMTQ5cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWxvZ28td2lkdGg6IDMwcHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1uYXY6ICN7Zmx1aWQoMjBweCwgMjhweCl9O1xcbiAgLS1mb250LXNpemUtdGV4dDogI3tmbHVpZCgyMnB4LCAzNHB4KX07XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgLS1mb250LXNpemUtbmF2OiAxOHB4O1xcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAxOHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXNpemUtaDE6ICN7Zmx1aWQoODBweCwgMTcwcHgpfTtcXG4gIC0tZm9udC1zaXplLWgyOiAje2ZsdWlkKDQwcHgsIDkwcHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6ICN7Zmx1aWQoMjBweCwgMjRweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuICAtLWZvbnQtc2l6ZS12ZXJzaW9uOiAje2ZsdWlkKDEycHgsIDIwcHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1oMTogNjBweDtcXG4gICAgLS1mb250LXNpemUtaDI6IDMwcHg7XFxuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XFxuICAgIC0tZm9udC1zaXplLXNraWxsLXRhZzogMTRweDtcXG4gICAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAxNHB4O1xcbiAgfVxcblxcbiAgLS1mb250LXdlaWdodC10aGluOiAzMDA7XFxuICAtLWZvbnQtd2VpZ2h0LXJlZ3VsYXI6IDQwMDtcXG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MTA7XFxuICAtLWZvbnQtd2VpZ2h0LXNlbWlib2xkOiA1NTA7XFxuXFxuICAtLWZsZXgtZ2FwLW5hdjogI3tmbHVpZCg3cHgsIDUwcHgpfTtcXG5cXG4gIC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aDogI3tmbHVpZCg2MDBweCwgODkwcHgpfTtcXG5cXG4gIC0tMTYwcHgtdG8tODBweDogI3tmbHVpZCg4MHB4LCAxNjBweCl9O1xcbiAgLS0xMzVweC10by03MHB4OiAje2ZsdWlkKDcwcHgsIDEzNXB4KX07XFxuICAtLTEyMHB4LXRvLTYwcHg6ICN7Zmx1aWQoNjBweCwgMTIwcHgpfTtcXG4gIC0tODBweC10by00MHB4OiAje2ZsdWlkKDQwcHgsIDgwcHgpfTtcXG4gIC0tNzBweC10by0zNXB4OiAje2ZsdWlkKDM1cHgsIDcwcHgpfTtcXG4gIC0tNjVweC10by00NXB4OiAje2ZsdWlkKDQ1cHgsIDY1cHgpfTtcXG4gIC0tMzBweC10by0xNXB4OiAje2ZsdWlkKDE1cHgsIDMwcHgpfTtcXG4gIC0tMjVweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDI1cHgpfTtcXG4gIC0tMjBweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDIwcHgpfTtcXG4gIC0tMTVweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDE1cHgpfTtcXG4gIC0tMTVweC10by04cHg6ICN7Zmx1aWQoOHB4LCAxNXB4KX07XFxuICAtLTExcHgtdG8tNXB4OiAje2ZsdWlkKDZweCwgMTFweCl9O1xcbiAgLS03cHgtdG8tM3B4OiAje2ZsdWlkKDNweCwgN3B4KX07XFxuICAtLTRweC10by0ycHg6ICN7Zmx1aWQoMnB4LCA0cHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNjIwcHgsIDgwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogM3B4O1xcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcXG4gIH1cXG59XFxuXFxuLyogR0VORVJBTCBTVFlMRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAyOHB4O1xcblxcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcbiAgfVxcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KSAtMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gIGxpbmUtaGVpZ2h0OiA5MCU7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IHZhcigtLTIwcHgtdG8tMTBweCkgMCAwO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxufVxcblxcbnAgKyBwIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB2aXNpYmlsaXR5IDAuMnM7XFxufVxcblxcbi5oaWRkZW4teHhzLWhhbGYge1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuLnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udmlzaWJsZS14eHMtaGFsZiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi8qIFRSQU5TSVRJT05TXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNpdGUgdGl0bGUgYmVmb3JlIHRyYW5zaXRpb25cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBza2lsbHMtYW5kLXRvb2xzIGRpdiBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBzaXRlIHRpdGxlXFxuLnRyYW5zaXRpb24tdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjA1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4wNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2Ygc2tpbGxzIGxpc3Qgb24gcHJvamVjdCBwYWdlc1xcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2YgZmlyc3QgbWVkaWEgZWxlbWVudCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xcbn1cXG5cXG4vKiBMT0dPICsgTkFWSUdBVElPTlxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXhzIHtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gMDtcXG4gIH1cXG5cXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG5cXG4gICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgICBtaW4td2lkdGg6IDMxcHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xcblxcbiAgICAgIG1hcmdpbjogMCAwIC01cHg7XFxuICAgICAgcGFkZGluZzogMCAwIDAgMzBweDtcXG5cXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XFxuXFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBtYXJnaW46IDAgMCAtMnB4O1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgICB9XFxuXFxuICAgICAgbGkgYSB7XFxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgICBwYWRkaW5nOiA0cHggN3B4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBHRU5FUkFMIFNUWUxFUyBGT1IgI0NPTlRFTlRcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IHZhcigtLTgwcHgtdG8tNDBweCkgYXV0byAwO1xcbiAgcGFkZGluZzogMDtcXG5cXG4gIC5ob21lcGFnZSxcXG4gIC5wcm9maWxlLXBhZ2Uge1xcbiAgICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XFxuICB9XFxufVxcblxcbi8qIFBST0pFQ1QgTE9BRElORyBBTklNQVRJT05cXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiNsb2FkaW5nLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG5cXG4gIGhlaWdodDogMTAwcHg7XFxuXFxuICBzcGFuIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICB9XFxufVxcblxcbi5jaXJjbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbiNiYWxsLTEge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYm91bmNlO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG4jYmFsbC0zIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuNHM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbiAgNDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpO1xcbiAgfVxcbiAgODAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgfVxcbn1cXG5cXG4vLyBUcnkgdG8gaGlkZSB0aGUgRE9NIGFzIGxvbmcgYXMgcG9zc2libGUgdmlhIGlubGluZSBzdHlsZXNcXG4vLyB0byBwcmV2ZW50IEZsYXNoZXMgb2YgdW5zdHlsZWQgdGV4dCAoRk9VVCkuIFRoZW4gdW5oaWRlIHRoZVxcbi8vIERPTSBhdCB0aGUgZW5kIG9mIHRoZSBDU1MgZG9jdW1lbnQ6XFxuaHRtbCB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCIsXCJAaW1wb3J0ICdnZW5lcmFsLXN0eWxlcyc7XFxuXFxuLyogUFJPRklMRSBQQUdFXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4ucHJvZmlsZS1wYWdlIHtcXG4gIC50ZXh0IHtcXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgPiAudGV4dDpmaXJzdC1vZi10eXBlIHtcXG4gICAgbWFyZ2luOiAwIDAgdmFyKC0tMTIwcHgtdG8tNjBweCk7XFxuXFxuICAgIHAge1xcbiAgICAgIC8qIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgaHlwaGVuczogYXV0bztcXG4gICAgICB9ICovXFxuICAgIH1cXG4gIH1cXG5cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDE1cHg7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGgpO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10aGluKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9maWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9maWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgJy4vc2Nzcy9wcm9maWxlLnNjc3MnO1xuaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgc2V0Q29udGVudCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2ZpbGUgPSBmdW5jdGlvbiAocHJvZmlsZURhdGEpIHtcbiAgLy8gQ2hlY2sgd2hldGhlciBwcm9maWxlIGRhdGEgaXMgYXZhaWxhYmxlXG4gIGlmICghcHJvZmlsZURhdGEpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwcm9maWxlIGRhdGEgYXZhaWxhYmxlLicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIENyZWF0ZSBwcm9maWxlIEhUTUxcbiAgY29uc3QgcHJvZmlsZUVsZW1lbnRzID0gcHJvZmlsZURhdGEuZWxlbWVudHNcbiAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICAgJHtlbGVtZW50LmNvbnRlbnR9XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgY2FzZSAndHdvLWNvbHVtbic6XG4gICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgdHlwZSBpcyBcInR3by1jb2x1bW5cIiB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZWxlbWVudCdzXG4gICAgICAgICAgLy8gXCJjb250ZW50XCIgcHJvcGVydHkgd2hpY2ggaG9sZHMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0eXBlIFwidGV4dFwiXG4gICAgICAgICAgY29uc3QgdGV4dEVsZW1lbnRzID0gZWxlbWVudC5jb250ZW50XG4gICAgICAgICAgICAubWFwKChlbCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbC50eXBlfVwiPlxuICAgICAgICAgICAgICAke2VsLmNvbnRlbnR9XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8cD5VbnN1cHBvcnRlZCBmb3JtYXQuPC9wPmA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignJyk7XG5cbiAgICAgICAgICByZXR1cm4gYDxoMj5Ta2lsbHM8L2gyPjxkaXYgY2xhc3MgPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICAgICR7dGV4dEVsZW1lbnRzfVxuICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuXG4gIHJldHVybiBgPGRpdiBjbGFzcz1cInByb2ZpbGUtcGFnZVwiPjxoMT4ke3Byb2ZpbGVEYXRhLnRpdGxlfTwvaDE+JHtwcm9maWxlRWxlbWVudHN9PC9kaXY+YDtcbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvZmlsZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGxvYWREYXRhKCk7XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZygnRGlzcGxheWluZyBwcm9maWxlLi4uJyk7XG4gICAgY29uc3QgcHJvZmlsZUhUTUwgPSBjcmVhdGVQcm9maWxlKGRhdGEucHJvZmlsZSk7XG4gICAgc2V0Q29udGVudCgnY29udGVudCcsIHByb2ZpbGVIVE1MKTtcbiAgfVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==