// var http =require('http')
// var querystring = require('querystring')
//
// var server = http.createServer(function (res,req) {
//
//     console.log(querystring.parse(res.url.split('?')[1]))
//
//     req.setHeader('Conent_Type','text/html;charset=utf8')
//     req.end('ememeem')
//
// })
//
// server.listen('3000',function (err) {
//     !err&&console.log('success!')
// })
//
//
//
//


//
//
// var http =require('http')
// var querystring = require('querystring')
// var server = http.createServer(function (res,req) {
//  console.log(querystring.parse(res.url.split('?')[0]))
//
// req.setHeader('Conent_Type','text/html;charset=utf8')
//     req.end('enen')
// })
//
// server.listen('3000',function (err) {
//
// })
//

//
// var express = require('express')
// var app = express()
// app.get('/',function (request,response) {
//     response.send('<h1>这是express服务器get返回的响应</h1>');
// })
// app.get('/app',function (request,response) {
//     response.send('<h1>这是express服务器get返回的响应1</h1>');
// })
// app.listen('3002',function (err) {
//     !err&&console.log('成功')
// })
//
//



// require('./node/db/index')
// var student = require('./node/model/model')

// app.use(function (res,req,next) {
//     console.log(res.query,1111)
//     if(res.query.id!=111){
//         req.end('error')
//     }
//     next()
// })

// function midle(res,req,next){
//     console.log(res.query,1111)
//     if(res.query.id!=111){
//         req.end('error')
//     }
//     next()
// }
//
// app.get('/login',midle,function (req,res) {
//     res.sendFile(__dirname+'/node/1.html')
// })
// app.get('/pwd',function (req,res) {
//     res.sendFile(__dirname+'/node/2.html')
// })

// var express = require ('express')
// var loginrouter = require('./node/router/login')
// var pwdrouter = require('./node/router/pwd')
// var app = express()
// app.use(express.static('./public'))
// app.use(loginrouter)
// app.use(pwdrouter)
//
// app.listen('3003',function (err) {
//     !err&console.log('success')
// })
//




// var express = require('express')
// var app = express()
//
// app.set('views','./views')
// app.set('view engine','ejs')
// app.get('/ejs',function (req,res) {
//
//     var data = {
//         name:'hh',
//         ahge:18
//     }
//     res.render('index',{data:data})
//
// })
//
// app.listen('3003',function (err) {
//     !err&&console.log('success')
// })














