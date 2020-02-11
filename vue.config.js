const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/wuhan_ncov/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue'/* , 'normal-modules', 'normal' */]
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/less/variables.less'),
      ],
    })
}