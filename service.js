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
const compression = require('compression');

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
const User = require('./Routes/Models').User;
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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