!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/trending-search"]=t():e["launch-bar/trending-search"]=t()}(self,(function(){return function(){"use strict";var e,t,r={663:function(e){e.exports=coreApis.ajax}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e](a,a.exports,o),a.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){i[e]=function(){return r[e]}}));return i.default=function(){return r},o.d(a,i),a},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return function(){o.d(a,{plugin:function(){return e}});const e={name:"launchBar.trendingSearch",displayName:"搜索栏 - 搜索推荐",description:'在脚本的搜索栏中默认显示类似 b 站搜索栏的搜索推荐词, 替代原来的 "搜索" 两字.',setup:({addData:e})=>{e("launchBar.recommended",(async e=>{const{getJson:t}=await Promise.resolve().then(o.t.bind(o,663,23)),r=await t("https://api.bilibili.com/x/web-interface/search/default");if(0===r.code){let t;e.word=r.data.show_name,t=""!==r.data.url?r.data.url:r.data.name.startsWith("av")?`https://www.bilibili.com/${r.data.name}`:`https://search.bilibili.com/all?keyword=${r.data.name}`,e.href=t}else console.error("获取搜索推荐词失败")}))},commitHash:"c5a90b20cf0954f0673550100268244bca7a0c5d",coreVersion:"2.1.5"}}(),a=a.plugin}()}));