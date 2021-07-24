(function() {
var exports = {};
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "emailjs-com");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Input */ "./src/components/Input/index.tsx");

var _jsxFileName = "C:\\Users\\Microsoft\\Documents\\VSCode\\portfolio\\pages\\contact.tsx";




const Contact = () => {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: t,
    1: setT
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default().sendForm('default_service', 'template_v4pifim', e.target, 'user_0Gza1CBGA9taIfto1pEG8').then(result => {
      setT("Your message has been sent!");
      e.target.reset();
    }, error => {
      setT("Your message couldn't been sent. Error: " + error.text);
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: "min-h-screen py-20 bg-white",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "hidden",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4 md:px-0",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: sendEmail,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "hidden",
          name: "contact_number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 17
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "from_name",
          placeholder: "Name",
          textUpdate: setText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "hidden",
          name: "to_name",
          id: "to_name",
          value: "Aris"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "reply_to",
          placeholder: "Email",
          textUpdate: setText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Input__WEBPACK_IMPORTED_MODULE_3__.default, {
          name: "message",
          placeholder: "Your message",
          textUpdate: setText
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          className: "flex w-16 bg-red-400 rounded-md p-1 text-white justify-center",
          type: "submit",
          value: "Send"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: t
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Input/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Input/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Microsoft\\Documents\\VSCode\\portfolio\\src\\components\\Input\\index.tsx";


const Input = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "w-full flex flex-col mb-2.5",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
    className: `rounded mb-0 h-12 px-4 text-black bg-gray border outline-none border-${props.error ? 'pink' : 'bg-blue-100'}`,
    placeholder: props.placeholder,
    onChange: v => props.textUpdate(v.target.value),
    value: props.value,
    name: props.name,
    required: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined), props.error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    className: "mb-2 text-pink text-sm",
    children: props.error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 19
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 2
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("emailjs-com");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/contact.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9jb250YWN0LnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9JbnB1dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwiZW1haWxqcy1jb21cIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNvbnRhY3QiLCJ0ZXh0Iiwic2V0VGV4dCIsInVzZVN0YXRlIiwidCIsInNldFQiLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJlbWFpbGpzIiwidGFyZ2V0IiwidGhlbiIsInJlc3VsdCIsInJlc2V0IiwiZXJyb3IiLCJJbnB1dCIsInByb3BzIiwicGxhY2Vob2xkZXIiLCJ2IiwidGV4dFVwZGF0ZSIsInZhbHVlIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsQ0FBRDtBQUFBLE9BQUlDO0FBQUosTUFBWUYsK0NBQVEsQ0FBQyxFQUFELENBQTFCOztBQUVBLFdBQVNHLFNBQVQsQ0FBbUJDLENBQW5CLEVBQTJCO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsK0RBQUEsQ0FBaUIsaUJBQWpCLEVBQW9DLGtCQUFwQyxFQUF3REYsQ0FBQyxDQUFDRyxNQUExRCxFQUFrRSw0QkFBbEUsRUFDR0MsSUFESCxDQUNTQyxNQUFELElBQVk7QUFDZFAsVUFBSSxDQUFDLDZCQUFELENBQUo7QUFDQUUsT0FBQyxDQUFDRyxNQUFGLENBQVNHLEtBQVQ7QUFDSCxLQUpILEVBSU1DLEtBQUQsSUFBVztBQUNaVCxVQUFJLENBQUMsNkNBQTZDUyxLQUFLLENBQUNiLElBQXBELENBQUo7QUFDSCxLQU5EO0FBT0g7O0FBRUQsc0JBQ0k7QUFBTSxhQUFTLEVBQUMsNkJBQWhCO0FBQUEsNEJBQ0k7QUFBRyxlQUFTLEVBQUMsUUFBYjtBQUFBLGdCQUF3QkE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUssZUFBUyxFQUFDLGdDQUFmO0FBQUEsNkJBQ0k7QUFBTSxnQkFBUSxFQUFFSyxTQUFoQjtBQUFBLGdDQUNBO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsY0FBSSxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFSSw4REFBQywwREFBRDtBQUFPLGNBQUksRUFBRSxXQUFiO0FBQTBCLHFCQUFXLEVBQUUsTUFBdkM7QUFBK0Msb0JBQVUsRUFBRUo7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixlQUdJO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsY0FBSSxFQUFFLFNBQTNCO0FBQXNDLFlBQUUsRUFBQyxTQUF6QztBQUFtRCxlQUFLLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixlQUlJLDhEQUFDLDBEQUFEO0FBQU8sY0FBSSxFQUFFLFVBQWI7QUFBeUIscUJBQVcsRUFBRSxPQUF0QztBQUErQyxvQkFBVSxFQUFFQTtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKLGVBS0ksOERBQUMsMERBQUQ7QUFBTyxjQUFJLEVBQUUsU0FBYjtBQUF3QixxQkFBVyxFQUFFLGNBQXJDO0FBQXFELG9CQUFVLEVBQUVBO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFNSTtBQUFPLG1CQUFTLEVBQUMsK0RBQWpCO0FBQWlGLGNBQUksRUFBQyxRQUF0RjtBQUErRixlQUFLLEVBQUM7QUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQU9JO0FBQUEsb0JBQUtFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0JILENBL0JEOztBQWlDQSwrREFBZUosT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7O0FBSUEsTUFBTWUsS0FBSyxHQUFJQyxLQUFELGlCQUNiO0FBQUssV0FBUyxFQUFDLDZCQUFmO0FBQUEsMEJBQ0M7QUFDQyxhQUFTLEVBQUcsd0VBQXVFQSxLQUFLLENBQUNGLEtBQU4sR0FBYyxNQUFkLEdBQXVCLGFBQWMsRUFEekg7QUFFQyxlQUFXLEVBQUVFLEtBQUssQ0FBQ0MsV0FGcEI7QUFHQyxZQUFRLEVBQUVDLENBQUMsSUFBSUYsS0FBSyxDQUFDRyxVQUFOLENBQWlCRCxDQUFDLENBQUNSLE1BQUYsQ0FBU1UsS0FBMUIsQ0FIaEI7QUFJQyxTQUFLLEVBQUVKLEtBQUssQ0FBQ0ksS0FKZDtBQUtDLFFBQUksRUFBRUosS0FBSyxDQUFDSyxJQUxiO0FBTUMsWUFBUTtBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxFQVNFTCxLQUFLLENBQUNGLEtBQU4saUJBQWU7QUFBRyxhQUFTLEVBQUMsd0JBQWI7QUFBQSxjQUF1Q0UsS0FBSyxDQUFDRjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUREOztBQWNBLCtEQUFlQyxLQUFmLEU7Ozs7Ozs7Ozs7O0FDbEJBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2NvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBlbWFpbGpzIGZyb20gJ2VtYWlsanMtY29tJztcclxuaW1wb3J0IElucHV0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0lucHV0JztcclxuXHJcbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0LCBzZXRUXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRFbWFpbChlOiBhbnkpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZW1haWxqcy5zZW5kRm9ybSgnZGVmYXVsdF9zZXJ2aWNlJywgJ3RlbXBsYXRlX3Y0cGlmaW0nLCBlLnRhcmdldCwgJ3VzZXJfMEd6YTFDQkdBOXRhSWZ0bzFwRUc4JylcclxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICBzZXRUKFwiWW91ciBtZXNzYWdlIGhhcyBiZWVuIHNlbnQhXCIpO1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgc2V0VChcIllvdXIgbWVzc2FnZSBjb3VsZG4ndCBiZWVuIHNlbnQuIEVycm9yOiBcIiArIGVycm9yLnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBweS0yMCBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoaWRkZW5cIiA+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtMFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRFbWFpbH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjb250YWN0X251bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9e1wiZnJvbV9uYW1lXCJ9IHBsYWNlaG9sZGVyPXtcIk5hbWVcIn0gdGV4dFVwZGF0ZT17c2V0VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e1widG9fbmFtZVwifSBpZD1cInRvX25hbWVcIiB2YWx1ZT1cIkFyaXNcIj48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtcInJlcGx5X3RvXCJ9IHBsYWNlaG9sZGVyPXtcIkVtYWlsXCJ9IHRleHRVcGRhdGU9e3NldFRleHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IG5hbWU9e1wibWVzc2FnZVwifSBwbGFjZWhvbGRlcj17XCJZb3VyIG1lc3NhZ2VcIn0gdGV4dFVwZGF0ZT17c2V0VGV4dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmxleCB3LTE2IGJnLXJlZC00MDAgcm91bmRlZC1tZCBwLTEgdGV4dC13aGl0ZSBqdXN0aWZ5LWNlbnRlclwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57dH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxudHlwZSBQcm9wcyA9IHsgbmFtZT86IHN0cmluZzsgcGxhY2Vob2xkZXI6IHN0cmluZzsgdGV4dFVwZGF0ZTogKHRleHQ6IHN0cmluZykgPT4gdm9pZDsgZXJyb3I/OiBzdHJpbmc7IHZhbHVlPzogc3RyaW5nIH07XHJcblxyXG5jb25zdCBJbnB1dCA9IChwcm9wczogUHJvcHMpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIG1iLTIuNVwiPlxyXG5cdFx0PGlucHV0XHJcblx0XHRcdGNsYXNzTmFtZT17YHJvdW5kZWQgbWItMCBoLTEyIHB4LTQgdGV4dC1ibGFjayBiZy1ncmF5IGJvcmRlciBvdXRsaW5lLW5vbmUgYm9yZGVyLSR7cHJvcHMuZXJyb3IgPyAncGluaycgOiAnYmctYmx1ZS0xMDAnfWB9XHJcblx0XHRcdHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuXHRcdFx0b25DaGFuZ2U9e3YgPT4gcHJvcHMudGV4dFVwZGF0ZSh2LnRhcmdldC52YWx1ZSl9XHJcblx0XHRcdHZhbHVlPXtwcm9wcy52YWx1ZX1cclxuXHRcdFx0bmFtZT17cHJvcHMubmFtZX1cclxuXHRcdFx0cmVxdWlyZWRcclxuXHRcdC8+XHJcblx0XHR7cHJvcHMuZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXBpbmsgdGV4dC1zbVwiPntwcm9wcy5lcnJvcn08L3A+fVxyXG5cdDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW1haWxqcy1jb21cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=