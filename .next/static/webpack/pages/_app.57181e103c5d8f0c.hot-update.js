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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _ethereum_coinflipduel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/coinflipduel */ \"./ethereum/coinflipduel.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _state_store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/store.js */ \"./state/store.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _style_css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/css/style.css */ \"./style/css/style.css\");\n/* harmony import */ var _style_css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,_state_utils__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(), updateAccount = ref.updateAccount, updateInfoMessage = ref.updateInfoMessage, updateInfoMessageTimeout = ref.updateInfoMessageTimeout, updateInfoMessageType = ref.updateInfoMessageType;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), coinFlips = ref1[0], setCoinflips = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), coinFlipDuelContracts = ref2[0], setCoinflipHistories = ref2[1];\n    var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.account;\n    });\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    var mobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_13__.useMediaQuery)(\"(max-width:600px)\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(process.env.MNENOMIC);\n        if (mobile) {\n            updateInfoMessage(\"This site has limited support for mobile devices since Web3 wallets are currently not supported for mobile phones currently.\");\n            updateInfoMessageTimeout(60000);\n            updateInfoMessageType(\"failure\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (account) {\n            if (account.length > 0) {\n                var provider = ethers__WEBPACK_IMPORTED_MODULE_14__.ethers.getDefaultProvider(_utils_constants__WEBPACK_IMPORTED_MODULE_11__.NETWORK);\n                var lastBalance = ethers__WEBPACK_IMPORTED_MODULE_14__.ethers.constants.Zero;\n                var ignoreFirst = false;\n                provider.on(\"block\", function() {\n                    provider.getBalance(account[0]).then(function(balance) {\n                        if (!balance.eq(lastBalance)) {\n                            lastBalance = balance;\n                            // convert a currency unit from wei to ether\n                            if (ignoreFirst) {\n                                if (infoMessage === null) {\n                                    updateInfoMessageTimeout(60000);\n                                    updateInfoMessage(\"Balance changed!\");\n                                    updateInfoMessageType(\"success\");\n                                }\n                            } else {\n                                ignoreFirst = true;\n                            }\n                        }\n                    });\n                });\n            }\n        }\n    }, [\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var coinflipDuelAddresses, coinFlipDuelContractsHelper, coinFlipsHelper, invidualCoinflips, i, coinflipDuel, coinflipDuelHistory, dict, accounts;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__[\"default\"].methods.getDeployedCoinflipDuels().call();\n                        case 2:\n                            coinflipDuelAddresses = _ctx.sent;\n                            coinFlipDuelContractsHelper = [];\n                            coinFlipsHelper = [];\n                            invidualCoinflips = [];\n                            i = 0;\n                        case 7:\n                            if (!(i < coinflipDuelAddresses.length)) {\n                                _ctx.next = 21;\n                                break;\n                            }\n                            _ctx.next = 10;\n                            return (0,_ethereum_coinflipduel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(coinflipDuelAddresses[i]);\n                        case 10:\n                            coinflipDuel = _ctx.sent;\n                            _ctx.next = 13;\n                            return coinflipDuel.methods.getSummary().call();\n                        case 13:\n                            coinflipDuelHistory = _ctx.sent;\n                            if (coinflipDuelHistory[0].length > 0) {\n                                coinflipDuelHistory[0].forEach(function(item) {\n                                    invidualCoinflips.push(item);\n                                });\n                            }\n                            dict = {\n                                contract: coinflipDuel,\n                                history: coinflipDuelHistory\n                            };\n                            coinFlipDuelContractsHelper.push(dict);\n                            if (coinflipDuelHistory[0].length > 0) {\n                                coinFlipsHelper.push(coinflipDuelHistory[0]);\n                            }\n                        case 18:\n                            i++;\n                            _ctx.next = 7;\n                            break;\n                        case 21:\n                            setCoinflips(invidualCoinflips);\n                            setCoinflipHistories(coinFlipDuelContractsHelper);\n                            _ctx.next = 25;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].eth.getAccounts();\n                        case 25:\n                            accounts = _ctx.sent;\n                            updateAccount(accounts);\n                        case 27:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (window.ethereum) {\n            window.ethereum.on(\"accountsChanged\", (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var accounts;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].eth.getAccounts();\n                        case 2:\n                            accounts = _ctx.sent;\n                            updateAccount(accounts);\n                            updateInfoMessage(\"Changed account\");\n                            updateInfoMessageTimeout(2500);\n                            updateInfoMessageType(\"success\");\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            })));\n        }\n        asyncHelper();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"%PUBLIC_URL%/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, maximum-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"theme-color\",\n                        content: \"#000000\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Coinflip.app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Coinflip.app\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n                store: _state_store_js__WEBPACK_IMPORTED_MODULE_8__.store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    coinFlips: coinFlips,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"])({}, pageProps), {\n                        coinFlipDuelContracts: coinFlipDuelContracts,\n                        coinFlips: coinFlips\n                    }), void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(MyApp, \"PHnY2gVELFKVA32mhNR0J8l9A0M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        _mui_material__WEBPACK_IMPORTED_MODULE_13__.useMediaQuery\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = _state_store_js__WEBPACK_IMPORTED_MODULE_8__.wrapper.withRedux(MyApp));\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0QjswQkFFUCw4REFBQ3pFLGlEQUFRO2dCQUFDTSxLQUFLLEVBQUVBLGtEQUFLOzBCQUNwQiw0RUFBQ0osMERBQU07b0JBQUNpQixTQUFTLEVBQUVBLFNBQVM7OEJBQzFCLDRFQUFDTixTQUFTLDRLQUNKQyxTQUFTO3dCQUNiTyxxQkFBcUIsRUFBRUEscUJBQXFCO3dCQUM1Q0YsU0FBUyxFQUFFQSxTQUFTOzs7Ozs2QkFDcEI7Ozs7O3lCQUNLOzs7OztxQkFDQTs7b0JBQ1YsQ0FDSjtDQUNGO0dBckhLUCxLQUFLOztRQVNPWCxvREFBVztRQUNQQSxvREFBVztRQUNoQlMseURBQWE7OztBQVh4QkUsS0FBQUEsS0FBSztBQXVIWCwrREFBZUwsTUFBQUEsOERBQWlCLENBQUNLLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb3ZpZGVyLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xyXG5pbXBvcnQgY29pbmZsaXBkdWVsIGZyb20gJy4uL2V0aGVyZXVtL2NvaW5mbGlwZHVlbCdcclxuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHsgc3RvcmUsIHdyYXBwZXIgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZS5qcydcclxuaW1wb3J0IFVwZGF0ZXJzIGZyb20gJy4uL3N0YXRlL3V0aWxzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL2Nzcy9zdHlsZS5jc3MnXHJcbmltcG9ydCB7IE5FVFdPUksgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnXHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB1cGRhdGVBY2NvdW50LFxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2UsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZVR5cGUsXHJcbiAgfSA9IFVwZGF0ZXJzKClcclxuICBjb25zdCBbY29pbkZsaXBzLCBzZXRDb2luZmxpcHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2NvaW5GbGlwRHVlbENvbnRyYWN0cywgc2V0Q29pbmZsaXBIaXN0b3JpZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgYWNjb3VudCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudClcclxuICBjb25zdCBpbmZvTWVzc2FnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaW5mb01lc3NhZ2UpXHJcbiAgY29uc3QgbW9iaWxlID0gdXNlTWVkaWFRdWVyeSgnKG1heC13aWR0aDo2MDBweCknKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTU5FTk9NSUMpXHJcbiAgICBpZiAobW9iaWxlKSB7XHJcbiAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKFxyXG4gICAgICAgICdUaGlzIHNpdGUgaGFzIGxpbWl0ZWQgc3VwcG9ydCBmb3IgbW9iaWxlIGRldmljZXMgc2luY2UgV2ViMyB3YWxsZXRzIGFyZSBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBmb3IgbW9iaWxlIHBob25lcyBjdXJyZW50bHkuJ1xyXG4gICAgICApXHJcbiAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCg2MDAwMClcclxuICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdmYWlsdXJlJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhY2NvdW50KSB7XHJcbiAgICAgIGlmIChhY2NvdW50Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IGV0aGVycy5nZXREZWZhdWx0UHJvdmlkZXIoTkVUV09SSylcclxuICAgICAgICBsZXQgbGFzdEJhbGFuY2UgPSBldGhlcnMuY29uc3RhbnRzLlplcm9cclxuICAgICAgICBsZXQgaWdub3JlRmlyc3QgPSBmYWxzZVxyXG4gICAgICAgIHByb3ZpZGVyLm9uKCdibG9jaycsICgpID0+IHtcclxuICAgICAgICAgIHByb3ZpZGVyLmdldEJhbGFuY2UoYWNjb3VudFswXSkudGhlbigoYmFsYW5jZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWJhbGFuY2UuZXEobGFzdEJhbGFuY2UpKSB7XHJcbiAgICAgICAgICAgICAgbGFzdEJhbGFuY2UgPSBiYWxhbmNlXHJcbiAgICAgICAgICAgICAgLy8gY29udmVydCBhIGN1cnJlbmN5IHVuaXQgZnJvbSB3ZWkgdG8gZXRoZXJcclxuICAgICAgICAgICAgICBpZiAoaWdub3JlRmlyc3QpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmZvTWVzc2FnZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQoNjAwMDApXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKCdCYWxhbmNlIGNoYW5nZWQhJylcclxuICAgICAgICAgICAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWdub3JlRmlyc3QgPSB0cnVlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWNjb3VudF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGFzeW5jSGVscGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjb2luZmxpcER1ZWxBZGRyZXNzZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcclxuICAgICAgICAuZ2V0RGVwbG95ZWRDb2luZmxpcER1ZWxzKClcclxuICAgICAgICAuY2FsbCgpXHJcbiAgICAgIGNvbnN0IGNvaW5GbGlwRHVlbENvbnRyYWN0c0hlbHBlciA9IFtdXHJcbiAgICAgIGNvbnN0IGNvaW5GbGlwc0hlbHBlciA9IFtdXHJcbiAgICAgIGNvbnN0IGludmlkdWFsQ29pbmZsaXBzID0gW11cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbmZsaXBEdWVsQWRkcmVzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29pbmZsaXBEdWVsID0gYXdhaXQgY29pbmZsaXBkdWVsKGNvaW5mbGlwRHVlbEFkZHJlc3Nlc1tpXSlcclxuICAgICAgICBjb25zdCBjb2luZmxpcER1ZWxIaXN0b3J5ID0gYXdhaXQgY29pbmZsaXBEdWVsLm1ldGhvZHNcclxuICAgICAgICAgIC5nZXRTdW1tYXJ5KClcclxuICAgICAgICAgIC5jYWxsKClcclxuXHJcbiAgICAgICAgaWYgKGNvaW5mbGlwRHVlbEhpc3RvcnlbMF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29pbmZsaXBEdWVsSGlzdG9yeVswXS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGludmlkdWFsQ29pbmZsaXBzLnB1c2goaXRlbSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRpY3QgPSB7IGNvbnRyYWN0OiBjb2luZmxpcER1ZWwsIGhpc3Rvcnk6IGNvaW5mbGlwRHVlbEhpc3RvcnkgfVxyXG4gICAgICAgIGNvaW5GbGlwRHVlbENvbnRyYWN0c0hlbHBlci5wdXNoKGRpY3QpXHJcblxyXG4gICAgICAgIGlmIChjb2luZmxpcER1ZWxIaXN0b3J5WzBdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvaW5GbGlwc0hlbHBlci5wdXNoKGNvaW5mbGlwRHVlbEhpc3RvcnlbMF0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHNldENvaW5mbGlwcyhpbnZpZHVhbENvaW5mbGlwcylcclxuICAgICAgc2V0Q29pbmZsaXBIaXN0b3JpZXMoY29pbkZsaXBEdWVsQ29udHJhY3RzSGVscGVyKVxyXG5cclxuICAgICAgbGV0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICB1cGRhdGVBY2NvdW50KGFjY291bnRzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh3aW5kb3cuZXRoZXJldW0pIHtcclxuICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKVxyXG4gICAgICAgIHVwZGF0ZUFjY291bnQoYWNjb3VudHMpXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2UoJ0NoYW5nZWQgYWNjb3VudCcpXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0KDI1MDApXHJcbiAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlKCdzdWNjZXNzJylcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGFzeW5jSGVscGVyKClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiJVBVQkxJQ19VUkwlL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBtYXhpbXVtLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwMDAwXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ29pbmZsaXAuYXBwXCIgLz5cclxuICAgICAgICA8dGl0bGU+Q29pbmZsaXAuYXBwPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPExheW91dCBjb2luRmxpcHM9e2NvaW5GbGlwc30+XHJcbiAgICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgIHsuLi5wYWdlUHJvcHN9XHJcbiAgICAgICAgICAgIGNvaW5GbGlwRHVlbENvbnRyYWN0cz17Y29pbkZsaXBEdWVsQ29udHJhY3RzfVxyXG4gICAgICAgICAgICBjb2luRmxpcHM9e2NvaW5GbGlwc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKVxyXG4iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQcm92aWRlciIsInVzZVNlbGVjdG9yIiwiTGF5b3V0IiwiY29pbmZsaXBkdWVsIiwiZmFjdG9yeSIsIndlYjMiLCJzdG9yZSIsIndyYXBwZXIiLCJVcGRhdGVycyIsIk5FVFdPUksiLCJ1c2VNZWRpYVF1ZXJ5IiwiSGVhZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXBkYXRlQWNjb3VudCIsInVwZGF0ZUluZm9NZXNzYWdlIiwidXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0IiwidXBkYXRlSW5mb01lc3NhZ2VUeXBlIiwiY29pbkZsaXBzIiwic2V0Q29pbmZsaXBzIiwiY29pbkZsaXBEdWVsQ29udHJhY3RzIiwic2V0Q29pbmZsaXBIaXN0b3JpZXMiLCJhY2NvdW50Iiwic3RhdGUiLCJpbmZvTWVzc2FnZSIsIm1vYmlsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwiZW52IiwiTU5FTk9NSUMiLCJsZW5ndGgiLCJwcm92aWRlciIsImdldERlZmF1bHRQcm92aWRlciIsImxhc3RCYWxhbmNlIiwiY29uc3RhbnRzIiwiWmVybyIsImlnbm9yZUZpcnN0Iiwib24iLCJnZXRCYWxhbmNlIiwidGhlbiIsImJhbGFuY2UiLCJlcSIsImFzeW5jSGVscGVyIiwiY29pbmZsaXBEdWVsQWRkcmVzc2VzIiwiY29pbkZsaXBEdWVsQ29udHJhY3RzSGVscGVyIiwiY29pbkZsaXBzSGVscGVyIiwiaW52aWR1YWxDb2luZmxpcHMiLCJpIiwiY29pbmZsaXBEdWVsIiwiY29pbmZsaXBEdWVsSGlzdG9yeSIsImRpY3QiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENvaW5mbGlwRHVlbHMiLCJjYWxsIiwiZ2V0U3VtbWFyeSIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsImNvbnRyYWN0IiwiaGlzdG9yeSIsImV0aCIsImdldEFjY291bnRzIiwid2luZG93IiwiZXRoZXJldW0iLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInRpdGxlIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});