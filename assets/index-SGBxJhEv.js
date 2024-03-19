(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hh(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Lt={},bs=[],We=()=>{},S1=()=>!1,gl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fh=e=>e.startsWith("onUpdate:"),re=Object.assign,dh=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R1=Object.prototype.hasOwnProperty,Tt=(e,t)=>R1.call(e,t),J=Array.isArray,Is=e=>mo(e)==="[object Map]",Gs=e=>mo(e)==="[object Set]",cd=e=>mo(e)==="[object Date]",ht=e=>typeof e=="function",Gt=e=>typeof e=="string",pr=e=>typeof e=="symbol",Ot=e=>e!==null&&typeof e=="object",hg=e=>(Ot(e)||ht(e))&&ht(e.then)&&ht(e.catch),fg=Object.prototype.toString,mo=e=>fg.call(e),P1=e=>mo(e).slice(8,-1),dg=e=>mo(e)==="[object Object]",ph=e=>Gt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pa=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},k1=/-(\w)/g,In=vl(e=>e.replace(k1,(t,n)=>n?n.toUpperCase():"")),x1=/\B([A-Z])/g,Ys=vl(e=>e.replace(x1,"-$1").toLowerCase()),yl=vl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ec=vl(e=>e?`on${yl(e)}`:""),mr=(e,t)=>!Object.is(e,t),ma=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Na=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Da=e=>{const t=parseFloat(e);return isNaN(t)?e:t},O1=e=>{const t=Gt(e)?Number(e):NaN;return isNaN(t)?e:t};let ud;const pg=()=>ud||(ud=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function is(e){if(J(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Gt(r)?V1(r):is(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Gt(e)||Ot(e))return e}const N1=/;(?![^(]*\))/g,D1=/:([^]+)/,M1=/\/\*[^]*?\*\//g;function V1(e){const t={};return e.replace(M1,"").split(N1).forEach(n=>{if(n){const r=n.split(D1);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function he(e){let t="";if(Gt(e))t=e;else if(J(e))for(let n=0;n<e.length;n++){const r=he(e[n]);r&&(t+=r+" ")}else if(Ot(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function hd(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Gt(t)&&(e.class=he(t)),n&&(e.style=is(n)),e}const L1="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F1=hh(L1);function mg(e){return!!e||e===""}function U1(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Yr(e[r],t[r]);return n}function Yr(e,t){if(e===t)return!0;let n=cd(e),r=cd(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=pr(e),r=pr(t),n||r)return e===t;if(n=J(e),r=J(t),n||r)return n&&r?U1(e,t):!1;if(n=Ot(e),r=Ot(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Yr(e[o],t[o]))return!1}}return String(e)===String(t)}function mh(e,t){return e.findIndex(n=>Yr(n,t))}const Mt=e=>Gt(e)?e:e==null?"":J(e)||Ot(e)&&(e.toString===fg||!ht(e.toString))?JSON.stringify(e,gg,2):String(e),gg=(e,t)=>t&&t.__v_isRef?gg(e,t.value):Is(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[bc(r,i)+" =>"]=s,n),{})}:Gs(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>bc(n))}:pr(t)?bc(t):Ot(t)&&!J(t)&&!dg(t)?String(t):t,bc=(e,t="")=>{var n;return pr(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class B1{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!t&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Je;try{return Je=this,t()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function j1(e,t=Je){t&&t.active&&t.effects.push(e)}function $1(){return Je}let Hr;class gh{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,j1(this,s)}get dirty(){if(this._dirtyLevel===1){os();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(H1(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),as()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=or,n=Hr;try{return or=!0,Hr=this,this._runnings++,fd(this),this.fn()}finally{dd(this),this._runnings--,Hr=n,or=t}}stop(){var t;this.active&&(fd(this),dd(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function H1(e){return e.value}function fd(e){e._trackId++,e._depsLength=0}function dd(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)vg(e.deps[t],e);e.deps.length=e._depsLength}}function vg(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let or=!0,ru=0;const yg=[];function os(){yg.push(or),or=!1}function as(){const e=yg.pop();or=e===void 0?!0:e}function vh(){ru++}function yh(){for(ru--;!ru&&su.length;)su.shift()()}function _g(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&vg(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const su=[];function wg(e,t,n){vh();for(const r of e.keys())if(e.get(r)===r._trackId){if(r._dirtyLevel<t&&!(r._runnings&&!r.allowRecurse)){const s=r._dirtyLevel;r._dirtyLevel=t,s===0&&(r._shouldSchedule=!0,r.trigger())}r.scheduler&&r._shouldSchedule&&(!r._runnings||r.allowRecurse)&&(r._shouldSchedule=!1,su.push(r.scheduler))}yh()}const Eg=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},iu=new WeakMap,zr=Symbol(""),ou=Symbol("");function De(e,t,n){if(or&&Hr){let r=iu.get(e);r||iu.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Eg(()=>r.delete(n))),_g(Hr,s)}}function On(e,t,n,r,s,i){const o=iu.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&J(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!pr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":J(e)?ph(n)&&a.push(o.get("length")):(a.push(o.get(zr)),Is(e)&&a.push(o.get(ou)));break;case"delete":J(e)||(a.push(o.get(zr)),Is(e)&&a.push(o.get(ou)));break;case"set":Is(e)&&a.push(o.get(zr));break}vh();for(const l of a)l&&wg(l,2);yh()}const z1=hh("__proto__,__v_isRef,__isVue"),bg=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pr)),pd=q1();function q1(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=At(this);for(let i=0,o=this.length;i<o;i++)De(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(At)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){os(),vh();const r=At(this)[t].apply(this,n);return yh(),as(),r}}),e}function W1(e){const t=At(this);return De(t,"has",e),t.hasOwnProperty(e)}class Ig{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?i2:Sg:i?Cg:Ag).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=J(t);if(!s){if(o&&Tt(pd,n))return Reflect.get(pd,n,r);if(n==="hasOwnProperty")return W1}const a=Reflect.get(t,n,r);return(pr(n)?bg.has(n):z1(n))||(s||De(t,"get",n),i)?a:Me(a)?o&&ph(n)?a:a.value:Ot(a)?s?Pg(a):wl(a):a}}class Tg extends Ig{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._shallow){const l=Os(i);if(!Ma(r)&&!Os(r)&&(i=At(i),r=At(r)),!J(t)&&Me(i)&&!Me(r))return l?!1:(i.value=r,!0)}const o=J(t)&&ph(n)?Number(n)<t.length:Tt(t,n),a=Reflect.set(t,n,r,s);return t===At(s)&&(o?mr(r,i)&&On(t,"set",n,r):On(t,"add",n,r)),a}deleteProperty(t,n){const r=Tt(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&On(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!pr(n)||!bg.has(n))&&De(t,"has",n),r}ownKeys(t){return De(t,"iterate",J(t)?"length":zr),Reflect.ownKeys(t)}}class K1 extends Ig{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const G1=new Tg,Y1=new K1,Q1=new Tg(!0),_h=e=>e,_l=e=>Reflect.getPrototypeOf(e);function jo(e,t,n=!1,r=!1){e=e.__v_raw;const s=At(e),i=At(t);n||(mr(t,i)&&De(s,"get",t),De(s,"get",i));const{has:o}=_l(s),a=r?_h:n?bh:Vi;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function $o(e,t=!1){const n=this.__v_raw,r=At(n),s=At(e);return t||(mr(e,s)&&De(r,"has",e),De(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Ho(e,t=!1){return e=e.__v_raw,!t&&De(At(e),"iterate",zr),Reflect.get(e,"size",e)}function md(e){e=At(e);const t=At(this);return _l(t).has.call(t,e)||(t.add(e),On(t,"add",e,e)),this}function gd(e,t){t=At(t);const n=At(this),{has:r,get:s}=_l(n);let i=r.call(n,e);i||(e=At(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?mr(t,o)&&On(n,"set",e,t):On(n,"add",e,t),this}function vd(e){const t=At(this),{has:n,get:r}=_l(t);let s=n.call(t,e);s||(e=At(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&On(t,"delete",e,void 0),i}function yd(){const e=At(this),t=e.size!==0,n=e.clear();return t&&On(e,"clear",void 0,void 0),n}function zo(e,t){return function(r,s){const i=this,o=i.__v_raw,a=At(o),l=t?_h:e?bh:Vi;return!e&&De(a,"iterate",zr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function qo(e,t,n){return function(...r){const s=this.__v_raw,i=At(s),o=Is(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?_h:t?bh:Vi;return!t&&De(i,"iterate",l?ou:zr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function zn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function X1(){const e={get(i){return jo(this,i)},get size(){return Ho(this)},has:$o,add:md,set:gd,delete:vd,clear:yd,forEach:zo(!1,!1)},t={get(i){return jo(this,i,!1,!0)},get size(){return Ho(this)},has:$o,add:md,set:gd,delete:vd,clear:yd,forEach:zo(!1,!0)},n={get(i){return jo(this,i,!0)},get size(){return Ho(this,!0)},has(i){return $o.call(this,i,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:zo(!0,!1)},r={get(i){return jo(this,i,!0,!0)},get size(){return Ho(this,!0)},has(i){return $o.call(this,i,!0)},add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear"),forEach:zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=qo(i,!1,!1),n[i]=qo(i,!0,!1),t[i]=qo(i,!1,!0),r[i]=qo(i,!0,!0)}),[e,n,t,r]}const[J1,Z1,t2,e2]=X1();function wh(e,t){const n=t?e?e2:t2:e?Z1:J1;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Tt(n,s)&&s in r?n:r,s,i)}const n2={get:wh(!1,!1)},r2={get:wh(!1,!0)},s2={get:wh(!0,!1)},Ag=new WeakMap,Cg=new WeakMap,Sg=new WeakMap,i2=new WeakMap;function o2(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a2(e){return e.__v_skip||!Object.isExtensible(e)?0:o2(P1(e))}function wl(e){return Os(e)?e:Eh(e,!1,G1,n2,Ag)}function Rg(e){return Eh(e,!1,Q1,r2,Cg)}function Pg(e){return Eh(e,!0,Y1,s2,Sg)}function Eh(e,t,n,r,s){if(!Ot(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=a2(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Ts(e){return Os(e)?Ts(e.__v_raw):!!(e&&e.__v_isReactive)}function Os(e){return!!(e&&e.__v_isReadonly)}function Ma(e){return!!(e&&e.__v_isShallow)}function kg(e){return Ts(e)||Os(e)}function At(e){const t=e&&e.__v_raw;return t?At(t):e}function xg(e){return Na(e,"__v_skip",!0),e}const Vi=e=>Ot(e)?wl(e):e,bh=e=>Ot(e)?Pg(e):e;class Og{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new gh(()=>t(this._value),()=>au(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=At(this);return(!t._cacheable||t.effect.dirty)&&mr(t._value,t._value=t.effect.run())&&au(t,2),Ng(t),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function l2(e,t,n=!1){let r,s;const i=ht(e);return i?(r=e,s=We):(r=e.get,s=e.set),new Og(r,s,i||!s,n)}function Ng(e){or&&Hr&&(e=At(e),_g(Hr,e.dep||(e.dep=Eg(()=>e.dep=void 0,e instanceof Og?e:void 0))))}function au(e,t=2,n){e=At(e);const r=e.dep;r&&wg(r,t)}function Me(e){return!!(e&&e.__v_isRef===!0)}function rt(e){return Dg(e,!1)}function c2(e){return Dg(e,!0)}function Dg(e,t){return Me(e)?e:new u2(e,t)}class u2{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:At(t),this._value=n?t:Vi(t)}get value(){return Ng(this),this._value}set value(t){const n=this.__v_isShallow||Ma(t)||Os(t);t=n?t:At(t),mr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Vi(t),au(this,2))}}function Dt(e){return Me(e)?e.value:e}const h2={get:(e,t,n)=>Dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Mg(e){return Ts(e)?e:new Proxy(e,h2)}/**
* @vue/runtime-core v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ar(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){El(i,t,n)}return s}function Ke(e,t,n,r){if(ht(e)){const i=ar(e,t,n,r);return i&&hg(i)&&i.catch(o=>{El(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(Ke(e[i],t,n,r));return s}function El(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ar(l,null,10,[e,o,a]);return}}f2(e,n,s,r)}function f2(e,t,n,r=!0){console.error(e)}let Li=!1,lu=!1;const Ee=[];let hn=0;const As=[];let Xn=null,Dr=0;const Vg=Promise.resolve();let Ih=null;function Th(e){const t=Ih||Vg;return e?t.then(this?e.bind(this):e):t}function d2(e){let t=hn+1,n=Ee.length;for(;t<n;){const r=t+n>>>1,s=Ee[r],i=Fi(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function Ah(e){(!Ee.length||!Ee.includes(e,Li&&e.allowRecurse?hn+1:hn))&&(e.id==null?Ee.push(e):Ee.splice(d2(e.id),0,e),Lg())}function Lg(){!Li&&!lu&&(lu=!0,Ih=Vg.then(Ug))}function p2(e){const t=Ee.indexOf(e);t>hn&&Ee.splice(t,1)}function m2(e){J(e)?As.push(...e):(!Xn||!Xn.includes(e,e.allowRecurse?Dr+1:Dr))&&As.push(e),Lg()}function _d(e,t,n=Li?hn+1:0){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ee.splice(n,1),n--,r()}}}function Fg(e){if(As.length){const t=[...new Set(As)].sort((n,r)=>Fi(n)-Fi(r));if(As.length=0,Xn){Xn.push(...t);return}for(Xn=t,Dr=0;Dr<Xn.length;Dr++)Xn[Dr]();Xn=null,Dr=0}}const Fi=e=>e.id==null?1/0:e.id,g2=(e,t)=>{const n=Fi(e)-Fi(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ug(e){lu=!1,Li=!0,Ee.sort(g2);try{for(hn=0;hn<Ee.length;hn++){const t=Ee[hn];t&&t.active!==!1&&ar(t,null,14)}}finally{hn=0,Ee.length=0,Fg(),Li=!1,Ih=null,(Ee.length||As.length)&&Ug()}}function v2(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Lt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Lt;f&&(s=n.map(p=>Gt(p)?p.trim():p)),h&&(s=n.map(Da))}let a,l=r[a=Ec(t)]||r[a=Ec(In(t))];!l&&i&&(l=r[a=Ec(Ys(t))]),l&&Ke(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ke(c,e,6,s)}}function Bg(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!ht(e)){const l=c=>{const u=Bg(c,t,!0);u&&(a=!0,re(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(Ot(e)&&r.set(e,null),null):(J(i)?i.forEach(l=>o[l]=null):re(o,i),Ot(e)&&r.set(e,o),o)}function bl(e,t){return!e||!gl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Tt(e,t[0].toLowerCase()+t.slice(1))||Tt(e,Ys(t))||Tt(e,t))}let ee=null,Il=null;function Va(e){const t=ee;return ee=e,Il=e&&e.type.__scopeId||null,t}function ls(e){Il=e}function cs(){Il=null}function zt(e,t=ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&xd(-1);const i=Va(t);let o;try{o=e(...s)}finally{Va(i),r._d&&xd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ic(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:v,inheritAttrs:E}=e;let T,y;const b=Va(e);try{if(n.shapeFlag&4){const w=s||r,N=w;T=un(u.call(N,w,h,i,p,f,v)),y=l}else{const w=t;T=un(w.length>1?w(i,{attrs:l,slots:a,emit:c}):w(i,null)),y=t.props?l:y2(l)}}catch(w){Ti.length=0,El(w,e,1),T=st(Ge)}let R=T;if(y&&E!==!1){const w=Object.keys(y),{shapeFlag:N}=R;w.length&&N&7&&(o&&w.some(fh)&&(y=_2(y,o)),R=gr(R,y))}return n.dirs&&(R=gr(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),T=R,Va(b),T}const y2=e=>{let t;for(const n in e)(n==="class"||n==="style"||gl(n))&&((t||(t={}))[n]=e[n]);return t},_2=(e,t)=>{const n={};for(const r in e)(!fh(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function w2(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?wd(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!bl(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wd(r,o,c):!0:!!o;return!1}function wd(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!bl(n,i))return!0}return!1}function E2({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ch="components";function He(e,t){return $g(Ch,e,!0,t)||e}const jg=Symbol.for("v-ndc");function Wo(e){return Gt(e)?$g(Ch,e,!1)||e:e||jg}function $g(e,t,n=!0,r=!1){const s=ee||de;if(s){const i=s.type;if(e===Ch){const a=mw(i,!1);if(a&&(a===t||a===In(t)||a===yl(In(t))))return i}const o=Ed(s[e]||i[e],t)||Ed(s.appContext[e],t);return!o&&r?i:o}}function Ed(e,t){return e&&(e[t]||e[In(t)]||e[yl(In(t))])}const b2=e=>e.__isSuspense;function I2(e,t){t&&t.pendingBranch?J(e)?t.effects.push(...e):t.effects.push(e):m2(e)}const T2=Symbol.for("v-scx"),A2=()=>yn(T2);function lr(e,t){return Sh(e,null,t)}const Ko={};function qr(e,t,n){return Sh(e,t,n)}function Sh(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Lt){if(t&&i){const O=t;t=(...Q)=>{O(...Q),N()}}const l=de,c=O=>r===!0?O:Vr(O,r===!1?1:void 0);let u,h=!1,f=!1;if(Me(e)?(u=()=>e.value,h=Ma(e)):Ts(e)?(u=()=>c(e),h=!0):J(e)?(f=!0,h=e.some(O=>Ts(O)||Ma(O)),u=()=>e.map(O=>{if(Me(O))return O.value;if(Ts(O))return c(O);if(ht(O))return ar(O,l,2)})):ht(e)?t?u=()=>ar(e,l,2):u=()=>(p&&p(),Ke(e,l,3,[v])):u=We,t&&r){const O=u;u=()=>Vr(O())}let p,v=O=>{p=R.onStop=()=>{ar(O,l,4),p=R.onStop=void 0}},E;if(Pl)if(v=We,t?n&&Ke(t,l,3,[u(),f?[]:void 0,v]):u(),s==="sync"){const O=A2();E=O.__watcherHandles||(O.__watcherHandles=[])}else return We;let T=f?new Array(e.length).fill(Ko):Ko;const y=()=>{if(!(!R.active||!R.dirty))if(t){const O=R.run();(r||h||(f?O.some((Q,z)=>mr(Q,T[z])):mr(O,T)))&&(p&&p(),Ke(t,l,3,[O,T===Ko?void 0:f&&T[0]===Ko?[]:T,v]),T=O)}else R.run()};y.allowRecurse=!!t;let b;s==="sync"?b=y:s==="post"?b=()=>Ne(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),b=()=>Ah(y));const R=new gh(u,We,b),w=$1(),N=()=>{R.stop(),w&&dh(w.effects,R)};return t?n?y():T=R.run():s==="post"?Ne(R.run.bind(R),l&&l.suspense):R.run(),E&&E.push(N),N}function C2(e,t,n){const r=this.proxy,s=Gt(e)?e.includes(".")?Hg(r,e):()=>r[e]:e.bind(r,r);let i;ht(t)?i=t:(i=t.handler,n=t);const o=go(this),a=Sh(s,i.bind(r),n);return o(),a}function Hg(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vr(e,t,n=0,r){if(!Ot(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Me(e))Vr(e.value,t,n,r);else if(J(e))for(let s=0;s<e.length;s++)Vr(e[s],t,n,r);else if(Gs(e)||Is(e))e.forEach(s=>{Vr(s,t,n,r)});else if(dg(e))for(const s in e)Vr(e[s],t,n,r);return e}function La(e,t){if(ee===null)return e;const n=kl(ee)||ee.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,l=Lt]=t[s];i&&(ht(i)&&(i={mounted:i,updated:i}),i.deep&&Vr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Pr(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(os(),Ke(l,n,8,[e.el,a,e,t]),as())}}const Jn=Symbol("_leaveCb"),Go=Symbol("_enterCb");function S2(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ui(()=>{e.isMounted=!0}),Gg(()=>{e.isUnmounting=!0}),e}const $e=[Function,Array],zg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},R2={name:"BaseTransition",props:zg,setup(e,{slots:t}){const n=a0(),r=S2();let s;return()=>{const i=t.default&&Wg(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const E of i)if(E.type!==Ge){o=E;break}}const a=At(e),{mode:l}=a;if(r.isLeaving)return Tc(o);const c=bd(o);if(!c)return Tc(o);const u=cu(c,a,r,n);uu(c,u);const h=n.subTree,f=h&&bd(h);let p=!1;const{getTransitionKey:v}=c.type;if(v){const E=v();s===void 0?s=E:E!==s&&(s=E,p=!0)}if(f&&f.type!==Ge&&(!Mr(c,f)||p)){const E=cu(f,a,r,n);if(uu(f,E),l==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Tc(o);l==="in-out"&&c.type!==Ge&&(E.delayLeave=(T,y,b)=>{const R=qg(r,f);R[String(f.key)]=f,T[Jn]=()=>{y(),T[Jn]=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},P2=R2;function qg(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function cu(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:E,onAppear:T,onAfterAppear:y,onAppearCancelled:b}=t,R=String(e.key),w=qg(n,e),N=(z,Y)=>{z&&Ke(z,r,9,Y)},O=(z,Y)=>{const lt=Y[1];N(z,Y),J(z)?z.every($t=>$t.length<=1)&&lt():z.length<=1&&lt()},Q={mode:i,persisted:o,beforeEnter(z){let Y=a;if(!n.isMounted)if(s)Y=E||a;else return;z[Jn]&&z[Jn](!0);const lt=w[R];lt&&Mr(e,lt)&&lt.el[Jn]&&lt.el[Jn](),N(Y,[z])},enter(z){let Y=l,lt=c,$t=u;if(!n.isMounted)if(s)Y=T||l,lt=y||c,$t=b||u;else return;let q=!1;const _t=z[Go]=Qt=>{q||(q=!0,Qt?N($t,[z]):N(lt,[z]),Q.delayedLeave&&Q.delayedLeave(),z[Go]=void 0)};Y?O(Y,[z,_t]):_t()},leave(z,Y){const lt=String(e.key);if(z[Go]&&z[Go](!0),n.isUnmounting)return Y();N(h,[z]);let $t=!1;const q=z[Jn]=_t=>{$t||($t=!0,Y(),_t?N(v,[z]):N(p,[z]),z[Jn]=void 0,w[lt]===e&&delete w[lt])};w[lt]=e,f?O(f,[z,q]):q()},clone(z){return cu(z,t,n,r)}};return Q}function Tc(e){if(Tl(e))return e=gr(e),e.children=null,e}function bd(e){return Tl(e)?e.children?e.children[0]:void 0:e}function uu(e,t){e.shapeFlag&6&&e.component?uu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wg(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ut?(o.patchFlag&128&&s++,r=r.concat(Wg(o.children,t,a))):(t||o.type!==Ge)&&r.push(a!=null?gr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Qs(e,t){return ht(e)?re({name:e.name},t,{setup:e}):e}const bi=e=>!!e.type.__asyncLoader,Tl=e=>e.type.__isKeepAlive;function k2(e,t){Kg(e,"a",t)}function x2(e,t){Kg(e,"da",t)}function Kg(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Al(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Tl(s.parent.vnode)&&O2(r,t,n,s),s=s.parent}}function O2(e,t,n,r){const s=Al(t,e,r,!0);Rh(()=>{dh(r[t],s)},n)}function Al(e,t,n=de,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;os();const a=go(n),l=Ke(t,n,e,o);return a(),as(),l});return r?s.unshift(i):s.push(i),i}}const Bn=e=>(t,n=de)=>(!Pl||e==="sp")&&Al(e,(...r)=>t(...r),n),N2=Bn("bm"),Ui=Bn("m"),D2=Bn("bu"),M2=Bn("u"),Gg=Bn("bum"),Rh=Bn("um"),V2=Bn("sp"),L2=Bn("rtg"),F2=Bn("rtc");function U2(e,t=de){Al("ec",e,t)}function Bi(e,t,n,r){let s;const i=n&&n[r];if(J(e)||Gt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(Ot(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function fn(e,t,n={},r,s){if(ee.isCE||ee.parent&&bi(ee.parent)&&ee.parent.isCE)return t!=="default"&&(n.name=t),st("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),K();const o=i&&Yg(i(n)),a=en(Ut,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Yg(e){return e.some(t=>Ba(t)?!(t.type===Ge||t.type===Ut&&!Yg(t.children)):!0)?e:null}const hu=e=>e?l0(e)?kl(e)||e.proxy:hu(e.parent):null,Ii=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hu(e.parent),$root:e=>hu(e.root),$emit:e=>e.emit,$options:e=>Ph(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Ah(e.update)}),$nextTick:e=>e.n||(e.n=Th.bind(e.proxy)),$watch:e=>C2.bind(e)}),Ac=(e,t)=>e!==Lt&&!e.__isScriptSetup&&Tt(e,t),B2={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ac(r,t))return o[t]=1,r[t];if(s!==Lt&&Tt(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&Tt(c,t))return o[t]=3,i[t];if(n!==Lt&&Tt(n,t))return o[t]=4,n[t];fu&&(o[t]=0)}}const u=Ii[t];let h,f;if(u)return t==="$attrs"&&De(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Lt&&Tt(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,Tt(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ac(s,t)?(s[t]=n,!0):r!==Lt&&Tt(r,t)?(r[t]=n,!0):Tt(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==Lt&&Tt(e,o)||Ac(t,o)||(a=i[0])&&Tt(a,o)||Tt(r,o)||Tt(Ii,o)||Tt(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Tt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function j2(){return $2().attrs}function $2(){const e=a0();return e.setupContext||(e.setupContext=u0(e))}function Id(e){return J(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let fu=!0;function H2(e){const t=Ph(e),n=e.proxy,r=e.ctx;fu=!1,t.beforeCreate&&Td(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:E,deactivated:T,beforeDestroy:y,beforeUnmount:b,destroyed:R,unmounted:w,render:N,renderTracked:O,renderTriggered:Q,errorCaptured:z,serverPrefetch:Y,expose:lt,inheritAttrs:$t,components:q,directives:_t,filters:Qt}=t;if(c&&z2(c,r,null),o)for(const bt in o){const dt=o[bt];ht(dt)&&(r[bt]=dt.bind(n))}if(s){const bt=s.call(n,n);Ot(bt)&&(e.data=wl(bt))}if(fu=!0,i)for(const bt in i){const dt=i[bt],Xt=ht(dt)?dt.bind(n,n):ht(dt.get)?dt.get.bind(n,n):We,Be=!ht(dt)&&ht(dt.set)?dt.set.bind(n):We,je=It({get:Xt,set:Be});Object.defineProperty(r,bt,{enumerable:!0,configurable:!0,get:()=>je.value,set:ve=>je.value=ve})}if(a)for(const bt in a)Qg(a[bt],r,n,bt);if(l){const bt=ht(l)?l.call(n):l;Reflect.ownKeys(bt).forEach(dt=>{ga(dt,bt[dt])})}u&&Td(u,e,"c");function Nt(bt,dt){J(dt)?dt.forEach(Xt=>bt(Xt.bind(n))):dt&&bt(dt.bind(n))}if(Nt(N2,h),Nt(Ui,f),Nt(D2,p),Nt(M2,v),Nt(k2,E),Nt(x2,T),Nt(U2,z),Nt(F2,O),Nt(L2,Q),Nt(Gg,b),Nt(Rh,w),Nt(V2,Y),J(lt))if(lt.length){const bt=e.exposed||(e.exposed={});lt.forEach(dt=>{Object.defineProperty(bt,dt,{get:()=>n[dt],set:Xt=>n[dt]=Xt})})}else e.exposed||(e.exposed={});N&&e.render===We&&(e.render=N),$t!=null&&(e.inheritAttrs=$t),q&&(e.components=q),_t&&(e.directives=_t)}function z2(e,t,n=We){J(e)&&(e=du(e));for(const r in e){const s=e[r];let i;Ot(s)?"default"in s?i=yn(s.from||r,s.default,!0):i=yn(s.from||r):i=yn(s),Me(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Td(e,t,n){Ke(J(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qg(e,t,n,r){const s=r.includes(".")?Hg(n,r):()=>n[r];if(Gt(e)){const i=t[e];ht(i)&&qr(s,i)}else if(ht(e))qr(s,e.bind(n));else if(Ot(e))if(J(e))e.forEach(i=>Qg(i,t,n,r));else{const i=ht(e.handler)?e.handler.bind(n):t[e.handler];ht(i)&&qr(s,i,e)}}function Ph(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>Fa(l,c,o,!0)),Fa(l,t,o)),Ot(t)&&i.set(t,l),l}function Fa(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Fa(e,i,n,!0),s&&s.forEach(o=>Fa(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=q2[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const q2={data:Ad,props:Cd,emits:Cd,methods:di,computed:di,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:di,directives:di,watch:K2,provide:Ad,inject:W2};function Ad(e,t){return t?e?function(){return re(ht(e)?e.call(this,this):e,ht(t)?t.call(this,this):t)}:t:e}function W2(e,t){return di(du(e),du(t))}function du(e){if(J(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function di(e,t){return e?re(Object.create(null),e,t):t}function Cd(e,t){return e?J(e)&&J(t)?[...new Set([...e,...t])]:re(Object.create(null),Id(e),Id(t??{})):t}function K2(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function Xg(){return{app:null,config:{isNativeTag:S1,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let G2=0;function Y2(e,t){return function(r,s=null){ht(r)||(r=re({},r)),s!=null&&!Ot(s)&&(s=null);const i=Xg(),o=new WeakSet;let a=!1;const l=i.app={_uid:G2++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&ht(c.install)?(o.add(c),c.install(l,...u)):ht(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const f=st(r,s);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(f,c):e(f,c,h),a=!0,l._container=c,c.__vue_app__=l,kl(f.component)||f.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){Ua=l;try{return c()}finally{Ua=null}}};return l}}let Ua=null;function ga(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function yn(e,t,n=!1){const r=de||ee;if(r||Ua){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ua._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ht(t)?t.call(r&&r.proxy):t}}function Q2(e,t,n,r=!1){const s={},i={};Na(i,Sl,1),e.propsDefaults=Object.create(null),Jg(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Rg(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function X2(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=At(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(bl(e.emitsOptions,f))continue;const p=t[f];if(l)if(Tt(i,f))p!==i[f]&&(i[f]=p,c=!0);else{const v=In(f);s[v]=pu(l,a,v,p,e,!1)}else p!==i[f]&&(i[f]=p,c=!0)}}}else{Jg(e,t,s,i)&&(c=!0);let u;for(const h in a)(!t||!Tt(t,h)&&((u=Ys(h))===h||!Tt(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=pu(l,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!Tt(t,h))&&(delete i[h],c=!0)}c&&On(e,"set","$attrs")}function Jg(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(pa(l))continue;const c=t[l];let u;s&&Tt(s,u=In(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:bl(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=At(n),c=a||Lt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=pu(s,l,h,c[h],e,!Tt(c,h))}}return o}function pu(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Tt(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ht(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=go(s);r=c[n]=l.call(null,t),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ys(n))&&(r=!0))}return r}function Zg(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!ht(e)){const u=h=>{l=!0;const[f,p]=Zg(h,t,!0);re(o,f),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return Ot(e)&&r.set(e,bs),bs;if(J(i))for(let u=0;u<i.length;u++){const h=In(i[u]);Sd(h)&&(o[h]=Lt)}else if(i)for(const u in i){const h=In(u);if(Sd(h)){const f=i[u],p=o[h]=J(f)||ht(f)?{type:f}:re({},f);if(p){const v=kd(Boolean,p.type),E=kd(String,p.type);p[0]=v>-1,p[1]=E<0||v<E,(v>-1||Tt(p,"default"))&&a.push(h)}}}const c=[o,a];return Ot(e)&&r.set(e,c),c}function Sd(e){return e[0]!=="$"}function Rd(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Pd(e,t){return Rd(e)===Rd(t)}function kd(e,t){return J(t)?t.findIndex(n=>Pd(n,e)):ht(t)&&Pd(t,e)?0:-1}const t0=e=>e[0]==="_"||e==="$stable",kh=e=>J(e)?e.map(un):[un(e)],J2=(e,t,n)=>{if(t._n)return t;const r=zt((...s)=>kh(t(...s)),n);return r._c=!1,r},e0=(e,t,n)=>{const r=e._ctx;for(const s in e){if(t0(s))continue;const i=e[s];if(ht(i))t[s]=J2(s,i,r);else if(i!=null){const o=kh(i);t[s]=()=>o}}},n0=(e,t)=>{const n=kh(t);e.slots.default=()=>n},Z2=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=At(t),Na(t,"_",n)):e0(t,e.slots={})}else e.slots={},t&&n0(e,t);Na(e.slots,Sl,1)},tw=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=Lt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(re(s,t),!n&&a===1&&delete s._):(i=!t.$stable,e0(t,s)),o=t}else t&&(n0(e,t),o={default:1});if(i)for(const a in s)!t0(a)&&o[a]==null&&delete s[a]};function mu(e,t,n,r,s=!1){if(J(e)){e.forEach((f,p)=>mu(f,t&&(J(t)?t[p]:t),n,r,s));return}if(bi(r)&&!s)return;const i=r.shapeFlag&4?kl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===Lt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Gt(c)?(u[c]=null,Tt(h,c)&&(h[c]=null)):Me(c)&&(c.value=null)),ht(l))ar(l,a,12,[o,u]);else{const f=Gt(l),p=Me(l);if(f||p){const v=()=>{if(e.f){const E=f?Tt(h,l)?h[l]:u[l]:l.value;s?J(E)&&dh(E,i):J(E)?E.includes(i)||E.push(i):f?(u[l]=[i],Tt(h,l)&&(h[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else f?(u[l]=o,Tt(h,l)&&(h[l]=o)):p&&(l.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,Ne(v,n)):v()}}}const Ne=I2;function ew(e){return nw(e)}function nw(e,t){const n=pg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=We,insertStaticContent:v}=e,E=(d,m,_,C=null,A=null,D=null,U=void 0,L=null,F=!!m.dynamicChildren)=>{if(d===m)return;d&&!Mr(d,m)&&(C=I(d),ve(d,A,D,!0),d=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:x,ref:H,shapeFlag:et}=m;switch(x){case Cl:T(d,m,_,C);break;case Ge:y(d,m,_,C);break;case va:d==null&&b(m,_,C,U);break;case Ut:q(d,m,_,C,A,D,U,L,F);break;default:et&1?N(d,m,_,C,A,D,U,L,F):et&6?_t(d,m,_,C,A,D,U,L,F):(et&64||et&128)&&x.process(d,m,_,C,A,D,U,L,F,$)}H!=null&&A&&mu(H,d&&d.ref,D,m||d,!m)},T=(d,m,_,C)=>{if(d==null)r(m.el=a(m.children),_,C);else{const A=m.el=d.el;m.children!==d.children&&c(A,m.children)}},y=(d,m,_,C)=>{d==null?r(m.el=l(m.children||""),_,C):m.el=d.el},b=(d,m,_,C)=>{[d.el,d.anchor]=v(d.children,m,_,C,d.el,d.anchor)},R=({el:d,anchor:m},_,C)=>{let A;for(;d&&d!==m;)A=f(d),r(d,_,C),d=A;r(m,_,C)},w=({el:d,anchor:m})=>{let _;for(;d&&d!==m;)_=f(d),s(d),d=_;s(m)},N=(d,m,_,C,A,D,U,L,F)=>{m.type==="svg"?U="svg":m.type==="math"&&(U="mathml"),d==null?O(m,_,C,A,D,U,L,F):Y(d,m,A,D,U,L,F)},O=(d,m,_,C,A,D,U,L)=>{let F,x;const{props:H,shapeFlag:et,transition:X,dirs:ct}=d;if(F=d.el=o(d.type,D,H&&H.is,H),et&8?u(F,d.children):et&16&&z(d.children,F,null,C,A,Cc(d,D),U,L),ct&&Pr(d,null,C,"created"),Q(F,d,d.scopeId,U,C),H){for(const Pt in H)Pt!=="value"&&!pa(Pt)&&i(F,Pt,null,H[Pt],D,d.children,C,A,pt);"value"in H&&i(F,"value",null,H.value,D),(x=H.onVnodeBeforeMount)&&cn(x,C,d)}ct&&Pr(d,null,C,"beforeMount");const mt=rw(A,X);mt&&X.beforeEnter(F),r(F,m,_),((x=H&&H.onVnodeMounted)||mt||ct)&&Ne(()=>{x&&cn(x,C,d),mt&&X.enter(F),ct&&Pr(d,null,C,"mounted")},A)},Q=(d,m,_,C,A)=>{if(_&&p(d,_),C)for(let D=0;D<C.length;D++)p(d,C[D]);if(A){let D=A.subTree;if(m===D){const U=A.vnode;Q(d,U,U.scopeId,U.slotScopeIds,A.parent)}}},z=(d,m,_,C,A,D,U,L,F=0)=>{for(let x=F;x<d.length;x++){const H=d[x]=L?Zn(d[x]):un(d[x]);E(null,H,m,_,C,A,D,U,L)}},Y=(d,m,_,C,A,D,U)=>{const L=m.el=d.el;let{patchFlag:F,dynamicChildren:x,dirs:H}=m;F|=d.patchFlag&16;const et=d.props||Lt,X=m.props||Lt;let ct;if(_&&kr(_,!1),(ct=X.onVnodeBeforeUpdate)&&cn(ct,_,m,d),H&&Pr(m,d,_,"beforeUpdate"),_&&kr(_,!0),x?lt(d.dynamicChildren,x,L,_,C,Cc(m,A),D):U||dt(d,m,L,null,_,C,Cc(m,A),D,!1),F>0){if(F&16)$t(L,m,et,X,_,C,A);else if(F&2&&et.class!==X.class&&i(L,"class",null,X.class,A),F&4&&i(L,"style",et.style,X.style,A),F&8){const mt=m.dynamicProps;for(let Pt=0;Pt<mt.length;Pt++){const Ht=mt[Pt],ie=et[Ht],Xe=X[Ht];(Xe!==ie||Ht==="value")&&i(L,Ht,ie,Xe,A,d.children,_,C,pt)}}F&1&&d.children!==m.children&&u(L,m.children)}else!U&&x==null&&$t(L,m,et,X,_,C,A);((ct=X.onVnodeUpdated)||H)&&Ne(()=>{ct&&cn(ct,_,m,d),H&&Pr(m,d,_,"updated")},C)},lt=(d,m,_,C,A,D,U)=>{for(let L=0;L<m.length;L++){const F=d[L],x=m[L],H=F.el&&(F.type===Ut||!Mr(F,x)||F.shapeFlag&70)?h(F.el):_;E(F,x,H,null,C,A,D,U,!0)}},$t=(d,m,_,C,A,D,U)=>{if(_!==C){if(_!==Lt)for(const L in _)!pa(L)&&!(L in C)&&i(d,L,_[L],null,U,m.children,A,D,pt);for(const L in C){if(pa(L))continue;const F=C[L],x=_[L];F!==x&&L!=="value"&&i(d,L,x,F,U,m.children,A,D,pt)}"value"in C&&i(d,"value",_.value,C.value,U)}},q=(d,m,_,C,A,D,U,L,F)=>{const x=m.el=d?d.el:a(""),H=m.anchor=d?d.anchor:a("");let{patchFlag:et,dynamicChildren:X,slotScopeIds:ct}=m;ct&&(L=L?L.concat(ct):ct),d==null?(r(x,_,C),r(H,_,C),z(m.children||[],_,H,A,D,U,L,F)):et>0&&et&64&&X&&d.dynamicChildren?(lt(d.dynamicChildren,X,_,A,D,U,L),(m.key!=null||A&&m===A.subTree)&&r0(d,m,!0)):dt(d,m,_,H,A,D,U,L,F)},_t=(d,m,_,C,A,D,U,L,F)=>{m.slotScopeIds=L,d==null?m.shapeFlag&512?A.ctx.activate(m,_,C,U,F):Qt(m,_,C,A,D,U,F):xe(d,m,F)},Qt=(d,m,_,C,A,D,U)=>{const L=d.component=hw(d,C,A);if(Tl(d)&&(L.ctx.renderer=$),fw(L),L.asyncDep){if(A&&A.registerDep(L,Nt),!d.el){const F=L.subTree=st(Ge);y(null,F,m,_)}}else Nt(L,d,m,_,A,D,U)},xe=(d,m,_)=>{const C=m.component=d.component;if(w2(d,m,_))if(C.asyncDep&&!C.asyncResolved){bt(C,m,_);return}else C.next=m,p2(C.update),C.effect.dirty=!0,C.update();else m.el=d.el,C.vnode=m},Nt=(d,m,_,C,A,D,U)=>{const L=()=>{if(d.isMounted){let{next:H,bu:et,u:X,parent:ct,vnode:mt}=d;{const ds=s0(d);if(ds){H&&(H.el=mt.el,bt(d,H,U)),ds.asyncDep.then(()=>{d.isUnmounted||L()});return}}let Pt=H,Ht;kr(d,!1),H?(H.el=mt.el,bt(d,H,U)):H=mt,et&&ma(et),(Ht=H.props&&H.props.onVnodeBeforeUpdate)&&cn(Ht,ct,H,mt),kr(d,!0);const ie=Ic(d),Xe=d.subTree;d.subTree=ie,E(Xe,ie,h(Xe.el),I(Xe),d,A,D),H.el=ie.el,Pt===null&&E2(d,ie.el),X&&Ne(X,A),(Ht=H.props&&H.props.onVnodeUpdated)&&Ne(()=>cn(Ht,ct,H,mt),A)}else{let H;const{el:et,props:X}=m,{bm:ct,m:mt,parent:Pt}=d,Ht=bi(m);if(kr(d,!1),ct&&ma(ct),!Ht&&(H=X&&X.onVnodeBeforeMount)&&cn(H,Pt,m),kr(d,!0),et&&kt){const ie=()=>{d.subTree=Ic(d),kt(et,d.subTree,d,A,null)};Ht?m.type.__asyncLoader().then(()=>!d.isUnmounted&&ie()):ie()}else{const ie=d.subTree=Ic(d);E(null,ie,_,C,d,A,D),m.el=ie.el}if(mt&&Ne(mt,A),!Ht&&(H=X&&X.onVnodeMounted)){const ie=m;Ne(()=>cn(H,Pt,ie),A)}(m.shapeFlag&256||Pt&&bi(Pt.vnode)&&Pt.vnode.shapeFlag&256)&&d.a&&Ne(d.a,A),d.isMounted=!0,m=_=C=null}},F=d.effect=new gh(L,We,()=>Ah(x),d.scope),x=d.update=()=>{F.dirty&&F.run()};x.id=d.uid,kr(d,!0),x()},bt=(d,m,_)=>{m.component=d;const C=d.vnode.props;d.vnode=m,d.next=null,X2(d,m.props,C,_),tw(d,m.children,_),os(),_d(d),as()},dt=(d,m,_,C,A,D,U,L,F=!1)=>{const x=d&&d.children,H=d?d.shapeFlag:0,et=m.children,{patchFlag:X,shapeFlag:ct}=m;if(X>0){if(X&128){Be(x,et,_,C,A,D,U,L,F);return}else if(X&256){Xt(x,et,_,C,A,D,U,L,F);return}}ct&8?(H&16&&pt(x,A,D),et!==x&&u(_,et)):H&16?ct&16?Be(x,et,_,C,A,D,U,L,F):pt(x,A,D,!0):(H&8&&u(_,""),ct&16&&z(et,_,C,A,D,U,L,F))},Xt=(d,m,_,C,A,D,U,L,F)=>{d=d||bs,m=m||bs;const x=d.length,H=m.length,et=Math.min(x,H);let X;for(X=0;X<et;X++){const ct=m[X]=F?Zn(m[X]):un(m[X]);E(d[X],ct,_,null,A,D,U,L,F)}x>H?pt(d,A,D,!0,!1,et):z(m,_,C,A,D,U,L,F,et)},Be=(d,m,_,C,A,D,U,L,F)=>{let x=0;const H=m.length;let et=d.length-1,X=H-1;for(;x<=et&&x<=X;){const ct=d[x],mt=m[x]=F?Zn(m[x]):un(m[x]);if(Mr(ct,mt))E(ct,mt,_,null,A,D,U,L,F);else break;x++}for(;x<=et&&x<=X;){const ct=d[et],mt=m[X]=F?Zn(m[X]):un(m[X]);if(Mr(ct,mt))E(ct,mt,_,null,A,D,U,L,F);else break;et--,X--}if(x>et){if(x<=X){const ct=X+1,mt=ct<H?m[ct].el:C;for(;x<=X;)E(null,m[x]=F?Zn(m[x]):un(m[x]),_,mt,A,D,U,L,F),x++}}else if(x>X)for(;x<=et;)ve(d[x],A,D,!0),x++;else{const ct=x,mt=x,Pt=new Map;for(x=mt;x<=X;x++){const Ve=m[x]=F?Zn(m[x]):un(m[x]);Ve.key!=null&&Pt.set(Ve.key,x)}let Ht,ie=0;const Xe=X-mt+1;let ds=!1,od=0;const ai=new Array(Xe);for(x=0;x<Xe;x++)ai[x]=0;for(x=ct;x<=et;x++){const Ve=d[x];if(ie>=Xe){ve(Ve,A,D,!0);continue}let ln;if(Ve.key!=null)ln=Pt.get(Ve.key);else for(Ht=mt;Ht<=X;Ht++)if(ai[Ht-mt]===0&&Mr(Ve,m[Ht])){ln=Ht;break}ln===void 0?ve(Ve,A,D,!0):(ai[ln-mt]=x+1,ln>=od?od=ln:ds=!0,E(Ve,m[ln],_,null,A,D,U,L,F),ie++)}const ad=ds?sw(ai):bs;for(Ht=ad.length-1,x=Xe-1;x>=0;x--){const Ve=mt+x,ln=m[Ve],ld=Ve+1<H?m[Ve+1].el:C;ai[x]===0?E(null,ln,_,ld,A,D,U,L,F):ds&&(Ht<0||x!==ad[Ht]?je(ln,_,ld,2):Ht--)}}},je=(d,m,_,C,A=null)=>{const{el:D,type:U,transition:L,children:F,shapeFlag:x}=d;if(x&6){je(d.component.subTree,m,_,C);return}if(x&128){d.suspense.move(m,_,C);return}if(x&64){U.move(d,m,_,$);return}if(U===Ut){r(D,m,_);for(let et=0;et<F.length;et++)je(F[et],m,_,C);r(d.anchor,m,_);return}if(U===va){R(d,m,_);return}if(C!==2&&x&1&&L)if(C===0)L.beforeEnter(D),r(D,m,_),Ne(()=>L.enter(D),A);else{const{leave:et,delayLeave:X,afterLeave:ct}=L,mt=()=>r(D,m,_),Pt=()=>{et(D,()=>{mt(),ct&&ct()})};X?X(D,mt,Pt):Pt()}else r(D,m,_)},ve=(d,m,_,C=!1,A=!1)=>{const{type:D,props:U,ref:L,children:F,dynamicChildren:x,shapeFlag:H,patchFlag:et,dirs:X}=d;if(L!=null&&mu(L,null,_,d,!0),H&256){m.ctx.deactivate(d);return}const ct=H&1&&X,mt=!bi(d);let Pt;if(mt&&(Pt=U&&U.onVnodeBeforeUnmount)&&cn(Pt,m,d),H&6)wt(d.component,_,C);else{if(H&128){d.suspense.unmount(_,C);return}ct&&Pr(d,null,m,"beforeUnmount"),H&64?d.type.remove(d,m,_,A,$,C):x&&(D!==Ut||et>0&&et&64)?pt(x,m,_,!1,!0):(D===Ut&&et&384||!A&&H&16)&&pt(F,m,_),C&&Hn(d)}(mt&&(Pt=U&&U.onVnodeUnmounted)||ct)&&Ne(()=>{Pt&&cn(Pt,m,d),ct&&Pr(d,null,m,"unmounted")},_)},Hn=d=>{const{type:m,el:_,anchor:C,transition:A}=d;if(m===Ut){S(_,C);return}if(m===va){w(d);return}const D=()=>{s(_),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(d.shapeFlag&1&&A&&!A.persisted){const{leave:U,delayLeave:L}=A,F=()=>U(_,D);L?L(d.el,D,F):F()}else D()},S=(d,m)=>{let _;for(;d!==m;)_=f(d),s(d),d=_;s(m)},wt=(d,m,_)=>{const{bum:C,scope:A,update:D,subTree:U,um:L}=d;C&&ma(C),A.stop(),D&&(D.active=!1,ve(U,d,m,_)),L&&Ne(L,m),Ne(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},pt=(d,m,_,C=!1,A=!1,D=0)=>{for(let U=D;U<d.length;U++)ve(d[U],m,_,C,A)},I=d=>d.shapeFlag&6?I(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el);let M=!1;const V=(d,m,_)=>{d==null?m._vnode&&ve(m._vnode,null,null,!0):E(m._vnode||null,d,m,null,null,null,_),M||(M=!0,_d(),Fg(),M=!1),m._vnode=d},$={p:E,um:ve,m:je,r:Hn,mt:Qt,mc:z,pc:dt,pbc:lt,n:I,o:e};let vt,kt;return t&&([vt,kt]=t($)),{render:V,hydrate:vt,createApp:Y2(V,vt)}}function Cc({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function kr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rw(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function r0(e,t,n=!1){const r=e.children,s=t.children;if(J(r)&&J(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Zn(s[i]),a.el=o.el),n||r0(o,a)),a.type===Cl&&(a.el=o.el)}}function sw(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function s0(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:s0(t)}const iw=e=>e.__isTeleport,Ut=Symbol.for("v-fgt"),Cl=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),va=Symbol.for("v-stc"),Ti=[];let tn=null;function K(e=!1){Ti.push(tn=e?null:[])}function ow(){Ti.pop(),tn=Ti[Ti.length-1]||null}let ji=1;function xd(e){ji+=e}function i0(e){return e.dynamicChildren=ji>0?tn||bs:null,ow(),ji>0&&tn&&tn.push(e),e}function nt(e,t,n,r,s,i){return i0(g(e,t,n,r,s,i,!0))}function en(e,t,n,r,s){return i0(st(e,t,n,r,s,!0))}function Ba(e){return e?e.__v_isVNode===!0:!1}function Mr(e,t){return e.type===t.type&&e.key===t.key}const Sl="__vInternal",o0=({key:e})=>e??null,ya=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Gt(e)||Me(e)||ht(e)?{i:ee,r:e,k:t,f:!!n}:e:null);function g(e,t=null,n=null,r=0,s=null,i=e===Ut?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&o0(t),ref:t&&ya(t),scopeId:Il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ee};return a?(xh(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Gt(n)?8:16),ji>0&&!o&&tn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&tn.push(l),l}const st=aw;function aw(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===jg)&&(e=Ge),Ba(e)){const a=gr(e,t,!0);return n&&xh(a,n),ji>0&&!i&&tn&&(a.shapeFlag&6?tn[tn.indexOf(e)]=a:tn.push(a)),a.patchFlag|=-2,a}if(gw(e)&&(e=e.__vccOpts),t){t=lw(t);let{class:a,style:l}=t;a&&!Gt(a)&&(t.class=he(a)),Ot(l)&&(kg(l)&&!J(l)&&(l=re({},l)),t.style=is(l))}const o=Gt(e)?1:b2(e)?128:iw(e)?64:Ot(e)?4:ht(e)?2:0;return g(e,t,n,r,s,o,i,!0)}function lw(e){return e?kg(e)||Sl in e?re({},e):e:null}function gr(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?Ai(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&o0(a),ref:t&&t.ref?n&&s?J(s)?s.concat(ya(t)):[s,ya(t)]:ya(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ut?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gr(e.ssContent),ssFallback:e.ssFallback&&gr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function xt(e=" ",t=0){return st(Cl,null,e,t)}function Rl(e,t){const n=st(va,null,e);return n.staticCount=t,n}function ue(e="",t=!1){return t?(K(),en(Ge,null,e)):st(Ge,null,e)}function un(e){return e==null||typeof e=="boolean"?st(Ge):J(e)?st(Ut,null,e.slice()):typeof e=="object"?Zn(e):st(Cl,null,String(e))}function Zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gr(e)}function xh(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(J(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),xh(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(Sl in t)?t._ctx=ee:s===3&&ee&&(ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ht(t)?(t={default:t,_ctx:ee},n=32):(t=String(t),r&64?(n=16,t=[xt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ai(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=he([t.class,r.class]));else if(s==="style")t.style=is([t.style,r.style]);else if(gl(s)){const i=t[s],o=r[s];o&&i!==o&&!(J(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function cn(e,t,n,r=null){Ke(e,t,7,[n,r])}const cw=Xg();let uw=0;function hw(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||cw,i={uid:uw++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new B1(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zg(r,s),emitsOptions:Bg(r,s),emit:null,emitted:null,propsDefaults:Lt,inheritAttrs:r.inheritAttrs,ctx:Lt,data:Lt,props:Lt,attrs:Lt,slots:Lt,refs:Lt,setupState:Lt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=v2.bind(null,i),e.ce&&e.ce(i),i}let de=null;const a0=()=>de||ee;let ja,gu;{const e=pg(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};ja=t("__VUE_INSTANCE_SETTERS__",n=>de=n),gu=t("__VUE_SSR_SETTERS__",n=>Pl=n)}const go=e=>{const t=de;return ja(e),e.scope.on(),()=>{e.scope.off(),ja(t)}},Od=()=>{de&&de.scope.off(),ja(null)};function l0(e){return e.vnode.shapeFlag&4}let Pl=!1;function fw(e,t=!1){t&&gu(t);const{props:n,children:r}=e.vnode,s=l0(e);Q2(e,n,s,t),Z2(e,r);const i=s?dw(e,t):void 0;return t&&gu(!1),i}function dw(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xg(new Proxy(e.ctx,B2));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?u0(e):null,i=go(e);os();const o=ar(r,e,0,[e.props,s]);if(as(),i(),hg(o)){if(o.then(Od,Od),t)return o.then(a=>{Nd(e,a,t)}).catch(a=>{El(a,e,0)});e.asyncDep=o}else Nd(e,o,t)}else c0(e,t)}function Nd(e,t,n){ht(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ot(t)&&(e.setupState=Mg(t)),c0(e,n)}let Dd;function c0(e,t,n){const r=e.type;if(!e.render){if(!t&&Dd&&!r.render){const s=r.template||Ph(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=re(re({isCustomElement:i,delimiters:a},o),l);r.render=Dd(s,c)}}e.render=r.render||We}{const s=go(e);os();try{H2(e)}finally{as(),s()}}}function pw(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return De(e,"get","$attrs"),t[n]}}))}function u0(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return pw(e)},slots:e.slots,emit:e.emit,expose:t}}function kl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mg(xg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ii)return Ii[n](e)},has(t,n){return n in t||n in Ii}}))}function mw(e,t=!0){return ht(e)?e.displayName||e.name:e.name||t&&e.__name}function gw(e){return ht(e)&&"__vccOpts"in e}const It=(e,t)=>l2(e,t,Pl);function xl(e,t,n){const r=arguments.length;return r===2?Ot(t)&&!J(t)?Ba(t)?st(e,null,[t]):st(e,t):st(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ba(n)&&(n=[n]),st(e,t,n))}const vw="3.4.14";/**
* @vue/runtime-dom v3.4.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const yw="http://www.w3.org/2000/svg",_w="http://www.w3.org/1998/Math/MathML",tr=typeof document<"u"?document:null,Md=tr&&tr.createElement("template"),ww={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?tr.createElementNS(yw,e):t==="mathml"?tr.createElementNS(_w,e):tr.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tr.createTextNode(e),createComment:e=>tr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Md.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Md.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},qn="transition",li="animation",$i=Symbol("_vtc"),Ol=(e,{slots:t})=>xl(P2,Ew(e),t);Ol.displayName="Transition";const h0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ol.props=re({},zg,h0);const xr=(e,t=[])=>{J(e)?e.forEach(n=>n(...t)):e&&e(...t)},Vd=e=>e?J(e)?e.some(t=>t.length>1):e.length>1:!1;function Ew(e){const t={};for(const q in e)q in h0||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=bw(s),E=v&&v[0],T=v&&v[1],{onBeforeEnter:y,onEnter:b,onEnterCancelled:R,onLeave:w,onLeaveCancelled:N,onBeforeAppear:O=y,onAppear:Q=b,onAppearCancelled:z=R}=t,Y=(q,_t,Qt)=>{Or(q,_t?u:a),Or(q,_t?c:o),Qt&&Qt()},lt=(q,_t)=>{q._isLeaving=!1,Or(q,h),Or(q,p),Or(q,f),_t&&_t()},$t=q=>(_t,Qt)=>{const xe=q?Q:b,Nt=()=>Y(_t,q,Qt);xr(xe,[_t,Nt]),Ld(()=>{Or(_t,q?l:i),Wn(_t,q?u:a),Vd(xe)||Fd(_t,r,E,Nt)})};return re(t,{onBeforeEnter(q){xr(y,[q]),Wn(q,i),Wn(q,o)},onBeforeAppear(q){xr(O,[q]),Wn(q,l),Wn(q,c)},onEnter:$t(!1),onAppear:$t(!0),onLeave(q,_t){q._isLeaving=!0;const Qt=()=>lt(q,_t);Wn(q,h),Aw(),Wn(q,f),Ld(()=>{q._isLeaving&&(Or(q,h),Wn(q,p),Vd(w)||Fd(q,r,T,Qt))}),xr(w,[q,Qt])},onEnterCancelled(q){Y(q,!1),xr(R,[q])},onAppearCancelled(q){Y(q,!0),xr(z,[q])},onLeaveCancelled(q){lt(q),xr(N,[q])}})}function bw(e){if(e==null)return null;if(Ot(e))return[Sc(e.enter),Sc(e.leave)];{const t=Sc(e);return[t,t]}}function Sc(e){return O1(e)}function Wn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[$i]||(e[$i]=new Set)).add(t)}function Or(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[$i];n&&(n.delete(t),n.size||(e[$i]=void 0))}function Ld(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Iw=0;function Fd(e,t,n,r){const s=e._endId=++Iw,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Tw(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,f),i()},f=p=>{p.target===e&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),e.addEventListener(c,f)}function Tw(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${qn}Delay`),i=r(`${qn}Duration`),o=Ud(s,i),a=r(`${li}Delay`),l=r(`${li}Duration`),c=Ud(a,l);let u=null,h=0,f=0;t===qn?o>0&&(u=qn,h=o,f=i.length):t===li?c>0&&(u=li,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?qn:li:null,f=u?u===qn?i.length:l.length:0);const p=u===qn&&/\b(transform|all)(,|$)/.test(r(`${qn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Ud(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Bd(n)+Bd(e[r])))}function Bd(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Aw(){return document.body.offsetHeight}function Cw(e,t,n){const r=e[$i];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Sw=Symbol("_vod"),Rw=Symbol("");function Pw(e,t,n){const r=e.style,s=r.display,i=Gt(n);if(n&&!i){if(t&&!Gt(t))for(const o in t)n[o]==null&&vu(r,o,"");for(const o in n)vu(r,o,n[o])}else if(i){if(t!==n){const o=r[Rw];o&&(n+=";"+o),r.cssText=n}}else t&&e.removeAttribute("style");Sw in e&&(r.display=s)}const jd=/\s*!important$/;function vu(e,t,n){if(J(n))n.forEach(r=>vu(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=kw(e,t);jd.test(n)?e.setProperty(Ys(r),n.replace(jd,""),"important"):e[r]=n}}const $d=["Webkit","Moz","ms"],Rc={};function kw(e,t){const n=Rc[t];if(n)return n;let r=In(t);if(r!=="filter"&&r in e)return Rc[t]=r;r=yl(r);for(let s=0;s<$d.length;s++){const i=$d[s]+r;if(i in e)return Rc[t]=i}return t}const Hd="http://www.w3.org/1999/xlink";function xw(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Hd,t.slice(6,t.length)):e.setAttributeNS(Hd,t,n);else{const i=F1(t);n==null||i&&!mg(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ow(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const c=a==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=mg(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Sn(e,t,n,r){e.addEventListener(t,n,r)}function Nw(e,t,n,r){e.removeEventListener(t,n,r)}const zd=Symbol("_vei");function Dw(e,t,n,r,s=null){const i=e[zd]||(e[zd]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=Mw(t);if(r){const c=i[t]=Fw(r,s);Sn(e,a,c,l)}else o&&(Nw(e,a,o,l),i[t]=void 0)}}const qd=/(?:Once|Passive|Capture)$/;function Mw(e){let t;if(qd.test(e)){t={};let r;for(;r=e.match(qd);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ys(e.slice(2)),t]}let Pc=0;const Vw=Promise.resolve(),Lw=()=>Pc||(Vw.then(()=>Pc=0),Pc=Date.now());function Fw(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Uw(r,n.value),t,5,[r])};return n.value=e,n.attached=Lw(),n}function Uw(e,t){if(J(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Wd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bw=(e,t,n,r,s,i,o,a,l)=>{const c=s==="svg";t==="class"?Cw(e,r,c):t==="style"?Pw(e,n,r):gl(t)?fh(t)||Dw(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jw(e,t,r,c))?Ow(e,t,r,i,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xw(e,t,r,c))};function jw(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wd(t)&&ht(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wd(t)&&Gt(n)?!1:t in e}const vr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return J(t)?n=>ma(t,n):t};function $w(e){e.target.composing=!0}function Kd(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ye=Symbol("_assign"),$a={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ye]=vr(s);const i=r||s.props&&s.props.type==="number";Sn(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Da(a)),e[Ye](a)}),n&&Sn(e,"change",()=>{e.value=e.value.trim()}),t||(Sn(e,"compositionstart",$w),Sn(e,"compositionend",Kd),Sn(e,"change",Kd))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[Ye]=vr(i),e.composing)return;const o=s||e.type==="number"?Da(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},Hw={deep:!0,created(e,t,n){e[Ye]=vr(n),Sn(e,"change",()=>{const r=e._modelValue,s=Ns(e),i=e.checked,o=e[Ye];if(J(r)){const a=mh(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Gs(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(f0(e,i))})},mounted:Gd,beforeUpdate(e,t,n){e[Ye]=vr(n),Gd(e,t,n)}};function Gd(e,{value:t,oldValue:n},r){e._modelValue=t,J(t)?e.checked=mh(t,r.props.value)>-1:Gs(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Yr(t,f0(e,!0)))}const zw={created(e,{value:t},n){e.checked=Yr(t,n.props.value),e[Ye]=vr(n),Sn(e,"change",()=>{e[Ye](Ns(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Ye]=vr(r),t!==n&&(e.checked=Yr(t,r.props.value))}},qw={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Gs(t);Sn(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Da(Ns(o)):Ns(o));e[Ye](e.multiple?s?new Set(i):i:i[0])}),e[Ye]=vr(r)},mounted(e,{value:t}){Yd(e,t)},beforeUpdate(e,t,n){e[Ye]=vr(n)},updated(e,{value:t}){Yd(e,t)}};function Yd(e,t){const n=e.multiple;if(!(n&&!J(t)&&!Gs(t))){for(let r=0,s=e.options.length;r<s;r++){const i=e.options[r],o=Ns(i);if(n)J(t)?i.selected=mh(t,o)>-1:i.selected=t.has(o);else if(Yr(Ns(i),t)){e.selectedIndex!==r&&(e.selectedIndex=r);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ns(e){return"_value"in e?e._value:e.value}function f0(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const d0={created(e,t,n){Yo(e,t,n,null,"created")},mounted(e,t,n){Yo(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){Yo(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){Yo(e,t,n,r,"updated")}};function Ww(e,t){switch(e){case"SELECT":return qw;case"TEXTAREA":return $a;default:switch(t){case"checkbox":return Hw;case"radio":return zw;default:return $a}}}function Yo(e,t,n,r,s){const o=Ww(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,r)}const Kw=["ctrl","shift","alt","meta"],Gw={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Kw.some(n=>e[`${n}Key`]&&!t.includes(n))},Nl=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=Gw[t[o]];if(a&&a(s,t))return}return e(s,...i)})},Yw=re({patchProp:Bw},ww);let Qd;function Qw(){return Qd||(Qd=ew(Yw))}const Xw=(...e)=>{const t=Qw().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Zw(r);if(!s)return;const i=t._component;!ht(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Jw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Jw(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zw(e){return Gt(e)?document.querySelector(e):e}const tE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%208H17M7%2012H17M7%2016H17'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",p0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='18'%20height='18'%3e%3cpath%20fill='%23494C6B'%20fill-rule='evenodd'%20d='M16.97%200l.708.707L9.546%208.84l8.132%208.132-.707.707-8.132-8.132-8.132%208.132L0%2016.97l8.132-8.132L0%20.707.707%200%208.84%208.132%2016.971%200z'/%3e%3c/svg%3e",eE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.5588%2019.5488C17.5654%2016.8918%2015.0036%2015%2012%2015C8.99638%2015%206.4346%2016.8918%205.44117%2019.5488M18.5588%2019.5488C20.6672%2017.7154%2022%2015.0134%2022%2012C22%206.47715%2017.5228%202%2012%202C6.47715%202%202%206.47715%202%2012C2%2015.0134%203.33285%2017.7154%205.44117%2019.5488M18.5588%2019.5488C16.8031%2021.0756%2014.5095%2022%2012%2022C9.49052%2022%207.19694%2021.0756%205.44117%2019.5488M15%209C15%2010.6569%2013.6569%2012%2012%2012C10.3431%2012%209%2010.6569%209%209C9%207.34315%2010.3431%206%2012%206C13.6569%206%2015%207.34315%2015%209Z'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3c/svg%3e",nE="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%206L9%207C9%208.65685%2010.3431%2010%2012%2010C13.6569%2010%2015%208.65685%2015%207V6'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.6115%203H8.38848C6.43313%203%204.76436%204.41365%204.44291%206.3424L2.77624%2016.3424C2.36988%2018.7805%204.25006%2021%206.72182%2021H17.2781C19.7499%2021%2021.6301%2018.7805%2021.2237%2016.3424L19.557%206.3424C19.2356%204.41365%2017.5668%203%2015.6115%203Z'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3c/svg%3e";var rE=Object.defineProperty,sE=(e,t,n)=>t in e?rE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Se=(e,t,n)=>(sE(e,typeof t!="symbol"?t+"":t,n),n);function iE(e){if(!e||typeof document>"u")return;let t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}iE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px;transform:translateZ(0)}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:'';position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount,0));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{from{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;--mobile-offset:16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 91%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 91%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 91%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 100%, 12%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 12%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");let yu=0;class oE{constructor(){Se(this,"subscribers"),Se(this,"toasts"),Se(this,"subscribe",t=>(this.subscribers.push(t),()=>{const n=this.subscribers.indexOf(t);this.subscribers.splice(n,1)})),Se(this,"publish",t=>{this.subscribers.forEach(n=>n(t))}),Se(this,"addToast",t=>{this.publish(t),this.toasts=[...this.toasts,t]}),Se(this,"create",t=>{var n;const{message:r,...s}=t,i=typeof t.id=="number"||t.id&&((n=t.id)==null?void 0:n.length)>0?t.id:yu++,o=this.toasts.find(l=>l.id===i),a=t.dismissible===void 0?!0:t.dismissible;return o?this.toasts=this.toasts.map(l=>l.id===i?(this.publish({...l,...t,id:i,title:r}),{...l,...t,id:i,dismissible:a,title:r}):l):this.addToast({title:r,...s,dismissible:a,id:i}),i}),Se(this,"dismiss",t=>(t||this.toasts.forEach(n=>{this.subscribers.forEach(r=>r({id:n.id,dismiss:!0}))}),this.subscribers.forEach(n=>n({id:t,dismiss:!0})),t)),Se(this,"message",(t,n)=>this.create({...n,message:t,type:"default"})),Se(this,"error",(t,n)=>this.create({...n,type:"error",message:t})),Se(this,"success",(t,n)=>this.create({...n,type:"success",message:t})),Se(this,"info",(t,n)=>this.create({...n,type:"info",message:t})),Se(this,"warning",(t,n)=>this.create({...n,type:"warning",message:t})),Se(this,"loading",(t,n)=>this.create({...n,type:"loading",message:t})),Se(this,"promise",(t,n)=>{if(!n)return;let r;n.loading!==void 0&&(r=this.create({...n,promise:t,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));const s=t instanceof Promise?t:t();let i=r!==void 0;return s.then(o=>{if(o&&typeof o.ok=="boolean"&&!o.ok){i=!1;const a=typeof n.error=="function"?n.error(`HTTP error! status: ${response.status}`):n.error,l=typeof n.description=="function"?n.description(`HTTP error! status: ${response.status}`):n.description;this.create({id:r,type:"error",message:a,description:l})}else if(n.success!==void 0){i=!1;const a=typeof n.success=="function"?n.success(o):n.success,l=typeof n.description=="function"?n.description(o):n.description;this.create({id:r,type:"success",message:a,description:l})}}).catch(o=>{if(n.error!==void 0){i=!1;const a=typeof n.error=="function"?n.error(o):n.error,l=typeof n.description=="function"?n.description(o):n.description;this.create({id:r,type:"error",message:a,description:l})}}).finally(()=>{var o;i&&(this.dismiss(r),r=void 0),(o=n.finally)==null||o.call(n)}),r}),Se(this,"custom",(t,n)=>{const r=(n==null?void 0:n.id)||yu++;return this.publish({component:t,id:r,...n}),r}),this.subscribers=[],this.toasts=[]}}const Ze=new oE,aE=(e,t)=>{const n=(t==null?void 0:t.id)||yu++;return Ze.create({message:e,id:n,type:"default",...t}),n},lE=aE,m0=Object.assign(lE,{success:Ze.success,info:Ze.info,warning:Ze.warning,error:Ze.error,custom:Ze.custom,message:Ze.message,promise:Ze.promise,dismiss:Ze.dismiss,loading:Ze.loading}),vo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},cE={},uE={xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stoke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},hE=g("line",{x1:"18",y1:"6",x2:"6",y2:"18"},null,-1),fE=g("line",{x1:"6",y1:"6",x2:"18",y2:"18"},null,-1),dE=[hE,fE];function pE(e,t){return K(),nt("svg",uE,dE)}const mE=vo(cE,[["render",pE]]),gE=()=>{const e=rt(!1);return lr(()=>{const t=()=>{e.value=document.hidden};return document.addEventListener("visibilitychange",t),()=>window.removeEventListener("visibilitychange",t)}),{isDocumentHidden:e}},vE=["aria-live","data-styled","data-mounted","data-promise","data-removed","data-visible","data-y-position","data-x-position","data-index","data-front","data-swiping","data-dismissible","data-type","data-invert","data-swipe-out","data-expanded"],yE=["aria-label","data-disabled"],_E={key:0,"data-icon":""},wE={"data-content":""},EE=4e3,bE=14,IE=20,TE=200,AE=Qs({__name:"Toast",props:{toast:{},toasts:{},index:{},expanded:{type:Boolean},invert:{type:Boolean},heights:{},gap:{},position:{},visibleToasts:{},expandByDefault:{type:Boolean},closeButton:{type:Boolean},interacting:{type:Boolean},duration:{},descriptionClass:{},style:{},cancelButtonStyle:{},actionButtonStyle:{},unstyled:{type:Boolean},loadingIcon:{},class:{},classes:{},icons:{},closeButtonAriaLabel:{},pauseWhenPageIsHidden:{type:Boolean},cn:{type:Function}},emits:["update:heights","removeToast"],setup(e,{emit:t}){const n=t,r=e,s=rt(!1),i=rt(!1),o=rt(!1),a=rt(!1),l=rt(0),c=rt(0),u=rt(null),h=rt(null),f=It(()=>r.index===0),p=It(()=>r.index+1<=r.visibleToasts),v=It(()=>r.toast.type),E=It(()=>r.toast.dismissible!==!1),T=It(()=>{var S,wt,pt,I,M,V,$;return r.cn((S=r.classes)==null?void 0:S.toast,(pt=(wt=r.toast)==null?void 0:wt.classes)==null?void 0:pt.toast,(I=r.classes)==null?void 0:I.default,(M=r.classes)==null?void 0:M[r.toast.type||"default"],($=(V=r.toast)==null?void 0:V.classes)==null?void 0:$[r.toast.type||"default"])}),y=r.toast.style||{},b=It(()=>r.heights.findIndex(S=>S.toastId===r.toast.id)||0),R=It(()=>r.toast.closeButton??r.closeButton),w=It(()=>r.toast.duration||r.duration||EE),N=rt(0),O=rt(0),Q=rt(w.value),z=rt(0),Y=rt(null),lt=It(()=>r.position.split("-")),$t=It(()=>lt.value[0]),q=It(()=>lt.value[1]),_t=typeof r.toast.title!="string",Qt=typeof r.toast.description!="string",xe=It(()=>r.heights.reduce((S,wt,pt)=>pt>=b.value?S:S+wt.height,0)),Nt=gE(),bt=It(()=>r.toast.invert||r.invert),dt=It(()=>v.value==="loading");Ui(()=>{if(!s.value)return;const S=h.value,wt=S==null?void 0:S.style.height;S.style.height="auto";const pt=S.getBoundingClientRect().height;S.style.height=wt,c.value=pt;let I;r.heights.find(M=>M.toastId===r.toast.id)?I=r.heights.map(M=>M.toastId===r.toast.id?{...M,height:pt}:M):I=[{toastId:r.toast.id,height:pt,position:r.toast.position},...r.heights],n("update:heights",I)});const Xt=()=>{i.value=!0,l.value=O.value;const S=r.heights.filter(wt=>wt.toastId!==r.toast.id);n("update:heights",S),setTimeout(()=>{n("removeToast",r.toast)},TE)},Be=()=>{var S,wt;dt.value||!E.value||(Xt(),(wt=(S=r.toast).onDismiss)==null||wt.call(S,r.toast))},je=S=>{dt.value||!E.value||(u.value=new Date,l.value=O.value,S.target.setPointerCapture(S.pointerId),S.target.tagName!=="BUTTON"&&(o.value=!0,Y.value={x:S.clientX,y:S.clientY}))},ve=S=>{var wt,pt,I,M;if(a.value)return;Y.value=null;const V=Number(((wt=h.value)==null?void 0:wt.style.getPropertyValue("--swipe-amount").replace("px",""))||0),$=new Date().getTime()-u.value.getTime(),vt=Math.abs(V)/$;if(Math.abs(V)>=IE||vt>.11){l.value=O.value,(I=(pt=r.toast).onDismiss)==null||I.call(pt,r.toast),Xt(),a.value=!0;return}(M=h.value)==null||M.style.setProperty("--swipe-amount","0px"),o.value=!1},Hn=S=>{var wt;if(!Y.value)return;const pt=S.clientY-Y.value.y,I=S.clientX-Y.value.x,M=(lt.value[0]==="top"?Math.min:Math.max)(0,pt),V=S.pointerType==="touch"?10:2;Math.abs(M)>V?(wt=h.value)==null||wt.style.setProperty("--swipe-amount",`${pt}px`):Math.abs(I)>V&&(Y.value=null)};return lr(()=>{O.value=b.value*bE+xe.value}),lr(S=>{if(r.toast.promise&&v.value==="loading"||r.toast.duration===1/0||r.toast.type==="loading")return;let wt;const pt=()=>{if(z.value<N.value){const M=new Date().getTime()-N.value;Q.value=Q.value-M}z.value=new Date().getTime()},I=()=>{N.value=new Date().getTime(),wt=setTimeout(()=>{var M,V;(V=(M=r.toast).onAutoClose)==null||V.call(M,r.toast),Xt()},Q.value)};r.expanded||r.interacting||r.pauseWhenPageIsHidden&&Nt?pt():I(),S(()=>{clearTimeout(wt)})}),lr(()=>{r.toast.delete&&Xt()}),Ui(()=>{if(h.value){const S=h.value.getBoundingClientRect().height;c.value=S;const wt=[{toastId:r.toast.id,height:S,position:r.toast.position},...r.heights];n("update:heights",wt)}s.value=!0}),Rh(()=>{if(h.value){const S=r.heights.filter(wt=>wt.toastId!==r.toast.id);n("update:heights",S)}}),(S,wt)=>{var pt,I,M,V,$,vt,kt,d,m,_,C,A;return K(),nt("li",{"aria-live":S.toast.important?"assertive":"polite","aria-atomic":"true",role:"status",tabindex:"0",ref_key:"toastRef",ref:h,"data-sonner-toast":"",class:he(T.value),"data-styled":!(S.toast.component||(pt=S.toast)!=null&&pt.unstyled||S.unstyled),"data-mounted":s.value,"data-promise":!!S.toast.promise,"data-removed":i.value,"data-visible":p.value,"data-y-position":$t.value,"data-x-position":q.value,"data-index":S.index,"data-front":f.value,"data-swiping":o.value,"data-dismissible":E.value,"data-type":v.value,"data-invert":bt.value,"data-swipe-out":a.value,"data-expanded":!!(S.expanded||S.expandByDefault&&s.value),style:is({"--index":S.index,"--toasts-before":S.index,"--z-index":S.toasts.length-S.index,"--offset":`${i.value?l.value:O.value}px`,"--initial-height":S.expandByDefault?"auto":`${c.value}px`,...S.style,...Dt(y)}),onPointerdown:je,onPointerup:ve,onPointermove:Hn},[R.value&&!S.toast.component?(K(),nt("button",{key:0,"aria-label":S.closeButtonAriaLabel||"Close toast","data-disabled":dt.value,"data-close-button":"",class:he(S.cn((I=S.classes)==null?void 0:I.closeButton,(V=(M=S.toast)==null?void 0:M.classes)==null?void 0:V.closeButton)),onClick:Be},[st(mE)],10,yE)):ue("",!0),S.toast.component?(K(),en(Wo(S.toast.component),Ai({key:1},S.toast.componentProps,{onCloseToast:Xt}),null,16)):(K(),nt(Ut,{key:2},[v.value!=="default"||S.toast.icon||S.toast.promise?(K(),nt("div",_E,[(S.toast.promise||v.value==="loading")&&!S.toast.icon?fn(S.$slots,"loading-icon",{key:0}):ue("",!0),S.toast.icon?(K(),en(Wo(S.toast.icon),{key:1})):(K(),nt(Ut,{key:2},[v.value==="success"?fn(S.$slots,"success-icon",{key:0}):v.value==="error"?fn(S.$slots,"error-icon",{key:1}):v.value==="warning"?fn(S.$slots,"warning-icon",{key:2}):v.value==="info"?fn(S.$slots,"info-icon",{key:3}):ue("",!0)],64))])):ue("",!0),g("div",wE,[g("div",{"data-title":"",class:he(S.cn(($=S.classes)==null?void 0:$.title,(vt=S.toast.classes)==null?void 0:vt.title))},[_t?(K(),en(Wo(S.toast.title),hd(Ai({key:0},S.toast.componentProps)),null,16)):(K(),nt(Ut,{key:1},[xt(Mt(S.toast.title),1)],64))],2),S.toast.description?(K(),nt("div",{key:0,"data-description":"",class:he(S.cn(S.descriptionClass,S.toast.descriptionClass,(kt=S.classes)==null?void 0:kt.description,(d=S.toast.classes)==null?void 0:d.description))},[Qt?(K(),en(Wo(S.toast.description),hd(Ai({key:0},S.toast.componentProps)),null,16)):(K(),nt(Ut,{key:1},[xt(Mt(S.toast.description),1)],64))],2)):ue("",!0)]),S.toast.cancel?(K(),nt("button",{key:1,class:he(S.cn((m=S.classes)==null?void 0:m.cancelButton,(_=S.toast.classes)==null?void 0:_.cancelButton)),"data-button":"","data-cancel":"",onClick:wt[0]||(wt[0]=()=>{var D;Xt(),(D=S.toast.cancel)!=null&&D.onClick&&S.toast.cancel.onClick()})},Mt(S.toast.cancel.label),3)):ue("",!0),S.toast.action?(K(),nt("button",{key:2,class:he(S.cn((C=S.classes)==null?void 0:C.actionButton,(A=S.toast.classes)==null?void 0:A.actionButton)),"data-button":"",onClick:wt[1]||(wt[1]=D=>{var U;(U=S.toast.action)==null||U.onClick(D),!D.defaultPrevented&&Xt()})},Mt(S.toast.action.label),3)):ue("",!0)],64))],46,vE)}}}),CE=["data-visible"],SE={class:"sonner-spinner"},RE=Qs({__name:"Loader",props:{visible:{type:Boolean}},setup(e){const t=Array(12).fill(0);return(n,r)=>(K(),nt("div",{class:"sonner-loading-wrapper","data-visible":n.visible},[g("div",SE,[(K(!0),nt(Ut,null,Bi(Dt(t),s=>(K(),nt("div",{key:`spinner-bar-${s}`,class:"sonner-loading-bar"}))),128))])],8,CE))}}),PE={},kE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},xE=g("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"},null,-1),OE=[xE];function NE(e,t){return K(),nt("svg",kE,OE)}const DE=vo(PE,[["render",NE]]),ME={},VE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},LE=g("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z","clip-rule":"evenodd"},null,-1),FE=[LE];function UE(e,t){return K(),nt("svg",VE,FE)}const BE=vo(ME,[["render",UE]]),jE={},$E={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},HE=g("path",{"fill-rule":"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule":"evenodd"},null,-1),zE=[HE];function qE(e,t){return K(),nt("svg",$E,zE)}const WE=vo(jE,[["render",qE]]),KE={},GE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},YE=g("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"},null,-1),QE=[YE];function XE(e,t){return K(),nt("svg",GE,QE)}const JE=vo(KE,[["render",XE]]),ZE=["aria-label"],tb=["dir","data-theme","data-rich-colors","data-y-position","data-x-position"],eb=3,Xd="32px",nb=4e3,rb=356,Jd=14,sb=typeof window<"u"&&typeof document<"u",ib=Qs({name:"Toaster",inheritAttrs:!1,__name:"Toaster",props:{invert:{type:Boolean,default:!1},theme:{default:"light"},position:{default:"bottom-right"},hotkey:{default:()=>["altKey","KeyT"]},richColors:{type:Boolean,default:!1},expand:{type:Boolean,default:!1},duration:{default:nb},gap:{default:Jd},visibleToasts:{default:eb},closeButton:{type:Boolean,default:!1},toastOptions:{default:()=>({})},class:{default:""},style:{default:()=>({})},offset:{default:Xd},dir:{default:"auto"},icons:{},containerAriaLabel:{default:"Notifications"},pauseWhenPageIsHidden:{type:Boolean,default:!1},cn:{}},setup(e){function t(...w){return w.filter(Boolean).join(" ")}function n(){if(typeof window>"u"||typeof document>"u")return"ltr";const w=document.documentElement.getAttribute("dir");return w==="auto"||!w?window.getComputedStyle(document.documentElement).direction:w}const r=e,s=j2(),i=rt([]),o=It(()=>{const w=i.value.filter(N=>N.position).map(N=>N.position);return w.length>0?Array.from(new Set([r.position].concat(w))):[r.position]}),a=rt([]),l=rt(!1),c=rt(!1),u=rt(r.theme!=="system"?r.theme:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),h=It(()=>r.cn||t),f=rt(null),p=rt(null),v=rt(!1),E=r.hotkey.join("+").replace(/Key/g,"").replace(/Digit/g,"");function T(w){i.value=i.value.filter(({id:N})=>N!==w.id)}const y=w=>{var N,O;v.value&&!((O=(N=w.currentTarget)==null?void 0:N.contains)!=null&&O.call(N,w.relatedTarget))&&(v.value=!1,p.value&&(p.value.focus({preventScroll:!0}),p.value=null))},b=w=>{w.target instanceof HTMLElement&&w.target.dataset.dismissible==="false"||v.value||(v.value=!0,p.value=w.relatedTarget)},R=w=>{w.target&&w.target instanceof HTMLElement&&w.target.dataset.dismissible==="false"||(c.value=!1)};return lr(w=>{const N=Ze.subscribe(O=>{if(O.dismiss){i.value=i.value.map(Q=>Q.id===O.id?{...Q,delete:!0}:Q);return}Th(()=>{const Q=i.value.findIndex(z=>z.id===O.id);Q!==-1?i.value.splice(Q,1,O):i.value=[O,...i.value]})});w(()=>{N()})}),qr(()=>r.theme,w=>{if(w!=="system"){u.value=w;return}w==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?u.value="dark":u.value="light"),!(typeof window>"u")&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:N})=>{N?u.value="dark":u.value="light"})}),qr(()=>f.value,()=>{if(f.value)return()=>{p.value&&(p.value.focus({preventScroll:!0}),p.value=null,v.value=!1)}}),lr(()=>{i.value.length<=1&&(l.value=!1)}),lr(w=>{function N(O){const Q=r.hotkey.every(lt=>O[lt]||O.code===lt),z=Array.isArray(f.value)?f.value[0]:f.value;Q&&(l.value=!0,z==null||z.focus());const Y=document.activeElement===f.value||(z==null?void 0:z.contains(document.activeElement));O.code==="Escape"&&Y&&(l.value=!1)}sb&&(document.addEventListener("keydown",N),w(()=>{document.removeEventListener("keydown",N)}))}),(w,N)=>(K(),nt("section",{"aria-label":`${w.containerAriaLabel} ${Dt(E)}`,tabIndex:-1},[(K(!0),nt(Ut,null,Bi(o.value,(O,Q)=>{var z;return K(),nt("ol",Ai({key:O,ref_for:!0,ref_key:"listRef",ref:f,"data-sonner-toaster":"",class:w.class,dir:w.dir==="auto"?n():w.dir,tabIndex:-1,"data-theme":w.theme,"data-rich-colors":w.richColors,"data-y-position":O.split("-")[0],"data-x-position":O.split("-")[1],style:{"--front-toast-height":`${(z=a.value[0])==null?void 0:z.height}px`,"--offset":typeof w.offset=="number"?`${w.offset}px`:w.offset||Xd,"--width":`${rb}px`,"--gap":`${Jd}px`,...w.style,...Dt(s).style},onBlur:y,onFocus:b,onMouseenter:N[1]||(N[1]=Y=>l.value=!0),onMousemove:N[2]||(N[2]=Y=>l.value=!0),onMouseleave:N[3]||(N[3]=()=>{c.value||(l.value=!1)}),onPointerdown:R,onPointerup:N[4]||(N[4]=Y=>c.value=!1)},w.$attrs),[(K(!0),nt(Ut,null,Bi(i.value.filter(Y=>!Y.position&&Q===0||Y.position===w.position),(Y,lt)=>{var $t,q,_t,Qt,xe,Nt,bt,dt,Xt;return K(),en(AE,{key:Y.id,index:lt,toast:Y,duration:(($t=w.toastOptions)==null?void 0:$t.duration)??w.duration,class:he((q=w.toastOptions)==null?void 0:q.class),descriptionClass:(_t=w.toastOptions)==null?void 0:_t.descriptionClass,invert:w.invert,visibleToasts:w.visibleToasts,closeButton:((Qt=w.toastOptions)==null?void 0:Qt.closeButton)??w.closeButton,interacting:c.value,position:w.position,style:is((xe=w.toastOptions)==null?void 0:xe.style),unstyled:(Nt=w.toastOptions)==null?void 0:Nt.unstyled,classes:(bt=w.toastOptions)==null?void 0:bt.classes,cancelButtonStyle:(dt=w.toastOptions)==null?void 0:dt.cancelButtonStyle,actionButtonStyle:(Xt=w.toastOptions)==null?void 0:Xt.actionButtonStyle,toasts:i.value,expandByDefault:w.expand,gap:w.gap,expanded:l.value,pauseWhenPageIsHidden:w.pauseWhenPageIsHidden,cn:h.value,heights:a.value,"onUpdate:heights":N[0]||(N[0]=Be=>a.value=Be),onRemoveToast:T},{"loading-icon":zt(()=>[fn(w.$slots,"loading-icon",{},()=>[st(RE,{visible:Y.type==="loading"},null,8,["visible"])])]),"success-icon":zt(()=>[fn(w.$slots,"success-icon",{},()=>[st(DE)])]),"error-icon":zt(()=>[fn(w.$slots,"error-icon",{},()=>[st(JE)])]),"warning-icon":zt(()=>[fn(w.$slots,"warning-icon",{},()=>[st(WE)])]),"info-icon":zt(()=>[fn(w.$slots,"info-icon",{},()=>[st(BE)])]),_:2},1032,["index","toast","duration","class","descriptionClass","invert","visibleToasts","closeButton","interacting","position","style","unstyled","classes","cancelButtonStyle","actionButtonStyle","toasts","expandByDefault","gap","expanded","pauseWhenPageIsHidden","cn","heights"])}),128))],16,tb)}),128))],8,ZE))}});/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof window<"u";function ob(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const St=Object.assign;function kc(e,t){const n={};for(const r in t){const s=t[r];n[r]=on(s)?s.map(e):e(s)}return n}const Ci=()=>{},on=Array.isArray,ab=/\/$/,lb=e=>e.replace(ab,"");function xc(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),i=t.slice(l+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=fb(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function cb(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Zd(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ub(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ds(t.matched[r],n.matched[s])&&g0(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Ds(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function g0(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!hb(e[n],t[n]))return!1;return!0}function hb(e,t){return on(e)?tp(e,t):on(t)?tp(t,e):e===t}function tp(e,t){return on(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function fb(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Hi;(function(e){e.pop="pop",e.push="push"})(Hi||(Hi={}));var Si;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Si||(Si={}));function db(e){if(!e)if(ms){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lb(e)}const pb=/^[^#]+#/;function mb(e,t){return e.replace(pb,"#")+t}function gb(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function vb(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=gb(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ep(e,t){return(history.state?history.state.position-t:-1)+e}const _u=new Map;function yb(e,t){_u.set(e,t)}function _b(e){const t=_u.get(e);return _u.delete(e),t}let wb=()=>location.protocol+"//"+location.host;function v0(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Zd(l,"")}return Zd(n,e)+r+s}function Eb(e,t,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=v0(e,location),v=n.value,E=t.value;let T=0;if(f){if(n.value=p,t.value=f,o&&o===v){o=null;return}T=E?f.position-E.position:0}else r(p);s.forEach(y=>{y(n.value,v,{delta:T,type:Hi.pop,direction:T?T>0?Si.forward:Si.back:Si.unknown})})};function l(){o=n.value}function c(f){s.push(f);const p=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(St({},f.state,{scroll:Dl()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function np(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Dl():null}}function bb(e){const{history:t,location:n}=window,r={value:v0(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+l:wb()+e+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){const u=St({},t.state,np(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=St({},s.value,t.state,{forward:l,scroll:Dl()});i(u.current,u,!0);const h=St({},np(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Ib(e){e=db(e);const t=bb(e),n=Eb(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=St({location:"",base:e,go:r,createHref:mb.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Tb(e){return typeof e=="string"||e&&typeof e=="object"}function y0(e){return typeof e=="string"||typeof e=="symbol"}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},_0=Symbol("");var rp;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(rp||(rp={}));function Ms(e,t){return St(new Error,{type:e,[_0]:!0},t)}function Cn(e,t){return e instanceof Error&&_0 in e&&(t==null||!!(e.type&t))}const sp="[^/]+?",Ab={sensitive:!1,strict:!1,start:!0,end:!0},Cb=/[.+*?^${}()[\]/\\]/g;function Sb(e,t){const n=St({},Ab,t),r=[];let s=n.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(Cb,"\\$&"),p+=40;else if(f.type===1){const{value:v,repeatable:E,optional:T,regexp:y}=f;i.push({name:v,repeatable:E,optional:T});const b=y||sp;if(b!==sp){p+=10;try{new RegExp(`(${b})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${v}" (${b}): `+w.message)}}let R=E?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(R=T&&c.length<2?`(?:/${R})`:"/"+R),T&&(R+="?"),s+=R,p+=20,T&&(p+=-8),E&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=i[f-1];h[v.name]=p&&v.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of e){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:v,repeatable:E,optional:T}=p,y=v in c?c[v]:"";if(on(y)&&!E)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const b=on(y)?y.join("/"):y;if(!b)if(T)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Rb(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Pb(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Rb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ip(r))return 1;if(ip(s))return-1}return s.length-r.length}function ip(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const kb={type:0,value:""},xb=/[a-zA-Z0-9_]/;function Ob(e){if(!e)return[[]];if(e==="/")return[[kb]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:xb.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Nb(e,t,n){const r=Sb(Ob(e.path),n),s=St(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Db(e,t){const n=[],r=new Map;t=lp({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,h,f){const p=!f,v=Mb(u);v.aliasOf=f&&f.record;const E=lp(t,u),T=[v];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of R)T.push(St({},v,{components:f?f.record.components:v.components,path:w,aliasOf:f?f.record:v}))}let y,b;for(const R of T){const{path:w}=R;if(h&&w[0]!=="/"){const N=h.record.path,O=N[N.length-1]==="/"?"":"/";R.path=h.record.path+(w&&O+w)}if(y=Nb(R,h,E),f?f.alias.push(y):(b=b||y,b!==y&&b.alias.push(y),p&&u.name&&!ap(y)&&o(u.name)),v.children){const N=v.children;for(let O=0;O<N.length;O++)i(N[O],y,f&&f.children[O])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&l(y)}return b?()=>{o(b)}:Ci}function o(u){if(y0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Pb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!w0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ap(u)&&r.set(u.record.name,u)}function c(u,h){let f,p={},v,E;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Ms(1,{location:u});E=f.record.name,p=St(op(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&op(u.params,f.keys.map(b=>b.name))),v=f.stringify(p)}else if("path"in u)v=u.path,f=n.find(b=>b.re.test(v)),f&&(p=f.parse(v),E=f.record.name);else{if(f=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw Ms(1,{location:u,currentLocation:h});E=f.record.name,p=St({},h.params,u.params),v=f.stringify(p)}const T=[];let y=f;for(;y;)T.unshift(y.record),y=y.parent;return{name:E,path:v,params:p,matched:T,meta:Lb(T)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function op(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Mb(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Vb(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Vb(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function ap(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Lb(e){return e.reduce((t,n)=>St(t,n.meta),{})}function lp(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function w0(e,t){return t.children.some(n=>n===e||w0(e,n))}const E0=/#/g,Fb=/&/g,Ub=/\//g,Bb=/=/g,jb=/\?/g,b0=/\+/g,$b=/%5B/g,Hb=/%5D/g,I0=/%5E/g,zb=/%60/g,T0=/%7B/g,qb=/%7C/g,A0=/%7D/g,Wb=/%20/g;function Oh(e){return encodeURI(""+e).replace(qb,"|").replace($b,"[").replace(Hb,"]")}function Kb(e){return Oh(e).replace(T0,"{").replace(A0,"}").replace(I0,"^")}function wu(e){return Oh(e).replace(b0,"%2B").replace(Wb,"+").replace(E0,"%23").replace(Fb,"%26").replace(zb,"`").replace(T0,"{").replace(A0,"}").replace(I0,"^")}function Gb(e){return wu(e).replace(Bb,"%3D")}function Yb(e){return Oh(e).replace(E0,"%23").replace(jb,"%3F")}function Qb(e){return e==null?"":Yb(e).replace(Ub,"%2F")}function Ha(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Xb(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(b0," "),o=i.indexOf("="),a=Ha(o<0?i:i.slice(0,o)),l=o<0?null:Ha(i.slice(o+1));if(a in t){let c=t[a];on(c)||(c=t[a]=[c]),c.push(l)}else t[a]=l}return t}function cp(e){let t="";for(let n in e){const r=e[n];if(n=Gb(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&wu(i)):[r&&wu(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Jb(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Zb=Symbol(""),up=Symbol(""),Ml=Symbol(""),C0=Symbol(""),Eu=Symbol("");function ci(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function er(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ms(4,{from:n,to:t})):h instanceof Error?a(h):Tb(h)?a(Ms(2,{from:t,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},c=e.call(r&&r.instances[s],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Oc(e,t,n,r){const s=[];for(const i of e)for(const o in i.components){let a=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(tI(a)){const c=(a.__vccOpts||a)[t];c&&s.push(er(c,n,r,i,o))}else{let l=a();s.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=ob(c)?c.default:c;i.components[o]=u;const f=(u.__vccOpts||u)[t];return f&&er(f,n,r,i,o)()}))}}return s}function tI(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function hp(e){const t=yn(Ml),n=yn(C0),r=It(()=>t.resolve(Dt(e.to))),s=It(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Ds.bind(null,u));if(f>-1)return f;const p=fp(l[c-2]);return c>1&&fp(u)===p&&h[h.length-1].path!==p?h.findIndex(Ds.bind(null,l[c-2])):f}),i=It(()=>s.value>-1&&rI(n.params,r.value.params)),o=It(()=>s.value>-1&&s.value===n.matched.length-1&&g0(n.params,r.value.params));function a(l={}){return nI(l)?t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(Ci):Promise.resolve()}return{route:r,href:It(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const eI=Qs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hp,setup(e,{slots:t}){const n=wl(hp(e)),{options:r}=yn(Ml),s=It(()=>({[dp(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dp(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:xl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Qn=eI;function nI(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rI(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const dp=(e,t,n)=>e??t??n,sI=Qs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=yn(Eu),s=It(()=>e.route||r.value),i=yn(up,0),o=It(()=>{let c=Dt(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=It(()=>s.value.matched[o.value]);ga(up,It(()=>o.value+1)),ga(Zb,a),ga(Eu,s);const l=rt();return qr(()=>[l.value,a.value,e.name],([c,u,h],[f,p,v])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ds(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=s.value,u=e.name,h=a.value,f=h&&h.components[u];if(!f)return pp(n.default,{Component:f,route:c});const p=h.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,T=xl(f,St({},v,t,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return pp(n.default,{Component:T,route:c})||T}}});function pp(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const S0=sI;function iI(e){const t=Db(e.routes,e),n=e.parseQuery||Xb,r=e.stringifyQuery||cp,s=e.history,i=ci(),o=ci(),a=ci(),l=c2(Kn);let c=Kn;ms&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kc.bind(null,I=>""+I),h=kc.bind(null,Qb),f=kc.bind(null,Ha);function p(I,M){let V,$;return y0(I)?(V=t.getRecordMatcher(I),$=M):$=I,t.addRoute($,V)}function v(I){const M=t.getRecordMatcher(I);M&&t.removeRoute(M)}function E(){return t.getRoutes().map(I=>I.record)}function T(I){return!!t.getRecordMatcher(I)}function y(I,M){if(M=St({},M||l.value),typeof I=="string"){const m=xc(n,I,M.path),_=t.resolve({path:m.path},M),C=s.createHref(m.fullPath);return St(m,_,{params:f(_.params),hash:Ha(m.hash),redirectedFrom:void 0,href:C})}let V;if("path"in I)V=St({},I,{path:xc(n,I.path,M.path).path});else{const m=St({},I.params);for(const _ in m)m[_]==null&&delete m[_];V=St({},I,{params:h(m)}),M.params=h(M.params)}const $=t.resolve(V,M),vt=I.hash||"";$.params=u(f($.params));const kt=cb(r,St({},I,{hash:Kb(vt),path:$.path})),d=s.createHref(kt);return St({fullPath:kt,hash:vt,query:r===cp?Jb(I.query):I.query||{}},$,{redirectedFrom:void 0,href:d})}function b(I){return typeof I=="string"?xc(n,I,l.value.path):St({},I)}function R(I,M){if(c!==I)return Ms(8,{from:M,to:I})}function w(I){return Q(I)}function N(I){return w(St(b(I),{replace:!0}))}function O(I){const M=I.matched[I.matched.length-1];if(M&&M.redirect){const{redirect:V}=M;let $=typeof V=="function"?V(I):V;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=b($):{path:$},$.params={}),St({query:I.query,hash:I.hash,params:"path"in $?{}:I.params},$)}}function Q(I,M){const V=c=y(I),$=l.value,vt=I.state,kt=I.force,d=I.replace===!0,m=O(V);if(m)return Q(St(b(m),{state:typeof m=="object"?St({},vt,m.state):vt,force:kt,replace:d}),M||V);const _=V;_.redirectedFrom=M;let C;return!kt&&ub(r,$,V)&&(C=Ms(16,{to:_,from:$}),je($,$,!0,!1)),(C?Promise.resolve(C):lt(_,$)).catch(A=>Cn(A)?Cn(A,2)?A:Be(A):dt(A,_,$)).then(A=>{if(A){if(Cn(A,2))return Q(St({replace:d},b(A.to),{state:typeof A.to=="object"?St({},vt,A.to.state):vt,force:kt}),M||_)}else A=q(_,$,!0,d,vt);return $t(_,$,A),A})}function z(I,M){const V=R(I,M);return V?Promise.reject(V):Promise.resolve()}function Y(I){const M=S.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(I):I()}function lt(I,M){let V;const[$,vt,kt]=oI(I,M);V=Oc($.reverse(),"beforeRouteLeave",I,M);for(const m of $)m.leaveGuards.forEach(_=>{V.push(er(_,I,M))});const d=z.bind(null,I,M);return V.push(d),pt(V).then(()=>{V=[];for(const m of i.list())V.push(er(m,I,M));return V.push(d),pt(V)}).then(()=>{V=Oc(vt,"beforeRouteUpdate",I,M);for(const m of vt)m.updateGuards.forEach(_=>{V.push(er(_,I,M))});return V.push(d),pt(V)}).then(()=>{V=[];for(const m of kt)if(m.beforeEnter)if(on(m.beforeEnter))for(const _ of m.beforeEnter)V.push(er(_,I,M));else V.push(er(m.beforeEnter,I,M));return V.push(d),pt(V)}).then(()=>(I.matched.forEach(m=>m.enterCallbacks={}),V=Oc(kt,"beforeRouteEnter",I,M),V.push(d),pt(V))).then(()=>{V=[];for(const m of o.list())V.push(er(m,I,M));return V.push(d),pt(V)}).catch(m=>Cn(m,8)?m:Promise.reject(m))}function $t(I,M,V){a.list().forEach($=>Y(()=>$(I,M,V)))}function q(I,M,V,$,vt){const kt=R(I,M);if(kt)return kt;const d=M===Kn,m=ms?history.state:{};V&&($||d?s.replace(I.fullPath,St({scroll:d&&m&&m.scroll},vt)):s.push(I.fullPath,vt)),l.value=I,je(I,M,V,d),Be()}let _t;function Qt(){_t||(_t=s.listen((I,M,V)=>{if(!wt.listening)return;const $=y(I),vt=O($);if(vt){Q(St(vt,{replace:!0}),$).catch(Ci);return}c=$;const kt=l.value;ms&&yb(ep(kt.fullPath,V.delta),Dl()),lt($,kt).catch(d=>Cn(d,12)?d:Cn(d,2)?(Q(d.to,$).then(m=>{Cn(m,20)&&!V.delta&&V.type===Hi.pop&&s.go(-1,!1)}).catch(Ci),Promise.reject()):(V.delta&&s.go(-V.delta,!1),dt(d,$,kt))).then(d=>{d=d||q($,kt,!1),d&&(V.delta&&!Cn(d,8)?s.go(-V.delta,!1):V.type===Hi.pop&&Cn(d,20)&&s.go(-1,!1)),$t($,kt,d)}).catch(Ci)}))}let xe=ci(),Nt=ci(),bt;function dt(I,M,V){Be(I);const $=Nt.list();return $.length?$.forEach(vt=>vt(I,M,V)):console.error(I),Promise.reject(I)}function Xt(){return bt&&l.value!==Kn?Promise.resolve():new Promise((I,M)=>{xe.add([I,M])})}function Be(I){return bt||(bt=!I,Qt(),xe.list().forEach(([M,V])=>I?V(I):M()),xe.reset()),I}function je(I,M,V,$){const{scrollBehavior:vt}=e;if(!ms||!vt)return Promise.resolve();const kt=!V&&_b(ep(I.fullPath,0))||($||!V)&&history.state&&history.state.scroll||null;return Th().then(()=>vt(I,M,kt)).then(d=>d&&vb(d)).catch(d=>dt(d,I,M))}const ve=I=>s.go(I);let Hn;const S=new Set,wt={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,hasRoute:T,getRoutes:E,resolve:y,options:e,push:w,replace:N,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Nt.add,isReady:Xt,install(I){const M=this;I.component("RouterLink",Qn),I.component("RouterView",S0),I.config.globalProperties.$router=M,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),ms&&!Hn&&l.value===Kn&&(Hn=!0,w(s.location).catch(vt=>{}));const V={};for(const vt in Kn)Object.defineProperty(V,vt,{get:()=>l.value[vt],enumerable:!0});I.provide(Ml,M),I.provide(C0,Rg(V)),I.provide(Eu,l);const $=I.unmount;S.add(I),I.unmount=function(){S.delete(I),S.size<1&&(c=Kn,_t&&_t(),_t=null,l.value=Kn,Hn=!1,bt=!1),$()}}};function pt(I){return I.reduce((M,V)=>M.then(()=>Y(V)),Promise.resolve())}return wt}function oI(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(c=>Ds(c,a))?r.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(c=>Ds(c,l))||s.push(l))}return[n,r,s]}function Nh(){return yn(Ml)}var mp={};/**
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
 */const R0=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},aI=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},P0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(R0(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):aI(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new lI;const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cI=function(e){const t=R0(e);return P0.encodeByteArray(t,!0)},za=function(e){return cI(e).replace(/\./g,"")},k0=function(e){try{return P0.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hI=()=>uI().__FIREBASE_DEFAULTS__,fI=()=>{if(typeof process>"u"||typeof mp>"u")return;const e=mp.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},dI=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&k0(e[1]);return t&&JSON.parse(t)},Dh=()=>{try{return hI()||fI()||dI()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},x0=e=>{var t,n;return(n=(t=Dh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},pI=e=>{const t=x0(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},O0=()=>{var e;return(e=Dh())===null||e===void 0?void 0:e.config},N0=e=>{var t;return(t=Dh())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class mI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function gI(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[za(JSON.stringify(n)),za(JSON.stringify(o)),""].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function yI(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _I(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wI(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function EI(){try{return typeof indexedDB=="object"}catch{return!1}}function bI(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
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
 */const II="FirebaseError";class jn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=II,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?TI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jn(s,a,r)}}function TI(e,t){return e.replace(AI,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const AI=/\{\$([^}]+)}/g;function CI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(gp(i)&&gp(o)){if(!qa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gp(e){return e!==null&&typeof e=="object"}/**
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
 */function _o(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function pi(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function mi(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function SI(e,t){const n=new RI(e,t);return n.subscribe.bind(n)}class RI{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PI(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Nc),s.error===void 0&&(s.error=Nc),s.complete===void 0&&(s.complete=Nc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PI(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Nc(){}/**
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
 */function ke(e){return e&&e._delegate?e._delegate:e}class Qr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class kI{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new mI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(OI(t))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Nr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Nr){return this.instances.has(t)}getOptions(t=Nr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xI(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Nr){return this.component?this.component.multipleInstances?t:Nr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xI(e){return e===Nr?void 0:e}function OI(e){return e.instantiationMode==="EAGER"}/**
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
 */class NI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kI(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var yt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(yt||(yt={}));const DI={debug:yt.DEBUG,verbose:yt.VERBOSE,info:yt.INFO,warn:yt.WARN,error:yt.ERROR,silent:yt.SILENT},MI=yt.INFO,VI={[yt.DEBUG]:"log",[yt.VERBOSE]:"log",[yt.INFO]:"info",[yt.WARN]:"warn",[yt.ERROR]:"error"},LI=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=VI[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mh{constructor(t){this.name=t,this._logLevel=MI,this._logHandler=LI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in yt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?DI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,yt.DEBUG,...t),this._logHandler(this,yt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,yt.VERBOSE,...t),this._logHandler(this,yt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,yt.INFO,...t),this._logHandler(this,yt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,yt.WARN,...t),this._logHandler(this,yt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,yt.ERROR,...t),this._logHandler(this,yt.ERROR,...t)}}const FI=(e,t)=>t.some(n=>e instanceof n);let vp,yp;function UI(){return vp||(vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return yp||(yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const D0=new WeakMap,bu=new WeakMap,M0=new WeakMap,Dc=new WeakMap,Vh=new WeakMap;function jI(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(cr(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&D0.set(n,e)}).catch(()=>{}),Vh.set(t,e),t}function $I(e){if(bu.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});bu.set(e,t)}let Iu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||M0.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function HI(e){Iu=e(Iu)}function zI(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mc(this),t,...n);return M0.set(r,t.sort?t.sort():[t]),cr(r)}:BI().includes(e)?function(...t){return e.apply(Mc(this),t),cr(D0.get(this))}:function(...t){return cr(e.apply(Mc(this),t))}}function qI(e){return typeof e=="function"?zI(e):(e instanceof IDBTransaction&&$I(e),FI(e,UI())?new Proxy(e,Iu):e)}function cr(e){if(e instanceof IDBRequest)return jI(e);if(Dc.has(e))return Dc.get(e);const t=qI(e);return t!==e&&(Dc.set(e,t),Vh.set(t,e)),t}const Mc=e=>Vh.get(e);function WI(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cr(o.result),l.oldVersion,l.newVersion,cr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const KI=["get","getKey","getAll","getAllKeys","count"],GI=["put","add","delete","clear"],Vc=new Map;function _p(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vc.get(t))return Vc.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=GI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||KI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Vc.set(t,i),i}HI(e=>({...e,get:(t,n,r)=>_p(t,n)||e.get(t,n,r),has:(t,n)=>!!_p(t,n)||e.has(t,n)}));/**
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
 */class YI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QI(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Tu="@firebase/app",wp="0.9.25";/**
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
 */const Xr=new Mh("@firebase/app"),XI="@firebase/app-compat",JI="@firebase/analytics-compat",ZI="@firebase/analytics",tT="@firebase/app-check-compat",eT="@firebase/app-check",nT="@firebase/auth",rT="@firebase/auth-compat",sT="@firebase/database",iT="@firebase/database-compat",oT="@firebase/functions",aT="@firebase/functions-compat",lT="@firebase/installations",cT="@firebase/installations-compat",uT="@firebase/messaging",hT="@firebase/messaging-compat",fT="@firebase/performance",dT="@firebase/performance-compat",pT="@firebase/remote-config",mT="@firebase/remote-config-compat",gT="@firebase/storage",vT="@firebase/storage-compat",yT="@firebase/firestore",_T="@firebase/firestore-compat",wT="firebase",ET="10.7.1";/**
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
 */const Au="[DEFAULT]",bT={[Tu]:"fire-core",[XI]:"fire-core-compat",[ZI]:"fire-analytics",[JI]:"fire-analytics-compat",[eT]:"fire-app-check",[tT]:"fire-app-check-compat",[nT]:"fire-auth",[rT]:"fire-auth-compat",[sT]:"fire-rtdb",[iT]:"fire-rtdb-compat",[oT]:"fire-fn",[aT]:"fire-fn-compat",[lT]:"fire-iid",[cT]:"fire-iid-compat",[uT]:"fire-fcm",[hT]:"fire-fcm-compat",[fT]:"fire-perf",[dT]:"fire-perf-compat",[pT]:"fire-rc",[mT]:"fire-rc-compat",[gT]:"fire-gcs",[vT]:"fire-gcs-compat",[yT]:"fire-fst",[_T]:"fire-fst-compat","fire-js":"fire-js",[wT]:"fire-js-all"};/**
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
 */const Wa=new Map,Cu=new Map;function IT(e,t){try{e.container.addComponent(t)}catch(n){Xr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Vs(e){const t=e.name;if(Cu.has(t))return Xr.debug(`There were multiple attempts to register component ${t}.`),!1;Cu.set(t,e);for(const n of Wa.values())IT(n,e);return!0}function Lh(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const TT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ur=new yo("app","Firebase",TT);/**
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
 */class AT{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Xs=ET;function V0(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Au,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw ur.create("bad-app-name",{appName:String(s)});if(n||(n=O0()),!n)throw ur.create("no-options");const i=Wa.get(s);if(i){if(qa(n,i.options)&&qa(r,i.config))return i;throw ur.create("duplicate-app",{appName:s})}const o=new NI(s);for(const l of Cu.values())o.addComponent(l);const a=new AT(n,r,o);return Wa.set(s,a),a}function L0(e=Au){const t=Wa.get(e);if(!t&&e===Au&&O0())return V0();if(!t)throw ur.create("no-app",{appName:e});return t}function hr(e,t,n){var r;let s=(r=bT[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Xr.warn(a.join(" "));return}Vs(new Qr(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const CT="firebase-heartbeat-database",ST=1,zi="firebase-heartbeat-store";let Lc=null;function F0(){return Lc||(Lc=WI(CT,ST,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(zi)}}}).catch(e=>{throw ur.create("idb-open",{originalErrorMessage:e.message})})),Lc}async function RT(e){try{return await(await F0()).transaction(zi).objectStore(zi).get(U0(e))}catch(t){if(t instanceof jn)Xr.warn(t.message);else{const n=ur.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Xr.warn(n.message)}}}async function Ep(e,t){try{const r=(await F0()).transaction(zi,"readwrite");await r.objectStore(zi).put(t,U0(e)),await r.done}catch(n){if(n instanceof jn)Xr.warn(n.message);else{const r=ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xr.warn(r.message)}}}function U0(e){return`${e.name}!${e.options.appId}`}/**
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
 */const PT=1024,kT=30*24*60*60*1e3;class xT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bp();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:r,unsentEntries:s}=OT(this._heartbeatsCache.heartbeats),i=za(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bp(){return new Date().toISOString().substring(0,10)}function OT(e,t=PT){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ip(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ip(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EI()?bI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ep(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ip(e){return za(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function DT(e){Vs(new Qr("platform-logger",t=>new YI(t),"PRIVATE")),Vs(new Qr("heartbeat",t=>new xT(t),"PRIVATE")),hr(Tu,wp,e),hr(Tu,wp,"esm2017"),hr("fire-js","")}DT("");var MT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Fh=Fh||{},at=MT||self;function Vl(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function wo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function VT(e){return Object.prototype.hasOwnProperty.call(e,Fc)&&e[Fc]||(e[Fc]=++LT)}var Fc="closure_uid_"+(1e9*Math.random()>>>0),LT=0;function FT(e,t,n){return e.call.apply(e.bind,arguments)}function UT(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function be(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?be=FT:be=UT,be.apply(null,arguments)}function Qo(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function le(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Tr(){this.s=this.s,this.o=this.o}var BT=0;Tr.prototype.s=!1;Tr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),BT!=0)&&VT(this)};Tr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const B0=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Uh(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Tp(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Vl(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var jT=function(){if(!at.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};at.addEventListener("test",n,t),at.removeEventListener("test",n,t)}catch{}return e}();function qi(e){return/^[\s\xa0]*$/.test(e)}function Ll(){var e=at.navigator;return e&&(e=e.userAgent)?e:""}function dn(e){return Ll().indexOf(e)!=-1}function Bh(e){return Bh[" "](e),e}Bh[" "]=function(){};function $T(e,t){var n=DA;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var HT=dn("Opera"),Ls=dn("Trident")||dn("MSIE"),j0=dn("Edge"),Su=j0||Ls,$0=dn("Gecko")&&!(Ll().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),zT=Ll().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function H0(){var e=at.document;return e?e.documentMode:void 0}var Ru;t:{var Uc="",Bc=function(){var e=Ll();if($0)return/rv:([^\);]+)(\)|;)/.exec(e);if(j0)return/Edge\/([\d\.]+)/.exec(e);if(Ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(zT)return/WebKit\/(\S+)/.exec(e);if(HT)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Bc&&(Uc=Bc?Bc[1]:""),Ls){var jc=H0();if(jc!=null&&jc>parseFloat(Uc)){Ru=String(jc);break t}}Ru=Uc}var Pu;if(at.document&&Ls){var Ap=H0();Pu=Ap||parseInt(Ru,10)||void 0}else Pu=void 0;var qT=Pu;function Wi(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($0){t:{try{Bh(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:WT[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wi.$.h.call(this)}}le(Wi,Ie);var WT={2:"touch",3:"pen",4:"mouse"};Wi.prototype.h=function(){Wi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Eo="closure_listenable_"+(1e6*Math.random()|0),KT=0;function GT(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++KT,this.fa=this.ia=!1}function Fl(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function jh(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function YT(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function z0(e){const t={};for(const n in e)t[n]=e[n];return t}const Cp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function q0(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Cp.length;i++)n=Cp[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ul(e){this.src=e,this.g={},this.h=0}Ul.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=xu(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new GT(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ku(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=B0(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function xu(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var $h="closure_lm_"+(1e6*Math.random()|0),$c={};function W0(e,t,n,r,s){if(r&&r.once)return G0(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)W0(e,t[i],n,r,s);return null}return n=qh(n),e&&e[Eo]?e.O(t,n,wo(r)?!!r.capture:!!r,s):K0(e,t,n,!1,r,s)}function K0(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=wo(s)?!!s.capture:!!s,a=zh(e);if(a||(e[$h]=a=new Ul(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=QT(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)jT||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Q0(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function QT(){function e(n){return t.call(e.src,e.listener,n)}const t=XT;return e}function G0(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)G0(e,t[i],n,r,s);return null}return n=qh(n),e&&e[Eo]?e.P(t,n,wo(r)?!!r.capture:!!r,s):K0(e,t,n,!0,r,s)}function Y0(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Y0(e,t[i],n,r,s);else r=wo(r)?!!r.capture:!!r,n=qh(n),e&&e[Eo]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=xu(i,n,r,s),-1<n&&(Fl(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=zh(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xu(t,n,r,s)),(n=-1<e?t[e]:null)&&Hh(n))}function Hh(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Eo])ku(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q0(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=zh(t))?(ku(n,e),n.h==0&&(n.src=null,t[$h]=null)):Fl(e)}}}function Q0(e){return e in $c?$c[e]:$c[e]="on"+e}function XT(e,t){if(e.fa)e=!0;else{t=new Wi(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Hh(e),e=n.call(r,t)}return e}function zh(e){return e=e[$h],e instanceof Ul?e:null}var Hc="__closure_events_fn_"+(1e9*Math.random()>>>0);function qh(e){return typeof e=="function"?e:(e[Hc]||(e[Hc]=function(t){return e.handleEvent(t)}),e[Hc])}function ae(){Tr.call(this),this.i=new Ul(this),this.S=this,this.J=null}le(ae,Tr);ae.prototype[Eo]=!0;ae.prototype.removeEventListener=function(e,t,n,r){Y0(this,e,t,n,r)};function me(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var s=t;t=new Ie(r,e),q0(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Xo(o,r,!0,t)&&s}if(o=t.g=e,s=Xo(o,r,!0,t)&&s,s=Xo(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Xo(o,r,!1,t)&&s}ae.prototype.N=function(){if(ae.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Fl(n[r]);delete e.g[t],e.h--}}this.J=null};ae.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ae.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Xo(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ku(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Wh=at.JSON.stringify;class JT{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function ZT(){var e=Kh;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class tA{constructor(){this.h=this.g=null}add(t,n){const r=X0.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var X0=new JT(()=>new eA,e=>e.reset());class eA{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nA(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function rA(e){at.setTimeout(()=>{throw e},0)}let Ki,Gi=!1,Kh=new tA,J0=()=>{const e=at.Promise.resolve(void 0);Ki=()=>{e.then(sA)}};var sA=()=>{for(var e;e=ZT();){try{e.h.call(e.g)}catch(n){rA(n)}var t=X0;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gi=!1};function Bl(e,t){ae.call(this),this.h=e||1,this.g=t||at,this.j=be(this.qb,this),this.l=Date.now()}le(Bl,ae);B=Bl.prototype;B.ga=!1;B.T=null;B.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),me(this,"tick"),this.ga&&(Gh(this),this.start()))}};B.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gh(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}B.N=function(){Bl.$.N.call(this),Gh(this),delete this.g};function Yh(e,t,n){if(typeof e=="function")n&&(e=be(e,n));else if(e&&typeof e.handleEvent=="function")e=be(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:at.setTimeout(e,t||0)}function Z0(e){e.g=Yh(()=>{e.g=null,e.i&&(e.i=!1,Z0(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class iA extends Tr{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Z0(this)}N(){super.N(),this.g&&(at.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yi(e){Tr.call(this),this.h=e,this.g={}}le(Yi,Tr);var Sp=[];function tv(e,t,n,r){Array.isArray(n)||(n&&(Sp[0]=n.toString()),n=Sp);for(var s=0;s<n.length;s++){var i=W0(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function ev(e){jh(e.g,function(t,n){this.g.hasOwnProperty(n)&&Hh(t)},e),e.g={}}Yi.prototype.N=function(){Yi.$.N.call(this),ev(this)};Yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jl(){this.g=!0}jl.prototype.Ea=function(){this.g=!1};function oA(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function aA(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function _s(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+cA(e,n)+(r?" "+r:"")})}function lA(e,t){e.info(function(){return"TIMEOUT: "+t})}jl.prototype.info=function(){};function cA(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Wh(n)}catch{return t}}var us={},Rp=null;function $l(){return Rp=Rp||new ae}us.Ta="serverreachability";function nv(e){Ie.call(this,us.Ta,e)}le(nv,Ie);function Qi(e){const t=$l();me(t,new nv(t))}us.STAT_EVENT="statevent";function rv(e,t){Ie.call(this,us.STAT_EVENT,e),this.stat=t}le(rv,Ie);function Pe(e){const t=$l();me(t,new rv(t,e))}us.Ua="timingevent";function sv(e,t){Ie.call(this,us.Ua,e),this.size=t}le(sv,Ie);function bo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return at.setTimeout(function(){e()},t)}var Hl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},iv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qh(){}Qh.prototype.h=null;function Pp(e){return e.h||(e.h=e.i())}function ov(){}var Io={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Xh(){Ie.call(this,"d")}le(Xh,Ie);function Jh(){Ie.call(this,"c")}le(Jh,Ie);var Ou;function zl(){}le(zl,Qh);zl.prototype.g=function(){return new XMLHttpRequest};zl.prototype.i=function(){return{}};Ou=new zl;function To(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Yi(this),this.P=uA,e=Su?125:void 0,this.V=new Bl(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new av}function av(){this.i=null,this.g="",this.h=!1}var uA=45e3,lv={},Nu={};B=To.prototype;B.setTimeout=function(e){this.P=e};function Du(e,t,n){e.L=1,e.A=Wl(Nn(t)),e.u=n,e.S=!0,cv(e,null)}function cv(e,t){e.G=Date.now(),Ao(e),e.B=Nn(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),vv(n.i,"t",r),e.o=0,n=e.l.J,e.h=new av,e.g=Fv(e.l,n?t:null,!e.u),0<e.O&&(e.M=new iA(be(e.Pa,e,e.g),e.O)),tv(e.U,e.g,"readystatechange",e.nb),t=e.I?z0(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Qi(),oA(e.j,e.v,e.B,e.m,e.W,e.u)}B.nb=function(e){e=e.target;const t=this.M;t&&mn(e)==3?t.l():this.Pa(e)};B.Pa=function(e){try{if(e==this.g)t:{const u=mn(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Su||this.g&&(this.h.h||this.g.ja()||Np(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Qi(3):Qi(2)),ql(this);var n=this.g.da();this.ca=n;e:if(uv(this)){var r=Np(this.g);e="";var s=r.length,i=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Lr(this),Ri(this);var o="";break e}this.h.i=new at.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,aA(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qi(a)){var c=a;break e}}c=null}if(n=c)_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mu(this,n);else{this.i=!1,this.s=3,Pe(12),Lr(this),Ri(this);break t}}this.S?(hv(this,u,o),Su&&this.i&&u==3&&(tv(this.U,this.V,"tick",this.mb),this.V.start())):(_s(this.j,this.m,o,null),Mu(this,o)),u==4&&Lr(this),this.i&&!this.J&&(u==4?Dv(this.l,this):(this.i=!1,Ao(this)))}else xA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),Lr(this),Ri(this)}}}catch{}finally{}};function uv(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function hv(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=hA(e,n),s==Nu){t==4&&(e.s=4,Pe(14),r=!1),_s(e.j,e.m,null,"[Incomplete Response]");break}else if(s==lv){e.s=4,Pe(15),_s(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else _s(e.j,e.m,s,null),Mu(e,s);uv(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Pe(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sf(t),t.M=!0,Pe(11))):(_s(e.j,e.m,n,"[Invalid Chunked Response]"),Lr(e),Ri(e))}B.mb=function(){if(this.g){var e=mn(this.g),t=this.g.ja();this.o<t.length&&(ql(this),hv(this,e,t),this.i&&e!=4&&Ao(this))}};function hA(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Nu:(n=Number(t.substring(n,r)),isNaN(n)?lv:(r+=1,r+n>t.length?Nu:(t=t.slice(r,r+n),e.o=r+n,t)))}B.cancel=function(){this.J=!0,Lr(this)};function Ao(e){e.Y=Date.now()+e.P,fv(e,e.P)}function fv(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=bo(be(e.lb,e),t)}function ql(e){e.C&&(at.clearTimeout(e.C),e.C=null)}B.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(lA(this.j,this.B),this.L!=2&&(Qi(),Pe(17)),Lr(this),this.s=2,Ri(this)):fv(this,this.Y-e)};function Ri(e){e.l.H==0||e.J||Dv(e.l,e)}function Lr(e){ql(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Gh(e.V),ev(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Mu(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Vu(n.i,e))){if(!e.K&&Vu(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ya(n),Ql(n);else break t;rf(n),Pe(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=bo(be(n.ib,n),6e3));if(1>=wv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Fr(n,11)}else if((e.K||n.g==e)&&Ya(n),!qi(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zh(i,i.h),i.h=null))}if(r.F){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.Da=E,Bt(r.I,r.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Lv(r,r.J?r.pa:null,r.Y),o.K){Ev(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(ql(a),Ao(a)),r.g=o}else Ov(r);0<n.j.length&&Xl(n)}else c[0]!="stop"&&c[0]!="close"||Fr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Fr(n,7):nf(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Qi(4)}catch{}}function fA(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Vl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function dA(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Vl(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function dv(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Vl(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=dA(e),r=fA(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var pv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pA(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Wr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Wr){this.h=e.h,Ka(this,e.j),this.s=e.s,this.g=e.g,Ga(this,e.m),this.l=e.l;var t=e.i,n=new Xi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),kp(this,n),this.o=e.o}else e&&(t=String(e).match(pv))?(this.h=!1,Ka(this,t[1]||"",!0),this.s=gi(t[2]||""),this.g=gi(t[3]||"",!0),Ga(this,t[4]),this.l=gi(t[5]||"",!0),kp(this,t[6]||"",!0),this.o=gi(t[7]||"")):(this.h=!1,this.i=new Xi(null,this.h))}Wr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(vi(t,xp,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(vi(t,xp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(vi(n,n.charAt(0)=="/"?vA:gA,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",vi(n,_A)),e.join("")};function Nn(e){return new Wr(e)}function Ka(e,t,n){e.j=n?gi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ga(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function kp(e,t,n){t instanceof Xi?(e.i=t,wA(e.i,e.h)):(n||(t=vi(t,yA)),e.i=new Xi(t,e.h))}function Bt(e,t,n){e.i.set(t,n)}function Wl(e){return Bt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function gi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function vi(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,mA),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function mA(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var xp=/[#\/\?@]/g,gA=/[#\?:]/g,vA=/[#\?]/g,yA=/[#\?@]/g,_A=/#/g;function Xi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ar(e){e.g||(e.g=new Map,e.h=0,e.i&&pA(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}B=Xi.prototype;B.add=function(e,t){Ar(this),this.i=null,e=Js(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function mv(e,t){Ar(e),t=Js(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function gv(e,t){return Ar(e),t=Js(e,t),e.g.has(t)}B.forEach=function(e,t){Ar(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};B.ta=function(){Ar(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};B.Z=function(e){Ar(this);let t=[];if(typeof e=="string")gv(this,e)&&(t=t.concat(this.g.get(Js(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};B.set=function(e,t){return Ar(this),this.i=null,e=Js(this,e),gv(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};B.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function vv(e,t,n){mv(e,t),0<n.length&&(e.i=null,e.g.set(Js(e,t),Uh(n)),e.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Js(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wA(e,t){t&&!e.j&&(Ar(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(mv(this,r),vv(this,s,n))},e)),e.j=t}var EA=class{constructor(e,t){this.g=e,this.map=t}};function yv(e){this.l=e||bA,at.PerformanceNavigationTiming?(e=at.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(at.g&&at.g.Ka&&at.g.Ka()&&at.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bA=10;function _v(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function wv(e){return e.h?1:e.g?e.g.size:0}function Vu(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Zh(e,t){e.g?e.g.add(t):e.h=t}function Ev(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}yv.prototype.cancel=function(){if(this.i=bv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function bv(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Uh(e.i)}var IA=class{stringify(e){return at.JSON.stringify(e,void 0)}parse(e){return at.JSON.parse(e,void 0)}};function TA(){this.g=new IA}function AA(e,t,n){const r=n||"";try{dv(e,function(s,i){let o=s;wo(s)&&(o=Wh(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function CA(e,t){const n=new jl;if(at.Image){const r=new Image;r.onload=Qo(Jo,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Qo(Jo,n,r,"TestLoadImage: error",!1,t),r.onabort=Qo(Jo,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Qo(Jo,n,r,"TestLoadImage: timeout",!1,t),at.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Jo(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function Kl(e){this.l=e.ec||null,this.j=e.ob||!1}le(Kl,Qh);Kl.prototype.g=function(){return new Gl(this.l,this.j)};Kl.prototype.i=function(e){return function(){return e}}({});function Gl(e,t){ae.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=tf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}le(Gl,ae);var tf=0;B=Gl.prototype;B.open=function(e,t){if(this.readyState!=tf)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ji(this)};B.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||at).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=tf};B.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof at.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Iv(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Iv(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}B.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Co(this):Ji(this),this.readyState==3&&Iv(this)}};B.Za=function(e){this.g&&(this.response=this.responseText=e,Co(this))};B.Ya=function(e){this.g&&(this.response=e,Co(this))};B.ka=function(){this.g&&Co(this)};function Co(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ji(e)}B.setRequestHeader=function(e,t){this.v.append(e,t)};B.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ji(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Gl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var SA=at.JSON.parse;function Yt(e){ae.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Tv,this.L=this.M=!1}le(Yt,ae);var Tv="",RA=/^https?$/i,PA=["POST","PUT"];B=Yt.prototype;B.Oa=function(e){this.M=e};B.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ou.g(),this.C=this.u?Pp(this.u):Pp(Ou),this.g.onreadystatechange=be(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Op(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=at.FormData&&e instanceof at.FormData,!(0<=B0(PA,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Sv(this),0<this.B&&((this.L=kA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=be(this.ua,this)):this.A=Yh(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Op(this,i)}};function kA(e){return Ls&&typeof e.timeout=="number"&&e.ontimeout!==void 0}B.ua=function(){typeof Fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,me(this,"timeout"),this.abort(8))};function Op(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Av(e),Yl(e)}function Av(e){e.F||(e.F=!0,me(e,"complete"),me(e,"error"))}B.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,me(this,"complete"),me(this,"abort"),Yl(this))};B.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yl(this,!0)),Yt.$.N.call(this)};B.La=function(){this.s||(this.G||this.v||this.l?Cv(this):this.kb())};B.kb=function(){Cv(this)};function Cv(e){if(e.h&&typeof Fh<"u"&&(!e.C[1]||mn(e)!=4||e.da()!=2)){if(e.v&&mn(e)==4)Yh(e.La,0,e);else if(me(e,"readystatechange"),mn(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(pv)[1]||null;!s&&at.self&&at.self.location&&(s=at.self.location.protocol.slice(0,-1)),r=!RA.test(s?s.toLowerCase():"")}n=r}if(n)me(e,"complete"),me(e,"success");else{e.m=6;try{var i=2<mn(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Av(e)}}finally{Yl(e)}}}}function Yl(e,t){if(e.g){Sv(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||me(e,"ready");try{n.onreadystatechange=r}catch{}}}function Sv(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(at.clearTimeout(e.A),e.A=null)}B.isActive=function(){return!!this.g};function mn(e){return e.g?e.g.readyState:0}B.da=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}};B.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),SA(t)}};function Np(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Tv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function xA(e){const t={};e=(e.g&&2<=mn(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(qi(e[r]))continue;var n=nA(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}YT(t,function(r){return r.join(", ")})}B.Ia=function(){return this.m};B.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rv(e){let t="";return jh(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ef(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Rv(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):Bt(e,t,n))}function ui(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Pv(e){this.Ga=0,this.j=[],this.l=new jl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ui("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ui("baseRetryDelayMs",5e3,e),this.hb=ui("retryDelaySeedMs",1e4,e),this.eb=ui("forwardChannelMaxRetries",2,e),this.xa=ui("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new yv(e&&e.concurrentRequestLimit),this.Ja=new TA,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}B=Pv.prototype;B.ra=8;B.H=1;function nf(e){if(kv(e),e.H==3){var t=e.W++,n=Nn(e.I);if(Bt(n,"SID",e.K),Bt(n,"RID",t),Bt(n,"TYPE","terminate"),So(e,n),t=new To(e,e.l,t),t.L=2,t.A=Wl(Nn(n)),n=!1,at.navigator&&at.navigator.sendBeacon)try{n=at.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&at.Image&&(new Image().src=t.A,n=!0),n||(t.g=Fv(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ao(t)}Vv(e)}function Ql(e){e.g&&(sf(e),e.g.cancel(),e.g=null)}function kv(e){Ql(e),e.u&&(at.clearTimeout(e.u),e.u=null),Ya(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&at.clearTimeout(e.m),e.m=null)}function Xl(e){if(!_v(e.i)&&!e.m){e.m=!0;var t=e.Na;Ki||J0(),Gi||(Ki(),Gi=!0),Kh.add(t,e),e.C=0}}function OA(e,t){return wv(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=bo(be(e.Na,e,t),Mv(e,e.C)),e.C++,!0)}B.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new To(this,this.l,e);let i=this.s;if(this.U&&(i?(i=z0(i),q0(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=xv(this,s,t),n=Nn(this.I),Bt(n,"RID",e),Bt(n,"CVER",22),this.F&&Bt(n,"X-HTTP-Session-Id",this.F),So(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Rv(i)))+"&"+t:this.o&&ef(n,this.o,i)),Zh(this.i,s),this.bb&&Bt(n,"TYPE","init"),this.P?(Bt(n,"$req",t),Bt(n,"SID","null"),s.aa=!0,Du(s,n,null)):Du(s,n,t),this.H=2}}else this.H==3&&(e?Dp(this,e):this.j.length==0||_v(this.i)||Dp(this))};function Dp(e,t){var n;t?n=t.m:n=e.W++;const r=Nn(e.I);Bt(r,"SID",e.K),Bt(r,"RID",n),Bt(r,"AID",e.V),So(e,r),e.o&&e.s&&ef(r,e.o,e.s),n=new To(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=xv(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Zh(e.i,n),Du(n,r,t)}function So(e,t){e.na&&jh(e.na,function(n,r){Bt(t,r,n)}),e.h&&dv({},function(n,r){Bt(t,r,n)})}function xv(e,t,n){n=Math.min(e.j.length,n);var r=e.h?be(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{AA(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ov(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ki||J0(),Gi||(Ki(),Gi=!0),Kh.add(t,e),e.A=0}}function rf(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=bo(be(e.Ma,e),Mv(e,e.A)),e.A++,!0)}B.Ma=function(){if(this.u=null,Nv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=bo(be(this.jb,this),e)}};B.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Pe(10),Ql(this),Nv(this))};function sf(e){e.B!=null&&(at.clearTimeout(e.B),e.B=null)}function Nv(e){e.g=new To(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Nn(e.wa);Bt(t,"RID","rpc"),Bt(t,"SID",e.K),Bt(t,"AID",e.V),Bt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Bt(t,"TO",e.qa),Bt(t,"TYPE","xmlhttp"),So(e,t),e.o&&e.s&&ef(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=Wl(Nn(t)),n.u=null,n.S=!0,cv(n,e)}B.ib=function(){this.v!=null&&(this.v=null,Ql(this),rf(this),Pe(19))};function Ya(e){e.v!=null&&(at.clearTimeout(e.v),e.v=null)}function Dv(e,t){var n=null;if(e.g==t){Ya(e),sf(e),e.g=null;var r=2}else if(Vu(e.i,t))n=t.F,Ev(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=$l(),me(r,new sv(r,n)),Xl(e)}else Ov(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&OA(e,t)||r==2&&rf(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Fr(e,5);break;case 4:Fr(e,10);break;case 3:Fr(e,6);break;default:Fr(e,2)}}}function Mv(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Fr(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=be(e.pb,e);n||(n=new Wr("//www.google.com/images/cleardot.gif"),at.location&&at.location.protocol=="http"||Ka(n,"https"),Wl(n)),CA(n.toString(),r)}else Pe(2);e.H=0,e.h&&e.h.za(t),Vv(e),kv(e)}B.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Pe(2)):(this.l.info("Failed to ping google.com"),Pe(1))};function Vv(e){if(e.H=0,e.ma=[],e.h){const t=bv(e.i);(t.length!=0||e.j.length!=0)&&(Tp(e.ma,t),Tp(e.ma,e.j),e.i.i.length=0,Uh(e.j),e.j.length=0),e.h.ya()}}function Lv(e,t,n){var r=n instanceof Wr?Nn(n):new Wr(n);if(r.g!="")t&&(r.g=t+"."+r.g),Ga(r,r.m);else{var s=at.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Wr(null);r&&Ka(i,r),t&&(i.g=t),s&&Ga(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&Bt(r,n,t),Bt(r,"VER",e.ra),So(e,r),r}function Fv(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Yt(new Kl({ob:n})):new Yt(e.va),t.Oa(e.J),t}B.isActive=function(){return!!this.h&&this.h.isActive(this)};function Uv(){}B=Uv.prototype;B.Ba=function(){};B.Aa=function(){};B.za=function(){};B.ya=function(){};B.isActive=function(){return!0};B.Va=function(){};function Qa(){if(Ls&&!(10<=Number(qT)))throw Error("Environmental error: no available transport.")}Qa.prototype.g=function(e,t){return new Fe(e,t)};function Fe(e,t){ae.call(this),this.g=new Pv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!qi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qi(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Zs(this)}le(Fe,ae);Fe.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Pe(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lv(e,null,e.Y),Xl(e)};Fe.prototype.close=function(){nf(this.g)};Fe.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Wh(e),e=n);t.j.push(new EA(t.fb++,e)),t.H==3&&Xl(t)};Fe.prototype.N=function(){this.g.h=null,delete this.j,nf(this.g),delete this.g,Fe.$.N.call(this)};function Bv(e){Xh.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}le(Bv,Xh);function jv(){Jh.call(this),this.status=1}le(jv,Jh);function Zs(e){this.g=e}le(Zs,Uv);Zs.prototype.Ba=function(){me(this.g,"a")};Zs.prototype.Aa=function(e){me(this.g,new Bv(e))};Zs.prototype.za=function(e){me(this.g,new jv)};Zs.prototype.ya=function(){me(this.g,"b")};function NA(){this.blockSize=-1}function an(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}le(an,NA);an.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function zc(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}an.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)zc(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){zc(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){zc(this,r),s=0;break}}this.h=s,this.i+=t};an.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function Rt(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var DA={};function of(e){return-128<=e&&128>e?$T(e,function(t){return new Rt([t|0],0>t?-1:0)}):new Rt([e|0],0>e?-1:0)}function gn(e){if(isNaN(e)||!isFinite(e))return Cs;if(0>e)return fe(gn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Lu;return new Rt(t,0)}function $v(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return fe($v(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=gn(Math.pow(t,8)),r=Cs,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=gn(Math.pow(t,i)),r=r.R(i).add(gn(o))):(r=r.R(n),r=r.add(gn(o)))}return r}var Lu=4294967296,Cs=of(0),Fu=of(1),Mp=of(16777216);B=Rt.prototype;B.ea=function(){if(ze(this))return-fe(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Lu+r)*t,t*=Lu}return e};B.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Pn(this))return"0";if(ze(this))return"-"+fe(this).toString(e);for(var t=gn(Math.pow(e,6)),n=this,r="";;){var s=Ja(n,t).g;n=Xa(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Pn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};B.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Pn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ze(e){return e.h==-1}B.X=function(e){return e=Xa(this,e),ze(e)?-1:Pn(e)?0:1};function fe(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new Rt(n,~e.h).add(Fu)}B.abs=function(){return ze(this)?fe(this):this};B.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Rt(n,n[n.length-1]&-2147483648?-1:0)};function Xa(e,t){return e.add(fe(t))}B.R=function(e){if(Pn(this)||Pn(e))return Cs;if(ze(this))return ze(e)?fe(this).R(fe(e)):fe(fe(this).R(e));if(ze(e))return fe(this.R(fe(e)));if(0>this.X(Mp)&&0>e.X(Mp))return gn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,Zo(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Zo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Zo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Zo(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new Rt(n,0)};function Zo(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function hi(e,t){this.g=e,this.h=t}function Ja(e,t){if(Pn(t))throw Error("division by zero");if(Pn(e))return new hi(Cs,Cs);if(ze(e))return t=Ja(fe(e),t),new hi(fe(t.g),fe(t.h));if(ze(t))return t=Ja(e,fe(t)),new hi(fe(t.g),t.h);if(30<e.g.length){if(ze(e)||ze(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Fu,r=t;0>=r.X(e);)n=Vp(n),r=Vp(r);var s=ps(n,1),i=ps(r,1);for(r=ps(r,2),n=ps(n,2);!Pn(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=ps(r,1),n=ps(n,1)}return t=Xa(e,s.R(t)),new hi(s,t)}for(s=Cs;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=gn(n),o=i.R(t);ze(o)||0<o.X(e);)n-=r,i=gn(n),o=i.R(t);Pn(i)&&(i=Fu),s=s.add(i),e=Xa(e,o)}return new hi(s,e)}B.gb=function(e){return Ja(this,e).h};B.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new Rt(n,this.h&e.h)};B.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new Rt(n,this.h|e.h)};B.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new Rt(n,this.h^e.h)};function Vp(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new Rt(n,e.h)}function ps(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new Rt(s,e.h)}Qa.prototype.createWebChannel=Qa.prototype.g;Fe.prototype.send=Fe.prototype.u;Fe.prototype.open=Fe.prototype.m;Fe.prototype.close=Fe.prototype.close;Hl.NO_ERROR=0;Hl.TIMEOUT=8;Hl.HTTP_ERROR=6;iv.COMPLETE="complete";ov.EventType=Io;Io.OPEN="a";Io.CLOSE="b";Io.ERROR="c";Io.MESSAGE="d";ae.prototype.listen=ae.prototype.O;Yt.prototype.listenOnce=Yt.prototype.P;Yt.prototype.getLastError=Yt.prototype.Sa;Yt.prototype.getLastErrorCode=Yt.prototype.Ia;Yt.prototype.getStatus=Yt.prototype.da;Yt.prototype.getResponseJson=Yt.prototype.Wa;Yt.prototype.getResponseText=Yt.prototype.ja;Yt.prototype.send=Yt.prototype.ha;Yt.prototype.setWithCredentials=Yt.prototype.Oa;an.prototype.digest=an.prototype.l;an.prototype.reset=an.prototype.reset;an.prototype.update=an.prototype.j;Rt.prototype.add=Rt.prototype.add;Rt.prototype.multiply=Rt.prototype.R;Rt.prototype.modulo=Rt.prototype.gb;Rt.prototype.compare=Rt.prototype.X;Rt.prototype.toNumber=Rt.prototype.ea;Rt.prototype.toString=Rt.prototype.toString;Rt.prototype.getBits=Rt.prototype.D;Rt.fromNumber=gn;Rt.fromString=$v;var MA=function(){return new Qa},VA=function(){return $l()},qc=Hl,LA=iv,FA=us,Lp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ta=ov,UA=Yt,BA=an,Ss=Rt;const Fp="@firebase/firestore";/**
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
 */let _e=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};_e.UNAUTHENTICATED=new _e(null),_e.GOOGLE_CREDENTIALS=new _e("google-credentials-uid"),_e.FIRST_PARTY=new _e("first-party-uid"),_e.MOCK_USER=new _e("mock-user");/**
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
 */let ti="10.7.0";/**
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
 */const Jr=new Mh("@firebase/firestore");function fi(){return Jr.logLevel}function W(e,...t){if(Jr.logLevel<=yt.DEBUG){const n=t.map(af);Jr.debug(`Firestore (${ti}): ${e}`,...n)}}function Dn(e,...t){if(Jr.logLevel<=yt.ERROR){const n=t.map(af);Jr.error(`Firestore (${ti}): ${e}`,...n)}}function Fs(e,...t){if(Jr.logLevel<=yt.WARN){const n=t.map(af);Jr.warn(`Firestore (${ti}): ${e}`,...n)}}function af(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function ot(e="Unexpected state"){const t=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+e;throw Dn(t),new Error(t)}function Vt(e,t){e||ot()}function ft(e,t){return e}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends jn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class Hv{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(_e.UNAUTHENTICATED))}shutdown(){}}class $A{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class HA{constructor(t){this.t=t,this.currentUser=_e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kr,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Vt(typeof r.accessToken=="string"),new Hv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Vt(t===null||typeof t=="string"),new _e(t)}}class zA{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=_e.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qA{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new zA(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(_e.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WA{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KA{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Vt(typeof n.token=="string"),this.R=n.token,new WA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function GA(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class zv{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=GA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function Ct(e,t){return e<t?-1:e>t?1:0}function Us(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
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
 */class ne{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ne.fromMillis(Date.now())}static fromDate(t){return ne.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new ne(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ct(this.nanoseconds,t.nanoseconds):Ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ut{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ut(t)}static min(){return new ut(new ne(0,0))}static max(){return new ut(new ne(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Zi{constructor(t,n,r){n===void 0?n=0:n>t.length&&ot(),r===void 0?r=t.length-n:r>t.length-n&&ot(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Zi.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Zi?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class qt extends Zi{construct(t,n,r){return new qt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new Z(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new qt(n)}static emptyPath(){return new qt([])}}const YA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Zi{construct(t,n,r){return new pe(t,n,r)}static isValidIdentifier(t){return YA.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pe(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(k.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new Z(k.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Z(k.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new pe(n)}static emptyPath(){return new pe([])}}/**
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
 */class tt{constructor(t){this.path=t}static fromPath(t){return new tt(qt.fromString(t))}static fromName(t){return new tt(qt.fromString(t).popFirst(5))}static empty(){return new tt(qt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&qt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return qt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new tt(new qt(t.slice()))}}function QA(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=ut.fromTimestamp(r===1e9?new ne(n+1,0):new ne(n,r));return new yr(s,tt.empty(),t)}function XA(e){return new yr(e.readTime,e.key,-1)}class yr{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(ut.min(),tt.empty(),-1)}static max(){return new yr(ut.max(),tt.empty(),-1)}}function JA(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=tt.comparator(e.documentKey,t.documentKey),n!==0?n:Ct(e.largestBatchId,t.largestBatchId))}/**
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
 */const ZA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Ro(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==ZA)throw e;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&ot(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):P.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):P.reject(n)}static resolve(t){return new P((n,r)=>{n(t)})}static reject(t){return new P((n,r)=>{r(t)})}static waitFor(t){return new P((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=P.resolve(!1);for(const r of t)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new P((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new P((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}function Po(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class lf{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}lf._e=-1;function Jl(e){return e==null}function Za(e){return e===0&&1/e==-1/0}function eC(e){return typeof e=="number"&&Number.isInteger(e)&&!Za(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Up(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ei(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function qv(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Wt{constructor(t,n){this.comparator=t,this.root=n||ce.EMPTY}insert(t,n){return new Wt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(t){return new Wt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ce.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ea(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ea(this.root,t,this.comparator,!1)}getReverseIterator(){return new ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ea(this.root,t,this.comparator,!0)}}class ea{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ce{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??ce.RED,this.left=s??ce.EMPTY,this.right=i??ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new ce(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return ce.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ot();const t=this.left.check();if(t!==this.right.check())throw ot();return t+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw ot()}get value(){throw ot()}get color(){throw ot()}get left(){throw ot()}get right(){throw ot()}copy(t,n,r,s,i){return this}insert(t,n,r){return new ce(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ge{constructor(t){this.comparator=t,this.data=new Wt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bp(this.data.getIterator())}getIteratorFrom(t){return new Bp(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ge)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ge(this.comparator);return n.data=t,n}}class Bp{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(t){this.fields=t,t.sort(pe.comparator)}static empty(){return new nn([])}unionWith(t){let n=new ge(pe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new nn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Us(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Wv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wv("Invalid base64 string: "+i):i}}(t);return new Ae(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Ae(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const nC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(e){if(Vt(!!e),typeof e=="string"){let t=0;const n=nC.exec(e);if(Vt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Zt(e.seconds),nanos:Zt(e.nanos)}}function Zt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Zr(e){return typeof e=="string"?Ae.fromBase64String(e):Ae.fromUint8Array(e)}/**
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
 */function cf(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function uf(e){const t=e.mapValue.fields.__previous_value__;return cf(t)?uf(t):t}function to(e){const t=_r(e.mapValue.fields.__local_write_time__.timestampValue);return new ne(t.seconds,t.nanos)}/**
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
 */class rC{constructor(t,n,r,s,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class eo{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof eo&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const na={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?cf(e)?4:sC(e)?9007199254740991:10:ot()}function Tn(e,t){if(e===t)return!0;const n=ts(e);if(n!==ts(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return to(e).isEqual(to(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=_r(s.timestampValue),a=_r(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Zr(s.bytesValue).isEqual(Zr(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return Zt(s.geoPointValue.latitude)===Zt(i.geoPointValue.latitude)&&Zt(s.geoPointValue.longitude)===Zt(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Zt(s.integerValue)===Zt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Zt(s.doubleValue),a=Zt(i.doubleValue);return o===a?Za(o)===Za(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Us(e.arrayValue.values||[],t.arrayValue.values||[],Tn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Up(o)!==Up(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Tn(o[l],a[l])))return!1;return!0}(e,t);default:return ot()}}function no(e,t){return(e.values||[]).find(n=>Tn(n,t))!==void 0}function Bs(e,t){if(e===t)return 0;const n=ts(e),r=ts(t);if(n!==r)return Ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ct(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=Zt(i.integerValue||i.doubleValue),l=Zt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return jp(e.timestampValue,t.timestampValue);case 4:return jp(to(e),to(t));case 5:return Ct(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Zr(i),l=Zr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ct(a[c],l[c]);if(u!==0)return u}return Ct(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=Ct(Zt(i.latitude),Zt(o.latitude));return a!==0?a:Ct(Zt(i.longitude),Zt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Bs(a[c],l[c]);if(u)return u}return Ct(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===na.mapValue&&o===na.mapValue)return 0;if(i===na.mapValue)return 1;if(o===na.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Ct(l[h],u[h]);if(f!==0)return f;const p=Bs(a[l[h]],c[u[h]]);if(p!==0)return p}return Ct(l.length,u.length)}(e.mapValue,t.mapValue);default:throw ot()}}function jp(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return Ct(e,t);const n=_r(e),r=_r(t),s=Ct(n.seconds,r.seconds);return s!==0?s:Ct(n.nanos,r.nanos)}function js(e){return Uu(e)}function Uu(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Zr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return tt.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Uu(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Uu(n.fields[o])}`;return s+"}"}(e.mapValue):ot()}function Bu(e){return!!e&&"integerValue"in e}function hf(e){return!!e&&"arrayValue"in e}function $p(e){return!!e&&"nullValue"in e}function Hp(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function _a(e){return!!e&&"mapValue"in e}function Pi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ei(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Pi(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Pi(e.arrayValue.values[n]);return t}return Object.assign({},e)}function sC(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class qe{constructor(t){this.value=t}static empty(){return new qe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!_a(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pi(n)}setAll(t){let n=pe.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Pi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());_a(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Tn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];_a(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){ei(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new qe(Pi(this.value))}}function Kv(e){const t=[];return ei(e.fields,(n,r)=>{const s=new pe([n]);if(_a(r)){const i=Kv(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new nn(t)}/**
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
 */class we{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new we(t,0,ut.min(),ut.min(),ut.min(),qe.empty(),0)}static newFoundDocument(t,n,r,s){return new we(t,1,n,ut.min(),r,s,0)}static newNoDocument(t,n){return new we(t,2,n,ut.min(),ut.min(),qe.empty(),0)}static newUnknownDocument(t,n){return new we(t,3,n,ut.min(),ut.min(),qe.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ut.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ut.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof we&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class tl{constructor(t,n){this.position=t,this.inclusive=n}}function zp(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=tt.comparator(tt.fromName(o.referenceValue),n.key):r=Bs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function qp(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tn(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class el{constructor(t,n="asc"){this.field=t,this.dir=n}}function iC(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Gv{}class te extends Gv{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new aC(t,n,r):n==="array-contains"?new uC(t,r):n==="in"?new hC(t,r):n==="not-in"?new fC(t,r):n==="array-contains-any"?new dC(t,r):new te(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new lC(t,r):new cC(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bs(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(Bs(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return ot()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class An extends Gv{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new An(t,n)}matches(t){return Yv(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Yv(e){return e.op==="and"}function Qv(e){return oC(e)&&Yv(e)}function oC(e){for(const t of e.filters)if(t instanceof An)return!1;return!0}function ju(e){if(e instanceof te)return e.field.canonicalString()+e.op.toString()+js(e.value);if(Qv(e))return e.filters.map(t=>ju(t)).join(",");{const t=e.filters.map(n=>ju(n)).join(",");return`${e.op}(${t})`}}function Xv(e,t){return e instanceof te?function(r,s){return s instanceof te&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(e,t):e instanceof An?function(r,s){return s instanceof An&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Xv(o,s.filters[a]),!0):!1}(e,t):void ot()}function Jv(e){return e instanceof te?function(n){return`${n.field.canonicalString()} ${n.op} ${js(n.value)}`}(e):e instanceof An?function(n){return n.op.toString()+" {"+n.getFilters().map(Jv).join(" ,")+"}"}(e):"Filter"}class aC extends te{constructor(t,n,r){super(t,n,r),this.key=tt.fromName(r.referenceValue)}matches(t){const n=tt.comparator(t.key,this.key);return this.matchesComparison(n)}}class lC extends te{constructor(t,n){super(t,"in",n),this.keys=Zv("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class cC extends te{constructor(t,n){super(t,"not-in",n),this.keys=Zv("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Zv(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>tt.fromName(r.referenceValue))}class uC extends te{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return hf(n)&&no(n.arrayValue,this.value)}}class hC extends te{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&no(this.value.arrayValue,n)}}class fC extends te{constructor(t,n){super(t,"not-in",n)}matches(t){if(no(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!no(this.value.arrayValue,n)}}class dC extends te{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>no(this.value.arrayValue,r))}}/**
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
 */class pC{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Wp(e,t=null,n=[],r=[],s=null,i=null,o=null){return new pC(e,t,n,r,s,i,o)}function ff(e){const t=ft(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ju(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jl(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>js(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>js(r)).join(",")),t.ce=n}return t.ce}function df(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!iC(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xv(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qp(e.startAt,t.startAt)&&qp(e.endAt,t.endAt)}function $u(e){return tt.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Zl{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function mC(e,t,n,r,s,i,o,a){return new Zl(e,t,n,r,s,i,o,a)}function pf(e){return new Zl(e)}function Kp(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function gC(e){return e.collectionGroup!==null}function ki(e){const t=ft(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ge(pe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new el(i,r))}),n.has(pe.keyField().canonicalString())||t.le.push(new el(pe.keyField(),r))}return t.le}function _n(e){const t=ft(e);return t.he||(t.he=vC(t,ki(e))),t.he}function vC(e,t){if(e.limitType==="F")return Wp(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new el(s.field,i)});const n=e.endAt?new tl(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new tl(e.startAt.position,e.startAt.inclusive):null;return Wp(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Hu(e,t,n){return new Zl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function tc(e,t){return df(_n(e),_n(t))&&e.limitType===t.limitType}function ty(e){return`${ff(_n(e))}|lt:${e.limitType}`}function gs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Jv(s)).join(", ")}]`),Jl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>js(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>js(s)).join(",")),`Target(${r})`}(_n(e))}; limitType=${e.limitType})`}function ec(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):tt.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ki(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=zp(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ki(r),s)||r.endAt&&!function(o,a,l){const c=zp(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ki(r),s))}(e,t)}function yC(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ey(e){return(t,n)=>{let r=!1;for(const s of ki(e)){const i=_C(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _C(e,t,n){const r=e.field.isKeyField()?tt.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Bs(l,c):ot()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ot()}}/**
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
 */class ni{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ei(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return qv(this.inner)}size(){return this.innerSize}}/**
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
 */const wC=new Wt(tt.comparator);function Mn(){return wC}const ny=new Wt(tt.comparator);function yi(...e){let t=ny;for(const n of e)t=t.insert(n.key,n);return t}function ry(e){let t=ny;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ur(){return xi()}function sy(){return xi()}function xi(){return new ni(e=>e.toString(),(e,t)=>e.isEqual(t))}const EC=new Wt(tt.comparator),bC=new ge(tt.comparator);function gt(...e){let t=bC;for(const n of e)t=t.add(n);return t}const IC=new ge(Ct);function TC(){return IC}/**
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
 */function iy(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(t)?"-0":t}}function oy(e){return{integerValue:""+e}}function AC(e,t){return eC(t)?oy(t):iy(e,t)}/**
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
 */class nc{constructor(){this._=void 0}}function CC(e,t,n){return e instanceof nl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&cf(i)&&(i=uf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof ro?ly(e,t):e instanceof so?cy(e,t):function(s,i){const o=ay(s,i),a=Gp(o)+Gp(s.Ie);return Bu(o)&&Bu(s.Ie)?oy(a):iy(s.serializer,a)}(e,t)}function SC(e,t,n){return e instanceof ro?ly(e,t):e instanceof so?cy(e,t):n}function ay(e,t){return e instanceof rl?function(r){return Bu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class nl extends nc{}class ro extends nc{constructor(t){super(),this.elements=t}}function ly(e,t){const n=uy(t);for(const r of e.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class so extends nc{constructor(t){super(),this.elements=t}}function cy(e,t){let n=uy(t);for(const r of e.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class rl extends nc{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Gp(e){return Zt(e.integerValue||e.doubleValue)}function uy(e){return hf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function RC(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof ro&&s instanceof ro||r instanceof so&&s instanceof so?Us(r.elements,s.elements,Tn):r instanceof rl&&s instanceof rl?Tn(r.Ie,s.Ie):r instanceof nl&&s instanceof nl}(e.transform,t.transform)}class PC{constructor(t,n){this.version=t,this.transformResults=n}}class sn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new sn}static exists(t){return new sn(void 0,t)}static updateTime(t){return new sn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wa(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class rc{}function hy(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new mf(e.key,sn.none()):new ko(e.key,e.data,sn.none());{const n=e.data,r=qe.empty();let s=new ge(pe.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new hs(e.key,r,new nn(s.toArray()),sn.none())}}function kC(e,t,n){e instanceof ko?function(s,i,o){const a=s.value.clone(),l=Qp(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof hs?function(s,i,o){if(!wa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Qp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(fy(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Oi(e,t,n,r){return e instanceof ko?function(i,o,a,l){if(!wa(i.precondition,o))return a;const c=i.value.clone(),u=Xp(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof hs?function(i,o,a,l){if(!wa(i.precondition,o))return a;const c=Xp(i.fieldTransforms,l,o),u=o.data;return u.setAll(fy(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return wa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function xC(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=ay(r.transform,s||null);i!=null&&(n===null&&(n=qe.empty()),n.set(r.field,i))}return n||null}function Yp(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Us(r,s,(i,o)=>RC(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ko extends rc{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class hs extends rc{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function fy(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Qp(e,t,n){const r=new Map;Vt(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,SC(o,a,n[s]))}return r}function Xp(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,CC(i,o,t))}return r}class mf extends rc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OC extends rc{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class NC{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&kC(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Oi(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Oi(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=sy();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=hy(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ut.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),gt())}isEqual(t){return this.batchId===t.batchId&&Us(this.mutations,t.mutations,(n,r)=>Yp(n,r))&&Us(this.baseMutations,t.baseMutations,(n,r)=>Yp(n,r))}}class gf{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){Vt(t.mutations.length===r.length);let s=function(){return EC}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new gf(t,n,r,s)}}/**
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
 */class DC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class MC{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Jt,Et;function VC(e){switch(e){default:return ot();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function dy(e){if(e===void 0)return Dn("GRPC error has no .code"),k.UNKNOWN;switch(e){case Jt.OK:return k.OK;case Jt.CANCELLED:return k.CANCELLED;case Jt.UNKNOWN:return k.UNKNOWN;case Jt.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Jt.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Jt.INTERNAL:return k.INTERNAL;case Jt.UNAVAILABLE:return k.UNAVAILABLE;case Jt.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Jt.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Jt.NOT_FOUND:return k.NOT_FOUND;case Jt.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Jt.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Jt.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Jt.ABORTED:return k.ABORTED;case Jt.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Jt.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Jt.DATA_LOSS:return k.DATA_LOSS;default:return ot()}}(Et=Jt||(Jt={}))[Et.OK=0]="OK",Et[Et.CANCELLED=1]="CANCELLED",Et[Et.UNKNOWN=2]="UNKNOWN",Et[Et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Et[Et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Et[Et.NOT_FOUND=5]="NOT_FOUND",Et[Et.ALREADY_EXISTS=6]="ALREADY_EXISTS",Et[Et.PERMISSION_DENIED=7]="PERMISSION_DENIED",Et[Et.UNAUTHENTICATED=16]="UNAUTHENTICATED",Et[Et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Et[Et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Et[Et.ABORTED=10]="ABORTED",Et[Et.OUT_OF_RANGE=11]="OUT_OF_RANGE",Et[Et.UNIMPLEMENTED=12]="UNIMPLEMENTED",Et[Et.INTERNAL=13]="INTERNAL",Et[Et.UNAVAILABLE=14]="UNAVAILABLE",Et[Et.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function LC(){return new TextEncoder}/**
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
 */const FC=new Ss([4294967295,4294967295],0);function Jp(e){const t=LC().encode(e),n=new BA;return n.update(t),new Uint8Array(n.digest())}function Zp(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Ss([n,r],0),new Ss([s,i],0)]}class vf{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _i(`Invalid padding: ${n}`);if(r<0)throw new _i(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new _i(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new _i(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Ss.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(Ss.fromNumber(r)));return s.compare(FC)===1&&(s=new Ss([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Jp(t),[r,s]=Zp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new vf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Jp(t),[r,s]=Zp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class _i extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,xo.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new sc(ut.min(),s,new Wt(Ct),Mn(),gt())}}class xo{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new xo(r,n,gt(),gt(),gt())}}/**
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
 */class Ea{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class py{constructor(t,n){this.targetId=t,this.fe=n}}class my{constructor(t,n,r=Ae.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tm{constructor(){this.ge=0,this.pe=nm(),this.ye=Ae.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=gt(),n=gt(),r=gt();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ot()}}),new xo(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=nm()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,Vt(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class UC{constructor(t){this.Le=t,this.ke=new Map,this.qe=Mn(),this.Qe=em(),this.Ke=new Wt(Ct)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:ot()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if($u(i))if(r===0){const o=new tt(i.path);this.We(n,o,we.newNoDocument(o,ut.min()))}else Vt(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Zr(r).toUint8Array()}catch(l){if(l instanceof Wv)return Fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new vf(o,s,i)}catch(l){return Fs(l instanceof _i?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&$u(a.target)){const l=new tt(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,we.newNoDocument(l,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=gt();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new sc(t,n,this.Ke,this.qe,r);return this.qe=Mn(),this.Qe=em(),this.Ke=new Wt(Ct),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new tm,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new ge(Ct),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||W("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new tm),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function em(){return new Wt(tt.comparator)}function nm(){return new Wt(tt.comparator)}const BC={asc:"ASCENDING",desc:"DESCENDING"},jC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$C={and:"AND",or:"OR"};class HC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function zu(e,t){return e.useProto3Json||Jl(t)?t:{value:t}}function sl(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function gy(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function zC(e,t){return sl(e,t.toTimestamp())}function wn(e){return Vt(!!e),ut.fromTimestamp(function(n){const r=_r(n);return new ne(r.seconds,r.nanos)}(e))}function yf(e,t){return function(r){return new qt(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function vy(e){const t=qt.fromString(e);return Vt(Ey(t)),t}function qu(e,t){return yf(e.databaseId,t.path)}function Wc(e,t){const n=vy(t);if(n.get(1)!==e.databaseId.projectId)throw new Z(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Z(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new tt(yy(n))}function Wu(e,t){return yf(e.databaseId,t)}function qC(e){const t=vy(e);return t.length===4?qt.emptyPath():yy(t)}function Ku(e){return new qt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function yy(e){return Vt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function rm(e,t,n){return{name:qu(e,t),fields:n.value.mapValue.fields}}function WC(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ot()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Vt(u===void 0||typeof u=="string"),Ae.fromBase64String(u||"")):(Vt(u===void 0||u instanceof Uint8Array),Ae.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?k.UNKNOWN:dy(c.code);return new Z(u,c.message||"")}(o);n=new my(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wc(e,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):ut.min(),a=new qe({mapValue:{fields:r.document.fields}}),l=we.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Ea(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Wc(e,r.document),i=r.readTime?wn(r.readTime):ut.min(),o=we.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ea([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Wc(e,r.document),i=r.removedTargetIds||[];n=new Ea([],i,s,null)}else{if(!("filter"in t))return ot();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new MC(s,i),a=r.targetId;n=new py(a,o)}}return n}function KC(e,t){let n;if(t instanceof ko)n={update:rm(e,t.key,t.value)};else if(t instanceof mf)n={delete:qu(e,t.key)};else if(t instanceof hs)n={update:rm(e,t.key,t.data),updateMask:nS(t.fieldMask)};else{if(!(t instanceof OC))return ot();n={verify:qu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof nl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof rl)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ot()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:zC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ot()}(e,t.precondition)),n}function GC(e,t){return e&&e.length>0?(Vt(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(ut.min())&&(o=wn(i)),new PC(o,s.transformResults||[])}(n,t))):[]}function YC(e,t){return{documents:[Wu(e,t.path)]}}function QC(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=Wu(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Wu(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(l){if(l.length!==0)return wy(An.create(l,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:vs(h.field),direction:ZC(h.dir)}}(c))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=zu(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function XC(e){let t=qC(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Vt(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const f=_y(h);return f instanceof An&&Qv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new el(ys(v.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Jl(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new tl(p,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,p=h.values||[];return new tl(p,f)}(n.endAt)),mC(t,s,o,i,a,"F",l,c)}function JC(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ot()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function _y(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ys(n.unaryFilter.field);return te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ys(n.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ys(n.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ys(n.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ot()}}(e):e.fieldFilter!==void 0?function(n){return te.create(ys(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ot()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return An.create(n.compositeFilter.filters.map(r=>_y(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ot()}}(n.compositeFilter.op))}(e):ot()}function ZC(e){return BC[e]}function tS(e){return jC[e]}function eS(e){return $C[e]}function vs(e){return{fieldPath:e.canonicalString()}}function ys(e){return pe.fromServerFormat(e.fieldPath)}function wy(e){return e instanceof te?function(n){if(n.op==="=="){if(Hp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if($p(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if($p(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:tS(n.op),value:n.value}}}(e):e instanceof An?function(n){const r=n.getFilters().map(s=>wy(s));return r.length===1?r[0]:{compositeFilter:{op:eS(n.op),filters:r}}}(e):ot()}function nS(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ey(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class ir{constructor(t,n,r,s,i=ut.min(),o=ut.min(),a=Ae.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new ir(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class rS{constructor(t){this.ut=t}}function sS(e){const t=XC({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Hu(t,t.limit,"L"):t}/**
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
 */class iS{constructor(){this.on=new oS}addToCollectionParentIndex(t,n){return this.on.add(n),P.resolve()}getCollectionParents(t,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return P.resolve()}deleteFieldIndex(t,n){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,n){return P.resolve()}getDocumentsMatchingTarget(t,n){return P.resolve(null)}getIndexType(t,n){return P.resolve(0)}getFieldIndexes(t,n){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,n){return P.resolve(yr.min())}getMinOffsetFromCollectionGroup(t,n){return P.resolve(yr.min())}updateCollectionGroup(t,n,r){return P.resolve()}updateIndexEntries(t,n){return P.resolve()}}class oS{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new ge(qt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ge(qt.comparator)).toArray()}}/**
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
 */class $s{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new $s(0)}static Nn(){return new $s(-1)}}/**
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
 */class aS{constructor(){this.changes=new ni(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,we.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class lS{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class cS{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&Oi(r.mutation,s,nn.empty(),ne.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,gt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=gt()){const s=Ur();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=yi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ur();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,gt()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Mn();const o=xi(),a=function(){return xi()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof hs)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Oi(u.mutation,c,u.mutation.getFieldMask(),ne.now())):o.set(c.key,nn.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new lS(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=xi();let s=new Wt((o,a)=>o-a),i=gt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||nn.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||gt()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=sy();u.forEach(f=>{if(!i.has(f)){const p=hy(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return tt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):gC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):P.resolve(Ur());let a=-1,l=i;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,gt())).next(u=>({batchId:a,changes:ry(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new tt(n)).next(r=>{let s=yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(t,i).next(a=>P.forEach(a,l=>{const c=function(h,f){return new Zl(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,we.newInvalidDocument(u)))});let a=yi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Oi(u.mutation,c,nn.empty(),ne.now()),ec(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class uS{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),P.resolve()}getNamedQuery(t,n){return P.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(s){return{name:s.name,query:sS(s.bundledQuery),readTime:wn(s.readTime)}}(n)),P.resolve()}}/**
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
 */class hS{constructor(){this.overlays=new Wt(tt.comparator),this.lr=new Map}getOverlay(t,n){return P.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ur();return P.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.lt(t,n,i)}),P.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(t,n,r){const s=Ur(),i=n.length+1,o=new tt(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new Wt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ur(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ur(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return P.resolve(a)}lt(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new DC(n,r));let i=this.lr.get(n);i===void 0&&(i=gt(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class _f{constructor(){this.hr=new ge(oe.Pr),this.Ir=new ge(oe.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new oe(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new oe(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new tt(new qt([])),r=new oe(n,t),s=new oe(n,t+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new tt(new qt([])),r=new oe(n,t),s=new oe(n,t+1);let i=gt();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new oe(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class oe{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return tt.comparator(t.key,n.key)||Ct(t.gr,n.gr)}static Tr(t,n){return Ct(t.gr,n.gr)||tt.comparator(t.key,n.key)}}/**
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
 */class fS{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ge(oe.Pr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NC(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new oe(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(t,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new oe(n,0),s=new oe(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ge(Ct);return n.forEach(s=>{const i=new oe(s,0),o=new oe(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;tt.isDocumentKey(i)||(i=i.child(""));const o=new oe(new tt(i),0);let a=new ge(Ct);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){Vt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,s=>{const i=new oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new oe(n,0),s=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class dS{constructor(t){this.Cr=t,this.docs=function(){return new Wt(tt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():we.newInvalidDocument(n))}getEntries(t,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():we.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Mn();const o=n.path,a=new tt(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||JA(XA(u),r)<=0||(s.has(u.key)||ec(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(t,n,r,s){ot()}vr(t,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new pS(this)}getSize(t){return P.resolve(this.size)}}class pS extends aS{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(t,s)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class mS{constructor(t){this.persistence=t,this.Fr=new ni(n=>ff(n),df),this.lastRemoteSnapshotVersion=ut.min(),this.highestTargetId=0,this.Mr=0,this.Or=new _f,this.targetCount=0,this.Nr=$s.On()}forEachTarget(t,n){return this.Fr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new $s(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(t,n){return this.kn(n),P.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(t,n){return P.resolve(this.Or.containsKey(n))}}/**
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
 */class gS{constructor(t,n){this.Br={},this.overlays={},this.Lr=new lf(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new mS(this),this.indexManager=new iS,this.remoteDocumentCache=function(s){return new dS(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new rS(n),this.Kr=new uS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new hS,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new fS(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){W("MemoryPersistence","Starting transaction:",t);const s=new vS(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(t,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class vS extends tC{constructor(t){super(),this.currentSequenceNumber=t}}class wf{constructor(t){this.persistence=t,this.Gr=new _f,this.zr=null}static jr(t){return new wf(t)}get Hr(){if(this.zr)return this.zr;throw ot()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const s=tt.fromPath(r);return this.Jr(t,s).next(i=>{i||n.removeEntry(s,ut.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class Ef{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=s}static Qi(t,n){let r=gt(),s=gt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ef(t,n.fromCache,r,s)}}/**
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
 */class yS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class _S{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.zi(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new yS;return this.Hi(t,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>i.result)}Ji(t,n,r,s){return r.documentReadCount<this.Ui?(fi()<=yt.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(fi()<=yt.DEBUG&&W("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(fi()<=yt.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_n(n))):P.resolve())}zi(t,n){if(Kp(n))return P.resolve(null);let r=_n(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hu(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=gt(...i);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(t,Hu(n,null,"F")):this.Xi(t,c,n,l)}))})))}ji(t,n,r,s){return Kp(n)||s.isEqual(ut.min())?P.resolve(null):this.Gi.getDocuments(t,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?P.resolve(null):(fi()<=yt.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.Xi(t,o,n,QA(s,-1)).next(a=>a))})}Yi(t,n){let r=new ge(ey(t));return n.forEach((s,i)=>{ec(t,i)&&(r=r.add(i))}),r}Zi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(t,n,r){return fi()<=yt.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Gi.getDocumentsMatchingQuery(t,n,yr.min(),r)}Xi(t,n,r,s){return this.Gi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class wS{constructor(t,n,r,s){this.persistence=t,this.es=n,this.serializer=s,this.ts=new Wt(Ct),this.ns=new ni(i=>ff(i),df),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new cS(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function ES(e,t,n,r){return new wS(e,t,n,r)}async function by(e,t){const n=ft(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=gt();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function bS(e,t){const n=ft(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let p=P.resolve();return f.forEach(v=>{p=p.next(()=>u.getEntry(l,v)).next(E=>{const T=c.docVersions.get(v);Vt(T!==null),E.version.compareTo(T)<0&&(h.applyToRemoteDocument(E,c),E.isValidDocument()&&(E.setReadTime(c.commitVersion),u.addEntry(E)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=gt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function Iy(e){const t=ft(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function IS(e,t){const n=ft(e),r=t.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];t.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?p=p.withResumeToken(Ae.EMPTY_BYTE_STRING,ut.min()).withLastLimboFreeSnapshotVersion(ut.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(E,T,y){return E.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(f,p,u)&&a.push(n.qr.updateTargetData(i,p))});let l=Mn(),c=gt();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(TS(i,o,t.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(ut.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function TS(e,t,n){let r=gt(),s=gt();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Mn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ut.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function AS(e,t){const n=ft(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function CS(e,t){const n=ft(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,t).next(i=>i?(s=i,P.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new ir(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function Gu(e,t,n){const r=ft(e),s=r.ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Po(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(s.target)}function sm(e,t,n){const r=ft(e);let s=ut.min(),i=gt();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ft(l),f=h.ns.get(u);return f!==void 0?P.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(r,o,_n(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?s:ut.min(),n?i:gt())).next(a=>(SS(r,yC(t),a),{documents:a,ls:i})))}function SS(e,t,n){let r=e.rs.get(t)||ut.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.rs.set(t,r)}class im{constructor(){this.activeTargetIds=TC()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class RS{constructor(){this.eo=new im,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new im,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class PS{ro(t){}shutdown(){}}/**
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
 */class om{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ra=null;function Kc(){return ra===null?ra=function(){return 268435456+Math.round(2147483648*Math.random())}():ra++,"0x"+ra.toString(16)}/**
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
 */const kS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class xS{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const ye="WebChannelConnection";class OS extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Kc(),l=this.So(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,i,o),this.Do(n,l,c,s).then(u=>(W("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Fs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=kS[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,s){const i=Kc();return new Promise((o,a)=>{const l=new UA;l.setWithCredentials(!0),l.listenOnce(LA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qc.NO_ERROR:const u=l.getResponseJson();W(ye,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case qc.TIMEOUT:W(ye,`RPC '${t}' ${i} timed out`),a(new Z(k.DEADLINE_EXCEEDED,"Request time out"));break;case qc.HTTP_ERROR:const h=l.getStatus();if(W(ye,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(T){const y=T.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(y)>=0?y:k.UNKNOWN}(p.status);a(new Z(v,p.message))}else a(new Z(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Z(k.UNAVAILABLE,"Connection failed."));break;default:ot()}}finally{W(ye,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);W(ye,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}vo(t,n,r){const s=Kc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=MA(),a=VA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");W(ye,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,p=!1;const v=new xS({co:T=>{p?W(ye,`Not sending because RPC '${t}' stream ${s} is closed:`,T):(f||(W(ye,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),W(ye,`RPC '${t}' stream ${s} sending:`,T),h.send(T))},lo:()=>h.close()}),E=(T,y,b)=>{T.listen(y,R=>{try{b(R)}catch(w){setTimeout(()=>{throw w},0)}})};return E(h,ta.EventType.OPEN,()=>{p||W(ye,`RPC '${t}' stream ${s} transport opened.`)}),E(h,ta.EventType.CLOSE,()=>{p||(p=!0,W(ye,`RPC '${t}' stream ${s} transport closed`),v.Ro())}),E(h,ta.EventType.ERROR,T=>{p||(p=!0,Fs(ye,`RPC '${t}' stream ${s} transport errored:`,T),v.Ro(new Z(k.UNAVAILABLE,"The operation could not be completed")))}),E(h,ta.EventType.MESSAGE,T=>{var y;if(!p){const b=T.data[0];Vt(!!b);const R=b,w=R.error||((y=R[0])===null||y===void 0?void 0:y.error);if(w){W(ye,`RPC '${t}' stream ${s} received error:`,w);const N=w.status;let O=function(Y){const lt=Jt[Y];if(lt!==void 0)return dy(lt)}(N),Q=w.message;O===void 0&&(O=k.INTERNAL,Q="Unknown error status: "+N+" with message "+w.message),p=!0,v.Ro(new Z(O,Q)),h.close()}else W(ye,`RPC '${t}' stream ${s} received:`,b),v.Vo(b)}}),E(a,FA.STAT_EVENT,T=>{T.stat===Lp.PROXY?W(ye,`RPC '${t}' stream ${s} detected buffering proxy`):T.stat===Lp.NOPROXY&&W(ye,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function Gc(){return typeof document<"u"?document:null}/**
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
 */function ic(e){return new HC(e,!0)}/**
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
 */class Ty{constructor(t,n,r=1e3,s=1.5,i=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class Ay{constructor(t,n,r,s,i,o,a,l){this.si=t,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Ty(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{t(()=>{const s=new Z(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return W("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NS extends Ay{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=WC(this.serializer,t),r=function(i){if(!("targetChange"in i))return ut.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ut.min():o.readTime?wn(o.readTime):ut.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=Ku(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=$u(l)?{documents:YC(i,l)}:{query:QC(i,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gy(i,o.resumeToken);const c=zu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ut.min())>0){a.readTime=sl(i,o.snapshotVersion.toTimestamp());const c=zu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=JC(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=Ku(this.serializer),n.removeTarget=t,this.e_(n)}}class DS extends Ay{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(Vt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=GC(t.writeResults,t.commitTime),r=wn(t.commitTime);return this.listener.I_(r,n)}return Vt(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Ku(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>KC(this.serializer,r))};this.e_(n)}}/**
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
 */class MS extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new Z(k.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(t,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(k.UNKNOWN,s.toString())})}Co(t,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(t,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(k.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class VS{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Dn(n),this.f_=!1):W("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class LS{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{fs(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ft(l);c.C_.add(4),await Oo(c),c.M_.set("Unknown"),c.C_.delete(4),await oc(c)}(this))})}),this.M_=new VS(r,s)}}async function oc(e){if(fs(e))for(const t of e.v_)await t(!0)}async function Oo(e){for(const t of e.v_)await t(!1)}function Cy(e,t){const n=ft(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Tf(n)?If(n):ri(n).Ho()&&bf(n,t))}function Sy(e,t){const n=ft(e),r=ri(n);n.D_.delete(t),r.Ho()&&Ry(n,t),n.D_.size===0&&(r.Ho()?r.Zo():fs(n)&&n.M_.set("Unknown"))}function bf(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ut.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ri(e).u_(t)}function Ry(e,t){e.x_.Oe(t),ri(e).c_(t)}function If(e){e.x_=new UC({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),ri(e).start(),e.M_.g_()}function Tf(e){return fs(e)&&!ri(e).jo()&&e.D_.size>0}function fs(e){return ft(e).C_.size===0}function Py(e){e.x_=void 0}async function FS(e){e.D_.forEach((t,n)=>{bf(e,t)})}async function US(e,t){Py(e),Tf(e)?(e.M_.w_(t),If(e)):e.M_.set("Unknown")}async function BS(e,t,n){if(e.M_.set("Online"),t instanceof my&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(e,t)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await il(e,r)}else if(t instanceof Ea?e.x_.$e(t):t instanceof py?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(ut.min()))try{const r=await Iy(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.D_.get(c);u&&i.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.D_.get(l);if(!u)return;i.D_.set(l,u.withResumeToken(Ae.EMPTY_BYTE_STRING,u.snapshotVersion)),Ry(i,l);const h=new ir(u.target,l,c,u.sequenceNumber);bf(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await il(e,r)}}async function il(e,t,n){if(!Po(t))throw t;e.C_.add(1),await Oo(e),e.M_.set("Offline"),n||(n=()=>Iy(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await oc(e)})}function ky(e,t){return t().catch(n=>il(e,n,t))}async function ac(e){const t=ft(e),n=wr(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;jS(t);)try{const s=await AS(t.localStore,r);if(s===null){t.b_.length===0&&n.Zo();break}r=s.batchId,$S(t,s)}catch(s){await il(t,s)}xy(t)&&Oy(t)}function jS(e){return fs(e)&&e.b_.length<10}function $S(e,t){e.b_.push(t);const n=wr(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function xy(e){return fs(e)&&!wr(e).jo()&&e.b_.length>0}function Oy(e){wr(e).start()}async function HS(e){wr(e).E_()}async function zS(e){const t=wr(e);for(const n of e.b_)t.P_(n.mutations)}async function qS(e,t,n){const r=e.b_.shift(),s=gf.from(r,t,n);await ky(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await ac(e)}async function WS(e,t){t&&wr(e).h_&&await async function(r,s){if(function(o){return VC(o)&&o!==k.ABORTED}(s.code)){const i=r.b_.shift();wr(r).Yo(),await ky(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ac(r)}}(e,t),xy(e)&&Oy(e)}async function am(e,t){const n=ft(e);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=fs(n);n.C_.add(3),await Oo(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await oc(n)}async function KS(e,t){const n=ft(e);t?(n.C_.delete(2),await oc(n)):t||(n.C_.add(2),await Oo(n),n.M_.set("Unknown"))}function ri(e){return e.O_||(e.O_=function(n,r,s){const i=ft(n);return i.A_(),new NS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:FS.bind(null,e),Io:US.bind(null,e),a_:BS.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Tf(e)?If(e):e.M_.set("Unknown")):(await e.O_.stop(),Py(e))})),e.O_}function wr(e){return e.N_||(e.N_=function(n,r,s){const i=ft(n);return i.A_(),new DS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{ho:HS.bind(null,e),Io:WS.bind(null,e),T_:zS.bind(null,e),I_:qS.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await ac(e)):(await e.N_.stop(),e.b_.length>0&&(W("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class Af{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new Af(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(k.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cf(e,t){if(Dn("AsyncQueue",`${t}: ${e}`),Po(e))return new Z(k.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Rs{constructor(t){this.comparator=t?(n,r)=>t(n,r)||tt.comparator(n.key,r.key):(n,r)=>tt.comparator(n.key,r.key),this.keyedMap=yi(),this.sortedSet=new Wt(this.comparator)}static emptySet(t){return new Rs(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Rs)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Rs;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class lm{constructor(){this.B_=new Wt(tt.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):ot():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Hs{constructor(t,n,r,s,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hs(t,n,Rs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&tc(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class GS{constructor(){this.k_=void 0,this.listeners=[]}}class YS{constructor(){this.queries=new ni(t=>ty(t),tc),this.onlineState="Unknown",this.q_=new Set}}async function QS(e,t){const n=ft(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new GS),s)try{i.k_=await n.onListen(r)}catch(o){const a=Cf(o,`Initialization of query '${gs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,i),i.listeners.push(t),t.Q_(n.onlineState),i.k_&&t.K_(i.k_)&&Sf(n)}async function XS(e,t){const n=ft(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(t);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function JS(e,t){const n=ft(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Sf(n)}function ZS(e,t,n){const r=ft(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Sf(e){e.q_.forEach(t=>{t.next()})}class tR{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Hs(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=Hs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
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
 */class Ny{constructor(t){this.key=t}}class Dy{constructor(t){this.key=t}}class eR{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=gt(),this.mutatedKeys=gt(),this._a=ey(t),this.aa=new Rs(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new lm,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const f=s.get(u),p=ec(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;f&&p?f.data.isEqual(p.data)?v!==E&&(r.track({type:3,doc:p}),T=!0):this.ha(f,p)||(r.track({type:2,doc:p}),T=!0,(l&&this._a(p,l)>0||c&&this._a(p,c)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),T=!0):f&&!p&&(r.track({type:1,doc:f}),T=!0,(l||c)&&(a=!0)),T&&(p?(o=o.add(p),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((u,h)=>function(p,v){const E=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ot()}};return E(p)-E(v)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],l=this.oa.size===0&&this.current&&!s?1:0,c=l!==this.sa;return this.sa=l,o.length!==0||c?{snapshot:new Hs(this.query,t.aa,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new lm,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=gt(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new Dy(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new Ny(r))}),n}da(t){this.ia=t.ls,this.oa=gt();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return Hs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class nR{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class rR{constructor(t){this.key=t,this.Ra=!1}}class sR{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new ni(a=>ty(a),tc),this.fa=new Map,this.ga=new Set,this.pa=new Wt(tt.comparator),this.ya=new Map,this.wa=new _f,this.Sa={},this.ba=new Map,this.Da=$s.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function iR(e,t){const n=mR(e);let r,s;const i=n.ma.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await CS(n.localStore,_n(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await oR(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&Cy(n.remoteStore,o)}return s}async function oR(e,t,n,r,s){e.va=(h,f,p)=>async function(E,T,y,b){let R=T.view.ca(y);R.Zi&&(R=await sm(E.localStore,T.query,!1).then(({documents:Q})=>T.view.ca(Q,R)));const w=b&&b.targetChanges.get(T.targetId),N=b&&b.targetMismatches.get(T.targetId)!=null,O=T.view.applyChanges(R,E.isPrimaryClient,w,N);return um(E,T.targetId,O.Ta),O.snapshot}(e,h,f,p);const i=await sm(e.localStore,t,!0),o=new eR(t,i.ls),a=o.ca(i.documents),l=xo.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);um(e,n,c.Ta);const u=new nR(t,n,o);return e.ma.set(t,u),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),c.snapshot}async function aR(e,t){const n=ft(e),r=n.ma.get(t),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!tc(i,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Gu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Sy(n.remoteStore,r.targetId),Yu(n,r.targetId)}).catch(Ro)):(Yu(n,r.targetId),await Gu(n.localStore,r.targetId,!0))}async function lR(e,t,n){const r=gR(e);try{const s=await function(o,a){const l=ft(o),c=ne.now(),u=a.reduce((p,v)=>p.add(v.key),gt());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=Mn(),E=gt();return l.ss.getEntries(p,u).next(T=>{v=T,v.forEach((y,b)=>{b.isValidDocument()||(E=E.add(y))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(T=>{h=T;const y=[];for(const b of a){const R=xC(b,h.get(b.key).overlayedDocument);R!=null&&y.push(new hs(b.key,R,Kv(R.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,y,a)}).next(T=>{f=T;const y=T.applyToLocalDocumentSet(h,E);return l.documentOverlayCache.saveOverlays(p,T.batchId,y)})}).then(()=>({batchId:f.batchId,changes:ry(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Wt(Ct)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(r,s.batchId,n),await No(r,s.changes),await ac(r.remoteStore)}catch(s){const i=Cf(s,"Failed to persist write");n.reject(i)}}async function My(e,t){const n=ft(e);try{const r=await IS(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Vt(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Vt(o.Ra):s.removedDocuments.size>0&&(Vt(o.Ra),o.Ra=!1))}),await No(n,r,t)}catch(r){await Ro(r)}}function cm(e,t,n){const r=ft(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ft(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&Sf(l)}(r.eventManager,t),s.length&&r.Va.a_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function cR(e,t,n){const r=ft(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ya.get(t),i=s&&s.key;if(i){let o=new Wt(tt.comparator);o=o.insert(i,we.newNoDocument(i,ut.min()));const a=gt().add(i),l=new sc(ut.min(),new Map,new Wt(Ct),o,a);await My(r,l),r.pa=r.pa.remove(i),r.ya.delete(t),Rf(r)}else await Gu(r.localStore,t,!1).then(()=>Yu(r,t,n)).catch(Ro)}async function uR(e,t){const n=ft(e),r=t.batch.batchId;try{const s=await bS(n.localStore,t);Ly(n,r,null),Vy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await No(n,s)}catch(s){await Ro(s)}}async function hR(e,t,n){const r=ft(e);try{const s=await function(o,a){const l=ft(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Vt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Ly(r,t,n),Vy(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await No(r,s)}catch(s){await Ro(s)}}function Vy(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function Ly(e,t,n){const r=ft(e);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Sa[r.currentUser.toKey()]=s}}function Yu(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||Fy(e,r)})}function Fy(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(Sy(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Rf(e))}function um(e,t,n){for(const r of n)r instanceof Ny?(e.wa.addReference(r.key,t),fR(e,r)):r instanceof Dy?(W("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||Fy(e,r.key)):ot()}function fR(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(W("SyncEngine","New document in limbo: "+n),e.ga.add(r),Rf(e))}function Rf(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new tt(qt.fromString(t)),r=e.Da.next();e.ya.set(r,new rR(n)),e.pa=e.pa.insert(n,r),Cy(e.remoteStore,new ir(_n(pf(n.path)),r,"TargetPurposeLimboResolution",lf._e))}}async function No(e,t,n){const r=ft(e),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Ef.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(l,c){const u=ft(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,f=>P.forEach(f.ki,p=>u.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>P.forEach(f.qi,p=>u.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Po(h))throw h;W("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const p=u.ts.get(f),v=p.snapshotVersion,E=p.withLastLimboFreeSnapshotVersion(v);u.ts=u.ts.insert(f,E)}}}(r.localStore,i))}async function dR(e,t){const n=ft(e);if(!n.currentUser.isEqual(t)){W("SyncEngine","User change. New user:",t.toKey());const r=await by(n.localStore,t);n.currentUser=t,function(i,o){i.ba.forEach(a=>{a.forEach(l=>{l.reject(new Z(k.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await No(n,r._s)}}function pR(e,t){const n=ft(e),r=n.ya.get(t);if(r&&r.Ra)return gt().add(r.key);{let s=gt();const i=n.fa.get(t);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function mR(e){const t=ft(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=My.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pR.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cR.bind(null,t),t.Va.a_=JS.bind(null,t.eventManager),t.Va.Fa=ZS.bind(null,t.eventManager),t}function gR(e){const t=ft(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=uR.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hR.bind(null,t),t}class hm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ic(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return ES(this.persistence,new _S,t.initialUser,this.serializer)}createPersistence(t){return new gS(wf.jr,this.serializer)}createSharedClientState(t){return new RS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vR{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=dR.bind(null,this.syncEngine),await KS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new YS}()}createDatastore(t){const n=ic(t.databaseInfo.databaseId),r=function(i){return new OS(i)}(t.databaseInfo);return function(i,o,a,l){return new MS(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new LS(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>cm(this.syncEngine,n,0),function(){return om.D()?new om:new PS}())}createSyncEngine(t,n){return function(s,i,o,a,l,c,u){const h=new sR(s,i,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ft(n);W("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Oo(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class yR{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Dn("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class _R{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_e.UNAUTHENTICATED,this.clientId=zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{W("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(W("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Cf(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Yc(e,t){e.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await by(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function fm(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ER(e);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(s=>am(t.remoteStore,s)),e.setAppCheckTokenChangeListener((s,i)=>am(t.remoteStore,i)),e._onlineComponents=t}function wR(e){return e.name==="FirebaseError"?e.code===k.FAILED_PRECONDITION||e.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function ER(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yc(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!wR(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await Yc(e,new hm)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await Yc(e,new hm);return e._offlineComponents}async function Uy(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await fm(e,e._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await fm(e,new vR))),e._onlineComponents}function bR(e){return Uy(e).then(t=>t.syncEngine)}async function dm(e){const t=await Uy(e),n=t.eventManager;return n.onListen=iR.bind(null,t.syncEngine),n.onUnlisten=aR.bind(null,t.syncEngine),n}/**
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
 */function By(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const pm=new Map;/**
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
 */function jy(e,t,n){if(!n)throw new Z(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function IR(e,t,n,r){if(t===!0&&r===!0)throw new Z(k.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mm(e){if(!tt.isDocumentKey(e))throw new Z(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function gm(e){if(tt.isDocumentKey(e))throw new Z(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Pf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":ot()}function fr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Z(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pf(e);throw new Z(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class vm{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new Z(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Z(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}IR("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=By((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lc{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Z(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vm(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jA;switch(r.type){case"firstParty":return new qA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=pm.get(n);r&&(W("ComponentProvider","Removing Datastore"),pm.delete(n),r.terminate())}(this),Promise.resolve()}}function TR(e,t,n,r={}){var s;const i=(e=fr(e,lc))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=_e.MOCK_USER;else{a=gI(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new Z(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _e(c)}e._authCredentials=new $A(new Hv(a,l))}}/**
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
 */class cc{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new cc(this.firestore,t,this._query)}}class Le{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Le(this.firestore,t,this._key)}}class dr extends cc{constructor(t,n,r){super(t,n,pf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Le(this.firestore,null,new tt(t))}withConverter(t){return new dr(this.firestore,t,this._path)}}function kf(e,t,...n){if(e=ke(e),jy("collection","path",t),e instanceof lc){const r=qt.fromString(t,...n);return gm(r),new dr(e,null,r)}{if(!(e instanceof Le||e instanceof dr))throw new Z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(qt.fromString(t,...n));return gm(r),new dr(e.firestore,null,r)}}function xf(e,t,...n){if(e=ke(e),arguments.length===1&&(t=zv.newId()),jy("doc","path",t),e instanceof lc){const r=qt.fromString(t,...n);return mm(r),new Le(e,null,new tt(r))}{if(!(e instanceof Le||e instanceof dr))throw new Z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(qt.fromString(t,...n));return mm(r),new Le(e.firestore,e instanceof dr?e.converter:null,new tt(r))}}/**
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
 */class AR{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ty(this,"async_queue_retry"),this.iu=()=>{const n=Gc();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Gc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Kr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Po(t))throw t;W("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const s=Af.createAndSchedule(this,t,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&ot()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}function ym(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class zs extends lc{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new AR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hy(this),this._firestoreClient.terminate()}}function CR(e,t){const n=typeof e=="object"?e:L0(),r=typeof e=="string"?e:t||"(default)",s=Lh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pI("firestore");i&&TR(s,...i)}return s}function $y(e){return e._firestoreClient||Hy(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Hy(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,c,u){return new rC(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,By(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new _R(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class qs{constructor(t){this._byteString=t}static fromBase64String(t){try{return new qs(Ae.fromBase64String(t))}catch(n){throw new Z(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new qs(Ae.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Of{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Z(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class zy{constructor(t){this._methodName=t}}/**
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
 */class Nf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Z(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Z(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ct(this._lat,t._lat)||Ct(this._long,t._long)}}/**
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
 */const SR=/^__.*__$/;class RR{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new hs(t,this.data,this.fieldMask,n,this.fieldTransforms):new ko(t,this.data,n,this.fieldTransforms)}}function qy(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ot()}}class Df{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Df(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Au(t),s}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return ol(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(qy(this.Iu)&&SR.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class PR{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||ic(t)}pu(t,n,r,s=!1){return new Df({Iu:t,methodName:n,gu:r,path:pe.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wy(e){const t=e._freezeSettings(),n=ic(e._databaseId);return new PR(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Ky(e,t,n,r,s,i={}){const o=e.pu(i.merge||i.mergeFields?2:0,t,n,s);Xy("Data must be an object, but it was:",o,r);const a=Yy(r,o);let l,c;if(i.merge)l=new nn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=kR(t,h,n);if(!o.contains(f))throw new Z(k.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);OR(u,f)||u.push(f)}l=new nn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new RR(new qe(a),l,c)}function Gy(e,t){if(Qy(e=ke(e)))return Xy("Unsupported field value:",t,e),Yy(e,t);if(e instanceof zy)return function(r,s){if(!qy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Gy(a,s.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:sl(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sl(s.serializer,i)}}if(r instanceof Nf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qs)return{bytesValue:gy(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:yf(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${Pf(r)}`)}(e,t)}function Yy(e,t){const n={};return qv(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ei(e,(r,s)=>{const i=Gy(s,t.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qy(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof ne||e instanceof Nf||e instanceof qs||e instanceof Le||e instanceof zy)}function Xy(e,t,n){if(!Qy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pf(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function kR(e,t,n){if((t=ke(t))instanceof Of)return t._internalPath;if(typeof t=="string")return Jy(e,t);throw ol("Field path arguments must be of type string or ",e,!1,void 0,n)}const xR=new RegExp("[~\\*/\\[\\]]");function Jy(e,t,n){if(t.search(xR)>=0)throw ol(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Of(...t.split("."))._internalPath}catch{throw ol(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ol(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(k.INVALID_ARGUMENT,a+e+l)}function OR(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class Zy{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(t_("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NR extends Zy{data(){return super.data()}}function t_(e,t){return typeof t=="string"?Jy(e,t):t instanceof Of?t._internalPath:t._delegate._internalPath}/**
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
 */function DR(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Z(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class MR{convertValue(t,n="none"){switch(ts(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Zt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Zr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw ot()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return ei(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Nf(Zt(t.latitude),Zt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=uf(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(t));default:return null}}convertTimestamp(t){const n=_r(t);return new ne(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=qt.fromString(t);Vt(Ey(r));const s=new eo(r.get(1),r.get(3)),i=new tt(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function e_(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
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
 */class wi{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class n_ extends Zy{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ba(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(t_("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ba extends n_{data(t={}){return super.data(t)}}class VR{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new wi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new ba(this._firestore,this._userDataWriter,r.key,r,new wi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new wi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new ba(s._firestore,s._userDataWriter,a.doc.key,a.doc,new wi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:LR(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function LR(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ot()}}class r_ extends MR{constructor(t){super(),this.firestore=t}convertBytes(t){return new qs(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function FR(e,t,n){e=fr(e,Le);const r=fr(e.firestore,zs),s=e_(e.converter,t,n);return Mf(r,[Ky(Wy(r),"setDoc",e._key,s,e.converter!==null,n).toMutation(e._key,sn.none())])}function UR(e){return Mf(fr(e.firestore,zs),[new mf(e._key,sn.none())])}function BR(e,t){const n=fr(e.firestore,zs),r=xf(e),s=e_(e.converter,t);return Mf(n,[Ky(Wy(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function s_(e,...t){var n,r,s;e=ke(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||ym(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ym(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(e instanceof Le)c=fr(e.firestore,zs),u=pf(e._key.path),l={next:h=>{t[o]&&t[o](jR(c,e,h))},error:t[o+1],complete:t[o+2]};else{const h=fr(e,cc);c=fr(h.firestore,zs),u=h._query;const f=new r_(c);l={next:p=>{t[o]&&t[o](new VR(c,f,h,p))},error:t[o+1],complete:t[o+2]},DR(e._query)}return function(f,p,v,E){const T=new yR(E),y=new tR(p,T,v);return f.asyncQueue.enqueueAndForget(async()=>QS(await dm(f),y)),()=>{T.Na(),f.asyncQueue.enqueueAndForget(async()=>XS(await dm(f),y))}}($y(c),u,a,l)}function Mf(e,t){return function(r,s){const i=new Kr;return r.asyncQueue.enqueueAndForget(async()=>lR(await bR(r),s,i)),i.promise}($y(e),t)}function jR(e,t,n){const r=n.docs.get(t._key),s=new r_(e);return new n_(e,s,t._key,r,new wi(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){ti=s})(Xs),Vs(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new zs(new HA(r.getProvider("auth-internal")),new KA(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Z(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eo(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),hr(Fp,"4.4.0",t),hr(Fp,"4.4.0","esm2017")})();var $R="firebase",HR="10.7.1";/**
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
 */hr($R,HR,"app");function Vf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function i_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zR=i_,o_=new yo("auth","Firebase",i_());/**
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
 */const al=new Mh("@firebase/auth");function qR(e,...t){al.logLevel<=yt.WARN&&al.warn(`Auth (${Xs}): ${e}`,...t)}function Ia(e,...t){al.logLevel<=yt.ERROR&&al.error(`Auth (${Xs}): ${e}`,...t)}/**
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
 */function Qe(e,...t){throw Lf(e,...t)}function En(e,...t){return Lf(e,...t)}function a_(e,t,n){const r=Object.assign(Object.assign({},zR()),{[t]:n});return new yo("auth","Firebase",r).create(t,{appName:e.name})}function WR(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Qe(e,"argument-error"),a_(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Lf(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return o_.create(e,...t)}function it(e,t,...n){if(!e)throw Lf(t,...n)}function kn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ia(t),new Error(t)}function Vn(e,t){e||kn(t)}/**
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
 */function Qu(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function KR(){return _m()==="http:"||_m()==="https:"}function _m(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KR()||yI()||"connection"in navigator)?navigator.onLine:!0}function YR(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Do{constructor(t,n){this.shortDelay=t,this.longDelay=n,Vn(n>t,"Short delay should be less than long delay!"),this.isMobile=vI()||_I()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ff(e,t){Vn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class l_{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const QR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XR=new Do(3e4,6e4);function Cr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Sr(e,t,n,r,s={}){return c_(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=_o(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),l_.fetch()(u_(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function c_(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},QR),t);try{const s=new ZR(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw sa(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sa(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw sa(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw a_(e,u,c);Qe(e,u)}}catch(s){if(s instanceof jn)throw s;Qe(e,"network-request-failed",{message:String(s)})}}async function Mo(e,t,n,r,s={}){const i=await Sr(e,t,n,r,s);return"mfaPendingCredential"in i&&Qe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function u_(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Ff(e.config,s):`${e.config.apiScheme}://${s}`}function JR(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZR{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),XR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sa(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(e,t,r);return s.customData._tokenResponse=n,s}function wm(e){return e!==void 0&&e.enterprise!==void 0}class tP{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return JR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function eP(e,t){return Sr(e,"GET","/v2/recaptchaConfig",Cr(e,t))}/**
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
 */async function nP(e,t){return Sr(e,"POST","/v1/accounts:delete",t)}async function rP(e,t){return Sr(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Ni(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sP(e,t=!1){const n=ke(e),r=await n.getIdToken(t),s=Uf(r);it(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ni(Qc(s.auth_time)),issuedAtTime:Ni(Qc(s.iat)),expirationTime:Ni(Qc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qc(e){return Number(e)*1e3}function Uf(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=k0(n);return s?JSON.parse(s):(Ia("Failed to decode base64 JWT payload"),null)}catch(s){return Ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iP(e){const t=Uf(e);return it(t,"internal-error"),it(typeof t.exp<"u","internal-error"),it(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function io(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof jn&&oP(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function oP({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class aP{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class h_{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ni(this.lastLoginAt),this.creationTime=Ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ll(e){var t;const n=e.auth,r=await e.getIdToken(),s=await io(e,rP(n,{idToken:r}));it(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?uP(i.providerUserInfo):[],a=cP(e.providerData,o),l=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new h_(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function lP(e){const t=ke(e);await ll(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function cP(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function uP(e){return e.map(t=>{var{providerId:n}=t,r=Vf(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hP(e,t){const n=await c_(e,{},async()=>{const r=_o({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=u_(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",l_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fP(e,t){return Sr(e,"POST","/v2/accounts:revokeToken",Cr(e,t))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){it(t.idToken,"internal-error"),it(typeof t.idToken<"u","internal-error"),it(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):iP(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return it(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hP(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new oo;return r&&(it(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(it(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(it(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function Gn(e,t){it(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Gr{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=Vf(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new h_(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await io(this,this.stsTokenManager.getToken(this.auth,t));return it(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sP(this,t)}reload(){return lP(this)}_assign(t){this!==t&&(it(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Gr(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){it(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ll(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await io(this,nP(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,y=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:w,isAnonymous:N,providerData:O,stsTokenManager:Q}=n;it(R&&Q,t,"internal-error");const z=oo.fromJSON(this.name,Q);it(typeof R=="string",t,"internal-error"),Gn(h,t.name),Gn(f,t.name),it(typeof w=="boolean",t,"internal-error"),it(typeof N=="boolean",t,"internal-error"),Gn(p,t.name),Gn(v,t.name),Gn(E,t.name),Gn(T,t.name),Gn(y,t.name),Gn(b,t.name);const Y=new Gr({uid:R,auth:t,email:f,emailVerified:w,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:p,tenantId:E,stsTokenManager:z,createdAt:y,lastLoginAt:b});return O&&Array.isArray(O)&&(Y.providerData=O.map(lt=>Object.assign({},lt))),T&&(Y._redirectEventId=T),Y}static async _fromIdTokenResponse(t,n,r=!1){const s=new oo;s.updateFromServerResponse(n);const i=new Gr({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await ll(i),i}}/**
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
 */const Em=new Map;function xn(e){Vn(e instanceof Function,"Expected a class definition");let t=Em.get(e);return t?(Vn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Em.set(e,t),t)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}f_.type="NONE";const bm=f_;/**
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
 */function Ta(e,t,n){return`firebase:${e}:${t}:${n}`}class Ps{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Gr._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Ps(xn(bm),t,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||xn(bm);const o=Ta(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Gr._fromJSON(t,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ps(i,t,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Ps(i,t,r))}}/**
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
 */function Im(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(m_(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(d_(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(v_(t))return"Blackberry";if(y_(t))return"Webos";if(Bf(t))return"Safari";if((t.includes("chrome/")||p_(t))&&!t.includes("edge/"))return"Chrome";if(g_(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function d_(e=Te()){return/firefox\//i.test(e)}function Bf(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function p_(e=Te()){return/crios\//i.test(e)}function m_(e=Te()){return/iemobile/i.test(e)}function g_(e=Te()){return/android/i.test(e)}function v_(e=Te()){return/blackberry/i.test(e)}function y_(e=Te()){return/webos/i.test(e)}function uc(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dP(e=Te()){var t;return uc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function pP(){return wI()&&document.documentMode===10}function __(e=Te()){return uc(e)||g_(e)||y_(e)||v_(e)||/windows phone/i.test(e)||m_(e)}function mP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function w_(e,t=[]){let n;switch(e){case"Browser":n=Im(Te());break;case"Worker":n=`${Im(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xs}/${r}`}/**
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
 */class gP{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const l=t(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vP(e,t={}){return Sr(e,"GET","/v2/passwordPolicy",Cr(e,t))}/**
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
 */const yP=6;class _P{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class wP{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tm(this),this.idTokenSubscription=new Tm(this),this.beforeStateQueue=new gP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return it(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ll(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=YR()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ke(t):null;return n&&it(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&it(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vP(this),n=new _P(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fP(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&xn(t)||this._popupRedirectResolver;it(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(it(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return it(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=w_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&qR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rr(e){return ke(e)}class Tm{constructor(t){this.auth=t,this.observer=null,this.addObserver=SI(n=>this.observer=n)}get next(){return it(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function EP(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function E_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EP().appendChild(r)})}function bP(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const IP="https://www.google.com/recaptcha/enterprise.js?render=",TP="recaptcha-enterprise",AP="NO_RECAPTCHA";class CP{constructor(t){this.type=TP,this.auth=Rr(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{eP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new tP(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;wm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:t}).then(c=>{o(c)}).catch(()=>{o(AP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&wm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}E_(IP+a).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Am(e,t,n,r=!1){const s=new CP(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xu(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Am(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Am(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
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
 */function SP(e,t){const n=Lh(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(qa(i,t??{}))return s;Qe(s,"already-initialized")}return n.initialize({options:t})}function RP(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function PP(e,t,n){const r=Rr(e);it(r._canInitEmulator,r,"emulator-config-failed"),it(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=b_(t),{host:o,port:a}=kP(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||xP()}function b_(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function kP(e){const t=b_(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cm(o)}}}function Cm(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xP(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class jf{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(t){return kn("not implemented")}_linkToIdToken(t,n){return kn("not implemented")}_getReauthenticationResolver(t){return kn("not implemented")}}async function OP(e,t){return Sr(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function NP(e,t){return Mo(e,"POST","/v1/accounts:signInWithPassword",Cr(e,t))}/**
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
 */async function DP(e,t){return Mo(e,"POST","/v1/accounts:signInWithEmailLink",Cr(e,t))}async function MP(e,t){return Mo(e,"POST","/v1/accounts:signInWithEmailLink",Cr(e,t))}/**
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
 */class ao extends jf{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new ao(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ao(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xu(t,n,"signInWithPassword",NP);case"emailLink":return DP(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xu(t,r,"signUpPassword",OP);case"emailLink":return MP(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function ks(e,t){return Mo(e,"POST","/v1/accounts:signInWithIdp",Cr(e,t))}/**
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
 */const VP="http://localhost";class es extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new es(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=Vf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ks(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ks(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ks(t,n)}buildRequest(){const t={requestUri:VP,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=_o(n)}return t}}/**
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
 */function LP(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FP(e){const t=pi(mi(e)).link,n=t?pi(mi(t)).deep_link_id:null,r=pi(mi(e)).deep_link_id;return(r?pi(mi(r)).link:null)||r||n||t||e}class $f{constructor(t){var n,r,s,i,o,a;const l=pi(mi(t)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=LP((s=l.mode)!==null&&s!==void 0?s:null);it(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=FP(t);try{return new $f(n)}catch{return null}}}/**
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
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(t,n){return ao._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=$f.parseLink(n);return it(r,"argument-error"),ao._fromEmailAndCode(t,r.code,r.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hf{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends Hf{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class nr extends Vo{constructor(){super("facebook.com")}static credential(t){return es._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return nr.credentialFromTaggedObject(t)}static credentialFromError(t){return nr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return nr.credential(t.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return es._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class rr extends Vo{constructor(){super("github.com")}static credential(t){return es._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rr.credentialFromTaggedObject(t)}static credentialFromError(t){return rr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return rr.credential(t.oauthAccessToken)}catch{return null}}}rr.GITHUB_SIGN_IN_METHOD="github.com";rr.PROVIDER_ID="github.com";/**
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
 */class sr extends Vo{constructor(){super("twitter.com")}static credential(t,n){return es._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return sr.credentialFromTaggedObject(t)}static credentialFromError(t){return sr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
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
 */async function UP(e,t){return Mo(e,"POST","/v1/accounts:signUp",Cr(e,t))}/**
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
 */class ns{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await Gr._fromIdTokenResponse(t,r,s),o=Sm(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Sm(r);return new ns({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Sm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class cl extends jn{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cl.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new cl(t,n,r,s)}}function I_(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cl._fromErrorAndOperation(e,i,t,r):i})}async function BP(e,t,n=!1){const r=await io(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ns._forOperation(e,"link",r)}/**
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
 */async function jP(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await io(e,I_(r,s,t,e),n);it(i.idToken,r,"internal-error");const o=Uf(i.idToken);it(o,r,"internal-error");const{sub:a}=o;return it(e.uid===a,r,"user-mismatch"),ns._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),i}}/**
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
 */async function T_(e,t,n=!1){const r="signIn",s=await I_(e,r,t),i=await ns._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function $P(e,t){return T_(Rr(e),t)}/**
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
 */async function A_(e){const t=Rr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Rm(e,t,n){const r=Rr(e),o=await Xu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&A_(e),l}),a=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function HP(e,t,n){return $P(ke(e),si.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&A_(e),r})}function zP(e,t,n,r){return ke(e).onIdTokenChanged(t,n,r)}function qP(e,t,n){return ke(e).beforeAuthStateChanged(t,n)}function C_(e,t,n,r){return ke(e).onAuthStateChanged(t,n,r)}function WP(e){return ke(e).signOut()}const ul="__sak";/**
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
 */class S_{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ul,"1"),this.storage.removeItem(ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function KP(){const e=Te();return Bf(e)||uc(e)}const GP=1e3,YP=10;class R_ extends S_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=KP()&&mP(),this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pP()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,YP):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},GP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}R_.type="LOCAL";const QP=R_;/**
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
 */class P_ extends S_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}P_.type="SESSION";const k_=P_;/**
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
 */function XP(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new hc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await XP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function zf(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class JP{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=zf("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function ZP(e){bn().location.href=e}/**
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
 */function x_(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function tk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ek(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function nk(){return x_()?self:null}/**
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
 */const O_="firebaseLocalStorageDb",rk=1,hl="firebaseLocalStorage",N_="fbase_key";class Lo{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(e,t){return e.transaction([hl],t?"readwrite":"readonly").objectStore(hl)}function sk(){const e=indexedDB.deleteDatabase(O_);return new Lo(e).toPromise()}function Ju(){const e=indexedDB.open(O_,rk);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(hl,{keyPath:N_})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(hl)?t(r):(r.close(),await sk(),t(await Ju()))})})}async function Pm(e,t,n){const r=fc(e,!0).put({[N_]:t,value:n});return new Lo(r).toPromise()}async function ik(e,t){const n=fc(e,!1).get(t),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function km(e,t){const n=fc(e,!0).delete(t);return new Lo(n).toPromise()}const ok=800,ak=3;class D_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ak)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(nk()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await tk(),!this.activeServiceWorker)return;this.sender=new JP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ek()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ju();return await Pm(t,ul,"1"),await km(t,ul),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pm(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ik(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>km(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=fc(s,!1).getAll();return new Lo(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}D_.type="LOCAL";const lk=D_;new Do(3e4,6e4);/**
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
 */function M_(e,t){return t?xn(t):(it(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class qf extends jf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ks(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ks(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ks(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ck(e){return T_(e.auth,new qf(e),e.bypassAuthState)}function uk(e){const{auth:t,user:n}=e;return it(n,t,"internal-error"),jP(n,new qf(e),e.bypassAuthState)}async function hk(e){const{auth:t,user:n}=e;return it(n,t,"internal-error"),BP(n,new qf(e),e.bypassAuthState)}/**
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
 */class V_{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ck;case"linkViaPopup":case"linkViaRedirect":return hk;case"reauthViaPopup":case"reauthViaRedirect":return uk;default:Qe(this.auth,"internal-error")}}resolve(t){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fk=new Do(2e3,1e4);async function L_(e,t,n){const r=Rr(e);WR(e,t,Hf);const s=M_(r,n);return new Br(r,"signInViaPopup",t,s).executeNotNull()}class Br extends V_{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return it(t,this.auth,"internal-error"),t}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const t=zf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,fk.get())};t()}}Br.currentPopupAction=null;/**
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
 */const dk="pendingRedirect",Aa=new Map;class pk extends V_{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Aa.get(this.auth._key());if(!t){try{const r=await mk(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Aa.set(this.auth._key(),t)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mk(e,t){const n=yk(t),r=vk(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function gk(e,t){Aa.set(e._key(),t)}function vk(e){return xn(e._redirectPersistence)}function yk(e){return Ta(dk,e.config.apiKey,e.name)}async function _k(e,t,n=!1){const r=Rr(e),s=M_(r,t),o=await new pk(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const wk=10*60*1e3;class Ek{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bk(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!F_(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(xm(t))}saveEventToCache(t){this.cachedEventUids.add(xm(t)),this.lastProcessedEventTime=Date.now()}}function xm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function F_({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bk(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(e);default:return!1}}/**
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
 */async function Ik(e,t={}){return Sr(e,"GET","/v1/projects",t)}/**
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
 */const Tk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ak=/^https?/;async function Ck(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Ik(e);for(const n of t)try{if(Sk(n))return}catch{}Qe(e,"unauthorized-domain")}function Sk(e){const t=Qu(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ak.test(n))return!1;if(Tk.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Rk=new Do(3e4,6e4);function Om(){const e=bn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Pk(e){return new Promise((t,n)=>{var r,s,i;function o(){Om(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Om(),n(En(e,"network-request-failed"))},timeout:Rk.get()})}if(!((s=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=bn().gapi)===null||i===void 0)&&i.load)o();else{const a=bP("iframefcb");return bn()[a]=()=>{gapi.load?o():n(En(e,"network-request-failed"))},E_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ca=null,t})}let Ca=null;function kk(e){return Ca=Ca||Pk(e),Ca}/**
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
 */const xk=new Do(5e3,15e3),Ok="__/auth/iframe",Nk="emulator/auth/iframe",Dk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vk(e){const t=e.config;it(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ff(t,Nk):`https://${e.config.authDomain}/${Ok}`,r={apiKey:t.apiKey,appName:e.name,v:Xs},s=Mk.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${_o(r).slice(1)}`}async function Lk(e){const t=await kk(e),n=bn().gapi;return it(n,e,"internal-error"),t.open({where:document.body,url:Vk(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(e,"network-request-failed"),a=bn().setTimeout(()=>{i(o)},xk.get());function l(){bn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Fk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uk=500,Bk=600,jk="_blank",$k="http://localhost";class Nm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hk(e,t,n,r=Uk,s=Bk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Fk),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Te().toLowerCase();n&&(a=p_(c)?jk:n),d_(c)&&(t=t||$k,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(dP(c)&&a!=="_self")return zk(t||"",a),new Nm(null);const h=window.open(t||"",a,u);it(h,e,"popup-blocked");try{h.focus()}catch{}return new Nm(h)}function zk(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qk="__/auth/handler",Wk="emulator/auth/handler",Kk=encodeURIComponent("fac");async function Dm(e,t,n,r,s,i){it(e.config.authDomain,e,"auth-domain-config-required"),it(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Xs,eventId:s};if(t instanceof Hf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",CI(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(t instanceof Vo){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${Kk}=${encodeURIComponent(l)}`:"";return`${Gk(e)}?${_o(a).slice(1)}${c}`}function Gk({config:e}){return e.emulator?Ff(e,Wk):`https://${e.authDomain}/${qk}`}/**
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
 */const Xc="webStorageSupport";class Yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=k_,this._completeRedirectFn=_k,this._overrideRedirectResult=gk}async _openPopup(t,n,r,s){var i;Vn((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dm(t,n,r,Qu(),s);return Hk(t,o,zf())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await Dm(t,n,r,Qu(),s);return ZP(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Lk(t),r=new Ek(t);return n.register("authEvent",s=>(it(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Xc,{type:Xc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xc];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ck(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return __()||Bf()||uc()}}const Qk=Yk;var Mm="@firebase/auth",Vm="1.5.1";/**
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
 */class Xk{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){it(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zk(e){Vs(new Qr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;it(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w_(e)},c=new wP(r,s,i,l);return RP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Vs(new Qr("auth-internal",t=>{const n=Rr(t.getProvider("auth").getImmediate());return(r=>new Xk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(Mm,Vm,Jk(e)),hr(Mm,Vm,"esm2017")}/**
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
 */const tx=5*60,ex=N0("authIdTokenMaxAge")||tx;let Lm=null;const nx=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ex)return;const s=n==null?void 0:n.token;Lm!==s&&(Lm=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dc(e=L0()){const t=Lh(e,"auth");if(t.isInitialized())return t.getImmediate();const n=SP(e,{popupRedirectResolver:Qk,persistence:[lk,QP,k_]}),r=N0("authTokenSyncURL");if(r){const i=nx(r);qP(n,i,()=>i(n.currentUser)),zP(n,o=>i(o))}const s=x0("auth");return s&&PP(n,`http://${s}`),n}Zk("Browser");const rx={apiKey:"AIzaSyCHoSH0tSakbkfcnKkgQNIQmkxbdu0xA0c",authDomain:"fir-projects-b60d8.firebaseapp.com",projectId:"fir-projects-b60d8",storageBucket:"fir-projects-b60d8.appspot.com",messagingSenderId:"894508488100",appId:"1:894508488100:web:67c5cceae09a3c512e5d31"};V0(rx);const lo=CR(),Ws=dc(),U_=()=>{const e=rt([]),t=()=>{e.value=[]},n=kf(lo,"cartItems");return s_(n,s=>{e.value=s.docs.map(i=>({id:i.id,...i.data()}))}),{cartItems:e,clearCart:t,removeFromCart:s=>{console.log(s);const i=xf(lo,"cartItems",s.id);UR(i)}}},Ce=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},sx=e=>(ls("data-v-6b02e796"),e=e(),cs(),e),ix={class:"cart-item"},ox=["src","alt"],ax={class:"cart-details"},lx={class:"cartName"},cx={class:"group"},ux={class:"cartPrice"},hx={class:"priceTotal"},fx=sx(()=>g("svg",{width:"14",height:"16",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[g("defs",null,[g("path",{d:"M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z",id:"a"})]),g("use",{fill:"#C3CAD9","fill-rule":"nonzero","xlink:href":"#a"})],-1)),dx=[fx],px={class:"quantity"},mx={__name:"CartItem",props:{product:Object},setup(e){const t=e,n=rt(1),r=()=>t.product.price*n.value,s=()=>{n.value++},i=()=>{n.value>1&&n.value--},{cartItems:o,removeFromCart:a}=U_();return(l,c)=>(K(),nt("div",ix,[g("img",{src:e.product.image,alt:e.product.name,class:"cartImg"},null,8,ox),g("div",ax,[g("h4",lx,Mt(e.product.name),1),g("div",cx,[g("p",ux,[xt(" $"+Mt(e.product.price)+" * "+Mt(n.value)+" ",1),g("span",hx,"$"+Mt(r()),1)])])]),g("div",{class:"deleteItem",onClick:c[0]||(c[0]=u=>Dt(a)(e.product))},dx),g("div",px,[g("span",{onClick:s},"+"),g("p",null,Mt(n.value),1),g("span",{onClick:i},"-")])]))}},gx=Ce(mx,[["__scopeId","data-v-6b02e796"]]),B_=e=>(ls("data-v-c6e55859"),e=e(),cs(),e),vx={class:"cart-container"},yx=B_(()=>g("h2",null,"Cart",-1)),_x=B_(()=>g("hr",null,null,-1)),wx={key:0},Ex={__name:"Cart",setup(e){const{cartItems:t,clearCart:n}=U_();return(r,s)=>(K(),nt("div",vx,[g("div",{class:"cart",onClick:s[1]||(s[1]=Nl(()=>{},["stop"]))},[yx,_x,Dt(t).length===0?(K(),nt("div",wx,"Your cart is empty")):ue("",!0),(K(!0),nt(Ut,null,Bi(Dt(t),i=>(K(),en(gx,{key:i.id,product:i},null,8,["product"]))),128)),g("button",{class:"checkout",onClick:s[0]||(s[0]=(...i)=>Dt(n)&&Dt(n)(...i))}," Checkout ")])]))}},j_=Ce(Ex,[["__scopeId","data-v-c6e55859"]]),$_=rt(Ws.currentUser);C_(Ws,e=>{console.log("user state changed, current user is:",e),$_.value=e});const H_=()=>({user:$_}),bx=g("h1",{class:"headerLogo"},"SoundWaves.",-1),Ix={class:"DeskNav"},Tx={key:0},Ax={class:"bar"},Cx=g("img",{src:eE,alt:"user",class:"userIcon"},null,-1),Sx={key:1,class:"shoppingContainer"},Rx={__name:"App",setup(e){const t=rt(!1),n=rt(null);Ui(()=>{const c=n.value,u=c.offsetTop;window.onscroll=()=>{window.pageYOffset>u?c.classList.add("sticky"):c.classList.remove("sticky")}});const r=()=>{t.value=!t.value},s=()=>{t.value=!1},i=rt(!1),o=()=>{i.value=!i.value},a=()=>{i.value=!1};rt(!0);const{user:l}=H_();return(c,u)=>(K(),nt(Ut,null,[g("header",{ref_key:"headerRef",ref:n},[g("img",{onClick:r,src:tE,alt:"menu-bar",class:"menuBar"}),bx,g("nav",Ix,[st(Dt(Qn),{to:{name:"home"}},{default:zt(()=>[xt("Home")]),_:1}),st(Dt(Qn),{to:{name:"shop"}},{default:zt(()=>[xt("Shop")]),_:1}),st(Dt(Qn),{to:{name:"about"}},{default:zt(()=>[xt("About")]),_:1})]),st(Ol,{name:"modal-fade"},{default:zt(()=>[t.value?(K(),nt("nav",Tx,[g("img",{onClick:s,src:p0,alt:"close icon",class:"closeModal"}),st(Dt(Qn),{to:{name:"home"}},{default:zt(()=>[xt("Home")]),_:1}),st(Dt(Qn),{to:{name:"shop"}},{default:zt(()=>[xt("Shop")]),_:1}),st(Dt(Qn),{to:{name:"about"}},{default:zt(()=>[xt("About")]),_:1})])):ue("",!0)]),_:1}),st(Dt(ib),{ref_key:"headerRef",ref:n,position:"top-right",richColors:"",class:"toaster"},null,512),g("div",Ax,[Dt(l)?(K(),en(Dt(Qn),{key:0,to:{name:"user"}},{default:zt(()=>[Cx]),_:1})):ue("",!0),Dt(l)?(K(),nt("div",Sx,[g("img",{src:nE,alt:"shopping bag",class:"shoppingBag",onClick:o})])):ue("",!0)])],512),st(Dt(S0)),g("div",null,[i.value?(K(),en(j_,{key:0,onClick:a})):ue("",!0)])],64))}},Px={data(){return{targetDate:new Date("2025-10-04T23:59:59"),timeRemaining:{},intervalId:null}},computed:{years(){return this.timeRemaining.years||0},months(){return this.timeRemaining.months||0},days(){return this.timeRemaining.days||0},hours(){return this.timeRemaining.hours||0},minutes(){return this.timeRemaining.minutes||0},seconds(){return this.timeRemaining.seconds||0}},methods:{startTimer(){this.intervalId=setInterval(()=>{const e=new Date,t=this.targetDate-e;t>0?this.timeRemaining=this.calculateTimeRemaining(t):(clearInterval(this.intervalId),console.log("Countdown reached zero!"))},1e3)},calculateTimeRemaining(e){const a=Math.floor(e/31536e6),l=Math.floor(e%31536e6/2592e6),c=Math.floor(e%2592e6/864e5),u=Math.floor(e%864e5/36e5),h=Math.floor(e%36e5/6e4),f=Math.floor(e%6e4/1e3);return{years:a,months:l,days:c,hours:u,minutes:h,seconds:f}}},mounted(){this.startTimer()},beforeDestroy(){clearInterval(this.intervalId)}},ii=e=>(ls("data-v-d430b22a"),e=e(),cs(),e),kx={class:"countdownContainer"},xx={class:"countdown-years countdown"},Ox=ii(()=>g("span",{class:"countdown-text text"},"Year",-1)),Nx={class:"countdown-months countdown"},Dx=ii(()=>g("span",{class:"countdown-text text"},"Months",-1)),Mx={class:"countdown-days countdown"},Vx=ii(()=>g("span",{class:"countdown-text text"},"Days",-1)),Lx={class:"countdown-hours countdown"},Fx=ii(()=>g("span",{class:"countdown-text text"},"Hours",-1)),Ux={class:"countdown-minutes countdown"},Bx=ii(()=>g("span",{class:"countdown-text text"},"Minutes",-1)),jx={class:"countdown-secs countdown"},$x=ii(()=>g("span",{class:"countdown-text text"},"Seconds",-1));function Hx(e,t,n,r,s,i){return K(),nt("div",kx,[g("div",xx,[g("p",null,Mt(i.years),1),Ox]),g("div",Nx,[g("p",null,Mt(i.months),1),Dx]),g("div",Mx,[g("p",null,Mt(i.days),1),Vx]),g("div",Lx,[g("p",null,Mt(i.hours),1),Fx]),g("div",Ux,[g("p",null,Mt(i.minutes),1),Bx]),g("div",jx,[g("p",null,Mt(i.seconds),1),$x])])}const zx=Ce(Px,[["render",Hx],["__scopeId","data-v-d430b22a"]]),qx={prop:{loader:"loading"}},Wx={class:"spin"};function Kx(e,t,n,r,s,i){return K(),nt("div",Wx)}const Wf=Ce(qx,[["render",Kx],["__scopeId","data-v-222090c1"]]),z_=e=>{const t=rt(null);let n=kf(lo,e);const r=s_(n,s=>{let i=[];s.docs.forEach(o=>{i.push({...o.data(),id:o.id})}),t.value=i});return lr(s=>{s(()=>r())}),{products:t}},Gx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAQCAYAAADpunr5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALNSURBVHgB7ZfPTxNBFMffm90lTfSwGAg9bv8CykGjXCg3j/IfwE1NExaxXqFX+dE1AlflL2j7F7RetDEe6l9AvVURsyZEA+3O883WlrZ2a0k5MXyTttN9bz8zO/Pe7BuAIbKV4nEHrki68VzXtR+7rjPMRwwzGhOxnEXkwhVJN15DWDkTraE8jDKoSDAJjtjFb579TvgsGEO68VTkm8I6IoKaRY05z/MG8iIzwAgg1WqRbU7Exo4K3XiWsFIc3W8RZLEpzEhe9BYkYKPTRlyFcaUZTwJsBBJeAWGBgZG8cAu6MzOzioRJRLJ5JA5yFBCA0+1IRD4iVlttqLG99uNbPTsIqhsvvZZZRYQkITKPHCK0BVD59e7WSmhfz5QYkuTFCHnsyzyq7e1uZ011QSBO8s9yaz3YNKATDOGtNGWA+gwcjI48QJokwGUiuUYSsxLO/X3Pq7XNeztbi+E7AUxHCnR423nDl0Oeob5+nZ6WY7dv/UTAh/AfqcjgJ3hyUq97UT668T5+eF+++2Be8TZQ4LuD3E6l3+dTpeLfuz/vAIocyWBtP7cT8nqqIHt6OmkII4996dgZDKdhIIMl//i4CiNIN95TN5PkBcijlCt73na525Zef/GItzKefFo68LY6vJ6XsOoICQ6jOuB9rTjqYHTkqYnlqueQb0z12yiQDhIVuye/1Ue/EBYi+BwROAuXlXY8XOASqKyaKiPS7vNUqxtQEz/7b/d9mpqJd95J4f6H6F+k6OUPKbrx0s8y1JSNBB/Ccvw3xYvoq4pIlaRCQMlkW/ehrCcDpqbiqYuBQDY4P0ucfK0noFMB8CElFkvCiNKN9zfafUNMlPjez2qy93dfJrjO+oIC8myzm2D28HoWgIRUpVc5EDj3vV7fbK+8ajcREjzQAsnQZyTpxgODzxVI1UCKRa7xN9uRrtqBNBa5WQBDjM670Y2uvf4AvYqQkvgyTR4AAAAASUVORK5CYII=",Yx={props:["products"],components:{Spinner:Wf},methods:{addToCart(e){try{const t=kf(lo,"cartItems");BR(t,e)}catch(t){console.error("Error adding to cart:",t)}return m0.success("Item added to cart")}},setup(){const{products:e,load:t,error:n}=z_("products");return{products:e,load:t,error:n}}},Qx=e=>(ls("data-v-f38626c0"),e=e(),cs(),e),Xx={class:"imgGroup"},Jx=["src"],Zx=Qx(()=>g("img",{src:Gx,alt:"stars",class:"productRating"},null,-1)),t4=["onClick"],e4={class:"productName"},n4={class:"productPrice"},r4={key:1};function s4(e,t,n,r,s,i){const o=He("Spinner");return r.products?(K(!0),nt(Ut,{key:0},Bi(r.products,a=>(K(),nt("div",{key:a.id,class:"products"},[g("div",Xx,[g("img",{src:a.image,alt:"image",class:"productImg",loading:"lazy"},null,8,Jx),Zx]),g("button",{class:"productBtn",onClick:l=>i.addToCart(a)},Mt(a.btnText),9,t4),g("p",e4,Mt(a.name),1),g("p",n4,"$"+Mt(a.price),1)]))),128)):(K(),nt("div",r4,[st(o)]))}const q_=Ce(Yx,[["render",s4],["__scopeId","data-v-f38626c0"]]),i4="/assets/logoipsum-1-ojtkBY0V.svg",o4="/assets/logoipsum-2-TIWxX2cn.svg",a4="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='220'%20height='40'%20fill='none'%20viewBox='0%200%20220%2040'%3e%3cpath%20fill='%230E1534'%20d='M20%2040c11.046%200%2020-8.954%2020-20V6a6%206%200%200%200-6-6H21v8.774c0%202.002.122%204.076%201.172%205.78a9.999%209.999%200%200%200%206.904%204.627l.383.062a.8.8%200%200%201%200%201.514l-.383.062a10%2010%200%200%200-8.257%208.257l-.062.383a.8.8%200%200%201-1.514%200l-.062-.383a10%2010%200%200%200-4.627-6.904C12.85%2021.122%2010.776%2021%208.774%2021H.024C.547%2031.581%209.29%2040%2020%2040Z'%3e%3c/path%3e%3cpath%20fill='%230E1534'%20d='M0%2019h8.774c2.002%200%204.076-.122%205.78-1.172a10.018%2010.018%200%200%200%203.274-3.274C18.878%2012.85%2019%2010.776%2019%208.774V0H6a6%206%200%200%200-6%206v13ZM46.455%202a2%202%200%201%201-4%200%202%202%200%200%201%204%200ZM211.711%2012.104c5.591%200%208.289%203.905%208.289%208.428v8.495h-5.851V21.54c0-2.05-.748-3.742-2.893-3.742-2.145%200-2.86%201.692-2.86%203.742v7.486h-5.851V21.54c0-2.05-.715-3.742-2.861-3.742-2.145%200-2.893%201.692-2.893%203.742v7.486h-5.85v-8.495c0-4.523%202.697-8.428%208.288-8.428%203.056%200%205.266%201.204%206.274%203.189%201.072-1.985%203.413-3.19%206.208-3.19ZM180.427%2023.82c1.885%200%202.698-1.725%202.698-3.776v-7.29h5.85v8.006c0%204.784-2.795%208.755-8.548%208.755-5.754%200-8.549-3.97-8.549-8.755v-8.006h5.851v7.29c0%202.05.812%203.776%202.698%203.776ZM163.275%2029.547c-3.673%200-6.046-1.269-7.444-3.742l4.226-2.376c.585%201.041%201.462%201.562%202.925%201.562%201.203%200%201.755-.423%201.755-.944%200-1.985-8.581.033-8.581-6.28%200-3.06%202.6-5.533%207.021-5.533%203.868%200%205.981%201.887%206.924%203.71l-4.226%202.408c-.357-.976-1.463-1.562-2.568-1.562-.845%200-1.3.358-1.3.846%200%202.018%208.581.163%208.581%206.281%200%203.417-3.348%205.63-7.313%205.63ZM142.833%2036.512h-5.851V20.858c0-4.98%203.738-8.592%208.939-8.592%205.071%200%208.939%203.873%208.939%208.592%200%205.207-3.446%208.657-8.614%208.657-1.203%200-2.405-.358-3.413-.912v7.909Zm3.088-12.497c1.853%200%203.088-1.432%203.088-3.125%200-1.724-1.235-3.124-3.088-3.124s-3.088%201.4-3.088%203.125c0%201.692%201.235%203.124%203.088%203.124ZM131.121%2011.03c-1.918%200-3.51-1.595-3.51-3.515%200-1.92%201.592-3.515%203.51-3.515%201.918%200%203.511%201.595%203.511%203.515%200%201.92-1.593%203.515-3.511%203.515Zm-2.925%201.724h5.851v16.273h-5.851V12.754ZM116.97%2029.515c-5.071%200-8.939-3.905-8.939-8.657%200-4.719%203.868-8.624%208.939-8.624s8.939%203.905%208.939%208.624c0%204.752-3.868%208.657-8.939%208.657Zm0-5.5c1.853%200%203.088-1.432%203.088-3.125%200-1.724-1.235-3.156-3.088-3.156s-3.088%201.432-3.088%203.156c0%201.693%201.235%203.125%203.088%203.125ZM96.983%2037c-4.03%200-6.956-1.79-8.451-4.98l4.843-2.603c.52%201.107%201.495%202.246%203.51%202.246%202.114%200%203.511-1.335%203.674-3.678-.78.684-2.016%201.204-3.868%201.204-4.519%200-8.16-3.482-8.16-8.364%200-4.718%203.869-8.559%208.94-8.559%205.201%200%208.939%203.613%208.939%208.592v6.444c0%205.858-4.064%209.698-9.427%209.698Zm.39-13.31c1.755%200%203.088-1.205%203.088-2.995%200-1.757-1.332-2.929-3.088-2.929-1.723%200-3.088%201.172-3.088%202.93%200%201.79%201.365%202.993%203.088%202.993ZM78.607%2029.515c-5.071%200-8.94-3.905-8.94-8.657%200-4.719%203.869-8.624%208.94-8.624%205.07%200%208.939%203.905%208.939%208.624%200%204.752-3.869%208.657-8.94%208.657Zm0-5.5c1.853%200%203.088-1.432%203.088-3.125%200-1.724-1.235-3.156-3.088-3.156s-3.088%201.432-3.088%203.156c0%201.693%201.235%203.125%203.088%203.125ZM59.013%207.06v16.434H68.7v5.533H58.2c-3.705%200-5.2-1.953-5.2-5.045V7.06h6.013Z'%3e%3c/path%3e%3c/svg%3e",l4="/assets/logoipsum-4-YwpBnNLa.svg",c4="/assets/logoipsum-5-8MdYOYlr.svg",u4="/assets/logoipsum-6-WsIfSRu_.svg",h4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAg4SURBVHgB7VvNjxRFFH89H+CBA7siHl1k9QAHTLjDROOfAGdNPBjjB8F4MJu4rCheTEBIjEf0CCePJCQuJNyIwQNwIizhBs7ObgLha+H5Xm29ntevq+ejp7tnkPklRfXsTHe9/tX7qlcFwBRTTDHFFFNMMQQQUX+M6HPEvb8GufYt677/JxQZjEi9dBRqQhjf5xtUiQhKhLwcwX3U4z179qzVaDT20eVBau9R2+4bY43aCt1/h+69RtfL1F+yz1CfXzrV0jOutWHm+fPnS9R3cHjcpnvPUj9nzVCN83JASBHB19bWZqg/hQWBiXr06NEuVORDydZQBCJzHR07dqxGL3ME82lMP9ym9hGPgWZCYBLJwoCzJXIK05os8BgQdvATg5RgJDeb1F9YEV68eHGNx4QSiBr1ARJBbL7yN2xGpiqxTO19jpjotdlfo4+iuVCDfJDZickRoUjlT0L15DBa1E464YgQRc5YTC4UYqONjY2Pcfw4AioR5X+wSseNKgdRA0ccdskXrOD40VlfX5/18mlyKiXIksSh9ixODk6FJhHKBiazYrmukfa8jROGu3fvzmbkSKUiJogHh00nX/NLgIkCL2lYNi9nJGRhiSTZVXY86Ki+p726it/9cMK1AtFRk6gnVSxhIAwa5uMyA/qLpaUlNwhFrhZF0rcgJ1Y7Hfjl199gdbVDg0CR2L6wsMCVAiBiIt+z+JFPAQYiaeA8SBIwqV3QYO7vVLI4CDmhyXl9Zga+/OxTKBJcTmE5RVaNQZPHgQny5LjZ8EqEfuB9kAMhcmZnZ6BgtNS1Y0SIwc0UoO8DGtAf8YM9SXj9+nUm1mXR9Lddw6byFZHD2EeyxgU1ntzFxUVZekiW3ZOlgTTI+p3z58/LQ3FY/1MhOYzt9g8ymdGAs9rrR7FjZq0BteaS9c2hQ4fg3LlzGzAEFn/8yZGTB0zk0sK3Q91DorKVaC3B2FMPUKrtpUFSUHYdduvLkf5+WIwSqXLem7qL3wGTZdvsMXt9J47ZD8J5RMQ27U1MNOpfCKhyFlh7TpOJtcnUWCO+YhObKc3E1g4fPryD5OVr9PLiJj+pDYUg+mqQR2xuTA5HLzYvbvT3dRgCTAr7HfY/TJbzR518JtcPJNsd9VGCTeS7gdxQL4ISDxAHzeMqLQLKov+BIVEVSST/CmsPTyR0J1w0yXeYKvgNBDQ7BpK2+75Og9a5p/2to5gT7fYqLh4/gZ8f/cYtM3jJUST8eqzuW800u/DOhcTOpjzck+OIevDgwQc4AixJRYJlE4JkQjVB2CUm01nX+pEjdsa9pO3e6bmHbtu27RJs7oTmgja3ItdiJPsdL5tLR+7fv5+lJRF0TW0oWIYTJtZqtRrc6LpBZvY9ThhoEf07bK4UuMVaJOUP835DrfD1DaH6j1XZ5tWrV3fghIEKZvNCTsC8avbdcFgFwvS2bqxFrDk8qGgQk0QzdhonBKw9+/fvbxqCYnLQnDCBPFEsixzoRgXXmCQW5vLly29gOVvMQ4GLd7du3XqHJw2UeXGzBTQcoMLYb7Ea6x0Pzj0XnfQPlpeXXX/gwIE1mrnjMGY8efLk+O7du1dAya5l9iWauEIhMQjyAI2T1nVo6M6MOGuesbGaGo/NMrBGi/mL/1EOWsxM3ivfoSw0e0qWHOX4Yj/k7Z5JuoQVg5JCzui38PhCju8tOcFNT8gDDDhqHkiRU5fZ0lp04cKFnSwwVgTyO8s8phAUIgnCTnqk1bwjyCzoEvVoXwyPSAjni7i/d+9e7caNG+570qSf6/X6F1AiaCLOUO35ay9bvN4SmWgyce/evSl/hN1KBUDO0g1AOpIx4pnQmqRDPmvVnj17tnB7+PDhJyVtSXceP37MxMRaI9rs5UqFeFSbiDBCeE8A08dyU0kjJH2RmNoWaRx2SZv+wILw9OnTMxcvXnyTn82ToEhqqInSsiXWX1jCYYaspDHWHhFMHLUiKL6+efPmu0xUTo3qcAi/cuXKTk0+GA2SSRJN0ksLgNS2ebEEGdVMRDTtFBVJjhyZZenn5+e3ttvtD/mFibA/vUPXSWaHSeTvuJzCv6X7tvqWeJYQpMmBDO2BsMsojiBNjknf6yq6pcK+7/ULbZ2bm3tN/JR6+V4tpTFgch5NjPhHk57IuxR+at8+NFQfSvgiHfYhoE2Bl3fXrF0QJkeTZJ+r/V9wYYr+LAEEVvKFALuFM9dDIHmEsMO2RLmX5JkXMoy5aAKtE84yqYTfAZP1Y0GL035IOTpDUGoJAsmo0uzlwPV3GYTJb5vKzzmNUcmgM6lQ1gwl+Z4EsEcJBNIkNXR0861pTc+TkSBHCGISFBExwcbnpGo+YkpoDnwVblYZiBd4JoS6a+OPEtFNk6NfVjla61uaiqSmfo7WGuhRmMfusZ1qCApoEWiHLdFMGpjIIhphNMsSp8lM/FYTI2Po8aFbIUzIV5X2JGBVGIzjDmXceilgEzvolicaGa0eaPE4GS4gPllWNeJZwfT2Sc04y1QlEpRz1ZrG91jzsd+LxhhigqWMMrLmgYDpM8ixb4J0GpDlzBPEydIgiyRFeiJAGCISmjMW09LAwGJWz571D5BBktY4vTEJ6UqmfYbd3Kw8ag0KLUxCWH0UF7I1KfXyGcQEF55Y5YHxURBy3NDfiQeJ0ucBtLlm+BVr4i8FUs7S9AmiAuTZrD2kLaVGqdKYRr+vH1g1Y5+tFv0/meV8AJdAIn0UMHBPKSiP+e7JLQzUtXtttcjxL3eTP5fkCNP3+A/SSsPYbBXTGwL2fwrG1/Jdv+NyrxImPxpNMcUUU0wxxcTjP+BkXwacNW5wAAAAAElFTkSuQmCC",f4="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAfASURBVHgB7VvNjxRFFH89H+CBAxAEL8RVVg9w8APxiKvGs4mGuyZeTYj+A7tyNYHIP4AeIX5wJCFxIeGihOABOBEWuEHI7CYQvhae79XW63n1unpmp7d6Zlb7lxTVw0x3Vf3qvd97VV0L0KBBgwYNGjQYAYioP2b0OePaX4Nc+1J2338TigxGpgadxYoQxvf5AuNEBjVCBkdwH3V7z58/n+t0Ou/Q5UdU3qWy3RfGMpUluv823XuVrhepvmCfoT5vOtPSM66tYceLFy8WqO7h6LhF956iesa6oWpnc0BIkY4vLy/voPoEJgIT9fjx4zdQkQ81e0MKZOY6m5+fb9FgjmI1ixmGW1S+4jbQTAhMI1kYEVsiJ5nVlIHbgLjATw0KHaN+s0v9iWPCy5cvr3KbUANRG32ARBCbr1yBtcg0TixS+YQjJnpr9tfoo2gltKAaZHZycqRTZPLHYfzkMOaoHHedI0IUORNxuViIzVZXV7/GyeMoqESU/8FxCjeqHEQ1nHHYJS1Ywsmjt7KystP3T5MzVoIsSRxqT+H04ERsEqFuYJgVy3WLrOdNnDLcvXt3Z0mOVCtygrhxWBP5ll8CTBV4ScN98/3MhCyskSS7ys4bTak9731wyJU7d+7gBtFTk6gnVTwhLTnYN1WQxrjQqvxjTAgmZ9ee15KQxH0DZUVmHElJigley1vQPCYEk5KQpKPWirAm0c4frIUP1qLX75gYCUn6Q2slFPM3SIFC5Dpy5EjbN9j266DkSETSLdXXlolqMraBWNdSA/3TFhYW3APPnDkj1HMq/zrUgL1798LZ3351NYVs+PyLL109Irbb/5B1WbbOBdqgH+UmSM8K1lyyvqHZgdOnT6/CCHj/0IdVBurAZF35+6+R7qGudiDcknWm5ccw1McGWZBsKLsK+/vLmf5+E6DQTx4Dhtu2lWB355xAa/3hgvXsFjok0KGe72+uQ+jDO4brtFIMtSBFlrtg/SGigN2LC/3/CtQArTtaj0YB9e22+rjmCl4ePIY+YxBBwQNEoLnda9euZSLUFMX+gcRIQQ6D+r9E/XQTCf0Jd7WfcGdmUMXN0LwxkHzC120xXcpWv8OESJko+vVY4GJQkhNBRQRvNuXhWocePnz4KSZEyqUG900IsloEITGlWtQZRo74GdesPQxfu4du27btAv2O34Ruh0TYiFsJqE+3uW+wlo7g/fv3y8J6Bj7VG3Xv2jIcuNjc3FyHC113yM1+wCkDbf/+DGsGwCW3osjCVQgdjR0s0SAommz38uXLu3DKQAI/K+RE3Ktlx4ajrsuw+Fo3tyK2HG5ULIhJohn7CacEbD0HDx7sGoJyctDkd1AxWYySA/2o4AqTxJ25ePHiq1hj0rhe8ObdzZs33+JJA+VeXGJbHzjEtYYtVnO748a5pkYCW1xcXHT14cOHl2nmjsGE8fTp02P79u1bAtV33WcVYPL3Z1B1uYFGpM3eisyMiDXP2ERdjdvmPrBFi/uL/iiBFjeTcVXbF0LzTsmSo4Qv1yHv90zSBRwzKCnkjH4Lty/k+NqSYzfNqi9YMSLUasHqisyWtqJz587t5g7jmEC6s8htCkExkiAu0kPJyYYRZJIn90EljK4B6oTTIq7v3bvXun79uvueLOnHdrv9LdQImoiTnU7ne9+3fL0lfeIk8cCBAwU9wjAxrLx1E2M6nwltSTrks1Xt379/C5dHjx59U9Mr6d6TJ0+YmNxqxJp9vwohHsM3GtVdSwOLx3ILSSOEWiSutkUKh12ypl8wEZ49e3by/Pnze/jZPAmKpI6aKN23YP2FNRxmKEsac+uRjolQK4Ly6xs3brzNRFW0qB6H8EuXLu3W5IOxIJkksSS9tADz8gESImaaQUTToqhIcuTILEs9Ozu79cGDB5/xgImws17QdZLZYxL5O95O4d/SfVt9CZ4lBGlyoMR6IC4Z6QjS5Jj0va2iWyHs+1oPaOvMzMwrolNq8INKwWLA5DyaGNFHk57IWJKf2rcPje0PBVqkwz5ErCkyeHfN1gVxcjRJ9rla/6ILU/RnCSCykk8C7G+cuRoiySPEBdsS5QbJMy9kGHfRBFoRLnOpQHfAZP2YaHE6DAWhMwQVliAQRpXuIAHX35UQJr/tKp1zFqOSwbYcqoBy3amFHAccsAUCRZI6Orr50rWu58kIyBGCmARFRE6w0ZzCno+4EpoDX8ndqgT5As+EUHdt9CiIbpocPVgltFZbuoqkrn6OthoYsDEvujk2giJWBFqwJZpJARNZxCKMZVniNJnBbzUx0oZuH6BwAgXGaT0BrAmDEe5Yxq2XAjaxg/72RKektCMlb6dEAvKTZeNGPitYfH3SMmJZ2IkEJa7a0vge6z72e7EYQ0x0K6OOrHldwOIZ5FyboJgGlIl5QJwsDcpIUqQHAcIQEVjORFxLAyOLWT17Vh+ghCRtceaARCtySiwmxBOLWuuF7kzQWX0UF8otqTD4EmKiC0+s6exhcsSEG4aLeJQofR5Au2uJrlgX3xQoiKWpA6Ii5NmsPWYttUap2phG/14/smrGIa9a9F8yy/kA3gLJ9FHAyD21oD7m+38KjpF97UGvWhwb/ndyLskRpu/xH6TUhon5KhZfCNi/FMyv5TtF+v8e0x+NGjRo0KBBg6nHv/iN/s9J53M5AAAAAElFTkSuQmCC",W_="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%207L14%2012L10%2017'%20stroke='%236C7275'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",d4="/assets/last-hero-QoIO6UZm.jpg",p4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%2019V7M14%2019H16M14%2019H9M14%207C14%204.79086%2012.2091%203%2010%203H6C3.79086%203%202%204.79086%202%207V15C2%2016.8652%203.27667%2018.4323%205.00384%2018.875M14%207H17.2091C17.7172%207%2018.2063%207.1934%2018.577%207.54093L21.3679%2010.1574C21.7712%2010.5355%2022%2011.0636%2022%2011.6165V17C22%2018.1046%2021.1046%2019%2020%2019M20%2019C20%2020.1046%2019.1046%2021%2018%2021C16.8954%2021%2016%2020.1046%2016%2019M20%2019C20%2017.8954%2019.1046%2017%2018%2017C16.8954%2017%2016%2017.8954%2016%2019M9%2019C9%2020.1046%208.10457%2021%207%2021C5.89543%2021%205%2020.1046%205%2019C5%2018.958%205.00129%2018.9163%205.00384%2018.875M9%2019C9%2017.8954%208.10457%2017%207%2017C5.93742%2017%205.06838%2017.8286%205.00384%2018.875'%20stroke='%23141718'%20stroke-width='1.5'/%3e%3cpath%20d='M10%208L8%208'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%2012L6%2012'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",m4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='4'%20width='20'%20height='16'%20rx='4'%20stroke='%23141718'%20stroke-width='1.5'/%3e%3ccircle%20cx='2'%20cy='2'%20r='2'%20transform='matrix(1%200%200%20-1%2010%2014)'%20stroke='%23141718'%20stroke-width='1.5'/%3e%3ccircle%20cx='1'%20cy='1'%20r='1'%20transform='matrix(1%200%200%20-1%2017%2013)'%20fill='%23141718'/%3e%3ccircle%20cx='1'%20cy='1'%20r='1'%20transform='matrix(1%200%200%20-1%205%2013)'%20fill='%23141718'/%3e%3c/svg%3e",g4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%208H8M16%208C18.2091%208%2020%209.79086%2020%2012V18C20%2020.2091%2018.2091%2022%2016%2022H8C5.79086%2022%204%2020.2091%204%2018V12C4%209.79086%205.79086%208%208%208M16%208V6C16%203.79086%2014.2091%202%2012%202C9.79086%202%208%203.79086%208%206V8M12%2016V14'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",v4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2019V17.3541C21%2016.5363%2020.5021%2015.8008%2019.7428%2015.4971L17.7086%2014.6835C16.7429%2014.2971%2015.6422%2014.7156%2015.177%2015.646L15%2016C15%2016%2012.5%2015.5%2010.5%2013.5C8.5%2011.5%208%209%208%209L8.35402%208.82299C9.28438%208.35781%209.70285%207.25714%209.31654%206.29136L8.50289%204.25722C8.19916%203.4979%207.46374%203%206.64593%203H5C3.89543%203%203%203.89543%203%205C3%2013.8366%2010.1634%2021%2019%2021C20.1046%2021%2021%2020.1046%2021%2019Z'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3c/svg%3e",y4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6%208L9.7812%2010.5208C11.1248%2011.4165%2012.8752%2011.4165%2014.2188%2010.5208L18%208M6%2021H18C20.2091%2021%2022%2019.2091%2022%2017V7C22%204.79086%2020.2091%203%2018%203H6C3.79086%203%202%204.79086%202%207V17C2%2019.2091%203.79086%2021%206%2021Z'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",_4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='20'%20height='20'%20rx='4'%20stroke='%23141718'%20stroke-width='1.5'/%3e%3ccircle%20cx='18'%20cy='6'%20r='1'%20fill='%23141718'/%3e%3ccircle%20cx='12'%20cy='12'%20r='5'%20stroke='%23141718'%20stroke-width='1.5'/%3e%3c/svg%3e",w4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%203H15C12.2386%203%2010%205.23858%2010%208V10H6V14H10V21H14V14H18V10H14V8C14%207.44772%2014.4477%207%2015%207H18V3Z'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",E4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='3'%20width='20'%20height='18'%20rx='4'%20stroke='%23141718'%20stroke-width='1.5'/%3e%3cpath%20d='M10.4472%208.72361L15.2111%2011.1056C15.9482%2011.4741%2015.9482%2012.5259%2015.2111%2012.8944L10.4472%2015.2764C9.78231%2015.6088%209%2015.1253%209%2014.382V9.61803C9%208.87465%209.78231%208.39116%2010.4472%208.72361Z'%20stroke='%23141718'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",b4={data(){return{loading:!1,translateValue:0,currentIndex:0}},methods:{nextBtn(){this.currentIndex<this.products.length-1&&(this.currentIndex++,this.translateValue-=this.slideWidth())},prevBtn(){this.currentIndex>0&&(this.currentIndex--,this.translateValue+=this.slideWidth())},slideWidth(){return 150}},components:{CountDown:zx,Cart:j_,Products:q_},props:{product:Object},name:"Home",setup(){const{products:e}=z_("products"),t=rt(!1),n=rt([]);return{showCart:t,cartItems:n,addToCart:i=>{const o=n.value.find(a=>a.id===i.id);o?o.quantity+=1:n.value.push({...i,quantity:1})},toggleCart:()=>{t.value=!t.value},products:e}}},I4={class:"hero"},T4={class:"heading-content"},A4=g("h1",{class:"heading-text"},[xt(" Listen to "),g("br"),xt(" the "),g("span",{class:"heading-span"}," amazing "),xt(" music sound. ")],-1),C4=g("p",{class:"heading-paragraph"},"Experience music like never before",-1),S4=Rl('<section class="logos"><img src="'+i4+'" alt="logoipsum-1" class="logo"><img src="'+o4+'" alt="logoipsum-2" class="logo"><img src="'+a4+'" alt="logoipsum-3" class="logo"><img src="'+l4+'" alt="logoipsum-4" class="logo"><img src="'+c4+'" alt="logoipsum-5" class="logo"><img src="'+u4+'" alt="logoipsum-6" class="logo"></section>',1),R4={class:"new"},P4={class:"heading"},k4=g("h2",{class:"heading-text"},"New Arrivals",-1),x4={class:"nav-dots"},O4={class:"shopCollection"},N4=g("h3",null,"Shop Collection",-1),D4={class:"imgContainer"},M4={class:"headphone"},V4=g("img",{src:"https://media.istockphoto.com/id/873185080/photo/white-headphones-isolated-3d-illustration.jpg?s=612x612&w=0&k=20&c=Fr11EZasBP6UhbpQCbqCBFrqUIotATBH_ddh5jQ_u1g=",alt:"headphone",class:"imgHeadphone"},null,-1),L4=g("h4",null,"Headband",-1),F4=g("img",{src:W_},null,-1),U4={class:"earbud"},B4=g("img",{src:"https://media.istockphoto.com/id/1265599808/photo/in-ear-headphones-with-charging-case-on-white-background.jpg?s=612x612&w=0&k=20&c=qYdyeZLHvlMqK3PfIq554OJpE1eb7oyVVjuNA8CNsgU=",alt:"earbuds",class:"imgEarbud"},null,-1),j4=g("h4",null,"Earbuds",-1),$4=g("img",{src:W_},null,-1),H4={class:"bestSeller"},z4=g("h3",null,"Best Seller",-1),q4={class:"bestcontainer"},W4={class:"promotion"},K4=g("picture",null,[g("img",{src:d4,alt:"last-hero",class:"last-hero"})],-1),G4={class:"promo"},Y4=g("h4",null,"promotion",-1),Q4=g("h2",null,"Hurry up! 40% OFF",-1),X4=g("p",null,"Thousands of high tech are waiting for you",-1),J4=g("p",{class:"countdown-heading"},"Offer expires in:",-1),Z4={class:"productBtn"},t5=Rl('<section class="features"><div class="featureCard"><img src="'+p4+'" alt="fast-delivery-icon" class="featureImg"><h4>Free Shipping</h4><p>Order above $200</p></div><div class="featureCard"><img src="'+m4+'" alt="money-icon" class="featureImg"><h4>Money-back</h4><p>30 days guarantee</p></div><div class="featureCard"><img src="'+g4+'" alt="lock-icon" class="featureImg"><h4>Secure Payments</h4><p>Secured by Stripe</p></div><div class="featureCard"><img src="'+v4+'" alt="call-icon" class="featureImg"><h4>24/7 Support</h4><p>Phone and Email support</p></div></section><section class="newsfeed"><h4>newsfeed</h4><h3>Instagram</h3><p>Sign up for more discount &amp; promotions</p><picture class="photos"><img src="https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=-JzAS5fjTvxyNRkYoaIlpoLfmt5AEIOcwpt6lk0D4TA=" alt="picture of someone putting on headphones" class="photo"><img src="https://media.istockphoto.com/id/1891604073/photo/young-serious-designer-in-headphones.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=39CPg8YgDrRwRBWFl6_GjT2zNt4ulU2rHwTvS-6EJ3g=" alt="picture of someone putting on headphones" class="photo"><img src="https://media.istockphoto.com/id/1409698755/photo/focused-business-man-entrepreneur-with-laptop-and-headphones-male-professional-using-computer.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=KcYPchqEh3K3UqOz4VniQyQFAEp7KORyUHHJ6SyjaFU=" alt="picture of someone putting on headphones" class="photo"><img src="https://media.istockphoto.com/id/1423350215/photo/calm-middle-age-caucasian-man-sitting-on-sofa-listening-to-music-enjoying-meditation-for.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=frSBsfyk-Xz7ORPw2ebFes7TDiWvXfMss7mDDjtdzi8=" alt="picture of someone putting on headphones" class="photo"></picture><div class="newsletter"><img src="https://media.istockphoto.com/id/873185080/photo/white-headphones-isolated-3d-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=Fr11EZasBP6UhbpQCbqCBFrqUIotATBH_ddh5jQ_u1g=" alt="headphone" class="headphone"><div class="input"><h3>Join Our Newsletter</h3><p>Sign up for deals, new products and promotions</p><div class="email"><img src="'+y4+'" class="mail"><input type="email" placeholder="Email address"><button>Sign up</button></div></div></div></section>',2),e5={class:"first"},n5=g("div",{class:"info"},[g("h1",{class:"headerLogo"},"SoundWaves."),xt(" | "),g("span",null,"Headphone Store")],-1),r5={class:"footerNav"},s5=Rl('<hr><div class="second"><div class="copyright"><p>Copyright © 2024 SoundWaves. All rights reserved</p><span>Privacy Policy</span><span>Terms of use</span></div><div class="socials"><img src="'+_4+'" alt="instagram-logo" class="instagram"><img src="'+w4+'" alt="facebook-logo" class="facebook"><img src="'+E4+'" alt="youtube-logo" class="youtube"></div></div>',2);function i5(e,t,n,r,s,i){const o=He("RouterLink"),a=He("Spinner"),l=He("Products"),c=He("products"),u=He("CountDown");return K(),nt("main",null,[g("section",I4,[g("div",T4,[A4,C4,st(o,{class:"heading-btn",to:{name:"shop"},onClick:e.goToShop},{default:zt(()=>[xt(" Shop Now")]),_:1},8,["onClick"])])]),S4,g("section",R4,[g("div",P4,[k4,g("div",x4,[g("img",{src:h4,alt:"button-prev",class:"prev",onClick:t[0]||(t[0]=(...h)=>i.prevBtn&&i.prevBtn(...h))}),g("img",{src:f4,alt:"button-next",class:"next",onClick:t[1]||(t[1]=(...h)=>i.nextBtn&&i.nextBtn(...h))})])]),g("div",{class:"productsContainer",style:is({transform:`translateX(${s.translateValue}px)`})},[st(a,{loading:s.loading},null,8,["loading"]),st(l,{product:n.product,addToCart:r.addToCart},null,8,["product","addToCart"])],4)]),g("section",O4,[N4,g("picture",D4,[g("figcaption",M4,[V4,L4,st(o,{class:"link",to:{name:"shop"}},{default:zt(()=>[xt("Collection "),F4]),_:1})]),g("figcaption",U4,[B4,j4,st(o,{class:"link",to:{name:"shop"}},{default:zt(()=>[xt("Collection "),$4]),_:1})])])]),g("section",H4,[z4,g("div",q4,[st(c)])]),g("section",W4,[K4,g("div",G4,[Y4,Q4,X4,J4,st(u),g("button",Z4,[st(o,{to:{name:"shop"}},{default:zt(()=>[xt("Shop")]),_:1})])])]),t5,g("footer",null,[g("div",e5,[n5,g("nav",r5,[st(o,{to:{name:"home"}},{default:zt(()=>[xt("Home")]),_:1}),st(o,{to:{name:"shop"}},{default:zt(()=>[xt("Shop")]),_:1}),st(o,{to:{name:"blogs"}},{default:zt(()=>[xt("Blogs")]),_:1}),st(o,{to:{name:"about"}},{default:zt(()=>[xt("About")]),_:1}),st(o,{to:{name:"contactus"}},{default:zt(()=>[xt("Contact Us")]),_:1})])]),s5])])}const o5=Ce(b4,[["render",i5]]),a5={components:{Products:q_,Spinner:Wf}},l5=e=>(ls("data-v-110b3ac2"),e=e(),cs(),e),c5=l5(()=>g("h1",null,"Product List",-1)),u5={class:"productList"};function h5(e,t,n,r,s,i){const o=He("Products");return K(),nt("div",null,[c5,g("div",u5,[st(o)])])}const f5=Ce(a5,[["render",h5],["__scopeId","data-v-110b3ac2"]]),d5={};function p5(e,t,n,r,s,i){return K(),nt("div",null,"blogs over here")}const m5=Ce(d5,[["render",p5]]),g5={},v5={class:"about"},y5=Rl('<div class="text" data-v-63dec1c4><h2 data-v-63dec1c4>About Us The SoundWaves.</h2><div class="paragraph" data-v-63dec1c4><p class="first" data-v-63dec1c4> At SoundWaves, we believe that music is more than just a sound; it&#39;s an emotion, a journey, and a companion that adds rhythm to our lives. </p><h3 data-v-63dec1c4>Why Choose SoundWaves?</h3><p class="second" data-v-63dec1c4> ✨ Unparalleled Quality: Immerse yourself in the purest form of audio with our handpicked selection of premium headphones. 🌐 Wide Range, Diverse Choices: Explore our extensive collection featuring a diverse range of headphones to suit every taste, lifestyle, and budget. 🚚 Fast and Secure Shipping: Experience the joy of receiving your order swiftly and securely. 🔒 Secure Shopping: Rest easy knowing that your personal information is protected with state-of-the-art security measures. SoundWaves prioritizes your privacy and ensures a safe and secure online shopping experience. </p><span data-v-63dec1c4> Welcome to SoundWaves, where every beat matters, and every note counts. </span></div></div><picture data-v-63dec1c4><img src="https://media.istockphoto.com/id/680875088/photo/kid-studio-shoot-using-headphone-listening-music.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=1-BkxYAcZhoOmovU12AgCADwlpgnZjn7QNG3-cILM08=" alt="boy listening to music" data-v-63dec1c4></picture>',2),_5=[y5];function w5(e,t){return K(),nt("div",v5,_5)}const E5=Ce(g5,[["render",w5],["__scopeId","data-v-63dec1c4"]]);function Fm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Fm(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function fl(e){"@babel/helpers - typeof";return fl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fl(e)}function b5(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Um(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I5(e,t,n){return t&&Um(e.prototype,t),n&&Um(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kf(e,t){return A5(e)||S5(e,t)||K_(e,t)||P5()}function Fo(e){return T5(e)||C5(e)||K_(e)||R5()}function T5(e){if(Array.isArray(e))return Zu(e)}function A5(e){if(Array.isArray(e))return e}function C5(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function S5(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(e);!(s=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));s=!0);}catch(l){i=!0,a=l}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function K_(e,t){if(e){if(typeof e=="string")return Zu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zu(e,t)}}function Zu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function P5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Bm=function(){},Gf={},G_={},Y_=null,Q_={mark:Bm,measure:Bm};try{typeof window<"u"&&(Gf=window),typeof document<"u"&&(G_=document),typeof MutationObserver<"u"&&(Y_=MutationObserver),typeof performance<"u"&&(Q_=performance)}catch{}var k5=Gf.navigator||{},jm=k5.userAgent,$m=jm===void 0?"":jm,Er=Gf,jt=G_,Hm=Y_,ia=Q_;Er.document;var $n=!!jt.documentElement&&!!jt.head&&typeof jt.addEventListener=="function"&&typeof jt.createElement=="function",X_=~$m.indexOf("MSIE")||~$m.indexOf("Trident/"),oa,aa,la,ca,ua,Ln="___FONT_AWESOME___",th=16,J_="fa",Z_="svg-inline--fa",rs="data-fa-i2svg",eh="data-fa-pseudo-element",x5="data-fa-pseudo-element-pending",Yf="data-prefix",Qf="data-icon",zm="fontawesome-i2svg",O5="async",N5=["HTML","HEAD","STYLE","SCRIPT"],t1=function(){try{return!0}catch{return!1}}(),Ft="classic",Kt="sharp",Xf=[Ft,Kt];function Uo(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Ft]}})}var co=Uo((oa={},se(oa,Ft,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),se(oa,Kt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),oa)),uo=Uo((aa={},se(aa,Ft,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),se(aa,Kt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),aa)),ho=Uo((la={},se(la,Ft,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),se(la,Kt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),la)),D5=Uo((ca={},se(ca,Ft,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),se(ca,Kt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ca)),M5=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,e1="fa-layers-text",V5=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,L5=Uo((ua={},se(ua,Ft,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),se(ua,Kt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ua)),n1=[1,2,3,4,5,6,7,8,9,10],F5=n1.concat([11,12,13,14,15,16,17,18,19,20]),U5=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fo=new Set;Object.keys(uo[Ft]).map(fo.add.bind(fo));Object.keys(uo[Kt]).map(fo.add.bind(fo));var B5=[].concat(Xf,Fo(fo),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",jr.GROUP,jr.SWAP_OPACITY,jr.PRIMARY,jr.SECONDARY]).concat(n1.map(function(e){return"".concat(e,"x")})).concat(F5.map(function(e){return"w-".concat(e)})),Di=Er.FontAwesomeConfig||{};function j5(e){var t=jt.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $5(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(jt&&typeof jt.querySelector=="function"){var H5=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];H5.forEach(function(e){var t=Kf(e,2),n=t[0],r=t[1],s=$5(j5(n));s!=null&&(Di[r]=s)})}var r1={styleDefault:"solid",familyDefault:"classic",cssPrefix:J_,replacementClass:Z_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Di.familyPrefix&&(Di.cssPrefix=Di.familyPrefix);var Ks=j(j({},r1),Di);Ks.autoReplaceSvg||(Ks.observeMutations=!1);var G={};Object.keys(r1).forEach(function(e){Object.defineProperty(G,e,{enumerable:!0,set:function(n){Ks[e]=n,Mi.forEach(function(r){return r(G)})},get:function(){return Ks[e]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(t){Ks.cssPrefix=t,Mi.forEach(function(n){return n(G)})},get:function(){return Ks.cssPrefix}});Er.FontAwesomeConfig=G;var Mi=[];function z5(e){return Mi.push(e),function(){Mi.splice(Mi.indexOf(e),1)}}var Yn=th,vn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q5(e){if(!(!e||!$n)){var t=jt.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=jt.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return jt.head.insertBefore(t,r),e}}var W5="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function po(){for(var e=12,t="";e-- >0;)t+=W5[Math.random()*62|0];return t}function oi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Jf(e){return e.classList?oi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function s1(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K5(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(s1(e[n]),'" ')},"").trim()}function pc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Zf(e){return e.size!==vn.size||e.x!==vn.x||e.y!==vn.y||e.rotate!==vn.rotate||e.flipX||e.flipY}function G5(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(a)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:c}}function Y5(e){var t=e.transform,n=e.width,r=n===void 0?th:n,s=e.height,i=s===void 0?th:s,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&X_?l+="translate(".concat(t.x/Yn-r/2,"em, ").concat(t.y/Yn-i/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/Yn,"em), calc(-50% + ").concat(t.y/Yn,"em)) "):l+="translate(".concat(t.x/Yn,"em, ").concat(t.y/Yn,"em) "),l+="scale(".concat(t.size/Yn*(t.flipX?-1:1),", ").concat(t.size/Yn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Q5=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function i1(){var e=J_,t=Z_,n=G.cssPrefix,r=G.replacementClass,s=Q5;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var qm=!1;function Jc(){G.autoAddCss&&!qm&&(q5(i1()),qm=!0)}var X5={mixout:function(){return{dom:{css:i1,insertCss:Jc}}},hooks:function(){return{beforeDOMElementCreation:function(){Jc()},beforeI2svg:function(){Jc()}}}},Fn=Er||{};Fn[Ln]||(Fn[Ln]={});Fn[Ln].styles||(Fn[Ln].styles={});Fn[Ln].hooks||(Fn[Ln].hooks={});Fn[Ln].shims||(Fn[Ln].shims=[]);var rn=Fn[Ln],o1=[],J5=function e(){jt.removeEventListener("DOMContentLoaded",e),dl=1,o1.map(function(t){return t()})},dl=!1;$n&&(dl=(jt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(jt.readyState),dl||jt.addEventListener("DOMContentLoaded",J5));function Z5(e){$n&&(dl?setTimeout(e,0):o1.push(e))}function Bo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,s=e.children,i=s===void 0?[]:s;return typeof e=="string"?s1(e):"<".concat(t," ").concat(K5(r),">").concat(i.map(Bo).join(""),"</").concat(t,">")}function Wm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var t3=function(t,n){return function(r,s,i,o){return t.call(n,r,s,i,o)}},Zc=function(t,n,r,s){var i=Object.keys(t),o=i.length,a=s!==void 0?t3(n,s):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=a(u,t[c],c,t);return u};function e3(e){for(var t=[],n=0,r=e.length;n<r;){var s=e.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((s&1023)<<10)+(i&1023)+65536):(t.push(s),n--)}else t.push(s)}return t}function nh(e){var t=e3(e);return t.length===1?t[0].toString(16):null}function n3(e,t){var n=e.length,r=e.charCodeAt(t),s;return r>=55296&&r<=56319&&n>t+1&&(s=e.charCodeAt(t+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Km(e){return Object.keys(e).reduce(function(t,n){var r=e[n],s=!!r.icon;return s?t[r.iconName]=r.icon:t[n]=r,t},{})}function rh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Km(t);typeof rn.hooks.addPack=="function"&&!s?rn.hooks.addPack(e,Km(t)):rn.styles[e]=j(j({},rn.styles[e]||{}),i),e==="fas"&&rh("fa",t)}var ha,fa,da,ws=rn.styles,r3=rn.shims,s3=(ha={},se(ha,Ft,Object.values(ho[Ft])),se(ha,Kt,Object.values(ho[Kt])),ha),td=null,a1={},l1={},c1={},u1={},h1={},i3=(fa={},se(fa,Ft,Object.keys(co[Ft])),se(fa,Kt,Object.keys(co[Kt])),fa);function o3(e){return~B5.indexOf(e)}function a3(e,t){var n=t.split("-"),r=n[0],s=n.slice(1).join("-");return r===e&&s!==""&&!o3(s)?s:null}var f1=function(){var t=function(i){return Zc(ws,function(o,a,l){return o[l]=Zc(a,i,{}),o},{})};a1=t(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){s[l.toString(16)]=o})}return s}),l1=t(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){s[l]=o})}return s}),h1=t(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(l){s[l]=o}),s});var n="far"in ws||G.autoFetchSvg,r=Zc(r3,function(s,i){var o=i[0],a=i[1],l=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:l}),s},{names:{},unicodes:{}});c1=r.names,u1=r.unicodes,td=mc(G.styleDefault,{family:G.familyDefault})};z5(function(e){td=mc(e.styleDefault,{family:G.familyDefault})});f1();function ed(e,t){return(a1[e]||{})[t]}function l3(e,t){return(l1[e]||{})[t]}function $r(e,t){return(h1[e]||{})[t]}function d1(e){return c1[e]||{prefix:null,iconName:null}}function c3(e){var t=u1[e],n=ed("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function br(){return td}var nd=function(){return{prefix:null,iconName:null,rest:[]}};function mc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Ft:n,s=co[r][e],i=uo[r][e]||uo[r][s],o=e in rn.styles?e:null;return i||o||null}var Gm=(da={},se(da,Ft,Object.keys(ho[Ft])),se(da,Kt,Object.keys(ho[Kt])),da);function gc(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(t={},se(t,Ft,"".concat(G.cssPrefix,"-").concat(Ft)),se(t,Kt,"".concat(G.cssPrefix,"-").concat(Kt)),t),o=null,a=Ft;(e.includes(i[Ft])||e.some(function(c){return Gm[Ft].includes(c)}))&&(a=Ft),(e.includes(i[Kt])||e.some(function(c){return Gm[Kt].includes(c)}))&&(a=Kt);var l=e.reduce(function(c,u){var h=a3(G.cssPrefix,u);if(ws[u]?(u=s3[a].includes(u)?D5[a][u]:u,o=u,c.prefix=u):i3[a].indexOf(u)>-1?(o=u,c.prefix=mc(u,{family:a})):h?c.iconName=h:u!==G.replacementClass&&u!==i[Ft]&&u!==i[Kt]&&c.rest.push(u),!s&&c.prefix&&c.iconName){var f=o==="fa"?d1(c.iconName):{},p=$r(c.prefix,c.iconName);f.prefix&&(o=null),c.iconName=f.iconName||p||c.iconName,c.prefix=f.prefix||c.prefix,c.prefix==="far"&&!ws.far&&ws.fas&&!G.autoFetchSvg&&(c.prefix="fas")}return c},nd());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Kt&&(ws.fass||G.autoFetchSvg)&&(l.prefix="fass",l.iconName=$r(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=br()||"fas"),l}var u3=function(){function e(){b5(this,e),this.definitions={}}return I5(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=j(j({},n.definitions[a]||{}),o[a]),rh(a,o[a]);var l=ho[Ft][a];l&&rh(l,o[a]),f1()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=c)}),n[a][l]=c}),n}}]),e}(),Ym=[],Es={},xs={},h3=Object.keys(xs);function f3(e,t){var n=t.mixoutsTo;return Ym=e,Es={},Object.keys(xs).forEach(function(r){h3.indexOf(r)===-1&&delete xs[r]}),Ym.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),fl(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Es[o]||(Es[o]=[]),Es[o].push(i[o])})}r.provides&&r.provides(xs)}),n}function sh(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=Es[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ss(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=Es[e]||[];s.forEach(function(i){i.apply(null,n)})}function Un(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return xs[e]?xs[e].apply(null,t):void 0}function ih(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||br();if(t)return t=$r(n,t)||t,Wm(p1.definitions,n,t)||Wm(rn.styles,n,t)}var p1=new u3,d3=function(){G.autoReplaceSvg=!1,G.observeMutations=!1,ss("noAuto")},p3={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $n?(ss("beforeI2svg",t),Un("pseudoElements2svg",t),Un("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,Z5(function(){g3({autoReplaceSvgRoot:n}),ss("watch",t)})}},m3={icon:function(t){if(t===null)return null;if(fl(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:$r(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=mc(t[0]);return{prefix:r,iconName:$r(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(G.cssPrefix,"-"))>-1||t.match(M5))){var s=gc(t.split(" "),{skipLookups:!0});return{prefix:s.prefix||br(),iconName:$r(s.prefix,s.iconName)||s.iconName}}if(typeof t=="string"){var i=br();return{prefix:i,iconName:$r(i,t)||t}}}},Ue={noAuto:d3,config:G,dom:p3,parse:m3,library:p1,findIconDefinition:ih,toHtml:Bo},g3=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?jt:n;(Object.keys(rn.styles).length>0||G.autoFetchSvg)&&$n&&G.autoReplaceSvg&&Ue.dom.i2svg({node:r})};function vc(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Bo(r)})}}),Object.defineProperty(e,"node",{get:function(){if($n){var r=jt.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function v3(e){var t=e.children,n=e.main,r=e.mask,s=e.attributes,i=e.styles,o=e.transform;if(Zf(o)&&n.found&&!r.found){var a=n.width,l=n.height,c={x:a/l/2,y:.5};s.style=pc(j(j({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:t}]}function y3(e){var t=e.prefix,n=e.iconName,r=e.children,s=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(G.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:j(j({},s),{},{id:o}),children:r}]}]}function rd(e){var t=e.icons,n=t.main,r=t.mask,s=e.prefix,i=e.iconName,o=e.transform,a=e.symbol,l=e.title,c=e.maskId,u=e.titleId,h=e.extra,f=e.watchable,p=f===void 0?!1:f,v=r.found?r:n,E=v.width,T=v.height,y=s==="fak",b=[G.replacementClass,i?"".concat(G.cssPrefix,"-").concat(i):""].filter(function(Y){return h.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(h.classes).join(" "),R={children:[],attributes:j(j({},h.attributes),{},{"data-prefix":s,"data-icon":i,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(T)})},w=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(E/T*16*.0625,"em")}:{};p&&(R.attributes[rs]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||po())},children:[l]}),delete R.attributes.title);var N=j(j({},R),{},{prefix:s,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:a,styles:j(j({},w),h.styles)}),O=r.found&&n.found?Un("generateAbstractMask",N)||{children:[],attributes:{}}:Un("generateAbstractIcon",N)||{children:[],attributes:{}},Q=O.children,z=O.attributes;return N.children=Q,N.attributes=z,a?y3(N):v3(N)}function Qm(e){var t=e.content,n=e.width,r=e.height,s=e.transform,i=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,c=j(j(j({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[rs]="");var u=j({},o.styles);Zf(s)&&(u.transform=Y5({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=pc(u);h.length>0&&(c.style=h);var f=[];return f.push({tag:"span",attributes:c,children:[t]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function _3(e){var t=e.content,n=e.title,r=e.extra,s=j(j(j({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=pc(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var tu=rn.styles;function oh(e){var t=e[0],n=e[1],r=e.slice(4),s=Kf(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(jr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(jr.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(jr.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var w3={found:!1,width:512,height:512};function E3(e,t){!t1&&!G.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ah(e,t){var n=t;return t==="fa"&&G.styleDefault!==null&&(t=br()),new Promise(function(r,s){if(Un("missingIconAbstract"),n==="fa"){var i=d1(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&tu[t]&&tu[t][e]){var o=tu[t][e];return r(oh(o))}E3(e,t),r(j(j({},w3),{},{icon:G.showMissingIcons&&e?Un("missingIconAbstract")||{}:{}}))})}var Xm=function(){},lh=G.measurePerformance&&ia&&ia.mark&&ia.measure?ia:{mark:Xm,measure:Xm},Ei='FA "6.5.1"',b3=function(t){return lh.mark("".concat(Ei," ").concat(t," begins")),function(){return m1(t)}},m1=function(t){lh.mark("".concat(Ei," ").concat(t," ends")),lh.measure("".concat(Ei," ").concat(t),"".concat(Ei," ").concat(t," begins"),"".concat(Ei," ").concat(t," ends"))},sd={begin:b3,end:m1},Sa=function(){};function Jm(e){var t=e.getAttribute?e.getAttribute(rs):null;return typeof t=="string"}function I3(e){var t=e.getAttribute?e.getAttribute(Yf):null,n=e.getAttribute?e.getAttribute(Qf):null;return t&&n}function T3(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(G.replacementClass)}function A3(){if(G.autoReplaceSvg===!0)return Ra.replace;var e=Ra[G.autoReplaceSvg];return e||Ra.replace}function C3(e){return jt.createElementNS("http://www.w3.org/2000/svg",e)}function S3(e){return jt.createElement(e)}function g1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?C3:S3:n;if(typeof e=="string")return jt.createTextNode(e);var s=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){s.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){s.appendChild(g1(o,{ceFn:r}))}),s}function R3(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Ra={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(s){n.parentNode.insertBefore(g1(s),n)}),n.getAttribute(rs)===null&&G.keepOriginalSource){var r=jt.createComment(R3(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Jf(n).indexOf(G.replacementClass))return Ra.replace(t);var s=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,l){return l===G.replacementClass||l.match(s)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Bo(a)}).join(`
`);n.setAttribute(rs,""),n.innerHTML=o}};function Zm(e){e()}function v1(e,t){var n=typeof t=="function"?t:Sa;if(e.length===0)n();else{var r=Zm;G.mutateApproach===O5&&(r=Er.requestAnimationFrame||Zm),r(function(){var s=A3(),i=sd.begin("mutate");e.map(s),i(),n()})}}var id=!1;function y1(){id=!0}function ch(){id=!1}var pl=null;function tg(e){if(Hm&&G.observeMutations){var t=e.treeCallback,n=t===void 0?Sa:t,r=e.nodeCallback,s=r===void 0?Sa:r,i=e.pseudoElementsCallback,o=i===void 0?Sa:i,a=e.observeMutationsRoot,l=a===void 0?jt:a;pl=new Hm(function(c){if(!id){var u=br();oi(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!Jm(h.addedNodes[0])&&(G.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&G.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&Jm(h.target)&&~U5.indexOf(h.attributeName))if(h.attributeName==="class"&&I3(h.target)){var f=gc(Jf(h.target)),p=f.prefix,v=f.iconName;h.target.setAttribute(Yf,p||u),v&&h.target.setAttribute(Qf,v)}else T3(h.target)&&s(h.target)})}}),$n&&pl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function P3(){pl&&pl.disconnect()}function k3(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function x3(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",s=gc(Jf(e));return s.prefix||(s.prefix=br()),t&&n&&(s.prefix=t,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=l3(s.prefix,e.innerText)||ed(s.prefix,nh(e.innerText))),!s.iconName&&G.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=e.firstChild.data)),s}function O3(e){var t=oi(e.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return G.autoA11y&&(n?t["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(r||po()):(t["aria-hidden"]="true",t.focusable="false")),t}function N3(){return{iconName:null,title:null,titleId:null,prefix:null,transform:vn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function eg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=x3(e),r=n.iconName,s=n.prefix,i=n.rest,o=O3(e),a=sh("parseNodeAttributes",{},e),l=t.styleParser?k3(e):[];return j({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:s,transform:vn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},a)}var D3=rn.styles;function _1(e){var t=G.autoReplaceSvg==="nest"?eg(e,{styleParser:!1}):eg(e);return~t.extra.classes.indexOf(e1)?Un("generateLayersText",e,t):Un("generateSvgReplacementMutation",e,t)}var Ir=new Set;Xf.map(function(e){Ir.add("fa-".concat(e))});Object.keys(co[Ft]).map(Ir.add.bind(Ir));Object.keys(co[Kt]).map(Ir.add.bind(Ir));Ir=Fo(Ir);function ng(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$n)return Promise.resolve();var n=jt.documentElement.classList,r=function(h){return n.add("".concat(zm,"-").concat(h))},s=function(h){return n.remove("".concat(zm,"-").concat(h))},i=G.autoFetchSvg?Ir:Xf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(D3));i.includes("fa")||i.push("fa");var o=[".".concat(e1,":not([").concat(rs,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(rs,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=oi(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var l=sd.begin("onTree"),c=a.reduce(function(u,h){try{var f=_1(h);f&&u.push(f)}catch(p){t1||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(c).then(function(f){v1(f,function(){r("active"),r("complete"),s("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(f){l(),h(f)})})}function M3(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_1(e).then(function(n){n&&v1([n],t)})}function V3(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ih(t||{}),s=n.mask;return s&&(s=(s||{}).icon?s:ih(s||{})),e(r,j(j({},n),{},{mask:s}))}}var L3=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?vn:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,l=a===void 0?null:a,c=n.maskId,u=c===void 0?null:c,h=n.title,f=h===void 0?null:h,p=n.titleId,v=p===void 0?null:p,E=n.classes,T=E===void 0?[]:E,y=n.attributes,b=y===void 0?{}:y,R=n.styles,w=R===void 0?{}:R;if(t){var N=t.prefix,O=t.iconName,Q=t.icon;return vc(j({type:"icon"},t),function(){return ss("beforeDOMElementCreation",{iconDefinition:t,params:n}),G.autoA11y&&(f?b["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(v||po()):(b["aria-hidden"]="true",b.focusable="false")),rd({icons:{main:oh(Q),mask:l?oh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:O,transform:j(j({},vn),s),symbol:o,title:f,maskId:u,titleId:v,extra:{attributes:b,styles:w,classes:T}})})}},F3={mixout:function(){return{icon:V3(L3)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ng,n.nodeCallback=M3,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,s=r===void 0?jt:r,i=n.callback,o=i===void 0?function(){}:i;return ng(s,o)},t.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,l=r.transform,c=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,v){Promise.all([ah(s,a),u.iconName?ah(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var T=Kf(E,2),y=T[0],b=T[1];p([n,rd({icons:{main:y,mask:b},prefix:a,iconName:s,transform:l,symbol:c,maskId:h,title:i,titleId:o,extra:f,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,l=pc(a);l.length>0&&(s.style=l);var c;return Zf(o)&&(c=Un("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:s}}}},U3={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return vc({type:"layer"},function(){ss("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers")].concat(Fo(i)).join(" ")},children:o}]})}}}},B3={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,h=u===void 0?{}:u;return vc({type:"counter",content:n},function(){return ss("beforeDOMElementCreation",{content:n,params:r}),_3({content:n.toString(),title:i,extra:{attributes:c,styles:h,classes:["".concat(G.cssPrefix,"-layers-counter")].concat(Fo(a))}})})}}}},j3={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?vn:s,o=r.title,a=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,h=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return vc({type:"text",content:n},function(){return ss("beforeDOMElementCreation",{content:n,params:r}),Qm({content:n,transform:j(j({},vn),i),title:a,extra:{attributes:h,styles:p,classes:["".concat(G.cssPrefix,"-layers-text")].concat(Fo(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,l=null;if(X_){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/c,l=u.height/c}return G.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qm({content:n.innerHTML,width:a,height:l,transform:i,title:s,extra:o,watchable:!0})])}}},$3=new RegExp('"',"ug"),rg=[1105920,1112319];function H3(e){var t=e.replace($3,""),n=n3(t,0),r=n>=rg[0]&&n<=rg[1],s=t.length===2?t[0]===t[1]:!1;return{value:nh(s?t[0]:t),isSecondary:r||s}}function sg(e,t){var n="".concat(x5).concat(t.replace(":","-"));return new Promise(function(r,s){if(e.getAttribute(n)!==null)return r();var i=oi(e.children),o=i.filter(function(Q){return Q.getAttribute(eh)===t})[0],a=Er.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(V5),c=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Kt:Ft,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?uo[f][l[2].toLowerCase()]:L5[f][c],v=H3(h),E=v.value,T=v.isSecondary,y=l[0].startsWith("FontAwesome"),b=ed(p,E),R=b;if(y){var w=c3(E);w.iconName&&w.prefix&&(b=w.iconName,p=w.prefix)}if(b&&!T&&(!o||o.getAttribute(Yf)!==p||o.getAttribute(Qf)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var N=N3(),O=N.extra;O.attributes[eh]=t,ah(b,p).then(function(Q){var z=rd(j(j({},N),{},{icons:{main:Q,mask:nd()},prefix:p,iconName:R,extra:O,watchable:!0})),Y=jt.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Y,e.firstChild):e.appendChild(Y),Y.outerHTML=z.map(function(lt){return Bo(lt)}).join(`
`),e.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function z3(e){return Promise.all([sg(e,"::before"),sg(e,"::after")])}function q3(e){return e.parentNode!==document.head&&!~N5.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(eh)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ig(e){if($n)return new Promise(function(t,n){var r=oi(e.querySelectorAll("*")).filter(q3).map(z3),s=sd.begin("searchPseudoElements");y1(),Promise.all(r).then(function(){s(),ch(),t()}).catch(function(){s(),ch(),n()})})}var W3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ig,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?jt:r;G.searchPseudoElements&&ig(s)}}},og=!1,K3={mixout:function(){return{dom:{unwatch:function(){y1(),og=!0}}}},hooks:function(){return{bootstrap:function(){tg(sh("mutationObserverCallbacks",{}))},noAuto:function(){P3()},watch:function(n){var r=n.observeMutationsRoot;og?ch():tg(sh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},ag=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},G3={mixout:function(){return{parse:{transform:function(n){return ag(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=ag(s)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),c="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:j({},p.outer),children:[{tag:"g",attributes:j({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:j(j({},r.icon.attributes),p.path)}]}]}}}},eu={x:0,y:0,width:"100%",height:"100%"};function lg(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Y3(e){return e.tag==="g"?e.children:[e]}var Q3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?gc(s.split(" ").map(function(o){return o.trim()})):nd();return i.prefix||(i.prefix=br()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,l=n.transform,c=i.width,u=i.icon,h=o.width,f=o.icon,p=G5({transform:l,containerWidth:h,iconWidth:c}),v={tag:"rect",attributes:j(j({},eu),{},{fill:"white"})},E=u.children?{children:u.children.map(lg)}:{},T={tag:"g",attributes:j({},p.inner),children:[lg(j({tag:u.tag,attributes:j(j({},u.attributes),p.path)},E))]},y={tag:"g",attributes:j({},p.outer),children:[T]},b="mask-".concat(a||po()),R="clip-".concat(a||po()),w={tag:"mask",attributes:j(j({},eu),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,y]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:Y3(f)},w]};return r.push(N,{tag:"rect",attributes:j({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(b,")")},eu)}),{children:r,attributes:s}}}},X3={provides:function(t){var n=!1;Er.matchMedia&&(n=Er.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:j(j({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=j(j({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:j(j({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:j(j({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:j(j({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:j(j({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:j(j({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:j(j({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:j(j({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},J3={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},Z3=[X5,F3,U3,B3,j3,W3,K3,G3,Q3,X3,J3];f3(Z3,{mixoutsTo:Ue});Ue.noAuto;Ue.config;var w1=Ue.library;Ue.dom;var uh=Ue.parse;Ue.findIconDefinition;Ue.toHtml;var tO=Ue.icon;Ue.layer;Ue.text;Ue.counter;var eO={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},nO=eO,rO={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},sO={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};function cg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cg(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ml(e){"@babel/helpers - typeof";return ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ml(e)}function Oe(e,t,n){return t=lO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function iO(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function oO(e,t){if(e==null)return{};var n=iO(e,t),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function aO(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lO(e){var t=aO(e,"string");return typeof t=="symbol"?t:String(t)}var cO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E1={exports:{}};(function(e){(function(t){var n=function(y,b,R){if(!c(b)||h(b)||f(b)||p(b)||l(b))return b;var w,N=0,O=0;if(u(b))for(w=[],O=b.length;N<O;N++)w.push(n(y,b[N],R));else{w={};for(var Q in b)Object.prototype.hasOwnProperty.call(b,Q)&&(w[y(Q,R)]=n(y,b[Q],R))}return w},r=function(y,b){b=b||{};var R=b.separator||"_",w=b.split||/(?=[A-Z])/;return y.split(w).join(R)},s=function(y){return v(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(b,R){return R?R.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var b=s(y);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(y,b){return r(y,b).toLowerCase()},a=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},f=function(y){return a.call(y)=="[object RegExp]"},p=function(y){return a.call(y)=="[object Boolean]"},v=function(y){return y=y-0,y===y},E=function(y,b){var R=b&&"process"in b?b.process:b;return typeof R!="function"?y:function(w,N){return R(w,y,N)}},T={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,b){return n(E(s,b),y)},decamelizeKeys:function(y,b){return n(E(o,b),y,b)},pascalizeKeys:function(y,b){return n(E(i,b),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(cO)})(E1);var uO=E1.exports,hO=["class","style"];function fO(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),s=uO.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[s]=i,t},{})}function dO(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function b1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return b1(l)}),s=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=dO(u);break;case"style":l.style=fO(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=oO(n,hO);return xl(e.tag,Rn(Rn(Rn({},t),{},{class:s.class,style:Rn(Rn({},s.style),o)},s.attrs),a),r)}var I1=!1;try{I1=!0}catch{}function pO(){if(!I1&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function nu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Oe({},e,t):{}}function mO(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Oe(t,"fa-".concat(e.size),e.size!==null),Oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Oe(t,"fa-pull-".concat(e.pull),e.pull!==null),Oe(t,"fa-swap-opacity",e.swapOpacity),Oe(t,"fa-bounce",e.bounce),Oe(t,"fa-shake",e.shake),Oe(t,"fa-beat",e.beat),Oe(t,"fa-fade",e.fade),Oe(t,"fa-beat-fade",e.beatFade),Oe(t,"fa-flash",e.flash),Oe(t,"fa-spin-pulse",e.spinPulse),Oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ug(e){if(e&&ml(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(uh.icon)return uh.icon(e);if(e===null)return null;if(ml(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var yc=Qs({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,s=It(function(){return ug(t.icon)}),i=It(function(){return nu("classes",mO(t))}),o=It(function(){return nu("transform",typeof t.transform=="string"?uh.transform(t.transform):t.transform)}),a=It(function(){return nu("mask",ug(t.mask))}),l=It(function(){return tO(s.value,Rn(Rn(Rn(Rn({},i.value),o.value),a.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});qr(l,function(u){if(!u)return pO("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var c=It(function(){return l.value?b1(l.value.abstract[0],{},r):null});return function(){return c.value}}});const Pa=rt(null),ka=rt(!1),gO=async(e,t,n)=>{Pa.value=null,ka.value=!0,Rm(Ws,t,n);try{const s=(await Rm(Ws,t,n)).user,i=xf(lo,"users",s.uid);(await getDoc(i)).exists()||await FR(i,{email:s.email,cartItems:[]}),console.log("user logged in"),Pa.value=null,ka.value=!1}catch(r){console.log(r.message),Pa.value=r.message,ka.value=!1}},vO=()=>({error:Pa,isPending:ka,signup:gO}),T1="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,256,256'%20width='48px'%20height='48px'%3e%3cg%20transform=''%3e%3cg%20fill='%23f8f8f8'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cpath%20d='M0,256v-256h256v256z'%20id='bgRectangle'%3e%3c/path%3e%3c/g%3e%3cg%20fill='none'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.33333,5.33333)'%3e%3cpath%20d='M43.611,20.083h-1.611v-0.083h-18v8h11.303c-1.649,4.657%20-6.08,8%20-11.303,8c-6.627,0%20-12,-5.373%20-12,-12c0,-6.627%205.373,-12%2012,-12c3.059,0%205.842,1.154%207.961,3.039l5.657,-5.657c-3.572,-3.329%20-8.35,-5.382%20-13.618,-5.382c-11.045,0%20-20,8.955%20-20,20c0,11.045%208.955,20%2020,20c11.045,0%2020,-8.955%2020,-20c0,-1.341%20-0.138,-2.65%20-0.389,-3.917z'%20fill='%23fbc02d'%3e%3c/path%3e%3cpath%20d='M6.306,14.691l6.571,4.819c1.778,-4.402%206.084,-7.51%2011.123,-7.51c3.059,0%205.842,1.154%207.961,3.039l5.657,-5.657c-3.572,-3.329%20-8.35,-5.382%20-13.618,-5.382c-7.682,0%20-14.344,4.337%20-17.694,10.691z'%20fill='%23e53935'%3e%3c/path%3e%3cpath%20d='M24,44c5.166,0%209.86,-1.977%2013.409,-5.192l-6.19,-5.238c-2.008,1.521%20-4.504,2.43%20-7.219,2.43c-5.202,0%20-9.619,-3.317%20-11.283,-7.946l-6.522,5.025c3.31,6.477%2010.032,10.921%2017.805,10.921z'%20fill='%234caf50'%3e%3c/path%3e%3cpath%20d='M43.611,20.083l-0.016,-0.083h-1.595h-18v8h11.303c-0.792,2.237%20-2.231,4.166%20-4.087,5.571c0.001,-0.001%200.002,-0.001%200.003,-0.002l6.19,5.238c-0.438,0.398%206.591,-4.807%206.591,-14.807c0,-1.341%20-0.138,-2.65%20-0.389,-3.917z'%20fill='%231565c0'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e",yO={props:{label:String},components:{FontAwesomeIcon:yc},setup(e){const t=rt(""),n=rt(!1),r=rt(!1),s=rt(""),i=rt(""),o=rt("password"),{signup:a,error:l}=vO(),c=Nh();return{userName:t,isFocused:n,isFocusedTwo:r,email:s,password:i,handleSubmit:async()=>{await a(t.value,s.value,i.value),l.value||c.push("/home")},error:l,password:i,passwordFieldType:o,togglePasswordVisibility:()=>{o.value=o.value==="password"?"text":"password"},signInWithGoogle:()=>{const p=new pn;L_(dc(),p).then(v=>{console.log(v.user),c.push("/home")}).catch(v=>{console.log(v)})}}}},_c=e=>(ls("data-v-fe804c05"),e=e(),cs(),e),_O=_c(()=>g("img",{src:T1,alt:"google"},null,-1)),wO=_c(()=>g("p",null,"Sign up with Google",-1)),EO=[_O,wO],bO={class:"passwordContainer"},IO=["type"],TO=_c(()=>g("br",null,null,-1)),AO=_c(()=>g("button",{class:"otherBtn"},"Submit",-1)),CO={key:0,class:"error"};function SO(e,t,n,r,s,i){const o=He("font-awesome-icon");return K(),nt(Ut,null,[g("div",{onClick:t[0]||(t[0]=(...a)=>r.signInWithGoogle&&r.signInWithGoogle(...a)),class:"google"},EO),g("form",{onSubmit:t[7]||(t[7]=Nl((...a)=>r.handleSubmit&&r.handleSubmit(...a),["prevent"]))},[g("label",{class:he(["email-label",{active:r.isFocused||r.email}])}," Email ",2),La(g("input",{type:"email",class:"input-email",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>r.email=a),onFocus:t[2]||(t[2]=a=>r.isFocused=!0),onBlur:t[3]||(t[3]=a=>r.isFocused=!1)},null,544),[[$a,r.email]]),g("div",bO,[g("label",{class:he(["password-label",{active:r.isFocusedTwo||r.password}])}," Password ",2),La(g("input",{type:r.passwordFieldType,class:"input-password",required:"","onUpdate:modelValue":t[4]||(t[4]=a=>r.password=a),onFocus:t[5]||(t[5]=a=>r.isFocusedTwo=!0),onBlur:t[6]||(t[6]=a=>r.isFocusedTwo=!1)},null,40,IO),[[d0,r.password]]),st(o,{icon:r.passwordFieldType==="password"?"eye":"eye-slash",onClick:r.togglePasswordVisibility,class:"toggle-icon"},null,8,["icon","onClick"])]),TO,AO,r.error?(K(),nt("div",CO,Mt(r.error),1)):ue("",!0)],32)],64)}const RO=Ce(yO,[["render",SO],["__scopeId","data-v-fe804c05"]]),xa=rt(null),Oa=rt(!1),PO=async(e,t)=>{xa.value=null,Oa.value=!0;const n=await HP(Ws,e,t);try{if(!n.user)throw new Error("could not complete login");xa.value=null,Oa.value=!1}catch(r){console.log(r.message),xa.value=r.message,Oa.value=!1}},kO=()=>({error:xa,isPending:Oa,login:PO}),xO={props:{label:String},components:{FontAwesomeIcon:yc},setup(e){const t=rt(""),n=rt(!1),r=rt(!1),s=rt(""),i=rt("password"),{login:o,error:a}=kO(),l=Nh();return{email:t,isFocused:n,isFocusedTwo:r,password:s,handleSubmit:async()=>{await o(t.value,s.value),a.value||l.push("/home")},error:a,password:s,passwordFieldType:i,togglePasswordVisibility:()=>{i.value=i.value==="password"?"text":"password"},signInWithGoogle:()=>{const f=new pn;L_(dc(),f).then(p=>{console.log(p.user),l.push("/home")}).catch(p=>{switch(console.log(p.code),p.code){case"auth/invalid-email":p.value="Invalid email";break;case"auth/user-not-found":p.value="No account with that email was found";break;case"auth/wrong-password":p.value="Incorrect password";break;default:p.value="Email or password was incorrect";break}})}}}},wc=e=>(ls("data-v-20f25142"),e=e(),cs(),e),OO=wc(()=>g("img",{src:T1,alt:"google"},null,-1)),NO=wc(()=>g("p",null,"Continue with Google",-1)),DO=[OO,NO],MO={class:"passwordContainer"},VO=["type"],LO=wc(()=>g("br",null,null,-1)),FO=wc(()=>g("button",{class:"otherBtn"},"Submit",-1)),UO={key:0,class:"error"};function BO(e,t,n,r,s,i){const o=He("font-awesome-icon");return K(),nt(Ut,null,[g("div",{onClick:t[0]||(t[0]=(...a)=>r.signInWithGoogle&&r.signInWithGoogle(...a)),class:"google"},DO),g("form",{onSubmit:t[7]||(t[7]=Nl((...a)=>r.handleSubmit&&r.handleSubmit(...a),["prevent"])),class:he({"dark-mode":e.isDarkMode})},[g("label",{class:he(["email-label",{active:r.isFocused||r.email}])}," Email ",2),La(g("input",{type:"email",class:"input-email",required:"","onUpdate:modelValue":t[1]||(t[1]=a=>r.email=a),onFocus:t[2]||(t[2]=a=>r.isFocused=!0),onBlur:t[3]||(t[3]=a=>r.isFocused=!1)},null,544),[[$a,r.email]]),g("div",MO,[g("label",{class:he(["password-label",{active:r.isFocusedTwo||r.password}])}," Password ",2),La(g("input",{type:r.passwordFieldType,class:"input-password",required:"","onUpdate:modelValue":t[4]||(t[4]=a=>r.password=a),onFocus:t[5]||(t[5]=a=>r.isFocusedTwo=!0),onBlur:t[6]||(t[6]=a=>r.isFocusedTwo=!1)},null,40,VO),[[d0,r.password]]),st(o,{icon:r.passwordFieldType==="password"?"eye":"eye-slash",onClick:r.togglePasswordVisibility,class:"toggle-icon"},null,8,["icon","onClick"])]),LO,FO,r.error?(K(),nt("div",UO,Mt(r.error),1)):ue("",!0)],34)],64)}const jO=Ce(xO,[["render",BO],["__scopeId","data-v-20f25142"]]);w1.add(sO,rO);const $O={props:{isOpen:Boolean},methods:{closeModal(){this.$emit("close")}},components:{LoginForm:jO,SignupForm:RO,FontAwesomeIcon:yc},setup(){return{show:rt(!0)}}},HO={class:"regModalContent"},zO={key:0,class:"Login container"},qO=g("h3",null,"Login",-1),WO={key:1,class:"signup container"},KO=g("h3",null,"Sign up",-1);function GO(e,t,n,r,s,i){const o=He("LoginForm"),a=He("SignupForm");return K(),en(Ol,{name:"modal-fade"},{default:zt(()=>[n.isOpen?(K(),nt("div",{key:0,onClick:t[4]||(t[4]=(...l)=>i.closeModal&&i.closeModal(...l)),class:"modalContainer"},[g("div",{onClick:t[3]||(t[3]=Nl(()=>{},["stop"])),class:"regModal"},[g("img",{onClick:t[0]||(t[0]=(...l)=>i.closeModal&&i.closeModal(...l)),src:p0,alt:"close icon",class:"closeModal"}),g("div",HO,[r.show?(K(),nt("div",zO,[qO,st(o),g("p",null,[xt(" No account? "),g("span",{class:"change",onClick:t[1]||(t[1]=l=>r.show=!1)},"Signup"),xt(" instead ")])])):(K(),nt("div",WO,[KO,st(a),g("p",null,[xt(" Got an account? "),g("span",{class:"change",onClick:t[2]||(t[2]=l=>r.show=!0)},"Login"),xt(" instead ")])]))])])])):ue("",!0)]),_:1})}const YO=Ce($O,[["render",GO]]),QO={components:{Modal:YO},data(){return{isModalOpen:!1}},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1}}},XO={class:"welcome-content"},JO=g("img",{src:"https://media.istockphoto.com/id/1640060653/vector/customer-support-hand-drawn-illustration.jpg?s=612x612&w=0&k=20&c=0lerut6YXwAsWCAKmvQ8noWYdkK12y8MNp_Y83uFJB8=",alt:"svg of a man wearing headset"},null,-1),ZO={class:"text"},tN=g("h2",null,"Welcome to SoundWaves.",-1),eN=g("p",null," where every beat matters, and every note counts.At SoundWaves, we believe that music is more than just a sound; it's an emotion, a journey, and a companion that adds rhythm to our lives. ",-1);function nN(e,t,n,r,s,i){const o=He("Modal");return K(),nt(Ut,null,[g("div",{class:he(["user",{blur:s.isModalOpen}])},[g("div",XO,[JO,g("div",ZO,[tN,eN,g("button",{onClick:t[0]||(t[0]=(...a)=>i.openModal&&i.openModal(...a)),class:"otherBtn"}," Get started ")])])],2),st(o,{isOpen:s.isModalOpen,onClose:i.closeModal},null,8,["isOpen","onClose"])],64)}const rN=Ce(QO,[["render",nN]]),sN={};function iN(e,t,n,r,s,i){return K(),nt("div",null," headign ")}const oN=Ce(sN,[["render",iN]]);w1.add(nO);const aN={components:{FontAwesomeIcon:yc},setup(){const e=rt(!0),t=Nh(),{user:n}=H_();return{show:e,logout:()=>{WP(Ws),t.push("/")},user:n}}},lN={class:"user"},cN={class:"userHead"},uN=g("h2",null,"User Profile",-1),hN={key:0,class:"userDetails"};function fN(e,t,n,r,s,i){return K(),nt("div",lN,[g("div",cN,[uN,r.user?(K(),nt("div",hN," logged in as "+Mt(r.user.email),1)):ue("",!0),r.user?(K(),nt("button",{key:1,class:"otherBtn",onClick:t[0]||(t[0]=(...o)=>r.logout&&r.logout(...o))}," Logout ")):ue("",!0)])])}const dN=Ce(aN,[["render",fN]]),pN={components:{Spinner:Wf},data(){return{product:null}},async created(){const e=this.$route.params.productId;await this.fetchProductDetails(e)},methods:{async fetchProductDetails(e){try{const t=await this.$projectFirestore.database().ref(`products/${e}`).get();this.product=t.val()}catch(t){console.error("Error fetching product details:",t)}}}},mN={class:"product"},gN={class:"productBtn"},vN=["src"],yN={class:"productName"},_N={class:"productText"},wN={class:"productPrice"};function EN(e,t,n,r,s,i){return K(),nt("div",mN,[g("button",gN,Mt(s.product.btnText),1),g("img",{src:s.product.rating,alt:"five stars",class:"rating"},null,8,vN),g("h3",yN,Mt(s.product.name),1),g("p",_N," Introducing the "+Mt(s.product.name)+" – where style meets performance. Immerse yourself in pristine audio quality and sleek design. With Bluetooth connectivity, noise-canceling technology, and an ultra-lightweight build, this headset delivers a premium listening experience. Stay connected seamlessly with hands-free calls, and enjoy comfort that lasts all day. Elevate your audio game with the "+Mt(s.product.name)+" – where sound meets style for a truly immersive sound adventure. ",1),g("span",wN,Mt(s.product.price),1)])}const bN=Ce(pN,[["render",EN]]),A1=iI({history:Ib("/"),routes:[{path:"/home",name:"home",component:o5},{path:"/shop",name:"shop",component:f5,meta:{requiresAuth:!0}},{path:"/blogs",name:"blogs",component:m5},{path:"/about",name:"about",component:E5},{path:"/contactus",name:"contactus",component:oN},{path:"/",name:"welcome",component:rN},{path:"/user",name:"user",component:dN},{path:"/details/:productId",name:"details",component:bN}]}),IN=()=>new Promise((e,t)=>{const n=C_(dc(),r=>{n(),e(r)},t)});A1.beforeEach(async(e,t,n)=>{if(e.matched.some(r=>r.meta.requiresAuth))if(await IN())n();else return m0.error("you don't have access try logging in or sign up")&&n("/");else n()});const C1=Xw(Rx);C1.use(A1);C1.mount("#app");
