var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bodyParser 	= require('body-parser');
var Post = require('../models/posts.js');
var methodOverride = require('method-override');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride("_method"));
//INDEX
router.get('/', function(req, res){
  Post.find({}, function(err, postsArray){
    if (err){
      console.log(err);
    }
    else {
      res.render('posts/index',{posts: postsArray});
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
  res.redirect(301, "posts");
}
});
});
//SHOW
router.get('/:id', function (req, res) {
 var postId = req.params.id;
 console.log(req.params.id);
 Post.findById({_id: postId}, function (err, item) {
   if (err) {
     console.log("Error in /posts/" + postId);
   } else {
     res.render('posts/show', {post: post});
   }
 });
});
//DELETE
router.delete('/:id', function (req, res){
  var postId = req.params.id;
  Item.findByIdAndRemove(postId, function (err, result){
    console.log(result);
    res.redirect(301, "posts");
  });
});

//EDIT
router.get('/:id/edit', function (req,res){
  var postId = req.params.id;
  Post.findById(itemId, function (err, result){
    res.render('posts/edit', {post:result});
    console.log(result);
  });
});
//UPDATE
router.post('/:id/update', function (req, res) {
  var postId = req.params.id;
  var postToUpdate = req.body.post;
  console.log("Edit Atrticle", postToUpdate);
  Item.update({_id: postId}, {
    title: postToUpdate.title,
    body: postToUpdate.body,
    categories: postToUpdate.categories},
    {multi: false}, function (err, result) {
      console.log(result);
      res.redirect(301, "posts");
  });
});

module.exports = router;
