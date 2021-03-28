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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar questions = function questions() {\n  var accordeon = document.querySelector('.accordeon'),\n      element = accordeon.querySelectorAll('.element'),\n      elementContent = accordeon.querySelectorAll('.element-content'),\n      title = document.querySelectorAll('.title'); // console.log(title[0].closest('.element'));\n  // console.log(elementContent[0]);\n\n  var activeElem = function activeElem() {\n    elementContent.forEach(function (item) {\n      if (item.closest('.element').classList.contains('active')) {\n        item.style.display = 'block';\n      } else {\n        item.style.display = 'none';\n      }\n\n      ;\n    });\n  };\n\n  console.log(element.contains.classList('active'));\n  title.forEach(function (item) {\n    // fifthWheel();\n    item.addEventListener('click', function () {\n      item.closest('.element').classList.add('active');\n      activeElem();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questions);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/questions.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("784b6371ade9e8813d2d")
/******/ })();
/******/ 
/******/ }
);