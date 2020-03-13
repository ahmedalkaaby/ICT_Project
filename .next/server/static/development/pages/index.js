module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ICT_Project\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "flex flex-col md:flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    id: "footer",
    className: "flex flex-col md:flex-row w-full h-auot md:h-64 text-white text-sm lg:text-base xl:text-xl py-10 m-auto items-center md:justify-around bg-blue-900",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full md:w-4/12 flex flex-col md:flex-row md:items-center  ml-20 md:ml-4 md:justify-start",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-1/3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-3/4 mr-5",
    src: "/imgs/network.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "IRAQ - BAGHDAD - B 103"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "IRAQ - ERBIL - B 103"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "IRAQ - BASRA - B 103"))), __jsx("div", {
    className: "flex w-full md:w-4/12 items-center ml-10 md:ml-0 md:justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("ul", {
    className: "flex flex-col m-5 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    className: "mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "HOME"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "about",
    smooth: true,
    className: "mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "ABOUT US"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "services",
    smooth: true,
    className: "xl:transition duration-300 ease-in-out xl:hover:text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "PRODUCTS")), __jsx("ul", {
    className: "flex flex-col m-5 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "services",
    smooth: true,
    className: "mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "Solutions & Services"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "partners",
    smooth: true,
    className: "mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Partners"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "footer",
    smooth: true,
    className: "xl:transition duration-300 ease-in-out xl:hover:text-gray-600",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Contact Us"))), __jsx("div", {
    className: "w-full md:w-4/12 md:mr-4 ml-20 md:ml-0 md:justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-3/4 h-auto",
    src: "http://getdrawings.com/vectors/spotify-logo-vector-6.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }))), __jsx("div", {
    className: "w-full bg-darkblue h-16 text-white text-xs md:text-base font-semibold flex justify-center items-center text-center m-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, '\u00A9', " Copyright ", new Date().getFullYear(), " by Iraq Crescent. All Rights Reserved.")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttonMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonMenu */ "./components/buttonMenu.js");
var _jsxFileName = "D:\\ICT_Project\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = props => {
  return __jsx("header", {
    className: "w-full realtive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: " w-full fixed h-auto bg-white shadow-md z-20 top-0 flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "hidden w-5/6 lg:flex xl:w-9/12 h-6 lg:h-16 bg-blue-900 my-12 rounded-full flex justify-around items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("ul", {
    className: "font-semibold text-white w-1/2 xl:text-lg flex justify-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    className: "cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "HOME"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "about",
    smooth: true,
    className: "cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "ABOUT US"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "services",
    smooth: true,
    className: "cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "PRODUCTS")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "cursor-pointer flex items-center justify-center h-25 w-25  bg-blue-900 border border-black rounded-full shadow-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-3/4",
    src: "/imgs/logoHeader.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))), __jsx("ul", {
    className: "font-semibold text-white xl:text-lg w-1/2 flex justify-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "services",
    smooth: true,
    className: "xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Solutions & Services"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "partners",
    smooth: true,
    className: "xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Partners"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "footer",
    smooth: true,
    className: "xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Contact us"))), __jsx("div", {
    className: "w-full p-5 lg:hidden bg-gray-0 flex flex-row items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex items-center justify-center h-16 w-16 md:w-20 md:h-20  bg-blue-900 border border-black rounded-full shadow-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("img", {
    className: "w-3/4",
    src: "https://d.top4top.io/p_1525ofpb31.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }))), props.clicked && __jsx(MobileMenu, {
    close: props.close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }))));
};

