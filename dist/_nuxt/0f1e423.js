(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{401:function(t,e,r){"use strict";t.exports=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var c=t.length-1;return t.slice(0,c).reduce((function(t,e,i){return t+e+r[i]}),"")+t[c]}},555:function(t,e,r){var content=r(592);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(43).default)("2df46436",content,!0,{sourceMap:!1})},591:function(t,e,r){"use strict";r(555)},592:function(t,e,r){(e=r(42)(!1)).push([t.i,"b[data-v-0c470cc4],strong[data-v-0c470cc4]{font-weight:600}",""]),t.exports=e},615:function(t,e,r){"use strict";r.r(e);var n=r(145),c=(r(28),r(2)),l=r(401),o=r.n(l),d=r(85),h=r(62);function m(){var data=Object(n.a)(['*[_type == "chihuahuasSE"] {_id, chihuahua, mainImage, slug, tagline} | order(order asc)']);return m=function(){return data},data}var f=r.n(h)()(d.a),x={methods:{imageUrlFor:function(source){return f.image(source)}},data:function(){return{chihuahuas:[],serializers:{types:{chihuahua:"div"}}}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,n=o()(m()),e.next=4,r.fetch(n);case 4:return c=e.sent,e.abrupt("return",{chihuahuas:c});case 6:case"end":return e.stop()}}),e)})))()}},w=(r(591),r(13)),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[r("hr",{staticClass:"h-2 mt-10 w-11/12 rounded-t-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"bg-white items-center md:justify-center lg:justify-center flex flex-col md:flex-row lg:flex-row xl:flex-row w-11/12 md:w-10/12 lg:w-11/12"},[r("div",{staticClass:"flex justify-center w-5/6 lg:w-screen md:w-screen sm:w-5/6"},[r("div",{staticClass:"cards-container justify-center items-center py-3 flex flex-col flex-wrap md:flex-row lg:flex-row xl:flex-row w-full md:w-5/6 sm-5/6 lg:w-full"},t._l(t.chihuahuas,(function(e){return r("div",{key:e.id,staticClass:"card w-11/12 md:w-64 lg:w-64 sm:w-11/12 flex flex-col mx-4 my-4 transition-opacity duration-500 shadow-lg rounded-b"},[r("img",{staticClass:"img rounded-t h-52 object-cover",attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),r("div",{staticClass:"rounded-b flex flex-col justify-around items-center card-text bg-white h-40"},[r("p",{staticClass:"card-text-description text-sm font-normal text-center px-4 font-semibold"},[t._v(" "+t._s(e.chihuahua))]),t._v(" "),r("p",{staticClass:"card-text-description text-sm font-normal text-center px-4"},[t._v(" "+t._s(e.tagline))]),t._v(" "),e.slug.current?r("nuxt-link",{staticClass:"text-sm bg-middleYellow w-4/6 text-black py-2 mb-2 px-2 rounded-sm hover:opacity-70",attrs:{to:{path:"/adopt/"+e.slug.current},tag:"button"}},[t._v("\n            Read More\n            ")]):t._e()],1)])})),0)])]),t._v(" "),r("hr",{staticClass:"h-2 w-11/12 rounded-b-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12 md:w-10/12 lg:w-11/12"},[e("h1",{staticClass:"flex justify-center w-12/12 md:w-12/12 lg:w-12/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8"},[this._v("Southeast Dogs")]),this._v(" "),e("p",{staticClass:"flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-2 sm:py-2 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[this._v("North Carolina, South Carolina, Virginia, Tennessee (Nashville Area), Alabama, Georgia and Maryland. Please read the profile as some of the dogs can only be adopted in NC/SC, VA, TN, AL, GA and MD.")]),this._v(" "),e("p",{staticClass:"text-center text-xs md:text-sm lg:text-base px-4 py-2 sm:py-2 md:py-4 lg:py-4"},[e("strong",{staticClass:"mr-2"},[this._v("Contact: ")]),e("a",{staticClass:"font-medium text-starCommandBlue hover:opacity-80",attrs:{href:"mailto:carolinascoordinator@chihuahua-rescue.com"}},[this._v("carolinascoordinator@chihuahua-rescue.com")]),this._v(" if you have any questions.")])])}],!1,null,"0c470cc4",null);e.default=component.exports}}]);