!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=window.wp.i18n},function(e,t,r){},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.components},function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"name",(function(){return _})),r.d(n,"settings",(function(){return S}));var o=r(1),i=r.n(o),c=r(5),l=r(3),u=(r(4),{columns:{type:"number",default:3},rows:{type:"number",default:3},conVisibility:{type:"object",default:{title:!0,rating:!0,price:!0,button:!0}}}),s=(wp.i18n.__,{attributes:{}}),a=r(0),b=r(6),p=r.n(b),f=r(2),d=r.n(f),w=r(7);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=wp.blockEditor.InspectorControls,j=wp.components,m=j.PanelBody,v=(j.SelectControl,j.ToggleControl),P=j.RangeControl,h=(j.BaseControl,j.Dropdown,j.Button,j.ButtonGroup,j.TabPanel,wp.i18n.__),k=function(e){var t=e.attributes,r=e.setAttributes,n=t.columns,o=t.rows,i=(t.categories,t.conVisibility);return Object(a.createElement)(g,null,Object(a.createElement)(m,{title:h("Rows","woo-blocks")},Object(a.createElement)(P,{label:h("Columns","woo-blocks"),value:n,onChange:function(e){return r({columns:e})},min:1,max:6}),Object(a.createElement)(P,{label:h("Rows","woo-blocks"),value:o,onChange:function(e){return r({rows:e})},min:1,max:6})),Object(a.createElement)(m,{title:h("Content","woo-blocks")},Object(a.createElement)(v,{label:h("Product Title","woo-blocks"),help:i.title?"Product title is visible.":"Product title is hidden.",checked:i.title,onChange:function(e){r({conVisibility:y(y({},i),{},{title:e})})}}),Object(a.createElement)(v,{label:h("Product Price","woo-blocks"),help:i.price?"Product price is visible.":"Product price is hidden.",checked:i.price,onChange:function(e){r({conVisibility:y(y({},i),{},{price:e})})}}),Object(a.createElement)(v,{label:h("Product Rating","woo-blocks"),help:i.rating?"Product rating is visible.":"Product rating is hidden.",checked:i.rating,onChange:function(e){r({conVisibility:y(y({},i),{},{rating:e})})}}),Object(a.createElement)(v,{label:h("Add to cart button","woo-blocks"),help:i.button?"Add to cart button is visible.":"Add to cart button is hidden.",checked:i.button,onChange:function(e){r({conVisibility:y(y({},i),{},{button:e})})}})))},x=wp.blockEditor,E=(x.RichText,x.InnerBlocks,x.MediaUpload,wp.i18n.__,function(e){var t=e.attributes,r=e.setAttributes,n=(t.columns,t.rows,t.categories,t.conVisibility);return console.log(n),Object(a.createElement)(a.Fragment,null,Object(a.createElement)(k,{attributes:t,setAttributes:r}),Object(a.createElement)("div",{className:d()("wb-newest-products-wrapper",e.className)},Object(a.createElement)(w.Disabled,null,Object(a.createElement)(p.a,{block:"woo-blocks/newest-products",attributes:t}))))}),_="woo-blocks/newest-products",S={title:Object(l.__)("Woo Newest Products","woo-blocks"),description:Object(l.__)("Woo Newest Products"),icon:"star-filled",supports:{html:!1,align:["wide","full"]},keywords:["Woo Newest Products"],attributes:u,edit:E,save:function(){return null},example:s};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}[n].forEach((function(e){if(e){var t=e.name,r=e.settings;Object(c.registerBlockType)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({category:"woo-blocks"},r))}}))}]);