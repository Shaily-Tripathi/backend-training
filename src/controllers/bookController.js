const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const getBookList= async function (req, res) {
    let authorID = await AuthorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    let allBookList= await BookModel.find(authorID)
    res.send({msg:allBookList})
}

//find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const findAuthor= async function (req, res) {
    let giveAuthor= await BookModel.findOneAndUpdate(
        { name: "Two States"} , 
        { $set: {price:100}},
        { new: true } 
     ).select({price:1,author_id:1,_id:0})
     let price = giveAuthor.price
     let authorId = giveAuthor.author_id
     let authorName =await AuthorModel.findOne({author_id:authorId}).select({author_name:1,_id:0})
     let author_name = authorName.author_name
     res.send( {price,author_name})
}

//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
//bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
//bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach)
// loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)


const bookInRange= async function (req, res) { 
    let allBooks= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
    let a_id = allBooks.map(x=>x.author_id)
    let findBook = await AuthorModel.find({author_id: a_id}).select({author_name: 1, _id: 0})
    res.send(findBook)
//     let allBooks= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id:0})
//     let arr = []
//     for(let i=0;i<allBooks.length;i++)
//     {
//     let allBookId = allBooks[i].author_id
//     let finalResult = await AuthorModel.find({author_id : allBookId }).select({author_name:1,_id:0});
//     arr.push(finalResult)
//     }  
// res.send( { msg:arr})   
}
module.exports.createBook= createBook
module.exports.getBookList= getBookList
module.exports.findAuthor= findAuthor
module.exports.bookInRange= bookInRange
