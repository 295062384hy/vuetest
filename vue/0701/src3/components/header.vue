<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.13="add" v-model="headermsg"/>
  </div>

</template>

<script>
  export default {
    data:function () {
      return{
        headermsg:''
      }
    },
    methods:{
      add:function () {

        if(this.headermsg==''){
          alert('请输入')
          return
        }
        this.addtodo({name:this.headermsg,isfalse:false})
      }

    },
    props:['addtodo']
  }

</script>

<style>

</style>
