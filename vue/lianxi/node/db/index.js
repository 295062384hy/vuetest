var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test_student',{useNewUrlParse:true})
mongoose.connection.once('open',function (err) {
    !err&&console.log('链接成功')
})