<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Headertodo @addtodo="addtodo"></Headertodo>
        <Listtodo :todolist="todolist" ></Listtodo>

        <!--<Foottodo :deletcomplete="deletcomplete" :selectALl="selectALl" :todolist="todolist"></Foottodo>-->


          <input type="checkbox" v-model="change" slot="left"/>
          <span slot="left1">已完成{{size}}  / 全部{{todolist.length}}</span>
          <button slot="left2" class="btn btn-danger" @click="deletcomplete">清除已完成任务</button>

      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/header'
  import List from './components/list'
  import Foot from './components/foot'
  import Until from './utils/storageUtils'
  import PubSub from 'pubsub-js'
  export default {
    data:function () {
      return{

        todolist : Until.readTodos()
        // todolist :JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')

        // todolist:[{name:'tom',isfalse:false},{name:'qwe',isfalse:true},{name:'asd',isfalse:false}]

      }
    },
    computed:{
      size: {
        get:function () {
          return  this.todolist.reduce((total,todo)=>total+(todo.isfalse?1:0),0)

        },
        set:function () {

        }
      },
      change: {
        get:function () {
          return this.todolist.length===this.size && this.size>0

        },
        set:function (value) {
          this.selectALl(value)

        }
      },
    },
    mounted:function(){
      var that = this
      PubSub.subscribe('deletetodo',function (msg,index) {
        that.deletetodo(index)
      })
      //或者箭头
    },
    methods:{
      addtodo:function (data) {
        this.todolist.push(data)
      },
      deletetodo:function (index) {
        this.todolist.splice(index,1)
      },
      deletcomplete:function () {
        this.todolist= this.todolist.filter(item=>!item.isfalse)
      },
      selectALl:function (type) {
console.log(this.todolist)
         this.todolist.forEach(item=>item.isfalse=type)

      }

    },
    components:{
      Headertodo:Header,
      Listtodo:List,
      Foottodo:Foot
    },
    watch:{
      todolist:{
        deep:true,
        handler: Until.saveTodos

      }
    }
  }

</script>

<style>

</style>
