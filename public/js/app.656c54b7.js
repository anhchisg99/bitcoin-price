(function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"159e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("h1",{staticClass:"title-1"},[e._v("WELCOME TO BIZPRICE")]),n("h4",{staticClass:"title-2"},[e._v("Check current Bitcoin rate")]),e._l(e.data,(function(t,r){return n("div",{key:r,staticClass:"bitcoin"},["GPA"==e.selected?n("p",{staticClass:"title-3"},[e._v(" Bitcoin rate for British Pound Sterling: "+e._s(.37*t.price_usd)+" ")]):n("p",{staticClass:"title-3"},[e._v(" Bitcoin rate for United States Dollar: "+e._s(t.price_usd)+" ")])])})),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"bitcoin"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"BTC"}},[e._v("BTC")]),n("option",{attrs:{value:"GPA"}},[e._v("GPA")])])],2)},i=[],o=n("bc3a"),c=n.n(o),s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-left"},[n("h2",[e._v("BITZPRICE")])]),n("div",{staticClass:"header-right"},[n("h2",[e._v("HOME")]),n("h2",[e._v("ABOUT")])])])}],u={name:"HelloWorld",props:{msg:String}},p=u,f=(n("c786"),n("2877")),d=Object(f["a"])(p,s,l,!1,null,"31744209",null),v=d.exports,h={headers:{"X-CoinAPI-Key":"5D2AA54D-48FE-4560-AF38-5D281C1D50EB"}},_={name:"App",components:{Header:v},data:function(){return{data:"",selected:""}},computed:{},mounted:function(){var e=this;c.a.get("https://rest.coinapi.io/v1/assets?filter_asset_id=BTC",h).then((function(t){return e.data=t.data})).catch((function(e){return console.log(e)}))}},b=_,m=(n("034f"),Object(f["a"])(b,a,i,!1,null,null,null)),g=m.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){},c786:function(e,t,n){"use strict";n("159e")}});
//# sourceMappingURL=app.656c54b7.js.map