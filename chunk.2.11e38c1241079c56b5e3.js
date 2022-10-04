(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[2],{104:function(e,t,n){"use strict"
n.d(t,"a",(function(){return ie}))
var r="top",o="bottom",i="right",a="left",s=[r,o,i,a],f=s.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),c=[].concat(s,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),p=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]
function u(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){if(null==e)return window
if("[object Window]"!==e.toString()){var t=e.ownerDocument
return t&&t.defaultView||window}return e}function d(e){return e instanceof l(e).Element||e instanceof Element}function h(e){return e instanceof l(e).HTMLElement||e instanceof HTMLElement}function m(e){return"undefined"!=typeof ShadowRoot&&(e instanceof l(e).ShadowRoot||e instanceof ShadowRoot)}const v={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state
Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e]
h(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e]
!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}}
return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{})
h(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]}
function g(e){return e.split("-")[0]}var y=Math.max,b=Math.min,w=Math.round
function x(){var e=navigator.userAgentData
return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function O(){return!/^((?!chrome|android).)*safari/i.test(x())}function j(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1)
var r=e.getBoundingClientRect(),o=1,i=1
t&&h(e)&&(o=e.offsetWidth>0&&w(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&w(r.height)/e.offsetHeight||1)
var a=(d(e)?l(e):window).visualViewport,s=!O()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,p=r.width/o,u=r.height/i
return{width:p,height:u,top:c,right:f+p,bottom:c+u,left:f,x:f,y:c}}function E(e){var t=j(e),n=e.offsetWidth,r=e.offsetHeight
return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function D(e,t){var n=t.getRootNode&&t.getRootNode()
if(e.contains(t))return!0
if(n&&m(n)){var r=t
do{if(r&&e.isSameNode(r))return!0
r=r.parentNode||r.host}while(r)}return!1}function A(e){return l(e).getComputedStyle(e)}function k(e){return["table","td","th"].indexOf(u(e))>=0}function L(e){return((d(e)?e.ownerDocument:e.document)||window.document).documentElement}function W(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(m(e)?e.host:null)||L(e)}function M(e){return h(e)&&"fixed"!==A(e).position?e.offsetParent:null}function P(e){for(var t=l(e),n=M(e);n&&k(n)&&"static"===A(n).position;)n=M(n)
return n&&("html"===u(n)||"body"===u(n)&&"static"===A(n).position)?t:n||function(e){var t=/firefox/i.test(x())
if(/Trident/i.test(x())&&h(e)&&"fixed"===A(e).position)return null
var n=W(e)
for(m(n)&&(n=n.host);h(n)&&["html","body"].indexOf(u(n))<0;){var r=A(n)
if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n
n=n.parentNode}return null}(e)||t}function B(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function H(e,t,n){return y(e,b(t,n))}function R(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function T(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function S(e){return e.split("-")[1]}var V={top:"auto",right:"auto",bottom:"auto",left:"auto"}
function _(e){var t,n=e.popper,s=e.popperRect,f=e.placement,c=e.variation,p=e.offsets,u=e.position,d=e.gpuAcceleration,h=e.adaptive,m=e.roundOffsets,v=e.isFixed,g=p.x,y=void 0===g?0:g,b=p.y,x=void 0===b?0:b,O="function"==typeof m?m({x:y,y:x}):{x:y,y:x}
y=O.x,x=O.y
var j=p.hasOwnProperty("x"),E=p.hasOwnProperty("y"),D=a,k=r,W=window
if(h){var M=P(n),B="clientHeight",H="clientWidth"
M===l(n)&&"static"!==A(M=L(n)).position&&"absolute"===u&&(B="scrollHeight",H="scrollWidth"),M=M,(f===r||(f===a||f===i)&&"end"===c)&&(k=o,x-=(v&&M===W&&W.visualViewport?W.visualViewport.height:M[B])-s.height,x*=d?1:-1),f!==a&&(f!==r&&f!==o||"end"!==c)||(D=i,y-=(v&&M===W&&W.visualViewport?W.visualViewport.width:M[H])-s.width,y*=d?1:-1)}var R,T=Object.assign({position:u},h&&V),S=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1
return{x:w(t*r)/r||0,y:w(n*r)/r||0}}({x:y,y:x}):{x:y,y:x}
return y=S.x,x=S.y,d?Object.assign({},T,((R={})[k]=E?"0":"",R[D]=j?"0":"",R.transform=(W.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",R)):Object.assign({},T,((t={})[k]=E?x+"px":"",t[D]=j?y+"px":"",t.transform="",t))}var q={passive:!0},C={left:"right",right:"left",bottom:"top",top:"bottom"}
function N(e){return e.replace(/left|right|bottom|top/g,(function(e){return C[e]}))}var I={start:"end",end:"start"}
function F(e){return e.replace(/start|end/g,(function(e){return I[e]}))}function U(e){var t=l(e)
return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function z(e){return j(L(e)).left+U(e).scrollLeft}function J(e){var t=A(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/auto|scroll|overlay|hidden/.test(n+o+r)}function X(e,t){var n
void 0===t&&(t=[])
var r=function e(t){return["html","body","#document"].indexOf(u(t))>=0?t.ownerDocument.body:h(t)&&J(t)?t:e(W(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=l(r),a=o?[i].concat(i.visualViewport||[],J(r)?r:[]):r,s=t.concat(a)
return o?s:s.concat(X(W(a)))}function Y(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function G(e,t,n){return"viewport"===t?Y(function(e,t){var n=l(e),r=L(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0
if(o){i=o.width,a=o.height
var c=O();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+z(e),y:f}}(e,n)):d(t)?function(e,t){var n=j(e,!1,"fixed"===t)
return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):Y(function(e){var t,n=L(e),r=U(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=y(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=y(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+z(e),f=-r.scrollTop
return"rtl"===A(o||n).direction&&(s+=y(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(L(e)))}function K(e,t,n,r){var o="clippingParents"===t?function(e){var t=X(W(e)),n=["absolute","fixed"].indexOf(A(e).position)>=0&&h(e)?P(e):e
return d(n)?t.filter((function(e){return d(e)&&D(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=G(e,n,r)
return t.top=y(o.top,t.top),t.right=b(o.right,t.right),t.bottom=b(o.bottom,t.bottom),t.left=y(o.left,t.left),t}),G(e,a,r))
return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Q(e){var t,n=e.reference,s=e.element,f=e.placement,c=f?g(f):null,p=f?S(f):null,u=n.x+n.width/2-s.width/2,l=n.y+n.height/2-s.height/2
switch(c){case r:t={x:u,y:n.y-s.height}
break
case o:t={x:u,y:n.y+n.height}
break
case i:t={x:n.x+n.width,y:l}
break
case a:t={x:n.x-s.width,y:l}
break
default:t={x:n.x,y:n.y}}var d=c?B(c):null
if(null!=d){var h="y"===d?"height":"width"
switch(p){case"start":t[d]=t[d]-(n[h]/2-s[h]/2)
break
case"end":t[d]=t[d]+(n[h]/2-s[h]/2)}}return t}function Z(e,t){void 0===t&&(t={})
var n=t,a=n.placement,f=void 0===a?e.placement:a,c=n.strategy,p=void 0===c?e.strategy:c,u=n.boundary,l=void 0===u?"clippingParents":u,h=n.rootBoundary,m=void 0===h?"viewport":h,v=n.elementContext,g=void 0===v?"popper":v,y=n.altBoundary,b=void 0!==y&&y,w=n.padding,x=void 0===w?0:w,O=R("number"!=typeof x?x:T(x,s)),E="popper"===g?"reference":"popper",D=e.rects.popper,A=e.elements[b?E:g],k=K(d(A)?A:A.contextElement||L(e.elements.popper),l,m,p),W=j(e.elements.reference),M=Q({reference:W,element:D,strategy:"absolute",placement:f}),P=Y(Object.assign({},D,M)),B="popper"===g?P:W,H={top:k.top-B.top+O.top,bottom:B.bottom-k.bottom+O.bottom,left:k.left-B.left+O.left,right:B.right-k.right+O.right},S=e.modifiersData.offset
if("popper"===g&&S){var V=S[f]
Object.keys(H).forEach((function(e){var t=[i,o].indexOf(e)>=0?1:-1,n=[r,o].indexOf(e)>=0?"y":"x"
H[e]+=V[n]*t}))}return H}function $(e,t){void 0===t&&(t={})
var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,p=n.flipVariations,u=n.allowedAutoPlacements,l=void 0===u?c:u,d=S(r),h=d?p?f:f.filter((function(e){return S(e)===d})):s,m=h.filter((function(e){return l.indexOf(e)>=0}))
0===m.length&&(m=h)
var v=m.reduce((function(t,n){return t[n]=Z(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[g(n)],t}),{})
return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}function ee(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function te(e){return[r,i,o,a].some((function(t){return e[t]>=0}))}function ne(e,t,n){void 0===n&&(n=!1)
var r,o,i=h(t),a=h(t)&&function(e){var t=e.getBoundingClientRect(),n=w(t.width)/e.offsetWidth||1,r=w(t.height)/e.offsetHeight||1
return 1!==n||1!==r}(t),s=L(t),f=j(e,a,n),c={scrollLeft:0,scrollTop:0},p={x:0,y:0}
return(i||!i&&!n)&&(("body"!==u(t)||J(s))&&(c=(r=t)!==l(r)&&h(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:U(r)),h(t)?((p=j(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):s&&(p.x=z(s))),{x:f.left+c.scrollLeft-p.x,y:f.top+c.scrollTop-p.y,width:f.width,height:f.height}}var re={placement:"bottom",modifiers:[],strategy:"absolute"}
function oe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}var ie=function(e){void 0===e&&(e={})
var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?re:o
return function(e,t,n){void 0===n&&(n=i)
var o,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},re,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,u={state:s,setOptions:function(n){var o="function"==typeof n?n(s.options):n
l(),s.options=Object.assign({},i,s.options,o),s.scrollParents={reference:d(e)?X(e):e.contextElement?X(e.contextElement):[],popper:X(t)}
var a,c,h=function(e){var t=function(e){var t=new Map,n=new Set,r=[]
return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r)
o&&e(o)}})),r.push(o)}(e)})),r}(e)
return p.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(r,s.options.modifiers),c=a.reduce((function(e,t){var n=e[t.name]
return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(c).map((function(e){return c[e]}))))
return s.orderedModifiers=h.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect
if("function"==typeof o){var i=o({state:s,name:t,instance:u,options:r})
f.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper
if(oe(t,n)){s.rects={reference:ne(t,P(n),"fixed"===s.options.strategy),popper:E(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}))
for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var o=s.orderedModifiers[r],i=o.fn,a=o.options,f=void 0===a?{}:a,p=o.name
"function"==typeof i&&(s=i({state:s,options:f,name:p,instance:u})||s)}else s.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(o())}))}))),a}),destroy:function(){l(),c=!0}}
if(!oe(e,t))return u
function l(){f.forEach((function(e){return e()})),f=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=l(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper)
return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,q)})),s&&f.addEventListener("resize",n.update,q),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,q)})),s&&f.removeEventListener("resize",n.update,q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name
t.modifiersData[n]=Q({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:g(t.placement),variation:S(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy}
null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,_(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,_(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},v,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,s=n.offset,f=void 0===s?[0,0]:s,p=c.reduce((function(e,n){return e[n]=function(e,t,n){var o=g(e),s=[a,r].indexOf(o)>=0?-1:1,f="function"==typeof n?n(Object.assign({},t,{placement:e})):n,c=f[0],p=f[1]
return c=c||0,p=(p||0)*s,[a,i].indexOf(o)>=0?{x:p,y:c}:{x:c,y:p}}(n,t.rects,f),e}),{}),u=p[t.placement],l=u.x,d=u.y
null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=d),t.modifiersData[o]=p}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name
if(!t.modifiersData[s]._skip){for(var f=n.mainAxis,c=void 0===f||f,p=n.altAxis,u=void 0===p||p,l=n.fallbackPlacements,d=n.padding,h=n.boundary,m=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,x=t.options.placement,O=g(x),j=l||(O!==x&&b?function(e){if("auto"===g(e))return[]
var t=N(e)
return[F(e),t,F(t)]}(x):[N(x)]),E=[x].concat(j).reduce((function(e,n){return e.concat("auto"===g(n)?$(t,{placement:n,boundary:h,rootBoundary:m,padding:d,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),D=t.rects.reference,A=t.rects.popper,k=new Map,L=!0,W=E[0],M=0;M<E.length;M++){var P=E[M],B=g(P),H="start"===S(P),R=[r,o].indexOf(B)>=0,T=R?"width":"height",V=Z(t,{placement:P,boundary:h,rootBoundary:m,altBoundary:v,padding:d}),_=R?H?i:a:H?o:r
D[T]>A[T]&&(_=N(_))
var q=N(_),C=[]
if(c&&C.push(V[B]<=0),u&&C.push(V[_]<=0,V[q]<=0),C.every((function(e){return e}))){W=P,L=!1
break}k.set(P,C)}if(L)for(var I=function(e){var t=E.find((function(t){var n=k.get(t)
if(n)return n.slice(0,e).every((function(e){return e}))}))
if(t)return W=t,"break"},U=b?3:1;U>0&&"break"!==I(U);U--);t.placement!==W&&(t.modifiersData[s]._skip=!0,t.placement=W,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,s=e.name,f=n.mainAxis,c=void 0===f||f,p=n.altAxis,u=void 0!==p&&p,l=n.boundary,d=n.rootBoundary,h=n.altBoundary,m=n.padding,v=n.tether,w=void 0===v||v,x=n.tetherOffset,O=void 0===x?0:x,j=Z(t,{boundary:l,rootBoundary:d,padding:m,altBoundary:h}),D=g(t.placement),A=S(t.placement),k=!A,L=B(D),W="x"===L?"y":"x",M=t.modifiersData.popperOffsets,R=t.rects.reference,T=t.rects.popper,V="function"==typeof O?O(Object.assign({},t.rects,{placement:t.placement})):O,_="number"==typeof V?{mainAxis:V,altAxis:V}:Object.assign({mainAxis:0,altAxis:0},V),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,C={x:0,y:0}
if(M){if(c){var N,I="y"===L?r:a,F="y"===L?o:i,U="y"===L?"height":"width",z=M[L],J=z+j[I],X=z-j[F],Y=w?-T[U]/2:0,G="start"===A?R[U]:T[U],K="start"===A?-T[U]:-R[U],Q=t.elements.arrow,$=w&&Q?E(Q):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[I],ne=ee[F],re=H(0,R[U],$[U]),oe=k?R[U]/2-Y-re-te-_.mainAxis:G-re-te-_.mainAxis,ie=k?-R[U]/2+Y+re+ne+_.mainAxis:K+re+ne+_.mainAxis,ae=t.elements.arrow&&P(t.elements.arrow),se=ae?"y"===L?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(N=null==q?void 0:q[L])?N:0,ce=z+ie-fe,pe=H(w?b(J,z+oe-fe-se):J,z,w?y(X,ce):X)
M[L]=pe,C[L]=pe-z}if(u){var ue,le="x"===L?r:a,de="x"===L?o:i,he=M[W],me="y"===W?"height":"width",ve=he+j[le],ge=he-j[de],ye=-1!==[r,a].indexOf(D),be=null!=(ue=null==q?void 0:q[W])?ue:0,we=ye?ve:he-R[me]-T[me]-be+_.altAxis,xe=ye?he+R[me]+T[me]-be-_.altAxis:ge,Oe=w&&ye?function(e,t,n){var r=H(e,t,n)
return r>n?n:r}(we,he,xe):H(w?we:ve,he,w?xe:ge)
M[W]=Oe,C[W]=Oe-he}t.modifiersData[s]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,f=e.name,c=e.options,p=n.elements.arrow,u=n.modifiersData.popperOffsets,l=g(n.placement),d=B(l),h=[a,i].indexOf(l)>=0?"height":"width"
if(p&&u){var m=function(e,t){return R("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:T(e,s))}(c.padding,n),v=E(p),y="y"===d?r:a,b="y"===d?o:i,w=n.rects.reference[h]+n.rects.reference[d]-u[d]-n.rects.popper[h],x=u[d]-n.rects.reference[d],O=P(p),j=O?"y"===d?O.clientHeight||0:O.clientWidth||0:0,D=w/2-x/2,A=m[y],k=j-v[h]-m[b],L=j/2-v[h]/2+D,W=H(A,L,k),M=d
n.modifiersData[f]=((t={})[M]=W,t.centerOffset=W-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n
null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&D(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Z(t,{elementContext:"reference"}),s=Z(t,{altBoundary:!0}),f=ee(a,r),c=ee(s,o,i),p=te(f),u=te(c)
t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]})}}])

//# sourceMappingURL=https://multipassui-production-c.squarecdn.com/assets/chunk.2.11e38c1241079c56b5e3-1d5a7f1e962e7013254bff300586e716.map