const axios = require('axios')

/* 1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and 
for any given date. This is a very basic assignment and totally along the lines of what we covered in the session*/

let getByDistrict = async function (req, res) {
    try {
        let districtId = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${districtId} ${date}`)
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
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

module.exports.getByDistrict = getByDistrict