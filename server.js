const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const formatMessage = require('./utils/message');
const {userJoin,getCurrentUser,getRoomUsers,userLeave} = require('./utils/users');
const { log } = require('console');


const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname,'public')));

const botName = 'chatChord';

// run when client connects
io.on("connection",socket=>{
    socket.on('joinRoom',({username,room})=>{
        const user = userJoin(socket.id,username,room);
        socket.join(user.room);
        // welcomes
        socket.emit('message',formatMessage(botName,'welcome to chatchord'));
        console.log('welcome success');

        // broadcast
        socket.broadcast.to(user.room).emit('message',formatMessage(botName,`${user.username} has joined`));
        console.log('broadcast success');

        // send users and room info
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users:getRoomUsers(user.room)
        });
    })
    
    // listen chatMessage
    socket.on('chatMessage',msg=>{
        const user = getCurrentUser(socket.id);
        console.log('eavesdropped message is = '+msg);
        io.to(user.room).emit('message',formatMessage(user.username,msg));
    })

    // runs when client disconnects
    socket.on('disconnect',()=>{
        const user = userLeave(socket.id);
        if(user){
            io.to(user.room).emit(
                'message',
                formatMessage(botName,`${user.username} has left`)
            );
        }
        // send users and room info
        io.to(user.room).emit('roomUsers',{
            room:user.room,
            users:getRoomUsers(user.room)
        });
    });
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT,()=>{console.log(`server running on port ${PORT}`)});
   