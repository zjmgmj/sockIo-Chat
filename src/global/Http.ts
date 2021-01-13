import Axios from 'axios'
// import Config from '@/config'

// const baseUrl = Config.baseUrl.devApiUrl

const axios = Axios.create({
  // baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    console.log(config)
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 相应拦截器
axios.interceptors.response.use(
  res => {
    console.log(res)
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

/**
* 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
* 函数的参数及返回值如下：
* @param {String} method 请求的方法：get、post、delete、put
* @param {String} url 请求的url:
* @param {Object} data 请求的参数
* @returns {Promise} 返回一个promise对象，其实就相当于axios请求数据的返回值
*/
const Http = function ({ method = 'get', url = '', data = {} }) {
  method = method.toLowerCase();
  if (method == 'post') {
    return axios.post(url, data)
  } else if (method == 'get') {
    return axios.get(url, { params: data })
  } else if (method == 'delete') {
    return axios.delete(url, { params: data })
  } else if (method == 'put') {
    return axios.put(url, data)
  } else {
    console.error('未知的method' + method)
    return false
  }
}

export default Http
