import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

  count :1

}

const mutations = {
  addyi:function(state){
    state.count++
  },
  deletyi:function (state) {
    state.count--
  }
}


const actions = {

  increment:function({commit}){
    commit('addyi')
  },

  deincrement:function({commit}){
    commit('deletyi')
  },
  ouincrement:function ({commit,state}) {

    if(state.count%2==0){
      commit('addyi')

    }

  },
  setincrement:function({commit}){
   setTimeout(function () {
     commit('addyi')
   },3000)
  },

}


const getters = {

  isjiou:function (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }

}








export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
