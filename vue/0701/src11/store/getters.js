export default {
  totalCount (state) {
    return state.todolist.length
  },
  completeCount:function (state) {
    return state.todolist.reduce(function (totel,todo) {
     return totel+= todo.complete?1:0
    },0)
  },
  // 是否需要全选
  isSelectAll (state, getters) {
    return getters.totalCount===getters.completeCount && getters.completeCount>0
  }

}
