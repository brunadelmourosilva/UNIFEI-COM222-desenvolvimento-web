
// Bruna Delmouro da Silva - 2021001809

const operations = ['+', '-', '*'];
let firstValue;
let secondValue;
let operation;

const btnGenerateEquation = document.querySelector('#btnGerarQ');

const generateEquation = () => { 

    firstValue = Math.floor(Math.random() * 10).toString();
    secondValue = Math.floor(Math.random() * 10).toString();
    operation = Math.floor(Math.random() * operations.length)
    
    const equation = firstValue.concat(" ", operations[operation], " ", secondValue);

    console.log(equation);
    const areaEquacao = document.querySelector('#idAreaEquacao');
    areaEquacao.innerHTML = equation;
    areaEquacao.style.color = 'black';
    
};

btnGenerateEquation.addEventListener('click', generateEquation);

// ------- //

const btnValidateResult = document.querySelector('#btnValidarRes');
const input = document.querySelector('#resposta');
const value = document.querySelector('#idAreaResp');

const validateResult = () => {
    const firstNumberValue = Number(firstValue);
    const secondNumberValue = Number(secondValue);

    switch(operations[operation]) {
        case '+':
            result = firstNumberValue + secondNumberValue;
            break;
        case '-':
            result = firstNumberValue - secondNumberValue;
            break;
        case '*':
            result = firstNumberValue * secondNumberValue;
            break;
    }
    console.log(result);
    console.log(input.value);

    if(Number(input.value) === result) {
        value.innerHTML = 'Parabéns :)';
        value.style.color = 'green';
    } else {
        value.innerHTML = 'Deu Ruim. A resposta correta é '.concat(result);
        value.style.color = 'red';
    }
};

btnValidateResult.addEventListener('click', validateResult);