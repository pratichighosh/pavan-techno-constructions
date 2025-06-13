(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function ou(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var bc={exports:{}},fr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function D1(){if(hm)return fr;hm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:r,type:c,key:g,ref:d!==void 0?d:null,props:f}}return fr.Fragment=s,fr.jsx=u,fr.jsxs=u,fr}var xm;function B1(){return xm||(xm=1,bc.exports=D1()),bc.exports}var i=B1(),yc={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function L1(){if(bm)return be;bm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),O=Symbol.iterator;function S(j){return j===null||typeof j!="object"?null:(j=O&&j[O]||j["@@iterator"],typeof j=="function"?j:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function H(j,I,C){this.props=j,this.context=I,this.refs=_,this.updater=C||z}H.prototype.isReactComponent={},H.prototype.setState=function(j,I){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,I,"setState")},H.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function U(){}U.prototype=H.prototype;function N(j,I,C){this.props=j,this.context=I,this.refs=_,this.updater=C||z}var J=N.prototype=new U;J.constructor=N,T(J,H.prototype),J.isPureReactComponent=!0;var ee=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},me=Object.prototype.hasOwnProperty;function L(j,I,C,G,W,oe){return C=oe.ref,{$$typeof:r,type:j,key:I,ref:C!==void 0?C:null,props:oe}}function ae(j,I){return L(j.type,I,void 0,void 0,void 0,j.props)}function B(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function se(j){var I={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(C){return I[C]})}var X=/\/+/g;function ne(j,I){return typeof j=="object"&&j!==null&&j.key!=null?se(""+j.key):I.toString(36)}function $(){}function ie(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then($,$):(j.status="pending",j.then(function(I){j.status==="pending"&&(j.status="fulfilled",j.value=I)},function(I){j.status==="pending"&&(j.status="rejected",j.reason=I)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function ge(j,I,C,G,W){var oe=typeof j;(oe==="undefined"||oe==="boolean")&&(j=null);var re=!1;if(j===null)re=!0;else switch(oe){case"bigint":case"string":case"number":re=!0;break;case"object":switch(j.$$typeof){case r:case s:re=!0;break;case y:return re=j._init,ge(re(j._payload),I,C,G,W)}}if(re)return W=W(j),re=G===""?"."+ne(j,0):G,ee(W)?(C="",re!=null&&(C=re.replace(X,"$&/")+"/"),ge(W,I,C,"",function(Fe){return Fe})):W!=null&&(B(W)&&(W=ae(W,C+(W.key==null||j&&j.key===W.key?"":(""+W.key).replace(X,"$&/")+"/")+re)),I.push(W)),1;re=0;var je=G===""?".":G+":";if(ee(j))for(var ye=0;ye<j.length;ye++)G=j[ye],oe=je+ne(G,ye),re+=ge(G,I,C,oe,W);else if(ye=S(j),typeof ye=="function")for(j=ye.call(j),ye=0;!(G=j.next()).done;)G=G.value,oe=je+ne(G,ye++),re+=ge(G,I,C,oe,W);else if(oe==="object"){if(typeof j.then=="function")return ge(ie(j),I,C,G,W);throw I=String(j),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return re}function R(j,I,C){if(j==null)return j;var G=[],W=0;return ge(j,G,"","",function(oe){return I.call(C,oe,W++)}),G}function P(j){if(j._status===-1){var I=j._result;I=I(),I.then(function(C){(j._status===0||j._status===-1)&&(j._status=1,j._result=C)},function(C){(j._status===0||j._status===-1)&&(j._status=2,j._result=C)}),j._status===-1&&(j._status=0,j._result=I)}if(j._status===1)return j._result.default;throw j._result}var te=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function he(){}return be.Children={map:R,forEach:function(j,I,C){R(j,function(){I.apply(this,arguments)},C)},count:function(j){var I=0;return R(j,function(){I++}),I},toArray:function(j){return R(j,function(I){return I})||[]},only:function(j){if(!B(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},be.Component=H,be.Fragment=u,be.Profiler=d,be.PureComponent=N,be.StrictMode=c,be.Suspense=b,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,be.__COMPILER_RUNTIME={__proto__:null,c:function(j){return K.H.useMemoCache(j)}},be.cache=function(j){return function(){return j.apply(null,arguments)}},be.cloneElement=function(j,I,C){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var G=T({},j.props),W=j.key,oe=void 0;if(I!=null)for(re in I.ref!==void 0&&(oe=void 0),I.key!==void 0&&(W=""+I.key),I)!me.call(I,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&I.ref===void 0||(G[re]=I[re]);var re=arguments.length-2;if(re===1)G.children=C;else if(1<re){for(var je=Array(re),ye=0;ye<re;ye++)je[ye]=arguments[ye+2];G.children=je}return L(j.type,W,void 0,void 0,oe,G)},be.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},be.createElement=function(j,I,C){var G,W={},oe=null;if(I!=null)for(G in I.key!==void 0&&(oe=""+I.key),I)me.call(I,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(W[G]=I[G]);var re=arguments.length-2;if(re===1)W.children=C;else if(1<re){for(var je=Array(re),ye=0;ye<re;ye++)je[ye]=arguments[ye+2];W.children=je}if(j&&j.defaultProps)for(G in re=j.defaultProps,re)W[G]===void 0&&(W[G]=re[G]);return L(j,oe,void 0,void 0,null,W)},be.createRef=function(){return{current:null}},be.forwardRef=function(j){return{$$typeof:x,render:j}},be.isValidElement=B,be.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:P}},be.memo=function(j,I){return{$$typeof:p,type:j,compare:I===void 0?null:I}},be.startTransition=function(j){var I=K.T,C={};K.T=C;try{var G=j(),W=K.S;W!==null&&W(C,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(he,te)}catch(oe){te(oe)}finally{K.T=I}},be.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},be.use=function(j){return K.H.use(j)},be.useActionState=function(j,I,C){return K.H.useActionState(j,I,C)},be.useCallback=function(j,I){return K.H.useCallback(j,I)},be.useContext=function(j){return K.H.useContext(j)},be.useDebugValue=function(){},be.useDeferredValue=function(j,I){return K.H.useDeferredValue(j,I)},be.useEffect=function(j,I,C){var G=K.H;if(typeof C=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(j,I)},be.useId=function(){return K.H.useId()},be.useImperativeHandle=function(j,I,C){return K.H.useImperativeHandle(j,I,C)},be.useInsertionEffect=function(j,I){return K.H.useInsertionEffect(j,I)},be.useLayoutEffect=function(j,I){return K.H.useLayoutEffect(j,I)},be.useMemo=function(j,I){return K.H.useMemo(j,I)},be.useOptimistic=function(j,I){return K.H.useOptimistic(j,I)},be.useReducer=function(j,I,C){return K.H.useReducer(j,I,C)},be.useRef=function(j){return K.H.useRef(j)},be.useState=function(j){return K.H.useState(j)},be.useSyncExternalStore=function(j,I,C){return K.H.useSyncExternalStore(j,I,C)},be.useTransition=function(){return K.H.useTransition()},be.version="19.1.0",be}var ym;function su(){return ym||(ym=1,yc.exports=L1()),yc.exports}var v=su();const cu=ou(v);var vc={exports:{}},mr={},wc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Y1(){return vm||(vm=1,function(r){function s(R,P){var te=R.length;R.push(P);e:for(;0<te;){var he=te-1>>>1,j=R[he];if(0<d(j,P))R[he]=P,R[te]=j,te=he;else break e}}function u(R){return R.length===0?null:R[0]}function c(R){if(R.length===0)return null;var P=R[0],te=R.pop();if(te!==P){R[0]=te;e:for(var he=0,j=R.length,I=j>>>1;he<I;){var C=2*(he+1)-1,G=R[C],W=C+1,oe=R[W];if(0>d(G,te))W<j&&0>d(oe,G)?(R[he]=oe,R[W]=te,he=W):(R[he]=G,R[C]=te,he=C);else if(W<j&&0>d(oe,te))R[he]=oe,R[W]=te,he=W;else break e}}return P}function d(R,P){var te=R.sortIndex-P.sortIndex;return te!==0?te:R.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var g=Date,x=g.now();r.unstable_now=function(){return g.now()-x}}var b=[],p=[],y=1,O=null,S=3,z=!1,T=!1,_=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;function ee(R){for(var P=u(p);P!==null;){if(P.callback===null)c(p);else if(P.startTime<=R)c(p),P.sortIndex=P.expirationTime,s(b,P);else break;P=u(p)}}function K(R){if(_=!1,ee(R),!T)if(u(b)!==null)T=!0,me||(me=!0,ne());else{var P=u(p);P!==null&&ge(K,P.startTime-R)}}var me=!1,L=-1,ae=5,B=-1;function se(){return H?!0:!(r.unstable_now()-B<ae)}function X(){if(H=!1,me){var R=r.unstable_now();B=R;var P=!0;try{e:{T=!1,_&&(_=!1,N(L),L=-1),z=!0;var te=S;try{t:{for(ee(R),O=u(b);O!==null&&!(O.expirationTime>R&&se());){var he=O.callback;if(typeof he=="function"){O.callback=null,S=O.priorityLevel;var j=he(O.expirationTime<=R);if(R=r.unstable_now(),typeof j=="function"){O.callback=j,ee(R),P=!0;break t}O===u(b)&&c(b),ee(R)}else c(b);O=u(b)}if(O!==null)P=!0;else{var I=u(p);I!==null&&ge(K,I.startTime-R),P=!1}}break e}finally{O=null,S=te,z=!1}P=void 0}}finally{P?ne():me=!1}}}var ne;if(typeof J=="function")ne=function(){J(X)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ie=$.port2;$.port1.onmessage=X,ne=function(){ie.postMessage(null)}}else ne=function(){U(X,0)};function ge(R,P){L=U(function(){R(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(R){switch(S){case 1:case 2:case 3:var P=3;break;default:P=S}var te=S;S=P;try{return R()}finally{S=te}},r.unstable_requestPaint=function(){H=!0},r.unstable_runWithPriority=function(R,P){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var te=S;S=R;try{return P()}finally{S=te}},r.unstable_scheduleCallback=function(R,P,te){var he=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?he+te:he):te=he,R){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=te+j,R={id:y++,callback:P,priorityLevel:R,startTime:te,expirationTime:j,sortIndex:-1},te>he?(R.sortIndex=te,s(p,R),u(b)===null&&R===u(p)&&(_?(N(L),L=-1):_=!0,ge(K,te-he))):(R.sortIndex=j,s(b,R),T||z||(T=!0,me||(me=!0,ne()))),R},r.unstable_shouldYield=se,r.unstable_wrapCallback=function(R){var P=S;return function(){var te=S;S=P;try{return R.apply(this,arguments)}finally{S=te}}}}(Sc)),Sc}var wm;function _1(){return wm||(wm=1,wc.exports=Y1()),wc.exports}var jc={exports:{}},ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function U1(){if(Sm)return ft;Sm=1;var r=su();function s(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(b,p,y){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:O==null?null:""+O,children:b,containerInfo:p,implementation:y}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ft.createPortal=function(b,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return f(b,p,null,y)},ft.flushSync=function(b){var p=g.T,y=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=p,c.p=y,c.d.f()}},ft.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(b,p))},ft.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},ft.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var y=p.as,O=x(y,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?c.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:O,integrity:S,fetchPriority:z}):y==="script"&&c.d.X(b,{crossOrigin:O,integrity:S,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ft.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=x(p.as,p.crossOrigin);c.d.M(b,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(b)},ft.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,O=x(y,p.crossOrigin);c.d.L(b,y,{crossOrigin:O,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ft.preloadModule=function(b,p){if(typeof b=="string")if(p){var y=x(p.as,p.crossOrigin);c.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(b)},ft.requestFormReset=function(b){c.d.r(b)},ft.unstable_batchedUpdates=function(b,p){return b(p)},ft.useFormState=function(b,p,y){return g.H.useFormState(b,p,y)},ft.useFormStatus=function(){return g.H.useHostTransitionStatus()},ft.version="19.1.0",ft}var jm;function H1(){if(jm)return jc.exports;jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),jc.exports=U1(),jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function q1(){if(Cm)return mr;Cm=1;var r=_1(),s=su(),u=H1();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return x(l),e;if(o===n)return x(l),t;o=o.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=o;else{for(var m=!1,h=l.child;h;){if(h===a){m=!0,a=l,n=o;break}if(h===n){m=!0,n=l,a=o;break}h=h.sibling}if(!m){for(h=o.child;h;){if(h===a){m=!0,a=o,n=l;break}if(h===n){m=!0,n=o,a=l;break}h=h.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,O=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),J=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case H:return"Profiler";case _:return"StrictMode";case K:return"Suspense";case me:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case J:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case ae:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var ge=Array.isArray,R=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},he=[],j=-1;function I(e){return{current:e}}function C(e){0>j||(e.current=he[j],he[j]=null,j--)}function G(e,t){j++,he[j]=e.current,e.current=t}var W=I(null),oe=I(null),re=I(null),je=I(null);function ye(e,t){switch(G(re,t),G(oe,e),G(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?G0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=G0(t),e=I0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}C(W),G(W,e)}function Fe(){C(W),C(oe),C(re)}function Ve(e){e.memoizedState!==null&&G(je,e);var t=W.current,a=I0(t,e.type);t!==a&&(G(oe,e),G(W,a))}function lt(e){oe.current===e&&(C(W),C(oe)),je.current===e&&(C(je),or._currentValue=te)}var tt=Object.prototype.hasOwnProperty,ke=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,Q=r.unstable_shouldYield,xe=r.unstable_requestPaint,ve=r.unstable_now,qe=r.unstable_getCurrentPriorityLevel,De=r.unstable_ImmediatePriority,Rt=r.unstable_UserBlockingPriority,Jt=r.unstable_NormalPriority,Tr=r.unstable_LowPriority,Sn=r.unstable_IdlePriority,hg=r.log,xg=r.unstable_setDisableYieldValue,gi=null,vt=null;function wa(e){if(typeof hg=="function"&&xg(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(gi,e)}catch{}}var wt=Math.clz32?Math.clz32:vg,bg=Math.log,yg=Math.LN2;function vg(e){return e>>>=0,e===0?32:31-(bg(e)/yg|0)|0}var kr=256,zr=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~o,n!==0?l=Ja(n):(m&=h,m!==0?l=Ja(m):a||(a=h&~e,a!==0&&(l=Ja(a))))):(h=n&~o,h!==0?l=Ja(h):m!==0?l=Ja(m):a||(a=n&~e,a!==0&&(l=Ja(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function wg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eu(){var e=kr;return kr<<=1,(kr&4194048)===0&&(kr=256),e}function Tu(){var e=zr;return zr<<=1,(zr&62914560)===0&&(zr=4194304),e}function lo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function xi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Sg(e,t,a,n,l,o){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,w=e.expirationTimes,M=e.hiddenUpdates;for(a=m&~a;0<a;){var q=31-wt(a),F=1<<q;h[q]=0,w[q]=-1;var D=M[q];if(D!==null)for(M[q]=null,q=0;q<D.length;q++){var Y=D[q];Y!==null&&(Y.lane&=-536870913)}a&=~F}n!==0&&ku(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function ku(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-wt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function zu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-wt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function so(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ru(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:um(e.type))}function jg(e,t){var a=P.p;try{return P.p=e,t()}finally{P.p=a}}var Sa=Math.random().toString(36).slice(2),ut="__reactFiber$"+Sa,gt="__reactProps$"+Sa,jn="__reactContainer$"+Sa,co="__reactEvents$"+Sa,Cg="__reactListeners$"+Sa,Ng="__reactHandles$"+Sa,Au="__reactResources$"+Sa,bi="__reactMarker$"+Sa;function uo(e){delete e[ut],delete e[gt],delete e[co],delete e[Cg],delete e[Ng]}function Cn(e){var t=e[ut];if(t)return t;for(var a=e.parentNode;a;){if(t=a[jn]||a[ut]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=P0(e);e!==null;){if(a=e[ut])return a;e=P0(e)}return t}e=a,a=e.parentNode}return null}function Nn(e){if(e=e[ut]||e[jn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function yi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function En(e){var t=e[Au];return t||(t=e[Au]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[bi]=!0}var Mu=new Set,Ou={};function en(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(Ou[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var Eg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Bu={};function Tg(e){return tt.call(Bu,e)?!0:tt.call(Du,e)?!1:Eg.test(e)?Bu[e]=!0:(Du[e]=!0,!1)}function Ar(e,t,a){if(Tg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Mr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function ea(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var fo,Lu;function kn(e){if(fo===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fo=t&&t[1]||"",Lu=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fo+e+Lu}var mo=!1;function po(e,t){if(!e||mo)return"";mo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(Y){var D=Y}Reflect.construct(e,[],F)}else{try{F.call()}catch(Y){D=Y}e.call(F.prototype)}}else{try{throw Error()}catch(Y){D=Y}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(Y){if(Y&&D&&typeof Y.stack=="string")return[Y.stack,D.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),m=o[0],h=o[1];if(m&&h){var w=m.split(`
`),M=h.split(`
`);for(l=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;l<M.length&&!M[l].includes("DetermineComponentFrameRoot");)l++;if(n===w.length||l===M.length)for(n=w.length-1,l=M.length-1;1<=n&&0<=l&&w[n]!==M[l];)l--;for(;1<=n&&0<=l;n--,l--)if(w[n]!==M[l]){if(n!==1||l!==1)do if(n--,l--,0>l||w[n]!==M[l]){var q=`
`+w[n].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=n&&0<=l);break}}}finally{mo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?kn(a):""}function kg(e){switch(e.tag){case 26:case 27:case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 15:return po(e.type,!1);case 11:return po(e.type.render,!1);case 1:return po(e.type,!0);case 31:return kn("Activity");default:return""}}function Yu(e){try{var t="";do t+=kg(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _u(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zg(e){var t=_u(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Or(e){e._valueTracker||(e._valueTracker=zg(e))}function Uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=_u(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rg=/[\n"\\]/g;function Mt(e){return e.replace(Rg,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function go(e,t,a,n,l,o,m,h){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ho(e,m,At(t)):a!=null?ho(e,m,At(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+At(h):e.removeAttribute("name")}function Hu(e,t,a,n,l,o,m,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;a=a!=null?""+At(a):"",t=t!=null?""+At(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function ho(e,t,a){t==="number"&&Dr(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function zn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+At(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function qu(e,t,a){if(t!=null&&(t=""+At(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+At(a):""}function Xu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(ge(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=At(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Rn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ag=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Ag.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Gu(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Vu(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&Vu(e,o,t[o])}function xo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Br(e){return Og.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bo=null;function yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var An=null,Mn=null;function Iu(e){var t=Nn(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(go(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[gt]||null;if(!l)throw Error(c(90));go(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Uu(n)}break e;case"textarea":qu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&zn(e,!!a.multiple,t,!1)}}}var vo=!1;function Fu(e,t,a){if(vo)return e(t,a);vo=!0;try{var n=e(t);return n}finally{if(vo=!1,(An!==null||Mn!==null)&&(vl(),An&&(t=An,e=Mn,Mn=An=null,Iu(t),e)))for(t=0;t<e.length;t++)Iu(e[t])}}function vi(e,t){var a=e.stateNode;if(a===null)return null;var n=a[gt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wo=!1;if(ta)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){wo=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{wo=!1}var ja=null,So=null,Lr=null;function Wu(){if(Lr)return Lr;var e,t=So,a=t.length,n,l="value"in ja?ja.value:ja.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===l[o-n];n++);return Lr=l.slice(e,1<n?1-n:void 0)}function Yr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Qu(){return!1}function ht(e){function t(a,n,l,o,m){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:Qu,this.isPropagationStopped=Qu,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ur=ht(tn),Si=y({},tn,{view:0,detail:0}),Dg=ht(Si),jo,Co,ji,Hr=y({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ji&&(ji&&e.type==="mousemove"?(jo=e.screenX-ji.screenX,Co=e.screenY-ji.screenY):Co=jo=0,ji=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Co}}),Pu=ht(Hr),Bg=y({},Hr,{dataTransfer:0}),Lg=ht(Bg),Yg=y({},Si,{relatedTarget:0}),No=ht(Yg),_g=y({},tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=ht(_g),Hg=y({},tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qg=ht(Hg),Xg=y({},tn,{data:0}),Zu=ht(Xg),Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ig[e])?!!t[e]:!1}function Eo(){return Fg}var Wg=y({},Si,{key:function(e){if(e.key){var t=Vg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eo,charCode:function(e){return e.type==="keypress"?Yr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qg=ht(Wg),Pg=y({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=ht(Pg),Zg=y({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eo}),Kg=ht(Zg),$g=y({},tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=ht($g),eh=y({},Hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),th=ht(eh),ah=y({},tn,{newState:0,oldState:0}),nh=ht(ah),ih=[9,13,27,32],To=ta&&"CompositionEvent"in window,Ci=null;ta&&"documentMode"in document&&(Ci=document.documentMode);var rh=ta&&"TextEvent"in window&&!Ci,$u=ta&&(!To||Ci&&8<Ci&&11>=Ci),Ju=" ",ed=!1;function td(e,t){switch(e){case"keyup":return ih.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var On=!1;function lh(e,t){switch(e){case"compositionend":return ad(t);case"keypress":return t.which!==32?null:(ed=!0,Ju);case"textInput":return e=t.data,e===Ju&&ed?null:e;default:return null}}function oh(e,t){if(On)return e==="compositionend"||!To&&td(e,t)?(e=Wu(),Lr=So=ja=null,On=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var sh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sh[e.type]:t==="textarea"}function id(e,t,a,n){An?Mn?Mn.push(n):Mn=[n]:An=n,t=El(t,"onChange"),0<t.length&&(a=new Ur("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ni=null,Ei=null;function ch(e){U0(e,0)}function qr(e){var t=yi(e);if(Uu(t))return e}function rd(e,t){if(e==="change")return t}var ld=!1;if(ta){var ko;if(ta){var zo="oninput"in document;if(!zo){var od=document.createElement("div");od.setAttribute("oninput","return;"),zo=typeof od.oninput=="function"}ko=zo}else ko=!1;ld=ko&&(!document.documentMode||9<document.documentMode)}function sd(){Ni&&(Ni.detachEvent("onpropertychange",cd),Ei=Ni=null)}function cd(e){if(e.propertyName==="value"&&qr(Ei)){var t=[];id(t,Ei,e,yo(e)),Fu(ch,t)}}function uh(e,t,a){e==="focusin"?(sd(),Ni=t,Ei=a,Ni.attachEvent("onpropertychange",cd)):e==="focusout"&&sd()}function dh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qr(Ei)}function fh(e,t){if(e==="click")return qr(t)}function mh(e,t){if(e==="input"||e==="change")return qr(t)}function ph(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:ph;function Ti(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!tt.call(t,l)||!St(e[l],t[l]))return!1}return!0}function ud(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dd(e,t){var a=ud(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ud(a)}}function fd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?fd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function md(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dr(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Dr(e.document)}return t}function Ro(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gh=ta&&"documentMode"in document&&11>=document.documentMode,Dn=null,Ao=null,ki=null,Mo=!1;function pd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mo||Dn==null||Dn!==Dr(n)||(n=Dn,"selectionStart"in n&&Ro(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ki&&Ti(ki,n)||(ki=n,n=El(Ao,"onSelect"),0<n.length&&(t=new Ur("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Dn)))}function an(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Bn={animationend:an("Animation","AnimationEnd"),animationiteration:an("Animation","AnimationIteration"),animationstart:an("Animation","AnimationStart"),transitionrun:an("Transition","TransitionRun"),transitionstart:an("Transition","TransitionStart"),transitioncancel:an("Transition","TransitionCancel"),transitionend:an("Transition","TransitionEnd")},Oo={},gd={};ta&&(gd=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function nn(e){if(Oo[e])return Oo[e];if(!Bn[e])return e;var t=Bn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in gd)return Oo[e]=t[a];return e}var hd=nn("animationend"),xd=nn("animationiteration"),bd=nn("animationstart"),hh=nn("transitionrun"),xh=nn("transitionstart"),bh=nn("transitioncancel"),yd=nn("transitionend"),vd=new Map,Do="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Do.push("scrollEnd");function Ht(e,t){vd.set(e,t),en(t,[e])}var wd=new WeakMap;function Ot(e,t){if(typeof e=="object"&&e!==null){var a=wd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Yu(t)},wd.set(e,t),t)}return{value:e,source:t,stack:Yu(t)}}var Dt=[],Ln=0,Bo=0;function Xr(){for(var e=Ln,t=Bo=Ln=0;t<e;){var a=Dt[t];Dt[t++]=null;var n=Dt[t];Dt[t++]=null;var l=Dt[t];Dt[t++]=null;var o=Dt[t];if(Dt[t++]=null,n!==null&&l!==null){var m=n.pending;m===null?l.next=l:(l.next=m.next,m.next=l),n.pending=l}o!==0&&Sd(a,l,o)}}function Vr(e,t,a,n){Dt[Ln++]=e,Dt[Ln++]=t,Dt[Ln++]=a,Dt[Ln++]=n,Bo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Lo(e,t,a,n){return Vr(e,t,a,n),Gr(e)}function Yn(e,t){return Vr(e,null,null,t),Gr(e)}function Sd(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-wt(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function Gr(e){if(50<Ji)throw Ji=0,Xs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var _n={};function yh(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,a,n){return new yh(e,t,a,n)}function Yo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,t){var a=e.alternate;return a===null?(a=jt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ir(e,t,a,n,l,o){var m=0;if(n=e,typeof e=="function")Yo(e)&&(m=1);else if(typeof e=="string")m=w1(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case B:return e=jt(31,a,t,l),e.elementType=B,e.lanes=o,e;case T:return rn(a.children,l,o,t);case _:m=8,l|=24;break;case H:return e=jt(12,a,t,l|2),e.elementType=H,e.lanes=o,e;case K:return e=jt(13,a,t,l),e.elementType=K,e.lanes=o,e;case me:return e=jt(19,a,t,l),e.elementType=me,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:case J:m=10;break e;case N:m=9;break e;case ee:m=11;break e;case L:m=14;break e;case ae:m=16,n=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=jt(m,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function rn(e,t,a,n){return e=jt(7,e,n,t),e.lanes=a,e}function _o(e,t,a){return e=jt(6,e,null,t),e.lanes=a,e}function Uo(e,t,a){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Un=[],Hn=0,Fr=null,Wr=0,Bt=[],Lt=0,ln=null,na=1,ia="";function on(e,t){Un[Hn++]=Wr,Un[Hn++]=Fr,Fr=e,Wr=t}function Cd(e,t,a){Bt[Lt++]=na,Bt[Lt++]=ia,Bt[Lt++]=ln,ln=e;var n=na;e=ia;var l=32-wt(n)-1;n&=~(1<<l),a+=1;var o=32-wt(t)+l;if(30<o){var m=l-l%5;o=(n&(1<<m)-1).toString(32),n>>=m,l-=m,na=1<<32-wt(t)+l|a<<l|n,ia=o+e}else na=1<<o|a<<l|n,ia=e}function Ho(e){e.return!==null&&(on(e,1),Cd(e,1,0))}function qo(e){for(;e===Fr;)Fr=Un[--Hn],Un[Hn]=null,Wr=Un[--Hn],Un[Hn]=null;for(;e===ln;)ln=Bt[--Lt],Bt[Lt]=null,ia=Bt[--Lt],Bt[Lt]=null,na=Bt[--Lt],Bt[Lt]=null}var pt=null,We=null,Re=!1,sn=null,Vt=!1,Xo=Error(c(519));function cn(e){var t=Error(c(418,""));throw Ai(Ot(t,e)),Xo}function Nd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[ut]=e,t[gt]=n,a){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(a=0;a<tr.length;a++)Ne(tr[a],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Hu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Or(t);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Xu(t,n.value,n.defaultValue,n.children),Or(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||V0(t.textContent,a)?(n.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),n.onScroll!=null&&Ne("scroll",t),n.onScrollEnd!=null&&Ne("scrollend",t),n.onClick!=null&&(t.onclick=Tl),t=!0):t=!1,t||cn(e)}function Ed(e){for(pt=e.return;pt;)switch(pt.tag){case 5:case 13:Vt=!1;return;case 27:case 3:Vt=!0;return;default:pt=pt.return}}function zi(e){if(e!==pt)return!1;if(!Re)return Ed(e),Re=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ic(e.type,e.memoizedProps)),a=!a),a&&We&&cn(e),Ed(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){We=Xt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}We=null}}else t===27?(t=We,Ua(e.type)?(e=sc,sc=null,We=e):We=t):We=pt?Xt(e.stateNode.nextSibling):null;return!0}function Ri(){We=pt=null,Re=!1}function Td(){var e=sn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),sn=null),e}function Ai(e){sn===null?sn=[e]:sn.push(e)}var Vo=I(null),un=null,ra=null;function Ca(e,t,a){G(Vo,t._currentValue),t._currentValue=a}function la(e){e._currentValue=Vo.current,C(Vo)}function Go(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Io(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var h=o;o=l;for(var w=0;w<t.length;w++)if(h.context===t[w]){o.lanes|=a,h=o.alternate,h!==null&&(h.lanes|=a),Go(o.return,a,e),n||(m=null);break e}o=h.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(c(341));m.lanes|=a,o=m.alternate,o!==null&&(o.lanes|=a),Go(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Mi(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var h=l.type;St(l.pendingProps.value,m.value)||(e!==null?e.push(h):e=[h])}}else if(l===je.current){if(m=l.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(or):e=[or])}l=l.return}e!==null&&Io(t,e,a,n),t.flags|=262144}function Qr(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dn(e){un=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return kd(un,e)}function Pr(e,t){return un===null&&dn(e),kd(e,t)}function kd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(c(308));ra=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ra=ra.next=t;return a}var vh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},wh=r.unstable_scheduleCallback,Sh=r.unstable_NormalPriority,Je={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fo(){return{controller:new vh,data:new Map,refCount:0}}function Oi(e){e.refCount--,e.refCount===0&&wh(Sh,function(){e.controller.abort()})}var Di=null,Wo=0,qn=0,Xn=null;function jh(e,t){if(Di===null){var a=Di=[];Wo=0,qn=Ps(),Xn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Wo++,t.then(zd,zd),t}function zd(){if(--Wo===0&&Di!==null){Xn!==null&&(Xn.status="fulfilled");var e=Di;Di=null,qn=0,Xn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ch(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Rd=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&jh(e,t),Rd!==null&&Rd(e,t)};var fn=I(null);function Qo(){var e=fn.current;return e!==null?e:Ue.pooledCache}function Zr(e,t){t===null?G(fn,fn.current):G(fn,t.pool)}function Ad(){var e=Qo();return e===null?null:{parent:Je._currentValue,pool:e}}var Bi=Error(c(460)),Md=Error(c(474)),Kr=Error(c(542)),Po={then:function(){}};function Od(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $r(){}function Dd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($r,$r),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ld(e),e;default:if(typeof t.status=="string")t.then($r,$r);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ld(e),e}throw Li=t,Bi}}var Li=null;function Bd(){if(Li===null)throw Error(c(459));var e=Li;return Li=null,e}function Ld(e){if(e===Bi||e===Kr)throw Error(c(483))}var Na=!1;function Zo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ko(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Me&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Gr(e),Sd(e,null,a),t}return Vr(e,n,t,a),Gr(e)}function Yi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,zu(e,a)}}function $o(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Jo=!1;function _i(){if(Jo){var e=Xn;if(e!==null)throw e}}function Ui(e,t,a,n){Jo=!1;var l=e.updateQueue;Na=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var w=h,M=w.next;w.next=null,m===null?o=M:m.next=M,m=w;var q=e.alternate;q!==null&&(q=q.updateQueue,h=q.lastBaseUpdate,h!==m&&(h===null?q.firstBaseUpdate=M:h.next=M,q.lastBaseUpdate=w))}if(o!==null){var F=l.baseState;m=0,q=M=w=null,h=o;do{var D=h.lane&-536870913,Y=D!==h.lane;if(Y?(Te&D)===D:(n&D)===D){D!==0&&D===qn&&(Jo=!0),q!==null&&(q=q.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var pe=e,de=h;D=t;var Ye=a;switch(de.tag){case 1:if(pe=de.payload,typeof pe=="function"){F=pe.call(Ye,F,D);break e}F=pe;break e;case 3:pe.flags=pe.flags&-65537|128;case 0:if(pe=de.payload,D=typeof pe=="function"?pe.call(Ye,F,D):pe,D==null)break e;F=y({},F,D);break e;case 2:Na=!0}}D=h.callback,D!==null&&(e.flags|=64,Y&&(e.flags|=8192),Y=l.callbacks,Y===null?l.callbacks=[D]:Y.push(D))}else Y={lane:D,tag:h.tag,payload:h.payload,callback:h.callback,next:null},q===null?(M=q=Y,w=F):q=q.next=Y,m|=D;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;Y=h,h=Y.next,Y.next=null,l.lastBaseUpdate=Y,l.shared.pending=null}}while(!0);q===null&&(w=F),l.baseState=w,l.firstBaseUpdate=M,l.lastBaseUpdate=q,o===null&&(l.shared.lanes=0),Ba|=m,e.lanes=m,e.memoizedState=F}}function Yd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function _d(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yd(a[e],t)}var Vn=I(null),Jr=I(0);function Ud(e,t){e=ma,G(Jr,e),G(Vn,t),ma=e|t.baseLanes}function es(){G(Jr,ma),G(Vn,Vn.current)}function ts(){ma=Jr.current,C(Vn),C(Jr)}var ka=0,we=null,Be=null,Ke=null,el=!1,Gn=!1,mn=!1,tl=0,Hi=0,In=null,Nh=0;function Pe(){throw Error(c(321))}function as(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!St(e[a],t[a]))return!1;return!0}function ns(e,t,a,n,l,o){return ka=o,we=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?jf:Cf,mn=!1,o=a(n,l),mn=!1,Gn&&(o=qd(t,a,n,l)),Hd(e),o}function Hd(e){R.H=ol;var t=Be!==null&&Be.next!==null;if(ka=0,Ke=Be=we=null,el=!1,Hi=0,In=null,t)throw Error(c(300));e===null||nt||(e=e.dependencies,e!==null&&Qr(e)&&(nt=!0))}function qd(e,t,a,n){we=e;var l=0;do{if(Gn&&(In=null),Hi=0,Gn=!1,25<=l)throw Error(c(301));if(l+=1,Ke=Be=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}R.H=Mh,o=t(a,n)}while(Gn);return o}function Eh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?qi(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(we.flags|=1024),t}function is(){var e=tl!==0;return tl=0,e}function rs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ls(e){if(el){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}el=!1}ka=0,Ke=Be=we=null,Gn=!1,Hi=tl=0,In=null}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?we.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function $e(){if(Be===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=Ke===null?we.memoizedState:Ke.next;if(t!==null)Ke=t,Be=e;else{if(e===null)throw we.alternate===null?Error(c(467)):Error(c(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ke===null?we.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}function os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qi(e){var t=Hi;return Hi+=1,In===null&&(In=[]),e=Dd(In,e,t),t=we,(Ke===null?t.memoizedState:Ke.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?jf:Cf),e}function al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qi(e);if(e.$$typeof===J)return dt(e)}throw Error(c(438,String(e)))}function ss(e){var t=null,a=we.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=we.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=os(),we.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=se;return t.index++,a}function oa(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=$e();return cs(t,Be,e)}function cs(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var h=m=null,w=null,M=t,q=!1;do{var F=M.lane&-536870913;if(F!==M.lane?(Te&F)===F:(ka&F)===F){var D=M.revertLane;if(D===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),F===qn&&(q=!0);else if((ka&D)===D){M=M.next,D===qn&&(q=!0);continue}else F={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(h=w=F,m=o):w=w.next=F,we.lanes|=D,Ba|=D;F=M.action,mn&&a(o,F),o=M.hasEagerState?M.eagerState:a(o,F)}else D={lane:F,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},w===null?(h=w=D,m=o):w=w.next=D,we.lanes|=F,Ba|=F;M=M.next}while(M!==null&&M!==t);if(w===null?m=o:w.next=h,!St(o,e.memoizedState)&&(nt=!0,q&&(a=Xn,a!==null)))throw a;e.memoizedState=o,e.baseState=m,e.baseQueue=w,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function us(e){var t=$e(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);St(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Xd(e,t,a){var n=we,l=$e(),o=Re;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!St((Be||l).memoizedState,a);m&&(l.memoizedState=a,nt=!0),l=l.queue;var h=Id.bind(null,n,l,e);if(Xi(2048,8,h,[e]),l.getSnapshot!==t||m||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Fn(9,il(),Gd.bind(null,n,l,a,t),null),Ue===null)throw Error(c(349));o||(ka&124)!==0||Vd(n,t,a)}return a}function Vd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=we.updateQueue,t===null?(t=os(),we.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Gd(e,t,a,n){t.value=a,t.getSnapshot=n,Fd(t)&&Wd(e)}function Id(e,t,a){return a(function(){Fd(t)&&Wd(e)})}function Fd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!St(e,a)}catch{return!0}}function Wd(e){var t=Yn(e,2);t!==null&&kt(t,e,2)}function ds(e){var t=xt();if(typeof e=="function"){var a=e;if(e=a(),mn){wa(!0);try{a()}finally{wa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},t}function Qd(e,t,a,n){return e.baseState=a,cs(e,Be,typeof n=="function"?n:oa)}function Th(e,t,a,n,l){if(ll(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};R.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Pd(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Pd(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=R.T,m={};R.T=m;try{var h=a(l,n),w=R.S;w!==null&&w(m,h),Zd(e,t,h)}catch(M){fs(e,t,M)}finally{R.T=o}}else try{o=a(l,n),Zd(e,t,o)}catch(M){fs(e,t,M)}}function Zd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Kd(e,t,n)},function(n){return fs(e,t,n)}):Kd(e,t,a)}function Kd(e,t,a){t.status="fulfilled",t.value=a,$d(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Pd(e,a)))}function fs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,$d(t),t=t.next;while(t!==n)}e.action=null}function $d(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Jd(e,t){return t}function ef(e,t){if(Re){var a=Ue.formState;if(a!==null){e:{var n=we;if(Re){if(We){t:{for(var l=We,o=Vt;l.nodeType!==8;){if(!o){l=null;break t}if(l=Xt(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){We=Xt(l.nextSibling),n=l.data==="F!";break e}}cn(n)}n=!1}n&&(t=a[0])}}return a=xt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jd,lastRenderedState:t},a.queue=n,a=vf.bind(null,we,n),n.dispatch=a,n=ds(!1),o=xs.bind(null,we,!1,n.queue),n=xt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Th.bind(null,we,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function tf(e){var t=$e();return af(t,Be,e)}function af(e,t,a){if(t=cs(e,t,Jd)[0],e=nl(oa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=qi(t)}catch(m){throw m===Bi?Kr:m}else n=t;t=$e();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(we.flags|=2048,Fn(9,il(),kh.bind(null,l,a),null)),[n,o,e]}function kh(e,t){e.action=t}function nf(e){var t=$e(),a=Be;if(a!==null)return af(t,a,e);$e(),t=t.memoizedState,a=$e();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Fn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=we.updateQueue,t===null&&(t=os(),we.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function il(){return{destroy:void 0,resource:void 0}}function rf(){return $e().memoizedState}function rl(e,t,a,n){var l=xt();n=n===void 0?null:n,we.flags|=e,l.memoizedState=Fn(1|t,il(),a,n)}function Xi(e,t,a,n){var l=$e();n=n===void 0?null:n;var o=l.memoizedState.inst;Be!==null&&n!==null&&as(n,Be.memoizedState.deps)?l.memoizedState=Fn(t,o,a,n):(we.flags|=e,l.memoizedState=Fn(1|t,o,a,n))}function lf(e,t){rl(8390656,8,e,t)}function of(e,t){Xi(2048,8,e,t)}function sf(e,t){return Xi(4,2,e,t)}function cf(e,t){return Xi(4,4,e,t)}function uf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,a){a=a!=null?a.concat([e]):null,Xi(4,4,uf.bind(null,t,e),a)}function ms(){}function ff(e,t){var a=$e();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&as(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function mf(e,t){var a=$e();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&as(t,n[1]))return n[0];if(n=e(),mn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n}function ps(e,t,a){return a===void 0||(ka&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=h0(),we.lanes|=e,Ba|=e,a)}function pf(e,t,a,n){return St(a,t)?a:Vn.current!==null?(e=ps(e,a,n),St(e,t)||(nt=!0),e):(ka&42)===0?(nt=!0,e.memoizedState=a):(e=h0(),we.lanes|=e,Ba|=e,t)}function gf(e,t,a,n,l){var o=P.p;P.p=o!==0&&8>o?o:8;var m=R.T,h={};R.T=h,xs(e,!1,t,a);try{var w=l(),M=R.S;if(M!==null&&M(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var q=Ch(w,n);Vi(e,t,q,Tt(e))}else Vi(e,t,n,Tt(e))}catch(F){Vi(e,t,{then:function(){},status:"rejected",reason:F},Tt())}finally{P.p=o,R.T=m}}function zh(){}function gs(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=hf(e).queue;gf(e,l,t,te,a===null?zh:function(){return xf(e),a(n)})}function hf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:te},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xf(e){var t=hf(e).next.queue;Vi(e,t,{},Tt())}function hs(){return dt(or)}function bf(){return $e().memoizedState}function yf(){return $e().memoizedState}function Rh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Tt();e=Ea(a);var n=Ta(t,e,a);n!==null&&(kt(n,t,a),Yi(n,t,a)),t={cache:Fo()},e.payload=t;return}t=t.return}}function Ah(e,t,a){var n=Tt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?wf(t,a):(a=Lo(e,t,a,n),a!==null&&(kt(a,e,n),Sf(a,t,n)))}function vf(e,t,a){var n=Tt();Vi(e,t,a,n)}function Vi(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))wf(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,h=o(m,a);if(l.hasEagerState=!0,l.eagerState=h,St(h,m))return Vr(e,t,l,0),Ue===null&&Xr(),!1}catch{}finally{}if(a=Lo(e,t,l,n),a!==null)return kt(a,e,n),Sf(a,t,n),!0}return!1}function xs(e,t,a,n){if(n={lane:2,revertLane:Ps(),action:n,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(t)throw Error(c(479))}else t=Lo(e,a,n,2),t!==null&&kt(t,e,2)}function ll(e){var t=e.alternate;return e===we||t!==null&&t===we}function wf(e,t){Gn=el=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,zu(e,a)}}var ol={readContext:dt,use:al,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe},jf={readContext:dt,use:al,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:lf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,rl(4194308,4,uf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return rl(4194308,4,e,t)},useInsertionEffect:function(e,t){rl(4,2,e,t)},useMemo:function(e,t){var a=xt();t=t===void 0?null:t;var n=e();if(mn){wa(!0);try{e()}finally{wa(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=xt();if(a!==void 0){var l=a(t);if(mn){wa(!0);try{a(t)}finally{wa(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Ah.bind(null,we,e),[n.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:function(e){e=ds(e);var t=e.queue,a=vf.bind(null,we,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ms,useDeferredValue:function(e,t){var a=xt();return ps(a,e,t)},useTransition:function(){var e=ds(!1);return e=gf.bind(null,we,e.queue,!0,!1),xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=we,l=xt();if(Re){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),Ue===null)throw Error(c(349));(Te&124)!==0||Vd(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,lf(Id.bind(null,n,o,e),[e]),n.flags|=2048,Fn(9,il(),Gd.bind(null,n,o,a,t),null),a},useId:function(){var e=xt(),t=Ue.identifierPrefix;if(Re){var a=ia,n=na;a=(n&~(1<<32-wt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=tl++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Nh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:hs,useFormState:ef,useActionState:ef,useOptimistic:function(e){var t=xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xs.bind(null,we,!0,a),a.dispatch=t,[e,t]},useMemoCache:ss,useCacheRefresh:function(){return xt().memoizedState=Rh.bind(null,we)}},Cf={readContext:dt,use:al,useCallback:ff,useContext:dt,useEffect:of,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:cf,useMemo:mf,useReducer:nl,useRef:rf,useState:function(){return nl(oa)},useDebugValue:ms,useDeferredValue:function(e,t){var a=$e();return pf(a,Be.memoizedState,e,t)},useTransition:function(){var e=nl(oa)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:qi(e),t]},useSyncExternalStore:Xd,useId:bf,useHostTransitionStatus:hs,useFormState:tf,useActionState:tf,useOptimistic:function(e,t){var a=$e();return Qd(a,Be,e,t)},useMemoCache:ss,useCacheRefresh:yf},Mh={readContext:dt,use:al,useCallback:ff,useContext:dt,useEffect:of,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:cf,useMemo:mf,useReducer:us,useRef:rf,useState:function(){return us(oa)},useDebugValue:ms,useDeferredValue:function(e,t){var a=$e();return Be===null?ps(a,e,t):pf(a,Be.memoizedState,e,t)},useTransition:function(){var e=us(oa)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:qi(e),t]},useSyncExternalStore:Xd,useId:bf,useHostTransitionStatus:hs,useFormState:nf,useActionState:nf,useOptimistic:function(e,t){var a=$e();return Be!==null?Qd(a,Be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ss,useCacheRefresh:yf},Wn=null,Gi=0;function sl(e){var t=Gi;return Gi+=1,Wn===null&&(Wn=[]),Dd(Wn,e,t)}function Ii(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cl(e,t){throw t.$$typeof===O?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Nf(e){var t=e._init;return t(e._payload)}function Ef(e){function t(k,E){if(e){var A=k.deletions;A===null?(k.deletions=[E],k.flags|=16):A.push(E)}}function a(k,E){if(!e)return null;for(;E!==null;)t(k,E),E=E.sibling;return null}function n(k){for(var E=new Map;k!==null;)k.key!==null?E.set(k.key,k):E.set(k.index,k),k=k.sibling;return E}function l(k,E){return k=aa(k,E),k.index=0,k.sibling=null,k}function o(k,E,A){return k.index=A,e?(A=k.alternate,A!==null?(A=A.index,A<E?(k.flags|=67108866,E):A):(k.flags|=67108866,E)):(k.flags|=1048576,E)}function m(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function h(k,E,A,V){return E===null||E.tag!==6?(E=_o(A,k.mode,V),E.return=k,E):(E=l(E,A),E.return=k,E)}function w(k,E,A,V){var le=A.type;return le===T?q(k,E,A.props.children,V,A.key):E!==null&&(E.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ae&&Nf(le)===E.type)?(E=l(E,A.props),Ii(E,A),E.return=k,E):(E=Ir(A.type,A.key,A.props,null,k.mode,V),Ii(E,A),E.return=k,E)}function M(k,E,A,V){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=Uo(A,k.mode,V),E.return=k,E):(E=l(E,A.children||[]),E.return=k,E)}function q(k,E,A,V,le){return E===null||E.tag!==7?(E=rn(A,k.mode,V,le),E.return=k,E):(E=l(E,A),E.return=k,E)}function F(k,E,A){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=_o(""+E,k.mode,A),E.return=k,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case S:return A=Ir(E.type,E.key,E.props,null,k.mode,A),Ii(A,E),A.return=k,A;case z:return E=Uo(E,k.mode,A),E.return=k,E;case ae:var V=E._init;return E=V(E._payload),F(k,E,A)}if(ge(E)||ne(E))return E=rn(E,k.mode,A,null),E.return=k,E;if(typeof E.then=="function")return F(k,sl(E),A);if(E.$$typeof===J)return F(k,Pr(k,E),A);cl(k,E)}return null}function D(k,E,A,V){var le=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return le!==null?null:h(k,E,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return A.key===le?w(k,E,A,V):null;case z:return A.key===le?M(k,E,A,V):null;case ae:return le=A._init,A=le(A._payload),D(k,E,A,V)}if(ge(A)||ne(A))return le!==null?null:q(k,E,A,V,null);if(typeof A.then=="function")return D(k,E,sl(A),V);if(A.$$typeof===J)return D(k,E,Pr(k,A),V);cl(k,A)}return null}function Y(k,E,A,V,le){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return k=k.get(A)||null,h(E,k,""+V,le);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return k=k.get(V.key===null?A:V.key)||null,w(E,k,V,le);case z:return k=k.get(V.key===null?A:V.key)||null,M(E,k,V,le);case ae:var Se=V._init;return V=Se(V._payload),Y(k,E,A,V,le)}if(ge(V)||ne(V))return k=k.get(A)||null,q(E,k,V,le,null);if(typeof V.then=="function")return Y(k,E,A,sl(V),le);if(V.$$typeof===J)return Y(k,E,A,Pr(E,V),le);cl(E,V)}return null}function pe(k,E,A,V){for(var le=null,Se=null,ue=E,fe=E=0,rt=null;ue!==null&&fe<A.length;fe++){ue.index>fe?(rt=ue,ue=null):rt=ue.sibling;var ze=D(k,ue,A[fe],V);if(ze===null){ue===null&&(ue=rt);break}e&&ue&&ze.alternate===null&&t(k,ue),E=o(ze,E,fe),Se===null?le=ze:Se.sibling=ze,Se=ze,ue=rt}if(fe===A.length)return a(k,ue),Re&&on(k,fe),le;if(ue===null){for(;fe<A.length;fe++)ue=F(k,A[fe],V),ue!==null&&(E=o(ue,E,fe),Se===null?le=ue:Se.sibling=ue,Se=ue);return Re&&on(k,fe),le}for(ue=n(ue);fe<A.length;fe++)rt=Y(ue,k,fe,A[fe],V),rt!==null&&(e&&rt.alternate!==null&&ue.delete(rt.key===null?fe:rt.key),E=o(rt,E,fe),Se===null?le=rt:Se.sibling=rt,Se=rt);return e&&ue.forEach(function(Ga){return t(k,Ga)}),Re&&on(k,fe),le}function de(k,E,A,V){if(A==null)throw Error(c(151));for(var le=null,Se=null,ue=E,fe=E=0,rt=null,ze=A.next();ue!==null&&!ze.done;fe++,ze=A.next()){ue.index>fe?(rt=ue,ue=null):rt=ue.sibling;var Ga=D(k,ue,ze.value,V);if(Ga===null){ue===null&&(ue=rt);break}e&&ue&&Ga.alternate===null&&t(k,ue),E=o(Ga,E,fe),Se===null?le=Ga:Se.sibling=Ga,Se=Ga,ue=rt}if(ze.done)return a(k,ue),Re&&on(k,fe),le;if(ue===null){for(;!ze.done;fe++,ze=A.next())ze=F(k,ze.value,V),ze!==null&&(E=o(ze,E,fe),Se===null?le=ze:Se.sibling=ze,Se=ze);return Re&&on(k,fe),le}for(ue=n(ue);!ze.done;fe++,ze=A.next())ze=Y(ue,k,fe,ze.value,V),ze!==null&&(e&&ze.alternate!==null&&ue.delete(ze.key===null?fe:ze.key),E=o(ze,E,fe),Se===null?le=ze:Se.sibling=ze,Se=ze);return e&&ue.forEach(function(O1){return t(k,O1)}),Re&&on(k,fe),le}function Ye(k,E,A,V){if(typeof A=="object"&&A!==null&&A.type===T&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case S:e:{for(var le=A.key;E!==null;){if(E.key===le){if(le=A.type,le===T){if(E.tag===7){a(k,E.sibling),V=l(E,A.props.children),V.return=k,k=V;break e}}else if(E.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ae&&Nf(le)===E.type){a(k,E.sibling),V=l(E,A.props),Ii(V,A),V.return=k,k=V;break e}a(k,E);break}else t(k,E);E=E.sibling}A.type===T?(V=rn(A.props.children,k.mode,V,A.key),V.return=k,k=V):(V=Ir(A.type,A.key,A.props,null,k.mode,V),Ii(V,A),V.return=k,k=V)}return m(k);case z:e:{for(le=A.key;E!==null;){if(E.key===le)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){a(k,E.sibling),V=l(E,A.children||[]),V.return=k,k=V;break e}else{a(k,E);break}else t(k,E);E=E.sibling}V=Uo(A,k.mode,V),V.return=k,k=V}return m(k);case ae:return le=A._init,A=le(A._payload),Ye(k,E,A,V)}if(ge(A))return pe(k,E,A,V);if(ne(A)){if(le=ne(A),typeof le!="function")throw Error(c(150));return A=le.call(A),de(k,E,A,V)}if(typeof A.then=="function")return Ye(k,E,sl(A),V);if(A.$$typeof===J)return Ye(k,E,Pr(k,A),V);cl(k,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,E!==null&&E.tag===6?(a(k,E.sibling),V=l(E,A),V.return=k,k=V):(a(k,E),V=_o(A,k.mode,V),V.return=k,k=V),m(k)):a(k,E)}return function(k,E,A,V){try{Gi=0;var le=Ye(k,E,A,V);return Wn=null,le}catch(ue){if(ue===Bi||ue===Kr)throw ue;var Se=jt(29,ue,null,k.mode);return Se.lanes=V,Se.return=k,Se}finally{}}}var Qn=Ef(!0),Tf=Ef(!1),Yt=I(null),Gt=null;function za(e){var t=e.alternate;G(et,et.current&1),G(Yt,e),Gt===null&&(t===null||Vn.current!==null||t.memoizedState!==null)&&(Gt=e)}function kf(e){if(e.tag===22){if(G(et,et.current),G(Yt,e),Gt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Gt=e)}}else Ra()}function Ra(){G(et,et.current),G(Yt,Yt.current)}function sa(e){C(Yt),Gt===e&&(Gt=null),C(et)}var et=I(0);function ul(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||oc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function bs(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ys={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Tt(),l=Ea(n);l.payload=t,a!=null&&(l.callback=a),t=Ta(e,l,n),t!==null&&(kt(t,e,n),Yi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Tt(),l=Ea(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=Ta(e,l,n),t!==null&&(kt(t,e,n),Yi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Tt(),n=Ea(a);n.tag=2,t!=null&&(n.callback=t),t=Ta(e,n,a),t!==null&&(kt(t,e,a),Yi(t,e,a))}};function zf(e,t,a,n,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,m):t.prototype&&t.prototype.isPureReactComponent?!Ti(a,n)||!Ti(l,o):!0}function Rf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function pn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Af(e){dl(e)}function Mf(e){console.error(e)}function Of(e){dl(e)}function fl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Df(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function vs(e,t,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){fl(e,t)},a}function Bf(e){return e=Ea(e),e.tag=3,e}function Lf(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){Df(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Df(t,a,n),typeof l!="function"&&(La===null?La=new Set([this]):La.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function Oh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Mi(t,a,l,!0),a=Yt.current,a!==null){switch(a.tag){case 13:return Gt===null?Gs():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===Po?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Fs(e,n,l)),!1;case 22:return a.flags|=65536,n===Po?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Fs(e,n,l)),!1}throw Error(c(435,a.tag))}return Fs(e,n,l),Gs(),!1}if(Re)return t=Yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Xo&&(e=Error(c(422),{cause:n}),Ai(Ot(e,a)))):(n!==Xo&&(t=Error(c(423),{cause:n}),Ai(Ot(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Ot(n,a),l=vs(e.stateNode,n,l),$o(e,l),Qe!==4&&(Qe=2)),!1;var o=Error(c(520),{cause:n});if(o=Ot(o,a),$i===null?$i=[o]:$i.push(o),Qe!==4&&(Qe=2),t===null)return!0;n=Ot(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=vs(a.stateNode,n,e),$o(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(La===null||!La.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Bf(l),Lf(l,e,a,n),$o(a,l),!1}a=a.return}while(a!==null);return!1}var Yf=Error(c(461)),nt=!1;function ot(e,t,a,n){t.child=e===null?Tf(t,null,a,n):Qn(t,e.child,a,n)}function _f(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var m={};for(var h in n)h!=="ref"&&(m[h]=n[h])}else m=n;return dn(t),n=ns(e,t,a,m,o,l),h=is(),e!==null&&!nt?(rs(e,t,l),ca(e,t,l)):(Re&&h&&Ho(t),t.flags|=1,ot(e,t,n,l),t.child)}function Uf(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!Yo(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Hf(e,t,o,n,l)):(e=Ir(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!ks(e,l)){var m=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ti,a(m,n)&&e.ref===t.ref)return ca(e,t,l)}return t.flags|=1,e=aa(o,n),e.ref=t.ref,e.return=t,t.child=e}function Hf(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(Ti(o,n)&&e.ref===t.ref)if(nt=!1,t.pendingProps=n=o,ks(e,l))(e.flags&131072)!==0&&(nt=!0);else return t.lanes=e.lanes,ca(e,t,l)}return ws(e,t,a,n,l)}function qf(e,t,a){var n=t.pendingProps,l=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Xf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zr(t,o!==null?o.cachePool:null),o!==null?Ud(t,o):es(),kf(t);else return t.lanes=t.childLanes=536870912,Xf(e,t,o!==null?o.baseLanes|a:a,a)}else o!==null?(Zr(t,o.cachePool),Ud(t,o),Ra(),t.memoizedState=null):(e!==null&&Zr(t,null),es(),Ra());return ot(e,t,l,a),t.child}function Xf(e,t,a,n){var l=Qo();return l=l===null?null:{parent:Je._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Zr(t,null),es(),kf(t),e!==null&&Mi(e,t,n,!0),null}function ml(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ws(e,t,a,n,l){return dn(t),a=ns(e,t,a,n,void 0,l),n=is(),e!==null&&!nt?(rs(e,t,l),ca(e,t,l)):(Re&&n&&Ho(t),t.flags|=1,ot(e,t,a,l),t.child)}function Vf(e,t,a,n,l,o){return dn(t),t.updateQueue=null,a=qd(t,n,a,l),Hd(e),n=is(),e!==null&&!nt?(rs(e,t,o),ca(e,t,o)):(Re&&n&&Ho(t),t.flags|=1,ot(e,t,a,o),t.child)}function Gf(e,t,a,n,l){if(dn(t),t.stateNode===null){var o=_n,m=a.contextType;typeof m=="object"&&m!==null&&(o=dt(m)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ys,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},Zo(t),m=a.contextType,o.context=typeof m=="object"&&m!==null?dt(m):_n,o.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(bs(t,a,m,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&ys.enqueueReplaceState(o,o.state,null),Ui(t,n,o,l),_i(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var h=t.memoizedProps,w=pn(a,h);o.props=w;var M=o.context,q=a.contextType;m=_n,typeof q=="object"&&q!==null&&(m=dt(q));var F=a.getDerivedStateFromProps;q=typeof F=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,q||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||M!==m)&&Rf(t,o,n,m),Na=!1;var D=t.memoizedState;o.state=D,Ui(t,n,o,l),_i(),M=t.memoizedState,h||D!==M||Na?(typeof F=="function"&&(bs(t,a,F,n),M=t.memoizedState),(w=Na||zf(t,a,w,n,D,M,m))?(q||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=M),o.props=n,o.state=M,o.context=m,n=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,Ko(e,t),m=t.memoizedProps,q=pn(a,m),o.props=q,F=t.pendingProps,D=o.context,M=a.contextType,w=_n,typeof M=="object"&&M!==null&&(w=dt(M)),h=a.getDerivedStateFromProps,(M=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==F||D!==w)&&Rf(t,o,n,w),Na=!1,D=t.memoizedState,o.state=D,Ui(t,n,o,l),_i();var Y=t.memoizedState;m!==F||D!==Y||Na||e!==null&&e.dependencies!==null&&Qr(e.dependencies)?(typeof h=="function"&&(bs(t,a,h,n),Y=t.memoizedState),(q=Na||zf(t,a,q,n,D,Y,w)||e!==null&&e.dependencies!==null&&Qr(e.dependencies))?(M||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,Y,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,Y,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=Y),o.props=n,o.state=Y,o.context=w,n=q):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,ml(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Qn(t,e.child,null,l),t.child=Qn(t,null,a,l)):ot(e,t,a,l),t.memoizedState=o.state,e=t.child):e=ca(e,t,l),e}function If(e,t,a,n){return Ri(),t.flags|=256,ot(e,t,a,n),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function js(e){return{baseLanes:e,cachePool:Ad()}}function Cs(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=_t),e}function Ff(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(et.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Re){if(l?za(t):Ra(),Re){var h=We,w;if(w=h){e:{for(w=h,h=Vt;w.nodeType!==8;){if(!h){h=null;break e}if(w=Xt(w.nextSibling),w===null){h=null;break e}}h=w}h!==null?(t.memoizedState={dehydrated:h,treeContext:ln!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},w=jt(18,null,null,0),w.stateNode=h,w.return=t,t.child=w,pt=t,We=null,w=!0):w=!1}w||cn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return oc(h)?t.lanes=32:t.lanes=536870912,null;sa(t)}return h=n.children,n=n.fallback,l?(Ra(),l=t.mode,h=pl({mode:"hidden",children:h},l),n=rn(n,l,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,l=t.child,l.memoizedState=js(a),l.childLanes=Cs(e,m,a),t.memoizedState=Ss,n):(za(t),Ns(t,h))}if(w=e.memoizedState,w!==null&&(h=w.dehydrated,h!==null)){if(o)t.flags&256?(za(t),t.flags&=-257,t=Es(e,t,a)):t.memoizedState!==null?(Ra(),t.child=e.child,t.flags|=128,t=null):(Ra(),l=n.fallback,h=t.mode,n=pl({mode:"visible",children:n.children},h),l=rn(l,h,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,Qn(t,e.child,null,a),n=t.child,n.memoizedState=js(a),n.childLanes=Cs(e,m,a),t.memoizedState=Ss,t=l);else if(za(t),oc(h)){if(m=h.nextSibling&&h.nextSibling.dataset,m)var M=m.dgst;m=M,n=Error(c(419)),n.stack="",n.digest=m,Ai({value:n,source:null,stack:null}),t=Es(e,t,a)}else if(nt||Mi(e,t,a,!1),m=(a&e.childLanes)!==0,nt||m){if(m=Ue,m!==null&&(n=a&-a,n=(n&42)!==0?1:oo(n),n=(n&(m.suspendedLanes|a))!==0?0:n,n!==0&&n!==w.retryLane))throw w.retryLane=n,Yn(e,n),kt(m,e,n),Yf;h.data==="$?"||Gs(),t=Es(e,t,a)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,We=Xt(h.nextSibling),pt=t,Re=!0,sn=null,Vt=!1,e!==null&&(Bt[Lt++]=na,Bt[Lt++]=ia,Bt[Lt++]=ln,na=e.id,ia=e.overflow,ln=t),t=Ns(t,n.children),t.flags|=4096);return t}return l?(Ra(),l=n.fallback,h=t.mode,w=e.child,M=w.sibling,n=aa(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&65011712,M!==null?l=aa(M,l):(l=rn(l,h,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,h=e.child.memoizedState,h===null?h=js(a):(w=h.cachePool,w!==null?(M=Je._currentValue,w=w.parent!==M?{parent:M,pool:M}:w):w=Ad(),h={baseLanes:h.baseLanes|a,cachePool:w}),l.memoizedState=h,l.childLanes=Cs(e,m,a),t.memoizedState=Ss,n):(za(t),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function Ns(e,t){return t=pl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pl(e,t){return e=jt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Es(e,t,a){return Qn(t,e.child,null,a),e=Ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Go(e.return,t,a)}function Ts(e,t,a,n,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l)}function Qf(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;if(ot(e,t,n.children,a),n=et.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wf(e,a,t);else if(e.tag===19)Wf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(G(et,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ul(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Ts(t,!1,l,a,o);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ul(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Ts(t,!0,a,null,o);break;case"together":Ts(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ba|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Mi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=aa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ks(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qr(e)))}function Dh(e,t,a){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),Ca(t,Je,e.memoizedState.cache),Ri();break;case 27:case 5:Ve(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:Ca(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(za(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ff(e,t,a):(za(t),e=ca(e,t,a),e!==null?e.sibling:null);za(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Mi(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Qf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),G(et,et.current),n)break;return null;case 22:case 23:return t.lanes=0,qf(e,t,a);case 24:Ca(t,Je,e.memoizedState.cache)}return ca(e,t,a)}function Pf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)nt=!0;else{if(!ks(e,a)&&(t.flags&128)===0)return nt=!1,Dh(e,t,a);nt=(e.flags&131072)!==0}else nt=!1,Re&&(t.flags&1048576)!==0&&Cd(t,Wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")Yo(n)?(e=pn(n,e),t.tag=1,t=Gf(null,t,n,e,a)):(t.tag=0,t=ws(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===ee){t.tag=11,t=_f(null,t,n,e,a);break e}else if(l===L){t.tag=14,t=Uf(null,t,n,e,a);break e}}throw t=ie(n)||n,Error(c(306,t,""))}}return t;case 0:return ws(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=pn(n,t.pendingProps),Gf(e,t,n,l,a);case 3:e:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,Ko(e,t),Ui(t,n,null,a);var m=t.memoizedState;if(n=m.cache,Ca(t,Je,n),n!==o.cache&&Io(t,[Je],a,!0),_i(),n=m.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=If(e,t,n,a);break e}else if(n!==l){l=Ot(Error(c(424)),t),Ai(l),t=If(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=Xt(e.firstChild),pt=t,Re=!0,sn=null,Vt=!0,a=Tf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ri(),n===l){t=ca(e,t,a);break e}ot(e,t,n,a)}t=t.child}return t;case 26:return ml(e,t),e===null?(a=J0(t.type,null,t.pendingProps,null))?t.memoizedState=a:Re||(a=t.type,e=t.pendingProps,n=kl(re.current).createElement(a),n[ut]=t,n[gt]=e,ct(n,a,e),at(n),t.stateNode=n):t.memoizedState=J0(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ve(t),e===null&&Re&&(n=t.stateNode=Z0(t.type,t.pendingProps,re.current),pt=t,Vt=!0,l=We,Ua(t.type)?(sc=l,We=Xt(n.firstChild)):We=l),ot(e,t,t.pendingProps.children,a),ml(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Re&&((l=n=We)&&(n=s1(n,t.type,t.pendingProps,Vt),n!==null?(t.stateNode=n,pt=t,We=Xt(n.firstChild),Vt=!1,l=!0):l=!1),l||cn(t)),Ve(t),l=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,n=o.children,ic(l,o)?n=null:m!==null&&ic(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=ns(e,t,Eh,null,null,a),or._currentValue=l),ml(e,t),ot(e,t,n,a),t.child;case 6:return e===null&&Re&&((e=a=We)&&(a=c1(a,t.pendingProps,Vt),a!==null?(t.stateNode=a,pt=t,We=null,e=!0):e=!1),e||cn(t)),null;case 13:return Ff(e,t,a);case 4:return ye(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Qn(t,null,n,a):ot(e,t,n,a),t.child;case 11:return _f(e,t,t.type,t.pendingProps,a);case 7:return ot(e,t,t.pendingProps,a),t.child;case 8:return ot(e,t,t.pendingProps.children,a),t.child;case 12:return ot(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ca(t,t.type,n.value),ot(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,dn(t),l=dt(l),n=n(l),t.flags|=1,ot(e,t,n,a),t.child;case 14:return Uf(e,t,t.type,t.pendingProps,a);case 15:return Hf(e,t,t.type,t.pendingProps,a);case 19:return Qf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=pl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=aa(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return qf(e,t,a);case 24:return dn(t),n=dt(Je),e===null?(l=Qo(),l===null&&(l=Ue,o=Fo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},Zo(t),Ca(t,Je,l)):((e.lanes&a)!==0&&(Ko(e,t),Ui(t,null,null,a),_i()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Ca(t,Je,n)):(n=o.cache,Ca(t,Je,n),n!==l.cache&&Io(t,[Je],a,!0))),ot(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ua(e){e.flags|=4}function Zf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!im(t)){if(t=Yt.current,t!==null&&((Te&4194048)===Te?Gt!==null:(Te&62914560)!==Te&&(Te&536870912)===0||t!==Gt))throw Li=Po,Md;e.flags|=8192}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Tu():536870912,e.lanes|=t,$n|=t)}function Fi(e,t){if(!Re)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Bh(e,t,a){var n=t.pendingProps;switch(qo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(Je),Fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(zi(t)?ua(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Td())),Ge(t),null;case 26:return a=t.memoizedState,e===null?(ua(t),a!==null?(Ge(t),Zf(t,a)):(Ge(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ua(t),Ge(t),Zf(t,a)):(Ge(t),t.flags&=-16777217):(e.memoizedProps!==n&&ua(t),Ge(t),t.flags&=-16777217),null;case 27:lt(t),a=re.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ua(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ge(t),null}e=W.current,zi(t)?Nd(t):(e=Z0(l,n,a),t.stateNode=e,ua(t))}return Ge(t),null;case 5:if(lt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ua(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ge(t),null}if(e=W.current,zi(t))Nd(t);else{switch(l=kl(re.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[ut]=t,e[gt]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ct(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ua(t)}}return Ge(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ua(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=re.current,zi(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=pt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[ut]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||V0(e.nodeValue,a)),e||cn(t)}else e=kl(e).createTextNode(n),e[ut]=t,t.stateNode=e}return Ge(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=zi(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[ut]=t}else Ri(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),l=!1}else l=Td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(sa(t),t):(sa(t),null)}if(sa(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),gl(t,t.updateQueue),Ge(t),null;case 4:return Fe(),e===null&&Js(t.stateNode.containerInfo),Ge(t),null;case 10:return la(t.type),Ge(t),null;case 19:if(C(et),l=t.memoizedState,l===null)return Ge(t),null;if(n=(t.flags&128)!==0,o=l.rendering,o===null)if(n)Fi(l,!1);else{if(Qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ul(e),o!==null){for(t.flags|=128,Fi(l,!1),e=o.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)jd(a,e),a=a.sibling;return G(et,et.current&1|2),t.child}e=e.sibling}l.tail!==null&&ve()>bl&&(t.flags|=128,n=!0,Fi(l,!1),t.lanes=4194304)}else{if(!n)if(e=ul(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),Fi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Re)return Ge(t),null}else 2*ve()-l.renderingStartTime>bl&&a!==536870912&&(t.flags|=128,n=!0,Fi(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ve(),t.sibling=null,e=et.current,G(et,n?e&1|2:e&1),t):(Ge(t),null);case 22:case 23:return sa(t),ts(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),a=t.updateQueue,a!==null&&gl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&C(fn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),la(Je),Ge(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Lh(e,t){switch(qo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(Je),Fe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lt(t),null;case 13:if(sa(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Ri()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return C(et),null;case 4:return Fe(),null;case 10:return la(t.type),null;case 22:case 23:return sa(t),ts(),e!==null&&C(fn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(Je),null;case 25:return null;default:return null}}function Kf(e,t){switch(qo(t),t.tag){case 3:la(Je),Fe();break;case 26:case 27:case 5:lt(t);break;case 4:Fe();break;case 13:sa(t);break;case 19:C(et);break;case 10:la(t.type);break;case 22:case 23:sa(t),ts(),e!==null&&C(fn);break;case 24:la(Je)}}function Wi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,m=a.inst;n=o(),m.destroy=n}a=a.next}while(a!==l)}}catch(h){_e(t,t.return,h)}}function Aa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var m=n.inst,h=m.destroy;if(h!==void 0){m.destroy=void 0,l=t;var w=a,M=h;try{M()}catch(q){_e(l,w,q)}}}n=n.next}while(n!==o)}}catch(q){_e(t,t.return,q)}}function $f(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{_d(t,a)}catch(n){_e(e,e.return,n)}}}function Jf(e,t,a){a.props=pn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){_e(e,t,n)}}function Qi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){_e(e,t,l)}}function It(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){_e(e,t,l)}else a.current=null}function e0(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){_e(e,e.return,l)}}function zs(e,t,a){try{var n=e.stateNode;n1(n,e.type,a,t),n[gt]=t}catch(l){_e(e,e.return,l)}}function t0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function Rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||t0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Tl));else if(n!==4&&(n===27&&Ua(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(As(e,t,a),e=e.sibling;e!==null;)As(e,t,a),e=e.sibling}function hl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(hl(e,t,a),e=e.sibling;e!==null;)hl(e,t,a),e=e.sibling}function a0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ct(t,n,a),t[ut]=e,t[gt]=a}catch(o){_e(e,e.return,o)}}var da=!1,Ze=!1,Ms=!1,n0=typeof WeakSet=="function"?WeakSet:Set,it=null;function Yh(e,t){if(e=e.containerInfo,ac=Dl,e=md(e),Ro(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var m=0,h=-1,w=-1,M=0,q=0,F=e,D=null;t:for(;;){for(var Y;F!==a||l!==0&&F.nodeType!==3||(h=m+l),F!==o||n!==0&&F.nodeType!==3||(w=m+n),F.nodeType===3&&(m+=F.nodeValue.length),(Y=F.firstChild)!==null;)D=F,F=Y;for(;;){if(F===e)break t;if(D===a&&++M===l&&(h=m),D===o&&++q===n&&(w=m),(Y=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=Y}a=h===-1||w===-1?null:{start:h,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(nc={focusedElem:e,selectionRange:a},Dl=!1,it=t;it!==null;)if(t=it,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,it=e;else for(;it!==null;){switch(t=it,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var pe=pn(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(pe,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(de){_e(a,a.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)lc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,it=e;break}it=t.return}}function i0(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),n&4&&Wi(5,a);break;case 1:if(Ma(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){_e(a,a.return,m)}else{var l=pn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){_e(a,a.return,m)}}n&64&&$f(a),n&512&&Qi(a,a.return);break;case 3:if(Ma(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{_d(e,t)}catch(m){_e(a,a.return,m)}}break;case 27:t===null&&n&4&&a0(a);case 26:case 5:Ma(e,a),t===null&&n&4&&e0(a),n&512&&Qi(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),n&4&&o0(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Fh.bind(null,a),u1(e,a))));break;case 22:if(n=a.memoizedState!==null||da,!n){t=t!==null&&t.memoizedState!==null||Ze,l=da;var o=Ze;da=n,(Ze=t)&&!o?Oa(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),da=l,Ze=o}break;case 30:break;default:Ma(e,a)}}function r0(e){var t=e.alternate;t!==null&&(e.alternate=null,r0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&uo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,bt=!1;function fa(e,t,a){for(a=a.child;a!==null;)l0(e,t,a),a=a.sibling}function l0(e,t,a){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(gi,a)}catch{}switch(a.tag){case 26:Ze||It(a,t),fa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||It(a,t);var n=Xe,l=bt;Ua(a.type)&&(Xe=a.stateNode,bt=!1),fa(e,t,a),nr(a.stateNode),Xe=n,bt=l;break;case 5:Ze||It(a,t);case 6:if(n=Xe,l=bt,Xe=null,fa(e,t,a),Xe=n,bt=l,Xe!==null)if(bt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(o){_e(a,t,o)}else try{Xe.removeChild(a.stateNode)}catch(o){_e(a,t,o)}break;case 18:Xe!==null&&(bt?(e=Xe,Q0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),dr(e)):Q0(Xe,a.stateNode));break;case 4:n=Xe,l=bt,Xe=a.stateNode.containerInfo,bt=!0,fa(e,t,a),Xe=n,bt=l;break;case 0:case 11:case 14:case 15:Ze||Aa(2,a,t),Ze||Aa(4,a,t),fa(e,t,a);break;case 1:Ze||(It(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Jf(a,t,n)),fa(e,t,a);break;case 21:fa(e,t,a);break;case 22:Ze=(n=Ze)||a.memoizedState!==null,fa(e,t,a),Ze=n;break;default:fa(e,t,a)}}function o0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dr(e)}catch(a){_e(t,t.return,a)}}function _h(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new n0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new n0),t;default:throw Error(c(435,e.tag))}}function Os(e,t){var a=_h(e);t.forEach(function(n){var l=Wh.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function Ct(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 27:if(Ua(h.type)){Xe=h.stateNode,bt=!1;break e}break;case 5:Xe=h.stateNode,bt=!1;break e;case 3:case 4:Xe=h.stateNode.containerInfo,bt=!0;break e}h=h.return}if(Xe===null)throw Error(c(160));l0(o,m,l),Xe=null,bt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)s0(t,e),t=t.sibling}var qt=null;function s0(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ct(t,e),Nt(e),n&4&&(Aa(3,e,e.return),Wi(3,e),Aa(5,e,e.return));break;case 1:Ct(t,e),Nt(e),n&512&&(Ze||a===null||It(a,a.return)),n&64&&da&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=qt;if(Ct(t,e),Nt(e),n&512&&(Ze||a===null||It(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[bi]||o[ut]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),ct(o,n,a),o[ut]=e,at(o),n=o;break e;case"link":var m=am("link","href",l).get(n+(a.href||""));if(m){for(var h=0;h<m.length;h++)if(o=m[h],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(h,1);break t}}o=l.createElement(n),ct(o,n,a),l.head.appendChild(o);break;case"meta":if(m=am("meta","content",l).get(n+(a.content||""))){for(h=0;h<m.length;h++)if(o=m[h],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(h,1);break t}}o=l.createElement(n),ct(o,n,a),l.head.appendChild(o);break;default:throw Error(c(468,n))}o[ut]=e,at(o),n=o}e.stateNode=n}else nm(l,e.type,e.stateNode);else e.stateNode=tm(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?nm(l,e.type,e.stateNode):tm(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&zs(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ct(t,e),Nt(e),n&512&&(Ze||a===null||It(a,a.return)),a!==null&&n&4&&zs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ct(t,e),Nt(e),n&512&&(Ze||a===null||It(a,a.return)),e.flags&32){l=e.stateNode;try{Rn(l,"")}catch(Y){_e(e,e.return,Y)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,zs(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Ms=!0);break;case 6:if(Ct(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Y){_e(e,e.return,Y)}}break;case 3:if(Al=null,l=qt,qt=zl(t.containerInfo),Ct(t,e),qt=l,Nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(Y){_e(e,e.return,Y)}Ms&&(Ms=!1,c0(e));break;case 4:n=qt,qt=zl(e.stateNode.containerInfo),Ct(t,e),Nt(e),qt=n;break;case 12:Ct(t,e),Nt(e);break;case 13:Ct(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Us=ve()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 22:l=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,M=da,q=Ze;if(da=M||l,Ze=q||w,Ct(t,e),Ze=q,da=M,Nt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||w||da||Ze||gn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){w=a=t;try{if(o=w.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{h=w.stateNode;var F=w.memoizedProps.style,D=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Y){_e(w,w.return,Y)}}}else if(t.tag===6){if(a===null){w=t;try{w.stateNode.nodeValue=l?"":w.memoizedProps}catch(Y){_e(w,w.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Os(e,a))));break;case 19:Ct(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Os(e,n)));break;case 30:break;case 21:break;default:Ct(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(t0(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,o=Rs(e);hl(e,o,l);break;case 5:var m=a.stateNode;a.flags&32&&(Rn(m,""),a.flags&=-33);var h=Rs(e);hl(e,h,m);break;case 3:case 4:var w=a.stateNode.containerInfo,M=Rs(e);As(e,M,w);break;default:throw Error(c(161))}}catch(q){_e(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;c0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)i0(e,t.alternate,t),t=t.sibling}function gn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Aa(4,t,t.return),gn(t);break;case 1:It(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Jf(t,t.return,a),gn(t);break;case 27:nr(t.stateNode);case 26:case 5:It(t,t.return),gn(t);break;case 22:t.memoizedState===null&&gn(t);break;case 30:gn(t);break;default:gn(t)}e=e.sibling}}function Oa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:Oa(l,o,a),Wi(4,o);break;case 1:if(Oa(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(M){_e(n,n.return,M)}if(n=o,l=n.updateQueue,l!==null){var h=n.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)Yd(w[l],h)}catch(M){_e(n,n.return,M)}}a&&m&64&&$f(o),Qi(o,o.return);break;case 27:a0(o);case 26:case 5:Oa(l,o,a),a&&n===null&&m&4&&e0(o),Qi(o,o.return);break;case 12:Oa(l,o,a);break;case 13:Oa(l,o,a),a&&m&4&&o0(l,o);break;case 22:o.memoizedState===null&&Oa(l,o,a),Qi(o,o.return);break;case 30:break;default:Oa(l,o,a)}t=t.sibling}}function Ds(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Oi(a))}function Bs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e))}function Ft(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(e,t,a,n),t=t.sibling}function u0(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ft(e,t,a,n),l&2048&&Wi(9,t);break;case 1:Ft(e,t,a,n);break;case 3:Ft(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oi(e)));break;case 12:if(l&2048){Ft(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,h=o.onPostCommit;typeof h=="function"&&h(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){_e(t,t.return,w)}}else Ft(e,t,a,n);break;case 13:Ft(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?Ft(e,t,a,n):Pi(e,t):o._visibility&2?Ft(e,t,a,n):(o._visibility|=2,Pn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&Ds(m,t);break;case 24:Ft(e,t,a,n),l&2048&&Bs(t.alternate,t);break;default:Ft(e,t,a,n)}}function Pn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,h=a,w=n,M=m.flags;switch(m.tag){case 0:case 11:case 15:Pn(o,m,h,w,l),Wi(8,m);break;case 23:break;case 22:var q=m.stateNode;m.memoizedState!==null?q._visibility&2?Pn(o,m,h,w,l):Pi(o,m):(q._visibility|=2,Pn(o,m,h,w,l)),l&&M&2048&&Ds(m.alternate,m);break;case 24:Pn(o,m,h,w,l),l&&M&2048&&Bs(m.alternate,m);break;default:Pn(o,m,h,w,l)}t=t.sibling}}function Pi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Pi(a,n),l&2048&&Ds(n.alternate,n);break;case 24:Pi(a,n),l&2048&&Bs(n.alternate,n);break;default:Pi(a,n)}t=t.sibling}}var Zi=8192;function Zn(e){if(e.subtreeFlags&Zi)for(e=e.child;e!==null;)d0(e),e=e.sibling}function d0(e){switch(e.tag){case 26:Zn(e),e.flags&Zi&&e.memoizedState!==null&&j1(qt,e.memoizedState,e.memoizedProps);break;case 5:Zn(e);break;case 3:case 4:var t=qt;qt=zl(e.stateNode.containerInfo),Zn(e),qt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Zi,Zi=16777216,Zn(e),Zi=t):Zn(e));break;default:Zn(e)}}function f0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];it=n,p0(n,e)}f0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)m0(e),e=e.sibling}function m0(e){switch(e.tag){case 0:case 11:case 15:Ki(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:Ki(e);break;case 12:Ki(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,xl(e)):Ki(e);break;default:Ki(e)}}function xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];it=n,p0(n,e)}f0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Aa(8,t,t.return),xl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,xl(t));break;default:xl(t)}e=e.sibling}}function p0(e,t){for(;it!==null;){var a=it;switch(a.tag){case 0:case 11:case 15:Aa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Oi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,it=n;else e:for(a=e;it!==null;){n=it;var l=n.sibling,o=n.return;if(r0(n),n===a){it=null;break e}if(l!==null){l.return=o,it=l;break e}it=o}}}var Uh={getCacheForType:function(e){var t=dt(Je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Hh=typeof WeakMap=="function"?WeakMap:Map,Me=0,Ue=null,Ce=null,Te=0,Oe=0,Et=null,Da=!1,Kn=!1,Ls=!1,ma=0,Qe=0,Ba=0,hn=0,Ys=0,_t=0,$n=0,$i=null,yt=null,_s=!1,Us=0,bl=1/0,yl=null,La=null,st=0,Ya=null,Jn=null,ei=0,Hs=0,qs=null,g0=null,Ji=0,Xs=null;function Tt(){if((Me&2)!==0&&Te!==0)return Te&-Te;if(R.T!==null){var e=qn;return e!==0?e:Ps()}return Ru()}function h0(){_t===0&&(_t=(Te&536870912)===0||Re?Eu():536870912);var e=Yt.current;return e!==null&&(e.flags|=32),_t}function kt(e,t,a){(e===Ue&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(ti(e,0),_a(e,Te,_t,!1)),xi(e,a),((Me&2)===0||e!==Ue)&&(e===Ue&&((Me&2)===0&&(hn|=a),Qe===4&&_a(e,Te,_t,!1)),Wt(e))}function x0(e,t,a){if((Me&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||hi(e,t),l=n?Vh(e,t):Is(e,t,!0),o=n;do{if(l===0){Kn&&!n&&_a(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!qh(a)){l=Is(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var h=e;l=$i;var w=h.current.memoizedState.isDehydrated;if(w&&(ti(h,m).flags|=256),m=Is(h,m,!1),m!==2){if(Ls&&!w){h.errorRecoveryDisabledLanes|=o,hn|=o,l=4;break e}o=yt,yt=l,o!==null&&(yt===null?yt=o:yt.push.apply(yt,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){ti(e,0),_a(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:_a(n,t,_t,!Da);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Us+300-ve(),10<l)){if(_a(n,t,_t,!Da),Rr(n,0,!0)!==0)break e;n.timeoutHandle=F0(b0.bind(null,n,a,yt,yl,_s,t,_t,hn,$n,Da,o,2,-0,0),l);break e}b0(n,a,yt,yl,_s,t,_t,hn,$n,Da,o,0,-0,0)}}break}while(!0);Wt(e)}function b0(e,t,a,n,l,o,m,h,w,M,q,F,D,Y){if(e.timeoutHandle=-1,F=t.subtreeFlags,(F&8192||(F&16785408)===16785408)&&(lr={stylesheets:null,count:0,unsuspend:S1},d0(t),F=C1(),F!==null)){e.cancelPendingCommit=F(N0.bind(null,e,t,o,a,n,l,m,h,w,q,1,D,Y)),_a(e,o,m,!M);return}N0(e,t,o,a,n,l,m,h,w)}function qh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!St(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,a,n){t&=~Ys,t&=~hn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-wt(l),m=1<<o;n[o]=-1,l&=~m}a!==0&&ku(e,a,t)}function vl(){return(Me&6)===0?(er(0),!1):!0}function Vs(){if(Ce!==null){if(Oe===0)var e=Ce.return;else e=Ce,ra=un=null,ls(e),Wn=null,Gi=0,e=Ce;for(;e!==null;)Kf(e.alternate,e),e=e.return;Ce=null}}function ti(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,r1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Vs(),Ue=e,Ce=a=aa(e.current,null),Te=t,Oe=0,Et=null,Da=!1,Kn=hi(e,t),Ls=!1,$n=_t=Ys=hn=Ba=Qe=0,yt=$i=null,_s=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-wt(n),o=1<<l;t|=e[l],n&=~o}return ma=t,Xr(),a}function y0(e,t){we=null,R.H=ol,t===Bi||t===Kr?(t=Bd(),Oe=3):t===Md?(t=Bd(),Oe=4):Oe=t===Yf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Et=t,Ce===null&&(Qe=1,fl(e,Ot(t,e.current)))}function v0(){var e=R.H;return R.H=ol,e===null?ol:e}function w0(){var e=R.A;return R.A=Uh,e}function Gs(){Qe=4,Da||(Te&4194048)!==Te&&Yt.current!==null||(Kn=!0),(Ba&134217727)===0&&(hn&134217727)===0||Ue===null||_a(Ue,Te,_t,!1)}function Is(e,t,a){var n=Me;Me|=2;var l=v0(),o=w0();(Ue!==e||Te!==t)&&(yl=null,ti(e,t)),t=!1;var m=Qe;e:do try{if(Oe!==0&&Ce!==null){var h=Ce,w=Et;switch(Oe){case 8:Vs(),m=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(t=!0);var M=Oe;if(Oe=0,Et=null,ai(e,h,w,M),a&&Kn){m=0;break e}break;default:M=Oe,Oe=0,Et=null,ai(e,h,w,M)}}Xh(),m=Qe;break}catch(q){y0(e,q)}while(!0);return t&&e.shellSuspendCounter++,ra=un=null,Me=n,R.H=l,R.A=o,Ce===null&&(Ue=null,Te=0,Xr()),m}function Xh(){for(;Ce!==null;)S0(Ce)}function Vh(e,t){var a=Me;Me|=2;var n=v0(),l=w0();Ue!==e||Te!==t?(yl=null,bl=ve()+500,ti(e,t)):Kn=hi(e,t);e:do try{if(Oe!==0&&Ce!==null){t=Ce;var o=Et;t:switch(Oe){case 1:Oe=0,Et=null,ai(e,t,o,1);break;case 2:case 9:if(Od(o)){Oe=0,Et=null,j0(t);break}t=function(){Oe!==2&&Oe!==9||Ue!==e||(Oe=7),Wt(e)},o.then(t,t);break e;case 3:Oe=7;break e;case 4:Oe=5;break e;case 7:Od(o)?(Oe=0,Et=null,j0(t)):(Oe=0,Et=null,ai(e,t,o,7));break;case 5:var m=null;switch(Ce.tag){case 26:m=Ce.memoizedState;case 5:case 27:var h=Ce;if(!m||im(m)){Oe=0,Et=null;var w=h.sibling;if(w!==null)Ce=w;else{var M=h.return;M!==null?(Ce=M,wl(M)):Ce=null}break t}}Oe=0,Et=null,ai(e,t,o,5);break;case 6:Oe=0,Et=null,ai(e,t,o,6);break;case 8:Vs(),Qe=6;break e;default:throw Error(c(462))}}Gh();break}catch(q){y0(e,q)}while(!0);return ra=un=null,R.H=n,R.A=l,Me=a,Ce!==null?0:(Ue=null,Te=0,Xr(),Qe)}function Gh(){for(;Ce!==null&&!Q();)S0(Ce)}function S0(e){var t=Pf(e.alternate,e,ma);e.memoizedProps=e.pendingProps,t===null?wl(e):Ce=t}function j0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Vf(a,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Vf(a,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:ls(t);default:Kf(a,t),t=Ce=jd(t,ma),t=Pf(a,t,ma)}e.memoizedProps=e.pendingProps,t===null?wl(e):Ce=t}function ai(e,t,a,n){ra=un=null,ls(t),Wn=null,Gi=0;var l=t.return;try{if(Oh(e,l,t,a,Te)){Qe=1,fl(e,Ot(a,e.current)),Ce=null;return}}catch(o){if(l!==null)throw Ce=l,o;Qe=1,fl(e,Ot(a,e.current)),Ce=null;return}t.flags&32768?(Re||n===1?e=!0:Kn||(Te&536870912)!==0?e=!1:(Da=e=!0,(n===2||n===9||n===3||n===6)&&(n=Yt.current,n!==null&&n.tag===13&&(n.flags|=16384))),C0(t,e)):wl(t)}function wl(e){var t=e;do{if((t.flags&32768)!==0){C0(t,Da);return}e=t.return;var a=Bh(t.alternate,t,ma);if(a!==null){Ce=a;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Qe===0&&(Qe=5)}function C0(e,t){do{var a=Lh(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);Qe=6,Ce=null}function N0(e,t,a,n,l,o,m,h,w){e.cancelPendingCommit=null;do Sl();while(st!==0);if((Me&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=Bo,Sg(e,a,o,m,h,w),e===Ue&&(Ce=Ue=null,Te=0),Jn=t,Ya=e,ei=a,Hs=o,qs=l,g0=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qh(Jt,function(){return R0(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=R.T,R.T=null,l=P.p,P.p=2,m=Me,Me|=4;try{Yh(e,t,a)}finally{Me=m,P.p=l,R.T=n}}st=1,E0(),T0(),k0()}}function E0(){if(st===1){st=0;var e=Ya,t=Jn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var n=P.p;P.p=2;var l=Me;Me|=4;try{s0(t,e);var o=nc,m=md(e.containerInfo),h=o.focusedElem,w=o.selectionRange;if(m!==h&&h&&h.ownerDocument&&fd(h.ownerDocument.documentElement,h)){if(w!==null&&Ro(h)){var M=w.start,q=w.end;if(q===void 0&&(q=M),"selectionStart"in h)h.selectionStart=M,h.selectionEnd=Math.min(q,h.value.length);else{var F=h.ownerDocument||document,D=F&&F.defaultView||window;if(D.getSelection){var Y=D.getSelection(),pe=h.textContent.length,de=Math.min(w.start,pe),Ye=w.end===void 0?de:Math.min(w.end,pe);!Y.extend&&de>Ye&&(m=Ye,Ye=de,de=m);var k=dd(h,de),E=dd(h,Ye);if(k&&E&&(Y.rangeCount!==1||Y.anchorNode!==k.node||Y.anchorOffset!==k.offset||Y.focusNode!==E.node||Y.focusOffset!==E.offset)){var A=F.createRange();A.setStart(k.node,k.offset),Y.removeAllRanges(),de>Ye?(Y.addRange(A),Y.extend(E.node,E.offset)):(A.setEnd(E.node,E.offset),Y.addRange(A))}}}}for(F=[],Y=h;Y=Y.parentNode;)Y.nodeType===1&&F.push({element:Y,left:Y.scrollLeft,top:Y.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var V=F[h];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Dl=!!ac,nc=ac=null}finally{Me=l,P.p=n,R.T=a}}e.current=t,st=2}}function T0(){if(st===2){st=0;var e=Ya,t=Jn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var n=P.p;P.p=2;var l=Me;Me|=4;try{i0(e,t.alternate,t)}finally{Me=l,P.p=n,R.T=a}}st=3}}function k0(){if(st===4||st===3){st=0,xe();var e=Ya,t=Jn,a=ei,n=g0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?st=5:(st=0,Jn=Ya=null,z0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(La=null),so(a),t=t.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(gi,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=R.T,l=P.p,P.p=2,R.T=null;try{for(var o=e.onRecoverableError,m=0;m<n.length;m++){var h=n[m];o(h.value,{componentStack:h.stack})}}finally{R.T=t,P.p=l}}(ei&3)!==0&&Sl(),Wt(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Xs?Ji++:(Ji=0,Xs=e):Ji=0,er(0)}}function z0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oi(t)))}function Sl(e){return E0(),T0(),k0(),R0()}function R0(){if(st!==5)return!1;var e=Ya,t=Hs;Hs=0;var a=so(ei),n=R.T,l=P.p;try{P.p=32>a?32:a,R.T=null,a=qs,qs=null;var o=Ya,m=ei;if(st=0,Jn=Ya=null,ei=0,(Me&6)!==0)throw Error(c(331));var h=Me;if(Me|=4,m0(o.current),u0(o,o.current,m,a),Me=h,er(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(gi,o)}catch{}return!0}finally{P.p=l,R.T=n,z0(e,t)}}function A0(e,t,a){t=Ot(a,t),t=vs(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(xi(e,2),Wt(e))}function _e(e,t,a){if(e.tag===3)A0(e,e,a);else for(;t!==null;){if(t.tag===3){A0(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(La===null||!La.has(n))){e=Ot(a,e),a=Bf(2),n=Ta(t,a,2),n!==null&&(Lf(a,n,t,e),xi(n,2),Wt(n));break}}t=t.return}}function Fs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Hh;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Ls=!0,l.add(a),e=Ih.bind(null,e,t,a),t.then(e,e))}function Ih(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ue===e&&(Te&a)===a&&(Qe===4||Qe===3&&(Te&62914560)===Te&&300>ve()-Us?(Me&2)===0&&ti(e,0):Ys|=a,$n===Te&&($n=0)),Wt(e)}function M0(e,t){t===0&&(t=Tu()),e=Yn(e,t),e!==null&&(xi(e,t),Wt(e))}function Fh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),M0(e,a)}function Wh(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),M0(e,a)}function Qh(e,t){return ke(e,t)}var jl=null,ni=null,Ws=!1,Cl=!1,Qs=!1,xn=0;function Wt(e){e!==ni&&e.next===null&&(ni===null?jl=ni=e:ni=ni.next=e),Cl=!0,Ws||(Ws=!0,Zh())}function er(e,t){if(!Qs&&Cl){Qs=!0;do for(var a=!1,n=jl;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var m=n.suspendedLanes,h=n.pingedLanes;o=(1<<31-wt(42|e)+1)-1,o&=l&~(m&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,L0(n,o))}else o=Te,o=Rr(n,n===Ue?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||hi(n,o)||(a=!0,L0(n,o));n=n.next}while(a);Qs=!1}}function Ph(){O0()}function O0(){Cl=Ws=!1;var e=0;xn!==0&&(i1()&&(e=xn),xn=0);for(var t=ve(),a=null,n=jl;n!==null;){var l=n.next,o=D0(n,t);o===0?(n.next=null,a===null?jl=l:a.next=l,l===null&&(ni=a)):(a=n,(e!==0||(o&3)!==0)&&(Cl=!0)),n=l}er(e)}function D0(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-wt(o),h=1<<m,w=l[m];w===-1?((h&a)===0||(h&n)!==0)&&(l[m]=wg(h,t)):w<=t&&(e.expiredLanes|=h),o&=~h}if(t=Ue,a=Te,a=Rr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ae(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||hi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ae(n),so(a)){case 2:case 8:a=Rt;break;case 32:a=Jt;break;case 268435456:a=Sn;break;default:a=Jt}return n=B0.bind(null,e),a=ke(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ae(n),e.callbackPriority=2,e.callbackNode=null,2}function B0(e,t){if(st!==0&&st!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sl()&&e.callbackNode!==a)return null;var n=Te;return n=Rr(e,e===Ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(x0(e,n,t),D0(e,ve()),e.callbackNode!=null&&e.callbackNode===a?B0.bind(null,e):null)}function L0(e,t){if(Sl())return null;x0(e,t,!0)}function Zh(){l1(function(){(Me&6)!==0?ke(De,Ph):O0()})}function Ps(){return xn===0&&(xn=Eu()),xn}function Y0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Br(""+e)}function _0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Kh(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=Y0((l[gt]||null).action),m=n.submitter;m&&(t=(t=m[gt]||null)?Y0(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var h=new Ur("action","action",null,n,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(xn!==0){var w=m?_0(l,m):new FormData(l);gs(a,{pending:!0,data:w,method:l.method,action:o},null,w)}}else typeof o=="function"&&(h.preventDefault(),w=m?_0(l,m):new FormData(l),gs(a,{pending:!0,data:w,method:l.method,action:o},o,w))},currentTarget:l}]})}}for(var Zs=0;Zs<Do.length;Zs++){var Ks=Do[Zs],$h=Ks.toLowerCase(),Jh=Ks[0].toUpperCase()+Ks.slice(1);Ht($h,"on"+Jh)}Ht(hd,"onAnimationEnd"),Ht(xd,"onAnimationIteration"),Ht(bd,"onAnimationStart"),Ht("dblclick","onDoubleClick"),Ht("focusin","onFocus"),Ht("focusout","onBlur"),Ht(hh,"onTransitionRun"),Ht(xh,"onTransitionStart"),Ht(bh,"onTransitionCancel"),Ht(yd,"onTransitionEnd"),Tn("onMouseEnter",["mouseout","mouseover"]),Tn("onMouseLeave",["mouseout","mouseover"]),Tn("onPointerEnter",["pointerout","pointerover"]),Tn("onPointerLeave",["pointerout","pointerover"]),en("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),en("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),en("onBeforeInput",["compositionend","keypress","textInput","paste"]),en("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),en("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tr));function U0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var m=n.length-1;0<=m;m--){var h=n[m],w=h.instance,M=h.currentTarget;if(h=h.listener,w!==o&&l.isPropagationStopped())break e;o=h,l.currentTarget=M;try{o(l)}catch(q){dl(q)}l.currentTarget=null,o=w}else for(m=0;m<n.length;m++){if(h=n[m],w=h.instance,M=h.currentTarget,h=h.listener,w!==o&&l.isPropagationStopped())break e;o=h,l.currentTarget=M;try{o(l)}catch(q){dl(q)}l.currentTarget=null,o=w}}}}function Ne(e,t){var a=t[co];a===void 0&&(a=t[co]=new Set);var n=e+"__bubble";a.has(n)||(H0(t,e,2,!1),a.add(n))}function $s(e,t,a){var n=0;t&&(n|=4),H0(a,e,n,t)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Js(e){if(!e[Nl]){e[Nl]=!0,Mu.forEach(function(a){a!=="selectionchange"&&(e1.has(a)||$s(a,!1,e),$s(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nl]||(t[Nl]=!0,$s("selectionchange",!1,t))}}function H0(e,t,a,n){switch(um(t)){case 2:var l=T1;break;case 8:l=k1;break;default:l=mc}a=l.bind(null,t,a,e),l=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ec(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var h=n.stateNode.containerInfo;if(h===l)break;if(m===4)for(m=n.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;h!==null;){if(m=Cn(h),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){n=o=m;continue e}h=h.parentNode}}n=n.return}Fu(function(){var M=o,q=yo(a),F=[];e:{var D=vd.get(e);if(D!==void 0){var Y=Ur,pe=e;switch(e){case"keypress":if(Yr(a)===0)break e;case"keydown":case"keyup":Y=Qg;break;case"focusin":pe="focus",Y=No;break;case"focusout":pe="blur",Y=No;break;case"beforeblur":case"afterblur":Y=No;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Pu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=Kg;break;case hd:case xd:case bd:Y=Ug;break;case yd:Y=Jg;break;case"scroll":case"scrollend":Y=Dg;break;case"wheel":Y=th;break;case"copy":case"cut":case"paste":Y=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Ku;break;case"toggle":case"beforetoggle":Y=nh}var de=(t&4)!==0,Ye=!de&&(e==="scroll"||e==="scrollend"),k=de?D!==null?D+"Capture":null:D;de=[];for(var E=M,A;E!==null;){var V=E;if(A=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||A===null||k===null||(V=vi(E,k),V!=null&&de.push(ar(E,V,A))),Ye)break;E=E.return}0<de.length&&(D=new Y(D,pe,null,a,q),F.push({event:D,listeners:de}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",D&&a!==bo&&(pe=a.relatedTarget||a.fromElement)&&(Cn(pe)||pe[jn]))break e;if((Y||D)&&(D=q.window===q?q:(D=q.ownerDocument)?D.defaultView||D.parentWindow:window,Y?(pe=a.relatedTarget||a.toElement,Y=M,pe=pe?Cn(pe):null,pe!==null&&(Ye=f(pe),de=pe.tag,pe!==Ye||de!==5&&de!==27&&de!==6)&&(pe=null)):(Y=null,pe=M),Y!==pe)){if(de=Pu,V="onMouseLeave",k="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(de=Ku,V="onPointerLeave",k="onPointerEnter",E="pointer"),Ye=Y==null?D:yi(Y),A=pe==null?D:yi(pe),D=new de(V,E+"leave",Y,a,q),D.target=Ye,D.relatedTarget=A,V=null,Cn(q)===M&&(de=new de(k,E+"enter",pe,a,q),de.target=A,de.relatedTarget=Ye,V=de),Ye=V,Y&&pe)t:{for(de=Y,k=pe,E=0,A=de;A;A=ii(A))E++;for(A=0,V=k;V;V=ii(V))A++;for(;0<E-A;)de=ii(de),E--;for(;0<A-E;)k=ii(k),A--;for(;E--;){if(de===k||k!==null&&de===k.alternate)break t;de=ii(de),k=ii(k)}de=null}else de=null;Y!==null&&q0(F,D,Y,de,!1),pe!==null&&Ye!==null&&q0(F,Ye,pe,de,!0)}}e:{if(D=M?yi(M):window,Y=D.nodeName&&D.nodeName.toLowerCase(),Y==="select"||Y==="input"&&D.type==="file")var le=rd;else if(nd(D))if(ld)le=mh;else{le=dh;var Se=uh}else Y=D.nodeName,!Y||Y.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?M&&xo(M.elementType)&&(le=rd):le=fh;if(le&&(le=le(e,M))){id(F,le,a,q);break e}Se&&Se(e,D,M),e==="focusout"&&M&&D.type==="number"&&M.memoizedProps.value!=null&&ho(D,"number",D.value)}switch(Se=M?yi(M):window,e){case"focusin":(nd(Se)||Se.contentEditable==="true")&&(Dn=Se,Ao=M,ki=null);break;case"focusout":ki=Ao=Dn=null;break;case"mousedown":Mo=!0;break;case"contextmenu":case"mouseup":case"dragend":Mo=!1,pd(F,a,q);break;case"selectionchange":if(gh)break;case"keydown":case"keyup":pd(F,a,q)}var ue;if(To)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else On?td(e,a)&&(fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(fe="onCompositionStart");fe&&($u&&a.locale!=="ko"&&(On||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&On&&(ue=Wu()):(ja=q,So="value"in ja?ja.value:ja.textContent,On=!0)),Se=El(M,fe),0<Se.length&&(fe=new Zu(fe,e,null,a,q),F.push({event:fe,listeners:Se}),ue?fe.data=ue:(ue=ad(a),ue!==null&&(fe.data=ue)))),(ue=rh?lh(e,a):oh(e,a))&&(fe=El(M,"onBeforeInput"),0<fe.length&&(Se=new Zu("onBeforeInput","beforeinput",null,a,q),F.push({event:Se,listeners:fe}),Se.data=ue)),Kh(F,e,M,a,q)}U0(F,t)})}function ar(e,t,a){return{instance:e,listener:t,currentTarget:a}}function El(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=vi(e,a),l!=null&&n.unshift(ar(e,l,o)),l=vi(e,t),l!=null&&n.push(ar(e,l,o))),e.tag===3)return n;e=e.return}return[]}function ii(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function q0(e,t,a,n,l){for(var o=t._reactName,m=[];a!==null&&a!==n;){var h=a,w=h.alternate,M=h.stateNode;if(h=h.tag,w!==null&&w===n)break;h!==5&&h!==26&&h!==27||M===null||(w=M,l?(M=vi(a,o),M!=null&&m.unshift(ar(a,M,w))):l||(M=vi(a,o),M!=null&&m.push(ar(a,M,w)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var t1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function X0(e){return(typeof e=="string"?e:""+e).replace(t1,`
`).replace(a1,"")}function V0(e,t){return t=X0(t),X0(e)===t}function Tl(){}function Le(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Rn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Rn(e,""+n);break;case"className":Mr(e,"class",n);break;case"tabIndex":Mr(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Mr(e,a,n);break;case"style":Gu(e,n,o);break;case"data":if(t!=="object"){Mr(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Br(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Le(e,t,"name",l.name,l,null),Le(e,t,"formEncType",l.formEncType,l,null),Le(e,t,"formMethod",l.formMethod,l,null),Le(e,t,"formTarget",l.formTarget,l,null)):(Le(e,t,"encType",l.encType,l,null),Le(e,t,"method",l.method,l,null),Le(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Br(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Tl);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Br(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),Ar(e,"popover",n);break;case"xlinkActuate":ea(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":ea(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":ea(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":ea(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":ea(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":ea(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":ea(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":ea(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":ea(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ar(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Mg.get(a)||a,Ar(e,a,n))}}function tc(e,t,a,n,l,o){switch(a){case"style":Gu(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Rn(e,n):(typeof n=="number"||typeof n=="bigint")&&Rn(e,""+n);break;case"onScroll":n!=null&&Ne("scroll",e);break;case"onScrollEnd":n!=null&&Ne("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ou.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[gt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ar(e,a,n)}}}function ct(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var m=a[o];if(m!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Le(e,t,o,m,a,null)}}l&&Le(e,t,"srcSet",a.srcSet,a,null),n&&Le(e,t,"src",a.src,a,null);return;case"input":Ne("invalid",e);var h=o=m=l=null,w=null,M=null;for(n in a)if(a.hasOwnProperty(n)){var q=a[n];if(q!=null)switch(n){case"name":l=q;break;case"type":m=q;break;case"checked":w=q;break;case"defaultChecked":M=q;break;case"value":o=q;break;case"defaultValue":h=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(c(137,t));break;default:Le(e,t,n,q,a,null)}}Hu(e,o,h,w,M,m,l,!1),Or(e);return;case"select":Ne("invalid",e),n=m=o=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":o=h;break;case"defaultValue":m=h;break;case"multiple":n=h;default:Le(e,t,l,h,a,null)}t=o,a=m,e.multiple=!!n,t!=null?zn(e,!!n,t,!1):a!=null&&zn(e,!!n,a,!0);return;case"textarea":Ne("invalid",e),o=l=n=null;for(m in a)if(a.hasOwnProperty(m)&&(h=a[m],h!=null))switch(m){case"value":n=h;break;case"defaultValue":l=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Le(e,t,m,h,a,null)}Xu(e,n,l,o),Or(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Le(e,t,w,n,a,null)}return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(n=0;n<tr.length;n++)Ne(tr[n],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(n=a[M],n!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Le(e,t,M,n,a,null)}return;default:if(xo(t)){for(q in a)a.hasOwnProperty(q)&&(n=a[q],n!==void 0&&tc(e,t,q,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Le(e,t,h,n,a,null))}function n1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,h=null,w=null,M=null,q=null;for(Y in a){var F=a[Y];if(a.hasOwnProperty(Y)&&F!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":w=F;default:n.hasOwnProperty(Y)||Le(e,t,Y,null,n,F)}}for(var D in n){var Y=n[D];if(F=a[D],n.hasOwnProperty(D)&&(Y!=null||F!=null))switch(D){case"type":o=Y;break;case"name":l=Y;break;case"checked":M=Y;break;case"defaultChecked":q=Y;break;case"value":m=Y;break;case"defaultValue":h=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(c(137,t));break;default:Y!==F&&Le(e,t,D,Y,n,F)}}go(e,m,h,w,M,q,o,l);return;case"select":Y=m=h=D=null;for(o in a)if(w=a[o],a.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":Y=w;default:n.hasOwnProperty(o)||Le(e,t,o,null,n,w)}for(l in n)if(o=n[l],w=a[l],n.hasOwnProperty(l)&&(o!=null||w!=null))switch(l){case"value":D=o;break;case"defaultValue":h=o;break;case"multiple":m=o;default:o!==w&&Le(e,t,l,o,n,w)}t=h,a=m,n=Y,D!=null?zn(e,!!a,D,!1):!!n!=!!a&&(t!=null?zn(e,!!a,t,!0):zn(e,!!a,a?[]:"",!1));return;case"textarea":Y=D=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Le(e,t,h,null,n,l)}for(m in n)if(l=n[m],o=a[m],n.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":D=l;break;case"defaultValue":Y=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Le(e,t,m,l,n,o)}qu(e,D,Y);return;case"option":for(var pe in a)if(D=a[pe],a.hasOwnProperty(pe)&&D!=null&&!n.hasOwnProperty(pe))switch(pe){case"selected":e.selected=!1;break;default:Le(e,t,pe,null,n,D)}for(w in n)if(D=n[w],Y=a[w],n.hasOwnProperty(w)&&D!==Y&&(D!=null||Y!=null))switch(w){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Le(e,t,w,D,n,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in a)D=a[de],a.hasOwnProperty(de)&&D!=null&&!n.hasOwnProperty(de)&&Le(e,t,de,null,n,D);for(M in n)if(D=n[M],Y=a[M],n.hasOwnProperty(M)&&D!==Y&&(D!=null||Y!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,t));break;default:Le(e,t,M,D,n,Y)}return;default:if(xo(t)){for(var Ye in a)D=a[Ye],a.hasOwnProperty(Ye)&&D!==void 0&&!n.hasOwnProperty(Ye)&&tc(e,t,Ye,void 0,n,D);for(q in n)D=n[q],Y=a[q],!n.hasOwnProperty(q)||D===Y||D===void 0&&Y===void 0||tc(e,t,q,D,n,Y);return}}for(var k in a)D=a[k],a.hasOwnProperty(k)&&D!=null&&!n.hasOwnProperty(k)&&Le(e,t,k,null,n,D);for(F in n)D=n[F],Y=a[F],!n.hasOwnProperty(F)||D===Y||D==null&&Y==null||Le(e,t,F,D,n,Y)}var ac=null,nc=null;function kl(e){return e.nodeType===9?e:e.ownerDocument}function G0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=null;function i1(){var e=window.event;return e&&e.type==="popstate"?e===rc?!1:(rc=e,!0):(rc=null,!1)}var F0=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(e){return W0.resolve(null).then(e).catch(o1)}:F0;function o1(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Q0(e,t){var a=t,n=0,l=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var m=e.ownerDocument;if(a&1&&nr(m.documentElement),a&2&&nr(m.body),a&4)for(a=m.head,nr(a),m=a.firstChild;m;){var h=m.nextSibling,w=m.nodeName;m[bi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=h}}if(l===0){e.removeChild(o),dr(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);dr(t)}function lc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lc(a),uo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function s1(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[bi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function c1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Xt(e.nextSibling),e===null))return null;return e}function oc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function u1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var sc=null;function P0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Z0(e,t,a){switch(t=kl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function nr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);uo(e)}var Ut=new Map,K0=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pa=P.d;P.d={f:d1,r:f1,D:m1,C:p1,L:g1,m:h1,X:b1,S:x1,M:y1};function d1(){var e=pa.f(),t=vl();return e||t}function f1(e){var t=Nn(e);t!==null&&t.tag===5&&t.type==="form"?xf(t):pa.r(e)}var ri=typeof document>"u"?null:document;function $0(e,t,a){var n=ri;if(n&&typeof t=="string"&&t){var l=Mt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),K0.has(l)||(K0.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ct(t,"link",e),at(t),n.head.appendChild(t)))}}function m1(e){pa.D(e),$0("dns-prefetch",e,null)}function p1(e,t){pa.C(e,t),$0("preconnect",e,t)}function g1(e,t,a){pa.L(e,t,a);var n=ri;if(n&&e&&t){var l='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Mt(a.imageSizes)+'"]')):l+='[href="'+Mt(e)+'"]';var o=l;switch(t){case"style":o=li(e);break;case"script":o=oi(e)}Ut.has(o)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Ut.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(ir(o))||t==="script"&&n.querySelector(rr(o))||(t=n.createElement("link"),ct(t,"link",e),at(t),n.head.appendChild(t)))}}function h1(e,t){pa.m(e,t);var a=ri;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Mt(n)+'"][href="'+Mt(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=oi(e)}if(!Ut.has(o)&&(e=y({rel:"modulepreload",href:e},t),Ut.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rr(o)))return}n=a.createElement("link"),ct(n,"link",e),at(n),a.head.appendChild(n)}}}function x1(e,t,a){pa.S(e,t,a);var n=ri;if(n&&e){var l=En(n).hoistableStyles,o=li(e);t=t||"default";var m=l.get(o);if(!m){var h={loading:0,preload:null};if(m=n.querySelector(ir(o)))h.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Ut.get(o))&&cc(e,a);var w=m=n.createElement("link");at(w),ct(w,"link",e),w._p=new Promise(function(M,q){w.onload=M,w.onerror=q}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Rl(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:h},l.set(o,m)}}}function b1(e,t){pa.X(e,t);var a=ri;if(a&&e){var n=En(a).hoistableScripts,l=oi(e),o=n.get(l);o||(o=a.querySelector(rr(l)),o||(e=y({src:e,async:!0},t),(t=Ut.get(l))&&uc(e,t),o=a.createElement("script"),at(o),ct(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function y1(e,t){pa.M(e,t);var a=ri;if(a&&e){var n=En(a).hoistableScripts,l=oi(e),o=n.get(l);o||(o=a.querySelector(rr(l)),o||(e=y({src:e,async:!0,type:"module"},t),(t=Ut.get(l))&&uc(e,t),o=a.createElement("script"),at(o),ct(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function J0(e,t,a,n){var l=(l=re.current)?zl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=li(a.href),a=En(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=li(a.href);var o=En(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(ir(e)))&&!o._p&&(m.instance=o,m.state.loading=5),Ut.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ut.set(e,a),o||v1(l,e,a,m.state))),t&&n===null)throw Error(c(528,""));return m}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=oi(a),a=En(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function li(e){return'href="'+Mt(e)+'"'}function ir(e){return'link[rel="stylesheet"]['+e+"]"}function em(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function v1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ct(t,"link",a),at(t),e.head.appendChild(t))}function oi(e){return'[src="'+Mt(e)+'"]'}function rr(e){return"script[async]"+e}function tm(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Mt(a.href)+'"]');if(n)return t.instance=n,at(n),n;var l=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),at(n),ct(n,"style",l),Rl(n,a.precedence,e),t.instance=n;case"stylesheet":l=li(a.href);var o=e.querySelector(ir(l));if(o)return t.state.loading|=4,t.instance=o,at(o),o;n=em(a),(l=Ut.get(l))&&cc(n,l),o=(e.ownerDocument||e).createElement("link"),at(o);var m=o;return m._p=new Promise(function(h,w){m.onload=h,m.onerror=w}),ct(o,"link",n),t.state.loading|=4,Rl(o,a.precedence,e),t.instance=o;case"script":return o=oi(a.src),(l=e.querySelector(rr(o)))?(t.instance=l,at(l),l):(n=a,(l=Ut.get(o))&&(n=y({},a),uc(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),at(l),ct(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rl(n,a.precedence,e));return t.instance}function Rl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,m=0;m<n.length;m++){var h=n[m];if(h.dataset.precedence===t)o=h;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function cc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Al=null;function am(e,t,a){if(Al===null){var n=new Map,l=Al=new Map;l.set(a,n)}else l=Al,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[bi]||o[ut]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var h=n.get(m);h?h.push(o):n.set(m,[o])}}return n}function nm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function w1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function im(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var lr=null;function S1(){}function j1(e,t,a){if(lr===null)throw Error(c(475));var n=lr;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=li(a.href),o=e.querySelector(ir(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ml.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,at(o);return}o=e.ownerDocument||e,a=em(a),(l=Ut.get(l))&&cc(a,l),o=o.createElement("link"),at(o);var m=o;m._p=new Promise(function(h,w){m.onload=h,m.onerror=w}),ct(o,"link",a),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ml.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function C1(){if(lr===null)throw Error(c(475));var e=lr;return e.stylesheets&&e.count===0&&dc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&dc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ml(){if(this.count--,this.count===0){if(this.stylesheets)dc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ol=null;function dc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ol=new Map,t.forEach(N1,e),Ol=null,Ml.call(e))}function N1(e,t){if(!(t.state.loading&4)){var a=Ol.get(e);if(a)var n=a.get(null);else{a=new Map,Ol.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}l=t.instance,m=l.getAttribute("data-precedence"),o=a.get(m)||n,o===n&&a.set(null,l),a.set(m,l),this.count++,n=Ml.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var or={$$typeof:J,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function E1(e,t,a,n,l,o,m,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lo(0),this.hiddenUpdates=lo(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function rm(e,t,a,n,l,o,m,h,w,M,q,F){return e=new E1(e,t,a,m,h,w,M,F),t=1,o===!0&&(t|=24),o=jt(3,null,null,t),e.current=o,o.stateNode=e,t=Fo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},Zo(o),e}function lm(e){return e?(e=_n,e):_n}function om(e,t,a,n,l,o){l=lm(l),n.context===null?n.context=l:n.pendingContext=l,n=Ea(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=Ta(e,n,t),a!==null&&(kt(a,e,t),Yi(a,e,t))}function sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function fc(e,t){sm(e,t),(e=e.alternate)&&sm(e,t)}function cm(e){if(e.tag===13){var t=Yn(e,67108864);t!==null&&kt(t,e,67108864),fc(e,67108864)}}var Dl=!0;function T1(e,t,a,n){var l=R.T;R.T=null;var o=P.p;try{P.p=2,mc(e,t,a,n)}finally{P.p=o,R.T=l}}function k1(e,t,a,n){var l=R.T;R.T=null;var o=P.p;try{P.p=8,mc(e,t,a,n)}finally{P.p=o,R.T=l}}function mc(e,t,a,n){if(Dl){var l=pc(n);if(l===null)ec(e,t,n,Bl,a),dm(e,n);else if(R1(l,e,t,a,n))n.stopPropagation();else if(dm(e,n),t&4&&-1<z1.indexOf(e)){for(;l!==null;){var o=Nn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=Ja(o.pendingLanes);if(m!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;m;){var w=1<<31-wt(m);h.entanglements[1]|=w,m&=~w}Wt(o),(Me&6)===0&&(bl=ve()+500,er(0))}}break;case 13:h=Yn(o,2),h!==null&&kt(h,o,2),vl(),fc(o,2)}if(o=pc(n),o===null&&ec(e,t,n,Bl,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else ec(e,t,n,null,a)}}function pc(e){return e=yo(e),gc(e)}var Bl=null;function gc(e){if(Bl=null,e=Cn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bl=e,null}function um(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case De:return 2;case Rt:return 8;case Jt:case Tr:return 32;case Sn:return 268435456;default:return 32}default:return 32}}var hc=!1,Ha=null,qa=null,Xa=null,sr=new Map,cr=new Map,Va=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dm(e,t){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(t.pointerId)}}function ur(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Nn(t),t!==null&&cm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function R1(e,t,a,n,l){switch(t){case"focusin":return Ha=ur(Ha,e,t,a,n,l),!0;case"dragenter":return qa=ur(qa,e,t,a,n,l),!0;case"mouseover":return Xa=ur(Xa,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return sr.set(o,ur(sr.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,cr.set(o,ur(cr.get(o)||null,e,t,a,n,l)),!0}return!1}function fm(e){var t=Cn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,jg(e.priority,function(){if(a.tag===13){var n=Tt();n=oo(n);var l=Yn(a,n);l!==null&&kt(l,a,n),fc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);bo=n,a.target.dispatchEvent(n),bo=null}else return t=Nn(a),t!==null&&cm(t),e.blockedOn=a,!1;t.shift()}return!0}function mm(e,t,a){Ll(e)&&a.delete(t)}function A1(){hc=!1,Ha!==null&&Ll(Ha)&&(Ha=null),qa!==null&&Ll(qa)&&(qa=null),Xa!==null&&Ll(Xa)&&(Xa=null),sr.forEach(mm),cr.forEach(mm)}function Yl(e,t){e.blockedOn===t&&(e.blockedOn=null,hc||(hc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,A1)))}var _l=null;function pm(e){_l!==e&&(_l=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_l===e&&(_l=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(gc(n||a)===null)continue;break}var o=Nn(a);o!==null&&(e.splice(t,3),t-=3,gs(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function dr(e){function t(w){return Yl(w,e)}Ha!==null&&Yl(Ha,e),qa!==null&&Yl(qa,e),Xa!==null&&Yl(Xa,e),sr.forEach(t),cr.forEach(t);for(var a=0;a<Va.length;a++){var n=Va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Va.length&&(a=Va[0],a.blockedOn===null);)fm(a),a.blockedOn===null&&Va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],m=l[gt]||null;if(typeof o=="function")m||pm(a);else if(m){var h=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[gt]||null)h=m.formAction;else if(gc(l)!==null)continue}else h=m.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),pm(a)}}}function xc(e){this._internalRoot=e}Ul.prototype.render=xc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=Tt();om(a,n,e,t,null,null)},Ul.prototype.unmount=xc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;om(e.current,2,null,e,null,null),vl(),t[jn]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ru();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Va.length&&t!==0&&t<Va[a].priority;a++);Va.splice(a,0,e),a===0&&fm(e)}};var gm=s.version;if(gm!=="19.1.0")throw Error(c(527,gm,"19.1.0"));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var M1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{gi=Hl.inject(M1),vt=Hl}catch{}}return mr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",l=Af,o=Mf,m=Of,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=rm(e,1,!1,null,null,a,n,l,o,m,h,null),e[jn]=t.current,Js(e),new xc(t)},mr.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,l="",o=Af,m=Mf,h=Of,w=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),t=rm(e,1,!0,t,a??null,n,l,o,m,h,w,M),t.context=lm(null),a=t.current,n=Tt(),n=oo(n),l=Ea(n),l.callback=null,Ta(a,l,n),a=n,t.current.lanes=a,xi(t,a),Wt(t),e[jn]=t.current,Js(e),new Ul(t)},mr.version="19.1.0",mr}var Nm;function X1(){if(Nm)return vc.exports;Nm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),vc.exports=q1(),vc.exports}var V1=X1();const G1=ou(V1);var pr={},Em;function I1(){if(Em)return pr;Em=1,Object.defineProperty(pr,"__esModule",{value:!0}),pr.parse=g,pr.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function g(S,z){const T=new f,_=S.length;if(_<2)return T;const H=(z==null?void 0:z.decode)||y;let U=0;do{const N=S.indexOf("=",U);if(N===-1)break;const J=S.indexOf(";",U),ee=J===-1?_:J;if(N>ee){U=S.lastIndexOf(";",N-1)+1;continue}const K=x(S,U,N),me=b(S,N,K),L=S.slice(K,me);if(T[L]===void 0){let ae=x(S,N+1,ee),B=b(S,ee,ae);const se=H(S.slice(ae,B));T[L]=se}U=ee+1}while(U<_);return T}function x(S,z,T){do{const _=S.charCodeAt(z);if(_!==32&&_!==9)return z}while(++z<T);return T}function b(S,z,T){for(;z>T;){const _=S.charCodeAt(--z);if(_!==32&&_!==9)return z+1}return T}function p(S,z,T){const _=(T==null?void 0:T.encode)||encodeURIComponent;if(!r.test(S))throw new TypeError(`argument name is invalid: ${S}`);const H=_(z);if(!s.test(H))throw new TypeError(`argument val is invalid: ${z}`);let U=S+"="+H;if(!T)return U;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);U+="; Max-Age="+T.maxAge}if(T.domain){if(!u.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);U+="; Domain="+T.domain}if(T.path){if(!c.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);U+="; Path="+T.path}if(T.expires){if(!O(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);U+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(U+="; HttpOnly"),T.secure&&(U+="; Secure"),T.partitioned&&(U+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":U+="; Priority=Low";break;case"medium":U+="; Priority=Medium";break;case"high":U+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":U+="; SameSite=Strict";break;case"lax":U+="; SameSite=Lax";break;case"none":U+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return U}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function O(S){return d.call(S)==="[object Date]"}return pr}I1();var Tm="popstate";function F1(r={}){function s(c,d){let{pathname:f,search:g,hash:x}=c.location;return Hc("",{pathname:f,search:g,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:yr(d)}return Q1(s,u,null,r)}function Ie(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Kt(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function W1(){return Math.random().toString(36).substring(2,10)}function km(r,s){return{usr:r.state,key:r.key,idx:s}}function Hc(r,s,u=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?fi(s):s,state:u,key:s&&s.key||c||W1()}}function yr({pathname:r="/",search:s="",hash:u=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function fi(r){let s={};if(r){let u=r.indexOf("#");u>=0&&(s.hash=r.substring(u),r=r.substring(0,u));let c=r.indexOf("?");c>=0&&(s.search=r.substring(c),r=r.substring(0,c)),r&&(s.pathname=r)}return s}function Q1(r,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,g=d.history,x="POP",b=null,p=y();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function y(){return(g.state||{idx:null}).idx}function O(){x="POP";let H=y(),U=H==null?null:H-p;p=H,b&&b({action:x,location:_.location,delta:U})}function S(H,U){x="PUSH";let N=Hc(_.location,H,U);p=y()+1;let J=km(N,p),ee=_.createHref(N);try{g.pushState(J,"",ee)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(ee)}f&&b&&b({action:x,location:_.location,delta:1})}function z(H,U){x="REPLACE";let N=Hc(_.location,H,U);p=y();let J=km(N,p),ee=_.createHref(N);g.replaceState(J,"",ee),f&&b&&b({action:x,location:_.location,delta:0})}function T(H){return P1(H)}let _={get action(){return x},get location(){return r(d,g)},listen(H){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Tm,O),b=H,()=>{d.removeEventListener(Tm,O),b=null}},createHref(H){return s(d,H)},createURL:T,encodeLocation(H){let U=T(H);return{pathname:U.pathname,search:U.search,hash:U.hash}},push:S,replace:z,go(H){return g.go(H)}};return _}function P1(r,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Ie(u,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:yr(r);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function bp(r,s,u="/"){return Z1(r,s,u,!1)}function Z1(r,s,u,c){let d=typeof s=="string"?fi(s):s,f=ha(d.pathname||"/",u);if(f==null)return null;let g=yp(r);K1(g);let x=null;for(let b=0;x==null&&b<g.length;++b){let p=sx(f);x=lx(g[b],p,c)}return x}function yp(r,s=[],u=[],c=""){let d=(f,g,x)=>{let b={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};b.relativePath.startsWith("/")&&(Ie(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length));let p=ga([c,b.relativePath]),y=u.concat(b);f.children&&f.children.length>0&&(Ie(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),yp(f.children,s,y,p)),!(f.path==null&&!f.index)&&s.push({path:p,score:ix(p,f.index),routesMeta:y})};return r.forEach((f,g)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,g);else for(let b of vp(f.path))d(f,g,b)}),s}function vp(r){let s=r.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let g=vp(c.join("/")),x=[];return x.push(...g.map(b=>b===""?f:[f,b].join("/"))),d&&x.push(...g),x.map(b=>r.startsWith("/")&&b===""?"/":b)}function K1(r){r.sort((s,u)=>s.score!==u.score?u.score-s.score:rx(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var $1=/^:[\w-]+$/,J1=3,ex=2,tx=1,ax=10,nx=-2,zm=r=>r==="*";function ix(r,s){let u=r.split("/"),c=u.length;return u.some(zm)&&(c+=nx),s&&(c+=ex),u.filter(d=>!zm(d)).reduce((d,f)=>d+($1.test(f)?J1:f===""?tx:ax),c)}function rx(r,s){return r.length===s.length&&r.slice(0,-1).every((c,d)=>c===s[d])?r[r.length-1]-s[s.length-1]:0}function lx(r,s,u=!1){let{routesMeta:c}=r,d={},f="/",g=[];for(let x=0;x<c.length;++x){let b=c[x],p=x===c.length-1,y=f==="/"?s:s.slice(f.length)||"/",O=Pl({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},y),S=b.route;if(!O&&p&&u&&!c[c.length-1].route.index&&(O=Pl({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!O)return null;Object.assign(d,O.params),g.push({params:d,pathname:ga([f,O.pathname]),pathnameBase:fx(ga([f,O.pathnameBase])),route:S}),O.pathnameBase!=="/"&&(f=ga([f,O.pathnameBase]))}return g}function Pl(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=ox(r.path,r.caseSensitive,r.end),d=s.match(u);if(!d)return null;let f=d[0],g=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:c.reduce((p,{paramName:y,isOptional:O},S)=>{if(y==="*"){let T=x[S]||"";g=f.slice(0,f.length-T.length).replace(/(.)\/+$/,"$1")}const z=x[S];return O&&!z?p[y]=void 0:p[y]=(z||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:g,pattern:r}}function ox(r,s=!1,u=!0){Kt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,b)=>(c.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function sx(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Kt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function ha(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}function cx(r,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof r=="string"?fi(r):r;return{pathname:u?u.startsWith("/")?u:ux(u,s):s,search:mx(c),hash:px(d)}}function ux(r,s){let u=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Cc(r,s,u,c){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dx(r){return r.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function wp(r){let s=dx(r);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function Sp(r,s,u,c=!1){let d;typeof r=="string"?d=fi(r):(d={...r},Ie(!d.pathname||!d.pathname.includes("?"),Cc("?","pathname","search",d)),Ie(!d.pathname||!d.pathname.includes("#"),Cc("#","pathname","hash",d)),Ie(!d.search||!d.search.includes("#"),Cc("#","search","hash",d)));let f=r===""||d.pathname==="",g=f?"/":d.pathname,x;if(g==null)x=u;else{let O=s.length-1;if(!c&&g.startsWith("..")){let S=g.split("/");for(;S[0]==="..";)S.shift(),O-=1;d.pathname=S.join("/")}x=O>=0?s[O]:"/"}let b=cx(d,x),p=g&&g!=="/"&&g.endsWith("/"),y=(f||g===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(p||y)&&(b.pathname+="/"),b}var ga=r=>r.join("/").replace(/\/\/+/g,"/"),fx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),mx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,px=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function gx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var jp=["POST","PUT","PATCH","DELETE"];new Set(jp);var hx=["GET",...jp];new Set(hx);var mi=v.createContext(null);mi.displayName="DataRouter";var Jl=v.createContext(null);Jl.displayName="DataRouterState";var Cp=v.createContext({isTransitioning:!1});Cp.displayName="ViewTransition";var xx=v.createContext(new Map);xx.displayName="Fetchers";var bx=v.createContext(null);bx.displayName="Await";var $t=v.createContext(null);$t.displayName="Navigation";var Sr=v.createContext(null);Sr.displayName="Location";var ya=v.createContext({outlet:null,matches:[],isDataRoute:!1});ya.displayName="Route";var uu=v.createContext(null);uu.displayName="RouteError";function yx(r,{relative:s}={}){Ie(jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=v.useContext($t),{hash:d,pathname:f,search:g}=Cr(r,{relative:s}),x=f;return u!=="/"&&(x=f==="/"?u:ga([u,f])),c.createHref({pathname:x,search:g,hash:d})}function jr(){return v.useContext(Sr)!=null}function $a(){return Ie(jr(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Sr).location}var Np="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ep(r){v.useContext($t).static||v.useLayoutEffect(r)}function vx(){let{isDataRoute:r}=v.useContext(ya);return r?Ox():wx()}function wx(){Ie(jr(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(mi),{basename:s,navigator:u}=v.useContext($t),{matches:c}=v.useContext(ya),{pathname:d}=$a(),f=JSON.stringify(wp(c)),g=v.useRef(!1);return Ep(()=>{g.current=!0}),v.useCallback((b,p={})=>{if(Kt(g.current,Np),!g.current)return;if(typeof b=="number"){u.go(b);return}let y=Sp(b,JSON.parse(f),d,p.relative==="path");r==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:ga([s,y.pathname])),(p.replace?u.replace:u.push)(y,p.state,p)},[s,u,f,d,r])}v.createContext(null);function Cr(r,{relative:s}={}){let{matches:u}=v.useContext(ya),{pathname:c}=$a(),d=JSON.stringify(wp(u));return v.useMemo(()=>Sp(r,JSON.parse(d),c,s==="path"),[r,d,c,s])}function Sx(r,s){return Tp(r,s)}function Tp(r,s,u,c){var U;Ie(jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext($t),{matches:f}=v.useContext(ya),g=f[f.length-1],x=g?g.params:{},b=g?g.pathname:"/",p=g?g.pathnameBase:"/",y=g&&g.route;{let N=y&&y.path||"";kp(b,!y||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let O=$a(),S;if(s){let N=typeof s=="string"?fi(s):s;Ie(p==="/"||((U=N.pathname)==null?void 0:U.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${N.pathname}" was given in the \`location\` prop.`),S=N}else S=O;let z=S.pathname||"/",T=z;if(p!=="/"){let N=p.replace(/^\//,"").split("/");T="/"+z.replace(/^\//,"").split("/").slice(N.length).join("/")}let _=bp(r,{pathname:T});Kt(y||_!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Kt(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let H=Tx(_&&_.map(N=>Object.assign({},N,{params:Object.assign({},x,N.params),pathname:ga([p,d.encodeLocation?d.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?p:ga([p,d.encodeLocation?d.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),f,u,c);return s&&H?v.createElement(Sr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},H):H}function jx(){let r=Mx(),s=gx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:f},"ErrorBoundary")," or"," ",v.createElement("code",{style:f},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},s),u?v.createElement("pre",{style:d},u):null,g)}var Cx=v.createElement(jx,null),Nx=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){console.error("React Router caught the following error during render",r,s)}render(){return this.state.error!==void 0?v.createElement(ya.Provider,{value:this.props.routeContext},v.createElement(uu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ex({routeContext:r,match:s,children:u}){let c=v.useContext(mi);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),v.createElement(ya.Provider,{value:r},u)}function Tx(r,s=[],u=null,c=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let d=r,f=u==null?void 0:u.errors;if(f!=null){let b=d.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Ie(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let g=!1,x=-1;if(u)for(let b=0;b<d.length;b++){let p=d[b];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=b),p.route.id){let{loaderData:y,errors:O}=u,S=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!O||O[p.route.id]===void 0);if(p.route.lazy||S){g=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((b,p,y)=>{let O,S=!1,z=null,T=null;u&&(O=f&&p.route.id?f[p.route.id]:void 0,z=p.route.errorElement||Cx,g&&(x<0&&y===0?(kp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):x===y&&(S=!0,T=p.route.hydrateFallbackElement||null)));let _=s.concat(d.slice(0,y+1)),H=()=>{let U;return O?U=z:S?U=T:p.route.Component?U=v.createElement(p.route.Component,null):p.route.element?U=p.route.element:U=b,v.createElement(Ex,{match:p,routeContext:{outlet:b,matches:_,isDataRoute:u!=null},children:U})};return u&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?v.createElement(Nx,{location:u.location,revalidation:u.revalidation,component:z,error:O,children:H(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):H()},null)}function du(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kx(r){let s=v.useContext(mi);return Ie(s,du(r)),s}function zx(r){let s=v.useContext(Jl);return Ie(s,du(r)),s}function Rx(r){let s=v.useContext(ya);return Ie(s,du(r)),s}function fu(r){let s=Rx(r),u=s.matches[s.matches.length-1];return Ie(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function Ax(){return fu("useRouteId")}function Mx(){var c;let r=v.useContext(uu),s=zx("useRouteError"),u=fu("useRouteError");return r!==void 0?r:(c=s.errors)==null?void 0:c[u]}function Ox(){let{router:r}=kx("useNavigate"),s=fu("useNavigate"),u=v.useRef(!1);return Ep(()=>{u.current=!0}),v.useCallback(async(d,f={})=>{Kt(u.current,Np),u.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:s,...f}))},[r,s])}var Rm={};function kp(r,s,u){!s&&!Rm[r]&&(Rm[r]=!0,Kt(!1,u))}v.memo(Dx);function Dx({routes:r,future:s,state:u}){return Tp(r,void 0,u,s)}function Fa(r){Ie(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bx({basename:r="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Ie(!jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=r.replace(/^\/*/,"/"),x=v.useMemo(()=>({basename:g,navigator:d,static:f,future:{}}),[g,d,f]);typeof u=="string"&&(u=fi(u));let{pathname:b="/",search:p="",hash:y="",state:O=null,key:S="default"}=u,z=v.useMemo(()=>{let T=ha(b,g);return T==null?null:{location:{pathname:T,search:p,hash:y,state:O,key:S},navigationType:c}},[g,b,p,y,O,S,c]);return Kt(z!=null,`<Router basename="${g}"> is not able to match the URL "${b}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:v.createElement($t.Provider,{value:x},v.createElement(Sr.Provider,{children:s,value:z}))}function Lx({children:r,location:s}){return Sx(qc(r),s)}function qc(r,s=[]){let u=[];return v.Children.forEach(r,(c,d)=>{if(!v.isValidElement(c))return;let f=[...s,d];if(c.type===v.Fragment){u.push.apply(u,qc(c.props.children,f));return}Ie(c.type===Fa,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ie(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=qc(c.props.children,f)),u.push(g)}),u}var Il="get",Fl="application/x-www-form-urlencoded";function eo(r){return r!=null&&typeof r.tagName=="string"}function Yx(r){return eo(r)&&r.tagName.toLowerCase()==="button"}function _x(r){return eo(r)&&r.tagName.toLowerCase()==="form"}function Ux(r){return eo(r)&&r.tagName.toLowerCase()==="input"}function Hx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function qx(r,s){return r.button===0&&(!s||s==="_self")&&!Hx(r)}var ql=null;function Xx(){if(ql===null)try{new FormData(document.createElement("form"),0),ql=!1}catch{ql=!0}return ql}var Vx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Nc(r){return r!=null&&!Vx.has(r)?(Kt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fl}"`),null):r}function Gx(r,s){let u,c,d,f,g;if(_x(r)){let x=r.getAttribute("action");c=x?ha(x,s):null,u=r.getAttribute("method")||Il,d=Nc(r.getAttribute("enctype"))||Fl,f=new FormData(r)}else if(Yx(r)||Ux(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||x.getAttribute("action");if(c=b?ha(b,s):null,u=r.getAttribute("formmethod")||x.getAttribute("method")||Il,d=Nc(r.getAttribute("formenctype"))||Nc(x.getAttribute("enctype"))||Fl,f=new FormData(x,r),!Xx()){let{name:p,type:y,value:O}=r;if(y==="image"){let S=p?`${p}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else p&&f.append(p,O)}}else{if(eo(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Il,c=null,d=Fl,g=r}return f&&d==="text/plain"&&(g=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:g}}function mu(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}async function Ix(r,s){if(r.id in s)return s[r.id];try{let u=await import(r.module);return s[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Wx(r,s,u){let c=await Promise.all(r.map(async d=>{let f=s.routes[d.route.id];if(f){let g=await Ix(f,u);return g.links?g.links():[]}return[]}));return Kx(c.flat(1).filter(Fx).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Am(r,s,u,c,d,f){let g=(b,p)=>u[p]?b.route.id!==u[p].route.id:!0,x=(b,p)=>{var y;return u[p].pathname!==b.pathname||((y=u[p].route.path)==null?void 0:y.endsWith("*"))&&u[p].params["*"]!==b.params["*"]};return f==="assets"?s.filter((b,p)=>g(b,p)||x(b,p)):f==="data"?s.filter((b,p)=>{var O;let y=c.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(g(b,p)||x(b,p))return!0;if(b.route.shouldRevalidate){let S=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((O=u[0])==null?void 0:O.params)||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Qx(r,s,{includeHydrateFallback:u}={}){return Px(r.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function Px(r){return[...new Set(r)]}function Zx(r){let s={},u=Object.keys(r).sort();for(let c of u)s[c]=r[c];return s}function Kx(r,s){let u=new Set;return new Set(s),r.reduce((c,d)=>{let f=JSON.stringify(Zx(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $x=new Set([100,101,204,205]);function Jx(r,s){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname="_root.data":s&&ha(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function zp(){let r=v.useContext(mi);return mu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function e2(){let r=v.useContext(Jl);return mu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var pu=v.createContext(void 0);pu.displayName="FrameworkContext";function Rp(){let r=v.useContext(pu);return mu(r,"You must render this element inside a <HydratedRouter> element"),r}function t2(r,s){let u=v.useContext(pu),[c,d]=v.useState(!1),[f,g]=v.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:p,onMouseLeave:y,onTouchStart:O}=s,S=v.useRef(null);v.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let _=U=>{U.forEach(N=>{g(N.isIntersecting)})},H=new IntersectionObserver(_,{threshold:.5});return S.current&&H.observe(S.current),()=>{H.disconnect()}}},[r]),v.useEffect(()=>{if(c){let _=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(_)}}},[c]);let z=()=>{d(!0)},T=()=>{d(!1),g(!1)};return u?r!=="intent"?[f,S,{}]:[f,S,{onFocus:gr(x,z),onBlur:gr(b,T),onMouseEnter:gr(p,z),onMouseLeave:gr(y,T),onTouchStart:gr(O,z)}]:[!1,S,{}]}function gr(r,s){return u=>{r&&r(u),u.defaultPrevented||s(u)}}function a2({page:r,...s}){let{router:u}=zp(),c=v.useMemo(()=>bp(u.routes,r,u.basename),[u.routes,r,u.basename]);return c?v.createElement(i2,{page:r,matches:c,...s}):null}function n2(r){let{manifest:s,routeModules:u}=Rp(),[c,d]=v.useState([]);return v.useEffect(()=>{let f=!1;return Wx(r,s,u).then(g=>{f||d(g)}),()=>{f=!0}},[r,s,u]),c}function i2({page:r,matches:s,...u}){let c=$a(),{manifest:d,routeModules:f}=Rp(),{basename:g}=zp(),{loaderData:x,matches:b}=e2(),p=v.useMemo(()=>Am(r,s,b,d,c,"data"),[r,s,b,d,c]),y=v.useMemo(()=>Am(r,s,b,d,c,"assets"),[r,s,b,d,c]),O=v.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let T=new Set,_=!1;if(s.forEach(U=>{var J;let N=d.routes[U.route.id];!N||!N.hasLoader||(!p.some(ee=>ee.route.id===U.route.id)&&U.route.id in x&&((J=f[U.route.id])!=null&&J.shouldRevalidate)||N.hasClientLoader?_=!0:T.add(U.route.id))}),T.size===0)return[];let H=Jx(r,g);return _&&T.size>0&&H.searchParams.set("_routes",s.filter(U=>T.has(U.route.id)).map(U=>U.route.id).join(",")),[H.pathname+H.search]},[g,x,c,d,p,s,r,f]),S=v.useMemo(()=>Qx(y,d),[y,d]),z=n2(y);return v.createElement(v.Fragment,null,O.map(T=>v.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...u})),S.map(T=>v.createElement("link",{key:T,rel:"modulepreload",href:T,...u})),z.map(({key:T,link:_})=>v.createElement("link",{key:T,..._})))}function r2(...r){return s=>{r.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var Ap=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ap&&(window.__reactRouterVersion="7.6.2")}catch{}function l2({basename:r,children:s,window:u}){let c=v.useRef();c.current==null&&(c.current=F1({window:u,v5Compat:!0}));let d=c.current,[f,g]=v.useState({action:d.action,location:d.location}),x=v.useCallback(b=>{v.startTransition(()=>g(b))},[g]);return v.useLayoutEffect(()=>d.listen(x),[d,x]),v.createElement(Bx,{basename:r,children:s,location:f.location,navigationType:f.action,navigator:d})}var Mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wa=v.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:g,state:x,target:b,to:p,preventScrollReset:y,viewTransition:O,...S},z){let{basename:T}=v.useContext($t),_=typeof p=="string"&&Mp.test(p),H,U=!1;if(typeof p=="string"&&_&&(H=p,Ap))try{let B=new URL(window.location.href),se=p.startsWith("//")?new URL(B.protocol+p):new URL(p),X=ha(se.pathname,T);se.origin===B.origin&&X!=null?p=X+se.search+se.hash:U=!0}catch{Kt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=yx(p,{relative:d}),[J,ee,K]=t2(c,S),me=u2(p,{replace:g,state:x,target:b,preventScrollReset:y,relative:d,viewTransition:O});function L(B){s&&s(B),B.defaultPrevented||me(B)}let ae=v.createElement("a",{...S,...K,href:H||N,onClick:U||f?s:L,ref:r2(z,ee),target:b,"data-discover":!_&&u==="render"?"true":void 0});return J&&!_?v.createElement(v.Fragment,null,ae,v.createElement(a2,{page:N})):ae});Wa.displayName="Link";var o2=v.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:g,viewTransition:x,children:b,...p},y){let O=Cr(g,{relative:p.relative}),S=$a(),z=v.useContext(Jl),{navigator:T,basename:_}=v.useContext($t),H=z!=null&&g2(O)&&x===!0,U=T.encodeLocation?T.encodeLocation(O).pathname:O.pathname,N=S.pathname,J=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;u||(N=N.toLowerCase(),J=J?J.toLowerCase():null,U=U.toLowerCase()),J&&_&&(J=ha(J,_)||J);const ee=U!=="/"&&U.endsWith("/")?U.length-1:U.length;let K=N===U||!d&&N.startsWith(U)&&N.charAt(ee)==="/",me=J!=null&&(J===U||!d&&J.startsWith(U)&&J.charAt(U.length)==="/"),L={isActive:K,isPending:me,isTransitioning:H},ae=K?s:void 0,B;typeof c=="function"?B=c(L):B=[c,K?"active":null,me?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let se=typeof f=="function"?f(L):f;return v.createElement(Wa,{...p,"aria-current":ae,className:B,ref:y,style:se,to:g,viewTransition:x},typeof b=="function"?b(L):b)});o2.displayName="NavLink";var s2=v.forwardRef(({discover:r="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:g=Il,action:x,onSubmit:b,relative:p,preventScrollReset:y,viewTransition:O,...S},z)=>{let T=m2(),_=p2(x,{relative:p}),H=g.toLowerCase()==="get"?"get":"post",U=typeof x=="string"&&Mp.test(x),N=J=>{if(b&&b(J),J.defaultPrevented)return;J.preventDefault();let ee=J.nativeEvent.submitter,K=(ee==null?void 0:ee.getAttribute("formmethod"))||g;T(ee||J.currentTarget,{fetcherKey:s,method:K,navigate:u,replace:d,state:f,relative:p,preventScrollReset:y,viewTransition:O})};return v.createElement("form",{ref:z,method:H,action:_,onSubmit:c?b:N,...S,"data-discover":!U&&r==="render"?"true":void 0})});s2.displayName="Form";function c2(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Op(r){let s=v.useContext(mi);return Ie(s,c2(r)),s}function u2(r,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:g}={}){let x=vx(),b=$a(),p=Cr(r,{relative:f});return v.useCallback(y=>{if(qx(y,s)){y.preventDefault();let O=u!==void 0?u:yr(b)===yr(p);x(r,{replace:O,state:c,preventScrollReset:d,relative:f,viewTransition:g})}},[b,x,p,u,c,s,r,d,f,g])}var d2=0,f2=()=>`__${String(++d2)}__`;function m2(){let{router:r}=Op("useSubmit"),{basename:s}=v.useContext($t),u=Ax();return v.useCallback(async(c,d={})=>{let{action:f,method:g,encType:x,formData:b,body:p}=Gx(c,s);if(d.navigate===!1){let y=d.fetcherKey||f2();await r.fetch(y,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||g,formEncType:d.encType||x,flushSync:d.flushSync})}else await r.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||g,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,s,u])}function p2(r,{relative:s}={}){let{basename:u}=v.useContext($t),c=v.useContext(ya);Ie(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...Cr(r||".",{relative:s})},g=$a();if(r==null){f.search=g.search;let x=new URLSearchParams(f.search),b=x.getAll("index");if(b.some(y=>y==="")){x.delete("index"),b.filter(O=>O).forEach(O=>x.append("index",O));let y=x.toString();f.search=y?`?${y}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:ga([u,f.pathname])),yr(f)}function g2(r,s={}){let u=v.useContext(Cp);Ie(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=Op("useViewTransitionState"),d=Cr(r,{relative:s.relative});if(!u.isTransitioning)return!1;let f=ha(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=ha(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Pl(d.pathname,g)!=null||Pl(d.pathname,f)!=null}[...$x];/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function h2(r,s,u){return(s=b2(s))in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function Mm(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function Z(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Mm(Object(u),!0).forEach(function(c){h2(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):Mm(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function x2(r,s){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function b2(r){var s=x2(r,"string");return typeof s=="symbol"?s:s+""}const Om=()=>{};let gu={},Dp={},Bp=null,Lp={mark:Om,measure:Om};try{typeof window<"u"&&(gu=window),typeof document<"u"&&(Dp=document),typeof MutationObserver<"u"&&(Bp=MutationObserver),typeof performance<"u"&&(Lp=performance)}catch{}const{userAgent:Dm=""}=gu.navigator||{},Pa=gu,He=Dp,Bm=Bp,Xl=Lp;Pa.document;const va=!!He.documentElement&&!!He.head&&typeof He.addEventListener=="function"&&typeof He.createElement=="function",Yp=~Dm.indexOf("MSIE")||~Dm.indexOf("Trident/");var y2=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,v2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,_p={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},w2={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Up=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],mt="classic",to="duotone",S2="sharp",j2="sharp-duotone",Hp=[mt,to,S2,j2],C2={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},N2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},E2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),T2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},k2=["fak","fa-kit","fakd","fa-kit-duotone"],Lm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},z2=["kit"],R2={kit:{"fa-kit":"fak"}},A2=["fak","fakd"],M2={kit:{fak:"fa-kit"}},Ym={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Vl={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},O2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D2=["fak","fa-kit","fakd","fa-kit-duotone"],B2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},L2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Y2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Xc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},_2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Vc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...O2,..._2],U2=["solid","regular","light","thin","duotone","brands"],qp=[1,2,3,4,5,6,7,8,9,10],H2=qp.concat([11,12,13,14,15,16,17,18,19,20]),q2=[...Object.keys(Y2),...U2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Vl.GROUP,Vl.SWAP_OPACITY,Vl.PRIMARY,Vl.SECONDARY].concat(qp.map(r=>"".concat(r,"x"))).concat(H2.map(r=>"w-".concat(r))),X2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const xa="___FONT_AWESOME___",Gc=16,Xp="fa",Vp="svg-inline--fa",vn="data-fa-i2svg",Ic="data-fa-pseudo-element",V2="data-fa-pseudo-element-pending",hu="data-prefix",xu="data-icon",_m="fontawesome-i2svg",G2="async",I2=["HTML","HEAD","STYLE","SCRIPT"],Gp=(()=>{try{return!0}catch{return!1}})();function Nr(r){return new Proxy(r,{get(s,u){return u in s?s[u]:s[mt]}})}const Ip=Z({},_p);Ip[mt]=Z(Z(Z(Z({},{"fa-duotone":"duotone"}),_p[mt]),Lm.kit),Lm["kit-duotone"]);const F2=Nr(Ip),Fc=Z({},T2);Fc[mt]=Z(Z(Z(Z({},{duotone:"fad"}),Fc[mt]),Ym.kit),Ym["kit-duotone"]);const Um=Nr(Fc),Wc=Z({},Xc);Wc[mt]=Z(Z({},Wc[mt]),M2.kit);const bu=Nr(Wc),Qc=Z({},L2);Qc[mt]=Z(Z({},Qc[mt]),R2.kit);Nr(Qc);const W2=y2,Fp="fa-layers-text",Q2=v2,P2=Z({},C2);Nr(P2);const Z2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ec=w2,K2=[...z2,...q2],xr=Pa.FontAwesomeConfig||{};function $2(r){var s=He.querySelector("script["+r+"]");if(s)return s.getAttribute(r)}function J2(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}He&&typeof He.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[u,c]=s;const d=J2($2(u));d!=null&&(xr[c]=d)});const Wp={styleDefault:"solid",familyDefault:mt,cssPrefix:Xp,replacementClass:Vp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xr.familyPrefix&&(xr.cssPrefix=xr.familyPrefix);const di=Z(Z({},Wp),xr);di.autoReplaceSvg||(di.observeMutations=!1);const ce={};Object.keys(Wp).forEach(r=>{Object.defineProperty(ce,r,{enumerable:!0,set:function(s){di[r]=s,br.forEach(u=>u(ce))},get:function(){return di[r]}})});Object.defineProperty(ce,"familyPrefix",{enumerable:!0,set:function(r){di.cssPrefix=r,br.forEach(s=>s(ce))},get:function(){return di.cssPrefix}});Pa.FontAwesomeConfig=ce;const br=[];function eb(r){return br.push(r),()=>{br.splice(br.indexOf(r),1)}}const Ia=Gc,Pt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tb(r){if(!r||!va)return;const s=He.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=r;const u=He.head.childNodes;let c=null;for(let d=u.length-1;d>-1;d--){const f=u[d],g=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(g)>-1&&(c=f)}return He.head.insertBefore(s,c),r}const ab="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vr(){let r=12,s="";for(;r-- >0;)s+=ab[Math.random()*62|0];return s}function pi(r){const s=[];for(let u=(r||[]).length>>>0;u--;)s[u]=r[u];return s}function yu(r){return r.classList?pi(r.classList):(r.getAttribute("class")||"").split(" ").filter(s=>s)}function Qp(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nb(r){return Object.keys(r||{}).reduce((s,u)=>s+"".concat(u,'="').concat(Qp(r[u]),'" '),"").trim()}function ao(r){return Object.keys(r||{}).reduce((s,u)=>s+"".concat(u,": ").concat(r[u].trim(),";"),"")}function vu(r){return r.size!==Pt.size||r.x!==Pt.x||r.y!==Pt.y||r.rotate!==Pt.rotate||r.flipX||r.flipY}function ib(r){let{transform:s,containerWidth:u,iconWidth:c}=r;const d={transform:"translate(".concat(u/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),g="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),x="rotate(".concat(s.rotate," 0 0)"),b={transform:"".concat(f," ").concat(g," ").concat(x)},p={transform:"translate(".concat(c/2*-1," -256)")};return{outer:d,inner:b,path:p}}function rb(r){let{transform:s,width:u=Gc,height:c=Gc,startCentered:d=!1}=r,f="";return d&&Yp?f+="translate(".concat(s.x/Ia-u/2,"em, ").concat(s.y/Ia-c/2,"em) "):d?f+="translate(calc(-50% + ".concat(s.x/Ia,"em), calc(-50% + ").concat(s.y/Ia,"em)) "):f+="translate(".concat(s.x/Ia,"em, ").concat(s.y/Ia,"em) "),f+="scale(".concat(s.size/Ia*(s.flipX?-1:1),", ").concat(s.size/Ia*(s.flipY?-1:1),") "),f+="rotate(".concat(s.rotate,"deg) "),f}var lb=`:root, :host {
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
}`;function Pp(){const r=Xp,s=Vp,u=ce.cssPrefix,c=ce.replacementClass;let d=lb;if(u!==r||c!==s){const f=new RegExp("\\.".concat(r,"\\-"),"g"),g=new RegExp("\\--".concat(r,"\\-"),"g"),x=new RegExp("\\.".concat(s),"g");d=d.replace(f,".".concat(u,"-")).replace(g,"--".concat(u,"-")).replace(x,".".concat(c))}return d}let Hm=!1;function Tc(){ce.autoAddCss&&!Hm&&(tb(Pp()),Hm=!0)}var ob={mixout(){return{dom:{css:Pp,insertCss:Tc}}},hooks(){return{beforeDOMElementCreation(){Tc()},beforeI2svg(){Tc()}}}};const ba=Pa||{};ba[xa]||(ba[xa]={});ba[xa].styles||(ba[xa].styles={});ba[xa].hooks||(ba[xa].hooks={});ba[xa].shims||(ba[xa].shims=[]);var Zt=ba[xa];const Zp=[],Kp=function(){He.removeEventListener("DOMContentLoaded",Kp),Zl=1,Zp.map(r=>r())};let Zl=!1;va&&(Zl=(He.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(He.readyState),Zl||He.addEventListener("DOMContentLoaded",Kp));function sb(r){va&&(Zl?setTimeout(r,0):Zp.push(r))}function Er(r){const{tag:s,attributes:u={},children:c=[]}=r;return typeof r=="string"?Qp(r):"<".concat(s," ").concat(nb(u),">").concat(c.map(Er).join(""),"</").concat(s,">")}function qm(r,s,u){if(r&&r[s]&&r[s][u])return{prefix:s,iconName:u,icon:r[s][u]}}var kc=function(s,u,c,d){var f=Object.keys(s),g=f.length,x=u,b,p,y;for(c===void 0?(b=1,y=s[f[0]]):(b=0,y=c);b<g;b++)p=f[b],y=x(y,s[p],p,s);return y};function cb(r){const s=[];let u=0;const c=r.length;for(;u<c;){const d=r.charCodeAt(u++);if(d>=55296&&d<=56319&&u<c){const f=r.charCodeAt(u++);(f&64512)==56320?s.push(((d&1023)<<10)+(f&1023)+65536):(s.push(d),u--)}else s.push(d)}return s}function Pc(r){const s=cb(r);return s.length===1?s[0].toString(16):null}function ub(r,s){const u=r.length;let c=r.charCodeAt(s),d;return c>=55296&&c<=56319&&u>s+1&&(d=r.charCodeAt(s+1),d>=56320&&d<=57343)?(c-55296)*1024+d-56320+65536:c}function Xm(r){return Object.keys(r).reduce((s,u)=>{const c=r[u];return!!c.icon?s[c.iconName]=c.icon:s[u]=c,s},{})}function Zc(r,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:c=!1}=u,d=Xm(s);typeof Zt.hooks.addPack=="function"&&!c?Zt.hooks.addPack(r,Xm(s)):Zt.styles[r]=Z(Z({},Zt.styles[r]||{}),d),r==="fas"&&Zc("fa",s)}const{styles:wr,shims:db}=Zt,$p=Object.keys(bu),fb=$p.reduce((r,s)=>(r[s]=Object.keys(bu[s]),r),{});let wu=null,Jp={},eg={},tg={},ag={},ng={};function mb(r){return~K2.indexOf(r)}function pb(r,s){const u=s.split("-"),c=u[0],d=u.slice(1).join("-");return c===r&&d!==""&&!mb(d)?d:null}const ig=()=>{const r=c=>kc(wr,(d,f,g)=>(d[g]=kc(f,c,{}),d),{});Jp=r((c,d,f)=>(d[3]&&(c[d[3]]=f),d[2]&&d[2].filter(x=>typeof x=="number").forEach(x=>{c[x.toString(16)]=f}),c)),eg=r((c,d,f)=>(c[f]=f,d[2]&&d[2].filter(x=>typeof x=="string").forEach(x=>{c[x]=f}),c)),ng=r((c,d,f)=>{const g=d[2];return c[f]=f,g.forEach(x=>{c[x]=f}),c});const s="far"in wr||ce.autoFetchSvg,u=kc(db,(c,d)=>{const f=d[0];let g=d[1];const x=d[2];return g==="far"&&!s&&(g="fas"),typeof f=="string"&&(c.names[f]={prefix:g,iconName:x}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:g,iconName:x}),c},{names:{},unicodes:{}});tg=u.names,ag=u.unicodes,wu=no(ce.styleDefault,{family:ce.familyDefault})};eb(r=>{wu=no(r.styleDefault,{family:ce.familyDefault})});ig();function Su(r,s){return(Jp[r]||{})[s]}function gb(r,s){return(eg[r]||{})[s]}function yn(r,s){return(ng[r]||{})[s]}function rg(r){return tg[r]||{prefix:null,iconName:null}}function hb(r){const s=ag[r],u=Su("fas",r);return s||(u?{prefix:"fas",iconName:u}:null)||{prefix:null,iconName:null}}function Za(){return wu}const lg=()=>({prefix:null,iconName:null,rest:[]});function xb(r){let s=mt;const u=$p.reduce((c,d)=>(c[d]="".concat(ce.cssPrefix,"-").concat(d),c),{});return Hp.forEach(c=>{(r.includes(u[c])||r.some(d=>fb[c].includes(d)))&&(s=c)}),s}function no(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:u=mt}=s,c=F2[u][r];if(u===to&&!r)return"fad";const d=Um[u][r]||Um[u][c],f=r in Zt.styles?r:null;return d||f||null}function bb(r){let s=[],u=null;return r.forEach(c=>{const d=pb(ce.cssPrefix,c);d?u=d:c&&s.push(c)}),{iconName:u,rest:s}}function Vm(r){return r.sort().filter((s,u,c)=>c.indexOf(s)===u)}function io(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:u=!1}=s;let c=null;const d=Vc.concat(D2),f=Vm(r.filter(O=>d.includes(O))),g=Vm(r.filter(O=>!Vc.includes(O))),x=f.filter(O=>(c=O,!Up.includes(O))),[b=null]=x,p=xb(f),y=Z(Z({},bb(g)),{},{prefix:no(b,{family:p})});return Z(Z(Z({},y),Sb({values:r,family:p,styles:wr,config:ce,canonical:y,givenPrefix:c})),yb(u,c,y))}function yb(r,s,u){let{prefix:c,iconName:d}=u;if(r||!c||!d)return{prefix:c,iconName:d};const f=s==="fa"?rg(d):{},g=yn(c,d);return d=f.iconName||g||d,c=f.prefix||c,c==="far"&&!wr.far&&wr.fas&&!ce.autoFetchSvg&&(c="fas"),{prefix:c,iconName:d}}const vb=Hp.filter(r=>r!==mt||r!==to),wb=Object.keys(Xc).filter(r=>r!==mt).map(r=>Object.keys(Xc[r])).flat();function Sb(r){const{values:s,family:u,canonical:c,givenPrefix:d="",styles:f={},config:g={}}=r,x=u===to,b=s.includes("fa-duotone")||s.includes("fad"),p=g.familyDefault==="duotone",y=c.prefix==="fad"||c.prefix==="fa-duotone";if(!x&&(b||p||y)&&(c.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(c.prefix="fab"),!c.prefix&&vb.includes(u)&&(Object.keys(f).find(S=>wb.includes(S))||g.autoFetchSvg)){const S=E2.get(u).defaultShortPrefixId;c.prefix=S,c.iconName=yn(c.prefix,c.iconName)||c.iconName}return(c.prefix==="fa"||d==="fa")&&(c.prefix=Za()||"fas"),c}class jb{constructor(){this.definitions={}}add(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];const d=u.reduce(this._pullDefinitions,{});Object.keys(d).forEach(f=>{this.definitions[f]=Z(Z({},this.definitions[f]||{}),d[f]),Zc(f,d[f]);const g=bu[mt][f];g&&Zc(g,d[f]),ig()})}reset(){this.definitions={}}_pullDefinitions(s,u){const c=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(c).map(d=>{const{prefix:f,iconName:g,icon:x}=c[d],b=x[2];s[f]||(s[f]={}),b.length>0&&b.forEach(p=>{typeof p=="string"&&(s[f][p]=x)}),s[f][g]=x}),s}}let Gm=[],si={};const ui={},Cb=Object.keys(ui);function Nb(r,s){let{mixoutsTo:u}=s;return Gm=r,si={},Object.keys(ui).forEach(c=>{Cb.indexOf(c)===-1&&delete ui[c]}),Gm.forEach(c=>{const d=c.mixout?c.mixout():{};if(Object.keys(d).forEach(f=>{typeof d[f]=="function"&&(u[f]=d[f]),typeof d[f]=="object"&&Object.keys(d[f]).forEach(g=>{u[f]||(u[f]={}),u[f][g]=d[f][g]})}),c.hooks){const f=c.hooks();Object.keys(f).forEach(g=>{si[g]||(si[g]=[]),si[g].push(f[g])})}c.provides&&c.provides(ui)}),u}function Kc(r,s){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];return(si[r]||[]).forEach(g=>{s=g.apply(null,[s,...c])}),s}function wn(r){for(var s=arguments.length,u=new Array(s>1?s-1:0),c=1;c<s;c++)u[c-1]=arguments[c];(si[r]||[]).forEach(f=>{f.apply(null,u)})}function Ka(){const r=arguments[0],s=Array.prototype.slice.call(arguments,1);return ui[r]?ui[r].apply(null,s):void 0}function $c(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:s}=r;const u=r.prefix||Za();if(s)return s=yn(u,s)||s,qm(og.definitions,u,s)||qm(Zt.styles,u,s)}const og=new jb,Eb=()=>{ce.autoReplaceSvg=!1,ce.observeMutations=!1,wn("noAuto")},Tb={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return va?(wn("beforeI2svg",r),Ka("pseudoElements2svg",r),Ka("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s}=r;ce.autoReplaceSvg===!1&&(ce.autoReplaceSvg=!0),ce.observeMutations=!0,sb(()=>{zb({autoReplaceSvgRoot:s}),wn("watch",r)})}},kb={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:yn(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const s=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],u=no(r[0]);return{prefix:u,iconName:yn(u,s)||s}}if(typeof r=="string"&&(r.indexOf("".concat(ce.cssPrefix,"-"))>-1||r.match(W2))){const s=io(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||Za(),iconName:yn(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){const s=Za();return{prefix:s,iconName:yn(s,r)||r}}}},zt={noAuto:Eb,config:ce,dom:Tb,parse:kb,library:og,findIconDefinition:$c,toHtml:Er},zb=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s=He}=r;(Object.keys(Zt.styles).length>0||ce.autoFetchSvg)&&va&&ce.autoReplaceSvg&&zt.dom.i2svg({node:s})};function ro(r,s){return Object.defineProperty(r,"abstract",{get:s}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(u=>Er(u))}}),Object.defineProperty(r,"node",{get:function(){if(!va)return;const u=He.createElement("div");return u.innerHTML=r.html,u.children}}),r}function Rb(r){let{children:s,main:u,mask:c,attributes:d,styles:f,transform:g}=r;if(vu(g)&&u.found&&!c.found){const{width:x,height:b}=u,p={x:x/b/2,y:.5};d.style=ao(Z(Z({},f),{},{"transform-origin":"".concat(p.x+g.x/16,"em ").concat(p.y+g.y/16,"em")}))}return[{tag:"svg",attributes:d,children:s}]}function Ab(r){let{prefix:s,iconName:u,children:c,attributes:d,symbol:f}=r;const g=f===!0?"".concat(s,"-").concat(ce.cssPrefix,"-").concat(u):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:Z(Z({},d),{},{id:g}),children:c}]}]}function ju(r){const{icons:{main:s,mask:u},prefix:c,iconName:d,transform:f,symbol:g,title:x,maskId:b,titleId:p,extra:y,watchable:O=!1}=r,{width:S,height:z}=u.found?u:s,T=A2.includes(c),_=[ce.replacementClass,d?"".concat(ce.cssPrefix,"-").concat(d):""].filter(K=>y.classes.indexOf(K)===-1).filter(K=>K!==""||!!K).concat(y.classes).join(" ");let H={children:[],attributes:Z(Z({},y.attributes),{},{"data-prefix":c,"data-icon":d,class:_,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(z)})};const U=T&&!~y.classes.indexOf("fa-fw")?{width:"".concat(S/z*16*.0625,"em")}:{};O&&(H.attributes[vn]=""),x&&(H.children.push({tag:"title",attributes:{id:H.attributes["aria-labelledby"]||"title-".concat(p||vr())},children:[x]}),delete H.attributes.title);const N=Z(Z({},H),{},{prefix:c,iconName:d,main:s,mask:u,maskId:b,transform:f,symbol:g,styles:Z(Z({},U),y.styles)}),{children:J,attributes:ee}=u.found&&s.found?Ka("generateAbstractMask",N)||{children:[],attributes:{}}:Ka("generateAbstractIcon",N)||{children:[],attributes:{}};return N.children=J,N.attributes=ee,g?Ab(N):Rb(N)}function Im(r){const{content:s,width:u,height:c,transform:d,title:f,extra:g,watchable:x=!1}=r,b=Z(Z(Z({},g.attributes),f?{title:f}:{}),{},{class:g.classes.join(" ")});x&&(b[vn]="");const p=Z({},g.styles);vu(d)&&(p.transform=rb({transform:d,startCentered:!0,width:u,height:c}),p["-webkit-transform"]=p.transform);const y=ao(p);y.length>0&&(b.style=y);const O=[];return O.push({tag:"span",attributes:b,children:[s]}),f&&O.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),O}function Mb(r){const{content:s,title:u,extra:c}=r,d=Z(Z(Z({},c.attributes),u?{title:u}:{}),{},{class:c.classes.join(" ")}),f=ao(c.styles);f.length>0&&(d.style=f);const g=[];return g.push({tag:"span",attributes:d,children:[s]}),u&&g.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),g}const{styles:zc}=Zt;function Jc(r){const s=r[0],u=r[1],[c]=r.slice(4);let d=null;return Array.isArray(c)?d={tag:"g",attributes:{class:"".concat(ce.cssPrefix,"-").concat(Ec.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(Ec.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(ce.cssPrefix,"-").concat(Ec.PRIMARY),fill:"currentColor",d:c[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:s,height:u,icon:d}}const Ob={found:!1,width:512,height:512};function Db(r,s){!Gp&&!ce.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(s,'" is missing.'))}function eu(r,s){let u=s;return s==="fa"&&ce.styleDefault!==null&&(s=Za()),new Promise((c,d)=>{if(u==="fa"){const f=rg(r)||{};r=f.iconName||r,s=f.prefix||s}if(r&&s&&zc[s]&&zc[s][r]){const f=zc[s][r];return c(Jc(f))}Db(r,s),c(Z(Z({},Ob),{},{icon:ce.showMissingIcons&&r?Ka("missingIconAbstract")||{}:{}}))})}const Fm=()=>{},tu=ce.measurePerformance&&Xl&&Xl.mark&&Xl.measure?Xl:{mark:Fm,measure:Fm},hr='FA "6.7.2"',Bb=r=>(tu.mark("".concat(hr," ").concat(r," begins")),()=>sg(r)),sg=r=>{tu.mark("".concat(hr," ").concat(r," ends")),tu.measure("".concat(hr," ").concat(r),"".concat(hr," ").concat(r," begins"),"".concat(hr," ").concat(r," ends"))};var Cu={begin:Bb,end:sg};const Wl=()=>{};function Wm(r){return typeof(r.getAttribute?r.getAttribute(vn):null)=="string"}function Lb(r){const s=r.getAttribute?r.getAttribute(hu):null,u=r.getAttribute?r.getAttribute(xu):null;return s&&u}function Yb(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(ce.replacementClass)}function _b(){return ce.autoReplaceSvg===!0?Ql.replace:Ql[ce.autoReplaceSvg]||Ql.replace}function Ub(r){return He.createElementNS("http://www.w3.org/2000/svg",r)}function Hb(r){return He.createElement(r)}function cg(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:u=r.tag==="svg"?Ub:Hb}=s;if(typeof r=="string")return He.createTextNode(r);const c=u(r.tag);return Object.keys(r.attributes||[]).forEach(function(f){c.setAttribute(f,r.attributes[f])}),(r.children||[]).forEach(function(f){c.appendChild(cg(f,{ceFn:u}))}),c}function qb(r){let s=" ".concat(r.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}const Ql={replace:function(r){const s=r[0];if(s.parentNode)if(r[1].forEach(u=>{s.parentNode.insertBefore(cg(u),s)}),s.getAttribute(vn)===null&&ce.keepOriginalSource){let u=He.createComment(qb(s));s.parentNode.replaceChild(u,s)}else s.remove()},nest:function(r){const s=r[0],u=r[1];if(~yu(s).indexOf(ce.replacementClass))return Ql.replace(r);const c=new RegExp("".concat(ce.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){const f=u[0].attributes.class.split(" ").reduce((g,x)=>(x===ce.replacementClass||x.match(c)?g.toSvg.push(x):g.toNode.push(x),g),{toNode:[],toSvg:[]});u[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",f.toNode.join(" "))}const d=u.map(f=>Er(f)).join(`
`);s.setAttribute(vn,""),s.innerHTML=d}};function Qm(r){r()}function ug(r,s){const u=typeof s=="function"?s:Wl;if(r.length===0)u();else{let c=Qm;ce.mutateApproach===G2&&(c=Pa.requestAnimationFrame||Qm),c(()=>{const d=_b(),f=Cu.begin("mutate");r.map(d),f(),u()})}}let Nu=!1;function dg(){Nu=!0}function au(){Nu=!1}let Kl=null;function Pm(r){if(!Bm||!ce.observeMutations)return;const{treeCallback:s=Wl,nodeCallback:u=Wl,pseudoElementsCallback:c=Wl,observeMutationsRoot:d=He}=r;Kl=new Bm(f=>{if(Nu)return;const g=Za();pi(f).forEach(x=>{if(x.type==="childList"&&x.addedNodes.length>0&&!Wm(x.addedNodes[0])&&(ce.searchPseudoElements&&c(x.target),s(x.target)),x.type==="attributes"&&x.target.parentNode&&ce.searchPseudoElements&&c(x.target.parentNode),x.type==="attributes"&&Wm(x.target)&&~Z2.indexOf(x.attributeName))if(x.attributeName==="class"&&Lb(x.target)){const{prefix:b,iconName:p}=io(yu(x.target));x.target.setAttribute(hu,b||g),p&&x.target.setAttribute(xu,p)}else Yb(x.target)&&u(x.target)})}),va&&Kl.observe(d,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Xb(){Kl&&Kl.disconnect()}function Vb(r){const s=r.getAttribute("style");let u=[];return s&&(u=s.split(";").reduce((c,d)=>{const f=d.split(":"),g=f[0],x=f.slice(1);return g&&x.length>0&&(c[g]=x.join(":").trim()),c},{})),u}function Gb(r){const s=r.getAttribute("data-prefix"),u=r.getAttribute("data-icon"),c=r.innerText!==void 0?r.innerText.trim():"";let d=io(yu(r));return d.prefix||(d.prefix=Za()),s&&u&&(d.prefix=s,d.iconName=u),d.iconName&&d.prefix||(d.prefix&&c.length>0&&(d.iconName=gb(d.prefix,r.innerText)||Su(d.prefix,Pc(r.innerText))),!d.iconName&&ce.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(d.iconName=r.firstChild.data)),d}function Ib(r){const s=pi(r.attributes).reduce((d,f)=>(d.name!=="class"&&d.name!=="style"&&(d[f.name]=f.value),d),{}),u=r.getAttribute("title"),c=r.getAttribute("data-fa-title-id");return ce.autoA11y&&(u?s["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(c||vr()):(s["aria-hidden"]="true",s.focusable="false")),s}function Fb(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Zm(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:u,prefix:c,rest:d}=Gb(r),f=Ib(r),g=Kc("parseNodeAttributes",{},r);let x=s.styleParser?Vb(r):[];return Z({iconName:u,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:c,transform:Pt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:x,attributes:f}},g)}const{styles:Wb}=Zt;function fg(r){const s=ce.autoReplaceSvg==="nest"?Zm(r,{styleParser:!1}):Zm(r);return~s.extra.classes.indexOf(Fp)?Ka("generateLayersText",r,s):Ka("generateSvgReplacementMutation",r,s)}function Qb(){return[...k2,...Vc]}function Km(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!va)return Promise.resolve();const u=He.documentElement.classList,c=y=>u.add("".concat(_m,"-").concat(y)),d=y=>u.remove("".concat(_m,"-").concat(y)),f=ce.autoFetchSvg?Qb():Up.concat(Object.keys(Wb));f.includes("fa")||f.push("fa");const g=[".".concat(Fp,":not([").concat(vn,"])")].concat(f.map(y=>".".concat(y,":not([").concat(vn,"])"))).join(", ");if(g.length===0)return Promise.resolve();let x=[];try{x=pi(r.querySelectorAll(g))}catch{}if(x.length>0)c("pending"),d("complete");else return Promise.resolve();const b=Cu.begin("onTree"),p=x.reduce((y,O)=>{try{const S=fg(O);S&&y.push(S)}catch(S){Gp||S.name==="MissingIcon"&&console.error(S)}return y},[]);return new Promise((y,O)=>{Promise.all(p).then(S=>{ug(S,()=>{c("active"),c("complete"),d("pending"),typeof s=="function"&&s(),b(),y()})}).catch(S=>{b(),O(S)})})}function Pb(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fg(r).then(u=>{u&&ug([u],s)})}function Zb(r){return function(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=(s||{}).icon?s:$c(s||{});let{mask:d}=u;return d&&(d=(d||{}).icon?d:$c(d||{})),r(c,Z(Z({},u),{},{mask:d}))}}const Kb=function(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Pt,symbol:c=!1,mask:d=null,maskId:f=null,title:g=null,titleId:x=null,classes:b=[],attributes:p={},styles:y={}}=s;if(!r)return;const{prefix:O,iconName:S,icon:z}=r;return ro(Z({type:"icon"},r),()=>(wn("beforeDOMElementCreation",{iconDefinition:r,params:s}),ce.autoA11y&&(g?p["aria-labelledby"]="".concat(ce.replacementClass,"-title-").concat(x||vr()):(p["aria-hidden"]="true",p.focusable="false")),ju({icons:{main:Jc(z),mask:d?Jc(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:O,iconName:S,transform:Z(Z({},Pt),u),symbol:c,title:g,maskId:f,titleId:x,extra:{attributes:p,styles:y,classes:b}})))};var $b={mixout(){return{icon:Zb(Kb)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=Km,r.nodeCallback=Pb,r}}},provides(r){r.i2svg=function(s){const{node:u=He,callback:c=()=>{}}=s;return Km(u,c)},r.generateSvgReplacementMutation=function(s,u){const{iconName:c,title:d,titleId:f,prefix:g,transform:x,symbol:b,mask:p,maskId:y,extra:O}=u;return new Promise((S,z)=>{Promise.all([eu(c,g),p.iconName?eu(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[_,H]=T;S([s,ju({icons:{main:_,mask:H},prefix:g,iconName:c,transform:x,symbol:b,maskId:y,title:d,titleId:f,extra:O,watchable:!0})])}).catch(z)})},r.generateAbstractIcon=function(s){let{children:u,attributes:c,main:d,transform:f,styles:g}=s;const x=ao(g);x.length>0&&(c.style=x);let b;return vu(f)&&(b=Ka("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),u.push(b||d.icon),{children:u,attributes:c}}}},Jb={mixout(){return{layer(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:u=[]}=s;return ro({type:"layer"},()=>{wn("beforeDOMElementCreation",{assembler:r,params:s});let c=[];return r(d=>{Array.isArray(d)?d.map(f=>{c=c.concat(f.abstract)}):c=c.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(ce.cssPrefix,"-layers"),...u].join(" ")},children:c}]})}}}},ey={mixout(){return{counter(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:u=null,classes:c=[],attributes:d={},styles:f={}}=s;return ro({type:"counter",content:r},()=>(wn("beforeDOMElementCreation",{content:r,params:s}),Mb({content:r.toString(),title:u,extra:{attributes:d,styles:f,classes:["".concat(ce.cssPrefix,"-layers-counter"),...c]}})))}}}},ty={mixout(){return{text(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Pt,title:c=null,classes:d=[],attributes:f={},styles:g={}}=s;return ro({type:"text",content:r},()=>(wn("beforeDOMElementCreation",{content:r,params:s}),Im({content:r,transform:Z(Z({},Pt),u),title:c,extra:{attributes:f,styles:g,classes:["".concat(ce.cssPrefix,"-layers-text"),...d]}})))}}},provides(r){r.generateLayersText=function(s,u){const{title:c,transform:d,extra:f}=u;let g=null,x=null;if(Yp){const b=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();g=p.width/b,x=p.height/b}return ce.autoA11y&&!c&&(f.attributes["aria-hidden"]="true"),Promise.resolve([s,Im({content:s.innerHTML,width:g,height:x,transform:d,title:c,extra:f,watchable:!0})])}}};const ay=new RegExp('"',"ug"),$m=[1105920,1112319],Jm=Z(Z(Z(Z({},{FontAwesome:{normal:"fas",400:"fas"}}),N2),X2),B2),nu=Object.keys(Jm).reduce((r,s)=>(r[s.toLowerCase()]=Jm[s],r),{}),ny=Object.keys(nu).reduce((r,s)=>{const u=nu[s];return r[s]=u[900]||[...Object.entries(u)][0][1],r},{});function iy(r){const s=r.replace(ay,""),u=ub(s,0),c=u>=$m[0]&&u<=$m[1],d=s.length===2?s[0]===s[1]:!1;return{value:Pc(d?s[0]:s),isSecondary:c||d}}function ry(r,s){const u=r.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(s),d=isNaN(c)?"normal":c;return(nu[u]||{})[d]||ny[u]}function ep(r,s){const u="".concat(V2).concat(s.replace(":","-"));return new Promise((c,d)=>{if(r.getAttribute(u)!==null)return c();const g=pi(r.children).filter(S=>S.getAttribute(Ic)===s)[0],x=Pa.getComputedStyle(r,s),b=x.getPropertyValue("font-family"),p=b.match(Q2),y=x.getPropertyValue("font-weight"),O=x.getPropertyValue("content");if(g&&!p)return r.removeChild(g),c();if(p&&O!=="none"&&O!==""){const S=x.getPropertyValue("content");let z=ry(b,y);const{value:T,isSecondary:_}=iy(S),H=p[0].startsWith("FontAwesome");let U=Su(z,T),N=U;if(H){const J=hb(T);J.iconName&&J.prefix&&(U=J.iconName,z=J.prefix)}if(U&&!_&&(!g||g.getAttribute(hu)!==z||g.getAttribute(xu)!==N)){r.setAttribute(u,N),g&&r.removeChild(g);const J=Fb(),{extra:ee}=J;ee.attributes[Ic]=s,eu(U,z).then(K=>{const me=ju(Z(Z({},J),{},{icons:{main:K,mask:lg()},prefix:z,iconName:N,extra:ee,watchable:!0})),L=He.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?r.insertBefore(L,r.firstChild):r.appendChild(L),L.outerHTML=me.map(ae=>Er(ae)).join(`
`),r.removeAttribute(u),c()}).catch(d)}else c()}else c()})}function ly(r){return Promise.all([ep(r,"::before"),ep(r,"::after")])}function oy(r){return r.parentNode!==document.head&&!~I2.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Ic)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function tp(r){if(va)return new Promise((s,u)=>{const c=pi(r.querySelectorAll("*")).filter(oy).map(ly),d=Cu.begin("searchPseudoElements");dg(),Promise.all(c).then(()=>{d(),au(),s()}).catch(()=>{d(),au(),u()})})}var sy={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=tp,r}}},provides(r){r.pseudoElements2svg=function(s){const{node:u=He}=s;ce.searchPseudoElements&&tp(u)}}};let ap=!1;var cy={mixout(){return{dom:{unwatch(){dg(),ap=!0}}}},hooks(){return{bootstrap(){Pm(Kc("mutationObserverCallbacks",{}))},noAuto(){Xb()},watch(r){const{observeMutationsRoot:s}=r;ap?au():Pm(Kc("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}};const np=r=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((u,c)=>{const d=c.toLowerCase().split("-"),f=d[0];let g=d.slice(1).join("-");if(f&&g==="h")return u.flipX=!0,u;if(f&&g==="v")return u.flipY=!0,u;if(g=parseFloat(g),isNaN(g))return u;switch(f){case"grow":u.size=u.size+g;break;case"shrink":u.size=u.size-g;break;case"left":u.x=u.x-g;break;case"right":u.x=u.x+g;break;case"up":u.y=u.y-g;break;case"down":u.y=u.y+g;break;case"rotate":u.rotate=u.rotate+g;break}return u},s)};var uy={mixout(){return{parse:{transform:r=>np(r)}}},hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-transform");return u&&(r.transform=np(u)),r}}},provides(r){r.generateAbstractTransformGrouping=function(s){let{main:u,transform:c,containerWidth:d,iconWidth:f}=s;const g={transform:"translate(".concat(d/2," 256)")},x="translate(".concat(c.x*32,", ").concat(c.y*32,") "),b="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),p="rotate(".concat(c.rotate," 0 0)"),y={transform:"".concat(x," ").concat(b," ").concat(p)},O={transform:"translate(".concat(f/2*-1," -256)")},S={outer:g,inner:y,path:O};return{tag:"g",attributes:Z({},S.outer),children:[{tag:"g",attributes:Z({},S.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:Z(Z({},u.icon.attributes),S.path)}]}]}}}};const Rc={x:0,y:0,width:"100%",height:"100%"};function ip(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||s)&&(r.attributes.fill="black"),r}function dy(r){return r.tag==="g"?r.children:[r]}var fy={hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-mask"),c=u?io(u.split(" ").map(d=>d.trim())):lg();return c.prefix||(c.prefix=Za()),r.mask=c,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(s){let{children:u,attributes:c,main:d,mask:f,maskId:g,transform:x}=s;const{width:b,icon:p}=d,{width:y,icon:O}=f,S=ib({transform:x,containerWidth:y,iconWidth:b}),z={tag:"rect",attributes:Z(Z({},Rc),{},{fill:"white"})},T=p.children?{children:p.children.map(ip)}:{},_={tag:"g",attributes:Z({},S.inner),children:[ip(Z({tag:p.tag,attributes:Z(Z({},p.attributes),S.path)},T))]},H={tag:"g",attributes:Z({},S.outer),children:[_]},U="mask-".concat(g||vr()),N="clip-".concat(g||vr()),J={tag:"mask",attributes:Z(Z({},Rc),{},{id:U,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,H]},ee={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:dy(O)},J]};return u.push(ee,{tag:"rect",attributes:Z({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(U,")")},Rc)}),{children:u,attributes:c}}}},my={provides(r){let s=!1;Pa.matchMedia&&(s=Pa.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const u=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:Z(Z({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=Z(Z({},d),{},{attributeName:"opacity"}),g={tag:"circle",attributes:Z(Z({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||g.children.push({tag:"animate",attributes:Z(Z({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:Z(Z({},f),{},{values:"1;0;1;1;0;1;"})}),u.push(g),u.push({tag:"path",attributes:Z(Z({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:Z(Z({},f),{},{values:"1;0;0;0;0;1;"})}]}),s||u.push({tag:"path",attributes:Z(Z({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:Z(Z({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},py={hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-symbol"),c=u===null?!1:u===""?!0:u;return r.symbol=c,r}}}},gy=[ob,$b,Jb,ey,ty,sy,cy,uy,fy,my,py];Nb(gy,{mixoutsTo:zt});zt.noAuto;zt.config;zt.library;zt.dom;const iu=zt.parse;zt.findIconDefinition;zt.toHtml;const hy=zt.icon;zt.layer;zt.text;zt.counter;var Ac={exports:{}},Mc,rp;function xy(){if(rp)return Mc;rp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Mc=r,Mc}var Oc,lp;function by(){if(lp)return Oc;lp=1;var r=xy();function s(){}function u(){}return u.resetWarningCache=s,Oc=function(){function c(g,x,b,p,y,O){if(O!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}c.isRequired=c;function d(){return c}var f={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:u,resetWarningCache:s};return f.PropTypes=f,f},Oc}var op;function yy(){return op||(op=1,Ac.exports=by()()),Ac.exports}var vy=yy();const Ee=ou(vy);function sp(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function Qt(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?sp(Object(u),!0).forEach(function(c){ci(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):sp(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function $l(r){"@babel/helpers - typeof";return $l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},$l(r)}function ci(r,s,u){return s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function wy(r,s){if(r==null)return{};var u={},c=Object.keys(r),d,f;for(f=0;f<c.length;f++)d=c[f],!(s.indexOf(d)>=0)&&(u[d]=r[d]);return u}function Sy(r,s){if(r==null)return{};var u=wy(r,s),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function ru(r){return jy(r)||Cy(r)||Ny(r)||Ey()}function jy(r){if(Array.isArray(r))return lu(r)}function Cy(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Ny(r,s){if(r){if(typeof r=="string")return lu(r,s);var u=Object.prototype.toString.call(r).slice(8,-1);if(u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set")return Array.from(r);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return lu(r,s)}}function lu(r,s){(s==null||s>r.length)&&(s=r.length);for(var u=0,c=new Array(s);u<s;u++)c[u]=r[u];return c}function Ey(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ty(r){var s,u=r.beat,c=r.fade,d=r.beatFade,f=r.bounce,g=r.shake,x=r.flash,b=r.spin,p=r.spinPulse,y=r.spinReverse,O=r.pulse,S=r.fixedWidth,z=r.inverse,T=r.border,_=r.listItem,H=r.flip,U=r.size,N=r.rotation,J=r.pull,ee=(s={"fa-beat":u,"fa-fade":c,"fa-beat-fade":d,"fa-bounce":f,"fa-shake":g,"fa-flash":x,"fa-spin":b,"fa-spin-reverse":y,"fa-spin-pulse":p,"fa-pulse":O,"fa-fw":S,"fa-inverse":z,"fa-border":T,"fa-li":_,"fa-flip":H===!0,"fa-flip-horizontal":H==="horizontal"||H==="both","fa-flip-vertical":H==="vertical"||H==="both"},ci(s,"fa-".concat(U),typeof U<"u"&&U!==null),ci(s,"fa-rotate-".concat(N),typeof N<"u"&&N!==null&&N!==0),ci(s,"fa-pull-".concat(J),typeof J<"u"&&J!==null),ci(s,"fa-swap-opacity",r.swapOpacity),s);return Object.keys(ee).map(function(K){return ee[K]?K:null}).filter(function(K){return K})}function ky(r){return r=r-0,r===r}function mg(r){return ky(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(s,u){return u?u.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var zy=["style"];function Ry(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Ay(r){return r.split(";").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,u){var c=u.indexOf(":"),d=mg(u.slice(0,c)),f=u.slice(c+1).trim();return d.startsWith("webkit")?s[Ry(d)]=f:s[d]=f,s},{})}function pg(r,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof s=="string")return s;var c=(s.children||[]).map(function(b){return pg(r,b)}),d=Object.keys(s.attributes||{}).reduce(function(b,p){var y=s.attributes[p];switch(p){case"class":b.attrs.className=y,delete s.attributes.class;break;case"style":b.attrs.style=Ay(y);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?b.attrs[p.toLowerCase()]=y:b.attrs[mg(p)]=y}return b},{attrs:{}}),f=u.style,g=f===void 0?{}:f,x=Sy(u,zy);return d.attrs.style=Qt(Qt({},d.attrs.style),g),r.apply(void 0,[s.tag,Qt(Qt({},d.attrs),x)].concat(ru(c)))}var gg=!1;try{gg=!0}catch{}function My(){if(!gg&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function cp(r){if(r&&$l(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(iu.icon)return iu.icon(r);if(r===null)return null;if(r&&$l(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Dc(r,s){return Array.isArray(s)&&s.length>0||!Array.isArray(s)&&s?ci({},r,s):{}}var up={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Qa=cu.forwardRef(function(r,s){var u=Qt(Qt({},up),r),c=u.icon,d=u.mask,f=u.symbol,g=u.className,x=u.title,b=u.titleId,p=u.maskId,y=cp(c),O=Dc("classes",[].concat(ru(Ty(u)),ru((g||"").split(" ")))),S=Dc("transform",typeof u.transform=="string"?iu.transform(u.transform):u.transform),z=Dc("mask",cp(d)),T=hy(y,Qt(Qt(Qt(Qt({},O),S),z),{},{symbol:f,title:x,titleId:b,maskId:p}));if(!T)return My("Could not find icon",y),null;var _=T.abstract,H={ref:s};return Object.keys(u).forEach(function(U){up.hasOwnProperty(U)||(H[U]=u[U])}),Oy(_[0],H)});Qa.displayName="FontAwesomeIcon";Qa.propTypes={beat:Ee.bool,border:Ee.bool,beatFade:Ee.bool,bounce:Ee.bool,className:Ee.string,fade:Ee.bool,flash:Ee.bool,mask:Ee.oneOfType([Ee.object,Ee.array,Ee.string]),maskId:Ee.string,fixedWidth:Ee.bool,inverse:Ee.bool,flip:Ee.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ee.oneOfType([Ee.object,Ee.array,Ee.string]),listItem:Ee.bool,pull:Ee.oneOf(["right","left"]),pulse:Ee.bool,rotation:Ee.oneOf([0,90,180,270]),shake:Ee.bool,size:Ee.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ee.bool,spinPulse:Ee.bool,spinReverse:Ee.bool,symbol:Ee.oneOfType([Ee.bool,Ee.string]),title:Ee.string,titleId:Ee.string,transform:Ee.oneOfType([Ee.string,Ee.object]),swapOpacity:Ee.bool};var Oy=pg.bind(null,cu.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Dy={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},By={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Ly=By,Yy={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},_y={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Uy={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]},Hy={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},qy=Hy,Xy={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Vy=Xy,Gy=({scrolled:r=!1})=>{const[s,u]=v.useState(!1),[c,d]=v.useState(!1),[f,g]=v.useState("logo.png"),x=$a(),b=["logo.png","/logo.png","./logo.png","/public/logo.png","/images/logo.png","./images/logo.png"];v.useEffect(()=>(document.body.classList.toggle("no-scroll",s),()=>document.body.classList.remove("no-scroll")),[s]),v.useEffect(()=>{u(!1)},[x]);const p=()=>u(!s),y=()=>u(!1),O=()=>{const z=b.indexOf(f)+1;console.log(`Logo failed to load from: ${f}`),z<b.length?(console.log(`Trying next path: ${b[z]}`),g(b[z])):(console.log("All logo paths failed, showing fallback"),d(!0))};return i.jsxs(i.Fragment,{children:[i.jsx("style",{jsx:!0,children:`
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
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(248, 250, 252, 0.9) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 18px;
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
        }

        .logo-container::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            rgba(59, 130, 246, 0.6) 0deg,
            rgba(37, 99, 235, 0.6) 120deg,
            rgba(29, 78, 216, 0.6) 240deg,
            rgba(59, 130, 246, 0.6) 360deg
          );
          animation: rotate 6s linear infinite;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .logo-container:hover::before {
          opacity: 0.2;
        }

        .logo-container::after {
          content: '';
          position: absolute;
          inset: 1px;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.95) 100%);
          border-radius: 17px;
          z-index: -1;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .logo-container:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 28px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .logo-hex {
          width: 40px;
          height: 40px;
          position: relative;
          margin-right: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-hex::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
          border: 2px solid #3b82f6;
        }

        .logo-container:hover .logo-hex::before {
          transform: rotate(180deg);
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
          border-color: #2563eb;
        }

        .logo-image {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          position: relative;
          z-index: 2;
          object-fit: cover;
        }

        .logo-fallback {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 900;
          color: white;
          position: relative;
          z-index: 2;
        }

        .company-info {
          display: flex;
          flex-direction: column;
          font-family: 'Poppins', sans-serif;
        }

        .company-name {
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
          letter-spacing: 0.3px;
        }

        .company-tagline {
          font-size: 0.6rem;
          color: rgba(59, 130, 246, 0.7);
          font-weight: 500;
          margin-top: 2px;
          letter-spacing: 1px;
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
      `}),i.jsx("header",{className:`navbar ${r?"scrolled":""}`,children:i.jsx("div",{className:"container",children:i.jsxs("nav",{className:"nav-container",children:[i.jsx("div",{className:"logo-section",children:i.jsxs(Wa,{to:"/",className:"logo-container",children:[i.jsx("div",{className:"logo-hex",children:c?i.jsx("div",{className:"logo-fallback",children:"PTC"}):i.jsx("img",{src:f,alt:"Pavan Techno Constructions",className:"logo-image",onError:O,onLoad:()=>console.log(`Logo loaded successfully from: ${f}`)})}),i.jsxs("div",{className:"company-info",children:[i.jsx("div",{className:"company-name",children:"PAVAN TECHNO CONSTRUCTIONS"}),i.jsx("div",{className:"company-tagline",children:"Engineering Excellence"})]})]})}),i.jsxs("div",{className:`nav-links ${s?"active":""}`,children:[i.jsx("div",{className:`nav-item ${x.pathname==="/"?"active":""}`,children:i.jsxs(Wa,{to:"/",onClick:y,children:[i.jsx(Qa,{icon:qy})," Home"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/services"?"active":""}`,children:i.jsxs(Wa,{to:"/services",onClick:y,children:[i.jsx(Qa,{icon:Ly})," Services"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/pricing"?"active":""}`,children:i.jsxs(Wa,{to:"/pricing",onClick:y,children:[i.jsx(Qa,{icon:Yy})," Pricing"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/gallery"?"active":""}`,children:i.jsxs(Wa,{to:"/gallery",onClick:y,children:[i.jsx(Qa,{icon:Uy})," Gallery"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/contact"?"active":""}`,children:i.jsxs(Wa,{to:"/contact",onClick:y,children:[i.jsx(Qa,{icon:_y})," Contact"]})})]}),i.jsx("button",{className:"hamburger",onClick:p,children:i.jsx(Qa,{icon:s?Vy:Dy})})]})})})]})},dp=({openPopup:r})=>{const[s,u]=v.useState({x:0,y:0}),[c,d]=v.useState(!1),[f,g]=v.useState(!1),[x,b]=v.useState(0),[p,y]=v.useState(!1),[O,S]=v.useState(!1),[z,T]=v.useState(!1),_=v.useRef(null),H=v.useRef([]),U=v.useRef(null),N=v.useRef(null),J=v.useRef(null),ee=v.useRef(null),K=[{src:"52886-471089084_tiny.mp4",title:"Our Construction Process",paths:["/images/52886-471089084_tiny.mp4","./images/52886-471089084_tiny.mp4","/assets/52886-471089084_tiny.mp4","./assets/52886-471089084_tiny.mp4","/videos/52886-471089084_tiny.mp4","/images/52886-471089084_tiny.mp4"]},{src:"42926-434300944_tiny.mp4",title:"Project Showcase",paths:["/images/42926-434300944_tiny.mp4","./images/42926-434300944_tiny.mp4","/assets/42926-434300944_tiny.mp4","./assets/42926-434300944_tiny.mp4","/videos/42926-434300944_tiny.mp4","/images/42926-434300944_tiny.mp4"]}],me=["/images/2835998-uhd_3840_2160_24fps.mp4","./images/2835998-uhd_3840_2160_24fps.mp4","/assets/2835998-uhd_3840_2160_24fps.mp4","./assets/2835998-uhd_3840_2160_24fps.mp4","/videos/2835998-uhd_3840_2160_24fps.mp4"],L=async C=>{C.preventDefault();const G=["assets/pavan.pdf","/assets/pavan.pdf","./assets/pavan.pdf","public/assets/pavan.pdf","/public/assets/pavan.pdf","images/pavan.pdf","/images/pavan.pdf","./images/pavan.pdf","pavan.pdf","/pavan.pdf"];let W=0,oe=!1;const re=async()=>{if(W>=G.length){alert("PDF file not found on server. Please contact support or try again later."),ae();return}const je=G[W];console.log(`Trying PDF path ${W+1}/${G.length}:`,je);try{if((await fetch(je,{method:"HEAD",headers:{Accept:"application/pdf"}})).ok){const Fe=await fetch(je);if(Fe.ok){const Ve=await Fe.blob();if(Ve.type==="application/pdf"||Ve.type===""||je.endsWith(".pdf")){const lt=window.URL.createObjectURL(new Blob([Ve],{type:"application/pdf"})),tt=document.createElement("a");tt.href=lt,tt.download="PAVAN_TECHNO_CONSTRUCTIONS_BROCHURE.pdf",tt.style.display="none",document.body.appendChild(tt),tt.click(),document.body.removeChild(tt),setTimeout(()=>window.URL.revokeObjectURL(lt),100),console.log("PDF downloaded successfully from:",je),oe=!0;return}else console.log("File is not a PDF:",je,"Type:",Ve.type)}}}catch(ye){console.log("Error accessing PDF at:",je,ye)}W++,setTimeout(re,100)};await re()},ae=()=>{const C=`
PAVAN TECHNO CONSTRUCTIONS
Engineering Excellence

Consult, Design & Execute

Contact Information:
- Website: Visit our website for more details
- Services: Construction, Design, Engineering
- Experience: 15+ Years in the industry
- Projects: 500+ Completed successfully

Note: This is a temporary file. Please contact us directly for the complete brochure.
    `,G=new Blob([C],{type:"text/plain"}),W=window.URL.createObjectURL(G),oe=document.createElement("a");oe.href=W,oe.download="PAVAN_TECHNO_CONSTRUCTIONS_INFO.txt",oe.style.display="none",document.body.appendChild(oe),oe.click(),document.body.removeChild(oe),setTimeout(()=>window.URL.revokeObjectURL(W),100),console.log("Fallback file created and downloaded")},B=()=>{if(!ee.current)return;let C=0;const G=()=>{if(C>=me.length){console.error("All background video paths failed");return}const W=me[C];console.log(`Trying background video path ${C+1}/${me.length}:`,W),ee.current.src=W,ee.current.load();const oe=()=>{console.log("Background video loaded successfully:",W),ee.current.play().catch(ye=>{console.warn("Background video autoplay blocked:",ye)}),je()},re=()=>{console.log("Background video path failed:",W),C++,je(),setTimeout(G,100)},je=()=>{var ye,Fe,Ve;(ye=ee.current)==null||ye.removeEventListener("loadeddata",oe),(Fe=ee.current)==null||Fe.removeEventListener("canplay",oe),(Ve=ee.current)==null||Ve.removeEventListener("error",re)};ee.current.addEventListener("loadeddata",oe,{once:!0}),ee.current.addEventListener("canplay",oe,{once:!0}),ee.current.addEventListener("error",re,{once:!0})};G()};v.useEffect(()=>{const C=()=>{const ke=new IntersectionObserver(Ae=>{Ae.forEach(Q=>{Q.isIntersecting&&(d(!0),lt())})},{threshold:.5});return U.current&&ke.observe(U.current),ke},G=ke=>{if(_.current){const Ae=_.current.getBoundingClientRect(),Q=(ke.clientX-Ae.left)/Ae.width-.5,xe=(ke.clientY-Ae.top)/Ae.height-.5;u({x:Q,y:xe})}},W=()=>{const ke=window.pageYOffset,Ae=window.innerHeight;if(ke>Ae*.7&&ke<Ae*1.5&&!f&&!z){X(!1);return}if(f&&ke>Ae*1.8){$(),setTimeout(()=>{se()},300);return}if(!f){const Q=ke*-.3;document.querySelectorAll(".geometric-shape").forEach((ve,qe)=>{const De=(qe+1)*.2;ve.style.transform+=` translateY(${Q*De}px)`})}},oe=ke=>{f&&(ke.preventDefault(),ke.deltaY>0?($(),setTimeout(()=>{se()},300)):ke.deltaY<0&&$())};let re=0;const je=ke=>{f&&(re=ke.touches[0].clientY)},ye=ke=>{f&&ke.preventDefault()},Fe=ke=>{if(f){const Ae=ke.changedTouches[0].clientY,Q=re-Ae;Q>50?($(),setTimeout(()=>{se()},300)):Q<-50&&$()}},Ve=()=>{const ke=Date.now()*.001;H.current.forEach((Ae,Q)=>{if(Ae){const xe=Math.sin(ke+Q*.7)*30,ve=Math.cos(ke+Q*.5)*20,qe=1+Math.sin(ke+Q)*.3;Ae.style.transform=`translate(${xe}px, ${ve}px) scale(${qe})`}}),requestAnimationFrame(Ve)},lt=()=>{document.querySelectorAll(".stat-number").forEach((Ae,Q)=>{const xe=parseInt(Ae.getAttribute("data-target")),qe=xe/(2e3/16);let De=0;const Rt=setInterval(()=>{De+=qe,De>=xe?(Ae.textContent=xe+(Ae.textContent.includes("+")?"+":"")+(Ae.textContent.includes("%")?"%":""),clearInterval(Rt)):Ae.textContent=Math.floor(De)+(Ae.textContent.includes("+")?"+":"")+(Ae.textContent.includes("%")?"%":"")},16)})},tt=C();return document.addEventListener("mousemove",G),window.addEventListener("scroll",W),document.addEventListener("wheel",oe,{passive:!1}),document.addEventListener("touchstart",je,{passive:!1}),document.addEventListener("touchmove",ye,{passive:!1}),document.addEventListener("touchend",Fe,{passive:!1}),Ve(),setTimeout(()=>{B()},500),()=>{tt.disconnect(),document.removeEventListener("mousemove",G),window.removeEventListener("scroll",W),document.removeEventListener("wheel",oe),document.removeEventListener("touchstart",je),document.removeEventListener("touchmove",ye),document.removeEventListener("touchend",Fe)}},[f,z]);const se=()=>{const C=document.querySelector("#about")||document.querySelector(".about-section")||document.querySelector("section:nth-of-type(2)");C?C.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight-100,behavior:"smooth"})},X=(C=!0)=>{console.log("Opening video modal for video:",K[x].title),g(!0),y(!0),document.body.style.overflow="hidden",C||T(!0),setTimeout(()=>{ne(x)},100)},ne=C=>{if(!N.current)return;const G=K[C];let W=0;const oe=()=>{if(W>=G.paths.length){console.error("All video paths failed for:",G.title),y(!1);return}const re=G.paths[W];console.log(`Trying video path ${W+1}/${G.paths.length}:`,re),N.current.src=re,N.current.load();const je=()=>{console.log("Video loaded successfully:",re),y(!1),setTimeout(()=>{N.current&&N.current.play().catch(Ve=>{console.warn("Video autoplay blocked:",Ve)})},100),Fe()},ye=Ve=>{console.log("Video path failed:",re,Ve),W++,Fe(),setTimeout(oe,100)},Fe=()=>{var Ve,lt,tt;(Ve=N.current)==null||Ve.removeEventListener("loadeddata",je),(lt=N.current)==null||lt.removeEventListener("canplay",je),(tt=N.current)==null||tt.removeEventListener("error",ye)};N.current.addEventListener("loadeddata",je,{once:!0}),N.current.addEventListener("canplay",je,{once:!0}),N.current.addEventListener("error",ye,{once:!0})};oe()},$=()=>{g(!1),y(!1),S(!1),document.body.style.overflow="auto",N.current&&(N.current.pause(),N.current.currentTime=0)},ie=()=>{if(x<K.length-1){const C=x+1;b(C),y(!0),setTimeout(()=>{ne(C)},100)}},ge=()=>{if(x>0){const C=x-1;b(C),y(!0),setTimeout(()=>{ne(C)},100)}},R=C=>{console.error("Video error event:",C.target.error)},P=C=>{f&&(C.key==="Escape"?$():C.key==="ArrowLeft"?ge():C.key==="ArrowRight"&&ie())};v.useEffect(()=>(document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)),[f,x]);const te=({children:C,className:G,delay:W=0})=>{const oe=C.split("");return i.jsx("span",{className:`animated-word ${G}`,children:oe.map((re,je)=>i.jsx("span",{className:"word-char",style:{animationDelay:`${W+je*.05}s`},children:re===" "?" ":re},je))})},he=({index:C})=>i.jsx("div",{ref:G=>H.current[C]=G,className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${C*.2}s`,animationDuration:`${8+Math.random()*4}s`}}),j=(C,G)=>{const W=C.currentTarget;G?(W.style.transform="translateY(-8px) scale(1.05) rotateX(10deg)",W.style.boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"):(W.style.transform="translateY(0) scale(1) rotateX(0deg)",W.style.boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)")},I=(C,G)=>{const W=C.currentTarget;G?(W.style.transform="translateY(-15px) scale(1.08) rotateY(8deg)",W.style.boxShadow="0 25px 50px rgba(59, 130, 246, 0.3)"):(W.style.transform="translateY(0) scale(1) rotateY(0deg)",W.style.boxShadow="0 8px 25px rgba(59, 130, 246, 0.1)")};return i.jsxs("section",{className:"hero",ref:_,children:[i.jsxs("div",{className:"hero-video-container",children:[i.jsx("video",{ref:ee,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"hero-video",style:{transform:`scale(1.1) translate(${s.x*15}px, ${s.y*15}px)`}}),i.jsx("div",{className:"hero-overlay",style:{background:`radial-gradient(circle at ${(s.x+.5)*100}% ${(s.y+.5)*100}%, 
                        rgba(59, 130, 246, 0.15) 0%, 
                        rgba(0, 0, 0, 0.6) 40%, 
                        rgba(0, 0, 0, 0.85) 100%)`}})]}),i.jsx("div",{className:"particles-container",children:Array.from({length:20},(C,G)=>i.jsx(he,{index:G},G))}),i.jsxs("div",{className:"hero-geometry",children:[i.jsx("div",{className:"geometric-shape shape-1",style:{transform:`translate(${s.x*-40}px, ${s.y*-30}px) rotate(${Date.now()*.01}deg)`}}),i.jsx("div",{className:"geometric-shape shape-2",style:{transform:`translate(${s.x*25}px, ${s.y*-20}px) rotate(${Date.now()*-.008}deg)`}}),i.jsx("div",{className:"geometric-shape shape-3",style:{transform:`translate(${s.x*-20}px, ${s.y*30}px) rotate(${Date.now()*.012}deg)`}})]}),i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-logo-title-container",children:[i.jsx("div",{className:"hero-company-logo",children:i.jsx("img",{src:"/public/images/logo.png",alt:"Pavan Techno Constructions Logo",className:"hero-logo-image",onError:C=>{const G=["/images/logo.png","./images/logo.png","/assets/logo.png","./assets/logo.png"],W=C.target.src,oe=G.findIndex(re=>W.includes(re.replace("./","")));oe<G.length-1?C.target.src=G[oe+1]:C.target.style.display="none"}})}),i.jsxs("div",{className:"title-tagline-container",children:[i.jsx("div",{className:"company-title",children:i.jsx("h1",{children:i.jsxs("span",{className:"title-line",children:[i.jsx(te,{className:"word-1",delay:.1,children:"PAVAN"})," ",i.jsx(te,{className:"word-2",delay:.3,children:"TECHNO"})," ",i.jsx(te,{className:"word-3",delay:.5,children:"CONSTRUCTIONS"})]})})}),i.jsx("div",{className:"tagline",children:i.jsx("p",{className:"typewriter",children:"Consult, Design & Execute"})})]})]}),i.jsx("div",{className:"description",children:i.jsx("p",{children:"Transforming architectural dreams into concrete reality with cutting-edge technology, innovative engineering solutions, and unwavering commitment to excellence."})}),i.jsxs("div",{className:"hero-buttons",children:[i.jsxs("button",{onClick:L,className:"hero-btn primary",onMouseEnter:C=>j(C,!0),onMouseLeave:C=>j(C,!1),children:[i.jsx("span",{children:"📄"})," Download Portfolio"]}),i.jsxs("button",{onClick:r,className:"hero-btn secondary",onMouseEnter:C=>j(C,!0),onMouseLeave:C=>j(C,!1),children:[i.jsx("span",{children:"⚡"})," Start Your Project"]})]}),i.jsxs("div",{className:"hero-stats",ref:U,children:[i.jsxs("div",{className:"stat",onMouseEnter:C=>I(C,!0),onMouseLeave:C=>I(C,!1),children:[i.jsx("div",{className:"stat-number","data-target":"500",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),i.jsxs("div",{className:"stat",onMouseEnter:C=>I(C,!0),onMouseLeave:C=>I(C,!1),children:[i.jsx("div",{className:"stat-number","data-target":"15",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Years Experience"})]}),i.jsxs("div",{className:"stat",onMouseEnter:C=>I(C,!0),onMouseLeave:C=>I(C,!1),children:[i.jsx("div",{className:"stat-number","data-target":"100",children:"0%"}),i.jsx("div",{className:"stat-label",children:"Client Satisfaction"})]})]})]}),i.jsxs("button",{ref:J,className:"see-us-circle",onClick:()=>X(!0),onMouseEnter:C=>{C.target.style.transform="scale(1.2) rotate(10deg)",C.target.style.boxShadow="0 20px 50px rgba(236, 72, 153, 0.8)"},onMouseLeave:C=>{C.target.style.transform="scale(1) rotate(0deg)",C.target.style.boxShadow="0 10px 30px rgba(236, 72, 153, 0.4)"},children:[i.jsx("span",{children:"See Us"}),i.jsx("span",{className:"play-icon",children:"▶"})]}),i.jsxs("button",{className:"scroll-btn",onClick:se,onMouseEnter:C=>{C.target.style.transform="translateX(-50%) translateY(-15px) scale(1.15)",C.target.style.background="rgba(255, 255, 255, 0.15)"},onMouseLeave:C=>{C.target.style.transform="translateX(-50%) translateY(0) scale(1)",C.target.style.background="none"},children:[i.jsx("span",{children:"Explore More"}),i.jsx("div",{className:"arrow",children:"↓"})]}),i.jsxs("button",{className:"floating-contact",onClick:r,onMouseEnter:C=>{C.target.style.transform="translateY(-10px) scale(1.15) rotate(3deg)",C.target.style.boxShadow="0 20px 50px rgba(59, 130, 246, 0.7)"},onMouseLeave:C=>{C.target.style.transform="translateY(0) scale(1) rotate(0deg)",C.target.style.boxShadow="0 8px 25px rgba(59, 130, 246, 0.4)"},children:[i.jsx("span",{children:"💬"})," Get Quote"]}),i.jsx("div",{className:`video-modal-overlay ${f?"active":""}`,children:i.jsxs("div",{className:"video-modal-container",children:[p&&i.jsxs("div",{className:"video-loading",children:[i.jsx("div",{className:"loading-spinner"}),"Loading Video..."]}),i.jsx("video",{ref:N,className:"video-modal-video",onError:R,onCanPlay:()=>y(!1),muted:!0,loop:!0,playsInline:!0,preload:"metadata",style:{opacity:p?0:1},children:i.jsx("p",{children:"Your browser does not support the video tag."})}),i.jsxs("div",{className:"video-controls",children:[i.jsx("button",{className:"video-nav-btn",onClick:ge,disabled:x===0,onMouseEnter:C=>{C.target.disabled||(C.target.style.transform="scale(1.2) translateX(-5px)")},onMouseLeave:C=>{C.target.style.transform="scale(1) translateX(0)"},children:"‹"}),i.jsx("button",{className:"video-nav-btn",onClick:ie,disabled:x===K.length-1,onMouseEnter:C=>{C.target.disabled||(C.target.style.transform="scale(1.2) translateX(5px)")},onMouseLeave:C=>{C.target.style.transform="scale(1) translateX(0)"},children:"›"})]}),i.jsx("button",{className:"video-close-btn",onClick:$,onMouseEnter:C=>{C.target.style.transform="scale(1.2) rotate(90deg)",C.target.style.background="rgba(255, 100, 100, 0.4)"},onMouseLeave:C=>{C.target.style.transform="scale(1) rotate(0deg)",C.target.style.background="rgba(255, 255, 255, 0.2)"},children:"×"}),i.jsxs("div",{className:"video-info",children:[i.jsx("h3",{className:"video-title",children:K[x].title}),i.jsxs("div",{className:"video-counter",children:[x+1," / ",K.length]})]}),i.jsxs("div",{className:"scroll-progress",onClick:()=>{$(),setTimeout(()=>se(),300)},children:[i.jsx("span",{children:"Scroll down or click to continue"}),i.jsx("span",{className:"scroll-arrow-down",children:"↓"})]})]})})]})},Bc=({openPopup:r})=>{const s=v.useRef(null),u=v.useRef(null),c=v.useRef(null),d=v.useRef(null),f=v.useRef([]),[g,x]=v.useState(!1),[b,p]=v.useState({x:0,y:0}),[y,O]=v.useState(null);v.useEffect(()=>{const T=new IntersectionObserver(_=>{_.forEach(H=>{H.isIntersecting&&!g&&(x(!0),H.target.classList.add("section-visible"),setTimeout(()=>{var U;return(U=d.current)==null?void 0:U.classList.add("animate")},200),setTimeout(()=>{var U;return(U=u.current)==null?void 0:U.classList.add("animate")},600),setTimeout(()=>{var U;return(U=c.current)==null?void 0:U.classList.add("animate")},1e3),setTimeout(()=>{f.current.forEach((U,N)=>{setTimeout(()=>U==null?void 0:U.classList.add("animate"),N*100)})},1400))})},{threshold:.2});return s.current&&T.observe(s.current),()=>T.disconnect()},[g]),v.useEffect(()=>{const T=_=>{if(s.current){const H=s.current.getBoundingClientRect(),U=(_.clientX-H.left)/H.width,N=(_.clientY-H.top)/H.height;p({x:U,y:N})}};return document.addEventListener("mousemove",T),()=>document.removeEventListener("mousemove",T)},[]);const S=(T,_)=>{O(_?T:null);const H=f.current[T];H&&(_?(H.style.transform="translateY(-20px) scale(1.05) rotateX(5deg) rotateY(5deg)",H.style.zIndex="100"):(H.style.transform="translateY(0) scale(1) rotateX(0deg) rotateY(0deg)",H.style.zIndex="10"))},z=[{icon:"🎯",title:"Modern Design",desc:"Contemporary architectural solutions",color:"#FF6B6B"},{icon:"⚡",title:"Fast Construction",desc:"On-time project delivery",color:"#4ECDC4"},{icon:"💎",title:"Premium Quality",desc:"Best materials & craftsmanship",color:"#45B7D1"},{icon:"🏛️",title:"Innovative Designs",desc:"Creative & functional spaces",color:"#96CEB4"},{icon:"👷",title:"Expert Team",desc:"15+ years of experience",color:"#FFEAA7"},{icon:"🔧",title:"Skilled Workers",desc:"Certified professionals",color:"#DDA0DD"},{icon:"✅",title:"Quality Assurance",desc:"Premium standards",color:"#98D8C8"},{icon:"🔄",title:"Complete Service",desc:"End-to-end solutions",color:"#F7DC6F"}];return i.jsxs("section",{id:"about",className:"about-section",ref:s,children:[i.jsxs("div",{className:"dynamic-background",children:[i.jsx("div",{className:"morph-shape shape-1",style:{transform:`translate(${b.x*30}px, ${b.y*20}px) rotate(${b.x*360}deg)`}}),i.jsx("div",{className:"morph-shape shape-2",style:{transform:`translate(${b.x*-40}px, ${b.y*30}px) rotate(${b.y*-360}deg)`}}),i.jsx("div",{className:"morph-shape shape-3",style:{transform:`translate(${b.x*50}px, ${b.y*-25}px) rotate(${(b.x+b.y)*180}deg)`}})]}),i.jsx("div",{className:"particles-system",children:Array.from({length:25},(T,_)=>i.jsx("div",{className:"floating-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*6}s`}},_))}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"split-layout",children:[i.jsxs("div",{className:"left-panel",children:[i.jsxs("div",{className:"title-section",ref:d,children:[i.jsxs("div",{className:"title-decoration",children:[i.jsx("span",{className:"deco-line"}),i.jsx("span",{className:"deco-circle"}),i.jsx("span",{className:"deco-line"})]}),i.jsxs("h2",{className:"section-title",children:[i.jsx("span",{className:"title-word word-1",children:"Why"}),i.jsx("span",{className:"title-word word-2",children:"Choose"}),i.jsx("span",{className:"title-word word-3",children:"Us"})]}),i.jsx("div",{className:"title-subtitle",children:"Excellence Redefined"})]}),i.jsx("div",{className:"image-container",ref:u,children:i.jsxs("div",{className:"image-frame",children:[i.jsx("div",{className:"image-overlay",children:i.jsxs("div",{className:"overlay-content",children:[i.jsx("div",{className:"overlay-icon",children:"🏗️"}),i.jsxs("div",{className:"overlay-text",children:[i.jsx("span",{className:"overlay-number",children:"500+"}),i.jsx("span",{className:"overlay-label",children:"Projects"})]})]})}),i.jsx("img",{src:"/images/whyy.jpg",alt:"Construction Excellence",onError:T=>{const _=["/assets/whyy.jpg","./images/whyy.jpg","./assets/whyy.jpg","/public/images/whyy.jpg"];let H=!1;for(const U of _)if(!T.target.src.includes(U.replace("./","").replace("/public",""))){T.target.src=U,H=!0;break}H||(T.target.style.display="none",T.target.parentElement.innerHTML=`
                        <div class="image-placeholder">
                          <div class="placeholder-icon">🏗️</div>
                          <div class="placeholder-text">Construction Excellence</div>
                        </div>
                      `)}})]})})]}),i.jsxs("div",{className:"right-panel",ref:c,children:[i.jsx("div",{className:"content-intro",children:i.jsx("p",{className:"intro-text",children:"We specialize in transforming architectural dreams into stunning reality through innovative design, precision engineering, and uncompromising quality standards."})}),i.jsxs("div",{className:"feature-cards-container",children:[i.jsx("h3",{className:"cards-title",children:"Our Excellence Pillars"}),i.jsx("div",{className:"feature-cards-grid",children:z.map((T,_)=>i.jsxs("div",{className:"feature-card",ref:H=>f.current[_]=H,onMouseEnter:()=>S(_,!0),onMouseLeave:()=>S(_,!1),style:{"--card-color":T.color,"--hover-intensity":y===_?1:0},children:[i.jsx("div",{className:"card-glow"}),i.jsxs("div",{className:"card-content",children:[i.jsx("div",{className:"card-icon",children:T.icon}),i.jsxs("div",{className:"card-text",children:[i.jsx("div",{className:"card-title",children:T.title}),i.jsx("div",{className:"card-desc",children:T.desc})]})]}),i.jsx("div",{className:"card-shine"})]},_))})]}),i.jsxs("div",{className:"cta-section",children:[i.jsxs("button",{className:"cta-button",onClick:r,onMouseEnter:T=>{T.target.style.transform="translateY(-8px) scale(1.05) rotateX(15deg)",T.target.style.boxShadow="0 30px 60px rgba(183, 156, 92, 0.4)"},onMouseLeave:T=>{T.target.style.transform="translateY(0) scale(1) rotateX(0deg)",T.target.style.boxShadow="0 15px 35px rgba(183, 156, 92, 0.2)"},children:[i.jsx("span",{className:"btn-background"}),i.jsxs("span",{className:"btn-text",children:[i.jsx("span",{className:"btn-icon",children:"🚀"}),"Start Your Project"]}),i.jsx("span",{className:"btn-particles",children:Array.from({length:6},(T,_)=>i.jsx("span",{className:"btn-particle"},_))})]}),i.jsx("div",{className:"cta-subtitle",children:"Free consultation & personalized quote"})]})]})]})})]})},fp=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState({title:!1,subtitle:!1,images:!1,features:!1,button:!1}),f=v.useRef(null);v.useEffect(()=>{const B=new IntersectionObserver(([se])=>{se.isIntersecting&&(u(!0),setTimeout(()=>d(X=>({...X,title:!0})),200),setTimeout(()=>d(X=>({...X,subtitle:!0})),1400),setTimeout(()=>d(X=>({...X,images:!0})),1800),setTimeout(()=>d(X=>({...X,features:!0})),2100),setTimeout(()=>d(X=>({...X,button:!0})),2400))},{threshold:.1});return f.current&&B.observe(f.current),()=>{f.current&&B.unobserve(f.current)}},[]);const g={"--primary-color":"#2c3e50","--secondary-color":"#f8f9fa","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},x=`
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
  `;v.useEffect(()=>{const B=document.createElement("style");return B.textContent=x,()=>{document.head.contains(B)&&document.head.removeChild(B)}},[]);const b={...g,backgroundColor:"var(--secondary-color)",padding:"5rem 0",position:"relative",overflow:"hidden",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",backgroundSize:"400% 400%"},p=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"-5%",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",animation:"float 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"-3%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",animation:"float 10s ease-in-out infinite reverse",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"800px",background:"radial-gradient(circle, rgba(183, 156, 92, 0.05) 0%, transparent 70%)",borderRadius:"50%",animation:"float 12s ease-in-out infinite",zIndex:1}})]}),y={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},O={textAlign:"center",marginBottom:"3rem",perspective:"1000px"},S={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},z=B=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+B*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),T=B=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #B79C5C, #34495e, #2c3e50)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+B*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),_={fontSize:"1.2rem",color:"var(--text-color)",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",opacity:c.subtitle?1:0,animation:c.subtitle?"fadeInDelay 1s forwards":"none"},H={display:"flex",gap:"2rem",marginTop:"3rem",marginBottom:"3rem"},U=B=>({flex:1,position:"relative",borderRadius:"var(--border-radius)",overflow:"hidden",boxShadow:"0 15px 35px var(--shadow-color)",transform:c.images?"translateY(0) scale(1) rotateY(0deg)":"translateY(60px) scale(0.8) rotateY(15deg)",opacity:c.images?1:0,animation:c.images?`imageReveal 1s forwards ${B*.2}s`:"none",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer"}),N={width:"100%",height:"300px",objectFit:"cover",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.9) contrast(1.1)"},J={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, rgba(183, 156, 92, 0.2), rgba(44, 62, 80, 0.2))",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.2rem",fontWeight:"600",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},ee={marginTop:"3rem",display:"grid",gap:"1.5rem"},K=B=>({display:"flex",alignItems:"flex-start",background:"var(--light-color)",padding:"1.5rem",borderRadius:"var(--border-radius)",boxShadow:"0 8px 25px var(--shadow-color)",border:"1px solid rgba(183, 156, 92, 0.1)",transform:c.features?"translateX(0) rotateZ(0deg)":"translateX(-50px) rotateZ(-5deg)",opacity:c.features?1:0,animation:c.features?`featureSlideIn 0.6s forwards ${B*.1}s`:"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",position:"relative",overflow:"hidden"}),me={width:"50px",height:"50px",borderRadius:"50%",background:"linear-gradient(135deg, var(--primary-color), var(--accent-color))",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1rem",flexShrink:0,color:"white",fontSize:"1.2rem",transition:"all 0.3s ease",position:"relative",zIndex:2},L={display:"inline-block",background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",color:"white",fontSize:"1.2rem",fontWeight:"600",padding:"1rem 3rem",borderRadius:"50px",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",transform:c.button?"scale(1) rotateZ(0deg)":"scale(0.8) rotateZ(-5deg)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s forwards":"none",boxShadow:"0 10px 25px rgba(183, 156, 92, 0.3)",zIndex:2},ae=[{icon:"🏗️",title:"Superior Quality Construction",desc:"Only the best raw materials used for lasting durability"},{icon:"📐",title:"Perfect Planning & Execution",desc:"Designed by a highly qualified architectural team"},{icon:"⏰",title:"On-Time Delivery",desc:"Because we value your time and commitments"},{icon:"💰",title:"Affordable Innovation",desc:"Stylish homes at unbeatable market prices"},{icon:"⭐",title:"Customer Satisfaction Guaranteed",desc:"We build homes that match your dreams perfectly"}];return i.jsxs("section",{ref:f,style:b,children:[p,i.jsxs("div",{style:y,children:[i.jsxs("div",{style:O,children:[i.jsxs("h2",{style:S,children:[i.jsx("span",{style:T(0),children:"Exceptional"}),i.jsx("span",{style:z(1),children:"Deal"}),i.jsx("span",{style:z(2),children:"For"}),i.jsx("span",{style:z(3),children:"Your"}),i.jsx("span",{style:T(4),children:"Dream"}),i.jsx("span",{style:z(5),children:"Home"})]}),i.jsx("p",{style:_,children:"Discover unparalleled value with Pavan Techno Constructions. We deliver premium quality homes that combine architectural excellence with modern innovation, all at prices that redefine market standards."})]}),i.jsxs("div",{style:H,children:[i.jsxs("div",{style:U(0),onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(-5deg)",B.currentTarget.style.animation="morphBorder 2s ease-in-out infinite";const se=B.currentTarget.querySelector("img"),X=B.currentTarget.querySelector(".image-overlay");se&&(se.style.transform="scale(1.1) rotate(2deg)"),X&&(X.style.opacity="1")},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",B.currentTarget.style.animation="none";const se=B.currentTarget.querySelector("img"),X=B.currentTarget.querySelector(".image-overlay");se&&(se.style.transform="scale(1) rotate(0deg)"),X&&(X.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Modern House Exterior",style:N}),i.jsx("div",{className:"image-overlay",style:J,children:"Stunning Exteriors"})]}),i.jsxs("div",{style:U(1),onMouseEnter:B=>{B.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(5deg)",B.currentTarget.style.animation="morphBorder 2s ease-in-out infinite reverse";const se=B.currentTarget.querySelector("img"),X=B.currentTarget.querySelector(".image-overlay");se&&(se.style.transform="scale(1.1) rotate(-2deg)"),X&&(X.style.opacity="1")},onMouseLeave:B=>{B.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",B.currentTarget.style.animation="none";const se=B.currentTarget.querySelector("img"),X=B.currentTarget.querySelector(".image-overlay");se&&(se.style.transform="scale(1) rotate(0deg)"),X&&(X.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Luxurious Interior",style:N}),i.jsx("div",{className:"image-overlay",style:J,children:"Elegant Interiors"})]})]}),i.jsx("div",{style:ee,children:ae.map((B,se)=>i.jsxs("div",{style:K(se),onMouseEnter:X=>{X.currentTarget.style.transform="translateX(10px) scale(1.02) rotateZ(1deg)",X.currentTarget.style.boxShadow="0 15px 40px rgba(183, 156, 92, 0.2)",X.currentTarget.style.background="linear-gradient(135deg, #ffffff, #f8f9fa)";const ne=X.currentTarget.querySelector(".feature-icon");ne&&(ne.style.transform="scale(1.1) rotateY(180deg)",ne.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))")},onMouseLeave:X=>{X.currentTarget.style.transform="translateX(0) scale(1) rotateZ(0deg)",X.currentTarget.style.boxShadow="0 8px 25px var(--shadow-color)",X.currentTarget.style.background="var(--light-color)";const ne=X.currentTarget.querySelector(".feature-icon");ne&&(ne.style.transform="scale(1) rotateY(0deg)",ne.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))")},children:[i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.1), transparent)",transition:"left 0.5s ease"}}),i.jsx("div",{className:"feature-icon",style:me,children:B.icon}),i.jsxs("div",{style:{flex:1,zIndex:2},children:[i.jsx("h4",{style:{color:"var(--primary-color)",fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",transition:"all 0.3s ease"},children:B.title}),i.jsx("p",{style:{color:"var(--text-color)",fontSize:"0.95rem",lineHeight:"1.6",margin:0,transition:"all 0.3s ease"},children:B.desc})]})]},se))}),i.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:i.jsxs("button",{style:L,onClick:r,onMouseEnter:B=>{B.currentTarget.style.transform="scale(1.05) rotateZ(2deg)",B.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.4)",B.currentTarget.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))"},onMouseLeave:B=>{B.currentTarget.style.transform="scale(1) rotateZ(0deg)",B.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.3)",B.currentTarget.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))"},children:[i.jsx("span",{style:{position:"relative",zIndex:2},children:"Claim Your Deal Today"}),i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",transition:"left 0.5s ease"}})]})})]})]})},Lc=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState({title:!1,text:!1,image:!1,button:!1,stats:!1}),f=v.useRef(null);v.useEffect(()=>{const L=new IntersectionObserver(([ae])=>{ae.isIntersecting&&(u(!0),setTimeout(()=>d(B=>({...B,title:!0})),300),setTimeout(()=>d(B=>({...B,text:!0})),700),setTimeout(()=>d(B=>({...B,image:!0})),1e3),setTimeout(()=>d(B=>({...B,stats:!0})),1300),setTimeout(()=>d(B=>({...B,button:!0})),1600))},{threshold:.1});return f.current&&L.observe(f.current),()=>{f.current&&L.unobserve(f.current)}},[]);const g=`
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
  `;v.useEffect(()=>{const L=document.createElement("style");return L.textContent=g,document.head.appendChild(L),()=>{document.head.contains(L)&&document.head.removeChild(L)}},[]);const x={background:"linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",padding:"clamp(2rem, 5vw, 5rem) 0",position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},b=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"clamp(100px, 15vw, 200px)",height:"clamp(100px, 15vw, 200px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(183, 156, 92, 0.05))",animation:"float 8s ease-in-out infinite",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"clamp(80px, 12vw, 150px)",height:"clamp(80px, 12vw, 150px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",animation:"float 10s ease-in-out infinite reverse",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"10%",width:"clamp(30px, 6vw, 60px)",height:"clamp(30px, 6vw, 60px)",background:"linear-gradient(45deg, #B79C5C, #8B7355)",transform:"rotate(45deg)",opacity:.3,animation:"geometricRotate 20s linear infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"25%",right:"15%",width:"clamp(40px, 8vw, 80px)",height:"clamp(40px, 8vw, 80px)",background:"linear-gradient(45deg, #3b82f6, #1d4ed8)",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",opacity:.3,animation:"float 12s ease-in-out infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),[...Array(window.innerWidth<768?3:6)].map((L,ae)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,width:"3px",height:"3px",background:"#B79C5C",borderRadius:"50%",animation:`particleFloat ${15+Math.random()*10}s linear infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1}},ae))]}),p={maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(1rem, 4vw, 2rem)",position:"relative",zIndex:2,display:"flex",alignItems:"center",minHeight:"clamp(60vh, 80vh, 90vh)",width:"100%"},y={display:"flex",flexDirection:window.innerWidth<1024?"column":"row",alignItems:"center",gap:"clamp(2rem, 4vw, 4rem)",width:"100%"},O={flex:window.innerWidth<1024?"1":"1 1 55%",position:"relative",width:"100%",order:(window.innerWidth<1024,1)},S={flex:window.innerWidth<1024?"1":"1 1 45%",position:"relative",width:"100%",maxWidth:window.innerWidth<1024?"400px":"none",order:(window.innerWidth<1024,2),margin:window.innerWidth<1024?"2rem auto":"0"},z={fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 clamp(1rem, 3vw, 2rem) 0",perspective:"1000px",position:"relative",textAlign:window.innerWidth<768?"center":"left"},T=L=>({display:"inline-block",marginRight:window.innerWidth<768?"10px":"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) scale(1)":"translateY(50px) scale(0.8)",background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 50%, #B79C5C 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+L*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),_={position:"absolute",left:window.innerWidth<768?"50%":"-20px",top:"50%",transform:window.innerWidth<768?"translate(-50%, -50%)":"translateY(-50%)",width:window.innerWidth<768?"80%":"6px",height:window.innerWidth<768?"4px":"80%",background:"linear-gradient(135deg, #B79C5C, #3b82f6)",borderRadius:"3px",animation:c.title?"borderGlow 2s ease-in-out infinite":"none",display:window.innerWidth<480?"none":"block"},H={fontSize:"clamp(1rem, 2.5vw, 1.1rem)",lineHeight:"1.8",color:"#e5e7eb",marginBottom:"clamp(1rem, 2vw, 1.5rem)",transform:c.text?"translateX(0)":"translateX(-30px)",opacity:c.text?1:0,transition:"all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",position:"relative",paddingLeft:window.innerWidth<768?"0.5rem":"1rem",borderLeft:window.innerWidth<768?"2px solid #B79C5C":"2px solid transparent",borderImage:window.innerWidth>=768?"linear-gradient(135deg, #B79C5C, #3b82f6) 1":"none",textAlign:(window.innerWidth<768,"left")},U={display:"grid",gridTemplateColumns:window.innerWidth<768?"repeat(auto-fit, minmax(120px, 1fr))":"repeat(3, 1fr)",gap:"clamp(1rem, 3vw, 2rem)",margin:"clamp(1.5rem, 3vw, 2rem) 0",transform:c.stats?"translateY(0) scale(1)":"translateY(20px) scale(0.8)",opacity:c.stats?1:0,animation:c.stats?"statsCounter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none"},N={textAlign:"center",padding:"clamp(0.8rem, 2vw, 1rem)",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(59, 130, 246, 0.1))",borderRadius:"clamp(8px, 2vw, 12px)",border:"1px solid rgba(183, 156, 92, 0.3)",backdropFilter:"blur(10px)",transition:"all 0.3s ease"},J={position:"relative",transform:c.image?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",opacity:c.image?1:0,animation:c.image?"imageReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",borderRadius:"clamp(12px, 3vw, 20px)",overflow:"hidden",width:"100%"},ee={width:"100%",height:"clamp(300px, 40vw, 500px)",objectFit:"cover",borderRadius:"clamp(12px, 3vw, 20px)",transition:"all 0.5s ease",filter:"brightness(0.9) contrast(1.1) saturate(1.1)"},K={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(183, 156, 92, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",borderRadius:"clamp(12px, 3vw, 20px)",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"clamp(1.2rem, 3vw, 1.5rem)",fontWeight:"600",textShadow:"0 2px 10px rgba(0,0,0,0.7)",textAlign:"center",padding:"1rem"},me={background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)",color:"white",fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"600",padding:"clamp(0.8rem 2rem, 2vw, 1rem 2.5rem)",borderRadius:"50px",border:"none",cursor:"pointer",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",marginTop:"clamp(1.5rem, 3vw, 2rem)",transform:c.button?"scale(1)":"scale(0.8)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",transition:"all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.3)",width:window.innerWidth<768?"100%":"auto",maxWidth:window.innerWidth<768?"300px":"none",margin:window.innerWidth<768?"clamp(1.5rem, 3vw, 2rem) auto 0 auto":"clamp(1.5rem, 3vw, 2rem) 0 0 0"};return i.jsxs("section",{ref:f,style:x,children:[b,i.jsx("div",{style:p,children:i.jsx("div",{style:y,children:window.innerWidth<1024?i.jsxs("div",{style:O,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:_}),i.jsxs("h2",{style:z,children:[i.jsx("span",{style:T(0),children:"About"}),i.jsx("span",{style:T(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["We at Pavan Techno Construction understand that building your dream home is a major investment. Hence we prioritize a cost-effective construction process with high quality outcomes, whether it's a residential project, commercial project, villa, hospital, or school project.","We are building a foundation of trust, ethics and shared success. For over 8 years we have been dedicated to exceeding client expectations. We're driven by passion for our work and a commitment to delivering outstanding customer experiences, every time."].map((L,ae)=>i.jsx("p",{style:{...H,transitionDelay:`${ae*.15}s`},onMouseEnter:B=>{window.innerWidth>=768&&(B.currentTarget.style.borderLeft="2px solid #B79C5C",B.currentTarget.style.paddingLeft="1.5rem",B.currentTarget.style.color="#f3f4f6")},onMouseLeave:B=>{window.innerWidth>=768&&(B.currentTarget.style.borderLeft="2px solid transparent",B.currentTarget.style.paddingLeft="1rem",B.currentTarget.style.color="#e5e7eb")},children:L},ae))}),i.jsx("div",{style:{...S,margin:"clamp(2rem, 4vw, 3rem) auto"},children:i.jsxs("div",{style:J,onMouseEnter:L=>{if(window.innerWidth>=768){L.currentTarget.style.transform="translateY(-10px) scale(1.02)";const ae=L.currentTarget.querySelector(".image-overlay"),B=L.currentTarget.querySelector("img");ae&&(ae.style.opacity="1"),B&&(B.style.transform="scale(1.05)")}},onMouseLeave:L=>{if(window.innerWidth>=768){L.currentTarget.style.transform="translateY(0) scale(1)";const ae=L.currentTarget.querySelector(".image-overlay"),B=L.currentTarget.querySelector("img");ae&&(ae.style.opacity="0"),B&&(B.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:ee}),i.jsx("div",{className:"image-overlay",style:K,children:"Excellence in Construction"})]})}),i.jsx("div",{style:{position:"relative"},children:["We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.","At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."].map((L,ae)=>i.jsx("p",{style:{...H,transitionDelay:`${(ae+2)*.15}s`},onMouseEnter:B=>{window.innerWidth>=768&&(B.currentTarget.style.borderLeft="2px solid #B79C5C",B.currentTarget.style.paddingLeft="1.5rem",B.currentTarget.style.color="#f3f4f6")},onMouseLeave:B=>{window.innerWidth>=768&&(B.currentTarget.style.borderLeft="2px solid transparent",B.currentTarget.style.paddingLeft="1rem",B.currentTarget.style.color="#e5e7eb")},children:L},ae+2))}),i.jsxs("div",{style:U,children:[i.jsxs("div",{style:N,onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-5px) scale(1.05)",L.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0) scale(1)",L.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:N,onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-5px) scale(1.05)",L.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0) scale(1)",L.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:N,onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-5px) scale(1.05)",L.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0) scale(1)",L.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:me,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:L=>{L.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",L.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",L.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:L=>{L.currentTarget.style.transform="scale(1)",L.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",L.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:O,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:_}),i.jsxs("h2",{style:z,children:[i.jsx("span",{style:T(0),children:"About"}),i.jsx("span",{style:T(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["We at Pavan Techno Construction understand that building your dream home is a major investment. Hence we prioritize a cost-effective construction process with high quality outcomes, whether it's a residential project, commercial project, villa, hospital, or school project.","We are building a foundation of trust, ethics and shared success. For over 8 years we have been dedicated to exceeding client expectations. We're driven by passion for our work and a commitment to delivering outstanding customer experiences, every time.","We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.","At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."].map((L,ae)=>i.jsx("p",{style:{...H,transitionDelay:`${ae*.15}s`},onMouseEnter:B=>{window.innerWidth>=768&&(B.currentTarget.style.borderLeft="2px solid #B79C5C",B.currentTarget.style.paddingLeft="1.5rem",B.currentTarget.style.color="#f3f4f6")},onMouseLeave:B=>{window.innerWidth>=768&&(B.currentTarget.style.borderLeft="2px solid transparent",B.currentTarget.style.paddingLeft="1rem",B.currentTarget.style.color="#e5e7eb")},children:L},ae))}),i.jsxs("div",{style:U,children:[i.jsxs("div",{style:N,onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-5px) scale(1.05)",L.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0) scale(1)",L.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:N,onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-5px) scale(1.05)",L.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0) scale(1)",L.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:N,onMouseEnter:L=>{L.currentTarget.style.transform="translateY(-5px) scale(1.05)",L.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:L=>{L.currentTarget.style.transform="translateY(0) scale(1)",L.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:me,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:L=>{L.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",L.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",L.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:L=>{L.currentTarget.style.transform="scale(1)",L.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",L.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}),i.jsx("div",{style:S,children:i.jsxs("div",{style:J,onMouseEnter:L=>{if(window.innerWidth>=768){L.currentTarget.style.transform="translateY(-10px) scale(1.02)";const ae=L.currentTarget.querySelector(".image-overlay"),B=L.currentTarget.querySelector("img");ae&&(ae.style.opacity="1"),B&&(B.style.transform="scale(1.05)")}},onMouseLeave:L=>{if(window.innerWidth>=768){L.currentTarget.style.transform="translateY(0) scale(1)";const ae=L.currentTarget.querySelector(".image-overlay"),B=L.currentTarget.querySelector("img");ae&&(ae.style.opacity="0"),B&&(B.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:ee}),i.jsx("div",{className:"image-overlay",style:K,children:"Excellence in Construction"}),window.innerWidth>=768&&i.jsx("div",{style:{position:"absolute",top:"-10px",left:"-10px",right:"-10px",bottom:"-10px",border:"2px solid transparent",borderImage:"linear-gradient(135deg, #B79C5C, #3b82f6) 1",borderRadius:"25px",opacity:.5,animation:"borderGlow 3s ease-in-out infinite"}})]})})]})})})]})},mp=()=>{const r=v.useRef(null),[s,u]=v.useState([]),[c,d]=v.useState(!1),[f,g]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const L=()=>g(window.innerWidth);return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[]),v.useEffect(()=>{const L=new IntersectionObserver(ae=>{ae.forEach(B=>{B.isIntersecting&&(B.target.classList.add("section-visible"),setTimeout(()=>d(!0),300),setTimeout(()=>{u(se=>[...Array(6).keys()])},1500))})},{threshold:.2});return r.current&&L.observe(r.current),()=>{r.current&&L.unobserve(r.current)}},[]);const x=[{title:"Building Construction",icon:"🏗️",description:"From start to end, whether its residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",gradient:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"},{title:"Architectural Services",icon:"📐",description:"We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",gradient:"linear-gradient(135deg, #B79C5C 0%, #8B7355 100%)"},{title:"Renovation",icon:"🔨",description:"We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",gradient:"linear-gradient(135deg, #34495e 0%, #2c3e50 100%)"},{title:"Layout Development",icon:"📋",description:"Our layout development expertise is designed to transform your project goals into reality. A perfect balance of form and function.",gradient:"linear-gradient(135deg, #8B7355 0%, #B79C5C 100%)"},{title:"Interior Designing",icon:"🎨",description:"We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion with expert craftsmanship.",gradient:"linear-gradient(135deg, #2c3e50 0%, #B79C5C 100%)"},{title:"Customer Satisfaction",icon:"⭐",description:"Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans that reflect your expectations.",gradient:"linear-gradient(135deg, #B79C5C 0%, #34495e 100%)"}],b=`
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
  `,p={minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"6rem 0",position:"relative",overflow:"hidden"},y={position:"absolute",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",top:"10%",right:"-5%",animation:"float 6s ease-in-out infinite",zIndex:1},O={position:"absolute",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",bottom:"20%",left:"-3%",animation:"float 8s ease-in-out infinite reverse",zIndex:1},S={maxWidth:f<=900?"100%":"1200px",margin:"0 auto",padding:f<=480?"0 1rem":f<=768?"0 1.5rem":"0 2rem",position:"relative",zIndex:2,display:f<=900?"flex":"block",flexDirection:f<=900?"column":"row",alignItems:f<=900?"center":"flex-start"},z={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px",width:f<=900?"100%":"auto",maxWidth:f<=900?"400px":"none"},T={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},_=L=>({display:"inline-block",marginRight:"20px",opacity:c?1:0,transform:c?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+L*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),H={fontSize:"1.2rem",color:"#6c757d",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",transform:c?"translateY(0) scale(1)":"translateY(40px) scale(0.8)",opacity:c?1:0,animation:c?"subtitleReveal 1s ease-out 1.6s forwards":"none"},U=()=>f<=480?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",marginTop:"4rem",width:"100%",maxWidth:"350px",margin:"4rem auto 0"}:f<=768?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"400px",margin:"4rem auto 0"}:f<=900?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"450px",margin:"4rem auto 0"}:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2.5rem",marginTop:"4rem"},N=(L,ae)=>{const B=f<=344?"280px":f<=375?"300px":f<=390?"310px":f<=480?"320px":f<=768?"350px":f<=900?"380px":"100%";return{background:"linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))",borderRadius:"24px",padding:f<=480?"2rem":"2.5rem",position:"relative",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)",border:"1px solid rgba(183, 156, 92, 0.15)",backdropFilter:"blur(10px)",transform:ae?"translateY(0) scale(1) rotateX(0)":"translateY(80px) scale(0.85) rotateX(15deg)",opacity:ae?1:0,transition:"all 1s cubic-bezier(0.23, 1, 0.32, 1)",transitionDelay:`${L*.12}s`,cursor:"pointer",transformStyle:"preserve-3d",perspective:"1000px",width:f<=900?B:"100%",maxWidth:f<=900?B:"none",margin:f<=900?"0 auto":"0",flexShrink:f<=900?0:1}},J={width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",marginBottom:"1.5rem",position:"relative",zIndex:2},ee={fontSize:f<=480?"1.4rem":"1.6rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1.2rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",letterSpacing:"0.5px"},K={color:"#495057",lineHeight:"1.8",fontSize:f<=480?"0.9rem":"1rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},me={position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"24px",zIndex:1,background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",backdropFilter:"blur(20px)"};return v.useEffect(()=>{const L=document.createElement("style");return L.textContent=b,document.head.appendChild(L),()=>{document.head.contains(L)&&document.head.removeChild(L)}},[]),i.jsxs("section",{ref:r,style:p,children:[i.jsx("div",{style:y}),i.jsx("div",{style:O}),i.jsxs("div",{style:S,children:[i.jsxs("div",{style:z,children:[i.jsxs("h2",{style:T,children:[i.jsx("span",{style:_(0),children:"Our"}),i.jsx("span",{style:_(1),children:"Premium"}),i.jsx("span",{style:_(2),children:"Services"})]}),i.jsx("p",{style:H,children:"We provide a comprehensive range of construction services, from inception to completion. Every detail matters in transforming your vision into reality, creating spaces that inspire and endure."})]}),i.jsx("div",{style:U(),children:x.map((L,ae)=>i.jsxs("div",{style:N(ae,s.includes(ae)),onMouseEnter:B=>{if(f>768){B.currentTarget.style.transform="translateY(-20px) scale(1.05) rotateX(-5deg) rotateY(5deg)",B.currentTarget.style.boxShadow="0 35px 60px rgba(44, 62, 80, 0.15), 0 15px 25px rgba(183, 156, 92, 0.1)";const se=B.currentTarget.querySelector(".card-overlay"),X=B.currentTarget.querySelector(".shimmer-effect"),ne=B.currentTarget.querySelector(".card-title"),$=B.currentTarget.querySelector(".card-description"),ie=B.currentTarget.querySelector(".icon-container");se&&(se.style.opacity="0.4",se.style.background=L.gradient),X&&(X.style.opacity="1",X.style.transform="translateX(350px)"),ne&&(ne.style.color="#ffffff",ne.style.textShadow="0 2px 4px rgba(0, 0, 0, 0.3)",ne.style.transform="translateY(-2px)"),$&&($.style.color="rgba(255, 255, 255, 0.9)",$.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.2)"),ie&&(ie.style.transform="scale(1.1) rotateY(180deg)",ie.style.boxShadow="0 8px 25px rgba(0, 0, 0, 0.2)")}},onMouseLeave:B=>{if(f>768){B.currentTarget.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)",B.currentTarget.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)";const se=B.currentTarget.querySelector(".card-overlay"),X=B.currentTarget.querySelector(".shimmer-effect"),ne=B.currentTarget.querySelector(".card-title"),$=B.currentTarget.querySelector(".card-description"),ie=B.currentTarget.querySelector(".icon-container");se&&(se.style.opacity="0"),X&&(X.style.opacity="0",X.style.transform="translateX(-350px)"),ne&&(ne.style.color="#2c3e50",ne.style.textShadow="none",ne.style.transform="translateY(0)"),$&&($.style.color="#495057",$.style.textShadow="none"),ie&&(ie.style.transform="scale(1) rotateY(0deg)",ie.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)")}},children:[i.jsx("div",{className:"card-overlay",style:me}),i.jsx("div",{className:"shimmer-effect",style:{position:"absolute",top:0,left:"-350px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",transform:"skewX(-20deg)",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:0,zIndex:2}}),i.jsx("div",{className:"icon-container",style:{...J,background:L.gradient,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)"},children:i.jsx("span",{style:{filter:"brightness(0) invert(1)",transition:"all 0.3s ease",display:"block"},children:L.icon})}),i.jsx("h3",{className:"card-title",style:ee,children:L.title}),i.jsx("p",{className:"card-description",style:K,children:L.description})]},ae))})]})]})},pp=({openPopup:r})=>{const[s,u]=v.useState({}),[c,d]=v.useState(!1),f=v.useRef(null),g=v.useRef(null);v.useEffect(()=>{const y=new IntersectionObserver(O=>{O.forEach(S=>{S.isIntersecting&&(d(!0),S.target.classList.add("section-visible"),g.current&&g.current.classList.add("heading-visible"))})},{threshold:.1});return f.current&&y.observe(f.current),()=>{f.current&&y.unobserve(f.current)}},[]);const x=[{id:"basic",name:"Basic Package",price:"RS.1600/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"premium",name:"Premium Package",price:"RS.1800/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"luxury",name:"Luxury Package",price:"RS.2150/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]}],b=(y,O)=>{u(S=>({...S,[y]:S[y]===O?null:O}))},p=r||(()=>alert("Package selected!"));return i.jsxs("section",{id:"pricing",className:"pricing-section",ref:f,children:[i.jsxs("div",{className:"animated-bg",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape square-2"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:`heading-container ${c?"heading-visible":""}`,ref:g,children:[i.jsx("h1",{className:"main-heading",children:"OUR PRICING"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"Choose the perfect package that suits your needs and budget"})]})}),i.jsx("div",{className:"pricing-container",children:x.map((y,O)=>i.jsxs("div",{className:`pricing-card ${y.id}`,style:{animationDelay:`${.2*O}s`},children:[i.jsxs("div",{className:"pricing-header",children:[i.jsx("h3",{children:y.name}),i.jsx("div",{className:"price",children:y.price})]}),i.jsx("div",{className:"pricing-features",children:y.features.map((S,z)=>i.jsxs("div",{className:"feature",children:[i.jsxs("div",{className:"feature-name",onClick:()=>b(y.id,z),children:[S,i.jsx("span",{className:`arrow ${s[y.id]===z?"rotated":""}`,children:"›"})]}),i.jsx("div",{className:`feature-details ${s[y.id]===z?"show":""}`,children:i.jsxs("p",{children:["More details about ",S.toLowerCase()," for the ",y.name,". This includes premium quality materials and professional installation."]})})]},z))}),i.jsx("button",{onClick:p,className:"btn btn-pricing",children:"Select Package"})]},O))})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},Gl=()=>{const r=v.useRef(null),[s,u]=v.useState(!1);v.useEffect(()=>{const y=r.current,O=()=>{const S=window.scrollY,z=y.getBoundingClientRect().top+window.scrollY;if(S>z-window.innerHeight&&S<z+y.offsetHeight){const T=(S-(z-window.innerHeight))*.5;y.style.transform=`translateX(-${T}px)`}};return window.addEventListener("scroll",O),()=>{window.removeEventListener("scroll",O)}},[]);const c=`
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
          `,animation:"subtleOverlay 15s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.6), transparent)",zIndex:2}}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)",zIndex:2}})]}),g={width:"100%",height:"80px",overflow:"hidden",whiteSpace:"nowrap",position:"relative",zIndex:3,display:"flex",alignItems:"center"},x={display:"inline-block",whiteSpace:"nowrap",willChange:"transform"},b={display:"inline-block",marginRight:"60px",fontSize:"2.2rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"2px",color:"#ffffff",textShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",position:"relative"},p={color:"rgba(183, 156, 92, 1)",fontWeight:"800",textShadow:"0 2px 8px rgba(183, 156, 92, 0.4)",position:"relative"};return i.jsxs("section",{style:d,children:[f,i.jsx("div",{style:g,children:i.jsx("div",{style:x,ref:r,children:Array(12).fill().map((y,O)=>i.jsxs("span",{style:b,children:["BOOK NOW"," ",i.jsx("span",{style:p,children:"BOOK NOW"})]},O))})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
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
      `})]})},Yc=()=>{const r=v.useRef(null),[s,u]=v.useState([]),[c,d]=v.useState(!1),[f,g]=v.useState(!1),[x,b]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const X=()=>{b(window.innerWidth)};return window.addEventListener("resize",X),()=>window.removeEventListener("resize",X)},[]),v.useEffect(()=>{const X=new IntersectionObserver(ne=>{ne.forEach($=>{$.isIntersecting&&(d(!0),setTimeout(()=>g(!0),300),setTimeout(()=>u([0]),1e3),setTimeout(()=>u([0,1]),1200),setTimeout(()=>u([0,1,2]),1400))})},{threshold:.2});return r.current&&X.observe(r.current),()=>{r.current&&X.unobserve(r.current)}},[]);const p=`
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
  `;v.useEffect(()=>{const X=document.createElement("style");return X.textContent=p,document.head.appendChild(X),()=>{document.head.contains(X)&&document.head.removeChild(X)}},[]);const y=[{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",title:"Consultation & Planning",description:"Strategic consultation meets architectural innovation. We decode your vision into precision blueprints with cutting-edge planning methodologies.",number:"01",color:"#e74c3c"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",title:"Design & Development",description:"Where creativity meets engineering excellence. Our design studio transforms concepts into revolutionary architectural solutions.",number:"02",color:"#3498db"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",title:"Construction & Handover",description:"Precision construction powered by advanced technology. From foundation to final handover, excellence in every detail.",number:"03",color:"#2ecc71"}],O={padding:x<768?"4rem 0":"8rem 0",background:`
      linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(44, 62, 80, 0.08) 0%, transparent 50%)
    `,position:"relative",overflow:"hidden",color:"#2c3e50"},S={maxWidth:"1600px",margin:"0 auto",padding:x<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},z={textAlign:"center",marginBottom:x<768?"3rem":"6rem",position:"relative",perspective:"1000px"},T={fontSize:x<480?"2.2rem":x<768?"2.8rem":x<1024?"3.5rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:x<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px"},_=X=>({display:"inline-block",marginRight:x<768?"10px":"20px",opacity:f?1:0,transform:f?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:f?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+X*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),H={fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",color:"#64748b",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",padding:x<768?"0 1rem":"0",opacity:f?1:0,animation:f?"subtitleFadeUp 1s ease-out forwards 1.2s":"none"},U={display:"grid",gridTemplateColumns:x<768?"1fr":x<1024?"repeat(auto-fit, minmax(300px, 1fr))":"repeat(3, 1fr)",gap:x<480?"2rem":x<768?"2.5rem":"3rem",marginTop:x<768?"2rem":"4rem",position:"relative"},N=(X,ne)=>({position:"relative",background:"rgba(255, 255, 255, 0.9)",borderRadius:x<768?"20px":"24px",padding:x<480?"2rem 1rem":x<768?"2.5rem 1.5rem":"3rem 2rem",margin:x<768?"0 auto":"0",maxWidth:x<768?"400px":"none",width:"100%",border:"1px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",backdropFilter:"blur(10px)",transform:ne?"translateY(0) scale(1)":"translateY(40px) scale(0.95)",opacity:ne?1:0,animation:ne?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${X*.15}s`:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",overflow:"hidden"}),J={position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",width:x<480?"45px":x<768?"50px":"60px",height:x<480?"45px":x<768?"50px":"60px",borderRadius:"50%",background:"linear-gradient(135deg, #B79C5C, #2c3e50)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",fontWeight:"800",color:"#ffffff",border:"3px solid rgba(255, 255, 255, 0.9)",zIndex:3,boxShadow:"0 8px 25px rgba(44, 62, 80, 0.3)",transition:"all 0.3s ease"},ee={width:x<480?"70px":x<768?"80px":"100px",height:x<480?"70px":x<768?"80px":"100px",margin:x<768?"1.5rem auto":"2rem auto",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(183, 156, 92, 0.3)",boxShadow:"0 8px 25px rgba(44, 62, 80, 0.1)",position:"relative",transition:"all 0.3s ease"},K={width:"50%",height:"50%",objectFit:"contain",filter:"brightness(1.1) contrast(1.1)",transition:"all 0.3s ease"},me={textAlign:"center",position:"relative",zIndex:2},L={fontSize:x<480?"1.2rem":x<768?"1.3rem":"1.5rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1rem",letterSpacing:"0.5px",lineHeight:"1.3",transition:"all 0.3s ease"},ae={fontSize:x<480?"0.9rem":x<768?"0.95rem":"1rem",color:"#64748b",lineHeight:"1.6",transition:"all 0.3s ease"},B=i.jsx(i.Fragment,{children:x>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 6s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(44, 62, 80, 0.05)",borderRadius:"30%",animation:"backgroundFloat 8s ease-in-out infinite reverse",zIndex:1}})]})}),se=(X,ne)=>{if(x<768)return;const $=X.currentTarget,ie=$.querySelector(".number-container"),ge=$.querySelector(".icon-container"),R=$.querySelector(".step-icon"),P=$.querySelector(".step-title"),te=$.querySelector(".step-description");ne?($.style.transform="translateY(-15px) scale(1.02)",$.style.boxShadow="0 25px 50px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2)",$.style.borderColor="rgba(183, 156, 92, 0.4)",ie&&(ie.style.transform="translateX(-50%) scale(1.1)",ie.style.background="linear-gradient(135deg, #2c3e50, #B79C5C)"),ge&&(ge.style.transform="scale(1.1)",ge.style.borderColor="rgba(183, 156, 92, 0.5)",ge.style.background="rgba(255, 255, 255, 0.95)"),R&&(R.style.transform="scale(1.2)",R.style.filter="brightness(1.3) contrast(1.2)"),P&&(P.style.color="#B79C5C"),te&&(te.style.color="#2c3e50")):($.style.transform="translateY(0) scale(1)",$.style.boxShadow="0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",$.style.borderColor="rgba(183, 156, 92, 0.2)",ie&&(ie.style.transform="translateX(-50%) scale(1)",ie.style.background="linear-gradient(135deg, #B79C5C, #2c3e50)"),ge&&(ge.style.transform="scale(1)",ge.style.borderColor="rgba(183, 156, 92, 0.3)",ge.style.background="rgba(255, 255, 255, 0.8)"),R&&(R.style.transform="scale(1)",R.style.filter="brightness(1.1) contrast(1.1)"),P&&(P.style.color="#2c3e50"),te&&(te.style.color="#64748b"))};return i.jsxs("section",{style:O,ref:r,children:[B,i.jsxs("div",{style:S,children:[i.jsxs("div",{style:z,children:[i.jsxs("h2",{style:T,children:[i.jsx("span",{style:_(0),children:"How"}),i.jsx("span",{style:_(1),children:"We"}),i.jsx("span",{style:_(2),children:"Work?"})]}),i.jsx("p",{style:H,children:"Revolutionary construction methodology powered by cutting-edge technology and architectural innovation"})]}),i.jsx("div",{style:U,children:y.map((X,ne)=>{const $=s.includes(ne);return i.jsxs("div",{style:N(ne,$),onMouseEnter:ie=>se(ie,!0),onMouseLeave:ie=>se(ie,!1),onTouchStart:ie=>{x<768&&(ie.currentTarget.style.transform="scale(0.98)")},onTouchEnd:ie=>{x<768&&(ie.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{style:J,className:"number-container",children:X.number}),i.jsx("div",{className:"icon-container",style:ee,children:i.jsx("img",{src:X.icon,alt:X.title,style:K,className:"step-icon"})}),i.jsxs("div",{style:me,children:[i.jsx("h3",{style:L,className:"step-title",children:X.title}),i.jsx("p",{style:ae,className:"step-description",children:X.description})]})]},ne)})})]})]})},_c=()=>{const r=v.useRef(null),s=v.useRef([]),u=v.useRef(null),[c,d]=v.useState(!1),[f,g]=v.useState([]),[x,b]=v.useState(!1),[p,y]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const $=()=>{y(window.innerWidth)};return window.addEventListener("resize",$),()=>window.removeEventListener("resize",$)},[]),v.useEffect(()=>{const $=new IntersectionObserver(ie=>{ie.forEach(ge=>{ge.isIntersecting&&(d(!0),ge.target.classList.add("section-visible"),setTimeout(()=>b(!0),300),setTimeout(()=>O(),1e3),setTimeout(()=>g([0]),1600),setTimeout(()=>g([0,1]),1700),setTimeout(()=>g([0,1,2]),1800),setTimeout(()=>g([0,1,2,3]),1900))})},{threshold:.3});return r.current&&$.observe(r.current),()=>{r.current&&$.unobserve(r.current)}},[]);const O=()=>{s.current.forEach((ie,ge)=>{if(!ie)return;const R=parseInt(ie.getAttribute("data-target")),te=R/(2500/50);let he=0;setTimeout(()=>{const j=()=>{he+=te,he<R?(ie.textContent=Math.ceil(he),setTimeout(j,50)):ie.textContent=R};j()},ge*200)})},S=`
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
  `;v.useEffect(()=>{const $=document.createElement("style");return $.textContent=S,document.head.appendChild($),()=>{document.head.contains($)&&document.head.removeChild($)}},[]);const z=[{icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"100%",height:"100%"},children:i.jsx("path",{d:"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"})}),value:9,label:"YEARS LEGACY",suffix:"+",color:"#3498db"},{icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"100%",height:"100%"},children:i.jsx("path",{d:"M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-1H3v1zm0-2.5h18v-1H3v1zm0-2.5h18v-1H3v1zM3 5v1h18V5H3z"})}),value:6,label:"LAKHS SQ.FT DELIVERED",suffix:"+",color:"#B79C5C"},{icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"100%",height:"100%"},children:i.jsx("path",{d:"M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"})}),value:30,label:"Projects Delivered",suffix:"+",color:"#2c3e50"},{icon:i.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",style:{width:"100%",height:"100%"},children:i.jsx("path",{d:"M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z"})}),value:5,label:"Cities",suffix:"+",color:"#3498db"}],T={padding:p<768?"4rem 0":"6rem 0",background:`
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
    `,color:"#ffffff",overflow:"hidden",position:"relative"},_={maxWidth:"1400px",margin:"0 auto",padding:p<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},H={textAlign:"center",marginBottom:p<768?"3rem":"5rem",position:"relative",perspective:"1000px"},U={fontSize:p<480?"1.9rem":p<768?"2.3rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:p<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px",textTransform:"uppercase",letterSpacing:p<480?"1px":"3px"},N=$=>({display:"inline-block",marginRight:p<768?"10px":"20px",opacity:x?1:0,transform:x?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #ffffff 0%, #B79C5C 50%, #ffffff 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:x?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+$*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),J={fontSize:p<768?"1.1rem":"1.3rem",color:"#B79C5C",opacity:x?.9:0,animation:x?"subtitleFadeUp 1s ease-out forwards 1.2s":"none",letterSpacing:"1px",textTransform:"uppercase"},ee={height:"4px",background:"linear-gradient(90deg, transparent, #B79C5C, transparent)",margin:"1rem auto",borderRadius:"2px",boxShadow:x?"0 0 20px rgba(183, 156, 92, 0.5)":"none",animation:x?"underlineExpand 1.5s ease-out forwards 1.4s":"none",width:"0"},K={display:"grid",gridTemplateColumns:p<768||p<1200?"repeat(2, 1fr)":"repeat(4, 1fr)",gridTemplateRows:p<768?"repeat(2, 1fr)":"auto",gap:p<480?"1rem":p<768?"1.5rem":"2rem",marginTop:p<768?"2rem":"4rem",maxWidth:p<768?"400px":"1200px",margin:`${p<768?"2rem":"4rem"} auto 0`,padding:p<768?"0 0.5rem":"0"},me=($,ie)=>({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"rgba(30, 30, 30, 0.8)",borderRadius:p<768?"16px":"20px",padding:p<480?"1.2rem 0.8rem":p<768?"1.5rem 1rem":"2rem 1.5rem",border:`1px solid ${$%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)"}`,position:"relative",overflow:"hidden",cursor:"pointer",transform:ie?"translateY(0) scale(1)":"translateY(30px) scale(0.95)",opacity:ie?1:0,animation:ie?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${$*.1}s`:"none",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",minHeight:p<480?"160px":p<768?"180px":"280px",backdropFilter:"blur(10px)",boxShadow:`0 15px 35px ${$%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`}),L=$=>({width:p<480?"50px":p<768?"60px":"90px",height:p<480?"50px":p<768?"60px":"90px",marginBottom:p<768?"1rem":"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(40, 40, 40, 0.8)",borderRadius:"50%",border:`2px solid ${$%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)"}`,position:"relative",boxShadow:`0 10px 25px ${$%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 5px 15px rgba(0, 0, 0, 0.4)`,transition:"all 0.3s ease"}),ae=$=>({color:$%2===0?"#B79C5C":"#3498db",transition:"all 0.3s ease",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",display:"flex",alignItems:"center",justifyContent:"center",width:p<480?"1.5rem":p<768?"1.8rem":"2.5rem",height:p<480?"1.5rem":p<768?"1.8rem":"2.5rem"}),B=$=>({fontSize:p<480?"1.8rem":p<768?"2.2rem":"2.8rem",fontWeight:"900",marginBottom:"0.5rem",background:`linear-gradient(135deg, #ffffff, ${$%2===0?"#B79C5C":"#3498db"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"1px",transition:"all 0.3s ease"}),se={fontSize:p<480?"0.7rem":p<768?"0.8rem":"0.9rem",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.9)",letterSpacing:"0.5px",lineHeight:"1.3",fontWeight:"600",transition:"all 0.3s ease"},X=i.jsx(i.Fragment,{children:p>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(52, 152, 219, 0.05)",borderRadius:"30%",animation:"backgroundFloat 10s ease-in-out infinite reverse",zIndex:1}})]})}),ne=($,ie,ge)=>{if(p<768)return;const R=$.currentTarget,P=R.querySelector(".record-icon"),te=R.querySelector(".icon-svg"),he=R.querySelector(".record-value"),j=R.querySelector(".record-label");ge?(R.style.transform="translateY(-15px) scale(1.05)",R.style.boxShadow=`0 25px 50px ${ie%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 15px 30px rgba(0, 0, 0, 0.4)`,R.style.borderColor=ie%2===0?"rgba(183, 156, 92, 0.6)":"rgba(52, 152, 219, 0.6)",P&&(P.style.transform="scale(1.15)",P.style.borderColor=ie%2===0?"rgba(183, 156, 92, 0.8)":"rgba(52, 152, 219, 0.8)",P.style.background="rgba(50, 50, 50, 0.9)"),te&&(te.style.transform="scale(1.2)",te.style.filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))"),he&&(he.style.transform="scale(1.1)"),j&&(j.style.color=ie%2===0?"#B79C5C":"#3498db")):(R.style.transform="translateY(0) scale(1)",R.style.boxShadow=`0 15px 35px ${ie%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`,R.style.borderColor=ie%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)",P&&(P.style.transform="scale(1)",P.style.borderColor=ie%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)",P.style.background="rgba(40, 40, 40, 0.8)"),te&&(te.style.transform="scale(1)",te.style.filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"),he&&(he.style.transform="scale(1)"),j&&(j.style.color="rgba(255, 255, 255, 0.9)"))};return i.jsxs("section",{style:T,ref:r,children:[X,i.jsxs("div",{style:_,children:[i.jsx("div",{style:H,children:i.jsxs("div",{ref:u,children:[i.jsxs("h1",{style:U,children:[i.jsx("span",{style:N(0),children:"Our"}),i.jsx("span",{style:N(1),children:"Track"}),i.jsx("span",{style:N(2),children:"Record"})]}),i.jsx("div",{style:ee}),i.jsx("p",{style:J,children:"Excellence in Numbers"})]})}),i.jsx("div",{style:K,children:z.map(($,ie)=>{const ge=f.includes(ie);return i.jsxs("div",{style:me(ie,ge),onMouseEnter:R=>ne(R,ie,!0),onMouseLeave:R=>ne(R,ie,!1),onTouchStart:R=>{p<768&&(R.currentTarget.style.transform="scale(0.98)")},onTouchEnd:R=>{p<768&&(R.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{className:"record-icon",style:L(ie),children:i.jsx("div",{className:"icon-svg",style:ae(ie),children:$.icon})}),i.jsxs("div",{className:"record-detail",children:[i.jsxs("h3",{className:"record-value",style:B(ie),children:[i.jsx("span",{ref:R=>{R&&(s.current[ie]=R)},"data-target":$.value,children:"0"}),$.suffix]}),i.jsx("h5",{className:"record-label",style:se,children:$.label})]})]},ie)})})]})]})},gp=()=>{const[r,s]=v.useState(0),[u,c]=v.useState(!1),[d,f]=v.useState(!1),g=v.useRef(null),x=v.useRef(null),b=[{id:1,name:"Sangeeta Reddy",role:"Homeowner",testimonial:"Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!",rating:5,project:"Villa Construction"},{id:2,name:"Anusha Patel",role:"Property Owner",testimonial:"I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline.",rating:5,project:"Apartment Renovation"},{id:3,name:"Manoj Sharma",role:"Client",testimonial:"What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!",rating:5,project:"Custom Home Design"}],p={"--primary-color":"#2c3e50","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--secondary-color":"#f8f9fa","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},y=`
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
  `;v.useEffect(()=>{const C=document.createElement("style");return C.textContent=y,document.head.appendChild(C),()=>{document.head.contains(C)&&document.head.removeChild(C)}},[]);const O=()=>{s(C=>(C+1)%b.length)},S=()=>{s(C=>(C-1+b.length)%b.length)};v.useEffect(()=>{const C=new IntersectionObserver(G=>{G.forEach(W=>{W.isIntersecting&&(c(!0),W.target.classList.add("section-visible"),setTimeout(()=>f(!0),300))})},{threshold:.3});return x.current&&C.observe(x.current),g.current=setInterval(()=>{O()},6e3),()=>{g.current&&clearInterval(g.current),x.current&&C.unobserve(x.current)}},[]);const z=C=>{s(C),g.current&&clearInterval(g.current),g.current=setInterval(()=>{O()},6e3)},T={...p,padding:"6rem 0",background:`
      linear-gradient(135deg, var(--light-color) 0%, var(--secondary-color) 50%, var(--light-color) 100%),
      radial-gradient(circle at 20% 80%, rgba(183, 156, 92, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
    `,backgroundSize:"400% 400%",animation:u?"backgroundShift 15s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},_={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},H={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px"},U={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px",position:"relative",display:"inline-block"},N=C=>({display:"inline-block",marginRight:"20px",opacity:d?1:0,transform:d?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+C*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),J={position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",height:"4px",background:"linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color))",borderRadius:"2px",animation:d?"underlineExpand 1s ease-out forwards 1.6s":"none",width:"0"},ee={fontSize:"1.1rem",color:"var(--text-color)",opacity:d?1:0,animation:d?"cardSlideIn 1s ease-out forwards 1.8s":"none"},K={maxWidth:"900px",margin:"0 auto",position:"relative",overflow:"hidden",borderRadius:"var(--border-radius)",perspective:"1000px"},me={display:"flex",transition:"transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",transform:`translateX(-${r*100}%)`},L={flex:"0 0 100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 2rem",background:`
      linear-gradient(135deg, var(--light-color) 0%, rgba(248, 249, 250, 0.8) 100%),
      linear-gradient(45deg, rgba(183, 156, 92, 0.03), rgba(44, 62, 80, 0.03))
    `,borderRadius:"var(--border-radius)",boxShadow:"0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)",border:"1px solid rgba(183, 156, 92, 0.1)",position:"relative",overflow:"hidden",transition:"var(--transition)",cursor:"pointer"},ae={width:"100px",height:"100px",borderRadius:"50%",background:`
      linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1)),
      var(--light-color)
    `,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem",color:"var(--primary-color)",border:"4px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.2)",animation:u?"avatarPulse 3s ease-in-out infinite, floatAnimation 4s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},B={width:"50px",height:"50px",color:"var(--accent-color)",zIndex:2},se={textAlign:"center",position:"relative",zIndex:2},X={fontSize:"1.5rem",fontWeight:"700",color:"var(--primary-color)",marginBottom:"0.5rem"},ne={fontSize:"0.9rem",color:"var(--accent-color)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"600"},$={display:"flex",justifyContent:"center",gap:"0.3rem",marginBottom:"1.5rem"},ie={width:"20px",height:"20px",color:"#ffd700",animation:"starTwinkle 2s ease-in-out infinite",animationDelay:C=>`${C*.2}s`},ge={fontSize:"1.1rem",fontStyle:"italic",color:"var(--text-color)",lineHeight:"1.8",position:"relative",padding:"0 2rem",marginBottom:"1rem"},R={fontSize:"0.9rem",color:"var(--accent-color)",fontWeight:"600",padding:"0.5rem 1rem",background:"rgba(183, 156, 92, 0.1)",borderRadius:"20px",border:"1px solid rgba(183, 156, 92, 0.2)"},P={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"3rem",gap:"2rem"},te={background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",border:"none",width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",transition:"var(--transition)",boxShadow:"0 5px 15px rgba(183, 156, 92, 0.3)"},he={display:"flex",alignItems:"center",gap:"0.8rem"},j=C=>({width:"12px",height:"12px",borderRadius:"50%",background:C===r?"var(--accent-color)":"rgba(183, 156, 92, 0.3)",border:"none",cursor:"pointer",transition:"var(--transition)",transform:C===r?"scale(1.3)":"scale(1)",boxShadow:C===r?"0 0 10px rgba(183, 156, 92, 0.5)":"none"}),I=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.05), rgba(44, 62, 80, 0.05))",borderRadius:"50%",animation:"floatAnimation 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(183, 156, 92, 0.05))",borderRadius:"30%",animation:"floatAnimation 10s ease-in-out infinite reverse",zIndex:1}})]});return i.jsxs("section",{style:T,ref:x,children:[I,i.jsxs("div",{style:_,children:[i.jsxs("div",{style:H,children:[i.jsxs("h2",{style:U,children:[i.jsx("span",{style:N(0),children:"What"}),i.jsx("span",{style:N(1),children:"Our"}),i.jsx("span",{style:N(2),children:"Clients"}),i.jsx("span",{style:N(3),children:"Say"}),i.jsx("div",{style:J})]}),i.jsx("p",{style:ee,children:"Trusted by hundreds of satisfied customers across multiple cities"})]}),i.jsxs("div",{style:K,children:[i.jsx("div",{style:me,children:b.map((C,G)=>i.jsxs("div",{style:L,onMouseEnter:W=>{W.currentTarget.style.transform="translateY(-10px) scale(1.02) rotateX(-2deg)",W.currentTarget.style.boxShadow="0 25px 50px rgba(183, 156, 92, 0.15), 0 10px 25px var(--shadow-color)"},onMouseLeave:W=>{W.currentTarget.style.transform="translateY(0) scale(1) rotateX(0deg)",W.currentTarget.style.boxShadow="0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)"},children:[i.jsxs("div",{style:ae,children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",style:B,children:i.jsx("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
                      linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(183, 156, 92, 0.1) 50%, 
                        transparent 70%
                      )
                    `,backgroundSize:"200% 200%",animation:"backgroundShift 3s linear infinite",borderRadius:"50%",zIndex:1}})]}),i.jsxs("div",{style:se,children:[i.jsx("h4",{style:X,children:C.name}),i.jsx("p",{style:ne,children:C.role}),i.jsx("div",{style:$,children:[...Array(C.rating)].map((W,oe)=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",style:{...ie,animationDelay:`${oe*.2}s`},children:i.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})},oe))}),i.jsxs("blockquote",{style:ge,children:['"',C.testimonial,'"']}),i.jsx("div",{style:R,children:C.project})]}),i.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:"100px",height:"100px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.03), transparent)",pointerEvents:"none"}})]},G))}),i.jsxs("div",{style:P,children:[i.jsx("button",{style:te,onClick:S,onMouseEnter:C=>{C.currentTarget.style.transform="scale(1.1) rotateZ(-5deg)",C.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:C=>{C.currentTarget.style.transform="scale(1) rotateZ(0deg)",C.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"})})}),i.jsx("div",{style:he,children:b.map((C,G)=>i.jsx("button",{style:j(G),onClick:()=>z(G)},G))}),i.jsx("button",{style:te,onClick:O,onMouseEnter:C=>{C.currentTarget.style.transform="scale(1.1) rotateZ(5deg)",C.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:C=>{C.currentTarget.style.transform="scale(1) rotateZ(0deg)",C.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"})})})]})]})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},hp=()=>{var tt,ke,Ae;const[r,s]=v.useState("all"),[u,c]=v.useState([]),[d,f]=v.useState(!1),[g,x]=v.useState(null),[b,p]=v.useState(0),[y,O]=v.useState(!1),[S,z]=v.useState([]),[T,_]=v.useState(!1),[H,U]=v.useState({x:0,y:0}),[N,J]=v.useState(typeof window<"u"?window.innerWidth:1200),ee=v.useRef(null);v.useEffect(()=>{const Q=()=>{J(window.innerWidth)};return window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]);const K=[{id:1,category:"residential",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Modern Villa Estate",description:"Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes",year:"2024",location:"Bangalore",gallery:["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1566908829077-85d4b623c071?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:2,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Hub Complex",description:"Contemporary office space designed for modern businesses with state-of-the-art facilities",year:"2024",location:"Hyderabad"},{id:3,category:"residential",image:"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Heritage Family Home",description:"Spacious family home with elegant design and premium finishes blending tradition with modernity",year:"2023",location:"Chennai",gallery:["https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1602872030300-ad1ba728799f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:4,category:"interior",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Living Spaces",description:"Elegant living room with modern aesthetics and luxury furniture showcasing sophisticated design",year:"2024",location:"Mumbai"},{id:5,category:"renovation",image:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Gourmet Kitchen Transformation",description:"Complete kitchen transformation with high-end finishes and premium appliances",year:"2023",location:"Pune"},{id:6,category:"commercial",image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Premium Shopping Complex",description:"Multi-level shopping complex with modern facilities and world-class amenities",year:"2024",location:"Delhi"},{id:7,category:"layout",image:"https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Smart Community Layout",description:"Well-planned residential layout with all essential amenities and green spaces",year:"2023",location:"Kochi"},{id:8,category:"interior",image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Serene Bedroom Sanctuary",description:"Relaxing bedroom with contemporary design elements and luxury comfort features",year:"2024",location:"Goa"}],me=[{id:"all",label:"All Projects",color:"#2c3e50",icon:"🏗️"},{id:"residential",label:"Residential",color:"#B79C5C",icon:"🏠"},{id:"commercial",label:"Commercial",color:"#3498db",icon:"🏢"},{id:"interior",label:"Interior",color:"#e74c3c",icon:"🎨"},{id:"renovation",label:"Renovation",color:"#9b59b6",icon:"🔨"},{id:"layout",label:"Layout",color:"#27ae60",icon:"📐"}],L=`
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
  `;v.useEffect(()=>{if(N<768)return;const Q=xe=>{if(ee.current){const ve=ee.current.getBoundingClientRect(),qe=(xe.clientX-ve.left)/ve.width,De=(xe.clientY-ve.top)/ve.height;U({x:qe,y:De})}};return document.addEventListener("mousemove",Q),()=>document.removeEventListener("mousemove",Q)},[N]),v.useEffect(()=>{const Q=document.createElement("style");return Q.textContent=L,document.head.appendChild(Q),()=>{document.head.contains(Q)&&document.head.removeChild(Q)}},[]),v.useEffect(()=>{const Q=new IntersectionObserver(xe=>{xe.forEach(ve=>{ve.isIntersecting&&(O(!0),setTimeout(()=>_(!0),300),setTimeout(()=>{(r==="all"?K:K.filter(De=>De.category===r)).forEach((De,Rt)=>{setTimeout(()=>{z(Jt=>[...Jt,Rt])},Rt*100)})},1500))})},{threshold:.1});return ee.current&&Q.observe(ee.current),()=>{ee.current&&Q.unobserve(ee.current)}},[r]),v.useEffect(()=>{c(r==="all"?K:K.filter(Q=>Q.category===r)),z([])},[r]);const ae=Q=>{s(Q)},B=Q=>{x(Q),p(0),f(!0),document.body.style.overflow="hidden"},se=()=>{f(!1),x(null),p(0),document.body.style.overflow="unset"},X=Q=>{g!=null&&g.gallery&&p(Q==="next"?xe=>(xe+1)%g.gallery.length:xe=>(xe-1+g.gallery.length)%g.gallery.length)},ne=()=>g!=null&&g.gallery?g.gallery[b]:g==null?void 0:g.image,$={padding:N<768?"4rem 0":"8rem 0",background:`
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,position:"relative",overflow:"hidden",minHeight:N<768?"auto":"100vh"},ie=N>=768?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"8%",width:"280px",height:"280px",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.08), rgba(52, 152, 219, 0.06))",animation:"morphShape 20s ease-in-out infinite, backgroundFloat 8s ease-in-out infinite",zIndex:1,transform:`translate(${H.x*15}px, ${H.y*10}px)`}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"5%",width:"200px",height:"200px",background:"linear-gradient(225deg, rgba(231, 76, 60, 0.06), rgba(155, 89, 182, 0.08))",animation:"morphShape 25s ease-in-out infinite reverse, backgroundFloat 12s ease-in-out infinite",zIndex:1,transform:`translate(${H.x*-20}px, ${H.y*15}px)`}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"15%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(39, 174, 96, 0.05), rgba(241, 196, 15, 0.07))",animation:"morphShape 30s ease-in-out infinite, backgroundFloat 10s ease-in-out infinite reverse",zIndex:1,transform:`translate(${H.x*25}px, ${H.y*-12}px)`}}),[...Array(6)].map((Q,xe)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${4+Math.random()*6}px`,height:`${4+Math.random()*6}px`,background:`linear-gradient(45deg, rgba(183, 156, 92, ${.3+Math.random()*.4}), rgba(52, 152, 219, ${.2+Math.random()*.3}))`,borderRadius:"50%",animation:`parallaxFloat ${8+Math.random()*6}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1,transform:`translate(${H.x*(10+Math.random()*20)}px, ${H.y*(5+Math.random()*15)}px)`}},xe))]}):null,ge={maxWidth:"1600px",margin:"0 auto",padding:N<768?"0 1rem":"0 3rem",position:"relative",zIndex:2},R={textAlign:"center",marginBottom:N<768?"3rem":"5rem",position:"relative",perspective:"1200px"},P={fontSize:N<480?"2rem":N<768?"2.5rem":"clamp(3.5rem, 6vw, 5.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 2rem 0",perspective:"1200px",position:"relative",display:"inline-block"},te=Q=>({display:"inline-block",marginRight:N<768?"15px":"25px",opacity:T?1:0,transform:T?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)",backgroundSize:"400% 400%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:T?`wordReveal 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+Q*.2}s, gradientShift 6s ease-in-out infinite`:"none",textShadow:T?"0 10px 30px rgba(44, 62, 80, 0.1)":"none"}),he={position:"absolute",bottom:"-15px",left:"50%",transform:"translateX(-50%)",height:"6px",background:"linear-gradient(90deg, transparent, #B79C5C, #3498db, #B79C5C, transparent)",borderRadius:"3px",animation:T?"titleUnderline 1.5s ease-out forwards 2s":"none",width:"0"},j={fontSize:N<768?"1.1rem":"1.3rem",color:"#64748b",fontWeight:"300",letterSpacing:N<768?"1px":"2px",lineHeight:"1.8",maxWidth:"700px",margin:"0 auto",padding:N<768?"0 1rem":"0",opacity:T?1:0,animation:T?"subtitleFadeUp 1s ease-out forwards 2.3s":"none"},I={display:"flex",justifyContent:"center",flexWrap:"wrap",gap:N<768?"0.8rem":"1.5rem",marginBottom:N<768?"2rem":"4rem",opacity:T?1:0,animation:T?"filterButtonFloat 1s ease-out forwards 2.6s":"none"},C=(Q,xe,ve)=>({padding:N<480?"0.6rem 1rem":N<768?"0.75rem 1.5rem":"1rem 2rem",background:xe?`linear-gradient(135deg, ${Q.color}, rgba(44, 62, 80, 0.9))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${xe?"transparent":"rgba(183, 156, 92, 0.2)"}`,borderRadius:"25px",color:xe?"white":"#64748b",fontWeight:"600",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:xe?"0 15px 35px rgba(44, 62, 80, 0.2), 0 5px 15px rgba(183, 156, 92, 0.3)":"0 8px 25px rgba(44, 62, 80, 0.08)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",fontSize:N<480?"0.75rem":N<768?"0.8rem":"0.9rem",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",gap:N<768?"4px":"8px",animation:xe?"filterGlow 2s ease-in-out infinite":"none",transform:`translateY(${xe?-3:0}px)`,animationDelay:`${ve*.1}s`}),G={display:"grid",gridTemplateColumns:N<768?"1fr":N<1024?"repeat(2, 1fr)":N<1400?"repeat(3, 1fr)":"repeat(auto-fill, minmax(380px, 1fr))",gap:N<768?"2rem":"3rem",marginTop:N<768?"2rem":"3rem",perspective:"1200px"},W=(Q,xe)=>({position:"relative",borderRadius:N<768?"20px":"24px",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",cursor:"pointer",height:N<480?"280px":N<768?"320px":"350px",background:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(255, 255, 255, 0.2)",backdropFilter:"blur(20px)",transform:xe?"translateY(0) scale(1)":"translateY(40px) scale(0.9)",opacity:xe?1:0,animation:xe?`galleryItemMagnetize 1s cubic-bezier(0.23, 1, 0.32, 1) forwards ${Q*.1}s`:"none",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",transformStyle:"preserve-3d"}),oe={width:"100%",height:"70%",objectFit:"cover",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.95) contrast(1.05) saturate(1.1)"},re={position:"absolute",top:0,left:0,width:"100%",height:"70%",background:`
      radial-gradient(circle at center, transparent 0%, rgba(44, 62, 80, 0.7) 100%),
      linear-gradient(to top, rgba(44, 62, 80, 0.9) 0%, transparent 60%)
    `,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:N<768?"1rem":"2rem",opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",color:"white",textAlign:"center"},je={position:"absolute",bottom:0,left:0,right:0,padding:N<768?"1rem":"1.5rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(183, 156, 92, 0.2)"},ye={fontSize:N<768?"1.2rem":"1.5rem",fontWeight:"700",marginBottom:"0.5rem",transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.1s"},Fe={fontSize:N<768?"0.9rem":"1rem",opacity:.9,transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.2s",lineHeight:"1.5"},Ve={position:"absolute",top:0,left:"-200px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:N>=768?"shimmerEffect 3s ease-in-out infinite":"none",zIndex:3},lt=(Q,xe,ve)=>{const qe=Q.currentTarget,De=qe.querySelector("img"),Rt=qe.querySelector(".overlay"),Jt=qe.querySelectorAll(".overlay-element"),Tr=qe.querySelector(".shimmer");ve?(N>=768?(qe.style.animation="cardHoverLift 0.6s ease-out forwards",De&&(De.style.transform="scale(1.15) rotate(3deg)"),Tr&&(Tr.style.animation="shimmerEffect 1s ease-out")):qe.style.transform="scale(0.98)",Rt&&(Rt.style.opacity="1"),Jt.forEach(Sn=>{Sn.style.transform="translateY(0)"})):(N>=768?(qe.style.animation="none",qe.style.transform="translateY(0) scale(1) rotateX(0deg)",qe.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",De&&(De.style.transform="scale(1) rotate(0deg)")):qe.style.transform="scale(1)",Rt&&(Rt.style.opacity="0"),Jt.forEach(Sn=>{Sn.style.transform="translateY(20px)"}))};return i.jsxs("section",{style:$,ref:ee,children:[ie,i.jsxs("div",{style:ge,children:[i.jsxs("div",{style:R,children:[i.jsxs("h2",{style:P,children:[i.jsx("span",{style:te(0),children:"Our"}),i.jsx("span",{style:te(1),children:"Project"}),i.jsx("span",{style:te(2),children:"Portfolio"}),i.jsx("div",{style:he})]}),i.jsx("p",{style:j,children:"Discover our curated collection of architectural masterpieces and design excellence that define contemporary living"})]}),i.jsx("div",{style:I,children:me.map((Q,xe)=>i.jsxs("button",{style:C(Q,r===Q.id,xe),onClick:()=>ae(Q.id),onMouseEnter:ve=>{N>=768&&r!==Q.id&&(ve.currentTarget.style.transform="translateY(-8px) scale(1.05)",ve.currentTarget.style.boxShadow="0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)",ve.currentTarget.style.borderColor="rgba(183, 156, 92, 0.5)",ve.currentTarget.style.background="rgba(255, 255, 255, 0.95)",ve.currentTarget.style.color=Q.color)},onMouseLeave:ve=>{N>=768&&r!==Q.id&&(ve.currentTarget.style.transform="translateY(0) scale(1)",ve.currentTarget.style.boxShadow="0 8px 25px rgba(44, 62, 80, 0.08)",ve.currentTarget.style.borderColor="rgba(183, 156, 92, 0.2)",ve.currentTarget.style.background="rgba(255, 255, 255, 0.8)",ve.currentTarget.style.color="#64748b")},children:[i.jsx("span",{style:{fontSize:N<768?"1rem":"1.1rem"},children:Q.icon}),Q.label]},Q.id))}),i.jsx("div",{style:G,children:u.map((Q,xe)=>{var qe;const ve=S.includes(xe);return i.jsxs("div",{style:W(xe,ve),onClick:()=>B(Q),onMouseEnter:De=>lt(De,xe,!0),onMouseLeave:De=>lt(De,xe,!1),onTouchStart:De=>lt(De,xe,!0),onTouchEnd:De=>lt(De,xe,!1),children:[i.jsx("div",{style:Ve,className:"shimmer"}),i.jsx("img",{src:Q.image,alt:Q.title,style:oe}),i.jsxs("div",{className:"overlay",style:re,children:[i.jsx("h3",{className:"overlay-element",style:ye,children:Q.gallery?`View Gallery (${Q.gallery.length} images)`:"View Project"}),i.jsx("p",{className:"overlay-element",style:Fe,children:Q.gallery?"Click to explore image gallery":"Click to explore details"})]}),i.jsxs("div",{style:je,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem",flexDirection:N<480?"column":"row",gap:N<480?"0.5rem":"0"},children:[i.jsx("h3",{style:{fontSize:N<768?"1.1rem":"1.3rem",fontWeight:"700",color:"#2c3e50",margin:0,flex:1},children:Q.title}),i.jsx("span",{style:{fontSize:"0.8rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px",marginLeft:N<480?"0":"1rem"},children:Q.year})]}),i.jsx("p",{style:{fontSize:N<768?"0.8rem":"0.9rem",color:"#64748b",lineHeight:"1.4",margin:"0 0 0.5rem 0"},children:Q.description}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:N<480?"column":"row",gap:N<480?"0.5rem":"0"},children:[i.jsxs("span",{style:{fontSize:"0.8rem",color:"#94a3b8",display:"flex",alignItems:"center",gap:"0.5rem"},children:["📍 ",Q.location]}),i.jsx("span",{style:{fontSize:"0.8rem",color:((qe=me.find(De=>De.id===Q.category))==null?void 0:qe.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px"},children:Q.category})]})]})]},Q.id)})})]}),d&&i.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center",animation:"lightboxEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",backdropFilter:"blur(20px)",padding:N<768?"1rem":"2rem"},onClick:se,children:i.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:N<768?"100%":"1200px",background:"rgba(255, 255, 255, 0.95)",borderRadius:N<768?"16px":"24px",overflow:"hidden",boxShadow:"0 50px 100px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.2)",maxHeight:"90vh"},onClick:Q=>Q.stopPropagation(),children:[i.jsx("button",{style:{position:"absolute",top:N<768?"1rem":"1.5rem",right:N<768?"1rem":"1.5rem",background:"rgba(0, 0, 0, 0.7)",border:"none",width:N<768?"50px":"60px",height:N<768?"50px":"60px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:N<768?"1.2rem":"1.5rem",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",backdropFilter:"blur(10px)"},onClick:se,onMouseEnter:Q=>{N>=768&&(Q.currentTarget.style.background="#B79C5C",Q.currentTarget.style.transform="scale(1.1) rotate(90deg)")},onMouseLeave:Q=>{N>=768&&(Q.currentTarget.style.background="rgba(0, 0, 0, 0.7)",Q.currentTarget.style.transform="scale(1) rotate(0deg)")},children:"×"}),i.jsx("div",{style:{width:"100%",height:N<768?"50vh":"70vh",maxHeight:"400px"},children:i.jsx("img",{src:ne(),alt:g==null?void 0:g.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),i.jsxs("div",{style:{padding:N<768?"1.5rem":"3rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",maxHeight:N<768?"40vh":"auto",overflowY:"auto"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexDirection:N<768?"column":"row",gap:N<768?"1rem":"0"},children:[i.jsx("h3",{style:{color:"#2c3e50",fontSize:N<768?"1.5rem":"2.2rem",fontWeight:"700",margin:0,flex:1},children:g==null?void 0:g.title}),i.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[(g==null?void 0:g.gallery)&&i.jsxs("span",{style:{fontSize:N<768?"0.9rem":"1rem",color:"#3498db",fontWeight:"600",background:"rgba(52, 152, 219, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:[b+1," / ",g.gallery.length]}),i.jsx("span",{style:{fontSize:N<768?"0.9rem":"1rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:g==null?void 0:g.year}),i.jsxs("span",{style:{fontSize:N<768?"0.9rem":"1rem",color:"#64748b",display:"flex",alignItems:"center",gap:"0.5rem"},children:["📍 ",g==null?void 0:g.location]})]})]}),i.jsx("p",{style:{marginBottom:"1.5rem",color:"#64748b",fontSize:N<768?"1rem":"1.2rem",lineHeight:"1.7"},children:g==null?void 0:g.description}),i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:i.jsxs("span",{style:{fontSize:N<768?"0.9rem":"1rem",color:((tt=me.find(Q=>Q.id===(g==null?void 0:g.category)))==null?void 0:tt.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"1px",background:`rgba(${(ke=me.find(Q=>Q.id===(g==null?void 0:g.category)))==null?void 0:ke.color.slice(1).match(/.{2}/g).map(Q=>parseInt(Q,16)).join(", ")}, 0.1)`||"rgba(100, 116, 139, 0.1)",padding:"0.75rem 1.5rem",borderRadius:"25px"},children:[(Ae=me.find(Q=>Q.id===(g==null?void 0:g.category)))==null?void 0:Ae.icon," ",g==null?void 0:g.category]})})]}),(g==null?void 0:g.gallery)&&i.jsxs("div",{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100%",display:"flex",justifyContent:"space-between",padding:N<768?"0 1rem":"0 2rem",zIndex:10,pointerEvents:"none"},children:[i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:N<768?"50px":"70px",height:N<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:N<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>X("prev"),onMouseEnter:Q=>{N>=768&&(Q.currentTarget.style.background="#2c3e50",Q.currentTarget.style.transform="scale(1.1) rotateZ(-10deg)")},onMouseLeave:Q=>{N>=768&&(Q.currentTarget.style.background="rgba(0, 0, 0, 0.7)",Q.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"‹"}),i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:N<768?"50px":"70px",height:N<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:N<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>X("next"),onMouseEnter:Q=>{N>=768&&(Q.currentTarget.style.background="#2c3e50",Q.currentTarget.style.transform="scale(1.1) rotateZ(10deg)")},onMouseLeave:Q=>{N>=768&&(Q.currentTarget.style.background="rgba(0, 0, 0, 0.7)",Q.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"›"})]})]})})]})},Uc=()=>{const[r,s]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=v.useState({message:"",isError:!1,isSubmitting:!1}),d=v.useRef(null),f=v.useRef(null);v.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(y=>{y.isIntersecting&&(y.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const g=b=>{const{name:p,value:y}=b.target;s(O=>({...O,[p]:y}))},x=()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),s({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"contact",className:"contact-section",ref:d,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:"heading-container",ref:f,children:[i.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),i.jsxs("div",{className:"contact-container",children:[i.jsxs("div",{className:"contact-info",children:[i.jsx("div",{className:"contact-map",children:i.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6050645764435!2d77.5693744!3d12.9330859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15515dc1da7d%3A0xcd0ee36e6cf73082!2sPavan%20Techno%20Constructions!5e0!3m2!1sen!2sin!4v1738318615550!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Pavan Techno Constructions Location"})}),i.jsxs("div",{className:"contact-details",children:[i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"0.8s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Our Location"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.0s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Call Us"}),i.jsx("p",{children:"+91 9738906052"}),i.jsx("p",{children:"+91 8722906052"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.2s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Email Us"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]}),i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:g})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:r.package,onChange:g,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:g})]}),i.jsx("div",{className:"form-status",children:u.message&&i.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),i.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[i.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
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

        /* Mobile Responsiveness */
        @media (max-width: 1200px) {
          .contact-container {
            gap: 3rem;
          }
        }
        
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
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
            padding: 2rem;
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
        }
        
        @media (max-width: 576px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-map {
            height: 250px;
          }
          
          .contact-detail-item {
            padding: 1.25rem;
            flex-direction: column;
            text-align: center;
            gap: 1rem;
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
      `})]})},bn=()=>{const r=new Date().getFullYear(),[s,u]=v.useState(!1);v.useEffect(()=>{const f=new IntersectionObserver(x=>{x.forEach(b=>{b.isIntersecting&&u(!0)})},{threshold:.1}),g=document.querySelector(".footer");return g&&f.observe(g),()=>{g&&f.unobserve(g)}},[]);const c=[{icon:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",href:"#",label:"Twitter"},{icon:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",href:"#",label:"Twitter"},{icon:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.524 1.037 1.155 0 .703-.449 1.753-.68 2.729-.194.819.411 1.489 1.219 1.489 1.463 0 2.589-1.541 2.589-3.767 0-1.969-1.414-3.347-3.447-3.347-2.346 0-3.725 1.759-3.725 3.575 0 .709.275 1.469.617 1.883.068.081.077.152.057.235-.061.252-.196.796-.223.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.598 1.884-4.986 5.432-4.986 2.851 0 5.067 2.031 5.067 4.75 0 2.836-1.789 5.117-4.272 5.117-.834 0-1.619-.435-1.887-1.009l-.513 1.958c-.185.72-.685 1.621-1.019 2.171C9.516 23.85 10.739 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z",href:"#",label:"Pinterest"},{icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",href:"#",label:"LinkedIn"},{icon:"M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91-.11-.971-.21-2.462.04-3.521.226-.952 1.463-6.196 1.463-6.196s-.372-.744-.372-1.846c0-1.727.998-3.015 2.24-3.015 1.056 0 1.566.79 1.566 1.735 0 1.058-.673 2.64-1.022 4.106-.29 1.228.616 2.228 1.83 2.228 2.196 0 3.884-2.312 3.884-5.649 0-2.95-2.124-5.019-5.16-5.019-3.514 0-5.579 2.634-5.579 5.35 0 1.06.408 2.196.917 2.81.1.12.115.227.085.35-.09.377-.293 1.196-.333 1.364-.053.225-.172.271-.397.164-1.509-.7-2.453-2.9-2.453-4.66 0-3.818 2.776-7.32 8.006-7.32 4.204 0 7.472 2.996 7.472 6.99 0 4.175-2.631 7.533-6.283 7.533-1.226 0-2.38-.638-2.773-1.39l-.753 2.87c-.272 1.04-1.005 2.34-1.492 3.13C9.34 23.94 10.882 24 12.5 24c6.354 0 11.5-5.146 11.5-11.5S18.854.75 12.5.75z",href:"#",label:"Instagram"}],d=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},{name:"Pricing",href:"#pricing"},{name:"Gallery",href:"#gallery"},{name:"Contact",href:"#contact"}];return i.jsxs(i.Fragment,{children:[i.jsxs("footer",{className:`footer ${s?"visible":""}`,children:[i.jsxs("div",{className:"footer-bg-elements",children:[i.jsx("div",{className:"bg-circle-1"}),i.jsx("div",{className:"bg-circle-2"}),i.jsx("div",{className:"bg-square-1"}),i.jsx("div",{className:"bg-triangle-1"})]}),i.jsx("div",{className:"footer-top",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-info",children:[i.jsx("div",{className:"footer-logo",children:i.jsxs("div",{className:"logo-container",children:[i.jsx("h2",{children:"Pavan Techno"}),i.jsx("span",{children:"Constructions"})]})}),i.jsx("p",{children:"We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. With over 9 years of experience, we've built a foundation of trust, ethics, and shared success."}),i.jsx("div",{className:"social-links",children:c.map((f,g)=>i.jsx("a",{href:f.href,className:"social-link","aria-label":f.label,style:{animationDelay:`${g*.1}s`},children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:f.icon})})},g))})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Quick Links"}),i.jsx("ul",{children:d.map((f,g)=>i.jsx("li",{style:{animationDelay:`${g*.1}s`},children:i.jsx("a",{href:f.href,children:f.name})},g))})]}),i.jsxs("div",{className:"footer-contact",children:[i.jsx("h4",{children:"Contact Us"}),i.jsxs("div",{className:"contact-items",children:[i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.2s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Address"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.4s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Phone"}),i.jsxs("p",{children:["+91 9738906052",i.jsx("br",{}),"+91 8722906052"]})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.6s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Email"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]})]})})}),i.jsx("div",{className:"footer-bottom",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsxs("p",{children:["© ",r," All Rights Reserved By"," ",i.jsx("a",{href:"https://gconnectsolutions.com/",target:"_blank",rel:"noopener noreferrer",children:"G Connect Solutions"})]}),i.jsxs("div",{className:"footer-policy",children:[i.jsx("a",{href:"Privacy.html",children:"Privacy Policy"}),i.jsx("span",{className:"separator",children:"|"}),i.jsx("a",{href:"#terms",children:"Terms of Service"})]})]})})})]}),i.jsx("style",{jsx:!0,children:`
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
          gap: 1rem;
        }

        .social-link {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
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
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }

          .footer-info {
            grid-column: span 2;
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
      `})]})},Iy=({closePopup:r})=>{const[s,u]=v.useState({name:"",email:"",phone:"",service:"",message:""});v.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]);const c=f=>{const{name:g,value:x}=f.target;u(b=>({...b,[g]:x}))},d=f=>{if(f.preventDefault(),!s.name||!s.email||!s.phone||!s.service||!s.message){alert("Please fill in all required fields.");return}alert("Form submitted successfully! We will contact you soon."),r()};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"popup-overlay",onClick:r,children:i.jsxs("div",{className:"popup-container",onClick:f=>f.stopPropagation(),children:[i.jsx("button",{className:"close-popup",onClick:r,children:"×"}),i.jsxs("div",{className:"popup-header",children:[i.jsx("div",{className:"header-icon",children:i.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:i.jsx("path",{d:"M3 8L12 13L21 8M3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx("h3",{children:"Get Your Quote"}),i.jsx("p",{children:"Fill out the form below and we'll get back to you within 24 hours"})]}),i.jsxs("div",{className:"popup-form",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-name",children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",id:"popup-name",className:"form-control",placeholder:"Enter your full name",value:s.name,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-email",children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",id:"popup-email",className:"form-control",placeholder:"Enter your email",value:s.email,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-phone",children:"Phone Number *"}),i.jsx("input",{type:"tel",name:"phone",id:"popup-phone",className:"form-control",placeholder:"Enter your phone number",value:s.phone,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-service",children:"Package *"}),i.jsxs("select",{name:"service",id:"popup-service",className:"form-control",value:s.service,onChange:c,required:!0,children:[i.jsx("option",{value:"",disabled:!0,children:"Select a package"}),i.jsx("option",{value:"Basic Package",children:"Basic Package - RS.1600/- + GST"}),i.jsx("option",{value:"Premium Package",children:"Premium Package - RS.1800/- + GST"}),i.jsx("option",{value:"Luxury Package",children:"Luxury Package - RS.2150/- + GST"})]})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{htmlFor:"popup-message",children:"Project Details *"}),i.jsx("textarea",{name:"message",id:"popup-message",rows:"4",className:"form-control",placeholder:"Tell us about your construction project...",value:s.message,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"Cancel"}),i.jsx("button",{type:"button",className:"btn btn-primary",onClick:d,children:"Submit Request"})]})]})]})}),i.jsx("style",{jsx:!0,global:!0,children:`
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
      `})]})},Fy="/pavan-techno-constructions/assets/s-1-D80USzrT.jpg",Wy="/pavan-techno-constructions/assets/arti-D1dJ_XDz.jpg",Qy="/pavan-techno-constructions/assets/rs-BDWbg-Wg.jpg",Py="/pavan-techno-constructions/assets/ld-BqerUQ4p.jpg",Zy="/pavan-techno-constructions/assets/interior-BlveVF9V.webp",Ky="/pavan-techno-constructions/assets/cs1-T7T-fMyg.png",$y=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState(null),[f,g]=v.useState("workshop"),[x,b]=v.useState("overview"),p=v.useRef(null);v.useEffect(()=>{const S=new IntersectionObserver(z=>{z.forEach(T=>{T.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&S.observe(p.current),()=>{p.current&&S.unobserve(p.current)}},[]);const y=[{id:1,title:"Building Construction",code:"CONST-001",station:"A",icon:"🏗️",image:Fy,description:"From start to end, whether it's residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",features:["Residential Projects","Commercial Buildings","Quality Materials","Durable Construction"],specifications:{Foundation:"RCC & Steel Structure",Materials:"Premium Grade Cement & Steel",Standards:"IS Codes Compliant",Timeline:"6-18 months"},price:"Starting from ₹1,600/sq ft",category:"structural"},{id:2,title:"Architectural Services",code:"ARCH-002",station:"B",icon:"📐",image:Wy,description:"We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",features:["Conceptual Designs","Floor Planning","Site Plans","Dream Home Consultation"],specifications:{Software:"AutoCAD, 3D Max, Revit",Standards:"NBC Compliant",Delivery:"2D & 3D Drawings",Revisions:"Up to 3 Free Revisions"},price:"Starting from ₹25/sq ft",category:"design"},{id:3,title:"Renovation",code:"RENO-003",station:"C",icon:"🔨",image:Qy,description:"We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",features:["Commercial Renovation","Residential Makeover","Factory Layout","Custom Redesigns"],specifications:{Assessment:"Structural Integrity Check",Approach:"Phase-wise Execution",Safety:"Zero Disruption Methods",Completion:"Turnkey Solutions"},price:"Starting from ₹600/sq ft",category:"renovation"},{id:4,title:"Layout Development",code:"LAY-004",station:"D",icon:"📋",image:Py,description:"Our layout development expertise is designed to transform your project goals into reality, which is a perfect balance of form and function.",features:["Project Planning","Space Optimization","Functional Design","Goal-oriented Solutions"],specifications:{Analysis:"Site Survey & Analysis",Optimization:"Space Utilization 95%+",Compliance:"Local Bylaws Adherence",Documentation:"Detailed Layout Plans"},price:"Starting from ₹35/sq ft",category:"planning"},{id:5,title:"Interior Designing",code:"INT-005",station:"E",icon:"🎨",image:Zy,description:"We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life.",features:["Commercial Interiors","Residential Design","Industrial Spaces","Concept to Completion"],specifications:{Design:"Contemporary & Traditional",Materials:"Premium Finishes",Lighting:"LED & Smart Systems",Furniture:"Custom & Modular"},price:"Starting from ₹800/sq ft",category:"interiors"},{id:6,title:"Customer Satisfaction",code:"SUPP-006",station:"F",icon:"⭐",image:Ky,description:"Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations.",features:["Expert Consultation","Dream Home Planning","Quality Assurance","Client-focused Approach"],specifications:{Support:"24/7 Client Support",Warranty:"5-Year Structural Warranty",Maintenance:"Annual Maintenance",Feedback:"Real-time Project Updates"},price:"Included in all services",category:"support"}],O=[{icon:"🏆",value:"500+",label:"Projects Completed",detail:"Across all service categories"},{icon:"📅",value:"15+",label:"Years Experience",detail:"Professional expertise"},{icon:"😊",value:"100%",label:"Client Satisfaction",detail:"Quality guaranteed"},{icon:"🔧",value:"24/7",label:"Support Available",detail:"Round-the-clock assistance"}];return i.jsxs("div",{className:"workshop-page",ref:p,children:[i.jsx("div",{className:"workshop-header",children:i.jsxs("div",{className:"header-grid",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"PROJECT:"}),i.jsx("span",{className:"label-value",children:"CONSTRUCTION SERVICES"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"COMPANY:"}),i.jsx("span",{className:"label-value",children:"PAVAN TECHNO CONSTRUCTIONS"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"STATUS:"}),i.jsx("span",{className:"label-value",children:"ACTIVE OPERATIONS"})]}),i.jsx("h1",{className:`workshop-title ${s?"visible":""}`,children:"CONSTRUCTION SERVICES"}),i.jsx("p",{className:`workshop-subtitle ${s?"visible":""}`,children:"Professional construction services delivered through specialized workstations"}),i.jsxs("div",{className:"view-selector",children:[i.jsxs("button",{className:`selector-btn ${f==="workshop"?"active":""}`,onClick:()=>g("workshop"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Workshop View"]}),i.jsxs("button",{className:`selector-btn ${f==="catalog"?"active":""}`,onClick:()=>g("catalog"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Service Catalog"]})]})]})]})}),f==="workshop"&&i.jsx("div",{className:"workshop-floor",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"floor-plan",children:[i.jsxs("div",{className:"plan-header",children:[i.jsx("h2",{children:"WORKSHOP FLOOR PLAN"}),i.jsxs("div",{className:"plan-details",children:[i.jsx("span",{children:"SCALE: 1:100"}),i.jsx("span",{children:"LEVEL: GROUND FLOOR"}),i.jsx("span",{children:"AREA: 6 SERVICE STATIONS"})]})]}),i.jsx("div",{className:"workstations-grid",children:y.map((S,z)=>i.jsx("div",{className:`workstation ${c===S.id?"active":""}`,onClick:()=>d(c===S.id?null:S.id),children:i.jsxs("div",{className:"station-frame",children:[i.jsxs("div",{className:"frame-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"station-header",children:[i.jsxs("div",{className:"station-id",children:["STATION ",S.station]}),i.jsx("div",{className:"station-code",children:S.code})]}),i.jsxs("div",{className:"station-image",children:[i.jsx("img",{src:S.image,alt:S.title}),i.jsx("div",{className:"image-overlay",children:i.jsx("div",{className:"overlay-icon",children:S.icon})})]}),i.jsxs("div",{className:"station-info",children:[i.jsx("h3",{children:S.title}),i.jsxs("div",{className:"station-status",children:[i.jsx("span",{className:"status-dot"}),i.jsx("span",{children:"OPERATIONAL"})]})]}),c===S.id&&i.jsxs("div",{className:"station-details",children:[i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"SERVICE OVERVIEW"}),i.jsx("p",{children:S.description})]}),i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"SPECIFICATIONS"}),i.jsx("div",{className:"spec-grid",children:Object.entries(S.specifications).map(([T,_])=>i.jsxs("div",{className:"spec-item",children:[i.jsxs("span",{className:"spec-label",children:[T,":"]}),i.jsx("span",{className:"spec-value",children:_})]},T))})]}),i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"KEY FEATURES"}),i.jsx("div",{className:"features-grid",children:S.features.map((T,_)=>i.jsxs("div",{className:"feature-item",children:[i.jsx("span",{className:"feature-bullet",children:"●"}),T]},_))})]}),i.jsxs("div",{className:"pricing-section",children:[i.jsxs("div",{className:"price-info",children:[i.jsx("span",{className:"price-label",children:"PRICING:"}),i.jsx("span",{className:"price-value",children:S.price})]}),i.jsxs("button",{className:"quote-btn",onClick:r,children:["REQUEST QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})]})]})]})},S.id))})]})})}),f==="catalog"&&i.jsx("div",{className:"service-catalog",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"catalog-header",children:[i.jsx("h2",{children:"SERVICE CATALOG"}),i.jsxs("div",{className:"catalog-tabs",children:[i.jsx("button",{className:`tab-btn ${x==="overview"?"active":""}`,onClick:()=>b("overview"),children:"OVERVIEW"}),i.jsx("button",{className:`tab-btn ${x==="technical"?"active":""}`,onClick:()=>b("technical"),children:"TECHNICAL SPECS"}),i.jsx("button",{className:`tab-btn ${x==="pricing"?"active":""}`,onClick:()=>b("pricing"),children:"PRICING"})]})]}),i.jsx("div",{className:"catalog-content",children:y.map(S=>i.jsxs("div",{className:"catalog-item",children:[i.jsxs("div",{className:"item-header",children:[i.jsxs("div",{className:"item-id",children:[i.jsx("span",{className:"item-code",children:S.code}),i.jsx("span",{className:"item-category",children:S.category.toUpperCase()})]}),i.jsx("h3",{children:S.title})]}),i.jsxs("div",{className:"item-body",children:[i.jsxs("div",{className:"item-image",children:[i.jsx("img",{src:S.image,alt:S.title}),i.jsx("div",{className:"item-badge",children:S.icon})]}),i.jsxs("div",{className:"item-content",children:[x==="overview"&&i.jsxs("div",{className:"overview-content",children:[i.jsx("p",{children:S.description}),i.jsx("div",{className:"features-list",children:S.features.map((z,T)=>i.jsx("span",{className:"feature-tag",children:z},T))})]}),x==="technical"&&i.jsx("div",{className:"technical-content",children:i.jsx("div",{className:"tech-specs",children:Object.entries(S.specifications).map(([z,T])=>i.jsxs("div",{className:"tech-row",children:[i.jsx("span",{className:"tech-label",children:z}),i.jsx("span",{className:"tech-value",children:T})]},z))})}),x==="pricing"&&i.jsxs("div",{className:"pricing-content",children:[i.jsx("div",{className:"price-display",children:i.jsx("span",{className:"price-amount",children:S.price})}),i.jsx("button",{className:"catalog-quote-btn",onClick:r,children:"GET DETAILED QUOTE"})]})]})]})]},S.id))})]})}),i.jsx("div",{className:"workshop-stats",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("h2",{children:"WORKSHOP PERFORMANCE METRICS"}),i.jsx("div",{className:"metrics-line"})]}),i.jsx("div",{className:"stats-grid",children:O.map((S,z)=>i.jsx("div",{className:"stat-panel",children:i.jsxs("div",{className:"panel-frame",children:[i.jsxs("div",{className:"panel-header",children:[i.jsx("div",{className:"panel-icon",children:S.icon}),i.jsxs("div",{className:"panel-id",children:["METRIC-",String(z+1).padStart(2,"0")]})]}),i.jsx("div",{className:"panel-value",children:S.value}),i.jsx("div",{className:"panel-label",children:S.label}),i.jsx("div",{className:"panel-detail",children:S.detail})]})},z))})]})}),i.jsx("div",{className:"quality-section",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"quality-grid",children:[i.jsxs("div",{className:"quality-content",children:[i.jsxs("div",{className:"content-header",children:[i.jsx("h2",{children:"QUALITY ASSURANCE PROTOCOL"}),i.jsx("div",{className:"protocol-id",children:"QAP-2024"})]}),i.jsxs("div",{className:"assurance-items",children:[i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"01"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"15+ Years Experience"}),i.jsx("p",{children:"Proven track record in delivering quality construction projects across various sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"02"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"500+ Projects Completed"}),i.jsx("p",{children:"Successfully delivered projects across residential, commercial, and industrial sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"03"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"Quality Materials"}),i.jsx("p",{children:"We use only premium quality materials from trusted suppliers ensuring longevity"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"04"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"On-Time Delivery"}),i.jsx("p",{children:"Committed to delivering projects within agreed timelines without compromising quality"})]})]})]})]}),i.jsxs("div",{className:"certification-panel",children:[i.jsx("div",{className:"cert-header",children:i.jsx("h3",{children:"CERTIFICATIONS & STANDARDS"})}),i.jsxs("div",{className:"cert-items",children:[i.jsxs("div",{className:"cert-item",children:[i.jsx("div",{className:"cert-badge",children:"ISO"}),i.jsx("span",{children:"ISO 9001:2015 Certified"})]}),i.jsxs("div",{className:"cert-item",children:[i.jsx("div",{className:"cert-badge",children:"BIS"}),i.jsx("span",{children:"BIS Standards Compliant"})]}),i.jsxs("div",{className:"cert-item",children:[i.jsx("div",{className:"cert-badge",children:"NBC"}),i.jsx("span",{children:"National Building Code"})]}),i.jsxs("div",{className:"cert-item",children:[i.jsx("div",{className:"cert-badge",children:"IS"}),i.jsx("span",{children:"Indian Standards Certified"})]})]})]})]})})}),i.jsx("style",{jsx:!0,children:`
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

        /* Workshop Statistics */
        .workshop-stats {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .stats-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .stats-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2D3748;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .metrics-line {
          width: 100px;
          height: 3px;
          background: #B79C5C;
          margin: 0 auto;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .stat-panel {
          background: white;
          border: 2px solid #2D3748;
          padding: 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-panel:hover {
          border-color: #B79C5C;
          transform: translateY(-5px);
        }

        .panel-frame {
          position: relative;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .panel-icon {
          font-size: 2rem;
        }

        .panel-id {
          font-size: 10px;
          color: #B79C5C;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .panel-value {
          font-size: 3rem;
          font-weight: 800;
          color: #B79C5C;
          margin-bottom: 10px;
        }

        .panel-label {
          font-size: 14px;
          font-weight: 600;
          color: #2D3748;
          margin-bottom: 5px;
        }

        .panel-detail {
          font-size: 11px;
          color: #666;
          letter-spacing: 1px;
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
            font-size: 2rem;
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
            font-size: 1.6rem;
            letter-spacing: 0.5px;
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

        @media (max-width: 390px) {
          .workshop-title {
            font-size: 1.4rem;
            letter-spacing: 0px;
            line-height: 1.2;
          }
          
          .header-grid {
            padding: 35px 15px;
          }
        }

        @media (max-width: 375px) {
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
      `})]})},Jy=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState("residential"),[f,g]=v.useState(null),[x,b]=v.useState("estimates"),p=v.useRef(null);v.useEffect(()=>{const z=new IntersectionObserver(T=>{T.forEach(_=>{_.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&z.observe(p.current),()=>{p.current&&z.unobserve(p.current)}},[]);const y=[{id:"residential",label:"RESIDENTIAL",code:"RES",icon:"🏠",color:"#B79C5C"},{id:"commercial",label:"COMMERCIAL",code:"COM",icon:"🏢",color:"#2D3748"},{id:"interior",label:"INTERIOR",code:"INT",icon:"🎨",color:"#B79C5C"},{id:"renovation",label:"RENOVATION",code:"REN",icon:"🔨",color:"#2D3748"}],S={residential:[{title:"STANDARD RESIDENTIAL",code:"RES-STD-001",classification:"ECONOMY CLASS",baseRate:"₹1,600",totalCost:"₹16,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Cost-effective residential construction with standard specifications",costBreakdown:{"Site Preparation":"8%","Foundation Work":"15%","Structural Framework":"25%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"18%","Finishing & Paint":"15%","Fixtures & Fittings":"7%"},specifications:["RCC Frame Structure","Standard Grade Materials","Basic Electrical Installation","Standard Plumbing System","Vitrified Tile Flooring","Emulsion Paint Finish","6 Months Warranty"],included:["Architectural Planning","Structural Design","Site Supervision","Quality Control","Material Supply","Labor Management"],compliance:["NBC 2016","IS Codes","Local Bylaws"],status:"STANDARD"},{title:"PREMIUM RESIDENTIAL",code:"RES-PREM-002",classification:"PREMIUM CLASS",baseRate:"₹2,200",totalCost:"₹22,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Enhanced residential construction with premium specifications",costBreakdown:{"Site Preparation":"6%","Foundation Work":"14%","Structural Framework":"24%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"20%","Finishing & Paint":"18%","Fixtures & Fittings":"6%"},specifications:["RCC Frame with Steel","Premium Grade Materials","Modern Electrical Systems","Advanced Plumbing","Premium Tile Flooring","Premium Paint Finishes","12 Months Warranty"],included:["3D Architectural Design","Structural Engineering","Project Management","Quality Assurance","Premium Material Supply","Skilled Labor Team","Interior Consultation"],compliance:["NBC 2016","IS Codes","Green Building","Local Bylaws"],status:"RECOMMENDED"},{title:"LUXURY RESIDENTIAL",code:"RES-LUX-003",classification:"LUXURY CLASS",baseRate:"₹3,500",totalCost:"₹35,00,000",area:"1000 sq ft",timeline:"12-15 months",description:"High-end residential construction with luxury specifications",costBreakdown:{"Site Preparation":"5%","Foundation Work":"12%","Structural Framework":"22%","Roofing & Waterproofing":"10%","Electrical & Plumbing":"22%","Finishing & Paint":"22%","Fixtures & Fittings":"7%"},specifications:["Steel Frame Structure","Imported Premium Materials","Smart Home Automation","Luxury Plumbing Systems","Marble & Hardwood Flooring","Designer Paint & Textures","24 Months Warranty"],included:["Custom Architectural Design","Structural Engineering","Project Management","Quality Control","Luxury Material Supply","Expert Craftsmen","Interior Design","Landscape Planning"],compliance:["NBC 2016","IS Codes","Green Building","LEED Standards"],status:"PREMIUM"}],commercial:[{title:"STANDARD COMMERCIAL",code:"COM-STD-001",classification:"COMMERCIAL GRADE",baseRate:"₹1,800",totalCost:"₹18,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Standard commercial construction for offices and retail",costBreakdown:{"Site Preparation":"7%","Foundation Work":"16%","Structural Framework":"28%","Roofing & Waterproofing":"10%","Electrical & HVAC":"20%",Finishing:"14%","Commercial Fittings":"5%"},specifications:["Commercial RCC Structure","Fire-Resistant Materials","Commercial Electrical Setup","HVAC Ready Infrastructure","Commercial Grade Flooring","Weather Resistant Finishes","12 Months Warranty"],included:["Commercial Planning","Structural Design","MEP Engineering","Project Coordination","Material Supply","Commercial Installation"],compliance:["NBC 2016","Fire Safety","Commercial Codes"],status:"STANDARD"},{title:"PREMIUM COMMERCIAL",code:"COM-PREM-002",classification:"PREMIUM COMMERCIAL",baseRate:"₹2,800",totalCost:"₹28,00,000",area:"1000 sq ft",timeline:"10-12 months",description:"Modern commercial construction with advanced systems",costBreakdown:{"Site Preparation":"6%","Foundation Work":"15%","Structural Framework":"26%","Roofing & Waterproofing":"9%","Electrical & HVAC":"24%",Finishing:"16%","Premium Fittings":"4%"},specifications:["Steel Frame Commercial","Premium Fire Safety Systems","Advanced Electrical & HVAC","Smart Building Infrastructure","Premium Commercial Flooring","High-Performance Finishes","18 Months Warranty"],included:["Modern Commercial Design","MEP Engineering","Building Automation","Project Management","Premium Materials","Professional Installation","System Integration"],compliance:["NBC 2016","Fire Safety","Green Building","IGBC"],status:"RECOMMENDED"},{title:"LUXURY COMMERCIAL",code:"COM-LUX-003",classification:"LUXURY COMMERCIAL",baseRate:"₹4,200",totalCost:"₹42,00,000",area:"1000 sq ft",timeline:"12-18 months",description:"High-end commercial spaces with luxury finishes",costBreakdown:{"Site Preparation":"4%","Foundation Work":"13%","Structural Framework":"24%","Roofing & Waterproofing":"8%","Electrical & HVAC":"26%",Finishing:"20%","Luxury Fittings":"5%"},specifications:["Premium Steel Structure","Luxury Fire Safety Systems","Smart Building Automation","Advanced HVAC Systems","Luxury Commercial Flooring","Designer Finishes","24 Months Warranty"],included:["Luxury Commercial Design","Advanced MEP Systems","Building Management Systems","Project Management","Luxury Materials","Expert Installation","Complete Integration","Maintenance Package"],compliance:["NBC 2016","LEED Platinum","Green Building","IGBC"],status:"PREMIUM"}],interior:[{title:"BASIC INTERIOR",code:"INT-BAS-001",classification:"ESSENTIAL INTERIOR",baseRate:"₹800",totalCost:"₹8,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential interior design and execution",costBreakdown:{"Space Planning":"10%","Electrical Work":"20%","Furniture & Fixtures":"35%","Flooring & Tiling":"15%","Paint & Finishes":"12%",Installation:"8%"},specifications:["Basic Space Planning","Standard Lighting","Modular Furniture","Laminate Flooring","Standard Paint","Basic Fixtures","6 Months Warranty"],included:["Interior Planning","Furniture Design","Electrical Layout","Material Supply","Installation Service","Basic Styling"],compliance:["Interior Standards","Safety Codes"],status:"STANDARD"},{title:"PREMIUM INTERIOR",code:"INT-PREM-002",classification:"DESIGNER INTERIOR",baseRate:"₹1,500",totalCost:"₹15,00,000",area:"1000 sq ft",timeline:"3-4 months",description:"Complete interior design transformation",costBreakdown:{"Design & Planning":"12%","Electrical & Lighting":"22%","Custom Furniture":"30%","Premium Flooring":"18%","Designer Finishes":"15%",Installation:"3%"},specifications:["Professional Space Planning","Designer Lighting Solutions","Custom Furniture Design","Premium Flooring Options","Designer Paint & Textures","Premium Fixtures","12 Months Warranty"],included:["3D Interior Design","Custom Furniture","Lighting Design","Premium Materials","Professional Installation","Interior Styling","Project Management"],compliance:["Interior Standards","Design Codes","Safety Standards"],status:"RECOMMENDED"},{title:"LUXURY INTERIOR",code:"INT-LUX-003",classification:"LUXURY INTERIOR",baseRate:"₹2,500",totalCost:"₹25,00,000",area:"1000 sq ft",timeline:"4-6 months",description:"Bespoke luxury interior design",costBreakdown:{"Luxury Design":"15%","Smart Lighting":"20%","Bespoke Furniture":"25%","Luxury Flooring":"20%","Designer Finishes":"17%",Installation:"3%"},specifications:["Luxury Space Planning","Smart Lighting Systems","Bespoke Furniture","Luxury Flooring Materials","Designer Paint & Textures","Luxury Fixtures & Art","18 Months Warranty"],included:["Luxury Interior Design","Bespoke Furniture","Smart Home Integration","Luxury Materials","Expert Installation","Interior Styling","Project Management","Maintenance Package"],compliance:["Luxury Standards","Design Excellence","Safety Codes"],status:"PREMIUM"}],renovation:[{title:"BASIC RENOVATION",code:"REN-BAS-001",classification:"ESSENTIAL RENOVATION",baseRate:"₹600",totalCost:"₹6,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential renovation and repair work",costBreakdown:{"Assessment & Planning":"8%",Demolition:"15%","Structural Repairs":"25%","Electrical Updates":"20%","Plumbing Updates":"15%","Finishing Work":"17%"},specifications:["Structural Assessment","Basic Electrical Updates","Plumbing Repairs","Standard Paint Refresh","Basic Fixture Replacement","Cleaning Service","6 Months Warranty"],included:["Renovation Planning","Demolition Work","Basic Repairs","Material Supply","Installation Service","Cleanup"],compliance:["Building Codes","Safety Standards"],status:"STANDARD"},{title:"COMPLETE RENOVATION",code:"REN-COMP-002",classification:"COMPREHENSIVE RENOVATION",baseRate:"₹1,200",totalCost:"₹12,00,000",area:"1000 sq ft",timeline:"4-5 months",description:"Complete renovation with modern upgrades",costBreakdown:{"Planning & Design":"10%",Demolition:"12%","Structural Work":"22%","Electrical Upgrade":"22%","Plumbing Upgrade":"18%","Premium Finishing":"16%"},specifications:["Complete Renovation Design","Modern Electrical Systems","Advanced Plumbing","Premium Paint & Finishes","Modern Fixture Installation","Structural Modifications","12 Months Warranty"],included:["Renovation Design","Comprehensive Demolition","System Upgrades","Premium Materials","Professional Installation","Project Management","Deep Cleaning"],compliance:["NBC 2016","Safety Standards","Modern Codes"],status:"RECOMMENDED"},{title:"LUXURY RENOVATION",code:"REN-LUX-003",classification:"LUXURY RENOVATION",baseRate:"₹2,000",totalCost:"₹20,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Premium renovation with luxury upgrades",costBreakdown:{"Luxury Design":"12%","Selective Demolition":"10%","Premium Structural":"20%","Smart Electrical":"24%","Luxury Plumbing":"20%","Designer Finishing":"14%"},specifications:["Luxury Renovation Design","Smart Home Integration","Luxury Plumbing Systems","Designer Finishes","Luxury Fixture Installation","Architectural Modifications","18 Months Warranty"],included:["Luxury Design Planning","Precision Demolition","Premium Upgrades","Luxury Materials","Expert Installation","Project Management","Professional Staging","Maintenance Package"],compliance:["NBC 2016","Luxury Standards","Green Building"],status:"PREMIUM"}]}[c];return i.jsxs("div",{className:"estimation-lab",ref:p,children:[i.jsx("div",{className:"lab-header",children:i.jsxs("div",{className:"header-frame",children:[i.jsxs("div",{className:"blueprint-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"lab-info",children:[i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PROJECT TYPE:"}),i.jsx("span",{className:"info-value",children:"CONSTRUCTION COST ESTIMATION"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PRICING STRUCTURE:"}),i.jsx("span",{className:"info-value",children:"TRANSPARENT & COMPETITIVE"})]})]}),i.jsx("h1",{className:`lab-title ${s?"visible":""}`,children:"CONSTRUCTION PRICING"}),i.jsx("p",{className:`lab-subtitle ${s?"visible":""}`,children:"Professional cost estimation and project analysis for construction projects"}),i.jsxs("div",{className:"view-controls",children:[i.jsxs("button",{className:`control-btn ${x==="estimates"?"active":""}`,onClick:()=>b("estimates"),children:[i.jsx("span",{className:"btn-icon",children:"📋"}),"Cost Estimates"]}),i.jsxs("button",{className:`control-btn ${x==="breakdown"?"active":""}`,onClick:()=>b("breakdown"),children:[i.jsx("span",{className:"btn-icon",children:"📊"}),"Cost Breakdown"]})]})]})]})}),i.jsx("div",{className:"category-lab",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"lab-section-header",children:[i.jsx("h2",{children:"PROJECT CLASSIFICATION"}),i.jsx("div",{className:"classification-grid",children:y.map(z=>i.jsxs("div",{className:`classification-card ${c===z.id?"active":""}`,onClick:()=>d(z.id),children:[i.jsxs("div",{className:"card-header",children:[i.jsx("div",{className:"card-code",children:z.code}),i.jsx("div",{className:"card-icon",children:z.icon})]}),i.jsx("div",{className:"card-title",children:z.label}),i.jsxs("div",{className:"card-status",children:[i.jsx("span",{className:"status-indicator"}),"AVAILABLE"]})]},z.id))})]})})}),x==="estimates"&&i.jsx("div",{className:"estimates-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"estimates-header",children:[i.jsxs("h2",{children:["PROJECT ESTIMATES - ",c.toUpperCase()]}),i.jsxs("div",{className:"estimates-meta",children:[i.jsx("span",{children:"CURRENCY: INR"}),i.jsx("span",{children:"VALID UNTIL: 30 DAYS"}),i.jsxs("span",{children:["ESTIMATES: ",S.length]})]})]}),i.jsx("div",{className:"estimates-grid",children:S.map((z,T)=>i.jsxs("div",{className:`estimate-sheet ${z.status.toLowerCase()}`,onClick:()=>g(f===T?null:T),children:[i.jsxs("div",{className:"sheet-header",children:[i.jsxs("div",{className:"estimate-id",children:[i.jsx("span",{className:"id-code",children:z.code}),i.jsx("span",{className:"id-class",children:z.classification})]}),i.jsx("div",{className:"estimate-status",children:i.jsx("span",{className:`status-badge ${z.status.toLowerCase()}`,children:z.status})})]}),i.jsxs("div",{className:"sheet-content",children:[i.jsx("h3",{children:z.title}),i.jsx("p",{className:"estimate-description",children:z.description}),i.jsxs("div",{className:"cost-display",children:[i.jsxs("div",{className:"base-rate",children:[i.jsx("span",{className:"rate-label",children:"BASE RATE:"}),i.jsxs("span",{className:"rate-value",children:[z.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"total-cost",children:[i.jsx("span",{className:"cost-label",children:"ESTIMATED COST:"}),i.jsx("span",{className:"cost-value",children:z.totalCost})]})]}),i.jsxs("div",{className:"project-specs",children:[i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"AREA:"}),i.jsx("span",{className:"spec-value",children:z.area})]}),i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"TIMELINE:"}),i.jsx("span",{className:"spec-value",children:z.timeline})]})]}),f===T&&i.jsxs("div",{className:"detailed-estimate",children:[i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"COST BREAKDOWN"}),i.jsx("div",{className:"breakdown-grid",children:Object.entries(z.costBreakdown).map(([_,H])=>i.jsxs("div",{className:"breakdown-item",children:[i.jsx("span",{className:"item-name",children:_}),i.jsx("span",{className:"item-percentage",children:H})]},_))})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"SPECIFICATIONS"}),i.jsx("div",{className:"specs-list",children:z.specifications.map((_,H)=>i.jsxs("div",{className:"spec-line",children:[i.jsx("span",{className:"spec-bullet",children:"●"}),_]},H))})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"INCLUDED SERVICES"}),i.jsx("div",{className:"included-grid",children:z.included.map((_,H)=>i.jsxs("div",{className:"included-item",children:[i.jsx("span",{className:"include-check",children:"✓"}),_]},H))})]}),i.jsxs("div",{className:"estimate-footer",children:[i.jsxs("div",{className:"compliance-info",children:[i.jsx("span",{className:"compliance-label",children:"COMPLIANCE:"}),i.jsx("div",{className:"compliance-tags",children:z.compliance.map((_,H)=>i.jsx("span",{className:"compliance-tag",children:_},H))})]}),i.jsxs("button",{className:"request-quote-btn",onClick:r,children:["REQUEST DETAILED QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})]})]})]})]},T))})]})}),x==="breakdown"&&i.jsx("div",{className:"breakdown-section",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"breakdown-header",children:i.jsxs("h2",{children:["COST ANALYSIS - ",c.toUpperCase()]})}),i.jsx("div",{className:"analysis-grid",children:S.map((z,T)=>i.jsxs("div",{className:"analysis-card",children:[i.jsxs("div",{className:"analysis-header",children:[i.jsx("h3",{children:z.title}),i.jsx("div",{className:"analysis-code",children:z.code})]}),i.jsxs("div",{className:"cost-chart",children:[i.jsx("div",{className:"chart-title",children:"COST DISTRIBUTION"}),i.jsx("div",{className:"chart-bars",children:Object.entries(z.costBreakdown).map(([_,H],U)=>i.jsxs("div",{className:"chart-bar",children:[i.jsxs("div",{className:"bar-info",children:[i.jsx("span",{className:"bar-label",children:_}),i.jsx("span",{className:"bar-percentage",children:H})]}),i.jsx("div",{className:"bar-visual",children:i.jsx("div",{className:"bar-fill",style:{width:H}})})]},U))})]}),i.jsxs("div",{className:"analysis-summary",children:[i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Base Rate:"}),i.jsxs("span",{children:[z.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Total Cost:"}),i.jsx("span",{children:z.totalCost})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Timeline:"}),i.jsx("span",{children:z.timeline})]})]})]},T))})]})}),i.jsx("div",{className:"lab-statistics",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"stats-frame",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("h2",{children:"ESTIMATION LAB METRICS"}),i.jsx("div",{className:"metrics-id",children:"LAB-STAT-2024"})]}),i.jsxs("div",{className:"metrics-grid",children:[i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"📋"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"500+"}),i.jsx("span",{className:"metric-label",children:"Estimates Delivered"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"💰"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"95%"}),i.jsx("span",{className:"metric-label",children:"Cost Accuracy"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"⏱️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"24hrs"}),i.jsx("span",{className:"metric-label",children:"Quote Turnaround"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"🛡️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"100%"}),i.jsx("span",{className:"metric-label",children:"Transparent Pricing"})]})]})]})]})})}),i.jsx("style",{jsx:!0,children:`
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
          
      `})]})},ev="/pavan-techno-constructions/assets/a1-sGu83T9_.gif",tv="/pavan-techno-constructions/assets/a2-CyeHT3-A.gif",av="/pavan-techno-constructions/assets/a3-CwZT0UDn.gif",nv="/pavan-techno-constructions/assets/a4-Bt8HQudn.gif",iv="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",xp="/pavan-techno-constructions/assets/after2-CC4aGAP5.jpeg",rv="/pavan-techno-constructions/assets/g4-8NWOpxcK.jpeg",lv="/pavan-techno-constructions/assets/g5-DtKnui7T.jpeg",ov="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",sv="/pavan-techno-constructions/assets/g8-moiSGwUu.jpeg",cv="/pavan-techno-constructions/assets/g10-CtDg70wl.jpeg",uv="/pavan-techno-constructions/assets/g11-Vd8NpP41.jpg",dv="/pavan-techno-constructions/assets/g12-DZXer8D9.jpg",fv=()=>{const[r,s]=v.useState(!1),[u,c]=v.useState(""),[d,f]=v.useState(!1),[g,x]=v.useState(null),[b,p]=v.useState("featured"),[y,O]=v.useState("blueprint"),S=v.useRef(null),z=v.useRef(null),T=v.useRef(null),_=X=>{const ne=S.current,$=z.current,ie=T.current;if(!ne||!$||!ie)return;const ge=ne.getBoundingClientRect();let R=X.pageX-ge.left;R<0&&(R=0),R>ge.width&&(R=ge.width),$.style.clipPath=`inset(0 ${ge.width-R}px 0 0)`,ie.style.left=`${R}px`},H=()=>f(!0),U=()=>f(!1),N=X=>{d&&_(X)},J=()=>f(!0),ee=()=>f(!1),K=X=>{if(d){const ne=X.touches[0];_(ne)}};v.useEffect(()=>(window.addEventListener("mouseup",U),window.addEventListener("mousemove",N),window.addEventListener("touchend",ee),window.addEventListener("touchmove",K),()=>{window.removeEventListener("mouseup",U),window.removeEventListener("mousemove",N),window.removeEventListener("touchend",ee),window.removeEventListener("touchmove",K)}),[d]);const me={featured:[{src:xp,title:"Residential Transformation",type:"Renovation",year:"2024",area:"2,500 sq ft",duration:"6 months"},{src:cv,title:"Commercial Complex",type:"New Construction",year:"2024",area:"15,000 sq ft",duration:"18 months"}],residential:[{src:rv,title:"Modern Villa",type:"Custom Home",year:"2024",area:"3,200 sq ft",duration:"8 months"},{src:lv,title:"Urban Townhouse",type:"Multi-Family",year:"2023",area:"1,800 sq ft",duration:"5 months"},{src:ov,title:"Luxury Estate",type:"High-End Residential",year:"2024",area:"6,500 sq ft",duration:"12 months"}],commercial:[{src:sv,title:"Office Building",type:"Corporate",year:"2023",area:"25,000 sq ft",duration:"24 months"},{src:uv,title:"Retail Center",type:"Commercial",year:"2024",area:"12,000 sq ft",duration:"10 months"},{src:dv,title:"Industrial Facility",type:"Manufacturing",year:"2023",area:"40,000 sq ft",duration:"15 months"}],process:[{src:ev,title:"Foundation Work",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:tv,title:"Structural Development",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:av,title:"Interior Finishing",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:nv,title:"Final Installation",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"}]},L=X=>{c(X),s(!0)},ae=()=>{s(!1),c("")},B=X=>{X.target===X.currentTarget&&ae()},se=X=>{p(b===X?null:X)};return i.jsxs("div",{className:"portfolio-page",children:[i.jsx("div",{className:"blueprint-header",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"header-grid",children:[i.jsxs("div",{className:"title-block",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsxs("div",{className:"project-info",children:[i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"PROJECT:"}),i.jsx("span",{className:"value",children:"CONSTRUCTION PORTFOLIO"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"SCALE:"}),i.jsx("span",{className:"value",children:"1:1 DIGITAL"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"DATE:"}),i.jsx("span",{className:"value",children:"2024"})]})]}),i.jsx("h1",{className:"main-title",children:"PROJECT GALLERY"}),i.jsx("div",{className:"title-underline"})]}),i.jsx("div",{className:"view-controls",children:i.jsxs("div",{className:"control-panel",children:[i.jsx("div",{className:"panel-header",children:"VIEW MODE"}),i.jsxs("div",{className:"mode-buttons",children:[i.jsxs("button",{className:`mode-btn ${y==="blueprint"?"active":""}`,onClick:()=>O("blueprint"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Blueprint"]}),i.jsxs("button",{className:`mode-btn ${y==="hexagon"?"active":""}`,onClick:()=>O("hexagon"),children:[i.jsx("span",{className:"btn-symbol",children:"⬡"}),"Hexagon"]}),i.jsxs("button",{className:`mode-btn ${y==="timeline"?"active":""}`,onClick:()=>O("timeline"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Timeline"]})]})]})})]})})}),i.jsx("div",{className:"technical-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"drawing-header",children:[i.jsx("h2",{children:"BEFORE & AFTER ANALYSIS"}),i.jsx("div",{className:"drawing-number",children:"DWG-001"})]}),i.jsxs("div",{className:"blueprint-frame",children:[i.jsxs("div",{className:"frame-markers",children:[i.jsx("div",{className:"marker top-left",children:"A"}),i.jsx("div",{className:"marker top-right",children:"B"}),i.jsx("div",{className:"marker bottom-left",children:"C"}),i.jsx("div",{className:"marker bottom-right",children:"D"})]}),i.jsxs("div",{className:"comparison-wrapper",ref:S,children:[i.jsx("img",{src:iv,alt:"Before",className:"before-image",ref:z}),i.jsx("img",{src:xp,alt:"After",className:"after-image"}),i.jsx("div",{className:"technical-slider",ref:T,onMouseDown:H,onTouchStart:J,children:i.jsxs("div",{className:"slider-guide",children:[i.jsx("div",{className:"guide-line"}),i.jsx("div",{className:"slider-handle",children:i.jsxs("div",{className:"handle-cross",children:[i.jsx("div",{className:"cross-h"}),i.jsx("div",{className:"cross-v"})]})})]})}),i.jsxs("div",{className:"technical-label before",children:[i.jsx("div",{className:"label-box",children:"BEFORE"}),i.jsx("div",{className:"dimension-line"})]}),i.jsxs("div",{className:"technical-label after",children:[i.jsx("div",{className:"label-box",children:"AFTER"}),i.jsx("div",{className:"dimension-line"})]})]})]})]})}),i.jsx("div",{className:"gallery-section",children:i.jsxs("div",{className:"container",children:[y==="blueprint"&&i.jsx("div",{className:"blueprint-layout",children:Object.entries(me).map(([X,ne])=>i.jsxs("div",{className:"project-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>se(X),children:[i.jsxs("div",{className:"section-title",children:[i.jsx("span",{className:"section-symbol",children:"■"}),X.toUpperCase().replace("_"," "),i.jsxs("span",{className:"project-count",children:["(",ne.length,")"]})]}),i.jsx("div",{className:"section-toggle",children:i.jsx("span",{className:`toggle-symbol ${b===X?"expanded":""}`,children:"+"})})]}),i.jsx("div",{className:`section-content ${b===X?"expanded":""}`,children:i.jsx("div",{className:"blueprint-grid",children:ne.map(($,ie)=>i.jsx("div",{className:"blueprint-card",onClick:()=>L($.src),children:i.jsxs("div",{className:"card-frame",children:[i.jsx("div",{className:"frame-corner tl"}),i.jsx("div",{className:"frame-corner tr"}),i.jsx("div",{className:"frame-corner bl"}),i.jsx("div",{className:"frame-corner br"}),i.jsx("img",{src:$.src,alt:$.title}),i.jsx("div",{className:"card-overlay",children:i.jsxs("div",{className:"project-details",children:[i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TITLE:"}),i.jsx("span",{className:"detail-value",children:$.title})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TYPE:"}),i.jsx("span",{className:"detail-value",children:$.type})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"YEAR:"}),i.jsx("span",{className:"detail-value",children:$.year})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"AREA:"}),i.jsx("span",{className:"detail-value",children:$.area})]})]})})]})},ie))})})]},X))}),y==="hexagon"&&i.jsx("div",{className:"hexagon-layout",children:i.jsx("div",{className:"hex-grid",children:Object.values(me).flat().map((X,ne)=>i.jsx("div",{className:"hex-item",onClick:()=>L(X.src),children:i.jsx("div",{className:"hexagon",children:i.jsxs("div",{className:"hex-inner",children:[i.jsx("img",{src:X.src,alt:X.title}),i.jsx("div",{className:"hex-overlay",children:i.jsxs("div",{className:"hex-content",children:[i.jsx("div",{className:"hex-number",children:String(ne+1).padStart(2,"0")}),i.jsx("div",{className:"hex-title",children:X.title})]})})]})})},ne))})}),y==="timeline"&&i.jsx("div",{className:"timeline-layout",children:i.jsxs("div",{className:"timeline-axis",children:[i.jsx("div",{className:"axis-line"}),Object.values(me).flat().map((X,ne)=>i.jsxs("div",{className:`timeline-item ${ne%2===0?"left":"right"}`,onClick:()=>L(X.src),children:[i.jsxs("div",{className:"timeline-marker",children:[i.jsx("div",{className:"marker-dot"}),i.jsx("div",{className:"marker-line"})]}),i.jsxs("div",{className:"timeline-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("span",{className:"card-year",children:X.year}),i.jsx("span",{className:"card-type",children:X.type})]}),i.jsx("img",{src:X.src,alt:X.title}),i.jsxs("div",{className:"card-info",children:[i.jsx("h3",{children:X.title}),i.jsxs("div",{className:"card-specs",children:[i.jsx("span",{children:X.area}),i.jsx("span",{children:X.duration})]})]})]})]},ne))]})})]})}),r&&i.jsx("div",{className:"technical-modal",onClick:B,children:i.jsxs("div",{className:"modal-frame",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("div",{className:"modal-title",children:"PROJECT DETAIL VIEW"}),i.jsx("button",{className:"modal-close",onClick:ae,children:i.jsx("span",{className:"close-symbol",children:"×"})})]}),i.jsx("div",{className:"modal-content",children:i.jsx("img",{src:u,alt:"Project Detail"})}),i.jsx("div",{className:"modal-footer",children:i.jsx("div",{className:"footer-line"})})]})}),i.jsx("style",{jsx:!0,children:`
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
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Blueprint Header */
        .blueprint-header {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 60px 0;
          border-bottom: 2px solid #B79C5C;
          position: relative;
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
        .hexagon-layout {
          display: flex;
          justify-content: center;
        }

        .hex-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          max-width: 900px;
        }

        .hex-item {
          display: flex;
          justify-content: center;
          cursor: pointer;
        }

        .hexagon {
          width: 180px;
          height: 156px;
          position: relative;
        }

        .hex-inner {
          width: 100%;
          height: 100%;
          background: white;
          border: 3px solid #2D3748;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .hex-item:hover .hex-inner {
          border-color: #B79C5C;
          transform: scale(1.05);
        }

        .hex-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hex-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(45, 55, 72, 0.9);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hex-item:hover .hex-overlay {
          opacity: 1;
        }

        .hex-content {
          text-align: center;
        }

        .hex-number {
          font-size: 2rem;
          font-weight: 800;
          color: #B79C5C;
          margin-bottom: 10px;
        }

        .hex-title {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
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
      `})]})};function mv(){const[r,s]=v.useState(!1),[u,c]=v.useState(!1);v.useEffect(()=>{const g=()=>{window.scrollY>100?c(!0):c(!1)};return window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]);const d=()=>{s(!0)},f=()=>{s(!1)};return i.jsx(l2,{children:i.jsxs("div",{className:"app",children:[i.jsx(Gy,{scrolled:u}),i.jsxs(Lx,{children:[i.jsx(Fa,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(dp,{openPopup:d}),i.jsx(Bc,{openPopup:d}),i.jsx(mp,{}),i.jsx(pp,{openPopup:d}),i.jsx(fp,{openPopup:d}),i.jsx(Lc,{openPopup:d}),i.jsx(Gl,{}),i.jsx(Yc,{}),i.jsx(_c,{}),i.jsx(gp,{}),i.jsx(hp,{}),i.jsx(Uc,{}),i.jsx(bn,{})]})}),i.jsx(Fa,{path:"/about",element:i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{paddingTop:"70px"},children:[i.jsx(Lc,{openPopup:d}),i.jsx(Bc,{openPopup:d}),i.jsx(Yc,{}),i.jsx(_c,{}),i.jsx(Gl,{})]}),i.jsx(bn,{})]})}),i.jsx(Fa,{path:"/services",element:i.jsxs(i.Fragment,{children:[i.jsx($y,{openPopup:d}),i.jsx(bn,{})]})}),i.jsx(Fa,{path:"/pricing",element:i.jsxs(i.Fragment,{children:[i.jsx(Jy,{openPopup:d}),i.jsx(bn,{})]})}),i.jsx(Fa,{path:"/gallery",element:i.jsxs(i.Fragment,{children:[i.jsx(fv,{}),i.jsx(bn,{})]})}),i.jsx(Fa,{path:"/contact",element:i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{paddingTop:"70px"},children:[i.jsx(Uc,{}),i.jsx(Gl,{})]}),i.jsx(bn,{})]})}),i.jsx(Fa,{path:"*",element:i.jsxs(i.Fragment,{children:[i.jsx(dp,{openPopup:d}),i.jsx(Bc,{openPopup:d}),i.jsx(mp,{}),i.jsx(pp,{openPopup:d}),i.jsx(fp,{openPopup:d}),i.jsx(Lc,{openPopup:d}),i.jsx(Gl,{}),i.jsx(Yc,{}),i.jsx(_c,{}),i.jsx(gp,{}),i.jsx(hp,{}),i.jsx(Uc,{}),i.jsx(bn,{})]})})]}),r&&i.jsx(Iy,{closePopup:f})]})})}G1.createRoot(document.getElementById("root")).render(i.jsx(cu.StrictMode,{children:i.jsx(mv,{})}));
