<template>
  <div>
    <span>{{count}}</span> 这是一个 <span>{{jiou}}</span>
    <!--<button @click="add">点击增加</button>-->
    <!--<button @click="dele">点击减少</button>-->
    <!--<button @click="isjiadd">奇数增加</button>-->
    <!--<button @click="timeadd">延时增加</button>-->
    <button @click="handleadd">点击增加</button>
    <button @click="handledele">点击减少</button>
    <button @click="isjihandledele">奇数增加</button>
    <button @click="timehandledele">延时增加</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions,mapState} from 'vuex'
  export default {
    data:function () {
      return{

      }
    },
    computed:{
      ...mapState({
        count:'conunt'
      }),
      ...mapGetters({
        jiou:'isou'
      }),
      // count:{
      //   get:function () {
      //     return this.$store.state.conunt
      //   }
      // },
      // jiou:function () {
      //   return this.$store.getters.isou
      // }
    },
    methods:{
      // add:function () {
      //   this.$store.dispatch('handleadd')
      // },
      // dele:function () {
      //   this.$store.dispatch('handledele')
      // },
      // isjiadd:function () {
      //   this.$store.dispatch('isjihandledele')
      // },
      // timeadd:function () {
      //   this.$store.dispatch('timehandledele')
      // },

      ...mapActions(['handleadd','handledele','isjihandledele','timehandledele'])
    }
  }
</script>

<style>

</style>
