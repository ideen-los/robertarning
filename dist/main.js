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
  --font-size-nav: clamp(1.25rem, 0.58vw + 1.13rem, 1.75rem);
  --font-size-text: clamp(1.38rem, 0.87vw + 1.2rem, 2.13rem);
  --font-size-h1: clamp(5rem, 6.52vw + 3.7rem, 10.63rem);
  --font-size-h2: clamp(2.5rem, 3.62vw + 1.78rem, 5.63rem);
  --font-size-skill-tag: clamp(1rem, 0.14vw + 0.97rem, 1.13rem);
  --font-weight-text: 500;
  --font-weight-h1: 370;
  --flex-gap-nav: clamp(1.88rem, 2.9vw + 1.3rem, 4.38rem);
  --single-project-text-width: clamp(37.5rem, 21.74vw + 33.15rem, 56.25rem);
  --single-project-skills-tag-padding1: clamp(0.63rem, 0.36vw + 0.55rem, 0.94rem);
  --single-project-skills-tag-padding2: clamp(1.25rem, 0.36vw + 1.18rem, 1.56rem);
}

body {
  font-family: "Inter", sans-serif;
  padding: 0 30px;
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
  margin: 0;
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-h1);
  line-height: 90%;
}

h2 {
  margin: 0 0 20px;
  font-size: var(--font-size-h2);
  font-weight: 470;
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

header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1700px;
  margin: 20px 0 0;
}
header nav {
  font-weight: 500;
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
  gap: 80px;
  max-width: 1700px;
  margin: 70px 0 0;
}

