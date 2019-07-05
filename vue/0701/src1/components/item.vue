<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.istrue"/>
      <span >{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" >删除</button>
  </li>
</template>

<script>
  export  default {
    props:{
      todo:Object
    },
    data:function () {
      return{

      }
    }
  }

</script>

<style>

</style>

