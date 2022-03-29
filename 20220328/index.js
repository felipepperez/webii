//npm install express --save
const express = require('express');
const app = express();

//npm install ejs --save
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

//npm install momento --save
const moment = require('moment');

app.get('/', (req, res) => {
    res.redirect('/vota.html');
});

app.get('/vota.html', (req, res) => {
    res.sendFile(__dirname + '/vota.html');
});

app.post('/vota', (req, res) => {
    var dif = moment().diff(moment(req.body.date), 'years');

    console.log(moment(req.body.date).format("DD/MM/YYYY"));

    var msg;
    var img;
    var cor;
    if (dif < 16) {
        msg = "pode vota não fera!";
        img = "https://www.diariodocentrodomundo.com.br/wp-content/uploads/2018/07/bolso-chorao-600x447.jpg";
        cor = "red";
    } else if (dif < 18) {
        msg = "VotaSohSeQuizer!";
        img = "https://s.conjur.com.br/img/b/jair-bolsonaro8.png";
        cor = "orange";
    } else if (dif < 60) {
        msg = "Vote Vote Vote!";
        img = "https://static.cdn.pleno.news/2019/11/49051930907_6f4c3a2378_c.jpg";
        cor = "green";
    } else {
        msg = "Vai jogar bingo véio(a)!";
        img = "https://www.esmaelmorais.com.br/wp-content/uploads/2019/10/bolsonaro-velha-politica-1024x517.jpg";
        cor = "blue";
    }
    res.render("vota", { vota: msg, img: img, cor: cor, nome: req.body.nome });
});

app.listen(3000);