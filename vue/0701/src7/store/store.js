import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  conunt : 1

}

const mutations = {
  add:function (state) {
    state.conunt++
  },
  dele:function (state) {
    state.conunt--
  }
}


const actions = {

  handleadd:function ({commit,state}) {
    commit('add')
  },
  handledele:function ({commit,state}) {
    commit('dele')
  },
  isjihandledele:function ({commit,state}) {
    if(state.conunt%2==1){
      commit('add')
    }
  },
  timehandledele:function ({commit,state}) {
   setTimeout(function () {
     commit('add')

   },200)
  }

}


const getters = {

  isou:function (state) {
    return state.conunt%2==0?'偶数':'奇数'
  }

}





export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
