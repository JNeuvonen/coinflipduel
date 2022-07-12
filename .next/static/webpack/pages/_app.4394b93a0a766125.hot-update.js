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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ \"./utils/icons/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/functions/ethereumUtils */ \"./utils/functions/ethereumUtils.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _state_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../state/utils */ \"./state/utils/index.js\");\n/* harmony import */ var _utils_functions_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/functions/css */ \"./utils/functions/css.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar MetamaskConnect = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), metamask = ref[0], setMetamask = ref[1];\n    var accounts = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function(state) {\n        return state.account;\n    });\n    var ref1 = (0,_state_utils__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(), updateAccount = ref1.updateAccount, updateErrorMessage = ref1.updateErrorMessage;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if ( true && typeof window.ethereum !== \"undefined\") {\n            setMetamask(true);\n        }\n    }, []);\n    var metaMaskOnClick = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var accounts_;\n            return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if ((accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0) {\n                            if (accounts[0]) {\n                                props.setMetamaskOnClick(true);\n                                (0,_utils_functions_css__WEBPACK_IMPORTED_MODULE_8__.enableBlur)();\n                            }\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return window.ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        accounts_ = _ctx.sent;\n                        updateAccount(accounts_);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        updateErrorMessage(\"Already processing request to get accounts. Please try connecting wallet manually.\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    8\n                ]\n            ]);\n        }));\n        return function metaMaskOnClick() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    if (metamask) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"metamask-connect flex-box align-items-center\",\n            onClick: metaMaskOnClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.MetamaskIcon, {\n                    width: 25,\n                    height: 25\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                (accounts === null || accounts === void 0 ? void 0 : accounts.length) > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex-box\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: (0,_utils_functions_ethereumUtils__WEBPACK_IMPORTED_MODULE_5__.formatAddress)(accounts[0])\n                    }, void 0, false, {\n                        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Connect\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n        href: \"https://metamask.io/\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"metamask-connect flex-box align-items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_utils_icons__WEBPACK_IMPORTED_MODULE_3__.WarningIcon, {\n                    width: 25,\n                    height: 25\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: \"Metamask missing\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\MetamaskConnect\\\\index.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, _this);\n};\n_s(MetamaskConnect, \"L7kzxts9rMQDHYfwDgyJZ4RZjhA=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = MetamaskConnect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetamaskConnect);\nvar _c;\n$RefreshReg$(_c, \"MetamaskConnect\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01ldGFtYXNrQ29ubmVjdC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTJEO0FBQ0U7QUFDdkI7QUFDNkI7QUFDOUI7QUFDSTtBQUNEO0FBQ2M7O0FBQ3RELElBQU1ZLGVBQWUsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ2pDLElBQWdDWCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXhDWSxRQUFRLEdBQWlCWixHQUFlLEdBQWhDLEVBQUVhLFdBQVcsR0FBSWIsR0FBZSxHQUFuQjtJQUM1QixJQUFNYyxRQUFRLEdBQUdQLHdEQUFXLENBQUMsU0FBQ1EsS0FBSztlQUFLQSxLQUFLLENBQUNDLE9BQU87S0FBQSxDQUFDO0lBQ3RELElBQThDUixJQUFVLEdBQVZBLHdEQUFRLEVBQUUsRUFBaERTLGFBQWEsR0FBeUJULElBQVUsQ0FBaERTLGFBQWEsRUFBRUMsa0JBQWtCLEdBQUtWLElBQVUsQ0FBakNVLGtCQUFrQjtJQUV6Q25CLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQ0UsS0FBNkIsSUFDN0IsT0FBT29CLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFdBQVcsRUFDdEM7WUFDQVAsV0FBVyxDQUFDLElBQUksQ0FBQztTQUNsQjtLQUNGLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTVEsZUFBZTttQkFBRywwT0FBWTtnQkFRMUJDLFNBQVM7Ozs7d0JBUGpCLElBQUlSLENBQUFBLFFBQVEsYUFBUkEsUUFBUSxXQUFRLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsUUFBUSxDQUFFUyxNQUFNLElBQUcsQ0FBQyxFQUFFOzRCQUN4QixJQUFJVCxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ2ZILEtBQUssQ0FBQ2Esa0JBQWtCLENBQUMsSUFBSSxDQUFDO2dDQUM5QmYsZ0VBQVUsRUFBRTs2QkFDYjt5QkFDRjs7OytCQUV5QlUsTUFBTSxDQUFDQyxRQUFRLENBQUNLLE9BQU8sQ0FBQzs0QkFDOUNDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQzlCLENBQUM7O3dCQUZJSixTQUFTLFlBRWI7d0JBQ0ZMLGFBQWEsQ0FBQ0ssU0FBUyxDQUFDOzs7Ozs7d0JBRXhCSixrQkFBa0IsQ0FDaEIsb0ZBQW9GLENBQ3JGOzs7Ozs7Ozs7OztTQUVKO3dCQWpCS0csZUFBZTs7O09BaUJwQjtJQUVELElBQUlULFFBQVEsRUFBRTtRQUNaLHFCQUNFLDhEQUFDZSxLQUFHO1lBQ0ZDLFNBQVMsRUFBQyw4Q0FBOEM7WUFDeERDLE9BQU8sRUFBRVIsZUFBZTs7OEJBRXhCLDhEQUFDbkIsc0RBQVk7b0JBQUM0QixLQUFLLEVBQUUsRUFBRTtvQkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O3lCQUFJO2dCQUV0Q2pCLENBQUFBLFFBQVEsYUFBUkEsUUFBUSxXQUFRLEdBQWhCQSxLQUFBQSxDQUFnQixHQUFoQkEsUUFBUSxDQUFFUyxNQUFNLElBQUcsQ0FBQyxpQkFDbkIsOERBQUNJLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxVQUFVOzhCQUN2Qiw0RUFBQ0ksSUFBRTtrQ0FBRTNCLDZFQUFhLENBQUNTLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7NkJBQU07Ozs7O3lCQUNqQyxpQkFFTiw4REFBQ2tCLElBQUU7OEJBQUMsU0FBTzs7Ozs7eUJBQUs7Ozs7OztpQkFFZCxDQUNQO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ0MsR0FBQztRQUFDQyxJQUFJLEVBQUMsc0JBQXNCO2tCQUM1Qiw0RUFBQ1AsS0FBRztZQUFDQyxTQUFTLEVBQUMsOENBQThDOzs4QkFDM0QsOERBQUN6QixxREFBVztvQkFBQzJCLEtBQUssRUFBRSxFQUFFO29CQUFFQyxNQUFNLEVBQUUsRUFBRTs7Ozs7eUJBQUk7OEJBQ3RDLDhEQUFDSSxJQUFFOzhCQUFDLGtCQUFnQjs7Ozs7eUJBQUs7Ozs7OztpQkFDckI7Ozs7O2FBQ0osQ0FDTDtDQUNGO0dBNURLekIsZUFBZTs7UUFFRkgsb0RBQVc7OztBQUZ4QkcsS0FBQUEsZUFBZTtBQTZEckIsK0RBQWVBLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXRhbWFza0Nvbm5lY3QvaW5kZXguanM/YmMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZXRhbWFza0ljb24sIFdhcm5pbmdJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvaWNvbnMnXHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnXHJcbmltcG9ydCB7IGZvcm1hdEFkZHJlc3MgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvZXRoZXJldW1VdGlscydcclxuaW1wb3J0IHsgdXNlU2VsZWN0IH0gZnJvbSAnQG11aS9iYXNlJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgVXBkYXRlcnMgZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMnXHJcbmltcG9ydCB7IGVuYWJsZUJsdXIgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMvY3NzJ1xyXG5jb25zdCBNZXRhbWFza0Nvbm5lY3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbbWV0YW1hc2ssIHNldE1ldGFtYXNrXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGFjY291bnRzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hY2NvdW50KVxyXG4gIGNvbnN0IHsgdXBkYXRlQWNjb3VudCwgdXBkYXRlRXJyb3JNZXNzYWdlIH0gPSBVcGRhdGVycygpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnXHJcbiAgICApIHtcclxuICAgICAgc2V0TWV0YW1hc2sodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgbWV0YU1hc2tPbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGFjY291bnRzPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChhY2NvdW50c1swXSkge1xyXG4gICAgICAgIHByb3BzLnNldE1ldGFtYXNrT25DbGljayh0cnVlKVxyXG4gICAgICAgIGVuYWJsZUJsdXIoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhY2NvdW50c18gPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycsXHJcbiAgICAgIH0pXHJcbiAgICAgIHVwZGF0ZUFjY291bnQoYWNjb3VudHNfKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHVwZGF0ZUVycm9yTWVzc2FnZShcclxuICAgICAgICAnQWxyZWFkeSBwcm9jZXNzaW5nIHJlcXVlc3QgdG8gZ2V0IGFjY291bnRzLiBQbGVhc2UgdHJ5IGNvbm5lY3Rpbmcgd2FsbGV0IG1hbnVhbGx5LidcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG1ldGFtYXNrKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWV0YW1hc2stY29ubmVjdCBmbGV4LWJveCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgIG9uQ2xpY2s9e21ldGFNYXNrT25DbGlja31cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXRhbWFza0ljb24gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxyXG5cclxuICAgICAgICB7YWNjb3VudHM/Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtYm94XCI+XHJcbiAgICAgICAgICAgIDxoMz57Zm9ybWF0QWRkcmVzcyhhY2NvdW50c1swXSl9PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8aDM+Q29ubmVjdDwvaDM+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vbWV0YW1hc2suaW8vXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YW1hc2stY29ubmVjdCBmbGV4LWJveCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8V2FybmluZ0ljb24gd2lkdGg9ezI1fSBoZWlnaHQ9ezI1fSAvPlxyXG4gICAgICAgIDxoMj5NZXRhbWFzayBtaXNzaW5nPC9oMj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2E+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE1ldGFtYXNrQ29ubmVjdFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZU1lbW8iLCJNZXRhbWFza0ljb24iLCJXYXJuaW5nSWNvbiIsIndlYjMiLCJmb3JtYXRBZGRyZXNzIiwidXNlU2VsZWN0IiwidXNlU2VsZWN0b3IiLCJVcGRhdGVycyIsImVuYWJsZUJsdXIiLCJNZXRhbWFza0Nvbm5lY3QiLCJwcm9wcyIsIm1ldGFtYXNrIiwic2V0TWV0YW1hc2siLCJhY2NvdW50cyIsInN0YXRlIiwiYWNjb3VudCIsInVwZGF0ZUFjY291bnQiLCJ1cGRhdGVFcnJvck1lc3NhZ2UiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIm1ldGFNYXNrT25DbGljayIsImFjY291bnRzXyIsImxlbmd0aCIsInNldE1ldGFtYXNrT25DbGljayIsInJlcXVlc3QiLCJtZXRob2QiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsImEiLCJocmVmIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MetamaskConnect/index.js\n"));

/***/ })

});