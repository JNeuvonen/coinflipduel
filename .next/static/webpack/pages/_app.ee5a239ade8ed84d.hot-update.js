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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"containsNumber\": function() { return /* binding */ containsNumber; },\n/* harmony export */   \"copyToClipBoard\": function() { return /* binding */ copyToClipBoard; },\n/* harmony export */   \"findTableByAddress\": function() { return /* binding */ findTableByAddress; },\n/* harmony export */   \"getContractBalance\": function() { return /* binding */ getContractBalance; },\n/* harmony export */   \"getDuelInfo\": function() { return /* binding */ getDuelInfo; },\n/* harmony export */   \"getMinstakeFromContract\": function() { return /* binding */ getMinstakeFromContract; },\n/* harmony export */   \"getPlayer1FromContract\": function() { return /* binding */ getPlayer1FromContract; },\n/* harmony export */   \"getTableNameFromContract\": function() { return /* binding */ getTableNameFromContract; },\n/* harmony export */   \"sortOpenTables\": function() { return /* binding */ sortOpenTables; },\n/* harmony export */   \"tableNameAlreadyExists\": function() { return /* binding */ tableNameAlreadyExists; },\n/* harmony export */   \"upperCase\": function() { return /* binding */ upperCase; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n\nvar sortOpenTables = function(contracts, sort, reverse) {\n    var compare = function compare(a, b) {\n        if (sort === \"Table\") {\n            return compareHelper(a.history[1], b.history[1]);\n        }\n        if (sort === \"Staked\") {\n            return compareHelper(a.history[5], b.history[5]);\n        }\n        if (sort === \"Min stake\") {\n            return compareHelper(a.history[2], b.history[2]);\n        }\n        if (sort === \"Block Timestamp\") {\n            return compareHelper(Number(a[3]), Number(b[3]));\n        }\n        if (sort === \"Winner\") {\n            return compareHelper(a[0], b[0]);\n        }\n        if (sort === \"Loser\") {\n            return compareHelper(a[1], b[1]);\n        }\n        if (sort === \"Waged\") {\n            return compareHelper(a[2], b[2]);\n        }\n        if (sort === \"Address\") {\n            return compareHelper(a.contract.options.address, b.contract.options.address);\n        }\n    };\n    if (sort === \"#\") {\n        var arrayForSort = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contracts);\n        return arrayForSort.reverse();\n    }\n    var compareHelper = function(a, b) {\n        if (a > b) {\n            return reverse ? 1 : -1;\n        }\n        if (a < b) {\n            return reverse ? -1 : 1;\n        }\n        return 0;\n    };\n    var arrayForSort1 = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contracts);\n    return arrayForSort1.sort(compare);\n};\nvar copyToClipBoard = function(text) {\n    navigator.clipboard.writeText(text);\n};\nvar findTableByAddress = function(contracts, address) {\n    for(var i = 0; i < contracts.length; i++){\n        if (address === contracts[i].contract[\"_address\"]) {\n            return contracts[i];\n        }\n    }\n    return null;\n};\nvar getTableNameFromContract = function(contract) {\n    return contract.history[1];\n};\nvar getContractBalance = function(contract) {\n    return Number(contract.history[5]);\n};\nvar getMinstakeFromContract = function(contract) {\n    return contract.history[2];\n};\nvar getPlayer1FromContract = function(contract) {\n    return contract.history[3];\n};\nvar getDuelInfo = function(data) {\n    var ret = 0;\n    data.forEach(function(item) {\n        ret += Number(item[2]);\n    });\n    return ret;\n};\nvar tableNameAlreadyExists = function(contracts, name) {\n    var ret = false;\n    for(var i = 0; i < contracts.length; i++){\n        if (name.toLowerCase() === contracts[i].history[1].toLowerCase()) {\n            return true;\n        }\n    }\n    return false;\n};\nvar containsNumber = function(str) {\n    return /[0-9]/.test(str);\n};\nvar upperCase = function(str) {\n    if (str.length > 0) {\n        if (str[0].match(/^[A-Z]/)) {\n            return false;\n        } else {\n            return true;\n        }\n    }\n    return false;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR25CLFNBQVMsQ0FBQ29CLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLENBQUU7UUFDekMsSUFBSVksSUFBSSxDQUFDQyxXQUFXLEVBQUUsS0FBS2hDLFNBQVMsQ0FBQ21CLENBQUMsQ0FBQyxDQUFDWixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUN5QixXQUFXLEVBQUUsRUFBRTtZQUNoRSxPQUFPLElBQUk7U0FDWjtLQUNGO0lBQ0QsT0FBTyxLQUFLO0NBQ2I7QUFFTSxJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsR0FBRyxFQUFLO0lBQ3JDLE9BQU8sUUFBUUMsSUFBSSxDQUFDRCxHQUFHLENBQUM7Q0FDekI7QUFFTSxJQUFNRSxTQUFTLEdBQUcsU0FBQ0YsR0FBRyxFQUFLO0lBQ2hDLElBQUlBLEdBQUcsQ0FBQ2QsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNsQixJQUFJYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUNHLEtBQUssVUFBVSxFQUFFO1lBQzFCLE9BQU8sS0FBSztTQUNiLE1BQU07WUFDTCxPQUFPLElBQUk7U0FDWjtLQUNGO0lBQ0QsT0FBTyxLQUFLO0NBQ2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZnVuY3Rpb25zL2dlbmVyYWwuanM/MTY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc29ydE9wZW5UYWJsZXMgPSAoY29udHJhY3RzLCBzb3J0LCByZXZlcnNlKSA9PiB7XHJcbiAgaWYgKHNvcnQgPT09ICcjJykge1xyXG4gICAgbGV0IGFycmF5Rm9yU29ydCA9IFsuLi5jb250cmFjdHNdXHJcbiAgICByZXR1cm4gYXJyYXlGb3JTb3J0LnJldmVyc2UoKVxyXG4gIH1cclxuICBjb25zdCBjb21wYXJlSGVscGVyID0gKGEsIGIpID0+IHtcclxuICAgIGlmIChhID4gYikge1xyXG4gICAgICByZXR1cm4gcmV2ZXJzZSA/IDEgOiAtMVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhIDwgYikge1xyXG4gICAgICByZXR1cm4gcmV2ZXJzZSA/IC0xIDogMVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDBcclxuICB9XHJcbiAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XHJcbiAgICBpZiAoc29ydCA9PT0gJ1RhYmxlJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihhLmhpc3RvcnlbMV0sIGIuaGlzdG9yeVsxXSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydCA9PT0gJ1N0YWtlZCcpIHtcclxuICAgICAgcmV0dXJuIGNvbXBhcmVIZWxwZXIoYS5oaXN0b3J5WzVdLCBiLmhpc3RvcnlbNV0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnQgPT09ICdNaW4gc3Rha2UnKSB7XHJcbiAgICAgIHJldHVybiBjb21wYXJlSGVscGVyKGEuaGlzdG9yeVsyXSwgYi5oaXN0b3J5WzJdKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ID09PSAnQmxvY2sgVGltZXN0YW1wJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihOdW1iZXIoYVszXSksIE51bWJlcihiWzNdKSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydCA9PT0gJ1dpbm5lcicpIHtcclxuICAgICAgcmV0dXJuIGNvbXBhcmVIZWxwZXIoYVswXSwgYlswXSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc29ydCA9PT0gJ0xvc2VyJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihhWzFdLCBiWzFdKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3J0ID09PSAnV2FnZWQnKSB7XHJcbiAgICAgIHJldHVybiBjb21wYXJlSGVscGVyKGFbMl0sIGJbMl0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnQgPT09ICdBZGRyZXNzJykge1xyXG4gICAgICByZXR1cm4gY29tcGFyZUhlbHBlcihcclxuICAgICAgICBhLmNvbnRyYWN0Lm9wdGlvbnMuYWRkcmVzcyxcclxuICAgICAgICBiLmNvbnRyYWN0Lm9wdGlvbnMuYWRkcmVzc1xyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgYXJyYXlGb3JTb3J0ID0gWy4uLmNvbnRyYWN0c11cclxuXHJcbiAgcmV0dXJuIGFycmF5Rm9yU29ydC5zb3J0KGNvbXBhcmUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb3B5VG9DbGlwQm9hcmQgPSAodGV4dCkgPT4ge1xyXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGFibGVCeUFkZHJlc3MgPSAoY29udHJhY3RzLCBhZGRyZXNzKSA9PiB7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cmFjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChhZGRyZXNzID09PSBjb250cmFjdHNbaV0uY29udHJhY3RbJ19hZGRyZXNzJ10pIHtcclxuICAgICAgcmV0dXJuIGNvbnRyYWN0c1tpXVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFibGVOYW1lRnJvbUNvbnRyYWN0ID0gKGNvbnRyYWN0KSA9PiB7XHJcbiAgcmV0dXJuIGNvbnRyYWN0Lmhpc3RvcnlbMV1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYWN0QmFsYW5jZSA9IChjb250cmFjdCkgPT4ge1xyXG4gIHJldHVybiBOdW1iZXIoY29udHJhY3QuaGlzdG9yeVs1XSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1pbnN0YWtlRnJvbUNvbnRyYWN0ID0gKGNvbnRyYWN0KSA9PiB7XHJcbiAgcmV0dXJuIGNvbnRyYWN0Lmhpc3RvcnlbMl1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBsYXllcjFGcm9tQ29udHJhY3QgPSAoY29udHJhY3QpID0+IHtcclxuICByZXR1cm4gY29udHJhY3QuaGlzdG9yeVszXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RHVlbEluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIGxldCByZXQgPSAwXHJcblxyXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0ICs9IE51bWJlcihpdGVtWzJdKVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGFibGVOYW1lQWxyZWFkeUV4aXN0cyA9IChjb250cmFjdHMsIG5hbWUpID0+IHtcclxuICBsZXQgcmV0ID0gZmFsc2VcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cmFjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT09IGNvbnRyYWN0c1tpXS5oaXN0b3J5WzFdLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWluc051bWJlciA9IChzdHIpID0+IHtcclxuICByZXR1cm4gL1swLTldLy50ZXN0KHN0cilcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwcGVyQ2FzZSA9IChzdHIpID0+IHtcclxuICBpZiAoc3RyLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChzdHJbMF0ubWF0Y2goL15bQS1aXS8pKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuIl0sIm5hbWVzIjpbInNvcnRPcGVuVGFibGVzIiwiY29udHJhY3RzIiwic29ydCIsInJldmVyc2UiLCJjb21wYXJlIiwiYSIsImIiLCJjb21wYXJlSGVscGVyIiwiaGlzdG9yeSIsIk51bWJlciIsImNvbnRyYWN0Iiwib3B0aW9ucyIsImFkZHJlc3MiLCJhcnJheUZvclNvcnQiLCJjb3B5VG9DbGlwQm9hcmQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZmluZFRhYmxlQnlBZGRyZXNzIiwiaSIsImxlbmd0aCIsImdldFRhYmxlTmFtZUZyb21Db250cmFjdCIsImdldENvbnRyYWN0QmFsYW5jZSIsImdldE1pbnN0YWtlRnJvbUNvbnRyYWN0IiwiZ2V0UGxheWVyMUZyb21Db250cmFjdCIsImdldER1ZWxJbmZvIiwiZGF0YSIsInJldCIsImZvckVhY2giLCJpdGVtIiwidGFibGVOYW1lQWxyZWFkeUV4aXN0cyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImNvbnRhaW5zTnVtYmVyIiwic3RyIiwidGVzdCIsInVwcGVyQ2FzZSIsIm1hdGNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/functions/general.js\n"));

/***/ })

});