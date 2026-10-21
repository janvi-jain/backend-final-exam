const express = require('express')
const routes = express.Router();

const authMiddleware = require('../../middleware/authentication/authMiddleware') 

const{markAttendance,getTodayAttendance,getAttendanceByDate} = require('../../controllers/Attendance/AttendanceController')

routes.post('/mark',authMiddleware,markAttendance)
routes.get('/today',getTodayAttendance)
routes.get('/by-date',getAttendanceByDate)

module.exports = routes