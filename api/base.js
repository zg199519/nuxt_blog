import axios from 'axios'
const service = axios.create({
  timeout: 10000,
  baseURL: process.env.NODE_ENV === 'development'? '/api' : process.env.baseUrl
})
// 请求拦截
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  console.log(error) 
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(
  response => {
    if(response.data.code !== 200){
      alert(response.data.msg)
      return Promise.reject(response.data.msg)
    } else {
      return response.data
    }
    
  },
  error => {
    console.log(error,898)
    return Promise.reject(error.response)
  }
)

export default service