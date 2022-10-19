import{b as S,k as N,e as I,g as gt,u as bt,U as vt,j as ht,O as et,as as wt,at as ot,au as xt,av as _t,aw as K,x as V,o as $,m as Y,n as x,w as _,p as h,q as j,ak as W,al as q,F as Q,s as R,t as Et,v as X,ax as Tt,ay as St,az as Ct}from"./index.e62dbc21.js";import{s as C,N as At,a as z,b as J,c as Nt,d as Z,e as tt}from"./socket.ee142b2a.js";var kt=S("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[N(">",[S("input",[N("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),N("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),S("button",[N("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[I("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),N("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[I("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),N("*",[N("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[N(">",[S("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("base-selection",[S("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),S("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),I("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),N("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[N(">",[S("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S("base-selection",[S("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),S("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),I("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const Ot={};var Rt=gt({name:"InputGroup",props:Ot,setup(v){const{mergedClsPrefixRef:k}=bt(v);return vt("-input-group",kt,k),{mergedClsPrefix:k}},render(){const{mergedClsPrefix:v}=this;return ht("div",{class:`${v}-input-group`},this.$slots)}}),jt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Lt(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}function Pt(){const v=et(wt,null);return v===null&&ot("use-message","No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),v}function Mt(){const v=et(xt,null);return v===null&&ot("use-notification","No outer `n-notification-provider` found."),v}var rt={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(v,k){(function(E,w){v.exports=w()})(jt,function(){return function(){var O={686:function(i,l,t){t.d(l,{default:function(){return yt}});var n=t(279),f=t.n(n),p=t(370),b=t.n(p),g=t(817),s=t.n(g);function r(c){try{return document.execCommand(c)}catch{return!1}}var m=function(o){var e=s()(o);return r("cut"),e},y=m;function A(c){var o=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[o?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(a,"px"),e.setAttribute("readonly",""),e.value=c,e}var H=function(o,e){var a=A(o);e.container.appendChild(a);var u=s()(a);return r("copy"),a.remove(),u},nt=function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},a="";return typeof o=="string"?a=H(o,e):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?a=H(o.value,e):(a=s()(o),r("copy")),a},F=nt;function P(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?P=function(e){return typeof e}:P=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(c)}var it=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=o.action,a=e===void 0?"copy":e,u=o.container,d=o.target,T=o.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(d!==void 0)if(d&&P(d)==="object"&&d.nodeType===1){if(a==="copy"&&d.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(d.hasAttribute("readonly")||d.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(T)return F(T,{container:u});if(d)return a==="cut"?y(d):F(d,{container:u})},at=it;function L(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?L=function(e){return typeof e}:L=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(c)}function st(c,o){if(!(c instanceof o))throw new TypeError("Cannot call a class as a function")}function G(c,o){for(var e=0;e<o.length;e++){var a=o[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(c,a.key,a)}}function ut(c,o,e){return o&&G(c.prototype,o),e&&G(c,e),c}function ct(c,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(o&&o.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),o&&B(c,o)}function B(c,o){return B=Object.setPrototypeOf||function(a,u){return a.__proto__=u,a},B(c,o)}function lt(c){var o=pt();return function(){var a=M(c),u;if(o){var d=M(this).constructor;u=Reflect.construct(a,arguments,d)}else u=a.apply(this,arguments);return ft(this,u)}}function ft(c,o){return o&&(L(o)==="object"||typeof o=="function")?o:dt(c)}function dt(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function pt(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function M(c){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},M(c)}function U(c,o){var e="data-clipboard-".concat(c);if(!!o.hasAttribute(e))return o.getAttribute(e)}var mt=function(c){ct(e,c);var o=lt(e);function e(a,u){var d;return st(this,e),d=o.call(this),d.resolveOptions(u),d.listenClick(a),d}return ut(e,[{key:"resolveOptions",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof u.action=="function"?u.action:this.defaultAction,this.target=typeof u.target=="function"?u.target:this.defaultTarget,this.text=typeof u.text=="function"?u.text:this.defaultText,this.container=L(u.container)==="object"?u.container:document.body}},{key:"listenClick",value:function(u){var d=this;this.listener=b()(u,"click",function(T){return d.onClick(T)})}},{key:"onClick",value:function(u){var d=u.delegateTarget||u.currentTarget,T=this.action(d)||"copy",D=at({action:T,container:this.container,target:this.target(d),text:this.text(d)});this.emit(D?"success":"error",{action:T,text:D,trigger:d,clearSelection:function(){d&&d.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(u){return U("action",u)}},{key:"defaultTarget",value:function(u){var d=U("target",u);if(d)return document.querySelector(d)}},{key:"defaultText",value:function(u){return U("text",u)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(u){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return F(u,d)}},{key:"cut",value:function(u){return y(u)}},{key:"isSupported",value:function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],d=typeof u=="string"?[u]:u,T=!!document.queryCommandSupported;return d.forEach(function(D){T=T&&!!document.queryCommandSupported(D)}),T}}]),e}(f()),yt=mt},828:function(i){var l=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function n(f,p){for(;f&&f.nodeType!==l;){if(typeof f.matches=="function"&&f.matches(p))return f;f=f.parentNode}}i.exports=n},438:function(i,l,t){var n=t(828);function f(g,s,r,m,y){var A=b.apply(this,arguments);return g.addEventListener(r,A,y),{destroy:function(){g.removeEventListener(r,A,y)}}}function p(g,s,r,m,y){return typeof g.addEventListener=="function"?f.apply(null,arguments):typeof r=="function"?f.bind(null,document).apply(null,arguments):(typeof g=="string"&&(g=document.querySelectorAll(g)),Array.prototype.map.call(g,function(A){return f(A,s,r,m,y)}))}function b(g,s,r,m){return function(y){y.delegateTarget=n(y.target,s),y.delegateTarget&&m.call(g,y)}}i.exports=p},879:function(i,l){l.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},l.nodeList=function(t){var n=Object.prototype.toString.call(t);return t!==void 0&&(n==="[object NodeList]"||n==="[object HTMLCollection]")&&"length"in t&&(t.length===0||l.node(t[0]))},l.string=function(t){return typeof t=="string"||t instanceof String},l.fn=function(t){var n=Object.prototype.toString.call(t);return n==="[object Function]"}},370:function(i,l,t){var n=t(879),f=t(438);function p(r,m,y){if(!r&&!m&&!y)throw new Error("Missing required arguments");if(!n.string(m))throw new TypeError("Second argument must be a String");if(!n.fn(y))throw new TypeError("Third argument must be a Function");if(n.node(r))return b(r,m,y);if(n.nodeList(r))return g(r,m,y);if(n.string(r))return s(r,m,y);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function b(r,m,y){return r.addEventListener(m,y),{destroy:function(){r.removeEventListener(m,y)}}}function g(r,m,y){return Array.prototype.forEach.call(r,function(A){A.addEventListener(m,y)}),{destroy:function(){Array.prototype.forEach.call(r,function(A){A.removeEventListener(m,y)})}}}function s(r,m,y){return f(document.body,r,m,y)}i.exports=p},817:function(i){function l(t){var n;if(t.nodeName==="SELECT")t.focus(),n=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),n=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var p=window.getSelection(),b=document.createRange();b.selectNodeContents(t),p.removeAllRanges(),p.addRange(b),n=p.toString()}return n}i.exports=l},279:function(i){function l(){}l.prototype={on:function(t,n,f){var p=this.e||(this.e={});return(p[t]||(p[t]=[])).push({fn:n,ctx:f}),this},once:function(t,n,f){var p=this;function b(){p.off(t,b),n.apply(f,arguments)}return b._=n,this.on(t,b,f)},emit:function(t){var n=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),p=0,b=f.length;for(p;p<b;p++)f[p].fn.apply(f[p].ctx,n);return this},off:function(t,n){var f=this.e||(this.e={}),p=f[t],b=[];if(p&&n)for(var g=0,s=p.length;g<s;g++)p[g].fn!==n&&p[g].fn._!==n&&b.push(p[g]);return b.length?f[t]=b:delete f[t],this}},i.exports=l,i.exports.TinyEmitter=l}},E={};function w(i){if(E[i])return E[i].exports;var l=E[i]={exports:{}};return O[i](l,l.exports,w),l.exports}return function(){w.n=function(i){var l=i&&i.__esModule?function(){return i.default}:function(){return i};return w.d(l,{a:l}),l}}(),function(){w.d=function(i,l){for(var t in l)w.o(l,t)&&!w.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:l[t]})}}(),function(){w.o=function(i,l){return Object.prototype.hasOwnProperty.call(i,l)}}(),w(686)}().default})})(rt);var Dt=Lt(rt.exports);const It={class:"flex flex-col space-y-4 items-center p-4"},zt={class:"max-w-6xl mt-4"},Ft=j("div",{class:"relative bg-gray-200",style:{width:"720px"}},[j("video",{class:"w-full h-full",id:"remote",autoplay:""}),j("video",{class:"absolute right-0 bottom-0 w-1/4",id:"local",autoplay:""})],-1),Ht={__name:"room",setup(v){const k=Pt(),O=Mt();new Dt(".copy-btn");const E=_t().params.roomId,w=window.location.href;let i,l;const t=K({modal:!0,copy:!0,call:!1}),n=K({name:"",users:[]}),f=async()=>{try{l=await navigator.mediaDevices.getUserMedia({audio:!0,video:!0});const s=document.getElementById("local");s.srcObject=l,s.muted=!0}catch{O.error({title:"\u627E\u4E0D\u5230\u5A92\u4F53\u6D41\uFF01",content:"\u8BF7\u4F7F\u7528\u6709 \u6444\u50CF\u5934/\u9EA6\u514B\u98CE \u7684\u8BBE\u5907\uFF0C\u6216\u6388\u4E0E\u8BBF\u95EE\u6743\u9650\u3002"});return}if(console.log("\u672C\u5730\u5A92\u4F53\u6D41\u5DF2\u83B7\u53D6"),i=new RTCPeerConnection,!i){O.error({title:"\u6D4F\u89C8\u5668\u6682\u4E0D\u652F\u6301WebRTC\uFF01",content:"\u63A8\u8350\u4F7F\u7528\u65B0\u7248 Chrome\u3001Firefox\u3001Edge \u6D4F\u89C8\u5668\u3002"});return}l.getTracks().forEach(s=>i.addTrack(s,l)),console.log("WebRTC \u5DF2\u521D\u59CB\u5316"),i.onicecandidate=s=>{s.candidate?(C.emit("candidate",{roomId:E,candidate:s.candidate}),console.log("\u5019\u9009\u4EBA\u53D1\u9001\u6210\u529F")):console.log("\u5019\u9009\u4EBA\u6536\u96C6\u6210\u529F")},i.ontrack=async s=>{t.call=!1,console.log("\u63A5\u6536\u5230\u97F3\u89C6\u9891\u6570\u636E");const r=document.getElementById("remote");r.srcObject=s.streams[0]},C.on("answer",async s=>{console.log("\u6536\u5230\u56DE\u7B54"),await i.setRemoteDescription(new RTCSessionDescription(s))}),C.on("candidate",async s=>{console.log("\u6536\u5230\u5019\u9009\u4EBA"),await i.addIceCandidate(s)})},p=()=>{t.modal=!1,n.name.length===0&&(n.name="\u65E0\u540D\u6C0F"),C.emit("join",{roomId:E,userName:n.name}),console.log("\u5DF2\u52A0\u5165\u623F\u95F4")},b=async()=>{await f(),t.call=!1,console.log("\u53D1\u8D77\u8FDE\u63A5");const s=await i.createOffer();await i.setLocalDescription(s),C.emit("offer",{roomId:E,offer:s})};C.on("offer",async s=>{await f(),console.log("\u6536\u5230\u8FDE\u63A5"),await i.setRemoteDescription(new RTCSessionDescription(s));const r=await i.createAnswer();await i.setLocalDescription(r),C.emit("answer",{roomId:E,answer:r})}),C.on("joined",s=>{n.users=s.room,n.users.length>1&&(k.success("\u6709\u7528\u6237\u52A0\u5165\u5566\uFF5E"),t.call=!0,t.copy=!1)}),C.on("exited",async s=>{n.users=s.room,k.warning("\u6709\u7528\u6237\u79BB\u5F00\u4E86\uFF01"),n.users.length<2&&(t.call=!1,t.copy=!0)}),C.on("error",s=>{O.error({title:"\u51FA\u9519\u4E86",content:s}),V.push("/")});const g=()=>{C.emit("exit",{roomId:E}),i&&i.close(),l&&l.getTracks().forEach(s=>{s.stop()}),V.push("/")};return(s,r)=>($(),Y(Q,null,[x(h(Nt),{show:t.modal},{default:_(()=>[x(h(At),{title:"\u8BF7\u8BBE\u7F6E\u6635\u79F0",size:"huge"},{footer:_(()=>[x(h(z),{class:"float-right",onClick:r[2]||(r[2]=m=>p())},{default:_(()=>[R("\u786E\u8BA4")]),_:1})]),default:_(()=>[x(h(J),{maxlength:"16","show-count":"",value:n.name,"onUpdate:value":r[0]||(r[0]=m=>n.name=m),onKeyup:r[1]||(r[1]=Et(m=>p(),["enter"])),placeholder:"\u8F93\u5165\u6635\u79F0"},null,8,["value"])]),_:1})]),_:1},8,["show"]),j("div",It,[x(h(Z),{type:"info",size:"large",round:""},{default:_(()=>[R("\u623F\u95F4\u53F7\uFF1A"+X(h(E)),1)]),_:1}),j("div",zt,[x(h(tt),null,{default:_(()=>[($(!0),Y(Q,null,Tt(n.users,m=>($(),Ct(h(Z),{type:"warning"},{default:_(()=>[R("\u7528\u6237\uFF1A"+X(m.userName),1)]),_:2},1024))),256))]),_:1})]),Ft,W(x(h(Rt),{style:{"max-width":"400px"}},{default:_(()=>[x(h(J),{disabled:"",value:h(w),"onUpdate:value":r[3]||(r[3]=m=>St(w)?w.value=m:null)},null,8,["value"]),x(h(z),{class:"copy-btn",ghost:"",type:"success","data-clipboard-text":h(w),onClick:r[4]||(r[4]=m=>h(k).success("\u590D\u5236\u6210\u529F"))},{default:_(()=>[R("\u590D\u5236\u94FE\u63A5")]),_:1},8,["data-clipboard-text"])]),_:1},512),[[q,t.copy]]),j("div",null,[x(h(tt),null,{default:_(()=>[W(x(h(z),{strong:"",secondary:"",round:"",type:"primary",size:"large",onClick:r[5]||(r[5]=m=>b())},{default:_(()=>[R("\u53D1\u8D77\u901A\u8BDD")]),_:1},512),[[q,t.call]]),x(h(z),{strong:"",secondary:"",round:"",type:"error",size:"large",onClick:r[6]||(r[6]=m=>g())},{default:_(()=>[R("\u8FD4\u56DE\u9996\u9875")]),_:1})]),_:1})])])],64))}};export{Ht as default};