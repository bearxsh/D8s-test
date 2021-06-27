(self.webpackChunk=self.webpackChunk||[]).push([[5266],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3059:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(640),l=["components"],s={id:"tutorials-index",slug:"index",title:"Redux Tutorials Index",sidebar_label:"Tutorials Index",description:"Overview of the Redux tutorial pages"},u="Redux Tutorials Index",c={unversionedId:"tutorials/tutorials-index",id:"tutorials/tutorials-index",isDocsHomePage:!1,title:"Redux Tutorials Index",description:"Overview of the Redux tutorial pages",source:"@site/../docs/tutorials/tutorials-index.md",sourceDirName:"tutorials",slug:"/tutorials/index",permalink:"/tutorials/index",version:"current",frontMatter:{id:"tutorials-index",slug:"index",title:"Redux Tutorials Index",sidebar_label:"Tutorials Index",description:"Overview of the Redux tutorial pages"},sidebar:"docs",previous:{title:"Examples",permalink:"/introduction/examples"},next:{title:"Quick Start",permalink:"/tutorials/quick-start"}},d=[{value:"Redux Official Tutorials",id:"redux-official-tutorials",children:[]},{value:"Additional Resources",id:"additional-resources",children:[{value:"Learn Modern Redux Livestream",id:"learn-modern-redux-livestream",children:[]}]}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redux-tutorials-index"},"Redux Tutorials Index"),(0,i.kt)("h2",{id:"redux-official-tutorials"},"Redux Official Tutorials"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/quick-start"},(0,i.kt)("strong",{parentName:"a"},"Quick Start")," page")," briefly shows the basics of setting up a Redux Toolkit + React application, and the ",(0,i.kt)("a",{parentName:"p",href:"/tutorials/typescript-quick-start"},(0,i.kt)("strong",{parentName:"a"},"TypeScript Quick Start")," page")," shows how to set up Redux Toolkit and React for use with TypeScript."),(0,i.kt)("p",null,"We have two different full-size tutorials:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"./essentials/part-1-overview-concepts"},(0,i.kt)("strong",{parentName:"a"},"Redux Essentials tutorial")),' is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices.'),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"/tutorials/fundamentals/part-1-overview"},(0,i.kt)("strong",{parentName:"a"},"Redux Fundamentals tutorial")),' is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"We recommend starting with the ",(0,i.kt)("a",{parentName:"strong",href:"./essentials/part-1-overview-concepts"},"Redux Essentials tutorial")),", since it covers the key points you need to know about how to get started using Redux to write actual applications."))),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("h3",{id:"learn-modern-redux-livestream"},"Learn Modern Redux Livestream"),(0,i.kt)("p",null,'Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs:'),(0,i.kt)(o.Z,{id:"9zySeP5vH9c",title:"Learn Modern Redux - Redux Toolkit, React-Redux Hooks, and RTK Query",mdxType:"LiteYouTubeEmbed"}))}m.isMDXComponent=!0},640:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=(0,n.useState)(!1),r=t[0],a=t[1],i=(0,n.useState)(!1),o=i[0],l=i[1],s=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,c=e.title,d=e.poster||"hqdefault",p="&"+e.params||0,m=e.playlist?"https://i.ytimg.com/vi/"+u+"/"+d+".jpg":"https://i.ytimg.com/vi/"+s+"/"+d+".jpg",f=e.noCookie;f=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var h=e.playlist?f+"/embed/videoseries?autoplay=1&list="+s+p:f+"/embed/"+s+"?autoplay=1"+p,v=e.activatedClass||"lyt-activated",y=e.adNetwork||!1,k=e.iframeClass||"",g=e.playerClass||"lty-playbtn",w=e.wrapperClass||"yt-lite",x=e.onIframeAdded||function(){};return n.createElement(n.Fragment,null,n.createElement("link",{rel:"preload",href:m,as:"image"}),n.createElement(n.Fragment,null,r&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:f}),n.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),y&&n.createElement(n.Fragment,null,n.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),n.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),n.createElement("div",{onPointerOver:function(){r||a(!0)},onClick:function(){o||(x(),l(!0))},className:w+" "+(o&&v),"data-title":c,style:{backgroundImage:"url("+m+")"}},n.createElement("div",{className:g}),o&&n.createElement("iframe",{className:k,title:c,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:h})))}}}]);