import{j as i}from"./ui-components-CI9Ya9lW.js";import{r as Bm,a as Rm,g as Ym,b as v,u as Om,L as Bn,B as Um,c as qm,d as _a,R as Lm}from"./react-vendor-DXM1Og12.js";import{F as Rn,f as Hm,a as Xm,b as Qm,c as Vm,d as Gm,e as _m,g as Zm,G as Zl}from"./icons-BalHzTYB.js";(function(){const L=document.createElement("link").relList;if(L&&L.supports&&L.supports("modulepreload"))return;for(const R of document.querySelectorAll('link[rel="modulepreload"]'))d(R);new MutationObserver(R=>{for(const C of R)if(C.type==="childList")for(const E of C.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&d(E)}).observe(document,{childList:!0,subtree:!0});function Q(R){const C={};return R.integrity&&(C.integrity=R.integrity),R.referrerPolicy&&(C.referrerPolicy=R.referrerPolicy),R.crossOrigin==="use-credentials"?C.credentials="include":R.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function d(R){if(R.ep)return;R.ep=!0;const C=Q(R);fetch(R.href,C)}})();var io={exports:{}},Di={},lo={exports:{}},ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a0;function Wm(){return a0||(a0=1,function(y){function L(b,T){var V=b.length;b.push(T);e:for(;0<V;){var fe=V-1>>>1,me=b[fe];if(0<R(me,T))b[fe]=T,b[V]=me,V=fe;else break e}}function Q(b){return b.length===0?null:b[0]}function d(b){if(b.length===0)return null;var T=b[0],V=b.pop();if(V!==T){b[0]=V;e:for(var fe=0,me=b.length,Ne=me>>>1;fe<Ne;){var G=2*(fe+1)-1,de=b[G],j=G+1,F=b[j];if(0>R(de,V))j<me&&0>R(F,de)?(b[fe]=F,b[j]=V,fe=j):(b[fe]=de,b[G]=V,fe=G);else if(j<me&&0>R(F,V))b[fe]=F,b[j]=V,fe=j;else break e}}return T}function R(b,T){var V=b.sortIndex-T.sortIndex;return V!==0?V:b.id-T.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;y.unstable_now=function(){return C.now()}}else{var E=Date,S=E.now();y.unstable_now=function(){return E.now()-S}}var H=[],D=[],B=1,Y=null,_=3,O=!1,I=!1,oe=!1,q=!1,ee=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ae(b){for(var T=Q(D);T!==null;){if(T.callback===null)d(D);else if(T.startTime<=b)d(D),T.sortIndex=T.expirationTime,L(H,T);else break;T=Q(D)}}function ge(b){if(oe=!1,ae(b),!I)if(Q(H)!==null)I=!0,ve||(ve=!0,K());else{var T=Q(D);T!==null&&$(ge,T.startTime-b)}}var ve=!1,A=-1,W=5,w=-1;function ce(){return q?!0:!(y.unstable_now()-w<W)}function M(){if(q=!1,ve){var b=y.unstable_now();w=b;var T=!0;try{e:{I=!1,oe&&(oe=!1,g(A),A=-1),O=!0;var V=_;try{t:{for(ae(b),Y=Q(H);Y!==null&&!(Y.expirationTime>b&&ce());){var fe=Y.callback;if(typeof fe=="function"){Y.callback=null,_=Y.priorityLevel;var me=fe(Y.expirationTime<=b);if(b=y.unstable_now(),typeof me=="function"){Y.callback=me,ae(b),T=!0;break t}Y===Q(H)&&d(H),ae(b)}else d(H);Y=Q(H)}if(Y!==null)T=!0;else{var Ne=Q(D);Ne!==null&&$(ge,Ne.startTime-b),T=!1}}break e}finally{Y=null,_=V,O=!1}T=void 0}}finally{T?K():ve=!1}}}var K;if(typeof J=="function")K=function(){J(M)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,X=le.port2;le.port1.onmessage=M,K=function(){X.postMessage(null)}}else K=function(){ee(M,0)};function $(b,T){A=ee(function(){b(y.unstable_now())},T)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(b){b.callback=null},y.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<b?Math.floor(1e3/b):5},y.unstable_getCurrentPriorityLevel=function(){return _},y.unstable_next=function(b){switch(_){case 1:case 2:case 3:var T=3;break;default:T=_}var V=_;_=T;try{return b()}finally{_=V}},y.unstable_requestPaint=function(){q=!0},y.unstable_runWithPriority=function(b,T){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var V=_;_=b;try{return T()}finally{_=V}},y.unstable_scheduleCallback=function(b,T,V){var fe=y.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?fe+V:fe):V=fe,b){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=V+me,b={id:B++,callback:T,priorityLevel:b,startTime:V,expirationTime:me,sortIndex:-1},V>fe?(b.sortIndex=V,L(D,b),Q(H)===null&&b===Q(D)&&(oe?(g(A),A=-1):oe=!0,$(ge,V-fe))):(b.sortIndex=me,L(H,b),I||O||(I=!0,ve||(ve=!0,K()))),b},y.unstable_shouldYield=ce,y.unstable_wrapCallback=function(b){var T=_;return function(){var V=_;_=T;try{return b.apply(this,arguments)}finally{_=V}}}}(ro)),ro}var n0;function Km(){return n0||(n0=1,lo.exports=Wm()),lo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function Fm(){if(i0)return Di;i0=1;var y=Km(),L=Bm(),Q=Rm();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function C(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function S(e){if(C(e)!==e)throw Error(d(188))}function H(e){var t=e.alternate;if(!t){if(t=C(e),t===null)throw Error(d(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var r=l.alternate;if(r===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===a)return S(l),e;if(r===n)return S(l),t;r=r.sibling}throw Error(d(188))}if(a.return!==n.return)a=l,n=r;else{for(var s=!1,o=l.child;o;){if(o===a){s=!0,a=l,n=r;break}if(o===n){s=!0,n=l,a=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===a){s=!0,a=r,n=l;break}if(o===n){s=!0,n=r,a=l;break}o=o.sibling}if(!s)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:t}function D(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=D(e),t!==null)return t;e=e.sibling}return null}var B=Object.assign,Y=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),g=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),ce=Symbol.for("react.memo_cache_sentinel"),M=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=M&&e[M]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function X(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case q:return"Profiler";case oe:return"StrictMode";case ge:return"Suspense";case ve:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case J:return(e.displayName||"Context")+".Provider";case g:return(e._context.displayName||"Context")+".Consumer";case ae:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}var $=Array.isArray,b=L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=Q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},fe=[],me=-1;function Ne(e){return{current:e}}function G(e){0>me||(e.current=fe[me],fe[me]=null,me--)}function de(e,t){me++,fe[me]=e.current,e.current=t}var j=Ne(null),F=Ne(null),se=Ne(null),Ae=Ne(null);function Ye(e,t){switch(de(se,t),de(F,e),de(j,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ku(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ku(t),e=Mu(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(j),de(j,e)}function Te(){G(j),G(F),G(se)}function et(e){e.memoizedState!==null&&de(Ae,e);var t=j.current,a=Mu(t,e.type);t!==a&&(de(F,e),de(j,a))}function Ge(e){F.current===e&&(G(j),G(F)),Ae.current===e&&(G(Ae),zi._currentValue=V)}var nt=Object.prototype.hasOwnProperty,it=y.unstable_scheduleCallback,Xt=y.unstable_cancelCallback,U=y.unstable_shouldYield,we=y.unstable_requestPaint,P=y.unstable_now,ue=y.unstable_getCurrentPriorityLevel,xe=y.unstable_ImmediatePriority,st=y.unstable_UserBlockingPriority,lt=y.unstable_NormalPriority,jt=y.unstable_LowPriority,Yt=y.unstable_IdlePriority,p0=y.log,g0=y.unstable_setDisableYieldValue,Yn=null,mt=null;function na(e){if(typeof p0=="function"&&g0(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(Yn,e)}catch{}}var pt=Math.clz32?Math.clz32:b0,h0=Math.log,x0=Math.LN2;function b0(e){return e>>>=0,e===0?32:31-(h0(e)/x0|0)|0}var Bi=256,Ri=4194304;function za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Yi(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~r,n!==0?l=za(n):(s&=o,s!==0?l=za(s):a||(a=o&~e,a!==0&&(l=za(a))))):(o=n&~r,o!==0?l=za(o):s!==0?l=za(s):a||(a=n&~e,a!==0&&(l=za(a)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:l}function On(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function y0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mo(){var e=Bi;return Bi<<=1,(Bi&4194048)===0&&(Bi=256),e}function po(){var e=Ri;return Ri<<=1,(Ri&62914560)===0&&(Ri=4194304),e}function Wl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Un(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function v0(e,t,a,n,l,r){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,p=e.hiddenUpdates;for(a=s&~a;0<a;){var N=31-pt(a),k=1<<N;o[N]=0,c[N]=-1;var h=p[N];if(h!==null)for(p[N]=null,N=0;N<h.length;N++){var x=h[N];x!==null&&(x.lane&=-536870913)}a&=~k}n!==0&&go(e,n,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function go(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-pt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function ho(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-pt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function Kl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Fl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xo(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:Ju(e.type))}function w0(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var ia=Math.random().toString(36).slice(2),tt="__reactFiber$"+ia,ot="__reactProps$"+ia,Wa="__reactContainer$"+ia,Jl="__reactEvents$"+ia,j0="__reactListeners$"+ia,S0="__reactHandles$"+ia,bo="__reactResources$"+ia,qn="__reactMarker$"+ia;function Il(e){delete e[tt],delete e[ot],delete e[Jl],delete e[j0],delete e[S0]}function Ka(e){var t=e[tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Wa]||a[tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Yu(e);e!==null;){if(a=e[tt])return a;e=Yu(e)}return t}e=a,a=e.parentNode}return null}function Fa(e){if(e=e[tt]||e[Wa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ln(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ja(e){var t=e[bo];return t||(t=e[bo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[qn]=!0}var yo=new Set,vo={};function Ea(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(vo[e]=t,e=0;e<t.length;e++)yo.add(t[e])}var C0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wo={},jo={};function A0(e){return nt.call(jo,e)?!0:nt.call(wo,e)?!1:C0.test(e)?jo[e]=!0:(wo[e]=!0,!1)}function Oi(e,t,a){if(A0(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ui(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Qt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var $l,So;function $a(e){if($l===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$l=t&&t[1]||"",So=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$l+e+So}var Pl=!1;function er(e,t){if(!e||Pl)return"";Pl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var h=x}Reflect.construct(e,[],k)}else{try{k.call()}catch(x){h=x}e.call(k.prototype)}}else{try{throw Error()}catch(x){h=x}(k=e())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&h&&typeof x.stack=="string")return[x.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var c=s.split(`
`),p=o.split(`
`);for(l=n=0;n<c.length&&!c[n].includes("DetermineComponentFrameRoot");)n++;for(;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;if(n===c.length||l===p.length)for(n=c.length-1,l=p.length-1;1<=n&&0<=l&&c[n]!==p[l];)l--;for(;1<=n&&0<=l;n--,l--)if(c[n]!==p[l]){if(n!==1||l!==1)do if(n--,l--,0>l||c[n]!==p[l]){var N=`
`+c[n].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=n&&0<=l);break}}}finally{Pl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$a(a):""}function N0(e){switch(e.tag){case 26:case 27:case 5:return $a(e.type);case 16:return $a("Lazy");case 13:return $a("Suspense");case 19:return $a("SuspenseList");case 0:case 15:return er(e.type,!1);case 11:return er(e.type.render,!1);case 1:return er(e.type,!0);case 31:return $a("Activity");default:return""}}function Co(e){try{var t="";do t+=N0(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ao(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z0(e){var t=Ao(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qi(e){e._valueTracker||(e._valueTracker=z0(e))}function No(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Ao(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var E0=/[\n"\\]/g;function Ct(e){return e.replace(E0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tr(e,t,a,n,l,r,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+St(t)):e.value!==""+St(t)&&(e.value=""+St(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?ar(e,s,St(t)):a!=null?ar(e,s,St(a)):n!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+St(o):e.removeAttribute("name")}function zo(e,t,a,n,l,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function ar(e,t,a){t==="number"&&Li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Eo(e,t,a){if(t!=null&&(t=""+St(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+St(a):""}function To(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(d(92));if($(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=St(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function en(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var T0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ko(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||T0.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Mo(e,t,a){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&ko(e,l,n)}else for(var r in t)t.hasOwnProperty(r)&&ko(e,r,t[r])}function nr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Hi(e){return M0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ir=null;function lr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tn=null,an=null;function Do(e){var t=Fa(e);if(t&&(e=t.stateNode)){var a=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(tr(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[ot]||null;if(!l)throw Error(d(90));tr(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&No(n)}break e;case"textarea":Eo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var rr=!1;function Bo(e,t,a){if(rr)return e(t,a);rr=!0;try{var n=e(t);return n}finally{if(rr=!1,(tn!==null||an!==null)&&(Al(),tn&&(t=tn,e=an,an=tn=null,Do(t),e)))for(t=0;t<e.length;t++)Do(e[t])}}function Hn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ot]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,t,typeof a));return a}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=!1;if(Vt)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){sr=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{sr=!1}var la=null,or=null,Xi=null;function Ro(){if(Xi)return Xi;var e,t=or,a=t.length,n,l="value"in la?la.value:la.textContent,r=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[r-n];n++);return Xi=l.slice(e,1<n?1-n:void 0)}function Qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vi(){return!0}function Yo(){return!1}function ct(e){function t(a,n,l,r,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Vi:Yo,this.isPropagationStopped=Yo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gi=ct(Ta),Qn=B({},Ta,{view:0,detail:0}),D0=ct(Qn),cr,dr,Vn,_i=B({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(cr=e.screenX-Vn.screenX,dr=e.screenY-Vn.screenY):dr=cr=0,Vn=e),cr)},movementY:function(e){return"movementY"in e?e.movementY:dr}}),Oo=ct(_i),B0=B({},_i,{dataTransfer:0}),R0=ct(B0),Y0=B({},Qn,{relatedTarget:0}),ur=ct(Y0),O0=B({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=ct(O0),q0=B({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=ct(q0),H0=B({},Ta,{data:0}),Uo=ct(H0),X0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=V0[e])?!!t[e]:!1}function fr(){return G0}var _0=B({},Qn,{key:function(e){if(e.key){var t=X0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Q0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(e){return e.type==="keypress"?Qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Z0=ct(_0),W0=B({},_i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=ct(W0),K0=B({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr}),F0=ct(K0),J0=B({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),I0=ct(J0),$0=B({},_i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P0=ct($0),ef=B({},Ta,{newState:0,oldState:0}),tf=ct(ef),af=[9,13,27,32],mr=Vt&&"CompositionEvent"in window,Gn=null;Vt&&"documentMode"in document&&(Gn=document.documentMode);var nf=Vt&&"TextEvent"in window&&!Gn,Lo=Vt&&(!mr||Gn&&8<Gn&&11>=Gn),Ho=" ",Xo=!1;function Qo(e,t){switch(e){case"keyup":return af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function lf(e,t){switch(e){case"compositionend":return Vo(t);case"keypress":return t.which!==32?null:(Xo=!0,Ho);case"textInput":return e=t.data,e===Ho&&Xo?null:e;default:return null}}function rf(e,t){if(nn)return e==="compositionend"||!mr&&Qo(e,t)?(e=Ro(),Xi=or=la=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lo&&t.locale!=="ko"?null:t.data;default:return null}}var sf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sf[e.type]:t==="textarea"}function _o(e,t,a,n){tn?an?an.push(n):an=[n]:tn=n,t=Ml(t,"onChange"),0<t.length&&(a=new Gi("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var _n=null,Zn=null;function of(e){Au(e,0)}function Zi(e){var t=Ln(e);if(No(t))return e}function Zo(e,t){if(e==="change")return t}var Wo=!1;if(Vt){var pr;if(Vt){var gr="oninput"in document;if(!gr){var Ko=document.createElement("div");Ko.setAttribute("oninput","return;"),gr=typeof Ko.oninput=="function"}pr=gr}else pr=!1;Wo=pr&&(!document.documentMode||9<document.documentMode)}function Fo(){_n&&(_n.detachEvent("onpropertychange",Jo),Zn=_n=null)}function Jo(e){if(e.propertyName==="value"&&Zi(Zn)){var t=[];_o(t,Zn,e,lr(e)),Bo(of,t)}}function cf(e,t,a){e==="focusin"?(Fo(),_n=t,Zn=a,_n.attachEvent("onpropertychange",Jo)):e==="focusout"&&Fo()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zi(Zn)}function uf(e,t){if(e==="click")return Zi(t)}function ff(e,t){if(e==="input"||e==="change")return Zi(t)}function mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var gt=typeof Object.is=="function"?Object.is:mf;function Wn(e,t){if(gt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!nt.call(t,l)||!gt(e[l],t[l]))return!1}return!0}function Io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $o(e,t){var a=Io(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Io(a)}}function Po(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Po(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ec(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Li(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Li(e.document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pf=Vt&&"documentMode"in document&&11>=document.documentMode,ln=null,xr=null,Kn=null,br=!1;function tc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;br||ln==null||ln!==Li(n)||(n=ln,"selectionStart"in n&&hr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Kn&&Wn(Kn,n)||(Kn=n,n=Ml(xr,"onSelect"),0<n.length&&(t=new Gi("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=ln)))}function ka(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var rn={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},yr={},ac={};Vt&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete rn.animationend.animation,delete rn.animationiteration.animation,delete rn.animationstart.animation),"TransitionEvent"in window||delete rn.transitionend.transition);function Ma(e){if(yr[e])return yr[e];if(!rn[e])return e;var t=rn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ac)return yr[e]=t[a];return e}var nc=Ma("animationend"),ic=Ma("animationiteration"),lc=Ma("animationstart"),gf=Ma("transitionrun"),hf=Ma("transitionstart"),xf=Ma("transitioncancel"),rc=Ma("transitionend"),sc=new Map,vr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vr.push("scrollEnd");function Dt(e,t){sc.set(e,t),Ea(t,[e])}var oc=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var a=oc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Co(t)},oc.set(e,t),t)}return{value:e,source:t,stack:Co(t)}}var Nt=[],sn=0,wr=0;function Wi(){for(var e=sn,t=wr=sn=0;t<e;){var a=Nt[t];Nt[t++]=null;var n=Nt[t];Nt[t++]=null;var l=Nt[t];Nt[t++]=null;var r=Nt[t];if(Nt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}r!==0&&cc(a,l,r)}}function Ki(e,t,a,n){Nt[sn++]=e,Nt[sn++]=t,Nt[sn++]=a,Nt[sn++]=n,wr|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function jr(e,t,a,n){return Ki(e,t,a,n),Fi(e)}function on(e,t){return Ki(e,null,null,t),Fi(e)}function cc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-pt(a),e=r.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),r):null}function Fi(e){if(50<yi)throw yi=0,Es=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cn={};function bf(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,a,n){return new bf(e,t,a,n)}function Sr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gt(e,t){var a=e.alternate;return a===null?(a=ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ji(e,t,a,n,l,r){var s=0;if(n=e,typeof e=="function")Sr(e)&&(s=1);else if(typeof e=="string")s=vm(e,a,j.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=ht(31,a,t,l),e.elementType=w,e.lanes=r,e;case I:return Da(a.children,l,r,t);case oe:s=8,l|=24;break;case q:return e=ht(12,a,t,l|2),e.elementType=q,e.lanes=r,e;case ge:return e=ht(13,a,t,l),e.elementType=ge,e.lanes=r,e;case ve:return e=ht(19,a,t,l),e.elementType=ve,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:case J:s=10;break e;case g:s=9;break e;case ae:s=11;break e;case A:s=14;break e;case W:s=16,n=null;break e}s=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return t=ht(s,a,t,l),t.elementType=e,t.type=n,t.lanes=r,t}function Da(e,t,a,n){return e=ht(7,e,n,t),e.lanes=a,e}function Cr(e,t,a){return e=ht(6,e,null,t),e.lanes=a,e}function Ar(e,t,a){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var dn=[],un=0,Ii=null,$i=0,zt=[],Et=0,Ba=null,_t=1,Zt="";function Ra(e,t){dn[un++]=$i,dn[un++]=Ii,Ii=e,$i=t}function uc(e,t,a){zt[Et++]=_t,zt[Et++]=Zt,zt[Et++]=Ba,Ba=e;var n=_t;e=Zt;var l=32-pt(n)-1;n&=~(1<<l),a+=1;var r=32-pt(t)+l;if(30<r){var s=l-l%5;r=(n&(1<<s)-1).toString(32),n>>=s,l-=s,_t=1<<32-pt(t)+l|a<<l|n,Zt=r+e}else _t=1<<r|a<<l|n,Zt=e}function Nr(e){e.return!==null&&(Ra(e,1),uc(e,1,0))}function zr(e){for(;e===Ii;)Ii=dn[--un],dn[un]=null,$i=dn[--un],dn[un]=null;for(;e===Ba;)Ba=zt[--Et],zt[Et]=null,Zt=zt[--Et],zt[Et]=null,_t=zt[--Et],zt[Et]=null}var rt=null,qe=null,Ce=!1,Ya=null,Ot=!1,Er=Error(d(519));function Oa(e){var t=Error(d(418,""));throw In(At(t,e)),Er}function fc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[tt]=e,t[ot]=n,a){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(a=0;a<wi.length;a++)ye(wi[a],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),zo(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),qi(t);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),To(t,n.value,n.defaultValue,n.children),qi(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Tu(t.textContent,a)?(n.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),n.onScroll!=null&&ye("scroll",t),n.onScrollEnd!=null&&ye("scrollend",t),n.onClick!=null&&(t.onclick=Dl),t=!0):t=!1,t||Oa(e)}function mc(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 13:Ot=!1;return;case 27:case 3:Ot=!0;return;default:rt=rt.return}}function Fn(e){if(e!==rt)return!1;if(!Ce)return mc(e),Ce=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gs(e.type,e.memoizedProps)),a=!a),a&&qe&&Oa(e),mc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){qe=Rt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}qe=null}}else t===27?(t=qe,wa(e.type)?(e=Ks,Ks=null,qe=e):qe=t):qe=rt?Rt(e.stateNode.nextSibling):null;return!0}function Jn(){qe=rt=null,Ce=!1}function pc(){var e=Ya;return e!==null&&(ft===null?ft=e:ft.push.apply(ft,e),Ya=null),e}function In(e){Ya===null?Ya=[e]:Ya.push(e)}var Tr=Ne(null),Ua=null,Wt=null;function ra(e,t,a){de(Tr,t._currentValue),t._currentValue=a}function Kt(e){e._currentValue=Tr.current,G(Tr)}function kr(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Mr(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=l;for(var c=0;c<t.length;c++)if(o.context===t[c]){r.lanes|=a,o=r.alternate,o!==null&&(o.lanes|=a),kr(r.return,a,e),n||(s=null);break e}r=o.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(d(341));s.lanes|=a,r=s.alternate,r!==null&&(r.lanes|=a),kr(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function $n(e,t,a,n){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(d(387));if(s=s.memoizedProps,s!==null){var o=l.type;gt(l.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(l===Ae.current){if(s=l.alternate,s===null)throw Error(d(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(zi):e=[zi])}l=l.return}e!==null&&Mr(t,e,a,n),t.flags|=262144}function Pi(e){for(e=e.firstContext;e!==null;){if(!gt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ua=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function at(e){return gc(Ua,e)}function el(e,t){return Ua===null&&qa(e),gc(e,t)}function gc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Wt===null){if(e===null)throw Error(d(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return a}var yf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},vf=y.unstable_scheduleCallback,wf=y.unstable_NormalPriority,_e={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dr(){return{controller:new yf,data:new Map,refCount:0}}function Pn(e){e.refCount--,e.refCount===0&&vf(wf,function(){e.controller.abort()})}var ei=null,Br=0,fn=0,mn=null;function jf(e,t){if(ei===null){var a=ei=[];Br=0,fn=Ys(),mn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Br++,t.then(hc,hc),t}function hc(){if(--Br===0&&ei!==null){mn!==null&&(mn.status="fulfilled");var e=ei;ei=null,fn=0,mn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sf(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var xc=b.S;b.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&jf(e,t),xc!==null&&xc(e,t)};var La=Ne(null);function Rr(){var e=La.current;return e!==null?e:Re.pooledCache}function tl(e,t){t===null?de(La,La.current):de(La,t.pool)}function bc(){var e=Rr();return e===null?null:{parent:_e._currentValue,pool:e}}var ti=Error(d(460)),yc=Error(d(474)),al=Error(d(542)),Yr={then:function(){}};function vc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nl(){}function wc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(nl,nl),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sc(e),e;default:if(typeof t.status=="string")t.then(nl,nl);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sc(e),e}throw ai=t,ti}}var ai=null;function jc(){if(ai===null)throw Error(d(459));var e=ai;return ai=null,e}function Sc(e){if(e===ti||e===al)throw Error(d(483))}var sa=!1;function Or(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ur(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ze&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Fi(e),cc(e,null,a),t}return Ki(e,n,t,a),Fi(e)}function ni(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ho(e,a)}}function qr(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,a=a.next}while(a!==null);r===null?l=r=t:r=r.next=t}else l=r=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Lr=!1;function ii(){if(Lr){var e=mn;if(e!==null)throw e}}function li(e,t,a,n){Lr=!1;var l=e.updateQueue;sa=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,p=c.next;c.next=null,s===null?r=p:s.next=p,s=c;var N=e.alternate;N!==null&&(N=N.updateQueue,o=N.lastBaseUpdate,o!==s&&(o===null?N.firstBaseUpdate=p:o.next=p,N.lastBaseUpdate=c))}if(r!==null){var k=l.baseState;s=0,N=p=c=null,o=r;do{var h=o.lane&-536870913,x=h!==o.lane;if(x?(je&h)===h:(n&h)===h){h!==0&&h===fn&&(Lr=!0),N!==null&&(N=N.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var re=e,ne=o;h=t;var De=a;switch(ne.tag){case 1:if(re=ne.payload,typeof re=="function"){k=re.call(De,k,h);break e}k=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ne.payload,h=typeof re=="function"?re.call(De,k,h):re,h==null)break e;k=B({},k,h);break e;case 2:sa=!0}}h=o.callback,h!==null&&(e.flags|=64,x&&(e.flags|=8192),x=l.callbacks,x===null?l.callbacks=[h]:x.push(h))}else x={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},N===null?(p=N=x,c=k):N=N.next=x,s|=h;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;x=o,o=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);N===null&&(c=k),l.baseState=c,l.firstBaseUpdate=p,l.lastBaseUpdate=N,r===null&&(l.shared.lanes=0),xa|=s,e.lanes=s,e.memoizedState=k}}function Cc(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Ac(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Cc(a[e],t)}var pn=Ne(null),il=Ne(0);function Nc(e,t){e=ta,de(il,e),de(pn,t),ta=e|t.baseLanes}function Hr(){de(il,ta),de(pn,pn.current)}function Xr(){ta=il.current,G(pn),G(il)}var da=0,pe=null,ke=null,Qe=null,ll=!1,gn=!1,Ha=!1,rl=0,ri=0,hn=null,Cf=0;function He(){throw Error(d(321))}function Qr(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!gt(e[a],t[a]))return!1;return!0}function Vr(e,t,a,n,l,r){return da=r,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,b.H=e===null||e.memoizedState===null?cd:dd,Ha=!1,r=a(n,l),Ha=!1,gn&&(r=Ec(t,a,n,l)),zc(e),r}function zc(e){b.H=fl;var t=ke!==null&&ke.next!==null;if(da=0,Qe=ke=pe=null,ll=!1,ri=0,hn=null,t)throw Error(d(300));e===null||Ke||(e=e.dependencies,e!==null&&Pi(e)&&(Ke=!0))}function Ec(e,t,a,n){pe=e;var l=0;do{if(gn&&(hn=null),ri=0,gn=!1,25<=l)throw Error(d(301));if(l+=1,Qe=ke=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}b.H=Mf,r=t(a,n)}while(gn);return r}function Af(){var e=b.H,t=e.useState()[0];return t=typeof t.then=="function"?si(t):t,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),t}function Gr(){var e=rl!==0;return rl=0,e}function _r(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zr(e){if(ll){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ll=!1}da=0,Qe=ke=pe=null,gn=!1,ri=rl=0,hn=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?pe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ve(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Qe===null?pe.memoizedState:Qe.next;if(t!==null)Qe=t,ke=e;else{if(e===null)throw pe.alternate===null?Error(d(467)):Error(d(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Qe===null?pe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Wr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function si(e){var t=ri;return ri+=1,hn===null&&(hn=[]),e=wc(hn,e,t),t=pe,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,b.H=t===null||t.memoizedState===null?cd:dd),e}function sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return si(e);if(e.$$typeof===J)return at(e)}throw Error(d(438,String(e)))}function Kr(e){var t=null,a=pe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=pe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Wr(),pe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=ce;return t.index++,a}function Ft(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=Ve();return Fr(t,ke,e)}function Fr(e,t,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var l=e.baseQueue,r=n.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}t.baseQueue=l=r,n.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var o=s=null,c=null,p=t,N=!1;do{var k=p.lane&-536870913;if(k!==p.lane?(je&k)===k:(da&k)===k){var h=p.revertLane;if(h===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),k===fn&&(N=!0);else if((da&h)===h){p=p.next,h===fn&&(N=!0);continue}else k={lane:0,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(o=c=k,s=r):c=c.next=k,pe.lanes|=h,xa|=h;k=p.action,Ha&&a(r,k),r=p.hasEagerState?p.eagerState:a(r,k)}else h={lane:k,revertLane:p.revertLane,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(o=c=h,s=r):c=c.next=h,pe.lanes|=k,xa|=k;p=p.next}while(p!==null&&p!==t);if(c===null?s=r:c.next=o,!gt(r,e.memoizedState)&&(Ke=!0,N&&(a=mn,a!==null)))throw a;e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Jr(e){var t=Ve(),a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,r=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do r=e(r,s.action),s=s.next;while(s!==l);gt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function Tc(e,t,a){var n=pe,l=Ve(),r=Ce;if(r){if(a===void 0)throw Error(d(407));a=a()}else a=t();var s=!gt((ke||l).memoizedState,a);s&&(l.memoizedState=a,Ke=!0),l=l.queue;var o=Dc.bind(null,n,l,e);if(oi(2048,8,o,[e]),l.getSnapshot!==t||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,xn(9,cl(),Mc.bind(null,n,l,a,t),null),Re===null)throw Error(d(349));r||(da&124)!==0||kc(n,t,a)}return a}function kc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=pe.updateQueue,t===null?(t=Wr(),pe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Mc(e,t,a,n){t.value=a,t.getSnapshot=n,Bc(t)&&Rc(e)}function Dc(e,t,a){return a(function(){Bc(t)&&Rc(e)})}function Bc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!gt(e,a)}catch{return!0}}function Rc(e){var t=on(e,2);t!==null&&wt(t,e,2)}function Ir(e){var t=dt();if(typeof e=="function"){var a=e;if(e=a(),Ha){na(!0);try{a()}finally{na(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:e},t}function Yc(e,t,a,n){return e.baseState=a,Fr(e,ke,typeof n=="function"?n:Ft)}function Nf(e,t,a,n,l){if(ul(e))throw Error(d(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};b.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,Oc(t,r)):(r.next=a.next,t.pending=a.next=r)}}function Oc(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var r=b.T,s={};b.T=s;try{var o=a(l,n),c=b.S;c!==null&&c(s,o),Uc(e,t,o)}catch(p){$r(e,t,p)}finally{b.T=r}}else try{r=a(l,n),Uc(e,t,r)}catch(p){$r(e,t,p)}}function Uc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){qc(e,t,n)},function(n){return $r(e,t,n)}):qc(e,t,a)}function qc(e,t,a){t.status="fulfilled",t.value=a,Lc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Oc(e,a)))}function $r(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Lc(t),t=t.next;while(t!==n)}e.action=null}function Lc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Hc(e,t){return t}function Xc(e,t){if(Ce){var a=Re.formState;if(a!==null){e:{var n=pe;if(Ce){if(qe){t:{for(var l=qe,r=Ot;l.nodeType!==8;){if(!r){l=null;break t}if(l=Rt(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){qe=Rt(l.nextSibling),n=l.data==="F!";break e}}Oa(n)}n=!1}n&&(t=a[0])}}return a=dt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hc,lastRenderedState:t},a.queue=n,a=rd.bind(null,pe,n),n.dispatch=a,n=Ir(!1),r=ns.bind(null,pe,!1,n.queue),n=dt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Nf.bind(null,pe,l,r,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Qc(e){var t=Ve();return Vc(t,ke,e)}function Vc(e,t,a){if(t=Fr(e,t,Hc)[0],e=ol(Ft)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=si(t)}catch(s){throw s===ti?al:s}else n=t;t=Ve();var l=t.queue,r=l.dispatch;return a!==t.memoizedState&&(pe.flags|=2048,xn(9,cl(),zf.bind(null,l,a),null)),[n,r,e]}function zf(e,t){e.action=t}function Gc(e){var t=Ve(),a=ke;if(a!==null)return Vc(t,a,e);Ve(),t=t.memoizedState,a=Ve();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function xn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Wr(),pe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function cl(){return{destroy:void 0,resource:void 0}}function _c(){return Ve().memoizedState}function dl(e,t,a,n){var l=dt();n=n===void 0?null:n,pe.flags|=e,l.memoizedState=xn(1|t,cl(),a,n)}function oi(e,t,a,n){var l=Ve();n=n===void 0?null:n;var r=l.memoizedState.inst;ke!==null&&n!==null&&Qr(n,ke.memoizedState.deps)?l.memoizedState=xn(t,r,a,n):(pe.flags|=e,l.memoizedState=xn(1|t,r,a,n))}function Zc(e,t){dl(8390656,8,e,t)}function Wc(e,t){oi(2048,8,e,t)}function Kc(e,t){return oi(4,2,e,t)}function Fc(e,t){return oi(4,4,e,t)}function Jc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ic(e,t,a){a=a!=null?a.concat([e]):null,oi(4,4,Jc.bind(null,t,e),a)}function Pr(){}function $c(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Qr(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Pc(e,t){var a=Ve();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Qr(t,n[1]))return n[0];if(n=e(),Ha){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[n,t],n}function es(e,t,a){return a===void 0||(da&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=au(),pe.lanes|=e,xa|=e,a)}function ed(e,t,a,n){return gt(a,t)?a:pn.current!==null?(e=es(e,a,n),gt(e,t)||(Ke=!0),e):(da&42)===0?(Ke=!0,e.memoizedState=a):(e=au(),pe.lanes|=e,xa|=e,t)}function td(e,t,a,n,l){var r=T.p;T.p=r!==0&&8>r?r:8;var s=b.T,o={};b.T=o,ns(e,!1,t,a);try{var c=l(),p=b.S;if(p!==null&&p(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var N=Sf(c,n);ci(e,t,N,vt(e))}else ci(e,t,n,vt(e))}catch(k){ci(e,t,{then:function(){},status:"rejected",reason:k},vt())}finally{T.p=r,b.T=s}}function Ef(){}function ts(e,t,a,n){if(e.tag!==5)throw Error(d(476));var l=ad(e).queue;td(e,l,t,V,a===null?Ef:function(){return nd(e),a(n)})}function ad(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ft,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nd(e){var t=ad(e).next.queue;ci(e,t,{},vt())}function as(){return at(zi)}function id(){return Ve().memoizedState}function ld(){return Ve().memoizedState}function Tf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=oa(a);var n=ca(t,e,a);n!==null&&(wt(n,t,a),ni(n,t,a)),t={cache:Dr()},e.payload=t;return}t=t.return}}function kf(e,t,a){var n=vt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ul(e)?sd(t,a):(a=jr(e,t,a,n),a!==null&&(wt(a,e,n),od(a,t,n)))}function rd(e,t,a){var n=vt();ci(e,t,a,n)}function ci(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(e))sd(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,o=r(s,a);if(l.hasEagerState=!0,l.eagerState=o,gt(o,s))return Ki(e,t,l,0),Re===null&&Wi(),!1}catch{}finally{}if(a=jr(e,t,l,n),a!==null)return wt(a,e,n),od(a,t,n),!0}return!1}function ns(e,t,a,n){if(n={lane:2,revertLane:Ys(),action:n,hasEagerState:!1,eagerState:null,next:null},ul(e)){if(t)throw Error(d(479))}else t=jr(e,a,n,2),t!==null&&wt(t,e,2)}function ul(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function sd(e,t){gn=ll=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function od(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,ho(e,a)}}var fl={readContext:at,use:sl,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He},cd={readContext:at,use:sl,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Zc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,dl(4194308,4,Jc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return dl(4194308,4,e,t)},useInsertionEffect:function(e,t){dl(4,2,e,t)},useMemo:function(e,t){var a=dt();t=t===void 0?null:t;var n=e();if(Ha){na(!0);try{e()}finally{na(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=dt();if(a!==void 0){var l=a(t);if(Ha){na(!0);try{a(t)}finally{na(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=kf.bind(null,pe,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ir(e);var t=e.queue,a=rd.bind(null,pe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Pr,useDeferredValue:function(e,t){var a=dt();return es(a,e,t)},useTransition:function(){var e=Ir(!1);return e=td.bind(null,pe,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=pe,l=dt();if(Ce){if(a===void 0)throw Error(d(407));a=a()}else{if(a=t(),Re===null)throw Error(d(349));(je&124)!==0||kc(n,t,a)}l.memoizedState=a;var r={value:a,getSnapshot:t};return l.queue=r,Zc(Dc.bind(null,n,r,e),[e]),n.flags|=2048,xn(9,cl(),Mc.bind(null,n,r,a,t),null),a},useId:function(){var e=dt(),t=Re.identifierPrefix;if(Ce){var a=Zt,n=_t;a=(n&~(1<<32-pt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=rl++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Cf++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:as,useFormState:Xc,useActionState:Xc,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ns.bind(null,pe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Kr,useCacheRefresh:function(){return dt().memoizedState=Tf.bind(null,pe)}},dd={readContext:at,use:sl,useCallback:$c,useContext:at,useEffect:Wc,useImperativeHandle:Ic,useInsertionEffect:Kc,useLayoutEffect:Fc,useMemo:Pc,useReducer:ol,useRef:_c,useState:function(){return ol(Ft)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=Ve();return ed(a,ke.memoizedState,e,t)},useTransition:function(){var e=ol(Ft)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:si(e),t]},useSyncExternalStore:Tc,useId:id,useHostTransitionStatus:as,useFormState:Qc,useActionState:Qc,useOptimistic:function(e,t){var a=Ve();return Yc(a,ke,e,t)},useMemoCache:Kr,useCacheRefresh:ld},Mf={readContext:at,use:sl,useCallback:$c,useContext:at,useEffect:Wc,useImperativeHandle:Ic,useInsertionEffect:Kc,useLayoutEffect:Fc,useMemo:Pc,useReducer:Jr,useRef:_c,useState:function(){return Jr(Ft)},useDebugValue:Pr,useDeferredValue:function(e,t){var a=Ve();return ke===null?es(a,e,t):ed(a,ke.memoizedState,e,t)},useTransition:function(){var e=Jr(Ft)[0],t=Ve().memoizedState;return[typeof e=="boolean"?e:si(e),t]},useSyncExternalStore:Tc,useId:id,useHostTransitionStatus:as,useFormState:Gc,useActionState:Gc,useOptimistic:function(e,t){var a=Ve();return ke!==null?Yc(a,ke,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Kr,useCacheRefresh:ld},bn=null,di=0;function ml(e){var t=di;return di+=1,bn===null&&(bn=[]),wc(bn,e,t)}function ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function pl(e,t){throw t.$$typeof===Y?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function ud(e){var t=e._init;return t(e._payload)}function fd(e){function t(f,u){if(e){var m=f.deletions;m===null?(f.deletions=[u],f.flags|=16):m.push(u)}}function a(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function n(f){for(var u=new Map;f!==null;)f.key!==null?u.set(f.key,f):u.set(f.index,f),f=f.sibling;return u}function l(f,u){return f=Gt(f,u),f.index=0,f.sibling=null,f}function r(f,u,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<u?(f.flags|=67108866,u):m):(f.flags|=67108866,u)):(f.flags|=1048576,u)}function s(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,u,m,z){return u===null||u.tag!==6?(u=Cr(m,f.mode,z),u.return=f,u):(u=l(u,m),u.return=f,u)}function c(f,u,m,z){var Z=m.type;return Z===I?N(f,u,m.props.children,z,m.key):u!==null&&(u.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&ud(Z)===u.type)?(u=l(u,m.props),ui(u,m),u.return=f,u):(u=Ji(m.type,m.key,m.props,null,f.mode,z),ui(u,m),u.return=f,u)}function p(f,u,m,z){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Ar(m,f.mode,z),u.return=f,u):(u=l(u,m.children||[]),u.return=f,u)}function N(f,u,m,z,Z){return u===null||u.tag!==7?(u=Da(m,f.mode,z,Z),u.return=f,u):(u=l(u,m),u.return=f,u)}function k(f,u,m){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Cr(""+u,f.mode,m),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case _:return m=Ji(u.type,u.key,u.props,null,f.mode,m),ui(m,u),m.return=f,m;case O:return u=Ar(u,f.mode,m),u.return=f,u;case W:var z=u._init;return u=z(u._payload),k(f,u,m)}if($(u)||K(u))return u=Da(u,f.mode,m,null),u.return=f,u;if(typeof u.then=="function")return k(f,ml(u),m);if(u.$$typeof===J)return k(f,el(f,u),m);pl(f,u)}return null}function h(f,u,m,z){var Z=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return Z!==null?null:o(f,u,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _:return m.key===Z?c(f,u,m,z):null;case O:return m.key===Z?p(f,u,m,z):null;case W:return Z=m._init,m=Z(m._payload),h(f,u,m,z)}if($(m)||K(m))return Z!==null?null:N(f,u,m,z,null);if(typeof m.then=="function")return h(f,u,ml(m),z);if(m.$$typeof===J)return h(f,u,el(f,m),z);pl(f,m)}return null}function x(f,u,m,z,Z){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return f=f.get(m)||null,o(u,f,""+z,Z);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case _:return f=f.get(z.key===null?m:z.key)||null,c(u,f,z,Z);case O:return f=f.get(z.key===null?m:z.key)||null,p(u,f,z,Z);case W:var he=z._init;return z=he(z._payload),x(f,u,m,z,Z)}if($(z)||K(z))return f=f.get(m)||null,N(u,f,z,Z,null);if(typeof z.then=="function")return x(f,u,m,ml(z),Z);if(z.$$typeof===J)return x(f,u,m,el(u,z),Z);pl(u,z)}return null}function re(f,u,m,z){for(var Z=null,he=null,te=u,ie=u=0,Je=null;te!==null&&ie<m.length;ie++){te.index>ie?(Je=te,te=null):Je=te.sibling;var Se=h(f,te,m[ie],z);if(Se===null){te===null&&(te=Je);break}e&&te&&Se.alternate===null&&t(f,te),u=r(Se,u,ie),he===null?Z=Se:he.sibling=Se,he=Se,te=Je}if(ie===m.length)return a(f,te),Ce&&Ra(f,ie),Z;if(te===null){for(;ie<m.length;ie++)te=k(f,m[ie],z),te!==null&&(u=r(te,u,ie),he===null?Z=te:he.sibling=te,he=te);return Ce&&Ra(f,ie),Z}for(te=n(te);ie<m.length;ie++)Je=x(te,f,ie,m[ie],z),Je!==null&&(e&&Je.alternate!==null&&te.delete(Je.key===null?ie:Je.key),u=r(Je,u,ie),he===null?Z=Je:he.sibling=Je,he=Je);return e&&te.forEach(function(Na){return t(f,Na)}),Ce&&Ra(f,ie),Z}function ne(f,u,m,z){if(m==null)throw Error(d(151));for(var Z=null,he=null,te=u,ie=u=0,Je=null,Se=m.next();te!==null&&!Se.done;ie++,Se=m.next()){te.index>ie?(Je=te,te=null):Je=te.sibling;var Na=h(f,te,Se.value,z);if(Na===null){te===null&&(te=Je);break}e&&te&&Na.alternate===null&&t(f,te),u=r(Na,u,ie),he===null?Z=Na:he.sibling=Na,he=Na,te=Je}if(Se.done)return a(f,te),Ce&&Ra(f,ie),Z;if(te===null){for(;!Se.done;ie++,Se=m.next())Se=k(f,Se.value,z),Se!==null&&(u=r(Se,u,ie),he===null?Z=Se:he.sibling=Se,he=Se);return Ce&&Ra(f,ie),Z}for(te=n(te);!Se.done;ie++,Se=m.next())Se=x(te,f,ie,Se.value,z),Se!==null&&(e&&Se.alternate!==null&&te.delete(Se.key===null?ie:Se.key),u=r(Se,u,ie),he===null?Z=Se:he.sibling=Se,he=Se);return e&&te.forEach(function(Dm){return t(f,Dm)}),Ce&&Ra(f,ie),Z}function De(f,u,m,z){if(typeof m=="object"&&m!==null&&m.type===I&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case _:e:{for(var Z=m.key;u!==null;){if(u.key===Z){if(Z=m.type,Z===I){if(u.tag===7){a(f,u.sibling),z=l(u,m.props.children),z.return=f,f=z;break e}}else if(u.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&ud(Z)===u.type){a(f,u.sibling),z=l(u,m.props),ui(z,m),z.return=f,f=z;break e}a(f,u);break}else t(f,u);u=u.sibling}m.type===I?(z=Da(m.props.children,f.mode,z,m.key),z.return=f,f=z):(z=Ji(m.type,m.key,m.props,null,f.mode,z),ui(z,m),z.return=f,f=z)}return s(f);case O:e:{for(Z=m.key;u!==null;){if(u.key===Z)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){a(f,u.sibling),z=l(u,m.children||[]),z.return=f,f=z;break e}else{a(f,u);break}else t(f,u);u=u.sibling}z=Ar(m,f.mode,z),z.return=f,f=z}return s(f);case W:return Z=m._init,m=Z(m._payload),De(f,u,m,z)}if($(m))return re(f,u,m,z);if(K(m)){if(Z=K(m),typeof Z!="function")throw Error(d(150));return m=Z.call(m),ne(f,u,m,z)}if(typeof m.then=="function")return De(f,u,ml(m),z);if(m.$$typeof===J)return De(f,u,el(f,m),z);pl(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,u!==null&&u.tag===6?(a(f,u.sibling),z=l(u,m),z.return=f,f=z):(a(f,u),z=Cr(m,f.mode,z),z.return=f,f=z),s(f)):a(f,u)}return function(f,u,m,z){try{di=0;var Z=De(f,u,m,z);return bn=null,Z}catch(te){if(te===ti||te===al)throw te;var he=ht(29,te,null,f.mode);return he.lanes=z,he.return=f,he}finally{}}}var yn=fd(!0),md=fd(!1),Tt=Ne(null),Ut=null;function ua(e){var t=e.alternate;de(Ze,Ze.current&1),de(Tt,e),Ut===null&&(t===null||pn.current!==null||t.memoizedState!==null)&&(Ut=e)}function pd(e){if(e.tag===22){if(de(Ze,Ze.current),de(Tt,e),Ut===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ut=e)}}else fa()}function fa(){de(Ze,Ze.current),de(Tt,Tt.current)}function Jt(e){G(Tt),Ut===e&&(Ut=null),G(Ze)}var Ze=Ne(0);function gl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ws(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function is(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:B({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ls={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=vt(),l=oa(n);l.payload=t,a!=null&&(l.callback=a),t=ca(e,l,n),t!==null&&(wt(t,e,n),ni(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=vt(),l=oa(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ca(e,l,n),t!==null&&(wt(t,e,n),ni(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),n=oa(a);n.tag=2,t!=null&&(n.callback=t),t=ca(e,n,a),t!==null&&(wt(t,e,a),ni(t,e,a))}};function gd(e,t,a,n,l,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,s):t.prototype&&t.prototype.isPureReactComponent?!Wn(a,n)||!Wn(l,r):!0}function hd(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Xa(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=B({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var hl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xd(e){hl(e)}function bd(e){console.error(e)}function yd(e){hl(e)}function xl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function vd(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function rs(e,t,a){return a=oa(a),a.tag=3,a.payload={element:null},a.callback=function(){xl(e,t)},a}function wd(e){return e=oa(e),e.tag=3,e}function jd(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var r=n.value;e.payload=function(){return l(r)},e.callback=function(){vd(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){vd(t,a,n),typeof l!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Df(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&$n(t,a,l,!0),a=Tt.current,a!==null){switch(a.tag){case 13:return Ut===null?ks():a.alternate===null&&Le===0&&(Le=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Yr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Ds(e,n,l)),!1;case 22:return a.flags|=65536,n===Yr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Ds(e,n,l)),!1}throw Error(d(435,a.tag))}return Ds(e,n,l),ks(),!1}if(Ce)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Er&&(e=Error(d(422),{cause:n}),In(At(e,a)))):(n!==Er&&(t=Error(d(423),{cause:n}),In(At(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=At(n,a),l=rs(e.stateNode,n,l),qr(e,l),Le!==4&&(Le=2)),!1;var r=Error(d(520),{cause:n});if(r=At(r,a),bi===null?bi=[r]:bi.push(r),Le!==4&&(Le=2),t===null)return!0;n=At(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=rs(a.stateNode,n,e),qr(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))))return a.flags|=65536,l&=-l,a.lanes|=l,l=wd(l),jd(l,e,a,n),qr(a,l),!1}a=a.return}while(a!==null);return!1}var Sd=Error(d(461)),Ke=!1;function Ie(e,t,a,n){t.child=e===null?md(t,null,a,n):yn(t,e.child,a,n)}function Cd(e,t,a,n,l){a=a.render;var r=t.ref;if("ref"in n){var s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}else s=n;return qa(t),n=Vr(e,t,a,s,r,l),o=Gr(),e!==null&&!Ke?(_r(e,t,l),It(e,t,l)):(Ce&&o&&Nr(t),t.flags|=1,Ie(e,t,n,l),t.child)}function Ad(e,t,a,n,l){if(e===null){var r=a.type;return typeof r=="function"&&!Sr(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,Nd(e,t,r,n,l)):(e=Ji(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!ps(e,l)){var s=r.memoizedProps;if(a=a.compare,a=a!==null?a:Wn,a(s,n)&&e.ref===t.ref)return It(e,t,l)}return t.flags|=1,e=Gt(r,n),e.ref=t.ref,e.return=t,t.child=e}function Nd(e,t,a,n,l){if(e!==null){var r=e.memoizedProps;if(Wn(r,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=r,ps(e,l))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,It(e,t,l)}return ss(e,t,a,n,l)}function zd(e,t,a){var n=t.pendingProps,l=n.children,r=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=r!==null?r.baseLanes|a:a,e!==null){for(l=t.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;t.childLanes=r&~n}else t.childLanes=0,t.child=null;return Ed(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&tl(t,r!==null?r.cachePool:null),r!==null?Nc(t,r):Hr(),pd(t);else return t.lanes=t.childLanes=536870912,Ed(e,t,r!==null?r.baseLanes|a:a,a)}else r!==null?(tl(t,r.cachePool),Nc(t,r),fa(),t.memoizedState=null):(e!==null&&tl(t,null),Hr(),fa());return Ie(e,t,l,a),t.child}function Ed(e,t,a,n){var l=Rr();return l=l===null?null:{parent:_e._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&tl(t,null),Hr(),pd(t),e!==null&&$n(e,t,n,!0),null}function bl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ss(e,t,a,n,l){return qa(t),a=Vr(e,t,a,n,void 0,l),n=Gr(),e!==null&&!Ke?(_r(e,t,l),It(e,t,l)):(Ce&&n&&Nr(t),t.flags|=1,Ie(e,t,a,l),t.child)}function Td(e,t,a,n,l,r){return qa(t),t.updateQueue=null,a=Ec(t,n,a,l),zc(e),n=Gr(),e!==null&&!Ke?(_r(e,t,r),It(e,t,r)):(Ce&&n&&Nr(t),t.flags|=1,Ie(e,t,a,r),t.child)}function kd(e,t,a,n,l){if(qa(t),t.stateNode===null){var r=cn,s=a.contextType;typeof s=="object"&&s!==null&&(r=at(s)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ls,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},Or(t),s=a.contextType,r.context=typeof s=="object"&&s!==null?at(s):cn,r.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(is(t,a,s,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&ls.enqueueReplaceState(r,r.state,null),li(t,n,r,l),ii(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,c=Xa(a,o);r.props=c;var p=r.context,N=a.contextType;s=cn,typeof N=="object"&&N!==null&&(s=at(N));var k=a.getDerivedStateFromProps;N=typeof k=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,N||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||p!==s)&&hd(t,r,n,s),sa=!1;var h=t.memoizedState;r.state=h,li(t,n,r,l),ii(),p=t.memoizedState,o||h!==p||sa?(typeof k=="function"&&(is(t,a,k,n),p=t.memoizedState),(c=sa||gd(t,a,c,n,h,p,s))?(N||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=p),r.props=n,r.state=p,r.context=s,n=c):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,Ur(e,t),s=t.memoizedProps,N=Xa(a,s),r.props=N,k=t.pendingProps,h=r.context,p=a.contextType,c=cn,typeof p=="object"&&p!==null&&(c=at(p)),o=a.getDerivedStateFromProps,(p=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==k||h!==c)&&hd(t,r,n,c),sa=!1,h=t.memoizedState,r.state=h,li(t,n,r,l),ii();var x=t.memoizedState;s!==k||h!==x||sa||e!==null&&e.dependencies!==null&&Pi(e.dependencies)?(typeof o=="function"&&(is(t,a,o,n),x=t.memoizedState),(N=sa||gd(t,a,N,n,h,x,c)||e!==null&&e.dependencies!==null&&Pi(e.dependencies))?(p||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,x,c),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,x,c)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),r.props=n,r.state=x,r.context=c,n=N):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,bl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=yn(t,e.child,null,l),t.child=yn(t,null,a,l)):Ie(e,t,a,l),t.memoizedState=r.state,e=t.child):e=It(e,t,l),e}function Md(e,t,a,n){return Jn(),t.flags|=256,Ie(e,t,a,n),t.child}var os={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cs(e){return{baseLanes:e,cachePool:bc()}}function ds(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=kt),e}function Dd(e,t,a){var n=t.pendingProps,l=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(l?ua(t):fa(),Ce){var o=qe,c;if(c=o){e:{for(c=o,o=Ot;c.nodeType!==8;){if(!o){o=null;break e}if(c=Rt(c.nextSibling),c===null){o=null;break e}}o=c}o!==null?(t.memoizedState={dehydrated:o,treeContext:Ba!==null?{id:_t,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},c=ht(18,null,null,0),c.stateNode=o,c.return=t,t.child=c,rt=t,qe=null,c=!0):c=!1}c||Oa(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Ws(o)?t.lanes=32:t.lanes=536870912,null;Jt(t)}return o=n.children,n=n.fallback,l?(fa(),l=t.mode,o=yl({mode:"hidden",children:o},l),n=Da(n,l,a,null),o.return=t,n.return=t,o.sibling=n,t.child=o,l=t.child,l.memoizedState=cs(a),l.childLanes=ds(e,s,a),t.memoizedState=os,n):(ua(t),us(t,o))}if(c=e.memoizedState,c!==null&&(o=c.dehydrated,o!==null)){if(r)t.flags&256?(ua(t),t.flags&=-257,t=fs(e,t,a)):t.memoizedState!==null?(fa(),t.child=e.child,t.flags|=128,t=null):(fa(),l=n.fallback,o=t.mode,n=yl({mode:"visible",children:n.children},o),l=Da(l,o,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,yn(t,e.child,null,a),n=t.child,n.memoizedState=cs(a),n.childLanes=ds(e,s,a),t.memoizedState=os,t=l);else if(ua(t),Ws(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var p=s.dgst;s=p,n=Error(d(419)),n.stack="",n.digest=s,In({value:n,source:null,stack:null}),t=fs(e,t,a)}else if(Ke||$n(e,t,a,!1),s=(a&e.childLanes)!==0,Ke||s){if(s=Re,s!==null&&(n=a&-a,n=(n&42)!==0?1:Kl(n),n=(n&(s.suspendedLanes|a))!==0?0:n,n!==0&&n!==c.retryLane))throw c.retryLane=n,on(e,n),wt(s,e,n),Sd;o.data==="$?"||ks(),t=fs(e,t,a)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,qe=Rt(o.nextSibling),rt=t,Ce=!0,Ya=null,Ot=!1,e!==null&&(zt[Et++]=_t,zt[Et++]=Zt,zt[Et++]=Ba,_t=e.id,Zt=e.overflow,Ba=t),t=us(t,n.children),t.flags|=4096);return t}return l?(fa(),l=n.fallback,o=t.mode,c=e.child,p=c.sibling,n=Gt(c,{mode:"hidden",children:n.children}),n.subtreeFlags=c.subtreeFlags&65011712,p!==null?l=Gt(p,l):(l=Da(l,o,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,o=e.child.memoizedState,o===null?o=cs(a):(c=o.cachePool,c!==null?(p=_e._currentValue,c=c.parent!==p?{parent:p,pool:p}:c):c=bc(),o={baseLanes:o.baseLanes|a,cachePool:c}),l.memoizedState=o,l.childLanes=ds(e,s,a),t.memoizedState=os,n):(ua(t),a=e.child,e=a.sibling,a=Gt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function us(e,t){return t=yl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yl(e,t){return e=ht(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fs(e,t,a){return yn(t,e.child,null,a),e=us(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bd(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),kr(e.return,t,a)}function ms(e,t,a,n,l){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=l)}function Rd(e,t,a){var n=t.pendingProps,l=n.revealOrder,r=n.tail;if(Ie(e,t,n.children,a),n=Ze.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bd(e,a,t);else if(e.tag===19)Bd(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(de(Ze,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ms(t,!1,l,a,r);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&gl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}ms(t,!0,a,null,r);break;case"together":ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function It(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if($n(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,a=Gt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Gt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ps(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pi(e)))}function Bf(e,t,a){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),ra(t,_e,e.memoizedState.cache),Jn();break;case 27:case 5:et(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ua(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Dd(e,t,a):(ua(t),e=It(e,t,a),e!==null?e.sibling:null);ua(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||($n(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Rd(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),de(Ze,Ze.current),n)break;return null;case 22:case 23:return t.lanes=0,zd(e,t,a);case 24:ra(t,_e,e.memoizedState.cache)}return It(e,t,a)}function Yd(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!ps(e,a)&&(t.flags&128)===0)return Ke=!1,Bf(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,Ce&&(t.flags&1048576)!==0&&uc(t,$i,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Sr(n)?(e=Xa(n,e),t.tag=1,t=kd(null,t,n,e,a)):(t.tag=0,t=ss(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===ae){t.tag=11,t=Cd(null,t,n,e,a);break e}else if(l===A){t.tag=14,t=Ad(null,t,n,e,a);break e}}throw t=X(n)||n,Error(d(306,t,""))}}return t;case 0:return ss(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Xa(n,t.pendingProps),kd(e,t,n,l,a);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(d(387));n=t.pendingProps;var r=t.memoizedState;l=r.element,Ur(e,t),li(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ra(t,_e,n),n!==r.cache&&Mr(t,[_e],a,!0),ii(),n=s.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Md(e,t,n,a);break e}else if(n!==l){l=At(Error(d(424)),t),In(l),t=Md(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=Rt(e.firstChild),rt=t,Ce=!0,Ya=null,Ot=!0,a=md(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Jn(),n===l){t=It(e,t,a);break e}Ie(e,t,n,a)}t=t.child}return t;case 26:return bl(e,t),e===null?(a=Lu(t.type,null,t.pendingProps,null))?t.memoizedState=a:Ce||(a=t.type,e=t.pendingProps,n=Bl(se.current).createElement(a),n[tt]=t,n[ot]=e,Pe(n,a,e),We(n),t.stateNode=n):t.memoizedState=Lu(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return et(t),e===null&&Ce&&(n=t.stateNode=Ou(t.type,t.pendingProps,se.current),rt=t,Ot=!0,l=qe,wa(t.type)?(Ks=l,qe=Rt(n.firstChild)):qe=l),Ie(e,t,t.pendingProps.children,a),bl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((l=n=qe)&&(n=sm(n,t.type,t.pendingProps,Ot),n!==null?(t.stateNode=n,rt=t,qe=Rt(n.firstChild),Ot=!1,l=!0):l=!1),l||Oa(t)),et(t),l=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,n=r.children,Gs(l,r)?n=null:s!==null&&Gs(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=Vr(e,t,Af,null,null,a),zi._currentValue=l),bl(e,t),Ie(e,t,n,a),t.child;case 6:return e===null&&Ce&&((e=a=qe)&&(a=om(a,t.pendingProps,Ot),a!==null?(t.stateNode=a,rt=t,qe=null,e=!0):e=!1),e||Oa(t)),null;case 13:return Dd(e,t,a);case 4:return Ye(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=yn(t,null,n,a):Ie(e,t,n,a),t.child;case 11:return Cd(e,t,t.type,t.pendingProps,a);case 7:return Ie(e,t,t.pendingProps,a),t.child;case 8:return Ie(e,t,t.pendingProps.children,a),t.child;case 12:return Ie(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ra(t,t.type,n.value),Ie(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,qa(t),l=at(l),n=n(l),t.flags|=1,Ie(e,t,n,a),t.child;case 14:return Ad(e,t,t.type,t.pendingProps,a);case 15:return Nd(e,t,t.type,t.pendingProps,a);case 19:return Rd(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=yl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Gt(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return zd(e,t,a);case 24:return qa(t),n=at(_e),e===null?(l=Rr(),l===null&&(l=Re,r=Dr(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=a),l=r),t.memoizedState={parent:n,cache:l},Or(t),ra(t,_e,l)):((e.lanes&a)!==0&&(Ur(e,t),li(t,null,null,a),ii()),l=e.memoizedState,r=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ra(t,_e,n)):(n=r.cache,ra(t,_e,n),n!==l.cache&&Mr(t,[_e],a,!0))),Ie(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function $t(e){e.flags|=4}function Od(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Gu(t)){if(t=Tt.current,t!==null&&((je&4194048)===je?Ut!==null:(je&62914560)!==je&&(je&536870912)===0||t!==Ut))throw ai=Yr,yc;e.flags|=8192}}function vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?po():536870912,e.lanes|=t,Sn|=t)}function fi(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Rf(e,t,a){var n=t.pendingProps;switch(zr(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Kt(_e),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fn(t)?$t(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pc())),Ue(t),null;case 26:return a=t.memoizedState,e===null?($t(t),a!==null?(Ue(t),Od(t,a)):(Ue(t),t.flags&=-16777217)):a?a!==e.memoizedState?($t(t),Ue(t),Od(t,a)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==n&&$t(t),Ue(t),t.flags&=-16777217),null;case 27:Ge(t),a=se.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&$t(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Ue(t),null}e=j.current,Fn(t)?fc(t):(e=Ou(l,n,a),t.stateNode=e,$t(t))}return Ue(t),null;case 5:if(Ge(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&$t(t);else{if(!n){if(t.stateNode===null)throw Error(d(166));return Ue(t),null}if(e=j.current,Fn(t))fc(t);else{switch(l=Bl(se.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[tt]=t,e[ot]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(Pe(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&$t(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&$t(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(d(166));if(e=se.current,Fn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=rt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[tt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Tu(e.nodeValue,a)),e||Oa(t)}else e=Bl(e).createTextNode(n),e[tt]=t,t.stateNode=e}return Ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Fn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(d(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(d(317));l[tt]=t}else Jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),l=!1}else l=pc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Jt(t),t):(Jt(t),null)}if(Jt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var r=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),vl(t,t.updateQueue),Ue(t),null;case 4:return Te(),e===null&&Ls(t.stateNode.containerInfo),Ue(t),null;case 10:return Kt(t.type),Ue(t),null;case 19:if(G(Ze),l=t.memoizedState,l===null)return Ue(t),null;if(n=(t.flags&128)!==0,r=l.rendering,r===null)if(n)fi(l,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=gl(e),r!==null){for(t.flags|=128,fi(l,!1),e=r.updateQueue,t.updateQueue=e,vl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dc(a,e),a=a.sibling;return de(Ze,Ze.current&1|2),t.child}e=e.sibling}l.tail!==null&&P()>Sl&&(t.flags|=128,n=!0,fi(l,!1),t.lanes=4194304)}else{if(!n)if(e=gl(r),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,vl(t,e),fi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!Ce)return Ue(t),null}else 2*P()-l.renderingStartTime>Sl&&a!==536870912&&(t.flags|=128,n=!0,fi(l,!1),t.lanes=4194304);l.isBackwards?(r.sibling=t.child,t.child=r):(e=l.last,e!==null?e.sibling=r:t.child=r,l.last=r)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=P(),t.sibling=null,e=Ze.current,de(Ze,n?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return Jt(t),Xr(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),a=t.updateQueue,a!==null&&vl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&G(La),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Kt(_e),Ue(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Yf(e,t){switch(zr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kt(_e),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ge(t),null;case 13:if(Jt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Ze),null;case 4:return Te(),null;case 10:return Kt(t.type),null;case 22:case 23:return Jt(t),Xr(),e!==null&&G(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Kt(_e),null;case 25:return null;default:return null}}function Ud(e,t){switch(zr(t),t.tag){case 3:Kt(_e),Te();break;case 26:case 27:case 5:Ge(t);break;case 4:Te();break;case 13:Jt(t);break;case 19:G(Ze);break;case 10:Kt(t.type);break;case 22:case 23:Jt(t),Xr(),e!==null&&G(La);break;case 24:Kt(_e)}}function mi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var r=a.create,s=a.inst;n=r(),s.destroy=n}a=a.next}while(a!==l)}}catch(o){Be(t,t.return,o)}}function ma(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){var s=n.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,l=t;var c=a,p=o;try{p()}catch(N){Be(l,c,N)}}}n=n.next}while(n!==r)}}catch(N){Be(t,t.return,N)}}function qd(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ac(t,a)}catch(n){Be(e,e.return,n)}}}function Ld(e,t,a){a.props=Xa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Be(e,t,n)}}function pi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Be(e,t,l)}}function qt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Be(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Be(e,t,l)}else a.current=null}function Hd(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Be(e,e.return,l)}}function gs(e,t,a){try{var n=e.stateNode;am(n,e.type,a,t),n[ot]=t}catch(l){Be(e,e.return,l)}}function Xd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Dl));else if(n!==4&&(n===27&&wa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(xs(e,t,a),e=e.sibling;e!==null;)xs(e,t,a),e=e.sibling}function wl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,t,a),e=e.sibling;e!==null;)wl(e,t,a),e=e.sibling}function Qd(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Pe(t,n,a),t[tt]=e,t[ot]=a}catch(r){Be(e,e.return,r)}}var Pt=!1,Xe=!1,bs=!1,Vd=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Of(e,t){if(e=e.containerInfo,Qs=Ll,e=ec(e),hr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var s=0,o=-1,c=-1,p=0,N=0,k=e,h=null;t:for(;;){for(var x;k!==a||l!==0&&k.nodeType!==3||(o=s+l),k!==r||n!==0&&k.nodeType!==3||(c=s+n),k.nodeType===3&&(s+=k.nodeValue.length),(x=k.firstChild)!==null;)h=k,k=x;for(;;){if(k===e)break t;if(h===a&&++p===l&&(o=s),h===r&&++N===n&&(c=s),(x=k.nextSibling)!==null)break;k=h,h=k.parentNode}k=x}a=o===-1||c===-1?null:{start:o,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vs={focusedElem:e,selectionRange:a},Ll=!1,Fe=t;Fe!==null;)if(t=Fe,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Fe=e;else for(;Fe!==null;){switch(t=Fe,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,l=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var re=Xa(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(re,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Be(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zs(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,Fe=e;break}Fe=t.return}}function Gd(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:pa(e,a),n&4&&mi(5,a);break;case 1:if(pa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){Be(a,a.return,s)}else{var l=Xa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Be(a,a.return,s)}}n&64&&qd(a),n&512&&pi(a,a.return);break;case 3:if(pa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ac(e,t)}catch(s){Be(a,a.return,s)}}break;case 27:t===null&&n&4&&Qd(a);case 26:case 5:pa(e,a),t===null&&n&4&&Hd(a),n&512&&pi(a,a.return);break;case 12:pa(e,a);break;case 13:pa(e,a),n&4&&Wd(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_f.bind(null,a),cm(e,a))));break;case 22:if(n=a.memoizedState!==null||Pt,!n){t=t!==null&&t.memoizedState!==null||Xe,l=Pt;var r=Xe;Pt=n,(Xe=t)&&!r?ga(e,a,(a.subtreeFlags&8772)!==0):pa(e,a),Pt=l,Xe=r}break;case 30:break;default:pa(e,a)}}function _d(e){var t=e.alternate;t!==null&&(e.alternate=null,_d(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Il(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Oe=null,ut=!1;function ea(e,t,a){for(a=a.child;a!==null;)Zd(e,t,a),a=a.sibling}function Zd(e,t,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Yn,a)}catch{}switch(a.tag){case 26:Xe||qt(a,t),ea(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||qt(a,t);var n=Oe,l=ut;wa(a.type)&&(Oe=a.stateNode,ut=!1),ea(e,t,a),Si(a.stateNode),Oe=n,ut=l;break;case 5:Xe||qt(a,t);case 6:if(n=Oe,l=ut,Oe=null,ea(e,t,a),Oe=n,ut=l,Oe!==null)if(ut)try{(Oe.nodeType===9?Oe.body:Oe.nodeName==="HTML"?Oe.ownerDocument.body:Oe).removeChild(a.stateNode)}catch(r){Be(a,t,r)}else try{Oe.removeChild(a.stateNode)}catch(r){Be(a,t,r)}break;case 18:Oe!==null&&(ut?(e=Oe,Ru(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Mi(e)):Ru(Oe,a.stateNode));break;case 4:n=Oe,l=ut,Oe=a.stateNode.containerInfo,ut=!0,ea(e,t,a),Oe=n,ut=l;break;case 0:case 11:case 14:case 15:Xe||ma(2,a,t),Xe||ma(4,a,t),ea(e,t,a);break;case 1:Xe||(qt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Ld(a,t,n)),ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:Xe=(n=Xe)||a.memoizedState!==null,ea(e,t,a),Xe=n;break;default:ea(e,t,a)}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mi(e)}catch(a){Be(t,t.return,a)}}function Uf(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Vd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Vd),t;default:throw Error(d(435,e.tag))}}function ys(e,t){var a=Uf(e);t.forEach(function(n){var l=Zf.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function xt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],r=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(wa(o.type)){Oe=o.stateNode,ut=!1;break e}break;case 5:Oe=o.stateNode,ut=!1;break e;case 3:case 4:Oe=o.stateNode.containerInfo,ut=!0;break e}o=o.return}if(Oe===null)throw Error(d(160));Zd(r,s,l),Oe=null,ut=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}var Bt=null;function Kd(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:xt(t,e),bt(e),n&4&&(ma(3,e,e.return),mi(3,e),ma(5,e,e.return));break;case 1:xt(t,e),bt(e),n&512&&(Xe||a===null||qt(a,a.return)),n&64&&Pt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Bt;if(xt(t,e),bt(e),n&512&&(Xe||a===null||qt(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[qn]||r[tt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Pe(r,n,a),r[tt]=e,We(r),n=r;break e;case"link":var s=Qu("link","href",l).get(n+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}r=l.createElement(n),Pe(r,n,a),l.head.appendChild(r);break;case"meta":if(s=Qu("meta","content",l).get(n+(a.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}r=l.createElement(n),Pe(r,n,a),l.head.appendChild(r);break;default:throw Error(d(468,n))}r[tt]=e,We(r),n=r}e.stateNode=n}else Vu(l,e.type,e.stateNode);else e.stateNode=Xu(l,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Vu(l,e.type,e.stateNode):Xu(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&gs(e,e.memoizedProps,a.memoizedProps)}break;case 27:xt(t,e),bt(e),n&512&&(Xe||a===null||qt(a,a.return)),a!==null&&n&4&&gs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(xt(t,e),bt(e),n&512&&(Xe||a===null||qt(a,a.return)),e.flags&32){l=e.stateNode;try{en(l,"")}catch(x){Be(e,e.return,x)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,gs(e,l,a!==null?a.memoizedProps:l)),n&1024&&(bs=!0);break;case 6:if(xt(t,e),bt(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(x){Be(e,e.return,x)}}break;case 3:if(Ol=null,l=Bt,Bt=Rl(t.containerInfo),xt(t,e),Bt=l,bt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(x){Be(e,e.return,x)}bs&&(bs=!1,Fd(e));break;case 4:n=Bt,Bt=Rl(e.stateNode.containerInfo),xt(t,e),bt(e),Bt=n;break;case 12:xt(t,e),bt(e);break;case 13:xt(t,e),bt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(As=P()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ys(e,n)));break;case 22:l=e.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=Pt,N=Xe;if(Pt=p||l,Xe=N||c,xt(t,e),Xe=N,Pt=p,bt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||c||Pt||Xe||Qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(r=c.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=c.stateNode;var k=c.memoizedProps.style,h=k!=null&&k.hasOwnProperty("display")?k.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(x){Be(c,c.return,x)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(x){Be(c,c.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ys(e,a))));break;case 19:xt(t,e),bt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ys(e,n)));break;case 30:break;case 21:break;default:xt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Xd(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var l=a.stateNode,r=hs(e);wl(e,r,l);break;case 5:var s=a.stateNode;a.flags&32&&(en(s,""),a.flags&=-33);var o=hs(e);wl(e,o,s);break;case 3:case 4:var c=a.stateNode.containerInfo,p=hs(e);xs(e,p,c);break;default:throw Error(d(161))}}catch(N){Be(e,e.return,N)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fd(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function pa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Gd(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ma(4,t,t.return),Qa(t);break;case 1:qt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ld(t,t.return,a),Qa(t);break;case 27:Si(t.stateNode);case 26:case 5:qt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function ga(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:ga(l,r,a),mi(4,r);break;case 1:if(ga(l,r,a),n=r,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){Be(n,n.return,p)}if(n=r,l=n.updateQueue,l!==null){var o=n.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)Cc(c[l],o)}catch(p){Be(n,n.return,p)}}a&&s&64&&qd(r),pi(r,r.return);break;case 27:Qd(r);case 26:case 5:ga(l,r,a),a&&n===null&&s&4&&Hd(r),pi(r,r.return);break;case 12:ga(l,r,a);break;case 13:ga(l,r,a),a&&s&4&&Wd(l,r);break;case 22:r.memoizedState===null&&ga(l,r,a),pi(r,r.return);break;case 30:break;default:ga(l,r,a)}t=t.sibling}}function vs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Pn(a))}function ws(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pn(e))}function Lt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Jd(e,t,a,n),t=t.sibling}function Jd(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,a,n),l&2048&&mi(9,t);break;case 1:Lt(e,t,a,n);break;case 3:Lt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Pn(e)));break;case 12:if(l&2048){Lt(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){Be(t,t.return,c)}}else Lt(e,t,a,n);break;case 13:Lt(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Lt(e,t,a,n):gi(e,t):r._visibility&2?Lt(e,t,a,n):(r._visibility|=2,vn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&vs(s,t);break;case 24:Lt(e,t,a,n),l&2048&&ws(t.alternate,t);break;default:Lt(e,t,a,n)}}function vn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,s=t,o=a,c=n,p=s.flags;switch(s.tag){case 0:case 11:case 15:vn(r,s,o,c,l),mi(8,s);break;case 23:break;case 22:var N=s.stateNode;s.memoizedState!==null?N._visibility&2?vn(r,s,o,c,l):gi(r,s):(N._visibility|=2,vn(r,s,o,c,l)),l&&p&2048&&vs(s.alternate,s);break;case 24:vn(r,s,o,c,l),l&&p&2048&&ws(s.alternate,s);break;default:vn(r,s,o,c,l)}t=t.sibling}}function gi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:gi(a,n),l&2048&&vs(n.alternate,n);break;case 24:gi(a,n),l&2048&&ws(n.alternate,n);break;default:gi(a,n)}t=t.sibling}}var hi=8192;function wn(e){if(e.subtreeFlags&hi)for(e=e.child;e!==null;)Id(e),e=e.sibling}function Id(e){switch(e.tag){case 26:wn(e),e.flags&hi&&e.memoizedState!==null&&jm(Bt,e.memoizedState,e.memoizedProps);break;case 5:wn(e);break;case 3:case 4:var t=Bt;Bt=Rl(e.stateNode.containerInfo),wn(e),Bt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=hi,hi=16777216,wn(e),hi=t):wn(e));break;default:wn(e)}}function $d(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Fe=n,eu(n,e)}$d(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Pd(e),e=e.sibling}function Pd(e){switch(e.tag){case 0:case 11:case 15:xi(e),e.flags&2048&&ma(9,e,e.return);break;case 3:xi(e);break;case 12:xi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,jl(e)):xi(e);break;default:xi(e)}}function jl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Fe=n,eu(n,e)}$d(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ma(8,t,t.return),jl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,jl(t));break;default:jl(t)}e=e.sibling}}function eu(e,t){for(;Fe!==null;){var a=Fe;switch(a.tag){case 0:case 11:case 15:ma(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Pn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Fe=n;else e:for(a=e;Fe!==null;){n=Fe;var l=n.sibling,r=n.return;if(_d(n),n===a){Fe=null;break e}if(l!==null){l.return=r,Fe=l;break e}Fe=r}}}var qf={getCacheForType:function(e){var t=at(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Lf=typeof WeakMap=="function"?WeakMap:Map,ze=0,Re=null,be=null,je=0,Ee=0,yt=null,ha=!1,jn=!1,js=!1,ta=0,Le=0,xa=0,Va=0,Ss=0,kt=0,Sn=0,bi=null,ft=null,Cs=!1,As=0,Sl=1/0,Cl=null,ba=null,$e=0,ya=null,Cn=null,An=0,Ns=0,zs=null,tu=null,yi=0,Es=null;function vt(){if((ze&2)!==0&&je!==0)return je&-je;if(b.T!==null){var e=fn;return e!==0?e:Ys()}return xo()}function au(){kt===0&&(kt=(je&536870912)===0||Ce?mo():536870912);var e=Tt.current;return e!==null&&(e.flags|=32),kt}function wt(e,t,a){(e===Re&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)&&(Nn(e,0),va(e,je,kt,!1)),Un(e,a),((ze&2)===0||e!==Re)&&(e===Re&&((ze&2)===0&&(Va|=a),Le===4&&va(e,je,kt,!1)),Ht(e))}function nu(e,t,a){if((ze&6)!==0)throw Error(d(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||On(e,t),l=n?Qf(e,t):Ms(e,t,!0),r=n;do{if(l===0){jn&&!n&&va(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Hf(a)){l=Ms(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;l=bi;var c=o.current.memoizedState.isDehydrated;if(c&&(Nn(o,s).flags|=256),s=Ms(o,s,!1),s!==2){if(js&&!c){o.errorRecoveryDisabledLanes|=r,Va|=r,l=4;break e}r=ft,ft=l,r!==null&&(ft===null?ft=r:ft.push.apply(ft,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){Nn(e,0),va(e,t,0,!0);break}e:{switch(n=e,r=l,r){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:va(n,t,kt,!ha);break e;case 2:ft=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(l=As+300-P(),10<l)){if(va(n,t,kt,!ha),Yi(n,0,!0)!==0)break e;n.timeoutHandle=Du(iu.bind(null,n,a,ft,Cl,Cs,t,kt,Va,Sn,ha,r,2,-0,0),l);break e}iu(n,a,ft,Cl,Cs,t,kt,Va,Sn,ha,r,0,-0,0)}}break}while(!0);Ht(e)}function iu(e,t,a,n,l,r,s,o,c,p,N,k,h,x){if(e.timeoutHandle=-1,k=t.subtreeFlags,(k&8192||(k&16785408)===16785408)&&(Ni={stylesheets:null,count:0,unsuspend:wm},Id(t),k=Sm(),k!==null)){e.cancelPendingCommit=k(uu.bind(null,e,t,r,a,n,l,s,o,c,N,1,h,x)),va(e,r,s,!p);return}uu(e,t,r,a,n,l,s,o,c)}function Hf(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],r=l.getSnapshot;l=l.value;try{if(!gt(r(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,n){t&=~Ss,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var r=31-pt(l),s=1<<r;n[r]=-1,l&=~s}a!==0&&go(e,a,t)}function Al(){return(ze&6)===0?(vi(0),!1):!0}function Ts(){if(be!==null){if(Ee===0)var e=be.return;else e=be,Wt=Ua=null,Zr(e),bn=null,di=0,e=be;for(;e!==null;)Ud(e.alternate,e),e=e.return;be=null}}function Nn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,im(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ts(),Re=e,be=a=Gt(e.current,null),je=t,Ee=0,yt=null,ha=!1,jn=On(e,t),js=!1,Sn=kt=Ss=Va=xa=Le=0,ft=bi=null,Cs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-pt(n),r=1<<l;t|=e[l],n&=~r}return ta=t,Wi(),a}function lu(e,t){pe=null,b.H=fl,t===ti||t===al?(t=jc(),Ee=3):t===yc?(t=jc(),Ee=4):Ee=t===Sd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,yt=t,be===null&&(Le=1,xl(e,At(t,e.current)))}function ru(){var e=b.H;return b.H=fl,e===null?fl:e}function su(){var e=b.A;return b.A=qf,e}function ks(){Le=4,ha||(je&4194048)!==je&&Tt.current!==null||(jn=!0),(xa&134217727)===0&&(Va&134217727)===0||Re===null||va(Re,je,kt,!1)}function Ms(e,t,a){var n=ze;ze|=2;var l=ru(),r=su();(Re!==e||je!==t)&&(Cl=null,Nn(e,t)),t=!1;var s=Le;e:do try{if(Ee!==0&&be!==null){var o=be,c=yt;switch(Ee){case 8:Ts(),s=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var p=Ee;if(Ee=0,yt=null,zn(e,o,c,p),a&&jn){s=0;break e}break;default:p=Ee,Ee=0,yt=null,zn(e,o,c,p)}}Xf(),s=Le;break}catch(N){lu(e,N)}while(!0);return t&&e.shellSuspendCounter++,Wt=Ua=null,ze=n,b.H=l,b.A=r,be===null&&(Re=null,je=0,Wi()),s}function Xf(){for(;be!==null;)ou(be)}function Qf(e,t){var a=ze;ze|=2;var n=ru(),l=su();Re!==e||je!==t?(Cl=null,Sl=P()+500,Nn(e,t)):jn=On(e,t);e:do try{if(Ee!==0&&be!==null){t=be;var r=yt;t:switch(Ee){case 1:Ee=0,yt=null,zn(e,t,r,1);break;case 2:case 9:if(vc(r)){Ee=0,yt=null,cu(t);break}t=function(){Ee!==2&&Ee!==9||Re!==e||(Ee=7),Ht(e)},r.then(t,t);break e;case 3:Ee=7;break e;case 4:Ee=5;break e;case 7:vc(r)?(Ee=0,yt=null,cu(t)):(Ee=0,yt=null,zn(e,t,r,7));break;case 5:var s=null;switch(be.tag){case 26:s=be.memoizedState;case 5:case 27:var o=be;if(!s||Gu(s)){Ee=0,yt=null;var c=o.sibling;if(c!==null)be=c;else{var p=o.return;p!==null?(be=p,Nl(p)):be=null}break t}}Ee=0,yt=null,zn(e,t,r,5);break;case 6:Ee=0,yt=null,zn(e,t,r,6);break;case 8:Ts(),Le=6;break e;default:throw Error(d(462))}}Vf();break}catch(N){lu(e,N)}while(!0);return Wt=Ua=null,b.H=n,b.A=l,ze=a,be!==null?0:(Re=null,je=0,Wi(),Le)}function Vf(){for(;be!==null&&!U();)ou(be)}function ou(e){var t=Yd(e.alternate,e,ta);e.memoizedProps=e.pendingProps,t===null?Nl(e):be=t}function cu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Td(a,t,t.pendingProps,t.type,void 0,je);break;case 11:t=Td(a,t,t.pendingProps,t.type.render,t.ref,je);break;case 5:Zr(t);default:Ud(a,t),t=be=dc(t,ta),t=Yd(a,t,ta)}e.memoizedProps=e.pendingProps,t===null?Nl(e):be=t}function zn(e,t,a,n){Wt=Ua=null,Zr(t),bn=null,di=0;var l=t.return;try{if(Df(e,l,t,a,je)){Le=1,xl(e,At(a,e.current)),be=null;return}}catch(r){if(l!==null)throw be=l,r;Le=1,xl(e,At(a,e.current)),be=null;return}t.flags&32768?(Ce||n===1?e=!0:jn||(je&536870912)!==0?e=!1:(ha=e=!0,(n===2||n===9||n===3||n===6)&&(n=Tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),du(t,e)):Nl(t)}function Nl(e){var t=e;do{if((t.flags&32768)!==0){du(t,ha);return}e=t.return;var a=Rf(t.alternate,t,ta);if(a!==null){be=a;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Le===0&&(Le=5)}function du(e,t){do{var a=Yf(e.alternate,e);if(a!==null){a.flags&=32767,be=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=a}while(e!==null);Le=6,be=null}function uu(e,t,a,n,l,r,s,o,c){e.cancelPendingCommit=null;do zl();while($e!==0);if((ze&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(r=t.lanes|t.childLanes,r|=wr,v0(e,a,r,s,o,c),e===Re&&(be=Re=null,je=0),Cn=t,ya=e,An=a,Ns=r,zs=l,tu=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wf(lt,function(){return hu(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=b.T,b.T=null,l=T.p,T.p=2,s=ze,ze|=4;try{Of(e,t,a)}finally{ze=s,T.p=l,b.T=n}}$e=1,fu(),mu(),pu()}}function fu(){if($e===1){$e=0;var e=ya,t=Cn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=b.T,b.T=null;var n=T.p;T.p=2;var l=ze;ze|=4;try{Kd(t,e);var r=Vs,s=ec(e.containerInfo),o=r.focusedElem,c=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&Po(o.ownerDocument.documentElement,o)){if(c!==null&&hr(o)){var p=c.start,N=c.end;if(N===void 0&&(N=p),"selectionStart"in o)o.selectionStart=p,o.selectionEnd=Math.min(N,o.value.length);else{var k=o.ownerDocument||document,h=k&&k.defaultView||window;if(h.getSelection){var x=h.getSelection(),re=o.textContent.length,ne=Math.min(c.start,re),De=c.end===void 0?ne:Math.min(c.end,re);!x.extend&&ne>De&&(s=De,De=ne,ne=s);var f=$o(o,ne),u=$o(o,De);if(f&&u&&(x.rangeCount!==1||x.anchorNode!==f.node||x.anchorOffset!==f.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var m=k.createRange();m.setStart(f.node,f.offset),x.removeAllRanges(),ne>De?(x.addRange(m),x.extend(u.node,u.offset)):(m.setEnd(u.node,u.offset),x.addRange(m))}}}}for(k=[],x=o;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<k.length;o++){var z=k[o];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Ll=!!Qs,Vs=Qs=null}finally{ze=l,T.p=n,b.T=a}}e.current=t,$e=2}}function mu(){if($e===2){$e=0;var e=ya,t=Cn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=b.T,b.T=null;var n=T.p;T.p=2;var l=ze;ze|=4;try{Gd(e,t.alternate,t)}finally{ze=l,T.p=n,b.T=a}}$e=3}}function pu(){if($e===4||$e===3){$e=0,we();var e=ya,t=Cn,a=An,n=tu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,Cn=ya=null,gu(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ba=null),Fl(a),t=t.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Yn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=b.T,l=T.p,T.p=2,b.T=null;try{for(var r=e.onRecoverableError,s=0;s<n.length;s++){var o=n[s];r(o.value,{componentStack:o.stack})}}finally{b.T=t,T.p=l}}(An&3)!==0&&zl(),Ht(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Es?yi++:(yi=0,Es=e):yi=0,vi(0)}}function gu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Pn(t)))}function zl(e){return fu(),mu(),pu(),hu()}function hu(){if($e!==5)return!1;var e=ya,t=Ns;Ns=0;var a=Fl(An),n=b.T,l=T.p;try{T.p=32>a?32:a,b.T=null,a=zs,zs=null;var r=ya,s=An;if($e=0,Cn=ya=null,An=0,(ze&6)!==0)throw Error(d(331));var o=ze;if(ze|=4,Pd(r.current),Jd(r,r.current,s,a),ze=o,vi(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Yn,r)}catch{}return!0}finally{T.p=l,b.T=n,gu(e,t)}}function xu(e,t,a){t=At(a,t),t=rs(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(Un(e,2),Ht(e))}function Be(e,t,a){if(e.tag===3)xu(e,e,a);else for(;t!==null;){if(t.tag===3){xu(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ba===null||!ba.has(n))){e=At(a,e),a=wd(2),n=ca(t,a,2),n!==null&&(jd(a,n,t,e),Un(n,2),Ht(n));break}}t=t.return}}function Ds(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Lf;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(js=!0,l.add(a),e=Gf.bind(null,e,t,a),t.then(e,e))}function Gf(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Re===e&&(je&a)===a&&(Le===4||Le===3&&(je&62914560)===je&&300>P()-As?(ze&2)===0&&Nn(e,0):Ss|=a,Sn===je&&(Sn=0)),Ht(e)}function bu(e,t){t===0&&(t=po()),e=on(e,t),e!==null&&(Un(e,t),Ht(e))}function _f(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),bu(e,a)}function Zf(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(t),bu(e,a)}function Wf(e,t){return it(e,t)}var El=null,En=null,Bs=!1,Tl=!1,Rs=!1,Ga=0;function Ht(e){e!==En&&e.next===null&&(En===null?El=En=e:En=En.next=e),Tl=!0,Bs||(Bs=!0,Ff())}function vi(e,t){if(!Rs&&Tl){Rs=!0;do for(var a=!1,n=El;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var r=0;else{var s=n.suspendedLanes,o=n.pingedLanes;r=(1<<31-pt(42|e)+1)-1,r&=l&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,ju(n,r))}else r=je,r=Yi(n,n===Re?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||On(n,r)||(a=!0,ju(n,r));n=n.next}while(a);Rs=!1}}function Kf(){yu()}function yu(){Tl=Bs=!1;var e=0;Ga!==0&&(nm()&&(e=Ga),Ga=0);for(var t=P(),a=null,n=El;n!==null;){var l=n.next,r=vu(n,t);r===0?(n.next=null,a===null?El=l:a.next=l,l===null&&(En=a)):(a=n,(e!==0||(r&3)!==0)&&(Tl=!0)),n=l}vi(e)}function vu(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-pt(r),o=1<<s,c=l[s];c===-1?((o&a)===0||(o&n)!==0)&&(l[s]=y0(o,t)):c<=t&&(e.expiredLanes|=o),r&=~o}if(t=Re,a=je,a=Yi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ee===2||Ee===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xt(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||On(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xt(n),Fl(a)){case 2:case 8:a=st;break;case 32:a=lt;break;case 268435456:a=Yt;break;default:a=lt}return n=wu.bind(null,e),a=it(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xt(n),e.callbackPriority=2,e.callbackNode=null,2}function wu(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var n=je;return n=Yi(e,e===Re?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(nu(e,n,t),vu(e,P()),e.callbackNode!=null&&e.callbackNode===a?wu.bind(null,e):null)}function ju(e,t){if(zl())return null;nu(e,t,!0)}function Ff(){lm(function(){(ze&6)!==0?it(xe,Kf):yu()})}function Ys(){return Ga===0&&(Ga=mo()),Ga}function Su(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Hi(""+e)}function Cu(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Jf(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var r=Su((l[ot]||null).action),s=n.submitter;s&&(t=(t=s[ot]||null)?Su(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var o=new Gi("action","action",null,n,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Ga!==0){var c=s?Cu(l,s):new FormData(l);ts(a,{pending:!0,data:c,method:l.method,action:r},null,c)}}else typeof r=="function"&&(o.preventDefault(),c=s?Cu(l,s):new FormData(l),ts(a,{pending:!0,data:c,method:l.method,action:r},r,c))},currentTarget:l}]})}}for(var Os=0;Os<vr.length;Os++){var Us=vr[Os],If=Us.toLowerCase(),$f=Us[0].toUpperCase()+Us.slice(1);Dt(If,"on"+$f)}Dt(nc,"onAnimationEnd"),Dt(ic,"onAnimationIteration"),Dt(lc,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(gf,"onTransitionRun"),Dt(hf,"onTransitionStart"),Dt(xf,"onTransitionCancel"),Dt(rc,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wi));function Au(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],c=o.instance,p=o.currentTarget;if(o=o.listener,c!==r&&l.isPropagationStopped())break e;r=o,l.currentTarget=p;try{r(l)}catch(N){hl(N)}l.currentTarget=null,r=c}else for(s=0;s<n.length;s++){if(o=n[s],c=o.instance,p=o.currentTarget,o=o.listener,c!==r&&l.isPropagationStopped())break e;r=o,l.currentTarget=p;try{r(l)}catch(N){hl(N)}l.currentTarget=null,r=c}}}}function ye(e,t){var a=t[Jl];a===void 0&&(a=t[Jl]=new Set);var n=e+"__bubble";a.has(n)||(Nu(t,e,2,!1),a.add(n))}function qs(e,t,a){var n=0;t&&(n|=4),Nu(a,e,n,t)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Ls(e){if(!e[kl]){e[kl]=!0,yo.forEach(function(a){a!=="selectionchange"&&(Pf.has(a)||qs(a,!1,e),qs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kl]||(t[kl]=!0,qs("selectionchange",!1,t))}}function Nu(e,t,a,n){switch(Ju(t)){case 2:var l=Nm;break;case 8:l=zm;break;default:l=Ps}a=l.bind(null,t,a,e),l=void 0,!sr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function Hs(e,t,a,n,l){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===l)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;o!==null;){if(s=Ka(o),s===null)return;if(c=s.tag,c===5||c===6||c===26||c===27){n=r=s;continue e}o=o.parentNode}}n=n.return}Bo(function(){var p=r,N=lr(a),k=[];e:{var h=sc.get(e);if(h!==void 0){var x=Gi,re=e;switch(e){case"keypress":if(Qi(a)===0)break e;case"keydown":case"keyup":x=Z0;break;case"focusin":re="focus",x=ur;break;case"focusout":re="blur",x=ur;break;case"beforeblur":case"afterblur":x=ur;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=R0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=F0;break;case nc:case ic:case lc:x=U0;break;case rc:x=I0;break;case"scroll":case"scrollend":x=D0;break;case"wheel":x=P0;break;case"copy":case"cut":case"paste":x=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=qo;break;case"toggle":case"beforetoggle":x=tf}var ne=(t&4)!==0,De=!ne&&(e==="scroll"||e==="scrollend"),f=ne?h!==null?h+"Capture":null:h;ne=[];for(var u=p,m;u!==null;){var z=u;if(m=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||m===null||f===null||(z=Hn(u,f),z!=null&&ne.push(ji(u,z,m))),De)break;u=u.return}0<ne.length&&(h=new x(h,re,null,a,N),k.push({event:h,listeners:ne}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&a!==ir&&(re=a.relatedTarget||a.fromElement)&&(Ka(re)||re[Wa]))break e;if((x||h)&&(h=N.window===N?N:(h=N.ownerDocument)?h.defaultView||h.parentWindow:window,x?(re=a.relatedTarget||a.toElement,x=p,re=re?Ka(re):null,re!==null&&(De=C(re),ne=re.tag,re!==De||ne!==5&&ne!==27&&ne!==6)&&(re=null)):(x=null,re=p),x!==re)){if(ne=Oo,z="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(ne=qo,z="onPointerLeave",f="onPointerEnter",u="pointer"),De=x==null?h:Ln(x),m=re==null?h:Ln(re),h=new ne(z,u+"leave",x,a,N),h.target=De,h.relatedTarget=m,z=null,Ka(N)===p&&(ne=new ne(f,u+"enter",re,a,N),ne.target=m,ne.relatedTarget=De,z=ne),De=z,x&&re)t:{for(ne=x,f=re,u=0,m=ne;m;m=Tn(m))u++;for(m=0,z=f;z;z=Tn(z))m++;for(;0<u-m;)ne=Tn(ne),u--;for(;0<m-u;)f=Tn(f),m--;for(;u--;){if(ne===f||f!==null&&ne===f.alternate)break t;ne=Tn(ne),f=Tn(f)}ne=null}else ne=null;x!==null&&zu(k,h,x,ne,!1),re!==null&&De!==null&&zu(k,De,re,ne,!0)}}e:{if(h=p?Ln(p):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var Z=Zo;else if(Go(h))if(Wo)Z=ff;else{Z=df;var he=cf}else x=h.nodeName,!x||x.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?p&&nr(p.elementType)&&(Z=Zo):Z=uf;if(Z&&(Z=Z(e,p))){_o(k,Z,a,N);break e}he&&he(e,h,p),e==="focusout"&&p&&h.type==="number"&&p.memoizedProps.value!=null&&ar(h,"number",h.value)}switch(he=p?Ln(p):window,e){case"focusin":(Go(he)||he.contentEditable==="true")&&(ln=he,xr=p,Kn=null);break;case"focusout":Kn=xr=ln=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,tc(k,a,N);break;case"selectionchange":if(pf)break;case"keydown":case"keyup":tc(k,a,N)}var te;if(mr)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else nn?Qo(e,a)&&(ie="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(Lo&&a.locale!=="ko"&&(nn||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&nn&&(te=Ro()):(la=N,or="value"in la?la.value:la.textContent,nn=!0)),he=Ml(p,ie),0<he.length&&(ie=new Uo(ie,e,null,a,N),k.push({event:ie,listeners:he}),te?ie.data=te:(te=Vo(a),te!==null&&(ie.data=te)))),(te=nf?lf(e,a):rf(e,a))&&(ie=Ml(p,"onBeforeInput"),0<ie.length&&(he=new Uo("onBeforeInput","beforeinput",null,a,N),k.push({event:he,listeners:ie}),he.data=te)),Jf(k,e,p,a,N)}Au(k,t)})}function ji(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ml(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=Hn(e,a),l!=null&&n.unshift(ji(e,l,r)),l=Hn(e,t),l!=null&&n.push(ji(e,l,r))),e.tag===3)return n;e=e.return}return[]}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zu(e,t,a,n,l){for(var r=t._reactName,s=[];a!==null&&a!==n;){var o=a,c=o.alternate,p=o.stateNode;if(o=o.tag,c!==null&&c===n)break;o!==5&&o!==26&&o!==27||p===null||(c=p,l?(p=Hn(a,r),p!=null&&s.unshift(ji(a,p,c))):l||(p=Hn(a,r),p!=null&&s.push(ji(a,p,c)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Tu(e,t){return t=Eu(t),Eu(e)===t}function Dl(){}function Me(e,t,a,n,l,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||en(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&en(e,""+n);break;case"className":Ui(e,"class",n);break;case"tabIndex":Ui(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ui(e,a,n);break;case"style":Mo(e,n,r);break;case"data":if(t!=="object"){Ui(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Hi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Me(e,t,"name",l.name,l,null),Me(e,t,"formEncType",l.formEncType,l,null),Me(e,t,"formMethod",l.formMethod,l,null),Me(e,t,"formTarget",l.formTarget,l,null)):(Me(e,t,"encType",l.encType,l,null),Me(e,t,"method",l.method,l,null),Me(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Hi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Dl);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Hi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ye("beforetoggle",e),ye("toggle",e),Oi(e,"popover",n);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Oi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=k0.get(a)||a,Oi(e,a,n))}}function Xs(e,t,a,n,l,r){switch(a){case"style":Mo(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?en(e,n):(typeof n=="number"||typeof n=="bigint")&&en(e,""+n);break;case"onScroll":n!=null&&ye("scroll",e);break;case"onScrollEnd":n!=null&&ye("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Dl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),r=e[ot]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Oi(e,a,n)}}}function Pe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var n=!1,l=!1,r;for(r in a)if(a.hasOwnProperty(r)){var s=a[r];if(s!=null)switch(r){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Me(e,t,r,s,a,null)}}l&&Me(e,t,"srcSet",a.srcSet,a,null),n&&Me(e,t,"src",a.src,a,null);return;case"input":ye("invalid",e);var o=r=s=l=null,c=null,p=null;for(n in a)if(a.hasOwnProperty(n)){var N=a[n];if(N!=null)switch(n){case"name":l=N;break;case"type":s=N;break;case"checked":c=N;break;case"defaultChecked":p=N;break;case"value":r=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(d(137,t));break;default:Me(e,t,n,N,a,null)}}zo(e,r,o,c,p,s,l,!1),qi(e);return;case"select":ye("invalid",e),n=s=r=null;for(l in a)if(a.hasOwnProperty(l)&&(o=a[l],o!=null))switch(l){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":n=o;default:Me(e,t,l,o,a,null)}t=r,a=s,e.multiple=!!n,t!=null?Pa(e,!!n,t,!1):a!=null&&Pa(e,!!n,a,!0);return;case"textarea":ye("invalid",e),r=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":n=o;break;case"defaultValue":l=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:Me(e,t,s,o,a,null)}To(e,n,l,r),qi(e);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(n=a[c],n!=null))switch(c){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Me(e,t,c,n,a,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(n=0;n<wi.length;n++)ye(wi[n],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Me(e,t,p,n,a,null)}return;default:if(nr(t)){for(N in a)a.hasOwnProperty(N)&&(n=a[N],n!==void 0&&Xs(e,t,N,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&Me(e,t,o,n,a,null))}function am(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,o=null,c=null,p=null,N=null;for(x in a){var k=a[x];if(a.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=k;default:n.hasOwnProperty(x)||Me(e,t,x,null,n,k)}}for(var h in n){var x=n[h];if(k=a[h],n.hasOwnProperty(h)&&(x!=null||k!=null))switch(h){case"type":r=x;break;case"name":l=x;break;case"checked":p=x;break;case"defaultChecked":N=x;break;case"value":s=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(137,t));break;default:x!==k&&Me(e,t,h,x,n,k)}}tr(e,s,o,c,p,N,r,l);return;case"select":x=s=o=h=null;for(r in a)if(c=a[r],a.hasOwnProperty(r)&&c!=null)switch(r){case"value":break;case"multiple":x=c;default:n.hasOwnProperty(r)||Me(e,t,r,null,n,c)}for(l in n)if(r=n[l],c=a[l],n.hasOwnProperty(l)&&(r!=null||c!=null))switch(l){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==c&&Me(e,t,l,r,n,c)}t=o,a=s,n=x,h!=null?Pa(e,!!a,h,!1):!!n!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":x=h=null;for(o in a)if(l=a[o],a.hasOwnProperty(o)&&l!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Me(e,t,o,null,n,l)}for(s in n)if(l=n[s],r=a[s],n.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":h=l;break;case"defaultValue":x=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(d(91));break;default:l!==r&&Me(e,t,s,l,n,r)}Eo(e,h,x);return;case"option":for(var re in a)if(h=a[re],a.hasOwnProperty(re)&&h!=null&&!n.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Me(e,t,re,null,n,h)}for(c in n)if(h=n[c],x=a[c],n.hasOwnProperty(c)&&h!==x&&(h!=null||x!=null))switch(c){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:Me(e,t,c,h,n,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)h=a[ne],a.hasOwnProperty(ne)&&h!=null&&!n.hasOwnProperty(ne)&&Me(e,t,ne,null,n,h);for(p in n)if(h=n[p],x=a[p],n.hasOwnProperty(p)&&h!==x&&(h!=null||x!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,t));break;default:Me(e,t,p,h,n,x)}return;default:if(nr(t)){for(var De in a)h=a[De],a.hasOwnProperty(De)&&h!==void 0&&!n.hasOwnProperty(De)&&Xs(e,t,De,void 0,n,h);for(N in n)h=n[N],x=a[N],!n.hasOwnProperty(N)||h===x||h===void 0&&x===void 0||Xs(e,t,N,h,n,x);return}}for(var f in a)h=a[f],a.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&Me(e,t,f,null,n,h);for(k in n)h=n[k],x=a[k],!n.hasOwnProperty(k)||h===x||h==null&&x==null||Me(e,t,k,h,n,x)}var Qs=null,Vs=null;function Bl(e){return e.nodeType===9?e:e.ownerDocument}function ku(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mu(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _s=null;function nm(){var e=window.event;return e&&e.type==="popstate"?e===_s?!1:(_s=e,!0):(_s=null,!1)}var Du=typeof setTimeout=="function"?setTimeout:void 0,im=typeof clearTimeout=="function"?clearTimeout:void 0,Bu=typeof Promise=="function"?Promise:void 0,lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Bu<"u"?function(e){return Bu.resolve(null).then(e).catch(rm)}:Du;function rm(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Ru(e,t){var a=t,n=0,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(0<n&&8>n){a=n;var s=e.ownerDocument;if(a&1&&Si(s.documentElement),a&2&&Si(s.body),a&4)for(a=s.head,Si(a),s=a.firstChild;s;){var o=s.nextSibling,c=s.nodeName;s[qn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=o}}if(l===0){e.removeChild(r),Mi(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=r}while(a);Mi(t)}function Zs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zs(a),Il(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sm(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Rt(e.nextSibling),e===null)break}return null}function om(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rt(e.nextSibling),e===null))return null;return e}function Ws(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function cm(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Ks=null;function Yu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Ou(e,t,a){switch(t=Bl(a),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Si(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Il(e)}var Mt=new Map,Uu=new Set;function Rl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=T.d;T.d={f:dm,r:um,D:fm,C:mm,L:pm,m:gm,X:xm,S:hm,M:bm};function dm(){var e=aa.f(),t=Al();return e||t}function um(e){var t=Fa(e);t!==null&&t.tag===5&&t.type==="form"?nd(t):aa.r(e)}var kn=typeof document>"u"?null:document;function qu(e,t,a){var n=kn;if(n&&typeof t=="string"&&t){var l=Ct(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Uu.has(l)||(Uu.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Pe(t,"link",e),We(t),n.head.appendChild(t)))}}function fm(e){aa.D(e),qu("dns-prefetch",e,null)}function mm(e,t){aa.C(e,t),qu("preconnect",e,t)}function pm(e,t,a){aa.L(e,t,a);var n=kn;if(n&&e&&t){var l='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ct(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ct(a.imageSizes)+'"]')):l+='[href="'+Ct(e)+'"]';var r=l;switch(t){case"style":r=Mn(e);break;case"script":r=Dn(e)}Mt.has(r)||(e=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Mt.set(r,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(Ci(r))||t==="script"&&n.querySelector(Ai(r))||(t=n.createElement("link"),Pe(t,"link",e),We(t),n.head.appendChild(t)))}}function gm(e,t){aa.m(e,t);var a=kn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ct(n)+'"][href="'+Ct(e)+'"]',r=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Dn(e)}if(!Mt.has(r)&&(e=B({rel:"modulepreload",href:e},t),Mt.set(r,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ai(r)))return}n=a.createElement("link"),Pe(n,"link",e),We(n),a.head.appendChild(n)}}}function hm(e,t,a){aa.S(e,t,a);var n=kn;if(n&&e){var l=Ja(n).hoistableStyles,r=Mn(e);t=t||"default";var s=l.get(r);if(!s){var o={loading:0,preload:null};if(s=n.querySelector(Ci(r)))o.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Mt.get(r))&&Fs(e,a);var c=s=n.createElement("link");We(c),Pe(c,"link",e),c._p=new Promise(function(p,N){c.onload=p,c.onerror=N}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Yl(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:o},l.set(r,s)}}}function xm(e,t){aa.X(e,t);var a=kn;if(a&&e){var n=Ja(a).hoistableScripts,l=Dn(e),r=n.get(l);r||(r=a.querySelector(Ai(l)),r||(e=B({src:e,async:!0},t),(t=Mt.get(l))&&Js(e,t),r=a.createElement("script"),We(r),Pe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function bm(e,t){aa.M(e,t);var a=kn;if(a&&e){var n=Ja(a).hoistableScripts,l=Dn(e),r=n.get(l);r||(r=a.querySelector(Ai(l)),r||(e=B({src:e,async:!0,type:"module"},t),(t=Mt.get(l))&&Js(e,t),r=a.createElement("script"),We(r),Pe(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(l,r))}}function Lu(e,t,a,n){var l=(l=se.current)?Rl(l):null;if(!l)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Mn(a.href),a=Ja(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mn(a.href);var r=Ja(l).hoistableStyles,s=r.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=l.querySelector(Ci(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(e,a),r||ym(l,e,a,s.state))),t&&n===null)throw Error(d(528,""));return s}if(t&&n!==null)throw Error(d(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dn(a),a=Ja(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Mn(e){return'href="'+Ct(e)+'"'}function Ci(e){return'link[rel="stylesheet"]['+e+"]"}function Hu(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function ym(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Pe(t,"link",a),We(t),e.head.appendChild(t))}function Dn(e){return'[src="'+Ct(e)+'"]'}function Ai(e){return"script[async]"+e}function Xu(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ct(a.href)+'"]');if(n)return t.instance=n,We(n),n;var l=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),We(n),Pe(n,"style",l),Yl(n,a.precedence,e),t.instance=n;case"stylesheet":l=Mn(a.href);var r=e.querySelector(Ci(l));if(r)return t.state.loading|=4,t.instance=r,We(r),r;n=Hu(a),(l=Mt.get(l))&&Fs(n,l),r=(e.ownerDocument||e).createElement("link"),We(r);var s=r;return s._p=new Promise(function(o,c){s.onload=o,s.onerror=c}),Pe(r,"link",n),t.state.loading|=4,Yl(r,a.precedence,e),t.instance=r;case"script":return r=Dn(a.src),(l=e.querySelector(Ai(r)))?(t.instance=l,We(l),l):(n=a,(l=Mt.get(r))&&(n=B({},a),Js(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),We(l),Pe(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Yl(n,a.precedence,e));return t.instance}function Yl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,r=l,s=0;s<n.length;s++){var o=n[s];if(o.dataset.precedence===t)r=o;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ol=null;function Qu(e,t,a){if(Ol===null){var n=new Map,l=Ol=new Map;l.set(a,n)}else l=Ol,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var r=a[l];if(!(r[qn]||r[tt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var o=n.get(s);o?o.push(r):n.set(s,[r])}}return n}function Vu(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function vm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Gu(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ni=null;function wm(){}function jm(e,t,a){if(Ni===null)throw Error(d(475));var n=Ni;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=Mn(a.href),r=e.querySelector(Ci(l));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ul.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=r,We(r);return}r=e.ownerDocument||e,a=Hu(a),(l=Mt.get(l))&&Fs(a,l),r=r.createElement("link"),We(r);var s=r;s._p=new Promise(function(o,c){s.onload=o,s.onerror=c}),Pe(r,"link",a),t.instance=r}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ul.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function Sm(){if(Ni===null)throw Error(d(475));var e=Ni;return e.stylesheets&&e.count===0&&Is(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Is(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ul(){if(this.count--,this.count===0){if(this.stylesheets)Is(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function Is(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,t.forEach(Cm,e),ql=null,Ul.call(e))}function Cm(e,t){if(!(t.state.loading&4)){var a=ql.get(e);if(a)var n=a.get(null);else{a=new Map,ql.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),r=a.get(s)||n,r===n&&a.set(null,l),a.set(s,l),this.count++,n=Ul.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var zi={$$typeof:J,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function Am(e,t,a,n,l,r,s,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.hiddenUpdates=Wl(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function _u(e,t,a,n,l,r,s,o,c,p,N,k){return e=new Am(e,t,a,s,o,c,p,k),t=1,r===!0&&(t|=24),r=ht(3,null,null,t),e.current=r,r.stateNode=e,t=Dr(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},Or(r),e}function Zu(e){return e?(e=cn,e):cn}function Wu(e,t,a,n,l,r){l=Zu(l),n.context===null?n.context=l:n.pendingContext=l,n=oa(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=ca(e,n,t),a!==null&&(wt(a,e,t),ni(a,e,t))}function Ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function $s(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}function Fu(e){if(e.tag===13){var t=on(e,67108864);t!==null&&wt(t,e,67108864),$s(e,67108864)}}var Ll=!0;function Nm(e,t,a,n){var l=b.T;b.T=null;var r=T.p;try{T.p=2,Ps(e,t,a,n)}finally{T.p=r,b.T=l}}function zm(e,t,a,n){var l=b.T;b.T=null;var r=T.p;try{T.p=8,Ps(e,t,a,n)}finally{T.p=r,b.T=l}}function Ps(e,t,a,n){if(Ll){var l=eo(n);if(l===null)Hs(e,t,n,Hl,a),Iu(e,n);else if(Tm(l,e,t,a,n))n.stopPropagation();else if(Iu(e,n),t&4&&-1<Em.indexOf(e)){for(;l!==null;){var r=Fa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=za(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var c=1<<31-pt(s);o.entanglements[1]|=c,s&=~c}Ht(r),(ze&6)===0&&(Sl=P()+500,vi(0))}}break;case 13:o=on(r,2),o!==null&&wt(o,r,2),Al(),$s(r,2)}if(r=eo(n),r===null&&Hs(e,t,n,Hl,a),r===l)break;l=r}l!==null&&n.stopPropagation()}else Hs(e,t,n,null,a)}}function eo(e){return e=lr(e),to(e)}var Hl=null;function to(e){if(Hl=null,e=Ka(e),e!==null){var t=C(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hl=e,null}function Ju(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case xe:return 2;case st:return 8;case lt:case jt:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var ao=!1,ja=null,Sa=null,Ca=null,Ei=new Map,Ti=new Map,Aa=[],Em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Iu(e,t){switch(e){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ti.delete(t.pointerId)}}function ki(e,t,a,n,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[l]},t!==null&&(t=Fa(t),t!==null&&Fu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Tm(e,t,a,n,l){switch(t){case"focusin":return ja=ki(ja,e,t,a,n,l),!0;case"dragenter":return Sa=ki(Sa,e,t,a,n,l),!0;case"mouseover":return Ca=ki(Ca,e,t,a,n,l),!0;case"pointerover":var r=l.pointerId;return Ei.set(r,ki(Ei.get(r)||null,e,t,a,n,l)),!0;case"gotpointercapture":return r=l.pointerId,Ti.set(r,ki(Ti.get(r)||null,e,t,a,n,l)),!0}return!1}function $u(e){var t=Ka(e.target);if(t!==null){var a=C(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,w0(e.priority,function(){if(a.tag===13){var n=vt();n=Kl(n);var l=on(a,n);l!==null&&wt(l,a,n),$s(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eo(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);ir=n,a.target.dispatchEvent(n),ir=null}else return t=Fa(a),t!==null&&Fu(t),e.blockedOn=a,!1;t.shift()}return!0}function Pu(e,t,a){Xl(e)&&a.delete(t)}function km(){ao=!1,ja!==null&&Xl(ja)&&(ja=null),Sa!==null&&Xl(Sa)&&(Sa=null),Ca!==null&&Xl(Ca)&&(Ca=null),Ei.forEach(Pu),Ti.forEach(Pu)}function Ql(e,t){e.blockedOn===t&&(e.blockedOn=null,ao||(ao=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,km)))}var Vl=null;function e0(e){Vl!==e&&(Vl=e,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(to(n||a)===null)continue;break}var r=Fa(a);r!==null&&(e.splice(t,3),t-=3,ts(r,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Mi(e){function t(c){return Ql(c,e)}ja!==null&&Ql(ja,e),Sa!==null&&Ql(Sa,e),Ca!==null&&Ql(Ca,e),Ei.forEach(t),Ti.forEach(t);for(var a=0;a<Aa.length;a++){var n=Aa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)$u(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],r=a[n+1],s=l[ot]||null;if(typeof r=="function")s||e0(a);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[ot]||null)o=s.formAction;else if(to(l)!==null)continue}else o=s.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),e0(a)}}}function no(e){this._internalRoot=e}Gl.prototype.render=no.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var a=t.current,n=vt();Wu(a,n,e,t,null,null)},Gl.prototype.unmount=no.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wu(e.current,2,null,e,null,null),Al(),t[Wa]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=xo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Aa.length&&t!==0&&t<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&$u(e)}};var t0=L.version;if(t0!=="19.1.0")throw Error(d(527,t0,"19.1.0"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=H(t),e=e!==null?D(e):null,e=e===null?null:e.stateNode,e};var Mm={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_l.isDisabled&&_l.supportsFiber)try{Yn=_l.inject(Mm),mt=_l}catch{}}return Di.createRoot=function(e,t){if(!R(e))throw Error(d(299));var a=!1,n="",l=xd,r=bd,s=yd,o=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=_u(e,1,!1,null,null,a,n,l,r,s,o,null),e[Wa]=t.current,Ls(e),new no(t)},Di.hydrateRoot=function(e,t,a){if(!R(e))throw Error(d(299));var n=!1,l="",r=xd,s=bd,o=yd,c=null,p=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(c=a.unstable_transitionCallbacks),a.formState!==void 0&&(p=a.formState)),t=_u(e,1,!0,t,a??null,n,l,r,s,o,c,p),t.context=Zu(null),a=t.current,n=vt(),n=Kl(n),l=oa(n),l.callback=null,ca(a,l,n),a=n,t.current.lanes=a,Un(t,a),Ht(t),e[Wa]=t.current,Ls(e),new Gl(t)},Di.version="19.1.0",Di}var l0;function Jm(){if(l0)return io.exports;l0=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(L){console.error(L)}}return y(),io.exports=Fm(),io.exports}var Im=Jm();const $m=Ym(Im),Pm=({scrolled:y=!1})=>{const[L,Q]=v.useState(!1),[d,R]=v.useState(!1),[C,E]=v.useState("/pavan-techno-constructions/images/logo.png"),S=Om(),H=["/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/logo.png","/pavan-techno-constructions/assets/logo.png"];v.useEffect(()=>(document.body.classList.toggle("no-scroll",L),()=>document.body.classList.remove("no-scroll")),[L]),v.useEffect(()=>{Q(!1)},[S]);const D=()=>Q(!L),B=()=>Q(!1),Y=()=>{const O=H.indexOf(C)+1;console.log(`Logo failed to load from: ${C}`),O<H.length?(console.log(`Trying next path: ${H[O]}`),E(H[O])):(console.log("All logo paths failed, showing fallback"),R(!0))};return i.jsxs(i.Fragment,{children:[i.jsx("style",{jsx:!0,children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.95) 50%, 
            rgba(241, 245, 249, 0.95) 100%);
          backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-bottom: 1px solid rgba(59, 130, 246, 0.15);
          background-clip: padding-box;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .navbar::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, 
            rgba(59, 130, 246, 0.05) 0%, 
            rgba(37, 99, 235, 0.05) 50%, 
            rgba(29, 78, 216, 0.05) 100%);
          z-index: -1;
        }

        .navbar.scrolled {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(248, 250, 252, 0.98) 50%, 
            rgba(241, 245, 249, 0.98) 100%);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          border-bottom: 1px solid rgba(59, 130, 246, 0.2);
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
          position: relative;
        }

        .logo-section {
          position: relative;
          z-index: 10;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          position: relative;
          padding: 0.5rem 1rem;
          background: white;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          border: none;
          overflow: visible;
        }

        .logo-container:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        /* Remove the decorative elements for a cleaner look */
        .logo-container::before,
        .logo-container::after {
          display: none;
        }

        .logo-hex {
          width: 45px;
          height: 45px;
          position: relative;
          margin-right: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        /* Remove the hexagon shape for a more professional circular logo */
        .logo-hex::before {
          display: none;
        }

        .logo-image {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .logo-container:hover .logo-image {
          transform: scale(1.05);
        }

        .logo-fallback {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #005dc1 0%, #003b7a 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.5px;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          font-family: 'Poppins', sans-serif;
        }

        .company-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1e293b;
          line-height: 1.1;
          letter-spacing: 0.2px;
          margin-bottom: 2px;
        }

        .company-tagline {
          font-size: 0.6rem;
          color: #005dc1;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: rgba(255, 255, 255, 0.6);
          padding: 0.4rem;
          border-radius: 20px;
          border: 1px solid rgba(59, 130, 246, 0.15);
          backdrop-filter: blur(15px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .nav-item a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: #334155;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.85rem;
          padding: 0.6rem 1rem;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          z-index: 2;
          letter-spacing: 0.3px;
        }

        .nav-item.active a {
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-item.active::before {
          transform: scale(1) !important;
          opacity: 1 !important;
        }

        /* Unique hover effects for each nav item */
        .nav-item:nth-child(1)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 12px;
          transform: scale(0) rotate(180deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(2)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-radius: 12px;
          transform: translateY(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(3)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          border-radius: 12px;
          transform: translateX(-100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(4)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border-radius: 12px;
          transform: scale(0);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(5)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ec4899 0%, #be185d 100%);
          border-radius: 12px;
          transform: rotateY(90deg);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        .nav-item:nth-child(6)::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          border-radius: 12px;
          transform: translateX(100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1;
        }

        /* Hover states */
        .nav-item:nth-child(1):hover::before {
          transform: scale(1) rotate(0deg);
        }

        .nav-item:nth-child(2):hover::before {
          transform: translateY(0%);
        }

        .nav-item:nth-child(3):hover::before {
          transform: translateX(0%);
        }

        .nav-item:nth-child(4):hover::before {
          transform: scale(1);
        }

        .nav-item:nth-child(5):hover::before {
          transform: rotateY(0deg);
        }

        .nav-item:nth-child(6):hover::before {
          transform: translateX(0%);
        }

        .nav-item:hover a {
          color: white;
          transform: translateY(-2px) scale(1.02);
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .nav-item svg {
          font-size: 0.9rem;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .nav-item:hover svg {
          transform: scale(1.15) rotate(5deg);
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        /* Specific icon animations */
        .nav-item:nth-child(1):hover svg {
          transform: scale(1.2) rotate(-10deg);
        }

        .nav-item:nth-child(2):hover svg {
          transform: scale(1.2) rotate(360deg);
        }

        .nav-item:nth-child(3):hover svg {
          transform: scale(1.2) rotate(15deg);
        }

        .nav-item:nth-child(4):hover svg {
          transform: scale(1.2) rotate(-15deg);
        }

        .nav-item:nth-child(5):hover svg {
          transform: scale(1.2) rotate(10deg);
        }

        .nav-item:nth-child(6):hover svg {
          transform: scale(1.2) rotate(-5deg);
        }

        .hamburger {
          display: none;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 12px;
          padding: 0.6rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .hamburger:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.15) 100%);
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2);
        }

        .hamburger svg {
          font-size: 1.3rem;
          color: #334155;
          transition: all 0.3s ease;
        }

        @media (min-width: 820px) and (max-width: 912px) {
          .container {
            padding: 0 1.5rem;
            max-width: 100%;
          }
          
          .nav-container {
            height: 85px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          
          .logo-container {
            padding: 0.6rem 1rem;
            border-radius: 16px;
            flex-shrink: 0;
          }
          
          .logo-hex {
            width: 40px;
            height: 40px;
            margin-right: 0.8rem;
          }
          
          .logo-image,
          .logo-fallback {
            width: 28px;
            height: 28px;
          }
          
          .company-name {
            font-size: 1rem;
            font-weight: 800;
            line-height: 1.1;
          }
          
          .company-tagline {
            font-size: 0.65rem;
            margin-top: 2px;
          }
          
          .nav-links {
            padding: 0.4rem;
            gap: 0.2rem;
            border-radius: 16px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
          }
          
          .nav-item a {
            padding: 0.5rem 0.8rem;
            font-size: 0.8rem;
            font-weight: 500;
            white-space: nowrap;
          }
          
          .nav-item svg {
            font-size: 0.8rem;
          }
          
          .hamburger {
            padding: 0.6rem;
            border-radius: 12px;
            flex-shrink: 0;
          }
          
          .hamburger svg {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 1rem;
          }

          .nav-container {
            height: 60px;
          }

          .hamburger {
            display: block;
          }

          .logo-container {
            padding: 0.4rem 0.8rem;
          }

          .company-name {
            font-size: 0.9rem;
          }

          .company-tagline {
            font-size: 0.55rem;
          }

          .logo-hex {
            width: 35px;
            height: 35px;
            margin-right: 0.6rem;
          }

          .logo-image,
          .logo-fallback {
            width: 25px;
            height: 25px;
          }

          .nav-links {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            background: linear-gradient(135deg, 
              rgba(255, 255, 255, 0.98) 0%, 
              rgba(248, 250, 252, 0.98) 100%);
            backdrop-filter: blur(20px);
            border: none;
            border-radius: 0;
            transform: translateY(-100vh);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            min-height: 100vh;
            justify-content: center;
            align-items: center;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-item a {
            width: 250px;
            justify-content: center;
            padding: 1.1rem;
            font-size: 1rem;
            border: 1px solid rgba(59, 130, 246, 0.2);
            background: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.5rem;
          }

          .nav-item:hover a {
            transform: translateY(-3px) scale(1.05);
          }
        }

        .no-scroll {
          overflow: hidden;
        }

        /* Additional professional touches */
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
          z-index: 3;
        }

        .nav-item:hover::after {
          width: 80%;
        }

        /* Glassmorphism enhancement */
        .navbar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }
      `}),i.jsx("header",{className:`navbar ${y?"scrolled":""}`,children:i.jsx("div",{className:"container",children:i.jsxs("nav",{className:"nav-container",children:[i.jsx("div",{className:"logo-section",children:i.jsxs(Bn,{to:"/",className:"logo-container",children:[i.jsx("div",{className:"logo-hex",children:d?i.jsx("div",{className:"logo-fallback",children:"PTC"}):i.jsx("img",{src:C,alt:"Pavan Techno Constructions",className:"logo-image",onError:Y,onLoad:()=>console.log(`Logo loaded successfully from: ${C}`)})}),i.jsxs("div",{className:"company-info",children:[i.jsx("div",{className:"company-name",children:"PAVAN TECHNO CONSTRUCTIONS"}),i.jsx("div",{className:"company-tagline",children:"Engineering Excellence"})]})]})}),i.jsxs("div",{className:`nav-links ${L?"active":""}`,children:[i.jsx("div",{className:`nav-item ${S.pathname==="/"?"active":""}`,children:i.jsxs(Bn,{to:"/",onClick:B,children:[i.jsx(Rn,{icon:Hm})," Home"]})}),i.jsx("div",{className:`nav-item ${S.pathname==="/services"?"active":""}`,children:i.jsxs(Bn,{to:"/services",onClick:B,children:[i.jsx(Rn,{icon:Xm})," Services"]})}),i.jsx("div",{className:`nav-item ${S.pathname==="/pricing"?"active":""}`,children:i.jsxs(Bn,{to:"/pricing",onClick:B,children:[i.jsx(Rn,{icon:Qm})," Pricing"]})}),i.jsx("div",{className:`nav-item ${S.pathname==="/gallery"?"active":""}`,children:i.jsxs(Bn,{to:"/gallery",onClick:B,children:[i.jsx(Rn,{icon:Vm})," Gallery"]})}),i.jsx("div",{className:`nav-item ${S.pathname==="/contact"?"active":""}`,children:i.jsxs(Bn,{to:"/contact",onClick:B,children:[i.jsx(Rn,{icon:Gm})," Contact"]})})]}),i.jsx("button",{className:"hamburger",onClick:D,children:i.jsx(Rn,{icon:L?_m:Zm})})]})})})]})},r0=({openPopup:y})=>{const[L,Q]=v.useState({x:0,y:0}),[d,R]=v.useState(!1),[C,E]=v.useState(!1),[S,H]=v.useState(0),[D,B]=v.useState(!1),[Y,_]=v.useState(!1),[O,I]=v.useState(!1),oe=v.useRef(null),q=v.useRef([]),ee=v.useRef(null),g=v.useRef(null),J=v.useRef(null),ae=v.useRef(null),ge=v.useRef(null),[ve,A]=v.useState("./images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg");v.useEffect(()=>{const j=setTimeout(()=>{I(!0)},3e3);return()=>clearTimeout(j)},[]);const W=j=>{if(oe.current&&O){const F=oe.current.getBoundingClientRect(),se=(j.clientX-F.left)/F.width-.5,Ae=(j.clientY-F.top)/F.height-.5;Q({x:se,y:Ae}),document.querySelectorAll(".company-title, .company-title *, .animated-word, .animated-word *, .title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, .word-golden-2, .golden-blue-title, .golden-blue-title *").forEach(Te=>{Te&&(Te.style.transform="none",Te.style.transition="none",Te.style.perspective="none",Te.style.transformStyle="flat")})}},w=[{src:"52886-471089084_tiny.mp4",title:"Our Construction Process",paths:["/pavan-techno-constructions/images/52886-471089084_tiny.mp4","/pavan-techno-constructions/assets/52886-471089084_tiny.mp4","/pavan-techno-constructions/videos/52886-471089084_tiny.mp4"]},{src:"42926-434300944_tiny.mp4",title:"Project Showcase",paths:["/pavan-techno-constructions/images/42926-434300944_tiny.mp4","/pavan-techno-constructions/assets/42926-434300944_tiny.mp4","/pavan-techno-constructions/videos/42926-434300944_tiny.mp4"]}],ce=["/pavan-techno-constructions/images/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/assets/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/videos/2835998-uhd_3840_2160_24fps.mp4"];v.useEffect(()=>{const j=new Image;return j.onload=()=>{console.log("Logo preloaded successfully:",j.src)},j.onerror=()=>{console.log("Logo preload failed, trying alternative path")},j.src=ve,()=>{j.onload=null,j.onerror=null}},[ve]);const M=async j=>{j.preventDefault();const F=["/pavan-techno-constructions/assets/pavan.pdf","/pavan-techno-constructions/images/pavan.pdf","/pavan-techno-constructions/pavan.pdf"];let se=0;const Ae=async()=>{if(se>=F.length){alert("PDF file not found on server. Please contact support or try again later."),K();return}const Ye=F[se];console.log(`Trying PDF path ${se+1}/${F.length}:`,Ye);try{if((await fetch(Ye,{method:"HEAD",headers:{Accept:"application/pdf"}})).ok){const et=await fetch(Ye);if(et.ok){const Ge=await et.blob();if(Ge.type==="application/pdf"||Ge.type===""||Ye.endsWith(".pdf")){const nt=window.URL.createObjectURL(new Blob([Ge],{type:"application/pdf"})),it=document.createElement("a");it.href=nt,it.download="PAVAN_TECHNO_CONSTRUCTIONS_BROCHURE.pdf",it.style.display="none",document.body.appendChild(it),it.click(),document.body.removeChild(it),setTimeout(()=>window.URL.revokeObjectURL(nt),100),console.log("PDF downloaded successfully from:",Ye);return}}}}catch(Te){console.log("Error accessing PDF at:",Ye,Te)}se++,setTimeout(Ae,100)};await Ae()},K=()=>{const j=`
PAVAN TECHNO CONSTRUCTIONS
Engineering Excellence

Consult, Design & Execute

Contact Information:
- Website: Visit our website for more details
- Services: Construction, Design, Engineering
- Experience: 15+ Years in the industry
- Projects: 500+ Completed successfully

Note: This is a temporary file. Please contact us directly for the complete brochure.
    `,F=new Blob([j],{type:"text/plain"}),se=window.URL.createObjectURL(F),Ae=document.createElement("a");Ae.href=se,Ae.download="PAVAN_TECHNO_CONSTRUCTIONS_INFO.txt",Ae.style.display="none",document.body.appendChild(Ae),Ae.click(),document.body.removeChild(Ae),setTimeout(()=>window.URL.revokeObjectURL(se),100),console.log("Fallback file created and downloaded")},le=()=>{if(!ae.current)return;let j=0;const F=()=>{if(j>=ce.length){console.error("All background video paths failed");return}const se=ce[j];console.log(`Trying background video path ${j+1}/${ce.length}:`,se),ae.current.src=se,ae.current.load();const Ae=()=>{console.log("Background video loaded successfully:",se),ae.current.play().catch(et=>{console.warn("Background video autoplay blocked:",et)}),Te()},Ye=()=>{console.log("Background video path failed:",se),j++,Te(),setTimeout(F,100)},Te=()=>{ae.current&&(ae.current.removeEventListener("loadeddata",Ae),ae.current.removeEventListener("canplay",Ae),ae.current.removeEventListener("error",Ye))};ae.current.addEventListener("loadeddata",Ae,{once:!0}),ae.current.addEventListener("canplay",Ae,{once:!0}),ae.current.addEventListener("error",Ye,{once:!0})};F()};v.useEffect(()=>{const j=()=>{const P=new IntersectionObserver(ue=>{ue.forEach(xe=>{xe.isIntersecting&&(R(!0),nt())})},{threshold:.5});return ee.current&&P.observe(ee.current),P},F=()=>{const P=window.pageYOffset,ue=window.innerHeight;if(P>ue*.7&&P<ue*1.5&&!C&&!Y){$(!1);return}if(C&&P>ue*1.8){T(),setTimeout(()=>{X()},300);return}if(!C){const xe=P*-.3;document.querySelectorAll(".geometric-shape").forEach((lt,jt)=>{const Yt=(jt+1)*.2;lt.style.transform+=` translateY(${xe*Yt}px)`})}},se=P=>{C&&(P.preventDefault(),P.deltaY>0?(T(),setTimeout(()=>{X()},300)):P.deltaY<0&&T())};let Ae=0;const Ye=P=>{C&&(Ae=P.touches[0].clientY)},Te=P=>{C&&P.preventDefault()},et=P=>{if(C){const ue=P.changedTouches[0].clientY,xe=Ae-ue;xe>50?(T(),setTimeout(()=>{X()},300)):xe<-50&&T()}},Ge=()=>{const P=Date.now()*.001;q.current.forEach((ue,xe)=>{if(ue){const st=Math.sin(P+xe*.7)*30,lt=Math.cos(P+xe*.5)*20,jt=1+Math.sin(P+xe)*.3;ue.style.transform=`translate(${st}px, ${lt}px) scale(${jt})`}}),ge.current=requestAnimationFrame(Ge)},nt=()=>{document.querySelectorAll(".stat-number").forEach(ue=>{const xe=parseInt(ue.getAttribute("data-target")),lt=xe/(2e3/16);let jt=0;const Yt=setInterval(()=>{jt+=lt,jt>=xe?(ue.textContent=xe+(ue.textContent.includes("+")?"+":"")+(ue.textContent.includes("%")?"%":""),clearInterval(Yt)):ue.textContent=Math.floor(jt)+(ue.textContent.includes("+")?"+":"")+(ue.textContent.includes("%")?"%":"")},16)})},it=()=>{document.querySelectorAll(".company-title, .company-title *, .animated-word, .animated-word *, .title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, .word-golden-2, .golden-blue-title, .golden-blue-title *").forEach(ue=>{ue&&(ue.style.setProperty("transform","none","important"),ue.style.setProperty("transition","none","important"),ue.style.setProperty("perspective","none","important"),ue.style.setProperty("transform-style","flat","important"))})},Xt=j();document.addEventListener("mousemove",W,{passive:!0}),window.addEventListener("scroll",F,{passive:!0}),document.addEventListener("wheel",se,{passive:!1}),document.addEventListener("touchstart",Ye,{passive:!1}),document.addEventListener("touchmove",Te,{passive:!1}),document.addEventListener("touchend",et,{passive:!1}),Ge();const U=setTimeout(()=>{le()},500),we=setInterval(it,100);return()=>{Xt&&Xt.disconnect(),document.removeEventListener("mousemove",W),window.removeEventListener("scroll",F),document.removeEventListener("wheel",se),document.removeEventListener("touchstart",Ye),document.removeEventListener("touchmove",Te),document.removeEventListener("touchend",et),ge.current&&cancelAnimationFrame(ge.current),clearTimeout(U),clearInterval(we)}},[C,Y,O]),v.useEffect(()=>{const j=F=>{C&&(F.key==="Escape"?T():F.key==="ArrowLeft"?fe():F.key==="ArrowRight"&&V())};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[C,S]);const X=()=>{const j=document.querySelector("#about")||document.querySelector(".about-section")||document.querySelector("section:nth-of-type(2)");j?j.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight-100,behavior:"smooth"})},$=(j=!0)=>{console.log("Opening video modal for video:",w[S].title),E(!0),B(!0),document.body.style.overflow="hidden",j||_(!0),setTimeout(()=>{b(S)},100)},b=j=>{if(!g.current)return;const F=w[j];let se=0;const Ae=()=>{if(se>=F.paths.length){console.error("All video paths failed for:",F.title),B(!1);return}const Ye=F.paths[se];console.log(`Trying video path ${se+1}/${F.paths.length}:`,Ye),g.current.src=Ye,g.current.load();const Te=()=>{console.log("Video loaded successfully:",Ye),B(!1),setTimeout(()=>{g.current&&g.current.play().catch(nt=>{console.warn("Video autoplay blocked:",nt)})},100),Ge()},et=nt=>{console.log("Video path failed:",Ye,nt),se++,Ge(),setTimeout(Ae,100)},Ge=()=>{g.current&&(g.current.removeEventListener("loadeddata",Te),g.current.removeEventListener("canplay",Te),g.current.removeEventListener("error",et))};g.current.addEventListener("loadeddata",Te,{once:!0}),g.current.addEventListener("canplay",Te,{once:!0}),g.current.addEventListener("error",et,{once:!0})};Ae()},T=()=>{E(!1),B(!1),document.body.style.overflow="auto",g.current&&(g.current.pause(),g.current.currentTime=0)},V=()=>{if(S<w.length-1){const j=S+1;H(j),B(!0),setTimeout(()=>{b(j)},100)}},fe=()=>{if(S>0){const j=S-1;H(j),B(!0),setTimeout(()=>{b(j)},100)}},me=j=>{var F;console.error("Video error event:",(F=j.target)==null?void 0:F.error)},Ne=({index:j})=>i.jsx("div",{ref:F=>q.current[j]=F,className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${j*.2}s`,animationDuration:`${8+Math.random()*4}s`}}),G=(j,F)=>{const se=j.currentTarget;F?(se.style.transform="translateY(-8px) scale(1.05) rotateX(10deg)",se.style.boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"):(se.style.transform="translateY(0) scale(1) rotateX(0deg)",se.style.boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)")},de=(j,F)=>{const se=j.currentTarget;F?(se.style.transform="translateY(-15px) scale(1.08) rotateY(8deg)",se.style.boxShadow="0 25px 50px rgba(255, 215, 0, 0.3)"):(se.style.transform="translateY(0) scale(1) rotateY(0deg)",se.style.boxShadow="0 8px 25px rgba(255, 215, 0, 0.1)")};return v.useEffect(()=>{const j=()=>{const F=document.querySelector(".sticky-quote-btn");if(!F)return;window.scrollY>100?(F.style.opacity="1",F.style.transform="translateY(0)"):(F.style.opacity="0.8",F.style.transform="translateY(20px)");const se=document.querySelector("footer");se&&se.getBoundingClientRect().top<window.innerHeight-100&&(F.style.opacity="0",F.style.transform="translateY(50px)")};return window.addEventListener("scroll",j),j(),()=>{window.removeEventListener("scroll",j)}},[]),i.jsxs("section",{className:"hero",ref:oe,children:[i.jsxs("div",{className:"hero-left-section",style:{background:"#ffffff !important",paddingTop:"1.5rem"},children:[i.jsx("div",{className:"company-title golden-blue-title static-title",style:{marginTop:"-15px"},children:i.jsxs("h1",{children:[i.jsxs("span",{className:"title-line",children:[i.jsx("span",{className:"word-golden-1",children:"PAVAN"})," ",i.jsx("span",{className:"word-blue-1",children:"TECHNO"})]}),i.jsx("span",{className:"title-line",children:i.jsx("span",{className:"word-golden-2",children:"CONSTRUCTIONS"})})]})}),i.jsx("div",{className:"hero-company-logo",style:{marginTop:"-10px"},children:i.jsx("img",{src:ve,alt:"Pavan Techno Constructions Logo",className:"hero-logo-image",onError:j=>{}})}),i.jsx("div",{className:"tagline enhanced-tagline",style:{marginTop:"-5px"},children:i.jsx("p",{className:"typewriter golden-blue-tagline",children:"Consult, Design & Execute"})}),i.jsx("div",{className:"description",children:i.jsxs("p",{children:["Transforming ",i.jsx("strong",{children:"architectural dreams"})," into concrete reality with ",i.jsx("strong",{children:"cutting-edge technology"}),", innovative engineering solutions, and unwavering commitment to ",i.jsx("strong",{children:"excellence"}),". We deliver sophisticated construction projects that stand the test of time."]})})]}),i.jsxs("div",{className:"hero-right-section",children:[i.jsxs("div",{className:"hero-video-container",children:[i.jsx("video",{ref:ae,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"hero-video",style:{transform:`scale(1.1) translate(${L.x*15}px, ${L.y*15}px)`}}),i.jsx("div",{className:"hero-overlay",style:{background:`radial-gradient(circle at ${(L.x+.5)*100}% ${(L.y+.5)*100}%, 
                          rgba(255, 215, 0, 0.15) 0%, 
                          rgba(0, 0, 0, 0.6) 40%, 
                          rgba(0, 0, 0, 0.85) 100%)`}})]}),i.jsx("div",{className:"particles-container",children:Array.from({length:20},(j,F)=>i.jsx(Ne,{index:F},F))}),i.jsxs("div",{className:"hero-geometry",children:[i.jsx("div",{className:"geometric-shape shape-1",style:{transform:`translate(${L.x*-40}px, ${L.y*-30}px) rotate(${Date.now()*.01}deg)`}}),i.jsx("div",{className:"geometric-shape shape-2",style:{transform:`translate(${L.x*25}px, ${L.y*-20}px) rotate(${Date.now()*-.008}deg)`}}),i.jsx("div",{className:"geometric-shape shape-3",style:{transform:`translate(${L.x*-20}px, ${L.y*30}px) rotate(${Date.now()*.012}deg)`}})]}),i.jsxs("div",{className:"hero-right-content",children:[i.jsxs("div",{className:"hero-buttons",children:[i.jsxs("button",{onClick:M,className:"hero-btn primary",onMouseEnter:j=>G(j,!0),onMouseLeave:j=>G(j,!1),children:[i.jsx("span",{children:"📄"})," Download Portfolio"]}),i.jsxs("button",{onClick:y,className:"hero-btn secondary",onMouseEnter:j=>G(j,!0),onMouseLeave:j=>G(j,!1),children:[i.jsx("span",{children:"⚡"})," Start Your Project"]})]}),i.jsxs("div",{className:"hero-stats",ref:ee,children:[i.jsxs("div",{className:"stat",onMouseEnter:j=>de(j,!0),onMouseLeave:j=>de(j,!1),children:[i.jsx("div",{className:"stat-number","data-target":"60",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),i.jsxs("div",{className:"stat",onMouseEnter:j=>de(j,!0),onMouseLeave:j=>de(j,!1),children:[i.jsx("div",{className:"stat-number","data-target":"15",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Years Experience"})]}),i.jsxs("div",{className:"stat",onMouseEnter:j=>de(j,!0),onMouseLeave:j=>de(j,!1),children:[i.jsx("div",{className:"stat-number","data-target":"100",children:"0%"}),i.jsx("div",{className:"stat-label",children:"Client Satisfaction"})]})]})]}),i.jsxs("button",{className:"floating-contact sticky-quote-btn",onClick:y,onMouseEnter:j=>{j.target.style.transform="translateY(-10px) scale(1.15) rotate(3deg)",j.target.style.boxShadow="0 20px 50px rgba(255, 215, 0, 0.7)"},onMouseLeave:j=>{j.target.style.transform="translateY(0) scale(1) rotate(0deg)",j.target.style.boxShadow="0 8px 25px rgba(255, 215, 0, 0.4)"},style:{position:"fixed",bottom:"7rem",right:"2rem",zIndex:1002,background:"linear-gradient(135deg, #FFD700, #3b82f6)",padding:"0.9rem 1.6rem",borderRadius:"50px",boxShadow:"0 8px 25px rgba(255, 215, 0, 0.4)",border:"none",color:"white",fontWeight:"600",fontSize:"0.9rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all 0.3s ease"},children:[i.jsx("span",{children:"💬"})," Get Quote"]}),i.jsxs("button",{ref:J,className:"see-us-circle",onClick:()=>$(!0),onMouseEnter:j=>{j.target.style.transform="scale(1.2) rotate(10deg)",j.target.style.boxShadow="0 20px 50px rgba(236, 72, 153, 0.8)"},onMouseLeave:j=>{j.target.style.transform="scale(1) rotate(0deg)",j.target.style.boxShadow="0 10px 30px rgba(236, 72, 153, 0.4)"},style:{bottom:"6rem"},children:[i.jsx("span",{children:"See Us"}),i.jsx("span",{className:"play-icon",children:"▶"})]})]}),i.jsxs("button",{className:"scroll-btn",onClick:X,onMouseEnter:j=>{j.target.style.transform="translateX(-50%) translateY(-15px) scale(1.15)",j.target.style.background="rgba(255, 255, 255, 0.15)"},onMouseLeave:j=>{j.target.style.transform="translateX(-50%) translateY(0) scale(1)",j.target.style.background="none"},children:[i.jsx("span",{children:"Explore More"}),i.jsx("div",{className:"arrow",children:"↓"})]}),i.jsx("div",{className:`video-modal-overlay${C?" active":""}`,children:i.jsxs("div",{className:"video-modal-container",children:[D&&i.jsxs("div",{className:"video-loading",children:[i.jsx("div",{className:"loading-spinner"}),"Loading Video..."]}),i.jsx("video",{ref:g,className:"video-modal-video",onError:me,onCanPlay:()=>B(!1),muted:!0,loop:!0,playsInline:!0,preload:"metadata",style:{opacity:D?0:1},children:i.jsx("p",{children:"Your browser does not support the video tag."})}),i.jsxs("div",{className:"video-controls",children:[i.jsx("button",{className:"video-nav-btn",onClick:fe,disabled:S===0,onMouseEnter:j=>{j.target.disabled||(j.target.style.transform="scale(1.2) translateX(-5px)")},onMouseLeave:j=>{j.target.style.transform="scale(1) translateX(0)"},children:"‹"}),i.jsx("button",{className:"video-nav-btn",onClick:V,disabled:S===w.length-1,onMouseEnter:j=>{j.target.disabled||(j.target.style.transform="scale(1.2) translateX(5px)")},onMouseLeave:j=>{j.target.style.transform="scale(1) translateX(0)"},children:"›"})]}),i.jsx("button",{className:"video-close-btn",onClick:T,onMouseEnter:j=>{j.target.style.transform="scale(1.2) rotate(90deg)",j.target.style.background="rgba(255, 100, 100, 0.4)"},onMouseLeave:j=>{j.target.style.transform="scale(1) rotate(0deg)",j.target.style.background="rgba(255, 255, 255, 0.2)"},children:"×"}),i.jsxs("div",{className:"video-info",children:[i.jsx("h3",{className:"video-title",children:w[S].title}),i.jsxs("div",{className:"video-counter",children:[S+1," / ",w.length]})]}),i.jsxs("div",{className:"scroll-progress",onClick:()=>{T(),setTimeout(()=>X(),300)},children:[i.jsx("span",{children:"Scroll down or click to continue"}),i.jsx("span",{className:"scroll-arrow-down",children:"↓"})]})]})})]})},ep="/pavan-techno-constructions/assets/Blog-Covers-Press-Release-BIx1EJvd.png",tp="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAQID/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAwUGAv/aAAwDAQACEAMQAAAB6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIR4sTdVmsw7S5lYpxWc89sagAAAAAAAABzR0vW1Po7E5itOnqvQdS862BFPda/P0+PvZcMEwAAAAarSEwROMFptJqyXqgmZLKe2G3xXovmSeT47ta6WwctO/8AdHobOjnTW6UliAxouNqqvLlVbpS7HgoeHXjCiIQ7rfJKJjfTeIciznoXw5ayuotecy9FbTbnH8yvr9jnLX9P18UHNOkcAoiJdW4xW0Zvr5OSJB0tghnjNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAnEAACAwEAAAUDBQEAAAAAAAAEBQIDBgEABxITFRZAcBQhIzAxMv/aAAgBAQABBQL81aDTVJOBaZlZ4N33aTSdOZdFHseHkfaOP5dhDnOQ0tVcdENHkB9HHlWqh/z9npMzBraINovQ5HkG7q+pvQVm2xjOH7R+z0yArh1WsZThRkemBVvmCusRSe9cc/rYtBVA4uvTmWMdWpUkbPR3LFM3IVRxeuUAmanX+yrYadYolmtHa1cfXCL1m6pQuqovrJqZahUpvufLxw5uwazLdwip58kN+jWapU4uYbRQLDK7kcpAuaCtx22pJXaLJa6lhmXe6qsu5/nmB7VLxkYoN3aAlOBcRXdHE5HvFrjKlJAVtfYdxyu5Yv1YHIFAsD8v3COawq12UO4xz4kLqHi6sFPifL+Pw7XGHZsZdwYmGMekKD2mXBHIKDXriMT5cM+MFziuNuzkPGvJaU1CU1DcBml6dSezpS4s75opQGbZaCPdXaFRfbenCJv+LE5WWqEP7QCOL34Jf670wJPIQjXEtSGfKS4acCAqSO5rGVLV/sV+0IpDBnWHRV4mpDsHGEpDqkFRK3gNHB6kYFHioKii78w//8QAKxEAAQMBBQUJAAAAAAAAAAAAAQIDBAAFERMhMQYSMEFRFSI0UGCBwdHw/9oACAEDAQE/AfOI8d2U4GmReTSbFmuLLaE3kdCK7Kl4Zc3dNc8x7cOwpbcSQrFyCkkX9K2ejhiU4A6D3TpVlNohPuOOvJuKTzo68KHMXCdxEZ/NKtPc8KgN9bv2lJtMNBRZaCVK5/XpX//EACARAAIBAwQDAAAAAAAAAAAAAAECEQADBBITITAyUGD/2gAIAQIBAT8B9wzBBLUci2BJrfSY68lC6iKym1IOKvk3FACnruILgg0LM+ZmtmY1Hj5X/8QANxAAAgECBAQEBQIDCQAAAAAAAgMBAAQFERITFCExQTJRUmEVIiNCcQZAEDBwMzRTYnKBkaHR/9oACAEBAAY/Av61QEDuvn7KhjcNLYn7h7VK1JE0ervWuwsCcv8AxJrh7pew7pHv+1YLOY7sRz8sqiI6U6AiNMlGdLiIyjKj0xp+cZ5VH7SHIaKrqPP7qFLGIWEctzrNNVuS0xKJ1F3mhyi3yy86i5uNjXMxM/UqP2nxCxkiLqQx51Cow45f0zy5U9l5lxzvm1emti5w9rjHlDF9JrjbsCQmJ5DP8yX3bxQr1FSVpv1Gx3IA7zUIur1am+nyq1usOcE7rhHXlBRMTNBZHcBF2cZwrvXCvv1LfHUfKrG5wi6BkMvwtjKIz5TE5xz/ABSwvbxaWFHhmsZA3gy0tz+lMRHT80wfiSc19aQy4vVrB8alz6o86Fqig1lGcFHeoTd3i1N9NLu2XSxtmchb2mlWs3IcQ0dYL7zHnWZYknrI/wDFcVvhw+We5nyqVWl6tzI+2KeHHrh4Zjl5FR3eJ3q4YtkiU5Zfit+zeL1eoaxK3J4rtUWsMHMY5FlQ319eL3A5OLppmsLHCL1bIdcwtsRGfy/7/wAMGuMQCTwoJ+pyziJ96wQ8Ige8GaxyGeXKsbDH9A38tKZ3x8QdsqjTBLQV/E20M7DnV/b4rn8ddnIvPwsHtprEEY6IDiu6e/vjnJf6astvkv44GmPbIqxf49Ai85zSdxGYyHtX6t+DAUKKfkEY56faoUuF8ZCojRp+pB986wi7i9SrEFWX93uQkgYH/tWb4t+F1B/ZR0isY42/tLG5Js5xeoktUf5Z8qvZubsMSs7kylK1rkPmnsMT70+3xZZLxG4TE2zGznmv0x71iQ4pCouN9mrdHPUPtVqTFv8AhPG6jX92zWCxgGgrwWZ6rccsg96/VjGqBhw4ozKParbiLsMPfxhSppDmMlHq9quR4dK5U3TLLeMgZ71jInEFHARyn8V+mnsVM4bDym8246+mZ/7rAfhW1L4uR1Eoco0+9PtEug7i35MD00HAXIKIeq2jmB1b4jijUZ20fSTbDkP5qGPtltOO5DQrNIEA9BmOlAxihMw8JTHOK3m2yzb6pGtvh16ILXp09/Ohm4t1tkemqKKVJBcl10x1oz4NOo+s6etBDbVRwHhzHpUCMaRjpEVBXFstpR3IaWMoCRX4Yy6UJGoSMPCUx0pib5Sblk3BtEss8omtvRG3llpy5VJW9stRT3EaZoUI7njyjxVsFbLlOeejTyrbQsVB5DFEyVDLCjTJZdYrYhIbPoy5VG3aKHKdUZD3pjVqEGM8RRHX+sX/xAAmEAEAAgIBAwQBBQAAAAAAAAABABEhMVFBYXFAgaHBcDCRsdHh/9oACAEBAAE/IfzVWJtgarzDXmbrjmoHNJmvliDaFunD4JTK7swuPMPSWdqH4UQVABgJjbHGrdw4wkAJW1s8MoTPxnpNiaxez3jy6WvjnMgEocEqoplUYDB2godvR3M+gGsg6ko6bbLSgc9efpARloLiCO5w2jRUFH6Zwti2I8BEtp0qogP5u2+VahVSjZBNze9BlkSbAK/ulamLzY4HZmHlc22+aJU0acDxb95Q0LLq0VvNRdm1X8DWSWOVLYIyAF3tQ5a1H8kWrZ7kwz+DfhukNiGorSqbx0ufSv8A5g9qu5FOS9w1a/1SNOJrm4PFxoOsOozVvWbQzXnlV7liqqwPQKDjiCYTyrDwxrZMw9pYhHBcuCILpc7bcC0hJP2q0cMTwPdvsONQxwi36CdpdwaFWuHDUaS5U2YnxGItYynbAu4iwuqm5X/AFT9SuZmJz45satf+QgADBXg7S4CnNLuwPZLlZAiEEreusRzcOpFYawqswOvgjwg31rfxAXMpQxcYZUoRotqZcgb1ABBnT0vbhiUTiLJ8dLmBQ2FQH6IEVcYbuvmVq8ENqfda3yVz0FPLGjXJFiMmHEx9eWgGBy7plgKCq6KPumyys2puNDp909uBYFwtAsOCCXBQKCa6GCWZI9Oa8YHbndeM3RwJAQ+Ip8KJ4m3Y5hirTd4Fu863mAy5hIJ1WJZ/msuCVeNf684u+OOUzBKrnz/MX//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888887178888888888/zq288888wg4MDsIQ0EgMA8UQAsI4cA4sc888888888888888888888888888888888888888888888888888888888888888888//EACARAQEAAgICAgMAAAAAAAAAAAERITEAQTBhUGBxsfD/2gAIAQMBAT8Q+YUD0j+wcIkStATpRw+t8SOE1AQ9hp41laBWmR/GOOY3ZUlMrIfvjZYMLVdY5s8UtlCIlA7HmZcUUlWNDOq674ACkc3DuFhfqv8A/8QAIhEBAAECBAcAAAAAAAAAAAAAAREAMSEwQVFQYHGBwdHw/9oACAECAQE/EOMPGgoQkHRoUzvbDB75d3qIxvTy2El6kTBNKMtN5F+vSmFRp735V//EACUQAQEAAgMAAgEDBQAAAAAAAAERACExQVFhcYFAcJEQIKGx8P/aAAgBAQABPxD96ugE2TpWBacVRvpyTzCcqxuXL4ZA26Ua99zjm4KI7kOzCp+kOuBYAFD6t/nAChAakwEj2uIJk/8AuYCHBkTBAHKV+9/5xKna/wCr9IX5AiEdpsHswFKEMDrQG2ezBKGXKES/kMCexCkZNd4XdCRqBI8M9fCafj9Csy3EZXAMeYEOxDjGguD6BXWEtAtqewP2FzRYFtGhcdkjSvC+PXBINAQ/suX+lymUwbj07qMXwDa/WR8vSVXoIezCIyJYnuTH36ZE4SYwBCbHnnCIJC+ggIflMbRQLlvAgQftwZPexytA3S344KSCiKVQMMDOZI/dQETtOaXabkJGhjrWXWQUilAUDkZzgmvXi8I5VMivjgMfeG1GD4wQZv2YR4lVIWIQgdqYrUtpCRFAhV/GC894bhtxzD2QbQAh+MQ7LWzMa4Yb1jPagIwlhdpD7x/hLCA5EYjhCaNGwFoh6KmGeWasVgF1YMp7yab4pSMFW5QuG0d1ea6STGwVo1pKAOUOw6x4URh8lV46bx5lprGw1VR3oDrA+9sZkLhLXZv8YUgs4hZVRJO98JjcChZpN+SMWcwfkwqDXX2HyomHSmeFSw5wNpT4AFxNGqzjAKRFEPFHM0GpOlSW+C5dau65Lhu8c26I1HB+GLsWRr2rSJRNHr2IfTcJJCL4L4dqrctHwFUbsoo/WjSmJqlA7R8DIBj8Hokal07O8agvFJZXG1zfdIpFENileFMdhi8d94Ot/fWIdwTImmnA1m1VUiLAK9a7MvZ8mlBoK0nOsKRUP+BUB/C5aPWAToLwmdeNLXK0bRf+MbgxOc43gPjDLHCHUzgA07tvoZNX81iQrN4YmAoUQB4rv5x4zCuz4ucAxK/ic5ye5q/q6wooHKXHwfGE4lKA4AyC9Ziny48SNtfo4MP4wYunbk6xNWgGxAlpivvzQ4JOkxAkKwq12Y6MDHRa+3bm0MCoHyDp+cSbtEN9hkUkGskt7J1idjFEaLU6c4UIAgEOAznE8iCFna7/AHi//9k=",ap="/pavan-techno-constructions/assets/9nz0z6Ct4l23c27NzViK-jIEjcN3Y.png",np="/pavan-techno-constructions/assets/24745175-D-scNrQe.jpg",ip="/pavan-techno-constructions/assets/download-Dm7BOQmU.png",so=()=>{const[y,L]=v.useState(!1),[Q,d]=v.useState({x:0,y:0}),[R,C]=v.useState(null),E=v.useRef(null),S=v.useRef(null),H=v.useRef(null),D=v.useRef(null),B=v.useRef(null),Y=v.useRef([]),_=()=>{console.log("Opening popup...")},O=[{name:"SHAHI EXPORTS PVT LTD",image:ep,fallbackPaths:["/assets/Blog-Covers-Press-Release.png","../assets/Blog-Covers-Press-Release.png","./assets/Blog-Covers-Press-Release.png","/src/assets/Blog-Covers-Press-Release.png"]},{name:"GOKALDAS EXPORTS LTD",image:tp,fallbackPaths:["/assets/1630570806167.jpeg","../assets/1630570806167.jpeg","./assets/1630570806167.jpeg","/src/assets/1630570806167.jpeg"]},{name:"MES",image:ap,fallbackPaths:["/assets/9nz0z6Ct4l23c27NzViK.png","../assets/9nz0z6Ct4l23c27NzViK.png","./assets/9nz0z6Ct4l23c27NzViK.png","/src/assets/9nz0z6Ct4l23c27NzViK.png"]},{name:"ARK BUILDERS",image:np,fallbackPaths:["/assets/24745175.jpg","../assets/24745175.jpg","./assets/24745175.jpg","/src/assets/24745175.jpg"]},{name:"TAAPASI PROJECTS",image:ip,fallbackPaths:["/assets/download.png","../assets/download.png","./assets/download.png","/src/assets/download.png"]}];v.useEffect(()=>{const q=new IntersectionObserver(ee=>{ee.forEach(g=>{g.isIntersecting&&!y&&(L(!0),g.target.classList.add("section-visible"),setTimeout(()=>{var J;return(J=S.current)==null?void 0:J.classList.add("animate")},100),setTimeout(()=>{var J;return(J=H.current)==null?void 0:J.classList.add("animate")},400),setTimeout(()=>{var J;return(J=D.current)==null?void 0:J.classList.add("animate")},800),setTimeout(()=>{var J;return(J=B.current)==null?void 0:J.classList.add("animate")},1200),setTimeout(()=>{Y.current.forEach((J,ae)=>{setTimeout(()=>J==null?void 0:J.classList.add("animate"),ae*100)})},1600))})},{threshold:.2});return E.current&&q.observe(E.current),()=>q.disconnect()},[y]),v.useEffect(()=>{const q=ee=>{if(E.current){const g=E.current.getBoundingClientRect(),J=(ee.clientX-g.left)/g.width,ae=(ee.clientY-g.top)/g.height;d({x:J,y:ae})}};return document.addEventListener("mousemove",q),()=>document.removeEventListener("mousemove",q)},[]);const I=(q,ee)=>{C(ee?q:null);const g=Y.current[q];g&&(ee?(g.style.transform="translateY(-20px) scale(1.05) rotateX(5deg) rotateY(5deg)",g.style.zIndex="100"):(g.style.transform="translateY(0) scale(1) rotateX(0deg) rotateY(0deg)",g.style.zIndex="10"))},oe=[{icon:"🎯",title:"Modern Design",desc:"Contemporary architectural solutions",color:"#FF6B6B"},{icon:"⚡",title:"Fast Construction",desc:"On-time project delivery",color:"#4ECDC4"},{icon:"💎",title:"Premium Quality",desc:"Best materials & craftsmanship",color:"#45B7D1"},{icon:"🏛️",title:"Innovative Designs",desc:"Creative & functional spaces",color:"#96CEB4"},{icon:"👷",title:"Expert Team",desc:"15+ years of experience",color:"#FFEAA7"},{icon:"🔧",title:"Skilled Workers",desc:"Certified professionals",color:"#DDA0DD"},{icon:"✅",title:"Quality Assurance",desc:"Premium standards",color:"#98D8C8"},{icon:"🔄",title:"Complete Service",desc:"End-to-end solutions",color:"#F7DC6F"}];return v.useEffect(()=>{if(S.current){S.current.classList.add("animate");const q=S.current.querySelector(".client-logos-scroll-container");if(q){q.style.overflow="hidden";const ee=q.querySelector(".client-logos-scroll");ee&&(ee.style.animation="none",ee.offsetHeight,ee.style.animation="scrollLogosRightToLeft 40s linear infinite")}}},[y]),i.jsxs("section",{id:"about",className:"about-section",ref:E,children:[i.jsxs("div",{className:"dynamic-background",children:[i.jsx("div",{className:"morph-shape shape-1",style:{transform:`translate(${Q.x*30}px, ${Q.y*20}px) rotate(${Q.x*360}deg)`}}),i.jsx("div",{className:"morph-shape shape-2",style:{transform:`translate(${Q.x*-40}px, ${Q.y*30}px) rotate(${Q.y*-360}deg)`}}),i.jsx("div",{className:"morph-shape shape-3",style:{transform:`translate(${Q.x*50}px, ${Q.y*-25}px) rotate(${(Q.x+Q.y)*180}deg)`}})]}),i.jsx("div",{className:"particles-system",children:Array.from({length:25},(q,ee)=>i.jsx("div",{className:"floating-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*6}s`}},ee))}),i.jsx("div",{className:"client-logos-section",ref:S,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"client-logos-header",children:[i.jsx("h2",{className:"client-logos-title",children:"PTC CLIENT LOGOS"}),i.jsx("div",{className:"client-logos-subtitle",children:"Trusted by Industry Leaders"})]}),i.jsx("div",{className:"client-logos-scroll-container",children:i.jsxs("div",{className:"client-logos-scroll",children:[O.map((q,ee)=>i.jsxs("div",{className:"client-box",children:[i.jsx("div",{className:"client-logo-container",style:{width:"220px",height:"220px",margin:"0 30px"},children:i.jsx("img",{src:q.image,alt:q.name,className:"client-logo-image",style:{maxWidth:"160px",maxHeight:"160px"},onError:g=>{const J=q.fallbackPaths;let ae=!1;for(const ge of J)if(!g.target.src.includes(ge.replace("./","").replace("/public",""))){g.target.src=ge,ae=!0;break}ae||(g.target.style.display="none",g.target.parentElement.innerHTML=`
                            <div class="logo-placeholder" style="height: 160px; width: 160px;">
                              <div class="placeholder-text">${q.name}</div>
                            </div>
                          `)}})}),i.jsx("div",{className:"client-name",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",textAlign:"center",marginTop:"15px",transition:"all 0.3s ease"},children:q.name})]},`first-${ee}`)),O.map((q,ee)=>i.jsxs("div",{className:"client-box",children:[i.jsx("div",{className:"client-logo-container",style:{width:"220px",height:"220px",margin:"0 30px"},children:i.jsx("img",{src:q.image,alt:q.name,className:"client-logo-image",style:{maxWidth:"160px",maxHeight:"160px"},onError:g=>{const J=q.fallbackPaths;let ae=!1;for(const ge of J)if(!g.target.src.includes(ge.replace("./","").replace("/public",""))){g.target.src=ge,ae=!0;break}ae||(g.target.style.display="none",g.target.parentElement.innerHTML=`
                            <div class="logo-placeholder" style="height: 160px; width: 160px;">
                              <div class="placeholder-text">${q.name}</div>
                            </div>
                          `)}})}),i.jsx("div",{className:"client-name",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",textAlign:"center",marginTop:"15px",transition:"all 0.3s ease"},children:q.name})]},`second-${ee}`))]})})]})}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"split-layout",children:[i.jsxs("div",{className:"left-panel",children:[i.jsxs("div",{className:"title-section",ref:H,children:[i.jsxs("div",{className:"title-decoration",children:[i.jsx("span",{className:"deco-line"}),i.jsx("span",{className:"deco-circle"}),i.jsx("span",{className:"deco-line"})]}),i.jsxs("h2",{className:"section-title",children:[i.jsx("span",{className:"title-word word-1",children:"Why"}),i.jsx("span",{className:"title-word word-2",children:"Choose"}),i.jsx("span",{className:"title-word word-3",children:"Us"})]}),i.jsx("div",{className:"title-subtitle",children:"Excellence Redefined"})]}),i.jsx("div",{className:"image-container",ref:D,children:i.jsxs("div",{className:"image-frame",children:[i.jsx("div",{className:"image-overlay",children:i.jsxs("div",{className:"overlay-content",children:[i.jsx("div",{className:"overlay-icon",children:"🏗️"}),i.jsxs("div",{className:"overlay-text",children:[i.jsx("span",{className:"overlay-number",children:"500+"}),i.jsx("span",{className:"overlay-label",children:"Projects"})]})]})}),i.jsx("img",{src:"/pavan-techno-constructions/images/whyy.jpg",alt:"Construction Excellence",onError:q=>{const ee=["/pavan-techno-constructions/assets/whyy.jpg","/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg"];let g=!1;for(const J of ee)if(!q.target.src.includes(J.replace("/pavan-techno-constructions/",""))){console.log(`Image failed to load, trying: ${J}`),q.target.src=J,g=!0;break}g||(console.log("All image paths failed, using text placeholder"),q.target.style.display="none",q.target.parentElement.innerHTML+=`
                        <div class="image-placeholder" style="
                          background: linear-gradient(135deg, #3b82f6, #1e40af);
                          color: white;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100%;
                          font-size: 1.5rem;
                          text-align: center;
                          padding: 2rem;
                        ">
                          <div>
                            <div style="font-size: 3rem; margin-bottom: 1rem;">🏗️</div>
                            <div>Building Excellence</div>
                            <div style="margin-top: 1rem; font-size: 2rem;">500+ Projects</div>
                          </div>
                        </div>
                      `)}})]})})]}),i.jsxs("div",{className:"right-panel",ref:B,children:[i.jsx("div",{className:"content-intro",children:i.jsx("p",{className:"intro-text",children:"We specialize in transforming architectural dreams into stunning reality through innovative design, precision engineering, and uncompromising quality standards."})}),i.jsxs("div",{className:"feature-cards-container",children:[i.jsx("h3",{className:"cards-title",children:"Our Excellence Pillars"}),i.jsx("div",{className:"feature-cards-grid",children:oe.map((q,ee)=>i.jsxs("div",{className:"feature-card",ref:g=>Y.current[ee]=g,onMouseEnter:()=>I(ee,!0),onMouseLeave:()=>I(ee,!1),style:{"--card-color":q.color,"--hover-intensity":R===ee?1:0},children:[i.jsx("div",{className:"card-glow"}),i.jsxs("div",{className:"card-content",children:[i.jsx("div",{className:"card-icon",children:q.icon}),i.jsxs("div",{className:"card-text",children:[i.jsx("div",{className:"card-title",children:q.title}),i.jsx("div",{className:"card-desc",children:q.desc})]})]}),i.jsx("div",{className:"card-shine"})]},ee))})]}),i.jsxs("div",{className:"cta-section",children:[i.jsxs("button",{className:"cta-button",onClick:_,onMouseEnter:q=>{q.target.style.transform="translateY(-8px) scale(1.05) rotateX(15deg)",q.target.style.boxShadow="0 30px 60px rgba(183, 156, 92, 0.4)"},onMouseLeave:q=>{q.target.style.transform="translateY(0) scale(1) rotateX(0deg)",q.target.style.boxShadow="0 15px 35px rgba(183, 156, 92, 0.2)"},children:[i.jsx("span",{className:"btn-background"}),i.jsxs("span",{className:"btn-text",children:[i.jsx("span",{className:"btn-icon",children:"🚀"}),"Start Your Project"]}),i.jsx("span",{className:"btn-particles",children:Array.from({length:6},(q,ee)=>i.jsx("span",{className:"btn-particle"},ee))})]}),i.jsx("div",{className:"cta-subtitle",children:"Free consultation & personalized quote"})]})]})]})})]})},s0=({openPopup:y})=>{const[L,Q]=v.useState(!1),[d,R]=v.useState({title:!1,subtitle:!1,images:!1,features:!1,button:!1}),C=v.useRef(null);v.useEffect(()=>{const w=new IntersectionObserver(([ce])=>{ce.isIntersecting&&(Q(!0),setTimeout(()=>R(M=>({...M,title:!0})),200),setTimeout(()=>R(M=>({...M,subtitle:!0})),1400),setTimeout(()=>R(M=>({...M,images:!0})),1800),setTimeout(()=>R(M=>({...M,features:!0})),2100),setTimeout(()=>R(M=>({...M,button:!0})),2400))},{threshold:.1});return C.current&&w.observe(C.current),()=>{C.current&&w.unobserve(C.current)}},[]);const E={"--primary-color":"#2c3e50","--secondary-color":"#f8f9fa","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},S=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes fadeInDelay {
      0% {
        opacity: 0;
        transform: translateY(20px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: blur(0px);
      }
    }

    @keyframes imageReveal {
      0% {
        transform: translateY(60px) scale(0.8) rotateY(15deg);
        opacity: 0;
        filter: blur(8px);
      }
      50% {
        transform: translateY(30px) scale(0.9) rotateY(8deg);
        opacity: 0.5;
        filter: blur(4px);
      }
      100% {
        transform: translateY(0) scale(1) rotateY(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    @keyframes featureSlideIn {
      0% {
        transform: translateX(-50px) rotateZ(-5deg);
        opacity: 0;
        filter: blur(3px);
      }
      100% {
        transform: translateX(0) rotateZ(0deg);
        opacity: 1;
        filter: blur(0px);
      }
    }

    @keyframes buttonPulse {
      0% {
        transform: scale(0.8) rotateZ(-5deg);
        opacity: 0;
        box-shadow: 0 0 0 0 rgba(183, 156, 92, 0.4);
      }
      50% {
        transform: scale(0.95) rotateZ(-2deg);
        opacity: 0.8;
      }
      100% {
        transform: scale(1) rotateZ(0deg);
        opacity: 1;
        box-shadow: 0 10px 25px rgba(183, 156, 92, 0.3);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      33% {
        transform: translateY(-10px) rotate(1deg);
      }
      66% {
        transform: translateY(-5px) rotate(-1deg);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    @keyframes morphBorder {
      0%, 100% {
        border-radius: 16px;
      }
      25% {
        border-radius: 16px 40px 16px 40px;
      }
      50% {
        border-radius: 40px 16px 40px 16px;
      }
      75% {
        border-radius: 16px 40px 16px 40px;
      }
    }
  `;v.useEffect(()=>{const w=document.createElement("style");return w.textContent=S,()=>{document.head.contains(w)&&document.head.removeChild(w)}},[]);const H={...E,backgroundColor:"var(--secondary-color)",padding:"5rem 0",position:"relative",overflow:"hidden",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",backgroundSize:"400% 400%"},D=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"-5%",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",animation:"float 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"-3%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",animation:"float 10s ease-in-out infinite reverse",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"800px",background:"radial-gradient(circle, rgba(183, 156, 92, 0.05) 0%, transparent 70%)",borderRadius:"50%",animation:"float 12s ease-in-out infinite",zIndex:1}})]}),B={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},Y={textAlign:"center",marginBottom:"3rem",perspective:"1000px"},_={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},O=w=>({display:"inline-block",marginRight:"20px",opacity:d.title?1:0,transform:d.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+w*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),I=w=>({display:"inline-block",marginRight:"20px",opacity:d.title?1:0,transform:d.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #B79C5C, #34495e, #2c3e50)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+w*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),oe={fontSize:"1.2rem",color:"var(--text-color)",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",opacity:d.subtitle?1:0,animation:d.subtitle?"fadeInDelay 1s forwards":"none"},q={display:"flex",gap:"2rem",marginTop:"3rem",marginBottom:"3rem"},ee=w=>({flex:1,position:"relative",borderRadius:"var(--border-radius)",overflow:"hidden",boxShadow:"0 15px 35px var(--shadow-color)",transform:d.images?"translateY(0) scale(1) rotateY(0deg)":"translateY(60px) scale(0.8) rotateY(15deg)",opacity:d.images?1:0,animation:d.images?`imageReveal 1s forwards ${w*.2}s`:"none",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer"}),g={width:"100%",height:"300px",objectFit:"cover",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.9) contrast(1.1)"},J={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, rgba(183, 156, 92, 0.2), rgba(44, 62, 80, 0.2))",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.2rem",fontWeight:"600",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},ae={marginTop:"3rem",display:"grid",gap:"1.5rem"},ge=w=>({display:"flex",alignItems:"flex-start",background:"var(--light-color)",padding:"1.5rem",borderRadius:"var(--border-radius)",boxShadow:"0 8px 25px var(--shadow-color)",border:"1px solid rgba(183, 156, 92, 0.1)",transform:d.features?"translateX(0) rotateZ(0deg)":"translateX(-50px) rotateZ(-5deg)",opacity:d.features?1:0,animation:d.features?`featureSlideIn 0.6s forwards ${w*.1}s`:"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",position:"relative",overflow:"hidden"}),ve={width:"50px",height:"50px",borderRadius:"50%",background:"linear-gradient(135deg, var(--primary-color), var(--accent-color))",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1rem",flexShrink:0,color:"white",fontSize:"1.2rem",transition:"all 0.3s ease",position:"relative",zIndex:2},A={display:"inline-block",background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",color:"white",fontSize:"1.2rem",fontWeight:"600",padding:"1rem 3rem",borderRadius:"50px",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",transform:d.button?"scale(1) rotateZ(0deg)":"scale(0.8) rotateZ(-5deg)",opacity:d.button?1:0,animation:d.button?"buttonPulse 1s forwards":"none",boxShadow:"0 10px 25px rgba(183, 156, 92, 0.3)",zIndex:2},W=[{icon:"🏗️",title:"Superior Quality Construction",desc:"Only the best raw materials used for lasting durability"},{icon:"📐",title:"Perfect Planning & Execution",desc:"Designed by a highly qualified architectural team"},{icon:"⏰",title:"On-Time Delivery",desc:"Because we value your time and commitments"},{icon:"💰",title:"Affordable Innovation",desc:"Stylish homes at unbeatable market prices"},{icon:"⭐",title:"Customer Satisfaction Guaranteed",desc:"We build homes that match your dreams perfectly"}];return i.jsxs("section",{ref:C,style:H,children:[D,i.jsxs("div",{style:B,children:[i.jsxs("div",{style:Y,children:[i.jsxs("h2",{style:_,children:[i.jsx("span",{style:I(0),children:"Exceptional"}),i.jsx("span",{style:O(1),children:"Deal"}),i.jsx("span",{style:O(2),children:"For"}),i.jsx("span",{style:O(3),children:"Your"}),i.jsx("span",{style:I(4),children:"Dream"}),i.jsx("span",{style:O(5),children:"Home"})]}),i.jsx("p",{style:oe,children:"Discover unparalleled value with Pavan Techno Constructions. We deliver premium quality homes that combine architectural excellence with modern innovation, all at prices that redefine market standards."})]}),i.jsxs("div",{style:q,children:[i.jsxs("div",{style:ee(0),onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(-5deg)",w.currentTarget.style.animation="morphBorder 2s ease-in-out infinite";const ce=w.currentTarget.querySelector("img"),M=w.currentTarget.querySelector(".image-overlay");ce&&(ce.style.transform="scale(1.1) rotate(2deg)"),M&&(M.style.opacity="1")},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",w.currentTarget.style.animation="none";const ce=w.currentTarget.querySelector("img"),M=w.currentTarget.querySelector(".image-overlay");ce&&(ce.style.transform="scale(1) rotate(0deg)"),M&&(M.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Modern House Exterior",style:g}),i.jsx("div",{className:"image-overlay",style:J,children:"Stunning Exteriors"})]}),i.jsxs("div",{style:ee(1),onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(5deg)",w.currentTarget.style.animation="morphBorder 2s ease-in-out infinite reverse";const ce=w.currentTarget.querySelector("img"),M=w.currentTarget.querySelector(".image-overlay");ce&&(ce.style.transform="scale(1.1) rotate(-2deg)"),M&&(M.style.opacity="1")},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",w.currentTarget.style.animation="none";const ce=w.currentTarget.querySelector("img"),M=w.currentTarget.querySelector(".image-overlay");ce&&(ce.style.transform="scale(1) rotate(0deg)"),M&&(M.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Luxurious Interior",style:g}),i.jsx("div",{className:"image-overlay",style:J,children:"Elegant Interiors"})]})]}),i.jsx("div",{style:ae,children:W.map((w,ce)=>i.jsxs("div",{style:ge(ce),onMouseEnter:M=>{M.currentTarget.style.transform="translateX(10px) scale(1.02) rotateZ(1deg)",M.currentTarget.style.boxShadow="0 15px 40px rgba(183, 156, 92, 0.2)",M.currentTarget.style.background="linear-gradient(135deg, #ffffff, #f8f9fa)";const K=M.currentTarget.querySelector(".feature-icon");K&&(K.style.transform="scale(1.1) rotateY(180deg)",K.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))")},onMouseLeave:M=>{M.currentTarget.style.transform="translateX(0) scale(1) rotateZ(0deg)",M.currentTarget.style.boxShadow="0 8px 25px var(--shadow-color)",M.currentTarget.style.background="var(--light-color)";const K=M.currentTarget.querySelector(".feature-icon");K&&(K.style.transform="scale(1) rotateY(0deg)",K.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))")},children:[i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.1), transparent)",transition:"left 0.5s ease"}}),i.jsx("div",{className:"feature-icon",style:ve,children:w.icon}),i.jsxs("div",{style:{flex:1,zIndex:2},children:[i.jsx("h4",{style:{color:"var(--primary-color)",fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",transition:"all 0.3s ease"},children:w.title}),i.jsx("p",{style:{color:"var(--text-color)",fontSize:"0.95rem",lineHeight:"1.6",margin:0,transition:"all 0.3s ease"},children:w.desc})]})]},ce))}),i.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:i.jsxs("button",{style:A,onClick:y,onMouseEnter:w=>{w.currentTarget.style.transform="scale(1.05) rotateZ(2deg)",w.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.4)",w.currentTarget.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))"},onMouseLeave:w=>{w.currentTarget.style.transform="scale(1) rotateZ(0deg)",w.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.3)",w.currentTarget.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))"},children:[i.jsx("span",{style:{position:"relative",zIndex:2},children:"Claim Your Deal Today"}),i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",transition:"left 0.5s ease"}})]})})]})]})},oo=({openPopup:y})=>{const[L,Q]=v.useState(!1),[d,R]=v.useState({title:!1,text:!1,image:!1,button:!1,stats:!1}),C=v.useRef(null);v.useEffect(()=>{const A=new IntersectionObserver(([W])=>{W.isIntersecting&&(Q(!0),setTimeout(()=>R(w=>({...w,title:!0})),300),setTimeout(()=>R(w=>({...w,text:!0})),700),setTimeout(()=>R(w=>({...w,image:!0})),1e3),setTimeout(()=>R(w=>({...w,stats:!0})),1300),setTimeout(()=>R(w=>({...w,button:!0})),1600))},{threshold:.1});return C.current&&A.observe(C.current),()=>{C.current&&A.unobserve(C.current)}},[]);const E=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(90deg) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes textSlideIn {
      0% {
        opacity: 0;
        transform: translateX(-30px);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0px);
      }
    }

    @keyframes imageReveal {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes statsCounter {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes buttonPulse {
      0% {
        opacity: 0;
        transform: scale(0.8);
        box-shadow: 0 0 0 0 rgba(183, 156, 92, 0.7);
      }
      50% {
        opacity: 0.8;
        transform: scale(0.95);
        box-shadow: 0 0 0 10px rgba(183, 156, 92, 0.3);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0 20px rgba(183, 156, 92, 0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(2deg);
      }
    }

    @keyframes borderGlow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(183, 156, 92, 0.3);
      }
      50% {
        box-shadow: 0 0 25px rgba(183, 156, 92, 0.6), 0 0 35px rgba(59, 130, 246, 0.3);
      }
    }

    @keyframes particleFloat {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes geometricRotate {
      0% {
        transform: rotate(0deg) scale(1);
      }
      50% {
        transform: rotate(180deg) scale(1.05);
      }
      100% {
        transform: rotate(360deg) scale(1);
      }
    }

    /* Responsive Keyframes */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes imageReveal {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;v.useEffect(()=>{const A=document.createElement("style");return A.textContent=E,document.head.appendChild(A),()=>{document.head.contains(A)&&document.head.removeChild(A)}},[]);const S={background:"linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",padding:"clamp(2rem, 5vw, 5rem) 0",position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},H=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"clamp(100px, 15vw, 200px)",height:"clamp(100px, 15vw, 200px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(183, 156, 92, 0.05))",animation:"float 8s ease-in-out infinite",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"clamp(80px, 12vw, 150px)",height:"clamp(80px, 12vw, 150px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",animation:"float 10s ease-in-out infinite reverse",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"10%",width:"clamp(30px, 6vw, 60px)",height:"clamp(30px, 6vw, 60px)",background:"linear-gradient(45deg, #B79C5C, #8B7355)",transform:"rotate(45deg)",opacity:.3,animation:"geometricRotate 20s linear infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"25%",right:"15%",width:"clamp(40px, 8vw, 80px)",height:"clamp(40px, 8vw, 80px)",background:"linear-gradient(45deg, #3b82f6, #1d4ed8)",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",opacity:.3,animation:"float 12s ease-in-out infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),[...Array(window.innerWidth<768?3:6)].map((A,W)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,width:"3px",height:"3px",background:"#B79C5C",borderRadius:"50%",animation:`particleFloat ${15+Math.random()*10}s linear infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1}},W))]}),D={maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(1rem, 4vw, 2rem)",position:"relative",zIndex:2,display:"flex",alignItems:"center",minHeight:"clamp(60vh, 80vh, 90vh)",width:"100%"},B={display:"flex",flexDirection:window.innerWidth<1024?"column":"row",alignItems:"center",gap:"clamp(2rem, 4vw, 4rem)",width:"100%"},Y={flex:window.innerWidth<1024?"1":"1 1 55%",position:"relative",width:"100%",order:(window.innerWidth<1024,1)},_={flex:window.innerWidth<1024?"1":"1 1 45%",position:"relative",width:"100%",maxWidth:window.innerWidth<1024?"400px":"none",order:(window.innerWidth<1024,2),margin:window.innerWidth<1024?"2rem auto":"0"},O={fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 clamp(1rem, 3vw, 2rem) 0",perspective:"1000px",position:"relative",textAlign:window.innerWidth<768?"center":"left"},I=A=>({display:"inline-block",marginRight:window.innerWidth<768?"10px":"20px",opacity:d.title?1:0,transform:d.title?"translateY(0) scale(1)":"translateY(50px) scale(0.8)",background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 50%, #B79C5C 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+A*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),oe={position:"absolute",left:window.innerWidth<768?"50%":"-20px",top:"50%",transform:window.innerWidth<768?"translate(-50%, -50%)":"translateY(-50%)",width:window.innerWidth<768?"80%":"6px",height:window.innerWidth<768?"4px":"80%",background:"linear-gradient(135deg, #B79C5C, #3b82f6)",borderRadius:"3px",animation:d.title?"borderGlow 2s ease-in-out infinite":"none",display:window.innerWidth<480?"none":"block"},q={fontSize:"clamp(1rem, 2.5vw, 1.1rem)",lineHeight:"1.8",color:"#e5e7eb",marginBottom:"clamp(1rem, 2vw, 1.5rem)",transform:d.text?"translateX(0)":"translateX(-30px)",opacity:d.text?1:0,transition:"all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",position:"relative",paddingLeft:window.innerWidth<768?"0.5rem":"1rem",borderLeft:window.innerWidth<768?"2px solid #B79C5C":"2px solid transparent",borderImage:window.innerWidth>=768?"linear-gradient(135deg, #B79C5C, #3b82f6) 1":"none",textAlign:(window.innerWidth<768,"left")},ee={display:"grid",gridTemplateColumns:window.innerWidth<768?"repeat(auto-fit, minmax(120px, 1fr))":"repeat(3, 1fr)",gap:"clamp(1rem, 3vw, 2rem)",margin:"clamp(1.5rem, 3vw, 2rem) 0",transform:d.stats?"translateY(0) scale(1)":"translateY(20px) scale(0.8)",opacity:d.stats?1:0,animation:d.stats?"statsCounter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none"},g={textAlign:"center",padding:"clamp(0.8rem, 2vw, 1rem)",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(59, 130, 246, 0.1))",borderRadius:"clamp(8px, 2vw, 12px)",border:"1px solid rgba(183, 156, 92, 0.3)",backdropFilter:"blur(10px)",transition:"all 0.3s ease"},J={position:"relative",transform:d.image?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",opacity:d.image?1:0,animation:d.image?"imageReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",borderRadius:"clamp(12px, 3vw, 20px)",overflow:"hidden",width:"100%"},ae={width:"100%",height:"clamp(300px, 40vw, 500px)",objectFit:"cover",borderRadius:"clamp(12px, 3vw, 20px)",transition:"all 0.5s ease",filter:"brightness(0.9) contrast(1.1) saturate(1.1)"},ge={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(183, 156, 92, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",borderRadius:"clamp(12px, 3vw, 20px)",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"clamp(1.2rem, 3vw, 1.5rem)",fontWeight:"600",textShadow:"0 2px 10px rgba(0,0,0,0.7)",textAlign:"center",padding:"1rem"},ve={background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)",color:"white",fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"600",padding:"clamp(0.8rem 2rem, 2vw, 1rem 2.5rem)",borderRadius:"50px",border:"none",cursor:"pointer",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",marginTop:"clamp(1.5rem, 3vw, 2rem)",transform:d.button?"scale(1)":"scale(0.8)",opacity:d.button?1:0,animation:d.button?"buttonPulse 1s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",transition:"all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.3)",width:window.innerWidth<768?"100%":"auto",maxWidth:window.innerWidth<768?"300px":"none",margin:window.innerWidth<768?"clamp(1.5rem, 3vw, 2rem) auto 0 auto":"clamp(1.5rem, 3vw, 2rem) 0 0 0"};return i.jsxs("section",{ref:C,style:S,children:[H,i.jsx("div",{style:D,children:i.jsx("div",{style:B,children:window.innerWidth<1024?i.jsxs("div",{style:Y,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:oe}),i.jsxs("h2",{style:O,children:[i.jsx("span",{style:I(0),children:"About"}),i.jsx("span",{style:I(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((A,W)=>i.jsx("p",{style:{...q,transitionDelay:`${W*.15}s`},onMouseEnter:w=>{window.innerWidth>=768&&(w.currentTarget.style.borderLeft="2px solid #B79C5C",w.currentTarget.style.paddingLeft="1.5rem",w.currentTarget.style.color="#f3f4f6")},onMouseLeave:w=>{window.innerWidth>=768&&(w.currentTarget.style.borderLeft="2px solid transparent",w.currentTarget.style.paddingLeft="1rem",w.currentTarget.style.color="#e5e7eb")},children:A},W))}),i.jsx("div",{style:{..._,margin:"clamp(2rem, 4vw, 3rem) auto"},children:i.jsxs("div",{style:J,onMouseEnter:A=>{if(window.innerWidth>=768){A.currentTarget.style.transform="translateY(-10px) scale(1.02)";const W=A.currentTarget.querySelector(".image-overlay"),w=A.currentTarget.querySelector("img");W&&(W.style.opacity="1"),w&&(w.style.transform="scale(1.05)")}},onMouseLeave:A=>{if(window.innerWidth>=768){A.currentTarget.style.transform="translateY(0) scale(1)";const W=A.currentTarget.querySelector(".image-overlay"),w=A.currentTarget.querySelector("img");W&&(W.style.opacity="0"),w&&(w.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:ae}),i.jsx("div",{className:"image-overlay",style:ge,children:"Excellence in Construction"})]})}),i.jsx("div",{style:{position:"relative"},children:["We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.","At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."].map((A,W)=>i.jsx("p",{style:{...q,transitionDelay:`${(W+2)*.15}s`},onMouseEnter:w=>{window.innerWidth>=768&&(w.currentTarget.style.borderLeft="2px solid #B79C5C",w.currentTarget.style.paddingLeft="1.5rem",w.currentTarget.style.color="#f3f4f6")},onMouseLeave:w=>{window.innerWidth>=768&&(w.currentTarget.style.borderLeft="2px solid transparent",w.currentTarget.style.paddingLeft="1rem",w.currentTarget.style.color="#e5e7eb")},children:A},W+2))}),i.jsxs("div",{style:ee,children:[i.jsxs("div",{style:g,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-5px) scale(1.05)",A.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1)",A.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:g,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-5px) scale(1.05)",A.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1)",A.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:g,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-5px) scale(1.05)",A.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1)",A.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:ve,onClick:y||(()=>console.log("Get Started clicked")),onMouseEnter:A=>{A.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",A.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",A.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",A.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:Y,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:oe}),i.jsxs("h2",{style:O,children:[i.jsx("span",{style:I(0),children:"About"}),i.jsx("span",{style:I(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((A,W)=>i.jsx("p",{style:{...q,transitionDelay:`${W*.15}s`},onMouseEnter:w=>{window.innerWidth>=768&&(w.currentTarget.style.borderLeft="2px solid #B79C5C",w.currentTarget.style.paddingLeft="1.5rem",w.currentTarget.style.color="#f3f4f6")},onMouseLeave:w=>{window.innerWidth>=768&&(w.currentTarget.style.borderLeft="2px solid transparent",w.currentTarget.style.paddingLeft="1rem",w.currentTarget.style.color="#e5e7eb")},children:A},W))}),i.jsxs("div",{style:ee,children:[i.jsxs("div",{style:g,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-5px) scale(1.05)",A.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1)",A.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:g,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-5px) scale(1.05)",A.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1)",A.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:g,onMouseEnter:A=>{A.currentTarget.style.transform="translateY(-5px) scale(1.05)",A.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:A=>{A.currentTarget.style.transform="translateY(0) scale(1)",A.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:ve,onClick:y||(()=>console.log("Get Started clicked")),onMouseEnter:A=>{A.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",A.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",A.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",A.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}),i.jsx("div",{style:_,children:i.jsxs("div",{style:J,onMouseEnter:A=>{if(window.innerWidth>=768){A.currentTarget.style.transform="translateY(-10px) scale(1.02)";const W=A.currentTarget.querySelector(".image-overlay"),w=A.currentTarget.querySelector("img");W&&(W.style.opacity="1"),w&&(w.style.transform="scale(1.05)")}},onMouseLeave:A=>{if(window.innerWidth>=768){A.currentTarget.style.transform="translateY(0) scale(1)";const W=A.currentTarget.querySelector(".image-overlay"),w=A.currentTarget.querySelector("img");W&&(W.style.opacity="0"),w&&(w.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:ae}),i.jsx("div",{className:"image-overlay",style:ge,children:"Excellence in Construction"}),window.innerWidth>=768&&i.jsx("div",{style:{position:"absolute",top:"-10px",left:"-10px",right:"-10px",bottom:"-10px",border:"2px solid transparent",borderImage:"linear-gradient(135deg, #B79C5C, #3b82f6) 1",borderRadius:"25px",opacity:.5,animation:"borderGlow 3s ease-in-out infinite"}})]})})]})})})]})},o0=()=>{const y=v.useRef(null),[L,Q]=v.useState([]),[d,R]=v.useState(!1),[C,E]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const A=()=>E(window.innerWidth);return window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]),v.useEffect(()=>{const A=new IntersectionObserver(W=>{W.forEach(w=>{w.isIntersecting&&(w.target.classList.add("section-visible"),setTimeout(()=>R(!0),300),setTimeout(()=>{Q(ce=>[...Array(6).keys()])},1500))})},{threshold:.2});return y.current&&A.observe(y.current),()=>{y.current&&A.unobserve(y.current)}},[]);const S=[{title:"Residential Construction",icon:"🏠",description:"Premium home building with quality materials and expert craftsmanship for comfortable, durable living spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"},{title:"Commercial Projects",icon:"🏢",description:"Efficient construction of offices, retail spaces and industrial buildings with modern design and timely delivery.",gradient:"linear-gradient(135deg, #B79C5C 0%, #8B7355 100%)"},{title:"Property Renovation",icon:"🔨",description:"Complete property updates from minor repairs to major overhauls for both residential and commercial buildings.",gradient:"linear-gradient(135deg, #34495e 0%, #2c3e50 100%)"},{title:"Custom Design",icon:"📝",description:"Tailored architectural designs that perfectly balance aesthetics, functionality and client requirements.",gradient:"linear-gradient(135deg, #8B7355 0%, #B79C5C 100%)"},{title:"Interior Solutions",icon:"🎨",description:"Full-service interior design from concept to installation for beautiful, functional living and working spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #B79C5C 100%)"},{title:"Project Management",icon:"📊",description:"Comprehensive oversight of all construction phases ensuring quality, timeline adherence and budget management.",gradient:"linear-gradient(135deg, #B79C5C 0%, #34495e 100%)"}],H=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes float {
      0%, 100% { 
        transform: translateY(0) rotate(0deg) scale(1); 
        filter: blur(0px);
      }
      25% { 
        transform: translateY(-15px) rotate(2deg) scale(1.02); 
        filter: blur(0.5px);
      }
      50% { 
        transform: translateY(-25px) rotate(5deg) scale(1.05); 
        filter: blur(1px);
      }
      75% { 
        transform: translateY(-15px) rotate(3deg) scale(1.02); 
        filter: blur(0.5px);
      }
    }
    
    @keyframes subtitleReveal {
      0% {
        transform: translateY(40px) scale(0.8);
        opacity: 0;
        filter: blur(8px);
      }
      60% {
        transform: translateY(10px) scale(0.95);
        opacity: 0.7;
        filter: blur(2px);
      }
      100% {
        transform: translateY(0) scale(1);
        opacity: 1;
        filter: blur(0px);
      }
    }
  `,D={minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"6rem 0",position:"relative",overflow:"hidden"},B={position:"absolute",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",top:"10%",right:"-5%",animation:"float 6s ease-in-out infinite",zIndex:1},Y={position:"absolute",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",bottom:"20%",left:"-3%",animation:"float 8s ease-in-out infinite reverse",zIndex:1},_={maxWidth:C<=900?"100%":"1200px",margin:"0 auto",padding:C<=480?"0 1rem":C<=768?"0 1.5rem":"0 2rem",position:"relative",zIndex:2,display:C<=900?"flex":"block",flexDirection:C<=900?"column":"row",alignItems:C<=900?"center":"flex-start"},O={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px",width:C<=900?"100%":"auto",maxWidth:C<=900?"400px":"none"},I={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},oe=A=>({display:"inline-block",marginRight:"20px",opacity:d?1:0,transform:d?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+A*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),q={fontSize:"1.2rem",color:"#6c757d",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",transform:d?"translateY(0) scale(1)":"translateY(40px) scale(0.8)",opacity:d?1:0,animation:d?"subtitleReveal 1s ease-out 1.6s forwards":"none"},ee=()=>C<=480?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",marginTop:"4rem",width:"100%",maxWidth:"350px",margin:"4rem auto 0"}:C<=768?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"400px",margin:"4rem auto 0"}:C<=900?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"450px",margin:"4rem auto 0"}:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2.5rem",marginTop:"4rem"},g=(A,W)=>{const w=C<=344?"280px":C<=375?"300px":C<=390?"310px":C<=480?"320px":C<=768?"350px":C<=900?"380px":"100%";return{background:"linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))",borderRadius:"24px",padding:C<=480?"2rem":"2.5rem",position:"relative",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)",border:"1px solid rgba(183, 156, 92, 0.15)",backdropFilter:"blur(10px)",transform:W?"translateY(0) scale(1) rotateX(0)":"translateY(80px) scale(0.85) rotateX(15deg)",opacity:W?1:0,transition:"all 1s cubic-bezier(0.23, 1, 0.32, 1)",transitionDelay:`${A*.12}s`,cursor:"pointer",transformStyle:"preserve-3d",perspective:"1000px",width:C<=900?w:"100%",maxWidth:C<=900?w:"none",margin:C<=900?"0 auto":"0",flexShrink:C<=900?0:1}},J={width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",marginBottom:"1.5rem",position:"relative",zIndex:2},ae={fontSize:C<=480?"1.4rem":"1.6rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1.2rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",letterSpacing:"0.5px"},ge={color:"#495057",lineHeight:"1.8",fontSize:C<=480?"0.9rem":"1rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},ve={position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"24px",zIndex:1,background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",backdropFilter:"blur(20px)"};return v.useEffect(()=>{const A=document.createElement("style");return A.textContent=H,document.head.appendChild(A),()=>{document.head.contains(A)&&document.head.removeChild(A)}},[]),i.jsxs("section",{ref:y,style:D,children:[i.jsx("div",{style:B}),i.jsx("div",{style:Y}),i.jsxs("div",{style:_,children:[i.jsxs("div",{style:O,children:[i.jsxs("h2",{style:I,children:[i.jsx("span",{style:oe(0),children:"Our"}),i.jsx("span",{style:oe(1),children:"Premium"}),i.jsx("span",{style:oe(2),children:"Services"})]}),i.jsx("p",{style:q,children:"We provide a comprehensive range of construction services, from inception to completion. Every detail matters in transforming your vision into reality, creating spaces that inspire and endure."})]}),i.jsx("div",{style:ee(),children:S.map((A,W)=>i.jsxs("div",{style:g(W,L.includes(W)),onMouseEnter:w=>{if(C>768){w.currentTarget.style.transform="translateY(-20px) scale(1.05) rotateX(-5deg) rotateY(5deg)",w.currentTarget.style.boxShadow="0 35px 60px rgba(44, 62, 80, 0.15), 0 15px 25px rgba(183, 156, 92, 0.1)";const ce=w.currentTarget.querySelector(".card-overlay"),M=w.currentTarget.querySelector(".shimmer-effect"),K=w.currentTarget.querySelector(".card-title"),le=w.currentTarget.querySelector(".card-description"),X=w.currentTarget.querySelector(".icon-container");ce&&(ce.style.opacity="0.4",ce.style.background=A.gradient),M&&(M.style.opacity="1",M.style.transform="translateX(350px)"),K&&(K.style.color="#ffffff",K.style.textShadow="0 2px 4px rgba(0, 0, 0, 0.3)",K.style.transform="translateY(-2px)"),le&&(le.style.color="rgba(255, 255, 255, 0.9)",le.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.2)"),X&&(X.style.transform="scale(1.1) rotateY(180deg)",X.style.boxShadow="0 8px 25px rgba(0, 0, 0, 0.2)")}},onMouseLeave:w=>{if(C>768){w.currentTarget.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)",w.currentTarget.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)";const ce=w.currentTarget.querySelector(".card-overlay"),M=w.currentTarget.querySelector(".shimmer-effect"),K=w.currentTarget.querySelector(".card-title"),le=w.currentTarget.querySelector(".card-description"),X=w.currentTarget.querySelector(".icon-container");ce&&(ce.style.opacity="0"),M&&(M.style.opacity="0",M.style.transform="translateX(-350px)"),K&&(K.style.color="#2c3e50",K.style.textShadow="none",K.style.transform="translateY(0)"),le&&(le.style.color="#495057",le.style.textShadow="none"),X&&(X.style.transform="scale(1) rotateY(0deg)",X.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)")}},children:[i.jsx("div",{className:"card-overlay",style:ve}),i.jsx("div",{className:"shimmer-effect",style:{position:"absolute",top:0,left:"-350px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",transform:"skewX(-20deg)",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:0,zIndex:2}}),i.jsx("div",{className:"icon-container",style:{...J,background:A.gradient,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)"},children:i.jsx("span",{style:{filter:"brightness(0) invert(1)",transition:"all 0.3s ease",display:"block"},children:A.icon})}),i.jsx("h3",{className:"card-title",style:ae,children:A.title}),i.jsx("p",{className:"card-description",style:ge,children:A.description})]},W))})]})]})},c0=({openPopup:y})=>{const[L,Q]=v.useState({}),[d,R]=v.useState(!1),C=v.useRef(null),E=v.useRef(null);v.useEffect(()=>{const B=new IntersectionObserver(Y=>{Y.forEach(_=>{_.isIntersecting&&(R(!0),_.target.classList.add("section-visible"),E.current&&E.current.classList.add("heading-visible"))})},{threshold:.1});return C.current&&B.observe(C.current),()=>{C.current&&B.unobserve(C.current)}},[]);const S=[{id:"basic",name:"Basic Package",price:"RS.1600/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"premium",name:"Premium Package",price:"RS.1800/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"luxury",name:"Luxury Package",price:"RS.2150/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]}],H=(B,Y)=>{Q(_=>({..._,[B]:_[B]===Y?null:Y}))},D=y||(()=>alert("Package selected!"));return i.jsxs("section",{id:"pricing",className:"pricing-section",ref:C,children:[i.jsxs("div",{className:"animated-bg",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape square-2"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:`heading-container ${d?"heading-visible":""}`,ref:E,children:[i.jsx("h1",{className:"main-heading",children:"OUR PRICING"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"Choose the perfect package that suits your needs and budget"})]})}),i.jsx("div",{className:"pricing-container",children:S.map((B,Y)=>i.jsxs("div",{className:`pricing-card ${B.id}`,style:{animationDelay:`${.2*Y}s`},children:[i.jsxs("div",{className:"pricing-header",children:[i.jsx("h3",{children:B.name}),i.jsx("div",{className:"price",children:B.price})]}),i.jsx("div",{className:"pricing-features",children:B.features.map((_,O)=>i.jsxs("div",{className:"feature",children:[i.jsxs("div",{className:"feature-name",onClick:()=>H(B.id,O),children:[_,i.jsx("span",{className:`arrow ${L[B.id]===O?"rotated":""}`,children:"›"})]}),i.jsx("div",{className:`feature-details ${L[B.id]===O?"show":""}`,children:i.jsxs("p",{children:["More details about ",_.toLowerCase()," for the ",B.name,". This includes premium quality materials and professional installation."]})})]},O))}),i.jsx("button",{onClick:D,className:"btn btn-pricing",children:"Select Package"})]},Y))})]}),i.jsx("style",{jsx:!0,children:`
        .pricing-section {
          padding: 5rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
        }

        /* Animated Background */
        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #007bff, #00aaff);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 6s ease-in-out infinite;
        }

        .circle-2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #00aaff, #00d4ff);
          border-radius: 50%;
          top: 60%;
          right: 15%;
          animation: float 8s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          bottom: 20%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #007bff, #00aaff);
          top: 30%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .square-2 {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #00d4ff, #007bff);
          bottom: 40%;
          right: 30%;
          animation: float 9s ease-in-out infinite, rotate 15s linear infinite reverse;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(0, 123, 255, 0.3);
          top: 80%;
          left: 70%;
          animation: float 5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .heading-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 1rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, transparent);
          margin: 0 auto;
          transition: width 1.5s ease;
        }
        
        .heading-visible .heading-underline {
          width: 100px;
        }
        
        .heading-subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
          color: #007bff;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.5s;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .pricing-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .pricing-card {
          flex: 1;
          min-width: 280px;
          max-width: 350px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          opacity: 0;
          transform: translateY(30px);
          animation: cardAppear 0.8s forwards;
          position: relative;
          z-index: 3;
        }
        
        .pricing-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.2);
        }
        
        .pricing-card.basic {
          border-top: 4px solid #007bff;
        }
        
        .pricing-card.premium {
          border-top: 4px solid #00aaff;
        }
        
        .pricing-card.luxury {
          border-top: 4px solid #00d4ff;
        }
        
        @keyframes cardAppear {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .pricing-header {
          text-align: center;
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pricing-header h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        
        .price {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
        }
        
        .pricing-features {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        
        .feature {
          margin-bottom: 0.75rem;
          position: relative;
        }
        
        .feature-name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          cursor: pointer;
          color: #ffffff;
          transition: color 0.3s ease;
          user-select: none;
        }
        
        .feature-name:hover {
          color: #007bff;
        }
        
        .arrow {
          color: #ffffff;
          font-size: 1rem;
          font-weight: bold;
          transition: transform 0.3s ease;
          transform: rotate(90deg);
          display: inline-block;
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
        }
        
        .arrow.rotated {
          transform: rotate(270deg);
        }
        
        .feature-details {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          padding: 0 0.75rem;
          background-color: rgba(0, 123, 255, 0.1);
          border-radius: 5px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        
        .feature-details.show {
          max-height: 200px;
          opacity: 1;
          padding: 0.75rem;
        }
        
        .feature-details p {
          margin: 0;
          line-height: 1.5;
        }
        
        .btn-pricing {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          align-self: center;
          font-size: 0.9rem;
        }
        
        .btn-pricing:hover {
          background-color: #0056b3;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }
        
        @media (max-width: 992px) {
          .pricing-container {
            gap: 1.5rem;
          }
          .main-heading {
            font-size: 2.2rem;
          }
          .floating-shape {
            opacity: 0.05;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-card {
            flex-basis: calc(50% - 1.5rem);
            min-width: 250px;
          }
          .main-heading {
            font-size: 2rem;
          }
          .heading-container {
            opacity: 1;
            transform: translateY(0);
          }
          .pricing-section {
            padding: 3rem 0;
          }
        }
        
        @media (max-width: 576px) {
          .pricing-card {
            flex-basis: 100%;
            min-width: unset;
            margin: 0 10px;
          }
          .main-heading {
            font-size: 1.8rem;
          }
          .heading-subtitle {
            font-size: 1rem;
          }
          .container {
            padding: 0 15px;
          }
        }

        @media (max-width: 480px) {
          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
          .pricing-card {
            padding: 1.5rem;
          }
          .floating-shape {
            display: none;
          }
        }
      `})]})},co=()=>{const y=v.useRef(null),[L,Q]=v.useState(!1);v.useEffect(()=>{const B=y.current,Y=()=>{const _=window.scrollY,O=B.getBoundingClientRect().top+window.scrollY;if(_>O-window.innerHeight&&_<O+B.offsetHeight){const I=(_-(O-window.innerHeight))*.5;B.style.transform=`translateX(-${I}px)`}};return window.addEventListener("scroll",Y),()=>{window.removeEventListener("scroll",Y)}},[]);const d=`
    @keyframes subtleGradient {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes elegantFade {
      0%, 100% {
        opacity: 0.3;
      }
      50% {
        opacity: 0.6;
      }
    }

    @keyframes professionalFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    @keyframes textElegance {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }

    @keyframes subtleOverlay {
      0%, 100% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.3;
      }
    }
  `;v.useEffect(()=>{const B=document.createElement("style");return B.textContent=d,document.head.appendChild(B),()=>{document.head.contains(B)&&document.head.removeChild(B)}},[]);const R={background:`
      linear-gradient(135deg, 
        #1e3a8a 0%, 
        #2563eb 30%, 
        rgba(183, 156, 92, 0.8) 60%, 
        #1d4ed8 100%
      )
    `,backgroundSize:"300% 300%",animation:"subtleGradient 12s ease-in-out infinite",padding:"1.5rem 0",overflow:"hidden",position:"relative",minHeight:"100px",display:"flex",alignItems:"center",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.15)"},C=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"20%",right:"10%",width:"120px",height:"120px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(255, 255, 255, 0.05))",borderRadius:"50%",animation:"professionalFloat 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"5%",width:"80px",height:"80px",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.05))",borderRadius:"50%",animation:"professionalFloat 10s ease-in-out infinite reverse",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
            radial-gradient(circle at 30% 30%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,animation:"subtleOverlay 15s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.6), transparent)",zIndex:2}}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)",zIndex:2}})]}),E={width:"100%",height:"80px",overflow:"hidden",whiteSpace:"nowrap",position:"relative",zIndex:3,display:"flex",alignItems:"center"},S={display:"inline-block",whiteSpace:"nowrap",willChange:"transform"},H={display:"inline-block",marginRight:"60px",fontSize:"2.2rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"2px",color:"#ffffff",textShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",position:"relative"},D={color:"rgba(183, 156, 92, 1)",fontWeight:"800",textShadow:"0 2px 8px rgba(183, 156, 92, 0.4)",position:"relative"};return i.jsxs("section",{style:R,children:[C,i.jsx("div",{style:E,children:i.jsx("div",{style:S,ref:y,children:Array(12).fill().map((B,Y)=>i.jsxs("span",{style:H,children:["BOOK NOW"," ",i.jsx("span",{style:D,children:"BOOK NOW"})]},Y))})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
            linear-gradient(90deg, 
              rgba(0, 0, 0, 0.05) 0%, 
              transparent 50%, 
              rgba(0, 0, 0, 0.05) 100%
            )
          `,zIndex:2,pointerEvents:"none"}}),i.jsx("style",{jsx:!0,children:`
        @media (max-width: 768px) {
          .banner-text {
            font-size: 1.8rem !important;
            margin-right: 40px !important;
            letter-spacing: 1.5px !important;
          }
          
          .banner-content {
            height: 60px !important;
          }
        }

        @media (max-width: 480px) {
          .banner-text {
            font-size: 1.4rem !important;
            margin-right: 30px !important;
            letter-spacing: 1px !important;
          }
        }
      `})]})},uo=()=>{const y=v.useRef(null),[L,Q]=v.useState([]),[d,R]=v.useState(!1),[C,E]=v.useState(!1),[S,H]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const M=()=>{H(window.innerWidth)};return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]),v.useEffect(()=>{const M=new IntersectionObserver(K=>{K.forEach(le=>{le.isIntersecting&&(R(!0),setTimeout(()=>E(!0),300),setTimeout(()=>Q([0]),1e3),setTimeout(()=>Q([0,1]),1200),setTimeout(()=>Q([0,1,2]),1400))})},{threshold:.2});return y.current&&M.observe(y.current),()=>{y.current&&M.unobserve(y.current)}},[]);const D=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardFadeUp {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    /* Mobile-specific animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes cardFadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;v.useEffect(()=>{const M=document.createElement("style");return M.textContent=D,document.head.appendChild(M),()=>{document.head.contains(M)&&document.head.removeChild(M)}},[]);const B=[{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",title:"Consultation & Planning",description:"Strategic consultation meets architectural innovation. We decode your vision into precision blueprints with cutting-edge planning methodologies.",number:"01",color:"#e74c3c"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",title:"Design & Development",description:"Where creativity meets engineering excellence. Our design studio transforms concepts into revolutionary architectural solutions.",number:"02",color:"#3498db"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",title:"Construction & Handover",description:"Precision construction powered by advanced technology. From foundation to final handover, excellence in every detail.",number:"03",color:"#2ecc71"}],Y={padding:S<768?"4rem 0":"8rem 0",background:`
      linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(44, 62, 80, 0.08) 0%, transparent 50%)
    `,position:"relative",overflow:"hidden",color:"#2c3e50"},_={maxWidth:"1600px",margin:"0 auto",padding:S<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},O={textAlign:"center",marginBottom:S<768?"3rem":"6rem",position:"relative",perspective:"1000px"},I={fontSize:S<480?"2.2rem":S<768?"2.8rem":S<1024?"3.5rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:S<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px"},oe=M=>({display:"inline-block",marginRight:S<768?"10px":"20px",opacity:C?1:0,transform:C?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:C?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+M*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),q={fontSize:S<480?"1rem":S<768?"1.2rem":"1.4rem",color:"#64748b",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",padding:S<768?"0 1rem":"0",opacity:C?1:0,animation:C?"subtitleFadeUp 1s ease-out forwards 1.2s":"none"},ee={display:"grid",gridTemplateColumns:S<768?"1fr":S<1024?"repeat(auto-fit, minmax(300px, 1fr))":"repeat(3, 1fr)",gap:S<480?"2rem":S<768?"2.5rem":"3rem",marginTop:S<768?"2rem":"4rem",position:"relative"},g=(M,K)=>({position:"relative",background:"rgba(255, 255, 255, 0.9)",borderRadius:S<768?"20px":"24px",padding:S<480?"2rem 1rem":S<768?"2.5rem 1.5rem":"3rem 2rem",margin:S<768?"0 auto":"0",maxWidth:S<768?"400px":"none",width:"100%",border:"1px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",backdropFilter:"blur(10px)",transform:K?"translateY(0) scale(1)":"translateY(40px) scale(0.95)",opacity:K?1:0,animation:K?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${M*.15}s`:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",overflow:"hidden"}),J={position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",width:S<480?"45px":S<768?"50px":"60px",height:S<480?"45px":S<768?"50px":"60px",borderRadius:"50%",background:"linear-gradient(135deg, #B79C5C, #2c3e50)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:S<480?"1rem":S<768?"1.2rem":"1.4rem",fontWeight:"800",color:"#ffffff",border:"3px solid rgba(255, 255, 255, 0.9)",zIndex:3,boxShadow:"0 8px 25px rgba(44, 62, 80, 0.3)",transition:"all 0.3s ease"},ae={width:S<480?"70px":S<768?"80px":"100px",height:S<480?"70px":S<768?"80px":"100px",margin:S<768?"1.5rem auto":"2rem auto",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(183, 156, 92, 0.3)",boxShadow:"0 8px 25px rgba(44, 62, 80, 0.1)",position:"relative",transition:"all 0.3s ease"},ge={width:"50%",height:"50%",objectFit:"contain",filter:"brightness(1.1) contrast(1.1)",transition:"all 0.3s ease"},ve={textAlign:"center",position:"relative",zIndex:2},A={fontSize:S<480?"1.2rem":S<768?"1.3rem":"1.5rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1rem",letterSpacing:"0.5px",lineHeight:"1.3",transition:"all 0.3s ease"},W={fontSize:S<480?"0.9rem":S<768?"0.95rem":"1rem",color:"#64748b",lineHeight:"1.6",transition:"all 0.3s ease"},w=i.jsx(i.Fragment,{children:S>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 6s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(44, 62, 80, 0.05)",borderRadius:"30%",animation:"backgroundFloat 8s ease-in-out infinite reverse",zIndex:1}})]})}),ce=(M,K)=>{if(S<768)return;const le=M.currentTarget,X=le.querySelector(".number-container"),$=le.querySelector(".icon-container"),b=le.querySelector(".step-icon"),T=le.querySelector(".step-title"),V=le.querySelector(".step-description");K?(le.style.transform="translateY(-15px) scale(1.02)",le.style.boxShadow="0 25px 50px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2)",le.style.borderColor="rgba(183, 156, 92, 0.4)",X&&(X.style.transform="translateX(-50%) scale(1.1)",X.style.background="linear-gradient(135deg, #2c3e50, #B79C5C)"),$&&($.style.transform="scale(1.1)",$.style.borderColor="rgba(183, 156, 92, 0.5)",$.style.background="rgba(255, 255, 255, 0.95)"),b&&(b.style.transform="scale(1.2)",b.style.filter="brightness(1.3) contrast(1.2)"),T&&(T.style.color="#B79C5C"),V&&(V.style.color="#2c3e50")):(le.style.transform="translateY(0) scale(1)",le.style.boxShadow="0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",le.style.borderColor="rgba(183, 156, 92, 0.2)",X&&(X.style.transform="translateX(-50%) scale(1)",X.style.background="linear-gradient(135deg, #B79C5C, #2c3e50)"),$&&($.style.transform="scale(1)",$.style.borderColor="rgba(183, 156, 92, 0.3)",$.style.background="rgba(255, 255, 255, 0.8)"),b&&(b.style.transform="scale(1)",b.style.filter="brightness(1.1) contrast(1.1)"),T&&(T.style.color="#2c3e50"),V&&(V.style.color="#64748b"))};return i.jsxs("section",{style:Y,ref:y,children:[w,i.jsxs("div",{style:_,children:[i.jsxs("div",{style:O,children:[i.jsxs("h2",{style:I,children:[i.jsx("span",{style:oe(0),children:"How"}),i.jsx("span",{style:oe(1),children:"We"}),i.jsx("span",{style:oe(2),children:"Work?"})]}),i.jsx("p",{style:q,children:"Revolutionary construction methodology powered by cutting-edge technology and architectural innovation"})]}),i.jsx("div",{style:ee,children:B.map((M,K)=>{const le=L.includes(K);return i.jsxs("div",{style:g(K,le),onMouseEnter:X=>ce(X,!0),onMouseLeave:X=>ce(X,!1),onTouchStart:X=>{S<768&&(X.currentTarget.style.transform="scale(0.98)")},onTouchEnd:X=>{S<768&&(X.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{style:J,className:"number-container",children:M.number}),i.jsx("div",{className:"icon-container",style:ae,children:i.jsx("img",{src:M.icon,alt:M.title,style:ge,className:"step-icon"})}),i.jsxs("div",{style:ve,children:[i.jsx("h3",{style:A,className:"step-title",children:M.title}),i.jsx("p",{style:W,className:"step-description",children:M.description})]})]},K)})})]})]})};function lp(y){return Zl({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(y)}function rp(y){return Zl({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(y)}function sp(y){return Zl({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(y)}function op(y){return Zl({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"},child:[]}]})(y)}const fo=()=>{const y=v.useRef(null),L=v.useRef([]),Q=v.useRef(null),[d,R]=v.useState(!1),[C,E]=v.useState([]),[S,H]=v.useState(!1),[D,B]=v.useState(typeof window<"u"?window.innerWidth:1200),Y=D<480?24:D<768?28:36;v.useEffect(()=>{const X=()=>{B(window.innerWidth)};return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[]),v.useEffect(()=>{const X=new IntersectionObserver($=>{$.forEach(b=>{b.isIntersecting&&(R(!0),b.target.classList.add("section-visible"),setTimeout(()=>H(!0),300),setTimeout(()=>_(),1e3),setTimeout(()=>E([0]),1600),setTimeout(()=>E([0,1]),1700),setTimeout(()=>E([0,1,2]),1800),setTimeout(()=>E([0,1,2,3]),1900))})},{threshold:.3});return y.current&&X.observe(y.current),()=>{y.current&&X.unobserve(y.current)}},[]);const _=()=>{L.current.forEach(($,b)=>{if(!$)return;const T=parseInt($.getAttribute("data-target")),fe=T/(2500/50);let me=0;setTimeout(()=>{const Ne=()=>{me+=fe,me<T?($.textContent=Math.ceil(me),setTimeout(Ne,50)):$.textContent=T};Ne()},b*200)})},O=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg) scale(0.8);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardFadeUp {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes underlineExpand {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 150px;
        opacity: 1;
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
    }

    /* Mobile-specific animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes cardFadeUp {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.98);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;v.useEffect(()=>{const X=document.createElement("style");return X.textContent=O,document.head.appendChild(X),()=>{document.head.contains(X)&&document.head.removeChild(X)}},[]);const I=[{icon:i.jsx(sp,{size:Y,color:"#B79C5C"}),value:15,suffix:"+",label:"YEARS LEGACY"},{icon:i.jsx(rp,{size:Y,color:"#3498db"}),value:12,suffix:"+",label:"LAKHS SQ.FT DELIVERED"},{icon:i.jsx(lp,{size:Y,color:"#B79C5C"}),value:60,suffix:"+",label:"PROJECTS DELIVERED"},{icon:i.jsx(op,{size:Y,color:"#3498db"}),value:4,suffix:"",label:"CITIES",subtext:"Bangalore, Mangalore, Hyderabad, Chennai"}],oe={padding:D<768?"4rem 0":"6rem 0",background:`
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
    `,color:"#ffffff",overflow:"hidden",position:"relative"},q={maxWidth:"1400px",margin:"0 auto",padding:D<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},ee={textAlign:"center",marginBottom:D<768?"3rem":"5rem",position:"relative",perspective:"1000px"},g={fontSize:D<480?"1.9rem":D<768?"2.3rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:D<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px",textTransform:"uppercase",letterSpacing:D<480?"1px":"3px"},J=X=>({display:"inline-block",marginRight:D<768?"10px":"20px",opacity:S?1:0,transform:S?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #ffffff 0%, #B79C5C 50%, #ffffff 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:S?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+X*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),ae={fontSize:D<768?"1.1rem":"1.3rem",color:"#B79C5C",opacity:S?.9:0,animation:S?"subtitleFadeUp 1s ease-out forwards 1.2s":"none",letterSpacing:"1px",textTransform:"uppercase"},ge={height:"4px",background:"linear-gradient(90deg, transparent, #B79C5C, transparent)",margin:"1rem auto",borderRadius:"2px",boxShadow:S?"0 0 20px rgba(183, 156, 92, 0.5)":"none",animation:S?"underlineExpand 1.5s ease-out forwards 1.4s":"none",width:"0"},ve={display:"grid",gridTemplateColumns:D<768||D<1200?"repeat(2, 1fr)":"repeat(4, 1fr)",gridTemplateRows:D<768?"repeat(2, 1fr)":"auto",gap:D<480?"1rem":D<768?"1.5rem":"2rem",marginTop:D<768?"2rem":"4rem",maxWidth:D<768?"400px":"1200px",margin:`${D<768?"2rem":"4rem"} auto 0`,padding:D<768?"0 0.5rem":"0"},A=(X,$)=>({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"rgba(30, 30, 30, 0.8)",borderRadius:D<768?"16px":"20px",padding:D<480?"1.2rem 0.8rem":D<768?"1.5rem 1rem":"2rem 1.5rem",border:`1px solid ${X%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)"}`,position:"relative",overflow:"hidden",cursor:"pointer",transform:$?"translateY(0) scale(1)":"translateY(30px) scale(0.95)",opacity:$?1:0,animation:$?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${X*.1}s`:"none",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",minHeight:D<480?"160px":D<768?"180px":"280px",backdropFilter:"blur(10px)",boxShadow:`0 15px 35px ${X%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`}),W=X=>({width:D<480?"50px":D<768?"60px":"90px",height:D<480?"50px":D<768?"60px":"90px",marginBottom:D<768?"1rem":"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(40, 40, 40, 0.8)",borderRadius:"50%",border:`2px solid ${X%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)"}`,position:"relative",boxShadow:`0 10px 25px ${X%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 5px 15px rgba(0, 0, 0, 0.4)`,transition:"all 0.3s ease"}),w=X=>({color:X%2===0?"#B79C5C":"#3498db",transition:"all 0.3s ease",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",display:"flex",alignItems:"center",justifyContent:"center",width:D<480?"1.5rem":D<768?"1.8rem":"2.5rem",height:D<480?"1.5rem":D<768?"1.8rem":"2.5rem"}),ce=X=>({fontSize:D<480?"1.8rem":D<768?"2.2rem":"2.8rem",fontWeight:"900",marginBottom:"0.5rem",background:`linear-gradient(135deg, #ffffff, ${X%2===0?"#B79C5C":"#3498db"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"1px",transition:"all 0.3s ease"}),M={fontSize:D<480?"0.7rem":D<768?"0.8rem":"0.9rem",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.9)",letterSpacing:"0.5px",lineHeight:"1.3",fontWeight:"600",transition:"all 0.3s ease"},K=i.jsx(i.Fragment,{children:D>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(52, 152, 219, 0.05)",borderRadius:"30%",animation:"backgroundFloat 10s ease-in-out infinite reverse",zIndex:1}})]})}),le=(X,$,b)=>{if(D<768)return;const T=X.currentTarget,V=T.querySelector(".record-icon"),fe=T.querySelector(".icon-svg"),me=T.querySelector(".record-value"),Ne=T.querySelector(".record-label");b?(T.style.transform="translateY(-15px) scale(1.05)",T.style.boxShadow=`0 25px 50px ${$%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 15px 30px rgba(0, 0, 0, 0.4)`,T.style.borderColor=$%2===0?"rgba(183, 156, 92, 0.6)":"rgba(52, 152, 219, 0.6)",V&&(V.style.transform="scale(1.15)",V.style.borderColor=$%2===0?"rgba(183, 156, 92, 0.8)":"rgba(52, 152, 219, 0.8)",V.style.background="rgba(50, 50, 50, 0.9)"),fe&&(fe.style.transform="scale(1.2)",fe.style.filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))"),me&&(me.style.transform="scale(1.1)"),Ne&&(Ne.style.color=$%2===0?"#B79C5C":"#3498db")):(T.style.transform="translateY(0) scale(1)",T.style.boxShadow=`0 15px 35px ${$%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`,T.style.borderColor=$%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)",V&&(V.style.transform="scale(1)",V.style.borderColor=$%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)",V.style.background="rgba(40, 40, 40, 0.8)"),fe&&(fe.style.transform="scale(1)",fe.style.filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"),me&&(me.style.transform="scale(1)"),Ne&&(Ne.style.color="rgba(255, 255, 255, 0.9)"))};return i.jsxs("section",{style:oe,ref:y,children:[K,i.jsxs("div",{style:q,children:[i.jsx("div",{style:ee,children:i.jsxs("div",{ref:Q,children:[i.jsxs("h1",{style:g,children:[i.jsx("span",{style:J(0),children:"Our"}),i.jsx("span",{style:J(1),children:"Track"}),i.jsx("span",{style:J(2),children:"Record"})]}),i.jsx("div",{style:ge}),i.jsx("p",{style:ae,children:"Excellence in Numbers"})]})}),i.jsx("div",{style:ve,children:I.map((X,$)=>{const b=C.includes($);return i.jsxs("div",{style:A($,b),onMouseEnter:T=>le(T,$,!0),onMouseLeave:T=>le(T,$,!1),onTouchStart:T=>{D<768&&(T.currentTarget.style.transform="scale(0.98)")},onTouchEnd:T=>{D<768&&(T.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{className:"record-icon",style:W($),children:i.jsx("div",{className:"icon-svg",style:w($),children:X.icon})}),i.jsxs("div",{className:"record-detail",children:[i.jsxs("h3",{className:"record-value",style:ce($),children:[i.jsx("span",{ref:T=>{T&&(L.current[$]=T)},"data-target":X.value,children:"0"}),X.suffix]}),i.jsx("h5",{className:"record-label",style:M,children:X.label}),X.subtext&&i.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.8)",marginTop:"0.5rem",textAlign:"center",fontWeight:"400",lineHeight:"1.4"},children:X.subtext})]})]},$)})})]})]})},d0=()=>{const[y,L]=v.useState(0),[Q,d]=v.useState(!1),[R,C]=v.useState(!1),E=v.useRef(null),S=v.useRef(null),H=[{id:1,name:"Sangeeta Reddy",role:"Homeowner",testimonial:"Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!",rating:5,project:"Villa Construction"},{id:2,name:"Anusha Patel",role:"Property Owner",testimonial:"I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline.",rating:5,project:"Apartment Renovation"},{id:3,name:"Manoj Sharma",role:"Client",testimonial:"What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!",rating:5,project:"Custom Home Design"}],D={"--primary-color":"#2c3e50","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--secondary-color":"#f8f9fa","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},B=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(100px) rotateX(90deg) scale(0.5);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes cardSlideIn {
      0% {
        opacity: 0;
        transform: translateY(100px) scale(0.8);
        filter: blur(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes avatarPulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(183, 156, 92, 0.3);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(183, 156, 92, 0.5);
      }
    }

    @keyframes floatAnimation {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes starTwinkle {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.1);
      }
    }

    @keyframes underlineExpand {
      0% {
        width: 0;
        opacity: 0;
      }
      100% {
        width: 80px;
        opacity: 1;
      }
    }

    @keyframes backgroundShift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes cardHover {
      0% {
        transform: translateY(0) scale(1) rotateX(0deg);
      }
      100% {
        transform: translateY(-10px) scale(1.02) rotateX(-2deg);
      }
    }
  `;v.useEffect(()=>{const G=document.createElement("style");return G.textContent=B,document.head.appendChild(G),()=>{document.head.contains(G)&&document.head.removeChild(G)}},[]);const Y=()=>{L(G=>(G+1)%H.length)},_=()=>{L(G=>(G-1+H.length)%H.length)};v.useEffect(()=>{const G=new IntersectionObserver(de=>{de.forEach(j=>{j.isIntersecting&&(d(!0),j.target.classList.add("section-visible"),setTimeout(()=>C(!0),300))})},{threshold:.3});return S.current&&G.observe(S.current),E.current=setInterval(()=>{Y()},6e3),()=>{E.current&&clearInterval(E.current),S.current&&G.unobserve(S.current)}},[]);const O=G=>{L(G),E.current&&clearInterval(E.current),E.current=setInterval(()=>{Y()},6e3)},I={...D,padding:"6rem 0",background:`
      linear-gradient(135deg, var(--light-color) 0%, var(--secondary-color) 50%, var(--light-color) 100%),
      radial-gradient(circle at 20% 80%, rgba(183, 156, 92, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
    `,backgroundSize:"400% 400%",animation:Q?"backgroundShift 15s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},oe={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},q={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px"},ee={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px",position:"relative",display:"inline-block"},g=G=>({display:"inline-block",marginRight:"20px",opacity:R?1:0,transform:R?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:R?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+G*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),J={position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",height:"4px",background:"linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color))",borderRadius:"2px",animation:R?"underlineExpand 1s ease-out forwards 1.6s":"none",width:"0"},ae={fontSize:"1.1rem",color:"var(--text-color)",opacity:R?1:0,animation:R?"cardSlideIn 1s ease-out forwards 1.8s":"none"},ge={maxWidth:"900px",margin:"0 auto",position:"relative",overflow:"hidden",borderRadius:"var(--border-radius)",perspective:"1000px"},ve={display:"flex",transition:"transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",transform:`translateX(-${y*100}%)`},A={flex:"0 0 100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 2rem",background:`
      linear-gradient(135deg, var(--light-color) 0%, rgba(248, 249, 250, 0.8) 100%),
      linear-gradient(45deg, rgba(183, 156, 92, 0.03), rgba(44, 62, 80, 0.03))
    `,borderRadius:"var(--border-radius)",boxShadow:"0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)",border:"1px solid rgba(183, 156, 92, 0.1)",position:"relative",overflow:"hidden",transition:"var(--transition)",cursor:"pointer"},W={width:"100px",height:"100px",borderRadius:"50%",background:`
      linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1)),
      var(--light-color)
    `,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem",color:"var(--primary-color)",border:"4px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.2)",animation:Q?"avatarPulse 3s ease-in-out infinite, floatAnimation 4s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},w={width:"50px",height:"50px",color:"var(--accent-color)",zIndex:2},ce={textAlign:"center",position:"relative",zIndex:2},M={fontSize:"1.5rem",fontWeight:"700",color:"var(--primary-color)",marginBottom:"0.5rem"},K={fontSize:"0.9rem",color:"var(--accent-color)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"600"},le={display:"flex",justifyContent:"center",gap:"0.3rem",marginBottom:"1.5rem"},X={width:"20px",height:"20px",color:"#ffd700",animation:"starTwinkle 2s ease-in-out infinite",animationDelay:G=>`${G*.2}s`},$={fontSize:"1.1rem",fontStyle:"italic",color:"var(--text-color)",lineHeight:"1.8",position:"relative",padding:"0 2rem",marginBottom:"1rem"},b={fontSize:"0.9rem",color:"var(--accent-color)",fontWeight:"600",padding:"0.5rem 1rem",background:"rgba(183, 156, 92, 0.1)",borderRadius:"20px",border:"1px solid rgba(183, 156, 92, 0.2)"},T={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"3rem",gap:"2rem"},V={background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",border:"none",width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",transition:"var(--transition)",boxShadow:"0 5px 15px rgba(183, 156, 92, 0.3)"},fe={display:"flex",alignItems:"center",gap:"0.8rem"},me=G=>({width:"12px",height:"12px",borderRadius:"50%",background:G===y?"var(--accent-color)":"rgba(183, 156, 92, 0.3)",border:"none",cursor:"pointer",transition:"var(--transition)",transform:G===y?"scale(1.3)":"scale(1)",boxShadow:G===y?"0 0 10px rgba(183, 156, 92, 0.5)":"none"}),Ne=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.05), rgba(44, 62, 80, 0.05))",borderRadius:"50%",animation:"floatAnimation 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(183, 156, 92, 0.05))",borderRadius:"30%",animation:"floatAnimation 10s ease-in-out infinite reverse",zIndex:1}})]});return i.jsxs("section",{style:I,ref:S,children:[Ne,i.jsxs("div",{style:oe,children:[i.jsxs("div",{style:q,children:[i.jsxs("h2",{style:ee,children:[i.jsx("span",{style:g(0),children:"What"}),i.jsx("span",{style:g(1),children:"Our"}),i.jsx("span",{style:g(2),children:"Clients"}),i.jsx("span",{style:g(3),children:"Say"}),i.jsx("div",{style:J})]}),i.jsx("p",{style:ae,children:"Trusted by hundreds of satisfied customers across multiple cities"})]}),i.jsxs("div",{style:ge,children:[i.jsx("div",{style:ve,children:H.map((G,de)=>i.jsxs("div",{style:A,onMouseEnter:j=>{j.currentTarget.style.transform="translateY(-10px) scale(1.02) rotateX(-2deg)",j.currentTarget.style.boxShadow="0 25px 50px rgba(183, 156, 92, 0.15), 0 10px 25px var(--shadow-color)"},onMouseLeave:j=>{j.currentTarget.style.transform="translateY(0) scale(1) rotateX(0deg)",j.currentTarget.style.boxShadow="0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)"},children:[i.jsxs("div",{style:W,children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",style:w,children:i.jsx("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
                      linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(183, 156, 92, 0.1) 50%, 
                        transparent 70%
                      )
                    `,backgroundSize:"200% 200%",animation:"backgroundShift 3s linear infinite",borderRadius:"50%",zIndex:1}})]}),i.jsxs("div",{style:ce,children:[i.jsx("h4",{style:M,children:G.name}),i.jsx("p",{style:K,children:G.role}),i.jsx("div",{style:le,children:[...Array(G.rating)].map((j,F)=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",style:{...X,animationDelay:`${F*.2}s`},children:i.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})},F))}),i.jsxs("blockquote",{style:$,children:['"',G.testimonial,'"']}),i.jsx("div",{style:b,children:G.project})]}),i.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:"100px",height:"100px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.03), transparent)",pointerEvents:"none"}})]},de))}),i.jsxs("div",{style:T,children:[i.jsx("button",{style:V,onClick:_,onMouseEnter:G=>{G.currentTarget.style.transform="scale(1.1) rotateZ(-5deg)",G.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:G=>{G.currentTarget.style.transform="scale(1) rotateZ(0deg)",G.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"})})}),i.jsx("div",{style:fe,children:H.map((G,de)=>i.jsx("button",{style:me(de),onClick:()=>O(de)},de))}),i.jsx("button",{style:V,onClick:Y,onMouseEnter:G=>{G.currentTarget.style.transform="scale(1.1) rotateZ(5deg)",G.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:G=>{G.currentTarget.style.transform="scale(1) rotateZ(0deg)",G.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"})})})]})]})]}),i.jsx("style",{jsx:!0,children:`
        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem !important;
          }
          
          .testimonial-card {
            padding: 2rem 1.5rem !important;
          }
          
          .avatar {
            width: 80px !important;
            height: 80px !important;
          }
          
          .name {
            font-size: 1.3rem !important;
          }
          
          .quote {
            font-size: 1rem !important;
            padding: 0 1rem !important;
          }
          
          .controls {
            gap: 1rem !important;
          }
          
          .control-btn {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 480px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          .testimonial-card {
            padding: 1.5rem 1rem !important;
          }
          
          .quote {
            font-size: 0.9rem !important;
          }
        }
      `})]})},u0=()=>{var nt,it,Xt;const[y,L]=v.useState("all"),[Q,d]=v.useState([]),[R,C]=v.useState(!1),[E,S]=v.useState(null),[H,D]=v.useState(0),[B,Y]=v.useState(!1),[_,O]=v.useState([]),[I,oe]=v.useState(!1),[q,ee]=v.useState({x:0,y:0}),[g,J]=v.useState(typeof window<"u"?window.innerWidth:1200),ae=v.useRef(null);v.useEffect(()=>{const U=()=>{J(window.innerWidth)};return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]);const ge=[{id:1,category:"residential",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Modern Villa Estate",description:"Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:2,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Tower",description:"State-of-the-art corporate headquarters with sustainable design features and smart building technology",year:"2022",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:3,category:"interior",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Apartment Interior",description:"High-end residential interior design with custom furniture and premium materials throughout the space",year:"2023",location:"Chennai",gallery:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:4,category:"renovation",image:"https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Historic Building Renovation",description:"Careful restoration of a heritage structure with modern amenities while preserving historical elements",year:"2021",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235707960-5a1d318a2a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:5,category:"layout",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Urban Planning Project",description:"Comprehensive urban development plan with mixed-use spaces, green areas and sustainable infrastructure",year:"2022",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:6,category:"residential",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Family Home",description:"Custom-designed family residence with premium amenities, smart home features and sustainable elements",year:"2023",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:7,category:"commercial",image:"https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Retail Complex Development",description:"Modern shopping center with innovative design, optimized customer flow and integrated digital experiences",year:"2021",location:"Chennai",gallery:["https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014056132-70b975a35d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:8,category:"interior",image:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Interior",description:"Modern workspace design with ergonomic furniture, collaborative areas and productivity-focused layout",year:"2022",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:9,category:"renovation",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Remodeling",description:"Complete home transformation with open concept design, updated systems and contemporary finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:10,category:"layout",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Community Planning",description:"Master-planned residential community with integrated amenities, green spaces and pedestrian-friendly design",year:"2021",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:11,category:"residential",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Waterfront Residence",description:"Exclusive waterfront property with panoramic views, custom architectural details and luxury amenities",year:"2022",location:"Chennai",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:12,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Mixed-Use Development",description:"Integrated commercial and residential complex with shared amenities and efficient space utilization",year:"2023",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]}],ve=[{id:"all",label:"All Projects",color:"#2c3e50",icon:"🏗️"},{id:"residential",label:"Residential",color:"#B79C5C",icon:"🏠"},{id:"commercial",label:"Commercial",color:"#3498db",icon:"🏢"},{id:"interior",label:"Interior",color:"#e74c3c",icon:"🎨"},{id:"renovation",label:"Renovation",color:"#9b59b6",icon:"🔨"},{id:"layout",label:"Layout",color:"#27ae60",icon:"📐"}],A=`
    @keyframes wordReveal {
      0% {
        opacity: 0;
        transform: translateY(50px) rotateX(45deg) scale(0.8);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) rotateX(0deg) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      33% { background-position: 50% 100%; }
      66% { background-position: 100% 50%; }
    }

    @keyframes titleUnderline {
      0% {
        width: 0;
        opacity: 0;
        transform: scaleX(0);
      }
      100% {
        width: 120px;
        opacity: 1;
        transform: scaleX(1);
      }
    }

    @keyframes filterButtonFloat {
      0% {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
        filter: blur(5px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes galleryItemMagnetize {
      0% {
        opacity: 0;
        transform: translateY(40px) scale(0.9);
        filter: blur(8px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    @keyframes backgroundFloat {
      0%, 100% {
        transform: translateY(0) rotate(0deg) scale(1);
      }
      25% {
        transform: translateY(-10px) rotate(1deg) scale(1.01);
      }
      50% {
        transform: translateY(-15px) rotate(0deg) scale(1.02);
      }
      75% {
        transform: translateY(-8px) rotate(-1deg) scale(1.01);
      }
    }

    @keyframes morphShape {
      0%, 100% {
        border-radius: 50% 40% 30% 70%;
        transform: rotate(0deg) scale(1);
      }
      25% {
        border-radius: 30% 60% 70% 40%;
        transform: rotate(90deg) scale(1.05);
      }
      50% {
        border-radius: 70% 30% 50% 60%;
        transform: rotate(180deg) scale(0.95);
      }
      75% {
        border-radius: 40% 70% 30% 50%;
        transform: rotate(270deg) scale(1.02);
      }
    }

    @keyframes lightboxEntrance {
      0% {
        opacity: 0;
        transform: scale(0.5);
        filter: blur(20px);
      }
      100% {
        opacity: 1;
        transform: scale(1);
        filter: blur(0px);
      }
    }

    @keyframes parallaxFloat {
      0%, 100% {
        transform: translateY(0px) translateX(0px);
      }
      50% {
        transform: translateY(-8px) translateX(2px);
      }
    }

    @keyframes filterGlow {
      0%, 100% {
        box-shadow: 0 8px 25px rgba(183, 156, 92, 0.2);
      }
      50% {
        box-shadow: 0 8px 35px rgba(183, 156, 92, 0.4), 0 0 20px rgba(183, 156, 92, 0.3);
      }
    }

    @keyframes cardHoverLift {
      0% {
        transform: translateY(0) scale(1) rotateX(0deg);
        box-shadow: 0 15px 35px rgba(44, 62, 80, 0.08);
      }
      100% {
        transform: translateY(-15px) scale(1.03) rotateX(-5deg);
        box-shadow: 0 35px 70px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2);
      }
    }

    @keyframes overlayReveal {
      0% {
        opacity: 0;
        transform: translateY(100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes shimmerEffect {
      0% {
        transform: translateX(-200px) skewX(-15deg);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateX(400px) skewX(-15deg);
        opacity: 0;
      }
    }

    @keyframes subtitleFadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
        filter: blur(3px);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
        filter: blur(0px);
      }
    }

    /* Mobile-specific simpler animations */
    @media (max-width: 768px) {
      @keyframes wordReveal {
        0% {
          opacity: 0;
          transform: translateY(30px) scale(0.9);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes galleryItemMagnetize {
        0% {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
    }
  `;v.useEffect(()=>{if(g<768)return;const U=we=>{if(ae.current){const P=ae.current.getBoundingClientRect(),ue=(we.clientX-P.left)/P.width,xe=(we.clientY-P.top)/P.height;ee({x:ue,y:xe})}};return document.addEventListener("mousemove",U),()=>document.removeEventListener("mousemove",U)},[g]),v.useEffect(()=>{const U=document.createElement("style");return U.textContent=A,document.head.appendChild(U),()=>{document.head.contains(U)&&document.head.removeChild(U)}},[]),v.useEffect(()=>{const U=new IntersectionObserver(we=>{we.forEach(P=>{P.isIntersecting&&(Y(!0),setTimeout(()=>oe(!0),300),setTimeout(()=>{(y==="all"?ge:ge.filter(xe=>xe.category===y)).forEach((xe,st)=>{setTimeout(()=>{O(lt=>[...lt,st])},st*100)})},1500))})},{threshold:.1});return ae.current&&U.observe(ae.current),()=>{ae.current&&U.unobserve(ae.current)}},[y]),v.useEffect(()=>{d(y==="all"?ge:ge.filter(U=>U.category===y)),O([])},[y]);const W=U=>{L(U)},w=U=>{S(U),D(0),C(!0),document.body.style.overflow="hidden"},ce=()=>{C(!1),S(null),D(0),document.body.style.overflow="unset"},M=U=>{E!=null&&E.gallery&&D(U==="next"?we=>(we+1)%E.gallery.length:we=>(we-1+E.gallery.length)%E.gallery.length)},K=()=>E!=null&&E.gallery?E.gallery[H]:E==null?void 0:E.image,le={padding:g<768?"4rem 0":"8rem 0",background:`
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,position:"relative",overflow:"hidden",minHeight:g<768?"auto":"100vh"},X=g>=768?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"8%",width:"280px",height:"280px",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.08), rgba(52, 152, 219, 0.06))",animation:"morphShape 20s ease-in-out infinite, backgroundFloat 8s ease-in-out infinite",zIndex:1,transform:`translate(${q.x*15}px, ${q.y*10}px)`}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"5%",width:"200px",height:"200px",background:"linear-gradient(225deg, rgba(231, 76, 60, 0.06), rgba(155, 89, 182, 0.08))",animation:"morphShape 25s ease-in-out infinite reverse, backgroundFloat 12s ease-in-out infinite",zIndex:1,transform:`translate(${q.x*-20}px, ${q.y*15}px)`}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"15%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(39, 174, 96, 0.05), rgba(241, 196, 15, 0.07))",animation:"morphShape 30s ease-in-out infinite, backgroundFloat 10s ease-in-out infinite reverse",zIndex:1,transform:`translate(${q.x*25}px, ${q.y*-12}px)`}}),[...Array(6)].map((U,we)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${4+Math.random()*6}px`,height:`${4+Math.random()*6}px`,background:`linear-gradient(45deg, rgba(183, 156, 92, ${.3+Math.random()*.4}), rgba(52, 152, 219, ${.2+Math.random()*.3}))`,borderRadius:"50%",animation:`parallaxFloat ${8+Math.random()*6}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1,transform:`translate(${q.x*(10+Math.random()*20)}px, ${q.y*(5+Math.random()*15)}px)`}},we))]}):null,$={maxWidth:"1600px",margin:"0 auto",padding:g<768?"0 1rem":"0 3rem",position:"relative",zIndex:2},b={textAlign:"center",marginBottom:g<768?"3rem":"5rem",position:"relative",perspective:"1200px"},T={fontSize:g<480?"2rem":g<768?"2.5rem":"clamp(3.5rem, 6vw, 5.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 2rem 0",perspective:"1200px",position:"relative",display:"inline-block"},V=U=>({display:"inline-block",marginRight:g<768?"15px":"25px",opacity:I?1:0,transform:I?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)",backgroundSize:"400% 400%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:I?`wordReveal 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+U*.2}s, gradientShift 6s ease-in-out infinite`:"none",textShadow:I?"0 10px 30px rgba(44, 62, 80, 0.1)":"none"}),fe={position:"absolute",bottom:"-15px",left:"50%",transform:"translateX(-50%)",height:"6px",background:"linear-gradient(90deg, transparent, #B79C5C, #3498db, #B79C5C, transparent)",borderRadius:"3px",animation:I?"titleUnderline 1.5s ease-out forwards 2s":"none",width:"0"},me={fontSize:g<768?"1.1rem":"1.3rem",color:"#64748b",fontWeight:"300",letterSpacing:g<768?"1px":"2px",lineHeight:"1.8",maxWidth:"700px",margin:"0 auto",padding:g<768?"0 1rem":"0",opacity:I?1:0,animation:I?"subtitleFadeUp 1s ease-out forwards 2.3s":"none"},Ne={display:"flex",justifyContent:"center",flexWrap:"wrap",gap:g<768?"0.8rem":"1.5rem",marginBottom:g<768?"2rem":"4rem",opacity:I?1:0,animation:I?"filterButtonFloat 1s ease-out forwards 2.6s":"none"},G=(U,we,P)=>({padding:g<480?"0.6rem 1rem":g<768?"0.75rem 1.5rem":"1rem 2rem",background:we?`linear-gradient(135deg, ${U.color}, rgba(44, 62, 80, 0.9))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${we?"transparent":"rgba(183, 156, 92, 0.2)"}`,borderRadius:"25px",color:we?"white":"#64748b",fontWeight:"600",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:we?"0 15px 35px rgba(44, 62, 80, 0.2), 0 5px 15px rgba(183, 156, 92, 0.3)":"0 8px 25px rgba(44, 62, 80, 0.08)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",fontSize:g<480?"0.75rem":g<768?"0.8rem":"0.9rem",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",gap:g<768?"4px":"8px",animation:we?"filterGlow 2s ease-in-out infinite":"none",transform:`translateY(${we?-3:0}px)`,animationDelay:`${P*.1}s`}),de={display:"grid",gridTemplateColumns:g<768?"1fr":g<1024?"repeat(2, 1fr)":g<1400?"repeat(3, 1fr)":"repeat(auto-fill, minmax(380px, 1fr))",gap:g<768?"2rem":"3rem",marginTop:g<768?"2rem":"3rem",perspective:"1200px"},j=(U,we)=>({position:"relative",borderRadius:g<768?"20px":"24px",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",cursor:"pointer",height:g<480?"280px":g<768?"320px":"350px",background:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(255, 255, 255, 0.2)",backdropFilter:"blur(20px)",transform:we?"translateY(0) scale(1)":"translateY(40px) scale(0.9)",opacity:we?1:0,animation:we?`galleryItemMagnetize 1s cubic-bezier(0.23, 1, 0.32, 1) forwards ${U*.1}s`:"none",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",transformStyle:"preserve-3d"}),F={width:"100%",height:"70%",objectFit:"cover",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.95) contrast(1.05) saturate(1.1)"},se={position:"absolute",top:0,left:0,width:"100%",height:"70%",background:`
      radial-gradient(circle at center, transparent 0%, rgba(44, 62, 80, 0.7) 100%),
      linear-gradient(to top, rgba(44, 62, 80, 0.9) 0%, transparent 60%)
    `,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:g<768?"1rem":"2rem",opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",color:"white",textAlign:"center"},Ae={position:"absolute",bottom:0,left:0,right:0,padding:g<768?"1rem":"1.5rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(183, 156, 92, 0.2)"},Ye={fontSize:g<768?"1.2rem":"1.5rem",fontWeight:"700",marginBottom:"0.5rem",transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.1s"},Te={fontSize:g<768?"0.9rem":"1rem",opacity:.9,transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.2s",lineHeight:"1.5"},et={position:"absolute",top:0,left:"-200px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:g>=768?"shimmerEffect 3s ease-in-out infinite":"none",zIndex:3},Ge=(U,we,P)=>{const ue=U.currentTarget,xe=ue.querySelector("img"),st=ue.querySelector(".overlay"),lt=ue.querySelectorAll(".overlay-element"),jt=ue.querySelector(".shimmer");P?(g>=768?(ue.style.animation="cardHoverLift 0.6s ease-out forwards",xe&&(xe.style.transform="scale(1.15) rotate(3deg)"),jt&&(jt.style.animation="shimmerEffect 1s ease-out")):ue.style.transform="scale(0.98)",st&&(st.style.opacity="1"),lt.forEach(Yt=>{Yt.style.transform="translateY(0)"})):(g>=768?(ue.style.animation="none",ue.style.transform="translateY(0) scale(1) rotateX(0deg)",ue.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",xe&&(xe.style.transform="scale(1) rotate(0deg)")):ue.style.transform="scale(1)",st&&(st.style.opacity="0"),lt.forEach(Yt=>{Yt.style.transform="translateY(20px)"}))};return i.jsxs("section",{style:le,ref:ae,children:[X,i.jsxs("div",{style:$,children:[i.jsxs("div",{style:b,children:[i.jsxs("h2",{style:T,children:[i.jsx("span",{style:V(0),children:"Our"}),i.jsx("span",{style:V(1),children:"Project"}),i.jsx("span",{style:V(2),children:"Portfolio"}),i.jsx("div",{style:fe})]}),i.jsx("p",{style:me,children:"Discover our curated collection of architectural masterpieces and design excellence that define contemporary living"})]}),i.jsx("div",{style:Ne,children:ve.map((U,we)=>i.jsxs("button",{style:G(U,y===U.id,we),onClick:()=>W(U.id),onMouseEnter:P=>{g>=768&&y!==U.id&&(P.currentTarget.style.transform="translateY(-8px) scale(1.05)",P.currentTarget.style.boxShadow="0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)",P.currentTarget.style.borderColor="rgba(183, 156, 92, 0.5)",P.currentTarget.style.background="rgba(255, 255, 255, 0.95)",P.currentTarget.style.color=U.color)},onMouseLeave:P=>{g>=768&&y!==U.id&&(P.currentTarget.style.transform="translateY(0) scale(1)",P.currentTarget.style.boxShadow="0 8px 25px rgba(44, 62, 80, 0.08)",P.currentTarget.style.borderColor="rgba(183, 156, 92, 0.2)",P.currentTarget.style.background="rgba(255, 255, 255, 0.8)",P.currentTarget.style.color="#64748b")},children:[i.jsx("span",{style:{fontSize:g<768?"1rem":"1.1rem"},children:U.icon}),U.label]},U.id))}),i.jsx("div",{style:de,children:Q.map((U,we)=>{var ue;const P=_.includes(we);return i.jsxs("div",{style:j(we,P),onClick:()=>w(U),onMouseEnter:xe=>Ge(xe,we,!0),onMouseLeave:xe=>Ge(xe,we,!1),onTouchStart:xe=>Ge(xe,we,!0),onTouchEnd:xe=>Ge(xe,we,!1),children:[i.jsx("div",{style:et,className:"shimmer"}),i.jsx("img",{src:U.image,alt:U.title,style:F}),i.jsxs("div",{className:"overlay",style:se,children:[i.jsx("h3",{className:"overlay-element",style:Ye,children:U.gallery?`View Gallery (${U.gallery.length} images)`:"View Project"}),i.jsx("p",{className:"overlay-element",style:Te,children:U.gallery?"Click to explore image gallery":"Click to explore details"})]}),i.jsxs("div",{style:Ae,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem",flexDirection:g<480?"column":"row",gap:g<480?"0.5rem":"0"},children:[i.jsx("h3",{style:{fontSize:g<768?"1.1rem":"1.3rem",fontWeight:"700",color:"#2c3e50",margin:0,flex:1},children:U.title}),i.jsx("span",{style:{fontSize:"0.8rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px",marginLeft:g<480?"0":"1rem"},children:U.year})]}),i.jsx("p",{style:{fontSize:g<768?"0.8rem":"0.9rem",color:"#64748b",lineHeight:"1.4",margin:"0 0 0.5rem 0"},children:U.description}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:g<480?"column":"row",gap:g<480?"0.5rem":"0"},children:[i.jsx("span",{style:{fontSize:"0.8rem",color:"#94a3b8",display:"flex",alignItems:"center",gap:"0.5rem"},children:U.location}),i.jsx("span",{style:{fontSize:"0.8rem",color:((ue=ve.find(xe=>xe.id===U.category))==null?void 0:ue.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px"},children:U.category})]})]})]},U.id)})})]}),R&&i.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center",animation:"lightboxEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",backdropFilter:"blur(20px)",padding:g<768?"1rem":"2rem"},onClick:ce,children:i.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:g<768?"100%":"1200px",background:"rgba(255, 255, 255, 0.95)",borderRadius:g<768?"16px":"24px",overflow:"hidden",boxShadow:"0 50px 100px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.2)",maxHeight:"90vh"},onClick:U=>U.stopPropagation(),children:[i.jsx("button",{style:{position:"absolute",top:g<768?"1rem":"1.5rem",right:g<768?"1rem":"1.5rem",background:"rgba(0, 0, 0, 0.7)",border:"none",width:g<768?"50px":"60px",height:g<768?"50px":"60px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:g<768?"1.2rem":"1.5rem",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",backdropFilter:"blur(10px)"},onClick:ce,onMouseEnter:U=>{g>=768&&(U.currentTarget.style.background="#B79C5C",U.currentTarget.style.transform="scale(1.1) rotate(90deg)")},onMouseLeave:U=>{g>=768&&(U.currentTarget.style.background="rgba(0, 0, 0, 0.7)",U.currentTarget.style.transform="scale(1) rotate(0deg)")},children:"×"}),i.jsx("div",{style:{width:"100%",height:g<768?"50vh":"70vh",maxHeight:"400px"},children:i.jsx("img",{src:K(),alt:E==null?void 0:E.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),i.jsxs("div",{style:{padding:g<768?"1.5rem":"3rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",maxHeight:g<768?"40vh":"auto",overflowY:"auto"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexDirection:g<768?"column":"row",gap:g<768?"1rem":"0"},children:[i.jsx("h3",{style:{color:"#2c3e50",fontSize:g<768?"1.5rem":"2.2rem",fontWeight:"700",margin:0,flex:1},children:E==null?void 0:E.title}),i.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[(E==null?void 0:E.gallery)&&i.jsxs("span",{style:{fontSize:g<768?"0.9rem":"1rem",color:"#3498db",fontWeight:"600",background:"rgba(52, 152, 219, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:[H+1," / ",E.gallery.length]}),i.jsx("span",{style:{fontSize:g<768?"0.9rem":"1rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:E==null?void 0:E.year}),i.jsxs("span",{style:{fontSize:g<768?"0.9rem":"1rem",color:"#64748b",display:"flex",alignItems:"center",gap:"0.5rem"},children:["📍 ",E==null?void 0:E.location]})]})]}),i.jsx("p",{style:{marginBottom:"1.5rem",color:"#64748b",fontSize:g<768?"1rem":"1.2rem",lineHeight:"1.7"},children:E==null?void 0:E.description}),i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:i.jsxs("span",{style:{fontSize:g<768?"0.9rem":"1rem",color:((nt=ve.find(U=>U.id===(E==null?void 0:E.category)))==null?void 0:nt.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"1px",background:`rgba(${(it=ve.find(U=>U.id===(E==null?void 0:E.category)))==null?void 0:it.color.slice(1).match(/.{2}/g).map(U=>parseInt(U,16)).join(", ")}, 0.1)`||"rgba(100, 116, 139, 0.1)",padding:"0.75rem 1.5rem",borderRadius:"25px"},children:[(Xt=ve.find(U=>U.id===(E==null?void 0:E.category)))==null?void 0:Xt.icon," ",E==null?void 0:E.category]})})]}),(E==null?void 0:E.gallery)&&i.jsxs("div",{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100%",display:"flex",justifyContent:"space-between",padding:g<768?"0 1rem":"0 2rem",zIndex:10,pointerEvents:"none"},children:[i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:g<768?"50px":"70px",height:g<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:g<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>M("prev"),onMouseEnter:U=>{g>=768&&(U.currentTarget.style.background="#2c3e50",U.currentTarget.style.transform="scale(1.1) rotateZ(-10deg)")},onMouseLeave:U=>{g>=768&&(U.currentTarget.style.background="rgba(0, 0, 0, 0.7)",U.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"‹"}),i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:g<768?"50px":"70px",height:g<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:g<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>M("next"),onMouseEnter:U=>{g>=768&&(U.currentTarget.style.background="#2c3e50",U.currentTarget.style.transform="scale(1.1) rotateZ(10deg)")},onMouseLeave:U=>{g>=768&&(U.currentTarget.style.background="rgba(0, 0, 0, 0.7)",U.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"›"})]})]})})]})},f0=()=>{const[y,L]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[Q,d]=v.useState({message:"",isError:!1,isSubmitting:!1}),R=v.useRef(null),C=v.useRef(null);v.useEffect(()=>{const H=new IntersectionObserver(D=>{D.forEach(B=>{B.isIntersecting&&(B.target.classList.add("section-visible"),C.current&&C.current.classList.add("heading-visible"))})},{threshold:.2});return R.current&&H.observe(R.current),()=>{R.current&&H.unobserve(R.current)}},[]);const E=H=>{const{name:D,value:B}=H.target;L(Y=>({...Y,[D]:B}))},S=()=>{if(!y.name||!y.email||!y.phone||!y.package||!y.message){d({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{d({message:"",isError:!1,isSubmitting:!1})},3e3);return}d({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{d({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),L({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{d({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"contact",className:"contact-section",ref:R,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:"heading-container",ref:C,children:[i.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),i.jsxs("div",{className:"contact-container",children:[i.jsxs("div",{className:"contact-info",children:[i.jsx("div",{className:"contact-map",children:i.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6050645764435!2d77.5693744!3d12.9330859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15515dc1da7d%3A0xcd0ee36e6cf73082!2sPavan%20Techno%20Constructions!5e0!3m2!1sen!2sin!4v1738318615550!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Pavan Techno Constructions Location"})}),i.jsxs("div",{className:"contact-details",children:[i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"0.8s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Our Location"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.0s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Call Us"}),i.jsx("p",{children:"+91 9738906052"}),i.jsx("p",{children:"+91 8722906052"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.2s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Email Us"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]}),i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:y.name,onChange:E})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:y.email,onChange:E})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:y.phone,onChange:E})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:y.package,onChange:E,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:y.message,onChange:E})]}),i.jsx("div",{className:"form-status",children:Q.message&&i.jsx("div",{className:`status-message ${Q.isError?"error":"success"}`,children:Q.message})}),i.jsxs("button",{onClick:S,className:"btn btn-primary",disabled:Q.isSubmitting,children:[i.jsx("span",{children:Q.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes titleSlideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .contact-section {
          padding: 6rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #B79C5C, #8b7355);
          border-radius: 50%;
          top: 70%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #4dabf7);
          border-radius: 50%;
          bottom: 30%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #B79C5C, #007bff);
          top: 40%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.3);
          top: 20%;
          right: 30%;
          animation: float 5s ease-in-out infinite;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .heading-container {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }
        
        .section-visible .heading-container {
          animation: titleSlideUp 0.8s forwards 0.3s;
        }
        
        .main-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 1.5rem;
          color: #ffffff;
          text-transform: uppercase;
          position: relative;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .heading-underline {
          height: 4px;
          width: 0;
          background: linear-gradient(90deg, transparent, #007bff, #B79C5C, transparent);
          margin: 0 auto;
          transition: width 1.5s ease 1s;
          border-radius: 2px;
        }
        
        .heading-visible .heading-underline {
          width: 120px;
        }
        
        .heading-subtitle {
          margin-top: 1.5rem;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: #B79C5C;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 1.5s;
          font-weight: 300;
          letter-spacing: 1px;
        }
        
        .heading-visible .heading-subtitle {
          opacity: 0.9;
          transform: translateY(0);
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 3rem;
          opacity: 0;
        }

        .section-visible .contact-container {
          animation: fadeIn 1s forwards 0.5s;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .contact-map {
          height: 300px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 123, 255, 0.2);
          transform: translateY(30px);
          opacity: 0;
          border: 2px solid rgba(183, 156, 92, 0.2);
        }

        .section-visible .contact-map {
          animation: slideUp 0.8s forwards 0.6s;
        }
        
        .contact-map iframe {
          width: 100%;
          height: 100%;
          border: none;
          filter: grayscale(20%) brightness(0.9);
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(183, 156, 92, 0.1));
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-30px);
          opacity: 0;
          backdrop-filter: blur(10px);
        }

        .section-visible .contact-detail-item {
          animation: slideRight 0.8s forwards;
        }
        
        .contact-detail-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.15);
          border-color: rgba(183, 156, 92, 0.4);
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(183, 156, 92, 0.15));
        }
        
        .contact-detail-item .icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
        }

        .contact-detail-item:hover .icon {
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transform: scale(1.1) rotate(5deg);
        }
        
        .contact-detail-item .info h4 {
          color: #B79C5C;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        
        .contact-detail-item .info p {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          margin-bottom: 0.3rem;
          line-height: 1.6;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateX(30px);
          opacity: 0;
        }

        .section-visible .contact-form-container {
          animation: slideLeft 0.8s forwards 0.8s;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.5rem;
          letter-spacing: 1px;
        }

        .form-header p {
          color: #B79C5C;
          font-size: 1rem;
          opacity: 0.9;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 1rem 1.2rem;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(183, 156, 92, 0.2);
          border-radius: 10px;
          color: #000;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
        }
        
        .form-status {
          min-height: 40px;
          display: flex;
          align-items: center;
        }
        
        .status-message {
          padding: 1rem 1.5rem;
          border-radius: 10px;
          font-size: 0.95rem;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        
        .status-message.error {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1.2rem 2.5rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .btn-primary:hover::before {
          left: 0;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.4);
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-primary:disabled::before {
          display: none;
        }

        /* Improved Mobile Responsiveness */
        @media (max-width: 1200px) {
          .contact-container {
            gap: 3rem;
          }
        }
        
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .contact-form-container {
            order: -1;
          }
          
          .contact-info,
          .contact-form-container {
            transform: translateX(0);
          }

          .section-visible .contact-info,
          .section-visible .contact-form-container {
            animation: fadeIn 1s forwards 0.3s;
          }
          
          .main-heading {
            font-size: 2.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 2rem 1.5rem;
          }
          
          .contact-detail-item {
            padding: 1.5rem;
            gap: 1rem;
          }

          .contact-detail-item .icon {
            width: 50px;
            height: 50px;
          }
          
          .main-heading {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .heading-subtitle {
            font-size: 1.1rem;
          }
          
          /* Ensure form inputs are properly sized */
          .form-input, .form-textarea, .form-select {
            padding: 0.8rem;
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-map {
            height: 250px;
          }
          
          .contact-detail-item {
            padding: 1.25rem 1rem;
          }

          .contact-form-container {
            padding: 1.5rem 1.2rem;
          }
          
          .main-heading {
            font-size: 1.8rem;
          }

          .form-header h3 {
            font-size: 1.5rem;
          }

          .btn-primary {
            padding: 0.9rem 1.8rem;
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.8rem;
          }

          .contact-form-container {
            padding: 1.2rem 1rem;
          }

          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
          
          .contact-detail-item {
            padding: 1.1rem 0.9rem;
          }
          
          .form-input, .form-textarea, .form-select {
            padding: 0.7rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 360px) {
          .container {
            padding: 0 0.6rem;
          }
          
          .contact-form-container {
            padding: 1rem 0.8rem;
          }
          
          .main-heading {
            font-size: 1.4rem;
          }
          
          .heading-subtitle {
            font-size: 0.9rem;
          }
        }
      `})]})},Za=()=>{const y=new Date().getFullYear(),[L,Q]=v.useState(!1),[d,R]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const S=()=>{R(window.innerWidth)};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),v.useEffect(()=>{const S=new IntersectionObserver(D=>{D.forEach(B=>{B.isIntersecting&&Q(!0)})},{threshold:.1}),H=document.querySelector(".footer");return H&&S.observe(H),()=>{H&&S.unobserve(H)}},[]);const C=[{icon:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",href:"https://www.facebook.com/profile.php?id=61575157293939#",label:"Facebook"},{icon:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",href:"https://www.instagram.com/pavantechnoconstructions/",label:"Instagram"}],E=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},{name:"Pricing",href:"#pricing"},{name:"Gallery",href:"#gallery"},{name:"Contact",href:"#contact"}];return i.jsxs(i.Fragment,{children:[i.jsxs("footer",{className:`footer ${L?"visible":""}`,children:[i.jsxs("div",{className:"footer-bg-elements",children:[i.jsx("div",{className:"bg-circle-1"}),i.jsx("div",{className:"bg-circle-2"}),i.jsx("div",{className:"bg-square-1"}),i.jsx("div",{className:"bg-triangle-1"})]}),i.jsx("div",{className:"footer-top",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-info",children:[i.jsx("div",{className:"footer-branding",children:i.jsx("div",{className:"footer-logo",children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",background:"linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",padding:"10px 15px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.12)",marginBottom:"20px",border:"1px solid rgba(255, 255, 255, 0.2)"},children:[i.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",overflow:"hidden",marginRight:"12px",border:"2px solid #B79C5C"},children:i.jsx("img",{src:"/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg",alt:"Pavan Techno Constructions",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:"0",fontSize:"18px",fontWeight:"700",color:"#1e293b",letterSpacing:"0.5px",lineHeight:"1.2"},children:"PAVAN TECHNO"}),i.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"14px",color:"#B79C5C",fontWeight:"500",letterSpacing:"1px"},children:"CONSTRUCTIONS"})]})]})})}),i.jsx("p",{children:"We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. With over 9 years of experience, we've built a foundation of trust, ethics, and shared success."}),i.jsx("div",{className:"social-links",children:C.map((S,H)=>i.jsx("a",{href:S.href,className:"social-link","aria-label":S.label,style:{animationDelay:`${H*.1}s`},children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:S.icon})})},H))})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Quick Links"}),i.jsx("ul",{children:E.map((S,H)=>i.jsx("li",{style:{animationDelay:`${H*.1}s`},children:i.jsx("a",{href:S.href,children:S.name})},H))})]}),i.jsxs("div",{className:"footer-contact",children:[i.jsx("h4",{children:"Contact Us"}),i.jsxs("div",{className:"contact-items",children:[i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.2s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Address"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.4s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Phone"}),i.jsxs("p",{children:["+91 9738906052",i.jsx("br",{}),"+91 8722906052"]})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.6s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Email"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]})]})})}),i.jsx("div",{className:"footer-bottom",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsxs("p",{children:["© ",y," All Rights Reserved By"," ",i.jsx("a",{href:"https://gconnectsolutions.com/",target:"_blank",rel:"noopener noreferrer",children:"G Connect Solutions"})]}),i.jsxs("div",{className:"footer-policy",children:[i.jsx("a",{href:"Privacy.html",children:"Privacy Policy"}),i.jsx("span",{className:"separator",children:"|"}),i.jsx("a",{href:"#terms",children:"Terms of Service"})]})]})})})]}),i.jsx("style",{jsx:!0,children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(180deg);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }

        .footer {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bg-circle-1 {
          position: absolute;
          top: 10%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 8s ease-in-out infinite;
        }

        .bg-circle-2 {
          position: absolute;
          bottom: 20%;
          left: 5%;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(183, 156, 92, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .bg-square-1 {
          position: absolute;
          top: 60%;
          right: 20%;
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          transform: rotate(45deg);
          animation: rotate 15s linear infinite;
        }

        .bg-triangle-1 {
          position: absolute;
          top: 30%;
          left: 15%;
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.08);
          animation: float 10s ease-in-out infinite;
        }

        .footer-top {
          padding: 5rem 0 3rem;
          position: relative;
          z-index: 2;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 2fr;
          gap: 4rem;
          align-items: start;
        }

        .footer-info,
        .footer-links,
        .footer-contact {
          opacity: 0;
        }

        .footer.visible .footer-info {
          animation: fadeInLeft 0.8s forwards 0.2s;
        }

        .footer.visible .footer-links {
          animation: fadeInUp 0.8s forwards 0.4s;
        }

        .footer.visible .footer-contact {
          animation: fadeInRight 0.8s forwards 0.6s;
        }

        .footer-logo {
          margin-bottom: 2rem;
          display: flex;
          justify-content: flex-start;
        }
        
        @media (max-width: 768px) {
          .footer-logo {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .footer-logo > div {
            padding: 8px 12px;
          }
          
          .footer-logo h3 {
            font-size: 16px;
          }
          
          .footer-logo p {
            font-size: 12px;
          }
        }

        .footer-logo-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 140px; /* Smaller container size */
          height: auto;
        }

        .footer-logo-img {
          width: 140px; /* Smaller image size */
          height: auto;
          object-fit: contain;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          border: 1px solid rgba(183, 156, 92, 0.3);
          background: rgba(255, 255, 255, 0.1);
          padding: 5px;
        }

        .footer-logo-img:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          border-color: rgba(0, 123, 255, 0.4);
        }

        .logo-container h2 {
          font-size: 2rem;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 1px;
        }

        .logo-container span {
          display: block;
          font-size: 0.9rem;
          color: #B79C5C;
          font-weight: 300;
          letter-spacing: 2px;
          margin-top: 0.2rem;
        }

        .footer-info p {
          margin-bottom: 2rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem; /* Increased gap between icons */
        }

        .social-link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px; /* Slightly larger icons */
          height: 50px;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(183, 156, 92, 0.2));
          color: #ffffff;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(183, 156, 92, 0.3);
          position: relative;
          overflow: hidden;
          opacity: 0;
        }

        .footer.visible .social-link {
          animation: fadeInUp 0.6s forwards;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #007bff, #B79C5C);
          transition: left 0.3s ease;
          z-index: -1;
        }

        .social-link:hover::before {
          left: 0;
        }

        .social-link:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
          border-color: #B79C5C;
        }

        .social-link svg {
          width: 24px; /* Larger SVG icons */
          height: 24px;
        }

        .footer-links h4,
        .footer-contact h4 {
          color: #ffffff;
          margin-bottom: 2rem;
          position: relative;
          font-size: 1.4rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .footer-links h4::after,
        .footer-contact h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #B79C5C);
          border-radius: 2px;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 1rem;
          opacity: 0;
        }

        .footer.visible .footer-links li {
          animation: fadeInLeft 0.6s forwards;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          font-size: 1rem;
          position: relative;
          padding: 0.5rem 0;
        }

        .footer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #007bff, #B79C5C);
          transition: width 0.3s ease;
        }

        .footer-links a:hover::before {
          width: 100%;
        }

        .footer-links a:hover {
          color: #B79C5C;
          transform: translateX(8px);
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          opacity: 0;
        }

        .footer.visible .contact-item {
          animation: fadeInRight 0.6s forwards;
        }

        .contact-icon {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon {
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transform: scale(1.1) rotate(5deg);
        }

        .contact-text {
          flex: 1;
        }

        .contact-label {
          display: block;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .footer-bottom {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(183, 156, 92, 0.1));
          border-top: 1px solid rgba(183, 156, 92, 0.2);
          padding: 2rem 0;
          position: relative;
          z-index: 2;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-bottom p {
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }

        .footer-bottom a {
          color: #B79C5C;
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .footer-bottom a:hover {
          color: #007bff;
          text-decoration: underline;
        }

        .footer-policy {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-policy a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          border-bottom: 1px solid transparent;
          padding-bottom: 2px;
        }

        .footer-policy a:hover {
          border-color: #B79C5C;
          color: #B79C5C;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 1200px) {
          .footer-grid {
            gap: 3rem;
          }
        }

        @media (max-width: 992px) {
          .footer-grid {
            gap: 3rem;
          }
          
          .footer-logo-img {
            width: 130px;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            padding: 4rem 0 2rem;
          }

          .container {
            padding: 0 1rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .footer-info {
            grid-column: auto;
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .contact-item {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .bg-circle-1,
          .bg-circle-2 {
            opacity: 0.5;
          }
        }

        @media (max-width: 576px) {
          .footer-top {
            padding: 3rem 0 1.5rem;
          }

          .logo-container h2 {
            font-size: 1.6rem;
          }

          .footer-links h4,
          .footer-contact h4 {
            font-size: 1.2rem;
          }

          .social-link {
            width: 45px;
            height: 45px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
          }

          .bg-square-1,
          .bg-triangle-1 {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .footer-policy {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        .footer-branding {
          margin-bottom: 1.5rem;
        }

        .footer-logo {
          display: inline-block;
          transition: all 0.3s ease;
        }

        .footer-logo:hover img {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .footer-brand-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: auto;
          height: auto;
        }

        .footer-brand-container {
          position: relative;
          overflow: hidden;
        }
        
        .footer-brand-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2) !important;
        }
        
        .footer-brand-container:hover .footer-brand-img {
          transform: scale(1.05);
          filter: contrast(1.15) brightness(1.1) !important;
        }
        
        .footer-brand-container::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(183, 156, 92, 0.2) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .footer-brand-container:hover::after {
          opacity: 1;
        }

        /* Media queries for responsive design */
        @media (max-width: 768px) {
          .footer-branding {
            justify-content: center;
            margin-bottom: 1.5rem;
          }
          
          .footer-brand-container {
            align-items: center;
            transform: scale(1.1) !important;
          }
          
          .footer-brand-img {
            width: 120px !important;
          }
        }
      `})]})},cp=({closePopup:y})=>{const[L,Q]=v.useState({name:"",email:"",phone:"",service:"",message:""});v.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]);const d=C=>{const{name:E,value:S}=C.target;Q(H=>({...H,[E]:S}))},R=C=>{if(C.preventDefault(),!L.name||!L.email||!L.phone||!L.service||!L.message){alert("Please fill in all required fields.");return}alert("Form submitted successfully! We will contact you soon."),y()};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"popup-overlay",onClick:y,children:i.jsxs("div",{className:"popup-container",onClick:C=>C.stopPropagation(),children:[i.jsx("button",{className:"close-popup",onClick:y,children:"×"}),i.jsxs("div",{className:"popup-header",children:[i.jsx("div",{className:"header-icon",children:i.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:i.jsx("path",{d:"M3 8L12 13L21 8M3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx("h3",{children:"Get Your Quote"}),i.jsx("p",{children:"Fill out the form below and we'll get back to you within 24 hours"})]}),i.jsxs("div",{className:"popup-form",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-name",children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",id:"popup-name",className:"form-control",placeholder:"Enter your full name",value:L.name,onChange:d,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-email",children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",id:"popup-email",className:"form-control",placeholder:"Enter your email",value:L.email,onChange:d,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-phone",children:"Phone Number *"}),i.jsx("input",{type:"tel",name:"phone",id:"popup-phone",className:"form-control",placeholder:"Enter your phone number",value:L.phone,onChange:d,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-service",children:"Package *"}),i.jsxs("select",{name:"service",id:"popup-service",className:"form-control",value:L.service,onChange:d,required:!0,children:[i.jsx("option",{value:"",disabled:!0,children:"Select a package"}),i.jsx("option",{value:"Basic Package",children:"Basic Package - RS.1600/- + GST"}),i.jsx("option",{value:"Premium Package",children:"Premium Package - RS.1800/- + GST"}),i.jsx("option",{value:"Luxury Package",children:"Luxury Package - RS.2150/- + GST"})]})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{htmlFor:"popup-message",children:"Project Details *"}),i.jsx("textarea",{name:"message",id:"popup-message",rows:"4",className:"form-control",placeholder:"Tell us about your construction project...",value:L.message,onChange:d,required:!0})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:y,children:"Cancel"}),i.jsx("button",{type:"button",className:"btn btn-primary",onClick:R,children:"Submit Request"})]})]})]})}),i.jsx("style",{jsx:!0,global:!0,children:`
        .no-scroll {
          overflow: hidden !important;
        }
      `}),i.jsx("style",{jsx:!0,children:`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .popup-container {
          background: #ffffff;
          border-radius: 16px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.4s ease;
        }

        .close-popup {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 300;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 1;
        }

        .close-popup:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .popup-header {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 40px 30px 30px;
          text-align: center;
          border-radius: 16px 16px 0 0;
        }

        .header-icon {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
        }

        .popup-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 10px 0;
          color: white;
        }

        .popup-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .popup-form {
          padding: 30px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }

        .form-control {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          background: #ffffff;
          color: #2d3748;
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
          transform: translateY(-1px);
        }

        .form-control::placeholder {
          color: #a0aec0;
        }

        select.form-control {
          cursor: pointer;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
          font-family: inherit;
        }

        .form-actions {
          display: flex;
          gap: 15px;
          justify-content: flex-end;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 120px;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }

        .btn-secondary:hover {
          background: #5a6268;
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .popup-overlay {
            padding: 10px;
          }

          .popup-container {
            max-height: 95vh;
            border-radius: 12px;
          }

          .popup-header {
            padding: 30px 20px 25px;
            border-radius: 12px 12px 0 0;
          }

          .popup-header h3 {
            font-size: 1.5rem;
          }

          .popup-form {
            padding: 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .close-popup {
            top: 15px;
            right: 15px;
            width: 35px;
            height: 35px;
            font-size: 20px;
          }

          .form-actions {
            flex-direction: column-reverse;
          }

          .btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .popup-overlay {
            align-items: flex-start;
            padding: 5px;
          }

          .popup-container {
            margin-top: 10px;
            border-radius: 8px;
          }

          .popup-header {
            padding: 25px 15px 20px;
            border-radius: 8px 8px 0 0;
          }

          .popup-header h3 {
            font-size: 1.3rem;
          }

          .popup-header p {
            font-size: 0.85rem;
          }

          .popup-form {
            padding: 15px;
          }

          .form-control {
            padding: 10px 12px;
            font-size: 0.9rem;
          }

          .header-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 15px;
          }
        }

        /* Scrollbar Styles */
        .popup-container::-webkit-scrollbar {
          width: 6px;
        }

        .popup-container::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }

        .popup-container::-webkit-scrollbar-thumb {
          background: #007bff;
          border-radius: 3px;
        }

        .popup-container::-webkit-scrollbar-thumb:hover {
          background: #0056b3;
        }
      `})]})},dp="/pavan-techno-constructions/assets/s-1-D80USzrT.jpg",up="/pavan-techno-constructions/assets/arti-D1dJ_XDz.jpg",fp="/pavan-techno-constructions/assets/rs-BDWbg-Wg.jpg",mp="/pavan-techno-constructions/assets/ld-BqerUQ4p.jpg",pp="/pavan-techno-constructions/assets/interior-BlveVF9V.webp",gp="/pavan-techno-constructions/assets/cs1-T7T-fMyg.png",hp=({openPopup:y})=>{const[L,Q]=v.useState(!1),[d,R]=v.useState(null),[C,E]=v.useState("workshop"),[S,H]=v.useState("overview"),D=v.useRef(null);v.useEffect(()=>{const Y=new IntersectionObserver(_=>{_.forEach(O=>{O.isIntersecting&&Q(!0)})},{threshold:.1});return D.current&&Y.observe(D.current),()=>{D.current&&Y.unobserve(D.current)}},[]);const B=[{id:1,title:"Building Construction",icon:"🏗️",image:dp,description:"From start to end, whether it's residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",features:["Residential Projects","Commercial Buildings","Quality Materials","Durable Construction"],price:"Starting from ₹1,600/sq ft",category:"structural"},{id:2,title:"Architectural Services",icon:"📐",image:up,description:"We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",features:["Conceptual Designs","Floor Planning","Site Plans","Dream Home Consultation"],price:"Starting from ₹25/sq ft",category:"design"},{id:3,title:"Renovation",icon:"🔨",image:fp,description:"We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",features:["Commercial Renovation","Residential Makeover","Factory Layout","Custom Redesigns"],price:"Starting from ₹600/sq ft",category:"renovation"},{id:4,title:"Layout Development",icon:"📋",image:mp,description:"Our layout development expertise is designed to transform your project goals into reality, which is a perfect balance of form and function.",features:["Project Planning","Space Optimization","Functional Design","Goal-oriented Solutions"],price:"Starting from ₹35/sq ft",category:"planning"},{id:5,title:"Interior Designing",icon:"🎨",image:pp,description:"We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life.",features:["Commercial Interiors","Residential Design","Industrial Spaces","Concept to Completion"],price:"Starting from ₹800/sq ft",category:"interiors"},{id:6,title:"Customer Satisfaction",icon:"⭐",image:gp,description:"Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations.",features:["Expert Consultation","Dream Home Planning","Quality Assurance","Client-focused Approach"],price:"Included in all services",category:"support"}];return i.jsxs("div",{className:"workshop-page",ref:D,children:[i.jsx("div",{className:"workshop-header",children:i.jsxs("div",{className:"header-grid",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"PROJECT:"}),i.jsx("span",{className:"label-value",children:"CONSTRUCTION SERVICES"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"COMPANY:"}),i.jsx("span",{className:"label-value",children:"PAVAN TECHNO CONSTRUCTIONS"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"STATUS:"}),i.jsx("span",{className:"label-value",children:"ACTIVE OPERATIONS"})]}),i.jsx("h1",{className:`workshop-title ${L?"visible":""}`,children:"CONSTRUCTION SERVICES"}),i.jsx("p",{className:`workshop-subtitle ${L?"visible":""}`,children:"Professional construction services delivered through specialized workstations"}),i.jsxs("div",{className:"view-selector",children:[i.jsxs("button",{className:`selector-btn ${C==="workshop"?"active":""}`,onClick:()=>E("workshop"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Workshop View"]}),i.jsxs("button",{className:`selector-btn ${C==="catalog"?"active":""}`,onClick:()=>E("catalog"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Service Catalog"]})]})]})]})}),C==="workshop"&&i.jsx("div",{className:"workshop-floor",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"floor-plan",children:[i.jsxs("div",{className:"plan-header",children:[i.jsx("h2",{children:"WORKSHOP FLOOR PLAN"}),i.jsx("div",{className:"plan-details"})]}),i.jsx("div",{className:"workstations-grid",children:B.map((Y,_)=>i.jsx("div",{className:`workstation ${d===Y.id?"active":""}`,onClick:()=>R(d===Y.id?null:Y.id),children:i.jsxs("div",{className:"station-frame",children:[i.jsxs("div",{className:"frame-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"station-header",children:[i.jsxs("div",{className:"station-id",children:[" ",Y.station]}),i.jsx("div",{className:"station-code",children:Y.code})]}),i.jsxs("div",{className:"station-image",children:[i.jsx("img",{src:Y.image,alt:Y.title}),i.jsx("div",{className:"image-overlay",children:i.jsx("div",{className:"overlay-icon",children:Y.icon})})]}),i.jsxs("div",{className:"station-info",children:[i.jsx("h3",{children:Y.title}),i.jsx("div",{className:"station-status",children:i.jsx("span",{className:"status-dot"})})]}),d===Y.id&&i.jsxs("div",{className:"station-details",children:[i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"SERVICE OVERVIEW"}),i.jsx("p",{children:Y.description})]}),i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"KEY FEATURES"}),i.jsx("div",{className:"features-grid",children:Y.features.map((O,I)=>i.jsxs("div",{className:"feature-item",children:[i.jsx("span",{className:"feature-bullet",children:"●"}),O]},I))})]}),i.jsxs("div",{className:"pricing-section",children:[i.jsxs("div",{className:"price-info",children:[i.jsx("span",{className:"price-label",children:"PRICING:"}),i.jsx("span",{className:"price-value",children:Y.price})]}),i.jsxs("button",{className:"quote-btn",onClick:y,children:["REQUEST QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})]})]})]})},Y.id))})]})})}),C==="catalog"&&i.jsx("div",{className:"service-catalog",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"catalog-header",children:[i.jsx("h2",{children:"SERVICE CATALOG"}),i.jsxs("div",{className:"catalog-tabs",children:[i.jsx("button",{className:`tab-btn ${S==="overview"?"active":""}`,onClick:()=>H("overview"),children:"OVERVIEW"}),i.jsx("button",{className:`tab-btn ${S==="technical"?"active":""}`,onClick:()=>H("technical"),children:"TECHNICAL SPECS"}),i.jsx("button",{className:`tab-btn ${S==="pricing"?"active":""}`,onClick:()=>H("pricing"),children:"PRICING"})]})]}),i.jsx("div",{className:"catalog-content",children:B.map(Y=>i.jsxs("div",{className:"catalog-item",children:[i.jsxs("div",{className:"item-header",children:[i.jsxs("div",{className:"item-id",children:[i.jsx("span",{className:"item-code",children:Y.code}),i.jsx("span",{className:"item-category",children:Y.category.toUpperCase()})]}),i.jsx("h3",{children:Y.title})]}),i.jsxs("div",{className:"item-body",children:[i.jsxs("div",{className:"item-image",children:[i.jsx("img",{src:Y.image,alt:Y.title}),i.jsx("div",{className:"item-badge",children:Y.icon})]}),i.jsxs("div",{className:"item-content",children:[S==="overview"&&i.jsxs("div",{className:"overview-content",children:[i.jsx("p",{children:Y.description}),i.jsx("div",{className:"features-list",children:Y.features.map((_,O)=>i.jsx("span",{className:"feature-tag",children:_},O))})]}),S==="technical"&&i.jsx("div",{className:"technical-content",children:i.jsx("div",{className:"tech-specs",children:Object.entries(Y.specifications).map(([_,O])=>i.jsxs("div",{className:"tech-row",children:[i.jsx("span",{className:"tech-label",children:_}),i.jsx("span",{className:"tech-value",children:O})]},_))})}),S==="pricing"&&i.jsxs("div",{className:"pricing-content",children:[i.jsx("div",{className:"price-display",children:i.jsx("span",{className:"price-amount",children:Y.price})}),i.jsx("button",{className:"catalog-quote-btn",onClick:y,children:"GET DETAILED QUOTE"})]})]})]})]},Y.id))})]})}),i.jsxs("div",{className:"performance-metrics",children:[i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"98%"}),i.jsx("div",{className:"metric-label",children:"Project Completion Rate"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"250+"}),i.jsx("div",{className:"metric-label",children:"Projects Delivered"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"15+"}),i.jsx("div",{className:"metric-label",children:"Years Experience"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"92%"}),i.jsx("div",{className:"metric-label",children:"Client Satisfaction"})]})]}),i.jsx("div",{className:"quality-section",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"quality-grid",children:i.jsxs("div",{className:"quality-content",children:[i.jsx("div",{className:"content-header",children:i.jsx("h2",{children:"QUALITY ASSURANCE PROTOCOL"})}),i.jsxs("div",{className:"assurance-items",children:[i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"01"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"15+ Years Experience"}),i.jsx("p",{children:"Proven track record in delivering quality construction projects across various sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"02"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"60+ Projects Completed"}),i.jsx("p",{children:"Successfully delivered projects across residential, commercial, and industrial sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"03"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"Quality Materials"}),i.jsx("p",{children:"We use only premium quality materials from trusted suppliers ensuring longevity"})]})]})]})]})})})}),i.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .workshop-page {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Workshop Header */
        .workshop-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 20px;
          position: relative;
        }

        .workshop-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(183, 156, 92, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 156, 92, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .header-grid {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border: 3px solid #2D3748;
          padding: 60px;
        }

        .blueprint-corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid #B79C5C;
        }

        .blueprint-corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .blueprint-corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .blueprint-corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .blueprint-corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .header-content {
          text-align: center;
        }

        .project-label {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 10px;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .label-text {
          font-weight: 700;
          color: #B79C5C;
        }

        .label-value {
          color: #2D3748;
        }

        .workshop-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin: 40px 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
        }

        .workshop-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .workshop-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
        }

        .workshop-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-selector {
          display: flex;
          gap: 20px;
          justify-content: center;
        }

        .selector-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .selector-btn.active {
          background: #2D3748;
          color: white;
        }

        .selector-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-symbol {
          font-size: 14px;
        }

        /* Workshop Floor */
        .workshop-floor {
          padding: 80px 0;
          background: white;
        }

        .floor-plan {
          background: white;
          border: 2px solid #2D3748;
          padding: 40px;
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .plan-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .plan-details {
          display: flex;
          gap: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .workstations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .workstation {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .workstation:hover {
          transform: scale(1.02);
        }

        .station-frame {
          position: relative;
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 25px;
          transition: all 0.3s ease;
        }

        .workstation.active .station-frame {
          background: white;
          border-color: #B79C5C;
          box-shadow: 0 15px 35px rgba(183, 156, 92, 0.2);
        }

        .frame-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #B79C5C;
        }

        .corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .station-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .station-id {
          font-size: 14px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .station-code {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .station-image {
          position: relative;
          height: 180px;
          overflow: hidden;
          margin-bottom: 20px;
          border: 1px solid #2D3748;
        }

        .station-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .workstation:hover .station-image img {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(45, 55, 72, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .workstation:hover .image-overlay {
          opacity: 1;
        }

        .overlay-icon {
          font-size: 3rem;
          color: white;
        }

        .station-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .station-info h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
        }

        .station-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .station-details {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #B79C5C;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .details-section {
          margin-bottom: 25px;
        }

        .details-section h4 {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .details-section p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .spec-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 12px;
          color: #2D3748;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #666;
        }

        .feature-bullet {
          color: #B79C5C;
          font-size: 14px;
        }

        .pricing-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f8f9fa;
          padding: 20px;
          border: 1px solid #2D3748;
        }

        .price-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .price-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .price-value {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
        }

        .quote-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .quote-btn:hover {
          background: #B79C5C;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .quote-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Service Catalog */
        .service-catalog {
          padding: 80px 0;
          background: white;
        }

        .catalog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .catalog-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .catalog-tabs {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .tab-btn {
          padding: 12px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn.active {
          background: #2D3748;
          color: white;
        }

        .tab-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .catalog-content {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .catalog-item {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #B79C5C;
        }

        .item-id {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .item-code {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .item-category {
          font-size: 10px;
          color: #666;
          letter-spacing: 1px;
        }

        .item-header h3 {
          font-size: 24px;
          font-weight: 600;
          color: #2D3748;
        }

        .item-body {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 30px;
        }

        .item-image {
          position: relative;
          height: 150px;
          border: 2px solid #2D3748;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(45, 55, 72, 0.9);
          color: white;
          padding: 8px;
          border-radius: 4px;
          font-size: 20px;
        }

        .overview-content p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          margin-bottom: 20px;
        }

        .features-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .feature-tag {
          padding: 6px 12px;
          background: white;
          border: 1px solid #B79C5C;
          color: #B79C5C;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .tech-specs {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .tech-row {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          background: white;
          border: 1px solid #2D3748;
        }

        .tech-label {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .tech-value {
          font-size: 12px;
          color: #2D3748;
        }

        .pricing-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .price-display {
          text-align: center;
          padding: 30px;
          background: white;
          border: 2px solid #B79C5C;
        }

        .price-amount {
          font-size: 24px;
          font-weight: 700;
          color: #B79C5C;
        }

        .catalog-quote-btn {
          padding: 15px 30px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .catalog-quote-btn:hover {
          background: #B79C5C;
        }

        /* Workshop Performance Metrics */
        .performance-metrics {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 40px;
          margin-bottom: 40px;
        }

        .metric-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .metric-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .metric-label {
          font-size: 0.9rem;
          color: #6c757d;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Responsive adjustments for metrics */
        @media (max-width: 992px) {
          .performance-metrics {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .metric-value {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .performance-metrics {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          
          .metric-card {
            padding: 15px;
          }
          
          .metric-value {
            font-size: 2rem;
          }
          
          .metric-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .performance-metrics {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .metric-card {
            padding: 20px;
          }
          
          .metric-value {
            font-size: 2.2rem;
          }
          
          .metric-label {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 360px) {
          .performance-metrics {
            max-width: 260px;
          }
          
          .metric-card {
            padding: 15px 10px;
          }
          
          .metric-value {
            font-size: 1.8rem;
          }
          
          .metric-label {
            font-size: 0.75rem;
            letter-spacing: 0.5px;
          }
        }

        /* Quality Assurance */
        .quality-section {
          padding: 80px 0;
          background: white;
        }

        .quality-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .content-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .protocol-id {
          font-size: 12px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .assurance-items {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .assurance-item {
          display: flex;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .item-marker {
          width: 40px;
          height: 40px;
          background: #2D3748;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          flex-shrink: 0;
        }

        .item-data h4 {
          font-size: 16px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .item-data p {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
        }

        .certification-panel {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
          height: fit-content;
        }

        .cert-header {
          margin-bottom: 30px;
          text-align: center;
        }

        .cert-header h3 {
          font-size: 16px;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 1px;
        }

        .cert-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .cert-badge {
          width: 40px;
          height: 40px;
          background: #B79C5C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 1px;
        }

        .cert-item span {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .workstations-grid {
            grid-template-columns: 1fr;
          }
          
          .item-body {
            grid-template-columns: 1fr;
          }
          
          .quality-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .spec-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .workshop-title {
            font-size: 1.6rem;
          }
          
          .view-selector {
            flex-direction: column;
            align-items: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .plan-details {
            flex-direction: column;
            gap: 10px;
          }
          
          .header-grid {
            padding: 40px 20px;
          }
        }
          /* Responsive Design */
        @media (max-width: 768px) {
          .workshop-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }
          
          .workstations-grid {
            grid-template-columns: 1fr;
          }
          
          .item-body {
            grid-template-columns: 1fr;
          }
          
          .quality-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .spec-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .workshop-title {
            font-size: 1.25rem;
            letter-spacing: 0px;
            line-height: 1.1;
            word-break: break-word;
            hyphens: auto;
          }
          
          .header-grid {
            padding: 30px 10px;
          }
          
          .project-label {
            flex-direction: column;
            gap: 5px;
            font-size: 10px;
          }
          
          .selector-btn {
            padding: 12px 15px;
            font-size: 10px;
          }
        }

        @media (max-width: 360px) {
          .workshop-title {
            font-size: 1.1rem;
            letter-spacing: 0px;
            line-height: 1.1;
          }
          
          .header-grid {
            padding: 25px 10px;
          }
        }

        @media (max-width: 320px) {
          .workshop-title {
            font-size: 1.3rem;
            letter-spacing: 0px;
            word-break: break-word;
          }
          
          .header-grid {
            padding: 25px 10px;
          }
        }
      `})]})},xp=({openPopup:y})=>{const[L,Q]=v.useState(!1),[d,R]=v.useState("residential"),[C,E]=v.useState(null),[S,H]=v.useState("estimates"),D=v.useRef(null);v.useEffect(()=>{const O=new IntersectionObserver(I=>{I.forEach(oe=>{oe.isIntersecting&&Q(!0)})},{threshold:.1});return D.current&&O.observe(D.current),()=>{D.current&&O.unobserve(D.current)}},[]);const B=[{id:"residential",label:"RESIDENTIAL",icon:"🏠",color:"#B79C5C"},{id:"commercial",label:"COMMERCIAL",icon:"🏢",color:"#2D3748"},{id:"interior",label:"INTERIOR",icon:"🎨",color:"#B79C5C"},{id:"renovation",label:"RENOVATION",icon:"🔨",color:"#2D3748"}],_={residential:[{title:"STANDARD RESIDENTIAL",baseRate:"₹1,600",totalCost:"₹16,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Cost-effective residential construction with standard specifications",costBreakdown:{"Site Preparation":"8%","Foundation Work":"15%","Structural Framework":"25%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"18%","Finishing & Paint":"15%","Fixtures & Fittings":"7%"},included:["Architectural Planning","Structural Design","Site Supervision","Quality Control","Material Supply","Labor Management"],status:"STANDARD"},{title:"PREMIUM RESIDENTIAL",baseRate:"₹2,200",totalCost:"₹22,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Enhanced residential construction with premium specifications",costBreakdown:{"Site Preparation":"6%","Foundation Work":"14%","Structural Framework":"24%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"20%","Finishing & Paint":"18%","Fixtures & Fittings":"6%"},included:["3D Architectural Design","Structural Engineering","Project Management","Quality Assurance","Premium Material Supply","Skilled Labor Team","Interior Consultation"],status:"RECOMMENDED"},{title:"LUXURY RESIDENTIAL",classification:"LUXURY CLASS",baseRate:"₹3,500",totalCost:"₹35,00,000",area:"1000 sq ft",timeline:"12-15 months",description:"High-end residential construction with luxury specifications",costBreakdown:{"Site Preparation":"5%","Foundation Work":"12%","Structural Framework":"22%","Roofing & Waterproofing":"10%","Electrical & Plumbing":"22%","Finishing & Paint":"22%","Fixtures & Fittings":"7%"},specifications:["Steel Frame Structure","Imported Premium Materials","Smart Home Automation","Luxury Plumbing Systems","Marble & Hardwood Flooring","Designer Paint & Textures","24 Months Warranty"],included:["Custom Architectural Design","Structural Engineering","Project Management","Quality Control","Luxury Material Supply","Expert Craftsmen","Interior Design","Landscape Planning"],compliance:["NBC 2016","IS Codes","Green Building","LEED Standards"],status:"PREMIUM"}],commercial:[{title:"STANDARD COMMERCIAL",code:"COM-STD-001",classification:"COMMERCIAL GRADE",baseRate:"₹1,800",totalCost:"₹18,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Standard commercial construction for offices and retail",costBreakdown:{"Site Preparation":"7%","Foundation Work":"16%","Structural Framework":"28%","Roofing & Waterproofing":"10%","Electrical & HVAC":"20%",Finishing:"14%","Commercial Fittings":"5%"},specifications:["Commercial RCC Structure","Fire-Resistant Materials","Commercial Electrical Setup","HVAC Ready Infrastructure","Commercial Grade Flooring","Weather Resistant Finishes","12 Months Warranty"],included:["Commercial Planning","Structural Design","MEP Engineering","Project Coordination","Material Supply","Commercial Installation"],compliance:["NBC 2016","Fire Safety","Commercial Codes"],status:"STANDARD"},{title:"PREMIUM COMMERCIAL",code:"COM-PREM-002",classification:"PREMIUM COMMERCIAL",baseRate:"₹2,800",totalCost:"₹28,00,000",area:"1000 sq ft",timeline:"10-12 months",description:"Modern commercial construction with advanced systems",costBreakdown:{"Site Preparation":"6%","Foundation Work":"15%","Structural Framework":"26%","Roofing & Waterproofing":"9%","Electrical & HVAC":"24%",Finishing:"16%","Premium Fittings":"4%"},specifications:["Steel Frame Commercial","Premium Fire Safety Systems","Advanced Electrical & HVAC","Smart Building Infrastructure","Premium Commercial Flooring","High-Performance Finishes","18 Months Warranty"],included:["Modern Commercial Design","MEP Engineering","Building Automation","Project Management","Premium Materials","Professional Installation","System Integration"],compliance:["NBC 2016","Fire Safety","Green Building","IGBC"],status:"RECOMMENDED"},{title:"LUXURY COMMERCIAL",code:"COM-LUX-003",classification:"LUXURY COMMERCIAL",baseRate:"₹4,200",totalCost:"₹42,00,000",area:"1000 sq ft",timeline:"12-18 months",description:"High-end commercial spaces with luxury finishes",costBreakdown:{"Site Preparation":"4%","Foundation Work":"13%","Structural Framework":"24%","Roofing & Waterproofing":"8%","Electrical & HVAC":"26%",Finishing:"20%","Luxury Fittings":"5%"},specifications:["Premium Steel Structure","Luxury Fire Safety Systems","Smart Building Automation","Advanced HVAC Systems","Luxury Commercial Flooring","Designer Finishes","24 Months Warranty"],included:["Luxury Commercial Design","Advanced MEP Systems","Building Management Systems","Project Management","Luxury Materials","Expert Installation","Complete Integration","Maintenance Package"],compliance:["NBC 2016","LEED Platinum","Green Building","IGBC"],status:"PREMIUM"}],interior:[{title:"BASIC INTERIOR",code:"INT-BAS-001",classification:"ESSENTIAL INTERIOR",baseRate:"₹800",totalCost:"₹8,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential interior design and execution",costBreakdown:{"Space Planning":"10%","Electrical Work":"20%","Furniture & Fixtures":"35%","Flooring & Tiling":"15%","Paint & Finishes":"12%",Installation:"8%"},specifications:["Basic Space Planning","Standard Lighting","Modular Furniture","Laminate Flooring","Standard Paint","Basic Fixtures","6 Months Warranty"],included:["Interior Planning","Furniture Design","Electrical Layout","Material Supply","Installation Service","Basic Styling"],compliance:["Interior Standards","Safety Codes"],status:"STANDARD"},{title:"PREMIUM INTERIOR",code:"INT-PREM-002",classification:"DESIGNER INTERIOR",baseRate:"₹1,500",totalCost:"₹15,00,000",area:"1000 sq ft",timeline:"3-4 months",description:"Complete interior design transformation",costBreakdown:{"Design & Planning":"12%","Electrical & Lighting":"22%","Custom Furniture":"30%","Premium Flooring":"18%","Designer Finishes":"15%",Installation:"3%"},specifications:["Professional Space Planning","Designer Lighting Solutions","Custom Furniture Design","Premium Flooring Options","Designer Paint & Textures","Premium Fixtures","12 Months Warranty"],included:["3D Interior Design","Custom Furniture","Lighting Design","Premium Materials","Professional Installation","Interior Styling","Project Management"],compliance:["Interior Standards","Design Codes","Safety Standards"],status:"RECOMMENDED"},{title:"LUXURY INTERIOR",code:"INT-LUX-003",classification:"LUXURY INTERIOR",baseRate:"₹2,500",totalCost:"₹25,00,000",area:"1000 sq ft",timeline:"4-6 months",description:"Bespoke luxury interior design",costBreakdown:{"Luxury Design":"15%","Smart Lighting":"20%","Bespoke Furniture":"25%","Luxury Flooring":"20%","Designer Finishes":"17%",Installation:"3%"},specifications:["Luxury Space Planning","Smart Lighting Systems","Bespoke Furniture","Luxury Flooring Materials","Designer Paint & Textures","Luxury Fixtures & Art","18 Months Warranty"],included:["Luxury Interior Design","Bespoke Furniture","Smart Home Integration","Luxury Materials","Expert Installation","Interior Styling","Project Management","Maintenance Package"],compliance:["Luxury Standards","Design Excellence","Safety Codes"],status:"PREMIUM"}],renovation:[{title:"BASIC RENOVATION",classification:"ESSENTIAL RENOVATION",baseRate:"₹600",totalCost:"₹6,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential renovation and repair work",costBreakdown:{"Assessment & Planning":"8%",Demolition:"15%","Structural Repairs":"25%","Electrical Updates":"20%","Plumbing Updates":"15%","Finishing Work":"17%"},specifications:["Structural Assessment","Basic Electrical Updates","Plumbing Repairs","Standard Paint Refresh","Basic Fixture Replacement","Cleaning Service","6 Months Warranty"],included:["Renovation Planning","Demolition Work","Basic Repairs","Material Supply","Installation Service","Cleanup"],compliance:["Building Codes","Safety Standards"],status:"STANDARD"},{title:"COMPLETE RENOVATION",classification:"COMPREHENSIVE RENOVATION",baseRate:"₹1,200",totalCost:"₹12,00,000",area:"1000 sq ft",timeline:"4-5 months",description:"Complete renovation with modern upgrades",costBreakdown:{"Planning & Design":"10%",Demolition:"12%","Structural Work":"22%","Electrical Upgrade":"22%","Plumbing Upgrade":"18%","Premium Finishing":"16%"},specifications:["Complete Renovation Design","Modern Electrical Systems","Advanced Plumbing","Premium Paint & Finishes","Modern Fixture Installation","Structural Modifications","12 Months Warranty"],included:["Renovation Design","Comprehensive Demolition","System Upgrades","Premium Materials","Professional Installation","Project Management","Deep Cleaning"],compliance:["NBC 2016","Safety Standards","Modern Codes"],status:"RECOMMENDED"},{title:"LUXURY RENOVATION",classification:"LUXURY RENOVATION",baseRate:"₹2,000",totalCost:"₹20,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Premium renovation with luxury upgrades",costBreakdown:{"Luxury Design":"12%","Selective Demolition":"10%","Premium Structural":"20%","Smart Electrical":"24%","Luxury Plumbing":"20%","Designer Finishing":"14%"},specifications:["Luxury Renovation Design","Smart Home Integration","Luxury Plumbing Systems","Designer Finishes","Luxury Fixture Installation","Architectural Modifications","18 Months Warranty"],included:["Luxury Design Planning","Precision Demolition","Premium Upgrades","Luxury Materials","Expert Installation","Project Management","Professional Staging","Maintenance Package"],compliance:["NBC 2016","Luxury Standards","Green Building"],status:"PREMIUM"}]}[d];return i.jsxs("div",{className:"estimation-lab",ref:D,children:[i.jsx("div",{className:"lab-header",children:i.jsxs("div",{className:"header-frame",children:[i.jsxs("div",{className:"blueprint-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"lab-info",children:[i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PROJECT TYPE:"}),i.jsx("span",{className:"info-value",children:"CONSTRUCTION COST ESTIMATION"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PRICING STRUCTURE:"}),i.jsx("span",{className:"info-value",children:"TRANSPARENT & COMPETITIVE"})]})]}),i.jsx("h1",{className:`lab-title ${L?"visible":""}`,children:"CONSTRUCTION PRICING"}),i.jsx("p",{className:`lab-subtitle ${L?"visible":""}`,children:"Professional cost estimation and project analysis for construction projects"}),i.jsxs("div",{className:"view-controls",children:[i.jsxs("button",{className:`control-btn ${S==="estimates"?"active":""}`,onClick:()=>H("estimates"),children:[i.jsx("span",{className:"btn-icon",children:"📋"}),"Cost Estimates"]}),i.jsxs("button",{className:`control-btn ${S==="breakdown"?"active":""}`,onClick:()=>H("breakdown"),children:[i.jsx("span",{className:"btn-icon",children:"📊"}),"Cost Breakdown"]})]})]})]})}),i.jsx("div",{className:"category-lab",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"lab-section-header",children:[i.jsx("h2",{children:"PROJECT CLASSIFICATION"}),i.jsx("div",{className:"classification-grid",children:B.map(O=>i.jsxs("div",{className:`classification-card ${d===O.id?"active":""}`,onClick:()=>R(O.id),children:[i.jsxs("div",{className:"card-header",children:[i.jsx("div",{className:"card-code",children:O.code}),i.jsx("div",{className:"card-icon",children:O.icon})]}),i.jsx("div",{className:"card-title",children:O.label}),i.jsxs("div",{className:"card-status",children:[i.jsx("span",{className:"status-indicator"}),"AVAILABLE"]})]},O.id))})]})})}),S==="estimates"&&i.jsx("div",{className:"estimates-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"estimates-header",children:[i.jsxs("h2",{children:["PROJECT ESTIMATES - ",d.toUpperCase()]}),i.jsx("div",{className:"estimates-meta"})]}),i.jsx("div",{className:"estimates-grid",children:_.map((O,I)=>i.jsxs("div",{className:`estimate-sheet ${O.status.toLowerCase()}`,onClick:()=>E(C===I?null:I),children:[i.jsxs("div",{className:"sheet-header",children:[i.jsxs("div",{className:"estimate-id",children:[i.jsx("span",{className:"id-code",children:O.code}),i.jsx("span",{className:"id-class",children:O.classification})]}),i.jsx("div",{className:"estimate-status",children:i.jsx("span",{className:`status-badge ${O.status.toLowerCase()}`,children:O.status})})]}),i.jsxs("div",{className:"sheet-content",children:[i.jsx("h3",{children:O.title}),i.jsx("p",{className:"estimate-description",children:O.description}),i.jsxs("div",{className:"cost-display",children:[i.jsxs("div",{className:"base-rate",children:[i.jsx("span",{className:"rate-label",children:"BASE RATE:"}),i.jsxs("span",{className:"rate-value",children:[O.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"total-cost",children:[i.jsx("span",{className:"cost-label",children:"ESTIMATED COST:"}),i.jsx("span",{className:"cost-value",children:O.totalCost})]})]}),i.jsxs("div",{className:"project-specs",children:[i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"AREA:"}),i.jsx("span",{className:"spec-value",children:O.area})]}),i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"TIMELINE:"}),i.jsx("span",{className:"spec-value",children:O.timeline})]})]}),C===I&&i.jsxs("div",{className:"detailed-estimate",children:[i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"COST BREAKDOWN"}),i.jsx("div",{className:"breakdown-grid",children:Object.entries(O.costBreakdown).map(([oe,q])=>i.jsxs("div",{className:"breakdown-item",children:[i.jsx("span",{className:"item-name",children:oe}),i.jsx("span",{className:"item-percentage",children:q})]},oe))})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"INCLUDED SERVICES"}),i.jsx("div",{className:"included-grid",children:O.included.map((oe,q)=>i.jsxs("div",{className:"included-item",children:[i.jsx("span",{className:"include-check",children:"✓"}),oe]},q))})]}),i.jsx("div",{className:"estimate-footer",children:i.jsxs("button",{className:"request-quote-btn",onClick:y,children:["REQUEST DETAILED QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})})]})]})]},I))})]})}),S==="breakdown"&&i.jsx("div",{className:"breakdown-section",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"breakdown-header",children:i.jsxs("h2",{children:["COST ANALYSIS - ",d.toUpperCase()]})}),i.jsx("div",{className:"analysis-grid",children:_.map((O,I)=>i.jsxs("div",{className:"analysis-card",children:[i.jsxs("div",{className:"analysis-header",children:[i.jsx("h3",{children:O.title}),i.jsx("div",{className:"analysis-code",children:O.code})]}),i.jsxs("div",{className:"cost-chart",children:[i.jsx("div",{className:"chart-title",children:"COST DISTRIBUTION"}),i.jsx("div",{className:"chart-bars",children:Object.entries(O.costBreakdown).map(([oe,q],ee)=>i.jsxs("div",{className:"chart-bar",children:[i.jsxs("div",{className:"bar-info",children:[i.jsx("span",{className:"bar-label",children:oe}),i.jsx("span",{className:"bar-percentage",children:q})]}),i.jsx("div",{className:"bar-visual",children:i.jsx("div",{className:"bar-fill",style:{width:q}})})]},ee))})]}),i.jsxs("div",{className:"analysis-summary",children:[i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Base Rate:"}),i.jsxs("span",{children:[O.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Total Cost:"}),i.jsx("span",{children:O.totalCost})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Timeline:"}),i.jsx("span",{children:O.timeline})]})]})]},I))})]})}),i.jsx("div",{className:"lab-statistics",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"stats-frame",children:[i.jsx("div",{className:"stats-header",children:i.jsx("h2",{children:"ESTIMATION LAB METRICS"})}),i.jsxs("div",{className:"metrics-grid",children:[i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"📋"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"60+"}),i.jsx("span",{className:"metric-label",children:"Estimates Delivered"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"💰"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"95%"}),i.jsx("span",{className:"metric-label",children:"Cost Accuracy"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"⏱️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"24hrs"}),i.jsx("span",{className:"metric-label",children:"Quote Turnaround"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"🛡️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"100%"}),i.jsx("span",{className:"metric-label",children:"Transparency"})]})]})]})]})})}),i.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .estimation-lab {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Lab Header */
        .lab-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 80px 20px;
          position: relative;
        }

        .lab-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(183, 156, 92, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183, 156, 92, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .header-frame {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          background: white;
          border: 3px solid #2D3748;
          padding: 60px;
        }

        .blueprint-corners {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border: 3px solid #B79C5C;
        }

        .corner.tl { top: -3px; left: -3px; border-right: none; border-bottom: none; }
        .corner.tr { top: -3px; right: -3px; border-left: none; border-bottom: none; }
        .corner.bl { bottom: -3px; left: -3px; border-right: none; border-top: none; }
        .corner.br { bottom: -3px; right: -3px; border-left: none; border-top: none; }

        .header-content {
          text-align: center;
        }

        .lab-info {
          margin-bottom: 40px;
        }

        .info-line {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 2px;
        }

        .info-label {
          font-weight: 700;
          color: #B79C5C;
        }

        .info-value {
          color: #2D3748;
        }

        .lab-title {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin: 40px 0 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease;
          word-wrap: break-word;
          hyphens: auto;
          line-height: 1.1;
        }

        .lab-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .lab-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 40px;
          letter-spacing: 1px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease 0.3s;
          line-height: 1.4;
        }

        .lab-subtitle.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .view-controls {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .control-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 25px;
          border: 2px solid #2D3748;
          background: transparent;
          color: #2D3748;
          font-family: inherit;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn.active {
          background: #2D3748;
          color: white;
        }

        .control-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-icon {
          font-size: 14px;
        }

        /* Category Lab */
        .category-lab {
          padding: 80px 0;
          background: white;
        }

        .lab-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .lab-section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }

        .classification-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .classification-card {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .classification-card.active {
          background: white;
          border-color: #B79C5C;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(183, 156, 92, 0.2);
        }

        .classification-card:hover:not(.active) {
          border-color: #B79C5C;
          transform: translateY(-3px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-code {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .card-icon {
          font-size: 2rem;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 15px;
          letter-spacing: 1px;
        }

        .card-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Estimates Section */
        .estimates-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .estimates-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .estimates-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .estimates-meta {
          display: flex;
          gap: 30px;
          font-size: 11px;
          font-weight: 600;
          color: #666;
          letter-spacing: 1px;
        }

        .estimates-grid {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .estimate-sheet {
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .estimate-sheet:hover {
          border-color: #B79C5C;
          box-shadow: 0 10px 25px rgba(183, 156, 92, 0.15);
        }

        .estimate-sheet.recommended {
          border-color: #B79C5C;
          background: linear-gradient(135deg, #ffffff 0%, rgba(183, 156, 92, 0.02) 100%);
        }

        .sheet-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 1px solid #e9ecef;
        }

        .estimate-id {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .id-code {
          font-size: 14px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
        }

        .id-class {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
        }

        .status-badge {
          padding: 6px 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
        }

        .status-badge.standard {
          background: #e9ecef;
          color: #2D3748;
        }

        .status-badge.recommended {
          background: #B79C5C;
          color: white;
        }

        .status-badge.premium {
          background: #2D3748;
          color: white;
        }

        .sheet-content h3 {
          font-size: 24px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 10px;
        }

        .estimate-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        .cost-display {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 25px;
          padding: 20px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .base-rate, .total-cost {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .rate-label, .cost-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .rate-value, .cost-value {
          font-size: 20px;
          font-weight: 700;
          color: #2D3748;
        }

        .project-specs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .spec-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
        }

        .spec-label {
          font-size: 11px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .spec-value {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
        }

        .detailed-estimate {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 2px solid #B79C5C;
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .detail-section {
          margin-bottom: 30px;
        }

        .detail-section h4 {
          font-size: 14px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .breakdown-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .breakdown-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
        }

        .item-name {
          font-size: 11px;
          color: #2D3748;
          font-weight: 600;
        }

        .item-percentage {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 700;
        }

        .specs-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 10px;
        }

        .spec-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #666;
        }

        .spec-bullet {
          color: #B79C5C;
          font-size: 14px;
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 10px;
        }

        .included-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #666;
        }

        .include-check {
          color: #22c55e;
          font-weight: 700;
        }

        .estimate-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
        }

        .compliance-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .compliance-label {
          font-size: 10px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .compliance-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .compliance-tag {
          padding: 4px 8px;
          background: #f8f9fa;
          border: 1px solid #B79C5C;
          color: #B79C5C;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .request-quote-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #2D3748;
          color: white;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .request-quote-btn:hover {
          background: #B79C5C;
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .request-quote-btn:hover .btn-arrow {
          transform: translateX(5px);
        }

        /* Breakdown Section */
        .breakdown-section {
          padding: 80px 0;
          background: white;
        }

        .breakdown-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .breakdown-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .analysis-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .analysis-card {
          background: #f8f9fa;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .analysis-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #B79C5C;
        }

        .analysis-header h3 {
          font-size: 18px;
          font-weight: 600;
          color: #2D3748;
        }

        .analysis-code {
          font-size: 11px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .cost-chart {
          margin-bottom: 30px;
        }

        .chart-title {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .chart-bars {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .chart-bar {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .bar-info {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
        }

        .bar-label {
          color: #2D3748;
          font-weight: 600;
        }

        .bar-percentage {
          color: #B79C5C;
          font-weight: 700;
        }

        .bar-visual {
          height: 8px;
          background: #e9ecef;
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #B79C5C, #2D3748);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .analysis-summary {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          background: white;
          border: 1px solid #2D3748;
          font-size: 12px;
        }

        .summary-row span:first-child {
          color: #666;
          font-weight: 600;
        }

        .summary-row span:last-child {
          color: #2D3748;
          font-weight: 700;
        }

        /* Lab Statistics */
        .lab-statistics {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-frame {
          background: white;
          border: 2px solid #2D3748;
          padding: 40px;
        }

        .stats-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 2px solid #B79C5C;
        }

        .stats-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
        }

        .metrics-id {
          font-size: 12px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .metric-panel {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 25px;
          background: #f8f9fa;
          border: 1px solid #2D3748;
          transition: all 0.3s ease;
        }

        .metric-panel:hover {
          border-color: #B79C5C;
          transform: translateY(-5px);
        }

        .panel-icon {
          font-size: 2.5rem;
        }

        .panel-data {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #B79C5C;
        }

        .metric-label {
          font-size: 12px;
          color: #2D3748;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .lab-header {
            padding: 60px 15px;
          }
          
          .header-frame {
            padding: 40px 20px;
          }
          
          .lab-title {
            font-size: 2.8rem;
            letter-spacing: 2px;
            line-height: 1.2;
          }
          
          .lab-subtitle {
            font-size: 14px;
            line-height: 1.5;
          }
          
          .estimates-header {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .estimates-meta {
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cost-display {
            grid-template-columns: 1fr;
          }
          
          .project-specs {
            grid-template-columns: 1fr;
          }
          
          .estimate-footer {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          
          .classification-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .lab-section-header h2 {
            font-size: 2rem;
          }
          
          .breakdown-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .lab-header {
            padding: 40px 10px;
          }
          
          .header-frame {
            padding: 30px 15px;
          }
          
          .lab-title {
            font-size: 1.8rem;
            letter-spacing: 1px;
            line-height: 1.3;
            word-break: break-word;
          }
          
          .lab-subtitle {
            font-size: 12px;
            line-height: 1.6;
            padding: 0 10px;
          }
          
          .view-controls {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          
          .control-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
          
          .classification-grid {
            grid-template-columns: 1fr;
          }
          
          .breakdown-grid {
            grid-template-columns: 1fr;
          }
          
          .included-grid {
            grid-template-columns: 1fr;
          }
          
          .estimates-meta {
            flex-direction: column;
            gap: 10px;
          }
          
          .info-line {
            flex-direction: column;
            gap: 5px;
          }
          
          .analysis-grid {
            grid-template-columns: 1fr;
          }
          
          .analysis-card {
            padding: 20px;
          }
          
          .lab-section-header h2 {
            font-size: 1.5rem;
          }
          
          .breakdown-header h2 {
            font-size: 1.5rem;
          }
          
          .estimates-header h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 375px) {
          .lab-title {
            font-size: 1.5rem;
            letter-spacing: 0.5px;
            line-height: 1.4;
          }
          
          .header-frame {
            padding: 20px 10px;
          }
          
          .container {
            padding: 0 15px;
          }
          
          .estimate-sheet {
            padding: 20px;
          }
          
          .classification-card {
            padding: 20px;
          }
        }
          
      `})]})},bp="/pavan-techno-constructions/assets/a1-sGu83T9_.gif",yp="/pavan-techno-constructions/assets/a2-CyeHT3-A.gif",vp="/pavan-techno-constructions/assets/a3-CwZT0UDn.gif",wp="/pavan-techno-constructions/assets/a4-Bt8HQudn.gif",jp="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",m0="/pavan-techno-constructions/assets/after2-CC4aGAP5.jpeg",Sp="/pavan-techno-constructions/assets/g4-DQasg1Pq.jpeg",Cp="/pavan-techno-constructions/assets/g5-CXXSX8Ar.jpeg",Ap="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",Np="/pavan-techno-constructions/assets/g8-C0Sbs0mt.jpeg",zp="/pavan-techno-constructions/assets/g10-CtDg70wl.jpeg",Ep="/pavan-techno-constructions/assets/g11-CtfksAgD.jpg",Tp="/pavan-techno-constructions/assets/g12-DZXer8D9.jpg",kp="/pavan-techno-constructions/assets/gettyimages-2196182262-612x612-BWLgUfjY.jpg",Mp="/pavan-techno-constructions/assets/gettyimages-1466540596-612x612-BauWDmSq.jpg",Dp="/pavan-techno-constructions/assets/gettyimages-1194207037-612x612-COrgk-1S.jpg",Bp="/pavan-techno-constructions/assets/gettyimages-1175826983-612x612-BEg54zBp.jpg",Rp="/pavan-techno-constructions/assets/AdobeStock_513154782_Preview-dPWSckgj.jpeg",Yp="/pavan-techno-constructions/assets/house-for-sale-thrissur-kalathode-CWPHWDyU.jpg",Op="/pavan-techno-constructions/assets/19958_file_5c7a5ba545f89-C-ILB962.jpg",Up=()=>{const[y,L]=v.useState(!1),[Q,d]=v.useState(""),[R,C]=v.useState(!1),[E,S]=v.useState(null),[H,D]=v.useState("featured"),[B,Y]=v.useState("blueprint"),_=v.useRef(null),O=v.useRef(null),I=v.useRef(null),oe=M=>{const K=_.current,le=O.current,X=I.current;if(!K||!le||!X)return;const $=K.getBoundingClientRect();let b=M.pageX-$.left;b<0&&(b=0),b>$.width&&(b=$.width),le.style.clipPath=`inset(0 ${$.width-b}px 0 0)`,X.style.left=`${b}px`},q=()=>C(!0),ee=()=>C(!1),g=M=>{R&&oe(M)},J=()=>C(!0),ae=()=>C(!1),ge=M=>{if(R){const K=M.touches[0];oe(K)}};v.useEffect(()=>(window.addEventListener("mouseup",ee),window.addEventListener("mousemove",g),window.addEventListener("touchend",ae),window.addEventListener("touchmove",ge),()=>{window.removeEventListener("mouseup",ee),window.removeEventListener("mousemove",g),window.removeEventListener("touchend",ae),window.removeEventListener("touchmove",ge)}),[R]);const ve={featured:[{src:m0,title:"Residential Transformation",type:"Renovation",year:"2024",area:"2,500 sq ft",duration:"6 months"},{src:zp,title:"Commercial Complex",type:"New Construction",year:"2024",area:"15,000 sq ft",duration:"18 months"}],residential:[{src:Sp,title:"Modern Villa",type:"Custom Home",year:"2024",area:"3,200 sq ft",duration:"8 months"},{src:Cp,title:"Urban Townhouse",type:"Multi-Family",year:"2023",area:"1,800 sq ft",duration:"5 months"},{src:Ap,title:"Luxury Estate",type:"High-End Residential",year:"2024",area:"6,500 sq ft",duration:"12 months"},{src:Rp,title:"Contemporary Home",type:"Single Family",year:"2024",area:"2,800 sq ft",duration:"7 months"},{src:Yp,title:"Traditional Villa",type:"Custom Build",year:"2023",area:"3,500 sq ft",duration:"9 months"},{src:Op,title:"Modern Bungalow",type:"Residential",year:"2024",area:"2,200 sq ft",duration:"6 months"},{src:Np,title:"Office Building",type:"Corporate",year:"2023",area:"25,000 sq ft",duration:"24 months"},{src:Ep,title:"Retail Center",type:"Commercial",year:"2024",area:"12,000 sq ft",duration:"10 months"},{src:Tp,title:"Industrial Facility",type:"Manufacturing",year:"2023",area:"40,000 sq ft",duration:"15 months"}],commercial:[{src:kp,title:"Modern Office Tower",type:"Corporate Headquarters",year:"2024",area:"35,000 sq ft",duration:"24 months"},{src:Mp,title:"Shopping Mall Complex",type:"Retail Development",year:"2023",area:"50,000 sq ft",duration:"30 months"},{src:Dp,title:"Business Park",type:"Mixed-Use Commercial",year:"2024",area:"45,000 sq ft",duration:"28 months"},{src:Bp,title:"Urban Office Space",type:"Corporate Interior",year:"2023",area:"18,000 sq ft",duration:"14 months"}],process:[{src:bp,title:"Foundation Work",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:yp,title:"Structural Development",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:vp,title:"Interior Finishing",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:wp,title:"Final Installation",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"}]},A=M=>{d(M),L(!0)},W=()=>{L(!1),d("")},w=M=>{M.target===M.currentTarget&&W()},ce=M=>{D(H===M?null:M)};return i.jsxs("div",{className:"portfolio-page",children:[i.jsx("div",{className:"blueprint-header",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"header-grid",children:[i.jsxs("div",{className:"title-block",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsx("div",{className:"project-info",children:i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"PROJECT:"}),i.jsx("span",{className:"value",children:"CONSTRUCTION PORTFOLIO"})]})}),i.jsx("h1",{className:"main-title",children:"PROJECT GALLERY"}),i.jsx("div",{className:"title-underline"})]}),i.jsx("div",{className:"view-controls",children:i.jsxs("div",{className:"control-panel",children:[i.jsx("div",{className:"panel-header",children:"VIEW MODE"}),i.jsxs("div",{className:"mode-buttons",children:[i.jsxs("button",{className:`mode-btn ${B==="blueprint"?"active":""}`,onClick:()=>Y("blueprint"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Blueprint"]}),i.jsxs("button",{className:`mode-btn ${B==="timeline"?"active":""}`,onClick:()=>Y("timeline"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Timeline"]})]})]})})]})})}),i.jsx("div",{className:"technical-section",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"drawing-header",children:i.jsx("h2",{children:"BEFORE & AFTER ANALYSIS"})}),i.jsxs("div",{className:"blueprint-frame",children:[i.jsxs("div",{className:"frame-markers",children:[i.jsx("div",{className:"marker top-left",children:"A"}),i.jsx("div",{className:"marker top-right",children:"B"}),i.jsx("div",{className:"marker bottom-left",children:"C"}),i.jsx("div",{className:"marker bottom-right",children:"D"})]}),i.jsxs("div",{className:"comparison-wrapper",ref:_,children:[i.jsx("img",{src:jp,alt:"Before",className:"before-image",ref:O}),i.jsx("img",{src:m0,alt:"After",className:"after-image"}),i.jsx("div",{className:"technical-slider",ref:I,onMouseDown:q,onTouchStart:J,children:i.jsxs("div",{className:"slider-guide",children:[i.jsx("div",{className:"guide-line"}),i.jsx("div",{className:"slider-handle",children:i.jsxs("div",{className:"handle-cross",children:[i.jsx("div",{className:"cross-h"}),i.jsx("div",{className:"cross-v"})]})})]})}),i.jsxs("div",{className:"technical-label before",children:[i.jsx("div",{className:"label-box",children:"BEFORE"}),i.jsx("div",{className:"dimension-line"})]}),i.jsxs("div",{className:"technical-label after",children:[i.jsx("div",{className:"label-box",children:"AFTER"}),i.jsx("div",{className:"dimension-line"})]})]})]})]})}),i.jsx("div",{className:"gallery-section",children:i.jsxs("div",{className:"container",children:[B==="blueprint"&&i.jsx("div",{className:"blueprint-layout",children:Object.entries(ve).map(([M,K])=>i.jsxs("div",{className:"project-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>ce(M),children:[i.jsxs("div",{className:"section-title",children:[i.jsx("span",{className:"section-symbol",children:"■"}),M.toUpperCase().replace("_"," "),i.jsxs("span",{className:"project-count",children:["(",K.length,")"]})]}),i.jsx("div",{className:"section-toggle",children:i.jsx("span",{className:`toggle-symbol ${H===M?"expanded":""}`,children:"+"})})]}),i.jsx("div",{className:`section-content ${H===M?"expanded":""}`,children:i.jsx("div",{className:"blueprint-grid",children:K.map((le,X)=>i.jsx("div",{className:"blueprint-card",onClick:()=>A(le.src),children:i.jsxs("div",{className:"card-frame",children:[i.jsx("div",{className:"frame-corner tl"}),i.jsx("div",{className:"frame-corner tr"}),i.jsx("div",{className:"frame-corner bl"}),i.jsx("div",{className:"frame-corner br"}),i.jsx("img",{src:le.src,alt:le.title}),i.jsx("div",{className:"card-overlay",children:i.jsxs("div",{className:"project-details",children:[i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TITLE:"}),i.jsx("span",{className:"detail-value",children:le.title})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TYPE:"}),i.jsx("span",{className:"detail-value",children:le.type})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"YEAR:"}),i.jsx("span",{className:"detail-value",children:le.year})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"AREA:"}),i.jsx("span",{className:"detail-value",children:le.area})]})]})})]})},X))})})]},M))}),B==="timeline"&&i.jsx("div",{className:"timeline-layout",children:i.jsxs("div",{className:"timeline-axis",children:[i.jsx("div",{className:"axis-line"}),Object.values(ve).flat().map((M,K)=>i.jsxs("div",{className:`timeline-item ${K%2===0?"left":"right"}`,onClick:()=>A(M.src),children:[i.jsxs("div",{className:"timeline-marker",children:[i.jsx("div",{className:"marker-dot"}),i.jsx("div",{className:"marker-line"})]}),i.jsxs("div",{className:"timeline-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("span",{className:"card-year",children:M.year}),i.jsx("span",{className:"card-type",children:M.type})]}),i.jsx("img",{src:M.src,alt:M.title}),i.jsxs("div",{className:"card-info",children:[i.jsx("h3",{children:M.title}),i.jsxs("div",{className:"card-specs",children:[i.jsx("span",{children:M.area}),i.jsx("span",{children:M.duration})]})]})]})]},K))]})})]})}),y&&i.jsx("div",{className:"technical-modal",onClick:w,children:i.jsxs("div",{className:"modal-frame",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("div",{className:"modal-title",children:"PROJECT DETAIL VIEW"}),i.jsx("button",{className:"modal-close",onClick:W,children:i.jsx("span",{className:"close-symbol",children:"×"})})]}),i.jsx("div",{className:"modal-content",children:i.jsx("img",{src:Q,alt:"Project Detail"})}),i.jsx("div",{className:"modal-footer",children:i.jsx("div",{className:"footer-line"})})]})}),i.jsx("style",{jsx:!0,children:`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio-page {
          font-family: 'Roboto Mono', 'Courier New', monospace;
          background: #f8f9fa;
          min-height: 100vh;
          color: #2D3748;
          padding-top: 80px; /* Added padding to prevent navbar overlap */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Blueprint Header */
        .blueprint-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 40px 0; /* Reduced from 60px to 40px */
          border-bottom: 2px solid #B79C5C;
          position: relative;
          margin-top: 20px; /* Added margin-top for additional spacing */
        }

        .blueprint-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20px 20px, #B79C5C 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.1;
        }

        .header-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .title-block {
          position: relative;
          background: white;
          padding: 40px;
          border: 2px solid #2D3748;
        }

        .blueprint-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #B79C5C;
        }

        .blueprint-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .blueprint-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .blueprint-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .blueprint-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .project-info {
          margin-bottom: 30px;
        }

        .info-line {
          display: flex;
          margin-bottom: 8px;
          font-size: 12px;
          letter-spacing: 1px;
        }

        .label {
          width: 80px;
          font-weight: 700;
          color: #B79C5C;
        }

        .value {
          color: #2D3748;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: 4px;
          color: #2D3748;
          margin-bottom: 15px;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: #B79C5C;
        }

        .view-controls {
          display: flex;
          justify-content: center;
        }

        .control-panel {
          background: white;
          border: 2px solid #2D3748;
          padding: 25px;
          width: 100%;
        }

        .panel-header {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #B79C5C;
          margin-bottom: 20px;
          text-align: center;
        }

        .mode-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mode-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border: 1px solid #2D3748;
          background: transparent;
          color: #2D3748;
          cursor: pointer;
          font-family: inherit;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .mode-btn.active {
          background: #2D3748;
          color: white;
        }

        .mode-btn:hover:not(.active) {
          background: #B79C5C;
          color: white;
          border-color: #B79C5C;
        }

        .btn-symbol {
          font-size: 14px;
        }

        /* Technical Section */
        .technical-section {
          padding: 80px 0;
          background: white;
        }

        .drawing-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #2D3748;
        }

        .drawing-header h2 {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #2D3748;
        }

        .drawing-number {
          font-size: 12px;
          font-weight: 700;
          color: #B79C5C;
          letter-spacing: 1px;
        }

        .blueprint-frame {
          position: relative;
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
        }

        .frame-markers {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .marker {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #B79C5C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .marker.top-left { top: -10px; left: -10px; }
        .marker.top-right { top: -10px; right: -10px; }
        .marker.bottom-left { bottom: -10px; left: -10px; }
        .marker.bottom-right { bottom: -10px; right: -10px; }

        .comparison-wrapper {
          position: relative;
          height: 500px;
          overflow: hidden;
        }

        .comparison-wrapper img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .before-image {
          z-index: 2;
          clip-path: inset(0 50% 0 0);
        }

        .after-image {
          z-index: 1;
        }

        .technical-slider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          cursor: ew-resize;
          z-index: 3;
          transform: translateX(-50%);
        }

        .slider-guide {
          position: relative;
          height: 100%;
        }

        .guide-line {
          width: 2px;
          height: 100%;
          background: #B79C5C;
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 30px;
          height: 30px;
          background: white;
          border: 2px solid #B79C5C;
          transform: translate(-50%, -50%);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .handle-cross {
          position: relative;
          width: 12px;
          height: 12px;
        }

        .cross-h, .cross-v {
          position: absolute;
          background: #B79C5C;
        }

        .cross-h {
          width: 12px;
          height: 2px;
          top: 5px;
        }

        .cross-v {
          width: 2px;
          height: 12px;
          left: 5px;
        }

        .technical-label {
          position: absolute;
          top: 20px;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .label-box {
          background: #2D3748;
          color: white;
          padding: 8px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .dimension-line {
          width: 40px;
          height: 2px;
          background: #B79C5C;
        }

        .technical-label.before {
          left: 20px;
        }

        .technical-label.after {
          right: 20px;
          flex-direction: row-reverse;
        }

        /* Gallery Section */
        .gallery-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        /* Blueprint Layout */
        .blueprint-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .project-section {
          background: white;
          border: 2px solid #2D3748;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 30px;
          background: #2D3748;
          color: white;
          cursor: pointer;
          user-select: none;
        }

        .section-title {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-symbol {
          color: #B79C5C;
        }

        .project-count {
          color: #B79C5C;
          font-size: 12px;
        }

        .toggle-symbol {
          font-size: 20px;
          font-weight: 700;
          transition: transform 0.3s ease;
        }

        .toggle-symbol.expanded {
          transform: rotate(45deg);
        }

        .section-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .section-content.expanded {
          max-height: 2000px;
        }

        .blueprint-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 30px;
        }

        .blueprint-card {
          position: relative;
          cursor: pointer;
          background: white;
        }

        .card-frame {
          position: relative;
          border: 2px solid #2D3748;
          overflow: hidden;
        }

        .frame-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          border: 2px solid #B79C5C;
          z-index: 2;
        }

        .frame-corner.tl { top: -2px; left: -2px; border-right: none; border-bottom: none; }
        .frame-corner.tr { top: -2px; right: -2px; border-left: none; border-bottom: none; }
        .frame-corner.bl { bottom: -2px; left: -2px; border-right: none; border-top: none; }
        .frame-corner.br { bottom: -2px; right: -2px; border-left: none; border-top: none; }

        .blueprint-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blueprint-card:hover img {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(45, 55, 72, 0.95));
          color: white;
          padding: 30px 20px 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .blueprint-card:hover .card-overlay {
          opacity: 1;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .detail-line {
          display: flex;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .detail-label {
          width: 50px;
          font-weight: 700;
          color: #B79C5C;
        }

        .detail-value {
          flex: 1;
        }

        /* Hexagon Layout */
        .hexagon-layout,
        .hex-grid,
        .hex-item,
        .hexagon,
        .hex-inner,
        .hex-overlay,
        .hex-content,
        .hex-number,
        .hex-title {
          display: none;
        }

        /* Timeline Layout */
        .timeline-layout {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-axis {
          position: relative;
          padding: 40px 0;
        }

        .axis-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #B79C5C;
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 60px;
          display: flex;
          align-items: center;
        }

        .timeline-item.left {
          justify-content: flex-end;
          padding-right: 60px;
        }

        .timeline-item.right {
          justify-content: flex-start;
          padding-left: 60px;
        }

        .timeline-marker {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          background: #2D3748;
          border: 4px solid #B79C5C;
          border-radius: 50%;
          z-index: 2;
        }

        .marker-line {
          width: 2px;
          height: 40px;
          background: #2D3748;
        }

        .timeline-card {
          background: white;
          border: 2px solid #2D3748;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          max-width: 300px;
        }

        .timeline-card:hover {
          border-color: #B79C5C;
          transform: scale(1.02);
        }

        .card-header {
          background: #2D3748;
          color: white;
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-year {
          font-weight: 700;
          font-size: 14px;
        }

        .card-type {
          font-size: 10px;
          color: #B79C5C;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .timeline-card img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .card-info {
          padding: 16px;
        }

        .card-info h3 {
          font-size: 14px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 8px;
        }

        .card-specs {
          display: flex;
          gap: 15px;
        }

        .card-specs span {
          font-size: 10px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Technical Modal */
        .technical-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(45, 55, 72, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-frame {
          background: white;
          border: 3px solid #2D3748;
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .modal-header {
          background: #2D3748;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .modal-close {
          background: #B79C5C;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 700;
        }

        .modal-close:hover {
          background: white;
          color: #B79C5C;
        }

        .modal-content img {
          max-width: 100%;
          max-height: 70vh;
          display: block;
        }

        .modal-footer {
          padding: 15px 20px;
        }

        .footer-line {
          height: 2px;
          background: #B79C5C;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .mode-buttons {
            flex-direction: row;
            justify-content: center;
          }
          
          .comparison-wrapper {
            height: 300px;
          }
          
          .blueprint-grid {
            grid-template-columns: 1fr;
          }
          
          .hex-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .timeline-item {
            flex-direction: column;
            padding: 0;
          }
          
          .timeline-item.left,
          .timeline-item.right {
            padding: 0;
          }
          
          .axis-line {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 1.5rem;
          }
          
          .hex-grid {
            grid-template-columns: 1fr;
          }
          
          .hexagon {
            width: 150px;
            height: 130px;
          }
          
          .timeline-card {
            max-width: 100%;
          }
        }
          /* Responsive Design */
        @media (max-width: 768px) {
          .header-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }
          
          .control-panel {
            padding: 20px 15px;
          }
          
          .mode-buttons {
            flex-direction: row;
            justify-content: center;
            gap: 8px;
          }
          
          .mode-btn {
            padding: 10px 12px;
            font-size: 10px;
            gap: 8px;
            flex: 1;
            justify-content: center;
            min-width: 0;
          }
          
          .btn-symbol {
            font-size: 12px;
          }
      `})]})},qp=()=>{const[y,L]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[Q,d]=v.useState({message:"",isError:!1,isSubmitting:!1}),R=v.useRef(null);v.useEffect(()=>{const S=new IntersectionObserver(H=>{H.forEach(D=>{D.isIntersecting&&D.target.classList.add("section-visible")})},{threshold:.2});return R.current&&S.observe(R.current),()=>{R.current&&S.unobserve(R.current)}},[]);const C=S=>{const{name:H,value:D}=S.target;L(B=>({...B,[H]:D}))},E=()=>{if(!y.name||!y.email||!y.phone||!y.package||!y.message){d({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{d({message:"",isError:!1,isSubmitting:!1})},3e3);return}d({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{d({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),L({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{d({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"contact-page",ref:R,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsx("div",{className:"container",children:i.jsx("div",{className:"form-wrapper",children:i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:y.name,onChange:C})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:y.email,onChange:C})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:y.phone,onChange:C})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:y.package,onChange:C,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"3",value:y.message,onChange:C})]}),i.jsx("div",{className:"form-status",children:Q.message&&i.jsx("div",{className:`status-message ${Q.isError?"error":"success"}`,children:Q.message})}),i.jsxs("button",{onClick:E,className:"btn btn-primary",disabled:Q.isSubmitting,children:[i.jsx("span",{children:Q.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})})})]}),i.jsx("style",{jsx:!0,children:`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .contact-page {
          padding: 3rem 0;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .animated-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          opacity: 0.1;
        }

        .circle-1 {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          border-radius: 50%;
          top: 10%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .circle-2 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #B79C5C, #8b7355);
          border-radius: 50%;
          top: 70%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #007bff, #4dabf7);
          border-radius: 50%;
          bottom: 30%;
          left: 20%;
          animation: float 7s ease-in-out infinite;
        }

        .square-1 {
          width: 70px;
          height: 70px;
          background: linear-gradient(45deg, #B79C5C, #007bff);
          top: 40%;
          right: 10%;
          animation: rotate 10s linear infinite;
        }

        .triangle-1 {
          width: 0;
          height: 0;
          border-left: 40px solid transparent;
          border-right: 40px solid transparent;
          border-bottom: 70px solid rgba(183, 156, 92, 0.3);
          top: 20%;
          right: 30%;
          animation: float 5s ease-in-out infinite;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .form-wrapper {
          display: flex;
          justify-content: center;
          opacity: 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .section-visible .form-wrapper {
          animation: fadeIn 1s forwards 0.5s;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateY(30px);
          opacity: 0;
          width: 100%;
        }

        .section-visible .contact-form-container {
          animation: slideUp 0.8s forwards 0.8s;
        }

        .form-header {
          text-align: center;
          margin-bottom: 1.2rem;
        }

        .form-header h3 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #007bff;
          margin-bottom: 0.2rem;
          letter-spacing: 1px;
        }

        .form-header p {
          color: #B79C5C;
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .form-group {
          position: relative;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.3rem;
          color: #B79C5C;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid rgba(183, 156, 92, 0.2);
          border-radius: 10px;
          color: #000;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          background: rgba(255, 255, 255, 1);
          border-color: #007bff;
          box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(0, 0, 0, 0.5);
        }
        
        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23007bff' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 3rem;
        }
        
        .form-status {
          min-height: 30px;
          display: flex;
          align-items: center;
        }
        
        .status-message {
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          font-size: 0.85rem;
          width: 100%;
          text-align: center;
          font-weight: 500;
        }
        
        .status-message.error {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
          border: 1px solid rgba(220, 53, 69, 0.3);
        }
        
        .status-message.success {
          background: rgba(40, 167, 69, 0.1);
          color: #28a745;
          border: 1px solid rgba(40, 167, 69, 0.3);
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 0.8rem 1.8rem;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          margin-top: 0.5rem;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #B79C5C, #8b7355);
          transition: left 0.3s ease;
          z-index: -1;
        }
        
        .btn-primary:hover::before {
          left: 0;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.4);
        }
        
        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .btn-primary:disabled::before {
          display: none;
        }

        /* Mobile Responsiveness */
        @media (max-width: 992px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0.8rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-page {
            padding: 2rem 0;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-page {
            padding: 1.5rem 0;
          }

          .contact-form-container {
            padding: 1.2rem;
          }
          
          .form-header h3 {
            font-size: 1.4rem;
          }

          .btn-primary {
            padding: 0.7rem 1.5rem;
            font-size: 0.9rem;
          }

          /* Disable complex animations on mobile */
          .floating-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.5rem;
          }

          .contact-form-container {
            padding: 1rem;
          }
        }
      `})]})};function Lp(){const[y,L]=v.useState(!1),[Q,d]=v.useState(!1);v.useEffect(()=>{const E=()=>{window.scrollY>100?d(!0):d(!1)};return window.addEventListener("scroll",E),()=>{window.removeEventListener("scroll",E)}},[]);const R=()=>{L(!0)},C=()=>{L(!1)};return i.jsx(Um,{children:i.jsxs("div",{className:"app",children:[i.jsx(Pm,{scrolled:Q}),i.jsxs(qm,{children:[i.jsx(_a,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(r0,{openPopup:R}),i.jsx(so,{openPopup:R}),i.jsx(o0,{}),i.jsx(c0,{openPopup:R}),i.jsx(s0,{openPopup:R}),i.jsx(oo,{openPopup:R}),i.jsx(co,{}),i.jsx(uo,{}),i.jsx(fo,{}),i.jsx(d0,{}),i.jsx(u0,{}),i.jsx(f0,{}),i.jsx(Za,{})]})}),i.jsx(_a,{path:"/about",element:i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{paddingTop:"70px"},children:[i.jsx(oo,{openPopup:R}),i.jsx(so,{openPopup:R}),i.jsx(uo,{}),i.jsx(fo,{}),i.jsx(co,{})]}),i.jsx(Za,{})]})}),i.jsx(_a,{path:"/services",element:i.jsxs(i.Fragment,{children:[i.jsx(hp,{openPopup:R}),i.jsx(Za,{})]})}),i.jsx(_a,{path:"/pricing",element:i.jsxs(i.Fragment,{children:[i.jsx(xp,{openPopup:R}),i.jsx(Za,{})]})}),i.jsx(_a,{path:"/gallery",element:i.jsxs(i.Fragment,{children:[i.jsx(Up,{}),i.jsx(Za,{})]})}),i.jsx(_a,{path:"/contact",element:i.jsxs(i.Fragment,{children:[i.jsx(qp,{}),i.jsx(Za,{})]})}),i.jsx(_a,{path:"*",element:i.jsxs(i.Fragment,{children:[i.jsx(r0,{openPopup:R}),i.jsx(so,{openPopup:R}),i.jsx(o0,{}),i.jsx(c0,{openPopup:R}),i.jsx(s0,{openPopup:R}),i.jsx(oo,{openPopup:R}),i.jsx(co,{}),i.jsx(uo,{}),i.jsx(fo,{}),i.jsx(d0,{}),i.jsx(u0,{}),i.jsx(f0,{}),i.jsx(Za,{})]})})]}),y&&i.jsx(cp,{closePopup:C})]})})}$m.createRoot(document.getElementById("root")).render(i.jsx(Lm.StrictMode,{children:i.jsx(Lp,{})}));
