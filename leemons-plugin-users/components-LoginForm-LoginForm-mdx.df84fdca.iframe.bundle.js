"use strict";(self.webpackChunkleemons_plugin_users_frontend_react=self.webpackChunkleemons_plugin_users_frontend_react||[]).push([[269],{"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/LoginForm/LoginForm.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js"),_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs"),_LoginForm_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/LoginForm/LoginForm.stories.js");__webpack_require__("./src/components/LoginForm/LoginForm.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"MDX/LoginForm",of:_LoginForm_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"loginform",children:"LoginForm"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/leemons/LoginForm",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#references",children:"References"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Help us improve this component by providing feedback, asking questions on Slack, or updating this file on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/edit/main/packages/components/leemons/LoginForm.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/LoginForm/LoginForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _LoginForm__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/LoginForm/LoginForm.js"),_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Leemons/Users/LoginForm",parameters:{component:_LoginForm__WEBPACK_IMPORTED_MODULE_0__.U0,design:{type:"figma",url:"https://www.figma.com/file/Mt7Ne7X1aHI7pqhXbaF85w/App-Opensource-Backup?node-id=550%3A34163"}},argTypes:{onSubmit:{action:"Form submitted"}}},Template=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_2__.xu,{style:{width:560},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_LoginForm__WEBPACK_IMPORTED_MODULE_0__.U0,{...props})})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={recoverUrl:"#",loading:!1,formError:"",labels:{title:"Login to your account",username:"Email",password:"Password",remember:"I can't remember my password",login:"Log in",signup:"I am not registered"},placeholders:{username:"Your email",password:"Your password"},errorMessages:{username:{required:"Field required",invalidFormat:"Invalid format"},password:{required:"Field required"}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  ...props\n}) => {\n  return <Box style={{\n    width: 560\n  }}>\n      <LoginForm {...props} />\n    </Box>;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/LoginForm/LoginForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U0:()=>LoginForm});__webpack_require__("../../../node_modules/react/index.js");var prop_types=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),ContextContainer=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/ContextContainer/ContextContainer.js"),Alert=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/feedback/Alert/Alert.js"),TextInput=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/TextInput/TextInput.js"),Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),PasswordInput=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/PasswordInput/PasswordInput.js"),Button=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/Button/Button.js"),react_router_dom=__webpack_require__("../../../node_modules/react-router-dom/esm/react-router-dom.js"),esm=__webpack_require__("../../../node_modules/@bubbles-ui/icons/outline/esm/index.js"),index_esm=__webpack_require__("../../../node_modules/react-hook-form/dist/index.esm.mjs");const LoginFormStyles=(0,__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js").k)(((theme,_ref)=>{let{}=_ref;return{root:{display:"flex",flexDirection:"column",gap:30}}}));var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const EMAIL_REGEX=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,LoginForm=_ref=>{let{labels,placeholders,errorMessages,formError,onSubmit,onValidationError,loading,showSignup,recoverUrl,useRouter,...props}=_ref;const{classes,cx}=LoginFormStyles({}),{control,handleSubmit,formState:{errors}}=(0,index_esm.cI)({defaultValues:{email:"",password:""}}),recoveryProps={};return useRouter?(recoveryProps.as=react_router_dom.rU,recoveryProps.to=recoverUrl):(recoveryProps.as="a",recoveryProps.href=recoverUrl),(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit(onSubmit),children:(0,jsx_runtime.jsxs)(ContextContainer.AY,{title:labels.title,...props,"data-cypress-id":"loginForm",children:[formError&&(0,jsx_runtime.jsx)(Alert.bZ,{severity:"error",children:formError}),(0,jsx_runtime.jsx)(index_esm.Qr,{name:"email",control,rules:{required:errorMessages.username?.required,pattern:{value:EMAIL_REGEX,message:errorMessages.username?.invalidFormat}},render:_ref2=>{let{field}=_ref2;return(0,jsx_runtime.jsx)(TextInput.oi,{"data-cypress-id":"emailInput",label:labels.username,placeholder:placeholders.username,error:errors.email,required:!0,...field})}}),(0,jsx_runtime.jsxs)(Box.xu,{children:[(0,jsx_runtime.jsx)(index_esm.Qr,{name:"password",control,rules:{required:errorMessages.password?.required},render:_ref3=>{let{field}=_ref3;return(0,jsx_runtime.jsx)(PasswordInput.WU,{"data-cypress-id":"passwordInput",label:labels.password,placeholder:placeholders.password,error:errors.password,required:!0,...field})}}),(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Button.zx,{variant:"link",...recoveryProps,children:labels.remember})})]}),(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Button.zx,{loading,loaderPosition:"right",type:"submit",fullWidth:!0,children:labels.login})}),showSignup&&(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Button.zx,{variant:"light",rightIcon:(0,jsx_runtime.jsx)(esm.XCv,{}),type:"button",fullWidth:!0,children:labels.signup})})]})})};LoginForm.displayName="LoginForm",LoginForm.defaultProps={labels:{title:"",username:"",password:"",remember:"",login:"",signup:""},placeholders:{username:"",password:""},recoverUrl:"#",loading:!1,formError:"",showSignup:!1},LoginForm.propTypes={labels:prop_types_default().shape({title:prop_types_default().string,username:prop_types_default().string,password:prop_types_default().string,remember:prop_types_default().string,login:prop_types_default().string,signup:prop_types_default().string}),placeholders:prop_types_default().shape({username:prop_types_default().string,password:prop_types_default().string}),errorMessages:prop_types_default().shape({username:prop_types_default().any,password:prop_types_default().any}),formError:prop_types_default().string,loading:prop_types_default().bool,onSubmit:prop_types_default().func,recoverUrl:prop_types_default().string},LoginForm.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{labels:{defaultValue:{value:"{\n  title: '',\n  username: '',\n  password: '',\n  remember: '',\n  login: '',\n  signup: '',\n}",computed:!1},description:"",type:{name:"shape",value:{title:{name:"string",required:!1},username:{name:"string",required:!1},password:{name:"string",required:!1},remember:{name:"string",required:!1},login:{name:"string",required:!1},signup:{name:"string",required:!1}}},required:!1},placeholders:{defaultValue:{value:"{\n  username: '',\n  password: '',\n}",computed:!1},description:"",type:{name:"shape",value:{username:{name:"string",required:!1},password:{name:"string",required:!1}}},required:!1},recoverUrl:{defaultValue:{value:"'#'",computed:!1},description:"",type:{name:"string"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},formError:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},showSignup:{defaultValue:{value:"false",computed:!1},required:!1},errorMessages:{description:"",type:{name:"shape",value:{username:{name:"any",required:!1},password:{name:"any",required:!1}}},required:!1},onSubmit:{description:"",type:{name:"func"},required:!1}}}}}]);