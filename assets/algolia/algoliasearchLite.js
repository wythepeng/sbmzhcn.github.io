!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).algoliasearch=e()}}(function(){return function i(a,s,c){function u(r,e){if(!s[r]){if(!a[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(l)return l(r,!0);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}var n=s[r]={exports:{}};a[r][0].call(n.exports,function(e){var t=a[r][1][e];return u(t||e)},n,n.exports,i,a,s,c)}return s[r].exports}for(var l="function"==typeof require&&require,e=0;e<c.length;e++)u(c[e]);return u}({1:[function(r,o,i){(function(t){function e(){var e;try{e=i.storage.debug}catch(e){}return!e&&void 0!==t&&"env"in t&&(e=t.env.DEBUG),e}(i=o.exports=r(2)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},i.formatArgs=function(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+i.humanize(this.diff),!t)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,n=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(n=o))}),e.splice(n,0,r)},i.save=function(e){try{null==e?i.storage.removeItem("debug"):i.storage.debug=e}catch(e){}},i.load=e,i.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},i.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),i.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],i.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},i.enable(e())}).call(this,r(11))},{11:11,2:2}],2:[function(e,t,s){var c;function r(e){function o(){if(o.enabled){var n=o,e=+new Date,t=e-(c||e);n.diff=t,n.prev=c,n.curr=e,c=e;for(var i=new Array(arguments.length),r=0;r<i.length;r++)i[r]=arguments[r];i[0]=s.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var a=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(e,t){if("%%"===e)return e;a++;var r=s.formatters[t];if("function"==typeof r){var o=i[a];e=r.call(n,o),i.splice(a,1),a--}return e}),s.formatArgs.call(n,i),(o.log||s.log||console.log.bind(console)).apply(n,i)}}return o.namespace=e,o.enabled=s.enabled(e),o.useColors=s.useColors(),o.color=function(e){var t,r=0;for(t in e)r=(r<<5)-r+e.charCodeAt(t),r|=0;return s.colors[Math.abs(r)%s.colors.length]}(e),"function"==typeof s.init&&s.init(o),o}(s=t.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},s.disable=function(){s.enable("")},s.enable=function(e){s.save(e),s.names=[],s.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),r=t.length,o=0;o<r;o++)t[o]&&("-"===(e=t[o].replace(/\*/g,".*?"))[0]?s.skips.push(new RegExp("^"+e.substr(1)+"$")):s.names.push(new RegExp("^"+e+"$")))},s.enabled=function(e){var t,r;for(t=0,r=s.skips.length;t<r;t++)if(s.skips[t].test(e))return!1;for(t=0,r=s.names.length;t<r;t++)if(s.names[t].test(e))return!0;return!1},s.humanize=e(8),s.names=[],s.skips=[],s.formatters={}},{8:8}],3:[function(B,r,o){(function($,L){var e,t;e=this,t=function(){"use strict";function u(e){return"function"==typeof e}var r=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},o=0,t=void 0,n=void 0,s=function(e,t){f[o]=e,f[o+1]=t,2===(o+=2)&&(n?n(h):v())};var e="undefined"!=typeof window?window:void 0,i=e||{},a=i.MutationObserver||i.WebKitMutationObserver,c="undefined"==typeof self&&void 0!==$&&"[object process]"==={}.toString.call($),l="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var e=setTimeout;return function(){return e(h,1)}}var f=new Array(1e3);function h(){for(var e=0;e<o;e+=2){(0,f[e])(f[e+1]),f[e]=void 0,f[e+1]=void 0}o=0}var d,y,m,g,v=void 0;function b(e,t){var r=arguments,o=this,n=new this.constructor(T);void 0===n[_]&&H(n);var i,a=o._state;return a?(i=r[a-1],s(function(){return D(a,n,i,o._result)})):C(o,n,e,t),n}function w(e){if(e&&"object"==typeof e&&e.constructor===this)return e;var t=new this(T);return I(t,e),t}c?v=function(){return $.nextTick(h)}:a?(y=0,m=new a(h),g=document.createTextNode(""),m.observe(g,{characterData:!0}),v=function(){g.data=y=++y%2}):l?((d=new MessageChannel).port1.onmessage=h,v=function(){return d.port2.postMessage(0)}):v=void 0===e&&"function"==typeof B?function(){try{var e=B("vertx");return void 0!==(t=e.runOnLoop||e.runOnContext)?function(){t(h)}:p()}catch(e){return p()}}():p();var _=Math.random().toString(36).substring(16);function T(){}var x=void 0,S=1,A=2,j=new P;function O(e){try{return e.then}catch(e){return j.error=e,j}}function k(e,t,r){var o,n,i,a;t.constructor===e.constructor&&r===b&&t.constructor.resolve===w?(i=e,(a=t)._state===S?R(i,a._result):a._state===A?N(i,a._result):C(a,void 0,function(e){return I(i,e)},function(e){return N(i,e)})):r===j?(N(e,j.error),j.error=null):void 0===r?R(e,t):u(r)?(o=t,n=r,s(function(t){var r=!1,e=function(e,t,r,o){try{e.call(t,r,o)}catch(e){return e}}(n,o,function(e){r||(r=!0,o!==e?I(t,e):R(t,e))},function(e){r||(r=!0,N(t,e))},t._label);!r&&e&&(r=!0,N(t,e))},e)):R(e,t)}function I(e,t){var r,o;e===t?N(e,new TypeError("You cannot resolve a promise with itself")):(o=typeof(r=t),null===r||"object"!==o&&"function"!==o?R(e,t):k(e,t,O(t)))}function E(e){e._onerror&&e._onerror(e._result),q(e)}function R(e,t){e._state===x&&(e._result=t,e._state=S,0!==e._subscribers.length&&s(q,e))}function N(e,t){e._state===x&&(e._state=A,e._result=t,s(E,e))}function C(e,t,r,o){var n=e._subscribers,i=n.length;e._onerror=null,n[i]=t,n[i+S]=r,n[i+A]=o,0===i&&e._state&&s(q,e)}function q(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var o=void 0,n=void 0,i=e._result,a=0;a<t.length;a+=3)o=t[a],n=t[a+r],o?D(r,o,n,i):n(i);e._subscribers.length=0}}function P(){this.error=null}var U=new P;function D(e,t,r,o){var n=u(r),i=void 0,a=void 0,s=void 0,c=void 0;if(n){if((i=function(e,t){try{return e(t)}catch(e){return U.error=e,U}}(r,o))===U?(c=!0,a=i.error,i.error=null):s=!0,t===i)return void N(t,new TypeError("A promises callback cannot return that same promise."))}else i=o,s=!0;t._state!==x||(n&&s?I(t,i):c?N(t,a):e===S?R(t,i):e===A&&N(t,i))}var M=0;function H(e){e[_]=M++,e._state=void 0,e._result=void 0,e._subscribers=[]}function J(e,t){this._instanceConstructor=e,this.promise=new e(T),this.promise[_]||H(this.promise),r(t)?(this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(t),0===this._remaining&&R(this.promise,this._result))):N(this.promise,new Error("Array Methods must be provided an Array"))}function F(e){this[_]=M++,this._result=this._state=void 0,this._subscribers=[],T!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof F?function(t,e){try{e(function(e){I(t,e)},function(e){N(t,e)})}catch(e){N(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return J.prototype._enumerate=function(e){for(var t=0;this._state===x&&t<e.length;t++)this._eachEntry(e[t],t)},J.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,o=r.resolve;if(o===w){var n=O(t);if(n===b&&t._state!==x)this._settledAt(t._state,e,t._result);else if("function"!=typeof n)this._remaining--,this._result[e]=t;else if(r===F){var i=new r(T);k(i,t,n),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(o(t),e)},J.prototype._settledAt=function(e,t,r){var o=this.promise;o._state===x&&(this._remaining--,e===A?N(o,r):this._result[t]=r),0===this._remaining&&R(o,this._result)},J.prototype._willSettleAt=function(e,t){var r=this;C(e,void 0,function(e){return r._settledAt(S,t,e)},function(e){return r._settledAt(A,t,e)})},F.all=function(e){return new J(this,e).promise},F.race=function(n){var i=this;return r(n)?new i(function(e,t){for(var r=n.length,o=0;o<r;o++)i.resolve(n[o]).then(e,t)}):new i(function(e,t){return t(new TypeError("You must pass an array to race."))})},F.resolve=w,F.reject=function(e){var t=new this(T);return N(t,e),t},F._setScheduler=function(e){n=e},F._setAsap=function(e){s=e},F._asap=s,F.prototype={constructor:F,then:b,catch:function(e){return this.then(null,e)}},F.polyfill=function(){var e=void 0;if(void 0!==L)e=L;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=F},F.Promise=F},"object"==typeof o&&void 0!==r?r.exports=t():e.ES6Promise=t()}).call(this,B(11),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{11:11}],4:[function(e,t,r){var a=Object.prototype.hasOwnProperty,s=Object.prototype.toString;t.exports=function(e,t,r){if("[object Function]"!==s.call(t))throw new TypeError("iterator must be a function");var o=e.length;if(o===+o)for(var n=0;n<o;n++)t.call(r,e[n],n,e);else for(var i in e)a.call(e,i)&&t.call(r,e[i],i,e)}},{}],5:[function(e,r,t){(function(e){var t;t="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},r.exports=t}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],6:[function(e,t,r){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],7:[function(e,t,r){var o={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==o.call(e)}},{}],8:[function(e,t,r){var n=36e5,i=864e5;function a(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}t.exports=function(e,t){t=t||{};var r,o=typeof e;if("string"===o&&0<e.length)return function(e){if(100<(e=String(e)).length)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"days":case"day":case"d":return r*i;case"hours":case"hour":case"hrs":case"hr":case"h":return r*n;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}(e);if("number"===o&&!1===isNaN(e))return t.long?a(r=e,i,"day")||a(r,n,"hour")||a(r,6e4,"minute")||a(r,1e3,"second")||r+" ms":function(e){if(i<=e)return Math.round(e/i)+"d";if(n<=e)return Math.round(e/n)+"h";if(6e4<=e)return Math.round(e/6e4)+"m";if(1e3<=e)return Math.round(e/1e3)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},{}],9:[function(e,t,r){"use strict";var f=Object.prototype.hasOwnProperty,h=Object.prototype.toString,o=Array.prototype.slice,d=e(10),n=Object.prototype.propertyIsEnumerable,y=!n.call({toString:null},"toString"),m=n.call(function(){},"prototype"),g=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],v=function(e){var t=e.constructor;return t&&t.prototype===e},i={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},b=function(){if("undefined"==typeof window)return!1;for(var e in window)try{if(!i["$"+e]&&f.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{v(window[e])}catch(e){return!0}}catch(e){return!0}return!1}(),a=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===h.call(e),o=d(e),n=t&&"[object String]"===h.call(e),i=[];if(!t&&!r&&!o)throw new TypeError("Object.keys called on a non-object");var a=m&&r;if(n&&0<e.length&&!f.call(e,0))for(var s=0;s<e.length;++s)i.push(String(s));if(o&&0<e.length)for(var c=0;c<e.length;++c)i.push(String(c));else for(var u in e)a&&"prototype"===u||!f.call(e,u)||i.push(String(u));if(y)for(var l=function(e){if("undefined"==typeof window||!b)return v(e);try{return v(e)}catch(e){return!1}}(e),p=0;p<g.length;++p)l&&"constructor"===g[p]||!f.call(e,g[p])||i.push(g[p]);return i};a.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return d(e)?t(o.call(e)):t(e)}}}else Object.keys=a;return Object.keys||a},t.exports=a},{10:10}],10:[function(e,t,r){"use strict";var o=Object.prototype.toString;t.exports=function(e){var t=o.call(e),r="[object Arguments]"===t;return r||(r="[object Array]"!==t&&null!==e&&"object"==typeof e&&"number"==typeof e.length&&0<=e.length&&"[object Function]"===o.call(e.callee)),r}},{}],11:[function(e,t,r){var o,n,i=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(t){if(o===setTimeout)return setTimeout(t,0);if((o===a||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:a}catch(e){o=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,l=[],p=!1,f=-1;function h(){p&&u&&(p=!1,u.length?l=u.concat(l):f=-1,l.length&&d())}function d(){if(!p){var e=c(h);p=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,p=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(e)}}function y(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new y(e,t)),1!==l.length||p||c(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],12:[function(e,t,r){"use strict";var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(r,o,n,e){return o=o||"&",n=n||"=",null===r&&(r=void 0),"object"==typeof r?s(c(r),function(e){var t=encodeURIComponent(i(e))+n;return a(r[e])?s(r[e],function(e){return t+encodeURIComponent(i(e))}).join(o):t+encodeURIComponent(i(r[e]))}).join(o):e?encodeURIComponent(i(e))+n+encodeURIComponent(i(r)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var r=[],o=0;o<e.length;o++)r.push(t(e[o],o));return r}var c=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],13:[function(x,a,e){(function(e){a.exports=i;var w=x(23),t=x(24),r=x(14),o=x(29),n=e.env.RESET_APP_DATA_TIMER&&parseInt(e.env.RESET_APP_DATA_TIMER,10)||12e4;function i(t,e,r){var o=x(1)("algoliasearch"),n=x(20),i=x(7),a=x(25),s="Usage: algoliasearch(applicationID, apiKey, opts)";if(!0!==r._allowEmptyCredentials&&!t)throw new w.AlgoliaSearchError("Please provide an application ID. "+s);if(!0!==r._allowEmptyCredentials&&!e)throw new w.AlgoliaSearchError("Please provide an API key. "+s);this.applicationID=t,this.apiKey=e,this.hosts={read:[],write:[]},r=r||{},this._timeouts=r.timeouts||{connect:1e3,read:2e3,write:3e4},r.timeout&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=r.timeout);var c=r.protocol||"https:";if(/:$/.test(c)||(c+=":"),"http:"!==c&&"https:"!==c)throw new w.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+r.protocol+"`)");if(this._checkAppIdData(),r.hosts)i(r.hosts)?(this.hosts.read=n(r.hosts),this.hosts.write=n(r.hosts)):(this.hosts.read=n(r.hosts.read),this.hosts.write=n(r.hosts.write));else{var u=a(this._shuffleResult,function(e){return t+"-"+e+".algolianet.com"}),l=(!1===r.dsn?"":"-dsn")+".algolia.net";this.hosts.read=[this.applicationID+l].concat(u),this.hosts.write=[this.applicationID+".algolia.net"].concat(u)}this.hosts.read=a(this.hosts.read,p(c)),this.hosts.write=a(this.hosts.write,p(c)),this.extraHeaders={},this.cache=r._cache||{},this._ua=r._ua,this._useCache=!(void 0!==r._useCache&&!r._cache)||r._useCache,this._useFallback=void 0===r.useFallback||r.useFallback,this._setTimeout=r._setTimeout,o("init done, %j",this)}function p(t){return function(e){return t+"//"+e.toLowerCase()}}function _(e){if(void 0===Array.prototype.toJSON)return JSON.stringify(e);var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var r=JSON.stringify(e);return Array.prototype.toJSON=t,r}function T(e){var t={};for(var r in e){var o;if(Object.prototype.hasOwnProperty.call(e,r))o="x-algolia-api-key"===r||"x-algolia-application-id"===r?"**hidden for security purposes**":e[r],t[r]=o}return t}i.prototype.initIndex=function(e){return new r(this,e)},i.prototype.setExtraHeader=function(e,t){this.extraHeaders[e.toLowerCase()]=t},i.prototype.getExtraHeader=function(e){return this.extraHeaders[e.toLowerCase()]},i.prototype.unsetExtraHeader=function(e){delete this.extraHeaders[e.toLowerCase()]},i.prototype.addAlgoliaAgent=function(e){-1===this._ua.indexOf(";"+e)&&(this._ua+=";"+e)},i.prototype._jsonRequest=function(n){this._checkAppIdData();var l,p,f=x(1)("algoliasearch:"+n.url),h=n.additionalUA||"",d=n.cache,y=this,m=0,g=!1,v=y._useFallback&&y._request.fallback&&n.fallback;500<this.apiKey.length&&void 0!==n.body&&(void 0!==n.body.params||void 0!==n.body.requests)?(n.body.apiKey=this.apiKey,p=this._computeRequestHeaders({additionalUA:h,withApiKey:!1,headers:n.headers})):p=this._computeRequestHeaders({additionalUA:h,headers:n.headers}),void 0!==n.body&&(l=_(n.body)),f("request start");var b=[];var e=function r(o,i){y._checkAppIdData();var a,s=new Date;if(y._useCache&&(a=n.url),y._useCache&&l&&(a+="_body_"+i.body),y._useCache&&d&&void 0!==d[a])return f("serving response from cache"),y._promise.resolve(JSON.parse(d[a]));if(m>=y.hosts[n.hostType].length)return!v||g?(f("could not get any response"),y._promise.reject(new w.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+y.applicationID,{debugData:b}))):(f("switching to fallback"),m=0,i.method=n.fallback.method,i.url=n.fallback.url,i.jsonBody=n.fallback.body,i.jsonBody&&(i.body=_(i.jsonBody)),p=y._computeRequestHeaders({additionalUA:h,headers:n.headers}),i.timeouts=y._getTimeoutsForRequest(n.hostType),y._setHostIndexByType(0,n.hostType),g=!0,r(y._request.fallback,i));var c=y._getHostByType(n.hostType),e=c+i.url,t={body:i.body,jsonBody:i.jsonBody,method:i.method,headers:p,timeouts:i.timeouts,debug:f};return f("method: %s, url: %s, headers: %j, timeouts: %d",t.method,e,t.headers,t.timeouts),o===y._request.fallback&&f("using fallback"),o.call(y,e,t).then(function(e){var t=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200;f("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,t,e.headers);var r=2===Math.floor(t/100),o=new Date;if(b.push({currentHost:c,headers:T(p),content:l||null,contentLength:void 0!==l?l.length:null,method:i.method,timeouts:i.timeouts,url:i.url,startTime:s,endTime:o,duration:o-s,statusCode:t}),r)return y._useCache&&d&&(d[a]=e.responseText),e.body;if(4!==Math.floor(t/100))return m+=1,u();f("unrecoverable error");var n=new w.AlgoliaSearchError(e.body&&e.body.message,{debugData:b,statusCode:t});return y._promise.reject(n)},function(e){f("error: %s, stack: %s",e.message,e.stack);var t=new Date;return b.push({currentHost:c,headers:T(p),content:l||null,contentLength:void 0!==l?l.length:null,method:i.method,timeouts:i.timeouts,url:i.url,startTime:s,endTime:t,duration:t-s}),e instanceof w.AlgoliaSearchError||(e=new w.Unknown(e&&e.message,e)),m+=1,e instanceof w.Unknown||e instanceof w.UnparsableJSON||m>=y.hosts[n.hostType].length&&(g||!v)?(e.debugData=b,y._promise.reject(e)):e instanceof w.RequestTimeout?(f("retrying request with higher timeout"),y._incrementHostIndex(n.hostType),y._incrementTimeoutMultipler(),i.timeouts=y._getTimeoutsForRequest(n.hostType),r(o,i)):u()});function u(){return f("retrying request"),y._incrementHostIndex(n.hostType),r(o,i)}}(y._request,{url:n.url,method:n.method,body:l,jsonBody:n.body,timeouts:y._getTimeoutsForRequest(n.hostType)});if("function"!=typeof n.callback)return e;e.then(function(e){t(function(){n.callback(null,e)},y._setTimeout||setTimeout)},function(e){t(function(){n.callback(e)},y._setTimeout||setTimeout)})},i.prototype._getSearchParams=function(e,t){if(null==e)return t;for(var r in e)null!==r&&void 0!==e[r]&&e.hasOwnProperty(r)&&(t+=""===t?"":"&",t+=r+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(e[r])?_(e[r]):e[r]));return t},i.prototype._computeRequestHeaders=function(e){var t=x(4),r={"x-algolia-agent":e.additionalUA?this._ua+";"+e.additionalUA:this._ua,"x-algolia-application-id":this.applicationID};return!1!==e.withApiKey&&(r["x-algolia-api-key"]=this.apiKey),this.userToken&&(r["x-algolia-usertoken"]=this.userToken),this.securityTags&&(r["x-algolia-tagfilters"]=this.securityTags),t(this.extraHeaders,function(e,t){r[t]=e}),e.headers&&t(e.headers,function(e,t){r[t]=e}),r},i.prototype.search=function(e,t,r){var o=x(7),n=x(25);if(!o(e))throw new Error("Usage: client.search(arrayOfQueries[, callback])");"function"==typeof t?(r=t,t={}):void 0===t&&(t={});var i=this,a={requests:n(e,function(e){var t="";return void 0!==e.query&&(t+="query="+encodeURIComponent(e.query)),{indexName:e.indexName,params:i._getSearchParams(e.params,t)}})},s=n(a.requests,function(e,t){return t+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(e.indexName)+"?"+e.params)}).join("&"),c="/1/indexes/*/queries";return void 0!==t.strategy&&(c+="?strategy="+t.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:c,body:a,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:s}},callback:r})},i.prototype.searchForFacetValues=function(e){var t=x(7),r=x(25),c="Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";if(!t(e))throw new Error(c);var u=this;return u._promise.all(r(e,function(e){if(!e||void 0===e.indexName||void 0===e.params.facetName||void 0===e.params.facetQuery)throw new Error(c);var t=x(20),r=x(27),o=e.indexName,n=e.params,i=n.facetName,a=r(t(n),function(e){return"facetName"===e}),s=u._getSearchParams(a,"");return u._jsonRequest({cache:u.cache,method:"POST",url:"/1/indexes/"+encodeURIComponent(o)+"/facets/"+encodeURIComponent(i)+"/query",hostType:"read",body:{params:s}})}))},i.prototype.setSecurityTags=function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var t=[],r=0;r<e.length;++r)if("[object Array]"===Object.prototype.toString.call(e[r])){for(var o=[],n=0;n<e[r].length;++n)o.push(e[r][n]);t.push("("+o.join(",")+")")}else t.push(e[r]);e=t.join(",")}this.securityTags=e},i.prototype.setUserToken=function(e){this.userToken=e},i.prototype.clearCache=function(){this.cache={}},i.prototype.setRequestTimeout=function(e){e&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=e)},i.prototype.setTimeouts=function(e){this._timeouts=e},i.prototype.getTimeouts=function(){return this._timeouts},i.prototype._getAppIdData=function(){var e=o.get(this.applicationID);return null!==e&&this._cacheAppIdData(e),e},i.prototype._setAppIdData=function(e){return e.lastChange=(new Date).getTime(),this._cacheAppIdData(e),o.set(this.applicationID,e)},i.prototype._checkAppIdData=function(){var e=this._getAppIdData(),t=(new Date).getTime();return null===e||t-e.lastChange>n?this._resetInitialAppIdData(e):e},i.prototype._resetInitialAppIdData=function(e){var t=e||{};return t.hostIndexes={read:0,write:0},t.timeoutMultiplier=1,t.shuffleResult=t.shuffleResult||function(e){var t,r,o=e.length;for(;0!==o;)r=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[r],e[r]=t;return e}([1,2,3]),this._setAppIdData(t)},i.prototype._cacheAppIdData=function(e){this._hostIndexes=e.hostIndexes,this._timeoutMultiplier=e.timeoutMultiplier,this._shuffleResult=e.shuffleResult},i.prototype._partialAppIdDataUpdate=function(e){var t=x(4),r=this._getAppIdData();return t(e,function(e,t){r[t]=e}),this._setAppIdData(r)},i.prototype._getHostByType=function(e){return this.hosts[e][this._getHostIndexByType(e)]},i.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier},i.prototype._getHostIndexByType=function(e){return this._hostIndexes[e]},i.prototype._setHostIndexByType=function(e,t){var r=x(20)(this._hostIndexes);return r[t]=e,this._partialAppIdDataUpdate({hostIndexes:r}),e},i.prototype._incrementHostIndex=function(e){return this._setHostIndexByType((this._getHostIndexByType(e)+1)%this.hosts[e].length,e)},i.prototype._incrementTimeoutMultipler=function(){var e=Math.max(this._timeoutMultiplier+1,4);return this._partialAppIdDataUpdate({timeoutMultiplier:e})},i.prototype._getTimeoutsForRequest=function(e){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[e]*this._timeoutMultiplier}}}).call(this,x(11))},{1:1,11:11,14:14,20:20,23:23,24:24,25:25,27:27,29:29,4:4,7:7}],14:[function(s,e,t){var r=s(19),o=s(21),n=s(22);function i(e,t){this.indexName=t,this.as=e,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}(e.exports=i).prototype.clearCache=function(){this.cache={}},i.prototype.search=r("query"),i.prototype.similarSearch=r("similarQuery"),i.prototype.browse=function(e,t,r){var o,n,i=s(26);0===arguments.length||1===arguments.length&&"function"==typeof e?(r=e,e=void(o=0)):"number"==typeof e?(o=e,"number"==typeof t?n=t:"function"==typeof t&&(r=t,n=void 0),t=e=void 0):"object"==typeof e?("function"==typeof t&&(r=t),t=e,e=void 0):"string"==typeof e&&"function"==typeof t&&(r=t,t=void 0),t=i({},t||{},{page:o,hitsPerPage:n,query:e});var a=this.as._getSearchParams(t,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{params:a},hostType:"read",callback:r})},i.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{cursor:e},hostType:"read",callback:t})},i.prototype.searchForFacetValues=function(e,t){var r=s(20),o=s(27);if(void 0===e.facetName||void 0===e.facetQuery)throw new Error("Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])");var n=e.facetName,i=o(r(e),function(e){return"facetName"===e}),a=this.as._getSearchParams(i,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(n)+"/query",hostType:"read",body:{params:a},callback:t})},i.prototype.searchFacet=o(function(e,t){return this.searchForFacetValues(e,t)},n("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])")),i.prototype._search=function(e,t,r,o){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:r,additionalUA:o})},i.prototype.getObject=function(e,t,r){1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0);var o="";if(void 0!==t){o="?attributes=";for(var n=0;n<t.length;++n)0!==n&&(o+=","),o+=t[n]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/"+encodeURIComponent(e)+o,hostType:"read",callback:r})},i.prototype.getObjects=function(e,r,t){var o=s(7),n=s(25);if(!o(e))throw new Error("Usage: index.getObjects(arrayOfObjectIDs[, callback])");var i=this;1!==arguments.length&&"function"!=typeof r||(t=r,r=void 0);var a={requests:n(e,function(e){var t={indexName:i.indexName,objectID:e};return r&&(t.attributesToRetrieve=r.join(",")),t})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:a,callback:t})},i.prototype.as=null,i.prototype.indexName=null,i.prototype.typeAheadArgs=null,i.prototype.typeAheadValueOption=null},{19:19,20:20,21:21,22:22,25:25,26:26,27:27,7:7}],15:[function(e,t,r){"use strict";var o=e(13),n=e(16);t.exports=n(o,"(lite) ")},{13:13,16:16}],16:[function(u,e,t){(function(s){"use strict";var c=u(5),d=c.Promise||u(3).Promise;e.exports=function(e,t){var r=u(6),p=u(23),f=u(17),n=u(18),o=u(28);function i(e,t,r){return(r=u(20)(r||{}))._ua=r._ua||i.ua,new a(e,t,r)}t=t||"","debug"===s.env.NODE_ENV&&u(1).enable("algoliasearch*"),i.version=u(30),i.ua="Algolia for vanilla JavaScript "+t+i.version,i.initPlaces=o(i),c.__algolia={debug:u(1),algoliasearch:i};var h={hasXMLHttpRequest:"XMLHttpRequest"in c,hasXDomainRequest:"XDomainRequest"in c};function a(){e.apply(this,arguments)}return h.hasXMLHttpRequest&&(h.cors="withCredentials"in new XMLHttpRequest),r(a,e),(a.prototype._request=function(u,l){return new d(function(e,r){if(h.cors||h.hasXDomainRequest){u=f(u,l.headers);var o,n,t=l.body,i=h.cors?new XMLHttpRequest:new XDomainRequest,a=!1;o=setTimeout(s,l.timeouts.connect),i.onprogress=function(){a||c()},"onreadystatechange"in i&&(i.onreadystatechange=function(){!a&&1<i.readyState&&c()}),i.onload=function(){if(n)return;var t;clearTimeout(o);try{t={body:JSON.parse(i.responseText),responseText:i.responseText,statusCode:i.status,headers:i.getAllResponseHeaders&&i.getAllResponseHeaders()||{}}}catch(e){t=new p.UnparsableJSON({more:i.responseText})}t instanceof p.UnparsableJSON?r(t):e(t)},i.onerror=function(e){if(n)return;clearTimeout(o),r(new p.Network({more:e}))},i instanceof XMLHttpRequest?i.open(l.method,u,!0):i.open(l.method,u),h.cors&&(t&&("POST"===l.method?i.setRequestHeader("content-type","application/x-www-form-urlencoded"):i.setRequestHeader("content-type","application/json")),i.setRequestHeader("accept","application/json")),i.send(t)}else r(new p.Network("CORS not supported"));function s(){n=!0,i.abort(),r(new p.RequestTimeout)}function c(){a=!0,clearTimeout(o),o=setTimeout(s,l.timeouts.complete)}})}).fallback=function(e,t){return e=f(e,t.headers),new d(function(r,o){n(e,t,function(e,t){e?o(e):r(t)})})},a.prototype._promise={reject:function(e){return d.reject(e)},resolve:function(e){return d.resolve(e)},delay:function(t){return new d(function(e){setTimeout(e,t)})},all:function(e){return d.all(e)}},i}}).call(this,u(11))},{1:1,11:11,17:17,18:18,20:20,23:23,28:28,3:3,30:30,5:5,6:6}],17:[function(e,t,r){"use strict";t.exports=function(e,t){/\?/.test(e)?e+="&":e+="?";return e+o(t)};var o=e(12)},{12:12}],18:[function(e,t,r){"use strict";t.exports=function(e,t,r){if("GET"!==t.method)return void r(new Error("Method "+t.method+" "+e+" is not supported by JSONP."));t.debug("JSONP: start");var o=!1,n=!1;h+=1;var i=document.getElementsByTagName("head")[0],a=document.createElement("script"),s="algoliaJSONP_"+h,c=!1;window[s]=function(e){!function(){try{delete window[s],delete window[s+"_loaded"]}catch(e){window[s]=window[s+"_loaded"]=void 0}}(),n?t.debug("JSONP: Late answer, ignoring"):(o=!0,p(),r(null,{body:e}))},e+="&callback="+s,t.jsonBody&&t.jsonBody.params&&(e+="&"+t.jsonBody.params);var u=setTimeout(function(){t.debug("JSONP: Script timeout"),n=!0,p(),r(new f.RequestTimeout)},t.timeouts.complete);function l(){t.debug("JSONP: success"),c||n||(c=!0,o||(t.debug("JSONP: Fail. Script loaded but did not call the callback"),p(),r(new f.JSONPScriptFail)))}function p(){clearTimeout(u),a.onload=null,a.onreadystatechange=null,a.onerror=null,i.removeChild(a)}a.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||l()},a.onload=l,a.onerror=function(){if(t.debug("JSONP: Script error"),c||n)return;p(),r(new f.JSONPScriptError)},a.async=!0,a.defer=!0,a.src=e,i.appendChild(a)};var f=e(23),h=0},{23:23}],19:[function(e,t,r){t.exports=function(i,a){return function(e,t,r){if("function"==typeof e&&"object"==typeof t||"object"==typeof r)throw new s.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");0===arguments.length||"function"==typeof e?(r=e,e=""):1!==arguments.length&&"function"!=typeof t||(r=t,t=void 0),"object"==typeof e&&null!==e?(t=e,e=void 0):null==e&&(e="");var o,n="";return void 0!==e&&(n+=i+"="+encodeURIComponent(e)),void 0!==t&&(t.additionalUA&&(o=t.additionalUA,delete t.additionalUA),n=this.as._getSearchParams(t,n)),this._search(n,a,r,o)}};var s=e(23)},{23:23}],20:[function(e,t,r){t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],21:[function(e,t,r){t.exports=function(e,t){var r=!1;return function(){return r||(console.warn(t),r=!0),e.apply(this,arguments)}}},{}],22:[function(e,t,r){t.exports=function(e,t){var r=e.toLowerCase().replace(/[\.\(\)]/g,"");return"algoliasearch: `"+e+"` was replaced by `"+t+"`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#"+r}},{}],23:[function(n,e,t){"use strict";var o=n(6);function i(e,t){var r=n(4),o=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):o.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=e||"Unknown error",t&&r(t,function(e,t){o[t]=e})}function r(t,r){function e(){var e=Array.prototype.slice.call(arguments,0);"string"!=typeof e[0]&&e.unshift(r),i.apply(this,e),this.name="AlgoliaSearch"+t+"Error"}return o(e,i),e}o(i,Error),e.exports={AlgoliaSearchError:i,UnparsableJSON:r("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:r("RequestTimeout","Request timedout before getting a response"),Network:r("Network","Network issue, see err.more for details"),JSONPScriptFail:r("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:r("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:r("Unknown","Unknown error occured")}},{4:4,6:6}],24:[function(e,t,r){t.exports=function(e,t){t(e,0)}},{}],25:[function(e,t,r){var i=e(4);t.exports=function(r,o){var n=[];return i(r,function(e,t){n.push(o(e,t,r))}),n}},{4:4}],26:[function(e,t,r){var n=e(4);t.exports=function r(o){var e=Array.prototype.slice.call(arguments);return n(e,function(e){for(var t in e)e.hasOwnProperty(t)&&("object"==typeof o[t]&&"object"==typeof e[t]?o[t]=r({},o[t],e[t]):void 0!==e[t]&&(o[t]=e[t]))}),o}},{4:4}],27:[function(i,e,t){e.exports=function(t,r){var e=i(9),o=i(4),n={};return o(e(t),function(e){!0!==r(e)&&(n[e]=t[e])}),n}},{4:4,9:9}],28:[function(s,e,t){e.exports=function(a){return function(e,t,r){var o=s(20);(r=r&&o(r)||{}).hosts=r.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],0!==arguments.length&&"object"!=typeof e&&void 0!==e||(t=e="",r._allowEmptyCredentials=!0);var n=a(e,t,r),i=n.initIndex("places");return i.search=c("query","/1/places/query"),i.getObject=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/places/"+encodeURIComponent(e),hostType:"read",callback:t})},i}};var c=s(19)},{19:19,20:20}],29:[function(u,l,e){(function(o){var r,n=u(1)("algoliasearch:src/hostIndexState.js"),i="algoliasearch-client-js",a={state:{},set:function(e,t){return this.state[e]=t,this.state[e]},get:function(e){return this.state[e]||null}},e={set:function(t,e){a.set(t,e);try{var r=JSON.parse(o.localStorage[i]);return r[t]=e,o.localStorage[i]=JSON.stringify(r),r[t]}catch(e){return s(t,e)}},get:function(t){try{return JSON.parse(o.localStorage[i])[t]||null}catch(e){return s(t,e)}}};function s(e,t){return n("localStorage failed with",t),function(){try{o.localStorage.removeItem(i)}catch(e){}}(),(r=a).get(e)}function t(e,t){return 1===arguments.length?r.get(e):r.set(e,t)}function c(){try{return"localStorage"in o&&null!==o.localStorage&&(o.localStorage[i]||o.localStorage.setItem(i,JSON.stringify({})),!0)}catch(e){return!1}}r=c()?e:a,l.exports={get:t,set:t,supportsLocalStorage:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],30:[function(e,t,r){"use strict";t.exports="3.27.1"},{}]},{},[15])(15)});