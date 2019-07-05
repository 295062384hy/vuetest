<template>
  <div>
    <span>todo</span>

    <router-link to="/todo/new">new</router-link>
    <router-link to="/todo/message">message</router-link>

    <router-view/>

  </div>
</template>

<script>
    export default {
        name: "todo",
      props:['msg']
    }
</script>

<style scoped>

</style>
