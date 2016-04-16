/*jshint ignore:start*/
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csscalc-csscolumns-flexbox-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],n=g[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),w.push((o?"":"no-")+a.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?x.className.baseVal=n:x.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function l(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function f(e,t,r,o){var s,a,f,u,c="modernizr",d=i("div"),p=l();if(parseInt(r,10))for(;r--;)f=i("div"),f.id=o?o[r]:c+(r+1),d.appendChild(f);return s=i("style"),s.type="text/css",s.id="s"+c,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),a=t(d,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):d.parentNode.removeChild(d),!!a}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+u(n[o])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function p(e,n,o,s){function l(){u&&(delete P.style,delete P.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var f=c(e,o);if(!r(f,"undefined"))return f}for(var u,p,m,h,v,y=["modernizr","tspan"];!P.style;)u=!0,P.modElem=i(y.shift()),P.style=P.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],v=P.style[h],a(h,"-")&&(h=d(h)),P.style[h]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?h:!0;try{P.style[h]=o}catch(g){}if(P.style[h]!=v)return l(),"pfx"==n?h:!0}return l(),!1}function m(e,n){return function(){return e.apply(n,arguments)}}function h(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?m(o,t||n):o);return!1}function v(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?p(a,n,o,s):(a=(e+" "+z.join(i+" ")+i).split(" "),h(a,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=[],x=n.documentElement,_="svg"===x.nodeName.toLowerCase(),b=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=b,Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=i("a");return t.style.cssText=e+b.join(n+e),!!t.style.length});var S="Moz O ms Webkit",k=C._config.usePrefixes?S.split(" "):[];C._cssomPrefixes=k;var T={elem:i("modernizr")};Modernizr._q.push(function(){delete T.elem});var P={style:T.elem.style};Modernizr._q.unshift(function(){delete P.style});var z=C._config.usePrefixes?S.toLowerCase().split(" "):[];C._domPrefixes=z,C.testAllProps=v,C.testAllProps=y,function(){Modernizr.addTest("csscolumns",function(){var e=!1,n=y("columnCount");try{(e=!!n)&&(e=new Boolean(e))}catch(t){}return e});for(var e,n,t=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<t.length;r++)e=t[r].toLowerCase(),n=y("column"+t[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(n=n||y(t[r])),Modernizr.addTest("csscolumns."+e,n)}(),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),o(),s(w),delete C.addTest,delete C.addAsyncTest;for(var E=0;E<Modernizr._q.length;E++)Modernizr._q[E]();e.Modernizr=Modernizr}(window,document);
