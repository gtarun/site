!function(e){function t(e){if(e in d.style)return e;var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1);if(e in d.style)return e;for(var i=0;i<t.length;++i){var r=t[i]+n;if(r in d.style)return r}}function n(){return d.style[h.transform]="",d.style[h.transform]="rotateY(90deg)",""!==d.style[h.transform]}function i(e){return"string"==typeof e&&this.parse(e),this}function r(e,t,n){t===!0?e.queue(n):t?e.queue(t,n):n()}function o(t){var n=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=l(t),-1===e.inArray(t,n)&&n.push(t)}),n}function a(t,n,i,r){var a=o(t);e.cssEase[i]&&(i=e.cssEase[i]);var s=""+u(n)+" "+i;parseInt(r,10)>0&&(s+=" "+u(r));var l=[];return e.each(a,function(e,t){l.push(t+" "+s)}),l.join(", ")}function s(t,n){n||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=h.transform,e.cssHooks[t]={get:function(n){var i=e(n).css("transit:transform");return i.get(t)},set:function(n,i){var r=e(n).css("transit:transform");r.setFromString(t,i),e(n).css({"transit:transform":r})}}}function l(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function c(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+t:e}function u(t){var n=t;return e.fx.speeds[n]&&(n=e.fx.speeds[n]),c(n,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var d=document.createElement("div"),h={},p=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;h.transition=t("transition"),h.transitionDelay=t("transitionDelay"),h.transform=t("transform"),h.transformOrigin=t("transformOrigin"),h.transform3d=n();var f={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},m=h.transitionEnd=f[h.transition]||null;for(var g in h)h.hasOwnProperty(g)&&"undefined"==typeof e.support[g]&&(e.support[g]=h[g]);d=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new i},set:function(t,n){var r=n;r instanceof i||(r=new i(r)),t.style[h.transform]="WebkitTransform"!==h.transform||p?r.toString():r.toString(!0),e(t).data("transform",r)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[h.transformOrigin]},set:function(e,t){e.style[h.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[h.transition]},set:function(e,t){e.style[h.transition]=t}}),s("scale"),s("translate"),s("rotate"),s("rotateX"),s("rotateY"),s("rotate3d"),s("perspective"),s("skewX"),s("skewY"),s("x",!0),s("y",!0),i.prototype={setFromString:function(e,t){var n="string"==typeof t?t.split(","):t.constructor===Array?t:[t];n.unshift(e),i.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=c(e,"deg")},rotateX:function(e){this.rotateX=c(e,"deg")},rotateY:function(e){this.rotateY=c(e,"deg")},scale:function(e,t){void 0===t&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=c(e,"deg")},skewY:function(e){this.skewY=c(e,"deg")},perspective:function(e){this.perspective=c(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==e&&void 0!==e&&(this._translateX=c(e,"px")),null!==t&&void 0!==t&&(this._translateY=c(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=c(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,i){t.setFromString(n,i)})},toString:function(e){var t=[];for(var n in this)if(this.hasOwnProperty(n)){if(!h.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,n,i,o){var s=this,l=0,c=!0;"function"==typeof n&&(o=n,n=void 0),"function"==typeof i&&(o=i,i=void 0),"undefined"!=typeof t.easing&&(i=t.easing,delete t.easing),"undefined"!=typeof t.duration&&(n=t.duration,delete t.duration),"undefined"!=typeof t.complete&&(o=t.complete,delete t.complete),"undefined"!=typeof t.queue&&(c=t.queue,delete t.queue),"undefined"!=typeof t.delay&&(l=t.delay,delete t.delay),"undefined"==typeof n&&(n=e.fx.speeds._default),"undefined"==typeof i&&(i=e.cssEase._default),n=u(n);var d=a(t,n,i,l),p=e.transit.enabled&&h.transition,f=p?parseInt(n,10)+parseInt(l,10):0;if(0===f){var g=function(e){s.css(t),o&&o.apply(s),e&&e()};return r(s,c,g),s}var y={},v=function(n){var i=!1,r=function(){i&&s.unbind(m,r),f>0&&s.each(function(){this.style[h.transition]=y[this]||null}),"function"==typeof o&&o.apply(s),"function"==typeof n&&n()};f>0&&m&&e.transit.useTransitionEnd?(i=!0,s.bind(m,r)):window.setTimeout(r,f),s.each(function(){f>0&&(this.style[h.transition]=d),e(this).css(t)})},b=function(e){this.offsetWidth,v(e)};return r(s,c,b),this},e.transit.getTransitionValue=a}(jQuery);