<template>
  <div class="todo-header" >
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="headername" @keyup.enter="add"/>
  </div>
</template>
<script>
  export  default {
    data:function () {
      return{
        headername:''
      }
    },
    props:{
      addtodu:{
        type:Function,
        required:true
      }
    },
    methods:{
      add:function () {
        if(!this.headername){
          alert('请输入')
          return
        }
        this.addtodu({
          name:this.headername,
          isfalse:false
        })

      }
    }

  }
</script>
<style>

</style>
