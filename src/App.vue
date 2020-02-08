<template>
  <div id="app">
    <header class="bg">
      <img src="/bg.jpg" alt="">
      <div class="mid">
        <div>新型冠状病毒肺炎</div>
        <div>疫情实时追踪</div>
      </div>
      <div class="buttom">
        <div>截止至截止 2020-02-07 19:09 全国数据统计</div>
        <div @click="show=true">数据来源</div>
      </div>
    </header>
    <van-popup v-model="show">
      <a href="https://github.com/BlankerL/DXY-2019-nCoV-Crawler">2019新型冠状病毒疫情实时爬虫</a>
    </van-popup>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    [Button.name]: Button,

  }
}
</script>
<style lang="less" scoped>
.bg {
  position: relative;
  color: #eee;
  overflow: hidden;
  img {
    filter: brightness(0.5);
    position: absolute;
    width: 100%;
    z-index: -1;
  }
  .mid {
    margin: 20px;
    font-size: 60px;
    line-height: 1.6;
  }
  .buttom {
    font-size: 24px;
    margin: 20px;
  }
}
</style>
