//制定mongo的数据库名为nodejs
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/nodejs')
exports.mongoose=mongoose