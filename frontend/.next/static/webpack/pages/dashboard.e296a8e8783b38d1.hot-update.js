"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DashboardLoginHandler; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/WalletSessionProvider */ \"./utils/WalletSessionProvider.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/logo */ \"./components/logo.js\");\n/* harmony import */ var _components_NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../testData/testStoresData */ \"./testData/testStoresData.js\");\n/* harmony import */ var _testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nfunction DashboardLoginHandler() {\n    var CheckLogin = function CheckLogin() {\n        if (!walletSession.isLoaded) {\n            return;\n        }\n        while(!walletSession.isLoaded){}\n        if (walletSession.walletAddress) {\n            router.push('/dashboard');\n        } else {\n            router.push('/');\n        }\n    };\n    _s();\n    var walletSession = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_WalletSessionProvider__WEBPACK_IMPORTED_MODULE_1__.WalletContext);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.walletAddress\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        CheckLogin();\n    }, [\n        walletSession.isLoaded\n    ]);\n    if (walletSession.walletAddress) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashboard, {}, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading . . .\"\n        }, void 0, false, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this));\n    }\n};\n_s(DashboardLoginHandler, \"Oh4K/u280KuTL08TR1zGnZQE/Lc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = DashboardLoginHandler;\nfunction Dashboard() {\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), selectedStore = ref[0], setSelectedStore = ref[1]; //{ storeName: 'My New Store' })\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-full justify-center bg-background h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-[90rem] bg-background px-14\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardNavBar, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this),\n                selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                return setSelectedStore();\n                            },\n                            className: \"nunito-font font-black text-4xl text-mainBlack/50 hover:text-mainBlack transition-all\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                            lineNumber: 60,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-4xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_7__.HiOutlineChevronRight, {}, void 0, false, {\n                                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                                lineNumber: 64,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                            lineNumber: 63,\n                            columnNumber: 29\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"nunito-font font-black text-4xl\",\n                            children: selectedStore.storeName ? selectedStore.storeName : 'Unnamed Store'\n                        }, void 0, false, {\n                            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                            lineNumber: 66,\n                            columnNumber: 29\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 59,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"nunito-font font-black text-4xl\",\n                    children: \"Dashboard\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 71,\n                    columnNumber: 25\n                }, this),\n                selectedStore ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardStoreContent, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 78,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardMainContent, {}, void 0, false, {\n                    fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                    lineNumber: 80,\n                    columnNumber: 25\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n}\n_s1(Dashboard, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c1 = Dashboard;\nfunction DashboardNavBar() {\n    _s2();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex grow my-14 h-14 space-x-4 flex-shrink-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex grow\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: 'Landing Page',\n                bgColor: 'white',\n                textColor: 'mainBlack',\n                link: '/'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NavButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                text: 'Get Started',\n                bgColor: 'mainBlack',\n                textColor: 'white',\n                shadow: 'high',\n                link: '/getstarted'\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 92,\n        columnNumber: 9\n    }, this));\n}\n_s2(DashboardNavBar, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c2 = DashboardNavBar;\nfunction DashboardMainContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"nunito-font text-2xl font-black\",\n                children: \"My Stores\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StoresList, {\n                stores: (_testData_testStoresData__WEBPACK_IMPORTED_MODULE_6___default())\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, this));\n}\n_c3 = DashboardMainContent;\nfunction StoresList(param) {\n    var stores = param.stores;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-8 overflow-x-scroll bg-blue-500\",\n        children: stores.map(function(store) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SmallStoreDisplay, {\n                logoUri: store.logoUri,\n                subdomain: store.subdomain,\n                name: store.name,\n                owner: store.owner,\n                colourInHex: store.colourInHex\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 118,\n                columnNumber: 25\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 114,\n        columnNumber: 9\n    }, this));\n}\n_c4 = StoresList;\nfunction SmallStoreDisplay(param) {\n    var logoUri = param.logoUri, subdomain = param.subdomain, name = param.name, owner = param.owner, colourInHex = param.colourInHex;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://cloudflare-ipfs.com/ipfs/\".concat(logoUri),\n                className: \"flex aspect-square flex-shrink-0 rounded-xl\"\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 129,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n                lineNumber: 130,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 128,\n        columnNumber: 9\n    }, this));\n}\n_c5 = SmallStoreDisplay;\nfunction DashboardStoreContent() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"store\"\n    }, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 139,\n        columnNumber: 9\n    }, this));\n}\n_c6 = DashboardStoreContent;\nfunction DashboardTabs() {}\n_c7 = DashboardTabs;\nfunction EditStoreMetadata() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/joshkokatnur/Desktop/Martazo/frontend/pages/dashboard.js\",\n        lineNumber: 151,\n        columnNumber: 9\n    }, this));\n}\n_c8 = EditStoreMetadata;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"DashboardLoginHandler\");\n$RefreshReg$(_c1, \"Dashboard\");\n$RefreshReg$(_c2, \"DashboardNavBar\");\n$RefreshReg$(_c3, \"DashboardMainContent\");\n$RefreshReg$(_c4, \"StoresList\");\n$RefreshReg$(_c5, \"SmallStoreDisplay\");\n$RefreshReg$(_c6, \"DashboardStoreContent\");\n$RefreshReg$(_c7, \"DashboardTabs\");\n$RefreshReg$(_c8, \"EditStoreMetadata\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBcEIsS0FBZ0QsQ0FBckNBLFNBQVMsRUFBRUMsSUFBSSxHQUExQixLQUFnRCxDQUExQkEsSUFBSSxFQUFFQyxLQUFLLEdBQWpDLEtBQWdELENBQXBCQSxLQUFLLEVBQUVDLFdBQVcsR0FBOUMsS0FBZ0QsQ0FBYkEsV0FBVztJQUNyRSxNQUFNLDZFQUNEekIsQ0FBRztRQUFDRyxTQUFTLEVBQUMsQ0FBRTs7d0ZBQ1p1QixDQUFHO2dCQUFDQyxHQUFHLEVBQUcsQ0FBaUMsbUNBQVUsT0FBUk4sT0FBTztnQkFBSWxCLFNBQVMsRUFBQyxDQUE2Qzs7Ozs7O3dGQUMvR0ksQ0FBQzswQkFDR2dCLElBQUk7Ozs7Ozs7Ozs7OztBQUlyQixDQUFDO01BVFFILGlCQUFpQjtTQVdqQlgscUJBQXFCLEdBQUcsQ0FBQztJQUM5QixNQUFNLDZFQUNEVCxDQUFHO2tCQUFDLENBRUw7Ozs7OztBQUVSLENBQUM7TUFOUVMscUJBQXFCO1NBUXJCbUIsYUFBYSxHQUFHLENBQUMsQ0FFekI7TUFGUUEsYUFBYTtTQUliQyxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLE1BQU0sNkVBQ0Q3QixDQUFHOzs7OztBQUlaLENBQUM7TUFOUTZCLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kYXNoYm9hcmQuanM/MGU1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFdhbGxldENvbnRleHQgfSBmcm9tIFwiLi4vdXRpbHMvV2FsbGV0U2Vzc2lvblByb3ZpZGVyXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2dvXCI7XG5pbXBvcnQgTmF2QnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJ1dHRvblwiO1xuaW1wb3J0IHsgSGlPdXRsaW5lQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5pbXBvcnQgdGVzdFN0b3Jlc0RhdGEgZnJvbSBcIi4uL3Rlc3REYXRhL3Rlc3RTdG9yZXNEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZExvZ2luSGFuZGxlcigpIHtcblxuICAgIGNvbnN0IHdhbGxldFNlc3Npb24gPSB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgZnVuY3Rpb24gQ2hlY2tMb2dpbigpIHtcbiAgICAgICAgaWYgKCF3YWxsZXRTZXNzaW9uLmlzTG9hZGVkKSB7IHJldHVybiB9XG5cbiAgICAgICAgd2hpbGUgKCF3YWxsZXRTZXNzaW9uLmlzTG9hZGVkKSB7IH1cblxuICAgICAgICBpZiAod2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzKSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBDaGVja0xvZ2luKClcbiAgICB9LCBbd2FsbGV0U2Vzc2lvbi53YWxsZXRBZGRyZXNzXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIENoZWNrTG9naW4oKVxuICAgIH0sIFt3YWxsZXRTZXNzaW9uLmlzTG9hZGVkXSlcblxuICAgIGlmICh3YWxsZXRTZXNzaW9uLndhbGxldEFkZHJlc3MpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEYXNoYm9hcmQgLz5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIExvYWRpbmcgLiAuIC5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICBjb25zdCBbc2VsZWN0ZWRTdG9yZSwgc2V0U2VsZWN0ZWRTdG9yZV0gPSB1c2VTdGF0ZSgpOyAgLy97IHN0b3JlTmFtZTogJ015IE5ldyBTdG9yZScgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYmctYmFja2dyb3VuZCBoLXNjcmVlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctWzkwcmVtXSBiZy1iYWNrZ3JvdW5kIHB4LTE0XCI+XG4gICAgICAgICAgICAgICAgPERhc2hib2FyZE5hdkJhciAvPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTdG9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRTdG9yZSgpfSBjbGFzc05hbWU9XCJudW5pdG8tZm9udCBmb250LWJsYWNrIHRleHQtNHhsIHRleHQtbWFpbkJsYWNrLzUwIGhvdmVyOnRleHQtbWFpbkJsYWNrIHRyYW5zaXRpb24tYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaU91dGxpbmVDaGV2cm9uUmlnaHQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVuaXRvLWZvbnQgZm9udC1ibGFjayB0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTdG9yZS5zdG9yZU5hbWUgPyBzZWxlY3RlZFN0b3JlLnN0b3JlTmFtZSA6ICdVbm5hbWVkIFN0b3JlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bml0by1mb250IGZvbnQtYmxhY2sgdGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkU3RvcmVDb250ZW50IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGFzaGJvYXJkTWFpbkNvbnRlbnQgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmROYXZCYXIoKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBncm93IG15LTE0IGgtMTQgc3BhY2UteC00IGZsZXgtc2hyaW5rLTBcIj5cbiAgICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3Jvd1wiIC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9eydMYW5kaW5nIFBhZ2UnfSBiZ0NvbG9yPXsnd2hpdGUnfSB0ZXh0Q29sb3I9eydtYWluQmxhY2snfSBsaW5rPXsnLyd9IC8+XG4gICAgICAgICAgICA8TmF2QnV0dG9uIHRleHQ9eydHZXQgU3RhcnRlZCd9IGJnQ29sb3I9eydtYWluQmxhY2snfSB0ZXh0Q29sb3I9eyd3aGl0ZSd9IHNoYWRvdz17J2hpZ2gnfSBsaW5rPXsnL2dldHN0YXJ0ZWQnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZE1haW5Db250ZW50KCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW5pdG8tZm9udCB0ZXh0LTJ4bCBmb250LWJsYWNrXCI+XG4gICAgICAgICAgICAgICAgTXkgU3RvcmVzXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8U3RvcmVzTGlzdCBzdG9yZXM9e3Rlc3RTdG9yZXNEYXRhfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFN0b3Jlc0xpc3QoeyBzdG9yZXMgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTggb3ZlcmZsb3cteC1zY3JvbGwgYmctYmx1ZS01MDBcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdG9yZXMubWFwKHN0b3JlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbWFsbFN0b3JlRGlzcGxheSBsb2dvVXJpPXtzdG9yZS5sb2dvVXJpfSBzdWJkb21haW49e3N0b3JlLnN1YmRvbWFpbn0gbmFtZT17c3RvcmUubmFtZX0gb3duZXI9e3N0b3JlLm93bmVyfSBjb2xvdXJJbkhleD17c3RvcmUuY29sb3VySW5IZXh9IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIFNtYWxsU3RvcmVEaXNwbGF5KHsgbG9nb1VyaSwgc3ViZG9tYWluLCBuYW1lLCBvd25lciwgY29sb3VySW5IZXggfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vY2xvdWRmbGFyZS1pcGZzLmNvbS9pcGZzLyR7bG9nb1VyaX1gfSBjbGFzc05hbWU9XCJmbGV4IGFzcGVjdC1zcXVhcmUgZmxleC1zaHJpbmstMCByb3VuZGVkLXhsXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmZ1bmN0aW9uIERhc2hib2FyZFN0b3JlQ29udGVudCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5mdW5jdGlvbiBEYXNoYm9hcmRUYWJzKCkge1xuXG59XG5cbmZ1bmN0aW9uIEVkaXRTdG9yZU1ldGFkYXRhKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJXYWxsZXRDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTG9nbyIsIk5hdkJ1dHRvbiIsIkhpT3V0bGluZUNoZXZyb25SaWdodCIsInRlc3RTdG9yZXNEYXRhIiwiRGFzaGJvYXJkTG9naW5IYW5kbGVyIiwiQ2hlY2tMb2dpbiIsIndhbGxldFNlc3Npb24iLCJpc0xvYWRlZCIsIndhbGxldEFkZHJlc3MiLCJyb3V0ZXIiLCJwdXNoIiwiRGFzaGJvYXJkIiwiZGl2Iiwic2VsZWN0ZWRTdG9yZSIsInNldFNlbGVjdGVkU3RvcmUiLCJjbGFzc05hbWUiLCJEYXNoYm9hcmROYXZCYXIiLCJidXR0b24iLCJvbkNsaWNrIiwicCIsInN0b3JlTmFtZSIsIkRhc2hib2FyZFN0b3JlQ29udGVudCIsIkRhc2hib2FyZE1haW5Db250ZW50IiwidGV4dCIsImJnQ29sb3IiLCJ0ZXh0Q29sb3IiLCJsaW5rIiwic2hhZG93IiwiU3RvcmVzTGlzdCIsInN0b3JlcyIsIm1hcCIsInN0b3JlIiwiU21hbGxTdG9yZURpc3BsYXkiLCJsb2dvVXJpIiwic3ViZG9tYWluIiwibmFtZSIsIm93bmVyIiwiY29sb3VySW5IZXgiLCJpbWciLCJzcmMiLCJEYXNoYm9hcmRUYWJzIiwiRWRpdFN0b3JlTWV0YWRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

});