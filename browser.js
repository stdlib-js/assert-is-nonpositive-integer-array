// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,l=n.__lookupGetter__,c=n.__lookupSetter__,f=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(l.call(t,e)||c.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,e,r.get),y&&u&&u.call(t,e,r.set),t};function a(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,_=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",m=b()?function(t){var e,r,n,o,i;if(null==t)return s.call(t);r=t[v],i=v,e=null!=(o=t)&&_.call(o,i);try{t[v]=void 0}catch(e){return s.call(t)}return n=s.call(t),e?t[v]=r:delete t[v],n}:function(t){return s.call(t)},d=Number,g=d.prototype.toString,j=b();function h(t){return"object"==typeof t&&(t instanceof d||(j?function(t){try{return g.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function O(t){return p(t)||h(t)}a(O,"isPrimitive",p),a(O,"isObject",h);var S=Number.POSITIVE_INFINITY,P=d.NEGATIVE_INFINITY,w=Math.floor;function T(t){return w(t)===t}function I(t){return t<S&&t>P&&T(t)}function N(t){return p(t)&&I(t)}function E(t){return h(t)&&I(t.valueOf())}function V(t){return N(t)||E(t)}function x(t){return N(t)&&t<=0}function A(t){return E(t)&&t.valueOf()<=0}function F(t){return x(t)||A(t)}function G(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&T(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}a(V,"isPrimitive",N),a(V,"isObject",E),a(F,"isPrimitive",x),a(F,"isObject",A);var M=G(F.isPrimitive),k=G(F.isObject),Y=G(F);a(Y,"primitives",M),a(Y,"objects",k),t.default=Y,t.objects=k,t.primitives=M,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).isNonPositiveIntegerArray={});
//# sourceMappingURL=browser.js.map
