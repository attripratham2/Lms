"use strict";(self.webpackChunkleemons_plugin_leebrary_frontend_react=self.webpackChunkleemons_plugin_leebrary_frontend_react||[]).push([[6815],{"./src/components/GridLayoutStory/GridLayoutStory.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../../node_modules/react/index.js");var _bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/layout/Box/Box.js"),_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../../../node_modules/@bubbles-ui/components/es/misc/ImageLoader/ImageLoader.js"),_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/@bubbles-ui/icons/solid/esm/index.js"),_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/LibraryCard/LibraryCard.js"),_LibraryCard_LibraryCard_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/LibraryCard/LibraryCard.constants.js"),_Library_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Library.constants.js"),_LibraryCard_mock_data__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/LibraryCard/mock/data.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"leemons/Library/GridLayout",parameters:{component:_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,design:{type:"figma",url:"https://www.figma.com/file/c3MWm2gVHU4JfYlVfr5VvB/🍋💧-Bubbles-SD-v2"}},argTypes:{showImage:{control:"boolean"},variant:{control:{type:"select"},options:_LibraryCard_LibraryCard_constants__WEBPACK_IMPORTED_MODULE_3__.Hi},role:{control:{type:"select"},options:_Library_constants__WEBPACK_IMPORTED_MODULE_4__.v8},onAction:{action:"onAction"},isDraft:{control:"boolean"}}},Template=_ref=>{let{showImage,showDescription,showAction,showAssigment,showSubject,children,asset,assigment,deadlineProps,variant,action,subject,testIsDraft,...props}=_ref;const isBookmark="bookmark"===variant,isCurriculum="curriculum"===variant,assetToRender={cover:showImage?isBookmark?_LibraryCard_mock_data__WEBPACK_IMPORTED_MODULE_5__.RX.cover:asset.cover:void 0,description:showDescription?asset.description:void 0},assetChecker={[`${isCurriculum}`]:{CURRICULUM_ASSET:_LibraryCard_mock_data__WEBPACK_IMPORTED_MODULE_5__.Fy},[`${isBookmark}`]:{..._LibraryCard_mock_data__WEBPACK_IMPORTED_MODULE_5__.RX,...assetToRender},[`${!isBookmark&&!isCurriculum}`]:{...asset,...assetToRender}};return asset.published=!testIsDraft,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{width:"90vw",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(254px, 1fr))",gap:24},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LibraryCard_LibraryCard__WEBPACK_IMPORTED_MODULE_2__.s,{...props,asset:assetChecker.true,deadlineProps:isCurriculum?null:deadlineProps,assigment:!isCurriculum&&showAssigment?assigment:null,variant:"document",action:showAction?action:void 0,subject:showSubject?subject:void 0,variantIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_7__.xu,{style:{position:"relative",width:14,height:14},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_components__WEBPACK_IMPORTED_MODULE_8__.S,{src:"/img/library/tasks.svg",width:14,height:14})})})]})};Template.displayName="Template";const Playground=Template.bind({});Playground.args={showImage:!0,showDescription:!0,showAction:!0,showAssigment:!0,showSubject:!0,testIsDraft:!0,variant:"media",action:"View feedback",badge:"",..._LibraryCard_LibraryCard_constants__WEBPACK_IMPORTED_MODULE_3__.t9,asset:{..._LibraryCard_mock_data__WEBPACK_IMPORTED_MODULE_5__.w6,published:!0},assigment:{completed:.3,submission:15,total:24,subject:{name:"Maths - 1025 - GB"},avgTime:933,avgAttempts:3,activityType:"Tarea/Test",grade:8.5},deadlineProps:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_1__.rK,{width:16,height:16}),deadline:new Date("2022-02-20"),locale:"es",labels:{new:"New",deadline:"Deadline"}},subject:{name:"Bases para el análisis y el tratamiento de",color:"#FABADA",icon:"https://upload.wikimedia.org/wikipedia/commons/8/87/Globe_icon_2.svg"},menuItems:[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_1__.r7,{}),children:"Item 1",onClick:()=>alert("Item 1 clicked")},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_1__.Fg,{}),children:"Item 2",onClick:()=>alert("Item 1 clicked")},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_bubbles_ui_icons_solid__WEBPACK_IMPORTED_MODULE_1__.U6,{}),children:"Item 3",onClick:()=>alert("Item 3 clicked")}]},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"({\n  showImage,\n  showDescription,\n  showAction,\n  showAssigment,\n  showSubject,\n  children,\n  asset,\n  assigment,\n  deadlineProps,\n  variant,\n  action,\n  subject,\n  testIsDraft,\n  ...props\n}) => {\n  const isBookmark = variant === 'bookmark';\n  const isCurriculum = variant === 'curriculum';\n  const assetToRender = {\n    cover: showImage ? isBookmark ? URL_ASSET.cover : asset.cover : undefined,\n    description: showDescription ? asset.description : undefined\n  };\n  const assetChecker = {\n    [`${isCurriculum}`]: {\n      CURRICULUM_ASSET\n    },\n    [`${isBookmark}`]: {\n      ...URL_ASSET,\n      ...assetToRender\n    },\n    [`${!isBookmark && !isCurriculum}`]: {\n      ...asset,\n      ...assetToRender\n    }\n  };\n  if (testIsDraft) {\n    asset.published = false;\n  } else {\n    asset.published = true;\n  }\n  return <Box style={{\n    width: '90vw',\n    display: 'grid',\n    gridTemplateColumns: `repeat(auto-fit, minmax(254px, 1fr))`,\n    gap: 24\n  }}>\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n      <LibraryCard {...props}\n    // eslint-disable-next-line dot-notation\n    asset={assetChecker['true']} deadlineProps={isCurriculum ? null : deadlineProps} assigment={!isCurriculum && showAssigment ? assigment : null} variant=\"document\" action={showAction ? action : undefined} subject={showSubject ? subject : undefined} variantIcon={<Box style={{\n      position: 'relative',\n      width: 14,\n      height: 14\n    }}>\n            <ImageLoader src={`/img/library/tasks.svg`} width={14} height={14} />\n          </Box>} />\n    </Box>;\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Playground"]},"./src/components/LibraryCard/mock/data.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{bu:()=>AFRAME_ASSET,w6:()=>AUDIO_ASSET,Fy:()=>CURRICULUM_ASSET,FD:()=>PDF_ASSET,RX:()=>URL_ASSET,lh:()=>VIDEO_ASSET});const google_apps_for_work_datasheet_es_namespaceObject=__webpack_require__.p+"static/media/google-apps-for-work-datasheet-es.c2970195.pdf",AUDIO_ASSET={color:"#DC5571",name:"El ritmo de la guerra y título más largo para ver desbordamiento por ellipsis",fileType:"audio",created:"2022-02-04T16:26:31.485Z",description:"This is a very large description of the book Rythim of War, the fourth book in The Stormlight Archive.",tagline:"",programName:" 1º ESO",metadata:[{label:"Quality",value:"128kb"},{label:"Format",value:"mp3"},{label:"Duration",value:"10 min"},{label:"Transcript",value:"Not available"}],tags:["Fantasy","Adventure","Fiction"],cover:"https://uh.gsstatic.es/sfAttachPlugin/1029293.jpg",url:"https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",canAccess:[{fullName:"John Doe",permissions:["owner"]},{fullName:"Mary Jane"},{fullName:"Peter Parker"},{fullName:"Will Teacher"},{fullName:"Tony Stark"}]},VIDEO_ASSET={id:"620bbb607129df59430f3329",color:"#DC5571",name:"The Roman Empire",fileType:"video",description:"We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes we do. But what is the role of the neurons in the brain?",metadata:[{label:"Quality",value:"128kb"},{label:"Format",value:"mp3"},{label:"Duration",value:"10 min"},{label:"Transcript",value:"Not available"}],tags:["Rome","Docu"],cover:"https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80",url:"https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4"},URL_ASSET={color:"#c8d98c",name:"Leemons",fileType:"bookmark",created:"2022-02-04T16:26:31.485Z",description:"Leemons (la plataforma de aprendizaje gratuita, potente, flexible y amigable), descubre para ti las nuevas fronteras del aprendizaje y la enseñanza, de la mano de expertos en pedagogía, profesores y neurocientíficos.",tagline:"Leemons, la plataforma de aprendizaje gratuita, potente, flexible y amigable.",metadata:[],tags:["Student","Learning"],icon:"https://www.leemons.io/apple-touch-icon.png",url:"https://medium.com/leemons-edtech-es?Logo_1200x620_B_bc44bfa5fe",cover:"https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/Logo_1200x620_B_bc44bfa5fe.png",canAccess:[{fullName:"John Doe",permissions:["owner"]},{fullName:"Mary Jane"},{fullName:"Peter Parker"},{fullName:"Will Teacher"},{fullName:"Tony Stark"}]},CURRICULUM_ASSET={name:"SEK Santa Isabel - ESO",created:"2022-02-04T16:26:31.485Z",description:"Párrafo descriptivo de lo que va el curriculum, que es opcional.",tagline:"Curriculum Comunidad de Madrid",metadata:[{label:"Language",value:"Español"},{label:"Country",value:"España"}],tags:["Student","Learning"],canAccess:[{fullName:"John Doe"},{fullName:"Mary Jane"},{fullName:"Peter Parker"},{fullName:"Will Teacher"},{fullName:"Tony Stark"}]},PDF_ASSET={id:"620bbb607129df59430f3329",color:"#FABADA",name:"Google sites",fileExtension:"pdf",description:"We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes we do. But what is the role of the neurons in the brain?",tags:["Google","Search"],cover:"https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80",url:google_apps_for_work_datasheet_es_namespaceObject},AFRAME_ASSET={id:"620bbb607129df59430f3329",name:"3d test",fileExtension:"glb",description:"We’ve always been told that the brain contains billions of neurons, which, of course, have an essential role in all the processes we do. But what is the role of the neurons in the brain?",tags:["Google","Search"],cover:"https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80",url:"/3d/painted_vessel.glb",metadata:[{label:"Size",value:"1.2Mb"},{label:"Bgfromcolor",value:"#336699"},{label:"Bgtocolor",value:"#6699FF"}]}}}]);