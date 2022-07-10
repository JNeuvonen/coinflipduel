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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _state_action_creators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state/action-creators */ \"./state/action-creators/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var _utils_functions_general__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/functions/general */ \"./utils/functions/general.js\");\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Account = function(props) {\n    _s();\n    var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), balance = ref[0], setBalance = ref[1];\n    var ref1 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), updateInfoMessage = ref1.updateInfoMessage, updateInfoMessageTimeout = ref1.updateInfoMessageTimeout;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var balance;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getBalance(account[0]);\n                        case 2:\n                            balance = _ctx.sent;\n                            setBalance(Number(balance));\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        asyncHelper();\n    }, []);\n    var clipboardOnClick = function() {\n        (0,_utils_functions_general__WEBPACK_IMPORTED_MODULE_9__.copyToClipBoard)(account[0]);\n        updateInfoMessageTimeout(2500);\n        updateInfoMessage(\"Copied to clipboard\");\n        (0,_state_action_creators__WEBPACK_IMPORTED_MODULE_5__.updateInfoMessageType)(\"success\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"account\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"top-right-corner cursor-pointer\",\n                onClick: function() {\n                    (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_7__.disableBlur)();\n                    props.setMetamaskClick(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_10__.CancelIcon, {\n                    width: 20,\n                    height: 20\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Account\"\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"account__info-tab flex-box flex-wrap\",\n                style: {\n                    rowGap: \"15px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex-box flex-wrap align-items-center space-between\",\n                        style: {\n                            columnGap: \"10px\",\n                            flexBasis: \"100%\",\n                            rowGap: \"10px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Connected with Metamask\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex-box flex-wrap align-items-center width100 space-between\",\n                        style: {\n                            columnGap: \"10px\",\n                            flexBasis: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                onClick: clipboardOnClick,\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_10__.CopyIcon, {\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        style: {\n                                            marginLeft: 5\n                                        },\n                                        children: (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_8__.formatAddress)(account[0])\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"flex-box flex-wrap align-items-center cursor-pointer link-cancel-default\",\n                                href: \"https://rinkeby.etherscan.io/address/\".concat(account[0]),\n                                target: \"_blank\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_10__.LinkIcon, {\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontWeight: 300,\n                                            marginLeft: 5,\n                                            fontSize: 17,\n                                            textDecoration: \"underline\"\n                                        },\n                                        className: \"cursor-pointer\",\n                                        children: \"View on etherscan\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex-box flex-wrap align-items-center\",\n                            style: {\n                                columnGap: \"5px\",\n                                flexBasis: \"100%\",\n                                rowGap: \"10px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_10__.EthereumIcon, {\n                                    width: 20,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: [\n                                        \"Balance: \",\n                                        (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_8__.formatBetsize)(balance, 2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\Account\\\\index.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Account, \"ZYc7MV0I2uu8tim4i8eqX1cdmpY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Account;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Account);\nvar _c;\n$RefreshReg$(_c, \"Account\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQWlGYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FjY291bnQvaW5kZXguanM/ZmIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQgeyB1cGRhdGVJbmZvTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9hY3Rpb24tY3JlYXRvcnMnXHJcbmltcG9ydCBVcGRhdGVycyBmcm9tICcuLi8uLi9zdGF0ZS91dGlscydcclxuaW1wb3J0IHsgZGlzYWJsZUJsdXIgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvY3NzJ1xyXG5pbXBvcnQge1xyXG4gIGZvcm1hdEFkZHJlc3MsXHJcbiAgZm9ybWF0QmV0c2l6ZSxcclxufSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvZXRoZXJldW1VdGlscydcclxuaW1wb3J0IHsgY29weVRvQ2xpcEJvYXJkIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2dlbmVyYWwnXHJcbmltcG9ydCB7XHJcbiAgQ2FuY2VsSWNvbixcclxuICBDb3B5SWNvbixcclxuICBFdGhlcmV1bUljb24sXHJcbiAgS2V5SWNvbixcclxuICBMaW5rSWNvbixcclxufSBmcm9tICcuLi8uLi91dGlscy9pY29ucydcclxuY29uc3QgQWNjb3VudCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnQpXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCB7IHVwZGF0ZUluZm9NZXNzYWdlLCB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQgfSA9IFVwZGF0ZXJzKClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXN5bmNIZWxwZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCB3ZWIzLmV0aC5nZXRCYWxhbmNlKGFjY291bnRbMF0pXHJcbiAgICAgIHNldEJhbGFuY2UoTnVtYmVyKGJhbGFuY2UpKVxyXG4gICAgfVxyXG4gICAgYXN5bmNIZWxwZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGNsaXBib2FyZE9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb3B5VG9DbGlwQm9hcmQoYWNjb3VudFswXSlcclxuICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCgyNTAwKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UoJ0NvcGllZCB0byBjbGlwYm9hcmQnKVxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdzdWNjZXNzJylcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudFwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidG9wLXJpZ2h0LWNvcm5lciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgZGlzYWJsZUJsdXIoKVxyXG4gICAgICAgICAgcHJvcHMuc2V0TWV0YW1hc2tDbGljayhmYWxzZSlcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhbmNlbEljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgyPkFjY291bnQ8L2gyPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3VudF9faW5mby10YWIgZmxleC1ib3ggZmxleC13cmFwXCJcclxuICAgICAgICBzdHlsZT17eyByb3dHYXA6ICcxNXB4JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ib3ggZmxleC13cmFwIGFsaWduLWl0ZW1zLWNlbnRlciBzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbHVtbkdhcDogJzEwcHgnLCBmbGV4QmFzaXM6ICcxMDAlJywgcm93R2FwOiAnMTBweCcgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aDM+Q29ubmVjdGVkIHdpdGggTWV0YW1hc2s8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgd2lkdGgxMDAgc3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICBzdHlsZT17eyBjb2x1bW5HYXA6ICcxMHB4JywgZmxleEJhc2lzOiAnMTAwJScgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2NsaXBib2FyZE9uQ2xpY2t9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8Q29weUljb24gd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSAvPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19Pntmb3JtYXRBZGRyZXNzKGFjY291bnRbMF0pfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgbGluay1jYW5jZWwtZGVmYXVsdFwiXHJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3JpbmtlYnkuZXRoZXJzY2FuLmlvL2FkZHJlc3MvJHthY2NvdW50WzBdfWB9XHJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rSWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBWaWV3IG9uIGV0aGVyc2NhblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2x1bW5HYXA6ICc1cHgnLCBmbGV4QmFzaXM6ICcxMDAlJywgcm93R2FwOiAnMTBweCcgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEV0aGVyZXVtSWNvbiB3aWR0aD17MjB9IGhlaWdodD17MjB9IC8+XHJcbiAgICAgICAgICAgIDxoMz5CYWxhbmNlOiB7Zm9ybWF0QmV0c2l6ZShiYWxhbmNlLCAyKX08L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEFjY291bnRcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsIndlYjMiLCJ1cGRhdGVJbmZvTWVzc2FnZVR5cGUiLCJVcGRhdGVycyIsImRpc2FibGVCbHVyIiwiZm9ybWF0QWRkcmVzcyIsImZvcm1hdEJldHNpemUiLCJjb3B5VG9DbGlwQm9hcmQiLCJDYW5jZWxJY29uIiwiQ29weUljb24iLCJFdGhlcmV1bUljb24iLCJLZXlJY29uIiwiTGlua0ljb24iLCJBY2NvdW50IiwicHJvcHMiLCJhY2NvdW50Iiwic3RhdGUiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInVwZGF0ZUluZm9NZXNzYWdlIiwidXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0IiwiYXN5bmNIZWxwZXIiLCJldGgiLCJnZXRCYWxhbmNlIiwiTnVtYmVyIiwiY2xpcGJvYXJkT25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzZXRNZXRhbWFza0NsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInN0eWxlIiwicm93R2FwIiwiY29sdW1uR2FwIiwiZmxleEJhc2lzIiwiaDMiLCJzcGFuIiwibWFyZ2luTGVmdCIsImEiLCJocmVmIiwidGFyZ2V0IiwicCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Account/index.js\n"));

/***/ })

});