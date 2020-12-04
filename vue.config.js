const path = require('path')
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  transpileDependencies: [
    'vuetify'
  ],

  outputDir: './dist',

  // Paths
  publicPath: './',
  assetsDir: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, './src/styles/_variables.scss')]
    }
  }
}
