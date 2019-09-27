
import Vue from 'vue'
import App from './App'
import store from './store/index'
import {currency} from './currency'

Vue.filter('currency',currency)

new Vue({
  el:'#app',
  // components:{App},//1
  // template:'<App/>',//1
  render:h=>h(App), //2
  store
})
