/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateFinalDraft"]("main",{

/***/ "./src/modules/questions.js":
/*!**********************************!*\
  !*** ./src/modules/questions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar questions = function questions() {\n  var accordeon = document.querySelector('.accordeon'),\n      element = accordeon.querySelectorAll('.element'),\n      elementContent = accordeon.querySelectorAll('.element-content'),\n      title = document.querySelectorAll('.title'); // console.log(title[0].closest('.element'));\n  // console.log(elementContent[0]);\n\n  elementContent.forEach(item, function () {\n    console.log(item.closest('.element'));\n  });\n  title.forEach(function (item) {\n    item.addEventListener('click', function () {\n      this.closest('.element').classList.add('active');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questions);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/questions.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e7a8c86692593abd020d")
/******/ })();
/******/ 
/******/ }
);