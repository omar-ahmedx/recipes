const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RecipeSchema = new Schema({
  recipe_name: { type: String, required: true },
  recipe_description: { type: String, required: true },
  imgs: [{ type: Buffer, contentType: String, required: true }],
  ingredients: [{ type: String, required: true }],
  method: [{ type: String, required: true }],
  user: { type: Boolean },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
