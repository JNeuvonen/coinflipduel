"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/InfoMessage/index.js":
/*!*****************************************!*\
  !*** ./components/InfoMessage/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _utils_functions_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions/html */ \"./utils/functions/html.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar InfoMessage = function(props) {\n    _s();\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    if (props.type === \"success\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: props.type,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_functions_html__WEBPACK_IMPORTED_MODULE_3__.ReturnSuccessMessageHtml, {\n                content: props.message\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoMessage\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoMessage\\\\index.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: props.type,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoMessage\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, _this);\n};\n_s(InfoMessage, \"Ppve4ylrBbSYL4sg4YBdH5aYXF4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = InfoMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoMessage);\nvar _c;\n$RefreshReg$(_c, \"InfoMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0luZm9NZXNzYWdlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBcUM7QUFDRztBQUNDO0FBQzRCOztBQUNyRSxJQUFNSyxXQUFXLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUM3QixJQUFNQyxXQUFXLEdBQUdKLHdEQUFXLENBQUMsU0FBQ0ssS0FBSztlQUFLQSxLQUFLLENBQUNELFdBQVc7S0FBQSxDQUFDO0lBQzdELElBQUlELEtBQUssQ0FBQ0csSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUM1QixxQkFDRSw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ0csSUFBSTtzQkFDeEIsNEVBQUNMLDJFQUF3QjtnQkFBQ1EsT0FBTyxFQUFFTixLQUFLLENBQUNPLE9BQU87Ozs7O3FCQUFJOzs7OztpQkFDaEQsQ0FDUDtLQUNGO0lBQ0QscUJBQU8sOERBQUNILEtBQUc7UUFBQ0MsU0FBUyxFQUFFTCxLQUFLLENBQUNHLElBQUk7a0JBQUdILEtBQUssQ0FBQ1EsUUFBUTs7Ozs7YUFBTztDQUMxRDtHQVZLVCxXQUFXOztRQUNLRixvREFBVzs7O0FBRDNCRSxLQUFBQSxXQUFXO0FBV2pCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5mb01lc3NhZ2UvaW5kZXguanM/Y2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAbXVpL2Jhc2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUmV0dXJuU3VjY2Vzc01lc3NhZ2VIdG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2h0bWwnXHJcbmNvbnN0IEluZm9NZXNzYWdlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgaW5mb01lc3NhZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmluZm9NZXNzYWdlKVxyXG4gIGlmIChwcm9wcy50eXBlID09PSAnc3VjY2VzcycpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcy50eXBlfT5cclxuICAgICAgICA8UmV0dXJuU3VjY2Vzc01lc3NhZ2VIdG1sIGNvbnRlbnQ9e3Byb3BzLm1lc3NhZ2V9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3Byb3BzLnR5cGV9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmZvTWVzc2FnZVxyXG4iXSwibmFtZXMiOlsidXNlU2VsZWN0IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsIlJldHVyblN1Y2Nlc3NNZXNzYWdlSHRtbCIsIkluZm9NZXNzYWdlIiwicHJvcHMiLCJpbmZvTWVzc2FnZSIsInN0YXRlIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnQiLCJtZXNzYWdlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InfoMessage/index.js\n"));

/***/ })

});