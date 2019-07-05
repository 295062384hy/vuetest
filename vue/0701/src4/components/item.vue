<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.isfalse"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="todo.isfalse" @click="adelet">删除</button>
  </li>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    data:function () {
      return{

      }
    },
    props:{
      todo:{
        type:Object
      },
      // deletetodo:{
      //   type:Function,
      //   required:true
      // },
      index:Number
    },
    methods:{
      adelet:function () {
        if(confirm('确认删除?')){
          // this.deletetodo(this.index)
          PubSub.publish('deletetodo', this.index)

        }
      }

    }
  }

</script>

<style>

</style>
