// https://medium.com/@folkertjanvanderpol/creating-a-simple-browser-chat-application-with-socket-io-ee0dce6f0a2b

// Import Express
const express = require('express');

// Create an Express server
const app = express();
// Retrieve HTTP server from the Express server
const server = require('http').createServer(app)

// Make sure the files in the static folder are being send back when requested in the server file
const path = require('path');

app.use(
    express.static(path.join(__dirname, '/static'))
);

// Define listening port from .env or 3000 by default
const port = process.env.PORT || 3000

// Listen to a specific port for the Express server
server.listen(port, ()=> {
    console.log(`listening on: ${port}`);
});
