const express = require('express');
const abc = require('../introduction/intro')
const call = require('../logger/logger.js')
const call1 = require('../util/helper.js')
const call2 = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    call.welcome()
    call1.printDate()
    call1.printMonth()
    call1.getBatchInfo()
    call2.lettersFunc()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason