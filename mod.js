// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,c=r.__lookupSetter__;var l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var a,f,p,b;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((f="value"in l)&&(u.call(t,e)||c.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=a):t[e]=l.value),p="get"in l,b="set"in l,f&&(p||b))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,e,l.get),b&&i&&i.call(t,e,l.set),t};function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var _=b()?function(t){var e,r,n,o,i;if(null==t)return y.call(t);r=t[s],i=s,e=null!=(o=t)&&v.call(o,i);try{t[s]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[s]=r:delete t[s],n}:function(t){return y.call(t)},m=Number,g=m.prototype.toString;var j=b();function d(t){return"object"==typeof t&&(t instanceof m||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function h(t){return f(t)||d(t)}a(h,"isPrimitive",f),a(h,"isObject",d);var O=Number.POSITIVE_INFINITY,S=m.NEGATIVE_INFINITY,w=Math.floor;function P(t){return w(t)===t}function I(t){return t<O&&t>S&&P(t)}function T(t){return f(t)&&I(t)}function N(t){return d(t)&&I(t.valueOf())}function E(t){return T(t)||N(t)}function V(t){return T(t)&&t<=0}function A(t){return N(t)&&t.valueOf()<=0}function F(t){return V(t)||A(t)}a(E,"isPrimitive",T),a(E,"isObject",N),a(F,"isPrimitive",V),a(F,"isObject",A);function G(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&P(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}var k=G(F.isPrimitive),x=G(F.isObject),M=G(F);a(M,"primitives",k),a(M,"objects",x);export{M as default,x as objects,k as primitives};
//# sourceMappingURL=mod.js.map
