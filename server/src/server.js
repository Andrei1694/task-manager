const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, './', '.env') });
require('./utils/mongoose')
const http = require('http')
const app = require('./app');
const { mongoConnect } = require('./utils/mongoose');
const PORT = process.env.PORT || 3000
const server = http.createServer(app)


async function startServer() {
    await mongoConnect();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();