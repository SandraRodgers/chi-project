(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(t,e,o){"use strict";o.r(e);var r=o(10),n=o(26),l=o(88),c=o(63);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.n(c)()(l.a),h={computed:{logo:function(){return this.$store.state.logo}},methods:f(f({},Object(n.b)({toggleMobileMenu:"toggle",showDropdown:"show",hideDropdown:"hide",setLogo:"setLogo"})),{},{imageUrlFor:function(source){return m.image(source)}})},v=(o(327),o(13)),component=Object(v.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"campaign z-40 w-screen relative"},[e("div",{staticClass:"bg-black flex justify-center opacity-100 text-center sm:hidden md:flex hidden lg:flex flex hidden py-2 z-60 relative"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"lg:flex md:hidden hidden mr-4 -mt-8 absolute top-0 h-72 :h-40 -left-0 z-50",attrs:{src:this.imageUrlFor(this.logo)}})]),this._v(" "),e("nuxt-link",{attrs:{to:{path:"/donate"}}},[e("div",{staticClass:"flex text-white text-xl"},[this._v("Sponsor a pup's journey to becoming heartworm free! "),e("div",{staticClass:"cursor-pointer transform hover:text-middleYellow transition-all duration-500 font-medium hover:scale-125 hover:font-black ml-6"},[this._v("DONATE NOW")])])])],1),this._v(" "),this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-black opacity-90 text-center py-2 flex sm:flex md:hidden lg:hidden z-40 justify-center"},[e("p",{staticClass:"font-sans text-white text-sm justify-center"},[this._v("Save a chihuahua. DONATE NOW")])])}],!1,null,"23c6af36",null);e.default=component.exports},138:function(t,e,o){"use strict";o.r(e);var r=o(10),n=o(26),l=o(88),c=o(63);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=o.n(c)()(l.a),h={props:["assetId"],computed:{showMobileMenu:function(){return this.$store.state.showMobileMenu},logo:function(){return this.$store.state.logo}},methods:f(f({},Object(n.b)({toggleMobileMenu:"toggle",showDropdown:"show",hideDropdown:"hide",setLogo:"setLogo"})),{},{imageUrlFor:function(source){return m.image(source)}})},v=o(13),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-screen"},[o("div",{staticClass:"bg-transparent z-20 lg:hidden md:hidden w-screen"},[o("div",{staticClass:"w-screen flex items-end bg-white h-16"},[o("div",{staticClass:"flex pl-4 pb-5 w-16 relative",on:{click:t.toggleMobileMenu}},[o("div",{},[o("svg",{staticClass:"fill-current text-black",attrs:{viewBox:"0 0 100 70",width:"40",height:"20"}},[o("rect",{attrs:{width:"90",height:"10"}}),t._v(" "),o("rect",{attrs:{y:"30",width:"90",height:"10"}}),t._v(" "),o("rect",{attrs:{y:"60",width:"90",height:"10"}})])])]),t._v(" "),o("span",{staticClass:"w-screen flex justify-center bg-transparent mr-16 z-40"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"sm:h-28 md:h-56 h-28 relative top-10 md:top-36 sm:top-10",attrs:{src:t.imageUrlFor(t.logo)}})])],1)])]),t._v(" "),o("div",{staticClass:"w-full nav-main pb-4 z-30 lg:flex md:flex flex-row-reverse content-around py-2 pr-8 bg-white hidden",on:{mouseenter:t.hideDropdown}},[o("div",{staticClass:"flex space-x-20 lg:space-x-20 md:space-x-12 text-lg lg:text-lg md:text-md"},[o("nuxt-link",{attrs:{to:{path:"/about"}}},[o("p",{staticClass:"cursor-pointer z-50 relative cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125"},[t._v("ABOUT")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/events"}}},[o("p",{staticClass:"cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125"},[t._v("EVENTS")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/policies"}}},[o("p",{staticClass:"cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125"},[t._v("POLICIES")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/success"}}},[o("p",{staticClass:"cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125"},[t._v("SUCCESS STORIES")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/contact"}}},[o("p",{staticClass:"cursor-pointer transform bg-white hover:text-starCommandBlue transition-all duration-500 font-medium hover:scale-125"},[t._v("CONTACT US")])])],1)])])}),[],!1,null,"0274d3fc",null);e.default=component.exports},139:function(t,e,o){"use strict";o.r(e);var r=o(10),n=o(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={data:function(){return{}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({toggleMobileMenu:"toggle",showDropdown:"show",hideDropdown:"hide"}))},d=(o(329),o(13)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav-sub z-20"},[o("div",{staticClass:"lg:flex md:flex flex-row-reverse content-around bg-transparent right-0 hidden"},[o("div",{staticClass:"relative z-20 flex lg:space-x-12 space-x-12 md:space-x-6 text-lg md:text-md bg-carolinaBlue  px-4 py-2 text-white rounded-b-lg border-b border-opacity-25 border-starCommandBlue"},[o("p",{staticClass:"transform hover:text-black transition-all duration-500 font-medium hover:scale-105 cursor-pointer",on:{mouseenter:t.showDropdown}},[t._v("\n                CHIHUAHUAS \n                "),o("span",{staticClass:"icon"},[o("font-awesome-icon",{attrs:{icon:["fas","caret-down"]}})],1)]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/foster"}}},[o("p",{staticClass:"transform hover:text-black transition-all duration-500 font-medium hover:scale-110 cursor-pointer",on:{mouseenter:t.hideDropdown}},[t._v("FOSTER")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/adopt"}}},[o("p",{staticClass:"transform hover:text-black transition-all duration-500 font-medium hover:scale-110 cursor-pointer"},[t._v("ADOPT")])]),t._v(" "),o("p",{staticClass:"transform hover:text-black transition-all duration-500 font-medium hover:scale-110 cursor-pointer"},[t._v("NEWSLETTER")]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/donate"}}},[o("p",{staticClass:"transform hover:text-black transition-all duration-500 font-medium hover:scale-110 cursor-pointer"},[t._v("DONATE")])])],1),t._v(" "),o("div",{staticClass:"absolute z-10 bg-white top-24 pt-6 right-96 border border-opacity-25 border-davysGrey transition-opacity duration-800 ease-in rounded-sm mr-24 md:mr-0 lg:mr-24",class:{"opacity-0 invisible":!this.$store.state.showAdoptDropdown,"flex flex-col opacity-100 visible":this.$store.state.showAdoptDropdown}},[o("div",{staticClass:"pt-8",on:{mouseleave:t.hideDropdown}},[o("nuxt-link",{attrs:{to:{path:"/adopt/midwest"}},nativeOn:{click:function(e){return t.hideDropdown(e)}}},[o("p",{staticClass:"flex justify-center px-4 py-3 transform hover:text-black transition-all duration-500 font-medium hover:scale-110 hover:bg-gray-200"},[t._v("MIDWEST DOGS")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/adopt/southeast"}},nativeOn:{click:function(e){return t.hideDropdown(e)}}},[o("p",{staticClass:"flex justify-center px-4 py-3 transform hover:text-black transition-all duration-500 font-medium hover:scale-110 hover:bg-gray-200"},[t._v("SOUTHEAST DOGS")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/adopt/southwest"}},nativeOn:{click:function(e){return t.hideDropdown(e)}}},[o("p",{staticClass:"flex justify-center px-4 py-3 transform hover:text-black transition-all duration-500 font-medium hover:scale-110 hover:bg-gray-200"},[t._v("SOUTHWEST DOGS")])])],1)])])])}),[],!1,null,"430d7d8c",null);e.default=component.exports},143:function(t,e,o){"use strict";var r=o(0),n=o(221),l=o.n(n);r.a.component("block-content",l.a)},183:function(t,e,o){var content=o(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("56b15182",content,!0,{sourceMap:!1})},196:function(t,e,o){var content=o(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("1620d341",content,!0,{sourceMap:!1})},197:function(t,e,o){var content=o(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("ad69dc0c",content,!0,{sourceMap:!1})},223:function(t,e,o){"use strict";var r={computed:{showMobileMenu:function(){return this.$store.state.showMobileMenu}}},n=(o(265),o(13)),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("mobile-menu"),this._v(" "),e("navbar"),this._v(" "),e("Nuxt",{staticClass:"relative -top-12",class:{hidden:this.showMobileMenu,flex:!this.showMobileMenu}}),this._v(" "),e("footer-main")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{MobileMenu:o(401).default,Navbar:o(402).default,FooterMain:o(403).default})},226:function(t,e,o){o(227),t.exports=o(228)},264:function(t,e,o){t.exports=o.p+"img/bluebackground.7e56b02.png"},265:function(t,e,o){"use strict";o(183)},266:function(t,e,o){(e=o(38)(!1)).push([t.i,"html{margin:0}",""]),t.exports=e},327:function(t,e,o){"use strict";o(196)},328:function(t,e,o){(e=o(38)(!1)).push([t.i,'.campaign[data-v-23c6af36]{font-family:"Poppins";font-weight:300}',""]),t.exports=e},329:function(t,e,o){"use strict";o(197)},330:function(t,e,o){(e=o(38)(!1)).push([t.i,'.nav-sub[data-v-430d7d8c]{font-family:"Poppins";font-weight:400}',""]),t.exports=e},331:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return d})),o.d(e,"mutations",(function(){return f})),o.d(e,"getters",(function(){return m})),o.d(e,"actions",(function(){return h}));var r=o(146),n=(o(29),o(2)),l=o(149);function c(){var data=Object(r.a)(["*[_type == 'landingBannerAndLogo']{imageFile}"]);return c=function(){return data},data}var d=function(){return{showMobileMenu:!1,showAdoptDropdown:!1,logo:null}},f={toggle:function(t){t.showMobileMenu=!t.showMobileMenu},show:function(t){t.showAdoptDropdown=!0},hide:function(t){t.showAdoptDropdown=!1},SET_LOGO:function(t,e){t.logo=e}},m={getLogo:function(t){return t.logo}},h={nuxtServerInit:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var r,n,d;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.commit,n=Object(l.a)(c()),o.next=4,e.$sanity.fetch(n);case 4:d=o.sent,r("SET_LOGO",d[0].imageFile);case 6:case"end":return o.stop()}}),o)})))()}}},401:function(t,e,o){"use strict";o.r(e);var r=o(10),n=o(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var c={computed:{showMobileMenu:function(){return this.$store.state.showMobileMenu}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({close:"toggle"}))},d=o(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"relative z-10 transition-transform duration-300 ease-in",class:{"h-0 transform scale-y-0":!t.showMobileMenu,"flex h-screen transfrom scale-y-100 origin-top bg-starCommandBlue":t.showMobileMenu}},[o("div",{staticClass:"flex justify-center items-start pt-14 w-16 h-full relative pl-10",on:{click:t.close}},[o("div",{},[o("svg",{staticClass:"stroke-current text-white",attrs:{width:"50",height:"25",viewBox:"0 0 40 40","stroke-width":"5",overflow:"visible"}},[o("line",{attrs:{x2:"40",y2:"40"}}),t._v(" "),o("line",{attrs:{x1:"40",y2:"40"}})])])]),t._v(" "),o("div",{staticClass:"flex flex-col pt-14 pl-10 w-60 text-white text-2xl",class:{hidden:!t.showMobileMenu,flex:t.showMobileMenu}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("Home")]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/adopt"}}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("Adopt")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/foster"}}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("Foster")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/about"}}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("About")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/events"}}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("Events")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/contact"}}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("Contact")])]),t._v(" "),o("nuxt-link",{attrs:{to:{path:"/donate"}}},[o("p",{staticClass:"hover:text-middleYellow cursor-default py-4 border-b border-white pl-4",on:{click:t.close}},[t._v("Donate")])])],1)])])}),[],!1,null,"21e2cbcb",null);e.default=component.exports},402:function(t,e,o){"use strict";o.r(e);var r=o(137),n=o(138),l=o(139),c={components:{campaign:r.default,NavMain:n.default,NavSub:l.default},computed:{showMobileMenu:function(){return this.$store.state.showMobileMenu}}},d=o(13),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-screen flex flex-col sticky top-0 z-40",class:{hidden:this.showMobileMenu,flex:!this.showMobileMenu}},[e("campaign"),this._v(" "),e("nav-main"),this._v(" "),e("nav-sub")],1)}),[],!1,null,"1fe07aa2",null);e.default=component.exports;installComponents(component,{Campaign:o(137).default,NavMain:o(138).default,NavSub:o(139).default})},403:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{contactEmail:""}},computed:{getYear:function(){return(new Date).getFullYear()},showMobileMenu:function(){return this.$store.state.showMobileMenu}}},n=o(13),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer bg-black relative text-white mb-8 my-4",class:{hidden:t.showMobileMenu,flex:!t.showMobileMenu}},[o("div",[o("div",{staticClass:"hidden lg:flex md:flex sm:hidden w-full  px-10 lg:px-24 md:px-10"},[o("div",{staticClass:"flex w-7/12"},[o("div",{staticClass:"flex flex-col w-7/12"},[o("span",{staticClass:"font-bold uppercase mb-2"},[t._v("SUPPORT US")]),t._v(" "),o("span",{staticClass:"my-2 max-w-md text-sm mr-24"},[t._v("CRT is a nonprofit, public charity. We have no paid employees. Please consider supporting us through a donation or on a volunteer basis.")]),t._v(" "),o("nuxt-link",{staticClass:"text-sm bg-middleYellow w-6/12 mt-2 py-1 rounded-sm text-black rounded-sm hover:opacity-70 font-medium",attrs:{to:{path:"/donate"},tag:"button"}},[t._v("DONATE")])],1),t._v(" "),o("div",{staticClass:"flex flex-col w-6/12"},[o("span",{staticClass:"font-bold w-full uppercase mb-2"},[t._v("Connect")]),t._v(" "),o("div",{staticClass:"flex items-center w-full"},[o("a",{staticClass:"my-2 fa-2x",attrs:{href:"https://www.facebook.com/CuteChihuahuas"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),t._v(" "),o("a",{staticClass:"mx-4",attrs:{href:"https://www.facebook.com/CuteChihuahuas"}},[t._v("Facebook")])]),t._v(" "),o("div",{staticClass:"flex items-center w-full"},[o("a",{staticClass:"my-2 fa-2x",attrs:{href:"https://www.instagram.com/chirescue_dfw/"}},[o("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),o("a",{staticClass:"mx-4",attrs:{href:"https://www.instagram.com/chirescue_dfw/"}},[t._v("Instagram")])])])]),t._v(" "),o("div",{staticClass:"flex w-5/12"},[o("div",{staticClass:"flex flex-col"},[o("span",{staticClass:"font-bold uppercase mb-2"},[t._v("Newsletter")]),t._v(" "),o("span",{staticClass:"my-2 max-w-md text-sm mr-24"},[t._v("Sign up to receive our bi-yearly newsletter:")]),t._v(" "),o("div",{staticClass:"field flex w-12/12 py-2"},[o("label",{staticClass:"flex items-center label w-2/12 text-xs lg:text-base sm:text-xs"},[t._v("Email")]),t._v(" "),o("div",{staticClass:"control w-8/12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.contactEmail,expression:"contactEmail"}],staticClass:"input w-full bg-black border border-white py-1",attrs:{type:"email"},domProps:{value:t.contactEmail},on:{input:function(e){e.target.composing||(t.contactEmail=e.target.value)}}})])])])])]),t._v(" "),o("div",{staticClass:"hidden sm:hidden md:flex lg:flex flex-col mt-12 items-center"},[o("p",{staticClass:"text-sm font-bold mb-2"},[t._v("\n            Copyright © "+t._s(t.getYear)+"\n        ")])])]),t._v(" "),o("div",{staticClass:"px-8 flex sm:flex md:hidden lg:hidden flex-col"},[o("div",{staticClass:"flex flex-col"},[o("span",{staticClass:"font-bold uppercase mb-2"},[t._v("SUPPORT US")]),t._v(" "),o("span",{staticClass:"my-2 max-w-md text-sm mr-4"},[t._v("CRT is a nonprofit, public charity. We have no paid employees. Please consider supporting us through a donation or on a volunteer basis.")]),t._v(" "),o("nuxt-link",{staticClass:"text-sm bg-middleYellow w-6/12 mt-2 py-1 rounded-sm text-black rounded-sm hover:opacity-70 font-medium",attrs:{to:{path:"/donate"},tag:"button"}},[t._v("DONATE")])],1),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("span",{staticClass:"font-bold w-full uppercase mt-12 mb-2"},[t._v("Connect")]),t._v(" "),o("div",{staticClass:"flex items-center w-full"},[o("a",{staticClass:"my-2 fa-2x",attrs:{href:"https://www.facebook.com/CuteChihuahuas"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),o("span",{staticClass:"mx-4",attrs:{href:"https://www.facebook.com/CuteChihuahuas"}},[t._v("Facebook")])]),t._v(" "),o("div",{staticClass:"flex items-center w-full"},[o("a",{staticClass:"my-2 fa-2x",attrs:{href:"https://www.instagram.com/chirescue_dfw/"}},[o("font-awesome-icon",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),o("a",{staticClass:"mx-4",attrs:{href:"https://www.instagram.com/chirescue_dfw/"}},[t._v("Instagram")])])]),t._v(" "),o("div",{staticClass:"flex flex-col"},[o("span",{staticClass:"font-bold uppercase mb-2 mt-12"},[t._v("Newsletter")]),t._v(" "),o("span",{staticClass:"my-2 max-w-md text-sm mr-24"},[t._v("Sign up to receive our bi-yearly newsletter:")]),t._v(" "),o("div",{staticClass:"field flex w-12/12 py-2"},[o("label",{staticClass:"flex items-center label w-3/12 text-xs lg:text-base sm:text-xs font-medium"},[t._v("Email")]),t._v(" "),o("div",{staticClass:"control w-9/12"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.contactEmail,expression:"contactEmail"}],staticClass:"input w-full bg-black border border-white py-1",attrs:{type:"email"},domProps:{value:t.contactEmail},on:{input:function(e){e.target.composing||(t.contactEmail=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"flex sm:flex md:hidden lg:hidden flex-col mt-12 items-center"},[o("p",{staticClass:"text-sm font-bold mb-2"},[t._v("\n                Copyright © "+t._s(t.getYear)+"\n            ")])])])])])}),[],!1,null,"bca02624",null);e.default=component.exports},88:function(t,e,o){"use strict";var r=o(84),n=o.n(r);e.a=n()({projectId:"05mmi4eq",dataset:"production",useCdn:!0})}},[[226,19,1,20]]]);