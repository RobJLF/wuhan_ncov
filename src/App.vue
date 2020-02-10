<template>
  <div id="app">
    <top-header></top-header>
    <recent-number :desc="desc"></recent-number>
    <main class="main">
      <nav class="navbar" id="navbar">
        <div
          v-for="(nav, index) of navs"
          :key="nav"
          :class="['nav', active==index?'active':'']"
          @click="scrollTo(index)"
        >{{nav}}</div>
      </nav>
      <section id="section0">
        <china-map :list-province="listProvince"></china-map>
        <province-list :list-china="listChina"></province-list>
      </section>
      <section id="section1">
        <news></news>
      </section>
      <section id="section2">
        <rumor></rumor>
      </section>
    </main>
    <nav class="navbar-fixed" v-show="showNav">
      <div
        v-for="(nav, index) of navs"
        :key="nav"
        :class="['nav', active==index?'active':'']"
        @click="scrollTo(index)"
      >{{nav}}</div>
    </nav>
    <footer class="footer">
      <li>
        <a href="https://m.yangshipin.cn/static/2020/c0126.html">疫情24小时 | 与疫情赛跑</a>
      </li>
      <li>
        <a href="http://2019ncov.nosugartech.com/">确诊患者同行查询工具</a>
      </li>
      <li>
        <a href="https://news.qq.com/zt2020/page/feiyan.htm">腾讯新闻新冠疫情实时动态</a>
      </li>
      <li>
        <a href="https://3g.dxy.cn/newh5/view/pneumonia">丁香园新冠疫情实时动态</a>
      </li>
      <li>
        <a href="https://vp.fact.qq.com/home">新型冠状病毒实时辟谣</a>
      </li>
      <li>
        <a href="https://promo.guahao.com/topic/pneumonia">微医抗击疫情实时救助</a>
      </li>
      <div class="last">网页纯属个人练习,如有雷同纯属巧合(😂😂😂样式借鉴)!愿疫情尽快过去,众志成城,抗击疫情,祝大家身体健康,工作顺利!</div>
    </footer>
  </div>
