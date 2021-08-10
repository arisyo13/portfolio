(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-ga"
var external_react_ga_namespaceObject = require("react-ga");;
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./src/components/Navbar/components/Link/index.tsx




const NavLink = ({
  path,
  name
}) => {
  const active = (0,router_namespaceObject.useRouter)().pathname;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: path,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: `${active === path ? "border-b-2 border-red-500" : ""} text-white text-mine bg-mine py-1 px-4 text-2xl md:text-lg items-center`,
      children: name
    })
  });
};

/* harmony default export */ var Link = (NavLink);
;// CONCATENATED MODULE: ./src/components/Navbar/components/Logo/index.tsx





const Logo = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-1/5 z-50",
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
          width: "32",
          height: "32",
          viewBox: "0 0 407 400",
          fill: "white",
          xmlns: "http://www.w3.org/2000/svg",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
            "clip-path": "url(#clip0)",
            children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M4 0V200",
              stroke: "white",
              "stroke-width": "10",
              "stroke-miterlimit": "10"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M202.995 397.957H402.995",
              stroke: "white",
              "stroke-width": "10",
              "stroke-miterlimit": "10"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M404 0V400",
              stroke: "white",
              "stroke-width": "10",
              "stroke-miterlimit": "10"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M3 4H407",
              stroke: "white",
              "stroke-width": "10",
              "stroke-miterlimit": "10"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M63.5019 275.8H151.822L100.942 135.88L47.4219 283H39.7419L100.942 114.76L162.142 283H63.5019V275.8ZM249.238 291.64L175.558 109L182.038 106.36L255.718 289L249.238 291.64ZM275.429 199L349.349 125.08L354.389 130.12L285.509 199L354.389 267.88L349.349 272.92L275.429 199Z",
              fill: "white"
            }), /*#__PURE__*/jsx_runtime_.jsx("path", {
              d: "M63.5019 275.8V274.8H62.5019V275.8H63.5019ZM151.822 275.8V276.8H153.25L152.762 275.458L151.822 275.8ZM100.942 135.88L101.882 135.538L100.942 132.954L100.002 135.538L100.942 135.88ZM47.4219 283V284H48.1222L48.3616 283.342L47.4219 283ZM39.7419 283L38.8021 282.658L38.314 284H39.7419V283ZM100.942 114.76L101.882 114.418L100.942 111.835L100.002 114.418L100.942 114.76ZM162.142 283V284H163.57L163.082 282.658L162.142 283ZM63.5019 283H62.5019V284H63.5019V283ZM63.5019 276.8H151.822V274.8H63.5019V276.8ZM152.762 275.458L101.882 135.538L100.002 136.222L150.882 276.142L152.762 275.458ZM100.002 135.538L46.4821 282.658L48.3616 283.342L101.882 136.222L100.002 135.538ZM47.4219 282H39.7419V284H47.4219V282ZM40.6816 283.342L101.882 115.102L100.002 114.418L38.8021 282.658L40.6816 283.342ZM100.002 115.102L161.202 283.342L163.082 282.658L101.882 114.418L100.002 115.102ZM162.142 282H63.5019V284H162.142V282ZM64.5019 283V275.8H62.5019V283H64.5019ZM249.238 291.64L248.31 292.014L248.686 292.945L249.615 292.566L249.238 291.64ZM175.558 109L175.18 108.074L174.257 108.45L174.63 109.374L175.558 109ZM182.038 106.36L182.965 105.986L182.589 105.055L181.66 105.434L182.038 106.36ZM255.718 289L256.095 289.926L257.018 289.55L256.645 288.626L255.718 289ZM250.165 291.266L176.485 108.626L174.63 109.374L248.31 292.014L250.165 291.266ZM175.935 109.926L182.415 107.286L181.66 105.434L175.18 108.074L175.935 109.926ZM181.11 106.734L254.79 289.374L256.645 288.626L182.965 105.986L181.11 106.734ZM255.34 288.074L248.86 290.714L249.615 292.566L256.095 289.926L255.34 288.074ZM275.429 199L274.722 198.293L274.015 199L274.722 199.707L275.429 199ZM349.349 125.08L350.056 124.373L349.349 123.666L348.642 124.373L349.349 125.08ZM354.389 130.12L355.096 130.827L355.804 130.12L355.096 129.413L354.389 130.12ZM285.509 199L284.802 198.293L284.095 199L284.802 199.707L285.509 199ZM354.389 267.88L355.096 268.587L355.804 267.88L355.096 267.173L354.389 267.88ZM349.349 272.92L348.642 273.627L349.349 274.334L350.056 273.627L349.349 272.92ZM276.136 199.707L350.056 125.787L348.642 124.373L274.722 198.293L276.136 199.707ZM348.642 125.787L353.682 130.827L355.096 129.413L350.056 124.373L348.642 125.787ZM353.682 129.413L284.802 198.293L286.216 199.707L355.096 130.827L353.682 129.413ZM284.802 199.707L353.682 268.587L355.096 267.173L286.216 198.293L284.802 199.707ZM353.682 267.173L348.642 272.213L350.056 273.627L355.096 268.587L353.682 267.173ZM350.056 272.213L276.136 198.293L274.722 199.707L348.642 273.627L350.056 272.213Z",
              fill: "white"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
            children: /*#__PURE__*/jsx_runtime_.jsx("clipPath", {
              id: "clip0",
              children: /*#__PURE__*/jsx_runtime_.jsx("rect", {
                width: "407",
                height: "400",
                fill: "white"
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var components_Logo = (Logo);
;// CONCATENATED MODULE: external "react-social-icons"
var external_react_social_icons_namespaceObject = require("react-social-icons");;
;// CONCATENATED MODULE: ./src/components/Navbar/components/SocialIcons/index.tsx





const SocialIcons = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "md:w-1/5 items-center justify-end " + props.className,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-32 justify-end flex gap-3 ",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_namespaceObject.SocialIcon, {
        url: "https://www.facebook.com/arisyo13",
        bgColor: "transparent",
        fgColor: "#fff"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_namespaceObject.SocialIcon, {
        url: "https://www.linkedin.com/in/aris-arsen-kashari-1755a363",
        bgColor: "transparent",
        fgColor: "#fff"
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_social_icons_namespaceObject.SocialIcon, {
        url: "https://github.com/arisyo13",
        bgColor: "transparent",
        fgColor: "#fff"
      })]
    })
  });
};

