<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.isfalse" />
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="todo.isfalse" @click="delet">删除</button>
  </li>
</template>
<script>
  export  default {
    data:function () {
      return{

      }
    },
    props:{
      todo:Object,
      delettodu:{
        type:Function,
        required:true
      },
      index:Number,
      isquanxuan:{
        type:Function
      }
    },
    methods:{
      delet:function () {
        if(confirm('确认删除么？')){
          this.delettodu(this.index)

        }
      }
    }

  }
</script>
<style>

</style>
