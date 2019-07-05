<template>

 <div>
   <span>app</span>
   <div id="a">

     <router-link to="/todo" >go todo</router-link>
     <router-link to="/todos">go todos</router-link>

   </div>


   <div id="b">
     <router-view :msg="msg"/>
   </div>
 </div>
</template>

<script>
  export default {
    name: "App",
    data:function () {
     return{
       msg:'sss'
     }
    }
  }
</script>

<style scoped>
  #a{
    width: 100%;
    height: 20px;
    margin-bottom: 200px;
    background-color: beige;
  }
  #b{
    width: 100%;
    height: 200px;
    margin-bottom: 200px;
    background-color: beige;
  }

</style>
