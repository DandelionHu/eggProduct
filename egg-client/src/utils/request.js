import axios from 'axios'
import store from '@/store'
import localstorage from 'store' // localstorage
import { Toast } from 'vant'
import { ACCESS_TOKEN } from '@/store/mutation-types'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 异常拦截处理器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    const token = localstorage.get(ACCESS_TOKEN)
    if (error.response.status === 403 || error.response.status === 404) {
      Toast.fail(data.message ? data.message : '接口不存在')
    }
    if (error.response.status === 406) {
      Toast.fail('登录失效，请重新登录')
      store.dispatch('Logout').then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      Toast.fail('Authorization verification failed')
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// 请求拦截
request.interceptors.request.use(config => {
  const token = localstorage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers.token = token
  }
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, errorHandler)

// 响应拦截器
request.interceptors.response.use((response) => {
  Toast.clear()
  const { code, message, isSuccess } = response.data
  if (code !== -1 && isSuccess) {
    // 获取数据成功
    return response.data
  } else {
    Toast.fail(message)
  }
}, errorHandler)

export default request
