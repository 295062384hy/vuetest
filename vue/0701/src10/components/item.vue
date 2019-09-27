<template>
  <li>
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="todo.complete" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
        name: "item",
        props:['todo','index'],
      methods:{
        deleteItem:function () {
          if(confirm('确定？')){
            this.$store.dispatch('deletodo',this.index)

          }
        }
      }

    }
</script>

<style scoped>

</style>