const MobileMenu = props => {
  return __jsx("div", {
    className: "w-full flex md:w-3/4 h-auto lg:hidden justify-end pt-4 pr-4 z-30 w-full fixed top-0 right-0 shadow-xl ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("ul", {
    className: "font-semibold bg-blue-900 w-full pt-12 text-white flex flex-col p-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "home",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, "HOME"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "about",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "ABOUT US"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "services",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "PRODUCTS"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "services",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "Solutions & Services"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "partners",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "Partners"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "footer",
    smooth: true,
    className: "cursor-pointer ml-4 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "Contact us")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/ICT.js":
/*!***************************!*\
  !*** ./components/ICT.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\ICT_Project\\components\\ICT.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ICT = () => {
  return __jsx("div", {
    id: "home",
    className: "flex justify-center h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("div", {
    className: "h-auto p-16 lg:w-3/4 xl:w-1/2  flex flex-col justify-center text-center items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("h1", {
    className: "font-bold text-6xl md:text-7xl text-gray-700 m-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "ICT"), __jsx("h5", {
    className: "font-medium text-2xl md:text-5xl text-gray-600 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Leading Global Communications and IT Service Provider")));
};

/* harmony default export */ __webpack_exports__["default"] = (ICT);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var _ICT__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ICT */ "./components/ICT.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./components/about.js");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services */ "./components/Services.js");
/* harmony import */ var _Partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Partners */ "./components/Partners.js");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _buttonMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttonMenu */ "./components/buttonMenu.js");
var _jsxFileName = "D:\\ICT_Project\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Layout = () => {
  const {
    0: Showmenu,
    1: setShowmenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function onClickHandler() {
    setShowmenu(!Showmenu);
  }

  function divclick() {
    setShowmenu(false);
  }

  const clicked = Showmenu;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-full p-5 lg:hidden flex flex-row items-center justify-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_buttonMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    clicky: onClickHandler,
    clicked: clicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })), __jsx("div", {
    onClick: divclick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    clicked: clicked,
    close: divclick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_ICT__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx(_about__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(_Services__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(_Partners__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Partners.js":
/*!********************************!*\
  !*** ./components/Partners.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _picWtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picWtext */ "./components/picWtext.js");
var _jsxFileName = "D:\\ICT_Project\\components\\Partners.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Partners = () => {
  return __jsx("div", {
    id: "partners",
    className: "xl:h-screen pt-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "flex flex-col items-center ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-gray-800 text-5xl xl:text-7xl font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Our Partners"), __jsx("div", {
    className: "flex flex-col xl:flex-row justify-around w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    circle: "true" // src=""
    // text=""
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    circle: "true",
    src: "/imgs/part2.jpg",
    text: "Kerio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    circle: "true",
    src: "/imgs/part3.jpg",
    text: "Microsoft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    circle: "true",
    src: "/imgs/part4.jpg",
    text: "Micronet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    circle: "true",
    src: "/imgs/part5.jpg",
    text: "Bit9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Partners);

/***/ }),

/***/ "./components/Services.js":
/*!********************************!*\
  !*** ./components/Services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _picWtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./picWtext */ "./components/picWtext.js");
var _jsxFileName = "D:\\ICT_Project\\components\\Services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Services = () => {
  return __jsx("div", {
    id: "services",
    className: "xl:h-screen pt-40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: " flex flex-col items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-gray-800 text-5xl xl:text-7xl font-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "Our Services"), __jsx("div", {
    className: "flex flex-col xl:flex-row justify-around w-11/12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "/imgs/gear.png",
    text: "Installation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "/imgs/paper.png",
    text: "Project Management",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(_picWtext__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: "/imgs/hat.png",
    text: "Maintenance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/about.js":
/*!*****************************!*\
  !*** ./components/about.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\ICT_Project\\components\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const About = () => {
  const {
    0: isCut,
    1: SetIsCut
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const text1 = isCut ? 'We employ some of the best IT professionals and have partnerships with the leading solution provides around the world' : '';
  const text2 = isCut ? 'Completing a wide range of integrated business solutions in the areas of Infrastructure Solutions' : '';
  const text3 = isCut ? 'Knowledge Managment Systems. Electronic Business Systems and much more' : '';
  return __jsx("div", {
    id: "about",
    className: " pt-40 lg:pt-0 flex flex-col items-center justify-center w-full md:h-screen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "w-20 h-10 object-top z-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("img", {
    src: "/imgs/question.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx("div", {
    className: "w-11/12 h-auto bg-gray-0 rounded-xxl border-2 px-12 pt-12 pb-6 justify-start flex flex-col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("h1", {
    className: "text-center md:text-left text-gray-800 font-bold text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "About Us"), __jsx("ul", {
    className: "my-5 text-center md:text-left text-gray-900 text-lg font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "ICT Is an IT firm with futuristic vision."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "ICT provides world-class solution and professional services in Jordan and all over the Middle East."), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "ICT is a privately held company. registered in iraq-baghdad. From the Outest"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "ICT has focused around the networking. Security. Web Services. Web design by teaming up with partners of choice.")), __jsx("ul", {
    className: " text-center md:text-left text-gray-900 text-lg font-semibold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, text1), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, text2), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, text3)), __jsx("button", {
    className: "w-1/2 xl:w-1/4 m-auto mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
    onClick: e => SetIsCut(!isCut),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, !isCut ? 'Read More' : 'Read Less')));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./components/buttonMenu.js":
/*!**********************************!*\
  !*** ./components/buttonMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\ICT_Project\\components\\buttonMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ButtonMenu = props => {
  return __jsx("div", {
    role: "input",
    className: "cursor-pointer fixed top-0 right-0 m-6 z-50 w-12 h-12 md:w-16 md:h-16",
    onClick: props.clicky,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("img", {
    className: "inline icon ",
    src: !props.clicked ? '/imgs/menu.png' : '/imgs/error.png',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonMenu);

/***/ }),

/***/ "./components/picWtext.js":
/*!********************************!*\
  !*** ./components/picWtext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\ICT_Project\\components\\picWtext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const PicwText = props => {
  if (props.circle) {
    return __jsx("div", {
      className: " h-auto flex flex-col text-gray-700 xl:text-white hover:text-gray-700 xl:transition duration-500 ease-in-out xl:transform hover:scale-110  items-center my-20 border-b-4 xl-border-none xl:border-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: undefined
    }, __jsx("div", {
      className: "flex border-2 min-w-10 xl:h-56 xl:w-56 w-64 h-64  rounded-full shadow-md xl:hover:border-blue-900 justify-center items-center p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: undefined
    }, __jsx("img", {
      className: "w-3/4",
      src: props.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: undefined
    })), __jsx("h1", {
      className: " text-3xl my-10 font-medium ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: undefined
    }, props.text));
  } else {
    return __jsx("div", {
      className: "flex xl:transition duration-500 ease-in-out xl:transform hover:scale-110 border-b-4 xl:border-0 flex-col items-center text-center h-auto py-10 m-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx("img", {
      className: "w-1/4 xl:w-2/5",
      src: props.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }), __jsx("h1", {
      className: " text-3xl my-10 font-medium text-gray-700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, props.text));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PicwText);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "D:\\ICT_Project\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Index() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
}

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ICT_Project\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map