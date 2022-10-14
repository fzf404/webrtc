import{c as C,a as I,b as S,d as k,e as z,f as h,g as R,u as W,h as y,i as N,j as f,F as E,k as _,l as w,r as D,o as K,m as U,n as s,w as c,p as d,q as M,s as p,t as Q,v as O,x as A}from"./index.6d83f0cb.js";import{s as H,N as G,a as V,b as J,c as X,d as j,e as L}from"./socket.a2890bfc.js";function Y(e,t){return C(()=>{for(const n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}const Z=e=>{const{textColor1:t,dividerColor:n,fontWeightStrong:i}=e;return{textColor:t,color:n,fontWeight:i}},ee={name:"Divider",common:I,self:Z};var te=ee,re=S("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[k("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[k("no-title",`
 display: flex;
 align-items: center;
 `)]),z("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),h("title-position-left",[z("line",[h("left",{width:"28px"})])]),h("title-position-right",[z("line",[h("right",{width:"28px"})])]),h("dashed",[z("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),h("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),z("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),k("dashed",[z("line",{backgroundColor:"var(--n-color)"})]),h("dashed",[z("line",{borderColor:"var(--n-color)"})]),h("vertical",{backgroundColor:"var(--n-color)"})]);const oe=Object.assign(Object.assign({},y.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var ne=R({name:"Divider",props:oe,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=W(e),i=y("Divider","-divider",re,te,e,t),a=C(()=>{const{common:{cubicBezierEaseInOut:r},self:{color:l,textColor:g,fontWeight:u}}=i.value;return{"--n-bezier":r,"--n-color":l,"--n-text-color":g,"--n-font-weight":u}}),o=n?N("divider",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$slots:t,titlePlacement:n,vertical:i,dashed:a,cssVars:o,mergedClsPrefix:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),f("div",{role:"separator",class:[`${r}-divider`,this.themeClass,{[`${r}-divider--vertical`]:i,[`${r}-divider--no-title`]:!t.default,[`${r}-divider--dashed`]:a,[`${r}-divider--title-position-${n}`]:t.default&&n}],style:o},i?null:f("div",{class:`${r}-divider__line ${r}-divider__line--left`}),!i&&t.default?f(E,null,f("div",{class:`${r}-divider__title`},this.$slots),f("div",{class:`${r}-divider__line ${r}-divider__line--right`})):null)}}),ie={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};const ae=e=>{const{primaryColor:t,textColor2:n,borderColor:i,lineHeight:a,fontSize:o,borderRadiusSmall:r,dividerColor:l,fontWeightStrong:g,textColor1:u,textColor3:x,infoColor:m,warningColor:v,errorColor:b,successColor:$,codeColor:T}=e;return Object.assign(Object.assign({},ie),{aTextColor:t,blockquoteTextColor:n,blockquotePrefixColor:i,blockquoteLineHeight:a,blockquoteFontSize:o,codeBorderRadius:r,liTextColor:n,liLineHeight:a,liFontSize:o,hrColor:l,headerFontWeight:g,headerTextColor:u,pTextColor:n,pTextColor1Depth:u,pTextColor2Depth:n,pTextColor3Depth:x,pLineHeight:a,pFontSize:o,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:m,headerBarColorError:b,headerBarColorWarning:v,headerBarColorSuccess:$,textColor:n,textColor1Depth:u,textColor2Depth:n,textColor3Depth:x,textColorPrimary:t,textColorInfo:m,textColorSuccess:$,textColorWarning:v,textColorError:b,codeTextColor:n,codeColor:T,codeBorder:"1px solid #0000"})},le={name:"Typography",common:I,self:ae};var F=le,se=S("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[_("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[_("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),_("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),_("&::before",{backgroundColor:"var(--n-bar-color)"})])]);const de=Object.assign(Object.assign({},y.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean});var B=e=>R({name:`H${e}`,props:de,setup(t){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=W(t),a=y("Typography","-h",se,F,t,n),o=C(()=>{const{type:l}=t,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:u,headerTextColor:x,[w("headerPrefixWidth",e)]:m,[w("headerFontSize",e)]:v,[w("headerMargin",e)]:b,[w("headerBarWidth",e)]:$,[w("headerBarColor",l)]:T}}=a.value;return{"--n-bezier":g,"--n-font-size":v,"--n-margin":b,"--n-bar-color":T,"--n-bar-width":$,"--n-font-weight":u,"--n-text-color":x,"--n-prefix-width":m}}),r=i?N(`h${e}`,C(()=>t.type[0]),o,t):void 0;return{mergedClsPrefix:n,cssVars:i?void 0:o,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var t;const{prefix:n,alignText:i,mergedClsPrefix:a,cssVars:o,$slots:r}=this;return(t=this.onRender)===null||t===void 0||t.call(this),f(`h${e}`,{class:[`${a}-h`,`${a}-h${e}`,this.themeClass,{[`${a}-h--prefix-bar`]:n,[`${a}-h--align-text`]:i}],style:o},r)}});const ce=B("1");B("2");B("3");B("4");B("5");B("6");var he=S("p",`
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`,[_("&:first-child","margin-top: 0;"),_("&:last-child","margin-bottom: 0;")]);const ue=Object.assign(Object.assign({},y.props),{depth:[String,Number]});var P=R({name:"P",props:ue,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=W(e),i=y("Typography","-p",he,F,e,t),a=C(()=>{const{depth:r}=e,l=r||"1",{common:{cubicBezierEaseInOut:g},self:{pFontSize:u,pLineHeight:x,pMargin:m,pTextColor:v,[`pTextColor${l}Depth`]:b}}=i.value;return{"--n-bezier":g,"--n-font-size":u,"--n-line-height":x,"--n-margin":m,"--n-text-color":r===void 0?v:b}}),o=n?N("p",C(()=>`${e.depth||""}`),a,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),f("p",{class:[`${this.mergedClsPrefix}-p`,this.themeClass],style:this.cssVars},this.$slots)}}),pe=S("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("strong",`
 font-weight: var(--n-font-weight-strong);
 `),h("italic",{fontStyle:"italic"}),h("underline",{textDecoration:"underline"}),h("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]);const fe=Object.assign(Object.assign({},y.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}});var ge=R({name:"Text",props:fe,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:n}=W(e),i=y("Typography","-text",pe,F,e,t),a=C(()=>{const{depth:r,type:l}=e,g=l==="default"?r===void 0?"textColor":`textColor${r}Depth`:w("textColor",l),{common:{fontWeightStrong:u,fontFamilyMono:x,cubicBezierEaseInOut:m},self:{codeTextColor:v,codeBorderRadius:b,codeColor:$,codeBorder:T,[g]:q}}=i.value;return{"--n-bezier":m,"--n-text-color":q,"--n-font-weight-strong":u,"--n-font-famliy-mono":x,"--n-code-border-radius":b,"--n-code-text-color":v,"--n-code-color":$,"--n-code-border":T}}),o=n?N("text",C(()=>`${e.type[0]}${e.depth||""}`),a,e):void 0;return{mergedClsPrefix:t,compitableTag:Y(e,["as","tag"]),cssVars:n?void 0:a,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e,t,n;const{mergedClsPrefix:i}=this;(e=this.onRender)===null||e===void 0||e.call(this);const a=[`${i}-text`,this.themeClass,{[`${i}-text--code`]:this.code,[`${i}-text--delete`]:this.delete,[`${i}-text--strong`]:this.strong,[`${i}-text--italic`]:this.italic,[`${i}-text--underline`]:this.underline}],o=(n=(t=this.$slots).default)===null||n===void 0?void 0:n.call(t);return this.code?f("code",{class:a,style:this.cssVars},this.delete?f("del",null,o):o):this.delete?f("del",{class:a,style:this.cssVars},o):f(this.compitableTag||"span",{class:a,style:this.cssVars},o)}});const xe={class:"flex flex-col space-y-2 items-center p-4"},me={class:"w-80 h-10"},Ce={__name:"index",setup(e){const t=D(""),n=D({user:0,room:0}),i=D({modal:!1});H.emit("number"),H.on("number",o=>{n.value=o});const a=()=>{t.value=parseInt(Math.random()*(999-100+1)+100,10),A.push("/"+t.value)};return(o,r)=>(K(),U(E,null,[s(d(X),{show:i.value.modal,"onUpdate:show":r[3]||(r[3]=l=>i.value.modal=l)},{default:c(()=>[s(d(G),{title:"\u8BF7\u8F93\u5165\u623F\u95F4\u53F7",size:"huge"},{footer:c(()=>[s(d(V),{class:"float-right",onClick:r[2]||(r[2]=l=>o.$router.push("/"+t.value))},{default:c(()=>[p("\u786E\u8BA4")]),_:1})]),default:c(()=>[s(d(J),{maxlength:"3","show-count":"",value:t.value,"onUpdate:value":r[0]||(r[0]=l=>t.value=l),onKeyup:r[1]||(r[1]=Q(l=>o.$router.push("/"+t.value),["enter"])),placeholder:"\u623F\u95F4\u53F7"},null,8,["value"])]),_:1})]),_:1},8,["show"]),M("div",xe,[s(d(ce),{class:"h-12"},{default:c(()=>[p("WebRTC - \u5B9E\u65F6\u97F3\u89C6\u9891\u901A\u8BDD")]),_:1}),s(d(L),{class:"h-14"},{default:c(()=>[s(d(P),null,{default:c(()=>[p("\u5728\u7EBF\u4EBA\u6570\uFF1A"),s(d(j),{type:"error",size:"small"},{default:c(()=>[p(O(n.value.user),1)]),_:1})]),_:1}),s(d(P),null,{default:c(()=>[p("\u623F\u95F4\u6570\uFF1A"),s(d(j),{type:"warning",size:"small"},{default:c(()=>[p(O(n.value.room),1)]),_:1})]),_:1})]),_:1}),s(d(L),null,{default:c(()=>[s(d(V),{strong:"",secondary:"",type:"info",size:"large",onClick:r[4]||(r[4]=l=>a())},{default:c(()=>[p("\u521B\u5EFA\u623F\u95F4")]),_:1}),s(d(V),{strong:"",secondary:"",type:"success",size:"large",onClick:r[5]||(r[5]=l=>i.value.modal=!0)},{default:c(()=>[p("\u52A0\u5165\u623F\u95F4")]),_:1})]),_:1}),M("div",me,[s(d(ne))]),s(d(P),null,{default:c(()=>[p(" \u4F7F\u7528p2p\u70B9\u5BF9\u70B9\u901A\u4FE1\u6280\u672F\uFF0C\u65E0\u9700\u62C5\u5FC3\u9690\u79C1\u6CC4\u6F0F")]),_:1}),s(d(P),null,{default:c(()=>[p("(\u5C31\u7B97\u60F3\u8BB0\u5F55\u670D\u52A1\u5668\u4E5F\u6CA1\u90A3\u4E2A\u5E26\u5BBDWQW)")]),_:1}),s(d(P),null,{default:c(()=>[s(d(ge),{type:"warning",size:"small"},{default:c(()=>[p("\u76EE\u524D\u4E00\u4E2A\u623F\u95F4\u53EA\u80FD\u8FDB\u4E24\u4E2A\u4EBA\u54E6\uFF5E")]),_:1})]),_:1})])],64))}};export{Ce as default};
