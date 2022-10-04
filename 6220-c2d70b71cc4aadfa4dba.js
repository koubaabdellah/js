(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6220],{48389:function(e,t,n){var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,o=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),v=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return f.Date.now()};function m(e,t,n){var r,a,s,o,c,l,u=0,f=!1,v=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function g(t){var n=r,i=a;return r=a=void 0,u=t,o=e.apply(i,n)}function w(e){return u=e,c=setTimeout(N,t),f?g(e):o}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-u>=s}function N(){var e=y();if(O(e))return j(e);c=setTimeout(N,function(e){var n=t-(e-l);return v?p(n,s-(e-u)):n}(e))}function j(e){return c=void 0,m&&r?g(e):(r=a=void 0,o)}function k(){var e=y(),n=O(e);if(r=arguments,a=this,l=e,n){if(void 0===c)return w(l);if(v)return c=setTimeout(N,t),g(l)}return void 0===c&&(c=setTimeout(N,t)),o}return t=h(t)||0,b(n)&&(f=!!n.leading,s=(v="maxWait"in n)?d(h(n.maxWait)||0,t):s,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=l=a=c=void 0},k.flush=function(){return void 0===c?o:j(y())},k}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=s.test(e);return n||o.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),m(e,t,{leading:r,maxWait:t,trailing:a})}},70071:function(e,t,n){"use strict";n.d(t,{G:function(){return b}});var i=n(64649),r=function(e){return"function"===typeof e},a=function(e){return Array.apply(null,new Array(e+1)).map((function(t,n){return function(e){return Math.round(100*e)/100}(n/e)}))},s=n(79460),o=n(31714),c=n(57190);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f="ScrollObserver",v=function(e,t){this.visible=!1,this.alreadyFired=!1},d=function(e){var t=u({element:null,className:null},e);t.element||(0,s.v)(f,"Be sure to set a const toggleElement = (reactRef.current or document.querySelector) in the new ".concat(f,"({ toggle: { element: toggleElement } })")),t.className||(0,s.v)(f,"Be sure to set the className you want to toggle in the new ".concat(f,'({ toggle: { className: "my-class" } })')),this.add=function(){!t.element.classList.contains(t.className)&&t.element.classList.add(t.className)},this.remove=function(){t.element.classList.contains(t.className)&&t.element.classList.remove(t.className)},this.update=function(e){!e.alreadyFired&&e.visible&&this.add(),e.alreadyFired&&!e.visible&&this.remove()}},p=function(e){var t=u({timeline:null,yoyo:!1,speed:1,reverseSpeed:1,delay:2},e);t.timeline||(0,s.v)(f,"Be sure to set a const tl = gsap.timeline({ paused: true }) in the new ".concat(f,"({ gsap: { timeline: tl } })"));var n=t.timeline;t.yoyo&&n.repeat(-1).yoyo(t.yoyo).repeatDelay(t.delay),this.play=function(){n.timeScale(t.speed).play()},this.pause=function(){n.pause()},this.reverse=function(){n.timeScale(t.reverseSpeed).reverse()},this.kill=function(){n&&(n.pause(0),n.kill())},this.update=function(e){!e.alreadyFired&&e.visible&&this.play(),e.alreadyFired&&!e.visible&&(t.yoyo?this.pause():this.reverse())},this.scrub=function(e){n.progress(e)}},y=function(e){var t=u({element:null,playingClassName:null,pausedClassName:null},e);function n(){t.element.src&&(t.element.pause(),t.pausedClassName&&t.element.classList.add(t.pausedClassName),t.playingClassName&&t.element.classList.remove(t.playingClassName))}function i(){try{t.element.src&&(t.element.play(),t.playingClassName&&t.element.classList.add(t.playingClassName),t.pausedClassName&&t.element.classList.remove(t.pausedClassName))}catch(e){n()}}function r(){try{n()}catch(e){}}t.element||(0,s.v)(f,"Be sure to set a video element in the new ".concat(f,"({ video: { element: videoRef.current } })")),this.play=function(){i()},this.pause=function(){r()},this.kill=function(){r()},this.update=function(e){!e.alreadyFired&&e.visible&&this.play(),e.alreadyFired&&!e.visible&&this.pause()}},m=function(e){var t=u({active:null,notActive:null},e);t.active||t.notActive||(0,s.v)(f,"Be sure to set a callback active or notActive function in the new ".concat(f,"({ callback: { active: () => () } })")),(t.active&&!r(t.active)||t.notActive&&!r(t.notActive))&&(0,s.v)(f,"Be sure to set the callback as a function "),this.update=function(e){!e.alreadyFired&&e.visible&&t.active&&t.active(),e.alreadyFired&&!e.visible&&t.notActive&&t.notActive()}},b=function(e){var t=e.breakpoints,n=e.callback,i=e.destroyImmediately,r=e.gsap,l=e.observer,b=e.offset,h=e.whenVisible,g=e.thresholds,w=e.toggle,O=e.triggerElement,N=e.useDuration,j=e.video;O||(0,s.v)(f,"Be sure to set a const triggerElement = (reactRef.current or document.querySelector) in the new ScrollScene({ triggerElement: triggerElement })");var k,E,F,S,C,A=this,x="0% 0%",D=new v(!1,!1);"number"===typeof b?x="-".concat(Math.abs(b),"px 0%"):"string"===typeof b&&(x="-".concat(Math.abs(parseFloat(b)),"% 0%")),w&&(0,o.K)(w)&&(k=new d(w)),r&&(0,o.K)(r)&&(E=new p(r)),j&&(0,o.K)(j)&&(F=new y(j)),n&&(0,o.K)(n)&&(S=new m(n));var L=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio;C?D.visible=n>=C:t&&!D.visible?D.visible=!0:!t&&D.visible&&(D.visible=!1),k&&k.update(D),E&&(N?E.scrub(n):E.update(D)),F&&F.update(D),S&&S.update(D),!D.alreadyFired&&D.visible&&(D.alreadyFired=!0),D.alreadyFired&&!D.visible&&(D.alreadyFired=!1),t&&i&&A.destroy()}))}),u({threshold:function(){var e={one:[0,1],gsap:a(199)},t=e.one;return h&&(t=function(e){var t;"string"!==typeof h&&(t="%",-1===h.indexOf(t))&&(0,s.v)(f,'Be sure to set a percentage as a string. { whenVisible: "50%" }');var n=parseInt(e.replace("%",""))/100;return C=n,n}(h)),N&&(t=e.gsap),g&&(t=a(g)),t}(),rootMargin:x},l));this.init=function(){L.observe(O)},this.destroy=function(){O&&L&&(k&&k.remove(),E&&E.kill(),F&&F.kill(),L.unobserve(O))},(0,c.D)(t,this.init,this.destroy)}},79460:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});var i=function(e,t){throw new Error("".concat(e," -> ").concat(t))}},31714:function(e,t,n){"use strict";n.d(t,{K:function(){return r}});var i=n(33940),r=function(e){return"object"===(0,i.Z)(e)&&!Array.isArray(e)&&null!==e}},57190:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var i=n(48389),r=n.n(i),a=n(31714),s=function(e,t,n){if((0,a.K)(e)){var i=Object.keys(e).reverse(),s=function(){for(var r=0;r<i.length;r+=1){var a=parseFloat(i[r]);if(a<=window.innerWidth){e[a]?t():n();break}}};s(),window.addEventListener("resize",r()(s,700))}else t()}}}]);