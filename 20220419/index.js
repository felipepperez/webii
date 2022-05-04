const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`listening on PORT:${PORT}`);
});

var colors = ['IndianRed', 'PaleVioletRed', 'Orange', 'MediumPurple', 'SlateBlue', 'DarkGreen', 'OliveDrab'];

var block = ["░","⣿",">","<","▀"];

var cont = 0;
io.on('connection', (socket) => {
    var nome = "";
    var color = "";
    console.log('a user connected');
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        var libera = true;
        block.forEach((blocked)=>{
            if(msg.indexOf(blocked)>=0)
                libera = false;
        })
        if(!libera)
            socket.broadcast.emit('chat message',{msg:"Mensagem Bloqueada",name:nome,color:color});
        else
            socket.broadcast.emit('chat message',{msg:msg,name:nome,color:color});
    });
    socket.on('name', (name) => {
        console.log('name user: ' + name);
        var libera = true;
        block.forEach((blocked)=>{
            if(name.indexOf(blocked)>=0)
                libera = false;
        })
        if(!libera){
            nome = "Nome BLOQUEADO";
        }else{
            nome = name;
        }
        socket.broadcast.emit('user',{name:nome,color:color});
        //io.emit('chat message',msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
        if(!nome=="")
        socket.broadcast.emit('exit',{name:nome,color:color});
    });
    color = colors[cont++];
    socket.emit('color',color);
    cont = cont == colors.length ? 0 : cont;
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/socket.io/socket.io.js', (req, res) => {
    res.sendFile(__dirname + '/socket.io.js');
});

app.use(express.static('public'));