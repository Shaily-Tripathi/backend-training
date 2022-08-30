const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//Write a POST api /users to register a user from the user details in request body.

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (data && Object.keys(data).length > 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ status: true, msg: savedData })
    } else {
      res.status(400).send({ status: false, msg: 'Request must contain a body' })
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


/*Write a *POST api /login to login a user that takes user details - email and password from the request body. 
If the credentials don't match with any user's data return a suitable error. On successful login, generate a JWT token and 
return it in response body.*/

const loginUser = async function (req, res) {
  try {
    let email = req.body.emailId;
    let password = req.body.password;
    if (req.body && email && password) {
      let user = await userModel.findOne({ emailId: email, password: password });
      if (!user) {
        return res.status(401).send({ status: false, msg: "Invalid email or password", });
      }
      let token = jwt.sign(
        {
          userId: user._id.toString(),
          month: "August",
          website: "Fackebook",
        },
        "This is a secret information",
      );
      res.status(200).send({ status: true, token: token })
    } else {
      res.status(400).send({ status: false, msg: 'Request must contain Email and Password' })
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

/*Write a GET api /users/:userId to fetch user details. Pass the userId as path param in the url. 
Check that request must contain x-auth-token header. If absent, return a suitable error. 
If present, check that the token is valid.*/ 

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


/*Write a PUT api /users/:userId to update user details. Pass the userId as path param in the url and 
update the attributes received in the request body. Check that request must contain x-auth-token header. 
If absent, return a suitable error.*/

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let updateData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, updateData, { new: true });
    res.status(200).send({ status: "updatedUser", data: updatedUser });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

/*Write a DELETE api /users/:userId that takes the userId in the path params and marks the isDeleted attribute for a user as true. 
Check that request must contain x-auth-token header. If absent, return a suitable error.*/

const markUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(200).send({ status: "true", data: updatedUser });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.markUser = markUser;
