"use strict";(self.webpackChunkleemons_plugin_leebrary_frontend_react=self.webpackChunkleemons_plugin_leebrary_frontend_react||[]).push([[2130,7762],{"../../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"../../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/LibraryCardDeadline/LibraryCardDeadline.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js"),_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs"),_LibraryCardDeadline_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/LibraryCardDeadline/LibraryCardDeadline.stories.js");__webpack_require__("./src/components/LibraryCardDeadline/LibraryCardDeadline.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"MDX/LibraryCardDeadline",of:_LibraryCardDeadline_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"librarycarddeadline",children:"LibraryCardDeadline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/library/LibraryCardDeadline",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#references",children:"References"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Help us improve this component by providing feedback, asking questions on Slack, or updating this file on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/edit/main/packages/components/library/LibraryCardDeadline.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/LibraryCardDeadline/LibraryCardDeadline.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var _bubbles_ui_icons_solid___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/@bubbles-ui/icons/solid/esm/index.js"),_LibraryCardDeadline__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/LibraryCardDeadline/LibraryCardDeadline.js"),_LibraryCardDeadline_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/LibraryCardDeadline/LibraryCardDeadline.constants.js"),_Library_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Library.constants.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Leemons/Library/LibraryCardDeadline",parameters:{component:_LibraryCardDeadline__WEBPACK_IMPORTED_MODULE_2__.M,design:{type:"figma"}},argTypes:{locale:{options:["en","fr","de","es","it","ja","ko","pt","ru","zh"],control:{type:"select"},withImage:{type:"boolean"}},severity:{control:{type:"select"},options:["none",..._Library_constants__WEBPACK_IMPORTED_MODULE_4__.jo]},role:{control:{type:"select"},options:_Library_constants__WEBPACK_IMPORTED_MODULE_4__.v8}}},Template=_ref=>{let{children,withImage,severity,...props}=_ref;const icon=props.icon;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_LibraryCardDeadline__WEBPACK_IMPORTED_MODULE_2__.M,{...props,icon:withImage?"https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80":icon,severity:"none"!==severity?severity:void 0,children})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={..._LibraryCardDeadline_constants__WEBPACK_IMPORTED_MODULE_3__.f,withImage:!1,parentHovered:!1,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_bubbles_ui_icons_solid___WEBPACK_IMPORTED_MODULE_1__.rK,{width:16,height:16}),deadline:new Date("2022-05-20"),locale:"es",isNew:!1,labels:{title:"",new:"New",deadline:"Deadline"},role:"teacher"},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  children,\n  withImage,\n  severity,\n  ...props\n}) => {\n  const image = 'https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80';\n  const icon = props.icon;\n  return <LibraryCardDeadline {...props} icon={withImage ? image : icon} severity={severity !== 'none' ? severity : undefined}>\n      {children}\n    </LibraryCardDeadline>;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/Library.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FI:()=>LIBRARY_CARD_DEADLINE_PROP_TYPES,dM:()=>LIBRARY_CARD_MENU_ITEM,jo:()=>LIBRARY_CARD_DEADLINE_SEVERITY,v8:()=>LIBRARYCARD_ASSIGMENT_ROLES});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const validateURL=(props,propName,componentName)=>{let url;const errorString=`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`;try{url=new URL(props.icon)}catch(error){return new Error(errorString)}if("http:"!==url.protocol&&"https:"!==url.protocol)return new Error(errorString)},LIBRARYCARD_ASSIGMENT_ROLES=["teacher","student"],LIBRARY_CARD_DEADLINE_SEVERITY=["low","medium","high"],LIBRARY_CARD_DEADLINE_PROP_TYPES={labels:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({title:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,new:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,deadline:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any}),icon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().element,(props,propName,componentName)=>validateURL(props,propName,componentName)]),locale:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,deadline:prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date),direction:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["vertical","horizontal"]),parentHovered:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,disableHover:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,role:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(LIBRARYCARD_ASSIGMENT_ROLES),severity:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(LIBRARY_CARD_DEADLINE_SEVERITY)},LIBRARY_CARD_MENU_ITEM={icon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().element,(props,propName,componentName)=>validateURL(props,propName,componentName)]),label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,rightSection:prop_types__WEBPACK_IMPORTED_MODULE_0___default().element,disabled:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool}},"./src/components/LibraryCardDeadline/LibraryCardDeadline.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>_Library_constants__WEBPACK_IMPORTED_MODULE_0__.FI,f:()=>LIBRARY_CARD_DEADLINE_DEFAULT_PROPS});var _Library_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Library.constants.js");const LIBRARY_CARD_DEADLINE_DEFAULT_PROPS={labels:{title:"",new:"",deadline:""},locale:"en-GB",isNew:!1,role:"teacher",disableHover:!1}},"./src/components/LibraryCardDeadline/LibraryCardDeadline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>LibraryCardDeadline});__webpack_require__("../../../node_modules/react/index.js");var lodash=__webpack_require__("../../../node_modules/lodash/lodash.js"),Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),ImageLoader=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/misc/ImageLoader/ImageLoader.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),theme_mixins=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/theme.mixins.js");const getSeverityColor=(theme,severity)=>{switch(severity){case"low":default:return theme.colors.fatic02;case"medium":return theme.colors.fatic03;case"high":return theme.colors.fatic01}},getTeacherColor=(theme,remainingDays,severity)=>{return severity?getSeverityColor(theme,severity):(max=7,(value=remainingDays)>5&&value<=max?theme.colors.fatic03:remainingDays>7?theme.colors.fatic01:theme.colors.fatic02);var value,max},getStudentColor=(theme,remainingDays,severity)=>severity?getSeverityColor(theme,severity):remainingDays<=2||1==remainingDays?theme.colors.fatic01:remainingDays<5?theme.colors.fatic03:theme.colors.fatic02,LibraryCardDeadlineStyles=(0,create_styles.k)(((theme,_ref)=>{let{isNew,parentHovered,remainingDays,severity,role}=_ref;const titleColor=((theme,remainingDays,isNew,severity,role)=>{const isTeacher="teacher"===role,isStudent="student"===role;return isNew?theme.colors.fatic02:isTeacher?getTeacherColor(theme,remainingDays,severity):isStudent?getStudentColor(theme,remainingDays,severity):void 0})(theme,remainingDays,isNew,severity,role);return{root:{...(0,theme_mixins.Pt)(theme.fontSizes[2],400),display:"flex",padding:(0,theme_mixins.Q1)(8),backgroundColor:"white"},icon:{color:theme.colors.text04,marginRight:8,marginTop:2},title:{fontWeight:600,fontSize:(0,theme_mixins.Q1)(12),lineHeight:(0,theme_mixins.Q1)(20),color:titleColor},deadline:{color:theme.colors.text02,fontSize:(0,theme_mixins.Q1)(12),lineHeight:(0,theme_mixins.Q1)(14),height:parentHovered?14:0,transition:"height 0.2s ease-in, opacity 0.3s ease-in, max-width 0.3s ease-in",overflow:"hidden"},info:{}}}));var LibraryCardDeadline_constants=__webpack_require__("./src/components/LibraryCardDeadline/LibraryCardDeadline.constants.js"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const TODAY=(new Date).getDate(),LibraryCardDeadline=_ref=>{let{labels,icon,isNew,locale,deadline,disableHover,parentHovered,severity,role,...props}=_ref;const formattedDate=deadline instanceof Date?`${labels.deadline?": ":""}${deadline.toLocaleDateString(locale)} - ${deadline.toLocaleTimeString(locale,{hour:"2-digit",minute:"2-digit"})}`:"";let remainingDays=0;let title=(()=>{if(labels.title||!deadline)return labels.title||"";const formatter=new Intl.RelativeTimeFormat(locale,{numeric:"auto"});let deltaDays=(deadline.getTime()-Date.now())/864e5;deltaDays<1&&(deadline.getDate()===TODAY?deltaDays=0:deadline.getDate()===TODAY-1?deltaDays=-1:deadline.getDate()===TODAY+1&&(deltaDays=1)),deltaDays=Math.ceil(deltaDays),remainingDays=deltaDays;const result=formatter.format(deltaDays,"day");return(0,lodash.capitalize)(result)})();const{classes,cx}=LibraryCardDeadlineStyles({isNew,parentHovered:parentHovered||disableHover,remainingDays,severity,role},{name:"LibraryCardDeadline"});return(0,jsx_runtime.jsxs)(Box.xu,{className:classes.root,children:[icon&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.icon,children:"string"==typeof icon?(0,jsx_runtime.jsx)(ImageLoader.S,{src:icon,height:16,width:16}):icon}),(0,jsx_runtime.jsxs)(Box.xu,{className:classes.info,children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.title,children:isNew?labels.new:title}),formattedDate&&(0,jsx_runtime.jsxs)(Box.xu,{className:classes.deadline,children:[labels?.deadline?labels?.deadline:"",formattedDate]})]})]})};LibraryCardDeadline.displayName="LibraryCardDeadline",LibraryCardDeadline.defaultProps=LibraryCardDeadline_constants.f,LibraryCardDeadline.propTypes=LibraryCardDeadline_constants.F,LibraryCardDeadline.__docgenInfo={description:"",methods:[],displayName:"LibraryCardDeadline",composes:["./LibraryCardDeadline.constants"]}}}]);