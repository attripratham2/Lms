"use strict";(self.webpackChunkleemons_plugin_leebrary_frontend_react=self.webpackChunkleemons_plugin_leebrary_frontend_react||[]).push([[6467],{"./src/components/Library.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{FI:()=>LIBRARY_CARD_DEADLINE_PROP_TYPES,dM:()=>LIBRARY_CARD_MENU_ITEM,jo:()=>LIBRARY_CARD_DEADLINE_SEVERITY,v8:()=>LIBRARYCARD_ASSIGMENT_ROLES});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const validateURL=(props,propName,componentName)=>{let url;const errorString=`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`;try{url=new URL(props.icon)}catch(error){return new Error(errorString)}if("http:"!==url.protocol&&"https:"!==url.protocol)return new Error(errorString)},LIBRARYCARD_ASSIGMENT_ROLES=["teacher","student"],LIBRARY_CARD_DEADLINE_SEVERITY=["low","medium","high"],LIBRARY_CARD_DEADLINE_PROP_TYPES={labels:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({title:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,new:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,deadline:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any}),icon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().element,(props,propName,componentName)=>validateURL(props,propName,componentName)]),locale:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,deadline:prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date),direction:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(["vertical","horizontal"]),parentHovered:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,disableHover:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool,role:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(LIBRARYCARD_ASSIGMENT_ROLES),severity:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOf(LIBRARY_CARD_DEADLINE_SEVERITY)},LIBRARY_CARD_MENU_ITEM={icon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().element,(props,propName,componentName)=>validateURL(props,propName,componentName)]),label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,rightSection:prop_types__WEBPACK_IMPORTED_MODULE_0___default().element,disabled:prop_types__WEBPACK_IMPORTED_MODULE_0___default().bool}},"./src/components/LibraryCard/LibraryCard.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hi:()=>LIBRARYCARD_VARIANTS,V4:()=>SUBJECT_PROPS,W_:()=>LIBRARYCARD_ASSIGMENT,nl:()=>ASSET_PROPS,ou:()=>LIBRARY_CARD_PROP_TYPES,t9:()=>LIBRARY_CARD_DEFAULT_PROPS});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_Library_constants__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Library.constants.js");const LIBRARYCARD_VARIANTS=["media","task","assigment","bookmark","curriculum","feedback","3d"],LIBRARYCARD_ASSIGMENT={completed:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,subsmission:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,total:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,subject:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}),avgTime:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,avgAttempts:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number,activityType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,grade:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number},ASSET_PROPS=prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,fileType:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,fileExtension:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,tagline:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,metadata:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().any,value:prop_types__WEBPACK_IMPORTED_MODULE_1___default().any})),created:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,prop_types__WEBPACK_IMPORTED_MODULE_1___default().instanceOf(Date)]),version:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,cover:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,url:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,tags:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),category:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,role:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["owner","editor","commentor","viewer"])}),SUBJECT_PROPS=prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,color:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,icon:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string}),LIBRARY_CARD_DEFAULT_PROPS={menuItems:[],dashboard:!1,role:"teacher",isNew:!1,shadow:!0,locale:"en-GB",fullHeight:!1,excludeMetadatas:[],isLoading:!1},LIBRARY_CARD_PROP_TYPES={asset:ASSET_PROPS,assigment:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(LIBRARYCARD_ASSIGMENT),variant:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,deadlineProps:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(_Library_constants__WEBPACK_IMPORTED_MODULE_0__.FI),subject:SUBJECT_PROPS,action:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,onAction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().func,locale:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,menuItems:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape(_Library_constants__WEBPACK_IMPORTED_MODULE_0__.dM)),dashboard:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,isNew:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,role:prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(_Library_constants__WEBPACK_IMPORTED_MODULE_0__.v8),badge:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,shadow:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,variantIcon:prop_types__WEBPACK_IMPORTED_MODULE_1___default().any,variantTitle:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,fullHeight:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool,excludeMetadatas:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),providerData:prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({published:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool}),isLoading:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool}},"./src/components/LibraryCardFooter/LibraryCardFooter.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>LIBRARY_CARD_FOOTER_PROP_TYPES,g:()=>LIBRARY_CARD_FOOTER_DEFAULT_PROPS});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const LIBRARY_CARD_FOOTER_DEFAULT_PROPS={locale:"en-GB"},LIBRARY_CARD_FOOTER_PROP_TYPES={fileType:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,fileExtension:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,created:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().instanceOf(Date)]),action:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,onAction:prop_types__WEBPACK_IMPORTED_MODULE_0___default().func,locale:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,variant:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,variantTitle:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,variantIcon:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any}},"./src/components/LibraryCardFooter/LibraryCardFooter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>LibraryCardFooter});__webpack_require__("../../../node_modules/react/index.js"),__webpack_require__("../../../node_modules/lodash/lodash.js");var Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),Text=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Text/Text.js"),FileIcon=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/misc/FileIcon/FileIcon.js"),AvatarsGroup=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/informative/AvatarsGroup/AvatarsGroup.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),theme_mixins=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/theme.mixins.js");const LibraryCardFooterStyles=(0,create_styles.k)(((theme,_ref)=>{let{color}=_ref;return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:38,width:"100%",bottom:0,padding:`${(0,theme_mixins.Q1)(16)}`,paddingTop:"0px",position:"absolute",backgroundColor:theme.colors.mainWhite},date:{color:theme.colors.text04,fontSize:(0,theme_mixins.Q1)(11)},FileIconRoot:{...(0,theme_mixins.Gi)(theme.fontSizes[2]),display:"inline-flex",alignItems:"center",color},FileIconLabel:{...theme.other.cardLibrary.content.typo.sm,color:theme.other.cardLibrary.content.color.muted,paddingLeft:(0,theme_mixins.Q1)(8)},fileIconContainer:{display:"flex",alignItems:"center"},fileLabel:{paddingLeft:(0,theme_mixins.Q1)(8),color:"#878D96",fontSize:(0,theme_mixins.Q1)(12)},avatars:{marginRight:(0,theme_mixins.Q1)(12)}}}));var LibraryCardFooter_constants=__webpack_require__("./src/components/LibraryCardFooter/LibraryCardFooter.constants.js"),jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const LibraryCardFooter=_ref=>{let{fileType,fileExtension,canAccess,classesCanAccess,action,onAction,className,style,variant,variantTitle,variantIcon}=_ref;const{classes,cx}=LibraryCardFooterStyles({action,size:12,color:"#636D7D"},{name:"LibraryCardFooter"}),variantIconLabel=(variantTitle??fileType??variant)?.charAt(0)?.toUpperCase()+(variantTitle??fileType??variant)?.slice(1);return(0,jsx_runtime.jsxs)(Box.xu,{className:cx(classes.root,className),style,children:[!action&&variantIcon?(0,jsx_runtime.jsxs)(Box.xu,{className:classes.FileIconRoot,children:[variantIcon,variantIconLabel&&(0,jsx_runtime.jsx)(Text.xv,{className:classes.FileIconLabel,children:variantIconLabel})]}):(0,jsx_runtime.jsxs)(Box.xu,{className:classes.fileIconContainer,children:[(0,jsx_runtime.jsx)(FileIcon.aA,{size:24,fileType:fileType||variant,fileExtension,color:"#878D96",hideExtension:!0}),(0,jsx_runtime.jsx)(Text.xv,{className:classes.fileLabel,children:variantIconLabel})]}),(0,jsx_runtime.jsx)(Box.xu,{className:classes.avatars,children:(0,jsx_runtime.jsx)(AvatarsGroup.U,{size:"sm",data:canAccess,moreThanUsersAsMulti:2,classesData:classesCanAccess,numberFromClassesAndData:!0,customAvatarMargin:14,limit:2,zIndexInverted:!0})})]})};LibraryCardFooter.displayName="LibraryCardFooter",LibraryCardFooter.propTypes=LibraryCardFooter_constants.W,LibraryCardFooter.__docgenInfo={description:"",methods:[],displayName:"LibraryCardFooter",composes:["./LibraryCardFooter.constants"]}},"./src/components/LibraryCardFooter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j7:()=>_LibraryCardFooter__WEBPACK_IMPORTED_MODULE_0__.j});var _LibraryCardFooter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/LibraryCardFooter/LibraryCardFooter.js");__webpack_require__("./src/components/LibraryCardFooter/LibraryCardFooter.constants.js")},"./src/components/LibraryDetailContent/LibraryDetailContent.constants.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS,f:()=>LIBRARY_DETAIL_CONTENT_PROP_TYPES});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const LIBRARY_DETAIL_CONTENT_DEFAULT_PROPS={},LIBRARY_DETAIL_CONTENT_PROP_TYPES={id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,fileType:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,fileExtension:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,description:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,metadata:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any,value:prop_types__WEBPACK_IMPORTED_MODULE_0___default().any})),tags:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),excludeMetadatas:prop_types__WEBPACK_IMPORTED_MODULE_0___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)}},"./src/components/LibraryDetailContent/LibraryDetailContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>LibraryDetailContent});var react=__webpack_require__("../../../node_modules/react/index.js"),lodash=__webpack_require__("../../../node_modules/lodash/lodash.js");function useClipboard({timeout=2e3}={}){const[error,setError]=(0,react.useState)(null),[copied,setCopied]=(0,react.useState)(!1),[copyTimeout,setCopyTimeout]=(0,react.useState)(null);return{copy:valueToCopy=>{"clipboard"in navigator?navigator.clipboard.writeText(valueToCopy).then((()=>{return value=!0,clearTimeout(copyTimeout),setCopyTimeout(setTimeout((()=>setCopied(!1)),timeout)),void setCopied(value);var value})).catch((err=>setError(err))):setError(new Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{setCopied(!1),setError(null),clearTimeout(copyTimeout)},error,copied}}var Stack=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Stack/Stack.js"),Box=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),Paper=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Paper/Paper.js"),ImageLoader=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/misc/ImageLoader/ImageLoader.js"),Text=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Text/Text.js"),ActionButton=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/ActionButton/ActionButton.js"),Badge=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/informative/Badge/Badge.js"),esm=__webpack_require__("../../../node_modules/@bubbles-ui/icons/outline/esm/index.js"),TextClamp=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/TextClamp/TextClamp.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),theme_mixins=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/theme.mixins.js");const LibraryCardContentStyles=(0,create_styles.k)(((theme,_ref)=>{let{fullHeight}=_ref;return{root:{flex:fullHeight&&1,display:"flex",flexDirection:"column"},mainContainer:{padding:`${(0,theme_mixins.Q1)(14)} ${(0,theme_mixins.Q1)(16)}`,flex:1},description:{color:theme.colors.text02},tagsContainer:{display:"flex",gap:(0,theme_mixins.Q1)(10),alignItems:"center",flexWrap:"wrap",padding:`${(0,theme_mixins.Q1)(8)} ${(0,theme_mixins.Q1)(16)}`},label:{color:theme.colors.text05},value:{color:theme.colors.text02}}}));var prop_types=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),Library_constants=__webpack_require__("./src/components/Library.constants.js"),LibraryCard_constants=__webpack_require__("./src/components/LibraryCard/LibraryCard.constants.js");const LIBRARY_CARD_CONTENT_PROP_TYPES={tagline:prop_types_default().string,description:prop_types_default().string,metadata:prop_types_default().arrayOf(prop_types_default().shape({label:prop_types_default().any,value:prop_types_default().any})),tags:prop_types_default().arrayOf(prop_types_default().string),locale:prop_types_default().string,variant:prop_types_default().oneOf(LibraryCard_constants.Hi),assigment:prop_types_default().shape(LibraryCard_constants.W_),truncated:prop_types_default().bool,fullHeight:prop_types_default().bool,role:prop_types_default().oneOf(Library_constants.v8)};var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const getAverageTime=seconds=>{if(seconds<=59)return`${seconds}s`;const minutes=Math.floor(seconds/60),secondsLeft=seconds%60;return 0===secondsLeft?`${minutes}m`:`${minutes}m ${secondsLeft}s`},getDomain=url=>(url.split("//")[1].split("/")[0]||"").replace("www.",""),LibraryCardContent=_ref=>{let{tagline,description,tags,programName,metadata,locale,variant,assigment,icon,url,truncated,fullHeight,role,...props}=_ref;const{classes,cx}=LibraryCardContentStyles({fullHeight},{name:"LibraryCardContent"}),getBadgeSeverity=completedOrGrade=>{const result=completedOrGrade/("teacher"===role?1:10);return result<=.2?"error":result<=.5?"warning":result>.5?"success":void 0},getBadge=(0,react.useCallback)((()=>{if("assigment"===variant&&assigment)return"teacher"===role?(0,jsx_runtime.jsx)(Badge.Ct,{label:`${Math.trunc(100*assigment.completed)}%`,severity:getBadgeSeverity(assigment.completed),closable:!1,radius:"default"}):"student"===role?(0,jsx_runtime.jsx)(Badge.Ct,{closable:!1,severity:getBadgeSeverity(assigment.grade),radius:"default",label:assigment.grade}):void 0}),[assigment,role,assigment?.completed]);return(0,jsx_runtime.jsx)(Box.xu,{className:classes.root,children:(()=>{switch(variant){case"assigment":return(0,jsx_runtime.jsx)(Box.xu,{className:classes.mainContainer,children:(0,lodash.isEmpty)(assigment)?(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",spacing:2,fullWidth:!0,children:[!(0,lodash.isEmpty)(tagline)&&(0,jsx_runtime.jsx)(TextClamp.xR,{lines:truncated?2:10,children:(0,jsx_runtime.jsx)(Text.xv,{role:"productive",color:"primary",children:tagline})}),(0,lodash.isEmpty)(description)?(0,jsx_runtime.jsx)(Stack.Kq,{direction:"column",spacing:1,fullWidth:!0,children:metadata?.map(((_ref2,index)=>{let{label,value}=_ref2;return(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:label}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.value,children:value})]},`${label} ${value} ${index}`)}))}):(0,jsx_runtime.jsx)(TextClamp.xR,{lines:truncated?3:20,children:(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.description,children:description})})]}):(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",spacing:1,fullWidth:!0,children:["teacher"===role&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[((0,lodash.isEmpty)(assigment?.labels)||!(0,lodash.isEmpty)(assigment.labels?.subject))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.subject||"Subject"}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",weight:600,children:assigment.subject.name})]}),((0,lodash.isEmpty)(assigment.labels)||!(0,lodash.isEmpty)(assigment.labels?.submission))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.submission||"Submission"}),(0,jsx_runtime.jsxs)(Box.xu,{children:[getBadge(),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",style:{marginLeft:4},children:`(${assigment.submission}/${assigment.total})`})]})]}),((0,lodash.isEmpty)(assigment.labels)||!(0,lodash.isEmpty)(assigment.labels?.avgTime))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.avgTime||"Average Time"}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",children:getAverageTime(assigment.avgTime)})]}),((0,lodash.isEmpty)(assigment.labels)||!(0,lodash.isEmpty)(assigment.labels?.avgAttempts))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.avgAttempts||"Average Attempts"}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",children:assigment.avgAttempts})]})]}),"student"===role&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[((0,lodash.isEmpty)(assigment?.labels)||!(0,lodash.isEmpty)(assigment.labels?.subject))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.subject||"Subject"}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",weight:600,children:assigment.subject.name})]}),((0,lodash.isEmpty)(assigment?.labels)||!(0,lodash.isEmpty)(assigment.labels?.grade))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.grade||"Grade"}),(0,jsx_runtime.jsx)(Box.xu,{children:getBadge()})]}),((0,lodash.isEmpty)(assigment?.labels)||!(0,lodash.isEmpty)(assigment.labels?.score))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.score||"Score"}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",style:{marginLeft:4},children:`${assigment.submission}/${assigment.total}`})]}),((0,lodash.isEmpty)(assigment?.labels)||!(0,lodash.isEmpty)(assigment.labels?.activityType))&&(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:assigment.labels?.activityType||"Activity type"}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",children:assigment.activityType})]})]})]})});case"curriculum":return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.mainContainer,children:(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",spacing:2,fullWidth:!0,children:[!(0,lodash.isEmpty)(tagline)&&(0,jsx_runtime.jsx)(TextClamp.xR,{lines:truncated?2:10,children:(0,jsx_runtime.jsx)(Text.xv,{role:"productive",color:"primary",children:tagline})}),!(0,lodash.isEmpty)(metadata)&&(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsxs)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:[metadata[0].value," - ",metadata[1].value]})}),!(0,lodash.isEmpty)(description)&&(0,jsx_runtime.jsx)(TextClamp.xR,{lines:truncated?3:20,children:(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.description,children:description})})]})}),programName?(0,jsx_runtime.jsx)(Box.xu,{className:classes.tagsContainer,children:(0,jsx_runtime.jsx)(Badge.Ct,{label:programName,color:"stroke",size:"xs",closable:!1,radius:"rounded"})}):null,tags?.length>0&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.tagsContainer,children:tags.map(((tag,index)=>(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Badge.Ct,{label:tag,size:"xs",closable:!1,radius:"default"})},`${tag} ${index}`)))})]});default:return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Box.xu,{className:classes.mainContainer,children:(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",spacing:2,fullWidth:!0,children:["bookmark"===variant&&!(0,lodash.isEmpty)(url)&&(0,jsx_runtime.jsxs)(Stack.Kq,{spacing:2,alignItems:"center",children:[!(0,lodash.isEmpty)(icon)&&(0,jsx_runtime.jsx)(ImageLoader.S,{src:icon,width:20,height:20,radius:"4px"}),(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Text.xv,{size:"xs",children:getDomain(url)})})]}),!(0,lodash.isEmpty)(tagline)&&(0,jsx_runtime.jsx)(TextClamp.xR,{lines:truncated?2:10,children:(0,jsx_runtime.jsx)(Text.xv,{role:"productive",color:"primary",children:tagline})}),(0,lodash.isEmpty)(description)?(0,jsx_runtime.jsx)(Stack.Kq,{direction:"column",spacing:1,fullWidth:!0,children:metadata?.map(((_ref3,index)=>{let{label,value}=_ref3;return(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.label,children:label}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.value,children:value})]},`${label} ${value} ${index}`)}))}):(0,jsx_runtime.jsx)(TextClamp.xR,{lines:truncated?3:20,children:(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",className:classes.description,children:description})})]})}),programName?(0,jsx_runtime.jsx)(Box.xu,{className:classes.tagsContainer,children:(0,jsx_runtime.jsx)(Badge.Ct,{label:programName,color:"stroke",size:"xs",closable:!1,radius:"rounded"})}):null,tags?.length>0&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.tagsContainer,children:tags.map(((tag,index)=>(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Badge.Ct,{label:tag,size:"xs",closable:!1,radius:"default"})},`${tag} ${index}`)))})]})}})()})};LibraryCardContent.displayName="LibraryCardContent",LibraryCardContent.defaultProps={metadata:[],tags:[],variant:"media",badgeColor:"solid",truncated:!0,locale:"en-GB",fullHeight:!1,role:"teacher"},LibraryCardContent.propTypes=LIBRARY_CARD_CONTENT_PROP_TYPES,LibraryCardContent.__docgenInfo={description:"",methods:[],displayName:"LibraryCardContent",composes:["./LibraryCardContent.constants"]};var LibraryCardFooter=__webpack_require__("./src/components/LibraryCardFooter/index.js");const LibraryDetailContentStyles=(0,create_styles.k)(((theme,_ref)=>{let{}=_ref;return{root:{flex:1},lowerContent:{flex:1,backgroundColor:theme.colors.ui03,padding:`${(0,theme_mixins.Q1)(8)} ${(0,theme_mixins.Q1)(8)} ${(0,theme_mixins.Q1)(8)} ${(0,theme_mixins.Q1)(8)}`},tagsContainer:{minHeight:38,display:"flex",gap:(0,theme_mixins.Q1)(10),alignItems:"center",flexWrap:"wrap",padding:`${(0,theme_mixins.Q1)(8)} ${(0,theme_mixins.Q1)(8)}`}}}));var LibraryDetailContent_constants=__webpack_require__("./src/components/LibraryDetailContent/LibraryDetailContent.constants.js");const LibraryDetailContent=_ref=>{let{description,metadata,tags,url,icon,fileType,fileExtension,variant,variantIcon,variantTitle,excludeMetadatas,onCopy=()=>{},...props}=_ref;const{classes,cx}=LibraryDetailContentStyles({},{name:"LibraryDetailContent"}),clipboard=useClipboard({timeout:2e3});return(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",className:classes.root,children:[(0,jsx_runtime.jsx)(LibraryCardContent,{description,truncated:!1}),(0,jsx_runtime.jsx)(LibraryCardFooter.j7,{variantIcon,variantTitle,variant,fileType,fileExtension}),"bookmark"===variant&&(0,jsx_runtime.jsx)(Box.xu,{sx:theme=>({padding:theme.spacing[2],backgroundColor:theme.colors.mainWhite}),children:(0,jsx_runtime.jsx)(Paper.Xk,{bordered:!0,padding:2,radius:"sm",shadow:"none",fullWidth:!0,children:(0,jsx_runtime.jsxs)(Stack.Kq,{fullWidth:!0,spacing:2,children:[(0,jsx_runtime.jsx)(Box.xu,{skipFlex:!0,children:(0,jsx_runtime.jsx)(ImageLoader.S,{src:icon,height:20,width:20,radius:4})}),(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",display:"grid",children:[(0,jsx_runtime.jsx)(Text.xv,{size:"xs",strong:!0,children:getDomain(url)}),(0,jsx_runtime.jsx)(Text.xv,{size:"xs",role:"productive",truncated:!0,children:url})]})}),(0,jsx_runtime.jsx)(Box.xu,{skipFlex:!0,children:(0,jsx_runtime.jsx)(ActionButton.Kk,{icon:(0,jsx_runtime.jsx)(esm.NAN,{height:16,width:16,onClick:()=>{clipboard.copy(url),onCopy()}}),tooltip:clipboard.copied?props.labels?.copied||"Copied":props.labels?.copy||"Copy"})})]})})}),(0,jsx_runtime.jsxs)(Stack.Kq,{direction:"column",className:classes.lowerContent,children:[!(0,lodash.isEmpty)(metadata)&&(0,jsx_runtime.jsx)(LibraryCardContent,{metadata:metadata.filter((item=>!excludeMetadatas.map((e=>e.toLowerCase())).includes(item.label.toLowerCase())))}),tags?.length>0&&(0,jsx_runtime.jsx)(Box.xu,{className:classes.tags,children:(0,jsx_runtime.jsx)(Box.xu,{className:classes.tagsContainer,children:tags.map(((tag,index)=>(0,jsx_runtime.jsx)(Box.xu,{children:(0,jsx_runtime.jsx)(Badge.Ct,{label:tag,size:"md",closable:!1,radius:"default",color:"stroke"})},`${tag} ${index}`)))})})]})]})};LibraryDetailContent.displayName="LibraryDetailContent",LibraryDetailContent.defaultProps=LibraryDetailContent_constants.O,LibraryDetailContent.propTypes=LibraryDetailContent_constants.f,LibraryDetailContent.__docgenInfo={description:"",methods:[],displayName:"LibraryDetailContent",props:{onCopy:{defaultValue:{value:"() => {}",computed:!1},required:!1}},composes:["./LibraryDetailContent.constants"]}}}]);