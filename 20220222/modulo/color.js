var cores = { "preto": 30, "vermelho": 31, "verde": 32, "amarelo": 33, "azul": 34, "magenta": 35, "cyano": 36, "branco": 37 };
var bg = { "preto": 40, "vermelho": 41, "verde": 42, "amarelo": 43, "azul": 44, "magenta": 45, "cyano": 46, "branco": 47 };
var attr = { "bright": 1, "dim": 2, "underscore": 4, "blink": 5, "reverse": 7, "hidden": 8 };
exports.cor = function (msg, cor, bg_x = null, attr_x = null) {
    var str = (bg_x != null && bg[bg_x] != undefined) ? "\x1b[" + bg[bg_x] + "m" : "";
    str += (attr_x != null && attr[attr_x] != undefined) ? "\x1b[" + attr[attr_x] + "m" : "";
    str += (cores[cor] != undefined) ? "\x1b[" + cores[cor] + "m" + msg : msg;
    str += "\x1b[0m";
    return str;
}
