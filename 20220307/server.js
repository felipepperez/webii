const http = require("http");
var colors = require("colors");
var url = require("url");

const server = http.createServer((req, res) => {
    var u = "http://localhost:3000"+req.url;
    var q = url.parse(u,true);

    console.log("host: ".red,q.host);
    console.log("pathname: ".red,q.pathname);
    console.log("search: ".red,q.search);

    var mes = q.query.mes;
    var ano = q.query.ano;

    console.log('data = '.green,mes+"/"+ano);

    if (q.pathname == "/favicon.ico") {
        res.writeHead(404);
        res.end();
    } else if(q.pathname == "/json") {
        res.setHeader('Content-type','application/json');
        var carro = {
            "modelo":"Argo","marca":"Fiat","ano":2019, "revisoes":["2018-05-10","2018-08-25"]
        };
        res.end(JSON.stringify(carro));
    }else{
        console.log("request.method:".yellow, req.method);
        console.log("request.url:".red, req.url);
        res.writeHead(200);
        res.write("<h1>Hello World!</h1>")
        res.end();
    }
});

server.listen(3000);