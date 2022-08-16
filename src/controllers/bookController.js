const BookModel= require("../models/bookModel")

const createBookEntry= async function (req, res) {
    let bookData= req.body
    let savedBookData= await BookModel.create(bookData)
    res.send({msg: savedBookData})
}

const getBooksList= async function (req, res) {
    let allBooksList= await BookModel.find()
    res.send({msg: allBooksList})
}

module.exports.createBookEntry= createBookEntry
module.exports.getBooksList= getBooksList