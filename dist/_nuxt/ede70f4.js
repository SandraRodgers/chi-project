(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{405:function(t,e,r){"use strict";t.exports=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+r[i]}),"")+t[l]}},562:function(t,e,r){var content=r(597);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("441c93f0",content,!0,{sourceMap:!1})},596:function(t,e,r){"use strict";r(562)},597:function(t,e,r){(e=r(38)(!1)).push([t.i,"b[data-v-3f5aef3a],strong[data-v-3f5aef3a]{font-weight:600}",""]),t.exports=e},616:function(t,e,r){"use strict";r.r(e);var n=r(146),l=(r(29),r(2)),c=r(405),o=r.n(c),d=r(88),f=r(63);function h(){var data=Object(n.a)(["*[_type == 'chihuahua' && region == 'midwest'] {_id, chihuahua, mainImage, slug, tagline}"]);return h=function(){return data},data}var m=r.n(f)()(d.a),x={methods:{imageUrlFor:function(source){return m.image(source)}},data:function(){return{chihuahuas:[],serializers:{types:{chihuahua:"div"}}}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,n=o()(h()),e.next=4,r.fetch(n);case 4:return l=e.sent,e.abrupt("return",{chihuahuas:l});case 6:case"end":return e.stop()}}),e)})))()}},w=(r(596),r(13)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[r("hr",{staticClass:"h-2 mt-10 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),r("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12"},[r("h1",{staticClass:"flex justify-center w-12/12 md:w-12/12 lg:w-12/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8"},[t._v("Midwest Dogs")]),t._v(" "),r("p",{staticClass:"flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-2 sm:py-2 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[t._v("All dogs listed here are adoptable in the following Midwestern states (OH / KY/ IL / MI / WI/ MN). We do transport! They are spread out throughout the Midwest in foster homes.")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"bg-white items-center md:justify-center lg:justify-center flex flex-col md:flex-row lg:flex-row xl:flex-row w-10/12 md:w-10/12 lg:w-11/12"},[r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"cards-container items-center md:justify-center lg:justify-center py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-5/6 md:w-5/6 sm-5/6 lg:w-screen"},t._l(t.chihuahuas,(function(e){return r("div",{key:e.id,staticClass:"card w-72 md:w-64 lg:w-64 sm:w-72 flex flex-col mx-10 m-6 transition-opacity duration-500 shadow-lg"},[r("img",{staticClass:"img rounded-t h-52 object-cover",attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),r("div",{staticClass:"rounded-b flex flex-col justify-around items-center card-text bg-white h-40"},[r("div",{staticClass:"font-bold"},[t._v(t._s(e.chihuahua))]),t._v(" "),r("p",{staticClass:"card-text-description text-md sm:text-md md:text-sm lg:text-sm font-normal px-4"},[t._v(" "+t._s(e.tagline))]),t._v(" "),r("nuxt-link",{staticClass:"text-sm bg-middleYellow w-4/6 text-black py-2 px-2 mb-2 rounded-sm hover:opacity-70",attrs:{to:e.slug.current,tag:"button"}},[t._v("\n                            Read More\n                        ")])],1)])})),0)])])]),t._v(" "),r("hr",{staticClass:"h-2 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[e("strong",{staticClass:"mr-2"},[this._v("Contact: ")]),e("a",{staticClass:"font-medium text-starCommandBlue hover:opacity-80",attrs:{href:"mailto:MidwestCoordinator@chihuahua-rescue.com"}},[this._v("MidwestCoordinator@chihuahua-rescue.com")]),this._v(" if you have any questions.")])}],!1,null,"3f5aef3a",null);e.default=component.exports}}]);