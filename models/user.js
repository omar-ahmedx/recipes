const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSChema = new Schema({
  username: { type: String, required: true },
  password: { type: String, contentType: String, required: true },
});

module.exports = mongoose.model("User", UserSChema);
