const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routers/api');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'backend', 'public')));

app.use('/v1', api);

app.get('/*', (req, res) => {
    console.log("wow")
    console.log(path.join(__dirname, 'public', 'index.html'))
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;