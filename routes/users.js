const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>{
    res.send('User')
})

router.get('/new/:name/', (req, res) =>{
    console.log(req.params.name)
    res.send(`Creating a new user named ${req.params.name}`)
})

router.param("name",(req, res, next, name)=>{
    console.log(`creating a user named ${name}`);
    next();
});

module.exports = router 
