(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function uu(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var wc={exports:{}},pr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function q1(){if(bm)return pr;bm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:r,type:c,key:g,ref:d!==void 0?d:null,props:f}}return pr.Fragment=s,pr.jsx=u,pr.jsxs=u,pr}var ym;function X1(){return ym||(ym=1,wc.exports=q1()),wc.exports}var i=X1(),Sc={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function V1(){if(vm)return ve;vm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),A=Symbol.iterator;function E(j){return j===null||typeof j!="object"?null:(j=A&&j[A]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,G={};function O(j,X,I){this.props=j,this.context=X,this.refs=G,this.updater=I||k}O.prototype.isReactComponent={},O.prototype.setState=function(j,X){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,X,"setState")},O.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function L(){}L.prototype=O.prototype;function S(j,X,I){this.props=j,this.context=X,this.refs=G,this.updater=I||k}var W=S.prototype=new L;W.constructor=S,M(W,O.prototype),W.isPureReactComponent=!0;var K=Array.isArray,Z={H:null,A:null,T:null,S:null,V:null},ge=Object.prototype.hasOwnProperty;function _(j,X,I,$,T,ee){return I=ee.ref,{$$typeof:r,type:j,key:X,ref:I!==void 0?I:null,props:ee}}function ie(j,X){return _(j.type,X,void 0,void 0,void 0,j.props)}function D(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function de(j){var X={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(I){return X[I]})}var Q=/\/+/g;function le(j,X){return typeof j=="object"&&j!==null&&j.key!=null?de(""+j.key):X.toString(36)}function fe(){}function ae(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(fe,fe):(j.status="pending",j.then(function(X){j.status==="pending"&&(j.status="fulfilled",j.value=X)},function(X){j.status==="pending"&&(j.status="rejected",j.reason=X)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function re(j,X,I,$,T){var ee=typeof j;(ee==="undefined"||ee==="boolean")&&(j=null);var te=!1;if(j===null)te=!0;else switch(ee){case"bigint":case"string":case"number":te=!0;break;case"object":switch(j.$$typeof){case r:case s:te=!0;break;case y:return te=j._init,re(te(j._payload),X,I,$,T)}}if(te)return T=T(j),te=$===""?"."+le(j,0):$,K(T)?(I="",te!=null&&(I=te.replace(Q,"$&/")+"/"),re(T,X,I,"",function(Me){return Me})):T!=null&&(D(T)&&(T=ie(T,I+(T.key==null||j&&j.key===T.key?"":(""+T.key).replace(Q,"$&/")+"/")+te)),X.push(T)),1;te=0;var we=$===""?".":$+":";if(K(j))for(var xe=0;xe<j.length;xe++)$=j[xe],ee=we+le($,xe),te+=re($,X,I,ee,T);else if(xe=E(j),typeof xe=="function")for(j=xe.call(j),xe=0;!($=j.next()).done;)$=$.value,ee=we+le($,xe++),te+=re($,X,I,ee,T);else if(ee==="object"){if(typeof j.then=="function")return re(ae(j),X,I,$,T);throw X=String(j),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return te}function Y(j,X,I){if(j==null)return j;var $=[],T=0;return re(j,$,"","",function(ee){return X.call(I,ee,T++)}),$}function V(j){if(j._status===-1){var X=j._result;X=X(),X.then(function(I){(j._status===0||j._status===-1)&&(j._status=1,j._result=I)},function(I){(j._status===0||j._status===-1)&&(j._status=2,j._result=I)}),j._status===-1&&(j._status=0,j._result=X)}if(j._status===1)return j._result.default;throw j._result}var ne=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function be(){}return ve.Children={map:Y,forEach:function(j,X,I){Y(j,function(){X.apply(this,arguments)},I)},count:function(j){var X=0;return Y(j,function(){X++}),X},toArray:function(j){return Y(j,function(X){return X})||[]},only:function(j){if(!D(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},ve.Component=O,ve.Fragment=u,ve.Profiler=d,ve.PureComponent=S,ve.StrictMode=c,ve.Suspense=b,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,ve.__COMPILER_RUNTIME={__proto__:null,c:function(j){return Z.H.useMemoCache(j)}},ve.cache=function(j){return function(){return j.apply(null,arguments)}},ve.cloneElement=function(j,X,I){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var $=M({},j.props),T=j.key,ee=void 0;if(X!=null)for(te in X.ref!==void 0&&(ee=void 0),X.key!==void 0&&(T=""+X.key),X)!ge.call(X,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&X.ref===void 0||($[te]=X[te]);var te=arguments.length-2;if(te===1)$.children=I;else if(1<te){for(var we=Array(te),xe=0;xe<te;xe++)we[xe]=arguments[xe+2];$.children=we}return _(j.type,T,void 0,void 0,ee,$)},ve.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},ve.createElement=function(j,X,I){var $,T={},ee=null;if(X!=null)for($ in X.key!==void 0&&(ee=""+X.key),X)ge.call(X,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(T[$]=X[$]);var te=arguments.length-2;if(te===1)T.children=I;else if(1<te){for(var we=Array(te),xe=0;xe<te;xe++)we[xe]=arguments[xe+2];T.children=we}if(j&&j.defaultProps)for($ in te=j.defaultProps,te)T[$]===void 0&&(T[$]=te[$]);return _(j,ee,void 0,void 0,null,T)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(j){return{$$typeof:x,render:j}},ve.isValidElement=D,ve.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:V}},ve.memo=function(j,X){return{$$typeof:p,type:j,compare:X===void 0?null:X}},ve.startTransition=function(j){var X=Z.T,I={};Z.T=I;try{var $=j(),T=Z.S;T!==null&&T(I,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(be,ne)}catch(ee){ne(ee)}finally{Z.T=X}},ve.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},ve.use=function(j){return Z.H.use(j)},ve.useActionState=function(j,X,I){return Z.H.useActionState(j,X,I)},ve.useCallback=function(j,X){return Z.H.useCallback(j,X)},ve.useContext=function(j){return Z.H.useContext(j)},ve.useDebugValue=function(){},ve.useDeferredValue=function(j,X){return Z.H.useDeferredValue(j,X)},ve.useEffect=function(j,X,I){var $=Z.H;if(typeof I=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(j,X)},ve.useId=function(){return Z.H.useId()},ve.useImperativeHandle=function(j,X,I){return Z.H.useImperativeHandle(j,X,I)},ve.useInsertionEffect=function(j,X){return Z.H.useInsertionEffect(j,X)},ve.useLayoutEffect=function(j,X){return Z.H.useLayoutEffect(j,X)},ve.useMemo=function(j,X){return Z.H.useMemo(j,X)},ve.useOptimistic=function(j,X){return Z.H.useOptimistic(j,X)},ve.useReducer=function(j,X,I){return Z.H.useReducer(j,X,I)},ve.useRef=function(j){return Z.H.useRef(j)},ve.useState=function(j){return Z.H.useState(j)},ve.useSyncExternalStore=function(j,X,I){return Z.H.useSyncExternalStore(j,X,I)},ve.useTransition=function(){return Z.H.useTransition()},ve.version="19.1.0",ve}var wm;function du(){return wm||(wm=1,Sc.exports=V1()),Sc.exports}var v=du();const Jt=uu(v);var jc={exports:{}},gr={},Cc={exports:{}},Ac={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function I1(){return Sm||(Sm=1,function(r){function s(Y,V){var ne=Y.length;Y.push(V);e:for(;0<ne;){var be=ne-1>>>1,j=Y[be];if(0<d(j,V))Y[be]=V,Y[ne]=j,ne=be;else break e}}function u(Y){return Y.length===0?null:Y[0]}function c(Y){if(Y.length===0)return null;var V=Y[0],ne=Y.pop();if(ne!==V){Y[0]=ne;e:for(var be=0,j=Y.length,X=j>>>1;be<X;){var I=2*(be+1)-1,$=Y[I],T=I+1,ee=Y[T];if(0>d($,ne))T<j&&0>d(ee,$)?(Y[be]=ee,Y[T]=ne,be=T):(Y[be]=$,Y[I]=ne,be=I);else if(T<j&&0>d(ee,ne))Y[be]=ee,Y[T]=ne,be=T;else break e}}return V}function d(Y,V){var ne=Y.sortIndex-V.sortIndex;return ne!==0?ne:Y.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var g=Date,x=g.now();r.unstable_now=function(){return g.now()-x}}var b=[],p=[],y=1,A=null,E=3,k=!1,M=!1,G=!1,O=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function K(Y){for(var V=u(p);V!==null;){if(V.callback===null)c(p);else if(V.startTime<=Y)c(p),V.sortIndex=V.expirationTime,s(b,V);else break;V=u(p)}}function Z(Y){if(G=!1,K(Y),!M)if(u(b)!==null)M=!0,ge||(ge=!0,le());else{var V=u(p);V!==null&&re(Z,V.startTime-Y)}}var ge=!1,_=-1,ie=5,D=-1;function de(){return O?!0:!(r.unstable_now()-D<ie)}function Q(){if(O=!1,ge){var Y=r.unstable_now();D=Y;var V=!0;try{e:{M=!1,G&&(G=!1,S(_),_=-1),k=!0;var ne=E;try{t:{for(K(Y),A=u(b);A!==null&&!(A.expirationTime>Y&&de());){var be=A.callback;if(typeof be=="function"){A.callback=null,E=A.priorityLevel;var j=be(A.expirationTime<=Y);if(Y=r.unstable_now(),typeof j=="function"){A.callback=j,K(Y),V=!0;break t}A===u(b)&&c(b),K(Y)}else c(b);A=u(b)}if(A!==null)V=!0;else{var X=u(p);X!==null&&re(Z,X.startTime-Y),V=!1}}break e}finally{A=null,E=ne,k=!1}V=void 0}}finally{V?le():ge=!1}}}var le;if(typeof W=="function")le=function(){W(Q)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ae=fe.port2;fe.port1.onmessage=Q,le=function(){ae.postMessage(null)}}else le=function(){L(Q,0)};function re(Y,V){_=L(function(){Y(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return E},r.unstable_next=function(Y){switch(E){case 1:case 2:case 3:var V=3;break;default:V=E}var ne=E;E=V;try{return Y()}finally{E=ne}},r.unstable_requestPaint=function(){O=!0},r.unstable_runWithPriority=function(Y,V){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ne=E;E=Y;try{return V()}finally{E=ne}},r.unstable_scheduleCallback=function(Y,V,ne){var be=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?be+ne:be):ne=be,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ne+j,Y={id:y++,callback:V,priorityLevel:Y,startTime:ne,expirationTime:j,sortIndex:-1},ne>be?(Y.sortIndex=ne,s(p,Y),u(b)===null&&Y===u(p)&&(G?(S(_),_=-1):G=!0,re(Z,ne-be))):(Y.sortIndex=j,s(b,Y),M||k||(M=!0,ge||(ge=!0,le()))),Y},r.unstable_shouldYield=de,r.unstable_wrapCallback=function(Y){var V=E;return function(){var ne=E;E=V;try{return Y.apply(this,arguments)}finally{E=ne}}}}(Ac)),Ac}var jm;function G1(){return jm||(jm=1,Cc.exports=I1()),Cc.exports}var Ec={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function Q1(){if(Cm)return ct;Cm=1;var r=du();function s(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(b,p,y){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:A==null?null:""+A,children:b,containerInfo:p,implementation:y}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ct.createPortal=function(b,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return f(b,p,null,y)},ct.flushSync=function(b){var p=g.T,y=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=p,c.p=y,c.d.f()}},ct.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(b,p))},ct.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},ct.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var y=p.as,A=x(y,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?c.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:A,integrity:E,fetchPriority:k}):y==="script"&&c.d.X(b,{crossOrigin:A,integrity:E,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ct.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=x(p.as,p.crossOrigin);c.d.M(b,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(b)},ct.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,A=x(y,p.crossOrigin);c.d.L(b,y,{crossOrigin:A,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ct.preloadModule=function(b,p){if(typeof b=="string")if(p){var y=x(p.as,p.crossOrigin);c.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(b)},ct.requestFormReset=function(b){c.d.r(b)},ct.unstable_batchedUpdates=function(b,p){return b(p)},ct.useFormState=function(b,p,y){return g.H.useFormState(b,p,y)},ct.useFormStatus=function(){return g.H.useHostTransitionStatus()},ct.version="19.1.0",ct}var Am;function F1(){if(Am)return Ec.exports;Am=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Ec.exports=Q1(),Ec.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function W1(){if(Em)return gr;Em=1;var r=G1(),s=du(),u=F1();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return x(l),e;if(o===n)return x(l),t;o=o.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=o;else{for(var m=!1,h=l.child;h;){if(h===a){m=!0,a=l,n=o;break}if(h===n){m=!0,n=l,a=o;break}h=h.sibling}if(!m){for(h=o.child;h;){if(h===a){m=!0,a=o,n=l;break}if(h===n){m=!0,n=o,a=l;break}h=h.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,A=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),W=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),de=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=Q&&e[Q]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function ae(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case O:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case ge:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case W:return(e.displayName||"Context")+".Provider";case S:return(e._context.displayName||"Context")+".Consumer";case K:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return t=e.displayName||null,t!==null?t:ae(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return ae(e(t))}catch{}}return null}var re=Array.isArray,Y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},be=[],j=-1;function X(e){return{current:e}}function I(e){0>j||(e.current=be[j],be[j]=null,j--)}function $(e,t){j++,be[j]=e.current,e.current=t}var T=X(null),ee=X(null),te=X(null),we=X(null);function xe(e,t){switch($(te,t),$(ee,e),$(T,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Q0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Q0(t),e=F0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(T),$(T,e)}function Me(){I(T),I(ee),I(te)}function lt(e){e.memoizedState!==null&&$(we,e);var t=T.current,a=F0(t,e.type);t!==a&&($(ee,e),$(T,a))}function Ze(e){ee.current===e&&(I(T),I(ee)),we.current===e&&(I(we),cr._currentValue=ne)}var dt=Object.prototype.hasOwnProperty,ft=r.unstable_scheduleCallback,aa=r.unstable_cancelCallback,J=r.unstable_shouldYield,Te=r.unstable_requestPaint,se=r.unstable_now,ye=r.unstable_getCurrentPriorityLevel,Ce=r.unstable_ImmediatePriority,gt=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,Rt=r.unstable_LowPriority,It=r.unstable_IdlePriority,jg=r.log,Cg=r.unstable_setDisableYieldValue,xi=null,wt=null;function Ca(e){if(typeof jg=="function"&&Cg(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(xi,e)}catch{}}var St=Math.clz32?Math.clz32:Ng,Ag=Math.log,Eg=Math.LN2;function Ng(e){return e>>>=0,e===0?32:31-(Ag(e)/Eg|0)|0}var zr=256,kr=4194304;function an(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~o,n!==0?l=an(n):(m&=h,m!==0?l=an(m):a||(a=h&~e,a!==0&&(l=an(a))))):(h=n&~o,h!==0?l=an(h):m!==0?l=an(m):a||(a=n&~e,a!==0&&(l=an(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Tg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tu(){var e=zr;return zr<<=1,(zr&4194048)===0&&(zr=256),e}function zu(){var e=kr;return kr<<=1,(kr&62914560)===0&&(kr=4194304),e}function co(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function yi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zg(e,t,a,n,l,o){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(a=m&~a;0<a;){var H=31-St(a),F=1<<H;h[H]=0,w[H]=-1;var B=R[H];if(B!==null)for(R[H]=null,H=0;H<B.length;H++){var U=B[H];U!==null&&(U.lane&=-536870913)}a&=~F}n!==0&&ku(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function ku(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-St(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Ru(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-St(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function uo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Mu(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:fm(e.type))}function kg(e,t){var a=V.p;try{return V.p=e,t()}finally{V.p=a}}var Aa=Math.random().toString(36).slice(2),ot="__reactFiber$"+Aa,ht="__reactProps$"+Aa,An="__reactContainer$"+Aa,mo="__reactEvents$"+Aa,Rg="__reactListeners$"+Aa,Mg="__reactHandles$"+Aa,Ou="__reactResources$"+Aa,vi="__reactMarker$"+Aa;function po(e){delete e[ot],delete e[ht],delete e[mo],delete e[Rg],delete e[Mg]}function En(e){var t=e[ot];if(t)return t;for(var a=e.parentNode;a;){if(t=a[An]||a[ot]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=K0(e);e!==null;){if(a=e[ot])return a;e=K0(e)}return t}e=a,a=e.parentNode}return null}function Nn(e){if(e=e[ot]||e[An]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Tn(e){var t=e[Ou];return t||(t=e[Ou]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[vi]=!0}var Du=new Set,Bu={};function nn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Bu[e]=t,e=0;e<t.length;e++)Du.add(t[e])}var Og=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lu={},Yu={};function Dg(e){return dt.call(Yu,e)?!0:dt.call(Lu,e)?!1:Og.test(e)?Yu[e]=!0:(Lu[e]=!0,!1)}function Mr(e,t,a){if(Dg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Or(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var go,Uu;function kn(e){if(go===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);go=t&&t[1]||"",Uu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+go+e+Uu}var ho=!1;function xo(e,t){if(!e||ho)return"";ho=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(U){var B=U}Reflect.construct(e,[],F)}else{try{F.call()}catch(U){B=U}e.call(F.prototype)}}else{try{throw Error()}catch(U){B=U}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(U){if(U&&B&&typeof U.stack=="string")return[U.stack,B.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),m=o[0],h=o[1];if(m&&h){var w=m.split(`
`),R=h.split(`
`);for(l=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(n===w.length||l===R.length)for(n=w.length-1,l=R.length-1;1<=n&&0<=l&&w[n]!==R[l];)l--;for(;1<=n&&0<=l;n--,l--)if(w[n]!==R[l]){if(n!==1||l!==1)do if(n--,l--,0>l||w[n]!==R[l]){var H=`
`+w[n].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=n&&0<=l);break}}}finally{ho=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?kn(a):""}function Bg(e){switch(e.tag){case 26:case 27:case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 15:return xo(e.type,!1);case 11:return xo(e.type.render,!1);case 1:return xo(e.type,!0);case 31:return kn("Activity");default:return""}}function _u(e){try{var t="";do t+=Bg(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lg(e){var t=Hu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Lg(e))}function qu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Hu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yg=/[\n"\\]/g;function Ot(e){return e.replace(Yg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function bo(e,t,a,n,l,o,m,h){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Mt(t)):e.value!==""+Mt(t)&&(e.value=""+Mt(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?yo(e,m,Mt(t)):a!=null?yo(e,m,Mt(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Mt(h):e.removeAttribute("name")}function Xu(e,t,a,n,l,o,m,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;a=a!=null?""+Mt(a):"",t=t!=null?""+Mt(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function yo(e,t,a){t==="number"&&Br(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Rn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Mt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Vu(e,t,a){if(t!=null&&(t=""+Mt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Mt(a):""}function Iu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(re(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Mt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Mn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ug=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Ug.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Qu(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Gu(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&Gu(e,o,t[o])}function vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _g=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(e){return Hg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wo=null;function So(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var On=null,Dn=null;function Fu(e){var t=Nn(e);if(t&&(e=t.stateNode)){var a=e[ht]||null;e:switch(e=t.stateNode,t.type){case"input":if(bo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ot(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[ht]||null;if(!l)throw Error(c(90));bo(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&qu(n)}break e;case"textarea":Vu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Rn(e,!!a.multiple,t,!1)}}}var jo=!1;function Wu(e,t,a){if(jo)return e(t,a);jo=!0;try{var n=e(t);return n}finally{if(jo=!1,(On!==null||Dn!==null)&&(wl(),On&&(t=On,e=Dn,Dn=On=null,Fu(t),e)))for(t=0;t<e.length;t++)Fu(e[t])}}function Si(e,t){var a=e.stateNode;if(a===null)return null;var n=a[ht]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=!1;if(ia)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Co=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Co=!1}var Ea=null,Ao=null,Yr=null;function Pu(){if(Yr)return Yr;var e,t=Ao,a=t.length,n,l="value"in Ea?Ea.value:Ea.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===l[o-n];n++);return Yr=l.slice(e,1<n?1-n:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Zu(){return!1}function xt(e){function t(a,n,l,o,m){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:Zu,this.isPropagationStopped=Zu,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hr=xt(rn),Ci=y({},rn,{view:0,detail:0}),qg=xt(Ci),Eo,No,Ai,qr=y({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(Eo=e.screenX-Ai.screenX,No=e.screenY-Ai.screenY):No=Eo=0,Ai=e),Eo)},movementY:function(e){return"movementY"in e?e.movementY:No}}),Ku=xt(qr),Xg=y({},qr,{dataTransfer:0}),Vg=xt(Xg),Ig=y({},Ci,{relatedTarget:0}),To=xt(Ig),Gg=y({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qg=xt(Gg),Fg=y({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wg=xt(Fg),Pg=y({},rn,{data:0}),$u=xt(Pg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$g={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$g[e])?!!t[e]:!1}function zo(){return Jg}var eh=y({},Ci,{key:function(e){if(e.key){var t=Zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zo,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),th=xt(eh),ah=y({},qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ju=xt(ah),nh=y({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zo}),ih=xt(nh),rh=y({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lh=xt(rh),oh=y({},qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sh=xt(oh),ch=y({},rn,{newState:0,oldState:0}),uh=xt(ch),dh=[9,13,27,32],ko=ia&&"CompositionEvent"in window,Ei=null;ia&&"documentMode"in document&&(Ei=document.documentMode);var fh=ia&&"TextEvent"in window&&!Ei,ed=ia&&(!ko||Ei&&8<Ei&&11>=Ei),td=" ",ad=!1;function nd(e,t){switch(e){case"keyup":return dh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function id(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function mh(e,t){switch(e){case"compositionend":return id(t);case"keypress":return t.which!==32?null:(ad=!0,td);case"textInput":return e=t.data,e===td&&ad?null:e;default:return null}}function ph(e,t){if(Bn)return e==="compositionend"||!ko&&nd(e,t)?(e=Pu(),Yr=Ao=Ea=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ed&&t.locale!=="ko"?null:t.data;default:return null}}var gh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gh[e.type]:t==="textarea"}function ld(e,t,a,n){On?Dn?Dn.push(n):Dn=[n]:On=n,t=Nl(t,"onChange"),0<t.length&&(a=new Hr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ni=null,Ti=null;function hh(e){q0(e,0)}function Xr(e){var t=wi(e);if(qu(t))return e}function od(e,t){if(e==="change")return t}var sd=!1;if(ia){var Ro;if(ia){var Mo="oninput"in document;if(!Mo){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Mo=typeof cd.oninput=="function"}Ro=Mo}else Ro=!1;sd=Ro&&(!document.documentMode||9<document.documentMode)}function ud(){Ni&&(Ni.detachEvent("onpropertychange",dd),Ti=Ni=null)}function dd(e){if(e.propertyName==="value"&&Xr(Ti)){var t=[];ld(t,Ti,e,So(e)),Wu(hh,t)}}function xh(e,t,a){e==="focusin"?(ud(),Ni=t,Ti=a,Ni.attachEvent("onpropertychange",dd)):e==="focusout"&&ud()}function bh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(Ti)}function yh(e,t){if(e==="click")return Xr(t)}function vh(e,t){if(e==="input"||e==="change")return Xr(t)}function wh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:wh;function zi(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!dt.call(t,l)||!jt(e[l],t[l]))return!1}return!0}function fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function md(e,t){var a=fd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fd(a)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Br(e.document)}return t}function Oo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sh=ia&&"documentMode"in document&&11>=document.documentMode,Ln=null,Do=null,ki=null,Bo=!1;function hd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bo||Ln==null||Ln!==Br(n)||(n=Ln,"selectionStart"in n&&Oo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ki&&zi(ki,n)||(ki=n,n=Nl(Do,"onSelect"),0<n.length&&(t=new Hr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ln)))}function ln(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yn={animationend:ln("Animation","AnimationEnd"),animationiteration:ln("Animation","AnimationIteration"),animationstart:ln("Animation","AnimationStart"),transitionrun:ln("Transition","TransitionRun"),transitionstart:ln("Transition","TransitionStart"),transitioncancel:ln("Transition","TransitionCancel"),transitionend:ln("Transition","TransitionEnd")},Lo={},xd={};ia&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function on(e){if(Lo[e])return Lo[e];if(!Yn[e])return e;var t=Yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in xd)return Lo[e]=t[a];return e}var bd=on("animationend"),yd=on("animationiteration"),vd=on("animationstart"),jh=on("transitionrun"),Ch=on("transitionstart"),Ah=on("transitioncancel"),wd=on("transitionend"),Sd=new Map,Yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yo.push("scrollEnd");function qt(e,t){Sd.set(e,t),nn(t,[e])}var jd=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_u(t)},jd.set(e,t),t)}return{value:e,source:t,stack:_u(t)}}var Bt=[],Un=0,Uo=0;function Vr(){for(var e=Un,t=Uo=Un=0;t<e;){var a=Bt[t];Bt[t++]=null;var n=Bt[t];Bt[t++]=null;var l=Bt[t];Bt[t++]=null;var o=Bt[t];if(Bt[t++]=null,n!==null&&l!==null){var m=n.pending;m===null?l.next=l:(l.next=m.next,m.next=l),n.pending=l}o!==0&&Cd(a,l,o)}}function Ir(e,t,a,n){Bt[Un++]=e,Bt[Un++]=t,Bt[Un++]=a,Bt[Un++]=n,Uo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function _o(e,t,a,n){return Ir(e,t,a,n),Gr(e)}function _n(e,t){return Ir(e,null,null,t),Gr(e)}function Cd(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-St(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function Gr(e){if(50<tr)throw tr=0,Gs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hn={};function Eh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,a,n){return new Eh(e,t,a,n)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,t){var a=e.alternate;return a===null?(a=Ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ad(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qr(e,t,a,n,l,o){var m=0;if(n=e,typeof e=="function")Ho(e)&&(m=1);else if(typeof e=="string")m=T1(e,a,T.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Ct(31,a,t,l),e.elementType=D,e.lanes=o,e;case M:return sn(a.children,l,o,t);case G:m=8,l|=24;break;case O:return e=Ct(12,a,t,l|2),e.elementType=O,e.lanes=o,e;case Z:return e=Ct(13,a,t,l),e.elementType=Z,e.lanes=o,e;case ge:return e=Ct(19,a,t,l),e.elementType=ge,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:case W:m=10;break e;case S:m=9;break e;case K:m=11;break e;case _:m=14;break e;case ie:m=16,n=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=Ct(m,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function sn(e,t,a,n){return e=Ct(7,e,n,t),e.lanes=a,e}function qo(e,t,a){return e=Ct(6,e,null,t),e.lanes=a,e}function Xo(e,t,a){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qn=[],Xn=0,Fr=null,Wr=0,Lt=[],Yt=0,cn=null,la=1,oa="";function un(e,t){qn[Xn++]=Wr,qn[Xn++]=Fr,Fr=e,Wr=t}function Ed(e,t,a){Lt[Yt++]=la,Lt[Yt++]=oa,Lt[Yt++]=cn,cn=e;var n=la;e=oa;var l=32-St(n)-1;n&=~(1<<l),a+=1;var o=32-St(t)+l;if(30<o){var m=l-l%5;o=(n&(1<<m)-1).toString(32),n>>=m,l-=m,la=1<<32-St(t)+l|a<<l|n,oa=o+e}else la=1<<o|a<<l|n,oa=e}function Vo(e){e.return!==null&&(un(e,1),Ed(e,1,0))}function Io(e){for(;e===Fr;)Fr=qn[--Xn],qn[Xn]=null,Wr=qn[--Xn],qn[Xn]=null;for(;e===cn;)cn=Lt[--Yt],Lt[Yt]=null,oa=Lt[--Yt],Lt[Yt]=null,la=Lt[--Yt],Lt[Yt]=null}var pt=null,Ie=null,Re=!1,dn=null,Gt=!1,Go=Error(c(519));function fn(e){var t=Error(c(418,""));throw Oi(Dt(t,e)),Go}function Nd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ot]=e,t[ht]=n,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<nr.length;a++)Ee(nr[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),Xu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Dr(t);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Iu(t,n.value,n.defaultValue,n.children),Dr(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||G0(t.textContent,a)?(n.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),n.onScroll!=null&&Ee("scroll",t),n.onScrollEnd!=null&&Ee("scrollend",t),n.onClick!=null&&(t.onclick=Tl),t=!0):t=!1,t||fn(e)}function Td(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 13:Gt=!1;return;case 27:case 3:Gt=!0;return;default:pt=pt.return}}function Ri(e){if(e!==pt)return!1;if(!Re)return Td(e),Re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||oc(e.type,e.memoizedProps)),a=!a),a&&Ie&&fn(e),Td(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ie=Vt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ie=null}}else t===27?(t=Ie,Xa(e.type)?(e=dc,dc=null,Ie=e):Ie=t):Ie=pt?Vt(e.stateNode.nextSibling):null;return!0}function Mi(){Ie=pt=null,Re=!1}function zd(){var e=dn;return e!==null&&(vt===null?vt=e:vt.push.apply(vt,e),dn=null),e}function Oi(e){dn===null?dn=[e]:dn.push(e)}var Qo=X(null),mn=null,sa=null;function Na(e,t,a){$(Qo,t._currentValue),t._currentValue=a}function ca(e){e._currentValue=Qo.current,I(Qo)}function Fo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Wo(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var h=o;o=l;for(var w=0;w<t.length;w++)if(h.context===t[w]){o.lanes|=a,h=o.alternate,h!==null&&(h.lanes|=a),Fo(o.return,a,e),n||(m=null);break e}o=h.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(c(341));m.lanes|=a,o=m.alternate,o!==null&&(o.lanes|=a),Fo(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Di(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var h=l.type;jt(l.pendingProps.value,m.value)||(e!==null?e.push(h):e=[h])}}else if(l===we.current){if(m=l.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(cr):e=[cr])}l=l.return}e!==null&&Wo(t,e,a,n),t.flags|=262144}function Pr(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){mn=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return kd(mn,e)}function Zr(e,t){return mn===null&&pn(e),kd(e,t)}function kd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(c(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return a}var Nh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Th=r.unstable_scheduleCallback,zh=r.unstable_NormalPriority,Ke={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Po(){return{controller:new Nh,data:new Map,refCount:0}}function Bi(e){e.refCount--,e.refCount===0&&Th(zh,function(){e.controller.abort()})}var Li=null,Zo=0,Vn=0,In=null;function kh(e,t){if(Li===null){var a=Li=[];Zo=0,Vn=$s(),In={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Zo++,t.then(Rd,Rd),t}function Rd(){if(--Zo===0&&Li!==null){In!==null&&(In.status="fulfilled");var e=Li;Li=null,Vn=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Rh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Md=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&kh(e,t),Md!==null&&Md(e,t)};var gn=X(null);function Ko(){var e=gn.current;return e!==null?e:_e.pooledCache}function Kr(e,t){t===null?$(gn,gn.current):$(gn,t.pool)}function Od(){var e=Ko();return e===null?null:{parent:Ke._currentValue,pool:e}}var Yi=Error(c(460)),Dd=Error(c(474)),$r=Error(c(542)),$o={then:function(){}};function Bd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jr(){}function Ld(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Jr,Jr),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ud(e),e;default:if(typeof t.status=="string")t.then(Jr,Jr);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ud(e),e}throw Ui=t,Yi}}var Ui=null;function Yd(){if(Ui===null)throw Error(c(459));var e=Ui;return Ui=null,e}function Ud(e){if(e===Yi||e===$r)throw Error(c(483))}var Ta=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function es(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Oe&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Gr(e),Cd(e,null,a),t}return Ir(e,n,t,a),Gr(e)}function _i(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ru(e,a)}}function ts(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var as=!1;function Hi(){if(as){var e=In;if(e!==null)throw e}}function qi(e,t,a,n){as=!1;var l=e.updateQueue;Ta=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var w=h,R=w.next;w.next=null,m===null?o=R:m.next=R,m=w;var H=e.alternate;H!==null&&(H=H.updateQueue,h=H.lastBaseUpdate,h!==m&&(h===null?H.firstBaseUpdate=R:h.next=R,H.lastBaseUpdate=w))}if(o!==null){var F=l.baseState;m=0,H=R=w=null,h=o;do{var B=h.lane&-536870913,U=B!==h.lane;if(U?(ze&B)===B:(n&B)===B){B!==0&&B===Vn&&(as=!0),H!==null&&(H=H.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var he=e,me=h;B=t;var Ye=a;switch(me.tag){case 1:if(he=me.payload,typeof he=="function"){F=he.call(Ye,F,B);break e}F=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=me.payload,B=typeof he=="function"?he.call(Ye,F,B):he,B==null)break e;F=y({},F,B);break e;case 2:Ta=!0}}B=h.callback,B!==null&&(e.flags|=64,U&&(e.flags|=8192),U=l.callbacks,U===null?l.callbacks=[B]:U.push(B))}else U={lane:B,tag:h.tag,payload:h.payload,callback:h.callback,next:null},H===null?(R=H=U,w=F):H=H.next=U,m|=B;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;U=h,h=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);H===null&&(w=F),l.baseState=w,l.firstBaseUpdate=R,l.lastBaseUpdate=H,o===null&&(l.shared.lanes=0),Ua|=m,e.lanes=m,e.memoizedState=F}}function _d(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Hd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_d(a[e],t)}var Gn=X(null),el=X(0);function qd(e,t){e=ha,$(el,e),$(Gn,t),ha=e|t.baseLanes}function ns(){$(el,ha),$(Gn,Gn.current)}function is(){ha=el.current,I(Gn),I(el)}var Ra=0,Se=null,Be=null,We=null,tl=!1,Qn=!1,hn=!1,al=0,Xi=0,Fn=null,Mh=0;function Qe(){throw Error(c(321))}function rs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!jt(e[a],t[a]))return!1;return!0}function ls(e,t,a,n,l,o){return Ra=o,Se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Af:Ef,hn=!1,o=a(n,l),hn=!1,Qn&&(o=Vd(t,a,n,l)),Xd(e),o}function Xd(e){Y.H=sl;var t=Be!==null&&Be.next!==null;if(Ra=0,We=Be=Se=null,tl=!1,Xi=0,Fn=null,t)throw Error(c(300));e===null||et||(e=e.dependencies,e!==null&&Pr(e)&&(et=!0))}function Vd(e,t,a,n){Se=e;var l=0;do{if(Qn&&(Fn=null),Xi=0,Qn=!1,25<=l)throw Error(c(301));if(l+=1,We=Be=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Y.H=_h,o=t(a,n)}while(Qn);return o}function Oh(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?Vi(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(Se.flags|=1024),t}function os(){var e=al!==0;return al=0,e}function ss(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function cs(e){if(tl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tl=!1}Ra=0,We=Be=Se=null,Qn=!1,Xi=al=0,Fn=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?Se.memoizedState=We=e:We=We.next=e,We}function Pe(){if(Be===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=We===null?Se.memoizedState:We.next;if(t!==null)We=t,Be=e;else{if(e===null)throw Se.alternate===null?Error(c(467)):Error(c(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},We===null?Se.memoizedState=We=e:We=We.next=e}return We}function us(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vi(e){var t=Xi;return Xi+=1,Fn===null&&(Fn=[]),e=Ld(Fn,e,t),t=Se,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Af:Ef),e}function nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vi(e);if(e.$$typeof===W)return st(e)}throw Error(c(438,String(e)))}function ds(e){var t=null,a=Se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=Se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=us(),Se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=de;return t.index++,a}function ua(e,t){return typeof t=="function"?t(e):t}function il(e){var t=Pe();return fs(t,Be,e)}function fs(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var h=m=null,w=null,R=t,H=!1;do{var F=R.lane&-536870913;if(F!==R.lane?(ze&F)===F:(Ra&F)===F){var B=R.revertLane;if(B===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),F===Vn&&(H=!0);else if((Ra&B)===B){R=R.next,B===Vn&&(H=!0);continue}else F={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(h=w=F,m=o):w=w.next=F,Se.lanes|=B,Ua|=B;F=R.action,hn&&a(o,F),o=R.hasEagerState?R.eagerState:a(o,F)}else B={lane:F,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(h=w=B,m=o):w=w.next=B,Se.lanes|=F,Ua|=F;R=R.next}while(R!==null&&R!==t);if(w===null?m=o:w.next=h,!jt(o,e.memoizedState)&&(et=!0,H&&(a=In,a!==null)))throw a;e.memoizedState=o,e.baseState=m,e.baseQueue=w,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ms(e){var t=Pe(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);jt(o,t.memoizedState)||(et=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Id(e,t,a){var n=Se,l=Pe(),o=Re;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!jt((Be||l).memoizedState,a);m&&(l.memoizedState=a,et=!0),l=l.queue;var h=Fd.bind(null,n,l,e);if(Ii(2048,8,h,[e]),l.getSnapshot!==t||m||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,Wn(9,rl(),Qd.bind(null,n,l,a,t),null),_e===null)throw Error(c(349));o||(Ra&124)!==0||Gd(n,t,a)}return a}function Gd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Se.updateQueue,t===null?(t=us(),Se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qd(e,t,a,n){t.value=a,t.getSnapshot=n,Wd(t)&&Pd(e)}function Fd(e,t,a){return a(function(){Wd(t)&&Pd(e)})}function Wd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!jt(e,a)}catch{return!0}}function Pd(e){var t=_n(e,2);t!==null&&zt(t,e,2)}function ps(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),hn){Ca(!0);try{a()}finally{Ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function Zd(e,t,a,n){return e.baseState=a,fs(e,Be,typeof n=="function"?n:ua)}function Dh(e,t,a,n,l){if(ol(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};Y.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Kd(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Kd(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=Y.T,m={};Y.T=m;try{var h=a(l,n),w=Y.S;w!==null&&w(m,h),$d(e,t,h)}catch(R){gs(e,t,R)}finally{Y.T=o}}else try{o=a(l,n),$d(e,t,o)}catch(R){gs(e,t,R)}}function $d(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Jd(e,t,n)},function(n){return gs(e,t,n)}):Jd(e,t,a)}function Jd(e,t,a){t.status="fulfilled",t.value=a,ef(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Kd(e,a)))}function gs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ef(t),t=t.next;while(t!==n)}e.action=null}function ef(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function tf(e,t){return t}function af(e,t){if(Re){var a=_e.formState;if(a!==null){e:{var n=Se;if(Re){if(Ie){t:{for(var l=Ie,o=Gt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Vt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Ie=Vt(l.nextSibling),n=l.data==="F!";break e}}fn(n)}n=!1}n&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tf,lastRenderedState:t},a.queue=n,a=Sf.bind(null,Se,n),n.dispatch=a,n=ps(!1),o=vs.bind(null,Se,!1,n.queue),n=bt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Dh.bind(null,Se,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function nf(e){var t=Pe();return rf(t,Be,e)}function rf(e,t,a){if(t=fs(e,t,tf)[0],e=il(ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Vi(t)}catch(m){throw m===Yi?$r:m}else n=t;t=Pe();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(Se.flags|=2048,Wn(9,rl(),Bh.bind(null,l,a),null)),[n,o,e]}function Bh(e,t){e.action=t}function lf(e){var t=Pe(),a=Be;if(a!==null)return rf(t,a,e);Pe(),t=t.memoizedState,a=Pe();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Wn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=Se.updateQueue,t===null&&(t=us(),Se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function rl(){return{destroy:void 0,resource:void 0}}function of(){return Pe().memoizedState}function ll(e,t,a,n){var l=bt();n=n===void 0?null:n,Se.flags|=e,l.memoizedState=Wn(1|t,rl(),a,n)}function Ii(e,t,a,n){var l=Pe();n=n===void 0?null:n;var o=l.memoizedState.inst;Be!==null&&n!==null&&rs(n,Be.memoizedState.deps)?l.memoizedState=Wn(t,o,a,n):(Se.flags|=e,l.memoizedState=Wn(1|t,o,a,n))}function sf(e,t){ll(8390656,8,e,t)}function cf(e,t){Ii(2048,8,e,t)}function uf(e,t){return Ii(4,2,e,t)}function df(e,t){return Ii(4,4,e,t)}function ff(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mf(e,t,a){a=a!=null?a.concat([e]):null,Ii(4,4,ff.bind(null,t,e),a)}function hs(){}function pf(e,t){var a=Pe();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&rs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function gf(e,t){var a=Pe();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&rs(t,n[1]))return n[0];if(n=e(),hn){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[n,t],n}function xs(e,t,a){return a===void 0||(Ra&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=b0(),Se.lanes|=e,Ua|=e,a)}function hf(e,t,a,n){return jt(a,t)?a:Gn.current!==null?(e=xs(e,a,n),jt(e,t)||(et=!0),e):(Ra&42)===0?(et=!0,e.memoizedState=a):(e=b0(),Se.lanes|=e,Ua|=e,t)}function xf(e,t,a,n,l){var o=V.p;V.p=o!==0&&8>o?o:8;var m=Y.T,h={};Y.T=h,vs(e,!1,t,a);try{var w=l(),R=Y.S;if(R!==null&&R(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=Rh(w,n);Gi(e,t,H,Tt(e))}else Gi(e,t,n,Tt(e))}catch(F){Gi(e,t,{then:function(){},status:"rejected",reason:F},Tt())}finally{V.p=o,Y.T=m}}function Lh(){}function bs(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=bf(e).queue;xf(e,l,t,ne,a===null?Lh:function(){return yf(e),a(n)})}function bf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ne},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yf(e){var t=bf(e).next.queue;Gi(e,t,{},Tt())}function ys(){return st(cr)}function vf(){return Pe().memoizedState}function wf(){return Pe().memoizedState}function Yh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=za(a);var n=ka(t,e,a);n!==null&&(zt(n,t,a),_i(n,t,a)),t={cache:Po()},e.payload=t;return}t=t.return}}function Uh(e,t,a){var n=Tt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ol(e)?jf(t,a):(a=_o(e,t,a,n),a!==null&&(zt(a,e,n),Cf(a,t,n)))}function Sf(e,t,a){var n=Tt();Gi(e,t,a,n)}function Gi(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ol(e))jf(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,h=o(m,a);if(l.hasEagerState=!0,l.eagerState=h,jt(h,m))return Ir(e,t,l,0),_e===null&&Vr(),!1}catch{}finally{}if(a=_o(e,t,l,n),a!==null)return zt(a,e,n),Cf(a,t,n),!0}return!1}function vs(e,t,a,n){if(n={lane:2,revertLane:$s(),action:n,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(c(479))}else t=_o(e,a,n,2),t!==null&&zt(t,e,2)}function ol(e){var t=e.alternate;return e===Se||t!==null&&t===Se}function jf(e,t){Qn=tl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Cf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Ru(e,a)}}var sl={readContext:st,use:nl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Af={readContext:st,use:nl,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:sf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ll(4194308,4,ff.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ll(4194308,4,e,t)},useInsertionEffect:function(e,t){ll(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var n=e();if(hn){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=bt();if(a!==void 0){var l=a(t);if(hn){Ca(!0);try{a(t)}finally{Ca(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Uh.bind(null,Se,e),[n.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=ps(e);var t=e.queue,a=Sf.bind(null,Se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:hs,useDeferredValue:function(e,t){var a=bt();return xs(a,e,t)},useTransition:function(){var e=ps(!1);return e=xf.bind(null,Se,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=Se,l=bt();if(Re){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),_e===null)throw Error(c(349));(ze&124)!==0||Gd(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,sf(Fd.bind(null,n,o,e),[e]),n.flags|=2048,Wn(9,rl(),Qd.bind(null,n,o,a,t),null),a},useId:function(){var e=bt(),t=_e.identifierPrefix;if(Re){var a=oa,n=la;a=(n&~(1<<32-St(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=al++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Mh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ys,useFormState:af,useActionState:af,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=vs.bind(null,Se,!0,a),a.dispatch=t,[e,t]},useMemoCache:ds,useCacheRefresh:function(){return bt().memoizedState=Yh.bind(null,Se)}},Ef={readContext:st,use:nl,useCallback:pf,useContext:st,useEffect:cf,useImperativeHandle:mf,useInsertionEffect:uf,useLayoutEffect:df,useMemo:gf,useReducer:il,useRef:of,useState:function(){return il(ua)},useDebugValue:hs,useDeferredValue:function(e,t){var a=Pe();return hf(a,Be.memoizedState,e,t)},useTransition:function(){var e=il(ua)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:Id,useId:vf,useHostTransitionStatus:ys,useFormState:nf,useActionState:nf,useOptimistic:function(e,t){var a=Pe();return Zd(a,Be,e,t)},useMemoCache:ds,useCacheRefresh:wf},_h={readContext:st,use:nl,useCallback:pf,useContext:st,useEffect:cf,useImperativeHandle:mf,useInsertionEffect:uf,useLayoutEffect:df,useMemo:gf,useReducer:ms,useRef:of,useState:function(){return ms(ua)},useDebugValue:hs,useDeferredValue:function(e,t){var a=Pe();return Be===null?xs(a,e,t):hf(a,Be.memoizedState,e,t)},useTransition:function(){var e=ms(ua)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:Id,useId:vf,useHostTransitionStatus:ys,useFormState:lf,useActionState:lf,useOptimistic:function(e,t){var a=Pe();return Be!==null?Zd(a,Be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ds,useCacheRefresh:wf},Pn=null,Qi=0;function cl(e){var t=Qi;return Qi+=1,Pn===null&&(Pn=[]),Ld(Pn,e,t)}function Fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ul(e,t){throw t.$$typeof===A?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nf(e){var t=e._init;return t(e._payload)}function Tf(e){function t(N,C){if(e){var z=N.deletions;z===null?(N.deletions=[C],N.flags|=16):z.push(C)}}function a(N,C){if(!e)return null;for(;C!==null;)t(N,C),C=C.sibling;return null}function n(N){for(var C=new Map;N!==null;)N.key!==null?C.set(N.key,N):C.set(N.index,N),N=N.sibling;return C}function l(N,C){return N=ra(N,C),N.index=0,N.sibling=null,N}function o(N,C,z){return N.index=z,e?(z=N.alternate,z!==null?(z=z.index,z<C?(N.flags|=67108866,C):z):(N.flags|=67108866,C)):(N.flags|=1048576,C)}function m(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function h(N,C,z,q){return C===null||C.tag!==6?(C=qo(z,N.mode,q),C.return=N,C):(C=l(C,z),C.return=N,C)}function w(N,C,z,q){var oe=z.type;return oe===M?H(N,C,z.props.children,q,z.key):C!==null&&(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ie&&Nf(oe)===C.type)?(C=l(C,z.props),Fi(C,z),C.return=N,C):(C=Qr(z.type,z.key,z.props,null,N.mode,q),Fi(C,z),C.return=N,C)}function R(N,C,z,q){return C===null||C.tag!==4||C.stateNode.containerInfo!==z.containerInfo||C.stateNode.implementation!==z.implementation?(C=Xo(z,N.mode,q),C.return=N,C):(C=l(C,z.children||[]),C.return=N,C)}function H(N,C,z,q,oe){return C===null||C.tag!==7?(C=sn(z,N.mode,q,oe),C.return=N,C):(C=l(C,z),C.return=N,C)}function F(N,C,z){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=qo(""+C,N.mode,z),C.return=N,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case E:return z=Qr(C.type,C.key,C.props,null,N.mode,z),Fi(z,C),z.return=N,z;case k:return C=Xo(C,N.mode,z),C.return=N,C;case ie:var q=C._init;return C=q(C._payload),F(N,C,z)}if(re(C)||le(C))return C=sn(C,N.mode,z,null),C.return=N,C;if(typeof C.then=="function")return F(N,cl(C),z);if(C.$$typeof===W)return F(N,Zr(N,C),z);ul(N,C)}return null}function B(N,C,z,q){var oe=C!==null?C.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return oe!==null?null:h(N,C,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case E:return z.key===oe?w(N,C,z,q):null;case k:return z.key===oe?R(N,C,z,q):null;case ie:return oe=z._init,z=oe(z._payload),B(N,C,z,q)}if(re(z)||le(z))return oe!==null?null:H(N,C,z,q,null);if(typeof z.then=="function")return B(N,C,cl(z),q);if(z.$$typeof===W)return B(N,C,Zr(N,z),q);ul(N,z)}return null}function U(N,C,z,q,oe){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return N=N.get(z)||null,h(C,N,""+q,oe);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case E:return N=N.get(q.key===null?z:q.key)||null,w(C,N,q,oe);case k:return N=N.get(q.key===null?z:q.key)||null,R(C,N,q,oe);case ie:var je=q._init;return q=je(q._payload),U(N,C,z,q,oe)}if(re(q)||le(q))return N=N.get(z)||null,H(C,N,q,oe,null);if(typeof q.then=="function")return U(N,C,z,cl(q),oe);if(q.$$typeof===W)return U(N,C,z,Zr(C,q),oe);ul(C,q)}return null}function he(N,C,z,q){for(var oe=null,je=null,ue=C,pe=C=0,at=null;ue!==null&&pe<z.length;pe++){ue.index>pe?(at=ue,ue=null):at=ue.sibling;var ke=B(N,ue,z[pe],q);if(ke===null){ue===null&&(ue=at);break}e&&ue&&ke.alternate===null&&t(N,ue),C=o(ke,C,pe),je===null?oe=ke:je.sibling=ke,je=ke,ue=at}if(pe===z.length)return a(N,ue),Re&&un(N,pe),oe;if(ue===null){for(;pe<z.length;pe++)ue=F(N,z[pe],q),ue!==null&&(C=o(ue,C,pe),je===null?oe=ue:je.sibling=ue,je=ue);return Re&&un(N,pe),oe}for(ue=n(ue);pe<z.length;pe++)at=U(ue,N,pe,z[pe],q),at!==null&&(e&&at.alternate!==null&&ue.delete(at.key===null?pe:at.key),C=o(at,C,pe),je===null?oe=at:je.sibling=at,je=at);return e&&ue.forEach(function(Fa){return t(N,Fa)}),Re&&un(N,pe),oe}function me(N,C,z,q){if(z==null)throw Error(c(151));for(var oe=null,je=null,ue=C,pe=C=0,at=null,ke=z.next();ue!==null&&!ke.done;pe++,ke=z.next()){ue.index>pe?(at=ue,ue=null):at=ue.sibling;var Fa=B(N,ue,ke.value,q);if(Fa===null){ue===null&&(ue=at);break}e&&ue&&Fa.alternate===null&&t(N,ue),C=o(Fa,C,pe),je===null?oe=Fa:je.sibling=Fa,je=Fa,ue=at}if(ke.done)return a(N,ue),Re&&un(N,pe),oe;if(ue===null){for(;!ke.done;pe++,ke=z.next())ke=F(N,ke.value,q),ke!==null&&(C=o(ke,C,pe),je===null?oe=ke:je.sibling=ke,je=ke);return Re&&un(N,pe),oe}for(ue=n(ue);!ke.done;pe++,ke=z.next())ke=U(ue,N,pe,ke.value,q),ke!==null&&(e&&ke.alternate!==null&&ue.delete(ke.key===null?pe:ke.key),C=o(ke,C,pe),je===null?oe=ke:je.sibling=ke,je=ke);return e&&ue.forEach(function(H1){return t(N,H1)}),Re&&un(N,pe),oe}function Ye(N,C,z,q){if(typeof z=="object"&&z!==null&&z.type===M&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case E:e:{for(var oe=z.key;C!==null;){if(C.key===oe){if(oe=z.type,oe===M){if(C.tag===7){a(N,C.sibling),q=l(C,z.props.children),q.return=N,N=q;break e}}else if(C.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===ie&&Nf(oe)===C.type){a(N,C.sibling),q=l(C,z.props),Fi(q,z),q.return=N,N=q;break e}a(N,C);break}else t(N,C);C=C.sibling}z.type===M?(q=sn(z.props.children,N.mode,q,z.key),q.return=N,N=q):(q=Qr(z.type,z.key,z.props,null,N.mode,q),Fi(q,z),q.return=N,N=q)}return m(N);case k:e:{for(oe=z.key;C!==null;){if(C.key===oe)if(C.tag===4&&C.stateNode.containerInfo===z.containerInfo&&C.stateNode.implementation===z.implementation){a(N,C.sibling),q=l(C,z.children||[]),q.return=N,N=q;break e}else{a(N,C);break}else t(N,C);C=C.sibling}q=Xo(z,N.mode,q),q.return=N,N=q}return m(N);case ie:return oe=z._init,z=oe(z._payload),Ye(N,C,z,q)}if(re(z))return he(N,C,z,q);if(le(z)){if(oe=le(z),typeof oe!="function")throw Error(c(150));return z=oe.call(z),me(N,C,z,q)}if(typeof z.then=="function")return Ye(N,C,cl(z),q);if(z.$$typeof===W)return Ye(N,C,Zr(N,z),q);ul(N,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,C!==null&&C.tag===6?(a(N,C.sibling),q=l(C,z),q.return=N,N=q):(a(N,C),q=qo(z,N.mode,q),q.return=N,N=q),m(N)):a(N,C)}return function(N,C,z,q){try{Qi=0;var oe=Ye(N,C,z,q);return Pn=null,oe}catch(ue){if(ue===Yi||ue===$r)throw ue;var je=Ct(29,ue,null,N.mode);return je.lanes=q,je.return=N,je}finally{}}}var Zn=Tf(!0),zf=Tf(!1),Ut=X(null),Qt=null;function Ma(e){var t=e.alternate;$($e,$e.current&1),$(Ut,e),Qt===null&&(t===null||Gn.current!==null||t.memoizedState!==null)&&(Qt=e)}function kf(e){if(e.tag===22){if($($e,$e.current),$(Ut,e),Qt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Qt=e)}}else Oa()}function Oa(){$($e,$e.current),$(Ut,Ut.current)}function da(e){I(Ut),Qt===e&&(Qt=null),I($e)}var $e=X(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||uc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ws(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ss={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Tt(),l=za(n);l.payload=t,a!=null&&(l.callback=a),t=ka(e,l,n),t!==null&&(zt(t,e,n),_i(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Tt(),l=za(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ka(e,l,n),t!==null&&(zt(t,e,n),_i(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),n=za(a);n.tag=2,t!=null&&(n.callback=t),t=ka(e,n,a),t!==null&&(zt(t,e,a),_i(t,e,a))}};function Rf(e,t,a,n,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,m):t.prototype&&t.prototype.isPureReactComponent?!zi(a,n)||!zi(l,o):!0}function Mf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function xn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Of(e){fl(e)}function Df(e){console.error(e)}function Bf(e){fl(e)}function ml(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Lf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function js(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,t)},a}function Yf(e){return e=za(e),e.tag=3,e}function Uf(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){Lf(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Lf(t,a,n),typeof l!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function Hh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Di(t,a,l,!0),a=Ut.current,a!==null){switch(a.tag){case 13:return Qt===null?Fs():a.alternate===null&&Ge===0&&(Ge=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===$o?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Ps(e,n,l)),!1;case 22:return a.flags|=65536,n===$o?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Ps(e,n,l)),!1}throw Error(c(435,a.tag))}return Ps(e,n,l),Fs(),!1}if(Re)return t=Ut.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Go&&(e=Error(c(422),{cause:n}),Oi(Dt(e,a)))):(n!==Go&&(t=Error(c(423),{cause:n}),Oi(Dt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Dt(n,a),l=js(e.stateNode,n,l),ts(e,l),Ge!==4&&(Ge=2)),!1;var o=Error(c(520),{cause:n});if(o=Dt(o,a),er===null?er=[o]:er.push(o),Ge!==4&&(Ge=2),t===null)return!0;n=Dt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=js(a.stateNode,n,e),ts(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(_a===null||!_a.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Yf(l),Uf(l,e,a,n),ts(a,l),!1}a=a.return}while(a!==null);return!1}var _f=Error(c(461)),et=!1;function nt(e,t,a,n){t.child=e===null?zf(t,null,a,n):Zn(t,e.child,a,n)}function Hf(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var m={};for(var h in n)h!=="ref"&&(m[h]=n[h])}else m=n;return pn(t),n=ls(e,t,a,m,o,l),h=os(),e!==null&&!et?(ss(e,t,l),fa(e,t,l)):(Re&&h&&Vo(t),t.flags|=1,nt(e,t,n,l),t.child)}function qf(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!Ho(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Xf(e,t,o,n,l)):(e=Qr(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Rs(e,l)){var m=o.memoizedProps;if(a=a.compare,a=a!==null?a:zi,a(m,n)&&e.ref===t.ref)return fa(e,t,l)}return t.flags|=1,e=ra(o,n),e.ref=t.ref,e.return=t,t.child=e}function Xf(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(zi(o,n)&&e.ref===t.ref)if(et=!1,t.pendingProps=n=o,Rs(e,l))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,fa(e,t,l)}return Cs(e,t,a,n,l)}function Vf(e,t,a){var n=t.pendingProps,l=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return If(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kr(t,o!==null?o.cachePool:null),o!==null?qd(t,o):ns(),kf(t);else return t.lanes=t.childLanes=536870912,If(e,t,o!==null?o.baseLanes|a:a,a)}else o!==null?(Kr(t,o.cachePool),qd(t,o),Oa(),t.memoizedState=null):(e!==null&&Kr(t,null),ns(),Oa());return nt(e,t,l,a),t.child}function If(e,t,a,n){var l=Ko();return l=l===null?null:{parent:Ke._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Kr(t,null),ns(),kf(t),e!==null&&Di(e,t,n,!0),null}function pl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Cs(e,t,a,n,l){return pn(t),a=ls(e,t,a,n,void 0,l),n=os(),e!==null&&!et?(ss(e,t,l),fa(e,t,l)):(Re&&n&&Vo(t),t.flags|=1,nt(e,t,a,l),t.child)}function Gf(e,t,a,n,l,o){return pn(t),t.updateQueue=null,a=Vd(t,n,a,l),Xd(e),n=os(),e!==null&&!et?(ss(e,t,o),fa(e,t,o)):(Re&&n&&Vo(t),t.flags|=1,nt(e,t,a,o),t.child)}function Qf(e,t,a,n,l){if(pn(t),t.stateNode===null){var o=Hn,m=a.contextType;typeof m=="object"&&m!==null&&(o=st(m)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ss,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},Jo(t),m=a.contextType,o.context=typeof m=="object"&&m!==null?st(m):Hn,o.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(ws(t,a,m,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&Ss.enqueueReplaceState(o,o.state,null),qi(t,n,o,l),Hi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var h=t.memoizedProps,w=xn(a,h);o.props=w;var R=o.context,H=a.contextType;m=Hn,typeof H=="object"&&H!==null&&(m=st(H));var F=a.getDerivedStateFromProps;H=typeof F=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,H||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||R!==m)&&Mf(t,o,n,m),Ta=!1;var B=t.memoizedState;o.state=B,qi(t,n,o,l),Hi(),R=t.memoizedState,h||B!==R||Ta?(typeof F=="function"&&(ws(t,a,F,n),R=t.memoizedState),(w=Ta||Rf(t,a,w,n,B,R,m))?(H||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),o.props=n,o.state=R,o.context=m,n=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,es(e,t),m=t.memoizedProps,H=xn(a,m),o.props=H,F=t.pendingProps,B=o.context,R=a.contextType,w=Hn,typeof R=="object"&&R!==null&&(w=st(R)),h=a.getDerivedStateFromProps,(R=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==F||B!==w)&&Mf(t,o,n,w),Ta=!1,B=t.memoizedState,o.state=B,qi(t,n,o,l),Hi();var U=t.memoizedState;m!==F||B!==U||Ta||e!==null&&e.dependencies!==null&&Pr(e.dependencies)?(typeof h=="function"&&(ws(t,a,h,n),U=t.memoizedState),(H=Ta||Rf(t,a,H,n,B,U,w)||e!==null&&e.dependencies!==null&&Pr(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,U,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,U,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=U),o.props=n,o.state=U,o.context=w,n=H):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,pl(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Zn(t,e.child,null,l),t.child=Zn(t,null,a,l)):nt(e,t,a,l),t.memoizedState=o.state,e=t.child):e=fa(e,t,l),e}function Ff(e,t,a,n){return Mi(),t.flags|=256,nt(e,t,a,n),t.child}var As={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:Od()}}function Ns(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=_t),e}function Wf(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(l?Ma(t):Oa(),Re){var h=Ie,w;if(w=h){e:{for(w=h,h=Gt;w.nodeType!==8;){if(!h){h=null;break e}if(w=Vt(w.nextSibling),w===null){h=null;break e}}h=w}h!==null?(t.memoizedState={dehydrated:h,treeContext:cn!==null?{id:la,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},w=Ct(18,null,null,0),w.stateNode=h,w.return=t,t.child=w,pt=t,Ie=null,w=!0):w=!1}w||fn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return uc(h)?t.lanes=32:t.lanes=536870912,null;da(t)}return h=n.children,n=n.fallback,l?(Oa(),l=t.mode,h=gl({mode:"hidden",children:h},l),n=sn(n,l,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,l=t.child,l.memoizedState=Es(a),l.childLanes=Ns(e,m,a),t.memoizedState=As,n):(Ma(t),Ts(t,h))}if(w=e.memoizedState,w!==null&&(h=w.dehydrated,h!==null)){if(o)t.flags&256?(Ma(t),t.flags&=-257,t=zs(e,t,a)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),l=n.fallback,h=t.mode,n=gl({mode:"visible",children:n.children},h),l=sn(l,h,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,Zn(t,e.child,null,a),n=t.child,n.memoizedState=Es(a),n.childLanes=Ns(e,m,a),t.memoizedState=As,t=l);else if(Ma(t),uc(h)){if(m=h.nextSibling&&h.nextSibling.dataset,m)var R=m.dgst;m=R,n=Error(c(419)),n.stack="",n.digest=m,Oi({value:n,source:null,stack:null}),t=zs(e,t,a)}else if(et||Di(e,t,a,!1),m=(a&e.childLanes)!==0,et||m){if(m=_e,m!==null&&(n=a&-a,n=(n&42)!==0?1:uo(n),n=(n&(m.suspendedLanes|a))!==0?0:n,n!==0&&n!==w.retryLane))throw w.retryLane=n,_n(e,n),zt(m,e,n),_f;h.data==="$?"||Fs(),t=zs(e,t,a)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Ie=Vt(h.nextSibling),pt=t,Re=!0,dn=null,Gt=!1,e!==null&&(Lt[Yt++]=la,Lt[Yt++]=oa,Lt[Yt++]=cn,la=e.id,oa=e.overflow,cn=t),t=Ts(t,n.children),t.flags|=4096);return t}return l?(Oa(),l=n.fallback,h=t.mode,w=e.child,R=w.sibling,n=ra(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&65011712,R!==null?l=ra(R,l):(l=sn(l,h,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,h=e.child.memoizedState,h===null?h=Es(a):(w=h.cachePool,w!==null?(R=Ke._currentValue,w=w.parent!==R?{parent:R,pool:R}:w):w=Od(),h={baseLanes:h.baseLanes|a,cachePool:w}),l.memoizedState=h,l.childLanes=Ns(e,m,a),t.memoizedState=As,n):(Ma(t),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function Ts(e,t){return t=gl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gl(e,t){return e=Ct(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zs(e,t,a){return Zn(t,e.child,null,a),e=Ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Fo(e.return,t,a)}function ks(e,t,a,n,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l)}function Zf(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;if(nt(e,t,n.children,a),n=$e.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pf(e,a,t);else if(e.tag===19)Pf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch($($e,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ks(t,!1,l,a,o);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&dl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}ks(t,!0,a,null,o);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Di(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ra(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Rs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pr(e)))}function qh(e,t,a){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),Na(t,Ke,e.memoizedState.cache),Mi();break;case 27:case 5:lt(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Wf(e,t,a):(Ma(t),e=fa(e,t,a),e!==null?e.sibling:null);Ma(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Di(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Zf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$($e,$e.current),n)break;return null;case 22:case 23:return t.lanes=0,Vf(e,t,a);case 24:Na(t,Ke,e.memoizedState.cache)}return fa(e,t,a)}function Kf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Rs(e,a)&&(t.flags&128)===0)return et=!1,qh(e,t,a);et=(e.flags&131072)!==0}else et=!1,Re&&(t.flags&1048576)!==0&&Ed(t,Wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Ho(n)?(e=xn(n,e),t.tag=1,t=Qf(null,t,n,e,a)):(t.tag=0,t=Cs(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===K){t.tag=11,t=Hf(null,t,n,e,a);break e}else if(l===_){t.tag=14,t=qf(null,t,n,e,a);break e}}throw t=ae(n)||n,Error(c(306,t,""))}}return t;case 0:return Cs(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=xn(n,t.pendingProps),Qf(e,t,n,l,a);case 3:e:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,es(e,t),qi(t,n,null,a);var m=t.memoizedState;if(n=m.cache,Na(t,Ke,n),n!==o.cache&&Wo(t,[Ke],a,!0),Hi(),n=m.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Ff(e,t,n,a);break e}else if(n!==l){l=Dt(Error(c(424)),t),Oi(l),t=Ff(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ie=Vt(e.firstChild),pt=t,Re=!0,dn=null,Gt=!0,a=zf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Mi(),n===l){t=fa(e,t,a);break e}nt(e,t,n,a)}t=t.child}return t;case 26:return pl(e,t),e===null?(a=tm(t.type,null,t.pendingProps,null))?t.memoizedState=a:Re||(a=t.type,e=t.pendingProps,n=zl(te.current).createElement(a),n[ot]=t,n[ht]=e,rt(n,a,e),Je(n),t.stateNode=n):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lt(t),e===null&&Re&&(n=t.stateNode=$0(t.type,t.pendingProps,te.current),pt=t,Gt=!0,l=Ie,Xa(t.type)?(dc=l,Ie=Vt(n.firstChild)):Ie=l),nt(e,t,t.pendingProps.children,a),pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((l=n=Ie)&&(n=g1(n,t.type,t.pendingProps,Gt),n!==null?(t.stateNode=n,pt=t,Ie=Vt(n.firstChild),Gt=!1,l=!0):l=!1),l||fn(t)),lt(t),l=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,n=o.children,oc(l,o)?n=null:m!==null&&oc(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=ls(e,t,Oh,null,null,a),cr._currentValue=l),pl(e,t),nt(e,t,n,a),t.child;case 6:return e===null&&Re&&((e=a=Ie)&&(a=h1(a,t.pendingProps,Gt),a!==null?(t.stateNode=a,pt=t,Ie=null,e=!0):e=!1),e||fn(t)),null;case 13:return Wf(e,t,a);case 4:return xe(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Zn(t,null,n,a):nt(e,t,n,a),t.child;case 11:return Hf(e,t,t.type,t.pendingProps,a);case 7:return nt(e,t,t.pendingProps,a),t.child;case 8:return nt(e,t,t.pendingProps.children,a),t.child;case 12:return nt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Na(t,t.type,n.value),nt(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,pn(t),l=st(l),n=n(l),t.flags|=1,nt(e,t,n,a),t.child;case 14:return qf(e,t,t.type,t.pendingProps,a);case 15:return Xf(e,t,t.type,t.pendingProps,a);case 19:return Zf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=gl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=ra(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Vf(e,t,a);case 24:return pn(t),n=st(Ke),e===null?(l=Ko(),l===null&&(l=_e,o=Po(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},Jo(t),Na(t,Ke,l)):((e.lanes&a)!==0&&(es(e,t),qi(t,null,null,a),Hi()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Na(t,Ke,n)):(n=o.cache,Na(t,Ke,n),n!==l.cache&&Wo(t,[Ke],a,!0))),nt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ma(e){e.flags|=4}function $f(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lm(t)){if(t=Ut.current,t!==null&&((ze&4194048)===ze?Qt!==null:(ze&62914560)!==ze&&(ze&536870912)===0||t!==Qt))throw Ui=$o,Dd;e.flags|=8192}}function hl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zu():536870912,e.lanes|=t,ei|=t)}function Wi(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Xh(e,t,a){var n=t.pendingProps;switch(Io(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(t),null;case 1:return Xe(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ca(Ke),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?ma(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,zd())),Xe(t),null;case 26:return a=t.memoizedState,e===null?(ma(t),a!==null?(Xe(t),$f(t,a)):(Xe(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ma(t),Xe(t),$f(t,a)):(Xe(t),t.flags&=-16777217):(e.memoizedProps!==n&&ma(t),Xe(t),t.flags&=-16777217),null;case 27:Ze(t),a=te.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ma(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}e=T.current,Ri(t)?Nd(t):(e=$0(l,n,a),t.stateNode=e,ma(t))}return Xe(t),null;case 5:if(Ze(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ma(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Xe(t),null}if(e=T.current,Ri(t))Nd(t);else{switch(l=zl(te.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[ot]=t,e[ht]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(rt(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ma(t)}}return Xe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ma(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,Ri(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=pt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[ot]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||G0(e.nodeValue,a)),e||fn(t)}else e=zl(e).createTextNode(n),e[ot]=t,t.stateNode=e}return Xe(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ri(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ot]=t}else Mi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Xe(t),l=!1}else l=zd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(da(t),t):(da(t),null)}if(da(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),hl(t,t.updateQueue),Xe(t),null;case 4:return Me(),e===null&&ac(t.stateNode.containerInfo),Xe(t),null;case 10:return ca(t.type),Xe(t),null;case 19:if(I($e),l=t.memoizedState,l===null)return Xe(t),null;if(n=(t.flags&128)!==0,o=l.rendering,o===null)if(n)Wi(l,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=dl(e),o!==null){for(t.flags|=128,Wi(l,!1),e=o.updateQueue,t.updateQueue=e,hl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ad(a,e),a=a.sibling;return $($e,$e.current&1|2),t.child}e=e.sibling}l.tail!==null&&se()>yl&&(t.flags|=128,n=!0,Wi(l,!1),t.lanes=4194304)}else{if(!n)if(e=dl(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,hl(t,e),Wi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Re)return Xe(t),null}else 2*se()-l.renderingStartTime>yl&&a!==536870912&&(t.flags|=128,n=!0,Wi(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=se(),t.sibling=null,e=$e.current,$($e,n?e&1|2:e&1),t):(Xe(t),null);case 22:case 23:return da(t),is(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Xe(t),t.subtreeFlags&6&&(t.flags|=8192)):Xe(t),a=t.updateQueue,a!==null&&hl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&I(gn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ca(Ke),Xe(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Vh(e,t){switch(Io(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ca(Ke),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ze(t),null;case 13:if(da(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I($e),null;case 4:return Me(),null;case 10:return ca(t.type),null;case 22:case 23:return da(t),is(),e!==null&&I(gn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ca(Ke),null;case 25:return null;default:return null}}function Jf(e,t){switch(Io(t),t.tag){case 3:ca(Ke),Me();break;case 26:case 27:case 5:Ze(t);break;case 4:Me();break;case 13:da(t);break;case 19:I($e);break;case 10:ca(t.type);break;case 22:case 23:da(t),is(),e!==null&&I(gn);break;case 24:ca(Ke)}}function Pi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,m=a.inst;n=o(),m.destroy=n}a=a.next}while(a!==l)}}catch(h){Ue(t,t.return,h)}}function Da(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var m=n.inst,h=m.destroy;if(h!==void 0){m.destroy=void 0,l=t;var w=a,R=h;try{R()}catch(H){Ue(l,w,H)}}}n=n.next}while(n!==o)}}catch(H){Ue(t,t.return,H)}}function e0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Hd(t,a)}catch(n){Ue(e,e.return,n)}}}function t0(e,t,a){a.props=xn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Ue(e,t,n)}}function Zi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){Ue(e,t,l)}}function Ft(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){Ue(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){Ue(e,t,l)}else a.current=null}function a0(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){Ue(e,e.return,l)}}function Ms(e,t,a){try{var n=e.stateNode;u1(n,e.type,a,t),n[ht]=t}catch(l){Ue(e,e.return,l)}}function n0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Os(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||n0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ds(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Tl));else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ds(e,t,a),e=e.sibling;e!==null;)Ds(e,t,a),e=e.sibling}function xl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xl(e,t,a),e=e.sibling;e!==null;)xl(e,t,a),e=e.sibling}function i0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);rt(t,n,a),t[ot]=e,t[ht]=a}catch(o){Ue(e,e.return,o)}}var pa=!1,Fe=!1,Bs=!1,r0=typeof WeakSet=="function"?WeakSet:Set,tt=null;function Ih(e,t){if(e=e.containerInfo,rc=Bl,e=gd(e),Oo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var m=0,h=-1,w=-1,R=0,H=0,F=e,B=null;t:for(;;){for(var U;F!==a||l!==0&&F.nodeType!==3||(h=m+l),F!==o||n!==0&&F.nodeType!==3||(w=m+n),F.nodeType===3&&(m+=F.nodeValue.length),(U=F.firstChild)!==null;)B=F,F=U;for(;;){if(F===e)break t;if(B===a&&++R===l&&(h=m),B===o&&++H===n&&(w=m),(U=F.nextSibling)!==null)break;F=B,B=F.parentNode}F=U}a=h===-1||w===-1?null:{start:h,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(lc={focusedElem:e,selectionRange:a},Bl=!1,tt=t;tt!==null;)if(t=tt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,tt=e;else for(;tt!==null;){switch(t=tt,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var he=xn(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(he,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(me){Ue(a,a.return,me)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)cc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,tt=e;break}tt=t.return}}function l0(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a),n&4&&Pi(5,a);break;case 1:if(Ba(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Ue(a,a.return,m)}else{var l=xn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Ue(a,a.return,m)}}n&64&&e0(a),n&512&&Zi(a,a.return);break;case 3:if(Ba(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hd(e,t)}catch(m){Ue(a,a.return,m)}}break;case 27:t===null&&n&4&&i0(a);case 26:case 5:Ba(e,a),t===null&&n&4&&a0(a),n&512&&Zi(a,a.return);break;case 12:Ba(e,a);break;case 13:Ba(e,a),n&4&&c0(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Jh.bind(null,a),x1(e,a))));break;case 22:if(n=a.memoizedState!==null||pa,!n){t=t!==null&&t.memoizedState!==null||Fe,l=pa;var o=Fe;pa=n,(Fe=t)&&!o?La(e,a,(a.subtreeFlags&8772)!==0):Ba(e,a),pa=l,Fe=o}break;case 30:break;default:Ba(e,a)}}function o0(e){var t=e.alternate;t!==null&&(e.alternate=null,o0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&po(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var qe=null,yt=!1;function ga(e,t,a){for(a=a.child;a!==null;)s0(e,t,a),a=a.sibling}function s0(e,t,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(xi,a)}catch{}switch(a.tag){case 26:Fe||Ft(a,t),ga(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||Ft(a,t);var n=qe,l=yt;Xa(a.type)&&(qe=a.stateNode,yt=!1),ga(e,t,a),rr(a.stateNode),qe=n,yt=l;break;case 5:Fe||Ft(a,t);case 6:if(n=qe,l=yt,qe=null,ga(e,t,a),qe=n,yt=l,qe!==null)if(yt)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(o){Ue(a,t,o)}else try{qe.removeChild(a.stateNode)}catch(o){Ue(a,t,o)}break;case 18:qe!==null&&(yt?(e=qe,Z0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),mr(e)):Z0(qe,a.stateNode));break;case 4:n=qe,l=yt,qe=a.stateNode.containerInfo,yt=!0,ga(e,t,a),qe=n,yt=l;break;case 0:case 11:case 14:case 15:Fe||Da(2,a,t),Fe||Da(4,a,t),ga(e,t,a);break;case 1:Fe||(Ft(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&t0(a,t,n)),ga(e,t,a);break;case 21:ga(e,t,a);break;case 22:Fe=(n=Fe)||a.memoizedState!==null,ga(e,t,a),Fe=n;break;default:ga(e,t,a)}}function c0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mr(e)}catch(a){Ue(t,t.return,a)}}function Gh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new r0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new r0),t;default:throw Error(c(435,e.tag))}}function Ls(e,t){var a=Gh(e);t.forEach(function(n){var l=e1.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function At(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 27:if(Xa(h.type)){qe=h.stateNode,yt=!1;break e}break;case 5:qe=h.stateNode,yt=!1;break e;case 3:case 4:qe=h.stateNode.containerInfo,yt=!0;break e}h=h.return}if(qe===null)throw Error(c(160));s0(o,m,l),qe=null,yt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)u0(t,e),t=t.sibling}var Xt=null;function u0(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),Et(e),n&4&&(Da(3,e,e.return),Pi(3,e),Da(5,e,e.return));break;case 1:At(t,e),Et(e),n&512&&(Fe||a===null||Ft(a,a.return)),n&64&&pa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Xt;if(At(t,e),Et(e),n&512&&(Fe||a===null||Ft(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[vi]||o[ot]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),rt(o,n,a),o[ot]=e,Je(o),n=o;break e;case"link":var m=im("link","href",l).get(n+(a.href||""));if(m){for(var h=0;h<m.length;h++)if(o=m[h],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(h,1);break t}}o=l.createElement(n),rt(o,n,a),l.head.appendChild(o);break;case"meta":if(m=im("meta","content",l).get(n+(a.content||""))){for(h=0;h<m.length;h++)if(o=m[h],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(h,1);break t}}o=l.createElement(n),rt(o,n,a),l.head.appendChild(o);break;default:throw Error(c(468,n))}o[ot]=e,Je(o),n=o}e.stateNode=n}else rm(l,e.type,e.stateNode);else e.stateNode=nm(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?rm(l,e.type,e.stateNode):nm(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ms(e,e.memoizedProps,a.memoizedProps)}break;case 27:At(t,e),Et(e),n&512&&(Fe||a===null||Ft(a,a.return)),a!==null&&n&4&&Ms(e,e.memoizedProps,a.memoizedProps);break;case 5:if(At(t,e),Et(e),n&512&&(Fe||a===null||Ft(a,a.return)),e.flags&32){l=e.stateNode;try{Mn(l,"")}catch(U){Ue(e,e.return,U)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Ms(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Bs=!0);break;case 6:if(At(t,e),Et(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(U){Ue(e,e.return,U)}}break;case 3:if(Ml=null,l=Xt,Xt=kl(t.containerInfo),At(t,e),Xt=l,Et(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(U){Ue(e,e.return,U)}Bs&&(Bs=!1,d0(e));break;case 4:n=Xt,Xt=kl(e.stateNode.containerInfo),At(t,e),Et(e),Xt=n;break;case 12:At(t,e),Et(e);break;case 13:At(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xs=se()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ls(e,n)));break;case 22:l=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,R=pa,H=Fe;if(pa=R||l,Fe=H||w,At(t,e),Fe=H,pa=R,Et(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||w||pa||Fe||bn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){w=a=t;try{if(o=w.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{h=w.stateNode;var F=w.memoizedProps.style,B=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(U){Ue(w,w.return,U)}}}else if(t.tag===6){if(a===null){w=t;try{w.stateNode.nodeValue=l?"":w.memoizedProps}catch(U){Ue(w,w.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ls(e,a))));break;case 19:At(t,e),Et(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ls(e,n)));break;case 30:break;case 21:break;default:At(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(n0(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,o=Os(e);xl(e,o,l);break;case 5:var m=a.stateNode;a.flags&32&&(Mn(m,""),a.flags&=-33);var h=Os(e);xl(e,h,m);break;case 3:case 4:var w=a.stateNode.containerInfo,R=Os(e);Ds(e,R,w);break;default:throw Error(c(161))}}catch(H){Ue(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;d0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)l0(e,t.alternate,t),t=t.sibling}function bn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Da(4,t,t.return),bn(t);break;case 1:Ft(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&t0(t,t.return,a),bn(t);break;case 27:rr(t.stateNode);case 26:case 5:Ft(t,t.return),bn(t);break;case 22:t.memoizedState===null&&bn(t);break;case 30:bn(t);break;default:bn(t)}e=e.sibling}}function La(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:La(l,o,a),Pi(4,o);break;case 1:if(La(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){Ue(n,n.return,R)}if(n=o,l=n.updateQueue,l!==null){var h=n.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)_d(w[l],h)}catch(R){Ue(n,n.return,R)}}a&&m&64&&e0(o),Zi(o,o.return);break;case 27:i0(o);case 26:case 5:La(l,o,a),a&&n===null&&m&4&&a0(o),Zi(o,o.return);break;case 12:La(l,o,a);break;case 13:La(l,o,a),a&&m&4&&c0(l,o);break;case 22:o.memoizedState===null&&La(l,o,a),Zi(o,o.return);break;case 30:break;default:La(l,o,a)}t=t.sibling}}function Ys(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bi(a))}function Us(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e))}function Wt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)f0(e,t,a,n),t=t.sibling}function f0(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Wt(e,t,a,n),l&2048&&Pi(9,t);break;case 1:Wt(e,t,a,n);break;case 3:Wt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e)));break;case 12:if(l&2048){Wt(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,h=o.onPostCommit;typeof h=="function"&&h(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){Ue(t,t.return,w)}}else Wt(e,t,a,n);break;case 13:Wt(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?Wt(e,t,a,n):Ki(e,t):o._visibility&2?Wt(e,t,a,n):(o._visibility|=2,Kn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&Ys(m,t);break;case 24:Wt(e,t,a,n),l&2048&&Us(t.alternate,t);break;default:Wt(e,t,a,n)}}function Kn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,h=a,w=n,R=m.flags;switch(m.tag){case 0:case 11:case 15:Kn(o,m,h,w,l),Pi(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?Kn(o,m,h,w,l):Ki(o,m):(H._visibility|=2,Kn(o,m,h,w,l)),l&&R&2048&&Ys(m.alternate,m);break;case 24:Kn(o,m,h,w,l),l&&R&2048&&Us(m.alternate,m);break;default:Kn(o,m,h,w,l)}t=t.sibling}}function Ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Ki(a,n),l&2048&&Ys(n.alternate,n);break;case 24:Ki(a,n),l&2048&&Us(n.alternate,n);break;default:Ki(a,n)}t=t.sibling}}var $i=8192;function $n(e){if(e.subtreeFlags&$i)for(e=e.child;e!==null;)m0(e),e=e.sibling}function m0(e){switch(e.tag){case 26:$n(e),e.flags&$i&&e.memoizedState!==null&&k1(Xt,e.memoizedState,e.memoizedProps);break;case 5:$n(e);break;case 3:case 4:var t=Xt;Xt=kl(e.stateNode.containerInfo),$n(e),Xt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=$i,$i=16777216,$n(e),$i=t):$n(e));break;default:$n(e)}}function p0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ji(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,h0(n,e)}p0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)g0(e),e=e.sibling}function g0(e){switch(e.tag){case 0:case 11:case 15:Ji(e),e.flags&2048&&Da(9,e,e.return);break;case 3:Ji(e);break;case 12:Ji(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bl(e)):Ji(e);break;default:Ji(e)}}function bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];tt=n,h0(n,e)}p0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Da(8,t,t.return),bl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,bl(t));break;default:bl(t)}e=e.sibling}}function h0(e,t){for(;tt!==null;){var a=tt;switch(a.tag){case 0:case 11:case 15:Da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Bi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,tt=n;else e:for(a=e;tt!==null;){n=tt;var l=n.sibling,o=n.return;if(o0(n),n===a){tt=null;break e}if(l!==null){l.return=o,tt=l;break e}tt=o}}}var Qh={getCacheForType:function(e){var t=st(Ke),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Fh=typeof WeakMap=="function"?WeakMap:Map,Oe=0,_e=null,Ae=null,ze=0,De=0,Nt=null,Ya=!1,Jn=!1,_s=!1,ha=0,Ge=0,Ua=0,yn=0,Hs=0,_t=0,ei=0,er=null,vt=null,qs=!1,Xs=0,yl=1/0,vl=null,_a=null,it=0,Ha=null,ti=null,ai=0,Vs=0,Is=null,x0=null,tr=0,Gs=null;function Tt(){if((Oe&2)!==0&&ze!==0)return ze&-ze;if(Y.T!==null){var e=Vn;return e!==0?e:$s()}return Mu()}function b0(){_t===0&&(_t=(ze&536870912)===0||Re?Tu():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),_t}function zt(e,t,a){(e===_e&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(ni(e,0),qa(e,ze,_t,!1)),yi(e,a),((Oe&2)===0||e!==_e)&&(e===_e&&((Oe&2)===0&&(yn|=a),Ge===4&&qa(e,ze,_t,!1)),Pt(e))}function y0(e,t,a){if((Oe&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||bi(e,t),l=n?Zh(e,t):Ws(e,t,!0),o=n;do{if(l===0){Jn&&!n&&qa(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Wh(a)){l=Ws(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var h=e;l=er;var w=h.current.memoizedState.isDehydrated;if(w&&(ni(h,m).flags|=256),m=Ws(h,m,!1),m!==2){if(_s&&!w){h.errorRecoveryDisabledLanes|=o,yn|=o,l=4;break e}o=vt,vt=l,o!==null&&(vt===null?vt=o:vt.push.apply(vt,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){ni(e,0),qa(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:qa(n,t,_t,!Ya);break e;case 2:vt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Xs+300-se(),10<l)){if(qa(n,t,_t,!Ya),Rr(n,0,!0)!==0)break e;n.timeoutHandle=W0(v0.bind(null,n,a,vt,vl,qs,t,_t,yn,ei,Ya,o,2,-0,0),l);break e}v0(n,a,vt,vl,qs,t,_t,yn,ei,Ya,o,0,-0,0)}}break}while(!0);Pt(e)}function v0(e,t,a,n,l,o,m,h,w,R,H,F,B,U){if(e.timeoutHandle=-1,F=t.subtreeFlags,(F&8192||(F&16785408)===16785408)&&(sr={stylesheets:null,count:0,unsuspend:z1},m0(t),F=R1(),F!==null)){e.cancelPendingCommit=F(N0.bind(null,e,t,o,a,n,l,m,h,w,H,1,B,U)),qa(e,o,m,!R);return}N0(e,t,o,a,n,l,m,h,w)}function Wh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!jt(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,a,n){t&=~Hs,t&=~yn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-St(l),m=1<<o;n[o]=-1,l&=~m}a!==0&&ku(e,a,t)}function wl(){return(Oe&6)===0?(ar(0),!1):!0}function Qs(){if(Ae!==null){if(De===0)var e=Ae.return;else e=Ae,sa=mn=null,cs(e),Pn=null,Qi=0,e=Ae;for(;e!==null;)Jf(e.alternate,e),e=e.return;Ae=null}}function ni(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,f1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qs(),_e=e,Ae=a=ra(e.current,null),ze=t,De=0,Nt=null,Ya=!1,Jn=bi(e,t),_s=!1,ei=_t=Hs=yn=Ua=Ge=0,vt=er=null,qs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-St(n),o=1<<l;t|=e[l],n&=~o}return ha=t,Vr(),a}function w0(e,t){Se=null,Y.H=sl,t===Yi||t===$r?(t=Yd(),De=3):t===Dd?(t=Yd(),De=4):De=t===_f?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Nt=t,Ae===null&&(Ge=1,ml(e,Dt(t,e.current)))}function S0(){var e=Y.H;return Y.H=sl,e===null?sl:e}function j0(){var e=Y.A;return Y.A=Qh,e}function Fs(){Ge=4,Ya||(ze&4194048)!==ze&&Ut.current!==null||(Jn=!0),(Ua&134217727)===0&&(yn&134217727)===0||_e===null||qa(_e,ze,_t,!1)}function Ws(e,t,a){var n=Oe;Oe|=2;var l=S0(),o=j0();(_e!==e||ze!==t)&&(vl=null,ni(e,t)),t=!1;var m=Ge;e:do try{if(De!==0&&Ae!==null){var h=Ae,w=Nt;switch(De){case 8:Qs(),m=6;break e;case 3:case 2:case 9:case 6:Ut.current===null&&(t=!0);var R=De;if(De=0,Nt=null,ii(e,h,w,R),a&&Jn){m=0;break e}break;default:R=De,De=0,Nt=null,ii(e,h,w,R)}}Ph(),m=Ge;break}catch(H){w0(e,H)}while(!0);return t&&e.shellSuspendCounter++,sa=mn=null,Oe=n,Y.H=l,Y.A=o,Ae===null&&(_e=null,ze=0,Vr()),m}function Ph(){for(;Ae!==null;)C0(Ae)}function Zh(e,t){var a=Oe;Oe|=2;var n=S0(),l=j0();_e!==e||ze!==t?(vl=null,yl=se()+500,ni(e,t)):Jn=bi(e,t);e:do try{if(De!==0&&Ae!==null){t=Ae;var o=Nt;t:switch(De){case 1:De=0,Nt=null,ii(e,t,o,1);break;case 2:case 9:if(Bd(o)){De=0,Nt=null,A0(t);break}t=function(){De!==2&&De!==9||_e!==e||(De=7),Pt(e)},o.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Bd(o)?(De=0,Nt=null,A0(t)):(De=0,Nt=null,ii(e,t,o,7));break;case 5:var m=null;switch(Ae.tag){case 26:m=Ae.memoizedState;case 5:case 27:var h=Ae;if(!m||lm(m)){De=0,Nt=null;var w=h.sibling;if(w!==null)Ae=w;else{var R=h.return;R!==null?(Ae=R,Sl(R)):Ae=null}break t}}De=0,Nt=null,ii(e,t,o,5);break;case 6:De=0,Nt=null,ii(e,t,o,6);break;case 8:Qs(),Ge=6;break e;default:throw Error(c(462))}}Kh();break}catch(H){w0(e,H)}while(!0);return sa=mn=null,Y.H=n,Y.A=l,Oe=a,Ae!==null?0:(_e=null,ze=0,Vr(),Ge)}function Kh(){for(;Ae!==null&&!J();)C0(Ae)}function C0(e){var t=Kf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?Sl(e):Ae=t}function A0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Gf(a,t,t.pendingProps,t.type,void 0,ze);break;case 11:t=Gf(a,t,t.pendingProps,t.type.render,t.ref,ze);break;case 5:cs(t);default:Jf(a,t),t=Ae=Ad(t,ha),t=Kf(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?Sl(e):Ae=t}function ii(e,t,a,n){sa=mn=null,cs(t),Pn=null,Qi=0;var l=t.return;try{if(Hh(e,l,t,a,ze)){Ge=1,ml(e,Dt(a,e.current)),Ae=null;return}}catch(o){if(l!==null)throw Ae=l,o;Ge=1,ml(e,Dt(a,e.current)),Ae=null;return}t.flags&32768?(Re||n===1?e=!0:Jn||(ze&536870912)!==0?e=!1:(Ya=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ut.current,n!==null&&n.tag===13&&(n.flags|=16384))),E0(t,e)):Sl(t)}function Sl(e){var t=e;do{if((t.flags&32768)!==0){E0(t,Ya);return}e=t.return;var a=Xh(t.alternate,t,ha);if(a!==null){Ae=a;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ge===0&&(Ge=5)}function E0(e,t){do{var a=Vh(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);Ge=6,Ae=null}function N0(e,t,a,n,l,o,m,h,w){e.cancelPendingCommit=null;do jl();while(it!==0);if((Oe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Uo,zg(e,a,o,m,h,w),e===_e&&(Ae=_e=null,ze=0),ti=t,Ha=e,ai=a,Vs=o,Is=l,x0=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,t1(mt,function(){return M0(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=Y.T,Y.T=null,l=V.p,V.p=2,m=Oe,Oe|=4;try{Ih(e,t,a)}finally{Oe=m,V.p=l,Y.T=n}}it=1,T0(),z0(),k0()}}function T0(){if(it===1){it=0;var e=Ha,t=ti,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var n=V.p;V.p=2;var l=Oe;Oe|=4;try{u0(t,e);var o=lc,m=gd(e.containerInfo),h=o.focusedElem,w=o.selectionRange;if(m!==h&&h&&h.ownerDocument&&pd(h.ownerDocument.documentElement,h)){if(w!==null&&Oo(h)){var R=w.start,H=w.end;if(H===void 0&&(H=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(H,h.value.length);else{var F=h.ownerDocument||document,B=F&&F.defaultView||window;if(B.getSelection){var U=B.getSelection(),he=h.textContent.length,me=Math.min(w.start,he),Ye=w.end===void 0?me:Math.min(w.end,he);!U.extend&&me>Ye&&(m=Ye,Ye=me,me=m);var N=md(h,me),C=md(h,Ye);if(N&&C&&(U.rangeCount!==1||U.anchorNode!==N.node||U.anchorOffset!==N.offset||U.focusNode!==C.node||U.focusOffset!==C.offset)){var z=F.createRange();z.setStart(N.node,N.offset),U.removeAllRanges(),me>Ye?(U.addRange(z),U.extend(C.node,C.offset)):(z.setEnd(C.node,C.offset),U.addRange(z))}}}}for(F=[],U=h;U=U.parentNode;)U.nodeType===1&&F.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var q=F[h];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Bl=!!rc,lc=rc=null}finally{Oe=l,V.p=n,Y.T=a}}e.current=t,it=2}}function z0(){if(it===2){it=0;var e=Ha,t=ti,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var n=V.p;V.p=2;var l=Oe;Oe|=4;try{l0(e,t.alternate,t)}finally{Oe=l,V.p=n,Y.T=a}}it=3}}function k0(){if(it===4||it===3){it=0,Te();var e=Ha,t=ti,a=ai,n=x0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?it=5:(it=0,ti=Ha=null,R0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(_a=null),fo(a),t=t.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(xi,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=Y.T,l=V.p,V.p=2,Y.T=null;try{for(var o=e.onRecoverableError,m=0;m<n.length;m++){var h=n[m];o(h.value,{componentStack:h.stack})}}finally{Y.T=t,V.p=l}}(ai&3)!==0&&jl(),Pt(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Gs?tr++:(tr=0,Gs=e):tr=0,ar(0)}}function R0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bi(t)))}function jl(e){return T0(),z0(),k0(),M0()}function M0(){if(it!==5)return!1;var e=Ha,t=Vs;Vs=0;var a=fo(ai),n=Y.T,l=V.p;try{V.p=32>a?32:a,Y.T=null,a=Is,Is=null;var o=Ha,m=ai;if(it=0,ti=Ha=null,ai=0,(Oe&6)!==0)throw Error(c(331));var h=Oe;if(Oe|=4,g0(o.current),f0(o,o.current,m,a),Oe=h,ar(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(xi,o)}catch{}return!0}finally{V.p=l,Y.T=n,R0(e,t)}}function O0(e,t,a){t=Dt(a,t),t=js(e.stateNode,t,2),e=ka(e,t,2),e!==null&&(yi(e,2),Pt(e))}function Ue(e,t,a){if(e.tag===3)O0(e,e,a);else for(;t!==null;){if(t.tag===3){O0(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_a===null||!_a.has(n))){e=Dt(a,e),a=Yf(2),n=ka(t,a,2),n!==null&&(Uf(a,n,t,e),yi(n,2),Pt(n));break}}t=t.return}}function Ps(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Fh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(_s=!0,l.add(a),e=$h.bind(null,e,t,a),t.then(e,e))}function $h(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,_e===e&&(ze&a)===a&&(Ge===4||Ge===3&&(ze&62914560)===ze&&300>se()-Xs?(Oe&2)===0&&ni(e,0):Hs|=a,ei===ze&&(ei=0)),Pt(e)}function D0(e,t){t===0&&(t=zu()),e=_n(e,t),e!==null&&(yi(e,t),Pt(e))}function Jh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),D0(e,a)}function e1(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),D0(e,a)}function t1(e,t){return ft(e,t)}var Cl=null,ri=null,Zs=!1,Al=!1,Ks=!1,vn=0;function Pt(e){e!==ri&&e.next===null&&(ri===null?Cl=ri=e:ri=ri.next=e),Al=!0,Zs||(Zs=!0,n1())}function ar(e,t){if(!Ks&&Al){Ks=!0;do for(var a=!1,n=Cl;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var m=n.suspendedLanes,h=n.pingedLanes;o=(1<<31-St(42|e)+1)-1,o&=l&~(m&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,U0(n,o))}else o=ze,o=Rr(n,n===_e?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||bi(n,o)||(a=!0,U0(n,o));n=n.next}while(a);Ks=!1}}function a1(){B0()}function B0(){Al=Zs=!1;var e=0;vn!==0&&(d1()&&(e=vn),vn=0);for(var t=se(),a=null,n=Cl;n!==null;){var l=n.next,o=L0(n,t);o===0?(n.next=null,a===null?Cl=l:a.next=l,l===null&&(ri=a)):(a=n,(e!==0||(o&3)!==0)&&(Al=!0)),n=l}ar(e)}function L0(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-St(o),h=1<<m,w=l[m];w===-1?((h&a)===0||(h&n)!==0)&&(l[m]=Tg(h,t)):w<=t&&(e.expiredLanes|=h),o&=~h}if(t=_e,a=ze,a=Rr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&aa(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||bi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&aa(n),fo(a)){case 2:case 8:a=gt;break;case 32:a=mt;break;case 268435456:a=It;break;default:a=mt}return n=Y0.bind(null,e),a=ft(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&aa(n),e.callbackPriority=2,e.callbackNode=null,2}function Y0(e,t){if(it!==0&&it!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var n=ze;return n=Rr(e,e===_e?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(y0(e,n,t),L0(e,se()),e.callbackNode!=null&&e.callbackNode===a?Y0.bind(null,e):null)}function U0(e,t){if(jl())return null;y0(e,t,!0)}function n1(){m1(function(){(Oe&6)!==0?ft(Ce,a1):B0()})}function $s(){return vn===0&&(vn=Tu()),vn}function _0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lr(""+e)}function H0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function i1(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=_0((l[ht]||null).action),m=n.submitter;m&&(t=(t=m[ht]||null)?_0(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var h=new Hr("action","action",null,n,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(vn!==0){var w=m?H0(l,m):new FormData(l);bs(a,{pending:!0,data:w,method:l.method,action:o},null,w)}}else typeof o=="function"&&(h.preventDefault(),w=m?H0(l,m):new FormData(l),bs(a,{pending:!0,data:w,method:l.method,action:o},o,w))},currentTarget:l}]})}}for(var Js=0;Js<Yo.length;Js++){var ec=Yo[Js],r1=ec.toLowerCase(),l1=ec[0].toUpperCase()+ec.slice(1);qt(r1,"on"+l1)}qt(bd,"onAnimationEnd"),qt(yd,"onAnimationIteration"),qt(vd,"onAnimationStart"),qt("dblclick","onDoubleClick"),qt("focusin","onFocus"),qt("focusout","onBlur"),qt(jh,"onTransitionRun"),qt(Ch,"onTransitionStart"),qt(Ah,"onTransitionCancel"),qt(wd,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nr));function q0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var m=n.length-1;0<=m;m--){var h=n[m],w=h.instance,R=h.currentTarget;if(h=h.listener,w!==o&&l.isPropagationStopped())break e;o=h,l.currentTarget=R;try{o(l)}catch(H){fl(H)}l.currentTarget=null,o=w}else for(m=0;m<n.length;m++){if(h=n[m],w=h.instance,R=h.currentTarget,h=h.listener,w!==o&&l.isPropagationStopped())break e;o=h,l.currentTarget=R;try{o(l)}catch(H){fl(H)}l.currentTarget=null,o=w}}}}function Ee(e,t){var a=t[mo];a===void 0&&(a=t[mo]=new Set);var n=e+"__bubble";a.has(n)||(X0(t,e,2,!1),a.add(n))}function tc(e,t,a){var n=0;t&&(n|=4),X0(a,e,n,t)}var El="_reactListening"+Math.random().toString(36).slice(2);function ac(e){if(!e[El]){e[El]=!0,Du.forEach(function(a){a!=="selectionchange"&&(o1.has(a)||tc(a,!1,e),tc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[El]||(t[El]=!0,tc("selectionchange",!1,t))}}function X0(e,t,a,n){switch(fm(t)){case 2:var l=D1;break;case 8:l=B1;break;default:l=hc}a=l.bind(null,t,a,e),l=void 0,!Co||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function nc(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var h=n.stateNode.containerInfo;if(h===l)break;if(m===4)for(m=n.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;h!==null;){if(m=En(h),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){n=o=m;continue e}h=h.parentNode}}n=n.return}Wu(function(){var R=o,H=So(a),F=[];e:{var B=Sd.get(e);if(B!==void 0){var U=Hr,he=e;switch(e){case"keypress":if(Ur(a)===0)break e;case"keydown":case"keyup":U=th;break;case"focusin":he="focus",U=To;break;case"focusout":he="blur",U=To;break;case"beforeblur":case"afterblur":U=To;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=ih;break;case bd:case yd:case vd:U=Qg;break;case wd:U=lh;break;case"scroll":case"scrollend":U=qg;break;case"wheel":U=sh;break;case"copy":case"cut":case"paste":U=Wg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Ju;break;case"toggle":case"beforetoggle":U=uh}var me=(t&4)!==0,Ye=!me&&(e==="scroll"||e==="scrollend"),N=me?B!==null?B+"Capture":null:B;me=[];for(var C=R,z;C!==null;){var q=C;if(z=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||z===null||N===null||(q=Si(C,N),q!=null&&me.push(ir(C,q,z))),Ye)break;C=C.return}0<me.length&&(B=new U(B,he,null,a,H),F.push({event:B,listeners:me}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",B&&a!==wo&&(he=a.relatedTarget||a.fromElement)&&(En(he)||he[An]))break e;if((U||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,U?(he=a.relatedTarget||a.toElement,U=R,he=he?En(he):null,he!==null&&(Ye=f(he),me=he.tag,he!==Ye||me!==5&&me!==27&&me!==6)&&(he=null)):(U=null,he=R),U!==he)){if(me=Ku,q="onMouseLeave",N="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(me=Ju,q="onPointerLeave",N="onPointerEnter",C="pointer"),Ye=U==null?B:wi(U),z=he==null?B:wi(he),B=new me(q,C+"leave",U,a,H),B.target=Ye,B.relatedTarget=z,q=null,En(H)===R&&(me=new me(N,C+"enter",he,a,H),me.target=z,me.relatedTarget=Ye,q=me),Ye=q,U&&he)t:{for(me=U,N=he,C=0,z=me;z;z=li(z))C++;for(z=0,q=N;q;q=li(q))z++;for(;0<C-z;)me=li(me),C--;for(;0<z-C;)N=li(N),z--;for(;C--;){if(me===N||N!==null&&me===N.alternate)break t;me=li(me),N=li(N)}me=null}else me=null;U!==null&&V0(F,B,U,me,!1),he!==null&&Ye!==null&&V0(F,Ye,he,me,!0)}}e:{if(B=R?wi(R):window,U=B.nodeName&&B.nodeName.toLowerCase(),U==="select"||U==="input"&&B.type==="file")var oe=od;else if(rd(B))if(sd)oe=vh;else{oe=bh;var je=xh}else U=B.nodeName,!U||U.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?R&&vo(R.elementType)&&(oe=od):oe=yh;if(oe&&(oe=oe(e,R))){ld(F,oe,a,H);break e}je&&je(e,B,R),e==="focusout"&&R&&B.type==="number"&&R.memoizedProps.value!=null&&yo(B,"number",B.value)}switch(je=R?wi(R):window,e){case"focusin":(rd(je)||je.contentEditable==="true")&&(Ln=je,Do=R,ki=null);break;case"focusout":ki=Do=Ln=null;break;case"mousedown":Bo=!0;break;case"contextmenu":case"mouseup":case"dragend":Bo=!1,hd(F,a,H);break;case"selectionchange":if(Sh)break;case"keydown":case"keyup":hd(F,a,H)}var ue;if(ko)e:{switch(e){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else Bn?nd(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(ed&&a.locale!=="ko"&&(Bn||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Bn&&(ue=Pu()):(Ea=H,Ao="value"in Ea?Ea.value:Ea.textContent,Bn=!0)),je=Nl(R,pe),0<je.length&&(pe=new $u(pe,e,null,a,H),F.push({event:pe,listeners:je}),ue?pe.data=ue:(ue=id(a),ue!==null&&(pe.data=ue)))),(ue=fh?mh(e,a):ph(e,a))&&(pe=Nl(R,"onBeforeInput"),0<pe.length&&(je=new $u("onBeforeInput","beforeinput",null,a,H),F.push({event:je,listeners:pe}),je.data=ue)),i1(F,e,R,a,H)}q0(F,t)})}function ir(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nl(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Si(e,a),l!=null&&n.unshift(ir(e,l,o)),l=Si(e,t),l!=null&&n.push(ir(e,l,o))),e.tag===3)return n;e=e.return}return[]}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function V0(e,t,a,n,l){for(var o=t._reactName,m=[];a!==null&&a!==n;){var h=a,w=h.alternate,R=h.stateNode;if(h=h.tag,w!==null&&w===n)break;h!==5&&h!==26&&h!==27||R===null||(w=R,l?(R=Si(a,o),R!=null&&m.unshift(ir(a,R,w))):l||(R=Si(a,o),R!=null&&m.push(ir(a,R,w)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var s1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function I0(e){return(typeof e=="string"?e:""+e).replace(s1,`
`).replace(c1,"")}function G0(e,t){return t=I0(t),I0(e)===t}function Tl(){}function Le(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Mn(e,""+n);break;case"className":Or(e,"class",n);break;case"tabIndex":Or(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,a,n);break;case"style":Qu(e,n,o);break;case"data":if(t!=="object"){Or(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Lr(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Le(e,t,"name",l.name,l,null),Le(e,t,"formEncType",l.formEncType,l,null),Le(e,t,"formMethod",l.formMethod,l,null),Le(e,t,"formTarget",l.formTarget,l,null)):(Le(e,t,"encType",l.encType,l,null),Le(e,t,"method",l.method,l,null),Le(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Lr(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Tl);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Lr(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Mr(e,"popover",n);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Mr(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=_g.get(a)||a,Mr(e,a,n))}}function ic(e,t,a,n,l,o){switch(a){case"style":Qu(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&Mn(e,""+n);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Bu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[ht]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Mr(e,a,n)}}}function rt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var m=a[o];if(m!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Le(e,t,o,m,a,null)}}l&&Le(e,t,"srcSet",a.srcSet,a,null),n&&Le(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var h=o=m=l=null,w=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var H=a[n];if(H!=null)switch(n){case"name":l=H;break;case"type":m=H;break;case"checked":w=H;break;case"defaultChecked":R=H;break;case"value":o=H;break;case"defaultValue":h=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:Le(e,t,n,H,a,null)}}Xu(e,o,h,w,R,m,l,!1),Dr(e);return;case"select":Ee("invalid",e),n=m=o=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":o=h;break;case"defaultValue":m=h;break;case"multiple":n=h;default:Le(e,t,l,h,a,null)}t=o,a=m,e.multiple=!!n,t!=null?Rn(e,!!n,t,!1):a!=null&&Rn(e,!!n,a,!0);return;case"textarea":Ee("invalid",e),o=l=n=null;for(m in a)if(a.hasOwnProperty(m)&&(h=a[m],h!=null))switch(m){case"value":n=h;break;case"defaultValue":l=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Le(e,t,m,h,a,null)}Iu(e,n,l,o),Dr(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Le(e,t,w,n,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(n=0;n<nr.length;n++)Ee(nr[n],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Le(e,t,R,n,a,null)}return;default:if(vo(t)){for(H in a)a.hasOwnProperty(H)&&(n=a[H],n!==void 0&&ic(e,t,H,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Le(e,t,h,n,a,null))}function u1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,h=null,w=null,R=null,H=null;for(U in a){var F=a[U];if(a.hasOwnProperty(U)&&F!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":w=F;default:n.hasOwnProperty(U)||Le(e,t,U,null,n,F)}}for(var B in n){var U=n[B];if(F=a[B],n.hasOwnProperty(B)&&(U!=null||F!=null))switch(B){case"type":o=U;break;case"name":l=U;break;case"checked":R=U;break;case"defaultChecked":H=U;break;case"value":m=U;break;case"defaultValue":h=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:U!==F&&Le(e,t,B,U,n,F)}}bo(e,m,h,w,R,H,o,l);return;case"select":U=m=h=B=null;for(o in a)if(w=a[o],a.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":U=w;default:n.hasOwnProperty(o)||Le(e,t,o,null,n,w)}for(l in n)if(o=n[l],w=a[l],n.hasOwnProperty(l)&&(o!=null||w!=null))switch(l){case"value":B=o;break;case"defaultValue":h=o;break;case"multiple":m=o;default:o!==w&&Le(e,t,l,o,n,w)}t=h,a=m,n=U,B!=null?Rn(e,!!a,B,!1):!!n!=!!a&&(t!=null?Rn(e,!!a,t,!0):Rn(e,!!a,a?[]:"",!1));return;case"textarea":U=B=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Le(e,t,h,null,n,l)}for(m in n)if(l=n[m],o=a[m],n.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":B=l;break;case"defaultValue":U=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Le(e,t,m,l,n,o)}Vu(e,B,U);return;case"option":for(var he in a)if(B=a[he],a.hasOwnProperty(he)&&B!=null&&!n.hasOwnProperty(he))switch(he){case"selected":e.selected=!1;break;default:Le(e,t,he,null,n,B)}for(w in n)if(B=n[w],U=a[w],n.hasOwnProperty(w)&&B!==U&&(B!=null||U!=null))switch(w){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Le(e,t,w,B,n,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in a)B=a[me],a.hasOwnProperty(me)&&B!=null&&!n.hasOwnProperty(me)&&Le(e,t,me,null,n,B);for(R in n)if(B=n[R],U=a[R],n.hasOwnProperty(R)&&B!==U&&(B!=null||U!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(c(137,t));break;default:Le(e,t,R,B,n,U)}return;default:if(vo(t)){for(var Ye in a)B=a[Ye],a.hasOwnProperty(Ye)&&B!==void 0&&!n.hasOwnProperty(Ye)&&ic(e,t,Ye,void 0,n,B);for(H in n)B=n[H],U=a[H],!n.hasOwnProperty(H)||B===U||B===void 0&&U===void 0||ic(e,t,H,B,n,U);return}}for(var N in a)B=a[N],a.hasOwnProperty(N)&&B!=null&&!n.hasOwnProperty(N)&&Le(e,t,N,null,n,B);for(F in n)B=n[F],U=a[F],!n.hasOwnProperty(F)||B===U||B==null&&U==null||Le(e,t,F,B,n,U)}var rc=null,lc=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function Q0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function F0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function oc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sc=null;function d1(){var e=window.event;return e&&e.type==="popstate"?e===sc?!1:(sc=e,!0):(sc=null,!1)}var W0=typeof setTimeout=="function"?setTimeout:void 0,f1=typeof clearTimeout=="function"?clearTimeout:void 0,P0=typeof Promise=="function"?Promise:void 0,m1=typeof queueMicrotask=="function"?queueMicrotask:typeof P0<"u"?function(e){return P0.resolve(null).then(e).catch(p1)}:W0;function p1(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function Z0(e,t){var a=t,n=0,l=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var m=e.ownerDocument;if(a&1&&rr(m.documentElement),a&2&&rr(m.body),a&4)for(a=m.head,rr(a),m=a.firstChild;m;){var h=m.nextSibling,w=m.nodeName;m[vi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=h}}if(l===0){e.removeChild(o),mr(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);mr(t)}function cc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":cc(a),po(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function g1(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[vi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Vt(e.nextSibling),e===null)break}return null}function h1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vt(e.nextSibling),e===null))return null;return e}function uc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function x1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var dc=null;function K0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function $0(e,t,a){switch(t=zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function rr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);po(e)}var Ht=new Map,J0=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=V.d;V.d={f:b1,r:y1,D:v1,C:w1,L:S1,m:j1,X:A1,S:C1,M:E1};function b1(){var e=xa.f(),t=wl();return e||t}function y1(e){var t=Nn(e);t!==null&&t.tag===5&&t.type==="form"?yf(t):xa.r(e)}var oi=typeof document>"u"?null:document;function em(e,t,a){var n=oi;if(n&&typeof t=="string"&&t){var l=Ot(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),J0.has(l)||(J0.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),rt(t,"link",e),Je(t),n.head.appendChild(t)))}}function v1(e){xa.D(e),em("dns-prefetch",e,null)}function w1(e,t){xa.C(e,t),em("preconnect",e,t)}function S1(e,t,a){xa.L(e,t,a);var n=oi;if(n&&e&&t){var l='link[rel="preload"][as="'+Ot(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Ot(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Ot(a.imageSizes)+'"]')):l+='[href="'+Ot(e)+'"]';var o=l;switch(t){case"style":o=si(e);break;case"script":o=ci(e)}Ht.has(o)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ht.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(lr(o))||t==="script"&&n.querySelector(or(o))||(t=n.createElement("link"),rt(t,"link",e),Je(t),n.head.appendChild(t)))}}function j1(e,t){xa.m(e,t);var a=oi;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Ot(n)+'"][href="'+Ot(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ci(e)}if(!Ht.has(o)&&(e=y({rel:"modulepreload",href:e},t),Ht.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(or(o)))return}n=a.createElement("link"),rt(n,"link",e),Je(n),a.head.appendChild(n)}}}function C1(e,t,a){xa.S(e,t,a);var n=oi;if(n&&e){var l=Tn(n).hoistableStyles,o=si(e);t=t||"default";var m=l.get(o);if(!m){var h={loading:0,preload:null};if(m=n.querySelector(lr(o)))h.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ht.get(o))&&fc(e,a);var w=m=n.createElement("link");Je(w),rt(w,"link",e),w._p=new Promise(function(R,H){w.onload=R,w.onerror=H}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Rl(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:h},l.set(o,m)}}}function A1(e,t){xa.X(e,t);var a=oi;if(a&&e){var n=Tn(a).hoistableScripts,l=ci(e),o=n.get(l);o||(o=a.querySelector(or(l)),o||(e=y({src:e,async:!0},t),(t=Ht.get(l))&&mc(e,t),o=a.createElement("script"),Je(o),rt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function E1(e,t){xa.M(e,t);var a=oi;if(a&&e){var n=Tn(a).hoistableScripts,l=ci(e),o=n.get(l);o||(o=a.querySelector(or(l)),o||(e=y({src:e,async:!0,type:"module"},t),(t=Ht.get(l))&&mc(e,t),o=a.createElement("script"),Je(o),rt(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function tm(e,t,a,n){var l=(l=te.current)?kl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=si(a.href),a=Tn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=si(a.href);var o=Tn(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(lr(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ht.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ht.set(e,a),o||N1(l,e,a,m.state))),t&&n===null)throw Error(c(528,""));return m}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ci(a),a=Tn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function si(e){return'href="'+Ot(e)+'"'}function lr(e){return'link[rel="stylesheet"]['+e+"]"}function am(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function N1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),rt(t,"link",a),Je(t),e.head.appendChild(t))}function ci(e){return'[src="'+Ot(e)+'"]'}function or(e){return"script[async]"+e}function nm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ot(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var l=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),rt(n,"style",l),Rl(n,a.precedence,e),t.instance=n;case"stylesheet":l=si(a.href);var o=e.querySelector(lr(l));if(o)return t.state.loading|=4,t.instance=o,Je(o),o;n=am(a),(l=Ht.get(l))&&fc(n,l),o=(e.ownerDocument||e).createElement("link"),Je(o);var m=o;return m._p=new Promise(function(h,w){m.onload=h,m.onerror=w}),rt(o,"link",n),t.state.loading|=4,Rl(o,a.precedence,e),t.instance=o;case"script":return o=ci(a.src),(l=e.querySelector(or(o)))?(t.instance=l,Je(l),l):(n=a,(l=Ht.get(o))&&(n=y({},a),mc(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Je(l),rt(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rl(n,a.precedence,e));return t.instance}function Rl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,m=0;m<n.length;m++){var h=n[m];if(h.dataset.precedence===t)o=h;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ml=null;function im(e,t,a){if(Ml===null){var n=new Map,l=Ml=new Map;l.set(a,n)}else l=Ml,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[vi]||o[ot]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var h=n.get(m);h?h.push(o):n.set(m,[o])}}return n}function rm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function T1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function lm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var sr=null;function z1(){}function k1(e,t,a){if(sr===null)throw Error(c(475));var n=sr;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=si(a.href),o=e.querySelector(lr(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ol.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,Je(o);return}o=e.ownerDocument||e,a=am(a),(l=Ht.get(l))&&fc(a,l),o=o.createElement("link"),Je(o);var m=o;m._p=new Promise(function(h,w){m.onload=h,m.onerror=w}),rt(o,"link",a),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ol.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function R1(){if(sr===null)throw Error(c(475));var e=sr;return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dl=null;function pc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dl=new Map,t.forEach(M1,e),Dl=null,Ol.call(e))}function M1(e,t){if(!(t.state.loading&4)){var a=Dl.get(e);if(a)var n=a.get(null);else{a=new Map,Dl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}l=t.instance,m=l.getAttribute("data-precedence"),o=a.get(m)||n,o===n&&a.set(null,l),a.set(m,l),this.count++,n=Ol.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var cr={$$typeof:W,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function O1(e,t,a,n,l,o,m,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=co(0),this.hiddenUpdates=co(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function om(e,t,a,n,l,o,m,h,w,R,H,F){return e=new O1(e,t,a,m,h,w,R,F),t=1,o===!0&&(t|=24),o=Ct(3,null,null,t),e.current=o,o.stateNode=e,t=Po(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},Jo(o),e}function sm(e){return e?(e=Hn,e):Hn}function cm(e,t,a,n,l,o){l=sm(l),n.context===null?n.context=l:n.pendingContext=l,n=za(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=ka(e,n,t),a!==null&&(zt(a,e,t),_i(a,e,t))}function um(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function gc(e,t){um(e,t),(e=e.alternate)&&um(e,t)}function dm(e){if(e.tag===13){var t=_n(e,67108864);t!==null&&zt(t,e,67108864),gc(e,67108864)}}var Bl=!0;function D1(e,t,a,n){var l=Y.T;Y.T=null;var o=V.p;try{V.p=2,hc(e,t,a,n)}finally{V.p=o,Y.T=l}}function B1(e,t,a,n){var l=Y.T;Y.T=null;var o=V.p;try{V.p=8,hc(e,t,a,n)}finally{V.p=o,Y.T=l}}function hc(e,t,a,n){if(Bl){var l=xc(n);if(l===null)nc(e,t,n,Ll,a),mm(e,n);else if(Y1(l,e,t,a,n))n.stopPropagation();else if(mm(e,n),t&4&&-1<L1.indexOf(e)){for(;l!==null;){var o=Nn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=an(o.pendingLanes);if(m!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;m;){var w=1<<31-St(m);h.entanglements[1]|=w,m&=~w}Pt(o),(Oe&6)===0&&(yl=se()+500,ar(0))}}break;case 13:h=_n(o,2),h!==null&&zt(h,o,2),wl(),gc(o,2)}if(o=xc(n),o===null&&nc(e,t,n,Ll,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else nc(e,t,n,null,a)}}function xc(e){return e=So(e),bc(e)}var Ll=null;function bc(e){if(Ll=null,e=En(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ll=e,null}function fm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ye()){case Ce:return 2;case gt:return 8;case mt:case Rt:return 32;case It:return 268435456;default:return 32}default:return 32}}var yc=!1,Va=null,Ia=null,Ga=null,ur=new Map,dr=new Map,Qa=[],L1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(e,t){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function fr(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Nn(t),t!==null&&dm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Y1(e,t,a,n,l){switch(t){case"focusin":return Va=fr(Va,e,t,a,n,l),!0;case"dragenter":return Ia=fr(Ia,e,t,a,n,l),!0;case"mouseover":return Ga=fr(Ga,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return ur.set(o,fr(ur.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,dr.set(o,fr(dr.get(o)||null,e,t,a,n,l)),!0}return!1}function pm(e){var t=En(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,kg(e.priority,function(){if(a.tag===13){var n=Tt();n=uo(n);var l=_n(a,n);l!==null&&zt(l,a,n),gc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=xc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);wo=n,a.target.dispatchEvent(n),wo=null}else return t=Nn(a),t!==null&&dm(t),e.blockedOn=a,!1;t.shift()}return!0}function gm(e,t,a){Yl(e)&&a.delete(t)}function U1(){yc=!1,Va!==null&&Yl(Va)&&(Va=null),Ia!==null&&Yl(Ia)&&(Ia=null),Ga!==null&&Yl(Ga)&&(Ga=null),ur.forEach(gm),dr.forEach(gm)}function Ul(e,t){e.blockedOn===t&&(e.blockedOn=null,yc||(yc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,U1)))}var _l=null;function hm(e){_l!==e&&(_l=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_l===e&&(_l=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(bc(n||a)===null)continue;break}var o=Nn(a);o!==null&&(e.splice(t,3),t-=3,bs(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function mr(e){function t(w){return Ul(w,e)}Va!==null&&Ul(Va,e),Ia!==null&&Ul(Ia,e),Ga!==null&&Ul(Ga,e),ur.forEach(t),dr.forEach(t);for(var a=0;a<Qa.length;a++){var n=Qa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)pm(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],m=l[ht]||null;if(typeof o=="function")m||hm(a);else if(m){var h=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[ht]||null)h=m.formAction;else if(bc(l)!==null)continue}else h=m.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),hm(a)}}}function vc(e){this._internalRoot=e}Hl.prototype.render=vc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Tt();cm(a,n,e,t,null,null)},Hl.prototype.unmount=vc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cm(e.current,2,null,e,null,null),wl(),t[An]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mu();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Qa.length&&t!==0&&t<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&pm(e)}};var xm=s.version;if(xm!=="19.1.0")throw Error(c(527,xm,"19.1.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var _1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{xi=ql.inject(_1),wt=ql}catch{}}return gr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",l=Of,o=Df,m=Bf,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=om(e,1,!1,null,null,a,n,l,o,m,h,null),e[An]=t.current,ac(e),new vc(t)},gr.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,l="",o=Of,m=Df,h=Bf,w=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),t=om(e,1,!0,t,a??null,n,l,o,m,h,w,R),t.context=sm(null),a=t.current,n=Tt(),n=uo(n),l=za(n),l.callback=null,ka(a,l,n),a=n,t.current.lanes=a,yi(t,a),Pt(t),e[An]=t.current,ac(e),new Hl(t)},gr.version="19.1.0",gr}var Nm;function P1(){if(Nm)return jc.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),jc.exports=W1(),jc.exports}var Z1=P1();const K1=uu(Z1);var hr={},Tm;function $1(){if(Tm)return hr;Tm=1,Object.defineProperty(hr,"__esModule",{value:!0}),hr.parse=g,hr.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const E=function(){};return E.prototype=Object.create(null),E})();function g(E,k){const M=new f,G=E.length;if(G<2)return M;const O=(k==null?void 0:k.decode)||y;let L=0;do{const S=E.indexOf("=",L);if(S===-1)break;const W=E.indexOf(";",L),K=W===-1?G:W;if(S>K){L=E.lastIndexOf(";",S-1)+1;continue}const Z=x(E,L,S),ge=b(E,S,Z),_=E.slice(Z,ge);if(M[_]===void 0){let ie=x(E,S+1,K),D=b(E,K,ie);const de=O(E.slice(ie,D));M[_]=de}L=K+1}while(L<G);return M}function x(E,k,M){do{const G=E.charCodeAt(k);if(G!==32&&G!==9)return k}while(++k<M);return M}function b(E,k,M){for(;k>M;){const G=E.charCodeAt(--k);if(G!==32&&G!==9)return k+1}return M}function p(E,k,M){const G=(M==null?void 0:M.encode)||encodeURIComponent;if(!r.test(E))throw new TypeError(`argument name is invalid: ${E}`);const O=G(k);if(!s.test(O))throw new TypeError(`argument val is invalid: ${k}`);let L=E+"="+O;if(!M)return L;if(M.maxAge!==void 0){if(!Number.isInteger(M.maxAge))throw new TypeError(`option maxAge is invalid: ${M.maxAge}`);L+="; Max-Age="+M.maxAge}if(M.domain){if(!u.test(M.domain))throw new TypeError(`option domain is invalid: ${M.domain}`);L+="; Domain="+M.domain}if(M.path){if(!c.test(M.path))throw new TypeError(`option path is invalid: ${M.path}`);L+="; Path="+M.path}if(M.expires){if(!A(M.expires)||!Number.isFinite(M.expires.valueOf()))throw new TypeError(`option expires is invalid: ${M.expires}`);L+="; Expires="+M.expires.toUTCString()}if(M.httpOnly&&(L+="; HttpOnly"),M.secure&&(L+="; Secure"),M.partitioned&&(L+="; Partitioned"),M.priority)switch(typeof M.priority=="string"?M.priority.toLowerCase():void 0){case"low":L+="; Priority=Low";break;case"medium":L+="; Priority=Medium";break;case"high":L+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${M.priority}`)}if(M.sameSite)switch(typeof M.sameSite=="string"?M.sameSite.toLowerCase():M.sameSite){case!0:case"strict":L+="; SameSite=Strict";break;case"lax":L+="; SameSite=Lax";break;case"none":L+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${M.sameSite}`)}return L}function y(E){if(E.indexOf("%")===-1)return E;try{return decodeURIComponent(E)}catch{return E}}function A(E){return d.call(E)==="[object Date]"}return hr}$1();var zm="popstate";function J1(r={}){function s(c,d){let{pathname:f,search:g,hash:x}=c.location;return Vc("",{pathname:f,search:g,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:wr(d)}return tx(s,u,null,r)}function Ve(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function ea(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function ex(){return Math.random().toString(36).substring(2,10)}function km(r,s){return{usr:r.state,key:r.key,idx:s}}function Vc(r,s,u=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?pi(s):s,state:u,key:s&&s.key||c||ex()}}function wr({pathname:r="/",search:s="",hash:u=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function pi(r){let s={};if(r){let u=r.indexOf("#");u>=0&&(s.hash=r.substring(u),r=r.substring(0,u));let c=r.indexOf("?");c>=0&&(s.search=r.substring(c),r=r.substring(0,c)),r&&(s.pathname=r)}return s}function tx(r,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,g=d.history,x="POP",b=null,p=y();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function y(){return(g.state||{idx:null}).idx}function A(){x="POP";let O=y(),L=O==null?null:O-p;p=O,b&&b({action:x,location:G.location,delta:L})}function E(O,L){x="PUSH";let S=Vc(G.location,O,L);p=y()+1;let W=km(S,p),K=G.createHref(S);try{g.pushState(W,"",K)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;d.location.assign(K)}f&&b&&b({action:x,location:G.location,delta:1})}function k(O,L){x="REPLACE";let S=Vc(G.location,O,L);p=y();let W=km(S,p),K=G.createHref(S);g.replaceState(W,"",K),f&&b&&b({action:x,location:G.location,delta:0})}function M(O){return ax(O)}let G={get action(){return x},get location(){return r(d,g)},listen(O){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(zm,A),b=O,()=>{d.removeEventListener(zm,A),b=null}},createHref(O){return s(d,O)},createURL:M,encodeLocation(O){let L=M(O);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:E,replace:k,go(O){return g.go(O)}};return G}function ax(r,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ve(u,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:wr(r);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function jp(r,s,u="/"){return nx(r,s,u,!1)}function nx(r,s,u,c){let d=typeof s=="string"?pi(s):s,f=ya(d.pathname||"/",u);if(f==null)return null;let g=Cp(r);ix(g);let x=null;for(let b=0;x==null&&b<g.length;++b){let p=gx(f);x=mx(g[b],p,c)}return x}function Cp(r,s=[],u=[],c=""){let d=(f,g,x)=>{let b={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};b.relativePath.startsWith("/")&&(Ve(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length));let p=ba([c,b.relativePath]),y=u.concat(b);f.children&&f.children.length>0&&(Ve(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Cp(f.children,s,y,p)),!(f.path==null&&!f.index)&&s.push({path:p,score:dx(p,f.index),routesMeta:y})};return r.forEach((f,g)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,g);else for(let b of Ap(f.path))d(f,g,b)}),s}function Ap(r){let s=r.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let g=Ap(c.join("/")),x=[];return x.push(...g.map(b=>b===""?f:[f,b].join("/"))),d&&x.push(...g),x.map(b=>r.startsWith("/")&&b===""?"/":b)}function ix(r){r.sort((s,u)=>s.score!==u.score?u.score-s.score:fx(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var rx=/^:[\w-]+$/,lx=3,ox=2,sx=1,cx=10,ux=-2,Rm=r=>r==="*";function dx(r,s){let u=r.split("/"),c=u.length;return u.some(Rm)&&(c+=ux),s&&(c+=ox),u.filter(d=>!Rm(d)).reduce((d,f)=>d+(rx.test(f)?lx:f===""?sx:cx),c)}function fx(r,s){return r.length===s.length&&r.slice(0,-1).every((c,d)=>c===s[d])?r[r.length-1]-s[s.length-1]:0}function mx(r,s,u=!1){let{routesMeta:c}=r,d={},f="/",g=[];for(let x=0;x<c.length;++x){let b=c[x],p=x===c.length-1,y=f==="/"?s:s.slice(f.length)||"/",A=Pl({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},y),E=b.route;if(!A&&p&&u&&!c[c.length-1].route.index&&(A=Pl({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!A)return null;Object.assign(d,A.params),g.push({params:d,pathname:ba([f,A.pathname]),pathnameBase:yx(ba([f,A.pathnameBase])),route:E}),A.pathnameBase!=="/"&&(f=ba([f,A.pathnameBase]))}return g}function Pl(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=px(r.path,r.caseSensitive,r.end),d=s.match(u);if(!d)return null;let f=d[0],g=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:c.reduce((p,{paramName:y,isOptional:A},E)=>{if(y==="*"){let M=x[E]||"";g=f.slice(0,f.length-M.length).replace(/(.)\/+$/,"$1")}const k=x[E];return A&&!k?p[y]=void 0:p[y]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:g,pattern:r}}function px(r,s=!1,u=!0){ea(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,b)=>(c.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function gx(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ea(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function ya(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}function hx(r,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof r=="string"?pi(r):r;return{pathname:u?u.startsWith("/")?u:xx(u,s):s,search:vx(c),hash:wx(d)}}function xx(r,s){let u=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Nc(r,s,u,c){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bx(r){return r.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function Ep(r){let s=bx(r);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Np(r,s,u,c=!1){let d;typeof r=="string"?d=pi(r):(d={...r},Ve(!d.pathname||!d.pathname.includes("?"),Nc("?","pathname","search",d)),Ve(!d.pathname||!d.pathname.includes("#"),Nc("#","pathname","hash",d)),Ve(!d.search||!d.search.includes("#"),Nc("#","search","hash",d)));let f=r===""||d.pathname==="",g=f?"/":d.pathname,x;if(g==null)x=u;else{let A=s.length-1;if(!c&&g.startsWith("..")){let E=g.split("/");for(;E[0]==="..";)E.shift(),A-=1;d.pathname=E.join("/")}x=A>=0?s[A]:"/"}let b=hx(d,x),p=g&&g!=="/"&&g.endsWith("/"),y=(f||g===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(p||y)&&(b.pathname+="/"),b}var ba=r=>r.join("/").replace(/\/\/+/g,"/"),yx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),vx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,wx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Sx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Tp=["POST","PUT","PATCH","DELETE"];new Set(Tp);var jx=["GET",...Tp];new Set(jx);var gi=v.createContext(null);gi.displayName="DataRouter";var to=v.createContext(null);to.displayName="DataRouterState";var zp=v.createContext({isTransitioning:!1});zp.displayName="ViewTransition";var Cx=v.createContext(new Map);Cx.displayName="Fetchers";var Ax=v.createContext(null);Ax.displayName="Await";var ta=v.createContext(null);ta.displayName="Navigation";var Cr=v.createContext(null);Cr.displayName="Location";var Sa=v.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var fu=v.createContext(null);fu.displayName="RouteError";function Ex(r,{relative:s}={}){Ve(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=v.useContext(ta),{hash:d,pathname:f,search:g}=Er(r,{relative:s}),x=f;return u!=="/"&&(x=f==="/"?u:ba([u,f])),c.createHref({pathname:x,search:g,hash:d})}function Ar(){return v.useContext(Cr)!=null}function tn(){return Ve(Ar(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Cr).location}var kp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Rp(r){v.useContext(ta).static||v.useLayoutEffect(r)}function Nx(){let{isDataRoute:r}=v.useContext(Sa);return r?Hx():Tx()}function Tx(){Ve(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(gi),{basename:s,navigator:u}=v.useContext(ta),{matches:c}=v.useContext(Sa),{pathname:d}=tn(),f=JSON.stringify(Ep(c)),g=v.useRef(!1);return Rp(()=>{g.current=!0}),v.useCallback((b,p={})=>{if(ea(g.current,kp),!g.current)return;if(typeof b=="number"){u.go(b);return}let y=Np(b,JSON.parse(f),d,p.relative==="path");r==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:ba([s,y.pathname])),(p.replace?u.replace:u.push)(y,p.state,p)},[s,u,f,d,r])}v.createContext(null);function Er(r,{relative:s}={}){let{matches:u}=v.useContext(Sa),{pathname:c}=tn(),d=JSON.stringify(Ep(u));return v.useMemo(()=>Np(r,JSON.parse(d),c,s==="path"),[r,d,c,s])}function zx(r,s){return Mp(r,s)}function Mp(r,s,u,c){var L;Ve(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(ta),{matches:f}=v.useContext(Sa),g=f[f.length-1],x=g?g.params:{},b=g?g.pathname:"/",p=g?g.pathnameBase:"/",y=g&&g.route;{let S=y&&y.path||"";Op(b,!y||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let A=tn(),E;if(s){let S=typeof s=="string"?pi(s):s;Ve(p==="/"||((L=S.pathname)==null?void 0:L.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${S.pathname}" was given in the \`location\` prop.`),E=S}else E=A;let k=E.pathname||"/",M=k;if(p!=="/"){let S=p.replace(/^\//,"").split("/");M="/"+k.replace(/^\//,"").split("/").slice(S.length).join("/")}let G=jp(r,{pathname:M});ea(y||G!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),ea(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let O=Dx(G&&G.map(S=>Object.assign({},S,{params:Object.assign({},x,S.params),pathname:ba([p,d.encodeLocation?d.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?p:ba([p,d.encodeLocation?d.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),f,u,c);return s&&O?v.createElement(Cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},O):O}function kx(){let r=_x(),s=Sx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:f},"ErrorBoundary")," or"," ",v.createElement("code",{style:f},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},s),u?v.createElement("pre",{style:d},u):null,g)}var Rx=v.createElement(kx,null),Mx=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){console.error("React Router caught the following error during render",r,s)}render(){return this.state.error!==void 0?v.createElement(Sa.Provider,{value:this.props.routeContext},v.createElement(fu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ox({routeContext:r,match:s,children:u}){let c=v.useContext(gi);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),v.createElement(Sa.Provider,{value:r},u)}function Dx(r,s=[],u=null,c=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let d=r,f=u==null?void 0:u.errors;if(f!=null){let b=d.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Ve(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let g=!1,x=-1;if(u)for(let b=0;b<d.length;b++){let p=d[b];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=b),p.route.id){let{loaderData:y,errors:A}=u,E=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!A||A[p.route.id]===void 0);if(p.route.lazy||E){g=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((b,p,y)=>{let A,E=!1,k=null,M=null;u&&(A=f&&p.route.id?f[p.route.id]:void 0,k=p.route.errorElement||Rx,g&&(x<0&&y===0?(Op("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):x===y&&(E=!0,M=p.route.hydrateFallbackElement||null)));let G=s.concat(d.slice(0,y+1)),O=()=>{let L;return A?L=k:E?L=M:p.route.Component?L=v.createElement(p.route.Component,null):p.route.element?L=p.route.element:L=b,v.createElement(Ox,{match:p,routeContext:{outlet:b,matches:G,isDataRoute:u!=null},children:L})};return u&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?v.createElement(Mx,{location:u.location,revalidation:u.revalidation,component:k,error:A,children:O(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):O()},null)}function mu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bx(r){let s=v.useContext(gi);return Ve(s,mu(r)),s}function Lx(r){let s=v.useContext(to);return Ve(s,mu(r)),s}function Yx(r){let s=v.useContext(Sa);return Ve(s,mu(r)),s}function pu(r){let s=Yx(r),u=s.matches[s.matches.length-1];return Ve(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function Ux(){return pu("useRouteId")}function _x(){var c;let r=v.useContext(fu),s=Lx("useRouteError"),u=pu("useRouteError");return r!==void 0?r:(c=s.errors)==null?void 0:c[u]}function Hx(){let{router:r}=Bx("useNavigate"),s=pu("useNavigate"),u=v.useRef(!1);return Rp(()=>{u.current=!0}),v.useCallback(async(d,f={})=>{ea(u.current,kp),u.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:s,...f}))},[r,s])}var Mm={};function Op(r,s,u){!s&&!Mm[r]&&(Mm[r]=!0,ea(!1,u))}v.memo(qx);function qx({routes:r,future:s,state:u}){return Mp(r,void 0,u,s)}function Pa(r){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Xx({basename:r="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Ve(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=r.replace(/^\/*/,"/"),x=v.useMemo(()=>({basename:g,navigator:d,static:f,future:{}}),[g,d,f]);typeof u=="string"&&(u=pi(u));let{pathname:b="/",search:p="",hash:y="",state:A=null,key:E="default"}=u,k=v.useMemo(()=>{let M=ya(b,g);return M==null?null:{location:{pathname:M,search:p,hash:y,state:A,key:E},navigationType:c}},[g,b,p,y,A,E,c]);return ea(k!=null,`<Router basename="${g}"> is not able to match the URL "${b}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:v.createElement(ta.Provider,{value:x},v.createElement(Cr.Provider,{children:s,value:k}))}function Vx({children:r,location:s}){return zx(Ic(r),s)}function Ic(r,s=[]){let u=[];return v.Children.forEach(r,(c,d)=>{if(!v.isValidElement(c))return;let f=[...s,d];if(c.type===v.Fragment){u.push.apply(u,Ic(c.props.children,f));return}Ve(c.type===Pa,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Ic(c.props.children,f)),u.push(g)}),u}var Gl="get",Ql="application/x-www-form-urlencoded";function ao(r){return r!=null&&typeof r.tagName=="string"}function Ix(r){return ao(r)&&r.tagName.toLowerCase()==="button"}function Gx(r){return ao(r)&&r.tagName.toLowerCase()==="form"}function Qx(r){return ao(r)&&r.tagName.toLowerCase()==="input"}function Fx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Wx(r,s){return r.button===0&&(!s||s==="_self")&&!Fx(r)}var Xl=null;function Px(){if(Xl===null)try{new FormData(document.createElement("form"),0),Xl=!1}catch{Xl=!0}return Xl}var Zx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tc(r){return r!=null&&!Zx.has(r)?(ea(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`),null):r}function Kx(r,s){let u,c,d,f,g;if(Gx(r)){let x=r.getAttribute("action");c=x?ya(x,s):null,u=r.getAttribute("method")||Gl,d=Tc(r.getAttribute("enctype"))||Ql,f=new FormData(r)}else if(Ix(r)||Qx(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||x.getAttribute("action");if(c=b?ya(b,s):null,u=r.getAttribute("formmethod")||x.getAttribute("method")||Gl,d=Tc(r.getAttribute("formenctype"))||Tc(x.getAttribute("enctype"))||Ql,f=new FormData(x,r),!Px()){let{name:p,type:y,value:A}=r;if(y==="image"){let E=p?`${p}.`:"";f.append(`${E}x`,"0"),f.append(`${E}y`,"0")}else p&&f.append(p,A)}}else{if(ao(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Gl,c=null,d=Ql,g=r}return f&&d==="text/plain"&&(g=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:g}}function gu(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}async function $x(r,s){if(r.id in s)return s[r.id];try{let u=await import(r.module);return s[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function e2(r,s,u){let c=await Promise.all(r.map(async d=>{let f=s.routes[d.route.id];if(f){let g=await $x(f,u);return g.links?g.links():[]}return[]}));return i2(c.flat(1).filter(Jx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Om(r,s,u,c,d,f){let g=(b,p)=>u[p]?b.route.id!==u[p].route.id:!0,x=(b,p)=>{var y;return u[p].pathname!==b.pathname||((y=u[p].route.path)==null?void 0:y.endsWith("*"))&&u[p].params["*"]!==b.params["*"]};return f==="assets"?s.filter((b,p)=>g(b,p)||x(b,p)):f==="data"?s.filter((b,p)=>{var A;let y=c.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(g(b,p)||x(b,p))return!0;if(b.route.shouldRevalidate){let E=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((A=u[0])==null?void 0:A.params)||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof E=="boolean")return E}return!0}):[]}function t2(r,s,{includeHydrateFallback:u}={}){return a2(r.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function a2(r){return[...new Set(r)]}function n2(r){let s={},u=Object.keys(r).sort();for(let c of u)s[c]=r[c];return s}function i2(r,s){let u=new Set;return new Set(s),r.reduce((c,d)=>{let f=JSON.stringify(n2(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var r2=new Set([100,101,204,205]);function l2(r,s){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname="_root.data":s&&ya(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Dp(){let r=v.useContext(gi);return gu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function o2(){let r=v.useContext(to);return gu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var hu=v.createContext(void 0);hu.displayName="FrameworkContext";function Bp(){let r=v.useContext(hu);return gu(r,"You must render this element inside a <HydratedRouter> element"),r}function s2(r,s){let u=v.useContext(hu),[c,d]=v.useState(!1),[f,g]=v.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:p,onMouseLeave:y,onTouchStart:A}=s,E=v.useRef(null);v.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let G=L=>{L.forEach(S=>{g(S.isIntersecting)})},O=new IntersectionObserver(G,{threshold:.5});return E.current&&O.observe(E.current),()=>{O.disconnect()}}},[r]),v.useEffect(()=>{if(c){let G=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(G)}}},[c]);let k=()=>{d(!0)},M=()=>{d(!1),g(!1)};return u?r!=="intent"?[f,E,{}]:[f,E,{onFocus:xr(x,k),onBlur:xr(b,M),onMouseEnter:xr(p,k),onMouseLeave:xr(y,M),onTouchStart:xr(A,k)}]:[!1,E,{}]}function xr(r,s){return u=>{r&&r(u),u.defaultPrevented||s(u)}}function c2({page:r,...s}){let{router:u}=Dp(),c=v.useMemo(()=>jp(u.routes,r,u.basename),[u.routes,r,u.basename]);return c?v.createElement(d2,{page:r,matches:c,...s}):null}function u2(r){let{manifest:s,routeModules:u}=Bp(),[c,d]=v.useState([]);return v.useEffect(()=>{let f=!1;return e2(r,s,u).then(g=>{f||d(g)}),()=>{f=!0}},[r,s,u]),c}function d2({page:r,matches:s,...u}){let c=tn(),{manifest:d,routeModules:f}=Bp(),{basename:g}=Dp(),{loaderData:x,matches:b}=o2(),p=v.useMemo(()=>Om(r,s,b,d,c,"data"),[r,s,b,d,c]),y=v.useMemo(()=>Om(r,s,b,d,c,"assets"),[r,s,b,d,c]),A=v.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let M=new Set,G=!1;if(s.forEach(L=>{var W;let S=d.routes[L.route.id];!S||!S.hasLoader||(!p.some(K=>K.route.id===L.route.id)&&L.route.id in x&&((W=f[L.route.id])!=null&&W.shouldRevalidate)||S.hasClientLoader?G=!0:M.add(L.route.id))}),M.size===0)return[];let O=l2(r,g);return G&&M.size>0&&O.searchParams.set("_routes",s.filter(L=>M.has(L.route.id)).map(L=>L.route.id).join(",")),[O.pathname+O.search]},[g,x,c,d,p,s,r,f]),E=v.useMemo(()=>t2(y,d),[y,d]),k=u2(y);return v.createElement(v.Fragment,null,A.map(M=>v.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...u})),E.map(M=>v.createElement("link",{key:M,rel:"modulepreload",href:M,...u})),k.map(({key:M,link:G})=>v.createElement("link",{key:M,...G})))}function f2(...r){return s=>{r.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Lp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lp&&(window.__reactRouterVersion="7.6.2")}catch{}function m2({basename:r,children:s,window:u}){let c=v.useRef();c.current==null&&(c.current=J1({window:u,v5Compat:!0}));let d=c.current,[f,g]=v.useState({action:d.action,location:d.location}),x=v.useCallback(b=>{v.startTransition(()=>g(b))},[g]);return v.useLayoutEffect(()=>d.listen(x),[d,x]),v.createElement(Xx,{basename:r,children:s,location:f.location,navigationType:f.action,navigator:d})}var Yp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Za=v.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:g,state:x,target:b,to:p,preventScrollReset:y,viewTransition:A,...E},k){let{basename:M}=v.useContext(ta),G=typeof p=="string"&&Yp.test(p),O,L=!1;if(typeof p=="string"&&G&&(O=p,Lp))try{let D=new URL(window.location.href),de=p.startsWith("//")?new URL(D.protocol+p):new URL(p),Q=ya(de.pathname,M);de.origin===D.origin&&Q!=null?p=Q+de.search+de.hash:L=!0}catch{ea(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=Ex(p,{relative:d}),[W,K,Z]=s2(c,E),ge=x2(p,{replace:g,state:x,target:b,preventScrollReset:y,relative:d,viewTransition:A});function _(D){s&&s(D),D.defaultPrevented||ge(D)}let ie=v.createElement("a",{...E,...Z,href:O||S,onClick:L||f?s:_,ref:f2(k,K),target:b,"data-discover":!G&&u==="render"?"true":void 0});return W&&!G?v.createElement(v.Fragment,null,ie,v.createElement(c2,{page:S})):ie});Za.displayName="Link";var p2=v.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:g,viewTransition:x,children:b,...p},y){let A=Er(g,{relative:p.relative}),E=tn(),k=v.useContext(to),{navigator:M,basename:G}=v.useContext(ta),O=k!=null&&S2(A)&&x===!0,L=M.encodeLocation?M.encodeLocation(A).pathname:A.pathname,S=E.pathname,W=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;u||(S=S.toLowerCase(),W=W?W.toLowerCase():null,L=L.toLowerCase()),W&&G&&(W=ya(W,G)||W);const K=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Z=S===L||!d&&S.startsWith(L)&&S.charAt(K)==="/",ge=W!=null&&(W===L||!d&&W.startsWith(L)&&W.charAt(L.length)==="/"),_={isActive:Z,isPending:ge,isTransitioning:O},ie=Z?s:void 0,D;typeof c=="function"?D=c(_):D=[c,Z?"active":null,ge?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let de=typeof f=="function"?f(_):f;return v.createElement(Za,{...p,"aria-current":ie,className:D,ref:y,style:de,to:g,viewTransition:x},typeof b=="function"?b(_):b)});p2.displayName="NavLink";var g2=v.forwardRef(({discover:r="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:g=Gl,action:x,onSubmit:b,relative:p,preventScrollReset:y,viewTransition:A,...E},k)=>{let M=v2(),G=w2(x,{relative:p}),O=g.toLowerCase()==="get"?"get":"post",L=typeof x=="string"&&Yp.test(x),S=W=>{if(b&&b(W),W.defaultPrevented)return;W.preventDefault();let K=W.nativeEvent.submitter,Z=(K==null?void 0:K.getAttribute("formmethod"))||g;M(K||W.currentTarget,{fetcherKey:s,method:Z,navigate:u,replace:d,state:f,relative:p,preventScrollReset:y,viewTransition:A})};return v.createElement("form",{ref:k,method:O,action:G,onSubmit:c?b:S,...E,"data-discover":!L&&r==="render"?"true":void 0})});g2.displayName="Form";function h2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Up(r){let s=v.useContext(gi);return Ve(s,h2(r)),s}function x2(r,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:g}={}){let x=Nx(),b=tn(),p=Er(r,{relative:f});return v.useCallback(y=>{if(Wx(y,s)){y.preventDefault();let A=u!==void 0?u:wr(b)===wr(p);x(r,{replace:A,state:c,preventScrollReset:d,relative:f,viewTransition:g})}},[b,x,p,u,c,s,r,d,f,g])}var b2=0,y2=()=>`__${String(++b2)}__`;function v2(){let{router:r}=Up("useSubmit"),{basename:s}=v.useContext(ta),u=Ux();return v.useCallback(async(c,d={})=>{let{action:f,method:g,encType:x,formData:b,body:p}=Kx(c,s);if(d.navigate===!1){let y=d.fetcherKey||y2();await r.fetch(y,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||g,formEncType:d.encType||x,flushSync:d.flushSync})}else await r.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||g,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,s,u])}function w2(r,{relative:s}={}){let{basename:u}=v.useContext(ta),c=v.useContext(Sa);Ve(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...Er(r||".",{relative:s})},g=tn();if(r==null){f.search=g.search;let x=new URLSearchParams(f.search),b=x.getAll("index");if(b.some(y=>y==="")){x.delete("index"),b.filter(A=>A).forEach(A=>x.append("index",A));let y=x.toString();f.search=y?`?${y}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:ba([u,f.pathname])),wr(f)}function S2(r,s={}){let u=v.useContext(zp);Ve(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Up("useViewTransitionState"),d=Er(r,{relative:s.relative});if(!u.isTransitioning)return!1;let f=ya(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=ya(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Pl(d.pathname,g)!=null||Pl(d.pathname,f)!=null}[...r2];/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function j2(r,s,u){return(s=A2(s))in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function Dm(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function P(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Dm(Object(u),!0).forEach(function(c){j2(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):Dm(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function C2(r,s){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function A2(r){var s=C2(r,"string");return typeof s=="symbol"?s:s+""}const Bm=()=>{};let xu={},_p={},Hp=null,qp={mark:Bm,measure:Bm};try{typeof window<"u"&&(xu=window),typeof document<"u"&&(_p=document),typeof MutationObserver<"u"&&(Hp=MutationObserver),typeof performance<"u"&&(qp=performance)}catch{}const{userAgent:Lm=""}=xu.navigator||{},$a=xu,He=_p,Ym=Hp,Vl=qp;$a.document;const ja=!!He.documentElement&&!!He.head&&typeof He.addEventListener=="function"&&typeof He.createElement=="function",Xp=~Lm.indexOf("MSIE")||~Lm.indexOf("Trident/");var E2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,N2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Vp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},T2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ip=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],ut="classic",no="duotone",z2="sharp",k2="sharp-duotone",Gp=[ut,no,z2,k2],R2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},M2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},O2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),D2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},B2=["fak","fa-kit","fakd","fa-kit-duotone"],Um={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},L2=["kit"],Y2={kit:{"fa-kit":"fak"}},U2=["fak","fakd"],_2={kit:{fak:"fa-kit"}},_m={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Il={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],q2=["fak","fa-kit","fakd","fa-kit-duotone"],X2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},V2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},I2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},G2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Qc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...H2,...G2],Q2=["solid","regular","light","thin","duotone","brands"],Qp=[1,2,3,4,5,6,7,8,9,10],F2=Qp.concat([11,12,13,14,15,16,17,18,19,20]),W2=[...Object.keys(I2),...Q2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Il.GROUP,Il.SWAP_OPACITY,Il.PRIMARY,Il.SECONDARY].concat(Qp.map(r=>"".concat(r,"x"))).concat(F2.map(r=>"w-".concat(r))),P2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const va="___FONT_AWESOME___",Fc=16,Fp="fa",Wp="svg-inline--fa",jn="data-fa-i2svg",Wc="data-fa-pseudo-element",Z2="data-fa-pseudo-element-pending",bu="data-prefix",yu="data-icon",Hm="fontawesome-i2svg",K2="async",$2=["HTML","HEAD","STYLE","SCRIPT"],Pp=(()=>{try{return!0}catch{return!1}})();function Nr(r){return new Proxy(r,{get(s,u){return u in s?s[u]:s[ut]}})}const Zp=P({},Vp);Zp[ut]=P(P(P(P({},{"fa-duotone":"duotone"}),Vp[ut]),Um.kit),Um["kit-duotone"]);const J2=Nr(Zp),Pc=P({},D2);Pc[ut]=P(P(P(P({},{duotone:"fad"}),Pc[ut]),_m.kit),_m["kit-duotone"]);const qm=Nr(Pc),Zc=P({},Gc);Zc[ut]=P(P({},Zc[ut]),_2.kit);const vu=Nr(Zc),Kc=P({},V2);Kc[ut]=P(P({},Kc[ut]),Y2.kit);Nr(Kc);const eb=E2,Kp="fa-layers-text",tb=N2,ab=P({},R2);Nr(ab);const nb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zc=T2,ib=[...L2,...W2],yr=$a.FontAwesomeConfig||{};function rb(r){var s=He.querySelector("script["+r+"]");if(s)return s.getAttribute(r)}function lb(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}He&&typeof He.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[u,c]=s;const d=lb(rb(u));d!=null&&(yr[c]=d)});const $p={styleDefault:"solid",familyDefault:ut,cssPrefix:Fp,replacementClass:Wp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yr.familyPrefix&&(yr.cssPrefix=yr.familyPrefix);const mi=P(P({},$p),yr);mi.autoReplaceSvg||(mi.observeMutations=!1);const ce={};Object.keys($p).forEach(r=>{Object.defineProperty(ce,r,{enumerable:!0,set:function(s){mi[r]=s,vr.forEach(u=>u(ce))},get:function(){return mi[r]}})});Object.defineProperty(ce,"familyPrefix",{enumerable:!0,set:function(r){mi.cssPrefix=r,vr.forEach(s=>s(ce))},get:function(){return mi.cssPrefix}});$a.FontAwesomeConfig=ce;const vr=[];function ob(r){return vr.push(r),()=>{vr.splice(vr.indexOf(r),1)}}const Wa=Fc,Kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sb(r){if(!r||!ja)return;const s=He.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=r;const u=He.head.childNodes;let c=null;for(let d=u.length-1;d>-1;d--){const f=u[d],g=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(g)>-1&&(c=f)}return He.head.insertBefore(s,c),r}const cb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sr(){let r=12,s="";for(;r-- >0;)s+=cb[Math.random()*62|0];return s}function hi(r){const s=[];for(let u=(r||[]).length>>>0;u--;)s[u]=r[u];return s}function wu(r){return r.classList?hi(r.classList):(r.getAttribute("class")||"").split(" ").filter(s=>s)}function Jp(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ub(r){return Object.keys(r||{}).reduce((s,u)=>s+"".concat(u,'="').concat(Jp(r[u]),'" '),"").trim()}function io(r){return Object.keys(r||{}).reduce((s,u)=>s+"".concat(u,": ").concat(r[u].trim(),";"),"")}function Su(r){return r.size!==Kt.size||r.x!==Kt.x||r.y!==Kt.y||r.rotate!==Kt.rotate||r.flipX||r.flipY}function db(r){let{transform:s,containerWidth:u,iconWidth:c}=r;const d={transform:"translate(".concat(u/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),g="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),x="rotate(".concat(s.rotate," 0 0)"),b={transform:"".concat(f," ").concat(g," ").concat(x)},p={transform:"translate(".concat(c/2*-1," -256)")};return{outer:d,inner:b,path:p}}function fb(r){let{transform:s,width:u=Fc,height:c=Fc,startCentered:d=!1}=r,f="";return d&&Xp?f+="translate(".concat(s.x/Wa-u/2,"em, ").concat(s.y/Wa-c/2,"em) "):d?f+="translate(calc(-50% + ".concat(s.x/Wa,"em), calc(-50% + ").concat(s.y/Wa,"em)) "):f+="translate(".concat(s.x/Wa,"em, ").concat(s.y/Wa,"em) "),f+="scale(".concat(s.size/Wa*(s.flipX?-1:1),", ").concat(s.size/Wa*(s.flipY?-1:1),") "),f+="rotate(".concat(s.rotate,"deg) "),f}var mb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function eg(){const r=Fp,s=Wp,u=ce.cssPrefix,c=ce.replacementClass;let d=mb;if(u!==r||c!==s){const f=new RegExp("\\.".concat(r,"\\-"),"g"),g=new RegExp("\\--".concat(r,"\\-"),"g"),x=new RegExp("\\.".concat(s),"g");d=d.replace(f,".".concat(u,"-")).replace(g,"--".concat(u,"-")).replace(x,".".concat(c))}return d}let Xm=!1;function kc(){ce.autoAddCss&&!Xm&&(sb(eg()),Xm=!0)}var pb={mixout(){return{dom:{css:eg,insertCss:kc}}},hooks(){return{beforeDOMElementCreation(){kc()},beforeI2svg(){kc()}}}};const wa=$a||{};wa[va]||(wa[va]={});wa[va].styles||(wa[va].styles={});wa[va].hooks||(wa[va].hooks={});wa[va].shims||(wa[va].shims=[]);var $t=wa[va];const tg=[],ag=function(){He.removeEventListener("DOMContentLoaded",ag),Zl=1,tg.map(r=>r())};let Zl=!1;ja&&(Zl=(He.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(He.readyState),Zl||He.addEventListener("DOMContentLoaded",ag));function gb(r){ja&&(Zl?setTimeout(r,0):tg.push(r))}function Tr(r){const{tag:s,attributes:u={},children:c=[]}=r;return typeof r=="string"?Jp(r):"<".concat(s," ").concat(ub(u),">").concat(c.map(Tr).join(""),"</").concat(s,">")}function Vm(r,s,u){if(r&&r[s]&&r[s][u])return{prefix:s,iconName:u,icon:r[s][u]}}var Rc=function(s,u,c,d){var f=Object.keys(s),g=f.length,x=u,b,p,y;for(c===void 0?(b=1,y=s[f[0]]):(b=0,y=c);b<g;b++)p=f[b],y=x(y,s[p],p,s);return y};function hb(r){const s=[];let u=0;const c=r.length;for(;u<c;){const d=r.charCodeAt(u++);if(d>=55296&&d<=56319&&u<c){const f=r.charCodeAt(u++);(f&64512)==56320?s.push(((d&1023)<<10)+(f&1023)+65536):(s.push(d),u--)}else s.push(d)}return s}function $c(r){const s=hb(r);return s.length===1?s[0].toString(16):null}function xb(r,s){const u=r.length;let c=r.charCodeAt(s),d;return c>=55296&&c<=56319&&u>s+1&&(d=r.charCodeAt(s+1),d>=56320&&d<=57343)?(c-55296)*1024+d-56320+65536:c}function Im(r){return Object.keys(r).reduce((s,u)=>{const c=r[u];return!!c.icon?s[c.iconName]=c.icon:s[u]=c,s},{})}function Jc(r,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:c=!1}=u,d=Im(s);typeof $t.hooks.addPack=="function"&&!c?$t.hooks.addPack(r,Im(s)):$t.styles[r]=P(P({},$t.styles[r]||{}),d),r==="fas"&&Jc("fa",s)}const{styles:jr,shims:bb}=$t,ng=Object.keys(vu),yb=ng.reduce((r,s)=>(r[s]=Object.keys(vu[s]),r),{});let ju=null,ig={},rg={},lg={},og={},sg={};function vb(r){return~ib.indexOf(r)}function wb(r,s){const u=s.split("-"),c=u[0],d=u.slice(1).join("-");return c===r&&d!==""&&!vb(d)?d:null}const cg=()=>{const r=c=>Rc(jr,(d,f,g)=>(d[g]=Rc(f,c,{}),d),{});ig=r((c,d,f)=>(d[3]&&(c[d[3]]=f),d[2]&&d[2].filter(x=>typeof x=="number").forEach(x=>{c[x.toString(16)]=f}),c)),rg=r((c,d,f)=>(c[f]=f,d[2]&&d[2].filter(x=>typeof x=="string").forEach(x=>{c[x]=f}),c)),sg=r((c,d,f)=>{const g=d[2];return c[f]=f,g.forEach(x=>{c[x]=f}),c});const s="far"in jr||ce.autoFetchSvg,u=Rc(bb,(c,d)=>{const f=d[0];let g=d[1];const x=d[2];return g==="far"&&!s&&(g="fas"),typeof f=="string"&&(c.names[f]={prefix:g,iconName:x}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:g,iconName:x}),c},{names:{},unicodes:{}});lg=u.names,og=u.unicodes,ju=ro(ce.styleDefault,{family:ce.familyDefault})};ob(r=>{ju=ro(r.styleDefault,{family:ce.familyDefault})});cg();function Cu(r,s){return(ig[r]||{})[s]}function Sb(r,s){return(rg[r]||{})[s]}function Sn(r,s){return(sg[r]||{})[s]}function ug(r){return lg[r]||{prefix:null,iconName:null}}function jb(r){const s=og[r],u=Cu("fas",r);return s||(u?{prefix:"fas",iconName:u}:null)||{prefix:null,iconName:null}}function Ja(){return ju}const dg=()=>({prefix:null,iconName:null,rest:[]});function Cb(r){let s=ut;const u=ng.reduce((c,d)=>(c[d]="".concat(ce.cssPrefix,"-").concat(d),c),{});return Gp.forEach(c=>{(r.includes(u[c])||r.some(d=>yb[c].includes(d)))&&(s=c)}),s}function ro(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:u=ut}=s,c=J2[u][r];if(u===no&&!r)return"fad";const d=qm[u][r]||qm[u][c],f=r in $t.styles?r:null;return d||f||null}function Ab(r){let s=[],u=null;return r.forEach(c=>{const d=wb(ce.cssPrefix,c);d?u=d:c&&s.push(c)}),{iconName:u,rest:s}}function Gm(r){return r.sort().filter((s,u,c)=>c.indexOf(s)===u)}function lo(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:u=!1}=s;let c=null;const d=Qc.concat(q2),f=Gm(r.filter(A=>d.includes(A))),g=Gm(r.filter(A=>!Qc.includes(A))),x=f.filter(A=>(c=A,!Ip.includes(A))),[b=null]=x,p=Cb(f),y=P(P({},Ab(g)),{},{prefix:ro(b,{family:p})});return P(P(P({},y),zb({values:r,family:p,styles:jr,config:ce,canonical:y,givenPrefix:c})),Eb(u,c,y))}function Eb(r,s,u){let{prefix:c,iconName:d}=u;if(r||!c||!d)return{prefix:c,iconName:d};const f=s==="fa"?ug(d):{},g=Sn(c,d);return d=f.iconName||g||d,c=f.prefix||c,c==="far"&&!jr.far&&jr.fas&&!ce.autoFetchSvg&&(c="fas"),{prefix:c,iconName:d}}const Nb=Gp.filter(r=>r!==ut||r!==no),Tb=Object.keys(Gc).filter(r=>r!==ut).map(r=>Object.keys(Gc[r])).flat();function zb(r){const{values:s,family:u,canonical:c,givenPrefix:d="",styles:f={},config:g={}}=r,x=u===no,b=s.includes("fa-duotone")||s.includes("fad"),p=g.familyDefault==="duotone",y=c.prefix==="fad"||c.prefix==="fa-duotone";if(!x&&(b||p||y)&&(c.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(c.prefix="fab"),!c.prefix&&Nb.includes(u)&&(Object.keys(f).find(E=>Tb.includes(E))||g.autoFetchSvg)){const E=O2.get(u).defaultShortPrefixId;c.prefix=E,c.iconName=Sn(c.prefix,c.iconName)||c.iconName}return(c.prefix==="fa"||d==="fa")&&(c.prefix=Ja()||"fas"),c}class kb{constructor(){this.definitions={}}add(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];const d=u.reduce(this._pullDefinitions,{});Object.keys(d).forEach(f=>{this.definitions[f]=P(P({},this.definitions[f]||{}),d[f]),Jc(f,d[f]);const g=vu[ut][f];g&&Jc(g,d[f]),cg()})}reset(){this.definitions={}}_pullDefinitions(s,u){const c=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(c).map(d=>{const{prefix:f,iconName:g,icon:x}=c[d],b=x[2];s[f]||(s[f]={}),b.length>0&&b.forEach(p=>{typeof p=="string"&&(s[f][p]=x)}),s[f][g]=x}),s}}let Qm=[],ui={};const fi={},Rb=Object.keys(fi);function Mb(r,s){let{mixoutsTo:u}=s;return Qm=r,ui={},Object.keys(fi).forEach(c=>{Rb.indexOf(c)===-1&&delete fi[c]}),Qm.forEach(c=>{const d=c.mixout?c.mixout():{};if(Object.keys(d).forEach(f=>{typeof d[f]=="function"&&(u[f]=d[f]),typeof d[f]=="object"&&Object.keys(d[f]).forEach(g=>{u[f]||(u[f]={}),u[f][g]=d[f][g]})}),c.hooks){const f=c.hooks();Object.keys(f).forEach(g=>{ui[g]||(ui[g]=[]),ui[g].push(f[g])})}c.provides&&c.provides(fi)}),u}function eu(r,s){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];return(ui[r]||[]).forEach(g=>{s=g.apply(null,[s,...c])}),s}function Cn(r){for(var s=arguments.length,u=new Array(s>1?s-1:0),c=1;c<s;c++)u[c-1]=arguments[c];(ui[r]||[]).forEach(f=>{f.apply(null,u)})}function en(){const r=arguments[0],s=Array.prototype.slice.call(arguments,1);return fi[r]?fi[r].apply(null,s):void 0}function tu(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:s}=r;const u=r.prefix||Ja();if(s)return s=Sn(u,s)||s,Vm(fg.definitions,u,s)||Vm($t.styles,u,s)}const fg=new kb,Ob=()=>{ce.autoReplaceSvg=!1,ce.observeMutations=!1,Cn("noAuto")},Db={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ja?(Cn("beforeI2svg",r),en("pseudoElements2svg",r),en("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s}=r;ce.autoReplaceSvg===!1&&(ce.autoReplaceSvg=!0),ce.observeMutations=!0,gb(()=>{Lb({autoReplaceSvgRoot:s}),Cn("watch",r)})}},Bb={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:Sn(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const s=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],u=ro(r[0]);return{prefix:u,iconName:Sn(u,s)||s}}if(typeof r=="string"&&(r.indexOf("".concat(ce.cssPrefix,"-"))>-1||r.match(eb))){const s=lo(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||Ja(),iconName:Sn(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){const s=Ja();return{prefix:s,iconName:Sn(s,r)||r}}}},kt={noAuto:Ob,config:ce,dom:Db,parse:Bb,library:fg,findIconDefinition:tu,toHtml:Tr},Lb=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s=He}=r;(Object.keys($t.styles).length>0||ce.autoFetchSvg)&&ja&&ce.autoReplaceSvg&&kt.dom.i2svg({node:s})};function oo(r,s){return Object.defineProperty(r,"abstract",{get:s}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(u=>Tr(u))}}),Object.defineProperty(r,"node",{get:function(){if(!ja)return;const u=He.createElement("div");return u.innerHTML=r.html,u.children}}),r}function Yb(r){let{children:s,main:u,mask:c,attributes:d,styles:f,transform:g}=r;if(Su(g)&&u.found&&!c.found){const{width:x,height:b}=u,p={x:x/b/2,y:.5};d.style=io(P(P({},f),{},{"transform-origin":"".concat(p.x+g.x/16,"em ").concat(p.y+g.y/16,"em")}))}return[{tag:"svg",attributes:d,children:s}]}function Ub(r){let{prefix:s,iconName:u,children:c,attributes:d,symbol:f}=r;const g=f===!0?"".concat(s,"-").concat(ce.cssPrefix,"-").concat(u):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},d),{},{id:g}),children:c}]}]}function Au(r){const{icons:{main:s,mask:u},prefix:c,iconName:d,transform:f,symbol:g,title:x,maskId:b,titleId:p,extra:y,watchable:A=!1}=r,{width:E,height:k}=u.found?u:s,M=U2.includes(c),G=[ce.replacementClass,d?"".concat(ce.cssPrefix,"-").concat(d):""].filter(Z=>y.classes.indexOf(Z)===-1).filter(Z=>Z!==""||!!Z).concat(y.classes).join(" ");let O={children:[],attributes:P(P({},y.attributes),{},{"data-prefix":c,"data-icon":d,class:G,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(k)})};const L=M&&!~y.classes.indexOf("fa-fw")?{width:"".concat(E/k*16*.0625,"em")}:{};A&&(O.attributes[jn]=""),x&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(p||Sr())},children:[x]}),delete O.attributes.title);const S=P(P({},O),{},{prefix:c,iconName:d,main:s,mask:u,maskId:b,transform:f,symbol:g,styles:P(P({},L),y.styles)}),{children:W,attributes:K}=u.found&&s.found?en("generateAbstractMask",S)||{children:[],attributes:{}}:en("generateAbstractIcon",S)||{children:[],attributes:{}};return S.children=W,S.attributes=K,g?Ub(S):Yb(S)}function Fm(r){const{content:s,width:u,height:c,transform:d,title:f,extra:g,watchable:x=!1}=r,b=P(P(P({},g.attributes),f?{title:f}:{}),{},{class:g.classes.join(" ")});x&&(b[jn]="");const p=P({},g.styles);Su(d)&&(p.transform=fb({transform:d,startCentered:!0,width:u,height:c}),p["-webkit-transform"]=p.transform);const y=io(p);y.length>0&&(b.style=y);const A=[];return A.push({tag:"span",attributes:b,children:[s]}),f&&A.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),A}function _b(r){const{content:s,title:u,extra:c}=r,d=P(P(P({},c.attributes),u?{title:u}:{}),{},{class:c.classes.join(" ")}),f=io(c.styles);f.length>0&&(d.style=f);const g=[];return g.push({tag:"span",attributes:d,children:[s]}),u&&g.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),g}const{styles:Mc}=$t;function au(r){const s=r[0],u=r[1],[c]=r.slice(4);let d=null;return Array.isArray(c)?d={tag:"g",attributes:{class:"".concat(ce.cssPrefix,"-").concat(zc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(zc.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(zc.PRIMARY),fill:"currentColor",d:c[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:s,height:u,icon:d}}const Hb={found:!1,width:512,height:512};function qb(r,s){!Pp&&!ce.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(s,'" is missing.'))}function nu(r,s){let u=s;return s==="fa"&&ce.styleDefault!==null&&(s=Ja()),new Promise((c,d)=>{if(u==="fa"){const f=ug(r)||{};r=f.iconName||r,s=f.prefix||s}if(r&&s&&Mc[s]&&Mc[s][r]){const f=Mc[s][r];return c(au(f))}qb(r,s),c(P(P({},Hb),{},{icon:ce.showMissingIcons&&r?en("missingIconAbstract")||{}:{}}))})}const Wm=()=>{},iu=ce.measurePerformance&&Vl&&Vl.mark&&Vl.measure?Vl:{mark:Wm,measure:Wm},br='FA "6.7.2"',Xb=r=>(iu.mark("".concat(br," ").concat(r," begins")),()=>mg(r)),mg=r=>{iu.mark("".concat(br," ").concat(r," ends")),iu.measure("".concat(br," ").concat(r),"".concat(br," ").concat(r," begins"),"".concat(br," ").concat(r," ends"))};var Eu={begin:Xb,end:mg};const Fl=()=>{};function Pm(r){return typeof(r.getAttribute?r.getAttribute(jn):null)=="string"}function Vb(r){const s=r.getAttribute?r.getAttribute(bu):null,u=r.getAttribute?r.getAttribute(yu):null;return s&&u}function Ib(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(ce.replacementClass)}function Gb(){return ce.autoReplaceSvg===!0?Wl.replace:Wl[ce.autoReplaceSvg]||Wl.replace}function Qb(r){return He.createElementNS("http://www.w3.org/2000/svg",r)}function Fb(r){return He.createElement(r)}function pg(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:u=r.tag==="svg"?Qb:Fb}=s;if(typeof r=="string")return He.createTextNode(r);const c=u(r.tag);return Object.keys(r.attributes||[]).forEach(function(f){c.setAttribute(f,r.attributes[f])}),(r.children||[]).forEach(function(f){c.appendChild(pg(f,{ceFn:u}))}),c}function Wb(r){let s=" ".concat(r.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}const Wl={replace:function(r){const s=r[0];if(s.parentNode)if(r[1].forEach(u=>{s.parentNode.insertBefore(pg(u),s)}),s.getAttribute(jn)===null&&ce.keepOriginalSource){let u=He.createComment(Wb(s));s.parentNode.replaceChild(u,s)}else s.remove()},nest:function(r){const s=r[0],u=r[1];if(~wu(s).indexOf(ce.replacementClass))return Wl.replace(r);const c=new RegExp("".concat(ce.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){const f=u[0].attributes.class.split(" ").reduce((g,x)=>(x===ce.replacementClass||x.match(c)?g.toSvg.push(x):g.toNode.push(x),g),{toNode:[],toSvg:[]});u[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",f.toNode.join(" "))}const d=u.map(f=>Tr(f)).join(`
`);s.setAttribute(jn,""),s.innerHTML=d}};function Zm(r){r()}function gg(r,s){const u=typeof s=="function"?s:Fl;if(r.length===0)u();else{let c=Zm;ce.mutateApproach===K2&&(c=$a.requestAnimationFrame||Zm),c(()=>{const d=Gb(),f=Eu.begin("mutate");r.map(d),f(),u()})}}let Nu=!1;function hg(){Nu=!0}function ru(){Nu=!1}let Kl=null;function Km(r){if(!Ym||!ce.observeMutations)return;const{treeCallback:s=Fl,nodeCallback:u=Fl,pseudoElementsCallback:c=Fl,observeMutationsRoot:d=He}=r;Kl=new Ym(f=>{if(Nu)return;const g=Ja();hi(f).forEach(x=>{if(x.type==="childList"&&x.addedNodes.length>0&&!Pm(x.addedNodes[0])&&(ce.searchPseudoElements&&c(x.target),s(x.target)),x.type==="attributes"&&x.target.parentNode&&ce.searchPseudoElements&&c(x.target.parentNode),x.type==="attributes"&&Pm(x.target)&&~nb.indexOf(x.attributeName))if(x.attributeName==="class"&&Vb(x.target)){const{prefix:b,iconName:p}=lo(wu(x.target));x.target.setAttribute(bu,b||g),p&&x.target.setAttribute(yu,p)}else Ib(x.target)&&u(x.target)})}),ja&&Kl.observe(d,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Pb(){Kl&&Kl.disconnect()}function Zb(r){const s=r.getAttribute("style");let u=[];return s&&(u=s.split(";").reduce((c,d)=>{const f=d.split(":"),g=f[0],x=f.slice(1);return g&&x.length>0&&(c[g]=x.join(":").trim()),c},{})),u}function Kb(r){const s=r.getAttribute("data-prefix"),u=r.getAttribute("data-icon"),c=r.innerText!==void 0?r.innerText.trim():"";let d=lo(wu(r));return d.prefix||(d.prefix=Ja()),s&&u&&(d.prefix=s,d.iconName=u),d.iconName&&d.prefix||(d.prefix&&c.length>0&&(d.iconName=Sb(d.prefix,r.innerText)||Cu(d.prefix,$c(r.innerText))),!d.iconName&&ce.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(d.iconName=r.firstChild.data)),d}function $b(r){const s=hi(r.attributes).reduce((d,f)=>(d.name!=="class"&&d.name!=="style"&&(d[f.name]=f.value),d),{}),u=r.getAttribute("title"),c=r.getAttribute("data-fa-title-id");return ce.autoA11y&&(u?s["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(c||Sr()):(s["aria-hidden"]="true",s.focusable="false")),s}function Jb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $m(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:u,prefix:c,rest:d}=Kb(r),f=$b(r),g=eu("parseNodeAttributes",{},r);let x=s.styleParser?Zb(r):[];return P({iconName:u,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:c,transform:Kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:x,attributes:f}},g)}const{styles:ey}=$t;function xg(r){const s=ce.autoReplaceSvg==="nest"?$m(r,{styleParser:!1}):$m(r);return~s.extra.classes.indexOf(Kp)?en("generateLayersText",r,s):en("generateSvgReplacementMutation",r,s)}function ty(){return[...B2,...Qc]}function Jm(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ja)return Promise.resolve();const u=He.documentElement.classList,c=y=>u.add("".concat(Hm,"-").concat(y)),d=y=>u.remove("".concat(Hm,"-").concat(y)),f=ce.autoFetchSvg?ty():Ip.concat(Object.keys(ey));f.includes("fa")||f.push("fa");const g=[".".concat(Kp,":not([").concat(jn,"])")].concat(f.map(y=>".".concat(y,":not([").concat(jn,"])"))).join(", ");if(g.length===0)return Promise.resolve();let x=[];try{x=hi(r.querySelectorAll(g))}catch{}if(x.length>0)c("pending"),d("complete");else return Promise.resolve();const b=Eu.begin("onTree"),p=x.reduce((y,A)=>{try{const E=xg(A);E&&y.push(E)}catch(E){Pp||E.name==="MissingIcon"&&console.error(E)}return y},[]);return new Promise((y,A)=>{Promise.all(p).then(E=>{gg(E,()=>{c("active"),c("complete"),d("pending"),typeof s=="function"&&s(),b(),y()})}).catch(E=>{b(),A(E)})})}function ay(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xg(r).then(u=>{u&&gg([u],s)})}function ny(r){return function(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=(s||{}).icon?s:tu(s||{});let{mask:d}=u;return d&&(d=(d||{}).icon?d:tu(d||{})),r(c,P(P({},u),{},{mask:d}))}}const iy=function(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Kt,symbol:c=!1,mask:d=null,maskId:f=null,title:g=null,titleId:x=null,classes:b=[],attributes:p={},styles:y={}}=s;if(!r)return;const{prefix:A,iconName:E,icon:k}=r;return oo(P({type:"icon"},r),()=>(Cn("beforeDOMElementCreation",{iconDefinition:r,params:s}),ce.autoA11y&&(g?p["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(x||Sr()):(p["aria-hidden"]="true",p.focusable="false")),Au({icons:{main:au(k),mask:d?au(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:E,transform:P(P({},Kt),u),symbol:c,title:g,maskId:f,titleId:x,extra:{attributes:p,styles:y,classes:b}})))};var ry={mixout(){return{icon:ny(iy)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=Jm,r.nodeCallback=ay,r}}},provides(r){r.i2svg=function(s){const{node:u=He,callback:c=()=>{}}=s;return Jm(u,c)},r.generateSvgReplacementMutation=function(s,u){const{iconName:c,title:d,titleId:f,prefix:g,transform:x,symbol:b,mask:p,maskId:y,extra:A}=u;return new Promise((E,k)=>{Promise.all([nu(c,g),p.iconName?nu(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[G,O]=M;E([s,Au({icons:{main:G,mask:O},prefix:g,iconName:c,transform:x,symbol:b,maskId:y,title:d,titleId:f,extra:A,watchable:!0})])}).catch(k)})},r.generateAbstractIcon=function(s){let{children:u,attributes:c,main:d,transform:f,styles:g}=s;const x=io(g);x.length>0&&(c.style=x);let b;return Su(f)&&(b=en("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),u.push(b||d.icon),{children:u,attributes:c}}}},ly={mixout(){return{layer(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:u=[]}=s;return oo({type:"layer"},()=>{Cn("beforeDOMElementCreation",{assembler:r,params:s});let c=[];return r(d=>{Array.isArray(d)?d.map(f=>{c=c.concat(f.abstract)}):c=c.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(ce.cssPrefix,"-layers"),...u].join(" ")},children:c}]})}}}},oy={mixout(){return{counter(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:u=null,classes:c=[],attributes:d={},styles:f={}}=s;return oo({type:"counter",content:r},()=>(Cn("beforeDOMElementCreation",{content:r,params:s}),_b({content:r.toString(),title:u,extra:{attributes:d,styles:f,classes:["".concat(ce.cssPrefix,"-layers-counter"),...c]}})))}}}},sy={mixout(){return{text(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Kt,title:c=null,classes:d=[],attributes:f={},styles:g={}}=s;return oo({type:"text",content:r},()=>(Cn("beforeDOMElementCreation",{content:r,params:s}),Fm({content:r,transform:P(P({},Kt),u),title:c,extra:{attributes:f,styles:g,classes:["".concat(ce.cssPrefix,"-layers-text"),...d]}})))}}},provides(r){r.generateLayersText=function(s,u){const{title:c,transform:d,extra:f}=u;let g=null,x=null;if(Xp){const b=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();g=p.width/b,x=p.height/b}return ce.autoA11y&&!c&&(f.attributes["aria-hidden"]="true"),Promise.resolve([s,Fm({content:s.innerHTML,width:g,height:x,transform:d,title:c,extra:f,watchable:!0})])}}};const cy=new RegExp('"',"ug"),ep=[1105920,1112319],tp=P(P(P(P({},{FontAwesome:{normal:"fas",400:"fas"}}),M2),P2),X2),lu=Object.keys(tp).reduce((r,s)=>(r[s.toLowerCase()]=tp[s],r),{}),uy=Object.keys(lu).reduce((r,s)=>{const u=lu[s];return r[s]=u[900]||[...Object.entries(u)][0][1],r},{});function dy(r){const s=r.replace(cy,""),u=xb(s,0),c=u>=ep[0]&&u<=ep[1],d=s.length===2?s[0]===s[1]:!1;return{value:$c(d?s[0]:s),isSecondary:c||d}}function fy(r,s){const u=r.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(s),d=isNaN(c)?"normal":c;return(lu[u]||{})[d]||uy[u]}function ap(r,s){const u="".concat(Z2).concat(s.replace(":","-"));return new Promise((c,d)=>{if(r.getAttribute(u)!==null)return c();const g=hi(r.children).filter(E=>E.getAttribute(Wc)===s)[0],x=$a.getComputedStyle(r,s),b=x.getPropertyValue("font-family"),p=b.match(tb),y=x.getPropertyValue("font-weight"),A=x.getPropertyValue("content");if(g&&!p)return r.removeChild(g),c();if(p&&A!=="none"&&A!==""){const E=x.getPropertyValue("content");let k=fy(b,y);const{value:M,isSecondary:G}=dy(E),O=p[0].startsWith("FontAwesome");let L=Cu(k,M),S=L;if(O){const W=jb(M);W.iconName&&W.prefix&&(L=W.iconName,k=W.prefix)}if(L&&!G&&(!g||g.getAttribute(bu)!==k||g.getAttribute(yu)!==S)){r.setAttribute(u,S),g&&r.removeChild(g);const W=Jb(),{extra:K}=W;K.attributes[Wc]=s,nu(L,k).then(Z=>{const ge=Au(P(P({},W),{},{icons:{main:Z,mask:dg()},prefix:k,iconName:S,extra:K,watchable:!0})),_=He.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?r.insertBefore(_,r.firstChild):r.appendChild(_),_.outerHTML=ge.map(ie=>Tr(ie)).join(`
`),r.removeAttribute(u),c()}).catch(d)}else c()}else c()})}function my(r){return Promise.all([ap(r,"::before"),ap(r,"::after")])}function py(r){return r.parentNode!==document.head&&!~$2.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Wc)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function np(r){if(ja)return new Promise((s,u)=>{const c=hi(r.querySelectorAll("*")).filter(py).map(my),d=Eu.begin("searchPseudoElements");hg(),Promise.all(c).then(()=>{d(),ru(),s()}).catch(()=>{d(),ru(),u()})})}var gy={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=np,r}}},provides(r){r.pseudoElements2svg=function(s){const{node:u=He}=s;ce.searchPseudoElements&&np(u)}}};let ip=!1;var hy={mixout(){return{dom:{unwatch(){hg(),ip=!0}}}},hooks(){return{bootstrap(){Km(eu("mutationObserverCallbacks",{}))},noAuto(){Pb()},watch(r){const{observeMutationsRoot:s}=r;ip?ru():Km(eu("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}};const rp=r=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((u,c)=>{const d=c.toLowerCase().split("-"),f=d[0];let g=d.slice(1).join("-");if(f&&g==="h")return u.flipX=!0,u;if(f&&g==="v")return u.flipY=!0,u;if(g=parseFloat(g),isNaN(g))return u;switch(f){case"grow":u.size=u.size+g;break;case"shrink":u.size=u.size-g;break;case"left":u.x=u.x-g;break;case"right":u.x=u.x+g;break;case"up":u.y=u.y-g;break;case"down":u.y=u.y+g;break;case"rotate":u.rotate=u.rotate+g;break}return u},s)};var xy={mixout(){return{parse:{transform:r=>rp(r)}}},hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-transform");return u&&(r.transform=rp(u)),r}}},provides(r){r.generateAbstractTransformGrouping=function(s){let{main:u,transform:c,containerWidth:d,iconWidth:f}=s;const g={transform:"translate(".concat(d/2," 256)")},x="translate(".concat(c.x*32,", ").concat(c.y*32,") "),b="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),p="rotate(".concat(c.rotate," 0 0)"),y={transform:"".concat(x," ").concat(b," ").concat(p)},A={transform:"translate(".concat(f/2*-1," -256)")},E={outer:g,inner:y,path:A};return{tag:"g",attributes:P({},E.outer),children:[{tag:"g",attributes:P({},E.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:P(P({},u.icon.attributes),E.path)}]}]}}}};const Oc={x:0,y:0,width:"100%",height:"100%"};function lp(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||s)&&(r.attributes.fill="black"),r}function by(r){return r.tag==="g"?r.children:[r]}var yy={hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-mask"),c=u?lo(u.split(" ").map(d=>d.trim())):dg();return c.prefix||(c.prefix=Ja()),r.mask=c,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(s){let{children:u,attributes:c,main:d,mask:f,maskId:g,transform:x}=s;const{width:b,icon:p}=d,{width:y,icon:A}=f,E=db({transform:x,containerWidth:y,iconWidth:b}),k={tag:"rect",attributes:P(P({},Oc),{},{fill:"white"})},M=p.children?{children:p.children.map(lp)}:{},G={tag:"g",attributes:P({},E.inner),children:[lp(P({tag:p.tag,attributes:P(P({},p.attributes),E.path)},M))]},O={tag:"g",attributes:P({},E.outer),children:[G]},L="mask-".concat(g||Sr()),S="clip-".concat(g||Sr()),W={tag:"mask",attributes:P(P({},Oc),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,O]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:by(A)},W]};return u.push(K,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(L,")")},Oc)}),{children:u,attributes:c}}}},vy={provides(r){let s=!1;$a.matchMedia&&(s=$a.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const u=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:P(P({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=P(P({},d),{},{attributeName:"opacity"}),g={tag:"circle",attributes:P(P({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||g.children.push({tag:"animate",attributes:P(P({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},f),{},{values:"1;0;1;1;0;1;"})}),u.push(g),u.push({tag:"path",attributes:P(P({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:P(P({},f),{},{values:"1;0;0;0;0;1;"})}]}),s||u.push({tag:"path",attributes:P(P({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},wy={hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-symbol"),c=u===null?!1:u===""?!0:u;return r.symbol=c,r}}}},Sy=[pb,ry,ly,oy,sy,gy,hy,xy,yy,vy,wy];Mb(Sy,{mixoutsTo:kt});kt.noAuto;kt.config;kt.library;kt.dom;const ou=kt.parse;kt.findIconDefinition;kt.toHtml;const jy=kt.icon;kt.layer;kt.text;kt.counter;var Dc={exports:{}},Bc,op;function Cy(){if(op)return Bc;op=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Bc=r,Bc}var Lc,sp;function Ay(){if(sp)return Lc;sp=1;var r=Cy();function s(){}function u(){}return u.resetWarningCache=s,Lc=function(){function c(g,x,b,p,y,A){if(A!==r){var E=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw E.name="Invariant Violation",E}}c.isRequired=c;function d(){return c}var f={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:u,resetWarningCache:s};return f.PropTypes=f,f},Lc}var cp;function Ey(){return cp||(cp=1,Dc.exports=Ay()()),Dc.exports}var Ny=Ey();const Ne=uu(Ny);function up(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function Zt(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?up(Object(u),!0).forEach(function(c){di(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):up(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function $l(r){"@babel/helpers - typeof";return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$l(r)}function di(r,s,u){return s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function Ty(r,s){if(r==null)return{};var u={},c=Object.keys(r),d,f;for(f=0;f<c.length;f++)d=c[f],!(s.indexOf(d)>=0)&&(u[d]=r[d]);return u}function zy(r,s){if(r==null)return{};var u=Ty(r,s),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function su(r){return ky(r)||Ry(r)||My(r)||Oy()}function ky(r){if(Array.isArray(r))return cu(r)}function Ry(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function My(r,s){if(r){if(typeof r=="string")return cu(r,s);var u=Object.prototype.toString.call(r).slice(8,-1);if(u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set")return Array.from(r);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return cu(r,s)}}function cu(r,s){(s==null||s>r.length)&&(s=r.length);for(var u=0,c=new Array(s);u<s;u++)c[u]=r[u];return c}function Oy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dy(r){var s,u=r.beat,c=r.fade,d=r.beatFade,f=r.bounce,g=r.shake,x=r.flash,b=r.spin,p=r.spinPulse,y=r.spinReverse,A=r.pulse,E=r.fixedWidth,k=r.inverse,M=r.border,G=r.listItem,O=r.flip,L=r.size,S=r.rotation,W=r.pull,K=(s={"fa-beat":u,"fa-fade":c,"fa-beat-fade":d,"fa-bounce":f,"fa-shake":g,"fa-flash":x,"fa-spin":b,"fa-spin-reverse":y,"fa-spin-pulse":p,"fa-pulse":A,"fa-fw":E,"fa-inverse":k,"fa-border":M,"fa-li":G,"fa-flip":O===!0,"fa-flip-horizontal":O==="horizontal"||O==="both","fa-flip-vertical":O==="vertical"||O==="both"},di(s,"fa-".concat(L),typeof L<"u"&&L!==null),di(s,"fa-rotate-".concat(S),typeof S<"u"&&S!==null&&S!==0),di(s,"fa-pull-".concat(W),typeof W<"u"&&W!==null),di(s,"fa-swap-opacity",r.swapOpacity),s);return Object.keys(K).map(function(Z){return K[Z]?Z:null}).filter(function(Z){return Z})}function By(r){return r=r-0,r===r}function bg(r){return By(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(s,u){return u?u.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var Ly=["style"];function Yy(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Uy(r){return r.split(";").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,u){var c=u.indexOf(":"),d=bg(u.slice(0,c)),f=u.slice(c+1).trim();return d.startsWith("webkit")?s[Yy(d)]=f:s[d]=f,s},{})}function yg(r,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof s=="string")return s;var c=(s.children||[]).map(function(b){return yg(r,b)}),d=Object.keys(s.attributes||{}).reduce(function(b,p){var y=s.attributes[p];switch(p){case"class":b.attrs.className=y,delete s.attributes.class;break;case"style":b.attrs.style=Uy(y);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?b.attrs[p.toLowerCase()]=y:b.attrs[bg(p)]=y}return b},{attrs:{}}),f=u.style,g=f===void 0?{}:f,x=zy(u,Ly);return d.attrs.style=Zt(Zt({},d.attrs.style),g),r.apply(void 0,[s.tag,Zt(Zt({},d.attrs),x)].concat(su(c)))}var vg=!1;try{vg=!0}catch{}function _y(){if(!vg&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function dp(r){if(r&&$l(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(ou.icon)return ou.icon(r);if(r===null)return null;if(r&&$l(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Yc(r,s){return Array.isArray(s)&&s.length>0||!Array.isArray(s)&&s?di({},r,s):{}}var fp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ka=Jt.forwardRef(function(r,s){var u=Zt(Zt({},fp),r),c=u.icon,d=u.mask,f=u.symbol,g=u.className,x=u.title,b=u.titleId,p=u.maskId,y=dp(c),A=Yc("classes",[].concat(su(Dy(u)),su((g||"").split(" ")))),E=Yc("transform",typeof u.transform=="string"?ou.transform(u.transform):u.transform),k=Yc("mask",dp(d)),M=jy(y,Zt(Zt(Zt(Zt({},A),E),k),{},{symbol:f,title:x,titleId:b,maskId:p}));if(!M)return _y("Could not find icon",y),null;var G=M.abstract,O={ref:s};return Object.keys(u).forEach(function(L){fp.hasOwnProperty(L)||(O[L]=u[L])}),Hy(G[0],O)});Ka.displayName="FontAwesomeIcon";Ka.propTypes={beat:Ne.bool,border:Ne.bool,beatFade:Ne.bool,bounce:Ne.bool,className:Ne.string,fade:Ne.bool,flash:Ne.bool,mask:Ne.oneOfType([Ne.object,Ne.array,Ne.string]),maskId:Ne.string,fixedWidth:Ne.bool,inverse:Ne.bool,flip:Ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ne.oneOfType([Ne.object,Ne.array,Ne.string]),listItem:Ne.bool,pull:Ne.oneOf(["right","left"]),pulse:Ne.bool,rotation:Ne.oneOf([0,90,180,270]),shake:Ne.bool,size:Ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ne.bool,spinPulse:Ne.bool,spinReverse:Ne.bool,symbol:Ne.oneOfType([Ne.bool,Ne.string]),title:Ne.string,titleId:Ne.string,transform:Ne.oneOfType([Ne.string,Ne.object]),swapOpacity:Ne.bool};var Hy=yg.bind(null,Jt.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const qy={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Xy={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Vy=Xy,Iy={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Gy={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Qy={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]},Fy={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Wy=Fy,Py={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Zy=Py,Ky=({scrolled:r=!1})=>{const[s,u]=v.useState(!1),[c,d]=v.useState(!1),[f,g]=v.useState("/pavan-techno-constructions/images/logo.png"),x=tn(),b=["/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/logo.png","/pavan-techno-constructions/assets/logo.png"];v.useEffect(()=>(document.body.classList.toggle("no-scroll",s),()=>document.body.classList.remove("no-scroll")),[s]),v.useEffect(()=>{u(!1)},[x]);const p=()=>u(!s),y=()=>u(!1),A=()=>{const k=b.indexOf(f)+1;console.log(`Logo failed to load from: ${f}`),k<b.length?(console.log(`Trying next path: ${b[k]}`),g(b[k])):(console.log("All logo paths failed, showing fallback"),d(!0))};return i.jsxs(i.Fragment,{children:[i.jsx("style",{jsx:!0,children:`
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
      `}),i.jsx("header",{className:`navbar ${r?"scrolled":""}`,children:i.jsx("div",{className:"container",children:i.jsxs("nav",{className:"nav-container",children:[i.jsx("div",{className:"logo-section",children:i.jsxs(Za,{to:"/",className:"logo-container",children:[i.jsx("div",{className:"logo-hex",children:c?i.jsx("div",{className:"logo-fallback",children:"PTC"}):i.jsx("img",{src:f,alt:"Pavan Techno Constructions",className:"logo-image",onError:A,onLoad:()=>console.log(`Logo loaded successfully from: ${f}`)})}),i.jsxs("div",{className:"company-info",children:[i.jsx("div",{className:"company-name",children:"PAVAN TECHNO CONSTRUCTIONS"}),i.jsx("div",{className:"company-tagline",children:"Engineering Excellence"})]})]})}),i.jsxs("div",{className:`nav-links ${s?"active":""}`,children:[i.jsx("div",{className:`nav-item ${x.pathname==="/"?"active":""}`,children:i.jsxs(Za,{to:"/",onClick:y,children:[i.jsx(Ka,{icon:Wy})," Home"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/services"?"active":""}`,children:i.jsxs(Za,{to:"/services",onClick:y,children:[i.jsx(Ka,{icon:Vy})," Services"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/pricing"?"active":""}`,children:i.jsxs(Za,{to:"/pricing",onClick:y,children:[i.jsx(Ka,{icon:Iy})," Pricing"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/gallery"?"active":""}`,children:i.jsxs(Za,{to:"/gallery",onClick:y,children:[i.jsx(Ka,{icon:Qy})," Gallery"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/contact"?"active":""}`,children:i.jsxs(Za,{to:"/contact",onClick:y,children:[i.jsx(Ka,{icon:Gy})," Contact"]})})]}),i.jsx("button",{className:"hamburger",onClick:p,children:i.jsx(Ka,{icon:s?Zy:qy})})]})})})]})},mp=({openPopup:r})=>{const[s,u]=v.useState({x:0,y:0}),[c,d]=v.useState(!1),[f,g]=v.useState(!1),[x,b]=v.useState(0),[p,y]=v.useState(!1),[A,E]=v.useState(!1),[k,M]=v.useState(!1),G=v.useRef(null),O=v.useRef([]),L=v.useRef(null),S=v.useRef(null),W=v.useRef(null),K=v.useRef(null),Z=v.useRef(null),[ge,_]=v.useState("./images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg");v.useEffect(()=>{const T=setTimeout(()=>{M(!0)},3e3);return()=>clearTimeout(T)},[]);const ie=T=>{if(G.current&&k){const ee=G.current.getBoundingClientRect(),te=(T.clientX-ee.left)/ee.width-.5,we=(T.clientY-ee.top)/ee.height-.5;u({x:te,y:we}),document.querySelectorAll(".company-title, .company-title *, .animated-word, .animated-word *, .title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, .word-golden-2, .golden-blue-title, .golden-blue-title *").forEach(Me=>{Me&&(Me.style.transform="none",Me.style.transition="none",Me.style.perspective="none",Me.style.transformStyle="flat")})}},D=[{src:"52886-471089084_tiny.mp4",title:"Our Construction Process",paths:["/pavan-techno-constructions/images/52886-471089084_tiny.mp4","/pavan-techno-constructions/assets/52886-471089084_tiny.mp4","/pavan-techno-constructions/videos/52886-471089084_tiny.mp4"]},{src:"42926-434300944_tiny.mp4",title:"Project Showcase",paths:["/pavan-techno-constructions/images/42926-434300944_tiny.mp4","/pavan-techno-constructions/assets/42926-434300944_tiny.mp4","/pavan-techno-constructions/videos/42926-434300944_tiny.mp4"]}],de=["/pavan-techno-constructions/images/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/assets/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/videos/2835998-uhd_3840_2160_24fps.mp4"];v.useEffect(()=>{const T=new Image;return T.onload=()=>{console.log("Logo preloaded successfully:",T.src)},T.onerror=()=>{console.log("Logo preload failed, trying alternative path")},T.src=ge,()=>{T.onload=null,T.onerror=null}},[ge]);const Q=async T=>{T.preventDefault();const ee=["/pavan-techno-constructions/assets/pavan.pdf","/pavan-techno-constructions/images/pavan.pdf","/pavan-techno-constructions/pavan.pdf"];let te=0;const we=async()=>{if(te>=ee.length){alert("PDF file not found on server. Please contact support or try again later."),le();return}const xe=ee[te];console.log(`Trying PDF path ${te+1}/${ee.length}:`,xe);try{if((await fetch(xe,{method:"HEAD",headers:{Accept:"application/pdf"}})).ok){const lt=await fetch(xe);if(lt.ok){const Ze=await lt.blob();if(Ze.type==="application/pdf"||Ze.type===""||xe.endsWith(".pdf")){const dt=window.URL.createObjectURL(new Blob([Ze],{type:"application/pdf"})),ft=document.createElement("a");ft.href=dt,ft.download="PAVAN_TECHNO_CONSTRUCTIONS_BROCHURE.pdf",ft.style.display="none",document.body.appendChild(ft),ft.click(),document.body.removeChild(ft),setTimeout(()=>window.URL.revokeObjectURL(dt),100),console.log("PDF downloaded successfully from:",xe);return}}}}catch(Me){console.log("Error accessing PDF at:",xe,Me)}te++,setTimeout(we,100)};await we()},le=()=>{const T=`
PAVAN TECHNO CONSTRUCTIONS
Engineering Excellence

Consult, Design & Execute

Contact Information:
- Website: Visit our website for more details
- Services: Construction, Design, Engineering
- Experience: 15+ Years in the industry
- Projects: 500+ Completed successfully

Note: This is a temporary file. Please contact us directly for the complete brochure.
    `,ee=new Blob([T],{type:"text/plain"}),te=window.URL.createObjectURL(ee),we=document.createElement("a");we.href=te,we.download="PAVAN_TECHNO_CONSTRUCTIONS_INFO.txt",we.style.display="none",document.body.appendChild(we),we.click(),document.body.removeChild(we),setTimeout(()=>window.URL.revokeObjectURL(te),100),console.log("Fallback file created and downloaded")},fe=()=>{if(!K.current)return;let T=0;const ee=()=>{if(T>=de.length){console.error("All background video paths failed");return}const te=de[T];console.log(`Trying background video path ${T+1}/${de.length}:`,te),K.current.src=te,K.current.load();const we=()=>{console.log("Background video loaded successfully:",te),K.current.play().catch(lt=>{console.warn("Background video autoplay blocked:",lt)}),Me()},xe=()=>{console.log("Background video path failed:",te),T++,Me(),setTimeout(ee,100)},Me=()=>{K.current&&(K.current.removeEventListener("loadeddata",we),K.current.removeEventListener("canplay",we),K.current.removeEventListener("error",xe))};K.current.addEventListener("loadeddata",we,{once:!0}),K.current.addEventListener("canplay",we,{once:!0}),K.current.addEventListener("error",xe,{once:!0})};ee()};v.useEffect(()=>{const T=()=>{const se=new IntersectionObserver(ye=>{ye.forEach(Ce=>{Ce.isIntersecting&&(d(!0),dt())})},{threshold:.5});return L.current&&se.observe(L.current),se},ee=()=>{const se=window.pageYOffset,ye=window.innerHeight;if(se>ye*.7&&se<ye*1.5&&!f&&!A){re(!1);return}if(f&&se>ye*1.8){V(),setTimeout(()=>{ae()},300);return}if(!f){const Ce=se*-.3;document.querySelectorAll(".geometric-shape").forEach((mt,Rt)=>{const It=(Rt+1)*.2;mt.style.transform+=` translateY(${Ce*It}px)`})}},te=se=>{f&&(se.preventDefault(),se.deltaY>0?(V(),setTimeout(()=>{ae()},300)):se.deltaY<0&&V())};let we=0;const xe=se=>{f&&(we=se.touches[0].clientY)},Me=se=>{f&&se.preventDefault()},lt=se=>{if(f){const ye=se.changedTouches[0].clientY,Ce=we-ye;Ce>50?(V(),setTimeout(()=>{ae()},300)):Ce<-50&&V()}},Ze=()=>{const se=Date.now()*.001;O.current.forEach((ye,Ce)=>{if(ye){const gt=Math.sin(se+Ce*.7)*30,mt=Math.cos(se+Ce*.5)*20,Rt=1+Math.sin(se+Ce)*.3;ye.style.transform=`translate(${gt}px, ${mt}px) scale(${Rt})`}}),Z.current=requestAnimationFrame(Ze)},dt=()=>{document.querySelectorAll(".stat-number").forEach(ye=>{const Ce=parseInt(ye.getAttribute("data-target")),mt=Ce/(2e3/16);let Rt=0;const It=setInterval(()=>{Rt+=mt,Rt>=Ce?(ye.textContent=Ce+(ye.textContent.includes("+")?"+":"")+(ye.textContent.includes("%")?"%":""),clearInterval(It)):ye.textContent=Math.floor(Rt)+(ye.textContent.includes("+")?"+":"")+(ye.textContent.includes("%")?"%":"")},16)})},ft=()=>{document.querySelectorAll(".company-title, .company-title *, .animated-word, .animated-word *, .title-line, .title-line *, .word-char, .word-blue-1, .word-golden-1, .word-golden-2, .golden-blue-title, .golden-blue-title *").forEach(ye=>{ye&&(ye.style.setProperty("transform","none","important"),ye.style.setProperty("transition","none","important"),ye.style.setProperty("perspective","none","important"),ye.style.setProperty("transform-style","flat","important"))})},aa=T();document.addEventListener("mousemove",ie,{passive:!0}),window.addEventListener("scroll",ee,{passive:!0}),document.addEventListener("wheel",te,{passive:!1}),document.addEventListener("touchstart",xe,{passive:!1}),document.addEventListener("touchmove",Me,{passive:!1}),document.addEventListener("touchend",lt,{passive:!1}),Ze();const J=setTimeout(()=>{fe()},500),Te=setInterval(ft,100);return()=>{aa&&aa.disconnect(),document.removeEventListener("mousemove",ie),window.removeEventListener("scroll",ee),document.removeEventListener("wheel",te),document.removeEventListener("touchstart",xe),document.removeEventListener("touchmove",Me),document.removeEventListener("touchend",lt),Z.current&&cancelAnimationFrame(Z.current),clearTimeout(J),clearInterval(Te)}},[f,A,k]),v.useEffect(()=>{const T=ee=>{f&&(ee.key==="Escape"?V():ee.key==="ArrowLeft"?be():ee.key==="ArrowRight"&&ne())};return document.addEventListener("keydown",T),()=>document.removeEventListener("keydown",T)},[f,x]);const ae=()=>{const T=document.querySelector("#about")||document.querySelector(".about-section")||document.querySelector("section:nth-of-type(2)");T?T.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight-100,behavior:"smooth"})},re=(T=!0)=>{console.log("Opening video modal for video:",D[x].title),g(!0),y(!0),document.body.style.overflow="hidden",T||E(!0),setTimeout(()=>{Y(x)},100)},Y=T=>{if(!S.current)return;const ee=D[T];let te=0;const we=()=>{if(te>=ee.paths.length){console.error("All video paths failed for:",ee.title),y(!1);return}const xe=ee.paths[te];console.log(`Trying video path ${te+1}/${ee.paths.length}:`,xe),S.current.src=xe,S.current.load();const Me=()=>{console.log("Video loaded successfully:",xe),y(!1),setTimeout(()=>{S.current&&S.current.play().catch(dt=>{console.warn("Video autoplay blocked:",dt)})},100),Ze()},lt=dt=>{console.log("Video path failed:",xe,dt),te++,Ze(),setTimeout(we,100)},Ze=()=>{S.current&&(S.current.removeEventListener("loadeddata",Me),S.current.removeEventListener("canplay",Me),S.current.removeEventListener("error",lt))};S.current.addEventListener("loadeddata",Me,{once:!0}),S.current.addEventListener("canplay",Me,{once:!0}),S.current.addEventListener("error",lt,{once:!0})};we()},V=()=>{g(!1),y(!1),document.body.style.overflow="auto",S.current&&(S.current.pause(),S.current.currentTime=0)},ne=()=>{if(x<D.length-1){const T=x+1;b(T),y(!0),setTimeout(()=>{Y(T)},100)}},be=()=>{if(x>0){const T=x-1;b(T),y(!0),setTimeout(()=>{Y(T)},100)}},j=T=>{var ee;console.error("Video error event:",(ee=T.target)==null?void 0:ee.error)},X=({index:T})=>i.jsx("div",{ref:ee=>O.current[T]=ee,className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${T*.2}s`,animationDuration:`${8+Math.random()*4}s`}}),I=(T,ee)=>{const te=T.currentTarget;ee?(te.style.transform="translateY(-8px) scale(1.05) rotateX(10deg)",te.style.boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"):(te.style.transform="translateY(0) scale(1) rotateX(0deg)",te.style.boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)")},$=(T,ee)=>{const te=T.currentTarget;ee?(te.style.transform="translateY(-15px) scale(1.08) rotateY(8deg)",te.style.boxShadow="0 25px 50px rgba(255, 215, 0, 0.3)"):(te.style.transform="translateY(0) scale(1) rotateY(0deg)",te.style.boxShadow="0 8px 25px rgba(255, 215, 0, 0.1)")};return v.useEffect(()=>{const T=()=>{const ee=document.querySelector(".sticky-quote-btn");if(!ee)return;window.scrollY>100?(ee.style.opacity="1",ee.style.transform="translateY(0)"):(ee.style.opacity="0.8",ee.style.transform="translateY(20px)");const te=document.querySelector("footer");te&&te.getBoundingClientRect().top<window.innerHeight-100&&(ee.style.opacity="0",ee.style.transform="translateY(50px)")};return window.addEventListener("scroll",T),T(),()=>{window.removeEventListener("scroll",T)}},[]),i.jsxs("section",{className:"hero",ref:G,children:[i.jsxs("div",{className:"hero-left-section",style:{background:"#ffffff !important",paddingTop:"1.5rem"},children:[i.jsx("div",{className:"company-title golden-blue-title static-title",style:{marginTop:"-15px"},children:i.jsxs("h1",{children:[i.jsxs("span",{className:"title-line",children:[i.jsx("span",{className:"word-golden-1",children:"PAVAN"})," ",i.jsx("span",{className:"word-blue-1",children:"TECHNO"})]}),i.jsx("span",{className:"title-line",children:i.jsx("span",{className:"word-golden-2",children:"CONSTRUCTIONS"})})]})}),i.jsx("div",{className:"hero-company-logo",style:{marginTop:"-10px"},children:i.jsx("img",{src:ge,alt:"Pavan Techno Constructions Logo",className:"hero-logo-image",onError:T=>{}})}),i.jsx("div",{className:"tagline enhanced-tagline",style:{marginTop:"-5px"},children:i.jsx("p",{className:"typewriter golden-blue-tagline",children:"Consult, Design & Execute"})}),i.jsx("div",{className:"description",children:i.jsxs("p",{children:["Transforming ",i.jsx("strong",{children:"architectural dreams"})," into concrete reality with ",i.jsx("strong",{children:"cutting-edge technology"}),", innovative engineering solutions, and unwavering commitment to ",i.jsx("strong",{children:"excellence"}),". We deliver sophisticated construction projects that stand the test of time."]})})]}),i.jsxs("div",{className:"hero-right-section",children:[i.jsxs("div",{className:"hero-video-container",children:[i.jsx("video",{ref:K,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"hero-video",style:{transform:`scale(1.1) translate(${s.x*15}px, ${s.y*15}px)`}}),i.jsx("div",{className:"hero-overlay",style:{background:`radial-gradient(circle at ${(s.x+.5)*100}% ${(s.y+.5)*100}%, 
                          rgba(255, 215, 0, 0.15) 0%, 
                          rgba(0, 0, 0, 0.6) 40%, 
                          rgba(0, 0, 0, 0.85) 100%)`}})]}),i.jsx("div",{className:"particles-container",children:Array.from({length:20},(T,ee)=>i.jsx(X,{index:ee},ee))}),i.jsxs("div",{className:"hero-geometry",children:[i.jsx("div",{className:"geometric-shape shape-1",style:{transform:`translate(${s.x*-40}px, ${s.y*-30}px) rotate(${Date.now()*.01}deg)`}}),i.jsx("div",{className:"geometric-shape shape-2",style:{transform:`translate(${s.x*25}px, ${s.y*-20}px) rotate(${Date.now()*-.008}deg)`}}),i.jsx("div",{className:"geometric-shape shape-3",style:{transform:`translate(${s.x*-20}px, ${s.y*30}px) rotate(${Date.now()*.012}deg)`}})]}),i.jsxs("div",{className:"hero-right-content",children:[i.jsxs("div",{className:"hero-buttons",children:[i.jsxs("button",{onClick:Q,className:"hero-btn primary",onMouseEnter:T=>I(T,!0),onMouseLeave:T=>I(T,!1),children:[i.jsx("span",{children:"📄"})," Download Portfolio"]}),i.jsxs("button",{onClick:r,className:"hero-btn secondary",onMouseEnter:T=>I(T,!0),onMouseLeave:T=>I(T,!1),children:[i.jsx("span",{children:"⚡"})," Start Your Project"]})]}),i.jsxs("div",{className:"hero-stats",ref:L,children:[i.jsxs("div",{className:"stat",onMouseEnter:T=>$(T,!0),onMouseLeave:T=>$(T,!1),children:[i.jsx("div",{className:"stat-number","data-target":"60",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),i.jsxs("div",{className:"stat",onMouseEnter:T=>$(T,!0),onMouseLeave:T=>$(T,!1),children:[i.jsx("div",{className:"stat-number","data-target":"15",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Years Experience"})]}),i.jsxs("div",{className:"stat",onMouseEnter:T=>$(T,!0),onMouseLeave:T=>$(T,!1),children:[i.jsx("div",{className:"stat-number","data-target":"100",children:"0%"}),i.jsx("div",{className:"stat-label",children:"Client Satisfaction"})]})]})]}),i.jsxs("button",{className:"floating-contact sticky-quote-btn",onClick:r,onMouseEnter:T=>{T.target.style.transform="translateY(-10px) scale(1.15) rotate(3deg)",T.target.style.boxShadow="0 20px 50px rgba(255, 215, 0, 0.7)"},onMouseLeave:T=>{T.target.style.transform="translateY(0) scale(1) rotate(0deg)",T.target.style.boxShadow="0 8px 25px rgba(255, 215, 0, 0.4)"},style:{position:"fixed",bottom:"7rem",right:"2rem",zIndex:1002,background:"linear-gradient(135deg, #FFD700, #3b82f6)",padding:"0.9rem 1.6rem",borderRadius:"50px",boxShadow:"0 8px 25px rgba(255, 215, 0, 0.4)",border:"none",color:"white",fontWeight:"600",fontSize:"0.9rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all 0.3s ease"},children:[i.jsx("span",{children:"💬"})," Get Quote"]}),i.jsxs("button",{ref:W,className:"see-us-circle",onClick:()=>re(!0),onMouseEnter:T=>{T.target.style.transform="scale(1.2) rotate(10deg)",T.target.style.boxShadow="0 20px 50px rgba(236, 72, 153, 0.8)"},onMouseLeave:T=>{T.target.style.transform="scale(1) rotate(0deg)",T.target.style.boxShadow="0 10px 30px rgba(236, 72, 153, 0.4)"},style:{bottom:"6rem"},children:[i.jsx("span",{children:"See Us"}),i.jsx("span",{className:"play-icon",children:"▶"})]})]}),i.jsxs("button",{className:"scroll-btn",onClick:ae,onMouseEnter:T=>{T.target.style.transform="translateX(-50%) translateY(-15px) scale(1.15)",T.target.style.background="rgba(255, 255, 255, 0.15)"},onMouseLeave:T=>{T.target.style.transform="translateX(-50%) translateY(0) scale(1)",T.target.style.background="none"},children:[i.jsx("span",{children:"Explore More"}),i.jsx("div",{className:"arrow",children:"↓"})]}),i.jsx("div",{className:`video-modal-overlay${f?" active":""}`,children:i.jsxs("div",{className:"video-modal-container",children:[p&&i.jsxs("div",{className:"video-loading",children:[i.jsx("div",{className:"loading-spinner"}),"Loading Video..."]}),i.jsx("video",{ref:S,className:"video-modal-video",onError:j,onCanPlay:()=>y(!1),muted:!0,loop:!0,playsInline:!0,preload:"metadata",style:{opacity:p?0:1},children:i.jsx("p",{children:"Your browser does not support the video tag."})}),i.jsxs("div",{className:"video-controls",children:[i.jsx("button",{className:"video-nav-btn",onClick:be,disabled:x===0,onMouseEnter:T=>{T.target.disabled||(T.target.style.transform="scale(1.2) translateX(-5px)")},onMouseLeave:T=>{T.target.style.transform="scale(1) translateX(0)"},children:"‹"}),i.jsx("button",{className:"video-nav-btn",onClick:ne,disabled:x===D.length-1,onMouseEnter:T=>{T.target.disabled||(T.target.style.transform="scale(1.2) translateX(5px)")},onMouseLeave:T=>{T.target.style.transform="scale(1) translateX(0)"},children:"›"})]}),i.jsx("button",{className:"video-close-btn",onClick:V,onMouseEnter:T=>{T.target.style.transform="scale(1.2) rotate(90deg)",T.target.style.background="rgba(255, 100, 100, 0.4)"},onMouseLeave:T=>{T.target.style.transform="scale(1) rotate(0deg)",T.target.style.background="rgba(255, 255, 255, 0.2)"},children:"×"}),i.jsxs("div",{className:"video-info",children:[i.jsx("h3",{className:"video-title",children:D[x].title}),i.jsxs("div",{className:"video-counter",children:[x+1," / ",D.length]})]}),i.jsxs("div",{className:"scroll-progress",onClick:()=>{V(),setTimeout(()=>ae(),300)},children:[i.jsx("span",{children:"Scroll down or click to continue"}),i.jsx("span",{className:"scroll-arrow-down",children:"↓"})]})]})})]})},$y="/pavan-techno-constructions/assets/Blog-Covers-Press-Release-BIx1EJvd.png",Jy="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAQID/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAwUGAv/aAAwDAQACEAMQAAAB6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIR4sTdVmsw7S5lYpxWc89sagAAAAAAAABzR0vW1Po7E5itOnqvQdS862BFPda/P0+PvZcMEwAAAAarSEwROMFptJqyXqgmZLKe2G3xXovmSeT47ta6WwctO/8AdHobOjnTW6UliAxouNqqvLlVbpS7HgoeHXjCiIQ7rfJKJjfTeIciznoXw5ayuotecy9FbTbnH8yvr9jnLX9P18UHNOkcAoiJdW4xW0Zvr5OSJB0tghnjNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAnEAACAwEAAAUDBQEAAAAAAAAEBQIDBgEABxITFRZAcBQhIzAxMv/aAAgBAQABBQL81aDTVJOBaZlZ4N33aTSdOZdFHseHkfaOP5dhDnOQ0tVcdENHkB9HHlWqh/z9npMzBraINovQ5HkG7q+pvQVm2xjOH7R+z0yArh1WsZThRkemBVvmCusRSe9cc/rYtBVA4uvTmWMdWpUkbPR3LFM3IVRxeuUAmanX+yrYadYolmtHa1cfXCL1m6pQuqovrJqZahUpvufLxw5uwazLdwip58kN+jWapU4uYbRQLDK7kcpAuaCtx22pJXaLJa6lhmXe6qsu5/nmB7VLxkYoN3aAlOBcRXdHE5HvFrjKlJAVtfYdxyu5Yv1YHIFAsD8v3COawq12UO4xz4kLqHi6sFPifL+Pw7XGHZsZdwYmGMekKD2mXBHIKDXriMT5cM+MFziuNuzkPGvJaU1CU1DcBml6dSezpS4s75opQGbZaCPdXaFRfbenCJv+LE5WWqEP7QCOL34Jf670wJPIQjXEtSGfKS4acCAqSO5rGVLV/sV+0IpDBnWHRV4mpDsHGEpDqkFRK3gNHB6kYFHioKii78w//8QAKxEAAQMBBQUJAAAAAAAAAAAAAQIDBAAFERMhMQYSMEFRFSI0UGCBwdHw/9oACAEDAQE/AfOI8d2U4GmReTSbFmuLLaE3kdCK7Kl4Zc3dNc8x7cOwpbcSQrFyCkkX9K2ejhiU4A6D3TpVlNohPuOOvJuKTzo68KHMXCdxEZ/NKtPc8KgN9bv2lJtMNBRZaCVK5/XpX//EACARAAIBAwQDAAAAAAAAAAAAAAECEQADBBITITAyUGD/2gAIAQIBAT8B9wzBBLUci2BJrfSY68lC6iKym1IOKvk3FACnruILgg0LM+ZmtmY1Hj5X/8QANxAAAgECBAQEBQIDCQAAAAAAAgMBAAQFERITFCExQTJRUmEVIiNCcQZAEDBwMzRTYnKBkaHR/9oACAEBAAY/Av61QEDuvn7KhjcNLYn7h7VK1JE0ervWuwsCcv8AxJrh7pew7pHv+1YLOY7sRz8sqiI6U6AiNMlGdLiIyjKj0xp+cZ5VH7SHIaKrqPP7qFLGIWEctzrNNVuS0xKJ1F3mhyi3yy86i5uNjXMxM/UqP2nxCxkiLqQx51Cow45f0zy5U9l5lxzvm1emti5w9rjHlDF9JrjbsCQmJ5DP8yX3bxQr1FSVpv1Gx3IA7zUIur1am+nyq1usOcE7rhHXlBRMTNBZHcBF2cZwrvXCvv1LfHUfKrG5wi6BkMvwtjKIz5TE5xz/ABSwvbxaWFHhmsZA3gy0tz+lMRHT80wfiSc19aQy4vVrB8alz6o86Fqig1lGcFHeoTd3i1N9NLu2XSxtmchb2mlWs3IcQ0dYL7zHnWZYknrI/wDFcVvhw+We5nyqVWl6tzI+2KeHHrh4Zjl5FR3eJ3q4YtkiU5Zfit+zeL1eoaxK3J4rtUWsMHMY5FlQ319eL3A5OLppmsLHCL1bIdcwtsRGfy/7/wAMGuMQCTwoJ+pyziJ96wQ8Ige8GaxyGeXKsbDH9A38tKZ3x8QdsqjTBLQV/E20M7DnV/b4rn8ddnIvPwsHtprEEY6IDiu6e/vjnJf6astvkv44GmPbIqxf49Ai85zSdxGYyHtX6t+DAUKKfkEY56faoUuF8ZCojRp+pB986wi7i9SrEFWX93uQkgYH/tWb4t+F1B/ZR0isY42/tLG5Js5xeoktUf5Z8qvZubsMSs7kylK1rkPmnsMT70+3xZZLxG4TE2zGznmv0x71iQ4pCouN9mrdHPUPtVqTFv8AhPG6jX92zWCxgGgrwWZ6rccsg96/VjGqBhw4ozKParbiLsMPfxhSppDmMlHq9quR4dK5U3TLLeMgZ71jInEFHARyn8V+mnsVM4bDym8246+mZ/7rAfhW1L4uR1Eoco0+9PtEug7i35MD00HAXIKIeq2jmB1b4jijUZ20fSTbDkP5qGPtltOO5DQrNIEA9BmOlAxihMw8JTHOK3m2yzb6pGtvh16ILXp09/Ohm4t1tkemqKKVJBcl10x1oz4NOo+s6etBDbVRwHhzHpUCMaRjpEVBXFstpR3IaWMoCRX4Yy6UJGoSMPCUx0pib5Sblk3BtEss8omtvRG3llpy5VJW9stRT3EaZoUI7njyjxVsFbLlOeejTyrbQsVB5DFEyVDLCjTJZdYrYhIbPoy5VG3aKHKdUZD3pjVqEGM8RRHX+sX/xAAmEAEAAgIBAwQBBQAAAAAAAAABABEhMVFBYXFAgaHBcDCRsdHh/9oACAEBAAE/IfzVWJtgarzDXmbrjmoHNJmvliDaFunD4JTK7swuPMPSWdqH4UQVABgJjbHGrdw4wkAJW1s8MoTPxnpNiaxez3jy6WvjnMgEocEqoplUYDB2godvR3M+gGsg6ko6bbLSgc9efpARloLiCO5w2jRUFH6Zwti2I8BEtp0qogP5u2+VahVSjZBNze9BlkSbAK/ulamLzY4HZmHlc22+aJU0acDxb95Q0LLq0VvNRdm1X8DWSWOVLYIyAF3tQ5a1H8kWrZ7kwz+DfhukNiGorSqbx0ufSv8A5g9qu5FOS9w1a/1SNOJrm4PFxoOsOozVvWbQzXnlV7liqqwPQKDjiCYTyrDwxrZMw9pYhHBcuCILpc7bcC0hJP2q0cMTwPdvsONQxwi36CdpdwaFWuHDUaS5U2YnxGItYynbAu4iwuqm5X/AFT9SuZmJz45satf+QgADBXg7S4CnNLuwPZLlZAiEEreusRzcOpFYawqswOvgjwg31rfxAXMpQxcYZUoRotqZcgb1ABBnT0vbhiUTiLJ8dLmBQ2FQH6IEVcYbuvmVq8ENqfda3yVz0FPLGjXJFiMmHEx9eWgGBy7plgKCq6KPumyys2puNDp909uBYFwtAsOCCXBQKCa6GCWZI9Oa8YHbndeM3RwJAQ+Ip8KJ4m3Y5hirTd4Fu863mAy5hIJ1WJZ/msuCVeNf684u+OOUzBKrnz/MX//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888887178888888888/zq288888wg4MDsIQ0EgMA8UQAsI4cA4sc888888888888888888888888888888888888888888888888888888888888888888//EACARAQEAAgICAgMAAAAAAAAAAAERITEAQTBhUGBxsfD/2gAIAQMBAT8Q+YUD0j+wcIkStATpRw+t8SOE1AQ9hp41laBWmR/GOOY3ZUlMrIfvjZYMLVdY5s8UtlCIlA7HmZcUUlWNDOq674ACkc3DuFhfqv8A/8QAIhEBAAECBAcAAAAAAAAAAAAAAREAMSEwQVFQYHGBwdHw/9oACAECAQE/EOMPGgoQkHRoUzvbDB75d3qIxvTy2El6kTBNKMtN5F+vSmFRp735V//EACUQAQEAAgMAAgEDBQAAAAAAAAERACExQVFhcYFAcJEQIKGx8P/aAAgBAQABPxD96ugE2TpWBacVRvpyTzCcqxuXL4ZA26Ua99zjm4KI7kOzCp+kOuBYAFD6t/nAChAakwEj2uIJk/8AuYCHBkTBAHKV+9/5xKna/wCr9IX5AiEdpsHswFKEMDrQG2ezBKGXKES/kMCexCkZNd4XdCRqBI8M9fCafj9Csy3EZXAMeYEOxDjGguD6BXWEtAtqewP2FzRYFtGhcdkjSvC+PXBINAQ/suX+lymUwbj07qMXwDa/WR8vSVXoIezCIyJYnuTH36ZE4SYwBCbHnnCIJC+ggIflMbRQLlvAgQftwZPexytA3S344KSCiKVQMMDOZI/dQETtOaXabkJGhjrWXWQUilAUDkZzgmvXi8I5VMivjgMfeG1GD4wQZv2YR4lVIWIQgdqYrUtpCRFAhV/GC894bhtxzD2QbQAh+MQ7LWzMa4Yb1jPagIwlhdpD7x/hLCA5EYjhCaNGwFoh6KmGeWasVgF1YMp7yab4pSMFW5QuG0d1ea6STGwVo1pKAOUOw6x4URh8lV46bx5lprGw1VR3oDrA+9sZkLhLXZv8YUgs4hZVRJO98JjcChZpN+SMWcwfkwqDXX2HyomHSmeFSw5wNpT4AFxNGqzjAKRFEPFHM0GpOlSW+C5dau65Lhu8c26I1HB+GLsWRr2rSJRNHr2IfTcJJCL4L4dqrctHwFUbsoo/WjSmJqlA7R8DIBj8Hokal07O8agvFJZXG1zfdIpFENileFMdhi8d94Ot/fWIdwTImmnA1m1VUiLAK9a7MvZ8mlBoK0nOsKRUP+BUB/C5aPWAToLwmdeNLXK0bRf+MbgxOc43gPjDLHCHUzgA07tvoZNX81iQrN4YmAoUQB4rv5x4zCuz4ucAxK/ic5ye5q/q6wooHKXHwfGE4lKA4AyC9Ziny48SNtfo4MP4wYunbk6xNWgGxAlpivvzQ4JOkxAkKwq12Y6MDHRa+3bm0MCoHyDp+cSbtEN9hkUkGskt7J1idjFEaLU6c4UIAgEOAznE8iCFna7/AHi//9k=",e5="/pavan-techno-constructions/assets/9nz0z6Ct4l23c27NzViK-jIEjcN3Y.png",t5="/pavan-techno-constructions/assets/24745175-D-scNrQe.jpg",a5="/pavan-techno-constructions/assets/download-Dm7BOQmU.png",Uc=()=>{const[r,s]=v.useState(!1),[u,c]=v.useState({x:0,y:0}),[d,f]=v.useState(null),g=v.useRef(null),x=v.useRef(null),b=v.useRef(null),p=v.useRef(null),y=v.useRef(null),A=v.useRef([]),E=()=>{console.log("Opening popup...")},k=[{name:"SHAHI EXPORTS PVT LTD",image:$y,fallbackPaths:["/assets/Blog-Covers-Press-Release.png","../assets/Blog-Covers-Press-Release.png","./assets/Blog-Covers-Press-Release.png","/src/assets/Blog-Covers-Press-Release.png"]},{name:"GOKALDAS EXPORTS LTD",image:Jy,fallbackPaths:["/assets/1630570806167.jpeg","../assets/1630570806167.jpeg","./assets/1630570806167.jpeg","/src/assets/1630570806167.jpeg"]},{name:"MES",image:e5,fallbackPaths:["/assets/9nz0z6Ct4l23c27NzViK.png","../assets/9nz0z6Ct4l23c27NzViK.png","./assets/9nz0z6Ct4l23c27NzViK.png","/src/assets/9nz0z6Ct4l23c27NzViK.png"]},{name:"ARK BUILDERS",image:t5,fallbackPaths:["/assets/24745175.jpg","../assets/24745175.jpg","./assets/24745175.jpg","/src/assets/24745175.jpg"]},{name:"TAAPASI PROJECTS",image:a5,fallbackPaths:["/assets/download.png","../assets/download.png","./assets/download.png","/src/assets/download.png"]}];v.useEffect(()=>{const O=new IntersectionObserver(L=>{L.forEach(S=>{S.isIntersecting&&!r&&(s(!0),S.target.classList.add("section-visible"),setTimeout(()=>{var W;return(W=x.current)==null?void 0:W.classList.add("animate")},100),setTimeout(()=>{var W;return(W=b.current)==null?void 0:W.classList.add("animate")},400),setTimeout(()=>{var W;return(W=p.current)==null?void 0:W.classList.add("animate")},800),setTimeout(()=>{var W;return(W=y.current)==null?void 0:W.classList.add("animate")},1200),setTimeout(()=>{A.current.forEach((W,K)=>{setTimeout(()=>W==null?void 0:W.classList.add("animate"),K*100)})},1600))})},{threshold:.2});return g.current&&O.observe(g.current),()=>O.disconnect()},[r]),v.useEffect(()=>{const O=L=>{if(g.current){const S=g.current.getBoundingClientRect(),W=(L.clientX-S.left)/S.width,K=(L.clientY-S.top)/S.height;c({x:W,y:K})}};return document.addEventListener("mousemove",O),()=>document.removeEventListener("mousemove",O)},[]);const M=(O,L)=>{f(L?O:null);const S=A.current[O];S&&(L?(S.style.transform="translateY(-20px) scale(1.05) rotateX(5deg) rotateY(5deg)",S.style.zIndex="100"):(S.style.transform="translateY(0) scale(1) rotateX(0deg) rotateY(0deg)",S.style.zIndex="10"))},G=[{icon:"🎯",title:"Modern Design",desc:"Contemporary architectural solutions",color:"#FF6B6B"},{icon:"⚡",title:"Fast Construction",desc:"On-time project delivery",color:"#4ECDC4"},{icon:"💎",title:"Premium Quality",desc:"Best materials & craftsmanship",color:"#45B7D1"},{icon:"🏛️",title:"Innovative Designs",desc:"Creative & functional spaces",color:"#96CEB4"},{icon:"👷",title:"Expert Team",desc:"15+ years of experience",color:"#FFEAA7"},{icon:"🔧",title:"Skilled Workers",desc:"Certified professionals",color:"#DDA0DD"},{icon:"✅",title:"Quality Assurance",desc:"Premium standards",color:"#98D8C8"},{icon:"🔄",title:"Complete Service",desc:"End-to-end solutions",color:"#F7DC6F"}];return v.useEffect(()=>{if(x.current){x.current.classList.add("animate");const O=x.current.querySelector(".client-logos-scroll-container");if(O){O.style.overflow="hidden";const L=O.querySelector(".client-logos-scroll");L&&(L.style.animation="none",L.offsetHeight,L.style.animation="scrollLogosRightToLeft 40s linear infinite")}}},[r]),i.jsxs("section",{id:"about",className:"about-section",ref:g,children:[i.jsxs("div",{className:"dynamic-background",children:[i.jsx("div",{className:"morph-shape shape-1",style:{transform:`translate(${u.x*30}px, ${u.y*20}px) rotate(${u.x*360}deg)`}}),i.jsx("div",{className:"morph-shape shape-2",style:{transform:`translate(${u.x*-40}px, ${u.y*30}px) rotate(${u.y*-360}deg)`}}),i.jsx("div",{className:"morph-shape shape-3",style:{transform:`translate(${u.x*50}px, ${u.y*-25}px) rotate(${(u.x+u.y)*180}deg)`}})]}),i.jsx("div",{className:"particles-system",children:Array.from({length:25},(O,L)=>i.jsx("div",{className:"floating-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*6}s`}},L))}),i.jsx("div",{className:"client-logos-section",ref:x,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"client-logos-header",children:[i.jsx("h2",{className:"client-logos-title",children:"PTC CLIENT LOGOS"}),i.jsx("div",{className:"client-logos-subtitle",children:"Trusted by Industry Leaders"})]}),i.jsx("div",{className:"client-logos-scroll-container",children:i.jsxs("div",{className:"client-logos-scroll",children:[k.map((O,L)=>i.jsxs("div",{className:"client-box",children:[i.jsx("div",{className:"client-logo-container",style:{width:"220px",height:"220px",margin:"0 30px"},children:i.jsx("img",{src:O.image,alt:O.name,className:"client-logo-image",style:{maxWidth:"160px",maxHeight:"160px"},onError:S=>{const W=O.fallbackPaths;let K=!1;for(const Z of W)if(!S.target.src.includes(Z.replace("./","").replace("/public",""))){S.target.src=Z,K=!0;break}K||(S.target.style.display="none",S.target.parentElement.innerHTML=`
                            <div class="logo-placeholder" style="height: 160px; width: 160px;">
                              <div class="placeholder-text">${O.name}</div>
                            </div>
                          `)}})}),i.jsx("div",{className:"client-name",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",textAlign:"center",marginTop:"15px",transition:"all 0.3s ease"},children:O.name})]},`first-${L}`)),k.map((O,L)=>i.jsxs("div",{className:"client-box",children:[i.jsx("div",{className:"client-logo-container",style:{width:"220px",height:"220px",margin:"0 30px"},children:i.jsx("img",{src:O.image,alt:O.name,className:"client-logo-image",style:{maxWidth:"160px",maxHeight:"160px"},onError:S=>{const W=O.fallbackPaths;let K=!1;for(const Z of W)if(!S.target.src.includes(Z.replace("./","").replace("/public",""))){S.target.src=Z,K=!0;break}K||(S.target.style.display="none",S.target.parentElement.innerHTML=`
                            <div class="logo-placeholder" style="height: 160px; width: 160px;">
                              <div class="placeholder-text">${O.name}</div>
                            </div>
                          `)}})}),i.jsx("div",{className:"client-name",style:{fontSize:"1.1rem",fontWeight:"600",color:"#1e293b",textAlign:"center",marginTop:"15px",transition:"all 0.3s ease"},children:O.name})]},`second-${L}`))]})})]})}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"split-layout",children:[i.jsxs("div",{className:"left-panel",children:[i.jsxs("div",{className:"title-section",ref:b,children:[i.jsxs("div",{className:"title-decoration",children:[i.jsx("span",{className:"deco-line"}),i.jsx("span",{className:"deco-circle"}),i.jsx("span",{className:"deco-line"})]}),i.jsxs("h2",{className:"section-title",children:[i.jsx("span",{className:"title-word word-1",children:"Why"}),i.jsx("span",{className:"title-word word-2",children:"Choose"}),i.jsx("span",{className:"title-word word-3",children:"Us"})]}),i.jsx("div",{className:"title-subtitle",children:"Excellence Redefined"})]}),i.jsx("div",{className:"image-container",ref:p,children:i.jsxs("div",{className:"image-frame",children:[i.jsx("div",{className:"image-overlay",children:i.jsxs("div",{className:"overlay-content",children:[i.jsx("div",{className:"overlay-icon",children:"🏗️"}),i.jsxs("div",{className:"overlay-text",children:[i.jsx("span",{className:"overlay-number",children:"500+"}),i.jsx("span",{className:"overlay-label",children:"Projects"})]})]})}),i.jsx("img",{src:"/pavan-techno-constructions/images/whyy.jpg",alt:"Construction Excellence",onError:O=>{const L=["/pavan-techno-constructions/assets/whyy.jpg","/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg"];let S=!1;for(const W of L)if(!O.target.src.includes(W.replace("/pavan-techno-constructions/",""))){console.log(`Image failed to load, trying: ${W}`),O.target.src=W,S=!0;break}S||(console.log("All image paths failed, using text placeholder"),O.target.style.display="none",O.target.parentElement.innerHTML+=`
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
                      `)}})]})})]}),i.jsxs("div",{className:"right-panel",ref:y,children:[i.jsx("div",{className:"content-intro",children:i.jsx("p",{className:"intro-text",children:"We specialize in transforming architectural dreams into stunning reality through innovative design, precision engineering, and uncompromising quality standards."})}),i.jsxs("div",{className:"feature-cards-container",children:[i.jsx("h3",{className:"cards-title",children:"Our Excellence Pillars"}),i.jsx("div",{className:"feature-cards-grid",children:G.map((O,L)=>i.jsxs("div",{className:"feature-card",ref:S=>A.current[L]=S,onMouseEnter:()=>M(L,!0),onMouseLeave:()=>M(L,!1),style:{"--card-color":O.color,"--hover-intensity":d===L?1:0},children:[i.jsx("div",{className:"card-glow"}),i.jsxs("div",{className:"card-content",children:[i.jsx("div",{className:"card-icon",children:O.icon}),i.jsxs("div",{className:"card-text",children:[i.jsx("div",{className:"card-title",children:O.title}),i.jsx("div",{className:"card-desc",children:O.desc})]})]}),i.jsx("div",{className:"card-shine"})]},L))})]}),i.jsxs("div",{className:"cta-section",children:[i.jsxs("button",{className:"cta-button",onClick:E,onMouseEnter:O=>{O.target.style.transform="translateY(-8px) scale(1.05) rotateX(15deg)",O.target.style.boxShadow="0 30px 60px rgba(183, 156, 92, 0.4)"},onMouseLeave:O=>{O.target.style.transform="translateY(0) scale(1) rotateX(0deg)",O.target.style.boxShadow="0 15px 35px rgba(183, 156, 92, 0.2)"},children:[i.jsx("span",{className:"btn-background"}),i.jsxs("span",{className:"btn-text",children:[i.jsx("span",{className:"btn-icon",children:"🚀"}),"Start Your Project"]}),i.jsx("span",{className:"btn-particles",children:Array.from({length:6},(O,L)=>i.jsx("span",{className:"btn-particle"},L))})]}),i.jsx("div",{className:"cta-subtitle",children:"Free consultation & personalized quote"})]})]})]})})]})},pp=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState({title:!1,subtitle:!1,images:!1,features:!1,button:!1}),f=v.useRef(null);v.useEffect(()=>{const D=new IntersectionObserver(([de])=>{de.isIntersecting&&(u(!0),setTimeout(()=>d(Q=>({...Q,title:!0})),200),setTimeout(()=>d(Q=>({...Q,subtitle:!0})),1400),setTimeout(()=>d(Q=>({...Q,images:!0})),1800),setTimeout(()=>d(Q=>({...Q,features:!0})),2100),setTimeout(()=>d(Q=>({...Q,button:!0})),2400))},{threshold:.1});return f.current&&D.observe(f.current),()=>{f.current&&D.unobserve(f.current)}},[]);const g={"--primary-color":"#2c3e50","--secondary-color":"#f8f9fa","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},x=`
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
  `;v.useEffect(()=>{const D=document.createElement("style");return D.textContent=x,()=>{document.head.contains(D)&&document.head.removeChild(D)}},[]);const b={...g,backgroundColor:"var(--secondary-color)",padding:"5rem 0",position:"relative",overflow:"hidden",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",backgroundSize:"400% 400%"},p=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"-5%",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",animation:"float 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"-3%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",animation:"float 10s ease-in-out infinite reverse",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"800px",background:"radial-gradient(circle, rgba(183, 156, 92, 0.05) 0%, transparent 70%)",borderRadius:"50%",animation:"float 12s ease-in-out infinite",zIndex:1}})]}),y={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},A={textAlign:"center",marginBottom:"3rem",perspective:"1000px"},E={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},k=D=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+D*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),M=D=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #B79C5C, #34495e, #2c3e50)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+D*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),G={fontSize:"1.2rem",color:"var(--text-color)",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",opacity:c.subtitle?1:0,animation:c.subtitle?"fadeInDelay 1s forwards":"none"},O={display:"flex",gap:"2rem",marginTop:"3rem",marginBottom:"3rem"},L=D=>({flex:1,position:"relative",borderRadius:"var(--border-radius)",overflow:"hidden",boxShadow:"0 15px 35px var(--shadow-color)",transform:c.images?"translateY(0) scale(1) rotateY(0deg)":"translateY(60px) scale(0.8) rotateY(15deg)",opacity:c.images?1:0,animation:c.images?`imageReveal 1s forwards ${D*.2}s`:"none",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer"}),S={width:"100%",height:"300px",objectFit:"cover",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.9) contrast(1.1)"},W={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, rgba(183, 156, 92, 0.2), rgba(44, 62, 80, 0.2))",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.2rem",fontWeight:"600",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},K={marginTop:"3rem",display:"grid",gap:"1.5rem"},Z=D=>({display:"flex",alignItems:"flex-start",background:"var(--light-color)",padding:"1.5rem",borderRadius:"var(--border-radius)",boxShadow:"0 8px 25px var(--shadow-color)",border:"1px solid rgba(183, 156, 92, 0.1)",transform:c.features?"translateX(0) rotateZ(0deg)":"translateX(-50px) rotateZ(-5deg)",opacity:c.features?1:0,animation:c.features?`featureSlideIn 0.6s forwards ${D*.1}s`:"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",position:"relative",overflow:"hidden"}),ge={width:"50px",height:"50px",borderRadius:"50%",background:"linear-gradient(135deg, var(--primary-color), var(--accent-color))",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1rem",flexShrink:0,color:"white",fontSize:"1.2rem",transition:"all 0.3s ease",position:"relative",zIndex:2},_={display:"inline-block",background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",color:"white",fontSize:"1.2rem",fontWeight:"600",padding:"1rem 3rem",borderRadius:"50px",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",transform:c.button?"scale(1) rotateZ(0deg)":"scale(0.8) rotateZ(-5deg)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s forwards":"none",boxShadow:"0 10px 25px rgba(183, 156, 92, 0.3)",zIndex:2},ie=[{icon:"🏗️",title:"Superior Quality Construction",desc:"Only the best raw materials used for lasting durability"},{icon:"📐",title:"Perfect Planning & Execution",desc:"Designed by a highly qualified architectural team"},{icon:"⏰",title:"On-Time Delivery",desc:"Because we value your time and commitments"},{icon:"💰",title:"Affordable Innovation",desc:"Stylish homes at unbeatable market prices"},{icon:"⭐",title:"Customer Satisfaction Guaranteed",desc:"We build homes that match your dreams perfectly"}];return i.jsxs("section",{ref:f,style:b,children:[p,i.jsxs("div",{style:y,children:[i.jsxs("div",{style:A,children:[i.jsxs("h2",{style:E,children:[i.jsx("span",{style:M(0),children:"Exceptional"}),i.jsx("span",{style:k(1),children:"Deal"}),i.jsx("span",{style:k(2),children:"For"}),i.jsx("span",{style:k(3),children:"Your"}),i.jsx("span",{style:M(4),children:"Dream"}),i.jsx("span",{style:k(5),children:"Home"})]}),i.jsx("p",{style:G,children:"Discover unparalleled value with Pavan Techno Constructions. We deliver premium quality homes that combine architectural excellence with modern innovation, all at prices that redefine market standards."})]}),i.jsxs("div",{style:O,children:[i.jsxs("div",{style:L(0),onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(-5deg)",D.currentTarget.style.animation="morphBorder 2s ease-in-out infinite";const de=D.currentTarget.querySelector("img"),Q=D.currentTarget.querySelector(".image-overlay");de&&(de.style.transform="scale(1.1) rotate(2deg)"),Q&&(Q.style.opacity="1")},onMouseLeave:D=>{D.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",D.currentTarget.style.animation="none";const de=D.currentTarget.querySelector("img"),Q=D.currentTarget.querySelector(".image-overlay");de&&(de.style.transform="scale(1) rotate(0deg)"),Q&&(Q.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Modern House Exterior",style:S}),i.jsx("div",{className:"image-overlay",style:W,children:"Stunning Exteriors"})]}),i.jsxs("div",{style:L(1),onMouseEnter:D=>{D.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(5deg)",D.currentTarget.style.animation="morphBorder 2s ease-in-out infinite reverse";const de=D.currentTarget.querySelector("img"),Q=D.currentTarget.querySelector(".image-overlay");de&&(de.style.transform="scale(1.1) rotate(-2deg)"),Q&&(Q.style.opacity="1")},onMouseLeave:D=>{D.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",D.currentTarget.style.animation="none";const de=D.currentTarget.querySelector("img"),Q=D.currentTarget.querySelector(".image-overlay");de&&(de.style.transform="scale(1) rotate(0deg)"),Q&&(Q.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Luxurious Interior",style:S}),i.jsx("div",{className:"image-overlay",style:W,children:"Elegant Interiors"})]})]}),i.jsx("div",{style:K,children:ie.map((D,de)=>i.jsxs("div",{style:Z(de),onMouseEnter:Q=>{Q.currentTarget.style.transform="translateX(10px) scale(1.02) rotateZ(1deg)",Q.currentTarget.style.boxShadow="0 15px 40px rgba(183, 156, 92, 0.2)",Q.currentTarget.style.background="linear-gradient(135deg, #ffffff, #f8f9fa)";const le=Q.currentTarget.querySelector(".feature-icon");le&&(le.style.transform="scale(1.1) rotateY(180deg)",le.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))")},onMouseLeave:Q=>{Q.currentTarget.style.transform="translateX(0) scale(1) rotateZ(0deg)",Q.currentTarget.style.boxShadow="0 8px 25px var(--shadow-color)",Q.currentTarget.style.background="var(--light-color)";const le=Q.currentTarget.querySelector(".feature-icon");le&&(le.style.transform="scale(1) rotateY(0deg)",le.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))")},children:[i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.1), transparent)",transition:"left 0.5s ease"}}),i.jsx("div",{className:"feature-icon",style:ge,children:D.icon}),i.jsxs("div",{style:{flex:1,zIndex:2},children:[i.jsx("h4",{style:{color:"var(--primary-color)",fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",transition:"all 0.3s ease"},children:D.title}),i.jsx("p",{style:{color:"var(--text-color)",fontSize:"0.95rem",lineHeight:"1.6",margin:0,transition:"all 0.3s ease"},children:D.desc})]})]},de))}),i.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:i.jsxs("button",{style:_,onClick:r,onMouseEnter:D=>{D.currentTarget.style.transform="scale(1.05) rotateZ(2deg)",D.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.4)",D.currentTarget.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))"},onMouseLeave:D=>{D.currentTarget.style.transform="scale(1) rotateZ(0deg)",D.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.3)",D.currentTarget.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))"},children:[i.jsx("span",{style:{position:"relative",zIndex:2},children:"Claim Your Deal Today"}),i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",transition:"left 0.5s ease"}})]})})]})]})},_c=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState({title:!1,text:!1,image:!1,button:!1,stats:!1}),f=v.useRef(null);v.useEffect(()=>{const _=new IntersectionObserver(([ie])=>{ie.isIntersecting&&(u(!0),setTimeout(()=>d(D=>({...D,title:!0})),300),setTimeout(()=>d(D=>({...D,text:!0})),700),setTimeout(()=>d(D=>({...D,image:!0})),1e3),setTimeout(()=>d(D=>({...D,stats:!0})),1300),setTimeout(()=>d(D=>({...D,button:!0})),1600))},{threshold:.1});return f.current&&_.observe(f.current),()=>{f.current&&_.unobserve(f.current)}},[]);const g=`
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
  `;v.useEffect(()=>{const _=document.createElement("style");return _.textContent=g,document.head.appendChild(_),()=>{document.head.contains(_)&&document.head.removeChild(_)}},[]);const x={background:"linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",padding:"clamp(2rem, 5vw, 5rem) 0",position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},b=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"clamp(100px, 15vw, 200px)",height:"clamp(100px, 15vw, 200px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(183, 156, 92, 0.05))",animation:"float 8s ease-in-out infinite",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"clamp(80px, 12vw, 150px)",height:"clamp(80px, 12vw, 150px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",animation:"float 10s ease-in-out infinite reverse",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"10%",width:"clamp(30px, 6vw, 60px)",height:"clamp(30px, 6vw, 60px)",background:"linear-gradient(45deg, #B79C5C, #8B7355)",transform:"rotate(45deg)",opacity:.3,animation:"geometricRotate 20s linear infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"25%",right:"15%",width:"clamp(40px, 8vw, 80px)",height:"clamp(40px, 8vw, 80px)",background:"linear-gradient(45deg, #3b82f6, #1d4ed8)",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",opacity:.3,animation:"float 12s ease-in-out infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),[...Array(window.innerWidth<768?3:6)].map((_,ie)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,width:"3px",height:"3px",background:"#B79C5C",borderRadius:"50%",animation:`particleFloat ${15+Math.random()*10}s linear infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1}},ie))]}),p={maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(1rem, 4vw, 2rem)",position:"relative",zIndex:2,display:"flex",alignItems:"center",minHeight:"clamp(60vh, 80vh, 90vh)",width:"100%"},y={display:"flex",flexDirection:window.innerWidth<1024?"column":"row",alignItems:"center",gap:"clamp(2rem, 4vw, 4rem)",width:"100%"},A={flex:window.innerWidth<1024?"1":"1 1 55%",position:"relative",width:"100%",order:(window.innerWidth<1024,1)},E={flex:window.innerWidth<1024?"1":"1 1 45%",position:"relative",width:"100%",maxWidth:window.innerWidth<1024?"400px":"none",order:(window.innerWidth<1024,2),margin:window.innerWidth<1024?"2rem auto":"0"},k={fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 clamp(1rem, 3vw, 2rem) 0",perspective:"1000px",position:"relative",textAlign:window.innerWidth<768?"center":"left"},M=_=>({display:"inline-block",marginRight:window.innerWidth<768?"10px":"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) scale(1)":"translateY(50px) scale(0.8)",background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 50%, #B79C5C 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+_*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),G={position:"absolute",left:window.innerWidth<768?"50%":"-20px",top:"50%",transform:window.innerWidth<768?"translate(-50%, -50%)":"translateY(-50%)",width:window.innerWidth<768?"80%":"6px",height:window.innerWidth<768?"4px":"80%",background:"linear-gradient(135deg, #B79C5C, #3b82f6)",borderRadius:"3px",animation:c.title?"borderGlow 2s ease-in-out infinite":"none",display:window.innerWidth<480?"none":"block"},O={fontSize:"clamp(1rem, 2.5vw, 1.1rem)",lineHeight:"1.8",color:"#e5e7eb",marginBottom:"clamp(1rem, 2vw, 1.5rem)",transform:c.text?"translateX(0)":"translateX(-30px)",opacity:c.text?1:0,transition:"all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",position:"relative",paddingLeft:window.innerWidth<768?"0.5rem":"1rem",borderLeft:window.innerWidth<768?"2px solid #B79C5C":"2px solid transparent",borderImage:window.innerWidth>=768?"linear-gradient(135deg, #B79C5C, #3b82f6) 1":"none",textAlign:(window.innerWidth<768,"left")},L={display:"grid",gridTemplateColumns:window.innerWidth<768?"repeat(auto-fit, minmax(120px, 1fr))":"repeat(3, 1fr)",gap:"clamp(1rem, 3vw, 2rem)",margin:"clamp(1.5rem, 3vw, 2rem) 0",transform:c.stats?"translateY(0) scale(1)":"translateY(20px) scale(0.8)",opacity:c.stats?1:0,animation:c.stats?"statsCounter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none"},S={textAlign:"center",padding:"clamp(0.8rem, 2vw, 1rem)",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(59, 130, 246, 0.1))",borderRadius:"clamp(8px, 2vw, 12px)",border:"1px solid rgba(183, 156, 92, 0.3)",backdropFilter:"blur(10px)",transition:"all 0.3s ease"},W={position:"relative",transform:c.image?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",opacity:c.image?1:0,animation:c.image?"imageReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",borderRadius:"clamp(12px, 3vw, 20px)",overflow:"hidden",width:"100%"},K={width:"100%",height:"clamp(300px, 40vw, 500px)",objectFit:"cover",borderRadius:"clamp(12px, 3vw, 20px)",transition:"all 0.5s ease",filter:"brightness(0.9) contrast(1.1) saturate(1.1)"},Z={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(183, 156, 92, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",borderRadius:"clamp(12px, 3vw, 20px)",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"clamp(1.2rem, 3vw, 1.5rem)",fontWeight:"600",textShadow:"0 2px 10px rgba(0,0,0,0.7)",textAlign:"center",padding:"1rem"},ge={background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)",color:"white",fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"600",padding:"clamp(0.8rem 2rem, 2vw, 1rem 2.5rem)",borderRadius:"50px",border:"none",cursor:"pointer",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",marginTop:"clamp(1.5rem, 3vw, 2rem)",transform:c.button?"scale(1)":"scale(0.8)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",transition:"all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.3)",width:window.innerWidth<768?"100%":"auto",maxWidth:window.innerWidth<768?"300px":"none",margin:window.innerWidth<768?"clamp(1.5rem, 3vw, 2rem) auto 0 auto":"clamp(1.5rem, 3vw, 2rem) 0 0 0"};return i.jsxs("section",{ref:f,style:x,children:[b,i.jsx("div",{style:p,children:i.jsx("div",{style:y,children:window.innerWidth<1024?i.jsxs("div",{style:A,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:G}),i.jsxs("h2",{style:k,children:[i.jsx("span",{style:M(0),children:"About"}),i.jsx("span",{style:M(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((_,ie)=>i.jsx("p",{style:{...O,transitionDelay:`${ie*.15}s`},onMouseEnter:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid #B79C5C",D.currentTarget.style.paddingLeft="1.5rem",D.currentTarget.style.color="#f3f4f6")},onMouseLeave:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid transparent",D.currentTarget.style.paddingLeft="1rem",D.currentTarget.style.color="#e5e7eb")},children:_},ie))}),i.jsx("div",{style:{...E,margin:"clamp(2rem, 4vw, 3rem) auto"},children:i.jsxs("div",{style:W,onMouseEnter:_=>{if(window.innerWidth>=768){_.currentTarget.style.transform="translateY(-10px) scale(1.02)";const ie=_.currentTarget.querySelector(".image-overlay"),D=_.currentTarget.querySelector("img");ie&&(ie.style.opacity="1"),D&&(D.style.transform="scale(1.05)")}},onMouseLeave:_=>{if(window.innerWidth>=768){_.currentTarget.style.transform="translateY(0) scale(1)";const ie=_.currentTarget.querySelector(".image-overlay"),D=_.currentTarget.querySelector("img");ie&&(ie.style.opacity="0"),D&&(D.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:K}),i.jsx("div",{className:"image-overlay",style:Z,children:"Excellence in Construction"})]})}),i.jsx("div",{style:{position:"relative"},children:["We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.","At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."].map((_,ie)=>i.jsx("p",{style:{...O,transitionDelay:`${(ie+2)*.15}s`},onMouseEnter:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid #B79C5C",D.currentTarget.style.paddingLeft="1.5rem",D.currentTarget.style.color="#f3f4f6")},onMouseLeave:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid transparent",D.currentTarget.style.paddingLeft="1rem",D.currentTarget.style.color="#e5e7eb")},children:_},ie+2))}),i.jsxs("div",{style:L,children:[i.jsxs("div",{style:S,onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-5px) scale(1.05)",_.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0) scale(1)",_.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:S,onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-5px) scale(1.05)",_.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0) scale(1)",_.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:S,onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-5px) scale(1.05)",_.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0) scale(1)",_.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:ge,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:_=>{_.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",_.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",_.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:_=>{_.currentTarget.style.transform="scale(1)",_.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",_.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:A,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:G}),i.jsxs("h2",{style:k,children:[i.jsx("span",{style:M(0),children:"About"}),i.jsx("span",{style:M(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((_,ie)=>i.jsx("p",{style:{...O,transitionDelay:`${ie*.15}s`},onMouseEnter:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid #B79C5C",D.currentTarget.style.paddingLeft="1.5rem",D.currentTarget.style.color="#f3f4f6")},onMouseLeave:D=>{window.innerWidth>=768&&(D.currentTarget.style.borderLeft="2px solid transparent",D.currentTarget.style.paddingLeft="1rem",D.currentTarget.style.color="#e5e7eb")},children:_},ie))}),i.jsxs("div",{style:L,children:[i.jsxs("div",{style:S,onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-5px) scale(1.05)",_.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0) scale(1)",_.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:S,onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-5px) scale(1.05)",_.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0) scale(1)",_.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:S,onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-5px) scale(1.05)",_.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0) scale(1)",_.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:ge,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:_=>{_.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",_.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",_.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:_=>{_.currentTarget.style.transform="scale(1)",_.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",_.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}),i.jsx("div",{style:E,children:i.jsxs("div",{style:W,onMouseEnter:_=>{if(window.innerWidth>=768){_.currentTarget.style.transform="translateY(-10px) scale(1.02)";const ie=_.currentTarget.querySelector(".image-overlay"),D=_.currentTarget.querySelector("img");ie&&(ie.style.opacity="1"),D&&(D.style.transform="scale(1.05)")}},onMouseLeave:_=>{if(window.innerWidth>=768){_.currentTarget.style.transform="translateY(0) scale(1)";const ie=_.currentTarget.querySelector(".image-overlay"),D=_.currentTarget.querySelector("img");ie&&(ie.style.opacity="0"),D&&(D.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:K}),i.jsx("div",{className:"image-overlay",style:Z,children:"Excellence in Construction"}),window.innerWidth>=768&&i.jsx("div",{style:{position:"absolute",top:"-10px",left:"-10px",right:"-10px",bottom:"-10px",border:"2px solid transparent",borderImage:"linear-gradient(135deg, #B79C5C, #3b82f6) 1",borderRadius:"25px",opacity:.5,animation:"borderGlow 3s ease-in-out infinite"}})]})})]})})})]})},gp=()=>{const r=v.useRef(null),[s,u]=v.useState([]),[c,d]=v.useState(!1),[f,g]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const _=()=>g(window.innerWidth);return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]),v.useEffect(()=>{const _=new IntersectionObserver(ie=>{ie.forEach(D=>{D.isIntersecting&&(D.target.classList.add("section-visible"),setTimeout(()=>d(!0),300),setTimeout(()=>{u(de=>[...Array(6).keys()])},1500))})},{threshold:.2});return r.current&&_.observe(r.current),()=>{r.current&&_.unobserve(r.current)}},[]);const x=[{title:"Residential Construction",icon:"🏠",description:"Premium home building with quality materials and expert craftsmanship for comfortable, durable living spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"},{title:"Commercial Projects",icon:"🏢",description:"Efficient construction of offices, retail spaces and industrial buildings with modern design and timely delivery.",gradient:"linear-gradient(135deg, #B79C5C 0%, #8B7355 100%)"},{title:"Property Renovation",icon:"🔨",description:"Complete property updates from minor repairs to major overhauls for both residential and commercial buildings.",gradient:"linear-gradient(135deg, #34495e 0%, #2c3e50 100%)"},{title:"Custom Design",icon:"📝",description:"Tailored architectural designs that perfectly balance aesthetics, functionality and client requirements.",gradient:"linear-gradient(135deg, #8B7355 0%, #B79C5C 100%)"},{title:"Interior Solutions",icon:"🎨",description:"Full-service interior design from concept to installation for beautiful, functional living and working spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #B79C5C 100%)"},{title:"Project Management",icon:"📊",description:"Comprehensive oversight of all construction phases ensuring quality, timeline adherence and budget management.",gradient:"linear-gradient(135deg, #B79C5C 0%, #34495e 100%)"}],b=`
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
  `,p={minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"6rem 0",position:"relative",overflow:"hidden"},y={position:"absolute",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",top:"10%",right:"-5%",animation:"float 6s ease-in-out infinite",zIndex:1},A={position:"absolute",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",bottom:"20%",left:"-3%",animation:"float 8s ease-in-out infinite reverse",zIndex:1},E={maxWidth:f<=900?"100%":"1200px",margin:"0 auto",padding:f<=480?"0 1rem":f<=768?"0 1.5rem":"0 2rem",position:"relative",zIndex:2,display:f<=900?"flex":"block",flexDirection:f<=900?"column":"row",alignItems:f<=900?"center":"flex-start"},k={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px",width:f<=900?"100%":"auto",maxWidth:f<=900?"400px":"none"},M={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},G=_=>({display:"inline-block",marginRight:"20px",opacity:c?1:0,transform:c?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+_*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),O={fontSize:"1.2rem",color:"#6c757d",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",transform:c?"translateY(0) scale(1)":"translateY(40px) scale(0.8)",opacity:c?1:0,animation:c?"subtitleReveal 1s ease-out 1.6s forwards":"none"},L=()=>f<=480?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",marginTop:"4rem",width:"100%",maxWidth:"350px",margin:"4rem auto 0"}:f<=768?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"400px",margin:"4rem auto 0"}:f<=900?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"450px",margin:"4rem auto 0"}:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2.5rem",marginTop:"4rem"},S=(_,ie)=>{const D=f<=344?"280px":f<=375?"300px":f<=390?"310px":f<=480?"320px":f<=768?"350px":f<=900?"380px":"100%";return{background:"linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))",borderRadius:"24px",padding:f<=480?"2rem":"2.5rem",position:"relative",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)",border:"1px solid rgba(183, 156, 92, 0.15)",backdropFilter:"blur(10px)",transform:ie?"translateY(0) scale(1) rotateX(0)":"translateY(80px) scale(0.85) rotateX(15deg)",opacity:ie?1:0,transition:"all 1s cubic-bezier(0.23, 1, 0.32, 1)",transitionDelay:`${_*.12}s`,cursor:"pointer",transformStyle:"preserve-3d",perspective:"1000px",width:f<=900?D:"100%",maxWidth:f<=900?D:"none",margin:f<=900?"0 auto":"0",flexShrink:f<=900?0:1}},W={width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",marginBottom:"1.5rem",position:"relative",zIndex:2},K={fontSize:f<=480?"1.4rem":"1.6rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1.2rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",letterSpacing:"0.5px"},Z={color:"#495057",lineHeight:"1.8",fontSize:f<=480?"0.9rem":"1rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},ge={position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"24px",zIndex:1,background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",backdropFilter:"blur(20px)"};return v.useEffect(()=>{const _=document.createElement("style");return _.textContent=b,document.head.appendChild(_),()=>{document.head.contains(_)&&document.head.removeChild(_)}},[]),i.jsxs("section",{ref:r,style:p,children:[i.jsx("div",{style:y}),i.jsx("div",{style:A}),i.jsxs("div",{style:E,children:[i.jsxs("div",{style:k,children:[i.jsxs("h2",{style:M,children:[i.jsx("span",{style:G(0),children:"Our"}),i.jsx("span",{style:G(1),children:"Premium"}),i.jsx("span",{style:G(2),children:"Services"})]}),i.jsx("p",{style:O,children:"We provide a comprehensive range of construction services, from inception to completion. Every detail matters in transforming your vision into reality, creating spaces that inspire and endure."})]}),i.jsx("div",{style:L(),children:x.map((_,ie)=>i.jsxs("div",{style:S(ie,s.includes(ie)),onMouseEnter:D=>{if(f>768){D.currentTarget.style.transform="translateY(-20px) scale(1.05) rotateX(-5deg) rotateY(5deg)",D.currentTarget.style.boxShadow="0 35px 60px rgba(44, 62, 80, 0.15), 0 15px 25px rgba(183, 156, 92, 0.1)";const de=D.currentTarget.querySelector(".card-overlay"),Q=D.currentTarget.querySelector(".shimmer-effect"),le=D.currentTarget.querySelector(".card-title"),fe=D.currentTarget.querySelector(".card-description"),ae=D.currentTarget.querySelector(".icon-container");de&&(de.style.opacity="0.4",de.style.background=_.gradient),Q&&(Q.style.opacity="1",Q.style.transform="translateX(350px)"),le&&(le.style.color="#ffffff",le.style.textShadow="0 2px 4px rgba(0, 0, 0, 0.3)",le.style.transform="translateY(-2px)"),fe&&(fe.style.color="rgba(255, 255, 255, 0.9)",fe.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.2)"),ae&&(ae.style.transform="scale(1.1) rotateY(180deg)",ae.style.boxShadow="0 8px 25px rgba(0, 0, 0, 0.2)")}},onMouseLeave:D=>{if(f>768){D.currentTarget.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)",D.currentTarget.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)";const de=D.currentTarget.querySelector(".card-overlay"),Q=D.currentTarget.querySelector(".shimmer-effect"),le=D.currentTarget.querySelector(".card-title"),fe=D.currentTarget.querySelector(".card-description"),ae=D.currentTarget.querySelector(".icon-container");de&&(de.style.opacity="0"),Q&&(Q.style.opacity="0",Q.style.transform="translateX(-350px)"),le&&(le.style.color="#2c3e50",le.style.textShadow="none",le.style.transform="translateY(0)"),fe&&(fe.style.color="#495057",fe.style.textShadow="none"),ae&&(ae.style.transform="scale(1) rotateY(0deg)",ae.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)")}},children:[i.jsx("div",{className:"card-overlay",style:ge}),i.jsx("div",{className:"shimmer-effect",style:{position:"absolute",top:0,left:"-350px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",transform:"skewX(-20deg)",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:0,zIndex:2}}),i.jsx("div",{className:"icon-container",style:{...W,background:_.gradient,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)"},children:i.jsx("span",{style:{filter:"brightness(0) invert(1)",transition:"all 0.3s ease",display:"block"},children:_.icon})}),i.jsx("h3",{className:"card-title",style:K,children:_.title}),i.jsx("p",{className:"card-description",style:Z,children:_.description})]},ie))})]})]})},hp=({openPopup:r})=>{const[s,u]=v.useState({}),[c,d]=v.useState(!1),f=v.useRef(null),g=v.useRef(null);v.useEffect(()=>{const y=new IntersectionObserver(A=>{A.forEach(E=>{E.isIntersecting&&(d(!0),E.target.classList.add("section-visible"),g.current&&g.current.classList.add("heading-visible"))})},{threshold:.1});return f.current&&y.observe(f.current),()=>{f.current&&y.unobserve(f.current)}},[]);const x=[{id:"basic",name:"Basic Package",price:"RS.1600/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"premium",name:"Premium Package",price:"RS.1800/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"luxury",name:"Luxury Package",price:"RS.2150/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]}],b=(y,A)=>{u(E=>({...E,[y]:E[y]===A?null:A}))},p=r||(()=>alert("Package selected!"));return i.jsxs("section",{id:"pricing",className:"pricing-section",ref:f,children:[i.jsxs("div",{className:"animated-bg",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape square-2"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:`heading-container ${c?"heading-visible":""}`,ref:g,children:[i.jsx("h1",{className:"main-heading",children:"OUR PRICING"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"Choose the perfect package that suits your needs and budget"})]})}),i.jsx("div",{className:"pricing-container",children:x.map((y,A)=>i.jsxs("div",{className:`pricing-card ${y.id}`,style:{animationDelay:`${.2*A}s`},children:[i.jsxs("div",{className:"pricing-header",children:[i.jsx("h3",{children:y.name}),i.jsx("div",{className:"price",children:y.price})]}),i.jsx("div",{className:"pricing-features",children:y.features.map((E,k)=>i.jsxs("div",{className:"feature",children:[i.jsxs("div",{className:"feature-name",onClick:()=>b(y.id,k),children:[E,i.jsx("span",{className:`arrow ${s[y.id]===k?"rotated":""}`,children:"›"})]}),i.jsx("div",{className:`feature-details ${s[y.id]===k?"show":""}`,children:i.jsxs("p",{children:["More details about ",E.toLowerCase()," for the ",y.name,". This includes premium quality materials and professional installation."]})})]},k))}),i.jsx("button",{onClick:p,className:"btn btn-pricing",children:"Select Package"})]},A))})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},Hc=()=>{const r=v.useRef(null),[s,u]=v.useState(!1);v.useEffect(()=>{const y=r.current,A=()=>{const E=window.scrollY,k=y.getBoundingClientRect().top+window.scrollY;if(E>k-window.innerHeight&&E<k+y.offsetHeight){const M=(E-(k-window.innerHeight))*.5;y.style.transform=`translateX(-${M}px)`}};return window.addEventListener("scroll",A),()=>{window.removeEventListener("scroll",A)}},[]);const c=`
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
  `;v.useEffect(()=>{const y=document.createElement("style");return y.textContent=c,document.head.appendChild(y),()=>{document.head.contains(y)&&document.head.removeChild(y)}},[]);const d={background:`
      linear-gradient(135deg, 
        #1e3a8a 0%, 
        #2563eb 30%, 
        rgba(183, 156, 92, 0.8) 60%, 
        #1d4ed8 100%
      )
    `,backgroundSize:"300% 300%",animation:"subtleGradient 12s ease-in-out infinite",padding:"1.5rem 0",overflow:"hidden",position:"relative",minHeight:"100px",display:"flex",alignItems:"center",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.15)"},f=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"20%",right:"10%",width:"120px",height:"120px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(255, 255, 255, 0.05))",borderRadius:"50%",animation:"professionalFloat 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"5%",width:"80px",height:"80px",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(255, 255, 255, 0.05))",borderRadius:"50%",animation:"professionalFloat 10s ease-in-out infinite reverse",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
            radial-gradient(circle at 30% 30%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
          `,animation:"subtleOverlay 15s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.6), transparent)",zIndex:2}}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)",zIndex:2}})]}),g={width:"100%",height:"80px",overflow:"hidden",whiteSpace:"nowrap",position:"relative",zIndex:3,display:"flex",alignItems:"center"},x={display:"inline-block",whiteSpace:"nowrap",willChange:"transform"},b={display:"inline-block",marginRight:"60px",fontSize:"2.2rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"2px",color:"#ffffff",textShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",position:"relative"},p={color:"rgba(183, 156, 92, 1)",fontWeight:"800",textShadow:"0 2px 8px rgba(183, 156, 92, 0.4)",position:"relative"};return i.jsxs("section",{style:d,children:[f,i.jsx("div",{style:g,children:i.jsx("div",{style:x,ref:r,children:Array(12).fill().map((y,A)=>i.jsxs("span",{style:b,children:["BOOK NOW"," ",i.jsx("span",{style:p,children:"BOOK NOW"})]},A))})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
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
      `})]})},qc=()=>{const r=v.useRef(null),[s,u]=v.useState([]),[c,d]=v.useState(!1),[f,g]=v.useState(!1),[x,b]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const Q=()=>{b(window.innerWidth)};return window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]),v.useEffect(()=>{const Q=new IntersectionObserver(le=>{le.forEach(fe=>{fe.isIntersecting&&(d(!0),setTimeout(()=>g(!0),300),setTimeout(()=>u([0]),1e3),setTimeout(()=>u([0,1]),1200),setTimeout(()=>u([0,1,2]),1400))})},{threshold:.2});return r.current&&Q.observe(r.current),()=>{r.current&&Q.unobserve(r.current)}},[]);const p=`
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
  `;v.useEffect(()=>{const Q=document.createElement("style");return Q.textContent=p,document.head.appendChild(Q),()=>{document.head.contains(Q)&&document.head.removeChild(Q)}},[]);const y=[{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",title:"Consultation & Planning",description:"Strategic consultation meets architectural innovation. We decode your vision into precision blueprints with cutting-edge planning methodologies.",number:"01",color:"#e74c3c"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",title:"Design & Development",description:"Where creativity meets engineering excellence. Our design studio transforms concepts into revolutionary architectural solutions.",number:"02",color:"#3498db"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",title:"Construction & Handover",description:"Precision construction powered by advanced technology. From foundation to final handover, excellence in every detail.",number:"03",color:"#2ecc71"}],A={padding:x<768?"4rem 0":"8rem 0",background:`
      linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(44, 62, 80, 0.08) 0%, transparent 50%)
    `,position:"relative",overflow:"hidden",color:"#2c3e50"},E={maxWidth:"1600px",margin:"0 auto",padding:x<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},k={textAlign:"center",marginBottom:x<768?"3rem":"6rem",position:"relative",perspective:"1000px"},M={fontSize:x<480?"2.2rem":x<768?"2.8rem":x<1024?"3.5rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:x<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px"},G=Q=>({display:"inline-block",marginRight:x<768?"10px":"20px",opacity:f?1:0,transform:f?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:f?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+Q*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),O={fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",color:"#64748b",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",padding:x<768?"0 1rem":"0",opacity:f?1:0,animation:f?"subtitleFadeUp 1s ease-out forwards 1.2s":"none"},L={display:"grid",gridTemplateColumns:x<768?"1fr":x<1024?"repeat(auto-fit, minmax(300px, 1fr))":"repeat(3, 1fr)",gap:x<480?"2rem":x<768?"2.5rem":"3rem",marginTop:x<768?"2rem":"4rem",position:"relative"},S=(Q,le)=>({position:"relative",background:"rgba(255, 255, 255, 0.9)",borderRadius:x<768?"20px":"24px",padding:x<480?"2rem 1rem":x<768?"2.5rem 1.5rem":"3rem 2rem",margin:x<768?"0 auto":"0",maxWidth:x<768?"400px":"none",width:"100%",border:"1px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",backdropFilter:"blur(10px)",transform:le?"translateY(0) scale(1)":"translateY(40px) scale(0.95)",opacity:le?1:0,animation:le?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${Q*.15}s`:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",overflow:"hidden"}),W={position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",width:x<480?"45px":x<768?"50px":"60px",height:x<480?"45px":x<768?"50px":"60px",borderRadius:"50%",background:"linear-gradient(135deg, #B79C5C, #2c3e50)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",fontWeight:"800",color:"#ffffff",border:"3px solid rgba(255, 255, 255, 0.9)",zIndex:3,boxShadow:"0 8px 25px rgba(44, 62, 80, 0.3)",transition:"all 0.3s ease"},K={width:x<480?"70px":x<768?"80px":"100px",height:x<480?"70px":x<768?"80px":"100px",margin:x<768?"1.5rem auto":"2rem auto",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(183, 156, 92, 0.3)",boxShadow:"0 8px 25px rgba(44, 62, 80, 0.1)",position:"relative",transition:"all 0.3s ease"},Z={width:"50%",height:"50%",objectFit:"contain",filter:"brightness(1.1) contrast(1.1)",transition:"all 0.3s ease"},ge={textAlign:"center",position:"relative",zIndex:2},_={fontSize:x<480?"1.2rem":x<768?"1.3rem":"1.5rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1rem",letterSpacing:"0.5px",lineHeight:"1.3",transition:"all 0.3s ease"},ie={fontSize:x<480?"0.9rem":x<768?"0.95rem":"1rem",color:"#64748b",lineHeight:"1.6",transition:"all 0.3s ease"},D=i.jsx(i.Fragment,{children:x>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 6s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(44, 62, 80, 0.05)",borderRadius:"30%",animation:"backgroundFloat 8s ease-in-out infinite reverse",zIndex:1}})]})}),de=(Q,le)=>{if(x<768)return;const fe=Q.currentTarget,ae=fe.querySelector(".number-container"),re=fe.querySelector(".icon-container"),Y=fe.querySelector(".step-icon"),V=fe.querySelector(".step-title"),ne=fe.querySelector(".step-description");le?(fe.style.transform="translateY(-15px) scale(1.02)",fe.style.boxShadow="0 25px 50px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2)",fe.style.borderColor="rgba(183, 156, 92, 0.4)",ae&&(ae.style.transform="translateX(-50%) scale(1.1)",ae.style.background="linear-gradient(135deg, #2c3e50, #B79C5C)"),re&&(re.style.transform="scale(1.1)",re.style.borderColor="rgba(183, 156, 92, 0.5)",re.style.background="rgba(255, 255, 255, 0.95)"),Y&&(Y.style.transform="scale(1.2)",Y.style.filter="brightness(1.3) contrast(1.2)"),V&&(V.style.color="#B79C5C"),ne&&(ne.style.color="#2c3e50")):(fe.style.transform="translateY(0) scale(1)",fe.style.boxShadow="0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",fe.style.borderColor="rgba(183, 156, 92, 0.2)",ae&&(ae.style.transform="translateX(-50%) scale(1)",ae.style.background="linear-gradient(135deg, #B79C5C, #2c3e50)"),re&&(re.style.transform="scale(1)",re.style.borderColor="rgba(183, 156, 92, 0.3)",re.style.background="rgba(255, 255, 255, 0.8)"),Y&&(Y.style.transform="scale(1)",Y.style.filter="brightness(1.1) contrast(1.1)"),V&&(V.style.color="#2c3e50"),ne&&(ne.style.color="#64748b"))};return i.jsxs("section",{style:A,ref:r,children:[D,i.jsxs("div",{style:E,children:[i.jsxs("div",{style:k,children:[i.jsxs("h2",{style:M,children:[i.jsx("span",{style:G(0),children:"How"}),i.jsx("span",{style:G(1),children:"We"}),i.jsx("span",{style:G(2),children:"Work?"})]}),i.jsx("p",{style:O,children:"Revolutionary construction methodology powered by cutting-edge technology and architectural innovation"})]}),i.jsx("div",{style:L,children:y.map((Q,le)=>{const fe=s.includes(le);return i.jsxs("div",{style:S(le,fe),onMouseEnter:ae=>de(ae,!0),onMouseLeave:ae=>de(ae,!1),onTouchStart:ae=>{x<768&&(ae.currentTarget.style.transform="scale(0.98)")},onTouchEnd:ae=>{x<768&&(ae.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{style:W,className:"number-container",children:Q.number}),i.jsx("div",{className:"icon-container",style:K,children:i.jsx("img",{src:Q.icon,alt:Q.title,style:Z,className:"step-icon"})}),i.jsxs("div",{style:ge,children:[i.jsx("h3",{style:_,className:"step-title",children:Q.title}),i.jsx("p",{style:ie,className:"step-description",children:Q.description})]})]},le)})})]})]})};var wg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xp=Jt.createContext&&Jt.createContext(wg),n5=["attr","size","title"];function i5(r,s){if(r==null)return{};var u=r5(r,s),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function r5(r,s){if(r==null)return{};var u={};for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){if(s.indexOf(c)>=0)continue;u[c]=r[c]}return u}function Jl(){return Jl=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},Jl.apply(this,arguments)}function bp(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function eo(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?bp(Object(u),!0).forEach(function(c){l5(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):bp(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function l5(r,s,u){return s=o5(s),s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function o5(r){var s=s5(r,"string");return typeof s=="symbol"?s:s+""}function s5(r,s){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function Sg(r){return r&&r.map((s,u)=>Jt.createElement(s.tag,eo({key:u},s.attr),Sg(s.child)))}function so(r){return s=>Jt.createElement(c5,Jl({attr:eo({},r.attr)},s),Sg(r.child))}function c5(r){var s=u=>{var{attr:c,size:d,title:f}=r,g=i5(r,n5),x=d||u.size||"1em",b;return u.className&&(b=u.className),r.className&&(b=(b?b+" ":"")+r.className),Jt.createElement("svg",Jl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,g,{className:b,style:eo(eo({color:r.color||u.color},u.style),r.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),f&&Jt.createElement("title",null,f),r.children)};return xp!==void 0?Jt.createElement(xp.Consumer,null,u=>s(u)):s(wg)}function u5(r){return so({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function d5(r){return so({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function f5(r){return so({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(r)}function m5(r){return so({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"},child:[]}]})(r)}const Xc=()=>{const r=v.useRef(null),s=v.useRef([]),u=v.useRef(null),[c,d]=v.useState(!1),[f,g]=v.useState([]),[x,b]=v.useState(!1),[p,y]=v.useState(typeof window<"u"?window.innerWidth:1200),A=p<480?24:p<768?28:36;v.useEffect(()=>{const ae=()=>{y(window.innerWidth)};return window.addEventListener("resize",ae),()=>window.removeEventListener("resize",ae)},[]),v.useEffect(()=>{const ae=new IntersectionObserver(re=>{re.forEach(Y=>{Y.isIntersecting&&(d(!0),Y.target.classList.add("section-visible"),setTimeout(()=>b(!0),300),setTimeout(()=>E(),1e3),setTimeout(()=>g([0]),1600),setTimeout(()=>g([0,1]),1700),setTimeout(()=>g([0,1,2]),1800),setTimeout(()=>g([0,1,2,3]),1900))})},{threshold:.3});return r.current&&ae.observe(r.current),()=>{r.current&&ae.unobserve(r.current)}},[]);const E=()=>{s.current.forEach((re,Y)=>{if(!re)return;const V=parseInt(re.getAttribute("data-target")),be=V/(2500/50);let j=0;setTimeout(()=>{const X=()=>{j+=be,j<V?(re.textContent=Math.ceil(j),setTimeout(X,50)):re.textContent=V};X()},Y*200)})},k=`
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
  `;v.useEffect(()=>{const ae=document.createElement("style");return ae.textContent=k,document.head.appendChild(ae),()=>{document.head.contains(ae)&&document.head.removeChild(ae)}},[]);const M=[{icon:i.jsx(f5,{size:A,color:"#B79C5C"}),value:15,suffix:"+",label:"YEARS LEGACY"},{icon:i.jsx(d5,{size:A,color:"#3498db"}),value:12,suffix:"+",label:"LAKHS SQ.FT DELIVERED"},{icon:i.jsx(u5,{size:A,color:"#B79C5C"}),value:60,suffix:"+",label:"PROJECTS DELIVERED"},{icon:i.jsx(m5,{size:A,color:"#3498db"}),value:4,suffix:"",label:"CITIES",subtext:"Bangalore, Mangalore, Hyderabad, Chennai"}],G={padding:p<768?"4rem 0":"6rem 0",background:`
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
    `,color:"#ffffff",overflow:"hidden",position:"relative"},O={maxWidth:"1400px",margin:"0 auto",padding:p<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},L={textAlign:"center",marginBottom:p<768?"3rem":"5rem",position:"relative",perspective:"1000px"},S={fontSize:p<480?"1.9rem":p<768?"2.3rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:p<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px",textTransform:"uppercase",letterSpacing:p<480?"1px":"3px"},W=ae=>({display:"inline-block",marginRight:p<768?"10px":"20px",opacity:x?1:0,transform:x?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #ffffff 0%, #B79C5C 50%, #ffffff 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:x?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+ae*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),K={fontSize:p<768?"1.1rem":"1.3rem",color:"#B79C5C",opacity:x?.9:0,animation:x?"subtitleFadeUp 1s ease-out forwards 1.2s":"none",letterSpacing:"1px",textTransform:"uppercase"},Z={height:"4px",background:"linear-gradient(90deg, transparent, #B79C5C, transparent)",margin:"1rem auto",borderRadius:"2px",boxShadow:x?"0 0 20px rgba(183, 156, 92, 0.5)":"none",animation:x?"underlineExpand 1.5s ease-out forwards 1.4s":"none",width:"0"},ge={display:"grid",gridTemplateColumns:p<768||p<1200?"repeat(2, 1fr)":"repeat(4, 1fr)",gridTemplateRows:p<768?"repeat(2, 1fr)":"auto",gap:p<480?"1rem":p<768?"1.5rem":"2rem",marginTop:p<768?"2rem":"4rem",maxWidth:p<768?"400px":"1200px",margin:`${p<768?"2rem":"4rem"} auto 0`,padding:p<768?"0 0.5rem":"0"},_=(ae,re)=>({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"rgba(30, 30, 30, 0.8)",borderRadius:p<768?"16px":"20px",padding:p<480?"1.2rem 0.8rem":p<768?"1.5rem 1rem":"2rem 1.5rem",border:`1px solid ${ae%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)"}`,position:"relative",overflow:"hidden",cursor:"pointer",transform:re?"translateY(0) scale(1)":"translateY(30px) scale(0.95)",opacity:re?1:0,animation:re?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${ae*.1}s`:"none",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",minHeight:p<480?"160px":p<768?"180px":"280px",backdropFilter:"blur(10px)",boxShadow:`0 15px 35px ${ae%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`}),ie=ae=>({width:p<480?"50px":p<768?"60px":"90px",height:p<480?"50px":p<768?"60px":"90px",marginBottom:p<768?"1rem":"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(40, 40, 40, 0.8)",borderRadius:"50%",border:`2px solid ${ae%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)"}`,position:"relative",boxShadow:`0 10px 25px ${ae%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 5px 15px rgba(0, 0, 0, 0.4)`,transition:"all 0.3s ease"}),D=ae=>({color:ae%2===0?"#B79C5C":"#3498db",transition:"all 0.3s ease",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",display:"flex",alignItems:"center",justifyContent:"center",width:p<480?"1.5rem":p<768?"1.8rem":"2.5rem",height:p<480?"1.5rem":p<768?"1.8rem":"2.5rem"}),de=ae=>({fontSize:p<480?"1.8rem":p<768?"2.2rem":"2.8rem",fontWeight:"900",marginBottom:"0.5rem",background:`linear-gradient(135deg, #ffffff, ${ae%2===0?"#B79C5C":"#3498db"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"1px",transition:"all 0.3s ease"}),Q={fontSize:p<480?"0.7rem":p<768?"0.8rem":"0.9rem",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.9)",letterSpacing:"0.5px",lineHeight:"1.3",fontWeight:"600",transition:"all 0.3s ease"},le=i.jsx(i.Fragment,{children:p>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(52, 152, 219, 0.05)",borderRadius:"30%",animation:"backgroundFloat 10s ease-in-out infinite reverse",zIndex:1}})]})}),fe=(ae,re,Y)=>{if(p<768)return;const V=ae.currentTarget,ne=V.querySelector(".record-icon"),be=V.querySelector(".icon-svg"),j=V.querySelector(".record-value"),X=V.querySelector(".record-label");Y?(V.style.transform="translateY(-15px) scale(1.05)",V.style.boxShadow=`0 25px 50px ${re%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 15px 30px rgba(0, 0, 0, 0.4)`,V.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.6)":"rgba(52, 152, 219, 0.6)",ne&&(ne.style.transform="scale(1.15)",ne.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.8)":"rgba(52, 152, 219, 0.8)",ne.style.background="rgba(50, 50, 50, 0.9)"),be&&(be.style.transform="scale(1.2)",be.style.filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))"),j&&(j.style.transform="scale(1.1)"),X&&(X.style.color=re%2===0?"#B79C5C":"#3498db")):(V.style.transform="translateY(0) scale(1)",V.style.boxShadow=`0 15px 35px ${re%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`,V.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)",ne&&(ne.style.transform="scale(1)",ne.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)",ne.style.background="rgba(40, 40, 40, 0.8)"),be&&(be.style.transform="scale(1)",be.style.filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"),j&&(j.style.transform="scale(1)"),X&&(X.style.color="rgba(255, 255, 255, 0.9)"))};return i.jsxs("section",{style:G,ref:r,children:[le,i.jsxs("div",{style:O,children:[i.jsx("div",{style:L,children:i.jsxs("div",{ref:u,children:[i.jsxs("h1",{style:S,children:[i.jsx("span",{style:W(0),children:"Our"}),i.jsx("span",{style:W(1),children:"Track"}),i.jsx("span",{style:W(2),children:"Record"})]}),i.jsx("div",{style:Z}),i.jsx("p",{style:K,children:"Excellence in Numbers"})]})}),i.jsx("div",{style:ge,children:M.map((ae,re)=>{const Y=f.includes(re);return i.jsxs("div",{style:_(re,Y),onMouseEnter:V=>fe(V,re,!0),onMouseLeave:V=>fe(V,re,!1),onTouchStart:V=>{p<768&&(V.currentTarget.style.transform="scale(0.98)")},onTouchEnd:V=>{p<768&&(V.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{className:"record-icon",style:ie(re),children:i.jsx("div",{className:"icon-svg",style:D(re),children:ae.icon})}),i.jsxs("div",{className:"record-detail",children:[i.jsxs("h3",{className:"record-value",style:de(re),children:[i.jsx("span",{ref:V=>{V&&(s.current[re]=V)},"data-target":ae.value,children:"0"}),ae.suffix]}),i.jsx("h5",{className:"record-label",style:Q,children:ae.label}),ae.subtext&&i.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.8)",marginTop:"0.5rem",textAlign:"center",fontWeight:"400",lineHeight:"1.4"},children:ae.subtext})]})]},re)})})]})]})},yp=()=>{const[r,s]=v.useState(0),[u,c]=v.useState(!1),[d,f]=v.useState(!1),g=v.useRef(null),x=v.useRef(null),b=[{id:1,name:"Sangeeta Reddy",role:"Homeowner",testimonial:"Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!",rating:5,project:"Villa Construction"},{id:2,name:"Anusha Patel",role:"Property Owner",testimonial:"I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline.",rating:5,project:"Apartment Renovation"},{id:3,name:"Manoj Sharma",role:"Client",testimonial:"What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!",rating:5,project:"Custom Home Design"}],p={"--primary-color":"#2c3e50","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--secondary-color":"#f8f9fa","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},y=`
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
  `;v.useEffect(()=>{const I=document.createElement("style");return I.textContent=y,document.head.appendChild(I),()=>{document.head.contains(I)&&document.head.removeChild(I)}},[]);const A=()=>{s(I=>(I+1)%b.length)},E=()=>{s(I=>(I-1+b.length)%b.length)};v.useEffect(()=>{const I=new IntersectionObserver($=>{$.forEach(T=>{T.isIntersecting&&(c(!0),T.target.classList.add("section-visible"),setTimeout(()=>f(!0),300))})},{threshold:.3});return x.current&&I.observe(x.current),g.current=setInterval(()=>{A()},6e3),()=>{g.current&&clearInterval(g.current),x.current&&I.unobserve(x.current)}},[]);const k=I=>{s(I),g.current&&clearInterval(g.current),g.current=setInterval(()=>{A()},6e3)},M={...p,padding:"6rem 0",background:`
      linear-gradient(135deg, var(--light-color) 0%, var(--secondary-color) 50%, var(--light-color) 100%),
      radial-gradient(circle at 20% 80%, rgba(183, 156, 92, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
    `,backgroundSize:"400% 400%",animation:u?"backgroundShift 15s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},G={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},O={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px"},L={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px",position:"relative",display:"inline-block"},S=I=>({display:"inline-block",marginRight:"20px",opacity:d?1:0,transform:d?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+I*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),W={position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",height:"4px",background:"linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color))",borderRadius:"2px",animation:d?"underlineExpand 1s ease-out forwards 1.6s":"none",width:"0"},K={fontSize:"1.1rem",color:"var(--text-color)",opacity:d?1:0,animation:d?"cardSlideIn 1s ease-out forwards 1.8s":"none"},Z={maxWidth:"900px",margin:"0 auto",position:"relative",overflow:"hidden",borderRadius:"var(--border-radius)",perspective:"1000px"},ge={display:"flex",transition:"transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",transform:`translateX(-${r*100}%)`},_={flex:"0 0 100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 2rem",background:`
      linear-gradient(135deg, var(--light-color) 0%, rgba(248, 249, 250, 0.8) 100%),
      linear-gradient(45deg, rgba(183, 156, 92, 0.03), rgba(44, 62, 80, 0.03))
    `,borderRadius:"var(--border-radius)",boxShadow:"0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)",border:"1px solid rgba(183, 156, 92, 0.1)",position:"relative",overflow:"hidden",transition:"var(--transition)",cursor:"pointer"},ie={width:"100px",height:"100px",borderRadius:"50%",background:`
      linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1)),
      var(--light-color)
    `,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem",color:"var(--primary-color)",border:"4px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.2)",animation:u?"avatarPulse 3s ease-in-out infinite, floatAnimation 4s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},D={width:"50px",height:"50px",color:"var(--accent-color)",zIndex:2},de={textAlign:"center",position:"relative",zIndex:2},Q={fontSize:"1.5rem",fontWeight:"700",color:"var(--primary-color)",marginBottom:"0.5rem"},le={fontSize:"0.9rem",color:"var(--accent-color)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"600"},fe={display:"flex",justifyContent:"center",gap:"0.3rem",marginBottom:"1.5rem"},ae={width:"20px",height:"20px",color:"#ffd700",animation:"starTwinkle 2s ease-in-out infinite",animationDelay:I=>`${I*.2}s`},re={fontSize:"1.1rem",fontStyle:"italic",color:"var(--text-color)",lineHeight:"1.8",position:"relative",padding:"0 2rem",marginBottom:"1rem"},Y={fontSize:"0.9rem",color:"var(--accent-color)",fontWeight:"600",padding:"0.5rem 1rem",background:"rgba(183, 156, 92, 0.1)",borderRadius:"20px",border:"1px solid rgba(183, 156, 92, 0.2)"},V={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"3rem",gap:"2rem"},ne={background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",border:"none",width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",transition:"var(--transition)",boxShadow:"0 5px 15px rgba(183, 156, 92, 0.3)"},be={display:"flex",alignItems:"center",gap:"0.8rem"},j=I=>({width:"12px",height:"12px",borderRadius:"50%",background:I===r?"var(--accent-color)":"rgba(183, 156, 92, 0.3)",border:"none",cursor:"pointer",transition:"var(--transition)",transform:I===r?"scale(1.3)":"scale(1)",boxShadow:I===r?"0 0 10px rgba(183, 156, 92, 0.5)":"none"}),X=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.05), rgba(44, 62, 80, 0.05))",borderRadius:"50%",animation:"floatAnimation 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(183, 156, 92, 0.05))",borderRadius:"30%",animation:"floatAnimation 10s ease-in-out infinite reverse",zIndex:1}})]});return i.jsxs("section",{style:M,ref:x,children:[X,i.jsxs("div",{style:G,children:[i.jsxs("div",{style:O,children:[i.jsxs("h2",{style:L,children:[i.jsx("span",{style:S(0),children:"What"}),i.jsx("span",{style:S(1),children:"Our"}),i.jsx("span",{style:S(2),children:"Clients"}),i.jsx("span",{style:S(3),children:"Say"}),i.jsx("div",{style:W})]}),i.jsx("p",{style:K,children:"Trusted by hundreds of satisfied customers across multiple cities"})]}),i.jsxs("div",{style:Z,children:[i.jsx("div",{style:ge,children:b.map((I,$)=>i.jsxs("div",{style:_,onMouseEnter:T=>{T.currentTarget.style.transform="translateY(-10px) scale(1.02) rotateX(-2deg)",T.currentTarget.style.boxShadow="0 25px 50px rgba(183, 156, 92, 0.15), 0 10px 25px var(--shadow-color)"},onMouseLeave:T=>{T.currentTarget.style.transform="translateY(0) scale(1) rotateX(0deg)",T.currentTarget.style.boxShadow="0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)"},children:[i.jsxs("div",{style:ie,children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",style:D,children:i.jsx("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
                      linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(183, 156, 92, 0.1) 50%, 
                        transparent 70%
                      )
                    `,backgroundSize:"200% 200%",animation:"backgroundShift 3s linear infinite",borderRadius:"50%",zIndex:1}})]}),i.jsxs("div",{style:de,children:[i.jsx("h4",{style:Q,children:I.name}),i.jsx("p",{style:le,children:I.role}),i.jsx("div",{style:fe,children:[...Array(I.rating)].map((T,ee)=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",style:{...ae,animationDelay:`${ee*.2}s`},children:i.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})},ee))}),i.jsxs("blockquote",{style:re,children:['"',I.testimonial,'"']}),i.jsx("div",{style:Y,children:I.project})]}),i.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:"100px",height:"100px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.03), transparent)",pointerEvents:"none"}})]},$))}),i.jsxs("div",{style:V,children:[i.jsx("button",{style:ne,onClick:E,onMouseEnter:I=>{I.currentTarget.style.transform="scale(1.1) rotateZ(-5deg)",I.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:I=>{I.currentTarget.style.transform="scale(1) rotateZ(0deg)",I.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"})})}),i.jsx("div",{style:be,children:b.map((I,$)=>i.jsx("button",{style:j($),onClick:()=>k($)},$))}),i.jsx("button",{style:ne,onClick:A,onMouseEnter:I=>{I.currentTarget.style.transform="scale(1.1) rotateZ(5deg)",I.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:I=>{I.currentTarget.style.transform="scale(1) rotateZ(0deg)",I.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"})})})]})]})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},vp=()=>{var dt,ft,aa;const[r,s]=v.useState("all"),[u,c]=v.useState([]),[d,f]=v.useState(!1),[g,x]=v.useState(null),[b,p]=v.useState(0),[y,A]=v.useState(!1),[E,k]=v.useState([]),[M,G]=v.useState(!1),[O,L]=v.useState({x:0,y:0}),[S,W]=v.useState(typeof window<"u"?window.innerWidth:1200),K=v.useRef(null);v.useEffect(()=>{const J=()=>{W(window.innerWidth)};return window.addEventListener("resize",J),()=>window.removeEventListener("resize",J)},[]);const Z=[{id:1,category:"residential",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Modern Villa Estate",description:"Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:2,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Tower",description:"State-of-the-art corporate headquarters with sustainable design features and smart building technology",year:"2022",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:3,category:"interior",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Apartment Interior",description:"High-end residential interior design with custom furniture and premium materials throughout the space",year:"2023",location:"Chennai",gallery:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:4,category:"renovation",image:"https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Historic Building Renovation",description:"Careful restoration of a heritage structure with modern amenities while preserving historical elements",year:"2021",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235707960-5a1d318a2a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:5,category:"layout",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Urban Planning Project",description:"Comprehensive urban development plan with mixed-use spaces, green areas and sustainable infrastructure",year:"2022",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:6,category:"residential",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Family Home",description:"Custom-designed family residence with premium amenities, smart home features and sustainable elements",year:"2023",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:7,category:"commercial",image:"https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Retail Complex Development",description:"Modern shopping center with innovative design, optimized customer flow and integrated digital experiences",year:"2021",location:"Chennai",gallery:["https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014056132-70b975a35d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:8,category:"interior",image:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Interior",description:"Modern workspace design with ergonomic furniture, collaborative areas and productivity-focused layout",year:"2022",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:9,category:"renovation",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Remodeling",description:"Complete home transformation with open concept design, updated systems and contemporary finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:10,category:"layout",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Community Planning",description:"Master-planned residential community with integrated amenities, green spaces and pedestrian-friendly design",year:"2021",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:11,category:"residential",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Waterfront Residence",description:"Exclusive waterfront property with panoramic views, custom architectural details and luxury amenities",year:"2022",location:"Chennai",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:12,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Mixed-Use Development",description:"Integrated commercial and residential complex with shared amenities and efficient space utilization",year:"2023",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]}],ge=[{id:"all",label:"All Projects",color:"#2c3e50",icon:"🏗️"},{id:"residential",label:"Residential",color:"#B79C5C",icon:"🏠"},{id:"commercial",label:"Commercial",color:"#3498db",icon:"🏢"},{id:"interior",label:"Interior",color:"#e74c3c",icon:"🎨"},{id:"renovation",label:"Renovation",color:"#9b59b6",icon:"🔨"},{id:"layout",label:"Layout",color:"#27ae60",icon:"📐"}],_=`
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
  `;v.useEffect(()=>{if(S<768)return;const J=Te=>{if(K.current){const se=K.current.getBoundingClientRect(),ye=(Te.clientX-se.left)/se.width,Ce=(Te.clientY-se.top)/se.height;L({x:ye,y:Ce})}};return document.addEventListener("mousemove",J),()=>document.removeEventListener("mousemove",J)},[S]),v.useEffect(()=>{const J=document.createElement("style");return J.textContent=_,document.head.appendChild(J),()=>{document.head.contains(J)&&document.head.removeChild(J)}},[]),v.useEffect(()=>{const J=new IntersectionObserver(Te=>{Te.forEach(se=>{se.isIntersecting&&(A(!0),setTimeout(()=>G(!0),300),setTimeout(()=>{(r==="all"?Z:Z.filter(Ce=>Ce.category===r)).forEach((Ce,gt)=>{setTimeout(()=>{k(mt=>[...mt,gt])},gt*100)})},1500))})},{threshold:.1});return K.current&&J.observe(K.current),()=>{K.current&&J.unobserve(K.current)}},[r]),v.useEffect(()=>{c(r==="all"?Z:Z.filter(J=>J.category===r)),k([])},[r]);const ie=J=>{s(J)},D=J=>{x(J),p(0),f(!0),document.body.style.overflow="hidden"},de=()=>{f(!1),x(null),p(0),document.body.style.overflow="unset"},Q=J=>{g!=null&&g.gallery&&p(J==="next"?Te=>(Te+1)%g.gallery.length:Te=>(Te-1+g.gallery.length)%g.gallery.length)},le=()=>g!=null&&g.gallery?g.gallery[b]:g==null?void 0:g.image,fe={padding:S<768?"4rem 0":"8rem 0",background:`
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,position:"relative",overflow:"hidden",minHeight:S<768?"auto":"100vh"},ae=S>=768?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"8%",width:"280px",height:"280px",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.08), rgba(52, 152, 219, 0.06))",animation:"morphShape 20s ease-in-out infinite, backgroundFloat 8s ease-in-out infinite",zIndex:1,transform:`translate(${O.x*15}px, ${O.y*10}px)`}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"5%",width:"200px",height:"200px",background:"linear-gradient(225deg, rgba(231, 76, 60, 0.06), rgba(155, 89, 182, 0.08))",animation:"morphShape 25s ease-in-out infinite reverse, backgroundFloat 12s ease-in-out infinite",zIndex:1,transform:`translate(${O.x*-20}px, ${O.y*15}px)`}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"15%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(39, 174, 96, 0.05), rgba(241, 196, 15, 0.07))",animation:"morphShape 30s ease-in-out infinite, backgroundFloat 10s ease-in-out infinite reverse",zIndex:1,transform:`translate(${O.x*25}px, ${O.y*-12}px)`}}),[...Array(6)].map((J,Te)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${4+Math.random()*6}px`,height:`${4+Math.random()*6}px`,background:`linear-gradient(45deg, rgba(183, 156, 92, ${.3+Math.random()*.4}), rgba(52, 152, 219, ${.2+Math.random()*.3}))`,borderRadius:"50%",animation:`parallaxFloat ${8+Math.random()*6}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1,transform:`translate(${O.x*(10+Math.random()*20)}px, ${O.y*(5+Math.random()*15)}px)`}},Te))]}):null,re={maxWidth:"1600px",margin:"0 auto",padding:S<768?"0 1rem":"0 3rem",position:"relative",zIndex:2},Y={textAlign:"center",marginBottom:S<768?"3rem":"5rem",position:"relative",perspective:"1200px"},V={fontSize:S<480?"2rem":S<768?"2.5rem":"clamp(3.5rem, 6vw, 5.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 2rem 0",perspective:"1200px",position:"relative",display:"inline-block"},ne=J=>({display:"inline-block",marginRight:S<768?"15px":"25px",opacity:M?1:0,transform:M?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)",backgroundSize:"400% 400%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:M?`wordReveal 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+J*.2}s, gradientShift 6s ease-in-out infinite`:"none",textShadow:M?"0 10px 30px rgba(44, 62, 80, 0.1)":"none"}),be={position:"absolute",bottom:"-15px",left:"50%",transform:"translateX(-50%)",height:"6px",background:"linear-gradient(90deg, transparent, #B79C5C, #3498db, #B79C5C, transparent)",borderRadius:"3px",animation:M?"titleUnderline 1.5s ease-out forwards 2s":"none",width:"0"},j={fontSize:S<768?"1.1rem":"1.3rem",color:"#64748b",fontWeight:"300",letterSpacing:S<768?"1px":"2px",lineHeight:"1.8",maxWidth:"700px",margin:"0 auto",padding:S<768?"0 1rem":"0",opacity:M?1:0,animation:M?"subtitleFadeUp 1s ease-out forwards 2.3s":"none"},X={display:"flex",justifyContent:"center",flexWrap:"wrap",gap:S<768?"0.8rem":"1.5rem",marginBottom:S<768?"2rem":"4rem",opacity:M?1:0,animation:M?"filterButtonFloat 1s ease-out forwards 2.6s":"none"},I=(J,Te,se)=>({padding:S<480?"0.6rem 1rem":S<768?"0.75rem 1.5rem":"1rem 2rem",background:Te?`linear-gradient(135deg, ${J.color}, rgba(44, 62, 80, 0.9))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${Te?"transparent":"rgba(183, 156, 92, 0.2)"}`,borderRadius:"25px",color:Te?"white":"#64748b",fontWeight:"600",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:Te?"0 15px 35px rgba(44, 62, 80, 0.2), 0 5px 15px rgba(183, 156, 92, 0.3)":"0 8px 25px rgba(44, 62, 80, 0.08)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",fontSize:S<480?"0.75rem":S<768?"0.8rem":"0.9rem",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",gap:S<768?"4px":"8px",animation:Te?"filterGlow 2s ease-in-out infinite":"none",transform:`translateY(${Te?-3:0}px)`,animationDelay:`${se*.1}s`}),$={display:"grid",gridTemplateColumns:S<768?"1fr":S<1024?"repeat(2, 1fr)":S<1400?"repeat(3, 1fr)":"repeat(auto-fill, minmax(380px, 1fr))",gap:S<768?"2rem":"3rem",marginTop:S<768?"2rem":"3rem",perspective:"1200px"},T=(J,Te)=>({position:"relative",borderRadius:S<768?"20px":"24px",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",cursor:"pointer",height:S<480?"280px":S<768?"320px":"350px",background:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(255, 255, 255, 0.2)",backdropFilter:"blur(20px)",transform:Te?"translateY(0) scale(1)":"translateY(40px) scale(0.9)",opacity:Te?1:0,animation:Te?`galleryItemMagnetize 1s cubic-bezier(0.23, 1, 0.32, 1) forwards ${J*.1}s`:"none",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",transformStyle:"preserve-3d"}),ee={width:"100%",height:"70%",objectFit:"cover",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.95) contrast(1.05) saturate(1.1)"},te={position:"absolute",top:0,left:0,width:"100%",height:"70%",background:`
      radial-gradient(circle at center, transparent 0%, rgba(44, 62, 80, 0.7) 100%),
      linear-gradient(to top, rgba(44, 62, 80, 0.9) 0%, transparent 60%)
    `,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:S<768?"1rem":"2rem",opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",color:"white",textAlign:"center"},we={position:"absolute",bottom:0,left:0,right:0,padding:S<768?"1rem":"1.5rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(183, 156, 92, 0.2)"},xe={fontSize:S<768?"1.2rem":"1.5rem",fontWeight:"700",marginBottom:"0.5rem",transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.1s"},Me={fontSize:S<768?"0.9rem":"1rem",opacity:.9,transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.2s",lineHeight:"1.5"},lt={position:"absolute",top:0,left:"-200px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:S>=768?"shimmerEffect 3s ease-in-out infinite":"none",zIndex:3},Ze=(J,Te,se)=>{const ye=J.currentTarget,Ce=ye.querySelector("img"),gt=ye.querySelector(".overlay"),mt=ye.querySelectorAll(".overlay-element"),Rt=ye.querySelector(".shimmer");se?(S>=768?(ye.style.animation="cardHoverLift 0.6s ease-out forwards",Ce&&(Ce.style.transform="scale(1.15) rotate(3deg)"),Rt&&(Rt.style.animation="shimmerEffect 1s ease-out")):ye.style.transform="scale(0.98)",gt&&(gt.style.opacity="1"),mt.forEach(It=>{It.style.transform="translateY(0)"})):(S>=768?(ye.style.animation="none",ye.style.transform="translateY(0) scale(1) rotateX(0deg)",ye.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",Ce&&(Ce.style.transform="scale(1) rotate(0deg)")):ye.style.transform="scale(1)",gt&&(gt.style.opacity="0"),mt.forEach(It=>{It.style.transform="translateY(20px)"}))};return i.jsxs("section",{style:fe,ref:K,children:[ae,i.jsxs("div",{style:re,children:[i.jsxs("div",{style:Y,children:[i.jsxs("h2",{style:V,children:[i.jsx("span",{style:ne(0),children:"Our"}),i.jsx("span",{style:ne(1),children:"Project"}),i.jsx("span",{style:ne(2),children:"Portfolio"}),i.jsx("div",{style:be})]}),i.jsx("p",{style:j,children:"Discover our curated collection of architectural masterpieces and design excellence that define contemporary living"})]}),i.jsx("div",{style:X,children:ge.map((J,Te)=>i.jsxs("button",{style:I(J,r===J.id,Te),onClick:()=>ie(J.id),onMouseEnter:se=>{S>=768&&r!==J.id&&(se.currentTarget.style.transform="translateY(-8px) scale(1.05)",se.currentTarget.style.boxShadow="0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)",se.currentTarget.style.borderColor="rgba(183, 156, 92, 0.5)",se.currentTarget.style.background="rgba(255, 255, 255, 0.95)",se.currentTarget.style.color=J.color)},onMouseLeave:se=>{S>=768&&r!==J.id&&(se.currentTarget.style.transform="translateY(0) scale(1)",se.currentTarget.style.boxShadow="0 8px 25px rgba(44, 62, 80, 0.08)",se.currentTarget.style.borderColor="rgba(183, 156, 92, 0.2)",se.currentTarget.style.background="rgba(255, 255, 255, 0.8)",se.currentTarget.style.color="#64748b")},children:[i.jsx("span",{style:{fontSize:S<768?"1rem":"1.1rem"},children:J.icon}),J.label]},J.id))}),i.jsx("div",{style:$,children:u.map((J,Te)=>{var ye;const se=E.includes(Te);return i.jsxs("div",{style:T(Te,se),onClick:()=>D(J),onMouseEnter:Ce=>Ze(Ce,Te,!0),onMouseLeave:Ce=>Ze(Ce,Te,!1),onTouchStart:Ce=>Ze(Ce,Te,!0),onTouchEnd:Ce=>Ze(Ce,Te,!1),children:[i.jsx("div",{style:lt,className:"shimmer"}),i.jsx("img",{src:J.image,alt:J.title,style:ee}),i.jsxs("div",{className:"overlay",style:te,children:[i.jsx("h3",{className:"overlay-element",style:xe,children:J.gallery?`View Gallery (${J.gallery.length} images)`:"View Project"}),i.jsx("p",{className:"overlay-element",style:Me,children:J.gallery?"Click to explore image gallery":"Click to explore details"})]}),i.jsxs("div",{style:we,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem",flexDirection:S<480?"column":"row",gap:S<480?"0.5rem":"0"},children:[i.jsx("h3",{style:{fontSize:S<768?"1.1rem":"1.3rem",fontWeight:"700",color:"#2c3e50",margin:0,flex:1},children:J.title}),i.jsx("span",{style:{fontSize:"0.8rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px",marginLeft:S<480?"0":"1rem"},children:J.year})]}),i.jsx("p",{style:{fontSize:S<768?"0.8rem":"0.9rem",color:"#64748b",lineHeight:"1.4",margin:"0 0 0.5rem 0"},children:J.description}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:S<480?"column":"row",gap:S<480?"0.5rem":"0"},children:[i.jsx("span",{style:{fontSize:"0.8rem",color:"#94a3b8",display:"flex",alignItems:"center",gap:"0.5rem"},children:J.location}),i.jsx("span",{style:{fontSize:"0.8rem",color:((ye=ge.find(Ce=>Ce.id===J.category))==null?void 0:ye.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px"},children:J.category})]})]})]},J.id)})})]}),d&&i.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center",animation:"lightboxEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",backdropFilter:"blur(20px)",padding:S<768?"1rem":"2rem"},onClick:de,children:i.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:S<768?"100%":"1200px",background:"rgba(255, 255, 255, 0.95)",borderRadius:S<768?"16px":"24px",overflow:"hidden",boxShadow:"0 50px 100px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.2)",maxHeight:"90vh"},onClick:J=>J.stopPropagation(),children:[i.jsx("button",{style:{position:"absolute",top:S<768?"1rem":"1.5rem",right:S<768?"1rem":"1.5rem",background:"rgba(0, 0, 0, 0.7)",border:"none",width:S<768?"50px":"60px",height:S<768?"50px":"60px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:S<768?"1.2rem":"1.5rem",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",backdropFilter:"blur(10px)"},onClick:de,onMouseEnter:J=>{S>=768&&(J.currentTarget.style.background="#B79C5C",J.currentTarget.style.transform="scale(1.1) rotate(90deg)")},onMouseLeave:J=>{S>=768&&(J.currentTarget.style.background="rgba(0, 0, 0, 0.7)",J.currentTarget.style.transform="scale(1) rotate(0deg)")},children:"×"}),i.jsx("div",{style:{width:"100%",height:S<768?"50vh":"70vh",maxHeight:"400px"},children:i.jsx("img",{src:le(),alt:g==null?void 0:g.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),i.jsxs("div",{style:{padding:S<768?"1.5rem":"3rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",maxHeight:S<768?"40vh":"auto",overflowY:"auto"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexDirection:S<768?"column":"row",gap:S<768?"1rem":"0"},children:[i.jsx("h3",{style:{color:"#2c3e50",fontSize:S<768?"1.5rem":"2.2rem",fontWeight:"700",margin:0,flex:1},children:g==null?void 0:g.title}),i.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[(g==null?void 0:g.gallery)&&i.jsxs("span",{style:{fontSize:S<768?"0.9rem":"1rem",color:"#3498db",fontWeight:"600",background:"rgba(52, 152, 219, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:[b+1," / ",g.gallery.length]}),i.jsx("span",{style:{fontSize:S<768?"0.9rem":"1rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:g==null?void 0:g.year}),i.jsxs("span",{style:{fontSize:S<768?"0.9rem":"1rem",color:"#64748b",display:"flex",alignItems:"center",gap:"0.5rem"},children:["📍 ",g==null?void 0:g.location]})]})]}),i.jsx("p",{style:{marginBottom:"1.5rem",color:"#64748b",fontSize:S<768?"1rem":"1.2rem",lineHeight:"1.7"},children:g==null?void 0:g.description}),i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:i.jsxs("span",{style:{fontSize:S<768?"0.9rem":"1rem",color:((dt=ge.find(J=>J.id===(g==null?void 0:g.category)))==null?void 0:dt.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"1px",background:`rgba(${(ft=ge.find(J=>J.id===(g==null?void 0:g.category)))==null?void 0:ft.color.slice(1).match(/.{2}/g).map(J=>parseInt(J,16)).join(", ")}, 0.1)`||"rgba(100, 116, 139, 0.1)",padding:"0.75rem 1.5rem",borderRadius:"25px"},children:[(aa=ge.find(J=>J.id===(g==null?void 0:g.category)))==null?void 0:aa.icon," ",g==null?void 0:g.category]})})]}),(g==null?void 0:g.gallery)&&i.jsxs("div",{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100%",display:"flex",justifyContent:"space-between",padding:S<768?"0 1rem":"0 2rem",zIndex:10,pointerEvents:"none"},children:[i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:S<768?"50px":"70px",height:S<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:S<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>Q("prev"),onMouseEnter:J=>{S>=768&&(J.currentTarget.style.background="#2c3e50",J.currentTarget.style.transform="scale(1.1) rotateZ(-10deg)")},onMouseLeave:J=>{S>=768&&(J.currentTarget.style.background="rgba(0, 0, 0, 0.7)",J.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"‹"}),i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:S<768?"50px":"70px",height:S<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:S<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>Q("next"),onMouseEnter:J=>{S>=768&&(J.currentTarget.style.background="#2c3e50",J.currentTarget.style.transform="scale(1.1) rotateZ(10deg)")},onMouseLeave:J=>{S>=768&&(J.currentTarget.style.background="rgba(0, 0, 0, 0.7)",J.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"›"})]})]})})]})},wp=()=>{const[r,s]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=v.useState({message:"",isError:!1,isSubmitting:!1}),d=v.useRef(null),f=v.useRef(null);v.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(y=>{y.isIntersecting&&(y.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const g=b=>{const{name:p,value:y}=b.target;s(A=>({...A,[p]:y}))},x=()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),s({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"contact",className:"contact-section",ref:d,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:"heading-container",ref:f,children:[i.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),i.jsxs("div",{className:"contact-container",children:[i.jsxs("div",{className:"contact-info",children:[i.jsx("div",{className:"contact-map",children:i.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6050645764435!2d77.5693744!3d12.9330859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15515dc1da7d%3A0xcd0ee36e6cf73082!2sPavan%20Techno%20Constructions!5e0!3m2!1sen!2sin!4v1738318615550!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Pavan Techno Constructions Location"})}),i.jsxs("div",{className:"contact-details",children:[i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"0.8s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Our Location"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.0s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Call Us"}),i.jsx("p",{children:"+91 9738906052"}),i.jsx("p",{children:"+91 8722906052"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.2s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Email Us"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]}),i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:g})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:r.package,onChange:g,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:g})]}),i.jsx("div",{className:"form-status",children:u.message&&i.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),i.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[i.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},wn=()=>{const r=new Date().getFullYear(),[s,u]=v.useState(!1),[c,d]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const x=()=>{d(window.innerWidth)};return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[]),v.useEffect(()=>{const x=new IntersectionObserver(p=>{p.forEach(y=>{y.isIntersecting&&u(!0)})},{threshold:.1}),b=document.querySelector(".footer");return b&&x.observe(b),()=>{b&&x.unobserve(b)}},[]);const f=[{icon:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",href:"https://www.facebook.com/profile.php?id=61575157293939#",label:"Facebook"},{icon:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",href:"https://www.instagram.com/pavantechnoconstructions/",label:"Instagram"}],g=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},{name:"Pricing",href:"#pricing"},{name:"Gallery",href:"#gallery"},{name:"Contact",href:"#contact"}];return i.jsxs(i.Fragment,{children:[i.jsxs("footer",{className:`footer ${s?"visible":""}`,children:[i.jsxs("div",{className:"footer-bg-elements",children:[i.jsx("div",{className:"bg-circle-1"}),i.jsx("div",{className:"bg-circle-2"}),i.jsx("div",{className:"bg-square-1"}),i.jsx("div",{className:"bg-triangle-1"})]}),i.jsx("div",{className:"footer-top",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-info",children:[i.jsx("div",{className:"footer-branding",children:i.jsx("div",{className:"footer-logo",children:i.jsxs("div",{style:{display:"inline-flex",alignItems:"center",background:"linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)",padding:"10px 15px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.12)",marginBottom:"20px",border:"1px solid rgba(255, 255, 255, 0.2)"},children:[i.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"50%",overflow:"hidden",marginRight:"12px",border:"2px solid #B79C5C"},children:i.jsx("img",{src:"/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg",alt:"Pavan Techno Constructions",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:"0",fontSize:"18px",fontWeight:"700",color:"#1e293b",letterSpacing:"0.5px",lineHeight:"1.2"},children:"PAVAN TECHNO"}),i.jsx("p",{style:{margin:"2px 0 0 0",fontSize:"14px",color:"#B79C5C",fontWeight:"500",letterSpacing:"1px"},children:"CONSTRUCTIONS"})]})]})})}),i.jsx("p",{children:"We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. With over 9 years of experience, we've built a foundation of trust, ethics, and shared success."}),i.jsx("div",{className:"social-links",children:f.map((x,b)=>i.jsx("a",{href:x.href,className:"social-link","aria-label":x.label,style:{animationDelay:`${b*.1}s`},children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:x.icon})})},b))})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Quick Links"}),i.jsx("ul",{children:g.map((x,b)=>i.jsx("li",{style:{animationDelay:`${b*.1}s`},children:i.jsx("a",{href:x.href,children:x.name})},b))})]}),i.jsxs("div",{className:"footer-contact",children:[i.jsx("h4",{children:"Contact Us"}),i.jsxs("div",{className:"contact-items",children:[i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.2s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Address"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.4s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Phone"}),i.jsxs("p",{children:["+91 9738906052",i.jsx("br",{}),"+91 8722906052"]})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.6s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Email"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]})]})})}),i.jsx("div",{className:"footer-bottom",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsxs("p",{children:["© ",r," All Rights Reserved By"," ",i.jsx("a",{href:"https://gconnectsolutions.com/",target:"_blank",rel:"noopener noreferrer",children:"G Connect Solutions"})]}),i.jsxs("div",{className:"footer-policy",children:[i.jsx("a",{href:"Privacy.html",children:"Privacy Policy"}),i.jsx("span",{className:"separator",children:"|"}),i.jsx("a",{href:"#terms",children:"Terms of Service"})]})]})})})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},p5=({closePopup:r})=>{const[s,u]=v.useState({name:"",email:"",phone:"",service:"",message:""});v.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]);const c=f=>{const{name:g,value:x}=f.target;u(b=>({...b,[g]:x}))},d=f=>{if(f.preventDefault(),!s.name||!s.email||!s.phone||!s.service||!s.message){alert("Please fill in all required fields.");return}alert("Form submitted successfully! We will contact you soon."),r()};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"popup-overlay",onClick:r,children:i.jsxs("div",{className:"popup-container",onClick:f=>f.stopPropagation(),children:[i.jsx("button",{className:"close-popup",onClick:r,children:"×"}),i.jsxs("div",{className:"popup-header",children:[i.jsx("div",{className:"header-icon",children:i.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:i.jsx("path",{d:"M3 8L12 13L21 8M3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx("h3",{children:"Get Your Quote"}),i.jsx("p",{children:"Fill out the form below and we'll get back to you within 24 hours"})]}),i.jsxs("div",{className:"popup-form",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-name",children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",id:"popup-name",className:"form-control",placeholder:"Enter your full name",value:s.name,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-email",children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",id:"popup-email",className:"form-control",placeholder:"Enter your email",value:s.email,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-phone",children:"Phone Number *"}),i.jsx("input",{type:"tel",name:"phone",id:"popup-phone",className:"form-control",placeholder:"Enter your phone number",value:s.phone,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-service",children:"Package *"}),i.jsxs("select",{name:"service",id:"popup-service",className:"form-control",value:s.service,onChange:c,required:!0,children:[i.jsx("option",{value:"",disabled:!0,children:"Select a package"}),i.jsx("option",{value:"Basic Package",children:"Basic Package - RS.1600/- + GST"}),i.jsx("option",{value:"Premium Package",children:"Premium Package - RS.1800/- + GST"}),i.jsx("option",{value:"Luxury Package",children:"Luxury Package - RS.2150/- + GST"})]})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{htmlFor:"popup-message",children:"Project Details *"}),i.jsx("textarea",{name:"message",id:"popup-message",rows:"4",className:"form-control",placeholder:"Tell us about your construction project...",value:s.message,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"Cancel"}),i.jsx("button",{type:"button",className:"btn btn-primary",onClick:d,children:"Submit Request"})]})]})]})}),i.jsx("style",{jsx:!0,global:!0,children:`
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
      `})]})},g5="/pavan-techno-constructions/assets/s-1-D80USzrT.jpg",h5="/pavan-techno-constructions/assets/arti-D1dJ_XDz.jpg",x5="/pavan-techno-constructions/assets/rs-BDWbg-Wg.jpg",b5="/pavan-techno-constructions/assets/ld-BqerUQ4p.jpg",y5="/pavan-techno-constructions/assets/interior-BlveVF9V.webp",v5="/pavan-techno-constructions/assets/cs1-T7T-fMyg.png",w5=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState(null),[f,g]=v.useState("workshop"),[x,b]=v.useState("overview"),p=v.useRef(null);v.useEffect(()=>{const A=new IntersectionObserver(E=>{E.forEach(k=>{k.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&A.observe(p.current),()=>{p.current&&A.unobserve(p.current)}},[]);const y=[{id:1,title:"Building Construction",icon:"🏗️",image:g5,description:"From start to end, whether it's residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",features:["Residential Projects","Commercial Buildings","Quality Materials","Durable Construction"],price:"Starting from ₹1,600/sq ft",category:"structural"},{id:2,title:"Architectural Services",icon:"📐",image:h5,description:"We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",features:["Conceptual Designs","Floor Planning","Site Plans","Dream Home Consultation"],price:"Starting from ₹25/sq ft",category:"design"},{id:3,title:"Renovation",icon:"🔨",image:x5,description:"We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",features:["Commercial Renovation","Residential Makeover","Factory Layout","Custom Redesigns"],price:"Starting from ₹600/sq ft",category:"renovation"},{id:4,title:"Layout Development",icon:"📋",image:b5,description:"Our layout development expertise is designed to transform your project goals into reality, which is a perfect balance of form and function.",features:["Project Planning","Space Optimization","Functional Design","Goal-oriented Solutions"],price:"Starting from ₹35/sq ft",category:"planning"},{id:5,title:"Interior Designing",icon:"🎨",image:y5,description:"We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life.",features:["Commercial Interiors","Residential Design","Industrial Spaces","Concept to Completion"],price:"Starting from ₹800/sq ft",category:"interiors"},{id:6,title:"Customer Satisfaction",icon:"⭐",image:v5,description:"Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations.",features:["Expert Consultation","Dream Home Planning","Quality Assurance","Client-focused Approach"],price:"Included in all services",category:"support"}];return i.jsxs("div",{className:"workshop-page",ref:p,children:[i.jsx("div",{className:"workshop-header",children:i.jsxs("div",{className:"header-grid",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"PROJECT:"}),i.jsx("span",{className:"label-value",children:"CONSTRUCTION SERVICES"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"COMPANY:"}),i.jsx("span",{className:"label-value",children:"PAVAN TECHNO CONSTRUCTIONS"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"STATUS:"}),i.jsx("span",{className:"label-value",children:"ACTIVE OPERATIONS"})]}),i.jsx("h1",{className:`workshop-title ${s?"visible":""}`,children:"CONSTRUCTION SERVICES"}),i.jsx("p",{className:`workshop-subtitle ${s?"visible":""}`,children:"Professional construction services delivered through specialized workstations"}),i.jsxs("div",{className:"view-selector",children:[i.jsxs("button",{className:`selector-btn ${f==="workshop"?"active":""}`,onClick:()=>g("workshop"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Workshop View"]}),i.jsxs("button",{className:`selector-btn ${f==="catalog"?"active":""}`,onClick:()=>g("catalog"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Service Catalog"]})]})]})]})}),f==="workshop"&&i.jsx("div",{className:"workshop-floor",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"floor-plan",children:[i.jsxs("div",{className:"plan-header",children:[i.jsx("h2",{children:"WORKSHOP FLOOR PLAN"}),i.jsx("div",{className:"plan-details"})]}),i.jsx("div",{className:"workstations-grid",children:y.map((A,E)=>i.jsx("div",{className:`workstation ${c===A.id?"active":""}`,onClick:()=>d(c===A.id?null:A.id),children:i.jsxs("div",{className:"station-frame",children:[i.jsxs("div",{className:"frame-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"station-header",children:[i.jsxs("div",{className:"station-id",children:[" ",A.station]}),i.jsx("div",{className:"station-code",children:A.code})]}),i.jsxs("div",{className:"station-image",children:[i.jsx("img",{src:A.image,alt:A.title}),i.jsx("div",{className:"image-overlay",children:i.jsx("div",{className:"overlay-icon",children:A.icon})})]}),i.jsxs("div",{className:"station-info",children:[i.jsx("h3",{children:A.title}),i.jsx("div",{className:"station-status",children:i.jsx("span",{className:"status-dot"})})]}),c===A.id&&i.jsxs("div",{className:"station-details",children:[i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"SERVICE OVERVIEW"}),i.jsx("p",{children:A.description})]}),i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"KEY FEATURES"}),i.jsx("div",{className:"features-grid",children:A.features.map((k,M)=>i.jsxs("div",{className:"feature-item",children:[i.jsx("span",{className:"feature-bullet",children:"●"}),k]},M))})]}),i.jsxs("div",{className:"pricing-section",children:[i.jsxs("div",{className:"price-info",children:[i.jsx("span",{className:"price-label",children:"PRICING:"}),i.jsx("span",{className:"price-value",children:A.price})]}),i.jsxs("button",{className:"quote-btn",onClick:r,children:["REQUEST QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})]})]})]})},A.id))})]})})}),f==="catalog"&&i.jsx("div",{className:"service-catalog",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"catalog-header",children:[i.jsx("h2",{children:"SERVICE CATALOG"}),i.jsxs("div",{className:"catalog-tabs",children:[i.jsx("button",{className:`tab-btn ${x==="overview"?"active":""}`,onClick:()=>b("overview"),children:"OVERVIEW"}),i.jsx("button",{className:`tab-btn ${x==="technical"?"active":""}`,onClick:()=>b("technical"),children:"TECHNICAL SPECS"}),i.jsx("button",{className:`tab-btn ${x==="pricing"?"active":""}`,onClick:()=>b("pricing"),children:"PRICING"})]})]}),i.jsx("div",{className:"catalog-content",children:y.map(A=>i.jsxs("div",{className:"catalog-item",children:[i.jsxs("div",{className:"item-header",children:[i.jsxs("div",{className:"item-id",children:[i.jsx("span",{className:"item-code",children:A.code}),i.jsx("span",{className:"item-category",children:A.category.toUpperCase()})]}),i.jsx("h3",{children:A.title})]}),i.jsxs("div",{className:"item-body",children:[i.jsxs("div",{className:"item-image",children:[i.jsx("img",{src:A.image,alt:A.title}),i.jsx("div",{className:"item-badge",children:A.icon})]}),i.jsxs("div",{className:"item-content",children:[x==="overview"&&i.jsxs("div",{className:"overview-content",children:[i.jsx("p",{children:A.description}),i.jsx("div",{className:"features-list",children:A.features.map((E,k)=>i.jsx("span",{className:"feature-tag",children:E},k))})]}),x==="technical"&&i.jsx("div",{className:"technical-content",children:i.jsx("div",{className:"tech-specs",children:Object.entries(A.specifications).map(([E,k])=>i.jsxs("div",{className:"tech-row",children:[i.jsx("span",{className:"tech-label",children:E}),i.jsx("span",{className:"tech-value",children:k})]},E))})}),x==="pricing"&&i.jsxs("div",{className:"pricing-content",children:[i.jsx("div",{className:"price-display",children:i.jsx("span",{className:"price-amount",children:A.price})}),i.jsx("button",{className:"catalog-quote-btn",onClick:r,children:"GET DETAILED QUOTE"})]})]})]})]},A.id))})]})}),i.jsxs("div",{className:"performance-metrics",children:[i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"98%"}),i.jsx("div",{className:"metric-label",children:"Project Completion Rate"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"250+"}),i.jsx("div",{className:"metric-label",children:"Projects Delivered"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"15+"}),i.jsx("div",{className:"metric-label",children:"Years Experience"})]}),i.jsxs("div",{className:"metric-card",children:[i.jsx("div",{className:"metric-value",children:"92%"}),i.jsx("div",{className:"metric-label",children:"Client Satisfaction"})]})]}),i.jsx("div",{className:"quality-section",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"quality-grid",children:i.jsxs("div",{className:"quality-content",children:[i.jsx("div",{className:"content-header",children:i.jsx("h2",{children:"QUALITY ASSURANCE PROTOCOL"})}),i.jsxs("div",{className:"assurance-items",children:[i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"01"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"15+ Years Experience"}),i.jsx("p",{children:"Proven track record in delivering quality construction projects across various sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"02"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"60+ Projects Completed"}),i.jsx("p",{children:"Successfully delivered projects across residential, commercial, and industrial sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"03"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"Quality Materials"}),i.jsx("p",{children:"We use only premium quality materials from trusted suppliers ensuring longevity"})]})]})]})]})})})}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},S5=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState("residential"),[f,g]=v.useState(null),[x,b]=v.useState("estimates"),p=v.useRef(null);v.useEffect(()=>{const k=new IntersectionObserver(M=>{M.forEach(G=>{G.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&k.observe(p.current),()=>{p.current&&k.unobserve(p.current)}},[]);const y=[{id:"residential",label:"RESIDENTIAL",icon:"🏠",color:"#B79C5C"},{id:"commercial",label:"COMMERCIAL",icon:"🏢",color:"#2D3748"},{id:"interior",label:"INTERIOR",icon:"🎨",color:"#B79C5C"},{id:"renovation",label:"RENOVATION",icon:"🔨",color:"#2D3748"}],E={residential:[{title:"STANDARD RESIDENTIAL",baseRate:"₹1,600",totalCost:"₹16,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Cost-effective residential construction with standard specifications",costBreakdown:{"Site Preparation":"8%","Foundation Work":"15%","Structural Framework":"25%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"18%","Finishing & Paint":"15%","Fixtures & Fittings":"7%"},included:["Architectural Planning","Structural Design","Site Supervision","Quality Control","Material Supply","Labor Management"],status:"STANDARD"},{title:"PREMIUM RESIDENTIAL",baseRate:"₹2,200",totalCost:"₹22,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Enhanced residential construction with premium specifications",costBreakdown:{"Site Preparation":"6%","Foundation Work":"14%","Structural Framework":"24%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"20%","Finishing & Paint":"18%","Fixtures & Fittings":"6%"},included:["3D Architectural Design","Structural Engineering","Project Management","Quality Assurance","Premium Material Supply","Skilled Labor Team","Interior Consultation"],status:"RECOMMENDED"},{title:"LUXURY RESIDENTIAL",classification:"LUXURY CLASS",baseRate:"₹3,500",totalCost:"₹35,00,000",area:"1000 sq ft",timeline:"12-15 months",description:"High-end residential construction with luxury specifications",costBreakdown:{"Site Preparation":"5%","Foundation Work":"12%","Structural Framework":"22%","Roofing & Waterproofing":"10%","Electrical & Plumbing":"22%","Finishing & Paint":"22%","Fixtures & Fittings":"7%"},specifications:["Steel Frame Structure","Imported Premium Materials","Smart Home Automation","Luxury Plumbing Systems","Marble & Hardwood Flooring","Designer Paint & Textures","24 Months Warranty"],included:["Custom Architectural Design","Structural Engineering","Project Management","Quality Control","Luxury Material Supply","Expert Craftsmen","Interior Design","Landscape Planning"],compliance:["NBC 2016","IS Codes","Green Building","LEED Standards"],status:"PREMIUM"}],commercial:[{title:"STANDARD COMMERCIAL",code:"COM-STD-001",classification:"COMMERCIAL GRADE",baseRate:"₹1,800",totalCost:"₹18,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Standard commercial construction for offices and retail",costBreakdown:{"Site Preparation":"7%","Foundation Work":"16%","Structural Framework":"28%","Roofing & Waterproofing":"10%","Electrical & HVAC":"20%",Finishing:"14%","Commercial Fittings":"5%"},specifications:["Commercial RCC Structure","Fire-Resistant Materials","Commercial Electrical Setup","HVAC Ready Infrastructure","Commercial Grade Flooring","Weather Resistant Finishes","12 Months Warranty"],included:["Commercial Planning","Structural Design","MEP Engineering","Project Coordination","Material Supply","Commercial Installation"],compliance:["NBC 2016","Fire Safety","Commercial Codes"],status:"STANDARD"},{title:"PREMIUM COMMERCIAL",code:"COM-PREM-002",classification:"PREMIUM COMMERCIAL",baseRate:"₹2,800",totalCost:"₹28,00,000",area:"1000 sq ft",timeline:"10-12 months",description:"Modern commercial construction with advanced systems",costBreakdown:{"Site Preparation":"6%","Foundation Work":"15%","Structural Framework":"26%","Roofing & Waterproofing":"9%","Electrical & HVAC":"24%",Finishing:"16%","Premium Fittings":"4%"},specifications:["Steel Frame Commercial","Premium Fire Safety Systems","Advanced Electrical & HVAC","Smart Building Infrastructure","Premium Commercial Flooring","High-Performance Finishes","18 Months Warranty"],included:["Modern Commercial Design","MEP Engineering","Building Automation","Project Management","Premium Materials","Professional Installation","System Integration"],compliance:["NBC 2016","Fire Safety","Green Building","IGBC"],status:"RECOMMENDED"},{title:"LUXURY COMMERCIAL",code:"COM-LUX-003",classification:"LUXURY COMMERCIAL",baseRate:"₹4,200",totalCost:"₹42,00,000",area:"1000 sq ft",timeline:"12-18 months",description:"High-end commercial spaces with luxury finishes",costBreakdown:{"Site Preparation":"4%","Foundation Work":"13%","Structural Framework":"24%","Roofing & Waterproofing":"8%","Electrical & HVAC":"26%",Finishing:"20%","Luxury Fittings":"5%"},specifications:["Premium Steel Structure","Luxury Fire Safety Systems","Smart Building Automation","Advanced HVAC Systems","Luxury Commercial Flooring","Designer Finishes","24 Months Warranty"],included:["Luxury Commercial Design","Advanced MEP Systems","Building Management Systems","Project Management","Luxury Materials","Expert Installation","Complete Integration","Maintenance Package"],compliance:["NBC 2016","LEED Platinum","Green Building","IGBC"],status:"PREMIUM"}],interior:[{title:"BASIC INTERIOR",code:"INT-BAS-001",classification:"ESSENTIAL INTERIOR",baseRate:"₹800",totalCost:"₹8,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential interior design and execution",costBreakdown:{"Space Planning":"10%","Electrical Work":"20%","Furniture & Fixtures":"35%","Flooring & Tiling":"15%","Paint & Finishes":"12%",Installation:"8%"},specifications:["Basic Space Planning","Standard Lighting","Modular Furniture","Laminate Flooring","Standard Paint","Basic Fixtures","6 Months Warranty"],included:["Interior Planning","Furniture Design","Electrical Layout","Material Supply","Installation Service","Basic Styling"],compliance:["Interior Standards","Safety Codes"],status:"STANDARD"},{title:"PREMIUM INTERIOR",code:"INT-PREM-002",classification:"DESIGNER INTERIOR",baseRate:"₹1,500",totalCost:"₹15,00,000",area:"1000 sq ft",timeline:"3-4 months",description:"Complete interior design transformation",costBreakdown:{"Design & Planning":"12%","Electrical & Lighting":"22%","Custom Furniture":"30%","Premium Flooring":"18%","Designer Finishes":"15%",Installation:"3%"},specifications:["Professional Space Planning","Designer Lighting Solutions","Custom Furniture Design","Premium Flooring Options","Designer Paint & Textures","Premium Fixtures","12 Months Warranty"],included:["3D Interior Design","Custom Furniture","Lighting Design","Premium Materials","Professional Installation","Interior Styling","Project Management"],compliance:["Interior Standards","Design Codes","Safety Standards"],status:"RECOMMENDED"},{title:"LUXURY INTERIOR",code:"INT-LUX-003",classification:"LUXURY INTERIOR",baseRate:"₹2,500",totalCost:"₹25,00,000",area:"1000 sq ft",timeline:"4-6 months",description:"Bespoke luxury interior design",costBreakdown:{"Luxury Design":"15%","Smart Lighting":"20%","Bespoke Furniture":"25%","Luxury Flooring":"20%","Designer Finishes":"17%",Installation:"3%"},specifications:["Luxury Space Planning","Smart Lighting Systems","Bespoke Furniture","Luxury Flooring Materials","Designer Paint & Textures","Luxury Fixtures & Art","18 Months Warranty"],included:["Luxury Interior Design","Bespoke Furniture","Smart Home Integration","Luxury Materials","Expert Installation","Interior Styling","Project Management","Maintenance Package"],compliance:["Luxury Standards","Design Excellence","Safety Codes"],status:"PREMIUM"}],renovation:[{title:"BASIC RENOVATION",classification:"ESSENTIAL RENOVATION",baseRate:"₹600",totalCost:"₹6,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential renovation and repair work",costBreakdown:{"Assessment & Planning":"8%",Demolition:"15%","Structural Repairs":"25%","Electrical Updates":"20%","Plumbing Updates":"15%","Finishing Work":"17%"},specifications:["Structural Assessment","Basic Electrical Updates","Plumbing Repairs","Standard Paint Refresh","Basic Fixture Replacement","Cleaning Service","6 Months Warranty"],included:["Renovation Planning","Demolition Work","Basic Repairs","Material Supply","Installation Service","Cleanup"],compliance:["Building Codes","Safety Standards"],status:"STANDARD"},{title:"COMPLETE RENOVATION",classification:"COMPREHENSIVE RENOVATION",baseRate:"₹1,200",totalCost:"₹12,00,000",area:"1000 sq ft",timeline:"4-5 months",description:"Complete renovation with modern upgrades",costBreakdown:{"Planning & Design":"10%",Demolition:"12%","Structural Work":"22%","Electrical Upgrade":"22%","Plumbing Upgrade":"18%","Premium Finishing":"16%"},specifications:["Complete Renovation Design","Modern Electrical Systems","Advanced Plumbing","Premium Paint & Finishes","Modern Fixture Installation","Structural Modifications","12 Months Warranty"],included:["Renovation Design","Comprehensive Demolition","System Upgrades","Premium Materials","Professional Installation","Project Management","Deep Cleaning"],compliance:["NBC 2016","Safety Standards","Modern Codes"],status:"RECOMMENDED"},{title:"LUXURY RENOVATION",classification:"LUXURY RENOVATION",baseRate:"₹2,000",totalCost:"₹20,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Premium renovation with luxury upgrades",costBreakdown:{"Luxury Design":"12%","Selective Demolition":"10%","Premium Structural":"20%","Smart Electrical":"24%","Luxury Plumbing":"20%","Designer Finishing":"14%"},specifications:["Luxury Renovation Design","Smart Home Integration","Luxury Plumbing Systems","Designer Finishes","Luxury Fixture Installation","Architectural Modifications","18 Months Warranty"],included:["Luxury Design Planning","Precision Demolition","Premium Upgrades","Luxury Materials","Expert Installation","Project Management","Professional Staging","Maintenance Package"],compliance:["NBC 2016","Luxury Standards","Green Building"],status:"PREMIUM"}]}[c];return i.jsxs("div",{className:"estimation-lab",ref:p,children:[i.jsx("div",{className:"lab-header",children:i.jsxs("div",{className:"header-frame",children:[i.jsxs("div",{className:"blueprint-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"lab-info",children:[i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PROJECT TYPE:"}),i.jsx("span",{className:"info-value",children:"CONSTRUCTION COST ESTIMATION"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PRICING STRUCTURE:"}),i.jsx("span",{className:"info-value",children:"TRANSPARENT & COMPETITIVE"})]})]}),i.jsx("h1",{className:`lab-title ${s?"visible":""}`,children:"CONSTRUCTION PRICING"}),i.jsx("p",{className:`lab-subtitle ${s?"visible":""}`,children:"Professional cost estimation and project analysis for construction projects"}),i.jsxs("div",{className:"view-controls",children:[i.jsxs("button",{className:`control-btn ${x==="estimates"?"active":""}`,onClick:()=>b("estimates"),children:[i.jsx("span",{className:"btn-icon",children:"📋"}),"Cost Estimates"]}),i.jsxs("button",{className:`control-btn ${x==="breakdown"?"active":""}`,onClick:()=>b("breakdown"),children:[i.jsx("span",{className:"btn-icon",children:"📊"}),"Cost Breakdown"]})]})]})]})}),i.jsx("div",{className:"category-lab",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"lab-section-header",children:[i.jsx("h2",{children:"PROJECT CLASSIFICATION"}),i.jsx("div",{className:"classification-grid",children:y.map(k=>i.jsxs("div",{className:`classification-card ${c===k.id?"active":""}`,onClick:()=>d(k.id),children:[i.jsxs("div",{className:"card-header",children:[i.jsx("div",{className:"card-code",children:k.code}),i.jsx("div",{className:"card-icon",children:k.icon})]}),i.jsx("div",{className:"card-title",children:k.label}),i.jsxs("div",{className:"card-status",children:[i.jsx("span",{className:"status-indicator"}),"AVAILABLE"]})]},k.id))})]})})}),x==="estimates"&&i.jsx("div",{className:"estimates-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"estimates-header",children:[i.jsxs("h2",{children:["PROJECT ESTIMATES - ",c.toUpperCase()]}),i.jsx("div",{className:"estimates-meta"})]}),i.jsx("div",{className:"estimates-grid",children:E.map((k,M)=>i.jsxs("div",{className:`estimate-sheet ${k.status.toLowerCase()}`,onClick:()=>g(f===M?null:M),children:[i.jsxs("div",{className:"sheet-header",children:[i.jsxs("div",{className:"estimate-id",children:[i.jsx("span",{className:"id-code",children:k.code}),i.jsx("span",{className:"id-class",children:k.classification})]}),i.jsx("div",{className:"estimate-status",children:i.jsx("span",{className:`status-badge ${k.status.toLowerCase()}`,children:k.status})})]}),i.jsxs("div",{className:"sheet-content",children:[i.jsx("h3",{children:k.title}),i.jsx("p",{className:"estimate-description",children:k.description}),i.jsxs("div",{className:"cost-display",children:[i.jsxs("div",{className:"base-rate",children:[i.jsx("span",{className:"rate-label",children:"BASE RATE:"}),i.jsxs("span",{className:"rate-value",children:[k.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"total-cost",children:[i.jsx("span",{className:"cost-label",children:"ESTIMATED COST:"}),i.jsx("span",{className:"cost-value",children:k.totalCost})]})]}),i.jsxs("div",{className:"project-specs",children:[i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"AREA:"}),i.jsx("span",{className:"spec-value",children:k.area})]}),i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"TIMELINE:"}),i.jsx("span",{className:"spec-value",children:k.timeline})]})]}),f===M&&i.jsxs("div",{className:"detailed-estimate",children:[i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"COST BREAKDOWN"}),i.jsx("div",{className:"breakdown-grid",children:Object.entries(k.costBreakdown).map(([G,O])=>i.jsxs("div",{className:"breakdown-item",children:[i.jsx("span",{className:"item-name",children:G}),i.jsx("span",{className:"item-percentage",children:O})]},G))})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"INCLUDED SERVICES"}),i.jsx("div",{className:"included-grid",children:k.included.map((G,O)=>i.jsxs("div",{className:"included-item",children:[i.jsx("span",{className:"include-check",children:"✓"}),G]},O))})]}),i.jsx("div",{className:"estimate-footer",children:i.jsxs("button",{className:"request-quote-btn",onClick:r,children:["REQUEST DETAILED QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})})]})]})]},M))})]})}),x==="breakdown"&&i.jsx("div",{className:"breakdown-section",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"breakdown-header",children:i.jsxs("h2",{children:["COST ANALYSIS - ",c.toUpperCase()]})}),i.jsx("div",{className:"analysis-grid",children:E.map((k,M)=>i.jsxs("div",{className:"analysis-card",children:[i.jsxs("div",{className:"analysis-header",children:[i.jsx("h3",{children:k.title}),i.jsx("div",{className:"analysis-code",children:k.code})]}),i.jsxs("div",{className:"cost-chart",children:[i.jsx("div",{className:"chart-title",children:"COST DISTRIBUTION"}),i.jsx("div",{className:"chart-bars",children:Object.entries(k.costBreakdown).map(([G,O],L)=>i.jsxs("div",{className:"chart-bar",children:[i.jsxs("div",{className:"bar-info",children:[i.jsx("span",{className:"bar-label",children:G}),i.jsx("span",{className:"bar-percentage",children:O})]}),i.jsx("div",{className:"bar-visual",children:i.jsx("div",{className:"bar-fill",style:{width:O}})})]},L))})]}),i.jsxs("div",{className:"analysis-summary",children:[i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Base Rate:"}),i.jsxs("span",{children:[k.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Total Cost:"}),i.jsx("span",{children:k.totalCost})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Timeline:"}),i.jsx("span",{children:k.timeline})]})]})]},M))})]})}),i.jsx("div",{className:"lab-statistics",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"stats-frame",children:[i.jsx("div",{className:"stats-header",children:i.jsx("h2",{children:"ESTIMATION LAB METRICS"})}),i.jsxs("div",{className:"metrics-grid",children:[i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"📋"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"60+"}),i.jsx("span",{className:"metric-label",children:"Estimates Delivered"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"💰"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"95%"}),i.jsx("span",{className:"metric-label",children:"Cost Accuracy"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"⏱️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"24hrs"}),i.jsx("span",{className:"metric-label",children:"Quote Turnaround"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"🛡️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"100%"}),i.jsx("span",{className:"metric-label",children:"Transparency"})]})]})]})]})})}),i.jsx("style",{jsx:!0,children:`
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
          
      `})]})},j5="/pavan-techno-constructions/assets/a1-sGu83T9_.gif",C5="/pavan-techno-constructions/assets/a2-CyeHT3-A.gif",A5="/pavan-techno-constructions/assets/a3-CwZT0UDn.gif",E5="/pavan-techno-constructions/assets/a4-Bt8HQudn.gif",N5="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",Sp="/pavan-techno-constructions/assets/after2-CC4aGAP5.jpeg",T5="/pavan-techno-constructions/assets/g4-DQasg1Pq.jpeg",z5="/pavan-techno-constructions/assets/g5-CXXSX8Ar.jpeg",k5="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",R5="/pavan-techno-constructions/assets/g8-C0Sbs0mt.jpeg",M5="/pavan-techno-constructions/assets/g10-CtDg70wl.jpeg",O5="/pavan-techno-constructions/assets/g11-CtfksAgD.jpg",D5="/pavan-techno-constructions/assets/g12-DZXer8D9.jpg",B5="/pavan-techno-constructions/assets/gettyimages-2196182262-612x612-BWLgUfjY.jpg",L5="/pavan-techno-constructions/assets/gettyimages-1466540596-612x612-BauWDmSq.jpg",Y5="/pavan-techno-constructions/assets/gettyimages-1194207037-612x612-COrgk-1S.jpg",U5="/pavan-techno-constructions/assets/gettyimages-1175826983-612x612-BEg54zBp.jpg",_5="/pavan-techno-constructions/assets/AdobeStock_513154782_Preview-dPWSckgj.jpeg",H5="/pavan-techno-constructions/assets/house-for-sale-thrissur-kalathode-CWPHWDyU.jpg",q5="/pavan-techno-constructions/assets/19958_file_5c7a5ba545f89-C-ILB962.jpg",X5=()=>{const[r,s]=v.useState(!1),[u,c]=v.useState(""),[d,f]=v.useState(!1),[g,x]=v.useState(null),[b,p]=v.useState("featured"),[y,A]=v.useState("blueprint"),E=v.useRef(null),k=v.useRef(null),M=v.useRef(null),G=Q=>{const le=E.current,fe=k.current,ae=M.current;if(!le||!fe||!ae)return;const re=le.getBoundingClientRect();let Y=Q.pageX-re.left;Y<0&&(Y=0),Y>re.width&&(Y=re.width),fe.style.clipPath=`inset(0 ${re.width-Y}px 0 0)`,ae.style.left=`${Y}px`},O=()=>f(!0),L=()=>f(!1),S=Q=>{d&&G(Q)},W=()=>f(!0),K=()=>f(!1),Z=Q=>{if(d){const le=Q.touches[0];G(le)}};v.useEffect(()=>(window.addEventListener("mouseup",L),window.addEventListener("mousemove",S),window.addEventListener("touchend",K),window.addEventListener("touchmove",Z),()=>{window.removeEventListener("mouseup",L),window.removeEventListener("mousemove",S),window.removeEventListener("touchend",K),window.removeEventListener("touchmove",Z)}),[d]);const ge={featured:[{src:Sp,title:"Residential Transformation",type:"Renovation",year:"2024",area:"2,500 sq ft",duration:"6 months"},{src:M5,title:"Commercial Complex",type:"New Construction",year:"2024",area:"15,000 sq ft",duration:"18 months"}],residential:[{src:T5,title:"Modern Villa",type:"Custom Home",year:"2024",area:"3,200 sq ft",duration:"8 months"},{src:z5,title:"Urban Townhouse",type:"Multi-Family",year:"2023",area:"1,800 sq ft",duration:"5 months"},{src:k5,title:"Luxury Estate",type:"High-End Residential",year:"2024",area:"6,500 sq ft",duration:"12 months"},{src:_5,title:"Contemporary Home",type:"Single Family",year:"2024",area:"2,800 sq ft",duration:"7 months"},{src:H5,title:"Traditional Villa",type:"Custom Build",year:"2023",area:"3,500 sq ft",duration:"9 months"},{src:q5,title:"Modern Bungalow",type:"Residential",year:"2024",area:"2,200 sq ft",duration:"6 months"},{src:R5,title:"Office Building",type:"Corporate",year:"2023",area:"25,000 sq ft",duration:"24 months"},{src:O5,title:"Retail Center",type:"Commercial",year:"2024",area:"12,000 sq ft",duration:"10 months"},{src:D5,title:"Industrial Facility",type:"Manufacturing",year:"2023",area:"40,000 sq ft",duration:"15 months"}],commercial:[{src:B5,title:"Modern Office Tower",type:"Corporate Headquarters",year:"2024",area:"35,000 sq ft",duration:"24 months"},{src:L5,title:"Shopping Mall Complex",type:"Retail Development",year:"2023",area:"50,000 sq ft",duration:"30 months"},{src:Y5,title:"Business Park",type:"Mixed-Use Commercial",year:"2024",area:"45,000 sq ft",duration:"28 months"},{src:U5,title:"Urban Office Space",type:"Corporate Interior",year:"2023",area:"18,000 sq ft",duration:"14 months"}],process:[{src:j5,title:"Foundation Work",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:C5,title:"Structural Development",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:A5,title:"Interior Finishing",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:E5,title:"Final Installation",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"}]},_=Q=>{c(Q),s(!0)},ie=()=>{s(!1),c("")},D=Q=>{Q.target===Q.currentTarget&&ie()},de=Q=>{p(b===Q?null:Q)};return i.jsxs("div",{className:"portfolio-page",children:[i.jsx("div",{className:"blueprint-header",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"header-grid",children:[i.jsxs("div",{className:"title-block",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsx("div",{className:"project-info",children:i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"PROJECT:"}),i.jsx("span",{className:"value",children:"CONSTRUCTION PORTFOLIO"})]})}),i.jsx("h1",{className:"main-title",children:"PROJECT GALLERY"}),i.jsx("div",{className:"title-underline"})]}),i.jsx("div",{className:"view-controls",children:i.jsxs("div",{className:"control-panel",children:[i.jsx("div",{className:"panel-header",children:"VIEW MODE"}),i.jsxs("div",{className:"mode-buttons",children:[i.jsxs("button",{className:`mode-btn ${y==="blueprint"?"active":""}`,onClick:()=>A("blueprint"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Blueprint"]}),i.jsxs("button",{className:`mode-btn ${y==="timeline"?"active":""}`,onClick:()=>A("timeline"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Timeline"]})]})]})})]})})}),i.jsx("div",{className:"technical-section",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"drawing-header",children:i.jsx("h2",{children:"BEFORE & AFTER ANALYSIS"})}),i.jsxs("div",{className:"blueprint-frame",children:[i.jsxs("div",{className:"frame-markers",children:[i.jsx("div",{className:"marker top-left",children:"A"}),i.jsx("div",{className:"marker top-right",children:"B"}),i.jsx("div",{className:"marker bottom-left",children:"C"}),i.jsx("div",{className:"marker bottom-right",children:"D"})]}),i.jsxs("div",{className:"comparison-wrapper",ref:E,children:[i.jsx("img",{src:N5,alt:"Before",className:"before-image",ref:k}),i.jsx("img",{src:Sp,alt:"After",className:"after-image"}),i.jsx("div",{className:"technical-slider",ref:M,onMouseDown:O,onTouchStart:W,children:i.jsxs("div",{className:"slider-guide",children:[i.jsx("div",{className:"guide-line"}),i.jsx("div",{className:"slider-handle",children:i.jsxs("div",{className:"handle-cross",children:[i.jsx("div",{className:"cross-h"}),i.jsx("div",{className:"cross-v"})]})})]})}),i.jsxs("div",{className:"technical-label before",children:[i.jsx("div",{className:"label-box",children:"BEFORE"}),i.jsx("div",{className:"dimension-line"})]}),i.jsxs("div",{className:"technical-label after",children:[i.jsx("div",{className:"label-box",children:"AFTER"}),i.jsx("div",{className:"dimension-line"})]})]})]})]})}),i.jsx("div",{className:"gallery-section",children:i.jsxs("div",{className:"container",children:[y==="blueprint"&&i.jsx("div",{className:"blueprint-layout",children:Object.entries(ge).map(([Q,le])=>i.jsxs("div",{className:"project-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>de(Q),children:[i.jsxs("div",{className:"section-title",children:[i.jsx("span",{className:"section-symbol",children:"■"}),Q.toUpperCase().replace("_"," "),i.jsxs("span",{className:"project-count",children:["(",le.length,")"]})]}),i.jsx("div",{className:"section-toggle",children:i.jsx("span",{className:`toggle-symbol ${b===Q?"expanded":""}`,children:"+"})})]}),i.jsx("div",{className:`section-content ${b===Q?"expanded":""}`,children:i.jsx("div",{className:"blueprint-grid",children:le.map((fe,ae)=>i.jsx("div",{className:"blueprint-card",onClick:()=>_(fe.src),children:i.jsxs("div",{className:"card-frame",children:[i.jsx("div",{className:"frame-corner tl"}),i.jsx("div",{className:"frame-corner tr"}),i.jsx("div",{className:"frame-corner bl"}),i.jsx("div",{className:"frame-corner br"}),i.jsx("img",{src:fe.src,alt:fe.title}),i.jsx("div",{className:"card-overlay",children:i.jsxs("div",{className:"project-details",children:[i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TITLE:"}),i.jsx("span",{className:"detail-value",children:fe.title})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TYPE:"}),i.jsx("span",{className:"detail-value",children:fe.type})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"YEAR:"}),i.jsx("span",{className:"detail-value",children:fe.year})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"AREA:"}),i.jsx("span",{className:"detail-value",children:fe.area})]})]})})]})},ae))})})]},Q))}),y==="timeline"&&i.jsx("div",{className:"timeline-layout",children:i.jsxs("div",{className:"timeline-axis",children:[i.jsx("div",{className:"axis-line"}),Object.values(ge).flat().map((Q,le)=>i.jsxs("div",{className:`timeline-item ${le%2===0?"left":"right"}`,onClick:()=>_(Q.src),children:[i.jsxs("div",{className:"timeline-marker",children:[i.jsx("div",{className:"marker-dot"}),i.jsx("div",{className:"marker-line"})]}),i.jsxs("div",{className:"timeline-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("span",{className:"card-year",children:Q.year}),i.jsx("span",{className:"card-type",children:Q.type})]}),i.jsx("img",{src:Q.src,alt:Q.title}),i.jsxs("div",{className:"card-info",children:[i.jsx("h3",{children:Q.title}),i.jsxs("div",{className:"card-specs",children:[i.jsx("span",{children:Q.area}),i.jsx("span",{children:Q.duration})]})]})]})]},le))]})})]})}),r&&i.jsx("div",{className:"technical-modal",onClick:D,children:i.jsxs("div",{className:"modal-frame",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("div",{className:"modal-title",children:"PROJECT DETAIL VIEW"}),i.jsx("button",{className:"modal-close",onClick:ie,children:i.jsx("span",{className:"close-symbol",children:"×"})})]}),i.jsx("div",{className:"modal-content",children:i.jsx("img",{src:u,alt:"Project Detail"})}),i.jsx("div",{className:"modal-footer",children:i.jsx("div",{className:"footer-line"})})]})}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},V5=()=>{const[r,s]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=v.useState({message:"",isError:!1,isSubmitting:!1}),d=v.useRef(null),f=v.useRef(null);v.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(y=>{y.isIntersecting&&(y.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const g=b=>{const{name:p,value:y}=b.target;s(A=>({...A,[p]:y}))},x=()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),s({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"contact-page",ref:d,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:"heading-container",ref:f,children:[i.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),i.jsx("div",{className:"form-wrapper",children:i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:g})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:r.package,onChange:g,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:g})]}),i.jsx("div",{className:"form-status",children:u.message&&i.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),i.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[i.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})})]})]}),i.jsx("style",{jsx:!0,children:`
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

        .contact-page {
          padding: 8rem 0 6rem;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
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
          width: 100%;
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

        .form-wrapper {
          display: flex;
          justify-content: center;
          opacity: 0;
        }

        .section-visible .form-wrapper {
          animation: fadeIn 1s forwards 0.5s;
        }

        .contact-form-container {
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(183, 156, 92, 0.05));
          padding: 3rem;
          border-radius: 20px;
          border: 1px solid rgba(183, 156, 92, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(20px);
          transform: translateY(30px);
          opacity: 0;
          max-width: 700px;
          width: 100%;
        }

        .section-visible .contact-form-container {
          animation: slideUp 0.8s forwards 0.8s;
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

        /* Mobile Responsiveness */
        @media (max-width: 992px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .main-heading {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-page {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1rem;
          }

          .contact-form-container {
            padding: 2rem;
          }
          
          .main-heading {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .heading-subtitle {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 576px) {
          .contact-page {
            padding: 5rem 0 3rem;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
          
          .main-heading {
            font-size: 1.8rem;
          }

          .form-header h3 {
            font-size: 1.5rem;
          }

          .btn-primary {
            padding: 1rem 2rem;
            font-size: 1rem;
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

          .main-heading {
            font-size: 1.6rem;
            letter-spacing: 1px;
          }
        }
      `})]})};function I5(){const[r,s]=v.useState(!1),[u,c]=v.useState(!1);v.useEffect(()=>{const g=()=>{window.scrollY>100?c(!0):c(!1)};return window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]);const d=()=>{s(!0)},f=()=>{s(!1)};return i.jsx(m2,{children:i.jsxs("div",{className:"app",children:[i.jsx(Ky,{scrolled:u}),i.jsxs(Vx,{children:[i.jsx(Pa,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(mp,{openPopup:d}),i.jsx(Uc,{openPopup:d}),i.jsx(gp,{}),i.jsx(hp,{openPopup:d}),i.jsx(pp,{openPopup:d}),i.jsx(_c,{openPopup:d}),i.jsx(Hc,{}),i.jsx(qc,{}),i.jsx(Xc,{}),i.jsx(yp,{}),i.jsx(vp,{}),i.jsx(wp,{}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/about",element:i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{paddingTop:"70px"},children:[i.jsx(_c,{openPopup:d}),i.jsx(Uc,{openPopup:d}),i.jsx(qc,{}),i.jsx(Xc,{}),i.jsx(Hc,{})]}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/services",element:i.jsxs(i.Fragment,{children:[i.jsx(w5,{openPopup:d}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/pricing",element:i.jsxs(i.Fragment,{children:[i.jsx(S5,{openPopup:d}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/gallery",element:i.jsxs(i.Fragment,{children:[i.jsx(X5,{}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/contact",element:i.jsxs(i.Fragment,{children:[i.jsx(V5,{}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"*",element:i.jsxs(i.Fragment,{children:[i.jsx(mp,{openPopup:d}),i.jsx(Uc,{openPopup:d}),i.jsx(gp,{}),i.jsx(hp,{openPopup:d}),i.jsx(pp,{openPopup:d}),i.jsx(_c,{openPopup:d}),i.jsx(Hc,{}),i.jsx(qc,{}),i.jsx(Xc,{}),i.jsx(yp,{}),i.jsx(vp,{}),i.jsx(wp,{}),i.jsx(wn,{})]})})]}),r&&i.jsx(p5,{closePopup:f})]})})}K1.createRoot(document.getElementById("root")).render(i.jsx(Jt.StrictMode,{children:i.jsx(I5,{})}));
