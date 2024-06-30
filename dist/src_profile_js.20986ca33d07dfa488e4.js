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

/* PROFILE PAGE
=============================================================================================== */
.profile-page .text p {
  max-width: var(--homepage-description-text-width);
}
.profile-page > .text:first-of-type {
  margin: 0 0 var(--120px-to-60px);
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
}`, "",{"version":3,"sources":["webpack://./src/scss/general-styles.scss","webpack://./src/scss/profile.scss"],"names":[],"mappings":"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","sourcesContent":["@use 'sass:math';\n\n/* FONT FACE\n=============================================================================================== */\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('../fonts/Inter-VariableFont_slnt,wght.woff2') format('truetype-variations');\n}\n\n/* BREAKPOINTS\n=============================================================================================== */\n@mixin breakpoint-lg {\n  @media (max-width: 1424px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-lg {\n  @media (min-width: 1200px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-md {\n  @media (max-width: 1199px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-md {\n  @media (min-width: 992px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-sm {\n  @media (max-width: 991px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-sm {\n  @media (min-width: 768px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs {\n  @media (max-width: 767px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs {\n  @media (min-width: 601px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xs-half {\n  @media (max-width: 600px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-MIN-xs-half {\n  @media (min-width: 421px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs {\n  @media (max-width: 420px) {\n    @content;\n  }\n}\n\n@mixin breakpoint-xxs-half {\n  @media (max-width: 376px) {\n    @content;\n  }\n}\n\n/* FONT SIZE CALCULATIONS WITH CLAMP()\n=============================================================================================== */\n$default-min-bp: 420px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n/* CUSTOM PROPERTIES\n=============================================================================================== */\n:root {\n  --primary-color: #0d0d0d;\n  --color-white: #ffffff;\n  --color-green: #22b06c;\n  --color-grey: #a5a5a5;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  @include breakpoint-xxs() {\n    --logo-width: 30px;\n  }\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n\n  @include breakpoint-xxs() {\n    --font-size-nav: 18px;\n    --font-size-text: 20px;\n  }\n\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n  --font-size-version: #{fluid(14px, 20px)};\n\n  @include breakpoint-xxs() {\n    --font-size-h1: 60px;\n    --font-size-h2: 30px;\n    --font-size-skills-and-tools: 15px;\n    --font-size-skill-tag: 14px;\n    --font-size-visit-live-site: 14px;\n  }\n\n  --font-weight-thin: 300;\n  --font-weight-regular: 400;\n  --font-weight-medium: 510;\n  --font-weight-semibold: 550;\n\n  --flex-gap-nav: #{fluid(7px, 50px)};\n\n  --homepage-description-text-width: #{fluid(600px, 890px)};\n\n  --160px-to-80px: #{fluid(80px, 160px)};\n  --120px-to-60px: #{fluid(60px, 120px)};\n  --80px-to-40px: #{fluid(40px, 80px)};\n  --70px-to-35px: #{fluid(35px, 70px)};\n  --65px-to-45px: #{fluid(45px, 65px)};\n  --20px-to-12px: #{fluid(12px, 20px)};\n  --15px-to-10px: #{fluid(10px, 15px)};\n\n  --profile-skill-list-text-width: #{fluid(500px, 600px)};\n\n  --single-project-text-width: #{fluid(460px, 800px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n\n  @include breakpoint-xxs() {\n    --single-project-skills-tag-padding1: 3px;\n    --single-project-skills-tag-padding2: 6px;\n  }\n}\n\n/* GENERAL STYLES\n=============================================================================================== */\nbody {\n  font-family: 'Inter', sans-serif;\n  letter-spacing: -0.3px;\n  margin: 0;\n  padding: 0 28px;\n\n  @include breakpoint-xs() {\n    padding: 0 20px;\n  }\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 var(--70px-to-35px) -10px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-regular);\n  line-height: 90%;\n\n  @include breakpoint-xxs() {\n    margin: 0 0 30px -5px;\n  }\n}\n\nh2 {\n  margin: 0 0 20px -2px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-medium);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-medium);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.hidden-xxs-half {\n  @include breakpoint-xxs-half() {\n    display: none;\n  }\n}\n.visible-xxs-half {\n  display: none;\n  @include breakpoint-xxs-half() {\n    display: block;\n  }\n}\n\n/* TRANSITIONS\n=============================================================================================== */\n// Initial state of site title before transition\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n// Initial state of skills-and-tools div before transition\n.transition-in-opacity {\n  opacity: 0;\n}\n\n// Transition of site title\n.transition-visible {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s;\n}\n\n// Transition of skills list on project pages\n.transition-visible-delayed {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;\n}\n\n// Transition of first media element on project pages\n.transition-visible-delayed-more {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.5s ease-out 0.45s, transform 0.5s ease-out 0.45s;\n}\n\n/* LOGO + NAVIGATION\n=============================================================================================== */\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px auto 0;\n\n  img {\n    max-width: var(--logo-width);\n    min-width: 80px;\n\n    @include breakpoint-xxs-half() {\n      min-width: 31px;\n    }\n  }\n\n  nav {\n    font-weight: var(--font-weight-regular);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0 0 -5px;\n      padding: 0 0 0 30px;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n\n      @include breakpoint-xxs() {\n        margin: 0 0 -2px;\n        padding: 0 0 0 10px;\n      }\n\n      li a {\n        padding: 8px 15px;\n        border-radius: 8px;\n\n        @include breakpoint-xxs() {\n          padding: 4px 7px;\n        }\n\n        &:active {\n          background-color: rgba(0, 0, 0, 0.05);\n        }\n      }\n    }\n  }\n}\n\n/* GENERAL STYLES FOR #CONTENT\n=============================================================================================== */\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: var(--80px-to-40px) auto 0;\n  padding: 0;\n\n  .homepage,\n  .profile-page {\n    padding: 0 0 var(--160px-to-80px);\n  }\n}\n","@import 'general-styles';\n\n/* PROFILE PAGE\n=============================================================================================== */\n.profile-page {\n  .text {\n    p {\n      max-width: var(--homepage-description-text-width);\n    }\n  }\n\n  > .text:first-of-type {\n    margin: 0 0 var(--120px-to-60px);\n\n    p {\n      @include breakpoint-xxs() {\n        hyphens: auto;\n      }\n    }\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 15px;\n\n    p {\n      max-width: var(--profile-skill-list-text-width);\n      font-weight: var(--font-weight-thin);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2ZpbGVfanMuMjA5ODZjYTMzZDA3ZGZhNDg4ZTQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLGtLQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG1JQUFtSSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFB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QUFnQjtBQUNoQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBLGdEQUFnRCxhQUFhO0FBQzdELGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLDBDQUEwQyxrQkFBa0IsT0FBTyxnQkFBZ0I7QUFDbkY7O0FBRU87QUFDUCxxQkFBcUIsK0NBQVE7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVU7QUFDZDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3Njc3MvcHJvZmlsZS5zY3NzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zY3NzL3Byb2ZpbGUuc2Nzcz85ZTYzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBGT05UIEZBQ0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwIDkwMDtcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZS12YXJpYXRpb25zXCIpO1xufVxuLyogQlJFQUtQT0lOVFNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKiBGT05UIFNJWkUgQ0FMQ1VMQVRJT05TIFdJVEggQ0xBTVAoKVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIENVU1RPTSBQUk9QRVJUSUVTXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuOnJvb3Qge1xuICAtLXByaW1hcnktY29sb3I6ICMwZDBkMGQ7XG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XG4gIC0tY29sb3ItZ3JlZW46ICMyMmIwNmM7XG4gIC0tY29sb3ItZ3JleTogI2E1YTVhNTtcbiAgLS1sb2dvLXdpZHRoOiBjbGFtcCg2LjI1cmVtLCAzLjMxdncgKyA1LjM4cmVtLCA5LjMxcmVtKTtcbiAgLS1mb250LXNpemUtbmF2OiBjbGFtcCgxLjI1cmVtLCAwLjU0dncgKyAxLjExcmVtLCAxLjc1cmVtKTtcbiAgLS1mb250LXNpemUtdGV4dDogY2xhbXAoMS4zOHJlbSwgMC44MXZ3ICsgMS4xNnJlbSwgMi4xM3JlbSk7XG4gIC0tZm9udC1zaXplLWgxOiBjbGFtcCg1cmVtLCA2LjA4dncgKyAzLjRyZW0sIDEwLjYzcmVtKTtcbiAgLS1mb250LXNpemUtaDI6IGNsYW1wKDIuNXJlbSwgMy4zOHZ3ICsgMS42MXJlbSwgNS42M3JlbSk7XG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IGNsYW1wKDEuMjVyZW0sIDAuMjd2dyArIDEuMThyZW0sIDEuNXJlbSk7XG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogY2xhbXAoMXJlbSwgMC4xNHZ3ICsgMC45NnJlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogY2xhbXAoMXJlbSwgMC4xNHZ3ICsgMC45NnJlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZlcnNpb246IGNsYW1wKDAuODhyZW0sIDAuNDF2dyArIDAuNzdyZW0sIDEuMjVyZW0pO1xuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcbiAgLS1mb250LXdlaWdodC1yZWd1bGFyOiA0MDA7XG4gIC0tZm9udC13ZWlnaHQtbWVkaXVtOiA1MTA7XG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcbiAgLS1mbGV4LWdhcC1uYXY6IGNsYW1wKDAuNDRyZW0sIDIuOTF2dyArIC0wLjMzcmVtLCAzLjEzcmVtKTtcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiBjbGFtcCgzNy41cmVtLCAxOS41OXZ3ICsgMzIuMzZyZW0sIDU1LjYzcmVtKTtcbiAgLS0xNjBweC10by04MHB4OiBjbGFtcCg1cmVtLCA1LjQxdncgKyAzLjU4cmVtLCAxMHJlbSk7XG4gIC0tMTIwcHgtdG8tNjBweDogY2xhbXAoMy43NXJlbSwgNC4wNXZ3ICsgMi42OXJlbSwgNy41cmVtKTtcbiAgLS04MHB4LXRvLTQwcHg6IGNsYW1wKDIuNXJlbSwgMi43dncgKyAxLjc5cmVtLCA1cmVtKTtcbiAgLS03MHB4LXRvLTM1cHg6IGNsYW1wKDIuMTlyZW0sIDIuMzZ2dyArIDEuNTdyZW0sIDQuMzhyZW0pO1xuICAtLTY1cHgtdG8tNDVweDogY2xhbXAoMi44MXJlbSwgMS4zNXZ3ICsgMi40NnJlbSwgNC4wNnJlbSk7XG4gIC0tMjBweC10by0xMnB4OiBjbGFtcCgwLjc1cmVtLCAwLjU0dncgKyAwLjYxcmVtLCAxLjI1cmVtKTtcbiAgLS0xNXB4LXRvLTEwcHg6IGNsYW1wKDAuNjNyZW0sIDAuMzR2dyArIDAuNTRyZW0sIDAuOTRyZW0pO1xuICAtLXByb2ZpbGUtc2tpbGwtbGlzdC10ZXh0LXdpZHRoOiBjbGFtcCgzMS4yNXJlbSwgNi43NnZ3ICsgMjkuNDhyZW0sIDM3LjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDI4Ljc1cmVtLCAyMi45N3Z3ICsgMjIuNzJyZW0sIDUwcmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiBjbGFtcCgwLjMxcmVtLCAwLjY4dncgKyAwLjE0cmVtLCAwLjk0cmVtKTtcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiBjbGFtcCgwLjYzcmVtLCAxLjAxdncgKyAwLjM2cmVtLCAxLjU2cmVtKTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6cm9vdCB7XG4gICAgLS1sb2dvLXdpZHRoOiAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLW5hdjogMThweDtcbiAgICAtLWZvbnQtc2l6ZS10ZXh0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOnJvb3Qge1xuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xuICAgIC0tZm9udC1zaXplLWgyOiAzMHB4O1xuICAgIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6IDE1cHg7XG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xuICAgIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogMTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpyb290IHtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IDNweDtcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcbiAgfVxufVxuXG4vKiBHRU5FUkFMIFNUWUxFU1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMjhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuXG5oMSxcbmgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5oMSB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIG1hcmdpbjogMCAwIHZhcigtLTcwcHgtdG8tMzVweCkgLTEwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICBsaW5lLWhlaWdodDogOTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGgxIHtcbiAgICBtYXJnaW46IDAgMCAzMHB4IC01cHg7XG4gIH1cbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgyKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbn1cblxucCArIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAuaGlkZGVuLXh4cy1oYWxmIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi52aXNpYmxlLXh4cy1oYWxmIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzZweCkge1xuICAudmlzaWJsZS14eHMtaGFsZiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLyogVFJBTlNJVElPTlNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4udHJhbnNpdGlvbi1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG59XG5cbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMDVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjA1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2Utb3V0IDAuMjVzLCB0cmFuc2Zvcm0gMC41cyBlYXNlLW91dCAwLjI1cztcbn1cblxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xufVxuXG4vKiBMT0dPICsgTkFWSUdBVElPTlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbn1cbmhlYWRlciBpbWcge1xuICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xuICBtaW4td2lkdGg6IDgwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcbiAgaGVhZGVyIGltZyB7XG4gICAgbWluLXdpZHRoOiAzMXB4O1xuICB9XG59XG5oZWFkZXIgbmF2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcbiAgbWFyZ2luOiAwIDAgLTVweDtcbiAgcGFkZGluZzogMCAwIDAgMzBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbmF2KTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIgbmF2IHVsIHtcbiAgICBtYXJnaW46IDAgMCAtMnB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XG4gIH1cbn1cbmhlYWRlciBuYXYgdWwgbGkgYSB7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaGVhZGVyIG5hdiB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiA0cHggN3B4O1xuICB9XG59XG5oZWFkZXIgbmF2IHVsIGxpIGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLyogR0VORVJBTCBTVFlMRVMgRk9SICNDT05URU5UXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiB2YXIoLS04MHB4LXRvLTQwcHgpIGF1dG8gMDtcbiAgcGFkZGluZzogMDtcbn1cbiNjb250ZW50IC5ob21lcGFnZSxcbiNjb250ZW50IC5wcm9maWxlLXBhZ2Uge1xuICBwYWRkaW5nOiAwIDAgdmFyKC0tMTYwcHgtdG8tODBweCk7XG59XG5cbi8qIFBST0ZJTEUgUEFHRVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5wcm9maWxlLXBhZ2UgLnRleHQgcCB7XG4gIG1heC13aWR0aDogdmFyKC0taG9tZXBhZ2UtZGVzY3JpcHRpb24tdGV4dC13aWR0aCk7XG59XG4ucHJvZmlsZS1wYWdlID4gLnRleHQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMCAwIHZhcigtLTEyMHB4LXRvLTYwcHgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5wcm9maWxlLXBhZ2UgPiAudGV4dDpmaXJzdC1vZi10eXBlIHAge1xuICAgIGh5cGhlbnM6IGF1dG87XG4gIH1cbn1cbi5wcm9maWxlLXBhZ2UgLnR3by1jb2x1bW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTVweDtcbn1cbi5wcm9maWxlLXBhZ2UgLnR3by1jb2x1bW4gcCB7XG4gIG1heC13aWR0aDogdmFyKC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGgpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGhpbik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9nZW5lcmFsLXN0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9wcm9maWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7aUdBQUE7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEVBQUE7QUNERjtBRElBO2lHQUFBO0FBMEVBO2lHQUFBO0FBbUNBO2lHQUFBO0FBRUE7RUFDRSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUVBLHVEQUFBO0VBTUEsMERBQUE7RUFDQSwyREFBQTtFQU9BLHNEQUFBO0VBQ0Esd0RBQUE7RUFDQSxzRUFBQTtFQUNBLDZEQUFBO0VBQ0EsbUVBQUE7RUFDQSw4REFBQTtFQVVBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBRUEsMERBQUE7RUFFQSwrRUFBQTtFQUVBLHFEQUFBO0VBQ0EseURBQUE7RUFDQSxvREFBQTtFQUNBLHlEQUFBO0VBQ0EseURBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBRUEsNEVBQUE7RUFFQSx1RUFBQTtFQUNBLCtFQUFBO0VBQ0EsK0VBQUE7QUNySUY7QUQ2QkU7RUFnREY7SUFTSSxrQkFBQTtFQ2xGRjtBQUNGO0FEd0JFO0VBZ0RGO0lBZ0JJLHFCQUFBO0lBQ0Esc0JBQUE7RUNwRkY7QUFDRjtBRGtCRTtFQWdERjtJQTRCSSxvQkFBQTtJQUNBLG9CQUFBO0lBQ0Esa0NBQUE7SUFDQSwyQkFBQTtJQUNBLGlDQUFBO0VDMUZGO0FBQ0Y7QURTRTtFQWdERjtJQTJESSx5Q0FBQTtJQUNBLHlDQUFBO0VDaEhGO0FBQ0Y7O0FEbUhBO2lHQUFBO0FBRUE7RUFDRSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNoSEY7QUQ5QkU7RUEwSUY7SUFPSSxlQUFBO0VDL0dGO0FBQ0Y7O0FEa0hBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtBQy9HRjs7QURrSEE7O0VBRUUsU0FBQTtBQy9HRjs7QURrSEE7RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0VBRUEsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0FDaEhGO0FEN0JFO0VBdUlGO0lBU0kscUJBQUE7RUMvR0Y7QUFDRjs7QURrSEE7RUFDRSxxQkFBQTtFQUVBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtBQ2hIRjs7QURtSEE7O0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFFQSxpQkFBQTtFQUNBLGdDQUFBO0FDakhGOztBRG9IQTtFQUNFLGdCQUFBO0VBQ0Esc0NBQUE7QUNqSEY7O0FEb0hBO0VBQ0UsZ0JBQUE7QUNqSEY7O0FEb0hBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNqSEY7O0FEb0hBOztFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2pIRjs7QURoRUU7RUFvTEY7SUFFSSxhQUFBO0VDakhGO0FBQ0Y7O0FEbUhBO0VBQ0UsYUFBQTtBQ2hIRjtBRDFFRTtFQXlMRjtJQUdJLGNBQUE7RUM5R0Y7QUFDRjs7QURpSEE7aUdBQUE7QUFHQTtFQUNFLFVBQUE7RUFDQSxrQ0FBQTtBQy9HRjs7QURtSEE7RUFDRSxVQUFBO0FDaEhGOztBRG9IQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNFQUFBO0FDakhGOztBRHFIQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNFQUFBO0FDbEhGOztBRHNIQTtFQUNFLFVBQUE7RUFDQSwrQkFBQTtFQUNBLHNFQUFBO0FDbkhGOztBRHNIQTtpR0FBQTtBQUVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0FDcEhGO0FEc0hFO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDcEhKO0FEMUhFO0VBNE9BO0lBS0ksZUFBQTtFQ25ISjtBQUNGO0FEc0hFO0VBQ0UsdUNBQUE7QUNwSEo7QURzSEk7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSwrQkFBQTtBQ3RITjtBRGhKRTtFQThQRTtJQVdJLGdCQUFBO0lBQ0EsbUJBQUE7RUNySE47QUFDRjtBRHVITTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNySFI7QUQxSkU7RUE2UUk7SUFLSSxnQkFBQTtFQ3BIUjtBQUNGO0FEc0hRO0VBQ0UscUNBQUE7QUNwSFY7O0FEMkhBO2lHQUFBO0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtBQ3pIRjtBRDJIRTs7RUFFRSxpQ0FBQTtBQ3pISjs7QUF6UEE7aUdBQUE7QUFJSTtFQUNFLGlEQUFBO0FBMFBOO0FBdFBFO0VBQ0UsZ0NBQUE7QUF3UEo7QUR6TEU7RUM3REU7SUFFSSxhQUFBO0VBd1BOO0FBQ0Y7QUFwUEU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FBc1BKO0FBcFBJO0VBQ0UsK0NBQUE7RUFDQSxvQ0FBQTtBQXNQTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbi8qIEZPTlQgRkFDRVxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDAgOTAwOyAvLyBTdXBwb3J0cyBhIHJhbmdlIGZyb20gVGhpbiAoMTAwKSB0byBCbGFjayAoOTAwKVxcbiAgZm9udC1kaXNwbGF5OiBzd2FwOyAvLyBPcHRpb25hbCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXFxuICBzcmM6IHVybCgnLi4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC53b2ZmMicpIGZvcm1hdCgndHJ1ZXR5cGUtdmFyaWF0aW9ucycpO1xcbn1cXG5cXG4vKiBCUkVBS1BPSU5UU1xcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuQG1peGluIGJyZWFrcG9pbnQtbGcge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE0MjRweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLWxnIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LW1kIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LU1JTi1tZCB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBicmVha3BvaW50LXNtIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXNtIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQteHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC1NSU4teHMge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14cy1oYWxmIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIGJyZWFrcG9pbnQtTUlOLXhzLWhhbGYge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDQyMXB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYnJlYWtwb2ludC14eHMtaGFsZiB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogMzc2cHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbi8qIEZPTlQgU0laRSBDQUxDVUxBVElPTlMgV0lUSCBDTEFNUCgpXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kZGVmYXVsdC1taW4tYnA6IDQyMHB4O1xcbiRkZWZhdWx0LW1heC1icDogMTkwMHB4O1xcblxcbkBmdW5jdGlvbiByb3VuZCgkbnVtYmVyLCAkZGVjaW1hbHM6IDApIHtcXG4gICRuOiAxO1xcbiAgQGlmICRkZWNpbWFscyA+IDAge1xcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoICRkZWNpbWFscyB7XFxuICAgICAgJG46ICRuICogMTA7XFxuICAgIH1cXG4gIH1cXG4gIEByZXR1cm4gbWF0aC5kaXYobWF0aC5yb3VuZCgkbnVtYmVyICogJG4pLCAkbik7XFxufVxcblxcbkBmdW5jdGlvbiBweC10by1yZW0oJHB4KSB7XFxuICAkcmVtczogbWF0aC5kaXYoJHB4LCAxNnB4KSAqIDFyZW07XFxuICBAcmV0dXJuICRyZW1zO1xcbn1cXG5cXG5AZnVuY3Rpb24gZmx1aWQoXFxuICAkbWluLXNpemUsXFxuICAkbWF4LXNpemUsXFxuICAkbWluLWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1pbi1icCxcXG4gICRtYXgtYnJlYWtwb2ludDogJGRlZmF1bHQtbWF4LWJwLFxcbiAgJHVuaXQ6IHZ3XFxuKSB7XFxuICAkc2xvcGU6IG1hdGguZGl2KCRtYXgtc2l6ZSAtICRtaW4tc2l6ZSwgJG1heC1icmVha3BvaW50IC0gJG1pbi1icmVha3BvaW50KTtcXG4gICRzbG9wZS10by11bml0OiByb3VuZCgkc2xvcGUgKiAxMDAsIDIpO1xcbiAgJGludGVyY2VwdC1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUgLSAkc2xvcGUgKiAkbWluLWJyZWFrcG9pbnQpLCAyKTtcXG4gICRtaW4tc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWluLXNpemUpLCAyKTtcXG4gICRtYXgtc2l6ZS1yZW06IHJvdW5kKHB4LXRvLXJlbSgkbWF4LXNpemUpLCAyKTtcXG4gIEByZXR1cm4gY2xhbXAoI3skbWluLXNpemUtcmVtfSwgI3skc2xvcGUtdG8tdW5pdH0jeyR1bml0fSArICN7JGludGVyY2VwdC1yZW19LCAjeyRtYXgtc2l6ZS1yZW19KTtcXG59XFxuXFxuLyogQ1VTVE9NIFBST1BFUlRJRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcXG4gIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuICAtLWNvbG9yLWdyZWVuOiAjMjJiMDZjO1xcbiAgLS1jb2xvci1ncmV5OiAjYTVhNWE1O1xcblxcbiAgLS1sb2dvLXdpZHRoOiAje2ZsdWlkKDEwMHB4LCAxNDlweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tbG9nby13aWR0aDogMzBweDtcXG4gIH1cXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG5cXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAtLWZvbnQtc2l6ZS1uYXY6IDE4cHg7XFxuICAgIC0tZm9udC1zaXplLXRleHQ6IDIwcHg7XFxuICB9XFxuXFxuICAtLWZvbnQtc2l6ZS1oMTogI3tmbHVpZCg4MHB4LCAxNzBweCl9O1xcbiAgLS1mb250LXNpemUtaDI6ICN7Zmx1aWQoNDBweCwgOTBweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogI3tmbHVpZCgyMHB4LCAyNHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcbiAgLS1mb250LXNpemUtdmlzaXQtbGl2ZS1zaXRlOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZlcnNpb246ICN7Zmx1aWQoMTRweCwgMjBweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tZm9udC1zaXplLWgxOiA2MHB4O1xcbiAgICAtLWZvbnQtc2l6ZS1oMjogMzBweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGxzLWFuZC10b29sczogMTVweDtcXG4gICAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAxNHB4O1xcbiAgICAtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGU6IDE0cHg7XFxuICB9XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXRoaW46IDMwMDtcXG4gIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xcbiAgLS1mb250LXdlaWdodC1tZWRpdW06IDUxMDtcXG4gIC0tZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDU1MDtcXG5cXG4gIC0tZmxleC1nYXAtbmF2OiAje2ZsdWlkKDdweCwgNTBweCl9O1xcblxcbiAgLS1ob21lcGFnZS1kZXNjcmlwdGlvbi10ZXh0LXdpZHRoOiAje2ZsdWlkKDYwMHB4LCA4OTBweCl9O1xcblxcbiAgLS0xNjBweC10by04MHB4OiAje2ZsdWlkKDgwcHgsIDE2MHB4KX07XFxuICAtLTEyMHB4LXRvLTYwcHg6ICN7Zmx1aWQoNjBweCwgMTIwcHgpfTtcXG4gIC0tODBweC10by00MHB4OiAje2ZsdWlkKDQwcHgsIDgwcHgpfTtcXG4gIC0tNzBweC10by0zNXB4OiAje2ZsdWlkKDM1cHgsIDcwcHgpfTtcXG4gIC0tNjVweC10by00NXB4OiAje2ZsdWlkKDQ1cHgsIDY1cHgpfTtcXG4gIC0tMjBweC10by0xMnB4OiAje2ZsdWlkKDEycHgsIDIwcHgpfTtcXG4gIC0tMTVweC10by0xMHB4OiAje2ZsdWlkKDEwcHgsIDE1cHgpfTtcXG5cXG4gIC0tcHJvZmlsZS1za2lsbC1saXN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNTAwcHgsIDYwMHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNDYwcHgsIDgwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoNXB4LCAxNXB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6ICN7Zmx1aWQoMTBweCwgMjVweCl9O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogM3B4O1xcbiAgICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IDZweDtcXG4gIH1cXG59XFxuXFxuLyogR0VORVJBTCBTVFlMRVNcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMCAyOHB4O1xcblxcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14cygpIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG59XFxuXFxuaDEsXFxuaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbiAgbWFyZ2luOiAwIDAgdmFyKC0tNzBweC10by0zNXB4KSAtMTBweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcXG4gIGxpbmUtaGVpZ2h0OiA5MCU7XFxuXFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgbWFyZ2luOiAwIDAgMzBweCAtNXB4O1xcbiAgfVxcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4IC0ycHg7XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDIwcHggMCAwO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XFxufVxcblxcbnAgKyBwIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxufVxcblxcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmhpZGRlbi14eHMtaGFsZiB7XFxuICBAaW5jbHVkZSBicmVha3BvaW50LXh4cy1oYWxmKCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4udmlzaWJsZS14eHMtaGFsZiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMtaGFsZigpIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxufVxcblxcbi8qIFRSQU5TSVRJT05TXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vLyBJbml0aWFsIHN0YXRlIG9mIHNpdGUgdGl0bGUgYmVmb3JlIHRyYW5zaXRpb25cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLy8gSW5pdGlhbCBzdGF0ZSBvZiBza2lsbHMtYW5kLXRvb2xzIGRpdiBiZWZvcmUgdHJhbnNpdGlvblxcbi50cmFuc2l0aW9uLWluLW9wYWNpdHkge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLy8gVHJhbnNpdGlvbiBvZiBzaXRlIHRpdGxlXFxuLnRyYW5zaXRpb24tdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjA1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4wNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2Ygc2tpbGxzIGxpc3Qgb24gcHJvamVjdCBwYWdlc1xcbi50cmFuc2l0aW9uLXZpc2libGUtZGVsYXllZCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLW91dCAwLjI1cywgdHJhbnNmb3JtIDAuNXMgZWFzZS1vdXQgMC4yNXM7XFxufVxcblxcbi8vIFRyYW5zaXRpb24gb2YgZmlyc3QgbWVkaWEgZWxlbWVudCBvbiBwcm9qZWN0IHBhZ2VzXFxuLnRyYW5zaXRpb24tdmlzaWJsZS1kZWxheWVkLW1vcmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1vdXQgMC40NXMsIHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0IDAuNDVzO1xcbn1cXG5cXG4vKiBMT0dPICsgTkFWSUdBVElPTlxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDA7XFxuXFxuICBpbWcge1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLWxvZ28td2lkdGgpO1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuXFxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzLWhhbGYoKSB7XFxuICAgICAgbWluLXdpZHRoOiAzMXB4O1xcbiAgICB9XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XFxuXFxuICAgIHVsIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcXG5cXG4gICAgICBtYXJnaW46IDAgMCAtNXB4O1xcbiAgICAgIHBhZGRpbmc6IDAgMCAwIDMwcHg7XFxuXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xcblxcbiAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQteHhzKCkge1xcbiAgICAgICAgbWFyZ2luOiAwIDAgLTJweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIGxpIGEge1xcbiAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICAgICAgICBAaW5jbHVkZSBicmVha3BvaW50LXh4cygpIHtcXG4gICAgICAgICAgcGFkZGluZzogNHB4IDdweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogR0VORVJBTCBTVFlMRVMgRk9SICNDT05URU5UXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIG1heC13aWR0aDogMTcwMHB4O1xcbiAgbWFyZ2luOiB2YXIoLS04MHB4LXRvLTQwcHgpIGF1dG8gMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICAuaG9tZXBhZ2UsXFxuICAucHJvZmlsZS1wYWdlIHtcXG4gICAgcGFkZGluZzogMCAwIHZhcigtLTE2MHB4LXRvLTgwcHgpO1xcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJ2dlbmVyYWwtc3R5bGVzJztcXG5cXG4vKiBQUk9GSUxFIFBBR0VcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi5wcm9maWxlLXBhZ2Uge1xcbiAgLnRleHQge1xcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLWhvbWVwYWdlLWRlc2NyaXB0aW9uLXRleHQtd2lkdGgpO1xcbiAgICB9XFxuICB9XFxuXFxuICA+IC50ZXh0OmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW46IDAgMCB2YXIoLS0xMjBweC10by02MHB4KTtcXG5cXG4gICAgcCB7XFxuICAgICAgQGluY2x1ZGUgYnJlYWtwb2ludC14eHMoKSB7XFxuICAgICAgICBoeXBoZW5zOiBhdXRvO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnR3by1jb2x1bW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMTVweDtcXG5cXG4gICAgcCB7XFxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1wcm9maWxlLXNraWxsLWxpc3QtdGV4dC13aWR0aCk7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRoaW4pO1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2ZpbGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2ZpbGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCAnLi9zY3NzL3Byb2ZpbGUuc2Nzcyc7XG5pbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvZmlsZSA9IGZ1bmN0aW9uIChwcm9maWxlRGF0YSkge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2ZpbGUgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9maWxlRGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2ZpbGUgZGF0YSBhdmFpbGFibGUuJyk7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHByb2ZpbGUgSFRNTFxuICBjb25zdCBwcm9maWxlRWxlbWVudHMgPSBwcm9maWxlRGF0YS5lbGVtZW50c1xuICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgICAke2VsZW1lbnQuY29udGVudH1cbiAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICBjYXNlICd0d28tY29sdW1uJzpcbiAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCB0eXBlIGlzIFwidHdvLWNvbHVtblwiIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBlbGVtZW50J3NcbiAgICAgICAgICAvLyBcImNvbnRlbnRcIiBwcm9wZXJ0eSB3aGljaCBob2xkcyBhbiBhcnJheSBvZiBvYmplY3RzIHR5cGUgXCJ0ZXh0XCJcbiAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudHMgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlbC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsLnR5cGV9XCI+XG4gICAgICAgICAgICAgICR7ZWwuY29udGVudH1cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxwPlVuc3VwcG9ydGVkIGZvcm1hdC48L3A+YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgIHJldHVybiBgPGgyPlNraWxsczwvaDI+PGRpdiBjbGFzcyA9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICAgJHt0ZXh0RWxlbWVudHN9XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicHJvZmlsZS1wYWdlXCI+PGgxPiR7cHJvZmlsZURhdGEudGl0bGV9PC9oMT4ke3Byb2ZpbGVFbGVtZW50c308L2Rpdj5gO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQcm9maWxlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdEaXNwbGF5aW5nIHByb2ZpbGUuLi4nKTtcbiAgICBjb25zdCBwcm9maWxlSFRNTCA9IGNyZWF0ZVByb2ZpbGUoZGF0YS5wcm9maWxlKTtcbiAgICBzZXRDb250ZW50KCdjb250ZW50JywgcHJvZmlsZUhUTUwpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9