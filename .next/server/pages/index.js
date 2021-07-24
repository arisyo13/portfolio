(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./client.tsx":
/*!********************!*\
  !*** ./client.tsx ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: "peqa4imu",
  dataset: "production",
  apiVersion: '2021-05-14',
  useCdn: true
}));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_panels_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/panels/Hero */ "./src/panels/Hero/index.tsx");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.tsx");
/* harmony import */ var _src_utils_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/queries */ "./src/utils/queries.tsx");

var _jsxFileName = "C:\\Users\\Microsoft\\Documents\\VSCode\\portfolio\\pages\\index.tsx";





const Home = ({
  Projects,
  Posts,
  Author
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_panels_Hero__WEBPACK_IMPORTED_MODULE_2__.default, {
    projects: Projects,
    author: Author[0]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
async function getStaticProps() {
  const Projects = await _client__WEBPACK_IMPORTED_MODULE_3__.default.fetch(_src_utils_queries__WEBPACK_IMPORTED_MODULE_4__.queryProjects).catch(error => console.error(error));
  const Posts = await _client__WEBPACK_IMPORTED_MODULE_3__.default.fetch(_src_utils_queries__WEBPACK_IMPORTED_MODULE_4__.queryPosts).catch(error => console.error(error));
  const Author = await _client__WEBPACK_IMPORTED_MODULE_3__.default.fetch(_src_utils_queries__WEBPACK_IMPORTED_MODULE_4__.queryAuthor).catch(error => console.error(error));
  return {
    props: {
      Projects,
      Posts,
      Author
    }
  };
}

/***/ }),

/***/ "./src/panels/Hero/index.tsx":
/*!***********************************!*\
  !*** ./src/panels/Hero/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Microsoft\\Documents\\VSCode\\portfolio\\src\\panels\\Hero\\index.tsx";


const Hero = ({
  projects,
  author
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: "min-h-screen py-20",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mx-auto px-4 md:px-0",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: author.image.asset.url,
        alt: author.image.alt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-4xl text-primary",
        children: author.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), projects && projects.map((v, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: v.date
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 58
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/utils/queries.tsx":
/*!*******************************!*\
  !*** ./src/utils/queries.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queryPosts": function() { return /* binding */ queryPosts; },
/* harmony export */   "queryProjects": function() { return /* binding */ queryProjects; },
/* harmony export */   "queryAuthor": function() { return /* binding */ queryAuthor; },
/* harmony export */   "querySinglePost": function() { return /* binding */ querySinglePost; }
/* harmony export */ });
const queryPosts = `*[_type == "post"]{
    title,
    slug,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    "authorName": author -> name,
    "authorImage": author -> image,
    publishedAt
  }`;
const queryProjects = `*[_type == "project"]{
    title,
    date,
    place,
    description,
    link
  }`;
const queryAuthor = `*[_type == "author"]{
    name,
    image{
      asset->{
        _id,
        url
      },
      alt
    },
  }`;
