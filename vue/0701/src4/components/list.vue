<template>
  <ul class="todo-main">
   <item v-for="(todo,index) in todolist" :todo="todo" :index="index" :key="index" />
  </ul>

</template>

<script>
  import Item from './item'
  export default {
    data:function () {
      return{

      }
    },
    props:{
      todolist:{
       type:Array
      },
      // deletetodo:{
      //   type:Function,
      //   required:true
      // }
    },
    methods:{

    },
    components:{
      Item
    }
  }

</script>

<style>

</style>
