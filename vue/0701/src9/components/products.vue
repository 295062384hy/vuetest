<template>
<div>
  <h2>Products</h2>
  <ul>

    <li v-for="p in Products">
      {{p.title}}--{{p.price | currency}}---{{p.inventory}}
      <p @click="replace(p)"><button :disabled="p.inventory===0">Add to cart</button></p>
    </li>
  </ul>
</div>
</template>

<script>
  import {mapActions,mapGetters,mapState} from 'vuex'
export default {
  created:function () {
    this.$store.dispatch('getProductsact')
  },
  computed:{
    ...mapState({
      Products:'Products'
    })
  },
  methods:mapActions(['replace'])


}
</script>

<style scoped>

</style>
