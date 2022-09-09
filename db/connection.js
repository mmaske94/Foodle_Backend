// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/foodle', {
//     useNewUrlParser: true
// })

// const database = mongoose.connection

// database.on('connected', ()=>{
//     console.log(`Connected to Mongo at ${database.host}:${database.port}`)
// })

const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/foodle'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`ERROR, see details, ${err}`))