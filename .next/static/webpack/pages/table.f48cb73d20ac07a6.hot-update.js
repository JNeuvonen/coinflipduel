"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/table",{

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Account */ \"./components/Account/index.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ErrorMessage */ \"./components/ErrorMessage/index.js\");\n/* harmony import */ var _InfoMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InfoMessage */ \"./components/InfoMessage/index.js\");\n/* harmony import */ var _MetamaskConnect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MetamaskConnect */ \"./components/MetamaskConnect/index.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Nav */ \"./components/Nav/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Layout = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), showError = ref[0], setShowError = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamaskClick = ref1[0], setMetamaskClick = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), infoMessageBoolean = ref2[0], setInfoMessageBoolean = ref2[1];\n    var errorMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.errorMessage;\n    });\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    var ref3 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), updateErrorMessage = ref3.updateErrorMessage, updateInfoMessage = ref3.updateInfoMessage;\n    var errorCancel = function() {\n        setShowError(false);\n        updateErrorMessage(null);\n    };\n    var infoMessageCancel = function() {\n        (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.disableInfoMessage)();\n        updateInfoMessage(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        document.getElementById(\"blur\").addEventListener(\"click\", function(e) {\n            (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.disableBlur)();\n            setMetamaskClick(false);\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (errorMessage !== null) {\n            setShowError(true);\n            setTimeout(function() {\n                errorCancel();\n            }, [\n                15000\n            ]);\n        }\n    }, [\n        errorMessage\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        if (infoMessage !== null) {\n            (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_5__.enableInfoMessage)();\n            setTimeout(function() {\n                infoMessageCancel();\n            }, [\n                5000\n            ]);\n        }\n    }, [\n        infoMessage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#000000\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Coinflip dapp\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        id: \"blur\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"blur\",\n                        id: \"blur-2\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, _this),\n                    showError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        errorMessage: errorMessage,\n                        cancelCallback: errorCancel\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MetamaskConnect__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        setMetamaskOnClick: setMetamaskClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InfoMessage__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        type: \"success\",\n                        text: infoMessage\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this),\n                    metamaskClick && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Account__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        setMetamaskClick: setMetamaskClick\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 27\n                    }, _this),\n                    props.children\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Layout\\\\index.js\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_s(Layout, \"8aIt3aYzmHbT02MM7ORPpJWlY5w=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztxQkFDOUM7MEJBQ1AsOERBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxRQUFROztrQ0FDckIsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNO3dCQUFDSSxFQUFFLEVBQUMsTUFBTTs7Ozs7NkJBQU87a0NBQ3RDLDhEQUFDTCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTt3QkFBQ0ksRUFBRSxFQUFDLFFBQVE7Ozs7OzZCQUFPO2tDQUV4Qyw4REFBQzFCLDZDQUFHOzs7OzZCQUFHO29CQUNORyxTQUFTLGtCQUNSLDhEQUFDTixxREFBWTt3QkFDWFksWUFBWSxFQUFFQSxZQUFZO3dCQUMxQmtCLGNBQWMsRUFBRWIsV0FBVzs7Ozs7NkJBQzNCO2tDQUdKLDhEQUFDZix3REFBZTt3QkFBQzZCLGtCQUFrQixFQUFFdEIsZ0JBQWdCOzs7Ozs2QkFBSTtrQ0FFekQsOERBQUNSLG9EQUFXO3dCQUFDK0IsSUFBSSxFQUFDLFNBQVM7d0JBQUNDLElBQUksRUFBRW5CLFdBQVc7Ozs7OzZCQUFnQjtvQkFFNUROLGFBQWEsa0JBQUksOERBQUNULGdEQUFPO3dCQUFDVSxnQkFBZ0IsRUFBRUEsZ0JBQWdCOzs7Ozs2QkFBSTtvQkFDaEVKLEtBQUssQ0FBQzZCLFFBQVE7Ozs7OztxQkFDWDs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBdkVLOUIsTUFBTTs7UUFJV1Ysb0RBQVc7UUFDWkEsb0RBQVc7OztBQUwzQlUsS0FBQUEsTUFBTTtBQXdFWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcz9kNDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVwZGF0ZXJzIGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzJ1xyXG5pbXBvcnQge1xyXG4gIGRpc2FibGVCbHVyLFxyXG4gIGRpc2FibGVJbmZvTWVzc2FnZSxcclxuICBlbmFibGVJbmZvTWVzc2FnZSxcclxufSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvY3NzJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuLi9BY2NvdW50J1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uL0Vycm9yTWVzc2FnZSdcclxuaW1wb3J0IEluZm9NZXNzYWdlIGZyb20gJy4uL0luZm9NZXNzYWdlJ1xyXG5pbXBvcnQgTWV0YW1hc2tDb25uZWN0IGZyb20gJy4uL01ldGFtYXNrQ29ubmVjdCdcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9OYXYnXHJcbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzaG93RXJyb3IsIHNldFNob3dFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbbWV0YW1hc2tDbGljaywgc2V0TWV0YW1hc2tDbGlja10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaW5mb01lc3NhZ2VCb29sZWFuLCBzZXRJbmZvTWVzc2FnZUJvb2xlYW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5lcnJvck1lc3NhZ2UpXHJcbiAgY29uc3QgaW5mb01lc3NhZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmluZm9NZXNzYWdlKVxyXG4gIGNvbnN0IHsgdXBkYXRlRXJyb3JNZXNzYWdlLCB1cGRhdGVJbmZvTWVzc2FnZSB9ID0gVXBkYXRlcnMoKVxyXG5cclxuICBjb25zdCBlcnJvckNhbmNlbCA9ICgpID0+IHtcclxuICAgIHNldFNob3dFcnJvcihmYWxzZSlcclxuICAgIHVwZGF0ZUVycm9yTWVzc2FnZShudWxsKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5mb01lc3NhZ2VDYW5jZWwgPSAoKSA9PiB7XHJcbiAgICBkaXNhYmxlSW5mb01lc3NhZ2UoKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UobnVsbClcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmx1cicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgZGlzYWJsZUJsdXIoKVxyXG4gICAgICBzZXRNZXRhbWFza0NsaWNrKGZhbHNlKVxyXG4gICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoZXJyb3JNZXNzYWdlICE9PSBudWxsKSB7XHJcbiAgICAgIHNldFNob3dFcnJvcih0cnVlKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlcnJvckNhbmNlbCgpXHJcbiAgICAgIH0sIFsxNTAwMF0pXHJcbiAgICB9XHJcbiAgfSwgW2Vycm9yTWVzc2FnZV0pXHJcblxyXG4gIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGluZm9NZXNzYWdlICE9PSBudWxsKSB7XHJcbiAgICAgIGVuYWJsZUluZm9NZXNzYWdlKClcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaW5mb01lc3NhZ2VDYW5jZWwoKVxyXG4gICAgICB9LCBbNTAwMF0pXHJcbiAgICB9XHJcbiAgfSwgW2luZm9NZXNzYWdlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29pbmZsaXAgZGFwcFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJcIiBpZD1cImJsdXJcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJcIiBpZD1cImJsdXItMlwiPjwvZGl2PlxyXG5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAge3Nob3dFcnJvciAmJiAoXHJcbiAgICAgICAgICA8RXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICBjYW5jZWxDYWxsYmFjaz17ZXJyb3JDYW5jZWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxNZXRhbWFza0Nvbm5lY3Qgc2V0TWV0YW1hc2tPbkNsaWNrPXtzZXRNZXRhbWFza0NsaWNrfSAvPlxyXG5cclxuICAgICAgICA8SW5mb01lc3NhZ2UgdHlwZT1cInN1Y2Nlc3NcIiB0ZXh0PXtpbmZvTWVzc2FnZX0+PC9JbmZvTWVzc2FnZT5cclxuXHJcbiAgICAgICAge21ldGFtYXNrQ2xpY2sgJiYgPEFjY291bnQgc2V0TWV0YW1hc2tDbGljaz17c2V0TWV0YW1hc2tDbGlja30gLz59XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiVXBkYXRlcnMiLCJkaXNhYmxlQmx1ciIsImRpc2FibGVJbmZvTWVzc2FnZSIsImVuYWJsZUluZm9NZXNzYWdlIiwiQWNjb3VudCIsIkVycm9yTWVzc2FnZSIsIkluZm9NZXNzYWdlIiwiTWV0YW1hc2tDb25uZWN0IiwiTmF2IiwiTGF5b3V0IiwicHJvcHMiLCJzaG93RXJyb3IiLCJzZXRTaG93RXJyb3IiLCJtZXRhbWFza0NsaWNrIiwic2V0TWV0YW1hc2tDbGljayIsImluZm9NZXNzYWdlQm9vbGVhbiIsInNldEluZm9NZXNzYWdlQm9vbGVhbiIsImVycm9yTWVzc2FnZSIsInN0YXRlIiwiaW5mb01lc3NhZ2UiLCJ1cGRhdGVFcnJvck1lc3NhZ2UiLCJ1cGRhdGVJbmZvTWVzc2FnZSIsImVycm9yQ2FuY2VsIiwiaW5mb01lc3NhZ2VDYW5jZWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiaWQiLCJjYW5jZWxDYWxsYmFjayIsInNldE1ldGFtYXNrT25DbGljayIsInR5cGUiLCJ0ZXh0IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout/index.js\n"));

/***/ })

});