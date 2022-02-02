// https://medium.com/@folkertjanvanderpol/creating-a-simple-browser-chat-application-with-socket-io-ee0dce6f0a2b

// Import Express
const express = require('express');

// Create an Express server
const app = express();
// Retrieve HTTP server from the Express server
const server = require('http').createServer(app)
// Create Socket.io
const io = require('socket.io')(server)

// Make sure the files in the static folder are being send back when requested in the server file
const path = require('path');

app.use(
    express.static(path.join(__dirname, '/static'))
);

// We subscribe to Socket.io OnConnect event
io.on('connection', socket => {
    console.log('Some client connected');

    socket.on('chat', message => {
        console.log('message from client: ', message)
        io.emit('chat', {message, id: socket.id});
    });
});

// Define listening port from .env or 3000 by default
const port = process.env.PORT || 3000

// Listen to a specific port for the Express server
server.listen(port, ()=> {
    console.log(`listening on: ${port}`);
});