.projects-overview {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 0;
}
.projects-overview article p {
  max-width: 864px;
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
  margin-right: 20px;
  font-size: var(--font-size-text);
  font-weight: var(--font-weight-text);
}
.single-project .skills-and-tools ul .skill-tag {
  flex-shrink: 0;
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
  width: var(--single-project-text-width);
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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAGA;EACE,oBAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,0EAAA;AAFF;AAwCA;EACE,wBAAA;EAEA,0DAAA;EACA,0DAAA;EACA,sDAAA;EACA,wDAAA;EACA,6DAAA;EAEA,uBAAA;EACA,qBAAA;EAEA,uDAAA;EAEA,yEAAA;EACA,+EAAA;EACA,+EAAA;AA1CF;;AA8CA;EACE,gCAAA;EACA,eAAA;AA3CF;;AA8CA;EACE,qBAAA;EACA,2BAAA;AA3CF;;AA8CA;;EAEE,SAAA;AA3CF;;AA8CA;EACE,gBAAA;EACA,SAAA;EAEA,8BAAA;EACA,kCAAA;EACA,gBAAA;AA5CF;;AA+CA;EACE,gBAAA;EAEA,8BAAA;EACA,gBAAA;EACA,iBAAA;AA7CF;;AAgDA;;EAEE,SAAA;EACA,UAAA;EAEA,iBAAA;EACA,gCAAA;AA9CF;;AAiDA;EACE,gBAAA;AA9CF;;AAiDA;EACE,gBAAA;AA9CF;;AAiDA;EACE,SAAA;EACA,UAAA;AA9CF;;AAiDA;;EAEE,cAAA;EACA,WAAA;EACA,eAAA;AA9CF;;AAkDA;EACE,aAAA;EACA,qBAAA;EACA,8BAAA;EAEA,iBAAA;EACA,gBAAA;AAhDF;AAkDE;EACE,gBAAA;AAhDJ;AAkDI;EACE,aAAA;EACA,wBAAA;EAEA,SAAA;EAEA,gBAAA;EACA,+BAAA;AAlDN;;AAwDA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EAEA,iBAAA;EACA,gBAAA;AAtDF;;AA0DA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;EAEA,SAAA;AAxDF;AA2DI;EACE,gBAAA;AAzDN;;AAgEE;EACE,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,SAAA;EAEA,gBAAA;EACA,eAAA;EACA,0CAAA;AA9DJ;AAgEI;EACE,aAAA;EACA,QAAA;EACA,eAAA;EACA,mBAAA;EAEA,UAAA;EACA,gBAAA;AA/DN;AAiEM;EACE,kBAAA;EACA,gCAAA;EACA,oCAAA;AA/DR;AAkEM;EACE,cAAA;EACA,4FAAA;EAEA,qCAAA;EACA,gBAAA;EAEA,sCAAA;EACA,mBAAA;AAlER;AAuEE;EACE,gBAAA;AArEJ;AAuEI;EACE,uCAAA;AArEN;AAyEE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAvEJ;AA0EE;EACE,aAAA;EACA,8BAAA;EACA,SAAA;AAxEJ","sourcesContent":["@use 'sass:math';\n\n// Font face\n@font-face {\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 100 900; // Supports a range from Thin (100) to Black (900)\n  font-display: swap; // Optional for better performance\n  src: url('./fonts/Inter-VariableFont_slnt,wght.ttf') format('truetype-variations');\n}\n\n// Font size calculation wit clamp()\n$default-min-bp: 320px;\n$default-max-bp: 1700px;\n\n@function round($number, $decimals: 0) {\n  $n: 1;\n  @if $decimals > 0 {\n    @for $i from 1 through $decimals {\n      $n: $n * 10;\n    }\n  }\n  @return math.div(math.round($number * $n), $n);\n}\n\n@function px-to-rem($px) {\n  $rems: math.div($px, 16px) * 1rem;\n  @return $rems;\n}\n\n@function fluid(\n  $min-size,\n  $max-size,\n  $min-breakpoint: $default-min-bp,\n  $max-breakpoint: $default-max-bp,\n  $unit: vw\n) {\n  $slope: math.div($max-size - $min-size, $max-breakpoint - $min-breakpoint);\n  $slope-to-unit: round($slope * 100, 2);\n  $intercept-rem: round(px-to-rem($min-size - $slope * $min-breakpoint), 2);\n  $min-size-rem: round(px-to-rem($min-size), 2);\n  $max-size-rem: round(px-to-rem($max-size), 2);\n  @return clamp(#{$min-size-rem}, #{$slope-to-unit}#{$unit} + #{$intercept-rem}, #{$max-size-rem});\n}\n\n// Custom properties\n:root {\n  --primary-color: #0d0d0d;\n\n  --font-size-nav: #{fluid(20px, 28px)};\n  --font-size-text: #{fluid(22px, 34px)};\n  --font-size-h1: #{fluid(80px, 170px)};\n  --font-size-h2: #{fluid(40px, 90px)};\n  --font-size-skill-tag: #{fluid(16px, 18px)};\n\n  --font-weight-text: 500;\n  --font-weight-h1: 370;\n\n  --flex-gap-nav: #{fluid(30px, 70px)};\n\n  --single-project-text-width: #{fluid(600px, 900px)};\n  --single-project-skills-tag-padding1: #{fluid(10px, 15px)};\n  --single-project-skills-tag-padding2: #{fluid(20px, 25px)};\n}\n\n// General styles for the website\nbody {\n  font-family: 'Inter', sans-serif;\n  padding: 0 30px;\n}\n\na {\n  text-decoration: none;\n  color: var(--primary-color);\n}\n\nh1,\nh2 {\n  margin: 0;\n}\n\nh1 {\n  max-width: 700px;\n  margin: 0;\n\n  font-size: var(--font-size-h1);\n  font-weight: var(--font-weight-h1);\n  line-height: 90%;\n}\n\nh2 {\n  margin: 0 0 20px;\n\n  font-size: var(--font-size-h2);\n  font-weight: 470;\n  line-height: 100%;\n}\n\nh3,\np {\n  margin: 0;\n  padding: 0;\n\n  line-height: 140%;\n  font-size: var(--font-size-text);\n}\n\nh3 {\n  margin: 20px 0 0;\n}\n\np + p {\n  margin-top: 40px;\n}\n\nfigure {\n  margin: 0;\n  padding: 0;\n}\n\nimg,\nvideo {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n// The logo + navigation\nheader {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n\n  max-width: 1700px;\n  margin: 20px 0 0;\n\n  nav {\n    font-weight: 500;\n\n    ul {\n      display: flex;\n      gap: var(--flex-gap-nav);\n\n      margin: 0;\n\n      list-style: none;\n      font-size: var(--font-size-nav);\n    }\n  }\n}\n\n// General styles for the content\n#content {\n  display: flex;\n  flex-direction: column;\n  gap: 80px;\n\n  max-width: 1700px;\n  margin: 70px 0 0;\n}\n\n// Project overview\n.projects-overview {\n  display: flex;\n  flex-direction: column;\n  gap: 100px;\n\n  margin: 0;\n\n  article {\n    p {\n      max-width: 864px;\n    }\n  }\n}\n\n// Single project page\n.single-project {\n  .skills-and-tools {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 20px;\n\n    margin: 0 0 25px;\n    padding: 10px 0;\n    border-top: 2px solid var(--primary-color);\n\n    ul {\n      display: flex;\n      gap: 5px;\n      flex-wrap: wrap;\n      align-items: center;\n\n      padding: 0;\n      list-style: none;\n\n      span {\n        margin-right: 20px;\n        font-size: var(--font-size-text);\n        font-weight: var(--font-weight-text);\n      }\n\n      .skill-tag {\n        flex-shrink: 0;\n        padding: var(--single-project-skills-tag-padding1) var(--single-project-skills-tag-padding2);\n\n        font-size: var(--font-size-skill-tag);\n        font-weight: 400;\n\n        border: 2px solid var(--primary-color);\n        border-radius: 50px;\n      }\n    }\n  }\n\n  .text {\n    padding: 100px 0;\n\n    p {\n      width: var(--single-project-text-width);\n    }\n  }\n\n  .media-elements {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n  }\n\n  .two-column {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 10px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   setContent: () => (/* binding */ setContent)
/* harmony export */ });
const setContent = function (id, content) {
  const HTMLelement = document.getElementById(id);

  return (HTMLelement.innerHTML = content);
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
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/router.js");


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

  return `<h1 class="site-title">UI/UX Developer</h1><div class="projects-overview">${overviewHTML}</div>`;
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

      history.pushState({}, '', `/${urlSaveProjectName}`); // Update the URL

      // Call the router
      (0,_router__WEBPACK_IMPORTED_MODULE_0__.router)();

      // Set scroll position to the top of the browser window
      window.scroll(0, 0);
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
/* harmony export */   defaultHandler: () => (/* binding */ defaultHandler)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");
/* harmony import */ var _projectsOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsOverview */ "./src/projectsOverview.js");
/* harmony import */ var _singleProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./singleProject */ "./src/singleProject.js");





