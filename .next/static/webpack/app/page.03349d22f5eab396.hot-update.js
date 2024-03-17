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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-in-view.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"RockyMountain Waterways\",\n        description: \"Project 1 description\",\n        image: \"/images/projects/1.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Potography Portfolio Website\",\n        description: \"Project 2 description\",\n        image: \"/images/projects/2.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"E-commerce Application\",\n        description: \"Project 3 description\",\n        image: \"/images/projects/3.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 4,\n        title: \"Food Ordering Application\",\n        description: \"Project 4 description\",\n        image: \"/images/projects/4.png\",\n        tag: [\n            \"All\",\n            \"Mobile\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \"React Firebase Template\",\n        description: \"Authentication and CRUD operations\",\n        image: \"/images/projects/5.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 6,\n        title: \"Full-stack Roadmap\",\n        description: \"Project 5 description\",\n        image: \"/images/projects/6.png\",\n        tag: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectsSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView)(ref, {\n        once: true\n    });\n    const handleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>project.tag.includes(tag));\n    const cardVariants = {\n        initial: {\n            y: 50,\n            opacity: 0\n        },\n        animate: {\n            y: 0,\n            opacity: 1\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        id: \"projects\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: handleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                ref: ref,\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: cardVariants,\n                        initial: \"initial\",\n                        animate: isInView ? \"animate\" : \"initial\",\n                        transition: {\n                            duration: 0.3,\n                            delay: index * 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            title: project.title,\n                            description: project.description,\n                            imgUrl: project.image,\n                            gitUrl: project.gitUrl,\n                            previewUrl: project.previewUrl\n                        }, project.id, false, {\n                            fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karol/sei-821/projects/portfolio/src/app/components/ProjectsSection.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsSection, \"ewpVNcDKztYQKj1IVUkFVZNx3ec=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = ProjectsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDUjtBQUNGO0FBQ1k7QUFFbEQsTUFBTU8sZUFBZTtJQUNuQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQU07UUFDbkJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxPQUFPO1FBQ1BDLEtBQUs7WUFBQztZQUFPO1NBQVM7UUFDdEJDLFFBQVE7UUFDUkMsWUFBWTtJQUNkO0lBQ0E7UUFDRU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsT0FBTztRQUNQQyxLQUFLO1lBQUM7WUFBTztTQUFNO1FBQ25CQyxRQUFRO1FBQ1JDLFlBQVk7SUFDZDtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLE9BQU87UUFDUEMsS0FBSztZQUFDO1lBQU87U0FBTTtRQUNuQkMsUUFBUTtRQUNSQyxZQUFZO0lBQ2Q7Q0FDRDtBQUVELE1BQU1DLGtCQUFrQjs7SUFDdEIsTUFBTSxDQUFDSCxLQUFLSSxPQUFPLEdBQUdmLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU1nQixNQUFNZiw2Q0FBTUEsQ0FBQztJQUNuQixNQUFNZ0IsV0FBV1osd0RBQVNBLENBQUNXLEtBQUs7UUFBRUUsTUFBTTtJQUFLO0lBRTdDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkwsT0FBT0s7SUFDVDtJQUVBLE1BQU1DLG1CQUFtQmYsYUFBYWdCLE1BQU0sQ0FBQyxDQUFDQyxVQUM1Q0EsUUFBUVosR0FBRyxDQUFDYSxRQUFRLENBQUNiO0lBR3ZCLE1BQU1jLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsR0FBRztZQUFJQyxTQUFTO1FBQUU7UUFDN0JDLFNBQVM7WUFBRUYsR0FBRztZQUFHQyxTQUFTO1FBQUU7SUFDOUI7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUXZCLElBQUc7OzBCQUNWLDhEQUFDd0I7Z0JBQUdDLFdBQVU7MEJBQStEOzs7Ozs7MEJBRzdFLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUM3QixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7a0NBRXRCLDhEQUFDUixtREFBVUE7d0JBQ1QrQixTQUFTZjt3QkFDVGdCLE1BQUs7d0JBQ0xDLFlBQVl6QixRQUFROzs7Ozs7Ozs7Ozs7MEJBR3hCLDhEQUFDMEI7Z0JBQUdyQixLQUFLQTtnQkFBS2dCLFdBQVU7MEJBQ3JCWCxpQkFBaUJpQixHQUFHLENBQUMsQ0FBQ2YsU0FBU2dCLHNCQUM5Qiw4REFBQ25DLGlEQUFNQSxDQUFDb0MsRUFBRTt3QkFFUkMsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSRyxTQUFTWixXQUFXLFlBQVk7d0JBQ2hDeUIsWUFBWTs0QkFBRUMsVUFBVTs0QkFBS0MsT0FBT0wsUUFBUTt3QkFBSTtrQ0FFaEQsNEVBQUNyQyxvREFBV0E7NEJBRVZNLE9BQU9lLFFBQVFmLEtBQUs7NEJBQ3BCQyxhQUFhYyxRQUFRZCxXQUFXOzRCQUNoQ29DLFFBQVF0QixRQUFRYixLQUFLOzRCQUNyQkUsUUFBUVcsUUFBUVgsTUFBTTs0QkFDdEJDLFlBQVlVLFFBQVFWLFVBQVU7MkJBTHpCVSxRQUFRaEIsRUFBRTs7Ozs7dUJBUFpnQzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CakI7R0E5RE16Qjs7UUFHYVQsb0RBQVNBOzs7S0FIdEJTO0FBZ0VOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0c1NlY3Rpb24uanN4PzM3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2plY3RDYXJkIGZyb20gXCIuL1Byb2plY3RDYXJkXCI7XG5pbXBvcnQgUHJvamVjdFRhZyBmcm9tIFwiLi9Qcm9qZWN0VGFnXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUluVmlldyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IHByb2plY3RzRGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIlJvY2t5TW91bnRhaW4gV2F0ZXJ3YXlzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCAxIGRlc2NyaXB0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8xLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCIvXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogXCJQb3RvZ3JhcGh5IFBvcnRmb2xpbyBXZWJzaXRlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCAyIGRlc2NyaXB0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8yLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCIvXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJFLWNvbW1lcmNlIEFwcGxpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCAzIGRlc2NyaXB0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy8zLnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiV2ViXCJdLFxuICAgIGdpdFVybDogXCIvXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJGb29kIE9yZGVyaW5nIEFwcGxpY2F0aW9uXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUHJvamVjdCA0IGRlc2NyaXB0aW9uXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9wcm9qZWN0cy80LnBuZ1wiLFxuICAgIHRhZzogW1wiQWxsXCIsIFwiTW9iaWxlXCJdLFxuICAgIGdpdFVybDogXCIvXCIsXG4gICAgcHJldmlld1VybDogXCIvXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICB0aXRsZTogXCJSZWFjdCBGaXJlYmFzZSBUZW1wbGF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkF1dGhlbnRpY2F0aW9uIGFuZCBDUlVEIG9wZXJhdGlvbnNcIixcbiAgICBpbWFnZTogXCIvaW1hZ2VzL3Byb2plY3RzLzUucG5nXCIsXG4gICAgdGFnOiBbXCJBbGxcIiwgXCJXZWJcIl0sXG4gICAgZ2l0VXJsOiBcIi9cIixcbiAgICBwcmV2aWV3VXJsOiBcIi9cIixcbiAgfSxcbiAge1xuICAgIGlkOiA2LFxuICAgIHRpdGxlOiBcIkZ1bGwtc3RhY2sgUm9hZG1hcFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlByb2plY3QgNSBkZXNjcmlwdGlvblwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvcHJvamVjdHMvNi5wbmdcIixcbiAgICB0YWc6IFtcIkFsbFwiLCBcIldlYlwiXSxcbiAgICBnaXRVcmw6IFwiL1wiLFxuICAgIHByZXZpZXdVcmw6IFwiL1wiLFxuICB9LFxuXTtcblxuY29uc3QgUHJvamVjdHNTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoXCJBbGxcIik7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaXNJblZpZXcgPSB1c2VJblZpZXcocmVmLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgY29uc3QgaGFuZGxlVGFnQ2hhbmdlID0gKG5ld1RhZykgPT4ge1xuICAgIHNldFRhZyhuZXdUYWcpO1xuICB9O1xuXG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0c0RhdGEuZmlsdGVyKChwcm9qZWN0KSA9PlxuICAgIHByb2plY3QudGFnLmluY2x1ZGVzKHRhZylcbiAgKTtcblxuICBjb25zdCBjYXJkVmFyaWFudHMgPSB7XG4gICAgaW5pdGlhbDogeyB5OiA1MCwgb3BhY2l0eTogMCB9LFxuICAgIGFuaW1hdGU6IHsgeTogMCwgb3BhY2l0eTogMSB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJwcm9qZWN0c1wiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG10LTQgbWItOCBtZDptYi0xMlwiPlxuICAgICAgICBNeSBQcm9qZWN0c1xuICAgICAgPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMiBweS02XCI+XG4gICAgICAgIDxQcm9qZWN0VGFnXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlVGFnQ2hhbmdlfVxuICAgICAgICAgIG5hbWU9XCJBbGxcIlxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RUYWdcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWdDaGFuZ2V9XG4gICAgICAgICAgbmFtZT1cIldlYlwiXG4gICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIldlYlwifVxuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFRhZ1xuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRhZ0NoYW5nZX1cbiAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcbiAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTW9iaWxlXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtOCBtZDpnYXAtMTJcIj5cbiAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICB2YXJpYW50cz17Y2FyZFZhcmlhbnRzfVxuICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgYW5pbWF0ZT17aXNJblZpZXcgPyBcImFuaW1hdGVcIiA6IFwiaW5pdGlhbFwifVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zLCBkZWxheTogaW5kZXggKiAwLjQgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UHJvamVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGltZ1VybD17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgZ2l0VXJsPXtwcm9qZWN0LmdpdFVybH1cbiAgICAgICAgICAgICAgcHJldmlld1VybD17cHJvamVjdC5wcmV2aWV3VXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0VGFnIiwibW90aW9uIiwidXNlSW5WaWV3IiwicHJvamVjdHNEYXRhIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWciLCJnaXRVcmwiLCJwcmV2aWV3VXJsIiwiUHJvamVjdHNTZWN0aW9uIiwic2V0VGFnIiwicmVmIiwiaXNJblZpZXciLCJvbmNlIiwiaGFuZGxlVGFnQ2hhbmdlIiwibmV3VGFnIiwiZmlsdGVyZWRQcm9qZWN0cyIsImZpbHRlciIsInByb2plY3QiLCJpbmNsdWRlcyIsImNhcmRWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJzZWN0aW9uIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwibmFtZSIsImlzU2VsZWN0ZWQiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJ2YXJpYW50cyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiaW1nVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectsSection.jsx\n"));

/***/ })

});