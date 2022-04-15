import{A as lt,B as ft,C as dt,D as pt,E as yt,G as U,o as F,h as $,d as w,u as g,i as vt,w as _,j as A,y as H,l as V,H as G,I as K,J as gt,F as Y,p as mt,q as D,s as ht,t as W,v as N,x as J,K as bt,L as wt,b as _t}from"./vendor.2ba269bd.js";import{s as S}from"./socket.29e89f2a.js";import{r as X}from"./index.d1e2e14e.js";var q={exports:{}};/*!
 * clipboard.js v2.0.10
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(B,R){(function(x,b){B.exports=b()})(lt,function(){return function(){var C={686:function(i,u,t){t.d(u,{default:function(){return ct}});var r=t(279),f=t.n(r),p=t(370),h=t.n(p),m=t(817),s=t.n(m);function o(c){try{return document.execCommand(c)}catch{return!1}}var y=function(n){var e=s()(n);return o("cut"),e},v=y;function T(c){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var l=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(l,"px"),e.setAttribute("readonly",""),e.value=c,e}var Q=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";if(typeof n=="string"){var a=T(n);e.container.appendChild(a),l=s()(a),o("copy"),a.remove()}else l=s()(n),o("copy");return l},P=Q;function k(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?k=function(e){return typeof e}:k=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(c)}var Z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,l=e===void 0?"copy":e,a=n.container,d=n.target,E=n.text;if(l!=="copy"&&l!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&k(d)==="object"&&d.nodeType===1){if(l==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(l==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(E)return P(E,{container:a});if(d)return l==="cut"?v(d):P(d,{container:a})},tt=Z;function O(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(c)}function et(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function z(c,n){for(var e=0;e<n.length;e++){var l=n[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(c,l.key,l)}}function nt(c,n,e){return n&&z(c.prototype,n),e&&z(c,e),c}function ot(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&M(c,n)}function M(c,n){return M=Object.setPrototypeOf||function(l,a){return l.__proto__=a,l},M(c,n)}function rt(c){var n=st();return function(){var l=L(c),a;if(n){var d=L(this).constructor;a=Reflect.construct(l,arguments,d)}else a=l.apply(this,arguments);return it(this,a)}}function it(c,n){return n&&(O(n)==="object"||typeof n=="function")?n:at(c)}function at(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function st(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function L(c){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(c)}function I(c,n){var e="data-clipboard-".concat(c);if(!!n.hasAttribute(e))return n.getAttribute(e)}var ut=function(c){ot(e,c);var n=rt(e);function e(l,a){var d;return et(this,e),d=n.call(this),d.resolveOptions(a),d.listenClick(l),d}return nt(e,[{key:"resolveOptions",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof a.action=="function"?a.action:this.defaultAction,this.target=typeof a.target=="function"?a.target:this.defaultTarget,this.text=typeof a.text=="function"?a.text:this.defaultText,this.container=O(a.container)==="object"?a.container:document.body}},{key:"listenClick",value:function(a){var d=this;this.listener=h()(a,"click",function(E){return d.onClick(E)})}},{key:"onClick",value:function(a){var d=a.delegateTarget||a.currentTarget,E=this.action(d)||"copy",j=tt({action:E,container:this.container,target:this.target(d),text:this.text(d)});this.emit(j?"success":"error",{action:E,text:j,trigger:d,clearSelection:function(){d&&d.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(a){return I("action",a)}},{key:"defaultTarget",value:function(a){var d=I("target",a);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(a){return I("text",a)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return P(a,d)}},{key:"cut",value:function(a){return v(a)}},{key:"isSupported",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof a=="string"?[a]:a,E=!!document.queryCommandSupported;return d.forEach(function(j){E=E&&!!document.queryCommandSupported(j)}),E}}]),e}(f()),ct=ut},828:function(i){var u=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function r(f,p){for(;f&&f.nodeType!==u;){if(typeof f.matches=="function"&&f.matches(p))return f;f=f.parentNode}}i.exports=r},438:function(i,u,t){var r=t(828);function f(m,s,o,y,v){var T=h.apply(this,arguments);return m.addEventListener(o,T,v),{destroy:function(){m.removeEventListener(o,T,v)}}}function p(m,s,o,y,v){return typeof m.addEventListener=="function"?f.apply(null,arguments):typeof o=="function"?f.bind(null,document).apply(null,arguments):(typeof m=="string"&&(m=document.querySelectorAll(m)),Array.prototype.map.call(m,function(T){return f(T,s,o,y,v)}))}function h(m,s,o,y){return function(v){v.delegateTarget=r(v.target,s),v.delegateTarget&&y.call(m,v)}}i.exports=p},879:function(i,u){u.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},u.nodeList=function(t){var r=Object.prototype.toString.call(t);return t!==void 0&&(r==="[object NodeList]"||r==="[object HTMLCollection]")&&"length"in t&&(t.length===0||u.node(t[0]))},u.string=function(t){return typeof t=="string"||t instanceof String},u.fn=function(t){var r=Object.prototype.toString.call(t);return r==="[object Function]"}},370:function(i,u,t){var r=t(879),f=t(438);function p(o,y,v){if(!o&&!y&&!v)throw new Error("Missing required arguments");if(!r.string(y))throw new TypeError("Second argument must be a String");if(!r.fn(v))throw new TypeError("Third argument must be a Function");if(r.node(o))return h(o,y,v);if(r.nodeList(o))return m(o,y,v);if(r.string(o))return s(o,y,v);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(o,y,v){return o.addEventListener(y,v),{destroy:function(){o.removeEventListener(y,v)}}}function m(o,y,v){return Array.prototype.forEach.call(o,function(T){T.addEventListener(y,v)}),{destroy:function(){Array.prototype.forEach.call(o,function(T){T.removeEventListener(y,v)})}}}function s(o,y,v){return f(document.body,o,y,v)}i.exports=p},817:function(i){function u(t){var r;if(t.nodeName==="SELECT")t.focus(),r=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),r=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),h=document.createRange();h.selectNodeContents(t),p.removeAllRanges(),p.addRange(h),r=p.toString()}return r}i.exports=u},279:function(i){function u(){}u.prototype={on:function(t,r,f){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:r,ctx:f}),this},once:function(t,r,f){var p=this;function h(){p.off(t,h),r.apply(f,arguments)}return h._=r,this.on(t,h,f)},emit:function(t){var r=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),p=0,h=f.length;for(p;p<h;p++)f[p].fn.apply(f[p].ctx,r);return this},off:function(t,r){var f=this.e||(this.e={}),p=f[t],h=[];if(p&&r)for(var m=0,s=p.length;m<s;m++)p[m].fn!==r&&p[m].fn._!==r&&h.push(p[m]);return h.length?f[t]=h:delete f[t],this}},i.exports=u,i.exports.TinyEmitter=u}},x={};function b(i){if(x[i])return x[i].exports;var u=x[i]={exports:{}};return C[i](u,u.exports,b),u.exports}return function(){b.n=function(i){var u=i&&i.__esModule?function(){return i.default}:function(){return i};return b.d(u,{a:u}),u}}(),function(){b.d=function(i,u){for(var t in u)b.o(u,t)&&!b.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:u[t]})}}(),function(){b.o=function(i,u){return Object.prototype.hasOwnProperty.call(i,u)}}(),b(686)}().default})})(q);var xt=ft(q.exports);const Et=N("\u786E\u8BA4"),St={class:"flex flex-col space-y-4 items-center p-4"},Tt={class:"max-w-6xl mt-4"},Ct=A("div",{class:"relative bg-gray-200",style:{width:"720px"}},[A("video",{class:"w-full h-full",id:"remote",autoplay:""}),A("video",{class:"absolute right-0 bottom-0 w-1/4",id:"local",autoplay:""})],-1),At=N("\u590D\u5236\u94FE\u63A5"),Nt=N("\u53D1\u8D77\u901A\u8BDD"),Ot=N("\u8FD4\u56DE\u9996\u9875"),Dt={setup(B){const R=dt(),C=pt();new xt(".copy-btn");const x=yt().params.roomId,b=window.location.href;let i,u;const t=U({modal:!0,copy:!0,call:!1}),r=U({name:"",users:[]}),f=async()=>{try{u=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0});const s=document.getElementById("local");s.srcObject=u,s.muted=!0}catch{C.error({title:"\u627E\u4E0D\u5230\u5A92\u4F53\u6D41\uFF01",content:"\u8BF7\u4F7F\u7528\u6709 \u6444\u50CF\u5934/\u9EA6\u514B\u98CE \u7684\u8BBE\u5907\uFF0C\u6216\u6388\u4E0E\u8BBF\u95EE\u6743\u9650\u3002"});return}if(console.log("\u672C\u5730\u5A92\u4F53\u6D41\u5DF2\u83B7\u53D6"),i=new RTCPeerConnection,!i){C.error({title:"\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301WebRTC\uFF01",content:"\u63A8\u8350\u4F7F\u7528\u65B0\u7248 Chrome\u3001Firefox\u3001Edge \u6D4F\u89C8\u5668\u3002"});return}u.getTracks().forEach(s=>i.addTrack(s,u)),console.log("WebRTC \u5DF2\u521D\u59CB\u5316"),i.onicecandidate=s=>{s.candidate?(S.emit("candidate",{roomId:x,candidate:s.candidate}),console.log("\u5019\u9009\u4EBA\u53D1\u9001\u6210\u529F")):console.log("\u5019\u9009\u4EBA\u6536\u96C6\u6210\u529F")},i.ontrack=async s=>{t.call=!1,console.log("\u63A5\u6536\u5230\u97F3\u89C6\u9891\u6570\u636E");const o=document.getElementById("remote");o.srcObject=s.streams[0]},S.on("answer",async s=>{console.log("\u6536\u5230\u56DE\u7B54"),await i.setRemoteDescription(new RTCSessionDescription(s))}),S.on("candidate",async s=>{console.log("\u6536\u5230\u5019\u9009\u4EBA"),await i.addIceCandidate(s)})},p=()=>{t.modal=!1,r.name.length===0&&(r.name="\u65E0\u540D\u6C0F"),S.emit("join",{roomId:x,userName:r.name}),console.log("\u5DF2\u52A0\u5165\u623F\u95F4")},h=async()=>{await f(),t.call=!1,console.log("\u53D1\u8D77\u8FDE\u63A5");const s=await i.createOffer();await i.setLocalDescription(s),S.emit("offer",{roomId:x,offer:s})};S.on("offer",async s=>{await f(),console.log("\u6536\u5230\u8FDE\u63A5"),await i.setRemoteDescription(new RTCSessionDescription(s));const o=await i.createAnswer();await i.setLocalDescription(o),S.emit("answer",{roomId:x,answer:o})}),S.on("joined",s=>{r.users=s.room,r.users.length>1&&(R.success("\u6709\u7528\u6237\u52A0\u5165\u5566\uFF5E"),t.call=!0,t.copy=!1)}),S.on("exited",async s=>{r.users=s.room,R.warning("\u6709\u7528\u6237\u79BB\u5F00\u4E86\uFF01"),r.users.length<2&&(t.call=!1,t.copy=!0)}),S.on("error",s=>{C.error({title:"\u51FA\u9519\u4E86",content:s}),X.push("/")});const m=()=>{S.emit("exit",{roomId:x}),i&&i.close(),u&&u.getTracks().forEach(s=>{s.stop()}),X.push("/")};return(s,o)=>(F(),$(Y,null,[w(g(vt),{show:g(t).modal},{default:_(()=>[w(g(mt),{title:"\u8BF7\u8BBE\u7F6E\u6635\u79F0",size:"huge"},{footer:_(()=>[w(g(D),{class:"float-right",onClick:o[2]||(o[2]=y=>p())},{default:_(()=>[Et]),_:1})]),default:_(()=>[w(g(W),{maxlength:"16","show-count":"",value:g(r).name,"onUpdate:value":o[0]||(o[0]=y=>g(r).name=y),onKeyup:o[1]||(o[1]=ht(y=>p(),["enter"])),placeholder:"\u8F93\u5165\u6635\u79F0"},null,8,["value"])]),_:1})]),_:1},8,["show"]),A("div",St,[w(g(H),{type:"info",size:"large",round:""},{default:_(()=>[N("\u623F\u95F4\u53F7\uFF1A"+J(g(x)),1)]),_:1}),A("div",Tt,[w(g(V),null,{default:_(()=>[(F(!0),$(Y,null,bt(g(r).users,y=>(F(),_t(g(H),{type:"warning"},{default:_(()=>[N("\u7528\u6237\uFF1A"+J(y.userName),1)]),_:2},1024))),256))]),_:1})]),Ct,G(w(g(gt),{style:{"max-width":"400px"}},{default:_(()=>[w(g(W),{disabled:"",value:g(b),"onUpdate:value":o[3]||(o[3]=y=>wt(b)?b.value=y:null)},null,8,["value"]),w(g(D),{class:"copy-btn",ghost:"",type:"success","data-clipboard-text":g(b),onClick:o[4]||(o[4]=y=>g(R).success("\u590D\u5236\u6210\u529F"))},{default:_(()=>[At]),_:1},8,["data-clipboard-text"])]),_:1},512),[[K,g(t).copy]]),A("div",null,[w(g(V),null,{default:_(()=>[G(w(g(D),{strong:"",secondary:"",round:"",type:"primary",size:"large",onClick:o[5]||(o[5]=y=>h())},{default:_(()=>[Nt]),_:1},512),[[K,g(t).call]]),w(g(D),{strong:"",secondary:"",round:"",type:"error",size:"large",onClick:o[6]||(o[6]=y=>m())},{default:_(()=>[Ot]),_:1})]),_:1})])])],64))}};export{Dt as default};