const defaultHandler = async (path) => {
  const projectName = path.split('/')[1]; // Assuming paths like "/projectName"
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();
  const project = data.projects.find(
    (project) => (0,_projectsOverview__WEBPACK_IMPORTED_MODULE_2__.encodeProjectName)(project.projectName) === projectName
  );

  if (project) {
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', (0,_singleProject__WEBPACK_IMPORTED_MODULE_3__.showSingleProject)(project));
    /* document.getElementById('content').innerHTML = showSingleProject(project); */
  } else {
    // No project found, display a generic 404 page
    document.getElementById('content').innerHTML = '<h1>404 Not Found</h1>';
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
/* harmony import */ var _routeHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routeHandlers */ "./src/routeHandlers.js");


const routes = {};

const route = function (path, handler) {
  routes[path] = handler;
};

const router = function () {
  const urlPath = window.location.pathname || '/';
  // First, check for static routes
  if (routes[urlPath]) {
    routes[urlPath]();
  } else {
    // If no static route matches, try dynamic project loading
    (0,_routeHandlers__WEBPACK_IMPORTED_MODULE_0__.defaultHandler)(urlPath);
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
const showSingleProject = function (project) {
  // Check whether project data is available
  if (!project) {
    console.error('No project data available.');
    return '';
  }

  // Generate HTML Code for the single project page
  const singleProjectSkills = project.skills
    .map((skill) => {
      return `<li class="skill-tag">${skill}</li>`;
    })
    .join('');

  const singleProjectElements = project.elements
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
          const mediaElements = element.content
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
            ${mediaElements}
            </div>`;
      }
    })
    .join('');

  return `<div id="${project.id}" class="single-project"><h2>${project.projectName}</h2><section class="skills-and-tools"><ul><span>Skills/Tools:</span>${singleProjectSkills}</ul></section><section class="media-elements">${singleProjectElements}</section></div>`;
};


/***/ }),

/***/ "./src/fonts/Inter-VariableFont_slnt,wght.ttf":
/*!****************************************************!*\
  !*** ./src/fonts/Inter-VariableFont_slnt,wght.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd92fad4db4a1ca8a7ea.ttf";

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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _projectsOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsOverview */ "./src/projectsOverview.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/router.js");





const displayProjects = async function () {
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.loadData)();

  if (data) {
    console.log('Displaying projects...');
    const projectsOverviewHTML = (0,_projectsOverview__WEBPACK_IMPORTED_MODULE_2__.createProjectsOverview)(data.projects);
    document.getElementById('content').innerHTML = projectsOverviewHTML;
    (0,_projectsOverview__WEBPACK_IMPORTED_MODULE_2__.handleClickOnProjectTeasers)(data.projects);
  }
};

(0,_router__WEBPACK_IMPORTED_MODULE_3__.route)('/', displayProjects); // This needs to be called before router()
(0,_router__WEBPACK_IMPORTED_MODULE_3__.route)('/about', () => {
  const aboutContent = `
    <h1>About Us</h1>
    <p>Welcome to our project overview application. Here you can find information about our projects and more.</p>
  `;
  document.getElementById('content').innerHTML = aboutContent;
});

document.addEventListener('DOMContentLoaded', _router__WEBPACK_IMPORTED_MODULE_3__.router);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNZO0FBQ3VEO0FBQ2hEOztBQUV6QztBQUNBLHFCQUFxQiwrQ0FBUTs7QUFFN0I7QUFDQTtBQUNBLGlDQUFpQyx5RUFBc0I7QUFDdkQ7QUFDQSxJQUFJLDhFQUEyQjtBQUMvQjtBQUNBOztBQUVBLDhDQUFLLHdCQUF3QjtBQUM3Qiw4Q0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDhDQUE4QywyQ0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcHJvamVjdHNPdmVydmlldy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcm91dGVIYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9zZXNzaW9uU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvLi9zcmMvc2luZ2xlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcm9iZXJ0YXJuaW5nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JvYmVydGFybmluZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yb2JlcnRhcm5pbmcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGUtdmFyaWF0aW9uc1wiKTtcbn1cbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMGQwZDBkO1xuICAtLWZvbnQtc2l6ZS1uYXY6IGNsYW1wKDEuMjVyZW0sIDAuNTh2dyArIDEuMTNyZW0sIDEuNzVyZW0pO1xuICAtLWZvbnQtc2l6ZS10ZXh0OiBjbGFtcCgxLjM4cmVtLCAwLjg3dncgKyAxLjJyZW0sIDIuMTNyZW0pO1xuICAtLWZvbnQtc2l6ZS1oMTogY2xhbXAoNXJlbSwgNi41MnZ3ICsgMy43cmVtLCAxMC42M3JlbSk7XG4gIC0tZm9udC1zaXplLWgyOiBjbGFtcCgyLjVyZW0sIDMuNjJ2dyArIDEuNzhyZW0sIDUuNjNyZW0pO1xuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6IGNsYW1wKDFyZW0sIDAuMTR2dyArIDAuOTdyZW0sIDEuMTNyZW0pO1xuICAtLWZvbnQtd2VpZ2h0LXRleHQ6IDUwMDtcbiAgLS1mb250LXdlaWdodC1oMTogMzcwO1xuICAtLWZsZXgtZ2FwLW5hdjogY2xhbXAoMS44OHJlbSwgMi45dncgKyAxLjNyZW0sIDQuMzhyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6IGNsYW1wKDM3LjVyZW0sIDIxLjc0dncgKyAzMy4xNXJlbSwgNTYuMjVyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6IGNsYW1wKDAuNjNyZW0sIDAuMzZ2dyArIDAuNTVyZW0sIDAuOTRyZW0pO1xuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzI6IGNsYW1wKDEuMjVyZW0sIDAuMzZ2dyArIDEuMThyZW0sIDEuNTZyZW0pO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmgxLFxuaDIge1xuICBtYXJnaW46IDA7XG59XG5cbmgxIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1oMSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oMSk7XG4gIGxpbmUtaGVpZ2h0OiA5MCU7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xuICBmb250LXdlaWdodDogNDcwO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbn1cblxuaDMsXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogMTQwJTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbn1cblxucCArIHAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmltZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXgtd2lkdGg6IDE3MDBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMDtcbn1cbmhlYWRlciBuYXYge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaGVhZGVyIG5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tZmxleC1nYXAtbmF2KTtcbiAgbWFyZ2luOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1uYXYpO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogODBweDtcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gIG1hcmdpbjogNzBweCAwIDA7XG59XG5cbi5wcm9qZWN0cy1vdmVydmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTAwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9qZWN0cy1vdmVydmlldyBhcnRpY2xlIHAge1xuICBtYXgtd2lkdGg6IDg2NHB4O1xufVxuXG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luOiAwIDAgMjVweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpbmdsZS1wcm9qZWN0IC5za2lsbHMtYW5kLXRvb2xzIHVsIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGV4dCk7XG59XG4uc2luZ2xlLXByb2plY3QgLnNraWxscy1hbmQtdG9vbHMgdWwgLnNraWxsLXRhZyB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxKSB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyKTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc2tpbGwtdGFnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uc2luZ2xlLXByb2plY3QgLnRleHQge1xuICBwYWRkaW5nOiAxMDBweCAwO1xufVxuLnNpbmdsZS1wcm9qZWN0IC50ZXh0IHAge1xuICB3aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XG59XG4uc2luZ2xlLXByb2plY3QgLm1lZGlhLWVsZW1lbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0IC50d28tY29sdW1uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEVBQUE7QUFGRjtBQXdDQTtFQUNFLHdCQUFBO0VBRUEsMERBQUE7RUFDQSwwREFBQTtFQUNBLHNEQUFBO0VBQ0Esd0RBQUE7RUFDQSw2REFBQTtFQUVBLHVCQUFBO0VBQ0EscUJBQUE7RUFFQSx1REFBQTtFQUVBLHlFQUFBO0VBQ0EsK0VBQUE7RUFDQSwrRUFBQTtBQTFDRjs7QUE4Q0E7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUEzQ0Y7O0FBOENBO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtBQTNDRjs7QUE4Q0E7O0VBRUUsU0FBQTtBQTNDRjs7QUE4Q0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFFQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUE1Q0Y7O0FBK0NBO0VBQ0UsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE3Q0Y7O0FBZ0RBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0VBRUEsaUJBQUE7RUFDQSxnQ0FBQTtBQTlDRjs7QUFpREE7RUFDRSxnQkFBQTtBQTlDRjs7QUFpREE7RUFDRSxnQkFBQTtBQTlDRjs7QUFpREE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQTlDRjs7QUFpREE7O0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBOUNGOztBQWtEQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSxnQkFBQTtBQWhERjtBQWtERTtFQUNFLGdCQUFBO0FBaERKO0FBa0RJO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0VBRUEsU0FBQTtFQUVBLGdCQUFBO0VBQ0EsK0JBQUE7QUFsRE47O0FBd0RBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF0REY7O0FBMERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUVBLFNBQUE7QUF4REY7QUEyREk7RUFDRSxnQkFBQTtBQXpETjs7QUFnRUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtBQTlESjtBQWdFSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0FBL0ROO0FBaUVNO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0FBL0RSO0FBa0VNO0VBQ0UsY0FBQTtFQUNBLDRGQUFBO0VBRUEscUNBQUE7RUFDQSxnQkFBQTtFQUVBLHNDQUFBO0VBQ0EsbUJBQUE7QUFsRVI7QUF1RUU7RUFDRSxnQkFBQTtBQXJFSjtBQXVFSTtFQUNFLHVDQUFBO0FBckVOO0FBeUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQXZFSjtBQTBFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUF4RUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnc2FzczptYXRoJztcXG5cXG4vLyBGb250IGZhY2VcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSW50ZXInO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDEwMCA5MDA7IC8vIFN1cHBvcnRzIGEgcmFuZ2UgZnJvbSBUaGluICgxMDApIHRvIEJsYWNrICg5MDApXFxuICBmb250LWRpc3BsYXk6IHN3YXA7IC8vIE9wdGlvbmFsIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZS12YXJpYXRpb25zJyk7XFxufVxcblxcbi8vIEZvbnQgc2l6ZSBjYWxjdWxhdGlvbiB3aXQgY2xhbXAoKVxcbiRkZWZhdWx0LW1pbi1icDogMzIwcHg7XFxuJGRlZmF1bHQtbWF4LWJwOiAxNzAwcHg7XFxuXFxuQGZ1bmN0aW9uIHJvdW5kKCRudW1iZXIsICRkZWNpbWFsczogMCkge1xcbiAgJG46IDE7XFxuICBAaWYgJGRlY2ltYWxzID4gMCB7XFxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGRlY2ltYWxzIHtcXG4gICAgICAkbjogJG4gKiAxMDtcXG4gICAgfVxcbiAgfVxcbiAgQHJldHVybiBtYXRoLmRpdihtYXRoLnJvdW5kKCRudW1iZXIgKiAkbiksICRuKTtcXG59XFxuXFxuQGZ1bmN0aW9uIHB4LXRvLXJlbSgkcHgpIHtcXG4gICRyZW1zOiBtYXRoLmRpdigkcHgsIDE2cHgpICogMXJlbTtcXG4gIEByZXR1cm4gJHJlbXM7XFxufVxcblxcbkBmdW5jdGlvbiBmbHVpZChcXG4gICRtaW4tc2l6ZSxcXG4gICRtYXgtc2l6ZSxcXG4gICRtaW4tYnJlYWtwb2ludDogJGRlZmF1bHQtbWluLWJwLFxcbiAgJG1heC1icmVha3BvaW50OiAkZGVmYXVsdC1tYXgtYnAsXFxuICAkdW5pdDogdndcXG4pIHtcXG4gICRzbG9wZTogbWF0aC5kaXYoJG1heC1zaXplIC0gJG1pbi1zaXplLCAkbWF4LWJyZWFrcG9pbnQgLSAkbWluLWJyZWFrcG9pbnQpO1xcbiAgJHNsb3BlLXRvLXVuaXQ6IHJvdW5kKCRzbG9wZSAqIDEwMCwgMik7XFxuICAkaW50ZXJjZXB0LXJlbTogcm91bmQocHgtdG8tcmVtKCRtaW4tc2l6ZSAtICRzbG9wZSAqICRtaW4tYnJlYWtwb2ludCksIDIpO1xcbiAgJG1pbi1zaXplLXJlbTogcm91bmQocHgtdG8tcmVtKCRtaW4tc2l6ZSksIDIpO1xcbiAgJG1heC1zaXplLXJlbTogcm91bmQocHgtdG8tcmVtKCRtYXgtc2l6ZSksIDIpO1xcbiAgQHJldHVybiBjbGFtcCgjeyRtaW4tc2l6ZS1yZW19LCAjeyRzbG9wZS10by11bml0fSN7JHVuaXR9ICsgI3skaW50ZXJjZXB0LXJlbX0sICN7JG1heC1zaXplLXJlbX0pO1xcbn1cXG5cXG4vLyBDdXN0b20gcHJvcGVydGllc1xcbjpyb290IHtcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzBkMGQwZDtcXG5cXG4gIC0tZm9udC1zaXplLW5hdjogI3tmbHVpZCgyMHB4LCAyOHB4KX07XFxuICAtLWZvbnQtc2l6ZS10ZXh0OiAje2ZsdWlkKDIycHgsIDM0cHgpfTtcXG4gIC0tZm9udC1zaXplLWgxOiAje2ZsdWlkKDgwcHgsIDE3MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1oMjogI3tmbHVpZCg0MHB4LCA5MHB4KX07XFxuICAtLWZvbnQtc2l6ZS1za2lsbC10YWc6ICN7Zmx1aWQoMTZweCwgMThweCl9O1xcblxcbiAgLS1mb250LXdlaWdodC10ZXh0OiA1MDA7XFxuICAtLWZvbnQtd2VpZ2h0LWgxOiAzNzA7XFxuXFxuICAtLWZsZXgtZ2FwLW5hdjogI3tmbHVpZCgzMHB4LCA3MHB4KX07XFxuXFxuICAtLXNpbmdsZS1wcm9qZWN0LXRleHQtd2lkdGg6ICN7Zmx1aWQoNjAwcHgsIDkwMHB4KX07XFxuICAtLXNpbmdsZS1wcm9qZWN0LXNraWxscy10YWctcGFkZGluZzE6ICN7Zmx1aWQoMTBweCwgMTVweCl9O1xcbiAgLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyOiAje2ZsdWlkKDIwcHgsIDI1cHgpfTtcXG59XFxuXFxuLy8gR2VuZXJhbCBzdHlsZXMgZm9yIHRoZSB3ZWJzaXRlXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxufVxcblxcbmgxLFxcbmgyIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1hcmdpbjogMDtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWgxKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1oMSk7XFxuICBsaW5lLWhlaWdodDogOTAlO1xcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDAgMCAyMHB4O1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtaDIpO1xcbiAgZm9udC13ZWlnaHQ6IDQ3MDtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oMyxcXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuXFxuICBsaW5lLWhlaWdodDogMTQwJTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXRleHQpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDIwcHggMCAwO1xcbn1cXG5cXG5wICsgcCB7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG5maWd1cmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8vIFRoZSBsb2dvICsgbmF2aWdhdGlvblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgbWF4LXdpZHRoOiAxNzAwcHg7XFxuICBtYXJnaW46IDIwcHggMCAwO1xcblxcbiAgbmF2IHtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiB2YXIoLS1mbGV4LWdhcC1uYXYpO1xcblxcbiAgICAgIG1hcmdpbjogMDtcXG5cXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW5hdik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gR2VuZXJhbCBzdHlsZXMgZm9yIHRoZSBjb250ZW50XFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDgwcHg7XFxuXFxuICBtYXgtd2lkdGg6IDE3MDBweDtcXG4gIG1hcmdpbjogNzBweCAwIDA7XFxufVxcblxcbi8vIFByb2plY3Qgb3ZlcnZpZXdcXG4ucHJvamVjdHMtb3ZlcnZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwMHB4O1xcblxcbiAgbWFyZ2luOiAwO1xcblxcbiAgYXJ0aWNsZSB7XFxuICAgIHAge1xcbiAgICAgIG1heC13aWR0aDogODY0cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLy8gU2luZ2xlIHByb2plY3QgcGFnZVxcbi5zaW5nbGUtcHJvamVjdCB7XFxuICAuc2tpbGxzLWFuZC10b29scyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBtYXJnaW46IDAgMCAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXG5cXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XFxuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtdGV4dCk7XFxuICAgICAgfVxcblxcbiAgICAgIC5za2lsbC10YWcge1xcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcxKSB2YXIoLS1zaW5nbGUtcHJvamVjdC1za2lsbHMtdGFnLXBhZGRpbmcyKTtcXG5cXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNraWxsLXRhZyk7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcblxcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnRleHQge1xcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xcblxcbiAgICBwIHtcXG4gICAgICB3aWR0aDogdmFyKC0tc2luZ2xlLXByb2plY3QtdGV4dC13aWR0aCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tZWRpYS1lbGVtZW50cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIC50d28tY29sdW1uIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgfSBmcm9tICcuL3Nlc3Npb25TdG9yYWdlJztcblxuLyogXG5Mb2FkcyBhIEpTT04gZmlsZSB3aXRoIGFsbCBkYXRhIGZyb20gdGhlIHNlcnZlciBhbmQgc2F2ZXMgaXRcbnRvIHNlc3Npb25TdG9yYWdlIGlmIGF2YWlsYWJsZSwgc28gdGhlIGRhdGEgaXMgY2FjaGVkIGZvciBmdXJ0aGVyIHVzZS5cbiovXG5leHBvcnQgY29uc3QgbG9hZERhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnNvbGUubG9nKCdJbml0aWFsaXppbmcuLi4nKTtcbiAgbGV0IGRhdGE7XG5cbiAgLy8gR2V0IGRhdGEgZnJvbSBzZXNzaW9uU3RvcmFnZSBpZiBhdmFpbGFibGVcbiAgaWYgKGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUpIHtcbiAgICBjb25zb2xlLmxvZygnc2Vzc2lvblN0b3JhZ2UgYXZhaWxhYmxlLi4uJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpKTtcblxuICAgIGlmIChzdG9yZWREYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZygnTG9hZGVkIHByb2plY3RzIGZyb20gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICAgIGRhdGEgPSBzdG9yZWREYXRhO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBkYXRhIGlzIG5vdCBhdmFpbGFibGUgaW4gc2Vzc2lvblN0b3JhZ2UsIGZldGNoIHRoZSBkYXRhIGZyb20gc2VydmVyXG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YS4uLicpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9kYXRhL2RhdGEuanNvbicpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGlzIGluIHRoZSAyMDAtMjk5IHJhbmdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAvLyBTYXZlIGZldGNoZWQgZGF0YSB0byBzZXNzaW9uU3RvcmFnZVxuICAgIGlmIChpc1Nlc3Npb25TdG9yYWdlQXZhaWxhYmxlKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdkYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgY29uc29sZS5sb2coJ1NhdmVkIGRhdGEgdG8gc2Vzc2lvblN0b3JhZ2UnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG4iLCJleHBvcnQgY29uc3Qgc2V0Q29udGVudCA9IGZ1bmN0aW9uIChpZCwgY29udGVudCkge1xuICBjb25zdCBIVE1MZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICByZXR1cm4gKEhUTUxlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQpO1xufTtcbiIsImltcG9ydCB7IHJvdXRlLCByb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cbi8qXG5FbmNvZGVzIHRoZSBcInByb2plY3ROYW1lXCIgdmFsdWUgdG8gc2FmZWx5IGluY2x1ZGUgaXQgaW4gdGhlIFVSTCBwYXRoIFxuKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVQcm9qZWN0TmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobmFtZSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG5HZW5lcmF0ZXMgdGhlIEhUTUwgY29kZSBmb3IgYSBwcm9qZWN0IG92ZXJ2aWV3IHBhZ2UuXG5UaGUgZnVuY3Rpb24gaXRlcmF0ZXMgb3ZlciBhbiBhcnJheSBvZiBwcm9qZWN0IG9iamVjdHMgYW5kXG5nZW5lcmF0ZXMgSFRNTCBjb2RlIGZvciB0aGUgcHJvcGVydGllcyBvZiB0aG9zZSBvYmplY3RzLlxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3ID0gZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3RzKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvamVjdHMgZGF0YSBhdmFpbGFibGUgdG8gY3JlYXRlIG92ZXJ2aWV3LicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgY29kZSBmb3IgdGhlIHByb2plY3RzIG92ZXJ2aWV3IHBhZ2VcbiAgY29uc3Qgb3ZlcnZpZXdIVE1MID0gcHJvamVjdHNcbiAgICAubWFwKChwcm9qZWN0KSA9PiB7XG4gICAgICAvLyBFbmNvZGUgdGhlIFwicHJvamVjdE5hbWVcIiB2YWx1ZSB0byBzYWZlbHkgaW5jbHVkZSBpdCBpbiB0aGUgVVJMIHBhdGhcbiAgICAgIGNvbnN0IHVybFNhdmVQcm9qZWN0TmFtZSA9IGVuY29kZVByb2plY3ROYW1lKHByb2plY3QucHJvamVjdE5hbWUpO1xuXG4gICAgICByZXR1cm4gYDxhIGhyZWY9XCIvJHt1cmxTYXZlUHJvamVjdE5hbWV9XCIgaWQ9XCIke3Byb2plY3QuaWR9XCI+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgIDxmaWd1cmU+XG4gICAgICA8aW1nIHNyYz1cIiR7cHJvamVjdC5pbWFnZX1cIiBhbHQ9XCIke3Byb2plY3QucHJvamVjdE5hbWV9XCI+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICAgIDxoMz4ke3Byb2plY3QucHJvamVjdE5hbWV9PC9oMz5cbiAgICAgIDxwPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8L2E+YDtcbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICByZXR1cm4gYDxoMSBjbGFzcz1cInNpdGUtdGl0bGVcIj5VSS9VWCBEZXZlbG9wZXI8L2gxPjxkaXYgY2xhc3M9XCJwcm9qZWN0cy1vdmVydmlld1wiPiR7b3ZlcnZpZXdIVE1MfTwvZGl2PmA7XG59O1xuXG4vKlxuTG9va3MgZm9yIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgYSBnaXZlbiBJRCB3aXRoaW4gYW4gYXJyYXkgb2YgcHJvamVjdCBvYmplY3RzLlxuVGhlIElEIGlzIGEgcHJvcGVydHkgb2YgZXZlcnkgcHJvamVjdCBvYmplY3QgaW4gdGhlIGFycmF5LlxuKi9cbmNvbnN0IGZpbmRQcm9qZWN0QnlJZCA9IGZ1bmN0aW9uIChwcm9qZWN0QXJyYXksIGlkKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBOdW1iZXIoaWQpKTtcblxuICByZXR1cm4gcHJvamVjdEFycmF5W3Byb2plY3RJbmRleF07XG59O1xuXG4vKlxuQWRkcyBhIGNsaWNrIGV2ZW50IHRvIHRoZSBwcm9qZWN0IHRlYXNlcnMgb24gdGhlIHByb2plY3Qgb3ZlcnZpZXcgcGFnZS5cblRoZSBldmVudCB0cmllcyB0byBtYXRjaCB0aGUgaWQgb2YgdGhlIGNsaWNrZWQgdGVhc2VyIHdpdGggYSBwcm9qZWN0J3MgSURcbmZyb20gYSBnaXZlbiBbcHJvamVjdHNdIGFycmF5LCBpbnNlcnRzIHRoYXQgcHJvamVjdCBuYW1lIGluIHRoZSB1cmwgYW5kIGxvZHNcbnRoZSByb3V0ZXIgdG8gaGFuZGxlIHRoZSBsb2FkaW5nIG9mIHRoZSBjb250ZW50LlxuKi9cbmV4cG9ydCBjb25zdCBoYW5kbGVDbGlja09uUHJvamVjdFRlYXNlcnMgPSBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgY29uc3QgYWxsUHJvamVjdFRlYXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0cy1vdmVydmlldyBhJyk7XG5cbiAgYWxsUHJvamVjdFRlYXNlci5mb3JFYWNoKCh0ZWFzZXIpID0+XG4gICAgdGVhc2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIGNvbnN0IHByb2plY3REYXRhID0gZmluZFByb2plY3RCeUlkKHByb2plY3RzLCBwcm9qZWN0SWQpO1xuICAgICAgY29uc3QgdXJsU2F2ZVByb2plY3ROYW1lID0gZW5jb2RlUHJvamVjdE5hbWUocHJvamVjdERhdGEucHJvamVjdE5hbWUpO1xuXG4gICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIGAvJHt1cmxTYXZlUHJvamVjdE5hbWV9YCk7IC8vIFVwZGF0ZSB0aGUgVVJMXG5cbiAgICAgIC8vIENhbGwgdGhlIHJvdXRlclxuICAgICAgcm91dGVyKCk7XG5cbiAgICAgIC8vIFNldCBzY3JvbGwgcG9zaXRpb24gdG8gdGhlIHRvcCBvZiB0aGUgYnJvd3NlciB3aW5kb3dcbiAgICAgIHdpbmRvdy5zY3JvbGwoMCwgMCk7XG4gICAgfSlcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBzZXRDb250ZW50IH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMnO1xuaW1wb3J0IHsgZW5jb2RlUHJvamVjdE5hbWUgfSBmcm9tICcuL3Byb2plY3RzT3ZlcnZpZXcnO1xuaW1wb3J0IHsgc2hvd1NpbmdsZVByb2plY3QgfSBmcm9tICcuL3NpbmdsZVByb2plY3QnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEhhbmRsZXIgPSBhc3luYyAocGF0aCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHBhdGguc3BsaXQoJy8nKVsxXTsgLy8gQXNzdW1pbmcgcGF0aHMgbGlrZSBcIi9wcm9qZWN0TmFtZVwiXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuICBjb25zdCBwcm9qZWN0ID0gZGF0YS5wcm9qZWN0cy5maW5kKFxuICAgIChwcm9qZWN0KSA9PiBlbmNvZGVQcm9qZWN0TmFtZShwcm9qZWN0LnByb2plY3ROYW1lKSA9PT0gcHJvamVjdE5hbWVcbiAgKTtcblxuICBpZiAocHJvamVjdCkge1xuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBzaG93U2luZ2xlUHJvamVjdChwcm9qZWN0KSk7XG4gICAgLyogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBzaG93U2luZ2xlUHJvamVjdChwcm9qZWN0KTsgKi9cbiAgfSBlbHNlIHtcbiAgICAvLyBObyBwcm9qZWN0IGZvdW5kLCBkaXNwbGF5IGEgZ2VuZXJpYyA0MDQgcGFnZVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gJzxoMT40MDQgTm90IEZvdW5kPC9oMT4nO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgZGVmYXVsdEhhbmRsZXIgfSBmcm9tICcuL3JvdXRlSGFuZGxlcnMnO1xuXG5jb25zdCByb3V0ZXMgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlID0gZnVuY3Rpb24gKHBhdGgsIGhhbmRsZXIpIHtcbiAgcm91dGVzW3BhdGhdID0gaGFuZGxlcjtcbn07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVybFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuICAvLyBGaXJzdCwgY2hlY2sgZm9yIHN0YXRpYyByb3V0ZXNcbiAgaWYgKHJvdXRlc1t1cmxQYXRoXSkge1xuICAgIHJvdXRlc1t1cmxQYXRoXSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIHN0YXRpYyByb3V0ZSBtYXRjaGVzLCB0cnkgZHluYW1pYyBwcm9qZWN0IGxvYWRpbmdcbiAgICBkZWZhdWx0SGFuZGxlcih1cmxQYXRoKTtcbiAgfVxufTtcblxuLy8gSGFuZGxlIGJyb3dzZXIgbmF2aWdhdGlvbiBldmVudHNcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHJvdXRlcik7XG4iLCIvKlxuVGVzdHMgaWYgc2Vzc2lvblN0b3JhZ2UgaXMgYXZhaWxhYmxlIGluIHRoZSB1c2VycyBicm93c2VyXG4qL1xuZXhwb3J0IGNvbnN0IGlzU2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdCA9ICd0ZXN0LXN0b3JhZ2UnO1xuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBzaG93U2luZ2xlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvamVjdCBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2plY3QpIHtcbiAgICBjb25zb2xlLmVycm9yKCdObyBwcm9qZWN0IGRhdGEgYXZhaWxhYmxlLicpO1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8vIEdlbmVyYXRlIEhUTUwgQ29kZSBmb3IgdGhlIHNpbmdsZSBwcm9qZWN0IHBhZ2VcbiAgY29uc3Qgc2luZ2xlUHJvamVjdFNraWxscyA9IHByb2plY3Quc2tpbGxzXG4gICAgLm1hcCgoc2tpbGwpID0+IHtcbiAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwic2tpbGwtdGFnXCI+JHtza2lsbH08L2xpPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgY29uc3Qgc2luZ2xlUHJvamVjdEVsZW1lbnRzID0gcHJvamVjdC5lbGVtZW50c1xuICAgIC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgIDx2aWRlbyBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2VsZW1lbnQuY29udGVudH1cIj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgPHA+JHtlbGVtZW50LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY2FzZSAndHdvLWNvbHVtbic6XG4gICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgdHlwZSBpcyBcInR3by1jb2x1bW5cIiB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciB0aGUgZWxlbWVudCdzXG4gICAgICAgICAgLy8gXCJjb250ZW50XCIgcHJvcGVydHkgd2hpY2ggaG9sZHMgYW4gYXJyYXkgb2YgbWVkaWEgb2JqZWN0cyBcImltYWdlXCIgb3IgXCJ2aWRlb1wiXG4gICAgICAgICAgY29uc3QgbWVkaWFFbGVtZW50cyA9IGVsZW1lbnQuY29udGVudFxuICAgICAgICAgICAgLm1hcCgobWVkaWEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG1lZGlhLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCIke21lZGlhLnR5cGV9XCI+XG4gICAgICAgICAgICAgICAgPHZpZGVvIHNyYz1cIiR7bWVkaWEuY29udGVudH1cIiBhdXRvcGxheSBtdXRlZCBsb29wPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobWVkaWEudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7bWVkaWEudHlwZX1cIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWRpYS5jb250ZW50fVwiPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxwPlVuc3VwcG9ydGVkIG1lZGlhIGZvcm1hdC48L3A+YDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcblxuICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcyA9XCIke2VsZW1lbnQudHlwZX1cIj5cbiAgICAgICAgICAgICR7bWVkaWFFbGVtZW50c31cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJyk7XG5cbiAgcmV0dXJuIGA8ZGl2IGlkPVwiJHtwcm9qZWN0LmlkfVwiIGNsYXNzPVwic2luZ2xlLXByb2plY3RcIj48aDI+JHtwcm9qZWN0LnByb2plY3ROYW1lfTwvaDI+PHNlY3Rpb24gY2xhc3M9XCJza2lsbHMtYW5kLXRvb2xzXCI+PHVsPjxzcGFuPlNraWxscy9Ub29sczo8L3NwYW4+JHtzaW5nbGVQcm9qZWN0U2tpbGxzfTwvdWw+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzPVwibWVkaWEtZWxlbWVudHNcIj4ke3NpbmdsZVByb2plY3RFbGVtZW50c308L3NlY3Rpb24+PC9kaXY+YDtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgeyBsb2FkRGF0YSB9IGZyb20gJy4vZGF0YSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3LCBoYW5kbGVDbGlja09uUHJvamVjdFRlYXNlcnMgfSBmcm9tICcuL3Byb2plY3RzT3ZlcnZpZXcnO1xuaW1wb3J0IHsgcm91dGUsIHJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgbG9hZERhdGEoKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdEaXNwbGF5aW5nIHByb2plY3RzLi4uJyk7XG4gICAgY29uc3QgcHJvamVjdHNPdmVydmlld0hUTUwgPSBjcmVhdGVQcm9qZWN0c092ZXJ2aWV3KGRhdGEucHJvamVjdHMpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuaW5uZXJIVE1MID0gcHJvamVjdHNPdmVydmlld0hUTUw7XG4gICAgaGFuZGxlQ2xpY2tPblByb2plY3RUZWFzZXJzKGRhdGEucHJvamVjdHMpO1xuICB9XG59O1xuXG5yb3V0ZSgnLycsIGRpc3BsYXlQcm9qZWN0cyk7IC8vIFRoaXMgbmVlZHMgdG8gYmUgY2FsbGVkIGJlZm9yZSByb3V0ZXIoKVxucm91dGUoJy9hYm91dCcsICgpID0+IHtcbiAgY29uc3QgYWJvdXRDb250ZW50ID0gYFxuICAgIDxoMT5BYm91dCBVczwvaDE+XG4gICAgPHA+V2VsY29tZSB0byBvdXIgcHJvamVjdCBvdmVydmlldyBhcHBsaWNhdGlvbi4gSGVyZSB5b3UgY2FuIGZpbmQgaW5mb3JtYXRpb24gYWJvdXQgb3VyIHByb2plY3RzIGFuZCBtb3JlLjwvcD5cbiAgYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5pbm5lckhUTUwgPSBhYm91dENvbnRlbnQ7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJvdXRlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=