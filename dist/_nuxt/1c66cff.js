(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{342:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return n}))},343:function(t,e,r){"use strict";t.exports=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var c=t.length-1;return t.slice(0,c).reduce((function(t,e,i){return t+e+r[i]}),"")+t[c]}},512:function(t,e,r){"use strict";r.r(e);var n=r(342),c=(r(30),r(4)),o=r(343),l=r.n(o),h=r(121),f=r(80);function d(){var data=Object(n.a)(['*[_type == "chihuahua"]']);return d=function(){return data},data}var m=r.n(f)()(h.a),v={methods:{imageUrlFor:function(source){return m.image(source)}},data:function(){return{chihuahuas:[],serializers:{types:{chihuahua:"div"}}}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,n=l()(d()),e.next=4,r.fetch(n);case 4:return c=e.sent,console.log({chihuahuas:c}),e.abrupt("return",{chihuahuas:c});case 7:case"end":return e.stop()}}),e)})))()}},w=r(8),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-alibaster pt-28 lg:pt-40 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[r("h1",[t._v("Chihuahuas")]),t._v(" "),r("div",{staticClass:"chihuahuas"},t._l(t.chihuahuas,(function(e){return r("div",{key:e._id},[r("div",{staticClass:"mb-2 mx-2",staticStyle:{"max-width":"20rem"},attrs:{name:e.name,"img-top":"",tag:"article","border-variant":"warning"}},[r("img",{attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),r("div",[e.description.length?r("block-content",{key:e.description[0]._id,attrs:{blocks:e.description[0]}}):t._e()],1),t._v(" "),r("nuxt-link",{attrs:{to:e.slug.current}},[r("button",[t._v("Read more")])])],1)])})),0)])}),[],!1,null,"55751561",null);e.default=component.exports}}]);