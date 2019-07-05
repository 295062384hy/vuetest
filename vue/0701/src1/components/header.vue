<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="headermsg" @keyup.13="keyfn"/>
  </div>
</template>

<script>
  export  default {
    data:function () {
      return{
        headermsg:"",

      }
    },
    methods:{
      keyfn:function () {
        console.log(this)
        return
        this.$attrs.addtodo(this.headermsg)

      },

    }
  }

</script>

<style>

</style>

