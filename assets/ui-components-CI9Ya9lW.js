import"./react-vendor-DXM1Og12.js";var u={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y;function d(){if(y)return i;y=1;var n=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function o(e,r,t){var s=null;if(t!==void 0&&(s=""+t),r.key!==void 0&&(s=""+r.key),"key"in r){t={};for(var a in r)a!=="key"&&(t[a]=r[a])}else t=r;return r=t.ref,{$$typeof:n,type:e,key:s,ref:r!==void 0?r:null,props:t}}return i.Fragment=p,i.jsx=o,i.jsxs=o,i}var f;function P(){return f||(f=1,u.exports=d()),u.exports}var j=P(),c={exports:{}},R,m;function _(){if(m)return R;m=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return R=n,R}var T,l;function S(){if(l)return T;l=1;var n=_();function p(){}function o(){}return o.resetWarningCache=p,T=function(){function e(s,a,E,q,k,x){if(x!==n){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:p};return t.PropTypes=t,t},T}var v;function F(){return v||(v=1,c.exports=S()()),c.exports}export{j,F as r};
