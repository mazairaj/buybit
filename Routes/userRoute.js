var express = require('express');
var router = express.Router();
// Encrypting password
var bcrypt = require('bcryptjs');
var passport = require('passport');

var User = require('./Models/models').User;

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user)
  });

// POST registration page
var validateReq = function(userData) {
return (userData.password === userData.passwordRepeat);
};

router.post('/signup', function(req, res) {
    // this is for checking if each field is blank, but I think this should be done in the front end to make user experiment faster and cleaner
    // var fields = ['firstName', 'lastName', 'email', 'password', 'passwordRepeat']
    // for (var i = 0; i < fields.length; i++) {
    //   var field = fields[i];
    //   if (! req.body[field]) {
    //     res.status(400).render('signup', {
    //       error: field + ' is required.'
    //     });
    //     return;
    //   }
    // }
    User.findOne({_id: req.body.userID}, function(err, user) {
            if (err) {
                return {err, user}
            }
            if (user) {
                return "User already exist"
            } else {
                // validation step
                if (!validateReq(req.body)) {
                    return done(err, null);
                }

                bcrypt.genSalt(10, function(err, salt) {
                    if (err) return next(err);
                    bcrypt.hash(req.body.password, salt, function(err, hash) {
                      if (err) return next(err);
                        var newPassword = hash; // Or however suits your setup

                        var newUser = new models.User({
                          firstName: req.body.firstName,
                          lastName: req.body.lastName,
                          email: req.body.email,
                          password: newPassword
                        });

                        newUser.save(function(err, user) {
                        if (err) {
                          if (err.errmsg.indexOf('E11000') > -1) {
                            err = 'email is already taken: ' + req.body.email;
                          } else {
                            err = err.errmsg;
                          }
                          return done(err, null);
                        } 
                        console.log(user);
                        res.send(user)
                        return done(err, null);
                    });
                    });
                });
            }
    });
});

// TODO: return Current user
router.get('/getUser', function(req, res) {
    User.findOne({_id: req.body.userID}, function(err, user) {
            if (err) {
                return {err, user}
            }
            if (user) {
                return user
            } else {
              console.log("cannot find user");
              return null
            }
        });
});

// TODO: Edit an user
router.post('/editUser', function(req, res) {
    // req.body.id
    User.findOneAndUpdate({_id: req.body.id}, req.body.data, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
    });
});

module.exports = router;