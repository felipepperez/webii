var S = require('string');
var colors = require('colors');
var moment = require('moment');

console.log(S(2).s+2);

console.log(S('<a>foo</a>').between('<a>', '</a>').s);

console.log(S("Ola mundo Ola").count("Ola"));

console.log(S("string").contains("stra"));

console.log(S("s").isEmpty());

console.log(S("teste").capitalize().s);

console.log("O texto é verde".green);

console.log("O texto é vermelho e sublinhado".underline.red);

console.log("Gilberto".trap);

var hoje = moment();

var amanha = moment().add('1','days');
var ontem = moment().subtract('1','days');

console.log(amanha.diff(ontem,'hours'));