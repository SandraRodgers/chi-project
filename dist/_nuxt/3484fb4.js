(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{344:function(t,e,n){"use strict";t.exports=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+n[i]}),"")+t[l]}},345:function(t,e,n){var content=n(491);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("4a4d8b60",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n(345)},491:function(t,e,n){(e=n(32)(!1)).push([t.i,"p[data-v-504cec66]{padding-bottom:14px}",""]),t.exports=e},507:function(t,e,n){"use strict";n.r(e);var r=n(122),l=(n(31),n(4)),c=n(344),o=n.n(c),f=n(121),x=n(80);function d(){var data=Object(r.a)(["*[_type == 'information'&& name=='mission'][0]"]);return d=function(){return data},data}function m(){var data=Object(r.a)(["*[_type == 'information'&& name=='about']"]);return m=function(){return data},data}var w=n.n(x)()(f.a),h={methods:{imageUrlFor:function(source){return w.image(source)}},data:function(){return{aboutEntries:[]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$sanity,r=o()(m()),l=o()(d()),e.next=5,n.fetch(r);case 5:return c=e.sent,e.next=8,n.fetch(l);case 8:return f=e.sent,e.abrupt("return",{aboutUs:c,mission:f});case 10:case"end":return e.stop()}}),e)})))()}},v=(n(490),n(8)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-whitesmoke pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[n("hr",{staticClass:"h-2 mt-10 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12"},[n("h1",{staticClass:"title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 "},[t._v(t._s(t.mission.title))]),t._v(" "),n("div",{staticClass:"flex flex-col px-4 w-11/12"},t._l(t.mission.description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1)]),t._v(" "),t._l(t.aboutUs,(function(e){return n("div",{key:e.id,staticClass:"flex items-center justify-center flex-col bg-white w-11/12"},[n("h1",{staticClass:"title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8"},[t._v(t._s(e.title))]),t._v(" "),n("img",{staticClass:"h-64 mt-10",attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),n("h2",{staticClass:"flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-xl bg-white pt-4 md:pt-6 lg:pt-8 "},[t._v(t._s(e.subtitle))]),t._v(" "),n("div",{staticClass:"px-14"},[n("div",{staticClass:"flex items-start  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[n("div",{staticClass:"flex flex-col px-4 w-6/6"},t._l(e.description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1)])])])})),t._v(" "),n("hr",{staticClass:"h-2 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})],2)}),[],!1,null,"504cec66",null);e.default=component.exports}}]);