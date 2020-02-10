<template>
  <section class="recent-number-block">
    <div class="buttom">
      <div>统计截止至 {{modifyTime}} 更新于{{minsBefore}}分钟前</div>
      <div class="source">
        <div class="button" @click="show=!show">数据来源</div>
        <div class="link" v-show="show">
          <a href="https://github.com/BlankerL/DXY-2019-nCoV-Crawler">2019新型冠状病毒疫情实时爬虫</a>
          <a href="https://www.tianapi.com">天行数据</a>
        </div>
      </div>
    </div>
    <div class="bars">
      <div class="bar" v-for="item of numList" :key="'icbar'+item.text">
        <div class="add">
          较上日
          <span class="add-num">+{{item.inc}}</span>
        </div>
        <div class="number">{{item.all}}</div>
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RecentNumber",
  props: {
    desc: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    numList: function() {
      if (this.desc.modifyTime || this.desc.updateTime) {
        return [
          { all: this.desc.confirmedCount, inc: this.desc.confirmedIncr, text: "全国确诊"},
          { all: this.desc.suspectedCount, inc: this.desc.suspectedIncr, text: "疑似病例" },
          { all: this.desc.seriousCount, inc: this.desc.seriousIncr, text: "重症病例" },
          { all: this.desc.curedCount, inc: this.desc.curedIncr, text: "治愈人数" },
          { all: this.desc.deadCount, inc: this.desc.deadIncr, text: "死亡人数" }
        ];
      }else {
        return [
          { inc: 0, all: 0, text: "全国确诊"},
          { inc: 0, all: 0, text: "疑似病例" },
          { inc: 0, all: 0, text: "重症病例" },
          { inc: 0, all: 0, text: "治愈人数" },
          { inc: 0, all: 0, text: "死亡人数" }
        ]
      }
    },
    modifyTime() {
      if(this.desc.modifyTime || this.desc.updateTime) {
        let t = new Date(this.desc.modifyTime || this.desc.updateTime);
        return `${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()} ${t.getHours().addZero()}:${t.getMinutes().addZero()}:${t.getSeconds().addZero()}`
      }
      return "加载中.."
    },
    minsBefore() {
      if(this.desc.modifyTime || this.desc.updateTime) {
        let t = new Date().valueOf()
        return ~~((t-(this.desc.modifyTime || this.desc.updateTime))/1000/60);
      }
      return "加载中.."
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.recent-number-block {
  overflow: hidden;
  .bars {
    overflow: hidden;
    display: flex;
    // margin-top: 30px;
    justify-content: space-between;
    padding: 0 10px;
    .bar {
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      padding-top: 20px;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      text-align: center;
      width: 140px;
      .add {
        color: #7c7c7c;
        font-size: 20px;
      }
      .number {
        font-size: 34px;
        font-weight: bold;
        line-height: 2;
      }
      .text {
        font-size: 24px;
        font-weight: bold;
        line-height: 2;
      }
    }
    & > div:nth-child(1) {
      background-color: #fdf1f1;
      .add-num,
      .number {
        color: #f55253;
      }
      .text {
        background-color: #ffe0e0;
      }
    }
    & > div:nth-child(2) {
      background-color: #fff7ed;
      .add-num,
      .number {
        color: #ff961e;
      }
      .text {
        background-color: #ffeed9;
      }
    }
    & > div:nth-child(3) {
      background-color: #f9e1de;
      .add-num,
      .number {
        color: #a25a4e;
      }
      .text {
        background-color: #deb0a8;
      }
    }
    & > div:nth-child(4) {
      background-color: #f8f8f8;
      .add-num,
      .number {
        color: #178b50;
      }
      .text {
        background-color: #dfeee6;
      }
    }
    & > div:nth-child(5) {
      background-color: #f1f8f4;
      .add-num,
      .number {
        color: #66666c;
      }
      .text {
        background-color: #eeeeee;
      }
    }
  }
  .buttom {
    font-size: 24px;
    padding: 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .source {
      line-height: 1.2;
      padding: 10px;
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      position: relative;
      .button {
        color: white;
        vertical-align: middle;
        // font-weight: bold;
        &::after {
          content: ".";
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-left: 10px;
          background: url(../assets/img/qs.png);
          background-size: 100% 100%;
        }
      }
      .link {
        position: absolute;
        right: -8px;
        color: white;
        white-space: nowrap;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 10px;
        top: 60px;
        a {
          display: inline-block;
          color: #ff961e;
          text-decoration: none;
          padding: 16px;
        }
        &::before {
          content: ".";
          font-size: 0;
          line-height: 0;
          display: block;
          position: absolute;
          width: 0;
          height: 0;
          border-width: 0 10px 10px 10px;
          border-style: solid;
          border-color: transparent transparent rgba(0, 0, 0, 0.75) transparent;
          top: -10px;
          right: 10px;
          transform: translate(-50%, 0);
        }
      }
    }
  }
}
</style>
