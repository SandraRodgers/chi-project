(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{426:function(t,e,r){var n=r(47),o=r(244);t.exports=n?o:function(t){return Map.prototype.entries.call(t)}},427:function(t,e,r){var n=r(92),o=r(14),c=r(17),l=r(16).f,f=r(91),d=r(430),v=f("meta"),x=0,h=Object.isExtensible||function(){return!0},_=function(t){l(t,v,{value:{objectID:"O"+ ++x,weakData:{}}})},meta=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,v)){if(!h(t))return"F";if(!e)return"E";_(t)}return t[v].objectID},getWeakData:function(t,e){if(!c(t,v)){if(!h(t))return!0;if(!e)return!1;_(t)}return t[v].weakData},onFreeze:function(t){return d&&meta.REQUIRED&&h(t)&&!c(t,v)&&_(t),t}};n[v]=!0},428:function(t,e,r){"use strict";var n=r(429),o=r(431);t.exports=n("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},429:function(t,e,r){"use strict";var n=r(5),o=r(3),c=r(93),l=r(26),f=r(427),d=r(243),v=r(77),x=r(14),h=r(6),_=r(123),m=r(61),y=r(126);t.exports=function(t,e,r){var E=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),R=E?"set":"add",T=o[t],O=T&&T.prototype,I=T,S={},A=function(t){var e=O[t];l(O,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!x(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!x(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!x(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(c(t,"function"!=typeof T||!(w||O.forEach&&!h((function(){(new T).entries().next()})))))I=r.getConstructor(e,t,E,R),f.REQUIRED=!0;else if(c(t,!0)){var M=new I,C=M[R](w?{}:-0,1)!=M,k=h((function(){M.has(1)})),j=_((function(t){new T(t)})),N=!w&&h((function(){for(var t=new T,e=5;e--;)t[R](e,e);return!t.has(-0)}));j||((I=e((function(e,r){v(e,I,t);var n=y(new T,e,I);return null!=r&&d(r,n[R],{that:n,AS_ENTRIES:E}),n}))).prototype=O,O.constructor=I),(k||N)&&(A("delete"),A("has"),E&&A("get")),(N||C)&&A(R),w&&O.clear&&delete O.clear}return S[t]=I,n({global:!0,forced:I!=T},S),m(I,t),w||r.setStrong(I,t,E),I}},430:function(t,e,r){var n=r(6);t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},431:function(t,e,r){"use strict";var n=r(16).f,o=r(60),c=r(124),l=r(69),f=r(77),d=r(243),v=r(161),x=r(125),h=r(13),_=r(427).fastKey,m=r(41),y=m.set,E=m.getterFor;t.exports={getConstructor:function(t,e,r,v){var x=t((function(t,n){f(t,x,e),y(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),h||(t.size=0),null!=n&&d(n,t[v],{that:t,AS_ENTRIES:r})})),m=E(e),w=function(t,e,r){var n,o,c=m(t),l=R(t,e);return l?l.value=r:(c.last=l={index:o=_(e,!0),key:e,value:r,previous:n=c.last,next:void 0,removed:!1},c.first||(c.first=l),n&&(n.next=l),h?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},R=function(t,e){var r,n=m(t),o=_(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return c(x.prototype,{clear:function(){for(var t=m(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,h?t.size=0:this.size=0},delete:function(t){var e=this,r=m(e),n=R(e,t);if(n){var o=n.next,c=n.previous;delete r.index[n.index],n.removed=!0,c&&(c.next=o),o&&(o.previous=c),r.first==n&&(r.first=o),r.last==n&&(r.last=c),h?r.size--:e.size--}return!!n},forEach:function(t){for(var e,r=m(this),n=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!R(this,t)}}),c(x.prototype,r?{get:function(t){var e=R(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),h&&n(x.prototype,"size",{get:function(){return m(this).size}}),x},setStrong:function(t,e,r){var n=e+" Iterator",o=E(e),c=E(n);v(t,e,(function(t,e){y(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),x(e)}}},432:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(433);n({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},433:function(t,e,r){"use strict";var n=r(12),o=r(58);t.exports=function(){for(var t,e=n(this),r=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=r.call(e,arguments[l]),c=c&&t;return!!c}},434:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(69),f=r(426),d=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(e,(function(t,e,n){if(!r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},435:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(48),l=r(12),f=r(58),d=r(69),v=r(52),x=r(426),h=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=x(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return h(e,(function(t,e){r(e,t,map)&&o.call(n,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},436:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(69),f=r(426),d=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},437:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(69),f=r(426),d=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},438:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(426),f=r(439),d=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return d(l(c(this)),(function(e,r,n){if(f(r,t))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},439:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},440:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(426),f=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,r,n){if(r===t)return n(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},441:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(48),l=r(12),f=r(58),d=r(69),v=r(52),x=r(426),h=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=x(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return h(e,(function(t,e){o.call(n,r(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},442:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(48),l=r(12),f=r(58),d=r(69),v=r(52),x=r(426),h=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=x(map),r=d(t,arguments.length>1?arguments[1]:void 0,3),n=new(v(map,c("Map"))),o=f(n.set);return h(e,(function(t,e){o.call(n,t,r(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n}})},443:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(58),f=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),i=0;i<arguments.length;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},444:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(58),f=r(426),d=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),r=arguments.length<2,n=r?void 0:arguments[1];if(l(t),d(e,(function(e,o){r?(r=!1,n=o):n=t(n,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r)throw TypeError("Reduce of empty map with no initial value");return n}})},445:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(69),f=r(426),d=r(243);n({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),r=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,n){if(r(e,t,map))return n()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},446:function(t,e,r){"use strict";var n=r(5),o=r(47),c=r(12),l=r(58);n({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),r=arguments.length;l(e);var n=map.has(t);if(!n&&r<3)throw TypeError("Updating absent value");var o=n?map.get(t):l(r>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},447:function(t,e,r){var n=r(5),o=r(243),c=r(78);n({target:"Object",stat:!0},{fromEntries:function(t){var e={};return o(t,(function(t,r){c(e,t,r)}),{AS_ENTRIES:!0}),e}})},586:function(t,e,r){var content=r(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("f4df73e0",content,!0,{sourceMap:!1})},606:function(t,e,r){"use strict";r(586)},607:function(t,e,r){var n=r(50)(!1);n.push([t.i,"p[data-v-60b2deb9]{padding-bottom:14px}",""]),t.exports=n},630:function(t,e,r){"use strict";r.r(e);var n,o,c=r(160),l=r(2),f=(r(19),r(428),r(432),r(434),r(435),r(436),r(437),r(438),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(18),r(34),r(38),r(447),r(59),r(40),r(162)),d={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,d,v,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,l=Object(f.a)(n||(n=Object(c.a)(["*[_type == 'information'&& name=='foster-process']"]))),d=Object(f.a)(o||(o=Object(c.a)(["*[_type == 'formQuestionFosterApplication'] | order(order asc)"]))),e.next=5,r.fetch(l);case 5:return v=e.sent,e.next=8,r.fetch(d);case 8:return x=e.sent,e.abrupt("return",{fosterInfo:v,fosterApplicationQuestions:x});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{response:[],fosterInfo:"",fosterApplicationQuestions:"",messages:[],applicationArr:[],applicationObj:{},error:!1,errorMessage:"Error. Please try again.",success:!1,successMessage:"Success! Application submitted"}},methods:{createMessage:function(){var t=this;this.response.forEach((function(e,i){t.applicationArr.push([t.fosterApplicationQuestions[i].question,e]);var r=new Map(t.applicationArr);t.applicationObj=Object.fromEntries(r)}))},sendMessage:function(){this.createMessage(),this.messages=[],this.triggerSendMessageFunction()},resetForm:function(){this.response=[]},triggerSendMessageFunction:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$post("/.netlify/functions/foster-application-email",t.applicationObj);case 3:r=e.sent,t.resetForm(),t.messages.push({type:"success",text:r}),t.applicationObj={},t.error=!1,t.success=!0,setTimeout((function(){t.success=!1}),5e3),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),t.messages.push({type:"error",text:e.t0.response.data}),t.error=!0,setTimeout((function(){t.error=!1}),5e3);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})))()}},watch:{error:function(){!0===this.error&&(this.success=!1)},success:function(){!0===this.success&&(this.error=!1)}}},v=(r(606),r(4)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-whitesmoke pt-10 lg:pt-10 pb-6 md:pb-8 lg:pb-16 flex flex-col items-center justify-center w-full"},[r("hr",{staticClass:"h-2 mt-10 w-11/12 rounded-t-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}}),t._v(" "),r("div",{staticClass:"flex items-center justify-center flex-col bg-white w-11/12 shadow-2xl"},[r("h1",{staticClass:"title flex justify-center w-11/12 md:w-11/12 lg:w-11/12 text-2xl md:text-3xl lg:text-3xl font-bold bg-white py-4 md:pt-6 lg:pt-8 text-center"},[t._v(t._s(t.fosterInfo[0].subtitle))]),t._v(" "),r("div",{staticClass:"flex flex-col px-4 lg:px-4 sm:px-4 w-11/12 lg:w-11/12 sm:w-11/12 bg-white"},[t._m(0),t._v(" "),r("div",{staticClass:"text-xs lg:text-base sm:text-xs"},t._l(t.fosterInfo[0].description,(function(t){return r("block-content",{key:t._id,attrs:{blocks:t}})})),1)]),t._v(" "),r("div",{staticClass:"flex flex-col items-center justify-center w-12/12 py-4 lg:py-8 sm:py-4"},[r("h1",{staticClass:"title text-xl md:text-2xl lg:text-2xl sm:text-xl font-bold text-center"},[t._v("\n            Foster Application Form\n          ")]),t._v(" "),r("section",{staticClass:"contact-form w-12/12 lg:w-9/12 sm:w-12/12 py-4"},[t._l(t.fosterApplicationQuestions,(function(e){return r("div",{key:e.id},["input"===e.type?r("div",[r("div",{staticClass:"field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1"},[r("label",{staticClass:"flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs"},[t._v(t._s(e.question))]),t._v(" "),r("div",{staticClass:"w-8/12"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.response[e.order],expression:"response[formQuestion.order]"}],staticClass:"input w-full bg-gray-200 border border-gray-300 py-1 py-1",attrs:{type:"text"},domProps:{value:t.response[e.order]},on:{input:function(r){r.target.composing||t.$set(t.response,e.order,r.target.value)}}})])])]):r("div",[r("div",{staticClass:"field flex border border-gray-300 w-12/12 py-2 px-1 lg:px-2 sm:px-1"},[r("label",{staticClass:"flex items-center label w-4/12 pl-1 lg:pl-4 sm:pl-1 text-xs lg:text-base sm:text-xs"},[t._v(t._s(e.question))]),t._v(" "),r("div",{staticClass:"w-8/12"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.response[e.order],expression:"response[formQuestion.order]"}],staticClass:"w-full bg-gray-200 border border-gray-300 py-1",on:{change:function(r){var n=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.response,e.order,r.target.multiple?n:n[0])}}},[e.selectOptionOne?r("option",[t._v(t._s(e.selectOptionOne))]):t._e(),t._v(" "),e.selectOptionTwo?r("option",[t._v(t._s(e.selectOptionTwo))]):t._e(),t._v(" "),e.selectOptionThree?r("option",[t._v(t._s(e.selectOptionThree))]):t._e(),t._v(" "),e.selectOptionFour?r("option",[t._v(t._s(e.selectOptionFour))]):t._e(),t._v(" "),e.selectOptionFive?r("option",[t._v(t._s(e.selectOptionFive))]):t._e(),t._v(" "),e.selectOptionSix?r("option",[t._v(t._s(e.selectOptionSix))]):t._e(),t._v(" "),e.selectOptionSeven?r("option",[t._v(t._s(e.selectOptionSeven))]):t._e(),t._v(" "),e.selectOptionEight?r("option",[t._v(t._s(e.selectOptionEight))]):t._e(),t._v(" "),e.selectOptionNine?r("option",[t._v(t._s(e.selectOptionNine))]):t._e(),t._v(" "),e.selectOptionTen?r("option",[t._v(t._s(e.selectOptionTen))]):t._e()])])])])])})),t._v(" "),r("div",{staticClass:"field flex justify-around w-12/12 py-2 px-2 is-grouped"},[r("div",{staticClass:"w-5/6 lg:w-2/6 sm:w-5/6 flex justify-around"},[r("div",{staticClass:"flex flex-col items-center"},[r("button",{staticClass:"button is-link bg-middleYellow text-sm p-2 md:p-2 lg:p-4 sm:p-2 my-8 border rounded-sm border-middleYellow hover:opacity-70",on:{click:t.sendMessage}},[t._v("\n                  Send Application\n                ")]),t._v(" "),t.error?r("div",{staticClass:"text-lg text-center text-red-600 font-bold animate-bounce"},[t._v(t._s(t.errorMessage))]):t._e(),t._v(" "),t.success?r("div",{staticClass:"text-lg text-center text-green-600 font-bold animate-bounce"},[t._v(t._s(t.successMessage))]):t._e()])])])],2)])]),t._v(" "),r("hr",{staticClass:"h-2 w-11/12 rounded-b-md",staticStyle:{background:"linear-gradient(90deg, hsla(197, 84%, 47%, 1) 50%, hsla(55, 100%, 50%, 1) 100%)"}})])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center py-4"},[r("h2",{staticClass:"font-semibold"},[t._v("If you would like to help by fostering a CRT rescue, please read the following information.")])])}],!1,null,"60b2deb9",null);e.default=component.exports}}]);