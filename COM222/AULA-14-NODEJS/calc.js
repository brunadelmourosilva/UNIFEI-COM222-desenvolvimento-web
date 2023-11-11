
const hasOperator = process.argv.includes('-op');
const hasOperators = process.argv.includes('-opn');
let operator, opn1, opn2, result;

if(!hasOperator) {
    console.log("Necessário o parâmetro -op");
    process.exit();
} else {
    operator = process.argv[process.argv.indexOf('-op') + 1];

    if(!operator) {
        console.log("Necessário o operador");
        process.exit();
    }
}

if(!hasOperators) {
    console.log("Necessário o parâmetro -opn");
    process.exit();
} else {
    opn1 = process.argv[process.argv.indexOf('-opn') + 1]; //indexOf returns an index number, e.g: 2 + 1 = 3
    opn2 = process.argv[process.argv.indexOf('-opn') + 2];

    if(!opn1 || !opn2) {
    console.log("Necessário o operando");
    process.exit();
    }
}

opn1 = Number(opn1);
opn2 = Number(opn2);

switch (operator) {
    case '+':
        result = opn1 + opn2;
        break;
    case '-':
        result = opn1 - opn2;
        break;
    case '*':
        result = opn1 * opn2;
        break;
    default:
        break;
}

console.log(`The result of the ${opn1} ${operator} ${opn2} = ${result}`);