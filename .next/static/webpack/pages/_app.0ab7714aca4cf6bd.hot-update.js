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

/***/ "./components/MetamaskConnect/index.js":
/*!*********************************************!*\
  !*** ./components/MetamaskConnect/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MetamaskConnect = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamask = ref[0], setMetamask = ref[1];\n    var accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.network), networkHelper = ref1[0], setNetworkHelper = ref1[1];\n    var ref2 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), updateAccount = ref2.updateAccount, updateErrorMessage = ref2.updateErrorMessage, updateInfoMessage = ref2.updateInfoMessage, updateInfoMessageType = ref2.updateInfoMessageType, updateInfoMessageTimeout = ref2.updateInfoMessageTimeout;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ( true && typeof window.ethereum !== \"undefined\") {\n            setMetamask(true);\n        }\n    }, []);\n    var networkOnClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return window.ethereum.request({\n                            method: \"wallet_switchEthereumChain\",\n                            params: [\n                                {\n                                    chainId: web3__WEBPACK_IMPORTED_MODULE_9___default().utils.toHex(4)\n                                }\n                            ]\n                        });\n                    case 3:\n                        props.setNetwork(\"rinkeby\");\n                        setNetworkHelper(\"rinkeby\");\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        if (_ctx.t0.message === \"User rejected the request.\") {\n                            updateInfoMessageTimeout(60000);\n                            updateInfoMessage(\"This website has limited functionality without the correct network\");\n                            updateInfoMessageType(\"failure\");\n                        } else {\n                            updateInfoMessageTimeout(60000);\n                            updateInfoMessage(_ctx.t0.message);\n                            updateInfoMessageType(\"failure\");\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function networkOnClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var metaMaskOnClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts_;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if ((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0) {\n                            if (accounts[0]) {\n                                props.setMetamaskOnClick(true);\n                                (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_8__.enableBlur)();\n                            }\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        accounts_ = _ctx.sent;\n                        updateAccount(accounts_);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        updateErrorMessage(\"Already processing request to get accounts. Please try connecting wallet manually.\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function metaMaskOnClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (metamask) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"metamask-connect flex-box align-items-center\",\n                    onClick: metaMaskOnClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.MetamaskIcon, {\n                            width: 25,\n                            height: 25\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this),\n                        (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__.formatAddress)(accounts[0])\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this),\n                props.network !== \"rinkeby\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex-box align-items-center flex-wrap\",\n                    style: {\n                        marginBottom: 20,\n                        columnGap: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.WarningIcon, {\n                            width: 28,\n                            height: 28\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            style: {\n                                fontSize: 20\n                            },\n                            children: [\n                                \"Limited functionality without the correct\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"link-styles\",\n                                    onClick: networkOnClick,\n                                    children: \"network\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n        href: \"https://metamask.io/\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"metamask-connect flex-box align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.WarningIcon, {\n                    width: 25,\n                    height: 25\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Metamask missing\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, _this);\n};\n_s(MetamaskConnect, \"uCpGhLw12dqebg3EaSAiK+VvIlM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = MetamaskConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetamaskConnect);\nvar _c;\n$RefreshReg$(_c, \"MetamaskConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFtYXNrQ29ubmVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMkQ7QUFDRTtBQUN2QjtBQUM2QjtBQUM5QjtBQUNJO0FBQ0Q7QUFDYztBQUMvQjs7QUFDdkIsSUFBTWEsZUFBZSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDakMsSUFBZ0NaLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeENhLFFBQVEsR0FBaUJiLEdBQWUsR0FBaEMsRUFBRWMsV0FBVyxHQUFJZCxHQUFlLEdBQW5CO0lBQzVCLElBQU1lLFFBQVEsR0FBR1Isd0RBQVcsQ0FBQyxTQUFDUyxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsT0FBTztLQUFBLENBQUM7SUFDdEQsSUFBMENqQixJQUF1QixHQUF2QkEsK0NBQVEsQ0FBQ1ksS0FBSyxDQUFDTSxPQUFPLENBQUMsRUFBMURDLGFBQWEsR0FBc0JuQixJQUF1QixHQUE3QyxFQUFFb0IsZ0JBQWdCLEdBQUlwQixJQUF1QixHQUEzQjtJQUN0QyxJQU1JUSxJQUFVLEdBQVZBLHdEQUFRLEVBQUUsRUFMWmEsYUFBYSxHQUtYYixJQUFVLENBTFphLGFBQWEsRUFDYkMsa0JBQWtCLEdBSWhCZCxJQUFVLENBSlpjLGtCQUFrQixFQUNsQkMsaUJBQWlCLEdBR2ZmLElBQVUsQ0FIWmUsaUJBQWlCLEVBQ2pCQyxxQkFBcUIsR0FFbkJoQixJQUFVLENBRlpnQixxQkFBcUIsRUFDckJDLHdCQUF3QixHQUN0QmpCLElBQVUsQ0FEWmlCLHdCQUF3QjtJQUcxQjFCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0UsS0FBNkIsSUFDN0IsT0FBTzJCLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFdBQVcsRUFDdEM7WUFDQWIsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNsQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTWMsY0FBYzttQkFBRywyT0FBWTs7Ozs7OytCQUV6QkYsTUFB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cUJBQ0UsOERBQUN5QixHQUFDO1FBQUNDLElBQUksRUFBQyxzQkFBc0I7a0JBQzVCLDRFQUFDWixLQUFHO1lBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7OzhCQUMzRCw4REFBQ3hDLHFEQUFXO29CQUFDMEMsS0FBSyxFQUFFLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxFQUFFOzs7Ozt5QkFBSTs4QkFDdEMsOERBQUNTLElBQUU7OEJBQUMsa0JBQWdCOzs7Ozt5QkFBSzs7Ozs7O2lCQUNyQjs7Ozs7YUFDSixDQUNMO0NBQ0Y7R0F6R0s1QyxlQUFlOztRQUVGSixvREFBVzs7O0FBRnhCSSxLQUFBQSxlQUFlO0FBMEdyQiwrREFBZUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01ldGFtYXNrQ29ubmVjdC9pbmRleC5qcz9iYzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IE1ldGFtYXNrSWNvbiwgV2FybmluZ0ljb24gfSBmcm9tICcuLi8uLi91dGlscy9pY29ucydcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHsgZm9ybWF0QWRkcmVzcyB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9ldGhlcmV1bVV0aWxzJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3QgfSBmcm9tICdAbXVpL2Jhc2UnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBVcGRhdGVycyBmcm9tICcuLi8uLi9zdGF0ZS91dGlscydcclxuaW1wb3J0IHsgZW5hYmxlQmx1ciB9IGZyb20gJy4uLy4uL3V0aWxzL2Z1bmN0aW9ucy9jc3MnXHJcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnXHJcbmNvbnN0IE1ldGFtYXNrQ29ubmVjdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFttZXRhbWFzaywgc2V0TWV0YW1hc2tdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgYWNjb3VudHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnQpXHJcbiAgY29uc3QgW25ldHdvcmtIZWxwZXIsIHNldE5ldHdvcmtIZWxwZXJdID0gdXNlU3RhdGUocHJvcHMubmV0d29yaylcclxuICBjb25zdCB7XHJcbiAgICB1cGRhdGVBY2NvdW50LFxyXG4gICAgdXBkYXRlRXJyb3JNZXNzYWdlLFxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZVR5cGUsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQsXHJcbiAgfSA9IFVwZGF0ZXJzKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICkge1xyXG4gICAgICBzZXRNZXRhbWFzayh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBuZXR3b3JrT25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiBXZWIzLnV0aWxzLnRvSGV4KDQpIH1dLFxyXG4gICAgICB9KVxyXG4gICAgICBwcm9wcy5zZXROZXR3b3JrKCdyaW5rZWJ5JylcclxuICAgICAgc2V0TmV0d29ya0hlbHBlcigncmlua2VieScpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyci5tZXNzYWdlID09PSAnVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdC4nKSB7XHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0KDYwMDAwKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKFxyXG4gICAgICAgICAgJ1RoaXMgd2Vic2l0ZSBoYXMgbGltaXRlZCBmdW5jdGlvbmFsaXR5IHdpdGhvdXQgdGhlIGNvcnJlY3QgbmV0d29yaydcclxuICAgICAgICApXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdmYWlsdXJlJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQoNjAwMDApXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2UoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdmYWlsdXJlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWV0YU1hc2tPbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnRzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChhY2NvdW50c1swXSkge1xyXG4gICAgICAgIHByb3BzLnNldE1ldGFtYXNrT25DbGljayh0cnVlKVxyXG4gICAgICAgIGVuYWJsZUJsdXIoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50c18gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXHJcbiAgICAgIH0pXHJcbiAgICAgIHVwZGF0ZUFjY291bnQoYWNjb3VudHNfKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHVwZGF0ZUVycm9yTWVzc2FnZShcclxuICAgICAgICAnQWxyZWFkeSBwcm9jZXNzaW5nIHJlcXVlc3QgdG8gZ2V0IGFjY291bnRzLiBQbGVhc2UgdHJ5IGNvbm5lY3Rpbmcgd2FsbGV0IG1hbnVhbGx5LidcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGFtYXNrKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1ldGFtYXNrLWNvbm5lY3QgZmxleC1ib3ggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e21ldGFNYXNrT25DbGlja31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWV0YW1hc2tJY29uIHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gLz5cclxuXHJcbiAgICAgICAgICB7YWNjb3VudHM/Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIDxoMz57Zm9ybWF0QWRkcmVzcyhhY2NvdW50c1swXSl9PC9oMz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxoMz5Db25uZWN0PC9oMz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtwcm9wcy5uZXR3b3JrICE9PSAncmlua2VieScgJiYgKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWJveCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCwgY29sdW1uR2FwOiAnMTBweCcgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFdhcm5pbmdJY29uIHdpZHRoPXsyOH0gaGVpZ2h0PXsyOH0gLz5cclxuICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGZvbnRTaXplOiAyMCB9fT5cclxuICAgICAgICAgICAgICBMaW1pdGVkIGZ1bmN0aW9uYWxpdHkgd2l0aG91dCB0aGUgY29ycmVjdHsnICd9XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluay1zdHlsZXNcIiBvbkNsaWNrPXtuZXR3b3JrT25DbGlja30+XHJcbiAgICAgICAgICAgICAgICBuZXR3b3JrXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vbWV0YW1hc2suaW8vXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YW1hc2stY29ubmVjdCBmbGV4LWJveCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8V2FybmluZ0ljb24gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxyXG4gICAgICAgIDxoMj5NZXRhbWFzayBtaXNzaW5nPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1ldGFtYXNrQ29ubmVjdFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJNZXRhbWFza0ljb24iLCJXYXJuaW5nSWNvbiIsIndlYjMiLCJmb3JtYXRBZGRyZXNzIiwidXNlU2VsZWN0IiwidXNlU2VsZWN0b3IiLCJVcGRhdGVycyIsImVuYWJsZUJsdXIiLCJXZWIzIiwiTWV0YW1hc2tDb25uZWN0IiwicHJvcHMiLCJtZXRhbWFzayIsInNldE1ldGFtYXNrIiwiYWNjb3VudHMiLCJzdGF0ZSIsImFjY291bnQiLCJuZXR3b3JrIiwibmV0d29ya0hlbHBlciIsInNldE5ldHdvcmtIZWxwZXIiLCJ1cGRhdGVBY2NvdW50IiwidXBkYXRlRXJyb3JNZXNzYWdlIiwidXBkYXRlSW5mb01lc3NhZ2UiLCJ1cGRhdGVJbmZvTWVzc2FnZVR5cGUiLCJ1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm5ldHdvcmtPbkNsaWNrIiwicmVxdWVzdCIsIm1ldGhvZCIsInBhcmFtcyIsImNoYWluSWQiLCJ1dGlscyIsInRvSGV4Iiwic2V0TmV0d29yayIsImVyciIsIm1lc3NhZ2UiLCJtZXRhTWFza09uQ2xpY2siLCJhY2NvdW50c18iLCJsZW5ndGgiLCJzZXRNZXRhbWFza09uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwiY29sdW1uR2FwIiwiZm9udFNpemUiLCJzcGFuIiwiYSIsImhyZWYiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MetamaskConnect/index.js\n"));

/***/ })

});