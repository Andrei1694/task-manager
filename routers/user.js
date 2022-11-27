const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const { register, logoutAll, logout, login, myProfile, updateMyProfile, deleteUser } = require('../controllers/userController')
const router = new express.Router()

router.post('/users', register)

router.post('/users/login', login)

router.post('/users/logout', auth, logout)

router.post('/users/logoutAll', auth, logoutAll)

router.get('/users/me', auth, myProfile)

router.patch('/users/me', auth, updateMyProfile)

router.delete('/users/me', auth, deleteUser)

module.exports = router