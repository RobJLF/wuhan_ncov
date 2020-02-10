<template>
  <div class="news-block">
    <div class="title">
      辟谣信息
      <a href="https://vp.fact.qq.com/home">查看更多内容</a>
    </div>
    <div class="content">
      <div class="single-rumor" v-for="(rumor, index) of rumorsList" :key="index">
        <div :class="['tag', tagClass[rumor.rumorType]]">{{tagContent[rumor.rumorType]}}</div>
        <div class="rumor-title">{{rumor.title}}</div>
        <div class="rumor-detail">{{rumor.mainSummary}}</div>
        <div class="rumor-body">{{rumor.body}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Rumor",
  data() {
    return {
      rumorsList: [],
      tagClass: {
        0: "red",
        1: "green",
        2: "yellow"
      },
      tagContent: {
        0: "谣言",
        1: "真实信息",
        2: "尚未证实"
      }
    };
  },
  created() {
    this.getRumors()
  },
  methods: {
    getRumors() {
      // https://lab.isaaclin.cn/nCoV/api/rumors
      // http://api.tianapi.com/txapi/rumour/index?key=87ac5c9c754e400e2e2cfb0fa337b4d5
      axios.get("https://lab.isaaclin.cn/nCoV/api/rumors").then(data => {
        this.rumorsList = data.data.results;
      });
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
    padding: 50px 30px 30px;
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #4169e2;
    }
  }
  .content {
    position: relative;
    padding-bottom: 80px;
    .single-rumor {
      background-color: white;
      border-radius: 10px;
      margin: 30px;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 8px 24px rgba(216, 216, 216, 0.2);
      border: 1px solid #d8d8d8;
      .tag {
        font-weight: bold;
        padding: 10px 20px;
        border-radius: 6px;
        display: inline-block;
        color: white;
        margin-left: 40px;
      }
      .red {
        background-color: #dc1717;
      }
      .green {
        background-color: #168e16;
      }
      .yellow {
        background-color: orange;
      }
      .rumor-title {
        font-weight: bold;
        font-size: 40px;
        line-height: 56px;
        margin: 24px 40px 0 40px;
        text-decoration: none;
      }
      .rumor-detail {
        font-size: 28px;
        line-height: 44px;
        margin: 40px 40px 0 40px;
        text-decoration: none;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
      .rumor-body {
        font-size: 24px;
        line-height: 44px;
        margin: 40px 40px 0 40px;
        text-decoration: none;
        font-weight: normal;
        overflow: hidden;
        font-weight: bold;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>