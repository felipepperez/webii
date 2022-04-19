import WebSocket from 'ws';
import colors from 'colors';
import prompt from 'prompt';

prompt.start();

var username = "";
prompt.get('username', function (err, result) {
    username = result.username;
    const client = new WebSocket('ws://192.168.100.98:8080');

    var first = true;
    client.on('open', function () {
        client.on('message', function (msg) {
            console.log(msg.toString());
            message();
            if (first) {
                colors.setTheme({
                    custom: [msg.toString()]
                });
                first = false;
            }
        });

    });

    function message(){
        prompt.get('message',function(err,result){
            client.send((username+": "+result.message).custom);
            message();
        })
    }
});


