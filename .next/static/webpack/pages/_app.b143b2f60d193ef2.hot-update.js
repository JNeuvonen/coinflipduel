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

/***/ "./components/Account/index.js":
/*!*************************************!*\
  !*** ./components/Account/index.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_functions_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions/general */ \"./utils/functions/general.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Account = function(props) {\n    _s();\n    var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), updateInfoMessage = ref1.updateInfoMessage, updateInfoMessageTimeout = ref1.updateInfoMessageTimeout, updateInfoMessageType = ref1.updateInfoMessageType;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var balance;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getBalance(account[0]);\n                        case 2:\n                            balance = _ctx.sent;\n                            setBalance(Number(balance));\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        asyncHelper();\n    }, []);\n    var clipboardOnClick = function() {\n        (0,_utils_functions_general__WEBPACK_IMPORTED_MODULE_8__.copyToClipBoard)(account[0]);\n        updateInfoMessageTimeout(2500);\n        updateInfoMessage(\"Copied to clipboard\");\n        updateInfoMessageType(\"success\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"account\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"top-right-corner cursor-pointer\",\n                onClick: function() {\n                    (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_6__.disableBlur)();\n                    props.setMetamaskClick(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_9__.CancelIcon, {\n                    width: 20,\n                    height: 20\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Account\"\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"account__info-tab flex-box flex-wrap\",\n                style: {\n                    rowGap: \"15px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex-box flex-wrap align-items-center space-between\",\n                        style: {\n                            columnGap: \"10px\",\n                            flexBasis: \"100%\",\n                            rowGap: \"10px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Connected with Metamask\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex-box flex-wrap align-items-center width100 space-between\",\n                        style: {\n                            columnGap: \"10px\",\n                            flexBasis: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                onClick: clipboardOnClick,\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_9__.CopyIcon, {\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        style: {\n                                            marginLeft: 5\n                                        },\n                                        children: (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(account[0])\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"flex-box flex-wrap align-items-center cursor-pointer link-cancel-default\",\n                                href: \"https://rinkeby.etherscan.io/address/\".concat(account[0]),\n                                target: \"_blank\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_9__.LinkIcon, {\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: 300,\n                                            marginLeft: 5,\n                                            fontSize: 17,\n                                            textDecoration: \"underline\"\n                                        },\n                                        className: \"cursor-pointer\",\n                                        children: \"View on etherscan\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex-box flex-wrap align-items-center\",\n                            style: {\n                                columnGap: \"5px\",\n                                flexBasis: \"100%\",\n                                rowGap: \"10px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_9__.EthereumIcon, {\n                                    width: 20,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Balance: \",\n                                        (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_7__.formatBetsize)(balance, 2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(Account, \"ZYc7MV0I2uu8tim4i8eqX1cdmpY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXOzs7QUFEdkJXLEtBQUFBLE9BQU87QUFrRmIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50L2luZGV4LmpzP2ZiM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IFVwZGF0ZXJzIGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzJ1xyXG5pbXBvcnQgeyBkaXNhYmxlQmx1ciB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9jc3MnXHJcbmltcG9ydCB7XHJcbiAgZm9ybWF0QWRkcmVzcyxcclxuICBmb3JtYXRCZXRzaXplLFxyXG59IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9ldGhlcmV1bVV0aWxzJ1xyXG5pbXBvcnQgeyBjb3B5VG9DbGlwQm9hcmQgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvZ2VuZXJhbCdcclxuaW1wb3J0IHsgQ2FuY2VsSWNvbiwgQ29weUljb24sIEV0aGVyZXVtSWNvbiwgTGlua0ljb24gfSBmcm9tICcuLi8uLi91dGlscy9pY29ucydcclxuY29uc3QgQWNjb3VudCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnQpXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCB7IHVwZGF0ZUluZm9NZXNzYWdlLCB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQsIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSB9ID1cclxuICAgIFVwZGF0ZXJzKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXN5bmNIZWxwZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB3ZWIzLmV0aC5nZXRCYWxhbmNlKGFjY291bnRbMF0pXHJcbiAgICAgIHNldEJhbGFuY2UoTnVtYmVyKGJhbGFuY2UpKVxyXG4gICAgfVxyXG4gICAgYXN5bmNIZWxwZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGNsaXBib2FyZE9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb3B5VG9DbGlwQm9hcmQoYWNjb3VudFswXSlcclxuICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCgyNTAwKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UoJ0NvcGllZCB0byBjbGlwYm9hcmQnKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdzdWNjZXNzJylcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidG9wLXJpZ2h0LWNvcm5lciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZGlzYWJsZUJsdXIoKVxyXG4gICAgICAgICAgcHJvcHMuc2V0TWV0YW1hc2tDbGljayhmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhbmNlbEljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgyPkFjY291bnQ8L2gyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3VudF9faW5mby10YWIgZmxleC1ib3ggZmxleC13cmFwXCJcclxuICAgICAgICBzdHlsZT17eyByb3dHYXA6ICcxNXB4JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ib3ggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbHVtbkdhcDogJzEwcHgnLCBmbGV4QmFzaXM6ICcxMDAlJywgcm93R2FwOiAnMTBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDM+Q29ubmVjdGVkIHdpdGggTWV0YW1hc2s8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgd2lkdGgxMDAgc3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBjb2x1bW5HYXA6ICcxMHB4JywgZmxleEJhc2lzOiAnMTAwJScgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NsaXBib2FyZE9uQ2xpY2t9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8Q29weUljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19Pntmb3JtYXRBZGRyZXNzKGFjY291bnRbMF0pfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbGluay1jYW5jZWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL2FkZHJlc3MvJHthY2NvdW50WzBdfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rSWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBWaWV3IG9uIGV0aGVyc2NhblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2x1bW5HYXA6ICc1cHgnLCBmbGV4QmFzaXM6ICcxMDAlJywgcm93R2FwOiAnMTBweCcgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEV0aGVyZXVtSWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgICAgIDxoMz5CYWxhbmNlOiB7Zm9ybWF0QmV0c2l6ZShiYWxhbmNlLCAyKX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIndlYjMiLCJVcGRhdGVycyIsImRpc2FibGVCbHVyIiwiZm9ybWF0QWRkcmVzcyIsImZvcm1hdEJldHNpemUiLCJjb3B5VG9DbGlwQm9hcmQiLCJDYW5jZWxJY29uIiwiQ29weUljb24iLCJFdGhlcmV1bUljb24iLCJMaW5rSWNvbiIsIkFjY291bnQiLCJwcm9wcyIsImFjY291bnQiLCJzdGF0ZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwidXBkYXRlSW5mb01lc3NhZ2UiLCJ1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQiLCJ1cGRhdGVJbmZvTWVzc2FnZVR5cGUiLCJhc3luY0hlbHBlciIsImV0aCIsImdldEJhbGFuY2UiLCJOdW1iZXIiLCJjbGlwYm9hcmRPbkNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNldE1ldGFtYXNrQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImgyIiwic3R5bGUiLCJyb3dHYXAiLCJjb2x1bW5HYXAiLCJmbGV4QmFzaXMiLCJoMyIsInNwYW4iLCJtYXJnaW5MZWZ0IiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJwIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dERlY29yYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account/index.js\n"));

/***/ })

});