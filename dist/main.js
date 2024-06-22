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
  --logo-width: clamp(6.25rem, 3.1vw + 5.63rem, 9.31rem);
  --font-size-nav: clamp(1.25rem, 0.51vw + 1.15rem, 1.75rem);
  --font-size-text: clamp(1.38rem, 0.76vw + 1.22rem, 2.13rem);
  --font-size-h1: clamp(5rem, 5.7vw + 3.86rem, 10.63rem);
  --font-size-h2: clamp(2.5rem, 3.16vw + 1.87rem, 5.63rem);
  --font-size-skills-and-tools: clamp(1.25rem, 0.25vw + 1.2rem, 1.5rem);
  --font-size-skill-tag: clamp(1rem, 0.13vw + 0.97rem, 1.13rem);
  --font-size-visit-live-site: clamp(1rem, 0.13vw + 0.97rem, 1.13rem);
  --font-weight-text: 440;
  --font-weight-project-description: 350;
  --font-weight-h1: 370;
  --font-weight-h2: 500;
  --font-weight-h3: 500;
  --flex-gap-nav: clamp(1.88rem, 2.53vw + 1.37rem, 4.38rem);
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
  font-weight: var(--font-weight-h1);
  line-height: 90%;
}

h2 {
  margin: 0 0 20px;
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-h2);
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
  font-weight: var(--font-weight-h3);
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

.transition-visible {
  opacity: 1; /* Fully visible */
  transform: translate3d(0, 0, 0);
  transition: opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s;
}

header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1700px;
  margin: 20px 0 0;
}
header img {
  max-width: var(--logo-width);
}
header nav {
  font-weight: var(--font-weight-text);
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
  margin: 70px 0 0;
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
  font-weight: var(--font-weight-project-description);
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
  font-weight: var(--font-weight-text);
}
.single-project .skills-and-tools ul .skill-tag {
  /* flex-shrink: 0; */
  padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);
  font-size: var(--font-size-skill-tag);
  font-weight: 400;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
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
  font-weight: var(--font-weight-project-description);
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,0EAAA;AAFF;AAwCA;EACE,wBAAA;EAEA,sDAAA;EAEA,0DAAA;EACA,2DAAA;EACA,sDAAA;EACA,wDAAA;EACA,qEAAA;EACA,6DAAA;EACA,mEAAA;EAEA,uBAAA;EACA,sCAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;EAEA,yDAAA;EAEA,wEAAA;EACA,+EAAA;EACA,+EAAA;AA3CF;;AA+CA;EACE,gCAAA;EACA,eAAA;AA5CF;;AA+CA;EACE,qBAAA;EACA,2BAAA;AA5CF;;AA+CA;;EAEE,SAAA;AA5CF;;AA+CA;EACE,gBAAA;EACA,qBAAA;EAEA,8BAAA;EACA,kCAAA;EACA,gBAAA;AA7CF;;AAgDA;EACE,gBAAA;EAEA,8BAAA;EACA,kCAAA;EACA,iBAAA;AA9CF;;AAiDA;;EAEE,SAAA;EACA,UAAA;EAEA,iBAAA;EACA,gCAAA;AA/CF;;AAkDA;EACE,gBAAA;EACA,kCAAA;AA/CF;;AAkDA;EACE,gBAAA;AA/CF;;AAkDA;EACE,SAAA;EACA,UAAA;AA/CF;;AAkDA;;EAEE,cAAA;EACA,WAAA;EACA,eAAA;AA/CF;;AAkDA;EACE,UAAA;EACA,kCAAA;AA/CF;;AAkDA;EACE,UAAA,EAAA,kBAAA;EACA,+BAAA;EACA,oEAAA;AA/CF;;AAmDA;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;EAEA,iBAAA;EACA,gBAAA;AAjDF;AAmDE;EACE,4BAAA;AAjDJ;AAoDE;EACE,oCAAA;AAlDJ;AAoDI;EACE,aAAA;EACA,wBAAA;EAEA,SAAA;EAEA,gBAAA;EACA,+BAAA;AApDN;;AA0DA;EACE,aAAA;EACA,sBAAA;EAEA,iBAAA;EACA,gBAAA;EACA,kBAAA;AAxDF;;AA6DE;EACE,UAAA;EACA,mCAAA;AA1DJ;AA6DE;EACE,UAAA;EACA,6CAAA;AA3DJ;AA8DE;EACE,UAAA,EAAA,kBAAA;EACA,+BAAA;EACA,gEAAA;AA5DJ;AA+DE;EACE,UAAA,EAAA,kBAAA;EACA,wCAAA;EACA,gEAAA;AA7DJ;;AAkEA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EAEA,SAAA;AAhEF;AAmEI;EACE,gBAAA;EACA,mDAAA;AAjEN;;AAwEE;EACE,aAAA;EACA,qBAAA;EACA,SAAA;AArEJ;AAuEI;EACE,aAAA;EACA,QAAA;EACA,2CAAA;AArEN;AAwEI;EACE,eAAA;AAtEN;AAyEE;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,SAAA;EAEA,gBAAA;EACA,eAAA;EACA,0CAAA;AAxEJ;AA0EI;EACE,aAAA;EACA,QAAA;EACA,eAAA;EACA,mBAAA;EAEA,UAAA;EACA,gBAAA;AAzEN;AA2EM;EACE,iBAAA;EACA,4CAAA;EACA,oCAAA;AAzER;AA4EM;EACE,oBAAA;EACA,4FAAA;EAEA,qCAAA;EACA,gBAAA;EAEA,sCAAA;EACA,mBAAA;AA5ER;AAiFE;EACE,gBAAA;AA/EJ;AAiFI;EACE,2CAAA;AA/EN;AAmFE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAjFJ;AAoFE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AAlFJ;;AAyFI;EACE,2CAAA;AAtFN;AAyFI;EACE,iBAAA;AAvFN;AA0FE;EACE,aAAA;EACA,8BAAA;AAxFJ;AA0FI;EACE,mDAAA;AAxFN","sourcesContent":["@use 'sass:math';\n\n// Font face\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('./fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n// Font size calculation wit clamp()\n$default-min-bp: 320px;\n$default-max-bp: 1900px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n// Custom properties\n:root {\n  --primary-color: #0d0d0d;\n\n  --logo-width: #{fluid(100px, 149px)};\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skills-and-tools: #{fluid(20px, 24px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n  --font-size-visit-live-site: #{fluid(16px, 18px)};\n\n  --font-weight-text: 440;\n  --font-weight-project-description: 350;\n  --font-weight-h1: 370;\n  --font-weight-h2: 500;\n  --font-weight-h3: 500;\n\n  --flex-gap-nav: #{fluid(30px, 70px)};\n\n  --single-project-text-width: #{fluid(600px, 900px)};\n  --single-project-skills-tag-padding1: #{fluid(5px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(10px, 25px)};\n}\n\n// General styles for the website\nbody {\n  font-family: 'Inter', sans-serif;\n  padding: 0 20px;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0 0 80px -9px;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-h1);\n  line-height: 90%;\n}\n\nh2 {\n  margin: 0 0 20px;\n\n  font-size: var(--font-size-h2);\n  font-weight: var(--font-weight-h2);\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n  font-weight: var(--font-weight-h3);\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.transition-in {\n  opacity: 0;\n  transform: translate3d(0, 10px, 0);\n}\n\n.transition-visible {\n  opacity: 1; /* Fully visible */\n  transform: translate3d(0, 0, 0);\n  transition: opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s;\n}\n\n// The logo + navigation\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px 0 0;\n\n  img {\n    max-width: var(--logo-width);\n  }\n\n  nav {\n    font-weight: var(--font-weight-text);\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n    }\n  }\n}\n\n// General styles for the content\n#content {\n  display: flex;\n  flex-direction: column;\n\n  max-width: 1700px;\n  margin: 70px 0 0;\n  padding: 0 0 100px;\n}\n\n// Homepage\n.homepage {\n  .fade-in {\n    opacity: 0;\n    transform: translate3d(0, -10px, 0);\n  }\n\n  .fade-in-deferred {\n    opacity: 0;\n    transform: translate3d(0, 5px, 0) scale(1.03);\n  }\n\n  .visible {\n    opacity: 1; /* Fully visible */\n    transform: translate3d(0, 0, 0);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n\n  .visible-deferred {\n    opacity: 1; /* Fully visible */\n    transform: translate3d(0, 0, 0) scale(1);\n    transition: opacity 1s ease-out 0.2s, transform 1s ease-out 0.2s;\n  }\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: 864px;\n      font-weight: var(--font-weight-project-description);\n    }\n  }\n}\n\n// Single project page\n.single-project {\n  .project-title-and-link {\n    display: flex;\n    align-items: baseline;\n    gap: 30px;\n\n    a {\n      display: flex;\n      gap: 8px;\n      font-size: var(--font-size-visit-live-site);\n    }\n\n    img {\n      max-width: 18px;\n    }\n  }\n  .skills-and-tools {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 20px;\n\n    margin: 0 0 25px;\n    padding: 10px 0;\n    border-top: 2px solid var(--primary-color);\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      padding: 0;\n      list-style: none;\n\n      span {\n        margin-right: 5px;\n        font-size: var(--font-size-skills-and-tools);\n        font-weight: var(--font-weight-text);\n      }\n\n      .skill-tag {\n        /* flex-shrink: 0; */\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: 400;\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n      }\n    }\n  }\n\n  .text {\n    padding: 100px 0;\n\n    p {\n      max-width: var(--single-project-text-width);\n    }\n  }\n\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n}\n\n// Profile page\n.profile-page {\n  .text {\n    p {\n      max-width: var(--single-project-text-width);\n    }\n\n    &:first-of-type {\n      margin: 0 0 100px;\n    }\n  }\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n\n    p {\n      font-weight: var(--font-weight-project-description);\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   handleAnimationOnPageTransition: () => (/* binding */ handleAnimationOnPageTransition),
/* harmony export */   pushURLAndCallRouter: () => (/* binding */ pushURLAndCallRouter),
/* harmony export */   setContent: () => (/* binding */ setContent)
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
  // Set scroll position to the top of the browser window
  window.scroll(0, 0);
};

