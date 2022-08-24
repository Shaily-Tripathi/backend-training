const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/basicCode", UserController.basicCode)
router.post("/basicCode2", UserController.basicCode2)
router.get("/basicRoute", commonMW.mid, UserController.basicRoute)


module.exports = router;