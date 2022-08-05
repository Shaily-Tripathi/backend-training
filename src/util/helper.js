const printDate=function()
{
    	
const today = new Date();
const todayDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
return console.log(todayDate)

}
// const giveDate = printDate()

const printMonth=function()
{
    	
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const d = new Date();
    let name = month[d.getMonth()];
return console.log(name)
}
//const giveMonth = printMonth()

let getBatchInfo= function()
{
    console.log("Plutonium, W3D5, the topic for today is Nodejs module system’.")
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo