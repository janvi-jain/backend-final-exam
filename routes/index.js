const express = require('express')
const routes = express.Router();

const facultyRoutes = require('./faculty/facultyRoutes')
const attendanceRoutes = require('./Attendance/AttendanceRoutes')

routes.use('/faculty',facultyRoutes)
routes.use('/attendance',attendanceRoutes)



module.exports = routes;
