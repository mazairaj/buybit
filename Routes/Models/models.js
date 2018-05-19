var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  //How can we keep track of User Activity?
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: { type: String, required: true },
  location: { type: String, default: "Eastern"}
  myItem: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
},
{ timestamps: true }
);

var itemSchema = new mongoose.Schema({
  itemCreator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  itemTitle: String,
  itemPrice: { type: Number, required: true },
  itemDescription: String,
  itemCondition: {
    type: String,
    enum : ['NEW','New(Other)', 'Used', 'For parts or not working'],
    required: true
  }
  itemImage: String,
  itemReview: type: Number,
  isItemSold: {
    type: Boolean,
    default: false
  }
  timeofSold: {
    type: Date,
    default: Date.now
  }
},
{ timestamps: true }
);


var User = mongoose.model("User", userSchema);
var Item = mongoose.model("Item", itemSchema);

module.exports = {
  User: User,
  Item: Item,
  Usernotification: Usernotification,
  Report: Report
};