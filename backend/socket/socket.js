import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:'http://localhost:3000',
        methods:['GET', 'POST'],
    },
});

io.on('connection', (socket)=>{
    console.log('user connected', socket.id);
})
const PORT = 3000; // Replace with your desired port number
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export { app, io, server };

