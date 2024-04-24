const Teacher = require("../models/teacher.model")

const postTeacherInfo = async (req, res) => {
    try {
        const { name, email, dateOfJoin, designation, department, gender, uid, yearOfAppointment, natureOfAppointment, highestQualification, subjects, totalYearsOfExp, currentYearOfExp  } = req.body
    
        const teachersInfo = [name, email, dateOfJoin, designation, department, gender, uid, yearOfAppointment, natureOfAppointment, highestQualification, subjects, totalYearsOfExp, currentYearOfExp]
    
        if(teachersInfo.some((value) => value === "")) {
            return res.status(400).json({ error: "All fields are required" })
        }
    
        const teacher = await Teacher.create({
            name, email, dateOfJoin, designation, department, gender, uid, yearOfAppointment, natureOfAppointment, highestQualification, subjects, totalYearsOfExp, currentYearOfExp
        })
    
        if(!teacher) {
            res.status(500).json({ error: "Something went wrong while uploading the teachers information" })
        }
    
        res.status(200).json({ message: `Basic details of ${teacher.name} uploaded sucessfully` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}

const getCurrentTeacherInfo = async (req, res) => {
    
}

module.exports = {
    postTeacherInfo,
    getCurrentTeacherInfo
}