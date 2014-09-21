// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 2
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var n=this,ba=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=d.slice();b.push.apply(b,arguments);return a.apply(this,b)}},da=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ea=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,fa=function(a){if(null==a)return String(a);var b=ea.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},ga=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ha=function(a){if(!a||"object"!=fa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!ga(a,"constructor")&&!ga(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var d in a);return void 0===
d||ga(a,d)},ia=function(a,b){var d=b||("array"==fa(a)?[]:{}),c;for(c in a)if(ga(a,c)){var e=a[c];"array"==fa(e)?("array"!=fa(d[c])&&(d[c]=[]),d[c]=ia(e,d[c])):ha(e)?(ha(d[c])||(d[c]={}),d[c]=ia(e,d[c])):d[c]=e}return d};var ja=function(){},x=function(a){return"function"==typeof a},A=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a){return"number"==fa(a)&&!isNaN(a)},ma=function(a,b){if(Array.prototype.indexOf){var d=a.indexOf(b);return"number"==typeof d?d:-1}for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},na=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},D=function(a){return Math.round(Number(a))||0},oa=function(a){var b=[];if(A(a))for(var d=0;d<a.length;d++)b.push(String(a[d]));
return b},F=function(){return new Date},pa=function(a,b){if(!la(a)||!la(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},qa=function(){this.prefix="gtm.";this.ha={}};qa.prototype.set=function(a,b){this.ha[this.prefix+a]=b};qa.prototype.get=function(a){return this.ha[this.prefix+a]};qa.prototype.contains=function(a){return void 0!==this.get(a)};
var ra=function(a,b,d){try{return a["4"](a,b||ja,d||ja)}catch(c){}return!1},ua=function(a,b){function d(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var c=na(b).split("&"),e=0;e<c.length;e++)if(c[e]){var f=c[e].indexOf("=");0>f?d(c[e],"1"):d(c[e].substring(0,f),c[e].substring(f+1))}},va=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},wa=function(a){for(var b=0;b<a.length;b++)a[b]()},xa=F().getTime(),ya=function(a,b,d){return a&&a.hasOwnProperty(b)?a[b]:d},Aa=function(a,
b,d){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=d};var H=window,K=document,Ba=navigator,L=function(a,b,d){var c=H[a],e="var "+a+";";if(n.execScript)n.execScript(e,"JavaScript");else if(n.eval)if(null==da&&(n.eval("var _et_ = 1;"),"undefined"!=typeof n._et_?(delete n._et_,da=!0):da=!1),da)n.eval(e);else{var f=n.document,g=f.createElement("script");g.type="text/javascript";g.defer=!1;g.appendChild(f.createTextNode(e));f.body.appendChild(g);f.body.removeChild(g)}else throw Error("goog.globalEval not available");H[a]=void 0===c||d?b:c;return H[a]},M=
function(a,b,d,c){return(c||"http:"!=H.location.protocol?a:b)+d},Ca=function(a){var b=K.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},Da=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},N=function(a,b,d){var c=K.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;Da(c,b);d&&(c.onerror=d);Ca(c)},Ea=function(a,b){var d=K.createElement("iframe");d.height="0";d.width=
"0";d.style.display="none";d.style.visibility="hidden";Ca(d);Da(d,b);void 0!==a&&(d.src=a);return d},k=function(a,b,d){var c=new Image(1,1);c.onload=function(){c.onload=null;b&&b()};c.onerror=function(){c.onerror=null;d&&d()};c.src=a},O=function(a,b,d,c){a.addEventListener?a.addEventListener(b,d,!!c):a.attachEvent&&a.attachEvent("on"+b,d)},P=function(a){H.setTimeout(a,0)},Fa=!1,Ga=[],Ha=function(a){if(!Fa){var b=K.createEventObject,d="complete"==K.readyState,c="interactive"==K.readyState;if(!a||"readystatechange"!=
a.type||d||!b&&c){Fa=!0;for(var e=0;e<Ga.length;e++)Ga[e]()}}},Ia=0,Ja=function(){if(!Fa&&140>Ia){Ia++;try{K.documentElement.doScroll("left"),Ha()}catch(a){H.setTimeout(Ja,50)}}},La=function(a){var b=K.getElementById(a);if(b&&Ka(b,"id")!=a)for(var d=1;d<document.all[a].length;d++)if(Ka(document.all[a][d],"id")==a)return document.all[a][d];return b},Ka=function(a,b){return a&&b&&a.attributes[b]?a.attributes[b].value:null},Pa=function(a){return a.target||a.srcElement||{}},Qa=function(a){var b=K.createElement("div");
b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},Ra=function(a,b){for(var d={},c=0;c<b.length;c++)d[b[c]]=!0;for(var e=a,c=0;e&&!d[String(e.tagName).toLowerCase()]&&100>c;c++)e=e.parentElement;e&&!d[String(e.tagName).toLowerCase()]&&(e=null);return e},Sa=!1,Ta=[],Ua=function(){if(!Sa){Sa=!0;for(var a=0;a<Ta.length;a++)Ta[a]()}},Va=function(a){a=a||H;var b=a.location.href,d=b.indexOf("#");return 0>d?"":b.substring(d+1)};var Wa=null,Xa=null;var Za=new qa,$a={},ab=ja,bb=[],cb=!1,eb={set:function(a,b){ia(db(a,b),$a)},get:function(a){return R(a,2)}},fb=function(a){return H["dataLayer"].push(a)},gb=function(a){var b=!1;return function(){!b&&x(a)&&P(a);b=!0}},qb=function(){for(var a=!1;!cb&&0<bb.length;){cb=!0;var b=bb.shift();if(x(b))try{b.call(eb)}catch(d){}else if(A(b))e:{var c=b;if("string"==fa(c[0])){for(var e=c[0].split("."),f=e.pop(),g=c.slice(1),h=$a,m=0;m<e.length;m++){if(void 0===h[e[m]])break e;h=h[e[m]]}try{h[f].apply(h,g)}catch(p){}}}else{var l=
b,q=void 0;for(q in l)if(l.hasOwnProperty(q)){var r=q,t=l[q];Za.set(r,t);ia(db(r,t),$a)}var B=!1,G=l.event;if(G){Xa=G;var w=gb(l.eventCallback),Q=l.eventTimeout;Q&&H.setTimeout(w,Number(Q));B=ab(G,w,l.eventReporter)}if(!Wa&&(Wa=l["gtm.start"])){}Xa=null;a=B||a}var J=b,W=$a;nb();cb=!1}return!a},R=function(a,b){if(2==b){for(var d=$a,c=a.split("."),e=0;e<c.length;e++){if(void 0===d[c[e]])return;d=d[c[e]]}return d}return Za.get(a)},
db=function(a,b){for(var d={},c=d,e=a.split("."),f=0;f<e.length-1;f++)c=c[e[f]]={};c[e[e.length-1]]=b;return d};var rb={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],
nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tb=function(a,b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]),d.push.apply(d,b[a[c]]||[]);return d},hb=function(){var a=R("gtm.whitelist"),b=a&&tb(oa(a),rb),d=R("gtm.blacklist")||R("tagTypeBlacklist"),c=d&&tb(oa(d),sb),e={};return function(f){var g=f&&f["4"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)e:{if(0>ma(b,g.a))if(g.b&&0<g.b.length)for(var m=0;m<g.b.length;m++){if(0>
ma(b,g.b[m])){h=!1;break e}}else{h=!1;break e}h=!0}var p=!1;if(d){var l;if(!(l=0<=ma(c,g.a)))e:{for(var q=g.b||[],r=new qa,t=0;t<c.length;t++)r.set(c[t],!0);for(t=0;t<q.length;t++)if(r.get(q[t])){l=!0;break e}l=!1}p=l}return e[g.a]=!h||p}};var zb=function(a,b,d,c,e){var f=yb(a),g=(a.protocol.replace(":","")||H.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||H.location.hostname).split(":")[0].toLowerCase();if(d){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:H.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":var f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname,m=f.split("/");0<=ma(c||
[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");if(e)e:{for(var p=f.split("&"),l=0;l<p.length;l++){var q=p[l].split("=");if(decodeURIComponent(q[0]).replace("+"," ")==e){f=decodeURIComponent(q.slice(1).join("=")).replace("+"," ");break e}}f=void 0}break;case "fragment":f=a.hash.replace("#","")}return f},yb=function(a){var b=a||H.location;return b.hash?b.href.replace(b.hash,""):b.href},Ab=function(a){var b=K.createElement("a");b.href=a;return b};var _eu=function(a){var b=String(R("gtm.elementUrl")||a[""]||""),d=Ab(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Xa};_e.a="e";_e.b=["google"];var _v=function(a){var b=R(a["7"].replace(/\\\./g,"."),a["3"]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(R("gtm.referrer")||K.referrer),d=Ab(b);return b};_f.a="f";_f.b=["google"];var Bb=function(a){var b=H.location,d=b.hash?b.href.replace(b.hash,""):b.href,c;if(c=a[""]?a[""]:R("gtm.url"))d=String(c),b=Ab(d);var e,f,g;
a["2"]&&(d=zb(b,a["2"],e,f,g));return d},_u=Bb;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["0"])==String(a["1"])};_eq.a="eq";_eq.b=["google"];var _re=function(a){return(new RegExp(a["1"],a[""]?"i":void 0)).test(a["0"])};_re.a="re";_re.b=["google"];var Gb,Hb=/(Firefox\D28\D)/g.test(Ba.userAgent),Ib={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Jb={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Pb=function(a,b,d,c){return function(e){e=e||H.event;var f=Pa(e),g=!1;if(3!==e.which||"CLICK"!=a&&"LINK_CLICK"!=a)if(2!==e.which&&(null!=e.which||4!=e.button)||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(f=Ra(f,["a","area"]),g=!f||!f.href||Kb(f.href)||e.ctrlKey||e.shiftKey||e.altKey||!0===e.metaKey);var h="FORM_SUBMIT"==a?Jb:Ib;if(e.defaultPrevented||!1===e.returnValue||
e.U&&e.U()){if(f){var m={simulateDefault:!1};if("LINK_CLICK"==a||"FORM_SUBMIT"==a){var p=Lb(h);p&&Mb(a,f,m,h.wt,p)}else d||Mb(a,f,m,c)}}else{if(f){var m={},l=!0;"LINK_CLICK"==a||"FORM_SUBMIT"==a?(l=Mb(a,f,m,h.wt,""))||(Nb(m.eventReport,h)?b=!0:g=!0):l=Mb(a,f,m,c);g=g||l||"LINK_CLICK"==a&&Hb;m.simulateDefault=!l&&b&&!g;m.simulateDefault&&(g=Ob(f,m)||g,!g&&e.preventDefault&&e.preventDefault());e.returnValue=l||!b||g;return e.returnValue}return!0}}}},Mb=function(a,b,d,c,e){var f=c||2E3,g={"gtm.element":b,
"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||Ka(b,"id")||"","gtm.elementTarget":b.formTarget||b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Qb(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Rb(b);g.eventTimeout=f;g.eventCallback=Ub(b,d);g.eventReporter=function(a){d.eventReport=a};break;
case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||"";break;default:return!0}return fb(g)},Rb=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Vb=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Ob=function(a,b){var d=!1,c=/(iPad|iPhone|iPod)/g.test(Ba.userAgent),e=Vb(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;
f=(e||"_self").substring(1);b.targetWindow=H.frames&&H.frames[f]||H[f];break;case "_blank":c?(b.simulateDefault=!1,d=!0):(b.targetWindowName="gtm_autoEvent_"+F().getTime(),b.targetWindow=H.open("",b.targetWindowName));break;default:c&&!H.frames[e]?(b.simulateDefault=!1,d=!0):(H.frames[e]||(b.targetWindowName=e),b.targetWindow=H.frames[e]||H.open("",e))}return d},Qb=function(a,b,d){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(d=d||F().getTime(),500>F().getTime()-
d&&H.setTimeout(Qb(a,b,d),25)))}},Ub=function(a,b,d){return function(){if(b.simulateDefault)if(b.targetWindow){var c;b.targetWindowName&&(c=a.target,a.target=b.targetWindowName);K.gtmSubmitFormNow=!0;Wb(a).call(a);b.targetWindowName&&(a.target=c)}else d=d||F().getTime(),500>F().getTime()-d&&H.setTimeout(Ub(a,b,d),25)}},Lb=function(a){for(var b=["wnc","nwnc"],d=[],c=0;c<b.length;c++){var e=a[b[c]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&d.push(f)}return d.join(",")},Xb=function(a,b,d,c,e){var f=e;
if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>c)&&(a.wt=c);a[b?d?"wc":"wnc":d?"nwc":"nwnc"][f]=!0},Nb=function(a,b){if(b.wnc["0"]||b.wc["0"])return!0;for(var d=0;d<U.length;d++)if(a.passingRules[d]){var c=U[d],e=Yb[d],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=c[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},Zb=function(a,b,d,c,e){var f,g;switch(a){case "CLICK":if(K.gtmHasClickListenerTag)return;K.gtmHasClickListenerTag=!0;f="click";
g=function(a){var b=Pa(a);b&&Mb("CLICK",b,{},c);return!0};break;case "LINK_CLICK":b&&!Gb&&(Gb=yb());Xb(Ib,b||!1,d||!1,c,e);if(K.gtmHasLinkClickListenerTag)return;K.gtmHasLinkClickListenerTag=!0;f="click";g=Pb(a,b||!1,d||!1,c);break;case "FORM_SUBMIT":Xb(Jb,b||!1,d||!1,c,e);if(K.gtmHasFormSubmitListenerTag)return;K.gtmHasFormSubmitListenerTag=!0;f="submit";g=Pb(a,b||!1,d||!1,c);break;default:return}O(K,f,g,!1)},Kb=function(a){if(!Gb)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var d=
Ab(a);return Gb==yb(d)},Wb=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;K.gtmFormElementSubmitter||(K.gtmFormElementSubmitter=K.createElement("form"));return K.gtmFormElementSubmitter.submit.call?K.gtmFormElementSubmitter.submit:a.submit};var gc=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},hc=function(a,b){return a<b?-1:a>b?1:0};var ic;e:{var jc=n.navigator;if(jc){var kc=jc.userAgent;if(kc){ic=kc;break e}}ic=""}var lc=function(a){return-1!=ic.indexOf(a)};var mc=lc("Opera")||lc("OPR"),X=lc("Trident")||lc("MSIE"),nc=lc("Gecko")&&-1==ic.toLowerCase().indexOf("webkit")&&!(lc("Trident")||lc("MSIE")),oc=-1!=ic.toLowerCase().indexOf("webkit"),pc=function(){var a=n.document;return a?a.documentMode:void 0},qc=function(){var a="",b;if(mc&&n.opera){var d=n.opera.version;return"function"==ba(d)?d():d}nc?b=/rv\:([^\);]+)(\)|;)/:X?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:oc&&(b=/WebKit\/(\S+)/);if(b)var c=b.exec(ic),a=c?c[1]:"";if(X){var e=pc();if(e>parseFloat(a))return String(e)}return a}(),
rc={},sc=function(a){var b;if(!(b=rc[a])){for(var d=0,c=gc(String(qc)).split("."),e=gc(String(a)).split("."),f=Math.max(c.length,e.length),g=0;0==d&&g<f;g++){var h=c[g]||"",m=e[g]||"",p=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var q=p.exec(h)||["","",""],r=l.exec(m)||["","",""];if(0==q[0].length&&0==r[0].length)break;d=hc(0==q[1].length?0:parseInt(q[1],10),0==r[1].length?0:parseInt(r[1],10))||hc(0==q[2].length,0==r[2].length)||hc(q[2],r[2])}while(0==d)}b=rc[a]=0<=d}return b},tc=
n.document,uc=tc&&X?pc()||("CSS1Compat"==tc.compatMode?parseInt(qc,10):5):void 0;var vc;if(!(vc=!nc&&!X)){var wc;if(wc=X)wc=X&&9<=uc;vc=wc}vc||nc&&sc("1.9.1");X&&sc("9");var xc=function(a){xc[" "](a);return a};xc[" "]=function(){};var Cc=function(a,b){var d="";X&&!yc(a)&&(d='<script>document.domain="'+document.domain+'";\x3c/script>'+d);var c="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+d+"</head><body>"+b+"</body></html>";if(zc)a.srcdoc=c;else if(Ac){var e=a.contentWindow.document;e.open("text/html","replace");e.write(c);e.close()}else Bc(a,c)},zc=oc&&"srcdoc"in document.createElement("iframe"),Ac=nc||oc||X&&sc(11),Bc=function(a,b){X&&sc(7)&&!sc(10)&&6>Dc()&&Ec(b)&&(b=Fc(b));var d=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};X&&!yc(a)?Gc(a,d):d()},Dc=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},yc=function(a){try{var b;var d=a.contentWindow;try{var c;if(c=!!d&&null!=d.location.href)t:{try{xc(d.foo);c=!0;break t}catch(e){}c=!1}b=c}catch(f){b=!1}return b}catch(g){return!1}},Hc=0,Gc=function(a,b){var d="goog_rendering_callback"+Hc++;window[d]=b;X&&sc(6)&&!sc(7)?a.src="javascript:'<script>window.onload = function() { document.write(\\'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation()})()<\\\\/script>\\');document.close();};\x3c/script>'":a.src="javascript:'<script>(function() {document.domain = \""+document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation();})()\x3c/script>'"},Ec=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Fc=function(a){for(var b=unescape(encodeURIComponent(a)),d=Math.floor(b.length/2),
c=[],e=0;e<d;++e)c[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(c[d]=b.charAt(b.length-1));return c.join("")};/*
 Copyright (c) 2013 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Kc=function(a,b,d,c){return function(){try{if(0<b.length){var e=b.shift(),f=Kc(a,b,d,c);if("SCRIPT"==e.nodeName&&"text/gtmscript"==e.type){var g=K.createElement("script");g.async=!1;g.type="text/javascript";g.id=e.id;g.text=e.text||e.textContent||e.innerHTML||"";e.charset&&(g.charset=e.charset);var h=e.getAttribute("data-gtmsrc");h&&(g.src=h,Da(g,f));a.insertBefore(g,null);h||f()}else if(e.innerHTML&&0<=e.innerHTML.toLowerCase().indexOf("<script")){for(var m=[];e.firstChild;)m.push(e.removeChild(e.firstChild));
a.insertBefore(e,null);Kc(e,m,f,c)()}else a.insertBefore(e,null),f()}else d()}catch(p){P(c)}}};var Mc=function(a,b,d){if(K.body){if(a[""])try{Cc(Ea(),"<script>var google_tag_manager=parent.google_tag_manager;\x3c/script>"+a["5"]),P(b)}catch(c){P(d)}else a[""]?Lc(a,b,d):Kc(K.body,Qa(a["5"]),b,d)()}else H.setTimeout(function(){Mc(a,b,d)},200)},_html=Mc;_html.a="html";_html.b=["customScripts"];
var Pc,Qc;
var $c=function(a){return function(){}},ad=function(a){return function(){}};var ud=function(a){var b=H||n,d=b.onerror,c=!1;oc&&!sc("535.3")&&(c=!c);b.onerror=function(b,f,g,h,m){d&&d(b,f,g,h,m);a({message:b,fileName:f,Ca:g,Sa:h,error:m});return c}};var zd,Ad;
var Z=[],Jd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Kd=function(a){return Jd[a]},Ld=/[\x00\x22\x26\x27\x3c\x3e]/g;Z[3]=function(a){return String(a).replace(Ld,Kd)};var Pd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Qd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b","\f":"\\f",
"\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Rd=function(a){return Qd[a]};Z[7]=function(a){return String(a).replace(Pd,Rd)};
Z[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Pd,Rd)+"'"}};
var Zd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,$d={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13",
"\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89",
"\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ae=function(a){return $d[a]};var be=/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;Z[14]=function(a){var b=
String(a);return be.test(b)?b.replace(Zd,ae):"#zSoyz"};Z[16]=function(a){return a};var ce=function(){this.f=[]};ce.prototype.set=function(a,b){this.f.push([a,b]);return this};ce.prototype.resolve=function(a,b){for(var d={},c=0;c<this.f.length;c++){var e=de(this.f[c][0],a,b),f=de(this.f[c][1],a,b);d[e]=f}return d};var ee=function(a){this.index=a};ee.prototype.resolve=function(a,b){var d=jb[this.index];if(d&&!b(d)){var c=d["6"];if(a){if(a.get(c))return;a.set(c,!0)}d=de(d,a,b);a&&a.set(c,!1);return ra(d)}};
for(var _M=function(a){return new ee(a)},ge=function(a){this.resolve=function(b,d){for(var c=[],e=0;e<a.length;e++)c.push(de(fe[a[e]],b,d));return c.join("")}},_T=function(a){return new ge(arguments)},ie=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=function(d,c){var e=de(a[0],d,c);if(a[0]instanceof ee&&b(8)&&b(16)){var f="gtm"+xa++;he.set(f,e);return'google_tag_manager["GTM-M7JM9N"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=Z[a[g]](e);return e}},_E=function(a,b){return new ie(arguments)},mb=function(a,b){return de(a,new qa,b)},de=function(a,b,d){var c=a;if(a instanceof ee||a instanceof
ce||a instanceof ge||a instanceof ie)return a.resolve(b,d);if(A(a))for(var c=[],e=0;e<a.length;e++)c[e]=de(a[e],b,d);else if(a&&"object"==typeof a){var c={},f;for(f in a)a.hasOwnProperty(f)&&(c[f]=de(a[f],b,d))}return c},je=function(a,b){var d=b[a],c=d;if(d instanceof ee||d instanceof ie||d instanceof ge)c=d;else if(A(d))for(var c=[],e=0;e<d.length;e++)c[e]=je(d[e],b);else if("object"==typeof d){var c=new ce,f;for(f in d)d.hasOwnProperty(f)&&c.set(b[f],je(d[f],b))}return c},$=function(a,b){for(var d=
b?b.split(","):[],c=0;c<d.length;c++){var e=d[c]=d[c].split(":");0==a&&(e[1]=fe[e[1]]);if(1==a)for(var f=ke(e[0]),e=d[c]={},g=0;g<f.length;g++){var h=le[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=ke(e[g]);3==a&&(d[c]=fe[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var m=0;m<e[g].length;m++)e[g][m]=fe[e[g][m]]}else e[g]=[];5==a&&(d[c]=e[0])}return d},ke=function(a){var b=[];if(!a)return b;for(var d=0,c=0;c<a.length&&d<me;d+=6,c++){var e=a&&a.charCodeAt(c)||65;if(65!=e){var f=
0,f=65<e&&90>=e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(d);2&f&&b.push(d+1);4&f&&b.push(d+2);8&f&&b.push(d+3);16&f&&b.push(d+4);32&f&&b.push(d+5)}}return b},me=73,ne=[_eq,_e,'event',_M(0),'xtcoreLoaded',_html,'WasaTracker and CallBack','\x3cscript type\x3d\x22text/gtmscript\x22\x3efunction myArrayCallback(b,c,a){\x22N\x22\x3d\x3da[7]||\x22T\x22\x3d\x3da[7]||\x22S\x22\x3d\x3da[7]||\x22A\x22\x3d\x3da[7]?(a[8]\x3da[7],a[7]\x3d\x22\x22):\x22\x22!\x3da[7]\x26\x26\x22N\x22!\x3da[7]\x26\x26\x22T\x22!\x3da[7]\x26\x26\x22S\x22!\x3da[7]\x26\x26\x22A\x22!\x3da[7]\x26\x26(a[7]\x3d\x22::\x22+a[7]);\x22\x22\x3d\x3da[1]\x26\x26(a[1]\x3d\x22clic\x22);\x22\x22!\x3da[6]\x26\x26(a[6]\x3d\x22::\x22+a[6]);\x22\x22!\x3da[5]\x26\x26(a[5]\x3d\x22::\x22+a[5]);\x22\x22\x3d\x3da[3]\x26\x26(a[3]\x3d0);_gaq.push([\x22wa._trackEvent\x22,a[0],a[1],a[2],parseInt(a[3])]);\x22undefined\x22!\x3dtypeof ',_v,'GA_localUA',1,_E(_M(1),8,16),'\x26\x260\x3c','.replace(/^\\s*/,\x22\x22).replace(/\\s*$/,\x22\x22).length\x26\x26_gaq.push([\x22wb._trackEvent\x22,a[0],a[1],a[2],parseInt(a[3])]);xt_med(\x22C\x22,\n','XT_xtn2',_E(_M(2),8,16),',a[4]+a[5]+a[6]+a[7],a[8])}function wasaTrackerCustomInit(b){b.setArrayCallback(myArrayCallback)}window.wasaTrackerInitFunc\x3dwasaTrackerCustomInit;var wasaTracker\x3dwasaTracker||{};\n(function(){var b\x3dwasaTracker\x3d{init:function(){b.jRoot\x3db.jRoot||$(\x22body\x22);b.targetedEvents\x3d[\x22click\x22,\x22mouseenter\x22,\x22mouseleave\x22];b.targetedNodes\x3d\x22button li input label div span dt select form a\x22.split(\x22 \x22);b.targetedPrefixes\x3d[[\x22data-track-event\x22,b.eventRouter],[\x22data-track-array\x22,b.arrayRouter]];b.cbEventFunc\x3dnull;b.cbEventData\x3dnull;b.cbArrayFunc\x3dnull;b.cbArrayData\x3dnull;for(var c\x3d0;c\x3cb.targetedPrefixes.length;++c)for(var a\x3d0;a\x3cb.targetedEvents.length;++a)for(var e\x3d0;e\x3cb.targetedNodes.length;++e)targetedAttribute\x3d\nb.targetedNodes[e]+\x22[\x22+b.targetedPrefixes[c][0]+\x22-\x22+b.targetedEvents[a]+\x22]\x22,b.log(\x22binding \x27\x22+b.targetedEvents[a]+\x22\x27 to \x27\x22+targetedAttribute+\x22\x27\x22),b.jRoot.delegate(targetedAttribute,b.targetedEvents[a],b.targetedPrefixes[c][1]);\x22function\x22\x3d\x3dtypeof window.wasaTrackerInitFunc\x26\x26window.wasaTrackerInitFunc(b)},log:function(b){},setCallback:function(c,a){b.cbEventFunc\x3dc;b.cbEventData\x3da},setArrayCallback:function(c,a){b.cbArrayFunc\x3dc;b.cbArrayData\x3da},eventElemsToString:function(b){var a;if(5!\x3db.length)return\x22invalid eventElems array\x22;\na\x3dnull!\x3db[0]?b[0]:\x22null\x22;a\x3da+\x22, \x22+(null!\x3db[1]?b[1]:\x22null\x22);a+\x3d\x22, \x22;a+\x3dnull!\x3db[2]?b[2]:\x22null\x22;a+\x3d\x22, \x22;a+\x3dnull!\x3db[3]?b[3]:\x22null\x22;a+\x3d\x22, \x22;return a+\x3dnull!\x3db[4]?b[4]:\x22null\x22},nodeToString:function(b){var a\x3d\x22\x22;if(null\x3d\x3db||null\x3d\x3db.tagName)return a;var a\x3db.tagName,e\x3db.getAttribute(\x22id\x22);e\x26\x26(e\x3de.replace(/^\\s+|\\s+$/g,\x22\x22),0\x3ce.length\x26\x26(a\x3da+\x22#\x22+e));b\x3db.getAttribute(\x22class\x22);if(null!\x3db)for(b\x3db.replace(/^\\s+|\\s+$/g,\x22\x22).replace(/\\s+/g,\x22 \x22),klassElems\x3db.split(/\\s/),loop\x3d0;loop\x3cklassElems.length;++loop)a+\x3d\x22.\x22+klassElems[loop];\nreturn a},textCleaner:function(b){return b?unescape(b).replace(/[\\r\\n]+/g,\x22 \x22).replace(/\\*/g,\x22(star)\x22).replace(/\\\x27/g,\x22(quote)\x22).replace(/\\s+/g,\x22 \x22).replace(/^\\s+/g,\x22\x22).replace(/\\s+$/g,\x22\x22):\x22\x22},eventRouter:function(c){var a\x3d\x22\x22,e\x3dthis.tagName;if($(this).attr(\x22data-track-event-\x22+c.type)){for(var a\x3d$(this).attr(\x22data-track-event-\x22+c.type),d\x3da.split(/,/),a\x3d[null,null,null,null,null],f\x3d0;f\x3cd.length;++f)d[f]\x3dd[f].replace(/^\\s+|\\s+$/g,\x22\x22);if(2\x3ed.length)b.log(\x22invalid argument number in filter\x22);else{a[0]\x3d\nd[0];a[1]\x3dd[1];2\x3cd.length\x26\x26(a[2]\x3dd[2]);3\x3cd.length\x26\x26d[3].match(/^\\d+$/)\x26\x26(a[3]\x3dparseInt(d[3],0));4\x3cd.length\x26\x26(d[4].match(/^false$/i)||d[4].match(/^true$/i))\x26\x26(d[4].match(/^false$/i)?a[4]\x3d!1:d[4].match(/^true$/i)\x26\x26(a[4]\x3d!0));local_href\x3d$(this).attr(\x22href\x22)?$(this).attr(\x22href\x22):\x22missing :href\x22;local_alt\x3d$(this).attr(\x22alt\x22)?$(this).attr(\x22alt\x22):\x22missing :alt\x22;local_title\x3d$(this).attr(\x22title\x22)?$(this).attr(\x22title\x22):\x22missing :title\x22;local_id\x3d$(this).attr(\x22id\x22)?$(this).attr(\x22id\x22):\x22missing :id\x22;local_path_array\x3d\n$(this).parents().map(function(){return b.nodeToString(this)}).get().reverse();local_path_array.push(b.nodeToString(this));local_path\x3dlocal_path_array.join(\x22 \\x3e \x22).toLowerCase();local_event\x3dc.type;local_text\x3db.textCleaner($(this).text()?$(this).text():\x22missing :text\x22);for(d\x3d0;3\x3ed;++d)a[d]\x3da[d].replace(/:href/,local_href).replace(/:path/,local_path).replace(/:event/,local_event).replace(/:alt/,local_alt).replace(/:title/,local_title).replace(/:text/,local_text).replace(/:id/,local_id);b.log(\x22element \x22+\ne+\x22 catches  \x27\x22+c.type+\x22\x27 with \x27\x22+b.eventElemsToString(a)+\x22\x27\x22);\x22click\x22!\x3dc.type||\x22A\x22!\x3de||$(this).attr(\x22target\x22)\x26\x26\x22_blank\x22\x3d\x3d$(this).attr(\x22target\x22)?\x22submit\x22\x3d\x3dc?b.log(\x22submit event not handled at the moment\x22):(b.log(\x22directEvent called, no delay\x22),b.directEvent(a)):(c.preventDefault(),newLocation\x3d$(this).attr(\x22href\x22),b.log(\x22directEvent called, document.location delayed\x22),b.directEvent(a),setTimeout(function(){document.location\x3dnewLocation},200))}}},arrayRouter:function(c){var a\x3d\x22\x22,e\x3dthis.tagName;b.log(\x22arrayRouter() called\x22);\nif(null\x3d\x3db.cbArrayFunc)b.log(\x22unable to handle stuff without callback !\x22);else if($(this).attr(\x22data-track-array-\x22+c.type)){for(var a\x3d$(this).attr(\x22data-track-array-\x22+c.type),a\x3da.split(/,/),d\x3d0;d\x3ca.length;++d)a[d]\x3da[d].replace(/^\\s+|\\s+$/g,\x22\x22);local_href\x3d$(this).attr(\x22href\x22)?$(this).attr(\x22href\x22):\x22missing :href\x22;local_alt\x3d$(this).attr(\x22alt\x22)?$(this).attr(\x22alt\x22):\x22missing :alt\x22;local_title\x3d$(this).attr(\x22title\x22)?$(this).attr(\x22title\x22):\x22missing :title\x22;local_id\x3d$(this).attr(\x22id\x22)?$(this).attr(\x22id\x22):\x22missing :id\x22;\nlocal_path_array\x3d$(this).parents().map(function(){return b.nodeToString(this)}).get().reverse();local_path_array.push(b.nodeToString(this));local_path\x3dlocal_path_array.join(\x22 \\x3e \x22).toLowerCase();local_event\x3dc.type;local_text\x3db.textCleaner($(this).text()?$(this).text():\x22missing :text\x22);for(d\x3d0;d\x3ca.length;++d)a[d]\x3da[d].replace(/:href/,local_href).replace(/:path/,local_path).replace(/:event/,local_event).replace(/:alt/,local_alt).replace(/:title/,local_title).replace(/:text/,local_text).replace(/:id/,\nlocal_id);b.log(\x22element \x22+e+\x22 catches  \x27\x22+c.type+\x22\x27 with \x27\x22+a.join(\x22, \x22)+\x22\x27\x22);\x22click\x22!\x3dc.type||\x22A\x22!\x3de||$(this).attr(\x22target\x22)\x26\x26\x22_blank\x22\x3d\x3d$(this).attr(\x22target\x22)?\x22submit\x22\x3d\x3dc?b.log(\x22submit event not handled at the moment\x22):(b.log(\x22directEvent called, no delay\x22),b.cbArrayFunc(\x22array\x22,b.cbArrayData,a)):(c.preventDefault(),newLocation\x3d$(this).attr(\x22href\x22),b.log(\x22directEvent called, document.location delayed\x22),b.cbArrayFunc(\x22array\x22,b.cbArrayData,a),setTimeout(function(){document.location\x3dnewLocation},200))}},\ndirectEvent:function(c){b.trackEvent(c)},trackEvent:function(c){c.unshift(\x22_trackEvent\x22);\x22function\x22\x3d\x3dtypeof b.cbEventFunc?b.cbEventFunc(\x22event\x22,b.cbEventData,c):b.push(c)},push:function(b){void 0!\x3dtypeof _gaq\x26\x26_gaq.push(b)}};$(document).ready(function(){b.init()})})();\x3c/script\x3e',_T(7,11,12,11,13,15,16),4,_re,_u,'url',_M(3),'.*','_event',_M(4),'gtm.js','Marqueur standard XITI','\x3cscript type\x3d\x22text/gtmscript\x22\x3extnv\x3ddocument;xtsd\x3d\x22','XT_xtsd',_E(_M(5),7),'\x22;xtsite\x3d\x22','XT_xtsite',_E(_M(6),7),'\x22;xtn2\x3d\x22',_E(_M(2),7),'\x22;xtpage\x3d\x22','XT_xtpage',_E(_M(7),7),'\x22;xt_an\x3dxt_multc\x3d\x22\x22;xt_ac\x3d\x22boolean\x22\x3d\x3dtypeof ','isLogged',_E(_M(8),8,16),'\x26\x26','?\x221\x22:\x22\x22;window.xtparam\x3dnull!\x3dwindow.xtparam?window.xtparam+(\x22\\x26ac\\x3d\x22+xt_ac+\x22\\x26an\\x3d\x22+xt_an+xt_multc):\x22\\x26ac\\x3d\x22+xt_ac+\x22\\x26an\\x3d\x22+xt_an+xt_multc;\x3c/script\x3e\n\x3cscript type\x3d\x22text/gtmscript\x22 data-gtmsrc\x3d\x22','XT_xtcore',_E(_M(9),14,3),'\x22\x3e\x3c/script\x3e\n\x3cscript type\x3d\x22text/gtmscript\x22\x3edataLayer.push({event:\x22xtcoreLoaded\x22});\x3c/script\x3e',_T(28,30,31,33,34,35,36,38,39,41,42,41,43,45,46),3,'gatcLoaded','GA_trackPageview','\x3cscript type\x3d\x22text/gtmscript\x22\x3eGA_trackPageview(_gaq);\x3c/script\x3e',2,'GATC Global','\x3cscript type\x3d\x22text/gtmscript\x22\x3efunction GA_trackPageview(a,d){if(\x22undefined\x22!\x3dtypeof ','error',_E(_M(10),8,16),'\x26\x26\x22404\x22\x3d\x3d','){var b\x3ddocument.location.pathname,c\x3ddocument.referrer;0\x3d\x3db.length\x26\x26(b\x3d\x22nolocation\x22);0\x3d\x3dc.length\x26\x26(c\x3d\x22noreferrer\x22);a.push([\x22wa._trackPageview\x22,\x22/vpv/404/\x22+b.replace(/\\//g,\x22_\x22)+\x22/\x22+c.replace(/https*:\\/\\//i,\x22\x22).replace(/\\//g,\x22_\x22)]);\x22undefined\x22!\x3dtypeof ','.replace(/^\\s*/,\x22\x22).replace(/\\s*$/,\x22\x22).length\x26\x26a.push([\x22wb._trackPageview\x22,\x22/vpv/404/\x22+b.replace(/\\//g,\n\x22_\x22)+\x22/\x22+c.replace(/https*:\\/\\//i,\x22\x22).replace(/\\//g,\x22_\x22)])}else\x22undefined\x22!\x3dtypeof ','\x26\x26\x22500\x22\x3d\x3d','?(b\x3ddocument.location.pathname,c\x3ddocument.referrer,0\x3d\x3db.length\x26\x26(b\x3d\x22nolocation\x22),0\x3d\x3dc.length\x26\x26(c\x3d\x22noreferrer\x22),a.push([\x22wa._trackPageview\x22,\x22/vpv/500/\x22+b.replace(/\\//g,\x22_\x22)+\x22/\x22+c.replace(/https*:\\/\\//i,\x22\x22).replace(/\\//g,\x22_\x22)]),\x22undefined\x22!\x3dtypeof ','.replace(/^\\s*/,\x22\x22).replace(/\\s*$/,\x22\x22).length\x26\x26a.push([\x22wb._trackPageview\x22,\n\x22/vpv/500/\x22+b.replace(/\\//g,\x22_\x22)+\x22/\x22+c.replace(/https*:\\/\\//i,\x22\x22).replace(/\\//g,\x22_\x22)])):\x22undefined\x22\x3d\x3dtypeof d?(a.push([\x22wa._trackPageview\x22]),\x22undefined\x22!\x3dtypeof ','.replace(/^\\s*/,\x22\x22).replace(/\\s*$/,\x22\x22).length\x26\x26a.push([\x22wb._trackPageview\x22])):(a.push([\x22wa._trackPageview\x22,d]),\x22undefined\x22!\x3dtypeof ','.replace(/^\\s*/,\x22\x22).replace(/\\s*$/,\x22\x22).length\x26\x26a.push([\x22wb._trackPageview\x22,d]))}var _gaq\x3d_gaq||[];\n\x22undefined\x22!\x3dtypeof dataLayer\x26\x26\x22undefined\x22!\x3dtypeof dataLayer[0]\x26\x26\x22undefined\x22!\x3dtypeof ','GA_globalUA',_E(_M(11),8,16),'\x26\x26(_gaq.push([\x22wa._setAccount\x22,',']),\x22boolean\x22\x3d\x3dtypeof ','GA_crossDomain',_E(_M(12),8,16),'\x26\x26\x22undefined\x22!\x3dtypeof ','?_gaq.push([\x22wa._setAllowLinker\x22,',']):_gaq.push([\x22wa._setAllowLinker\x22,!0]),\x22undefined\x22!\x3dtypeof ','GA_cookieTimeout',_E(_M(13),8,16),'?_gaq.push([\x22wa._setCampaignCookieTimeout\x22,',']):_gaq.push([\x22wa._setCampaignCookieTimeout\x22,2592E6]),\n\x22undefined\x22!\x3dtypeof ','GA_globalDomain',_E(_M(14),8,16),'\x26\x26_gaq.push([\x22wa._setDomainName\x22,','\x26\x26!0\x3d\x3d\x3d','\x26\x26_gaq.push([\x22wa._setCustomVar\x22,2,\x22Status\x22,\x22connected\x22,2]),\x22undefined\x22!\x3dtypeof ','.replace(/^\\s*/,\x22\x22).replace(/\\s*$/,\x22\x22).length\x26\x26(_gaq.push([\x22wb._setAccount\x22,','?\n_gaq.push([\x22wb._setAllowLinker\x22,',']):_gaq.push([\x22wb._setAllowLinker\x22,!0]),\x22undefined\x22!\x3dtypeof ','?_gaq.push([\x22wb._setCampaignCookieTimeout\x22,',']):_gaq.push([\x22wb._setCampaignCookieTimeout\x22,2592E6]),\x22undefined\x22!\x3dtypeof ','GA_localDomain',_E(_M(15),8,16),'\x26\x26_gaq.push([\x22wb._setDomainName\x22,','\x26\x26_gaq.push([\x22wb._setCustomVar\x22,2,\n\x22Status\x22,\x22connected\x22,2])),function(){var a\x3ddocument.createElement(\x22script\x22);a.type\x3d\x22text/javascript\x22;a.async\x3d!0;a.src\x3d(\x22https:\x22\x3d\x3ddocument.location.protocol?\x22https://ssl\x22:\x22http://www\x22)+\x22.google-analytics.com/ga.js\x22;var d\x3ddocument.getElementsByTagName(\x22script\x22)[0];d.parentNode.insertBefore(a,d)}(),dataLayer.push({event:\x22gatcLoaded\x22}));\x3c/script\x3e',_T(54,56,57,56,58,11,12,11,59,56,60,56,61,11,12,11,62,11,12,11,63,11,12,11,64,66,67,66,68,70,71,70,72,70,73,75,76,75,77,79,80,79,68,41,71,41,81,41,82,11,12,11,83,11,68,70,71,70,84,70,85,75,86,75,87,89,90,89,68,41,71,41,81,41,91),_f,'referrer','url path','path','url hostname','host','element url','gtm.elementUrl','element id','gtm.elementId','element target','gtm.elementTarget','element','gtm.element','element classes','gtm.elementClasses','GA_pageName'],oe=[],pe=0;pe<ne.length;pe++)oe[pe]=je(pe,ne);var fe=oe,le=$(0,"4:0,4:1,6:2,0:3,1:4,4:5,6:6,4:8,6:9,7:9,3:10,6:14,7:14,5:17,8:18,4:19,4:20,6:21,0:22,1:23,6:24,0:25,1:26,6:27,6:29,7:29,6:32,7:32,6:37,7:37,6:40,7:40,6:44,7:44,5:47,8:48,1:49,6:50,5:51,8:52,6:53,6:55,7:55,6:65,7:65,6:69,7:69,6:74,7:74,6:78,7:78,6:88,7:88,5:92,8:10,4:93,6:94,6:95,2:96,6:97,2:98,6:99,7:100,6:101,7:102,6:103,7:104,6:105,7:106,6:107,7:108,6:109,7:109"),jb=$(1,"G,Ae,AyB,AAw,CAAE,ASAAD,ASAAM,ASAAw,ASAAAD,ASAAAM,ASAAAAgB,ASAAAAAG,ASAAAAAY,ASAAAAAgB,ASAAAAAAG,ASAAAAAAY,AAAAAAAAAG,AAQAAAAAAY,AAQAAAAAAgB,ACAAAAAAAAG,ACAAAAAAAAY,ACAAAAAAAAgB,ACAAAAAAAAAG,ACAAAAAAAAAY,ASAAAAAAAAAgB"),he=new qa,qe=$(1,"Z,AAID,BAAY,JAAAAAB"),Y=$(1,"gBG,gAAgAw,gAAAAAO,gAAAAAQAgB"),U=$(2,"B:B::,G:K::,I:E::"),Yb=$(4,":,:,:");var nb=function(){};var Be=function(){var a=this;this.v=!1;this.B=[];this.O=[];this.F=function(){a.v||wa(a.B);a.v=!0};this.G=function(){a.v||wa(a.O);a.v=!0};this.j=ja},Ce=function(){this.k=[];this.Z={};this.P=[];this.p=0};Ce.prototype.addListener=function(a){this.P.push(a)};var De=function(a,b,d,c){if(!d.v){a.k[b]=d;void 0!==c&&(a.Z[b]=c);a.p++;var e=function(){0<a.p&&a.p--;0<a.p||wa(a.P)};d.B.push(e);d.O.push(e)}};var Ee=function(){var a=[];return function(b,d){if(void 0===a[b]){var c=qe[b]&&mb(qe[b],d);a[b]=[c&&ra(c),c]}return a[b]}},Fe=function(a,b){for(var d=b[0],c=0;c<d.length;c++)if(!a.d(d[c],a.c)[0])return!1;for(var e=b[2],c=0;c<e.length;c++)if(a.d(e[c],a.c)[0])return!1;return!0},Ge=function(a,b){return function(){a["9"]=b.F;a["10"]=b.G;ra(a,b.F,b.G)}},ab=function(a,b,d){R("tagTypeBlacklist");for(var c={name:a,C:b||ja,r:ke(),s:ke(),d:Ee(),c:hb()},e=[],f=0;f<U.length;f++)if(Fe(c,
U[f])){e[f]=!0;for(var g=c,h=U[f],m=h[1],p=0;p<m.length;p++)g.r[m[p]]=!0;for(var l=h[3],p=0;p<l.length;p++)g.s[l[p]]=!0}else e[f]=!1;var q=[];for(var r=0;r<me;r++)if(c.r[r]&&!c.s[r])if(c.c(Y[r])){}else{q[r]=mb(Y[r],c.c);}c.t=
q;for(var t=new Ce,B=0;B<me;B++)if(c.r[B]&&!c.s[B]&&!c.c(Y[B])){var G=c.t[B],w=new Be;w.B.push($c(G));w.O.push(ad(G));w.j=Ge(G,w);De(t,B,w,G[""])}t.addListener(c.C);for(var Q=[],v=0;v<t.k.length;v++){var I=t.k[v];if(I){var C=t.Z[v];void 0!==C?C!=v&&t.k[C]&&t.k[C].B.push(I.j):Q.push(v)}}for(v=0;v<Q.length;v++)t.k[Q[v]].j();0<t.p||wa(t.P);d&&x(d)&&d({passingRules:e,resolvedTags:c.t});return 0<c.t.length};var He={macro:function(a){if(he.contains(a))return he.get(a)}};He.dataLayer=eb;He.Ea=function(){var a=H.google_tag_manager;a||(a=H.google_tag_manager={});a["GTM-M7JM9N"]||(a["GTM-M7JM9N"]=He)};He.Ea();
(function(){var a=L("dataLayer",[],!1),b=L("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};Ga.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ta.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var d=a.push;a.push=function(){var b=[].slice.call(arguments,0);d.apply(a,b);for(bb.push.apply(bb,b);300<this.length;)this.shift();return qb()};bb.push.apply(bb,a.slice(0));P(qb)})();
if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)Ha();else{O(K,"DOMContentLoaded",Ha);O(K,"readystatechange",Ha);if(K.createEventObject&&K.documentElement.doScroll){var Ie=!0;try{Ie=!H.frameElement}catch(Ke){}Ie&&Ja()}O(H,"load",Ha)}"complete"===K.readyState?Ua():O(H,"load",Ua);var _vs="res_ts:1391694887025000,srv_cl:75936852,ds:live,cv:2";
})()
