var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

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
  password: { type: String },
  location: { type: String, default: "Eastern"},
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
    enum : ['NEW','New(Other)', 'Used', 'For Parts or Not Working'],
    required: true
  },
  itemImage: String,
  itemReview: Number,
  isItemSold: {
    type: Boolean,
    default: false
  },
  timeofSold: {
    type: Date,
    default: Date.now
  }
},
{ timestamps: true }
);

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};


var User = mongoose.model("User", userSchema);
var Item = mongoose.model("Item", itemSchema);

module.exports = {
  User: User,
  Item: Item
};