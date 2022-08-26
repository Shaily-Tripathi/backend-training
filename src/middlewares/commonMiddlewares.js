const headerCheck = function(req, res, next){
    let valHeader = req.headers["isfreeappuser"]
    if(!valHeader)
    {
        return res.send({msg:" The request is missing a mandatory header"})
    }
    else
    {
       if(valHeader=='true'){
        req.body.isFreeAppUser = true
       }
       else if(valHeader ==='false'){
        req.body.isFreeAppUser = false
       }
       next()
    }
   
}

module.exports.headerCheck= headerCheck
