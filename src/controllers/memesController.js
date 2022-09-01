/* 3. Axios POST request assignment Statement:
•	Step1: Get all the memes at Postman (https://api.imgflip.com/get_memes)
•	Step 2 : Pick a memeId you want (Eg 129242436) for the POST request (from the result from  above )
•	Assignment: Create a Post request API (https://api.imgflip.com/caption_image) with only query params. 
    Following are the params (copy username and password exactly as given below OR incase you find error in using this 
    username password due to too many people trying to access it, then create your own account and plz do share username password 
    on your group so that others can use it too- be kind and helpful):
    
           template_id <meme_id>
           text0 <text you want as a caption>
           text1 <optional>
           username chewie12345
           password meme@123

Return a response with a body like this
            
           "data": {
                   "url": "https://i.imgflip.com/5mvxax.jpg",
                   "page_url": "https://imgflip.com/i/5mvxax"
               }
*/
const axios = require('axios')

let getMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.imgflip.com/get_memes'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getParticularMemes = async function (req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        console.log(`Query Params are ${template_id} ${text0} ${text1} ${username} `)
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getMemes = getMemes
module.exports.getParticularMemes = getParticularMemes