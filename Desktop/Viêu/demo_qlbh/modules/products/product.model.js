const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: String,
  description: String,
  release_year: Number,
  price: Number,
  condition: String,
  imgSrc: String,
});
const Product = mongoose.model('Movie', ProductSchema);
module.exports = Product;
