var express 	= require('express'),
	server 		  = express(),
	ejs 		    = require('ejs'),
	bodyParser 	= require('body-parser'),
  expressLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  methodOverride = require('method-override'),
  morgan = require('morgan');
	
  server.set('views', './views');
	server.set('view engine', 'ejs');
	server.use(express.static("./public"));
	server.use(bodyParser.urlencoded({
	  extended: true
	}));
  server.use(session({
    secret:"wdi",
    resave: true,
    saveUninitialized: false
  }));
server.use(methodOverride("_method"));
server.use(morgan('short'));
server.use(expressLayouts);
//sets to process PORT or 3075 it that is not defined
var PORT = process.env.PORT || 3075;
var MONGOURI = process.env.MONGOLAB_URI ||
'mongodb://localhost:27017/project2';
//ROUTES
var userController = require('./controllers/users.js');
var postController = require('./controllers/posts.js');
server.use('/users', userController);
server.use('/posts', postController);
server.get('/', function (req, res){
  res.render('welcome')
})

//CATCHALL ROUTES

server.use(function (req,res) {
  res.send("Welcome to the 404");
});

mongoose.connect(MONGOURI);
var db = mongoose.connection;

db.on('open', function (){
  console.log('Database ready for action');
  server.listen(PORT, function (){
  console.log("READY");
  });
});
