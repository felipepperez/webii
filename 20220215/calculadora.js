exports.adicao = (x,y)=>x+y;
exports.subtracao = (x,y)=>x-y;
exports.multiplicacao = (x,y)=>x*y;
exports.divisao = (x,y)=>x/((y==0)?1:y);
exports.fatorial = (x)=>{
    var fat = 1;
    for(var i=x;i>0;i--){
        fat*=i;
    }
    return fat;
}