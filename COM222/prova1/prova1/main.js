const btnSoma = document.querySelector("#opSoma");
const btnSub = document.querySelector("#opSub");
const btnMulti = document.querySelector("#opMulti");
const btnIgual = document.querySelector("#opIgual");

const inputOp1 = document.querySelector("#op1");
const inputOp2 = document.querySelector("#op2");

const operacao = document.querySelector("#operacao");

const labelResultado = document.querySelector("#resultado");

//----------------------

const soma = () =>{
    operacao.innerText = "+";
}

btnSoma.addEventListener('click', soma);

//----------------------

const subtracao = () =>{
    operacao.innerText = "-";
}

btnSub.addEventListener('click', subtracao);

//---------------------

const multiplicacao = () =>{
    operacao.innerText = "*";
}

btnMulti.addEventListener('click', multiplicacao);

//----------------------

const geraResultado = () =>{

    if(inputOp1.value === "" || inputOp2.value === "") {
        alert("Operandos não podem ser vazios!");
    }

    let resultado = 0;
    let op1 = Number(inputOp1.value);
    let op2 = Number(inputOp2.value);

    if(operacao.innerText === "+") {
        resultado = op1 + op2;
    } else if (operacao.innerText === "-") {
        resultado = op1 - op2;
    } else {
        resultado = op1 * op2;
    }

    labelResultado.style.color = "black";
    labelResultado.innerText = resultado;
}

btnIgual.addEventListener('click', geraResultado);