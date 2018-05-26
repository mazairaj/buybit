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
    Item.find({'_id' : {'$in': req.body.myPurchasedItem}}, function(err, items){
        if(err) {return err}
        res.send(items)
        return items
    });
});

//Item I am selling lookup
router.get('/myStoreLookUp', function(req,res){
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
    newItem.itemPriceUSD = itemObject.itemPriceUSD;
    newItem.itemPriceETH = itemObject.itemPriceETH;
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
        	user.mySellingItem = [...[item._id.toString()], ...user.mySellingItem]
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
    // Update
    Item.findOneAndUpdate({_id: req.body.itemID}, req.body.data, function(err, doc){
        if (err){
        	return res.send(500, { error: err });
        } 
        return res.send("succesfully saved");
    });
});

router.post('/deleteItem', function(req, res){
    // Not completed
    Item.findByIdAndRemove({_id: req.body.itemID}, function(err, doc){
        if (err){
            return res.send(500, { error: err });
        }
        return res.send("Item Deleted");
    });
});

router.post('/checkOutCart', function(req, res) {
    
    Item.update({'_id' : {'$in': req.body.itemIds}}, { "$set": {"isItemSold": true, "timeofSold": Date.now()}}, {multi:true}).exec()

    //update user wallet in the backend
    var newEthAmount = req.body.ethAmount - req.body.totalUSDPrice * exchangeRate

    User.findByIdAndUpdate(req.body.userId, {'ethAmount': newEthAmount}, function(err, user){

            user.myPurchasedItem = [...req.body.itemIds, ...user.myPurchasedItem]

            user.save(function(err){
                if (err) {
                console.log('error has occur: ',  err)
                }
                res.send(user)
                console.log('Nice, item added in the user model')
            });

            console.log("You purchase the items!")
    });
});


module.exports = router;