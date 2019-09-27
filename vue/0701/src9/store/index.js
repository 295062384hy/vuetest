import Vue from 'vue'
import VUex from 'vuex'

Vue.use(VUex)


import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'


export default new VUex.Store({
  state,
  getters,
  actions,
  mutations
})
