var express = require('express');
var router = express.Router();

var User = require('./Models/models').User;
var Item = require('./Models/models').Item;

//Testing route
router.post('/buyItemTest', function(req, res) {
    // req.body.id
    Item.findById(req.body.itemId, function(err, item){ 
    	if (err) return res.send(500, { error: err });

    	if (!item) { 
	        console.log("no item")
	        return null
    	}

    	newEthAmount = (req.body.ethAmount - item) * 0.99

    	User.findByIdAndUpdate(req.body.userId, {'ethAmount': itemPrice}, function(err, user){

    		item.isItemSold = true;
    		item.save(function(err, item) {
                if (err) 
                    return (err, null);
                console.log(item);
                res.send(item)
                return (err, null);
            });

    		if (err) return res.send(500, { error: err });

    		user.myItems = [...[item._id.toString()], ...user.myItems]

    		user.save(function(err){
				if (err) {
				console.log('error has occur: ',  err)
				}
				console.log('Nice, item added in the user model')
			});

    		console.log("You purchase the item!")
    	});
    });
});

module.exports = router;