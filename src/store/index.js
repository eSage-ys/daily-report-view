import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {

}

export default new Vuex({
  state,
  actions,
  getters,
  mutations
})
