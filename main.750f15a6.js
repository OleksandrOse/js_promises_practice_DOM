parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=document.querySelector("body"),e=function(e,i){n.addEventListener("click",function(){e()}),setTimeout(function(){i()},3e3)},i=function(e){n.addEventListener("click",function(){e()})},t=function(e){n.addEventListener("contextmenu",function(n){n.preventDefault(),e()})},s=new Promise(i),c=new Promise(t),o=new Promise(e),a=Promise.race([s,c]),r=Promise.all([s,c]);o.then(function(e){n.insertAdjacentHTML("beforebegin",'\n      <div class="success" data-qa="notification">\n        First promise was resolved\n      <div>\n    ')}).catch(function(e){n.insertAdjacentHTML("beforebegin",'\n      <div class="error" data-qa="notification">\n        First promise was rejected\n      <div>')}),a.then(function(e){n.insertAdjacentHTML("beforebegin",'\n      <div class="success" data-qa="notification">\n        Second promise was resolved\n      <div>\n    ')}),r.then(function(e){n.insertAdjacentHTML("beforebegin",'\n      <div class="success" data-qa="notification">\n        Third promise was resolved\n      <div>\n    ')});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.750f15a6.js.map