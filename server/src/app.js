const express = require('express')
const path = require('parse-json')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(userRouter)
app.use(taskRouter)

module.exports = app