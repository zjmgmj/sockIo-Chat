export default {
  /**
   * @description 配置显示在浏览器标签的title
   */
  title: 'projectName',
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  cookieExpires: 3,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    devApiUrl: 'http://localhost:8080/',
    proApiUrl: 'http://localhost:8080/',
    webSocketUrl: 'http://localhost:8080/'
  },
  /**
   * @description 默认打开的首页的路由name值，默认为home
   */
  homeName: 'Home'
}
