const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

const connect = process.env.MONGODB_URI;
mongoose.connect(connect);

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//linking the different routes
const userRoute = require('./Routes/userRoute');
const itemRoute = require('./Routes/itemRoute');

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(require('express-session')({
    secret: 'buybit123',
    resave: false,
    saveUninitialized: false
}));

/*  PASSPORT SETUP  */
app.use(passport.initialize());
app.use(passport.session());

// passport config
var User = require('./Routes/Models/models').User;
passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
  },
  function(req, email, password, done) {
      User.findOne({'email': req.body.email}, function(err, user) {
        console.log('In User Login')
        if (err) 
          return done(err);

        if (!user) {
          console.log("no user!!!")
          return done(null, false);
        }

        if(!user.validPassword(password)){
          console.log("wrong password")
          return done(null, false);
        }
        
        return done(null, user);
      });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  models.User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use('/', userRoute);
app.use('/', itemRoute);

var port = process.env.PORT || 8080;
http.listen(port, function() {
  console.log('Express started. Listening on %s', port);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;