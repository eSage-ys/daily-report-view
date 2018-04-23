
import utils from '../common/utils'

export default {
  firstTime (state) {
    return state.time.length > 0 ? utils.dateFormat(new Date(state.time[0]), 'yyyy-MM-dd HH:mm:ss.S') : ''
  },
  lastTime (state) {
    return state.time.length > 0 ? utils.dateFormat(new Date(state.time[state.time.length - 1]), 'yyyy-MM-dd HH:mm:ss.S') : ''
  }
}
