const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['женска', 'машка', 'унисекс'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);