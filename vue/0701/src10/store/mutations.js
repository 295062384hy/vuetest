export default {
  readertodo:function (state,data) {
    state.todolist=data
  },
  addtodo:function (state,data) {
    state.todolist.unshift(data)
  },
  dele:function (state,index) {
    state.todolist.splice(index,1)
  },
  deleteCompleteact:function (state) {
  state.todolist=state.todolist.filter(function (todo) {
      !todo.complete
  })
  },
  selectAllac:function (state,data) {
    state.todolist.forEach(todo => todo.complete = data)

  }
}
