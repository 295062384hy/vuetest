<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Headertodo :addtodu="addtodu"></Headertodo>
        <Listtodo :todolist="todolist" :delettodu="delettodu" ></Listtodo>
        <Foodtodo :totalfinal="totalfinal" :total="total" :xgtodolist="xgtodolist" :clear="clear"></Foodtodo>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from './components/header'
  import List from './components/list'
  import Food from './components/foot'

  export  default {
    data:function () {
      return{
        todolist:[{name:'tom',isfalse:true},{name:'qwe',isfalse:true},{name:'asd',isfalse:false}]

      }
    },
    components:{
      Headertodo:Header,
      Listtodo:List,
      Foodtodo:Food,

    },
    methods:{
      addtodu:function (data) {
        this.todolist.push(data)
      },
      delettodu:function (index) {
        this.todolist.splice(index,1)
      },
      totalfinal:function () {
    return  this.todolist.reduce(function(total, currentValue){
        if(currentValue.isfalse){
          total+=1
        }
        return total
        },0)

      },
      total:function () {
        return  this.todolist.reduce(function(total, currentValue){
         total++
          return total
        },0)

      },
      xgtodolist:function (type) {
          this.todolist.forEach(function (item,index) {

            if(type){
              item.isfalse=false

            }else {
              item.isfalse=true
            }

          })
      },
      clear:function () {
        this.todolist =  this.todolist.filter(function (item,index) {

         return !item.isfalse

        },this)
      },
      // isquanxuan:function () {
      //
      //   var a = true
      //   console.log(this.todolist)
      //
      //   this.todolist.forEach(function (item,index) {
      //     if(!item.isfalse){
      //       a = false
      //     }
      //   })
      //
      //   return a
      //
      // },

    }

  }
</script>
<style>

</style>
