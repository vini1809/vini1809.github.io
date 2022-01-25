var input1 = document.querySelector("#input-texto");
input1.focus();
var output1 = document.querySelector("#msg");
var botao1 = document.querySelector("#btn-cripto");
var botao2 = document.querySelector("#btn-descripto");
var botao3 = document.querySelector("#btn-copy");


function encriptar() {
    var text = input1.value;
    msg = "";

    if (/^[a-z ,.!?;:()]+$/g.test(input1.value)) {
        for (var i = 0; i < text.length; i++) {
            if (text[i] == "e") {
                msg = msg + "enter";
            } else if (text[i] == "i") {
                msg = msg + "imes";
            } else if (text[i] == "a") {
                msg = msg + "ai";
            } else if (text[i] == "o") {
                msg = msg + "ober";
            } else if (text[i] == "u") {
                msg = msg + "ufat";
            } else {
                msg = msg + text[i];
            }
        }
        output1.value = msg;
    } else {
        output1.value = "Erro: apenas letras minusculas e sem acento sao aceitas."
    }
}

botao1.onclick = encriptar;


function desencriptar(texto) {
    var text = input1.value;
    msg = text;
    msg = msg.replaceAll("enter", "e");
    msg = msg.replaceAll("ai", "a");
    msg = msg.replaceAll("imes", "i");
    msg = msg.replaceAll("ober", "o");
    msg = msg.replaceAll("ufat", "u");

    output1.value = msg;
}


botao2.onclick = desencriptar;


function copiar() {
    navigator.clipboard.writeText(output1.value).then(function () {
    }, function () {
    });

}

botao3.onclick = copiar;