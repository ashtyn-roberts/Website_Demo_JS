console.log("I saved the file")
const express = require('express')
const app = express()

const userRouter = require('./routes/users.js')
app.use('/allmyusers/', userRouter)
app.set('view engine', 'ejs')
app.use(logger)
app.use(express.static("public"))

app.listen(7321)

function logger(req, res, next){
    console.log(`I am middleware, the url is ${req.originalURL}`);
    next();
}