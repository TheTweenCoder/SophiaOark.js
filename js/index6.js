let alunos = [
    { nome: "Eleven", score: 95 },
    { nome: "Mike Wheeler", score: 85 },
    { nome: "Dustin Henderson", score: 90 },
    { nome: "Lucas Sinclair", score: 80 },
    { nome: "Max Mayfield", score: 84 },
    { nome: "Will Byers", score: 75 },
    { nome: "Joyce Byers", score: 70 },
    { nome: "Jim Hopper", score: 88 },
    { nome: "Nancy Wheeler", score: 82 },
    { nome: "Jonathan Byers", score: 78 },
    { nome: "Steve Harrington", score: 80 },
    { nome: "Robin Buckley", score: 26 },
    { nome: "Bob Newby", score: 65 },
    { nome: "Murray Bauman", score: 75 },
    { nome: "Billy Hargrove", score: 60 }

]
function updateTable(estudantes) {
    const tbody = document.querySelectorAll('.tableBody');
    const average = document.querySelectorAll('.averageAge')
    let tr;
    let tdName;
    let thJob;
    let tdAge;
    for (let position = 0; position < estudantes.length; position++) {
        tr = document.createElement('tr');
        tdAge = document.createElement('td');
        tdName.appendChild(document.createTextNode(estudantes[position].nome));
        tdJob.appendChild(document.createTextNode(estudantes[position].job));
        tdAge.appendChild(document.createTextNode(estudantes[position].age));
        tbody.eppendChild(tdName);
        tr.appendChild(tdJob);
        tr.appendChild(tdAge);
    }
    average.append(document.createTextNode(calculaMediaNotas(alunos)))

}
function calculaMediaNotas(alunosNotas) {
    let notasTotal = 0;
    for (let position = 0; position < alunosNotas.length; position++) {
        notasTotal = alunosNotas[position].score + notasTotal
        console.log(alunosNotas[position].score)
    }
    return notasTotal / alunosNotas.length
}


document.write(calculaMediaNotas(alunos).toString())