var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bodyParser 	= require('body-parser');
var Post = require('../models/posts.js');
var User = require('../models/users.js');
var methodOverride = require('method-override');
var marked = require('marked');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride("_method"));
//INDEX
router.get('/', function(req, res){
  Post.find({}, function(err, postsArray){
    if (err){
      console.log(err);
    }
    else {
      res.render('posts/index',{post: postsArray});
    }
  });
});

//NEW
router.get('/new', function (req, res){
  res.render('posts/new');
  });

//CREATE
router.post('/', function (req, res){
var newPost = new Post(req.body.post);
newPost.save(function (err, result){
  if (err){
    console.log(err);
  }
  else {
  console.log(result);
  res.redirect(301, "/posts");
}
});
});
//SHOW
router.get('/:id', function (req, res) {
 var postId = req.params.id;
 console.log(req.params.id);
 Post.findById({_id: postId}, function (err, post) {
   if (err) {
     console.log("Error in /posts/" + postId);
   } else {
     post.body = marked(post.body);

     res.render('posts/show', {post: post});
   }
 });
});
//DELETE
router.delete('/:id', function (req, res){
  var postId = req.params.id;
  Post.findByIdAndRemove(postId, function (err, result){
    console.log(result);
    res.redirect(301, "/posts");
  });
});

//EDIT
router.get('/:id/edit', function (req,res){
  var postId = req.params.id;
  Post.findById(postId, function (err, result){
    res.render('posts/edit', {post:result});
    console.log(result);
  });
});
//UPDATE
router.post('/:id/update', function (req, res) {
  var postId = req.params.id;
  var postToUpdate = req.body.post;
  console.log("Edit Atrticle", postToUpdate);
  Post.update({_id: postId}, {
    title: postToUpdate.title,
    body: postToUpdate.body,
    author: postToUpdate.author,
    categories: postToUpdate.categories,
    updatedAt:Date.now()},
    {multi: false}, function (err, result) {
      console.log(result);
      res.redirect(301, "/posts");
  });
});

module.exports = router;
