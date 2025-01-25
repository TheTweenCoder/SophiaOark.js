
let max = 99
let min = 1
let count = 0
let magicNumber = Math.round(Math.random() * (max - min) + min);



while (true) {
    let idade = parseInt(prompt("Advinha um numero ente 1 é 99."));

    if (idade == magicNumber) {
        console.log("Voce advinhou a numero certo! " + "Voce consegui em " + count + " tentativas. 🥳")
        break;
    } else if (idade < magicNumber) {
        console.log("Voce advinhou o numero errado! Tenta um numero maior. 😢")
        count++;
    }
    else if (idade > magicNumber) {
        console.log("Voce advinhou o numero errado! Tenta um numero menor.  😢")
        count++;
    }
}

let i = 0;
while (i < alunos.length) {
    document.write(alunos[i].nome + " Nota: " + alunos[i].score + "<br>");
    i++;
}

//// Para ajuda: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
