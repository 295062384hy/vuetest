<template>
  <div>
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        <router-link :to="`/todo/message/detail/${m.id}?xxx=123`">{{m.title}}</router-link>
        <span @click="pushShow(m.id)">p</span>
        <span @click="replaceShow(m.id)">r</span>

      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr>

    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        messages: []
      }
    },

    mounted () {
      // 模拟从后台获取数据
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'message001'},
          {id: 3, title: 'message003'},
          {id: 5, title: 'message005'}
        ]
        // 更新数据
        this.messages = messages
      }, 1000)
    },
    methods: {
      pushShow(id) {
        // console.log(this.$router)
        this.$router.push(`/todo/message/detail/${id}`)
      },

      replaceShow(id) {
        this.$router.replace(`/todo/message/detail/${id}`)
      }
    }
    }
</script>
<style>

</style>
