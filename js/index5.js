let numero1 = parseInt(prompt("Digite um número aleatório. Digite 'S' para sair."));
let numero2 = parseInt(prompt("Digite um número aleatório de novo. Digite 'S' para sair."));

while (true) {
    if (numero1 < numero2) {
        console.log("O numero maior é" + numero1 + ".");
    } else if (numero1 > numero2) {
        console.log("O numero maior é" + numero2 + ".");
    } else if (numero1 = numero2) {
        console.log("O numeros sao iguais.");
    }
}