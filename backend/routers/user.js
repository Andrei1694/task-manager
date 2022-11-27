const express = require('express')
const auth = require('../middleware/auth')
const { register, logoutAll, logout, login, myProfile, updateMyProfile, deleteUser } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.post('/', register)

userRouter.post('/login', login)

userRouter.post('/logout', auth, logout)

userRouter.post('/logoutAll', auth, logoutAll)

userRouter.get('/me', auth, myProfile)

userRouter.patch('/me', auth, updateMyProfile)

userRouter.delete('/me', auth, deleteUser)

module.exports = userRouter