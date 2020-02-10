<template>
  <header class="bg">
      <img src="/bg.jpg" alt />
      <div class="mid">
        <div>新型冠状病毒肺炎</div>
        <div>疫情实时追踪</div>
      </div>
    </header>
</template>

<script>
export default {
  name: "TopHeader",
  created() {},
  methods: {}
};
</script>

<style lang='less' scoped>
.bg {
  position: relative;
  color: #eee;
  height: 250px;
  img {
    filter: brightness(0.5);
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .mid {
    padding: 20px;
    font-size: 60px;
    line-height: 1.6;
    font-weight: bold;
  }
}
</style>