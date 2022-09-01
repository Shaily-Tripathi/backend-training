/*2.  GOTO  http://api.openweathermap.org => “subscribe” current weather data ==> get api key for
 Free version ==> create new account and Verify your emailId( Must verify to avoid issues) => go to 
 My APi keys under your account name(top right corner) or https://home.openweathermap.org/api_keys => save the key/appid somewhere. 
 Now proceed further.
Create API's to do the following:
•	Get weather of London from  http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  
(NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)
•	then change the above to get the temperature only( of London)
•	Sort the cities     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]   
in order of their increasing temperature
Result should look something like this
 
                   [
                   {city:"London", temp: 280},
                   {city:"Moscow", temp: 290},
                   {city:"Bangalore", temp: 301.2},
                   .......
                   ]
*/

const axios = require('axios')

let getWeather = async function (req, res) {

    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`Value and AppId is ${q} ${appid}`)
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
       res.status(200).send({ msg: data, status: true })
       //res.status(200).send(JSON.stringify(result))
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getTemp = async function (req, res) {

    try {
        let q = req.query.q
        let appid = req.query.appid
        console.log(`Value and AppId is ${q} ${appid}`)
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let sortCitiesTemp = async function (req, res) {

    try {
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        let cityArray = []
        for(let i = 0 ; i< cities.length ; i++)
        {
            let objCity = {city: cities[i]}
            let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=17ab40ba186e4d77b6b897409ecceaa8`)
            console.log(response.data.main.temp)
            objCity.temp = response.data.main.temp
            cityArray.push(objCity)
        }
        let sortedArray = cityArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sortedArray)
        res.status(200).send({ msg: sortedArray, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.getWeather = getWeather
module.exports.getTemp = getTemp
module.exports.sortCitiesTemp = sortCitiesTemp