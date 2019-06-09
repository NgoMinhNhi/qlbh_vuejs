const router = require("express").Router();
const productController = require('./product.controller')
router.get('/', productController.getListProducts);