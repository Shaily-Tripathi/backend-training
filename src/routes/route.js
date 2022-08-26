const express = require('express');
const router = express.Router();

const productController= require("../controllers/productController")

const userController= require("../controllers/userController")

const orderController= require("../controllers/orderController")

const commonMW = require ("../middlewares/commonMiddlewares")

router.post("/createProduct", productController.createProduct)

router.post("/createUser", commonMW.headerCheck, userController.createUser)

router.post("/createOrder", commonMW.headerCheck, orderController.createOrder)


module.exports = router;