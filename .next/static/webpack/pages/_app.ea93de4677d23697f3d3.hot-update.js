self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar/components/Link/index.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Navbar/components/Link/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Microsoft\\Documents\\VSCode\\portfolio\\src\\components\\Navbar\\components\\Link\\index.tsx";


const NavLink = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: props.path,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      children: props.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 33
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

_c = NavLink;
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

var _c;

$RefreshReg$(_c, "NavLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Navbar/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Link */ "./src/components/Navbar/components/Link/index.tsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Logo */ "./src/components/Navbar/components/Logo/index.tsx");
/* harmony import */ var _components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SocialIcons */ "./src/components/Navbar/components/SocialIcons/index.tsx");
/* harmony import */ var _components_Burger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Burger */ "./src/components/Navbar/components/Burger/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Microsoft\\Documents\\VSCode\\portfolio\\src\\components\\Navbar\\index.tsx",
    _s = $RefreshSig$();







const NavBar = () => {
  _s();

  const {
    0: slide,
    1: setSlide
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    className: "flex fixed bg-black top-0 inset-x-0 z-50",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
      className: "container mx-auto py-2 md:py-1 px-4 md:px-0 flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logo__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "md:flex w-3/5 justify-center hidden ",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
          path: "/",
          name: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
          path: "/projects",
          name: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
          path: "/posts",
          name: "Posts"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
          path: "/about",
          name: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
          path: "/contact",
          name: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "fixed inset-0 bg-gradient-to-tl from-red-200 to-blue-400 transition-transform ease-in duration-400 md:hidden transform " + (slide ? "" : "translate-x-full"),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "flex flex-col items-center h-screen py-28 justify-evenly",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
            path: "/",
            name: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
            path: "/projects",
            name: "Projects"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
            path: "/posts",
            name: "Posts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
            path: "/about",
            name: "About"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Link__WEBPACK_IMPORTED_MODULE_2__.default, {
            path: "/contact",
            name: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__.default, {
            className: "md:hidden"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SocialIcons__WEBPACK_IMPORTED_MODULE_4__.default, {
        className: "md:flex hidden"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Burger__WEBPACK_IMPORTED_MODULE_5__.default, {
        clicked: slide,
        onClick: () => setSlide(!slide)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined);
};

_s(NavBar, "WpiDzSgo3E6lnm8GMKZxMaxRqHY=");

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

$RefreshReg$(_c, "NavBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyL2NvbXBvbmVudHMvTGluay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9pbmRleC50c3giXSwibmFtZXMiOlsiTmF2TGluayIsInByb3BzIiwicGF0aCIsIm5hbWUiLCJOYXZCYXIiLCJzbGlkZSIsInNldFNsaWRlIiwidXNlU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBT0EsTUFBTUEsT0FBTyxHQUFJQyxLQUFELElBQWtCO0FBQzlCLHNCQUNJLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQWxCO0FBQUEsMkJBQXdCO0FBQUEsZ0JBQUlELEtBQUssQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUdILENBSkQ7O0tBQU1ILE87QUFNTiwrREFBZUEsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLE1BQU0sR0FBRyxNQUFNO0FBQUE7O0FBQ2pCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxLQUFELENBQWxDO0FBQ0Esc0JBQ0k7QUFBUSxhQUFTLEVBQUMsMENBQWxCO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsK0VBQWY7QUFBQSw4QkFDSSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsZ0NBQ0ksOERBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFlLGNBQUksRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUksOERBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsV0FBWDtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJLDhEQUFDLHFEQUFEO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0IsY0FBSSxFQUFDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEosZUFJSSw4REFBQyxxREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQW9CLGNBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0ksOERBQUMscURBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFzQixjQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFTSTtBQUFLLGlCQUFTLEVBQUUsNkhBQTZIRixLQUFLLEdBQUcsRUFBSCxHQUFPLGtCQUF6SSxDQUFoQjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQywwREFBZjtBQUFBLGtDQUNJLDhEQUFDLHFEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQWUsZ0JBQUksRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUksOERBQUMscURBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBdUIsZ0JBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0ksOERBQUMscURBQUQ7QUFBTSxnQkFBSSxFQUFDLFFBQVg7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUksOERBQUMscURBQUQ7QUFBTSxnQkFBSSxFQUFDLFFBQVg7QUFBb0IsZ0JBQUksRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBS0ksOERBQUMscURBQUQ7QUFBTSxnQkFBSSxFQUFDLFVBQVg7QUFBc0IsZ0JBQUksRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxKLGVBTUksOERBQUMsNERBQUQ7QUFBYSxxQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFUSixlQW1CSSw4REFBQyw0REFBRDtBQUFhLGlCQUFTLEVBQUU7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkosZUFvQkksOERBQUMsdURBQUQ7QUFBUSxlQUFPLEVBQUVBLEtBQWpCO0FBQXdCLGVBQU8sRUFBRSxNQUFNQyxRQUFRLENBQUMsQ0FBQ0QsS0FBRjtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEwQkgsQ0E1QkQ7O0dBQU1ELE07O0tBQUFBLE07QUE4Qk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYTkzZGU0Njc3ZDIzNjk3ZjNkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIHBhdGg6IHN0cmluZyxcclxuICAgIG5hbWU6IHN0cmluZyxcclxufVxyXG5cclxuY29uc3QgTmF2TGluayA9IChwcm9wczogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMucGF0aH0+PGE+e3Byb3BzLm5hbWV9PC9hPjwvTGluaz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGluayIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9jb21wb25lbnRzL0xpbmtcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vY29tcG9uZW50cy9Mb2dvXCI7XHJcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tIFwiLi9jb21wb25lbnRzL1NvY2lhbEljb25zXCI7XHJcbmltcG9ydCBCdXJnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9CdXJnZXJcIjtcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzbGlkZSwgc2V0U2xpZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZml4ZWQgYmctYmxhY2sgdG9wLTAgaW5zZXQteC0wIHotNTBcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweS0yIG1kOnB5LTEgcHgtNCBtZDpweC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPExvZ28gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCB3LTMvNSBqdXN0aWZ5LWNlbnRlciBoaWRkZW4gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9cIiBuYW1lPVwiSG9tZVwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL3Byb2plY3RzXCIgbmFtZT1cIlByb2plY3RzXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIvcG9zdHNcIiBuYW1lPVwiUG9zdHNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9hYm91dFwiIG5hbWU9XCJBYm91dFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NvbnRhY3RcIiBuYW1lPVwiQ29udGFjdFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZml4ZWQgaW5zZXQtMCBiZy1ncmFkaWVudC10by10bCBmcm9tLXJlZC0yMDAgdG8tYmx1ZS00MDAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZWFzZS1pbiBkdXJhdGlvbi00MDAgbWQ6aGlkZGVuIHRyYW5zZm9ybSBcIiArIChzbGlkZSA/IFwiXCI6IFwidHJhbnNsYXRlLXgtZnVsbFwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiBweS0yOCBqdXN0aWZ5LWV2ZW5seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL1wiIG5hbWU9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9wcm9qZWN0c1wiIG5hbWU9XCJQcm9qZWN0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIvcG9zdHNcIiBuYW1lPVwiUG9zdHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2Fib3V0XCIgbmFtZT1cIkFib3V0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiL2NvbnRhY3RcIiBuYW1lPVwiQ29udGFjdFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNvY2lhbEljb25zIGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTb2NpYWxJY29ucyBjbGFzc05hbWU9e1wibWQ6ZmxleCBoaWRkZW5cIn0gLz5cclxuICAgICAgICAgICAgICAgIDxCdXJnZXIgY2xpY2tlZD17c2xpZGV9IG9uQ2xpY2s9eygpID0+IHNldFNsaWRlKCFzbGlkZSl9IC8+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwic291cmNlUm9vdCI6IiJ9