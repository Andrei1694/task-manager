const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, './', '.env') });
require('./utils/mongoose')
const http = require('http')
const app = require('./app')
const PORT = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})