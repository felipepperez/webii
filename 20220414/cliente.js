import WebSocket from 'ws';
import moment from 'moment';
import colors from 'colors';


const client = new WebSocket('ws://localhost:8080');

var first = true;
client.on('open', function () {
    client.on('message', function (msg) {
        console.log(msg.toString());
        if (first) {
            colors.setTheme({
                custom: [msg.toString()]
            });
            first = false;
        }
    });

    var x = (Math.floor((Math.random() * 10))+1)*1000;
    setInterval(() => {
        client.send(moment().format('DD/MM/YYYY - hh:mm:ss - '+x).custom);
    }, x);
    
});


