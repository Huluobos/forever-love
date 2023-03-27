import axios from 'axios'
import { Toast } from 'mint-ui';
// 创建axios 实例对象
const baseUrl = 'http://119.3.216.3:3210/api'


const service = axios.create({
  baseURL: baseUrl, // url = base url + request url
  timeout: 50000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response && error.response.status) {
      Toast({
        message: '不好使啦！',
        position: 'bottom',
        duration: 3000,
      });
    } else {
      debounce( 5 * 1000)
    }
    return Promise.reject()
  }
)

let timer = null

function debounce( wait) {
  if (timer) {
    return  false
  }
  Message({
    message: '没网啦！',
    type: 'error',
    duration: wait
  })
  timer = setTimeout(() => {
    timer = null
  }, wait)
}


function request (){
  
}


export default service