<template>
  <div ref="map" class="map"></div>
</template>

<script>
import Echarts from "echarts";
import axios from "axios";
export default {
  name: "Map",
  props: {
    listProvince: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      chart: null,
      option: {
        tooltip: {
          trigger: "item",
          triggerOn: "click",
          formatter: "{b}<br/>确诊人数:{c}",
          textStyle: {
            fontSize: 20
          },
          extraCssText: "z-index:4"
        },
        visualMap: {
          pieces: [
            { min: 10000, label: "10000人以上" }, // 不指定 max，表示 max 为无限大（Infinity）。
            { min: 1000, max: 9999, label: "1000-9999人" },
            { min: 500, max: 999, label: "500-999人" },
            { min: 100, max: 499, label: "100-499人" },
            { min: 10, max: 99, label: "10-99人" },
            { min: 1, max: 10, label: "1-10人" }
          ],
          textStyle: {
            fontSize: 20
          }
        },
        series: [
          {
            name: "疫情地图",
            type: "map",
            map: "china", // 自定义扩展图表类型
            zoom: 1.2,
            label: {
              show: true,
              formatter: "{b}",
              fontSize: 16
            },
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.chart = Echarts.init(this.$refs.map);
      this.chart.showLoading();
      let mapJson;
      axios.get("/json/china.json").then(data => {
        mapJson = data;
        Echarts.registerMap("china", mapJson.data);
        this.chart.setOption(this.option);
        this.chart.hideLoading();
      });
      // window.addEventListener("resize", this.chart.resize, false);
      let _this = this;
      window.addEventListener(
        "resize",
        (() => {
          let timer;
          return function() {
            clearTimeout(timer);
            timer = setTimeout(_this.chart.resize, 100);
          };
        })(),
        false
      );
    }, 50);
  },
  methods: {
    refresh() {
      if (this.chart && this.chart.getOption()) {
        let option = this.chart.getOption();
        option.series[0].data = this.listProvince;
        this.chart.setOption(option);
      }else {
        setTimeout(() => {
          this.refresh()
        }, 50);
      }
    }
  },
  watch: {
    listProvince() {
      this.refresh()
    }
  }
};
</script>

<style lang="less" scoped>
.map {
  width: 750px;
  height: 600px;
}
</style>