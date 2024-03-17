"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/ProjectsSection.jsx":
/*!************************************************!*\
  !*** ./src/app/components/ProjectsSection.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"RockyMountain Waterways\",\n        description: \"A digital guide to explore the diverse water bodies in Colorado.\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/rmww-project\",\n        previewUrl: \"https://rockymountainwaterways-project.onrender.com/\"\n    },\n    {\n        id: 2,\n        title: \"Mastermind Game\",\n        description: \"A digital Mastermind game where you challenge your code-breaking skills to uncover the hidden color sequence.\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\",\n            \"Mobile\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/mastermind-project\",\n        previewUrl: \"https://karolbgm.github.io/mastermind-project/\"\n    },\n    {\n        id: 3,\n        title: \"DevPort\",\n        description: \"A full stack app designed to provide community and a showplace for software developers.\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\",\n            \"Mobile\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/Project_3_GA\",\n        previewUrl: \"https://socdev-frontend-c2e6c90f6b00.herokuapp.com/home\"\n    },\n    {\n        id: 4,\n        title: \"SubHub\",\n        description: \"A subscription manager app designed to help users efficiently manage their various subscriptions.\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/capstone-subhub-final\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztZQUFPO1NBQVM7UUFDN0JDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztZQUFPO1NBQVM7UUFDN0JDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtDQUNEO0FBRUQsTUFBTUMsa0JBQWtCOztJQUN0QixNQUFNLENBQUNILEtBQUtJLE9BQU8sR0FBR2YsK0NBQVFBLENBQUM7SUFDL0IsTUFBTWdCLE1BQU1mLDZDQUFNQSxDQUFDO0lBQ25CLE1BQU1nQixXQUFXWix3REFBU0EsQ0FBQ1csS0FBSztRQUFFRSxNQUFNO0lBQUs7SUFFN0MsTUFBTUMsa0JBQWtCLENBQUNDO1FBQ3ZCTCxPQUFPSztJQUNUO0lBRUEsTUFBTUMsbUJBQW1CZixhQUFhZ0IsTUFBTSxDQUFDLENBQUNDLFVBQzVDQSxRQUFRWixHQUFHLENBQUNhLFFBQVEsQ0FBQ2I7SUFHdkIsTUFBTWMsZUFBZTtRQUNuQkMsU0FBUztZQUFFQyxHQUFHO1lBQUlDLFNBQVM7UUFBRTtRQUM3QkMsU0FBUztZQUFFRixHQUFHO1lBQUdDLFNBQVM7UUFBRTtJQUM5QjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFRdkIsSUFBRzs7MEJBQ1YsOERBQUN3QjtnQkFBR0MsV0FBVTswQkFBK0Q7Ozs7OzswQkFHN0UsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQzdCLG1EQUFVQTt3QkFDVCtCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNSLG1EQUFVQTt3QkFDVCtCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7OztrQ0FFdEIsOERBQUNSLG1EQUFVQTt3QkFDVCtCLFNBQVNmO3dCQUNUZ0IsTUFBSzt3QkFDTEMsWUFBWXpCLFFBQVE7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUMwQjtnQkFBR3JCLEtBQUtBO2dCQUFLZ0IsV0FBVTswQkFDckJYLGlCQUFpQmlCLEdBQUcsQ0FBQyxDQUFDZixTQUFTZ0Isc0JBQzlCLDhEQUFDbkMsaURBQU1BLENBQUNvQyxFQUFFO3dCQUVSQyxVQUFVaEI7d0JBQ1ZDLFNBQVE7d0JBQ1JHLFNBQVNaLFdBQVcsWUFBWTt3QkFDaEN5QixZQUFZOzRCQUFFQyxVQUFVOzRCQUFLQyxPQUFPTCxRQUFRO3dCQUFJO2tDQUVoRCw0RUFBQ3JDLG9EQUFXQTs0QkFFVk0sT0FBT2UsUUFBUWYsS0FBSzs0QkFDcEJDLGFBQWFjLFFBQVFkLFdBQVc7NEJBQ2hDb0MsUUFBUXRCLFFBQVFiLEtBQUs7NEJBQ3JCRSxRQUFRVyxRQUFRWCxNQUFNOzRCQUN0QkMsWUFBWVUsUUFBUVYsVUFBVTsyQkFMekJVLFFBQVFoQixFQUFFOzs7Ozt1QkFQWmdDOzs7Ozs7Ozs7Ozs7Ozs7O0FBbUJqQjtHQTlETXpCOztRQUdhVCxvREFBU0E7OztLQUh0QlM7QUFnRU4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1Byb2plY3RzU2VjdGlvbi5qc3g/MzcwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcbmltcG9ydCBQcm9qZWN0VGFnIGZyb20gXCIuL1Byb2plY3RUYWdcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlSW5WaWV3IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgcHJvamVjdHNEYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6IFwiUm9ja3lNb3VudGFpbiBXYXRlcndheXNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRpZ2l0YWwgZ3VpZGUgdG8gZXhwbG9yZSB0aGUgZGl2ZXJzZSB3YXRlciBib2RpZXMgaW4gQ29sb3JhZG8uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20va2Fyb2xiZ20vcm13dy1wcm9qZWN0XCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL3JvY2t5bW91bnRhaW53YXRlcndheXMtcHJvamVjdC5vbnJlbmRlci5jb20vXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJNYXN0ZXJtaW5kIEdhbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGRpZ2l0YWwgTWFzdGVybWluZCBnYW1lIHdoZXJlIHlvdSBjaGFsbGVuZ2UgeW91ciBjb2RlLWJyZWFraW5nIHNraWxscyB0byB1bmNvdmVyIHRoZSBoaWRkZW4gY29sb3Igc2VxdWVuY2UuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8yLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCIsIFwiTW9iaWxlXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20va2Fyb2xiZ20vbWFzdGVybWluZC1wcm9qZWN0XCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL2thcm9sYmdtLmdpdGh1Yi5pby9tYXN0ZXJtaW5kLXByb2plY3QvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJEZXZQb3J0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBmdWxsIHN0YWNrIGFwcCBkZXNpZ25lZCB0byBwcm92aWRlIGNvbW11bml0eSBhbmQgYSBzaG93cGxhY2UgZm9yIHNvZnR3YXJlIGRldmVsb3BlcnMuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8zLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCIsIFwiTW9iaWxlXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20va2Fyb2xiZ20vUHJvamVjdF8zX0dBXCIsXG4gICAgcHJldmlld1VybDogXCJodHRwczovL3NvY2Rldi1mcm9udGVuZC1jMmU2YzkwZjZiMDAuaGVyb2t1YXBwLmNvbS9ob21lXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJTdWJIdWJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIHN1YnNjcmlwdGlvbiBtYW5hZ2VyIGFwcCBkZXNpZ25lZCB0byBoZWxwIHVzZXJzIGVmZmljaWVudGx5IG1hbmFnZSB0aGVpciB2YXJpb3VzIHN1YnNjcmlwdGlvbnMuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy80LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCJodHRwczovL2dpdGh1Yi5jb20va2Fyb2xiZ20vY2Fwc3RvbmUtc3ViaHViLWZpbmFsXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBQcm9qZWN0c1NlY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBpc0luVmlldyA9IHVzZUluVmlldyhyZWYsIHsgb25jZTogdHJ1ZSB9KTtcblxuICBjb25zdCBoYW5kbGVUYWdDaGFuZ2UgPSAobmV3VGFnKSA9PiB7XG4gICAgc2V0VGFnKG5ld1RhZyk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgcHJvamVjdC50YWcuaW5jbHVkZXModGFnKVxuICApO1xuXG4gIGNvbnN0IGNhcmRWYXJpYW50cyA9IHtcbiAgICBpbml0aWFsOiB7IHk6IDUwLCBvcGFjaXR5OiAwIH0sXG4gICAgYW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInByb2plY3RzXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi04IG1kOm1iLTEyXCI+XG4gICAgICAgIE15IFByb2plY3RzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGdhcC0yIHB5LTZcIj5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIkFsbFwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIkFsbFwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiV2ViXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiV2ViXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJNb2JpbGVcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJNb2JpbGVcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIHJlZj17cmVmfSBjbGFzc05hbWU9XCJncmlkIG1kOmdyaWQtY29scy0zIGdhcC04IG1kOmdhcC0xMlwiPlxuICAgICAgICB7ZmlsdGVyZWRQcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICBhbmltYXRlPXtpc0luVmlldyA/IFwiYW5pbWF0ZVwiIDogXCJpbml0aWFsXCJ9XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMsIGRlbGF5OiBpbmRleCAqIDAuNCB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0LnRpdGxlfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgaW1nVXJsPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxuICAgICAgICAgICAgICBwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RUYWciLCJtb3Rpb24iLCJ1c2VJblZpZXciLCJwcm9qZWN0c0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZyIsImdpdFVybCIsInByZXZpZXdVcmwiLCJQcm9qZWN0c1NlY3Rpb24iLCJzZXRUYWciLCJyZWYiLCJpc0luVmlldyIsIm9uY2UiLCJoYW5kbGVUYWdDaGFuZ2UiLCJuZXdUYWciLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwiY2FyZFZhcmlhbnRzIiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInNlY3Rpb24iLCJoMiIsImNsYXNzTmFtZSIsImRpdiIsIm9uQ2xpY2siLCJuYW1lIiwiaXNTZWxlY3RlZCIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJpbWdVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});