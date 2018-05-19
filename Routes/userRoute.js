var express = require('express');
var router = express.Router();

const User= require('../models/models').User;

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