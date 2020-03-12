webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/picWtext.js":
/*!********************************!*\
  !*** ./components/picWtext.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\singlePageProject\\components\\picWtext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var PicwText = function PicwText(props) {
  if (props.circle) {
    return __jsx("div", {
      className: " h-auto flex flex-col text-gray-700 xl:text-white hover:text-gray-700 xl:transition duration-500 ease-in-out xl:transform hover:scale-110  items-center my-20 border-b-4 xl-border-none xl:border-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    }, __jsx("div", {
      className: "flex border-2 min-w-10 xl:h-56 xl:w-56 w-64 h-64  rounded-full shadow-md xl:hover:border-blue-900 justify-center items-center p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }, __jsx("img", {
      className: "w-3/4",
      src: props.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    })), __jsx("h1", {
      className: " text-3xl my-10 font-medium ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, props.text));
  } else {
    return __jsx("div", {
      className: "flex xl:transition duration-500 ease-in-out xl:transform hover:scale-110 border-b-4 xl:border-0 flex-col items-center text-center h-auto py-10 m-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("img", {
      className: "w-1/4 xl:w-2/5",
      src: props.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("h1", {
      className: " text-3xl my-10 font-medium text-gray-700",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, props.text));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (PicwText);

/***/ })

})
//# sourceMappingURL=index.js.567bc74471242212513f.hot-update.js.map