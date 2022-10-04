/*! sdp-prototypes 1.80.0 2022090120f9b809da 45ce9aa6d2d9288628d2f332a6523980 */
webpackJsonp([5],{smL4:function(t,e,i){var n;!function(e,i){"use strict";"object"==typeof t&&"object"==typeof t.exports?e.document?i(e,e.document,"Hammer"):t.exports=function(t){if(!t.document)throw new Error("Hammer requires a window with a document");return i(t,t.document,"Hammer")}:i(e,e.document,"Hammer")}("undefined"!=typeof window?window:this,function(r,s,o){"use strict";var a,u=["","webkit","Moz","MS","ms","o"],h=s.createElement("div"),c="function",l=Math.round,p=Math.abs,f=Date.now;function v(t,e,i){return setTimeout(I(t,i),e)}function d(t,e,i){return!!Array.isArray(t)&&(m(t,i[e],i),!0)}function m(t,e,i){var n;if(t)if(t.forEach)t.forEach(e,i);else if(void 0!==t.length)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}function g(t,e,i){var n="DEPRECATED METHOD: "+e+"\n"+i+" AT \n";return function(){var e=new Error("get-stack-trace"),i=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=r.console&&(r.console.warn||r.console.log);return s&&s.call(r.console,n,i),t.apply(this,arguments)}}a="function"!=typeof Object.assign?function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(void 0!==n&&null!==n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}:Object.assign;var T=g(function(t,e,i){for(var n=Object.keys(e),r=0;r<n.length;)(!i||i&&void 0===t[n[r]])&&(t[n[r]]=e[n[r]]),r++;return t},"extend","Use `assign`."),y=g(function(t,e){return T(t,e,!0)},"merge","Use `assign`.");function E(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&a(n,i)}function I(t,e){return function(){return t.apply(e,arguments)}}function A(t,e){return typeof t==c?t.apply(e&&e[0]||void 0,e):t}function b(t,e){return void 0===t?e:t}function w(t,e,i){m(P(e),function(e){t.addEventListener(e,i,!1)})}function _(t,e,i){m(P(e),function(e){t.removeEventListener(e,i,!1)})}function C(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function S(t,e){return t.indexOf(e)>-1}function P(t){return t.trim().split(/\s+/g)}function D(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function O(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];D(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function R(t,e){for(var i,n,r=e[0].toUpperCase()+e.slice(1),s=0;s<u.length;){if((n=(i=u[s])?i+r:e)in t)return n;s++}}var M=1;function z(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var N="ontouchstart"in r,X=void 0!==R(r,"PointerEvent"),Y=N&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),F=25,q=1,H=2,W=4,k=8,L=1,j=2,U=4,V=8,G=16,Z=j|U,B=V|G,J=Z|B,$=["x","y"],K=["clientX","clientY"];function Q(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){A(t.options.enable,[t])&&i.handler(e)},this.init()}function tt(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&q&&n-r==0,o=e&(W|k)&&n-r==0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=et(e));r>1&&!i.firstMultiple?i.firstMultiple=et(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,a=o?o.center:s.center,u=e.center=it(n);e.timeStamp=f(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=ot(a,u),e.distance=st(a,u),function(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==q&&s.eventType!==W||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y});e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}(i,e),e.offsetDirection=rt(e.deltaX,e.deltaY);var h=nt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=p(h.x)>p(h.y)?h.x:h.y,e.scale=o?(c=o.pointers,l=n,st(l[0],l[1],K)/st(c[0],c[1],K)):1,e.rotation=o?function(t,e){return ot(e[1],e[0],K)+ot(t[1],t[0],K)}(o.pointers,n):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,function(t,e){var i,n,r,s,o=t.lastInterval||e,a=e.timeStamp-o.timeStamp;if(e.eventType!=k&&(a>F||void 0===o.velocity)){var u=e.deltaX-o.deltaX,h=e.deltaY-o.deltaY,c=nt(a,u,h);n=c.x,r=c.y,i=p(c.x)>p(c.y)?c.x:c.y,s=rt(u,h),t.lastInterval=e}else i=o.velocity,n=o.velocityX,r=o.velocityY,s=o.direction;e.velocity=i,e.velocityX=n,e.velocityY=r,e.direction=s}(i,e);var c,l;var v=t.element;C(e.srcEvent.target,v)&&(v=e.srcEvent.target);e.target=v}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function et(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:l(t.pointers[i].clientX),clientY:l(t.pointers[i].clientY)},i++;return{timeStamp:f(),pointers:e,center:it(e),deltaX:t.deltaX,deltaY:t.deltaY}}function it(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:l(i/e),y:l(n/e)}}function nt(t,e,i){return{x:e/t||0,y:i/t||0}}function rt(t,e){return t===e?L:p(t)>=p(e)?t<0?j:U:e<0?V:G}function st(t,e,i){i||(i=$);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function ot(t,e,i){i||(i=$);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return 180*Math.atan2(r,n)/Math.PI}Q.prototype={handler:function(){},init:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(z(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&_(this.element,this.evEl,this.domHandler),this.evTarget&&_(this.target,this.evTarget,this.domHandler),this.evWin&&_(z(this.element),this.evWin,this.domHandler)}};var at={mousedown:q,mousemove:H,mouseup:W},ut="mousedown",ht="mousemove mouseup";function ct(){this.evEl=ut,this.evWin=ht,this.pressed=!1,Q.apply(this,arguments)}E(ct,Q,{handler:function(t){var e=at[t.type];e&q&&0===t.button&&(this.pressed=!0),e&H&&1!==t.which&&(e=W),this.pressed&&(e&W&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var lt={pointerdown:q,pointermove:H,pointerup:W,pointercancel:k,pointerout:k},pt={2:"touch",3:"pen",4:"mouse",5:"kinect"},ft="pointerdown",vt="pointermove pointerup pointercancel";function dt(){this.evEl=ft,this.evWin=vt,Q.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(ft="MSPointerDown",vt="MSPointerMove MSPointerUp MSPointerCancel"),E(dt,Q,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=lt[n],s=pt[t.pointerType]||t.pointerType,o="touch"==s,a=D(e,t.pointerId,"pointerId");r&q&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):r&(W|k)&&(i=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var mt={touchstart:q,touchmove:H,touchend:W,touchcancel:k},gt="touchstart",Tt="touchstart touchmove touchend touchcancel";function yt(){this.evTarget=gt,this.evWin=Tt,this.started=!1,Q.apply(this,arguments)}E(yt,Q,{handler:function(t){var e=mt[t.type];if(e===q&&(this.started=!0),this.started){var i=function(t,e){var i=x(t.touches),n=x(t.changedTouches);e&(W|k)&&(i=O(i.concat(n),"identifier",!0));return[i,n]}.call(this,t,e);e&(W|k)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}}});var Et={touchstart:q,touchmove:H,touchend:W,touchcancel:k},It="touchstart touchmove touchend touchcancel";function At(){this.evTarget=It,this.targetIds={},Q.apply(this,arguments)}E(At,Q,{handler:function(t){var e=Et[t.type],i=function(t,e){var i=x(t.touches),n=this.targetIds;if(e&(q|H)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=x(t.changedTouches),a=[],u=this.target;if(s=i.filter(function(t){return C(t.target,u)}),e===q)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;r=0;for(;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(W|k)&&delete n[o[r].identifier],r++;if(!a.length)return;return[O(s.concat(a),"identifier",!0),a]}.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:"touch",srcEvent:t})}});var bt=2500,wt=25;function _t(){Q.apply(this,arguments);var t=I(this.handler,this);this.touch=new At(this.manager,t),this.mouse=new ct(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ct(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},bt)}}E(_t,Q,{handler:function(t,e,i){var n="touch"==i.pointerType,r="mouse"==i.pointerType;if(!(r&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(n)(function(t,e){t&q?(this.primaryTouch=e.changedPointers[0].identifier,Ct.call(this,e)):t&(W|k)&&Ct.call(this,e)}).call(this,e,i);else if(r&&function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(s<=wt&&o<=wt)return!0}return!1}.call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var St=R(h.style,"touchAction"),Pt=void 0!==St,Dt="auto",xt="manipulation",Ot="none",Rt="pan-x",Mt="pan-y",zt=function(){if(!Pt)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(i){t[i]=!e||r.CSS.supports("touch-action",i)}),t}();function Nt(t,e){this.manager=t,this.set(e)}Nt.prototype={set:function(t){"compute"==t&&(t=this.compute()),Pt&&this.manager.element.style&&zt[t]&&(this.manager.element.style[St]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,function(e){A(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(S(t,Ot))return Ot;var e=S(t,Rt),i=S(t,Mt);if(e&&i)return Ot;if(e||i)return e?Rt:Mt;if(S(t,xt))return xt;return Dt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var n=this.actions,r=S(n,Ot)&&!zt[Ot],s=S(n,Mt)&&!zt[Mt],o=S(n,Rt)&&!zt[Rt];if(r){var a=1===t.pointers.length,u=t.distance<2,h=t.deltaTime<250;if(a&&u&&h)return}if(!o||!s)return r||s&&i&Z||o&&i&B?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var Xt=1,Yt=2,Ft=4,qt=8,Ht=qt,Wt=16;function kt(t){this.options=a({},this.defaults,t||{}),this.id=M++,this.manager=null,this.options.enable=b(this.options.enable,!0),this.state=Xt,this.simultaneous={},this.requireFail=[]}function Lt(t){return t&Wt?"cancel":t&qt?"end":t&Ft?"move":t&Yt?"start":""}function jt(t){return t==G?"down":t==V?"up":t==j?"left":t==U?"right":""}function Ut(t,e){var i=e.manager;return i?i.get(t):t}function Vt(){kt.apply(this,arguments)}function Gt(){Vt.apply(this,arguments),this.pX=null,this.pY=null}function Zt(){Vt.apply(this,arguments)}function Bt(){kt.apply(this,arguments),this._timer=null,this._input=null}function Jt(){Vt.apply(this,arguments)}function $t(){Vt.apply(this,arguments)}function Kt(){kt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Qt(t,e){return(e=e||{}).recognizers=b(e.recognizers,Qt.defaults.preset),new te(t,e)}kt.prototype={defaults:{},set:function(t){return a(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(d(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Ut(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return d(t,"dropRecognizeWith",this)?this:(t=Ut(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(d(t,"requireFailure",this))return this;var e=this.requireFail;return-1===D(e,t=Ut(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(d(t,"dropRequireFailure",this))return this;t=Ut(t,this);var e=D(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<qt&&n(e.options.event+Lt(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=qt&&n(e.options.event+Lt(i))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|Xt)))return!1;t++}return!0},recognize:function(t){var e=a({},t);if(!A(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Ht|Wt|32)&&(this.state=Xt),this.state=this.process(e),this.state&(Yt|Ft|qt|Wt)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},E(Vt,kt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Yt|Ft),r=this.attrTest(t);return n&&(i&k||!r)?e|Wt:n||r?i&W?e|qt:e&Yt?e|Ft:Yt:32}}),E(Gt,Vt,{defaults:{event:"pan",threshold:10,pointers:1,direction:J},getTouchAction:function(){var t=this.options.direction,e=[];return t&Z&&e.push(Mt),t&B&&e.push(Rt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&Z?(r=0===s?L:s<0?j:U,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?L:o<0?V:G,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return Vt.prototype.attrTest.call(this,t)&&(this.state&Yt||!(this.state&Yt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=jt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),E(Zt,Vt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Ot]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Yt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),E(Bt,kt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Dt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(W|k)&&!r)this.reset();else if(t.eventType&q)this.reset(),this._timer=v(function(){this.state=Ht,this.tryEmit()},e.time,this);else if(t.eventType&W)return Ht;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Ht&&(t&&t.eventType&W?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),E(Jt,Vt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Ot]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Yt)}}),E($t,Vt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Z|B,pointers:1},getTouchAction:function(){return Gt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(Z|B)?e=t.overallVelocity:i&Z?e=t.overallVelocityX:i&B&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&p(e)>this.options.velocity&&t.eventType&W},emit:function(t){var e=jt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),E(Kt,kt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[xt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&q&&0===this.count)return this.failTimeout();if(n&&r&&i){if(t.eventType!=W)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||st(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&s?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=v(function(){this.state=Ht,this.tryEmit()},e.interval,this),Yt):Ht}return 32},failTimeout:function(){return this._timer=v(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Ht&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Qt.VERSION="2.0.8",Qt.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Jt,{enable:!1}],[Zt,{enable:!1},["rotate"]],[$t,{direction:Z}],[Gt,{direction:Z},["swipe"]],[Kt],[Kt,{event:"doubletap",taps:2},["tap"]],[Bt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function te(t,e){var i;this.options=a({},Qt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this).options.inputClass||(X?dt:Y?At:N?_t:ct))(i,tt),this.touchAction=new Nt(this,this.options.touchAction),ee(this,!0),m(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ee(t,e){var i,n=t.element;n.style&&(m(t.options.cssProps,function(r,s){i=R(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}te.prototype={set:function(t){return a(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var i;this.touchAction.preventDefaults(t);var n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Ht)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(Yt|Ft|qt)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof kt)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(d(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(d(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=D(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(void 0!==t&&void 0!==e){var i=this.handlers;return m(P(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(void 0!==t){var i=this.handlers;return m(P(t),function(t){e?i[t]&&i[t].splice(D(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var i=s.createEvent("Event");i.initEvent(t,!0,!0),i.gesture=e,e.target.dispatchEvent(i)}(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&ee(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},a(Qt,{INPUT_START:q,INPUT_MOVE:H,INPUT_END:W,INPUT_CANCEL:k,STATE_POSSIBLE:Xt,STATE_BEGAN:Yt,STATE_CHANGED:Ft,STATE_ENDED:qt,STATE_RECOGNIZED:Ht,STATE_CANCELLED:Wt,STATE_FAILED:32,DIRECTION_NONE:L,DIRECTION_LEFT:j,DIRECTION_RIGHT:U,DIRECTION_UP:V,DIRECTION_DOWN:G,DIRECTION_HORIZONTAL:Z,DIRECTION_VERTICAL:B,DIRECTION_ALL:J,Manager:te,Input:Q,TouchAction:Nt,TouchInput:At,MouseInput:ct,PointerEventInput:dt,TouchMouseInput:_t,SingleTouchInput:yt,Recognizer:kt,AttrRecognizer:Vt,Tap:Kt,Pan:Gt,Swipe:$t,Pinch:Zt,Rotate:Jt,Press:Bt,on:w,off:_,each:m,merge:y,extend:T,assign:a,inherit:E,bindFn:I,prefixed:R}),(void 0!==r?r:"undefined"!=typeof self?self:{}).Hammer=Qt,void 0===(n=function(){return Qt}.call(e,i,e,t))||(t.exports=n)})}});