const express = require('express');
const app = express();

//npm install ejs --save
app.set("view engine","ejs");

const moment = require('moment');

var S = require('string');

app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
});

app.get('/date/:date',(req,res)=>{
    var niver = moment(req.params.date);
    if(niver.isValid()){
        var hoje = moment();
        var dif = hoje.diff(niver,'years');
        var msg;
        var img;
        var cor;
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
        res.render("vota",{vota:msg,img:img,cor:cor});
    }else{
        res.send("<h2>Insira a data correta!</h2>");
    }
    
});


app.listen(3000);