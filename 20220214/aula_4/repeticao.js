var arr = [1, 2, 3, 4, 5, 6];

for (var n in arr) {
    console.log(arr[n]);
}

arr.forEach(each => {
    console.log(each);
})


for (var i = 0; i < 6; i++) {
    if (arr[i] % 2 == 0)
        break;
    console.log("break", arr[i]);
}

for (var i = 0; i < 6; i++) {
    if (arr[i] % 2 == 0)
        continue;
    console.log("continue", arr[i]);
}