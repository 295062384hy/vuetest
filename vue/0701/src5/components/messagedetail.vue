<template>
  <div>
    <h2 >LOADING...</h2>

    <h2 v-if="!detail.id">LOADING...</h2>
    <ul v-else>
      <li>id: {{detail.id}}</li>
      <li>title: {{detail.title}}</li>
      <li>content: {{detail.content}}</li>
    </ul>
  </div>

</template>
<script>

  const messageDetails = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'}
  ]

  export default {
    data () {
      return {
        detail: {}
      }

    },

    mounted () {
      console.log('mounted()')
      const id = this.$route.params.id*1
      setTimeout(() => {
        // 查找得到对应的detail
        const detail = messageDetails.find(detail => detail.id===id)
        // 更新数据
        this.detail = detail
      }, 1000)
    },
    watch: {
      // 监视了组件对象$route属性, value就是$route最新的值
      $route: function (value) { // 当重新请求当前路由路径, 但参数变化了
        this.detail = {} // 重置数据
        const id = value.params.id*1
        setTimeout(() => {
          // 查找得到对应的detail
          const detail = messageDetails.find(detail => detail.id===id)
          // 更新数据
          this.detail = detail
        }, 1000)
      }
    }

  }

</script>
<style>

</style>
