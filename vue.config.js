module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          isCustomElement: tag => tag === 'car-form'
        }
        return options
      })
  }
}
