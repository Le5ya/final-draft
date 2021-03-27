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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourServices = function ourServices() {\n  var servicesElements = document.querySelector('.services-elements'),\n      element = servicesElements.querySelectorAll('.element'),\n      arrowLeft = document.querySelector('.arrow-left'),\n      arrowRight = document.querySelector('.arrow-right'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalClose = document.querySelector('.modal-close'); //   let invite = document.createElement('button');\n  //         document.body.appendChild(invite);\n  //        invite.className = 'invite';\n  //        invite.innerHTML = 'Оформить заявку';\n  //        invite.style.fontSize = '20px';\n  //        invite.style.textTransform = 'uppercase';\n  //        invite.style.fontWeight = 'bold';\n  //        invite.style.position = 'fixed';\n  //        invite.style.padding = '20px';\n  // servicesElements.addEventListener('mouseover', (e)=>{\n  //   let target = event.target;\n  //   let coords = target.getBoundingClientRect();\n  //   let top = coords.top - invite.offsetHeight +100;\n  //   let left = coords.left + (target.offsetWidth - invite.offsetWidth) / 2;\n  //       invite.style.left = left + 'px';\n  //       invite.style.top = top + 'px';\n  //    });\n\n  var close = function close() {\n    modalOverlay.style.display = 'none';\n    modalCallback.style.display = 'none';\n  }; //   invite.addEventListener('click', () => {\n  //     modalOverlay.style.display = 'block';\n  //     modalCallback.style.display = 'block';\n  //  });\n\n\n  modalClose.addEventListener('click', close);\n  modalOverlay.addEventListener('click', close);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourServices);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/ourServices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("70e5db9740a6203d4ee8")
/******/ })();
/******/ 
/******/ }
);