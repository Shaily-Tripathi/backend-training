
const mid= function ( req, res, next) {
    let a = false
    if(a==true)
    {  
    console.log("Hi I am a first middleware introduced in this application")
    next()
    }
    else
    {
        res.send({msg:"Something Went Wrong"})
    }
}


module.exports.mid= mid
