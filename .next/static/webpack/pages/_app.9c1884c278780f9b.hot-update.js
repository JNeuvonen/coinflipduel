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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout/index.js\");\n/* harmony import */ var _ethereum_coinflipduel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/coinflipduel */ \"./ethereum/coinflipduel.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _state_store_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../state/store.js */ \"./state/store.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _style_css_style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../style/css/style.css */ \"./style/css/style.css\");\n/* harmony import */ var _style_css_style_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_css_style_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/constants */ \"./utils/constants/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MyApp = function(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,_state_utils__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(), updateAccount = ref.updateAccount, updateInfoMessage = ref.updateInfoMessage, updateInfoMessageTimeout = ref.updateInfoMessageTimeout, updateInfoMessageType = ref.updateInfoMessageType;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), coinFlips = ref1[0], setCoinflips = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), coinFlipDuelContracts = ref2[0], setCoinflipHistories = ref2[1];\n    var account = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.account;\n    });\n    var infoMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.infoMessage;\n    });\n    var mobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery)(\"(max-width:600px)\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(mobile);\n        if (mobile) {\n            updateInfoMessage(\"This site has limited support for mobile devices since Web3 wallets are not supported for mobile phones currently\");\n            updateInfoMessageTimeout(60000);\n            updateInfoMessageType(\"failure\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (account) {\n            if (account.length > 0) {\n                var provider = ethers__WEBPACK_IMPORTED_MODULE_13__.ethers.getDefaultProvider(_utils_constants__WEBPACK_IMPORTED_MODULE_11__.NETWORK);\n                var lastBalance = ethers__WEBPACK_IMPORTED_MODULE_13__.ethers.constants.Zero;\n                var ignoreFirst = false;\n                provider.on(\"block\", function() {\n                    provider.getBalance(account[0]).then(function(balance) {\n                        if (!balance.eq(lastBalance)) {\n                            lastBalance = balance;\n                            // convert a currency unit from wei to ether\n                            if (ignoreFirst) {\n                                if (infoMessage === null) {\n                                    updateInfoMessageTimeout(60000);\n                                    updateInfoMessage(\"Balance changed!\");\n                                    updateInfoMessageType(\"success\");\n                                }\n                            } else {\n                                ignoreFirst = true;\n                            }\n                        }\n                    });\n                });\n            }\n        }\n    }, [\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var asyncHelper = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var coinflipDuelAddresses, coinFlipDuelContractsHelper, coinFlipsHelper, invidualCoinflips, i, coinflipDuel, coinflipDuelHistory, dict, accounts;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_factory__WEBPACK_IMPORTED_MODULE_6__[\"default\"].methods.getDeployedCoinflipDuels().call();\n                        case 2:\n                            coinflipDuelAddresses = _ctx.sent;\n                            coinFlipDuelContractsHelper = [];\n                            coinFlipsHelper = [];\n                            invidualCoinflips = [];\n                            i = 0;\n                        case 7:\n                            if (!(i < coinflipDuelAddresses.length)) {\n                                _ctx.next = 21;\n                                break;\n                            }\n                            _ctx.next = 10;\n                            return (0,_ethereum_coinflipduel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(coinflipDuelAddresses[i]);\n                        case 10:\n                            coinflipDuel = _ctx.sent;\n                            _ctx.next = 13;\n                            return coinflipDuel.methods.getSummary().call();\n                        case 13:\n                            coinflipDuelHistory = _ctx.sent;\n                            if (coinflipDuelHistory[0].length > 0) {\n                                coinflipDuelHistory[0].forEach(function(item) {\n                                    invidualCoinflips.push(item);\n                                });\n                            }\n                            dict = {\n                                contract: coinflipDuel,\n                                history: coinflipDuelHistory\n                            };\n                            coinFlipDuelContractsHelper.push(dict);\n                            if (coinflipDuelHistory[0].length > 0) {\n                                coinFlipsHelper.push(coinflipDuelHistory[0]);\n                            }\n                        case 18:\n                            i++;\n                            _ctx.next = 7;\n                            break;\n                        case 21:\n                            setCoinflips(invidualCoinflips);\n                            setCoinflipHistories(coinFlipDuelContractsHelper);\n                            _ctx.next = 25;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].eth.getAccounts();\n                        case 25:\n                            accounts = _ctx.sent;\n                            updateAccount(accounts);\n                        case 27:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function asyncHelper() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        if (window.ethereum) {\n            window.ethereum.on(\"accountsChanged\", (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var accounts;\n                return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].eth.getAccounts();\n                        case 2:\n                            accounts = _ctx.sent;\n                            updateAccount(accounts);\n                            updateInfoMessage(\"Changed account\");\n                            updateInfoMessageTimeout(2500);\n                            updateInfoMessageType(\"success\");\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            })));\n        }\n        asyncHelper();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: _state_store_js__WEBPACK_IMPORTED_MODULE_8__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                coinFlips: coinFlips,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_15__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_16__[\"default\"])({}, pageProps), {\n                    coinFlipDuelContracts: coinFlipDuelContracts,\n                    coinFlips: coinFlips\n                }), void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n                lineNumber: 112,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\pages\\\\_app.js\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(MyApp, \"PHnY2gVELFKVA32mhNR0J8l9A0M=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        _mui_material__WEBPACK_IMPORTED_MODULE_12__.useMediaQuery\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = _state_store_js__WEBPACK_IMPORTED_MODULE_8__.wrapper.withRedux(MyApp));\nvar _c, _c1;\n$RefreshReg$(_c, \"MyApp\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN5QixpQkFBaUIsQ0FBQzs0QkFDL0J2QixvQkFBb0IsQ0FBQ3FCLDJCQUEyQixDQUFDOzttQ0FFNUJyQyxzRUFBb0IsRUFBRTs7NEJBQXZDNEMsUUFBUSxZQUErQjs0QkFDM0NuQyxhQUFhLENBQUNtQyxRQUFRLENBQUM7Ozs7OzthQUN4Qjs0QkEvQktULFdBQVc7OztXQStCaEI7UUFFRCxJQUFJcUIsTUFBTSxDQUFDQyxRQUFRLEVBQUU7WUFDbkJELE1BQU0sQ0FBQ0MsUUFBUSxDQUFDM0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLDJPQUFZO29CQUM1Q2MsUUFBUTs7Ozs7bUNBQVM1QyxzRUFBb0IsRUFBRTs7NEJBQXZDNEMsUUFBUSxZQUErQjs0QkFDM0NuQyxhQUFhLENBQUNtQyxRQUFRLENBQUM7NEJBQ3ZCbEMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7NEJBQ3BDQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUM7NEJBQzlCQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7Ozs7OzthQUNqQyxHQUFDO1NBQ0g7UUFDRHVCLFdBQVcsRUFBRTtLQUNkLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0U7a0JBQ0UsNEVBQUN4QyxpREFBUTtZQUFDTSxLQUFLLEVBQUVBLGtEQUFLO3NCQUNwQiw0RUFBQ0osMERBQU07Z0JBQUNnQixTQUFTLEVBQUVBLFNBQVM7MEJBQzFCLDRFQUFDTixTQUFTLDRLQUNKQyxTQUFTO29CQUNiTyxxQkFBcUIsRUFBRUEscUJBQXFCO29CQUM1Q0YsU0FBUyxFQUFFQSxTQUFTOzs7Ozt5QkFDcEI7Ozs7O3FCQUNLOzs7OztpQkFDQTtxQkFDVixDQUNKO0NBQ0Y7R0E3R0tQLEtBQUs7O1FBU09WLG9EQUFXO1FBQ1BBLG9EQUFXO1FBQ2hCUyx5REFBYTs7O0FBWHhCQyxLQUFBQSxLQUFLO0FBK0dYLCtEQUFlSixNQUFBQSw4REFBaUIsQ0FBQ0ksS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvdmlkZXIsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBjb2luZmxpcGR1ZWwgZnJvbSAnLi4vZXRoZXJldW0vY29pbmZsaXBkdWVsJ1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi9ldGhlcmV1bS9mYWN0b3J5J1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQgeyBzdG9yZSwgd3JhcHBlciB9IGZyb20gJy4uL3N0YXRlL3N0b3JlLmpzJ1xyXG5pbXBvcnQgVXBkYXRlcnMgZnJvbSAnLi4vc3RhdGUvdXRpbHMnXHJcbmltcG9ydCAnLi4vc3R5bGUvY3NzL3N0eWxlLmNzcydcclxuaW1wb3J0IHsgTkVUV09SSyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cydcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHVwZGF0ZUFjY291bnQsXHJcbiAgICB1cGRhdGVJbmZvTWVzc2FnZSxcclxuICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCxcclxuICAgIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSxcclxuICB9ID0gVXBkYXRlcnMoKVxyXG4gIGNvbnN0IFtjb2luRmxpcHMsIHNldENvaW5mbGlwc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY29pbkZsaXBEdWVsQ29udHJhY3RzLCBzZXRDb2luZmxpcEhpc3Rvcmllc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBhY2NvdW50ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50KVxyXG4gIGNvbnN0IGluZm9NZXNzYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5pbmZvTWVzc2FnZSlcclxuICBjb25zdCBtb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOjYwMHB4KScpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtb2JpbGUpXHJcbiAgICBpZiAobW9iaWxlKSB7XHJcbiAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKFxyXG4gICAgICAgICdUaGlzIHNpdGUgaGFzIGxpbWl0ZWQgc3VwcG9ydCBmb3IgbW9iaWxlIGRldmljZXMgc2luY2UgV2ViMyB3YWxsZXRzIGFyZSBub3Qgc3VwcG9ydGVkIGZvciBtb2JpbGUgcGhvbmVzIGN1cnJlbnRseSdcclxuICAgICAgKVxyXG4gICAgICB1cGRhdGVJbmZvTWVzc2FnZVRpbWVvdXQoNjAwMDApXHJcbiAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSgnZmFpbHVyZScpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudCkge1xyXG4gICAgICBpZiAoYWNjb3VudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBldGhlcnMuZ2V0RGVmYXVsdFByb3ZpZGVyKE5FVFdPUkspXHJcbiAgICAgICAgbGV0IGxhc3RCYWxhbmNlID0gZXRoZXJzLmNvbnN0YW50cy5aZXJvXHJcbiAgICAgICAgbGV0IGlnbm9yZUZpcnN0ID0gZmFsc2VcclxuICAgICAgICBwcm92aWRlci5vbignYmxvY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICBwcm92aWRlci5nZXRCYWxhbmNlKGFjY291bnRbMF0pLnRoZW4oKGJhbGFuY2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFiYWxhbmNlLmVxKGxhc3RCYWxhbmNlKSkge1xyXG4gICAgICAgICAgICAgIGxhc3RCYWxhbmNlID0gYmFsYW5jZVxyXG4gICAgICAgICAgICAgIC8vIGNvbnZlcnQgYSBjdXJyZW5jeSB1bml0IGZyb20gd2VpIHRvIGV0aGVyXHJcbiAgICAgICAgICAgICAgaWYgKGlnbm9yZUZpcnN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5mb01lc3NhZ2UgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgdXBkYXRlSW5mb01lc3NhZ2VUaW1lb3V0KDYwMDAwKVxyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVJbmZvTWVzc2FnZSgnQmFsYW5jZSBjaGFuZ2VkIScpXHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSgnc3VjY2VzcycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlnbm9yZUZpcnN0ID0gdHJ1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBhc3luY0hlbHBlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY29pbmZsaXBEdWVsQWRkcmVzc2VzID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzXHJcbiAgICAgICAgLmdldERlcGxveWVkQ29pbmZsaXBEdWVscygpXHJcbiAgICAgICAgLmNhbGwoKVxyXG4gICAgICBjb25zdCBjb2luRmxpcER1ZWxDb250cmFjdHNIZWxwZXIgPSBbXVxyXG4gICAgICBjb25zdCBjb2luRmxpcHNIZWxwZXIgPSBbXVxyXG4gICAgICBjb25zdCBpbnZpZHVhbENvaW5mbGlwcyA9IFtdXHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvaW5mbGlwRHVlbEFkZHJlc3Nlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvaW5mbGlwRHVlbCA9IGF3YWl0IGNvaW5mbGlwZHVlbChjb2luZmxpcER1ZWxBZGRyZXNzZXNbaV0pXHJcbiAgICAgICAgY29uc3QgY29pbmZsaXBEdWVsSGlzdG9yeSA9IGF3YWl0IGNvaW5mbGlwRHVlbC5tZXRob2RzXHJcbiAgICAgICAgICAuZ2V0U3VtbWFyeSgpXHJcbiAgICAgICAgICAuY2FsbCgpXHJcblxyXG4gICAgICAgIGlmIChjb2luZmxpcER1ZWxIaXN0b3J5WzBdLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvaW5mbGlwRHVlbEhpc3RvcnlbMF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpbnZpZHVhbENvaW5mbGlwcy5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkaWN0ID0geyBjb250cmFjdDogY29pbmZsaXBEdWVsLCBoaXN0b3J5OiBjb2luZmxpcER1ZWxIaXN0b3J5IH1cclxuICAgICAgICBjb2luRmxpcER1ZWxDb250cmFjdHNIZWxwZXIucHVzaChkaWN0KVxyXG5cclxuICAgICAgICBpZiAoY29pbmZsaXBEdWVsSGlzdG9yeVswXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb2luRmxpcHNIZWxwZXIucHVzaChjb2luZmxpcER1ZWxIaXN0b3J5WzBdKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzZXRDb2luZmxpcHMoaW52aWR1YWxDb2luZmxpcHMpXHJcbiAgICAgIHNldENvaW5mbGlwSGlzdG9yaWVzKGNvaW5GbGlwRHVlbENvbnRyYWN0c0hlbHBlcilcclxuXHJcbiAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgdXBkYXRlQWNjb3VudChhY2NvdW50cylcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtKSB7XHJcbiAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKClcclxuICAgICAgICB1cGRhdGVBY2NvdW50KGFjY291bnRzKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlKCdDaGFuZ2VkIGFjY291bnQnKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCgyNTAwKVxyXG4gICAgICAgIHVwZGF0ZUluZm9NZXNzYWdlVHlwZSgnc3VjY2VzcycpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhc3luY0hlbHBlcigpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8TGF5b3V0IGNvaW5GbGlwcz17Y29pbkZsaXBzfT5cclxuICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgey4uLnBhZ2VQcm9wc31cclxuICAgICAgICAgICAgY29pbkZsaXBEdWVsQ29udHJhY3RzPXtjb2luRmxpcER1ZWxDb250cmFjdHN9XHJcbiAgICAgICAgICAgIGNvaW5GbGlwcz17Y29pbkZsaXBzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXHJcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb3ZpZGVyIiwidXNlU2VsZWN0b3IiLCJMYXlvdXQiLCJjb2luZmxpcGR1ZWwiLCJmYWN0b3J5Iiwid2ViMyIsInN0b3JlIiwid3JhcHBlciIsIlVwZGF0ZXJzIiwiTkVUV09SSyIsInVzZU1lZGlhUXVlcnkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVwZGF0ZUFjY291bnQiLCJ1cGRhdGVJbmZvTWVzc2FnZSIsInVwZGF0ZUluZm9NZXNzYWdlVGltZW91dCIsInVwZGF0ZUluZm9NZXNzYWdlVHlwZSIsImNvaW5GbGlwcyIsInNldENvaW5mbGlwcyIsImNvaW5GbGlwRHVlbENvbnRyYWN0cyIsInNldENvaW5mbGlwSGlzdG9yaWVzIiwiYWNjb3VudCIsInN0YXRlIiwiaW5mb01lc3NhZ2UiLCJtb2JpbGUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJnZXREZWZhdWx0UHJvdmlkZXIiLCJsYXN0QmFsYW5jZSIsImNvbnN0YW50cyIsIlplcm8iLCJpZ25vcmVGaXJzdCIsIm9uIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJiYWxhbmNlIiwiZXEiLCJhc3luY0hlbHBlciIsImNvaW5mbGlwRHVlbEFkZHJlc3NlcyIsImNvaW5GbGlwRHVlbENvbnRyYWN0c0hlbHBlciIsImNvaW5GbGlwc0hlbHBlciIsImludmlkdWFsQ29pbmZsaXBzIiwiaSIsImNvaW5mbGlwRHVlbCIsImNvaW5mbGlwRHVlbEhpc3RvcnkiLCJkaWN0IiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDb2luZmxpcER1ZWxzIiwiY2FsbCIsImdldFN1bW1hcnkiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJjb250cmFjdCIsImhpc3RvcnkiLCJldGgiLCJnZXRBY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});