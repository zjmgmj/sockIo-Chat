module.exports = {
  lintOnSave: false,
  devServer: {
    // port: 8080,
    overlay: {
      warning: false,
      errors: false
    },
    proxy: {
      '/api': {
        target: 'http://ecs8.czxkdz.com:30011/',
        secure: false, // false为http访问，true为https访问
        changeOrigin: true, // 跨域访问设置，true代表跨域
        ws: true,
        pathRewrite: { // 路径改写规则
          '^/api': '/api' // 以/proxy/为开头的改写为''
        }
      }
    }
  }
}