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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar questions = function questions() {\n  var accordeon = document.querySelector('.accordeon'),\n      element = accordeon.querySelectorAll('.element'),\n      title = document.querySelectorAll('.title');\n  title.forEach(function (item, i, title) {\n    item.addEventListener('click', function (e) {\n      item[i].classList.remove('active');\n\n      if (element[i].contains('active')) {\n        element[i].classList.remove('active');\n      } else {\n        item[i].classList.remove('active');\n        panelItem[i].classList.remove('active');\n        bodyItem[i].classList.remove('active');\n        this.classList.add('active');\n        this.nextElementSibling.classList.add('active');\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questions);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/questions.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3e017f8e604e0a7ad854")
/******/ })();
/******/ 
/******/ }
);