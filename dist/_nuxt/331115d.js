(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{401:function(t,e,n){"use strict";t.exports=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+n[i]}),"")+t[l]}},410:function(t,e,n){var content=n(567);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("927aa41c",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(410)},567:function(t,e,n){(e=n(42)(!1)).push([t.i,"p[data-v-5854ce17]{padding-bottom:14px}b[data-v-5854ce17],strong[data-v-5854ce17]{font-weight:600}",""]),t.exports=e},602:function(t,e,n){"use strict";n.r(e);var r=n(145),l=(n(28),n(2)),c=n(401),o=n.n(c),d=n(85),m=n(62);function x(){var data=Object(r.a)(["*[_type == 'information'&& name=='mission'][0]"]);return x=function(){return data},data}function f(){var data=Object(r.a)(["*[_type == 'information'&& name=='about']"]);return f=function(){return data},data}var w=n.n(m)()(d.a),h={methods:{imageUrlFor:function(source){return w.image(source)}},data:function(){return{}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$sanity,r=o()(f()),l=o()(x()),e.next=5,n.fetch(r);case 5:return c=e.sent,e.next=8,n.fetch(l);case 8:return d=e.sent,e.abrupt("return",{aboutUs:c,mission:d});case 10:case"end":return e.stop()}}),e)})))()}},v=(n(566),n(13)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[n("hr",{staticClass:"h-2 mt-10 w-11/12 rounded-t-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl"},[n("h1",{staticClass:"title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 "},[t._v(t._s(t.mission.title))]),t._v(" "),n("div",{staticClass:"flex flex-col px-0 lg:px-4 md:px-2 sm:px-0 w-11/12 text-md lg:text-base text-center"},t._l(t.mission.description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1),t._v(" "),t._l(t.aboutUs,(function(e){return n("div",{key:e.id,staticClass:"flex items-center justify-center flex-col bg-white w-11/12"},[n("h1",{staticClass:"title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-2 md:py-4 lg:py-4 sm:py-2"},[t._v(t._s(e.title))]),t._v(" "),n("img",{staticClass:"h-40 md:h-52 lg:h-80 sm:h-40 mt-4 lg:mt-10 md:mt-6 sm:mt-4 rounded-md",attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),n("h2",{staticClass:"flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-xl lg:text-2xl bg-white pt-4 md:pt-6 lg:pt-8 font-bold"},[t._v(t._s(e.subtitle))]),t._v(" "),n("div",{staticClass:"px-0 md:px-10 lg:px-14"},[n("div",{staticClass:"flex items-start  py-4 md:py-6 lg:py-8 bg-white text-sm md:text-base lg:text-base sm:text-sm"},[n("div",{staticClass:"flex flex-col px-4 w-6/6"},t._l(e.description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1)])])])}))],2),t._v(" "),n("hr",{staticClass:"h-2 w-11/12 rounded-b-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}),[],!1,null,"5854ce17",null);e.default=component.exports}}]);