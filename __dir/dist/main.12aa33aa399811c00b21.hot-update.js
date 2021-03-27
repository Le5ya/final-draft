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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ourServices = function ourServices() {\n  var servicesElements = document.querySelector('.services-elements'),\n      element = servicesElements.querySelectorAll('.element'),\n      imgWrapper = servicesElements.querySelectorAll('.img-wrapper'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalCallback = document.querySelector('.modal-callback'),\n      modalClose = document.querySelector('.modal-close'),\n      arrowRight = document.querySelector('.arrow-right'),\n      arrowLeft = document.querySelector('.arrow-left');\n\n  var sliderCarousel = /*#__PURE__*/function () {\n    function sliderCarousel(_ref) {\n      var main = _ref.main,\n          wrap = _ref.wrap,\n          next = _ref.next,\n          prev = _ref.prev,\n          position = _ref.position;\n\n      _classCallCheck(this, sliderCarousel);\n\n      this.main = document.querySelector(main);\n      this.wrap = document.querySelector(wrap);\n      this.slides = document.querySelector(wrap).children;\n      this.next = document.querySelector(next);\n      this.prev = document.querySelector(prev);\n      this.options = {\n        position: position\n      };\n    }\n\n    _createClass(sliderCarousel, [{\n      key: \"init\",\n      value: function init() {\n        this.addGloClass();\n        this.addStyle();\n\n        if (this.prev && this.next) {\n          this.controlSlider();\n        } else {\n          this.addArrow();\n          this.controlSlider();\n        }\n      }\n    }, {\n      key: \"addGloClass\",\n      value: function addGloClass() {\n        this.main.classList.add('glo-slider');\n        this.wrap.classList.add('glo-slider__wrap');\n\n        var _iterator = _createForOfIteratorHelper(this.slides),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n            item.classList.add('glo-slider__item');\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }, {\n      key: \"addStyle\",\n      value: function addStyle() {\n        var style = document.createElement('style');\n        style.id = 'slideCarousel-style';\n        style.textContent = \"\\n         .glo-slider {\\n            overflow: hidden;\\n         }\\n         .glo-slider__wrap {\\n            display: flex !important;\\n            transition: transform 0.5s !important;\\n            will-change: transform !important;\\n         }\\n\\n         .glo-slider__item{\\n            flex: 0 0 33% !important;\\n          margin: auto 0 !important;  \\n         }\\n         \";\n        document.head.appendChild(style);\n      }\n    }, {\n      key: \"controlSlider\",\n      value: function controlSlider() {\n        this.prev.addEventListener('click', this.prevSlider);\n        this.next.addEventListener('click', this.nextSlider);\n      }\n    }, {\n      key: \"prevSlider\",\n      value: function prevSlider() {\n        --this.options.position;\n      }\n    }, {\n      key: \"nextSlider\",\n      value: function nextSlider() {\n        ++this.options.position;\n      }\n    }, {\n      key: \"addArrow\",\n      value: function addArrow() {}\n    }]);\n\n    return sliderCarousel;\n  }();\n\n  var options = {\n    main: '.services-elements',\n    wrap: '.services-carousel',\n    prev: '.arrow-right',\n    next: '.arrow-left'\n  };\n  var carousel = new sliderCarousel(options);\n  carousel.init();\n\n  var close = function close() {\n    modalOverlay.style.display = 'none';\n    modalCallback.style.display = 'none';\n  };\n\n  var open = function open() {\n    modalOverlay.style.display = 'block';\n    modalCallback.style.display = 'block';\n  };\n\n  servicesElements.addEventListener('mouseover', function (event) {\n    var target = event.target;\n    target.style.zIndex = 100;\n    target.addEventListener('click', open);\n  });\n  imgWrapper.forEach(function (elem) {\n    elem.addEventListener('click', open);\n  });\n  modalClose.addEventListener('click', close);\n  modalOverlay.addEventListener('click', close);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourServices);\n\n//# sourceURL=webpack://FinalDraft/./src/modules/ourServices.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2e003f039e0fcc6ec3ef")
/******/ })();
/******/ 
/******/ }
);