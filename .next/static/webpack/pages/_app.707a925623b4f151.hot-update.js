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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MetamaskConnect = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamask = ref[0], setMetamask = ref[1];\n    var accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref1 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), updateAccount = ref1.updateAccount, updateErrorMessage = ref1.updateErrorMessage;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ( true && typeof window.ethereum !== \"undefined\") {\n            setMetamask(true);\n        }\n    }, []);\n    var metaMaskOnClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts_;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if ((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0) {\n                            if (accounts[0]) {\n                                props.setMetamaskOnClick(true);\n                                (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_8__.enableBlur)();\n                            }\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        accounts_ = _ctx.sent;\n                        updateAccount(accounts_);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        updateErrorMessage(\"Already processing request to get accounts. Please try connecting wallet manually.\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function metaMaskOnClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (metamask) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"metamask-connect flex-box align-items-center\",\n            onClick: metaMaskOnClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.MetamaskIcon, {\n                    width: 25,\n                    height: 25\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: [\n                        (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__.formatAddress)(accounts[0]),\n                        \"test\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Connect\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n        href: \"https://metamask.io/\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"metamask-connect flex-box align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.WarningIcon, {\n                    width: 25,\n                    height: 25\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Metamask missing\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_s(MetamaskConnect, \"L7kzxts9rMQDHYfwDgyJZ4RZjhA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = MetamaskConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetamaskConnect);\nvar _c;\n$RefreshReg$(_c, \"MetamaskConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFtYXNrQ29ubmVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTJEO0FBQ0U7QUFDdkI7QUFDNkI7QUFDOUI7QUFDSTtBQUNEO0FBQ2M7O0FBQ3RELElBQU1ZLGVBQWUsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ2pDLElBQWdDWCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDWSxRQUFRLEdBQWlCWixHQUFlLEdBQWhDLEVBQUVhLFdBQVcsR0FBSWIsR0FBZSxHQUFuQjtJQUM1QixJQUFNYyxRQUFRLEdBQUdQLHdEQUFXLENBQUMsU0FBQ1EsS0FBSztlQUFLQSxLQUFLLENBQUNDLE9BQU87S0FBQSxDQUFDO0lBQ3RELElBQThDUixJQUFVLEdBQVZBLHdEQUFRLEVBQUUsRUFBaERTLGFBQWEsR0FBeUJULElBQVUsQ0FBaERTLGFBQWEsRUFBRUMsa0JBQWtCLEdBQUtWLElBQVUsQ0FBakNVLGtCQUFrQjtJQUV6Q25CLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0UsS0FBNkIsSUFDN0IsT0FBT29CLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFdBQVcsRUFDdEM7WUFDQVAsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNsQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTVEsZUFBZTttQkFBRywwT0FBWTtnQkFRMUJDLFNBQVM7Ozs7d0JBUGpCLElBQUlSLENBQUFBLFFBQVEsYUFBUkEsUUFBUSxXQUFRLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsUUFBUSxDQUFFUyxNQUFNLElBQUcsQ0FBQyxFQUFFOzRCQUN4QixJQUFJVCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ2ZILEtBQUssQ0FBQ2Esa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dDQUM5QmYsZ0VBQVUsRUFBRTs2QkFDYjt5QkFDRjs7OytCQUV5QlUsTUFBTSxDQUFDQyxRQUFRLENBQUNLLE9BQU8sQ0FBQzs0QkFDOUNDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQzlCLENBQUM7O3dCQUZJSixTQUFTLFlBRWI7d0JBQ0ZMLGFBQWEsQ0FBQ0ssU0FBUyxDQUFDOzs7Ozs7d0JBRXhCSixrQkFBa0IsQ0FDaEIsb0ZBQW9GLENBQ3JGOzs7Ozs7Ozs7OztTQUVKO3dCQWpCS0csZUFBZTs7O09BaUJwQjtJQUVELElBQUlULFFBQVEsRUFBRTtRQUNaLHFCQUNFLDhEQUFDZSxLQUFHO1lBQ0ZDLFNBQVMsRUFBQyw4Q0FBOEM7WUFDeERDLE9BQU8sRUFBRVIsZUFBZTs7OEJBRXhCLDhEQUFDbkIsc0RBQVk7b0JBQUM0QixLQUFLLEVBQUUsRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O3lCQUFJO2dCQUV0Q2pCLENBQUFBLFFBQVEsYUFBUkEsUUFBUSxXQUFRLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsUUFBUSxDQUFFUyxNQUFNLElBQUcsQ0FBQyxpQkFDbkIsOERBQUNTLElBQUU7O3dCQUNBM0IsNkVBQWEsQ0FBQ1MsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUUxQixNQUFNOzs7Ozs7eUJBQ0osaUJBRUwsOERBQUNrQixJQUFFOzhCQUFDLFNBQU87Ozs7O3lCQUFLOzs7Ozs7aUJBRWQsQ0FDUDtLQUNGO0lBRUQscUJBQ0UsOERBQUNDLEdBQUM7UUFBQ0MsSUFBSSxFQUFDLHNCQUFzQjtrQkFDNUIsNEVBQUNQLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDhDQUE4Qzs7OEJBQzNELDhEQUFDekIscURBQVc7b0JBQUMyQixLQUFLLEVBQUUsRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O3lCQUFJOzhCQUN0Qyw4REFBQ0ksSUFBRTs4QkFBQyxrQkFBZ0I7Ozs7O3lCQUFLOzs7Ozs7aUJBQ3JCOzs7OzthQUNKLENBQ0w7Q0FDRjtHQTlES3pCLGVBQWU7O1FBRUZILG9EQUFXOzs7QUFGeEJHLEtBQUFBLGVBQWU7QUErRHJCLCtEQUFlQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWV0YW1hc2tDb25uZWN0L2luZGV4LmpzP2JjMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTWV0YW1hc2tJY29uLCBXYXJuaW5nSWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2ljb25zJ1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJ1xyXG5pbXBvcnQgeyBmb3JtYXRBZGRyZXNzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2V0aGVyZXVtVXRpbHMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdCB9IGZyb20gJ0BtdWkvYmFzZSdcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFVwZGF0ZXJzIGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzJ1xyXG5pbXBvcnQgeyBlbmFibGVCbHVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZnVuY3Rpb25zL2NzcydcclxuY29uc3QgTWV0YW1hc2tDb25uZWN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW21ldGFtYXNrLCBzZXRNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBhY2NvdW50cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWNjb3VudClcclxuICBjb25zdCB7IHVwZGF0ZUFjY291bnQsIHVwZGF0ZUVycm9yTWVzc2FnZSB9ID0gVXBkYXRlcnMoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgKSB7XHJcbiAgICAgIHNldE1ldGFtYXNrKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IG1ldGFNYXNrT25DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChhY2NvdW50cz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoYWNjb3VudHNbMF0pIHtcclxuICAgICAgICBwcm9wcy5zZXRNZXRhbWFza09uQ2xpY2sodHJ1ZSlcclxuICAgICAgICBlbmFibGVCbHVyKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYWNjb3VudHNfID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgIG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLFxyXG4gICAgICB9KVxyXG4gICAgICB1cGRhdGVBY2NvdW50KGFjY291bnRzXylcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICB1cGRhdGVFcnJvck1lc3NhZ2UoXHJcbiAgICAgICAgJ0FscmVhZHkgcHJvY2Vzc2luZyByZXF1ZXN0IHRvIGdldCBhY2NvdW50cy4gUGxlYXNlIHRyeSBjb25uZWN0aW5nIHdhbGxldCBtYW51YWxseS4nXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtZXRhbWFzaykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1ldGFtYXNrLWNvbm5lY3QgZmxleC1ib3ggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICBvbkNsaWNrPXttZXRhTWFza09uQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICA8TWV0YW1hc2tJY29uIHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gLz5cclxuXHJcbiAgICAgICAge2FjY291bnRzPy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICB7Zm9ybWF0QWRkcmVzcyhhY2NvdW50c1swXSl9XHJcblxyXG4gICAgICAgICAgICB7J3Rlc3QnfVxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGgzPkNvbm5lY3Q8L2gzPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhIGhyZWY9XCJodHRwczovL21ldGFtYXNrLmlvL1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFtYXNrLWNvbm5lY3QgZmxleC1ib3ggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPFdhcm5pbmdJY29uIHdpZHRoPXsyNX0gaGVpZ2h0PXsyNX0gLz5cclxuICAgICAgICA8aDI+TWV0YW1hc2sgbWlzc2luZzwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZXRhbWFza0Nvbm5lY3RcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VNZW1vIiwiTWV0YW1hc2tJY29uIiwiV2FybmluZ0ljb24iLCJ3ZWIzIiwiZm9ybWF0QWRkcmVzcyIsInVzZVNlbGVjdCIsInVzZVNlbGVjdG9yIiwiVXBkYXRlcnMiLCJlbmFibGVCbHVyIiwiTWV0YW1hc2tDb25uZWN0IiwicHJvcHMiLCJtZXRhbWFzayIsInNldE1ldGFtYXNrIiwiYWNjb3VudHMiLCJzdGF0ZSIsImFjY291bnQiLCJ1cGRhdGVBY2NvdW50IiwidXBkYXRlRXJyb3JNZXNzYWdlIiwid2luZG93IiwiZXRoZXJldW0iLCJtZXRhTWFza09uQ2xpY2siLCJhY2NvdW50c18iLCJsZW5ndGgiLCJzZXRNZXRhbWFza09uQ2xpY2siLCJyZXF1ZXN0IiwibWV0aG9kIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJhIiwiaHJlZiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MetamaskConnect/index.js\n"));

/***/ })

});