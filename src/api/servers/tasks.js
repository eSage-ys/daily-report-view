import axios from 'axios'

export const taskServer = {
  addTask (options) {
    return axios.post('/tasks/add', options)
  },
  deleteTask (id) {
    return axios.get('/tasks/delete', {id: id})
  },
  updateTask (options) {
    return axios.post('/update', options)
  },
  getByUserId (userId) {
    return axios.get('/tasks/allByUser', {params: { userId: userId }})
  }
}
