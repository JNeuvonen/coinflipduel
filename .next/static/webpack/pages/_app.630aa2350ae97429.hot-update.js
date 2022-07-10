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

/***/ "./state/reducer/index.js":
/*!********************************!*\
  !*** ./state/reducer/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n\n\nvar reducer = function(state, action) {\n    switch(action.type){\n        case \"updateAccount\":\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {\n                account: action.payload\n            });\n        case \"updateErrorMessage\":\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {\n                errorMessage: action.payload\n            });\n        case \"updateInfoMessage\":\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {\n                infoMessage: action.payload\n            });\n        case \"updateInfoMessageType\":\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, state), {\n                infoMessageType: action.payload\n            });\n        default:\n            {\n                return {\n                    account: null,\n                    errorMessage: null,\n                    infoMessage: null,\n                    infoMessageType: null,\n                    infoMessageTimeout: null\n                };\n            }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdGF0ZS9yZWR1Y2VyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUFBLElBQU1BLE9BQU8sR0FBRyxTQUFDQyxLQUFLLEVBQUVDLE1BQU0sRUFBSztJQUNqQyxPQUFRQSxNQUFNLENBQUNDLElBQUk7UUFDakIsS0FBSyxlQUFlO1lBQ2xCLE9BQU8sd0tBQUtGLEtBQUs7Z0JBQUVHLE9BQU8sRUFBRUYsTUFBTSxDQUFDRyxPQUFPO2NBQUU7UUFFOUMsS0FBSyxvQkFBb0I7WUFDdkIsT0FBTyx3S0FBS0osS0FBSztnQkFBRUssWUFBWSxFQUFFSixNQUFNLENBQUNHLE9BQU87Y0FBRTtRQUVuRCxLQUFLLG1CQUFtQjtZQUN0QixPQUFPLHdLQUFLSixLQUFLO2dCQUFFTSxXQUFXLEVBQUVMLE1BQU0sQ0FBQ0csT0FBTztjQUFFO1FBRWxELEtBQUssdUJBQXVCO1lBQzFCLE9BQU8sd0tBQUtKLEtBQUs7Z0JBQUVPLGVBQWUsRUFBRU4sTUFBTSxDQUFDRyxPQUFPO2NBQUU7UUFFdEQ7WUFBUztnQkFDUCxPQUFPO29CQUNMRCxPQUFPLEVBQUUsSUFBSTtvQkFDYkUsWUFBWSxFQUFFLElBQUk7b0JBQ2xCQyxXQUFXLEVBQUUsSUFBSTtvQkFDakJDLGVBQWUsRUFBRSxJQUFJO29CQUNyQkMsa0JBQWtCLEVBQUUsSUFBSTtpQkFDekI7YUFDRjtLQUNGO0NBQ0Y7QUFFRCwrREFBZVQsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdGF0ZS9yZWR1Y2VyL2luZGV4LmpzPzQyYmUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSAndXBkYXRlQWNjb3VudCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhY2NvdW50OiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgY2FzZSAndXBkYXRlRXJyb3JNZXNzYWdlJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yTWVzc2FnZTogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGNhc2UgJ3VwZGF0ZUluZm9NZXNzYWdlJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluZm9NZXNzYWdlOiBhY3Rpb24ucGF5bG9hZCB9XHJcblxyXG4gICAgY2FzZSAndXBkYXRlSW5mb01lc3NhZ2VUeXBlJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGluZm9NZXNzYWdlVHlwZTogYWN0aW9uLnBheWxvYWQgfVxyXG5cclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhY2NvdW50OiBudWxsLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogbnVsbCxcclxuICAgICAgICBpbmZvTWVzc2FnZTogbnVsbCxcclxuICAgICAgICBpbmZvTWVzc2FnZVR5cGU6IG51bGwsXHJcbiAgICAgICAgaW5mb01lc3NhZ2VUaW1lb3V0OiBudWxsLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWNjb3VudCIsInBheWxvYWQiLCJlcnJvck1lc3NhZ2UiLCJpbmZvTWVzc2FnZSIsImluZm9NZXNzYWdlVHlwZSIsImluZm9NZXNzYWdlVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./state/reducer/index.js\n"));

/***/ })

});