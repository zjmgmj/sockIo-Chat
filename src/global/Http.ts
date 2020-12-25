import Axios from 'axios'
import Config from '@/config'

const baseUrl = Config.baseUrl.devApiUrl

const axios = Axios.create({
  baseURL: baseUrl,
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

class Http {
  $post({ url = '', params = {} }) {
    return axios({
      method: 'post',
      url,
      headers: {
        Connection: 'keep-alive'
        // 'scscm-proxy-token': this.proxyToken('scscm'),
        // 'Cookie': cookie
      },
      data: params
      // transformRequest: data => {
      //   return Qs.stringify(data, { arrayFormat: 'repeat', allowDots: true })
      // },
      // paramsSerializer: params => {
      //   return Qs.stringify(params, { arrayFormat: 'brackets' })
      // }
    })
  }
  $get() {
    console.log('get')
  }
}

export default Http
