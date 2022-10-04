"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4549],{24152:function(e,n,t){t.d(n,{S:function(){return s}});var i=t(65809),r=t(27378),o=t(55175),c=t(55970),a=t(37305),s=function(e){var n=e.alt,t=e.className,s=e.componentClassName,l=e.disableLazyLoad,m=e.height,d=e.overflowHidden,u=e.placeholder,h=e.src,p=e.width,f=r.useState(!1),g=(0,i.Z)(f,2),b=g[0],w=g[1],v=r.useRef(null);return r.useEffect((function(){if(!l){var e=v.current;if(e){var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting){n.unobserve(e);var i=new Image;i.src=h,i.onload=function(){return w(!0)}}}))}),{threshold:.25});return n.observe(e),function(){return n.unobserve(e)}}}})),r.createElement(a.W,{forwardRef:v,className:(0,o.A)(s,t),css:"\n        .imgwrap {\n          width: 100%;\n          max-width: 100%;\n        }\n        .imgpre {\n          transition: visibility 0ms ease 400ms;\n        }\n        .imgsrc {\n          transition: opacity 400ms ease 0ms;\n          opacity: 0;\n        }\n        .ipw {\n          transition: opacity 100ms ease 400ms;\n        }\n        .fl {\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          top: 0;\n          left: 0;\n        }\n        .oh {\n          overflow: hidden;\n        }\n        .w1 {\n          width: 100%;\n        }\n        .ld {\n          .ipw {\n            opacity: 0;\n          }\n          .imgpre {\n            visibility: hidden;\n          }\n          .imgsrc {\n            opacity: 1;\n          }\n        }\n      "},r.createElement("div",{className:l||b?"ld":""},r.createElement("div",{className:"imgwrap ".concat(d?"oh":"").trim()},r.createElement(a.W,{className:"w1",pt:(0,c.o)(p,m)},!l&&u&&r.createElement("div",{className:"ipw fl"},r.createElement("img",{className:"imgpre fl",src:u,role:"presentation",width:p,height:m,alt:n,"aria-disabled":"true"})),r.createElement("img",{className:"imgsrc fl",src:l||b?h:"",role:"presentation",width:p,height:m,alt:n})))))};s.displayName="ImageLoader",s.defaultProps={componentClassName:"image-loader",disableLazyLoad:!1,height:533,overflowHidden:!1,width:800},s.displayName="ImageLoader"},26631:function(e,n,t){t.d(n,{D:function(){return i}});var i=function(e,n){return(n/e*100).toFixed(3)}},55970:function(e,n,t){t.d(n,{o:function(){return r}});var i=t(26631),r=function(e,n){return"".concat((0,i.D)(e,n),"%")}},93219:function(e,n,t){t.d(n,{V:function(){return r}});var i=t(55970),r=function(e,n){return"\n\t&:before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tpadding-top: ".concat((0,i.o)(e,n),";\n\t}\n")}},54462:function(e,n,t){t.d(n,{z:function(){return i}});var i=function(e){return"white"===e?"brightness(0%) invert(100%)":"black"===e?"brightness(0%)":e}},47331:function(e,n,t){t.d(n,{I:function(){return d}});var i=t(1717),r=t(31750),o=(t(27378),t(37305)),c=t(85794),a=t(24246),s=["children","className","prefix","spacialAwareness"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.children,t=e.className,i=void 0===t?"":t,l=e.prefix,d=void 0===l?"":l,u=e.spacialAwareness,h=(0,r.Z)(e,s);return(0,a.jsx)(o.W,m(m(m({className:"".concat(d?"".concat(d,"-"):"","module-spacing ").concat(i," ").concat(u&&!(0,c.Q)(u)?"spacial-awareness":"").trim()},h),u),{},{children:n}))};d.defaultProps={componentClassName:"module-spacing"},d.displayName="ModuleSpacing"},99318:function(e,n,t){t.d(n,{K:function(){return m}});var i=t(1717),r=t(31750),o=(t(27378),t(37305)),c=t(24246),a=["name","children","className","customName"];function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=function(e){var n=e.name,t=e.children,i=e.className,s=void 0===i?"":i,m=e.customName,d=(0,r.Z)(e,a);return(0,c.jsx)(o.W,l(l({className:"module-wrapper ".concat(s).trim(),"data-module":n,"data-custom-module":m,position:"static"},d),{},{children:t}))};m.defaultProps={componentClassName:"module-wrapper"},m.displayName="ModuleWrapper"},33187:function(e,n,t){t.r(n);var i=t(1717),r=(t(27378),t(24152)),o=t(23356),c=t(37305),a=t(92361),s=t(45680),l=t(5601),m=t(99318),d=t(47331),u=t(24246);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f={imgFolder:"img/icon/",get imageDir(){return(0,l.J)(this.imgFolder)}},g=function(e){return Math.round(e/294*100)},b=[{alt:"jira icon",iconPath:"".concat(f.imageDir,"jira-icon.png"),dimension:{width:830,height:860},widthPerc:g(68)},{alt:"microsoft teams icon",iconPath:"".concat(f.imageDir,"ms-teams-icon.png"),dimension:{width:860,height:800},widthPerc:g(70)},{alt:"zoom icon",iconPath:"".concat(f.imageDir,"zoom-icon-2.png"),dimension:{width:860,height:860},widthPerc:g(70)},{alt:"google icon",iconPath:"".concat(f.imageDir,"google-g-icon.png"),dimension:{width:425,height:435},widthPerc:g(58)},{alt:"sketch icon",iconPath:"".concat(f.imageDir,"sketch-icon.png"),dimension:{width:900,height:800},widthPerc:g(72)},{alt:"slack icon",iconPath:"".concat(f.imageDir,"slack-icon.png"),dimension:{width:800,height:810},widthPerc:g(65)},{alt:"mode icon",iconPath:"".concat(f.imageDir,"mode-icon.png"),dimension:{width:860,height:740},widthPerc:g(70)},{alt:"loom icon",iconPath:"".concat(f.imageDir,"loom-icon.png"),dimension:{width:860,height:860},widthPerc:g(72)},{alt:"figma icon",iconPath:"".concat(f.imageDir,"figma-icon.png"),dimension:{width:580,height:860},widthPerc:g(50)},{alt:"webex icon",iconPath:"".concat(f.imageDir,"webex-icon.png"),dimension:{width:470,height:338},widthPerc:g(85)}];var w=function(e){for(var n=[{component:(0,u.jsx)("div",{}),className:"blank blank-1",block:1},{component:(0,u.jsx)("div",{}),className:"blank blank-2",block:2}],t=0;t<e.length;t+=1){var i=e[t],o=i.iconPath,c=i.dimension,a=i.alt,s=i.widthPerc;n.push({component:(0,u.jsx)(r.S,p({alt:a,src:o},c)),width:s,alt:o,block:t+3})}return n}(b);n.default=function(e){var n=e.fields,t=e.name,i=n.props,r=void 0===i?"{}":i,l=n.slug,h=(JSON.parse(r)||{}).header,p=void 0===h?"Your team's favorite tools, built in.":h;return(0,u.jsx)(m.K,{name:t,customName:l,children:(0,u.jsx)(d.I,{className:"spacing--component-y--custom",cmt:{0:4,768:3,1280:2},cmb:{0:6,768:5,1280:4},children:(0,u.jsx)(o.$,{id:null,element:"div",children:(0,u.jsxs)(c.W,{cmx:2,css:"\n              .blank {\n                opacity: 0;\n                visibility: hidden;\n\n                @media (max-width: 1023px) {\n                  display: none !important;\n                }\n              }\n            ",children:[p&&(0,u.jsx)(c.W,{w:{1024:"50%"},position:{1024:"absolute"},css:"\n                  z-index: 1;\n                ",children:(0,u.jsx)(a.x,{text:p,variant:"display-400",element:"h2",w:{1024:"7em",1300:"9em"},cmb:{0:3,768:2,1024:0}})}),b&&(0,u.jsx)(s.k,{logos:w,borderColor:"#C9CBCF",mobileScale:1,tabletScale:1,borderWidth:1,mobileColumns:2,tabletColumns:4,columns:4})]})})})})}},5601:function(e,n,t){t.d(n,{J:function(){return r}});var i=t(57311),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,i.q)({from:"build",filePath:e})}}}]);