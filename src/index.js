const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require('moment')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ShailyTripathi:ShailyCompass2125@shailytripathi.ifjbsp5.mongodb.net/ShailyT2125?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        let currentTimestamp = moment().format("YYYY-MM-DD h:mm:ss")
        let userIP = req.ip
        let routeRequest = req.path
        console.log (currentTimestamp+","+userIP+","+routeRequest);
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
