(this.webpackJsonpgymapp=this.webpackJsonpgymapp||[]).push([[8],{50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(41),a=n.n(c),r=n(42),s=n(14),i=n(0),u=n(3),o=n(47),l=n(43),j=n(20),p=(n(50),n(11)),b=n(1);t.default=function(){var e=Object(i.useContext)(p.a),t=Object(l.a)(),n=t.isLoading,c=t.sendRequest,d=Object(i.useState)(),h=Object(s.a)(d,2),f=h[0],O=h[1],v=Object(i.useRef)(),x=Object(i.useRef)(),m=Object(u.g)(),g=Object(u.h)().logId;if(Object(i.useEffect)((function(){(function(){var e=Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat("http://localhost:5000/api","/logboek/").concat(g));case 3:t=e.sent,O(t.log),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[c,g]),!f)return Object(b.jsx)("h2",{children:" Kon deze workout niet vinden"});var k=function(){var t=Object(r.a)(a.a.mark((function t(n){var r,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r=v.current.value,s=x.current.value,t.prev=3,t.next=6,c("".concat("http://localhost:5000/api","/logboek/").concat(g),"PATCH",JSON.stringify({titel:r,beschrijving:s}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 6:m.push("/"),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(3);case 11:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)("div",{className:"BG__OVERLAY"}),Object(b.jsx)(o.default,{}),n&&Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(j.a,{})}),!n&&f&&Object(b.jsxs)("div",{className:"userLogs__modal",children:[Object(b.jsx)("div",{onClick:function(){m.push("/")},className:"kruis",children:"X"}),Object(b.jsxs)("h2",{children:["Update ",f.titel]}),Object(b.jsx)("div",{className:"updateLog__update__velden",children:Object(b.jsxs)("form",{onSubmit:k,children:[Object(b.jsx)("input",{defaultValue:f.titel,ref:v,type:"text"}),Object(b.jsx)("textarea",{defaultValue:f.beschrijving,ref:x,rows:"4",cols:"20"}),Object(b.jsx)("button",{type:"submit",className:"btn update",children:"Update"})]})})]})]})}}}]);
//# sourceMappingURL=8.29c757e7.chunk.js.map