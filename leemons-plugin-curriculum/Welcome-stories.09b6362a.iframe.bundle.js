"use strict";(self.webpackChunkleemons_plugin_curriculum_frontend_react=self.webpackChunkleemons_plugin_curriculum_frontend_react||[]).push([[642],{"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./.storybook/Welcome/Welcome.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Welcome:()=>Welcome_stories_Welcome,__namedExportsOrder:()=>Welcome_stories_namedExportsOrder,default:()=>Welcome_stories});__webpack_require__("../../../node_modules/react/index.js");var Title=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Title/Title.js");const package_namespaceObject_i8="1.0.0";var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const Welcome=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Title.Dx,{order:1,sx:_ref=>{let{colors}=_ref;return{color:colors.interactive01}},children:"Curriculum - Leemons Organisms"}),(0,jsx_runtime.jsx)(Title.Dx,{order:2,sx:_ref2=>{let{colors}=_ref2;return{color:colors.text02}},children:`React v${package_namespaceObject_i8}`})]});Welcome.displayName="Welcome";Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome"};var lib=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"welcome",children:"Welcome"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Help us improve the documentation by providing feedback, asking questions on\nSlack, or updating the mdx files file on\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"}),"."]})]})}const Welcome_stories={title:" Getting Started",component:Welcome,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}},Welcome_stories_Welcome=()=>(0,jsx_runtime.jsx)(Welcome,{});Welcome_stories_Welcome.displayName="Welcome",Welcome_stories_Welcome.parameters={...Welcome_stories_Welcome.parameters,docs:{...Welcome_stories_Welcome.parameters?.docs,source:{originalSource:"() => <Intro />",...Welcome_stories_Welcome.parameters?.docs?.source}}};const Welcome_stories_namedExportsOrder=["Welcome"];Welcome_stories_Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome"}}}]);