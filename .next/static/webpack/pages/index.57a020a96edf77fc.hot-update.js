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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks */ \"./utils/hooks/index.js\");\n/* harmony import */ var _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants/index */ \"./utils/constants/index.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar InfoPanel = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), ethPrice = ref[0], setEthPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), lastEthPrice = ref1[0], setLastEthPrice = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var fetchedEthPrice;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                        case 2:\n                            fetchedEthPrice = _ctx.sent;\n                            setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                            setLastEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        asyncHelper();\n    }, []);\n    var fetchPrice = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var fetchedEthPrice;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLastEthPrice(ethPrice);\n                        _ctx.next = 3;\n                        return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                    case 3:\n                        fetchedEthPrice = _ctx.sent;\n                        setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(fetchPrice, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 17,\n            rowGap: \"10px\",\n            columnGap: \"20px\",\n            padding: \"10px\",\n            borderRadius: \"10px\"\n        },\n        className: \"flex-box fontWeight500 flex-wrap align-items-center default-shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-box align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_6__.EthereumIcon, {\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        style: {\n                            marginLeft: 5\n                        },\n                        children: [\n                            \" \",\n                            \"ETH price:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: ethPrice > lastEthPrice ? _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.GREEN : _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.RED\n                                },\n                                children: [\n                                    \"$\",\n                                    ethPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Rounds Played: \",\n                    props.contractData.coinFlips\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Money Wagered: \",\n                    (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.formatBetsize)(props.contractData.moneyExchanged)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(InfoPanel, \"LRQGdxoRcApmH+TzepUovcvxmJE=\", false, function() {\n    return [\n        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval\n    ];\n});\n_c = InfoPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoPanel);\nvar _c;\n$RefreshReg$(_c, \"InfoPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEksS0FBQUEsU0FBUztBQXNEZiwrREFBZUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0luZm9QYW5lbC9pbmRleC5qcz9kZTg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICBmZXRjaEV0aFByaWNlLFxyXG4gIGZvcm1hdEJldHNpemUsXHJcbiAgZ2V0Q29udHJhY3REYXRhLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9ldGhlcmV1bVV0aWxzJ1xyXG5pbXBvcnQgeyB1c2VJbnRlcnZhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2hvb2tzJ1xyXG5pbXBvcnQgKiBhcyBDT05TVEFOVFMgZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzL2luZGV4J1xyXG5pbXBvcnQgeyBBcnJvd1JpZ2h0LCBFdGhlcmV1bUljb24gfSBmcm9tICcuLi8uLi91dGlscy9pY29ucydcclxuXHJcbmNvbnN0IEluZm9QYW5lbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtldGhQcmljZSwgc2V0RXRoUHJpY2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbGFzdEV0aFByaWNlLCBzZXRMYXN0RXRoUHJpY2VdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFzeW5jSGVscGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaGVkRXRoUHJpY2UgPSBhd2FpdCBmZXRjaEV0aFByaWNlKClcclxuICAgICAgc2V0RXRoUHJpY2UoTnVtYmVyKGZldGNoZWRFdGhQcmljZS5kYXRhLnByaWNlKS50b0ZpeGVkKDIpKVxyXG4gICAgICBzZXRMYXN0RXRoUHJpY2UoTnVtYmVyKGZldGNoZWRFdGhQcmljZS5kYXRhLnByaWNlKS50b0ZpeGVkKDIpKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jSGVscGVyKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZmV0Y2hQcmljZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExhc3RFdGhQcmljZShldGhQcmljZSlcclxuICAgIGNvbnN0IGZldGNoZWRFdGhQcmljZSA9IGF3YWl0IGZldGNoRXRoUHJpY2UoKVxyXG4gICAgc2V0RXRoUHJpY2UoTnVtYmVyKGZldGNoZWRFdGhQcmljZS5kYXRhLnByaWNlKS50b0ZpeGVkKDIpKVxyXG4gIH1cclxuXHJcbiAgdXNlSW50ZXJ2YWwoZmV0Y2hQcmljZSwgMTAwMClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250U2l6ZTogMTcsXHJcbiAgICAgICAgcm93R2FwOiAnMTBweCcsXHJcbiAgICAgICAgY29sdW1uR2FwOiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4LWJveCBmb250V2VpZ2h0NTAwIGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgZGVmYXVsdC1zaGFkb3dcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYm94IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxFdGhlcmV1bUljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgRVRIIHByaWNlOnsnICd9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBldGhQcmljZSA+IGxhc3RFdGhQcmljZSA/IENPTlNUQU5UUy5HUkVFTiA6IENPTlNUQU5UUy5SRUQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICR7ZXRoUHJpY2V9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5Sb3VuZHMgUGxheWVkOiB7cHJvcHMuY29udHJhY3REYXRhLmNvaW5GbGlwc308L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBNb25leSBXYWdlcmVkOiB7Zm9ybWF0QmV0c2l6ZShwcm9wcy5jb250cmFjdERhdGEubW9uZXlFeGNoYW5nZWQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmZvUGFuZWxcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJmZXRjaEV0aFByaWNlIiwiZm9ybWF0QmV0c2l6ZSIsImdldENvbnRyYWN0RGF0YSIsInVzZUludGVydmFsIiwiQ09OU1RBTlRTIiwiQXJyb3dSaWdodCIsIkV0aGVyZXVtSWNvbiIsIkluZm9QYW5lbCIsInByb3BzIiwiZXRoUHJpY2UiLCJzZXRFdGhQcmljZSIsImxhc3RFdGhQcmljZSIsInNldExhc3RFdGhQcmljZSIsImFzeW5jSGVscGVyIiwiZmV0Y2hlZEV0aFByaWNlIiwiTnVtYmVyIiwiZGF0YSIsInByaWNlIiwidG9GaXhlZCIsImZldGNoUHJpY2UiLCJkaXYiLCJzdHlsZSIsImZvbnRTaXplIiwicm93R2FwIiwiY29sdW1uR2FwIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsIm1hcmdpbkxlZnQiLCJjb2xvciIsIkdSRUVOIiwiUkVEIiwiY29udHJhY3REYXRhIiwiY29pbkZsaXBzIiwibW9uZXlFeGNoYW5nZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InfoPanel/index.js\n"));

/***/ })

});