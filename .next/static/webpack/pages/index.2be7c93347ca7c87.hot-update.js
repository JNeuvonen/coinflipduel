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

/***/ "./components/InfoPanel/index.js":
/*!***************************************!*\
  !*** ./components/InfoPanel/index.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks */ \"./utils/hooks/index.js\");\n/* harmony import */ var _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants/index */ \"./utils/constants/index.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n/* harmony import */ var _utils_functions_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/functions/general */ \"./utils/functions/general.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar InfoPanel = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), ethPrice = ref[0], setEthPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), lastEthPrice = ref1[0], setLastEthPrice = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), roundCount = ref2[0], setRoundCount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), totalEthWagered = ref3[0], setTotalEthWagered = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var fetchedEthPrice;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                        case 2:\n                            fetchedEthPrice = _ctx.sent;\n                            setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                            setLastEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function() {\n        setRoundCount(props.contractData.length);\n    }, [\n        props.contractData\n    ]);\n    var fetchPrice = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var fetchedEthPrice;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLastEthPrice(ethPrice);\n                        _ctx.next = 3;\n                        return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                    case 3:\n                        fetchedEthPrice = _ctx.sent;\n                        setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(fetchPrice, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 17,\n            rowGap: \"10px\",\n            columnGap: \"20px\"\n        },\n        className: \"flex-box fontWeight500 flex-wrap align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-box align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_6__.EthereumIcon, {\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        style: {\n                            marginLeft: 5\n                        },\n                        children: [\n                            \" \",\n                            \"ETH price:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: ethPrice > lastEthPrice ? _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.GREEN : _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.RED\n                                },\n                                children: [\n                                    \"$\",\n                                    ethPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Rounds Played: \",\n                    props.contractData.coinFlips\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Money Wagered: \",\n                    (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.formatBetsize)(props.contractData.moneyExchanged)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(InfoPanel, \"MZFuCJ41W2MB8ImHjtb9jIBsWKY=\", false, function() {\n    return [\n        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval\n    ];\n});\n_c = InfoPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoPanel);\nvar _c;\n$RefreshReg$(_c, \"InfoPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7cUNBQ0w7Ozs7Ozs2QkFDRjs7Ozs7O3FCQUNIOzBCQUNOLDhEQUFDaUIsS0FBRztnQkFBQ0ssU0FBUyxFQUFDLEVBQUU7O29CQUFDLGlCQUFlO29CQUFDdkIsS0FBSyxDQUFDZSxZQUFZLENBQUNnQixTQUFTOzs7Ozs7cUJBQU87MEJBQ3JFLDhEQUFDYixLQUFHOztvQkFBQyxpQkFDWTtvQkFBQzFCLDZFQUFhLENBQUNRLEtBQUssQ0FBQ2UsWUFBWSxDQUFDaUIsY0FBYyxDQUFDOzs7Ozs7cUJBQzVEOzs7Ozs7YUFDRixDQUNQO0NBQ0Y7R0F2REtqQyxTQUFTOztRQXdCYkwscURBQVc7OztBQXhCUEssS0FBQUEsU0FBUztBQXdEZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luZm9QYW5lbC9pbmRleC5qcz9kZTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBmZXRjaEV0aFByaWNlLFxyXG4gIGZvcm1hdEJldHNpemUsXHJcbiAgZ2V0Q29udHJhY3REYXRhLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9ldGhlcmV1bVV0aWxzJ1xyXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzJ1xyXG5pbXBvcnQgKiBhcyBDT05TVEFOVFMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzL2luZGV4J1xyXG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBFdGhlcmV1bUljb24gfSBmcm9tICcuLi8uLi91dGlscy9pY29ucydcclxuaW1wb3J0IHsgZ2V0RHVlbEluZm8gfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvZ2VuZXJhbCdcclxuXHJcbmNvbnN0IEluZm9QYW5lbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtldGhQcmljZSwgc2V0RXRoUHJpY2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbGFzdEV0aFByaWNlLCBzZXRMYXN0RXRoUHJpY2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbcm91bmRDb3VudCwgc2V0Um91bmRDb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEV0aFdhZ2VyZWQsIHNldFRvdGFsRXRoV2FnZXJlZF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXN5bmNIZWxwZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRFdGhQcmljZSA9IGF3YWl0IGZldGNoRXRoUHJpY2UoKVxyXG4gICAgICBzZXRFdGhQcmljZShOdW1iZXIoZmV0Y2hlZEV0aFByaWNlLmRhdGEucHJpY2UpLnRvRml4ZWQoMikpXHJcbiAgICAgIHNldExhc3RFdGhQcmljZShOdW1iZXIoZmV0Y2hlZEV0aFByaWNlLmRhdGEucHJpY2UpLnRvRml4ZWQoMikpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgc2V0Um91bmRDb3VudChwcm9wcy5jb250cmFjdERhdGEubGVuZ3RoKVxyXG4gIH0sIFtwcm9wcy5jb250cmFjdERhdGFdKVxyXG5cclxuICBjb25zdCBmZXRjaFByaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TGFzdEV0aFByaWNlKGV0aFByaWNlKVxyXG4gICAgY29uc3QgZmV0Y2hlZEV0aFByaWNlID0gYXdhaXQgZmV0Y2hFdGhQcmljZSgpXHJcbiAgICBzZXRFdGhQcmljZShOdW1iZXIoZmV0Y2hlZEV0aFByaWNlLmRhdGEucHJpY2UpLnRvRml4ZWQoMikpXHJcbiAgfVxyXG5cclxuICB1c2VJbnRlcnZhbChmZXRjaFByaWNlLCAxMDAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAxNyxcclxuICAgICAgICByb3dHYXA6ICcxMHB4JyxcclxuICAgICAgICBjb2x1bW5HYXA6ICcyMHB4JyxcclxuICAgICAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleC1ib3ggZm9udFdlaWdodDUwMCBmbGV4LXdyYXAgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWJveCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8RXRoZXJldW1JY29uIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cclxuICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19PlxyXG4gICAgICAgICAgeycgJ31cclxuICAgICAgICAgIEVUSCBwcmljZTp7JyAnfVxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogZXRoUHJpY2UgPiBsYXN0RXRoUHJpY2UgPyBDT05TVEFOVFMuR1JFRU4gOiBDT05TVEFOVFMuUkVELFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAke2V0aFByaWNlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+Um91bmRzIFBsYXllZDoge3Byb3BzLmNvbnRyYWN0RGF0YS5jb2luRmxpcHN9PC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgTW9uZXkgV2FnZXJlZDoge2Zvcm1hdEJldHNpemUocHJvcHMuY29udHJhY3REYXRhLm1vbmV5RXhjaGFuZ2VkKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1BhbmVsXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTWVtbyIsImZldGNoRXRoUHJpY2UiLCJmb3JtYXRCZXRzaXplIiwiZ2V0Q29udHJhY3REYXRhIiwidXNlSW50ZXJ2YWwiLCJDT05TVEFOVFMiLCJBcnJvd1JpZ2h0IiwiRXRoZXJldW1JY29uIiwiZ2V0RHVlbEluZm8iLCJJbmZvUGFuZWwiLCJwcm9wcyIsImV0aFByaWNlIiwic2V0RXRoUHJpY2UiLCJsYXN0RXRoUHJpY2UiLCJzZXRMYXN0RXRoUHJpY2UiLCJyb3VuZENvdW50Iiwic2V0Um91bmRDb3VudCIsInRvdGFsRXRoV2FnZXJlZCIsInNldFRvdGFsRXRoV2FnZXJlZCIsImFzeW5jSGVscGVyIiwiZmV0Y2hlZEV0aFByaWNlIiwiTnVtYmVyIiwiZGF0YSIsInByaWNlIiwidG9GaXhlZCIsImNvbnRyYWN0RGF0YSIsImxlbmd0aCIsImZldGNoUHJpY2UiLCJkaXYiLCJzdHlsZSIsImZvbnRTaXplIiwicm93R2FwIiwiY29sdW1uR2FwIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwibWFyZ2luTGVmdCIsImNvbG9yIiwiR1JFRU4iLCJSRUQiLCJjb2luRmxpcHMiLCJtb25leUV4Y2hhbmdlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InfoPanel/index.js\n"));

/***/ })

});