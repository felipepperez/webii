var carro = {modelo:"Argo",marca:"Fiat",info:function () {
    console.log("Carro: "+this.marca+" - "+this.modelo);
}};

var acesso = true;

module.exports = {carro:carro,acesso:acesso};

