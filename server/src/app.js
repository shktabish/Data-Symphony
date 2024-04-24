const express = require('express')
const cors = require("cors")
const cookieParser = require("cookie-parser")

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
const userRoute = require("./routes/user.routes")
const teacherRoute = require("./routes/teacher.route")

//routes declaration
app.use("/api/v1/user", userRoute)
app.use("/api/v1/teacher", teacherRoute)

module.exports = app