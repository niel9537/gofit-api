const express = require('express')
const Route = express.Router()
const authController = require('../controller/auth')

Route
    .get('/', (req, res) => { res.json({ message: 'Welcome to our Library!'}) })
    .post('/register', authController.userRegister)
    .post('/login', authController.userLogin)

    
module.exports = Route