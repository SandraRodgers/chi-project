(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,r){"use strict";r.r(e);var o={},n=(r(248),r(8)),component=Object(n.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campaign fixed z-40 w-full"},[e("div",{staticClass:"bg-black flex justify-center opacity-90 text-center py-2 sm:flex hidden"},[e("p",{staticClass:"text-white text-xl"},[this._v("Save Shala. Be her Christmas miracle. CLICK HERE to donate now!")])]),this._v(" "),e("div",{staticClass:"bg-black opacity-90 text-center py-2 sm:hidden"},[e("p",{staticClass:"font-sans text-white text-sm justify-center"},[this._v("Save Shala. CLICK HERE")])])])}],!1,null,"bc95aa72",null);e.default=component.exports},116:function(t,e,r){"use strict";r.r(e);var o=r(10),n=r(21),c=r(121),l=r(80);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=r.n(l)()(c.a),h={props:["assetId"],computed:{showMobileMenu:function(){return this.$store.state.showMobileMenu},logo:function(){return console.log("hit logo",this.$store.state.logo),this.$store.state.logo}},methods:f(f({},Object(n.b)({toggleMobileMenu:"toggle",showDropdown:"show",hideDropdown:"hide",setLogo:"setLogo"})),{},{imageUrlFor:function(source){return v.image(source)}})},m=r(8),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-screen"},[r("div",{staticClass:"fixed bg-transparent z-20 lg:hidden w-screen"},[r("div",{staticClass:"w-screen absolute h-24 flex items-end bg-white"},[r("div",{staticClass:"flex justify-center items-end pl-4 pb-5 w-16 h-full relative",on:{click:t.toggleMobileMenu}},[r("div",{},[r("svg",{staticClass:"fill-current text-black",attrs:{viewBox:"0 0 100 70",width:"40",height:"20"}},[r("rect",{attrs:{width:"90",height:"10"}}),t._v(" "),r("rect",{attrs:{y:"30",width:"90",height:"10"}}),t._v(" "),r("rect",{attrs:{y:"60",width:"90",height:"10"}})])])]),t._v(" "),r("span",{staticClass:"w-screen flex justify-center bg-transparent mr-16 z-40"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"sm:h-40 md:h-56 h-40 relative top-20 md:top-36 sm:top-20",attrs:{src:t.imageUrlFor(t.logo)}})])],1)])]),t._v(" "),r("div",{staticClass:"w-full nav-main pt-14 fixed z-30 lg:flex flex-row-reverse content-around border-b border-opacity-25 border-davysGrey py-5 pr-8 bg-white hidden  font-semibold",on:{mouseenter:t.hideDropdown}},[r("div",{staticClass:"flex space-x-20 text-lg"},[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"mr-4 mt-4 absolute top-0 h-72 left-6 z-20",attrs:{src:t.imageUrlFor(t.logo)}})]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/about"}}},[r("p",{staticClass:"cursor-pointer z-50 relative"},[t._v("ABOUT")])]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/events"}}},[r("p",[t._v("EVENTS")])]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/regions"}}},[r("p",[t._v("REGIONS")])]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/success"}}},[r("p",[t._v("SUCCESS STORIES")])]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/contact"}}},[r("p",[t._v("CONTACT US")])])],1)])])}),[],!1,null,"5e29fe6e",null);e.default=component.exports},117:function(t,e,r){"use strict";r.r(e);var o=r(10),n=r(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={data:function(){return{}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({toggleMobileMenu:"toggle",showDropdown:"show",hideDropdown:"hide"}))},d=(r(310),r(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"nav-sub absolute z-20"},[r("div",{staticClass:"pt-24 lg:flex flex-row-reverse content-around bg-transparent right-0 hidden fixed mt-2"},[r("div",{staticClass:"relative z-20 flex space-x-12 text-lg bg-carolinaBlue  px-4 text-white rounded-b-lg border-b border-opacity-25 border-davysGrey"},[r("p",{staticClass:"hover:text-black cursor-pointer",on:{mouseenter:t.showDropdown}},[t._v("\n                ADOPT \n                "),r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:["fas","caret-down"]}})],1)]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/foster"}}},[r("p",{staticClass:"hover:text-black cursor-pointer",on:{mouseenter:t.hideDropdown}},[t._v("FOSTER/VOLUNTEER")])]),t._v(" "),r("p",{staticClass:"hover:text-black cursor-pointer"},[t._v("BEST FRIENDS")]),t._v(" "),r("p",{staticClass:"hover:text-black cursor-pointer"},[t._v("NEWSLETTER")]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/donate"}}},[r("p",{staticClass:"hover:text-black cursor-pointer"},[t._v("DONATE")])])],1),t._v(" "),r("div",{staticClass:"absolute z-10 bg-white top-28 left-0 border border-opacity-25 border-davysGrey transition-opacity duration-300 ease-in",class:{"opacity-0 invisible":!this.$store.state.showAdoptDropdown,"flex flex-col opacity-100 visible":this.$store.state.showAdoptDropdown}},[r("div",{staticClass:"pt-8 pb-2 px-4",on:{mouseleave:t.hideDropdown}},[r("nuxt-link",{attrs:{to:{path:"/adopt/midwest"}},nativeOn:{click:function(e){return t.hideDropdown(e)}}},[r("p",{staticClass:"py-2 border-b"},[t._v("MIDWEST DOGS")])]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/adopt/southeast"}},nativeOn:{click:function(e){return t.hideDropdown(e)}}},[r("p",{staticClass:"py-2 border-b"},[t._v("SOUTHEAST DOGS")])]),t._v(" "),r("nuxt-link",{attrs:{to:{path:"/adopt/southwest"}},nativeOn:{click:function(e){return t.hideDropdown(e)}}},[r("p",{staticClass:"py-2 border-b"},[t._v("SOUTHWEST DOGS")])])],1)])])])}),[],!1,null,"3245711f",null);e.default=component.exports},120:function(t,e,r){"use strict";var o=r(1),n=r(193),c=r.n(n);o.a.component("block-content",c.a)},121:function(t,e,r){"use strict";var o=r(56),n=r.n(o);e.a=n()({projectId:"05mmi4eq",dataset:"production",useCdn:!0})},163:function(t,e,r){var content=r(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("56b15182",content,!0,{sourceMap:!1})},164:function(t,e,r){var content=r(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("3fd400b6",content,!0,{sourceMap:!1})},177:function(t,e,r){var content=r(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("161eb65e",content,!0,{sourceMap:!1})},195:function(t,e,r){"use strict";var o={components:{},data:function(){return{logo:{}}}},n=(r(246),r(8)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("mobile-menu"),this._v(" "),e("navbar"),this._v(" "),e("Nuxt"),this._v(" "),e("footer-main")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MobileMenu:r(340).default,Navbar:r(341).default,FooterMain:r(342).default})},196:function(t,e,r){r(197),t.exports=r(198)},244:function(t,e,r){t.exports=r.p+"img/banner3a.558e869.png"},245:function(t,e,r){t.exports=r.p+"img/bluebackground.7e56b02.png"},246:function(t,e,r){"use strict";r(163)},247:function(t,e,r){(e=r(32)(!1)).push([t.i,"html{margin:0}",""]),t.exports=e},248:function(t,e,r){"use strict";r(164)},249:function(t,e,r){(e=r(32)(!1)).push([t.i,'.campaign[data-v-bc95aa72]{font-family:"Poppins";font-weight:300}',""]),t.exports=e},310:function(t,e,r){"use strict";r(177)},311:function(t,e,r){(e=r(32)(!1)).push([t.i,'.nav-sub[data-v-3245711f]{font-family:"Poppins";font-weight:400}',""]),t.exports=e},312:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return d})),r.d(e,"mutations",(function(){return f})),r.d(e,"getters",(function(){return v})),r.d(e,"actions",(function(){return h}));var o=r(122),n=(r(31),r(4)),c=r(178);function l(){var data=Object(o.a)(["*[_type == 'landingBannerAndLogo']{imageFile}"]);return l=function(){return data},data}var d=function(){return{showMobileMenu:!1,showAdoptDropdown:!1,logo:null}},f={toggle:function(t){t.showMobileMenu=!t.showMobileMenu},show:function(t){t.showAdoptDropdown=!0},hide:function(t){t.showAdoptDropdown=!1},SET_LOGO:function(t,e){t.logo=e}},v={getLogo:function(t){return t.logo}},h={nuxtServerInit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o,n,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.commit,n=Object(c.a)(l()),r.next=4,e.$sanity.fetch(n);case 4:d=r.sent,o("SET_LOGO",d[0].imageFile);case 6:case"end":return r.stop()}}),r)})))()}}},340:function(t,e,r){"use strict";r.r(e);var o=r(10),n=r(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={computed:{showMobileMenu:function(){return this.$store.state.showMobileMenu}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({close:"toggle"}))},d=r(8),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"relative h-screen bg-starCommandBlue z-10",class:{hidden:!this.showMobileMenu,flex:this.showMobileMenu}},[e("div",{staticClass:"flex justify-center items-start pt-14 w-16 h-full relative",on:{click:this.close}},[e("div",{},[e("svg",{staticClass:"stroke-current text-white",attrs:{width:"50",height:"25",viewBox:"0 0 40 40","stroke-width":"5",overflow:"visible"}},[e("line",{attrs:{x2:"40",y2:"40"}}),this._v(" "),e("line",{attrs:{x1:"40",y2:"40"}})])])]),this._v(" "),this._m(0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col pt-24 w-60 text-white text-2xl"},[r("p",{staticClass:"hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4"},[t._v("Home")]),t._v(" "),r("p",{staticClass:"hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4"},[t._v("Adopt")]),t._v(" "),r("p",{staticClass:"hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4"},[t._v("Foster")]),t._v(" "),r("p",{staticClass:"hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4"},[t._v("Sponsor")]),t._v(" "),r("p",{staticClass:"hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4"},[t._v("Volunteer")]),t._v(" "),r("p",{staticClass:"hover:text-starCommandBlue cursor-default py-4 border-b border-white pl-4"},[t._v("Donate")])])}],!1,null,"e0684afa",null);e.default=component.exports},341:function(t,e,r){"use strict";r.r(e);var o=r(115),n=r(116),c=r(117),l={components:{campaign:o.default,NavMain:n.default,NavSub:c.default}},d=r(8),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-screen"},[e("campaign"),this._v(" "),e("nav-main"),this._v(" "),e("nav-sub")],1)}),[],!1,null,"1a049fd5",null);e.default=component.exports;installComponents(component,{Campaign:r(115).default,NavMain:r(116).default,NavSub:r(117).default})},342:function(t,e,r){"use strict";r.r(e);var o={data:function(){return{}},computed:{getYear:function(){return(new Date).getFullYear()},hideFooter:function(){return this.$store.state.showMobileMenu}}},n=r(8),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer bg-black opacity-90 relative pt-1  text-white lg:px-56 px-10",class:{hidden:t.hideFooter,"flex flex-col":!t.hideFooter}},[r("div",{},[r("div",{staticClass:"sm:flex sm:mt-8"},[r("div",{staticClass:"mt-8 sm:mt-0 flex flex-col md:flex-row md:justify-around lg:justify-between"},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-col lg:ml-10 md:ml-10 sm:ml-0 ml-0 lg:items-center sm:items-start items-start w-3/6 md:4/6 sm:w-6/6 lg:w-6/6 w-6/6"},[r("span",{staticClass:"font-bold w-full uppercase mt-8 md:mt-0 mb-2"},[t._v("Connect")]),t._v(" "),r("div",{staticClass:"flex items-center w-full"},[r("span",{staticClass:"my-2 fa-3x"},[r("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),r("span",{staticClass:"mx-4"},[t._v("Facebook")])]),t._v(" "),r("div",{staticClass:"flex items-center w-full"},[r("span",{staticClass:"my-2 fa-3x"},[r("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),r("span",{staticClass:"mx-4"},[t._v("Instagram")])])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"mt-8  flex flex-col items-center"},[r("div",{staticClass:"sm:w-2/3 text-center py-6"},[r("p",{staticClass:"text-sm font-bold mb-2"},[t._v("\n                    Copyright © "+t._s(t.getYear)+"\n                ")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col px-0 md:px-10 lg:px-10"},[e("span",{staticClass:"font-bold uppercase mb-2"},[this._v("Footer header 1")]),this._v(" "),e("span",{staticClass:"my-2 max-w-md"},[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ")])])}],!1,null,"6e2c42ca",null);e.default=component.exports}},[[196,17,1,18]]]);