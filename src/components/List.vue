<template>
  <div class="list-block">
    <div class="title line" id="list-title">
      <div>地区</div>
      <div>确诊</div>
      <div>死亡</div>
      <div>治愈</div>
    </div>
    <div class="content" id="list-content">
      <div class="province-block" v-for="province of listChina" :key="province.provinceName">
        <div class="province line" @click="province.show=!province.show">
          <div>
            <img :class="['angle', province.show?'rotate':'']" src="../assets/img/angle.png" alt />
            <div>{{province.provinceShortName}}</div>
          </div>
          <div>{{province.confirmedCount}}</div>
          <div>{{province.deadCount}}</div>
          <div>{{province.curedCount}}</div>
        </div>
        <div
          class="city line"
          v-show="province.show"
          v-for="city of province.cities"
          :key="city.cityName"
        >
          <div>{{city.cityName}}</div>
          <div>{{city.confirmedCount}}</div>
          <div>{{city.deadCount}}</div>
          <div>{{city.curedCount}}</div>
        </div>
      </div>
    </div>
    <div class="title-fixed line" v-show="show">
      <div>地区</div>
      <div>确诊</div>
      <div>死亡</div>
      <div>治愈</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      listOther: []
    };
  },
  props: {
    listChina: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      window.addEventListener("scroll", this.listShow(), false);
    }, 50);
  },
  methods: {
    listShow() {
      let _this = this;
      let timer;
      return function() {
        let listHeight = document.getElementById("list-title").offsetHeight;
        let navHeight = document.getElementById("navbar").offsetHeight;
        let top = document.getElementById("list-title").offsetTop;
        let totalHeight = listHeight + navHeight;
        let scrollTop =
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          window.scrollY ||
          window.pageYOffset ||
          0;
        let ele = document.getElementById(`list-content`);
        let bottom = ele.offsetHeight + ele.offsetTop;
        scrollTop += totalHeight;
        bottom;
        clearTimeout(timer);
        timer = setTimeout(() => {
          if (scrollTop > top && scrollTop < bottom) {
            _this.show = true;
          } else {
            _this.show = false;
          }
        }, 10);
      };
    }
  }
};
</script>

<style lang="less" scoped>
.list-block {
  padding: 20px 20px 0;
  .line {
    display: flex;
    line-height: 80px;
    justify-content: space-between;
    background-color: white;
    & > div {
      flex: 1;
      text-align: center;
    }
    & > div:nth-child(1) {
      flex: 2;
      text-align: left;
      text-indent: 2em;
      position: relative;
    }
  }
  .title {
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    font-weight: bold;
    font-size: 30px;
    div:nth-child(1) {
      background-color: #e3e7f3;
    }
    div:nth-child(2) {
      background-color: #f3bab0;
    }
    div:nth-child(3) {
      background-color: #b4c0d5;
    }
    div:nth-child(4) {
      background-color: #6c9;
    }
  }
  .title-fixed {
    position: fixed;
    z-index: 10;
    font-weight: bold;
    padding: 0 20px;
    top: 100px;
    left: 0;
    right: 0;
  }
  .province-block {
    .province {
      background-color: #eee;
      font-weight: bold;
      border-bottom: 1px solid #fff;
      .angle {
        width: 16px;
        height: 12px;
        position: absolute;
        top: 34px;
        left: 24px;
        transform: rotate(-90deg);
        transition: transform 0.1s ease;
      }
      .rotate {
        transform: rotate(0);
      }
    }
    .city {
      font-size: 28px;
      border-bottom: 1px solid #eee;
      & > div:nth-child(1) {
        text-indent: 68px;
      }
    }
  }
}
</style>