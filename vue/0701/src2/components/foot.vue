<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="active" @click="activefn"/>
    </label>
    <span>
          <span>已完成{{totalfinal()}}</span> / 全部{{total()}}
        </span>
    <button class="btn btn-danger" @click="clear()">清除已完成任务</button>
  </div>
</template>
<script>
  export  default {
    data:function () {
      return{

      }
    },
    props:['totalfinal','total','xgtodolist','clear'],
    methods:{
      activefn:function () {
       this.xgtodolist(this.active)
      },
    },
    computed:{
      active:{
        get:function () {
        if( this.totalfinal()==this.total()&&this.total()>0){
          return true
        } else {
          return false
        }
        },
        set:function (value) {

        }
      }
    }


  }
</script>
<style>

</style>
