(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{425:function(t,e,n){"use strict";t.exports=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+n[i]}),"")+t[l]}},588:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(51).default)("ee0a573c",content,!0,{sourceMap:!1})},610:function(t,e,n){"use strict";n(588)},611:function(t,e,n){var r=n(50)(!1);r.push([t.i,"p[data-v-18ab7859]{padding-bottom:14px;font-size:18px}b[data-v-18ab7859],strong[data-v-18ab7859]{font-weight:600}",""]),t.exports=r},632:function(t,e,n){"use strict";n.r(e);var r,l,c=n(160),o=n(2),d=(n(40),n(425)),f=n.n(d),m=n(33),x=n(27),h=n.n(x)()(m.a),v={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,d,m,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$sanity,o=f()(r||(r=Object(c.a)(["*[_type == 'mostInNeed' && name!='Intro Section']"]))),d=f()(l||(l=Object(c.a)(["*[_type == 'mostInNeed' && name=='Intro Section']"]))),e.next=5,n.fetch(o);case 5:return m=e.sent,e.next=8,n.fetch(d);case 8:return x=e.sent,e.abrupt("return",{mostInNeed:m,mostInNeedIntro:x});case 10:case"end":return e.stop()}}),e)})))()},methods:{imageUrlFor:function(source){return h.image(source)}}},w=(n(610),n(4)),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col w-full"},[n("div",{staticClass:"bg-whitesmoke pt-28 lg:pt-28 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center"},[n("hr",{staticClass:"h-2 mt-10 w-11/12",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12"},[n("h1",{staticClass:"title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8"},[t._v("Most In Need")]),t._v(" "),n("div",{staticClass:"flex flex-col px-4 w-11/12 mb-8"},[t._l(t.mostInNeedIntro[0].description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),t._v(" "),n("p",[t._v("Scroll down to see our most-in-need chihuahuas.")])],2)]),t._v(" "),n("hr",{staticClass:"h-2 w-11/12 mb-10",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),t._l(t.mostInNeed,(function(e){return n("div",{key:e.id,staticClass:"flex flex-col items-center",attrs:{id:e.name}},[n("hr",{staticClass:"h-2 w-11/12 mt-10",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),n("div",{staticClass:"bg-white w-11/12 flex flex-col items-center justify-center pt-10"},[n("div",{staticClass:"flex justify-center"},[n("h3",{staticClass:"w-11/12 bg-white text-2xl md:text-3xl lg:text-3xl font-bold py-4"},[t._v(t._s(e.name))])]),t._v(" "),n("img",{staticClass:"img rounded-t h-40 object-cover",staticStyle:{filter:"contrast(110%)"},attrs:{src:t.imageUrlFor(e.mainImage)}}),t._v(" "),n("div",{staticClass:"flex flex-col px-4 w-10/12 py-6"},t._l(e.description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1)]),t._v(" "),n("hr",{staticClass:"h-2 w-11/12 mb-10",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}))],2)])}),[],!1,null,"18ab7859",null);e.default=component.exports}}]);