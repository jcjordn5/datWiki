var mongoose = require('mongoose'),
Schema = mongoose.Schema,
bcrypt = require('bcrypt');

var userSchema = Schema({
  name:{type:String, require:true},
  password:{type:String, require:true}
});

userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(9))
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(this.password)
}

var User = mongoose.model('User', userSchema);
module.exports = User;
