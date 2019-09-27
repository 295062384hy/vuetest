<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Headertodo></Headertodo>
        <list></list>
        <Foottodo></Foottodo>
      </div>
    </div>
  </div>
</template>

<script>
  import header from './components/header'
  import foot from './components/foot'
  import list from './components/list'
    export default {
        name: "App",
      components:{
        Headertodo:header,
        Foottodo:foot,
        list
      },
      mounted:function () {
        this.$store.dispatch('getTodos')
      }
    }
</script>

<style scoped>

</style>
