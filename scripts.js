var numeroAnterior = document.getElementById("numeroAnterior")
var numeroAtual = 0;

function diminuir() {
    numeroAtual = numeroAtual - 1;
    numeroAnterior.innerHTML = numeroAtual;
}

function aumentar() {
    numeroAtual = numeroAtual + 1;
    numeroAnterior.innerHTML = numeroAtual;
}