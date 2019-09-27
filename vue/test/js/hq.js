(function (w) {

    const  hq = {}

    hq.install = function (Vue,opation) {
        Vue.hq1 = function () {
            alert('zq1')
        }
        Vue.directive('zq2',function (el,b) {
            el.innerHTML = el.innerHTML +b.value
        })
        Vue.prototype.$zq3 = function () {
            alert('zq3')
        }
    }

    w.hq =hq

})(window)