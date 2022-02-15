var reset = "\x1b[0m";
var color = "";

for (var i = 30; i < 38; i++) {
    color = "\x1b[" + i + "m";
    console.log(color + "%s" + reset, "olá");
}

for (var i = 40; i < 48; i++) {
    color = "\x1b[" + i + "m";
    console.log(color + "%s" + reset, "olá");
}

console.log("\x1b[44m\x1b[36m%s\x1b[0m","Background blue color cyan");