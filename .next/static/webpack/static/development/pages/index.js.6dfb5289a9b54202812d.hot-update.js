webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _buttonMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonMenu */ "./components/buttonMenu.js");
var _jsxFileName = "D:\\ICT_Project\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header(props) {
  return __jsx("header", {
    className: "w-full realtive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: " w-full fixed h-auto bg-white shadow-md z-20 top-0 flex justify-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "hidden w-5/6 lg:flex xl:w-9/12 h-6 lg:h-16 bg-blue-900 my-12 rounded-full flex justify-around items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "font-semibold text-white w-1/2 xl:text-lg flex justify-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    className: "cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "HOME"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "about",
    smooth: true,
    className: "cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "ABOUT US"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "services",
    smooth: true,
    className: "cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "PRODUCTS")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "cursor-pointer flex items-center justify-center h-32 w-32  bg-blue-900 border border-black rounded-full shadow-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("img", {
    className: "w-3/4",
    src: "/imgs/logoHeader.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))), __jsx("ul", {
    className: "font-semibold text-white xl:text-lg w-1/2 flex justify-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "services",
    smooth: true,
    className: "xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Solutions & Services"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "partners",
    smooth: true,
    className: "xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Partners"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "footer",
    smooth: true,
    className: "xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Contact us"))), __jsx("div", {
    className: "w-full p-5 lg:hidden bg-gray-0 flex flex-row items-center justify-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "home",
    smooth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "flex items-center justify-center h-16 w-16 md:w-20 md:h-20  bg-blue-900 border border-black rounded-full shadow-md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    className: "w-3/4",
    src: "https://d.top4top.io/p_1525ofpb31.png",
    alt: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }))), props.clicked && __jsx(MobileMenu, {
    close: props.close,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))));
};

var MobileMenu = function MobileMenu(props) {
  return __jsx("div", {
    className: "w-full flex md:w-3/4 h-auto lg:hidden justify-end pt-4 pr-4 z-30 w-full fixed top-0 right-0 shadow-xl ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("ul", {
    className: "font-semibold bg-blue-900 w-full pt-12 text-white flex flex-col p-4 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "home",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "HOME"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "about",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "ABOUT US"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "services",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "PRODUCTS"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "services",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Solutions & Services"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "partners",
    smooth: true,
    className: "cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Partners"), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    onClick: props.close,
    to: "footer",
    smooth: true,
    className: "cursor-pointer ml-4 py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Contact us")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.6dfb5289a9b54202812d.hot-update.js.map