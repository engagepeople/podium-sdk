!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("podiumSdk",[],t):"object"==typeof exports?exports.podiumSdk=t():e.podiumSdk=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=13)}([function(e,t,r){"use strict";var n=r(7),s=r(17),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function u(e){return null!==e&&"object"==typeof e}function a(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:s,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:a,isStream:function(e){return u(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,s=arguments.length;n<s;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,(function(t,s){e[s]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(15),s=r(2),o=r(5);class i extends n.Request{constructor(e){super(e)}SetResourceOnce(e){return this.ResourceOnce=e,this}SetResource(e){return this.Resource=e,this}SetLegacy(e){return this.Legacy=e,this}Get(e,t){return this.GetRequest(e,t)}List(e,t){let r;if(e instanceof o.Paginator){if(t)throw new TypeError("Order of parameters passed into List method must be Filter then Paginator");t=e,r=null}else e instanceof s.Filter&&(r=e);return t instanceof o.Paginator&&t.isLoading(!0),this.ListRequest(r,t).then(e=>(t instanceof o.Paginator&&(t.setResponse(e.current_page,e.from,e.last_page,e.per_page,e.to,e.total),t.isLoading(!1)),r instanceof s.Filter&&e.hasOwnProperty("facets")&&r.setFacets(e.facets),e.data))}Create(e){return this.PostRequest(e)}Update(e,t){return this.UpdateRequest(e,t)}Delete(e){return this.DeleteRequest(e)}}t.Resource=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(12);class s extends n.ListQuery{constructor(e){super(),this.values=e}setFacetQuery(e){return this.facetQuery=e,this}getFacetQuery(){const e={};for(const t in this.facetQuery)this.facetQuery.hasOwnProperty(t)&&null!==this.facetQuery[t]&&0!==this.facetQuery[t].length&&(e[t]=this.facetQuery[t]);return e}setFacets(e){return this.facets=e,this}getFacets(){return this.facets}setValue(e,t){return this.values[e]=t,this}getValue(e){return this.values[e]}setValues(e){return this.values=e,this}getValues(){return this.values}toParams(){const e=this.getValues();return this.getFacetQuery()&&(e.facets=this.getFacetQuery()),this.isLegacyMode()?{filter:e}:e}}t.Filter=s},function(e,t,r){"use strict";(function(t){var n=r(0),s=r(20),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,a={adapter:("undefined"!=typeof XMLHttpRequest?u=r(8):void 0!==t&&(u=r(8)),u),transformRequest:[function(e,t){return s(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){a.headers[e]=n.merge(o)})),e.exports=a}).call(this,r(19))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){if(this.token=null,n.instance)throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");n.instance=this}static getInstance(){return n.instance}SetToken(e){return this.token=e,this.hasSessionStorage()?(sessionStorage.setItem("__podiumSDK__token",this.token),this.token):this.token}GetToken(){return this.hasSessionStorage()?sessionStorage.getItem("__podiumSDK__token"):this.token}HasToken(){const e=this.GetToken();return"string"==typeof e&&e.length>0}RemoveToken(){return this.hasSessionStorage()&&sessionStorage.removeItem("__podiumSDK__token"),this.token=null,!0}hasSessionStorage(){return!("undefined"==typeof sessionStorage||null===sessionStorage)}}n.instance=new n,t.Token=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(12);class s extends n.ListQuery{constructor(){super(),this.loading=!1,this.page=1,this.perPage=50,this.sortField="created_at",this.sortDirection="desc",this.response={currentPage:null,from:null,lastPage:null,perPage:null,to:null,total:null}}setResponse(e,t,r,n,s,o){return this.response.currentPage=e,this.response.from=t,this.response.lastPage=r,this.response.perPage=n,this.response.to=s,this.response.total=o,this}isLoading(e){return this.loading=e,this}setPage(e){return this.page=e,this}setPerPage(e){return this.perPage=e,this}setSort(e,t){return this.sortField=e,this.sortDirection=t,this}setSortField(e){return this.sortField=e,this}setSortDirection(e){return this.sortDirection=e,this}setSortDesc(e){return this.sortDirection=e?"desc":"asc",this}toParams(){const e={count:this.perPage,page:this.page};return this.isLegacyMode()?Object.assign(e,{sorting:{[this.sortField]:this.sortDirection}}):Object.assign(e,{sort_direction:this.sortDirection,sort_field:this.sortField})}}t.Paginator=s},function(e,t,r){e.exports=r(16)},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0),s=r(21),o=r(23),i=r(24),u=r(25),a=r(9);e.exports=function(e){return new Promise((function(t,c){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",p=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+p)}if(h.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?i(h.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:r,config:e,request:h};s(t,c,n),h=null}},h.onerror=function(){c(a("Network Error",e,null,h)),h=null},h.ontimeout=function(){c(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=r(26),m=(e.withCredentials||u(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;m&&(l[e.xsrfHeaderName]=m)}if("setRequestHeader"in h&&n.forEach(l,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete l[t]:h.setRequestHeader(t,e)})),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),c(e),h=null)})),void 0===f&&(f=null),h.send(f)}))}},function(e,t,r){"use strict";var n=r(22);e.exports=function(e,t,r,s,o){var i=new Error(e);return n(i,t,r,s,o)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ListQuery=class{constructor(){this.legacy=!1}setLegacyMode(e){this.legacy=e}isLegacyMode(){return this.legacy}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(14),s=r(35),o=r(36),i=r(37),u=r(38),a=r(39),c=r(40),f=r(1),l=r(41),h=r(42);var d=r(43);t.PodiumSettings=d.Settings;var p=r(2);t.PodiumFilter=p.Filter;var g=r(5);t.PodiumPaginator=g.Paginator;t.Podium=class{constructor(e){this.Accounts=new n.Accounts(e),this.Auth=new s.Auth(e),this.Discretionary={DirectReports:new f.Resource(e).SetResource("user/reports"),Discretionary:new f.Resource(e).SetResource("campaign/discretionary"),Ledger:new f.Resource(e).SetResource("campaign/discretionary/ledger"),Transactions:new f.Resource(e).SetResource("campaign/discretionary/transactions")},this.Ecards={Categories:new f.Resource(e).SetResource("ecard/category"),Ecards:new o.Ecards(e),Templates:new f.Resource(e).SetResource("ecard/template")},this.Ledgers=new c.Ledgers(e),this.LRG=new a.LRG(e),this.Permissions=new f.Resource(e).SetResource("member/modulePermissions"),this.Shop={Cart:new i.ShopCart(e),Orders:new u.Orders(e),Products:new f.Resource(e).SetResource("member/product"),Wishlist:new f.Resource(e).SetResource("member/wishlist")},this.Terms=new l.Terms(e),this.User={Address:new f.Resource(e).SetResource("address").SetLegacy(!0),Profile:new f.Resource(e).SetResource("member/profile").SetLegacy(!0)},this.Users=new f.Resource(e).SetResource("member/user").SetLegacy(!0),this.PendingAction=new f.Resource(e).SetResource("member/pending-action"),this.Utils=new h.Utils}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(4);class o extends n.Resource{constructor(e){super(e),this.SetResource("member/account")}GetTravelUrl(e){const t={token:s.Token.getInstance().GetToken()};return this.GetRequest(e,t,"jwt")}GetTransactions(e,t,r){return this.SetResourceOnce(`member/account/${e}/transaction`),this.List(t,r)}DownloadTransactions(e,t,r,n){this.SetResourceOnce(`member/account/${e}/download`);const s={format:t,transaction_date_from:r,transaction_date_to:n};return this.PostRequest(s)}Transfer(e,t,r,n,s){this.SetResourceOnce(`member/account/${e}/transfer`);const o={amount:r,receiver_account_id:t,receiver_transaction_description:void 0!==s?s:"Transfer Points",sender_transaction_description:void 0!==n?n:"Transfer Points"};return this.PostRequest(o)}}t.Accounts=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(34),o=r(2),i=r(4),u=r(5);class a{constructor(e){this.Legacy=!1,this.settings=e}static parseError(e){const t="object"==typeof e.response.data&&(e.response.data.message||e.response.data.detail||Array.isArray(e.response.data.detail)&&Object.values(e.response.data.detail).map(e=>"string"==typeof e&&e||e[0])||Object.values(e.response.data)[0])||e.response;return{code:e.response.data.code,data:e.response.data,message:t,status:e.response.status,statusText:e.response.statusText}}GetRequest(e,t,r){const n={method:"get",params:t};let s=`${this.makeURL()}`;return e&&(s=`${s}/${e}`),r&&(s+=`/${r}`),this.Request(n,s)}DeleteRequest(e,t){return this.Request({method:"delete"},this.makeURL(e,t))}ListRequest(e,t,r){let n={};e instanceof o.Filter&&(e.setLegacyMode(this.Legacy),n=Object.assign(n,e.toParams())),t instanceof u.Paginator&&(t.setLegacyMode(this.Legacy),n=Object.assign(n,t.toParams()));const s={method:"get",params:n};return this.Request(s,this.makeURL(null,r))}PostRequest(e={},t){const r=this.makeURL(null,t),n={data:e,method:"post"};return r.indexOf("download")>=0&&(n.responseType="arraybuffer"),this.Request(n,r)}UpdateRequest(e,t,r){const n={data:t,method:"put"};return this.Request(n,this.makeURL(e,r))}Request(e,t,r,o){if(t||(t=this.makeURL(r,o)),"object"==typeof e.data){const t=new s.ConvertTime(e.data);e.data=t.ToAPI()}return e=Object.assign({headers:this.makeHeaders()},e),t.indexOf("download")<0&&(e.transformResponse=[e=>new s.ConvertTime(JSON.parse(e)).ToUTC()]),new Promise((r,s)=>n.default(t,e).then(e=>{r(e.data)}).catch(e=>{const t=a.parseError(e);401===t.status&&"unauthorized"===t.data.code&&i.Token.getInstance().RemoveToken(),this.onRequestError(t),s(t)}))}makeURL(e,t){let r=this.settings.getEndpoint();r.endsWith("/")||(r+="/");const n=this.settings.getVersion(),s=this.ResourceOnce||this.Resource;this.ResourceOnce=null;let o=`${r}v${n}/${s}`;return e&&(o+=`/${e}`),t&&(o+=`/${t}`),o}GetLocale(){return this.settings.getLocale()}makeHeaders(){if(i.Token.getInstance().GetToken())return{"Accept-Language":this.GetLocale(),Authorization:i.Token.getInstance().GetToken()}}onRequestError(e){"function"==typeof this.settings.getOnRequestError()&&this.settings.getOnRequestError()(e)}}t.Request=a},function(e,t,r){"use strict";var n=r(0),s=r(7),o=r(18),i=r(3);function u(e){var t=new o(e),r=s(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var a=u(i);a.Axios=o,a.create=function(e){return u(n.merge(i,e))},a.Cancel=r(11),a.CancelToken=r(32),a.isCancel=r(10),a.all=function(e){return Promise.all(e)},a.spread=r(33),e.exports=a,e.exports.default=a},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,r){"use strict";var n=r(3),s=r(0),o=r(27),i=r(28);function u(e){this.defaults=e,this.interceptors={request:new o,response:new o}}u.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),(e=s.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},s.forEach(["delete","get","head","options"],(function(e){u.prototype[e]=function(t,r){return this.request(s.merge(r||{},{method:e,url:t}))}})),s.forEach(["post","put","patch"],(function(e){u.prototype[e]=function(t,r,n){return this.request(s.merge(n||{},{method:e,url:t,data:r}))}})),e.exports=u},function(e,t){var r,n,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a,c=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?c=a.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(h);f=!0;for(var t=c.length;t;){for(a=c,c=[];++l<t;)a&&a[l].run();l=-1,t=c.length}a=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||f||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=g,s.addListener=g,s.once=g,s.off=g,s.removeListener=g,s.removeAllListeners=g,s.emit=g,s.prependListener=g,s.prependOnceListener=g,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(9);e.exports=function(e,t,r){var s=r.config.validateStatus;r.status&&s&&!s(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,s){return e.config=t,r&&(e.code=r),e.request=n,e.response=s,e}},function(e,t,r){"use strict";var n=r(0);function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(s(t)+"="+s(e))})))})),o=i.join("&")}return o&&(e+=(-1===e.indexOf("?")?"?":"&")+o),e}},function(e,t,r){"use strict";var n=r(0),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(i[t]&&s.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function s(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,o,i){var u=[];u.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(s)&&u.push("path="+s),n.isString(o)&&u.push("domain="+o),!0===i&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0);function s(){this.handlers=[]}s.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},s.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=s},function(e,t,r){"use strict";var n=r(0),s=r(29),o=r(10),i=r(3),u=r(30),a=r(31);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!u(e.url)&&(e.url=a(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return c(e),t.data=s(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(11);function s(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},s.source=function(){var e;return{token:new s((function(t){e=t})),cancel:e}},e.exports=s},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.TO_UTC=0]="TO_UTC",e[e.TO_API=1]="TO_API"}(n||(n={}));t.ConvertTime=class{constructor(e){if(this.APIDateRegEx=new RegExp("^\\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\\d|3[0-1]) ([0-1]?\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$"),this.loopNestedObj=(e,t)=>(Object.keys(e).forEach(r=>{!e[r]||"object"!=typeof e[r]||e[r]instanceof Date?(t===n.TO_UTC&&"string"==typeof e[r]&&this.isAPIDate(e[r])&&(e[r]=this.StringToUTC(e[r])),t===n.TO_API&&e[r]instanceof Date&&(e[r]=this.DateToAPI(e[r]))):this.loopNestedObj(e[r],t)}),e),this.isAPIDate=e=>this.APIDateRegEx.test(e),this.StringToUTC=e=>new Date(e.replace(" ","T")+"Z"),this.DateToAPI=e=>`${e.getUTCFullYear()}-${this.strPad(e.getUTCMonth()+1)}-${this.strPad(e.getUTCDate())} ${this.strPad(e.getUTCHours())}:${this.strPad(e.getUTCMinutes())}:${this.strPad(e.getUTCSeconds())}`,this.strPad=e=>String("00"+e).slice(-2),"object"!=typeof e)throw new Error("Convert Time must accept an object");this.data=e}ToUTC(){return this.loopNestedObj(this.data,n.TO_UTC)}ToAPI(){return this.loopNestedObj(this.data,n.TO_API)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(4);class o extends n.Resource{constructor(e){super(e),this.SetResource("auth/login")}Login(e,t,r){return s.Token.getInstance().RemoveToken(),this.PostRequest({password:t,program_slug:r,type:"member",user_account:e}).then(e=>{if(e.auth.expires_in>0)return this.SetToken(`${e.auth.token_type} ${e.auth.access_token}`),e.auth.expires_in})}LoginAs(e,t,r){this.SetResourceOnce(`program/${r}/login-as`);const n={token:t,user_account:e};return this.GetRequest(null,n).then(e=>{if(e.auth.expires_in>0)return this.SetToken(`${e.auth.token_type} ${e.auth.access_token}`),e.auth.expires_in})}SSO(e){return this.SetResourceOnce("authenticate"),s.Token.getInstance().RemoveToken(),this.PostRequest({token:e,type:"sso"}).then(e=>{if(e.expires_in>0)return this.SetToken(`${e.token_type} ${e.token}`),e.expires_in})}GetToken(){return s.Token.getInstance().GetToken()}SetToken(e){return s.Token.getInstance().SetToken(e)}HasToken(){return s.Token.getInstance().HasToken()}Logout(){return this.SetResourceOnce("auth/logout"),this.PostRequest().then(e=>(s.Token.getInstance().RemoveToken(),e))}RefreshToken(){return this.SetResourceOnce("auth/refresh"),this.PostRequest().then(e=>{if(e.auth.expires_in>0)return this.SetToken(`${e.auth.token_type} ${e.auth.access_token}`),e.auth.expires_in})}}t.Auth=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1),s=r(2);class o extends n.Resource{constructor(e){super(e),this.SetResource("ecard")}GetReceived(e){const t=new s.Filter({status:"received"});return this.List(t,e)}GetSent(e){const t=new s.Filter({status:"sent"});return this.List(t,e)}GetPending(e){const t=new s.Filter({status:"pending"});return this.List(t,e)}}t.Ecards=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);class s extends n.Resource{constructor(e){super(e),this.SetResource("shoppingCart")}RemoveItemFromCart(e,t){return this.DeleteRequest(e,`item/${t}`)}Confirm(e,t,r,n){return this.SetResourceOnce("shoppingCart/confirm"),this.Create({account_id:n,address_id:t,ledger_id:r,shopping_cart_id:e})}Checkout(e,t,r,n){return this.SetResourceOnce("shoppingCart/checkout"),this.Create({account_id:t,address_id:r,kount_session_id:n,shopping_cart_id:e})}UpdateItem(e,t,r){return this.UpdateRequest(e,{quantity:r},`item/${t}`)}}t.ShopCart=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);class s extends n.Resource{constructor(e){super(e),this.SetResource("member/order")}Cancel(e){return this.SetResourceOnce("member/orderCancel"),this.Update(e)}}t.Orders=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);class s extends n.Resource{constructor(e){super(e),this.SetResource("lrg/session")}GetUrl(e){return this.PostRequest({account_id:e.accountId,website_back:e.redirectUrl})}Redirect(e){return"undefined"!=typeof window&&null!==window&&(this.GetUrl(e).then(e=>{window.location.replace(e.body.redirect_url)}),!0)}}t.LRG=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);class s extends n.Resource{constructor(e){super(e),this.SetResource("ledger")}GetTransactions(e,t,r){return this.SetResourceOnce(`ledger/${e}/transaction`),this.List(t,r)}}t.Ledgers=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(1);class s extends n.Resource{constructor(e){super(e),this.SetResource("terms")}Accept(e){return this.PostRequest({terms_id:e})}}t.Terms=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(6);t.Utils=class{constructor(){this.RequestsInProgress=[],this.isRequesting=!1;const e=()=>!this.RequestsInProgress.length&&(this.isRequesting=!1);n.default.interceptors.request.use(e=>(this.RequestsInProgress.push(e.url),this.isRequesting=!0,e),e=>Promise.reject(e)),n.default.interceptors.response.use(t=>{const r=t.config.url;return this.RequestsInProgress.splice(this.RequestsInProgress.indexOf(r),1),e(),t},t=>{const r=t.config.url;return this.RequestsInProgress.splice(this.RequestsInProgress.indexOf(r),1),e(),Promise.reject(t)})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(44);t.Settings=class{constructor(){this.settings={},this.APIVersions=[1],this.setEndpoint("https://api.podiumrewards.com/"),this.setLocale("en-CA"),this.setVersion(this.APIVersions[this.APIVersions.length-1])}setVersion(e){if(!this.APIVersions.includes(e))throw new n.FatalError(`Version ${e} does not exist in the API`);return this.settings.version=e,this}getVersion(){return this.settings.version}setLocale(e){return this.settings.locale=e,this}getLocale(){return this.settings.locale}setEndpoint(e){return this.settings.endpoint=e,this}getEndpoint(){return this.settings.endpoint}setOnRequestError(e){return this.settings.onRequestError=e,this}getOnRequestError(){return this.settings.onRequestError}}},function(e,t,r){"use strict";
/**
 * @license
 * Copyright 2018 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),s=new Set,o=function(e){function t(r,n){var s=e.call(this,r)||this;return s.message=r,s.innerError=n,s.name=t.NAME,Object.setPrototypeOf(s,t.prototype),s}return n.__extends(t,e),t.NAME="FatalError",t}(Error);t.FatalError=o,t.isError=function(e){return null!=e&&void 0!==e.message},t.showWarningOnce=function(e){s.has(e)||(console.warn(e),s.add(e))},t.showRuleCrashWarning=function(e,t,r){console.warn("The '"+t+"' rule threw an error in '"+r+"':\n"+e)}},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return s})),r.d(t,"__assign",(function(){return o})),r.d(t,"__rest",(function(){return i})),r.d(t,"__decorate",(function(){return u})),r.d(t,"__param",(function(){return a})),r.d(t,"__metadata",(function(){return c})),r.d(t,"__awaiter",(function(){return f})),r.d(t,"__generator",(function(){return l})),r.d(t,"__exportStar",(function(){return h})),r.d(t,"__values",(function(){return d})),r.d(t,"__read",(function(){return p})),r.d(t,"__spread",(function(){return g})),r.d(t,"__spreadArrays",(function(){return m})),r.d(t,"__await",(function(){return y})),r.d(t,"__asyncGenerator",(function(){return v})),r.d(t,"__asyncDelegator",(function(){return _})),r.d(t,"__asyncValues",(function(){return R})),r.d(t,"__makeTemplateObject",(function(){return w})),r.d(t,"__importStar",(function(){return b})),r.d(t,"__importDefault",(function(){return P}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function s(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r}function u(e,t,r,n){var s,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(s=e[u])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i}function a(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,r,n){return new(r||(r=Promise))((function(s,o){function i(e){try{a(n.next(e))}catch(e){o(e)}}function u(e){try{a(n.throw(e))}catch(e){o(e)}}function a(e){e.done?s(e.value):new r((function(t){t(e.value)})).then(i,u)}a((n=n.apply(e,t||[])).next())}))}function l(e,t){var r,n,s,o,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(s=2&o[0]?n.return:o[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,o[1])).done)return s;switch(n=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(s=(s=i.trys).length>0&&s[s.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],n=0}finally{r=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function h(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function d(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function p(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,s,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)i.push(n.value)}catch(e){s={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(s)throw s.error}}return i}function g(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}function m(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),s=0;for(t=0;t<r;t++)for(var o=arguments[t],i=0,u=o.length;i<u;i++,s++)n[s]=o[i];return n}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function v(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,s=r.apply(e,t||[]),o=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){s[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||u(e,t)}))})}function u(e,t){try{(r=s[e](t)).value instanceof y?Promise.resolve(r.value.v).then(a,c):f(o[0][2],r)}catch(e){f(o[0][3],e)}var r}function a(e){u("next",e)}function c(e){u("throw",e)}function f(e,t){e(t),o.shift(),o.length&&u(o[0][0],o[0][1])}}function _(e){var t,r;return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,s){t[n]=e[n]?function(t){return(r=!r)?{value:y(e[n](t)),done:"return"===n}:s?s(t):t}:s}}function R(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=d(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,s){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,s,(t=e[r](t)).done,t.value)}))}}}function w(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function b(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function P(e){return e&&e.__esModule?e:{default:e}}}])}));
//# sourceMappingURL=index.js.map