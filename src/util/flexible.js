function flexible() {
  // 进行移动端设置
  var dpr, rem, scale;
  var docEl = document.documentElement;
  var metaEl = document.querySelector("meta[name=viewport]")

  dpr = window.devicePixelRatio || 1;
  scale = 1 / dpr;
  rem = screen.width * dpr / 10;
  document.documentElement.style.fontSize = `${rem.toFixed(2)}px`;
  metaEl.setAttribute("content", `width=${(dpr * screen.width).toFixed(1)},initial-scale=${scale.toFixed(3)},maximum-scale=${scale.toFixed(3)},minimum-scale=${scale.toFixed(3)},user-scalable=no`);
  docEl.setAttribute("data-dpr", dpr.toFixed(0));
  window.rem = rem;
  window.dpr = dpr;
}
document.addEventListener("DOMContentLoaded", flexible, false);
window.addEventListener("resize", (() => {
  let timer;
  return function () {
    console.log(timer)
    clearTimeout(timer)
    timer = setTimeout(flexible, 100);
  }
})(), false);