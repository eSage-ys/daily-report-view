import * as types from './mutations-types'
import * as server from '../api/index'

export default {
  GET_TASK_LIST ({commit}, userId) {
    server.taskServer.getByUserId(userId).then(ret => {
      console.log(ret)
      let taskList = ret && ret.data && ret.data.data
      commit(types.GET_TASK_LIST, taskList)
    }).catch(err => {
      console.error(err)
    })
  },
  GET_USER_INFO ({commit}, option) {
    server.userServer.check(option.account, option.password).then(ret => {
      let userInfo = ret && ret.data && ret.data.data
      commit(types.GET_USER_INFO, userInfo)
    }).catch(err => {
      console.error(err)
    })
  }
}
