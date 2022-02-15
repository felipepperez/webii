var startTime = new Date();
console.time("Array");

var cont = 0;
[1,2,3,4,5,6,7,8,9,10,11,12,13,14].forEach(each=>{
    cont+=each;
})

console.log(cont);

console.timeEnd("Array");
var endTime = new Date() - startTime;
console.log(endTime);