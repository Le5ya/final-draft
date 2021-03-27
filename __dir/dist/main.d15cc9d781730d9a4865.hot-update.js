/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateFinalDraft"]("main",{

/***/ "./src/modules/ourServices.js":
/*!************************************!*\
  !*** ./src/modules/ourServices.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourServices = function ourServices() {\n  var servicesElements = document.querySelector('.services-elements'),\n      element = servicesElements.querySelectorAll('.element'),\n      imgWrapper = servicesElements.querySelectorAll('.img-wrapper'),\n      arrowLeft = document.querySelector('.arrow-left'),\n      arrowRight = document.querySelector('.arrow-right'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalClose = document.querySelector('.modal-close');\n  modalOverlay.style.display = 'block';\n\n  var close = function close() {\n    modalOverlay.style.display = 'none';\n    modalCallback.style.display = 'none';\n  };\n\n  var open = function open() {\n    modalOverlay.style.display = 'block';\n    modalCallback.style.display = 'block';\n  };\n\n  imgWrapper.forEach(function (elem) {\n    elem.addEventListener('click', open);\n  });\n  modalClose.addEventListener('click', close);\n  modalOverlay.addEventListener('click', close);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourServices);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/ourServices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("03a5329c14caef41f34c")
/******/ })();
/******/ 
/******/ }
);