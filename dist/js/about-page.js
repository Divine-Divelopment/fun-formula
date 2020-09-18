/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"about-page": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/pages/about-page.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/about-banner/about-banner.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/about-banner/about-banner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");

/***/ }),

/***/ "./src/blocks/components/about-block/about-block.js":
/*!**********************************************************!*\
  !*** ./src/blocks/components/about-block/about-block.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.querySelector(".moreTextButton").addEventListener("click", function (event) {
  event.target.classList.toggle("opened");
  event.target.previousElementSibling.classList.toggle("opened");
  event.target.classList.contains("opened") ? event.target.innerText = "Свернуть" : event.target.innerText = "Читать далее";
});

/***/ }),

/***/ "./src/blocks/components/all-info/all-info.js":
/*!****************************************************!*\
  !*** ./src/blocks/components/all-info/all-info.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ymaps */ "./node_modules/ymaps/dist/ymaps.esm.js");

ymaps__WEBPACK_IMPORTED_MODULE_0__["default"].load().then(function (maps) {
  var map = new maps.Map("map", {
    center: [55.782623, 37.723367],
    zoom: 18,
    controls: ["zoomControl"],
    lang: "ru-RU"
  });
  var myPlacemark = new maps.Placemark(map.getCenter(), {
    hintContent: "Собственный значок метки",
    balloonContent: "Москва, ул.Щербаковская, д.3,  БЦ «Щербаковский», 12 этаж, офиc №1212"
  }, {
    iconLayout: "default#image",
    iconImageHref: "img/pin.png",
    iconImageSize: [30, 45],
    iconImageOffset: [-30, -45]
  });
  map.geoObjects.add(myPlacemark);
  map.behaviors.disable("scrollZoom");
  window.addEventListener("resize", function () {
    map.container.fitToViewport();
  });
}).catch(function (error) {
  return console.log("Failed to load Yandex Maps", error);
});

/***/ }),

/***/ "./src/blocks/components/modals/modals.js":
/*!************************************************!*\
  !*** ./src/blocks/components/modals/modals.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");

document.querySelector(".openModal").addEventListener("click", function (event) {
  event.preventDefault();
  micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].show("modal-1", {
    debugMode: true,
    disableScroll: true,
    awaitCloseAnimation: true
  });
});

/***/ }),

/***/ "./src/blocks/components/values-of-company/values-of-company.js":
/*!**********************************************************************!*\
  !*** ./src/blocks/components/values-of-company/values-of-company.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

var valuesSwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".valuesSlider", {
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  autoHeight: true,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000
  },
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".valuesPagination"
  },
  navigation: {
    nextEl: ".values-swiper-button-next",
    prevEl: ".values-swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    1024: {
      autoHeight: false,
      pagination: {
        el: ".valuesPagination",
        type: "fraction"
      }
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("navigationMenu").classList.add("opened");
});
document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("navigationMenu").classList.remove("opened");
});
document.getElementById("toggleSearch").addEventListener("click", function () {
  document.getElementById("searchBlock").classList.toggle("opened");
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_modals_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/modals/modals */ "./src/blocks/components/modals/modals.js");


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/pages/about-page.js":
/*!************************************!*\
  !*** ./src/js/pages/about-page.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../import/components */ "./src/js/import/components.js");
/* harmony import */ var _components_all_info_all_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/all-info/all-info */ "./src/blocks/components/all-info/all-info.js");
/* harmony import */ var _components_values_of_company_values_of_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %components%/values-of-company/values-of-company */ "./src/blocks/components/values-of-company/values-of-company.js");
/* harmony import */ var _components_about_block_about_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %components%/about-block/about-block */ "./src/blocks/components/about-block/about-block.js");
/* harmony import */ var _components_about_block_about_block__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_about_block_about_block__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_about_banner_about_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %components%/about-banner/about-banner */ "./src/blocks/components/about-banner/about-banner.js");
/* harmony import */ var _components_about_banner_about_banner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_about_banner_about_banner__WEBPACK_IMPORTED_MODULE_5__);







/***/ })

/******/ });
//# sourceMappingURL=about-page.js.map