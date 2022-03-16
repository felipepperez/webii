const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    var u = "http://localhost:3000"+req.url;
    var q = url.parse(u,true);


    var dir = "";
    if(q.pathname == '/'){
        dir = "index.html";
    }else{
        dir = q.pathname.substring(1);
    }

    var diretorio = __dirname + "\\www";
    fs.readFile(diretorio + "\\" + dir, (erro, html) => {
        if (erro) {
            res.writeHead(404);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
        }
    });
});

server.listen(3000);

