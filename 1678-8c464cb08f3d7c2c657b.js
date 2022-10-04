"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1678],{68937:function(e,n,t){t.d(n,{b:function(){return E}});var a=t(25773),i=t(64649),o=t(18808),s=t(34864),l=t(635),c=t(55175),r=t(27378),d=t(37305),m=t(29718),p=t(71526),u=t(63543),h=t(11664),g=t(73089),f=t(62089),w=t(83624),b=t(7707),v=t(48973),y=t(98562),N=t(80008),x={"non-combo":{component:b.p,hasDescender:!1},bug:{component:v.Y,hasDescender:!1},cloud:{component:g.Z,hasDescender:!1},dsm:{component:f.P,hasDescender:!1},enterprise:{component:w.E,hasDescender:!0},freehand:{component:N.m,hasDescender:!1},studio:{component:y.N,hasDescender:!1}},k={align:"left",breakpoint:u.d.breakpoints.tablet,componentClassName:"logo-lockup",hasLink:!0,invisionBugWidth:30,invisionLogoWidth:89,mobileLogoSizeDownFactor:.663,sideBySideUrl:"https://cdn.sanity.io/images/lr1orcar/marketing-pages/0e4a7fc9689497ae70e25d534fd63f427381a1d5-794x99.png?w=200",sideBySideWidth:150,variant:"non-combo"},S=function(e){var n=e.children;return r.createElement("div",{className:"item-wrapper"},n)};S.displayName="ItemWrapper";var E=function(e){var n=e.align,t=e.breakpoint,u=e.className,g=e.componentClassName,f=e.css,w=void 0===f?"":f,b=e.hasLink,v=e.invisionBugWidth,y=e.invisionLogoWidth,N=e.mobileLogoSizeDownFactor,k=e.plusSignFull,E=e.sideBySideName,W=e.sideBySideUrl,B=e.sideBySideWidth,Z=e.sideBySideWrapperClassName,L=e.stackSideBySideOnMobile,D=e.variant,C=(0,o.Z)(e,["align","breakpoint","className","componentClassName","css","hasLink","invisionBugWidth","invisionLogoWidth","mobileLogoSizeDownFactor","plusSignFull","sideBySideName","sideBySideUrl","sideBySideWidth","sideBySideWrapperClassName","stackSideBySideOnMobile","variant"]),F="side-by-side"===D,z="non-combo"!==D&&"side-by-side"!==D,P=z,j=F?"side-by-side":z?"combo":"non-combo",M=z?"inv-bug-logo":"inv-full-logo",V=x[z?"bug":"non-combo"].component,_=P?v:y;var H=b?{element:"a",display:"block",href:"https://www.invisionapp.com",onContextMenu:function(e){e.preventDefault(),(0,l.h)(h.o)}}:{};return r.createElement(d.W,(0,a.Z)({className:(0,c.A)(g,"".concat(u," ").concat(j," ").concat(M," ").concat(L?"mobile-stack":"").trim()),"data-variant":D,css:"\n        display: flex;\n        justify-content: ".concat("center"===n?"center":"flex-start",";\n        align-items: center;\n        flex-wrap: no-wrap;\n\n        svg,\n        img {\n          width: 100%;\n          max-width: 100%;\n        }\n\n        * {\n          line-height: 0;\n          font-size: 0;\n        }\n\n        > * {\n          flex-shrink: 0;\n          flex-grow: 0;\n        }\n\n        &.mobile-stack {\n          @media (max-width: ").concat(t-1,"px) {\n            flex-wrap: wrap;\n\n            > .item-wrapper {\n              flex-basis: 100%;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              flex-wrap: no-wrap;\n            }\n          }\n        }\n\n        ").concat(w,"\n      ")},C),_&&N&&r.createElement(S,null,r.createElement(d.W,(0,a.Z)({className:"inv-logo-wrapper",w:(0,i.Z)({0:"".concat((_*N).toFixed(2),"px")},t,"".concat(_,"px"))},H),r.createElement(V,null))),z&&function(){if(!(0,s.w)(x,D))return null;var e=x[D],n=e.hasDescender,a=e.component;return r.createElement(d.W,{className:"combo-wrapper ".concat(D,"-combo-wrapper "),ml:(0,i.Z)({0:8},t,10),h:n?(0,i.Z)({0:18},t,22):(0,i.Z)({0:15},t,18),css:"\n          svg,\n          img {\n            width: auto;\n            height: 100%;\n          }\n\n          ".concat(n?"\n            transform: translateY(2px);\n            @media(min-width: ".concat(t,"px){\n              transform: translateY(3px);\n            }\n              "):"","\n        ")},r.createElement(a,null))}(),F&&B&&N&&r.createElement(r.Fragment,null,r.createElement(S,null,r.createElement(d.W,(0,a.Z)({className:"plus-sign-wrapper",w:(0,i.Z)({0:13},t,15),h:(0,i.Z)({0:13},t,15),mx:(0,i.Z)({0:19.5},t,22.5)},L?{my:(0,i.Z)({0:19.5},t,0)}:{}),r.createElement(p.j,{fill:k}))),r.createElement(S,null,r.createElement(d.W,{className:"side-by-side-wrapper ".concat(Z||"").trim(),w:(0,i.Z)({0:"".concat((B*N).toFixed(2),"px")},t,"".concat(B,"px"))},W&&r.createElement("img",{src:W,alt:E||"side-by-side logo"})))),b&&r.createElement(m.k,null))};E.displayName="LogoLockup",E.defaultProps=k,E.displayName="LogoLockup"},71526:function(e,n,t){t.d(n,{j:function(){return c}});var a=t(25773),i=t(18808),o=t(10873),s=t(27378),l=t(59036),c=function(e){var n=e.className,t=e.width,c=e.fill,r=e.title,d=void 0===r?"":r,m=(0,i.Z)(e,["className","width","fill","title"]);return s.createElement(l.n,(0,a.Z)({viewBox:"0 0 15 15",width:t,className:(0,o.o)(d,n),title:d},m),s.createElement("path",{fill:c,d:"M15,8H8v7H7V8H0V7h7V0h1v7h7V8z"}))};c.displayName="PlusSign",c.defaultProps={width:15,fill:"#000000",title:"plus-sign"},c.displayName="PlusSign"},62875:function(e,n,t){t.d(n,{X:function(){return a}});var a=function(e,n){return!(!e||!n)&&n===e.substring(0,n.length)}}}]);