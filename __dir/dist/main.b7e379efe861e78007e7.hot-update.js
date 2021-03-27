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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalCallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalCallback */ \"./src/modules/modalCallback.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ourServices */ \"./src/modules/ourServices.js\");\n\n\n\n\n(0,_modules_modalCallback__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://FinalDraft/./src/index.js?");

/***/ }),

/***/ "./src/modules/modalCallback.js":
/*!**************************************!*\
  !*** ./src/modules/modalCallback.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar modalCallback = function modalCallback() {\n  var callbackBtn = document.querySelectorAll('.callback-btn')[1],\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalClose = document.querySelector('.modal-close');\n\n  var close = function close() {\n    modalOverlay.style.display = 'none';\n    modalCallback.style.display = 'none';\n  };\n\n  callbackBtn.addEventListener('click', function () {\n    modalOverlay.style.display = 'block';\n    modalCallback.style.display = 'block';\n  });\n  modalClose.addEventListener('click', close);\n  modalOverlay.addEventListener('click', close);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalCallback);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/modalCallback.js?");

/***/ }),

/***/ "./src/modules/ourServices.js":
/*!************************************!*\
  !*** ./src/modules/ourServices.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ourServices = function ourServices() {\n  var servicesElements = document.querySelector('.services-elements'),\n      element = document.querySelectorAll('.element'),\n      arrowLeft = servicesElements.querySelector('.arrow-left'),\n      arrowRight = document.querySelector('.arrow-right'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalClose = document.querySelector('.modal-close');\n  var invite = document.createElement('button');\n  document.body.appendChild(invite);\n  invite.className = 'invite';\n  invite.innerHTML = 'Оформить заявку';\n  invite.style.fontSize = '20px';\n  invite.style.textTransform = 'uppercase';\n  invite.style.fontWeight = 'bold';\n  invite.style.position = 'fixed';\n  invite.style.padding = '20px';\n  servicesElements.addEventListener('mouseover', function (e) {\n    var target = event.target;\n    var coords = target.getBoundingClientRect();\n    var top = coords.top - invite.offsetHeight + 100;\n    var left = coords.left + (target.offsetWidth - invite.offsetWidth) / 2;\n    invite.style.left = left + 'px';\n    invite.style.top = top + 'px';\n  });\n\n  var close = function close() {\n    modalOverlay.style.display = 'none';\n    modalCallback.style.display = 'none';\n  };\n\n  invite.addEventListener('click', function () {\n    modalOverlay.style.display = 'block';\n    modalCallback.style.display = 'block';\n  });\n  modalClose.addEventListener('click', close);\n  modalOverlay.addEventListener('click', close);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/ourServices.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scroll = function scroll() {\n  var topMenu = document.querySelector('.top-menu'),\n      topItems = topMenu.querySelectorAll('ul>li'),\n      a = topMenu.querySelectorAll('li>a');\n\n  var _loop = function _loop(i) {\n    topItems[i].addEventListener('click', function (event) {\n      event.preventDefault();\n      var sectionID = a[i].getAttribute('href');\n      document.querySelector(sectionID).scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  };\n\n  for (var i = 0; i < topItems.length; i++) {\n    _loop(i);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.slider-top'),\n      text = document.querySelectorAll('.text'),\n      item = document.querySelectorAll('.item'),\n      table = document.querySelectorAll('.table');\n  var count = 0;\n  var idInterval = setInterval(function () {\n    setTimeout(function () {\n      item[0].setAttribute('style', 'background: url(images/slide2.jpg) 50% 50% no-repeat; background-size: cover;');\n      setTimeout(function () {\n        item[0].setAttribute('style', 'background: url(images/slide3.jpg) 50% 50% no-repeat; background-size: cover;');\n        setTimeout(function () {\n          item[0].setAttribute('style', 'background: url(images/slide1.jpg) 50% 50% no-repeat; background-size: cover;');\n        }, 5000);\n      }, 5000);\n    }, 2000);\n  }, 12000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aaee663e977689297f9a")
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ }
);