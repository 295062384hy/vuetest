(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
let test = require('./test')
let test2 = require('./test2')
let test3 = require('./test3')
test.test()
test2.test2()
console.log(test3)

},{"./test":2,"./test2":3,"./test3":4}],2:[function(require,module,exports){
// node  分配
// let test3 = require('./test3')
//
// function test(te) {
//     console.log(te)
// }
//
// module.exports={
//     test,
//     test3:test3.test3
// }


// define('test',['test3'],(test3)=>{
//     function test(test3) {
//     console.log(test3)
// }
//     return test
// })
//


let test3 = require('./test3')


function test() {
    console.log('test')
}

module.exports={
    test3:test3.test3,
    test
}
},{"./test3":4}],3:[function(require,module,exports){
// node  分配
// function test2() {
//     console.log(2)
// }
//
// exports.test2= test2
// define(()=>{
//     function test2() {
//         console.log(2)
//     }
//
//     return test2
// })


function test2() {
    console.log('test2')
}

module.exports={
    test2
}
},{}],4:[function(require,module,exports){
//node
// let test3 = '你们好'
//
// exports.test3= test3

// define(()=>{
//     let test3 = '你们好'
//     return test3
// })


let test3 = '你们好呀'

exports.test3 = test3
},{}]},{},[1]);