</template>
<script>
import axios from "axios";
import TopHeader from "./components/TopHeader";
import RecentNumber from "./components/RecentNumber";
import Map from "./components/Map";
import List from "./components/List";
import News from "./components/News";
import Rumor from "./components/Rumor";
export default {
  data() {
    return {
      showNav: false,
      navs: ["疫情分析", "实时播报", "辟谣信息"],
      active: 0,
      listChina: [],
      listOther: [],
      listProvince: [],
      news: [],
      desc: {}
    };
  },
  components: {
    RecentNumber,
    TopHeader,
    "china-map": Map,
    "province-list": List,
    news: News,
    Rumor: Rumor
  },
  created() {
    this.getHeaderData();
    this.getListData();
  },
  mounted() {
    setTimeout(() => {
      window.addEventListener("scroll", this.navScrollShow(), false);
    }, 50);
  },
  methods: {
    /* api */
    getHeaderData() {
      // https://lab.isaaclin.cn/nCoV/api/overall
      // http://api.tianapi.com/txapi/ncov/index?key=87ac5c9c754e400e2e2cfb0fa337b4d5
      axios
        .get("https://lab.isaaclin.cn/nCoV/api/overall")
        .then(data => {
          if (data.data.newslist) {
            let news = data.data.newslist[0].news;
            let desc = data.data.newslist[0].desc;
            this.news = news;
            this.desc = desc;
          } else if (data.data.results) {
            this.desc = data.data.results[0];
          }
        })
        .catch(err => {
          alert(err);
        });
    },
    getListData() {
      // http://api.tianapi.com/txapi/ncovcity/index?key=87ac5c9c754e400e2e2cfb0fa337b4d5
      // https://lab.isaaclin.cn/nCoV/api/area
      axios
        .get("https://lab.isaaclin.cn/nCoV/api/area")
        .then(data => {
          let list = data.data.results || data.data.newslist;
          // console.log(list)
          let listChina = [];
          let listOther = [];
          let listProvince = [];
          for (let i = 0; i < list.length; i++) {
            let item = list[i];
            item.show = false;
            if (item.country) {
              if (item.country == "中国") {
                listChina.push(item);
                listProvince.push({
                  name: item.provinceShortName,
                  value: item.confirmedCount
                });
              } else {
                listOther.push(item);
              }
            } else {
              listChina.push(item);
              listProvince.push({
                name: item.provinceShortName,
                value: item.confirmedCount
              });
            }
          }
          listChina.sort((a, b) => {
            if (a.confirmedCount > b.confirmedCount) {
              return -1;
            } else {
              return 1;
            }
            return 0;
          });
          this.listChina = listChina;
          this.listOther = listOther;
          this.listProvince = listProvince;
        })
        .catch(err => {
          alert(err);
        });
    },
    scrollTo(index) {
      this.active = index;
      if (index != 0) {
        let domEle = document.getElementById(`section${index}`);
        window.scrollTo(
          0,
          domEle.offsetTop - document.getElementById("navbar").offsetHeight
        );
      } else {
        window.scrollTo(0, 0);
      }
      // domEle.scrollIntoView({behavior: "smooth"})
      // this.scrollSmoothTo(domEle.offsetTop)
    },
    /* scrollSmoothTo(position) {
      // 当前滚动高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || window.pageYOffset || 0;
      // 滚动step方法
      let step = function () {
          // 距离目标滚动距离
          let distance = position - scrollTop;
          // 目标滚动位置
          scrollTop = scrollTop + distance / 5;
          if (Math.abs(distance) < 1) {
              window.scrollTo(0, position);
          } else {
              window.scrollTo(0, scrollTop);
              requestAnimationFrame(step);
          }
      };
      step();
    }, */
    navScrollShow() {
      let _this = this;
      let timer;
      return function() {
        let navTop = document.getElementById("navbar").offsetTop;
        let navHeight = document.getElementById("navbar").offsetHeight;
        let nav0 = document.getElementById(`section0`).offsetTop - navHeight;
        let nav1 = document.getElementById(`section1`).offsetTop - navHeight;
        let nav2 = document.getElementById(`section2`).offsetTop - navHeight;
        let scrollTop =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.scrollY ||
          window.pageYOffset ||
          0;
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (scrollTop > navTop) {
            _this.showNav = true;
            if (nav1 <= scrollTop && scrollTop < nav2) {
              _this.active = 1;
            } else if (nav2 <= scrollTop) {
              _this.active = 2;
            } else {
              _this.active = 0;
            }
          } else {
            _this.showNav = false;
          }
        }, 10);
      };
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  overflow: hidden;
  .navbar {
    display: flex;
    justify-content: space-around;
    font-size: 28px;
    line-height: 100px;
    .nav {
      position: relative;
    }
    .active {
      color: #4169e2;
      font-weight: bold;
    }
    .active::before {
      content: ".";
      display: block;
      font-size: 0;
      line-height: 0;
      width: 36px;
      height: 8px;
      border-radius: 8px;
      background-color: #4169e2;
      bottom: 4px;
      left: 50%;
      transform: translate(-50%, 0);
      position: absolute;
    }
  }
}
.navbar-fixed {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  background-color: #4169e2;
  justify-content: space-around;
  font-size: 28px;
  line-height: 100px;
  .nav {
    position: relative;
  }
  .active {
    color: white;
    font-weight: bold;
  }
  .active::before {
    content: ".";
    display: block;
    font-size: 0;
    line-height: 0;
    width: 36px;
    height: 8px;
    border-radius: 8px;
    background-color: white;
    bottom: 4px;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
  }
}
.footer {
  padding:0 30px 30px;
  font-size: 30px;
  font-weight: bold;
  a {
    text-decoration: none;
    line-height: 1.4;
  }
  li {
    list-style: none;
  }
  .last {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
