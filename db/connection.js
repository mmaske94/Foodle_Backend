const mongoose = require('mongoose')

const mongoURI = (process.env.MONGODB_URI ||'mongodb://localhost:27017/foodle')

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
 
})
.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`ERROR, see details, ${err}`))