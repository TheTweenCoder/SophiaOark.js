
let idade = parseInt(prompt("Qual é a tua idade?"));

if (idade < 18 && idade >= 0) {
    console.log("A pessoa é uma criança.");
}
else if (idade >= 60) {
    console.log("A pessoa é uma idoso.");
}
else if (idade >= 18) {
    console.log("A pessoa é uma adulto.");
}


// Para ajuda: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while