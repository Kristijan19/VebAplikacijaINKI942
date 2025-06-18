const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// GET сите производи
router.get('/', getAllProducts);

// GET по ID
router.get('/:id', getProductById);

// POST нов производ
router.post('/', createProduct);

// PUT ажурирај производ
router.put('/:id', updateProduct);

// DELETE производ
router.delete('/:id', deleteProduct);

module.exports = router;
