<template>
  <div >
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <Headercomponents ></Headercomponents>
          <Listcomponents :addtodoarr="todoarr"></Listcomponents>
          <Footcomponents></Footcomponents>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from './components/header'
  import List from './components/list'
  import Foot from './components/foot'
  export default {
    data:function(){
      return{

        todoarr:[{name:'tom',istrue:false},{name:'jak',istrue:true},{name:'zs',istrue:false}],

      }
    },
    methods:{
      addtodo:function (data) {
        this.todoarr.push(data)
      },


    },
    components:{
      Headercomponents:Header,
      Listcomponents:List,
      Footcomponents:Foot
    }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
