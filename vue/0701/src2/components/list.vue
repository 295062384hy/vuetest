<template>
  <ul class="todo-main">
    <Item  v-for="(todo,index) in todolist" :todo="todo" :index="index" :key="index" :delettodu="delettodu" />
  </ul>

</template>
<script>
  import  Item from './item'
  export  default {
    data:function () {
      return{

      }
    },
    props:['todolist','delettodu',],
    components:{
      Item
    }

  }
</script>
<style>

</style>
