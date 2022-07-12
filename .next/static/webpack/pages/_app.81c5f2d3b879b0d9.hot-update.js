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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MetamaskConnect = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamask = ref[0], setMetamask = ref[1];\n    var accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref1 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), updateAccount = ref1.updateAccount, updateErrorMessage = ref1.updateErrorMessage, updateInfoMessage = ref1.updateInfoMessage, updateInfoMessageType = ref1.updateInfoMessageType, updateInfoMessageTimeout = ref1.updateInfoMessageTimeout;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ( true && typeof window.ethereum !== \"undefined\") {\n            setMetamask(true);\n        }\n    }, []);\n    var networkOnClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return window.ethereum.request({\n                            method: \"wallet_switchEthereumChain\",\n                            params: [\n                                {\n                                    chainId: web3__WEBPACK_IMPORTED_MODULE_9___default().utils.toHex(4)\n                                }\n                            ]\n                        });\n                    case 3:\n                        props.setNetwork(\"rinkeby\");\n                        setNetworkHelper(\"rinkeby\");\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        if (_ctx.t0.message === \"User rejected the request.\") {\n                            updateInfoMessageTimeout(60000);\n                            updateInfoMessage(\"This website has limited functionality without the correct network\");\n                            updateInfoMessageType(\"failure\");\n                        } else {\n                            updateInfoMessageTimeout(60000);\n                            updateInfoMessage(_ctx.t0.message);\n                            updateInfoMessageType(\"failure\");\n                        }\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function networkOnClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var metaMaskOnClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts_;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if ((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0) {\n                            if (accounts[0]) {\n                                props.setMetamaskOnClick(true);\n                                (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_8__.enableBlur)();\n                            }\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        accounts_ = _ctx.sent;\n                        updateAccount(accounts_);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        updateErrorMessage(\"Already processing request to get accounts. Please try connecting wallet manually.\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function metaMaskOnClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    console.log(props.network);\n    if (metamask) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"metamask-connect flex-box align-items-center\",\n                    onClick: metaMaskOnClick,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.MetamaskIcon, {\n                            width: 25,\n                            height: 25\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, _this),\n                        (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__.formatAddress)(accounts[0])\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: \"Connect\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, _this),\n                props.network !== \"rinkeby\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex-box align-items-center flex-wrap\",\n                    style: {\n                        marginBottom: 20,\n                        columnGap: \"10px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.WarningIcon, {\n                            width: 28,\n                            height: 28\n                        }, void 0, false, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            style: {\n                                fontSize: 20\n                            },\n                            children: [\n                                \"Limited functionality without the correct\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                    className: \"link-styles\",\n                                    onClick: networkOnClick,\n                                    children: \"network\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n        href: \"https://metamask.io/\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"metamask-connect flex-box align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.WarningIcon, {\n                    width: 25,\n                    height: 25\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Metamask missing\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, _this);\n};\n_s(MetamaskConnect, \"L7kzxts9rMQDHYfwDgyJZ4RZjhA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = MetamaskConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetamaskConnect);\nvar _c;\n$RefreshReg$(_c, \"MetamaskConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFtYXNrQ29ubmVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMkQ7QUFDRTtBQUN2QjtBQUM2QjtBQUM5QjtBQUNJO0FBQ0Q7QUFDYztBQUMvQjs7QUFDdkIsSUFBTWEsZUFBZSxHQUFHLFNBQUNDLEtBQUssRUFBSzs7SUFDakMsSUFBZ0NaLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeENhLFFBQVEsR0FBaUJiLEdBQWUsR0FBaEMsRUFBRWMsV0FBVyxHQUFJZCxHQUFlLEdBQW5CO0lBQzVCLElBQU1lLFFBQVEsR0FBR1Isd0RBQVcsQ0FBQyxTQUFDUyxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsT0FBTztLQUFBLENBQUM7SUFDdEQsSUFNSVQsSUFBVSxHQUFWQSx3REFBUSxFQUFFLEVBTFpVLGFBQWEsR0FLWFYsSUFBVSxDQUxaVSxhQUFhLEVBQ2JDLGtCQUFrQixHQUloQlgsSUFBVSxDQUpaVyxrQkFBa0IsRUFDbEJDLGlCQUFpQixHQUdmWixJQUFVLENBSFpZLGlCQUFpQixFQUNqQkMscUJBQXFCLEdBRW5CYixJQUFVLENBRlphLHFCQUFxQixFQUNyQkMsd0JBQXdCLEdBQ3RCZCxJQUFVLENBRFpjLHdCQUF3QjtJQUcxQnZCLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0UsS0FBNkIsSUFDN0IsT0FBT3dCLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFdBQVcsRUFDdEM7WUFDQVYsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNsQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTVcsY0FBYzttQkFBRywyT0FBWTs7Ozs7OytCQUV6QkYsTUFBTSxDQUFDQyxRQUFRLENBQUNFLE9BQU8sQ0FBQzs0QkFDNUJDLE1BQU0sRUFBRSw0QkFBNEI7NEJBQ3BDQyxNQUFNLEVBQUU7Z0NBQUM7b0NBQUVDLE9BQU8sRUFBRW5CLHVEQUFnQixDQUFDLENBQUMsQ0FBQztpQ0FBRTs2QkFB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QUE4Qzs7OEJBQzNELDhEQUFDekMscURBQVc7b0JBQUMyQyxLQUFLLEVBQUUsRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O3lCQUFJOzhCQUN0Qyw4REFBQ1MsSUFBRTs4QkFBQyxrQkFBZ0I7Ozs7O3lCQUFLOzs7Ozs7aUJBQ3JCOzs7OzthQUNKLENBQ0w7Q0FDRjtHQXpHSzdDLGVBQWU7O1FBRUZKLG9EQUFXOzs7QUFGeEJJLEtBQUFBLGVBQWU7QUEwR3JCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWV0YW1hc2tDb25uZWN0L2luZGV4LmpzP2JjMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWV0YW1hc2tJY29uLCBXYXJuaW5nSWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2ljb25zJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQgeyBmb3JtYXRBZGRyZXNzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2V0aGVyZXVtVXRpbHMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0BtdWkvYmFzZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVwZGF0ZXJzIGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzJ1xyXG5pbXBvcnQgeyBlbmFibGVCbHVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2NzcydcclxuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMydcclxuY29uc3QgTWV0YW1hc2tDb25uZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW21ldGFtYXNrLCBzZXRNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudClcclxuICBjb25zdCB7XHJcbiAgICB1cGRhdGVBY2NvdW50LFxyXG4gICAgdXBkYXRlRXJyb3JNZXNzYWdlLFxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZVR5cGUsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQsXHJcbiAgfSA9IFVwZGF0ZXJzKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICkge1xyXG4gICAgICBzZXRNZXRhbWFzayh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBuZXR3b3JrT25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiBXZWIzLnV0aWxzLnRvSGV4KDQpIH1dLFxyXG4gICAgICB9KVxyXG4gICAgICBwcm9wcy5zZXROZXR3b3JrKCdyaW5rZWJ5JylcclxuICAgICAgc2V0TmV0d29ya0hlbHBlcigncmlua2VieScpXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgaWYgKGVyci5tZXNzYWdlID09PSAnVXNlciByZWplY3RlZCB0aGUgcmVxdWVzdC4nKSB7XHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0KDYwMDAwKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKFxyXG4gICAgICAgICAgJ1RoaXMgd2Vic2l0ZSBoYXMgbGltaXRlZCBmdW5jdGlvbmFsaXR5IHdpdGhvdXQgdGhlIGNvcnJlY3QgbmV0d29yaydcclxuICAgICAgICApXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdmYWlsdXJlJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQoNjAwMDApXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2UoZXJyLm1lc3NhZ2UpXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdmYWlsdXJlJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWV0YU1hc2tPbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnRzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChhY2NvdW50c1swXSkge1xyXG4gICAgICAgIHByb3BzLnNldE1ldGFtYXNrT25DbGljayh0cnVlKVxyXG4gICAgICAgIGVuYWJsZUJsdXIoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50c18gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXHJcbiAgICAgIH0pXHJcbiAgICAgIHVwZGF0ZUFjY291bnQoYWNjb3VudHNfKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHVwZGF0ZUVycm9yTWVzc2FnZShcclxuICAgICAgICAnQWxyZWFkeSBwcm9jZXNzaW5nIHJlcXVlc3QgdG8gZ2V0IGFjY291bnRzLiBQbGVhc2UgdHJ5IGNvbm5lY3Rpbmcgd2FsbGV0IG1hbnVhbGx5LidcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2cocHJvcHMubmV0d29yaylcclxuICBpZiAobWV0YW1hc2spIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWV0YW1hc2stY29ubmVjdCBmbGV4LWJveCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgb25DbGljaz17bWV0YU1hc2tPbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXRhbWFza0ljb24gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxyXG5cclxuICAgICAgICAgIHthY2NvdW50cz8ubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgPGgzPntmb3JtYXRBZGRyZXNzKGFjY291bnRzWzBdKX08L2gzPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGgzPkNvbm5lY3Q8L2gzPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3Byb3BzLm5ldHdvcmsgIT09ICdyaW5rZWJ5JyAmJiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtYm94IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwLCBjb2x1bW5HYXA6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8V2FybmluZ0ljb24gd2lkdGg9ezI4fSBoZWlnaHQ9ezI4fSAvPlxyXG4gICAgICAgICAgICA8aDMgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19PlxyXG4gICAgICAgICAgICAgIExpbWl0ZWQgZnVuY3Rpb25hbGl0eSB3aXRob3V0IHRoZSBjb3JyZWN0eycgJ31cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5rLXN0eWxlc1wiIG9uQ2xpY2s9e25ldHdvcmtPbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIG5ldHdvcmtcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPVwiaHR0cHM6Ly9tZXRhbWFzay5pby9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhbWFzay1jb25uZWN0IGZsZXgtYm94IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxXYXJuaW5nSWNvbiB3aWR0aD17MjV9IGhlaWdodD17MjV9IC8+XHJcbiAgICAgICAgPGgyPk1ldGFtYXNrIG1pc3Npbmc8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWV0YW1hc2tDb25uZWN0XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlTWVtbyIsIk1ldGFtYXNrSWNvbiIsIldhcm5pbmdJY29uIiwid2ViMyIsImZvcm1hdEFkZHJlc3MiLCJ1c2VTZWxlY3QiLCJ1c2VTZWxlY3RvciIsIlVwZGF0ZXJzIiwiZW5hYmxlQmx1ciIsIldlYjMiLCJNZXRhbWFza0Nvbm5lY3QiLCJwcm9wcyIsIm1ldGFtYXNrIiwic2V0TWV0YW1hc2siLCJhY2NvdW50cyIsInN0YXRlIiwiYWNjb3VudCIsInVwZGF0ZUFjY291bnQiLCJ1cGRhdGVFcnJvck1lc3NhZ2UiLCJ1cGRhdGVJbmZvTWVzc2FnZSIsInVwZGF0ZUluZm9NZXNzYWdlVHlwZSIsInVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCIsIndpbmRvdyIsImV0aGVyZXVtIiwibmV0d29ya09uQ2xpY2siLCJyZXF1ZXN0IiwibWV0aG9kIiwicGFyYW1zIiwiY2hhaW5JZCIsInV0aWxzIiwidG9IZXgiLCJzZXROZXR3b3JrIiwic2V0TmV0d29ya0hlbHBlciIsImVyciIsIm1lc3NhZ2UiLCJtZXRhTWFza09uQ2xpY2siLCJhY2NvdW50c18iLCJsZW5ndGgiLCJzZXRNZXRhbWFza09uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwibmV0d29yayIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ3aWR0aCIsImhlaWdodCIsImgzIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJjb2x1bW5HYXAiLCJmb250U2l6ZSIsInNwYW4iLCJhIiwiaHJlZiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MetamaskConnect/index.js\n"));

/***/ })

});