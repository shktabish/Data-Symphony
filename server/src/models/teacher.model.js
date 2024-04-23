const mongoose = require('mongoose')

const Schema = mongoose.Schema

const treacherSchema = new Schema(
    {
    //basic details
    name: {
        type:String,
        required: true,
        tolowercase: true
    },
    email: {
        type:String,
        required: true,
        tolowercase: true,
        unique: true
    },
    dateOfJoin: {
        type: Date,
        required: true,
    },
    designation: {
        type:String,
        required: true,
        tolowercase: true
    },
    department: {
        type:String,
        required: true,
        tolowercase: true
    },
    gender: {
        type:String,
        required: true,
        tolowercase: true
    },
    uid:{
        type:String,
        required : true
    },
    // HOD dean vo sab
    designation: {
        type:String,
        required: true,
        tolowercase: true
    },
    yearOfAppointment: {
        type: Date,
        required: true
    },
    //permanent or temp
    natureOfAppointment: {
        type:String,
        required: true,
        tolowercase: true
    },
    highestQualification: {
        type:String,
        required: true,
        tolowercase: true
    },
    subject: {
        type:String,
        required: true,
        tolowercase: true
    },
    totalYearsOfExp: {
        type:String,
        required: true
    },
    currentYearOfExp: {
        type:String,
        required: true
    },


})
const Teacher = mongoose.model('teacher',treacherSchema)
module.exports=Teacher