(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{303:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:c=[]}=e,{class:o,staticClass:l,style:style,staticStyle:f,attrs:d={},...y}=data;return r("svg",{class:[o,l],style:[style,f],attrs:Object.assign({width:"8",height:"13"},d),...y},c.concat([r("path",{attrs:{d:"M7.7 12.7c-.4.4-.9.4-1.3 0L0 6.5 6.4.3c.4-.4.9-.3 1.3 0 .4.4.4 1 0 1.3l-5 4.9 5 4.9c.4.4.4 1 0 1.3z"}})]))}}},304:function(t,e){t.exports={functional:!0,render(t,e){const{_c:r,_v:n,data:data,children:c=[]}=e,{class:o,staticClass:l,style:style,staticStyle:f,attrs:d={},...y}=data;return r("svg",{class:[o,l],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"8",height:"13"},d),...y},c.concat([r("path",{attrs:{d:"M.3 11.4l5-4.9-5-4.9C-.1 1.2-.1.7.3.3s.9-.4 1.3 0L8 6.5l-6.4 6.2c-.4.4-.9.3-1.3 0s-.4-.9 0-1.3z"}})]))}}},306:function(t,e,r){"use strict";r(17),r(18),r(2),r(20),r(19);var n=r(4),c=r(13),o=r(6),l=r(10),f=r(3),d=r(11),y=r(1),v=r(303),h=r.n(v),_=r(304),j=r.n(_);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var R=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},w=function(t){Object(o.a)(r,t);var e=O(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"setPage",value:function(t){if(!(t<1||t>this.total||t===this.current))return t}},{key:"pages",get:function(){for(var t=[],e=Math.max(1,this.current-this.siblings-Math.max(0,this.siblings-this.total+this.current)),r=Math.min(this.total,e+2*this.siblings),i=e;i<=r;i+=1)t.push(i);return t}}]),r}(y.g);R([Object(y.d)({type:Number,default:function(){return 1}})],w.prototype,"siblings",void 0),R([Object(y.d)({type:Number,default:function(){return 1}})],w.prototype,"current",void 0),R([Object(y.d)({type:Number,default:function(){return 1}})],w.prototype,"total",void 0),R([Object(y.b)("page-change")],w.prototype,"setPage",null);var m=w=R([Object(y.a)({components:{ArrowRoundedLeft8x13Svg:h.a,ArrowRoundedRight8x13Svg:j.a}})],w),C=r(14),component=Object(C.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"pagination justify-content-center"},[r("li",{class:["page-item",{disabled:t.current<=1}]},[r("button",{staticClass:"page-link page-link--with-arrow",attrs:{type:"button","aria-label":"Previous"},on:{click:function(e){return t.setPage(t.current-1)}}},[r("ArrowRoundedLeft8x13Svg",{staticClass:"page-link__arrow page-link__arrow--left",attrs:{"aria-hidden":"true"}})],1)]),t._v(" "),t._l(t.pages,(function(e){return r("li",{key:e,class:["page-item",{active:e===t.current}]},[r("button",{staticClass:"page-link",attrs:{type:"button"},on:{click:function(r){return t.setPage(e)}}},[t._v("\n            "+t._s(e)+"\n            "),e===t.current?r("span",{staticClass:"sr-only"},[t._v("(current)")]):t._e()])])})),t._v(" "),r("li",{class:["page-item",{disabled:t.current>=t.total}]},[r("button",{staticClass:"page-link page-link--with-arrow",attrs:{type:"button","aria-label":"Next"},on:{click:function(e){return t.setPage(t.current+1)}}},[r("ArrowRoundedRight8x13Svg",{staticClass:"page-link__arrow page-link__arrow--right",attrs:{"aria-hidden":"true"}})],1)])],2)}),[],!1,null,null,null);e.a=component.exports},308:function(t,e,r){"use strict";r(17),r(18),r(2),r(20),r(45),r(47);var n=r(4),c=r(13),o=r(6),l=r(10),f=r(3),d=r(11),y=r(1),v=r(26);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},j=function(t){Object(o.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"cardClasses",get:function(){return["post-card",{"post-card--layout--grid":this.layout&&["grid-nl","grid-lg"].includes(this.layout),"post-card--layout--list":this.layout&&["list-nl","list-sm"].includes(this.layout),"post-card--size--nl":this.layout&&["grid-nl","list-nl"].includes(this.layout),"post-card--size--lg":"grid-lg"===this.layout,"post-card--size--sm":"list-sm"===this.layout}]}}]),r}(y.g);_([Object(y.d)({type:String,default:function(){}})],j.prototype,"layout",void 0),_([Object(y.d)({type:Object,required:!0})],j.prototype,"post",void 0);var O=j=_([Object(y.a)({components:{AppLink:v.a}})],j),R=r(14),component=Object(R.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.cardClasses},[r("div",{staticClass:"post-card__image"},[r("AppLink",{attrs:{to:t.$url.blogPost()}},[r("img",{attrs:{src:t.$url.img(t.post.image),alt:""}})])],1),t._v(" "),r("div",{staticClass:"post-card__info"},[r("div",{staticClass:"post-card__category"},t._l(t.post.categories,(function(e,n){return r("AppLink",{key:n,attrs:{to:t.$url.blogCategory()}},[t._v("\n                "+t._s(e)+"\n            ")])})),1),t._v(" "),r("div",{staticClass:"post-card__name"},[r("AppLink",{attrs:{to:t.$url.blogPost()}},[t._v("\n                "+t._s(t.post.title)+"\n            ")])],1),t._v(" "),r("div",{staticClass:"post-card__date"},[t._v("\n            "+t._s(t.post.date)+"\n        ")]),t._v(" "),r("div",{staticClass:"post-card__content"},[t._v("\n            In one general sense, philosophy is associated with wisdom,\n            intellectual culture and a search for knowledge.\n            In that sense, all cultures...\n        ")]),t._v(" "),r("div",{staticClass:"post-card__read-more"},[r("AppLink",{staticClass:"btn btn-secondary btn-sm",attrs:{to:"/"}},[t._v("\n                Read More\n            ")])],1)])])}),[],!1,null,null,null);e.a=component.exports},312:function(t,e,r){"use strict";r(17),r(18),r(2),r(20);var n=r(4),c=r(13),o=r(6),l=r(10),f=r(3),d=r(11),y=r(1),v=r(306),h=r(302),_=r(308),j=r(315),O=r(307);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var w=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m={classic:"grid-lg",grid:"grid-nl",list:"list-nl"},C=function(t){Object(o.a)(r,t);var e=R(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).page=1,t.posts=O.a,t}return Object(c.a)(r,[{key:"setPage",value:function(t){this.page=t}},{key:"cardLayout",get:function(){return m[this.layout]}}]),r}(y.g);w([Object(y.d)({type:String,required:!0})],C.prototype,"layout",void 0),w([Object(y.d)({type:String,required:!0})],C.prototype,"sidebarPosition",void 0);var P=C=w([Object(y.a)({components:{Pagination:v.a,PageHeader:h.a,BlogSidebar:j.a,PostCard:_.a},head:function(){return{title:"Blog Category Page"}}})],C),k=r(14),component=Object(k.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("PageHeader",{attrs:{title:"Latest News",breadcrumb:[{title:"Home",url:"/"},{title:"Blog",url:"/"},{title:"Latest News",url:"/"}]}}),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},["start"===t.sidebarPosition?r("div",{staticClass:"col-12 col-lg-4 order-1 order-lg-0"},[r("BlogSidebar",{attrs:{position:t.sidebarPosition}})],1):t._e(),t._v(" "),r("div",{staticClass:"col-12 col-lg-8"},[r("div",{staticClass:"block"},[r("div",{staticClass:"posts-view"},[r("div",{class:["posts-view__list","posts-list","posts-list--layout--"+t.layout]},[r("div",{staticClass:"posts-list__body"},t._l(t.posts,(function(e){return r("div",{key:e.id,staticClass:"posts-list__item"},[r("PostCard",{attrs:{post:e,layout:t.cardLayout}})],1)})),0)]),t._v(" "),r("div",{staticClass:"posts-view__pagination"},[r("Pagination",{attrs:{current:t.page,siblings:2,total:10},on:{"page-change":t.setPage}})],1)])])]),t._v(" "),"end"===t.sidebarPosition?r("div",{staticClass:"col-12 col-lg-4"},[r("BlogSidebar",{attrs:{position:t.sidebarPosition}})],1):t._e()])])],1)}),[],!1,null,null,null);e.a=component.exports},371:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(2),r(20);var n=r(4),c=r(6),o=r(10),l=r(3),f=r(11),d=r(1),y=r(312);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var h=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},_=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.g),j=_=h([Object(d.a)({components:{BlogPageCategory:y.a}})],_),O=r(14),component=Object(O.a)(j,(function(){var t=this.$createElement;return(this._self._c||t)("BlogPageCategory",{attrs:{layout:"grid","sidebar-position":"end"}})}),[],!1,null,null,null);e.default=component.exports}}]);