const addAnimationClassesOnPageLoad = function () {
  const elements = document.querySelectorAll('h1');
  const elementsDeferred = document.querySelectorAll(
    '.projects-overview > a:first-of-type article img'
  );

  elements.forEach((el) => {
    el.classList.add('fade-in');
    requestAnimationFrame(() => {
      el.classList.add('visible');
    });
  });

  elementsDeferred.forEach((el) => {
    el.classList.add('fade-in-deferred');
    requestAnimationFrame(() => {
      el.classList.add('visible-deferred');
    });
  });
};

const handleAnimationOnPageTransition = function () {
  const elements = document.querySelectorAll('h1');

  elements.forEach((el) => {
    el.classList.add('transition-in');
    requestAnimationFrame(() => {
      el.classList.add('transition-visible');
    });
  });
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
/* harmony export */   showMoreProjects: () => (/* binding */ showMoreProjects)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


const showMoreProjects = async function (project) {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();

  if (data) {
    const allProjects = data.projects;
    const currentProjectIndex = Number(project.id) - 1;
    const nextProjectIndex = (currentProjectIndex + 1) % allProjects.length;
    const previousProjectIndex =
      (currentProjectIndex - 1 + allProjects.length) % allProjects.length;

    return `previous: ${allProjects[previousProjectIndex].projectName}, next: ${allProjects[nextProjectIndex].projectName}`;
  } else {
    return '';
  }
};


/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProfile: () => (/* binding */ createProfile)
/* harmony export */ });
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


/***/ }),

/***/ "./src/projectsOverview.js":
/*!*********************************!*\
  !*** ./src/projectsOverview.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProjectsOverview: () => (/* binding */ createProjectsOverview),
/* harmony export */   encodeProjectName: () => (/* binding */ encodeProjectName),
/* harmony export */   handleClickOnProjectTeasers: () => (/* binding */ handleClickOnProjectTeasers)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");


/*
Encodes the "projectName" value to safely include it in the URL path 
*/
const encodeProjectName = function (name) {
  return encodeURIComponent(name).toLowerCase();
};

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

  // Generate HTML code for the projects overview page
  const overviewHTML = projects
    .map((project) => {
      // Encode the "projectName" value to safely include it in the URL path
      const urlSaveProjectName = encodeProjectName(project.projectName);

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

  return `<div class="homepage"><h1 class="site-title">UI/UX Developer</h1><div class="projects-overview">${overviewHTML}</div></div>`;
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
      const urlSaveProjectName = encodeProjectName(projectData.projectName);

      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.pushURLAndCallRouter)(urlSaveProjectName);
    })
  );
};


/***/ }),

/***/ "./src/routeHandlers.js":
/*!******************************!*\
  !*** ./src/routeHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultHandler: () => (/* binding */ defaultHandler),
/* harmony export */   displayProfile: () => (/* binding */ displayProfile),
/* harmony export */   displayProjectOverview: () => (/* binding */ displayProjectOverview)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _moreProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moreProjects */ "./src/moreProjects.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/profile.js");
/* harmony import */ var _projectsOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsOverview */ "./src/projectsOverview.js");
/* harmony import */ var _singleProject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./singleProject */ "./src/singleProject.js");







const defaultHandler = async (path) => {
  const projectName = path.split('/')[1]; // Assuming paths like "/projectName"
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();
  const project = data.projects.find(
    (project) => (0,_projectsOverview__WEBPACK_IMPORTED_MODULE_4__.encodeProjectName)(project.projectName) === projectName
  );

  if (project) {
    try {
      const HTMLContent = await (0,_singleProject__WEBPACK_IMPORTED_MODULE_5__.showSingleProject)(project);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', HTMLContent);
    } catch (error) {
      console.error('Failed to load project details:', error);
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', '<h1>Error Loading Project</h1>');
    }
  } else {
    // No project found, display a generic 404 page
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', '<h1>404 Not Found</h1>');
  }
};

const displayProjectOverview = async function () {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = (0,_projectsOverview__WEBPACK_IMPORTED_MODULE_4__.createProjectsOverview)(data.projects);
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', projectsOverviewHTML);
    (0,_projectsOverview__WEBPACK_IMPORTED_MODULE_4__.handleClickOnProjectTeasers)(data.projects);
  }
};

