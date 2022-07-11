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

/***/ "./utils/functions/ethereumUtils.js":
/*!******************************************!*\
  !*** ./utils/functions/ethereumUtils.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchEthPrice\": function() { return /* binding */ fetchEthPrice; },\n/* harmony export */   \"formatAddress\": function() { return /* binding */ formatAddress; },\n/* harmony export */   \"formatBetsize\": function() { return /* binding */ formatBetsize; },\n/* harmony export */   \"getContractData\": function() { return /* binding */ getContractData; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar formatAddress = function(address) {\n    return address[0] + address[1] + address[2] + address[3] + address[4] + \"...\" + address[address.length - 4] + address[address.length - 3] + address[address.length - 2] + address[address.length - 1];\n};\nvar formatBetsize = function(wei, decimals) {\n    if (wei < Math.pow(10, 7)) {\n        return wei + \" Wei\";\n    }\n    if (wei < Math.pow(10, 16)) {\n        if (decimals) {\n            return String((wei / Math.pow(10, 9)).toFixed(decimals)) + \" Eth\";\n        }\n        return String(wei / Math.pow(10, 9)) + \" Gwei\";\n    }\n    if (decimals) {\n        return String((wei / Math.pow(10, 18)).toFixed(decimals)) + \" Eth\";\n    }\n    return String(wei / Math.pow(10, 18)) + \" Eth\";\n};\nvar fetchEthPrice = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return D_solidity_coinflipduel_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://api3.binance.com/api/v3/ticker/price?symbol=ETHUSDT\");\n                case 2:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function fetchEthPrice() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getContractData = function(contracts) {\n    var coinFlips = 0;\n    var moneyExchanged = 0;\n    var winners = {};\n    var losers = {};\n    contracts.map(function(item) {\n        coinFlips += item.history[0].length;\n        item.history[0].map(function(item) {\n            moneyExchanged += Number(item[2]);\n            if (item[0] in winners) {\n                winners[item[0]][\"rounds\"] += 1;\n                winners[item[0]][\"money\"] += Number(item[2]);\n            } else {\n                winners[item[0]] = {};\n                winners[item[0]][\"rounds\"] = 1;\n                winners[item[0]][\"money\"] += Number(item[2]);\n            }\n            if (item[1] in losers) {\n                losers[item[1]][\"rounds\"] += 1;\n                losers[item[1]][\"money\"] += Number(item[2]);\n            } else {\n                losers[item[1]] = {};\n                losers[item[1]][\"rounds\"] = 1;\n                losers[item[1]][\"money\"] += Number(item[2]);\n            }\n        });\n    });\n    return {\n        coinFlips: coinFlips,\n        moneyExchanged: moneyExchanged,\n        winners: winners,\n        losers: losers\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0tBQUU7Q0FDdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZnVuY3Rpb25zL2V0aGVyZXVtVXRpbHMuanM/MDY3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0QWRkcmVzcyA9IChhZGRyZXNzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIGFkZHJlc3NbMF0gK1xyXG4gICAgYWRkcmVzc1sxXSArXHJcbiAgICBhZGRyZXNzWzJdICtcclxuICAgIGFkZHJlc3NbM10gK1xyXG4gICAgYWRkcmVzc1s0XSArXHJcbiAgICAnLi4uJyArXHJcbiAgICBhZGRyZXNzW2FkZHJlc3MubGVuZ3RoIC0gNF0gK1xyXG4gICAgYWRkcmVzc1thZGRyZXNzLmxlbmd0aCAtIDNdICtcclxuICAgIGFkZHJlc3NbYWRkcmVzcy5sZW5ndGggLSAyXSArXHJcbiAgICBhZGRyZXNzW2FkZHJlc3MubGVuZ3RoIC0gMV1cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXRCZXRzaXplID0gKHdlaSwgZGVjaW1hbHMpID0+IHtcclxuICBpZiAod2VpIDwgTWF0aC5wb3coMTAsIDcpKSB7XHJcbiAgICByZXR1cm4gd2VpICsgJyBXZWknXHJcbiAgfVxyXG5cclxuICBpZiAod2VpIDwgTWF0aC5wb3coMTAsIDE2KSkge1xyXG4gICAgaWYgKGRlY2ltYWxzKSB7XHJcbiAgICAgIHJldHVybiBTdHJpbmcoKHdlaSAvIE1hdGgucG93KDEwLCA5KSkudG9GaXhlZChkZWNpbWFscykpICsgJyBFdGgnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gU3RyaW5nKHdlaSAvIE1hdGgucG93KDEwLCA5KSkgKyAnIEd3ZWknXHJcbiAgfVxyXG5cclxuICBpZiAoZGVjaW1hbHMpIHtcclxuICAgIHJldHVybiBTdHJpbmcoKHdlaSAvIE1hdGgucG93KDEwLCAxOCkpLnRvRml4ZWQoZGVjaW1hbHMpKSArICcgRXRoJ1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFN0cmluZyh3ZWkgLyBNYXRoLnBvdygxMCwgMTgpKSArICcgRXRoJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hFdGhQcmljZSA9IGFzeW5jICgpID0+IHtcclxuICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgJ2h0dHBzOi8vYXBpMy5iaW5hbmNlLmNvbS9hcGkvdjMvdGlja2VyL3ByaWNlP3N5bWJvbD1FVEhVU0RUJ1xyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbnRyYWN0RGF0YSA9IChjb250cmFjdHMpID0+IHtcclxuICBsZXQgY29pbkZsaXBzID0gMFxyXG4gIGxldCBtb25leUV4Y2hhbmdlZCA9IDBcclxuICBsZXQgd2lubmVycyA9IHt9XHJcbiAgbGV0IGxvc2VycyA9IHt9XHJcblxyXG4gIGNvbnRyYWN0cy5tYXAoKGl0ZW0pID0+IHtcclxuICAgIGNvaW5GbGlwcyArPSBpdGVtLmhpc3RvcnlbMF0ubGVuZ3RoXHJcbiAgICBpdGVtLmhpc3RvcnlbMF0ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgIG1vbmV5RXhjaGFuZ2VkICs9IE51bWJlcihpdGVtWzJdKVxyXG4gICAgICBpZiAoaXRlbVswXSBpbiB3aW5uZXJzKSB7XHJcbiAgICAgICAgd2lubmVyc1tpdGVtWzBdXVsncm91bmRzJ10gKz0gMVxyXG4gICAgICAgIHdpbm5lcnNbaXRlbVswXV1bJ21vbmV5J10gKz0gTnVtYmVyKGl0ZW1bMl0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2lubmVyc1tpdGVtWzBdXSA9IHt9XHJcbiAgICAgICAgd2lubmVyc1tpdGVtWzBdXVsncm91bmRzJ10gPSAxXHJcbiAgICAgICAgd2lubmVyc1tpdGVtWzBdXVsnbW9uZXknXSArPSBOdW1iZXIoaXRlbVsyXSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW1bMV0gaW4gbG9zZXJzKSB7XHJcbiAgICAgICAgbG9zZXJzW2l0ZW1bMV1dWydyb3VuZHMnXSArPSAxXHJcbiAgICAgICAgbG9zZXJzW2l0ZW1bMV1dWydtb25leSddICs9IE51bWJlcihpdGVtWzJdKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvc2Vyc1tpdGVtWzFdXSA9IHt9XHJcblxyXG4gICAgICAgIGxvc2Vyc1tpdGVtWzFdXVsncm91bmRzJ10gPSAxXHJcbiAgICAgICAgbG9zZXJzW2l0ZW1bMV1dWydtb25leSddICs9IE51bWJlcihpdGVtWzJdKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7IGNvaW5GbGlwcywgbW9uZXlFeGNoYW5nZWQsIHdpbm5lcnMsIGxvc2VycyB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZm9ybWF0QWRkcmVzcyIsImFkZHJlc3MiLCJsZW5ndGgiLCJmb3JtYXRCZXRzaXplIiwid2VpIiwiZGVjaW1hbHMiLCJNYXRoIiwicG93IiwiU3RyaW5nIiwidG9GaXhlZCIsImZldGNoRXRoUHJpY2UiLCJnZXQiLCJnZXRDb250cmFjdERhdGEiLCJjb250cmFjdHMiLCJjb2luRmxpcHMiLCJtb25leUV4Y2hhbmdlZCIsIndpbm5lcnMiLCJsb3NlcnMiLCJtYXAiLCJpdGVtIiwiaGlzdG9yeSIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/functions/ethereumUtils.js\n"));

/***/ })

});