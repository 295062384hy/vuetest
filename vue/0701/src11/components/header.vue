<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.13="srearcheader"/>
  </div>

</template>

<script>
    export default {
        name: "header",
        data:function () {
          return{
            title:''
          }
        },
      methods:{
        srearcheader:function () {
          if(!this.title) {
            alert('必须输入')
            return
          }

          this.$store.dispatch('addtodo',{title:this.title,complete:false})
          this.title=''
        }
      }

    }
</script>

<style scoped>

</style>
