
const operations = ['+', '-', '*']
let firstValue = 0;
let secondValue = 0;
let result = 0;
let operation = 0;


// -------------------------

const btnEq = document.querySelector("#btnGera");
const eq = document.querySelector("#campoEq");

const gera = () => {
    firstValue = Math.floor(Math.random() * 10);
    secondValue = Math.floor(Math.random() * 10);
    operation = Math.floor(Math.random() * operations.length);

    eq.innerText = `${firstValue} ${operations[operation]} ${secondValue}`;
};

btnEq.addEventListener('click', gera);

// -------------------------

const btnValida = document.querySelector("#btnValida");
const input = document.querySelector("#resposta");
const resp = document.querySelector("#campoResp"); 

const valida = () => {
    
    switch(operations[operation]) {
        case '+':
            result = firstValue + secondValue;
            console.log(typeof(firstValue));
        break;
        case '*':
            result = firstValue * secondValue;
        break;
        case '-':
            result = firstValue - secondValue;
        break;
    }
    
    if(result === Number(input.value)){
        resp.innerText = "Correto! :)";
        resp.style.color = "green";
    } else {
        resp.innerText = `Errado! :( A resposta correta é ${result}`;
        resp.style.color = "red";
    }
};

btnValida.addEventListener('click', valida);
