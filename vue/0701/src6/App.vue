<template>
  <div>
   {{count1}} 他是一个{{isis}}
    <button @click="add">增加一</button>
    <button @click="dele">减少一</button>
    <button @click="ouadd">偶数增加</button>
    <button @click="setadd">延迟增加</button>

  </div>

</template>
<script>
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    data:function () {
      return{

      }
    },
    computed:{
      // count:{
      //   get:function () {
      //   return  this.$store.state.count
      //   }
      // },
      // ...mapState(['count']),

      ...mapState({
        count1:"count"
        // count:state=>state.count
      }),
      // ...mapGetters(['evenOrOdd'])
      ...mapGetters({
        isis:'isjiou'
      }),

      // isis:{
      //   get:function () {
      //     return  this.$store.getters.isjiou
      //   }
      // }

    // ...mapGetters(['isjiou']),
    },
    methods:{
      add:function () {
        this.$store.dispatch('increment')
      },
      dele:function () {
        this.$store.dispatch('deincrement')
      },
      ouadd:function () {
        this.$store.dispatch('ouincrement')
      },
      setadd:function () {
        this.$store.dispatch('setincrement')
      },

    }

  }
</script>
<style>

</style>
