var mongoose = require('mongoose')
var Schema = mongoose.Schema
var studentSchema = new Schema({
    name:String,
    age:Number,
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    meta:{
        type:Date,
        default:Date.now()
    }
})

var studentS = mongoose.model('studentS',studentSchema)

exprots.studentS = studentS