export default {
  products:function (state) {
    return state.Products
  },
  cartProduts:function (state) {
   return state.item.map(function (item) {
      var p = state.Products.find(function (p) {
        return  p.id===item.id
      })
      return{
        id:item.id,
        count:item.count,
        title:p.title,
        price:p.price
      }
    })


  },
  checkoutStatus (state) {
    return state.checkoutStatus
  }

}
