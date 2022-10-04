/*! sdp-prototypes 1.80.0 2022090120f9b809da c5de3c449ceeb0f4f9b47c719508bdd0 */
webpackJsonp([11],{"+Xok":function(e,n,a){"use strict";n.__esModule=!0;var l,t=a("cXff"),r=a("Whac"),i=(l=r)&&l.__esModule?l:{default:l};n.default=function(e){e.registerHelper("each",function(e,n){if(!n)throw new i.default("Must pass iterator to #each");var a=n.fn,l=n.inverse,r=0,o="",s=void 0,u=void 0;function c(n,l,r){s&&(s.key=n,s.index=l,s.first=0===l,s.last=!!r,u&&(s.contextPath=u+n)),o+=a(e[n],{data:s,blockParams:t.blockParams([e[n],n],[u+n,null])})}if(n.data&&n.ids&&(u=t.appendContextPath(n.data.contextPath,n.ids[0])+"."),t.isFunction(e)&&(e=e.call(this)),n.data&&(s=t.createFrame(n.data)),e&&"object"==typeof e)if(t.isArray(e))for(var d=e.length;r<d;r++)r in e&&c(r,r,r===e.length-1);else{var p=void 0;for(var f in e)e.hasOwnProperty(f)&&(void 0!==p&&c(p,r-1),p=f,r++);void 0!==p&&c(p,r-1,!0)}return 0===r&&(o=l(this)),o})},e.exports=n.default},"+b4A":function(e,n,a){e.exports=a("LmTF").default},"3m6q":function(e,n,a){"use strict";function l(e){this.string=e}n.__esModule=!0,l.prototype.toString=l.prototype.toHTML=function(){return""+this.string},n.default=l,e.exports=n.default},"4N7p":function(e,n,a){"use strict";var l=a("SpGf")(a("b9XL"));e.exports=function(e,n,a,t){if(arguments.length<3)throw new Error("Handlebars Helper 'compare' needs 2 parameters");t||(t=e,e=n,n="==");var r={"==":function(e,n){return e==n},"===":function(e,n){return e===n},"!=":function(e,n){return e!=n},"<":function(e,n){return e<n},">":function(e,n){return e>n},"<=":function(e,n){return e<=n},">=":function(e,n){return e>=n},"%":function(e,n){return e%n==0},typeof:function(e,n){return(0,l.default)(e)===n}};if(!r[n])throw new Error("Handlebars Helper 'compare' doesn't know the operator "+n);return r[n](e,a)?t.fn(this):t.inverse(this)}},"5hf4":function(e,n,a){"use strict";n.__esModule=!0,n.checkRevision=function(e){var n=e&&e[0]||1,a=o.COMPILER_REVISION;if(n!==a){if(n<a){var l=o.REVISION_CHANGES[a],t=o.REVISION_CHANGES[n];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+l+") or downgrade your runtime to an older version ("+t+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},n.template=function(e,n){if(!n)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,n.VM.checkRevision(e.compiler);var a={strict:function(e,n){if(!(n in e))throw new i.default('"'+n+'" not defined in '+e);return e[n]},lookup:function(e,n){for(var a=e.length,l=0;l<a;l++)if(e[l]&&null!=e[l][n])return e[l][n]},lambda:function(e,n){return"function"==typeof e?e.call(n):e},escapeExpression:t.escapeExpression,invokePartial:function(a,l,r){r.hash&&(l=t.extend({},l,r.hash),r.ids&&(r.ids[0]=!0));a=n.VM.resolvePartial.call(this,a,l,r);var o=n.VM.invokePartial.call(this,a,l,r);null==o&&n.compile&&(r.partials[r.name]=n.compile(a,e.compilerOptions,n),o=r.partials[r.name](l,r));if(null!=o){if(r.indent){for(var s=o.split("\n"),u=0,c=s.length;u<c&&(s[u]||u+1!==c);u++)s[u]=r.indent+s[u];o=s.join("\n")}return o}throw new i.default("The partial "+r.name+" could not be compiled when running in runtime-only mode")},fn:function(n){var a=e[n];return a.decorator=e[n+"_d"],a},programs:[],program:function(e,n,a,l,t){var r=this.programs[e],i=this.fn(e);return n||t||l||a?r=s(this,e,i,n,a,l,t):r||(r=this.programs[e]=s(this,e,i)),r},data:function(e,n){for(;e&&n--;)e=e._parent;return e},merge:function(e,n){var a=e||n;return e&&n&&e!==n&&(a=t.extend({},n,e)),a},nullContext:Object.seal({}),noop:n.VM.noop,compilerInfo:e.compiler};function l(n){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.data;l._setup(t),!t.partial&&e.useData&&(r=function(e,n){n&&"root"in n||((n=n?o.createFrame(n):{}).root=e);return n}(n,r));var i=void 0,s=e.useBlockParams?[]:void 0;function u(n){return""+e.main(a,n,a.helpers,a.partials,r,s,i)}return e.useDepths&&(i=t.depths?n!=t.depths[0]?[n].concat(t.depths):t.depths:[n]),(u=c(e.main,u,a,t.depths||[],r,s))(n,t)}return l.isTop=!0,l._setup=function(l){l.partial?(a.helpers=l.helpers,a.partials=l.partials,a.decorators=l.decorators):(a.helpers=a.merge(l.helpers,n.helpers),e.usePartial&&(a.partials=a.merge(l.partials,n.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=a.merge(l.decorators,n.decorators)))},l._child=function(n,l,t,r){if(e.useBlockParams&&!t)throw new i.default("must pass block params");if(e.useDepths&&!r)throw new i.default("must pass parent depths");return s(a,n,e[n],l,0,t,r)},l},n.wrapProgram=s,n.resolvePartial=function(e,n,a){e?e.call||a.name||(a.name=e,e=a.partials[e]):e="@partial-block"===a.name?a.data["partial-block"]:a.partials[a.name];return e},n.invokePartial=function(e,n,a){var l=a.data&&a.data["partial-block"];a.partial=!0,a.ids&&(a.data.contextPath=a.ids[0]||a.data.contextPath);var r=void 0;a.fn&&a.fn!==u&&function(){a.data=o.createFrame(a.data);var e=a.fn;r=a.data["partial-block"]=function(n){var a=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return a.data=o.createFrame(a.data),a.data["partial-block"]=l,e(n,a)},e.partials&&(a.partials=t.extend({},a.partials,e.partials))}();void 0===e&&r&&(e=r);if(void 0===e)throw new i.default("The partial "+a.name+" could not be found");if(e instanceof Function)return e(n,a)},n.noop=u;var l,t=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n.default=e,n}(a("cXff")),r=a("Whac"),i=(l=r)&&l.__esModule?l:{default:l},o=a("d7Tx");function s(e,n,a,l,t,r,i){function o(n){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=i;return!i||n==i[0]||n===e.nullContext&&null===i[0]||(o=[n].concat(i)),a(e,n,e.helpers,e.partials,t.data||l,r&&[t.blockParams].concat(r),o)}return(o=c(a,o,e,i,l,r)).program=n,o.depth=i?i.length:0,o.blockParams=t||0,o}function u(){return""}function c(e,n,a,l,r,i){if(e.decorator){var o={};n=e.decorator(n,o,a,l&&l[0],r,i,l),t.extend(n,o)}return n}},"9aTs":function(e,n,a){"use strict";n.__esModule=!0,n.registerDefaultDecorators=function(e){r.default(e)};var l,t=a("gwUs"),r=(l=t)&&l.__esModule?l:{default:l}},EAXt:function(e,n,a){"use strict";e.exports=function(e,n,a){var l=e===n,t=l?a.fn:a.inverse;return"function"==typeof t?t(this):l}},LNjc:function(e,n,a){"use strict";n.__esModule=!0;var l,t=a("Whac"),r=(l=t)&&l.__esModule?l:{default:l};n.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new r.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=n.default},LmTF:function(e,n,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n.default=e,n}n.__esModule=!0;var r=t(a("d7Tx")),i=l(a("3m6q")),o=l(a("Whac")),s=t(a("cXff")),u=t(a("5hf4")),c=l(a("Pvge"));function d(){var e=new r.HandlebarsEnvironment;return s.extend(e,r),e.SafeString=i.default,e.Exception=o.default,e.Utils=s,e.escapeExpression=s.escapeExpression,e.VM=u,e.template=function(n){return u.template(n,e)},e}var p=d();p.create=d,c.default(p),p.default=p,n.default=p,e.exports=n.default},Ode9:function(e,n,a){"use strict";e.exports=function(e,n,a){var l=e!==n,t=l?a.fn:a.inverse;return"function"==typeof t?t(this):l}},Pvge:function(e,n,a){"use strict";(function(a){n.__esModule=!0,n.default=function(e){var n=void 0!==a?a:window,l=n.Handlebars;e.noConflict=function(){return n.Handlebars===e&&(n.Handlebars=l),e}},e.exports=n.default}).call(n,a("h6ac"))},RmbQ:function(e,n,a){"use strict";e.exports=function(e,n){var a=Array.isArray(e),l=a?n.fn:n.inverse;return"function"==typeof l?l(this):a}},Wf8o:function(e,n,a){"use strict";n.__esModule=!0;var l=a("cXff");n.default=function(e){e.registerHelper("blockHelperMissing",function(n,a){var t=a.inverse,r=a.fn;if(!0===n)return r(this);if(!1===n||null==n)return t(this);if(l.isArray(n))return n.length>0?(a.ids&&(a.ids=[a.name]),e.helpers.each(n,a)):t(this);if(a.data&&a.ids){var i=l.createFrame(a.data);i.contextPath=l.appendContextPath(a.data.contextPath,a.name),a={data:i}}return r(n,a)})},e.exports=n.default},Whac:function(e,n,a){"use strict";n.__esModule=!0;var l=["description","fileName","lineNumber","message","name","number","stack"];function t(e,n){var a=n&&n.loc,r=void 0,i=void 0;a&&(e+=" - "+(r=a.start.line)+":"+(i=a.start.column));for(var o=Error.prototype.constructor.call(this,e),s=0;s<l.length;s++)this[l[s]]=o[l[s]];Error.captureStackTrace&&Error.captureStackTrace(this,t);try{a&&(this.lineNumber=r,Object.defineProperty?Object.defineProperty(this,"column",{value:i,enumerable:!0}):this.column=i)}catch(e){}}t.prototype=new Error,n.default=t,e.exports=n.default},Z1fq:function(e,n,a){"use strict";n.__esModule=!0,n.default=function(e){e.registerHelper("lookup",function(e,n){return e&&e[n]})},e.exports=n.default},cInn:function(e,n,a){"use strict";n.__esModule=!0,n.default=function(e){e.registerHelper("log",function(){for(var n=[void 0],a=arguments[arguments.length-1],l=0;l<arguments.length-1;l++)n.push(arguments[l]);var t=1;null!=a.hash.level?t=a.hash.level:a.data&&null!=a.data.level&&(t=a.data.level),n[0]=t,e.log.apply(e,n)})},e.exports=n.default},cXff:function(e,n,a){"use strict";n.__esModule=!0,n.extend=o,n.indexOf=function(e,n){for(var a=0,l=e.length;a<l;a++)if(e[a]===n)return a;return-1},n.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!r.test(e))return e;return e.replace(t,i)},n.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},n.createFrame=function(e){var n=o({},e);return n._parent=e,n},n.blockParams=function(e,n){return e.path=n,e},n.appendContextPath=function(e,n){return(e?e+".":"")+n};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},t=/[&<>"'`=]/g,r=/[&<>"'`=]/;function i(e){return l[e]}function o(e){for(var n=1;n<arguments.length;n++)for(var a in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],a)&&(e[a]=arguments[n][a]);return e}var s=Object.prototype.toString;n.toString=s;var u=function(e){return"function"==typeof e};u(/x/)&&(n.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===s.call(e)}),n.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===s.call(e)};n.isArray=c},d6oL:function(e,n,a){"use strict";n.__esModule=!0;var l=a("cXff");n.default=function(e){e.registerHelper("if",function(e,n){return l.isFunction(e)&&(e=e.call(this)),!n.hash.includeZero&&!e||l.isEmpty(e)?n.inverse(this):n.fn(this)}),e.registerHelper("unless",function(n,a){return e.helpers.if.call(this,n,{fn:a.inverse,inverse:a.fn,hash:a.hash})})},e.exports=n.default},d7Tx:function(e,n,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.HandlebarsEnvironment=u;var t=a("cXff"),r=l(a("Whac")),i=a("i17/"),o=a("9aTs"),s=l(a("xQQ0"));n.VERSION="4.0.11";n.COMPILER_REVISION=7;n.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,n,a){this.helpers=e||{},this.partials=n||{},this.decorators=a||{},i.registerDefaultHelpers(this),o.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:s.default,log:s.default.log,registerHelper:function(e,n){if("[object Object]"===t.toString.call(e)){if(n)throw new r.default("Arg not supported with multiple helpers");t.extend(this.helpers,e)}else this.helpers[e]=n},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,n){if("[object Object]"===t.toString.call(e))t.extend(this.partials,e);else{if(void 0===n)throw new r.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=n}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,n){if("[object Object]"===t.toString.call(e)){if(n)throw new r.default("Arg not supported with multiple decorators");t.extend(this.decorators,e)}else this.decorators[e]=n},unregisterDecorator:function(e){delete this.decorators[e]}};var c=s.default.log;n.log=c,n.createFrame=t.createFrame,n.logger=s.default},gwUs:function(e,n,a){"use strict";n.__esModule=!0;var l=a("cXff");n.default=function(e){e.registerDecorator("inline",function(e,n,a,t){var r=e;return n.partials||(n.partials={},r=function(t,r){var i=a.partials;a.partials=l.extend({},i,n.partials);var o=e(t,r);return a.partials=i,o}),n.partials[t.args[0]]=t.fn,r})},e.exports=n.default},"i17/":function(e,n,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.registerDefaultHelpers=function(e){t.default(e),r.default(e),i.default(e),o.default(e),s.default(e),u.default(e),c.default(e)};var t=l(a("Wf8o")),r=l(a("+Xok")),i=l(a("LNjc")),o=l(a("d6oL")),s=l(a("cInn")),u=l(a("Z1fq")),c=l(a("od+P"))},"od+P":function(e,n,a){"use strict";n.__esModule=!0;var l=a("cXff");n.default=function(e){e.registerHelper("with",function(e,n){l.isFunction(e)&&(e=e.call(this));var a=n.fn;if(l.isEmpty(e))return n.inverse(this);var t=n.data;return n.data&&n.ids&&((t=l.createFrame(n.data)).contextPath=l.appendContextPath(n.data.contextPath,n.ids[0])),a(e,{data:t,blockParams:l.blockParams([e],[t&&t.contextPath])})})},e.exports=n.default},pJbL:function(e,n,a){"use strict";e.exports=function(e,n,a){var l=e>n,t=l?a.fn:a.inverse;return"function"==typeof t?t(this):l}},pw1u:function(e,n,a){"use strict";e.exports=function(e){return JSON.stringify(e)}},r6x9:function(e,n,a){"use strict";a("I5XU"),e.exports=function(){return Array.prototype.slice.call(arguments,0,-1).some(Boolean)}},rfl7:function(e,n,a){"use strict";a("I5XU"),e.exports=function(){return Array.prototype.slice.call(arguments).every(Boolean)}},xQQ0:function(e,n,a){"use strict";(function(l){n.__esModule=!0;var t=a("cXff"),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var n=t.indexOf(r.methodMap,e.toLowerCase());e=n>=0?n:parseInt(e,10)}return e},log:function(e){if(e=r.lookupLevel(e),void 0!==l&&r.lookupLevel(r.level)<=e){var n=r.methodMap[e];l[n]||(n="log");for(var a=arguments.length,t=Array(a>1?a-1:0),i=1;i<a;i++)t[i-1]=arguments[i];l[n].apply(l,t)}}};n.default=r,e.exports=n.default}).call(n,a("wOzr"))},ypPU:function(e,n,a){var l=a("+b4A");function t(e){return e&&(e.__esModule?e.default:e)}e.exports=(l.default||l).template({1:function(e,n,l,r,i){var o,s=null!=n?n:e.nullContext||{};return'          <div class="qv-description-block__headline-media sdp-animation-item">\n              <div class="qv-description-block__headline-media-container'+(null!=(o=l.if.call(s,null!=n?n.sectionHeader:n,{name:"if",hash:{},fn:e.program(2,i,0),inverse:e.noop,data:i}))?o:"")+'">\n'+(null!=(o=t(a("EAXt")).call(s,null!=(o=null!=n?n.headlineMedia:n)?o.type:o,"displayMedia",{name:"is",hash:{},fn:e.program(4,i,0),inverse:e.noop,data:i}))?o:"")+"              </div>\n          </div>\n"},2:function(e,n,a,l,t){return' section-header-align"'},4:function(e,n,l,t,r){var i;return null!=(i=e.invokePartial(a("r1y6"),null!=(i=null!=n?n.headlineMedia:n)?i.props:i,{name:"displayMedia",data:r,indent:"                  ",helpers:l,partials:t,decorators:e.decorators}))?i:""},6:function(e,n,l,r,i){var o,s,u=null!=n?n:e.nullContext||{},c=l.helperMissing,d=e.escapeExpression;return'            <div class="qv-description-block__headline-container">\n              <'+d("function"==typeof(s=null!=(s=l.headlineElement||(null!=n?n.headlineElement:n))?s:c)?s.call(u,{name:"headlineElement",hash:{},data:i}):s)+' class="qv-description-block__title\n                sdp-animation-item\n                '+(null!=(o=l.if.call(u,null!=n?n["align-title"]:n,{name:"if",hash:{},fn:e.program(7,i,0),inverse:e.noop,data:i}))?o:"")+"\n                "+(null!=(o=l.if.call(u,null!=n?n.noWrapTitleMobile:n,{name:"if",hash:{},fn:e.program(9,i,0),inverse:e.noop,data:i}))?o:"")+"\n                "+(null!=(o=l.if.call(u,t(a("r6x9")).call(u,null!=n?n.subHead:n,null!=n?n.label:n,null!=n?n.copy:n,null!=n?n.details:n,null!=n?n.driverSpecsList:n,null!=n?n.activeVideo:n,t(a("rfl7")).call(u,t(a("RmbQ")).call(u,null!=n?n.alfaButtonArr:n,{name:"isArray",hash:{},data:i}),t(a("pJbL")).call(u,null!=(o=null!=n?n.alfaButtonArr:n)?o.length:o,0,{name:"gt",hash:{},data:i}),{name:"and",hash:{},data:i}),{name:"or",hash:{},data:i}),{name:"if",hash:{},fn:e.program(11,i,0),inverse:e.program(13,i,0),data:i}))?o:"")+'\n              ">\n'+(null!=(o=l.if.call(u,null!=n?n.displayStylingLine:n,{name:"if",hash:{},fn:e.program(15,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.sectionHeader:n,{name:"if",hash:{},fn:e.program(18,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.displayStylingLine:n,{name:"if",hash:{},fn:e.program(23,i,0),inverse:e.noop,data:i}))?o:"")+'                <span class="headline-wrapper '+d("function"==typeof(s=null!=(s=l.headlinepaddingAbove||(null!=n?n.headlinepaddingAbove:n))?s:c)?s.call(u,{name:"headlinepaddingAbove",hash:{},data:i}):s)+" "+d("function"==typeof(s=null!=(s=l.headlinepaddingBelow||(null!=n?n.headlinepaddingBelow:n))?s:c)?s.call(u,{name:"headlinepaddingBelow",hash:{},data:i}):s)+'">\n'+(null!=(o=l.if.call(u,null!=n?n.headline1:n,{name:"if",hash:{},fn:e.program(25,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.headline2:n,{name:"if",hash:{},fn:e.program(31,i,0),inverse:e.noop,data:i}))?o:"")+"\n                </span>\n              </"+d("function"==typeof(s=null!=(s=l.headlineElement||(null!=n?n.headlineElement:n))?s:c)?s.call(u,{name:"headlineElement",hash:{},data:i}):s)+">\n            </div>\n"},7:function(e,n,a,l,t){var r;return"align-"+e.escapeExpression("function"==typeof(r=null!=(r=a["align-title"]||(null!=n?n["align-title"]:n))?r:a.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"align-title",hash:{},data:t}):r)},9:function(e,n,a,l,t){return"no-wrap-title-mobile"},11:function(e,n,a,l,t){return""},13:function(e,n,a,l,t){return"no-bottom-margin"},15:function(e,n,l,r,i){var o;return null!=(o=t(a("4N7p")).call(null!=n?n:e.nullContext||{},null!=n?n.displayLinePosition:n,"==","above",{name:"compare",hash:{},fn:e.program(16,i,0),inverse:e.noop,data:i}))?o:""},16:function(e,n,a,l,t){return'                    <span class="qv-description-block__styling-headline"> </span>\n'},18:function(e,n,a,l,t){var r,i,o=null!=n?n:e.nullContext||{},s=a.helperMissing,u=e.escapeExpression;return'                <div role="text">\n                  <div class="qv-description-block__section-header sdp-animation-item '+(null!=(r=a.if.call(o,null!=n?n.headlineMedia:n,{name:"if",hash:{},fn:e.program(19,t,0),inverse:e.noop,data:t}))?r:"")+" tablet-up "+u("function"==typeof(i=null!=(i=a.preHeadlineClass||(null!=n?n.preHeadlineClass:n))?i:s)?i.call(o,{name:"preHeadlineClass",hash:{},data:t}):i)+" "+(null!=(r=a.if.call(o,null!=n?n.preHeadlineOverride:n,{name:"if",hash:{},fn:e.program(21,t,0),inverse:e.noop,data:t}))?r:"")+'">'+(null!=(r="function"==typeof(i=null!=(i=a.sectionHeader||(null!=n?n.sectionHeader:n))?i:s)?i.call(o,{name:"sectionHeader",hash:{},data:t}):i)?r:"")+'</div>\n                  <div class="qv-description-block__section-header sdp-animation-item '+(null!=(r=a.if.call(o,null!=n?n.headlineMedia:n,{name:"if",hash:{},fn:e.program(19,t,0),inverse:e.noop,data:t}))?r:"")+" phablet-down "+u("function"==typeof(i=null!=(i=a.preHeadlineClass||(null!=n?n.preHeadlineClass:n))?i:s)?i.call(o,{name:"preHeadlineClass",hash:{},data:t}):i)+" "+(null!=(r=a.if.call(o,null!=n?n.preHeadlineOverride:n,{name:"if",hash:{},fn:e.program(21,t,0),inverse:e.noop,data:t}))?r:"")+'">'+(null!=(r="function"==typeof(i=null!=(i=a.sectionHeader||(null!=n?n.sectionHeader:n))?i:s)?i.call(o,{name:"sectionHeader",hash:{},data:t}):i)?r:"")+"</div>\n                </div>\n"},19:function(e,n,a,l,t){return"with-headline-media"},21:function(e,n,a,l,t){return"gcss-typography-override"},23:function(e,n,l,r,i){var o;return null!=(o=t(a("4N7p")).call(null!=n?n:e.nullContext||{},null!=n?n.displayLinePosition:n,"==","below",{name:"compare",hash:{},fn:e.program(16,i,0),inverse:e.noop,data:i}))?o:""},25:function(e,n,l,r,i){var o,s,u=null!=n?n:e.nullContext||{},c=l.helperMissing;return'                  <span class="text '+(null!=(o=t(a("Ode9")).call(u,null!=n?n.headline1FontWeight:n,"regular",{name:"not",hash:{},fn:e.program(26,i,0),inverse:e.noop,data:i}))?o:"")+" "+(null!=(o=l.if.call(u,null!=n?n.italicizeHeadline1:n,{name:"if",hash:{},fn:e.program(29,i,0),inverse:e.noop,data:i}))?o:"")+" gcss-colors-text-body-primary "+e.escapeExpression("function"==typeof(s=null!=(s=l.headline1Class||(null!=n?n.headline1Class:n))?s:c)?s.call(u,{name:"headline1Class",hash:{},data:i}):s)+" "+(null!=(o=l.if.call(u,null!=n?n.headlineOverride:n,{name:"if",hash:{},fn:e.program(21,i,0),inverse:e.noop,data:i}))?o:"")+'">\n                    '+(null!=(o="function"==typeof(s=null!=(s=l.headline1||(null!=n?n.headline1:n))?s:c)?s.call(u,{name:"headline1",hash:{},data:i}):s)?o:"")+"\n                  </span>\n"},26:function(e,n,a,l,t){var r;return" "+(null!=(r=a.if.call(null!=n?n:e.nullContext||{},null!=n?n.headline1FontWeight:n,{name:"if",hash:{},fn:e.program(27,t,0),inverse:e.noop,data:t}))?r:"")+" "},27:function(e,n,a,l,t){var r;return"text--"+e.escapeExpression("function"==typeof(r=null!=(r=a.headline1FontWeight||(null!=n?n.headline1FontWeight:n))?r:a.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"headline1FontWeight",hash:{},data:t}):r)},29:function(e,n,a,l,t){return"text--italicize"},31:function(e,n,l,r,i){var o,s,u=null!=n?n:e.nullContext||{},c=l.helperMissing;return'                  <span class="text '+(null!=(o=t(a("Ode9")).call(u,null!=n?n.headline2FontWeight:n,"regular",{name:"not",hash:{},fn:e.program(32,i,0),inverse:e.noop,data:i}))?o:"")+" "+(null!=(o=l.if.call(u,null!=n?n.italicizeHeadline2:n,{name:"if",hash:{},fn:e.program(29,i,0),inverse:e.noop,data:i}))?o:"")+" gcss-colors-text-body-primary "+e.escapeExpression("function"==typeof(s=null!=(s=l.headline2Class||(null!=n?n.headline2Class:n))?s:c)?s.call(u,{name:"headline2Class",hash:{},data:i}):s)+" "+(null!=(o=l.if.call(u,null!=n?n.headlineOverride:n,{name:"if",hash:{},fn:e.program(21,i,0),inverse:e.noop,data:i}))?o:"")+'">'+(null!=(o="function"==typeof(s=null!=(s=l.headline2||(null!=n?n.headline2:n))?s:c)?s.call(u,{name:"headline2",hash:{},data:i}):s)?o:"")+"</span>"},32:function(e,n,a,l,t){var r;return" "+(null!=(r=a.if.call(null!=n?n:e.nullContext||{},null!=n?n.headline2FontWeight:n,{name:"if",hash:{},fn:e.program(33,t,0),inverse:e.noop,data:t}))?r:"")+" "},33:function(e,n,a,l,t){var r;return"text--"+e.escapeExpression("function"==typeof(r=null!=(r=a.headline2FontWeight||(null!=n?n.headline2FontWeight:n))?r:a.helperMissing)?r.call(null!=n?n:e.nullContext||{},{name:"headline2FontWeight",hash:{},data:t}):r)},35:function(e,n,a,l,t){var r,i,o=null!=n?n:e.nullContext||{},s=a.helperMissing,u=e.escapeExpression;return"            <"+u("function"==typeof(i=null!=(i=a.subheadElement||(null!=n?n.subheadElement:n))?i:s)?i.call(o,{name:"subheadElement",hash:{},data:t}):i)+' class="qv-description-block__subhead sdp-animation-item '+u("function"==typeof(i=null!=(i=a.subheadClass||(null!=n?n.subheadClass:n))?i:s)?i.call(o,{name:"subheadClass",hash:{},data:t}):i)+" gcss-colors-text-body-primary "+(null!=(r=a.if.call(o,null!=n?n.subHeadOverride:n,{name:"if",hash:{},fn:e.program(21,t,0),inverse:e.noop,data:t}))?r:"")+'">'+(null!=(r="function"==typeof(i=null!=(i=a.subHead||(null!=n?n.subHead:n))?i:s)?i.call(o,{name:"subHead",hash:{},data:t}):i)?r:"")+"</"+u("function"==typeof(i=null!=(i=a.subheadElement||(null!=n?n.subheadElement:n))?i:s)?i.call(o,{name:"subheadElement",hash:{},data:t}):i)+">\n"},37:function(e,n,a,l,t){var r,i,o=null!=n?n:e.nullContext||{},s=a.helperMissing;return'            <h4 class="qv-description-block__label sdp-animation-item gcss-colors-text-body-primary '+e.escapeExpression("function"==typeof(i=null!=(i=a.labelClass||(null!=n?n.labelClass:n))?i:s)?i.call(o,{name:"labelClass",hash:{},data:t}):i)+" "+(null!=(r=a.if.call(o,null!=n?n.labelOverride:n,{name:"if",hash:{},fn:e.program(38,t,0),inverse:e.noop,data:t}))?r:"")+'">'+(null!=(r="function"==typeof(i=null!=(i=a.label||(null!=n?n.label:n))?i:s)?i.call(o,{name:"label",hash:{},data:t}):i)?r:"")+"</h4>\n"},38:function(e,n,a,l,t){return"gcss-typography-override gcss-typography-font-core-primary"},40:function(e,n,a,l,t){var r,i,o=null!=n?n:e.nullContext||{},s=a.helperMissing;return'            <p class="qv-description-block__copy sdp-animation-item gcss-colors-text-body-primary '+e.escapeExpression("function"==typeof(i=null!=(i=a.copyClass||(null!=n?n.copyClass:n))?i:s)?i.call(o,{name:"copyClass",hash:{},data:t}):i)+" "+(null!=(r=a.if.call(o,null!=n?n.copyOverride:n,{name:"if",hash:{},fn:e.program(41,t,0),inverse:e.noop,data:t}))?r:"")+'">'+(null!=(r="function"==typeof(i=null!=(i=a.copy||(null!=n?n.copy:n))?i:s)?i.call(o,{name:"copy",hash:{},data:t}):i)?r:"")+"</p>\n"},41:function(e,n,a,l,t){return"gcss-typography-override gcss-typography-light gcss-typography-font-core-primary"},43:function(e,n,a,l,t){var r,i,o=null!=n?n:e.nullContext||{};return'            <ul class="qv-description-block__driver-specs qv-description-block__driver-specs--'+e.escapeExpression("function"==typeof(i=null!=(i=a.specAlignment||(null!=n?n.specAlignment:n))?i:a.helperMissing)?i.call(o,{name:"specAlignment",hash:{},data:t}):i)+' sdp-animation-item">\n'+(null!=(r=a.each.call(o,null!=n?n.driverSpecsList:n,{name:"each",hash:{},fn:e.program(44,t,0),inverse:e.noop,data:t}))?r:"")+"            </ul>\n"},44:function(e,n,a,l,t){var r,i,o=null!=n?n:e.nullContext||{},s=a.helperMissing,u=e.escapeExpression;return'              <li class="qv-description-block__driver-specs-row">\n                <span class="qv-description-block__driver-specs-col qv-description-block__driver-specs-col--label '+u("function"==typeof(i=null!=(i=a.dsLabelClass||(null!=n?n.dsLabelClass:n))?i:s)?i.call(o,{name:"dsLabelClass",hash:{},data:t}):i)+" "+(null!=(r=a.if.call(o,null!=n?n.dsLabelOverride:n,{name:"if",hash:{},fn:e.program(45,t,0),inverse:e.noop,data:t}))?r:"")+' gcss-colors-text-body-primary">\n                  '+u("function"==typeof(i=null!=(i=a.label||(null!=n?n.label:n))?i:s)?i.call(o,{name:"label",hash:{},data:t}):i)+':\n                </span>\n                <span class="qv-description-block__driver-specs-col qv-description-block__driver-specs-col--value '+u("function"==typeof(i=null!=(i=a.dsValueClass||(null!=n?n.dsValueClass:n))?i:s)?i.call(o,{name:"dsValueClass",hash:{},data:t}):i)+" "+(null!=(r=a.if.call(o,null!=n?n.dsValueOverride:n,{name:"if",hash:{},fn:e.program(47,t,0),inverse:e.noop,data:t}))?r:"")+' gcss-colors-text-body-primary">\n                  '+u("function"==typeof(i=null!=(i=a.value||(null!=n?n.value:n))?i:s)?i.call(o,{name:"value",hash:{},data:t}):i)+"\n                </span>\n              </li>\n"},45:function(e,n,a,l,t){return"gcss-typography-override gcss-typography-light"},47:function(e,n,a,l,t){return"gcss-typography-override gcss-typography-bold"},49:function(e,n,l,r,i){return'            <div class="qv-description-block__active-video sdp-animation-item gcss-colors-text-body-primary">\n              <div data-component="AlfaActiveVideo"\n                  data-props="'+e.escapeExpression(t(a("pw1u")).call(null!=n?n:e.nullContext||{},n,{name:"stringify",hash:{},data:i}))+'">\n              </div>\n            </div>\n'},51:function(e,n,a,l,t){var r,i=null!=n?n:e.nullContext||{};return'            <div class="qv-description-block__details-panel sdp-animation-item gcss-colors-text-body-primary">\n'+(null!=(r=a.if.call(i,null!=(r=null!=n?n.details:n)?r.label:r,{name:"if",hash:{},fn:e.program(52,t,0),inverse:e.noop,data:t}))?r:"")+(null!=(r=a.if.call(i,null!=(r=null!=n?n.details:n)?r.value:r,{name:"if",hash:{},fn:e.program(54,t,0),inverse:e.noop,data:t}))?r:"")+"            </div>\n"},52:function(e,n,a,l,t){var r,i,o=e.escapeExpression;return'                <p class="label '+o("function"==typeof(i=null!=(i=a.msrpTextClass||(null!=n?n.msrpTextClass:n))?i:a.helperMissing)?i.call(null!=n?n:e.nullContext||{},{name:"msrpTextClass",hash:{},data:t}):i)+'">'+o(e.lambda(null!=(r=null!=n?n.details:n)?r.label:r,n))+"</p>\n"},54:function(e,n,a,l,t){var r,i,o=e.escapeExpression;return'                <p class="value '+o("function"==typeof(i=null!=(i=a.msrpValueClass||(null!=n?n.msrpValueClass:n))?i:a.helperMissing)?i.call(null!=n?n:e.nullContext||{},{name:"msrpValueClass",hash:{},data:t}):i)+'">'+o(e.lambda(null!=(r=null!=n?n.details:n)?r.value:r,n))+"</p>\n"},56:function(e,n,a,l,t){var r,i=null!=n?n:e.nullContext||{},o=a.helperMissing,s=e.escapeExpression;return'            <div class="qv-description-block__disclosure-panel sdp-animation-item">\n              <p class="legal-copy '+s("function"==typeof(r=null!=(r=a.legalClass||(null!=n?n.legalClass:n))?r:o)?r.call(i,{name:"legalClass",hash:{},data:t}):r)+'">'+s("function"==typeof(r=null!=(r=a.disclosureText||(null!=n?n.disclosureText:n))?r:o)?r.call(i,{name:"disclosureText",hash:{},data:t}):r)+"</p>\n            </div>\n"},58:function(e,n,a,l,t){var r;return'            <div class="qv-description-block__buttons-container sdp-animation-item">\n'+(null!=(r=a.each.call(null!=n?n:e.nullContext||{},null!=n?n.alfaButtonArr:n,{name:"each",hash:{},fn:e.program(59,t,0),inverse:e.noop,data:t}))?r:"")+"            </div>\n"},59:function(e,n,l,t,r){var i;return null!=(i=e.invokePartial(a("J4ud"),null!=n?n.props:n,{name:"alfaButton",data:r,indent:"                ",helpers:l,partials:t,decorators:e.decorators}))?i:""},compiler:[7,">= 4.0.0"],main:function(e,n,l,r,i){var o,s,u=null!=n?n:e.nullContext||{},c=l.helperMissing,d=e.escapeExpression;return'<div class="qv-description-block gcss-theme-'+d("function"==typeof(s=null!=(s=l.theme||(null!=n?n.theme:n))?s:c)?s.call(u,{name:"theme",hash:{},data:i}):s)+" qv-description-block--align-text-"+d("function"==typeof(s=null!=(s=l.alignText||(null!=n?n.alignText:n))?s:c)?s.call(u,{name:"alignText",hash:{},data:i}):s)+' data-image-index="'+d("function"==typeof(s=null!=(s=l.imageIndex||(null!=n?n.imageIndex:n))?s:c)?s.call(u,{name:"imageIndex",hash:{},data:i}):s)+'">\n    <div class="qv-description-block__row">\n'+(null!=(o=l.if.call(u,null!=n?n.headlineMedia:n,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i}))?o:"")+'\n        <div class="qv-description-block__content-wrapper">\n'+(null!=(o=l.if.call(u,t(a("r6x9")).call(u,null!=n?n.headline1:n,null!=n?n.headline2:n,{name:"or",hash:{},data:i}),{name:"if",hash:{},fn:e.program(6,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.subHead:n,{name:"if",hash:{},fn:e.program(35,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.label:n,{name:"if",hash:{},fn:e.program(37,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.copy:n,{name:"if",hash:{},fn:e.program(40,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.driverSpecsList:n,{name:"if",hash:{},fn:e.program(43,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.activeVideo:n,{name:"if",hash:{},fn:e.program(49,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.details:n,{name:"if",hash:{},fn:e.program(51,i,0),inverse:e.noop,data:i}))?o:"")+(null!=(o=l.if.call(u,null!=n?n.disclosureText:n,{name:"if",hash:{},fn:e.program(56,i,0),inverse:e.noop,data:i}))?o:"")+"\n"+(null!=(o=l.if.call(u,null!=n?n.alfaButtonArr:n,{name:"if",hash:{},fn:e.program(58,i,0),inverse:e.noop,data:i}))?o:"")+"        </div>\n    </div>\n</div>\n"},usePartial:!0,useData:!0})}});