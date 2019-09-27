<template>
  <ul class="todo-main">
    <Itemcomponents v-for="(todo,index) in addtodoarr" :todo="todo" :index="index" :key="index"></Itemcomponents>
  </ul>

</template>

<script>
  import Item from './item'
  export  default {
    props: ['addtodoarr'],
    data:function () {
      return{

      }
    },
    components:{
      Itemcomponents:Item,
    }
  }

</script>

<style>

</style>

