!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([
/*!**********************************!*\
  !*** ./openwith.js + 17 modules ***!
  \**********************************/
/*! exports provided: default */
/*! all exports used */function(e,t,n){"use strict";n.r(t);const o=new Set(["AT","CF","CM","CT","DS","ET","FI","IT","FL","GC","GD","GR","IP","ME","MG","ML","MP","NN","NV","OP","PD","AR","RF","RC","RK","RO","SG","ST","SM","VP","WA","SL","5G","AU","LS","ML_MATLAB_DRIVE","DM","SH","LD","SS","MS","PS","RP","SI","SD","SO","SF","ZC","UV","WL"]);function i(e){return(e=e.replace(/\/$/,"")).split("/").pop().split("#")[0].split("?")[0]}function r(e){var t;if(e.initializationCode&&-1!==e.initializationCode.indexOf("openExample")){var n=e.initializationCode.match(/\((.*?)\)/);n&&(t=n[1].replace(/['"]+/g,"").split("/")[1]+".mlx")}return t}const a=["width","height","minHeight","maxHeight","overflow"];function s(e,t){a.forEach((function(n){e.style[n]=t[n]}))}function c(e){const t=function(e){let t={};return a.forEach((function(n){t[n]=e.style[n]})),t}(e);e.setAttribute("data-size-props",JSON.stringify(t))}function d(e){const t=JSON.parse(e.getAttribute("data-size-props"));t&&s(e,t),e.removeAttribute("data-size-props")}function l(){const e=document.documentElement,t=document.body,n=function(e,t){const n=(window.innerHeight>0?window.innerHeight:window.screen.height)+"px";return{width:e+"px",height:n,minHeight:n,maxHeight:n,overflow:"hidden"}}(window.innerWidth>0?window.innerWidth:window.screen.width);s(e,n),s(t,n)}function u(){const e=document.documentElement,t=document.body;d(e),d(t)}function m(e,t){return new Promise((function(n,o){e.ready?(e.onStatus=function(e){n({status:e})},w(e,t),e.handshakeRequired&&setTimeout((function(){!0!==e.status&&o(new Error)}),100)):o(new Error)}))}function p(e){return new Promise((function(t,n){e.ready?t():e.onReady=function(e){e?t():n(new Error)}}))}function w(e,t,n){e.postContainerMessage(t,n)}function f(e){return function(e){const t=window.addEventListener?"addEventListener":"attachEvent",n=window.addEventListener?"removeEventListener":"detachEvent",o="attachEvent"===t?"onmessage":"message";return window[t](o,e,!1),{remove:function(){window[n](o,e)}}}(function(e){return function(t){if(t.origin!==e.getOrigin())return;let n={};try{n=JSON.parse(t.data)}catch(e){return}switch(n.message){case"ready":e.ready=!0,e.onReady&&(e.onReady(n.data),e.onReady=null);break;case"status":e.onStatus&&(e.onStatus(n.data),e.onStatus=null);break;case"close":e.hide();break;case"disconnect":e.cleanup(),e.destroy();break;case"reload":!function(e,t){let n=e.containerOpts;e.cleanup(),e.destroy();let o=E(n);o.show(),p(o).then((function(){m(o,t)}))}(e,n.data)}}}(e))}function h(e){return e.port&&("https:"===e.protocol&&"443"!==e.port||"http:"===e.protocol&&"80"!==e.port)?e.protocol+"//"+e.hostname+":"+e.port:e.protocol+"//"+e.hostname}const g={ipad:/iPad/.test(navigator.userAgent)&&!document.MSStream},y=g.ipad,b=!g.ipad,v=g.ipad;function k(e,t){var n,o,i,r,a,s,c=(i=window.innerWidth,r=window.innerHeight,a=1,s=1,y?{w:0,h:0}:(i<1e3?a=4:i<1200&&(a=2),r<1e3?s=4:r<1200&&(s=2),{w:Math.floor(10/a),h:Math.floor(10/s)}));t.style.top=c.h+"%",t.style.left=c.w+"%",b?(e.style.width="100%",e.style.height="100%",t.style.width=100-2*c.w+"%",t.style.height=100-2*c.h+"%"):(n=window.innerWidth>0?window.innerWidth:window.screen.width,o=window.innerHeight>0?window.innerHeight:window.screen.height,e.style.width=n+"px",e.style.height=o+"px",t.style.width=n+"px",t.style.height=(n>o?o:.66*o)+"px")}function A(e){let t=e.source,n=e.node,o=document.createDocumentFragment(),i=document.createElement("div"),r=document.createElement("div"),a=document.createElement("iframe"),s=document.createElement("button");s.innerText="x",a.setAttribute("src",t),a.setAttribute("data-openwith-iframe","openwithIframe");let d=e||{};r.appendChild(s),r.appendChild(a),i.appendChild(r),o.appendChild(i);let m=function(){d.CONSTRAIN_OWNER_DOCUMENT&&u(),i.style.display="none",r.style.display="none"},p=function(e){return e.preventDefault(),!1},w=(f=m,function(e){("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&f()});var f;let g=function(e,t){return function(n){e&&"none"!==e.style.display&&(k(e,t),v&&l())}}(i,r),y=function(e){let t=window.innerWidth>window.innerHeight;return function(){let n=window.innerWidth>window.innerHeight;n!==t&&(t=n,e.call())}}(g),b=function(){!1!==d.closeOnBackgroundClick&&(i.addEventListener("click",m),r.addEventListener("click",m)),s.addEventListener("click",m),document.addEventListener("keydown",w),d.FLUID_CONTAINER_WIDTH||(window.DeviceOrientationEvent?window.addEventListener("deviceorientation",y,!1):window.addEventListener("orientationchange",g))},A=function(){i.addEventListener("dragover",p),i.addEventListener("drop",p)};return function(e,t,n,o){e.style.top="0",e.style.left="0",e.style.display="none",e.style.position="fixed",e.style.backgroundColor="rgba(0,0,0,0.75)",e.style.zIndex="1036",t.style.display="none",t.style.position="absolute",t.style.backgroundColor="white",t.style.border="2px solid white",t.style.zIndex="1002",t.style.overflow="hidden",t.style.borderRadius="5px",n.style.height="100%",n.style.width="100%",n.style.position="absolute",n.style.border="0px",n.style.left="0px",n.style.right="0px",o.style.top="5px",o.style.right="6px",o.style.position="absolute",o.style.zIndex="1",o.style.margin="0",o.style.lineHeight="14px",o.style.padding="0px 4px",k(e,t)}(i,r,a,s),b(),A(),e.testMode||n.appendChild(o),{show:function(){d.CONSTRAIN_OWNER_DOCUMENT&&(function(){const e=document.documentElement,t=document.body;c(e),c(t)}(),l()),k(i,r),i.style.display="block",r.style.display="block"},hide:m,destroy:function(){n.removeChild(i),i.removeEventListener("click",m),r.removeEventListener("click",m),document.removeEventListener("keydown",w),d.FLUID_CONTAINER_WIDTH||(window.DeviceOrientationEvent?window.removeEventListener("deviceorientation",y):window.removeEventListener("orientationchange",g)),d.CONSTRAIN_OWNER_DOCUMENT&&u()},setSource:function(e){a.src=e},getSource:function(){return a.src},postContainerMessage:function(e,t){t=void 0===t?"openWithMessage":t,a.contentWindow.postMessage(t+":"+JSON.stringify(e),"*")},remove:function(){r.removeChild(a),r.removeChild(s)},insert:function(e){a.setAttribute("src",e),a.setAttribute("data-openwith-iframe","openwithIframe"),r.appendChild(s),r.appendChild(a),b(),A()},getOrigin:function(e){var t=document.createElement("a");return t.href=a.src,t.origin?t.origin:h(t)},isClosed:function(){return!(r.getElementsByTagName("iframe").length>0)}}}let x={};function E(e){let t=x[e.source];return(e.forceContainerCreation||!t||t.isClosed())&&(t=function(e){let t,n;switch(e.containerType){case"embedded":default:t=A(e);break;case"external":t=function(e){let t,n,o;return t=e.source,n=e.windowName,e.testMode||(navigator.userAgent.indexOf("Trident/")>-1||navigator.userAgent.indexOf("Edge/")>-1?(o=window.open("https://drive-motw-integ.matlab.com",n),o.location.href=t,o?(console.log("It is not null"),console.log(o)):console.log("It is still null")):o=window.open(t,n)),{show:function(){o&&o.focus()},hide:function(){o&&o.close()},destroy:function(){o&&o.close()},setSource:function(e){o&&(o.location.href=e)},getSource:function(){return t},postContainerMessage:function(e,t){o&&(t=void 0===t?"openWithMessage":t,o.postMessage(t+":"+JSON.stringify(e),"*"))},getOrigin:function(){var e=document.createElement("a");return e.href=t,e.origin?e.origin:h(e)},isClosed:function(){if(o)return o.closed}}}(e),t.handshakeRequired=!0}return x[e.source]=t,t.ready=!1,t.containerOpts=e,n=f(t),t.cleanup=function(){n.remove(),delete x[e.source]},t}(e)),t}function M(e){const t=e.targetViewer?e.targetViewer:"LIVE_EDITOR";let n={targetInformation:{editor:{activeEditorPath:C(e)},targetViewer:t,errMsg:e.errMsg},workerConfiguration:{},udcLogging:{artifactId:O(e)}};n.repository=e.repository,n.filesToAdd=e.files,n.workingDirectory=L(e),n.initializationCode=function(e){switch(e.repository){case"MATLAB Examples":"dlextra"===e.coordinates.component?e.initializationCode=e.initializationCode?e.initializationCode:"clear;alexnet = alexnet;":e.initializationCode=e.initializationCode?e.initializationCode:"clear;openExample('"+e.coordinates.component+"/"+e.coordinates.exampleId+"');";break;case"MLDO":var t="/MATLAB Drive"+e.coordinates.path;e.initializationCode=e.initializationCode?e.initializationCode:"if isfile('"+t+"')open('"+t+"');cd(fileparts('"+t+"'));elseif isfolder('"+t+"')cd('"+t+"');end";break;case"MATLAB WebApp":e.initializationCode=e.initializationCode?e.initializationCode:"connector.internal.loadSingletonStandaloneWebApp('"+L(e)+"/"+e.coordinates.webAppName+".mlapp', '"+e.coordinates.webAppName+"')"}return e.initializationCode&&e.initializationCode.lastIndexOf(";")!==e.initializationCode.length-1?e.initializationCode+";":e.initializationCode}(e);const o=new Promise((function(t){t(e.coordinates)}));return new Promise((function(e,t){o.then((function(o){o.fault?(n.fault="errorLoadingContentMessage",t(n)):(n.targetInformation.bufferedEditorContent=o.opcPackage,e(n))}))}))}function L(e){const t=e.workingDirectory,n=e.repository;let o="";return"MLDO"===n?o=void 0:e.workingDirectory?o="/MATLAB Drive/Examples/"+e.workingDirectory:"Standalone Artifact"!==n&&"MATLAB WebApp"!==n||t&&""!==t&&(o="/MATLAB Drive/"+t),o}function C(e){var t="/Untitled.mlx";if("Standalone Artifact"===e.repository){if(e.coordinates.artifactLocation)return"/"+i(e.coordinates.artifactLocation);var n=r(e);t=n?"/"+n:t}return t}function O(e){return"MATLAB Examples"===e.repository?e.coordinates.component+"/"+e.coordinates.exampleId:"MLDO"===e.repository?e.coordinates.path:"Standalone Artifact"===e.repository?e.coordinates.artifactLocation?e.coordinates.artifactLocation:r(e)||"Untitled.mlx":"MATLAB WebApp"===e.repository?e.coordinates.webAppName:void 0}function S(e){this.name="InvalidInputError",this.message=e}function T(){this.name="UnauthorizedSourceError",this.message="Repository was not recognized"}S.prototype.toString=function(){return this.name+': "'+this.message+'"'},T.prototype.toString=function(){return this.name+': "'+this.message+'"'};var I=function(){},N=function(){this.opcPackage=void 0},P=function(){this.component=void 0,this.exampleId=void 0},D=function(){this.webAppName=void 0},z=function(){this.path=void 0,this.gdsUrl=void 0};const R=["MATLAB Examples","Standalone Artifact","MLDO","MATLAB WebApp"];function W(e){var t,n=[];if(t=e.repository,R.indexOf(t)>=0){switch(e.repository){case"MATLAB Examples":n=B(new P,n,!1);break;case"Standalone Artifact":n=e.opcPackage?B(new N,n,!1):B(new I,n,!1);break;case"MLDO":n=B(new z,n,!1);break;case"MATLAB WebApp":n=B(new D,n,!1)}return function(e,t){var n=[];return n=B(t,n,!0),e.every((function(e){return n.indexOf(e)>=0}))}(n,e)}throw new T}function B(e,t,n){if("object"==typeof e)for(var o in e)n?e[o]&&t.push(o):t.push(o),B(e[o],t,n);return t}function _(){switch(window.location.hostname){case"matlab.mathworks.com":case"drive.matlab.com":case"www.mathworks.com":default:return"https://matlab.mathworks.com";case"matlab-prequal.mathworks.com":return"https://matlab-prequal.mathworks.com";case"home-dev.mathworks.com":return"https://home-dev.mathworks.com";case"nightlyplus-matlab.mathworks.com":return"https://nightlyplus-matlab.mathworks.com";case"nightly-matlab.mathworks.com":case"drive-motw-integ.matlab.com":return"https://nightly-matlab.mathworks.com";case"bash-matlab.mathworks.com":return"https://bash-matlab.mathworks.com";case"bmain-matlab.mathworks.com":return"https://bmain-matlab.mathworks.com";case"matlab-integ1.mathworks.com":case"drive-integ1.matlab.com":case"www-integ1.mathworks.com":return"https://matlab-integ1.mathworks.com";case"matlab-integ2.mathworks.com":case"drive-integ2.matlab.com":case"www-integ2.mathworks.com":return"https://matlab-integ2.mathworks.com";case"matlab-integ3.mathworks.com":case"drive-integ3.matlab.com":case"www-integ3.mathworks.com":return"https://matlab-integ3.mathworks.com"}}let U,H=null;function V(e,t){if("function"!=typeof t)return!0;t(!0)}function j(e){var t={source:function(){switch(window.location.hostname){case"matlab.mathworks.com":case"drive.matlab.com":case"www.mathworks.com":default:return"https://matlab.mathworks.com/index-le.html";case"matlab-prequal.mathworks.com":return"https://matlab-prequal.mathworks.com/index-length.html";case"home-dev.mathworks.com":return"https://home-dev.mathworks.com/index-le.html";case"nightly-matlab.mathworks.com":case"drive-motw-integ.matlab.com":case"nightlyplus-matlab.mathworks.com":case"bash-matlab.mathworks.com":case"bmain-matlab.mathworks.com":case"matlab-integ1.mathworks.com":case"drive-integ1.matlab.com":case"www-integ1.mathworks.com":case"matlab-integ2.mathworks.com":case"drive-integ2.matlab.com":case"www-integ2.mathworks.com":case"matlab-integ3.mathworks.com":case"drive-integ3.matlab.com":case"www-integ3.mathworks.com":return"https://nightly-matlab.mathworks.com/index-le.html"}}(),containerType:"embedded",node:document.body,background:!1,forceContainerCreation:!1,testMode:!(!e||!e.testMode)&&e.testMode};if(e)switch(e.repository){case"MLDO":0===e.gdsUrl.indexOf("https://gds.mathworks.com")?t.source="https://matlab.mathworks.com":t.source=_(),t.containerType="external",t.windowName="motw";break;case"MATLAB Examples":e.containerType&&"external"===e.containerType&&(e.source?t.source=e.source:t.source=_(),t.windowName="motw");break;case"Standalone Artifact":t.windowName="mowindow"}return t}function F(e){return e&&"string"!=typeof e&&e.containerType||(e=j()),H=e,E(e)}function J(e,t){if((e=e||H).livescript&&e.livescript.locationURI&&(e=function(e){var t,n=e.livescript.locationURI,o="",i="";return delete e.livescript,(t=n.split("/")).length>0&&(o=t[t.length-1]),i=`websave('${o}','${n}');edit('${o}');`,e.initializationCode=i.concat(e.initializationCode),e}(e)),!function(e,t){const n=new URLSearchParams(window.location.search).get("useurlendpoint");return n&&"true"===n&&"MATLAB Examples"===e.repository&&"MATLAB_ONLINE"===e.targetViewer&&"external"===e.containerType&&"external"===t.containerType}(e,t=function(e,t){let n={};for(let o in t)t.hasOwnProperty(o)&&(n[o]=e&&e[o]?e[o]:t[o]);return n}(t,j(e)))){const n=function(e){if(!W(e=function(e){if("string"==typeof e){if(new RegExp("^[a-zA-Z0-9]+/[a-zA-Z0-9]+$").test(e)){var t={},n=e.split("/");return t.component=n[0],t.exampleId=n[1],t.repository="MATLAB Examples",t}throw new S("Incorrect string input")}return e}(e)))throw new S("Mandatory fields missing in input");let t={coordinates:{},repository:e.repository,files:e.files||void 0,workingDirectory:e.workingDirectory||void 0,initializationCode:e.initializationCode||void 0};if(e.opcPackage)e.opcPackage&&"string"!=typeof e.opcPackage&&(e.opcPackage=JSON.stringify(e.opcPackage)),t.coordinates.opcPackage=e.opcPackage;else switch(e.repository){case"MLDO":t.errMsg=e.path,t.coordinates=function(e){return{path:e.path,mssToken:e.mssToken?e.mssToken:void 0,gdsSessionId:e.gdsSessionId,gdsUrl:e.gdsUrl}}(e),t.targetViewer="MATLAB_ONLINE";break;case"MATLAB Examples":t.errMsg=function(e){return e.coordinates?e.coordinates.component+"/"+e.coordinates.exampleId:e.component+"/"+e.exampleId}(e),t.coordinates=e.coordinates?e.coordinates:function(e){return e.coordinates?{component:e.coordinates.component,exampleId:e.coordinates.exampleId}:{component:e.component,exampleId:e.exampleId}}(e),t.targetViewer=e.targetViewer?e.targetViewer:"LIVE_EDITOR";break;case"Standalone Artifact":if(e.livescript&&e.livescript.locationURI)t.errMsg=function(e){return e.opcPackage?"Error loading OPC Package":i(e.livescript.locationURI)}(e),t.coordinates=function(e){return{artifactLocation:e.livescript.locationURI}}(e);else{var n=r(e);t.errMsg=n||"Untitled.mlx",t.coordinates={}}break;case"MATLAB WebApp":t.errMsg=e.webAppName,t.coordinates=function(e){return{webAppName:e.webAppName}}(e),t.targetViewer="MATLAB_WEBAPP"}return t}(e),o=F(t);if(t.testMode)return o;{t&&t.background||o.show();let i=e;if("string"!=typeof e&&(i=JSON.stringify(e)),i.indexOf("MLDO")<0&&U===i&&o){const e=M(n);return new Promise((function(t,n){e.then((function(e){$(o,e,100,t,n)}),(function(e){"errorLoadingContentMessage"===e.fault&&w(o,e,"errorLoadingContentMessage"),n(new Error("errorLoadingContentMessage"))}))}))}U=i;const r=M(n),a=p(o);return new Promise((function(e,t){a.then((function(){r.then((function(n){$(o,n,100,e,t)}),(function(e){"errorLoadingContentMessage"===e.fault&&w(o,e,"errorLoadingContentMessage"),t(new Error("errorLoadingContentMessage"))}))}))}))}}{let n=function(e,t){if(!W(e))throw new S("Mandatory fields missing in input");let n=new URL(t.source),o=e.coordinates.component+"/"+e.coordinates.exampleId;return`${n.toString()}open/doc/v1?example=${o}`}(e,t);if(t.testMode)return n;window.open(n,t.windowName)}}function $(e,t,n,o,i){setTimeout((function(){m(e,t).then((function(){o()}),(function(){n>1600?i():$(e,t,n*=2,o,i)}))}),n)}let q={doesExampleExist:V,startOpenWith:F,loadExample:J,load:J,start:F,createEmbeddedIframe:F,describe:V,isProductSupported:function(e){return function(e){return new Promise((function(t,n){if(Array.isArray(e)&&e.length>0){for(let n in e)if(!o.has(e[n]))return void t({exists:!1});t({exists:!0})}else t({exists:!1})}))}(e)}};window.ow=q,t.default=q}]);