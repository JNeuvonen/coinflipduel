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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks */ \"./utils/hooks/index.js\");\n/* harmony import */ var _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants/index */ \"./utils/constants/index.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar InfoPanel = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), ethPrice = ref[0], setEthPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), lastEthPrice = ref1[0], setLastEthPrice = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var fetchedEthPrice;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                        case 2:\n                            fetchedEthPrice = _ctx.sent;\n                            setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                            setLastEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        asyncHelper();\n    }, []);\n    var fetchPrice = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var fetchedEthPrice;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLastEthPrice(ethPrice);\n                        _ctx.next = 3;\n                        return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                    case 3:\n                        fetchedEthPrice = _ctx.sent;\n                        setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(fetchPrice, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 18,\n            rowGap: \"10px\",\n            columnGap: \"20px\",\n            padding: \"10px\"\n        },\n        className: \"flex-box fontWeight500 flex-wrap align-items-center default-shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-box align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_6__.EthereumIcon, {\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        style: {\n                            marginLeft: 5\n                        },\n                        children: [\n                            \" \",\n                            \"ETH price:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: ethPrice > lastEthPrice ? _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.GREEN : _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.RED\n                                },\n                                children: [\n                                    \"$\",\n                                    ethPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Rounds Played: \",\n                    props.contractData.coinFlips\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Money Wagered: \",\n                    (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.formatBetsize)(props.contractData.moneyExchanged)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(InfoPanel, \"LRQGdxoRcApmH+TzepUovcvxmJE=\", false, function() {\n    return [\n        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval\n    ];\n});\n_c = InfoPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoPanel);\nvar _c;\n$RefreshReg$(_c, \"InfoPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5mb1BhbmVsL2luZGV4LmpzP2RlODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIGZldGNoRXRoUHJpY2UsXHJcbiAgZm9ybWF0QmV0c2l6ZSxcclxuICBnZXRDb250cmFjdERhdGEsXHJcbn0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2V0aGVyZXVtVXRpbHMnXHJcbmltcG9ydCB7IHVzZUludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaG9va3MnXHJcbmltcG9ydCAqIGFzIENPTlNUQU5UUyBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMvaW5kZXgnXHJcbmltcG9ydCB7IEFycm93UmlnaHQsIEV0aGVyZXVtSWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2ljb25zJ1xyXG5cclxuY29uc3QgSW5mb1BhbmVsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2V0aFByaWNlLCBzZXRFdGhQcmljZV0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtsYXN0RXRoUHJpY2UsIHNldExhc3RFdGhQcmljZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXN5bmNIZWxwZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoZWRFdGhQcmljZSA9IGF3YWl0IGZldGNoRXRoUHJpY2UoKVxyXG4gICAgICBzZXRFdGhQcmljZShOdW1iZXIoZmV0Y2hlZEV0aFByaWNlLmRhdGEucHJpY2UpLnRvRml4ZWQoMikpXHJcbiAgICAgIHNldExhc3RFdGhQcmljZShOdW1iZXIoZmV0Y2hlZEV0aFByaWNlLmRhdGEucHJpY2UpLnRvRml4ZWQoMikpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmNIZWxwZXIoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBmZXRjaFByaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TGFzdEV0aFByaWNlKGV0aFByaWNlKVxyXG4gICAgY29uc3QgZmV0Y2hlZEV0aFByaWNlID0gYXdhaXQgZmV0Y2hFdGhQcmljZSgpXHJcbiAgICBzZXRFdGhQcmljZShOdW1iZXIoZmV0Y2hlZEV0aFByaWNlLmRhdGEucHJpY2UpLnRvRml4ZWQoMikpXHJcbiAgfVxyXG5cclxuICB1c2VJbnRlcnZhbChmZXRjaFByaWNlLCAxMDAwKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGZvbnRTaXplOiAxOCxcclxuICAgICAgICByb3dHYXA6ICcxMHB4JyxcclxuICAgICAgICBjb2x1bW5HYXA6ICcyMHB4JyxcclxuICAgICAgICBwYWRkaW5nOiAnMTBweCcsXHJcbiAgICAgIH19XHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZvbnRXZWlnaHQ1MDAgZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBkZWZhdWx0LXNoYWRvd1wiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ib3ggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPEV0aGVyZXVtSWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fT5cclxuICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICBFVEggcHJpY2U6eycgJ31cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGV0aFByaWNlID4gbGFzdEV0aFByaWNlID8gQ09OU1RBTlRTLkdSRUVOIDogQ09OU1RBTlRTLlJFRCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgJHtldGhQcmljZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlJvdW5kcyBQbGF5ZWQ6IHtwcm9wcy5jb250cmFjdERhdGEuY29pbkZsaXBzfTwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIE1vbmV5IFdhZ2VyZWQ6IHtmb3JtYXRCZXRzaXplKHByb3BzLmNvbnRyYWN0RGF0YS5tb25leUV4Y2hhbmdlZCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZm9QYW5lbFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImZldGNoRXRoUHJpY2UiLCJmb3JtYXRCZXRzaXplIiwiZ2V0Q29udHJhY3REYXRhIiwidXNlSW50ZXJ2YWwiLCJDT05TVEFOVFMiLCJBcnJvd1JpZ2h0IiwiRXRoZXJldW1JY29uIiwiSW5mb1BhbmVsIiwicHJvcHMiLCJldGhQcmljZSIsInNldEV0aFByaWNlIiwibGFzdEV0aFByaWNlIiwic2V0TGFzdEV0aFByaWNlIiwiYXN5bmNIZWxwZXIiLCJmZXRjaGVkRXRoUHJpY2UiLCJOdW1iZXIiLCJkYXRhIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZmV0Y2hQcmljZSIsImRpdiIsInN0eWxlIiwiZm9udFNpemUiLCJyb3dHYXAiLCJjb2x1bW5HYXAiLCJwYWRkaW5nIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwibWFyZ2luTGVmdCIsImNvbG9yIiwiR1JFRU4iLCJSRUQiLCJjb250cmFjdERhdGEiLCJjb2luRmxpcHMiLCJtb25leUV4Y2hhbmdlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InfoPanel/index.js\n"));

/***/ })

});