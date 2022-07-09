"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Account */ \"./components/Account/index.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorMessage */ \"./components/ErrorMessage/index.js\");\n/* harmony import */ var _InfoMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfoMessage */ \"./components/InfoMessage/index.js\");\n/* harmony import */ var _MetamaskConnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MetamaskConnect */ \"./components/MetamaskConnect/index.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Nav */ \"./components/Nav/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showError = ref[0], setShowError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamaskClick = ref1[0], setMetamaskClick = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), infoMessageBoolean = ref2[0], setInfoMessageBoolean = ref2[1];\n    var errorMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.errorMessage;\n    });\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    var ref3 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), updateErrorMessage = ref3.updateErrorMessage, updateInfoMessage = ref3.updateInfoMessage;\n    var errorCancel = function() {\n        setShowError(false);\n        updateErrorMessage(null);\n    };\n    var infoMessageCancel = function() {\n        (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.disableInfoMessage)();\n        updateInfoMessage(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.getElementById(\"blur\").addEventListener(\"click\", function(e) {\n            (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.disableBlur)();\n            setMetamaskClick(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (errorMessage !== null) {\n            setShowError(true);\n            setTimeout(function() {\n                errorCancel();\n            }, [\n                15000\n            ]);\n        }\n    }, [\n        errorMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (infoMessage !== null) {\n            (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.enableInfoMessage)();\n            setTimeout(function() {\n                infoMessageCancel();\n            }, [\n                5000\n            ]);\n        }\n    }, [\n        infoMessage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        id: \"blur\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        id: \"blur-2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    showError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        errorMessage: errorMessage,\n                        cancelCallback: errorCancel\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MetamaskConnect__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        setMetamaskOnClick: setMetamaskClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InfoMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        type: \"success\",\n                        text: infoMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    metamaskClick && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Account__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        setMetamaskClick: setMetamaskClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 27\n                    }, _this),\n                    props.children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"8aIt3aYzmHbT02MM7ORPpJWlY5w=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFNBQVMsRUFBQyxNQUFNO3dCQUFDSSxFQUFFLEVBQUMsUUFBUTs7Ozs7NkJBQU87a0NBRXhDLDhEQUFDMUIsNkNBQUc7Ozs7NkJBQUc7b0JBQ05HLFNBQVMsa0JBQ1IsOERBQUNOLHFEQUFZO3dCQUNYWSxZQUFZLEVBQUVBLFlBQVk7d0JBQzFCa0IsY0FBYyxFQUFFYixXQUFXOzs7Ozs2QkFDM0I7a0NBR0osOERBQUNmLHdEQUFlO3dCQUFDNkIsa0JBQWtCLEVBQUV0QixnQkFBZ0I7Ozs7OzZCQUFJO2tDQUV6RCw4REFBQ1Isb0RBQVc7d0JBQUMrQixJQUFJLEVBQUMsU0FBUzt3QkFBQ0MsSUFBSSxFQUFFbkIsV0FBVzs7Ozs7NkJBQWdCO29CQUU1RE4sYUFBYSxrQkFBSSw4REFBQ1QsZ0RBQU87d0JBQUNVLGdCQUFnQixFQUFFQSxnQkFBZ0I7Ozs7OzZCQUFJO29CQUNoRUosS0FBSyxDQUFDNkIsUUFBUTs7Ozs7O3FCQUNYOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0FyRUs5QixNQUFNOztRQUlXVixvREFBVztRQUNaQSxvREFBVzs7O0FBTDNCVSxLQUFBQSxNQUFNO0FBc0VaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzP2Q0MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVXBkYXRlcnMgZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgZGlzYWJsZUJsdXIsXHJcbiAgZGlzYWJsZUluZm9NZXNzYWdlLFxyXG4gIGVuYWJsZUluZm9NZXNzYWdlLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9jc3MnXHJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uL0FjY291bnQnXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgSW5mb01lc3NhZ2UgZnJvbSAnLi4vSW5mb01lc3NhZ2UnXHJcbmltcG9ydCBNZXRhbWFza0Nvbm5lY3QgZnJvbSAnLi4vTWV0YW1hc2tDb25uZWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL05hdidcclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3Nob3dFcnJvciwgc2V0U2hvd0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFttZXRhbWFza0NsaWNrLCBzZXRNZXRhbWFza0NsaWNrXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtpbmZvTWVzc2FnZUJvb2xlYW4sIHNldEluZm9NZXNzYWdlQm9vbGVhbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBlcnJvck1lc3NhZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmVycm9yTWVzc2FnZSlcclxuICBjb25zdCBpbmZvTWVzc2FnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaW5mb01lc3NhZ2UpXHJcbiAgY29uc3QgeyB1cGRhdGVFcnJvck1lc3NhZ2UsIHVwZGF0ZUluZm9NZXNzYWdlIH0gPSBVcGRhdGVycygpXHJcblxyXG4gIGNvbnN0IGVycm9yQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0Vycm9yKGZhbHNlKVxyXG4gICAgdXBkYXRlRXJyb3JNZXNzYWdlKG51bGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmZvTWVzc2FnZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIGRpc2FibGVJbmZvTWVzc2FnZSgpXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZShudWxsKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBkaXNhYmxlQmx1cigpXHJcbiAgICAgIHNldE1ldGFtYXNrQ2xpY2soZmFsc2UpXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IG51bGwpIHtcclxuICAgICAgc2V0U2hvd0Vycm9yKHRydWUpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGVycm9yQ2FuY2VsKClcclxuICAgICAgfSwgWzE1MDAwXSlcclxuICAgIH1cclxuICB9LCBbZXJyb3JNZXNzYWdlXSlcclxuXHJcbiAgdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoaW5mb01lc3NhZ2UgIT09IG51bGwpIHtcclxuICAgICAgZW5hYmxlSW5mb01lc3NhZ2UoKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpbmZvTWVzc2FnZUNhbmNlbCgpXHJcbiAgICAgIH0sIFs1MDAwXSlcclxuICAgIH1cclxuICB9LCBbaW5mb01lc3NhZ2VdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJcIiBpZD1cImJsdXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJcIiBpZD1cImJsdXItMlwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAge3Nob3dFcnJvciAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICBjYW5jZWxDYWxsYmFjaz17ZXJyb3JDYW5jZWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxNZXRhbWFza0Nvbm5lY3Qgc2V0TWV0YW1hc2tPbkNsaWNrPXtzZXRNZXRhbWFza0NsaWNrfSAvPlxyXG5cclxuICAgICAgICA8SW5mb01lc3NhZ2UgdHlwZT1cInN1Y2Nlc3NcIiB0ZXh0PXtpbmZvTWVzc2FnZX0+PC9JbmZvTWVzc2FnZT5cclxuXHJcbiAgICAgICAge21ldGFtYXNrQ2xpY2sgJiYgPEFjY291bnQgc2V0TWV0YW1hc2tDbGljaz17c2V0TWV0YW1hc2tDbGlja30gLz59XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiVXBkYXRlcnMiLCJkaXNhYmxlQmx1ciIsImRpc2FibGVJbmZvTWVzc2FnZSIsImVuYWJsZUluZm9NZXNzYWdlIiwiQWNjb3VudCIsIkVycm9yTWVzc2FnZSIsIkluZm9NZXNzYWdlIiwiTWV0YW1hc2tDb25uZWN0IiwiTmF2IiwiTGF5b3V0IiwicHJvcHMiLCJzaG93RXJyb3IiLCJzZXRTaG93RXJyb3IiLCJtZXRhbWFza0NsaWNrIiwic2V0TWV0YW1hc2tDbGljayIsImluZm9NZXNzYWdlQm9vbGVhbiIsInNldEluZm9NZXNzYWdlQm9vbGVhbiIsImVycm9yTWVzc2FnZSIsInN0YXRlIiwiaW5mb01lc3NhZ2UiLCJ1cGRhdGVFcnJvck1lc3NhZ2UiLCJ1cGRhdGVJbmZvTWVzc2FnZSIsImVycm9yQ2FuY2VsIiwiaW5mb01lc3NhZ2VDYW5jZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaWQiLCJjYW5jZWxDYWxsYmFjayIsInNldE1ldGFtYXNrT25DbGljayIsInR5cGUiLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/index.js\n"));

/***/ })

});