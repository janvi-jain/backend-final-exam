const express = require('express')
const routes = express.Router();
const {registerFaculty,loginFaculty} = require('../../controllers/faculty/facultyController');


routes.get('/register',registerFaculty)
routes.get('/login',loginFaculty)

module.exports = routes