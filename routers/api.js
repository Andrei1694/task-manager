const express = require('express');

const taskRouter = require('./task');
const userRouter = require('./user');

const api = express.Router();

api.use('/tasks', taskRouter);
api.use('/user', userRouter);

module.exports = api;