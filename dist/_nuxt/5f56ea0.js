(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{425:function(t,e,r){"use strict";t.exports=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+r[i]}),"")+t[l]}},641:function(t,e,r){"use strict";r.r(e);var n,l=r(160),c=r(2),o=(r(40),r(425)),d=r.n(o),h=r(33),m=r(27),f=r.n(m)()(h.a),x={methods:{imageUrlFor:function(source){return f.image(source)}},data:function(){return{chihuahuas:[],serializers:{types:{chihuahua:"div"}}}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,c=d()(n||(n=Object(l.a)(["*[_type == 'chihuahua' && region == 'southwest'] {_id, age, chihuahua, description, gender, weight, mainImage, slug, tagline}"]))),e.next=4,r.fetch(c);case 4:return o=e.sent,e.abrupt("return",{chihuahuas:o});case 6:case"end":return e.stop()}}),e)})))()}},w=r(4),component=Object(w.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[r("hr",{staticClass:"h-2 mt-10 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),r("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12 md:w-10/12 lg:w-11/12"},[r("h1",{staticClass:"flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl font-bold bg-white pt-4 md:pt-6 lg:pt-8 "},[t._v("Southwest Dogs")]),t._v(" "),r("p",{staticClass:"flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-2 sm:py-2 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[t._v("These dogs are being fostered in Dallas, Texas and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"bg-white items-center md:justify-center lg:justify-center flex flex-col md:flex-row lg:flex-row xl:flex-row w-12/12 md:w-10/12 lg:w-11/12"},[r("div",{staticClass:"flex justify-center"},[r("div",{staticClass:"cards-container items-center md:justify-center lg:justify-center py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-5/6 md:w-5/6 sm-5/6 lg:w-screen"},t._l(t.chihuahuas,(function(e){return r("div",{key:e.id,staticClass:"card w-11/12 md:w-64 lg:w-64 sm:w-11/12 flex flex-col  m-6 transition-opacity duration-500 shadow-lg rounded-b"},[r("img",{staticClass:"img rounded-t h-52 object-cover",attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),r("div",{staticClass:"rounded-b flex flex-col justify-around items-center card-text bg-white h-36"},[r("p",{staticClass:"card-text-description text-sm font-normal text-center px-4"},[t._v(" "+t._s(e.tagline))]),t._v(" "),e.slug.current?r("nuxt-link",{staticClass:"text-sm bg-middleYellow w-4/6 text-black py-2 px-2 rounded-sm hover:opacity-70",attrs:{to:{path:"/adopt/"+e.slug.current},tag:"button"}},[t._v("\n                        Read More\n                    ")]):t._e()],1)])})),0)])])]),t._v(" "),r("hr",{staticClass:"h-2 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[t._v("After filling out an adoption form, please email"),r("a",{staticClass:"font-medium text-starCommandBlue hover:opacity-80",attrs:{href:"mailto:DFWCoordinator@chihuahua-rescue.com"}},[t._v("DFWCoordinator@chihuahua-rescue.com")])])}],!1,null,"34f1b154",null);e.default=component.exports}}]);