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

/***/ "./utils/functions/general.js":
/*!************************************!*\
  !*** ./utils/functions/general.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containsNumber\": function() { return /* binding */ containsNumber; },\n/* harmony export */   \"copyToClipBoard\": function() { return /* binding */ copyToClipBoard; },\n/* harmony export */   \"findTableByAddress\": function() { return /* binding */ findTableByAddress; },\n/* harmony export */   \"getContractBalance\": function() { return /* binding */ getContractBalance; },\n/* harmony export */   \"getDuelInfo\": function() { return /* binding */ getDuelInfo; },\n/* harmony export */   \"getMinstakeFromContract\": function() { return /* binding */ getMinstakeFromContract; },\n/* harmony export */   \"getTableNameFromContract\": function() { return /* binding */ getTableNameFromContract; },\n/* harmony export */   \"sortOpenTables\": function() { return /* binding */ sortOpenTables; },\n/* harmony export */   \"tableNameAlreadyExists\": function() { return /* binding */ tableNameAlreadyExists; },\n/* harmony export */   \"upperCase\": function() { return /* binding */ upperCase; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n\nvar sortOpenTables = function(contracts, sort, reverse) {\n    var compare = function compare(a, b) {\n        if (sort === \"Table\") {\n            return compareHelper(a.history[1], b.history[1]);\n        }\n        if (sort === \"Staked\") {\n            return compareHelper(a.history[5], b.history[5]);\n        }\n        if (sort === \"Min stake\") {\n            return compareHelper(a.history[2], b.history[2]);\n        }\n        if (sort === \"Block Timestamp\") {\n            return compareHelper(Number(a[3]), Number(b[3]));\n        }\n        if (sort === \"Winner\") {\n            return compareHelper(a[0], b[0]);\n        }\n        if (sort === \"Loser\") {\n            return compareHelper(a[1], b[1]);\n        }\n        if (sort === \"Waged\") {\n            return compareHelper(a[2], b[2]);\n        }\n        if (sort === \"Address\") {\n            return compareHelper(a.contract.options.address, b.contract.options.address);\n        }\n    };\n    if (sort === \"#\") {\n        var arrayForSort = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contracts);\n        return arrayForSort.reverse();\n    }\n    var compareHelper = function(a, b) {\n        if (a > b) {\n            return reverse ? 1 : -1;\n        }\n        if (a < b) {\n            return reverse ? -1 : 1;\n        }\n        return 0;\n    };\n    var arrayForSort1 = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contracts);\n    return arrayForSort1.sort(compare);\n};\nvar copyToClipBoard = function(text) {\n    navigator.clipboard.writeText(text);\n};\nvar findTableByAddress = function(contracts, address) {\n    for(var i = 0; i < contracts.length; i++){\n        if (address === contracts[i].contract[\"_address\"]) {\n            return contracts[i];\n        }\n    }\n    return null;\n};\nvar getTableNameFromContract = function(contract) {\n    return contract.history[1];\n};\nvar getContractBalance = function(contract) {\n    console.log(contract);\n    return contract.history[5];\n};\nvar getMinstakeFromContract = function(contract) {\n    return contract.history[2];\n};\nvar getDuelInfo = function(data) {\n    var ret = 0;\n    data.forEach(function(item) {\n        ret += Number(item[2]);\n    });\n    return ret;\n};\nvar tableNameAlreadyExists = function(contracts, name) {\n    var ret = false;\n    for(var i = 0; i < contracts.length; i++){\n        if (name.toLowerCase() === contracts[i].history[1].toLowerCase()) {\n            return true;\n        }\n    }\n    return false;\n};\nvar containsNumber = function(str) {\n    return /[0-9]/.test(str);\n};\nvar upperCase = function(str) {\n    if (str.length > 0) {\n        if (str[0].match(/^[A-Z]/)) {\n            return false;\n        } else {\n            return true;\n        }\n    }\n    return false;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDekMsSUFBSWEsSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBS2pDLFNBQVMsQ0FBQ21CLENBQUMsQ0FBQyxDQUFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMwQixXQUFXLEVBQUUsRUFBRTtZQUNoRSxPQUFPLElBQUk7U0FDWjtLQUNGO0lBQ0QsT0FBTyxLQUFLO0NBQ2I7QUFFTSxJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsR0FBRyxFQUFLO0lBQ3JDLE9BQU8sUUFBUUMsSUFBSSxDQUFDRCxHQUFHLENBQUM7Q0FDekI7QUFFTSxJQUFNRSxTQUFTLEdBQUcsU0FBQ0YsR0FBRyxFQUFLO0lBQ2hDLElBQUlBLEdBQUcsQ0FBQ2YsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNsQixJQUFJZSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUssVUFBVSxFQUFFO1lBQzFCLE9BQU8sS0FBSztTQUNiLE1BQU07WUFDTCxPQUFPLElBQUk7U0FDWjtLQUNGO0lBQ0QsT0FBTyxLQUFLO0NBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZnVuY3Rpb25zL2dlbmVyYWwuanM/MTY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc29ydE9wZW5UYWJsZXMgPSAoY29udHJhY3RzLCBzb3J0LCByZXZlcnNlKSA9PiB7XHJcbiAgaWYgKHNvcnQgPT09ICcjJykge1xyXG4gICAgbGV0IGFycmF5Rm9yU29ydCA9IFsuLi5jb250cmFjdHNdXHJcbiAgICByZXR1cm4gYXJyYXlGb3JTb3J0LnJldmVyc2UoKVxyXG4gIH1cclxuICBjb25zdCBjb21wYXJlSGVscGVyID0gKGEsIGIpID0+IHtcclxuICAgIGlmIChhID4gYikge1xyXG4gICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhIDwgYikge1xyXG4gICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbiAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XHJcbiAgICBpZiAoc29ydCA9PT0gJ1RhYmxlJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihhLmhpc3RvcnlbMV0sIGIuaGlzdG9yeVsxXSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydCA9PT0gJ1N0YWtlZCcpIHtcclxuICAgICAgcmV0dXJuIGNvbXBhcmVIZWxwZXIoYS5oaXN0b3J5WzVdLCBiLmhpc3RvcnlbNV0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnQgPT09ICdNaW4gc3Rha2UnKSB7XHJcbiAgICAgIHJldHVybiBjb21wYXJlSGVscGVyKGEuaGlzdG9yeVsyXSwgYi5oaXN0b3J5WzJdKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ID09PSAnQmxvY2sgVGltZXN0YW1wJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihOdW1iZXIoYVszXSksIE51bWJlcihiWzNdKSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydCA9PT0gJ1dpbm5lcicpIHtcclxuICAgICAgcmV0dXJuIGNvbXBhcmVIZWxwZXIoYVswXSwgYlswXSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydCA9PT0gJ0xvc2VyJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihhWzFdLCBiWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ID09PSAnV2FnZWQnKSB7XHJcbiAgICAgIHJldHVybiBjb21wYXJlSGVscGVyKGFbMl0sIGJbMl0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnQgPT09ICdBZGRyZXNzJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihcclxuICAgICAgICBhLmNvbnRyYWN0Lm9wdGlvbnMuYWRkcmVzcyxcclxuICAgICAgICBiLmNvbnRyYWN0Lm9wdGlvbnMuYWRkcmVzc1xyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgYXJyYXlGb3JTb3J0ID0gWy4uLmNvbnRyYWN0c11cclxuXHJcbiAgcmV0dXJuIGFycmF5Rm9yU29ydC5zb3J0KGNvbXBhcmUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb3B5VG9DbGlwQm9hcmQgPSAodGV4dCkgPT4ge1xyXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGFibGVCeUFkZHJlc3MgPSAoY29udHJhY3RzLCBhZGRyZXNzKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cmFjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChhZGRyZXNzID09PSBjb250cmFjdHNbaV0uY29udHJhY3RbJ19hZGRyZXNzJ10pIHtcclxuICAgICAgcmV0dXJuIGNvbnRyYWN0c1tpXVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFibGVOYW1lRnJvbUNvbnRyYWN0ID0gKGNvbnRyYWN0KSA9PiB7XHJcbiAgcmV0dXJuIGNvbnRyYWN0Lmhpc3RvcnlbMV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYWN0QmFsYW5jZSA9IChjb250cmFjdCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbnRyYWN0KVxyXG4gIHJldHVybiBjb250cmFjdC5oaXN0b3J5WzVdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNaW5zdGFrZUZyb21Db250cmFjdCA9IChjb250cmFjdCkgPT4ge1xyXG4gIHJldHVybiBjb250cmFjdC5oaXN0b3J5WzJdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREdWVsSW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHJldCA9IDBcclxuXHJcbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICByZXQgKz0gTnVtYmVyKGl0ZW1bMl0pXHJcbiAgfSlcclxuICByZXR1cm4gcmV0XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0YWJsZU5hbWVBbHJlYWR5RXhpc3RzID0gKGNvbnRyYWN0cywgbmFtZSkgPT4ge1xyXG4gIGxldCByZXQgPSBmYWxzZVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyYWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gY29udHJhY3RzW2ldLmhpc3RvcnlbMV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhaW5zTnVtYmVyID0gKHN0cikgPT4ge1xyXG4gIHJldHVybiAvWzAtOV0vLnRlc3Qoc3RyKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBwZXJDYXNlID0gKHN0cikgPT4ge1xyXG4gIGlmIChzdHIubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKHN0clswXS5tYXRjaCgvXltBLVpdLykpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG4iXSwibmFtZXMiOlsic29ydE9wZW5UYWJsZXMiLCJjb250cmFjdHMiLCJzb3J0IiwicmV2ZXJzZSIsImNvbXBhcmUiLCJhIiwiYiIsImNvbXBhcmVIZWxwZXIiLCJoaXN0b3J5IiwiTnVtYmVyIiwiY29udHJhY3QiLCJvcHRpb25zIiwiYWRkcmVzcyIsImFycmF5Rm9yU29ydCIsImNvcHlUb0NsaXBCb2FyZCIsInRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJmaW5kVGFibGVCeUFkZHJlc3MiLCJpIiwibGVuZ3RoIiwiZ2V0VGFibGVOYW1lRnJvbUNvbnRyYWN0IiwiZ2V0Q29udHJhY3RCYWxhbmNlIiwiY29uc29sZSIsImxvZyIsImdldE1pbnN0YWtlRnJvbUNvbnRyYWN0IiwiZ2V0RHVlbEluZm8iLCJkYXRhIiwicmV0IiwiZm9yRWFjaCIsIml0ZW0iLCJ0YWJsZU5hbWVBbHJlYWR5RXhpc3RzIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiY29udGFpbnNOdW1iZXIiLCJzdHIiLCJ0ZXN0IiwidXBwZXJDYXNlIiwibWF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/functions/general.js\n"));

/***/ })

});