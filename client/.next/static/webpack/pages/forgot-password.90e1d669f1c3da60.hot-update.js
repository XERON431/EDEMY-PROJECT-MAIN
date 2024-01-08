"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/forgot-password",{

/***/ "./pages/forgot-password.js":
/*!**********************************!*\
  !*** ./pages/forgot-password.js ***!
  \**********************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ForgotPassword = ()=>{\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Changed initial state to boolean\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Changed initial state to boolean\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // context\n    const { state: { user } } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.Context); // Corrected useContext usage\n    // router\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // redirect if user is logged in\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user != null) router.push(\"/\");\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            setLoading(true);\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/forgot-password\", {\n                email\n            });\n            setSuccess(true);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(\"Check your email for the secret code\");\n        } catch (err) {\n            setLoading(false);\n            (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(err.response.data);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotron text-center bg-primary square\",\n                children: \"Forgot Password\"\n            }, void 0, false, {\n                fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Enter email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    className: \"form-control mb-4 p-4\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    placeholder: \"Enter email\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    className: \"form-control mb-4 p-4\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    placeholder: \"Enter email\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-primary btn-block p-2\",\n                            disabled: loading || !email || success,\n                            children: loading ? \"Loading...\" : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\projects\\\\Learnandcode-main\\\\Learnandcode-main\\\\client\\\\pages\\\\forgot-password.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ForgotPassword, \"HzcTK8TB5XCj/QOMH9Cx6BFB4B4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = ForgotPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPassword);\nvar _c;\n$RefreshReg$(_c, \"ForgotPassword\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdEO0FBQzlCO0FBQ2E7QUFDRjtBQUNHO0FBRXhDLE1BQU1PLGlCQUFpQjs7SUFDbkIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQyxPQUFPLG1DQUFtQztJQUNqRixNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUMsUUFBUSxtQ0FBbUM7SUFDbEYsTUFBTSxDQUFDYyxNQUFNQyxRQUFRLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2dCLGFBQWFDLGVBQWUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQy9DLFVBQVU7SUFDVixNQUFNLEVBQUVrQixPQUFPLEVBQUVDLElBQUksRUFBRSxFQUFFLEdBQUdsQixpREFBVUEsQ0FBQ0ksNkNBQU9BLEdBQUcsNkJBQTZCO0lBQzlFLFNBQVM7SUFDVCxNQUFNZSxTQUFTZCxzREFBU0E7SUFDeEIsZ0NBQWdDO0lBQ2hDSixnREFBU0EsQ0FBQztRQUNOLElBQUlpQixRQUFRLE1BQU1DLE9BQU9DLElBQUksQ0FBQztJQUNsQyxHQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDQVgsV0FBVztZQUNYLE1BQU0sRUFBRVksSUFBSSxFQUFFLEdBQUcsTUFBTXRCLGtEQUFVLENBQUMsd0JBQXdCO2dCQUFFSztZQUFNO1lBQ2xFRyxXQUFXO1lBQ1hQLHFEQUFLQSxDQUFDO1FBQ1YsRUFBRSxPQUFPdUIsS0FBSztZQUNWZCxXQUFXO1lBQ1hULHFEQUFLQSxDQUFDdUIsSUFBSUMsUUFBUSxDQUFDSCxJQUFJO1FBQzNCO0lBQ0o7SUFFQSxxQkFDSTs7MEJBQ0ksOERBQUNJO2dCQUFHQyxXQUFVOzBCQUEwQzs7Ozs7OzBCQUd4RCw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1gsNEVBQUNFO29CQUFLQyxVQUFVWDs7c0NBQ1osOERBQUNZOzRCQUNHQyxNQUFLOzRCQUNMTCxXQUFVOzRCQUNWTSxPQUFPNUI7NEJBQ1A2QixVQUFVLENBQUNkLElBQU1kLFNBQVNjLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDeENHLGFBQVk7NEJBQ1pDLFFBQVE7Ozs7Ozt3QkFHUjlCLHlCQUFXOzs4Q0FDWCw4REFBQ3dCO29DQUNEQyxNQUFLO29DQUNMTCxXQUFVO29DQUNWTSxPQUFPNUI7b0NBQ1A2QixVQUFVLENBQUNkLElBQU1kLFNBQVNjLEVBQUVlLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDeENHLGFBQVk7b0NBQ1pDLFFBQVE7Ozs7Ozs4Q0FFWiw4REFBQ047b0NBQ0dDLE1BQUs7b0NBQ0xMLFdBQVU7b0NBQ1ZNLE9BQU81QjtvQ0FDUDZCLFVBQVUsQ0FBQ2QsSUFBTWQsU0FBU2MsRUFBRWUsTUFBTSxDQUFDRixLQUFLO29DQUN4Q0csYUFBWTtvQ0FDWkMsUUFBUTs7Ozs7Ozs7c0NBSVosOERBQUNDOzs7OztzQ0FDRCw4REFBQ0M7NEJBQ0dQLE1BQUs7NEJBQ0xMLFdBQVU7NEJBQ1ZhLFVBQVUvQixXQUFXLENBQUNKLFNBQVNFO3NDQUU5QkUsVUFBVSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxEO0dBM0VNTDs7UUFTYUQsa0RBQVNBOzs7S0FUdEJDO0FBNkVOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC5qcz8xYjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xyXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBGb3Jnb3RQYXNzd29yZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gQ2hhbmdlZCBpbml0aWFsIHN0YXRlIHRvIGJvb2xlYW5cclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gQ2hhbmdlZCBpbml0aWFsIHN0YXRlIHRvIGJvb2xlYW5cclxuICAgIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIC8vIGNvbnRleHRcclxuICAgIGNvbnN0IHsgc3RhdGU6IHsgdXNlciB9IH0gPSB1c2VDb250ZXh0KENvbnRleHQpOyAvLyBDb3JyZWN0ZWQgdXNlQ29udGV4dCB1c2FnZVxyXG4gICAgLy8gcm91dGVyXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIC8vIHJlZGlyZWN0IGlmIHVzZXIgaXMgbG9nZ2VkIGluXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyICE9IG51bGwpIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2ZvcmdvdC1wYXNzd29yZFwiLCB7IGVtYWlsIH0pO1xyXG4gICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xyXG4gICAgICAgICAgICB0b2FzdChcIkNoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBzZWNyZXQgY29kZVwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHRvYXN0KGVyci5yZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbiB0ZXh0LWNlbnRlciBiZy1wcmltYXJ5IHNxdWFyZVwiPlxyXG4gICAgICAgICAgICAgICAgRm9yZ290IFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTQgcC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2sgcC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgIWVtYWlsIHx8IHN1Y2Nlc3N9IC8vIERpc2FibGVkIHdoZW4gc3VjY2VzcyBpcyB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCJTdWJtaXRcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQ7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInRvYXN0IiwiQ29udGV4dCIsInVzZVJvdXRlciIsIkZvcmdvdFBhc3N3b3JkIiwiZW1haWwiLCJzZXRFbWFpbCIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb2RlIiwic2V0Q29kZSIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJzdGF0ZSIsInVzZXIiLCJyb3V0ZXIiLCJwdXNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJlcnIiLCJyZXNwb25zZSIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJiciIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/forgot-password.js\n"));

/***/ })

});