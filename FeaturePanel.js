/*! sdp-prototypes 1.80.0 2022090120f9b809da d740ccb714ab1ff93011885bee579038 */
webpackJsonp([117,143],{NfX8:function(e,t,n){"use strict";var a=n("SpGf"),i=n("b9XL");n("BKbk"),n("XwPX"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=a(n("0fcM")),s=a(n("P8NW")),l=a(n("E7HD")),c=a(n("d4H2")),u=a(n("0421")),d=a(n("UJE0")),h=a(n("IxO8")),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=k(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=o?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(a,r,s):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n("1n8/")),p=a(n("bcyf")),m=a(n("X9ko")),v=a(n("6G51")),y=a(n("mzLq")),M=n("DUbo"),w=a(n("//kN")),g=n("+uyL"),_=a(n("usq6")),b=a(n("erRR")),x=a(n("9qb7"));function k(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(k=function(e){return e?n:t})(e)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}n("XuYB");var O=f.default.createElement(_.default,{className:"pano-container__interaction-cta-icon",icon:"360-rotate"}),E=f.default.createElement(_.default,{className:"pano-container__callout-icon",icon:"pan"}),T=f.default.createElement(y.default,null),L=(0,v.default)(o=function(e){(0,c.default)(n,e);var t=P(n);function n(e){var a;return(0,r.default)(this,n),a=t.call(this,e),(0,h.default)((0,l.default)(a),"enableInteraction",function(e){e.preventDefault(),a.controls.enable(),a.__panoContainer.classList.add("pano-enabled"),a.__panoAsset.tabIndex=0,a.__panoAsset.focus()}),a.controls=[],a.scenes=[],a.transitionTime=1e3,a.currentScene=0,a}return(0,s.default)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.__panoContainer,n=this.props,a=n.panorama.speed;window.sdp.getMarzipanoPromise||(window.sdp.getMarzipanoPromise=(0,g.loadScript)("/etc.clientlibs/settings/wcm/designs/fca-brands/clientlibs/plugins/marzipano.js")),window.sdp.getMarzipanoPromise.then(function(){Marzipano.dependencies.eventEmitter(p.default),Marzipano.dependencies.eventEmitter(m.default),e.deviceOrientationControlMethod=new p.default,n.parentMouseController.length>0&&(t=(0,M.closestByClass)(t,n.parentMouseController)),(0,w.default)()||void 0===window.safari||(window.devicePixelRatio=1),e.mouseLookControlMethod180=new m.default(t,"180",a),e.mouseLookControlMethod360=new m.default(t,"360",a),e.initializePanos()})}},{key:"shouldComponentUpdate",value:function(e){return e.panorama.nextScene!==this.props.nextScene&&""!==e.panorama.nextScene&&void 0!==e.panorama.nextScene}},{key:"UNSAFE_componentWillUpdate",value:function(e){this.switchSceneById(e.panorama.nextScene)}},{key:"initializePanos",value:function(){var e=this,t=this.props,n=t.panorama,a=t.levels,i=t.faceSize,o=n.tileOptions,r=n.tilePath,s=this.state,l=s.tablet,c=s.mobile,u=this.__panoAsset;this.viewer=new Marzipano.Viewer(u),this.controls=this.viewer.controls(),this.controls.registerMethod("dragControlMethod",this.dragControlMethod),this.controls.registerMethod("deviceOrientation",this.deviceOrientationControlMethod),this.controls.registerMethod("mouseLook180",this.mouseLookControlMethod180),this.controls.registerMethod("mouseLook360",this.mouseLookControlMethod360),this.controls.disable(),this.scenes=o.scenes.map(function(t){t.levels=a,t.faceSize=i;var n,o=Marzipano.ImageUrlSource.fromString(r+t.id+"/{z}/{f}/{y}/{x}.jpg",{cubeMapPreviewUrl:r+t.id+"/preview.jpg"}),s=new Marzipano.CubeGeometry(t.levels),l=Math.PI/4,c="180"===t.panoramaType?Math.PI/2:Math.PI;n=(0,w.default)()||"360"===t.panoramaType?Marzipano.util.compose(Marzipano.RectilinearView.limit.traditional(t.faceSize,120*Math.PI/180,120*Math.PI/180),Marzipano.RectilinearView.limit.pitch(-l,l)):Marzipano.util.compose(Marzipano.RectilinearView.limit.traditional(t.faceSize,120*Math.PI/180,120*Math.PI/180),Marzipano.RectilinearView.limit.pitch(-l,l),Marzipano.RectilinearView.limit.yaw(-c,c));var u=new Marzipano.RectilinearView(t.initialViewParameters,n);return{data:t,marzipanoObject:e.viewer.createScene({source:o,geometry:s,view:u,pinFirstLevel:!0})}}),this.controls._methods.scrollZoom.instance.destroy(),this.controls.disableMethod("touchView"),this.controls.disableMethod("mouseViewDrag"),c||l?(this.controls.enableMethod("deviceOrientation"),this.controls.disableMethod("mouseViewDrag"),this.controls.disableMethod("touchView")):(this.controls.disableMethod("mouseViewDrag"),this.controls.enableMethodGroup("wasdKeys")),this.switchScene(0)}},{key:"startAutorotate",value:function(){this.viewer.startMovement(this.autorotate),this.viewer.setIdleMovement(3e3,this.autorotate)}},{key:"stopAutorotate",value:function(){this.viewer.stopMovement(),this.viewer.setIdleMovement(1/0)}},{key:"switchSceneById",value:function(e){e.length>0&&this.switchScene(this.scenes.findIndex(function(t){return t.data.id===e}))}},{key:"findSceneById",value:function(e){return this.scenes.data.id===e?this.scenes:null}},{key:"findSceneDataById",value:function(e){return this.element.scenes.id===e?this.element.scenes:null}},{key:"switchScene",value:function(e){if(-1!==e){var t=this.state,n=t.tablet,a=t.mobile,i=this.props,o=i.panorama.tileOptions.scenes[e].panoramaType;a||n||("180"===o?(this.controls.enableMethod("mouseLook180"),this.controls.disableMethod("mouseLook360")):(this.controls.disableMethod("mouseLook180"),this.controls.enableMethod("mouseLook360")));var r,s,l=this.props.time;switch(this.props.transition){case"custom":r=l,s=this.currentScene<e?this.fromBottom(this.easeFromTo):this.fromTop(this.easeFromTo);break;case"quickFade":r=l,s=this.currentScene<e?this.fromBottomAndOpacity():this.fromTopAndOpacity();break;default:r=l,s=this.opacity()}var c=i.panorama.tileOptions.scenes[e].initialViewParameters;this.scenes[e].marzipanoObject.view().setParameters(c),this.scenes[e].marzipanoObject.switchTo({transitionDuration:r,transitionUpdate:s}),this.currentScene=e}}},{key:"opacity",value:function(e){var t=e||this.linear;return function(e,n){var a=t(e);n.layer().setEffects({opacity:a})}}},{key:"fromTop",value:function(e){var t=e||this.linear;return function(e,n){var a=t(e);n.layer().setEffects({rect:{relativeY:-1+a}})}}},{key:"fromTopAndOpacity",value:function(e){var t=e||this.linear;return function(e,n){var a=t(e);n.layer().setEffects({opacity:e,rect:{relativeY:-1+a}})}}},{key:"fromBottom",value:function(e){var t=e||this.linear;return function(e,n){var a=t(e);n.layer().setEffects({rect:{relativeY:1-a}})}}},{key:"fromBottomAndOpacity",value:function(e){var t=e||this.linear;return function(e,n){var a=t(e);n.layer().setEffects({opacity:e,rect:{relativeY:1-a}})}}},{key:"easeFromTo",value:function(e){var t=e/.5;return t<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)}},{key:"linear",value:function(e){return e}},{key:"controlEnable",value:function(e){var t=this;"deviceOrientation"===e&&this.deviceOrientationControlMethod.getPitch(function(e,n){e||t.viewer.scene().view().setPitch(n)}),this.controls.enableMethod("deviceOrientation")}},{key:"controlDisable",value:function(e){this.controls.disableMethod(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.height,a=t.interactionCta,i=t.loadingText,o=t.theme,r=t.panorama,s=this.state.desktop,l=r.compId,c=r.lpos,u=r.panoramaDescriptionText,d={height:n};return f.default.createElement("div",{className:(0,x.default)("pano-container",l,"gcss-theme-".concat(o)),"data-fe-id":"Panorama",style:d,ref:function(t){return e.__panoContainer=t,t}},f.default.createElement("div",{className:"description-text"},u),f.default.createElement("div",{id:"pano-".concat(l),className:"pano-asset",style:d,ref:function(t){return e.__panoAsset=t,t},role:"application","aria-label":s?a.textDesktop:a.textMobile}),f.default.createElement(b.default,{className:"pano-container__interaction-cta",lid:a.lid,linktype:"func",lpos:c,onClick:this.enableInteraction,role:"button",url:"#"},f.default.createElement("div",{className:"pano-container__interaction-cta-btn"},O,s?a.textDesktop:a.textMobile)),s&&f.default.createElement("div",{className:"pano-container__callout","aria-live":"polite"},E,a.textCallout),f.default.createElement("div",{className:"panorama-touch-hook"},f.default.createElement("div",{className:"panorama-loading"},f.default.createElement("div",{className:"loading-text gcss-typography-label-3"},i),T)))}}]),n}(f.PureComponent))||o;L.defaultProps={settings:{mouseViewMode:"drag",autorotateEnabled:"false",scrollZoom:"false"},interactionCta:{textMobile:"Tap to explore",textDesktop:"Explore 360",textCallout:"Use mouse to rotate or use W,A,S,D keys"},levels:[{tileSize:256,size:256,fallbackOnly:!0},{tileSize:512,size:512}],faceSize:480,nextScene:"",theme:"dark",descriptionDisplay:!1,height:"580px",parentMouseController:"",loadingText:"Loading interactive experience",time:"500"};var z=L;t.default=z},SrBS:function(e,t){},X9ko:function(e,t,n){"use strict";var a=n("SpGf");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("0fcM")),o=a(n("P8NW")),r=a(n("IxO8")),s=function(){function e(t,n,a){var o=this;(0,i.default)(this,e),(0,r.default)(this,"_handleMove",function(e){o.mouseX=e.pageX-o.offset.left,o.mouseY=e.pageY-o.offset.top}),this._element=t,this.offset={top:t.offsetTop,left:t.offsetLeft},this._mouseModifier="180"===n?2:1;this._speed=a?24/a:24,this._elmRect=t.getBoundingClientRect(),t.addEventListener("mousemove",this._handleMove),this._dynamics={x:new Marzipano.Dynamics,y:new Marzipano.Dynamics},this.x=this.mouseX=t.getBoundingClientRect().width/2,this.y=this.mouseY=t.getBoundingClientRect().height/2,this._previous={x:0,y:0},this._current={x:0,y:0},this._setPanoramaPosition(),this._initMouseWatch(),window.addEventListener("blur",function(){clearTimeout(o.blurTimeout),o.blurTimeout=setTimeout(function(){clearInterval(o.moveLoop)},1e3)}),window.addEventListener("focus",function(){clearTimeout(o.blurTimeout),o._initMouseWatch()})}return(0,o.default)(e,[{key:"destroy",value:function(){clearInterval(this.moveLoop),this._element.removeEventListener("mousemove"),this._element=null,this._dynamics=null}},{key:"_initMouseWatch",value:function(){var e=this;clearInterval(this.moveLoop),this.moveLoop=setInterval(function(){window.requestAnimationFrame(function(){e.x+=(e.mouseX-e.x)/e._speed,e.y+=(e.mouseY-e.y)/e._speed,e._setPanoramaPosition()})},15)}},{key:"_setPanoramaPosition",value:function(){var e=Math.PI*(this.y/this._elmRect.height-.5)/4,t=(Math.PI*(this.x/this._elmRect.width)*2-Math.PI)/this._mouseModifier;this._current.x=t,this._current.y=e,this._previous.x===this._current.x&&this._previous.y===this._current.y||(this._dynamics.x.offset=this._current.x-this._previous.x,this._dynamics.y.offset=this._current.y-this._previous.y,this.emit("parameterDynamics","yaw",this._dynamics.x),this.emit("parameterDynamics","pitch",this._dynamics.y),this._previous.x=this._current.x,this._previous.y=this._current.y)}}]),e}();t.default=s},XuYB:function(e,t){},bcyf:function(e,t,n){"use strict";var a=n("SpGf");n("GFxX"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("0fcM")),o=a(n("P8NW")),r=function(){function e(){(0,i.default)(this,e),this._dynamics={yaw:new Marzipano.Dynamics,pitch:new Marzipano.Dynamics},this._deviceOrientationHandler=this._handleData.bind(this),window.DeviceOrientationEvent&&window.addEventListener("deviceorientation",this._deviceOrientationHandler),this._previous={},this._current={},this._tmp={},this._getPitchCallbacks=[]}return(0,o.default)(e,[{key:"destroy",value:function(){this._dynamics=null,window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this._deviceOrientationHandler),this._deviceOrientationHandler=null,this._previous=null,this._current=null,this._tmp=null,this._getPitchCallbacks=null}},{key:"getPitch",value:function(e){this._getPitchCallbacks.push(e)}},{key:"_handleData",value:function(e){var t=this._previous,n=this._current,a=this._tmp;a.yaw=Marzipano.util.degToRad(e.alpha),a.pitch=Marzipano.util.degToRad(e.beta),a.roll=Marzipano.util.degToRad(e.gamma),this.rotateEuler(a,n),this._getPitchCallbacks.forEach(function(e){e(null,n.pitch)}),this._getPitchCallbacks.length=0,null!==t.yaw&&null!==t.pitch&&null!==t.roll&&(this._dynamics.yaw.offset=-(n.yaw-t.yaw),this._dynamics.pitch.offset=n.pitch-t.pitch,this.emit("parameterDynamics","yaw",this._dynamics.yaw),this.emit("parameterDynamics","pitch",this._dynamics.pitch)),t.yaw=n.yaw,t.pitch=n.pitch,t.roll=n.roll}},{key:"rotateEuler",value:function(e,t){var n,a,i,o=Math.cos(e.yaw),r=Math.sin(e.yaw),s=Math.cos(e.pitch),l=Math.sin(e.pitch),c=Math.cos(e.roll),u=Math.sin(e.roll),d=[r*u-o*l*c,-o*s,o*l*u+r*c,s*c,-l,-s*u,r*l*c+o*u,r*s,-r*l*u+o*c];d[3]>.9999?(n=Math.atan2(d[2],d[8]),i=Math.PI/2,a=0):d[3]<-.9999?(n=Math.atan2(d[2],d[8]),i=-Math.PI/2,a=0):(n=Math.atan2(-d[6],d[0]),a=Math.atan2(-d[5],d[4]),i=Math.asin(d[3])),t.yaw=n,t.pitch=i,t.roll=a}}]),e}();t.default=r},eSmN:function(e,t,n){"use strict";var a=n("SpGf"),i=n("b9XL");n("MlTh"),n("TT/v"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=a(n("3dLy")),s=a(n("0fcM")),l=a(n("P8NW")),c=a(n("E7HD")),u=a(n("d4H2")),d=a(n("0421")),h=a(n("UJE0")),f=a(n("IxO8")),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=o?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(a,r,s):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n("1n8/")),m=a(n("9qb7")),v=a(n("6G51")),y=a(n("2tAt")),M=a(n("OKls")),w=a(n("+DI/")),g=a(n("AEfI")),_=a(n("YFa9")),b=a(n("WQjb")),x=a(n("Sg7x")),k=a(n("9I32")),P=a(n("NfX8")),O=n("xv4l");function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=(0,h.default)(e);if(t){var i=(0,h.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}n("SrBS");var L=(0,v.default)(o=(0,y.default)(o=(0,M.default)(o=function(e){(0,u.default)(n,e);var t=T(n);function n(e){var a;return(0,s.default)(this,n),a=t.call(this,e),(0,f.default)((0,c.default)(a),"setDisplayMediaRef",function(e){a.displayMediaRef=e}),(0,f.default)((0,c.default)(a),"_handleRadioToggle",function(e){a.setState({activeIndex:e.id})}),(0,f.default)((0,c.default)(a),"_isDodge",function(){return window&&window.sdp&&window.sdp.context&&"dodge"===window.sdp.context.get("brand")}),a.descriptionContainerWrapperRef=(0,p.createRef)(),a.displayMediaRef=null,a.state={activeIndex:0,hasZoomedText:!1},a}return(0,l.default)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.useDisclosureBar,n=e.disclosureBarLayout,a=e.contentAlignment,i=e.contentBox,o=a.split("-"),r=i&&(""!==i.preTitle||""!==i.preTitle||""!==i.title||""!==i.subTitle||""!==i.radioTitle||i.contentModules.length>0||i.buttons.length>0);if(t&&"belowImage"===n&&r){var s=this.displayMediaRef.querySelector(".use-disclosure-bar").offsetHeight,l=this.descriptionContainerWrapperRef.current.querySelector(".description-block-container").style;"bottom"===o[0]&&(l.bottom="calc(5% + ".concat(s,"px)")),"top"===o[0]&&(l.top="calc(5% - (0.05 * ".concat(s,"px))")),"middle"===o[0]&&(l.top="calc(50% - (0.5 * ".concat(s,"px))"))}}},{key:"_generatePositionClasses",value:function(e){var t=e.split("-");return"valign-"+t[0]+" halign-"+t[1]}},{key:"_contentRender",value:function(){var e=this.props,t=e.assets,n=e.heightAuto,a=e.isLazy,i=e.showLoader,o=e.onLoad,s=e.useDisclosureBar,l=e.disclosureBarLayout,c=e.disclosureTextAlignment,u=e.disclosureTextLineWidth,d=this.state,h=d.desktop,f=d.tablet,m=d.phablet,v=d.activeIndex,y=t.length>1&&t[v]||t[0],M=y.content&&y.content.transcriptButton,w=n?null:(h?"580px":f&&"500px")||m&&"284px"||null;return"displayMedia"===y.type?p.default.createElement(x.default,(0,r.default)({reference:this.setDisplayMediaRef},y.content,{height:w,isLazy:a,lazyOffset:1e3,onLoad:o,showLoader:i,transcriptButton:M,useDisclosureBar:s,disclosureBarLayout:l,disclosureTextAlignment:c,disclosureTextLineWidth:u})):"Panorama"===y.type?p.default.createElement(P.default,(0,r.default)({},y.content,{onLoad:o,parentMouseController:"feature-panel-wrapper"})):"activeVideo"===y.type&&p.default.createElement(k.default,{activeVideo:y.content.activeVideo,height:w,onLoad:o,segment:y.segment,transcriptButton:M,useDisclosureBar:s,disclosureTextAlignment:c,disclosureTextLineWidth:u})}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.contentBox,a=e.assets,i=e.contentAlignment,o=e.heightAuto,s=e.lpos,l=e.isLazy,c=e.fullWidthDesktop,u=this.state,d=u.activeIndex,h=u.desktop,f=a.length>1&&a[d]||a[0],y="Panorama"===f.type?"panorama-asset":"",M=f.content&&f.content.transcriptButton,x=n&&(""!==n.preTitle||""!==n.preTitle||""!==n.title||""!==n.subTitle||""!==n.radioTitle||n.contentModules.length>0||n.buttons.length>0),k=v.default.getScreenSizeState().tablet,P=k?n.tabletContentBoxPadding:n.desktopContentBoxPadding,E=k?n.tabletContentBoxBottomPadding:n.desktopContentBoxBottomPadding;return p.default.createElement(w.default,{className:(0,m.default)("feature-panel-wrapper","gcss-theme-".concat(t),{"feature-panel-height-auto":o},M&&"feature-panel--has-transcript",this._isDodge()?"brand-dodge":"",c&&(0,O.checkBrandAndViewport)()&&"full-width-grid"),"data-fe-id":"FeaturePanel"},p.default.createElement(g.default,{className:(0,m.default)("feature-panel-row","".concat(y))},!h&&p.default.createElement(_.default,{lg:12,md:12,sm:6,xs:6,flush:!0,className:"media-container"},this._contentRender()),x&&p.default.createElement("div",{ref:this.descriptionContainerWrapperRef,className:(0,m.default)("description-container-wrapper")},p.default.createElement(_.default,{lg:12,md:12,sm:6,xs:6,className:(0,m.default)("description-block-container",this._generatePositionClasses(i))},p.default.createElement(b.default,(0,r.default)({},n,{theme:t,onRadioToggle:this._handleRadioToggle,lpos:s,isLazy:l,contentBoxBottomPadding:E,contentBoxPadding:P})))),h&&p.default.createElement(_.default,{lg:12,md:12,sm:6,xs:6,flush:!0,className:"media-container"},this._contentRender())))}}]),n}(p.Component))||o)||o)||o;L.defaultProps={theme:"dark",contentAlignment:"top-left",disclosureBarLayout:"onImage",disclosureTextAlignment:"center",useDisclosureBar:!1,disclosureTextLineWidth:10,type:"featurePanel",heightAuto:!1,isLazy:!0};var z=L;t.default=z}});