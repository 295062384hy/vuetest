// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import store from './store/index'
import {currency} from './currency'


Vue.filter('currency',currency)


new Vue({
  el:'#app',
  components:{App},
  store,
  render:h=>h(App)
})
