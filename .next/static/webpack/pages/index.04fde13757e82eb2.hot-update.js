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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/hooks */ \"./utils/hooks/index.js\");\n/* harmony import */ var _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/constants/index */ \"./utils/constants/index.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar InfoPanel = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), ethPrice = ref[0], setEthPrice = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), lastEthPrice = ref1[0], setLastEthPrice = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var fetchedEthPrice;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                        case 2:\n                            fetchedEthPrice = _ctx.sent;\n                            setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                            setLastEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        asyncHelper();\n    }, []);\n    var fetchPrice = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var fetchedEthPrice;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        setLastEthPrice(ethPrice);\n                        _ctx.next = 3;\n                        return (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.fetchEthPrice)();\n                    case 3:\n                        fetchedEthPrice = _ctx.sent;\n                        setEthPrice(Number(fetchedEthPrice.data.price).toFixed(2));\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchPrice() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval)(fetchPrice, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        style: {\n            fontSize: 17,\n            rowGap: \"10px\",\n            columnGap: \"20px\"\n        },\n        className: \"flex-box fontWeight500 flex-wrap align-items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex-box align-items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_6__.EthereumIcon, {\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        style: {\n                            marginLeft: 5\n                        },\n                        children: [\n                            \" \",\n                            \"ETH price:\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: ethPrice > lastEthPrice ? _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.GREEN : _utils_constants_index__WEBPACK_IMPORTED_MODULE_5__.RED\n                                },\n                                children: [\n                                    \"$\",\n                                    ethPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    \"Rounds Played: \",\n                    props.contractData.coinFlips\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    \"Money Wagered: \",\n                    (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_3__.formatBetsize)(props.contractData.moneyExchanged)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\InfoPanel\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_s(InfoPanel, \"LRQGdxoRcApmH+TzepUovcvxmJE=\", false, function() {\n    return [\n        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__.useInterval\n    ];\n});\n_c = InfoPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoPanel);\nvar _c;\n$RefreshReg$(_c, \"InfoPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmZvUGFuZWwvaW5kZXguanM/ZGU4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hFdGhQcmljZSxcclxuICBmb3JtYXRCZXRzaXplLFxyXG4gIGdldENvbnRyYWN0RGF0YSxcclxufSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvZXRoZXJldW1VdGlscydcclxuaW1wb3J0IHsgdXNlSW50ZXJ2YWwgfSBmcm9tICcuLi8uLi91dGlscy9ob29rcydcclxuaW1wb3J0ICogYXMgQ09OU1RBTlRTIGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cy9pbmRleCdcclxuaW1wb3J0IHsgQXJyb3dSaWdodCwgRXRoZXJldW1JY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvaWNvbnMnXHJcblxyXG5jb25zdCBJbmZvUGFuZWwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbZXRoUHJpY2UsIHNldEV0aFByaWNlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2xhc3RFdGhQcmljZSwgc2V0TGFzdEV0aFByaWNlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhc3luY0hlbHBlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hlZEV0aFByaWNlID0gYXdhaXQgZmV0Y2hFdGhQcmljZSgpXHJcbiAgICAgIHNldEV0aFByaWNlKE51bWJlcihmZXRjaGVkRXRoUHJpY2UuZGF0YS5wcmljZSkudG9GaXhlZCgyKSlcclxuICAgICAgc2V0TGFzdEV0aFByaWNlKE51bWJlcihmZXRjaGVkRXRoUHJpY2UuZGF0YS5wcmljZSkudG9GaXhlZCgyKSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luY0hlbHBlcigpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGZldGNoUHJpY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMYXN0RXRoUHJpY2UoZXRoUHJpY2UpXHJcbiAgICBjb25zdCBmZXRjaGVkRXRoUHJpY2UgPSBhd2FpdCBmZXRjaEV0aFByaWNlKClcclxuICAgIHNldEV0aFByaWNlKE51bWJlcihmZXRjaGVkRXRoUHJpY2UuZGF0YS5wcmljZSkudG9GaXhlZCgyKSlcclxuICB9XHJcblxyXG4gIHVzZUludGVydmFsKGZldGNoUHJpY2UsIDEwMDApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZm9udFNpemU6IDE3LFxyXG4gICAgICAgIHJvd0dhcDogJzEwcHgnLFxyXG4gICAgICAgIGNvbHVtbkdhcDogJzIwcHgnLFxyXG4gICAgICB9fVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4LWJveCBmb250V2VpZ2h0NTAwIGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYm94IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxFdGhlcmV1bUljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgRVRIIHByaWNlOnsnICd9XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBldGhQcmljZSA+IGxhc3RFdGhQcmljZSA/IENPTlNUQU5UUy5HUkVFTiA6IENPTlNUQU5UUy5SRUQsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICR7ZXRoUHJpY2V9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5Sb3VuZHMgUGxheWVkOiB7cHJvcHMuY29udHJhY3REYXRhLmNvaW5GbGlwc308L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICBNb25leSBXYWdlcmVkOiB7Zm9ybWF0QmV0c2l6ZShwcm9wcy5jb250cmFjdERhdGEubW9uZXlFeGNoYW5nZWQpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmZvUGFuZWxcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJmZXRjaEV0aFByaWNlIiwiZm9ybWF0QmV0c2l6ZSIsImdldENvbnRyYWN0RGF0YSIsInVzZUludGVydmFsIiwiQ09OU1RBTlRTIiwiQXJyb3dSaWdodCIsIkV0aGVyZXVtSWNvbiIsIkluZm9QYW5lbCIsInByb3BzIiwiZXRoUHJpY2UiLCJzZXRFdGhQcmljZSIsImxhc3RFdGhQcmljZSIsInNldExhc3RFdGhQcmljZSIsImFzeW5jSGVscGVyIiwiZmV0Y2hlZEV0aFByaWNlIiwiTnVtYmVyIiwiZGF0YSIsInByaWNlIiwidG9GaXhlZCIsImZldGNoUHJpY2UiLCJkaXYiLCJzdHlsZSIsImZvbnRTaXplIiwicm93R2FwIiwiY29sdW1uR2FwIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwibWFyZ2luTGVmdCIsImNvbG9yIiwiR1JFRU4iLCJSRUQiLCJjb250cmFjdERhdGEiLCJjb2luRmxpcHMiLCJtb25leUV4Y2hhbmdlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InfoPanel/index.js\n"));

/***/ })

});