/* harmony default export */ var components_SocialIcons = (SocialIcons);
;// CONCATENATED MODULE: ./src/components/Navbar/components/Burger/index.tsx



const Burger = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: props.onClick,
    className: "md:hidden z-50 items-center cursor-pointer flex flex-col gap-1.5",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-6 h-px bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "-rotate-45 translate-y-1.5" : "")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-6 h-px bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "opacity-0" : "")
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-6 h-px bg-white transition-all ease-linear duration-300 transform " + (props.clicked ? "rotate-45 -translate-y-2" : "")
    })]
  });
};

/* harmony default export */ var components_Burger = (Burger);
// EXTERNAL MODULE: ./src/components/Styled/index.tsx
var Styled = __webpack_require__(4770);
;// CONCATENATED MODULE: ./src/components/Navbar/index.tsx









const NavBar = () => {
  const {
    0: slide,
    1: setSlide
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx(Styled/* NavHeader */.$T, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Styled/* Container */.W2, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: "h-11 flex items-center justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx(components_Logo, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "md:flex w-3/5 justify-center hidden ",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
            path: "/",
            name: "Home"
          }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
            path: "/projects",
            name: "Projects"
          }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
            path: "#test",
            name: "Posts"
          }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
            path: "/about",
            name: "About"
          }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
            path: "#contact",
            name: "Contact"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(components_SocialIcons, {
          className: "md:flex hidden"
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Burger, {
          clicked: slide,
          onClick: () => setSlide(!slide)
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "fixed inset-0 transition-transform ease-in duration-400 md:hidden transform " + (slide ? "" : "translate-x-full"),
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col items-center backdrop-filter backdrop-blur-sm bg-black bg-opacity-70 h-screen py-28 justify-evenly",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex flex-col gap-4 items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
                path: "/",
                name: "Home"
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                path: "/projects",
                name: "Projects"
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                path: "#test",
                name: "Posts"
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                path: "/about",
                name: "About"
              }), /*#__PURE__*/jsx_runtime_.jsx(Link, {
                path: "#contact",
                name: "Contact"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(components_SocialIcons, {
              className: "md:hidden"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ var Navbar = (NavBar);
;// CONCATENATED MODULE: ./src/panels/Footer/index.tsx




const FooterPanel = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Styled/* Footer */.$_, {
    id: "footer",
    children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "text-lg",
      children: "Aris-Arsen Kashari Copyright 2021"
    })
  });
};

/* harmony default export */ var Footer = (FooterPanel);
;// CONCATENATED MODULE: ./pages/_app.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  (0,external_react_.useEffect)(() => {
    external_react_ga_default().initialize('UA-197778161-1');
    external_react_ga_default().pageview(window.location.pathname + window.location.search);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 4770:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": function() { return /* binding */ Container; },
/* harmony export */   "or": function() { return /* binding */ Main; },
/* harmony export */   "$_": function() { return /* binding */ Footer; },
/* harmony export */   "$T": function() { return /* binding */ NavHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Container = ({
  children = null
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mx-auto px-4 md:px-0",
    children: children
  });
};
const Main = ({
  id,
  children = null
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    id: id,
    className: "min-h-screen py-20",
    children: children
  });
};
const Footer = ({
  id,
  children = null
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
    id: id,
    className: "flex justify-center bg-gray-300 items-center py-20",
    children: children
  });
};
const NavHeader = ({
  children = null
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
    className: "flex fixed backdrop-filter backdrop-blur-sm bg-black bg-opacity-50 top-0 inset-x-0 z-50",
    children: children
  });
};

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(738); });
module.exports = __webpack_exports__;

})();