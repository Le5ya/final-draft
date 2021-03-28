/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateFinalDraft"]("main",{

/***/ "./src/modules/chevronUp.js":
/*!**********************************!*\
  !*** ./src/modules/chevronUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar chevronUp = function chevronUp() {\n  var up = document.querySelector('.up'),\n      services = document.getElementById('services');\n  up.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      left: 0,\n      behavior: 'smooth'\n    }); // up.style.zIndex = -1;\n    //  console.log(services.getBoundingClientRect());\n    //  console.log(services.getBoundingClientRect().top);\n  });\n  window.addEventListener('scroll', function () {\n    console.log(pageYOffset);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronUp);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/chevronUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b9b88cf99e63ff7dc24")
/******/ })();
/******/ 
/******/ }
);