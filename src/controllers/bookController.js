const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    let allBookList= await BookModel.find().select({bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBookList})
}

const bookByYear= async function (req, res) {
    let year = req.body.year
    let allBookByYear= await BookModel.find({year:{$eq:year}})
    res.send({msg: allBookByYear})
}

const getINRBook= async function (req, res) { 
    let allBook= await BookModel.find({"prices.indianPrice":{$in:["100INR","200INR","500INR"]}})        
    res.send({msg: allBook})
}

const randomBook= async function (req, res) { 
    let allRandomBook= await BookModel.find({$or:[{stockAvailable : true}, {totalPages:{$gt:500}}]})     
    res.send({msg: allRandomBook})
}

const particularBook= async function (req, res) { 
    //let data = req.body
    let allParticularBook= await BookModel.find(req.body)
    res.send({msg: allParticularBook})
}


module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.bookByYear= bookByYear
module.exports.getINRBook= getINRBook
module.exports.randomBook = randomBook
module.exports.particularBook = particularBook