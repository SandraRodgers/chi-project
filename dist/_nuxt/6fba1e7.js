(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{425:function(t,e,n){"use strict";t.exports=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var l=t.length-1;return t.slice(0,l).reduce((function(t,e,i){return t+e+n[i]}),"")+t[l]}},633:function(t,e,n){"use strict";n.r(e);var r,l,c=n(160),o=n(2),d=(n(40),n(425)),f=n.n(d),w=n(33),x=n(27),m=n.n(x)()(w.a),h={methods:{imageUrlFor:function(source){return m.image(source)}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,d,w,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$sanity,o=f()(r||(r=Object(c.a)(["*[_type == 'newsletter']{\n  title,\n  \"newsletterURL\": newsletter.asset->url\n}"]))),d=f()(l||(l=Object(c.a)(["*[_type == 'information'&& name=='newsletters-intro']"]))),e.next=5,n.fetch(o);case 5:return w=e.sent,e.next=8,n.fetch(d);case 8:return x=e.sent,e.abrupt("return",{newsletters:w,newslettersIntro:x});case 10:case"end":return e.stop()}}),e)})))()}},v=n(4),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[n("hr",{staticClass:"h-2 mt-10 w-11/12 rounded-t-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),n("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl"},[n("h3",{staticClass:"title bg-white text-2xl md:text-3xl lg:text-3xl font-bold pt-6 w-11/12 flex justify-center"},[t._v(t._s(t.newslettersIntro[0].title))]),t._v(" "),n("div",{staticClass:"w-11/12"},[n("div",{staticClass:"flex flex-col justify-content  py-4 md:py-6 lg:py-8 bg-white text-xs md:text-sm lg:text-base"},[n("div",{staticClass:"flex px-4 w-6/6 justify-center"},[n("img",{staticClass:"h-40",attrs:{src:t.imageUrlFor(t.newslettersIntro[0].mainImage)}})]),t._v(" "),n("div",{staticClass:"flex pt-8 px-6 lg:px-16 md:px-10 sm:px-4 w-6/6 justify-center"},t._l(t.newslettersIntro[0].description,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1)])]),t._v(" "),n("div",{staticClass:"mb-8"},t._l(t.newsletters,(function(e){return n("ul",{key:e.id},[n("li",{staticClass:"font-semibold p-1"},[n("a",{attrs:{target:"_blank",href:e.newsletterURL+"?dl="+e.title}},[t._v(t._s(e.title))])])])})),0)]),t._v(" "),n("hr",{staticClass:"h-2 w-11/12 rounded-b-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}),[],!1,null,"69ac85ea",null);e.default=component.exports}}]);