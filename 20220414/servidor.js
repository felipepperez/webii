import WebSocket, { WebSocketServer } from 'ws';

const server = new WebSocketServer({port: 8080});

var colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan'];
var cont = 0;
server.on('connection',function(ws){
    ws.on('message',function(msg){
        console.log(msg.toString());
    });
    ws.send(colors[cont++]);
});