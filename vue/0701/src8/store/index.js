import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import products from './modules/products'


Vue.use(Vuex)



export default new Vuex.Store({
  actions,
  getters,
  modules:{
    products
  }


})
