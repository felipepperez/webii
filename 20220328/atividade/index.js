const http = require('http');
const fs = require('fs');
const url = require('url');
var formidable = require('formidable');

var moment = require('moment');

const server = http.createServer((req,res)=>{
    file = (req.url=="/")?"/vota.html":req.url;
    console.log(file);
    if(file == "/vota"){
        var form = new formidable.IncomingForm();
        form.parse(req,(err,fields,file)=>{
            console.log(fields);
            var dif = moment().diff(moment(fields.date),'years');
            if(dif<16){
                msg = "pode vota não fera!";
                img = "https://www.diariodocentrodomundo.com.br/wp-content/uploads/2018/07/bolso-chorao-600x447.jpg";
                cor = "red";
            }else if(dif<18){
                msg = "VotaSohSeQuizer!";
                img = "https://s.conjur.com.br/img/b/jair-bolsonaro8.png";
                cor = "orange";
            }else if(dif<60){
                msg = "Vote Vote Vote!";
                img = "https://static.cdn.pleno.news/2019/11/49051930907_6f4c3a2378_c.jpg";
                cor = "green";
            }else{
                msg = "Vai jogar bingo véio(a)!";
                img = "https://www.esmaelmorais.com.br/wp-content/uploads/2019/10/bolsonaro-velha-politica-1024x517.jpg";
                cor = "blue";
            }
            res.end(`<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Vota ou não vota</title>
                <!-- Compiled and minified CSS -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            </head>
            
            <body>
                <div class="container">
                    <div class="section">
                        <div class="row">
                            <div class="col s6 offset-s3">
                                <h4 class="center `+cor+`-text text-darken-5">Vota ou não vota</h4>
                                <h5 class="center `+cor+`-text text-lighten-4">`+msg+`</h5>
                                <div class="row">
                                    <div class="col s12 center">
                                        <img class="responsive-img circle" src="`+img+`">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            
                <!-- Compiled and minified JavaScript -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </body>
            
            </html>`);
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