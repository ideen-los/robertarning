"use strict";
(self["webpackChunkrobertarning"] = self["webpackChunkrobertarning"] || []).push([["src_profile_js"],{

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
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.js");



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
  const data = await (0,_data__WEBPACK_IMPORTED_MODULE_0__.loadData)();

  if (data) {
    console.log('Displaying profile...');
    const profileHTML = createProfile(data.profile);
    (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_1__.setContent)('content', profileHTML);
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3Byb2ZpbGVfanMuMGVmZjE1NzY0NTRkM2NhMDZhNzQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNhOztBQUV4QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxhQUFhO0FBQzdDLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QyxnQkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxnREFBZ0QsYUFBYTtBQUM3RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSwwQ0FBMEMsa0JBQWtCLE9BQU8sZ0JBQWdCO0FBQ25GOztBQUVPO0FBQ1AscUJBQXFCLCtDQUFROztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFVO0FBQ2Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JvYmVydGFybmluZy8uL3NyYy9wcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWREYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IHNldENvbnRlbnQgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcm9maWxlID0gZnVuY3Rpb24gKHByb2ZpbGVEYXRhKSB7XG4gIC8vIENoZWNrIHdoZXRoZXIgcHJvZmlsZSBkYXRhIGlzIGF2YWlsYWJsZVxuICBpZiAoIXByb2ZpbGVEYXRhKSB7XG4gICAgY29uc29sZS5lcnJvcignTm8gcHJvZmlsZSBkYXRhIGF2YWlsYWJsZS4nKTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBDcmVhdGUgcHJvZmlsZSBIVE1MXG4gIGNvbnN0IHByb2ZpbGVFbGVtZW50cyA9IHByb2ZpbGVEYXRhLmVsZW1lbnRzXG4gICAgLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgc3dpdGNoIChlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiJHtlbGVtZW50LnR5cGV9XCI+XG4gICAgICAgICAgICAgICR7ZWxlbWVudC5jb250ZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5gO1xuXG4gICAgICAgIGNhc2UgJ3R3by1jb2x1bW4nOlxuICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IHR5cGUgaXMgXCJ0d28tY29sdW1uXCIgd2UgbmVlZCB0byBpdGVyYXRlIG92ZXIgdGhlIGVsZW1lbnQnc1xuICAgICAgICAgIC8vIFwiY29udGVudFwiIHByb3BlcnR5IHdoaWNoIGhvbGRzIGFuIGFycmF5IG9mIG9iamVjdHMgdHlwZSBcInRleHRcIlxuICAgICAgICAgIGNvbnN0IHRleHRFbGVtZW50cyA9IGVsZW1lbnQuY29udGVudFxuICAgICAgICAgICAgLm1hcCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVsLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIiR7ZWwudHlwZX1cIj5cbiAgICAgICAgICAgICAgJHtlbC5jb250ZW50fVxuICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPHA+VW5zdXBwb3J0ZWQgZm9ybWF0LjwvcD5gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuXG4gICAgICAgICAgcmV0dXJuIGA8aDI+U2tpbGxzPC9oMj48ZGl2IGNsYXNzID1cIiR7ZWxlbWVudC50eXBlfVwiPlxuICAgICAgICAgICAgICAke3RleHRFbGVtZW50c31cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKTtcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJwcm9maWxlLXBhZ2VcIj48aDE+JHtwcm9maWxlRGF0YS50aXRsZX08L2gxPiR7cHJvZmlsZUVsZW1lbnRzfTwvZGl2PmA7XG59O1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVByb2ZpbGUgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2FkRGF0YSgpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ0Rpc3BsYXlpbmcgcHJvZmlsZS4uLicpO1xuICAgIGNvbnN0IHByb2ZpbGVIVE1MID0gY3JlYXRlUHJvZmlsZShkYXRhLnByb2ZpbGUpO1xuICAgIHNldENvbnRlbnQoJ2NvbnRlbnQnLCBwcm9maWxlSFRNTCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=