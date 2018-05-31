var express = require('express');
var router = express.Router();

var Item = require('./Models/models').Item;
var User = require('./Models/models').User;
//store lookup
router.get('/storeLookUp', function(req,res){
    //time filter later
    // var today = moment().startOf('day')
    // var tomorrow = moment(today).add(1, 'days')

    Item.find().limit(20).exec(function(err, items){
        if(err) {return err}

        res.send(items);
        return items;
    });
});

//purchased item lookup
router.post('/myPurchasedItem', function(req,res){
    Item.find({'_id' : {'$in': req.body.myPurchasedItem}}, function(err, items){
        if(err) {return err}
        res.send(items)
        return items
    });
});

//Item I am selling lookup
router.post('/myStoreLookUp', function(req,res){
    Item.find({"itemCreator": req.body.userId}, function(err, items){
        if(err) {return err}

        res.send(items);
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
    newItem.itemQuantity = itemObject.itemQuantity ? itemObject.itemQuantity : 1
    // newItem.Review = itemObject.itemReview ? itemObject.itemReview : 0

    //Save New Item into DB
    newItem.save(function(err, item) {
        if (err){
        	console.log(err);
            res.status(400).send(err)
        	return err;
        }

        //Save id of item into user db
        User.findById(itemObject.itemCreator, function(err, user){
        	user.mySellingItem = [...[item._id.toString()], ...user.mySellingItem]
        	user.save(function(err, user) {
        		if (err){
                    res.status(400).send(err)
        			return err
        		}
        		// console.log("user's mySellingItem is updated!");
        	})
        });

        // console.log("Uploaded to Database");
        res.send(item);
        return null;
    });
});

router.put('/updateItem', function(req, res){

    Item.findOneAndUpdate({_id: req.body.itemId}, req.body.data, function(err, item){
        if (err){
        	return res.send(500, { error: err });
        } 
        return res.status(200).send(item);
    });
});

router.post('/deleteItem', function(req, res){
    Item.findByIdAndRemove(req.body.itemId, function(err, item){
        if (err){
            return res.send(500, { error: err });
        }

        User.findById(item.itemCreator, function(err, user){
            if(err){
                return res.status(500).send(err);
            }
            user.mySellingItem = user.mySellingItem.filter(element => element._id != req.body.itemId)
            user.save(function(err, user){
                if(err){
                    return res.status(500).send(err);
                }
                return res.status(200).send(user);
            })
        });
    });
});

router.post('/checkOutCart', function(req, res){
    Item.update({'_id' : {'$in': req.body.itemIds}}, { "$set": {"isItemSold": true, "timeofSold": Date.now()}}, {multi:true})
        .exec(function(err, items){
            //update user wallet in the backend
            var newEthAmount = req.body.myethAmount - req.body.totalItemAmountinUSD * req.body.exchangeRate

            if(newEthAmount >= 0){
                    User.findByIdAndUpdate(req.body.userId, {'ethAmount': newEthAmount}, function(err, user){

                            user.myPurchaseItem = user.myPurchaseItem.concat(req.body.itemIds)

                            user.save(function(err){
                                if (err) {
                                res.status(500).send(err)
                                console.log('error has occur: ',  err)
                                }
                                res.status(200).send(user)
                            });
                    });
            } else{
                res.status(400).send("Not enough money.")
            }
        });
});


module.exports = router;