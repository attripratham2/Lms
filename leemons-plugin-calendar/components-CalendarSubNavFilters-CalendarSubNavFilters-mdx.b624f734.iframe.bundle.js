"use strict";(self.webpackChunkleemons_plugin_calendar_frontend_react=self.webpackChunkleemons_plugin_calendar_frontend_react||[]).push([[8368],{"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/CalendarSubNavFilters/CalendarSubNavFilters.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js"),_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs"),_CalendarSubNavFilters_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/CalendarSubNavFilters/CalendarSubNavFilters.stories.js");__webpack_require__("./src/components/CalendarSubNavFilters/CalendarSubNavFilters.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"MDX/CalendarSubNavFilters",of:_CalendarSubNavFilters_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"calendarsubnavfilters",children:"CalendarSubNavFilters"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/leemons/CalendarSubNavFilters",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#references",children:"References"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Help us improve this component by providing feedback, asking questions on Slack, or updating this file on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/edit/main/packages/components/leemons/CalendarSubNavFilters.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/CalendarSubNavFilters/CalendarSubNavFilters.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CalendarSubNavFilters_stories});var react=__webpack_require__("../../../node_modules/react/index.js"),CalendarSubNavFilters=__webpack_require__("./src/components/CalendarSubNavFilters/CalendarSubNavFilters.js");const mock=[{calendars:[{id:"aef88a83-887c-4497-8354-f196f3fa17f3",key:"plugins.users.calendar.agent.b53927cf-de5f-4c9e-8a53-beff671b87c7",name:"Jane Dow (Me)",icon:null,bgColor:"#4F96FF",borderColor:"#4F96FF",section:"plugins.users.calendar.user_section",deleted:0,created_at:"2022-01-18T13:13:34.000Z",updated_at:"2022-01-18T13:13:34.000Z",deleted_at:null,showEvents:!0}],sectionName:"My calendars"},{calendars:[{id:"66b10996-2065-4071-8064-19d887a6fcbc",key:"plugins.mvp-template.calendar-test2",name:"Matessssss",icon:"http://localhost:8080/api/leebrary/img/e9243637-661c-464b-b6db-fc043a3f780d@1.0.0",bgColor:"#ffe796",borderColor:"#ffe796",section:"plugins.mvp-template.Testing",deleted:0,created_at:"2022-01-18T13:13:35.000Z",updated_at:"2022-01-18T13:13:35.000Z",deleted_at:null,showEvents:!0},{id:"a537e3a3-5f5b-4546-9cfe-ee5d7e7ae8fa",key:"plugins.mvp-template.calendar-test",name:"Biologia",icon:null,bgColor:"#aaff96",borderColor:"#aaff96",section:"plugins.mvp-template.Testing",deleted:0,created_at:"2022-01-18T13:13:34.000Z",updated_at:"2022-01-18T13:13:34.000Z",deleted_at:null,showEvents:!0}],sectionName:"Subject tasks"}];var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const CalendarSubNavFilters_stories={title:"Leemons/Calendar/CalendarSubNavFilters",parameters:{component:CalendarSubNavFilters.F,design:{type:"figma"}},argTypes:{}},Template=_ref=>{let{children,...props}=_ref;const[state,setState]=react.useState(mock);return(0,jsx_runtime.jsx)(CalendarSubNavFilters.F,{...props,value:state,onChange:setState,centers:[{label:"Center 1",value:"1"},{label:"Center 2",value:"2"}],centerValue:1,children})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={...CalendarSubNavFilters.CALENDAR_SUB_NAV_FILTERS_DEFAULT_PROPS},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  const [state, setState] = React.useState(mock);\n  return <CalendarSubNavFilters {...props} value={state} onChange={setState} centers={[{\n    label: 'Center 1',\n    value: '1'\n  }, {\n    label: 'Center 2',\n    value: '2'\n  }]} centerValue={1}>\n      {children}\n    </CalendarSubNavFilters>;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/CalendarSubNavFilters/CalendarSubNavFilters.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>CalendarSubNavFilters});var react=__webpack_require__("../../../node_modules/react/index.js"),SubNav=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/navigation/SubNav/SubNav.js"),Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),Text=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Text/Text.js"),SegmentedControl=__webpack_require__("../../../node_modules/@mantine/core/esm/SegmentedControl/SegmentedControl.js"),Select=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/Select/Select.js"),ProSwitch=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/ProSwitch/ProSwitch.js"),ImageLoader=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/misc/ImageLoader/ImageLoader.js"),esm=__webpack_require__("../../../node_modules/@bubbles-ui/icons/outline/esm/index.js"),lodash=__webpack_require__("../../../node_modules/lodash/lodash.js"),prop_types=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const CALENDAR_SUB_NAV_FILTERS_PROP_TYPES={messages:prop_types_default().object,pages:prop_types_default().array,centers:prop_types_default().array,onChange:prop_types_default().func,centerOnChange:prop_types_default().func,pageOnChange:prop_types_default().func,onClose:prop_types_default().func,value:prop_types_default().array,pageValue:prop_types_default().array,centerValue:prop_types_default().string,showPageControl:prop_types_default().bool,mainColor:prop_types_default().string,drawerColor:prop_types_default().string,lightMode:prop_types_default().bool};var create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),theme_mixins=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/theme.mixins.js");const CalendarSubNavFiltersStyles=(0,create_styles.k)(((theme,_ref)=>{let{mainColor,lightMode}=_ref;return{subNav:{height:"100%",backgroundColor:theme.other.core.color.white,borderRight:"1px solid #EDEFF5"},titleContainer:{marginLeft:theme.spacing[5],display:"flex",alignItems:"center",fontSize:"18px"},calendarIcon:{width:"24px",height:"24px",marginRight:theme.spacing[2],color:"#7E8795"},title:{...(0,theme_mixins.Gi)(),color:"#1F2633",fontWeight:600,fontSize:"18px"},switchLabel:{color:lightMode?theme.colors.text01:theme.colors.text07,fontWeight:500},segmentRoot:{width:"100%",padding:0,backgroundColor:!lightMode&&mainColor},segmentLabel:{...(0,theme_mixins.Gi)(),color:"#495465",boxSizing:"border-box",alignItems:"center",justifyContent:"center",textAlign:"center",display:"flex",height:"100%",margin:0,padding:"16px",borderRadius:4,fontWeight:400,"&:first-child":{borderRadius:"0 0 4px 4px"},"&:last-child":{borderRadius:"4px 4px 0 0"},"&:hover":{color:!lightMode&&theme.colors.text07}},segmentLabelActive:{color:"#307AE8 !important"},segmentActive:{color:"#307AE8 !important",border:"1px solid #307AE8",backgroundColor:lightMode?theme.colors.mainWhite:"rgba(255, 255, 255, 0.25)","&:first-child":{borderRadius:"4px 4px 0 0"},"&:last-child":{borderRadius:"0 0 4px 4px"},top:4,left:4,boxShadow:"none"},segmentControl:{border:"none!important"},icon:{img:{filter:"brightness(0) invert(1)"}}}}));var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const CalendarSubNavFilters=_ref=>{let{messages,onClose,value,onChange,pages,pageValue,pageOnChange,centers,centerValue,centerOnChange,showPageControl,mainColor,drawerColor,lightMode}=_ref;const{classes}=CalendarSubNavFiltersStyles({mainColor,lightMode},{name:"SubnavFilters"}),[,setR]=(0,react.useState)(),ref=(0,react.useRef)({});return(0,react.useEffect)((()=>{!async function checkIcons(){value&&(0,lodash.forEach)(value,(_ref2=>{let{calendars}=_ref2;(0,lodash.forEach)(calendars,(calendar=>{calendar.icon&&fetch(calendar.icon).then((response=>{if(response.status>=400)throw new Error("Bad response from server");ref.current[calendar.icon]=!0,setR((new Date).getTime()+Math.floor(1e4*Math.random())+1)})).catch((()=>{ref.current[calendar.icon]=!1,setR((new Date).getTime()+Math.floor(1e4*Math.random())+1)}))}))}))}()}),[JSON.stringify(value)]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(SubNav.m2,{hideHeaderActions:!0,item:{label:""},style:{position:"static",boxShadow:"none"},className:classes.subNav,subItems:[],width:"100%",open:!0,messages,onClose,drawerColor,lightMode,children:[(0,jsx_runtime.jsxs)(Box.xu,{className:classes.titleContainer,children:[(0,jsx_runtime.jsx)(esm.Idg,{className:classes.calendarIcon}),(0,jsx_runtime.jsx)(Text.xv,{className:classes.title,children:messages.title})]}),(0,jsx_runtime.jsxs)(Box.xu,{sx:theme=>({margin:theme.spacing[5],paddingBottom:"80px"}),children:[showPageControl?(0,jsx_runtime.jsx)(SegmentedControl.s,{data:pages,value:pageValue,onChange:pageOnChange,orientation:"vertical",classNames:{root:classes.segmentRoot,label:classes.segmentLabel,active:classes.segmentActive,labelActive:classes.segmentLabelActive,control:classes.segmentControl}}):null,centers&&centers.length>1?(0,jsx_runtime.jsxs)(Box.xu,{sx:theme=>({marginTop:theme.spacing[6]}),children:[(0,jsx_runtime.jsx)(Text.xv,{strong:!0,size:"xs",sx:theme=>({color:lightMode?theme.colors.text05:theme.colors.text08}),children:messages.centers}),(0,jsx_runtime.jsx)(Box.xu,{sx:theme=>({marginTop:theme.spacing[5]}),children:(0,jsx_runtime.jsx)(Select.P,{data:centers,value:centerValue,onChange:centerOnChange})})]}):null,value.map(((_ref3,sectionIndex)=>{let{calendars,sectionName}=_ref3;return(0,jsx_runtime.jsxs)(Box.xu,{sx:theme=>({marginTop:theme.spacing[6]}),children:[(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Text.xv,{strong:!0,size:"xs",sx:theme=>({color:lightMode?theme.colors.text05:theme.colors.text08}),children:sectionName})}),(0,jsx_runtime.jsx)(Box.xu,{sx:theme=>({marginTop:theme.spacing[5]}),children:calendars.map(((calendar,calendarIndex)=>(0,jsx_runtime.jsx)(Box.xu,{sx:theme=>({marginTop:theme.spacing[4],marginBottom:theme.spacing[4]}),children:(0,jsx_runtime.jsx)(ProSwitch.y4,{classNames:{label:classes.switchLabel},label:calendar.name,color:calendar.bgColor,checked:calendar.showEvents,icon:calendar.icon&&ref.current[calendar.icon]?(0,jsx_runtime.jsx)(Box.xu,{className:classes.icon,children:(0,jsx_runtime.jsx)(ImageLoader.S,{height:"12px",imageStyles:{width:12},src:calendar.icon,forceImage:!0})}):null,onChange:event=>function _onChange(sectionIndex,calendarIndex,checked){const newValue=[...value];newValue[sectionIndex].calendars[calendarIndex].showEvents=checked,onChange(newValue)}(sectionIndex,calendarIndex,event)})},calendarIndex)))})]},`${sectionName}-${sectionIndex}`)}))]})]})})};CalendarSubNavFilters.defaultProps={messages:{title:"Calendar",centers:"Centers",closeTooltip:"Close"},pages:[{label:"Calendar",value:"calendar"},{label:"Schedule",value:"schedule"}],centers:[],onChange:()=>{},centerOnChange:()=>{},pageOnChange:()=>{},onClose:()=>{},showPageControl:!1,mainColor:"#212B3D",drawerColor:"#333F56",lightMode:!1},CalendarSubNavFilters.propTypes=CALENDAR_SUB_NAV_FILTERS_PROP_TYPES,CalendarSubNavFilters.__docgenInfo={description:"",methods:[],displayName:"CalendarSubNavFilters",composes:["./CalendarSubNavFilters.constants"]}}}]);