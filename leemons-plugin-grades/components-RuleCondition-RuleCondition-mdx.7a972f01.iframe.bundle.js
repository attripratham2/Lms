"use strict";(self.webpackChunkleemons_plugin_grades_frontend_react=self.webpackChunkleemons_plugin_grades_frontend_react||[]).push([[196],{"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/RuleCondition/RuleCondition.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js"),_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs"),_RuleCondition_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/RuleCondition/RuleCondition.stories.js");__webpack_require__("./src/components/RuleCondition/RuleCondition.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"MDX/RuleCondition",of:_RuleCondition_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"rulecondition",children:"RuleCondition"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/leemons/RuleCondition",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#references",children:"References"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Help us improve this component by providing feedback, asking questions on Slack, or updating this file on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/edit/main/packages/components/leemons/RuleCondition.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/RuleCondition/RuleCondition.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js"),_RuleCondition__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/RuleCondition/RuleCondition.js"),_ProgramRules__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ProgramRules/index.js"),uuid__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/components/RuleCondition/RuleCondition.mdx"),__webpack_require__("../../../node_modules/uuid/dist/esm-browser/v4.js")),react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"leemons/AcademicRules/RuleCondition",parameters:{component:_RuleCondition__WEBPACK_IMPORTED_MODULE_1__.QJ,design:{type:"figma"}},argTypes:{}},Template=_ref=>{let{children,...props}=_ref;const uuid=(0,uuid__WEBPACK_IMPORTED_MODULE_5__.Z)(),[data,setData]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({name:"",program:"",grade:"",group:{operator:_ProgramRules__WEBPACK_IMPORTED_MODULE_2__.Dg[0].value,conditions:[{id:(0,uuid__WEBPACK_IMPORTED_MODULE_5__.Z)(),source:"",sourceIds:[],data:"",operator:"",target:0}]}}),[edited,setEdited]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[logicOperator,setLogicOperator]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({label:"AND",value:"and"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.Z5,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.bK,{droppableId:uuid,children:(provided,snapshot)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{...provided.droppableProps,ref:provided.innerRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_RuleCondition__WEBPACK_IMPORTED_MODULE_1__.QJ,{data,setData,edited,setEdited,error,setError,logicOperator,setLogicOperator,group:data.group,condition:data.group.conditions[0],...props,children}),provided.placeholder]})})})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={..._RuleCondition__WEBPACK_IMPORTED_MODULE_1__.SJ,program:{label:"High School",value:"highSchool"},draggableId:"1",sources:[{label:"Program",value:"program"},{label:"Course",value:"course"},{label:"Knowledge",value:"knowledge"},{label:"Subject",value:"subject"},{label:"Subject-type",value:"subjectType"},{label:"Subject-group",value:"subjectGroup"}],dataTypes:[{label:"Media",value:"gpa"},{label:"Credits per program",value:"cpp"},{label:"Credits per course",value:"cpc"},{label:"Credits per course group",value:"cpcg"},{label:"Grade",value:"grade"},{label:"Enrolled",value:"enrolled"},{label:"Credits",value:"credits"}],operators:[{label:"Greater than",value:"gt"},{label:"Greater than or equal",value:"gte"},{label:"Equal",value:"eq"},{label:"Less than or equal",value:"lte"},{label:"Less than",value:"lt"},{label:"Not equal",value:"neq"},{label:"Contains",value:"contains"}],courses:[{label:"Course1",value:"course1"},{label:"Course2",value:"course2"},{label:"Course3",value:"course3"},{label:"Course4",value:"course4"},{label:"Course5",value:"course5"}],knowledges:[{label:"English",value:"english"},{label:"Math",value:"math"},{label:"Science",value:"science"},{label:"History",value:"history"},{label:"Sports",value:"sports"}],subjects:[{label:"Subject1",value:"subject1"},{label:"Subject2",value:"subject2"},{label:"Subject3",value:"subject3"},{label:"Subject4",value:"subject4"},{label:"Subject5",value:"subject5"}],subjectTypes:[{label:"Type1",value:"type1"},{label:"Type2",value:"type2"},{label:"Type3",value:"type3"},{label:"Type4",value:"type4"},{label:"Type5",value:"type5"}],subjectGroups:[{label:"Group1",value:"group1"},{label:"Group2",value:"group2"},{label:"Group3",value:"group3"},{label:"Group4",value:"group4"},{label:"Group5",value:"group5"}],logicOperator:{label:"AND",value:"and"},uuid:(0,uuid__WEBPACK_IMPORTED_MODULE_5__.Z)(),index:0,grades:[{label:"A (4.0)",value:"4"},{label:"A- (3.66)",value:"3.6"},{label:"B+ (3.33)",value:"3.33"},{label:"B (3.0)",value:"3"},{label:"B- (2.66)",value:"2.66"},{label:"C+ (2.33)",value:"2.33"},{label:"C (2.0)",value:"2"},{label:"C- (1.66)",value:"1.66"},{label:"D+ (1.33)",value:"1.33"},{label:"D (1.0)",value:"1,"},{label:"D- (0.66)",value:"0.66"},{label:"F (0.33)",value:"0.33"}],labels:{where:"Where",menuLabels:{remove:"remove"}},placeholders:{selectItem:"Select item"}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => {\n  const uuid = uuidv4();\n  const [data, setData] = useState({\n    name: '',\n    program: '',\n    grade: '',\n    group: {\n      operator: LOGIC_OPERATORS[0].value,\n      conditions: [{\n        id: uuidv4(),\n        source: '',\n        sourceIds: [],\n        data: '',\n        operator: '',\n        target: 0\n      }]\n    }\n  });\n  const [edited, setEdited] = useState([]);\n  const [error, setError] = useState(false);\n  const [logicOperator, setLogicOperator] = useState({\n    label: 'AND',\n    value: 'and'\n  });\n  return <DragDropContext>\n      <Droppable droppableId={uuid}>\n        {(provided, snapshot) => <div {...provided.droppableProps} ref={provided.innerRef}>\n            <RuleCondition data={data} setData={setData} edited={edited} setEdited={setEdited} error={error} setError={setError} logicOperator={logicOperator} setLogicOperator={setLogicOperator} group={data.group} condition={data.group.conditions[0]} {...props}>\n              {children}\n            </RuleCondition>\n            {provided.placeholder}\n          </div>}\n      </Droppable>\n    </DragDropContext>;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]}}]);