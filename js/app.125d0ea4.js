(function(t){function e(e){for(var i,o,c=e[0],r=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var r=n[c];0!==s[r]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09a7":function(t,e,n){"use strict";var i=n("e610"),s=n.n(i);s.a},1349:function(t,e,n){function i(){var t,e,n,i=document.documentElement,s=document.querySelector("meta[name=viewport]");t=window.devicePixelRatio||1,n=1/t,e=screen.width*t/10,document.documentElement.style.fontSize="".concat(e.toFixed(2),"px"),s.setAttribute("content","width=".concat((t*screen.width).toFixed(1),",initial-scale=").concat(n.toFixed(3),",maximum-scale=").concat(n.toFixed(3),",minimum-scale=").concat(n.toFixed(3),",user-scalable=no")),i.setAttribute("data-dpr",t.toFixed(0)),window.rem=e,window.dpr=t}n("99af"),n("a9e3"),n("b680"),n("d3b7"),n("25f0"),document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(i,100)}}(),!1),Number.prototype.addZero=function(){var t=this.valueOf();return t>=10?t.toString():"0".concat(t)}},"1a0b":function(t,e,n){},4162:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAYAAABr5z2BAAAAAXNSR0IArs4c6QAAAJVJREFUKBWdj9EJgCAURX0SNEPQNO3QEOI4fbRDDtBfy9RfQ1i3UkR8Zgmi6DuHe6lT62SF7cWPRYKMrKtKC6L9M38yYOU8NDtZ0l8FYMBKgMvYGsQplWAWDOYvAS7FVZ7oYLC8oLSKi37jgQAPb1XC6EkBHtkqUXRWwFWJo7MCfMRVUtGzAnz6Kkx0J8iendp67NzQAYy0O2CWf5zRAAAAAElFTkSuQmCC"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("top-header"),n("recent-number",{attrs:{desc:t.desc}}),n("main",{staticClass:"main"},[n("nav",{staticClass:"navbar",attrs:{id:"navbar"}},t._l(t.navs,(function(e,i){return n("div",{key:e,class:["nav",t.active==i?"active":""],on:{click:function(e){return t.scrollTo(i)}}},[t._v(t._s(e))])})),0),n("section",{attrs:{id:"section0"}},[n("china-map",{attrs:{"list-province":t.listProvince}}),n("province-list",{attrs:{"list-china":t.listChina}})],1),n("section",{attrs:{id:"section1"}},[n("news")],1),n("section",{attrs:{id:"section2"}},[n("rumor")],1)]),n("nav",{directives:[{name:"show",rawName:"v-show",value:t.showNav,expression:"showNav"}],staticClass:"navbar-fixed"},t._l(t.navs,(function(e,i){return n("div",{key:e,class:["nav",t.active==i?"active":""],on:{click:function(e){return t.scrollTo(i)}}},[t._v(t._s(e))])})),0),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("li",[n("a",{attrs:{href:"https://m.yangshipin.cn/static/2020/c0126.html"}},[t._v("疫情24小时 | 与疫情赛跑")])]),n("li",[n("a",{attrs:{href:"http://2019ncov.nosugartech.com/"}},[t._v("确诊患者同行查询工具")])]),n("li",[n("a",{attrs:{href:"https://news.qq.com/zt2020/page/feiyan.htm"}},[t._v("腾讯新闻新冠疫情实时动态")])]),n("li",[n("a",{attrs:{href:"https://3g.dxy.cn/newh5/view/pneumonia"}},[t._v("丁香园新冠疫情实时动态")])]),n("li",[n("a",{attrs:{href:"https://vp.fact.qq.com/home"}},[t._v("新型冠状病毒实时辟谣")])]),n("li",[n("a",{attrs:{href:"https://promo.guahao.com/topic/pneumonia"}},[t._v("微医抗击疫情实时救助")])]),n("div",{staticClass:"last"},[t._v("网页纯属个人练习,如有雷同纯属巧合(😂😂😂样式借鉴)!愿疫情尽快过去,众志成城,抗击疫情,祝大家身体健康,工作顺利!")])])}],o=n("82ae"),c=n.n(o),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg"},[n("img",{attrs:{src:"/wuhan_ncov/bg.jpg",alt:""}}),n("div",{staticClass:"mid"},[n("div",[t._v("新型冠状病毒肺炎")]),n("div",[t._v("疫情实时追踪")])])])}],u={name:"TopHeader",created:function(){},methods:{}},d=u,f=(n("de91"),n("2877")),v=Object(f["a"])(d,r,l,!1,null,"2fcc031b",null),m=v.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"recent-number-block"},[n("div",{staticClass:"buttom"},[n("div",[t._v("统计截止至 "+t._s(t.modifyTime)+" 更新于"+t._s(t.minsBefore)+"分钟前")]),n("div",{staticClass:"source"},[n("div",{staticClass:"button",on:{click:function(e){t.show=!t.show}}},[t._v("数据来源")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"link"},[n("a",{attrs:{href:"https://github.com/BlankerL/DXY-2019-nCoV-Crawler"}},[t._v("2019新型冠状病毒疫情实时爬虫")]),n("a",{attrs:{href:"https://www.tianapi.com"}},[t._v("天行数据")])])])]),n("div",{staticClass:"bars"},t._l(t.numList,(function(e){return n("div",{key:"icbar"+e.text,staticClass:"bar"},[n("div",{staticClass:"add"},[t._v(" 较上日 "),n("span",{staticClass:"add-num"},[t._v("+"+t._s(e.inc))])]),n("div",{staticClass:"number"},[t._v(t._s(e.all))]),n("div",{staticClass:"text"},[t._v(t._s(e.text))])])})),0)])},p=[],w=(n("99af"),{name:"RecentNumber",props:{desc:{type:Object,default:function(){return{}}}},data:function(){return{show:!1}},computed:{numList:function(){return this.desc.modifyTime||this.desc.updateTime?[{all:this.desc.confirmedCount,inc:this.desc.confirmedIncr,text:"全国确诊"},{all:this.desc.suspectedCount,inc:this.desc.suspectedIncr,text:"疑似病例"},{all:this.desc.seriousCount,inc:this.desc.seriousIncr,text:"重症病例"},{all:this.desc.curedCount,inc:this.desc.curedIncr,text:"治愈人数"},{all:this.desc.deadCount,inc:this.desc.deadIncr,text:"死亡人数"}]:[{inc:0,all:0,text:"全国确诊"},{inc:0,all:0,text:"疑似病例"},{inc:0,all:0,text:"重症病例"},{inc:0,all:0,text:"治愈人数"},{inc:0,all:0,text:"死亡人数"}]},modifyTime:function(){if(this.desc.modifyTime||this.desc.updateTime){var t=new Date(this.desc.modifyTime||this.desc.updateTime);return"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()," ").concat(t.getHours().addZero(),":").concat(t.getMinutes().addZero(),":").concat(t.getSeconds().addZero())}return"加载中.."},minsBefore:function(){if(this.desc.modifyTime||this.desc.updateTime){var t=(new Date).valueOf();return~~((t-(this.desc.modifyTime||this.desc.updateTime))/1e3/60)}return"加载中.."}}}),_=w,g=(n("09a7"),Object(f["a"])(_,h,p,!1,null,"c6a769b2",null)),b=g.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"map",staticClass:"map"})},C=[],y=(n("d81d"),n("5c3d")),x=n.n(y),T={name:"Map",props:{listProvince:{type:Array,default:function(){return[]}}},data:function(){return{chart:null,option:{tooltip:{trigger:"item",triggerOn:"click",formatter:"{b}<br/>确诊人数:{c}",textStyle:{fontSize:20},extraCssText:"z-index:4"},visualMap:{pieces:[{min:1e4,label:"10000人以上"},{min:1e3,max:9999,label:"1000-9999人"},{min:500,max:999,label:"500-999人"},{min:100,max:499,label:"100-499人"},{min:10,max:99,label:"10-99人"},{min:1,max:10,label:"1-10人"}],textStyle:{fontSize:20}},series:[{name:"疫情地图",type:"map",map:"china",zoom:1.2,label:{show:!0,formatter:"{b}",fontSize:16},data:[]}]}}},mounted:function(){var t=this;setTimeout((function(){var e;t.chart=x.a.init(t.$refs.map),t.chart.showLoading(),c.a.get("/wuhan_ncov/json/china.json").then((function(n){e=n,x.a.registerMap("china",e.data),t.chart.setOption(t.option),t.chart.hideLoading()}));var n=t;window.addEventListener("resize",function(){var t;return function(){clearTimeout(t),t=setTimeout(n.chart.resize,100)}}(),!1)}),50)},methods:{refresh:function(){var t=this;if(this.chart&&this.chart.getOption()){var e=this.chart.getOption();e.series[0].data=this.listProvince,this.chart.setOption(e)}else setTimeout((function(){t.refresh()}),50)}},watch:{listProvince:function(){this.refresh()}}},E=T,O=(n("e342"),Object(f["a"])(E,A,C,!1,null,"26e96602",null)),S=O.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"list-block"},[t._m(0),i("div",{staticClass:"content",attrs:{id:"list-content"}},t._l(t.listChina,(function(e){return i("div",{key:e.provinceName,staticClass:"province-block"},[i("div",{staticClass:"province line",on:{click:function(t){e.show=!e.show}}},[i("div",[i("img",{class:["angle",e.show?"rotate":""],attrs:{src:n("4162"),alt:""}}),i("div",[t._v(t._s(e.provinceShortName))])]),i("div",[t._v(t._s(e.confirmedCount))]),i("div",[t._v(t._s(e.deadCount))]),i("div",[t._v(t._s(e.curedCount))])]),t._l(e.cities,(function(n){return i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"province.show"}],key:n.cityName,staticClass:"city line"},[i("div",[t._v(t._s(n.cityName))]),i("div",[t._v(t._s(n.confirmedCount))]),i("div",[t._v(t._s(n.deadCount))]),i("div",[t._v(t._s(n.curedCount))])])}))],2)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"title-fixed line"},[i("div",[t._v("地区")]),i("div",[t._v("确诊")]),i("div",[t._v("死亡")]),i("div",[t._v("治愈")])])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title line",attrs:{id:"list-title"}},[n("div",[t._v("地区")]),n("div",[t._v("确诊")]),n("div",[t._v("死亡")]),n("div",[t._v("治愈")])])}],M={data:function(){return{show:!1,listOther:[]}},props:{listChina:{type:Array,default:function(){return[]}}},created:function(){},mounted:function(){var t=this;setTimeout((function(){window.addEventListener("scroll",t.listShow(),!1)}),50)},methods:{listShow:function(){var t,e=this;return function(){var n=document.getElementById("list-title").offsetHeight,i=document.getElementById("navbar").offsetHeight,s=document.getElementById("list-title").offsetTop,a=n+i,o=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||window.pageYOffset||0,c=document.getElementById("list-content"),r=c.offsetHeight+c.offsetTop;o+=a,clearTimeout(t),t=setTimeout((function(){e.show=o>s&&o<r}),10)}}}},N=M,j=(n("cd53"),Object(f["a"])(N,k,B,!1,null,"38e1ea0c",null)),I=j.exports,D=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-block"},[i("div",{staticClass:"title"},[t._v("实时播报")]),i("div",{staticClass:"content"},[i("div",{staticClass:"line"}),t._l(t.newsList,(function(e,s){return i("div",{key:s,staticClass:"single-news"},[i("div",{staticClass:"time-box"},[i("img",{staticClass:"idot",attrs:{src:n("5eac")}}),i("div",{staticClass:"time"},[t._v(t._s(t.timestampToString(e.pubDate))+" "+t._s(t.hoursBefore(e.pubDate))+"小时前")])]),i("div",{staticClass:"news-box",on:{click:function(n){return t.toNewsDetail(e.sourceUrl)}}},[i("div",{staticClass:"news-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"news-detail"},[t._v(t._s(e.summary))]),i("div",{staticClass:"news-srouce"},[t._v("来源："+t._s(e.infoSource))])])])}))],2)])},L=[],R={name:"News",data:function(){return{newsList:[]}},created:function(){this.getNews()},methods:{getNews:function(){var t=this;c.a.get("https://lab.isaaclin.cn/nCoV/api/news").then((function(e){t.newsList=e.data.results}))},toNewsDetail:function(t){confirm("跳转至新闻详情页?")&&location.assign(t)},timestampToString:function(t){if(t){var e=new Date(t);return"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours().addZero(),":").concat(e.getMinutes().addZero(),":").concat(e.getSeconds().addZero())}return"加载中.."},hoursBefore:function(t){if(t){var e=(new Date).valueOf();return~~((e-t)/1e3/60/60)}return"加载中.."}}},P=R,Y=(n("662b"),Object(f["a"])(P,D,L,!1,null,"3e45065f",null)),F=Y.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-block"},[t._m(0),n("div",{staticClass:"content"},t._l(t.rumorsList,(function(e,i){return n("div",{key:i,staticClass:"single-rumor"},[n("div",{class:["tag",t.tagClass[e.rumorType]]},[t._v(t._s(t.tagContent[e.rumorType]))]),n("div",{staticClass:"rumor-title"},[t._v(t._s(e.title))]),n("div",{staticClass:"rumor-detail"},[t._v(t._s(e.mainSummary))]),n("div",{staticClass:"rumor-body"},[t._v(t._s(e.body))])])})),0)])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[t._v(" 辟谣信息 "),n("a",{attrs:{href:"https://vp.fact.qq.com/home"}},[t._v("查看更多内容")])])}],Q={name:"Rumor",data:function(){return{rumorsList:[],tagClass:{0:"red",1:"green",2:"yellow"},tagContent:{0:"谣言",1:"真实信息",2:"尚未证实"}}},created:function(){this.getRumors()},methods:{getRumors:function(){var t=this;c.a.get("https://lab.isaaclin.cn/nCoV/api/rumors").then((function(e){t.rumorsList=e.data.results}))}}},V=Q,H=(n("b5ce"),Object(f["a"])(V,z,U,!1,null,"0590409e",null)),K=H.exports,$={data:function(){return{showNav:!1,navs:["疫情分析","实时播报","辟谣信息"],active:0,listChina:[],listOther:[],listProvince:[],news:[],desc:{}}},components:{RecentNumber:b,TopHeader:m,"china-map":S,"province-list":I,news:F,Rumor:K},created:function(){this.getHeaderData(),this.getListData()},mounted:function(){var t=this;setTimeout((function(){window.addEventListener("scroll",t.navScrollShow(),!1)}),50)},methods:{getHeaderData:function(){var t=this;c.a.get("https://lab.isaaclin.cn/nCoV/api/overall").then((function(e){if(e.data.newslist){var n=e.data.newslist[0].news,i=e.data.newslist[0].desc;t.news=n,t.desc=i}else e.data.results&&(t.desc=e.data.results[0])})).catch((function(t){alert(t)}))},getListData:function(){var t=this;c.a.get("https://lab.isaaclin.cn/nCoV/api/area").then((function(e){for(var n=e.data.results||e.data.newslist,i=[],s=[],a=[],o=0;o<n.length;o++){var c=n[o];c.show=!1,c.country?"中国"==c.country?(i.push(c),a.push({name:c.provinceShortName,value:c.confirmedCount})):s.push(c):(i.push(c),a.push({name:c.provinceShortName,value:c.confirmedCount}))}i.sort((function(t,e){return t.confirmedCount>e.confirmedCount?-1:1})),t.listChina=i,t.listOther=s,t.listProvince=a})).catch((function(t){alert(t)}))},scrollTo:function(t){if(this.active=t,0!=t){var e=document.getElementById("section".concat(t));window.scrollTo(0,e.offsetTop-document.getElementById("navbar").offsetHeight)}else window.scrollTo(0,0)},navScrollShow:function(){var t,e=this;return function(){var n=document.getElementById("navbar").offsetTop,i=document.getElementById("navbar").offsetHeight,s=(document.getElementById("section0").offsetTop,document.getElementById("section1").offsetTop-i),a=document.getElementById("section2").offsetTop-i,o=document.documentElement.scrollTop||document.body.scrollTop||window.scrollY||window.pageYOffset||0;clearTimeout(t),t=setTimeout((function(){o>n?(e.showNav=!0,e.active=s<=o&&o<a?1:a<=o?2:0):e.showNav=!1}),10)}}}},W=$,X=(n("e9df"),Object(f["a"])(W,s,a,!1,null,"3164e840",null)),Z=X.exports,q=n("8c4f");i["a"].use(q["a"]);var J=[],G=new q["a"]({routes:J}),tt=G,et=n("2f62");i["a"].use(et["a"]);var nt=new et["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("1349"),n("6562");i["a"].config.productionTip=!1,new i["a"]({router:tt,store:nt,render:function(t){return t(Z)}}).$mount("#app")},"5eac":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAJFBMVEUAAAAAXv8AXf8AXf8AXv8AXv8AXf/4+Pgbbv6hwvrf6fjm7fjuPW6eAAAABnRSTlMA21PzpYogpAaOAAAAbklEQVQI12MAAhVhQycGMFBMAwIhEIs1DQwCgMwwCDOVgYEpDQoUGBhhTAEGtbS0jFkr29LSkhjc0tK6y8t3pKWlMIilpU0vL69MS0tkMEtLW15eXpWWlozMRChA1oYwDNkKhMUI56A6EuF0hIcAaeQ/4w77rZ8AAAAASUVORK5CYII="},6351:function(t,e,n){},6562:function(t,e,n){},"662b":function(t,e,n){"use strict";var i=n("9825"),s=n.n(i);s.a},9825:function(t,e,n){},"9f42":function(t,e,n){},ace5:function(t,e,n){},b5ce:function(t,e,n){"use strict";var i=n("ace5"),s=n.n(i);s.a},cd53:function(t,e,n){"use strict";var i=n("9f42"),s=n.n(i);s.a},cf97:function(t,e,n){},de91:function(t,e,n){"use strict";var i=n("1a0b"),s=n.n(i);s.a},e342:function(t,e,n){"use strict";var i=n("6351"),s=n.n(i);s.a},e610:function(t,e,n){},e9df:function(t,e,n){"use strict";var i=n("cf97"),s=n.n(i);s.a}});
//# sourceMappingURL=app.125d0ea4.js.map