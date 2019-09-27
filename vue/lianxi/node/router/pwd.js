var express = require('express')
var path = require('path')
var router = express.Router()


router.get('/pwd',function (req,res) {

  var pathfile =  path.resolve(__dirname,'../2.html')
    res.sendFile(pathfile)
})

// exports.router = router
module.exports = router
