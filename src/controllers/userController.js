const UserModel= require("../models/userModel")

const basicCode= async function(req, res) {
    res.send({ msg: "My Data is fetched"})
    }

const basicCode2= async function(req, res) {
    res.send({ msg: "Global Middleware is introduced"})
    }

const basicRoute= async function(req, res) {
    res.send({ msg: "Route based Middleware is introduced"})
    }    

    module.exports.basicCode = basicCode
    module.exports.basicCode2 = basicCode2
    module.exports.basicRoute = basicRoute