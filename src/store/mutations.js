import * as types from './mutations-types'

export default {
  [types.TIME] (state) {
    state.time.push(Date.now())
  },
  [types.GET_TASK_LIST] (state, taskList) {
    state.taskList = taskList
  },
  [types.GET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
