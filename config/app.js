var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var index = require('../app/routes/index.server.routes');
var users = require('../app/routes/users.server.routes');
var tasks = require('../app/routes/tasks.server.routes');
var projects = require('../app/routes/projects.server.routes');
var issues = require('../app/routes/issues.server.routes');

var app = express();

// view engine setup
app.set('views', './app/views');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));
app.use('/css/inspinia', express.static('./node_modules/inspinia/dist'));
app.use(flash());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'OurSuperSecretCookieSecret'
}));

// set passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/', users);
app.use('/', tasks);
app.use('/', projects);
app.use('/', issues);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
