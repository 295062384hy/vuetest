<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Headertodo :addtodo="addtodo"></Headertodo>
        <Listtodo :todolist="todolist" :deletetodo="deletetodo"></Listtodo>
        <Foottodo :deletcomplete="deletcomplete" :selectALl="selectALl" :todolist="todolist"></Foottodo>

      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/header'
  import List from './components/list'
  import Foot from './components/foot'
  import Until from './utils/storageUtils'
  export default {
    data:function () {
      return{

        todolist : Until.readTodos(),
        // todolist :JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')

        // todolist:[{name:'tom',isfalse:false},{name:'qwe',isfalse:true},{name:'asd',isfalse:false}]

      }
    },
    mounted:function(){
      alert(Until.readTodos())
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
