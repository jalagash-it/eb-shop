(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{335:function(t,e,r){"use strict";r(17),r(18),r(2),r(21);var n=r(4),c=r(7),l=r(10),o=r(3),d=r(11),f=r(1),v=r(26),h=r(92),y=r.n(h);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(o.a)(t);if(e){var c=Object(o.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var O=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},j=function(t){Object(c.a)(r,t);var e=_(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(f.g);O([Object(f.d)({type:String,default:function(){return""}})],j.prototype,"title",void 0),O([Object(f.d)({type:Array,default:function(){return[]}})],j.prototype,"breadcrumb",void 0);var m=j=O([Object(f.a)({components:{AppLink:v.a,ArrowRoundedRight6x9Svg:y.a}})],j),R=r(14),component=Object(R.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-header"},[r("div",{staticClass:"page-header__container container"},[r("div",{staticClass:"page-header__breadcrumb"},[r("nav",{attrs:{"aria-label":"breadcrumb"}},[r("ol",{staticClass:"breadcrumb"},[t._l(t.breadcrumb,(function(e,n){return[n!==t.breadcrumb.length-1?r("li",{key:n,staticClass:"breadcrumb-item"},[r("AppLink",{attrs:{to:e.url}},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v(" "),r("ArrowRoundedRight6x9Svg",{staticClass:"breadcrumb-arrow"})],1):t._e(),t._v(" "),n===t.breadcrumb.length-1?r("li",{key:n,staticClass:"breadcrumb-item active"},[t._v("\n                            "+t._s(e.title)+"\n                        ")]):t._e()]}))],2)])]),t._v(" "),t.title?r("div",{staticClass:"page-header__title"},[r("h1",[t._v(t._s(t.title))])]):t._e()])])}),[],!1,null,null,null);e.a=component.exports},336:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:c=[]}=e,{class:l,staticClass:o,style:style,staticStyle:d,attrs:f={},...v}=data;return r("svg",{class:[l,o],style:[style,d],attrs:Object.assign({width:"8",height:"13"},f),...v},c.concat([r("path",{attrs:{d:"M7.7 12.7c-.4.4-.9.4-1.3 0L0 6.5 6.4.3c.4-.4.9-.3 1.3 0 .4.4.4 1 0 1.3l-5 4.9 5 4.9c.4.4.4 1 0 1.3z"}})]))}}},337:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:c=[]}=e,{class:l,staticClass:o,style:style,staticStyle:d,attrs:f={},...v}=data;return r("svg",{class:[l,o],style:[style,d],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"8",height:"13"},f),...v},c.concat([r("path",{attrs:{d:"M.3 11.4l5-4.9-5-4.9C-.1 1.2-.1.7.3.3s.9-.4 1.3 0L8 6.5l-6.4 6.2c-.4.4-.9.3-1.3 0s-.4-.9 0-1.3z"}})]))}}},338:function(t,e,r){"use strict";r(17),r(18),r(2),r(21);var n=r(4),c=r(13),l=r(7),o=r(10),d=r(3),f=r(11),v=r(1),h=r(335),y=r(26);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var O=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},j=function(t){Object(l.a)(r,t);var e=_(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"data",value:function(){return{items:[{title:"Dashboard",link:this.$url.accountDashboard()},{title:"Edit Profile",link:this.$url.accountProfile()},{title:"Order History",link:this.$url.accountOrders()},{title:"Order Details",link:this.$url.accountOrder({id:5})},{title:"Addresses",link:this.$url.accountAddresses()},{title:"Edit Address",link:this.$url.accountAddress({id:5})},{title:"Password",link:this.$url.accountPassword()},{title:"Logout",link:this.$url.signIn()}]}}}]),r}(v.g),m=j=O([Object(v.a)({components:{PageHeader:h.a,AppLink:y.a}})],j),R=r(14),component=Object(R.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:"My Account",breadcrumb:[{title:"Home",url:""},{title:"Breadcrumb",url:""},{title:"My Account",url:""}]}}),t._v(" "),r("div",{staticClass:"block"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-3 d-flex"},[r("div",{staticClass:"account-nav flex-grow-1"},[r("h4",{staticClass:"account-nav__title"},[t._v("\n                            Navigation\n                        ")]),t._v(" "),r("ul",t._l(t.items,(function(e,n){return r("NuxtLink",{key:n,attrs:{to:t.$url.lang(e.link),exact:!0},scopedSlots:t._u([{key:"default",fn:function(n){var c=n.isActive;return[r("li",{class:["account-nav__item",{"account-nav__item--active":c}]},[r("AppLink",{attrs:{to:e.link}},[t._v("\n                                        "+t._s(e.title)+"\n                                    ")])],1)]}}],null,!0)})})),1)])]),t._v(" "),r("div",{staticClass:"col-12 col-lg-9 mt-4 mt-lg-0"},[t._t("default")],2)])])])],1)}),[],!1,null,null,null);e.a=component.exports},339:function(t,e,r){"use strict";r(17),r(18),r(2),r(21),r(19);var n=r(4),c=r(13),l=r(7),o=r(10),d=r(3),f=r(11),v=r(1),h=r(336),y=r.n(h),_=r(337),O=r.n(_);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var m=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},R=function(t){Object(l.a)(r,t);var e=j(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"setPage",value:function(t){if(!(t<1||t>this.total||t===this.current))return t}},{key:"pages",get:function(){for(var t=[],e=Math.max(1,this.current-this.siblings-Math.max(0,this.siblings-this.total+this.current)),r=Math.min(this.total,e+2*this.siblings),i=e;i<=r;i+=1)t.push(i);return t}}]),r}(v.g);m([Object(v.d)({type:Number,default:function(){return 1}})],R.prototype,"siblings",void 0),m([Object(v.d)({type:Number,default:function(){return 1}})],R.prototype,"current",void 0),m([Object(v.d)({type:Number,default:function(){return 1}})],R.prototype,"total",void 0),m([Object(v.b)("page-change")],R.prototype,"setPage",null);var k=R=m([Object(v.a)({components:{ArrowRoundedLeft8x13Svg:y.a,ArrowRoundedRight8x13Svg:O.a}})],R),w=r(14),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination justify-content-center"},[r("li",{class:["page-item",{disabled:t.current<=1}]},[r("button",{staticClass:"page-link page-link--with-arrow",attrs:{type:"button","aria-label":"Previous"},on:{click:function(e){return t.setPage(t.current-1)}}},[r("ArrowRoundedLeft8x13Svg",{staticClass:"page-link__arrow page-link__arrow--left",attrs:{"aria-hidden":"true"}})],1)]),t._v(" "),t._l(t.pages,(function(e){return r("li",{key:e,class:["page-item",{active:e===t.current}]},[r("button",{staticClass:"page-link",attrs:{type:"button"},on:{click:function(r){return t.setPage(e)}}},[t._v("\n            "+t._s(e)+"\n            "),e===t.current?r("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})),t._v(" "),r("li",{class:["page-item",{disabled:t.current>=t.total}]},[r("button",{staticClass:"page-link page-link--with-arrow",attrs:{type:"button","aria-label":"Next"},on:{click:function(e){return t.setPage(t.current+1)}}},[r("ArrowRoundedRight8x13Svg",{staticClass:"page-link__arrow page-link__arrow--right",attrs:{"aria-hidden":"true"}})],1)])],2)}),[],!1,null,null,null);e.a=component.exports},355:function(t,e,r){"use strict";e.a=[{id:8132,date:"02 April, 2019",status:"Pending",quantity:5,total:2719},{id:7592,date:"28 March, 2019",status:"Pending",quantity:3,total:374},{id:7192,date:"15 March, 2019",status:"Shipped",quantity:4,total:791},{id:6321,date:"28 February, 2019",status:"Completed",quantity:1,total:57},{id:6001,date:"21 February, 2019",status:"Completed",quantity:2,total:252},{id:4120,date:"11 December, 2018",status:"Completed",quantity:7,total:3978}]},400:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(2),r(21);var n=r(4),c=r(13),l=r(7),o=r(10),d=r(3),f=r(11),v=r(1),h=r(339),y=r(26),_=r(338),O=r(355);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var m=function(t,e,r,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},R=function(t){Object(l.a)(r,t);var e=j(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).page=1,t.orders=O.a,t}return Object(c.a)(r,[{key:"setPage",value:function(t){this.page=t}}]),r}(v.g),k=R=m([Object(v.a)({components:{Pagination:h.a,AppLink:y.a,AccountLayout:_.a},head:{title:"Order History"}})],R),w=r(14),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("AccountLayout",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("h5",[t._v("Order History")])]),t._v(" "),r("div",{staticClass:"card-divider"}),t._v(" "),r("div",{staticClass:"card-table"},[r("div",{staticClass:"table-responsive-sm"},[r("table",[r("thead",[r("tr",[r("th",[t._v("Order")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Total")])])]),t._v(" "),r("tbody",t._l(t.orders,(function(e){return r("tr",{key:e.id},[r("td",[r("AppLink",{attrs:{to:t.$url.accountOrder(e)}},[t._v("\n                                    #"+t._s(e.id)+"\n                                ")])],1),t._v(" "),r("td",[t._v(t._s(e.date))]),t._v(" "),r("td",[t._v(t._s(e.status))]),t._v(" "),r("td",[t._v("\n                                "+t._s(t.$price(e.total))+"\n                                for\n                                "+t._s(e.quantity)+"\n                                item(s)\n                            ")])])})),0)])])]),t._v(" "),r("div",{staticClass:"card-divider"}),t._v(" "),r("div",{staticClass:"card-footer"},[r("Pagination",{attrs:{current:t.page,total:3},on:{"page-change":t.setPage}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);