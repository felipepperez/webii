var carro = {
    modelo: "Argo",
    marca: "Fiat",
    ano: 2018,
    cor: "Branco",
    portas: 5,
    revisoes: ["2018-05-10","2018-08-25","2019-01-15"],
    info: function (){
        console.log("Carro: "+this.marca+" - "+this.modelo+" "+this.portas+" portas, Ano: "+this.ano+" Cor: "+this.cor+" Quantidade de revisões: "+this.revisoes.length);
    }
};
carro.info();

var carro = new Object();
carro.modelo = "Argo";
carro.marca = "Fiat";
carro.ano = "2018";
carro.cor = "Branco";
carro.portas = 5;
carro.revisoes = ["2018-05-10","2018-08-25","2019-01-15"];
carro.info = function (){
    console.log("Carro: "+this.marca+" - "+this.modelo+" "+this.portas+" portas, Ano: "+this.ano+" Cor: "+this.cor+" Quantidade de revisões: "+this.revisoes.length);
}
carro.info();


carro["cor"] = "Azul";
carro.modelo = "Siena";
carro.revisoes.push("2020-10-02");

carro.info();


console.log(typeof carro.revisoes);
delete carro.revisoes;
console.log(typeof carro.revisoes);