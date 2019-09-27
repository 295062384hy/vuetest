// node
// // let c1 = require('./test')
// // let c2 = require('./test2')
// // let c3 = require('./test3')
// //
// // c1.test()
// // c2.test2()
// // console.log(c1.test3,c3.test3)
//
// requirejs.config({
//     baseUel:'./',
//     path:{
//         test:'test',
//         test2:'test2',
//         test3:'test3',
//         __vue__:'vue'
//     }
// })
// //应用其他模块
// requirejs(['test', 'test2','test3'], (test,test2,test3) => {
//
//
//     console.log(test,1111,test2,2222,test3);
// })
//
//
// requirejs.config({
//     baseUrl:'./',
//     path:{
//         test:'test'
//     }
// })
// requirejs(['test',''],()=>{
//
//     if(a==1){
//         require([],()=>{})
//     }
//
// })
// let test = require('./test')
// let test2 = require('./test2')
// let test3 = require('./test3')
// test.test()
// test2.test2()
// console.log(test3)


// requirejs.config({
//     baseUrl:'./',
//     path:{
//         test:'test',
//         test2:'test2',
//         test3:'test3'
//     }
// })
//
//
// requirejs(['test','test2','test3'],(test,test2,test3)=>{
//     console.log(test)
//     console.log(test2)
//     console.log(test3)
//
//
//     require([],()=>{})
//
// })

//cmd


//
// define((require,exports,module)=>{
//
//     let test = require('./test')
//     let test2 = require('./test2')
//
//     require.async(['./test3'],(test3)=>{
//         console.log(test3)
//     })
//     console.log(test)
//     console.log(test2)
//
// })

//
// requirejs.config({
//     baseUrl:'./',
//     path:{
//         test:'test',
//         test2:'test2',
//         test3:'test3'
//     }
// })
//
// requirejs(['test','test2'],(t1,t2)=>{
//     console.log(t1)
//     console.log(t2)
//     var dom = document.getElementById('box')
//     dom.onclick= function () {
//         alert('dianji')
//         require(['test3'],(t3)=>{
//             console.log(t3)
//         })
//     }
//
//
// })


// define((require,exports,module)=>{
//     require.async('./test3',(test3)=>{
//      console.log(test3);
//     })
//     let t1 = require('./test')
//     let t2 = require('./test2')
//     console.log(t1)
//     console.log(t2)
// })

import test3 from './test3'
console.log(test3)