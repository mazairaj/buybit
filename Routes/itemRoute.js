var express = require('express');
var router = express.Router();

var Item = require('./Models/models').Item;

router.post('/createItem', function(req, res){
    // render the /tests view
    console.log(req.body)
    var newItem = new Item();
    //Create New Item from Request
    newItem.itemCreator = req.body.itemCreator;
    newItem.itemTitle = req.body.itemTitle;
    newItem.itemPrice = req.body.itemPrice;
    newItem.itemDescription = req.body.itemDescription;
    newItem.itemCondition = req.body.itemCondition;
    newItem.itemImage = req.body.itemImage;
    // newItem.Review = req.body.itemReview ? re.body.itemReview : 0

    //Save New Item into DB
    newItem.save(function(err, item) {
        if (err){
        	console.log(err)
        	return err;
        }
        console.log("Uploaded to Database");
        //Return item title
        res.send(item);
        return null;
    });
});

router.put('/editedItem', function(req, res){
    // render the /tesItem.updatets view
    Item.findOneAndUpdate({_id: req.body.itemID}, req.body.data, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });
});

router.post('/deleteItem', function(req, res){
    // render the /tests view
});

router.post('/buyItem', function(req, res){
    // render the /tests view
});

module.exports = router;