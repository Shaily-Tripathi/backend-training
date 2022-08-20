const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher 
// from the request body. In this api, you have to write a logic that validates the following :
// a) The authorId is present in the request body. If absent send an error message that this detail is required
// b) If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error 
// message that the author is not present.
// c) The publisherId is present in the request body. If absent send an error message that this detail is required
// d) If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error
// message that the publisher is not present.

const createBook= async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher
    let checkIdOfAuthor = await authorModel.findById(authorId)
    let checkIdOfPublisher = await publisherModel.findById(publisherId)
    if(!authorId)
    {
        return res.send({status: false,msg: "Author ID must be present"})
    }
    if(!publisherId)
    {
        return res.send({status: false,msg: "Publisher ID must be present"})
    }
    if(!checkIdOfAuthor)
    {
           
        return res.send({status: false, msg: "Author ID is not valid"})
    }
    if(!checkIdOfPublisher)
    {
           
        return res.send({status: false, msg: "Publisher ID is not valid"})
    }
    
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})

}

// 4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well 
// the publisher details (you have to populate for this)

const getAllBooks = async function (req, res) {
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})
}

// 5. Create at least 4 publishers (Penguin, Bloomsbury, Saraswati House, HarperCollins). 
// Create at least 6 authors with ratings 2, 3, 3.5, 4, 4.5 and 5. Create around 10 books with these publishers and authors.
// Create a new PUT api /books and perform the following two operations


//5.a) Add a new boolean attribute in the book schema called isHardCover with a default false value. 
// For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const updateBooks= async function (req, res) {
    let findPublisher = await publisherModel.find({name: {$in: ["Penguin", "Harper Collins"]}})
    let publisherID = findPublisher.map(x=>x._id)
    let updateSchema= await bookModel.updateMany(
        { publisher: publisherID},
        {$set: {isHardCover:true}},
        {new: true} 
     )
     res.send({data: updateSchema})
    }

    
// 5.b) For the books written by authors having a rating greater than 3.5, update the books price by 10 
// (For eg if old price for such a book is 50, new will be 60) 

const findBooks= async function (req, res) {
    let findAuthors = await authorModel.find({rating: { $gt: 3.5}})
    let authorsID = findAuthors.map(x=>x._id)
     let updateBookPrice = await bookModel.updateMany(
          { author: authorsID},
          {$inc: {price: 10}},
          { new: true}
     )
     res.send({data: updateBookPrice})
    }

module.exports.createBook= createBook
module.exports.getAllBooks = getAllBooks
module.exports.updateBooks = updateBooks
module.exports.findBooks = findBooks
