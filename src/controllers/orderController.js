const moment = require('moment');
const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body
    let userID = data.userId
    let productID = data.productId
    let checkIdOfUser = await userModel.findById(userID)
    let checkIdOfProduct = await productModel.findById(productID)
    
    if(!userID)
    {
        return res.send({status: false,msg: "User ID must be present"})
    }
    if(!productID)
    {
        return res.send({status: false,msg: "Product ID must be present"})
    }
    if(!checkIdOfUser)
    {
           
        return res.send({status: false, msg: "User ID is not valid"})
    }
    if(!checkIdOfProduct)
    {
           
        return res.send({status: false, msg: "Product ID is not valid"})
    }

    let valHeader = req.headers["isfreeappuser"]
    if(valHeader==="false"){
    //User Balance
    let userB = await userModel.findById(userID)
    let userBalance = userB["balance"]
    //Product Price
    let productP = await productModel.findById(productID)
    let productPrice = productP.price

    if(userBalance >= productPrice)
    {
            let usersNewBalance = userBalance - productPrice
            await userModel.findOneAndUpdate(
                {_id : userID},
                {$set : {balance : usersNewBalance}}
            );
            let todayDate = moment().format('YYYY-MM-DD')
            data['amount']=productPrice;
            data['date']=todayDate;
            let savedData=await orderModel.create(data);
            res.send({OrderPlaced : savedData});
    }
    else
    {
            return res.send({"msg":"Users balance is not enough, cannot make the order"})
    }
    } 
    else if(valHeader=="true")
    {
        let todayDate = moment().format('YYYY-MM-DD')
        data['amount']=0;
        data['date']=todayDate;
        let savedData=await orderModel.create(data);
        res.send({OrderPlaced : savedData});
    
    }
    
}

module.exports.createOrder= createOrder