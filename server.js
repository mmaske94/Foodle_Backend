const express = require('express')
const app = express()
const PORT = 4000
require('./db/connection')


app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.listen(PORT, (req,res) =>{
    console.log('app is listening')
})