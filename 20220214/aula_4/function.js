function isEven(value){
    return value%2==0;
}

for(var i=0;i<10;i++)
    console.log(i,isEven(i));



var display_error = function (message){
    console.log("\x1b[31mErro: "+message+"\x1b[0m");
    console.log(this);
}

display_error("Valor fora da escala!");

var display_warning = (message) =>{
    console.log("\x1b[33mErro: "+message+"\x1b[0m");
    console.log(this);
}

display_warning("Atenção valor errado!");