(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{iInF:function(t,o,i){"use strict";i.r(o),i.d(o,"ion_app",(function(){return d})),i.d(o,"ion_buttons",(function(){return p})),i.d(o,"ion_content",(function(){return g})),i.d(o,"ion_footer",(function(){return f})),i.d(o,"ion_header",(function(){return y})),i.d(o,"ion_router_outlet",(function(){return j})),i.d(o,"ion_title",(function(){return O})),i.d(o,"ion_toolbar",(function(){return S}));var e=i("dSyh"),n=i("AfW+"),r=i("aiEM"),s=(i("kBU6"),i("Dl6n")),a=i("m9yc"),l=i("+veT"),c=i("qaSm");const d=class{constructor(t){Object(e.l)(this,t)}componentDidLoad(){h(()=>{const t=Object(n.f)(window,"hybrid");n.b.getBoolean("_testing")||i.e(10).then(i.bind(null,"tCf4")).then(t=>t.startTapClick(n.b)),n.b.getBoolean("statusTap",t)&&i.e(8).then(i.bind(null,"QE1b")).then(t=>t.startStatusTap()),n.b.getBoolean("inputShims",b())&&i.e(7).then(i.bind(null,"aoIK")).then(t=>t.startInputShims(n.b)),n.b.getBoolean("hardwareBackButton",t)&&i.e(5).then(i.bind(null,"XRsP")).then(t=>t.startHardwareBackButton()),i.e(4).then(i.bind(null,"3YLQ")).then(t=>t.startFocusVisible())})}render(){const t=Object(e.e)(this);return Object(e.i)(e.a,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":n.b.getBoolean("_forceStatusbarPadding")}})}get el(){return Object(e.f)(this)}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}},b=()=>Object(n.f)(window,"ios")&&Object(n.f)(window,"mobile"),h=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},p=class{constructor(t){Object(e.l)(this,t),this.collapse=!1}render(){const t=Object(e.e)(this);return Object(e.i)(e.a,{class:{[t]:!0,"buttons-collapse":this.collapse}})}static get style(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;--padding-start:5px;--padding-end:5px;margin-left:2px;margin-right:2px;height:32px;font-size:17px;font-weight:400}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--border-color:initial;--background-focused:rgba(var(--ion-color-contrast-rgb),0.1)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-solid , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--background:var(--ion-color-contrast);--background-activated:rgba(var(--ion-color-contrast-rgb),0.8);--background-focused:rgba(var(--ion-color-contrast-rgb),0.6);--color:var(--ion-color-base);--color-focused:var(--ion-color-base)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-clear , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-contrast);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button-outline , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--background-activated:var(--ion-color-contrast);--background-focused:rgba(var(--ion-color-contrast-rgb),0.1);--color-activated:var(--ion-color-base);--color-focused:var(--ion-color-contrast)}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-clear , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-clear {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary,#3880ff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-outline , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-outline {--color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--color-activated:var(--ion-toolbar-background,var(--ion-color-primary-contrast,#fff));--color-focused:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--border-color:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff))}.sc-ion-buttons-ios-hion-toolbar:not(.ion-color).sc-ion-buttons-ios-s  .button-solid , ion-toolbar:not(.ion-color) .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button-solid {--color:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-activated:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color-focused:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--background:var(--ion-toolbar-color,var(--ion-color-primary,#3880ff));--background-activated:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0));--background-focused:var(--ion-toolbar-color-activated,var(--ion-color-primary-shade,#3171e0))}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"}},g=class{constructor(t){Object(e.l)(this,t),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.mode=Object(e.e)(this),this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1,this.ionScrollStart=Object(e.d)(this,"ionScrollStart",7),this.ionScroll=Object(e.d)(this,"ionScroll",7),this.ionScrollEnd=Object(e.d)(this,"ionScrollEnd",7)}disconnectedCallback(){this.onScrollEnd()}componentDidLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const{forceOverscroll:t,mode:o}=this;return void 0===t?"ios"===o&&Object(n.f)("ios"):t}resize(){this.fullscreen?Object(e.g)(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=u(this.el),o=Math.max(this.el.offsetTop,0),i=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||i!==this.cBottom)&&(this.cTop=o,this.cBottom=i,this.el.forceUpdate())}onScroll(t){const o=Date.now(),i=!this.isScrolling;this.lastScroll=o,i&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,Object(e.g)(o=>{this.queued=!1,this.detail.event=t,m(this.detail,this.scrollEl,o,i),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,i){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,i)}async scrollToPoint(t,o,i=0){const e=this.scrollEl;if(i<32)return null!=o&&(e.scrollTop=o),void(null!=t&&(e.scrollLeft=t));let n,r=0;const s=new Promise(t=>n=t),a=e.scrollTop,l=e.scrollLeft,c=null!=o?o-a:0,d=null!=t?t-l:0,b=t=>{const o=Math.min(1,(t-r)/i)-1,s=Math.pow(o,3)+1;0!==c&&(e.scrollTop=Math.floor(s*c+a)),0!==d&&(e.scrollLeft=Math.floor(s*d+l)),s<1?requestAnimationFrame(b):n()};return requestAnimationFrame(t=>{r=t,b(t)}),s}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{scrollX:t,scrollY:o}=this,i=Object(e.e)(this),r=this.shouldForceOverscroll(),a="ios"===i&&n.b.getBoolean("experimentalTransitionShadow",!0);return this.resize(),Object(e.i)(e.a,{class:Object.assign(Object.assign({},Object(s.a)(this.color)),{[i]:!0,"content-sizing":Object(s.c)("ion-popover",this.el),overscroll:r}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},Object(e.i)("main",{class:{"inner-scroll":!0,"scroll-x":t,"scroll-y":o,overscroll:(t||o)&&r},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},Object(e.i)("slot",null)),a?Object(e.i)("div",{class:"transition-effect"},Object(e.i)("div",{class:"transition-cover"}),Object(e.i)("div",{class:"transition-shadow"})):null,Object(e.i)("slot",{name:"fixed"}))}get el(){return Object(e.f)(this)}static get style(){return':host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:""}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{left:-100%;opacity:0;pointer-events:none}.transition-cover,.transition-effect{position:absolute;width:100%;height:100%}.transition-cover{right:0;background:#000;opacity:.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}'}},u=t=>t.closest("ion-tabs")||t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t),m=(t,o,i,e)=>{const n=t.currentX,r=t.currentY,s=o.scrollLeft,a=o.scrollTop,l=i-t.timeStamp;if(e&&(t.startTimeStamp=i,t.startX=s,t.startY=a,t.velocityX=t.velocityY=0),t.timeStamp=i,t.currentX=t.scrollLeft=s,t.currentY=t.scrollTop=a,t.deltaX=s-t.startX,t.deltaY=a-t.startY,l>0&&l<100){const o=(a-r)/l;t.velocityX=(s-n)/l*.7+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}},f=class{constructor(t){Object(e.l)(this,t),this.translucent=!1}render(){const t=Object(e.e)(this),o=this.translucent;return Object(e.i)(e.a,{role:"contentinfo",class:{[t]:!0,[`footer-${t}`]:!0,"footer-translucent":o,[`footer-translucent-${t}`]:o}})}static get style(){return"ion-footer{display:block;position:relative;-ms-flex-order:1;order:1;width:100%;z-index:10}ion-footer ion-toolbar:last-child{padding-bottom:var(--ion-safe-area-bottom,0)}.footer-ios ion-toolbar:first-child{--border-width:0.55px 0 0}.footer-ios[no-border] ion-toolbar:first-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.footer-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.footer-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}"}},v=t=>{const o=document.querySelector(`${t}.ion-cloned-element`);if(null!==o)return o;const i=document.createElement(t);return i.classList.add("ion-cloned-element"),i.style.setProperty("display","none"),document.body.appendChild(i),i},w=t=>{if(!t)return;const o=t.querySelectorAll("ion-toolbar");return{el:t,toolbars:Array.from(o).map(t=>{const o=t.querySelector("ion-title");return{el:t,background:t.shadowRoot.querySelector(".toolbar-background"),ionTitleEl:o,innerTitleEl:o?o.shadowRoot.querySelector(".toolbar-title"):null,ionButtonsEl:Array.from(t.querySelectorAll("ion-buttons"))||[]}})||[[]]}},x=(t,o)=>{void 0===o?t.background.style.removeProperty("--opacity"):t.background.style.setProperty("--opacity",o.toString())},k=(t,o=!0)=>{Object(e.m)(()=>{o?t.el.classList.remove("header-collapse-condense-inactive"):t.el.classList.add("header-collapse-condense-inactive")})},y=class{constructor(t){Object(e.l)(this,t),this.collapsibleHeaderInitialized=!1,this.translucent=!1}async componentDidLoad(){await this.checkCollapsibleHeader()}async componentDidUpdate(){await this.checkCollapsibleHeader()}componentDidUnload(){this.destroyCollapsibleHeader()}async checkCollapsibleHeader(){const t="condense"===this.collapse,o=!(!t||"ios"!==Object(e.e)(this))&&t;if(!o&&this.collapsibleHeaderInitialized)this.destroyCollapsibleHeader();else if(o&&!this.collapsibleHeaderInitialized){const t=this.el.closest("ion-app,ion-page,.ion-page,page-inner"),o=t?t.querySelector("ion-content"):null;await this.setupCollapsibleHeader(o,t)}}destroyCollapsibleHeader(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0),this.scrollEl&&this.contentScrollCallback&&(this.scrollEl.removeEventListener("scroll",this.contentScrollCallback),this.contentScrollCallback=void 0)}async setupCollapsibleHeader(t,o){t&&o?(this.scrollEl=await t.getScrollElement(),Object(e.g)(()=>{const t=o.querySelectorAll("ion-header"),i=Array.from(t).find(t=>"condense"!==t.collapse);if(!i||!this.scrollEl)return;const n=w(i),s=w(this.el);n&&s&&(k(n,!1),Object(e.g)(()=>{this.intersectionObserver=new IntersectionObserver(t=>{((t,o,i)=>{Object(e.m)(()=>{((t,o)=>{if(!t[0].isIntersecting)return;const i=100*(1-t[0].intersectionRatio)/75;x(o.toolbars[0],1===i?void 0:i)})(t,o);const e=t[0],n=e.intersectionRect,r=n.width*n.height,s=0===r&&0==e.rootBounds.width*e.rootBounds.height,a=Math.abs(n.left-e.boundingClientRect.left),l=Math.abs(n.right-e.boundingClientRect.right);s||r>0&&(a>=5||l>=5)||(e.isIntersecting?(k(o,!1),k(i)):(0===n.x&&0===n.y||0!==n.width&&0!==n.height)&&(k(o),k(i,!1),x(o.toolbars[0],1)))})})(t,n,s)},{threshold:[.25,.3,.4,.5,.6,.7,.8,.9,1],rootMargin:`-${n.el.clientHeight}px 0px 0px 0px`}),this.intersectionObserver.observe(s.toolbars[0].el)}),this.contentScrollCallback=()=>{((t,o)=>{Object(e.g)(()=>{const i=t.scrollTop,n=Object(r.c)(1,1+-i/500,1.1);Object(e.m)(()=>{((t=[],o=1,i=!1)=>{t.forEach(t=>{const e=t.ionTitleEl,n=t.innerTitleEl;e&&"large"===e.size&&(n.style.transformOrigin="left center",n.style.transition=i?"all 0.2s ease-in-out":"",n.style.transform=`scale3d(${o}, ${o}, 1)`)})})(o.toolbars,n)})})})(this.scrollEl,s)},this.scrollEl.addEventListener("scroll",this.contentScrollCallback))}),Object(e.m)(()=>{v("ion-title"),v("ion-back-button")}),this.collapsibleHeaderInitialized=!0):console.error("ion-header requires a content to collapse, make sure there is an ion-content.")}render(){const t=Object(e.e)(this),o=this.collapse||"none";return Object(e.i)(e.a,{role:"banner",class:{[t]:!0,[`header-${t}`]:!0,"header-translucent":this.translucent,[`header-collapse-${o}`]:!0,[`header-translucent-${t}`]:this.translucent}})}get el(){return Object(e.f)(this)}static get style(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}}.header-collapse-condense{z-index:9}.header-collapse-condense ion-toolbar{position:-webkit-sticky;position:sticky;top:0}.header-collapse-condense ion-toolbar:first-child{padding-top:7px;z-index:1}.header-collapse-condense ion-toolbar{z-index:0}.header-collapse-condense ion-toolbar ion-searchbar{height:48px;padding-top:0;padding-bottom:13px}ion-toolbar.in-toolbar ion-buttons,ion-toolbar.in-toolbar ion-title{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.header-collapse-condense ion-toolbar ion-buttons,.header-collapse-condense ion-toolbar ion-title{-webkit-transition:none;transition:none}.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-buttons.buttons-collapse,.header-collapse-condense-inactive ion-toolbar.in-toolbar ion-title{opacity:0;pointer-events:none}"}},j=class{constructor(t){Object(e.l)(this,t),this.animationEnabled=!0,this.mode=Object(e.e)(this),this.animated=!0,this.ionNavWillLoad=Object(e.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(e.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(e.d)(this,"ionNavDidChange",3)}swipeHandlerChanged(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)}async connectedCallback(){this.gesture=(await i.e(3).then(i.bind(null,"0yHn"))).createSwipeBackGesture(this.el,()=>!!this.swipeHandler&&this.swipeHandler.canStart()&&this.animationEnabled,()=>this.swipeHandler&&this.swipeHandler.onStart(),t=>this.ani&&this.ani.progressStep(t),(t,o,i)=>{if(this.ani){this.animationEnabled=!1,this.ani.onFinish(()=>{this.animationEnabled=!0,this.swipeHandler&&this.swipeHandler.onEnd(t)},{oneTimeCallback:!0});let e=t?-.001:.001;t?e+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),o):(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),e+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),o)),this.ani.progressEnd(t?1:0,e,i)}}),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,o,i){const e=await this.lock();let n=!1;try{n=await this.transition(t,o,i)}catch(r){console.error(r)}return e(),n}async setRouteId(t,o,i){return{changed:await this.setRoot(t,o,{duration:"root"===i?0:void 0,direction:"back"===i?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,o,i){if(this.activeComponent===t)return!1;const e=this.activeEl,n=await Object(a.a)(this.delegate,this.el,t,["ion-page","ion-page-invisible"],o);return this.activeComponent=t,this.activeEl=n,await this.commit(n,e,i),await Object(a.b)(this.delegate,e),!0}async transition(t,o,i={}){if(o===t)return!1;this.ionNavWillChange.emit();const{el:e,mode:r}=this,s=this.animated&&n.b.getBoolean("animated",!0),a=this.animation||i.animationBuilder||n.b.get("navAnimation");return await Object(l.e)(Object.assign({mode:r,animated:s,animationBuilder:a,enteringEl:t,leavingEl:o,baseEl:e,progressCallback:i.progressAnimation?t=>this.ani=t:void 0},i)),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise(t=>o=t),void 0!==t&&await t,o}render(){return Object(e.i)("slot",null)}get el(){return Object(e.f)(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}},O=class{constructor(t){Object(e.l)(this,t),this.ionStyle=Object(e.d)(this,"ionStyle",7)}sizeChanged(){this.emitStyle()}connectedCallback(){this.emitStyle()}emitStyle(){const t=this.getSize();this.ionStyle.emit({[`title-${t}`]:!0})}getSize(){return void 0!==this.size?this.size:"default"}getMode(){const t=Object(e.e)(this),o=this.el.closest("ion-toolbar");return o&&o.mode||t}render(){const t=this.getMode(),o=this.getSize();return Object(e.i)(e.a,{class:Object.assign({[t]:!0,[`title-${t}`]:!0,[`title-${o}`]:!0},Object(s.a)(this.color))},Object(e.i)("div",{class:"toolbar-title"},Object(e.i)("slot",null)))}get el(){return Object(e.f)(this)}static get watchers(){return{size:["sizeChanged"]}}static get style(){return":host{--color:initial;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}:host(.title-ios.title-default),:host(.title-ios.title-large){left:0;top:0;padding-left:90px;padding-right:90px;padding-top:0;padding-bottom:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]).title-ios.title-default,:host-context([dir=rtl]).title-ios.title-large,:host-context([dir=rtl]):host(.title-ios.title-default),:host-context([dir=rtl]):host(.title-ios.title-large){left:unset;right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-default),:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-md){padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:.0125em}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-md){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host(.title-ios.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;width:100%;height:100%;font-size:13px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-md.title-small){width:100%;height:100%;font-size:15px;font-weight:400}:host(.title-ios.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;bottom:0;-ms-flex-align:end;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.title-ios.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}"}},S=class{constructor(t){Object(e.l)(this,t),this.childrenStyles=new Map}componentWillLoad(){const t=Array.from(this.el.querySelectorAll("ion-buttons")),o=t.find(t=>"start"===t.slot);o&&o.classList.add("buttons-first-slot");const i=t.reverse(),e=i.find(t=>"end"===t.slot)||i.find(t=>"primary"===t.slot)||i.find(t=>"secondary"===t.slot);e&&e.classList.add("buttons-last-slot")}childrenStyle(t){t.stopPropagation();const o=t.target.tagName,i=t.detail,e={},n=this.childrenStyles.get(o)||{};let r=!1;Object.keys(i).forEach(t=>{const o=`toolbar-${t}`,s=i[t];s!==n[o]&&(r=!0),s&&(e[o]=!0)}),r&&(this.childrenStyles.set(o,e),this.el.forceUpdate())}render(){const t=Object(e.e)(this),o={};return this.childrenStyles.forEach(t=>{Object.assign(o,t)}),Object(e.i)(e.a,{class:Object.assign(Object.assign({"in-toolbar":Object(s.c)("ion-toolbar",this.el),[t]:!0},o),Object(s.a)(this.color))},Object(e.i)("div",{class:"toolbar-background"}),Object(e.i)("div",{class:"toolbar-container"},Object(e.i)("slot",{name:"start"}),Object(e.i)("slot",{name:"secondary"}),Object(e.i)("div",{class:"toolbar-content"},Object(e.i)("slot",null)),Object(e.i)("slot",{name:"primary"}),Object(e.i)("slot",{name:"end"})))}get el(){return Object(e.f)(this)}static get style(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background{top:0;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-background,::slotted(ion-progress-bar){left:0;right:0;bottom:0;position:absolute}:host{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:3px;--padding-bottom:3px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}:host(.toolbar-segment){--min-height:auto}:host(.toolbar-searchbar) .toolbar-container{padding-top:0;padding-bottom:0}:host(.toolbar-searchbar) ::slotted(*){-ms-flex-item-align:start;align-self:start}:host(.toolbar-searchbar) ::slotted(ion-chip){margin-top:3px}:host(.toolbar-searchbar) ::slotted(ion-back-button){height:38px}::slotted(ion-buttons){min-height:38px}::slotted([slot=start]){-ms-flex-order:2;order:2}::slotted([slot=secondary]){-ms-flex-order:3;order:3}::slotted([slot=primary]){-ms-flex-order:5;order:5;text-align:end}::slotted([slot=end]){-ms-flex-order:6;order:6;text-align:end}:host(.toolbar-title-large) .toolbar-container{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:start;align-items:flex-start}:host(.toolbar-title-large) .toolbar-content ion-title{-ms-flex:1;flex:1;-ms-flex-order:8;order:8;min-width:100%}"}}}}]);