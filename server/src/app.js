const express = require('express')
const path = require('path')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(userRouter)
app.use(taskRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});
module.exports = app