var express 	= require('express'),
	server 		  = express(),
	ejs 		    = require('ejs'),
	bodyParser 	= require('body-parser'),
  expressLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  url = 'mongodb://localhost:27017/project2';
  session = require('express-session'),
  methodOverride = require('method-override'),
  morgan = require('morgan'),
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
//ROUTES
var userController = require('./controllers/users.js');
var postController = require('./controllers/posts.js');
server.use('/users', userController);
server.use('/posts', postController);
server.get('/', function (req, res){
  res.render('welcome')
})

//CATCHALL ROUTES

/*server.use(function (req,res) {
  res.send("Welcome to the 404")
});*/

mongoose.connect(url);
var db = mongoose.connection;

db.on('open', function (){
  console.log('Database ready for action');
  server.listen(3075, function (){
  console.log("READY");
  });
});
