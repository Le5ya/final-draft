/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateFinalDraft"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalCallback */ \"./src/modules/modalCallback.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ourServices */ \"./src/modules/ourServices.js\");\n/* harmony import */ var _modules_help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/help */ \"./src/modules/help.js\");\n/* harmony import */ var _modules_questions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/questions */ \"./src/modules/questions.js\");\n/* harmony import */ var _modules_chevronUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/chevronUp */ \"./src/modules/chevronUp.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n(0,_modules_modalCallback__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_help__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_questions__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_chevronUp__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)();\n\n//# sourceURL=webpack://FinalDraft/./src/index.js?");

/***/ }),

/***/ "./src/modules/chevronUp.js":
/*!**********************************!*\
  !*** ./src/modules/chevronUp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar chevronUp = function chevronUp() {\n  var up = document.querySelector('.up'),\n      services = document.getElementById('services'),\n      topSlider = document.querySelector('.top-slider');\n  up.addEventListener('click', function () {\n    up.style.zIndex = -1;\n    window.scrollTo({\n      top: 0,\n      left: 0,\n      behavior: 'smooth'\n    });\n  });\n  window.addEventListener('scroll', function () {\n    var coords = services.getBoundingClientRect();\n\n    if (coords.top < 0 && coords.top > -300) {\n      up.style.zIndex = 300;\n    } else {\n      up.style.zIndex = -1;\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronUp);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/chevronUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b54c1a5893f3f9b4436")
/******/ })();
/******/ 
/******/ }
);