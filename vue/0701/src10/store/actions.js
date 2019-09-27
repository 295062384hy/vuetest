import storageUtils from '../utils/storageUtils'
export default {
  getTodos:function ({commit}) {
    setTimeout(function () {
      const todos = storageUtils.readTodos()
      commit('readertodo',todos)
    },1000)
  },
  addtodo:function ({commit},data) {
    commit('addtodo',data)
  },
  deletodo:function ({commit},index) {
    commit('dele',index)
  },
  deleteComplete:function ({commit}) {
    commit('deleteCompleteact')
  },
  selectAll ({commit}, isCheck) {
    commit('selectAllac', isCheck)
  },

}
