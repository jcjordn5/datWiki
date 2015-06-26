var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var bodyParser 	= require('body-parser');
var Item = require('../models/users.js');
var methodOverride = require('method-override');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride("_method"));
//NEW
router.get('/new', function (req, res){
  res.render('users/new');
  });

//CREATE
router.post('/', function (req, res){
var newuser = new User(req.body.user);
newItem.save(function (err, user){
  if (err){
    console.log(err);
  }
  else {
  console.log(user);
  res.redirect(301, "/");
  }
  });
  });
//LOGIN
router.get('/login', function(req,res){
  res.render('users/login');
});

router.post('/login', function (req,res){
  var loginAtt = req.body.user;

  User.findOne({name: loginAtt.name}, function (err, user){
    if(user && user.password === loginAtt.password){

      req.session.currentUser = user.username;
      console.log(req.session.currentUser);
      res.rediect(301, '../posts/index');
    }
    else
    res.rediect(301, '/users/login');
  })
})

module.exports = router;