const displayProfile = async function () {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();

  if (data) {
    console.log('Displaying profile...');
    const profileHTML = (0,_profile__WEBPACK_IMPORTED_MODULE_3__.createProfile)(data.profile);
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', profileHTML);
  }
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
/* harmony import */ var _routeHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routeHandlers */ "./src/routeHandlers.js");



const routes = {};

const route = function (path, handler) {
  routes[path] = handler;
};

const router = function () {
  const urlPath = window.location.pathname || '/';
  // First, check for static routes
  if (routes[urlPath]) {
    routes[urlPath]();
    requestAnimationFrame(() => {
      (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.handleAnimationOnPageTransition)();
    });
  } else {
    // If no static route matches, try dynamic project loading
    (0,_routeHandlers__WEBPACK_IMPORTED_MODULE_1__.defaultHandler)(urlPath);
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
/* harmony export */   showSingleProject: () => (/* binding */ showSingleProject)
/* harmony export */ });
/* harmony import */ var _img_external_link_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/external-link.svg */ "./src/img/external-link.svg");
/* harmony import */ var _moreProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreProjects */ "./src/moreProjects.js");



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
  const moreProjects = await (0,_moreProjects__WEBPACK_IMPORTED_MODULE_1__.showMoreProjects)(project);

  return `<div id="${project.id}" class="single-project"><div class="project-title-and-link"><h2>${project.projectName}</h2>${projectLink}</div><section class="skills-and-tools"><ul><span>Skills/Tools:</span>${usedSkills}</ul></section><section class="media-elements">${projectMediaElements}</section>${moreProjects}</div>`;
};

