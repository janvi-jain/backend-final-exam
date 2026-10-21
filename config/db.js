const mongoose = require('mongoose')

const backend = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("database connected")
    } catch (error) {
        console.log("database not connected")
    }
}

module.exports = backend