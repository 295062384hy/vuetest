import shop from '../api/shop'
export default {
  getProductsact:function ({commit},) {
    shop.addProducts(function (data) {
      commit('getProducts',data)
    })
  },
  replace:function ({commit},id) {
    if (id.inventory){
      commit('replacearr', id.id)
      commit('addcart', id.id)
  }
  },
  checkout:function ({commit,state},data) {
    var items = [...state.item]


    commit('clearcart')
    shop.buyProducts(data,function () {
      commit('success')
    },function () {
      commit('error',items)
    })
  }
}