const generateProjectLink = function (project) {
  if (project.live_site) {
    return `<a href="${project.live_site}"><span>Live-Seite besuchen</span><img src="${_img_external_link_svg__WEBPACK_IMPORTED_MODULE_0__}"></a>`;
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
            return `<div class="${element.type}">
            <video src="${element.content}" autoplay muted loop>
            </div>`;
          case 'image':
            return `<div class="${element.type}">
            <img src="${element.content}">
            </div>`;
          case 'text':
            return `<div class="${element.type}">
            <p>${element.content}</p>
            </div>`;
          case 'two-column':
            // If the element type is "two-column" we need to iterate over the element's
            // "content" property which holds an array of media objects "image" or "video"
            const twoColumnElements = element.content
              .map((media) => {
                if (media.type === 'video') {
                  return `<div class="${media.type}">
                <video src="${media.content}" autoplay muted loop>
                </div>`;
                } else if (media.type === 'image') {
                  return `<div class="${media.type}">
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


/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd92fad4db4a1ca8a7ea.ttf";

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
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
/* harmony import */ var _routeHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routeHandlers */ "./src/routeHandlers.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");






(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)('/', _routeHandlers__WEBPACK_IMPORTED_MODULE_2__.displayProjectOverview);
(0,_router__WEBPACK_IMPORTED_MODULE_1__.route)('/profil', _routeHandlers__WEBPACK_IMPORTED_MODULE_2__.displayProfile);

document.addEventListener('DOMContentLoaded', function () {
  (0,_router__WEBPACK_IMPORTED_MODULE_1__.router)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_3__.handleMenuLinks)();
  requestAnimationFrame(() => {
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_4__.addAnimationClassesOnPageLoad)();
  });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxPQUFPLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLHFCQUFxQixXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8s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Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ21CO0FBQ2dDO0FBQ2hDO0FBQ3lCOztBQUVsRSw4Q0FBSyxNQUFNLGtFQUFzQjtBQUNqQyw4Q0FBSyxZQUFZLDBEQUFjOztBQUUvQjtBQUNBLEVBQUUsK0NBQU07QUFDUixFQUFFLHNEQUFlO0FBQ2pCO0FBQ0EsSUFBSSwrRUFBNkI7QUFDakMsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9oZWxwZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL21vcmVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcHJvamVjdHNPdmVydmlldy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcm91dGVIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2luZ2xlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1wiKTtcbn1cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWxvZ28td2lkdGg6IGNsYW1wKDYuMjVyZW0sIDMuMXZ3ICsgNS42M3JlbSwgOS4zMXJlbSk7XG4gIC0tZm9udC1zaXplLW5hdjogY2xhbXAoMS4yNXJlbSwgMC41MXZ3ICsgMS4xNXJlbSwgMS43NXJlbSk7XG4gIC0tZm9udC1zaXplLXRleHQ6IGNsYW1wKDEuMzhyZW0sIDAuNzZ2dyArIDEuMjJyZW0sIDIuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMTogY2xhbXAoNXJlbSwgNS43dncgKyAzLjg2cmVtLCAxMC42M3JlbSk7XG4gIC0tZm9udC1zaXplLWgyOiBjbGFtcCgyLjVyZW0sIDMuMTZ2dyArIDEuODdyZW0sIDUuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzOiBjbGFtcCgxLjI1cmVtLCAwLjI1dncgKyAxLjJyZW0sIDEuNXJlbSk7XG4gIC0tZm9udC1zaXplLXNraWxsLXRhZzogY2xhbXAoMXJlbSwgMC4xM3Z3ICsgMC45N3JlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogY2xhbXAoMXJlbSwgMC4xM3Z3ICsgMC45N3JlbSwgMS4xM3JlbSk7XG4gIC0tZm9udC13ZWlnaHQtdGV4dDogNDQwO1xuICAtLWZvbnQtd2VpZ2h0LXByb2plY3QtZGVzY3JpcHRpb246IDM1MDtcbiAgLS1mb250LXdlaWdodC1oMTogMzcwO1xuICAtLWZvbnQtd2VpZ2h0LWgyOiA1MDA7XG4gIC0tZm9udC13ZWlnaHQtaDM6IDUwMDtcbiAgLS1mbGV4LWdhcC1uYXY6IGNsYW1wKDEuODhyZW0sIDIuNTN2dyArIDEuMzdyZW0sIDQuMzhyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDE4Ljk5dncgKyAzMy43cmVtLCA1Ni4yNXJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMTogY2xhbXAoMC4zMXJlbSwgMC42M3Z3ICsgMC4xOXJlbSwgMC45NHJlbSk7XG4gIC0tc2luZ2xlLXByb2plY3Qtc2tpbGxzLXRhZy1wYWRkaW5nMjogY2xhbXAoMC42M3JlbSwgMC45NXZ3ICsgMC40NHJlbSwgMS41NnJlbSk7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaDEsXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEge1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW46IDAgMCA4MHB4IC05cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWgxKTtcbiAgbGluZS1oZWlnaHQ6IDkwJTtcbn1cblxuaDIge1xuICBtYXJnaW46IDAgMCAyMHB4O1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMik7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oMik7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xufVxuXG5oMyxcbnAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS10ZXh0KTtcbn1cblxuaDMge1xuICBtYXJnaW46IDIwcHggMCAwO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtaDMpO1xufVxuXG5wICsgcCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuaW1nLFxudmlkZW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRyYW5zaXRpb24taW4ge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xufVxuXG4udHJhbnNpdGlvbi12aXNpYmxlIHtcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgdmlzaWJsZSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZS1vdXQgMC4xcywgdHJhbnNmb3JtIDAuNnMgZWFzZS1vdXQgMC4xcztcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IDIwcHggMCAwO1xufVxuaGVhZGVyIGltZyB7XG4gIG1heC13aWR0aDogdmFyKC0tbG9nby13aWR0aCk7XG59XG5oZWFkZXIgbmF2IHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXRleHQpO1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC13aWR0aDogMTcwMHB4O1xuICBtYXJnaW46IDcwcHggMCAwO1xuICBwYWRkaW5nOiAwIDAgMTAwcHg7XG59XG5cbi5ob21lcGFnZSAuZmFkZS1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xufVxuLmhvbWVwYWdlIC5mYWRlLWluLWRlZmVycmVkIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApIHNjYWxlKDEuMDMpO1xufVxuLmhvbWVwYWdlIC52aXNpYmxlIHtcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgdmlzaWJsZSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0IDAuMnMsIHRyYW5zZm9ybSAxcyBlYXNlLW91dCAwLjJzO1xufVxuLmhvbWVwYWdlIC52aXNpYmxlLWRlZmVycmVkIHtcbiAgb3BhY2l0eTogMTsgLyogRnVsbHkgdmlzaWJsZSAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0IDAuMnMsIHRyYW5zZm9ybSAxcyBlYXNlLW91dCAwLjJzO1xufVxuXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwMHB4O1xuICBtYXJnaW46IDA7XG59XG4ucHJvamVjdHMtb3ZlcnZpZXcgYXJ0aWNsZSBwIHtcbiAgbWF4LXdpZHRoOiA4NjRweDtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXByb2plY3QtZGVzY3JpcHRpb24pO1xufVxuXG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogMzBweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAucHJvamVjdC10aXRsZS1hbmQtbGluayBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZSk7XG59XG4uc2luZ2xlLXByb2plY3QgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsgaW1nIHtcbiAgbWF4LXdpZHRoOiAxOHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBnYXA6IDIwcHg7XG4gIG1hcmdpbjogMCAwIDI1cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaW5nbGUtcHJvamVjdCAuc2tpbGxzLWFuZC10b29scyB1bCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHMpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGV4dCk7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwgLnNraWxsLXRhZyB7XG4gIC8qIGZsZXgtc2hyaW5rOiAwOyAqL1xuICBwYWRkaW5nOiB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxKSB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnRleHQge1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5tZWRpYS1lbGVtZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cbi5zaW5nbGUtcHJvamVjdCAudHdvLWNvbHVtbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucHJvZmlsZS1wYWdlIC50ZXh0IHAge1xuICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xufVxuLnByb2ZpbGUtcGFnZSAudGV4dDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luOiAwIDAgMTAwcHg7XG59XG4ucHJvZmlsZS1wYWdlIC50d28tY29sdW1uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xufVxuLnByb2ZpbGUtcGFnZSAudHdvLWNvbHVtbiBwIHtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXByb2plY3QtZGVzY3JpcHRpb24pO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VB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dEZOO0FBeUZJO0VBQ0UsaUJBQUE7QUF2Rk47QUEwRkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUF4Rko7QUEwRkk7RUFDRSxtREFBQTtBQXhGTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzYXNzOm1hdGgnO1xcblxcbi8vIEZvbnQgZmFjZVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdJbnRlcic7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogMTAwIDkwMDsgLy8gU3VwcG9ydHMgYSByYW5nZSBmcm9tIFRoaW4gKDEwMCkgdG8gQmxhY2sgKDkwMClcXG4gIGZvbnQtZGlzcGxheTogc3dhcDsgLy8gT3B0aW9uYWwgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxcbiAgc3JjOiB1cmwoJy4vZm9udHMvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlLXZhcmlhdGlvbnMnKTtcXG59XFxuXFxuLy8gRm9udCBzaXplIGNhbGN1bGF0aW9uIHdpdCBjbGFtcCgpXFxuJGRlZmF1bHQtbWluLWJwOiAzMjBweDtcXG4kZGVmYXVsdC1tYXgtYnA6IDE5MDBweDtcXG5cXG5AZnVuY3Rpb24gcm91bmQoJG51bWJlciwgJGRlY2ltYWxzOiAwKSB7XFxuICAkbjogMTtcXG4gIEBpZiAkZGVjaW1hbHMgPiAwIHtcXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkZGVjaW1hbHMge1xcbiAgICAgICRuOiAkbiAqIDEwO1xcbiAgICB9XFxuICB9XFxuICBAcmV0dXJuIG1hdGguZGl2KG1hdGgucm91bmQoJG51bWJlciAqICRuKSwgJG4pO1xcbn1cXG5cXG5AZnVuY3Rpb24gcHgtdG8tcmVtKCRweCkge1xcbiAgJHJlbXM6IG1hdGguZGl2KCRweCwgMTZweCkgKiAxcmVtO1xcbiAgQHJldHVybiAkcmVtcztcXG59XFxuXFxuQGZ1bmN0aW9uIGZsdWlkKFxcbiAgJG1pbi1zaXplLFxcbiAgJG1heC1zaXplLFxcbiAgJG1pbi1icmVha3BvaW50OiAkZGVmYXVsdC1taW4tYnAsXFxuICAkbWF4LWJyZWFrcG9pbnQ6ICRkZWZhdWx0LW1heC1icCxcXG4gICR1bml0OiB2d1xcbikge1xcbiAgJHNsb3BlOiBtYXRoLmRpdigkbWF4LXNpemUgLSAkbWluLXNpemUsICRtYXgtYnJlYWtwb2ludCAtICRtaW4tYnJlYWtwb2ludCk7XFxuICAkc2xvcGUtdG8tdW5pdDogcm91bmQoJHNsb3BlICogMTAwLCAyKTtcXG4gICRpbnRlcmNlcHQtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplIC0gJHNsb3BlICogJG1pbi1icmVha3BvaW50KSwgMik7XFxuICAkbWluLXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1pbi1zaXplKSwgMik7XFxuICAkbWF4LXNpemUtcmVtOiByb3VuZChweC10by1yZW0oJG1heC1zaXplKSwgMik7XFxuICBAcmV0dXJuIGNsYW1wKCN7JG1pbi1zaXplLXJlbX0sICN7JHNsb3BlLXRvLXVuaXR9I3skdW5pdH0gKyAjeyRpbnRlcmNlcHQtcmVtfSwgI3skbWF4LXNpemUtcmVtfSk7XFxufVxcblxcbi8vIEN1c3RvbSBwcm9wZXJ0aWVzXFxuOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xcblxcbiAgLS1sb2dvLXdpZHRoOiAje2ZsdWlkKDEwMHB4LCAxNDlweCl9O1xcblxcbiAgLS1mb250LXNpemUtbmF2OiAje2ZsdWlkKDIwcHgsIDI4cHgpfTtcXG4gIC0tZm9udC1zaXplLXRleHQ6ICN7Zmx1aWQoMjJweCwgMzRweCl9O1xcbiAgLS1mb250LXNpemUtaDE6ICN7Zmx1aWQoODBweCwgMTcwcHgpfTtcXG4gIC0tZm9udC1zaXplLWgyOiAje2ZsdWlkKDQwcHgsIDkwcHgpfTtcXG4gIC0tZm9udC1zaXplLXNraWxscy1hbmQtdG9vbHM6ICN7Zmx1aWQoMjBweCwgMjRweCl9O1xcbiAgLS1mb250LXNpemUtc2tpbGwtdGFnOiAje2ZsdWlkKDE2cHgsIDE4cHgpfTtcXG4gIC0tZm9udC1zaXplLXZpc2l0LWxpdmUtc2l0ZTogI3tmbHVpZCgxNnB4LCAxOHB4KX07XFxuXFxuICAtLWZvbnQtd2VpZ2h0LXRleHQ6IDQ0MDtcXG4gIC0tZm9udC13ZWlnaHQtcHJvamVjdC1kZXNjcmlwdGlvbjogMzUwO1xcbiAgLS1mb250LXdlaWdodC1oMTogMzcwO1xcbiAgLS1mb250LXdlaWdodC1oMjogNTAwO1xcbiAgLS1mb250LXdlaWdodC1oMzogNTAwO1xcblxcbiAgLS1mbGV4LWdhcC1uYXY6ICN7Zmx1aWQoMzBweCwgNzBweCl9O1xcblxcbiAgLS1zaW5nbGUtcHJvamVjdC10ZXh0LXdpZHRoOiAje2ZsdWlkKDYwMHB4LCA5MDBweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxOiAje2ZsdWlkKDVweCwgMTVweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiAje2ZsdWlkKDEwcHgsIDI1cHgpfTtcXG59XFxuXFxuLy8gR2VuZXJhbCBzdHlsZXMgZm9yIHRoZSB3ZWJzaXRlXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMCAwIDgwcHggLTlweDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oMSk7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWgyKTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDIwcHggMCAwO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWgzKTtcXG59XFxuXFxucCArIHAge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuZmlndXJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmltZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udHJhbnNpdGlvbi1pbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMHB4LCAwKTtcXG59XFxuXFxuLnRyYW5zaXRpb24tdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2Utb3V0IDAuMXMsIHRyYW5zZm9ybSAwLjZzIGVhc2Utb3V0IDAuMXM7XFxufVxcblxcbi8vIFRoZSBsb2dvICsgbmF2aWdhdGlvblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IDIwcHggMCAwO1xcblxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1sb2dvLXdpZHRoKTtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10ZXh0KTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xcblxcbiAgICAgIG1hcmdpbjogMDtcXG5cXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gR2VuZXJhbCBzdHlsZXMgZm9yIHRoZSBjb250ZW50XFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogNzBweCAwIDA7XFxuICBwYWRkaW5nOiAwIDAgMTAwcHg7XFxufVxcblxcbi8vIEhvbWVwYWdlXFxuLmhvbWVwYWdlIHtcXG4gIC5mYWRlLWluIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTBweCwgMCk7XFxuICB9XFxuXFxuICAuZmFkZS1pbi1kZWZlcnJlZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgNXB4LCAwKSBzY2FsZSgxLjAzKTtcXG4gIH1cXG5cXG4gIC52aXNpYmxlIHtcXG4gICAgb3BhY2l0eTogMTsgLyogRnVsbHkgdmlzaWJsZSAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2Utb3V0IDAuMnMsIHRyYW5zZm9ybSAxcyBlYXNlLW91dCAwLjJzO1xcbiAgfVxcblxcbiAgLnZpc2libGUtZGVmZXJyZWQge1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSB2aXNpYmxlICovXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1vdXQgMC4ycywgdHJhbnNmb3JtIDFzIGVhc2Utb3V0IDAuMnM7XFxuICB9XFxufVxcblxcbi8vIFByb2plY3Qgb3ZlcnZpZXdcXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwMHB4O1xcblxcbiAgbWFyZ2luOiAwO1xcblxcbiAgYXJ0aWNsZSB7XFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogODY0cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXByb2plY3QtZGVzY3JpcHRpb24pO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIFNpbmdsZSBwcm9qZWN0IHBhZ2VcXG4uc2luZ2xlLXByb2plY3Qge1xcbiAgLnByb2plY3QtdGl0bGUtYW5kLWxpbmsge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgIGdhcDogMzBweDtcXG5cXG4gICAgYSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBnYXA6IDhweDtcXG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS12aXNpdC1saXZlLXNpdGUpO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgbWF4LXdpZHRoOiAxOHB4O1xcbiAgICB9XFxuICB9XFxuICAuc2tpbGxzLWFuZC10b29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBtYXJnaW46IDAgMCAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1za2lsbHMtYW5kLXRvb2xzKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC10ZXh0KTtcXG4gICAgICB9XFxuXFxuICAgICAgLnNraWxsLXRhZyB7XFxuICAgICAgICAvKiBmbGV4LXNocmluazogMDsgKi9cXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzEpIHZhcigtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzIpO1xcblxcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAudGV4dCB7XFxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XFxuXFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZWRpYS1lbGVtZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcblxcbi8vIFByb2ZpbGUgcGFnZVxcbi5wcm9maWxlLXBhZ2Uge1xcbiAgLnRleHQge1xcbiAgICBwIHtcXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGgpO1xcbiAgICB9XFxuXFxuICAgICY6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgICAgbWFyZ2luOiAwIDAgMTAwcHg7XFxuICAgIH1cXG4gIH1cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcblxcbiAgICBwIHtcXG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcHJvamVjdC1kZXNjcmlwdGlvbik7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSB9IGZyb20gJy4vc2Vzc2lvblN0b3JhZ2UnO1xuXG4vKiBcbkxvYWRzIGEgSlNPTiBmaWxlIHdpdGggYWxsIGRhdGEgZnJvbSB0aGUgc2VydmVyIGFuZCBzYXZlcyBpdFxudG8gc2Vzc2lvblN0b3JhZ2UgaWYgYXZhaWxhYmxlLCBzbyB0aGUgZGF0YSBpcyBjYWNoZWQgZm9yIGZ1cnRoZXIgdXNlLlxuKi9cbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ0luaXRpYWxpemluZy4uLicpO1xuICBsZXQgZGF0YTtcblxuICAvLyBHZXQgZGF0YSBmcm9tIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZVxuICBpZiAoaXNTZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSkge1xuICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uU3RvcmFnZSBhdmFpbGFibGUuLi4nKTtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdkYXRhJykpO1xuXG4gICAgaWYgKHN0b3JlZERhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMb2FkZWQgcHJvamVjdHMgZnJvbSBzZXNzaW9uU3RvcmFnZScpO1xuICAgICAgZGF0YSA9IHN0b3JlZERhdGE7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIElmIGRhdGEgaXMgbm90IGF2YWlsYWJsZSBpbiBzZXNzaW9uU3RvcmFnZSwgZmV0Y2ggdGhlIGRhdGEgZnJvbSBzZXJ2ZXJcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBkYXRhLi4uJyk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2RhdGEvZGF0YS5qc29uJyk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIEhUVFAgc3RhdHVzIGNvZGUgaXMgaW4gdGhlIDIwMC0yOTkgcmFuZ2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG4gICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIC8vIFNhdmUgZmV0Y2hlZCBkYXRhIHRvIHNlc3Npb25TdG9yYWdlXG4gICAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICBjb25zb2xlLmxvZygnU2F2ZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZScpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBkYXRhOicsIGVycm9yKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImltcG9ydCB7IHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IHNldENvbnRlbnQgPSBmdW5jdGlvbiAoaWQsIGNvbnRlbnQpIHtcbiAgY29uc3QgSFRNTGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgcmV0dXJuIChIVE1MZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50KTtcbn07XG5cbmV4cG9ydCBjb25zdCBwdXNoVVJMQW5kQ2FsbFJvdXRlciA9IGZ1bmN0aW9uIChVUkxwYXRoKSB7XG4gIC8vIFVwZGF0ZSB0aGUgVVJMXG4gIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgYC8ke1VSTHBhdGh9YCk7XG4gIC8vIENhbGwgdGhlIHJvdXRlclxuICByb3V0ZXIoKTtcbiAgLy8gU2V0IHNjcm9sbCBwb3NpdGlvbiB0byB0aGUgdG9wIG9mIHRoZSBicm93c2VyIHdpbmRvd1xuICB3aW5kb3cuc2Nyb2xsKDAsIDApO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEFuaW1hdGlvbkNsYXNzZXNPblBhZ2VMb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxJyk7XG4gIGNvbnN0IGVsZW1lbnRzRGVmZXJyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcucHJvamVjdHMtb3ZlcnZpZXcgPiBhOmZpcnN0LW9mLXR5cGUgYXJ0aWNsZSBpbWcnXG4gICk7XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdmYWRlLWluJyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZWxlbWVudHNEZWZlcnJlZC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tZGVmZXJyZWQnKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZS1kZWZlcnJlZCcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBbmltYXRpb25PblBhZ2VUcmFuc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxJyk7XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLWluJyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tdmlzaWJsZScpO1xuICAgIH0pO1xuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBwdXNoVVJMQW5kQ2FsbFJvdXRlciB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxuZXhwb3J0IGNvbnN0IGhhbmRsZU1lbnVMaW5rcyA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbiAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnYSNob21lJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHB1c2hVUkxBbmRDYWxsUm91dGVyKCcnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2EjbG9nbycpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwdXNoVVJMQW5kQ2FsbFJvdXRlcignJyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCdhI3Byb2ZpbGUnKSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIoJ3Byb2ZpbCcpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgbG9hZERhdGEgfSBmcm9tICcuL2RhdGEnO1xuXG5leHBvcnQgY29uc3Qgc2hvd01vcmVQcm9qZWN0cyA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgY29uc3QgYWxsUHJvamVjdHMgPSBkYXRhLnByb2plY3RzO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0SW5kZXggPSBOdW1iZXIocHJvamVjdC5pZCkgLSAxO1xuICAgIGNvbnN0IG5leHRQcm9qZWN0SW5kZXggPSAoY3VycmVudFByb2plY3RJbmRleCArIDEpICUgYWxsUHJvamVjdHMubGVuZ3RoO1xuICAgIGNvbnN0IHByZXZpb3VzUHJvamVjdEluZGV4ID1cbiAgICAgIChjdXJyZW50UHJvamVjdEluZGV4IC0gMSArIGFsbFByb2plY3RzLmxlbmd0aCkgJSBhbGxQcm9qZWN0cy5sZW5ndGg7XG5cbiAgICByZXR1cm4gYHByZXZpb3VzOiAke2FsbFByb2plY3RzW3ByZXZpb3VzUHJvamVjdEluZGV4XS5wcm9qZWN0TmFtZX0sIG5leHQ6ICR7YWxsUHJvamVjdHNbbmV4dFByb2plY3RJbmRleF0ucHJvamVjdE5hbWV9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlUHJvZmlsZSA9IGZ1bmN0aW9uIChwcm9maWxlRGF0YSkge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2ZpbGUgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9maWxlRGF0YSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2ZpbGUgZGF0YSBhdmFpbGFibGUuJyk7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHByb2ZpbGUgSFRNTFxuICBjb25zdCBwcm9maWxlRWxlbWVudHMgPSBwcm9maWxlRGF0YS5lbGVtZW50c1xuICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgICAke2VsZW1lbnQuY29udGVudH1cbiAgICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICBjYXNlICd0d28tY29sdW1uJzpcbiAgICAgICAgICAvLyBJZiB0aGUgZWxlbWVudCB0eXBlIGlzIFwidHdvLWNvbHVtblwiIHdlIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIHRoZSBlbGVtZW50J3NcbiAgICAgICAgICAvLyBcImNvbnRlbnRcIiBwcm9wZXJ0eSB3aGljaCBob2xkcyBhbiBhcnJheSBvZiBvYmplY3RzIHR5cGUgXCJ0ZXh0XCJcbiAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudHMgPSBlbGVtZW50LmNvbnRlbnRcbiAgICAgICAgICAgIC5tYXAoKGVsKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlbC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsLnR5cGV9XCI+XG4gICAgICAgICAgICAgICR7ZWwuY29udGVudH1cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxwPlVuc3VwcG9ydGVkIGZvcm1hdC48L3A+YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgIHJldHVybiBgPGgyPlNraWxsczwvaDI+PGRpdiBjbGFzcyA9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICAgJHt0ZXh0RWxlbWVudHN9XG4gICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicHJvZmlsZS1wYWdlXCI+PGgxPiR7cHJvZmlsZURhdGEudGl0bGV9PC9oMT4ke3Byb2ZpbGVFbGVtZW50c308L2Rpdj5gO1xufTtcbiIsImltcG9ydCB7IHB1c2hVUkxBbmRDYWxsUm91dGVyIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuXG4vKlxuRW5jb2RlcyB0aGUgXCJwcm9qZWN0TmFtZVwiIHZhbHVlIHRvIHNhZmVseSBpbmNsdWRlIGl0IGluIHRoZSBVUkwgcGF0aCBcbiovXG5leHBvcnQgY29uc3QgZW5jb2RlUHJvamVjdE5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKlxuR2VuZXJhdGVzIHRoZSBIVE1MIGNvZGUgZm9yIGEgcHJvamVjdCBvdmVydmlldyBwYWdlLlxuVGhlIGZ1bmN0aW9uIGl0ZXJhdGVzIG92ZXIgYW4gYXJyYXkgb2YgcHJvamVjdCBvYmplY3RzIGFuZFxuZ2VuZXJhdGVzIEhUTUwgY29kZSBmb3IgdGhlIHByb3BlcnRpZXMgb2YgdGhvc2Ugb2JqZWN0cy5cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdHNPdmVydmlldyA9IGZ1bmN0aW9uIChwcm9qZWN0cykge1xuICAvLyBDaGVjayB3aGV0aGVyIHByb2plY3QgZGF0YSBpcyBhdmFpbGFibGVcbiAgaWYgKCFwcm9qZWN0cykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ05vIHByb2plY3RzIGRhdGEgYXZhaWxhYmxlIHRvIGNyZWF0ZSBvdmVydmlldy4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBIVE1MIGNvZGUgZm9yIHRoZSBwcm9qZWN0cyBvdmVydmlldyBwYWdlXG4gIGNvbnN0IG92ZXJ2aWV3SFRNTCA9IHByb2plY3RzXG4gICAgLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgLy8gRW5jb2RlIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoXG4gICAgICBjb25zdCB1cmxTYXZlUHJvamVjdE5hbWUgPSBlbmNvZGVQcm9qZWN0TmFtZShwcm9qZWN0LnByb2plY3ROYW1lKTtcblxuICAgICAgcmV0dXJuIGA8YSBocmVmPVwiLyR7dXJsU2F2ZVByb2plY3ROYW1lfVwiIGlkPVwiJHtwcm9qZWN0LmlkfVwiPlxuICAgICAgPGFydGljbGU+XG4gICAgICA8ZmlndXJlPlxuICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QuaW1hZ2V9XCIgYWx0PVwiJHtwcm9qZWN0LnByb2plY3ROYW1lfVwiPlxuICAgICAgPC9maWd1cmU+XG4gICAgICA8aDM+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDM+XG4gICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9hPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiaG9tZXBhZ2VcIj48aDEgY2xhc3M9XCJzaXRlLXRpdGxlXCI+VUkvVVggRGV2ZWxvcGVyPC9oMT48ZGl2IGNsYXNzPVwicHJvamVjdHMtb3ZlcnZpZXdcIj4ke292ZXJ2aWV3SFRNTH08L2Rpdj48L2Rpdj5gO1xufTtcblxuLypcbkxvb2tzIGZvciBhIHByb2plY3QgdGhhdCBtYXRjaGVzIGEgZ2l2ZW4gSUQgd2l0aGluIGFuIGFycmF5IG9mIHByb2plY3Qgb2JqZWN0cy5cblRoZSBJRCBpcyBhIHByb3BlcnR5IG9mIGV2ZXJ5IHByb2plY3Qgb2JqZWN0IGluIHRoZSBhcnJheS5cbiovXG5jb25zdCBmaW5kUHJvamVjdEJ5SWQgPSBmdW5jdGlvbiAocHJvamVjdEFycmF5LCBpZCkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gTnVtYmVyKGlkKSk7XG5cbiAgcmV0dXJuIHByb2plY3RBcnJheVtwcm9qZWN0SW5kZXhdO1xufTtcblxuLypcbkFkZHMgYSBjbGljayBldmVudCB0byB0aGUgcHJvamVjdCB0ZWFzZXJzIG9uIHRoZSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZXZlbnQgdHJpZXMgdG8gbWF0Y2ggdGhlIGlkIG9mIHRoZSBjbGlja2VkIHRlYXNlciB3aXRoIGEgcHJvamVjdCdzIElEXG5mcm9tIGEgZ2l2ZW4gW3Byb2plY3RzXSBhcnJheSwgaW5zZXJ0cyB0aGF0IHByb2plY3QgbmFtZSBpbiB0aGUgdXJsIGFuZCBsb2RzXG50aGUgcm91dGVyIHRvIGhhbmRsZSB0aGUgbG9hZGluZyBvZiB0aGUgY29udGVudC5cbiovXG5leHBvcnQgY29uc3QgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGNvbnN0IGFsbFByb2plY3RUZWFzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdHMtb3ZlcnZpZXcgYScpO1xuXG4gIGFsbFByb2plY3RUZWFzZXIuZm9yRWFjaCgodGVhc2VyKSA9PlxuICAgIHRlYXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGZpbmRQcm9qZWN0QnlJZChwcm9qZWN0cywgcHJvamVjdElkKTtcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGVuY29kZVByb2plY3ROYW1lKHByb2plY3REYXRhLnByb2plY3ROYW1lKTtcblxuICAgICAgcHVzaFVSTEFuZENhbGxSb3V0ZXIodXJsU2F2ZVByb2plY3ROYW1lKTtcbiAgICB9KVxuICApO1xufTtcbiIsImltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IHNldENvbnRlbnQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBzaG93TW9yZVByb2plY3RzIH0gZnJvbSAnLi9tb3JlUHJvamVjdHMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvZmlsZSB9IGZyb20gJy4vcHJvZmlsZSc7XG5pbXBvcnQge1xuICBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3LFxuICBlbmNvZGVQcm9qZWN0TmFtZSxcbiAgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzLFxufSBmcm9tICcuL3Byb2plY3RzT3ZlcnZpZXcnO1xuaW1wb3J0IHsgc2hvd1NpbmdsZVByb2plY3QgfSBmcm9tICcuL3NpbmdsZVByb2plY3QnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBhc3luYyAocGF0aCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhdGguc3BsaXQoJy8nKVsxXTsgLy8gQXNzdW1pbmcgcGF0aHMgbGlrZSBcIi9wcm9qZWN0TmFtZVwiXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBlbmNvZGVQcm9qZWN0TmFtZShwcm9qZWN0LnByb2plY3ROYW1lKSA9PT0gcHJvamVjdE5hbWVcbiAgKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBIVE1MQ29udGVudCA9IGF3YWl0IHNob3dTaW5nbGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgc2V0Q29udGVudCgnY29udGVudCcsIEhUTUxDb250ZW50KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgcHJvamVjdCBkZXRhaWxzOicsIGVycm9yKTtcbiAgICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCAnPGgxPkVycm9yIExvYWRpbmcgUHJvamVjdDwvaDE+Jyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIE5vIHByb2plY3QgZm91bmQsIGRpc3BsYXkgYSBnZW5lcmljIDQwNCBwYWdlXG4gICAgc2V0Q29udGVudCgnY29udGVudCcsICc8aDE+NDA0IE5vdCBGb3VuZDwvaDE+Jyk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UHJvamVjdE92ZXJ2aWV3ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdEaXNwbGF5aW5nIHByb2plY3RzLi4uJyk7XG4gICAgY29uc3QgcHJvamVjdHNPdmVydmlld0hUTUwgPSBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3KGRhdGEucHJvamVjdHMpO1xuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBwcm9qZWN0c092ZXJ2aWV3SFRNTCk7XG4gICAgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzKGRhdGEucHJvamVjdHMpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2ZpbGUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0Rpc3BsYXlpbmcgcHJvZmlsZS4uLicpO1xuICAgIGNvbnN0IHByb2ZpbGVIVE1MID0gY3JlYXRlUHJvZmlsZShkYXRhLnByb2ZpbGUpO1xuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBwcm9maWxlSFRNTCk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBhZGRBbmltYXRpb25DbGFzc2VzT25QYWdlTG9hZCwgaGFuZGxlQW5pbWF0aW9uT25QYWdlVHJhbnNpdGlvbiB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZmF1bHRIYW5kbGVyIH0gZnJvbSAnLi9yb3V0ZUhhbmRsZXJzJztcblxuY29uc3Qgcm91dGVzID0ge307XG5cbmV4cG9ydCBjb25zdCByb3V0ZSA9IGZ1bmN0aW9uIChwYXRoLCBoYW5kbGVyKSB7XG4gIHJvdXRlc1twYXRoXSA9IGhhbmRsZXI7XG59O1xuXG5leHBvcnQgY29uc3Qgcm91dGVyID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCB1cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgLy8gRmlyc3QsIGNoZWNrIGZvciBzdGF0aWMgcm91dGVzXG4gIGlmIChyb3V0ZXNbdXJsUGF0aF0pIHtcbiAgICByb3V0ZXNbdXJsUGF0aF0oKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaGFuZGxlQW5pbWF0aW9uT25QYWdlVHJhbnNpdGlvbigpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIHN0YXRpYyByb3V0ZSBtYXRjaGVzLCB0cnkgZHluYW1pYyBwcm9qZWN0IGxvYWRpbmdcbiAgICBkZWZhdWx0SGFuZGxlcih1cmxQYXRoKTtcbiAgfVxufTtcblxuLy8gSGFuZGxlIGJyb3dzZXIgbmF2aWdhdGlvbiBldmVudHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XG4iLCIvKlxuVGVzdHMgaWYgc2Vzc2lvblN0b3JhZ2UgaXMgYXZhaWxhYmxlIGluIHRoZSB1c2VycyBicm93c2VyXG4qL1xuZXhwb3J0IGNvbnN0IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdCA9ICd0ZXN0LXN0b3JhZ2UnO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsImltcG9ydCBleHRlcm5hbExpbmtJY29uIGZyb20gJy4vaW1nL2V4dGVybmFsLWxpbmsuc3ZnJztcbmltcG9ydCB7IHNob3dNb3JlUHJvamVjdHMgfSBmcm9tICcuL21vcmVQcm9qZWN0cyc7XG5cbmV4cG9ydCBjb25zdCBzaG93U2luZ2xlUHJvamVjdCA9IGFzeW5jIGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3QpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwcm9qZWN0IGRhdGEgYXZhaWxhYmxlLicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgQ29kZSBmb3IgdGhlIHNpbmdsZSBwcm9qZWN0IHBhZ2VcbiAgY29uc3QgcHJvamVjdExpbmsgPSBnZW5lcmF0ZVByb2plY3RMaW5rKHByb2plY3QpO1xuICBjb25zdCB1c2VkU2tpbGxzID0gZ2VuZXJhdGVVc2VkU2tpbGxzKHByb2plY3QpO1xuICBjb25zdCBwcm9qZWN0TWVkaWFFbGVtZW50cyA9IGdlbmVyYXRlUHJvamVjdE1lZGlhRWxlbWVudHMocHJvamVjdCk7XG4gIGNvbnN0IG1vcmVQcm9qZWN0cyA9IGF3YWl0IHNob3dNb3JlUHJvamVjdHMocHJvamVjdCk7XG5cbiAgcmV0dXJuIGA8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwic2luZ2xlLXByb2plY3RcIj48ZGl2IGNsYXNzPVwicHJvamVjdC10aXRsZS1hbmQtbGlua1wiPjxoMj4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9oMj4ke3Byb2plY3RMaW5rfTwvZGl2PjxzZWN0aW9uIGNsYXNzPVwic2tpbGxzLWFuZC10b29sc1wiPjx1bD48c3Bhbj5Ta2lsbHMvVG9vbHM6PC9zcGFuPiR7dXNlZFNraWxsc308L3VsPjwvc2VjdGlvbj48c2VjdGlvbiBjbGFzcz1cIm1lZGlhLWVsZW1lbnRzXCI+JHtwcm9qZWN0TWVkaWFFbGVtZW50c308L3NlY3Rpb24+JHttb3JlUHJvamVjdHN9PC9kaXY+YDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUHJvamVjdExpbmsgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5saXZlX3NpdGUpIHtcbiAgICByZXR1cm4gYDxhIGhyZWY9XCIke3Byb2plY3QubGl2ZV9zaXRlfVwiPjxzcGFuPkxpdmUtU2VpdGUgYmVzdWNoZW48L3NwYW4+PGltZyBzcmM9XCIke2V4dGVybmFsTGlua0ljb259XCI+PC9hPmA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZVVzZWRTa2lsbHMgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICBpZiAocHJvamVjdC5za2lsbHMpIHtcbiAgICBjb25zdCBwcm9qZWN0U2tpbGxzID0gcHJvamVjdC5za2lsbHNcbiAgICAgIC5tYXAoKHNraWxsKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2tpbGwtdGFnXCI+JHtza2lsbH08L2xpPmA7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuXG4gICAgcmV0dXJuIHByb2plY3RTa2lsbHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5jb25zdCBnZW5lcmF0ZVByb2plY3RNZWRpYUVsZW1lbnRzID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgaWYgKHByb2plY3QuZWxlbWVudHMpIHtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudHMgPSBwcm9qZWN0LmVsZW1lbnRzXG4gICAgICAubWFwKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgY2FzZSAndmlkZW8nOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICA8dmlkZW8gc3JjPVwiJHtlbGVtZW50LmNvbnRlbnR9XCIgYXV0b3BsYXkgbXV0ZWQgbG9vcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZWxlbWVudC5jb250ZW50fVwiPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgPHA+JHtlbGVtZW50LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICBjYXNlICd0d28tY29sdW1uJzpcbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IHR5cGUgaXMgXCJ0d28tY29sdW1uXCIgd2UgbmVlZCB0byBpdGVyYXRlIG92ZXIgdGhlIGVsZW1lbnQnc1xuICAgICAgICAgICAgLy8gXCJjb250ZW50XCIgcHJvcGVydHkgd2hpY2ggaG9sZHMgYW4gYXJyYXkgb2YgbWVkaWEgb2JqZWN0cyBcImltYWdlXCIgb3IgXCJ2aWRlb1wiXG4gICAgICAgICAgICBjb25zdCB0d29Db2x1bW5FbGVtZW50cyA9IGVsZW1lbnQuY29udGVudFxuICAgICAgICAgICAgICAubWFwKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtZWRpYS50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke21lZGlhLnR5cGV9XCI+XG4gICAgICAgICAgICAgICAgPHZpZGVvIHNyYz1cIiR7bWVkaWEuY29udGVudH1cIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZWRpYS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke21lZGlhLnR5cGV9XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVkaWEuY29udGVudH1cIj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBgPHA+VW5zdXBwb3J0ZWQgbWVkaWEgZm9ybWF0LjwvcD5gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3MgPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICAke3R3b0NvbHVtbkVsZW1lbnRzfVxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudHM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0IHsgcm91dGUsIHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcbmltcG9ydCB7IGRpc3BsYXlQcm9maWxlLCBkaXNwbGF5UHJvamVjdE92ZXJ2aWV3IH0gZnJvbSAnLi9yb3V0ZUhhbmRsZXJzJztcbmltcG9ydCB7IGhhbmRsZU1lbnVMaW5rcyB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBhZGRBbmltYXRpb25DbGFzc2VzT25QYWdlTG9hZCB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zJztcblxucm91dGUoJy8nLCBkaXNwbGF5UHJvamVjdE92ZXJ2aWV3KTtcbnJvdXRlKCcvcHJvZmlsJywgZGlzcGxheVByb2ZpbGUpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICByb3V0ZXIoKTtcbiAgaGFuZGxlTWVudUxpbmtzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgYWRkQW5pbWF0aW9uQ2xhc3Nlc09uUGFnZUxvYWQoKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==