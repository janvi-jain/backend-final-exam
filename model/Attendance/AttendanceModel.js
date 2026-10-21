const mongoose = require('mongoose');
const faculty = require('../faculty/facultyModel');

const attendanceSchema = new mongoose.Schema({
    facultyId :{
        type:mongoose.Schema.Types.ObjectId,
        ref : faculty,
        required:true
    },
    date :{
        type:Date,
        required:true 
    },
    status :{
        type:String,
        enum:['present','absent'],
        required:true 
    }
},{timestamp : true});

const attendanceModel = mongoose.model('attendance',attendanceSchema)

module.exports = attendanceModel;
