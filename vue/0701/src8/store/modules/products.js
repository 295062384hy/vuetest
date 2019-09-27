import shop from '../../api/shop'

const state = {
  products: []
}

const mutations = {

  replaceproducts:function (state, {products}) {

    state.products = products

  },
  addproducts:function (state,{id}) {
    state.products.find(function (item) {
      if(item.id==id){
        item.inventory--
      }
    })
  },
  // addproducts:function (state, {id}) {
  //   state.products.find(p => p.id===id).inventory--
  // }

}

const actions = {
  //接受产品
  getproducts:function ({commit}) {
    shop.getproducts(function (products) {
      commit('replaceproducts',{products})

    })
  },
  addToCart:function ({commit},p) {
    commit('addproducts',{id:p.id})
  }

}

const getters = {
  products (state) {
    return state.products
  }
}



export default {
  state,
  mutations,
  actions,
  getters
}
