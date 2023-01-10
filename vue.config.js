// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies:  [
//     '@inkline/inkline'
// ]
// })

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/my-wool-app'
  : '/'
}