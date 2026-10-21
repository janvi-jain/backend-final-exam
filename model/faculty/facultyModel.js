const mongoose = require('mongoose')

const facultySchema = new mongoose.Schema({
    name :{
        type:String,
        required:true 
    },
    email :{
        type:String,
        required:true 
    },
    password :{
        type:String,
        required:true 
    }
},{timestamp : true});

const facultyModel = mongoose.model('faculty',facultySchema)

module.exports = facultyModel;
