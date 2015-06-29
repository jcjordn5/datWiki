var mongoose = require('mongoose'),
timestamps = require("mongoose-concrete-timestamps"),
Schema = mongoose.Schema;

var postSchema = Schema({
  title:{type:String, require:true},
  body:{type:String, require:true},
  author:String,
  category:String,
  //author:String,

});
postSchema.plugin(timestamps);

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
