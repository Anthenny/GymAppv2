(this.webpackJsonpgymapp=this.webpackJsonpgymapp||[]).push([[0],{41:function(t,e,r){t.exports=r(44)},42:function(t,e,r){"use strict";function n(t,e,r,n,o,c,i){try{var a=t[c](i),s=a.value}catch(u){return void r(u)}a.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,c){var i=t.apply(e,r);function a(t){n(i,o,c,a,s,"next",t)}function s(t){n(i,o,c,a,s,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},43:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(41),o=r.n(n),c=r(42),i=r(14),a=r(0),s=function(){var t=Object(a.useState)(),e=Object(i.a)(t,2),r=e[0],n=e[1],s=Object(a.useState)(!1),u=Object(i.a)(s,2),l=u[0],h=u[1],f=Object(a.useRef)([]),d=Object(a.useCallback)(function(){var t=Object(c.a)(o.a.mark((function t(e){var r,c,i,a,s,u,l=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",c=l.length>2&&void 0!==l[2]?l[2]:null,i=l.length>3&&void 0!==l[3]?l[3]:{},h(!0),a=new AbortController,f.current.push(a),t.prev=6,t.next=9,fetch(e,{method:r,body:c,headers:i,signal:a.signal});case 9:return s=t.sent,t.next=12,s.json();case 12:if(u=t.sent,f.current=f.current.filter((function(t){return t!==a})),s.ok){t.next=16;break}throw new Error(u.message);case 16:return h(!1),t.abrupt("return",u);case 20:throw t.prev=20,t.t0=t.catch(6),n(t.t0.message),h(!1),t.t0;case 25:case"end":return t.stop()}}),t,null,[[6,20]])})));return function(e){return t.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){f.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:l,error:r,sendRequest:d,clearError:function(){n(null)}}}},44:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,c=Object.create(o.prototype),i=new N(n||[]);return c._invoke=function(t,e,r){var n=h;return function(o,c){if(n===d)throw new Error("Generator is already running");if(n===j){if("throw"===o)throw c;return S()}for(r.method=o,r.arg=c;;){var i=r.delegate;if(i){var a=k(i,r);if(a){if(a===p)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=j,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?j:f,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=j,r.method="throw",r.arg=s.arg)}}}(t,r,i),c}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",j="completed",p={};function b(){}function v(){}function g(){}var m={};s(m,c,(function(){return this}));var x=Object.getPrototypeOf,O=x&&x(x(R([])));O&&O!==r&&n.call(O,c)&&(m=O);var y=g.prototype=b.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,c,i,a){var s=l(t[o],t,c);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,a)}))}a(s.arg)}var o;this._invoke=function(t,n){function c(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(c,c):c()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var c=o.arg;return c?c.done?(r[t.resultName]=c.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function R(t){if(t){var r=t[c];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=g,s(y,"constructor",g),s(g,"constructor",v),v.displayName=s(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,c){void 0===c&&(c=Promise);var i=new _(u(e,r,n,o),c);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),s(y,a,"Generator"),s(y,c,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var c=this.tryEntries.length-1;c>=0;--c){var i=this.tryEntries[c],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var c=o;break}}c&&("break"===t||"continue"===t)&&c.tryLoc<=e&&e<=c.finallyLoc&&(c=null);var i=c?c.completion:{};return i.type=t,i.arg=e,c?(this.method="next",this.next=c.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},47:function(t,e,r){"use strict";r.r(e);var n=r(41),o=r.n(n),c=r(42),i=r(14),a=r(0),s=r(3),u=r(43),l=r(11),h=r(20),f=r(8),d=r(1),j=function(t){return Object(d.jsx)("li",{children:Object(d.jsxs)(f.b,{to:"/logboek/".concat(t.id),children:[Object(d.jsx)("p",{children:t.titel}),Object(d.jsx)("p",{children:t.datum})]})})},p=function(t){return t.items?Object(d.jsxs)("div",{className:"logboek__recent__workouts",children:[Object(d.jsx)("h2",{children:"Recent Workouts"}),Object(d.jsxs)("div",{className:"recent__workouts__header",children:[Object(d.jsx)("h3",{children:"Titel"}),Object(d.jsx)("h3",{children:"Datum"})]}),Object(d.jsx)("div",{className:"recent__workouts__body",children:Object(d.jsx)("ul",{children:t.items.map((function(t){return Object(d.jsx)(j,{id:t._id,titel:t.titel,datum:t.datum},t._id)}))})})]}):Object(d.jsxs)("div",{className:"logboek__recent__workouts",children:[Object(d.jsx)("h2",{children:"Recent Workouts"}),Object(d.jsxs)("div",{className:"recent__workouts__header",children:[Object(d.jsx)("h3",{children:"Titel"}),Object(d.jsx)("h3",{children:"Datum"})]}),Object(d.jsx)("div",{className:"recent__workouts__body",children:Object(d.jsx)("ul",{children:Object(d.jsx)("p",{children:"U heeft nog geen workouts"})})})]})},b=function(t){var e=Object(s.g)(),r=Object(a.useContext)(l.a),n=Object(u.a)(),i=n.isLoading,f=n.error,j=n.sendRequest,b=n.clearError,v=Object(a.useRef)(),g=Object(a.useRef)(),m=function(){var t=Object(c.a)(o.a.mark((function t(n){var c,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),b(),c=v.current.value,i=g.current.value,t.prev=4,t.next=7,j("".concat("http://localhost:5000/api","/logboek"),"POST",JSON.stringify({titel:c,beschrijving:i,maker:r.gebruikerId,categorie:"workout",datum:"10-8-2021"}),{"Content-Type":"application/json",Authorization:"Bearer "+r.token});case 7:e.push("/Deez"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(4);case 12:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"logboek__container",children:[i&&Object(d.jsx)(h.a,{asOverlay:!0}),Object(d.jsxs)("div",{className:"logboek__new__workout",children:[Object(d.jsx)("h2",{children:"Nieuwe Workout !"}),f&&Object(d.jsx)("p",{children:f}),Object(d.jsxs)("form",{onSubmit:m,children:[Object(d.jsx)("input",{type:"text",ref:v,placeholder:"Titel"}),Object(d.jsx)("textarea",{placeholder:"Beschrijf jouw workout",ref:g,rows:"4",cols:"20"}),Object(d.jsx)("button",{type:"submit",children:"Add Workout"})]})]}),Object(d.jsx)(p,{items:t.items})]})},v=function(t){return Object(d.jsx)("li",{children:Object(d.jsxs)(f.b,{to:"/logboek/".concat(t.id),children:[Object(d.jsx)("p",{children:t.gewicht}),Object(d.jsx)("p",{children:t.datum})]})})},g=function(t){return t.items&&0!==t.items.length?Object(d.jsxs)("div",{className:"logboek__recent__workouts",children:[Object(d.jsx)("h2",{children:"Recent Gewicht"}),Object(d.jsxs)("div",{className:"recent__workouts__header",children:[Object(d.jsx)("h4",{children:"Gewicht"}),Object(d.jsx)("h4",{children:"Datum"})]}),Object(d.jsx)("div",{className:"recent__workouts__body",children:Object(d.jsx)("ul",{children:t.items.map((function(t){return Object(d.jsx)(v,{id:t._id,gewicht:t.titel,datum:t.datum},t._id)}))})})]}):Object(d.jsxs)("div",{className:"logboek__recent__workouts",children:[Object(d.jsx)("h2",{children:"Recent Gewicht"}),Object(d.jsxs)("div",{className:"recent__workouts__header",children:[Object(d.jsx)("h4",{children:"Gewicht"}),Object(d.jsx)("h4",{children:"Datum"})]}),Object(d.jsx)("div",{className:"recent__workouts__body",children:Object(d.jsx)("ul",{children:Object(d.jsx)("p",{children:"U heeft nog geen gewicht gelogd"})})})]})},m=function(t){var e=Object(s.g)(),r=Object(a.useContext)(l.a),n=Object(a.useRef)(),i=Object(a.useRef)(),f=Object(u.a)(),j=f.isLoading,p=f.error,b=f.clearError,v=f.sendRequest,m=function(){var t=Object(c.a)(o.a.mark((function t(c){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),b(),a=n.current.value,s=i.current.value,t.prev=4,t.next=7,v("".concat("http://localhost:5000/api","/logboek"),"POST",JSON.stringify({titel:a,beschrijving:s,maker:r.gebruikerId,categorie:"gewicht",datum:"10-8-2021"}),{"Content-Type":"application/json",Authorization:"Bearer "+r.token});case 7:e.push("/Deez"),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(4);case 12:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("div",{className:"logboek__container",children:[j&&Object(d.jsx)(h.a,{asOverlay:!0}),Object(d.jsxs)("div",{className:"logboek__new__workout",children:[Object(d.jsx)("h2",{children:"Vul je gewicht in"}),p&&Object(d.jsx)("p",{children:p}),Object(d.jsxs)("form",{onSubmit:m,children:[Object(d.jsx)("input",{type:"text",ref:n,placeholder:"Vul je gewicht in"}),Object(d.jsx)("textarea",{placeholder:"Eventuele toelichting kcal iname cardio etc.",ref:i,rows:"4",cols:"20"}),Object(d.jsx)("button",{type:"submit",children:"Add Weight"})]})]}),Object(d.jsx)(g,{items:t.items})]})})};r(48),e.default=function(){var t=Object(a.useContext)(l.a),e=Object(a.useState)(),r=Object(i.a)(e,2),n=r[0],s=r[1],f=Object(a.useState)(),j=Object(i.a)(f,2),p=j[0],v=j[1],g=Object(u.a)(),x=g.isLoading,O=g.sendRequest;return Object(a.useEffect)((function(){(function(){var e=Object(c.a)(o.a.mark((function e(){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("".concat("http://localhost:5000/api","/logboek/gebruiker/").concat(t.gebruikerId));case 3:r=e.sent,v(r.gebruikerGewichtLogs),s(r.gebruikerWorkoutLogs),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[O,t.gebruikerId]),Object(d.jsx)(a.Fragment,{children:Object(d.jsxs)("main",{children:[x&&Object(d.jsx)("div",{className:"center",children:Object(d.jsx)(h.a,{})}),!x&&Object(d.jsx)(b,{items:n}),!x&&Object(d.jsx)(m,{items:p})]})})}},48:function(t,e,r){}}]);
//# sourceMappingURL=0.81036fc0.chunk.js.map