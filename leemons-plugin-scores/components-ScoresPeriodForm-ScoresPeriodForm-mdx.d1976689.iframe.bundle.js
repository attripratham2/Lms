(self.webpackChunkleemons_plugin_scores_frontend_react=self.webpackChunkleemons_plugin_scores_frontend_react||[]).push([[2688,561],{"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/ScoresPeriodForm/ScoresPeriodForm.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js"),_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs"),_ScoresPeriodForm_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ScoresPeriodForm/ScoresPeriodForm.stories.js");__webpack_require__("./src/components/ScoresPeriodForm/ScoresPeriodForm.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"MDX/ScoresPeriodForm",of:_ScoresPeriodForm_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scoresperiodform",children:"ScoresPeriodForm"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/scores/ScoresPeriodForm",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#references",children:"References"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Help us improve this component by providing feedback, asking questions on Slack, or updating this file on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/edit/main/packages/components/scores/ScoresPeriodForm.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/ScoresPeriodForm/ScoresPeriodForm.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var _ScoresPeriodForm__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ScoresPeriodForm/ScoresPeriodForm.js"),_ScoresPeriodForm_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ScoresPeriodForm/ScoresPeriodForm.constants.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"leemons/Scores/ScoresPeriodForm",parameters:{component:_ScoresPeriodForm__WEBPACK_IMPORTED_MODULE_1__.t,design:{type:"figma"}},argTypes:{onSubmit:{action:"onSubmit"},onSave:{action:"onSave"},onChange:{action:"onChange"}}},Template=_ref=>{let{...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ScoresPeriodForm__WEBPACK_IMPORTED_MODULE_1__.t,{...props})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={..._ScoresPeriodForm_constants__WEBPACK_IMPORTED_MODULE_2__.I,fields:[{name:"program",placeholder:"Select program",data:["Program 1","Program 2","Program 3"],required:"Required field"},{name:"course",placeholder:"Select course",data:["Course 1","Course 2","Course 3"],required:"Required field"},{name:"subject",placeholder:"Select subject",data:["Subject 1","Subject 2","Subject 3"]}],periods:[{name:"First period",startDate:new Date(2020,0,1),endDate:new Date(2020,0,31)},{name:"Second period",startDate:new Date(2020,1,1),endDate:new Date(2020,1,28)},{name:"Third period",startDate:new Date(2020,2,1),endDate:new Date(2020,2,31)}],value:{program:"Program 3",course:"Course 2",subject:null,startDate:null,endDate:new Date},labels:{startDate:"Start date",endDate:"End date",submit:"Search",newPeriod:"New period",addPeriod:"Add new period",shareWithTeachers:"Share with teachers",saveButton:"Save time period"},errorMessages:{startDate:"Required start date",endDate:"Required end date",validateStartDate:"Start date is greater than end date",validateEndDate:"End date is smaller than start date"}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  ...props\n}) => {\n  return <ScoresPeriodForm {...props} />;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/ScoresPeriodForm/ScoresPeriodForm.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>SCORES_PERIOD_FORM_DEFAULT_PROPS,d:()=>SCORES_PERIOD_FORM_PROP_TYPES});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const SCORES_PERIOD_FORM_DEFAULT_PROPS={labels:{startDate:"",endDate:"",submit:"",newPeriod:"",addPeriod:"",shareWithTeachers:"",saveButton:""},errorMessages:{startDate:"",endDate:"",validateStartDate:"",validateEndDate:""},fields:[],allowCreate:!1,periods:[],locale:"en-US"},SCORES_PERIOD_FORM_PROP_TYPES={value:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({program:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any,course:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any,subject:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any,startDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)]),endDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)])}),fields:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,data:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),required:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})),labels:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({startDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,endDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,submit:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,newPeriod:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,addPeriod:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,shareWithTeachers:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,saveButton:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string}),errorMessages:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({startDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,endDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,validateStartDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,validateEndDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string}),onSubmit:prop_types__WEBPACK_IMPORTED_MODULE_0___default().func,onSave:prop_types__WEBPACK_IMPORTED_MODULE_0___default().func,onChange:prop_types__WEBPACK_IMPORTED_MODULE_0___default().func,allowCreate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,periods:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,startDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)]),endDate:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)]),name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})),locale:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string}},"./src/components/ScoresPeriodForm/ScoresPeriodForm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>ScoresPeriodForm});var react=__webpack_require__("../../../node_modules/react/index.js"),Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),Text=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Text/Text.js"),Select=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/Select/Select.js"),DatePicker=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/DatePicker/DatePicker.js"),TextInput=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/TextInput/TextInput.js"),Switch=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/Switch/Switch.js"),Button=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/Button/Button.js"),lodash=__webpack_require__("../../../node_modules/lodash/lodash.js"),lodash_default=__webpack_require__.n(lodash),index_esm=__webpack_require__("../../../node_modules/react-hook-form/dist/index.esm.mjs"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),theme_mixins=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/theme.mixins.js");const ScoresPeriodFormStyles=(0,create_styles.k)((theme=>({root:{...(0,theme_mixins.Gi)(theme.fontSizes[2])},selectWrapper:{display:"flex",flexDirection:"column",gap:theme.spacing[2]},buttonWrapper:{marginTop:theme.spacing[4]},periodWrapper:{marginTop:theme.spacing[2],display:"flex",flexDirection:"column",padding:theme.spacing[4],gap:theme.spacing[3],border:`1px solid ${theme.colors.ui01}`,borderRadius:theme.spacing[1]},datePicker:{display:"flex",flexDirection:"column",gap:theme.spacing[2],div:{flex:1}},period:{border:`1px solid ${theme.colors.ui01}`,borderRadius:theme.spacing[1],padding:theme.spacing[4],display:"flex",flexDirection:"column",gap:theme.spacing[2],cursor:"pointer"},periodsList:{marginTop:theme.spacing[2],display:"flex",flexDirection:"column",gap:theme.spacing[2]},customPeriodTitle:{marginTop:theme.spacing[2]},selectedPeriod:{borderColor:theme.colors.interactive01d,backgroundColor:theme.colors.interactive01v1},closeButton:{flex:1,display:"flex",justifyContent:"end"},createContent:{marginTop:theme.spacing[6],display:"flex",flexDirection:"column",gap:theme.spacing[4]}})));var ScoresPeriodForm_constants=__webpack_require__("./src/components/ScoresPeriodForm/ScoresPeriodForm.constants.js"),esm=__webpack_require__("../../../node_modules/@bubbles-ui/icons/outline/esm/index.js"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");function Periods(_ref){let{classes,cx,labels,locale,onPeriodSelect,periods,setValue,watch}=_ref;const startDate=watch("startDate")?.getTime(),endDate=watch("endDate")?.getTime(),[periodSelected,setPeriodSelected]=react.useState(null);return react.useEffect((()=>{!periodSelected||periodSelected.startDate.getTime()===startDate&&periodSelected.endDate.getTime()===endDate||(setPeriodSelected(null),lodash_default().isFunction(onPeriodSelect)&&onPeriodSelect(null))}),[startDate,endDate]),periods?.length?(0,jsx_runtime.jsxs)(Box.xu,{className:classes.periodsList,children:[(0,jsx_runtime.jsx)(Text.xv,{role:"productive",strong:!0,color:"soft",size:"xs",transform:"uppercase",children:labels?.evaluations}),periods?.map((period=>(0,jsx_runtime.jsxs)(Box.xu,{className:cx(classes.period,{[classes.selectedPeriod]:startDate===period.startDate.getTime()&&endDate===period.endDate.getTime()}),onClick:()=>{setPeriodSelected(period),lodash_default().isFunction(onPeriodSelect)&&onPeriodSelect(period),setValue("startDate",period.startDate),setValue("endDate",period.endDate)},children:[(0,jsx_runtime.jsx)(Text.xv,{color:"primary",strong:!0,children:period.name}),(0,jsx_runtime.jsxs)(Text.xv,{color:"quartiary",children:[period.startDate?.toLocaleDateString(locale)," -"," ",period.endDate.toLocaleDateString(locale)]})]},period.id)))]}):null}function RenderSelects(_ref2){let{classes,clearLabel,control,errors,fields}=_ref2;return react.useMemo((()=>{const selects=fields.map(((field,index)=>{const{name,placeholder,data,required,disabled,label,...props}=field;return(0,jsx_runtime.jsx)(index_esm.Qr,{control,name,rules:{required},render:_ref3=>{let{field}=_ref3;return react.useEffect((()=>{field.value&&!function oldValueExistsOnCurrentData(value,data){if(Array.isArray(value))return 0===lodash_default().difference(value,lodash_default().map(data,"value")).length;return data.some((item=>item.value===value))}(field.value,data)&&field.onChange(null)}),[data]),(0,jsx_runtime.jsx)(Select.P,{...props,placeholder,error:errors[name],label,clearable:!required&&clearLabel,data,disabled,required:!!required,...field})}},`${name}-${index}`)}));return(0,jsx_runtime.jsx)(Box.xu,{className:classes.selectWrapper,children:selects})}),[fields,control,errors])}function SelectDates(_ref4){let{classes,control,errorMessages,errors,labels,locale,watch,getValues,required}=_ref4;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(index_esm.Qr,{control,name:"startDate",rules:{required:errorMessages.startDate||"Required Field",validate:value=>{const endDate=getValues("endDate");return!endDate||(!(value>endDate)||(errorMessages.validateStartDate||"Invalid start date"))}},render:_ref5=>{let{field}=_ref5;return(0,jsx_runtime.jsx)(DatePicker.Mt,{label:labels.startDate,error:errors.startDate,required,locale,maxDate:watch("endDate"),headerStyle:{flex:"none"},...field,onChange:value=>{if(!value)return void field.onChange(value);const date=new Date(value);date.setHours(0,0,0,0),field.onChange(date)}})}}),(0,jsx_runtime.jsx)(index_esm.Qr,{control,name:"endDate",rules:{required:errorMessages.endDate||"Required Field",validate:value=>{const startDate=getValues("startDate");return!startDate||(!(value<startDate)||(errorMessages.validateEndDate||"Invalid end date"))}},render:_ref6=>{let{field}=_ref6;const startDate=watch("startDate");if(field.value&&!startDate)field.onChange(null);else if(!field.value&&startDate){let followingDay=new Date(startDate);followingDay.setDate(startDate.getDate()+1),field.onChange(followingDay)}return(0,jsx_runtime.jsx)(DatePicker.Mt,{label:labels.endDate,error:errors.endDate,required,locale,minDate:startDate,disabled:!startDate,headerStyle:{flex:"none"},...field,onChange:value=>{if(!value)return void field.onChange(value);const date=new Date(value);date.setHours(0,0,0,0),field.onChange(date)}})}})]})}function PeriodCreationForm(_ref7){let{classes,control,errorMessages,labels,errors,handleSubmit,onSaveHandler}=_ref7;return(0,jsx_runtime.jsxs)(Box.xu,{className:classes.createContent,children:[(0,jsx_runtime.jsx)(index_esm.Qr,{control,name:"periodName",rules:{required:errorMessages.periodName||"Required Field"},render:_ref8=>{let{field}=_ref8;return(0,jsx_runtime.jsx)(TextInput.oi,{...field,label:labels?.periodName,required:!0,error:errors.periodName})}}),(0,jsx_runtime.jsx)(index_esm.Qr,{control,name:"shareWithTeachers",render:_ref9=>{let{field}=_ref9;return(0,jsx_runtime.jsx)(Switch.rs,{...field,size:"md",label:labels.shareWithTeachers,checked:field.value})}}),(0,jsx_runtime.jsx)(Button.zx,{fullWidth:!0,position:"center",onClick:handleSubmit(onSaveHandler),children:labels.saveButton})]})}function ScoresPeriodForm(_ref10){let{value,fields,labels,errorMessages,onSubmit,onSave,allowCreate,periods,locale,onChange,onPeriodSelect}=_ref10;const{control,handleSubmit,getValues,watch,setValue,formState:{errors}}=(0,index_esm.cI)({defaultValues:value});react.useEffect((()=>{if((0,lodash.isFunction)(onChange)){const subscription=watch(((value,_ref13)=>{let{name}=_ref13;["startDate","endDate"].includes(name)||onChange(lodash_default().omit(value,["startDate","endDate"]))}));return()=>{subscription.unsubscribe()}}}),[watch,onChange]);const{classes,cx}=ScoresPeriodFormStyles({},{name:"ScoresPeriodForm"});return(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)("form",{onSubmit:handleSubmit((_ref11=>{let{periodName,shareWithTeachers,...formValue}=_ref11;lodash_default().isFunction(onSubmit)&&onSubmit(formValue)})),children:(0,jsx_runtime.jsxs)(Box.xu,{sx:theme=>({display:"flex",flexDirection:"column",gap:theme.spacing[4]}),children:[(0,jsx_runtime.jsx)(RenderSelects,{classes,clearLabel:"clear",control,errors,fields}),!allowCreate&&(0,jsx_runtime.jsx)(Periods,{classes,cx,labels,locale,onPeriodSelect,periods,setValue,watch}),(0,jsx_runtime.jsxs)(Box.xu,{children:[!allowCreate&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.customPeriodTitle,children:(0,jsx_runtime.jsx)(Text.xv,{role:"productive",strong:!0,color:"soft",size:"xs",transform:"uppercase",children:labels?.customPeriod})}),(0,jsx_runtime.jsxs)(Box.xu,{className:classes.periodWrapper,children:[(0,jsx_runtime.jsx)(SelectDates,{classes,control,errorMessages,errors,labels,locale,watch,getValues,required:allowCreate}),!allowCreate&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.buttonWrapper,children:(0,jsx_runtime.jsx)(Button.zx,{type:"submit",position:"center",fullWidth:!0,rightIcon:(0,jsx_runtime.jsx)(esm.W1M,{}),children:labels.submit})})]})]}),allowCreate&&(0,jsx_runtime.jsx)(PeriodCreationForm,{classes,control,errorMessages,labels,errors,handleSubmit,onSaveHandler:_ref12=>{let{periodName,shareWithTeachers,...formValue}=_ref12;lodash_default().isFunction(onSave)&&onSave(periodName,shareWithTeachers,formValue)}})]})})})}Periods.displayName="Periods",PeriodCreationForm.displayName="PeriodCreationForm",ScoresPeriodForm.displayName="ScoresPeriodForm",ScoresPeriodForm.defaultProps=ScoresPeriodForm_constants.I,ScoresPeriodForm.propTypes=ScoresPeriodForm_constants.d,ScoresPeriodForm.__docgenInfo={description:"",methods:[],displayName:"ScoresPeriodForm",composes:["./ScoresPeriodForm.constants"]}},"../../../node_modules/dayjs/locale lazy recursive ^\\.\\/.*\\.js$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./af.js":["../../../node_modules/dayjs/locale/af.js",2775],"./am.js":["../../../node_modules/dayjs/locale/am.js",8044],"./ar-dz.js":["../../../node_modules/dayjs/locale/ar-dz.js",8969],"./ar-iq.js":["../../../node_modules/dayjs/locale/ar-iq.js",879],"./ar-kw.js":["../../../node_modules/dayjs/locale/ar-kw.js",5256],"./ar-ly.js":["../../../node_modules/dayjs/locale/ar-ly.js",3117],"./ar-ma.js":["../../../node_modules/dayjs/locale/ar-ma.js",8815],"./ar-sa.js":["../../../node_modules/dayjs/locale/ar-sa.js",5448],"./ar-tn.js":["../../../node_modules/dayjs/locale/ar-tn.js",8240],"./ar.js":["../../../node_modules/dayjs/locale/ar.js",7797],"./az.js":["../../../node_modules/dayjs/locale/az.js",5386],"./be.js":["../../../node_modules/dayjs/locale/be.js",2575],"./bg.js":["../../../node_modules/dayjs/locale/bg.js",376],"./bi.js":["../../../node_modules/dayjs/locale/bi.js",584],"./bm.js":["../../../node_modules/dayjs/locale/bm.js",8751],"./bn-bd.js":["../../../node_modules/dayjs/locale/bn-bd.js",5966],"./bn.js":["../../../node_modules/dayjs/locale/bn.js",9445],"./bo.js":["../../../node_modules/dayjs/locale/bo.js",7246],"./br.js":["../../../node_modules/dayjs/locale/br.js",4414],"./bs.js":["../../../node_modules/dayjs/locale/bs.js",1059],"./ca.js":["../../../node_modules/dayjs/locale/ca.js",6691],"./cs.js":["../../../node_modules/dayjs/locale/cs.js",2724],"./cv.js":["../../../node_modules/dayjs/locale/cv.js",9826],"./cy.js":["../../../node_modules/dayjs/locale/cy.js",7332],"./da.js":["../../../node_modules/dayjs/locale/da.js",2571],"./de-at.js":["../../../node_modules/dayjs/locale/de-at.js",1610],"./de-ch.js":["../../../node_modules/dayjs/locale/de-ch.js",705],"./de.js":["../../../node_modules/dayjs/locale/de.js",1905],"./dv.js":["../../../node_modules/dayjs/locale/dv.js",1041],"./el.js":["../../../node_modules/dayjs/locale/el.js",1258],"./en-au.js":["../../../node_modules/dayjs/locale/en-au.js",3353],"./en-ca.js":["../../../node_modules/dayjs/locale/en-ca.js",4176],"./en-gb.js":["../../../node_modules/dayjs/locale/en-gb.js",3885],"./en-ie.js":["../../../node_modules/dayjs/locale/en-ie.js",9991],"./en-il.js":["../../../node_modules/dayjs/locale/en-il.js",2046],"./en-in.js":["../../../node_modules/dayjs/locale/en-in.js",6008],"./en-nz.js":["../../../node_modules/dayjs/locale/en-nz.js",171],"./en-sg.js":["../../../node_modules/dayjs/locale/en-sg.js",8484],"./en-tt.js":["../../../node_modules/dayjs/locale/en-tt.js",1977],"./en.js":["../../../node_modules/dayjs/locale/en.js",4102],"./eo.js":["../../../node_modules/dayjs/locale/eo.js",6241],"./es-do.js":["../../../node_modules/dayjs/locale/es-do.js",9442],"./es-mx.js":["../../../node_modules/dayjs/locale/es-mx.js",47],"./es-pr.js":["../../../node_modules/dayjs/locale/es-pr.js",2664],"./es-us.js":["../../../node_modules/dayjs/locale/es-us.js",1980],"./es.js":["../../../node_modules/dayjs/locale/es.js",412],"./et.js":["../../../node_modules/dayjs/locale/et.js",6982],"./eu.js":["../../../node_modules/dayjs/locale/eu.js",7094],"./fa.js":["../../../node_modules/dayjs/locale/fa.js",9487],"./fi.js":["../../../node_modules/dayjs/locale/fi.js",2891],"./fo.js":["../../../node_modules/dayjs/locale/fo.js",1211],"./fr-ca.js":["../../../node_modules/dayjs/locale/fr-ca.js",8707],"./fr-ch.js":["../../../node_modules/dayjs/locale/fr-ch.js",2200],"./fr.js":["../../../node_modules/dayjs/locale/fr.js",1707],"./fy.js":["../../../node_modules/dayjs/locale/fy.js",574],"./ga.js":["../../../node_modules/dayjs/locale/ga.js",9778],"./gd.js":["../../../node_modules/dayjs/locale/gd.js",8451],"./gl.js":["../../../node_modules/dayjs/locale/gl.js",4564],"./gom-latn.js":["../../../node_modules/dayjs/locale/gom-latn.js",1001],"./gu.js":["../../../node_modules/dayjs/locale/gu.js",4209],"./he.js":["../../../node_modules/dayjs/locale/he.js",9630],"./hi.js":["../../../node_modules/dayjs/locale/hi.js",2758],"./hr.js":["../../../node_modules/dayjs/locale/hr.js",9509],"./ht.js":["../../../node_modules/dayjs/locale/ht.js",807],"./hu.js":["../../../node_modules/dayjs/locale/hu.js",7855],"./hy-am.js":["../../../node_modules/dayjs/locale/hy-am.js",6440],"./id.js":["../../../node_modules/dayjs/locale/id.js",1343],"./is.js":["../../../node_modules/dayjs/locale/is.js",8991],"./it-ch.js":["../../../node_modules/dayjs/locale/it-ch.js",9465],"./it.js":["../../../node_modules/dayjs/locale/it.js",3979],"./ja.js":["../../../node_modules/dayjs/locale/ja.js",4155],"./jv.js":["../../../node_modules/dayjs/locale/jv.js",7116],"./ka.js":["../../../node_modules/dayjs/locale/ka.js",4658],"./kk.js":["../../../node_modules/dayjs/locale/kk.js",2592],"./km.js":["../../../node_modules/dayjs/locale/km.js",786],"./kn.js":["../../../node_modules/dayjs/locale/kn.js",6535],"./ko.js":["../../../node_modules/dayjs/locale/ko.js",8339],"./ku.js":["../../../node_modules/dayjs/locale/ku.js",6763],"./ky.js":["../../../node_modules/dayjs/locale/ky.js",3025],"./lb.js":["../../../node_modules/dayjs/locale/lb.js",9087],"./lo.js":["../../../node_modules/dayjs/locale/lo.js",4541],"./lt.js":["../../../node_modules/dayjs/locale/lt.js",3144],"./lv.js":["../../../node_modules/dayjs/locale/lv.js",9427],"./me.js":["../../../node_modules/dayjs/locale/me.js",8397],"./mi.js":["../../../node_modules/dayjs/locale/mi.js",8293],"./mk.js":["../../../node_modules/dayjs/locale/mk.js",9733],"./ml.js":["../../../node_modules/dayjs/locale/ml.js",7213],"./mn.js":["../../../node_modules/dayjs/locale/mn.js",235],"./mr.js":["../../../node_modules/dayjs/locale/mr.js",91],"./ms-my.js":["../../../node_modules/dayjs/locale/ms-my.js",7740],"./ms.js":["../../../node_modules/dayjs/locale/ms.js",4347],"./mt.js":["../../../node_modules/dayjs/locale/mt.js",6214],"./my.js":["../../../node_modules/dayjs/locale/my.js",4427],"./nb.js":["../../../node_modules/dayjs/locale/nb.js",4690],"./ne.js":["../../../node_modules/dayjs/locale/ne.js",5877],"./nl-be.js":["../../../node_modules/dayjs/locale/nl-be.js",8827],"./nl.js":["../../../node_modules/dayjs/locale/nl.js",6085],"./nn.js":["../../../node_modules/dayjs/locale/nn.js",7451],"./oc-lnc.js":["../../../node_modules/dayjs/locale/oc-lnc.js",3913],"./pa-in.js":["../../../node_modules/dayjs/locale/pa-in.js",275],"./pl.js":["../../../node_modules/dayjs/locale/pl.js",9410],"./pt-br.js":["../../../node_modules/dayjs/locale/pt-br.js",6181],"./pt.js":["../../../node_modules/dayjs/locale/pt.js",2937],"./rn.js":["../../../node_modules/dayjs/locale/rn.js",454],"./ro.js":["../../../node_modules/dayjs/locale/ro.js",9004],"./ru.js":["../../../node_modules/dayjs/locale/ru.js",4632],"./rw.js":["../../../node_modules/dayjs/locale/rw.js",8420],"./sd.js":["../../../node_modules/dayjs/locale/sd.js",9682],"./se.js":["../../../node_modules/dayjs/locale/se.js",2040],"./si.js":["../../../node_modules/dayjs/locale/si.js",6856],"./sk.js":["../../../node_modules/dayjs/locale/sk.js",8062],"./sl.js":["../../../node_modules/dayjs/locale/sl.js",9409],"./sq.js":["../../../node_modules/dayjs/locale/sq.js",1295],"./sr-cyrl.js":["../../../node_modules/dayjs/locale/sr-cyrl.js",4346],"./sr.js":["../../../node_modules/dayjs/locale/sr.js",7922],"./ss.js":["../../../node_modules/dayjs/locale/ss.js",9725],"./sv-fi.js":["../../../node_modules/dayjs/locale/sv-fi.js",3520],"./sv.js":["../../../node_modules/dayjs/locale/sv.js",4554],"./sw.js":["../../../node_modules/dayjs/locale/sw.js",6543],"./ta.js":["../../../node_modules/dayjs/locale/ta.js",3275],"./te.js":["../../../node_modules/dayjs/locale/te.js",148],"./tet.js":["../../../node_modules/dayjs/locale/tet.js",7243],"./tg.js":["../../../node_modules/dayjs/locale/tg.js",5814],"./th.js":["../../../node_modules/dayjs/locale/th.js",1254],"./tk.js":["../../../node_modules/dayjs/locale/tk.js",2953],"./tl-ph.js":["../../../node_modules/dayjs/locale/tl-ph.js",4270],"./tlh.js":["../../../node_modules/dayjs/locale/tlh.js",6655],"./tr.js":["../../../node_modules/dayjs/locale/tr.js",1371],"./tzl.js":["../../../node_modules/dayjs/locale/tzl.js",4929],"./tzm-latn.js":["../../../node_modules/dayjs/locale/tzm-latn.js",3347],"./tzm.js":["../../../node_modules/dayjs/locale/tzm.js",4889],"./ug-cn.js":["../../../node_modules/dayjs/locale/ug-cn.js",4540],"./uk.js":["../../../node_modules/dayjs/locale/uk.js",9134],"./ur.js":["../../../node_modules/dayjs/locale/ur.js",8964],"./uz-latn.js":["../../../node_modules/dayjs/locale/uz-latn.js",1871],"./uz.js":["../../../node_modules/dayjs/locale/uz.js",4106],"./vi.js":["../../../node_modules/dayjs/locale/vi.js",6257],"./x-pseudo.js":["../../../node_modules/dayjs/locale/x-pseudo.js",4092],"./yo.js":["../../../node_modules/dayjs/locale/yo.js",4905],"./zh-cn.js":["../../../node_modules/dayjs/locale/zh-cn.js",8104],"./zh-hk.js":["../../../node_modules/dayjs/locale/zh-hk.js",8620],"./zh-tw.js":["../../../node_modules/dayjs/locale/zh-tw.js",4434],"./zh.js":["../../../node_modules/dayjs/locale/zh.js",9457]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((()=>__webpack_require__.t(id,23)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="../../../node_modules/dayjs/locale lazy recursive ^\\.\\/.*\\.js$",module.exports=webpackAsyncContext}}]);