const express = require('express')
const path = require('path')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(userRouter)
app.use(taskRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports = app