
import utils from '../common/utils'

export default {
  firstTime (state) {
    return state.time.length > 0 ? utils.dateFormat(new Date(state.time[0]), 'yyyy-MM-dd HH:mm:ss.S') : ''
  },
  lastTime (state) {
    return state.time.length > 0 ? utils.dateFormat(new Date(state.time[state.time.length - 1]), 'yyyy-MM-dd HH:mm:ss.S') : ''
  },
  taskTree (state) {
    let taskTree = []
    let taskCur = []
    let taskTom = []
    let taskFur = []
    state.taskList.forEach(element => {
      if (element.type === 0) {
        taskFur.push(element)
      } else if (element.type === 1) {
        taskTom.push(element)
      } else {
        taskCur.push(element)
      }
    })
    taskTree.push({title: '当前任务', children: taskCur})
    taskTree.push({title: '明日计划', children: taskTom})
    taskTree.push({title: '待办事项', children: taskFur})
    return taskTree
  }
}
