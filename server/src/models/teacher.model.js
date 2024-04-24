const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tachersSchema = new Schema(
    {
        //basic details
        name: {
            type: String,
            required: true,
            tolowercase: true
        },
        email: {
            type: String,
            required: true,
            tolowercase: true,
            unique: true
        },
        dateOfJoin: {
            type: Date,
            required: true,
        },
        designation: {
            type: String,
            required: true,
            tolowercase: true
        },
        department: {
            type: String,
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
        yearOfAppointment: {
            type: Number,
            required: true
        },
        //permanent or temp
        natureOfAppointment: {
            type: String,
            required: true,
            tolowercase: true
        },
        highestQualification: {
            type: String,
            required: true,
            tolowercase: true
        },
        subjects: {
            type: [String],
            required: true,
            tolowercase: true
        },
        totalYearsOfExp: {
            type: String,
            required: true
        },
        currentYearOfExp: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)
const Teacher = mongoose.model('teacher',tachersSchema)
module.exports=Teacher