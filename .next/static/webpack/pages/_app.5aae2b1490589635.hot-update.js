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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _state_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state/store.js */ \"./state/store.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _style_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/css/style.css */ \"./style/css/style.css\");\n/* harmony import */ var _style_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_css_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_coinflipduel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ethereum/coinflipduel */ \"./ethereum/coinflipduel.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants/index.js\");\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,_state_utils__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(), updateAccount = ref.updateAccount, updateInfoMessage = ref.updateInfoMessage, updateInfoMessageTimeout = ref.updateInfoMessageTimeout, updateInfoMessageType = ref.updateInfoMessageType;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), coinFlips = ref1[0], setCoinflips = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), coinFlipDuelContracts = ref2[0], setCoinflipHistories = ref2[1];\n    var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ignoreFirst = ref3[0], setIgnoreFirst = ref3[1];\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (account) {\n            if (account.length > 0) {\n                var provider = ethers__WEBPACK_IMPORTED_MODULE_14__.ethers.getDefaultProvider(_utils_constants__WEBPACK_IMPORTED_MODULE_13__.NETWORK);\n                var lastBalance = ethers__WEBPACK_IMPORTED_MODULE_14__.ethers.constants.Zero;\n                var ignoreFirst = false;\n                provider.on(\"block\", function() {\n                    provider.getBalance(account[0]).then(function(balance) {\n                        if (!balance.eq(lastBalance)) {\n                            lastBalance = balance;\n                            // convert a currency unit from wei to ether\n                            if (ignoreFirst) {\n                                if (infoMessage === null) {\n                                    updateInfoMessageTimeout(5000);\n                                    updateInfoMessage(\"Balance changed!\");\n                                    updateInfoMessageType(\"success\");\n                                }\n                            } else {\n                                ignoreFirst = true;\n                            }\n                        }\n                    });\n                });\n            }\n        }\n    }, [\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var coinflipDuelAddresses, coinFlipDuelContractsHelper, coinFlipsHelper, invidualCoinflips, i, coinflipDuel, coinflipDuelHistory, dict, accounts;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_factory__WEBPACK_IMPORTED_MODULE_8__[\"default\"].methods.getDeployedCoinflipDuels().call();\n                        case 2:\n                            coinflipDuelAddresses = _ctx.sent;\n                            coinFlipDuelContractsHelper = [];\n                            coinFlipsHelper = [];\n                            invidualCoinflips = [];\n                            i = 0;\n                        case 7:\n                            if (!(i < coinflipDuelAddresses.length)) {\n                                _ctx.next = 21;\n                                break;\n                            }\n                            _ctx.next = 10;\n                            return (0,_ethereum_coinflipduel__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(coinflipDuelAddresses[i]);\n                        case 10:\n                            coinflipDuel = _ctx.sent;\n                            _ctx.next = 13;\n                            return coinflipDuel.methods.getSummary().call();\n                        case 13:\n                            coinflipDuelHistory = _ctx.sent;\n                            if (coinflipDuelHistory[0].length > 0) {\n                                coinflipDuelHistory[0].forEach(function(item) {\n                                    invidualCoinflips.push(item);\n                                });\n                            }\n                            dict = {\n                                contract: coinflipDuel,\n                                history: coinflipDuelHistory\n                            };\n                            coinFlipDuelContractsHelper.push(dict);\n                            if (coinflipDuelHistory[0].length > 0) {\n                                coinFlipsHelper.push(coinflipDuelHistory[0]);\n                            }\n                        case 18:\n                            i++;\n                            _ctx.next = 7;\n                            break;\n                        case 21:\n                            setCoinflips(invidualCoinflips);\n                            setCoinflipHistories(coinFlipDuelContractsHelper);\n                            _ctx.next = 25;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                        case 25:\n                            accounts = _ctx.sent;\n                            updateAccount(accounts);\n                        case 27:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (window.ethereum) {\n            window.ethereum.on(\"accountsChanged\", (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var accounts;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                        case 2:\n                            accounts = _ctx.sent;\n                            updateAccount(accounts);\n                            updateInfoMessage(\"Changed account\");\n                            updateInfoMessageTimeout(2500);\n                            updateInfoMessageType(\"success\");\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            })));\n        }\n        asyncHelper();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: _state_store_js__WEBPACK_IMPORTED_MODULE_5__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                coinFlips: coinFlips,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_17__[\"default\"])({}, pageProps), {\n                    coinFlipDuelContracts: coinFlipDuelContracts,\n                    coinFlips: coinFlips\n                }), void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                lineNumber: 103,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(MyApp, \"l4FYMrBY8IeUl10VX7C6K/bBVjY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = _state_store_js__WEBPACK_IMPORTED_MODULE_5__.wrapper.withRedux(MyApp));\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzthQUN4Qjs0QkEvQktULFdBQVc7OztXQStCaEI7UUFFRCxJQUFJcUIsTUFBTSxDQUFDQyxRQUFRLEVBQUU7WUFDbkJELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDM0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLDJPQUFZO29CQUM1Q2MsUUFBUTs7Ozs7bUNBQVMvQyxzRUFBb0IsRUFBRTs7NEJBQXZDK0MsUUFBUSxZQUErQjs0QkFDM0NqQyxhQUFhLENBQUNpQyxRQUFRLENBQUM7NEJBQ3ZCaEMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7NEJBQ3BDQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7NEJBQzlCQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7Ozs7OzthQUNqQyxHQUFDO1NBQ0g7UUFDRHFCLFdBQVcsRUFBRTtLQUNkLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0U7a0JBQ0UsNEVBQUN4QyxpREFBUTtZQUFDRyxLQUFLLEVBQUVBLGtEQUFLO3NCQUNwQiw0RUFBQ08sMkRBQU07Z0JBQUNVLFNBQVMsRUFBRUEsU0FBUzswQkFDMUIsNEVBQUNOLFNBQVMsNEtBQ0pDLFNBQVM7b0JBQ2JPLHFCQUFxQixFQUFFQSxxQkFBcUI7b0JBQzVDRixTQUFTLEVBQUVBLFNBQVM7Ozs7O3lCQUNwQjs7Ozs7cUJBQ0s7Ozs7O2lCQUNBO3FCQUNWLENBQ0o7Q0FDRjtHQW5HS1AsS0FBSzs7UUFTT1osb0RBQVc7UUFFUEEsb0RBQVc7OztBQVgzQlksS0FBQUEsS0FBSztBQXFHWCwrREFBZVQsTUFBQUEsOERBQWlCLENBQUNTLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBQcm92aWRlciwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMydcclxuaW1wb3J0IHsgc3RvcmUsIHdyYXBwZXIgfSBmcm9tICcuLi9zdGF0ZS9zdG9yZS5qcydcclxuaW1wb3J0IFVwZGF0ZXJzIGZyb20gJy4uL3N0YXRlL3V0aWxzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlL2Nzcy9zdHlsZS5jc3MnXHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknXHJcbmltcG9ydCBjb2luZmxpcGR1ZWwgZnJvbSAnLi4vZXRoZXJldW0vY29pbmZsaXBkdWVsJ1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuaW1wb3J0IHsgTkVUV09SSyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdXBkYXRlQWNjb3VudCxcclxuICAgIHVwZGF0ZUluZm9NZXNzYWdlLFxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0LFxyXG4gICAgdXBkYXRlSW5mb01lc3NhZ2VUeXBlLFxyXG4gIH0gPSBVcGRhdGVycygpXHJcbiAgY29uc3QgW2NvaW5GbGlwcywgc2V0Q29pbmZsaXBzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjb2luRmxpcER1ZWxDb250cmFjdHMsIHNldENvaW5mbGlwSGlzdG9yaWVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IGFjY291bnQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFjY291bnQpXHJcbiAgY29uc3QgW2lnbm9yZUZpcnN0LCBzZXRJZ25vcmVGaXJzdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBpbmZvTWVzc2FnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuaW5mb01lc3NhZ2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICBpZiAoYWNjb3VudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBldGhlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKE5FVFdPUkspXHJcbiAgICAgICAgbGV0IGxhc3RCYWxhbmNlID0gZXRoZXJzLmNvbnN0YW50cy5aZXJvXHJcbiAgICAgICAgbGV0IGlnbm9yZUZpcnN0ID0gZmFsc2VcclxuICAgICAgICBwcm92aWRlci5vbignYmxvY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBwcm92aWRlci5nZXRCYWxhbmNlKGFjY291bnRbMF0pLnRoZW4oKGJhbGFuY2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFiYWxhbmNlLmVxKGxhc3RCYWxhbmNlKSkge1xyXG4gICAgICAgICAgICAgIGxhc3RCYWxhbmNlID0gYmFsYW5jZVxyXG4gICAgICAgICAgICAgIC8vIGNvbnZlcnQgYSBjdXJyZW5jeSB1bml0IGZyb20gd2VpIHRvIGV0aGVyXHJcblxyXG4gICAgICAgICAgICAgIGlmIChpZ25vcmVGaXJzdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZm9NZXNzYWdlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCg1MDAwKVxyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVJbmZvTWVzc2FnZSgnQmFsYW5jZSBjaGFuZ2VkIScpXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSgnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhc3luY0hlbHBlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY29pbmZsaXBEdWVsQWRkcmVzc2VzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgLmdldERlcGxveWVkQ29pbmZsaXBEdWVscygpXHJcbiAgICAgICAgLmNhbGwoKVxyXG4gICAgICBjb25zdCBjb2luRmxpcER1ZWxDb250cmFjdHNIZWxwZXIgPSBbXVxyXG4gICAgICBjb25zdCBjb2luRmxpcHNIZWxwZXIgPSBbXVxyXG4gICAgICBjb25zdCBpbnZpZHVhbENvaW5mbGlwcyA9IFtdXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5mbGlwRHVlbEFkZHJlc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvaW5mbGlwRHVlbCA9IGF3YWl0IGNvaW5mbGlwZHVlbChjb2luZmxpcER1ZWxBZGRyZXNzZXNbaV0pXHJcbiAgICAgICAgY29uc3QgY29pbmZsaXBEdWVsSGlzdG9yeSA9IGF3YWl0IGNvaW5mbGlwRHVlbC5tZXRob2RzXHJcbiAgICAgICAgICAuZ2V0U3VtbWFyeSgpXHJcbiAgICAgICAgICAuY2FsbCgpXHJcblxyXG4gICAgICAgIGlmIChjb2luZmxpcER1ZWxIaXN0b3J5WzBdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvaW5mbGlwRHVlbEhpc3RvcnlbMF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpbnZpZHVhbENvaW5mbGlwcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaWN0ID0geyBjb250cmFjdDogY29pbmZsaXBEdWVsLCBoaXN0b3J5OiBjb2luZmxpcER1ZWxIaXN0b3J5IH1cclxuICAgICAgICBjb2luRmxpcER1ZWxDb250cmFjdHNIZWxwZXIucHVzaChkaWN0KVxyXG5cclxuICAgICAgICBpZiAoY29pbmZsaXBEdWVsSGlzdG9yeVswXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb2luRmxpcHNIZWxwZXIucHVzaChjb2luZmxpcER1ZWxIaXN0b3J5WzBdKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDb2luZmxpcHMoaW52aWR1YWxDb2luZmxpcHMpXHJcbiAgICAgIHNldENvaW5mbGlwSGlzdG9yaWVzKGNvaW5GbGlwRHVlbENvbnRyYWN0c0hlbHBlcilcclxuXHJcbiAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgdXBkYXRlQWNjb3VudChhY2NvdW50cylcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgICB1cGRhdGVBY2NvdW50KGFjY291bnRzKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKCdDaGFuZ2VkIGFjY291bnQnKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCgyNTAwKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSgnc3VjY2VzcycpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luY0hlbHBlcigpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8TGF5b3V0IGNvaW5GbGlwcz17Y29pbkZsaXBzfT5cclxuICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cclxuICAgICAgICAgICAgY29pbkZsaXBEdWVsQ29udHJhY3RzPXtjb2luRmxpcER1ZWxDb250cmFjdHN9XHJcbiAgICAgICAgICAgIGNvaW5GbGlwcz17Y29pbkZsaXBzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJ3ZWIzIiwic3RvcmUiLCJ3cmFwcGVyIiwiVXBkYXRlcnMiLCJmYWN0b3J5IiwiY29pbmZsaXBkdWVsIiwiQXBwIiwiSGVhZCIsIkxheW91dCIsImV0aGVycyIsIk5FVFdPUksiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVwZGF0ZUFjY291bnQiLCJ1cGRhdGVJbmZvTWVzc2FnZSIsInVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCIsInVwZGF0ZUluZm9NZXNzYWdlVHlwZSIsImNvaW5GbGlwcyIsInNldENvaW5mbGlwcyIsImNvaW5GbGlwRHVlbENvbnRyYWN0cyIsInNldENvaW5mbGlwSGlzdG9yaWVzIiwiYWNjb3VudCIsInN0YXRlIiwiaWdub3JlRmlyc3QiLCJzZXRJZ25vcmVGaXJzdCIsImluZm9NZXNzYWdlIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJsYXN0QmFsYW5jZSIsImNvbnN0YW50cyIsIlplcm8iLCJvbiIsImdldEJhbGFuY2UiLCJ0aGVuIiwiYmFsYW5jZSIsImVxIiwiYXN5bmNIZWxwZXIiLCJjb2luZmxpcER1ZWxBZGRyZXNzZXMiLCJjb2luRmxpcER1ZWxDb250cmFjdHNIZWxwZXIiLCJjb2luRmxpcHNIZWxwZXIiLCJpbnZpZHVhbENvaW5mbGlwcyIsImkiLCJjb2luZmxpcER1ZWwiLCJjb2luZmxpcER1ZWxIaXN0b3J5IiwiZGljdCIsImFjY291bnRzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ29pbmZsaXBEdWVscyIsImNhbGwiLCJnZXRTdW1tYXJ5IiwiZm9yRWFjaCIsIml0ZW0iLCJwdXNoIiwiY29udHJhY3QiLCJoaXN0b3J5IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIndpdGhSZWR1eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});