const http = require('http');
const fs = require('fs');
const url = require('url');
var formidable = require('formidable');

const server = http.createServer((req,res)=>{
    file = (req.url=="/")?"/login.html":req.url;
    console.log(file);
    if(file == "/login"){
        var form = new formidable.IncomingForm();
        form.parse(req,(err,fields,file)=>{
            console.log(fields);
            if(fields.login=="felipe"&&fields.senha=="felipe"){
                res.writeHeader(200,{'Content-Type':'text/html'});
				res.write('<h1>'+fields.login+' - '+fields.senha+'</h1>');
				res.end();
            }else{
                res.writeHeader(200,{'Content-Type':'text/html'});
				res.write("Usuario ou senha incorretos!");
				res.end();
            }
        });
    }else{
        var diretorio = __dirname;

        var q = url.parse(file,true);

        fs.readFile(diretorio+q.pathname,(erro,html)=>{
            if(erro){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write("Pagina inválida");
                res.end();
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(html);
            }
        });
    }
});

server.listen(3000);