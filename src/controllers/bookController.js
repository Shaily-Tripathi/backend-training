const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    let checkId = await authorModel.findById(authorId)
    
    if(!authorId)
    {
        return res.send({status: false,msg: "Author ID must be present"})
    }
    if(!publisherId)
    {
        return res.send({status: false,msg: "Publisher ID must be present"})
    }
    // else if(authorId!==checkId)
    // {
    //     return res.send({status: false,msg: "Author ID is not valid"})
    // }

    // else if(authorId==checkId)
    //  { 
    //     return res.send({status: true,msg: "Author ID is a valid ID"})

    //  }
    //  else
    //  {
    //     return res.send({status: false,msg: "Author ID is not a valid ID"})
    //  }
    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
    // let checkId = await authorModel.findById(authorId)
    // res.send({checkId})

}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getAllBooks = async function (req, res) {
    let specificBook = await bookModel.find().populate('author','publisher')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getAllBooks = getAllBooks
