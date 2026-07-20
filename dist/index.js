"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=o(function(w,a){
var v=require('@stdlib/assert-is-iterator-like/dist'),l=require('@stdlib/assert-is-function/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function f(e,r,t){var i,n;if(!v(e))throw new TypeError(u('0OX3v',e));if(!l(r))throw new TypeError(u('0OX2H',r));for(n=-1;n+=1,i=e.next(),!i.done;)if(r.call(t,i.value,n))return!0;return!1}a.exports=f
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
