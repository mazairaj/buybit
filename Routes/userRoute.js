var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('./Models/models').User;

router.post('/login', function(req, res, next) {
  /* look at the 2nd parameter to the below call */
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { 
        console.log("no user")
        return null
    }
    
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      res.send(user)
      return null;
    });
  })(req, res, next);
});

// POST registration page
var validateReq = function(userData) {
    return (userData.password === userData.passwordRepeat);
};

router.post('/signup', function(req, res) {
    User.findOne({'email': req.body.email}, function(err, user) {        
        if(err != null) {
            res.status(err.code >= 100 && err.code < 600 ? err.code : 500).send(user)
            return err;
        }

        if (user) {
            res.json({success: false});
            return "User already exist"
        } else {
            // validation step
            console.log(validateReq(req.body))
            if (!validateReq(req.body)) {
                return (err, null);
            }
            // create the user
            var newUser = new User();
            // set the user's local credentials
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.email = req.body.email;
            newUser.password = newUser.generateHash(req.body.password);

            newUser.save(function(err, user) {
                if (err) 
                    return (err, null);

                console.log(user);
                res.send(user)
                return (err, null);
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