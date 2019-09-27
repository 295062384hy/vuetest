var express = require('express')
var path = require('path')
var router  = express.Router()

function midle(res,req,next){
    console.log(res.query,1111)
    if(res.query.id!=111){
        req.end('error')
    }
    next()
}

router.get('/login',midle,function (req,res) {
    res.sendFile(__dirname+'../1.html')
    console.log(path.resolve(__dirname+'../1.html'))
})


module.exports = router



