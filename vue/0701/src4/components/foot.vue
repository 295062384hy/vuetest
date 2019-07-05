<template>
  <div class="todo-footer">
    <label>
      <!--<input type="checkbox" v-model="change"/>-->
      <slot name="left"></slot>
    </label>
          <!--<span>已完成{{size}}</span> / 全部{{todolist.length}}-->

    <slot name="left1"></slot>
    <slot name="left2"></slot>

    <!--<button class="btn btn-danger" @click="deletcomplete">清除已完成任务</button>-->
  </div>
</template>

<script>
  export default {
    data:function () {
      return{

      }
    },
    methods:{

    },
    props:['deletcomplete','selectALl','todolist'],
    // computed:{
    //   size: {
    //     get:function () {
    //       return  this.todolist.reduce((total,todo)=>total+(todo.isfalse?1:0),0)
    //
    //     },
    //     set:function () {
    //
    //     }
    //   },
    //   change: {
    //     get:function () {
    //       return this.todolist.length===this.size && this.size>0
    //
    //     },
    //     set:function (value) {
    //       this.selectALl(value)
    //
    //     }
    //   },
    // }
  }

</script>

<style>

</style>
