const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});


router.get('/movies', function (req, res){
    let movies = ['Encanto', 'Frozen', 'Moana','Tangled','Maleficent']
    res.send(movies)
})
router.get('/movies/:indexNumber', function(req, res){
    let requestParams = req.params
    let indexNumber = requestParams.indexNumber
    let movies = ['Encanto', 'Frozen', 'Moana','Tangled','Maleficent']
    
        if(indexNumber>=0 && indexNumber<movies.length)
        {
            res.send(movies[indexNumber])
           
        }
        else
        {
           res.send("Enter valid Value")  
        }
})

router.get('/films', function (req, res){
    let films = [ {
        id: 1,
        name: 'Encanto'
       }, {
        id: 2,
        name: 'Frozen'
       }, {
        id: 3,
        name: 'Moana'
       }, {
        id: 4,
        name: 'Tangled'
       }]
       
    res.send(films)
})

router.get('/films/:filmId', function (req, res){
    let films = [ {
        id: 1,
        name: 'Encanto'
       }, {
        id: 2,
        name: 'Frozen'
       }, {
        id: 3,
        name: 'Moana'
       }, {
        id: 4,
        name: 'Tangled'
       }]
       

    let requestParams = req.params
    let filmId = requestParams.filmId
    for(let i=0;i<films.length;i++)
    {
       let filmValue = films[i]
       if(filmValue.id==filmId)
       {
        return res.send(filmValue)
       }
    }
    res.send(" No movie exists with this id ")

        // if(filmId>=0 && filmId<films.length)
        // {
            
        //     res.send(films[filmId])
           
        // }
        // else
        // {
        //    res.send(" No movie exists with this id ")  
        // }
         
})

    
//     //res.send(studentDetails)
//     res.send('Dummy response')
// })

module.exports = router;