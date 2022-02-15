const veiculo = require('./modulo');
const calc = require('./calculadora');

console.log(veiculo.carro.modelo);

console.log(veiculo.acesso);

console.log(calc.adicao(2,2));
console.log(calc.subtracao(2,2));
console.log(calc.multiplicacao(2,2));
console.log(calc.divisao(25,0));

console.log(calc.fatorial(5));