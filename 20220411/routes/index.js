var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

var users = [
  { usuario: "fpp1", senha: "fpp1", count: 0 },
  { usuario: "fpp2", senha: "fpp2", count: 0 },
  { usuario: "fpp3", senha: "fpp3", count: 0 }
];

router.get('/count', function (req, res, next) {
  res.render('count', { users: users });
});

router.post('/form', function (req, res, next) {
  console.log(req.body);
  var user = -1;
  users.forEach((element, index) => {
    var us = req.body.username == element.usuario;
    var pa = req.body.password == element.senha
    if (us && pa) {
      user = index;
      element.count++;
    }
  });
  if (user >= 0) {
    res.render('form', { username: users[user].usuario, count: users[user].count });
  } else {
    res.redirect('/');
  }
});

module.exports = router;
