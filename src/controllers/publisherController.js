const PublisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreate = await PublisherModel.create(publisher)
    res.send({data: authorCreated})
}