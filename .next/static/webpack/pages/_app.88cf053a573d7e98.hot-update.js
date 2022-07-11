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

/***/ "./components/ViewOnEtherscan/index.js":
/*!*********************************************!*\
  !*** ./components/ViewOnEtherscan/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar ViewOnEtherScan = function(param) {\n    var account = param.account;\n    var ref = (0,_state_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), updateInfoMessage = ref.updateInfoMessage, updateInfoMessageTimeout = ref.updateInfoMessageTimeout, updateInfoMessageType = ref.updateInfoMessageType;\n    var clipboardOnClick = function() {\n        copyToClipBoard(account[0]);\n        updateInfoMessageTimeout(2500);\n        updateInfoMessage(\"Copied to clipboard\");\n        updateInfoMessageType(\"success\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex-box flex-wrap align-items-center width100 space-between\",\n            style: {\n                columnGap: \"10px\",\n                flexBasis: \"100%\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: clipboardOnClick,\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_4__.CopyIcon, {\n                            width: 20,\n                            height: 20\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                marginLeft: 5\n                            },\n                            children: (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.formatAddress)(account)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"flex-box flex-wrap align-items-center cursor-pointer link-cancel-default\",\n                    href: \"https://rinkeby.etherscan.io/address/\".concat(account),\n                    target: \"_blank\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_4__.LinkIcon, {\n                            width: 20,\n                            height: 20\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                fontWeight: 300,\n                                marginLeft: 5,\n                                fontSize: 17,\n                                textDecoration: \"underline\"\n                            },\n                            className: \"cursor-pointer\",\n                            children: \"View on etherscan\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\ViewOnEtherscan\\\\index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = ViewOnEtherScan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewOnEtherScan);\nvar _c;\n$RefreshReg$(_c, \"ViewOnEtherScan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1ZpZXdPbkV0aGVyc2Nhbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF5QjtBQUNlO0FBQzJCO0FBQ2I7QUFDdEQsSUFBTUssZUFBZSxHQUFHLGdCQUFpQjtRQUFkQyxPQUFPLFNBQVBBLE9BQU87SUFDaEMsSUFDRUwsR0FBVSxHQUFWQSx3REFBUSxFQUFFLEVBREpNLGlCQUFpQixHQUN2Qk4sR0FBVSxDQURKTSxpQkFBaUIsRUFBRUMsd0JBQXdCLEdBQ2pEUCxHQUFVLENBRGVPLHdCQUF3QixFQUFFQyxxQkFBcUIsR0FDeEVSLEdBQVUsQ0FEeUNRLHFCQUFxQjtJQUcxRSxJQUFNQyxnQkFBZ0IsR0FBRyxXQUFNO1FBQzdCQyxlQUFlLENBQUNMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQkUsd0JBQXdCLENBQUMsSUFBSSxDQUFDO1FBQzlCRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztRQUN4Q0UscUJBQXFCLENBQUMsU0FBUyxDQUFDO0tBQ2pDO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNHLEtBQUc7WUFDRkMsU0FBUyxFQUFDLDhEQUE4RDtZQUN4RUMsS0FBSyxFQUFFO2dCQUFFQyxTQUFTLEVBQUUsTUFBTTtnQkFBRUMsU0FBUyxFQUFFLE1BQU07YUFBRTs7OEJBRS9DLDhEQUFDSixLQUFHO29CQUFDSyxPQUFPLEVBQUVQLGdCQUFnQjtvQkFBRUcsU0FBUyxFQUFDLEVBQUU7O3NDQUMxQyw4REFBQ1Ysa0RBQVE7NEJBQUNlLEtBQUssRUFBRSxFQUFFOzRCQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7aUNBQUk7c0NBQ25DLDhEQUFDQyxNQUFJOzRCQUFDTixLQUFLLEVBQUU7Z0NBQUVPLFVBQVUsRUFBRSxDQUFDOzZCQUFFO3NDQUFHbkIsNkVBQWEsQ0FBQ0ksT0FBTyxDQUFDOzs7OztpQ0FBUTs7Ozs7O3lCQUMzRDs4QkFFTiw4REFBQ2dCLEdBQUM7b0JBQ0FULFNBQVMsRUFBQywwRUFBMEU7b0JBQ3BGVSxJQUFJLEVBQUUsdUNBQXNDLENBQVUsT0FBUmpCLE9BQU8sQ0FBRTtvQkFDdkRrQixNQUFNLEVBQUMsUUFBUTs7c0NBRWYsOERBQUNwQixrREFBUTs0QkFBQ2MsS0FBSyxFQUFFLEVBQUU7NEJBQUVDLE1BQU0sRUFBRSxFQUFFOzs7OztpQ0FBSTtzQ0FDbkMsOERBQUNNLEdBQUM7NEJBQ0FYLEtBQUssRUFBRTtnQ0FDTFksVUFBVSxFQUFFLEdBQUc7Z0NBQ2ZMLFVBQVUsRUFBRSxDQUFDO2dDQUNiTSxRQUFRLEVBQUUsRUFBRTtnQ0FDWkMsY0FBYyxFQUFFLFdBQVc7NkJBQzVCOzRCQUNEZixTQUFTLEVBQUMsZ0JBQWdCO3NDQUMzQixtQkFFRDs7Ozs7aUNBQUk7Ozs7Ozt5QkFDRjs7Ozs7O2lCQUNBO3FCQUNMLENBQ0o7Q0FDRjtBQTNDS1IsS0FBQUEsZUFBZTtBQTRDckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWV3T25FdGhlcnNjYW4vaW5kZXguanM/MmIzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBVcGRhdGVycyBmcm9tICcuLi8uLi9zdGF0ZS91dGlscydcclxuaW1wb3J0IHsgZm9ybWF0QWRkcmVzcyB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9ldGhlcmV1bVV0aWxzJ1xyXG5pbXBvcnQgeyBDb3B5SWNvbiwgTGlua0ljb24gfSBmcm9tICcuLi8uLi91dGlscy9pY29ucydcclxuY29uc3QgVmlld09uRXRoZXJTY2FuID0gKHsgYWNjb3VudCB9KSA9PiB7XHJcbiAgY29uc3QgeyB1cGRhdGVJbmZvTWVzc2FnZSwgdXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0LCB1cGRhdGVJbmZvTWVzc2FnZVR5cGUgfSA9XHJcbiAgICBVcGRhdGVycygpXHJcblxyXG4gIGNvbnN0IGNsaXBib2FyZE9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb3B5VG9DbGlwQm9hcmQoYWNjb3VudFswXSlcclxuICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCgyNTAwKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UoJ0NvcGllZCB0byBjbGlwYm9hcmQnKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdzdWNjZXNzJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ib3ggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciB3aWR0aDEwMCBzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBzdHlsZT17eyBjb2x1bW5HYXA6ICcxMHB4JywgZmxleEJhc2lzOiAnMTAwJScgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17Y2xpcGJvYXJkT25DbGlja30gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8Q29weUljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fT57Zm9ybWF0QWRkcmVzcyhhY2NvdW50KX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWJveCBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIGxpbmstY2FuY2VsLWRlZmF1bHRcIlxyXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8ke2FjY291bnR9YH1cclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmtJY29uIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE3LFxyXG4gICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBWaWV3IG9uIGV0aGVyc2NhblxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVmlld09uRXRoZXJTY2FuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVwZGF0ZXJzIiwiZm9ybWF0QWRkcmVzcyIsIkNvcHlJY29uIiwiTGlua0ljb24iLCJWaWV3T25FdGhlclNjYW4iLCJhY2NvdW50IiwidXBkYXRlSW5mb01lc3NhZ2UiLCJ1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQiLCJ1cGRhdGVJbmZvTWVzc2FnZVR5cGUiLCJjbGlwYm9hcmRPbkNsaWNrIiwiY29weVRvQ2xpcEJvYXJkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb2x1bW5HYXAiLCJmbGV4QmFzaXMiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwibWFyZ2luTGVmdCIsImEiLCJocmVmIiwidGFyZ2V0IiwicCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ViewOnEtherscan/index.js\n"));

/***/ })

});