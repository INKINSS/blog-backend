const  mongoose = require('mongoose');

const connection = async() => {
    try {
        const connectDB = await mongoose.connect('mongodb://localhost:27017')
        if(connectDB) {
            console.log('DB connected')
        }
    } catch (error) {
        console.log('DB connection failed' + error)
    }
}
module.exports = connection