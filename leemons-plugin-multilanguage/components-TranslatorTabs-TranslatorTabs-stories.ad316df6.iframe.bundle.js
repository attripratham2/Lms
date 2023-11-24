"use strict";(self.webpackChunkleemons_plugin_multilanguage_frontend_react=self.webpackChunkleemons_plugin_multilanguage_frontend_react||[]).push([[106],{"./src/components/TranslatorTabs/TranslatorTabs.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var _TranslatorTabs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/TranslatorTabs/TranslatorTabs.js"),_mocks_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/TranslatorTabs/mocks/data.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Leemons/Multilanguage/TranslatorTabs",parameters:{component:_TranslatorTabs__WEBPACK_IMPORTED_MODULE_1__.gQ,design:{type:"figma"}},argTypes:{onLocaleChange:{action:"Locale has changed"},defaultLocale:{options:_mocks_data__WEBPACK_IMPORTED_MODULE_2__.s.locales.map((locale=>locale.code)),control:{type:"select"}}}},Template=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_TranslatorTabs__WEBPACK_IMPORTED_MODULE_1__.gQ,{...props})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={..._TranslatorTabs__WEBPACK_IMPORTED_MODULE_1__.rl,..._mocks_data__WEBPACK_IMPORTED_MODULE_2__.s},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  ...props\n}) => {\n  return <TranslatorTabs {...props} />;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/TranslatorTabs/TranslatorTabs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{gQ:()=>TranslatorTabs,rl:()=>TRANSLATOR_TABS_DEFAULT_PROPS});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/lodash/lodash.js"),_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/navigation/Tabs/Tabs.js"),_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/navigation/Tabs/TabPanelList/TabPanel.js"),_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@bubbles-ui/icons/solid/esm/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const TRANSLATOR_TABS_DEFAULT_PROPS={locales:[],errors:[],warnings:[],defaultLocale:null},TRANSLATOR_TABS_PROP_TYPES={children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().element,locales:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,code:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,config:prop_types__WEBPACK_IMPORTED_MODULE_4___default().any})),errors:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),warnings:prop_types__WEBPACK_IMPORTED_MODULE_4___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),defaultLocale:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,onLocaleChange:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func},TranslatorTabs=_ref=>{let{children,locales,errors,warnings,defaultLocale,onLocaleChange}=_ref;const[langs,setLangs]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[configs,setConfigs]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),getAllConfigs=_locales=>{const result={};return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.forEach)(_locales,((locale,i)=>{result[locale.code]=((_locales,i)=>({currentLocaleIndex:i,currentLocale:_locales[i],currentLocaleIsDefaultLocale:_locales[i].code===defaultLocale,defaultLocale,locales:_locales}))(_locales,i)})),result};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if((0,lodash__WEBPACK_IMPORTED_MODULE_1__.isArray)(locales)&&(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isString)(defaultLocale)){const data=[...locales],langIndex=(0,lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex)(locales,{code:defaultLocale});langIndex>-1&&(data.unshift(...data.splice(langIndex,1)),setLangs(data),setConfigs(getAllConfigs(data)))}}),[locales,defaultLocale]);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isArray)(langs)&&langs.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_5__.m,{forceRender:!0,onTabClick:code=>{code=code.replace(".$",""),(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isFunction)(onLocaleChange)&&onLocaleChange(configs[code])},children:langs.map(((locale,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_6__.x,{label:locale.label,hasError:errors.includes(locale.code),hasWarning:warnings.includes(locale.code),rightIcon:defaultLocale===locale.code?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_2__.bM,{style:{width:14,color:"#B9BEC4"}}):null,children:!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(children)&&react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,{localeConfig:configs[locale.code]}):null},locale.code)))}):null};TranslatorTabs.defaultProps=TRANSLATOR_TABS_DEFAULT_PROPS,TranslatorTabs.propTypes=TRANSLATOR_TABS_PROP_TYPES,TranslatorTabs.__docgenInfo={description:"",methods:[],displayName:"TranslatorTabs",props:{locales:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},code:{name:"string",required:!1},config:{name:"any",required:!1}}}},required:!1},errors:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},warnings:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"string"}},required:!1},defaultLocale:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"element"},required:!1},onLocaleChange:{description:"",type:{name:"func"},required:!1}}}},"./src/components/TranslatorTabs/mocks/data.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>TRANSLATOR_TABS_DATA});const TRANSLATOR_TABS_DATA={locales:[{label:"Spanish",code:"ES"},{label:"English",code:"EN"},{label:"French",code:"FR"}],defaultLocale:"EN"}}}]);