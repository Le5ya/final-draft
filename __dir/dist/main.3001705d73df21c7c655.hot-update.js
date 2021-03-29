/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateFinalDraft"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!'; // const modalCallback = document.querySelector('.modal-callback');\n\n  var form = document.forms[0],\n      formName = form.querySelectorAll('.form-control')[0],\n      formPhone = form.querySelectorAll('.form-control')[1];\n  formName.addEventListener('input', function () {\n    return formName.value = formName.value.replace(/\\w/g, '');\n  });\n  formPhone.addEventListener('input', function () {\n    return formPhone.value = formPhone.value.replace(/\\D[^()-]/g, '');\n  });\n  formName.value = formName.value.replace(/^[а-я]/g, function (match) {\n    return match.toUpperCase();\n  });\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem';\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n    form.appendChild(statusMessage);\n    var request = new XMLHttpRequest();\n    request.addEventListener('readystatechange', function () {\n      statusMessage.textContent = loadMessage;\n\n      if (request.readyState !== 4) {\n        return;\n      }\n\n      if (request.status === 200) {\n        statusMessage.textContent = successMessage;\n      } else {\n        statusMessage.textContent = errorMessage;\n      }\n    });\n    request.open('POST', './server.php');\n    request.setRequestHeader('Content-Type', 'multipart/form-data');\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[val[0]] = val[1];\n    }); // request.send(JSON.stringify(body));\n\n    form.reset();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c38d9a0cc9c07dfacef9")
/******/ })();
/******/ 
/******/ }
);