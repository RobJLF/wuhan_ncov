<template>
  <div class="news-block">
    <div class="title">实时播报</div>
    <div class="content">
      <div class="line"></div>
      <div class="single-news" v-for="(news, index) of newsList" :key="index">
        <div class="time-box">
          <img class="idot" src="../assets/img/idot.png" />
          <div class="time">{{timestampToString(news.pubDate)}}  {{hoursBefore(news.pubDate)}}小时前</div>
        </div>
        <div class="news-box" @click="toNewsDetail(news.sourceUrl)">
          <div class="news-title">{{news.title}}</div>
          <div class="news-detail">{{news.summary}}</div>
          <div class="news-srouce">来源：{{news.infoSource}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "News",
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNews()
  },
  methods: {
    getNews() {
      axios.get("https://lab.isaaclin.cn/nCoV/api/news").then(data => {
        this.newsList = data.data.results
      });
    },
    toNewsDetail(link) {
      if(confirm("跳转至新闻详情页?")) {
        location.assign(link)
      }
    },
    timestampToString(timestamp) {
      if(timestamp) {
        let t = new Date(timestamp);
        return `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${t.getHours().addZero()}:${t.getMinutes().addZero()}:${t.getSeconds().addZero()}`
      }
      return "加载中.."
    },
    hoursBefore(timestamp) {
      if(timestamp) {
        let t = new Date().valueOf()
        return ~~((t-(timestamp))/1000/60/60);
      }
      return "加载中.."
    }
  }
};
</script>

<style lang="less" scoped>
.news-block {
  .title {
    font-size: 36px;
    font-weight: bold;
    color: #4169e2;
    padding: 30px 20px 30px;
  }
  .content {
    background-color: #f5f5f5;
    position: relative;
    padding-bottom: 80px;
    .line {
      position: absolute;
      height: calc(100%);
      width: 45px;
      /* top: 160px; */
      left: 0;
      border-right: 1px solid #ddd;
    }
    .single-news {
      margin-left: 90px;
      .time-box {
        position: relative;
        font-size: 28px;
        font-weight: 500;
        color: #737373;
        line-height: 80px;
        .idot {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) translateX(-55px);
        }
      }
      .news-box {
        background-color: white;
        border-radius: 10px;
        .news-title {
          color: #222222;
          font-weight: 500;
          font-size: 32px;
          padding: 40px 40px 0 40px;
          line-height: 1.5;
        }
        .news-detail {
          padding: 30px 40px;
          line-height: 40px;
          color: #737373;
        }
        .news-srouce {
          color: #222222;
          line-height: 28px;
          padding: 0px 40px 40px 40px;
        }
      }
    }
  }
}
</style>