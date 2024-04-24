const express = require("express")
const { postTeacherInfo, getCurrentTeacherInfo } = require("../controllers/teacher.contoller")
const verifyJWT = require("../middlewares/auth.middleware")

const router = express.Router()
router.use(verifyJWT)

router.route('/')
.post(postTeacherInfo)
.get(getCurrentTeacherInfo)

module.exports = router