(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function U0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},rl={},sg={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zs=Symbol.for("react.element"),j0=Symbol.for("react.portal"),z0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),$0=Symbol.for("react.profiler"),H0=Symbol.for("react.provider"),W0=Symbol.for("react.context"),q0=Symbol.for("react.forward_ref"),K0=Symbol.for("react.suspense"),G0=Symbol.for("react.memo"),Q0=Symbol.for("react.lazy"),Vf=Symbol.iterator;function X0(t){return t===null||typeof t!="object"?null:(t=Vf&&t[Vf]||t["@@iterator"],typeof t=="function"?t:null)}var og={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,lg={};function Ri(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||og}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ug(){}ug.prototype=Ri.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||og}var sh=ih.prototype=new ug;sh.constructor=ih;ag(sh,Ri.prototype);sh.isPureReactComponent=!0;var Lf=Array.isArray,cg=Object.prototype.hasOwnProperty,oh={current:null},hg={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,r)&&!hg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Zs,type:t,key:s,ref:a,props:i,_owner:oh.current}}function Y0(t,e){return{$$typeof:Zs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zs}function J0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mf=/\/+/g;function nu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J0(""+t.key):e.toString(36)}function ea(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Zs:case j0:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+nu(a,0):r,Lf(i)?(n="",t!=null&&(n=t.replace(Mf,"$&/")+"/"),ea(i,e,n,"",function(d){return d})):i!=null&&(ah(i)&&(i=Y0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Mf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Lf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+nu(s,l);a+=ea(s,e,n,u,i)}else if(u=X0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+nu(s,l++),a+=ea(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Do(t,e,n){if(t==null)return t;var r=[],i=0;return ea(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},ta={transition:null},eE={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:ta,ReactCurrentOwner:oh};function fg(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:Do,forEach:function(t,e,n){Do(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Do(t,function(){e++}),e},toArray:function(t){return Do(t,function(e){return e})||[]},only:function(t){if(!ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Component=Ri;J.Fragment=z0;J.Profiler=$0;J.PureComponent=ih;J.StrictMode=B0;J.Suspense=K0;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eE;J.act=fg;J.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ag({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=oh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)cg.call(e,u)&&!hg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Zs,type:t.type,key:i,ref:s,props:r,_owner:a}};J.createContext=function(t){return t={$$typeof:W0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H0,_context:t},t.Consumer=t};J.createElement=dg;J.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:q0,render:t}};J.isValidElement=ah;J.lazy=function(t){return{$$typeof:Q0,_payload:{_status:-1,_result:t},_init:Z0}};J.memo=function(t,e){return{$$typeof:G0,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=ta.transition;ta.transition={};try{t()}finally{ta.transition=e}};J.unstable_act=fg;J.useCallback=function(t,e){return it.current.useCallback(t,e)};J.useContext=function(t){return it.current.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t){return it.current.useDeferredValue(t)};J.useEffect=function(t,e){return it.current.useEffect(t,e)};J.useId=function(){return it.current.useId()};J.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};J.useMemo=function(t,e){return it.current.useMemo(t,e)};J.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};J.useRef=function(t){return it.current.useRef(t)};J.useState=function(t){return it.current.useState(t)};J.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};J.useTransition=function(){return it.current.useTransition()};J.version="18.3.1";sg.exports=J;var Ke=sg.exports;const tE=U0(Ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nE=Ke,rE=Symbol.for("react.element"),iE=Symbol.for("react.fragment"),sE=Object.prototype.hasOwnProperty,oE=nE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aE={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)sE.call(e,r)&&!aE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rE,type:t,key:s,ref:a,props:i,_owner:oE.current}}rl.Fragment=iE;rl.jsx=pg;rl.jsxs=pg;ig.exports=rl;var C=ig.exports,zu={},mg={exports:{}},yt={},gg={exports:{}},yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var X=z.length;z.push(G);e:for(;0<X;){var pe=X-1>>>1,ae=z[pe];if(0<i(ae,G))z[pe]=G,z[X]=ae,X=pe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],X=z.pop();if(X!==G){z[0]=X;e:for(var pe=0,ae=z.length,Te=ae>>>1;pe<Te;){var Gt=2*(pe+1)-1,Qt=z[Gt],Xt=Gt+1,Yt=z[Xt];if(0>i(Qt,X))Xt<ae&&0>i(Yt,Qt)?(z[pe]=Yt,z[Xt]=X,pe=Xt):(z[pe]=Qt,z[Gt]=X,pe=Gt);else if(Xt<ae&&0>i(Yt,X))z[pe]=Yt,z[Xt]=X,pe=Xt;else break e}}return G}function i(z,G){var X=z.sortIndex-G.sortIndex;return X!==0?X:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],d=[],f=1,y=null,v=3,R=!1,x=!1,O=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(z){for(var G=n(d);G!==null;){if(G.callback===null)r(d);else if(G.startTime<=z)r(d),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(d)}}function D(z){if(O=!1,A(z),!x)if(n(u)!==null)x=!0,Mi(b);else{var G=n(d);G!==null&&Kt(D,G.startTime-z)}}function b(z,G){x=!1,O&&(O=!1,I(m),m=-1),R=!0;var X=v;try{for(A(G),y=n(u);y!==null&&(!(y.expirationTime>G)||z&&!S());){var pe=y.callback;if(typeof pe=="function"){y.callback=null,v=y.priorityLevel;var ae=pe(y.expirationTime<=G);G=t.unstable_now(),typeof ae=="function"?y.callback=ae:y===n(u)&&r(u),A(G)}else r(u);y=n(u)}if(y!==null)var Te=!0;else{var Gt=n(d);Gt!==null&&Kt(D,Gt.startTime-G),Te=!1}return Te}finally{y=null,v=X,R=!1}}var F=!1,_=null,m=-1,g=5,E=-1;function S(){return!(t.unstable_now()-E<g)}function k(){if(_!==null){var z=t.unstable_now();E=z;var G=!0;try{G=_(!0,z)}finally{G?T():(F=!1,_=null)}}else F=!1}var T;if(typeof w=="function")T=function(){w(k)};else if(typeof MessageChannel<"u"){var _t=new MessageChannel,ir=_t.port2;_t.port1.onmessage=k,T=function(){ir.postMessage(null)}}else T=function(){M(k,0)};function Mi(z){_=z,F||(F=!0,T())}function Kt(z,G){m=M(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){x||R||(x=!0,Mi(b))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var G=3;break;default:G=v}var X=v;v=G;try{return z()}finally{v=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=v;v=z;try{return G()}finally{v=X}},t.unstable_scheduleCallback=function(z,G,X){var pe=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?pe+X:pe):X=pe,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,z={id:f++,callback:G,priorityLevel:z,startTime:X,expirationTime:ae,sortIndex:-1},X>pe?(z.sortIndex=X,e(d,z),n(u)===null&&z===n(d)&&(O?(I(m),m=-1):O=!0,Kt(D,X-pe))):(z.sortIndex=ae,e(u,z),x||R||(x=!0,Mi(b))),z},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(z){var G=v;return function(){var X=v;v=G;try{return z.apply(this,arguments)}finally{v=X}}}})(yg);gg.exports=yg;var lE=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uE=Ke,gt=lE;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,ks={};function Nr(t,e){di(t,e),di(t+"Capture",e)}function di(t,e){for(ks[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,cE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Ff={};function hE(t){return Bu.call(Ff,t)?!0:Bu.call(bf,t)?!1:cE.test(t)?Ff[t]=!0:(bf[t]=!0,!1)}function dE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fE(t,e,n,r){if(e===null||typeof e>"u"||dE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ue[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ue[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ue[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ue[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ue[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ue[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ue[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ue[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ue[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var lh=/[\-:]([a-z])/g;function uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(lh,uh);Ue[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(lh,uh);Ue[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(lh,uh);Ue[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ue[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ue[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function ch(t,e,n,r){var i=Ue.hasOwnProperty(e)?Ue[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fE(e,n,i,r)&&(n=null),r||i===null?hE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=uE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Br=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),$u=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),dh=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),fh=Symbol.for("react.memo"),An=Symbol.for("react.lazy"),wg=Symbol.for("react.offscreen"),Uf=Symbol.iterator;function Xi(t){return t===null||typeof t!="object"?null:(t=Uf&&t[Uf]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,ru;function ss(t){if(ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ru=e&&e[1]||""}return`
`+ru+t}var iu=!1;function su(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ss(t):""}function pE(t){switch(t.tag){case 5:return ss(t.type);case 16:return ss("Lazy");case 13:return ss("Suspense");case 19:return ss("SuspenseList");case 0:case 2:case 15:return t=su(t.type,!1),t;case 11:return t=su(t.type.render,!1),t;case 1:return t=su(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Br:return"Portal";case $u:return"Profiler";case hh:return"StrictMode";case Hu:return"Suspense";case Wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Eg:return(t.displayName||"Context")+".Consumer";case _g:return(t._context.displayName||"Context")+".Provider";case dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fh:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case An:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function mE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gE(t){var e=Tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vo(t){t._valueTracker||(t._valueTracker=gE(t))}function Ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Tg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _a(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ku(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&ch(t,"checked",e,!1)}function Gu(t,e){Sg(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qu(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qu(t,e,n){(e!=="number"||_a(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var os=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(os(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function Ag(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $f(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,Rg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ps={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yE=["Webkit","ms","Moz","O"];Object.keys(ps).forEach(function(t){yE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ps[e]=ps[t]})});function kg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ps.hasOwnProperty(t)&&ps[t]?(""+e).trim():e+"px"}function Pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var vE=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(vE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ec=null;function ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tc=null,ni=null,ri=null;function Hf(t){if(t=no(t)){if(typeof tc!="function")throw Error(L(280));var e=t.stateNode;e&&(e=ll(e),tc(t.stateNode,t.type,e))}}function xg(t){ni?ri?ri.push(t):ri=[t]:ni=t}function Ng(){if(ni){var t=ni,e=ri;if(ri=ni=null,Hf(t),e)for(t=0;t<e.length;t++)Hf(e[t])}}function Dg(t,e){return t(e)}function Og(){}var ou=!1;function Vg(t,e,n){if(ou)return t(e,n);ou=!0;try{return Dg(t,e,n)}finally{ou=!1,(ni!==null||ri!==null)&&(Og(),Ng())}}function xs(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var nc=!1;if(hn)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){nc=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{nc=!1}function _E(t,e,n,r,i,s,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var ms=!1,Ea=null,wa=!1,rc=null,EE={onError:function(t){ms=!0,Ea=t}};function wE(t,e,n,r,i,s,a,l,u){ms=!1,Ea=null,_E.apply(EE,arguments)}function TE(t,e,n,r,i,s,a,l,u){if(wE.apply(this,arguments),ms){if(ms){var d=Ea;ms=!1,Ea=null}else throw Error(L(198));wa||(wa=!0,rc=d)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(Dr(t)!==t)throw Error(L(188))}function IE(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wf(i),t;if(s===r)return Wf(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Mg(t){return t=IE(t),t!==null?bg(t):null}function bg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bg(t);if(e!==null)return e;t=t.sibling}return null}var Fg=gt.unstable_scheduleCallback,qf=gt.unstable_cancelCallback,SE=gt.unstable_shouldYield,AE=gt.unstable_requestPaint,Se=gt.unstable_now,CE=gt.unstable_getCurrentPriorityLevel,mh=gt.unstable_ImmediatePriority,Ug=gt.unstable_UserBlockingPriority,Ta=gt.unstable_NormalPriority,RE=gt.unstable_LowPriority,jg=gt.unstable_IdlePriority,il=null,Ut=null;function kE(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(il,t,void 0,(t.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:NE,PE=Math.log,xE=Math.LN2;function NE(t){return t>>>=0,t===0?32:31-(PE(t)/xE|0)|0}var Mo=64,bo=4194304;function as(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=as(l):(s&=a,s!==0&&(r=as(s)))}else a=n&~i,a!==0?r=as(a):s!==0&&(r=as(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nt(e),i=1<<n,r|=t[n],e&=~i;return r}function DE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Nt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=DE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zg(){var t=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nt(e),t[e]=n}function VE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Nt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Bg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $g,yh,Hg,Wg,qg,sc=!1,Fo=[],bn=null,Fn=null,Un=null,Ns=new Map,Ds=new Map,Rn=[],LE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Ns.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ds.delete(e.pointerId)}}function Ji(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=no(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ME(t,e,n,r,i){switch(e){case"focusin":return bn=Ji(bn,t,e,n,r,i),!0;case"dragenter":return Fn=Ji(Fn,t,e,n,r,i),!0;case"mouseover":return Un=Ji(Un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ns.set(s,Ji(Ns.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ds.set(s,Ji(Ds.get(s)||null,t,e,n,r,i)),!0}return!1}function Kg(t){var e=dr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Lg(n),e!==null){t.blockedOn=e,qg(t.priority,function(){Hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ec=r,n.target.dispatchEvent(r),ec=null}else return e=no(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Gf(t,e,n){na(t)&&n.delete(e)}function bE(){sc=!1,bn!==null&&na(bn)&&(bn=null),Fn!==null&&na(Fn)&&(Fn=null),Un!==null&&na(Un)&&(Un=null),Ns.forEach(Gf),Ds.forEach(Gf)}function Zi(t,e){t.blockedOn===e&&(t.blockedOn=null,sc||(sc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,bE)))}function Os(t){function e(i){return Zi(i,t)}if(0<Fo.length){Zi(Fo[0],t);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&Zi(bn,t),Fn!==null&&Zi(Fn,t),Un!==null&&Zi(Un,t),Ns.forEach(e),Ds.forEach(e),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)Kg(n),n.blockedOn===null&&Rn.shift()}var ii=vn.ReactCurrentBatchConfig,Sa=!0;function FE(t,e,n,r){var i=oe,s=ii.transition;ii.transition=null;try{oe=1,vh(t,e,n,r)}finally{oe=i,ii.transition=s}}function UE(t,e,n,r){var i=oe,s=ii.transition;ii.transition=null;try{oe=4,vh(t,e,n,r)}finally{oe=i,ii.transition=s}}function vh(t,e,n,r){if(Sa){var i=oc(t,e,n,r);if(i===null)yu(t,e,r,Aa,n),Kf(t,r);else if(ME(i,t,e,n,r))r.stopPropagation();else if(Kf(t,r),e&4&&-1<LE.indexOf(t)){for(;i!==null;){var s=no(i);if(s!==null&&$g(s),s=oc(t,e,n,r),s===null&&yu(t,e,r,Aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yu(t,e,r,null,n)}}var Aa=null;function oc(t,e,n,r){if(Aa=null,t=ph(r),t=dr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Aa=t,null}function Gg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(CE()){case mh:return 1;case Ug:return 4;case Ta:case RE:return 16;case jg:return 536870912;default:return 16}default:return 16}}var On=null,_h=null,ra=null;function Qg(){if(ra)return ra;var t,e=_h,n=e.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return ra=i.slice(t,1<r?1-r:void 0)}function ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function Qf(){return!1}function vt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:Qf,this.isPropagationStopped=Qf,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=vt(ki),to=ye({},ki,{view:0,detail:0}),jE=vt(to),lu,uu,es,sl=ye({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==es&&(es&&t.type==="mousemove"?(lu=t.screenX-es.screenX,uu=t.screenY-es.screenY):uu=lu=0,es=t),lu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),Xf=vt(sl),zE=ye({},sl,{dataTransfer:0}),BE=vt(zE),$E=ye({},to,{relatedTarget:0}),cu=vt($E),HE=ye({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),WE=vt(HE),qE=ye({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KE=vt(qE),GE=ye({},ki,{data:0}),Yf=vt(GE),QE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YE[t])?!!e[t]:!1}function wh(){return JE}var ZE=ye({},to,{key:function(t){if(t.key){var e=QE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wh,charCode:function(t){return t.type==="keypress"?ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ew=vt(ZE),tw=ye({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=vt(tw),nw=ye({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wh}),rw=vt(nw),iw=ye({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),sw=vt(iw),ow=ye({},sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aw=vt(ow),lw=[9,13,27,32],Th=hn&&"CompositionEvent"in window,gs=null;hn&&"documentMode"in document&&(gs=document.documentMode);var uw=hn&&"TextEvent"in window&&!gs,Xg=hn&&(!Th||gs&&8<gs&&11>=gs),Zf=" ",ep=!1;function Yg(t,e){switch(t){case"keyup":return lw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function cw(t,e){switch(t){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(ep=!0,Zf);case"textInput":return t=e.data,t===Zf&&ep?null:t;default:return null}}function hw(t,e){if(Hr)return t==="compositionend"||!Th&&Yg(t,e)?(t=Qg(),ra=_h=On=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xg&&e.locale!=="ko"?null:e.data;default:return null}}var dw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dw[t.type]:e==="textarea"}function Zg(t,e,n,r){xg(r),e=Ca(e,"onChange"),0<e.length&&(n=new Eh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ys=null,Vs=null;function fw(t){cy(t,0)}function ol(t){var e=Kr(t);if(Ig(e))return t}function pw(t,e){if(t==="change")return e}var ey=!1;if(hn){var hu;if(hn){var du="oninput"in document;if(!du){var np=document.createElement("div");np.setAttribute("oninput","return;"),du=typeof np.oninput=="function"}hu=du}else hu=!1;ey=hu&&(!document.documentMode||9<document.documentMode)}function rp(){ys&&(ys.detachEvent("onpropertychange",ty),Vs=ys=null)}function ty(t){if(t.propertyName==="value"&&ol(Vs)){var e=[];Zg(e,Vs,t,ph(t)),Vg(fw,e)}}function mw(t,e,n){t==="focusin"?(rp(),ys=e,Vs=n,ys.attachEvent("onpropertychange",ty)):t==="focusout"&&rp()}function gw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol(Vs)}function yw(t,e){if(t==="click")return ol(e)}function vw(t,e){if(t==="input"||t==="change")return ol(e)}function _w(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ot=typeof Object.is=="function"?Object.is:_w;function Ls(t,e){if(Ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bu.call(e,i)||!Ot(t[i],e[i]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=ip(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function ny(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ny(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ry(){for(var t=window,e=_a();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_a(t.document)}return e}function Ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ew(t){var e=ry(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ny(n.ownerDocument.documentElement,n)){if(r!==null&&Ih(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sp(n,s);var a=sp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ww=hn&&"documentMode"in document&&11>=document.documentMode,Wr=null,ac=null,vs=null,lc=!1;function op(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||Wr==null||Wr!==_a(r)||(r=Wr,"selectionStart"in r&&Ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vs&&Ls(vs,r)||(vs=r,r=Ca(ac,"onSelect"),0<r.length&&(e=new Eh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wr)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},fu={},iy={};hn&&(iy=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function al(t){if(fu[t])return fu[t];if(!qr[t])return t;var e=qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iy)return fu[t]=e[n];return t}var sy=al("animationend"),oy=al("animationiteration"),ay=al("animationstart"),ly=al("transitionend"),uy=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){uy.set(t,e),Nr(e,[t])}for(var pu=0;pu<ap.length;pu++){var mu=ap[pu],Tw=mu.toLowerCase(),Iw=mu[0].toUpperCase()+mu.slice(1);er(Tw,"on"+Iw)}er(sy,"onAnimationEnd");er(oy,"onAnimationIteration");er(ay,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(ly,"onTransitionEnd");di("onMouseEnter",["mouseout","mouseover"]);di("onMouseLeave",["mouseout","mouseover"]);di("onPointerEnter",["pointerout","pointerover"]);di("onPointerLeave",["pointerout","pointerover"]);Nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function lp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,TE(r,e,void 0,t),t.currentTarget=null}function cy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;lp(i,l,d),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;lp(i,l,d),s=u}}}if(wa)throw t=rc,wa=!1,rc=null,t}function he(t,e){var n=e[fc];n===void 0&&(n=e[fc]=new Set);var r=t+"__bubble";n.has(r)||(hy(e,t,2,!1),n.add(r))}function gu(t,e,n){var r=0;e&&(r|=4),hy(n,t,r,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Ms(t){if(!t[zo]){t[zo]=!0,vg.forEach(function(n){n!=="selectionchange"&&(Sw.has(n)||gu(n,!1,t),gu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,gu("selectionchange",!1,e))}}function hy(t,e,n,r){switch(Gg(e)){case 1:var i=FE;break;case 4:i=UE;break;default:i=vh}n=i.bind(null,e,n,t),i=void 0,!nc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=dr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Vg(function(){var d=s,f=ph(n),y=[];e:{var v=uy.get(t);if(v!==void 0){var R=Eh,x=t;switch(t){case"keypress":if(ia(n)===0)break e;case"keydown":case"keyup":R=ew;break;case"focusin":x="focus",R=cu;break;case"focusout":x="blur",R=cu;break;case"beforeblur":case"afterblur":R=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=BE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=rw;break;case sy:case oy:case ay:R=WE;break;case ly:R=sw;break;case"scroll":R=jE;break;case"wheel":R=aw;break;case"copy":case"cut":case"paste":R=KE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Jf}var O=(e&4)!==0,M=!O&&t==="scroll",I=O?v!==null?v+"Capture":null:v;O=[];for(var w=d,A;w!==null;){A=w;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,I!==null&&(D=xs(w,I),D!=null&&O.push(bs(w,D,A)))),M)break;w=w.return}0<O.length&&(v=new R(v,x,null,n,f),y.push({event:v,listeners:O}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",v&&n!==ec&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[dn]))break e;if((R||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,R?(x=n.relatedTarget||n.toElement,R=d,x=x?dr(x):null,x!==null&&(M=Dr(x),x!==M||x.tag!==5&&x.tag!==6)&&(x=null)):(R=null,x=d),R!==x)){if(O=Xf,D="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(O=Jf,D="onPointerLeave",I="onPointerEnter",w="pointer"),M=R==null?v:Kr(R),A=x==null?v:Kr(x),v=new O(D,w+"leave",R,n,f),v.target=M,v.relatedTarget=A,D=null,dr(f)===d&&(O=new O(I,w+"enter",x,n,f),O.target=A,O.relatedTarget=M,D=O),M=D,R&&x)t:{for(O=R,I=x,w=0,A=O;A;A=Fr(A))w++;for(A=0,D=I;D;D=Fr(D))A++;for(;0<w-A;)O=Fr(O),w--;for(;0<A-w;)I=Fr(I),A--;for(;w--;){if(O===I||I!==null&&O===I.alternate)break t;O=Fr(O),I=Fr(I)}O=null}else O=null;R!==null&&up(y,v,R,O,!1),x!==null&&M!==null&&up(y,M,x,O,!0)}}e:{if(v=d?Kr(d):window,R=v.nodeName&&v.nodeName.toLowerCase(),R==="select"||R==="input"&&v.type==="file")var b=pw;else if(tp(v))if(ey)b=vw;else{b=gw;var F=mw}else(R=v.nodeName)&&R.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=yw);if(b&&(b=b(t,d))){Zg(y,b,n,f);break e}F&&F(t,v,d),t==="focusout"&&(F=v._wrapperState)&&F.controlled&&v.type==="number"&&Qu(v,"number",v.value)}switch(F=d?Kr(d):window,t){case"focusin":(tp(F)||F.contentEditable==="true")&&(Wr=F,ac=d,vs=null);break;case"focusout":vs=ac=Wr=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,op(y,n,f);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":op(y,n,f)}var _;if(Th)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Hr?Yg(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Xg&&n.locale!=="ko"&&(Hr||m!=="onCompositionStart"?m==="onCompositionEnd"&&Hr&&(_=Qg()):(On=f,_h="value"in On?On.value:On.textContent,Hr=!0)),F=Ca(d,m),0<F.length&&(m=new Yf(m,t,null,n,f),y.push({event:m,listeners:F}),_?m.data=_:(_=Jg(n),_!==null&&(m.data=_)))),(_=uw?cw(t,n):hw(t,n))&&(d=Ca(d,"onBeforeInput"),0<d.length&&(f=new Yf("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:d}),f.data=_))}cy(y,e)})}function bs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ca(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=xs(t,n),s!=null&&r.unshift(bs(t,s,i)),s=xs(t,e),s!=null&&r.push(bs(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function up(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=xs(n,s),u!=null&&a.unshift(bs(n,u,l))):i||(u=xs(n,s),u!=null&&a.push(bs(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Aw=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(Aw,`
`).replace(Cw,"")}function Bo(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(L(425))}function Ra(){}var uc=null,cc=null;function hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,Rw=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,kw=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(Pw)}:dc;function Pw(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Os(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Pi=Math.random().toString(36).slice(2),bt="__reactFiber$"+Pi,Fs="__reactProps$"+Pi,dn="__reactContainer$"+Pi,fc="__reactEvents$"+Pi,xw="__reactListeners$"+Pi,Nw="__reactHandles$"+Pi;function dr(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dp(t);t!==null;){if(n=t[bt])return n;t=dp(t)}return e}t=n,n=t.parentNode}return null}function no(t){return t=t[bt]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function ll(t){return t[Fs]||null}var pc=[],Gr=-1;function tr(t){return{current:t}}function de(t){0>Gr||(t.current=pc[Gr],pc[Gr]=null,Gr--)}function ue(t,e){Gr++,pc[Gr]=t.current,t.current=e}var Xn={},Ye=tr(Xn),lt=tr(!1),wr=Xn;function fi(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function ka(){de(lt),de(Ye)}function fp(t,e,n){if(Ye.current!==Xn)throw Error(L(168));ue(Ye,e),ue(lt,n)}function dy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,mE(t)||"Unknown",i));return ye({},n,r)}function Pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,wr=Ye.current,ue(Ye,t),ue(lt,lt.current),!0}function pp(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=dy(t,e,wr),r.__reactInternalMemoizedMergedChildContext=t,de(lt),de(Ye),ue(Ye,t)):de(lt),ue(lt,n)}var tn=null,ul=!1,_u=!1;function fy(t){tn===null?tn=[t]:tn.push(t)}function Dw(t){ul=!0,fy(t)}function nr(){if(!_u&&tn!==null){_u=!0;var t=0,e=oe;try{var n=tn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}tn=null,ul=!1}catch(i){throw tn!==null&&(tn=tn.slice(t+1)),Fg(mh,nr),i}finally{oe=e,_u=!1}}return null}var Qr=[],Xr=0,xa=null,Na=0,Et=[],wt=0,Tr=null,nn=1,rn="";function ur(t,e){Qr[Xr++]=Na,Qr[Xr++]=xa,xa=t,Na=e}function py(t,e,n){Et[wt++]=nn,Et[wt++]=rn,Et[wt++]=Tr,Tr=t;var r=nn;t=rn;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var s=32-Nt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,nn=1<<32-Nt(e)+i|n<<i|r,rn=s+t}else nn=1<<s|n<<i|r,rn=t}function Sh(t){t.return!==null&&(ur(t,1),py(t,1,0))}function Ah(t){for(;t===xa;)xa=Qr[--Xr],Qr[Xr]=null,Na=Qr[--Xr],Qr[Xr]=null;for(;t===Tr;)Tr=Et[--wt],Et[wt]=null,rn=Et[--wt],Et[wt]=null,nn=Et[--wt],Et[wt]=null}var mt=null,pt=null,fe=!1,xt=null;function my(t,e){var n=Tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mt=t,pt=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mt=t,pt=null,!0):!1;default:return!1}}function mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gc(t){if(fe){var e=pt;if(e){var n=e;if(!mp(t,e)){if(mc(t))throw Error(L(418));e=jn(n.nextSibling);var r=mt;e&&mp(t,e)?my(r,n):(t.flags=t.flags&-4097|2,fe=!1,mt=t)}}else{if(mc(t))throw Error(L(418));t.flags=t.flags&-4097|2,fe=!1,mt=t}}}function gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function $o(t){if(t!==mt)return!1;if(!fe)return gp(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hc(t.type,t.memoizedProps)),e&&(e=pt)){if(mc(t))throw gy(),Error(L(418));for(;e;)my(t,e),e=jn(e.nextSibling)}if(gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=mt?jn(t.stateNode.nextSibling):null;return!0}function gy(){for(var t=pt;t;)t=jn(t.nextSibling)}function pi(){pt=mt=null,fe=!1}function Ch(t){xt===null?xt=[t]:xt.push(t)}var Ow=vn.ReactCurrentBatchConfig;function ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ho(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yp(t){var e=t._init;return e(t._payload)}function yy(t){function e(I,w){if(t){var A=I.deletions;A===null?(I.deletions=[w],I.flags|=16):A.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=Hn(I,w),I.index=0,I.sibling=null,I}function s(I,w,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<w?(I.flags|=2,w):A):(I.flags|=2,w)):(I.flags|=1048576,w)}function a(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,A,D){return w===null||w.tag!==6?(w=Cu(A,I.mode,D),w.return=I,w):(w=i(w,A),w.return=I,w)}function u(I,w,A,D){var b=A.type;return b===$r?f(I,w,A.props.children,D,A.key):w!==null&&(w.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===An&&yp(b)===w.type)?(D=i(w,A.props),D.ref=ts(I,w,A),D.return=I,D):(D=ha(A.type,A.key,A.props,null,I.mode,D),D.ref=ts(I,w,A),D.return=I,D)}function d(I,w,A,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Ru(A,I.mode,D),w.return=I,w):(w=i(w,A.children||[]),w.return=I,w)}function f(I,w,A,D,b){return w===null||w.tag!==7?(w=yr(A,I.mode,D,b),w.return=I,w):(w=i(w,A),w.return=I,w)}function y(I,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Cu(""+w,I.mode,A),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oo:return A=ha(w.type,w.key,w.props,null,I.mode,A),A.ref=ts(I,null,w),A.return=I,A;case Br:return w=Ru(w,I.mode,A),w.return=I,w;case An:var D=w._init;return y(I,D(w._payload),A)}if(os(w)||Xi(w))return w=yr(w,I.mode,A,null),w.return=I,w;Ho(I,w)}return null}function v(I,w,A,D){var b=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return b!==null?null:l(I,w,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Oo:return A.key===b?u(I,w,A,D):null;case Br:return A.key===b?d(I,w,A,D):null;case An:return b=A._init,v(I,w,b(A._payload),D)}if(os(A)||Xi(A))return b!==null?null:f(I,w,A,D,null);Ho(I,A)}return null}function R(I,w,A,D,b){if(typeof D=="string"&&D!==""||typeof D=="number")return I=I.get(A)||null,l(w,I,""+D,b);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Oo:return I=I.get(D.key===null?A:D.key)||null,u(w,I,D,b);case Br:return I=I.get(D.key===null?A:D.key)||null,d(w,I,D,b);case An:var F=D._init;return R(I,w,A,F(D._payload),b)}if(os(D)||Xi(D))return I=I.get(A)||null,f(w,I,D,b,null);Ho(w,D)}return null}function x(I,w,A,D){for(var b=null,F=null,_=w,m=w=0,g=null;_!==null&&m<A.length;m++){_.index>m?(g=_,_=null):g=_.sibling;var E=v(I,_,A[m],D);if(E===null){_===null&&(_=g);break}t&&_&&E.alternate===null&&e(I,_),w=s(E,w,m),F===null?b=E:F.sibling=E,F=E,_=g}if(m===A.length)return n(I,_),fe&&ur(I,m),b;if(_===null){for(;m<A.length;m++)_=y(I,A[m],D),_!==null&&(w=s(_,w,m),F===null?b=_:F.sibling=_,F=_);return fe&&ur(I,m),b}for(_=r(I,_);m<A.length;m++)g=R(_,I,m,A[m],D),g!==null&&(t&&g.alternate!==null&&_.delete(g.key===null?m:g.key),w=s(g,w,m),F===null?b=g:F.sibling=g,F=g);return t&&_.forEach(function(S){return e(I,S)}),fe&&ur(I,m),b}function O(I,w,A,D){var b=Xi(A);if(typeof b!="function")throw Error(L(150));if(A=b.call(A),A==null)throw Error(L(151));for(var F=b=null,_=w,m=w=0,g=null,E=A.next();_!==null&&!E.done;m++,E=A.next()){_.index>m?(g=_,_=null):g=_.sibling;var S=v(I,_,E.value,D);if(S===null){_===null&&(_=g);break}t&&_&&S.alternate===null&&e(I,_),w=s(S,w,m),F===null?b=S:F.sibling=S,F=S,_=g}if(E.done)return n(I,_),fe&&ur(I,m),b;if(_===null){for(;!E.done;m++,E=A.next())E=y(I,E.value,D),E!==null&&(w=s(E,w,m),F===null?b=E:F.sibling=E,F=E);return fe&&ur(I,m),b}for(_=r(I,_);!E.done;m++,E=A.next())E=R(_,I,m,E.value,D),E!==null&&(t&&E.alternate!==null&&_.delete(E.key===null?m:E.key),w=s(E,w,m),F===null?b=E:F.sibling=E,F=E);return t&&_.forEach(function(k){return e(I,k)}),fe&&ur(I,m),b}function M(I,w,A,D){if(typeof A=="object"&&A!==null&&A.type===$r&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Oo:e:{for(var b=A.key,F=w;F!==null;){if(F.key===b){if(b=A.type,b===$r){if(F.tag===7){n(I,F.sibling),w=i(F,A.props.children),w.return=I,I=w;break e}}else if(F.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===An&&yp(b)===F.type){n(I,F.sibling),w=i(F,A.props),w.ref=ts(I,F,A),w.return=I,I=w;break e}n(I,F);break}else e(I,F);F=F.sibling}A.type===$r?(w=yr(A.props.children,I.mode,D,A.key),w.return=I,I=w):(D=ha(A.type,A.key,A.props,null,I.mode,D),D.ref=ts(I,w,A),D.return=I,I=D)}return a(I);case Br:e:{for(F=A.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(I,w.sibling),w=i(w,A.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Ru(A,I.mode,D),w.return=I,I=w}return a(I);case An:return F=A._init,M(I,w,F(A._payload),D)}if(os(A))return x(I,w,A,D);if(Xi(A))return O(I,w,A,D);Ho(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,A),w.return=I,I=w):(n(I,w),w=Cu(A,I.mode,D),w.return=I,I=w),a(I)):n(I,w)}return M}var mi=yy(!0),vy=yy(!1),Da=tr(null),Oa=null,Yr=null,Rh=null;function kh(){Rh=Yr=Oa=null}function Ph(t){var e=Da.current;de(Da),t._currentValue=e}function yc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function si(t,e){Oa=t,Rh=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(at=!0),t.firstContext=null)}function St(t){var e=t._currentValue;if(Rh!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(Oa===null)throw Error(L(308));Yr=t,Oa.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var fr=null;function xh(t){fr===null?fr=[t]:fr.push(t)}function _y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xh(e)):(n.next=i.next,i.next=n),e.interleaved=n,fn(t,r)}function fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function Nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function un(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,fn(t,n)}return i=r.interleaved,i===null?(e.next=e,xh(r)):(e.next=i.next,i.next=e),r.interleaved=e,fn(t,n)}function sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}function vp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Va(t,e,n,r){var i=t.updateQueue;Cn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?s=d:a.next=d,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;a=0,f=d=u=null,l=s;do{var v=l.lane,R=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,O=l;switch(v=e,R=n,O.tag){case 1:if(x=O.payload,typeof x=="function"){y=x.call(R,y,v);break e}y=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=O.payload,v=typeof x=="function"?x.call(R,y,v):x,v==null)break e;y=ye({},y,v);break e;case 2:Cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else R={eventTime:R,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=R,u=y):f=f.next=R,a|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=y),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Sr|=a,t.lanes=a,t.memoizedState=y}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var ro={},jt=tr(ro),Us=tr(ro),js=tr(ro);function pr(t){if(t===ro)throw Error(L(174));return t}function Dh(t,e){switch(ue(js,e),ue(Us,t),ue(jt,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yu(e,t)}de(jt),ue(jt,e)}function gi(){de(jt),de(Us),de(js)}function wy(t){pr(js.current);var e=pr(jt.current),n=Yu(e,t.type);e!==n&&(ue(Us,t),ue(jt,n))}function Oh(t){Us.current===t&&(de(jt),de(Us))}var me=tr(0);function La(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eu=[];function Vh(){for(var t=0;t<Eu.length;t++)Eu[t]._workInProgressVersionPrimary=null;Eu.length=0}var oa=vn.ReactCurrentDispatcher,wu=vn.ReactCurrentBatchConfig,Ir=0,ge=null,ke=null,De=null,Ma=!1,_s=!1,zs=0,Vw=0;function He(){throw Error(L(321))}function Lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ot(t[n],e[n]))return!1;return!0}function Mh(t,e,n,r,i,s){if(Ir=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oa.current=t===null||t.memoizedState===null?Fw:Uw,t=n(r,i),_s){s=0;do{if(_s=!1,zs=0,25<=s)throw Error(L(301));s+=1,De=ke=null,e.updateQueue=null,oa.current=jw,t=n(r,i)}while(_s)}if(oa.current=ba,e=ke!==null&&ke.next!==null,Ir=0,De=ke=ge=null,Ma=!1,e)throw Error(L(300));return t}function bh(){var t=zs!==0;return zs=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ge.memoizedState=De=t:De=De.next=t,De}function At(){if(ke===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var e=De===null?ge.memoizedState:De.next;if(e!==null)De=e,ke=t;else{if(t===null)throw Error(L(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},De===null?ge.memoizedState=De=t:De=De.next=t}return De}function Bs(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=At(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,d=s;do{var f=d.lane;if((Ir&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var y={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,a=r):u=u.next=y,ge.lanes|=f,Sr|=f}d=d.next}while(d!==null&&d!==s);u===null?a=r:u.next=l,Ot(r,e.memoizedState)||(at=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Iu(t){var e=At(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ot(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ty(){}function Iy(t,e){var n=ge,r=At(),i=e(),s=!Ot(r.memoizedState,i);if(s&&(r.memoizedState=i,at=!0),r=r.queue,Fh(Cy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,$s(9,Ay.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(L(349));Ir&30||Sy(n,e,i)}return i}function Sy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ay(t,e,n,r){e.value=n,e.getSnapshot=r,Ry(e)&&ky(t)}function Cy(t,e,n){return n(function(){Ry(e)&&ky(t)})}function Ry(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ot(t,n)}catch{return!0}}function ky(t){var e=fn(t,1);e!==null&&Dt(e,t,1,-1)}function Ep(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bs,lastRenderedState:t},e.queue=t,t=t.dispatch=bw.bind(null,ge,t),[e.memoizedState,t]}function $s(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Py(){return At().memoizedState}function aa(t,e,n,r){var i=Mt();ge.flags|=t,i.memoizedState=$s(1|e,n,void 0,r===void 0?null:r)}function cl(t,e,n,r){var i=At();r=r===void 0?null:r;var s=void 0;if(ke!==null){var a=ke.memoizedState;if(s=a.destroy,r!==null&&Lh(r,a.deps)){i.memoizedState=$s(e,n,s,r);return}}ge.flags|=t,i.memoizedState=$s(1|e,n,s,r)}function wp(t,e){return aa(8390656,8,t,e)}function Fh(t,e){return cl(2048,8,t,e)}function xy(t,e){return cl(4,2,t,e)}function Ny(t,e){return cl(4,4,t,e)}function Dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Oy(t,e,n){return n=n!=null?n.concat([t]):null,cl(4,4,Dy.bind(null,e,t),n)}function Uh(){}function Vy(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ly(t,e){var n=At();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function My(t,e,n){return Ir&21?(Ot(n,e)||(n=zg(),ge.lanes|=n,Sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,at=!0),t.memoizedState=n)}function Lw(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{oe=n,wu.transition=r}}function by(){return At().memoizedState}function Mw(t,e,n){var r=$n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fy(t))Uy(e,n);else if(n=_y(t,e,n,r),n!==null){var i=rt();Dt(n,t,r,i),jy(n,e,r)}}function bw(t,e,n){var r=$n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fy(t))Uy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ot(l,a)){var u=e.interleaved;u===null?(i.next=i,xh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=_y(t,e,i,r),n!==null&&(i=rt(),Dt(n,t,r,i),jy(n,e,r))}}function Fy(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Uy(t,e){_s=Ma=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}var ba={readContext:St,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},Fw={readContext:St,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:St,useEffect:wp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,aa(4194308,4,Dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return aa(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Mw.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:Uh,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=Lw.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Mt();if(fe){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Oe===null)throw Error(L(349));Ir&30||Sy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wp(Cy.bind(null,r,s,t),[t]),r.flags|=2048,$s(9,Ay.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Mt(),e=Oe.identifierPrefix;if(fe){var n=rn,r=nn;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Uw={readContext:St,useCallback:Vy,useContext:St,useEffect:Fh,useImperativeHandle:Oy,useInsertionEffect:xy,useLayoutEffect:Ny,useMemo:Ly,useReducer:Tu,useRef:Py,useState:function(){return Tu(Bs)},useDebugValue:Uh,useDeferredValue:function(t){var e=At();return My(e,ke.memoizedState,t)},useTransition:function(){var t=Tu(Bs)[0],e=At().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:Iy,useId:by,unstable_isNewReconciler:!1},jw={readContext:St,useCallback:Vy,useContext:St,useEffect:Fh,useImperativeHandle:Oy,useInsertionEffect:xy,useLayoutEffect:Ny,useMemo:Ly,useReducer:Iu,useRef:Py,useState:function(){return Iu(Bs)},useDebugValue:Uh,useDeferredValue:function(t){var e=At();return ke===null?e.memoizedState=t:My(e,ke.memoizedState,t)},useTransition:function(){var t=Iu(Bs)[0],e=At().memoizedState;return[t,e]},useMutableSource:Ty,useSyncExternalStore:Iy,useId:by,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hl={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=$n(t),s=un(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Dt(e,t,i,r),sa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=$n(t),s=un(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Dt(e,t,i,r),sa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=$n(t),i=un(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Dt(e,t,r,n),sa(e,t,r))}};function Tp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ls(n,r)||!Ls(i,s):!0}function zy(t,e,n){var r=!1,i=Xn,s=e.contextType;return typeof s=="object"&&s!==null?s=St(s):(i=ut(e)?wr:Ye.current,r=e.contextTypes,s=(r=r!=null)?fi(t,i):Xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ip(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hl.enqueueReplaceState(e,e.state,null)}function _c(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=St(s):(s=ut(e)?wr:Ye.current,i.context=fi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hl.enqueueReplaceState(i,i.state,null),Va(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e){try{var n="",r=e;do n+=pE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ec(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zw=typeof WeakMap=="function"?WeakMap:Map;function By(t,e,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ua||(Ua=!0,xc=r),Ec(t,e)},n}function $y(t,e,n){n=un(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ec(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ec(t,e),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Sp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tT.bind(null,t,e,n),e.then(t,t))}function Ap(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=un(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var Bw=vn.ReactCurrentOwner,at=!1;function tt(t,e,n,r){e.child=t===null?vy(e,null,n,r):mi(e,t.child,n,r)}function Rp(t,e,n,r,i){n=n.render;var s=e.ref;return si(e,i),r=Mh(t,e,n,r,s,i),n=bh(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(fe&&n&&Sh(e),e.flags|=1,tt(t,e,r,i),e.child)}function kp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Hy(t,e,s,r,i)):(t=ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(a,r)&&t.ref===e.ref)return pn(t,e,i)}return e.flags|=1,t=Hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Hy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ls(s,r)&&t.ref===e.ref)if(at=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(at=!0);else return e.lanes=t.lanes,pn(t,e,i)}return wc(t,e,n,r,i)}function Wy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Zr,ft),ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Zr,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Zr,ft),ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Zr,ft),ft|=r;return tt(t,e,i,n),e.child}function qy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wc(t,e,n,r,i){var s=ut(n)?wr:Ye.current;return s=fi(e,s),si(e,i),n=Mh(t,e,n,r,s,i),r=bh(),t!==null&&!at?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pn(t,e,i)):(fe&&r&&Sh(e),e.flags|=1,tt(t,e,n,i),e.child)}function Pp(t,e,n,r,i){if(ut(n)){var s=!0;Pa(e)}else s=!1;if(si(e,i),e.stateNode===null)la(t,e),zy(e,n,r),_c(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=St(d):(d=ut(n)?wr:Ye.current,d=fi(e,d));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";y||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Ip(e,a,r,d),Cn=!1;var v=e.memoizedState;a.state=v,Va(e,r,a,i),u=e.memoizedState,l!==r||v!==u||lt.current||Cn?(typeof f=="function"&&(vc(e,n,f,r),u=e.memoizedState),(l=Cn||Tp(e,n,l,r,v,u,d))?(y||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Ey(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:kt(e.type,l),a.props=d,y=e.pendingProps,v=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=St(u):(u=ut(n)?wr:Ye.current,u=fi(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==y||v!==u)&&Ip(e,a,r,u),Cn=!1,v=e.memoizedState,a.state=v,Va(e,r,a,i);var x=e.memoizedState;l!==y||v!==x||lt.current||Cn?(typeof R=="function"&&(vc(e,n,R,r),x=e.memoizedState),(d=Cn||Tp(e,n,d,r,v,x,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Tc(t,e,n,r,s,i)}function Tc(t,e,n,r,i,s){qy(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&pp(e,n,!1),pn(t,e,s);r=e.stateNode,Bw.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=mi(e,t.child,null,s),e.child=mi(e,null,l,s)):tt(t,e,l,s),e.memoizedState=r.state,i&&pp(e,n,!0),e.child}function Ky(t){var e=t.stateNode;e.pendingContext?fp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fp(t,e.context,!1),Dh(t,e.containerInfo)}function xp(t,e,n,r,i){return pi(),Ch(i),e.flags|=256,tt(t,e,n,r),e.child}var Ic={dehydrated:null,treeContext:null,retryLane:0};function Sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gy(t,e,n){var r=e.pendingProps,i=me.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(me,i&1),t===null)return gc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=pl(a,r,0,null),t=yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sc(n),e.memoizedState=Ic,t):jh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $w(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Hn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Hn(l,s):(s=yr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Sc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ic,r}return s=t.child,t=s.sibling,r=Hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jh(t,e){return e=pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wo(t,e,n,r){return r!==null&&Ch(r),mi(e,t.child,null,n),t=jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $w(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Su(Error(L(422))),Wo(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pl({mode:"visible",children:r.children},i,0,null),s=yr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&mi(e,t.child,null,a),e.child.memoizedState=Sc(a),e.memoizedState=Ic,s);if(!(e.mode&1))return Wo(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(L(419)),r=Su(s,r,void 0),Wo(t,e,a,r)}if(l=(a&t.childLanes)!==0,at||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,fn(t,i),Dt(r,t,i,-1))}return qh(),r=Su(Error(L(421))),Wo(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=jn(i.nextSibling),mt=e,fe=!0,xt=null,t!==null&&(Et[wt++]=nn,Et[wt++]=rn,Et[wt++]=Tr,nn=t.id,rn=t.overflow,Tr=e),e=jh(e,r.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yc(t.return,e,n)}function Au(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&La(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Au(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&La(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Au(e,!0,n,null,s);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function la(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hw(t,e,n){switch(e.tag){case 3:Ky(e),pi();break;case 5:wy(e);break;case 1:ut(e.type)&&Pa(e);break;case 4:Dh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Da,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?Gy(t,e,n):(ue(me,me.current&1),t=pn(t,e,n),t!==null?t.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Qy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Wy(t,e,n)}return pn(t,e,n)}var Xy,Ac,Yy,Jy;Xy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ac=function(){};Yy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr(jt.current);var s=null;switch(n){case"input":i=Ku(t,i),r=Ku(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=Xu(t,i),r=Xu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ra)}Ju(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(ks.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(ks.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Jy=function(t,e,n,r){n!==r&&(e.flags|=4)};function ns(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ww(t,e,n){var r=e.pendingProps;switch(Ah(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ut(e.type)&&ka(),We(e),null;case 3:return r=e.stateNode,gi(),de(lt),de(Ye),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Oc(xt),xt=null))),Ac(t,e),We(e),null;case 5:Oh(e);var i=pr(js.current);if(n=e.type,t!==null&&e.stateNode!=null)Yy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return We(e),null}if(t=pr(jt.current),$o(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[bt]=e,r[Fs]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ls.length;i++)he(ls[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":jf(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":Bf(r,s),he("invalid",r)}Ju(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Bo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Bo(r.textContent,l,t),i=["children",""+l]):ks.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&he("scroll",r)}switch(n){case"input":Vo(r),zf(r,s,!0);break;case"textarea":Vo(r),$f(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ra)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[bt]=e,t[Fs]=r,Xy(t,e,!1,!1),e.stateNode=t;e:{switch(a=Zu(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ls.length;i++)he(ls[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":jf(t,r),i=Ku(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),he("invalid",t);break;case"textarea":Bf(t,r),i=Xu(t,r),he("invalid",t);break;default:i=r}Ju(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Pg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ps(t,u):typeof u=="number"&&Ps(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ks.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&ch(t,s,u,a))}switch(n){case"input":Vo(t),zf(t,r,!1);break;case"textarea":Vo(t),$f(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)Jy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=pr(js.current),pr(jt.current),$o(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(s=r.nodeValue!==n)&&(t=mt,t!==null))switch(t.tag){case 3:Bo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return We(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&pt!==null&&e.mode&1&&!(e.flags&128))gy(),pi(),e.flags|=98560,s=!1;else if(s=$o(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[bt]=e}else pi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else xt!==null&&(Oc(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?xe===0&&(xe=3):qh())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return gi(),Ac(t,e),t===null&&Ms(e.stateNode.containerInfo),We(e),null;case 10:return Ph(e.type._context),We(e),null;case 17:return ut(e.type)&&ka(),We(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)ns(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=La(t),a!==null){for(e.flags|=128,ns(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>vi&&(e.flags|=128,r=!0,ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=La(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!fe)return We(e),null}else 2*Se()-s.renderingStartTime>vi&&n!==1073741824&&(e.flags|=128,r=!0,ns(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return Wh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function qw(t,e){switch(Ah(e),e.tag){case 1:return ut(e.type)&&ka(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),de(lt),de(Ye),Vh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Oh(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));pi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return gi(),null;case 10:return Ph(e.type._context),null;case 22:case 23:return Wh(),null;case 24:return null;default:return null}}var qo=!1,Qe=!1,Kw=typeof WeakSet=="function"?WeakSet:Set,B=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Cc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Dp=!1;function Gw(t,e){if(uc=Sa,t=ry(),Ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,d=0,f=0,y=t,v=null;t:for(;;){for(var R;y!==n||i!==0&&y.nodeType!==3||(l=a+i),y!==s||r!==0&&y.nodeType!==3||(u=a+r),y.nodeType===3&&(a+=y.nodeValue.length),(R=y.firstChild)!==null;)v=y,y=R;for(;;){if(y===t)break t;if(v===n&&++d===i&&(l=a),v===s&&++f===r&&(u=a),(R=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cc={focusedElem:t,selectionRange:n},Sa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var O=x.memoizedProps,M=x.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?O:kt(e.type,O),M);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){_e(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return x=Dp,Dp=!1,x}function Es(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cc(e,n,s)}i=i.next}while(i!==r)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Zy(t){var e=t.alternate;e!==null&&(t.alternate=null,Zy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[Fs],delete e[fc],delete e[xw],delete e[Nw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ev(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ra));else if(r!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}function Pc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pc(t,e,n),t=t.sibling;t!==null;)Pc(t,e,n),t=t.sibling}var Le=null,Pt=!1;function In(t,e,n){for(n=n.child;n!==null;)tv(t,e,n),n=n.sibling}function tv(t,e,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(il,n)}catch{}switch(n.tag){case 5:Qe||Jr(n,e);case 6:var r=Le,i=Pt;Le=null,In(t,e,n),Le=r,Pt=i,Le!==null&&(Pt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Pt?(t=Le,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),Os(t)):vu(Le,n.stateNode));break;case 4:r=Le,i=Pt,Le=n.stateNode.containerInfo,Pt=!0,In(t,e,n),Le=r,Pt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Cc(n,e,a),i=i.next}while(i!==r)}In(t,e,n);break;case 1:if(!Qe&&(Jr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}In(t,e,n);break;case 21:In(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,In(t,e,n),Qe=r):In(t,e,n);break;default:In(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kw),e.forEach(function(r){var i=rT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Pt=!1;break e;case 3:Le=l.stateNode.containerInfo,Pt=!0;break e;case 4:Le=l.stateNode.containerInfo,Pt=!0;break e}l=l.return}if(Le===null)throw Error(L(160));tv(s,a,i),Le=null,Pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){_e(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nv(e,t),e=e.sibling}function nv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rt(e,t),Lt(t),r&4){try{Es(3,t,t.return),dl(3,t)}catch(O){_e(t,t.return,O)}try{Es(5,t,t.return)}catch(O){_e(t,t.return,O)}}break;case 1:Rt(e,t),Lt(t),r&512&&n!==null&&Jr(n,n.return);break;case 5:if(Rt(e,t),Lt(t),r&512&&n!==null&&Jr(n,n.return),t.flags&32){var i=t.stateNode;try{Ps(i,"")}catch(O){_e(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sg(i,s),Zu(l,a);var d=Zu(l,s);for(a=0;a<u.length;a+=2){var f=u[a],y=u[a+1];f==="style"?Pg(i,y):f==="dangerouslySetInnerHTML"?Rg(i,y):f==="children"?Ps(i,y):ch(i,f,y,d)}switch(l){case"input":Gu(i,s);break;case"textarea":Ag(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?ti(i,!!s.multiple,R,!1):v!==!!s.multiple&&(s.defaultValue!=null?ti(i,!!s.multiple,s.defaultValue,!0):ti(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fs]=s}catch(O){_e(t,t.return,O)}}break;case 6:if(Rt(e,t),Lt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){_e(t,t.return,O)}}break;case 3:if(Rt(e,t),Lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(O){_e(t,t.return,O)}break;case 4:Rt(e,t),Lt(t);break;case 13:Rt(e,t),Lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($h=Se())),r&4&&Vp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(d=Qe)||f,Rt(e,t),Qe=d):Rt(e,t),Lt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(y=B=f;B!==null;){switch(v=B,R=v.child,v.tag){case 0:case 11:case 14:case 15:Es(4,v,v.return);break;case 1:Jr(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(O){_e(r,n,O)}}break;case 5:Jr(v,v.return);break;case 22:if(v.memoizedState!==null){Mp(y);continue}}R!==null?(R.return=v,B=R):Mp(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{i=y.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=kg("display",a))}catch(O){_e(t,t.return,O)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(O){_e(t,t.return,O)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Rt(e,t),Lt(t),r&4&&Vp(t);break;case 21:break;default:Rt(e,t),Lt(t)}}function Lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ev(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ps(i,""),r.flags&=-33);var s=Op(t);Pc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Op(t);kc(t,l,a);break;default:throw Error(L(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qw(t,e,n){B=t,rv(t)}function rv(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||qo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Qe;l=qo;var d=Qe;if(qo=a,(Qe=u)&&!d)for(B=i;B!==null;)a=B,u=a.child,a.tag===22&&a.memoizedState!==null?bp(i):u!==null?(u.return=a,B=u):bp(i);for(;s!==null;)B=s,rv(s),s=s.sibling;B=i,qo=l,Qe=d}Lp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):Lp(t)}}function Lp(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&Os(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Qe||e.flags&512&&Rc(e)}catch(v){_e(e,e.return,v)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Mp(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function bp(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{Rc(e)}catch(u){_e(e,s,u)}break;case 5:var a=e.return;try{Rc(e)}catch(u){_e(e,a,u)}}}catch(u){_e(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var Xw=Math.ceil,Fa=vn.ReactCurrentDispatcher,zh=vn.ReactCurrentOwner,It=vn.ReactCurrentBatchConfig,re=0,Oe=null,Re=null,be=0,ft=0,Zr=tr(0),xe=0,Hs=null,Sr=0,fl=0,Bh=0,ws=null,ot=null,$h=0,vi=1/0,en=null,Ua=!1,xc=null,Bn=null,Ko=!1,Vn=null,ja=0,Ts=0,Nc=null,ua=-1,ca=0;function rt(){return re&6?Se():ua!==-1?ua:ua=Se()}function $n(t){return t.mode&1?re&2&&be!==0?be&-be:Ow.transition!==null?(ca===0&&(ca=zg()),ca):(t=oe,t!==0||(t=window.event,t=t===void 0?16:Gg(t.type)),t):1}function Dt(t,e,n,r){if(50<Ts)throw Ts=0,Nc=null,Error(L(185));eo(t,n,r),(!(re&2)||t!==Oe)&&(t===Oe&&(!(re&2)&&(fl|=n),xe===4&&kn(t,be)),ct(t,r),n===1&&re===0&&!(e.mode&1)&&(vi=Se()+500,ul&&nr()))}function ct(t,e){var n=t.callbackNode;OE(t,e);var r=Ia(t,t===Oe?be:0);if(r===0)n!==null&&qf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&qf(n),e===1)t.tag===0?Dw(Fp.bind(null,t)):fy(Fp.bind(null,t)),kw(function(){!(re&6)&&nr()}),n=null;else{switch(Bg(r)){case 1:n=mh;break;case 4:n=Ug;break;case 16:n=Ta;break;case 536870912:n=jg;break;default:n=Ta}n=hv(n,iv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function iv(t,e){if(ua=-1,ca=0,re&6)throw Error(L(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=Ia(t,t===Oe?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=za(t,r);else{e=r;var i=re;re|=2;var s=ov();(Oe!==t||be!==e)&&(en=null,vi=Se()+500,gr(t,e));do try{Zw();break}catch(l){sv(t,l)}while(!0);kh(),Fa.current=s,re=i,Re!==null?e=0:(Oe=null,be=0,e=xe)}if(e!==0){if(e===2&&(i=ic(t),i!==0&&(r=i,e=Dc(t,i))),e===1)throw n=Hs,gr(t,0),kn(t,r),ct(t,Se()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Yw(i)&&(e=za(t,r),e===2&&(s=ic(t),s!==0&&(r=s,e=Dc(t,s))),e===1))throw n=Hs,gr(t,0),kn(t,r),ct(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:cr(t,ot,en);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=$h+500-Se(),10<e)){if(Ia(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dc(cr.bind(null,t,ot,en),e);break}cr(t,ot,en);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Nt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xw(r/1960))-r,10<r){t.timeoutHandle=dc(cr.bind(null,t,ot,en),r);break}cr(t,ot,en);break;case 5:cr(t,ot,en);break;default:throw Error(L(329))}}}return ct(t,Se()),t.callbackNode===n?iv.bind(null,t):null}function Dc(t,e){var n=ws;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=za(t,e),t!==2&&(e=ot,ot=n,e!==null&&Oc(e)),t}function Oc(t){ot===null?ot=t:ot.push.apply(ot,t)}function Yw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~Bh,e&=~fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nt(e),r=1<<n;t[n]=-1,e&=~r}}function Fp(t){if(re&6)throw Error(L(327));oi();var e=Ia(t,0);if(!(e&1))return ct(t,Se()),null;var n=za(t,e);if(t.tag!==0&&n===2){var r=ic(t);r!==0&&(e=r,n=Dc(t,r))}if(n===1)throw n=Hs,gr(t,0),kn(t,e),ct(t,Se()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,ot,en),ct(t,Se()),null}function Hh(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(vi=Se()+500,ul&&nr())}}function Ar(t){Vn!==null&&Vn.tag===0&&!(re&6)&&oi();var e=re;re|=1;var n=It.transition,r=oe;try{if(It.transition=null,oe=1,t)return t()}finally{oe=r,It.transition=n,re=e,!(re&6)&&nr()}}function Wh(){ft=Zr.current,de(Zr)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Rw(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Ah(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ka();break;case 3:gi(),de(lt),de(Ye),Vh();break;case 5:Oh(r);break;case 4:gi();break;case 13:de(me);break;case 19:de(me);break;case 10:Ph(r.type._context);break;case 22:case 23:Wh()}n=n.return}if(Oe=t,Re=t=Hn(t.current,null),be=ft=e,xe=0,Hs=null,Bh=fl=Sr=0,ot=ws=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}fr=null}return t}function sv(t,e){do{var n=Re;try{if(kh(),oa.current=ba,Ma){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ma=!1}if(Ir=0,De=ke=ge=null,_s=!1,zs=0,zh.current=null,n===null||n.return===null){xe=1,Hs=e,Re=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=be,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Ap(a);if(R!==null){R.flags&=-257,Cp(R,a,l,s,e),R.mode&1&&Sp(s,d,e),e=R,u=d;var x=e.updateQueue;if(x===null){var O=new Set;O.add(u),e.updateQueue=O}else x.add(u);break e}else{if(!(e&1)){Sp(s,d,e),qh();break e}u=Error(L(426))}}else if(fe&&l.mode&1){var M=Ap(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Cp(M,a,l,s,e),Ch(yi(u,l));break e}}s=u=yi(u,l),xe!==4&&(xe=2),ws===null?ws=[s]:ws.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=By(s,u,e);vp(s,I);break e;case 1:l=u;var w=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Bn===null||!Bn.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=$y(s,l,e);vp(s,D);break e}}s=s.return}while(s!==null)}lv(n)}catch(b){e=b,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function ov(){var t=Fa.current;return Fa.current=ba,t===null?ba:t}function qh(){(xe===0||xe===3||xe===2)&&(xe=4),Oe===null||!(Sr&268435455)&&!(fl&268435455)||kn(Oe,be)}function za(t,e){var n=re;re|=2;var r=ov();(Oe!==t||be!==e)&&(en=null,gr(t,e));do try{Jw();break}catch(i){sv(t,i)}while(!0);if(kh(),re=n,Fa.current=r,Re!==null)throw Error(L(261));return Oe=null,be=0,xe}function Jw(){for(;Re!==null;)av(Re)}function Zw(){for(;Re!==null&&!SE();)av(Re)}function av(t){var e=cv(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?lv(t):Re=e,zh.current=null}function lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qw(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Re=null;return}}else if(n=Ww(n,e,ft),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);xe===0&&(xe=5)}function cr(t,e,n){var r=oe,i=It.transition;try{It.transition=null,oe=1,eT(t,e,n,r)}finally{It.transition=i,oe=r}return null}function eT(t,e,n,r){do oi();while(Vn!==null);if(re&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(VE(t,s),t===Oe&&(Re=Oe=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,hv(Ta,function(){return oi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var a=oe;oe=1;var l=re;re|=4,zh.current=null,Gw(t,n),nv(n,t),Ew(cc),Sa=!!uc,cc=uc=null,t.current=n,Qw(n),AE(),re=l,oe=a,It.transition=s}else t.current=n;if(Ko&&(Ko=!1,Vn=t,ja=i),s=t.pendingLanes,s===0&&(Bn=null),kE(n.stateNode),ct(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ua)throw Ua=!1,t=xc,xc=null,t;return ja&1&&t.tag!==0&&oi(),s=t.pendingLanes,s&1?t===Nc?Ts++:(Ts=0,Nc=t):Ts=0,nr(),null}function oi(){if(Vn!==null){var t=Bg(ja),e=It.transition,n=oe;try{if(It.transition=null,oe=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,ja=0,re&6)throw Error(L(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,a=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(B=d;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Es(8,f,s)}var y=f.child;if(y!==null)y.return=f,B=y;else for(;B!==null;){f=B;var v=f.sibling,R=f.return;if(Zy(f),f===d){B=null;break}if(v!==null){v.return=R,B=v;break}B=R}}}var x=s.alternate;if(x!==null){var O=x.child;if(O!==null){x.child=null;do{var M=O.sibling;O.sibling=null,O=M}while(O!==null)}}B=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,B=a;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Es(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var w=t.current;for(B=w;B!==null;){a=B;var A=a.child;if(a.subtreeFlags&2064&&A!==null)A.return=a,B=A;else e:for(a=w;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dl(9,l)}}catch(b){_e(l,l.return,b)}if(l===a){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(re=i,nr(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(il,t)}catch{}r=!0}return r}finally{oe=n,It.transition=e}}return!1}function Up(t,e,n){e=yi(n,e),e=By(t,e,1),t=zn(t,e,1),e=rt(),t!==null&&(eo(t,1,e),ct(t,e))}function _e(t,e,n){if(t.tag===3)Up(t,t,n);else for(;e!==null;){if(e.tag===3){Up(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){t=yi(n,t),t=$y(e,t,1),e=zn(e,t,1),t=rt(),e!==null&&(eo(e,1,t),ct(e,t));break}}e=e.return}}function tT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(be&n)===n&&(xe===4||xe===3&&(be&130023424)===be&&500>Se()-$h?gr(t,0):Bh|=n),ct(t,e)}function uv(t,e){e===0&&(t.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var n=rt();t=fn(t,e),t!==null&&(eo(t,e,n),ct(t,n))}function nT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uv(t,n)}function rT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),uv(t,n)}var cv;cv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)at=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return at=!1,Hw(t,e,n);at=!!(t.flags&131072)}else at=!1,fe&&e.flags&1048576&&py(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;la(t,e),t=e.pendingProps;var i=fi(e,Ye.current);si(e,n),i=Mh(null,e,r,t,i,n);var s=bh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,Pa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nh(e),i.updater=hl,e.stateNode=i,i._reactInternals=e,_c(e,r,t,n),e=Tc(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&Sh(e),tt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(la(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sT(r),t=kt(r,t),i){case 0:e=wc(null,e,r,t,n);break e;case 1:e=Pp(null,e,r,t,n);break e;case 11:e=Rp(null,e,r,t,n);break e;case 14:e=kp(null,e,r,kt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),wc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Pp(t,e,r,i,n);case 3:e:{if(Ky(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ey(t,e),Va(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=yi(Error(L(423)),e),e=xp(t,e,r,n,i);break e}else if(r!==i){i=yi(Error(L(424)),e),e=xp(t,e,r,n,i);break e}else for(pt=jn(e.stateNode.containerInfo.firstChild),mt=e,fe=!0,xt=null,n=vy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pi(),r===i){e=pn(t,e,n);break e}tt(t,e,r,n)}e=e.child}return e;case 5:return wy(e),t===null&&gc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,hc(r,i)?a=null:s!==null&&hc(r,s)&&(e.flags|=32),qy(t,e),tt(t,e,a,n),e.child;case 6:return t===null&&gc(e),null;case 13:return Gy(t,e,n);case 4:return Dh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=mi(e,null,r,n):tt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),Rp(t,e,r,i,n);case 7:return tt(t,e,e.pendingProps,n),e.child;case 8:return tt(t,e,e.pendingProps.children,n),e.child;case 12:return tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,ue(Da,r._currentValue),r._currentValue=a,s!==null)if(Ot(s.value,a)){if(s.children===i.children&&!lt.current){e=pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=un(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),yc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(L(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,si(e,n),i=St(i),r=r(i),e.flags|=1,tt(t,e,r,n),e.child;case 14:return r=e.type,i=kt(r,e.pendingProps),i=kt(r.type,i),kp(t,e,r,i,n);case 15:return Hy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kt(r,i),la(t,e),e.tag=1,ut(r)?(t=!0,Pa(e)):t=!1,si(e,n),zy(e,r,i),_c(e,r,i,n),Tc(null,e,r,!0,t,n);case 19:return Qy(t,e,n);case 22:return Wy(t,e,n)}throw Error(L(156,e.tag))};function hv(t,e){return Fg(t,e)}function iT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(t,e,n,r){return new iT(t,e,n,r)}function Kh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sT(t){if(typeof t=="function")return Kh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dh)return 11;if(t===fh)return 14}return 2}function Hn(t,e){var n=t.alternate;return n===null?(n=Tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ha(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")Kh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case $r:return yr(n.children,i,s,e);case hh:a=8,i|=8;break;case $u:return t=Tt(12,n,e,i|2),t.elementType=$u,t.lanes=s,t;case Hu:return t=Tt(13,n,e,i),t.elementType=Hu,t.lanes=s,t;case Wu:return t=Tt(19,n,e,i),t.elementType=Wu,t.lanes=s,t;case wg:return pl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _g:a=10;break e;case Eg:a=9;break e;case dh:a=11;break e;case fh:a=14;break e;case An:a=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Tt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yr(t,e,n,r){return t=Tt(7,t,r,e),t.lanes=n,t}function pl(t,e,n,r){return t=Tt(22,t,r,e),t.elementType=wg,t.lanes=n,t.stateNode={isHidden:!1},t}function Cu(t,e,n){return t=Tt(6,t,null,e),t.lanes=n,t}function Ru(t,e,n){return e=Tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=au(0),this.expirationTimes=au(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gh(t,e,n,r,i,s,a,l,u){return t=new oT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(s),t}function aT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dv(t){if(!t)return Xn;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(ut(n))return dy(t,n,e)}return e}function fv(t,e,n,r,i,s,a,l,u){return t=Gh(n,r,!0,t,i,s,a,l,u),t.context=dv(null),n=t.current,r=rt(),i=$n(n),s=un(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,eo(t,i,r),ct(t,r),t}function ml(t,e,n,r){var i=e.current,s=rt(),a=$n(i);return n=dv(n),e.context===null?e.context=n:e.pendingContext=n,e=un(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,a),t!==null&&(Dt(t,i,a,s),sa(t,i,a)),a}function Ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qh(t,e){jp(t,e),(t=t.alternate)&&jp(t,e)}function lT(){return null}var pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xh(t){this._internalRoot=t}gl.prototype.render=Xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));ml(t,e,null,null)};gl.prototype.unmount=Xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ar(function(){ml(null,t,null,null)}),e[dn]=null}};function gl(t){this._internalRoot=t}gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rn.length&&e!==0&&e<Rn[n].priority;n++);Rn.splice(n,0,t),n===0&&Kg(t)}};function Yh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function uT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Ba(a);s.call(d)}}var a=fv(e,r,t,0,null,!1,!1,"",zp);return t._reactRootContainer=a,t[dn]=a.current,Ms(t.nodeType===8?t.parentNode:t),Ar(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ba(u);l.call(d)}}var u=Gh(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=u,t[dn]=u.current,Ms(t.nodeType===8?t.parentNode:t),Ar(function(){ml(e,u,n,r)}),u}function vl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=Ba(a);l.call(u)}}ml(e,a,t,i)}else a=uT(n,e,t,i,r);return Ba(a)}$g=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=as(e.pendingLanes);n!==0&&(gh(e,n|1),ct(e,Se()),!(re&6)&&(vi=Se()+500,nr()))}break;case 13:Ar(function(){var r=fn(t,1);if(r!==null){var i=rt();Dt(r,t,1,i)}}),Qh(t,1)}};yh=function(t){if(t.tag===13){var e=fn(t,134217728);if(e!==null){var n=rt();Dt(e,t,134217728,n)}Qh(t,134217728)}};Hg=function(t){if(t.tag===13){var e=$n(t),n=fn(t,e);if(n!==null){var r=rt();Dt(n,t,e,r)}Qh(t,e)}};Wg=function(){return oe};qg=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};tc=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ll(r);if(!i)throw Error(L(90));Ig(r),Gu(r,i)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};Dg=Hh;Og=Ar;var cT={usingClientEntryPoint:!1,Events:[no,Kr,ll,xg,Ng,Hh]},rs={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hT={bundleType:rs.bundleType,version:rs.version,rendererPackageName:rs.rendererPackageName,rendererConfig:rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Mg(t),t===null?null:t.stateNode},findFiberByHostInstance:rs.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{il=Go.inject(hT),Ut=Go}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yh(e))throw Error(L(200));return aT(t,e,null,n)};yt.createRoot=function(t,e){if(!Yh(t))throw Error(L(299));var n=!1,r="",i=pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gh(t,1,!1,null,null,n,!1,r,i),t[dn]=e.current,Ms(t.nodeType===8?t.parentNode:t),new Xh(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=Mg(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return Ar(t)};yt.hydrate=function(t,e,n){if(!yl(e))throw Error(L(200));return vl(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!Yh(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=pv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=fv(e,null,t,1,n??null,i,!1,s,a),t[dn]=e.current,Ms(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new gl(e)};yt.render=function(t,e,n){if(!yl(e))throw Error(L(200));return vl(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!yl(t))throw Error(L(40));return t._reactRootContainer?(Ar(function(){vl(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};yt.unstable_batchedUpdates=Hh;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return vl(t,e,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(t){console.error(t)}}mv(),mg.exports=yt;var dT=mg.exports,Bp=dT;zu.createRoot=Bp.createRoot,zu.hydrateRoot=Bp.hydrateRoot;var $p={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},yv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let v=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(v=64)),r.push(n[f],n[y],n[v],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||y==null)throw new pT;const v=s<<2|l>>4;if(r.push(v),d!==64){const R=l<<4&240|d>>2;if(r.push(R),y!==64){const x=d<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mT=function(t){const e=gv(t);return yv.encodeByteArray(e,!0)},$a=function(t){return mT(t).replace(/\./g,"")},vv=function(t){try{return yv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=()=>gT().__FIREBASE_DEFAULTS__,vT=()=>{if(typeof process>"u"||typeof $p>"u")return;const t=$p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_T=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vv(t[1]);return e&&JSON.parse(e)},_l=()=>{try{return yT()||vT()||_T()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_v=t=>{var e,n;return(n=(e=_l())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ET=t=>{const e=_v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ev=()=>{var t;return(t=_l())===null||t===void 0?void 0:t.config},wv=t=>{var e;return(e=_l())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$a(JSON.stringify(n)),$a(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function ST(){var t;const e=(t=_l())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function RT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kT(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PT(){return!ST()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xT(){try{return typeof indexedDB=="object"}catch{return!1}}function NT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DT,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?OT(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new _n(i,l,r)}}function OT(t,e){return t.replace(VT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VT=/\{\$([^}]+)}/g;function LT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Hp(s)&&Hp(a)){if(!Ha(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MT(t,e){const n=new bT(t,e);return n.subscribe.bind(n)}class bT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ku),i.error===void 0&&(i.error=ku),i.complete===void 0&&(i.complete=ku);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ku(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zT(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jT(t){return t===hr?void 0:t}function zT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const $T={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},HT=Z.INFO,WT={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},qT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jh{constructor(e){this.name=e,this._logLevel=HT,this._logHandler=qT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const KT=(t,e)=>e.some(n=>t instanceof n);let Wp,qp;function GT(){return Wp||(Wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QT(){return qp||(qp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tv=new WeakMap,Vc=new WeakMap,Iv=new WeakMap,Pu=new WeakMap,Zh=new WeakMap;function XT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Wn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Tv.set(n,t)}).catch(()=>{}),Zh.set(e,t),e}function YT(t){if(Vc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Vc.set(t,e)}let Lc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JT(t){Lc=t(Lc)}function ZT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xu(this),e,...n);return Iv.set(r,e.sort?e.sort():[e]),Wn(r)}:QT().includes(t)?function(...e){return t.apply(xu(this),e),Wn(Tv.get(this))}:function(...e){return Wn(t.apply(xu(this),e))}}function eI(t){return typeof t=="function"?ZT(t):(t instanceof IDBTransaction&&YT(t),KT(t,GT())?new Proxy(t,Lc):t)}function Wn(t){if(t instanceof IDBRequest)return XT(t);if(Pu.has(t))return Pu.get(t);const e=eI(t);return e!==t&&(Pu.set(t,e),Zh.set(e,t)),e}const xu=t=>Zh.get(t);function tI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Wn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Wn(a.result),u.oldVersion,u.newVersion,Wn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const nI=["get","getKey","getAll","getAllKeys","count"],rI=["put","add","delete","clear"],Nu=new Map;function Kp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nu.get(e))return Nu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nI.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return Nu.set(e,s),s}JT(t=>({...t,get:(e,n,r)=>Kp(e,n)||t.get(e,n,r),has:(e,n)=>!!Kp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mc="@firebase/app",Gp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Jh("@firebase/app"),oI="@firebase/app-compat",aI="@firebase/analytics-compat",lI="@firebase/analytics",uI="@firebase/app-check-compat",cI="@firebase/app-check",hI="@firebase/auth",dI="@firebase/auth-compat",fI="@firebase/database",pI="@firebase/data-connect",mI="@firebase/database-compat",gI="@firebase/functions",yI="@firebase/functions-compat",vI="@firebase/installations",_I="@firebase/installations-compat",EI="@firebase/messaging",wI="@firebase/messaging-compat",TI="@firebase/performance",II="@firebase/performance-compat",SI="@firebase/remote-config",AI="@firebase/remote-config-compat",CI="@firebase/storage",RI="@firebase/storage-compat",kI="@firebase/firestore",PI="@firebase/vertexai-preview",xI="@firebase/firestore-compat",NI="firebase",DI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="[DEFAULT]",OI={[Mc]:"fire-core",[oI]:"fire-core-compat",[lI]:"fire-analytics",[aI]:"fire-analytics-compat",[cI]:"fire-app-check",[uI]:"fire-app-check-compat",[hI]:"fire-auth",[dI]:"fire-auth-compat",[fI]:"fire-rtdb",[pI]:"fire-data-connect",[mI]:"fire-rtdb-compat",[gI]:"fire-fn",[yI]:"fire-fn-compat",[vI]:"fire-iid",[_I]:"fire-iid-compat",[EI]:"fire-fcm",[wI]:"fire-fcm-compat",[TI]:"fire-perf",[II]:"fire-perf-compat",[SI]:"fire-rc",[AI]:"fire-rc-compat",[CI]:"fire-gcs",[RI]:"fire-gcs-compat",[kI]:"fire-fst",[xI]:"fire-fst-compat",[PI]:"fire-vertex","fire-js":"fire-js",[NI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map,VI=new Map,Fc=new Map;function Qp(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(Fc.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,t);for(const n of Wa.values())Qp(n,t);for(const n of VI.values())Qp(n,t);return!0}function ed(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new io("app","Firebase",LI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=DI;function Sv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qn.create("bad-app-name",{appName:String(i)});if(n||(n=Ev()),!n)throw qn.create("no-options");const s=Wa.get(i);if(s){if(Ha(n,s.options)&&Ha(r,s.config))return s;throw qn.create("duplicate-app",{appName:i})}const a=new BT(i);for(const u of Fc.values())a.addComponent(u);const l=new MI(n,r,a);return Wa.set(i,l),l}function Av(t=bc){const e=Wa.get(t);if(!e&&t===bc&&Ev())return Sv();if(!e)throw qn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let i=(r=OI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}_i(new Cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="firebase-heartbeat-database",FI=1,Ws="firebase-heartbeat-store";let Du=null;function Cv(){return Du||(Du=tI(bI,FI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ws)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Du}async function UI(t){try{const n=(await Cv()).transaction(Ws),r=await n.objectStore(Ws).get(Rv(t));return await n.done,r}catch(e){if(e instanceof _n)mn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function Xp(t,e){try{const r=(await Cv()).transaction(Ws,"readwrite");await r.objectStore(Ws).put(e,Rv(t)),await r.done}catch(n){if(n instanceof _n)mn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function Rv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=1024,zI=30*24*60*60*1e3;class BI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=zI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yp(),{heartbeatsToSend:r,unsentEntries:i}=$I(this._heartbeatsCache.heartbeats),s=$a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return mn.warn(n),""}}}function Yp(){return new Date().toISOString().substring(0,10)}function $I(t,e=jI){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Jp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?NT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jp(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){_i(new Cr("platform-logger",e=>new iI(e),"PRIVATE")),_i(new Cr("heartbeat",e=>new BI(e),"PRIVATE")),Kn(Mc,Gp,t),Kn(Mc,Gp,"esm2017"),Kn("fire-js","")}WI("");var qI="firebase",KI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(qI,KI,"app");function td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GI=kv,Pv=new io("auth","Firebase",kv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Jh("@firebase/auth");function QI(t,...e){qa.logLevel<=Z.WARN&&qa.warn(`Auth (${xi}): ${t}`,...e)}function da(t,...e){qa.logLevel<=Z.ERROR&&qa.error(`Auth (${xi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw nd(t,...e)}function zt(t,...e){return nd(t,...e)}function xv(t,e,n){const r=Object.assign(Object.assign({},GI()),{[e]:n});return new io("auth","Firebase",r).create(e,{appName:t.name})}function Gn(t){return xv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Pv.create(t,...e)}function K(t,e,...n){if(!t)throw nd(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw da(e),new Error(e)}function gn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function XI(){return Zp()==="http:"||Zp()==="https:"}function Zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XI()||CT()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=IT()||RT()}get(){return YI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new oo(3e4,6e4);function Or(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,i={}){return Dv(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=so(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return AT()||(d.referrerPolicy="no-referrer"),Nv.fetch()(Ov(t,t.config.apiHost,n,l),d)})}async function Dv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZI),e);try{const i=new nS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Qo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qo(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Qo(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Qo(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw xv(t,f,d);Vt(t,f)}}catch(i){if(i instanceof _n)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function El(t,e,n,r,i={}){const s=await rr(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ov(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rd(t.config,i):`${t.config.apiScheme}://${i}`}function tS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),eS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}function em(t){return t!==void 0&&t.enterprise!==void 0}class rS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iS(t,e){return rr(t,"GET","/v2/recaptchaConfig",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function Vv(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oS(t,e=!1){const n=qt(t),r=await n.getIdToken(e),i=id(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Is(Ou(i.auth_time)),issuedAtTime:Is(Ou(i.iat)),expirationTime:Is(Ou(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ou(t){return Number(t)*1e3}function id(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const i=vv(n);return i?JSON.parse(i):(da("Failed to decode base64 JWT payload"),null)}catch(i){return da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function tm(t){const e=id(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&aS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Is(this.lastLoginAt),this.creationTime=Is(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qs(t,Vv(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Lv(s.providerUserInfo):[],l=cS(t.providerData,a),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function uS(t){const e=qt(t);await Ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lv(t){return t.map(e=>{var{providerId:n}=e,r=td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e){const n=await Dv(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=Ov(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Nv.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dS(t,e){return rr(t,"POST","/v2/accounts:revokeToken",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=tm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ai;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ai,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qs(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oS(this,e)}reload(){return uS(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await qs(this,sS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,d,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:D,isAnonymous:b,providerData:F,stsTokenManager:_}=n;K(A&&_,e,"internal-error");const m=ai.fromJSON(this.name,_);K(typeof A=="string",e,"internal-error"),Sn(y,e.name),Sn(v,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof b=="boolean",e,"internal-error"),Sn(R,e.name),Sn(x,e.name),Sn(O,e.name),Sn(M,e.name),Sn(I,e.name),Sn(w,e.name);const g=new an({uid:A,auth:e,email:v,emailVerified:D,displayName:y,isAnonymous:b,photoURL:x,phoneNumber:R,tenantId:O,stsTokenManager:m,createdAt:I,lastLoginAt:w});return F&&Array.isArray(F)&&(g.providerData=F.map(E=>Object.assign({},E))),M&&(g._redirectEventId=M),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new ai;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ka(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Lv(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ai;l.updateFromIdToken(r);const u=new an({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;function ln(t){gn(t instanceof Function,"Expected a class definition");let e=nm.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mv.type="NONE";const rm=Mv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e,n){return`firebase:${t}:${e}:${n}`}class li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new li(ln(rm),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||ln(rm);const a=fa(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(a);if(f){const y=an._fromJSON(e,f);d!==s&&(l=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new li(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new li(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bv(e))return"Blackberry";if($v(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||Uv(e))&&!e.includes("edge/"))return"Chrome";if(zv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bv(t=Je()){return/firefox\//i.test(t)}function Fv(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uv(t=Je()){return/crios\//i.test(t)}function jv(t=Je()){return/iemobile/i.test(t)}function zv(t=Je()){return/android/i.test(t)}function Bv(t=Je()){return/blackberry/i.test(t)}function $v(t=Je()){return/webos/i.test(t)}function sd(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fS(t=Je()){var e;return sd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pS(){return kT()&&document.documentMode===10}function Hv(t=Je()){return sd(t)||zv(t)||$v(t)||Bv(t)||/windows phone/i.test(t)||jv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(t,e=[]){let n;switch(t){case"Browser":n=im(Je());break;case"Worker":n=`${im(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gS(t,e={}){return rr(t,"GET","/v2/passwordPolicy",Or(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=6;class vS{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:yS,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new mS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vv(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Gn(this));const n=e?qt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gS(this),n=new vS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await li.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ni(t){return qt(t)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=MT(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ES(t){wl=t}function qv(t){return wl.loadJS(t)}function wS(){return wl.recaptchaEnterpriseScript}function TS(){return wl.gapiScript}function IS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SS="recaptcha-enterprise",AS="NO_RECAPTCHA";class CS{constructor(e){this.type=SS,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{iS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new rS(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;em(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(AS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&em(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=wS();u.length!==0&&(u+=l),qv(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function om(t,e,n,r=!1){const i=new CS(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function am(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await om(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await om(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t,e){const n=ed(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ha(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function kS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PS(t,e,n){const r=Ni(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Kv(e),{host:a,port:l}=xS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),NS()}function Kv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xS(t){const e=Kv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:lm(a)}}}function lm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}async function DS(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return El(t,"POST","/v1/accounts:signInWithPassword",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VS(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}async function LS(t,e){return El(t,"POST","/v1/accounts:signInWithEmailLink",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends od{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ks(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ks(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(e,n,"signInWithPassword",OS);case"emailLink":return VS(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(e,r,"signUpPassword",DS);case"emailLink":return LS(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e){return El(t,"POST","/v1/accounts:signInWithIdp",Or(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="http://localhost";class Rr extends od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=td(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Rr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:MS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FS(t){const e=us(cs(t)).link,n=e?us(cs(e)).deep_link_id:null,r=us(cs(t)).deep_link_id;return(r?us(cs(r)).link:null)||r||n||e||t}class ad{constructor(e){var n,r,i,s,a,l;const u=us(cs(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=bS((i=u.mode)!==null&&i!==void 0?i:null);K(d&&f&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=FS(e);try{return new ad(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Ks._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ad.parseLink(n);return K(r,"argument-error"),Ks._fromEmailAndCode(e,r.code,r.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ao{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ao{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ao{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),a=um(r);return new Ei({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=um(r);return new Ei({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends _n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ga.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ga(e,n,r,i)}}function Qv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ga._fromErrorAndOperation(t,s,e,r):s})}async function US(t,e,n=!1){const r=await qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ei._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Gn(r));const i="reauthenticate";try{const s=await qs(t,Qv(r,i,e,t),n);K(s.idToken,r,"internal-error");const a=id(s.idToken);K(a,r,"internal-error");const{sub:l}=a;return K(t.uid===l,r,"user-mismatch"),Ei._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e,n=!1){if(sn(t.app))return Promise.reject(Gn(t));const r="signIn",i=await Qv(t,r,e),s=await Ei._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zS(t,e){return Xv(Ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BS(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function $S(t,e,n){return sn(t.app)?Promise.reject(Gn(t)):zS(qt(t),Di.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&BS(t),r})}function HS(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function WS(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}function qS(t,e,n,r){return qt(t).onAuthStateChanged(e,n,r)}function KS(t){return qt(t).signOut()}const Qa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qa,"1"),this.storage.removeItem(Qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=1e3,QS=10;class Jv extends Yv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);pS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,QS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},GS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jv.type="LOCAL";const XS=Jv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv extends Yv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zv.type="SESSION";const e_=Zv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(n.origin,s)),u=await YS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=ld("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(y){const v=y;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function ZS(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function e1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function t1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function n1(){return t_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firebaseLocalStorageDb",r1=1,Xa="firebaseLocalStorage",r_="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Il(t,e){return t.transaction([Xa],e?"readwrite":"readonly").objectStore(Xa)}function i1(){const t=indexedDB.deleteDatabase(n_);return new lo(t).toPromise()}function zc(){const t=indexedDB.open(n_,r1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xa,{keyPath:r_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xa)?e(r):(r.close(),await i1(),e(await zc()))})})}async function cm(t,e,n){const r=Il(t,!0).put({[r_]:e,value:n});return new lo(r).toPromise()}async function s1(t,e){const n=Il(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function hm(t,e){const n=Il(t,!0).delete(e);return new lo(n).toPromise()}const o1=800,a1=3;class i_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>a1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tl._getInstance(n1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await e1(),!this.activeServiceWorker)return;this.sender=new JS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||t1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await cm(e,Qa,"1"),await hm(e,Qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>s1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Il(i,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i_.type="LOCAL";const l1=i_;new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(t,e){return e?ln(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function c1(t){return Xv(t.auth,new ud(t),t.bypassAuthState)}function h1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),jS(n,new ud(t),t.bypassAuthState)}async function d1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),US(n,new ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return c1;case"linkViaPopup":case"linkViaRedirect":return d1;case"reauthViaPopup":case"reauthViaRedirect":return h1;default:Vt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new oo(2e3,1e4);class ei extends s_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=ld();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,f1.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="pendingRedirect",pa=new Map;class m1 extends s_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pa.get(this.auth._key());if(!e){try{const r=await g1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pa.set(this.auth._key(),e)}return this.bypassAuthState||pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function g1(t,e){const n=_1(e),r=v1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function y1(t,e){pa.set(t._key(),e)}function v1(t){return ln(t._redirectPersistence)}function _1(t){return fa(p1,t.config.apiKey,t.name)}async function E1(t,e,n=!1){if(sn(t.app))return Promise.reject(Gn(t));const r=Ni(t),i=u1(r,e),a=await new m1(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=10*60*1e3;class T1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!I1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!o_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=w1&&this.cachedEventUids.clear(),this.cachedEventUids.has(dm(e))}saveEventToCache(e){this.cachedEventUids.add(dm(e)),this.lastProcessedEventTime=Date.now()}}function dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function o_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function I1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return o_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S1(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C1=/^https?/;async function R1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await S1(t);for(const n of e)try{if(k1(n))return}catch{}Vt(t,"unauthorized-domain")}function k1(t){const e=Uc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!C1.test(n))return!1;if(A1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=new oo(3e4,6e4);function fm(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function x1(t){return new Promise((e,n)=>{var r,i,s;function a(){fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fm(),n(zt(t,"network-request-failed"))},timeout:P1.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)a();else{const l=IS("iframefcb");return Bt()[l]=()=>{gapi.load?a():n(zt(t,"network-request-failed"))},qv(`${TS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ma=null,e})}let ma=null;function N1(t){return ma=ma||x1(t),ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new oo(5e3,15e3),O1="__/auth/iframe",V1="emulator/auth/iframe",L1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b1(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rd(e,V1):`https://${t.config.authDomain}/${O1}`,r={apiKey:e.apiKey,appName:t.name,v:xi},i=M1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${so(r).slice(1)}`}async function F1(t){const e=await N1(t),n=Bt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:b1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=zt(t,"network-request-failed"),l=Bt().setTimeout(()=>{s(a)},D1.get());function u(){Bt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j1=500,z1=600,B1="_blank",$1="http://localhost";class pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function H1(t,e,n,r=j1,i=z1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},U1),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Je().toLowerCase();n&&(l=Uv(d)?B1:n),bv(d)&&(e=e||$1,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[R,x])=>`${v}${R}=${x},`,"");if(fS(d)&&l!=="_self")return W1(e||"",l),new pm(null);const y=window.open(e||"",l,f);K(y,t,"popup-blocked");try{y.focus()}catch{}return new pm(y)}function W1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1="__/auth/handler",K1="emulator/auth/handler",G1=encodeURIComponent("fac");async function mm(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xi,eventId:i};if(e instanceof Gv){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",LT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))a[f]=y}if(e instanceof ao){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${G1}=${encodeURIComponent(u)}`:"";return`${Q1(t)}?${so(l).slice(1)}${d}`}function Q1({config:t}){return t.emulator?rd(t,K1):`https://${t.authDomain}/${q1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="webStorageSupport";class X1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e_,this._completeRedirectFn=E1,this._overrideRedirectResult=y1}async _openPopup(e,n,r,i){var s;gn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await mm(e,n,r,Uc(),i);return H1(e,a,ld())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mm(e,n,r,Uc(),i);return ZS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await F1(e),r=new T1(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vu,{type:Vu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vu];a!==void 0&&n(!!a),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hv()||Fv()||sd()}}const Y1=X1;var gm="@firebase/auth",ym="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eA(t){_i(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wv(t)},d=new _S(r,i,s,u);return kS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Cr("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new J1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(gm,ym,Z1(t)),Kn(gm,ym,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=5*60,nA=wv("authIdTokenMaxAge")||tA;let vm=null;const rA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nA)return;const i=n==null?void 0:n.token;vm!==i&&(vm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iA(t=Av()){const e=ed(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RS(t,{popupRedirectResolver:Y1,persistence:[l1,XS,e_]}),r=wv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=rA(s.toString());WS(n,a,()=>a(n.currentUser)),HS(n,l=>a(l))}}const i=_v("auth");return i&&PS(n,`http://${i}`),n}function sA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ES({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",sA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eA("Browser");var _m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var vr,a_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function g(){}g.prototype=m.prototype,_.D=m.prototype,_.prototype=new g,_.prototype.constructor=_,_.C=function(E,S,k){for(var T=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)T[_t-2]=arguments[_t];return m.prototype[S].apply(E,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,g){g||(g=0);var E=Array(16);if(typeof m=="string")for(var S=0;16>S;++S)E[S]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(S=0;16>S;++S)E[S]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=_.g[0],g=_.g[1],S=_.g[2];var k=_.g[3],T=m+(k^g&(S^k))+E[0]+3614090360&4294967295;m=g+(T<<7&4294967295|T>>>25),T=k+(S^m&(g^S))+E[1]+3905402710&4294967295,k=m+(T<<12&4294967295|T>>>20),T=S+(g^k&(m^g))+E[2]+606105819&4294967295,S=k+(T<<17&4294967295|T>>>15),T=g+(m^S&(k^m))+E[3]+3250441966&4294967295,g=S+(T<<22&4294967295|T>>>10),T=m+(k^g&(S^k))+E[4]+4118548399&4294967295,m=g+(T<<7&4294967295|T>>>25),T=k+(S^m&(g^S))+E[5]+1200080426&4294967295,k=m+(T<<12&4294967295|T>>>20),T=S+(g^k&(m^g))+E[6]+2821735955&4294967295,S=k+(T<<17&4294967295|T>>>15),T=g+(m^S&(k^m))+E[7]+4249261313&4294967295,g=S+(T<<22&4294967295|T>>>10),T=m+(k^g&(S^k))+E[8]+1770035416&4294967295,m=g+(T<<7&4294967295|T>>>25),T=k+(S^m&(g^S))+E[9]+2336552879&4294967295,k=m+(T<<12&4294967295|T>>>20),T=S+(g^k&(m^g))+E[10]+4294925233&4294967295,S=k+(T<<17&4294967295|T>>>15),T=g+(m^S&(k^m))+E[11]+2304563134&4294967295,g=S+(T<<22&4294967295|T>>>10),T=m+(k^g&(S^k))+E[12]+1804603682&4294967295,m=g+(T<<7&4294967295|T>>>25),T=k+(S^m&(g^S))+E[13]+4254626195&4294967295,k=m+(T<<12&4294967295|T>>>20),T=S+(g^k&(m^g))+E[14]+2792965006&4294967295,S=k+(T<<17&4294967295|T>>>15),T=g+(m^S&(k^m))+E[15]+1236535329&4294967295,g=S+(T<<22&4294967295|T>>>10),T=m+(S^k&(g^S))+E[1]+4129170786&4294967295,m=g+(T<<5&4294967295|T>>>27),T=k+(g^S&(m^g))+E[6]+3225465664&4294967295,k=m+(T<<9&4294967295|T>>>23),T=S+(m^g&(k^m))+E[11]+643717713&4294967295,S=k+(T<<14&4294967295|T>>>18),T=g+(k^m&(S^k))+E[0]+3921069994&4294967295,g=S+(T<<20&4294967295|T>>>12),T=m+(S^k&(g^S))+E[5]+3593408605&4294967295,m=g+(T<<5&4294967295|T>>>27),T=k+(g^S&(m^g))+E[10]+38016083&4294967295,k=m+(T<<9&4294967295|T>>>23),T=S+(m^g&(k^m))+E[15]+3634488961&4294967295,S=k+(T<<14&4294967295|T>>>18),T=g+(k^m&(S^k))+E[4]+3889429448&4294967295,g=S+(T<<20&4294967295|T>>>12),T=m+(S^k&(g^S))+E[9]+568446438&4294967295,m=g+(T<<5&4294967295|T>>>27),T=k+(g^S&(m^g))+E[14]+3275163606&4294967295,k=m+(T<<9&4294967295|T>>>23),T=S+(m^g&(k^m))+E[3]+4107603335&4294967295,S=k+(T<<14&4294967295|T>>>18),T=g+(k^m&(S^k))+E[8]+1163531501&4294967295,g=S+(T<<20&4294967295|T>>>12),T=m+(S^k&(g^S))+E[13]+2850285829&4294967295,m=g+(T<<5&4294967295|T>>>27),T=k+(g^S&(m^g))+E[2]+4243563512&4294967295,k=m+(T<<9&4294967295|T>>>23),T=S+(m^g&(k^m))+E[7]+1735328473&4294967295,S=k+(T<<14&4294967295|T>>>18),T=g+(k^m&(S^k))+E[12]+2368359562&4294967295,g=S+(T<<20&4294967295|T>>>12),T=m+(g^S^k)+E[5]+4294588738&4294967295,m=g+(T<<4&4294967295|T>>>28),T=k+(m^g^S)+E[8]+2272392833&4294967295,k=m+(T<<11&4294967295|T>>>21),T=S+(k^m^g)+E[11]+1839030562&4294967295,S=k+(T<<16&4294967295|T>>>16),T=g+(S^k^m)+E[14]+4259657740&4294967295,g=S+(T<<23&4294967295|T>>>9),T=m+(g^S^k)+E[1]+2763975236&4294967295,m=g+(T<<4&4294967295|T>>>28),T=k+(m^g^S)+E[4]+1272893353&4294967295,k=m+(T<<11&4294967295|T>>>21),T=S+(k^m^g)+E[7]+4139469664&4294967295,S=k+(T<<16&4294967295|T>>>16),T=g+(S^k^m)+E[10]+3200236656&4294967295,g=S+(T<<23&4294967295|T>>>9),T=m+(g^S^k)+E[13]+681279174&4294967295,m=g+(T<<4&4294967295|T>>>28),T=k+(m^g^S)+E[0]+3936430074&4294967295,k=m+(T<<11&4294967295|T>>>21),T=S+(k^m^g)+E[3]+3572445317&4294967295,S=k+(T<<16&4294967295|T>>>16),T=g+(S^k^m)+E[6]+76029189&4294967295,g=S+(T<<23&4294967295|T>>>9),T=m+(g^S^k)+E[9]+3654602809&4294967295,m=g+(T<<4&4294967295|T>>>28),T=k+(m^g^S)+E[12]+3873151461&4294967295,k=m+(T<<11&4294967295|T>>>21),T=S+(k^m^g)+E[15]+530742520&4294967295,S=k+(T<<16&4294967295|T>>>16),T=g+(S^k^m)+E[2]+3299628645&4294967295,g=S+(T<<23&4294967295|T>>>9),T=m+(S^(g|~k))+E[0]+4096336452&4294967295,m=g+(T<<6&4294967295|T>>>26),T=k+(g^(m|~S))+E[7]+1126891415&4294967295,k=m+(T<<10&4294967295|T>>>22),T=S+(m^(k|~g))+E[14]+2878612391&4294967295,S=k+(T<<15&4294967295|T>>>17),T=g+(k^(S|~m))+E[5]+4237533241&4294967295,g=S+(T<<21&4294967295|T>>>11),T=m+(S^(g|~k))+E[12]+1700485571&4294967295,m=g+(T<<6&4294967295|T>>>26),T=k+(g^(m|~S))+E[3]+2399980690&4294967295,k=m+(T<<10&4294967295|T>>>22),T=S+(m^(k|~g))+E[10]+4293915773&4294967295,S=k+(T<<15&4294967295|T>>>17),T=g+(k^(S|~m))+E[1]+2240044497&4294967295,g=S+(T<<21&4294967295|T>>>11),T=m+(S^(g|~k))+E[8]+1873313359&4294967295,m=g+(T<<6&4294967295|T>>>26),T=k+(g^(m|~S))+E[15]+4264355552&4294967295,k=m+(T<<10&4294967295|T>>>22),T=S+(m^(k|~g))+E[6]+2734768916&4294967295,S=k+(T<<15&4294967295|T>>>17),T=g+(k^(S|~m))+E[13]+1309151649&4294967295,g=S+(T<<21&4294967295|T>>>11),T=m+(S^(g|~k))+E[4]+4149444226&4294967295,m=g+(T<<6&4294967295|T>>>26),T=k+(g^(m|~S))+E[11]+3174756917&4294967295,k=m+(T<<10&4294967295|T>>>22),T=S+(m^(k|~g))+E[2]+718787259&4294967295,S=k+(T<<15&4294967295|T>>>17),T=g+(k^(S|~m))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+k&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var g=m-this.blockSize,E=this.B,S=this.h,k=0;k<m;){if(S==0)for(;k<=g;)i(this,_,k),k+=this.blockSize;if(typeof _=="string"){for(;k<m;)if(E[S++]=_.charCodeAt(k++),S==this.blockSize){i(this,E),S=0;break}}else for(;k<m;)if(E[S++]=_[k++],S==this.blockSize){i(this,E),S=0;break}}this.h=S,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var g=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=g&255,g/=256;for(this.u(_),_=Array(16),m=g=0;4>m;++m)for(var E=0;32>E;E+=8)_[g++]=this.g[m]>>>E&255;return _};function s(_,m){var g=l;return Object.prototype.hasOwnProperty.call(g,_)?g[_]:g[_]=m(_)}function a(_,m){this.h=m;for(var g=[],E=!0,S=_.length-1;0<=S;S--){var k=_[S]|0;E&&k==m||(g[S]=k,E=!1)}this.g=g}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new a([m|0],0>m?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return M(d(-_));for(var m=[],g=1,E=0;_>=g;E++)m[E]=_/g|0,g*=4294967296;return new a(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return M(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(m,8)),E=y,S=0;S<_.length;S+=8){var k=Math.min(8,_.length-S),T=parseInt(_.substring(S,S+k),m);8>k?(k=d(Math.pow(m,k)),E=E.j(k).add(d(T))):(E=E.j(g),E=E.add(d(T)))}return E}var y=u(0),v=u(1),R=u(16777216);t=a.prototype,t.m=function(){if(O(this))return-M(this).m();for(var _=0,m=1,g=0;g<this.g.length;g++){var E=this.i(g);_+=(0<=E?E:4294967296+E)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(x(this))return"0";if(O(this))return"-"+M(this).toString(_);for(var m=d(Math.pow(_,6)),g=this,E="";;){var S=D(g,m).g;g=I(g,S.j(m));var k=((0<g.g.length?g.g[0]:g.h)>>>0).toString(_);if(g=S,x(g))return k+E;for(;6>k.length;)k="0"+k;E=k+E}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function x(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function O(_){return _.h==-1}t.l=function(_){return _=I(this,_),O(_)?-1:x(_)?0:1};function M(_){for(var m=_.g.length,g=[],E=0;E<m;E++)g[E]=~_.g[E];return new a(g,~_.h).add(v)}t.abs=function(){return O(this)?M(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),g=[],E=0,S=0;S<=m;S++){var k=E+(this.i(S)&65535)+(_.i(S)&65535),T=(k>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);E=T>>>16,k&=65535,T&=65535,g[S]=T<<16|k}return new a(g,g[g.length-1]&-2147483648?-1:0)};function I(_,m){return _.add(M(m))}t.j=function(_){if(x(this)||x(_))return y;if(O(this))return O(_)?M(this).j(M(_)):M(M(this).j(_));if(O(_))return M(this.j(M(_)));if(0>this.l(R)&&0>_.l(R))return d(this.m()*_.m());for(var m=this.g.length+_.g.length,g=[],E=0;E<2*m;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var S=0;S<_.g.length;S++){var k=this.i(E)>>>16,T=this.i(E)&65535,_t=_.i(S)>>>16,ir=_.i(S)&65535;g[2*E+2*S]+=T*ir,w(g,2*E+2*S),g[2*E+2*S+1]+=k*ir,w(g,2*E+2*S+1),g[2*E+2*S+1]+=T*_t,w(g,2*E+2*S+1),g[2*E+2*S+2]+=k*_t,w(g,2*E+2*S+2)}for(E=0;E<m;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=m;E<2*m;E++)g[E]=0;return new a(g,0)};function w(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function A(_,m){this.g=_,this.h=m}function D(_,m){if(x(m))throw Error("division by zero");if(x(_))return new A(y,y);if(O(_))return m=D(M(_),m),new A(M(m.g),M(m.h));if(O(m))return m=D(_,M(m)),new A(M(m.g),m.h);if(30<_.g.length){if(O(_)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var g=v,E=m;0>=E.l(_);)g=b(g),E=b(E);var S=F(g,1),k=F(E,1);for(E=F(E,2),g=F(g,2);!x(E);){var T=k.add(E);0>=T.l(_)&&(S=S.add(g),k=T),E=F(E,1),g=F(g,1)}return m=I(_,S.j(m)),new A(S,m)}for(S=y;0<=_.l(m);){for(g=Math.max(1,Math.floor(_.m()/m.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),k=d(g),T=k.j(m);O(T)||0<T.l(_);)g-=E,k=d(g),T=k.j(m);x(k)&&(k=v),S=S.add(k),_=I(_,T)}return new A(S,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)&_.i(E);return new a(g,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)|_.i(E);return new a(g,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),g=[],E=0;E<m;E++)g[E]=this.i(E)^_.i(E);return new a(g,this.h^_.h)};function b(_){for(var m=_.g.length+1,g=[],E=0;E<m;E++)g[E]=_.i(E)<<1|_.i(E-1)>>>31;return new a(g,_.h)}function F(_,m){var g=m>>5;m%=32;for(var E=_.g.length-g,S=[],k=0;k<E;k++)S[k]=0<m?_.i(k+g)>>>m|_.i(k+g+1)<<32-m:_.i(k+g);return new a(S,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a_=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,vr=a}).apply(typeof _m<"u"?_m:typeof self<"u"?self:typeof window<"u"?window:{});var Xo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var l_,hs,u_,ga,Bc,c_,h_,d_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xo=="object"&&Xo];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in h))break e;h=h[P]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,P={next:function(){if(!p&&h<o.length){var N=h++;return{value:c(N,o[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function v(o,c,h){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,v.apply(null,arguments)}function R(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function x(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,P,N){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return c.prototype[P].apply(p,U)}}function O(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function M(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const P=o.length||0,N=p.length||0;o.length=P+N;for(let U=0;U<N;U++)o[P+U]=p[U]}else o.push(p)}}class I{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(o){return/^[\s\xa0]*$/.test(o)}function A(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function D(o){return D[" "](o),o}D[" "]=function(){};var b=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function _(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(h in p)o[h]=p[h];for(let N=0;N<g.length;N++)h=g[N],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function S(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function k(o){l.setTimeout(()=>{throw o},0)}function T(){var o=G;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class _t{constructor(){this.h=this.g=null}add(c,h){const p=ir.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ir=new I(()=>new Mi,o=>o.reset());class Mi{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,z=!1,G=new _t,X=()=>{const o=l.Promise.resolve(void 0);Kt=()=>{o.then(pe)}};var pe=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(h){k(h)}var c=ir;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Gt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Qt(o,c){if(Te.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(b){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Xt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Qt.aa.h.call(this)}}x(Qt,Te);var Xt={2:"touch",3:"pen",4:"mouse"};Qt.prototype.h=function(){Qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yt="closure_listenable_"+(1e6*Math.random()|0),l0=0;function u0(o,c,h,p,P){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=P,this.key=++l0,this.da=this.fa=!1}function po(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function mo(o){this.src=o,this.g={},this.h=0}mo.prototype.add=function(o,c,h,p,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var U=Vl(o,c,p,P);return-1<U?(c=o[U],h||(c.fa=!1)):(c=new u0(c,this.src,N,!!p,P),c.fa=h,o.push(c)),c};function Ol(o,c){var h=c.type;if(h in o.g){var p=o.g[h],P=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(p,P,1),N&&(po(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Vl(o,c,h,p){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==c&&N.capture==!!h&&N.ha==p)return P}return-1}var Ll="closure_lm_"+(1e6*Math.random()|0),Ml={};function Vd(o,c,h,p,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)Vd(o,c[N],h,p,P);return null}return h=bd(h),o&&o[Yt]?o.K(c,h,d(p)?!!p.capture:!1,P):c0(o,c,h,!1,p,P)}function c0(o,c,h,p,P,N){if(!c)throw Error("Invalid event type");var U=d(P)?!!P.capture:!!P,le=Fl(o);if(le||(o[Ll]=le=new mo(o)),h=le.add(c,h,p,U,N),h.proxy)return h;if(p=h0(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Gt||(P=U),P===void 0&&(P=!1),o.addEventListener(c.toString(),p,P);else if(o.attachEvent)o.attachEvent(Md(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function h0(){function o(h){return c.call(o.src,o.listener,h)}const c=d0;return o}function Ld(o,c,h,p,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)Ld(o,c[N],h,p,P);else p=d(p)?!!p.capture:!!p,h=bd(h),o&&o[Yt]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],h=Vl(N,h,p,P),-1<h&&(po(N[h]),Array.prototype.splice.call(N,h,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=Fl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Vl(c,h,p,P)),(h=-1<o?c[o]:null)&&bl(h))}function bl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Yt])Ol(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Md(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=Fl(c))?(Ol(h,o),h.h==0&&(h.src=null,c[Ll]=null)):po(o)}}}function Md(o){return o in Ml?Ml[o]:Ml[o]="on"+o}function d0(o,c){if(o.da)o=!0;else{c=new Qt(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&bl(o),o=h.call(p,c)}return o}function Fl(o){return o=o[Ll],o instanceof mo?o:null}var Ul="__closure_events_fn_"+(1e9*Math.random()>>>0);function bd(o){return typeof o=="function"?o:(o[Ul]||(o[Ul]=function(c){return o.handleEvent(c)}),o[Ul])}function ze(){ae.call(this),this.i=new mo(this),this.M=this,this.F=null}x(ze,ae),ze.prototype[Yt]=!0,ze.prototype.removeEventListener=function(o,c,h,p){Ld(this,o,c,h,p)};function Ze(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Te(c,o);else if(c instanceof Te)c.target=c.target||o;else{var P=c;c=new Te(p,o),E(c,P)}if(P=!0,h)for(var N=h.length-1;0<=N;N--){var U=c.g=h[N];P=go(U,p,!0,c)&&P}if(U=c.g=o,P=go(U,p,!0,c)&&P,P=go(U,p,!1,c)&&P,h)for(N=0;N<h.length;N++)U=c.g=h[N],P=go(U,p,!1,c)&&P}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)po(h[p]);delete o.g[c],o.h--}}this.F=null},ze.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},ze.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function go(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==h){var le=U.listener,Ve=U.ha||U.src;U.fa&&Ol(o.i,U),P=le.call(Ve,p)!==!1&&P}}return P&&!p.defaultPrevented}function Fd(o,c,h){if(typeof o=="function")h&&(o=v(o,h));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Ud(o){o.g=Fd(()=>{o.g=null,o.i&&(o.i=!1,Ud(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class f0 extends ae{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ud(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bi(o){ae.call(this),this.h=o,this.g={}}x(bi,ae);var jd=[];function zd(o){F(o.g,function(c,h){this.g.hasOwnProperty(h)&&bl(c)},o),o.g={}}bi.prototype.N=function(){bi.aa.N.call(this),zd(this)},bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jl=l.JSON.stringify,p0=l.JSON.parse,m0=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function zl(){}zl.prototype.h=null;function Bd(o){return o.h||(o.h=o.i())}function $d(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bl(){Te.call(this,"d")}x(Bl,Te);function $l(){Te.call(this,"c")}x($l,Te);var sr={},Hd=null;function yo(){return Hd=Hd||new ze}sr.La="serverreachability";function Wd(o){Te.call(this,sr.La,o)}x(Wd,Te);function Ui(o){const c=yo();Ze(c,new Wd(c))}sr.STAT_EVENT="statevent";function qd(o,c){Te.call(this,sr.STAT_EVENT,o),this.stat=c}x(qd,Te);function et(o){const c=yo();Ze(c,new qd(c,o))}sr.Ma="timingevent";function Kd(o,c){Te.call(this,sr.Ma,o),this.size=c}x(Kd,Te);function ji(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function zi(){this.g=!0}zi.prototype.xa=function(){this.g=!1};function g0(o,c,h,p,P,N){o.info(function(){if(o.g)if(N)for(var U="",le=N.split("&"),Ve=0;Ve<le.length;Ve++){var ie=le[Ve].split("=");if(1<ie.length){var Be=ie[0];ie=ie[1];var $e=Be.split("_");U=2<=$e.length&&$e[1]=="type"?U+(Be+"="+ie+"&"):U+(Be+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+h+`
`+U})}function y0(o,c,h,p,P,N,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+h+`
`+N+" "+U})}function Vr(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+_0(o,h)+(p?" "+p:"")})}function v0(o,c){o.info(function(){return"TIMEOUT: "+c})}zi.prototype.info=function(){};function _0(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return jl(h)}catch{return c}}var vo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hl;function _o(){}x(_o,zl),_o.prototype.g=function(){return new XMLHttpRequest},_o.prototype.i=function(){return{}},Hl=new _o;function En(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new bi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qd}function Qd(){this.i=null,this.g="",this.h=!1}var Xd={},Wl={};function ql(o,c,h){o.L=1,o.v=Io(Jt(c)),o.m=h,o.P=!0,Yd(o,null)}function Yd(o,c){o.F=Date.now(),Eo(o),o.A=Jt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),df(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Qd,o.g=xf(o.j,h?c:null,!o.m),0<o.O&&(o.M=new f0(v(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(jd[0]=P.toString()),P=jd);for(var N=0;N<P.length;N++){var U=Vd(h,P[N],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Ui(),g0(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const c=this.M;c&&Zt(o)==3?c.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const $e=Zt(this.g);var c=this.g.Ba();const br=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||_f(this.g)))){this.J||$e!=4||c==7||(c==8||0>=br?Ui(3):Ui(2)),Kl(this);var h=this.g.Z();this.X=h;t:if(Jd(this)){var p=_f(this.g);o="";var P=p.length,N=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Bi(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(N&&c==P-1)});p.length=0,this.h.g+=o,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=h==200,y0(this.i,this.u,this.A,this.l,this.R,$e,h),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Ve=this.g;if((le=Ve.g?Ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(le)){var ie=le;break t}}ie=null}if(h=ie)Vr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gl(this,h);else{this.o=!1,this.s=3,et(12),or(this),Bi(this);break e}}if(this.P){h=!0;let Ct;for(;!this.J&&this.C<U.length;)if(Ct=E0(this,U),Ct==Wl){$e==4&&(this.s=4,et(14),h=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Xd){this.s=4,et(15),Vr(this.i,this.l,U,"[Invalid Chunk]"),h=!1;break}else Vr(this.i,this.l,Ct,null),Gl(this,Ct);if(Jd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||U.length!=0||this.h.h||(this.s=1,et(16),h=!1),this.o=this.o&&h,!h)Vr(this.i,this.l,U,"[Invalid Chunked Response]"),or(this),Bi(this);else if(0<U.length&&!this.W){this.W=!0;var Be=this.j;Be.g==this&&Be.ba&&!Be.M&&(Be.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),eu(Be),Be.M=!0,et(11))}}else Vr(this.i,this.l,U,null),Gl(this,U);$e==4&&or(this),this.o&&!this.J&&($e==4?Cf(this.j,this):(this.o=!1,Eo(this)))}else b0(this.g),h==400&&0<U.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),or(this),Bi(this)}}}catch{}finally{}};function Jd(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function E0(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?Wl:(h=Number(c.substring(h,p)),isNaN(h)?Xd:(p+=1,p+h>c.length?Wl:(c=c.slice(p,p+h),o.C=p+h,c)))}En.prototype.cancel=function(){this.J=!0,or(this)};function Eo(o){o.S=Date.now()+o.I,Zd(o,o.I)}function Zd(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ji(v(o.ba,o),c)}function Kl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(v0(this.i,this.A),this.L!=2&&(Ui(),et(17)),or(this),this.s=2,Bi(this)):Zd(this,this.S-o)};function Bi(o){o.j.G==0||o.J||Cf(o.j,o)}function or(o){Kl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,zd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Gl(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Ql(h.h,o))){if(!o.K&&Ql(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Po(h),Ro(h);else break e;Zl(h),et(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=ji(v(h.Za,h),6e3));if(1>=nf(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else lr(h,11)}else if((o.K||h.g==o)&&Po(h),!w(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let ie=P[c];if(h.T=ie[0],ie=ie[1],h.G==2)if(ie[0]=="c"){h.K=ie[1],h.ia=ie[2];const Be=ie[3];Be!=null&&(h.la=Be,h.j.info("VER="+h.la));const $e=ie[4];$e!=null&&(h.Aa=$e,h.j.info("SVER="+h.Aa));const br=ie[5];br!=null&&typeof br=="number"&&0<br&&(p=1.5*br,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const Ct=o.g;if(Ct){const No=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var N=p.h;N.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Xl(N,N.h),N.h=null))}if(p.D){const tu=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;tu&&(p.ya=tu,ce(p.I,p.D,tu))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var U=o;if(p.qa=Pf(p,p.J?p.ia:null,p.W),U.K){rf(p.h,U);var le=U,Ve=p.L;Ve&&(le.I=Ve),le.B&&(Kl(le),Eo(le)),p.g=U}else Sf(p);0<h.i.length&&ko(h)}else ie[0]!="stop"&&ie[0]!="close"||lr(h,7);else h.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?lr(h,7):Jl(h):ie[0]!="noop"&&h.l&&h.l.ta(ie),h.v=0)}}Ui(4)}catch{}}var w0=class{constructor(o,c){this.g=o,this.map=c}};function ef(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tf(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nf(o){return o.h?1:o.g?o.g.size:0}function Ql(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Xl(o,c){o.g?o.g.add(c):o.h=c}function rf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}ef.prototype.cancel=function(){if(this.i=sf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return O(o.i)}function T0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function I0(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function of(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=I0(o),p=T0(o),P=p.length,N=0;N<P;N++)c.call(void 0,p[N],h&&h[N],o)}var af=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S0(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),P=null;if(0<=p){var N=o[h].substring(0,p);P=o[h].substring(p+1)}else N=o[h];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,wo(this,o.j),this.o=o.o,this.g=o.g,To(this,o.s),this.l=o.l;var c=o.i,h=new Wi;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),lf(this,h),this.m=o.m}else o&&(c=String(o).match(af))?(this.h=!1,wo(this,c[1]||"",!0),this.o=$i(c[2]||""),this.g=$i(c[3]||"",!0),To(this,c[4]),this.l=$i(c[5]||"",!0),lf(this,c[6]||"",!0),this.m=$i(c[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}ar.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Hi(c,uf,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Hi(c,uf,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Hi(h,h.charAt(0)=="/"?R0:C0,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Hi(h,P0)),o.join("")};function Jt(o){return new ar(o)}function wo(o,c,h){o.j=h?$i(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function To(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function lf(o,c,h){c instanceof Wi?(o.i=c,x0(o.i,o.h)):(h||(c=Hi(c,k0)),o.i=new Wi(c,o.h))}function ce(o,c,h){o.i.set(c,h)}function Io(o){return ce(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function $i(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Hi(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,A0),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function A0(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var uf=/[#\/\?@]/g,C0=/[#\?:]/g,R0=/[#\?]/g,k0=/[#\?@]/g,P0=/#/g;function Wi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function wn(o){o.g||(o.g=new Map,o.h=0,o.i&&S0(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Wi.prototype,t.add=function(o,c){wn(this),this.i=null,o=Lr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function cf(o,c){wn(o),c=Lr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function hf(o,c){return wn(o),c=Lr(o,c),o.g.has(c)}t.forEach=function(o,c){wn(this),this.g.forEach(function(h,p){h.forEach(function(P){o.call(c,P,p,this)},this)},this)},t.na=function(){wn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const P=o[p];for(let N=0;N<P.length;N++)h.push(c[p])}return h},t.V=function(o){wn(this);let c=[];if(typeof o=="string")hf(this,o)&&(c=c.concat(this.g.get(Lr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},t.set=function(o,c){return wn(this),this.i=null,o=Lr(this,o),hf(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function df(o,c,h){cf(o,c),0<h.length&&(o.i=null,o.g.set(Lr(o,c),O(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var P=N;U[p]!==""&&(P+="="+encodeURIComponent(String(U[p]))),o.push(P)}}return this.i=o.join("&")};function Lr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function x0(o,c){c&&!o.j&&(wn(o),o.i=null,o.g.forEach(function(h,p){var P=p.toLowerCase();p!=P&&(cf(this,p),df(this,P,h))},o)),o.j=c}function N0(o,c){const h=new zi;if(l.Image){const p=new Image;p.onload=R(Tn,h,"TestLoadImage: loaded",!0,c,p),p.onerror=R(Tn,h,"TestLoadImage: error",!1,c,p),p.onabort=R(Tn,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(Tn,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function D0(o,c){const h=new zi,p=new AbortController,P=setTimeout(()=>{p.abort(),Tn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(N=>{clearTimeout(P),N.ok?Tn(h,"TestPingServer: ok",!0,c):Tn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Tn(h,"TestPingServer: error",!1,c)})}function Tn(o,c,h,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(h)}catch{}}function O0(){this.g=new m0}function V0(o,c,h){const p=h||"";try{of(o,function(P,N){let U=P;d(P)&&(U=jl(P)),c.push(p+N+"="+encodeURIComponent(U))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function So(o){this.l=o.Ub||null,this.j=o.eb||!1}x(So,zl),So.prototype.g=function(){return new Ao(this.l,this.j)},So.prototype.i=function(o){return function(){return o}}({});function Ao(o,c){ze.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ao,ze),t=Ao.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Ki(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,qi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ki(this)),this.g&&(this.readyState=3,Ki(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ff(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ff(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?qi(this):Ki(this),this.readyState==3&&ff(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,qi(this))},t.Qa=function(o){this.g&&(this.response=o,qi(this))},t.ga=function(){this.g&&qi(this)};function qi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ki(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Ki(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ao.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function pf(o){let c="";return F(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function Yl(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=pf(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ce(o,c,h))}function ve(o){ze.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(ve,ze);var L0=/^https?$/i,M0=["POST","PUT"];t=ve.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hl.g(),this.v=this.o?Bd(this.o):Bd(Hl),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){mf(this,N);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)h.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())h.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(M0,c,void 0))||p||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of h)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vf(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){mf(this,N)}};function mf(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,gf(o),Co(o)}function gf(o){o.A||(o.A=!0,Ze(o,"complete"),Ze(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ze(this,"complete"),Ze(this,"abort"),Co(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Co(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?yf(this):this.bb())},t.bb=function(){yf(this)};function yf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Zt(o)!=4||o.Z()!=2)){if(o.u&&Zt(o)==4)Fd(o.Ea,0,o);else if(Ze(o,"readystatechange"),Zt(o)==4){o.h=!1;try{const U=o.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=U===0){var P=String(o.D).match(af)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!L0.test(P?P.toLowerCase():"")}h=p}if(h)Ze(o,"complete"),Ze(o,"success");else{o.m=6;try{var N=2<Zt(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",gf(o)}}finally{Co(o)}}}}function Co(o,c){if(o.g){vf(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Ze(o,"ready");try{h.onreadystatechange=p}catch{}}}function vf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function Zt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),p0(c)}};function _f(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function b0(o){const c={};o=(o.g&&2<=Zt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(w(o[p]))continue;var h=S(o[p]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const N=c[P]||[];c[P]=N,N.push(h)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gi(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ef(o){this.Aa=0,this.i=[],this.j=new zi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gi("baseRetryDelayMs",5e3,o),this.cb=Gi("retryDelaySeedMs",1e4,o),this.Wa=Gi("forwardChannelMaxRetries",2,o),this.wa=Gi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ef(o&&o.concurrentRequestLimit),this.Da=new O0,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ef.prototype,t.la=8,t.G=1,t.connect=function(o,c,h,p){et(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Pf(this,null,this.W),ko(this)};function Jl(o){if(wf(o),o.G==3){var c=o.U++,h=Jt(o.I);if(ce(h,"SID",o.K),ce(h,"RID",c),ce(h,"TYPE","terminate"),Qi(o,h),c=new En(o,o.j,c),c.L=2,c.v=Io(Jt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=xf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Eo(c)}kf(o)}function Ro(o){o.g&&(eu(o),o.g.cancel(),o.g=null)}function wf(o){Ro(o),o.u&&(l.clearTimeout(o.u),o.u=null),Po(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ko(o){if(!tf(o.h)&&!o.s){o.s=!0;var c=o.Ga;Kt||X(),z||(Kt(),z=!0),G.add(c,o),o.B=0}}function F0(o,c){return nf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ji(v(o.Ga,o,c),Rf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new En(this,this.j,o);let N=this.o;if(this.S&&(N?(N=m(N),E(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=If(this,P,c),h=Jt(this.I),ce(h,"RID",o),ce(h,"CVER",22),this.D&&ce(h,"X-HTTP-Session-Id",this.D),Qi(this,h),N&&(this.O?c="headers="+encodeURIComponent(String(pf(N)))+"&"+c:this.m&&Yl(h,this.m,N)),Xl(this.h,P),this.Ua&&ce(h,"TYPE","init"),this.P?(ce(h,"$req",c),ce(h,"SID","null"),P.T=!0,ql(P,h,null)):ql(P,h,c),this.G=2}}else this.G==3&&(o?Tf(this,o):this.i.length==0||tf(this.h)||Tf(this))};function Tf(o,c){var h;c?h=c.l:h=o.U++;const p=Jt(o.I);ce(p,"SID",o.K),ce(p,"RID",h),ce(p,"AID",o.T),Qi(o,p),o.m&&o.o&&Yl(p,o.m,o.o),h=new En(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=If(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Xl(o.h,h),ql(h,p,c)}function Qi(o,c){o.H&&F(o.H,function(h,p){ce(c,p,h)}),o.l&&of({},function(h,p){ce(c,p,h)})}function If(o,c,h){h=Math.min(o.i.length,h);var p=o.l?v(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const U=["count="+h];N==-1?0<h?(N=P[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let le=!0;for(let Ve=0;Ve<h;Ve++){let ie=P[Ve].g;const Be=P[Ve].map;if(ie-=N,0>ie)N=Math.max(0,P[Ve].g-100),le=!1;else try{V0(Be,U,"req"+ie+"_")}catch{p&&p(Be)}}if(le){p=U.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function Sf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Kt||X(),z||(Kt(),z=!0),G.add(c,o),o.v=0}}function Zl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ji(v(o.Fa,o),Rf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Af(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ji(v(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),Ro(this),Af(this))};function eu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Af(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Jt(o.qa);ce(c,"RID","rpc"),ce(c,"SID",o.K),ce(c,"AID",o.T),ce(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ce(c,"TO",o.ja),ce(c,"TYPE","xmlhttp"),Qi(o,c),o.m&&o.o&&Yl(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Io(Jt(c)),h.m=null,h.P=!0,Yd(h,o)}t.Za=function(){this.C!=null&&(this.C=null,Ro(this),Zl(this),et(19))};function Po(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Cf(o,c){var h=null;if(o.g==c){Po(o),eu(o),o.g=null;var p=2}else if(Ql(o.h,c))h=c.D,rf(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;p=yo(),Ze(p,new Kd(p,h)),ko(o)}else Sf(o);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&F0(o,c)||p==2&&Zl(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),P){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function Rf(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function lr(o,c){if(o.j.info("Error code "+c),c==2){var h=v(o.fb,o),p=o.Xa;const P=!p;p=new ar(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wo(p,"https"),Io(p),P?N0(p.toString(),h):D0(p.toString(),h)}else et(2);o.G=0,o.l&&o.l.sa(c),kf(o),wf(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function kf(o){if(o.G=0,o.ka=[],o.l){const c=sf(o.h);(c.length!=0||o.i.length!=0)&&(M(o.ka,c),M(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function Pf(o,c,h){var p=h instanceof ar?Jt(h):new ar(h);if(p.g!="")c&&(p.g=c+"."+p.g),To(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new ar(null);p&&wo(N,p),c&&(N.g=c),P&&To(N,P),h&&(N.l=h),p=N}return h=o.D,c=o.ya,h&&c&&ce(p,h,c),ce(p,"VER",o.la),Qi(o,p),p}function xf(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ve(new So({eb:h})):new ve(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nf(){}t=Nf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xo(){}xo.prototype.g=function(o,c){return new dt(o,c)};function dt(o,c){ze.call(this),this.g=new Ef(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!w(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Mr(this)}x(dt,ze),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Jl(this.g)},dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=jl(o),o=h);c.i.push(new w0(c.Ya++,o)),c.G==3&&ko(c)},dt.prototype.N=function(){this.g.l=null,delete this.j,Jl(this.g),delete this.g,dt.aa.N.call(this)};function Df(o){Bl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}x(Df,Bl);function Of(){$l.call(this),this.status=1}x(Of,$l);function Mr(o){this.g=o}x(Mr,Nf),Mr.prototype.ua=function(){Ze(this.g,"a")},Mr.prototype.ta=function(o){Ze(this.g,new Df(o))},Mr.prototype.sa=function(o){Ze(this.g,new Of)},Mr.prototype.ra=function(){Ze(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,d_=function(){return new xo},h_=function(){return yo()},c_=sr,Bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vo.NO_ERROR=0,vo.TIMEOUT=8,vo.HTTP_ERROR=6,ga=vo,Gd.COMPLETE="complete",u_=Gd,$d.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",ze.prototype.listen=ze.prototype.K,hs=$d,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,l_=ve}).apply(typeof Xo<"u"?Xo:typeof self<"u"?self:typeof window<"u"?window:{});const Em="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Jh("@firebase/firestore");function is(){return kr.logLevel}function $(t,...e){if(kr.logLevel<=Z.DEBUG){const n=e.map(cd);kr.debug(`Firestore (${Oi}): ${t}`,...n)}}function yn(t,...e){if(kr.logLevel<=Z.ERROR){const n=e.map(cd);kr.error(`Firestore (${Oi}): ${t}`,...n)}}function wi(t,...e){if(kr.logLevel<=Z.WARN){const n=e.map(cd);kr.warn(`Firestore (${Oi}): ${t}`,...n)}}function cd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+t;throw yn(e),new Error(e)}function we(t,e){t||Y()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class aA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lA{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string"),new f_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string"),new Ge(e)}}class uA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){we(this.o===void 0);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string"),this.R=n.token,new hA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Ti(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ht(0,0))}static max(){return new Q(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Gs{construct(e,n,r){return new Ee(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const pA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Gs{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return pA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Ee.fromString(e))}static fromName(e){return new q(Ee.fromString(e).popFirst(5))}static empty(){return new q(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Ee(e.slice()))}}function mA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ht(n+1,0):new ht(n,r));return new Yn(i,q.empty(),e)}function gA(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(Q.min(),q.empty(),-1)}static max(){return new Yn(Q.max(),q.empty(),-1)}}function yA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _A{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==vA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function EA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function uo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dd.oe=-1;function Sl(t){return t==null}function $c(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Al(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yo(this.root,e,this.comparator,!0)}}class Yo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Me.RED,this.left=i??Me.EMPTY,this.right=s??Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Me(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tm(this.data.getIterator())}getIteratorFrom(e){return new Tm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Fe(this.comparator);return n.data=e,n}}class Tm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Ln([])}unionWith(e){let n=new Fe(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new m_("Invalid base64 string: "+s):s}}(e);return new je(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const TA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(we(!!t),typeof t=="string"){let e=0;const n=TA.exec(t);if(we(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pr(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pd(t){const e=t.mapValue.fields.__previous_value__;return fd(e)?pd(e):e}function Qs(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,i,s,a,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Xs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={mapValue:{}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:AA(t)?9007199254740991:SA(t)?10:11:Y()}function Ht(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qs(t).isEqual(Qs(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Jn(i.timestampValue),l=Jn(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Pr(i.bytesValue).isEqual(Pr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ie(i.doubleValue),l=Ie(s.doubleValue);return a===l?$c(a)===$c(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Ti(t.arrayValue.values||[],e.arrayValue.values||[],Ht);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wm(a)!==wm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ht(a[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function Ys(t,e){return(t.values||[]).find(n=>Ht(n,e))!==void 0}function Ii(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=Ie(s.integerValue||s.doubleValue),u=Ie(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Im(t.timestampValue,e.timestampValue);case 4:return Im(Qs(t),Qs(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Pr(s),u=Pr(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=se(l[d],u[d]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=se(Ie(s.latitude),Ie(a.latitude));return l!==0?l:se(Ie(s.longitude),Ie(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,d,f;const y=s.fields||{},v=a.fields||{},R=(l=y.value)===null||l===void 0?void 0:l.arrayValue,x=(u=v.value)===null||u===void 0?void 0:u.arrayValue,O=se(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Sm(R,x)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Jo.mapValue&&a===Jo.mapValue)return 0;if(s===Jo.mapValue)return 1;if(a===Jo.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const v=se(u[y],f[y]);if(v!==0)return v;const R=Ii(l[u[y]],d[f[y]]);if(R!==0)return R}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Im(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Jn(t),r=Jn(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Sm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ii(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Si(t){return Hc(t)}function Hc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Pr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Hc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Hc(n.fields[a])}`;return i+"}"}(t.mapValue):Y()}function Wc(t){return!!t&&"integerValue"in t}function md(t){return!!t&&"arrayValue"in t}function Am(t){return!!t&&"nullValue"in t}function Cm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Lu(t){return!!t&&"mapValue"in t}function SA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ss(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Al(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ss(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ss(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Lu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(n)}setAll(e){let n=nt.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=Ss(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Lu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ht(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Lu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Al(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Ss(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,Q.min(),Q.min(),Q.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,Q.min(),Q.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,Q.min(),Q.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n){this.position=e,this.inclusive=n}}function Rm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),n.key):r=Ii(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function km(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ht(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n="asc"){this.field=e,this.dir=n}}function CA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{}class Pe extends g_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new kA(e,n,r):n==="array-contains"?new NA(e,r):n==="in"?new DA(e,r):n==="not-in"?new OA(e,r):n==="array-contains-any"?new VA(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PA(e,r):new xA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ii(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(Ii(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends g_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return y_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function y_(t){return t.op==="and"}function v_(t){return RA(t)&&y_(t)}function RA(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function qc(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(v_(t))return t.filters.map(e=>qc(e)).join(",");{const e=t.filters.map(n=>qc(n)).join(",");return`${t.op}(${e})`}}function __(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Ht(r.value,i.value)}(t,e):t instanceof Wt?function(r,i){return i instanceof Wt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&__(a,i.filters[l]),!0):!1}(t,e):void Y()}function E_(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(E_).join(" ,")+"}"}(t):"Filter"}class kA extends Pe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class PA extends Pe{constructor(e,n){super(e,"in",n),this.keys=w_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xA extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=w_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function w_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class NA extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return md(n)&&Ys(n.arrayValue,this.value)}}class DA extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ys(this.value.arrayValue,n)}}class OA extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ys(this.value.arrayValue,n)}}class VA extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!md(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Pm(t,e=null,n=[],r=[],i=null,s=null,a=null){return new LA(t,e,n,r,i,s,a)}function gd(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Sl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Si(r)).join(",")),e.ue=n}return e.ue}function yd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!__(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!km(t.startAt,e.startAt)&&km(t.endAt,e.endAt)}function Kc(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function MA(t,e,n,r,i,s,a,l){return new Cl(t,e,n,r,i,s,a,l)}function vd(t){return new Cl(t)}function xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bA(t){return t.collectionGroup!==null}function As(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Fe(nt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ja(s,r))}),n.has(nt.keyField().canonicalString())||e.ce.push(new Ja(nt.keyField(),r))}return e.ce}function $t(t){const e=te(t);return e.le||(e.le=FA(e,As(t))),e.le}function FA(t,e){if(t.limitType==="F")return Pm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ja(i.field,s)});const n=t.endAt?new Ya(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ya(t.startAt.position,t.startAt.inclusive):null;return Pm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gc(t,e,n){return new Cl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rl(t,e){return yd($t(t),$t(e))&&t.limitType===e.limitType}function T_(t){return`${gd($t(t))}|lt:${t.limitType}`}function Ur(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>E_(i)).join(", ")}]`),Sl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Si(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Si(i)).join(",")),`Target(${r})`}($t(t))}; limitType=${t.limitType})`}function kl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of As(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Rm(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,As(r),i)||r.endAt&&!function(a,l,u){const d=Rm(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,As(r),i))}(t,e)}function UA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function I_(t){return(e,n)=>{let r=!1;for(const i of As(t)){const s=jA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Ii(u,d):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Al(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Ae(q.comparator);function Zn(){return zA}const S_=new Ae(q.comparator);function ds(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function BA(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return Cs()}function A_(){return Cs()}function Cs(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const $A=new Fe(q.comparator);function ne(...t){let e=$A;for(const n of t)e=e.add(n);return e}const HA=new Fe(se);function WA(){return HA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function KA(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this._=void 0}}function GA(t,e,n){return t instanceof Qc?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fd(s)&&(s=pd(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Za?C_(t,e):t instanceof el?R_(t,e):function(i,s){const a=XA(i,s),l=Nm(a)+Nm(i.Pe);return Wc(a)&&Wc(i.Pe)?KA(l):qA(i.serializer,l)}(t,e)}function QA(t,e,n){return t instanceof Za?C_(t,e):t instanceof el?R_(t,e):n}function XA(t,e){return t instanceof Xc?function(r){return Wc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qc extends Pl{}class Za extends Pl{constructor(e){super(),this.elements=e}}function C_(t,e){const n=k_(e);for(const r of t.elements)n.some(i=>Ht(i,r))||n.push(r);return{arrayValue:{values:n}}}class el extends Pl{constructor(e){super(),this.elements=e}}function R_(t,e){let n=k_(e);for(const r of t.elements)n=n.filter(i=>!Ht(i,r));return{arrayValue:{values:n}}}class Xc extends Pl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Nm(t){return Ie(t.integerValue||t.doubleValue)}function k_(t){return md(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Za&&i instanceof Za||r instanceof el&&i instanceof el?Ti(r.elements,i.elements,Ht):r instanceof Xc&&i instanceof Xc?Ht(r.Pe,i.Pe):r instanceof Qc&&i instanceof Qc}(t.transform,e.transform)}class Er{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Er}static exists(e){return new Er(void 0,e)}static updateTime(e){return new Er(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _d{}function P_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZA(t.key,Er.none()):new Ed(t.key,t.data,Er.none());{const n=t.data,r=Ft.empty();let i=new Fe(nt.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new xl(t.key,r,new Ln(i.toArray()),Er.none())}}function JA(t,e,n){t instanceof Ed?function(i,s,a){const l=i.value.clone(),u=Om(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xl?function(i,s,a){if(!ya(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Om(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(x_(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Rs(t,e,n,r){return t instanceof Ed?function(s,a,l,u){if(!ya(s.precondition,a))return l;const d=s.value.clone(),f=Vm(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof xl?function(s,a,l,u){if(!ya(s.precondition,a))return l;const d=Vm(s.fieldTransforms,u,a),f=a.data;return f.setAll(x_(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,a,l){return ya(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function Dm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ti(r,i,(s,a)=>YA(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ed extends _d{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xl extends _d{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function x_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Om(t,e,n){const r=new Map;we(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,QA(a,l,n[i]))}return r}function Vm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,GA(s,a,e))}return r}class ZA extends _d{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&JA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Rs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=A_();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=P_(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ti(this.mutations,e.mutations,(n,r)=>Dm(n,r))&&Ti(this.baseMutations,e.baseMutations,(n,r)=>Dm(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce,ee;function N_(t){if(t===void 0)return yn("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ce.OK:return j.OK;case Ce.CANCELLED:return j.CANCELLED;case Ce.UNKNOWN:return j.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return j.INTERNAL;case Ce.UNAVAILABLE:return j.UNAVAILABLE;case Ce.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ce.NOT_FOUND:return j.NOT_FOUND;case Ce.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ce.ABORTED:return j.ABORTED;case Ce.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ce.DATA_LOSS:return j.DATA_LOSS;default:return Y()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new vr([4294967295,4294967295],0);function Lm(t){const e=rC().encode(t),n=new a_;return n.update(e),new Uint8Array(n.digest())}function Mm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new vr([n,r],0),new vr([i,s],0)]}class wd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fs(`Invalid padding: ${n}`);if(r<0)throw new fs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=vr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(vr.fromNumber(r)));return i.compare(iC)===1&&(i=new vr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Lm(e),[r,i]=Mm(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new wd(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const n=Lm(e),[r,i]=Mm(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Nl(Q.min(),i,new Ae(se),Zn(),ne())}}class co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new co(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class D_{constructor(e,n){this.targetId=e,this.me=n}}class O_{constructor(e,n,r=je.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bm{constructor(){this.fe=0,this.ge=Um(),this.pe=je.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new co(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Um()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,we(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class sC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zn(),this.qe=Fm(),this.Qe=new Ae(se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Kc(s))if(r===0){const a=new q(s.path);this.Ue(n,a,Xe.newNoDocument(a,Q.min()))}else we(r===1);else{const a=this.Ye(n);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=Pr(r).toUint8Array()}catch(u){if(u instanceof m_)return wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new wd(a,i,s)}catch(u){return wi(u instanceof fs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Kc(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Xe.newNoDocument(u,e))}s.be&&(n.set(a,s.ve()),s.Ce())}});let r=ne();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Nl(e,n,this.Qe,this.ke,r);return this.ke=Zn(),this.qe=Fm(),this.Qe=new Ae(se),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Fe(se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Fm(){return new Ae(q.comparator)}function Um(){return new Ae(q.comparator)}const oC={asc:"ASCENDING",desc:"DESCENDING"},aC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lC={and:"AND",or:"OR"};class uC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yc(t,e){return t.useProto3Json||Sl(e)?e:{value:e}}function cC(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ci(t){return we(!!t),Q.fromTimestamp(function(n){const r=Jn(n);return new ht(r.seconds,r.nanos)}(t))}function dC(t,e){return Jc(t,e).canonicalString()}function Jc(t,e){const n=function(i){return new Ee(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function V_(t){const e=Ee.fromString(t);return we(U_(e)),e}function Mu(t,e){const n=V_(e);if(n.get(1)!==t.databaseId.projectId)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(M_(n))}function L_(t,e){return dC(t.databaseId,e)}function fC(t){const e=V_(t);return e.length===4?Ee.emptyPath():M_(e)}function jm(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function M_(t){return we(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function pC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(we(f===void 0||typeof f=="string"),je.fromBase64String(f||"")):(we(f===void 0||f instanceof Buffer||f instanceof Uint8Array),je.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?j.UNKNOWN:N_(d.code);return new W(f,d.message||"")}(a);n=new O_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Mu(t,r.document.name),s=ci(r.document.updateTime),a=r.document.createTime?ci(r.document.createTime):Q.min(),l=new Ft({mapValue:{fields:r.document.fields}}),u=Xe.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new va(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Mu(t,r.document),s=r.readTime?ci(r.readTime):Q.min(),a=Xe.newNoDocument(i,s),l=r.removedTargetIds||[];n=new va([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Mu(t,r.document),s=r.removedTargetIds||[];n=new va([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new nC(i,s),l=r.targetId;n=new D_(l,a)}}return n}function mC(t,e){return{documents:[L_(t,e.path)]}}function gC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=L_(t,i);const s=function(d){if(d.length!==0)return F_(Wt.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(v){return{field:jr(v.field),direction:_C(v.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Yc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function yC(t){let e=fC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(y){const v=b_(y);return v instanceof Wt&&v_(v)?v.getFilters():[v]}(n.where));let a=[];n.orderBy&&(a=function(y){return y.map(v=>function(x){return new Ja(zr(x.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,Sl(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(y){const v=!!y.before,R=y.values||[];return new Ya(R,v)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const v=!y.before,R=y.values||[];return new Ya(R,v)}(n.endAt)),MA(e,i,a,s,l,"F",u,d)}function vC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function b_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zr(n.unaryFilter.field);return Pe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>b_(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function _C(t){return oC[t]}function EC(t){return aC[t]}function wC(t){return lC[t]}function jr(t){return{fieldPath:t.canonicalString()}}function zr(t){return nt.fromServerFormat(t.fieldPath)}function F_(t){return t instanceof Pe?function(n){if(n.op==="=="){if(Cm(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NAN"}};if(Am(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cm(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NAN"}};if(Am(n.value))return{unaryFilter:{field:jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jr(n.field),op:EC(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(i=>F_(i));return r.length===1?r[0]:{compositeFilter:{op:wC(n.op),filters:r}}}(t):Y()}function U_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,i,s=Q.min(),a=Q.min(),l=je.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.ct=e}}function IC(t){const e=yC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.un=new AC}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Yn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class AC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Fe(Ee.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Fe(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ai(0)}static kn(){return new Ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Rs(r.mutation,i,Ln.empty(),ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=ds();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=Zn();const a=Cs(),l=function(){return Cs()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof xl)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Rs(f.mutation,d,f.mutation.getFieldMask(),ht.now())):a.set(d.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),n.forEach((d,f)=>{var y;return l.set(d,new RC(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Cs();let i=new Ae((a,l)=>a-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Ln.empty();f=l.applyToLocalView(d,f),r.set(u,f);const y=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,y=A_();f.forEach(v=>{if(!s.has(v)){const R=P_(n.get(v),r.get(v));R!==null&&y.set(v,R),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(mr());let l=-1,u=s;return a.next(d=>V.forEach(d,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ne())).next(f=>({batchId:l,changes:BA(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=ds();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=ds();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const d=function(y,v){return new Cl(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,v)=>{a=a.insert(y,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Xe.newInvalidDocument(f)))});let l=ds();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Rs(f.mutation,d,Ln.empty(),ht.now()),kl(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ci(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:IC(i.bundledQuery),readTime:ci(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.overlays=new Ae(q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=mr(),s=n.length+1,a=new q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=mr(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tC(n,r));let s=this.Ir.get(n);s===void 0&&(s=ne(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.Tr=new Fe(Ne.Er),this.dr=new Fe(Ne.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ne(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Ee([])),r=new Ne(n,e),i=new Ne(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Ee([])),r=new Ne(n,e),i=new Ne(n,e+1);let s=ne();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Ne(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Fe(Ne.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new eC(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Ne(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),i=new Ne(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Fe(se);return n.forEach(i=>{const s=new Ne(i,0),a=new Ne(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new Ne(new q(s),0);let l=new Fe(se);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Ne(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ne(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.Mr=e,this.docs=function(){return new Ae(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=Zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Zn();const a=n.path,l=new q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||yA(gA(f),r)<=0||(i.has(f.key)||kl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new VC(this)}getSize(e){return V.resolve(this.size)}}class VC extends CC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.persistence=e,this.Nr=new Vi(n=>gd(n),yd),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Td,this.targetCount=0,this.kr=Ai.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ai(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new dd(0),this.Kr=!1,this.Kr=!0,this.$r=new NC,this.referenceDelegate=e(this),this.Ur=new LC(this),this.indexManager=new SC,this.remoteDocumentCache=function(i){return new OC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new TC(n),this.Gr=new PC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new DC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new bC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class bC extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class Id{constructor(e){this.persistence=e,this.Jr=new Td,this.Yr=null}static Zr(e){return new Id(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Sd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return PT()?8:EA(Je())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new FC;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(is()<=Z.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Ur(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(is()<=Z.DEBUG&&$("QueryEngine","Query:",Ur(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(is()<=Z.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Ur(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(n))):V.resolve())}Yi(e,n){if(xm(n))return V.resolve(null);let r=$t(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gc(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ne(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,a,u.readTime)?this.Yi(e,Gc(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return xm(n)||i.isEqual(Q.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?V.resolve(null):(is()<=Z.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ur(n)),this.rs(e,a,n,mA(i,-1)).next(l=>l))})}ts(e,n){let r=new Fe(I_(e));return n.forEach((i,s)=>{kl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return is()<=Z.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Ur(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ae(se),this._s=new Vi(s=>gd(s),yd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function zC(t,e,n,r){return new jC(t,e,n,r)}async function j_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ne();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:a,addedBatchIds:l}))})})}function z_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function BC(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const v=i.get(y);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,y)));let R=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?R=R.withResumeToken(je.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(y,R),function(O,M,I){return O.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(v,R,f)&&l.push(n.Ur.updateTargetData(s,R))});let u=Zn(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push($C(s,a,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(y=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function $C(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Zn();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:a,Is:i}})}function HC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):n.Ur.allocateTargetId(r).next(a=>(i=new Mn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Zc(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!uo(a))throw a;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function zm(t,e,n){const r=te(t);let i=Q.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const y=te(u),v=y._s.get(f);return v!==void 0?V.resolve(y.os.get(v)):y.Ur.getTargetData(d,f)}(r,a,$t(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,e,n?i:Q.min(),n?s:ne())).next(l=>(WC(r,UA(e),l),{documents:l,Ts:s})))}function WC(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Bm{constructor(){this.activeTargetIds=WA()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qC{constructor(){this.so=new Bm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Bm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo=null;function bu(){return Zo===null?Zo=function(){return 268435456+Math.round(2147483648*Math.random())}():Zo++,"0x"+Zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class XC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=bu(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,a),this.No(n,u,d,i).then(f=>($("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw wi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=GC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=bu();return new Promise((a,l)=>{const u=new l_;u.setWithCredentials(!0),u.listenOnce(u_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ga.NO_ERROR:const f=u.getResponseJson();$(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ga.TIMEOUT:$(qe,`RPC '${e}' ${s} timed out`),l(new W(j.DEADLINE_EXCEEDED,"Request time out"));break;case ga.HTTP_ERROR:const y=u.getStatus();if($(qe,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const R=v==null?void 0:v.error;if(R&&R.status&&R.message){const x=function(M){const I=M.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(I)>=0?I:j.UNKNOWN}(R.status);l(new W(x,R.message))}else l(new W(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(j.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(qe,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);$(qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=bu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=d_(),l=h_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=a.createWebChannel(f,u);let v=!1,R=!1;const x=new QC({Io:M=>{R?$(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(v||($(qe,`Opening RPC '${e}' stream ${i} transport.`),y.open(),v=!0),$(qe,`RPC '${e}' stream ${i} sending:`,M),y.send(M))},To:()=>y.close()}),O=(M,I,w)=>{M.listen(I,A=>{try{w(A)}catch(D){setTimeout(()=>{throw D},0)}})};return O(y,hs.EventType.OPEN,()=>{R||($(qe,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),O(y,hs.EventType.CLOSE,()=>{R||(R=!0,$(qe,`RPC '${e}' stream ${i} transport closed`),x.So())}),O(y,hs.EventType.ERROR,M=>{R||(R=!0,wi(qe,`RPC '${e}' stream ${i} transport errored:`,M),x.So(new W(j.UNAVAILABLE,"The operation could not be completed")))}),O(y,hs.EventType.MESSAGE,M=>{var I;if(!R){const w=M.data[0];we(!!w);const A=w,D=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(D){$(qe,`RPC '${e}' stream ${i} received error:`,D);const b=D.status;let F=function(g){const E=Ce[g];if(E!==void 0)return N_(E)}(b),_=D.message;F===void 0&&(F=j.INTERNAL,_="Unknown error status: "+b+" with message "+D.message),R=!0,x.So(new W(F,_)),y.close()}else $(qe,`RPC '${e}' stream ${i} received:`,w),x.bo(w)}}),O(l,c_.STAT_EVENT,M=>{M.stat===Bc.PROXY?$(qe,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Bc.NOPROXY&&$(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Fu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){return new uC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(yn(n.toString()),yn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JC extends YC{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=pC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?ci(a.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=jm(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=Kc(u)?{documents:mC(s,u)}:{query:gC(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=hC(s,a.resumeToken);const d=Yc(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=cC(s,a.snapshotVersion.toTimestamp());const d=Yc(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=vC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=jm(this.serializer),n.removeTarget=e,this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,Jc(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(j.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,Jc(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(j.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class eR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(yn(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{fo(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=te(u);d.L_.add(4),await ho(d),d.q_.set("Unknown"),d.L_.delete(4),await Dl(d)}(this))})}),this.q_=new eR(r,i)}}async function Dl(t){if(fo(t))for(const e of t.B_)await e(!0)}async function ho(t){for(const e of t.B_)await e(!1)}function H_(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),kd(n)?Rd(n):Li(n).r_()&&Cd(n,e))}function Ad(t,e){const n=te(t),r=Li(n);n.N_.delete(e),r.r_()&&W_(n,e),n.N_.size===0&&(r.r_()?r.o_():fo(n)&&n.q_.set("Unknown"))}function Cd(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).A_(e)}function W_(t,e){t.Q_.xe(e),Li(t).R_(e)}function Rd(t){t.Q_=new sC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.q_.v_()}function kd(t){return fo(t)&&!Li(t).n_()&&t.N_.size>0}function fo(t){return te(t).L_.size===0}function q_(t){t.Q_=void 0}async function nR(t){t.q_.set("Online")}async function rR(t){t.N_.forEach((e,n)=>{Cd(t,e)})}async function iR(t,e){q_(t),kd(t)?(t.q_.M_(e),Rd(t)):t.q_.set("Unknown")}async function sR(t,e,n){if(t.q_.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hm(t,r)}else if(e instanceof va?t.Q_.Ke(e):e instanceof D_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await z_(t.localStore);n.compareTo(r)>=0&&await function(s,a){const l=s.Q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(d);f&&s.N_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(je.EMPTY_BYTE_STRING,f.snapshotVersion)),W_(s,u);const y=new Mn(f.target,u,d,f.sequenceNumber);Cd(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Hm(t,r)}}async function Hm(t,e,n){if(!uo(e))throw e;t.L_.add(1),await ho(t),t.q_.set("Offline"),n||(n=()=>z_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Dl(t)})}async function Wm(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=fo(n);n.L_.add(3),await ho(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Dl(n)}async function oR(t,e){const n=te(t);e?(n.L_.delete(2),await Dl(n)):e||(n.L_.add(2),await ho(n),n.q_.set("Unknown"))}function Li(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new JC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:nR.bind(null,t),Ro:rR.bind(null,t),mo:iR.bind(null,t),d_:sR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),kd(t)?Rd(t):t.q_.set("Unknown")):(await t.K_.stop(),q_(t))})),t.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Pd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function K_(t,e){if(yn("AsyncQueue",`${e}: ${t}`),uo(t))return new W(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ds(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new hi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.W_=new Ae(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ci{constructor(e,n,r,i,s,a,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new Ci(e,n,hi.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class lR{constructor(){this.queries=Km(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Km(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(j.ABORTED,"Firestore shutting down"))}}function Km(){return new Vi(t=>T_(t),Rl)}async function uR(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new aR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=K_(a,`Initialization of query '${Ur(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&xd(n)}async function cR(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.j_.indexOf(e);a>=0&&(s.j_.splice(a,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hR(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.j_)l.X_(i)&&(r=!0);a.z_=i}}r&&xd(n)}function dR(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function xd(t){t.Y_.forEach(e=>{e.next()})}var eh,Gm;(Gm=eh||(eh={})).ea="default",Gm.Cache="cache";class fR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==eh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.key=e}}class Q_{constructor(e){this.key=e}}class pR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=I_(e),this.Ra=new hi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qm,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const v=i.get(f),R=kl(this.query,y)?y:null,x=!!v&&this.mutatedKeys.has(v.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;v&&R?v.data.isEqual(R.data)?x!==O&&(r.track({type:3,doc:R}),M=!0):this.ga(v,R)||(r.track({type:2,doc:R}),M=!0,(u&&this.Aa(R,u)>0||d&&this.Aa(R,d)<0)&&(l=!0)):!v&&R?(r.track({type:0,doc:R}),M=!0):v&&!R&&(r.track({type:1,doc:v}),M=!0,(u||d)&&(l=!0)),M&&(R?(a=a.add(R),s=O?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:a,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,y)=>function(R,x){const O=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return O(R)-O(x)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,a.length!==0||d?{snapshot:new Ci(this.query,e.Ra,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Q_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new G_(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ci.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class mR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gR{constructor(e){this.key=e,this.va=!1}}class yR{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Vi(l=>T_(l),Rl),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(q.comparator),this.Na=new Map,this.La=new Td,this.Ba={},this.ka=new Map,this.qa=Ai.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function vR(t,e,n=!0){const r=e0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await X_(r,e,n,!0),i}async function _R(t,e){const n=e0(t);await X_(n,e,!0,!1)}async function X_(t,e,n,r){const i=await HC(t.localStore,$t(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await ER(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&H_(t.remoteStore,i),l}async function ER(t,e,n,r,i){t.Ka=(y,v,R)=>async function(O,M,I,w){let A=M.view.ma(I);A.ns&&(A=await zm(O.localStore,M.query,!1).then(({documents:_})=>M.view.ma(_,A)));const D=w&&w.targetChanges.get(M.targetId),b=w&&w.targetMismatches.get(M.targetId)!=null,F=M.view.applyChanges(A,O.isPrimaryClient,D,b);return Xm(O,M.targetId,F.wa),F.snapshot}(t,y,v,R);const s=await zm(t.localStore,e,!0),a=new pR(e,s.Ts),l=a.ma(s.documents),u=co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=a.applyChanges(l,t.isPrimaryClient,u);Xm(t,n,d.wa);const f=new mR(e,n,a);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function wR(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(a=>!Rl(a,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ad(r.remoteStore,i.targetId),th(r,i.targetId)}).catch(hd)):(th(r,i.targetId),await Zc(r.localStore,i.targetId,!0))}async function TR(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ad(n.remoteStore,r.targetId))}async function Y_(t,e){const n=te(t);try{const r=await BC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Na.get(s);a&&(we(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.va=!0:i.modifiedDocuments.size>0?we(a.va):i.removedDocuments.size>0&&(we(a.va),a.va=!1))}),await Z_(n,r,e)}catch(r){await hd(r)}}function Qm(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=te(a);u.onlineState=l;let d=!1;u.queries.forEach((f,y)=>{for(const v of y.j_)v.Z_(l)&&(d=!0)}),d&&xd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IR(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let a=new Ae(q.comparator);a=a.insert(s,Xe.newNoDocument(s,Q.min()));const l=ne().add(s),u=new Nl(Q.min(),new Map,new Ae(se),a,l);await Y_(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Nd(r)}else await Zc(r.localStore,e,!1).then(()=>th(r,e,n)).catch(hd)}function th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||J_(t,r)})}function J_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Ad(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Nd(t))}function Xm(t,e,n){for(const r of n)r instanceof G_?(t.La.addReference(r.key,e),SR(t,r)):r instanceof Q_?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||J_(t,r.key)):Y()}function SR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),Nd(t))}function Nd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(Ee.fromString(e)),r=t.qa.next();t.Na.set(r,new gR(n)),t.Oa=t.Oa.insert(n,r),H_(t.remoteStore,new Mn($t(vd(n.path)),r,"TargetPurposeLimboResolution",dd.oe))}}async function Z_(t,e,n){const r=te(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const y=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=Sd.Wi(u.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,d){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>V.forEach(d,v=>V.forEach(v.$i,R=>f.persistence.referenceDelegate.addReference(y,v.targetId,R)).next(()=>V.forEach(v.Ui,R=>f.persistence.referenceDelegate.removeReference(y,v.targetId,R)))))}catch(y){if(!uo(y))throw y;$("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const v=y.targetId;if(!y.fromCache){const R=f.os.get(v),x=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(v,O)}}}(r.localStore,s))}async function AR(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await j_(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(j.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Z_(n,r.hs)}}function CR(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let i=ne();const s=n.Ma.get(e);if(!s)return i;for(const a of s){const l=n.Fa.get(a);i=i.unionWith(l.view.Va)}return i}}function e0(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Y_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IR.bind(null,e),e.Ca.d_=hR.bind(null,e.eventManager),e.Ca.$a=dR.bind(null,e.eventManager),e}class tl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=B_(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return zC(this.persistence,new UC,e.initialUser,this.serializer)}Ga(e){return new MC(Id.Zr,this.serializer)}Wa(e){return new qC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tl.provider={build:()=>new tl};class nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AR.bind(null,this.syncEngine),await oR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lR}()}createDatastore(e){const n=B_(e.databaseInfo.databaseId),r=function(s){return new XC(s)}(e.databaseInfo);return function(s,a,l,u){return new ZC(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new tR(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qm(this.syncEngine,n,0),function(){return $m.D()?new $m:new KC}())}createSyncEngine(e,n){return function(i,s,a,l,u,d,f){const y=new yR(i,s,a,l,u,d);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);$("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ho(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nh.provider={build:()=>new nh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):yn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=p_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{$("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>($("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=K_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Uu(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await j_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ym(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PR(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wm(e.remoteStore,i)),t._onlineComponents=e}async function PR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Uu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===j.FAILED_PRECONDITION||i.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;wi("Error using user provided cache. Falling back to memory cache: "+n),await Uu(t,new tl)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Uu(t,new tl);return t._offlineComponents}async function xR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Ym(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Ym(t,new nh))),t._onlineComponents}async function NR(t){const e=await xR(t),n=e.eventManager;return n.onListen=vR.bind(null,e.syncEngine),n.onUnlisten=wR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_R.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=TR.bind(null,e.syncEngine),n}function DR(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new RR({next:v=>{f.Za(),a.enqueueAndForget(()=>cR(s,y));const R=v.docs.has(l);!R&&v.fromCache?d.reject(new W(j.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&v.fromCache&&u&&u.source==="server"?d.reject(new W(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),y=new fR(vd(l.path),f,{includeMetadataChanges:!0,_a:!0});return uR(s,y)}(await NR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t,e,n){if(!n)throw new W(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VR(t,e,n,r){if(e===!0&&r===!0)throw new W(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zm(t){if(!q.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function LR(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function rh(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=LR(t);throw new W(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new eg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new eg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oA;switch(r.type){case"firstParty":return new cA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jm.get(n);r&&($("ComponentProvider","Removing Datastore"),Jm.delete(n),r.terminate())}(this),Promise.resolve()}}function MR(t,e,n,r={}){var i;const s=(t=rh(t,Dd))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ge.MOCK_USER;else{l=TT(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ge(d)}t._authCredentials=new aA(new f_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Od(this.firestore,e,this._query)}}class cn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Js(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class Js extends Od{constructor(e,n,r){super(e,n,vd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new q(e))}withConverter(e){return new Js(this.firestore,e,this._path)}}function bR(t,e,...n){if(t=qt(t),arguments.length===1&&(e=p_.newId()),OR("doc","path",e),t instanceof Dd){const r=Ee.fromString(e,...n);return Zm(r),new cn(t,null,new q(r))}{if(!(t instanceof cn||t instanceof Js))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ee.fromString(e,...n));return Zm(r),new cn(t.firestore,t instanceof Js?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $_(this,"async_queue_retry"),this.Vu=()=>{const r=Fu();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Fu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Fu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new _r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!uo(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Pd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class n0 extends Dd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new tg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tg(e),this._firestoreClient=void 0,await e}}}function FR(t,e){const n=typeof t=="object"?t:Av(),r=typeof t=="string"?t:"(default)",i=ed(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ET("firestore");s&&MR(i,...s)}return i}function UR(t){if(t._terminated)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jR(t),t._firestoreClient}function jR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,f){return new IA(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,t0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new kR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nl(je.fromBase64String(e))}catch(n){throw new W(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nl(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const $R=new RegExp("[~\\*/\\[\\]]");function HR(t,e,n){if(e.search($R)>=0)throw ng(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new r0(...e.split("."))._internalPath}catch{throw ng(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ng(t,e,n,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new W(j.INVALID_ARGUMENT,s+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(s0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WR extends i0{data(){return super.data()}}function s0(t,e){return typeof e=="string"?HR(t,e):e instanceof r0?e._internalPath:e._delegate._internalPath}class qR{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Al(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>Ie(a.doubleValue));return new BR(s)}convertGeoPoint(e){return new zR(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qs(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ee.fromString(e);we(U_(r));const i=new Xs(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class o0 extends i0{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new GR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(s0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class GR extends o0{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){t=rh(t,cn);const e=rh(t.firestore,n0);return DR(UR(e),t._key).then(n=>YR(e,t,n))}class XR extends qR{constructor(e){super(),this.firestore=e}convertBytes(e){return new nl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,n)}}function YR(t,e,n){const r=n.docs.get(e._key),i=new XR(t);return new o0(t,i,e._key,r,new KR(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Oi=i})(xi),_i(new Cr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new n0(new lA(r.getProvider("auth-internal")),new dA(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kn(Em,"4.7.3",e),Kn(Em,"4.7.3","esm2017")})();const JR={apiKey:"AIzaSyBZMATRwyxZU0ud2bzKV3AyZ3kAVtK2W-0",authDomain:"banco-de-dados-clinica-23b42.firebaseapp.com",projectId:"banco-de-dados-clinica-23b42",storageBucket:"banco-de-dados-clinica-23b42.firebasestorage.app",messagingSenderId:"119527584560",appId:"1:119527584560:web:948e30109a2fa0ec0f0ef5",measurementId:"G-2H9BCVKXGZ"},a0=Sv(JR),ju=iA(a0),ZR=FR(a0),ek="dd383332-8636-4d2c-97d8-1f7cfb318b75",H={page:{fontFamily:"Arial, sans-serif",background:"#fffdfa",minHeight:"100vh",color:"#292524",overflowX:"clip"},container:{width:"100%",maxWidth:"1160px",margin:"0 auto",padding:"0 25px",boxSizing:"border-box"},brand:{background:"#f97316",color:"#fff",padding:"10px 16px",borderRadius:"12px",fontWeight:"800",fontSize:"17px",display:"inline-block",whiteSpace:"nowrap"},primaryButton:{padding:"14px 23px",background:"#f97316",color:"#fff",border:"none",borderRadius:"12px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"0.2s"},secondaryButton:{padding:"13px 22px",background:"#fff",color:"#c2410c",border:"1px solid #fed7aa",borderRadius:"12px",fontSize:"14px",fontWeight:"bold",cursor:"pointer",textDecoration:"none",display:"inline-flex",alignItems:"center",justifyContent:"center"},section:{padding:"85px 0"},eyebrow:{display:"inline-block",color:"#c2410c",background:"#ffedd5",padding:"7px 13px",borderRadius:"30px",fontSize:"12px",fontWeight:"bold",letterSpacing:"0.5px",textTransform:"uppercase",marginBottom:"17px"},sectionTitle:{fontSize:"clamp(28px, 4vw, 40px)",lineHeight:"1.15",color:"#292524",margin:"0 0 16px",fontWeight:"800"},sectionText:{color:"#78716c",fontSize:"16px",lineHeight:"1.75",maxWidth:"690px",margin:"0 auto"},card:{background:"#fff",border:"1px solid #f5e7d8",borderRadius:"18px",padding:"25px",boxShadow:"0 8px 28px rgba(120, 53, 15, 0.045)"},input:{width:"100%",boxSizing:"border-box",padding:"13px 14px",border:"1px solid #e7e5e4",borderRadius:"10px",fontSize:"14px",fontFamily:"Arial, sans-serif",outlineColor:"#fb923c",background:"#fff"}},tk=[{icon:"👥",title:"Tutores e pacientes",description:"Cadastros centralizados para manter as informações dos tutores e seus animais organizadas."},{icon:"🩺",title:"Atendimento veterinário",description:"Estrutura planejada para consultas, anamnese, registros clínicos e histórico do paciente."},{icon:"📋",title:"Receitas e prescrições",description:"Criação de receitas vinculadas ao atendimento, com geração de documentos em PDF prevista."},{icon:"🏥",title:"Internamento",description:"Acompanhamento de pacientes internados, evolução clínica, cuidados e procedimentos."},{icon:"💉",title:"Vacinação",description:"Organização do histórico vacinal, lotes, validade e próximos reforços."},{icon:"📦",title:"Estoque",description:"Controle planejado de produtos, medicamentos, entradas, saídas e movimentações por unidade."},{icon:"💰",title:"Financeiro",description:"Estrutura para caixa, contas, recebimentos e acompanhamento financeiro."},{icon:"📊",title:"Relatórios",description:"Indicadores para acompanhar a operação e apoiar decisões de gestão."}],nk=[{question:"O VET MAX é destinado apenas a clínicas pequenas?",answer:"Não. A proposta é atender clínicas independentes, hospitais veterinários e organizações com várias unidades, permitindo uma evolução gradual da estrutura."},{question:"É possível administrar mais de uma unidade?",answer:"Essa é uma das bases da arquitetura planejada. Uma organização poderá possuir várias unidades, com operações próprias e gestão consolidada conforme as permissões."},{question:"Os módulos já estão todos disponíveis?",answer:"Não. O VET MAX está em desenvolvimento. Os módulos serão disponibilizados gradualmente, depois de implementados, integrados e validados."},{question:"Como funcionam os planos e os preços?",answer:"As condições comerciais ainda estão em formação. Entre em contato para acompanhar as novidades e demonstrar seu interesse."},{question:"Como posso solicitar informações?",answer:"Utilize o formulário desta página. Sua mensagem será encaminhada para a equipe responsável pelo VET MAX."},{question:"O sistema protege os dados de cada clínica?",answer:"O isolamento entre organizações, o controle de permissões e a proteção das informações são requisitos centrais da arquitetura do projeto."}];function rg(){return C.jsx("footer",{style:{borderTop:"1px solid #f5e7d8",background:"#fffdfa",padding:"27px 20px",textAlign:"center"},children:C.jsxs("div",{style:{color:"#a8a29e",fontSize:"12px",lineHeight:1.8},children:["© 2026 VET MAX. Todos os direitos reservados.",C.jsx("br",{}),"by Jonathan D. Andrade"]})})}function rk(){return C.jsx("img",{src:"/SISTEMA-VET/pets-vet.png",alt:"Ilustração de cachorro e gato representando o cuidado veterinário",style:{width:"100%",maxWidth:"390px",height:"auto",display:"block",margin:"0 auto"}})}function ik(){const[t,e]=Ke.useState(null),[n,r]=Ke.useState(null),[i,s]=Ke.useState(!0),[a,l]=Ke.useState("home"),[u,d]=Ke.useState(""),[f,y]=Ke.useState(""),[v,R]=Ke.useState(""),[x,O]=Ke.useState({name:"",email:"",subject:"Quero conhecer o VET MAX",message:""}),[M,I]=Ke.useState(""),[w,A]=Ke.useState(!1),[D,b]=Ke.useState(null);Ke.useEffect(()=>{const g=qS(ju,async E=>{if(e(E),E){try{const S=bR(ZR,"clinics",E.uid),k=await QR(S);k.exists()?r(k.data()):r({name:"Minha Clínica Veterinária"})}catch(S){console.error("Erro ao buscar dados da clínica:",S),r({name:"VetSystem"})}l("dashboard")}else r(null);s(!1)});return()=>g()},[]),Ke.useEffect(()=>{const g=document.createElement("style");return g.innerHTML=`
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 78px;
      }

      section[id] {
        scroll-margin-top: 78px;
      }

      .vet-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
        box-sizing: border-box;
        background: rgba(255, 253, 250, 0.97);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid #f5e7d8;
        box-shadow: 0 3px 14px rgba(120, 53, 15, 0.045);
      }

      .vet-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
      }

      .vet-nav a {
        color: #57534e;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        transition: color 0.2s ease;
      }

      .vet-nav a:hover {
        color: #ea580c;
      }

      .vet-header a,
      .vet-header button {
        -webkit-tap-highlight-color: transparent;
      }

      @media (max-width: 900px) {
        .vet-header {
          flex-wrap: wrap !important;
          row-gap: 10px !important;
        }

        .vet-nav {
          order: 3;
          width: 100%;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px !important;
          padding: 4px 0 8px;
        }
      }

      @media (max-width: 600px) {
        .vet-header {
          padding: 8px 18px !important;
          row-gap: 8px !important;
        }

        .vet-nav {
          justify-content: flex-start;
          flex-wrap: nowrap;
          overflow-x: auto;
          white-space: nowrap;
          gap: 20px !important;
          padding: 5px 0 8px;
          scrollbar-width: thin;
        }

        .vet-nav a {
          font-size: 12px !important;
        }

        .vet-header > a span {
          padding: 8px 12px !important;
          font-size: 15px !important;
        }

        .vet-header > button {
          padding: 9px 12px !important;
          font-size: 12px !important;
        }
      }

      .vet-contact-input:focus {
        border-color: #fb923c !important;
        box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.13);
        outline: none;
      }
    `,document.head.appendChild(g),()=>{document.head.removeChild(g)}},[]);const F=async g=>{g.preventDefault(),R("");try{await $S(ju,u,f)}catch(E){console.error("Erro no login:",E),R("Não foi possível entrar. Confira seu e-mail e sua senha.")}},_=g=>{const{name:E,value:S}=g.target;O(k=>({...k,[E]:S})),D&&b(null)},m=async g=>{if(g.preventDefault(),!w){if(M.trim()){b({type:"success",message:"Mensagem enviada com sucesso."});return}A(!0),b(null);try{const E=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({access_key:ek,name:x.name.trim(),email:x.email.trim(),subject:`[VET MAX] ${x.subject}`,message:x.message.trim()})}),S=await E.json();if(!E.ok||!S.success)throw new Error(S.message||"Não foi possível enviar a mensagem.");b({type:"success",message:"Mensagem enviada com sucesso! Em breve entraremos em contato."}),O({name:"",email:"",subject:"Quero conhecer o VET MAX",message:""})}catch(E){console.error("Erro ao enviar formulário:",E),b({type:"error",message:"Não foi possível enviar sua mensagem. Tente novamente mais tarde."})}finally{A(!1)}}};return i?C.jsx("div",{style:{textAlign:"center",marginTop:"100px",fontFamily:"Arial, sans-serif",color:"#9a3412",fontSize:"18px"},children:"Carregando VET MAX..."}):t?C.jsxs("div",{style:{...H.page,padding:"30px 40px",boxSizing:"border-box"},children:[C.jsxs("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"15px",borderBottom:"1px solid #f3e8ff",paddingBottom:"20px",marginBottom:"40px"},children:[C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px"},children:[C.jsx("span",{style:H.brand,children:"🐾 VET MAX"}),C.jsx("h2",{style:{margin:0,color:"#1f2937",fontSize:"20px"},children:(n==null?void 0:n.name)||"Painel da Clínica"})]}),C.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"15px",flexWrap:"wrap"},children:[C.jsx("span",{style:{color:"#4b5563",fontSize:"14px"},children:t.email}),C.jsx("button",{onClick:()=>KS(ju),style:{padding:"9px 17px",backgroundColor:"#ef4444",color:"#fff",border:"none",borderRadius:"9px",fontWeight:"bold",cursor:"pointer"},children:"Sair"})]})]}),C.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",textAlign:"center",padding:"55px 30px",backgroundColor:"#fff7ed",borderRadius:"24px",border:"1px solid #ffedd5"},children:[C.jsx("div",{style:{fontSize:"55px",marginBottom:"15px"},children:"🐾"}),C.jsx("h1",{style:{color:"#9a3412",fontSize:"30px",marginBottom:"15px"},children:"Bem-vindo ao VET MAX!"}),C.jsx("p",{style:{color:"#c2410c",fontSize:"16px",lineHeight:"1.6"},children:"Seu ambiente da clínica está conectado. Estamos preparando as ferramentas para facilitar sua rotina veterinária."})]})]}):a==="login"?C.jsxs("div",{style:{minHeight:"100vh",fontFamily:"Arial, sans-serif",background:"linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",padding:"35px 20px 0",boxSizing:"border-box"},children:[C.jsx("div",{style:{width:"100%",flex:1,display:"flex",justifyContent:"center",alignItems:"center"},children:C.jsxs("div",{style:{width:"100%",maxWidth:"420px",padding:"40px",boxSizing:"border-box",backgroundColor:"#fff",borderRadius:"24px",boxShadow:"0 20px 25px -5px rgba(120, 53, 15, 0.10)",border:"1px solid #ffedd5"},children:[C.jsx("div",{style:{marginBottom:"25px"},children:C.jsx("span",{style:H.brand,children:"🐾 VET MAX"})}),C.jsx("h2",{style:{color:"#1f2937",fontSize:"26px",marginBottom:"8px",fontWeight:"800"},children:"Bem-vindo de volta!"}),C.jsx("p",{style:{color:"#6b7280",fontSize:"14px",lineHeight:"1.5",marginBottom:"25px"},children:"Acesse o painel administrativo da sua clínica."}),v&&C.jsx("p",{style:{color:"#dc2626",backgroundColor:"#fee2e2",padding:"12px",borderRadius:"8px",fontSize:"13px",marginBottom:"20px"},children:v}),C.jsxs("form",{onSubmit:F,children:[C.jsxs("div",{style:{marginBottom:"20px"},children:[C.jsx("label",{style:{display:"block",fontWeight:"600",marginBottom:"8px",color:"#374151",fontSize:"14px"},children:"E-mail"}),C.jsx("input",{type:"email",value:u,onChange:g=>d(g.target.value),required:!0,style:H.input,placeholder:"seu@email.com",autoComplete:"email"})]}),C.jsxs("div",{style:{marginBottom:"25px"},children:[C.jsx("label",{style:{display:"block",fontWeight:"600",marginBottom:"8px",color:"#374151",fontSize:"14px"},children:"Senha"}),C.jsx("input",{type:"password",value:f,onChange:g=>y(g.target.value),required:!0,style:H.input,placeholder:"Sua senha",autoComplete:"current-password"})]}),C.jsx("button",{type:"submit",style:{...H.primaryButton,width:"100%"},children:"Entrar no sistema"})]}),C.jsx("div",{style:{textAlign:"center",marginTop:"22px"},children:C.jsx("button",{onClick:()=>{R(""),l("home")},style:{background:"none",border:"none",color:"#9ca3af",cursor:"pointer",fontSize:"14px"},children:"← Voltar à página inicial"})})]})}),C.jsx("div",{style:{width:"100%",marginTop:"30px"},children:C.jsx(rg,{})})]}):C.jsxs("div",{style:{...H.page,display:"flex",flexDirection:"column"},children:[C.jsxs("header",{className:"vet-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 35px",minHeight:"64px",gap:"20px"},children:[C.jsx("a",{href:"#inicio",onClick:g=>{g.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"VET MAX - voltar ao início",style:{display:"inline-flex",alignItems:"center",textDecoration:"none",flexShrink:0},children:C.jsx("span",{style:{...H.brand,padding:"8px 14px",fontSize:"16px"},children:"🐾 VET MAX"})}),C.jsxs("nav",{className:"vet-nav",style:{flex:1,gap:"32px"},children:[C.jsx("a",{href:"#inicio",children:"Início"}),C.jsx("a",{href:"#sobre",children:"Sobre"}),C.jsx("a",{href:"#recursos",children:"Recursos"}),C.jsx("a",{href:"#estrutura",children:"Estrutura"}),C.jsx("a",{href:"#planos",children:"Planos"}),C.jsx("a",{href:"#duvidas",children:"Dúvidas"}),C.jsx("a",{href:"#contato",children:"Contato"})]}),C.jsx("button",{onClick:()=>{R(""),l("login"),window.scrollTo({top:0,behavior:"smooth"})},style:{...H.primaryButton,padding:"10px 18px",fontSize:"13px",flexShrink:0},children:"Entrar"})]}),C.jsxs("main",{style:{flex:1},children:[C.jsx("section",{id:"inicio",style:{...H.section,padding:"75px 0 85px",background:"linear-gradient(180deg, #fffdfa 0%, #fff7ed 100%)"},children:C.jsxs("div",{style:{...H.container,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 340px), 1fr))",alignItems:"center",gap:"50px"},children:[C.jsxs("div",{children:[C.jsx("span",{style:H.eyebrow,children:"Gestão veterinária preparada para crescer"}),C.jsxs("h1",{style:{fontSize:"clamp(38px, 5vw, 56px)",lineHeight:1.1,color:"#292524",margin:"0 0 22px",fontWeight:"900"},children:["Sua clínica evolui.",C.jsx("br",{}),C.jsx("span",{style:{color:"#f97316"},children:"Sua gestão acompanha."})]}),C.jsx("p",{style:{color:"#78716c",fontSize:"17px",lineHeight:1.8,maxWidth:"560px",margin:"0 0 28px"},children:"Uma plataforma pensada para organizar a rotina veterinária, integrar informações e acompanhar o crescimento da sua clínica, hospital ou rede."}),C.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"13px"},children:[C.jsx("a",{href:"#contato",style:H.primaryButton,children:"Conhecer o VET MAX"}),C.jsx("a",{href:"#recursos",style:H.secondaryButton,children:"Conhecer recursos"})]}),C.jsx("p",{style:{color:"#a8a29e",fontSize:"12px",lineHeight:1.6,marginTop:"18px"},children:"Plataforma em desenvolvimento, com disponibilização gradual dos módulos após implementação e validação."})]}),C.jsxs("div",{style:{...H.card,padding:"35px 25px",background:"#fffbeb",borderColor:"#fef3c7",textAlign:"center"},children:[C.jsx(rk,{}),C.jsx("h2",{style:{color:"#9a3412",fontSize:"23px",margin:"20px 0 10px"},children:"Tecnologia para quem cuida."}),C.jsx("p",{style:{color:"#a16207",fontSize:"14px",lineHeight:1.7,margin:0},children:"Organização, integração e informação para apoiar o trabalho de quem dedica sua rotina à saúde animal."})]})]})}),C.jsx("section",{id:"sobre",style:{...H.section,background:"#fffdfa"},children:C.jsxs("div",{style:{...H.container,textAlign:"center"},children:[C.jsx("span",{style:H.eyebrow,children:"Sobre o projeto"}),C.jsx("h2",{style:H.sectionTitle,children:"Uma gestão que acompanha o crescimento."}),C.jsx("p",{style:H.sectionText,children:"O VET MAX está sendo desenvolvido para atender desde uma clínica independente até organizações com várias unidades. A proposta é integrar cadastros, rotinas e informações em uma estrutura preparada para crescer com segurança."}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 220px), 1fr))",gap:"18px",marginTop:"45px",textAlign:"left"},children:[C.jsxs("div",{style:H.card,children:[C.jsx("div",{style:{fontSize:"30px",marginBottom:"12px"},children:"🏥"}),C.jsx("h3",{style:{color:"#9a3412",margin:"0 0 10px"},children:"Para clínicas e hospitais"}),C.jsx("p",{style:{color:"#78716c",lineHeight:1.7,fontSize:"14px",margin:0},children:"Uma estrutura pensada para diferentes portes e rotinas veterinárias."})]}),C.jsxs("div",{style:H.card,children:[C.jsx("div",{style:{fontSize:"30px",marginBottom:"12px"},children:"🔗"}),C.jsx("h3",{style:{color:"#9a3412",margin:"0 0 10px"},children:"Módulos integrados"}),C.jsx("p",{style:{color:"#78716c",lineHeight:1.7,fontSize:"14px",margin:0},children:"Cadastros compartilhados e fluxos conectados para evitar informações duplicadas."})]}),C.jsxs("div",{style:H.card,children:[C.jsx("div",{style:{fontSize:"30px",marginBottom:"12px"},children:"📈"}),C.jsx("h3",{style:{color:"#9a3412",margin:"0 0 10px"},children:"Preparado para crescer"}),C.jsx("p",{style:{color:"#78716c",lineHeight:1.7,fontSize:"14px",margin:0},children:"Arquitetura planejada para organizações com uma ou várias unidades."})]})]})]})}),C.jsx("section",{id:"recursos",style:{...H.section,background:"#fff7ed"},children:C.jsxs("div",{style:{...H.container,textAlign:"center"},children:[C.jsx("span",{style:H.eyebrow,children:"Recursos planejados"}),C.jsx("h2",{style:H.sectionTitle,children:"As ferramentas para uma rotina mais organizada."}),C.jsx("p",{style:{...H.sectionText,marginBottom:"42px"},children:"Os módulos serão desenvolvidos e disponibilizados gradualmente, respeitando as integrações e validações necessárias."}),C.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 235px), 1fr))",gap:"18px",textAlign:"left"},children:tk.map(g=>C.jsxs("div",{style:H.card,children:[C.jsx("div",{style:{fontSize:"30px",marginBottom:"15px"},children:g.icon}),C.jsx("h3",{style:{color:"#9a3412",fontSize:"17px",margin:"0 0 10px"},children:g.title}),C.jsx("p",{style:{color:"#78716c",fontSize:"14px",lineHeight:1.7,margin:0},children:g.description})]},g.title))})]})}),C.jsx("section",{id:"estrutura",style:{...H.section,background:"#fffdfa"},children:C.jsxs("div",{style:{...H.container,textAlign:"center"},children:[C.jsx("span",{style:H.eyebrow,children:"Estrutura do sistema"}),C.jsx("h2",{style:H.sectionTitle,children:"Uma organização. Várias possibilidades."}),C.jsx("p",{style:{...H.sectionText,marginBottom:"42px"},children:"A arquitetura do VET MAX prevê três níveis de organização, com vínculos e permissões definidos."}),C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 250px), 1fr))",gap:"18px",textAlign:"left"},children:[C.jsxs("div",{style:{...H.card,borderTop:"4px solid #f97316"},children:[C.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"🏢"}),C.jsx("h3",{style:{color:"#9a3412",margin:"0 0 10px"},children:"Organização"}),C.jsx("p",{style:{color:"#78716c",fontSize:"14px",lineHeight:1.7,margin:0},children:"Representa a clínica, hospital ou rede que utiliza a plataforma."})]}),C.jsxs("div",{style:{...H.card,borderTop:"4px solid #fb923c"},children:[C.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"🏥"}),C.jsx("h3",{style:{color:"#9a3412",margin:"0 0 10px"},children:"Unidades"}),C.jsx("p",{style:{color:"#78716c",fontSize:"14px",lineHeight:1.7,margin:0},children:"Cada estabelecimento poderá possuir operações próprias, respeitando as permissões da organização."})]}),C.jsxs("div",{style:{...H.card,borderTop:"4px solid #fcd34d"},children:[C.jsx("div",{style:{fontSize:"28px",marginBottom:"12px"},children:"👥"}),C.jsx("h3",{style:{color:"#9a3412",margin:"0 0 10px"},children:"Usuários"}),C.jsx("p",{style:{color:"#78716c",fontSize:"14px",lineHeight:1.7,margin:0},children:"Colaboradores terão acessos definidos conforme suas responsabilidades e unidades autorizadas."})]})]})]})}),C.jsx("section",{id:"planos",style:{...H.section,background:"#fff7ed"},children:C.jsxs("div",{style:{...H.container,textAlign:"center"},children:[C.jsx("span",{style:H.eyebrow,children:"Planos e condições"}),C.jsx("h2",{style:H.sectionTitle,children:"Uma solução que poderá acompanhar sua estrutura."}),C.jsx("p",{style:{...H.sectionText,marginBottom:"30px"},children:"Os planos e as condições comerciais ainda estão em formação. A proposta é permitir opções compatíveis com diferentes portes e necessidades de operação."}),C.jsxs("div",{style:{...H.card,maxWidth:"650px",margin:"0 auto",padding:"35px 25px"},children:[C.jsx("div",{style:{fontSize:"38px",marginBottom:"15px"},children:"🐾"}),C.jsx("h3",{style:{color:"#9a3412",fontSize:"22px",margin:"0 0 12px"},children:"Em breve"}),C.jsx("p",{style:{color:"#78716c",fontSize:"14px",lineHeight:1.7,margin:"0 0 22px"},children:"Entre em contato para demonstrar seu interesse e acompanhar as novidades sobre os planos do VET MAX."}),C.jsx("a",{href:"#contato",style:H.primaryButton,children:"Tenho interesse"})]})]})}),C.jsx("section",{id:"duvidas",style:{...H.section,background:"#fffdfa"},children:C.jsxs("div",{style:{...H.container,textAlign:"center"},children:[C.jsx("span",{style:H.eyebrow,children:"Dúvidas frequentes"}),C.jsx("h2",{style:H.sectionTitle,children:"Algumas respostas para começar."}),C.jsx("div",{style:{maxWidth:"800px",margin:"35px auto 0",display:"grid",gap:"13px",textAlign:"left"},children:nk.map(g=>C.jsxs("details",{style:{...H.card,padding:"20px 22px"},children:[C.jsx("summary",{style:{color:"#9a3412",fontWeight:"bold",cursor:"pointer",lineHeight:1.5},children:g.question}),C.jsx("p",{style:{color:"#78716c",fontSize:"14px",lineHeight:1.7,margin:"13px 0 0"},children:g.answer})]},g.question))})]})}),C.jsx("section",{id:"contato",style:{...H.section,background:"#fff7ed"},children:C.jsx("div",{style:{...H.container},children:C.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))",alignItems:"start",gap:"35px"},children:[C.jsxs("div",{children:[C.jsx("span",{style:H.eyebrow,children:"Fale conosco"}),C.jsx("h2",{style:{...H.sectionTitle,maxWidth:"480px"},children:"Vamos conversar sobre a evolução da sua gestão?"}),C.jsx("p",{style:{color:"#78716c",fontSize:"15px",lineHeight:1.8,maxWidth:"480px"},children:"Envie sua mensagem para conhecer melhor o VET MAX, acompanhar o desenvolvimento ou demonstrar interesse na plataforma."}),C.jsxs("div",{style:{marginTop:"25px",display:"flex",alignItems:"center",gap:"12px",color:"#9a3412",fontSize:"14px",fontWeight:"bold"},children:[C.jsx("span",{style:{fontSize:"22px"},children:"✉️"}),"vetmaxgestao@gmail.com"]})]}),C.jsxs("form",{onSubmit:m,style:{...H.card,padding:"28px"},children:[C.jsx("h3",{style:{color:"#9a3412",fontSize:"20px",margin:"0 0 22px"},children:"Envie sua mensagem"}),C.jsx("div",{style:{position:"absolute",left:"-10000px",width:"1px",height:"1px",overflow:"hidden"},"aria-hidden":"true",children:C.jsxs("label",{children:["Não preencha este campo",C.jsx("input",{type:"text",name:"website",value:M,onChange:g=>I(g.target.value),tabIndex:"-1",autoComplete:"off"})]})}),C.jsxs("div",{style:{marginBottom:"15px"},children:[C.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"bold",marginBottom:"7px",color:"#57534e"},children:"Nome"}),C.jsx("input",{className:"vet-contact-input",name:"name",value:x.name,onChange:_,required:!0,maxLength:"100",placeholder:"Seu nome",style:H.input})]}),C.jsxs("div",{style:{marginBottom:"15px"},children:[C.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"bold",marginBottom:"7px",color:"#57534e"},children:"E-mail"}),C.jsx("input",{className:"vet-contact-input",type:"email",name:"email",value:x.email,onChange:_,required:!0,maxLength:"150",placeholder:"seu@email.com",style:H.input})]}),C.jsxs("div",{style:{marginBottom:"15px"},children:[C.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"bold",marginBottom:"7px",color:"#57534e"},children:"Assunto"}),C.jsxs("select",{className:"vet-contact-input",name:"subject",value:x.subject,onChange:_,style:H.input,children:[C.jsx("option",{children:"Quero conhecer o VET MAX"}),C.jsx("option",{children:"Interesse em planos e preços"}),C.jsx("option",{children:"Tenho uma clínica veterinária"}),C.jsx("option",{children:"Tenho um hospital veterinário"}),C.jsx("option",{children:"Tenho uma rede de unidades"}),C.jsx("option",{children:"Outra dúvida"})]})]}),C.jsxs("div",{style:{marginBottom:"18px"},children:[C.jsx("label",{style:{display:"block",fontSize:"13px",fontWeight:"bold",marginBottom:"7px",color:"#57534e"},children:"Mensagem"}),C.jsx("textarea",{className:"vet-contact-input",name:"message",value:x.message,onChange:_,required:!0,maxLength:"3000",rows:"5",placeholder:"Conte como podemos ajudar...",style:{...H.input,resize:"vertical",lineHeight:1.6}})]}),D&&C.jsx("div",{role:"status",style:{padding:"12px",borderRadius:"9px",marginBottom:"15px",fontSize:"13px",lineHeight:1.5,color:D.type==="success"?"#166534":"#991b1b",background:D.type==="success"?"#dcfce7":"#fee2e2"},children:D.message}),C.jsx("button",{type:"submit",disabled:w,style:{...H.primaryButton,width:"100%",opacity:w?.7:1,cursor:w?"wait":"pointer"},children:w?"Enviando mensagem...":"Enviar mensagem"}),C.jsx("p",{style:{color:"#a8a29e",fontSize:"11px",lineHeight:1.6,margin:"13px 0 0",textAlign:"center"},children:"Seus dados serão utilizados para responder à sua solicitação."})]})]})})})]}),C.jsx(rg,{})]})}zu.createRoot(document.getElementById("root")).render(C.jsx(tE.StrictMode,{children:C.jsx(ik,{})}));
