<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todolist" :key="index" :todo="todo" :index="index"></Item>
  </ul>
</template>

<script>
  import {mapActions,mapGetters,mapState} from 'vuex'
  import storageUtils from '../utils/storageUtils'
  import Item from './item'
    export default {
        name: "list",
      components:{
        Item
      },
      computed:{
        ...mapState(['todolist'])
      },
      watch:{
        todolist:{
          deep: true,
          handler: storageUtils.saveTodos
        }
      }
    }
</script>

<style scoped>

</style>
