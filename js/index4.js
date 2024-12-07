function rectArea() {
    let num1 = parseInt(prompt("Diga a altura:"));
    let num2 = parseInt(prompt("Diga a largura:"));

    let area = num1 * num2;
    return area;
}

function circleArea() {
    let num1 = parseInt(prompt("Diga o raio:"));
    let area = num1 * num1 * Math.PI;
    return area;
}

while ((figura = prompt("Escolha a figura geometrica:( C = circulo, T = triangulo, R = rectangulo, Q = sair)")) != "Q") {
    if (figura == "C") {
        console.log("A area do circulo é: " + circleArea().toString());
    } else if (figura == "T") {
        console.log("A area do triangulo é: " + rectArea().toString() / 2);
    } else if (figura == "R") {
        console.log("A area do rectangulo é: " + rectArea().toString());
    }
}
