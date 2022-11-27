const express = require('express')
const auth = require('../middleware/auth')
const { register, logoutAll, logout, login, myProfile, updateMyProfile, deleteUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.post('/users', register)

userRouter.post('/users/login', login)

userRouter.post('/users/logout', auth, logout)

userRouter.post('/users/logoutAll', auth, logoutAll)

userRouter.get('/users/me', auth, myProfile)

userRouter.patch('/users/me', auth, updateMyProfile)

userRouter.delete('/users/me', auth, deleteUser)

module.exports = userRouter