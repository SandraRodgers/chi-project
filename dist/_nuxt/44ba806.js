(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{332:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return n}))},333:function(t,e,r){"use strict";var n=r(79),l=r.n(n);e.a=l()({projectId:"05mmi4eq",dataset:"production",useCdn:!0})},334:function(t,e,r){"use strict";t.exports=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+r[i]}),"")+t[l]}},363:function(t,e,r){"use strict";r.r(e);var n=r(332),l=(r(34),r(6)),c=r(334),o=r.n(c),d=r(333),h=r(191);function f(){var data=Object(n.a)(["*[_type == 'chihuahua' && region == 'southwest'] {_id, age, chihuahua, description, gender, weight, mainImage, slug, tagline}"]);return f=function(){return data},data}var m=r.n(h)()(d.a),w={methods:{imageUrlFor:function(source){return m.image(source)}},data:function(){return{chihuahuas:[],serializers:{types:{chihuahua:"div"}}}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,n=o()(f()),e.next=4,r.fetch(n);case 4:return l=e.sent,console.log({chihuahuas:l}),e.abrupt("return",{chihuahuas:l});case 7:case"end":return e.stop()}}),e)})))()}},x=r(9),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-alibaster pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"bg-white items-center md:justify-center lg:justify-center  py-3 flex flex-col md:flex-row lg:flex-row xl:flex-row w-10/12 md:w-10/12 lg:w-11/12"},t._l(t.chihuahuas,(function(e){return r("div",{key:e._id,staticClass:"card w-6/6 md:w-1/6 lg:w-1/6 flex flex-col m-3 border border-opacity-25 border-davysGrey"},[r("nuxt-link",{staticClass:"flex flex-col items-center",attrs:{to:e.slug.current}},[r("img",{staticClass:"img h-44 object-cover",attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),r("div",{staticClass:"flex flex-col items-center card-text bg-white h-28 p-2"},[r("p",{staticClass:"card-text-description text-sm px-1"},[t._v(" "+t._s(e.tagline))]),t._v(" "),r("div",{staticClass:"flex justify-start items-end h-full w-full"},[r("nuxt-link",{staticClass:"text-description text-sm bold pt-2 border-b border-opacity-25 border-davysGrey",attrs:{to:e.slug.current}},[t._v("\n                 View Profile\n                ")])],1)])])],1)})),0),t._v(" "),t._m(2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center pt-5 md:pt-14 lg:pt-16 w-11/12 md:w-11/12 lg:w-11/12"},[e("hr",{staticClass:"bg-starCommandBlue h-2 w-7/12"}),this._v(" "),e("hr",{staticClass:"bg-tan h-2 w-7/12 bg-clip-padding"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12"},[e("h1",{staticClass:"flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-xl md:text-xl lg:text-3xl bg-white pt-4 md:pt-6 lg:pt-8 "},[this._v("Southwest Dogs")]),this._v(" "),e("p",{staticClass:"flex flex-col items-center text-center w-11/12 md:w-11/12 lg:w-11/12 px-2 py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[this._v("These dogs are being fostered in Dallas, Texas and must be adopted within the Dallas, North Central Texas or the southern Oklahoma area.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center w-11/12 md:w-11/12 lg:w-11/12"},[e("hr",{staticClass:"bg-starCommandBlue h-2 w-7/12"}),this._v(" "),e("hr",{staticClass:"bg-tan h-2 w-7/12 bg-clip-padding"})])}],!1,null,"d54804ee",null);e.default=component.exports}}]);