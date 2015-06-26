var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var postSchema = Schema({
  title:{type:String, require:true},
  body:{type:String, require:true},
  categories:[{type:String}]
});

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
