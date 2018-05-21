var express = require('express');
var router = express.Router();

var Item = require('./Models/models').Item;

router.post('/createItem', function(req, res){
    // render the /tests view
    var newItem = new Item();
    //Create New Item from Request
    newItem.itemCreator = req.body.userID;
    newItem.itemID = req.body.itemID;
    newItem.itemTitle = req.body.itemTitle;
    newItem.itemPrice = req.body.itemPrice;
    newItem.itemDescription = req.body.itemDescription;
    newItem.itemCondition = req.body.itemCondition;
    //Save New Item into DB
    newItem.save(function(err, item) {
        if (err)
            return (err, null);
        console.log(item);
        //Return item title
        res.send(item);
        return (err, null);
    });
});

router.put('/editedItem', function(){
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