"use strict";(self.webpackChunkleemons_plugin_scores_frontend_react=self.webpackChunkleemons_plugin_scores_frontend_react||[]).push([[598,7830],{"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/react/jsx-runtime.js"),_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs"),_ScoresReviewerTable_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.stories.js");__webpack_require__("./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li"},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{title:"MDX/ScoresReviewerTable",of:_ScoresReviewerTable_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"scoresreviewertable",children:"ScoresReviewerTable"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/scores/ScoresReviewerTable",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#component-api",children:"Component API"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#references",children:"References"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"#feedback",children:"Feedback"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.sq,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"component-api",children:"Component API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.ZX,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Help us improve this component by providing feedback, asking questions on Slack, or updating this file on\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/edit/main/packages/components/scores/ScoresReviewerTable.mdx",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_leemons_leemons_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var _ScoresReviewerTable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.js"),_ScoresReviewerTable_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.constants.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const generateRandomSubjects=()=>{const activities=[];for(let i=1;i<=3;i++){let periodScores=[];for(let k=1;k<=4;k++){const shouldSkip=Math.random()>.2,isSubmitted=Math.random()>.2;periodScores.push({id:`p-0${k}`,name:(index=k-1,["1st","2nd","3th","Final"][index]),score:isSubmitted&&shouldSkip?Math.floor(10*Math.random()):void 0,isSubmitted})}activities.push({id:`a-0${i}`,periodScores})}var index;return activities},__WEBPACK_DEFAULT_EXPORT__={title:"leemons/Scores/ScoresReviewerTable",parameters:{component:_ScoresReviewerTable__WEBPACK_IMPORTED_MODULE_1__.x,design:{type:"figma"}},argTypes:{onChange:{action:"onChange"},onDataChange:{action:"onDataChange"}}},Template=_ref=>{let{useLetters,grades,...props}=_ref;const gradesToUse=useLetters?grades:grades.map((_ref2=>{let{number}=_ref2;return{number}}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ScoresReviewerTable__WEBPACK_IMPORTED_MODULE_1__.x,{...props,grades:gradesToUse})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={..._ScoresReviewerTable_constants__WEBPACK_IMPORTED_MODULE_2__.tQ,useLetters:!1,labels:{students:"Estudiante",noActivity:"No entregado",avgScore:"Weighted score",gradingTasks:"Grading tasks",customScore:"Custom"},grades:[{number:0,letter:"F"},{number:.667,letter:"D-"},{number:1,letter:"D"},{number:1.333,letter:"D+"},{number:1.667,letter:"C-"},{number:2,letter:"C"},{number:2.333,letter:"C+"},{number:2.667,letter:"B-"},{number:3,letter:"B"},{number:3.333,letter:"B+"},{number:3.667,letter:"A-"},{number:4,letter:"A"}],subjects:[{id:"a-01",name:"Geografia e Historia",group:"1001",icon:"https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg",color:"green",periods:[{id:"p-01",name:"1st"},{id:"p-02",name:"2nd"},{id:"p-03",name:"3th"},{id:"p-04",name:"Final",allowChange:!0}]},{id:"a-02",name:"Frances",group:"5902",icon:"https://upload.wikimedia.org/wikipedia/commons/5/5d/White_flag_icon.svg",color:"red",periods:[{id:"p-01",name:"1st"},{id:"p-02",name:"2nd"},{id:"p-03",name:"3th"},{id:"p-04",name:"Final",allowChange:!0,weight:.8}]},{id:"a-03",name:"Computer Science",group:"3107",icon:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Sideways_Arrow_Icon.svg",color:"purple",periods:[{id:"p-01",name:"1st"},{id:"p-02",name:"2nd"},{id:"p-03",name:"3th"},{id:"p-04",name:"Final",allowChange:!0}]}],value:[{id:"s-01",name:"Michael",surname:"Scott",image:"https://areajugones.sport.es/wp-content/uploads/2021/05/the-office-2.jpg",subjects:generateRandomSubjects(),customScore:8.73,allowCustomChange:!0},{id:"s-02",name:"Dwight",surname:"Schrute",image:"https://pbs.twimg.com/profile_images/1434184964866723852/M5c8uqF7_400x400.jpg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-03",name:"Jim",surname:"Halpert",image:"https://en.meming.world/images/en/thumb/6/6d/Jim_Halpert_Smiling_Through_Blinds.jpg/300px-Jim_Halpert_Smiling_Through_Blinds.jpg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-04",name:"Pam",surname:"Beesly",image:"https://gcdn.lanetaneta.com/wp-content/uploads/2019/09/The-Office-10-veces-que-Pam-recibió-un-trato-mucho-780x405.jpg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-05",name:"Ryan",surname:"Howard",image:"https://vader.news/__export/1616206384907/sites/gadgets/img/2021/03/19/ryan_howard.jpg_1962491361.jpg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-06",name:"Kelly",surname:"Kapoor",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-07",name:"Angela",surname:"Martin",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-08",name:"Oscar",surname:"Martinez",image:"https://poptv.orange.es/wp-content/uploads/sites/3/2020/08/oscar-nuncc83ez.jpeg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-09",name:"Phyllis",surname:"Lapin",image:"https://cinematicos.net/wp-content/uploads/l-intro-1624653656.jpg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-10",name:"Stanley",surname:"Hudson",image:"https://www.cinepremiere.com.mx/wp-content/uploads/2020/07/stanley-the-office.jpg",subjects:generateRandomSubjects(),allowCustomChange:!0},{id:"s-11",name:"Meredith",surname:"Palmer",subjects:generateRandomSubjects(),allowCustomChange:!0}]},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  useLetters,\n  grades,\n  ...props\n}) => {\n  const gradesToUse = useLetters ? grades : grades.map(({\n    number\n  }) => {\n    return {\n      number\n    };\n  });\n  return <ScoresReviewerTable {...props} grades={gradesToUse} />;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/Tables/CommonTable.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>CommonTableStyles});const CommonTableStyles=(0,__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js").k)(((theme,_ref)=>{let{overFlowLeft,overFlowRight,hideCustom}=_ref;return{root:{display:"flex",position:"relative",overflow:"hidden",width:"100%"},table:{width:"100%",overflowX:"auto",minWidth:"650px !important",backgroundColor:theme.colors.mainWhite,display:"flex","::-webkit-scrollbar":{display:"block",overflow:"auto",width:"calc(100% - 200px)",height:6},"::-webkit-scrollbar-track":{marginLeft:220,marginRight:300,backgroundColor:theme.colors.ui02},"::-webkit-scrollbar-thumb":{backgroundColor:"#999999",cursor:"pointer",borderRadius:4}},tableHeaderCell:{maxHeight:120,"&:first-of-type":{maxWidth:296},backgroundColor:theme.colors.mainWhite},tableBody:{borderTop:"2px solid #F2F2F2"},bodyRow:{borderBottom:"1px solid #F2F2F2","& > div:first-of-type":{}},shadowBox:{zIndex:4,width:218,position:"absolute",left:0,top:0,bottom:-6,boxShadow:overFlowLeft&&"16px 0px 16px rgba(35, 43, 60, 0.05), 50px 0px 30px rgba(51, 63, 86, 0.03)",transition:"box-shadow 0.2s ease-in-out",pointerEvents:"none"},bodyCell:{"&:first-of-type":{maxWidth:296},transition:"margin-left 0.2s ease-in-out"},students:{padding:16,width:"100%",height:"100%",display:"flex",alignItems:"flex-end"},studentsCells:{padding:3,borderRight:"1px solid #F2F2F2",paddingLeft:10,backgroundColor:theme.colors.mainWhite,zIndex:100},rightBody:{position:"sticky",right:0,backgroundColor:theme.colors.mainWhite,width:"300px",minWidth:"300px",display:"flex",flexDirection:"column",boxShadow:overFlowRight&&"-16px 0px 16px rgba(35, 43, 60, 0.05), -50px 0px 30px rgba(51, 63, 86, 0.03)",transition:"box-shadow 0.2s ease-in-out"},rightBodyHeader:{height:120,borderBottom:"2px solid #F2F2F2"},headerAvg:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:28,gap:4},columnHeader:{display:"inline-block",width:hideCustom?"100%":"50%",textAlign:"center",verticalAlign:"middle",paddingTop:24},rightBodyContent:{flex:1},contentRow:{display:"flex",height:47,boxSizing:"border-box",borderBottom:"1px solid #F2F2F2"},studentInfo:{width:hideCustom?"100%":"50%",display:"flex",alignItems:"center",justifyContent:"center"},separator:{width:4,height:"100%",backgroundColor:theme.colors.ui03,transform:"translateX(-2px)"}}}))},"./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T1:()=>SCORES_REVIEWER_TABLE_PROP_TYPES,tQ:()=>SCORES_REVIEWER_TABLE_DEFAULT_PROPS});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const SCORES_REVIEWER_TABLE_VALUE=prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,surname:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,image:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,subjects:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,score:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,isSubmitted:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool})),customScore:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,allowCustomChange:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool}),SCORES_REVIEWER_TABLE_DEFAULT_PROPS={value:[],hideCustom:!1},SCORES_REVIEWER_TABLE_PROP_TYPES={grades:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({number:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,letter:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})),subjects:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,group:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,periods:prop_types__WEBPACK_IMPORTED_MODULE_0___default().array})),value:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(SCORES_REVIEWER_TABLE_VALUE),labels:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({students:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,noActivity:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,avgScore:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,gradingTasks:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,customScore:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string}),hideCustom:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool}},"./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>ScoresReviewerTable});var react=__webpack_require__("../../../node_modules/react/index.js"),use_resize_observer=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-resize-observer/use-resize-observer.js"),Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),Text=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Text/Text.js"),UserDisplayItem=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/informative/UserDisplayItem/UserDisplayItem.js"),react_table=__webpack_require__("../../../node_modules/react-table/index.js"),lodash=__webpack_require__("../../../node_modules/lodash/lodash.js"),motion=__webpack_require__("../../../node_modules/framer-motion/dist/es/render/dom/motion.mjs"),build=__webpack_require__("../../../node_modules/react-table-sticky/build/index.js"),use_click_outside=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.js"),Select=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/Select/Select.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js");const ScoreCellStyles=(0,create_styles.k)(((theme,_ref)=>{let{isEditing,allowChange}=_ref;return{root:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid transparent",borderColor:isEditing&&theme.colors.interactive01d},inputContainer:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",textAlign:"center",input:{height:46,borderRadius:0}},expandIcon:{height:"100%",width:40,backgroundColor:theme.colors.interactive01v1,button:{height:"100%",width:"100%"},svg:{color:theme.colors.interactive01}}}}));var prop_types=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);const SCORES_CELL_PROP_TYPES={value:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),noActivity:prop_types_default().string,grades:prop_types_default().arrayOf(prop_types_default().shape({number:prop_types_default().number,letter:prop_types_default().string}))};var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const ScoreCell=_ref=>{let{value,allowChange,grades,row,column,setValue,onDataChange,isCustom}=_ref;const[isEditing,setIsEditing]=(0,react.useState)(!1),useNumbers=!grades.some((grade=>grade.letter)),[inputContainer,setInputContainer]=(0,react.useState)(),selectRef=(0,use_click_outside.O)((()=>setIsEditing(!1)),null,[inputContainer]),renderValue=value=>(0,lodash.isNil)(value)?"-":"string"==typeof value||value%1==0?value:value.toFixed(2),onClickHandler=()=>{isEditing||setIsEditing(!0)},onChangeHandler=score=>{const rowId=isCustom?row:row.original.id,columnId=isCustom?column:column.id;(0,lodash.isFunction)(setValue)&&setValue((oldValue=>oldValue.map((student=>{const newStudentSubjects=student.subjects.map((subject=>{const newPeriodScores=subject.periodScores.map((period=>(columnId!==`${subject.id}-${period.name}`||rowId!==student.id||(period.score=useNumbers?parseFloat(score):grades.find((_ref2=>{let{letter}=_ref2;return letter===score}))?.number),period)));return subject.periodScores=newPeriodScores,subject}));return{...student,subjects:newStudentSubjects}})))),(0,lodash.isFunction)(onDataChange)&&onDataChange({rowId,columnId,value:score})};(0,react.useEffect)((()=>{selectRef.current&&selectRef.current.click()}),[isEditing]);const{classes,cx}=ScoreCellStyles({isEditing,allowChange},{name:"ScoreCell"});return(0,jsx_runtime.jsx)(Box.xu,{className:classes.root,children:(()=>{const data=grades.map((_ref3=>{let{letter,number}=_ref3;return letter||number.toString()}));return(0,jsx_runtime.jsx)(Box.xu,{className:classes.inputContainer,ref:setInputContainer,onClick:onClickHandler,children:allowChange?isEditing?(0,jsx_runtime.jsx)(Select.P,{value,data,onChange:onChangeHandler,onDropdownClose:()=>setIsEditing(!1),style:{flex:1},ref:selectRef}):(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",children:renderValue(value)}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",style:{flex:1},children:renderValue(value)})})})})()})};ScoreCell.displayName="ScoreCell",ScoreCell.defaultProps={},ScoreCell.propTypes=SCORES_CELL_PROP_TYPES,ScoreCell.__docgenInfo={description:"",methods:[],displayName:"ScoreCell",composes:["./ScoreCell.constants"]};var use_hover=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-hover/use-hover.js"),Stack=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Stack/Stack.js"),ImageLoader=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/misc/ImageLoader/ImageLoader.js"),TextClamp=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/TextClamp/TextClamp.js");const SubjectHeaderStyles=(0,create_styles.k)(((theme,_ref)=>{let{color,isFirst,isLast}=_ref;return{root:{width:"100%",height:"100%",display:"flex",borderLeft:(isFirst||isLast||!isFirst&&!isLast)&&"1px solid #EDEFF5",borderRight:isLast&&"1px solid #EDEFF5"},header:{height:68,maxHeight:68,width:"100%",textAlign:"center"},title:{paddingTop:16},iconWrapper:{height:24,width:24,borderRadius:"50%",backgroundColor:color,display:"flex",justifyContent:"center",alignItems:"center",img:{filter:"brightness(0) invert(1)"}}}})),SUBJECT_HEADER_PROP_TYPES={id:prop_types_default().string,name:prop_types_default().string,deadline:prop_types_default().oneOfType([prop_types_default().instanceOf(Date),prop_types_default().string]),completionPercentage:prop_types_default().string,locale:prop_types_default().string},SubjectHeader=_ref=>{let{id,name,group,icon,color,isFirst,isLast}=_ref;const{ref,hovered}=(0,use_hover.X)(),{classes}=SubjectHeaderStyles({hovered,color,isFirst,isLast},{name:"SubjectHeader"});return(0,jsx_runtime.jsx)(Box.xu,{ref,className:classes.root,children:(0,jsx_runtime.jsx)(Box.xu,{className:classes.header,children:(0,jsx_runtime.jsxs)(Stack.Kq,{alignItems:"center",spacing:3,className:classes.title,children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.iconWrapper,children:(0,jsx_runtime.jsx)(ImageLoader.S,{src:icon,height:16,width:16,forceImage:!0})}),(0,jsx_runtime.jsx)(TextClamp.xR,{lines:2,children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",strong:!0,children:`${name} - ${group}`})})]})})})};SubjectHeader.displayName="SubjectHeader",SubjectHeader.defaultProps={},SubjectHeader.propTypes=SUBJECT_HEADER_PROP_TYPES,SubjectHeader.__docgenInfo={description:"",methods:[],displayName:"SubjectHeader",composes:["./SubjectHeader.constants"]};const PeriodHeaderStyles=(0,create_styles.k)(((theme,_ref)=>{let{isFirst,isLast,index,length}=_ref;const isFirstColumn=0===index;return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",borderLeft:(isFirst&&isFirstColumn||isLast&&isFirstColumn||isFirstColumn&&!isFirst&&!isLast)&&"1px solid #EDEFF5",borderRight:isLast&&index===length-1&&"1px solid #EDEFF5",height:50,maxHeight:50}}})),PERIOD_HEADER_PROP_TYPES={id:prop_types_default().string,name:prop_types_default().string},PeriodHeader=_ref=>{let{name,isFirst,isLast,index,length}=_ref;const{classes,cx}=PeriodHeaderStyles({isFirst,isLast,index,length},{name:"PeriodHeader"});return(0,jsx_runtime.jsx)(Box.xu,{className:classes.root,children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",stronger:!0,children:name})})};PeriodHeader.displayName="PeriodHeader",PeriodHeader.defaultProps={},PeriodHeader.propTypes=PERIOD_HEADER_PROP_TYPES,PeriodHeader.__docgenInfo={description:"",methods:[],displayName:"PeriodHeader",composes:["./PeriodHeader.constants"]};var CommonTable_styles=__webpack_require__("./src/components/Tables/CommonTable.styles.js");const ScoresReviewerTableStyles=(0,create_styles.k)(((theme,_ref)=>{let{}=_ref;return{tableHeaderCell:{maxHeight:120,backgroundColor:theme.colors.mainWhite,"&:first-of-type":{maxWidth:296,position:"sticky",left:"0px",zIndex:3}}}}));var ScoresReviewerTable_constants=__webpack_require__("./src/components/Tables/ScoresReviewerTable/ScoresReviewerTable.constants.js");const ScoresReviewerTable=_ref=>{let{grades,subjects,value:_value,labels,locale,onChange,onDataChange,from,to,hideCustom,...props}=_ref;const{ref:tableRef}=(0,use_resize_observer.h)(null),[value,setValue]=(0,react.useState)(_value),useNumbers=!grades.some((grade=>grade.letter)),[overFlowLeft,setOverFlowLeft]=(0,react.useState)(!1),[overFlowRight,setOverFlowRight]=(0,react.useState)(!1),{classes:commonClasses}=(0,CommonTable_styles.O)({overFlowLeft,overFlowRight,hideCustom},{name:"CommonTable"}),{classes:reviewerClasses}=ScoresReviewerTableStyles({},{name:"ScoresReviewerTable"}),classes={...commonClasses,...reviewerClasses},findGradeLetter=score=>grades.find((_ref2=>{let{number}=_ref2;return number===score}))?.letter,getSubjects=studentSubjects=>{const activitiesObject={};return studentSubjects.forEach((_ref3=>{let{id,periodScores}=_ref3;periodScores.forEach((period=>{activitiesObject[`${id}-${period.name}`]={score:useNumbers?period.score:findGradeLetter(period.score)}}))})),activitiesObject},getColumns=()=>{const columns=[];return columns.push({accessor:"student",width:220,sticky:"left",Header:(0,jsx_runtime.jsx)(Box.xu,{className:classes.students,children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",size:"xs",stronger:!0,children:labels.students})}),Cell:_ref6=>{let{value}=_ref6;return(0,jsx_runtime.jsx)(Box.xu,{className:classes.studentsCells,children:(0,jsx_runtime.jsx)(UserDisplayItem.XI,{name:value.name,surnames:value.surname,avatar:value.image,noBreak:!0})})}}),subjects.forEach(((subject,index)=>{const isFirst=0===index,isLast=index===subjects.length-1,subjectColumns=((subjectId,subjectPeriods,isFirst,isLast)=>{const columns=subjectPeriods.map(((period,index)=>({Header:period.name,accessor:`${subjectId}-${period.name}`,Header:(0,jsx_runtime.jsx)(PeriodHeader,{isFirst,isLast,index,length:subjectPeriods.length,...period}),Cell:_ref5=>{let{value,row,column}=_ref5;return(0,jsx_runtime.jsx)(ScoreCell,{value:value.score,noActivity:labels.noActivity,isSubmitted:value.isSubmitted,allowChange:period.allowChange,grades,row,column,setValue,onDataChange})}})));return columns})(subject.id,subject.periods,isFirst,isLast);columns.push({id:subject.id,width:300,columns:subjectColumns,Header:()=>(0,jsx_runtime.jsx)(SubjectHeader,{...subject,locale,isFirst,isLast})})})),columns},columns=(0,react.useMemo)((()=>getColumns()),[value,subjects,labels,locale,useNumbers]),data=(0,react.useMemo)((()=>(()=>{const data=[];return value.forEach((_ref7=>{let{id,name,surname,image,subjects}=_ref7;data.push({student:{name,surname,image},id,...getSubjects(subjects)})})),data})()),[value,subjects,labels,locale,useNumbers]),{getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=(0,react_table.useTable)({columns,data},react_table.useFlexLayout,build.useSticky);(0,react.useEffect)((()=>{setValue(_value)}),[..._value]),(0,react.useEffect)((()=>{(0,lodash.isFunction)(onChange)&&onChange(value)}),[value]),(0,react.useEffect)((()=>{if(!tableRef.current)return;const isOverflowing=tableRef.current.scrollWidth>tableRef.current.clientWidth;isOverflowing&&isOverflowing!==overFlowRight?setOverFlowRight(!0):isOverflowing!==overFlowRight&&setOverFlowRight(!1)}),[tableRef.current?.scrollWidth]);const spring={type:"spring",stiffness:100,damping:18};return(0,jsx_runtime.jsxs)(Box.xu,{className:classes.root,children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.shadowBox}),(0,jsx_runtime.jsxs)(Box.xu,{ref:tableRef,...getTableProps(),className:classes.table,onScroll:()=>{const{scrollWidth,clientWidth,scrollLeft}=tableRef.current;setOverFlowLeft(scrollLeft>0),setOverFlowRight(scrollLeft+clientWidth!==scrollWidth)},children:[(0,jsx_runtime.jsxs)(Box.xu,{style:{flex:1},children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.tableHeader,children:headerGroups.map((headerGroup=>(0,jsx_runtime.jsx)(Box.xu,{...headerGroup.getHeaderGroupProps(),className:classes.tableHeaderRow,children:headerGroup.headers.map((column=>(0,jsx_runtime.jsx)(motion.E.div,{layout:!0,transition:spring,...column.getHeaderProps([{style:column.style}]),className:classes.tableHeaderCell,children:column.render("Header")})))})))}),(0,jsx_runtime.jsx)(Box.xu,{...getTableBodyProps(),className:classes.tableBody,children:rows.map((row=>(prepareRow(row),(0,jsx_runtime.jsx)(Box.xu,{...row.getRowProps(),className:classes.bodyRow,children:row.cells.map((cell=>(0,jsx_runtime.jsx)(motion.E.div,{layout:!0,transition:spring,...cell.getCellProps([{style:{...cell.column.style,background:"white"}}]),className:classes.bodyCell,children:cell.render("Cell")})))}))))})]}),(0,jsx_runtime.jsxs)(Box.xu,{className:classes.rightBody,children:[(0,jsx_runtime.jsxs)(Box.xu,{className:classes.rightBodyHeader,children:[(0,jsx_runtime.jsxs)(Box.xu,{className:classes.headerAvg,children:[(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",stronger:!0,transform:"uppercase",children:labels.avgScore}),(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",size:"xs",children:`${new Date(from).toLocaleDateString(locale)} - ${new Date(to).toLocaleDateString(locale)}`})]}),(0,jsx_runtime.jsx)(Box.xu,{className:classes.columnHeader,children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",stronger:!0,transform:"uppercase",size:"xs",children:labels.gradingTasks})}),!hideCustom&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.columnHeader,children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",stronger:!0,transform:"uppercase",size:"xs",children:labels.customScore})})]}),(0,jsx_runtime.jsx)(Box.xu,{className:classes.rightBodyContent,children:value.map((_ref4=>{let{id,subjects:studentSubjects,customScore,allowCustomChange}=_ref4;const avgScore=(studentSubjects=>{let weightedScore=0;studentSubjects.forEach((studentSubject=>{const{score:lastScore}=studentSubject.periodScores.at(-1);weightedScore+=(lastScore||0)*(subjects.find((subject=>subject.id===studentSubject.id)).periods.at(-1)?.weight||1)}));let sumOfWeights=0;subjects.forEach((subject=>sumOfWeights+=subject.periods.at(-1).weight||1));const weightedAverage=(weightedScore/sumOfWeights).toFixed(2);return useNumbers?weightedAverage:findGradeLetter(Math.round(weightedAverage))})(studentSubjects);return(0,jsx_runtime.jsxs)(Box.xu,{className:classes.contentRow,children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.separator}),(0,jsx_runtime.jsx)(Box.xu,{className:classes.studentInfo,children:(0,jsx_runtime.jsx)(Text.xv,{color:"primary",role:"productive",children:avgScore})}),!hideCustom&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.studentInfo,children:(0,jsx_runtime.jsx)(ScoreCell,{value:isNaN(customScore)?avgScore:customScore,allowChange:allowCustomChange,grades,row:id,column:"customScore",isCustom:!0,onDataChange})})]},id)}))})]})]})]})};ScoresReviewerTable.displayName="ScoresReviewerTable",ScoresReviewerTable.defaultProps=ScoresReviewerTable_constants.tQ,ScoresReviewerTable.propTypes=ScoresReviewerTable_constants.T1,ScoresReviewerTable.__docgenInfo={description:"",methods:[],displayName:"ScoresReviewerTable",composes:["./ScoresReviewerTable.constants"]}}}]);