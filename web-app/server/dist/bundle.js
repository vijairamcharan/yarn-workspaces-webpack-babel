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


console.log(`28°C is ${Object(__WEBPACK_IMPORTED_MODULE_0_bwa_convert_degrees__["b" /* convertToFahrenheit */])(28)}°F`);
console.log(`80°F is ${Object(__WEBPACK_IMPORTED_MODULE_0_bwa_convert_degrees__["a" /* convertToCelsius */])(80)}°C`);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const calculate = ({ degrees, sourceUnit }) => {
  const formulas = {
    'C': degrees => degrees * 9 / 5 + Math.pow(2, 5),
    'F': degrees => (degrees - 32) * 5 / 9
  };

  const formula = formulas[sourceUnit] || formulas['C'];
  const result = formula(degrees);
  console.log(`▇⛓☀️ Blockchain calculation performed. degrees [${degrees}]. sourceUnit [${sourceUnit}]. result [${result}]`);
  return result;
};

const convertToFahrenheit = degreesCelcius => {
  const sourceUnit = 'C';
  return calculate({ degrees: degreesCelcius, sourceUnit });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = convertToFahrenheit;


const convertToCelsius = degreesFahrenheit => {
  const sourceUnit = 'F';
  return calculate({ degrees: degreesFahrenheit, sourceUnit });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = convertToCelsius;


/***/ })
/******/ ]);