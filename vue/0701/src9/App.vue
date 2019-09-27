<template>
  <div>
    <h1>Shopping Cart Example</h1>
    <Products></Products>
    <hr>
    <Char></Char>
  </div>

</template>

<script>

  import Products from './components/products'
  import Char from './components/cart'
export default {
  data:function () {
    return{

    }
  },
  components:{
    Products,
    Char
  }
}
</script>

<style>

</style>
