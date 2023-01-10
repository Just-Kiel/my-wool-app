const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies:  [
    '@inkline/inkline'
]
})

module.exports = {
  publicPath: '/wool_app/'
}