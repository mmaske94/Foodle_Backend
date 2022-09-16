const app = express()
const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 4000
const userRoutes = require('./routes/userRoutes')
require('dotenv').config();
require('./db/connection')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/auth', userRoutes)




app.listen(PORT, () =>{
    console.log('app is listening')
})