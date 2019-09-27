
export default {

  getProducts:function (state,data) {

    state.Products=data

  },
  replacearr:function (state,id) {
   state.Products.find(function (item) {
     if(item.id===id){
        item.inventory--
     }
   })

  },
  addcart:function (state,id) {

    const item = state.item.find(function (item) {
     return item.id===id
    })

    if(item){
      item.count ++
    }else {
      state.item.unshift({
        id,
        count: 1
      })
    }


  },
  clearcart:function (state) {
    state.item=[]
    state.checkoutStatus = null

  },
  success:function (state) {
    state.item=[]
    state.checkoutStatus = '提交成功'
  },

    error:function (state,data) {
      state.item=data
      state.checkoutStatus = '提交失败'
    }



}
