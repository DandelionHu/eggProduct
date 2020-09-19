module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/article': {
        target: 'http://127.0.0.1:7001/',
        ws: true, // 支持websocket
        changeOrigin: true // 开启虚拟服务器
      }
    }
  }
}
