(function (w) {

    const modelobject = {}


    modelobject.install=function (Vue, options) {

        Vue.h=function (h) {
            alert(h)
        }

        Vue.directive('hh',function (el,b) {
            el.innerHTML=el.innerHTML*b.value
        })

        Vue.prototype.$hhh=function () {
            alert('hhh')
        }

    }



    w.h=modelobject

})(window)