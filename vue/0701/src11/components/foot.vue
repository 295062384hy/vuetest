<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'
    export default {
        name: "foot",
      computed:{
        ...mapGetters(['totalCount', 'completeCount', 'isSelectAll']),
        isCheck:{
          get:function () {
            return this.isSelectAll

          },
          set:function (newvalue) {
            this.$store.dispatch('selectAll', newvalue)

          }
        }
      },
      methods:{
        clear:function () {
          this.$store.dispatch('deleteComplete')

        }
      }

    }
</script>

<style scoped>

</style>
