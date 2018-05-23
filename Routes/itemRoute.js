var express = require('express');
var router = express.Router();

var Item = require('./Models/models').Item;

//store lookup
router.get('/storeLookUp', function(req,res){
    //time filter later
    // var today = moment().startOf('day')
    // var tomorrow = moment(today).add(1, 'days')

    Item.find({}, function(err, items){
        if(err) {return err}

        res.send(items);
        return items;
    });
});

//purchased item lookup
router.get('/myPurchasedItem', function(req,res){
    //time filter later
    // var today = moment().startOf('day')
    // var tomorrow = moment(today).add(1, 'days')

    Item.find({'_id' : {'$in': req.body.myPurchasedItem}}, function(err, items){
        if(err) {return err}
        res.send(items)
        return items
    }});
});

//Item I am selling lookup
router.get('/myStoreLookUp', function(req,res){
    //time filter later
    // var today = moment().startOf('day')
    // var tomorrow = moment(today).add(1, 'days')

    Item.find({"itemCreator": req.body.userId}, function(err, items){
        if(err) {return err}

        res.send(items)
        return items
    });
});

// create, update, delete items
router.post('/createItem', function(req, res){

	var itemObject = req.body.itemObject;

    var newItem = new Item();
    //Create New Item from Request
    newItem.itemCreator = itemObject.itemCreator;
    newItem.itemTitle = itemObject.itemTitle;
    newItem.itemPrice = itemObject.itemPrice;
    newItem.itemDescription = itemObject.itemDescription;
    newItem.itemCondition = itemObject.itemCondition;
    newItem.itemImage = itemObject.itemImage;
    // newItem.Review = itemObject.itemReview ? itemObject.itemReview : 0

    //Save New Item into DB
    newItem.save(function(err, item) {
        if (err){
        	console.log(err);
        	return err;
        }

        user.findById(itemObject.itemCreator, function(err, user){
        	// user.myItems = [...[item._id.toString()],..user.myItems]
        	user.myItems = [...[item._id.toString()].user.myItems]
        	user.save(function(err, user) {
        		if (err){
        			return err
        		}
        		console.log("user's myitem is updated!")
        	})
        });

        console.log("Uploaded to Database");
        res.send(item);
        return null;
    });
});

router.put('/editedItem', function(req, res){
    // render the /tesItem.updatets view
    Item.findOneAndUpdate({_id: req.body.itemID}, req.body.data, function(err, doc){
        if (err){
        	return res.send(500, { error: err });
        } 
        return res.send("succesfully saved");
    });
});

router.post('/deleteItem', function(req, res){
    // render the /tests view
    Item.findByIdAndRemove({_id: req.body.itemID}, function(err, doc){
        if (err){
            return res.send(500, { error: err });
        }
        return res.send("Item Deleted");
    });
});


router.post('/buyItem', function(req, res) {
    // req.body.id
    Item.findById(req.body.itemId, function(err, item){ 
    	if (err) return res.send(500, { error: err });

    	if (!item) { 
	        console.log("no item");
	        return null
    	}

    	newEthAmount = (req.body.ethAmount - item.itemPrice) * 0.99;
    	if(newEthAmount < 0){
    		console.log("can't purchase item, too expensive");
    		res.send(err);
    		return err
    	}

    	User.findByIdAndUpdate(req.body.userId, {'ethAmount': req.body.itemPrice}, function(err, user){

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