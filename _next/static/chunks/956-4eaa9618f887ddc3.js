(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[956],{5962:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return y}});let o=i(6927),r=i(5909),s=r._(i(6006)),n=o._(i(2930)),a=i(2325),l=i(6374),c=i(168);i(7653);let h=o._(i(5840)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function d(t){return void 0!==t.default}function u(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function f(t,e,i,o,r,s,n){if(!t||t["data-loaded-src"]===e)return;t["data-loaded-src"]=e;let a="decode"in t?t.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("blur"===i&&s(!0),null==o?void 0:o.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let i=!1,r=!1;o.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,e.preventDefault()},stopPropagation:()=>{r=!0,e.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(t)}})}function g(t){let[e,i]=s.version.split("."),o=parseInt(e,10),r=parseInt(i,10);return o>18||18===o&&r>=3?{fetchPriority:t}:{fetchpriority:t}}let v=(0,s.forwardRef)((t,e)=>{let{imgAttributes:i,heightInt:o,widthInt:r,qualityInt:n,className:a,imgStyle:l,blurStyle:c,isLazy:h,fetchPriority:p,fill:d,placeholder:u,loading:v,srcString:m,config:y,unoptimized:w,loader:x,onLoadRef:b,onLoadingCompleteRef:S,setBlurComplete:O,setShowAltText:P,onLoad:E,onError:_,...M}=t;return v=h?"lazy":v,s.default.createElement("img",{...M,...g(p),loading:v,width:r,height:o,decoding:"async","data-nimg":d?"fill":"1",className:a,style:{...l,...c},...i,ref:(0,s.useCallback)(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(_&&(t.src=t.src),t.complete&&f(t,m,u,b,S,O,w))},[m,u,b,S,O,_,w,e]),onLoad:t=>{let e=t.currentTarget;f(e,m,u,b,S,O,w)},onError:t=>{P(!0),"blur"===u&&O(!0),_&&_(t)}})}),m=(0,s.forwardRef)((t,e)=>{var i;let o,r,{src:f,sizes:m,unoptimized:y=!1,priority:w=!1,loading:x,className:b,quality:S,width:O,height:P,fill:E,style:_,onLoad:M,onLoadingComplete:D,placeholder:C="empty",blurDataURL:j,fetchPriority:k,layout:L,objectFit:A,objectPosition:F,lazyBoundary:z,lazyRoot:I,...R}=t,T=(0,s.useContext)(c.ImageConfigContext),N=(0,s.useMemo)(()=>{let t=p||T||l.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),i=t.deviceSizes.sort((t,e)=>t-e);return{...t,allSizes:e,deviceSizes:i}},[T]),U=R.loader||h.default;delete R.loader;let W="__next_img_default"in U;if(W){if("custom"===N.loader)throw Error('Image with src "'+f+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let t=U;U=e=>{let{config:i,...o}=e;return t(o)}}if(L){"fill"===L&&(E=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];t&&(_={..._,...t});let e={responsive:"100vw",fill:"100vw"}[L];e&&!m&&(m=e)}let Y="",X=u(O),B=u(P);if("object"==typeof(i=f)&&(d(i)||void 0!==i.src)){let t=d(f)?f.default:f;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t));if(o=t.blurWidth,r=t.blurHeight,j=j||t.blurDataURL,Y=t.src,!E){if(X||B){if(X&&!B){let e=X/t.width;B=Math.round(t.height*e)}else if(!X&&B){let e=B/t.height;X=Math.round(t.width*e)}}else X=t.width,B=t.height}}let H=!w&&("lazy"===x||void 0===x);(!(f="string"==typeof f?f:Y)||f.startsWith("data:")||f.startsWith("blob:"))&&(y=!0,H=!1),N.unoptimized&&(y=!0),W&&f.endsWith(".svg")&&!N.dangerouslyAllowSVG&&(y=!0),w&&(k="high");let[$,V]=(0,s.useState)(!1),[q,G]=(0,s.useState)(!1),J=u(S),Z=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:F}:{},q?{}:{color:"transparent"},_),K="blur"===C&&j&&!$?{backgroundSize:Z.objectFit||"cover",backgroundPosition:Z.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,a.getImageBlurSvg)({widthInt:X,heightInt:B,blurWidth:o,blurHeight:r,blurDataURL:j,objectFit:Z.objectFit})+'")'}:{},Q=function(t){let{config:e,src:i,unoptimized:o,width:r,quality:s,sizes:n,loader:a}=t;if(o)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(t,e,i){let{deviceSizes:o,allSizes:r}=t;if(i){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let o;o=t.exec(i);o)e.push(parseInt(o[2]));if(e.length){let t=.01*Math.min(...e);return{widths:r.filter(e=>e>=o[0]*t),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof e)return{widths:o,kind:"w"};let s=[...new Set([e,2*e].map(t=>r.find(e=>e>=t)||r[r.length-1]))];return{widths:s,kind:"x"}}(e,r,n),h=l.length-1;return{sizes:n||"w"!==c?n:"100vw",srcSet:l.map((t,o)=>a({config:e,src:i,quality:s,width:t})+" "+("w"===c?t:o+1)+c).join(", "),src:a({config:e,src:i,quality:s,width:l[h]})}}({config:N,src:f,unoptimized:y,width:X,quality:J,sizes:m,loader:U}),tt=f,te=(0,s.useRef)(M);(0,s.useEffect)(()=>{te.current=M},[M]);let ti=(0,s.useRef)(D);(0,s.useEffect)(()=>{ti.current=D},[D]);let to={isLazy:H,imgAttributes:Q,heightInt:B,widthInt:X,qualityInt:J,className:b,imgStyle:Z,blurStyle:K,loading:x,config:N,fetchPriority:k,fill:E,unoptimized:y,placeholder:C,loader:U,srcString:tt,onLoadRef:te,onLoadingCompleteRef:ti,setBlurComplete:V,setShowAltText:G,...R};return s.default.createElement(s.default.Fragment,null,s.default.createElement(v,{...to,ref:e}),w?s.default.createElement(n.default,null,s.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:R.crossOrigin,referrerPolicy:R.referrerPolicy,...g(k)})):null)}),y=m;("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},4626:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return s}});let o=i(6927),r=o._(i(6006)),s=r.default.createContext({})},7290:function(t,e){"use strict";function i(t){let{ampFirst:e=!1,hybrid:i=!1,hasQuery:o=!1}=void 0===t?{}:t;return e||i&&o}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return i}})},2930:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var i in e)Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}(e,{defaultHead:function(){return h},default:function(){return f}});let o=i(6927),r=i(5909),s=r._(i(6006)),n=o._(i(9488)),a=i(4626),l=i(6436),c=i(7290);function h(t){void 0===t&&(t=!1);let e=[s.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(t,e){return"string"==typeof e||"number"==typeof e?t:e.type===s.default.Fragment?t.concat(s.default.Children.toArray(e.props.children).reduce((t,e)=>"string"==typeof e||"number"==typeof e?t:t.concat(e),[])):t.concat(e)}i(7653);let d=["name","httpEquiv","charSet","itemProp"];function u(t,e){let{inAmpMode:i}=e;return t.reduce(p,[]).reverse().concat(h(i).reverse()).filter(function(){let t=new Set,e=new Set,i=new Set,o={};return r=>{let s=!0,n=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){n=!0;let e=r.key.slice(r.key.indexOf("$")+1);t.has(e)?s=!1:t.add(e)}switch(r.type){case"title":case"base":e.has(r.type)?s=!1:e.add(r.type);break;case"meta":for(let t=0,e=d.length;t<e;t++){let e=d[t];if(r.props.hasOwnProperty(e)){if("charSet"===e)i.has(e)?s=!1:i.add(e);else{let t=r.props[e],i=o[e]||new Set;("name"!==e||!n)&&i.has(t)?s=!1:(i.add(t),o[e]=i)}}}}return s}}()).reverse().map((t,e)=>{let o=t.key||e;if(!i&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(e=>t.props.href.startsWith(e))){let e={...t.props||{}};return e["data-href"]=e.href,e.href=void 0,e["data-optimized-fonts"]=!0,s.default.cloneElement(t,e)}return s.default.cloneElement(t,{key:o})})}let f=function(t){let{children:e}=t,i=(0,s.useContext)(a.AmpStateContext),o=(0,s.useContext)(l.HeadManagerContext);return s.default.createElement(n.default,{reduceComponentsToState:u,headManager:o,inAmpMode:(0,c.isInAmpMode)(i)},e)};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2325:function(t,e){"use strict";function i(t){let{widthInt:e,heightInt:i,blurWidth:o,blurHeight:r,blurDataURL:s,objectFit:n}=t,a=o||e,l=r||i,c=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(o&&r?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},168:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let o=i(6927),r=o._(i(6006)),s=i(6374),n=r.default.createContext(s.imageConfigDefault)},6374:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var i in e)Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}(e,{VALID_LOADERS:function(){return i},imageConfigDefault:function(){return o}});let i=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5840:function(t,e){"use strict";function i(t){let{config:e,src:i,width:o,quality:r}=t;return e.path+"?url="+encodeURIComponent(i)+"&w="+o+"&q="+(r||75)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o}}),i.__next_img_default=!0;let o=i},9488:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a}});let o=i(5909),r=o._(i(6006)),s=r.useLayoutEffect,n=r.useEffect;function a(t){let{headManager:e,reduceComponentsToState:i}=t;function o(){if(e&&e.mountedInstances){let o=r.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(i(o,t))}}return s(()=>{var i;return null==e||null==(i=e.mountedInstances)||i.add(t.children),()=>{var i;null==e||null==(i=e.mountedInstances)||i.delete(t.children)}}),s(()=>(e&&(e._pendingUpdate=o),()=>{e&&(e._pendingUpdate=o)})),n(()=>(e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),()=>{e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)})),null}},7653:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return i}});let i=t=>{}},3177:function(t,e,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=i(6006),r=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,i){var o,l={},c=null,h=null;for(o in void 0!==i&&(c=""+i),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(h=e.ref),e)s.call(e,o)&&!a.hasOwnProperty(o)&&(l[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===l[o]&&(l[o]=e[o]);return{$$typeof:r,type:t,key:c,ref:h,props:l,_owner:n.current}}e.jsx=l,e.jsxs=l},9268:function(t,e,i){"use strict";t.exports=i(3177)},6394:function(t,e,i){t.exports=i(5962)},3393:function(t,e,i){"use strict";i.d(e,{UH:function(){return r}});var o=i(3270);function r(t){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"}}]})(t)}},3270:function(t,e,i){"use strict";i.d(e,{w_:function(){return l}});var o=i(6006),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=o.createContext&&o.createContext(r),n=function(){return(n=Object.assign||function(t){for(var e,i=1,o=arguments.length;i<o;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},a=function(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>e.indexOf(o)&&(i[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(t);r<o.length;r++)0>e.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(i[o[r]]=t[o[r]]);return i};function l(t){return function(e){return o.createElement(c,n({attr:n({},t.attr)},e),function t(e){return e&&e.map(function(e,i){return o.createElement(e.tag,n({key:i},e.attr),t(e.child))})}(t.child))}}function c(t){var e=function(e){var i,r=t.attr,s=t.size,l=t.title,c=a(t,["attr","size","title"]),h=s||e.size||"1em";return e.className&&(i=e.className),t.className&&(i=(i?i+" ":"")+t.className),o.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,c,{className:i,style:n(n({color:t.color||e.color},e.style),t.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),t.children)};return void 0!==s?o.createElement(s.Consumer,null,function(t){return e(t)}):e(r)}},7852:function(t,e,i){"use strict";i.d(e,{Z:function(){return a}});let o=t=>Math.max(t.offsetWidth,t.scrollWidth),r=t=>Math.max(t.offsetHeight,t.scrollHeight),s=(t,e,i)=>{let o=t.childNodes,r=document.createRange();for(let t=0;t<o.length;t++){let s=o[t];if(3!==s.nodeType)continue;r.selectNodeContents(s);let n=r.getBoundingClientRect();if(e>=n.left&&i>=n.top&&e<=n.right&&i<=n.bottom)return s}return!1},n=()=>{let t=window.getSelection?window.getSelection():document.selection;t&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty())};class a{constructor(t={}){let e={content:t.viewport.children[0],direction:"all",pointerMode:"all",scrollMode:void 0,bounce:!0,bounceForce:.1,friction:.05,textSelection:!1,inputsFocus:!0,emulateScroll:!1,preventDefaultOnEmulateScroll:!1,preventPointerMoveDefault:!0,lockScrollOnDragDirection:!1,pointerDownPreventDefault:!0,dragDirectionTolerance:40,onPointerDown(){},onPointerUp(){},onPointerMove(){},onClick(){},onUpdate(){},onWheel(){},shouldScroll:()=>!0};if(this.props={...e,...t},!this.props.viewport||!(this.props.viewport instanceof Element)){console.error('ScrollBooster init error: "viewport" config property must be present and must be Element');return}if(!this.props.content){console.error("ScrollBooster init error: Viewport does not have any content");return}this.isDragging=!1,this.isTargetScroll=!1,this.isScrolling=!1,this.isRunning=!1;let i={x:0,y:0};this.position={...i},this.velocity={...i},this.dragStartPosition={...i},this.dragOffset={...i},this.clientOffset={...i},this.dragPosition={...i},this.targetPosition={...i},this.scrollOffset={...i},this.rafID=null,this.events={},this.updateMetrics(),this.handleEvents()}updateOptions(t={}){this.props={...this.props,...t},this.props.onUpdate(this.getState()),this.startAnimationLoop()}updateMetrics(){this.viewport={width:this.props.viewport.clientWidth,height:this.props.viewport.clientHeight},this.content={width:o(this.props.content),height:r(this.props.content)},this.edgeX={from:Math.min(-this.content.width+this.viewport.width,0),to:0},this.edgeY={from:Math.min(-this.content.height+this.viewport.height,0),to:0},this.props.onUpdate(this.getState()),this.startAnimationLoop()}startAnimationLoop(){this.isRunning=!0,cancelAnimationFrame(this.rafID),this.rafID=requestAnimationFrame(()=>this.animate())}animate(){if(!this.isRunning)return;this.updateScrollPosition(),this.isMoving()||(this.isRunning=!1,this.isTargetScroll=!1);let t=this.getState();this.setContentPosition(t),this.props.onUpdate(t),this.rafID=requestAnimationFrame(()=>this.animate())}updateScrollPosition(){this.applyEdgeForce(),this.applyDragForce(),this.applyScrollForce(),this.applyTargetForce();let t=1-this.props.friction;this.velocity.x*=t,this.velocity.y*=t,"vertical"!==this.props.direction&&(this.position.x+=this.velocity.x),"horizontal"!==this.props.direction&&(this.position.y+=this.velocity.y),this.props.bounce&&!this.isScrolling||this.isTargetScroll||(this.position.x=Math.max(Math.min(this.position.x,this.edgeX.to),this.edgeX.from),this.position.y=Math.max(Math.min(this.position.y,this.edgeY.to),this.edgeY.from))}applyForce(t){this.velocity.x+=t.x,this.velocity.y+=t.y}applyEdgeForce(){if(!this.props.bounce||this.isDragging)return;let t=this.position.x<this.edgeX.from,e=this.position.x>this.edgeX.to,i=this.position.y<this.edgeY.from,o=this.position.y>this.edgeY.to,r=t||e,s=i||o;if(!r&&!s)return;let n={x:t?this.edgeX.from:this.edgeX.to,y:i?this.edgeY.from:this.edgeY.to},a={x:n.x-this.position.x,y:n.y-this.position.y},l={x:a.x*this.props.bounceForce,y:a.y*this.props.bounceForce},c={x:this.position.x+(this.velocity.x+l.x)/this.props.friction,y:this.position.y+(this.velocity.y+l.y)/this.props.friction};(t&&c.x>=this.edgeX.from||e&&c.x<=this.edgeX.to)&&(l.x=a.x*this.props.bounceForce-this.velocity.x),(i&&c.y>=this.edgeY.from||o&&c.y<=this.edgeY.to)&&(l.y=a.y*this.props.bounceForce-this.velocity.y),this.applyForce({x:r?l.x:0,y:s?l.y:0})}applyDragForce(){if(!this.isDragging)return;let t={x:this.dragPosition.x-this.position.x,y:this.dragPosition.y-this.position.y};this.applyForce({x:t.x-this.velocity.x,y:t.y-this.velocity.y})}applyScrollForce(){this.isScrolling&&(this.applyForce({x:this.scrollOffset.x-this.velocity.x,y:this.scrollOffset.y-this.velocity.y}),this.scrollOffset.x=0,this.scrollOffset.y=0)}applyTargetForce(){this.isTargetScroll&&this.applyForce({x:(this.targetPosition.x-this.position.x)*.08-this.velocity.x,y:(this.targetPosition.y-this.position.y)*.08-this.velocity.y})}isMoving(){return this.isDragging||this.isScrolling||Math.abs(this.velocity.x)>=.01||Math.abs(this.velocity.y)>=.01}scrollTo(t={}){this.isTargetScroll=!0,this.targetPosition.x=-t.x||0,this.targetPosition.y=-t.y||0,this.startAnimationLoop()}setPosition(t={}){this.velocity.x=0,this.velocity.y=0,this.position.x=-t.x||0,this.position.y=-t.y||0,this.startAnimationLoop()}getState(){return{isMoving:this.isMoving(),isDragging:!!(this.dragOffset.x||this.dragOffset.y),position:{x:-this.position.x,y:-this.position.y},dragOffset:this.dragOffset,dragAngle:this.getDragAngle(this.clientOffset.x,this.clientOffset.y),borderCollision:{left:this.position.x>=this.edgeX.to,right:this.position.x<=this.edgeX.from,top:this.position.y>=this.edgeY.to,bottom:this.position.y<=this.edgeY.from}}}getDragAngle(t,e){return Math.round(Math.atan2(t,e)*(180/Math.PI))}getDragDirection(t,e){return Math.abs(90-Math.abs(t))<=90-e?"horizontal":"vertical"}setContentPosition(t){"transform"===this.props.scrollMode&&(this.props.content.style.transform=`translate(${-t.position.x}px, ${-t.position.y}px)`),"native"===this.props.scrollMode&&(this.props.viewport.scrollTop=t.position.y,this.props.viewport.scrollLeft=t.position.x)}handleEvents(){let t={x:0,y:0},e={x:0,y:0},i=null,o=null,r=!1,a=o=>{if(!this.isDragging)return;let s=r?o.touches[0]:o,{pageX:n,pageY:a,clientX:l,clientY:c}=s;this.dragOffset.x=n-t.x,this.dragOffset.y=a-t.y,this.clientOffset.x=l-e.x,this.clientOffset.y=c-e.y,(Math.abs(this.clientOffset.x)>5&&!i||Math.abs(this.clientOffset.y)>5&&!i)&&(i=this.getDragDirection(this.getDragAngle(this.clientOffset.x,this.clientOffset.y),this.props.dragDirectionTolerance)),this.props.lockScrollOnDragDirection&&"all"!==this.props.lockScrollOnDragDirection?i===this.props.lockScrollOnDragDirection&&r?(this.dragPosition.x=this.dragStartPosition.x+this.dragOffset.x,this.dragPosition.y=this.dragStartPosition.y+this.dragOffset.y):r?(this.dragPosition.x=this.dragStartPosition.x,this.dragPosition.y=this.dragStartPosition.y):(this.dragPosition.x=this.dragStartPosition.x+this.dragOffset.x,this.dragPosition.y=this.dragStartPosition.y+this.dragOffset.y):(this.dragPosition.x=this.dragStartPosition.x+this.dragOffset.x,this.dragPosition.y=this.dragStartPosition.y+this.dragOffset.y)};this.events.pointerdown=i=>{r=!!(i.touches&&i.touches[0]),this.props.onPointerDown(this.getState(),i,r);let o=r?i.touches[0]:i,{pageX:l,pageY:c,clientX:h,clientY:p}=o,{viewport:d}=this.props,u=d.getBoundingClientRect();if(!(h-u.left>=d.clientLeft+d.clientWidth)&&!(p-u.top>=d.clientTop+d.clientHeight)&&this.props.shouldScroll(this.getState(),i)&&2!==i.button&&("mouse"!==this.props.pointerMode||!r)&&("touch"!==this.props.pointerMode||r)&&!(this.props.inputsFocus&&["input","textarea","button","select","label"].indexOf(i.target.nodeName.toLowerCase())>-1)){if(this.props.textSelection){let t=s(i.target,h,p);if(t)return;n()}this.isDragging=!0,t.x=l,t.y=c,e.x=h,e.y=p,this.dragStartPosition.x=this.position.x,this.dragStartPosition.y=this.position.y,a(i),this.startAnimationLoop(),!r&&this.props.pointerDownPreventDefault&&i.preventDefault()}},this.events.pointermove=t=>{t.cancelable&&("all"===this.props.lockScrollOnDragDirection||this.props.lockScrollOnDragDirection===i)&&t.preventDefault(),a(t),this.props.onPointerMove(this.getState(),t,r)},this.events.pointerup=t=>{this.isDragging=!1,i=null,this.props.onPointerUp(this.getState(),t,r)},this.events.wheel=t=>{let e=this.getState();this.props.emulateScroll&&(this.velocity.x=0,this.velocity.y=0,this.isScrolling=!0,this.scrollOffset.x=-t.deltaX,this.scrollOffset.y=-t.deltaY,this.props.onWheel(e,t),this.startAnimationLoop(),clearTimeout(o),o=setTimeout(()=>this.isScrolling=!1,80),this.props.preventDefaultOnEmulateScroll&&this.getDragDirection(this.getDragAngle(-t.deltaX,-t.deltaY),this.props.dragDirectionTolerance)===this.props.preventDefaultOnEmulateScroll&&t.preventDefault())},this.events.scroll=()=>{let{scrollLeft:t,scrollTop:e}=this.props.viewport;Math.abs(this.position.x+t)>3&&(this.position.x=-t,this.velocity.x=0),Math.abs(this.position.y+e)>3&&(this.position.y=-e,this.velocity.y=0)},this.events.click=t=>{let e=this.getState(),i="vertical"!==this.props.direction?e.dragOffset.x:0,o="horizontal"!==this.props.direction?e.dragOffset.y:0;Math.max(Math.abs(i),Math.abs(o))>5&&(t.preventDefault(),t.stopPropagation()),this.props.onClick(e,t,r)},this.events.contentLoad=()=>this.updateMetrics(),this.events.resize=()=>this.updateMetrics(),this.props.viewport.addEventListener("mousedown",this.events.pointerdown),this.props.viewport.addEventListener("touchstart",this.events.pointerdown,{passive:!1}),this.props.viewport.addEventListener("click",this.events.click),this.props.viewport.addEventListener("wheel",this.events.wheel,{passive:!1}),this.props.viewport.addEventListener("scroll",this.events.scroll),this.props.content.addEventListener("load",this.events.contentLoad,!0),window.addEventListener("mousemove",this.events.pointermove),window.addEventListener("touchmove",this.events.pointermove,{passive:!1}),window.addEventListener("mouseup",this.events.pointerup),window.addEventListener("touchend",this.events.pointerup),window.addEventListener("resize",this.events.resize)}destroy(){this.props.viewport.removeEventListener("mousedown",this.events.pointerdown),this.props.viewport.removeEventListener("touchstart",this.events.pointerdown),this.props.viewport.removeEventListener("click",this.events.click),this.props.viewport.removeEventListener("wheel",this.events.wheel),this.props.viewport.removeEventListener("scroll",this.events.scroll),this.props.content.removeEventListener("load",this.events.contentLoad),window.removeEventListener("mousemove",this.events.pointermove),window.removeEventListener("touchmove",this.events.pointermove),window.removeEventListener("mouseup",this.events.pointerup),window.removeEventListener("touchend",this.events.pointerup),window.removeEventListener("resize",this.events.resize)}}}}]);