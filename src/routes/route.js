const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)

router.post("/getBooksInYear", BookController.bookByYear)

router.get("/getXINRBooks", BookController.getINRBook)

router.get("/getRandomBooks", BookController.randomBook)

router.post("/getParticularBooks", BookController.particularBook)


module.exports = router;