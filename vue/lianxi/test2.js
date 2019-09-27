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

//
// function test2() {
//     console.log('test2')
// }
//
// module.exports={
//     test2
// }

//
// define(['test3'],(test3)=>{
//     function test2() {
//         console.log(test3)
//     }
//
//     return test2
// })

// define((require,exports,module)=>{
// function test2() {
//     console.log('test2')
// }
//
// exports.test2 = test2
// })

// define(['test3'],(test3)=>{
//     function test2(test3) {
//         console.log(test3,'test2')
//     }
//     return test2
// })


// define((require,exports,module)=>{
//     function test2() {
//         console.log('test2')
//     }
//     module.exports={
//         test2
//     }
// })