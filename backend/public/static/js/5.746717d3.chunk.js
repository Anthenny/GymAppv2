(this.webpackJsonpgymapp=this.webpackJsonpgymapp||[]).push([[5],{41:function(t,e,r){t.exports=r(44)},42:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},43:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(41),o=r.n(n),i=r(42),a=r(14),c=r(0),u=function(){var t=Object(c.useState)(),e=Object(a.a)(t,2),r=e[0],n=e[1],u=Object(c.useState)(!1),s=Object(a.a)(u,2),l=s[0],h=s[1],f=Object(c.useRef)([]),p=Object(c.useCallback)(function(){var t=Object(i.a)(o.a.mark((function t(e){var r,i,a,c,u,s,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",i=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:{},h(!0),c=new AbortController,f.current.push(c),t.prev=6,t.next=9,fetch(e,{method:r,body:i,headers:a,signal:c.signal});case 9:return u=t.sent,t.next=12,u.json();case 12:if(s=t.sent,f.current=f.current.filter((function(t){return t!==c})),u.ok){t.next=16;break}throw new Error(s.message);case 16:return h(!1),t.abrupt("return",s);case 20:throw t.prev=20,t.t0=t.catch(6),n(t.t0.message),h(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(c.useEffect)((function(){return function(){f.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:l,error:r,sendRequest:p,clearError:function(){n(null)}}}},44:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(S([])));j&&j!==r&&n.call(j,i)&&(b=j);var x=m.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:R}}function R(){return{value:e,done:!0}}return g.prototype=m,u(x,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},45:function(t,e,r){},54:function(t,e,r){"use strict";r.r(e);var n=r(41),o=r.n(n),i=r(42),a=r(14),c=r(0),u=r(3),s=r(8),l=r(43),h=r(20),f=(r(45),r(1));e.default=function(){var t=Object(u.g)(),e=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(c.useState)(),p=Object(a.a)(n,2),d=p[0],v=p[1],y=Object(c.useRef)(),g=Object(c.useRef)(),m=Object(l.a)(),b=m.isLoading,w=m.error,j=m.sendRequest,x=function(){var n=Object(i.a)(o.a.mark((function n(i){var a,c,u,s,l,h;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i.preventDefault(),a=e.current.value,c=r.current.value,u=d,s=y.current.value,l=g.current.value,n.prev=6,(h=new FormData).append("email",a),h.append("naam",c),h.append("image",u),h.append("wachtwoord",s),h.append("bevestigWachtwoord",l),n.next=15,j("".concat("http://localhost:5000/api","/gebruikers/signup"),"POST",h);case 15:t.push("/login"),n.next=20;break;case 18:n.prev=18,n.t0=n.catch(6);case 20:case"end":return n.stop()}}),n,null,[[6,18]])})));return function(t){return n.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"auth",children:[b&&Object(f.jsx)(h.a,{asOverlay:!0}),Object(f.jsxs)("div",{className:"auth__form__container",children:[Object(f.jsxs)("div",{className:"auth__header",children:[Object(f.jsx)("h2",{children:"Welkom !"}),Object(f.jsx)("h4",{children:"Maak een account aan om door te gaan"}),w&&Object(f.jsx)("p",{className:"error__msg",children:w})]}),Object(f.jsxs)("form",{onSubmit:x,children:[Object(f.jsx)("input",{type:"email",ref:e,placeholder:"Vul uw email in"}),Object(f.jsx)("input",{type:"text",ref:r,placeholder:"Vul uw naam in"}),Object(f.jsx)("label",{htmlFor:"img",children:"Kies uw profiel foto(optioneel)"}),Object(f.jsx)("input",{onChange:function(t){var e;return t.target.files&&1===t.target.files.length&&(e=t.target.files[0],v(e)),e},type:"file",accept:".jpg, .png, .jpeg",id:"img"}),Object(f.jsx)("input",{type:"password",ref:y,placeholder:"Vul uw wachtwoord in"}),Object(f.jsx)("input",{type:"password",ref:g,placeholder:"Bevestig uw wachtwoord"}),Object(f.jsx)("button",{type:"submit",children:"Sign up"}),Object(f.jsxs)("p",{children:["Heb je al een account? ",Object(f.jsx)(s.b,{to:"/login",children:"Log in"})]})]})]})]})}}}]);
//# sourceMappingURL=5.746717d3.chunk.js.map