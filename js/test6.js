let alunos = [
    { nome: "Luca Moretti", job: "  Executive Chef", age: "45" },
    { nome: "Violet Harper", job: "  Executive Sous Chef", age: "35" },
    { nome: "Nicola Hadar", job: "  Pastry Chef", age: "32" },
    { nome: "Dale Dragan", job: "  Line Cook", age: "28" },
    { nome: "Goldie Fabian", job: "  Manager", age: "35" },
    { nome: "Conway Levitt", job: "  Host", age: "39" },
    { nome: "Michael Fay", job: "  Bartender", age: "25" },
    { nome: "Noel Waller", job: "  Server", age: "37" },
    { nome: "Patrick Shepard", job: "  Janitor", age: "22" },
    { nome: "Mary Anne Ikin", job: "  Busser", age: "23" },
    { nome: "Emma Bolton", job: "  Prep Cook", age: "30" },
    { nome: "Ryan Keller", job: "  Dishwasher", age: "20" },
    { nome: "Zachary Miles", job: "  Reservationist", age: "31" },
    { nome: "Leah Martinez", job: "  Cashier", age: "24" },
    { nome: "Nathan Bishop", job: "  Chef de Partie", age: "37" },
    { nome: "Grace Anderson", job: "  Commis Chef", age: "22" },
];

let reservations = [
    { firstName: "Chris", lastName: "  Rock", dateAndtime: "09/27/2025", emailAdd: "chrisRockster27@gmail.com", numberOfguests: "2" },
];

function adicionarAluno(nome, job, age) {
    alunos.push({ nome: nome, job: job, age: age });
}

function removerAluno(nomeAluno) {
    const position = alunos.findIndex(aluno => aluno.nome === nomeAluno);
    if (position !== -1) {
        alunos.splice(position, 1);
    }
}



function updateTableStaff(alunos) {
    const tbody = document.querySelector('.tableBody');

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    const average = document.querySelector('.averageAge')
    let tr;
    let tdName;
    let tdJob;
    let tdAge;
    for (let position = 0; position < alunos.length; position++) {
        tr = document.createElement('tr');
        tdAge = document.createElement('td');
        tdName = document.createElement('td');
        tdJob = document.createElement('td');
        tdAge.appendChild(document.createTextNode(alunos[position].age));
        tdJob.appendChild(document.createTextNode(alunos[position].job));
        tdName.appendChild(document.createTextNode(alunos[position].nome));
        tbody.appendChild(tr);
        tr.appendChild(tdName);
        tr.appendChild(tdJob);
        tr.appendChild(tdAge);

    }

}

function updateTableReservation(reservations) {
    const tbody = document.querySelector('.tableBodies');

    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    let tr;
    let tdfirstName;
    let tdlastName;
    let tdemailAdd;
    let tdDate;
    let tdnumberOfguests;
    for (let position = 0; position < reservations.length; position++) {
        tr = document.createElement('tr');
        tdfirstName = document.createElement('td');
        tdlastName = document.createElement('td');
        tdemailAdd = document.createElement('td');
        tdDate = document.createElement('td');
        tdnumberOfguests = document.createElement('td');
        tdfirstName.appendChild(document.createTextNode(reservations[position].firstName));
        tdlastName.appendChild(document.createTextNode(reservations[position].lastName));
        tdemailAdd.appendChild(document.createTextNode(reservations[position].emailAdd));
        tdDate.appendChild(document.createTextNode(reservations[position].dateAndtime));
        tdnumberOfguests.appendChild(document.createTextNode(reservations[position].numberOfguests));
        tbody.appendChild(tr);
        tr.appendChild(tdfirstName);
        tr.appendChild(tdlastName);
        tr.appendChild(tdDate);
        tr.appendChild(tdemailAdd);
        tr.appendChild(tdnumberOfguests);

    }

}

updateTableReservation(reservations);
updateTableStaff(alunos)

const submitR = document.querySelector(".submitR");

submitR.addEventListener("click", function (event) {
    if (studentName.value !== "" && studentName.value !== "") {
        adicionarAluno(studentName.value, Number(studentScore.value));
        updateTableReservation()
    }
});


const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown-menu");
const square = document.querySelector(".square");

menu.addEventListener("mouseover", function (e) {
    dropdown.classList.add("open_menu");
    square.classList.add("open_menu");
});

menu.addEventListener("mouseout", event => {
    dropdown.classList.remove("open_menu");
    square.classList.remove("open_menu");
});

