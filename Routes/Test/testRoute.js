var express = require('express');
var router = express.Router();

var User = require('../Models/models').User;
var Item = require('../Models/models').Item;

//Testing route
// router.post('/buyItemTest', function(req, res) {
//     // req.body.id
//     Item.findById(req.body.itemId, function(err, item){ 
//     	if (err) return res.send(500, { error: err });

//     	if (!item) { 
// 	        console.log("no item")
// 	        return null
//     	}

//     	newEthAmount = (req.body.ethAmount - item) * 0.99

//     	User.findByIdAndUpdate(req.body.userId, {'ethAmount': newEthAmount}, function(err, user){

//     		item.isItemSold = true;
//     		// item.save(function(err, item) {
//       //           if (err) 
//       //               return (err, null);
//       //           console.log(item);
//       //           res.send(item)
//       //           return (err, null);
//       //       });

//     		if (err){
//                 res.status(500).send(err)
//             }

//     		user.myPurchaseItem = [...[item._id.toString()], ...user.myPurchaseItem]

//             console.log(user)
//             console.log(item)

//    //  		user.save(function(err){
// 			// 	if (err) {
// 			// 	console.log('error has occur: ',  err)
// 			// 	}
// 			// 	console.log('Nice, item added in the user model')
// 			// });

//     		console.log("You purchase the item!")
//     	});
//     });
// });

module.exports = router;