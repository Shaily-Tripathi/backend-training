const express = require('express');
const router = express.Router();


router.get("/sol1", function(req, res){
    let arr =[1,2,3,5,6,7]
    function missingNumber(arr) {
    let sum =0
    for(let i=0;i<arr.length;i++)
        {
            sum += arr[i]// sum = sum+arr[i]
        }
    let n = arr.length+1
    let sumc = Math.floor((n*(n+1))/2);
    return sumc-sum
    
}
console.log(missingNumber(arr))
    res.send('Dummy Response')
})


router.get("/sol2", function(req, res){
    let array =[33,34,35,37,38]
function missingNum(array) {
    let sum =0
    for(let i=0;i<array.length;i++)
        {
            sum += array[i] //sum=sum+array[i]
        }
    let n = array.length+1
    let firstNum = array[0]
    let lastNum = array.pop()
    let sumc = Math.floor((n*(firstNum+lastNum))/2);
    return sumc-sum
    
}
console.log(missingNum(array))
    res.send('Dummy Response')
})

module.exports = router;
