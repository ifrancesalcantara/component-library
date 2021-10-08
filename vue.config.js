// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    config.module
      .rule('svg')
      .use('file-loader')
      .loader('vue-svg-loader')
  },
  configureWebpack: {
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|es/)
      // new BundleAnalyzerPlugin()
    ],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 4000
  }
}
