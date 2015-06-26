var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var userSchema = Schema({
  name:{type:String, require:true},
  password:{type:String, require:true},
  postCount:Number
});

var User = mongoose.model('User', userSchema);
module.exports = User;
