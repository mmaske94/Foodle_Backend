require('dotenv').config();
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 4000
const userRoutes = require('./routes/userRoutes')
require('./db/connection')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/auth', userRoutes)





app.listen(PORT, () =>{
    console.log('app is listening')
})