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

/***/ "./components/LoadingSpinner/index.js":
/*!********************************************!*\
  !*** ./components/LoadingSpinner/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_JSON_icons8_bitcoin_1_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/JSON/icons8-bitcoin (1).json */ \"./assets/JSON/icons8-bitcoin (1).json\");\n/* harmony import */ var lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lottie-web/build/player/lottie_light */ \"./node_modules/lottie-web/build/player/lottie_light.js\");\n/* harmony import */ var lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar LoadingSpinner = function() {\n    _s();\n    var animationContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var anim = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (animationContainer.current) {\n            anim.current = lottie_web_build_player_lottie_light__WEBPACK_IMPORTED_MODULE_3___default().loadAnimation({\n                container: animationContainer.current,\n                renderer: \"svg\",\n                loop: true,\n                autoplay: true,\n                animationData: _assets_JSON_icons8_bitcoin_1_json__WEBPACK_IMPORTED_MODULE_2__\n            });\n            return function() {\n                var ref;\n                return (ref = anim.current) === null || ref === void 0 ? void 0 : ref.destroy();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loading-spinner\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: animationContainer,\n            style: {\n                width: 150,\n                height: 150\n            },\n            className: \"centered\"\n        }, void 0, false, {\n            fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\LoadingSpinner\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\solidity\\\\coinflipduel\\\\components\\\\LoadingSpinner\\\\index.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(LoadingSpinner, \"6d+bqiwG8Yd+Lewwms/1hCXG8rI=\");\n_c = LoadingSpinner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingSpinner);\nvar _c;\n$RefreshReg$(_c, \"LoadingSpinner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQW1DO0FBQ2E7QUFDZTtBQUNOOztBQUN6RCxJQUFNTSxjQUFjLEdBQUcsV0FBTTs7SUFDM0IsSUFBTUMsa0JBQWtCLEdBQUdKLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQU1LLElBQUksR0FBR0wsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFekJELGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlLLGtCQUFrQixDQUFDRSxPQUFPLEVBQUU7WUFDOUJELElBQUksQ0FBQ0MsT0FBTyxHQUFHSix5RkFBb0IsQ0FBQztnQkFDbENNLFNBQVMsRUFBRUosa0JBQWtCLENBQUNFLE9BQU87Z0JBQ3JDRyxRQUFRLEVBQUUsS0FBSztnQkFDZkMsSUFBSSxFQUFFLElBQUk7Z0JBQ1ZDLFFBQVEsRUFBRSxJQUFJO2dCQUNkQyxhQUFhLEVBQUVYLCtEQUFPO2FBQ3ZCLENBQUM7WUFFRixPQUFPO29CQUFNSSxHQUFZO2dCQUFaQSxPQUFBQSxDQUFBQSxHQUFZLEdBQVpBLElBQUksQ0FBQ0MsT0FBTyxjQUFaRCxHQUFZLFdBQVMsR0FBckJBLEtBQUFBLENBQXFCLEdBQXJCQSxHQUFZLENBQUVRLE9BQU8sRUFBRTthQUFBO1NBQ3JDO0tBQ0YsRUFBRSxFQUFFLENBQUM7SUFDTixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsaUJBQWlCO2tCQUM5Qiw0RUFBQ0QsS0FBRztZQUNGRSxHQUFHLEVBQUVaLGtCQUFrQjtZQUN2QmEsS0FBSyxFQUFFO2dCQUFFcEIsS0FBSyxFQUFFLEdBQUc7Z0JBQUVxQixNQUFNLEVBQUUsR0FBRzthQUFFO1lBQ2xDSCxTQUFTLEVBQUUsVUFBVTs7Ozs7aUJBQ2hCOzs7OzthQUNILENBQ1A7Q0FDRjtHQTFCS1osY0FBYztBQUFkQSxLQUFBQSxjQUFjO0FBMkJwQiwrREFBZUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL2luZGV4LmpzPzIwYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2lkdGggfSBmcm9tICdAbXVpL3N5c3RlbSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBidGNKU09OIGZyb20gJy4uLy4uL2Fzc2V0cy9KU09OL2ljb25zOC1iaXRjb2luICgxKS5qc29uJ1xyXG5pbXBvcnQgbG90dGllIGZyb20gJ2xvdHRpZS13ZWIvYnVpbGQvcGxheWVyL2xvdHRpZV9saWdodCdcclxuY29uc3QgTG9hZGluZ1NwaW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgYW5pbWF0aW9uQ29udGFpbmVyID0gdXNlUmVmKG51bGwpXHJcbiAgY29uc3QgYW5pbSA9IHVzZVJlZihudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50KSB7XHJcbiAgICAgIGFuaW0uY3VycmVudCA9IGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgICBjb250YWluZXI6IGFuaW1hdGlvbkNvbnRhaW5lci5jdXJyZW50LFxyXG4gICAgICAgIHJlbmRlcmVyOiAnc3ZnJyxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGJ0Y0pTT04sXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gYW5pbS5jdXJyZW50Py5kZXN0cm95KClcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17YW5pbWF0aW9uQ29udGFpbmVyfVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNTAsIGhlaWdodDogMTUwIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXsnY2VudGVyZWQnfVxyXG4gICAgICA+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1NwaW5uZXJcclxuIl0sIm5hbWVzIjpbIndpZHRoIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJidGNKU09OIiwibG90dGllIiwiTG9hZGluZ1NwaW5uZXIiLCJhbmltYXRpb25Db250YWluZXIiLCJhbmltIiwiY3VycmVudCIsImxvYWRBbmltYXRpb24iLCJjb250YWluZXIiLCJyZW5kZXJlciIsImxvb3AiLCJhdXRvcGxheSIsImFuaW1hdGlvbkRhdGEiLCJkZXN0cm95IiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LoadingSpinner/index.js\n"));

/***/ })

});