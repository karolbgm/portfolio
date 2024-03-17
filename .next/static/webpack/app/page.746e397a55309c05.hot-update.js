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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"RockyMountain Waterways\",\n        description: \"A digital guide to explore the diverse water bodies in Colorado.\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/rmww-project\",\n        previewUrl: \"https://rockymountainwaterways-project.onrender.com/\"\n    },\n    {\n        id: 2,\n        title: \"Mastermind Game\",\n        description: \"A digital Mastermind game where you challenge your code-breaking skills to uncover the hidden color sequence.\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/mastermind-project\",\n        previewUrl: \"https://karolbgm.github.io/mastermind-project/\"\n    },\n    {\n        id: 3,\n        title: \"DevPort\",\n        description: \"A full stack app designed to provide community and a showplace for software developers.\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/Project_3_GA\",\n        previewUrl: \"https://socdev-frontend-c2e6c90f6b00.herokuapp.com/home\"\n    },\n    {\n        id: 4,\n        title: \"SubHub\",\n        description: \"A subscription manager app designed to help users efficiently manage their various subscriptions.\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        gitUrl: \"https://github.com/karolbgm/capstone-subhub-final\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \"React Firebase Template\",\n        description: \"Authentication and CRUD operations\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 6,\n        title: \"Full-stack Roadmap\",\n        description: \"Project 5 description\",\n        image: \"/images/projects/6.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVM7UUFDdEJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixNQUFNZiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNZ0IsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBRTdDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkwsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmYsYUFBYWdCLE1BQU0sQ0FBQyxDQUFDQyxVQUM1Q0EsUUFBUVosR0FBRyxDQUFDYSxRQUFRLENBQUNiO0lBR3ZCLE1BQU1jLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUXZCLElBQUc7OzBCQUNWLDhEQUFDd0I7Z0JBQUdDLFdBQVU7MEJBQStEOzs7Ozs7MEJBRzdFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUM3QixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDMEI7Z0JBQUdyQixLQUFLQTtnQkFBS2dCLFdBQVU7MEJBQ3JCWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2YsU0FBU2dCLHNCQUM5Qiw4REFBQ25DLGlEQUFNQSxDQUFDb0MsRUFBRTt3QkFFUkMsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDeUIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFaEQsNEVBQUNyQyxvREFBV0E7NEJBRVZNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ29DLFFBQVF0QixRQUFRYixLQUFLOzRCQUNyQkUsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7MkJBTHpCVSxRQUFRaEIsRUFBRTs7Ozs7dUJBUFpnQzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakI7R0E5RE16Qjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBZ0VOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIlJvY2t5TW91bnRhaW4gV2F0ZXJ3YXlzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkaWdpdGFsIGd1aWRlIHRvIGV4cGxvcmUgdGhlIGRpdmVyc2Ugd2F0ZXIgYm9kaWVzIGluIENvbG9yYWRvLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMS5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2thcm9sYmdtL3Jtd3ctcHJvamVjdFwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9yb2NreW1vdW50YWlud2F0ZXJ3YXlzLXByb2plY3Qub25yZW5kZXIuY29tL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiTWFzdGVybWluZCBHYW1lXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBkaWdpdGFsIE1hc3Rlcm1pbmQgZ2FtZSB3aGVyZSB5b3UgY2hhbGxlbmdlIHlvdXIgY29kZS1icmVha2luZyBza2lsbHMgdG8gdW5jb3ZlciB0aGUgaGlkZGVuIGNvbG9yIHNlcXVlbmNlLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMi5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2thcm9sYmdtL21hc3Rlcm1pbmQtcHJvamVjdFwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9rYXJvbGJnbS5naXRodWIuaW8vbWFzdGVybWluZC1wcm9qZWN0L1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgdGl0bGU6IFwiRGV2UG9ydFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZnVsbCBzdGFjayBhcHAgZGVzaWduZWQgdG8gcHJvdmlkZSBjb21tdW5pdHkgYW5kIGEgc2hvd3BsYWNlIGZvciBzb2Z0d2FyZSBkZXZlbG9wZXJzLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvMy5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2thcm9sYmdtL1Byb2plY3RfM19HQVwiLFxuICAgIHByZXZpZXdVcmw6IFwiaHR0cHM6Ly9zb2NkZXYtZnJvbnRlbmQtYzJlNmM5MGY2YjAwLmhlcm9rdWFwcC5jb20vaG9tZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IDQsXG4gICAgdGl0bGU6IFwiU3ViSHViXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBzdWJzY3JpcHRpb24gbWFuYWdlciBhcHAgZGVzaWduZWQgdG8gaGVscCB1c2VycyBlZmZpY2llbnRseSBtYW5hZ2UgdGhlaXIgdmFyaW91cyBzdWJzY3JpcHRpb25zLlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNC5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIk1vYmlsZVwiXSxcbiAgICBnaXRVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2thcm9sYmdtL2NhcHN0b25lLXN1Ymh1Yi1maW5hbFwiLFxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxuICB9LFxuICB7XG4gICAgaWQ6IDUsXG4gICAgdGl0bGU6IFwiUmVhY3QgRmlyZWJhc2UgVGVtcGxhdGVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBdXRoZW50aWNhdGlvbiBhbmQgQ1JVRCBvcGVyYXRpb25zXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy81LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCIvXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICB0aXRsZTogXCJGdWxsLXN0YWNrIFJvYWRtYXBcIixcbiAgICBkZXNjcmlwdGlvbjogXCJQcm9qZWN0IDUgZGVzY3JpcHRpb25cIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzYucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcIi9cIixcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbl07XG5cbmNvbnN0IFByb2plY3RzU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKFwiQWxsXCIpO1xuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzSW5WaWV3ID0gdXNlSW5WaWV3KHJlZiwgeyBvbmNlOiB0cnVlIH0pO1xuXG4gIGNvbnN0IGhhbmRsZVRhZ0NoYW5nZSA9IChuZXdUYWcpID0+IHtcbiAgICBzZXRUYWcobmV3VGFnKTtcbiAgfTtcblxuICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHNEYXRhLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICBwcm9qZWN0LnRhZy5pbmNsdWRlcyh0YWcpXG4gICk7XG5cbiAgY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICAgIGluaXRpYWw6IHsgeTogNTAsIG9wYWNpdHk6IDAgfSxcbiAgICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwicHJvamVjdHNcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtdC00IG1iLTggbWQ6bWItMTJcIj5cbiAgICAgICAgTXkgUHJvamVjdHNcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNlwiPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiQWxsXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiQWxsXCJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJXZWJcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJXZWJcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIk1vYmlsZVwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIk1vYmlsZVwifVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImdyaWQgbWQ6Z3JpZC1jb2xzLTMgZ2FwLTggbWQ6Z2FwLTEyXCI+XG4gICAgICAgIHtmaWx0ZXJlZFByb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmxpXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgdmFyaWFudHM9e2NhcmRWYXJpYW50c31cbiAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgIGFuaW1hdGU9e2lzSW5WaWV3ID8gXCJhbmltYXRlXCIgOiBcImluaXRpYWxcIn1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMywgZGVsYXk6IGluZGV4ICogMC40IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBpbWdVcmw9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgIGdpdFVybD17cHJvamVjdC5naXRVcmx9XG4gICAgICAgICAgICAgIHByZXZpZXdVcmw9e3Byb2plY3QucHJldmlld1VybH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1NlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIlByb2plY3RDYXJkIiwiUHJvamVjdFRhZyIsIm1vdGlvbiIsInVzZUluVmlldyIsInByb2plY3RzRGF0YSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidGFnIiwiZ2l0VXJsIiwicHJldmlld1VybCIsIlByb2plY3RzU2VjdGlvbiIsInNldFRhZyIsInJlZiIsImlzSW5WaWV3Iiwib25jZSIsImhhbmRsZVRhZ0NoYW5nZSIsIm5ld1RhZyIsImZpbHRlcmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJjYXJkVmFyaWFudHMiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwic2VjdGlvbiIsImgyIiwiY2xhc3NOYW1lIiwiZGl2Iiwib25DbGljayIsIm5hbWUiLCJpc1NlbGVjdGVkIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwidmFyaWFudHMiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImltZ1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});