let dia = parseInt(prompt("Qual dia é hoje?"));
switch (dia) {
    case 1:
        console.log('Hoje e Domingo.');
        break;

    case 2:
        console.log('Hoje é Segunda-feira.');
        break;

    case 3:
        console.log('Hoje é Terça-feira.');
        break;

    case 4:
        console.log('Hoje é Quarta-feira.');
        break;

    case 5:
        console.log('Hoje é Quinta-feira.');
        break;

    case 6:
        console.log('Hoje é Quinta-feira.');
        break;

    case 7:
        console.log('Hoje é Sabado.');
        break;

    default:
        console.log(`Desculpa não entendi o que dia é ${dia}. Tentar novamente.`);
}

// Para ajuda: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while