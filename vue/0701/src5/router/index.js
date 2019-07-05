import Vue from 'vue'
import Router from 'vue-router'

import Todo from '../components/todo'
import Todos from '../components/todos'
import New from '../components/new'
import Message from '../components/message'
import Detail from '../components/messagedetail'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/todo',
      component:Todo,
      children:[
        {
          path:'/todo/new',
          component:New
        },
        {
          path:'/todo/message',
          component:Message,
          children:[
            {
              path:'/todo/message/detail/:id',
              component:Detail
            },
          ]
        },
      ]
    },
    {
      path:'/todos',
      component:Todos
    },
    {
      path:'',
      redirect:'/todo'
    },
  ]
})


