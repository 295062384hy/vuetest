(function (window) {


    const y = {}

    y.install = function(Vue,peizhi){
        Vue.h1 = function (h) {
            alert(h)
        }


        Vue.directive('h2',function (el,b) {

            el.innerHTML = el.innerHTML*b.value

        })

        Vue.prototype.$h3=function () {

            alert('aaa')
        }

    }




    window.y=y

})(window)