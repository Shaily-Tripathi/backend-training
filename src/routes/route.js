const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthorBook", authorController.createAuthor  )

router.post("/createLibraryBook", bookController.createBook  )

router.post("/createPublisher", publisherController.createPublisher)

router.get("/getAllBooks", bookController.getAllBooks)

router.put("/updateBooks", bookController.updateBooks)

router.put("/findBooks", bookController.findBooks)

module.exports = router;