const querySinglePost = slug => `*[slug.current == "${slug}"]{
    title,
    _id,
    slug,
    mainImage{
        asset->{
            _id,
            url
        }
    },
    body,
    "name": author->name,
    "authorImage": author->image
}`;

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sanity/client");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jbGllbnQudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvcGFuZWxzL0hlcm8vaW5kZXgudHN4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy91dGlscy9xdWVyaWVzLnRzeCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJIb21lIiwiUHJvamVjdHMiLCJQb3N0cyIsIkF1dGhvciIsImdldFN0YXRpY1Byb3BzIiwiU2FuaXR5Q2xpZW50IiwicXVlcnlQcm9qZWN0cyIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwicXVlcnlQb3N0cyIsInF1ZXJ5QXV0aG9yIiwicHJvcHMiLCJIZXJvIiwicHJvamVjdHMiLCJhdXRob3IiLCJpbWFnZSIsImFzc2V0IiwidXJsIiwiYWx0IiwibmFtZSIsIm1hcCIsInYiLCJpbmRleCIsImRhdGUiLCJxdWVyeVNpbmdsZVBvc3QiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSwrREFBZUEscURBQVksQ0FBQztBQUMxQkMsV0FBUyxFQUFFLFVBRGU7QUFFMUJDLFNBQU8sRUFBRSxZQUZpQjtBQUcxQkMsWUFBVSxFQUFFLFlBSGM7QUFJMUJDLFFBQU0sRUFBRTtBQUprQixDQUFELENBQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsT0FBWjtBQUFtQkM7QUFBbkIsQ0FBRCxLQUF3QztBQUNuRCxzQkFBTyw4REFBQyxxREFBRDtBQUFNLFlBQVEsRUFBRUYsUUFBaEI7QUFBMEIsVUFBTSxFQUFFRSxNQUFNLENBQUMsQ0FBRDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLCtEQUFlSCxJQUFmO0FBRU8sZUFBZUksY0FBZixHQUFnQztBQUNyQyxRQUFNSCxRQUFRLEdBQUcsTUFBTUksa0RBQUEsQ0FBbUJDLDZEQUFuQixFQUFrQ0MsS0FBbEMsQ0FBd0NDLEtBQUssSUFBSUMsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQsQ0FBakQsQ0FBdkI7QUFDQSxRQUFNTixLQUFLLEdBQUcsTUFBTUcsa0RBQUEsQ0FBbUJLLDBEQUFuQixFQUErQkgsS0FBL0IsQ0FBcUNDLEtBQUssSUFBSUMsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQsQ0FBOUMsQ0FBcEI7QUFDQSxRQUFNTCxNQUFNLEdBQUcsTUFBTUUsa0RBQUEsQ0FBbUJNLDJEQUFuQixFQUFnQ0osS0FBaEMsQ0FBc0NDLEtBQUssSUFBSUMsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQsQ0FBL0MsQ0FBckI7QUFHQSxTQUFPO0FBQUVJLFNBQUssRUFBRTtBQUFFWCxjQUFGO0FBQVlDLFdBQVo7QUFBbUJDO0FBQW5CO0FBQVQsR0FBUDtBQUVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCRDs7QUFTQSxNQUFNVSxJQUFJLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDO0FBQVosQ0FBRCxLQUFpQztBQUMxQyxzQkFDSTtBQUFNLGFBQVMsRUFBQyxvQkFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxnQ0FBZjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsS0FBYixDQUFtQkMsR0FBN0I7QUFBa0MsV0FBRyxFQUFFSCxNQUFNLENBQUNDLEtBQVAsQ0FBYUc7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUksaUJBQVMsRUFBQyx1QkFBZDtBQUFBLGtCQUF1Q0osTUFBTSxDQUFDSztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLEVBR01OLFFBQVEsSUFBSUEsUUFBUSxDQUFDTyxHQUFULENBQWEsQ0FBQ0MsQ0FBRCxFQUFJQyxLQUFKLGtCQUFjO0FBQUEsa0JBQWdCRCxDQUFDLENBQUNFO0FBQWxCLFNBQVFELEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBM0IsQ0FIbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBU0gsQ0FWRDs7QUFZQSwrREFBZVYsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQk8sTUFBTUgsVUFBVSxHQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBYk87QUFlRSxNQUFNSixhQUFhLEdBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBTlM7QUFRQSxNQUFNSyxXQUFXLEdBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBVFM7QUFXQSxNQUFNYyxlQUFlLEdBQUlDLElBQUQsSUFBbUIsc0JBQXFCQSxJQUFLO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBYlMsQzs7Ozs7Ozs7Ozs7QUNsQ1QsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XHJcbiAgcHJvamVjdElkOiBcInBlcWE0aW11XCIsXHJcbiAgZGF0YXNldDogXCJwcm9kdWN0aW9uXCIsXHJcbiAgYXBpVmVyc2lvbjogJzIwMjEtMDUtMTQnLFxyXG4gIHVzZUNkbjogdHJ1ZVxyXG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vc3JjL3BhbmVscy9IZXJvJztcbmltcG9ydCBTYW5pdHlDbGllbnQgZnJvbSAnLi4vY2xpZW50JztcbmltcG9ydCB7IHF1ZXJ5UHJvamVjdHMsIHF1ZXJ5UG9zdHMsIHF1ZXJ5QXV0aG9yIH0gZnJvbSAnLi4vc3JjL3V0aWxzL3F1ZXJpZXMnO1xuaW1wb3J0IHsgSVNpbXBsZVByb2plY3QgfSBmcm9tICcuLi9zcmMvbW9kZWxzL1NpbXBsZVByb2plY3QnO1xuaW1wb3J0IHsgSVNpbXBsZUFydGljbGUgfSBmcm9tICcuLi9zcmMvbW9kZWxzL1NpbXBsZVBvc3QnO1xuaW1wb3J0IHsgSVNpbXBsZUF1dGhvciB9IGZyb20gJy4uL3NyYy9tb2RlbHMvU2ltcGxlQXV0aG9yJ1xuXG50eXBlIFByb3BzID0ge1xuICBQcm9qZWN0czogSVNpbXBsZVByb2plY3RbXSxcbiAgUG9zdHM6IElTaW1wbGVBcnRpY2xlW10sXG4gIEF1dGhvcjogSVNpbXBsZUF1dGhvcltdXG59XG5cbmNvbnN0IEhvbWUgPSAoeyBQcm9qZWN0cywgUG9zdHMsIEF1dGhvciB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gPEhlcm8gcHJvamVjdHM9e1Byb2plY3RzfSBhdXRob3I9e0F1dGhvclswXX0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBQcm9qZWN0cyA9IGF3YWl0IFNhbml0eUNsaWVudC5mZXRjaChxdWVyeVByb2plY3RzKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIGNvbnN0IFBvc3RzID0gYXdhaXQgU2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5UG9zdHMpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAgY29uc3QgQXV0aG9yID0gYXdhaXQgU2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5QXV0aG9yKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4gIFxuXG4gIHJldHVybiB7IHByb3BzOiB7IFByb2plY3RzLCBQb3N0cywgQXV0aG9yIH19XG4gIFxufSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVNpbXBsZUF1dGhvciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvU2ltcGxlQXV0aG9yXCI7XHJcbmltcG9ydCB7IElTaW1wbGVQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL21vZGVscy9TaW1wbGVQcm9qZWN0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgcHJvamVjdHM6IElTaW1wbGVQcm9qZWN0W107XHJcbiAgICBhdXRob3I6IElTaW1wbGVBdXRob3JcclxufVxyXG5cclxuY29uc3QgSGVybyA9ICh7IHByb2plY3RzLCBhdXRob3IgfTogUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHB5LTIwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXV0aG9yLmltYWdlLmFzc2V0LnVybH0gYWx0PXthdXRob3IuaW1hZ2UuYWx0fSAvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtcHJpbWFyeVwiPnthdXRob3IubmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgeyBwcm9qZWN0cyAmJiBwcm9qZWN0cy5tYXAoKHYsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fT57di5kYXRlfTwvcD4pIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvIiwiZXhwb3J0IGNvbnN0IHF1ZXJ5UG9zdHMgPSBgKltfdHlwZSA9PSBcInBvc3RcIl17XHJcbiAgICB0aXRsZSxcclxuICAgIHNsdWcsXHJcbiAgICBtYWluSW1hZ2V7XHJcbiAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIHVybFxyXG4gICAgICB9LFxyXG4gICAgICBhbHRcclxuICAgIH0sXHJcbiAgICBcImF1dGhvck5hbWVcIjogYXV0aG9yIC0+IG5hbWUsXHJcbiAgICBcImF1dGhvckltYWdlXCI6IGF1dGhvciAtPiBpbWFnZSxcclxuICAgIHB1Ymxpc2hlZEF0XHJcbiAgfWA7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBxdWVyeVByb2plY3RzID0gYCpbX3R5cGUgPT0gXCJwcm9qZWN0XCJde1xyXG4gICAgdGl0bGUsXHJcbiAgICBkYXRlLFxyXG4gICAgcGxhY2UsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGxpbmtcclxuICB9YDtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IHF1ZXJ5QXV0aG9yID0gYCpbX3R5cGUgPT0gXCJhdXRob3JcIl17XHJcbiAgICBuYW1lLFxyXG4gICAgaW1hZ2V7XHJcbiAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgX2lkLFxyXG4gICAgICAgIHVybFxyXG4gICAgICB9LFxyXG4gICAgICBhbHRcclxuICAgIH0sXHJcbiAgfWA7XHJcblxyXG4gIGV4cG9ydCBjb25zdCBxdWVyeVNpbmdsZVBvc3QgPSAoc2x1Zzogc3RyaW5nKSA9PiBgKltzbHVnLmN1cnJlbnQgPT0gXCIke3NsdWd9XCJde1xyXG4gICAgdGl0bGUsXHJcbiAgICBfaWQsXHJcbiAgICBzbHVnLFxyXG4gICAgbWFpbkltYWdle1xyXG4gICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJvZHksXHJcbiAgICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxyXG4gICAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlXHJcbn1gOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzYW5pdHkvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9