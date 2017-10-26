/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bwa_convert_degrees__ = __webpack_require__(1);


console.log('28\xB0C is ' + Object(__WEBPACK_IMPORTED_MODULE_0_bwa_convert_degrees__["b" /* convertToFahrenheit */])(28) + '\xB0F');
console.log('80\xB0F is ' + Object(__WEBPACK_IMPORTED_MODULE_0_bwa_convert_degrees__["a" /* convertToCelsius */])(80) + '\xB0C');

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertToFahrenheit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertToCelsius; });
var calculate = function calculate(_ref) {
  var degrees = _ref.degrees,
      sourceUnit = _ref.sourceUnit;

  var formulas = {
    'C': function C(degrees) {
      return degrees * 9 / 5 + Math.pow(2, 5);
    },
    'F': function F(degrees) {
      return (degrees - 32) * 5 / 9;
    }
  };

  var formula = formulas[sourceUnit] || formulas['C'];
  var result = formula(degrees);
  console.log('\u2587\u26D3\u2600\uFE0F Blockchain calculation performed. degrees [' + degrees + ']. sourceUnit [' + sourceUnit + ']. result [' + result + ']');
  return result;
};

var convertToFahrenheit = function convertToFahrenheit(degreesCelcius) {
  var sourceUnit = 'C';
  return calculate({ degrees: degreesCelcius, sourceUnit: sourceUnit });
};

var convertToCelsius = function convertToCelsius(degreesFahrenheit) {
  var sourceUnit = 'F';
  return calculate({ degrees: degreesFahrenheit, sourceUnit: sourceUnit });
};

/***/ })
/******/ ]);