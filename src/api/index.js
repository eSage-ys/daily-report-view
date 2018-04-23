import axios from 'axios'

// 引入其他services
export * from './servers/tasks'
export * from './servers/users'

axios.defaults.timeout = 15 * 1000
axios.defaults.baseURL = 'http://localhost:8081'

// Add a request interceptor
axios.interceptors.request.use(config => {
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})
// Add a response interceptor
axios.interceptors.response.use(responese => {
  // Do something with response
  return responese
}, error => {
  // Do something with response
  return Promise.reject(error)
})
