<template>
<div>
  <h2>Products</h2>
  <ul>
    <li v-for="p in products">
      {{p.title}}--{{p.price | currency}}---{{p.inventory}}
      <p @click="addToCart(p)"><button :disabled="p.inventory===0">Add to cart</button></p>
    </li>
  </ul>
</div>
</template>

<script>
  import {mapActions,mapState,mapGetters} from 'vuex'
    export default {
        name: "products.vue",
      created:function () {
        this.$store.dispatch('getproducts')
      },
      computed:{
        ...mapGetters(['products']),
        // products:{
        //   get:function () {
        //     return this.$store.state.products
        //   }
        // }
      },
      methods:mapActions(['addToCart'])

    }
</script>

<style scoped>

</style>
