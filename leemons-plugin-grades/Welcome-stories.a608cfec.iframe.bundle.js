"use strict";(self.webpackChunkleemons_plugin_grades_frontend_react=self.webpackChunkleemons_plugin_grades_frontend_react||[]).push([[642],{"../../../node_modules/@mantine/core/esm/Box/Box.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var react=__webpack_require__("../../../node_modules/react/index.js"),extract_system_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/utils/extract-system-styles/extract-system-styles.js"),create_polymorphic_component=__webpack_require__("../../../node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js"),MantineProvider=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js"),use_css=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/use-css.js");const SYSTEM_PROPS={mt:"marginTop",mb:"marginBottom",ml:"marginLeft",mr:"marginRight",pt:"paddingTop",pb:"paddingBottom",pl:"paddingLeft",pr:"paddingRight"},NEGATIVE_VALUES=["-xs","-sm","-md","-lg","-xl"];function isValidSizeValue(size){return"string"==typeof size||"number"==typeof size}function getSizeValue(size,theme){return NEGATIVE_VALUES.includes(size)?-1*theme.fn.size({size:size.replace("-",""),sizes:theme.spacing}):theme.fn.size({size,sizes:theme.spacing})}function getSystemStyles(systemStyles,theme){const styles={};if(isValidSizeValue(systemStyles.p)){const value=getSizeValue(systemStyles.p,theme);styles.padding=value}if(isValidSizeValue(systemStyles.m)){const value=getSizeValue(systemStyles.m,theme);styles.margin=value}if(isValidSizeValue(systemStyles.py)){const value=getSizeValue(systemStyles.py,theme);styles.paddingTop=value,styles.paddingBottom=value}if(isValidSizeValue(systemStyles.px)){const value=getSizeValue(systemStyles.px,theme);styles.paddingLeft=value,styles.paddingRight=value}if(isValidSizeValue(systemStyles.my)){const value=getSizeValue(systemStyles.my,theme);styles.marginTop=value,styles.marginBottom=value}if(isValidSizeValue(systemStyles.mx)){const value=getSizeValue(systemStyles.mx,theme);styles.marginLeft=value,styles.marginRight=value}return Object.keys(SYSTEM_PROPS).forEach((property=>{isValidSizeValue(systemStyles[property])&&(styles[SYSTEM_PROPS[property]]=theme.fn.size({size:getSizeValue(systemStyles[property],theme),sizes:theme.spacing}))})),styles}function extractSx(sx,theme){return"function"==typeof sx?sx(theme):sx}function useSx(sx,systemProps,className){const theme=(0,MantineProvider.rZ)(),{css,cx}=(0,use_css.Z)();return Array.isArray(sx)?cx(className,css(getSystemStyles(systemProps,theme)),sx.map((partial=>css(extractSx(partial,theme))))):cx(className,css(extractSx(sx,theme)),css(getSystemStyles(systemProps,theme)))}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const _Box=(0,react.forwardRef)(((_a,ref)=>{var _b=_a,{className,component,style,sx}=_b,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_b,["className","component","style","sx"]);const{systemStyles,rest}=(0,extract_system_styles.x)(others),Element=component||"div";return react.createElement(Element,((a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a})({ref,className:useSx(sx,systemStyles,className),style},rest))}));_Box.displayName="@mantine/core/Box";const Box=(0,create_polymorphic_component.F)(_Box)},"../../../node_modules/@mantine/core/esm/Text/Text.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("../../../node_modules/react/index.js"),MantineProvider=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_polymorphic_component=__webpack_require__("../../../node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};function getTextDecoration({underline,strikethrough}){const styles=[];return underline&&styles.push("underline"),strikethrough&&styles.push("line-through"),styles.length>0?styles.join(" "):"none"}function getTextColor({theme,color,variant}){return"dimmed"===color?"dark"===theme.colorScheme?theme.colors.dark[2]:theme.colors.gray[6]:"string"==typeof color&&(color in theme.colors||color.split(".")[0]in theme.colors)?theme.fn.variant({variant:"filled",color}).background:"link"===variant?theme.colors[theme.primaryColor]["dark"===theme.colorScheme?4:7]:color||"inherit"}function getLineClamp(lineClamp){return"number"==typeof lineClamp?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:lineClamp,WebkitBoxOrient:"vertical"}:null}const Text_styles=(0,create_styles.k)(((theme,{color,variant,size,lineClamp,inline,inherit,underline,gradient,weight,transform,align,strikethrough,italic})=>{const colors=theme.fn.variant({variant:"gradient",gradient});return{root:__spreadValues((a=__spreadValues(__spreadValues(__spreadValues({},theme.fn.fontStyles()),theme.fn.focusStyles()),getLineClamp(lineClamp)),b={color:getTextColor({color,theme,variant}),fontFamily:inherit?"inherit":theme.fontFamily,fontSize:inherit||void 0===size?"inherit":theme.fn.size({size,sizes:theme.fontSizes}),lineHeight:inherit?"inherit":inline?1:theme.lineHeight,textDecoration:getTextDecoration({underline,strikethrough}),WebkitTapHighlightColor:"transparent",fontWeight:inherit?"inherit":weight,textTransform:transform,textAlign:align,fontStyle:italic?"italic":void 0},__defProps(a,__getOwnPropDescs(b))),theme.fn.hover("link"===variant&&void 0===underline?{textDecoration:"underline"}:void 0)),gradient:{backgroundImage:colors.background,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}};var a,b}));var Box=__webpack_require__("../../../node_modules/@mantine/core/esm/Box/Box.js"),Text_defProp=Object.defineProperty,Text_getOwnPropSymbols=Object.getOwnPropertySymbols,Text_hasOwnProp=Object.prototype.hasOwnProperty,Text_propIsEnum=Object.prototype.propertyIsEnumerable,Text_defNormalProp=(obj,key,value)=>key in obj?Text_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={variant:"text"},_Text=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Text",defaultProps,props),{className,size,weight,transform,color,align,variant,lineClamp,gradient,inline,inherit,underline,strikethrough,italic,classNames,styles,unstyled,span}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Text_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Text_getOwnPropSymbols)for(var prop of Text_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Text_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","size","weight","transform","color","align","variant","lineClamp","gradient","inline","inherit","underline","strikethrough","italic","classNames","styles","unstyled","span"]),{classes,cx}=Text_styles({variant,color,size,lineClamp,inline,inherit,underline,strikethrough,italic,weight,transform,align,gradient},{unstyled,name:"Text"});return react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))Text_hasOwnProp.call(b,prop)&&Text_defNormalProp(a,prop,b[prop]);if(Text_getOwnPropSymbols)for(var prop of Text_getOwnPropSymbols(b))Text_propIsEnum.call(b,prop)&&Text_defNormalProp(a,prop,b[prop]);return a})({ref,className:cx(classes.root,{[classes.gradient]:"gradient"===variant},className),component:span?"span":"div"},others))}));_Text.displayName="@mantine/core/Text";const Text=(0,create_polymorphic_component.F)(_Text)},"../../../node_modules/@mantine/styles/esm/theme/utils/extract-system-styles/extract-system-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>extractSystemStyles});var _filter_props_filter_props_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/utils/filter-props/filter-props.js"),__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};function extractSystemStyles(others){const _a=others,{m,mx,my,mt,mb,ml,mr,p,px,py,pt,pb,pl,pr}=_a,rest=__objRest(_a,["m","mx","my","mt","mb","ml","mr","p","px","py","pt","pb","pl","pr"]);return{systemStyles:(0,_filter_props_filter_props_js__WEBPACK_IMPORTED_MODULE_0__.L)({m,mx,my,mt,mb,ml,mr,p,px,py,pt,pb,pl,pr}),rest}}},"../../../node_modules/@mantine/styles/esm/tss/create-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>createStyles});var use_css=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/use-css.js"),MantineProvider=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js");function mergeClassNames({cx,classes,context,classNames,name,cache}){const contextClassNames=context.reduce(((acc,item)=>(Object.keys(item.classNames).forEach((key=>{"string"!=typeof acc[key]?acc[key]=`${item.classNames[key]}`:acc[key]=`${acc[key]} ${item.classNames[key]}`})),acc)),{});return Object.keys(classes).reduce(((acc,className)=>(acc[className]=cx(classes[className],contextClassNames[className],null!=classNames&&classNames[className],Array.isArray(name)?name.filter(Boolean).map((part=>`${(null==cache?void 0:cache.key)||"mantine"}-${part}-${className}`)).join(" "):name?`${(null==cache?void 0:cache.key)||"mantine"}-${name}-${className}`:null),acc)),{})}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};function createRef(refName){return`__mantine-ref-${refName||""}`}function getStyles(styles,theme,params){const extractStyles=stylesPartial=>"function"==typeof stylesPartial?stylesPartial(theme,params||{}):stylesPartial||{};return Array.isArray(styles)?styles.map((item=>extractStyles(item.styles))).reduce(((acc,item)=>(Object.keys(item).forEach((key=>{acc[key]?acc[key]=__spreadValues(__spreadValues({},acc[key]),item[key]):acc[key]=__spreadValues({},item[key])})),acc)),{}):extractStyles(styles)}function createStyles(input){const getCssObject="function"==typeof input?input:()=>input;return function useStyles(params,options){const theme=(0,MantineProvider.rZ)(),context=(0,MantineProvider.O2)(null==options?void 0:options.name),cache=(0,MantineProvider.T1)(),{css,cx}=(0,use_css.Z)(),cssObject=getCssObject(theme,params,createRef),componentStyles=getStyles(null==options?void 0:options.styles,theme,params),providerStyles=getStyles(context,theme,params),classes=Object.fromEntries(Object.keys(cssObject).map((key=>[key,cx({[css(cssObject[key])]:!(null==options?void 0:options.unstyled)},css(providerStyles[key]),css(componentStyles[key]))])));return{classes:mergeClassNames({cx,classes,context,classNames:null==options?void 0:options.classNames,name:null==options?void 0:options.name,cache}),cx,theme}}}},"../../../node_modules/@mantine/styles/esm/tss/use-css.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useCss});var clsx_m=__webpack_require__("../../../node_modules/@mantine/styles/node_modules/clsx/dist/clsx.m.js"),emotion_serialize_browser_esm=__webpack_require__("../../../node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("../../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js"),react=__webpack_require__("../../../node_modules/react/index.js");const defaultMantineEmotionCache=(0,__webpack_require__("../../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js").Z)({key:"mantine",prepend:!0});var MantineProvider=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js");var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;function getRef(args){let ref;if(1!==args.length)return{args,ref};const[arg]=args;if(!(arg instanceof Object))return{args,ref};if(!("ref"in arg))return{args,ref};ref=arg.ref;const argCopy=((a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a})({},arg);return delete argCopy.ref,{args:[argCopy],ref}}const{cssFactory}={cssFactory:function _cssFactory(params){const{cache}=params,css=(...styles)=>{const{ref,args}=getRef(styles),serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered);return(0,emotion_utils_browser_esm.My)(cache,serialized,!1),`${cache.key}-${serialized.name}${void 0===ref?"":` ${ref}`}`};return{css,cx:(...args)=>function merge(registered,css,className){const registeredStyles=[],rawClassName=(0,emotion_utils_browser_esm.fp)(registered,registeredStyles,className);return registeredStyles.length<2?className:rawClassName+css(registeredStyles)}(cache.registered,css,(0,clsx_m.Z)(args))}}};function useCss(){const cache=function useEmotionCache(){return(0,MantineProvider.T1)()||defaultMantineEmotionCache}();return function useGuaranteedMemo(fn,deps){const ref=(0,react.useRef)();return(!ref.current||deps.length!==ref.current.prevDeps.length||ref.current.prevDeps.map(((v,i)=>v===deps[i])).indexOf(!1)>=0)&&(ref.current={v:fn(),prevDeps:[...deps]}),ref.current.v}((()=>cssFactory({cache})),[cache])}},"../../../node_modules/@mantine/styles/node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function toVal(mix){var k,y,str="";if("string"==typeof mix||"number"==typeof mix)str+=mix;else if("object"==typeof mix)if(Array.isArray(mix))for(k=0;k<mix.length;k++)mix[k]&&(y=toVal(mix[k]))&&(str&&(str+=" "),str+=y);else for(k in mix)mix[k]&&(str&&(str+=" "),str+=k);return str}function __WEBPACK_DEFAULT_EXPORT__(){for(var tmp,x,i=0,str="";i<arguments.length;)(tmp=arguments[i++])&&(x=toVal(tmp))&&(str&&(str+=" "),str+=x);return str}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__})},"../../../node_modules/@mantine/utils/esm/create-polymorphic-component/create-polymorphic-component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function createPolymorphicComponent(component){return component}__webpack_require__.d(__webpack_exports__,{F:()=>createPolymorphicComponent})},"../../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./.storybook/Welcome/Welcome.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Welcome:()=>Welcome_stories_Welcome,__namedExportsOrder:()=>Welcome_stories_namedExportsOrder,default:()=>Welcome_stories});var react=__webpack_require__("../../../node_modules/react/index.js"),prop_types=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),MantineProvider=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};function getFontSize(size,element,theme){return void 0!==size?size in theme.headings.sizes?theme.headings.sizes[size].fontSize:size:theme.headings.sizes[element].fontSize}function getLineHeight(size,element,theme){return void 0!==size&&size in theme.headings.sizes?theme.headings.sizes[size].lineHeight:theme.headings.sizes[element].lineHeight}const Title_styles=(0,create_styles.k)(((theme,{element,weight,size,inline})=>{return{root:(a=__spreadValues({},theme.fn.fontStyles()),b={fontFamily:theme.headings.fontFamily,fontWeight:weight||theme.headings.sizes[element].fontWeight||theme.headings.fontWeight,fontSize:getFontSize(size,element,theme),lineHeight:inline?1:getLineHeight(size,element,theme),margin:0},__defProps(a,__getOwnPropDescs(b)))};var a,b}));var Text=__webpack_require__("../../../node_modules/@mantine/core/esm/Text/Text.js"),Title_defProp=Object.defineProperty,Title_getOwnPropSymbols=Object.getOwnPropertySymbols,Title_hasOwnProp=Object.prototype.hasOwnProperty,Title_propIsEnum=Object.prototype.propertyIsEnumerable,Title_defNormalProp=(obj,key,value)=>key in obj?Title_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={order:1},Title=(0,react.forwardRef)(((props,ref)=>{const _a=(0,MantineProvider.N4)("Title",defaultProps,props),{className,order,children,unstyled,size,weight,inline}=_a,others=((source,exclude)=>{var target={};for(var prop in source)Title_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&Title_getOwnPropSymbols)for(var prop of Title_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&Title_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","order","children","unstyled","size","weight","inline"]),{classes,cx}=Title_styles({element:`h${order}`,weight,size,inline},{name:"Title",unstyled});return[1,2,3,4,5,6].includes(order)?react.createElement(Text.x,((a,b)=>{for(var prop in b||(b={}))Title_hasOwnProp.call(b,prop)&&Title_defNormalProp(a,prop,b[prop]);if(Title_getOwnPropSymbols)for(var prop of Title_getOwnPropSymbols(b))Title_propIsEnum.call(b,prop)&&Title_defNormalProp(a,prop,b[prop]);return a})({component:`h${order}`,ref,className:cx(classes.root,className)},others),children):null}));Title.displayName="@mantine/core/Title";const TitleStyles=(0,create_styles.k)(((theme,_ref)=>{let{order,transform,color,highlighted}=_ref;const globalContent=theme.other?.global?.content,fontStyles=[];globalContent?.typo&&fontStyles.push(globalContent.typo.heading.xlg,globalContent.typo.heading.lg,globalContent.typo.heading.md,globalContent.typo.heading.sm,globalContent.typo.heading.xsm);const COLORS={primary:theme.colors.text01,secondary:theme.colors.text02,tertiary:theme.colors.text03,quartiary:theme.colors.text04,soft:theme.colors.text05,interactive:theme.colors.interactive01};let highlightProps={};return highlighted&&(highlightProps={display:"inline-block",boxShadow:`0 -0.9em 0 inset ${theme.colors.fatic05}`,padding:"0px 0.2rem",margin:"0px -0.2rem"}),{root:{...fontStyles[order-1]??{},textTransform:transform,color:COLORS[color]||theme.colors.text01,...highlightProps}}}));function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Title_Title=(0,react.forwardRef)(((_ref,ref)=>{let{className,order,color,transform,highlighted,...props}=_ref;const{classes,cx}=TitleStyles({order,color,transform,highlighted});return react.createElement(Title,_extends({},props,{ref,order,className:cx(classes.root,className)}))}));Title_Title.defaultProps={order:1,color:"primary",transform:"none",highlighted:!1},Title_Title.propTypes={order:prop_types_default().oneOf([1,2,3,4,5,6]),transform:prop_types_default().oneOf(["capitalize","uppercase","lowercase","none"]),color:prop_types_default().oneOf(["interactive","primary","secondary","tertiary","quartiary","soft"]),highlighted:prop_types_default().bool};const package_namespaceObject_i8="1.0.0";var jsx_runtime=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const Welcome=()=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Title_Title,{order:1,sx:_ref=>{let{colors}=_ref;return{color:colors.interactive01}},children:"Grades - Leemons Organisms"}),(0,jsx_runtime.jsx)(Title_Title,{order:2,sx:_ref2=>{let{colors}=_ref2;return{color:colors.text02}},children:`React v${package_namespaceObject_i8}`})]});Welcome.displayName="Welcome";Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome"};var lib=__webpack_require__("../../../node_modules/@mdx-js/react/lib/index.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"welcome",children:"Welcome"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Help us improve the documentation by providing feedback, asking questions on\nSlack, or updating the mdx files file on\n",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/leemonade/bubbles/tree/main/packages/components/",target:"_blank",rel:"nofollow noopener noreferrer",children:"GitHub"}),"."]})]})}const Welcome_stories={title:" Getting Started",component:Welcome,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}},Welcome_stories_Welcome=()=>(0,jsx_runtime.jsx)(Welcome,{});Welcome_stories_Welcome.displayName="Welcome",Welcome_stories_Welcome.parameters={...Welcome_stories_Welcome.parameters,docs:{...Welcome_stories_Welcome.parameters?.docs,source:{originalSource:"() => <Intro />",...Welcome_stories_Welcome.parameters?.docs?.source}}};const Welcome_stories_namedExportsOrder=["Welcome"];Welcome_stories_Welcome.__docgenInfo={description:"",methods:[],displayName:"Welcome"}}}]);