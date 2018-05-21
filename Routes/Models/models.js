var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// constants
var enu = {
  values: ['Service' ,'New','New(Other)', 'Used','For Parts or Not Working'],
  message: 'Status is required'
}


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
  ethWallet: { type: String},
  ethAmount: {type: Number}
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
    enum : enu,
    trim: true,
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

// updating the time sold
itemSchema.pre('save', function preSave(next){
  var item = this;
  this.timeofSold = Date.now();
  next()
});

var User = mongoose.model("User", userSchema);
var Item = mongoose.model("Item", itemSchema);

module.exports = {
  User: User,
  Item: Item
};