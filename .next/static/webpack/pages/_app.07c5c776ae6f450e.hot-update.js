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

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Account */ \"./components/Account/index.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorMessage */ \"./components/ErrorMessage/index.js\");\n/* harmony import */ var _InfoMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfoMessage */ \"./components/InfoMessage/index.js\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LoadingSpinner */ \"./components/LoadingSpinner/index.js\");\n/* harmony import */ var _MetamaskConnect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MetamaskConnect */ \"./components/MetamaskConnect/index.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Nav */ \"./components/Nav/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showError = ref[0], setShowError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamaskClick = ref1[0], setMetamaskClick = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), infoMessageBoolean = ref2[0], setInfoMessageBoolean = ref2[1];\n    var errorMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.errorMessage;\n    });\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), spinner = ref3[0], setSpinner = ref3[1];\n    var ref4 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), updateErrorMessage = ref4.updateErrorMessage, updateInfoMessage = ref4.updateInfoMessage;\n    var errorCancel = function() {\n        setShowError(false);\n        updateErrorMessage(null);\n    };\n    var infoMessageCancel = function() {\n        (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.disableInfoMessage)();\n        updateInfoMessage(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.getElementById(\"blur\").addEventListener(\"click\", function(e) {\n            (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.disableBlur)();\n            setMetamaskClick(false);\n        });\n        setTimeout(function() {\n            setSpinner(false);\n        }, [\n            750\n        ]);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (errorMessage !== null) {\n            setShowError(true);\n            setTimeout(function() {\n                errorCancel();\n            }, [\n                15000\n            ]);\n        }\n    }, [\n        errorMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (infoMessage !== null) {\n            (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.enableInfoMessage)();\n            setTimeout(function() {\n                infoMessageCancel();\n            }, [\n                5000\n            ]);\n        }\n    }, [\n        infoMessage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, maximum-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#000000\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Coinflip.app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Coinflip.app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            spinner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        id: \"blur\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        id: \"blur-2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this),\n                    showError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        errorMessage: errorMessage,\n                        cancelCallback: errorCancel\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MetamaskConnect__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        setMetamaskOnClick: setMetamaskClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InfoMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        type: \"success\",\n                        text: infoMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    metamaskClick && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Account__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        setMetamaskClick: setMetamaskClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 90,\n                        columnNumber: 27\n                    }, _this),\n                    props.children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"LPgtCsr5xPEL6BP6QkU5IFr+GZU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TDNCVyxLQUFBQSxNQUFNO0FBZ0ZaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzP2Q0MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVXBkYXRlcnMgZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMnXHJcbmltcG9ydCB7XHJcbiAgZGlzYWJsZUJsdXIsXHJcbiAgZGlzYWJsZUluZm9NZXNzYWdlLFxyXG4gIGVuYWJsZUluZm9NZXNzYWdlLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9jc3MnXHJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4uL0FjY291bnQnXHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vRXJyb3JNZXNzYWdlJ1xyXG5pbXBvcnQgSW5mb01lc3NhZ2UgZnJvbSAnLi4vSW5mb01lc3NhZ2UnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICcuLi9Mb2FkaW5nU3Bpbm5lcidcclxuaW1wb3J0IE1ldGFtYXNrQ29ubmVjdCBmcm9tICcuLi9NZXRhbWFza0Nvbm5lY3QnXHJcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbc2hvd0Vycm9yLCBzZXRTaG93RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW21ldGFtYXNrQ2xpY2ssIHNldE1ldGFtYXNrQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2luZm9NZXNzYWdlQm9vbGVhbiwgc2V0SW5mb01lc3NhZ2VCb29sZWFuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZXJyb3JNZXNzYWdlKVxyXG4gIGNvbnN0IGluZm9NZXNzYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pbmZvTWVzc2FnZSlcclxuICBjb25zdCBbc3Bpbm5lciwgc2V0U3Bpbm5lcl0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IHsgdXBkYXRlRXJyb3JNZXNzYWdlLCB1cGRhdGVJbmZvTWVzc2FnZSB9ID0gVXBkYXRlcnMoKVxyXG4gIGNvbnN0IGVycm9yQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0Vycm9yKGZhbHNlKVxyXG4gICAgdXBkYXRlRXJyb3JNZXNzYWdlKG51bGwpXHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmZvTWVzc2FnZUNhbmNlbCA9ICgpID0+IHtcclxuICAgIGRpc2FibGVJbmZvTWVzc2FnZSgpXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZShudWxsKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibHVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBkaXNhYmxlQmx1cigpXHJcbiAgICAgIHNldE1ldGFtYXNrQ2xpY2soZmFsc2UpXHJcbiAgICB9KVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRTcGlubmVyKGZhbHNlKVxyXG4gICAgfSwgWzc1MF0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gbnVsbCkge1xyXG4gICAgICBzZXRTaG93RXJyb3IodHJ1ZSlcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZXJyb3JDYW5jZWwoKVxyXG4gICAgICB9LCBbMTUwMDBdKVxyXG4gICAgfVxyXG4gIH0sIFtlcnJvck1lc3NhZ2VdKVxyXG5cclxuICB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChpbmZvTWVzc2FnZSAhPT0gbnVsbCkge1xyXG4gICAgICBlbmFibGVJbmZvTWVzc2FnZSgpXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGluZm9NZXNzYWdlQ2FuY2VsKClcclxuICAgICAgfSwgWzUwMDBdKVxyXG4gICAgfVxyXG4gIH0sIFtpbmZvTWVzc2FnZV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgbWF4aW11bS1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNvaW5mbGlwLmFwcFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPkNvaW5mbGlwLmFwcDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIHtzcGlubmVyICYmIDxMb2FkaW5nU3Bpbm5lciAvPn1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyXCIgaWQ9XCJibHVyXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyXCIgaWQ9XCJibHVyLTJcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgIHtzaG93RXJyb3IgJiYgKFxyXG4gICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s9e2Vycm9yQ2FuY2VsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8TWV0YW1hc2tDb25uZWN0IHNldE1ldGFtYXNrT25DbGljaz17c2V0TWV0YW1hc2tDbGlja30gLz5cclxuXHJcbiAgICAgICAgPEluZm9NZXNzYWdlIHR5cGU9XCJzdWNjZXNzXCIgdGV4dD17aW5mb01lc3NhZ2V9PjwvSW5mb01lc3NhZ2U+XHJcblxyXG4gICAgICAgIHttZXRhbWFza0NsaWNrICYmIDxBY2NvdW50IHNldE1ldGFtYXNrQ2xpY2s9e3NldE1ldGFtYXNrQ2xpY2t9IC8+fVxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIlVwZGF0ZXJzIiwiZGlzYWJsZUJsdXIiLCJkaXNhYmxlSW5mb01lc3NhZ2UiLCJlbmFibGVJbmZvTWVzc2FnZSIsIkFjY291bnQiLCJFcnJvck1lc3NhZ2UiLCJJbmZvTWVzc2FnZSIsIkxvYWRpbmdTcGlubmVyIiwiTWV0YW1hc2tDb25uZWN0IiwiTmF2IiwiTGF5b3V0IiwicHJvcHMiLCJzaG93RXJyb3IiLCJzZXRTaG93RXJyb3IiLCJtZXRhbWFza0NsaWNrIiwic2V0TWV0YW1hc2tDbGljayIsImluZm9NZXNzYWdlQm9vbGVhbiIsInNldEluZm9NZXNzYWdlQm9vbGVhbiIsImVycm9yTWVzc2FnZSIsInN0YXRlIiwiaW5mb01lc3NhZ2UiLCJzcGlubmVyIiwic2V0U3Bpbm5lciIsInVwZGF0ZUVycm9yTWVzc2FnZSIsInVwZGF0ZUluZm9NZXNzYWdlIiwiZXJyb3JDYW5jZWwiLCJpbmZvTWVzc2FnZUNhbmNlbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsImlkIiwiY2FuY2VsQ2FsbGJhY2siLCJzZXRNZXRhbWFza09uQ2xpY2siLCJ0eXBlIiwidGV4dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout/index.js\n"));

/***/ })

});