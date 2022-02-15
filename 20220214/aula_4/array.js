var notas = [
    [7,7.5,6,0],
    [5.5,10,2,0],
    [6,9.5,8,0]
];

var num =0;
notas.forEach(aluno=>{
    num++;
    var media = 0;
    for(var i in aluno){
        if(i!=3)
            media+=aluno[i];
        else
            aluno[i]=media/3;
    }
    console.log("Media aluno "+num,aluno[3]);
});