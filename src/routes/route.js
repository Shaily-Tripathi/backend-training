const express = require('express');
const abc = require('../introduction/intro')
const call = require('../logger/logger.js')
const call1 = require('../util/helper.js')
const call2 = require('../validator/formatter.js')
const underScore_ = require('underscore')
const lodash_ = require('lodash')
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
    let array1 = ['January','Februrary','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let result1 = lodash_.chunk(array1,4)
    console.log("Chunk Example",result1)
    let array2 = [1,3,5,7,9,11,13,15,17,19]
    let result2 = lodash_.tail(array2)
    console.log("Tail Example",result2)
    let arr1 = [33,2,46,7]
    let arr2 = [5,4,33,2]
    let arr3 = [5,56,22]
    let arr4 = [46,47]
    let arr5 = [33,7,64,345]
    let result3 = lodash_.union(arr1,arr2,arr3,arr4,arr5)
    console.log("Union Example",result3)
    let arr6 = [['Name','Ritu'],['Location','Gurgaon'],['Pincode',22445]]
    let result4 = lodash_.fromPairs(arr6)
    console.log("FromPairsgi Example",result4)


});



router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason