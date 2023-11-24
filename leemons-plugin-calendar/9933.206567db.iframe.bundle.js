"use strict";(self.webpackChunkleemons_plugin_calendar_frontend_react=self.webpackChunkleemons_plugin_calendar_frontend_react||[]).push([[9933],{"../../../node_modules/@bubbles-ui/components/es/form/Select/Select.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>Select_Select});var react=__webpack_require__("../../../node_modules/react/index.js"),esm=__webpack_require__("../../../node_modules/@bubbles-ui/icons/outline/esm/index.js"),use_scroll_into_view=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-scroll-into-view/use-scroll-into-view.js"),use_uncontrolled=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js"),use_did_update=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-did-update/use-did-update.js"),use_merged_ref=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js"),get_default_z_index=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/utils/get-default-z-index/get-default-z-index.js"),group_options=__webpack_require__("../../../node_modules/@mantine/utils/esm/group-options/group-options.js"),SelectScrollArea=__webpack_require__("../../../node_modules/@mantine/core/esm/Select/SelectScrollArea/SelectScrollArea.js"),DefaultItem=__webpack_require__("../../../node_modules/@mantine/core/esm/Select/DefaultItem/DefaultItem.js"),get_select_right_section_props=__webpack_require__("../../../node_modules/@mantine/core/esm/Select/SelectRightSection/get-select-right-section-props.js"),SelectItems=__webpack_require__("../../../node_modules/@mantine/core/esm/Select/SelectItems/SelectItems.js"),SelectPopover=__webpack_require__("../../../node_modules/@mantine/core/esm/Select/SelectPopover/SelectPopover.js");var create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js");const Select_styles=(0,create_styles.k)((()=>({input:{"&:not(:disabled)":{cursor:"pointer","&::selection":{backgroundColor:"transparent"}}}})));var use_input_props=__webpack_require__("../../../node_modules/@mantine/core/esm/Input/use-input-props.js"),Input=__webpack_require__("../../../node_modules/@mantine/core/esm/Input/Input.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b));const defaultProps={required:!1,size:"sm",shadow:"sm",itemComponent:DefaultItem.A,transition:"fade",transitionDuration:0,initiallyOpened:!1,filter:function defaultFilter(value,item){return item.label.toLowerCase().trim().includes(value.toLowerCase().trim())},maxDropdownHeight:220,searchable:!1,clearable:!1,limit:1/0,disabled:!1,creatable:!1,shouldCreate:function defaultShouldCreate(query,data){return!!query&&!data.some((item=>item.label.toLowerCase()===query.toLowerCase()))},selectOnBlur:!1,switchDirectionOnFlip:!1,filterDataOnExactSearchMatch:!1,zIndex:(0,get_default_z_index.w)("popover"),clearButtonTabIndex:0,positionDependencies:[],dropdownPosition:"flip"},Select=(0,react.forwardRef)(((props,ref)=>{const _a=(0,use_input_props.k)("Select",defaultProps,props),{inputProps,wrapperProps,shadow,data,value,defaultValue,onChange,itemComponent,onKeyDown,onBlur,onFocus,transition,transitionDuration,initiallyOpened,transitionTimingFunction,unstyled,classNames,styles,filter,maxDropdownHeight,searchable,clearable,nothingFound,clearButtonLabel,limit,disabled,onSearchChange,searchValue,rightSection,rightSectionWidth,creatable,getCreateLabel,shouldCreate,selectOnBlur,onCreate,dropdownComponent,onDropdownClose,onDropdownOpen,withinPortal,switchDirectionOnFlip,zIndex,name,dropdownPosition,allowDeselect,placeholder,filterDataOnExactSearchMatch,clearButtonTabIndex,form,positionDependencies,readOnly}=_a,others=((source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["inputProps","wrapperProps","shadow","data","value","defaultValue","onChange","itemComponent","onKeyDown","onBlur","onFocus","transition","transitionDuration","initiallyOpened","transitionTimingFunction","unstyled","classNames","styles","filter","maxDropdownHeight","searchable","clearable","nothingFound","clearButtonLabel","limit","disabled","onSearchChange","searchValue","rightSection","rightSectionWidth","creatable","getCreateLabel","shouldCreate","selectOnBlur","onCreate","dropdownComponent","onDropdownClose","onDropdownOpen","withinPortal","switchDirectionOnFlip","zIndex","name","dropdownPosition","allowDeselect","placeholder","filterDataOnExactSearchMatch","clearButtonTabIndex","form","positionDependencies","readOnly"]),{classes,cx,theme}=Select_styles(),[dropdownOpened,_setDropdownOpened]=(0,react.useState)(initiallyOpened),[hovered,setHovered]=(0,react.useState)(-1),inputRef=(0,react.useRef)(),itemsRefs=(0,react.useRef)({}),[direction,setDirection]=(0,react.useState)("column"),isColumn="column"===direction,{scrollIntoView,targetRef,scrollableRef}=(0,use_scroll_into_view.g)({duration:0,offset:5,cancelable:!1,isList:!0}),isDeselectable=void 0===allowDeselect?clearable:allowDeselect,setDropdownOpened=opened=>{if(dropdownOpened!==opened){_setDropdownOpened(opened);const handler=opened?onDropdownOpen:onDropdownClose;"function"==typeof handler&&handler()}},isCreatable=creatable&&"function"==typeof getCreateLabel;let createLabel=null;const formattedData=data.map((item=>"string"==typeof item?{label:item,value:item}:item)),sortedData=(0,group_options.j)({data:formattedData}),[_value,handleChange,controlled]=(0,use_uncontrolled.C)({value,defaultValue,finalValue:null,onChange}),selectedValue=sortedData.find((item=>item.value===_value)),[inputValue,setInputValue]=(0,use_uncontrolled.C)({value:searchValue,defaultValue:(null==selectedValue?void 0:selectedValue.label)||"",finalValue:void 0,onChange:onSearchChange}),handleSearchChange=val=>{setInputValue(val),searchable&&"function"==typeof onSearchChange&&onSearchChange(val)};(0,react.useEffect)((()=>{const newSelectedValue=sortedData.find((item=>item.value===_value));newSelectedValue?handleSearchChange(newSelectedValue.label):isCreatable&&_value||handleSearchChange("")}),[_value]),(0,react.useEffect)((()=>{!selectedValue||searchable&&dropdownOpened||handleSearchChange(selectedValue.label)}),[null==selectedValue?void 0:selectedValue.label]);const handleItemSelect=item=>{if(!readOnly)if(isDeselectable&&(null==selectedValue?void 0:selectedValue.value)===item.value)handleChange(null),setDropdownOpened(!1);else{if(item.creatable&&"function"==typeof onCreate){const createdItem=onCreate(item.value);null!=createdItem&&handleChange("string"==typeof createdItem?createdItem:createdItem.value)}else handleChange(item.value);controlled||handleSearchChange(item.label),setHovered(-1),setDropdownOpened(!1),inputRef.current.focus()}},filteredData=function filterData({data,searchable,limit,searchValue,filter,value,filterDataOnExactSearchMatch}){if(!searchable)return data;const selected=null!=value&&data.find((item=>item.value===value))||null;if(selected&&!filterDataOnExactSearchMatch&&(null==selected?void 0:selected.label)===searchValue)return data;const result=[];for(let i=0;i<data.length&&(filter(searchValue,data[i])&&result.push(data[i]),!(result.length>=limit));i+=1);return result}({data:sortedData,searchable,limit,searchValue:inputValue,filter,filterDataOnExactSearchMatch,value:_value});isCreatable&&shouldCreate(inputValue,filteredData)&&(createLabel=getCreateLabel(inputValue),filteredData.push({label:inputValue,value:inputValue,creatable:!0}));const getNextIndex=(index,nextItem,compareFn)=>{let i=index;for(;compareFn(i);)if(i=nextItem(i),!filteredData[i].disabled)return i;return index};(0,use_did_update.l)((()=>{setHovered(-1)}),[inputValue]);const selectedItemIndex=_value?filteredData.findIndex((el=>el.value===_value)):0,shouldShowDropdown=!readOnly&&(filteredData.length>0?dropdownOpened:dropdownOpened&&!!nothingFound),handlePrevious=()=>{setHovered((current=>{var _a2;const nextIndex=getNextIndex(current,(index=>index-1),(index=>index>0));return targetRef.current=itemsRefs.current[null==(_a2=filteredData[nextIndex])?void 0:_a2.value],shouldShowDropdown&&scrollIntoView({alignment:isColumn?"start":"end"}),nextIndex}))},handleNext=()=>{setHovered((current=>{var _a2;const nextIndex=getNextIndex(current,(index=>index+1),(index=>index<filteredData.length-1));return targetRef.current=itemsRefs.current[null==(_a2=filteredData[nextIndex])?void 0:_a2.value],shouldShowDropdown&&scrollIntoView({alignment:isColumn?"end":"start"}),nextIndex}))},scrollSelectedItemIntoView=()=>window.setTimeout((()=>{var _a2;targetRef.current=itemsRefs.current[null==(_a2=filteredData[selectedItemIndex])?void 0:_a2.value],scrollIntoView({alignment:isColumn?"end":"start"})}),0);(0,use_did_update.l)((()=>{shouldShowDropdown&&scrollSelectedItemIntoView()}),[shouldShowDropdown]);return react.createElement(Input.I.Wrapper,__spreadProps(__spreadValues({},wrapperProps),{__staticSelector:"Select"}),react.createElement(SelectPopover.v,{opened:shouldShowDropdown,transition,transitionDuration,shadow:"sm",withinPortal,__staticSelector:"Select",onDirectionChange:setDirection,switchDirectionOnFlip,zIndex,dropdownPosition,positionDependencies,classNames,styles,unstyled},react.createElement(SelectPopover.v.Target,null,react.createElement("div",{role:"combobox","aria-haspopup":"listbox","aria-owns":shouldShowDropdown?`${inputProps.id}-items`:null,"aria-controls":inputProps.id,"aria-expanded":shouldShowDropdown,onMouseLeave:()=>setHovered(-1),tabIndex:-1},react.createElement("input",{type:"hidden",name,value:_value||"",form,disabled}),react.createElement(Input.I,__spreadValues(__spreadProps(__spreadValues(__spreadValues({autoComplete:"off",type:"search"},inputProps),others),{ref:(0,use_merged_ref.Y)(ref,inputRef),onKeyDown:event=>{switch("function"==typeof onKeyDown&&onKeyDown(event),event.key){case"ArrowUp":event.preventDefault(),dropdownOpened?isColumn?handlePrevious():handleNext():(setHovered(selectedItemIndex),setDropdownOpened(!0),scrollSelectedItemIntoView());break;case"ArrowDown":event.preventDefault(),dropdownOpened?isColumn?handleNext():handlePrevious():(setHovered(selectedItemIndex),setDropdownOpened(!0),scrollSelectedItemIntoView());break;case"Home":if(!searchable){event.preventDefault(),dropdownOpened||setDropdownOpened(!0);const firstItemIndex=filteredData.findIndex((item=>!item.disabled));setHovered(firstItemIndex),shouldShowDropdown&&scrollIntoView({alignment:isColumn?"end":"start"})}break;case"End":if(!searchable){event.preventDefault(),dropdownOpened||setDropdownOpened(!0);const lastItemIndex=filteredData.map((item=>!!item.disabled)).lastIndexOf(!1);setHovered(lastItemIndex),shouldShowDropdown&&scrollIntoView({alignment:isColumn?"end":"start"})}break;case"Escape":event.preventDefault(),setDropdownOpened(!1),setHovered(-1);break;case" ":searchable||(event.preventDefault(),filteredData[hovered]&&dropdownOpened?handleItemSelect(filteredData[hovered]):(setDropdownOpened(!0),setHovered(selectedItemIndex),scrollSelectedItemIntoView()));break;case"Enter":searchable||event.preventDefault(),filteredData[hovered]&&dropdownOpened&&(event.preventDefault(),handleItemSelect(filteredData[hovered]))}},__staticSelector:"Select",value:inputValue,placeholder,onChange:event=>{readOnly||(handleSearchChange(event.currentTarget.value),clearable&&""===event.currentTarget.value&&handleChange(null),setHovered(-1),setDropdownOpened(!0))},"aria-autocomplete":"list","aria-controls":shouldShowDropdown?`${inputProps.id}-items`:null,"aria-activedescendant":hovered>=0?`${inputProps.id}-${hovered}`:null,onMouseDown:()=>{readOnly||(setDropdownOpened(!dropdownOpened),_value&&!dropdownOpened&&setHovered(selectedItemIndex))},onBlur:event=>{"function"==typeof onBlur&&onBlur(event);const selected=sortedData.find((item=>item.value===_value));selectOnBlur&&filteredData[hovered]&&dropdownOpened&&handleItemSelect(filteredData[hovered]),handleSearchChange((null==selected?void 0:selected.label)||""),setDropdownOpened(!1)},onFocus:event=>{"function"==typeof onFocus&&onFocus(event),searchable&&setDropdownOpened(!0)},readOnly:!searchable||readOnly,disabled,"data-mantine-stop-propagation":shouldShowDropdown,name:null,classNames:__spreadProps(__spreadValues({},classNames),{input:cx({[classes.input]:!searchable},null==classNames?void 0:classNames.input)})}),(0,get_select_right_section_props.o)({theme,rightSection,rightSectionWidth,styles,size:inputProps.size,shouldClear:clearable&&!!selectedValue,clearButtonLabel,onClear:()=>{var _a2;readOnly||(handleChange(null),controlled||handleSearchChange(""),null==(_a2=inputRef.current)||_a2.focus())},error:wrapperProps.error,clearButtonTabIndex,disabled,readOnly}))))),react.createElement(SelectPopover.v.Dropdown,{component:dropdownComponent||SelectScrollArea.r,maxHeight:maxDropdownHeight,direction,id:inputProps.id,innerRef:scrollableRef,__staticSelector:"Select",classNames,styles},react.createElement(SelectItems.j,{data:filteredData,hovered,classNames,styles,isItemSelected:val=>val===_value,uuid:inputProps.id,__staticSelector:"Select",onItemHover:setHovered,onItemSelect:handleItemSelect,itemsRefs,itemComponent,size:inputProps.size,nothingFound,creatable:isCreatable&&!!createLabel,createLabel,"aria-label":wrapperProps.label,unstyled}))))}));Select.displayName="@mantine/core/Select";var lodash=__webpack_require__("../../../node_modules/lodash/lodash.js"),prop_types=__webpack_require__("../../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),InputWrapper_constants=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/InputWrapper/InputWrapper.constants.js");const SELECT_SIZES=InputWrapper_constants.LQ,SELECT_ORIENTATIONS=InputWrapper_constants.LZ,SELECT_DROPDOWN_POSITIONS=["bottom","top","flip"],SELECT_DEFAULT_PROPS={size:SELECT_SIZES[1],orientation:"vertical",autoComplete:"off",readOnly:!1,variant:"default",autoSelectOneOption:!1,dropdownPosition:SELECT_DROPDOWN_POSITIONS[2],withinPortal:!0},SELECT_PROP_TYPES={label:prop_types_default().string,description:prop_types_default().string,placeholder:prop_types_default().string,data:prop_types_default().any,required:prop_types_default().bool,size:prop_types_default().oneOf(SELECT_SIZES),variant:prop_types_default().oneOf(["default","filled","unstyled"]),orientation:prop_types_default().oneOf(SELECT_ORIENTATIONS),dropdownPosition:prop_types_default().oneOf(SELECT_DROPDOWN_POSITIONS),error:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().object]),itemComponent:prop_types_default().any,searchable:prop_types_default().bool,clearable:prop_types_default().string,nothingFound:prop_types_default().any,disabled:prop_types_default().bool,onDropdownOpen:prop_types_default().func,onDropdownClose:prop_types_default().func,style:prop_types_default().object,autoComplete:prop_types_default().string,readOnly:prop_types_default().bool,autoSelectOneOption:prop_types_default().bool};var use_id=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-id/use-id.js"),InputWrapper=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/InputWrapper/InputWrapper.js"),ActionButton=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/ActionButton/ActionButton.js"),fieldStyles_mixins=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/mixins/fieldStyles.mixins.js");const SelectStyles=(0,create_styles.k)(((theme,_ref)=>{let{size,rightEvents,variant,hasIcon}=_ref;const inputTheme=theme.other.input;return{input:{...(0,fieldStyles_mixins.EA)(size||"md",inputTheme.spacing.padding,hasIcon),...(0,fieldStyles_mixins.Of)(inputTheme,theme.other.global),paddingRight:30,textOverflow:"ellipsis"},icon:{width:32,color:inputTheme.content.color.icon},rightSection:{color:theme.colors.text02,pointerEvents:rightEvents?"auto":"none",cursor:"pointer",paddingRight:4},itemsWrapper:{padding:0},...(0,fieldStyles_mixins.Jb)(theme,theme.other.global)}}));var Paragraph=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/typography/Paragraph/Paragraph.js"),MultiSelect=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/form/MultiSelect/MultiSelect.js"),Dropdown=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/overlay/Dropdown/Dropdown.js"),Item=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/overlay/Dropdown/Item/Item.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Select_Select=(0,react.forwardRef)(((_ref,ref)=>{let{radius,dropdownPosition,error,size,clearable,onChange,itemComponent,valueComponent,onBlur,value:_value,defaultValue,name,data:_data,icon,disabled,searchable,getCreateLabel,onSearchChange,onDropdownOpen,onDropdownClose,initiallyOpened,creatable,onCreate,nothingFound,placeholder,className,autoComplete,readOnly,variant,autoSelectOneOption,ariaLabel,withinPortal,...props}=_ref;const data=(0,lodash.map)(_data,(d=>(0,lodash.isString)(d)?d:{...d,value:d?.value.toString()})),value=(0,lodash.isNil)(_value)?_value:_value.toString(),uuid=(0,use_id.M)(),isClearable=(0,react.useMemo)((()=>(0,lodash.isString)(clearable)&&""!==clearable),[clearable]),autoSelectOneOptionMode=autoSelectOneOption&&1===data.length,[showClear,setShowClear]=(0,react.useState)(!1),handleChange=ev=>{setShowClear(!(0,lodash.isNil)(ev)),(0,lodash.isFunction)(onChange)&&onChange(ev)},dataValue=(0,react.useMemo)((()=>{if((0,lodash.isNil)(value))return"";const found=data.find((d=>d.value===value));return found?found.label:""}),[data,value]);(0,react.useEffect)((()=>{autoSelectOneOptionMode&&data[0].value&&data[0].value!==value&&handleChange(valueComponent?[data[0].value]:data[0].value)}),[autoSelectOneOption,data]);const{classes,cx}=SelectStyles({size,rightEvents:isClearable&&showClear,variant},{name:"Select"});return valueComponent?react.createElement(MultiSelect.N,_extends({data,value:value?[value]:void 0,onChange:handleChange,valueComponent,multiple:!1,clearable,size,dropdownComponent:Dropdown.L,itemComponent:itemComponent||Item.c,creatable,onCreate,defaultValue,name,dropdownPosition,disabled:disabled||autoSelectOneOptionMode,searchable,onSearchChange,onDropdownOpen,onDropdownClose,initiallyOpened,getCreateLabel,nothingFound,placeholder,error,ariaLabel},props)):react.createElement(InputWrapper.S,_extends({},props,{uuid,size,error}),readOnly?react.createElement(Paragraph.nv,{clean:!0},dataValue):react.createElement(Select,{ref,autoComplete,id:uuid,size,data,onChange:handleChange,onBlur,value,dropdownComponent:Dropdown.L,itemComponent:itemComponent||Item.c,creatable,onCreate,defaultValue,name,disabled:disabled||autoSelectOneOptionMode,searchable,onSearchChange,onDropdownOpen,onDropdownClose,initiallyOpened,dropdownPosition,getCreateLabel,nothingFound,placeholder,variant,rightSection:isClearable&&showClear&&!autoSelectOneOptionMode?react.createElement(ActionButton.Kk,{icon:react.createElement(esm.HFL,null),tooltip:clearable,size,onClick:()=>{handleChange(null)}}):react.createElement(esm.ct6,{className:classes.rightSection}),className,classNames:classes,icon,error:!(0,lodash.isEmpty)(error),"aria-label":ariaLabel,withinPortal}))}));Select_Select.defaultProps=SELECT_DEFAULT_PROPS,Select_Select.propTypes=SELECT_PROP_TYPES},"../../../node_modules/@mantine/core/esm/Input/use-input-props.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>useInputProps});var _mantine_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js"),_mantine_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/utils/extract-system-styles/extract-system-styles.js"),_mantine_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-id/use-id.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__objRest=(source,exclude)=>{var target={};for(var prop in source)__hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(source))exclude.indexOf(prop)<0&&__propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target};function useInputProps(component,defaultProps,props){const _a=(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_0__.N4)(component,defaultProps,props),{label,description,error,required,classNames,styles,className,unstyled,__staticSelector,sx,errorProps,labelProps,descriptionProps,wrapperProps,id,size,style,inputContainer,inputWrapperOrder,withAsterisk}=_a,others=__objRest(_a,["label","description","error","required","classNames","styles","className","unstyled","__staticSelector","sx","errorProps","labelProps","descriptionProps","wrapperProps","id","size","style","inputContainer","inputWrapperOrder","withAsterisk"]),uid=(0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_1__.M)(id),{systemStyles,rest}=(0,_mantine_styles__WEBPACK_IMPORTED_MODULE_2__.x)(others);return __spreadProps(__spreadValues({},rest),{classNames,styles,unstyled,wrapperProps:__spreadValues(__spreadValues({label,description,error,required,classNames,className,__staticSelector,sx,errorProps,labelProps,descriptionProps,unstyled,styles,id:uid,size,style,inputContainer,inputWrapperOrder,withAsterisk},wrapperProps),systemStyles),inputProps:{required,classNames,styles,unstyled,id:uid,size,__staticSelector,invalid:!!error}})}},"../../../node_modules/@mantine/core/esm/SegmentedControl/SegmentedControl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>SegmentedControl});var react=__webpack_require__("../../../node_modules/react/index.js"),use_reduced_motion=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.js"),use_uncontrolled=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.js"),use_id=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-id/use-id.js");const defaultState={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};function useResizeObserver(){const frameID=(0,react.useRef)(0),ref=(0,react.useRef)(null),[rect,setRect]=(0,react.useState)(defaultState),observer=(0,react.useMemo)((()=>"undefined"!=typeof window?new ResizeObserver((entries=>{const entry=entries[0];entry&&(cancelAnimationFrame(frameID.current),frameID.current=requestAnimationFrame((()=>{ref.current&&setRect(entry.contentRect)})))})):null),[]);return(0,react.useEffect)((()=>(ref.current&&observer.observe(ref.current),()=>{observer.disconnect(),frameID.current&&cancelAnimationFrame(frameID.current)})),[ref.current]),[ref,rect]}var use_isomorphic_effect=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.js"),use_merged_ref=__webpack_require__("../../../node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.js"),MantineProvider=__webpack_require__("../../../node_modules/@mantine/styles/esm/theme/MantineProvider.js"),create_styles=__webpack_require__("../../../node_modules/@mantine/styles/esm/tss/create-styles.js"),__defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a};const sizes={xs:"3px 6px",sm:"5px 10px",md:"7px 14px",lg:"9px 16px",xl:"12px 20px"};const SegmentedControl_styles=(0,create_styles.k)(((theme,{fullWidth,color,radius,shouldAnimate,transitionDuration,transitionTimingFunction,size,orientation},getRef)=>{const vertical="vertical"===orientation,colors=theme.fn.variant({variant:"filled",color});return{label:(a=__spreadValues(__spreadValues({ref:getRef("label")},theme.fn.focusStyles()),theme.fn.fontStyles()),b={WebkitTapHighlightColor:"transparent",borderRadius:theme.fn.radius(radius),fontWeight:500,fontSize:size in theme.fontSizes?theme.fontSizes[size]:theme.fontSizes.sm,cursor:"pointer",display:"block",textAlign:"center",padding:sizes[size in sizes?size:"sm"],whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",userSelect:"none",color:"dark"===theme.colorScheme?theme.colors.dark[1]:theme.colors.gray[7],transition:`color ${shouldAnimate?0:transitionDuration}ms ${transitionTimingFunction||theme.transitionTimingFunction}`,"&:hover":{color:"dark"===theme.colorScheme?theme.colors.dark[0]:theme.black}},__defProps(a,__getOwnPropDescs(b))),control:{ref:getRef("control"),position:"relative",boxSizing:"border-box",flex:1,zIndex:2,transition:`border-left-color ${shouldAnimate?0:transitionDuration}ms ${transitionTimingFunction||theme.transitionTimingFunction}`,"&:not(:first-of-type)":{borderStyle:"solid",borderWidth:vertical?"1px 0 0 0":"0 0 0 1px",borderColor:"dark"===theme.colorScheme?theme.colors.dark[4]:theme.colors.gray[3]}},input:{height:0,width:0,position:"absolute",overflow:"hidden",whiteSpace:"nowrap",opacity:0,"&:focus":{outline:"none",[`& + .${getRef("label")}`]:{outline:"none",boxShadow:"always"===theme.focusRing||"auto"===theme.focusRing?`0 0 0 2px ${"dark"===theme.colorScheme?theme.colors.dark[9]:theme.white}, 0 0 0 4px ${theme.colors[theme.primaryColor]["dark"===theme.colorScheme?7:5]}`:void 0},"&:focus:not(:focus-visible)":{[`& + .${getRef("label")}`]:{boxShadow:"auto"===theme.focusRing||"never"===theme.focusRing?"none":void 0}}}},root:{position:"relative",display:fullWidth||vertical?"flex":"inline-flex",width:vertical&&!fullWidth?"max-content":"auto",flexDirection:vertical?"column":"row",backgroundColor:"dark"===theme.colorScheme?theme.colors.dark[8]:theme.colors.gray[1],borderRadius:theme.fn.radius(radius),overflow:"hidden",padding:4},controlActive:{borderLeftColor:"transparent !important",borderTopColor:"transparent !important",[`& + .${getRef("control")}`]:{borderLeftColor:"transparent !important",borderTopColor:"transparent !important"},borderRadius:theme.fn.radius(radius),boxShadow:shouldAnimate?color||"dark"===theme.colorScheme?"none":theme.shadows.xs:void 0,backgroundColor:shouldAnimate?color?colors.background:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.white:void 0},labelActive:{"&, &:hover":{color:color||"dark"===theme.colorScheme?theme.white:theme.black}},disabled:{"&, &:hover":{color:"dark"===theme.colorScheme?theme.colors.dark[3]:theme.colors.gray[5],cursor:"not-allowed"}},active:{boxSizing:"border-box",borderRadius:theme.fn.radius(radius),position:"absolute",zIndex:1,boxShadow:color||"dark"===theme.colorScheme?"none":theme.shadows.xs,transition:`transform ${shouldAnimate?0:transitionDuration}ms ${theme.transitionTimingFunction}, width ${shouldAnimate?0:transitionDuration/2}ms ${transitionTimingFunction||theme.transitionTimingFunction}`,backgroundColor:color?colors.background:"dark"===theme.colorScheme?theme.colors.dark[5]:theme.white}};var a,b}));var Box=__webpack_require__("../../../node_modules/@mantine/core/esm/Box/Box.js"),SegmentedControl_defProp=Object.defineProperty,SegmentedControl_getOwnPropSymbols=Object.getOwnPropertySymbols,SegmentedControl_hasOwnProp=Object.prototype.hasOwnProperty,SegmentedControl_propIsEnum=Object.prototype.propertyIsEnumerable,SegmentedControl_defNormalProp=(obj,key,value)=>key in obj?SegmentedControl_defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value;const defaultProps={disabled:!1,size:"sm",transitionDuration:200},SegmentedControl=(0,react.forwardRef)(((props,ref)=>{var _b,_c,_d,_e;const _a=(0,MantineProvider.N4)("SegmentedControl",defaultProps,props),{className,disabled,data:_data,name,value,onChange,color,fullWidth,radius,size,transitionDuration,transitionTimingFunction,classNames,styles,defaultValue,orientation,unstyled}=_a,others=((source,exclude)=>{var target={};for(var prop in source)SegmentedControl_hasOwnProp.call(source,prop)&&exclude.indexOf(prop)<0&&(target[prop]=source[prop]);if(null!=source&&SegmentedControl_getOwnPropSymbols)for(var prop of SegmentedControl_getOwnPropSymbols(source))exclude.indexOf(prop)<0&&SegmentedControl_propIsEnum.call(source,prop)&&(target[prop]=source[prop]);return target})(_a,["className","disabled","data","name","value","onChange","color","fullWidth","radius","size","transitionDuration","transitionTimingFunction","classNames","styles","defaultValue","orientation","unstyled"]),theme=(0,MantineProvider.rZ)(),shouldReduceMotion=(0,use_reduced_motion.J)(),reduceMotion=!!theme.respectReducedMotion&&shouldReduceMotion,data=_data.map((item=>"string"==typeof item?{label:item,value:item}:item)),mounted=(0,react.useRef)(),[shouldAnimate,setShouldAnimate]=(0,react.useState)(!1),[_value,handleValueChange]=(0,use_uncontrolled.C)({value,defaultValue,finalValue:Array.isArray(data)&&null!=(_e=null!=(_d=null==(_b=data.find((item=>!item.disabled)))?void 0:_b.value)?_d:null==(_c=data[0])?void 0:_c.value)?_e:null,onChange}),{classes,cx}=SegmentedControl_styles({size,fullWidth,color,radius,shouldAnimate:reduceMotion||!shouldAnimate,transitionDuration,transitionTimingFunction,orientation},{classNames,styles,unstyled,name:"SegmentedControl"}),[activePosition,setActivePosition]=(0,react.useState)({width:0,height:0,translate:[0,0]}),uuid=(0,use_id.M)(name),refs=(0,react.useRef)({}),[observerRef,containerRect]=useResizeObserver();(0,use_isomorphic_effect.Y)((()=>{mounted.current?setShouldAnimate(!0):(mounted.current=!0,setShouldAnimate(!1))})),(0,react.useEffect)((()=>{if(_value in refs.current&&observerRef.current){const element=refs.current[_value],elementRect=element.getBoundingClientRect(),scaledValue=element.offsetWidth/elementRect.width,width=elementRect.width*scaledValue||0,height=elementRect.height*scaledValue||0,offsetRight=containerRect.width-element.parentElement.offsetLeft+4-width,offsetLeft=element.parentElement.offsetLeft-4;setActivePosition({width,height,translate:["rtl"===theme.dir?offsetRight:offsetLeft,element.parentElement.offsetTop-4]})}}),[_value,containerRect]);const controls=data.map((item=>react.createElement("div",{className:cx(classes.control,{[classes.controlActive]:_value===item.value}),key:item.value},react.createElement("input",{className:classes.input,disabled:disabled||item.disabled,type:"radio",name:uuid,value:item.value,id:`${uuid}-${item.value}`,checked:_value===item.value,onChange:()=>handleValueChange(item.value)}),react.createElement("label",{className:cx(classes.label,{[classes.labelActive]:_value===item.value,[classes.disabled]:disabled||item.disabled}),htmlFor:`${uuid}-${item.value}`,ref:node=>{refs.current[item.value]=node}},item.label)))),mergedRef=(0,use_merged_ref.Y)(observerRef,ref);return 0===data.length?null:react.createElement(Box.x,((a,b)=>{for(var prop in b||(b={}))SegmentedControl_hasOwnProp.call(b,prop)&&SegmentedControl_defNormalProp(a,prop,b[prop]);if(SegmentedControl_getOwnPropSymbols)for(var prop of SegmentedControl_getOwnPropSymbols(b))SegmentedControl_propIsEnum.call(b,prop)&&SegmentedControl_defNormalProp(a,prop,b[prop]);return a})({className:cx(classes.root,className),ref:mergedRef},others),"string"==typeof _value&&shouldAnimate&&react.createElement(Box.x,{component:"span",className:classes.active,sx:{width:activePosition.width,height:activePosition.height,transform:`translate(${activePosition.translate[0]}px, ${activePosition.translate[1]}px )`}}),controls)}));SegmentedControl.displayName="@mantine/core/SegmentedControl"}}]);