const PublisherModel= require("../models/publisherModel")

// 2. Write a POST api that creates a publisher from the details in the request body
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreate = await PublisherModel.create(publisher)
    res.send({data: publisherCreate})
}
module.exports.createPublisher= createPublisher