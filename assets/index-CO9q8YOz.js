(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&c(g)}).observe(document,{childList:!0,subtree:!0});function u(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function c(d){if(d.ep)return;d.ep=!0;const f=u(d);fetch(d.href,f)}})();function du(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sc={exports:{}},pr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function V1(){if(ym)return pr;ym=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function u(c,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:r,type:c,key:g,ref:d!==void 0?d:null,props:f}}return pr.Fragment=s,pr.jsx=u,pr.jsxs=u,pr}var vm;function I1(){return vm||(vm=1,Sc.exports=V1()),Sc.exports}var i=I1(),jc={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function G1(){if(wm)return Se;wm=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),N=Symbol.iterator;function S(j){return j===null||typeof j!="object"?null:(j=N&&j[N]||j["@@iterator"],typeof j=="function"?j:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,Q={};function L(j,X,G){this.props=j,this.context=X,this.refs=Q,this.updater=G||z}L.prototype.isReactComponent={},L.prototype.setState=function(j,X){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,X,"setState")},L.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function _(){}_.prototype=L.prototype;function C(j,X,G){this.props=j,this.context=X,this.refs=Q,this.updater=G||z}var W=C.prototype=new _;W.constructor=C,T(W,L.prototype),W.isPureReactComponent=!0;var te=Array.isArray,K={H:null,A:null,T:null,S:null,V:null},oe=Object.prototype.hasOwnProperty;function Y(j,X,G,J,ie,ye){return G=ye.ref,{$$typeof:r,type:j,key:X,ref:G!==void 0?G:null,props:ye}}function $(j,X){return Y(j.type,X,void 0,void 0,void 0,j.props)}function M(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function fe(j){var X={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(G){return X[G]})}var q=/\/+/g;function ne(j,X){return typeof j=="object"&&j!==null&&j.key!=null?fe(""+j.key):X.toString(36)}function me(){}function ee(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(me,me):(j.status="pending",j.then(function(X){j.status==="pending"&&(j.status="fulfilled",j.value=X)},function(X){j.status==="pending"&&(j.status="rejected",j.reason=X)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function re(j,X,G,J,ie){var ye=typeof j;(ye==="undefined"||ye==="boolean")&&(j=null);var B=!1;if(j===null)B=!0;else switch(ye){case"bigint":case"string":case"number":B=!0;break;case"object":switch(j.$$typeof){case r:case s:B=!0;break;case y:return B=j._init,re(B(j._payload),X,G,J,ie)}}if(B)return ie=ie(j),B=J===""?"."+ne(j,0):J,te(ie)?(G="",B!=null&&(G=B.replace(q,"$&/")+"/"),re(ie,X,G,"",function(Te){return Te})):ie!=null&&(M(ie)&&(ie=$(ie,G+(ie.key==null||j&&j.key===ie.key?"":(""+ie.key).replace(q,"$&/")+"/")+B)),X.push(ie)),1;B=0;var he=J===""?".":J+":";if(te(j))for(var se=0;se<j.length;se++)J=j[se],ye=he+ne(J,se),B+=re(J,X,G,ye,ie);else if(se=S(j),typeof se=="function")for(j=se.call(j),se=0;!(J=j.next()).done;)J=J.value,ye=he+ne(J,se++),B+=re(J,X,G,ye,ie);else if(ye==="object"){if(typeof j.then=="function")return re(ee(j),X,G,J,ie);throw X=String(j),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return B}function D(j,X,G){if(j==null)return j;var J=[],ie=0;return re(j,J,"","",function(ye){return X.call(G,ye,ie++)}),J}function I(j){if(j._status===-1){var X=j._result;X=X(),X.then(function(G){(j._status===0||j._status===-1)&&(j._status=1,j._result=G)},function(G){(j._status===0||j._status===-1)&&(j._status=2,j._result=G)}),j._status===-1&&(j._status=0,j._result=X)}if(j._status===1)return j._result.default;throw j._result}var ae=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function ve(){}return Se.Children={map:D,forEach:function(j,X,G){D(j,function(){X.apply(this,arguments)},G)},count:function(j){var X=0;return D(j,function(){X++}),X},toArray:function(j){return D(j,function(X){return X})||[]},only:function(j){if(!M(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Se.Component=L,Se.Fragment=u,Se.Profiler=d,Se.PureComponent=C,Se.StrictMode=c,Se.Suspense=b,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,Se.__COMPILER_RUNTIME={__proto__:null,c:function(j){return K.H.useMemoCache(j)}},Se.cache=function(j){return function(){return j.apply(null,arguments)}},Se.cloneElement=function(j,X,G){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var J=T({},j.props),ie=j.key,ye=void 0;if(X!=null)for(B in X.ref!==void 0&&(ye=void 0),X.key!==void 0&&(ie=""+X.key),X)!oe.call(X,B)||B==="key"||B==="__self"||B==="__source"||B==="ref"&&X.ref===void 0||(J[B]=X[B]);var B=arguments.length-2;if(B===1)J.children=G;else if(1<B){for(var he=Array(B),se=0;se<B;se++)he[se]=arguments[se+2];J.children=he}return Y(j.type,ie,void 0,void 0,ye,J)},Se.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:f,_context:j},j},Se.createElement=function(j,X,G){var J,ie={},ye=null;if(X!=null)for(J in X.key!==void 0&&(ye=""+X.key),X)oe.call(X,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ie[J]=X[J]);var B=arguments.length-2;if(B===1)ie.children=G;else if(1<B){for(var he=Array(B),se=0;se<B;se++)he[se]=arguments[se+2];ie.children=he}if(j&&j.defaultProps)for(J in B=j.defaultProps,B)ie[J]===void 0&&(ie[J]=B[J]);return Y(j,ye,void 0,void 0,null,ie)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(j){return{$$typeof:x,render:j}},Se.isValidElement=M,Se.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:I}},Se.memo=function(j,X){return{$$typeof:p,type:j,compare:X===void 0?null:X}},Se.startTransition=function(j){var X=K.T,G={};K.T=G;try{var J=j(),ie=K.S;ie!==null&&ie(G,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(ve,ae)}catch(ye){ae(ye)}finally{K.T=X}},Se.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},Se.use=function(j){return K.H.use(j)},Se.useActionState=function(j,X,G){return K.H.useActionState(j,X,G)},Se.useCallback=function(j,X){return K.H.useCallback(j,X)},Se.useContext=function(j){return K.H.useContext(j)},Se.useDebugValue=function(){},Se.useDeferredValue=function(j,X){return K.H.useDeferredValue(j,X)},Se.useEffect=function(j,X,G){var J=K.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(j,X)},Se.useId=function(){return K.H.useId()},Se.useImperativeHandle=function(j,X,G){return K.H.useImperativeHandle(j,X,G)},Se.useInsertionEffect=function(j,X){return K.H.useInsertionEffect(j,X)},Se.useLayoutEffect=function(j,X){return K.H.useLayoutEffect(j,X)},Se.useMemo=function(j,X){return K.H.useMemo(j,X)},Se.useOptimistic=function(j,X){return K.H.useOptimistic(j,X)},Se.useReducer=function(j,X,G){return K.H.useReducer(j,X,G)},Se.useRef=function(j){return K.H.useRef(j)},Se.useState=function(j){return K.H.useState(j)},Se.useSyncExternalStore=function(j,X,G){return K.H.useSyncExternalStore(j,X,G)},Se.useTransition=function(){return K.H.useTransition()},Se.version="19.1.0",Se}var Sm;function fu(){return Sm||(Sm=1,jc.exports=G1()),jc.exports}var v=fu();const ea=du(v);var Cc={exports:{}},gr={},Ac={exports:{}},Ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function Q1(){return jm||(jm=1,function(r){function s(D,I){var ae=D.length;D.push(I);e:for(;0<ae;){var ve=ae-1>>>1,j=D[ve];if(0<d(j,I))D[ve]=I,D[ae]=j,ae=ve;else break e}}function u(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var I=D[0],ae=D.pop();if(ae!==I){D[0]=ae;e:for(var ve=0,j=D.length,X=j>>>1;ve<X;){var G=2*(ve+1)-1,J=D[G],ie=G+1,ye=D[ie];if(0>d(J,ae))ie<j&&0>d(ye,J)?(D[ve]=ye,D[ie]=ae,ve=ie):(D[ve]=J,D[G]=ae,ve=G);else if(ie<j&&0>d(ye,ae))D[ve]=ye,D[ie]=ae,ve=ie;else break e}}return I}function d(D,I){var ae=D.sortIndex-I.sortIndex;return ae!==0?ae:D.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var g=Date,x=g.now();r.unstable_now=function(){return g.now()-x}}var b=[],p=[],y=1,N=null,S=3,z=!1,T=!1,Q=!1,L=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function te(D){for(var I=u(p);I!==null;){if(I.callback===null)c(p);else if(I.startTime<=D)c(p),I.sortIndex=I.expirationTime,s(b,I);else break;I=u(p)}}function K(D){if(Q=!1,te(D),!T)if(u(b)!==null)T=!0,oe||(oe=!0,ne());else{var I=u(p);I!==null&&re(K,I.startTime-D)}}var oe=!1,Y=-1,$=5,M=-1;function fe(){return L?!0:!(r.unstable_now()-M<$)}function q(){if(L=!1,oe){var D=r.unstable_now();M=D;var I=!0;try{e:{T=!1,Q&&(Q=!1,C(Y),Y=-1),z=!0;var ae=S;try{t:{for(te(D),N=u(b);N!==null&&!(N.expirationTime>D&&fe());){var ve=N.callback;if(typeof ve=="function"){N.callback=null,S=N.priorityLevel;var j=ve(N.expirationTime<=D);if(D=r.unstable_now(),typeof j=="function"){N.callback=j,te(D),I=!0;break t}N===u(b)&&c(b),te(D)}else c(b);N=u(b)}if(N!==null)I=!0;else{var X=u(p);X!==null&&re(K,X.startTime-D),I=!1}}break e}finally{N=null,S=ae,z=!1}I=void 0}}finally{I?ne():oe=!1}}}var ne;if(typeof W=="function")ne=function(){W(q)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ee=me.port2;me.port1.onmessage=q,ne=function(){ee.postMessage(null)}}else ne=function(){_(q,0)};function re(D,I){Y=_(function(){D(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(D){switch(S){case 1:case 2:case 3:var I=3;break;default:I=S}var ae=S;S=I;try{return D()}finally{S=ae}},r.unstable_requestPaint=function(){L=!0},r.unstable_runWithPriority=function(D,I){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var ae=S;S=D;try{return I()}finally{S=ae}},r.unstable_scheduleCallback=function(D,I,ae){var ve=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ve+ae:ve):ae=ve,D){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ae+j,D={id:y++,callback:I,priorityLevel:D,startTime:ae,expirationTime:j,sortIndex:-1},ae>ve?(D.sortIndex=ae,s(p,D),u(b)===null&&D===u(p)&&(Q?(C(Y),Y=-1):Q=!0,re(K,ae-ve))):(D.sortIndex=j,s(b,D),T||z||(T=!0,oe||(oe=!0,ne()))),D},r.unstable_shouldYield=fe,r.unstable_wrapCallback=function(D){var I=S;return function(){var ae=S;S=I;try{return D.apply(this,arguments)}finally{S=ae}}}}(Ec)),Ec}var Cm;function F1(){return Cm||(Cm=1,Ac.exports=Q1()),Ac.exports}var Nc={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function W1(){if(Am)return mt;Am=1;var r=fu();function s(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(){}var c={d:{f:u,r:function(){throw Error(s(522))},D:u,C:u,L:u,m:u,X:u,S:u,M:u},p:0,findDOMNode:null},d=Symbol.for("react.portal");function f(b,p,y){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:N==null?null:""+N,children:b,containerInfo:p,implementation:y}}var g=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function x(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,mt.createPortal=function(b,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(s(299));return f(b,p,null,y)},mt.flushSync=function(b){var p=g.T,y=c.p;try{if(g.T=null,c.p=2,b)return b()}finally{g.T=p,c.p=y,c.d.f()}},mt.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,c.d.C(b,p))},mt.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},mt.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var y=p.as,N=x(y,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,z=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?c.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:N,integrity:S,fetchPriority:z}):y==="script"&&c.d.X(b,{crossOrigin:N,integrity:S,fetchPriority:z,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},mt.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=x(p.as,p.crossOrigin);c.d.M(b,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&c.d.M(b)},mt.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,N=x(y,p.crossOrigin);c.d.L(b,y,{crossOrigin:N,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},mt.preloadModule=function(b,p){if(typeof b=="string")if(p){var y=x(p.as,p.crossOrigin);c.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else c.d.m(b)},mt.requestFormReset=function(b){c.d.r(b)},mt.unstable_batchedUpdates=function(b,p){return b(p)},mt.useFormState=function(b,p,y){return g.H.useFormState(b,p,y)},mt.useFormStatus=function(){return g.H.useHostTransitionStatus()},mt.version="19.1.0",mt}var Em;function Ap(){if(Em)return Nc.exports;Em=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Nc.exports=W1(),Nc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function P1(){if(Nm)return gr;Nm=1;var r=F1(),s=fu(),u=Ap();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(f(e)!==e)throw Error(c(188))}function b(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(c(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var o=l.alternate;if(o===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===a)return x(l),e;if(o===n)return x(l),t;o=o.sibling}throw Error(c(188))}if(a.return!==n.return)a=l,n=o;else{for(var m=!1,h=l.child;h;){if(h===a){m=!0,a=l,n=o;break}if(h===n){m=!0,n=l,a=o;break}h=h.sibling}if(!m){for(h=o.child;h;){if(h===a){m=!0,a=o,n=l;break}if(h===n){m=!0,n=o,a=l;break}h=h.sibling}if(!m)throw Error(c(189))}}if(a.alternate!==n)throw Error(c(190))}if(a.tag!==3)throw Error(c(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,N=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),W=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function ee(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case L:return"Profiler";case Q:return"StrictMode";case K:return"Suspense";case oe:return"SuspenseList";case M:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case W:return(e.displayName||"Context")+".Provider";case C:return(e._context.displayName||"Context")+".Consumer";case te:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case $:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}var re=Array.isArray,D=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ve=[],j=-1;function X(e){return{current:e}}function G(e){0>j||(e.current=ve[j],ve[j]=null,j--)}function J(e,t){j++,ve[j]=e.current,e.current=t}var ie=X(null),ye=X(null),B=X(null),he=X(null);function se(e,t){switch(J(B,t),J(ye,e),J(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?F0(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=F0(t),e=W0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(ie),J(ie,e)}function Te(){G(ie),G(ye),G(B)}function Xe(e){e.memoizedState!==null&&J(he,e);var t=ie.current,a=W0(t,e.type);t!==a&&(J(ye,e),J(ie,a))}function Me(e){ye.current===e&&(G(ie),G(ye)),he.current===e&&(G(he),cr._currentValue=ae)}var Ke=Object.prototype.hasOwnProperty,nt=r.unstable_scheduleCallback,Ve=r.unstable_cancelCallback,Z=r.unstable_shouldYield,be=r.unstable_requestPaint,ce=r.unstable_now,we=r.unstable_getCurrentPriorityLevel,ze=r.unstable_ImmediatePriority,et=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Gt=r.unstable_LowPriority,Mt=r.unstable_IdlePriority,co=r.log,Eg=r.unstable_setDisableYieldValue,xi=null,St=null;function Ca(e){if(typeof co=="function"&&Eg(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(xi,e)}catch{}}var jt=Math.clz32?Math.clz32:zg,Ng=Math.log,Tg=Math.LN2;function zg(e){return e>>>=0,e===0?32:31-(Ng(e)/Tg|0)|0}var zr=256,kr=4194304;function an(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,o=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~o,n!==0?l=an(n):(m&=h,m!==0?l=an(m):a||(a=h&~e,a!==0&&(l=an(a))))):(h=n&~o,h!==0?l=an(h):m!==0?l=an(m):a||(a=n&~e,a!==0&&(l=an(a)))),l===0?0:t!==0&&t!==l&&(t&o)===0&&(o=l&-l,a=t&-t,o>=a||o===32&&(a&4194048)!==0)?t:l}function bi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(){var e=zr;return zr<<=1,(zr&4194048)===0&&(zr=256),e}function ku(){var e=kr;return kr<<=1,(kr&62914560)===0&&(kr=4194304),e}function uo(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function yi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Rg(e,t,a,n,l,o){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,w=e.expirationTimes,R=e.hiddenUpdates;for(a=m&~a;0<a;){var H=31-jt(a),F=1<<H;h[H]=0,w[H]=-1;var O=R[H];if(O!==null)for(R[H]=null,H=0;H<O.length;H++){var U=O[H];U!==null&&(U.lane&=-536870913)}a&=~F}n!==0&&Ru(e,n,0),o!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=o&~(m&~t))}function Ru(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-jt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function Mu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-jt(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function fo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ou(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:mm(e.type))}function Mg(e,t){var a=I.p;try{return I.p=e,t()}finally{I.p=a}}var Aa=Math.random().toString(36).slice(2),dt="__reactFiber$"+Aa,xt="__reactProps$"+Aa,An="__reactContainer$"+Aa,po="__reactEvents$"+Aa,Og="__reactListeners$"+Aa,Dg="__reactHandles$"+Aa,Du="__reactResources$"+Aa,vi="__reactMarker$"+Aa;function go(e){delete e[dt],delete e[xt],delete e[po],delete e[Og],delete e[Dg]}function En(e){var t=e[dt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[An]||a[dt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=J0(e);e!==null;){if(a=e[dt])return a;e=J0(e)}return t}e=a,a=e.parentNode}return null}function Nn(e){if(e=e[dt]||e[An]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function Tn(e){var t=e[Du];return t||(t=e[Du]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function it(e){e[vi]=!0}var Bu=new Set,Lu={};function nn(e,t){zn(e,t),zn(e+"Capture",t)}function zn(e,t){for(Lu[e]=t,e=0;e<t.length;e++)Bu.add(t[e])}var Bg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yu={},Uu={};function Lg(e){return Ke.call(Uu,e)?!0:Ke.call(Yu,e)?!1:Bg.test(e)?Uu[e]=!0:(Yu[e]=!0,!1)}function Mr(e,t,a){if(Lg(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Or(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var ho,_u;function kn(e){if(ho===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ho=t&&t[1]||"",_u=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ho+e+_u}var xo=!1;function bo(e,t){if(!e||xo)return"";xo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(U){var O=U}Reflect.construct(e,[],F)}else{try{F.call()}catch(U){O=U}e.call(F.prototype)}}else{try{throw Error()}catch(U){O=U}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(U){if(U&&O&&typeof U.stack=="string")return[U.stack,O.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=n.DetermineComponentFrameRoot(),m=o[0],h=o[1];if(m&&h){var w=m.split(`
`),R=h.split(`
`);for(l=n=0;n<w.length&&!w[n].includes("DetermineComponentFrameRoot");)n++;for(;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;if(n===w.length||l===R.length)for(n=w.length-1,l=R.length-1;1<=n&&0<=l&&w[n]!==R[l];)l--;for(;1<=n&&0<=l;n--,l--)if(w[n]!==R[l]){if(n!==1||l!==1)do if(n--,l--,0>l||w[n]!==R[l]){var H=`
`+w[n].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=n&&0<=l);break}}}finally{xo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?kn(a):""}function Yg(e){switch(e.tag){case 26:case 27:case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 15:return bo(e.type,!1);case 11:return bo(e.type.render,!1);case 1:return bo(e.type,!0);case 31:return kn("Activity");default:return""}}function Hu(e){try{var t="";do t+=Yg(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ug(e){var t=qu(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,o=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(m){n=""+m,o.call(this,m)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(m){n=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Ug(e))}function Xu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=qu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _g=/[\n"\\]/g;function Dt(e){return e.replace(_g,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yo(e,t,a,n,l,o,m,h){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ot(t)):e.value!==""+Ot(t)&&(e.value=""+Ot(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?vo(e,m,Ot(t)):a!=null?vo(e,m,Ot(a)):n!=null&&e.removeAttribute("value"),l==null&&o!=null&&(e.defaultChecked=!!o),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Ot(h):e.removeAttribute("name")}function Vu(e,t,a,n,l,o,m,h){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.type=o),t!=null||a!=null){if(!(o!=="submit"&&o!=="reset"||t!=null))return;a=a!=null?""+Ot(a):"",t=t!=null?""+Ot(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m)}function vo(e,t,a){t==="number"&&Br(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Rn(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Ot(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Iu(e,t,a){if(t!=null&&(t=""+Ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Ot(a):""}function Gu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(c(92));if(re(n)){if(1<n.length)throw Error(c(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Ot(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function Mn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Hg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Hg.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Fu(e,t,a){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Qu(e,l,n)}else for(var o in t)t.hasOwnProperty(o)&&Qu(e,o,t[o])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Lr(e){return Xg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var So=null;function jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var On=null,Dn=null;function Wu(e){var t=Nn(e);if(t&&(e=t.stateNode)){var a=e[xt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[xt]||null;if(!l)throw Error(c(90));yo(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Xu(n)}break e;case"textarea":Iu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Rn(e,!!a.multiple,t,!1)}}}var Co=!1;function Pu(e,t,a){if(Co)return e(t,a);Co=!0;try{var n=e(t);return n}finally{if(Co=!1,(On!==null||Dn!==null)&&(wl(),On&&(t=On,e=Dn,Dn=On=null,Wu(t),e)))for(t=0;t<e.length;t++)Wu(e[t])}}function Si(e,t){var a=e.stateNode;if(a===null)return null;var n=a[xt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(c(231,t,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ao=!1;if(ia)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){Ao=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{Ao=!1}var Ea=null,Eo=null,Yr=null;function Zu(){if(Yr)return Yr;var e,t=Eo,a=t.length,n,l="value"in Ea?Ea.value:Ea.textContent,o=l.length;for(e=0;e<a&&t[e]===l[e];e++);var m=a-e;for(n=1;n<=m&&t[a-n]===l[o-n];n++);return Yr=l.slice(e,1<n?1-n:void 0)}function Ur(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _r(){return!0}function Ku(){return!1}function bt(e){function t(a,n,l,o,m){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=o,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(o):o[h]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_r:Ku,this.isPropagationStopped=Ku,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_r)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_r)},persist:function(){},isPersistent:_r}),t}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hr=bt(rn),Ci=y({},rn,{view:0,detail:0}),Vg=bt(Ci),No,To,Ai,qr=y({},Ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ko,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ai&&(Ai&&e.type==="mousemove"?(No=e.screenX-Ai.screenX,To=e.screenY-Ai.screenY):To=No=0,Ai=e),No)},movementY:function(e){return"movementY"in e?e.movementY:To}}),Ju=bt(qr),Ig=y({},qr,{dataTransfer:0}),Gg=bt(Ig),Qg=y({},Ci,{relatedTarget:0}),zo=bt(Qg),Fg=y({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wg=bt(Fg),Pg=y({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zg=bt(Pg),Kg=y({},rn,{data:0}),$u=bt(Kg),Jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function th(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=eh[e])?!!t[e]:!1}function ko(){return th}var ah=y({},Ci,{key:function(e){if(e.key){var t=Jg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ur(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ko,charCode:function(e){return e.type==="keypress"?Ur(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ur(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nh=bt(ah),ih=y({},qr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=bt(ih),rh=y({},Ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ko}),lh=bt(rh),oh=y({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),sh=bt(oh),ch=y({},qr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uh=bt(ch),dh=y({},rn,{newState:0,oldState:0}),fh=bt(dh),mh=[9,13,27,32],Ro=ia&&"CompositionEvent"in window,Ei=null;ia&&"documentMode"in document&&(Ei=document.documentMode);var ph=ia&&"TextEvent"in window&&!Ei,td=ia&&(!Ro||Ei&&8<Ei&&11>=Ei),ad=" ",nd=!1;function id(e,t){switch(e){case"keyup":return mh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function gh(e,t){switch(e){case"compositionend":return rd(t);case"keypress":return t.which!==32?null:(nd=!0,ad);case"textInput":return e=t.data,e===ad&&nd?null:e;default:return null}}function hh(e,t){if(Bn)return e==="compositionend"||!Ro&&id(e,t)?(e=Zu(),Yr=Eo=Ea=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return td&&t.locale!=="ko"?null:t.data;default:return null}}var xh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xh[e.type]:t==="textarea"}function od(e,t,a,n){On?Dn?Dn.push(n):Dn=[n]:On=n,t=Nl(t,"onChange"),0<t.length&&(a=new Hr("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Ni=null,Ti=null;function bh(e){X0(e,0)}function Xr(e){var t=wi(e);if(Xu(t))return e}function sd(e,t){if(e==="change")return t}var cd=!1;if(ia){var Mo;if(ia){var Oo="oninput"in document;if(!Oo){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),Oo=typeof ud.oninput=="function"}Mo=Oo}else Mo=!1;cd=Mo&&(!document.documentMode||9<document.documentMode)}function dd(){Ni&&(Ni.detachEvent("onpropertychange",fd),Ti=Ni=null)}function fd(e){if(e.propertyName==="value"&&Xr(Ti)){var t=[];od(t,Ti,e,jo(e)),Pu(bh,t)}}function yh(e,t,a){e==="focusin"?(dd(),Ni=t,Ti=a,Ni.attachEvent("onpropertychange",fd)):e==="focusout"&&dd()}function vh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(Ti)}function wh(e,t){if(e==="click")return Xr(t)}function Sh(e,t){if(e==="input"||e==="change")return Xr(t)}function jh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:jh;function zi(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!Ke.call(t,l)||!Ct(e[l],t[l]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pd(e,t){var a=md(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=md(a)}}function gd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Br(e.document)}return t}function Do(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ch=ia&&"documentMode"in document&&11>=document.documentMode,Ln=null,Bo=null,ki=null,Lo=!1;function xd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lo||Ln==null||Ln!==Br(n)||(n=Ln,"selectionStart"in n&&Do(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ki&&zi(ki,n)||(ki=n,n=Nl(Bo,"onSelect"),0<n.length&&(t=new Hr("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Ln)))}function ln(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Yn={animationend:ln("Animation","AnimationEnd"),animationiteration:ln("Animation","AnimationIteration"),animationstart:ln("Animation","AnimationStart"),transitionrun:ln("Transition","TransitionRun"),transitionstart:ln("Transition","TransitionStart"),transitioncancel:ln("Transition","TransitionCancel"),transitionend:ln("Transition","TransitionEnd")},Yo={},bd={};ia&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function on(e){if(Yo[e])return Yo[e];if(!Yn[e])return e;var t=Yn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in bd)return Yo[e]=t[a];return e}var yd=on("animationend"),vd=on("animationiteration"),wd=on("animationstart"),Ah=on("transitionrun"),Eh=on("transitionstart"),Nh=on("transitioncancel"),Sd=on("transitionend"),jd=new Map,Uo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uo.push("scrollEnd");function Xt(e,t){jd.set(e,t),nn(t,[e])}var Cd=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var a=Cd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Hu(t)},Cd.set(e,t),t)}return{value:e,source:t,stack:Hu(t)}}var Lt=[],Un=0,_o=0;function Vr(){for(var e=Un,t=_o=Un=0;t<e;){var a=Lt[t];Lt[t++]=null;var n=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var o=Lt[t];if(Lt[t++]=null,n!==null&&l!==null){var m=n.pending;m===null?l.next=l:(l.next=m.next,m.next=l),n.pending=l}o!==0&&Ad(a,l,o)}}function Ir(e,t,a,n){Lt[Un++]=e,Lt[Un++]=t,Lt[Un++]=a,Lt[Un++]=n,_o|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ho(e,t,a,n){return Ir(e,t,a,n),Gr(e)}function _n(e,t){return Ir(e,null,null,t),Gr(e)}function Ad(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,o=e.return;o!==null;)o.childLanes|=a,n=o.alternate,n!==null&&(n.childLanes|=a),o.tag===22&&(e=o.stateNode,e===null||e._visibility&1||(l=!0)),e=o,o=o.return;return e.tag===3?(o=e.stateNode,l&&t!==null&&(l=31-jt(a),e=o.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),o):null}function Gr(e){if(50<tr)throw tr=0,Qs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hn={};function Th(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,a,n){return new Th(e,t,a,n)}function qo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,t){var a=e.alternate;return a===null?(a=At(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ed(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Qr(e,t,a,n,l,o){var m=0;if(n=e,typeof e=="function")qo(e)&&(m=1);else if(typeof e=="string")m=k1(e,a,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case M:return e=At(31,a,t,l),e.elementType=M,e.lanes=o,e;case T:return sn(a.children,l,o,t);case Q:m=8,l|=24;break;case L:return e=At(12,a,t,l|2),e.elementType=L,e.lanes=o,e;case K:return e=At(13,a,t,l),e.elementType=K,e.lanes=o,e;case oe:return e=At(19,a,t,l),e.elementType=oe,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case W:m=10;break e;case C:m=9;break e;case te:m=11;break e;case Y:m=14;break e;case $:m=16,n=null;break e}m=29,a=Error(c(130,e===null?"null":typeof e,"")),n=null}return t=At(m,a,t,l),t.elementType=e,t.type=n,t.lanes=o,t}function sn(e,t,a,n){return e=At(7,e,n,t),e.lanes=a,e}function Xo(e,t,a){return e=At(6,e,null,t),e.lanes=a,e}function Vo(e,t,a){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qn=[],Xn=0,Fr=null,Wr=0,Yt=[],Ut=0,cn=null,la=1,oa="";function un(e,t){qn[Xn++]=Wr,qn[Xn++]=Fr,Fr=e,Wr=t}function Nd(e,t,a){Yt[Ut++]=la,Yt[Ut++]=oa,Yt[Ut++]=cn,cn=e;var n=la;e=oa;var l=32-jt(n)-1;n&=~(1<<l),a+=1;var o=32-jt(t)+l;if(30<o){var m=l-l%5;o=(n&(1<<m)-1).toString(32),n>>=m,l-=m,la=1<<32-jt(t)+l|a<<l|n,oa=o+e}else la=1<<o|a<<l|n,oa=e}function Io(e){e.return!==null&&(un(e,1),Nd(e,1,0))}function Go(e){for(;e===Fr;)Fr=qn[--Xn],qn[Xn]=null,Wr=qn[--Xn],qn[Xn]=null;for(;e===cn;)cn=Yt[--Ut],Yt[Ut]=null,oa=Yt[--Ut],Yt[Ut]=null,la=Yt[--Ut],Yt[Ut]=null}var gt=null,Fe=null,Oe=!1,dn=null,Qt=!1,Qo=Error(c(519));function fn(e){var t=Error(c(418,""));throw Oi(Bt(t,e)),Qo}function Td(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[dt]=e,t[xt]=n,a){case"dialog":Ee("cancel",t),Ee("close",t);break;case"iframe":case"object":case"embed":Ee("load",t);break;case"video":case"audio":for(a=0;a<nr.length;a++)Ee(nr[a],t);break;case"source":Ee("error",t);break;case"img":case"image":case"link":Ee("error",t),Ee("load",t);break;case"details":Ee("toggle",t);break;case"input":Ee("invalid",t),Vu(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Dr(t);break;case"select":Ee("invalid",t);break;case"textarea":Ee("invalid",t),Gu(t,n.value,n.defaultValue,n.children),Dr(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Q0(t.textContent,a)?(n.popover!=null&&(Ee("beforetoggle",t),Ee("toggle",t)),n.onScroll!=null&&Ee("scroll",t),n.onScrollEnd!=null&&Ee("scrollend",t),n.onClick!=null&&(t.onclick=Tl),t=!0):t=!1,t||fn(e)}function zd(e){for(gt=e.return;gt;)switch(gt.tag){case 5:case 13:Qt=!1;return;case 27:case 3:Qt=!0;return;default:gt=gt.return}}function Ri(e){if(e!==gt)return!1;if(!Oe)return zd(e),Oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sc(e.type,e.memoizedProps)),a=!a),a&&Fe&&fn(e),zd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Fe=It(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Fe=null}}else t===27?(t=Fe,Xa(e.type)?(e=fc,fc=null,Fe=e):Fe=t):Fe=gt?It(e.stateNode.nextSibling):null;return!0}function Mi(){Fe=gt=null,Oe=!1}function kd(){var e=dn;return e!==null&&(wt===null?wt=e:wt.push.apply(wt,e),dn=null),e}function Oi(e){dn===null?dn=[e]:dn.push(e)}var Fo=X(null),mn=null,sa=null;function Na(e,t,a){J(Fo,t._currentValue),t._currentValue=a}function ca(e){e._currentValue=Fo.current,G(Fo)}function Wo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Po(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var o=l.dependencies;if(o!==null){var m=l.child;o=o.firstContext;e:for(;o!==null;){var h=o;o=l;for(var w=0;w<t.length;w++)if(h.context===t[w]){o.lanes|=a,h=o.alternate,h!==null&&(h.lanes|=a),Wo(o.return,a,e),n||(m=null);break e}o=h.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(c(341));m.lanes|=a,o=m.alternate,o!==null&&(o.lanes|=a),Wo(m,a,e),m=null}else m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===e){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Di(e,t,a,n){e=null;for(var l=t,o=!1;l!==null;){if(!o){if((l.flags&524288)!==0)o=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(c(387));if(m=m.memoizedProps,m!==null){var h=l.type;Ct(l.pendingProps.value,m.value)||(e!==null?e.push(h):e=[h])}}else if(l===he.current){if(m=l.alternate,m===null)throw Error(c(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(cr):e=[cr])}l=l.return}e!==null&&Po(t,e,a,n),t.flags|=262144}function Pr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pn(e){mn=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ft(e){return Rd(mn,e)}function Zr(e,t){return mn===null&&pn(e),Rd(e,t)}function Rd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(c(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return a}var zh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},kh=r.unstable_scheduleCallback,Rh=r.unstable_NormalPriority,tt={$$typeof:W,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Zo(){return{controller:new zh,data:new Map,refCount:0}}function Bi(e){e.refCount--,e.refCount===0&&kh(Rh,function(){e.controller.abort()})}var Li=null,Ko=0,Vn=0,In=null;function Mh(e,t){if(Li===null){var a=Li=[];Ko=0,Vn=$s(),In={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ko++,t.then(Md,Md),t}function Md(){if(--Ko===0&&Li!==null){In!==null&&(In.status="fulfilled");var e=Li;Li=null,Vn=0,In=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Oh(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var Od=D.S;D.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mh(e,t),Od!==null&&Od(e,t)};var gn=X(null);function Jo(){var e=gn.current;return e!==null?e:He.pooledCache}function Kr(e,t){t===null?J(gn,gn.current):J(gn,t.pool)}function Dd(){var e=Jo();return e===null?null:{parent:tt._currentValue,pool:e}}var Yi=Error(c(460)),Bd=Error(c(474)),Jr=Error(c(542)),$o={then:function(){}};function Ld(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $r(){}function Yd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then($r,$r),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e;default:if(typeof t.status=="string")t.then($r,$r);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_d(e),e}throw Ui=t,Yi}}var Ui=null;function Ud(){if(Ui===null)throw Error(c(459));var e=Ui;return Ui=null,e}function _d(e){if(e===Yi||e===Jr)throw Error(c(483))}var Ta=!1;function es(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ts(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(De&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Gr(e),Ad(e,null,a),t}return Ir(e,n,t,a),Gr(e)}function _i(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Mu(e,a)}}function as(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};o===null?l=o=m:o=o.next=m,a=a.next}while(a!==null);o===null?l=o=t:o=o.next=t}else l=o=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var ns=!1;function Hi(){if(ns){var e=In;if(e!==null)throw e}}function qi(e,t,a,n){ns=!1;var l=e.updateQueue;Ta=!1;var o=l.firstBaseUpdate,m=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var w=h,R=w.next;w.next=null,m===null?o=R:m.next=R,m=w;var H=e.alternate;H!==null&&(H=H.updateQueue,h=H.lastBaseUpdate,h!==m&&(h===null?H.firstBaseUpdate=R:h.next=R,H.lastBaseUpdate=w))}if(o!==null){var F=l.baseState;m=0,H=R=w=null,h=o;do{var O=h.lane&-536870913,U=O!==h.lane;if(U?(ke&O)===O:(n&O)===O){O!==0&&O===Vn&&(ns=!0),H!==null&&(H=H.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var xe=e,pe=h;O=t;var Ue=a;switch(pe.tag){case 1:if(xe=pe.payload,typeof xe=="function"){F=xe.call(Ue,F,O);break e}F=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=pe.payload,O=typeof xe=="function"?xe.call(Ue,F,O):xe,O==null)break e;F=y({},F,O);break e;case 2:Ta=!0}}O=h.callback,O!==null&&(e.flags|=64,U&&(e.flags|=8192),U=l.callbacks,U===null?l.callbacks=[O]:U.push(O))}else U={lane:O,tag:h.tag,payload:h.payload,callback:h.callback,next:null},H===null?(R=H=U,w=F):H=H.next=U,m|=O;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;U=h,h=U.next,U.next=null,l.lastBaseUpdate=U,l.shared.pending=null}}while(!0);H===null&&(w=F),l.baseState=w,l.firstBaseUpdate=R,l.lastBaseUpdate=H,o===null&&(l.shared.lanes=0),Ua|=m,e.lanes=m,e.memoizedState=F}}function Hd(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function qd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hd(a[e],t)}var Gn=X(null),el=X(0);function Xd(e,t){e=ha,J(el,e),J(Gn,t),ha=e|t.baseLanes}function is(){J(el,ha),J(Gn,Gn.current)}function rs(){ha=el.current,G(Gn),G(el)}var Ra=0,je=null,Le=null,Je=null,tl=!1,Qn=!1,hn=!1,al=0,Xi=0,Fn=null,Dh=0;function Pe(){throw Error(c(321))}function ls(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function os(e,t,a,n,l,o){return Ra=o,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Ef:Nf,hn=!1,o=a(n,l),hn=!1,Qn&&(o=Id(t,a,n,l)),Vd(e),o}function Vd(e){D.H=sl;var t=Le!==null&&Le.next!==null;if(Ra=0,Je=Le=je=null,tl=!1,Xi=0,Fn=null,t)throw Error(c(300));e===null||rt||(e=e.dependencies,e!==null&&Pr(e)&&(rt=!0))}function Id(e,t,a,n){je=e;var l=0;do{if(Qn&&(Fn=null),Xi=0,Qn=!1,25<=l)throw Error(c(301));if(l+=1,Je=Le=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=qh,o=t(a,n)}while(Qn);return o}function Bh(){var e=D.H,t=e.useState()[0];return t=typeof t.then=="function"?Vi(t):t,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(je.flags|=1024),t}function ss(){var e=al!==0;return al=0,e}function cs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function us(e){if(tl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}tl=!1}Ra=0,Je=Le=je=null,Qn=!1,Xi=al=0,Fn=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?je.memoizedState=Je=e:Je=Je.next=e,Je}function $e(){if(Le===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Je===null?je.memoizedState:Je.next;if(t!==null)Je=t,Le=e;else{if(e===null)throw je.alternate===null?Error(c(467)):Error(c(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Je===null?je.memoizedState=Je=e:Je=Je.next=e}return Je}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vi(e){var t=Xi;return Xi+=1,Fn===null&&(Fn=[]),e=Yd(Fn,e,t),t=je,(Je===null?t.memoizedState:Je.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Ef:Nf),e}function nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Vi(e);if(e.$$typeof===W)return ft(e)}throw Error(c(438,String(e)))}function fs(e){var t=null,a=je.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=je.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ds(),je.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=fe;return t.index++,a}function ua(e,t){return typeof t=="function"?t(e):t}function il(e){var t=$e();return ms(t,Le,e)}function ms(e,t,a){var n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=a;var l=e.baseQueue,o=n.pending;if(o!==null){if(l!==null){var m=l.next;l.next=o.next,o.next=m}t.baseQueue=l=o,n.pending=null}if(o=e.baseState,l===null)e.memoizedState=o;else{t=l.next;var h=m=null,w=null,R=t,H=!1;do{var F=R.lane&-536870913;if(F!==R.lane?(ke&F)===F:(Ra&F)===F){var O=R.revertLane;if(O===0)w!==null&&(w=w.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),F===Vn&&(H=!0);else if((Ra&O)===O){R=R.next,O===Vn&&(H=!0);continue}else F={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(h=w=F,m=o):w=w.next=F,je.lanes|=O,Ua|=O;F=R.action,hn&&a(o,F),o=R.hasEagerState?R.eagerState:a(o,F)}else O={lane:F,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},w===null?(h=w=O,m=o):w=w.next=O,je.lanes|=F,Ua|=F;R=R.next}while(R!==null&&R!==t);if(w===null?m=o:w.next=h,!Ct(o,e.memoizedState)&&(rt=!0,H&&(a=In,a!==null)))throw a;e.memoizedState=o,e.baseState=m,e.baseQueue=w,n.lastRenderedState=o}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ps(e){var t=$e(),a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,o=t.memoizedState;if(l!==null){a.pending=null;var m=l=l.next;do o=e(o,m.action),m=m.next;while(m!==l);Ct(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),a.lastRenderedState=o}return[o,n]}function Gd(e,t,a){var n=je,l=$e(),o=Oe;if(o){if(a===void 0)throw Error(c(407));a=a()}else a=t();var m=!Ct((Le||l).memoizedState,a);m&&(l.memoizedState=a,rt=!0),l=l.queue;var h=Wd.bind(null,n,l,e);if(Ii(2048,8,h,[e]),l.getSnapshot!==t||m||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Wn(9,rl(),Fd.bind(null,n,l,a,t),null),He===null)throw Error(c(349));o||(Ra&124)!==0||Qd(n,t,a)}return a}function Qd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=je.updateQueue,t===null?(t=ds(),je.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Fd(e,t,a,n){t.value=a,t.getSnapshot=n,Pd(t)&&Zd(e)}function Wd(e,t,a){return a(function(){Pd(t)&&Zd(e)})}function Pd(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function Zd(e){var t=_n(e,2);t!==null&&kt(t,e,2)}function gs(e){var t=yt();if(typeof e=="function"){var a=e;if(e=a(),hn){Ca(!0);try{a()}finally{Ca(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:e},t}function Kd(e,t,a,n){return e.baseState=a,ms(e,Le,typeof n=="function"?n:ua)}function Lh(e,t,a,n,l){if(ol(e))throw Error(c(485));if(e=t.action,e!==null){var o={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){o.listeners.push(m)}};D.T!==null?a(!0):o.isTransition=!1,n(o),a=t.pending,a===null?(o.next=t.pending=o,Jd(t,o)):(o.next=a.next,t.pending=a.next=o)}}function Jd(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var o=D.T,m={};D.T=m;try{var h=a(l,n),w=D.S;w!==null&&w(m,h),$d(e,t,h)}catch(R){hs(e,t,R)}finally{D.T=o}}else try{o=a(l,n),$d(e,t,o)}catch(R){hs(e,t,R)}}function $d(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){ef(e,t,n)},function(n){return hs(e,t,n)}):ef(e,t,a)}function ef(e,t,a){t.status="fulfilled",t.value=a,tf(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Jd(e,a)))}function hs(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,tf(t),t=t.next;while(t!==n)}e.action=null}function tf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function af(e,t){return t}function nf(e,t){if(Oe){var a=He.formState;if(a!==null){e:{var n=je;if(Oe){if(Fe){t:{for(var l=Fe,o=Qt;l.nodeType!==8;){if(!o){l=null;break t}if(l=It(l.nextSibling),l===null){l=null;break t}}o=l.data,l=o==="F!"||o==="F"?l:null}if(l){Fe=It(l.nextSibling),n=l.data==="F!";break e}}fn(n)}n=!1}n&&(t=a[0])}}return a=yt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:af,lastRenderedState:t},a.queue=n,a=jf.bind(null,je,n),n.dispatch=a,n=gs(!1),o=ws.bind(null,je,!1,n.queue),n=yt(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=Lh.bind(null,je,l,o,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function rf(e){var t=$e();return lf(t,Le,e)}function lf(e,t,a){if(t=ms(e,t,af)[0],e=il(ua)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Vi(t)}catch(m){throw m===Yi?Jr:m}else n=t;t=$e();var l=t.queue,o=l.dispatch;return a!==t.memoizedState&&(je.flags|=2048,Wn(9,rl(),Yh.bind(null,l,a),null)),[n,o,e]}function Yh(e,t){e.action=t}function of(e){var t=$e(),a=Le;if(a!==null)return lf(t,a,e);$e(),t=t.memoizedState,a=$e();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Wn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=je.updateQueue,t===null&&(t=ds(),je.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function rl(){return{destroy:void 0,resource:void 0}}function sf(){return $e().memoizedState}function ll(e,t,a,n){var l=yt();n=n===void 0?null:n,je.flags|=e,l.memoizedState=Wn(1|t,rl(),a,n)}function Ii(e,t,a,n){var l=$e();n=n===void 0?null:n;var o=l.memoizedState.inst;Le!==null&&n!==null&&ls(n,Le.memoizedState.deps)?l.memoizedState=Wn(t,o,a,n):(je.flags|=e,l.memoizedState=Wn(1|t,o,a,n))}function cf(e,t){ll(8390656,8,e,t)}function uf(e,t){Ii(2048,8,e,t)}function df(e,t){return Ii(4,2,e,t)}function ff(e,t){return Ii(4,4,e,t)}function mf(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pf(e,t,a){a=a!=null?a.concat([e]):null,Ii(4,4,mf.bind(null,t,e),a)}function xs(){}function gf(e,t){var a=$e();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ls(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function hf(e,t){var a=$e();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ls(t,n[1]))return n[0];if(n=e(),hn){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[n,t],n}function bs(e,t,a){return a===void 0||(Ra&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=y0(),je.lanes|=e,Ua|=e,a)}function xf(e,t,a,n){return Ct(a,t)?a:Gn.current!==null?(e=bs(e,a,n),Ct(e,t)||(rt=!0),e):(Ra&42)===0?(rt=!0,e.memoizedState=a):(e=y0(),je.lanes|=e,Ua|=e,t)}function bf(e,t,a,n,l){var o=I.p;I.p=o!==0&&8>o?o:8;var m=D.T,h={};D.T=h,ws(e,!1,t,a);try{var w=l(),R=D.S;if(R!==null&&R(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var H=Oh(w,n);Gi(e,t,H,zt(e))}else Gi(e,t,n,zt(e))}catch(F){Gi(e,t,{then:function(){},status:"rejected",reason:F},zt())}finally{I.p=o,D.T=m}}function Uh(){}function ys(e,t,a,n){if(e.tag!==5)throw Error(c(476));var l=yf(e).queue;bf(e,l,t,ae,a===null?Uh:function(){return vf(e),a(n)})}function yf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ae},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vf(e){var t=yf(e).next.queue;Gi(e,t,{},zt())}function vs(){return ft(cr)}function wf(){return $e().memoizedState}function Sf(){return $e().memoizedState}function _h(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=zt();e=za(a);var n=ka(t,e,a);n!==null&&(kt(n,t,a),_i(n,t,a)),t={cache:Zo()},e.payload=t;return}t=t.return}}function Hh(e,t,a){var n=zt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ol(e)?Cf(t,a):(a=Ho(e,t,a,n),a!==null&&(kt(a,e,n),Af(a,t,n)))}function jf(e,t,a){var n=zt();Gi(e,t,a,n)}function Gi(e,t,a,n){var l={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ol(e))Cf(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var m=t.lastRenderedState,h=o(m,a);if(l.hasEagerState=!0,l.eagerState=h,Ct(h,m))return Ir(e,t,l,0),He===null&&Vr(),!1}catch{}finally{}if(a=Ho(e,t,l,n),a!==null)return kt(a,e,n),Af(a,t,n),!0}return!1}function ws(e,t,a,n){if(n={lane:2,revertLane:$s(),action:n,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(c(479))}else t=Ho(e,a,n,2),t!==null&&kt(t,e,2)}function ol(e){var t=e.alternate;return e===je||t!==null&&t===je}function Cf(e,t){Qn=tl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Af(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,Mu(e,a)}}var sl={readContext:ft,use:nl,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe},Ef={readContext:ft,use:nl,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:cf,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ll(4194308,4,mf.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ll(4194308,4,e,t)},useInsertionEffect:function(e,t){ll(4,2,e,t)},useMemo:function(e,t){var a=yt();t=t===void 0?null:t;var n=e();if(hn){Ca(!0);try{e()}finally{Ca(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=yt();if(a!==void 0){var l=a(t);if(hn){Ca(!0);try{a(t)}finally{Ca(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Hh.bind(null,je,e),[n.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,a=jf.bind(null,je,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:xs,useDeferredValue:function(e,t){var a=yt();return bs(a,e,t)},useTransition:function(){var e=gs(!1);return e=bf.bind(null,je,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=je,l=yt();if(Oe){if(a===void 0)throw Error(c(407));a=a()}else{if(a=t(),He===null)throw Error(c(349));(ke&124)!==0||Qd(n,t,a)}l.memoizedState=a;var o={value:a,getSnapshot:t};return l.queue=o,cf(Wd.bind(null,n,o,e),[e]),n.flags|=2048,Wn(9,rl(),Fd.bind(null,n,o,a,t),null),a},useId:function(){var e=yt(),t=He.identifierPrefix;if(Oe){var a=oa,n=la;a=(n&~(1<<32-jt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=al++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Dh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vs,useFormState:nf,useActionState:nf,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ws.bind(null,je,!0,a),a.dispatch=t,[e,t]},useMemoCache:fs,useCacheRefresh:function(){return yt().memoizedState=_h.bind(null,je)}},Nf={readContext:ft,use:nl,useCallback:gf,useContext:ft,useEffect:uf,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:hf,useReducer:il,useRef:sf,useState:function(){return il(ua)},useDebugValue:xs,useDeferredValue:function(e,t){var a=$e();return xf(a,Le.memoizedState,e,t)},useTransition:function(){var e=il(ua)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:Gd,useId:wf,useHostTransitionStatus:vs,useFormState:rf,useActionState:rf,useOptimistic:function(e,t){var a=$e();return Kd(a,Le,e,t)},useMemoCache:fs,useCacheRefresh:Sf},qh={readContext:ft,use:nl,useCallback:gf,useContext:ft,useEffect:uf,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:hf,useReducer:ps,useRef:sf,useState:function(){return ps(ua)},useDebugValue:xs,useDeferredValue:function(e,t){var a=$e();return Le===null?bs(a,e,t):xf(a,Le.memoizedState,e,t)},useTransition:function(){var e=ps(ua)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Vi(e),t]},useSyncExternalStore:Gd,useId:wf,useHostTransitionStatus:vs,useFormState:of,useActionState:of,useOptimistic:function(e,t){var a=$e();return Le!==null?Kd(a,Le,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:fs,useCacheRefresh:Sf},Pn=null,Qi=0;function cl(e){var t=Qi;return Qi+=1,Pn===null&&(Pn=[]),Yd(Pn,e,t)}function Fi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ul(e,t){throw t.$$typeof===N?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Tf(e){var t=e._init;return t(e._payload)}function zf(e){function t(E,A){if(e){var k=E.deletions;k===null?(E.deletions=[A],E.flags|=16):k.push(A)}}function a(E,A){if(!e)return null;for(;A!==null;)t(E,A),A=A.sibling;return null}function n(E){for(var A=new Map;E!==null;)E.key!==null?A.set(E.key,E):A.set(E.index,E),E=E.sibling;return A}function l(E,A){return E=ra(E,A),E.index=0,E.sibling=null,E}function o(E,A,k){return E.index=k,e?(k=E.alternate,k!==null?(k=k.index,k<A?(E.flags|=67108866,A):k):(E.flags|=67108866,A)):(E.flags|=1048576,A)}function m(E){return e&&E.alternate===null&&(E.flags|=67108866),E}function h(E,A,k,V){return A===null||A.tag!==6?(A=Xo(k,E.mode,V),A.return=E,A):(A=l(A,k),A.return=E,A)}function w(E,A,k,V){var le=k.type;return le===T?H(E,A,k.props.children,V,k.key):A!==null&&(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===$&&Tf(le)===A.type)?(A=l(A,k.props),Fi(A,k),A.return=E,A):(A=Qr(k.type,k.key,k.props,null,E.mode,V),Fi(A,k),A.return=E,A)}function R(E,A,k,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==k.containerInfo||A.stateNode.implementation!==k.implementation?(A=Vo(k,E.mode,V),A.return=E,A):(A=l(A,k.children||[]),A.return=E,A)}function H(E,A,k,V,le){return A===null||A.tag!==7?(A=sn(k,E.mode,V,le),A.return=E,A):(A=l(A,k),A.return=E,A)}function F(E,A,k){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Xo(""+A,E.mode,k),A.return=E,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case S:return k=Qr(A.type,A.key,A.props,null,E.mode,k),Fi(k,A),k.return=E,k;case z:return A=Vo(A,E.mode,k),A.return=E,A;case $:var V=A._init;return A=V(A._payload),F(E,A,k)}if(re(A)||ne(A))return A=sn(A,E.mode,k,null),A.return=E,A;if(typeof A.then=="function")return F(E,cl(A),k);if(A.$$typeof===W)return F(E,Zr(E,A),k);ul(E,A)}return null}function O(E,A,k,V){var le=A!==null?A.key:null;if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return le!==null?null:h(E,A,""+k,V);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return k.key===le?w(E,A,k,V):null;case z:return k.key===le?R(E,A,k,V):null;case $:return le=k._init,k=le(k._payload),O(E,A,k,V)}if(re(k)||ne(k))return le!==null?null:H(E,A,k,V,null);if(typeof k.then=="function")return O(E,A,cl(k),V);if(k.$$typeof===W)return O(E,A,Zr(E,k),V);ul(E,k)}return null}function U(E,A,k,V,le){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return E=E.get(k)||null,h(A,E,""+V,le);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return E=E.get(V.key===null?k:V.key)||null,w(A,E,V,le);case z:return E=E.get(V.key===null?k:V.key)||null,R(A,E,V,le);case $:var Ce=V._init;return V=Ce(V._payload),U(E,A,k,V,le)}if(re(V)||ne(V))return E=E.get(k)||null,H(A,E,V,le,null);if(typeof V.then=="function")return U(E,A,k,cl(V),le);if(V.$$typeof===W)return U(E,A,k,Zr(A,V),le);ul(A,V)}return null}function xe(E,A,k,V){for(var le=null,Ce=null,de=A,ge=A=0,ot=null;de!==null&&ge<k.length;ge++){de.index>ge?(ot=de,de=null):ot=de.sibling;var Re=O(E,de,k[ge],V);if(Re===null){de===null&&(de=ot);break}e&&de&&Re.alternate===null&&t(E,de),A=o(Re,A,ge),Ce===null?le=Re:Ce.sibling=Re,Ce=Re,de=ot}if(ge===k.length)return a(E,de),Oe&&un(E,ge),le;if(de===null){for(;ge<k.length;ge++)de=F(E,k[ge],V),de!==null&&(A=o(de,A,ge),Ce===null?le=de:Ce.sibling=de,Ce=de);return Oe&&un(E,ge),le}for(de=n(de);ge<k.length;ge++)ot=U(de,E,ge,k[ge],V),ot!==null&&(e&&ot.alternate!==null&&de.delete(ot.key===null?ge:ot.key),A=o(ot,A,ge),Ce===null?le=ot:Ce.sibling=ot,Ce=ot);return e&&de.forEach(function(Fa){return t(E,Fa)}),Oe&&un(E,ge),le}function pe(E,A,k,V){if(k==null)throw Error(c(151));for(var le=null,Ce=null,de=A,ge=A=0,ot=null,Re=k.next();de!==null&&!Re.done;ge++,Re=k.next()){de.index>ge?(ot=de,de=null):ot=de.sibling;var Fa=O(E,de,Re.value,V);if(Fa===null){de===null&&(de=ot);break}e&&de&&Fa.alternate===null&&t(E,de),A=o(Fa,A,ge),Ce===null?le=Fa:Ce.sibling=Fa,Ce=Fa,de=ot}if(Re.done)return a(E,de),Oe&&un(E,ge),le;if(de===null){for(;!Re.done;ge++,Re=k.next())Re=F(E,Re.value,V),Re!==null&&(A=o(Re,A,ge),Ce===null?le=Re:Ce.sibling=Re,Ce=Re);return Oe&&un(E,ge),le}for(de=n(de);!Re.done;ge++,Re=k.next())Re=U(de,E,ge,Re.value,V),Re!==null&&(e&&Re.alternate!==null&&de.delete(Re.key===null?ge:Re.key),A=o(Re,A,ge),Ce===null?le=Re:Ce.sibling=Re,Ce=Re);return e&&de.forEach(function(X1){return t(E,X1)}),Oe&&un(E,ge),le}function Ue(E,A,k,V){if(typeof k=="object"&&k!==null&&k.type===T&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case S:e:{for(var le=k.key;A!==null;){if(A.key===le){if(le=k.type,le===T){if(A.tag===7){a(E,A.sibling),V=l(A,k.props.children),V.return=E,E=V;break e}}else if(A.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===$&&Tf(le)===A.type){a(E,A.sibling),V=l(A,k.props),Fi(V,k),V.return=E,E=V;break e}a(E,A);break}else t(E,A);A=A.sibling}k.type===T?(V=sn(k.props.children,E.mode,V,k.key),V.return=E,E=V):(V=Qr(k.type,k.key,k.props,null,E.mode,V),Fi(V,k),V.return=E,E=V)}return m(E);case z:e:{for(le=k.key;A!==null;){if(A.key===le)if(A.tag===4&&A.stateNode.containerInfo===k.containerInfo&&A.stateNode.implementation===k.implementation){a(E,A.sibling),V=l(A,k.children||[]),V.return=E,E=V;break e}else{a(E,A);break}else t(E,A);A=A.sibling}V=Vo(k,E.mode,V),V.return=E,E=V}return m(E);case $:return le=k._init,k=le(k._payload),Ue(E,A,k,V)}if(re(k))return xe(E,A,k,V);if(ne(k)){if(le=ne(k),typeof le!="function")throw Error(c(150));return k=le.call(k),pe(E,A,k,V)}if(typeof k.then=="function")return Ue(E,A,cl(k),V);if(k.$$typeof===W)return Ue(E,A,Zr(E,k),V);ul(E,k)}return typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint"?(k=""+k,A!==null&&A.tag===6?(a(E,A.sibling),V=l(A,k),V.return=E,E=V):(a(E,A),V=Xo(k,E.mode,V),V.return=E,E=V),m(E)):a(E,A)}return function(E,A,k,V){try{Qi=0;var le=Ue(E,A,k,V);return Pn=null,le}catch(de){if(de===Yi||de===Jr)throw de;var Ce=At(29,de,null,E.mode);return Ce.lanes=V,Ce.return=E,Ce}finally{}}}var Zn=zf(!0),kf=zf(!1),_t=X(null),Ft=null;function Ma(e){var t=e.alternate;J(at,at.current&1),J(_t,e),Ft===null&&(t===null||Gn.current!==null||t.memoizedState!==null)&&(Ft=e)}function Rf(e){if(e.tag===22){if(J(at,at.current),J(_t,e),Ft===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Ft=e)}}else Oa()}function Oa(){J(at,at.current),J(_t,_t.current)}function da(e){G(_t),Ft===e&&(Ft=null),G(at)}var at=X(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||dc(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ss(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:y({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var js={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=zt(),l=za(n);l.payload=t,a!=null&&(l.callback=a),t=ka(e,l,n),t!==null&&(kt(t,e,n),_i(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=zt(),l=za(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=ka(e,l,n),t!==null&&(kt(t,e,n),_i(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=zt(),n=za(a);n.tag=2,t!=null&&(n.callback=t),t=ka(e,n,a),t!==null&&(kt(t,e,a),_i(t,e,a))}};function Mf(e,t,a,n,l,o,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,m):t.prototype&&t.prototype.isPureReactComponent?!zi(a,n)||!zi(l,o):!0}function Of(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&js.enqueueReplaceState(t,t.state,null)}function xn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=y({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Df(e){fl(e)}function Bf(e){console.error(e)}function Lf(e){fl(e)}function ml(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Yf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Cs(e,t,a){return a=za(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,t)},a}function Uf(e){return e=za(e),e.tag=3,e}function _f(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var o=n.value;e.payload=function(){return l(o)},e.callback=function(){Yf(t,a,n)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){Yf(t,a,n),typeof l!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function Xh(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Di(t,a,l,!0),a=_t.current,a!==null){switch(a.tag){case 13:return Ft===null?Ws():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===$o?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Zs(e,n,l)),!1;case 22:return a.flags|=65536,n===$o?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Zs(e,n,l)),!1}throw Error(c(435,a.tag))}return Zs(e,n,l),Ws(),!1}if(Oe)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Qo&&(e=Error(c(422),{cause:n}),Oi(Bt(e,a)))):(n!==Qo&&(t=Error(c(423),{cause:n}),Oi(Bt(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=Bt(n,a),l=Cs(e.stateNode,n,l),as(e,l),We!==4&&(We=2)),!1;var o=Error(c(520),{cause:n});if(o=Bt(o,a),er===null?er=[o]:er.push(o),We!==4&&(We=2),t===null)return!0;n=Bt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Cs(a.stateNode,n,e),as(a,e),!1;case 1:if(t=a.type,o=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(_a===null||!_a.has(o))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Uf(l),_f(l,e,a,n),as(a,l),!1}a=a.return}while(a!==null);return!1}var Hf=Error(c(461)),rt=!1;function st(e,t,a,n){t.child=e===null?kf(t,null,a,n):Zn(t,e.child,a,n)}function qf(e,t,a,n,l){a=a.render;var o=t.ref;if("ref"in n){var m={};for(var h in n)h!=="ref"&&(m[h]=n[h])}else m=n;return pn(t),n=os(e,t,a,m,o,l),h=ss(),e!==null&&!rt?(cs(e,t,l),fa(e,t,l)):(Oe&&h&&Io(t),t.flags|=1,st(e,t,n,l),t.child)}function Xf(e,t,a,n,l){if(e===null){var o=a.type;return typeof o=="function"&&!qo(o)&&o.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=o,Vf(e,t,o,n,l)):(e=Qr(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!Ms(e,l)){var m=o.memoizedProps;if(a=a.compare,a=a!==null?a:zi,a(m,n)&&e.ref===t.ref)return fa(e,t,l)}return t.flags|=1,e=ra(o,n),e.ref=t.ref,e.return=t,t.child=e}function Vf(e,t,a,n,l){if(e!==null){var o=e.memoizedProps;if(zi(o,n)&&e.ref===t.ref)if(rt=!1,t.pendingProps=n=o,Ms(e,l))(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,fa(e,t,l)}return As(e,t,a,n,l)}function If(e,t,a){var n=t.pendingProps,l=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=o!==null?o.baseLanes|a:a,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;t.childLanes=o&~n}else t.childLanes=0,t.child=null;return Gf(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Kr(t,o!==null?o.cachePool:null),o!==null?Xd(t,o):is(),Rf(t);else return t.lanes=t.childLanes=536870912,Gf(e,t,o!==null?o.baseLanes|a:a,a)}else o!==null?(Kr(t,o.cachePool),Xd(t,o),Oa(),t.memoizedState=null):(e!==null&&Kr(t,null),is(),Oa());return st(e,t,l,a),t.child}function Gf(e,t,a,n){var l=Jo();return l=l===null?null:{parent:tt._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Kr(t,null),is(),Rf(t),e!==null&&Di(e,t,n,!0),null}function pl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(c(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function As(e,t,a,n,l){return pn(t),a=os(e,t,a,n,void 0,l),n=ss(),e!==null&&!rt?(cs(e,t,l),fa(e,t,l)):(Oe&&n&&Io(t),t.flags|=1,st(e,t,a,l),t.child)}function Qf(e,t,a,n,l,o){return pn(t),t.updateQueue=null,a=Id(t,n,a,l),Vd(e),n=ss(),e!==null&&!rt?(cs(e,t,o),fa(e,t,o)):(Oe&&n&&Io(t),t.flags|=1,st(e,t,a,o),t.child)}function Ff(e,t,a,n,l){if(pn(t),t.stateNode===null){var o=Hn,m=a.contextType;typeof m=="object"&&m!==null&&(o=ft(m)),o=new a(n,o),t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=js,t.stateNode=o,o._reactInternals=t,o=t.stateNode,o.props=n,o.state=t.memoizedState,o.refs={},es(t),m=a.contextType,o.context=typeof m=="object"&&m!==null?ft(m):Hn,o.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(Ss(t,a,m,n),o.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(m=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),m!==o.state&&js.enqueueReplaceState(o,o.state,null),qi(t,n,o,l),Hi(),o.state=t.memoizedState),typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){o=t.stateNode;var h=t.memoizedProps,w=xn(a,h);o.props=w;var R=o.context,H=a.contextType;m=Hn,typeof H=="object"&&H!==null&&(m=ft(H));var F=a.getDerivedStateFromProps;H=typeof F=="function"||typeof o.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,H||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(h||R!==m)&&Of(t,o,n,m),Ta=!1;var O=t.memoizedState;o.state=O,qi(t,n,o,l),Hi(),R=t.memoizedState,h||O!==R||Ta?(typeof F=="function"&&(Ss(t,a,F,n),R=t.memoizedState),(w=Ta||Mf(t,a,w,n,O,R,m))?(H||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=R),o.props=n,o.state=R,o.context=m,n=w):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{o=t.stateNode,ts(e,t),m=t.memoizedProps,H=xn(a,m),o.props=H,F=t.pendingProps,O=o.context,R=a.contextType,w=Hn,typeof R=="object"&&R!==null&&(w=ft(R)),h=a.getDerivedStateFromProps,(R=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(m!==F||O!==w)&&Of(t,o,n,w),Ta=!1,O=t.memoizedState,o.state=O,qi(t,n,o,l),Hi();var U=t.memoizedState;m!==F||O!==U||Ta||e!==null&&e.dependencies!==null&&Pr(e.dependencies)?(typeof h=="function"&&(Ss(t,a,h,n),U=t.memoizedState),(H=Ta||Mf(t,a,H,n,O,U,w)||e!==null&&e.dependencies!==null&&Pr(e.dependencies))?(R||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,U,w),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,U,w)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=U),o.props=n,o.state=U,o.context=w,n=H):(typeof o.componentDidUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),n=!1)}return o=n,pl(e,t),n=(t.flags&128)!==0,o||n?(o=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:o.render(),t.flags|=1,e!==null&&n?(t.child=Zn(t,e.child,null,l),t.child=Zn(t,null,a,l)):st(e,t,a,l),t.memoizedState=o.state,e=t.child):e=fa(e,t,l),e}function Wf(e,t,a,n){return Mi(),t.flags|=256,st(e,t,a,n),t.child}var Es={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ns(e){return{baseLanes:e,cachePool:Dd()}}function Ts(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ht),e}function Pf(e,t,a){var n=t.pendingProps,l=!1,o=(t.flags&128)!==0,m;if((m=o)||(m=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),m&&(l=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(Oe){if(l?Ma(t):Oa(),Oe){var h=Fe,w;if(w=h){e:{for(w=h,h=Qt;w.nodeType!==8;){if(!h){h=null;break e}if(w=It(w.nextSibling),w===null){h=null;break e}}h=w}h!==null?(t.memoizedState={dehydrated:h,treeContext:cn!==null?{id:la,overflow:oa}:null,retryLane:536870912,hydrationErrors:null},w=At(18,null,null,0),w.stateNode=h,w.return=t,t.child=w,gt=t,Fe=null,w=!0):w=!1}w||fn(t)}if(h=t.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return dc(h)?t.lanes=32:t.lanes=536870912,null;da(t)}return h=n.children,n=n.fallback,l?(Oa(),l=t.mode,h=gl({mode:"hidden",children:h},l),n=sn(n,l,a,null),h.return=t,n.return=t,h.sibling=n,t.child=h,l=t.child,l.memoizedState=Ns(a),l.childLanes=Ts(e,m,a),t.memoizedState=Es,n):(Ma(t),zs(t,h))}if(w=e.memoizedState,w!==null&&(h=w.dehydrated,h!==null)){if(o)t.flags&256?(Ma(t),t.flags&=-257,t=ks(e,t,a)):t.memoizedState!==null?(Oa(),t.child=e.child,t.flags|=128,t=null):(Oa(),l=n.fallback,h=t.mode,n=gl({mode:"visible",children:n.children},h),l=sn(l,h,a,null),l.flags|=2,n.return=t,l.return=t,n.sibling=l,t.child=n,Zn(t,e.child,null,a),n=t.child,n.memoizedState=Ns(a),n.childLanes=Ts(e,m,a),t.memoizedState=Es,t=l);else if(Ma(t),dc(h)){if(m=h.nextSibling&&h.nextSibling.dataset,m)var R=m.dgst;m=R,n=Error(c(419)),n.stack="",n.digest=m,Oi({value:n,source:null,stack:null}),t=ks(e,t,a)}else if(rt||Di(e,t,a,!1),m=(a&e.childLanes)!==0,rt||m){if(m=He,m!==null&&(n=a&-a,n=(n&42)!==0?1:fo(n),n=(n&(m.suspendedLanes|a))!==0?0:n,n!==0&&n!==w.retryLane))throw w.retryLane=n,_n(e,n),kt(m,e,n),Hf;h.data==="$?"||Ws(),t=ks(e,t,a)}else h.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Fe=It(h.nextSibling),gt=t,Oe=!0,dn=null,Qt=!1,e!==null&&(Yt[Ut++]=la,Yt[Ut++]=oa,Yt[Ut++]=cn,la=e.id,oa=e.overflow,cn=t),t=zs(t,n.children),t.flags|=4096);return t}return l?(Oa(),l=n.fallback,h=t.mode,w=e.child,R=w.sibling,n=ra(w,{mode:"hidden",children:n.children}),n.subtreeFlags=w.subtreeFlags&65011712,R!==null?l=ra(R,l):(l=sn(l,h,a,null),l.flags|=2),l.return=t,n.return=t,n.sibling=l,t.child=n,n=l,l=t.child,h=e.child.memoizedState,h===null?h=Ns(a):(w=h.cachePool,w!==null?(R=tt._currentValue,w=w.parent!==R?{parent:R,pool:R}:w):w=Dd(),h={baseLanes:h.baseLanes|a,cachePool:w}),l.memoizedState=h,l.childLanes=Ts(e,m,a),t.memoizedState=Es,n):(Ma(t),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function zs(e,t){return t=gl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gl(e,t){return e=At(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ks(e,t,a){return Zn(t,e.child,null,a),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Wo(e.return,t,a)}function Rs(e,t,a,n,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=l)}function Kf(e,t,a){var n=t.pendingProps,l=n.revealOrder,o=n.tail;if(st(e,t,n.children,a),n=at.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zf(e,a,t);else if(e.tag===19)Zf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(J(at,n),l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Rs(t,!1,l,a,o);break;case"backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&dl(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Rs(t,!0,a,null,o);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Di(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,a=ra(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ms(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Pr(e)))}function Vh(e,t,a){switch(t.tag){case 3:se(t,t.stateNode.containerInfo),Na(t,tt,e.memoizedState.cache),Mi();break;case 27:case 5:Xe(t);break;case 4:se(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Ma(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Pf(e,t,a):(Ma(t),e=fa(e,t,a),e!==null?e.sibling:null);Ma(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Di(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Kf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(at,at.current),n)break;return null;case 22:case 23:return t.lanes=0,If(e,t,a);case 24:Na(t,tt,e.memoizedState.cache)}return fa(e,t,a)}function Jf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)rt=!0;else{if(!Ms(e,a)&&(t.flags&128)===0)return rt=!1,Vh(e,t,a);rt=(e.flags&131072)!==0}else rt=!1,Oe&&(t.flags&1048576)!==0&&Nd(t,Wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,l=n._init;if(n=l(n._payload),t.type=n,typeof n=="function")qo(n)?(e=xn(n,e),t.tag=1,t=Ff(null,t,n,e,a)):(t.tag=0,t=As(null,t,n,e,a));else{if(n!=null){if(l=n.$$typeof,l===te){t.tag=11,t=qf(null,t,n,e,a);break e}else if(l===Y){t.tag=14,t=Xf(null,t,n,e,a);break e}}throw t=ee(n)||n,Error(c(306,t,""))}}return t;case 0:return As(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=xn(n,t.pendingProps),Ff(e,t,n,l,a);case 3:e:{if(se(t,t.stateNode.containerInfo),e===null)throw Error(c(387));n=t.pendingProps;var o=t.memoizedState;l=o.element,ts(e,t),qi(t,n,null,a);var m=t.memoizedState;if(n=m.cache,Na(t,tt,n),n!==o.cache&&Po(t,[tt],a,!0),Hi(),n=m.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Wf(e,t,n,a);break e}else if(n!==l){l=Bt(Error(c(424)),t),Oi(l),t=Wf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Fe=It(e.firstChild),gt=t,Oe=!0,dn=null,Qt=!0,a=kf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Mi(),n===l){t=fa(e,t,a);break e}st(e,t,n,a)}t=t.child}return t;case 26:return pl(e,t),e===null?(a=am(t.type,null,t.pendingProps,null))?t.memoizedState=a:Oe||(a=t.type,e=t.pendingProps,n=zl(B.current).createElement(a),n[dt]=t,n[xt]=e,ut(n,a,e),it(n),t.stateNode=n):t.memoizedState=am(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Xe(t),e===null&&Oe&&(n=t.stateNode=$0(t.type,t.pendingProps,B.current),gt=t,Qt=!0,l=Fe,Xa(t.type)?(fc=l,Fe=It(n.firstChild)):Fe=l),st(e,t,t.pendingProps.children,a),pl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Oe&&((l=n=Fe)&&(n=x1(n,t.type,t.pendingProps,Qt),n!==null?(t.stateNode=n,gt=t,Fe=It(n.firstChild),Qt=!1,l=!0):l=!1),l||fn(t)),Xe(t),l=t.type,o=t.pendingProps,m=e!==null?e.memoizedProps:null,n=o.children,sc(l,o)?n=null:m!==null&&sc(l,m)&&(t.flags|=32),t.memoizedState!==null&&(l=os(e,t,Bh,null,null,a),cr._currentValue=l),pl(e,t),st(e,t,n,a),t.child;case 6:return e===null&&Oe&&((e=a=Fe)&&(a=b1(a,t.pendingProps,Qt),a!==null?(t.stateNode=a,gt=t,Fe=null,e=!0):e=!1),e||fn(t)),null;case 13:return Pf(e,t,a);case 4:return se(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Zn(t,null,n,a):st(e,t,n,a),t.child;case 11:return qf(e,t,t.type,t.pendingProps,a);case 7:return st(e,t,t.pendingProps,a),t.child;case 8:return st(e,t,t.pendingProps.children,a),t.child;case 12:return st(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Na(t,t.type,n.value),st(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,pn(t),l=ft(l),n=n(l),t.flags|=1,st(e,t,n,a),t.child;case 14:return Xf(e,t,t.type,t.pendingProps,a);case 15:return Vf(e,t,t.type,t.pendingProps,a);case 19:return Kf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=gl(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=ra(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return If(e,t,a);case 24:return pn(t),n=ft(tt),e===null?(l=Jo(),l===null&&(l=He,o=Zo(),l.pooledCache=o,o.refCount++,o!==null&&(l.pooledCacheLanes|=a),l=o),t.memoizedState={parent:n,cache:l},es(t),Na(t,tt,l)):((e.lanes&a)!==0&&(ts(e,t),qi(t,null,null,a),Hi()),l=e.memoizedState,o=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),Na(t,tt,n)):(n=o.cache,Na(t,tt,n),n!==l.cache&&Po(t,[tt],a,!0))),st(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function ma(e){e.flags|=4}function $f(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!om(t)){if(t=_t.current,t!==null&&((ke&4194048)===ke?Ft!==null:(ke&62914560)!==ke&&(ke&536870912)===0||t!==Ft))throw Ui=$o,Bd;e.flags|=8192}}function hl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ku():536870912,e.lanes|=t,ei|=t)}function Wi(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ih(e,t,a){var n=t.pendingProps;switch(Go(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(t),null;case 1:return Ge(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ca(tt),Te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?ma(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kd())),Ge(t),null;case 26:return a=t.memoizedState,e===null?(ma(t),a!==null?(Ge(t),$f(t,a)):(Ge(t),t.flags&=-16777217)):a?a!==e.memoizedState?(ma(t),Ge(t),$f(t,a)):(Ge(t),t.flags&=-16777217):(e.memoizedProps!==n&&ma(t),Ge(t),t.flags&=-16777217),null;case 27:Me(t),a=B.current;var l=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ma(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ge(t),null}e=ie.current,Ri(t)?Td(t):(e=$0(l,n,a),t.stateNode=e,ma(t))}return Ge(t),null;case 5:if(Me(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&ma(t);else{if(!n){if(t.stateNode===null)throw Error(c(166));return Ge(t),null}if(e=ie.current,Ri(t))Td(t);else{switch(l=zl(B.current),e){case 1:e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=l.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=l.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?l.createElement(a,{is:n.is}):l.createElement(a)}}e[dt]=t,e[xt]=n;e:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)e.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break e;for(;l.sibling===null;){if(l.return===null||l.return===t)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=e;e:switch(ut(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ma(t)}}return Ge(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&ma(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(c(166));if(e=B.current,Ri(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=gt,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[dt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Q0(e.nodeValue,a)),e||fn(t)}else e=zl(e).createTextNode(n),e[dt]=t,t.stateNode=e}return Ge(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=Ri(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[dt]=t}else Mi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ge(t),l=!1}else l=kd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(da(t),t):(da(t),null)}if(da(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool);var o=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),hl(t,t.updateQueue),Ge(t),null;case 4:return Te(),e===null&&nc(t.stateNode.containerInfo),Ge(t),null;case 10:return ca(t.type),Ge(t),null;case 19:if(G(at),l=t.memoizedState,l===null)return Ge(t),null;if(n=(t.flags&128)!==0,o=l.rendering,o===null)if(n)Wi(l,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=dl(e),o!==null){for(t.flags|=128,Wi(l,!1),e=o.updateQueue,t.updateQueue=e,hl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Ed(a,e),a=a.sibling;return J(at,at.current&1|2),t.child}e=e.sibling}l.tail!==null&&ce()>yl&&(t.flags|=128,n=!0,Wi(l,!1),t.lanes=4194304)}else{if(!n)if(e=dl(o),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,hl(t,e),Wi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Oe)return Ge(t),null}else 2*ce()-l.renderingStartTime>yl&&a!==536870912&&(t.flags|=128,n=!0,Wi(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(e=l.last,e!==null?e.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ce(),t.sibling=null,e=at.current,J(at,n?e&1|2:e&1),t):(Ge(t),null);case 22:case 23:return da(t),rs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ge(t),t.subtreeFlags&6&&(t.flags|=8192)):Ge(t),a=t.updateQueue,a!==null&&hl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&G(gn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ca(tt),Ge(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function Gh(e,t){switch(Go(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ca(tt),Te(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Me(t),null;case 13:if(da(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(at),null;case 4:return Te(),null;case 10:return ca(t.type),null;case 22:case 23:return da(t),rs(),e!==null&&G(gn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ca(tt),null;case 25:return null;default:return null}}function e0(e,t){switch(Go(t),t.tag){case 3:ca(tt),Te();break;case 26:case 27:case 5:Me(t);break;case 4:Te();break;case 13:da(t);break;case 19:G(at);break;case 10:ca(t.type);break;case 22:case 23:da(t),rs(),e!==null&&G(gn);break;case 24:ca(tt)}}function Pi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var o=a.create,m=a.inst;n=o(),m.destroy=n}a=a.next}while(a!==l)}}catch(h){_e(t,t.return,h)}}function Da(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){var m=n.inst,h=m.destroy;if(h!==void 0){m.destroy=void 0,l=t;var w=a,R=h;try{R()}catch(H){_e(l,w,H)}}}n=n.next}while(n!==o)}}catch(H){_e(t,t.return,H)}}function t0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{qd(t,a)}catch(n){_e(e,e.return,n)}}}function a0(e,t,a){a.props=xn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){_e(e,t,n)}}function Zi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){_e(e,t,l)}}function Wt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){_e(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){_e(e,t,l)}else a.current=null}function n0(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){_e(e,e.return,l)}}function Os(e,t,a){try{var n=e.stateNode;f1(n,e.type,a,t),n[xt]=t}catch(l){_e(e,e.return,l)}}function i0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xa(e.type)||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Tl));else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Bs(e,t,a),e=e.sibling;e!==null;)Bs(e,t,a),e=e.sibling}function xl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Xa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(xl(e,t,a),e=e.sibling;e!==null;)xl(e,t,a),e=e.sibling}function r0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);ut(t,n,a),t[dt]=e,t[xt]=a}catch(o){_e(e,e.return,o)}}var pa=!1,Ze=!1,Ls=!1,l0=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Qh(e,t){if(e=e.containerInfo,lc=Bl,e=hd(e),Do(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var m=0,h=-1,w=-1,R=0,H=0,F=e,O=null;t:for(;;){for(var U;F!==a||l!==0&&F.nodeType!==3||(h=m+l),F!==o||n!==0&&F.nodeType!==3||(w=m+n),F.nodeType===3&&(m+=F.nodeValue.length),(U=F.firstChild)!==null;)O=F,F=U;for(;;){if(F===e)break t;if(O===a&&++R===l&&(h=m),O===o&&++H===n&&(w=m),(U=F.nextSibling)!==null)break;F=O,O=F.parentNode}F=U}a=h===-1||w===-1?null:{start:h,end:w}}else a=null}a=a||{start:0,end:0}}else a=null;for(oc={focusedElem:e,selectionRange:a},Bl=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,o=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&o!==null){e=void 0,a=t,l=o.memoizedProps,o=o.memoizedState,n=a.stateNode;try{var xe=xn(a.type,l,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(xe,o),n.__reactInternalSnapshotBeforeUpdate=e}catch(pe){_e(a,a.return,pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)uc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":uc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function o0(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a),n&4&&Pi(5,a);break;case 1:if(Ba(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){_e(a,a.return,m)}else{var l=xn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){_e(a,a.return,m)}}n&64&&t0(a),n&512&&Zi(a,a.return);break;case 3:if(Ba(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{qd(e,t)}catch(m){_e(a,a.return,m)}}break;case 27:t===null&&n&4&&r0(a);case 26:case 5:Ba(e,a),t===null&&n&4&&n0(a),n&512&&Zi(a,a.return);break;case 12:Ba(e,a);break;case 13:Ba(e,a),n&4&&u0(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=t1.bind(null,a),y1(e,a))));break;case 22:if(n=a.memoizedState!==null||pa,!n){t=t!==null&&t.memoizedState!==null||Ze,l=pa;var o=Ze;pa=n,(Ze=t)&&!o?La(e,a,(a.subtreeFlags&8772)!==0):Ba(e,a),pa=l,Ze=o}break;case 30:break;default:Ba(e,a)}}function s0(e){var t=e.alternate;t!==null&&(e.alternate=null,s0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&go(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,vt=!1;function ga(e,t,a){for(a=a.child;a!==null;)c0(e,t,a),a=a.sibling}function c0(e,t,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(xi,a)}catch{}switch(a.tag){case 26:Ze||Wt(a,t),ga(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ze||Wt(a,t);var n=Ie,l=vt;Xa(a.type)&&(Ie=a.stateNode,vt=!1),ga(e,t,a),rr(a.stateNode),Ie=n,vt=l;break;case 5:Ze||Wt(a,t);case 6:if(n=Ie,l=vt,Ie=null,ga(e,t,a),Ie=n,vt=l,Ie!==null)if(vt)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(a.stateNode)}catch(o){_e(a,t,o)}else try{Ie.removeChild(a.stateNode)}catch(o){_e(a,t,o)}break;case 18:Ie!==null&&(vt?(e=Ie,K0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),mr(e)):K0(Ie,a.stateNode));break;case 4:n=Ie,l=vt,Ie=a.stateNode.containerInfo,vt=!0,ga(e,t,a),Ie=n,vt=l;break;case 0:case 11:case 14:case 15:Ze||Da(2,a,t),Ze||Da(4,a,t),ga(e,t,a);break;case 1:Ze||(Wt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&a0(a,t,n)),ga(e,t,a);break;case 21:ga(e,t,a);break;case 22:Ze=(n=Ze)||a.memoizedState!==null,ga(e,t,a),Ze=n;break;default:ga(e,t,a)}}function u0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mr(e)}catch(a){_e(t,t.return,a)}}function Fh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new l0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new l0),t;default:throw Error(c(435,e.tag))}}function Ys(e,t){var a=Fh(e);t.forEach(function(n){var l=a1.bind(null,e,n);a.has(n)||(a.add(n),n.then(l,l))})}function Et(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],o=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 27:if(Xa(h.type)){Ie=h.stateNode,vt=!1;break e}break;case 5:Ie=h.stateNode,vt=!1;break e;case 3:case 4:Ie=h.stateNode.containerInfo,vt=!0;break e}h=h.return}if(Ie===null)throw Error(c(160));c0(o,m,l),Ie=null,vt=!1,o=l.alternate,o!==null&&(o.return=null),l.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)d0(t,e),t=t.sibling}var Vt=null;function d0(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),Nt(e),n&4&&(Da(3,e,e.return),Pi(3,e),Da(5,e,e.return));break;case 1:Et(t,e),Nt(e),n&512&&(Ze||a===null||Wt(a,a.return)),n&64&&pa&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=Vt;if(Et(t,e),Nt(e),n&512&&(Ze||a===null||Wt(a,a.return)),n&4){var o=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":o=l.getElementsByTagName("title")[0],(!o||o[vi]||o[dt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=l.createElement(n),l.head.insertBefore(o,l.querySelector("head > title"))),ut(o,n,a),o[dt]=e,it(o),n=o;break e;case"link":var m=rm("link","href",l).get(n+(a.href||""));if(m){for(var h=0;h<m.length;h++)if(o=m[h],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(h,1);break t}}o=l.createElement(n),ut(o,n,a),l.head.appendChild(o);break;case"meta":if(m=rm("meta","content",l).get(n+(a.content||""))){for(h=0;h<m.length;h++)if(o=m[h],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(h,1);break t}}o=l.createElement(n),ut(o,n,a),l.head.appendChild(o);break;default:throw Error(c(468,n))}o[dt]=e,it(o),n=o}e.stateNode=n}else lm(l,e.type,e.stateNode);else e.stateNode=im(l,n,e.memoizedProps);else o!==n?(o===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):o.count--,n===null?lm(l,e.type,e.stateNode):im(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Os(e,e.memoizedProps,a.memoizedProps)}break;case 27:Et(t,e),Nt(e),n&512&&(Ze||a===null||Wt(a,a.return)),a!==null&&n&4&&Os(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Et(t,e),Nt(e),n&512&&(Ze||a===null||Wt(a,a.return)),e.flags&32){l=e.stateNode;try{Mn(l,"")}catch(U){_e(e,e.return,U)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Os(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Ls=!0);break;case 6:if(Et(t,e),Nt(e),n&4){if(e.stateNode===null)throw Error(c(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(U){_e(e,e.return,U)}}break;case 3:if(Ml=null,l=Vt,Vt=kl(t.containerInfo),Et(t,e),Vt=l,Nt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{mr(t.containerInfo)}catch(U){_e(e,e.return,U)}Ls&&(Ls=!1,f0(e));break;case 4:n=Vt,Vt=kl(e.stateNode.containerInfo),Et(t,e),Nt(e),Vt=n;break;case 12:Et(t,e),Nt(e);break;case 13:Et(t,e),Nt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vs=ce()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ys(e,n)));break;case 22:l=e.memoizedState!==null;var w=a!==null&&a.memoizedState!==null,R=pa,H=Ze;if(pa=R||l,Ze=H||w,Et(t,e),Ze=H,pa=R,Nt(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||w||pa||Ze||bn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){w=a=t;try{if(o=w.stateNode,l)m=o.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{h=w.stateNode;var F=w.memoizedProps.style,O=F!=null&&F.hasOwnProperty("display")?F.display:null;h.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(U){_e(w,w.return,U)}}}else if(t.tag===6){if(a===null){w=t;try{w.stateNode.nodeValue=l?"":w.memoizedProps}catch(U){_e(w,w.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ys(e,a))));break;case 19:Et(t,e),Nt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ys(e,n)));break;case 30:break;case 21:break;default:Et(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(i0(n)){a=n;break}n=n.return}if(a==null)throw Error(c(160));switch(a.tag){case 27:var l=a.stateNode,o=Ds(e);xl(e,o,l);break;case 5:var m=a.stateNode;a.flags&32&&(Mn(m,""),a.flags&=-33);var h=Ds(e);xl(e,h,m);break;case 3:case 4:var w=a.stateNode.containerInfo,R=Ds(e);Bs(e,R,w);break;default:throw Error(c(161))}}catch(H){_e(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;f0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ba(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)o0(e,t.alternate,t),t=t.sibling}function bn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Da(4,t,t.return),bn(t);break;case 1:Wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&a0(t,t.return,a),bn(t);break;case 27:rr(t.stateNode);case 26:case 5:Wt(t,t.return),bn(t);break;case 22:t.memoizedState===null&&bn(t);break;case 30:bn(t);break;default:bn(t)}e=e.sibling}}function La(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,o=t,m=o.flags;switch(o.tag){case 0:case 11:case 15:La(l,o,a),Pi(4,o);break;case 1:if(La(l,o,a),n=o,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(R){_e(n,n.return,R)}if(n=o,l=n.updateQueue,l!==null){var h=n.stateNode;try{var w=l.shared.hiddenCallbacks;if(w!==null)for(l.shared.hiddenCallbacks=null,l=0;l<w.length;l++)Hd(w[l],h)}catch(R){_e(n,n.return,R)}}a&&m&64&&t0(o),Zi(o,o.return);break;case 27:r0(o);case 26:case 5:La(l,o,a),a&&n===null&&m&4&&n0(o),Zi(o,o.return);break;case 12:La(l,o,a);break;case 13:La(l,o,a),a&&m&4&&u0(l,o);break;case 22:o.memoizedState===null&&La(l,o,a),Zi(o,o.return);break;case 30:break;default:La(l,o,a)}t=t.sibling}}function Us(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Bi(a))}function _s(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e))}function Pt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m0(e,t,a,n),t=t.sibling}function m0(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Pt(e,t,a,n),l&2048&&Pi(9,t);break;case 1:Pt(e,t,a,n);break;case 3:Pt(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Bi(e)));break;case 12:if(l&2048){Pt(e,t,a,n),e=t.stateNode;try{var o=t.memoizedProps,m=o.id,h=o.onPostCommit;typeof h=="function"&&h(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){_e(t,t.return,w)}}else Pt(e,t,a,n);break;case 13:Pt(e,t,a,n);break;case 23:break;case 22:o=t.stateNode,m=t.alternate,t.memoizedState!==null?o._visibility&2?Pt(e,t,a,n):Ki(e,t):o._visibility&2?Pt(e,t,a,n):(o._visibility|=2,Kn(e,t,a,n,(t.subtreeFlags&10256)!==0)),l&2048&&Us(m,t);break;case 24:Pt(e,t,a,n),l&2048&&_s(t.alternate,t);break;default:Pt(e,t,a,n)}}function Kn(e,t,a,n,l){for(l=l&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var o=e,m=t,h=a,w=n,R=m.flags;switch(m.tag){case 0:case 11:case 15:Kn(o,m,h,w,l),Pi(8,m);break;case 23:break;case 22:var H=m.stateNode;m.memoizedState!==null?H._visibility&2?Kn(o,m,h,w,l):Ki(o,m):(H._visibility|=2,Kn(o,m,h,w,l)),l&&R&2048&&Us(m.alternate,m);break;case 24:Kn(o,m,h,w,l),l&&R&2048&&_s(m.alternate,m);break;default:Kn(o,m,h,w,l)}t=t.sibling}}function Ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:Ki(a,n),l&2048&&Us(n.alternate,n);break;case 24:Ki(a,n),l&2048&&_s(n.alternate,n);break;default:Ki(a,n)}t=t.sibling}}var Ji=8192;function Jn(e){if(e.subtreeFlags&Ji)for(e=e.child;e!==null;)p0(e),e=e.sibling}function p0(e){switch(e.tag){case 26:Jn(e),e.flags&Ji&&e.memoizedState!==null&&M1(Vt,e.memoizedState,e.memoizedProps);break;case 5:Jn(e);break;case 3:case 4:var t=Vt;Vt=kl(e.stateNode.containerInfo),Jn(e),Vt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Ji,Ji=16777216,Jn(e),Ji=t):Jn(e));break;default:Jn(e)}}function g0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $i(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];lt=n,x0(n,e)}g0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)h0(e),e=e.sibling}function h0(e){switch(e.tag){case 0:case 11:case 15:$i(e),e.flags&2048&&Da(9,e,e.return);break;case 3:$i(e);break;case 12:$i(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,bl(e)):$i(e);break;default:$i(e)}}function bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];lt=n,x0(n,e)}g0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Da(8,t,t.return),bl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,bl(t));break;default:bl(t)}e=e.sibling}}function x0(e,t){for(;lt!==null;){var a=lt;switch(a.tag){case 0:case 11:case 15:Da(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Bi(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,lt=n;else e:for(a=e;lt!==null;){n=lt;var l=n.sibling,o=n.return;if(s0(n),n===a){lt=null;break e}if(l!==null){l.return=o,lt=l;break e}lt=o}}}var Wh={getCacheForType:function(e){var t=ft(tt),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Ph=typeof WeakMap=="function"?WeakMap:Map,De=0,He=null,Ae=null,ke=0,Be=0,Tt=null,Ya=!1,$n=!1,Hs=!1,ha=0,We=0,Ua=0,yn=0,qs=0,Ht=0,ei=0,er=null,wt=null,Xs=!1,Vs=0,yl=1/0,vl=null,_a=null,ct=0,Ha=null,ti=null,ai=0,Is=0,Gs=null,b0=null,tr=0,Qs=null;function zt(){if((De&2)!==0&&ke!==0)return ke&-ke;if(D.T!==null){var e=Vn;return e!==0?e:$s()}return Ou()}function y0(){Ht===0&&(Ht=(ke&536870912)===0||Oe?zu():536870912);var e=_t.current;return e!==null&&(e.flags|=32),Ht}function kt(e,t,a){(e===He&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(ni(e,0),qa(e,ke,Ht,!1)),yi(e,a),((De&2)===0||e!==He)&&(e===He&&((De&2)===0&&(yn|=a),We===4&&qa(e,ke,Ht,!1)),Zt(e))}function v0(e,t,a){if((De&6)!==0)throw Error(c(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||bi(e,t),l=n?Jh(e,t):Ps(e,t,!0),o=n;do{if(l===0){$n&&!n&&qa(e,t,0,!1);break}else{if(a=e.current.alternate,o&&!Zh(a)){l=Ps(e,t,!1),o=!1;continue}if(l===2){if(o=t,e.errorRecoveryDisabledLanes&o)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var h=e;l=er;var w=h.current.memoizedState.isDehydrated;if(w&&(ni(h,m).flags|=256),m=Ps(h,m,!1),m!==2){if(Hs&&!w){h.errorRecoveryDisabledLanes|=o,yn|=o,l=4;break e}o=wt,wt=l,o!==null&&(wt===null?wt=o:wt.push.apply(wt,o))}l=m}if(o=!1,l!==2)continue}}if(l===1){ni(e,0),qa(e,t,0,!0);break}e:{switch(n=e,o=l,o){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:qa(n,t,Ht,!Ya);break e;case 2:wt=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(l=Vs+300-ce(),10<l)){if(qa(n,t,Ht,!Ya),Rr(n,0,!0)!==0)break e;n.timeoutHandle=P0(w0.bind(null,n,a,wt,vl,Xs,t,Ht,yn,ei,Ya,o,2,-0,0),l);break e}w0(n,a,wt,vl,Xs,t,Ht,yn,ei,Ya,o,0,-0,0)}}break}while(!0);Zt(e)}function w0(e,t,a,n,l,o,m,h,w,R,H,F,O,U){if(e.timeoutHandle=-1,F=t.subtreeFlags,(F&8192||(F&16785408)===16785408)&&(sr={stylesheets:null,count:0,unsuspend:R1},p0(t),F=O1(),F!==null)){e.cancelPendingCommit=F(T0.bind(null,e,t,o,a,n,l,m,h,w,H,1,O,U)),qa(e,o,m,!R);return}T0(e,t,o,a,n,l,m,h,w)}function Zh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],o=l.getSnapshot;l=l.value;try{if(!Ct(o(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qa(e,t,a,n){t&=~qs,t&=~yn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var o=31-jt(l),m=1<<o;n[o]=-1,l&=~m}a!==0&&Ru(e,a,t)}function wl(){return(De&6)===0?(ar(0),!1):!0}function Fs(){if(Ae!==null){if(Be===0)var e=Ae.return;else e=Ae,sa=mn=null,us(e),Pn=null,Qi=0,e=Ae;for(;e!==null;)e0(e.alternate,e),e=e.return;Ae=null}}function ni(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,p1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Fs(),He=e,Ae=a=ra(e.current,null),ke=t,Be=0,Tt=null,Ya=!1,$n=bi(e,t),Hs=!1,ei=Ht=qs=yn=Ua=We=0,wt=er=null,Xs=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-jt(n),o=1<<l;t|=e[l],n&=~o}return ha=t,Vr(),a}function S0(e,t){je=null,D.H=sl,t===Yi||t===Jr?(t=Ud(),Be=3):t===Bd?(t=Ud(),Be=4):Be=t===Hf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,Ae===null&&(We=1,ml(e,Bt(t,e.current)))}function j0(){var e=D.H;return D.H=sl,e===null?sl:e}function C0(){var e=D.A;return D.A=Wh,e}function Ws(){We=4,Ya||(ke&4194048)!==ke&&_t.current!==null||($n=!0),(Ua&134217727)===0&&(yn&134217727)===0||He===null||qa(He,ke,Ht,!1)}function Ps(e,t,a){var n=De;De|=2;var l=j0(),o=C0();(He!==e||ke!==t)&&(vl=null,ni(e,t)),t=!1;var m=We;e:do try{if(Be!==0&&Ae!==null){var h=Ae,w=Tt;switch(Be){case 8:Fs(),m=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var R=Be;if(Be=0,Tt=null,ii(e,h,w,R),a&&$n){m=0;break e}break;default:R=Be,Be=0,Tt=null,ii(e,h,w,R)}}Kh(),m=We;break}catch(H){S0(e,H)}while(!0);return t&&e.shellSuspendCounter++,sa=mn=null,De=n,D.H=l,D.A=o,Ae===null&&(He=null,ke=0,Vr()),m}function Kh(){for(;Ae!==null;)A0(Ae)}function Jh(e,t){var a=De;De|=2;var n=j0(),l=C0();He!==e||ke!==t?(vl=null,yl=ce()+500,ni(e,t)):$n=bi(e,t);e:do try{if(Be!==0&&Ae!==null){t=Ae;var o=Tt;t:switch(Be){case 1:Be=0,Tt=null,ii(e,t,o,1);break;case 2:case 9:if(Ld(o)){Be=0,Tt=null,E0(t);break}t=function(){Be!==2&&Be!==9||He!==e||(Be=7),Zt(e)},o.then(t,t);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Ld(o)?(Be=0,Tt=null,E0(t)):(Be=0,Tt=null,ii(e,t,o,7));break;case 5:var m=null;switch(Ae.tag){case 26:m=Ae.memoizedState;case 5:case 27:var h=Ae;if(!m||om(m)){Be=0,Tt=null;var w=h.sibling;if(w!==null)Ae=w;else{var R=h.return;R!==null?(Ae=R,Sl(R)):Ae=null}break t}}Be=0,Tt=null,ii(e,t,o,5);break;case 6:Be=0,Tt=null,ii(e,t,o,6);break;case 8:Fs(),We=6;break e;default:throw Error(c(462))}}$h();break}catch(H){S0(e,H)}while(!0);return sa=mn=null,D.H=n,D.A=l,De=a,Ae!==null?0:(He=null,ke=0,Vr(),We)}function $h(){for(;Ae!==null&&!Z();)A0(Ae)}function A0(e){var t=Jf(e.alternate,e,ha);e.memoizedProps=e.pendingProps,t===null?Sl(e):Ae=t}function E0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Qf(a,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=Qf(a,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:us(t);default:e0(a,t),t=Ae=Ed(t,ha),t=Jf(a,t,ha)}e.memoizedProps=e.pendingProps,t===null?Sl(e):Ae=t}function ii(e,t,a,n){sa=mn=null,us(t),Pn=null,Qi=0;var l=t.return;try{if(Xh(e,l,t,a,ke)){We=1,ml(e,Bt(a,e.current)),Ae=null;return}}catch(o){if(l!==null)throw Ae=l,o;We=1,ml(e,Bt(a,e.current)),Ae=null;return}t.flags&32768?(Oe||n===1?e=!0:$n||(ke&536870912)!==0?e=!1:(Ya=e=!0,(n===2||n===9||n===3||n===6)&&(n=_t.current,n!==null&&n.tag===13&&(n.flags|=16384))),N0(t,e)):Sl(t)}function Sl(e){var t=e;do{if((t.flags&32768)!==0){N0(t,Ya);return}e=t.return;var a=Ih(t.alternate,t,ha);if(a!==null){Ae=a;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);We===0&&(We=5)}function N0(e,t){do{var a=Gh(e.alternate,e);if(a!==null){a.flags&=32767,Ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=a}while(e!==null);We=6,Ae=null}function T0(e,t,a,n,l,o,m,h,w){e.cancelPendingCommit=null;do jl();while(ct!==0);if((De&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(o=t.lanes|t.childLanes,o|=_o,Rg(e,a,o,m,h,w),e===He&&(Ae=He=null,ke=0),ti=t,Ha=e,ai=a,Is=o,Gs=l,b0=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,n1(ht,function(){return O0(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=D.T,D.T=null,l=I.p,I.p=2,m=De,De|=4;try{Qh(e,t,a)}finally{De=m,I.p=l,D.T=n}}ct=1,z0(),k0(),R0()}}function z0(){if(ct===1){ct=0;var e=Ha,t=ti,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var n=I.p;I.p=2;var l=De;De|=4;try{d0(t,e);var o=oc,m=hd(e.containerInfo),h=o.focusedElem,w=o.selectionRange;if(m!==h&&h&&h.ownerDocument&&gd(h.ownerDocument.documentElement,h)){if(w!==null&&Do(h)){var R=w.start,H=w.end;if(H===void 0&&(H=R),"selectionStart"in h)h.selectionStart=R,h.selectionEnd=Math.min(H,h.value.length);else{var F=h.ownerDocument||document,O=F&&F.defaultView||window;if(O.getSelection){var U=O.getSelection(),xe=h.textContent.length,pe=Math.min(w.start,xe),Ue=w.end===void 0?pe:Math.min(w.end,xe);!U.extend&&pe>Ue&&(m=Ue,Ue=pe,pe=m);var E=pd(h,pe),A=pd(h,Ue);if(E&&A&&(U.rangeCount!==1||U.anchorNode!==E.node||U.anchorOffset!==E.offset||U.focusNode!==A.node||U.focusOffset!==A.offset)){var k=F.createRange();k.setStart(E.node,E.offset),U.removeAllRanges(),pe>Ue?(U.addRange(k),U.extend(A.node,A.offset)):(k.setEnd(A.node,A.offset),U.addRange(k))}}}}for(F=[],U=h;U=U.parentNode;)U.nodeType===1&&F.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<F.length;h++){var V=F[h];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Bl=!!lc,oc=lc=null}finally{De=l,I.p=n,D.T=a}}e.current=t,ct=2}}function k0(){if(ct===2){ct=0;var e=Ha,t=ti,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var n=I.p;I.p=2;var l=De;De|=4;try{o0(e,t.alternate,t)}finally{De=l,I.p=n,D.T=a}}ct=3}}function R0(){if(ct===4||ct===3){ct=0,be();var e=Ha,t=ti,a=ai,n=b0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ct=5:(ct=0,ti=Ha=null,M0(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(_a=null),mo(a),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(xi,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=D.T,l=I.p,I.p=2,D.T=null;try{for(var o=e.onRecoverableError,m=0;m<n.length;m++){var h=n[m];o(h.value,{componentStack:h.stack})}}finally{D.T=t,I.p=l}}(ai&3)!==0&&jl(),Zt(e),l=e.pendingLanes,(a&4194090)!==0&&(l&42)!==0?e===Qs?tr++:(tr=0,Qs=e):tr=0,ar(0)}}function M0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Bi(t)))}function jl(e){return z0(),k0(),R0(),O0()}function O0(){if(ct!==5)return!1;var e=Ha,t=Is;Is=0;var a=mo(ai),n=D.T,l=I.p;try{I.p=32>a?32:a,D.T=null,a=Gs,Gs=null;var o=Ha,m=ai;if(ct=0,ti=Ha=null,ai=0,(De&6)!==0)throw Error(c(331));var h=De;if(De|=4,h0(o.current),m0(o,o.current,m,a),De=h,ar(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(xi,o)}catch{}return!0}finally{I.p=l,D.T=n,M0(e,t)}}function D0(e,t,a){t=Bt(a,t),t=Cs(e.stateNode,t,2),e=ka(e,t,2),e!==null&&(yi(e,2),Zt(e))}function _e(e,t,a){if(e.tag===3)D0(e,e,a);else for(;t!==null;){if(t.tag===3){D0(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_a===null||!_a.has(n))){e=Bt(a,e),a=Uf(2),n=ka(t,a,2),n!==null&&(_f(a,n,t,e),yi(n,2),Zt(n));break}}t=t.return}}function Zs(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Ph;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Hs=!0,l.add(a),e=e1.bind(null,e,t,a),t.then(e,e))}function e1(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(ke&a)===a&&(We===4||We===3&&(ke&62914560)===ke&&300>ce()-Vs?(De&2)===0&&ni(e,0):qs|=a,ei===ke&&(ei=0)),Zt(e)}function B0(e,t){t===0&&(t=ku()),e=_n(e,t),e!==null&&(yi(e,t),Zt(e))}function t1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),B0(e,a)}function a1(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(c(314))}n!==null&&n.delete(t),B0(e,a)}function n1(e,t){return nt(e,t)}var Cl=null,ri=null,Ks=!1,Al=!1,Js=!1,vn=0;function Zt(e){e!==ri&&e.next===null&&(ri===null?Cl=ri=e:ri=ri.next=e),Al=!0,Ks||(Ks=!0,r1())}function ar(e,t){if(!Js&&Al){Js=!0;do for(var a=!1,n=Cl;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var o=0;else{var m=n.suspendedLanes,h=n.pingedLanes;o=(1<<31-jt(42|e)+1)-1,o&=l&~(m&~h),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(a=!0,_0(n,o))}else o=ke,o=Rr(n,n===He?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(o&3)===0||bi(n,o)||(a=!0,_0(n,o));n=n.next}while(a);Js=!1}}function i1(){L0()}function L0(){Al=Ks=!1;var e=0;vn!==0&&(m1()&&(e=vn),vn=0);for(var t=ce(),a=null,n=Cl;n!==null;){var l=n.next,o=Y0(n,t);o===0?(n.next=null,a===null?Cl=l:a.next=l,l===null&&(ri=a)):(a=n,(e!==0||(o&3)!==0)&&(Al=!0)),n=l}ar(e)}function Y0(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes&-62914561;0<o;){var m=31-jt(o),h=1<<m,w=l[m];w===-1?((h&a)===0||(h&n)!==0)&&(l[m]=kg(h,t)):w<=t&&(e.expiredLanes|=h),o&=~h}if(t=He,a=ke,a=Rr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ve(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||bi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ve(n),mo(a)){case 2:case 8:a=et;break;case 32:a=ht;break;case 268435456:a=Mt;break;default:a=ht}return n=U0.bind(null,e),a=nt(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ve(n),e.callbackPriority=2,e.callbackNode=null,2}function U0(e,t){if(ct!==0&&ct!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var n=ke;return n=Rr(e,e===He?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(v0(e,n,t),Y0(e,ce()),e.callbackNode!=null&&e.callbackNode===a?U0.bind(null,e):null)}function _0(e,t){if(jl())return null;v0(e,t,!0)}function r1(){g1(function(){(De&6)!==0?nt(ze,i1):L0()})}function $s(){return vn===0&&(vn=zu()),vn}function H0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Lr(""+e)}function q0(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function l1(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var o=H0((l[xt]||null).action),m=n.submitter;m&&(t=(t=m[xt]||null)?H0(t.formAction):m.getAttribute("formAction"),t!==null&&(o=t,m=null));var h=new Hr("action","action",null,n,l);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(vn!==0){var w=m?q0(l,m):new FormData(l);ys(a,{pending:!0,data:w,method:l.method,action:o},null,w)}}else typeof o=="function"&&(h.preventDefault(),w=m?q0(l,m):new FormData(l),ys(a,{pending:!0,data:w,method:l.method,action:o},o,w))},currentTarget:l}]})}}for(var ec=0;ec<Uo.length;ec++){var tc=Uo[ec],o1=tc.toLowerCase(),s1=tc[0].toUpperCase()+tc.slice(1);Xt(o1,"on"+s1)}Xt(yd,"onAnimationEnd"),Xt(vd,"onAnimationIteration"),Xt(wd,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(Ah,"onTransitionRun"),Xt(Eh,"onTransitionStart"),Xt(Nh,"onTransitionCancel"),Xt(Sd,"onTransitionEnd"),zn("onMouseEnter",["mouseout","mouseover"]),zn("onMouseLeave",["mouseout","mouseover"]),zn("onPointerEnter",["pointerout","pointerover"]),zn("onPointerLeave",["pointerout","pointerover"]),nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nr));function X0(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var m=n.length-1;0<=m;m--){var h=n[m],w=h.instance,R=h.currentTarget;if(h=h.listener,w!==o&&l.isPropagationStopped())break e;o=h,l.currentTarget=R;try{o(l)}catch(H){fl(H)}l.currentTarget=null,o=w}else for(m=0;m<n.length;m++){if(h=n[m],w=h.instance,R=h.currentTarget,h=h.listener,w!==o&&l.isPropagationStopped())break e;o=h,l.currentTarget=R;try{o(l)}catch(H){fl(H)}l.currentTarget=null,o=w}}}}function Ee(e,t){var a=t[po];a===void 0&&(a=t[po]=new Set);var n=e+"__bubble";a.has(n)||(V0(t,e,2,!1),a.add(n))}function ac(e,t,a){var n=0;t&&(n|=4),V0(a,e,n,t)}var El="_reactListening"+Math.random().toString(36).slice(2);function nc(e){if(!e[El]){e[El]=!0,Bu.forEach(function(a){a!=="selectionchange"&&(c1.has(a)||ac(a,!1,e),ac(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[El]||(t[El]=!0,ac("selectionchange",!1,t))}}function V0(e,t,a,n){switch(mm(t)){case 2:var l=L1;break;case 8:l=Y1;break;default:l=xc}a=l.bind(null,t,a,e),l=void 0,!Ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function ic(e,t,a,n,l){var o=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var m=n.tag;if(m===3||m===4){var h=n.stateNode.containerInfo;if(h===l)break;if(m===4)for(m=n.return;m!==null;){var w=m.tag;if((w===3||w===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;h!==null;){if(m=En(h),m===null)return;if(w=m.tag,w===5||w===6||w===26||w===27){n=o=m;continue e}h=h.parentNode}}n=n.return}Pu(function(){var R=o,H=jo(a),F=[];e:{var O=jd.get(e);if(O!==void 0){var U=Hr,xe=e;switch(e){case"keypress":if(Ur(a)===0)break e;case"keydown":case"keyup":U=nh;break;case"focusin":xe="focus",U=zo;break;case"focusout":xe="blur",U=zo;break;case"beforeblur":case"afterblur":U=zo;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=lh;break;case yd:case vd:case wd:U=Wg;break;case Sd:U=sh;break;case"scroll":case"scrollend":U=Vg;break;case"wheel":U=uh;break;case"copy":case"cut":case"paste":U=Zg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=ed;break;case"toggle":case"beforetoggle":U=fh}var pe=(t&4)!==0,Ue=!pe&&(e==="scroll"||e==="scrollend"),E=pe?O!==null?O+"Capture":null:O;pe=[];for(var A=R,k;A!==null;){var V=A;if(k=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||k===null||E===null||(V=Si(A,E),V!=null&&pe.push(ir(A,V,k))),Ue)break;A=A.return}0<pe.length&&(O=new U(O,xe,null,a,H),F.push({event:O,listeners:pe}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",O&&a!==So&&(xe=a.relatedTarget||a.fromElement)&&(En(xe)||xe[An]))break e;if((U||O)&&(O=H.window===H?H:(O=H.ownerDocument)?O.defaultView||O.parentWindow:window,U?(xe=a.relatedTarget||a.toElement,U=R,xe=xe?En(xe):null,xe!==null&&(Ue=f(xe),pe=xe.tag,xe!==Ue||pe!==5&&pe!==27&&pe!==6)&&(xe=null)):(U=null,xe=R),U!==xe)){if(pe=Ju,V="onMouseLeave",E="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(pe=ed,V="onPointerLeave",E="onPointerEnter",A="pointer"),Ue=U==null?O:wi(U),k=xe==null?O:wi(xe),O=new pe(V,A+"leave",U,a,H),O.target=Ue,O.relatedTarget=k,V=null,En(H)===R&&(pe=new pe(E,A+"enter",xe,a,H),pe.target=k,pe.relatedTarget=Ue,V=pe),Ue=V,U&&xe)t:{for(pe=U,E=xe,A=0,k=pe;k;k=li(k))A++;for(k=0,V=E;V;V=li(V))k++;for(;0<A-k;)pe=li(pe),A--;for(;0<k-A;)E=li(E),k--;for(;A--;){if(pe===E||E!==null&&pe===E.alternate)break t;pe=li(pe),E=li(E)}pe=null}else pe=null;U!==null&&I0(F,O,U,pe,!1),xe!==null&&Ue!==null&&I0(F,Ue,xe,pe,!0)}}e:{if(O=R?wi(R):window,U=O.nodeName&&O.nodeName.toLowerCase(),U==="select"||U==="input"&&O.type==="file")var le=sd;else if(ld(O))if(cd)le=Sh;else{le=vh;var Ce=yh}else U=O.nodeName,!U||U.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&wo(R.elementType)&&(le=sd):le=wh;if(le&&(le=le(e,R))){od(F,le,a,H);break e}Ce&&Ce(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&vo(O,"number",O.value)}switch(Ce=R?wi(R):window,e){case"focusin":(ld(Ce)||Ce.contentEditable==="true")&&(Ln=Ce,Bo=R,ki=null);break;case"focusout":ki=Bo=Ln=null;break;case"mousedown":Lo=!0;break;case"contextmenu":case"mouseup":case"dragend":Lo=!1,xd(F,a,H);break;case"selectionchange":if(Ch)break;case"keydown":case"keyup":xd(F,a,H)}var de;if(Ro)e:{switch(e){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Bn?id(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(td&&a.locale!=="ko"&&(Bn||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Bn&&(de=Zu()):(Ea=H,Eo="value"in Ea?Ea.value:Ea.textContent,Bn=!0)),Ce=Nl(R,ge),0<Ce.length&&(ge=new $u(ge,e,null,a,H),F.push({event:ge,listeners:Ce}),de?ge.data=de:(de=rd(a),de!==null&&(ge.data=de)))),(de=ph?gh(e,a):hh(e,a))&&(ge=Nl(R,"onBeforeInput"),0<ge.length&&(Ce=new $u("onBeforeInput","beforeinput",null,a,H),F.push({event:Ce,listeners:ge}),Ce.data=de)),l1(F,e,R,a,H)}X0(F,t)})}function ir(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Nl(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,o=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||o===null||(l=Si(e,a),l!=null&&n.unshift(ir(e,l,o)),l=Si(e,t),l!=null&&n.push(ir(e,l,o))),e.tag===3)return n;e=e.return}return[]}function li(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function I0(e,t,a,n,l){for(var o=t._reactName,m=[];a!==null&&a!==n;){var h=a,w=h.alternate,R=h.stateNode;if(h=h.tag,w!==null&&w===n)break;h!==5&&h!==26&&h!==27||R===null||(w=R,l?(R=Si(a,o),R!=null&&m.unshift(ir(a,R,w))):l||(R=Si(a,o),R!=null&&m.push(ir(a,R,w)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var u1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function G0(e){return(typeof e=="string"?e:""+e).replace(u1,`
`).replace(d1,"")}function Q0(e,t){return t=G0(t),G0(e)===t}function Tl(){}function Ye(e,t,a,n,l,o){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Mn(e,""+n);break;case"className":Or(e,"class",n);break;case"tabIndex":Or(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Or(e,a,n);break;case"style":Fu(e,n,o);break;case"data":if(t!=="object"){Or(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Lr(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(a==="formAction"?(t!=="input"&&Ye(e,t,"name",l.name,l,null),Ye(e,t,"formEncType",l.formEncType,l,null),Ye(e,t,"formMethod",l.formMethod,l,null),Ye(e,t,"formTarget",l.formTarget,l,null)):(Ye(e,t,"encType",l.encType,l,null),Ye(e,t,"method",l.method,l,null),Ye(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Lr(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Tl);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Lr(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Mr(e,"popover",n);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Mr(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qg.get(a)||a,Mr(e,a,n))}}function rc(e,t,a,n,l,o){switch(a){case"style":Fu(e,n,o);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(c(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(c(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Mn(e,n):(typeof n=="number"||typeof n=="bigint")&&Mn(e,""+n);break;case"onScroll":n!=null&&Ee("scroll",e);break;case"onScrollEnd":n!=null&&Ee("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),o=e[xt]||null,o=o!=null?o[a]:null,typeof o=="function"&&e.removeEventListener(t,o,l),typeof n=="function")){typeof o!="function"&&o!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Mr(e,a,n)}}}function ut(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var n=!1,l=!1,o;for(o in a)if(a.hasOwnProperty(o)){var m=a[o];if(m!=null)switch(o){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ye(e,t,o,m,a,null)}}l&&Ye(e,t,"srcSet",a.srcSet,a,null),n&&Ye(e,t,"src",a.src,a,null);return;case"input":Ee("invalid",e);var h=o=m=l=null,w=null,R=null;for(n in a)if(a.hasOwnProperty(n)){var H=a[n];if(H!=null)switch(n){case"name":l=H;break;case"type":m=H;break;case"checked":w=H;break;case"defaultChecked":R=H;break;case"value":o=H;break;case"defaultValue":h=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,t));break;default:Ye(e,t,n,H,a,null)}}Vu(e,o,h,w,R,m,l,!1),Dr(e);return;case"select":Ee("invalid",e),n=m=o=null;for(l in a)if(a.hasOwnProperty(l)&&(h=a[l],h!=null))switch(l){case"value":o=h;break;case"defaultValue":m=h;break;case"multiple":n=h;default:Ye(e,t,l,h,a,null)}t=o,a=m,e.multiple=!!n,t!=null?Rn(e,!!n,t,!1):a!=null&&Rn(e,!!n,a,!0);return;case"textarea":Ee("invalid",e),o=l=n=null;for(m in a)if(a.hasOwnProperty(m)&&(h=a[m],h!=null))switch(m){case"value":n=h;break;case"defaultValue":l=h;break;case"children":o=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(c(91));break;default:Ye(e,t,m,h,a,null)}Gu(e,n,l,o),Dr(e);return;case"option":for(w in a)if(a.hasOwnProperty(w)&&(n=a[w],n!=null))switch(w){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ye(e,t,w,n,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(n=0;n<nr.length;n++)Ee(nr[n],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in a)if(a.hasOwnProperty(R)&&(n=a[R],n!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ye(e,t,R,n,a,null)}return;default:if(wo(t)){for(H in a)a.hasOwnProperty(H)&&(n=a[H],n!==void 0&&rc(e,t,H,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Ye(e,t,h,n,a,null))}function f1(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,o=null,m=null,h=null,w=null,R=null,H=null;for(U in a){var F=a[U];if(a.hasOwnProperty(U)&&F!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":w=F;default:n.hasOwnProperty(U)||Ye(e,t,U,null,n,F)}}for(var O in n){var U=n[O];if(F=a[O],n.hasOwnProperty(O)&&(U!=null||F!=null))switch(O){case"type":o=U;break;case"name":l=U;break;case"checked":R=U;break;case"defaultChecked":H=U;break;case"value":m=U;break;case"defaultValue":h=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(c(137,t));break;default:U!==F&&Ye(e,t,O,U,n,F)}}yo(e,m,h,w,R,H,o,l);return;case"select":U=m=h=O=null;for(o in a)if(w=a[o],a.hasOwnProperty(o)&&w!=null)switch(o){case"value":break;case"multiple":U=w;default:n.hasOwnProperty(o)||Ye(e,t,o,null,n,w)}for(l in n)if(o=n[l],w=a[l],n.hasOwnProperty(l)&&(o!=null||w!=null))switch(l){case"value":O=o;break;case"defaultValue":h=o;break;case"multiple":m=o;default:o!==w&&Ye(e,t,l,o,n,w)}t=h,a=m,n=U,O!=null?Rn(e,!!a,O,!1):!!n!=!!a&&(t!=null?Rn(e,!!a,t,!0):Rn(e,!!a,a?[]:"",!1));return;case"textarea":U=O=null;for(h in a)if(l=a[h],a.hasOwnProperty(h)&&l!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Ye(e,t,h,null,n,l)}for(m in n)if(l=n[m],o=a[m],n.hasOwnProperty(m)&&(l!=null||o!=null))switch(m){case"value":O=l;break;case"defaultValue":U=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==o&&Ye(e,t,m,l,n,o)}Iu(e,O,U);return;case"option":for(var xe in a)if(O=a[xe],a.hasOwnProperty(xe)&&O!=null&&!n.hasOwnProperty(xe))switch(xe){case"selected":e.selected=!1;break;default:Ye(e,t,xe,null,n,O)}for(w in n)if(O=n[w],U=a[w],n.hasOwnProperty(w)&&O!==U&&(O!=null||U!=null))switch(w){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:Ye(e,t,w,O,n,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in a)O=a[pe],a.hasOwnProperty(pe)&&O!=null&&!n.hasOwnProperty(pe)&&Ye(e,t,pe,null,n,O);for(R in n)if(O=n[R],U=a[R],n.hasOwnProperty(R)&&O!==U&&(O!=null||U!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(c(137,t));break;default:Ye(e,t,R,O,n,U)}return;default:if(wo(t)){for(var Ue in a)O=a[Ue],a.hasOwnProperty(Ue)&&O!==void 0&&!n.hasOwnProperty(Ue)&&rc(e,t,Ue,void 0,n,O);for(H in n)O=n[H],U=a[H],!n.hasOwnProperty(H)||O===U||O===void 0&&U===void 0||rc(e,t,H,O,n,U);return}}for(var E in a)O=a[E],a.hasOwnProperty(E)&&O!=null&&!n.hasOwnProperty(E)&&Ye(e,t,E,null,n,O);for(F in n)O=n[F],U=a[F],!n.hasOwnProperty(F)||O===U||O==null&&U==null||Ye(e,t,F,O,n,U)}var lc=null,oc=null;function zl(e){return e.nodeType===9?e:e.ownerDocument}function F0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function W0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function sc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cc=null;function m1(){var e=window.event;return e&&e.type==="popstate"?e===cc?!1:(cc=e,!0):(cc=null,!1)}var P0=typeof setTimeout=="function"?setTimeout:void 0,p1=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(e){return Z0.resolve(null).then(e).catch(h1)}:P0;function h1(e){setTimeout(function(){throw e})}function Xa(e){return e==="head"}function K0(e,t){var a=t,n=0,l=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(0<n&&8>n){a=n;var m=e.ownerDocument;if(a&1&&rr(m.documentElement),a&2&&rr(m.body),a&4)for(a=m.head,rr(a),m=a.firstChild;m;){var h=m.nextSibling,w=m.nodeName;m[vi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||a.removeChild(m),m=h}}if(l===0){e.removeChild(o),mr(t);return}l--}else a==="$"||a==="$?"||a==="$!"?l++:n=a.charCodeAt(0)-48;else n=0;a=o}while(a);mr(t)}function uc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uc(a),go(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function x1(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[vi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(o=e.getAttribute("rel"),o==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(o!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(o=e.getAttribute("src"),(o!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&o&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var o=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===o)return e}else return e;if(e=It(e.nextSibling),e===null)break}return null}function b1(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=It(e.nextSibling),e===null))return null;return e}function dc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function y1(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var fc=null;function J0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function $0(e,t,a){switch(t=zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function rr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);go(e)}var qt=new Map,em=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=I.d;I.d={f:v1,r:w1,D:S1,C:j1,L:C1,m:A1,X:N1,S:E1,M:T1};function v1(){var e=xa.f(),t=wl();return e||t}function w1(e){var t=Nn(e);t!==null&&t.tag===5&&t.type==="form"?vf(t):xa.r(e)}var oi=typeof document>"u"?null:document;function tm(e,t,a){var n=oi;if(n&&typeof t=="string"&&t){var l=Dt(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),em.has(l)||(em.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),ut(t,"link",e),it(t),n.head.appendChild(t)))}}function S1(e){xa.D(e),tm("dns-prefetch",e,null)}function j1(e,t){xa.C(e,t),tm("preconnect",e,t)}function C1(e,t,a){xa.L(e,t,a);var n=oi;if(n&&e&&t){var l='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+Dt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+Dt(a.imageSizes)+'"]')):l+='[href="'+Dt(e)+'"]';var o=l;switch(t){case"style":o=si(e);break;case"script":o=ci(e)}qt.has(o)||(e=y({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),qt.set(o,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(lr(o))||t==="script"&&n.querySelector(or(o))||(t=n.createElement("link"),ut(t,"link",e),it(t),n.head.appendChild(t)))}}function A1(e,t){xa.m(e,t);var a=oi;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+Dt(n)+'"][href="'+Dt(e)+'"]',o=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=ci(e)}if(!qt.has(o)&&(e=y({rel:"modulepreload",href:e},t),qt.set(o,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(or(o)))return}n=a.createElement("link"),ut(n,"link",e),it(n),a.head.appendChild(n)}}}function E1(e,t,a){xa.S(e,t,a);var n=oi;if(n&&e){var l=Tn(n).hoistableStyles,o=si(e);t=t||"default";var m=l.get(o);if(!m){var h={loading:0,preload:null};if(m=n.querySelector(lr(o)))h.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},a),(a=qt.get(o))&&mc(e,a);var w=m=n.createElement("link");it(w),ut(w,"link",e),w._p=new Promise(function(R,H){w.onload=R,w.onerror=H}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Rl(m,t,n)}m={type:"stylesheet",instance:m,count:1,state:h},l.set(o,m)}}}function N1(e,t){xa.X(e,t);var a=oi;if(a&&e){var n=Tn(a).hoistableScripts,l=ci(e),o=n.get(l);o||(o=a.querySelector(or(l)),o||(e=y({src:e,async:!0},t),(t=qt.get(l))&&pc(e,t),o=a.createElement("script"),it(o),ut(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function T1(e,t){xa.M(e,t);var a=oi;if(a&&e){var n=Tn(a).hoistableScripts,l=ci(e),o=n.get(l);o||(o=a.querySelector(or(l)),o||(e=y({src:e,async:!0,type:"module"},t),(t=qt.get(l))&&pc(e,t),o=a.createElement("script"),it(o),ut(o,"link",e),a.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},n.set(l,o))}}function am(e,t,a,n){var l=(l=B.current)?kl(l):null;if(!l)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=si(a.href),a=Tn(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=si(a.href);var o=Tn(l).hoistableStyles,m=o.get(e);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(e,m),(o=l.querySelector(lr(e)))&&!o._p&&(m.instance=o,m.state.loading=5),qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(e,a),o||z1(l,e,a,m.state))),t&&n===null)throw Error(c(528,""));return m}if(t&&n!==null)throw Error(c(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ci(a),a=Tn(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function si(e){return'href="'+Dt(e)+'"'}function lr(e){return'link[rel="stylesheet"]['+e+"]"}function nm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function z1(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ut(t,"link",a),it(t),e.head.appendChild(t))}function ci(e){return'[src="'+Dt(e)+'"]'}function or(e){return"script[async]"+e}function im(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Dt(a.href)+'"]');if(n)return t.instance=n,it(n),n;var l=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),it(n),ut(n,"style",l),Rl(n,a.precedence,e),t.instance=n;case"stylesheet":l=si(a.href);var o=e.querySelector(lr(l));if(o)return t.state.loading|=4,t.instance=o,it(o),o;n=nm(a),(l=qt.get(l))&&mc(n,l),o=(e.ownerDocument||e).createElement("link"),it(o);var m=o;return m._p=new Promise(function(h,w){m.onload=h,m.onerror=w}),ut(o,"link",n),t.state.loading|=4,Rl(o,a.precedence,e),t.instance=o;case"script":return o=ci(a.src),(l=e.querySelector(or(o)))?(t.instance=l,it(l),l):(n=a,(l=qt.get(o))&&(n=y({},a),pc(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),it(l),ut(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Rl(n,a.precedence,e));return t.instance}function Rl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,o=l,m=0;m<n.length;m++){var h=n[m];if(h.dataset.precedence===t)o=h;else if(o!==l)break}o?o.parentNode.insertBefore(e,o.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function mc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ml=null;function rm(e,t,a){if(Ml===null){var n=new Map,l=Ml=new Map;l.set(a,n)}else l=Ml,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var o=a[l];if(!(o[vi]||o[dt]||e==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var m=o.getAttribute(t)||"";m=e+m;var h=n.get(m);h?h.push(o):n.set(m,[o])}}return n}function lm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function k1(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function om(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var sr=null;function R1(){}function M1(e,t,a){if(sr===null)throw Error(c(475));var n=sr;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var l=si(a.href),o=e.querySelector(lr(l));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=Ol.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=o,it(o);return}o=e.ownerDocument||e,a=nm(a),(l=qt.get(l))&&mc(a,l),o=o.createElement("link"),it(o);var m=o;m._p=new Promise(function(h,w){m.onload=h,m.onerror=w}),ut(o,"link",a),t.instance=o}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=Ol.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function O1(){if(sr===null)throw Error(c(475));var e=sr;return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Ol(){if(this.count--,this.count===0){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dl=null;function gc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dl=new Map,t.forEach(D1,e),Dl=null,Ol.call(e))}function D1(e,t){if(!(t.state.loading&4)){var a=Dl.get(e);if(a)var n=a.get(null);else{a=new Map,Dl.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<l.length;o++){var m=l[o];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),n=m)}n&&a.set(null,n)}l=t.instance,m=l.getAttribute("data-precedence"),o=a.get(m)||n,o===n&&a.set(null,l),a.set(m,l),this.count++,n=Ol.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),o?o.parentNode.insertBefore(l,o.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var cr={$$typeof:W,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function B1(e,t,a,n,l,o,m,h){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uo(0),this.hiddenUpdates=uo(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=o,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function sm(e,t,a,n,l,o,m,h,w,R,H,F){return e=new B1(e,t,a,m,h,w,R,F),t=1,o===!0&&(t|=24),o=At(3,null,null,t),e.current=o,o.stateNode=e,t=Zo(),t.refCount++,e.pooledCache=t,t.refCount++,o.memoizedState={element:n,isDehydrated:a,cache:t},es(o),e}function cm(e){return e?(e=Hn,e):Hn}function um(e,t,a,n,l,o){l=cm(l),n.context===null?n.context=l:n.pendingContext=l,n=za(t),n.payload={element:a},o=o===void 0?null:o,o!==null&&(n.callback=o),a=ka(e,n,t),a!==null&&(kt(a,e,t),_i(a,e,t))}function dm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function hc(e,t){dm(e,t),(e=e.alternate)&&dm(e,t)}function fm(e){if(e.tag===13){var t=_n(e,67108864);t!==null&&kt(t,e,67108864),hc(e,67108864)}}var Bl=!0;function L1(e,t,a,n){var l=D.T;D.T=null;var o=I.p;try{I.p=2,xc(e,t,a,n)}finally{I.p=o,D.T=l}}function Y1(e,t,a,n){var l=D.T;D.T=null;var o=I.p;try{I.p=8,xc(e,t,a,n)}finally{I.p=o,D.T=l}}function xc(e,t,a,n){if(Bl){var l=bc(n);if(l===null)ic(e,t,n,Ll,a),pm(e,n);else if(_1(l,e,t,a,n))n.stopPropagation();else if(pm(e,n),t&4&&-1<U1.indexOf(e)){for(;l!==null;){var o=Nn(l);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var m=an(o.pendingLanes);if(m!==0){var h=o;for(h.pendingLanes|=2,h.entangledLanes|=2;m;){var w=1<<31-jt(m);h.entanglements[1]|=w,m&=~w}Zt(o),(De&6)===0&&(yl=ce()+500,ar(0))}}break;case 13:h=_n(o,2),h!==null&&kt(h,o,2),wl(),hc(o,2)}if(o=bc(n),o===null&&ic(e,t,n,Ll,a),o===l)break;l=o}l!==null&&n.stopPropagation()}else ic(e,t,n,null,a)}}function bc(e){return e=jo(e),yc(e)}var Ll=null;function yc(e){if(Ll=null,e=En(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ll=e,null}function mm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(we()){case ze:return 2;case et:return 8;case ht:case Gt:return 32;case Mt:return 268435456;default:return 32}default:return 32}}var vc=!1,Va=null,Ia=null,Ga=null,ur=new Map,dr=new Map,Qa=[],U1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pm(e,t){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function fr(e,t,a,n,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[l]},t!==null&&(t=Nn(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _1(e,t,a,n,l){switch(t){case"focusin":return Va=fr(Va,e,t,a,n,l),!0;case"dragenter":return Ia=fr(Ia,e,t,a,n,l),!0;case"mouseover":return Ga=fr(Ga,e,t,a,n,l),!0;case"pointerover":var o=l.pointerId;return ur.set(o,fr(ur.get(o)||null,e,t,a,n,l)),!0;case"gotpointercapture":return o=l.pointerId,dr.set(o,fr(dr.get(o)||null,e,t,a,n,l)),!0}return!1}function gm(e){var t=En(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,Mg(e.priority,function(){if(a.tag===13){var n=zt();n=fo(n);var l=_n(a,n);l!==null&&kt(l,a,n),hc(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=bc(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);So=n,a.target.dispatchEvent(n),So=null}else return t=Nn(a),t!==null&&fm(t),e.blockedOn=a,!1;t.shift()}return!0}function hm(e,t,a){Yl(e)&&a.delete(t)}function H1(){vc=!1,Va!==null&&Yl(Va)&&(Va=null),Ia!==null&&Yl(Ia)&&(Ia=null),Ga!==null&&Yl(Ga)&&(Ga=null),ur.forEach(hm),dr.forEach(hm)}function Ul(e,t){e.blockedOn===t&&(e.blockedOn=null,vc||(vc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,H1)))}var _l=null;function xm(e){_l!==e&&(_l=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_l===e&&(_l=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(yc(n||a)===null)continue;break}var o=Nn(a);o!==null&&(e.splice(t,3),t-=3,ys(o,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function mr(e){function t(w){return Ul(w,e)}Va!==null&&Ul(Va,e),Ia!==null&&Ul(Ia,e),Ga!==null&&Ul(Ga,e),ur.forEach(t),dr.forEach(t);for(var a=0;a<Qa.length;a++){var n=Qa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Qa.length&&(a=Qa[0],a.blockedOn===null);)gm(a),a.blockedOn===null&&Qa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],o=a[n+1],m=l[xt]||null;if(typeof o=="function")m||xm(a);else if(m){var h=null;if(o&&o.hasAttribute("formAction")){if(l=o,m=o[xt]||null)h=m.formAction;else if(yc(l)!==null)continue}else h=m.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),xm(a)}}}function wc(e){this._internalRoot=e}Hl.prototype.render=wc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var a=t.current,n=zt();um(a,n,e,t,null,null)},Hl.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;um(e.current,2,null,e,null,null),wl(),t[An]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ou();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Qa.length&&t!==0&&t<Qa[a].priority;a++);Qa.splice(a,0,e),a===0&&gm(e)}};var bm=s.version;if(bm!=="19.1.0")throw Error(c(527,bm,"19.1.0"));I.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var q1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{xi=ql.inject(q1),St=ql}catch{}}return gr.createRoot=function(e,t){if(!d(e))throw Error(c(299));var a=!1,n="",l=Df,o=Bf,m=Lf,h=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(h=t.unstable_transitionCallbacks)),t=sm(e,1,!1,null,null,a,n,l,o,m,h,null),e[An]=t.current,nc(e),new wc(t)},gr.hydrateRoot=function(e,t,a){if(!d(e))throw Error(c(299));var n=!1,l="",o=Df,m=Bf,h=Lf,w=null,R=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(w=a.unstable_transitionCallbacks),a.formState!==void 0&&(R=a.formState)),t=sm(e,1,!0,t,a??null,n,l,o,m,h,w,R),t.context=cm(null),a=t.current,n=zt(),n=fo(n),l=za(n),l.callback=null,ka(a,l,n),a=n,t.current.lanes=a,yi(t,a),Zt(t),e[An]=t.current,nc(e),new Hl(t)},gr.version="19.1.0",gr}var Tm;function Z1(){if(Tm)return Cc.exports;Tm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Cc.exports=P1(),Cc.exports}var K1=Z1();const J1=du(K1);var hr={},zm;function $1(){if(zm)return hr;zm=1,Object.defineProperty(hr,"__esModule",{value:!0}),hr.parse=g,hr.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,s=/^[\u0021-\u003A\u003C-\u007E]*$/,u=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,f=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function g(S,z){const T=new f,Q=S.length;if(Q<2)return T;const L=(z==null?void 0:z.decode)||y;let _=0;do{const C=S.indexOf("=",_);if(C===-1)break;const W=S.indexOf(";",_),te=W===-1?Q:W;if(C>te){_=S.lastIndexOf(";",C-1)+1;continue}const K=x(S,_,C),oe=b(S,C,K),Y=S.slice(K,oe);if(T[Y]===void 0){let $=x(S,C+1,te),M=b(S,te,$);const fe=L(S.slice($,M));T[Y]=fe}_=te+1}while(_<Q);return T}function x(S,z,T){do{const Q=S.charCodeAt(z);if(Q!==32&&Q!==9)return z}while(++z<T);return T}function b(S,z,T){for(;z>T;){const Q=S.charCodeAt(--z);if(Q!==32&&Q!==9)return z+1}return T}function p(S,z,T){const Q=(T==null?void 0:T.encode)||encodeURIComponent;if(!r.test(S))throw new TypeError(`argument name is invalid: ${S}`);const L=Q(z);if(!s.test(L))throw new TypeError(`argument val is invalid: ${z}`);let _=S+"="+L;if(!T)return _;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);_+="; Max-Age="+T.maxAge}if(T.domain){if(!u.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);_+="; Domain="+T.domain}if(T.path){if(!c.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);_+="; Path="+T.path}if(T.expires){if(!N(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);_+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(_+="; HttpOnly"),T.secure&&(_+="; Secure"),T.partitioned&&(_+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return _}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function N(S){return d.call(S)==="[object Date]"}return hr}$1();var km="popstate";function e2(r={}){function s(c,d){let{pathname:f,search:g,hash:x}=c.location;return Ic("",{pathname:f,search:g,hash:x},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function u(c,d){return typeof d=="string"?d:wr(d)}return a2(s,u,null,r)}function Qe(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function ta(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function t2(){return Math.random().toString(36).substring(2,10)}function Rm(r,s){return{usr:r.state,key:r.key,idx:s}}function Ic(r,s,u=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?pi(s):s,state:u,key:s&&s.key||c||t2()}}function wr({pathname:r="/",search:s="",hash:u=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),u&&u!=="#"&&(r+=u.charAt(0)==="#"?u:"#"+u),r}function pi(r){let s={};if(r){let u=r.indexOf("#");u>=0&&(s.hash=r.substring(u),r=r.substring(0,u));let c=r.indexOf("?");c>=0&&(s.search=r.substring(c),r=r.substring(0,c)),r&&(s.pathname=r)}return s}function a2(r,s,u,c={}){let{window:d=document.defaultView,v5Compat:f=!1}=c,g=d.history,x="POP",b=null,p=y();p==null&&(p=0,g.replaceState({...g.state,idx:p},""));function y(){return(g.state||{idx:null}).idx}function N(){x="POP";let L=y(),_=L==null?null:L-p;p=L,b&&b({action:x,location:Q.location,delta:_})}function S(L,_){x="PUSH";let C=Ic(Q.location,L,_);p=y()+1;let W=Rm(C,p),te=Q.createHref(C);try{g.pushState(W,"",te)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(te)}f&&b&&b({action:x,location:Q.location,delta:1})}function z(L,_){x="REPLACE";let C=Ic(Q.location,L,_);p=y();let W=Rm(C,p),te=Q.createHref(C);g.replaceState(W,"",te),f&&b&&b({action:x,location:Q.location,delta:0})}function T(L){return n2(L)}let Q={get action(){return x},get location(){return r(d,g)},listen(L){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(km,N),b=L,()=>{d.removeEventListener(km,N),b=null}},createHref(L){return s(d,L)},createURL:T,encodeLocation(L){let _=T(L);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:S,replace:z,go(L){return g.go(L)}};return Q}function n2(r,s=!1){let u="http://localhost";typeof window<"u"&&(u=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(u,"No window.location.(origin|href) available to create URL");let c=typeof r=="string"?r:wr(r);return c=c.replace(/ $/,"%20"),!s&&c.startsWith("//")&&(c=u+c),new URL(c,u)}function Ep(r,s,u="/"){return i2(r,s,u,!1)}function i2(r,s,u,c){let d=typeof s=="string"?pi(s):s,f=ya(d.pathname||"/",u);if(f==null)return null;let g=Np(r);r2(g);let x=null;for(let b=0;x==null&&b<g.length;++b){let p=h2(f);x=p2(g[b],p,c)}return x}function Np(r,s=[],u=[],c=""){let d=(f,g,x)=>{let b={relativePath:x===void 0?f.path||"":x,caseSensitive:f.caseSensitive===!0,childrenIndex:g,route:f};b.relativePath.startsWith("/")&&(Qe(b.relativePath.startsWith(c),`Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(c.length));let p=ba([c,b.relativePath]),y=u.concat(b);f.children&&f.children.length>0&&(Qe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Np(f.children,s,y,p)),!(f.path==null&&!f.index)&&s.push({path:p,score:f2(p,f.index),routesMeta:y})};return r.forEach((f,g)=>{var x;if(f.path===""||!((x=f.path)!=null&&x.includes("?")))d(f,g);else for(let b of Tp(f.path))d(f,g,b)}),s}function Tp(r){let s=r.split("/");if(s.length===0)return[];let[u,...c]=s,d=u.endsWith("?"),f=u.replace(/\?$/,"");if(c.length===0)return d?[f,""]:[f];let g=Tp(c.join("/")),x=[];return x.push(...g.map(b=>b===""?f:[f,b].join("/"))),d&&x.push(...g),x.map(b=>r.startsWith("/")&&b===""?"/":b)}function r2(r){r.sort((s,u)=>s.score!==u.score?u.score-s.score:m2(s.routesMeta.map(c=>c.childrenIndex),u.routesMeta.map(c=>c.childrenIndex)))}var l2=/^:[\w-]+$/,o2=3,s2=2,c2=1,u2=10,d2=-2,Mm=r=>r==="*";function f2(r,s){let u=r.split("/"),c=u.length;return u.some(Mm)&&(c+=d2),s&&(c+=s2),u.filter(d=>!Mm(d)).reduce((d,f)=>d+(l2.test(f)?o2:f===""?c2:u2),c)}function m2(r,s){return r.length===s.length&&r.slice(0,-1).every((c,d)=>c===s[d])?r[r.length-1]-s[s.length-1]:0}function p2(r,s,u=!1){let{routesMeta:c}=r,d={},f="/",g=[];for(let x=0;x<c.length;++x){let b=c[x],p=x===c.length-1,y=f==="/"?s:s.slice(f.length)||"/",N=Pl({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},y),S=b.route;if(!N&&p&&u&&!c[c.length-1].route.index&&(N=Pl({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},y)),!N)return null;Object.assign(d,N.params),g.push({params:d,pathname:ba([f,N.pathname]),pathnameBase:v2(ba([f,N.pathnameBase])),route:S}),N.pathnameBase!=="/"&&(f=ba([f,N.pathnameBase]))}return g}function Pl(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[u,c]=g2(r.path,r.caseSensitive,r.end),d=s.match(u);if(!d)return null;let f=d[0],g=f.replace(/(.)\/+$/,"$1"),x=d.slice(1);return{params:c.reduce((p,{paramName:y,isOptional:N},S)=>{if(y==="*"){let T=x[S]||"";g=f.slice(0,f.length-T.length).replace(/(.)\/+$/,"$1")}const z=x[S];return N&&!z?p[y]=void 0:p[y]=(z||"").replace(/%2F/g,"/"),p},{}),pathname:f,pathnameBase:g,pattern:r}}function g2(r,s=!1,u=!0){ta(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,b)=>(c.push({paramName:x,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):u?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,s?void 0:"i"),c]}function h2(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return ta(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function ya(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let u=s.endsWith("/")?s.length-1:s.length,c=r.charAt(u);return c&&c!=="/"?null:r.slice(u)||"/"}function x2(r,s="/"){let{pathname:u,search:c="",hash:d=""}=typeof r=="string"?pi(r):r;return{pathname:u?u.startsWith("/")?u:b2(u,s):s,search:w2(c),hash:S2(d)}}function b2(r,s){let u=s.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?u.length>1&&u.pop():d!=="."&&u.push(d)}),u.length>1?u.join("/"):"/"}function Tc(r,s,u,c){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y2(r){return r.filter((s,u)=>u===0||s.route.path&&s.route.path.length>0)}function zp(r){let s=y2(r);return s.map((u,c)=>c===s.length-1?u.pathname:u.pathnameBase)}function kp(r,s,u,c=!1){let d;typeof r=="string"?d=pi(r):(d={...r},Qe(!d.pathname||!d.pathname.includes("?"),Tc("?","pathname","search",d)),Qe(!d.pathname||!d.pathname.includes("#"),Tc("#","pathname","hash",d)),Qe(!d.search||!d.search.includes("#"),Tc("#","search","hash",d)));let f=r===""||d.pathname==="",g=f?"/":d.pathname,x;if(g==null)x=u;else{let N=s.length-1;if(!c&&g.startsWith("..")){let S=g.split("/");for(;S[0]==="..";)S.shift(),N-=1;d.pathname=S.join("/")}x=N>=0?s[N]:"/"}let b=x2(d,x),p=g&&g!=="/"&&g.endsWith("/"),y=(f||g===".")&&u.endsWith("/");return!b.pathname.endsWith("/")&&(p||y)&&(b.pathname+="/"),b}var ba=r=>r.join("/").replace(/\/\/+/g,"/"),v2=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),w2=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,S2=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function j2(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Rp=["POST","PUT","PATCH","DELETE"];new Set(Rp);var C2=["GET",...Rp];new Set(C2);var gi=v.createContext(null);gi.displayName="DataRouter";var to=v.createContext(null);to.displayName="DataRouterState";var Mp=v.createContext({isTransitioning:!1});Mp.displayName="ViewTransition";var A2=v.createContext(new Map);A2.displayName="Fetchers";var E2=v.createContext(null);E2.displayName="Await";var aa=v.createContext(null);aa.displayName="Navigation";var Cr=v.createContext(null);Cr.displayName="Location";var Sa=v.createContext({outlet:null,matches:[],isDataRoute:!1});Sa.displayName="Route";var mu=v.createContext(null);mu.displayName="RouteError";function N2(r,{relative:s}={}){Qe(Ar(),"useHref() may be used only in the context of a <Router> component.");let{basename:u,navigator:c}=v.useContext(aa),{hash:d,pathname:f,search:g}=Er(r,{relative:s}),x=f;return u!=="/"&&(x=f==="/"?u:ba([u,f])),c.createHref({pathname:x,search:g,hash:d})}function Ar(){return v.useContext(Cr)!=null}function tn(){return Qe(Ar(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(Cr).location}var Op="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Dp(r){v.useContext(aa).static||v.useLayoutEffect(r)}function T2(){let{isDataRoute:r}=v.useContext(Sa);return r?q2():z2()}function z2(){Qe(Ar(),"useNavigate() may be used only in the context of a <Router> component.");let r=v.useContext(gi),{basename:s,navigator:u}=v.useContext(aa),{matches:c}=v.useContext(Sa),{pathname:d}=tn(),f=JSON.stringify(zp(c)),g=v.useRef(!1);return Dp(()=>{g.current=!0}),v.useCallback((b,p={})=>{if(ta(g.current,Op),!g.current)return;if(typeof b=="number"){u.go(b);return}let y=kp(b,JSON.parse(f),d,p.relative==="path");r==null&&s!=="/"&&(y.pathname=y.pathname==="/"?s:ba([s,y.pathname])),(p.replace?u.replace:u.push)(y,p.state,p)},[s,u,f,d,r])}v.createContext(null);function Er(r,{relative:s}={}){let{matches:u}=v.useContext(Sa),{pathname:c}=tn(),d=JSON.stringify(zp(u));return v.useMemo(()=>kp(r,JSON.parse(d),c,s==="path"),[r,d,c,s])}function k2(r,s){return Bp(r,s)}function Bp(r,s,u,c){var _;Qe(Ar(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=v.useContext(aa),{matches:f}=v.useContext(Sa),g=f[f.length-1],x=g?g.params:{},b=g?g.pathname:"/",p=g?g.pathnameBase:"/",y=g&&g.route;{let C=y&&y.path||"";Lp(b,!y||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let N=tn(),S;if(s){let C=typeof s=="string"?pi(s):s;Qe(p==="/"||((_=C.pathname)==null?void 0:_.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${C.pathname}" was given in the \`location\` prop.`),S=C}else S=N;let z=S.pathname||"/",T=z;if(p!=="/"){let C=p.replace(/^\//,"").split("/");T="/"+z.replace(/^\//,"").split("/").slice(C.length).join("/")}let Q=Ep(r,{pathname:T});ta(y||Q!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),ta(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=B2(Q&&Q.map(C=>Object.assign({},C,{params:Object.assign({},x,C.params),pathname:ba([p,d.encodeLocation?d.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?p:ba([p,d.encodeLocation?d.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),f,u,c);return s&&L?v.createElement(Cr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},L):L}function R2(){let r=H2(),s=j2(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),u=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},f={padding:"2px 4px",backgroundColor:c},g=null;return console.error("Error handled by React Router default ErrorBoundary:",r),g=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:f},"ErrorBoundary")," or"," ",v.createElement("code",{style:f},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},s),u?v.createElement("pre",{style:d},u):null,g)}var M2=v.createElement(R2,null),O2=class extends v.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){console.error("React Router caught the following error during render",r,s)}render(){return this.state.error!==void 0?v.createElement(Sa.Provider,{value:this.props.routeContext},v.createElement(mu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function D2({routeContext:r,match:s,children:u}){let c=v.useContext(gi);return c&&c.static&&c.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=s.route.id),v.createElement(Sa.Provider,{value:r},u)}function B2(r,s=[],u=null,c=null){if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let d=r,f=u==null?void 0:u.errors;if(f!=null){let b=d.findIndex(p=>p.route.id&&(f==null?void 0:f[p.route.id])!==void 0);Qe(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let g=!1,x=-1;if(u)for(let b=0;b<d.length;b++){let p=d[b];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(x=b),p.route.id){let{loaderData:y,errors:N}=u,S=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!N||N[p.route.id]===void 0);if(p.route.lazy||S){g=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((b,p,y)=>{let N,S=!1,z=null,T=null;u&&(N=f&&p.route.id?f[p.route.id]:void 0,z=p.route.errorElement||M2,g&&(x<0&&y===0?(Lp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,T=null):x===y&&(S=!0,T=p.route.hydrateFallbackElement||null)));let Q=s.concat(d.slice(0,y+1)),L=()=>{let _;return N?_=z:S?_=T:p.route.Component?_=v.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=b,v.createElement(D2,{match:p,routeContext:{outlet:b,matches:Q,isDataRoute:u!=null},children:_})};return u&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?v.createElement(O2,{location:u.location,revalidation:u.revalidation,component:z,error:N,children:L(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):L()},null)}function pu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function L2(r){let s=v.useContext(gi);return Qe(s,pu(r)),s}function Y2(r){let s=v.useContext(to);return Qe(s,pu(r)),s}function U2(r){let s=v.useContext(Sa);return Qe(s,pu(r)),s}function gu(r){let s=U2(r),u=s.matches[s.matches.length-1];return Qe(u.route.id,`${r} can only be used on routes that contain a unique "id"`),u.route.id}function _2(){return gu("useRouteId")}function H2(){var c;let r=v.useContext(mu),s=Y2("useRouteError"),u=gu("useRouteError");return r!==void 0?r:(c=s.errors)==null?void 0:c[u]}function q2(){let{router:r}=L2("useNavigate"),s=gu("useNavigate"),u=v.useRef(!1);return Dp(()=>{u.current=!0}),v.useCallback(async(d,f={})=>{ta(u.current,Op),u.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:s,...f}))},[r,s])}var Om={};function Lp(r,s,u){!s&&!Om[r]&&(Om[r]=!0,ta(!1,u))}v.memo(X2);function X2({routes:r,future:s,state:u}){return Bp(r,void 0,u,s)}function Pa(r){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function V2({basename:r="/",children:s=null,location:u,navigationType:c="POP",navigator:d,static:f=!1}){Qe(!Ar(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=r.replace(/^\/*/,"/"),x=v.useMemo(()=>({basename:g,navigator:d,static:f,future:{}}),[g,d,f]);typeof u=="string"&&(u=pi(u));let{pathname:b="/",search:p="",hash:y="",state:N=null,key:S="default"}=u,z=v.useMemo(()=>{let T=ya(b,g);return T==null?null:{location:{pathname:T,search:p,hash:y,state:N,key:S},navigationType:c}},[g,b,p,y,N,S,c]);return ta(z!=null,`<Router basename="${g}"> is not able to match the URL "${b}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),z==null?null:v.createElement(aa.Provider,{value:x},v.createElement(Cr.Provider,{children:s,value:z}))}function I2({children:r,location:s}){return k2(Gc(r),s)}function Gc(r,s=[]){let u=[];return v.Children.forEach(r,(c,d)=>{if(!v.isValidElement(c))return;let f=[...s,d];if(c.type===v.Fragment){u.push.apply(u,Gc(c.props.children,f));return}Qe(c.type===Pa,`[${typeof c.type=="string"?c.type:c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!c.props.index||!c.props.children,"An index route cannot have child routes.");let g={id:c.props.id||f.join("-"),caseSensitive:c.props.caseSensitive,element:c.props.element,Component:c.props.Component,index:c.props.index,path:c.props.path,loader:c.props.loader,action:c.props.action,hydrateFallbackElement:c.props.hydrateFallbackElement,HydrateFallback:c.props.HydrateFallback,errorElement:c.props.errorElement,ErrorBoundary:c.props.ErrorBoundary,hasErrorBoundary:c.props.hasErrorBoundary===!0||c.props.ErrorBoundary!=null||c.props.errorElement!=null,shouldRevalidate:c.props.shouldRevalidate,handle:c.props.handle,lazy:c.props.lazy};c.props.children&&(g.children=Gc(c.props.children,f)),u.push(g)}),u}var Gl="get",Ql="application/x-www-form-urlencoded";function ao(r){return r!=null&&typeof r.tagName=="string"}function G2(r){return ao(r)&&r.tagName.toLowerCase()==="button"}function Q2(r){return ao(r)&&r.tagName.toLowerCase()==="form"}function F2(r){return ao(r)&&r.tagName.toLowerCase()==="input"}function W2(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function P2(r,s){return r.button===0&&(!s||s==="_self")&&!W2(r)}var Xl=null;function Z2(){if(Xl===null)try{new FormData(document.createElement("form"),0),Xl=!1}catch{Xl=!0}return Xl}var K2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zc(r){return r!=null&&!K2.has(r)?(ta(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`),null):r}function J2(r,s){let u,c,d,f,g;if(Q2(r)){let x=r.getAttribute("action");c=x?ya(x,s):null,u=r.getAttribute("method")||Gl,d=zc(r.getAttribute("enctype"))||Ql,f=new FormData(r)}else if(G2(r)||F2(r)&&(r.type==="submit"||r.type==="image")){let x=r.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||x.getAttribute("action");if(c=b?ya(b,s):null,u=r.getAttribute("formmethod")||x.getAttribute("method")||Gl,d=zc(r.getAttribute("formenctype"))||zc(x.getAttribute("enctype"))||Ql,f=new FormData(x,r),!Z2()){let{name:p,type:y,value:N}=r;if(y==="image"){let S=p?`${p}.`:"";f.append(`${S}x`,"0"),f.append(`${S}y`,"0")}else p&&f.append(p,N)}}else{if(ao(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');u=Gl,c=null,d=Ql,g=r}return f&&d==="text/plain"&&(g=f,f=void 0),{action:c,method:u.toLowerCase(),encType:d,formData:f,body:g}}function hu(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}async function $2(r,s){if(r.id in s)return s[r.id];try{let u=await import(r.module);return s[r.id]=u,u}catch(u){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(u),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ex(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function tx(r,s,u){let c=await Promise.all(r.map(async d=>{let f=s.routes[d.route.id];if(f){let g=await $2(f,u);return g.links?g.links():[]}return[]}));return rx(c.flat(1).filter(ex).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Dm(r,s,u,c,d,f){let g=(b,p)=>u[p]?b.route.id!==u[p].route.id:!0,x=(b,p)=>{var y;return u[p].pathname!==b.pathname||((y=u[p].route.path)==null?void 0:y.endsWith("*"))&&u[p].params["*"]!==b.params["*"]};return f==="assets"?s.filter((b,p)=>g(b,p)||x(b,p)):f==="data"?s.filter((b,p)=>{var N;let y=c.routes[b.route.id];if(!y||!y.hasLoader)return!1;if(g(b,p)||x(b,p))return!0;if(b.route.shouldRevalidate){let S=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((N=u[0])==null?void 0:N.params)||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function ax(r,s,{includeHydrateFallback:u}={}){return nx(r.map(c=>{let d=s.routes[c.route.id];if(!d)return[];let f=[d.module];return d.clientActionModule&&(f=f.concat(d.clientActionModule)),d.clientLoaderModule&&(f=f.concat(d.clientLoaderModule)),u&&d.hydrateFallbackModule&&(f=f.concat(d.hydrateFallbackModule)),d.imports&&(f=f.concat(d.imports)),f}).flat(1))}function nx(r){return[...new Set(r)]}function ix(r){let s={},u=Object.keys(r).sort();for(let c of u)s[c]=r[c];return s}function rx(r,s){let u=new Set;return new Set(s),r.reduce((c,d)=>{let f=JSON.stringify(ix(d));return u.has(f)||(u.add(f),c.push({key:f,link:d})),c},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var lx=new Set([100,101,204,205]);function ox(r,s){let u=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return u.pathname==="/"?u.pathname="_root.data":s&&ya(u.pathname,s)==="/"?u.pathname=`${s.replace(/\/$/,"")}/_root.data`:u.pathname=`${u.pathname.replace(/\/$/,"")}.data`,u}function Yp(){let r=v.useContext(gi);return hu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function sx(){let r=v.useContext(to);return hu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var xu=v.createContext(void 0);xu.displayName="FrameworkContext";function Up(){let r=v.useContext(xu);return hu(r,"You must render this element inside a <HydratedRouter> element"),r}function cx(r,s){let u=v.useContext(xu),[c,d]=v.useState(!1),[f,g]=v.useState(!1),{onFocus:x,onBlur:b,onMouseEnter:p,onMouseLeave:y,onTouchStart:N}=s,S=v.useRef(null);v.useEffect(()=>{if(r==="render"&&g(!0),r==="viewport"){let Q=_=>{_.forEach(C=>{g(C.isIntersecting)})},L=new IntersectionObserver(Q,{threshold:.5});return S.current&&L.observe(S.current),()=>{L.disconnect()}}},[r]),v.useEffect(()=>{if(c){let Q=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(Q)}}},[c]);let z=()=>{d(!0)},T=()=>{d(!1),g(!1)};return u?r!=="intent"?[f,S,{}]:[f,S,{onFocus:xr(x,z),onBlur:xr(b,T),onMouseEnter:xr(p,z),onMouseLeave:xr(y,T),onTouchStart:xr(N,z)}]:[!1,S,{}]}function xr(r,s){return u=>{r&&r(u),u.defaultPrevented||s(u)}}function ux({page:r,...s}){let{router:u}=Yp(),c=v.useMemo(()=>Ep(u.routes,r,u.basename),[u.routes,r,u.basename]);return c?v.createElement(fx,{page:r,matches:c,...s}):null}function dx(r){let{manifest:s,routeModules:u}=Up(),[c,d]=v.useState([]);return v.useEffect(()=>{let f=!1;return tx(r,s,u).then(g=>{f||d(g)}),()=>{f=!0}},[r,s,u]),c}function fx({page:r,matches:s,...u}){let c=tn(),{manifest:d,routeModules:f}=Up(),{basename:g}=Yp(),{loaderData:x,matches:b}=sx(),p=v.useMemo(()=>Dm(r,s,b,d,c,"data"),[r,s,b,d,c]),y=v.useMemo(()=>Dm(r,s,b,d,c,"assets"),[r,s,b,d,c]),N=v.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let T=new Set,Q=!1;if(s.forEach(_=>{var W;let C=d.routes[_.route.id];!C||!C.hasLoader||(!p.some(te=>te.route.id===_.route.id)&&_.route.id in x&&((W=f[_.route.id])!=null&&W.shouldRevalidate)||C.hasClientLoader?Q=!0:T.add(_.route.id))}),T.size===0)return[];let L=ox(r,g);return Q&&T.size>0&&L.searchParams.set("_routes",s.filter(_=>T.has(_.route.id)).map(_=>_.route.id).join(",")),[L.pathname+L.search]},[g,x,c,d,p,s,r,f]),S=v.useMemo(()=>ax(y,d),[y,d]),z=dx(y);return v.createElement(v.Fragment,null,N.map(T=>v.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...u})),S.map(T=>v.createElement("link",{key:T,rel:"modulepreload",href:T,...u})),z.map(({key:T,link:Q})=>v.createElement("link",{key:T,...Q})))}function mx(...r){return s=>{r.forEach(u=>{typeof u=="function"?u(s):u!=null&&(u.current=s)})}}var _p=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_p&&(window.__reactRouterVersion="7.6.2")}catch{}function px({basename:r,children:s,window:u}){let c=v.useRef();c.current==null&&(c.current=e2({window:u,v5Compat:!0}));let d=c.current,[f,g]=v.useState({action:d.action,location:d.location}),x=v.useCallback(b=>{v.startTransition(()=>g(b))},[g]);return v.useLayoutEffect(()=>d.listen(x),[d,x]),v.createElement(V2,{basename:r,children:s,location:f.location,navigationType:f.action,navigator:d})}var Hp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Za=v.forwardRef(function({onClick:s,discover:u="render",prefetch:c="none",relative:d,reloadDocument:f,replace:g,state:x,target:b,to:p,preventScrollReset:y,viewTransition:N,...S},z){let{basename:T}=v.useContext(aa),Q=typeof p=="string"&&Hp.test(p),L,_=!1;if(typeof p=="string"&&Q&&(L=p,_p))try{let M=new URL(window.location.href),fe=p.startsWith("//")?new URL(M.protocol+p):new URL(p),q=ya(fe.pathname,T);fe.origin===M.origin&&q!=null?p=q+fe.search+fe.hash:_=!0}catch{ta(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=N2(p,{relative:d}),[W,te,K]=cx(c,S),oe=bx(p,{replace:g,state:x,target:b,preventScrollReset:y,relative:d,viewTransition:N});function Y(M){s&&s(M),M.defaultPrevented||oe(M)}let $=v.createElement("a",{...S,...K,href:L||C,onClick:_||f?s:Y,ref:mx(z,te),target:b,"data-discover":!Q&&u==="render"?"true":void 0});return W&&!Q?v.createElement(v.Fragment,null,$,v.createElement(ux,{page:C})):$});Za.displayName="Link";var gx=v.forwardRef(function({"aria-current":s="page",caseSensitive:u=!1,className:c="",end:d=!1,style:f,to:g,viewTransition:x,children:b,...p},y){let N=Er(g,{relative:p.relative}),S=tn(),z=v.useContext(to),{navigator:T,basename:Q}=v.useContext(aa),L=z!=null&&jx(N)&&x===!0,_=T.encodeLocation?T.encodeLocation(N).pathname:N.pathname,C=S.pathname,W=z&&z.navigation&&z.navigation.location?z.navigation.location.pathname:null;u||(C=C.toLowerCase(),W=W?W.toLowerCase():null,_=_.toLowerCase()),W&&Q&&(W=ya(W,Q)||W);const te=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let K=C===_||!d&&C.startsWith(_)&&C.charAt(te)==="/",oe=W!=null&&(W===_||!d&&W.startsWith(_)&&W.charAt(_.length)==="/"),Y={isActive:K,isPending:oe,isTransitioning:L},$=K?s:void 0,M;typeof c=="function"?M=c(Y):M=[c,K?"active":null,oe?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let fe=typeof f=="function"?f(Y):f;return v.createElement(Za,{...p,"aria-current":$,className:M,ref:y,style:fe,to:g,viewTransition:x},typeof b=="function"?b(Y):b)});gx.displayName="NavLink";var hx=v.forwardRef(({discover:r="render",fetcherKey:s,navigate:u,reloadDocument:c,replace:d,state:f,method:g=Gl,action:x,onSubmit:b,relative:p,preventScrollReset:y,viewTransition:N,...S},z)=>{let T=wx(),Q=Sx(x,{relative:p}),L=g.toLowerCase()==="get"?"get":"post",_=typeof x=="string"&&Hp.test(x),C=W=>{if(b&&b(W),W.defaultPrevented)return;W.preventDefault();let te=W.nativeEvent.submitter,K=(te==null?void 0:te.getAttribute("formmethod"))||g;T(te||W.currentTarget,{fetcherKey:s,method:K,navigate:u,replace:d,state:f,relative:p,preventScrollReset:y,viewTransition:N})};return v.createElement("form",{ref:z,method:L,action:Q,onSubmit:c?b:C,...S,"data-discover":!_&&r==="render"?"true":void 0})});hx.displayName="Form";function xx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qp(r){let s=v.useContext(gi);return Qe(s,xx(r)),s}function bx(r,{target:s,replace:u,state:c,preventScrollReset:d,relative:f,viewTransition:g}={}){let x=T2(),b=tn(),p=Er(r,{relative:f});return v.useCallback(y=>{if(P2(y,s)){y.preventDefault();let N=u!==void 0?u:wr(b)===wr(p);x(r,{replace:N,state:c,preventScrollReset:d,relative:f,viewTransition:g})}},[b,x,p,u,c,s,r,d,f,g])}var yx=0,vx=()=>`__${String(++yx)}__`;function wx(){let{router:r}=qp("useSubmit"),{basename:s}=v.useContext(aa),u=_2();return v.useCallback(async(c,d={})=>{let{action:f,method:g,encType:x,formData:b,body:p}=J2(c,s);if(d.navigate===!1){let y=d.fetcherKey||vx();await r.fetch(y,u,d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||g,formEncType:d.encType||x,flushSync:d.flushSync})}else await r.navigate(d.action||f,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||g,formEncType:d.encType||x,replace:d.replace,state:d.state,fromRouteId:u,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,s,u])}function Sx(r,{relative:s}={}){let{basename:u}=v.useContext(aa),c=v.useContext(Sa);Qe(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),f={...Er(r||".",{relative:s})},g=tn();if(r==null){f.search=g.search;let x=new URLSearchParams(f.search),b=x.getAll("index");if(b.some(y=>y==="")){x.delete("index"),b.filter(N=>N).forEach(N=>x.append("index",N));let y=x.toString();f.search=y?`?${y}`:""}}return(!r||r===".")&&d.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),u!=="/"&&(f.pathname=f.pathname==="/"?u:ba([u,f.pathname])),wr(f)}function jx(r,s={}){let u=v.useContext(Mp);Qe(u!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=qp("useViewTransitionState"),d=Er(r,{relative:s.relative});if(!u.isTransitioning)return!1;let f=ya(u.currentLocation.pathname,c)||u.currentLocation.pathname,g=ya(u.nextLocation.pathname,c)||u.nextLocation.pathname;return Pl(d.pathname,g)!=null||Pl(d.pathname,f)!=null}[...lx];var Bm=Ap();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Cx(r,s,u){return(s=Ex(s))in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function Lm(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function P(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Lm(Object(u),!0).forEach(function(c){Cx(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):Lm(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function Ax(r,s){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function Ex(r){var s=Ax(r,"string");return typeof s=="symbol"?s:s+""}const Ym=()=>{};let bu={},Xp={},Vp=null,Ip={mark:Ym,measure:Ym};try{typeof window<"u"&&(bu=window),typeof document<"u"&&(Xp=document),typeof MutationObserver<"u"&&(Vp=MutationObserver),typeof performance<"u"&&(Ip=performance)}catch{}const{userAgent:Um=""}=bu.navigator||{},Ja=bu,qe=Xp,_m=Vp,Vl=Ip;Ja.document;const ja=!!qe.documentElement&&!!qe.head&&typeof qe.addEventListener=="function"&&typeof qe.createElement=="function",Gp=~Um.indexOf("MSIE")||~Um.indexOf("Trident/");var Nx=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Tx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},zx={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Fp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],pt="classic",no="duotone",kx="sharp",Rx="sharp-duotone",Wp=[pt,no,kx,Rx],Mx={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ox={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Dx=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Bx={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Lx=["fak","fa-kit","fakd","fa-kit-duotone"],Hm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Yx=["kit"],Ux={kit:{"fa-kit":"fak"}},_x=["fak","fakd"],Hx={kit:{fak:"fa-kit"}},qm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Il={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},qx=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Xx=["fak","fa-kit","fakd","fa-kit-duotone"],Vx={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ix={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Gx={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Qc={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Qx=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Fc=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...qx,...Qx],Fx=["solid","regular","light","thin","duotone","brands"],Pp=[1,2,3,4,5,6,7,8,9,10],Wx=Pp.concat([11,12,13,14,15,16,17,18,19,20]),Px=[...Object.keys(Gx),...Fx,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Il.GROUP,Il.SWAP_OPACITY,Il.PRIMARY,Il.SECONDARY].concat(Pp.map(r=>"".concat(r,"x"))).concat(Wx.map(r=>"w-".concat(r))),Zx={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const va="___FONT_AWESOME___",Wc=16,Zp="fa",Kp="svg-inline--fa",jn="data-fa-i2svg",Pc="data-fa-pseudo-element",Kx="data-fa-pseudo-element-pending",yu="data-prefix",vu="data-icon",Xm="fontawesome-i2svg",Jx="async",$x=["HTML","HEAD","STYLE","SCRIPT"],Jp=(()=>{try{return!0}catch{return!1}})();function Nr(r){return new Proxy(r,{get(s,u){return u in s?s[u]:s[pt]}})}const $p=P({},Qp);$p[pt]=P(P(P(P({},{"fa-duotone":"duotone"}),Qp[pt]),Hm.kit),Hm["kit-duotone"]);const eb=Nr($p),Zc=P({},Bx);Zc[pt]=P(P(P(P({},{duotone:"fad"}),Zc[pt]),qm.kit),qm["kit-duotone"]);const Vm=Nr(Zc),Kc=P({},Qc);Kc[pt]=P(P({},Kc[pt]),Hx.kit);const wu=Nr(Kc),Jc=P({},Ix);Jc[pt]=P(P({},Jc[pt]),Ux.kit);Nr(Jc);const tb=Nx,eg="fa-layers-text",ab=Tx,nb=P({},Mx);Nr(nb);const ib=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kc=zx,rb=[...Yx,...Px],yr=Ja.FontAwesomeConfig||{};function lb(r){var s=qe.querySelector("script["+r+"]");if(s)return s.getAttribute(r)}function ob(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}qe&&typeof qe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(s=>{let[u,c]=s;const d=ob(lb(u));d!=null&&(yr[c]=d)});const tg={styleDefault:"solid",familyDefault:pt,cssPrefix:Zp,replacementClass:Kp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yr.familyPrefix&&(yr.cssPrefix=yr.familyPrefix);const mi=P(P({},tg),yr);mi.autoReplaceSvg||(mi.observeMutations=!1);const ue={};Object.keys(tg).forEach(r=>{Object.defineProperty(ue,r,{enumerable:!0,set:function(s){mi[r]=s,vr.forEach(u=>u(ue))},get:function(){return mi[r]}})});Object.defineProperty(ue,"familyPrefix",{enumerable:!0,set:function(r){mi.cssPrefix=r,vr.forEach(s=>s(ue))},get:function(){return mi.cssPrefix}});Ja.FontAwesomeConfig=ue;const vr=[];function sb(r){return vr.push(r),()=>{vr.splice(vr.indexOf(r),1)}}const Wa=Wc,Jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cb(r){if(!r||!ja)return;const s=qe.createElement("style");s.setAttribute("type","text/css"),s.innerHTML=r;const u=qe.head.childNodes;let c=null;for(let d=u.length-1;d>-1;d--){const f=u[d],g=(f.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(g)>-1&&(c=f)}return qe.head.insertBefore(s,c),r}const ub="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Sr(){let r=12,s="";for(;r-- >0;)s+=ub[Math.random()*62|0];return s}function hi(r){const s=[];for(let u=(r||[]).length>>>0;u--;)s[u]=r[u];return s}function Su(r){return r.classList?hi(r.classList):(r.getAttribute("class")||"").split(" ").filter(s=>s)}function ag(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function db(r){return Object.keys(r||{}).reduce((s,u)=>s+"".concat(u,'="').concat(ag(r[u]),'" '),"").trim()}function io(r){return Object.keys(r||{}).reduce((s,u)=>s+"".concat(u,": ").concat(r[u].trim(),";"),"")}function ju(r){return r.size!==Jt.size||r.x!==Jt.x||r.y!==Jt.y||r.rotate!==Jt.rotate||r.flipX||r.flipY}function fb(r){let{transform:s,containerWidth:u,iconWidth:c}=r;const d={transform:"translate(".concat(u/2," 256)")},f="translate(".concat(s.x*32,", ").concat(s.y*32,") "),g="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),x="rotate(".concat(s.rotate," 0 0)"),b={transform:"".concat(f," ").concat(g," ").concat(x)},p={transform:"translate(".concat(c/2*-1," -256)")};return{outer:d,inner:b,path:p}}function mb(r){let{transform:s,width:u=Wc,height:c=Wc,startCentered:d=!1}=r,f="";return d&&Gp?f+="translate(".concat(s.x/Wa-u/2,"em, ").concat(s.y/Wa-c/2,"em) "):d?f+="translate(calc(-50% + ".concat(s.x/Wa,"em), calc(-50% + ").concat(s.y/Wa,"em)) "):f+="translate(".concat(s.x/Wa,"em, ").concat(s.y/Wa,"em) "),f+="scale(".concat(s.size/Wa*(s.flipX?-1:1),", ").concat(s.size/Wa*(s.flipY?-1:1),") "),f+="rotate(".concat(s.rotate,"deg) "),f}var pb=`:root, :host {
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
}`;function ng(){const r=Zp,s=Kp,u=ue.cssPrefix,c=ue.replacementClass;let d=pb;if(u!==r||c!==s){const f=new RegExp("\\.".concat(r,"\\-"),"g"),g=new RegExp("\\--".concat(r,"\\-"),"g"),x=new RegExp("\\.".concat(s),"g");d=d.replace(f,".".concat(u,"-")).replace(g,"--".concat(u,"-")).replace(x,".".concat(c))}return d}let Im=!1;function Rc(){ue.autoAddCss&&!Im&&(cb(ng()),Im=!0)}var gb={mixout(){return{dom:{css:ng,insertCss:Rc}}},hooks(){return{beforeDOMElementCreation(){Rc()},beforeI2svg(){Rc()}}}};const wa=Ja||{};wa[va]||(wa[va]={});wa[va].styles||(wa[va].styles={});wa[va].hooks||(wa[va].hooks={});wa[va].shims||(wa[va].shims=[]);var $t=wa[va];const ig=[],rg=function(){qe.removeEventListener("DOMContentLoaded",rg),Zl=1,ig.map(r=>r())};let Zl=!1;ja&&(Zl=(qe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(qe.readyState),Zl||qe.addEventListener("DOMContentLoaded",rg));function hb(r){ja&&(Zl?setTimeout(r,0):ig.push(r))}function Tr(r){const{tag:s,attributes:u={},children:c=[]}=r;return typeof r=="string"?ag(r):"<".concat(s," ").concat(db(u),">").concat(c.map(Tr).join(""),"</").concat(s,">")}function Gm(r,s,u){if(r&&r[s]&&r[s][u])return{prefix:s,iconName:u,icon:r[s][u]}}var Mc=function(s,u,c,d){var f=Object.keys(s),g=f.length,x=u,b,p,y;for(c===void 0?(b=1,y=s[f[0]]):(b=0,y=c);b<g;b++)p=f[b],y=x(y,s[p],p,s);return y};function xb(r){const s=[];let u=0;const c=r.length;for(;u<c;){const d=r.charCodeAt(u++);if(d>=55296&&d<=56319&&u<c){const f=r.charCodeAt(u++);(f&64512)==56320?s.push(((d&1023)<<10)+(f&1023)+65536):(s.push(d),u--)}else s.push(d)}return s}function $c(r){const s=xb(r);return s.length===1?s[0].toString(16):null}function bb(r,s){const u=r.length;let c=r.charCodeAt(s),d;return c>=55296&&c<=56319&&u>s+1&&(d=r.charCodeAt(s+1),d>=56320&&d<=57343)?(c-55296)*1024+d-56320+65536:c}function Qm(r){return Object.keys(r).reduce((s,u)=>{const c=r[u];return!!c.icon?s[c.iconName]=c.icon:s[u]=c,s},{})}function eu(r,s){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:c=!1}=u,d=Qm(s);typeof $t.hooks.addPack=="function"&&!c?$t.hooks.addPack(r,Qm(s)):$t.styles[r]=P(P({},$t.styles[r]||{}),d),r==="fas"&&eu("fa",s)}const{styles:jr,shims:yb}=$t,lg=Object.keys(wu),vb=lg.reduce((r,s)=>(r[s]=Object.keys(wu[s]),r),{});let Cu=null,og={},sg={},cg={},ug={},dg={};function wb(r){return~rb.indexOf(r)}function Sb(r,s){const u=s.split("-"),c=u[0],d=u.slice(1).join("-");return c===r&&d!==""&&!wb(d)?d:null}const fg=()=>{const r=c=>Mc(jr,(d,f,g)=>(d[g]=Mc(f,c,{}),d),{});og=r((c,d,f)=>(d[3]&&(c[d[3]]=f),d[2]&&d[2].filter(x=>typeof x=="number").forEach(x=>{c[x.toString(16)]=f}),c)),sg=r((c,d,f)=>(c[f]=f,d[2]&&d[2].filter(x=>typeof x=="string").forEach(x=>{c[x]=f}),c)),dg=r((c,d,f)=>{const g=d[2];return c[f]=f,g.forEach(x=>{c[x]=f}),c});const s="far"in jr||ue.autoFetchSvg,u=Mc(yb,(c,d)=>{const f=d[0];let g=d[1];const x=d[2];return g==="far"&&!s&&(g="fas"),typeof f=="string"&&(c.names[f]={prefix:g,iconName:x}),typeof f=="number"&&(c.unicodes[f.toString(16)]={prefix:g,iconName:x}),c},{names:{},unicodes:{}});cg=u.names,ug=u.unicodes,Cu=ro(ue.styleDefault,{family:ue.familyDefault})};sb(r=>{Cu=ro(r.styleDefault,{family:ue.familyDefault})});fg();function Au(r,s){return(og[r]||{})[s]}function jb(r,s){return(sg[r]||{})[s]}function Sn(r,s){return(dg[r]||{})[s]}function mg(r){return cg[r]||{prefix:null,iconName:null}}function Cb(r){const s=ug[r],u=Au("fas",r);return s||(u?{prefix:"fas",iconName:u}:null)||{prefix:null,iconName:null}}function $a(){return Cu}const pg=()=>({prefix:null,iconName:null,rest:[]});function Ab(r){let s=pt;const u=lg.reduce((c,d)=>(c[d]="".concat(ue.cssPrefix,"-").concat(d),c),{});return Wp.forEach(c=>{(r.includes(u[c])||r.some(d=>vb[c].includes(d)))&&(s=c)}),s}function ro(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:u=pt}=s,c=eb[u][r];if(u===no&&!r)return"fad";const d=Vm[u][r]||Vm[u][c],f=r in $t.styles?r:null;return d||f||null}function Eb(r){let s=[],u=null;return r.forEach(c=>{const d=Sb(ue.cssPrefix,c);d?u=d:c&&s.push(c)}),{iconName:u,rest:s}}function Fm(r){return r.sort().filter((s,u,c)=>c.indexOf(s)===u)}function lo(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:u=!1}=s;let c=null;const d=Fc.concat(Xx),f=Fm(r.filter(N=>d.includes(N))),g=Fm(r.filter(N=>!Fc.includes(N))),x=f.filter(N=>(c=N,!Fp.includes(N))),[b=null]=x,p=Ab(f),y=P(P({},Eb(g)),{},{prefix:ro(b,{family:p})});return P(P(P({},y),kb({values:r,family:p,styles:jr,config:ue,canonical:y,givenPrefix:c})),Nb(u,c,y))}function Nb(r,s,u){let{prefix:c,iconName:d}=u;if(r||!c||!d)return{prefix:c,iconName:d};const f=s==="fa"?mg(d):{},g=Sn(c,d);return d=f.iconName||g||d,c=f.prefix||c,c==="far"&&!jr.far&&jr.fas&&!ue.autoFetchSvg&&(c="fas"),{prefix:c,iconName:d}}const Tb=Wp.filter(r=>r!==pt||r!==no),zb=Object.keys(Qc).filter(r=>r!==pt).map(r=>Object.keys(Qc[r])).flat();function kb(r){const{values:s,family:u,canonical:c,givenPrefix:d="",styles:f={},config:g={}}=r,x=u===no,b=s.includes("fa-duotone")||s.includes("fad"),p=g.familyDefault==="duotone",y=c.prefix==="fad"||c.prefix==="fa-duotone";if(!x&&(b||p||y)&&(c.prefix="fad"),(s.includes("fa-brands")||s.includes("fab"))&&(c.prefix="fab"),!c.prefix&&Tb.includes(u)&&(Object.keys(f).find(S=>zb.includes(S))||g.autoFetchSvg)){const S=Dx.get(u).defaultShortPrefixId;c.prefix=S,c.iconName=Sn(c.prefix,c.iconName)||c.iconName}return(c.prefix==="fa"||d==="fa")&&(c.prefix=$a()||"fas"),c}class Rb{constructor(){this.definitions={}}add(){for(var s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];const d=u.reduce(this._pullDefinitions,{});Object.keys(d).forEach(f=>{this.definitions[f]=P(P({},this.definitions[f]||{}),d[f]),eu(f,d[f]);const g=wu[pt][f];g&&eu(g,d[f]),fg()})}reset(){this.definitions={}}_pullDefinitions(s,u){const c=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(c).map(d=>{const{prefix:f,iconName:g,icon:x}=c[d],b=x[2];s[f]||(s[f]={}),b.length>0&&b.forEach(p=>{typeof p=="string"&&(s[f][p]=x)}),s[f][g]=x}),s}}let Wm=[],ui={};const fi={},Mb=Object.keys(fi);function Ob(r,s){let{mixoutsTo:u}=s;return Wm=r,ui={},Object.keys(fi).forEach(c=>{Mb.indexOf(c)===-1&&delete fi[c]}),Wm.forEach(c=>{const d=c.mixout?c.mixout():{};if(Object.keys(d).forEach(f=>{typeof d[f]=="function"&&(u[f]=d[f]),typeof d[f]=="object"&&Object.keys(d[f]).forEach(g=>{u[f]||(u[f]={}),u[f][g]=d[f][g]})}),c.hooks){const f=c.hooks();Object.keys(f).forEach(g=>{ui[g]||(ui[g]=[]),ui[g].push(f[g])})}c.provides&&c.provides(fi)}),u}function tu(r,s){for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];return(ui[r]||[]).forEach(g=>{s=g.apply(null,[s,...c])}),s}function Cn(r){for(var s=arguments.length,u=new Array(s>1?s-1:0),c=1;c<s;c++)u[c-1]=arguments[c];(ui[r]||[]).forEach(f=>{f.apply(null,u)})}function en(){const r=arguments[0],s=Array.prototype.slice.call(arguments,1);return fi[r]?fi[r].apply(null,s):void 0}function au(r){r.prefix==="fa"&&(r.prefix="fas");let{iconName:s}=r;const u=r.prefix||$a();if(s)return s=Sn(u,s)||s,Gm(gg.definitions,u,s)||Gm($t.styles,u,s)}const gg=new Rb,Db=()=>{ue.autoReplaceSvg=!1,ue.observeMutations=!1,Cn("noAuto")},Bb={i2svg:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ja?(Cn("beforeI2svg",r),en("pseudoElements2svg",r),en("i2svg",r)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s}=r;ue.autoReplaceSvg===!1&&(ue.autoReplaceSvg=!0),ue.observeMutations=!0,hb(()=>{Yb({autoReplaceSvgRoot:s}),Cn("watch",r)})}},Lb={icon:r=>{if(r===null)return null;if(typeof r=="object"&&r.prefix&&r.iconName)return{prefix:r.prefix,iconName:Sn(r.prefix,r.iconName)||r.iconName};if(Array.isArray(r)&&r.length===2){const s=r[1].indexOf("fa-")===0?r[1].slice(3):r[1],u=ro(r[0]);return{prefix:u,iconName:Sn(u,s)||s}}if(typeof r=="string"&&(r.indexOf("".concat(ue.cssPrefix,"-"))>-1||r.match(tb))){const s=lo(r.split(" "),{skipLookups:!0});return{prefix:s.prefix||$a(),iconName:Sn(s.prefix,s.iconName)||s.iconName}}if(typeof r=="string"){const s=$a();return{prefix:s,iconName:Sn(s,r)||r}}}},Rt={noAuto:Db,config:ue,dom:Bb,parse:Lb,library:gg,findIconDefinition:au,toHtml:Tr},Yb=function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:s=qe}=r;(Object.keys($t.styles).length>0||ue.autoFetchSvg)&&ja&&ue.autoReplaceSvg&&Rt.dom.i2svg({node:s})};function oo(r,s){return Object.defineProperty(r,"abstract",{get:s}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(u=>Tr(u))}}),Object.defineProperty(r,"node",{get:function(){if(!ja)return;const u=qe.createElement("div");return u.innerHTML=r.html,u.children}}),r}function Ub(r){let{children:s,main:u,mask:c,attributes:d,styles:f,transform:g}=r;if(ju(g)&&u.found&&!c.found){const{width:x,height:b}=u,p={x:x/b/2,y:.5};d.style=io(P(P({},f),{},{"transform-origin":"".concat(p.x+g.x/16,"em ").concat(p.y+g.y/16,"em")}))}return[{tag:"svg",attributes:d,children:s}]}function _b(r){let{prefix:s,iconName:u,children:c,attributes:d,symbol:f}=r;const g=f===!0?"".concat(s,"-").concat(ue.cssPrefix,"-").concat(u):f;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},d),{},{id:g}),children:c}]}]}function Eu(r){const{icons:{main:s,mask:u},prefix:c,iconName:d,transform:f,symbol:g,title:x,maskId:b,titleId:p,extra:y,watchable:N=!1}=r,{width:S,height:z}=u.found?u:s,T=_x.includes(c),Q=[ue.replacementClass,d?"".concat(ue.cssPrefix,"-").concat(d):""].filter(K=>y.classes.indexOf(K)===-1).filter(K=>K!==""||!!K).concat(y.classes).join(" ");let L={children:[],attributes:P(P({},y.attributes),{},{"data-prefix":c,"data-icon":d,class:Q,role:y.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(z)})};const _=T&&!~y.classes.indexOf("fa-fw")?{width:"".concat(S/z*16*.0625,"em")}:{};N&&(L.attributes[jn]=""),x&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(p||Sr())},children:[x]}),delete L.attributes.title);const C=P(P({},L),{},{prefix:c,iconName:d,main:s,mask:u,maskId:b,transform:f,symbol:g,styles:P(P({},_),y.styles)}),{children:W,attributes:te}=u.found&&s.found?en("generateAbstractMask",C)||{children:[],attributes:{}}:en("generateAbstractIcon",C)||{children:[],attributes:{}};return C.children=W,C.attributes=te,g?_b(C):Ub(C)}function Pm(r){const{content:s,width:u,height:c,transform:d,title:f,extra:g,watchable:x=!1}=r,b=P(P(P({},g.attributes),f?{title:f}:{}),{},{class:g.classes.join(" ")});x&&(b[jn]="");const p=P({},g.styles);ju(d)&&(p.transform=mb({transform:d,startCentered:!0,width:u,height:c}),p["-webkit-transform"]=p.transform);const y=io(p);y.length>0&&(b.style=y);const N=[];return N.push({tag:"span",attributes:b,children:[s]}),f&&N.push({tag:"span",attributes:{class:"sr-only"},children:[f]}),N}function Hb(r){const{content:s,title:u,extra:c}=r,d=P(P(P({},c.attributes),u?{title:u}:{}),{},{class:c.classes.join(" ")}),f=io(c.styles);f.length>0&&(d.style=f);const g=[];return g.push({tag:"span",attributes:d,children:[s]}),u&&g.push({tag:"span",attributes:{class:"sr-only"},children:[u]}),g}const{styles:Oc}=$t;function nu(r){const s=r[0],u=r[1],[c]=r.slice(4);let d=null;return Array.isArray(c)?d={tag:"g",attributes:{class:"".concat(ue.cssPrefix,"-").concat(kc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(kc.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(ue.cssPrefix,"-").concat(kc.PRIMARY),fill:"currentColor",d:c[1]}}]}:d={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:s,height:u,icon:d}}const qb={found:!1,width:512,height:512};function Xb(r,s){!Jp&&!ue.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(s,'" is missing.'))}function iu(r,s){let u=s;return s==="fa"&&ue.styleDefault!==null&&(s=$a()),new Promise((c,d)=>{if(u==="fa"){const f=mg(r)||{};r=f.iconName||r,s=f.prefix||s}if(r&&s&&Oc[s]&&Oc[s][r]){const f=Oc[s][r];return c(nu(f))}Xb(r,s),c(P(P({},qb),{},{icon:ue.showMissingIcons&&r?en("missingIconAbstract")||{}:{}}))})}const Zm=()=>{},ru=ue.measurePerformance&&Vl&&Vl.mark&&Vl.measure?Vl:{mark:Zm,measure:Zm},br='FA "6.7.2"',Vb=r=>(ru.mark("".concat(br," ").concat(r," begins")),()=>hg(r)),hg=r=>{ru.mark("".concat(br," ").concat(r," ends")),ru.measure("".concat(br," ").concat(r),"".concat(br," ").concat(r," begins"),"".concat(br," ").concat(r," ends"))};var Nu={begin:Vb,end:hg};const Fl=()=>{};function Km(r){return typeof(r.getAttribute?r.getAttribute(jn):null)=="string"}function Ib(r){const s=r.getAttribute?r.getAttribute(yu):null,u=r.getAttribute?r.getAttribute(vu):null;return s&&u}function Gb(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(ue.replacementClass)}function Qb(){return ue.autoReplaceSvg===!0?Wl.replace:Wl[ue.autoReplaceSvg]||Wl.replace}function Fb(r){return qe.createElementNS("http://www.w3.org/2000/svg",r)}function Wb(r){return qe.createElement(r)}function xg(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:u=r.tag==="svg"?Fb:Wb}=s;if(typeof r=="string")return qe.createTextNode(r);const c=u(r.tag);return Object.keys(r.attributes||[]).forEach(function(f){c.setAttribute(f,r.attributes[f])}),(r.children||[]).forEach(function(f){c.appendChild(xg(f,{ceFn:u}))}),c}function Pb(r){let s=" ".concat(r.outerHTML," ");return s="".concat(s,"Font Awesome fontawesome.com "),s}const Wl={replace:function(r){const s=r[0];if(s.parentNode)if(r[1].forEach(u=>{s.parentNode.insertBefore(xg(u),s)}),s.getAttribute(jn)===null&&ue.keepOriginalSource){let u=qe.createComment(Pb(s));s.parentNode.replaceChild(u,s)}else s.remove()},nest:function(r){const s=r[0],u=r[1];if(~Su(s).indexOf(ue.replacementClass))return Wl.replace(r);const c=new RegExp("".concat(ue.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){const f=u[0].attributes.class.split(" ").reduce((g,x)=>(x===ue.replacementClass||x.match(c)?g.toSvg.push(x):g.toNode.push(x),g),{toNode:[],toSvg:[]});u[0].attributes.class=f.toSvg.join(" "),f.toNode.length===0?s.removeAttribute("class"):s.setAttribute("class",f.toNode.join(" "))}const d=u.map(f=>Tr(f)).join(`
`);s.setAttribute(jn,""),s.innerHTML=d}};function Jm(r){r()}function bg(r,s){const u=typeof s=="function"?s:Fl;if(r.length===0)u();else{let c=Jm;ue.mutateApproach===Jx&&(c=Ja.requestAnimationFrame||Jm),c(()=>{const d=Qb(),f=Nu.begin("mutate");r.map(d),f(),u()})}}let Tu=!1;function yg(){Tu=!0}function lu(){Tu=!1}let Kl=null;function $m(r){if(!_m||!ue.observeMutations)return;const{treeCallback:s=Fl,nodeCallback:u=Fl,pseudoElementsCallback:c=Fl,observeMutationsRoot:d=qe}=r;Kl=new _m(f=>{if(Tu)return;const g=$a();hi(f).forEach(x=>{if(x.type==="childList"&&x.addedNodes.length>0&&!Km(x.addedNodes[0])&&(ue.searchPseudoElements&&c(x.target),s(x.target)),x.type==="attributes"&&x.target.parentNode&&ue.searchPseudoElements&&c(x.target.parentNode),x.type==="attributes"&&Km(x.target)&&~ib.indexOf(x.attributeName))if(x.attributeName==="class"&&Ib(x.target)){const{prefix:b,iconName:p}=lo(Su(x.target));x.target.setAttribute(yu,b||g),p&&x.target.setAttribute(vu,p)}else Gb(x.target)&&u(x.target)})}),ja&&Kl.observe(d,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Zb(){Kl&&Kl.disconnect()}function Kb(r){const s=r.getAttribute("style");let u=[];return s&&(u=s.split(";").reduce((c,d)=>{const f=d.split(":"),g=f[0],x=f.slice(1);return g&&x.length>0&&(c[g]=x.join(":").trim()),c},{})),u}function Jb(r){const s=r.getAttribute("data-prefix"),u=r.getAttribute("data-icon"),c=r.innerText!==void 0?r.innerText.trim():"";let d=lo(Su(r));return d.prefix||(d.prefix=$a()),s&&u&&(d.prefix=s,d.iconName=u),d.iconName&&d.prefix||(d.prefix&&c.length>0&&(d.iconName=jb(d.prefix,r.innerText)||Au(d.prefix,$c(r.innerText))),!d.iconName&&ue.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(d.iconName=r.firstChild.data)),d}function $b(r){const s=hi(r.attributes).reduce((d,f)=>(d.name!=="class"&&d.name!=="style"&&(d[f.name]=f.value),d),{}),u=r.getAttribute("title"),c=r.getAttribute("data-fa-title-id");return ue.autoA11y&&(u?s["aria-labelledby"]="".concat(ue.replacementClass,"-title-").concat(c||Sr()):(s["aria-hidden"]="true",s.focusable="false")),s}function ey(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ep(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:u,prefix:c,rest:d}=Jb(r),f=$b(r),g=tu("parseNodeAttributes",{},r);let x=s.styleParser?Kb(r):[];return P({iconName:u,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:c,transform:Jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:d,styles:x,attributes:f}},g)}const{styles:ty}=$t;function vg(r){const s=ue.autoReplaceSvg==="nest"?ep(r,{styleParser:!1}):ep(r);return~s.extra.classes.indexOf(eg)?en("generateLayersText",r,s):en("generateSvgReplacementMutation",r,s)}function ay(){return[...Lx,...Fc]}function tp(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ja)return Promise.resolve();const u=qe.documentElement.classList,c=y=>u.add("".concat(Xm,"-").concat(y)),d=y=>u.remove("".concat(Xm,"-").concat(y)),f=ue.autoFetchSvg?ay():Fp.concat(Object.keys(ty));f.includes("fa")||f.push("fa");const g=[".".concat(eg,":not([").concat(jn,"])")].concat(f.map(y=>".".concat(y,":not([").concat(jn,"])"))).join(", ");if(g.length===0)return Promise.resolve();let x=[];try{x=hi(r.querySelectorAll(g))}catch{}if(x.length>0)c("pending"),d("complete");else return Promise.resolve();const b=Nu.begin("onTree"),p=x.reduce((y,N)=>{try{const S=vg(N);S&&y.push(S)}catch(S){Jp||S.name==="MissingIcon"&&console.error(S)}return y},[]);return new Promise((y,N)=>{Promise.all(p).then(S=>{bg(S,()=>{c("active"),c("complete"),d("pending"),typeof s=="function"&&s(),b(),y()})}).catch(S=>{b(),N(S)})})}function ny(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vg(r).then(u=>{u&&bg([u],s)})}function iy(r){return function(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const c=(s||{}).icon?s:au(s||{});let{mask:d}=u;return d&&(d=(d||{}).icon?d:au(d||{})),r(c,P(P({},u),{},{mask:d}))}}const ry=function(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Jt,symbol:c=!1,mask:d=null,maskId:f=null,title:g=null,titleId:x=null,classes:b=[],attributes:p={},styles:y={}}=s;if(!r)return;const{prefix:N,iconName:S,icon:z}=r;return oo(P({type:"icon"},r),()=>(Cn("beforeDOMElementCreation",{iconDefinition:r,params:s}),ue.autoA11y&&(g?p["aria-labelledby"]="".concat(ue.replacementClass,"-title-").concat(x||Sr()):(p["aria-hidden"]="true",p.focusable="false")),Eu({icons:{main:nu(z),mask:d?nu(d.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:S,transform:P(P({},Jt),u),symbol:c,title:g,maskId:f,titleId:x,extra:{attributes:p,styles:y,classes:b}})))};var ly={mixout(){return{icon:iy(ry)}},hooks(){return{mutationObserverCallbacks(r){return r.treeCallback=tp,r.nodeCallback=ny,r}}},provides(r){r.i2svg=function(s){const{node:u=qe,callback:c=()=>{}}=s;return tp(u,c)},r.generateSvgReplacementMutation=function(s,u){const{iconName:c,title:d,titleId:f,prefix:g,transform:x,symbol:b,mask:p,maskId:y,extra:N}=u;return new Promise((S,z)=>{Promise.all([iu(c,g),p.iconName?iu(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[Q,L]=T;S([s,Eu({icons:{main:Q,mask:L},prefix:g,iconName:c,transform:x,symbol:b,maskId:y,title:d,titleId:f,extra:N,watchable:!0})])}).catch(z)})},r.generateAbstractIcon=function(s){let{children:u,attributes:c,main:d,transform:f,styles:g}=s;const x=io(g);x.length>0&&(c.style=x);let b;return ju(f)&&(b=en("generateAbstractTransformGrouping",{main:d,transform:f,containerWidth:d.width,iconWidth:d.width})),u.push(b||d.icon),{children:u,attributes:c}}}},oy={mixout(){return{layer(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:u=[]}=s;return oo({type:"layer"},()=>{Cn("beforeDOMElementCreation",{assembler:r,params:s});let c=[];return r(d=>{Array.isArray(d)?d.map(f=>{c=c.concat(f.abstract)}):c=c.concat(d.abstract)}),[{tag:"span",attributes:{class:["".concat(ue.cssPrefix,"-layers"),...u].join(" ")},children:c}]})}}}},sy={mixout(){return{counter(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:u=null,classes:c=[],attributes:d={},styles:f={}}=s;return oo({type:"counter",content:r},()=>(Cn("beforeDOMElementCreation",{content:r,params:s}),Hb({content:r.toString(),title:u,extra:{attributes:d,styles:f,classes:["".concat(ue.cssPrefix,"-layers-counter"),...c]}})))}}}},cy={mixout(){return{text(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:u=Jt,title:c=null,classes:d=[],attributes:f={},styles:g={}}=s;return oo({type:"text",content:r},()=>(Cn("beforeDOMElementCreation",{content:r,params:s}),Pm({content:r,transform:P(P({},Jt),u),title:c,extra:{attributes:f,styles:g,classes:["".concat(ue.cssPrefix,"-layers-text"),...d]}})))}}},provides(r){r.generateLayersText=function(s,u){const{title:c,transform:d,extra:f}=u;let g=null,x=null;if(Gp){const b=parseInt(getComputedStyle(s).fontSize,10),p=s.getBoundingClientRect();g=p.width/b,x=p.height/b}return ue.autoA11y&&!c&&(f.attributes["aria-hidden"]="true"),Promise.resolve([s,Pm({content:s.innerHTML,width:g,height:x,transform:d,title:c,extra:f,watchable:!0})])}}};const uy=new RegExp('"',"ug"),ap=[1105920,1112319],np=P(P(P(P({},{FontAwesome:{normal:"fas",400:"fas"}}),Ox),Zx),Vx),ou=Object.keys(np).reduce((r,s)=>(r[s.toLowerCase()]=np[s],r),{}),dy=Object.keys(ou).reduce((r,s)=>{const u=ou[s];return r[s]=u[900]||[...Object.entries(u)][0][1],r},{});function fy(r){const s=r.replace(uy,""),u=bb(s,0),c=u>=ap[0]&&u<=ap[1],d=s.length===2?s[0]===s[1]:!1;return{value:$c(d?s[0]:s),isSecondary:c||d}}function my(r,s){const u=r.replace(/^['"]|['"]$/g,"").toLowerCase(),c=parseInt(s),d=isNaN(c)?"normal":c;return(ou[u]||{})[d]||dy[u]}function ip(r,s){const u="".concat(Kx).concat(s.replace(":","-"));return new Promise((c,d)=>{if(r.getAttribute(u)!==null)return c();const g=hi(r.children).filter(S=>S.getAttribute(Pc)===s)[0],x=Ja.getComputedStyle(r,s),b=x.getPropertyValue("font-family"),p=b.match(ab),y=x.getPropertyValue("font-weight"),N=x.getPropertyValue("content");if(g&&!p)return r.removeChild(g),c();if(p&&N!=="none"&&N!==""){const S=x.getPropertyValue("content");let z=my(b,y);const{value:T,isSecondary:Q}=fy(S),L=p[0].startsWith("FontAwesome");let _=Au(z,T),C=_;if(L){const W=Cb(T);W.iconName&&W.prefix&&(_=W.iconName,z=W.prefix)}if(_&&!Q&&(!g||g.getAttribute(yu)!==z||g.getAttribute(vu)!==C)){r.setAttribute(u,C),g&&r.removeChild(g);const W=ey(),{extra:te}=W;te.attributes[Pc]=s,iu(_,z).then(K=>{const oe=Eu(P(P({},W),{},{icons:{main:K,mask:pg()},prefix:z,iconName:C,extra:te,watchable:!0})),Y=qe.createElementNS("http://www.w3.org/2000/svg","svg");s==="::before"?r.insertBefore(Y,r.firstChild):r.appendChild(Y),Y.outerHTML=oe.map($=>Tr($)).join(`
`),r.removeAttribute(u),c()}).catch(d)}else c()}else c()})}function py(r){return Promise.all([ip(r,"::before"),ip(r,"::after")])}function gy(r){return r.parentNode!==document.head&&!~$x.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(Pc)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function rp(r){if(ja)return new Promise((s,u)=>{const c=hi(r.querySelectorAll("*")).filter(gy).map(py),d=Nu.begin("searchPseudoElements");yg(),Promise.all(c).then(()=>{d(),lu(),s()}).catch(()=>{d(),lu(),u()})})}var hy={hooks(){return{mutationObserverCallbacks(r){return r.pseudoElementsCallback=rp,r}}},provides(r){r.pseudoElements2svg=function(s){const{node:u=qe}=s;ue.searchPseudoElements&&rp(u)}}};let lp=!1;var xy={mixout(){return{dom:{unwatch(){yg(),lp=!0}}}},hooks(){return{bootstrap(){$m(tu("mutationObserverCallbacks",{}))},noAuto(){Zb()},watch(r){const{observeMutationsRoot:s}=r;lp?lu():$m(tu("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}};const op=r=>{let s={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return r.toLowerCase().split(" ").reduce((u,c)=>{const d=c.toLowerCase().split("-"),f=d[0];let g=d.slice(1).join("-");if(f&&g==="h")return u.flipX=!0,u;if(f&&g==="v")return u.flipY=!0,u;if(g=parseFloat(g),isNaN(g))return u;switch(f){case"grow":u.size=u.size+g;break;case"shrink":u.size=u.size-g;break;case"left":u.x=u.x-g;break;case"right":u.x=u.x+g;break;case"up":u.y=u.y-g;break;case"down":u.y=u.y+g;break;case"rotate":u.rotate=u.rotate+g;break}return u},s)};var by={mixout(){return{parse:{transform:r=>op(r)}}},hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-transform");return u&&(r.transform=op(u)),r}}},provides(r){r.generateAbstractTransformGrouping=function(s){let{main:u,transform:c,containerWidth:d,iconWidth:f}=s;const g={transform:"translate(".concat(d/2," 256)")},x="translate(".concat(c.x*32,", ").concat(c.y*32,") "),b="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),p="rotate(".concat(c.rotate," 0 0)"),y={transform:"".concat(x," ").concat(b," ").concat(p)},N={transform:"translate(".concat(f/2*-1," -256)")},S={outer:g,inner:y,path:N};return{tag:"g",attributes:P({},S.outer),children:[{tag:"g",attributes:P({},S.inner),children:[{tag:u.icon.tag,children:u.icon.children,attributes:P(P({},u.icon.attributes),S.path)}]}]}}}};const Dc={x:0,y:0,width:"100%",height:"100%"};function sp(r){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||s)&&(r.attributes.fill="black"),r}function yy(r){return r.tag==="g"?r.children:[r]}var vy={hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-mask"),c=u?lo(u.split(" ").map(d=>d.trim())):pg();return c.prefix||(c.prefix=$a()),r.mask=c,r.maskId=s.getAttribute("data-fa-mask-id"),r}}},provides(r){r.generateAbstractMask=function(s){let{children:u,attributes:c,main:d,mask:f,maskId:g,transform:x}=s;const{width:b,icon:p}=d,{width:y,icon:N}=f,S=fb({transform:x,containerWidth:y,iconWidth:b}),z={tag:"rect",attributes:P(P({},Dc),{},{fill:"white"})},T=p.children?{children:p.children.map(sp)}:{},Q={tag:"g",attributes:P({},S.inner),children:[sp(P({tag:p.tag,attributes:P(P({},p.attributes),S.path)},T))]},L={tag:"g",attributes:P({},S.outer),children:[Q]},_="mask-".concat(g||Sr()),C="clip-".concat(g||Sr()),W={tag:"mask",attributes:P(P({},Dc),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[z,L]},te={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:yy(N)},W]};return u.push(te,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(_,")")},Dc)}),{children:u,attributes:c}}}},wy={provides(r){let s=!1;Ja.matchMedia&&(s=Ja.matchMedia("(prefers-reduced-motion: reduce)").matches),r.missingIconAbstract=function(){const u=[],c={fill:"currentColor"},d={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};u.push({tag:"path",attributes:P(P({},c),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const f=P(P({},d),{},{attributeName:"opacity"}),g={tag:"circle",attributes:P(P({},c),{},{cx:"256",cy:"364",r:"28"}),children:[]};return s||g.children.push({tag:"animate",attributes:P(P({},d),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},f),{},{values:"1;0;1;1;0;1;"})}),u.push(g),u.push({tag:"path",attributes:P(P({},c),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:s?[]:[{tag:"animate",attributes:P(P({},f),{},{values:"1;0;0;0;0;1;"})}]}),s||u.push({tag:"path",attributes:P(P({},c),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:u}}}},Sy={hooks(){return{parseNodeAttributes(r,s){const u=s.getAttribute("data-fa-symbol"),c=u===null?!1:u===""?!0:u;return r.symbol=c,r}}}},jy=[gb,ly,oy,sy,cy,hy,xy,by,vy,wy,Sy];Ob(jy,{mixoutsTo:Rt});Rt.noAuto;Rt.config;Rt.library;Rt.dom;const su=Rt.parse;Rt.findIconDefinition;Rt.toHtml;const Cy=Rt.icon;Rt.layer;Rt.text;Rt.counter;var Bc={exports:{}},Lc,cp;function Ay(){if(cp)return Lc;cp=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Lc=r,Lc}var Yc,up;function Ey(){if(up)return Yc;up=1;var r=Ay();function s(){}function u(){}return u.resetWarningCache=s,Yc=function(){function c(g,x,b,p,y,N){if(N!==r){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}c.isRequired=c;function d(){return c}var f={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:u,resetWarningCache:s};return f.PropTypes=f,f},Yc}var dp;function Ny(){return dp||(dp=1,Bc.exports=Ey()()),Bc.exports}var Ty=Ny();const Ne=du(Ty);function fp(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function Kt(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?fp(Object(u),!0).forEach(function(c){di(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):fp(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function Jl(r){"@babel/helpers - typeof";return Jl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},Jl(r)}function di(r,s,u){return s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function zy(r,s){if(r==null)return{};var u={},c=Object.keys(r),d,f;for(f=0;f<c.length;f++)d=c[f],!(s.indexOf(d)>=0)&&(u[d]=r[d]);return u}function ky(r,s){if(r==null)return{};var u=zy(r,s),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function cu(r){return Ry(r)||My(r)||Oy(r)||Dy()}function Ry(r){if(Array.isArray(r))return uu(r)}function My(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Oy(r,s){if(r){if(typeof r=="string")return uu(r,s);var u=Object.prototype.toString.call(r).slice(8,-1);if(u==="Object"&&r.constructor&&(u=r.constructor.name),u==="Map"||u==="Set")return Array.from(r);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return uu(r,s)}}function uu(r,s){(s==null||s>r.length)&&(s=r.length);for(var u=0,c=new Array(s);u<s;u++)c[u]=r[u];return c}function Dy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function By(r){var s,u=r.beat,c=r.fade,d=r.beatFade,f=r.bounce,g=r.shake,x=r.flash,b=r.spin,p=r.spinPulse,y=r.spinReverse,N=r.pulse,S=r.fixedWidth,z=r.inverse,T=r.border,Q=r.listItem,L=r.flip,_=r.size,C=r.rotation,W=r.pull,te=(s={"fa-beat":u,"fa-fade":c,"fa-beat-fade":d,"fa-bounce":f,"fa-shake":g,"fa-flash":x,"fa-spin":b,"fa-spin-reverse":y,"fa-spin-pulse":p,"fa-pulse":N,"fa-fw":S,"fa-inverse":z,"fa-border":T,"fa-li":Q,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},di(s,"fa-".concat(_),typeof _<"u"&&_!==null),di(s,"fa-rotate-".concat(C),typeof C<"u"&&C!==null&&C!==0),di(s,"fa-pull-".concat(W),typeof W<"u"&&W!==null),di(s,"fa-swap-opacity",r.swapOpacity),s);return Object.keys(te).map(function(K){return te[K]?K:null}).filter(function(K){return K})}function Ly(r){return r=r-0,r===r}function wg(r){return Ly(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(s,u){return u?u.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var Yy=["style"];function Uy(r){return r.charAt(0).toUpperCase()+r.slice(1)}function _y(r){return r.split(";").map(function(s){return s.trim()}).filter(function(s){return s}).reduce(function(s,u){var c=u.indexOf(":"),d=wg(u.slice(0,c)),f=u.slice(c+1).trim();return d.startsWith("webkit")?s[Uy(d)]=f:s[d]=f,s},{})}function Sg(r,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof s=="string")return s;var c=(s.children||[]).map(function(b){return Sg(r,b)}),d=Object.keys(s.attributes||{}).reduce(function(b,p){var y=s.attributes[p];switch(p){case"class":b.attrs.className=y,delete s.attributes.class;break;case"style":b.attrs.style=_y(y);break;default:p.indexOf("aria-")===0||p.indexOf("data-")===0?b.attrs[p.toLowerCase()]=y:b.attrs[wg(p)]=y}return b},{attrs:{}}),f=u.style,g=f===void 0?{}:f,x=ky(u,Yy);return d.attrs.style=Kt(Kt({},d.attrs.style),g),r.apply(void 0,[s.tag,Kt(Kt({},d.attrs),x)].concat(cu(c)))}var jg=!1;try{jg=!0}catch{}function Hy(){if(!jg&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function mp(r){if(r&&Jl(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(su.icon)return su.icon(r);if(r===null)return null;if(r&&Jl(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function Uc(r,s){return Array.isArray(s)&&s.length>0||!Array.isArray(s)&&s?di({},r,s):{}}var pp={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ka=ea.forwardRef(function(r,s){var u=Kt(Kt({},pp),r),c=u.icon,d=u.mask,f=u.symbol,g=u.className,x=u.title,b=u.titleId,p=u.maskId,y=mp(c),N=Uc("classes",[].concat(cu(By(u)),cu((g||"").split(" ")))),S=Uc("transform",typeof u.transform=="string"?su.transform(u.transform):u.transform),z=Uc("mask",mp(d)),T=Cy(y,Kt(Kt(Kt(Kt({},N),S),z),{},{symbol:f,title:x,titleId:b,maskId:p}));if(!T)return Hy("Could not find icon",y),null;var Q=T.abstract,L={ref:s};return Object.keys(u).forEach(function(_){pp.hasOwnProperty(_)||(L[_]=u[_])}),qy(Q[0],L)});Ka.displayName="FontAwesomeIcon";Ka.propTypes={beat:Ne.bool,border:Ne.bool,beatFade:Ne.bool,bounce:Ne.bool,className:Ne.string,fade:Ne.bool,flash:Ne.bool,mask:Ne.oneOfType([Ne.object,Ne.array,Ne.string]),maskId:Ne.string,fixedWidth:Ne.bool,inverse:Ne.bool,flip:Ne.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ne.oneOfType([Ne.object,Ne.array,Ne.string]),listItem:Ne.bool,pull:Ne.oneOf(["right","left"]),pulse:Ne.bool,rotation:Ne.oneOf([0,90,180,270]),shake:Ne.bool,size:Ne.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ne.bool,spinPulse:Ne.bool,spinReverse:Ne.bool,symbol:Ne.oneOfType([Ne.bool,Ne.string]),title:Ne.string,titleId:Ne.string,transform:Ne.oneOfType([Ne.string,Ne.object]),swapOpacity:Ne.bool};var qy=Sg.bind(null,ea.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Xy={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Vy={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},Iy=Vy,Gy={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5L0 80C0 53.5 21.5 32 48 32l149.5 0c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Qy={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Fy={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z"]},Wy={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Py=Wy,Zy={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ky=Zy,Jy=({scrolled:r=!1})=>{const[s,u]=v.useState(!1),[c,d]=v.useState(!1),[f,g]=v.useState("/pavan-techno-constructions/images/logo.png"),x=tn(),b=["/pavan-techno-constructions/images/logo.png","/pavan-techno-constructions/logo.png","/pavan-techno-constructions/assets/logo.png"];v.useEffect(()=>(document.body.classList.toggle("no-scroll",s),()=>document.body.classList.remove("no-scroll")),[s]),v.useEffect(()=>{u(!1)},[x]);const p=()=>u(!s),y=()=>u(!1),N=()=>{const z=b.indexOf(f)+1;console.log(`Logo failed to load from: ${f}`),z<b.length?(console.log(`Trying next path: ${b[z]}`),g(b[z])):(console.log("All logo paths failed, showing fallback"),d(!0))};return i.jsxs(i.Fragment,{children:[i.jsx("style",{jsx:!0,children:`
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
      `}),i.jsx("header",{className:`navbar ${r?"scrolled":""}`,children:i.jsx("div",{className:"container",children:i.jsxs("nav",{className:"nav-container",children:[i.jsx("div",{className:"logo-section",children:i.jsxs(Za,{to:"/",className:"logo-container",children:[i.jsx("div",{className:"logo-hex",children:c?i.jsx("div",{className:"logo-fallback",children:"PTC"}):i.jsx("img",{src:f,alt:"Pavan Techno Constructions",className:"logo-image",onError:N,onLoad:()=>console.log(`Logo loaded successfully from: ${f}`)})}),i.jsxs("div",{className:"company-info",children:[i.jsx("div",{className:"company-name",children:"PAVAN TECHNO CONSTRUCTIONS"}),i.jsx("div",{className:"company-tagline",children:"Engineering Excellence"})]})]})}),i.jsxs("div",{className:`nav-links ${s?"active":""}`,children:[i.jsx("div",{className:`nav-item ${x.pathname==="/"?"active":""}`,children:i.jsxs(Za,{to:"/",onClick:y,children:[i.jsx(Ka,{icon:Py})," Home"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/services"?"active":""}`,children:i.jsxs(Za,{to:"/services",onClick:y,children:[i.jsx(Ka,{icon:Iy})," Services"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/pricing"?"active":""}`,children:i.jsxs(Za,{to:"/pricing",onClick:y,children:[i.jsx(Ka,{icon:Gy})," Pricing"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/gallery"?"active":""}`,children:i.jsxs(Za,{to:"/gallery",onClick:y,children:[i.jsx(Ka,{icon:Fy})," Gallery"]})}),i.jsx("div",{className:`nav-item ${x.pathname==="/contact"?"active":""}`,children:i.jsxs(Za,{to:"/contact",onClick:y,children:[i.jsx(Ka,{icon:Qy})," Contact"]})})]}),i.jsx("button",{className:"hamburger",onClick:p,children:i.jsx(Ka,{icon:s?Ky:Xy})})]})})})]})},gp=({openPopup:r})=>{Bm.preload("/pavan-techno-constructions/images/logo.png",{as:"image"}),Bm.preload("/pavan-techno-constructions/images/2835998-uhd_3840_2160_24fps.mp4",{as:"video"});const[s,u]=v.useState("/pavan-techno-constructions/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg"),[c,d]=v.useState(!1),[f,g]=v.useState({x:0,y:0}),[x,b]=v.useState(!1),[p,y]=v.useState(!1),[N,S]=v.useState(0),[z,T]=v.useState(!1),[Q,L]=v.useState(!1),[_,C]=v.useState(!1),W=v.useRef(null),te=v.useRef([]),K=v.useRef(null),oe=v.useRef(null),Y=v.useRef(null),$=v.useRef(null);v.useEffect(()=>{u("./images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg");const B=new Image;B.onload=()=>{console.log("Logo preloaded successfully:",B.src),d(!1)},B.onerror=()=>{console.log("Logo preload failed, trying alternative path"),d(!0)},B.src=s},[]);const M=[{src:"52886-471089084_tiny.mp4",title:"Our Construction Process",paths:["/pavan-techno-constructions/images/52886-471089084_tiny.mp4","/pavan-techno-constructions/assets/52886-471089084_tiny.mp4","/pavan-techno-constructions/videos/52886-471089084_tiny.mp4"]},{src:"42926-434300944_tiny.mp4",title:"Project Showcase",paths:["/pavan-techno-constructions/images/42926-434300944_tiny.mp4","/pavan-techno-constructions/assets/42926-434300944_tiny.mp4","/pavan-techno-constructions/videos/42926-434300944_tiny.mp4"]}],fe=["/pavan-techno-constructions/images/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/assets/2835998-uhd_3840_2160_24fps.mp4","/pavan-techno-constructions/videos/2835998-uhd_3840_2160_24fps.mp4"],q=async B=>{B.preventDefault();const he=["assets/pavan.pdf","/assets/pavan.pdf","./assets/pavan.pdf","public/assets/pavan.pdf","/public/assets/pavan.pdf","images/pavan.pdf","/images/pavan.pdf","./images/pavan.pdf","pavan.pdf","/pavan.pdf"];let se=0,Te=!1;const Xe=async()=>{if(se>=he.length){alert("PDF file not found on server. Please contact support or try again later."),ne();return}const Me=he[se];console.log(`Trying PDF path ${se+1}/${he.length}:`,Me);try{if((await fetch(Me,{method:"HEAD",headers:{Accept:"application/pdf"}})).ok){const nt=await fetch(Me);if(nt.ok){const Ve=await nt.blob();if(Ve.type==="application/pdf"||Ve.type===""||Me.endsWith(".pdf")){const Z=window.URL.createObjectURL(new Blob([Ve],{type:"application/pdf"})),be=document.createElement("a");be.href=Z,be.download="PAVAN_TECHNO_CONSTRUCTIONS_BROCHURE.pdf",be.style.display="none",document.body.appendChild(be),be.click(),document.body.removeChild(be),setTimeout(()=>window.URL.revokeObjectURL(Z),100),console.log("PDF downloaded successfully from:",Me),Te=!0;return}else console.log("File is not a PDF:",Me,"Type:",Ve.type)}}}catch(Ke){console.log("Error accessing PDF at:",Me,Ke)}se++,setTimeout(Xe,100)};await Xe()},ne=()=>{const B=`
PAVAN TECHNO CONSTRUCTIONS
Engineering Excellence

Consult, Design & Execute

Contact Information:
- Website: Visit our website for more details
- Services: Construction, Design, Engineering
- Experience: 15+ Years in the industry
- Projects: 500+ Completed successfully

Note: This is a temporary file. Please contact us directly for the complete brochure.
    `,he=new Blob([B],{type:"text/plain"}),se=window.URL.createObjectURL(he),Te=document.createElement("a");Te.href=se,Te.download="PAVAN_TECHNO_CONSTRUCTIONS_INFO.txt",Te.style.display="none",document.body.appendChild(Te),Te.click(),document.body.removeChild(Te),setTimeout(()=>window.URL.revokeObjectURL(se),100),console.log("Fallback file created and downloaded")},me=()=>{if(!$.current)return;let B=0;const he=()=>{if(B>=fe.length){console.error("All background video paths failed");return}const se=fe[B];console.log(`Trying background video path ${B+1}/${fe.length}:`,se),$.current.src=se,$.current.load();const Te=()=>{console.log("Background video loaded successfully:",se),$.current.play().catch(Ke=>{console.warn("Background video autoplay blocked:",Ke)}),Me()},Xe=()=>{console.log("Background video path failed:",se),B++,Me(),setTimeout(he,100)},Me=()=>{var Ke,nt,Ve;(Ke=$.current)==null||Ke.removeEventListener("loadeddata",Te),(nt=$.current)==null||nt.removeEventListener("canplay",Te),(Ve=$.current)==null||Ve.removeEventListener("error",Xe)};$.current.addEventListener("loadeddata",Te,{once:!0}),$.current.addEventListener("canplay",Te,{once:!0}),$.current.addEventListener("error",Xe,{once:!0})};he()};v.useEffect(()=>{const B=()=>{const ce=new IntersectionObserver(we=>{we.forEach(ze=>{ze.isIntersecting&&(b(!0),Z())})},{threshold:.5});return K.current&&ce.observe(K.current),ce},he=ce=>{if(W.current){const we=W.current.getBoundingClientRect(),ze=(ce.clientX-we.left)/we.width-.5,et=(ce.clientY-we.top)/we.height-.5;g({x:ze,y:et})}},se=()=>{const ce=window.pageYOffset,we=window.innerHeight;if(ce>we*.7&&ce<we*1.5&&!p&&!_){re(!1);return}if(p&&ce>we*1.8){I(),setTimeout(()=>{ee()},300);return}if(!p){const ze=ce*-.3;document.querySelectorAll(".geometric-shape").forEach((ht,Gt)=>{const Mt=(Gt+1)*.2;ht.style.transform+=` translateY(${ze*Mt}px)`})}},Te=ce=>{p&&(ce.preventDefault(),ce.deltaY>0?(I(),setTimeout(()=>{ee()},300)):ce.deltaY<0&&I())};let Xe=0;const Me=ce=>{p&&(Xe=ce.touches[0].clientY)},Ke=ce=>{p&&ce.preventDefault()},nt=ce=>{if(p){const we=ce.changedTouches[0].clientY,ze=Xe-we;ze>50?(I(),setTimeout(()=>{ee()},300)):ze<-50&&I()}},Ve=()=>{const ce=Date.now()*.001;te.current.forEach((we,ze)=>{if(we){const et=Math.sin(ce+ze*.7)*30,ht=Math.cos(ce+ze*.5)*20,Gt=1+Math.sin(ce+ze)*.3;we.style.transform=`translate(${et}px, ${ht}px) scale(${Gt})`}}),requestAnimationFrame(Ve)},Z=()=>{document.querySelectorAll(".stat-number").forEach((we,ze)=>{const et=parseInt(we.getAttribute("data-target")),Gt=et/(2e3/16);let Mt=0;const co=setInterval(()=>{Mt+=Gt,Mt>=et?(we.textContent=et+(we.textContent.includes("+")?"+":"")+(we.textContent.includes("%")?"%":""),clearInterval(co)):we.textContent=Math.floor(Mt)+(we.textContent.includes("+")?"+":"")+(we.textContent.includes("%")?"%":"")},16)})},be=B();return document.addEventListener("mousemove",he),window.addEventListener("scroll",se),document.addEventListener("wheel",Te,{passive:!1}),document.addEventListener("touchstart",Me,{passive:!1}),document.addEventListener("touchmove",Ke,{passive:!1}),document.addEventListener("touchend",nt,{passive:!1}),Ve(),setTimeout(()=>{me()},500),()=>{be.disconnect(),document.removeEventListener("mousemove",he),window.removeEventListener("scroll",se),document.removeEventListener("wheel",Te),document.removeEventListener("touchstart",Me),document.removeEventListener("touchmove",Ke),document.removeEventListener("touchend",nt)}},[p,_]);const ee=()=>{const B=document.querySelector("#about")||document.querySelector(".about-section")||document.querySelector("section:nth-of-type(2)");B?B.scrollIntoView({behavior:"smooth"}):window.scrollBy({top:window.innerHeight-100,behavior:"smooth"})},re=(B=!0)=>{console.log("Opening video modal for video:",M[N].title),y(!0),T(!0),document.body.style.overflow="hidden",B||C(!0),setTimeout(()=>{D(N)},100)},D=B=>{if(!oe.current)return;const he=M[B];let se=0;const Te=()=>{if(se>=he.paths.length){console.error("All video paths failed for:",he.title),T(!1);return}const Xe=he.paths[se];console.log(`Trying video path ${se+1}/${he.paths.length}:`,Xe),oe.current.src=Xe,oe.current.load();const Me=()=>{console.log("Video loaded successfully:",Xe),T(!1),setTimeout(()=>{oe.current&&oe.current.play().catch(Ve=>{console.warn("Video autoplay blocked:",Ve)})},100),nt()},Ke=Ve=>{console.log("Video path failed:",Xe,Ve),se++,nt(),setTimeout(Te,100)},nt=()=>{var Ve,Z,be;(Ve=oe.current)==null||Ve.removeEventListener("loadeddata",Me),(Z=oe.current)==null||Z.removeEventListener("canplay",Me),(be=oe.current)==null||be.removeEventListener("error",Ke)};oe.current.addEventListener("loadeddata",Me,{once:!0}),oe.current.addEventListener("canplay",Me,{once:!0}),oe.current.addEventListener("error",Ke,{once:!0})};Te()},I=()=>{y(!1),T(!1),L(!1),document.body.style.overflow="auto",oe.current&&(oe.current.pause(),oe.current.currentTime=0)},ae=()=>{if(N<M.length-1){const B=N+1;S(B),T(!0),setTimeout(()=>{D(B)},100)}},ve=()=>{if(N>0){const B=N-1;S(B),T(!0),setTimeout(()=>{D(B)},100)}},j=B=>{console.error("Video error event:",B.target.error)},X=B=>{p&&(B.key==="Escape"?I():B.key==="ArrowLeft"?ve():B.key==="ArrowRight"&&ae())};v.useEffect(()=>(document.addEventListener("keydown",X),()=>document.removeEventListener("keydown",X)),[p,N]);const G=({children:B,className:he,delay:se=0})=>{const Te=B.split("");return i.jsx("span",{className:`animated-word ${he}`,children:Te.map((Xe,Me)=>i.jsx("span",{className:"word-char",style:{animationDelay:`${se+Me*.05}s`},children:Xe===" "?" ":Xe},Me))})},J=({index:B})=>i.jsx("div",{ref:he=>te.current[B]=he,className:"particle",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${B*.2}s`,animationDuration:`${8+Math.random()*4}s`}}),ie=(B,he)=>{const se=B.currentTarget;he?(se.style.transform="translateY(-8px) scale(1.05) rotateX(10deg)",se.style.boxShadow="0 20px 40px rgba(0, 0, 0, 0.3)"):(se.style.transform="translateY(0) scale(1) rotateX(0deg)",se.style.boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)")},ye=(B,he)=>{const se=B.currentTarget;he?(se.style.transform="translateY(-15px) scale(1.08) rotateY(8deg)",se.style.boxShadow="0 25px 50px rgba(59, 130, 246, 0.3)"):(se.style.transform="translateY(0) scale(1) rotateY(0deg)",se.style.boxShadow="0 8px 25px rgba(59, 130, 246, 0.1)")};return i.jsxs("section",{className:"hero",ref:W,children:[i.jsxs("div",{className:"hero-video-container",children:[i.jsx("video",{ref:$,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:"hero-video",style:{transform:`scale(1.1) translate(${f.x*15}px, ${f.y*15}px)`}}),i.jsx("div",{className:"hero-overlay",style:{background:`radial-gradient(circle at ${(f.x+.5)*100}% ${(f.y+.5)*100}%, 
                        rgba(59, 130, 246, 0.15) 0%, 
                        rgba(0, 0, 0, 0.6) 40%, 
                        rgba(0, 0, 0, 0.85) 100%)`}})]}),i.jsx("div",{className:"particles-container",children:Array.from({length:20},(B,he)=>i.jsx(J,{index:he},he))}),i.jsxs("div",{className:"hero-geometry",children:[i.jsx("div",{className:"geometric-shape shape-1",style:{transform:`translate(${f.x*-40}px, ${f.y*-30}px) rotate(${Date.now()*.01}deg)`}}),i.jsx("div",{className:"geometric-shape shape-2",style:{transform:`translate(${f.x*25}px, ${f.y*-20}px) rotate(${Date.now()*-.008}deg)`}}),i.jsx("div",{className:"geometric-shape shape-3",style:{transform:`translate(${f.x*-20}px, ${f.y*30}px) rotate(${Date.now()*.012}deg)`}})]}),i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-logo-title-container",children:[i.jsx("div",{className:"hero-company-logo",children:i.jsx("img",{src:s,alt:"Pavan Techno Constructions Logo",className:"hero-logo-image",onError:B=>{console.log("Logo image failed to load, trying fallback paths");const he=["/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","./images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","../public/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","/assets/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","./assets/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","/public/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","./public/images/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","/WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg","./WhatsApp Image 2025-06-16 at 14.53.39_aa8e7adb.jpg"],se=B.target.src,Te=he.findIndex(Xe=>se.includes(Xe.replace("./","")));Te<he.length-1?(console.log(`Trying next path: ${he[Te+1]}`),B.target.src=he[Te+1]):(console.log("All logo paths failed, hiding logo"),B.target.style.display="none")},style:{filter:"brightness(1.2) contrast(1.1) saturate(1.1)"}})}),i.jsxs("div",{className:"title-tagline-container",children:[i.jsx("div",{className:"company-title",children:i.jsx("h1",{style:{color:"#333333",textShadow:"0 1px 3px rgba(0, 0, 0, 0.3)",position:"relative",zIndex:5},children:i.jsxs("span",{className:"title-line",children:[i.jsx(G,{className:"word-1",delay:.1,children:"PAVAN"}),i.jsx(G,{className:"word-2",delay:.3,children:"TECHNO"}),i.jsx(G,{className:"word-3",delay:.5,children:"CONSTRUCTIONS"})]})})}),i.jsx("div",{className:"tagline",children:i.jsx("p",{className:"typewriter",style:{color:"#333333",textShadow:"0 1px 2px rgba(0, 0, 0, 0.2)",position:"relative",zIndex:5},children:"Consult, Design & Execute"})})]})]}),i.jsx("div",{className:"description",children:i.jsx("p",{children:"Transforming architectural dreams into concrete reality with cutting-edge technology, innovative engineering solutions, and unwavering commitment to excellence."})}),i.jsxs("div",{className:"hero-buttons",children:[i.jsxs("button",{onClick:q,className:"hero-btn primary",onMouseEnter:B=>ie(B,!0),onMouseLeave:B=>ie(B,!1),children:[i.jsx("span",{children:"📄"})," Download Portfolio"]}),i.jsxs("button",{onClick:r,className:"hero-btn secondary",onMouseEnter:B=>ie(B,!0),onMouseLeave:B=>ie(B,!1),children:[i.jsx("span",{children:"⚡"})," Start Your Project"]})]}),i.jsxs("div",{className:"hero-stats",ref:K,children:[i.jsxs("div",{className:"stat",onMouseEnter:B=>ye(B,!0),onMouseLeave:B=>ye(B,!1),children:[i.jsx("div",{className:"stat-number","data-target":"60",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Projects Completed"})]}),i.jsxs("div",{className:"stat",onMouseEnter:B=>ye(B,!0),onMouseLeave:B=>ye(B,!1),children:[i.jsx("div",{className:"stat-number","data-target":"15",children:"0+"}),i.jsx("div",{className:"stat-label",children:"Years Experience"})]}),i.jsxs("div",{className:"stat",onMouseEnter:B=>ye(B,!0),onMouseLeave:B=>ye(B,!1),children:[i.jsx("div",{className:"stat-number","data-target":"100",children:"0%"}),i.jsx("div",{className:"stat-label",children:"Client Satisfaction"})]})]})]}),i.jsxs("button",{ref:Y,className:"see-us-circle",onClick:()=>re(!0),onMouseEnter:B=>{B.target.style.transform="scale(1.2) rotate(10deg)",B.target.style.boxShadow="0 20px 50px rgba(236, 72, 153, 0.8)"},onMouseLeave:B=>{B.target.style.transform="scale(1) rotate(0deg)",B.target.style.boxShadow="0 10px 30px rgba(236, 72, 153, 0.4)"},children:[i.jsx("span",{children:"See Us"}),i.jsx("span",{className:"play-icon",children:"▶"})]}),i.jsxs("button",{className:"scroll-btn",onClick:ee,onMouseEnter:B=>{B.target.style.transform="translateX(-50%) translateY(-15px) scale(1.15)",B.target.style.background="rgba(255, 255, 255, 0.15)"},onMouseLeave:B=>{B.target.style.transform="translateX(-50%) translateY(0) scale(1)",B.target.style.background="none"},children:[i.jsx("span",{children:"Explore More"}),i.jsx("div",{className:"arrow",children:"↓"})]}),i.jsxs("button",{className:"floating-contact",onClick:r,onMouseEnter:B=>{B.target.style.transform="translateY(-10px) scale(1.15) rotate(3deg)",B.target.style.boxShadow="0 20px 50px rgba(59, 130, 246, 0.7)"},onMouseLeave:B=>{B.target.style.transform="translateY(0) scale(1) rotate(0deg)",B.target.style.boxShadow="0 8px 25px rgba(59, 130, 246, 0.4)"},children:[i.jsx("span",{children:"💬"})," Get Quote"]}),i.jsx("div",{className:`video-modal-overlay ${p?"active":""}`,children:i.jsxs("div",{className:"video-modal-container",children:[z&&i.jsxs("div",{className:"video-loading",children:[i.jsx("div",{className:"loading-spinner"}),"Loading Video..."]}),i.jsx("video",{ref:oe,className:"video-modal-video",onError:j,onCanPlay:()=>T(!1),muted:!0,loop:!0,playsInline:!0,preload:"metadata",style:{opacity:z?0:1},children:i.jsx("p",{children:"Your browser does not support the video tag."})}),i.jsxs("div",{className:"video-controls",children:[i.jsx("button",{className:"video-nav-btn",onClick:ve,disabled:N===0,onMouseEnter:B=>{B.target.disabled||(B.target.style.transform="scale(1.2) translateX(-5px)")},onMouseLeave:B=>{B.target.style.transform="scale(1) translateX(0)"},children:"‹"}),i.jsx("button",{className:"video-nav-btn",onClick:ae,disabled:N===M.length-1,onMouseEnter:B=>{B.target.disabled||(B.target.style.transform="scale(1.2) translateX(5px)")},onMouseLeave:B=>{B.target.style.transform="scale(1) translateX(0)"},children:"›"})]}),i.jsx("button",{className:"video-close-btn",onClick:I,onMouseEnter:B=>{B.target.style.transform="scale(1.2) rotate(90deg)",B.target.style.background="rgba(255, 100, 100, 0.4)"},onMouseLeave:B=>{B.target.style.transform="scale(1) rotate(0deg)",B.target.style.background="rgba(255, 255, 255, 0.2)"},children:"×"}),i.jsxs("div",{className:"video-info",children:[i.jsx("h3",{className:"video-title",children:M[N].title}),i.jsxs("div",{className:"video-counter",children:[N+1," / ",M.length]})]}),i.jsxs("div",{className:"scroll-progress",onClick:()=>{I(),setTimeout(()=>ee(),300)},children:[i.jsx("span",{children:"Scroll down or click to continue"}),i.jsx("span",{className:"scroll-arrow-down",children:"↓"})]})]})})]})},$y="/pavan-techno-constructions/assets/Blog-Covers-Press-Release-BIx1EJvd.png",e5="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHBAUIAQID/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAEEAwUGAv/aAAwDAQACEAMQAAAB6pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIR4sTdVmsw7S5lYpxWc89sagAAAAAAAABzR0vW1Po7E5itOnqvQdS862BFPda/P0+PvZcMEwAAAAarSEwROMFptJqyXqgmZLKe2G3xXovmSeT47ta6WwctO/8AdHobOjnTW6UliAxouNqqvLlVbpS7HgoeHXjCiIQ7rfJKJjfTeIciznoXw5ayuotecy9FbTbnH8yvr9jnLX9P18UHNOkcAoiJdW4xW0Zvr5OSJB0tghnjNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//xAAnEAACAwEAAAUDBQEAAAAAAAAEBQIDBgEABxITFRZAcBQhIzAxMv/aAAgBAQABBQL81aDTVJOBaZlZ4N33aTSdOZdFHseHkfaOP5dhDnOQ0tVcdENHkB9HHlWqh/z9npMzBraINovQ5HkG7q+pvQVm2xjOH7R+z0yArh1WsZThRkemBVvmCusRSe9cc/rYtBVA4uvTmWMdWpUkbPR3LFM3IVRxeuUAmanX+yrYadYolmtHa1cfXCL1m6pQuqovrJqZahUpvufLxw5uwazLdwip58kN+jWapU4uYbRQLDK7kcpAuaCtx22pJXaLJa6lhmXe6qsu5/nmB7VLxkYoN3aAlOBcRXdHE5HvFrjKlJAVtfYdxyu5Yv1YHIFAsD8v3COawq12UO4xz4kLqHi6sFPifL+Pw7XGHZsZdwYmGMekKD2mXBHIKDXriMT5cM+MFziuNuzkPGvJaU1CU1DcBml6dSezpS4s75opQGbZaCPdXaFRfbenCJv+LE5WWqEP7QCOL34Jf670wJPIQjXEtSGfKS4acCAqSO5rGVLV/sV+0IpDBnWHRV4mpDsHGEpDqkFRK3gNHB6kYFHioKii78w//8QAKxEAAQMBBQUJAAAAAAAAAAAAAQIDBAAFERMhMQYSMEFRFSI0UGCBwdHw/9oACAEDAQE/AfOI8d2U4GmReTSbFmuLLaE3kdCK7Kl4Zc3dNc8x7cOwpbcSQrFyCkkX9K2ejhiU4A6D3TpVlNohPuOOvJuKTzo68KHMXCdxEZ/NKtPc8KgN9bv2lJtMNBRZaCVK5/XpX//EACARAAIBAwQDAAAAAAAAAAAAAAECEQADBBITITAyUGD/2gAIAQIBAT8B9wzBBLUci2BJrfSY68lC6iKym1IOKvk3FACnruILgg0LM+ZmtmY1Hj5X/8QANxAAAgECBAQEBQIDCQAAAAAAAgMBAAQFERITFCExQTJRUmEVIiNCcQZAEDBwMzRTYnKBkaHR/9oACAEBAAY/Av61QEDuvn7KhjcNLYn7h7VK1JE0ervWuwsCcv8AxJrh7pew7pHv+1YLOY7sRz8sqiI6U6AiNMlGdLiIyjKj0xp+cZ5VH7SHIaKrqPP7qFLGIWEctzrNNVuS0xKJ1F3mhyi3yy86i5uNjXMxM/UqP2nxCxkiLqQx51Cow45f0zy5U9l5lxzvm1emti5w9rjHlDF9JrjbsCQmJ5DP8yX3bxQr1FSVpv1Gx3IA7zUIur1am+nyq1usOcE7rhHXlBRMTNBZHcBF2cZwrvXCvv1LfHUfKrG5wi6BkMvwtjKIz5TE5xz/ABSwvbxaWFHhmsZA3gy0tz+lMRHT80wfiSc19aQy4vVrB8alz6o86Fqig1lGcFHeoTd3i1N9NLu2XSxtmchb2mlWs3IcQ0dYL7zHnWZYknrI/wDFcVvhw+We5nyqVWl6tzI+2KeHHrh4Zjl5FR3eJ3q4YtkiU5Zfit+zeL1eoaxK3J4rtUWsMHMY5FlQ319eL3A5OLppmsLHCL1bIdcwtsRGfy/7/wAMGuMQCTwoJ+pyziJ96wQ8Ige8GaxyGeXKsbDH9A38tKZ3x8QdsqjTBLQV/E20M7DnV/b4rn8ddnIvPwsHtprEEY6IDiu6e/vjnJf6astvkv44GmPbIqxf49Ai85zSdxGYyHtX6t+DAUKKfkEY56faoUuF8ZCojRp+pB986wi7i9SrEFWX93uQkgYH/tWb4t+F1B/ZR0isY42/tLG5Js5xeoktUf5Z8qvZubsMSs7kylK1rkPmnsMT70+3xZZLxG4TE2zGznmv0x71iQ4pCouN9mrdHPUPtVqTFv8AhPG6jX92zWCxgGgrwWZ6rccsg96/VjGqBhw4ozKParbiLsMPfxhSppDmMlHq9quR4dK5U3TLLeMgZ71jInEFHARyn8V+mnsVM4bDym8246+mZ/7rAfhW1L4uR1Eoco0+9PtEug7i35MD00HAXIKIeq2jmB1b4jijUZ20fSTbDkP5qGPtltOO5DQrNIEA9BmOlAxihMw8JTHOK3m2yzb6pGtvh16ILXp09/Ohm4t1tkemqKKVJBcl10x1oz4NOo+s6etBDbVRwHhzHpUCMaRjpEVBXFstpR3IaWMoCRX4Yy6UJGoSMPCUx0pib5Sblk3BtEss8omtvRG3llpy5VJW9stRT3EaZoUI7njyjxVsFbLlOeejTyrbQsVB5DFEyVDLCjTJZdYrYhIbPoy5VG3aKHKdUZD3pjVqEGM8RRHX+sX/xAAmEAEAAgIBAwQBBQAAAAAAAAABABEhMVFBYXFAgaHBcDCRsdHh/9oACAEBAAE/IfzVWJtgarzDXmbrjmoHNJmvliDaFunD4JTK7swuPMPSWdqH4UQVABgJjbHGrdw4wkAJW1s8MoTPxnpNiaxez3jy6WvjnMgEocEqoplUYDB2godvR3M+gGsg6ko6bbLSgc9efpARloLiCO5w2jRUFH6Zwti2I8BEtp0qogP5u2+VahVSjZBNze9BlkSbAK/ulamLzY4HZmHlc22+aJU0acDxb95Q0LLq0VvNRdm1X8DWSWOVLYIyAF3tQ5a1H8kWrZ7kwz+DfhukNiGorSqbx0ufSv8A5g9qu5FOS9w1a/1SNOJrm4PFxoOsOozVvWbQzXnlV7liqqwPQKDjiCYTyrDwxrZMw9pYhHBcuCILpc7bcC0hJP2q0cMTwPdvsONQxwi36CdpdwaFWuHDUaS5U2YnxGItYynbAu4iwuqm5X/AFT9SuZmJz45satf+QgADBXg7S4CnNLuwPZLlZAiEEreusRzcOpFYawqswOvgjwg31rfxAXMpQxcYZUoRotqZcgb1ABBnT0vbhiUTiLJ8dLmBQ2FQH6IEVcYbuvmVq8ENqfda3yVz0FPLGjXJFiMmHEx9eWgGBy7plgKCq6KPumyys2puNDp909uBYFwtAsOCCXBQKCa6GCWZI9Oa8YHbndeM3RwJAQ+Ip8KJ4m3Y5hirTd4Fu863mAy5hIJ1WJZ/msuCVeNf684u+OOUzBKrnz/MX//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888887178888888888/zq288888wg4MDsIQ0EgMA8UQAsI4cA4sc888888888888888888888888888888888888888888888888888888888888888888//EACARAQEAAgICAgMAAAAAAAAAAAERITEAQTBhUGBxsfD/2gAIAQMBAT8Q+YUD0j+wcIkStATpRw+t8SOE1AQ9hp41laBWmR/GOOY3ZUlMrIfvjZYMLVdY5s8UtlCIlA7HmZcUUlWNDOq674ACkc3DuFhfqv8A/8QAIhEBAAECBAcAAAAAAAAAAAAAAREAMSEwQVFQYHGBwdHw/9oACAECAQE/EOMPGgoQkHRoUzvbDB75d3qIxvTy2El6kTBNKMtN5F+vSmFRp735V//EACUQAQEAAgMAAgEDBQAAAAAAAAERACExQVFhcYFAcJEQIKGx8P/aAAgBAQABPxD96ugE2TpWBacVRvpyTzCcqxuXL4ZA26Ua99zjm4KI7kOzCp+kOuBYAFD6t/nAChAakwEj2uIJk/8AuYCHBkTBAHKV+9/5xKna/wCr9IX5AiEdpsHswFKEMDrQG2ezBKGXKES/kMCexCkZNd4XdCRqBI8M9fCafj9Csy3EZXAMeYEOxDjGguD6BXWEtAtqewP2FzRYFtGhcdkjSvC+PXBINAQ/suX+lymUwbj07qMXwDa/WR8vSVXoIezCIyJYnuTH36ZE4SYwBCbHnnCIJC+ggIflMbRQLlvAgQftwZPexytA3S344KSCiKVQMMDOZI/dQETtOaXabkJGhjrWXWQUilAUDkZzgmvXi8I5VMivjgMfeG1GD4wQZv2YR4lVIWIQgdqYrUtpCRFAhV/GC894bhtxzD2QbQAh+MQ7LWzMa4Yb1jPagIwlhdpD7x/hLCA5EYjhCaNGwFoh6KmGeWasVgF1YMp7yab4pSMFW5QuG0d1ea6STGwVo1pKAOUOw6x4URh8lV46bx5lprGw1VR3oDrA+9sZkLhLXZv8YUgs4hZVRJO98JjcChZpN+SMWcwfkwqDXX2HyomHSmeFSw5wNpT4AFxNGqzjAKRFEPFHM0GpOlSW+C5dau65Lhu8c26I1HB+GLsWRr2rSJRNHr2IfTcJJCL4L4dqrctHwFUbsoo/WjSmJqlA7R8DIBj8Hokal07O8agvFJZXG1zfdIpFENileFMdhi8d94Ot/fWIdwTImmnA1m1VUiLAK9a7MvZ8mlBoK0nOsKRUP+BUB/C5aPWAToLwmdeNLXK0bRf+MbgxOc43gPjDLHCHUzgA07tvoZNX81iQrN4YmAoUQB4rv5x4zCuz4ucAxK/ic5ye5q/q6wooHKXHwfGE4lKA4AyC9Ziny48SNtfo4MP4wYunbk6xNWgGxAlpivvzQ4JOkxAkKwq12Y6MDHRa+3bm0MCoHyDp+cSbtEN9hkUkGskt7J1idjFEaLU6c4UIAgEOAznE8iCFna7/AHi//9k=",t5="/pavan-techno-constructions/assets/9nz0z6Ct4l23c27NzViK-jIEjcN3Y.png",a5="/pavan-techno-constructions/assets/24745175-D-scNrQe.jpg",n5="/pavan-techno-constructions/assets/download-Dm7BOQmU.png",_c=()=>{const[r,s]=v.useState(!1),[u,c]=v.useState({x:0,y:0}),[d,f]=v.useState(null),g=v.useRef(null),x=v.useRef(null),b=v.useRef(null),p=v.useRef(null),y=v.useRef(null),N=v.useRef([]),S=()=>{console.log("Opening popup...")},z=[{name:"SHAHI EXPORTS PVT LTD",image:$y,fallbackPaths:["/assets/Blog-Covers-Press-Release.png","../assets/Blog-Covers-Press-Release.png","./assets/Blog-Covers-Press-Release.png","/src/assets/Blog-Covers-Press-Release.png"]},{name:"GOKALDAS EXPORTS LTD",image:e5,fallbackPaths:["/assets/1630570806167.jpeg","../assets/1630570806167.jpeg","./assets/1630570806167.jpeg","/src/assets/1630570806167.jpeg"]},{name:"MES",image:t5,fallbackPaths:["/assets/9nz0z6Ct4l23c27NzViK.png","../assets/9nz0z6Ct4l23c27NzViK.png","./assets/9nz0z6Ct4l23c27NzViK.png","/src/assets/9nz0z6Ct4l23c27NzViK.png"]},{name:"ARK BUILDERS",image:a5,fallbackPaths:["/assets/24745175.jpg","../assets/24745175.jpg","./assets/24745175.jpg","/src/assets/24745175.jpg"]},{name:"TAAPASI PROJECTS",image:n5,fallbackPaths:["/assets/download.png","../assets/download.png","./assets/download.png","/src/assets/download.png"]}];v.useEffect(()=>{const L=new IntersectionObserver(_=>{_.forEach(C=>{C.isIntersecting&&!r&&(s(!0),C.target.classList.add("section-visible"),setTimeout(()=>{var W;return(W=x.current)==null?void 0:W.classList.add("animate")},100),setTimeout(()=>{var W;return(W=b.current)==null?void 0:W.classList.add("animate")},400),setTimeout(()=>{var W;return(W=p.current)==null?void 0:W.classList.add("animate")},800),setTimeout(()=>{var W;return(W=y.current)==null?void 0:W.classList.add("animate")},1200),setTimeout(()=>{N.current.forEach((W,te)=>{setTimeout(()=>W==null?void 0:W.classList.add("animate"),te*100)})},1600))})},{threshold:.2});return g.current&&L.observe(g.current),()=>L.disconnect()},[r]),v.useEffect(()=>{const L=_=>{if(g.current){const C=g.current.getBoundingClientRect(),W=(_.clientX-C.left)/C.width,te=(_.clientY-C.top)/C.height;c({x:W,y:te})}};return document.addEventListener("mousemove",L),()=>document.removeEventListener("mousemove",L)},[]);const T=(L,_)=>{f(_?L:null);const C=N.current[L];C&&(_?(C.style.transform="translateY(-20px) scale(1.05) rotateX(5deg) rotateY(5deg)",C.style.zIndex="100"):(C.style.transform="translateY(0) scale(1) rotateX(0deg) rotateY(0deg)",C.style.zIndex="10"))},Q=[{icon:"🎯",title:"Modern Design",desc:"Contemporary architectural solutions",color:"#FF6B6B"},{icon:"⚡",title:"Fast Construction",desc:"On-time project delivery",color:"#4ECDC4"},{icon:"💎",title:"Premium Quality",desc:"Best materials & craftsmanship",color:"#45B7D1"},{icon:"🏛️",title:"Innovative Designs",desc:"Creative & functional spaces",color:"#96CEB4"},{icon:"👷",title:"Expert Team",desc:"15+ years of experience",color:"#FFEAA7"},{icon:"🔧",title:"Skilled Workers",desc:"Certified professionals",color:"#DDA0DD"},{icon:"✅",title:"Quality Assurance",desc:"Premium standards",color:"#98D8C8"},{icon:"🔄",title:"Complete Service",desc:"End-to-end solutions",color:"#F7DC6F"}];return i.jsxs("section",{id:"about",className:"about-section",ref:g,children:[i.jsxs("div",{className:"dynamic-background",children:[i.jsx("div",{className:"morph-shape shape-1",style:{transform:`translate(${u.x*30}px, ${u.y*20}px) rotate(${u.x*360}deg)`}}),i.jsx("div",{className:"morph-shape shape-2",style:{transform:`translate(${u.x*-40}px, ${u.y*30}px) rotate(${u.y*-360}deg)`}}),i.jsx("div",{className:"morph-shape shape-3",style:{transform:`translate(${u.x*50}px, ${u.y*-25}px) rotate(${(u.x+u.y)*180}deg)`}})]}),i.jsx("div",{className:"particles-system",children:Array.from({length:25},(L,_)=>i.jsx("div",{className:"floating-particle",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*6}s`}},_))}),i.jsx("div",{className:"client-logos-section",ref:x,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"client-logos-header",children:[i.jsx("h2",{className:"client-logos-title",children:"PTC CLIENT LOGOS"}),i.jsx("div",{className:"client-logos-subtitle",children:"Trusted by Industry Leaders"})]}),i.jsx("div",{className:"client-logos-grid",children:z.map((L,_)=>i.jsxs("div",{className:"client-logo-item",children:[i.jsx("div",{className:"client-logo-container",children:i.jsx("img",{src:L.image,alt:L.name,className:"client-logo-image",onError:C=>{const W=L.fallbackPaths;let te=!1;for(const K of W)if(!C.target.src.includes(K.replace("./","").replace("/public",""))){C.target.src=K,te=!0;break}te||(C.target.style.display="none",C.target.parentElement.innerHTML=`
                          <div class="logo-placeholder">
                            <div class="placeholder-text">${L.name}</div>
                          </div>
                        `)}})}),i.jsx("div",{className:"client-name",children:L.name})]},_))})]})}),i.jsx("div",{className:"container",children:i.jsxs("div",{className:"split-layout",children:[i.jsxs("div",{className:"left-panel",children:[i.jsxs("div",{className:"title-section",ref:b,children:[i.jsxs("div",{className:"title-decoration",children:[i.jsx("span",{className:"deco-line"}),i.jsx("span",{className:"deco-circle"}),i.jsx("span",{className:"deco-line"})]}),i.jsxs("h2",{className:"section-title",children:[i.jsx("span",{className:"title-word word-1",children:"Why"}),i.jsx("span",{className:"title-word word-2",children:"Choose"}),i.jsx("span",{className:"title-word word-3",children:"Us"})]}),i.jsx("div",{className:"title-subtitle",children:"Excellence Redefined"})]}),i.jsx("div",{className:"image-container",ref:p,children:i.jsxs("div",{className:"image-frame",children:[i.jsx("div",{className:"image-overlay",children:i.jsxs("div",{className:"overlay-content",children:[i.jsx("div",{className:"overlay-icon",children:"🏗️"}),i.jsxs("div",{className:"overlay-text",children:[i.jsx("span",{className:"overlay-number",children:"500+"}),i.jsx("span",{className:"overlay-label",children:"Projects"})]})]})}),i.jsx("img",{src:"/images/whyy.jpg",alt:"Construction Excellence",onError:L=>{const _=["/assets/whyy.jpg","./images/whyy.jpg","./assets/whyy.jpg","/public/images/whyy.jpg"];let C=!1;for(const W of _)if(!L.target.src.includes(W.replace("./","").replace("/public",""))){L.target.src=W,C=!0;break}C||(L.target.style.display="none",L.target.parentElement.innerHTML=`
                        <div class="image-placeholder">
                          <div class="placeholder-icon">🏗️</div>
                          <div class="placeholder-text">Construction Excellence</div>
                        </div>
                      `)}})]})})]}),i.jsxs("div",{className:"right-panel",ref:y,children:[i.jsx("div",{className:"content-intro",children:i.jsx("p",{className:"intro-text",children:"We specialize in transforming architectural dreams into stunning reality through innovative design, precision engineering, and uncompromising quality standards."})}),i.jsxs("div",{className:"feature-cards-container",children:[i.jsx("h3",{className:"cards-title",children:"Our Excellence Pillars"}),i.jsx("div",{className:"feature-cards-grid",children:Q.map((L,_)=>i.jsxs("div",{className:"feature-card",ref:C=>N.current[_]=C,onMouseEnter:()=>T(_,!0),onMouseLeave:()=>T(_,!1),style:{"--card-color":L.color,"--hover-intensity":d===_?1:0},children:[i.jsx("div",{className:"card-glow"}),i.jsxs("div",{className:"card-content",children:[i.jsx("div",{className:"card-icon",children:L.icon}),i.jsxs("div",{className:"card-text",children:[i.jsx("div",{className:"card-title",children:L.title}),i.jsx("div",{className:"card-desc",children:L.desc})]})]}),i.jsx("div",{className:"card-shine"})]},_))})]}),i.jsxs("div",{className:"cta-section",children:[i.jsxs("button",{className:"cta-button",onClick:S,onMouseEnter:L=>{L.target.style.transform="translateY(-8px) scale(1.05) rotateX(15deg)",L.target.style.boxShadow="0 30px 60px rgba(183, 156, 92, 0.4)"},onMouseLeave:L=>{L.target.style.transform="translateY(0) scale(1) rotateX(0deg)",L.target.style.boxShadow="0 15px 35px rgba(183, 156, 92, 0.2)"},children:[i.jsx("span",{className:"btn-background"}),i.jsxs("span",{className:"btn-text",children:[i.jsx("span",{className:"btn-icon",children:"🚀"}),"Start Your Project"]}),i.jsx("span",{className:"btn-particles",children:Array.from({length:6},(L,_)=>i.jsx("span",{className:"btn-particle"},_))})]}),i.jsx("div",{className:"cta-subtitle",children:"Free consultation & personalized quote"})]})]})]})})]})},hp=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState({title:!1,subtitle:!1,images:!1,features:!1,button:!1}),f=v.useRef(null);v.useEffect(()=>{const M=new IntersectionObserver(([fe])=>{fe.isIntersecting&&(u(!0),setTimeout(()=>d(q=>({...q,title:!0})),200),setTimeout(()=>d(q=>({...q,subtitle:!0})),1400),setTimeout(()=>d(q=>({...q,images:!0})),1800),setTimeout(()=>d(q=>({...q,features:!0})),2100),setTimeout(()=>d(q=>({...q,button:!0})),2400))},{threshold:.1});return f.current&&M.observe(f.current),()=>{f.current&&M.unobserve(f.current)}},[]);const g={"--primary-color":"#2c3e50","--secondary-color":"#f8f9fa","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},x=`
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
  `;v.useEffect(()=>{const M=document.createElement("style");return M.textContent=x,()=>{document.head.contains(M)&&document.head.removeChild(M)}},[]);const b={...g,backgroundColor:"var(--secondary-color)",padding:"5rem 0",position:"relative",overflow:"hidden",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)",backgroundSize:"400% 400%"},p=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"-5%",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",animation:"float 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"-3%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",animation:"float 10s ease-in-out infinite reverse",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"800px",background:"radial-gradient(circle, rgba(183, 156, 92, 0.05) 0%, transparent 70%)",borderRadius:"50%",animation:"float 12s ease-in-out infinite",zIndex:1}})]}),y={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},N={textAlign:"center",marginBottom:"3rem",perspective:"1000px"},S={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},z=M=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+M*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),T=M=>({display:"inline-block",marginRight:"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #B79C5C, #34495e, #2c3e50)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+M*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),Q={fontSize:"1.2rem",color:"var(--text-color)",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",opacity:c.subtitle?1:0,animation:c.subtitle?"fadeInDelay 1s forwards":"none"},L={display:"flex",gap:"2rem",marginTop:"3rem",marginBottom:"3rem"},_=M=>({flex:1,position:"relative",borderRadius:"var(--border-radius)",overflow:"hidden",boxShadow:"0 15px 35px var(--shadow-color)",transform:c.images?"translateY(0) scale(1) rotateY(0deg)":"translateY(60px) scale(0.8) rotateY(15deg)",opacity:c.images?1:0,animation:c.images?`imageReveal 1s forwards ${M*.2}s`:"none",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer"}),C={width:"100%",height:"300px",objectFit:"cover",transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.9) contrast(1.1)"},W={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(45deg, rgba(183, 156, 92, 0.2), rgba(44, 62, 80, 0.2))",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"1.2rem",fontWeight:"600",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},te={marginTop:"3rem",display:"grid",gap:"1.5rem"},K=M=>({display:"flex",alignItems:"flex-start",background:"var(--light-color)",padding:"1.5rem",borderRadius:"var(--border-radius)",boxShadow:"0 8px 25px var(--shadow-color)",border:"1px solid rgba(183, 156, 92, 0.1)",transform:c.features?"translateX(0) rotateZ(0deg)":"translateX(-50px) rotateZ(-5deg)",opacity:c.features?1:0,animation:c.features?`featureSlideIn 0.6s forwards ${M*.1}s`:"none",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer",position:"relative",overflow:"hidden"}),oe={width:"50px",height:"50px",borderRadius:"50%",background:"linear-gradient(135deg, var(--primary-color), var(--accent-color))",display:"flex",alignItems:"center",justifyContent:"center",marginRight:"1rem",flexShrink:0,color:"white",fontSize:"1.2rem",transition:"all 0.3s ease",position:"relative",zIndex:2},Y={display:"inline-block",background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",color:"white",fontSize:"1.2rem",fontWeight:"600",padding:"1rem 3rem",borderRadius:"50px",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",transform:c.button?"scale(1) rotateZ(0deg)":"scale(0.8) rotateZ(-5deg)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s forwards":"none",boxShadow:"0 10px 25px rgba(183, 156, 92, 0.3)",zIndex:2},$=[{icon:"🏗️",title:"Superior Quality Construction",desc:"Only the best raw materials used for lasting durability"},{icon:"📐",title:"Perfect Planning & Execution",desc:"Designed by a highly qualified architectural team"},{icon:"⏰",title:"On-Time Delivery",desc:"Because we value your time and commitments"},{icon:"💰",title:"Affordable Innovation",desc:"Stylish homes at unbeatable market prices"},{icon:"⭐",title:"Customer Satisfaction Guaranteed",desc:"We build homes that match your dreams perfectly"}];return i.jsxs("section",{ref:f,style:b,children:[p,i.jsxs("div",{style:y,children:[i.jsxs("div",{style:N,children:[i.jsxs("h2",{style:S,children:[i.jsx("span",{style:T(0),children:"Exceptional"}),i.jsx("span",{style:z(1),children:"Deal"}),i.jsx("span",{style:z(2),children:"For"}),i.jsx("span",{style:z(3),children:"Your"}),i.jsx("span",{style:T(4),children:"Dream"}),i.jsx("span",{style:z(5),children:"Home"})]}),i.jsx("p",{style:Q,children:"Discover unparalleled value with Pavan Techno Constructions. We deliver premium quality homes that combine architectural excellence with modern innovation, all at prices that redefine market standards."})]}),i.jsxs("div",{style:L,children:[i.jsxs("div",{style:_(0),onMouseEnter:M=>{M.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(-5deg)",M.currentTarget.style.animation="morphBorder 2s ease-in-out infinite";const fe=M.currentTarget.querySelector("img"),q=M.currentTarget.querySelector(".image-overlay");fe&&(fe.style.transform="scale(1.1) rotate(2deg)"),q&&(q.style.opacity="1")},onMouseLeave:M=>{M.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",M.currentTarget.style.animation="none";const fe=M.currentTarget.querySelector("img"),q=M.currentTarget.querySelector(".image-overlay");fe&&(fe.style.transform="scale(1) rotate(0deg)"),q&&(q.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Modern House Exterior",style:C}),i.jsx("div",{className:"image-overlay",style:W,children:"Stunning Exteriors"})]}),i.jsxs("div",{style:_(1),onMouseEnter:M=>{M.currentTarget.style.transform="translateY(-15px) scale(1.05) rotateY(5deg)",M.currentTarget.style.animation="morphBorder 2s ease-in-out infinite reverse";const fe=M.currentTarget.querySelector("img"),q=M.currentTarget.querySelector(".image-overlay");fe&&(fe.style.transform="scale(1.1) rotate(-2deg)"),q&&(q.style.opacity="1")},onMouseLeave:M=>{M.currentTarget.style.transform="translateY(0) scale(1) rotateY(0deg)",M.currentTarget.style.animation="none";const fe=M.currentTarget.querySelector("img"),q=M.currentTarget.querySelector(".image-overlay");fe&&(fe.style.transform="scale(1) rotate(0deg)"),q&&(q.style.opacity="0")},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Luxurious Interior",style:C}),i.jsx("div",{className:"image-overlay",style:W,children:"Elegant Interiors"})]})]}),i.jsx("div",{style:te,children:$.map((M,fe)=>i.jsxs("div",{style:K(fe),onMouseEnter:q=>{q.currentTarget.style.transform="translateX(10px) scale(1.02) rotateZ(1deg)",q.currentTarget.style.boxShadow="0 15px 40px rgba(183, 156, 92, 0.2)",q.currentTarget.style.background="linear-gradient(135deg, #ffffff, #f8f9fa)";const ne=q.currentTarget.querySelector(".feature-icon");ne&&(ne.style.transform="scale(1.1) rotateY(180deg)",ne.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))")},onMouseLeave:q=>{q.currentTarget.style.transform="translateX(0) scale(1) rotateZ(0deg)",q.currentTarget.style.boxShadow="0 8px 25px var(--shadow-color)",q.currentTarget.style.background="var(--light-color)";const ne=q.currentTarget.querySelector(".feature-icon");ne&&(ne.style.transform="scale(1) rotateY(0deg)",ne.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))")},children:[i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.1), transparent)",transition:"left 0.5s ease"}}),i.jsx("div",{className:"feature-icon",style:oe,children:M.icon}),i.jsxs("div",{style:{flex:1,zIndex:2},children:[i.jsx("h4",{style:{color:"var(--primary-color)",fontSize:"1.1rem",fontWeight:"600",marginBottom:"0.5rem",transition:"all 0.3s ease"},children:M.title}),i.jsx("p",{style:{color:"var(--text-color)",fontSize:"0.95rem",lineHeight:"1.6",margin:0,transition:"all 0.3s ease"},children:M.desc})]})]},fe))}),i.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:i.jsxs("button",{style:Y,onClick:r,onMouseEnter:M=>{M.currentTarget.style.transform="scale(1.05) rotateZ(2deg)",M.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.4)",M.currentTarget.style.background="linear-gradient(135deg, var(--primary-color), var(--accent-color))"},onMouseLeave:M=>{M.currentTarget.style.transform="scale(1) rotateZ(0deg)",M.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.3)",M.currentTarget.style.background="linear-gradient(135deg, var(--accent-color), var(--primary-color))"},children:[i.jsx("span",{style:{position:"relative",zIndex:2},children:"Claim Your Deal Today"}),i.jsx("div",{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",transition:"left 0.5s ease"}})]})})]})]})},Hc=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState({title:!1,text:!1,image:!1,button:!1,stats:!1}),f=v.useRef(null);v.useEffect(()=>{const Y=new IntersectionObserver(([$])=>{$.isIntersecting&&(u(!0),setTimeout(()=>d(M=>({...M,title:!0})),300),setTimeout(()=>d(M=>({...M,text:!0})),700),setTimeout(()=>d(M=>({...M,image:!0})),1e3),setTimeout(()=>d(M=>({...M,stats:!0})),1300),setTimeout(()=>d(M=>({...M,button:!0})),1600))},{threshold:.1});return f.current&&Y.observe(f.current),()=>{f.current&&Y.unobserve(f.current)}},[]);const g=`
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
  `;v.useEffect(()=>{const Y=document.createElement("style");return Y.textContent=g,document.head.appendChild(Y),()=>{document.head.contains(Y)&&document.head.removeChild(Y)}},[]);const x={background:"linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)",padding:"clamp(2rem, 5vw, 5rem) 0",position:"relative",overflow:"hidden",minHeight:"100vh",display:"flex",alignItems:"center"},b=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"clamp(100px, 15vw, 200px)",height:"clamp(100px, 15vw, 200px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(183, 156, 92, 0.05))",animation:"float 8s ease-in-out infinite",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"clamp(80px, 12vw, 150px)",height:"clamp(80px, 12vw, 150px)",borderRadius:"50%",background:"linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05))",animation:"float 10s ease-in-out infinite reverse",zIndex:1,display:window.innerWidth<480?"none":"block"}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"10%",width:"clamp(30px, 6vw, 60px)",height:"clamp(30px, 6vw, 60px)",background:"linear-gradient(45deg, #B79C5C, #8B7355)",transform:"rotate(45deg)",opacity:.3,animation:"geometricRotate 20s linear infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),i.jsx("div",{style:{position:"absolute",bottom:"25%",right:"15%",width:"clamp(40px, 8vw, 80px)",height:"clamp(40px, 8vw, 80px)",background:"linear-gradient(45deg, #3b82f6, #1d4ed8)",clipPath:"polygon(50% 0%, 0% 100%, 100% 100%)",opacity:.3,animation:"float 12s ease-in-out infinite",zIndex:1,display:window.innerWidth<768?"none":"block"}}),[...Array(window.innerWidth<768?3:6)].map((Y,$)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,width:"3px",height:"3px",background:"#B79C5C",borderRadius:"50%",animation:`particleFloat ${15+Math.random()*10}s linear infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1}},$))]}),p={maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(1rem, 4vw, 2rem)",position:"relative",zIndex:2,display:"flex",alignItems:"center",minHeight:"clamp(60vh, 80vh, 90vh)",width:"100%"},y={display:"flex",flexDirection:window.innerWidth<1024?"column":"row",alignItems:"center",gap:"clamp(2rem, 4vw, 4rem)",width:"100%"},N={flex:window.innerWidth<1024?"1":"1 1 55%",position:"relative",width:"100%",order:(window.innerWidth<1024,1)},S={flex:window.innerWidth<1024?"1":"1 1 45%",position:"relative",width:"100%",maxWidth:window.innerWidth<1024?"400px":"none",order:(window.innerWidth<1024,2),margin:window.innerWidth<1024?"2rem auto":"0"},z={fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 clamp(1rem, 3vw, 2rem) 0",perspective:"1000px",position:"relative",textAlign:window.innerWidth<768?"center":"left"},T=Y=>({display:"inline-block",marginRight:window.innerWidth<768?"10px":"20px",opacity:c.title?1:0,transform:c.title?"translateY(0) scale(1)":"translateY(50px) scale(0.8)",background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 50%, #B79C5C 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c.title?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+Y*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),Q={position:"absolute",left:window.innerWidth<768?"50%":"-20px",top:"50%",transform:window.innerWidth<768?"translate(-50%, -50%)":"translateY(-50%)",width:window.innerWidth<768?"80%":"6px",height:window.innerWidth<768?"4px":"80%",background:"linear-gradient(135deg, #B79C5C, #3b82f6)",borderRadius:"3px",animation:c.title?"borderGlow 2s ease-in-out infinite":"none",display:window.innerWidth<480?"none":"block"},L={fontSize:"clamp(1rem, 2.5vw, 1.1rem)",lineHeight:"1.8",color:"#e5e7eb",marginBottom:"clamp(1rem, 2vw, 1.5rem)",transform:c.text?"translateX(0)":"translateX(-30px)",opacity:c.text?1:0,transition:"all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",position:"relative",paddingLeft:window.innerWidth<768?"0.5rem":"1rem",borderLeft:window.innerWidth<768?"2px solid #B79C5C":"2px solid transparent",borderImage:window.innerWidth>=768?"linear-gradient(135deg, #B79C5C, #3b82f6) 1":"none",textAlign:(window.innerWidth<768,"left")},_={display:"grid",gridTemplateColumns:window.innerWidth<768?"repeat(auto-fit, minmax(120px, 1fr))":"repeat(3, 1fr)",gap:"clamp(1rem, 3vw, 2rem)",margin:"clamp(1.5rem, 3vw, 2rem) 0",transform:c.stats?"translateY(0) scale(1)":"translateY(20px) scale(0.8)",opacity:c.stats?1:0,animation:c.stats?"statsCounter 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none"},C={textAlign:"center",padding:"clamp(0.8rem, 2vw, 1rem)",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(59, 130, 246, 0.1))",borderRadius:"clamp(8px, 2vw, 12px)",border:"1px solid rgba(183, 156, 92, 0.3)",backdropFilter:"blur(10px)",transition:"all 0.3s ease"},W={position:"relative",transform:c.image?"translateY(0) scale(1)":"translateY(30px) scale(0.9)",opacity:c.image?1:0,animation:c.image?"imageReveal 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",borderRadius:"clamp(12px, 3vw, 20px)",overflow:"hidden",width:"100%"},te={width:"100%",height:"clamp(300px, 40vw, 500px)",objectFit:"cover",borderRadius:"clamp(12px, 3vw, 20px)",transition:"all 0.5s ease",filter:"brightness(0.9) contrast(1.1) saturate(1.1)"},K={position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(135deg, rgba(183, 156, 92, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)",borderRadius:"clamp(12px, 3vw, 20px)",opacity:0,transition:"all 0.4s ease",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"clamp(1.2rem, 3vw, 1.5rem)",fontWeight:"600",textShadow:"0 2px 10px rgba(0,0,0,0.7)",textAlign:"center",padding:"1rem"},oe={background:"linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)",color:"white",fontSize:"clamp(1rem, 2.5vw, 1.1rem)",fontWeight:"600",padding:"clamp(0.8rem 2rem, 2vw, 1rem 2.5rem)",borderRadius:"50px",border:"none",cursor:"pointer",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",marginTop:"clamp(1.5rem, 3vw, 2rem)",transform:c.button?"scale(1)":"scale(0.8)",opacity:c.button?1:0,animation:c.button?"buttonPulse 1s cubic-bezier(0.23, 1, 0.32, 1) forwards":"none",transition:"all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.3)",width:window.innerWidth<768?"100%":"auto",maxWidth:window.innerWidth<768?"300px":"none",margin:window.innerWidth<768?"clamp(1.5rem, 3vw, 2rem) auto 0 auto":"clamp(1.5rem, 3vw, 2rem) 0 0 0"};return i.jsxs("section",{ref:f,style:x,children:[b,i.jsx("div",{style:p,children:i.jsx("div",{style:y,children:window.innerWidth<1024?i.jsxs("div",{style:N,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:Q}),i.jsxs("h2",{style:z,children:[i.jsx("span",{style:T(0),children:"About"}),i.jsx("span",{style:T(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((Y,$)=>i.jsx("p",{style:{...L,transitionDelay:`${$*.15}s`},onMouseEnter:M=>{window.innerWidth>=768&&(M.currentTarget.style.borderLeft="2px solid #B79C5C",M.currentTarget.style.paddingLeft="1.5rem",M.currentTarget.style.color="#f3f4f6")},onMouseLeave:M=>{window.innerWidth>=768&&(M.currentTarget.style.borderLeft="2px solid transparent",M.currentTarget.style.paddingLeft="1rem",M.currentTarget.style.color="#e5e7eb")},children:Y},$))}),i.jsx("div",{style:{...S,margin:"clamp(2rem, 4vw, 3rem) auto"},children:i.jsxs("div",{style:W,onMouseEnter:Y=>{if(window.innerWidth>=768){Y.currentTarget.style.transform="translateY(-10px) scale(1.02)";const $=Y.currentTarget.querySelector(".image-overlay"),M=Y.currentTarget.querySelector("img");$&&($.style.opacity="1"),M&&(M.style.transform="scale(1.05)")}},onMouseLeave:Y=>{if(window.innerWidth>=768){Y.currentTarget.style.transform="translateY(0) scale(1)";const $=Y.currentTarget.querySelector(".image-overlay"),M=Y.currentTarget.querySelector("img");$&&($.style.opacity="0"),M&&(M.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:te}),i.jsx("div",{className:"image-overlay",style:K,children:"Excellence in Construction"})]})}),i.jsx("div",{style:{position:"relative"},children:["We specialize in a wide range of construction projects, bringing your vision to life through craftsmanship and attention to details. We are also working with the most valuable department in India (M.E.S) with good reputations.","At Pavan Techno Construction, we promise to approach every project with passion and dedication, recognizing that the buildings we create are not just structures, but the backdrops for our client's lives."].map((Y,$)=>i.jsx("p",{style:{...L,transitionDelay:`${($+2)*.15}s`},onMouseEnter:M=>{window.innerWidth>=768&&(M.currentTarget.style.borderLeft="2px solid #B79C5C",M.currentTarget.style.paddingLeft="1.5rem",M.currentTarget.style.color="#f3f4f6")},onMouseLeave:M=>{window.innerWidth>=768&&(M.currentTarget.style.borderLeft="2px solid transparent",M.currentTarget.style.paddingLeft="1rem",M.currentTarget.style.color="#e5e7eb")},children:Y},$+2))}),i.jsxs("div",{style:_,children:[i.jsxs("div",{style:C,onMouseEnter:Y=>{Y.currentTarget.style.transform="translateY(-5px) scale(1.05)",Y.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="translateY(0) scale(1)",Y.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:C,onMouseEnter:Y=>{Y.currentTarget.style.transform="translateY(-5px) scale(1.05)",Y.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="translateY(0) scale(1)",Y.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:C,onMouseEnter:Y=>{Y.currentTarget.style.transform="translateY(-5px) scale(1.05)",Y.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="translateY(0) scale(1)",Y.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:oe,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:Y=>{Y.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",Y.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",Y.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="scale(1)",Y.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",Y.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}):i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:N,children:[i.jsxs("div",{style:{position:"relative"},children:[i.jsx("div",{style:Q}),i.jsxs("h2",{style:z,children:[i.jsx("span",{style:T(0),children:"About"}),i.jsx("span",{style:T(1),children:"Us"})]})]}),i.jsx("div",{style:{position:"relative"},children:["At Pavan Techno Construction, we deliver cost-effective, high-quality construction for residential, commercial, healthcare, and educational projects.","With 8+ years of experience, we've built our reputation on trust, ethics, and exceeding client expectations through passion and commitment.","We specialize in diverse construction projects with meticulous attention to detail. Our work with M.E.S has earned us a strong reputation in the industry.","Every project receives our full dedication, as we understand buildings aren't just structures—they're the foundation for our clients' lives and businesses."].map((Y,$)=>i.jsx("p",{style:{...L,transitionDelay:`${$*.15}s`},onMouseEnter:M=>{window.innerWidth>=768&&(M.currentTarget.style.borderLeft="2px solid #B79C5C",M.currentTarget.style.paddingLeft="1.5rem",M.currentTarget.style.color="#f3f4f6")},onMouseLeave:M=>{window.innerWidth>=768&&(M.currentTarget.style.borderLeft="2px solid transparent",M.currentTarget.style.paddingLeft="1rem",M.currentTarget.style.color="#e5e7eb")},children:Y},$))}),i.jsxs("div",{style:_,children:[i.jsxs("div",{style:C,onMouseEnter:Y=>{Y.currentTarget.style.transform="translateY(-5px) scale(1.05)",Y.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="translateY(0) scale(1)",Y.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"8+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Years Experience"})]}),i.jsxs("div",{style:C,onMouseEnter:Y=>{Y.currentTarget.style.transform="translateY(-5px) scale(1.05)",Y.currentTarget.style.boxShadow="0 15px 30px rgba(59, 130, 246, 0.3)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="translateY(0) scale(1)",Y.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#3b82f6",marginBottom:"0.5rem"},children:"100+"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Projects Completed"})]}),i.jsxs("div",{style:C,onMouseEnter:Y=>{Y.currentTarget.style.transform="translateY(-5px) scale(1.05)",Y.currentTarget.style.boxShadow="0 15px 30px rgba(183, 156, 92, 0.3)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="translateY(0) scale(1)",Y.currentTarget.style.boxShadow="none"},children:[i.jsx("div",{style:{fontSize:"clamp(1.5rem, 4vw, 2rem)",fontWeight:"800",color:"#B79C5C",marginBottom:"0.5rem"},children:"24/7"}),i.jsx("div",{style:{fontSize:"clamp(0.8rem, 2vw, 0.9rem)",color:"#d1d5db"},children:"Support"})]})]}),i.jsx("button",{style:oe,onClick:r||(()=>console.log("Get Started clicked")),onMouseEnter:Y=>{Y.currentTarget.style.transform=window.innerWidth>=768?"scale(1.05)":"scale(1.02)",Y.currentTarget.style.boxShadow="0 20px 40px rgba(183, 156, 92, 0.5)",Y.currentTarget.style.background="linear-gradient(135deg, #3b82f6 0%, #B79C5C 100%)"},onMouseLeave:Y=>{Y.currentTarget.style.transform="scale(1)",Y.currentTarget.style.boxShadow="0 10px 30px rgba(183, 156, 92, 0.3)",Y.currentTarget.style.background="linear-gradient(135deg, #B79C5C 0%, #3b82f6 100%)"},children:i.jsx("span",{style:{position:"relative",zIndex:2},children:"Get Started Today"})})]}),i.jsx("div",{style:S,children:i.jsxs("div",{style:W,onMouseEnter:Y=>{if(window.innerWidth>=768){Y.currentTarget.style.transform="translateY(-10px) scale(1.02)";const $=Y.currentTarget.querySelector(".image-overlay"),M=Y.currentTarget.querySelector("img");$&&($.style.opacity="1"),M&&(M.style.transform="scale(1.05)")}},onMouseLeave:Y=>{if(window.innerWidth>=768){Y.currentTarget.style.transform="translateY(0) scale(1)";const $=Y.currentTarget.querySelector(".image-overlay"),M=Y.currentTarget.querySelector("img");$&&($.style.opacity="0"),M&&(M.style.transform="scale(1)")}},children:[i.jsx("img",{src:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",alt:"Professional Construction Team",style:te}),i.jsx("div",{className:"image-overlay",style:K,children:"Excellence in Construction"}),window.innerWidth>=768&&i.jsx("div",{style:{position:"absolute",top:"-10px",left:"-10px",right:"-10px",bottom:"-10px",border:"2px solid transparent",borderImage:"linear-gradient(135deg, #B79C5C, #3b82f6) 1",borderRadius:"25px",opacity:.5,animation:"borderGlow 3s ease-in-out infinite"}})]})})]})})})]})},xp=()=>{const r=v.useRef(null),[s,u]=v.useState([]),[c,d]=v.useState(!1),[f,g]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const Y=()=>g(window.innerWidth);return window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[]),v.useEffect(()=>{const Y=new IntersectionObserver($=>{$.forEach(M=>{M.isIntersecting&&(M.target.classList.add("section-visible"),setTimeout(()=>d(!0),300),setTimeout(()=>{u(fe=>[...Array(6).keys()])},1500))})},{threshold:.2});return r.current&&Y.observe(r.current),()=>{r.current&&Y.unobserve(r.current)}},[]);const x=[{title:"Residential Construction",icon:"🏠",description:"Premium home building with quality materials and expert craftsmanship for comfortable, durable living spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)"},{title:"Commercial Projects",icon:"🏢",description:"Efficient construction of offices, retail spaces and industrial buildings with modern design and timely delivery.",gradient:"linear-gradient(135deg, #B79C5C 0%, #8B7355 100%)"},{title:"Property Renovation",icon:"🔨",description:"Complete property updates from minor repairs to major overhauls for both residential and commercial buildings.",gradient:"linear-gradient(135deg, #34495e 0%, #2c3e50 100%)"},{title:"Custom Design",icon:"📝",description:"Tailored architectural designs that perfectly balance aesthetics, functionality and client requirements.",gradient:"linear-gradient(135deg, #8B7355 0%, #B79C5C 100%)"},{title:"Interior Solutions",icon:"🎨",description:"Full-service interior design from concept to installation for beautiful, functional living and working spaces.",gradient:"linear-gradient(135deg, #2c3e50 0%, #B79C5C 100%)"},{title:"Project Management",icon:"📊",description:"Comprehensive oversight of all construction phases ensuring quality, timeline adherence and budget management.",gradient:"linear-gradient(135deg, #B79C5C 0%, #34495e 100%)"}],b=`
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
  `,p={minHeight:"100vh",background:"linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",padding:"6rem 0",position:"relative",overflow:"hidden"},y={position:"absolute",width:"300px",height:"300px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1))",borderRadius:"50%",top:"10%",right:"-5%",animation:"float 6s ease-in-out infinite",zIndex:1},N={position:"absolute",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(139, 115, 85, 0.1), rgba(52, 73, 94, 0.1))",borderRadius:"30%",bottom:"20%",left:"-3%",animation:"float 8s ease-in-out infinite reverse",zIndex:1},S={maxWidth:f<=900?"100%":"1200px",margin:"0 auto",padding:f<=480?"0 1rem":f<=768?"0 1.5rem":"0 2rem",position:"relative",zIndex:2,display:f<=900?"flex":"block",flexDirection:f<=900?"column":"row",alignItems:f<=900?"center":"flex-start"},z={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px",width:f<=900?"100%":"auto",maxWidth:f<=900?"400px":"none"},T={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px"},Q=Y=>({display:"inline-block",marginRight:"20px",opacity:c?1:0,transform:c?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:c?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+Y*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),L={fontSize:"1.2rem",color:"#6c757d",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",transform:c?"translateY(0) scale(1)":"translateY(40px) scale(0.8)",opacity:c?1:0,animation:c?"subtitleReveal 1s ease-out 1.6s forwards":"none"},_=()=>f<=480?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem",marginTop:"4rem",width:"100%",maxWidth:"350px",margin:"4rem auto 0"}:f<=768?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"400px",margin:"4rem auto 0"}:f<=900?{display:"flex",flexDirection:"column",alignItems:"center",gap:"2.5rem",marginTop:"4rem",width:"100%",maxWidth:"450px",margin:"4rem auto 0"}:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(350px, 1fr))",gap:"2.5rem",marginTop:"4rem"},C=(Y,$)=>{const M=f<=344?"280px":f<=375?"300px":f<=390?"310px":f<=480?"320px":f<=768?"350px":f<=900?"380px":"100%";return{background:"linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(248, 249, 250, 0.95))",borderRadius:"24px",padding:f<=480?"2rem":"2.5rem",position:"relative",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)",border:"1px solid rgba(183, 156, 92, 0.15)",backdropFilter:"blur(10px)",transform:$?"translateY(0) scale(1) rotateX(0)":"translateY(80px) scale(0.85) rotateX(15deg)",opacity:$?1:0,transition:"all 1s cubic-bezier(0.23, 1, 0.32, 1)",transitionDelay:`${Y*.12}s`,cursor:"pointer",transformStyle:"preserve-3d",perspective:"1000px",width:f<=900?M:"100%",maxWidth:f<=900?M:"none",margin:f<=900?"0 auto":"0",flexShrink:f<=900?0:1}},W={width:"80px",height:"80px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",marginBottom:"1.5rem",position:"relative",zIndex:2},te={fontSize:f<=480?"1.4rem":"1.6rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1.2rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",letterSpacing:"0.5px"},K={color:"#495057",lineHeight:"1.8",fontSize:f<=480?"0.9rem":"1rem",position:"relative",zIndex:3,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},oe={position:"absolute",top:0,left:0,right:0,bottom:0,opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",borderRadius:"24px",zIndex:1,background:"linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",backdropFilter:"blur(20px)"};return v.useEffect(()=>{const Y=document.createElement("style");return Y.textContent=b,document.head.appendChild(Y),()=>{document.head.contains(Y)&&document.head.removeChild(Y)}},[]),i.jsxs("section",{ref:r,style:p,children:[i.jsx("div",{style:y}),i.jsx("div",{style:N}),i.jsxs("div",{style:S,children:[i.jsxs("div",{style:z,children:[i.jsxs("h2",{style:T,children:[i.jsx("span",{style:Q(0),children:"Our"}),i.jsx("span",{style:Q(1),children:"Premium"}),i.jsx("span",{style:Q(2),children:"Services"})]}),i.jsx("p",{style:L,children:"We provide a comprehensive range of construction services, from inception to completion. Every detail matters in transforming your vision into reality, creating spaces that inspire and endure."})]}),i.jsx("div",{style:_(),children:x.map((Y,$)=>i.jsxs("div",{style:C($,s.includes($)),onMouseEnter:M=>{if(f>768){M.currentTarget.style.transform="translateY(-20px) scale(1.05) rotateX(-5deg) rotateY(5deg)",M.currentTarget.style.boxShadow="0 35px 60px rgba(44, 62, 80, 0.15), 0 15px 25px rgba(183, 156, 92, 0.1)";const fe=M.currentTarget.querySelector(".card-overlay"),q=M.currentTarget.querySelector(".shimmer-effect"),ne=M.currentTarget.querySelector(".card-title"),me=M.currentTarget.querySelector(".card-description"),ee=M.currentTarget.querySelector(".icon-container");fe&&(fe.style.opacity="0.4",fe.style.background=Y.gradient),q&&(q.style.opacity="1",q.style.transform="translateX(350px)"),ne&&(ne.style.color="#ffffff",ne.style.textShadow="0 2px 4px rgba(0, 0, 0, 0.3)",ne.style.transform="translateY(-2px)"),me&&(me.style.color="rgba(255, 255, 255, 0.9)",me.style.textShadow="0 1px 2px rgba(0, 0, 0, 0.2)"),ee&&(ee.style.transform="scale(1.1) rotateY(180deg)",ee.style.boxShadow="0 8px 25px rgba(0, 0, 0, 0.2)")}},onMouseLeave:M=>{if(f>768){M.currentTarget.style.transform="translateY(0) scale(1) rotateX(0) rotateY(0)",M.currentTarget.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04)";const fe=M.currentTarget.querySelector(".card-overlay"),q=M.currentTarget.querySelector(".shimmer-effect"),ne=M.currentTarget.querySelector(".card-title"),me=M.currentTarget.querySelector(".card-description"),ee=M.currentTarget.querySelector(".icon-container");fe&&(fe.style.opacity="0"),q&&(q.style.opacity="0",q.style.transform="translateX(-350px)"),ne&&(ne.style.color="#2c3e50",ne.style.textShadow="none",ne.style.transform="translateY(0)"),me&&(me.style.color="#495057",me.style.textShadow="none"),ee&&(ee.style.transform="scale(1) rotateY(0deg)",ee.style.boxShadow="0 4px 15px rgba(0, 0, 0, 0.1)")}},children:[i.jsx("div",{className:"card-overlay",style:oe}),i.jsx("div",{className:"shimmer-effect",style:{position:"absolute",top:0,left:"-350px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",transform:"skewX(-20deg)",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",opacity:0,zIndex:2}}),i.jsx("div",{className:"icon-container",style:{...W,background:Y.gradient,transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:"0 4px 15px rgba(0, 0, 0, 0.1)"},children:i.jsx("span",{style:{filter:"brightness(0) invert(1)",transition:"all 0.3s ease",display:"block"},children:Y.icon})}),i.jsx("h3",{className:"card-title",style:te,children:Y.title}),i.jsx("p",{className:"card-description",style:K,children:Y.description})]},$))})]})]})},bp=({openPopup:r})=>{const[s,u]=v.useState({}),[c,d]=v.useState(!1),f=v.useRef(null),g=v.useRef(null);v.useEffect(()=>{const y=new IntersectionObserver(N=>{N.forEach(S=>{S.isIntersecting&&(d(!0),S.target.classList.add("section-visible"),g.current&&g.current.classList.add("heading-visible"))})},{threshold:.1});return f.current&&y.observe(f.current),()=>{f.current&&y.unobserve(f.current)}},[]);const x=[{id:"basic",name:"Basic Package",price:"RS.1600/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"premium",name:"Premium Package",price:"RS.1800/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]},{id:"luxury",name:"Luxury Package",price:"RS.2150/- + GST",features:["Design & Drawings","Core Construction Materials","Architecture Detailing","Flooring & Wall Tiling","Painting","Electrical","Plumbing","Doors","Windows","Kitchen & Bathroom Fixtures","Fabrications works","Warranty period"]}],b=(y,N)=>{u(S=>({...S,[y]:S[y]===N?null:N}))},p=r||(()=>alert("Package selected!"));return i.jsxs("section",{id:"pricing",className:"pricing-section",ref:f,children:[i.jsxs("div",{className:"animated-bg",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape square-2"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:`heading-container ${c?"heading-visible":""}`,ref:g,children:[i.jsx("h1",{className:"main-heading",children:"OUR PRICING"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"Choose the perfect package that suits your needs and budget"})]})}),i.jsx("div",{className:"pricing-container",children:x.map((y,N)=>i.jsxs("div",{className:`pricing-card ${y.id}`,style:{animationDelay:`${.2*N}s`},children:[i.jsxs("div",{className:"pricing-header",children:[i.jsx("h3",{children:y.name}),i.jsx("div",{className:"price",children:y.price})]}),i.jsx("div",{className:"pricing-features",children:y.features.map((S,z)=>i.jsxs("div",{className:"feature",children:[i.jsxs("div",{className:"feature-name",onClick:()=>b(y.id,z),children:[S,i.jsx("span",{className:`arrow ${s[y.id]===z?"rotated":""}`,children:"›"})]}),i.jsx("div",{className:`feature-details ${s[y.id]===z?"show":""}`,children:i.jsxs("p",{children:["More details about ",S.toLowerCase()," for the ",y.name,". This includes premium quality materials and professional installation."]})})]},z))}),i.jsx("button",{onClick:p,className:"btn btn-pricing",children:"Select Package"})]},N))})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},qc=()=>{const r=v.useRef(null),[s,u]=v.useState(!1);v.useEffect(()=>{const y=r.current,N=()=>{const S=window.scrollY,z=y.getBoundingClientRect().top+window.scrollY;if(S>z-window.innerHeight&&S<z+y.offsetHeight){const T=(S-(z-window.innerHeight))*.5;y.style.transform=`translateX(-${T}px)`}};return window.addEventListener("scroll",N),()=>{window.removeEventListener("scroll",N)}},[]);const c=`
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
          `,animation:"subtleOverlay 15s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(183, 156, 92, 0.6), transparent)",zIndex:2}}),i.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent)",zIndex:2}})]}),g={width:"100%",height:"80px",overflow:"hidden",whiteSpace:"nowrap",position:"relative",zIndex:3,display:"flex",alignItems:"center"},x={display:"inline-block",whiteSpace:"nowrap",willChange:"transform"},b={display:"inline-block",marginRight:"60px",fontSize:"2.2rem",fontWeight:"700",textTransform:"uppercase",letterSpacing:"2px",color:"#ffffff",textShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",position:"relative"},p={color:"rgba(183, 156, 92, 1)",fontWeight:"800",textShadow:"0 2px 8px rgba(183, 156, 92, 0.4)",position:"relative"};return i.jsxs("section",{style:d,children:[f,i.jsx("div",{style:g,children:i.jsx("div",{style:x,ref:r,children:Array(12).fill().map((y,N)=>i.jsxs("span",{style:b,children:["BOOK NOW"," ",i.jsx("span",{style:p,children:"BOOK NOW"})]},N))})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
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
      `})]})},Xc=()=>{const r=v.useRef(null),[s,u]=v.useState([]),[c,d]=v.useState(!1),[f,g]=v.useState(!1),[x,b]=v.useState(typeof window<"u"?window.innerWidth:1200);v.useEffect(()=>{const q=()=>{b(window.innerWidth)};return window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]),v.useEffect(()=>{const q=new IntersectionObserver(ne=>{ne.forEach(me=>{me.isIntersecting&&(d(!0),setTimeout(()=>g(!0),300),setTimeout(()=>u([0]),1e3),setTimeout(()=>u([0,1]),1200),setTimeout(()=>u([0,1,2]),1400))})},{threshold:.2});return r.current&&q.observe(r.current),()=>{r.current&&q.unobserve(r.current)}},[]);const p=`
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
  `;v.useEffect(()=>{const q=document.createElement("style");return q.textContent=p,document.head.appendChild(q),()=>{document.head.contains(q)&&document.head.removeChild(q)}},[]);const y=[{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/5124556-1-1.png",title:"Consultation & Planning",description:"Strategic consultation meets architectural innovation. We decode your vision into precision blueprints with cutting-edge planning methodologies.",number:"01",color:"#e74c3c"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/19198827-1.png",title:"Design & Development",description:"Where creativity meets engineering excellence. Our design studio transforms concepts into revolutionary architectural solutions.",number:"02",color:"#3498db"},{icon:"https://assurancedevelopers.com/wp-content/uploads/2024/07/20945160-1-2.png",title:"Construction & Handover",description:"Precision construction powered by advanced technology. From foundation to final handover, excellence in every detail.",number:"03",color:"#2ecc71"}],N={padding:x<768?"4rem 0":"8rem 0",background:`
      linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(44, 62, 80, 0.08) 0%, transparent 50%)
    `,position:"relative",overflow:"hidden",color:"#2c3e50"},S={maxWidth:"1600px",margin:"0 auto",padding:x<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},z={textAlign:"center",marginBottom:x<768?"3rem":"6rem",position:"relative",perspective:"1000px"},T={fontSize:x<480?"2.2rem":x<768?"2.8rem":x<1024?"3.5rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:x<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px"},Q=q=>({display:"inline-block",marginRight:x<768?"10px":"20px",opacity:f?1:0,transform:f?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:f?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+q*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),L={fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",color:"#64748b",maxWidth:"800px",margin:"0 auto",lineHeight:"1.8",padding:x<768?"0 1rem":"0",opacity:f?1:0,animation:f?"subtitleFadeUp 1s ease-out forwards 1.2s":"none"},_={display:"grid",gridTemplateColumns:x<768?"1fr":x<1024?"repeat(auto-fit, minmax(300px, 1fr))":"repeat(3, 1fr)",gap:x<480?"2rem":x<768?"2.5rem":"3rem",marginTop:x<768?"2rem":"4rem",position:"relative"},C=(q,ne)=>({position:"relative",background:"rgba(255, 255, 255, 0.9)",borderRadius:x<768?"20px":"24px",padding:x<480?"2rem 1rem":x<768?"2.5rem 1.5rem":"3rem 2rem",margin:x<768?"0 auto":"0",maxWidth:x<768?"400px":"none",width:"100%",border:"1px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",backdropFilter:"blur(10px)",transform:ne?"translateY(0) scale(1)":"translateY(40px) scale(0.95)",opacity:ne?1:0,animation:ne?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${q*.15}s`:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",overflow:"hidden"}),W={position:"absolute",top:"-15px",left:"50%",transform:"translateX(-50%)",width:x<480?"45px":x<768?"50px":"60px",height:x<480?"45px":x<768?"50px":"60px",borderRadius:"50%",background:"linear-gradient(135deg, #B79C5C, #2c3e50)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:x<480?"1rem":x<768?"1.2rem":"1.4rem",fontWeight:"800",color:"#ffffff",border:"3px solid rgba(255, 255, 255, 0.9)",zIndex:3,boxShadow:"0 8px 25px rgba(44, 62, 80, 0.3)",transition:"all 0.3s ease"},te={width:x<480?"70px":x<768?"80px":"100px",height:x<480?"70px":x<768?"80px":"100px",margin:x<768?"1.5rem auto":"2rem auto",borderRadius:"50%",background:"rgba(255, 255, 255, 0.8)",display:"flex",alignItems:"center",justifyContent:"center",border:"2px solid rgba(183, 156, 92, 0.3)",boxShadow:"0 8px 25px rgba(44, 62, 80, 0.1)",position:"relative",transition:"all 0.3s ease"},K={width:"50%",height:"50%",objectFit:"contain",filter:"brightness(1.1) contrast(1.1)",transition:"all 0.3s ease"},oe={textAlign:"center",position:"relative",zIndex:2},Y={fontSize:x<480?"1.2rem":x<768?"1.3rem":"1.5rem",fontWeight:"700",color:"#2c3e50",marginBottom:"1rem",letterSpacing:"0.5px",lineHeight:"1.3",transition:"all 0.3s ease"},$={fontSize:x<480?"0.9rem":x<768?"0.95rem":"1rem",color:"#64748b",lineHeight:"1.6",transition:"all 0.3s ease"},M=i.jsx(i.Fragment,{children:x>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 6s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(44, 62, 80, 0.05)",borderRadius:"30%",animation:"backgroundFloat 8s ease-in-out infinite reverse",zIndex:1}})]})}),fe=(q,ne)=>{if(x<768)return;const me=q.currentTarget,ee=me.querySelector(".number-container"),re=me.querySelector(".icon-container"),D=me.querySelector(".step-icon"),I=me.querySelector(".step-title"),ae=me.querySelector(".step-description");ne?(me.style.transform="translateY(-15px) scale(1.02)",me.style.boxShadow="0 25px 50px rgba(44, 62, 80, 0.15), 0 15px 30px rgba(183, 156, 92, 0.2)",me.style.borderColor="rgba(183, 156, 92, 0.4)",ee&&(ee.style.transform="translateX(-50%) scale(1.1)",ee.style.background="linear-gradient(135deg, #2c3e50, #B79C5C)"),re&&(re.style.transform="scale(1.1)",re.style.borderColor="rgba(183, 156, 92, 0.5)",re.style.background="rgba(255, 255, 255, 0.95)"),D&&(D.style.transform="scale(1.2)",D.style.filter="brightness(1.3) contrast(1.2)"),I&&(I.style.color="#B79C5C"),ae&&(ae.style.color="#2c3e50")):(me.style.transform="translateY(0) scale(1)",me.style.boxShadow="0 10px 30px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",me.style.borderColor="rgba(183, 156, 92, 0.2)",ee&&(ee.style.transform="translateX(-50%) scale(1)",ee.style.background="linear-gradient(135deg, #B79C5C, #2c3e50)"),re&&(re.style.transform="scale(1)",re.style.borderColor="rgba(183, 156, 92, 0.3)",re.style.background="rgba(255, 255, 255, 0.8)"),D&&(D.style.transform="scale(1)",D.style.filter="brightness(1.1) contrast(1.1)"),I&&(I.style.color="#2c3e50"),ae&&(ae.style.color="#64748b"))};return i.jsxs("section",{style:N,ref:r,children:[M,i.jsxs("div",{style:S,children:[i.jsxs("div",{style:z,children:[i.jsxs("h2",{style:T,children:[i.jsx("span",{style:Q(0),children:"How"}),i.jsx("span",{style:Q(1),children:"We"}),i.jsx("span",{style:Q(2),children:"Work?"})]}),i.jsx("p",{style:L,children:"Revolutionary construction methodology powered by cutting-edge technology and architectural innovation"})]}),i.jsx("div",{style:_,children:y.map((q,ne)=>{const me=s.includes(ne);return i.jsxs("div",{style:C(ne,me),onMouseEnter:ee=>fe(ee,!0),onMouseLeave:ee=>fe(ee,!1),onTouchStart:ee=>{x<768&&(ee.currentTarget.style.transform="scale(0.98)")},onTouchEnd:ee=>{x<768&&(ee.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{style:W,className:"number-container",children:q.number}),i.jsx("div",{className:"icon-container",style:te,children:i.jsx("img",{src:q.icon,alt:q.title,style:K,className:"step-icon"})}),i.jsxs("div",{style:oe,children:[i.jsx("h3",{style:Y,className:"step-title",children:q.title}),i.jsx("p",{style:$,className:"step-description",children:q.description})]})]},ne)})})]})]})};var Cg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yp=ea.createContext&&ea.createContext(Cg),i5=["attr","size","title"];function r5(r,s){if(r==null)return{};var u=l5(r,s),c,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(r);for(d=0;d<f.length;d++)c=f[d],!(s.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(r,c)&&(u[c]=r[c])}return u}function l5(r,s){if(r==null)return{};var u={};for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)){if(s.indexOf(c)>=0)continue;u[c]=r[c]}return u}function $l(){return $l=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(r[c]=u[c])}return r},$l.apply(this,arguments)}function vp(r,s){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(r);s&&(c=c.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),u.push.apply(u,c)}return u}function eo(r){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?vp(Object(u),!0).forEach(function(c){o5(r,c,u[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):vp(Object(u)).forEach(function(c){Object.defineProperty(r,c,Object.getOwnPropertyDescriptor(u,c))})}return r}function o5(r,s,u){return s=s5(s),s in r?Object.defineProperty(r,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[s]=u,r}function s5(r){var s=c5(r,"string");return typeof s=="symbol"?s:s+""}function c5(r,s){if(typeof r!="object"||!r)return r;var u=r[Symbol.toPrimitive];if(u!==void 0){var c=u.call(r,s);if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(r)}function Ag(r){return r&&r.map((s,u)=>ea.createElement(s.tag,eo({key:u},s.attr),Ag(s.child)))}function so(r){return s=>ea.createElement(u5,$l({attr:eo({},r.attr)},s),Ag(r.child))}function u5(r){var s=u=>{var{attr:c,size:d,title:f}=r,g=r5(r,i5),x=d||u.size||"1em",b;return u.className&&(b=u.className),r.className&&(b=(b?b+" ":"")+r.className),ea.createElement("svg",$l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,c,g,{className:b,style:eo(eo({color:r.color||u.color},u.style),r.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),f&&ea.createElement("title",null,f),r.children)};return yp!==void 0?ea.createElement(yp.Consumer,null,u=>s(u)):s(Cg)}function d5(r){return so({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(r)}function f5(r){return so({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"},child:[]}]})(r)}function m5(r){return so({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(r)}function p5(r){return so({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"},child:[]}]})(r)}const Vc=()=>{const r=v.useRef(null),s=v.useRef([]),u=v.useRef(null),[c,d]=v.useState(!1),[f,g]=v.useState([]),[x,b]=v.useState(!1),[p,y]=v.useState(typeof window<"u"?window.innerWidth:1200),N=p<480?24:p<768?28:36;v.useEffect(()=>{const ee=()=>{y(window.innerWidth)};return window.addEventListener("resize",ee),()=>window.removeEventListener("resize",ee)},[]),v.useEffect(()=>{const ee=new IntersectionObserver(re=>{re.forEach(D=>{D.isIntersecting&&(d(!0),D.target.classList.add("section-visible"),setTimeout(()=>b(!0),300),setTimeout(()=>S(),1e3),setTimeout(()=>g([0]),1600),setTimeout(()=>g([0,1]),1700),setTimeout(()=>g([0,1,2]),1800),setTimeout(()=>g([0,1,2,3]),1900))})},{threshold:.3});return r.current&&ee.observe(r.current),()=>{r.current&&ee.unobserve(r.current)}},[]);const S=()=>{s.current.forEach((re,D)=>{if(!re)return;const I=parseInt(re.getAttribute("data-target")),ve=I/(2500/50);let j=0;setTimeout(()=>{const X=()=>{j+=ve,j<I?(re.textContent=Math.ceil(j),setTimeout(X,50)):re.textContent=I};X()},D*200)})},z=`
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
  `;v.useEffect(()=>{const ee=document.createElement("style");return ee.textContent=z,document.head.appendChild(ee),()=>{document.head.contains(ee)&&document.head.removeChild(ee)}},[]);const T=[{icon:i.jsx(m5,{size:N,color:"#B79C5C"}),value:15,suffix:"+",label:"YEARS LEGACY"},{icon:i.jsx(f5,{size:N,color:"#3498db"}),value:12,suffix:"+",label:"LAKHS SQ.FT DELIVERED"},{icon:i.jsx(d5,{size:N,color:"#B79C5C"}),value:60,suffix:"+",label:"PROJECTS DELIVERED"},{icon:i.jsx(p5,{size:N,color:"#3498db"}),value:4,suffix:"",label:"CITIES",subtext:"Bangalore, Mangalore, Hyderabad, Chennai"}],Q={padding:p<768?"4rem 0":"6rem 0",background:`
      linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%),
      radial-gradient(circle at 20% 50%, rgba(183, 156, 92, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(52, 152, 219, 0.1) 0%, transparent 50%)
    `,color:"#ffffff",overflow:"hidden",position:"relative"},L={maxWidth:"1400px",margin:"0 auto",padding:p<768?"0 1rem":"0 2rem",position:"relative",zIndex:2},_={textAlign:"center",marginBottom:p<768?"3rem":"5rem",position:"relative",perspective:"1000px"},C={fontSize:p<480?"1.9rem":p<768?"2.3rem":"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:p<768?"1.2":"1.1",margin:"0 0 2rem 0",perspective:"1000px",textTransform:"uppercase",letterSpacing:p<480?"1px":"3px"},W=ee=>({display:"inline-block",marginRight:p<768?"10px":"20px",opacity:x?1:0,transform:x?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #ffffff 0%, #B79C5C 50%, #ffffff 100%)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:x?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.5+ee*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),te={fontSize:p<768?"1.1rem":"1.3rem",color:"#B79C5C",opacity:x?.9:0,animation:x?"subtitleFadeUp 1s ease-out forwards 1.2s":"none",letterSpacing:"1px",textTransform:"uppercase"},K={height:"4px",background:"linear-gradient(90deg, transparent, #B79C5C, transparent)",margin:"1rem auto",borderRadius:"2px",boxShadow:x?"0 0 20px rgba(183, 156, 92, 0.5)":"none",animation:x?"underlineExpand 1.5s ease-out forwards 1.4s":"none",width:"0"},oe={display:"grid",gridTemplateColumns:p<768||p<1200?"repeat(2, 1fr)":"repeat(4, 1fr)",gridTemplateRows:p<768?"repeat(2, 1fr)":"auto",gap:p<480?"1rem":p<768?"1.5rem":"2rem",marginTop:p<768?"2rem":"4rem",maxWidth:p<768?"400px":"1200px",margin:`${p<768?"2rem":"4rem"} auto 0`,padding:p<768?"0 0.5rem":"0"},Y=(ee,re)=>({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",background:"rgba(30, 30, 30, 0.8)",borderRadius:p<768?"16px":"20px",padding:p<480?"1.2rem 0.8rem":p<768?"1.5rem 1rem":"2rem 1.5rem",border:`1px solid ${ee%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)"}`,position:"relative",overflow:"hidden",cursor:"pointer",transform:re?"translateY(0) scale(1)":"translateY(30px) scale(0.95)",opacity:re?1:0,animation:re?`cardFadeUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards ${ee*.1}s`:"none",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",minHeight:p<480?"160px":p<768?"180px":"280px",backdropFilter:"blur(10px)",boxShadow:`0 15px 35px ${ee%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`}),$=ee=>({width:p<480?"50px":p<768?"60px":"90px",height:p<480?"50px":p<768?"60px":"90px",marginBottom:p<768?"1rem":"1.5rem",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(40, 40, 40, 0.8)",borderRadius:"50%",border:`2px solid ${ee%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)"}`,position:"relative",boxShadow:`0 10px 25px ${ee%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 5px 15px rgba(0, 0, 0, 0.4)`,transition:"all 0.3s ease"}),M=ee=>({color:ee%2===0?"#B79C5C":"#3498db",transition:"all 0.3s ease",filter:"drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",display:"flex",alignItems:"center",justifyContent:"center",width:p<480?"1.5rem":p<768?"1.8rem":"2.5rem",height:p<480?"1.5rem":p<768?"1.8rem":"2.5rem"}),fe=ee=>({fontSize:p<480?"1.8rem":p<768?"2.2rem":"2.8rem",fontWeight:"900",marginBottom:"0.5rem",background:`linear-gradient(135deg, #ffffff, ${ee%2===0?"#B79C5C":"#3498db"})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",letterSpacing:"1px",transition:"all 0.3s ease"}),q={fontSize:p<480?"0.7rem":p<768?"0.8rem":"0.9rem",textTransform:"uppercase",color:"rgba(255, 255, 255, 0.9)",letterSpacing:"0.5px",lineHeight:"1.3",fontWeight:"600",transition:"all 0.3s ease"},ne=i.jsx(i.Fragment,{children:p>=768&&i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"15%",right:"10%",width:"150px",height:"150px",background:"rgba(183, 156, 92, 0.05)",borderRadius:"50%",animation:"backgroundFloat 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"20%",left:"8%",width:"120px",height:"120px",background:"rgba(52, 152, 219, 0.05)",borderRadius:"30%",animation:"backgroundFloat 10s ease-in-out infinite reverse",zIndex:1}})]})}),me=(ee,re,D)=>{if(p<768)return;const I=ee.currentTarget,ae=I.querySelector(".record-icon"),ve=I.querySelector(".icon-svg"),j=I.querySelector(".record-value"),X=I.querySelector(".record-label");D?(I.style.transform="translateY(-15px) scale(1.05)",I.style.boxShadow=`0 25px 50px ${re%2===0?"rgba(183, 156, 92, 0.2)":"rgba(52, 152, 219, 0.2)"}, 0 15px 30px rgba(0, 0, 0, 0.4)`,I.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.6)":"rgba(52, 152, 219, 0.6)",ae&&(ae.style.transform="scale(1.15)",ae.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.8)":"rgba(52, 152, 219, 0.8)",ae.style.background="rgba(50, 50, 50, 0.9)"),ve&&(ve.style.transform="scale(1.2)",ve.style.filter="drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))"),j&&(j.style.transform="scale(1.1)"),X&&(X.style.color=re%2===0?"#B79C5C":"#3498db")):(I.style.transform="translateY(0) scale(1)",I.style.boxShadow=`0 15px 35px ${re%2===0?"rgba(183, 156, 92, 0.1)":"rgba(52, 152, 219, 0.1)"}, 0 5px 15px rgba(0, 0, 0, 0.3)`,I.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.3)":"rgba(52, 152, 219, 0.3)",ae&&(ae.style.transform="scale(1)",ae.style.borderColor=re%2===0?"rgba(183, 156, 92, 0.5)":"rgba(52, 152, 219, 0.5)",ae.style.background="rgba(40, 40, 40, 0.8)"),ve&&(ve.style.transform="scale(1)",ve.style.filter="drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))"),j&&(j.style.transform="scale(1)"),X&&(X.style.color="rgba(255, 255, 255, 0.9)"))};return i.jsxs("section",{style:Q,ref:r,children:[ne,i.jsxs("div",{style:L,children:[i.jsx("div",{style:_,children:i.jsxs("div",{ref:u,children:[i.jsxs("h1",{style:C,children:[i.jsx("span",{style:W(0),children:"Our"}),i.jsx("span",{style:W(1),children:"Track"}),i.jsx("span",{style:W(2),children:"Record"})]}),i.jsx("div",{style:K}),i.jsx("p",{style:te,children:"Excellence in Numbers"})]})}),i.jsx("div",{style:oe,children:T.map((ee,re)=>{const D=f.includes(re);return i.jsxs("div",{style:Y(re,D),onMouseEnter:I=>me(I,re,!0),onMouseLeave:I=>me(I,re,!1),onTouchStart:I=>{p<768&&(I.currentTarget.style.transform="scale(0.98)")},onTouchEnd:I=>{p<768&&(I.currentTarget.style.transform="scale(1)")},children:[i.jsx("div",{className:"record-icon",style:$(re),children:i.jsx("div",{className:"icon-svg",style:M(re),children:ee.icon})}),i.jsxs("div",{className:"record-detail",children:[i.jsxs("h3",{className:"record-value",style:fe(re),children:[i.jsx("span",{ref:I=>{I&&(s.current[re]=I)},"data-target":ee.value,children:"0"}),ee.suffix]}),i.jsx("h5",{className:"record-label",style:q,children:ee.label}),ee.subtext&&i.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.8)",marginTop:"0.5rem",textAlign:"center",fontWeight:"400",lineHeight:"1.4"},children:ee.subtext})]})]},re)})})]})]})},wp=()=>{const[r,s]=v.useState(0),[u,c]=v.useState(!1),[d,f]=v.useState(!1),g=v.useRef(null),x=v.useRef(null),b=[{id:1,name:"Sangeeta Reddy",role:"Homeowner",testimonial:"Pavan Techno Constructions provided us with a beautiful and modern home at an affordable price. Their innovative designs and attention to detail truly made a difference. Highly recommended!",rating:5,project:"Villa Construction"},{id:2,name:"Anusha Patel",role:"Property Owner",testimonial:"I got my apartment renovated by Pavan Techno Constructions, and I must say their work exceeded my expectations. They used high-quality materials and completed the work within the given timeline.",rating:5,project:"Apartment Renovation"},{id:3,name:"Manoj Sharma",role:"Client",testimonial:"What I loved the most was their commitment to customer satisfaction. They listened to all my requirements and customized the house exactly how I wanted it. Great work and amazing experience!",rating:5,project:"Custom Home Design"}],p={"--primary-color":"#2c3e50","--accent-color":"#B79C5C","--light-color":"#ffffff","--text-color":"#495057","--secondary-color":"#f8f9fa","--shadow-color":"rgba(44, 62, 80, 0.1)","--border-radius":"16px","--transition":"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"},y=`
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
  `;v.useEffect(()=>{const G=document.createElement("style");return G.textContent=y,document.head.appendChild(G),()=>{document.head.contains(G)&&document.head.removeChild(G)}},[]);const N=()=>{s(G=>(G+1)%b.length)},S=()=>{s(G=>(G-1+b.length)%b.length)};v.useEffect(()=>{const G=new IntersectionObserver(J=>{J.forEach(ie=>{ie.isIntersecting&&(c(!0),ie.target.classList.add("section-visible"),setTimeout(()=>f(!0),300))})},{threshold:.3});return x.current&&G.observe(x.current),g.current=setInterval(()=>{N()},6e3),()=>{g.current&&clearInterval(g.current),x.current&&G.unobserve(x.current)}},[]);const z=G=>{s(G),g.current&&clearInterval(g.current),g.current=setInterval(()=>{N()},6e3)},T={...p,padding:"6rem 0",background:`
      linear-gradient(135deg, var(--light-color) 0%, var(--secondary-color) 50%, var(--light-color) 100%),
      radial-gradient(circle at 20% 80%, rgba(183, 156, 92, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(44, 62, 80, 0.05) 0%, transparent 50%)
    `,backgroundSize:"400% 400%",animation:u?"backgroundShift 15s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},Q={maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",position:"relative",zIndex:2},L={textAlign:"center",marginBottom:"4rem",position:"relative",perspective:"1000px"},_={fontSize:"clamp(3rem, 5vw, 4.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 1rem 0",perspective:"1000px",position:"relative",display:"inline-block"},C=G=>({display:"inline-block",marginRight:"20px",opacity:d?1:0,transform:d?"translateY(0) rotateX(0deg) scale(1)":"translateY(100px) rotateX(90deg) scale(0.5)",background:"linear-gradient(135deg, #2c3e50, #34495e, #B79C5C)",backgroundSize:"300% 300%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:d?`wordReveal 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+G*.2}s, gradientShift 4s ease-in-out infinite`:"none"}),W={position:"absolute",bottom:"-10px",left:"50%",transform:"translateX(-50%)",height:"4px",background:"linear-gradient(90deg, var(--primary-color), var(--accent-color), var(--primary-color))",borderRadius:"2px",animation:d?"underlineExpand 1s ease-out forwards 1.6s":"none",width:"0"},te={fontSize:"1.1rem",color:"var(--text-color)",opacity:d?1:0,animation:d?"cardSlideIn 1s ease-out forwards 1.8s":"none"},K={maxWidth:"900px",margin:"0 auto",position:"relative",overflow:"hidden",borderRadius:"var(--border-radius)",perspective:"1000px"},oe={display:"flex",transition:"transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)",transform:`translateX(-${r*100}%)`},Y={flex:"0 0 100%",display:"flex",flexDirection:"column",alignItems:"center",padding:"3rem 2rem",background:`
      linear-gradient(135deg, var(--light-color) 0%, rgba(248, 249, 250, 0.8) 100%),
      linear-gradient(45deg, rgba(183, 156, 92, 0.03), rgba(44, 62, 80, 0.03))
    `,borderRadius:"var(--border-radius)",boxShadow:"0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)",border:"1px solid rgba(183, 156, 92, 0.1)",position:"relative",overflow:"hidden",transition:"var(--transition)",cursor:"pointer"},$={width:"100px",height:"100px",borderRadius:"50%",background:`
      linear-gradient(135deg, rgba(183, 156, 92, 0.1), rgba(44, 62, 80, 0.1)),
      var(--light-color)
    `,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"2rem",color:"var(--primary-color)",border:"4px solid rgba(183, 156, 92, 0.2)",boxShadow:"0 10px 30px rgba(183, 156, 92, 0.2)",animation:u?"avatarPulse 3s ease-in-out infinite, floatAnimation 4s ease-in-out infinite":"none",position:"relative",overflow:"hidden"},M={width:"50px",height:"50px",color:"var(--accent-color)",zIndex:2},fe={textAlign:"center",position:"relative",zIndex:2},q={fontSize:"1.5rem",fontWeight:"700",color:"var(--primary-color)",marginBottom:"0.5rem"},ne={fontSize:"0.9rem",color:"var(--accent-color)",marginBottom:"1rem",textTransform:"uppercase",letterSpacing:"1px",fontWeight:"600"},me={display:"flex",justifyContent:"center",gap:"0.3rem",marginBottom:"1.5rem"},ee={width:"20px",height:"20px",color:"#ffd700",animation:"starTwinkle 2s ease-in-out infinite",animationDelay:G=>`${G*.2}s`},re={fontSize:"1.1rem",fontStyle:"italic",color:"var(--text-color)",lineHeight:"1.8",position:"relative",padding:"0 2rem",marginBottom:"1rem"},D={fontSize:"0.9rem",color:"var(--accent-color)",fontWeight:"600",padding:"0.5rem 1rem",background:"rgba(183, 156, 92, 0.1)",borderRadius:"20px",border:"1px solid rgba(183, 156, 92, 0.2)"},I={display:"flex",alignItems:"center",justifyContent:"center",marginTop:"3rem",gap:"2rem"},ae={background:"linear-gradient(135deg, var(--accent-color), var(--primary-color))",border:"none",width:"50px",height:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",transition:"var(--transition)",boxShadow:"0 5px 15px rgba(183, 156, 92, 0.3)"},ve={display:"flex",alignItems:"center",gap:"0.8rem"},j=G=>({width:"12px",height:"12px",borderRadius:"50%",background:G===r?"var(--accent-color)":"rgba(183, 156, 92, 0.3)",border:"none",cursor:"pointer",transition:"var(--transition)",transform:G===r?"scale(1.3)":"scale(1)",boxShadow:G===r?"0 0 10px rgba(183, 156, 92, 0.5)":"none"}),X=i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"5%",width:"200px",height:"200px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.05), rgba(44, 62, 80, 0.05))",borderRadius:"50%",animation:"floatAnimation 8s ease-in-out infinite",zIndex:1}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"3%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(44, 62, 80, 0.05), rgba(183, 156, 92, 0.05))",borderRadius:"30%",animation:"floatAnimation 10s ease-in-out infinite reverse",zIndex:1}})]});return i.jsxs("section",{style:T,ref:x,children:[X,i.jsxs("div",{style:Q,children:[i.jsxs("div",{style:L,children:[i.jsxs("h2",{style:_,children:[i.jsx("span",{style:C(0),children:"What"}),i.jsx("span",{style:C(1),children:"Our"}),i.jsx("span",{style:C(2),children:"Clients"}),i.jsx("span",{style:C(3),children:"Say"}),i.jsx("div",{style:W})]}),i.jsx("p",{style:te,children:"Trusted by hundreds of satisfied customers across multiple cities"})]}),i.jsxs("div",{style:K,children:[i.jsx("div",{style:oe,children:b.map((G,J)=>i.jsxs("div",{style:Y,onMouseEnter:ie=>{ie.currentTarget.style.transform="translateY(-10px) scale(1.02) rotateX(-2deg)",ie.currentTarget.style.boxShadow="0 25px 50px rgba(183, 156, 92, 0.15), 0 10px 25px var(--shadow-color)"},onMouseLeave:ie=>{ie.currentTarget.style.transform="translateY(0) scale(1) rotateX(0deg)",ie.currentTarget.style.boxShadow="0 15px 35px var(--shadow-color), 0 5px 15px rgba(183, 156, 92, 0.1)"},children:[i.jsxs("div",{style:$,children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",style:M,children:i.jsx("path",{d:"M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.23 72 72S295.8 272 256 272c-39.77 0-72-32.23-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z"})}),i.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:`
                      linear-gradient(45deg, 
                        transparent 30%, 
                        rgba(183, 156, 92, 0.1) 50%, 
                        transparent 70%
                      )
                    `,backgroundSize:"200% 200%",animation:"backgroundShift 3s linear infinite",borderRadius:"50%",zIndex:1}})]}),i.jsxs("div",{style:fe,children:[i.jsx("h4",{style:q,children:G.name}),i.jsx("p",{style:ne,children:G.role}),i.jsx("div",{style:me,children:[...Array(G.rating)].map((ie,ye)=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",fill:"currentColor",style:{...ee,animationDelay:`${ye*.2}s`},children:i.jsx("path",{d:"M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"})},ye))}),i.jsxs("blockquote",{style:re,children:['"',G.testimonial,'"']}),i.jsx("div",{style:D,children:G.project})]}),i.jsx("div",{style:{position:"absolute",bottom:0,right:0,width:"100px",height:"100px",background:"linear-gradient(45deg, rgba(183, 156, 92, 0.03), transparent)",pointerEvents:"none"}})]},J))}),i.jsxs("div",{style:I,children:[i.jsx("button",{style:ae,onClick:S,onMouseEnter:G=>{G.currentTarget.style.transform="scale(1.1) rotateZ(-5deg)",G.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:G=>{G.currentTarget.style.transform="scale(1) rotateZ(0deg)",G.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"})})}),i.jsx("div",{style:ve,children:b.map((G,J)=>i.jsx("button",{style:j(J),onClick:()=>z(J)},J))}),i.jsx("button",{style:ae,onClick:N,onMouseEnter:G=>{G.currentTarget.style.transform="scale(1.1) rotateZ(5deg)",G.currentTarget.style.boxShadow="0 10px 25px rgba(183, 156, 92, 0.5)"},onMouseLeave:G=>{G.currentTarget.style.transform="scale(1) rotateZ(0deg)",G.currentTarget.style.boxShadow="0 5px 15px rgba(183, 156, 92, 0.3)"},children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",style:{width:"16px",height:"16px"},children:i.jsx("path",{d:"M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"})})})]})]})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},Sp=()=>{var Ke,nt,Ve;const[r,s]=v.useState("all"),[u,c]=v.useState([]),[d,f]=v.useState(!1),[g,x]=v.useState(null),[b,p]=v.useState(0),[y,N]=v.useState(!1),[S,z]=v.useState([]),[T,Q]=v.useState(!1),[L,_]=v.useState({x:0,y:0}),[C,W]=v.useState(typeof window<"u"?window.innerWidth:1200),te=v.useRef(null);v.useEffect(()=>{const Z=()=>{W(window.innerWidth)};return window.addEventListener("resize",Z),()=>window.removeEventListener("resize",Z)},[]);const K=[{id:1,category:"residential",image:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Modern Villa Estate",description:"Luxurious modern villa with panoramic views and contemporary design elements featuring premium finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:2,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Tower",description:"State-of-the-art corporate headquarters with sustainable design features and smart building technology",year:"2022",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:3,category:"interior",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Apartment Interior",description:"High-end residential interior design with custom furniture and premium materials throughout the space",year:"2023",location:"Chennai",gallery:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:4,category:"renovation",image:"https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Historic Building Renovation",description:"Careful restoration of a heritage structure with modern amenities while preserving historical elements",year:"2021",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1581235707960-5a1d318a2a5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:5,category:"layout",image:"https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Urban Planning Project",description:"Comprehensive urban development plan with mixed-use spaces, green areas and sustainable infrastructure",year:"2022",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1524055988636-436cfa46e59e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:6,category:"residential",image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Luxury Family Home",description:"Custom-designed family residence with premium amenities, smart home features and sustainable elements",year:"2023",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:7,category:"commercial",image:"https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Retail Complex Development",description:"Modern shopping center with innovative design, optimized customer flow and integrated digital experiences",year:"2021",location:"Chennai",gallery:["https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014056132-70b975a35d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:8,category:"interior",image:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Corporate Office Interior",description:"Modern workspace design with ergonomic furniture, collaborative areas and productivity-focused layout",year:"2022",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:9,category:"renovation",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Remodeling",description:"Complete home transformation with open concept design, updated systems and contemporary finishes",year:"2023",location:"Bengaluru",gallery:["https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:10,category:"layout",image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Residential Community Planning",description:"Master-planned residential community with integrated amenities, green spaces and pedestrian-friendly design",year:"2021",location:"Hyderabad",gallery:["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:11,category:"residential",image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Waterfront Residence",description:"Exclusive waterfront property with panoramic views, custom architectural details and luxury amenities",year:"2022",location:"Chennai",gallery:["https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566752447-f5069ffcada1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]},{id:12,category:"commercial",image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",title:"Mixed-Use Development",description:"Integrated commercial and residential complex with shared amenities and efficient space utilization",year:"2023",location:"Mangalore",gallery:["https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80","https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]}],oe=[{id:"all",label:"All Projects",color:"#2c3e50",icon:"🏗️"},{id:"residential",label:"Residential",color:"#B79C5C",icon:"🏠"},{id:"commercial",label:"Commercial",color:"#3498db",icon:"🏢"},{id:"interior",label:"Interior",color:"#e74c3c",icon:"🎨"},{id:"renovation",label:"Renovation",color:"#9b59b6",icon:"🔨"},{id:"layout",label:"Layout",color:"#27ae60",icon:"📐"}],Y=`
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
  `;v.useEffect(()=>{if(C<768)return;const Z=be=>{if(te.current){const ce=te.current.getBoundingClientRect(),we=(be.clientX-ce.left)/ce.width,ze=(be.clientY-ce.top)/ce.height;_({x:we,y:ze})}};return document.addEventListener("mousemove",Z),()=>document.removeEventListener("mousemove",Z)},[C]),v.useEffect(()=>{const Z=document.createElement("style");return Z.textContent=Y,document.head.appendChild(Z),()=>{document.head.contains(Z)&&document.head.removeChild(Z)}},[]),v.useEffect(()=>{const Z=new IntersectionObserver(be=>{be.forEach(ce=>{ce.isIntersecting&&(N(!0),setTimeout(()=>Q(!0),300),setTimeout(()=>{(r==="all"?K:K.filter(ze=>ze.category===r)).forEach((ze,et)=>{setTimeout(()=>{z(ht=>[...ht,et])},et*100)})},1500))})},{threshold:.1});return te.current&&Z.observe(te.current),()=>{te.current&&Z.unobserve(te.current)}},[r]),v.useEffect(()=>{c(r==="all"?K:K.filter(Z=>Z.category===r)),z([])},[r]);const $=Z=>{s(Z)},M=Z=>{x(Z),p(0),f(!0),document.body.style.overflow="hidden"},fe=()=>{f(!1),x(null),p(0),document.body.style.overflow="unset"},q=Z=>{g!=null&&g.gallery&&p(Z==="next"?be=>(be+1)%g.gallery.length:be=>(be-1+g.gallery.length)%g.gallery.length)},ne=()=>g!=null&&g.gallery?g.gallery[b]:g==null?void 0:g.image,me={padding:C<768?"4rem 0":"8rem 0",background:`
      radial-gradient(ellipse at top left, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 252, 0.95) 40%),
      radial-gradient(ellipse at bottom right, rgba(241, 245, 249, 0.9) 0%, rgba(226, 232, 240, 0.8) 60%),
      linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.95) 100%)
    `,position:"relative",overflow:"hidden",minHeight:C<768?"auto":"100vh"},ee=C>=768?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{position:"absolute",top:"10%",right:"8%",width:"280px",height:"280px",background:"linear-gradient(135deg, rgba(183, 156, 92, 0.08), rgba(52, 152, 219, 0.06))",animation:"morphShape 20s ease-in-out infinite, backgroundFloat 8s ease-in-out infinite",zIndex:1,transform:`translate(${L.x*15}px, ${L.y*10}px)`}}),i.jsx("div",{style:{position:"absolute",bottom:"15%",left:"5%",width:"200px",height:"200px",background:"linear-gradient(225deg, rgba(231, 76, 60, 0.06), rgba(155, 89, 182, 0.08))",animation:"morphShape 25s ease-in-out infinite reverse, backgroundFloat 12s ease-in-out infinite",zIndex:1,transform:`translate(${L.x*-20}px, ${L.y*15}px)`}}),i.jsx("div",{style:{position:"absolute",top:"30%",left:"15%",width:"150px",height:"150px",background:"linear-gradient(45deg, rgba(39, 174, 96, 0.05), rgba(241, 196, 15, 0.07))",animation:"morphShape 30s ease-in-out infinite, backgroundFloat 10s ease-in-out infinite reverse",zIndex:1,transform:`translate(${L.x*25}px, ${L.y*-12}px)`}}),[...Array(6)].map((Z,be)=>i.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${4+Math.random()*6}px`,height:`${4+Math.random()*6}px`,background:`linear-gradient(45deg, rgba(183, 156, 92, ${.3+Math.random()*.4}), rgba(52, 152, 219, ${.2+Math.random()*.3}))`,borderRadius:"50%",animation:`parallaxFloat ${8+Math.random()*6}s ease-in-out infinite`,animationDelay:`${Math.random()*5}s`,zIndex:1,transform:`translate(${L.x*(10+Math.random()*20)}px, ${L.y*(5+Math.random()*15)}px)`}},be))]}):null,re={maxWidth:"1600px",margin:"0 auto",padding:C<768?"0 1rem":"0 3rem",position:"relative",zIndex:2},D={textAlign:"center",marginBottom:C<768?"3rem":"5rem",position:"relative",perspective:"1200px"},I={fontSize:C<480?"2rem":C<768?"2.5rem":"clamp(3.5rem, 6vw, 5.5rem)",fontWeight:"900",lineHeight:"1.1",margin:"0 0 2rem 0",perspective:"1200px",position:"relative",display:"inline-block"},ae=Z=>({display:"inline-block",marginRight:C<768?"15px":"25px",opacity:T?1:0,transform:T?"translateY(0) rotateX(0deg) scale(1)":"translateY(50px) rotateX(45deg) scale(0.8)",background:"linear-gradient(135deg, #2c3e50 0%, #34495e 30%, #B79C5C 60%, #3498db 100%)",backgroundSize:"400% 400%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:T?`wordReveal 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards ${.8+Z*.2}s, gradientShift 6s ease-in-out infinite`:"none",textShadow:T?"0 10px 30px rgba(44, 62, 80, 0.1)":"none"}),ve={position:"absolute",bottom:"-15px",left:"50%",transform:"translateX(-50%)",height:"6px",background:"linear-gradient(90deg, transparent, #B79C5C, #3498db, #B79C5C, transparent)",borderRadius:"3px",animation:T?"titleUnderline 1.5s ease-out forwards 2s":"none",width:"0"},j={fontSize:C<768?"1.1rem":"1.3rem",color:"#64748b",fontWeight:"300",letterSpacing:C<768?"1px":"2px",lineHeight:"1.8",maxWidth:"700px",margin:"0 auto",padding:C<768?"0 1rem":"0",opacity:T?1:0,animation:T?"subtitleFadeUp 1s ease-out forwards 2.3s":"none"},X={display:"flex",justifyContent:"center",flexWrap:"wrap",gap:C<768?"0.8rem":"1.5rem",marginBottom:C<768?"2rem":"4rem",opacity:T?1:0,animation:T?"filterButtonFloat 1s ease-out forwards 2.6s":"none"},G=(Z,be,ce)=>({padding:C<480?"0.6rem 1rem":C<768?"0.75rem 1.5rem":"1rem 2rem",background:be?`linear-gradient(135deg, ${Z.color}, rgba(44, 62, 80, 0.9))`:"rgba(255, 255, 255, 0.8)",border:`2px solid ${be?"transparent":"rgba(183, 156, 92, 0.2)"}`,borderRadius:"25px",color:be?"white":"#64748b",fontWeight:"600",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",boxShadow:be?"0 15px 35px rgba(44, 62, 80, 0.2), 0 5px 15px rgba(183, 156, 92, 0.3)":"0 8px 25px rgba(44, 62, 80, 0.08)",position:"relative",overflow:"hidden",textTransform:"uppercase",letterSpacing:"1px",fontSize:C<480?"0.75rem":C<768?"0.8rem":"0.9rem",backdropFilter:"blur(20px)",display:"flex",alignItems:"center",gap:C<768?"4px":"8px",animation:be?"filterGlow 2s ease-in-out infinite":"none",transform:`translateY(${be?-3:0}px)`,animationDelay:`${ce*.1}s`}),J={display:"grid",gridTemplateColumns:C<768?"1fr":C<1024?"repeat(2, 1fr)":C<1400?"repeat(3, 1fr)":"repeat(auto-fill, minmax(380px, 1fr))",gap:C<768?"2rem":"3rem",marginTop:C<768?"2rem":"3rem",perspective:"1200px"},ie=(Z,be)=>({position:"relative",borderRadius:C<768?"20px":"24px",overflow:"hidden",boxShadow:"0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",cursor:"pointer",height:C<480?"280px":C<768?"320px":"350px",background:"rgba(255, 255, 255, 0.9)",border:"1px solid rgba(255, 255, 255, 0.2)",backdropFilter:"blur(20px)",transform:be?"translateY(0) scale(1)":"translateY(40px) scale(0.9)",opacity:be?1:0,animation:be?`galleryItemMagnetize 1s cubic-bezier(0.23, 1, 0.32, 1) forwards ${Z*.1}s`:"none",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",transformStyle:"preserve-3d"}),ye={width:"100%",height:"70%",objectFit:"cover",transition:"all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",filter:"brightness(0.95) contrast(1.05) saturate(1.1)"},B={position:"absolute",top:0,left:0,width:"100%",height:"70%",background:`
      radial-gradient(circle at center, transparent 0%, rgba(44, 62, 80, 0.7) 100%),
      linear-gradient(to top, rgba(44, 62, 80, 0.9) 0%, transparent 60%)
    `,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:C<768?"1rem":"2rem",opacity:0,transition:"all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",color:"white",textAlign:"center"},he={position:"absolute",bottom:0,left:0,right:0,padding:C<768?"1rem":"1.5rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",borderTop:"1px solid rgba(183, 156, 92, 0.2)"},se={fontSize:C<768?"1.2rem":"1.5rem",fontWeight:"700",marginBottom:"0.5rem",transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.1s"},Te={fontSize:C<768?"0.9rem":"1rem",opacity:.9,transform:"translateY(20px)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",transitionDelay:"0.2s",lineHeight:"1.5"},Xe={position:"absolute",top:0,left:"-200px",width:"100px",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",animation:C>=768?"shimmerEffect 3s ease-in-out infinite":"none",zIndex:3},Me=(Z,be,ce)=>{const we=Z.currentTarget,ze=we.querySelector("img"),et=we.querySelector(".overlay"),ht=we.querySelectorAll(".overlay-element"),Gt=we.querySelector(".shimmer");ce?(C>=768?(we.style.animation="cardHoverLift 0.6s ease-out forwards",ze&&(ze.style.transform="scale(1.15) rotate(3deg)"),Gt&&(Gt.style.animation="shimmerEffect 1s ease-out")):we.style.transform="scale(0.98)",et&&(et.style.opacity="1"),ht.forEach(Mt=>{Mt.style.transform="translateY(0)"})):(C>=768?(we.style.animation="none",we.style.transform="translateY(0) scale(1) rotateX(0deg)",we.style.boxShadow="0 15px 35px rgba(44, 62, 80, 0.08), 0 5px 15px rgba(183, 156, 92, 0.1)",ze&&(ze.style.transform="scale(1) rotate(0deg)")):we.style.transform="scale(1)",et&&(et.style.opacity="0"),ht.forEach(Mt=>{Mt.style.transform="translateY(20px)"}))};return i.jsxs("section",{style:me,ref:te,children:[ee,i.jsxs("div",{style:re,children:[i.jsxs("div",{style:D,children:[i.jsxs("h2",{style:I,children:[i.jsx("span",{style:ae(0),children:"Our"}),i.jsx("span",{style:ae(1),children:"Project"}),i.jsx("span",{style:ae(2),children:"Portfolio"}),i.jsx("div",{style:ve})]}),i.jsx("p",{style:j,children:"Discover our curated collection of architectural masterpieces and design excellence that define contemporary living"})]}),i.jsx("div",{style:X,children:oe.map((Z,be)=>i.jsxs("button",{style:G(Z,r===Z.id,be),onClick:()=>$(Z.id),onMouseEnter:ce=>{C>=768&&r!==Z.id&&(ce.currentTarget.style.transform="translateY(-8px) scale(1.05)",ce.currentTarget.style.boxShadow="0 20px 40px rgba(44, 62, 80, 0.15), 0 10px 25px rgba(183, 156, 92, 0.2)",ce.currentTarget.style.borderColor="rgba(183, 156, 92, 0.5)",ce.currentTarget.style.background="rgba(255, 255, 255, 0.95)",ce.currentTarget.style.color=Z.color)},onMouseLeave:ce=>{C>=768&&r!==Z.id&&(ce.currentTarget.style.transform="translateY(0) scale(1)",ce.currentTarget.style.boxShadow="0 8px 25px rgba(44, 62, 80, 0.08)",ce.currentTarget.style.borderColor="rgba(183, 156, 92, 0.2)",ce.currentTarget.style.background="rgba(255, 255, 255, 0.8)",ce.currentTarget.style.color="#64748b")},children:[i.jsx("span",{style:{fontSize:C<768?"1rem":"1.1rem"},children:Z.icon}),Z.label]},Z.id))}),i.jsx("div",{style:J,children:u.map((Z,be)=>{var we;const ce=S.includes(be);return i.jsxs("div",{style:ie(be,ce),onClick:()=>M(Z),onMouseEnter:ze=>Me(ze,be,!0),onMouseLeave:ze=>Me(ze,be,!1),onTouchStart:ze=>Me(ze,be,!0),onTouchEnd:ze=>Me(ze,be,!1),children:[i.jsx("div",{style:Xe,className:"shimmer"}),i.jsx("img",{src:Z.image,alt:Z.title,style:ye}),i.jsxs("div",{className:"overlay",style:B,children:[i.jsx("h3",{className:"overlay-element",style:se,children:Z.gallery?`View Gallery (${Z.gallery.length} images)`:"View Project"}),i.jsx("p",{className:"overlay-element",style:Te,children:Z.gallery?"Click to explore image gallery":"Click to explore details"})]}),i.jsxs("div",{style:he,children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.5rem",flexDirection:C<480?"column":"row",gap:C<480?"0.5rem":"0"},children:[i.jsx("h3",{style:{fontSize:C<768?"1.1rem":"1.3rem",fontWeight:"700",color:"#2c3e50",margin:0,flex:1},children:Z.title}),i.jsx("span",{style:{fontSize:"0.8rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px",marginLeft:C<480?"0":"1rem"},children:Z.year})]}),i.jsx("p",{style:{fontSize:C<768?"0.8rem":"0.9rem",color:"#64748b",lineHeight:"1.4",margin:"0 0 0.5rem 0"},children:Z.description}),i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:C<480?"column":"row",gap:C<480?"0.5rem":"0"},children:[i.jsx("span",{style:{fontSize:"0.8rem",color:"#94a3b8",display:"flex",alignItems:"center",gap:"0.5rem"},children:Z.location}),i.jsx("span",{style:{fontSize:"0.8rem",color:((we=oe.find(ze=>ze.id===Z.category))==null?void 0:we.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px"},children:Z.category})]})]})]},Z.id)})})]}),d&&i.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.95)",zIndex:1e3,display:"flex",justifyContent:"center",alignItems:"center",animation:"lightboxEntrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards",backdropFilter:"blur(20px)",padding:C<768?"1rem":"2rem"},onClick:fe,children:i.jsxs("div",{style:{position:"relative",width:"100%",maxWidth:C<768?"100%":"1200px",background:"rgba(255, 255, 255, 0.95)",borderRadius:C<768?"16px":"24px",overflow:"hidden",boxShadow:"0 50px 100px rgba(0, 0, 0, 0.3)",backdropFilter:"blur(30px)",border:"1px solid rgba(255, 255, 255, 0.2)",maxHeight:"90vh"},onClick:Z=>Z.stopPropagation(),children:[i.jsx("button",{style:{position:"absolute",top:C<768?"1rem":"1.5rem",right:C<768?"1rem":"1.5rem",background:"rgba(0, 0, 0, 0.7)",border:"none",width:C<768?"50px":"60px",height:C<768?"50px":"60px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:C<768?"1.2rem":"1.5rem",cursor:"pointer",zIndex:10,transition:"all 0.3s ease",backdropFilter:"blur(10px)"},onClick:fe,onMouseEnter:Z=>{C>=768&&(Z.currentTarget.style.background="#B79C5C",Z.currentTarget.style.transform="scale(1.1) rotate(90deg)")},onMouseLeave:Z=>{C>=768&&(Z.currentTarget.style.background="rgba(0, 0, 0, 0.7)",Z.currentTarget.style.transform="scale(1) rotate(0deg)")},children:"×"}),i.jsx("div",{style:{width:"100%",height:C<768?"50vh":"70vh",maxHeight:"400px"},children:i.jsx("img",{src:ne(),alt:g==null?void 0:g.title,style:{width:"100%",height:"100%",objectFit:"cover"}})}),i.jsxs("div",{style:{padding:C<768?"1.5rem":"3rem",background:"rgba(255, 255, 255, 0.95)",backdropFilter:"blur(20px)",maxHeight:C<768?"40vh":"auto",overflowY:"auto"},children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexDirection:C<768?"column":"row",gap:C<768?"1rem":"0"},children:[i.jsx("h3",{style:{color:"#2c3e50",fontSize:C<768?"1.5rem":"2.2rem",fontWeight:"700",margin:0,flex:1},children:g==null?void 0:g.title}),i.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap"},children:[(g==null?void 0:g.gallery)&&i.jsxs("span",{style:{fontSize:C<768?"0.9rem":"1rem",color:"#3498db",fontWeight:"600",background:"rgba(52, 152, 219, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:[b+1," / ",g.gallery.length]}),i.jsx("span",{style:{fontSize:C<768?"0.9rem":"1rem",color:"#B79C5C",fontWeight:"600",background:"rgba(183, 156, 92, 0.1)",padding:"0.5rem 1rem",borderRadius:"20px"},children:g==null?void 0:g.year}),i.jsxs("span",{style:{fontSize:C<768?"0.9rem":"1rem",color:"#64748b",display:"flex",alignItems:"center",gap:"0.5rem"},children:["📍 ",g==null?void 0:g.location]})]})]}),i.jsx("p",{style:{marginBottom:"1.5rem",color:"#64748b",fontSize:C<768?"1rem":"1.2rem",lineHeight:"1.7"},children:g==null?void 0:g.description}),i.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:i.jsxs("span",{style:{fontSize:C<768?"0.9rem":"1rem",color:((Ke=oe.find(Z=>Z.id===(g==null?void 0:g.category)))==null?void 0:Ke.color)||"#64748b",fontWeight:"600",textTransform:"uppercase",letterSpacing:"1px",background:`rgba(${(nt=oe.find(Z=>Z.id===(g==null?void 0:g.category)))==null?void 0:nt.color.slice(1).match(/.{2}/g).map(Z=>parseInt(Z,16)).join(", ")}, 0.1)`||"rgba(100, 116, 139, 0.1)",padding:"0.75rem 1.5rem",borderRadius:"25px"},children:[(Ve=oe.find(Z=>Z.id===(g==null?void 0:g.category)))==null?void 0:Ve.icon," ",g==null?void 0:g.category]})})]}),(g==null?void 0:g.gallery)&&i.jsxs("div",{style:{position:"absolute",top:"50%",transform:"translateY(-50%)",width:"100%",display:"flex",justifyContent:"space-between",padding:C<768?"0 1rem":"0 2rem",zIndex:10,pointerEvents:"none"},children:[i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:C<768?"50px":"70px",height:C<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:C<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>q("prev"),onMouseEnter:Z=>{C>=768&&(Z.currentTarget.style.background="#2c3e50",Z.currentTarget.style.transform="scale(1.1) rotateZ(-10deg)")},onMouseLeave:Z=>{C>=768&&(Z.currentTarget.style.background="rgba(0, 0, 0, 0.7)",Z.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"‹"}),i.jsx("button",{style:{background:"rgba(0, 0, 0, 0.7)",border:"none",width:C<768?"50px":"70px",height:C<768?"50px":"70px",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontSize:C<768?"1.2rem":"1.8rem",cursor:"pointer",transition:"all 0.3s ease",pointerEvents:"auto",backdropFilter:"blur(10px)"},onClick:()=>q("next"),onMouseEnter:Z=>{C>=768&&(Z.currentTarget.style.background="#2c3e50",Z.currentTarget.style.transform="scale(1.1) rotateZ(10deg)")},onMouseLeave:Z=>{C>=768&&(Z.currentTarget.style.background="rgba(0, 0, 0, 0.7)",Z.currentTarget.style.transform="scale(1) rotateZ(0deg)")},children:"›"})]})]})})]})},jp=()=>{const[r,s]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=v.useState({message:"",isError:!1,isSubmitting:!1}),d=v.useRef(null),f=v.useRef(null);v.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(y=>{y.isIntersecting&&(y.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const g=b=>{const{name:p,value:y}=b.target;s(N=>({...N,[p]:y}))},x=()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),s({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{id:"contact",className:"contact-section",ref:d,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:"heading-container",ref:f,children:[i.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),i.jsxs("div",{className:"contact-container",children:[i.jsxs("div",{className:"contact-info",children:[i.jsx("div",{className:"contact-map",children:i.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6050645764435!2d77.5693744!3d12.9330859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15515dc1da7d%3A0xcd0ee36e6cf73082!2sPavan%20Techno%20Constructions!5e0!3m2!1sen!2sin!4v1738318615550!5m2!1sen!2sin",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Pavan Techno Constructions Location"})}),i.jsxs("div",{className:"contact-details",children:[i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"0.8s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Our Location"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.0s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Call Us"}),i.jsx("p",{children:"+91 9738906052"}),i.jsx("p",{children:"+91 8722906052"})]})]}),i.jsxs("div",{className:"contact-detail-item",style:{animationDelay:"1.2s"},children:[i.jsx("div",{className:"icon",children:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"info",children:[i.jsx("h4",{children:"Email Us"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]}),i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:g})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:r.package,onChange:g,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:g})]}),i.jsx("div",{className:"form-status",children:u.message&&i.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),i.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[i.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})]})]})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},wn=()=>{const r=new Date().getFullYear(),[s,u]=v.useState(!1);v.useEffect(()=>{const f=new IntersectionObserver(x=>{x.forEach(b=>{b.isIntersecting&&u(!0)})},{threshold:.1}),g=document.querySelector(".footer");return g&&f.observe(g),()=>{g&&f.unobserve(g)}},[]);const c=[{icon:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",href:"#",label:"Twitter"},{icon:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",href:"#",label:"Twitter"},{icon:"M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.524 1.037 1.155 0 .703-.449 1.753-.68 2.729-.194.819.411 1.489 1.219 1.489 1.463 0 2.589-1.541 2.589-3.767 0-1.969-1.414-3.347-3.447-3.347-2.346 0-3.725 1.759-3.725 3.575 0 .709.275 1.469.617 1.883.068.081.077.152.057.235-.061.252-.196.796-.223.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.598 1.884-4.986 5.432-4.986 2.851 0 5.067 2.031 5.067 4.75 0 2.836-1.789 5.117-4.272 5.117-.834 0-1.619-.435-1.887-1.009l-.513 1.958c-.185.72-.685 1.621-1.019 2.171C9.516 23.85 10.739 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z",href:"#",label:"Pinterest"},{icon:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",href:"#",label:"LinkedIn"},{icon:"M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91-.11-.971-.21-2.462.04-3.521.226-.952 1.463-6.196 1.463-6.196s-.372-.744-.372-1.846c0-1.727.998-3.015 2.24-3.015 1.056 0 1.566.79 1.566 1.735 0 1.058-.673 2.64-1.022 4.106-.29 1.228.616 2.228 1.83 2.228 2.196 0 3.884-2.312 3.884-5.649 0-2.95-2.124-5.019-5.16-5.019-3.514 0-5.579 2.634-5.579 5.35 0 1.06.408 2.196.917 2.81.1.12.115.227.085.35-.09.377-.293 1.196-.333 1.364-.053.225-.172.271-.397.164-1.509-.7-2.453-2.9-2.453-4.66 0-3.818 2.776-7.32 8.006-7.32 4.204 0 7.472 2.996 7.472 6.99 0 4.175-2.631 7.533-6.283 7.533-1.226 0-2.38-.638-2.773-1.39l-.753 2.87c-.272 1.04-1.005 2.34-1.492 3.13C9.34 23.94 10.882 24 12.5 24c6.354 0 11.5-5.146 11.5-11.5S18.854.75 12.5.75z",href:"#",label:"Instagram"}],d=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Services",href:"#services"},{name:"Pricing",href:"#pricing"},{name:"Gallery",href:"#gallery"},{name:"Contact",href:"#contact"}];return i.jsxs(i.Fragment,{children:[i.jsxs("footer",{className:`footer ${s?"visible":""}`,children:[i.jsxs("div",{className:"footer-bg-elements",children:[i.jsx("div",{className:"bg-circle-1"}),i.jsx("div",{className:"bg-circle-2"}),i.jsx("div",{className:"bg-square-1"}),i.jsx("div",{className:"bg-triangle-1"})]}),i.jsx("div",{className:"footer-top",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-info",children:[i.jsx("div",{className:"footer-logo",children:i.jsxs("div",{className:"logo-container",children:[i.jsx("h2",{children:"Pavan Techno"}),i.jsx("span",{children:"Constructions"})]})}),i.jsx("p",{children:"We at Pavan Techno Constructions prioritize a cost-effective construction process with high quality outcomes. With over 9 years of experience, we've built a foundation of trust, ethics, and shared success."}),i.jsx("div",{className:"social-links",children:c.map((f,g)=>i.jsx("a",{href:f.href,className:"social-link","aria-label":f.label,style:{animationDelay:`${g*.1}s`},children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:f.icon})})},g))})]}),i.jsxs("div",{className:"footer-links",children:[i.jsx("h4",{children:"Quick Links"}),i.jsx("ul",{children:d.map((f,g)=>i.jsx("li",{style:{animationDelay:`${g*.1}s`},children:i.jsx("a",{href:f.href,children:f.name})},g))})]}),i.jsxs("div",{className:"footer-contact",children:[i.jsx("h4",{children:"Contact Us"}),i.jsxs("div",{className:"contact-items",children:[i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.2s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Address"}),i.jsx("p",{children:"Metro pillar no 116, Building no 28, Near, Vanivilas Rd, next to Nakoda Residency, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004"})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.4s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Phone"}),i.jsxs("p",{children:["+91 9738906052",i.jsx("br",{}),"+91 8722906052"]})]})]}),i.jsxs("div",{className:"contact-item",style:{animationDelay:"0.6s"},children:[i.jsx("div",{className:"contact-icon",children:i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})})}),i.jsxs("div",{className:"contact-text",children:[i.jsx("span",{className:"contact-label",children:"Email"}),i.jsx("p",{children:"pavantechnoconstructions.info@gmail.com"})]})]})]})]})]})})}),i.jsx("div",{className:"footer-bottom",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"footer-bottom-content",children:[i.jsxs("p",{children:["© ",r," All Rights Reserved By"," ",i.jsx("a",{href:"https://gconnectsolutions.com/",target:"_blank",rel:"noopener noreferrer",children:"G Connect Solutions"})]}),i.jsxs("div",{className:"footer-policy",children:[i.jsx("a",{href:"Privacy.html",children:"Privacy Policy"}),i.jsx("span",{className:"separator",children:"|"}),i.jsx("a",{href:"#terms",children:"Terms of Service"})]})]})})})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},g5=({closePopup:r})=>{const[s,u]=v.useState({name:"",email:"",phone:"",service:"",message:""});v.useEffect(()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")}),[]);const c=f=>{const{name:g,value:x}=f.target;u(b=>({...b,[g]:x}))},d=f=>{if(f.preventDefault(),!s.name||!s.email||!s.phone||!s.service||!s.message){alert("Please fill in all required fields.");return}alert("Form submitted successfully! We will contact you soon."),r()};return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"popup-overlay",onClick:r,children:i.jsxs("div",{className:"popup-container",onClick:f=>f.stopPropagation(),children:[i.jsx("button",{className:"close-popup",onClick:r,children:"×"}),i.jsxs("div",{className:"popup-header",children:[i.jsx("div",{className:"header-icon",children:i.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",children:i.jsx("path",{d:"M3 8L12 13L21 8M3 8V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V8M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),i.jsx("h3",{children:"Get Your Quote"}),i.jsx("p",{children:"Fill out the form below and we'll get back to you within 24 hours"})]}),i.jsxs("div",{className:"popup-form",children:[i.jsxs("div",{className:"form-grid",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-name",children:"Full Name *"}),i.jsx("input",{type:"text",name:"name",id:"popup-name",className:"form-control",placeholder:"Enter your full name",value:s.name,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-email",children:"Email Address *"}),i.jsx("input",{type:"email",name:"email",id:"popup-email",className:"form-control",placeholder:"Enter your email",value:s.email,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-phone",children:"Phone Number *"}),i.jsx("input",{type:"tel",name:"phone",id:"popup-phone",className:"form-control",placeholder:"Enter your phone number",value:s.phone,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"popup-service",children:"Package *"}),i.jsxs("select",{name:"service",id:"popup-service",className:"form-control",value:s.service,onChange:c,required:!0,children:[i.jsx("option",{value:"",disabled:!0,children:"Select a package"}),i.jsx("option",{value:"Basic Package",children:"Basic Package - RS.1600/- + GST"}),i.jsx("option",{value:"Premium Package",children:"Premium Package - RS.1800/- + GST"}),i.jsx("option",{value:"Luxury Package",children:"Luxury Package - RS.2150/- + GST"})]})]})]}),i.jsxs("div",{className:"form-group full-width",children:[i.jsx("label",{htmlFor:"popup-message",children:"Project Details *"}),i.jsx("textarea",{name:"message",id:"popup-message",rows:"4",className:"form-control",placeholder:"Tell us about your construction project...",value:s.message,onChange:c,required:!0})]}),i.jsxs("div",{className:"form-actions",children:[i.jsx("button",{type:"button",className:"btn btn-secondary",onClick:r,children:"Cancel"}),i.jsx("button",{type:"button",className:"btn btn-primary",onClick:d,children:"Submit Request"})]})]})]})}),i.jsx("style",{jsx:!0,global:!0,children:`
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
      `})]})},h5="/pavan-techno-constructions/assets/s-1-D80USzrT.jpg",x5="/pavan-techno-constructions/assets/arti-D1dJ_XDz.jpg",b5="/pavan-techno-constructions/assets/rs-BDWbg-Wg.jpg",y5="/pavan-techno-constructions/assets/ld-BqerUQ4p.jpg",v5="/pavan-techno-constructions/assets/interior-BlveVF9V.webp",w5="/pavan-techno-constructions/assets/cs1-T7T-fMyg.png",S5=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState(null),[f,g]=v.useState("workshop"),[x,b]=v.useState("overview"),p=v.useRef(null);v.useEffect(()=>{const S=new IntersectionObserver(z=>{z.forEach(T=>{T.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&S.observe(p.current),()=>{p.current&&S.unobserve(p.current)}},[]);const y=[{id:1,title:"Building Construction",icon:"🏗️",image:h5,description:"From start to end, whether it's residential or commercial project, we deliver quality construction tailored to your needs, ensuring durability and elegance.",features:["Residential Projects","Commercial Buildings","Quality Materials","Durable Construction"],price:"Starting from ₹1,600/sq ft",category:"structural"},{id:2,title:"Architectural Services",icon:"📐",image:x5,description:"We believe in constantly researching and developing ways to make the entire construction process more efficient and quality driven.",features:["Conceptual Designs","Floor Planning","Site Plans","Dream Home Consultation"],price:"Starting from ₹25/sq ft",category:"design"},{id:3,title:"Renovation",icon:"🔨",image:b5,description:"We undertake renovation work for all commercial, residential and factory layout. From demolishing to rebuilding with custom redesigns.",features:["Commercial Renovation","Residential Makeover","Factory Layout","Custom Redesigns"],price:"Starting from ₹600/sq ft",category:"renovation"},{id:4,title:"Layout Development",icon:"📋",image:y5,description:"Our layout development expertise is designed to transform your project goals into reality, which is a perfect balance of form and function.",features:["Project Planning","Space Optimization","Functional Design","Goal-oriented Solutions"],price:"Starting from ₹35/sq ft",category:"planning"},{id:5,title:"Interior Designing",icon:"🎨",image:v5,description:"We create stunning interior designs for commercial, residential, and industrial spaces. From concept to completion, we bring your vision to life.",features:["Commercial Interiors","Residential Design","Industrial Spaces","Concept to Completion"],price:"Starting from ₹800/sq ft",category:"interiors"},{id:6,title:"Customer Satisfaction",icon:"⭐",image:w5,description:"Our expert architects help you with creating conceptual designs, developing floor plans and preparing site plans, which reflect your dream home expectations.",features:["Expert Consultation","Dream Home Planning","Quality Assurance","Client-focused Approach"],price:"Included in all services",category:"support"}],N=[{icon:"🏆",value:"60+",label:"Projects Completed",detail:"Across all service categories"},{icon:"📅",value:"15+",label:"Years Experience",detail:"Professional expertise"},{icon:"😊",value:"100%",label:"Client Satisfaction",detail:"Quality guaranteed"},{icon:"🔧",value:"24/7",label:"Support Available",detail:"Round-the-clock assistance"}];return i.jsxs("div",{className:"workshop-page",ref:p,children:[i.jsx("div",{className:"workshop-header",children:i.jsxs("div",{className:"header-grid",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"PROJECT:"}),i.jsx("span",{className:"label-value",children:"CONSTRUCTION SERVICES"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"COMPANY:"}),i.jsx("span",{className:"label-value",children:"PAVAN TECHNO CONSTRUCTIONS"})]}),i.jsxs("div",{className:"project-label",children:[i.jsx("span",{className:"label-text",children:"STATUS:"}),i.jsx("span",{className:"label-value",children:"ACTIVE OPERATIONS"})]}),i.jsx("h1",{className:`workshop-title ${s?"visible":""}`,children:"CONSTRUCTION SERVICES"}),i.jsx("p",{className:`workshop-subtitle ${s?"visible":""}`,children:"Professional construction services delivered through specialized workstations"}),i.jsxs("div",{className:"view-selector",children:[i.jsxs("button",{className:`selector-btn ${f==="workshop"?"active":""}`,onClick:()=>g("workshop"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Workshop View"]}),i.jsxs("button",{className:`selector-btn ${f==="catalog"?"active":""}`,onClick:()=>g("catalog"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Service Catalog"]})]})]})]})}),f==="workshop"&&i.jsx("div",{className:"workshop-floor",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"floor-plan",children:[i.jsxs("div",{className:"plan-header",children:[i.jsx("h2",{children:"WORKSHOP FLOOR PLAN"}),i.jsx("div",{className:"plan-details"})]}),i.jsx("div",{className:"workstations-grid",children:y.map((S,z)=>i.jsx("div",{className:`workstation ${c===S.id?"active":""}`,onClick:()=>d(c===S.id?null:S.id),children:i.jsxs("div",{className:"station-frame",children:[i.jsxs("div",{className:"frame-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"station-header",children:[i.jsxs("div",{className:"station-id",children:[" ",S.station]}),i.jsx("div",{className:"station-code",children:S.code})]}),i.jsxs("div",{className:"station-image",children:[i.jsx("img",{src:S.image,alt:S.title}),i.jsx("div",{className:"image-overlay",children:i.jsx("div",{className:"overlay-icon",children:S.icon})})]}),i.jsxs("div",{className:"station-info",children:[i.jsx("h3",{children:S.title}),i.jsx("div",{className:"station-status",children:i.jsx("span",{className:"status-dot"})})]}),c===S.id&&i.jsxs("div",{className:"station-details",children:[i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"SERVICE OVERVIEW"}),i.jsx("p",{children:S.description})]}),i.jsxs("div",{className:"details-section",children:[i.jsx("h4",{children:"KEY FEATURES"}),i.jsx("div",{className:"features-grid",children:S.features.map((T,Q)=>i.jsxs("div",{className:"feature-item",children:[i.jsx("span",{className:"feature-bullet",children:"●"}),T]},Q))})]}),i.jsxs("div",{className:"pricing-section",children:[i.jsxs("div",{className:"price-info",children:[i.jsx("span",{className:"price-label",children:"PRICING:"}),i.jsx("span",{className:"price-value",children:S.price})]}),i.jsxs("button",{className:"quote-btn",onClick:r,children:["REQUEST QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})]})]})]})},S.id))})]})})}),f==="catalog"&&i.jsx("div",{className:"service-catalog",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"catalog-header",children:[i.jsx("h2",{children:"SERVICE CATALOG"}),i.jsxs("div",{className:"catalog-tabs",children:[i.jsx("button",{className:`tab-btn ${x==="overview"?"active":""}`,onClick:()=>b("overview"),children:"OVERVIEW"}),i.jsx("button",{className:`tab-btn ${x==="technical"?"active":""}`,onClick:()=>b("technical"),children:"TECHNICAL SPECS"}),i.jsx("button",{className:`tab-btn ${x==="pricing"?"active":""}`,onClick:()=>b("pricing"),children:"PRICING"})]})]}),i.jsx("div",{className:"catalog-content",children:y.map(S=>i.jsxs("div",{className:"catalog-item",children:[i.jsxs("div",{className:"item-header",children:[i.jsxs("div",{className:"item-id",children:[i.jsx("span",{className:"item-code",children:S.code}),i.jsx("span",{className:"item-category",children:S.category.toUpperCase()})]}),i.jsx("h3",{children:S.title})]}),i.jsxs("div",{className:"item-body",children:[i.jsxs("div",{className:"item-image",children:[i.jsx("img",{src:S.image,alt:S.title}),i.jsx("div",{className:"item-badge",children:S.icon})]}),i.jsxs("div",{className:"item-content",children:[x==="overview"&&i.jsxs("div",{className:"overview-content",children:[i.jsx("p",{children:S.description}),i.jsx("div",{className:"features-list",children:S.features.map((z,T)=>i.jsx("span",{className:"feature-tag",children:z},T))})]}),x==="technical"&&i.jsx("div",{className:"technical-content",children:i.jsx("div",{className:"tech-specs",children:Object.entries(S.specifications).map(([z,T])=>i.jsxs("div",{className:"tech-row",children:[i.jsx("span",{className:"tech-label",children:z}),i.jsx("span",{className:"tech-value",children:T})]},z))})}),x==="pricing"&&i.jsxs("div",{className:"pricing-content",children:[i.jsx("div",{className:"price-display",children:i.jsx("span",{className:"price-amount",children:S.price})}),i.jsx("button",{className:"catalog-quote-btn",onClick:r,children:"GET DETAILED QUOTE"})]})]})]})]},S.id))})]})}),i.jsx("div",{className:"workshop-stats",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("h2",{children:"WORKSHOP PERFORMANCE METRICS"}),i.jsx("div",{className:"metrics-line"})]}),i.jsx("div",{className:"stats-grid",children:N.map((S,z)=>i.jsx("div",{className:"stat-panel",children:i.jsxs("div",{className:"panel-frame",children:[i.jsxs("div",{className:"panel-header",children:[i.jsx("div",{className:"panel-icon",children:S.icon}),i.jsxs("div",{className:"panel-id",children:["METRIC-",String(z+1).padStart(2,"0")]})]}),i.jsx("div",{className:"panel-value",children:S.value}),i.jsx("div",{className:"panel-label",children:S.label}),i.jsx("div",{className:"panel-detail",children:S.detail})]})},z))})]})}),i.jsx("div",{className:"quality-section",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"quality-grid",children:i.jsxs("div",{className:"quality-content",children:[i.jsx("div",{className:"content-header",children:i.jsx("h2",{children:"QUALITY ASSURANCE PROTOCOL"})}),i.jsxs("div",{className:"assurance-items",children:[i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"01"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"15+ Years Experience"}),i.jsx("p",{children:"Proven track record in delivering quality construction projects across various sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"02"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"60+ Projects Completed"}),i.jsx("p",{children:"Successfully delivered projects across residential, commercial, and industrial sectors"})]})]}),i.jsxs("div",{className:"assurance-item",children:[i.jsx("div",{className:"item-marker",children:"03"}),i.jsxs("div",{className:"item-data",children:[i.jsx("h4",{children:"Quality Materials"}),i.jsx("p",{children:"We use only premium quality materials from trusted suppliers ensuring longevity"})]})]})]})]})})})}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},j5=({openPopup:r})=>{const[s,u]=v.useState(!1),[c,d]=v.useState("residential"),[f,g]=v.useState(null),[x,b]=v.useState("estimates"),p=v.useRef(null);v.useEffect(()=>{const z=new IntersectionObserver(T=>{T.forEach(Q=>{Q.isIntersecting&&u(!0)})},{threshold:.1});return p.current&&z.observe(p.current),()=>{p.current&&z.unobserve(p.current)}},[]);const y=[{id:"residential",label:"RESIDENTIAL",code:"RES",icon:"🏠",color:"#B79C5C"},{id:"commercial",label:"COMMERCIAL",code:"COM",icon:"🏢",color:"#2D3748"},{id:"interior",label:"INTERIOR",code:"INT",icon:"🎨",color:"#B79C5C"},{id:"renovation",label:"RENOVATION",code:"REN",icon:"🔨",color:"#2D3748"}],S={residential:[{title:"STANDARD RESIDENTIAL",baseRate:"₹1,600",totalCost:"₹16,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Cost-effective residential construction with standard specifications",costBreakdown:{"Site Preparation":"8%","Foundation Work":"15%","Structural Framework":"25%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"18%","Finishing & Paint":"15%","Fixtures & Fittings":"7%"},included:["Architectural Planning","Structural Design","Site Supervision","Quality Control","Material Supply","Labor Management"],status:"STANDARD"},{title:"PREMIUM RESIDENTIAL",baseRate:"₹2,200",totalCost:"₹22,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Enhanced residential construction with premium specifications",costBreakdown:{"Site Preparation":"6%","Foundation Work":"14%","Structural Framework":"24%","Roofing & Waterproofing":"12%","Electrical & Plumbing":"20%","Finishing & Paint":"18%","Fixtures & Fittings":"6%"},included:["3D Architectural Design","Structural Engineering","Project Management","Quality Assurance","Premium Material Supply","Skilled Labor Team","Interior Consultation"],status:"RECOMMENDED"},{title:"LUXURY RESIDENTIAL",code:"RES-LUX-003",classification:"LUXURY CLASS",baseRate:"₹3,500",totalCost:"₹35,00,000",area:"1000 sq ft",timeline:"12-15 months",description:"High-end residential construction with luxury specifications",costBreakdown:{"Site Preparation":"5%","Foundation Work":"12%","Structural Framework":"22%","Roofing & Waterproofing":"10%","Electrical & Plumbing":"22%","Finishing & Paint":"22%","Fixtures & Fittings":"7%"},specifications:["Steel Frame Structure","Imported Premium Materials","Smart Home Automation","Luxury Plumbing Systems","Marble & Hardwood Flooring","Designer Paint & Textures","24 Months Warranty"],included:["Custom Architectural Design","Structural Engineering","Project Management","Quality Control","Luxury Material Supply","Expert Craftsmen","Interior Design","Landscape Planning"],compliance:["NBC 2016","IS Codes","Green Building","LEED Standards"],status:"PREMIUM"}],commercial:[{title:"STANDARD COMMERCIAL",code:"COM-STD-001",classification:"COMMERCIAL GRADE",baseRate:"₹1,800",totalCost:"₹18,00,000",area:"1000 sq ft",timeline:"8-10 months",description:"Standard commercial construction for offices and retail",costBreakdown:{"Site Preparation":"7%","Foundation Work":"16%","Structural Framework":"28%","Roofing & Waterproofing":"10%","Electrical & HVAC":"20%",Finishing:"14%","Commercial Fittings":"5%"},specifications:["Commercial RCC Structure","Fire-Resistant Materials","Commercial Electrical Setup","HVAC Ready Infrastructure","Commercial Grade Flooring","Weather Resistant Finishes","12 Months Warranty"],included:["Commercial Planning","Structural Design","MEP Engineering","Project Coordination","Material Supply","Commercial Installation"],compliance:["NBC 2016","Fire Safety","Commercial Codes"],status:"STANDARD"},{title:"PREMIUM COMMERCIAL",code:"COM-PREM-002",classification:"PREMIUM COMMERCIAL",baseRate:"₹2,800",totalCost:"₹28,00,000",area:"1000 sq ft",timeline:"10-12 months",description:"Modern commercial construction with advanced systems",costBreakdown:{"Site Preparation":"6%","Foundation Work":"15%","Structural Framework":"26%","Roofing & Waterproofing":"9%","Electrical & HVAC":"24%",Finishing:"16%","Premium Fittings":"4%"},specifications:["Steel Frame Commercial","Premium Fire Safety Systems","Advanced Electrical & HVAC","Smart Building Infrastructure","Premium Commercial Flooring","High-Performance Finishes","18 Months Warranty"],included:["Modern Commercial Design","MEP Engineering","Building Automation","Project Management","Premium Materials","Professional Installation","System Integration"],compliance:["NBC 2016","Fire Safety","Green Building","IGBC"],status:"RECOMMENDED"},{title:"LUXURY COMMERCIAL",code:"COM-LUX-003",classification:"LUXURY COMMERCIAL",baseRate:"₹4,200",totalCost:"₹42,00,000",area:"1000 sq ft",timeline:"12-18 months",description:"High-end commercial spaces with luxury finishes",costBreakdown:{"Site Preparation":"4%","Foundation Work":"13%","Structural Framework":"24%","Roofing & Waterproofing":"8%","Electrical & HVAC":"26%",Finishing:"20%","Luxury Fittings":"5%"},specifications:["Premium Steel Structure","Luxury Fire Safety Systems","Smart Building Automation","Advanced HVAC Systems","Luxury Commercial Flooring","Designer Finishes","24 Months Warranty"],included:["Luxury Commercial Design","Advanced MEP Systems","Building Management Systems","Project Management","Luxury Materials","Expert Installation","Complete Integration","Maintenance Package"],compliance:["NBC 2016","LEED Platinum","Green Building","IGBC"],status:"PREMIUM"}],interior:[{title:"BASIC INTERIOR",code:"INT-BAS-001",classification:"ESSENTIAL INTERIOR",baseRate:"₹800",totalCost:"₹8,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential interior design and execution",costBreakdown:{"Space Planning":"10%","Electrical Work":"20%","Furniture & Fixtures":"35%","Flooring & Tiling":"15%","Paint & Finishes":"12%",Installation:"8%"},specifications:["Basic Space Planning","Standard Lighting","Modular Furniture","Laminate Flooring","Standard Paint","Basic Fixtures","6 Months Warranty"],included:["Interior Planning","Furniture Design","Electrical Layout","Material Supply","Installation Service","Basic Styling"],compliance:["Interior Standards","Safety Codes"],status:"STANDARD"},{title:"PREMIUM INTERIOR",code:"INT-PREM-002",classification:"DESIGNER INTERIOR",baseRate:"₹1,500",totalCost:"₹15,00,000",area:"1000 sq ft",timeline:"3-4 months",description:"Complete interior design transformation",costBreakdown:{"Design & Planning":"12%","Electrical & Lighting":"22%","Custom Furniture":"30%","Premium Flooring":"18%","Designer Finishes":"15%",Installation:"3%"},specifications:["Professional Space Planning","Designer Lighting Solutions","Custom Furniture Design","Premium Flooring Options","Designer Paint & Textures","Premium Fixtures","12 Months Warranty"],included:["3D Interior Design","Custom Furniture","Lighting Design","Premium Materials","Professional Installation","Interior Styling","Project Management"],compliance:["Interior Standards","Design Codes","Safety Standards"],status:"RECOMMENDED"},{title:"LUXURY INTERIOR",code:"INT-LUX-003",classification:"LUXURY INTERIOR",baseRate:"₹2,500",totalCost:"₹25,00,000",area:"1000 sq ft",timeline:"4-6 months",description:"Bespoke luxury interior design",costBreakdown:{"Luxury Design":"15%","Smart Lighting":"20%","Bespoke Furniture":"25%","Luxury Flooring":"20%","Designer Finishes":"17%",Installation:"3%"},specifications:["Luxury Space Planning","Smart Lighting Systems","Bespoke Furniture","Luxury Flooring Materials","Designer Paint & Textures","Luxury Fixtures & Art","18 Months Warranty"],included:["Luxury Interior Design","Bespoke Furniture","Smart Home Integration","Luxury Materials","Expert Installation","Interior Styling","Project Management","Maintenance Package"],compliance:["Luxury Standards","Design Excellence","Safety Codes"],status:"PREMIUM"}],renovation:[{title:"BASIC RENOVATION",code:"REN-BAS-001",classification:"ESSENTIAL RENOVATION",baseRate:"₹600",totalCost:"₹6,00,000",area:"1000 sq ft",timeline:"2-3 months",description:"Essential renovation and repair work",costBreakdown:{"Assessment & Planning":"8%",Demolition:"15%","Structural Repairs":"25%","Electrical Updates":"20%","Plumbing Updates":"15%","Finishing Work":"17%"},specifications:["Structural Assessment","Basic Electrical Updates","Plumbing Repairs","Standard Paint Refresh","Basic Fixture Replacement","Cleaning Service","6 Months Warranty"],included:["Renovation Planning","Demolition Work","Basic Repairs","Material Supply","Installation Service","Cleanup"],compliance:["Building Codes","Safety Standards"],status:"STANDARD"},{title:"COMPLETE RENOVATION",code:"REN-COMP-002",classification:"COMPREHENSIVE RENOVATION",baseRate:"₹1,200",totalCost:"₹12,00,000",area:"1000 sq ft",timeline:"4-5 months",description:"Complete renovation with modern upgrades",costBreakdown:{"Planning & Design":"10%",Demolition:"12%","Structural Work":"22%","Electrical Upgrade":"22%","Plumbing Upgrade":"18%","Premium Finishing":"16%"},specifications:["Complete Renovation Design","Modern Electrical Systems","Advanced Plumbing","Premium Paint & Finishes","Modern Fixture Installation","Structural Modifications","12 Months Warranty"],included:["Renovation Design","Comprehensive Demolition","System Upgrades","Premium Materials","Professional Installation","Project Management","Deep Cleaning"],compliance:["NBC 2016","Safety Standards","Modern Codes"],status:"RECOMMENDED"},{title:"LUXURY RENOVATION",code:"REN-LUX-003",classification:"LUXURY RENOVATION",baseRate:"₹2,000",totalCost:"₹20,00,000",area:"1000 sq ft",timeline:"6-8 months",description:"Premium renovation with luxury upgrades",costBreakdown:{"Luxury Design":"12%","Selective Demolition":"10%","Premium Structural":"20%","Smart Electrical":"24%","Luxury Plumbing":"20%","Designer Finishing":"14%"},specifications:["Luxury Renovation Design","Smart Home Integration","Luxury Plumbing Systems","Designer Finishes","Luxury Fixture Installation","Architectural Modifications","18 Months Warranty"],included:["Luxury Design Planning","Precision Demolition","Premium Upgrades","Luxury Materials","Expert Installation","Project Management","Professional Staging","Maintenance Package"],compliance:["NBC 2016","Luxury Standards","Green Building"],status:"PREMIUM"}]}[c];return i.jsxs("div",{className:"estimation-lab",ref:p,children:[i.jsx("div",{className:"lab-header",children:i.jsxs("div",{className:"header-frame",children:[i.jsxs("div",{className:"blueprint-corners",children:[i.jsx("span",{className:"corner tl"}),i.jsx("span",{className:"corner tr"}),i.jsx("span",{className:"corner bl"}),i.jsx("span",{className:"corner br"})]}),i.jsxs("div",{className:"header-content",children:[i.jsxs("div",{className:"lab-info",children:[i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PROJECT TYPE:"}),i.jsx("span",{className:"info-value",children:"CONSTRUCTION COST ESTIMATION"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"info-label",children:"PRICING STRUCTURE:"}),i.jsx("span",{className:"info-value",children:"TRANSPARENT & COMPETITIVE"})]})]}),i.jsx("h1",{className:`lab-title ${s?"visible":""}`,children:"CONSTRUCTION PRICING"}),i.jsx("p",{className:`lab-subtitle ${s?"visible":""}`,children:"Professional cost estimation and project analysis for construction projects"}),i.jsxs("div",{className:"view-controls",children:[i.jsxs("button",{className:`control-btn ${x==="estimates"?"active":""}`,onClick:()=>b("estimates"),children:[i.jsx("span",{className:"btn-icon",children:"📋"}),"Cost Estimates"]}),i.jsxs("button",{className:`control-btn ${x==="breakdown"?"active":""}`,onClick:()=>b("breakdown"),children:[i.jsx("span",{className:"btn-icon",children:"📊"}),"Cost Breakdown"]})]})]})]})}),i.jsx("div",{className:"category-lab",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"lab-section-header",children:[i.jsx("h2",{children:"PROJECT CLASSIFICATION"}),i.jsx("div",{className:"classification-grid",children:y.map(z=>i.jsxs("div",{className:`classification-card ${c===z.id?"active":""}`,onClick:()=>d(z.id),children:[i.jsxs("div",{className:"card-header",children:[i.jsx("div",{className:"card-code",children:z.code}),i.jsx("div",{className:"card-icon",children:z.icon})]}),i.jsx("div",{className:"card-title",children:z.label}),i.jsxs("div",{className:"card-status",children:[i.jsx("span",{className:"status-indicator"}),"AVAILABLE"]})]},z.id))})]})})}),x==="estimates"&&i.jsx("div",{className:"estimates-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"estimates-header",children:[i.jsxs("h2",{children:["PROJECT ESTIMATES - ",c.toUpperCase()]}),i.jsx("div",{className:"estimates-meta"})]}),i.jsx("div",{className:"estimates-grid",children:S.map((z,T)=>i.jsxs("div",{className:`estimate-sheet ${z.status.toLowerCase()}`,onClick:()=>g(f===T?null:T),children:[i.jsxs("div",{className:"sheet-header",children:[i.jsxs("div",{className:"estimate-id",children:[i.jsx("span",{className:"id-code",children:z.code}),i.jsx("span",{className:"id-class",children:z.classification})]}),i.jsx("div",{className:"estimate-status",children:i.jsx("span",{className:`status-badge ${z.status.toLowerCase()}`,children:z.status})})]}),i.jsxs("div",{className:"sheet-content",children:[i.jsx("h3",{children:z.title}),i.jsx("p",{className:"estimate-description",children:z.description}),i.jsxs("div",{className:"cost-display",children:[i.jsxs("div",{className:"base-rate",children:[i.jsx("span",{className:"rate-label",children:"BASE RATE:"}),i.jsxs("span",{className:"rate-value",children:[z.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"total-cost",children:[i.jsx("span",{className:"cost-label",children:"ESTIMATED COST:"}),i.jsx("span",{className:"cost-value",children:z.totalCost})]})]}),i.jsxs("div",{className:"project-specs",children:[i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"AREA:"}),i.jsx("span",{className:"spec-value",children:z.area})]}),i.jsxs("div",{className:"spec-item",children:[i.jsx("span",{className:"spec-label",children:"TIMELINE:"}),i.jsx("span",{className:"spec-value",children:z.timeline})]})]}),f===T&&i.jsxs("div",{className:"detailed-estimate",children:[i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"COST BREAKDOWN"}),i.jsx("div",{className:"breakdown-grid",children:Object.entries(z.costBreakdown).map(([Q,L])=>i.jsxs("div",{className:"breakdown-item",children:[i.jsx("span",{className:"item-name",children:Q}),i.jsx("span",{className:"item-percentage",children:L})]},Q))})]}),i.jsxs("div",{className:"detail-section",children:[i.jsx("h4",{children:"INCLUDED SERVICES"}),i.jsx("div",{className:"included-grid",children:z.included.map((Q,L)=>i.jsxs("div",{className:"included-item",children:[i.jsx("span",{className:"include-check",children:"✓"}),Q]},L))})]}),i.jsx("div",{className:"estimate-footer",children:i.jsxs("button",{className:"request-quote-btn",onClick:r,children:["REQUEST DETAILED QUOTE",i.jsx("span",{className:"btn-arrow",children:"→"})]})})]})]})]},T))})]})}),x==="breakdown"&&i.jsx("div",{className:"breakdown-section",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"breakdown-header",children:i.jsxs("h2",{children:["COST ANALYSIS - ",c.toUpperCase()]})}),i.jsx("div",{className:"analysis-grid",children:S.map((z,T)=>i.jsxs("div",{className:"analysis-card",children:[i.jsxs("div",{className:"analysis-header",children:[i.jsx("h3",{children:z.title}),i.jsx("div",{className:"analysis-code",children:z.code})]}),i.jsxs("div",{className:"cost-chart",children:[i.jsx("div",{className:"chart-title",children:"COST DISTRIBUTION"}),i.jsx("div",{className:"chart-bars",children:Object.entries(z.costBreakdown).map(([Q,L],_)=>i.jsxs("div",{className:"chart-bar",children:[i.jsxs("div",{className:"bar-info",children:[i.jsx("span",{className:"bar-label",children:Q}),i.jsx("span",{className:"bar-percentage",children:L})]}),i.jsx("div",{className:"bar-visual",children:i.jsx("div",{className:"bar-fill",style:{width:L}})})]},_))})]}),i.jsxs("div",{className:"analysis-summary",children:[i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Base Rate:"}),i.jsxs("span",{children:[z.baseRate,"/sq ft"]})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Total Cost:"}),i.jsx("span",{children:z.totalCost})]}),i.jsxs("div",{className:"summary-row",children:[i.jsx("span",{children:"Timeline:"}),i.jsx("span",{children:z.timeline})]})]})]},T))})]})}),i.jsx("div",{className:"lab-statistics",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"stats-frame",children:[i.jsxs("div",{className:"stats-header",children:[i.jsx("h2",{children:"ESTIMATION LAB METRICS"}),i.jsx("div",{className:"metrics-id",children:"LAB-STAT-2024"})]}),i.jsxs("div",{className:"metrics-grid",children:[i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"📋"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"60+"}),i.jsx("span",{className:"metric-label",children:"Estimates Delivered"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"💰"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"95%"}),i.jsx("span",{className:"metric-label",children:"Cost Accuracy"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"⏱️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"24hrs"}),i.jsx("span",{className:"metric-label",children:"Quote Turnaround"})]})]}),i.jsxs("div",{className:"metric-panel",children:[i.jsx("div",{className:"panel-icon",children:"🛡️"}),i.jsxs("div",{className:"panel-data",children:[i.jsx("span",{className:"metric-value",children:"100%"}),i.jsx("span",{className:"metric-label",children:"Transparency"})]})]})]})]})})}),i.jsx("style",{jsx:!0,children:`
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
          
      `})]})},C5="/pavan-techno-constructions/assets/a1-sGu83T9_.gif",A5="/pavan-techno-constructions/assets/a2-CyeHT3-A.gif",E5="/pavan-techno-constructions/assets/a3-CwZT0UDn.gif",N5="/pavan-techno-constructions/assets/a4-Bt8HQudn.gif",T5="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",Cp="/pavan-techno-constructions/assets/after2-CC4aGAP5.jpeg",z5="/pavan-techno-constructions/assets/g4-8NWOpxcK.jpeg",k5="/pavan-techno-constructions/assets/g5-DtKnui7T.jpeg",R5="/pavan-techno-constructions/assets/g6-Bkoah0kI.jpeg",M5="/pavan-techno-constructions/assets/g8-moiSGwUu.jpeg",O5="/pavan-techno-constructions/assets/g10-CtDg70wl.jpeg",D5="/pavan-techno-constructions/assets/g11-Vd8NpP41.jpg",B5="/pavan-techno-constructions/assets/g12-DZXer8D9.jpg",L5=()=>{const[r,s]=v.useState(!1),[u,c]=v.useState(""),[d,f]=v.useState(!1),[g,x]=v.useState(null),[b,p]=v.useState("featured"),[y,N]=v.useState("blueprint"),S=v.useRef(null),z=v.useRef(null),T=v.useRef(null),Q=q=>{const ne=S.current,me=z.current,ee=T.current;if(!ne||!me||!ee)return;const re=ne.getBoundingClientRect();let D=q.pageX-re.left;D<0&&(D=0),D>re.width&&(D=re.width),me.style.clipPath=`inset(0 ${re.width-D}px 0 0)`,ee.style.left=`${D}px`},L=()=>f(!0),_=()=>f(!1),C=q=>{d&&Q(q)},W=()=>f(!0),te=()=>f(!1),K=q=>{if(d){const ne=q.touches[0];Q(ne)}};v.useEffect(()=>(window.addEventListener("mouseup",_),window.addEventListener("mousemove",C),window.addEventListener("touchend",te),window.addEventListener("touchmove",K),()=>{window.removeEventListener("mouseup",_),window.removeEventListener("mousemove",C),window.removeEventListener("touchend",te),window.removeEventListener("touchmove",K)}),[d]);const oe={featured:[{src:Cp,title:"Residential Transformation",type:"Renovation",year:"2024",area:"2,500 sq ft",duration:"6 months"},{src:O5,title:"Commercial Complex",type:"New Construction",year:"2024",area:"15,000 sq ft",duration:"18 months"}],residential:[{src:z5,title:"Modern Villa",type:"Custom Home",year:"2024",area:"3,200 sq ft",duration:"8 months"},{src:k5,title:"Urban Townhouse",type:"Multi-Family",year:"2023",area:"1,800 sq ft",duration:"5 months"},{src:R5,title:"Luxury Estate",type:"High-End Residential",year:"2024",area:"6,500 sq ft",duration:"12 months"},{src:M5,title:"Office Building",type:"Corporate",year:"2023",area:"25,000 sq ft",duration:"24 months"},{src:D5,title:"Retail Center",type:"Commercial",year:"2024",area:"12,000 sq ft",duration:"10 months"},{src:B5,title:"Industrial Facility",type:"Manufacturing",year:"2023",area:"40,000 sq ft",duration:"15 months"}],commercial:[],process:[{src:C5,title:"Foundation Work",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:A5,title:"Structural Development",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:E5,title:"Interior Finishing",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"},{src:N5,title:"Final Installation",type:"Process Documentation",year:"2024",area:"Various",duration:"Ongoing"}]},Y=q=>{c(q),s(!0)},$=()=>{s(!1),c("")},M=q=>{q.target===q.currentTarget&&$()},fe=q=>{p(b===q?null:q)};return i.jsxs("div",{className:"portfolio-page",children:[i.jsx("div",{className:"blueprint-header",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"header-grid",children:[i.jsxs("div",{className:"title-block",children:[i.jsx("div",{className:"blueprint-corner tl"}),i.jsx("div",{className:"blueprint-corner tr"}),i.jsx("div",{className:"blueprint-corner bl"}),i.jsx("div",{className:"blueprint-corner br"}),i.jsxs("div",{className:"project-info",children:[i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"PROJECT:"}),i.jsx("span",{className:"value",children:"CONSTRUCTION PORTFOLIO"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"SCALE:"}),i.jsx("span",{className:"value",children:"1:1 DIGITAL"})]}),i.jsxs("div",{className:"info-line",children:[i.jsx("span",{className:"label",children:"DATE:"}),i.jsx("span",{className:"value",children:"2024"})]})]}),i.jsx("h1",{className:"main-title",children:"PROJECT GALLERY"}),i.jsx("div",{className:"title-underline"})]}),i.jsx("div",{className:"view-controls",children:i.jsxs("div",{className:"control-panel",children:[i.jsx("div",{className:"panel-header",children:"VIEW MODE"}),i.jsxs("div",{className:"mode-buttons",children:[i.jsxs("button",{className:`mode-btn ${y==="blueprint"?"active":""}`,onClick:()=>N("blueprint"),children:[i.jsx("span",{className:"btn-symbol",children:"▦"}),"Blueprint"]}),i.jsxs("button",{className:`mode-btn ${y==="hexagon"?"active":""}`,onClick:()=>N("hexagon"),children:[i.jsx("span",{className:"btn-symbol",children:"⬡"}),"Hexagon"]}),i.jsxs("button",{className:`mode-btn ${y==="timeline"?"active":""}`,onClick:()=>N("timeline"),children:[i.jsx("span",{className:"btn-symbol",children:"≡"}),"Timeline"]})]})]})})]})})}),i.jsx("div",{className:"technical-section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"drawing-header",children:[i.jsx("h2",{children:"BEFORE & AFTER ANALYSIS"}),i.jsx("div",{className:"drawing-number",children:"DWG-001"})]}),i.jsxs("div",{className:"blueprint-frame",children:[i.jsxs("div",{className:"frame-markers",children:[i.jsx("div",{className:"marker top-left",children:"A"}),i.jsx("div",{className:"marker top-right",children:"B"}),i.jsx("div",{className:"marker bottom-left",children:"C"}),i.jsx("div",{className:"marker bottom-right",children:"D"})]}),i.jsxs("div",{className:"comparison-wrapper",ref:S,children:[i.jsx("img",{src:T5,alt:"Before",className:"before-image",ref:z}),i.jsx("img",{src:Cp,alt:"After",className:"after-image"}),i.jsx("div",{className:"technical-slider",ref:T,onMouseDown:L,onTouchStart:W,children:i.jsxs("div",{className:"slider-guide",children:[i.jsx("div",{className:"guide-line"}),i.jsx("div",{className:"slider-handle",children:i.jsxs("div",{className:"handle-cross",children:[i.jsx("div",{className:"cross-h"}),i.jsx("div",{className:"cross-v"})]})})]})}),i.jsxs("div",{className:"technical-label before",children:[i.jsx("div",{className:"label-box",children:"BEFORE"}),i.jsx("div",{className:"dimension-line"})]}),i.jsxs("div",{className:"technical-label after",children:[i.jsx("div",{className:"label-box",children:"AFTER"}),i.jsx("div",{className:"dimension-line"})]})]})]})]})}),i.jsx("div",{className:"gallery-section",children:i.jsxs("div",{className:"container",children:[y==="blueprint"&&i.jsx("div",{className:"blueprint-layout",children:Object.entries(oe).map(([q,ne])=>i.jsxs("div",{className:"project-section",children:[i.jsxs("div",{className:"section-header",onClick:()=>fe(q),children:[i.jsxs("div",{className:"section-title",children:[i.jsx("span",{className:"section-symbol",children:"■"}),q.toUpperCase().replace("_"," "),i.jsxs("span",{className:"project-count",children:["(",ne.length,")"]})]}),i.jsx("div",{className:"section-toggle",children:i.jsx("span",{className:`toggle-symbol ${b===q?"expanded":""}`,children:"+"})})]}),i.jsx("div",{className:`section-content ${b===q?"expanded":""}`,children:i.jsx("div",{className:"blueprint-grid",children:ne.map((me,ee)=>i.jsx("div",{className:"blueprint-card",onClick:()=>Y(me.src),children:i.jsxs("div",{className:"card-frame",children:[i.jsx("div",{className:"frame-corner tl"}),i.jsx("div",{className:"frame-corner tr"}),i.jsx("div",{className:"frame-corner bl"}),i.jsx("div",{className:"frame-corner br"}),i.jsx("img",{src:me.src,alt:me.title}),i.jsx("div",{className:"card-overlay",children:i.jsxs("div",{className:"project-details",children:[i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TITLE:"}),i.jsx("span",{className:"detail-value",children:me.title})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"TYPE:"}),i.jsx("span",{className:"detail-value",children:me.type})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"YEAR:"}),i.jsx("span",{className:"detail-value",children:me.year})]}),i.jsxs("div",{className:"detail-line",children:[i.jsx("span",{className:"detail-label",children:"AREA:"}),i.jsx("span",{className:"detail-value",children:me.area})]})]})})]})},ee))})})]},q))}),y==="hexagon"&&i.jsx("div",{className:"hexagon-layout",children:i.jsx("div",{className:"hex-grid",children:Object.values(oe).flat().map((q,ne)=>i.jsx("div",{className:"hex-item",onClick:()=>Y(q.src),children:i.jsx("div",{className:"hexagon",children:i.jsxs("div",{className:"hex-inner",children:[i.jsx("img",{src:q.src,alt:q.title}),i.jsx("div",{className:"hex-overlay",children:i.jsxs("div",{className:"hex-content",children:[i.jsx("div",{className:"hex-number",children:String(ne+1).padStart(2,"0")}),i.jsx("div",{className:"hex-title",children:q.title})]})})]})})},ne))})}),y==="timeline"&&i.jsx("div",{className:"timeline-layout",children:i.jsxs("div",{className:"timeline-axis",children:[i.jsx("div",{className:"axis-line"}),Object.values(oe).flat().map((q,ne)=>i.jsxs("div",{className:`timeline-item ${ne%2===0?"left":"right"}`,onClick:()=>Y(q.src),children:[i.jsxs("div",{className:"timeline-marker",children:[i.jsx("div",{className:"marker-dot"}),i.jsx("div",{className:"marker-line"})]}),i.jsxs("div",{className:"timeline-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsx("span",{className:"card-year",children:q.year}),i.jsx("span",{className:"card-type",children:q.type})]}),i.jsx("img",{src:q.src,alt:q.title}),i.jsxs("div",{className:"card-info",children:[i.jsx("h3",{children:q.title}),i.jsxs("div",{className:"card-specs",children:[i.jsx("span",{children:q.area}),i.jsx("span",{children:q.duration})]})]})]})]},ne))]})})]})}),r&&i.jsx("div",{className:"technical-modal",onClick:M,children:i.jsxs("div",{className:"modal-frame",children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("div",{className:"modal-title",children:"PROJECT DETAIL VIEW"}),i.jsx("button",{className:"modal-close",onClick:$,children:i.jsx("span",{className:"close-symbol",children:"×"})})]}),i.jsx("div",{className:"modal-content",children:i.jsx("img",{src:u,alt:"Project Detail"})}),i.jsx("div",{className:"modal-footer",children:i.jsx("div",{className:"footer-line"})})]})}),i.jsx("style",{jsx:!0,children:`
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
      `})]})},Y5=()=>{const[r,s]=v.useState({name:"",email:"",phone:"",package:"",message:""}),[u,c]=v.useState({message:"",isError:!1,isSubmitting:!1}),d=v.useRef(null),f=v.useRef(null);v.useEffect(()=>{const b=new IntersectionObserver(p=>{p.forEach(y=>{y.isIntersecting&&(y.target.classList.add("section-visible"),f.current&&f.current.classList.add("heading-visible"))})},{threshold:.2});return d.current&&b.observe(d.current),()=>{d.current&&b.unobserve(d.current)}},[]);const g=b=>{const{name:p,value:y}=b.target;s(N=>({...N,[p]:y}))},x=()=>{if(!r.name||!r.email||!r.phone||!r.package||!r.message){c({message:"Please fill in all required fields.",isError:!0,isSubmitting:!1}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},3e3);return}c({message:"",isError:!1,isSubmitting:!0}),setTimeout(()=>{c({message:"Thank you! Your message has been sent successfully.",isError:!1,isSubmitting:!1}),s({name:"",email:"",phone:"",package:"",message:""}),setTimeout(()=>{c({message:"",isError:!1,isSubmitting:!1})},5e3)},1500)};return i.jsxs(i.Fragment,{children:[i.jsxs("section",{className:"contact-page",ref:d,children:[i.jsxs("div",{className:"animated-background",children:[i.jsx("div",{className:"floating-shape circle-1"}),i.jsx("div",{className:"floating-shape circle-2"}),i.jsx("div",{className:"floating-shape circle-3"}),i.jsx("div",{className:"floating-shape square-1"}),i.jsx("div",{className:"floating-shape triangle-1"})]}),i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"section-title",children:i.jsxs("div",{className:"heading-container",ref:f,children:[i.jsx("h1",{className:"main-heading",children:"GET IN TOUCH"}),i.jsx("div",{className:"heading-underline"}),i.jsx("p",{className:"heading-subtitle",children:"We'd Love to Hear From You"})]})}),i.jsx("div",{className:"form-wrapper",children:i.jsxs("div",{className:"contact-form-container",children:[i.jsxs("div",{className:"form-header",children:[i.jsx("h3",{children:"Send us a Message"}),i.jsx("p",{children:"Let's discuss your project requirements"})]}),i.jsxs("div",{className:"contact-form",children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"name",children:"Full Name"}),i.jsx("input",{type:"text",name:"name",id:"name",placeholder:"Enter your full name",value:r.name,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"Email Address"}),i.jsx("input",{type:"email",name:"email",id:"email",placeholder:"Enter your email address",value:r.email,onChange:g})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"phone",children:"Phone Number"}),i.jsx("input",{type:"tel",name:"phone",id:"phone",placeholder:"Enter your phone number",value:r.phone,onChange:g})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"package",children:"Select Package"}),i.jsxs("select",{name:"package",id:"package",value:r.package,onChange:g,children:[i.jsx("option",{value:"",disabled:!0,children:"Choose a package"}),i.jsx("option",{value:"basic",children:"Basic Package"}),i.jsx("option",{value:"premium",children:"Premium Package"}),i.jsx("option",{value:"luxury",children:"Luxury Package"}),i.jsx("option",{value:"custom",children:"Custom Project"})]})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"message",children:"Your Message"}),i.jsx("textarea",{name:"message",id:"message",placeholder:"Tell us about your project requirements",rows:"5",value:r.message,onChange:g})]}),i.jsx("div",{className:"form-status",children:u.message&&i.jsx("div",{className:`status-message ${u.isError?"error":"success"}`,children:u.message})}),i.jsxs("button",{onClick:x,className:"btn btn-primary",disabled:u.isSubmitting,children:[i.jsx("span",{children:u.isSubmitting?"Sending...":"Send Message"}),i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"})})]})]})]})})]})]}),i.jsx("style",{jsx:!0,children:`
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
      `})]})};function U5(){const[r,s]=v.useState(!1),[u,c]=v.useState(!1);v.useEffect(()=>{const g=()=>{window.scrollY>100?c(!0):c(!1)};return window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]);const d=()=>{s(!0)},f=()=>{s(!1)};return i.jsx(px,{children:i.jsxs("div",{className:"app",children:[i.jsx(Jy,{scrolled:u}),i.jsxs(I2,{children:[i.jsx(Pa,{path:"/",element:i.jsxs(i.Fragment,{children:[i.jsx(gp,{openPopup:d}),i.jsx(_c,{openPopup:d}),i.jsx(xp,{}),i.jsx(bp,{openPopup:d}),i.jsx(hp,{openPopup:d}),i.jsx(Hc,{openPopup:d}),i.jsx(qc,{}),i.jsx(Xc,{}),i.jsx(Vc,{}),i.jsx(wp,{}),i.jsx(Sp,{}),i.jsx(jp,{}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/about",element:i.jsxs(i.Fragment,{children:[i.jsxs("div",{style:{paddingTop:"70px"},children:[i.jsx(Hc,{openPopup:d}),i.jsx(_c,{openPopup:d}),i.jsx(Xc,{}),i.jsx(Vc,{}),i.jsx(qc,{})]}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/services",element:i.jsxs(i.Fragment,{children:[i.jsx(S5,{openPopup:d}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/pricing",element:i.jsxs(i.Fragment,{children:[i.jsx(j5,{openPopup:d}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/gallery",element:i.jsxs(i.Fragment,{children:[i.jsx(L5,{}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"/contact",element:i.jsxs(i.Fragment,{children:[i.jsx(Y5,{}),i.jsx(wn,{})]})}),i.jsx(Pa,{path:"*",element:i.jsxs(i.Fragment,{children:[i.jsx(gp,{openPopup:d}),i.jsx(_c,{openPopup:d}),i.jsx(xp,{}),i.jsx(bp,{openPopup:d}),i.jsx(hp,{openPopup:d}),i.jsx(Hc,{openPopup:d}),i.jsx(qc,{}),i.jsx(Xc,{}),i.jsx(Vc,{}),i.jsx(wp,{}),i.jsx(Sp,{}),i.jsx(jp,{}),i.jsx(wn,{})]})})]}),r&&i.jsx(g5,{closePopup:f})]})})}J1.createRoot(document.getElementById("root")).render(i.jsx(ea.StrictMode,{children:i.jsx(U5,{})}));
