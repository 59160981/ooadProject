const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String
  },
  password: {
     type: String
  },
  type: {
    type: String

  }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);